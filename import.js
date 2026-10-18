/* Roster import: Warhammer 40,000 app text export -> roster. No DOM.
   parse(text)                 text -> plain structure; knows nothing about the data.
   match(parsed, DATA, Engine) maps that structure onto what DATA already holds; adds nothing to it.
   run(text, DATA, Engine)     parse + match. Never throws on bad input:
                               { ok:false, error:{code,message} }  hard stop, nothing is created
                               { ok:true, roster, notes, rules, stats }  roster is built, notes are soft remarks.
   One code path for every army: names come from the data, never from this file. */
const RosterImport = (function () {
  /* ---------- text helpers ---------- */
  const norm = s => String(s == null ? '' : s).normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[‘’‛ʼ′`´]/g, "'").replace(/[“”]/g, '"')
    .replace(/[‐-―−]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase();
  /* comparison key: no case, no diacritics, no apostrophes/punctuation, hyphen = space */
  const key = s => norm(s).replace(/-/g, ' ').replace(/[^\p{L}\p{N} ]/gu, '').replace(/\s+/g, ' ').trim();
  const num = s => parseInt(String(s).replace(/[,.\s]/g, ''), 10);
  const parts = s => [...new Set([key(s), ...String(s).split(/\s+and\s+|\s*[,&\/]\s*/i).map(key)].filter(Boolean))];
  const stripProfile = s => String(s || '').replace(/\s+[-–—]\s+.*$/, '').replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  const defaultUid = () => Math.random().toString(36).slice(2, 10);

  const PTS = /\(\s*(\d[\d,.\s]*?)\s*(?:points?|pts)\s*\)\s*$/i;
  const DP = /\(\s*(\d+)\s*Detachment\s+Points?\s*\)\s*$/i;
  const FOOTER = /^Exported with\b/i;
  const BULLET = /^(\s*)([•◦○▪▫‣●·*]|[-–—])\s*(\S.*)$/;
  const SECTION = /^[A-Z][A-Z0-9 '&\/\-’]{2,}$/;
  const ATTACHED = /^Attached unit\s+(\d+)\s*:?$/i;
  const COUNTED = /^(\d+)\s*[x×]\s*(\S.*)$/i;

  /* ---------- parser ---------- */
  function parse(text) {
    const raw = String(text == null ? '' : text).replace(/^﻿/, '');
    if (!raw.trim()) return { error: 'empty' };
    const all = raw.replace(/\r\n?/g, '\n').split('\n').map(l => l.replace(/[   ]/g, ' ').replace(/\s+$/, ''));
    let end = all.findIndex(l => FOOTER.test(l.trim()));
    const footer = end >= 0; if (!footer) end = all.length;
    const lines = all.slice(0, end);
    const idx = []; lines.forEach((l, i) => { if (l.trim()) idx.push(i); });
    if (idx.length < 5) return { error: 'format' };
    const t = i => lines[idx[i]].trim();
    const title = PTS.exec(t(0)), det = DP.exec(t(2));
    if (!title || !det) return { error: 'format' };
    let sizeLine, disp, next;
    if (PTS.test(t(3)) && !PTS.test(t(4))) { sizeLine = t(3); disp = null; next = 4; } else { disp = t(3); sizeLine = t(4); next = 5; }
    const sz = PTS.exec(sizeLine);
    const header = {
      title: t(0).replace(PTS, '').trim(), points: num(title[1]), army: t(1),
      detachmentsRaw: t(2).replace(DP, '').trim(), detachmentPoints: +det[1], disposition: disp,
      sizeRaw: sizeLine, sizeName: sz ? sizeLine.replace(PTS, '').trim() : sizeLine, sizePoints: sz ? num(sz[1]) : null,
    };
    const units = [], unparsed = [];
    let section = null, attachN = null, cur = null, lastEntry = null, lastLevel = 1;
    const place = (n, name, level) => {
      if (level === 1 || !lastEntry) { lastEntry = { n, name, kids: [] }; cur.lines.push(lastEntry); } else lastEntry.kids.push({ n, name });
      lastLevel = level;
    };
    for (let i = next < idx.length ? idx[next] : lines.length; i < lines.length; i++) {
      const line = lines[i], s = line.trim(); if (!s) continue;
      const b = BULLET.exec(line);
      if (b) {
        if (!cur) { unparsed.push(s); continue; }
        const glyph = b[2], body = b[3].trim(), indent = b[1].length;
        let level = /[◦○▪▫‣]/.test(glyph) ? 2 : 1;
        if (level === 1) { if (cur.baseIndent == null) cur.baseIndent = indent; else if (indent > cur.baseIndent) level = 2; }
        let m;
        if (/^warlord$/i.test(body)) cur.warlord = true;
        else if ((m = /^attached as\s*:\s*(.+)$/i.exec(body))) cur.attachedAs = { raw: m[1].trim(), role: /^leader/i.test(m[1]) ? 'leader' : /^bodyguard/i.test(m[1]) ? 'bodyguard' : /^support/i.test(m[1]) ? 'support' : 'other' };
        else if ((m = /^enhancements?\s*:\s*(.+)$/i.exec(body))) cur.enhRaw = m[1].trim();
        else if ((m = COUNTED.exec(body))) place(+m[1], m[2].trim(), level);
        else cur.extra.push(body);
        continue;
      }
      if (SECTION.test(s) && !/\d\s*x\b/i.test(s)) { section = s; attachN = null; cur = null; lastEntry = null; continue; }
      let m;
      if ((m = ATTACHED.exec(s))) { attachN = +m[1]; cur = null; lastEntry = null; continue; }
      if ((m = PTS.exec(s))) {
        cur = { name: s.replace(PTS, '').trim(), pts: num(m[1]), section, attachN, attachedAs: null, warlord: false, enhRaw: null, lines: [], extra: [], baseIndent: null };
        units.push(cur); lastEntry = null; lastLevel = 1; continue;
      }
      if (cur && (m = COUNTED.exec(s))) { place(+m[1], m[2].trim(), lastLevel); continue; } /* marker lost in the export: belongs to the current block */
      unparsed.push(s);
    }
    return { header, units, footer, unparsed };
  }

  /* ---------- matching helpers ---------- */
  /* "A and B" in one header line: split at every " and " / "," and keep the cut that explains the most text with names the army really has */
  function segmentDetachments(str, dets) {
    const byKey = new Map(); dets.forEach(d => { const k = key(d.name); if (!byKey.has(k)) byKey.set(k, d); });
    const cuts = []; const re = /\s+and\s+|\s*[,&+]\s*/gi; let m;
    while ((m = re.exec(str))) cuts.push([m.index, m.index + m[0].length]);
    const n = cuts.length, memo = new Map();
    const startOf = i => (i === 0 ? 0 : cuts[i - 1][1]);
    const endOf = j => (j === n ? str.length : cuts[j][0]);
    const best = i => {
      if (memo.has(i)) return memo.get(i);
      let win = null;
      for (let j = i; j <= n; j++) {
        const text = str.slice(startOf(i), endOf(j)).trim(); if (!text) continue;
        const det = byKey.get(key(text)) || null;
        const rest = j === n ? { bad: 0, k: 0, list: [] } : best(j + 1);
        if (!rest) continue;
        const cand = { bad: (det ? 0 : text.length) + rest.bad, k: 1 + rest.k, list: [{ text, det }, ...rest.list] };
        if (!win || cand.bad < win.bad || (cand.bad === win.bad && cand.k < win.k)) win = cand;
      }
      memo.set(i, win); return win;
    };
    const r = best(0); return r ? r.list : [];
  }

  /* every weapon / gear name the datasheet itself mentions: these are "known", so they never raise a wargear remark */
  function knownGear(def) {
    const s = new Set(); const add = v => { if (v) parts(stripProfile(v)).forEach(x => s.add(x)); };
    ['ranged', 'melee'].forEach(f => (def[f] || []).forEach(w => add(w && w.name)));
    (def.slots || []).forEach(sl => add(sl.default));
    (def.options || []).forEach(o => { add(optCore(o)); (o.choices || []).forEach(c => add(c.label)); });
    [].concat(def.abilities || [], def.coreAbilities || [], def.factionAbilities || []).forEach(a => add(typeof a === 'string' ? a : a && a.name));
    if (def.leadModel) add(def.leadModel.name);
    return s;
  }
  const optPrefix = o => { const l = String(o.label || ''), c = l.indexOf(':'); return c > 0 ? l.slice(0, c).trim() : null; };
  const optCore = o => { let l = String(o.label || ''); const c = l.indexOf(':'); if (c >= 0) l = l.slice(c + 1); return l.replace(/\([^)]*\)/g, ' ').replace(/\s+replace(?:s|d)\b.*$/i, '').trim(); };
  const isKnown = (name, known) => parts(name).some(p => known.has(p)) && parts(name).slice(1).every(p => known.has(p));
  const sizeNear = (sizes, n) => sizes.reduce((b, s) => (Math.abs(s - n) < Math.abs(b - n) || (Math.abs(s - n) === Math.abs(b - n) && s < b) ? s : b), sizes[0]);

  /* ---------- matching ---------- */
  function match(p, DATA, Engine, opts) {
    opts = opts || {};
    const uid = opts.uid || defaultUid, H = p.header;
    const fail = (code, message) => ({ ok: false, error: { code, message } });

    /* hard stops, in order: army -> detachments -> battle size */
    const fac = (DATA.factions || []).find(f => f.enabled !== false && DATA.factionData[f.id] && (key(f.name) === key(H.army) || key(DATA.factionData[f.id].armyFaction) === key(H.army)));
    if (!fac) return fail('army', `Army ${H.army} does not exist in the application`);
    const fd = DATA.factionData[fac.id];
    const seg = segmentDetachments(H.detachmentsRaw, fd.detachments);
    if (!seg.length) return fail('detachment', `Detachment is missing in the roster header for ${fac.name}`);
    const missing = seg.filter(c => !c.det).map(c => c.text);
    if (missing.length) return fail('detachment', `${missing.length > 1 ? 'Detachments' : 'Detachment'} ${missing.join(', ')} ${missing.length > 1 ? 'do' : 'does'} not exist for ${fac.name} in the application`);
    const sizes = DATA.gameRules.battleSizes, bs = sizes.find(b => b.points === H.sizePoints);
    if (!bs) return fail('size', `Battle size ${H.sizeRaw} is not supported. Supported: ${sizes.map(b => b.points).join(', ')} points`);

    const notes = [];
    const note = (unit, text) => { if (!notes.some(n => n.unit === unit && n.text === text)) notes.push({ unit, text }); };
    const detachments = [...new Map(seg.map(c => [c.det.id, c.det])).values()];
    const disps = [...new Set(detachments.flatMap(d => Engine.dispositionsOf(d)))];
    let disposition = null;
    if (H.disposition) {
      disposition = disps.find(d => key(d) === key(H.disposition)) || null;
      if (!disposition) note(null, `Force Disposition ${H.disposition} is not available for the chosen detachments`);
    }
    if (!disposition && disps.length === 1) disposition = disps[0];

    const r = { name: H.title, factionId: fac.id, battleSize: bs.id, detachmentIds: detachments.map(d => d.id), forceDisposition: disposition, warlordUnitId: null, units: [], notes: '' };
    const ctx = Engine.ctxFor(r, DATA);

    const byKey = new Map(); fd.units.forEach(u => { const k = key(u.name); if (!byKey.has(k)) byKey.set(k, u); });
    const seen = {}, occ = {}; p.units.forEach(u => { seen[key(u.name)] = (seen[key(u.name)] || 0) + 1; });
    const made = [];

    p.units.forEach(pu => {
      const k = key(pu.name); occ[k] = (occ[k] || 0) + 1;
      const label = seen[k] > 1 ? `${pu.name} #${occ[k]}` : pu.name;
      let def = byKey.get(k), variant = null;
      if (!def) { const m = /^(.*?)\s+(?:with|on)\s+(.+)$/i.exec(pu.name); if (m && byKey.has(key(m[1]))) { def = byKey.get(key(m[1])); variant = m[2]; } }
      if (!def) { note(label, `Unit ${pu.name} was not found and was skipped`); made.push({ pu, label, inst: null }); return; }

      /* what is a model line and what is a weapon line */
      const known = knownGear(def), stem = key(def.name).replace(/s$/, '');
      const groups = [], loose = { name: null, n: 0, gear: [] }; let last = null;
      pu.lines.forEach(e => {
        const ek = key(e.name);
        const isModel = e.kids.length > 0 || (!isKnown(e.name, known) && (ek.includes(stem) || stem.includes(ek)));
        if (isModel) { last = { name: e.name, n: e.n, gear: e.kids.map(x => ({ ...x })) }; groups.push(last); } else (last || loose).gear.push({ n: e.n, name: e.name });
      });
      const sets = [...groups.map(g => g.gear), loose.gear];

      /* unit size = models in the block, never points */
      const total = groups.reduce((a, g) => a + g.n, 0), allowed = def.sizes.map(s => s.models);
      let size = allowed[0];
      if (groups.length) {
        if (allowed.includes(total)) size = total;
        else { size = sizeNear(allowed, total); note(label, `Unit size ${total} for ${pu.name} does not match any option (${allowed.join(' / ')}); ${size} models used`); }
      }

      const wg = {}; (def.options || []).forEach(o => { if (o.type === 'choice' && o.choices && o.choices.length) wg[o.id] = o.choices[0].id; });
      const lead = groups.length > 1 && groups[0].n === 1 ? 0 : -1;
      const applies = (pre, gi) => {
        if (!pre) return true;
        if (gi === groups.length) return groups.length === 0;
        const kp = key(pre), hit = g => { const kg = key(g.name); return kg.includes(kp) || kp.includes(kg); };
        return hit(groups[gi]) || (!groups.some(hit) && gi === lead); /* "Champion: …" with no such model line = the lone leading model */
      };
      const used = sets.map(() => new Set());
      [true, false].forEach(prefixed => {
        sets.forEach((gear, gi) => {
          (def.options || []).forEach(o => {
            const pre = optPrefix(o); if (!!pre !== prefixed || !applies(pre, gi)) return;
            const have = new Map(); gear.forEach(g => { const gk = key(g.name); if (!used[gi].has(gk)) have.set(gk, (have.get(gk) || 0) + g.n); });
            if (!have.size) return;
            if (o.type === 'choice') {
              let pick = null, pickParts = [];
              (o.choices || []).forEach(c => {
                if (key(c.label) === 'none') return;
                const ps = parts(c.label).slice(1).length ? parts(c.label).slice(1) : parts(c.label);
                if (ps.every(x => have.has(x)) && (!pick || ps.length >= pickParts.length)) { pick = c; pickParts = ps; }
              });
              if (pick) { wg[o.id] = pick.id; pickParts.forEach(x => used[gi].add(x)); }
            } else if (o.type === 'count' || o.type === 'toggle') {
              const ps = parts(optCore(o)), hit = ps.filter(x => have.has(x)); if (!hit.length) return;
              const v = o.type === 'toggle' ? 1 : Math.max(...hit.map(x => have.get(x)));
              wg[o.id] = (+wg[o.id] || 0) + v; hit.forEach(x => used[gi].add(x));
            }
          });
        });
      });
      if (variant) {
        const kv = key(variant); let ok = false;
        (def.options || []).forEach(o => {
          if (ok) return;
          if (o.type === 'choice') { const c = (o.choices || []).find(x => key(x.label).includes(kv) || kv.includes(key(x.label))); if (c && key(c.label) !== 'none') { wg[o.id] = c.id; ok = true; } }
          else if (key(optCore(o)).includes(kv)) { wg[o.id] = 1; ok = true; }
        });
        if (!ok) note(label, `Wargear ${variant} for ${pu.name} was not recognised; default wargear applied`);
      }
      sets.forEach((gear, gi) => gear.forEach(g => { const gk = key(g.name); if (!used[gi].has(gk) && !isKnown(g.name, known)) note(label, `Wargear ${g.name} for ${pu.name} was not recognised; default wargear applied`); }));

      const inst = { instanceId: uid(), datasheetId: def.id, size, wargear: wg, enhancementId: null, attachedTo: null, notes: '', customName: '' };
      r.units.push(inst); made.push({ pu, label, inst, def });
      if (pu.warlord) {
        const why = r.warlordUnitId ? 'a Warlord is already chosen' : Engine.warlordBlock(def, inst, ctx);
        if (why) note(label, `${pu.name} cannot be the Warlord: ${why}`); else r.warlordUnitId = inst.instanceId;
      }
    });

    /* enhancements first: one of them can widen whom its bearer may lead */
    made.forEach(m => {
      if (!m.inst || !m.pu.enhRaw) return;
      const want = m.pu.enhRaw, names = [want, ...want.split(/\s*[;,]\s*/)].filter((x, i, a) => x && a.indexOf(x) === i);
      let e = null;
      for (const nm of names) { e = Object.values(ctx.enhById).find(x => key(x.name) === key(nm)); if (e) break; }
      if (!e) {
        const other = Object.values(ctx.allEnh).find(x => names.some(nm => key(x.name) === key(nm)));
        const dn = other && (fd.detachments.find(d => d.id === other.detachmentId) || {}).name;
        note(m.label, other ? `Enhancement ${other.name} for ${m.pu.name} belongs to ${dn}, which is not in the roster; not applied` : `Enhancement ${want} for ${m.pu.name} was not found; not applied`);
        return;
      }
      const why = Engine.enhancementBlock(e, m.inst, r, DATA);
      if (why) note(m.label, `Enhancement ${e.name} cannot be applied to ${m.pu.name}: ${why} Not applied`);
      else m.inst.enhancementId = e.id;
    });

    /* leaders: "Attached unit N" (or the order inside ATTACHED UNITS) links leader(s) to their bodyguard */
    const groupsOf = new Map(); let auto = 0;
    made.forEach(m => {
      if (!m.pu.attachedAs) return;
      let g = m.pu.attachN; if (g == null) g = 'a' + auto;
      if (!groupsOf.has(g)) groupsOf.set(g, []);
      groupsOf.get(g).push(m);
      if (m.pu.attachN == null && m.pu.attachedAs.role === 'bodyguard') auto++;
    });
    groupsOf.forEach(list => {
      const body = list.find(m => m.pu.attachedAs.role === 'bodyguard');
      list.filter(m => m !== body && m.inst).forEach(m => {
        if (!body || !body.inst) { note(m.label, `${m.pu.name} was attached to ${body ? body.pu.name : 'a unit'} that is not in the roster; added separately`); return; }
        const can = Engine.canLead(m.def, m.inst, r, DATA);
        const why = !can.length ? 'it cannot lead other units'
          : !can.includes(body.inst.datasheetId) ? `it can only lead ${can.map(id => (ctx.unitById[id] || {}).name || id).join(', ')}`
          : Engine.attachBlock(m.inst, body.inst, r, DATA);
        if (why) note(m.label, `${m.pu.name} cannot lead ${body.pu.name}: ${why}; added separately`); else m.inst.attachedTo = body.inst.instanceId;
      });
    });

    /* points: compare, never block */
    let pts = null;
    try { pts = Engine.points(r, DATA); } catch (e) { pts = null; }
    if (pts && H.points != null && pts.total !== H.points) {
      note(null, `Points differ: the export says ${H.points}, the imported roster is ${pts.total}`);
      made.forEach(m => { const per = m.inst && pts.per[m.inst.instanceId]; if (per && per.total !== m.pu.pts) note(m.label, `Points differ: export ${m.pu.pts}, app ${per.total}`); });
    }

    /* the same warnings the roster editor shows (copy limits, Detachment Points, points cap ...) */
    const rules = []; const nameOf = {}; made.forEach(m => { if (m.inst) nameOf[m.inst.instanceId] = m.label; });
    try { (Engine.validate(r, DATA) || []).forEach(v => rules.push({ unit: ((v.unitInstanceId || v.instanceId) && nameOf[v.unitInstanceId || v.instanceId]) || null, text: v.message, severity: v.severity })); } catch (e) { /* the editor will show its own */ }

    return {
      ok: true, roster: r, notes, rules, parsed: p,
      stats: { parsed: p.units.length, imported: r.units.length, skipped: p.units.length - r.units.length, points: pts ? pts.total : null, declared: H.points },
    };
  }

  function run(text, DATA, Engine, opts) {
    try {
      const p = parse(text);
      if (p.error === 'empty') return { ok: false, error: { code: 'empty', message: 'Nothing to import. Paste a roster export first.' } };
      if (p.error) return { ok: false, error: { code: 'format', message: 'Unsupported format. Only Warhammer 40,000 rosters are supported' } };
      return match(p, DATA, Engine, opts);
    } catch (e) {
      return { ok: false, error: { code: 'internal', message: 'The roster could not be imported: ' + (e && e.message ? e.message : e) } };
    }
  }

  return { parse, match, run, key, segmentDetachments };
})();
if (typeof module !== 'undefined') module.exports = RosterImport;
