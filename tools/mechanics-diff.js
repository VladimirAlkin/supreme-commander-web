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
          node tools/mechanics-diff.js main --full
          node tools/mechanics-diff.js main --all   (ignore the reviewed ledger) */

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
/* armyRules[].text is a list of paragraphs: how many there are, and whether it
   is still a bare string, is wording, not mechanics. */
const isProse = p => (PROSE.test(p) && !/\.buffs\[/.test(p)) || /\.armyRules\[\d+\]\.text\.length$/.test(p);

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

/* docs/mechanics-accepted.json: mechanics changes vs main that were reviewed
   against a source and kept. An entry only matches when path, change type and
   value are identical, so a later edit to the same field shows up again.
   --all ignores the ledger. */
const all = process.argv.includes('--all');
const ledgerFile = path.join(L.ROOT, 'docs', 'mechanics-accepted.json');
let accepted = 0;
if (!all && fs.existsSync(ledgerFile)) {
  const ledger = JSON.parse(fs.readFileSync(ledgerFile, 'utf8'));
  if (ledger.ref === ref) {
    const ok = new Set(ledger.entries.map(e => `${e.change}|${e.path}|${e.value}`));
    const seen = new Set();
    for (let i = rows.length - 1; i >= 0; i--) {
      const k = `${rows[i][0].trim()}|${rows[i][1]}|${rows[i][2]}`;
      if (ok.has(k)) { rows.splice(i, 1); accepted += 1; seen.add(k); }
    }
    /* A reviewed fix that is no longer there was undone: that reintroduces a
       known error, so it counts against the pass like any other change. */
    for (const e of ledger.entries) {
      const k = `${e.change}|${e.path}|${e.value}`;
      if (!seen.has(k)) rows.push(['REVERTED', e.path, `${e.value}  (reviewed fix no longer present: ${e.why})`]);
    }
  }
}
if (accepted) console.log(`${accepted} reviewed change(s) vs ${ref} accepted from docs/mechanics-accepted.json (--all to show them)`);

const byFaction = {};
for (const r of rows) {
  const f = (r[1].match(/^\.(\w+)/) || [, '(root)'])[1];
  (byFaction[f] = byFaction[f] || []).push(r);
}

console.log(`unreviewed mechanics differences vs ${ref}: ${rows.length}\n`);
for (const f of Object.keys(byFaction)) {
  const list = byFaction[f];
  console.log(`  ${f}  (${list.length})`);
  for (const [t, k, v] of (full ? list : list.slice(0, 10))) console.log(`    ${t} ${k}\n              ${v}`);
  if (!full && list.length > 10) console.log(`    ... +${list.length - 10} more (--full to see all)`);
  console.log('');
}
if (!rows.length) console.log('  none — the pass changed wording only.');
process.exit(rows.length ? 1 : 0);
