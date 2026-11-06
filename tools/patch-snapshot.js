#!/usr/bin/env node
'use strict';
/* patch-snapshot.js — flat snapshot of every army's data, for patch-diff.

   Usage: node tools/patch-snapshot.js <out.json>

   Each leaf becomes one row:  "<army>|<kind>|<id>|<field path>": value
     army   factionData key, or "_core" for gameRules, "_meta" for versions
     kind   top-level list of the army (units, detachments, armyRules, …)
     id     entry id (or name)
     field  path inside the entry; nested lists are addressed by id/name:
            weapons[Plasma pistol – supercharge].keywords
   Arrays of strings (keywords, text paragraphs) are one row each, so a
   changed keyword is one diff row, not a reshuffled index list.

   Inherited entries (Chapter armies drawing on the Space Marines pool,
   via Engine.inherit) are snapshotted under every army that shows them,
   with owners[<army>|<kind>|<id>] = the army that owns the entry. That is
   how patch-diff tells "changed in the pool, seen in Blood Angels" from a
   change made in Blood Angels itself.                                    */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ROOT = path.join(__dirname, '..');

function load() {
  for (const f of ['data.js', 'engine.js']) delete require.cache[require.resolve(path.join(ROOT, f))];
  const DATA = require(path.join(ROOT, 'data.js'));
  const Engine = require(path.join(ROOT, 'engine.js'));
  return { DATA, Engine };
}

const keyOf = (x, i) => (x && typeof x === 'object' && (x.id || x.name)) || String(i);
const isStrArr = a => Array.isArray(a) && a.every(x => typeof x !== 'object' || x === null);

function flatten(v, prefix, out) {
  if (v === undefined) return;
  if (v === null || typeof v !== 'object') { out[prefix] = v; return; }
  if (Array.isArray(v)) {
    if (isStrArr(v)) { out[prefix] = v.join(' ¦ '); return; }
    v.forEach((x, i) => flatten(x, `${prefix}[${keyOf(x, i)}]`, out));
    return;
  }
  for (const k of Object.keys(v)) flatten(v[k], prefix ? `${prefix}.${k}` : k, out);
}

function snapshot() {
  const { DATA, Engine } = load();
  const rows = {}, owners = {};
  const own = new Map();                       // entry object -> army that stores it
  const FD = DATA.factionData || {};
  for (const army of Object.keys(FD)) for (const kind of Object.keys(FD[army])) {
    const v = FD[army][kind];
    if (Array.isArray(v)) v.forEach(x => { if (x && typeof x === 'object') own.set(x, army); });
  }
  Engine.inherit(DATA);                        // Chapter armies now see the pool's entries
  for (const army of Object.keys(FD)) {
    const fd = FD[army];
    for (const kind of Object.keys(fd)) {
      const v = fd[kind];
      if (Array.isArray(v) && v.some(x => x && typeof x === 'object')) {
        v.forEach((x, i) => {
          const id = keyOf(x, i), base = `${army}|${kind}|${id}`;
          const o = {}; flatten(x, '', o);
          for (const f of Object.keys(o)) rows[`${base}|${f}`] = o[f];
          const owner = own.get(x);
          if (owner && owner !== army) owners[base] = owner;
        });
      } else {
        const o = {}; flatten(v, '', o);
        for (const f of Object.keys(o)) rows[`${army}|${kind}|-|${f}`] = o[f];
      }
    }
  }
  const core = {}; flatten(DATA.gameRules, '', core);
  for (const f of Object.keys(core)) rows[`_core|gameRules|-|${f}`] = core[f];
  for (const [a, v] of Object.entries((DATA.meta && DATA.meta.factionVersions) || {})) rows[`_meta|factionVersions|${a}|`] = v;
  let sha = null; try { sha = execSync('git rev-parse HEAD', { cwd: ROOT }).toString().trim(); } catch (e) { }
  return { sha, takenAt: new Date().toISOString(), dataVersion: DATA.meta && DATA.meta.dataVersion, rows, owners };
}

/* *.gz is gzipped (a full snapshot is ~8 MB of JSON, ~1 MB gzipped) */
const zlib = require('zlib');
function write(file, s) {
  const buf = Buffer.from(JSON.stringify(s));
  fs.writeFileSync(file, file.endsWith('.gz') ? zlib.gzipSync(buf, { level: 9 }) : buf);
}
function read(file) {
  const buf = fs.readFileSync(file);
  return JSON.parse((file.endsWith('.gz') ? zlib.gunzipSync(buf) : buf).toString('utf8'));
}

if (require.main === module) {
  const out = process.argv[2];
  if (!out) { console.error('usage: node tools/patch-snapshot.js <out.json>'); process.exit(2); }
  const s = snapshot();
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  write(out, s);
  console.log(`snapshot ${out}: ${Object.keys(s.rows).length} rows, ${Object.keys(s.owners).length} inherited entries, HEAD ${s.sha ? s.sha.slice(0, 7) : '?'}`);
}
module.exports = { snapshot, read, write };
