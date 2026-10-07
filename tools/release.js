#!/usr/bin/env node
'use strict';
/* release.js — bump every cache-busting marker in one step.

   Four markers must move together or a phone keeps serving stale files:
     sw.js      CACHE      changing it is what makes the service worker
                           purge the old cache on activate
     index.html SC_BUILD   what the running app believes it is
     version.json build    what the live site reports; "Check for updates"
                           compares the two, so they must match each other
                           and differ from the previously shipped build
     VERSION               plain marker

   Note: the service worker matches with ignoreSearch, so a ?v= query string
   does NOT bust its cache. Changing CACHE is the only thing that does.

   Usage: node tools/release.js [--id <build-id>] [--check]                */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const L = require('./lib');

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const idArg = args.includes('--id') ? args[args.indexOf('--id') + 1] : null;

const p = n => path.join(L.ROOT, n);
const read = n => fs.readFileSync(p(n), 'utf8');

const cur = {
  cache: (read('sw.js').match(/const CACHE = '([^']+)'/) || [])[1],
  build: (read('index.html').match(/window\.SC_BUILD = "([^"]+)"/) || [])[1],
  json: JSON.parse(read('version.json')).build,
  version: read('VERSION').trim(),
};

console.log('current:');
console.log(`  sw.js CACHE     ${cur.cache}`);
console.log(`  SC_BUILD        ${cur.build}`);
console.log(`  version.json    ${cur.json}`);
console.log(`  VERSION         ${cur.version}`);

const consistent = cur.build === cur.json;
if (!consistent) console.log('\n  ! SC_BUILD and version.json disagree — the in-app update check misreports');

if (checkOnly) {
  console.log(`\n${consistent ? 'PASS' : 'FAIL'} — markers ${consistent ? 'consistent' : 'inconsistent'}`);
  process.exit(consistent ? 0 : 1);
}

let short = 'nogit';
try { short = execSync('git rev-parse --short HEAD', { cwd: L.ROOT }).toString().trim(); } catch (e) {}
const d = new Date();
const stamp = `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;
const id = idArg || `${stamp}-${short}`;

if (id === cur.build) {
  console.error(`\n! build id "${id}" is already shipped. Commit first, or pass --id <something-new>.`);
  process.exit(1);
}

const cacheId = `sc-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
const sub = (file, re, next) => {
  const s = read(file);
  if (!re.test(s)) { console.error(`! pattern not found in ${file}`); process.exit(1); }
  fs.writeFileSync(p(file), s.replace(re, next));
};

sub('sw.js', /const CACHE = '[^']+'/, `const CACHE = '${cacheId}'`);
sub('index.html', /window\.SC_BUILD = "[^"]+"/, `window.SC_BUILD = "${id}"`);
fs.writeFileSync(p('version.json'), JSON.stringify({ build: id }));
fs.writeFileSync(p('VERSION'), id + '\n');

console.log('\nbumped to:');
console.log(`  sw.js CACHE     ${cacheId}`);
console.log(`  SC_BUILD        ${id}`);
console.log(`  version.json    ${id}`);
console.log(`  VERSION         ${id}`);
console.log('\nCommit and push the branch; GitHub Pages rebuilds in ~1 min.');
