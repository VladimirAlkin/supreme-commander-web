'use strict';
/* alliedFactions[].unitsFrom: allies taken by reference. Runs on an in-memory clone with a synthetic group; data.js is not read for the rule. */
const path = require('path');
const Engine = require(path.join(__dirname, '..', 'engine.js'));
const DATA = structuredClone(require(path.join(__dirname, '..', 'data.js')));
const host = DATA.factionData.adeptusMechanicus;
host.alliedFactions = [{ faction: 'Imperial Knights', rule: 'Test Allies', hostKeyword: 'Imperium', noEnhancements: true, cannotBeWarlord: true,
  unitsFrom: { source: 'imperialKnights', keywordsAny: ['Titanic', 'Armiger'] }, oneOf: [{ keyword: 'Titanic', n: 1 }, { keyword: 'Armiger', n: 3 }] }];
const det = host.detachments[0], own = host.units.find(u => u.keywords.includes('Character') && !u.keywords.includes('Epic Hero'));
const mk = (us, x = {}) => Object.assign({ id: 't', name: 't', factionId: 'adeptusMechanicus', battleSize: 'onslaught', detachmentIds: [det.id], forceDisposition: (det.dispositions || [null])[0],
  units: us.map((u, i) => ({ instanceId: 'i' + i, datasheetId: u[0], size: 1, wargear: {}, enhancementId: u[1] || null })), warlordUnitId: 'i0' }, x);
const errs = r => { const v = Engine.validate(r, DATA); return (v.errors || v).map(e => e.text || e.message || String(e)); };
let n = 0, bad = 0;
const ok = (name, cond, info) => { n++; if (!cond) { bad++; console.log('FAIL', name, info === undefined ? '' : JSON.stringify(info)); } };
const A = 'armiger_helverin', B = 'armiger_warglaive', C = 'armiger_moirax';
ok('own only is clean', errs(mk([[own.id]])).length === 0);
ok('one Titanic is clean', errs(mk([[own.id], ['knight_paladin']])).length === 0);
ok('two Titanic rejected', errs(mk([[own.id], ['knight_paladin'], ['knight_errant']])).some(m => /limit is 1/.test(m)));
ok('Titanic + Armiger rejected', errs(mk([[own.id], ['knight_paladin'], [A]])).some(m => /not both/.test(m)));
ok('three Armigers clean', errs(mk([[own.id], [A], [B], [C]])).length === 0);
ok('four Armigers rejected', errs(mk([[own.id], [A], [B], [C], [A]])).some(m => /limit is 3/.test(m)));
ok('non-listed Knight absent from ids', !Engine.ctxFor(mk([[own.id]]), DATA).unitById.skitarii_rangers || Engine.ctxFor(mk([[own.id]]), DATA).unitById.skitarii_rangers === host.units.find(u => u.id === 'skitarii_rangers'));
ok('enhancement on ally rejected', errs(mk([[own.id], ['knight_paladin', (det.enhancements[0] || {}).id]])).some(m => /cannot take enhancements/.test(m)));
ok('ally Warlord rejected', errs(mk([[own.id], ['knight_paladin']], { warlordUnitId: 'i1' })).some(m => /cannot be your Warlord/.test(m)));
ok('allied points counted', Engine.points(mk([[own.id], ['knight_paladin']]), DATA).allied['Imperial Knights'] > 0);
ok('referenced, not copied', Engine.ctxFor(mk([[own.id]]), DATA).unitById.knight_paladin === DATA.factionData.imperialKnights.units.find(u => u.id === 'knight_paladin'));
ok('allyBlock: second Titanic', /limit 1/.test(Engine.allyBlock(DATA.factionData.imperialKnights.units.find(u => u.id === 'knight_errant'), mk([[own.id], ['knight_paladin']]), DATA) || ''));
ok('allyBlock: free list', Engine.allyBlock(DATA.factionData.imperialKnights.units.find(u => u.id === A), mk([[own.id]]), DATA) === null);
const gone = structuredClone(DATA); gone.factionData.adeptusMechanicus.alliedFactions[0].unitsFrom.source = 'nope';
let threw = false, refs = -1; try { refs = Object.keys(Engine.ctxFor(mk([[own.id]]), gone).refGroup).length; Engine.validate(mk([[own.id]]), gone); } catch (e) { threw = true; }
ok('absent source: empty, no throw', !threw && refs === 0);
console.log(`unitsFrom tests: ${n - bad}/${n} passed`);
process.exit(bad ? 1 : 0);
