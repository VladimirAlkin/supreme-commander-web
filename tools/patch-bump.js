#!/usr/bin/env node
'use strict';
/* patch-bump.js — move meta.factionVersions for the armies a patch touched.

   Usage: node tools/patch-bump.js <patch-id> <army> [army …]

   A saved roster stores the data version of its army; when the army's
   version moves, Engine.validate shows "This roster was built with an older
   data version. Check points and rules." That warning is how a user learns
   that points or rules under an old list have changed. Every army in the
   patch-diff — including Chapter armies that only inherit a changed pool
   unit — needs this.                                                     */

const L = require('./lib');
const [patch, ...armies] = process.argv.slice(2);
if (!patch || !armies.length) { console.error('usage: node tools/patch-bump.js <patch-id> <army> [army …]'); process.exit(2); }
const d = L.loadData();
const fv = d.meta.factionVersions = d.meta.factionVersions || {};
const day = new Date().toISOString().slice(0, 10);
for (const a of armies) {
  if (!d.factionData[a]) { console.error(`unknown army: ${a}`); process.exit(2); }
  const was = fv[a] || d.meta.dataVersion;
  fv[a] = `${day}-${patch}`;
  console.log(`${a}: ${was} → ${fv[a]}`);
}
L.writeData(d);
