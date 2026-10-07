#!/usr/bin/env node
'use strict';
/* gen-slots.js — build text/<faction>.slots.json from data.js.

   Slot files are the ONLY surface the text author touches. Every entry is
   addressed by the stable id already in data.js, so nothing can be filed
   under the wrong unit or stratagem.

   Keys starting with "_" are read-only context (name, CP, points) shown so
   the author can identify the entry. They are ignored on merge.

   Usage: node tools/gen-slots.js [faction ...]        (default: all)  */

const fs = require('fs');
const L = require('./lib');

const data = L.loadData();
const only = process.argv.slice(2);
const targets = (only.length ? only : L.factions(data)).filter(f => {
  if (data.factionData[f]) return true;
  console.error(`  ! unknown faction: ${f}`);
  return false;
});

fs.mkdirSync(L.TEXT_DIR, { recursive: true });

for (const f of targets) {
  const fd = data.factionData[f];
  const slots = {
    _meta: {
      faction: f,
      factionName: (data.factions.find(x => x.id === f) || {}).name || f,
      dataVersion: data.meta.factionVersions[f] || data.meta.dataVersion,
      generatedAt: new Date().toISOString().slice(0, 10),
      howTo: 'docs/TEXT-PIPELINE.md',
      rules: [
        'Edit ONLY the plain text fields. Keys starting with _ are context and are ignored.',
        'Plain text only: no HTML, no markdown, no ** or [] markup. Highlighting is automatic.',
        'Keep ALL-CAPS keywords, dice notation (D3, D6, 2D6, D6+3) and quotes/inches as written.',
        'armyRules text is a list: one entry per paragraph.',
        'Leave a field unchanged if you have not done it yet. Never delete a key.',
      ],
    },
    armyRules: {},
    detachments: {},
    units: {},
  };

  for (const r of fd.armyRules || []) {
    slots.armyRules[r.id] = { _name: r.name, text: L.asParagraphs(r.text) };
  }

  for (const d of fd.detachments || []) {
    const det = { _name: d.name, rule: null, stratagems: {}, enhancements: {} };
    if (d.rule) det.rule = { _name: d.rule.name, text: d.rule.text || '' };
    for (const s of d.stratagems || []) {
      det.stratagems[s.id] = {
        _name: s.name, _cp: s.cp, _type: s.type, _phases: s.phases,
        when: s.when || '', target: s.target || '', effect: s.effect || '',
        restrictions: s.restrictions === undefined ? null : s.restrictions,
      };
    }
    for (const e of d.enhancements || []) {
      det.enhancements[e.id] = { _name: e.name, _pts: e.pts, text: e.text || '' };
    }
    slots.detachments[d.id] = det;
  }

  for (const u of fd.units || []) {
    const abil = u.abilities || [];
    if (!abil.length) continue;
    const seen = new Set();
    const entry = { _name: u.name, abilities: {} };
    abil.forEach((a, i) => {
      entry.abilities[L.abilityKey(a, i, seen)] = { _kind: a.kind || null, text: a.text || '' };
    });
    slots.units[u.id] = entry;
  }

  const n = {
    armyRules: Object.keys(slots.armyRules).length,
    detachmentRules: Object.values(slots.detachments).filter(d => d.rule).length,
    stratagems: Object.values(slots.detachments).reduce((a, d) => a + Object.keys(d.stratagems).length, 0),
    enhancements: Object.values(slots.detachments).reduce((a, d) => a + Object.keys(d.enhancements).length, 0),
    unitAbilities: Object.values(slots.units).reduce((a, u) => a + Object.keys(u.abilities).length, 0),
  };
  slots._meta.counts = n;

  fs.writeFileSync(L.slotPath(f), JSON.stringify(slots, null, 1) + '\n');
  const total = Object.values(n).reduce((a, b) => a + b, 0);
  console.log(`  ${f.padEnd(17)} ${total} slots  (strat ${n.stratagems}, enh ${n.enhancements}, detRule ${n.detachmentRules}, armyRule ${n.armyRules}, unitAbil ${n.unitAbilities})`);
}
console.log(`\nwrote ${targets.length} slot file(s) to text/`);
