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
  const sing = w => (/ies$/.test(w) && w.length > 4 ? w.slice(0, -3) + 'y' : /(?:ch|sh|x|ss)es$/.test(w) ? w.slice(0, -2) : w.length > 3 && /[^s]s$/.test(w) ? w.slice(0, -1) : w);
  /* wargear key: no qualifiers, no leading count ("2 Hades autocannons"), every word singular */
  const gk = s => key(String(s || '').replace(/\s*\([^)]*\)\s*/g, ' ')).replace(/^\d+\s+/, '').split(' ').map(sing).join(' ');
  const parts = s => [...new Set([gk(s), ...String(s).split(/\s+and\s+|\s*[,&\/;]\s*/i).map(gk)].filter(Boolean))];
  const stripProfile = s => String(s || '').replace(/\s+[-–—]\s+.*$/, '').replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  const defaultUid = () => Math.random().toString(36).slice(2, 10);

  const PTS = /\(\s*(\d[\d,.\s]*?)\s*(?:points?|pts)\s*\)\s*$/i;
  const DP = /\(\s*(\d+)\s*Detachment\s+Points?\s*\)\s*$/i;
  const FOOTER = /^Exported with\b/i;
  const BULLET = /^(\s*)([•◦○▪▫‣●·*]|[-–—])\s*(\S.*)$/;
  const SECTION = /^\p{L}[\p{L} '&\/\-\u2019]{1,40}$/u;
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
    /* Body. The layout of the export (bullet glyphs, indentation) is NOT trusted for meaning: the app indents with
       spaces, copy/paste flattens it, drops markers or turns them into "-". So every counted line goes into one flat,
       ordered list with only a depth hint; which lines are models and which are wargear is decided later from the data.
       Service lines (Warlord / Attached as / Enhancement) are recognised by their words, with or without a marker. */
    const units = [], unparsed = [];
    let section = null, attachN = null, cur = null;
    const SUB = /[\u25E6\u25CB\u25AA\u25AB\u2023]/;
    for (let i = next < idx.length ? idx[next] : lines.length; i < lines.length; i++) {
      const line = lines[i].replace(/\t/g, '    '), s = line.trim(); if (!s) continue;
      const b = BULLET.exec(line);
      const body = b ? b[3].trim() : s;
      const lead = line.length - line.trimStart().length;
      const col = b ? line.indexOf(b[3]) : lead;            /* column where the text starts */
      let m;
      if (cur) {
        if (/^warlord$/i.test(body)) { cur.warlord = true; continue; }
        if ((m = /^attached\s+as\s*:\s*(.+)$/i.exec(body))) { cur.attachedAs = { raw: m[1].trim(), role: /^leader/i.test(m[1]) ? 'leader' : /^bodyguard/i.test(m[1]) ? 'bodyguard' : /^support/i.test(m[1]) ? 'support' : 'other' }; continue; }
        if ((m = /^enhancements?\s*:\s*(.+)$/i.exec(body))) { cur.enhRaw = (cur.enhRaw ? cur.enhRaw + '; ' : '') + m[1].trim(); continue; }
        if ((m = COUNTED.exec(body))) {
          const prev = cur.items[cur.items.length - 1];
          cur.items.push({ n: +m[1], name: m[2].trim(), col, sub: !!(b && SUB.test(b[2])), marked: !!b, prevCol: prev ? prev.col : null });
          continue;
        }
      }
      if (b) { if (cur) cur.extra.push(body); else unparsed.push(s); continue; }
      if ((m = ATTACHED.exec(s))) { attachN = +m[1]; cur = null; continue; }
      if ((m = PTS.exec(s))) { cur = { name: s.replace(PTS, '').trim(), pts: num(m[1]), section, attachN, attachedAs: null, warlord: false, enhRaw: null, items: [], extra: [] }; units.push(cur); continue; }
      if (SECTION.test(s)) { section = s; attachN = null; cur = null; continue; }  /* any case: "ATTACHED UNITS", "Attached Units", "Characters" */
      unparsed.push(s);
    }
    /* depth hint per item, from whatever layout survived: indentation if the block has any, else the glyph (◦ deeper than •);
       an unmarked line continues the depth of the line before it ("marker lost") */
    units.forEach(u => {
      const mk = u.items.filter(x => x.marked), indented = mk.some(x => x.col !== mk[0].col);
      let last = 0;
      u.items.forEach(x => { x.depth = !x.marked ? last : indented ? x.col : (x.sub ? 1 : 0); last = x.depth; delete x.prevCol; delete x.marked; });
    });
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

  /* every weapon / gear name the datasheet itself mentions: these are "known", so they never raise a wargear remark.
     Profiles are often named after the model ("Genestealer claws and talons", "Old One Eye’s claws and talons") while the
     composition and the options use the short name ("claws and talons"): ck() drops such a model-name prefix. */
  function prefixCut(def) {
    const pre = [...new Set([def.name, def.leadModel && def.leadModel.name].filter(Boolean).map(gk))].sort((a, b) => b.length - a.length);
    return k => { for (const p of pre) if (k.startsWith(p + ' ') && k.length > p.length + 1) return k.slice(p.length + 1); return k; };
  }
  function knownGear(def) {
    const s = new Set(), cut = prefixCut(def); const add = v => { if (v) parts(stripProfile(v)).forEach(x => { s.add(x); s.add(cut(x)); }); };
    ['ranged', 'melee'].forEach(f => (def[f] || []).forEach(w => add(w && w.name)));
    (def.slots || []).forEach(sl => add(sl.default));
    (def.options || []).forEach(o => { add(optCore(o)); (o.choices || []).forEach(c => add(c.label)); });
    [].concat(def.abilities || [], def.coreAbilities || [], def.factionAbilities || []).forEach(a => add(typeof a === 'string' ? a : a && a.name));
    if (def.leadModel) add(def.leadModel.name);
    describe(def).loads.forEach(l => l.items.forEach(add));
    return s;
  }
  /* one-letter drift between sources ("Chirugeon's" / "Chirurgeon's"): a long name within one edit of a known name is that name */
  const near1 = (a, b) => {
    if (a === b) return true; if (Math.abs(a.length - b.length) > 1 || Math.min(a.length, b.length) < 8) return false;
    let i = 0; while (i < a.length && a[i] === b[i]) i++;
    return a.slice(i + 1) === b.slice(i + 1) || a.slice(i + 1) === b.slice(i) || a.slice(i) === b.slice(i + 1);
  };
  const optPrefix = o => { const l = String(o.label || ''), c = l.indexOf(':'); return c > 0 ? l.slice(0, c).trim() : null; };
  const optCore = o => { let l = String(o.label || ''); const c = l.indexOf(':'); if (c >= 0) l = l.slice(c + 1); return l.replace(/\([^)]*\)/g, ' ').replace(/\s+replace(?:s|d)\b.*$/i, '').trim(); };
  /* "(Upgrade)", "(Battleline)", "(Champion)": qualifiers the app appends to names; matching tries the name with and without them */
  const bare = s => String(s || '').replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const variantsOf = s => [...new Set([String(s || '').trim(), bare(s)].filter(Boolean))];
  const isKnown = (name, known) => { const ps = parts(bare(name)); const has = k => known.has(k) || [...known].some(x => near1(x, k)); return has(ps[0]) || (ps.length > 1 && ps.slice(1).every(has)); };
  /* Composition text from some sources is letter-spaced ("1 K l a i v e x , 4 - 9 I n c u b i"); join such runs back. */
  const despace = c => (/(?:^|[\s,])\p{L}(?: \p{L}){3,}(?=[^\p{L}]|$)/u.test(c) ? c.replace(/\p{L}(?: \p{L})+(?=[^\p{L}]|$)/gu, m => m.replace(/ /g, '')) : c);
  const STOP = new Set(['of', 'the', 'and', 'with', 'on', 'a', 'an', 'model', 'models', 'every', 'each', 'this', 'that']);
  const toks = s => key(bare(s)).split(' ').filter(w => w && !STOP.has(w) && !/^\d+$/.test(w)).map(sing);
  const name = s => { const t = toks(s); return { t, sq: t.join('') }; };
  const sameName = (a, b) => a.sq && a.sq === b.sq;
  const nearName = (a, b) => { const sub = (x, y) => x.length && x.every(w => y.includes(w)); return sub(a.t, b.t) || sub(b.t, a.t) || (a.t.length && b.t.length && a.t[a.t.length - 1] === b.t[b.t.length - 1]); };
  /* the datasheet's own description of a unit: its model names, and what each model carries by default.
     Read from composition ("1 Aspiring Sorcerer (inferno bolt pistol, …)", "Default: …", "The Solarite is equipped with: …",
     "Every model is equipped with: …", "1 Forgefiend: 2 Hades autocannons, …"), slot defaults and the first choice of every
     "X replaced with" option. who = null: every model of the unit. */
  const splitItems = t => String(t).split(/\s*[;,]\s*/).map(x => x.trim().replace(/^(?:one|each|all|\d+)\s+with\s+/i, '').replace(/^(?:all|each)\s+ha(?:ve|s)\s+(?:an?\s+)?/i, '')).filter(x => x && /\p{L}/u.test(x));
  function describe(def) {
    let c = despace(String(def.composition || '')).replace(/\b\d+\s+models?\s*:/gi, ',');   /* "10 models: 1 Pack Leader, …" is a list, not a loadout */
    const models = [name(def.name)]; if (def.leadModel) models.push(name(def.leadModel.name));
    const loads = [], withLoads = [];
    c.replace(/\(([^)]*)\)/g, ' ').split(/\b(?:Default\b|Every model|Each model|This model|The\s+\p{L}+|Every\s+\p{L}+)[^:]*?\bequipped with\b|\bDefault\s*:/iu)[0].split(':')[0]
      .split(/\d+(?:\s*(?:-|\u2013|or|to)\s*\d+)*/).slice(1).forEach(ch => {
        const head = ch.split(/[,;.]|\s+and\s+(?=\d)/i)[0], w = /^(.*?)\bwith\b(.*)$/i.exec(head);   /* "Armsman with Navis las-volley", "with Navis shotgun" */
        const n = name((w ? w[1] : head).split(/\s+and\s+/i)[0]); if (n.t.length) models.push(n);
        if (w && w[2].trim()) withLoads.push({ who: n.t.length ? [n] : null, items: splitItems(w[2].replace(/\s+and\s+/gi, ', ')) });
      });
    const unit = name(def.name);
    /* who a loadout is for: a list of model names ("Sister Superior and 9 Battle Sisters" = both), or null = every model */
    const whoOf = txt => {
      const ws = String(txt).replace(/\b\d+(?:\s*(?:-|\u2013|or|to)\s*\d+)*\b/g, ' ').split(/,|\band\b|&/i).map(name).filter(w => w.t.length);
      if (!ws.length) return null;
      if (ws.some(w => sameName(w, unit))) return ws.length === 1 ? 'rest' : null;   /* "Infractors: …" next to "Obsessionist: …" = the other models */
      return ws;
    };
    /* "N Name (items)" */
    c.replace(/(\p{L}[\p{L}'\u2019 -]*?)\s*\(([^)]*)\)/gu, (m, who, inner) => { if (!/pts|points/i.test(inner) && /[,;]|\p{Ll}/u.test(inner)) loads.push({ who: whoOf(who), items: splitItems(inner) }); return m; });
    c = c.replace(/\([^)]*\)/g, ' ');
    c.split(/\.(?=\s|$)/).forEach(sent => {
      let m;
      if ((m = /^(.*?)\b(?:is|are)\s+equipped\s+with\s*:?\s*(.+)$/i.exec(sent))) {
        const subj = m[1].replace(/^.*\b(?:the|every|each|this)\s+/i, '');
        loads.push({ who: /^\s*models?\s*$/i.test(subj) ? null : whoOf(subj), items: splitItems(m[2]) });
      } else if ((m = /\bDefault\s*:\s*(.+)$/i.exec(sent))) loads.push({ who: null, items: splitItems(m[1]) });
      else if (/:/.test(sent)) {
        /* "1 Forgefiend: a, b" / "Jakhals: a; Dishonoured: b" — each "Name:" opens a loadout for that model */
        let who = null; sent.split(/;/).forEach(piece => { const k = piece.indexOf(':'); if (k >= 0) { who = whoOf(piece.slice(0, k).replace(/^.*\d+(?:\s*(?:-|\u2013|or|to)\s*\d+)*\s+(?=\p{L})/u, m0 => /,|\band\b/i.test(m0) ? m0 : '')); piece = piece.slice(k + 1); } loads.push({ who, items: splitItems(piece) }); });
      } else if (!/\d/.test(sent) && sent.trim()) loads.push({ who: null, items: splitItems(sent) });  /* a bare closing sentence: "Chitinous claws and teeth." */
      sent.replace(/\b(?:all|each|every model)\s+ha(?:ve|s)\s+(?:an?\s+)?([^.;]+)/gi, (m0, it) => { loads.push({ who: null, items: splitItems(it) }); return m0; });
    });
    loads.push(...withLoads);
    (def.slots || []).forEach(sl => {
      if (sl.default) loads.push({ who: null, items: [sl.default] });
      const m = /\b(?:all|each|every model)\s+(?:also\s+)?(?:have|has|carry|carries|keep|keeps)\s+(?:an?\s+)?(.+?)\.?$/i.exec(sl.fixedNote || '');  /* "All also have a bolt pistol and close combat weapon." */
      if (m) loads.push({ who: null, items: splitItems(m[1]) });
    });
    /* "bolt pistol and close combat weapon" is two items when the datasheet has each but not the pair */
    const prof = new Set([...(def.ranged || []), ...(def.melee || [])].map(w => gk(stripProfile(w && w.name))));
    loads.forEach(l => { l.items = l.items.flatMap(it => { const ps = it.split(/\s+and\s+/i); return ps.length > 1 && !prof.has(gk(it)) && ps.every(x => prof.has(gk(x))) ? ps : [it]; }); });
    return { models: models.filter(x => x.t.length), loads };
  }

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

    const byKey = new Map(); Engine.unitsOf(fd, DATA).forEach(u => variantsOf(u.name).forEach(v => { const k = key(v); if (!byKey.has(k)) byKey.set(k, u); }));
    const seen = {}, occ = {}; p.units.forEach(u => { seen[key(u.name)] = (seen[key(u.name)] || 0) + 1; });
    const made = [];

    p.units.forEach(pu => {
      const k = key(pu.name); occ[k] = (occ[k] || 0) + 1;
      const label = seen[k] > 1 ? `${pu.name} #${occ[k]}` : pu.name;
      let def = byKey.get(k) || byKey.get(key(bare(pu.name))), variant = null;
      if (!def) { const m = /^(.*?)\s+(?:with|on)\s+(.+)$/i.exec(bare(pu.name)); if (m && byKey.has(key(m[1]))) { def = byKey.get(key(m[1])); variant = m[2]; } }
      if (!def) { note(label, `Unit ${pu.name} was not found and was skipped`); made.push({ pu, label, inst: null }); return; }

      /* Model line or wargear line? Decided by the datasheet, not by the layout:
         1) the line names one of the datasheet's models (composition, lead model, unit name) -> model
         2) the line names a weapon/gear the datasheet has                                     -> wargear
         3) same head noun as one of its models ("World Eaters Terminator" ~ "Chaos Terminators") -> model
         4) only now the layout: the next line sits deeper (it has children)                    -> model
         5) anything else                                                                        -> wargear (remark if unknown)
         A wargear line belongs to the last model line above it; only a line shallower than that model is unit-level. */
      const known = knownGear(def), D = describe(def);
      const its = pu.items.map(x => ({ ...x, name: bare(x.name) || x.name, raw: x.name }));
      const kindOf = (x, i) => {
        const ln = name(x.name);
        if (D.models.some(m => sameName(m, ln))) return 'model';
        if (isKnown(x.name, known)) return 'gear';
        if (D.models.some(m => nearName(m, ln))) return 'model';
        const nx = its[i + 1];
        return nx && nx.depth > x.depth ? 'model' : 'gear';
      };
      const groups = [], loose = { name: null, n: 0, gear: [] }; let last = null;
      its.forEach((x, i) => {
        if (kindOf(x, i) === 'model') { last = { name: x.name, n: x.n, depth: x.depth, gear: [] }; groups.push(last); return; }
        (last && x.depth >= last.depth ? last : loose).gear.push({ n: x.n, name: x.name, raw: x.raw });
      });
      /* a model line that is itself an option ("Shade Runner (replaces a Voidscarred)", "Icon bearer") also counts for that option */
      groups.forEach(g => { if ((def.options || []).some(o => o.type !== 'choice' && sameName(name(optCore(o)), name(g.name)))) loose.gear.push({ n: g.n, name: g.name, raw: g.name, model: true }); });
      const sets = [...groups.map(g => g.gear), loose.gear];

      /* unit size = models in the block, never points */
      const total = groups.reduce((a, g) => a + g.n, 0), allowed = def.sizes.map(s => s.models);
      let size = allowed[0];
      if (groups.length) {
        if (allowed.includes(total)) size = total;
        else { size = sizeNear(allowed, total); note(label, `Unit size ${total} for ${pu.name} does not match any option (${allowed.join(' / ')}); ${size} models used`); }
      } else if (allowed.length > 1) {
        const byPts = def.sizes.filter(z => z.pts === pu.pts || z.ptsLater === pu.pts);
        if (byPts.length === 1) size = byPts[0].models;
        else note(label, `Unit size for ${pu.name} is not listed in the export; ${size} models used`);
      }

      /* Wargear. The export lists everything a model carries, defaults included. So per model line:
         pool    = what the export lists for it,
         minus   its default loadout (from the datasheet), remembering defaults that are missing (= replaced),
         then    "X replaced with" choices take a replacement only when X is missing and the replacement is in the pool,
                 count/toggle options take what is left of their item, "extra"/"None" choices take what is still left. */
      /* one canonical name per item for the pool, the defaults and the options: no model-name prefix, one-letter drift snapped */
      const cutP = prefixCut(def), ck = l => { const k = cutP(gk(l)); if (known.has(k)) return k; for (const x of known) if (near1(x, k)) return x; return k; };
      const wg = {}; (def.options || []).forEach(o => { if (o.type === 'choice' && o.choices && o.choices.length) wg[o.id] = o.choices[0].id; });
      const lead = groups.length > 1 && groups[0].n === 1 ? 0 : -1;
      const applies = (pre, gi) => {
        if (!pre) return true;
        if (gi === groups.length) return groups.length === 0;
        const kp = key(pre), hit = g => { const kg = key(g.name); return kg.includes(kp) || kp.includes(kg); };
        return hit(groups[gi]) || (!groups.some(hit) && gi === lead); /* "Champion: …" with no such model line = the lone leading model */
      };
      const isNone = c => !c || key(c.label) === 'none';
      const replacing = o => o.type === 'choice' && o.choices && o.choices.length && !isNone(o.choices[0]);
      const lead1 = lbl => { const m = /^\s*(\d+)\s+/.exec(String(lbl)); return m ? +m[1] : 1; };
      /* take `need` of a label from the pool: the whole label, or each part of "A and B" */
      const take = (pool, label, need, dry) => {
        const k = ck(label), whole = pool.get(k) || 0;
        if (whole >= need) { if (!dry) pool.set(k, whole - need); return true; }
        const ps = String(label).split(/\s+and\s+|\s*[,;]\s*/i).map(gk).filter(Boolean);
        if (ps.length < 2 || !ps.every(p => (pool.get(p) || 0) >= need)) return false;
        if (!dry) ps.forEach(p => pool.set(p, pool.get(p) - need)); return true;
      };
      const avail = (pool, label) => {
        const k = ck(label); if (pool.get(k)) return pool.get(k);
        const ps = String(label).split(/\s+and\s+|\s*[,;]\s*/i).map(gk).filter(Boolean);
        return ps.length > 1 ? Math.min(...ps.map(p => pool.get(p) || 0)) : 0;
      };
      sets.forEach((gear, gi) => {
        const g = groups[gi], models = g ? g.n : 1, gname = g ? name(g.name) : null;
        const pool = new Map(); gear.forEach(x => { const k = ck(x.name); pool.set(k, (pool.get(k) || 0) + x.n); });
        /* default loadout of this model line: largest of composition / slot / replace-choice defaults, per item */
        const base = new Map(), bump = (label, n) => { const k = ck(label); if (!base.has(k) || base.get(k).n < n) base.set(k, { label, n }); };
        const listed = l => Array.isArray(l.who);
        const isFor = (l, gnm) => l.who.some(w => sameName(w, gnm)) || l.who.some(w => nearName(w, gnm));
        const named = gname && D.loads.some(l => listed(l) && isFor(l, gname));          /* this model line has its own loadout in the datasheet */
        const mine = D.loads.filter(l => !l.who || !gname || (l.who === 'rest' ? !named : isFor(l, gname)));
        mine.forEach(l => l.items.forEach(it => bump(it, lead1(it) * models)));
        const choiceDefaults = new Map();
        (def.options || []).forEach(o => { if (replacing(o) && applies(optPrefix(o), gi)) { const k = ck(o.choices[0].label); choiceDefaults.set(k, { label: o.choices[0].label, n: (choiceDefaults.has(k) ? choiceDefaults.get(k).n : 0) + lead1(o.choices[0].label) }); } });
        choiceDefaults.forEach((v, k) => { if (!base.has(k) || base.get(k).n < v.n) base.set(k, v); });
        const missing = new Map();
        base.forEach((v, k) => { const have = avail(pool, v.label), t = Math.min(have, v.n); if (t) take(pool, v.label, t); if (v.n - t > 0) missing.set(k, v.n - t); });
        const opts = (def.options || []).filter(o => applies(optPrefix(o), gi));
        const byPrefix = (a, b) => (optPrefix(b) ? 1 : 0) - (optPrefix(a) ? 1 : 0);
        opts.filter(replacing).sort(byPrefix).forEach(o => {
          const dk = ck(o.choices[0].label), miss = missing.get(dk) || 0; if (!miss) return;
          const per = lead1(o.choices[0].label);
          const c = o.choices.slice(1).filter(c => !isNone(c) && take(pool, c.label, lead1(c.label), true)).sort((a, b) => parts(b.label).length - parts(a.label).length)[0];
          if (!c) return;
          take(pool, c.label, lead1(c.label)); wg[o.id] = c.id; missing.set(dk, Math.max(0, miss - per));
        });
        opts.filter(o => o.type === 'count' || o.type === 'toggle').sort(byPrefix).forEach(o => {
          const lbl = optCore(o), per = lead1(lbl), have = Math.floor(avail(pool, lbl) / per); if (!have) return;
          const v = o.type === 'toggle' ? 1 : have; take(pool, lbl, v * per); wg[o.id] = (+wg[o.id] || 0) + v;
        });
        opts.filter(o => o.type === 'choice' && !replacing(o)).sort(byPrefix).forEach(o => {
          const c = o.choices.filter(c => !isNone(c) && take(pool, c.label, lead1(c.label), true))[0];
          if (c) { take(pool, c.label, lead1(c.label)); wg[o.id] = c.id; }
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
      sets.forEach(gear => gear.forEach(g => { if (!g.model && !isKnown(g.name, known)) note(label, `Wargear ${g.raw || g.name} for ${pu.name} was not recognised; default wargear applied`); }));

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
      const want = m.pu.enhRaw, names = [want, ...want.split(/\s*[;,]\s*/)].flatMap(variantsOf).filter((x, i, a) => x && a.indexOf(x) === i);
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

  return { parse, match, run, key, segmentDetachments, describe, gk };
})();
if (typeof module !== 'undefined') module.exports = RosterImport;
