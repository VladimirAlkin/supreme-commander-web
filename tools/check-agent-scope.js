#!/usr/bin/env node
'use strict';
/* check-agent-scope.js — did the text role stay inside text/inbox/ ?

   Run this FIRST on anything handed over. It is cheap and it catches the
   whole class of damage that cost the most: a pass advertised as text-only
   that quietly edited data.js, engine.js or a mechanics field.

   Usage: node tools/check-agent-scope.js <base>..<head>
          node tools/check-agent-scope.js            (defaults to main..HEAD)
   Exit:  0 inside scope, 1 outside.                                        */

const { execSync } = require('child_process');
const L = require('./lib');

const range = process.argv[2] || 'main..HEAD';
const ALLOWED = /^text\/inbox\//;

let files;
try {
  files = execSync(`git -C "${L.ROOT}" diff --name-only ${range}`, { encoding: 'utf8' })
    .split('\n').map(s => s.trim()).filter(Boolean);
} catch (e) {
  console.error(`! cannot diff "${range}": ${e.message}`);
  process.exit(1);
}

if (!files.length) { console.log(`no files changed in ${range}`); process.exit(0); }

const outside = files.filter(f => !ALLOWED.test(f));
const inside = files.filter(f => ALLOWED.test(f));

console.log(`${range}: ${files.length} file(s) changed`);
if (inside.length) {
  console.log(`\n  in scope (${inside.length}):`);
  inside.slice(0, 20).forEach(f => console.log(`   + ${f}`));
  if (inside.length > 20) console.log(`   ... +${inside.length - 20} more`);
}

if (!outside.length) { console.log('\nPASS — nothing touched outside text/inbox/'); process.exit(0); }

console.log(`\n  OUT OF SCOPE (${outside.length}) — the text role may not change these:`);
outside.forEach(f => console.log(`   x ${f}`));
console.log('\nFAIL — do not merge this as-is.');
console.log('Keep the inbox files, drop the rest:');
console.log(`  git checkout ${range.split('..')[0]} -- ${outside.join(' ')}`);
console.log('Then re-run this check, and run tools/mechanics-diff.js before shipping.');
process.exit(1);
