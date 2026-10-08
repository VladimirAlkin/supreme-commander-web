#!/usr/bin/env node
'use strict';
/* report.js <final.json> — what a person has to look at after a rebuild.
   Every field whose text would change data.js, grouped by the source that
   was chosen, plus the notes and open decisions from assemble.py. */
const fin = require(require('path').resolve(process.argv[2]));
const flat = v => (Array.isArray(v) ? v.join(' ') : v == null ? '' : String(v)).replace(/\s+/g, ' ').trim();
const diffs = x => x.cat === 'strat'
  ? ['when', 'target', 'effect', 'restrictions'].filter(k => flat(x.text[k]) !== flat(x.ours[k])).map(k => [k, x.ours[k], x.text[k]])
  : (flat(x.text) !== flat(x.ours) ? [['text', x.ours, x.text]] : []);
const by = {};
let n = 0;
for (const x of fin.final) {
  const d = diffs(x);
  if (!d.length) continue;
  n += 1;
  const src = x.src.replace(/:.*/, '');
  (by[src] = by[src] || []).push([x, d]);
}
const out = ['# Rules-text rebuild report', '', `${n} entr(ies) would change data.js.`, ''];
for (const [src, list] of Object.entries(by)) {
  out.push(`## ${src} (${list.length})`, '');
  for (const [x, d] of list) {
    out.push(`- **${x.f}** ${x.cat} — ${x.unit || x.det || ''} / ${x.name}  \`${x.status}\``);
    for (const [k, was, now] of d) out.push(`  - ${k} was: ${flat(was).slice(0, 300)}`, `  - ${k} now: ${flat(now).slice(0, 300)}`);
  }
  out.push('');
}
if (fin.notes.length) out.push('## Notes', '', ...fin.notes.map(s => `- ${s}`), '');
if (fin.review && fin.review.length) out.push('## Needs a decision', '', ...fin.review.map(s => `- ${s}`), '');
console.log(out.join('\n'));
