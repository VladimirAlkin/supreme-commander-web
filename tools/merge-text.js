#!/usr/bin/env node
'use strict';
/* merge-text.js — apply text/<faction>.slots.json back into data.js.

   THE ADDRESSING GUARANTEE. Text can only land on the entry it was written
   for, and this is enforced three ways:

   1. The author never types a path. Slot files are generated pre-addressed
      by the stable id already in data.js; the author fills a blank that is
      already in the right place.
   2. Every entry carries read-only context (_name, _cp, _pts, _type). Before
      anything is written, this is checked against data.js. If a single one
      disagrees, the file has been restructured, addressing can no longer be
      trusted, and the whole merge aborts WITHOUT WRITING. Fail closed.
   3. Only whitelisted text fields are applied. Points, CP, ids, keywords and
      mechanics are never read from a slot file, so the text pass cannot
      change what the app computes.

   An id that no longer exists is reported and skipped, never guessed at.

   Usage:
     node tools/merge-text.js [faction ...]     apply
     node tools/merge-text.js --dry [faction]   report only, write nothing  */

const fs = require('fs');
const L = require('./lib');

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const only = args.filter(a => !a.startsWith('--'));

const data = L.loadData();
const targets = (only.length ? only : L.factions(data)).filter(f => data.factionData[f]);

let applied = 0, skipped = 0;
const unknown = [];
const drift = [];
const changes = [];

/* Context check: the slot file must still describe the same entry. */
const ctx = (slot, real, where, pairs) => {
  for (const [sk, rk] of pairs) {
    if (!(sk in slot)) continue;
    const a = slot[sk], b = real[rk];
    if (JSON.stringify(a) !== JSON.stringify(b)) {
      drift.push(`${where}: ${sk} is ${JSON.stringify(a)} in the slot file but ${JSON.stringify(b)} in data.js`);
    }
  }
};

const setField = (obj, field, value, where) => {
  if (value === undefined) return;
  const next = field === 'restrictions' && (value === null || value === '') ? undefined : value;
  if (JSON.stringify(obj[field]) === JSON.stringify(next)) { skipped += 1; return; }
  if (next === undefined) delete obj[field]; else obj[field] = next;
  applied += 1;
  changes.push(`${where}.${field}`);
};

const pending = [];

for (const f of targets) {
  const file = L.slotPath(f);
  if (!fs.existsSync(file)) { console.log(`  ${f}: no slot file, skipped`); continue; }

  let slots;
  try { slots = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { console.error(`  ! ${f}: slot file is not valid JSON — ${e.message}`); process.exit(1); }

  if (slots._meta && slots._meta.faction && slots._meta.faction !== f) {
    console.error(`  ! ${f}: this file says it is for "${slots._meta.faction}" — wrong faction file, aborting`);
    process.exit(1);
  }

  const fd = data.factionData[f];
  const ops = [];

  for (const [id, v] of Object.entries(slots.armyRules || {})) {
    const r = (fd.armyRules || []).find(x => x.id === id);
    if (!r) { unknown.push(`${f}.armyRules.${id}`); continue; }
    ctx(v, r, `${f}.armyRules.${id}`, [['_name', 'name']]);
    ops.push(() => setField(r, 'text', L.asParagraphs(v.text), `${f}.armyRules.${id}`));
  }

  for (const [did, dv] of Object.entries(slots.detachments || {})) {
    const d = (fd.detachments || []).find(x => x.id === did);
    if (!d) { unknown.push(`${f}.detachments.${did}`); continue; }
    ctx(dv, d, `${f}.${did}`, [['_name', 'name']]);

    if (dv.rule && d.rule) {
      ctx(dv.rule, d.rule, `${f}.${did}.rule`, [['_name', 'name']]);
      ops.push(() => setField(d.rule, 'text', dv.rule.text, `${f}.${did}.rule`));
    }

    for (const [sid, sv] of Object.entries(dv.stratagems || {})) {
      const s = (d.stratagems || []).find(x => x.id === sid);
      if (!s) { unknown.push(`${f}.${did}.stratagems.${sid}`); continue; }
      ctx(sv, s, `${f}.${did}.${sid}`, [['_name', 'name'], ['_cp', 'cp'], ['_type', 'type']]);
      for (const k of L.WRITABLE.stratagem) ops.push(() => setField(s, k, sv[k], `${f}.${did}.${sid}`));
    }

    for (const [eid, ev] of Object.entries(dv.enhancements || {})) {
      const e = (d.enhancements || []).find(x => x.id === eid);
      if (!e) { unknown.push(`${f}.${did}.enhancements.${eid}`); continue; }
      ctx(ev, e, `${f}.${did}.${eid}`, [['_name', 'name'], ['_pts', 'pts']]);
      ops.push(() => setField(e, 'text', ev.text, `${f}.${did}.${eid}`));
    }
  }

  for (const [uid, uv] of Object.entries(slots.units || {})) {
    const u = (fd.units || []).find(x => x.id === uid);
    if (!u) { unknown.push(`${f}.units.${uid}`); continue; }
    ctx(uv, u, `${f}.units.${uid}`, [['_name', 'name']]);
    const seen = new Set();
    const byKey = new Map();
    (u.abilities || []).forEach((a, i) => byKey.set(L.abilityKey(a, i, seen), a));
    for (const [akey, av] of Object.entries(uv.abilities || {})) {
      const a = byKey.get(akey);
      if (!a) { unknown.push(`${f}.units.${uid}.abilities["${akey}"] — no ability with that name on this unit`); continue; }
      ops.push(() => setField(a, 'text', av.text, `${f}.${uid}."${akey}"`));
    }
  }

  pending.push({ f, ops });
}

/* Nothing is written until every slot file has passed its context check. */
if (drift.length) {
  console.error(`\nABORTED — ${drift.length} context mismatch(es). Addressing cannot be trusted, nothing was written.\n`);
  drift.slice(0, 25).forEach(d => console.error(`   x ${d}`));
  if (drift.length > 25) console.error(`   ... +${drift.length - 25} more`);
  console.error('\nThe _ fields are read-only labels. Regenerate with "node tools/gen-slots.js <faction>"');
  console.error('and re-apply the wording, rather than editing them back by hand.');
  process.exit(1);
}

for (const { f, ops } of pending) {
  const before = applied;
  ops.forEach(fn => fn());
  console.log(`  ${f.padEnd(17)} ${applied - before} field(s) updated`);
}

if (unknown.length) {
  console.log(`\n  ${unknown.length} unknown id(s) — NOT applied (renamed id, or stale slot file):`);
  unknown.slice(0, 20).forEach(u => console.log(`   ? ${u}`));
  if (unknown.length > 20) console.log(`   ... +${unknown.length - 20} more`);
  process.exitCode = 1;
}

console.log(`\n  applied ${applied}, unchanged ${skipped}`);
if (dry) console.log('  --dry: data.js not written');
else if (applied) console.log(`  data.js rewritten (${L.writeData(data)} bytes)`);
else console.log('  nothing to write');
console.log('  next: node tools/validate-data.js');
