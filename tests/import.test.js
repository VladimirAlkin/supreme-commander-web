/* Roster import tests: run the parser on real exports (tests/fixtures/import/*.txt), then on deliberately broken copies.
   node tests/import.test.js [-v]   exit code 1 on any failure. */
const fs = require('fs'), path = require('path'), assert = require('assert');
const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data.js')), Engine = require(path.join(ROOT, 'engine.js')), RI = require(path.join(ROOT, 'import.js'));
const FX = path.join(__dirname, 'fixtures', 'import');
const fx = n => fs.readFileSync(path.join(FX, n + '.txt'), 'utf8');
const run = (txt, opts) => RI.run(txt, DATA, Engine, opts);
const verbose = process.argv.includes('-v');

let pass = 0; const fails = [];
function t(name, fn) { try { fn(); pass++; } catch (e) { fails.push(`${name}: ${e.message}`); } }

/* a roster with instance ids replaced by positions, so two imports can be compared */
const shape = r => {
  const pos = new Map(r.units.map((u, i) => [u.instanceId, i]));
  return JSON.stringify({
    name: r.name, f: r.factionId, bs: r.battleSize, det: r.detachmentIds, disp: r.forceDisposition, wl: pos.get(r.warlordUnitId),
    units: r.units.map(u => ({ d: u.datasheetId, s: u.size, w: u.wargear, a: pos.get(u.attachedTo), e: u.enhancementId })),
  });
};
const ok = (res, what) => assert(res.ok, `${what || 'import'} failed: ${res.error && res.error.message}`);
const noteText = res => res.notes.map(n => n.text);

/* ---------- 1. the three real exports ---------- */
const EXPECT = {
  world_eaters: { army: 'worldEaters', units: 6, links: 0, points: 1605, warlord: 'angron', sizes: ['khorne_berzerkers:20', 'khorne_berzerkers:20', 'khorne_berzerkers:20', 'khorne_berzerkers:10'] },
  thousand_sons: { army: 'thousandSons', units: 13, links: 3, points: 2000, warlord: 'magnus_the_red' },
  drukhari: { army: 'drukhari', units: 22, links: 5, points: 1990, warlord: 'archon', enh: 'skysplinter_assault_nightmare_shroud' },
  /* the app's own layout: nesting by indentation, "Attached as" at column 0, "Enhancement: X (Upgrade)" */
  /* synthetic (written from the datasheets, not an official export): replace with a real export when the owner sends one */
  imperial_knights_synthetic: { army: 'imperialKnights', bs: 'onslaught', units: 8, links: 0, points: 2390, warlord: 'knight_paladin', enh: 'magos_questoris' },
  /* synthetic as well: a Chapter army on the Space Marines pool (shared Captain in Terminator Armour leads Deathwing Knights through leaderOfExtra) */
  dark_angels_synthetic: { army: 'darkAngels', units: 7, links: 1, points: 1280, warlord: 'lion_eljonson', enh: 'deathwing_assault' },
  /* synthetic: Blood Angels on the Space Marines pool (shared Chaplain with Jump Pack leads Death Company through leaderOfExtra) */
  blood_angels_synthetic: { army: 'bloodAngels', units: 7, links: 1, points: 870, warlord: 'commander_dante', enh: 'instinctive_interception' },
  world_eaters_indented: { army: 'worldEaters', units: 11, links: 3, points: 1995, warlord: 'angron', enh: 'berzerker_glaive' },
};
const summary = [];
Object.entries(EXPECT).forEach(([name, ex]) => {
  t(`${name}: imports`, () => {
    const res = run(fx(name)); ok(res);
    const r = res.roster, byId = id => r.units.find(u => u.instanceId === id);
    assert.strictEqual(r.factionId, ex.army);
    assert.strictEqual(r.battleSize, ex.bs || 'strike');
    assert.strictEqual(r.units.length, ex.units, 'units imported');
    assert.strictEqual(res.stats.skipped, 0, 'nothing skipped');
    assert.strictEqual(r.units.filter(u => u.attachedTo).length, ex.links, 'leaders attached');
    assert.strictEqual(byId(r.warlordUnitId).datasheetId, ex.warlord, 'warlord');
    assert.strictEqual(res.stats.points, ex.points, 'points total equals the export');
    assert.strictEqual(res.notes.length, 0, 'no remarks: ' + noteText(res).join(' | '));
    if (ex.sizes) assert.deepStrictEqual(r.units.filter(u => u.datasheetId === 'khorne_berzerkers').map(u => `${u.datasheetId}:${u.size}`), ex.sizes, 'repeats kept as separate units, size from models not points');
    if (ex.enh) assert.strictEqual(r.units.filter(u => u.enhancementId).map(u => u.enhancementId)[0], ex.enh);
    assert(res.rules.every(x => x.severity !== 'error'), 'editor errors: ' + res.rules.filter(x => x.severity === 'error').map(x => x.text).join(' | '));
    summary.push(`${name.padEnd(14)} units ${res.stats.imported}/${res.stats.parsed}  remarks ${res.notes.length}  editor warnings ${res.rules.length}  points ${res.stats.points}/${res.stats.declared}`);
  });
});
t('thousand_sons: wargear + leaders', () => {
  const r = run(fx('thousand_sons')).roster, rub = r.units.filter(u => u.datasheetId === 'rubric_marines');
  assert.strictEqual(rub.length, 2); rub.forEach(u => { assert.strictEqual(u.size, 10); assert.strictEqual(u.wargear.ch_gun, 'warp'); assert.strictEqual(u.wargear.warpflamer, 8); assert.strictEqual(u.wargear.soulreaper, 1); assert.strictEqual(u.wargear.icon, 1); });
  assert.strictEqual(r.units.find(u => u.datasheetId === 'exalted_sorcerer_on_disc_of_tzeentch').attachedTo, rub[0].instanceId);
  assert.strictEqual(r.units.find(u => u.datasheetId === 'tzaangor_enlightened_fatecaster').size, 3, 'variant datasheet matched by exact name');
});
t('drukhari: wargear', () => {
  const r = run(fx('drukhari')).roster, sc = r.units.filter(u => u.datasheetId === 'scourges_with_heavy_weapons');
  assert.deepStrictEqual([sc[0].wargear.dark_lance, sc[0].wargear.heat_lance, sc[1].wargear.dark_lance], [1, 2, 3]);
  r.units.filter(u => u.datasheetId === 'incubi').forEach(u => assert.strictEqual(u.wargear.klaivex, 'demi'));
  assert(r.units.some(u => u.datasheetId === 'solitaire'), 'allied unit imported');
});
t('world_eaters_indented: the roster from the app, exactly', () => {
  const r = run(fx('world_eaters_indented')).roster, of = id => r.units.filter(u => u.datasheetId === id);
  of('khorne_berzerkers').forEach(u => assert.deepStrictEqual([u.size, u.wargear], [10, { champ_plasma: 1, plasma: 2, evisc: 2, icon: 1 }]));
  of('chaos_terminators').forEach(u => assert.deepStrictEqual([u.size, u.wargear, u.enhancementId], [10, { reaper: 2, fist: 6, chainfist: 2 }, 'gore_stained_veterans']));
  assert.strictEqual(of('chaos_rhino')[0].wargear.extra, 'none', 'the Rhino\'s own combi-bolter is not an extra pintle weapon');
  assert.strictEqual(of('goremongers')[0].size, 8);
});
t('every army: every datasheet and every option round-trips (loadout and points)', () => {
  const { cases, fails } = require('./import.roundtrip.js').all();
  summary.push(`round trip     ${cases - fails.length}/${cases} datasheet x option cases`);
  assert.strictEqual(fails.length, 0, '\n    ' + fails.slice(0, 10).join('\n    '));
});
t('world_eaters: marker lost in the export keeps the weapon', () => {
  const p = RI.parse(fx('world_eaters')), k = p.units.find(u => /Kh.rn/.test(u.name));
  assert.deepStrictEqual(k.items.map(l => l.name), ['Gorechild', 'Plasma pistol']);
});

/* ---------- 2. same roster through other typography ---------- */
const base = Object.fromEntries(Object.keys(EXPECT).map(n => [n, shape(run(fx(n)).roster)]));
const variants = {
  'bullets as •': s => s.replace(/^- /gm, '• '),
  'CRLF': s => s.replace(/\n/g, '\r\n'),
  'straight apostrophes': s => s.replace(/’/g, "'"),
  'POINTS in caps, extra blank lines, trailing spaces': s => s.replace(/points/gi, 'POINTS').replace(/\n/g, '  \n\n'),
  'no footer': s => s.replace(/Exported with.*$/m, ''),
  'diacritics stripped, case changed': s => s.replace(/â/g, 'a').replace(/^(Angron|Magnus the Red|Archon)/gm, m => m.toUpperCase()),
  'nested bullets indented': s => s.replace(/^◦ /gm, '    - ').replace(/^- /gm, '- '),
  /* layout must not matter: the meaning comes from the datasheet, not from bullets or indentation */
  'layout: flattened (no indentation)': s => s.replace(/^[ \t]+/gm, ''),
  'layout: every marker is "-"': s => s.replace(/^(\s*)[\u2022\u25E6\-*]\s/gm, '$1- '),
  'layout: no markers at all': s => s.replace(/^(\s*)[\u2022\u25E6\-*]\s/gm, '$1'),
  'layout: tabs and "*"': s => s.replace(/^( {2})+/gm, m => '\t'.repeat(m.length / 2)).replace(/^(\t*)[\u2022\u25E6\-]\s/gm, '$1* '),
  'layout: app-style indentation': s => s.replace(/^- /gm, '  \u2022 ').replace(/^\u25E6 /gm, '    \u2022 ').replace(/^(\d+x )/gm, '      $1'),
  'layout: body shifted right': s => s.replace(/^(?=\s*(?:[\u2022\u25E6\-*]\s|\d+x ))/gm, '        '),
  'layout: service lines first and unmarked': s => s.split(/\n(?=\n)/).map(b => { const ls = b.split('\n'), meta = ls.filter(l => /^\s*(?:[\u2022\u25E6\-*]\s*)?(?:Warlord|Attached as|Enhancements?:)/i.test(l)); if (!meta.length) return b; const rest = ls.filter(l => !meta.includes(l)), h = rest.findIndex(l => /\(\d[\d,]*\s*points\)/i.test(l)); if (h < 0) return b; return [...rest.slice(0, h + 1), ...meta.map(l => l.replace(/^\s*(?:[\u2022\u25E6\-*]\s*)?/, '')), ...rest.slice(h + 1)].join('\n'); }).join('\n'),
  'layout: service lines last': s => s.split(/\n(?=\n)/).map(b => { const ls = b.split('\n'), meta = ls.filter(l => /^\s*(?:[\u2022\u25E6\-*]\s*)?(?:Warlord|Enhancements?:)/i.test(l)); return meta.length ? [...ls.filter(l => !meta.includes(l)), ...meta].join('\n') : b; }).join('\n'),
  'section headers in any case': s => s.replace(/^(ATTACHED UNITS|CHARACTERS|BATTLELINE|DEDICATED TRANSPORTS|OTHER DATASHEETS|ALLIED UNITS|Attached Units)$/gm, h => h[0] + h.slice(1).toLowerCase()),
};
Object.entries(variants).forEach(([vn, f]) => Object.keys(EXPECT).forEach(n => t(`${n}: ${vn}`, () => {
  const res = run(f(fx(n))); ok(res); assert.strictEqual(shape(res.roster), base[n]);
})));

/* ---------- 3. hard stops: nothing is created ---------- */
const hard = (what, txt, code, msg) => t(`hard stop: ${what}`, () => {
  const res = run(txt); assert.strictEqual(res.ok, false, 'must not import'); assert.strictEqual(res.error.code, code);
  if (msg) assert.strictEqual(res.error.message, msg); assert(!res.roster);
});
const FORMAT = 'Unsupported format. Only Warhammer 40,000 rosters are supported';
hard('empty', '', 'empty'); hard('only spaces', ' \n \t\n', 'empty'); hard('null', null, 'empty');
hard('garbage', 'hello\nthis is not a roster\nlorem ipsum', 'format', FORMAT);
hard('one line', 'Angron (330 points)', 'format', FORMAT);
hard('Age of Sigmar export', 'My list (2000/2000pts)\nBattle Formation: Sacrosanct Chamber\nStormcast Eternals\nSpell Lore: Lore of the Storm\nRegiment 1\nLord-Celestant (140)\n\nExported with Warhammer Age of Sigmar', 'format', FORMAT);
hard('Kill Team export', 'KILL TEAM\nAngels of Death\nOperatives\nSergeant (1)\nBolt pistol\nExported with Kill Team', 'format', FORMAT);
hard('Horus Heresy export', '++ Horus Heresy ++\nCrusade Force\nRite of War: Pride of the Legion\nLegion Praetor\n. . . . . . .', 'format', FORMAT);
hard('unknown army', fx('world_eaters').replace('World Eaters\n', 'Orks\n'), 'army', 'Army Orks does not exist in the application');
hard('unknown detachment', fx('world_eaters').replace('Vessels of Wrath', 'Vessels of Fury'), 'detachment', 'Detachment Vessels of Fury does not exist for World Eaters in the application');
hard('detachment of another army', fx('world_eaters').replace('Berzerker Warband and Vessels of Wrath', 'Grand Coven'), 'detachment');
hard('no detachment name', fx('world_eaters').replace('Berzerker Warband and Vessels of Wrath (3', '(3'), 'detachment');
['1500', '500', '2500', '4000'].forEach(p => hard(`battle size ${p}`, fx('world_eaters').replace('Strike Force (2000 points)', `Strike Force (${p} points)`), 'size'));
hard('battle size without points', fx('world_eaters').replace('Strike Force (2000 points)', 'Strike Force'), 'size');
t('hard stop: size message lists the supported sizes', () => assert.strictEqual(run(fx('world_eaters').replace('(2000 points)', '(1500 points)')).error.message, 'Battle size Strike Force (1500 points) is not supported. Supported: 1000, 2000, 3000 points'));
t('battle sizes 1000 / 3000 are accepted', () => { ok(run(fx('world_eaters').replace('(2000 points)', '(1,000 Points)'))); assert.strictEqual(run(fx('world_eaters').replace('(2000 points)', '(3,000 points)')).roster.battleSize, 'onslaught'); });
t('hard stop: result never throws on junk', () => { [undefined, 42, {}, '\u0000\u0001', 'x'.repeat(100000), '(1 points)\n(2 points)\n(3 Detachment Points)\n(4 points)\n(5 points)'].forEach(x => { const res = run(x); assert.strictEqual(typeof res.ok, 'boolean'); }); });

/* ---------- 4. soft remarks: the roster is still created ---------- */
const soft = (what, txt, check) => t(`soft: ${what}`, () => { const res = run(txt); ok(res); check(res, res.roster); });
soft('unknown unit is skipped', fx('world_eaters').replace('Khârn the Betrayer', 'Kharn the Unbeliever'), (res, r) => {
  assert.strictEqual(r.units.length, 5); assert(noteText(res).includes('Unit Kharn the Unbeliever was not found and was skipped'));
  assert.strictEqual(res.notes.filter(n => n.unit === 'Kharn the Unbeliever').length >= 1, true);
});
soft('unknown wargear: default applied', fx('world_eaters').replace('- 1x Gorechild', '- 1x Gorechild\n- 1x Thunderfist of Doom'), (res, r) => {
  assert.strictEqual(r.units.length, 6); assert(noteText(res).includes('Wargear Thunderfist of Doom for Khârn the Betrayer was not recognised; default wargear applied'));
});
soft('same bad wargear in one unit is one remark', fx('world_eaters').replace('- 1x Gorechild', '- 1x Thunderfist of Doom\n- 1x Thunderfist of Doom\n- 1x Gorechild'), res => assert.strictEqual(noteText(res).filter(x => /Thunderfist/.test(x)).length, 1));
soft('unit size between options: nearest', fx('world_eaters').replace(/- 19x Khorne Berzerker\n/, '- 14x Khorne Berzerker\n'), (res, r) => {
  assert(noteText(res).some(x => /Unit size 15 for Khorne Berzerkers does not match any option \(10 \/ 20\); 10 models used/.test(x)), noteText(res).join(' | ')); assert.strictEqual(r.units.length, 6);
});
soft('unknown enhancement is not applied', fx('drukhari').replace('Nightmare Shroud', 'Nonexistent Relic'), (res, r) => {
  assert(!r.units.some(u => u.enhancementId)); assert(noteText(res).includes('Enhancement Nonexistent Relic for Archon was not found; not applied'), noteText(res).join(' | '));
});
soft('enhancement of a detachment not in the roster', fx('drukhari').replace('Kabalite Agonysts and Skysplinter Assault (3', 'Kabalite Agonysts and Kabalite Cartel (3').replace('Reconnaissance', 'Disruption'), (res, r) => {
  assert(!r.units.some(u => u.enhancementId)); assert(noteText(res).some(x => /Enhancement Nightmare Shroud for Archon belongs to Skysplinter Assault, which is not in the roster; not applied/.test(x)), noteText(res).join(' | '));
});
soft('leader that cannot lead: both added, apart', fx('thousand_sons').replace('Rubric Marines (210 Points)', 'Tzaangors (75 Points)'), (res, r) => {
  assert(noteText(res).some(x => /Exalted Sorcerer on Disc of Tzeentch cannot lead Tzaangors/.test(x) && /added separately/.test(x)), noteText(res).join(' | '));
  assert.strictEqual(r.units.find(u => u.datasheetId === 'exalted_sorcerer_on_disc_of_tzeentch').attachedTo, null);
});
soft('points that do not add up: both numbers, no block', fx('thousand_sons').replace('2000 (2,000 Points)', '2000 (1,900 Points)'), res => assert(noteText(res).includes('Points differ: the export says 1900, the imported roster is 2000')));
soft('disposition the detachments do not offer', fx('world_eaters').replace('Purge the Foe', 'Take and Hold'), res => assert(noteText(res).some(x => /Force Disposition Take and Hold is not available/.test(x))));
soft('over the limits: imported as is, editor warning shown', fx('world_eaters').replace('Berzerker Warband and Vessels of Wrath (3', 'Berzerker Warband and Cult of Blood and Vessels of Wrath (5'), (res, r) => {
  assert.strictEqual(r.detachmentIds.length, 3); assert(res.rules.some(x => x.severity === 'error' && /DP/.test(x.text)), res.rules.map(x => x.text).join(' | '));
});
soft('copies over the limit: imported as is, editor warning shown', fx('world_eaters').replace('CHARACTERS\n', 'CHARACTERS\n\nAngron (330 points)\n- 1x Samni\u2019arius and Spinegrinder\n'), (res, r) => {
  assert.strictEqual(r.units.filter(u => u.datasheetId === 'angron').length, 2); assert(res.rules.some(x => x.severity === 'error' && /Angron/.test(x.text)), res.rules.map(x => x.text).join(' | '));
});
soft('a second Warlord marker is ignored with a remark', fx('thousand_sons').replace('Chaos Rhino (80 Points)', 'Chaos Rhino (80 Points)\n- Warlord'), res => assert(noteText(res).some(x => /Chaos Rhino cannot be the Warlord/.test(x))));
soft('unit that is not in the army is skipped (allied section, no support)', fx('world_eaters').replace('Khârn the Betrayer (115', 'Solitaire (105'), res => assert(noteText(res).includes('Unit Solitaire was not found and was skipped')));
soft('variant name falls back to the base datasheet: option not found', fx('thousand_sons').replace('Tzaangor Enlightened with Fatecaster Greatbows', 'Rubric Marines with Warpflamers'), (res, r) => {
  assert.strictEqual(r.units.filter(u => u.datasheetId === 'rubric_marines').length, 3); assert(noteText(res).includes('Wargear Warpflamers for Rubric Marines with Warpflamers was not recognised; default wargear applied'), noteText(res).join(' | '));
});
soft('variant name falls back to the base datasheet: option set', fx('thousand_sons').replace('Tzaangor Enlightened with Fatecaster Greatbows', 'Exalted Sorcerer with Prosperine khopesh'), (res, r) => {
  const u = r.units[r.units.length - 1]; assert.strictEqual(u.datasheetId, 'exalted_sorcerer'); assert.strictEqual(u.wargear.khopesh, 1); assert(!noteText(res).some(x => /^Wargear Prosperine khopesh/.test(x)), noteText(res).join(" | "));
});
soft('remarks are one per problem and carry their unit', fx('drukhari').replace(/Venom \(65 Points\)/g, 'Veno (65 Points)'), res => {
  const v = res.notes.filter(n => /Veno was not found/.test(n.text)); assert.strictEqual(v.length, 3); assert.deepStrictEqual(v.map(n => n.unit), ['Veno #1', 'Veno #2', 'Veno #3']);
});

/* ---------- 5. detachment names with "and", pairs, and every army ---------- */
t('segmentation: names with "and" stay whole, pairs are split', () => {
  const dets = [{ id: 'a', name: 'Rites and Rituals' }, { id: 'b', name: 'Fire' }, { id: 'c', name: 'Ice and Steel' }, { id: 'd', name: 'Blood' }];
  const ids = s => RI.segmentDetachments(s, dets).map(c => c.det && c.det.id).join(',');
  assert.strictEqual(ids('Rites and Rituals'), 'a'); assert.strictEqual(ids('Rites and Rituals and Fire'), 'a,b');
  assert.strictEqual(ids('Fire and Ice and Steel'), 'b,c'); assert.strictEqual(ids('Blood and Fire'), 'd,b');
  assert.strictEqual(ids('Fire and Mud'), 'b,'); assert.strictEqual(RI.segmentDetachments('Mud and Dust', dets).map(c => c.text).join('|'), 'Mud|Dust');
  assert.strictEqual(ids('FIRE and ice and steel'), 'b,c');
});
DATA.factions.filter(f => DATA.factionData[f.id]).forEach(f => {
  const fd = DATA.factionData[f.id];
  t(`every army: ${f.name} imports a generated roster`, () => {
    const det = fd.detachments.find(d => d.dp <= 3), disp = Engine.dispositionsOf(det)[0];
    const army = fd.units.filter(u => u.faction === fd.armyFaction), pick = army.slice(0, 3);
    const txt = [`Generated (999 points)`, '', f.name, `${det.name} (${det.dp} Detachment Points)`, disp || '', 'Strike Force (2000 points)', '', 'OTHER DATASHEETS', '',
      ...pick.flatMap(u => [`${u.name} (${u.sizes[0].pts} points)`, `- 1x ${u.name}`, '']), 'Exported with App Version: v1, Data Version: v1'].join('\n');
    const res = run(txt); ok(res, f.name); assert.strictEqual(res.roster.units.length, pick.length, noteText(res).join(' | ')); assert.strictEqual(res.roster.factionId, f.id);
    /* every detachment name of the army resolves to itself, alone and in pairs */
    fd.detachments.forEach(d => { const s = RI.segmentDetachments(d.name, fd.detachments); assert(s.length === 1 && s[0].det && s[0].det.id === d.id, `detachment ${d.name} did not resolve to itself`); });
    const [a, b] = fd.detachments; const pair = RI.segmentDetachments(`${a.name} and ${b.name}`, fd.detachments); assert(pair.length === 2 && pair[0].det.id === a.id && pair[1].det.id === b.id, 'pair');
  });
});

if (verbose || fails.length === 0) summary.forEach(s => console.log(s));
if (fails.length) { console.error(`\n${fails.length} FAILED, ${pass} passed\n  - ` + fails.join('\n  - ')); process.exit(1); }
console.log(`import tests: ${pass} passed`);
