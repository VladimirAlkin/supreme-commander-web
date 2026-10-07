#!/usr/bin/env node
'use strict';
/* mechanics-diff.js — what changed in data.js that is NOT wording.

   The text role is supposed to change prose and nothing else. This proves
   whether that held. It compares the current data.js against any git ref and
   reports every difference outside the prose fields: ids, points, CP,
   keywords, core abilities, buffs, option rules, array lengths.

   Why it exists: a "text-only" pass silently dropped core abilities, renamed
   abilities, and replaced a detachment buff with keys the engine does not
   read. One of those threw inside render() and left the entire UI frozen.

   Usage: node tools/mechanics-diff.js [ref]        (default: main)
          node tools/mechanics-diff.js main --full                          */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const L = require('./lib');

const ref = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'main';
const full = process.argv.includes('--full');

const tmp = path.join(require('os').tmpdir(), `scw-base-${process.pid}.js`);
try {
  fs.writeFileSync(tmp, execSync(`git -C "${L.ROOT}" show ${ref}:data.js`, { maxBuffer: 1 << 28 }));
} catch (e) {
  console.error(`! cannot read data.js at "${ref}": ${e.message}`);
  process.exit(1);
}

const A = require(tmp).factionData;
const B = L.loadData().factionData;
fs.unlinkSync(tmp);

/* Prose is expected to change. buffs.target is a mechanics field that happens
   to share a name with a stratagem's prose field, so it is excluded by path. */
const PROSE = /\.(when|target|effect|restrictions|text|summary|notes?|composition|compositionNote|faithNote|impNote|reqText|message|why|stamp)(\[\d+\])?$/;
const isProse = p => PROSE.test(p) && !/\.buffs\[/.test(p);

const flat = o => {
  const m = {};
  (function walk(x, p) {
    if (x === null || typeof x !== 'object') { m[p] = x; return; }
    if (Array.isArray(x)) { m[p + '.length'] = x.length; x.forEach((y, i) => walk(y, `${p}[${i}]`)); return; }
    for (const k of Object.keys(x)) walk(x[k], `${p}.${k}`);
  })(o, '');
  return m;
};

const a = flat(A), b = flat(B);
const rows = [];
for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
  if (isProse(k)) continue;
  if (!(k in a)) rows.push(['ADDED  ', k, JSON.stringify(b[k])]);
  else if (!(k in b)) rows.push(['REMOVED', k, JSON.stringify(a[k])]);
  else if (a[k] !== b[k]) rows.push(['CHANGED', k, `${JSON.stringify(a[k])} -> ${JSON.stringify(b[k])}`]);
}

const byFaction = {};
for (const r of rows) {
  const f = (r[1].match(/^\.(\w+)/) || [, '(root)'])[1];
  (byFaction[f] = byFaction[f] || []).push(r);
}

console.log(`mechanics differences vs ${ref}: ${rows.length}\n`);
for (const f of Object.keys(byFaction)) {
  const list = byFaction[f];
  console.log(`  ${f}  (${list.length})`);
  for (const [t, k, v] of (full ? list : list.slice(0, 10))) console.log(`    ${t} ${k}\n              ${v}`);
  if (!full && list.length > 10) console.log(`    ... +${list.length - 10} more (--full to see all)`);
  console.log('');
}
if (!rows.length) console.log('  none — the pass changed wording only.');
process.exit(rows.length ? 1 : 0);
