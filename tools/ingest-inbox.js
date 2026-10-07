#!/usr/bin/env node
'use strict';
/* ingest-inbox.js — plain text from the text role -> the slot files.

   The text role writes text/inbox/<faction>.<category>.md as flat blocks
   headed by the entry's NAME. It never sees an id and never chooses a
   destination. This resolves each name against data.js and writes the
   wording into the matching slot, so merge-text.js can apply it with its
   usual whitelist and context check.

   Nothing is guessed. A name that matches no entry, or more than one, is
   reported and skipped.

   Usage: node tools/ingest-inbox.js [faction ...]
          node tools/ingest-inbox.js --dry                                 */

const fs = require('fs');
const path = require('path');
const L = require('./lib');

const INBOX = path.join(L.TEXT_DIR, 'inbox');
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const only = args.filter(a => !a.startsWith('--'));

const CATS = ['stratagems', 'enhancements', 'detachment-rules', 'army-rules', 'unit-abilities'];
const norm = s => String(s || '').toLowerCase().replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();
/* Second chance on punctuation only: "Berzerkers' Wrath" vs "Berzerker's
   Wrath" is the same name typed differently, not a different entry. Letters
   and digits must still match exactly, and a loose key that hits more than
   one entry is reported as ambiguous rather than picked. */
const loose = s => norm(s).replace(/[^a-z0-9:]/g, '');

if (!fs.existsSync(INBOX)) { console.log('no text/inbox/ — nothing to ingest'); process.exit(0); }

/* ## Heading, then everything up to the next ## */
function blocks(src) {
  const out = [];
  let cur = null;
  for (const line of src.split('\n')) {
    const h = line.match(/^##\s+(.*\S)\s*$/);
    if (h) { if (cur) out.push(cur); cur = { name: h[1], lines: [] }; continue; }
    if (cur) cur.lines.push(line);
  }
  if (cur) out.push(cur);
  return out;
}

/* WHEN:/TARGET:/EFFECT:/RESTRICTIONS: — label order does not matter. */
function labelled(lines) {
  const f = {};
  let key = null;
  for (const line of lines) {
    const m = line.match(/^\s*(WHEN|TARGET|EFFECT|RESTRICTIONS)\s*:\s*(.*)$/i);
    if (m) { key = m[1].toLowerCase(); f[key] = m[2].trim(); continue; }
    if (key && line.trim()) f[key] = (f[key] ? f[key] + ' ' : '') + line.trim();
  }
  return f;
}

const body = lines => lines.join('\n').trim().replace(/\n{3,}/g, '\n\n');
const paragraphs = lines => body(lines).split(/\n\s*\n/).map(s => s.replace(/\s*\n\s*/g, ' ').trim()).filter(Boolean);

const data = L.loadData();
let wrote = 0;
const unmatched = [], ambiguous = [];

const factionsSeen = new Set();
const files = fs.readdirSync(INBOX).filter(f => f.endsWith('.md') && f !== 'README.md');

for (const file of files) {
  const m = file.match(/^(\w+)\.([a-z-]+)\.md$/);
  if (!m) { console.log(`  ? ${file}: name must be <faction>.<category>.md — skipped`); continue; }
  const [, faction, cat] = m;
  if (only.length && !only.includes(faction)) continue;
  if (!data.factionData[faction]) { console.log(`  ? ${file}: unknown faction "${faction}" — skipped`); continue; }
  if (!CATS.includes(cat)) { console.log(`  ? ${file}: unknown category "${cat}" — skipped`); continue; }

  const fd = data.factionData[faction];
  const slotFile = L.slotPath(faction);
  if (!fs.existsSync(slotFile)) { console.log(`  ! no slot file for ${faction}; run gen-slots.js first`); continue; }
  const slots = JSON.parse(fs.readFileSync(slotFile, 'utf8'));
  factionsSeen.add(faction);

  /* name -> writer, built from the app's own data */
  const index = new Map(), looseIndex = new Map();
  const add = (name, write) => {
    const k = norm(name);
    if (!k) return;
    if (index.has(k)) index.get(k).push(write); else index.set(k, [write]);
    const lk = loose(name);
    if (looseIndex.has(lk)) looseIndex.get(lk).push({ write, name }); else looseIndex.set(lk, [{ write, name }]);
  };

  if (cat === 'army-rules')
    for (const r of fd.armyRules || []) add(r.name, v => { slots.armyRules[r.id].text = paragraphs(v.lines); });

  if (cat === 'detachment-rules')
    for (const d of fd.detachments || []) if (d.rule) add(d.rule.name, v => { slots.detachments[d.id].rule.text = body(v.lines); });

  if (cat === 'stratagems')
    for (const d of fd.detachments || []) for (const s of d.stratagems || []) add(s.name, v => {
      const f = labelled(v.lines);
      const t = slots.detachments[d.id].stratagems[s.id];
      if (f.when) t.when = f.when;
      if (f.target) t.target = f.target;
      if (f.effect) t.effect = f.effect;
      if ('restrictions' in f) t.restrictions = f.restrictions || null;
    });

  if (cat === 'enhancements')
    for (const d of fd.detachments || []) for (const e of d.enhancements || []) add(e.name, v => { slots.detachments[d.id].enhancements[e.id].text = body(v.lines); });

  if (cat === 'unit-abilities')
    for (const u of fd.units || []) {
      const seen = new Set();
      (u.abilities || []).forEach((a, i) => {
        const key = L.abilityKey(a, i, seen);
        add(`${u.name} :: ${a.name}`, v => { slots.units[u.id].abilities[key].text = body(v.lines); });
      });
    }

  let n = 0;
  for (const b of blocks(fs.readFileSync(path.join(INBOX, file), 'utf8'))) {
    let hits = index.get(norm(b.name));
    if (hits && hits.length > 1) { ambiguous.push(`${file}: "${b.name}" matches ${hits.length} entries`); continue; }
    if (!hits) {
      const lh = looseIndex.get(loose(b.name));
      if (!lh) { unmatched.push(`${file}: "${b.name}"`); continue; }
      if (lh.length > 1) { ambiguous.push(`${file}: "${b.name}" matches ${lh.length} entries ignoring punctuation`); continue; }
      console.log(`     punctuation differs: "${b.name}" -> "${lh[0].name}"`);
      hits = [lh[0].write];
    }
    hits[0](b);
    n += 1; wrote += 1;
  }
  console.log(`  ${file.padEnd(38)} ${n} entr${n === 1 ? 'y' : 'ies'}`);
  if (!dry) fs.writeFileSync(slotFile, JSON.stringify(slots, null, 1) + '\n');
}

if (unmatched.length) {
  console.log(`\n  ${unmatched.length} name(s) matched nothing — hand this list back, do not guess:`);
  unmatched.slice(0, 30).forEach(u => console.log(`   ? ${u}`));
  if (unmatched.length > 30) console.log(`   ... +${unmatched.length - 30} more`);
}
if (ambiguous.length) {
  console.log(`\n  ${ambiguous.length} ambiguous name(s) — need the unit prefix "Unit :: Ability":`);
  ambiguous.forEach(a => console.log(`   ? ${a}`));
}

console.log(`\n  ingested ${wrote} entr${wrote === 1 ? 'y' : 'ies'} into ${factionsSeen.size} slot file(s)`);
if (dry) console.log('  --dry: slot files not written');
else if (wrote) console.log('  next: node tools/merge-text.js --dry');
process.exit(unmatched.length || ambiguous.length ? 1 : 0);
