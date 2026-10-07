'use strict';
/* Shared helpers for the data pipeline. data.js is GENERATED output:
   parse -> JSON.stringify(indent 1) -> write is byte-identical, which is what
   makes automated rewriting safe. Never hand-edit data.js. */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_JS = path.join(ROOT, 'data.js');
const TEXT_DIR = path.join(ROOT, 'text');

const HEAD = 'const DATA = ';
const TAIL = ';\nif (typeof module !== "undefined") module.exports = DATA;\n';

function loadData() {
  delete require.cache[require.resolve(DATA_JS)];
  return require(DATA_JS);
}

function writeData(data) {
  const out = HEAD + JSON.stringify(data, null, 1) + TAIL;
  fs.writeFileSync(DATA_JS, out);
  return out.length;
}

/* Keys beginning with "_" are read-only context shown to the text author.
   They are never merged back, so points, ids, CP and mechanics cannot be
   changed from a slot file. */
const isCtx = k => k.startsWith('_');

/* Text fields that may be written from slot files, per entity type. */
const WRITABLE = {
  armyRule: ['text'],
  detachmentRule: ['text'],
  stratagem: ['when', 'target', 'effect', 'restrictions'],
  enhancement: ['text'],
  unitAbility: ['text'],
};

/* armyRules[].text renders as one <p> per entry and must be an array.
   A bare string is accepted and wrapped, so the shape cannot break the app. */
const asParagraphs = v => (v == null ? [] : Array.isArray(v) ? v.slice() : [String(v)]);

const factions = data => Object.keys(data.factionData);

function abilityKey(ability, i, seen) {
  const base = ability.name || `ability_${i}`;
  if (!seen.has(base)) { seen.add(base); return base; }
  let n = 2, k = `${base} #${n}`;
  while (seen.has(k)) { n += 1; k = `${base} #${n}`; }
  seen.add(k);
  return k;
}

const slotPath = f => path.join(TEXT_DIR, `${f}.slots.json`);

module.exports = {
  ROOT, DATA_JS, TEXT_DIR, slotPath,
  loadData, writeData, isCtx, WRITABLE, asParagraphs, factions, abilityKey,
};
