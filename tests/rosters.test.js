/* Saved-roster tests: the lists users already have on their phones must keep
   opening after a patch. Fixtures: tests/fixtures/rosters/*.json, one or more
   per army, stored in the app's saved-roster shape with the points they had.

   node tests/rosters.test.js            check (exit 1 on failure)
   node tests/rosters.test.js --update   rewrite fixtures from tests/fixtures/import/*.txt
                                         plus one generated list per army without one;
                                         run after a patch, the diff is the points report
   Checks per fixture:
     1. validate() and points() do not throw on the list as saved;
     2. points equal the stored ones — a change means a patch moved points: the
        failure lists them; accept with --update and name them in the patch report;
     3. a list saved on an older data version gets the "older data version" warning;
     4. a list with a removed unit, enhancement, detachment or wargear choice
        still validates without throwing (a patch may remove any of them).
   Also: every army in data.js has at least one fixture.                      */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data.js')), Engine = require(path.join(ROOT, 'engine.js')), RI = require(path.join(ROOT, 'import.js'));
const DIR = path.join(__dirname, 'fixtures', 'rosters'), IMP = path.join(__dirname, 'fixtures', 'import');
const clone = x => JSON.parse(JSON.stringify(x));
const total = r => { const p = Engine.points(r, DATA); return Object.values(p.per || {}).reduce((s, u) => s + (u.total || 0), 0); };
const perUnit = r => { const p = Engine.points(r, DATA); return r.units.map(u => `${u.datasheetId}:${(p.per[u.instanceId] || {}).total}`); };

function generated(army) {
  const fd = DATA.factionData[army];
  const det = (fd.detachments || [])[0];
  const units = [], seen = new Set();
  for (const u of fd.units || []) {
    if (units.length >= 6) break;
    if (seen.has(u.role) && units.length < 4) continue;
    if (!(u.sizes && u.sizes.length)) continue;
    seen.add(u.role);
    units.push({ instanceId: 'g' + units.length, datasheetId: u.id, size: u.sizes[0].models, wargear: {}, enhancementId: null, attachedTo: null, notes: '', customName: '' });
  }
  return { name: `generated ${army}`, factionId: army, battleSize: 'strike', detachmentIds: det ? [det.id] : [], forceDisposition: det && det.dispositions ? det.dispositions[0] : null, subfaction: null, warlordUnitId: null, units, notes: '' };
}

if (process.argv.includes('--update')) {
  fs.mkdirSync(DIR, { recursive: true });
  for (const f of fs.readdirSync(DIR)) if (f.endsWith('.json')) fs.unlinkSync(path.join(DIR, f));
  const lists = [];
  for (const f of fs.readdirSync(IMP).filter(f => f.endsWith('.txt')).sort()) {
    const res = RI.run(fs.readFileSync(path.join(IMP, f), 'utf8'), DATA, Engine);
    if (res.ok) lists.push([f.replace(/\.txt$/, ''), res.roster]);
  }
  for (const army of Object.keys(DATA.factionData)) if (!lists.some(([, r]) => r.factionId === army)) lists.push([`generated_${army}`, generated(army)]);
  for (const [name, r] of lists) {
    r.dataVersion = Engine.dataVersionFor(r.factionId, DATA);
    fs.writeFileSync(path.join(DIR, name + '.json'), JSON.stringify({ roster: r, points: total(r), units: perUnit(r) }, null, 1) + '\n');
  }
  console.log(`rosters: wrote ${lists.length} fixtures to tests/fixtures/rosters`);
  process.exit(0);
}

let pass = 0; const fails = [], moved = [];
function t(name, fn) { try { fn(); pass++; } catch (e) { fails.push(`${name}: ${e.message}`); } }
const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter(f => f.endsWith('.json')).sort() : [];
const covered = new Set();

for (const f of files) {
  const fx = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')), name = f.replace(/\.json$/, '');
  covered.add(fx.roster.factionId);
  t(`${name} opens`, () => { Engine.validate(clone(fx.roster), DATA); Engine.points(clone(fx.roster), DATA); });
  t(`${name} points`, () => {
    const r = clone(fx.roster), now = total(r);
    if (now !== fx.points) {
      const was = new Map(fx.units.map(s => s.split(':'))), diff = perUnit(r).map(s => s.split(':')).filter(([id, p]) => was.get(id) !== p).map(([id, p]) => `${id} ${was.get(id)}→${p}`);
      moved.push(`${name}: ${fx.points} → ${now} (${[...new Set(diff)].join(', ')})`);
      throw new Error(`points ${fx.points} → ${now}`);
    }
  });
  t(`${name} old version warns`, () => {
    const r = clone(fx.roster); r.dataVersion = '0000-old';
    const w = Engine.validate(r, DATA).filter(x => x.severity === 'warning' && /older data version/i.test(x.message));
    if (!w.length) throw new Error('no "older data version" warning');
  });
  const broken = {
    'removed unit': r => { r.units.push({ instanceId: 'x1', datasheetId: '__removed_unit', size: 5, wargear: {}, enhancementId: null, attachedTo: null }); },
    'removed enhancement': r => { if (r.units[0]) r.units[0].enhancementId = '__removed_enh'; },
    'removed detachment': r => { r.detachmentIds = ['__removed_det']; },
    'removed wargear': r => { if (r.units[0]) r.units[0].wargear = { __removed_opt: 2 }; },
    'attached to removed': r => { if (r.units[0]) r.units[0].attachedTo = '__gone'; },
  };
  for (const [what, mut] of Object.entries(broken)) t(`${name} ${what} does not crash`, () => { const r = clone(fx.roster); mut(r); Engine.validate(r, DATA); Engine.points(r, DATA); });
}
t('every army has a roster fixture', () => {
  const miss = Object.keys(DATA.factionData).filter(a => !covered.has(a));
  if (miss.length) throw new Error(`no fixture for ${miss.join(', ')} — node tests/rosters.test.js --update`);
});

if (moved.length) console.log('Points moved (accept after review: node tests/rosters.test.js --update):\n  ' + moved.join('\n  '));
if (fails.length) { console.log(`rosters: ${pass} passed, ${fails.length} FAILED`); fails.slice(0, 10).forEach(f => console.log('  ' + f)); process.exit(1); }
console.log(`rosters: ${pass} passed (${files.length} saved lists)`);
