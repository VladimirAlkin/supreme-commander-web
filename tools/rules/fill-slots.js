#!/usr/bin/env node
'use strict';
/* fill-slots.js — write assembled rules text into text/<faction>.slots.json,
   then the official-app set (text/official.json) on top.

   node tools/rules/fill-slots.js <final.json> [faction ...]
   node tools/rules/fill-slots.js --official-only

   Only slot files are written. data.js changes when you run
   tools/merge-text.js, which checks every entry's context first. */

const fs = require('fs');
const path = require('path');
const L = require('../lib');
const Official = require('../official');

const args = process.argv.slice(2);
const officialOnly = args.includes('--official-only');
const pos = args.filter(a => !a.startsWith('--'));
const finalFile = officialOnly ? null : pos.shift();
const only = pos;
if (!officialOnly && !finalFile) { console.error('usage: fill-slots.js <final.json> [faction ...] | --official-only'); process.exit(2); }

const data = L.loadData();
const slots = {};
const S = f => {
  if (!slots[f]) {
    if (!fs.existsSync(L.slotPath(f))) execGen(f);
    slots[f] = JSON.parse(fs.readFileSync(L.slotPath(f), 'utf8'));
  }
  return slots[f];
};
function execGen(f) { require('child_process').execFileSync(process.execPath, [path.join(__dirname, '..', 'gen-slots.js'), f], { stdio: 'inherit' }); }

let n = 0;
const problems = [];

if (!officialOnly) {
  for (const x of require(path.resolve(finalFile)).final) {
    if (only.length && !only.includes(x.f)) continue;
    const s = S(x.f), r = x.ref;
    try {
      if (x.cat === 'army-rule') s.armyRules[r.rule].text = x.text;
      else if (x.cat === 'det-rule') s.detachments[r.det].rule.text = x.text;
      else if (x.cat === 'enh') s.detachments[r.det].enhancements[r.enh].text = x.text;
      else if (x.cat === 'strat') {
        const t = s.detachments[r.det].stratagems[r.strat];
        t.when = x.text.when; t.target = x.text.target; t.effect = x.text.effect; t.restrictions = x.text.restrictions || null;
      } else if (x.cat === 'unit-abil') {
        const u = data.factionData[x.f].units.find(q => q.id === r.unit);
        if (u.abilities[r.idx].name !== x.name) throw new Error(`ability index moved: ${u.name}[${r.idx}] is ${u.abilities[r.idx].name}`);
        const seen = new Set(); let key;
        u.abilities.forEach((a, i) => { const k = L.abilityKey(a, i, seen); if (i === r.idx) key = k; });
        s.units[r.unit].abilities[key].text = x.text;
      }
      n += 1;
    } catch (e) { problems.push(`${x.f} ${x.cat} ${x.unit || x.det || ''} / ${x.name}: ${e.message}`); }
  }
}

let off = 0;
for (const e of Official.load()) {
  if (only.length && !only.includes(e.faction)) continue;
  const r = Official.resolve(data, e);
  if (r.error) { problems.push(`official: ${r.error}`); continue; }
  try { const [obj, field] = r.slot(S(e.faction)); obj[field] = e.text; off += 1; }
  catch (x) { problems.push(`official: ${r.where}: no slot (${x.message}) — run gen-slots`); }
}

for (const [f, s] of Object.entries(slots)) fs.writeFileSync(L.slotPath(f), JSON.stringify(s, null, 1) + '\n');
console.log(`filled ${n} entries, ${off} official; problems: ${problems.length}`);
problems.forEach(p => console.log('  !', p));
process.exit(problems.length ? 1 : 0);
