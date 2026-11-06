#!/usr/bin/env node
'use strict';
/* patch-diff.js — what a patch actually changed in the data, checked against
   what the patch table says it should change.

   Usage:
     node tools/patch-diff.js <before> <after>                     list changes
     node tools/patch-diff.js <before> <after> --expect table.json  gate
     options: -v (every row), --json (machine output)

   Snapshots come from tools/patch-snapshot.js (.json or .json.gz).

   table.json: { "patch": "...", "source": "...", "rows": [
       { "n": 1, "army": "bloodAngels", "kind": "units", "id": "commander_dante",
         "field": "baseSize", "from": "40mm", "to": "50mm", "how": "data", "src": "p. 2" } ] }
     field  optional; a path prefix ("ranged[Plasma pistol]" covers every
            column of that weapon). Without it any change to the entry counts.
     to     optional; when given the after-value must equal it exactly.

   A change in an inherited entry (a Chapter army showing a Space Marines pool
   unit) is expected when the table has the row for the owning army; it is
   listed as "via <owner>", never as extra.

   Gate (exit 1 when any is non-zero):
     EXTRA     changed but no table row covers it
     MISSING   table row with no matching change
     MISMATCH  row's "to" differs from the after-value
     VERSION   an army changed but meta.factionVersions[army] did not move,
               so saved rosters would not get the "older data" warning    */

const path = require('path');
const { read } = require('./patch-snapshot');

const args = process.argv.slice(2);
const flag = f => args.includes(f);
const opt = f => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };
const files = args.filter((a, i) => !a.startsWith('-') && args[i - 1] !== '--expect');
if (files.length < 2) { console.error('usage: node tools/patch-diff.js <before> <after> [--expect table.json] [-v] [--json]'); process.exit(2); }

const A = read(files[0]), B = read(files[1]);
const table = opt('--expect') ? require(path.resolve(opt('--expect'))) : null;
const rows = table ? (table.rows || []) : [];

const split = k => { const p = k.split('|'); return { army: p[0], kind: p[1], id: p[2], field: p.slice(3).join('|') }; };
const under = (field, prefix) => !prefix || field === prefix || field.startsWith(prefix + '.') || field.startsWith(prefix + '[');

/* every changed leaf */
const changes = [];
for (const k of new Set([...Object.keys(A.rows), ...Object.keys(B.rows)])) {
  const a = A.rows[k], b = B.rows[k];
  if (a === b) continue;
  const c = split(k);
  c.key = k; c.from = a; c.to = b;
  c.owner = (B.owners[`${c.army}|${c.kind}|${c.id}`] || A.owners[`${c.army}|${c.kind}|${c.id}`]) || c.army;
  changes.push(c);
}
const meta = changes.filter(c => c.army === '_meta');
const data = changes.filter(c => c.army !== '_meta');

/* match */
const hit = new Map(rows.map(r => [r, []]));
const extra = [], via = [];
for (const c of data) {
  const r = rows.find(r => r.army === c.owner && r.kind === c.kind && r.id === c.id && under(c.field, r.field));
  if (!r) { extra.push(c); continue; }
  hit.get(r).push(c);
  if (c.owner !== c.army) via.push(c);
}
const missing = table ? rows.filter(r => !hit.get(r).length) : [];
const mismatch = [];
for (const r of rows) if (r.to !== undefined && r.field) {
  const exact = hit.get(r).filter(c => c.field === r.field && c.army === r.army);
  for (const c of exact) if (String(c.to) !== String(r.to)) mismatch.push({ r, c });
}
const touched = [...new Set(data.map(c => c.army))].filter(a => a !== '_core');
const bumped = new Set(meta.map(c => c.id));
const version = table ? touched.filter(a => !bumped.has(a)) : [];
const outside = table ? [...new Set(extra.map(c => c.army))].filter(a => !rows.some(r => r.army === a)) : [];

if (flag('--json')) {
  console.log(JSON.stringify({ changes: data.length, extra, missing, mismatch, version, via: via.length, touched, metaBumped: [...bumped] }, null, 1));
} else {
  const v = x => x === undefined ? '∅' : JSON.stringify(x).slice(0, 90);
  const line = c => `  ${c.army}|${c.kind}|${c.id}|${c.field}: ${v(c.from)} → ${v(c.to)}`;
  const LIM = flag('-v') ? Infinity : 15;
  console.log(`patch-diff ${A.sha ? A.sha.slice(0, 7) : '?'} → ${B.sha ? B.sha.slice(0, 7) : '?'}: ${data.length} changed rows in ${touched.length} armies${touched.length ? ' (' + touched.join(', ') + ')' : ''}`);
  if (bumped.size) console.log(`  versions moved: ${[...bumped].join(', ')}`);
  if (table) {
    for (const r of rows) {
      const n = hit.get(r).length, own = hit.get(r).filter(c => c.army === r.army).length;
      console.log(`  ${n ? 'OK ' : '-- '} #${r.n} ${r.army}/${r.id}${r.field ? ' ' + r.field : ''}: ${own} row(s)${n > own ? ` + ${n - own} via inheritance` : ''}`);
    }
    console.log(`EXTRA ${extra.length} · MISSING ${missing.length} · MISMATCH ${mismatch.length} · VERSION ${version.length} · armies outside table ${outside.length}`);
    if (extra.length) { console.log('EXTRA (changed, no table row):'); extra.slice(0, LIM).forEach(c => console.log(line(c))); if (extra.length > LIM) console.log(`  … ${extra.length - LIM} more (-v)`); }
    if (outside.length) console.log(`ARMIES OUTSIDE TABLE: ${outside.join(', ')}`);
    if (missing.length) { console.log('MISSING (row, no change):'); missing.forEach(r => console.log(`  #${r.n} ${r.army}|${r.kind}|${r.id}|${r.field || '*'}`)); }
    if (mismatch.length) { console.log('MISMATCH (to ≠ after):'); mismatch.forEach(({ r, c }) => console.log(`  #${r.n} ${c.key}: want ${v(r.to)}, got ${v(c.to)}`)); }
    if (version.length) console.log(`VERSION not moved for: ${version.join(', ')} → node tools/patch-bump.js <patch> ${version.join(' ')}`);
  } else {
    data.slice(0, LIM).forEach(c => console.log(line(c)));
    if (data.length > LIM) console.log(`  … ${data.length - LIM} more (-v)`);
  }
}
process.exit(table && (extra.length || missing.length || mismatch.length || version.length) ? 1 : 0);
