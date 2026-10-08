'use strict';
/* official.js — the official-app text set (text/official.json).

   Wording copied from the official Warhammer 40,000 app (screenshots) is the
   top source. Each entry pins one text field to that wording. validate-data
   fails if data.js differs (E-OFFICIAL), and tools/rules/fill-slots.js writes
   these last, so no rebuild from Wahapedia or BSData can roll them back.

   An entry is addressed by names, the way the app shows it:
     { faction, cat: "strat"|"enh"|"det-rule"|"army-rule"|"unit-abil",
       det?, unit?, name, field, text, source }
   field is "text" except for stratagems (when / target / effect /
   restrictions). For army-rule, text is the list of paragraphs. */

const fs = require('fs');
const path = require('path');
const L = require('./lib');

const FILE = path.join(L.TEXT_DIR, 'official.json');

function load() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf8')).entries || [];
}

/* -> { obj, field, slot: (slots) => [container, key], where } or { error } */
function resolve(data, e) {
  const fd = data.factionData[e.faction];
  if (!fd) return { error: `no faction "${e.faction}"` };
  const field = e.field || 'text';
  const where = `${e.faction} ${e.cat} ${e.det || e.unit || ''} / ${e.name}.${field}`;
  const det = () => (fd.detachments || []).find(d => d.name === e.det);
  if (e.cat === 'army-rule') {
    const r = (fd.armyRules || []).find(x => x.name === e.name);
    if (!r) return { error: `${where}: army rule not found` };
    return { obj: r, field: 'text', where, slot: s => [s.armyRules[r.id], 'text'] };
  }
  if (e.cat === 'det-rule') {
    const d = det();
    if (!d || !d.rule || d.rule.name !== e.name) return { error: `${where}: detachment rule not found` };
    return { obj: d.rule, field: 'text', where, slot: s => [s.detachments[d.id].rule, 'text'] };
  }
  if (e.cat === 'strat' || e.cat === 'enh') {
    const d = det();
    if (!d) return { error: `${where}: detachment "${e.det}" not found` };
    const list = e.cat === 'strat' ? d.stratagems : d.enhancements;
    const x = (list || []).find(y => y.name === e.name);
    if (!x) return { error: `${where}: not found in ${e.det}` };
    const group = e.cat === 'strat' ? 'stratagems' : 'enhancements';
    return { obj: x, field, where, slot: s => [s.detachments[d.id][group][x.id], field] };
  }
  if (e.cat === 'unit-abil') {
    const u = (fd.units || []).find(x => x.name === e.unit);
    if (!u) return { error: `${where}: unit not found` };
    const seen = new Set();
    let key = null, obj = null;
    (u.abilities || []).forEach((a, i) => { const k = L.abilityKey(a, i, seen); if (!obj && a.name === e.name) { obj = a; key = k; } });
    if (!obj) return { error: `${where}: ability not found on ${u.name}` };
    return { obj, field: 'text', where, slot: s => [s.units[u.id].abilities[key], 'text'] };
  }
  return { error: `${where}: unknown cat "${e.cat}"` };
}

const same = (a, b) => JSON.stringify(a == null ? null : a) === JSON.stringify(b == null ? null : b);

module.exports = { FILE, load, resolve, same };
