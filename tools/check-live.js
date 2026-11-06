#!/usr/bin/env node
'use strict';
/* check-live.js — does the live site serve the build that was just pushed?

   Usage: node tools/check-live.js [--wait <seconds>]

   Compares version.json on GitHub Pages with the local one (both written by
   tools/release.js). Exit 0 = live matches; 1 = live serves another build
   (Pages may still be deploying: retry, or --wait 300); 3 = site not
   reachable from here — the cloud container usually cannot reach it, so ask
   the owner to open the app and tap "Check for updates", then compare the
   build shown with the one printed below.                                */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const URL = 'https://vladimiralkin.github.io/supreme-commander-web/version.json';
const local = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'version.json'), 'utf8')).build;

const i = process.argv.indexOf('--wait');
const until = Date.now() + (i > 0 ? Number(process.argv[i + 1]) || 0 : 0) * 1000;

function live() {
  try {
    const out = execFileSync('curl', ['-sS', '--max-time', '15', '-H', 'Cache-Control: no-cache', `${URL}?t=${Date.now()}`], { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
    return JSON.parse(out).build;
  } catch (e) { return null; }
}

(async () => {
  for (;;) {
    const b = live();
    if (b === null) { console.log(`check-live: ${URL} not reachable from here. Expected build ${local} — ask the owner to tap "Check for updates" and compare.`); process.exit(3); }
    if (b === local) { console.log(`check-live: OK, live serves ${b}`); process.exit(0); }
    if (Date.now() >= until) { console.log(`check-live: live serves ${b}, local is ${local}`); process.exit(1); }
    await new Promise(r => setTimeout(r, 20000));
  }
})();
