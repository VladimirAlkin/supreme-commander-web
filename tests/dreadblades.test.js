/* Dreadblades (Chaos Knights army rule, taken by the five Chaos armies): limits, Warlord, enhancements, references.
   node tests/dreadblades.test.js [-v]   exit code 1 on any failure. */
const fs = require('fs'), path = require('path'), assert = require('assert');
const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data.js')), Engine = require(path.join(ROOT, 'engine.js')), RI = require(path.join(ROOT, 'import.js'));
const FX = path.join(__dirname, 'fixtures', 'import');
const ARMIES = {
  chaosSpaceMarines: 'chaos_space_marines', worldEaters: 'world_eaters', deathGuard: 'death_guard',
  thousandSons: 'thousand_sons', emperorsChildren: 'emperors_children',
};
let pass = 0; const fails = [];
const t = (name, fn) => { try { fn(); pass++; } catch (e) { fails.push(`${name}: ${e.message}`); } };

let seq = 0;
const load = id => { const res = RI.run(fs.readFileSync(path.join(FX, ARMIES[id] + '_dreadblades_synthetic.txt'), 'utf8'), DATA, Engine); assert(res.ok, 'import ' + id); return res.roster; };
const dsb = (r, msg) => Engine.validate(r, DATA).filter(x => x.severity === 'error' && /Dreadblades/.test(x.message) && (!msg || msg.test(x.message)));
const errs = r => Engine.validate(r, DATA).filter(x => x.severity === 'error').map(x => x.message);
const add = (r, id) => { const u = { instanceId: 'x' + (++seq), datasheetId: id, size: 1, wargear: {}, enhancementId: null, attachedTo: null, notes: '', customName: '' }; r.units.push(u); return u; };
const without = (r, id) => { r.units = r.units.filter(u => u.datasheetId !== id); return r; };
const KNIGHT = 'knight_despoiler', DOG = 'war_dog_brigand';

Object.keys(ARMIES).forEach(id => {
  const fd = DATA.factionData[id];
  t(`${id}: group is a reference to chaosKnights, 20 units, no copies`, () => {
    const g = fd.alliedFactions.find(a => a.rule === 'Dreadblades');
    assert(g && g.unitsFrom && g.unitsFrom.source === 'chaosKnights', 'group missing');
    assert.strictEqual(Engine.refUnits(fd, DATA).filter(x => x.group === g).length, 20);
    assert(!fd.units.some(u => u.faction === 'Chaos Knights'), 'a Chaos Knights datasheet was copied into the army');
  });
  t(`${id}: 1 TITANIC is legal`, () => { const r = load(id); assert.deepStrictEqual(dsb(r), []); });
  t(`${id}: 2 TITANIC is an error`, () => { const r = load(id); add(r, KNIGHT); assert(dsb(r, /2 TITANIC models; the limit is 1/).length, errs(r).join(' | ')); });
  t(`${id}: 3 WAR DOG legal, 4 an error`, () => {
    const r = without(load(id), KNIGHT); add(r, DOG); add(r, DOG); add(r, DOG);
    assert.deepStrictEqual(dsb(r), []);
    add(r, DOG); assert(dsb(r, /4 WAR DOG models; the limit is 3/).length, errs(r).join(' | '));
  });
  t(`${id}: TITANIC + WAR DOG is an error (one or the other)`, () => { const r = load(id); add(r, DOG); assert(dsb(r, /not both/).length, errs(r).join(' | ')); });
  t(`${id}: the catalogue closes the other branch and the full one`, () => {
    const r = load(id), ctx = Engine.ctxFor(r, DATA), dog = ctx.unitById[DOG], kn = ctx.unitById[KNIGHT];
    assert(/already took TITANIC/.test(Engine.allyBlock(dog, r, DATA) || ''), 'War Dog should be closed after a Titanic');
    assert(/limit 1 reached/.test(Engine.allyBlock(kn, r, DATA) || ''), 'second Titanic should be closed');
    const r2 = without(load(id), KNIGHT); add(r2, DOG); add(r2, DOG); add(r2, DOG);
    assert(/limit 3 reached/.test(Engine.allyBlock(ctx.unitById[DOG], r2, DATA) || ''));
  });
  t(`${id}: the Knight cannot be the Warlord`, () => {
    const r = load(id), k = r.units.find(u => u.datasheetId === KNIGHT); r.warlordUnitId = k.instanceId;
    assert(errs(r).some(e => /Warlord/i.test(e) && /Despoiler|Dreadblades|allied/i.test(e)), 'no Warlord error: ' + errs(r).join(' | '));
  });
  t(`${id}: the Knight cannot take an enhancement`, () => {
    const r = load(id), k = r.units.find(u => u.datasheetId === KNIGHT), ctx = Engine.ctxFor(r, DATA);
    const e = Object.values(ctx.allEnh)[0]; assert(e, 'army has enhancements');
    assert(/cannot take enhancements/.test(Engine.enhancementBlock(e, k, r, DATA) || ''), 'enhancementBlock: ' + Engine.enhancementBlock(e, k, r, DATA));
  });
  t(`${id}: no points cap for the group; a 785-pt Asterius is legal`, () => {
    const r = without(load(id), KNIGHT); add(r, 'chaos_acastus_knight_asterius');
    assert(!Engine.alliedPtsInfo(r, DATA).some(i => /Dreadblades|Chaos Knights/.test(i.label)), 'a points cap appeared');
    assert(!errs(r).some(e => /cap/i.test(e) && /Dreadblades|Chaos Knights/.test(e)), errs(r).join(' | '));
  });
  t(`${id}: faction keyword stays CHAOS KNIGHTS, no host keyword added`, () => {
    const r = load(id), ctx = Engine.ctxFor(r, DATA), kws = [...Engine.keywordsOf(ctx.unitById[KNIGHT], ctx, r.units.find(u => u.datasheetId === KNIGHT))].map(k => String(k).toLowerCase());
    assert(kws.includes('chaos knights'), kws.join(','));
    assert(!kws.includes(String(fd.armyFaction).toLowerCase()), 'host faction keyword leaked: ' + kws.join(','));
  });
});
/* an existing group of a host keeps working (Cult of the Dark Gods: 250 pts at Incursion, Heretic Astartes keyword) */
t('chaosSpaceMarines: Cult of the Dark Gods cap still applies next to Dreadblades', () => {
  const r = load('chaosSpaceMarines'); r.battleSize = 'incursion';
  for (let i = 0; i < 6; i++) { const u = add(r, 'khorne_berzerkers'); u.size = 10; }
  assert(errs(r).some(e => /Cult of the Dark Gods/.test(e) && /cap/.test(e)), errs(r).join(' | '));
  assert.deepStrictEqual(dsb(r), []);
});

console.log(`dreadblades tests: ${pass} passed` + (fails.length ? `, ${fails.length} FAILED` : ''));
fails.slice(0, 10).forEach(f => console.log('  FAIL ' + f));
process.exit(fails.length ? 1 : 0);
