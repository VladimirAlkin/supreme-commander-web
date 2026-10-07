#!/usr/bin/env node
'use strict';
/* validate-data.js — gate between a text pass and a deploy.

   ERRORS block the deploy: wrong type, empty required text, markup that the
   renderer would escape into visible junk. The array/string regression that
   broke every army page is error E-TYPE here.
   WARNINGS are worth a look but do not block.

   Usage: node tools/validate-data.js [--quiet]
   Exit:  0 clean (warnings allowed), 1 errors found.                      */

const L = require('./lib');

const data = L.loadData();
const quiet = process.argv.includes('--quiet');
const E = [], W = [];
const err = (code, where, msg) => E.push({ code, where, msg });
const warn = (code, where, msg) => W.push({ code, where, msg });

const MARKUP = /<\/?[a-z][\s\S]*?>|&(?:nbsp|amp|lt|gt|quot|#\d+);|\*\*|__|\[\[/i;
const PLACEHOLDER = /\bTODO\b|\bFIXME\b|\bTBD\b|<FILL>|PLACEHOLDER|LOREM/i;

/* A rules sentence should read as prose. These catch a parser that stopped
   mid-entry, which is what a crashed text pass leaves behind. */
function checkText(s, where, { required = true, long = 40 } = {}) {
  if (s === undefined || s === null) {
    if (required) err('E-MISSING', where, 'field is missing');
    return;
  }
  if (typeof s !== 'string') { err('E-TYPE', where, `expected string, got ${Array.isArray(s) ? 'array' : typeof s}`); return; }
  const t = s.trim();
  if (!t) { if (required) err('E-EMPTY', where, 'text is empty'); return; }
  if (MARKUP.test(s)) err('E-MARKUP', where, 'contains HTML/markdown markup — renderer escapes it, it will show as literal characters');
  if (PLACEHOLDER.test(s)) err('E-PLACEHOLDER', where, 'still contains a placeholder marker');
  if (/�/.test(s)) err('E-ENCODING', where, 'contains a replacement character (broken encoding)');
  if (t.length > long && !/[.!?:)"'\]”’]$/.test(t)) warn('W-UNTERMINATED', where, `ends without punctuation: "...${t.slice(-48)}"`);
  if (/(…|\.\.\.)$/.test(t)) warn('W-ELLIPSIS', where, 'ends in an ellipsis — may be cut off');
  if (/\s{3,}/.test(s)) warn('W-SPACING', where, 'has a run of 3+ spaces');
  /* "Any phase." and "That unit." are perfectly good when/target values, so
     only flag the fields that carry the actual rule. */
  if (/\.(effect|text)(\[\d+\])?$/.test(where) && t.length < 25) {
    warn('W-SHORT', where, `suspiciously short for a rule body: "${t}"`);
  }
}

for (const f of L.factions(data)) {
  const fd = data.factionData[f];

  for (const r of fd.armyRules || []) {
    const w = `${f}.armyRules.${r.id}`;
    if (!Array.isArray(r.text)) {
      /* The renderer tolerates both shapes and merge-text normalises on the
         way in, so this is untidy rather than broken. */
      warn('W-SHAPE', w, `text is a ${typeof r.text}; canonical shape is an array of paragraphs ("npm run merge" normalises it)`);
      checkText(r.text, `${w}.text`);
    } else {
      if (!r.text.length) err('E-EMPTY', w, 'no paragraphs');
      r.text.forEach((p, i) => checkText(p, `${w}.text[${i}]`));
    }
  }

  const detIds = new Set();
  for (const d of fd.detachments || []) {
    const dw = `${f}.${d.id}`;
    if (detIds.has(d.id)) err('E-DUPID', dw, 'duplicate detachment id');
    detIds.add(d.id);
    if (d.rule) checkText(d.rule.text, `${dw}.rule`);
    else err('E-MISSING', dw, 'detachment has no rule');

    /* Mechanics the engine reads without guarding. A buff with no scope threw
       inside render(), which left the whole screen unrendered and every
       control dead — the engine now skips such a buff, but the data is still
       wrong and the rule it encodes silently stops applying. */
    (d.buffs || []).forEach((b, i) => {
      const w = `${dw}.buffs[${i}]`;
      if (!b || typeof b !== 'object') { err('E-MECH', w, 'buff is not an object'); return; }
      if (!b.scope) err('E-MECH', w, 'buff has no scope — the engine cannot target it and will skip it');
      if (!b.source) warn('W-MECH', w, 'buff has no source, so the datasheet cannot say where the change came from');
      /* Exactly the keys engine.js reads in apply(): m.target, m.stat, m.add,
         m.set, m.improve, m.excludeKeyword, plus scope and source. */
      const known = ['scope', 'source', 'target', 'stat', 'add', 'set', 'improve', 'excludeKeyword'];
      const unknown = Object.keys(b).filter(k => !known.includes(k));
      if (unknown.length) err('E-MECH', w, `unknown buff keys [${unknown.join(', ')}] — the engine ignores these, so the rule does nothing`);
    });

    const sIds = new Set();
    for (const s of d.stratagems || []) {
      const w = `${dw}.${s.id}`;
      if (sIds.has(s.id)) err('E-DUPID', w, 'duplicate stratagem id');
      sIds.add(s.id);
      checkText(s.when, `${w}.when`);
      checkText(s.target, `${w}.target`);
      checkText(s.effect, `${w}.effect`);
      if (s.restrictions !== undefined) checkText(s.restrictions, `${w}.restrictions`, { required: false });
      if (typeof s.cp !== 'number') err('E-TYPE', w, 'cp must be a number');
      if (!Array.isArray(s.phases) || !s.phases.length) warn('W-PHASES', w, 'no phases listed — it will not appear in phase filters');
    }

    const eIds = new Set();
    for (const e of d.enhancements || []) {
      const w = `${dw}.${e.id}`;
      if (eIds.has(e.id)) err('E-DUPID', w, 'duplicate enhancement id');
      eIds.add(e.id);
      checkText(e.text, `${w}.text`);
      if (typeof e.pts !== 'number') err('E-TYPE', w, 'pts must be a number');
    }
  }

  for (const u of fd.units || []) {
    for (const a of u.abilities || []) {
      if (!a.name) { err('E-MISSING', `${f}.${u.id}`, 'ability without a name cannot be addressed by a slot file'); continue; }
      checkText(a.text, `${f}.${u.id}."${a.name}"`);
    }
  }

  if (!Array.isArray(fd.terms)) warn('W-TERMS', f, 'no terms list — faction phrases will not be highlighted');

  /* optionRules: the engine knows exactly three shapes. Anything else used to
     throw inside render(); the engine now skips it, which means the rule is
     silently not enforced. Every [optionId, value] must point at a real
     option and, for a choice, a real choice id. */
  for (const u of fd.units || []) {
    const opts = new Map((u.options || []).map(o => [o.id, o]));
    const refOk = (pair, w) => {
      if (!Array.isArray(pair) || pair.length !== 2) { err('E-MECH', w, `expected [optionId, value], got ${JSON.stringify(pair)}`); return; }
      const o = opts.get(pair[0]);
      if (!o) { err('E-MECH', w, `no option "${pair[0]}" on ${u.name} (options: ${[...opts.keys()].join(', ') || 'none'})`); return; }
      if (o.type === 'choice' && !o.choices.some(c => c.id === pair[1])) err('E-MECH', w, `option "${pair[0]}" has no choice "${pair[1]}" (choices: ${o.choices.map(c => c.id).join(', ')})`);
    };
    (u.optionRules || []).forEach((r, i) => {
      const w = `${f}.${u.id}.optionRules[${i}]`;
      const shape = r && ['forbidAllOf', 'requireAnyOf', 'requireAllOf'].filter(k => Array.isArray(r[k]));
      if (!shape || shape.length !== 1) { err('E-MECH', w, `unknown optionRule shape {${Object.keys(r || {}).join(', ')}} — use forbidAllOf, requireAnyOf or requireAllOf; the engine skips anything else`); return; }
      if (!r.message) err('E-MECH', w, 'optionRule has no message to show the player');
      r[shape[0]].forEach((p, j) => refOk(p, `${w}.${shape[0]}[${j}]`));
      if (shape[0] !== 'forbidAllOf' && r.if !== undefined && !opts.has(r.if)) err('E-MECH', w, `"if" points at missing option "${r.if}"`);
    });
  }
}

/* ---- the engine itself, run over the data --------------------------------
   The class of bug that froze the whole UI is "one row the engine cannot
   handle". Rather than list known bad shapes, run the engine on every unit in
   every detachment and on every enhancement. Anything that throws here throws
   inside render() on someone's phone. */
const Engine = require(require('path').join(L.ROOT, 'engine.js'));
for (const f of L.factions(data)) {
  const fd = data.factionData[f];
  const size = (data.gameRules.battleSizes[1] || data.gameRules.battleSizes[0]).id;
  for (const d of fd.detachments || []) {
    for (const u of fd.units || []) {
      const roster = { factionId: f, battleSize: size, detachmentIds: [d.id], units: [{ instanceId: 'x', datasheetId: u.id, size: 1, wargear: {} }] };
      try { Engine.validate(roster, data); Engine.points(roster, data); Engine.buffed(u, roster.units[0], roster, data, { detachment: true }); }
      catch (e) { err('E-CRASH', `${f}.${d.id} + ${u.id}`, `engine throws: ${e.message} — this freezes the UI for anyone who adds ${u.name}`); }
    }
    /* An enhancement nobody can take is a data error, not a rules choice. */
    for (const e of d.enhancements || []) {
      const roster = { factionId: f, battleSize: size, detachmentIds: [d.id], units: [] };
      let ok = false;
      try { ok = fd.units.some(u => Engine.eligibleReason(e, { instanceId: 'x', datasheetId: u.id }, roster, data) === null); }
      catch (x) { err('E-CRASH', `${f}.${d.id}.${e.id}`, `eligibility check throws: ${x.message}`); continue; }
      if (!ok) err('E-MECH', `${f}.${d.id}.${e.id}`, `no unit in the faction can take ${e.name} (eligible: ${JSON.stringify(e.eligible || {})})`);
    }
  }
}

/* ---- placement checks -------------------------------------------------
   Addressing can be mechanically correct and the wording still land on the
   wrong entry, because a human or a model pasted it into the neighbouring
   blank. These catch that. */

const entries = [];   // {where, kind, name, field, text, faction}
for (const f of L.factions(data)) {
  const fd = data.factionData[f];
  for (const r of fd.armyRules || [])
    L.asParagraphs(r.text).forEach((p, i) => entries.push({ f, kind: 'armyRule', name: r.name, field: 'text', text: p, where: `${f}.armyRules.${r.id}.text[${i}]` }));
  for (const d of fd.detachments || []) {
    if (d.rule) entries.push({ f, kind: 'detRule', name: d.rule.name, field: 'text', text: d.rule.text, where: `${f}.${d.id}.rule` });
    for (const s of d.stratagems || [])
      for (const k of ['when', 'target', 'effect'])
        entries.push({ f, kind: 'stratagem', name: s.name, field: k, text: s[k], where: `${f}.${d.id}.${s.id}.${k}` });
    for (const e of d.enhancements || [])
      entries.push({ f, kind: 'enhancement', name: e.name, field: 'text', text: e.text, where: `${f}.${d.id}.${e.id}` });
  }
  for (const u of fd.units || [])
    for (const a of u.abilities || [])
      entries.push({ f, kind: 'unitAbility', name: a.name, field: 'text', text: a.text, where: `${f}.${u.id}."${a.name}"`, unit: u.name });
}

/* Repeated wording across the data is NORMAL and must not be flagged:
   "Damaged: 1-4 wounds remaining" is on every vehicle, shared abilities such
   as "Icon of Khorne" sit on several units, timing phrases recur across
   stratagems, and the same mechanic appears in two armies under different
   names. Only one case is genuinely suspect: two stratagems in the SAME
   detachment with an identical effect. (Measured: zero occurrences in clean
   data, so this fires only on a real mistake.) */
for (const f of L.factions(data)) {
  for (const d of data.factionData[f].detachments || []) {
    const byEffect = new Map();
    for (const s of d.stratagems || []) {
      const t = (s.effect || '').trim();
      if (t.length < 60) continue;
      if (byEffect.has(t)) err('E-DUPTEXT', `${f}.${d.id}.${s.id}.effect`, `identical effect to ${byEffect.get(t)} in the same detachment — one of the two is in the wrong slot`);
      else byEffect.set(t, s.id);
    }
  }
}

/* The body should not restate its own title: that means "Name: description"
   was pasted whole into the description blank. */
for (const e of entries) {
  if (typeof e.text !== 'string' || !e.name) continue;
  const t = e.text.trim();
  const n = e.name.trim();
  if (!t || !n) continue;
  if (new RegExp(`^${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*[:\\u2013\\u2014-]`, 'i').test(t))
    warn('W-NAME-ECHO', e.where, `body starts with its own name ("${n}") — the title was probably pasted in with the description`);
}

/* A body opening with another entry's name is NOT a reliable signal: a
   sub-ability legitimately leads with its parent's name. Likewise "effect
   shorter than when" fires constantly on perfectly good stratagems. Both
   were measured against real data, produced only false positives, and are
   deliberately not implemented.

   What does hold: when / target / effect carry distinct roles, so a field
   with no cue of its role at all is worth a look. */
for (const f of L.factions(data)) {
  for (const d of data.factionData[f].detachments || []) {
    for (const s of d.stratagems || []) {
      const w = `${f}.${d.id}.${s.id}`;
      const When = (s.when || '').trim(), Target = (s.target || '').trim();
      if (When && !/phase|turn|step|round|before|after|start|end|when |is selected|declare/i.test(When))
        warn('W-WHEN-SHAPE', `${w}.when`, `no timing cue — "when" should say at what point it is used: "${When.slice(0, 54)}"`);
      if (Target && !/unit|model|squad|your army|it\b|that\b|one |each |enem/i.test(Target))
        warn('W-TARGET-SHAPE', `${w}.target`, `no unit cue — "target" should name what it is used on: "${Target.slice(0, 54)}"`);
    }
  }
}

/* ---- what is still outstanding --------------------------------------- */
const outstanding = entries.filter(e => typeof e.text === 'string' && !e.text.trim()).length;

const show = (list, label) => {
  if (!list.length) return;
  console.log(`\n${label} (${list.length})`);
  const byCode = {};
  for (const x of list) (byCode[x.code] = byCode[x.code] || []).push(x);
  for (const code of Object.keys(byCode).sort()) {
    const rows = byCode[code];
    console.log(`  ${code}  x${rows.length}`);
    rows.slice(0, quiet ? 3 : 12).forEach(r => console.log(`     ${r.where}: ${r.msg}`));
    if (rows.length > (quiet ? 3 : 12)) console.log(`     ... +${rows.length - (quiet ? 3 : 12)} more`);
  }
};

show(E, 'ERRORS — deploy blocked');
show(W, 'WARNINGS — review');
console.log(`\n${E.length ? 'FAIL' : 'PASS'}  errors=${E.length} warnings=${W.length} unfilled=${outstanding} of ${entries.length} text slots`);
process.exit(E.length ? 1 : 0);
