'use strict';
/* fd.inherits + army-level grantKeywords: armies built on another army's pool. Runs on an in-memory clone with synthetic
   inheritor armies on Space Marines; data.js is never written (writeData's file write is captured, not performed). */
const path = require('path'), fs = require('fs');
const Engine = require(path.join(__dirname, '..', 'engine.js'));
const L = require(path.join(__dirname, '..', 'tools', 'lib.js'));
const RAW = require(path.join(__dirname, '..', 'data.js'));
const DATA = structuredClone(RAW);
const sm = DATA.factionData.spaceMarines;
const common = sm.units.filter(u => !u.subfaction), commonDets = sm.detachments.filter(d => !d.subfaction);
const subUnit = sm.units.find(u => u.subfaction), subDet = sm.detachments.find(d => d.subfaction);

const ownUnit = id => Object.assign(structuredClone(sm.units.find(u => u.id === 'captain')), { id, name: id });
const ownDet = id => { const d = Object.assign(structuredClone(commonDets[0]), { id, name: id });
  d.enhancements.forEach(e => (e.id = id + '_' + e.id)); (d.stratagems || []).forEach(s => (s.id = id + '_' + s.id)); return d; };
const army = (id, cfg) => { DATA.factionData[id] = Object.assign({ armyFaction: sm.armyFaction }, cfg);
  DATA.factions.push(Object.assign(structuredClone(DATA.factions.find(f => f.id === 'spaceMarines')), { id, name: id, highlights: [] })); };

const SW_EX = ['apothecary', 'apothecary_biologis'];
const BT_EX = ['librarian', 'librarian_in_phobos_armour', 'librarian_in_terminator_armour', 'gladiator_lancer', 'gladiator_reaper',
  'gladiator_valiant', 'repulsor', 'repulsor_executioner', 'impulsor'];
army('tWolves', { inherits: { source: 'spaceMarines', exclude: { unitIds: SW_EX } }, units: [ownUnit('tw_hero')], detachments: [] });
army('tAngels', { inherits: { source: 'spaceMarines' }, units: [], detachments: [],
  grantKeywords: [{ keyword: 'Deathwing', unitIds: ['terminator_squad'] }, { keyword: 'Ravenwing', unitIds: ['outrider_squad'] }] });
army('tTemplars', { inherits: { source: 'spaceMarines', exclude: { unitIds: BT_EX, keywordsAny: ['Psyker'], detachmentIds: [commonDets[1].id] } },
  units: [ownUnit('tt_hero')], detachments: [ownDet('tt_vows')] });
const RAWCFG = structuredClone(['tWolves', 'tAngels', 'tTemplars'].map(id => DATA.factionData[id]));

Engine.inherit(DATA);
const F = id => DATA.factionData[id], ids = id => new Set(F(id).units.map(u => u.id));
const mk = (fid, det, us) => { const d = F(fid).detachments.find(x => x.id === det);
  return { factionId: fid, battleSize: 'strike', detachmentIds: [det], subfaction: null, forceDisposition: Engine.dispositionsOf(d)[0] || null, warlordUnitId: 'i0',
    units: us.map((u, i) => { const def = F(fid).units.find(x => x.id === u) || sm.units.find(x => x.id === u);
      return { instanceId: 'i' + i, datasheetId: u, size: (def && def.sizes && def.sizes[0] && def.sizes[0].models) || 1, wargear: {} }; }) }; };
const errs = r => { const v = Engine.validate(r, DATA); return (v.errors || v).map(e => e.text || e.message || String(e)); };

let n = 0, bad = 0;
const ok = (name, c, extra) => { n++; if (!c) { bad++; console.log('FAIL ' + name + (extra !== undefined ? ' ' + JSON.stringify(extra) : '')); } };

// (a) Space Wolves: whole pool minus excluded ids
ok('SW: excluded ids gone', SW_EX.every(i => !ids('tWolves').has(i)));
ok('SW: pool = common - excluded + own', F('tWolves').units.length === common.length - SW_EX.length + 1, F('tWolves').units.length);
ok('SW: referenced, not copied', F('tWolves').units.find(u => u.id === 'intercessor_squad') === sm.units.find(u => u.id === 'intercessor_squad'));
ok('SW: common detachments + army rules by reference', F('tWolves').detachments.length === commonDets.length && F('tWolves').armyRules[0] === sm.armyRules[0]);
ok('SW: inherited units are not allies', !Object.keys(Engine.points(mk('tWolves', commonDets[0].id, ['intercessor_squad']), DATA).allied || {}).length);

// (b) Dark Angels: army-gated keywords on referenced units
const term = sm.units.find(u => u.id === 'terminator_squad'), out = sm.units.find(u => u.id === 'outrider_squad');
const cA = Engine.ctxFor(mk('tAngels', commonDets[0].id, []), DATA), cS = Engine.ctxFor(mk('spaceMarines', commonDets[0].id, []), DATA);
ok('DA: DEATHWING granted', Engine.hasKw(term, cA, 'Deathwing'));
ok('DA: RAVENWING granted', Engine.hasKw(out, cA, 'Ravenwing'));
ok('DA: only to listed units', !Engine.hasKw(out, cA, 'Deathwing') && !Engine.hasKw(term, cA, 'Ravenwing'));
ok('DA: not in the source army', !Engine.hasKw(term, cS, 'Deathwing'));
ok('DA: shared datasheet untouched', !term.keywords.some(k => /deathwing/i.test(k)));
ok('DA: full common pool', F('tAngels').units.length === common.length);

// (c) Black Templars: own detachment, own units only, ids + keyword + detachment excluded
ok('BT: excluded ids and PSYKER gone', BT_EX.every(i => !ids('tTemplars').has(i)) && !F('tTemplars').units.some(u => u.keywords.some(k => /psyker/i.test(k))));
ok('BT: excluded detachment gone, own present', !F('tTemplars').detachments.some(d => d.id === commonDets[1].id) && F('tTemplars').detachments.some(d => d.id === 'tt_vows'));
ok('BT: own detachment only in its army', !sm.detachments.some(d => d.id === 'tt_vows') && !F('tWolves').detachments.some(d => d.id === 'tt_vows'));
ok('BT: own detachment + own and common units valid', errs(mk('tTemplars', 'tt_vows', ['tt_hero', 'intercessor_squad'])).length === 0, errs(mk('tTemplars', 'tt_vows', ['tt_hero', 'intercessor_squad'])));
ok('BT: another army\'s own unit is an error', errs(mk('tTemplars', 'tt_vows', ['tt_hero', 'tw_hero'])).length > 0);

// sub-faction items stay with the source
ok('subfaction unit not inherited', ['tWolves', 'tAngels', 'tTemplars'].every(id => !ids(id).has(subUnit.id) && !F(id).units.some(u => u.subfaction)));
ok('subfaction detachment not inherited', ['tWolves', 'tAngels', 'tTemplars'].every(id => !F(id).detachments.some(d => d.id === subDet.id)));
ok('subfaction unit in a roster is an error', errs(mk('tAngels', commonDets[0].id, ['terminator_squad', subUnit.id])).length > 0);

// the source is unchanged and the link is idempotent
const before = F('tWolves').units.length; Engine.inherit(DATA);
ok('inherit is idempotent', F('tWolves').units.length === before);
ok('source unchanged', JSON.stringify(sm) === JSON.stringify(RAW.factionData.spaceMarines));

// writeData: the inheritor's data.js entry holds only its own items
const realWrite = fs.writeFileSync; let written = null;
fs.writeFileSync = (p, s) => { if (path.resolve(String(p)) === path.resolve(__dirname, '..', 'data.js')) written = s; else realWrite(p, s); };
try { L.writeData(DATA); } finally { fs.writeFileSync = realWrite; }
const back = written && new Function(written.replace(/if \(typeof module[\s\S]*$/, '') + '; return DATA;')();
ok('writeData captured, data.js not written', !!back);
['tWolves', 'tAngels', 'tTemplars'].forEach((id, i) => ok(`writeData: ${id} serialised as configured`, back && JSON.stringify(back.factionData[id]) === JSON.stringify(RAWCFG[i])));
ok('writeData: source serialised unchanged', back && JSON.stringify(back.factionData.spaceMarines) === JSON.stringify(RAW.factionData.spaceMarines));

console.log(`inherit tests: ${n - bad}/${n} passed`);
process.exit(bad ? 1 : 0);
