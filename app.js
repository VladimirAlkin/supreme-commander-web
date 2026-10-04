(function () {
  'use strict';
  /* ---------------- platform ---------------- */
  /* Android app: window.SCNative (Java bridge). It stores the same keys as the Windows app,
     so the storage code below sees one interface: window.__MR_NATIVE + mrSave/mrDel. */
  const AND = window.SCNative || null;
  if (AND && !window.__MR_NATIVE) {
    const m = {};
    try { const raw = JSON.parse(AND.loadAll() || '{}'); Object.keys(raw).forEach(k => { try { m[k] = JSON.parse(raw[k]); } catch (e) { } }); } catch (e) { }
    window.__MR_NATIVE = m;
    window.mrSave = (k, v) => AND.save(k, v);
    window.mrDel = k => AND.del(k);
    try { const fs = +AND.fontScale(); if (fs > 0) document.documentElement.style.fontSize = (16 * Math.min(1.3, Math.max(0.85, fs))).toFixed(1) + 'px'; } catch (e) { }
  }
  const PL = {
    android: !!AND,
    sdk: (() => { try { return AND ? +AND.sdk() : 0; } catch (e) { return 0; } })(),
    haptic(kind) { if (AND) { try { AND.haptic(kind || 'tick'); } catch (e) { } } },
    awake: false, lock: null,
    keepAwake(on) {
      if (on === this.awake) return; this.awake = on;
      if (AND) { try { AND.keepAwake(on); } catch (e) { } return; }
      try { if (on && navigator.wakeLock) navigator.wakeLock.request('screen').then(l => { this.lock = l; }, () => { }); else if (!on && this.lock) { this.lock.release(); this.lock = null; } } catch (e) { }
    },
    canShare() { return !!AND || !!navigator.share; },
    share(subject, text) { if (AND) { AND.shareText(subject, text); return Promise.resolve(true); } return navigator.share({ title: subject, text }).then(() => true, () => false); },
    copy(text) {
      if (AND) { AND.copyText(text); return Promise.resolve(true); }
      try { return navigator.clipboard.writeText(text).then(() => true, () => false); } catch (e) { return Promise.resolve(false); }
    },
    paste() {
      if (AND) { try { return Promise.resolve(AND.readClipboard() || ''); } catch (e) { return Promise.resolve(''); } }
      try { return navigator.clipboard.readText().then(t => t || '', () => ''); } catch (e) { return Promise.resolve(''); }
    },
    bar(hex) { if (AND) { try { AND.setBarColor(hex); } catch (e) { } } },
  };
  /* Images arrive as data: URLs in single-file builds. Turn each into a blob: URL once,
     so every re-render writes a short URL instead of ~700 KB of base64. */
  const BLOBS = new Map();
  function blobURL(src) {
    if (!src || src.slice(0, 5) !== 'data:') return src;
    let u = BLOBS.get(src);
    if (u) return u;
    try {
      const i = src.indexOf(','), mime = src.slice(5, src.indexOf(';')), bin = atob(src.slice(i + 1));
      const a = new Uint8Array(bin.length); for (let k = 0; k < bin.length; k++) a[k] = bin.charCodeAt(k);
      u = URL.createObjectURL(new Blob([a], { type: mime }));
    } catch (e) { u = src; }
    BLOBS.set(src, u); return u;
  }
  const IMG = {};
  let blobsOk = true;
  Object.entries(window.IMAGES || {}).forEach(([k, v]) => { IMG[k] = blobURL(v); });
  (() => { // a host whose CSP refuses blob: images falls back to the data: URLs
    const k = Object.keys(IMG).find(x => IMG[x] && IMG[x].slice(0, 5) === 'blob:'); if (!k) return;
    const im = new Image(); im.onerror = () => { blobsOk = false; Object.entries(window.IMAGES).forEach(([a, v]) => { IMG[a] = v; }); try { render(); } catch (e) { } }; im.src = IMG[k];
  })();
  const imgSrc = src => (blobsOk ? blobURL(src) : src);
  const GR = DATA.gameRules;
  const $app = document.getElementById('app');

  /* ---------------- helpers ---------------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const ORD = Engine.ORD;
  const fdata = id => DATA.factionData[id];
  const faction = id => DATA.factions.find(f => f.id === id);
  const bsDef = id => GR.battleSizes.find(b => b.id === id);
  const CHEV = '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  const ICON = {
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5z"/><path d="M4 19.5V21h16"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',
    dice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8h16v-8M16 6l-4-4-4 4M12 2v13"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/></svg>',
    save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 10l5 5 5-5M4 19h16"/></svg>',
    paste: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9z"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>',
    dup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V5a1 1 0 011-1h11"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>',
    undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 010 10h-3"/></svg>',
  };

  /* ---------------- storage ---------------- */
  const LS_KEY = 'mr.rosters.v1';
  /* Desktop app: the host injects window.__MR_NATIVE (saved data) and binds mrSave/mrDel/mrSaveFile. */
  const NATIVE = (window.__MR_NATIVE && typeof window.__MR_NATIVE === 'object') ? window.__MR_NATIVE : null;
  const lsGet = k => { if (NATIVE) return k in NATIVE ? NATIVE[k] : null; try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const lsSet = (k, v) => { if (NATIVE) { NATIVE[k] = v; try { window.mrSave(k, JSON.stringify(v)); } catch (e) { } return; } try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } };
  const lsDel = k => { if (NATIVE) { delete NATIVE[k]; try { window.mrDel(k); } catch (e) { } return; } try { localStorage.removeItem(k); } catch (e) { } };
  const Store = {
    mode: 'local', db: null, uidv: null, downloads: null, timers: {}, busy: {},
    async init() {
      try {
        if (!window.claude || !window.claude.use) return;
        const [user, db, dl] = await Promise.all([window.claude.use('user'), window.claude.use('db'), window.claude.use('downloads')]);
        this.downloads = dl;
        if (!user || !db) return;
        const id = await user.id();
        if (!id) return;
        this.db = db; this.uidv = id;
        const snap = await db.collection('data/users/' + id).get();
        const remote = snap.docs.map(d => d.data() && d.data().roster).filter(Boolean);
        this.mode = 'db';
        const byId = {};
        remote.forEach(r => (byId[r.id] = r));
        // local rosters not yet in db (made before db answered) get pushed up
        const hasRemote = remote.length > 0;
        rosters.forEach(r => {
          if (r.isExample) { if (!hasRemote) byId[r.id] = r; return; } // the untouched example never syncs
          if (!byId[r.id] || (byId[r.id].updatedAt || 0) < (r.updatedAt || 0)) { byId[r.id] = r; this.save(r); }
        });
        rosters = Object.values(byId);
        lsSet(LS_KEY, rosters);
        render();
        Portraits.load();
      } catch (e) { /* stay local */ }
    },
    save(r) {
      lsSet(LS_KEY, rosters);
      if (this.mode !== 'db' || r.isExample) return;
      clearTimeout(this.timers[r.id]);
      this.timers[r.id] = setTimeout(async () => {
        if (this.busy[r.id]) { this.save(r); return; }
        this.busy[r.id] = true;
        try { await this.db.collection('data/users/' + this.uidv).doc(r.id).set({ roster: JSON.parse(JSON.stringify(r)) }); }
        catch (e) { if (e && e.code === 'quota_exceeded') toast('Storage is full. Delete old rosters or export them.'); }
        this.busy[r.id] = false;
      }, 500);
    },
    async remove(id) {
      lsSet(LS_KEY, rosters);
      if (this.mode === 'db') { try { await this.db.collection('data/users/' + this.uidv).doc(id).delete(); } catch (e) { } }
    },
  };
  let rosters = lsGet(LS_KEY) || [];
  /* custom unit portraits: unitId -> data URL (per user; db + local cache) */
  const PT_KEY = 'mr.portraits.v1';
  let CUSTOM = lsGet(PT_KEY) || {};
  /* one-time: drop the old hand-set portraits of units that now ship with a matching official photo */
  if (!lsGet('mr.portraits.reset1')) { ['angron', 'exalted_eightbound'].forEach(k => delete CUSTOM[k]); lsSet(PT_KEY, CUSTOM); lsSet('mr.portraits.reset1', 1); }
  const Portraits = {
    col() { return Store.mode === 'db' ? Store.db.collection('data/users/' + Store.uidv + '/portraits/items') : null; },
    async load() {
      const c = this.col(); if (!c) return;
      try { const snap = await c.get(); const remote = {}; snap.docs.forEach(d => { const v = d.data(); if (v && v.img) remote[d.id] = v.img; });
        Object.entries(CUSTOM).forEach(([k, v]) => { if (!remote[k]) this.push(k, v); });
        CUSTOM = Object.assign({}, CUSTOM, remote); lsSet(PT_KEY, CUSTOM); render(); } catch (e) { }
    },
    async push(id, img) { const c = this.col(); if (!c) return; try { await c.doc(id).set({ img, updatedAt: Date.now() }); } catch (e) { toast('Could not save the portrait online. It is kept on this device.'); } },
    set(id, img) { CUSTOM[id] = img; lsSet(PT_KEY, CUSTOM); this.push(id, img); },
    async clear(id) { delete CUSTOM[id]; lsSet(PT_KEY, CUSTOM); const c = this.col(); if (c) { try { await c.doc(id).delete(); } catch (e) { } } },
  };
  const playKey = id => 'mr.play.' + id;

  /* ---------------- state ---------------- */
  const S = {
    view: 'home', homeTab: 'armies', factionId: null, factionTab: 'army', rosterId: null, tab: 'build',
    search: '', cat: 'all', expanded: {}, renaming: false, modal: null, draft: null,
    stratPhase: 'All', stratSrc: 'All', rulesSeg: 'army', dsBuff: true, homeSearch: '',
    m: false, sub: null, sheet: null, playSeg: 'turn', stratMode: 'now', stratOpen: {}, scrollMem: {}, rosterFrom: 'faction', flash: null, mpend: {}, msd: null, msAll: false, msCollapsed: false,
  };
  const cur = () => rosters.find(r => r.id === S.rosterId);
  const unitDef = (fid, id) => fdata(fid).units.find(u => u.id === id);
  const touch = r => { sortUnits(r); r.updatedAt = Date.now(); if (r.isExample) delete r.isExample; Store.save(r); };

  /* ---------------- theme ---------------- */
  const DEF_THEME = { bg: '#121012', bg2: '#1c1719', bgDeep: '#0b0a0b', accent: '#c99a4b', accent2: '#d94a3c' };
  function applyTheme(fid) {
    const t = (fid && faction(fid) && faction(fid).theme) || DEF_THEME;
    const s = document.documentElement.style;
    s.setProperty('--bg', t.bg); s.setProperty('--bg-glow', t.bg2); s.setProperty('--bg-deep', t.bgDeep || t.bg); s.setProperty('--accent', t.accent); s.setProperty('--accent2', t.accent2);
    if (applyTheme.last !== t.bg) { applyTheme.last = t.bg; PL.bar(t.bg); }
  }

  /* ---------------- images ---------------- */
  const logoOf = fid => { const f = faction(fid); return (f && f.logo && IMG[f.logo]) || null; };
  const iconOf = fid => { const f = faction(fid); return (f && f.rosterIcon && IMG[f.rosterIcon]) || null; };
  const facVars = f => { const t = f.theme || {}; return `--fc1:${t.card1 || t.bg2};--fc2:${t.card2 || t.bgDeep};--fi1:${t.icon1 || t.bg2};--fi2:${t.icon2 || t.bgDeep};--fa:${t.accent}`; };
  function portrait(def, fid, cls = '') {
    const src = (def && CUSTOM[def.id] && imgSrc(CUSTOM[def.id])) || (def && def.image && IMG[def.image]) || logoOf(fid);
    if (src) return `<img class="pt ${cls}" src="${src}" alt="" loading="lazy">`;
    return `<span class="pt ${cls}">${faction(fid).emblemSvg}</span>`;
  }

  /* ---------------- derived ---------------- */
  function rosterPts(r) { return Engine.points(r, DATA); }
  function rosterDp(r) { const fd = fdata(r.factionId); return r.detachmentIds.reduce((s, id) => s + ((fd.detachments.find(d => d.id === id) || {}).dp || 0), 0); }
  /* GW-app style order: Epic Heroes, Characters, Battleline, Dedicated Transports, Infantry, Mounted, Beasts, Monsters, Vehicles */
  const RANK_KW = ['Battleline', 'Dedicated Transport', 'Infantry', 'Mounted', 'Beast', 'Monster', 'Vehicle', 'Swarm'];
  function unitRank(def, ctx, inst) {
    if (!def) return 99;
    if (Engine.hasKw(def, ctx, 'Epic Hero')) return 0;
    if (Engine.hasKw(def, ctx, 'Character', inst)) return 1;
    const i = RANK_KW.findIndex(k => Engine.hasKw(def, ctx, k));
    return i < 0 ? 20 : 2 + i;
  }
  function sortUnits(r) {
    const ctx = Engine.ctxFor(r, DATA);
    const rk = new Map(r.units.map((u, i) => [u.instanceId, [unitRank(ctx.unitById[u.datasheetId], ctx, u), i]]));
    r.units.sort((a, b) => { const x = rk.get(a.instanceId), y = rk.get(b.instanceId); return x[0] - y[0] || x[1] - y[1]; });
  }
  function catOf(def, r, inst) {
    const ctx = Engine.ctxFor(r, DATA);
    if (def.faction !== fdata(r.factionId).armyFaction) return 'allies';
    if (Engine.hasKw(def, ctx, 'Character', inst)) return 'character';
    if (Engine.hasKw(def, ctx, 'Battleline')) return 'battleline';
    if (Engine.hasKw(def, ctx, 'Dedicated Transport')) return 'transport';
    for (const k of ['Infantry', 'Mounted', 'Beast', 'Monster', 'Vehicle', 'Swarm']) if (Engine.hasKw(def, ctx, k)) return k.toLowerCase();
    return 'other';
  }
  const CATS = [['all', 'All'], ['character', 'Characters'], ['battleline', 'Battleline'], ['transport', 'Dedicated Transports'], ['infantry', 'Infantry'], ['mounted', 'Mounted'], ['beast', 'Beasts'], ['monster', 'Monsters'], ['vehicle', 'Vehicles'], ['swarm', 'Swarms'], ['allies', 'Allies']];
  const CAT_NAME = Object.fromEntries(CATS);
  function newInstance(def) {
    const wg = {};
    (def.options || []).forEach(o => { if (o.type === 'choice') wg[o.id] = o.choices[0].id; });
    return { instanceId: uid(), datasheetId: def.id, size: def.sizes[0].models, wargear: wg, enhancementId: null, attachedTo: null, notes: '', customName: '' };
  }
  function wargearSummary(def, inst) {
    const out = [];
    (def.slots || []).forEach(sl => { const n = Engine.slotSize(sl, inst) - Engine.slotUsed(def, inst, sl.id); if (n > 0) out.push(`${n}× ${sl.default}`); });
    (def.options || []).forEach(o => {
      const v = (inst.wargear || {})[o.id];
      if (o.type === 'choice') { const c = o.choices.find(c => c.id === v); if (c && c !== o.choices[0] && c.id !== 'none') out.push(c.label); }
      else if (o.type === 'toggle' && v) out.push(o.label);
      else if (o.type === 'count' && +v) out.push(`${v}× ${o.label.replace(/ \(.*\)/, '')}`);
    });
    return out;
  }
  function dispName(r, inst) { const def = unitDef(r.factionId, inst.datasheetId); return inst.customName || (def && def.name) || '?'; }

  /* ---------------- toast / tooltip ---------------- */
  /* Snackbar: a message with up to two actions (Undo, Configure…); sits above the bottom bar. */
  let toastT, snackFns = [];
  function toast(msg, actions) {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t);
      t.addEventListener('click', e => { const b = e.target.closest('[data-snack]'); if (!b) return; e.stopPropagation(); const fn = snackFns[+b.dataset.snack]; t.hidden = true; clearTimeout(toastT); if (fn) fn(); });
    }
    actions = actions || []; snackFns = actions.map(a => a.fn);
    t.innerHTML = `<span class="tmsg">${esc(msg)}</span>${actions.map((a, i) => `<button type="button" data-snack="${i}">${esc(a.label)}</button>`).join('')}`;
    t.classList.toggle('has-act', actions.length > 0);
    t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), actions.length ? 6000 : 2600);
  }
  window.__scToast = msg => toast(msg);
  function showTip(el, text) {
    hideTip();
    const t = document.createElement('div'); t.className = 'tip'; t.id = 'tip'; t.setAttribute('role', 'tooltip'); t.textContent = text;
    document.body.appendChild(t);
    const r = el.getBoundingClientRect();
    const w = t.offsetWidth, h = t.offsetHeight;
    let x = Math.min(window.innerWidth - w - 8, Math.max(8, r.left));
    let y = r.bottom + 6; if (y + h > window.innerHeight - 8) y = r.top - h - 6;
    t.style.left = x + 'px'; t.style.top = y + 'px';
  }
  function hideTip() { const t = document.getElementById('tip'); if (t) t.remove(); }
  function glossFor(kw) {
    const g = GR.glossary, low = kw.toLowerCase();
    const key = Object.keys(g).filter(k => low.startsWith(k.toLowerCase())).sort((x, y) => y.length - x.length)[0];
    return key ? `${kw}: ${g[key]}` : kw;
  }

  /* ---------------- common bits ---------------- */
  function topbar(title, opts = {}) {
    if (opts.center) return `<header class="topbar"><div class="topbar-in center">${title}</div>${opts.below || ''}</header>`;
    return `<header class="topbar"><div class="topbar-in">
      ${opts.back ? `<button class="iconbtn" data-act="${opts.back}" aria-label="Back">${ICON.back}</button>` : '<span class="brand" aria-hidden="true">✠</span>'}
      <div class="grow">${title}</div>${opts.right || ''}</div>${opts.below || ''}</header>`;
  }
  function tabbar(items, current, act) {
    return `<nav class="tabbar" aria-label="Sections"><div class="tabbar-in">${items.map(([id, label, ic]) => `<button data-act="${act}" data-id="${id}" ${id === current ? 'aria-current="page"' : ''}>${ICON[ic] || ''}<span>${label}</span></button>`).join('')}</div></nav>`;
  }
  function meters(r) {
    const bs = bsDef(r.battleSize), pts = rosterPts(r).total, dp = rosterDp(r);
    const enh = Engine.enhancementCount(r, Engine.ctxFor(r, DATA));
    const v = Engine.validate(r, DATA);
    const ne = v.filter(x => x.severity === 'error').length, nw = v.filter(x => x.severity === 'warning').length;
    const pct = Math.min(100, (pts / bs.points) * 100);
    return `<div class="meters">
      <div class="meter points"><div class="row nowrap"><span class="lbl">Points</span><span class="spacer"></span><b class="num">${pts} / ${bs.points}</b></div><div class="bar ${pts > bs.points ? 'over' : ''}"><i style="width:${pct}%"></i></div></div>
      <div class="meter"><span class="lbl">DP</span><b class="num" ${dp > bs.dp ? 'style="color:var(--err)"' : ''}>${dp} / ${bs.dp}</b></div>
      <div class="meter"><span class="lbl">Enhancements</span><b class="num" ${enh > bs.enhancements ? 'style="color:var(--err)"' : ''}>${enh} / ${bs.enhancements}</b></div>
      <button class="vbadge" data-act="openVal" aria-label="Validation: ${ne} errors, ${nw} warnings">${ne ? `<span class="e">✕ ${ne}</span>` : '<span class="k">✓ Legal</span>'}${nw ? `<span class="w">! ${nw}</span>` : ''}</button>
    </div>`;
  }
  function stamp() { return `<p class="stamp">${esc(DATA.meta.stamp)}</p>`; }

  /* ---------------- HOME ---------------- */
  function viewHome() {
    applyTheme(null);
    const tabs = [['armies', 'Armies', 'shield'], ['rosters', 'My Rosters', 'list'], ['glossary', 'Rules Glossary', 'book']];
    let body = '';
    if (S.homeTab === 'armies') {
      body = `<div class="section-title"><h2>Choose an army</h2></div>
      <div class="fgrid">${DATA.factions.slice().sort((x, y) => (y.enabled ? 1 : 0) - (x.enabled ? 1 : 0)).map(f => f.enabled
        ? `<button class="fcard on" style="${facVars(f)}" data-act="openFaction" data-id="${f.id}"><span class="emb">${logoOf(f.id) ? `<img class="emb" src="${logoOf(f.id)}" alt="">` : f.emblemSvg}</span><span><span class="fname">${esc(f.name)}</span><br><span class="dim">${(n => n + (n === 1 ? ' roster' : ' rosters'))(rosters.filter(r => r.factionId === f.id).length)}</span></span></button>`
        : `<div class="fcard off" aria-disabled="true"><span class="fname">${esc(f.name)}</span><span class="soon">Coming soon</span></div>`).join('')}</div>`;
    } else if (S.homeTab === 'glossary') {
      const items = glossFiltered();
      body = `<div class="section-title"><h2>Rules Glossary</h2><span class="dim num">${items.length}</span></div>
      <p class="dim" style="margin:0 0 12px">Core weapon abilities and unit abilities used by every army.</p>
      <input class="search" type="search" id="gloss-search" data-inp="glossSearch" placeholder="Search terms, e.g. Lance or Feel No Pain" value="${esc(S.glossSearch || '')}" aria-label="Search the glossary">
      <div class="stack" id="gloss-list" style="margin-top:12px">${glossItems(items)}</div>`;
    } else {
      body = rosterListBlock(null);
    }
    const embers = Array.from({ length: 14 }, (_, i) => `<i style="--x:${(i * 37 + 11) % 100}%;--d:${14 + (i * 7) % 11}s;--delay:${-(i * 2.3).toFixed(1)}s;--s:${2 + (i % 3)}px"></i>`).join('');
    return `<div class="homebg" aria-hidden="true"><div class="glow"></div><div class="embers">${embers}</div></div>` + topbar(`<div class="hometitle"><span class="brand" aria-hidden="true">✠</span><span class="title">Supreme Commander</span><span class="dim">11th edition</span></div>`, { center: true }) +
      `<main class="wrap">${body}<div style="margin-top:22px">${stamp()}${PL.android ? ` <span class="stamp">· App ${esc((() => { try { return AND.version(); } catch (e) { return ''; } })())}</span>` : ''}${window.SC_FLAVOUR === 'pwa' ? ` <span class="stamp">· Web ${esc(window.SC_BUILD || '')}</span> <button class="btn sm" data-act="pwaUpdate" style="margin-top:8px">Check for updates</button>` : ''}</div></main>` + tabbar(tabs, S.homeTab, 'homeTab') + modalHTML() + sheetHTML();
  }
  const glossItems = items => items.map(([k, v]) => `<div class="abil"><b>${esc(k)}</b>${esc(v)}</div>`).join('') || '<div class="empty">No terms match.</div>';
  const FACTION_TERMS = new Set(Object.values(DATA.factionData).flatMap(fd => fd.armyRules.map(a => a.name)));
  function glossFiltered() { const q = (S.glossSearch || '').trim().toLowerCase(); return Object.entries(GR.glossary).filter(([k]) => !FACTION_TERMS.has(k)).sort((a, b) => a[0].localeCompare(b[0])).filter(([k, v]) => !q || k.toLowerCase().includes(q) || v.toLowerCase().includes(q)); }
  function rosterListInner(fid) {
    const q = S.homeSearch.trim().toLowerCase();
    const list = rosters.filter(r => (!fid || r.factionId === fid) && (!q || r.name.toLowerCase().includes(q))).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    const groups = {};
    list.forEach(r => (groups[r.factionId] = groups[r.factionId] || []).push(r));
    const items = r => {
      const f = faction(r.factionId), fd = fdata(r.factionId), bs = bsDef(r.battleSize);
      const dets = r.detachmentIds.map(id => (fd.detachments.find(d => d.id === id) || {}).name).filter(Boolean).join(', ');
      const pts = rosterPts(r).total;
      const d = new Date(r.updatedAt || r.createdAt || Date.now());
      return `<div class="panel ritem clickable" data-act="openRoster" data-id="${r.id}">
        <span class="emb rlogo" style="${facVars(f)}">${iconOf(f.id) ? `<img src="${iconOf(f.id)}" alt="">` : f.emblemSvg}</span>
        <div class="grow"><button class="ptbtn rname" data-act="openRoster" data-id="${r.id}" style="text-align:left">${esc(r.name)}</button>
          <div class="rmeta">${esc(f.name)} · ${bs ? bs.name : ''} · <span class="num">${pts}/${bs ? bs.points : '?'} pts</span></div>
          <div class="rmeta">${esc(dets || 'No detachment')} · ${d.toLocaleDateString()}</div></div>
        <div class="acts">${S.m ? `<button class="iconbtn" data-act="rosterMenu2" data-id="${r.id}" aria-label="Actions for ${esc(r.name)}">${ICON.more}</button>` :
          `<button class="btn sm" data-act="openRoster" data-id="${r.id}">Open</button><button class="btn sm" data-act="rosterDup" data-id="${r.id}">Duplicate</button><button class="btn sm" data-act="renameSheet" data-id="${r.id}">Rename</button><button class="btn sm" data-act="exportRoster" data-id="${r.id}">Export</button><button class="btn sm danger" data-act="rosterDelAsk" data-id="${r.id}">Delete</button>`}</div>
      </div>`;
    };
    return list.length ? Object.entries(groups).map(([f, rs]) => `<div class="grouphdr">${esc(faction(f).name)}</div><div class="rlist">${rs.map(items).join('')}</div>`).join('') :
        `<div class="empty">No rosters yet. Pick an army and tap <b>New Roster</b>.${fid ? '' : ' <button class="btn sm primary" data-act="homeTab" data-id="armies">Choose an army</button>'}</div>`;
  }
  function rosterListBlock(fid) {
    const n = rosters.filter(r => !fid || r.factionId === fid).length;
    return `<div class="section-title"><h2>My Rosters</h2><span class="dim num">${n}</span><span class="spacer"></span>${rosters.length ? '<button class="btn sm" data-act="openBackup">Back up</button>' : ''}<button class="btn sm" data-act="openImport">Import</button></div>
      <input class="search" type="search" id="home-search" data-inp="homeSearch" placeholder="Search rosters by name" value="${esc(S.homeSearch)}" aria-label="Search rosters">
      <div class="stack" id="roster-list" style="margin-top:12px">${rosterListInner(fid)}</div>`;
  }

  /* ---------------- FACTION ---------------- */
  function viewFaction() {
    const f = faction(S.factionId), fd = fdata(S.factionId);
    applyTheme(S.factionId);
    const tabs = [['army', 'Army Rules'], ['dets', 'Detachments'], ['sheets', 'Datasheets']];
    let rules = '';
    if (S.factionTab === 'army') rules = armyRulesHTML(fd);
    if (S.factionTab === 'dets') rules = `<div class="stack">${fd.detachments.map(d => detachmentHTML(d)).join('')}</div>`;
    if (S.factionTab === 'sheets') {
      const q = S.search.toLowerCase();
      const us = fd.units.filter(u => !q || u.name.toLowerCase().includes(q) || u.keywords.join(' ').toLowerCase().includes(q));
      rules = `<input class="search" type="search" id="fs-search" data-inp="search" placeholder="Search datasheets or keywords" value="${esc(S.search)}" aria-label="Search datasheets">
        <div class="addlist" style="margin-top:10px">${us.map(u => `<div class="panel additem"><button class="ptbtn" data-act="openDs" data-id="${u.id}" aria-label="Open ${esc(u.name)} datasheet">${portrait(u, S.factionId)}</button>
          <div class="grow"><button class="nm" data-act="openDs" data-id="${u.id}">${esc(u.name)}</button><div class="sub">${u.faction !== fd.armyFaction ? esc(u.faction) + ' · ' : ''}${u.sizes.map(s => `${s.models} model${s.models === 1 ? '' : 's'} ${s.pts}`).join(' / ')} pts</div></div><button class="btn sm" data-act="editPortrait" data-id="${u.id}" aria-label="Change portrait of ${esc(u.name)}">${ICON.camera}<span class="hide-sm">Portrait</span></button></div>`).join('')}</div>`;
    }
    return topbar(`<span class="title">${esc(f.name)}</span>`, { back: 'goHome' }) +
      `<main class="wrap"><div class="hero">${logoOf(f.id) ? `<img src="${logoOf(f.id)}" alt="">` : f.emblemSvg}<div><div class="eyebrow">Army</div><h1 class="h-display">${esc(f.name)}</h1></div></div>
      <div class="row" style="margin:8px 0 6px"><button class="btn primary" data-act="newRoster">${ICON.plus} New Roster</button><button class="btn" data-act="openImport">Import roster</button></div>
      ${rosterListBlock(S.factionId)}
      <div class="section-title" style="margin-top:28px"><h2>Rules browser</h2></div>
      <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${S.factionTab === id}" data-act="factionTab" data-id="${id}">${l}</button>`).join('')}</div>
      <div style="margin-top:14px">${rules}</div><div style="margin-top:22px">${stamp()}</div></main>` + modalHTML() + sheetHTML();
  }

  function armyRulesHTML(fd) {
    return `<div class="stack">${fd.armyRules.map(r => `<div class="panel pad stack"><h3>${esc(r.name)}</h3>${r.text.map(t => `<p style="margin:0">${esc(t)}</p>`).join('')}
      ${r.blessings ? `<div class="stack" style="gap:6px">${r.blessings.map(b => `<div class="blessing"><div><b>${esc(b.name)}</b><div class="dim">${esc(b.effect)}</div></div><span class="badge gold">${esc(b.reqText)}</span></div>`).join('')}</div>` : ''}</div>`).join('')}</div>`;
  }
  function enhLine(e, carriers) {
    return `<div class="abil"><div class="row nowrap"><b class="grow">${esc(e.name)}${e.upgrade ? ' <span class="badge gold">Upgrade</span>' : ''}</b><span class="num" style="font-weight:700">${e.pts} pts</span></div><div>${esc(e.text)}</div>${carriers ? `<div class="dim" style="margin-top:4px">Carried by: ${esc(carriers)}</div>` : ''}</div>`;
  }
  function detachmentHTML(d, r) {
    const carriers = e => r ? r.units.filter(u => Engine.enhIds(u).includes(e.id)).map(u => dispName(r, u)).join(', ') : '';
    const enhs = r ? d.enhancements.filter(e => carriers(e)) : d.enhancements;
    return `<details class="panel pad" ${r ? 'open' : ''}><summary style="cursor:pointer;list-style:none"><div class="row"><h3 class="grow">${esc(d.name)}</h3><span class="badge gold">${d.dp} DP</span>${Engine.dispositionsOf(d).map(x => `<span class="badge">${esc(x)}</span>`).join('')}${(d.tags || []).map(t => `<span class="badge red">${esc(t)}</span>`).join('')}</div><div class="dim" style="margin-top:4px">${esc(d.summary || '')}</div></summary>
      <div class="stack" style="margin-top:12px"><div class="abil"><b>${esc(d.rule.name)}</b>${esc(d.rule.text)}</div>
      <div class="eyebrow">${r ? 'Enhancements in this roster' : 'Enhancements'}</div>${enhs.length ? enhs.map(e => enhLine(e, r && carriers(e))).join('') : '<div class="dim">None taken.</div>'}
      ${r ? '' : `<div class="eyebrow">Stratagems</div><div class="sgrid">${d.stratagems.map(s => stratCard(s, d.name)).join('')}</div>`}</div></details>`;
  }
  const PH_VAR = { Command: '--ph-command', Movement: '--ph-movement', Shooting: '--ph-shooting', Charge: '--ph-charge', Fight: '--ph-fight', Any: '--ph-any' };
  function stratCard(s, src) {
    const ph = s.phases[0];
    return `<article class="scard" style="--ph:var(${PH_VAR[ph] || '--ph-any'})"><div class="row nowrap"><div class="grow"><div class="ph">${esc(s.phases.join(' / '))} · ${esc(s.type || 'Core')}</div><h3>${esc(s.name)}</h3></div><span class="cp num">${s.cp} CP</span></div>
      ${stratDL(s)}
      <div class="faint" style="font-size:.8rem">${esc(src)}</div></article>`;
  }

  /* ---------------- WIZARD ---------------- */
  function detBlock(d, draft) {
    const fd = fdata(draft.factionId), bs = bsDef(draft.battleSize);
    if (draft.detachmentIds.includes(d.id)) return null;
    const sel = draft.detachmentIds.map(id => fd.detachments.find(x => x.id === id));
    const used = sel.reduce((s, x) => s + x.dp, 0);
    if (bs.loneThreeDp && sel.some(x => x.dp === 3)) return `A 3 DP detachment must be your only one in ${bs.name}.`;
    if (d.dp === 3 && sel.some(x => x.dp === 3)) return 'Only one 3 DP detachment per army.';
    if (used + d.dp > bs.dp && !(bs.loneThreeDp && d.dp === 3 && !sel.length)) return `Needs ${d.dp} DP, you have ${bs.dp - used} left.`;
    const tag = (d.tags || []).find(t => sel.some(x => (x.tags || []).includes(t)));
    if (tag) return `Shares the ${tag} tag with a chosen detachment.`;
    return null;
  }
  function viewWizard() {
    const dr = S.draft, fd = fdata(dr.factionId), f = faction(dr.factionId), bs = bsDef(dr.battleSize);
    applyTheme(dr.factionId);
    const used = dr.detachmentIds.reduce((s, id) => s + fd.detachments.find(d => d.id === id).dp, 0);
    const disps = [...new Set(dr.detachmentIds.flatMap(id => Engine.dispositionsOf(fd.detachments.find(d => d.id === id))))];
    if (disps.length === 1) dr.forceDisposition = disps[0];
    if (dr.forceDisposition && !disps.includes(dr.forceDisposition)) dr.forceDisposition = null;
    const ok = dr.name.trim() && dr.detachmentIds.length && dr.forceDisposition;
    return topbar(`<span class="title">${dr.editing ? 'Edit setup' : 'New ' + esc(f.name) + ' roster'}</span>`, { back: dr.editing ? 'wizCancel' : 'goFaction' }) +
      `<main class="wrap stack" style="gap:22px">
      <section class="stack"><div class="eyebrow">1 · Roster name</div><input type="text" id="wiz-name" data-inp="draftName" value="${esc(dr.name)}" aria-label="Roster name" style="max-width:520px"></section>
      <section class="stack"><div class="eyebrow">2 · Battle size</div><div class="cards3">${GR.battleSizes.map(b => `<button class="choice" aria-pressed="${dr.battleSize === b.id}" data-act="draftSize" data-id="${b.id}"><span class="big">${b.name}</span><dl><dt>Points</dt><dd>${b.points}</dd><dt>DP budget</dt><dd>${b.dp}</dd><dt>Enhancements</dt><dd>${b.enhancements}</dd><dt>Copies per datasheet</dt><dd>${b.copyLimit} (Battleline / Transport ${b.copyLimit * 2})</dd></dl>${b.loneThreeDp ? '<span class="dim" style="font-size:.85rem">A single 3 DP detachment may be taken on its own.</span>' : ''}</button>`).join('')}</div></section>
      <section class="stack"><div class="row"><div class="eyebrow grow">3 · Detachments</div><b class="num">${used} / ${bs.dp} DP</b></div><div class="bar ${used > bs.dp ? 'over' : ''}"><i style="width:${Math.min(100, used / bs.dp * 100)}%"></i></div>
        <div class="stack" style="gap:8px">${fd.detachments.map(d => { const why = detBlock(d, dr); const on = dr.detachmentIds.includes(d.id); return `<button class="choice detrow" role="checkbox" aria-checked="${on}" ${why ? 'aria-disabled="true"' : ''} data-act="draftDet" data-id="${d.id}"><span class="check">${on ? '✓' : ''}</span><span class="stack" style="gap:4px"><span class="row"><span class="big">${esc(d.name)}</span><span class="badge gold">${d.dp} DP</span>${Engine.dispositionsOf(d).map(x => `<span class="badge">${esc(x)}</span>`).join('')}${(d.tags || []).map(t => `<span class="badge red">${esc(t)}</span>`).join('')}</span><span class="dim">${esc(d.summary)}</span>${why ? `<span class="why">⚠ ${esc(why)}</span>` : ''}</span></button>`; }).join('')}</div></section>
      <section class="stack"><div class="eyebrow">4 · Force Disposition</div>${disps.length ? `<div class="row">${disps.map(x => `<button class="chip" aria-pressed="${dr.forceDisposition === x}" data-act="draftDisp" data-id="${esc(x)}">${esc(x)}</button>`).join('')}</div>${disps.length === 1 ? '<span class="dim">Set automatically: only one disposition is available.</span>' : '<span class="dim">Pick one of your detachments\' dispositions.</span>'}` : '<span class="dim">Choose a detachment first.</span>'}</section>
      <div class="row"><button class="btn primary" data-act="wizDone" ${ok ? '' : 'disabled'}>${dr.editing ? 'Save setup' : 'Create roster'}</button>${ok ? '' : '<span class="dim">Pick a detachment and a disposition to continue.</span>'}</div>
      </main>`;
  }

  /* ---------------- ROSTER (builder & tabs) ---------------- */
  function viewRoster() {
    const r = cur();
    if (!r) { S.view = 'home'; return viewHome(); }
    applyTheme(r.factionId);
    if (S.m) return viewRosterM(r);
    const title = S.renaming
      ? `<input type="text" id="roster-name" data-inp="rosterName" value="${esc(r.name)}" aria-label="Roster name" style="width:100%;max-width:420px">`
      : `<button class="ptbtn title" data-act="startRename" style="max-width:100%;text-align:left" aria-label="Rename roster">${esc(r.name)} <span class="faint" style="font-size:.8rem">${ICON.edit.replace('<svg', '<svg width="14" height="14"')}</span></button>`;
    const right = `<button class="btn sm" data-act="exportRoster" data-id="${r.id}">${ICON.share}<span class="sr">Export</span></button>`;
    let body = '';
    if (S.tab === 'build') body = builderHTML(r);
    if (S.tab === 'list') body = rosterViewHTML(r);
    if (S.tab === 'rules') body = rulesTabHTML(r);
    if (S.tab === 'strats') body = stratsTabHTML(r);
    if (S.tab === 'play') body = playHTML(r);
    const tabs = [['home', 'Home', 'home'], ['build', 'Build', 'plus'], ['list', 'Roster', 'list'], ['rules', 'Rules', 'book'], ['strats', 'Stratagems', 'bolt'], ['play', 'Play', 'dice']];
    return topbar(title, { back: 'goBack', right, below: meters(r) }) + `<main class="wrap">${body}</main>` + tabbar(tabs, S.tab, 'rosterTab') + modalHTML() + sheetHTML();
  }

  /* catalogue of addable units (desktop left column, phone "Add units" screen) */
  function catalogCats(r) {
    const fd = fdata(r.factionId);
    const blAllowed = (fd.alliedFactions || []).filter(a => r.detachmentIds.includes(a.requiresDetachment)).map(a => a.faction);
    const present = new Set(fd.units.filter(u => u.faction === fd.armyFaction || blAllowed.includes(u.faction)).map(u => catOf(u, r)));
    const hi = (faction(r.factionId).highlights || []).map(h => [hiKey(h), h.label.charAt(0) + h.label.slice(1).toLowerCase()]);
    return { blAllowed, cats: CATS.filter(([c]) => c === 'all' || present.has(c)).concat(hi) };
  }
  function catalogList(r) {
    const fd = fdata(r.factionId), bs = bsDef(r.battleSize);
    const ctx = Engine.ctxFor(r, DATA);
    const { blAllowed, cats } = catalogCats(r);
    if (!cats.some(([c]) => c === S.cat)) S.cat = 'all';
    const q = S.search.trim().toLowerCase();
    const units = fd.units.filter(u => (u.faction === fd.armyFaction || blAllowed.includes(u.faction)))
      .filter(u => S.cat === 'all' || (S.cat.startsWith('kw:') ? (faction(r.factionId).highlights || []).some(h => hiKey(h) === S.cat && hiState(r, u, null, h)) : catOf(u, r) === S.cat))
      .filter(u => !q || u.name.toLowerCase().includes(q) || [...Engine.keywordsOf(u, ctx)].join(' ').toLowerCase().includes(q));
    const pts = rosterPts(r);
    const grouped = {};
    units.forEach(u => (grouped[catOf(u, r)] = grouped[catOf(u, r)] || []).push(u));
    const have = id => r.units.filter(x => x.datasheetId === id).length;
    const addRow = u => {
      const nx = Engine.nextCopyInfo(u, r, DATA, u.sizes[0].models);
      const blocked = nx.copyNo > nx.limit ? `Limit ${nx.limit} reached in ${bs.name}` : null;
      const overPts = !blocked && pts.total + nx.pts > bs.points ? `Over points by ${pts.total + nx.pts - bs.points}` : null;
      const n = have(u.id);
      return `<div class="panel additem"><button class="ptbtn" data-act="openDs" data-id="${u.id}" aria-label="Open ${esc(u.name)} datasheet">${portrait(u, r.factionId)}</button>
        <div class="grow"><button class="nm" data-act="openDs" data-id="${u.id}">${esc(u.name)}${n ? ` <span class="have">×${n}</span>` : ''}${kwBadges(r, u, null)}</button>
        <div class="sub num">${u.sizes.map(s => `${s.models}: ${s.pts}`).join(' · ')} pts</div>
        ${nx.surcharge ? `<div class="sub" style="color:var(--warn)">Next copy: +${nx.surcharge} pts</div>` : ''}${blocked ? `<div class="why">${esc(blocked)}</div>` : overPts ? `<div class="why">${esc(overPts)}</div>` : ''}</div>
        <button class="addbtn" data-act="addUnit" data-id="${u.id}" ${blocked ? 'aria-disabled="true"' : ''} aria-label="Add ${esc(u.name)}${blocked ? ' (' + esc(blocked) + ')' : ''}">+</button></div>`;
    };
    return (Object.keys(CAT_NAME).filter(c => grouped[c]).map(c => `<div class="grouphdr">${CAT_NAME[c]}${c === 'allies' ? ' · ' + esc(blAllowed.join(', ')) : ''}</div>${grouped[c].map(addRow).join('')}`).join('') || '<div class="empty">No units match.</div>')
      + (blAllowed.length ? '' : (fd.alliedFactions || []).map(a => `<div class="faint" style="font-size:.85rem;margin-top:8px">${esc(a.faction)} allies appear when ${esc((fd.detachments.find(d => d.id === a.requiresDetachment) || {}).name || '')} is in the roster.</div>`).join(''));
  }
  /* display order: each bodyguard followed by the leaders attached to it */
  /* Faction highlights (Tyranids: SYNAPSE keyword; Death Guard: units with a bigger Contagion Range; World Eaters: Icon of Khorne).
     Returns null when the unit has none; {on, cond, note, n} otherwise (n = number of sources, for ranged labels). */
  const hiKey = h => 'kw:' + (h.id || h.keyword);
  function hiState(r, def, inst, h) {
    const ctx = Engine.ctxFor(r, DATA);
    if (h.wargear) {
      const o = h.wargear[def.id]; if (!o) return null;
      if (!inst) return { on: true, cond: true, note: h.condNote || '' };
      return (+((inst.wargear || {})[o]) || 0) > 0 ? { on: true, note: h.title || '' } : null;
    }
    const notes = [], conds = [];
    if (h.keyword && Engine.hasKw(def, ctx, h.keyword, inst)) notes.push((h.notes || {})[def.id] || '');
    if (h.unitIds && h.unitIds[def.id] != null) notes.push(h.unitIds[def.id]);
    Object.entries(h.detachments || {}).forEach(([did, rule]) => {
      if (!r.detachmentIds.includes(did)) return;
      if ((rule.factionsAll || []).length && !rule.factionsAll.includes(def.faction)) return;
      if ((rule.keywordsAll || []).some(k => !Engine.hasKw(def, ctx, k, inst))) return;
      (rule.cond ? conds : notes).push(rule.note || '');
    });
    if (notes.length) return { on: true, n: notes.length, note: notes.filter(Boolean).join(' ') };
    if ((h.conditional || {})[def.id]) conds.push(h.conditional[def.id]);
    if (conds.length) return { on: true, cond: true, note: conds.join(' ') };
    return null;
  }
  const hiLabel = (h, st) => h.rangeStep ? `${h.label} +${(st.n || 1) * h.rangeStep}″` : h.label;
  function kwBadges(r, def, inst) {
    const f = faction(r.factionId); if (!f || !f.highlights || !def) return '';
    return f.highlights.map(h => {
      const st = hiState(r, def, inst, h); if (!st) return '';
      const d = -(((inst ? inst.instanceId : def.id).split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 37) / 10).toFixed(1);
      return `<span class="kwfx ${h.tone ? 'tone-' + h.tone : ''} ${st.cond ? 'cond' : ''}" style="--d:${d}s" title="${esc(st.note || h.title || '')}">${esc(hiLabel(h, st))}${st.cond ? '*' : ''}</span>`;
    }).join('');
  }
  function meleeBonus(r, def, inst) {
    const f = faction(r.factionId); if (!f || !f.highlights || !def) return null;
    for (const h of f.highlights) { if (!h.meleeBonus) continue; const st = hiState(r, def, inst, h); if (st && !st.cond) return h.meleeBonus; }
    return null;
  }
  function hiSummary(r) {
    const f = faction(r.factionId); if (!f || !f.highlights || !r.units.length) return '';
    return f.highlights.map(h => {
      const list = r.units.map(u => ({ u, st: hiState(r, unitDef(r.factionId, u.datasheetId), u, h) })).filter(x => x.st);
      return `<div class="hisum ${h.tone ? 'tone-' + h.tone : ''}"><span class="kwfx ${h.tone ? 'tone-' + h.tone : ''}" style="--d:0s">${esc(h.label)}</span><span class="dim">${list.length ? esc(list.map(x => dispName(r, x.u) + (x.st.cond ? '*' : '') + (h.rangeStep ? ` (+${(x.st.n || 1) * h.rangeStep}″)` : '')).join(', ')) : esc(h.none || 'No units')}</span></div>`;
    }).join('');
  }
  /* roster split into GW-app categories; every unit stays in its own category (an attached leader is labelled, not moved) */
  function rosterGroups(r) {
    const pts = rosterPts(r), groups = {};
    r.units.forEach(u => {
      const def = unitDef(r.factionId, u.datasheetId); if (!def) return;
      const c = catOf(def, r, u), g = groups[c] || (groups[c] = { cat: c, label: CAT_NAME[c] || 'Other', items: [], pts: 0 });
      g.items.push(u); g.pts += (pts.per[u.instanceId] || { total: 0 }).total;
    });
    return Object.keys(CAT_NAME).concat('other').filter(c => groups[c]).map(c => groups[c]);
  }
  const COLL_KEY = 'mr.ui.collapsed';
  let COLL = lsGet(COLL_KEY) || {};
  const isColl = (r, c) => (COLL[r.id] || []).includes(c);
  /* "Attached to X" on a leader, "Led by Y" on its bodyguard */
  function attachInfo(r, u) {
    const to = u.attachedTo ? r.units.find(b => b.instanceId === u.attachedTo) : null;
    const by = r.units.filter(a => a.attachedTo === u.instanceId);
    return { to, by, text: [to ? 'Attached to ' + dispName(r, to) : '', by.length ? 'Led by ' + by.map(a => dispName(r, a)).join(', ') : ''].filter(Boolean).join(' · ') };
  }
  const groupHdr = (r, g, errUnits) => { const c = isColl(r, g.cat), bad = errUnits && g.items.some(u => errUnits.has(u.instanceId));
    return `<button class="grouphdr rgh ${c ? 'closed' : ''}" data-act="toggleGrp" data-id="${g.cat}" aria-expanded="${!c}"><span class="rgh-l">${CHEV}${esc(g.label)}${bad && c ? ' <span class="bad">✕</span>' : ''}</span><span class="num">${g.items.length} · ${g.pts} pts</span></button>`; };
  function rosterOrder(r) {
    const top = r.units.filter(u => !u.attachedTo || !r.units.some(b => b.instanceId === u.attachedTo));
    const out = [];
    top.forEach(u => { out.push(u); r.units.filter(a => a.attachedTo === u.instanceId).forEach(a => out.push(a)); });
    return out;
  }

  function builderHTML(r) {
    const fd = fdata(r.factionId), bs = bsDef(r.battleSize);
    const { cats } = catalogCats(r);
    const pts = rosterPts(r);
    const addCol = `<section class="addcol stack" aria-label="Add units"><div class="row"><h2 class="grow">Add units</h2><button class="btn sm" data-act="editSetup">Edit setup</button></div>
      <div class="dim" style="font-size:.9rem">${esc(bs.name)} · ${esc(r.detachmentIds.map(id => fd.detachments.find(d => d.id === id).name).join(' + '))} · ${esc(r.forceDisposition || 'no disposition')}</div>
      <input class="search" type="search" id="add-search" data-inp="search" placeholder="Search name or keyword" value="${esc(S.search)}" aria-label="Search units" autocomplete="off">
      <div class="chips" role="group" aria-label="Categories">${cats.map(([c, l]) => `<button class="chip" aria-pressed="${S.cat === c}" data-act="cat" data-id="${c}">${l}</button>`).join('')}</div>
      <div class="addlist" id="cat-list">${catalogList(r)}</div></section>`;
    // roster column
    const v = Engine.validate(r, DATA);
    const errUnits = new Set(v.filter(x => x.severity === 'error' && x.unitInstanceId).map(x => x.unitInstanceId));
    const cards = hiSummary(r) + rosterGroups(r).map(g => groupHdr(r, g, errUnits) + (isColl(r, g.cat) ? '' : g.items.map(u => unitCard(r, u, pts, errUnits)).join(''))).join('');
    const rosterCol = `<section class="stack" aria-label="Roster"><div class="row"><h2 class="grow">Roster</h2><span class="dim num">${r.units.length} units</span></div>
      ${cards || '<div class="empty">Your roster is empty. Add a CHARACTER first; tap a name or portrait to read its datasheet.</div>'}
      <div class="panel pad stack"><h3>Validation</h3>${valList(v)}</div>
      <label class="fld">Roster notes<textarea id="roster-notes" data-inp="rosterNotes">${esc(r.notes || '')}</textarea></label></section>`;
    return `<div class="builder">${addCol}${rosterCol}</div>`;
  }

  function valList(v) {
    if (!v.length) return '<div class="dim">✓ No problems found. This roster is legal.</div>';
    const order = { error: 0, warning: 1, info: 2 };
    const ic = { error: '✕', warning: '!', info: 'i' };
    const lbl = { error: 'Error', warning: 'Warning', info: 'Note' };
    return `<div class="vpanel">${v.slice().sort((a, b) => order[a.severity] - order[b.severity]).map(m => `<button class="vmsg ${m.severity}" data-act="jumpUnit" data-id="${m.unitInstanceId || ''}"><span class="ic" aria-hidden="true">${ic[m.severity]}</span><span><span class="sr">${lbl[m.severity]}: </span>${esc(m.message)}</span></button>`).join('')}</div>`;
  }

  /* pickers: enhancement / upgrade and attach-to-bodyguard; inline popover on desktop, bottom sheet on phones */
  function pickCard(act, instId, val, name, meta, desc, on, why, pre = '') {
    return `<button class="pick ${on ? 'on' : ''}" role="radio" aria-checked="${on}" ${why ? 'aria-disabled="true"' : ''} data-act="${act}" data-id="${instId}" data-v="${val}"><span class="pick-dot" aria-hidden="true"></span>${pre}<span class="pick-body"><span class="pick-top"><b>${name}</b>${meta}</span>${desc ? `<span class="pick-desc">${desc}</span>` : ''}${why ? `<span class="pick-why">⚠ ${esc(why)}</span>` : ''}</span></button>`;
  }
  function enhChoices(r, inst) {
    const def = unitDef(r.factionId, inst.datasheetId), ctx = Engine.ctxFor(r, DATA);
    const isChar = Engine.hasKw(def, ctx, 'Character', inst);
    const ctxEnh = ctx.dets.flatMap(d => d.enhancements.map(e => ({ ...e, det: d.name })));
    return { isChar, relevant: ctxEnh.filter(e => isChar ? !e.upgrade : (e.upgrade && !Engine.eligibleReason(e, inst, r, DATA))) };
  }
  function enhPickList(r, inst) {
    const { relevant } = enhChoices(r, inst);
    return pickCard('pickEnh', inst.instanceId, '', 'None', '', '', !inst.enhancementId, null)
      + relevant.map(e => { const on = e.id === inst.enhancementId; const why = on ? null : Engine.enhancementBlock(e, inst, r, DATA); return pickCard('pickEnh', inst.instanceId, e.id, esc(e.name), `<span class="pick-pts num">+${e.pts} pts</span><span class="badge">${esc(e.det)}</span>${e.upgrade ? '<span class="badge gold">Upgrade</span>' : ''}`, esc(e.text), on, why); }).join('');
  }
  function attTargets(r, inst) {
    const def = unitDef(r.factionId, inst.datasheetId);
    const can = Engine.canLead(def, inst, r, DATA);
    return { can, targets: r.units.filter(u => u.instanceId !== inst.instanceId && can.includes(u.datasheetId)) };
  }
  function attPickList(r, inst) {
    const { targets } = attTargets(r, inst);
    return pickCard('pickAtt', inst.instanceId, '', 'Not attached', '', '', !inst.attachedTo, null)
      + targets.map(t => { const on = inst.attachedTo === t.instanceId; const why = on ? null : Engine.attachBlock(inst, t, r, DATA); const tdef = unitDef(r.factionId, t.datasheetId); return pickCard('pickAtt', inst.instanceId, t.instanceId, esc(dispName(r, t)), `<span class="pick-pts num">${t.size} models</span>`, '', on, why, portrait(tdef, r.factionId, 'sm')); }).join('');
  }
  function unitBody(r, inst, pts, mobile) {
    const def = unitDef(r.factionId, inst.datasheetId);
    const ctx = Engine.ctxFor(r, DATA);
    const p = pts.per[inst.instanceId] || { total: 0 };
    const sizes = def.sizes.length > 1 ? `<div class="stack" style="gap:6px"><span class="eyebrow">Unit size</span><div class="seg" role="group" aria-label="Unit size">${def.sizes.map(s => { const later = def.stepFrom && p.copyNo >= def.stepFrom && s.ptsLater != null; return `<button aria-pressed="${inst.size === s.models}" data-act="setSize" data-id="${inst.instanceId}" data-v="${s.models}">${s.models} · ${later ? s.ptsLater : s.pts} pts</button>`; }).join('')}</div></div>` : '';
    const opts = wargearHTML(def, inst);
    const { isChar, relevant } = enhChoices(r, inst);
    let enhHTML = '';
    if (Engine.hasKw(def, ctx, 'Epic Hero')) enhHTML = '<div class="dim">Epic Heroes cannot take enhancements.</div>';
    else if (relevant.length) {
      const kE = inst.instanceId + ':enh', openE = !mobile && S.openPick === kE, curE = relevant.find(e => e.id === inst.enhancementId);
      const trigE = `<button class="picktrig ${curE ? 'set' : ''}" data-act="${mobile ? 'pickSheet' : 'togglePick'}" data-k="${kE}" data-kind="enh" data-id="${inst.instanceId}" aria-expanded="${openE}"><span class="pick-body"><span class="pick-top"><b>${curE ? esc(curE.name) : 'None'}</b>${curE ? `<span class="pick-pts num">+${curE.pts} pts</span><span class="badge">${esc(curE.det)}</span>` : ''}</span>${curE ? `<span class="pick-desc">${esc(curE.text)}</span>` : ''}</span>${CHEV}</button>`;
      enhHTML = `<div class="stack" style="gap:6px"><span class="eyebrow">${isChar ? 'Enhancement' : 'Upgrade'}</span><div class="pickwrap">${trigE}${openE ? `<div class="picklist pickpop" role="radiogroup" aria-label="${isChar ? 'Enhancement' : 'Upgrade'}">${enhPickList(r, inst)}</div>` : ''}</div></div>`;
    }
    const { can, targets } = attTargets(r, inst);
    let attHTML = '';
    if (can.length) {
      const kA = inst.instanceId + ':att', openA = !mobile && S.openPick === kA, curA = inst.attachedTo ? r.units.find(u => u.instanceId === inst.attachedTo) : null;
      const trigA = `<button class="picktrig ${curA ? 'set' : ''}" data-act="${mobile ? 'pickSheet' : 'togglePick'}" data-k="${kA}" data-kind="att" data-id="${inst.instanceId}" aria-expanded="${openA}">${curA ? portrait(unitDef(r.factionId, curA.datasheetId), r.factionId, 'sm') : ''}<span class="pick-body"><span class="pick-top"><b>${curA ? esc(dispName(r, curA)) : 'Not attached'}</b>${curA ? `<span class="pick-pts num">${curA.size} models</span>` : ''}</span></span>${CHEV}</button>`;
      attHTML = `<div class="stack" style="gap:6px"><span class="eyebrow">Attach to bodyguard</span><div class="pickwrap">${trigA}${openA ? `<div class="picklist pickpop" role="radiogroup" aria-label="Attach to bodyguard">${attPickList(r, inst)}</div>` : ''}</div></div>
        <div class="faint" style="font-size:.85rem">Can lead: ${esc(can.map(id => (unitDef(r.factionId, id) || {}).name).join(', '))}${targets.length ? '' : ' — add one of these units first.'}</div>`;
    }
    const leaders = r.units.filter(u => u.attachedTo === inst.instanceId);
    const grants = Engine.grantsFor(def, ctx).map(g => `<label class="row toggle-row"><input type="checkbox" id="gr-${inst.instanceId}-${g.id}" data-chg="grant" data-id="${inst.instanceId}" data-g="${g.id}" ${(inst.grants || []).includes(g.id) ? 'checked' : ''}> ${esc(g.label)}</label>${g.note ? `<div class="faint" style="font-size:.85rem;margin-top:-6px">${esc(g.note)}</div>` : ''}`).join('');
    const wlWhy = isChar ? Engine.warlordBlock(def, inst, ctx) : null, isWl = r.warlordUnitId === inst.instanceId;
    return `${grants}${sizes}${opts ? `<div class="stack" style="gap:10px"><span class="eyebrow">Wargear</span>${opts}</div>` : ''}${enhHTML}${attHTML}
      ${leaders.length ? `<div class="dim">Led by: ${esc(leaders.map(l => dispName(r, l)).join(', '))}</div>` : ''}
      ${isChar ? `<label class="row toggle-row"><input type="checkbox" id="wl-${inst.instanceId}" data-chg="warlord" data-id="${inst.instanceId}" ${isWl ? 'checked' : ''} ${wlWhy && !isWl ? 'disabled' : ''}> Warlord</label>${wlWhy ? `<div class="faint" style="font-size:.85rem;margin-top:-6px">${esc(wlWhy)}</div>` : ''}` : ''}
`;
  }
  function unitBadges(r, inst, p, ctx) {
    const enh = inst.enhancementId ? ctx.allEnh[inst.enhancementId] : null;
    const att = inst.attachedTo ? r.units.find(u => u.instanceId === inst.attachedTo) : null;
    const badges = [];
    if (r.warlordUnitId === inst.instanceId) badges.push('<span class="badge gold">Warlord</span>');
    { const k = kwBadges(r, unitDef(r.factionId, inst.datasheetId), inst); if (k) badges.unshift(k); }
    Engine.instGrants(unitDef(r.factionId, inst.datasheetId), ctx, inst).forEach(g => badges.push(`<span class="badge">${esc(g.keyword)}</span>`));
    if (enh) badges.push(`<span class="badge gold">${esc(enh.name)}</span>`);
    if (p.surcharge) badges.push(`<span class="badge red">${ORD(p.copyNo)} copy +${p.surcharge}</span>`);
    if (att) badges.push(`<span class="badge link">Attached to ${esc(dispName(r, att))}</span>`);
    r.units.filter(a => a.attachedTo === inst.instanceId).forEach(a => badges.push(`<span class="badge link">Led by ${esc(dispName(r, a))}</span>`));
    return badges;
  }

  function unitCard(r, inst, pts, errUnits) {
    const def = unitDef(r.factionId, inst.datasheetId);
    if (!def) return '';
    const ctx = Engine.ctxFor(r, DATA);
    const p = pts.per[inst.instanceId] || { total: 0 };
    const open = !!S.expanded[inst.instanceId];
    const meta = [`${inst.size} model${inst.size > 1 ? 's' : ''}`];
    const badges = unitBadges(r, inst, p, ctx);
    const bodyHTML = open ? `<div class="ubody">${unitBody(r, inst, pts, false)}</div>` : '';
    return `<article class="ucard ${errUnits.has(inst.instanceId) ? 'flag-err' : ''}" id="u-${inst.instanceId}">
      <div class="uhead"><button class="ptbtn" data-act="openInst" data-id="${inst.instanceId}" aria-label="Open datasheet">${portrait(def, r.factionId)}</button>
      <div class="grow"><button class="uname" data-act="openInst" data-id="${inst.instanceId}">${errUnits.has(inst.instanceId) ? '<span style="color:var(--err)" aria-label="Has errors">✕ </span>' : ''}${esc(dispName(r, inst))}</button><div class="umeta">${meta.join(' · ')} ${badges.join('')}</div></div>
      <span class="upts num">${p.total}</span>
      <button class="iconbtn" data-act="dupUnit" data-id="${inst.instanceId}" aria-label="Duplicate ${esc(dispName(r, inst))}" title="Duplicate">${ICON.dup}</button><button class="iconbtn danger-ic" data-act="removeUnit" data-id="${inst.instanceId}" aria-label="Remove ${esc(dispName(r, inst))}" title="Remove">${ICON.trash}</button>
      <button class="iconbtn" data-act="toggleUnit" data-id="${inst.instanceId}" aria-expanded="${open}" aria-label="${open ? 'Collapse' : 'Edit'} ${esc(dispName(r, inst))}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform:rotate(${open ? 180 : 0}deg)"><path d="M6 9l6 6 6-6"/></svg></button></div>
      ${bodyHTML}</article>`;
  }

  function wargearHTML(def, inst) {
    const slots = def.slots || [];
    if (!slots.length) return (def.options || []).map(o => optionHTML(inst, o, def)).join('');
    const placed = new Set();
    const blocks = slots.map((sl, i) => {
      const size = Engine.slotSize(sl, inst), used = Engine.slotUsed(def, inst, sl.id);
      const mine = (def.options || []).filter(o => o.slots && o.slots[o.slots.length - 1] === sl.id);
      mine.forEach(o => placed.add(o.id));
      return `<div class="wslot"><div class="wslot-h"><span class="eyebrow">${esc(sl.label)}</span><span class="faint num">${size} model${size === 1 ? '' : 's'}</span></div>
        <div class="opt wdefault"><div><div><b>${esc(sl.default)}</b> <span class="faint">(default)</span></div><div class="cap">Every model that does not take an option below</div></div><output class="num wcount">${Math.max(0, size - used)}</output></div>
        ${mine.map(o => optionHTML(inst, o, def)).join('')}${sl.fixedNote ? `<div class="faint" style="font-size:.85rem">${esc(sl.fixedNote)}</div>` : ''}</div>`;
    }).join('');
    const rest = (def.options || []).filter(o => !placed.has(o.id));
    return blocks + (rest.length ? `<div class="wslot"><div class="wslot-h"><span class="eyebrow">Other wargear</span></div>${rest.map(o => optionHTML(inst, o, def)).join('')}</div>` : '');
  }
  function clampWargear(def, inst) {
    const wg = inst.wargear = inst.wargear || {};
    (def.options || []).forEach(o => { if (o.type === 'count' || o.type === 'toggle') { const c = Engine.ownCap(o, inst, def); if ((+wg[o.id] || 0) > c) wg[o.id] = c; } });
    (def.slots || []).forEach(sl => { const size = Engine.slotSize(sl, inst); const opts = (def.options || []).filter(o => (o.slots || []).includes(sl.id)).reverse(); let over = Engine.slotUsed(def, inst, sl.id) - size; for (const o of opts) { if (over <= 0) break; const v = +wg[o.id] || 0, cut = Math.min(v, over); wg[o.id] = v - cut; over -= cut; } });
    (def.optionGroups || []).forEach(g => { const cap = Math.floor(inst.size / g.per) * g.n; const opts = (def.options || []).filter(o => o.group === g.id).reverse(); let over = opts.reduce((a, o) => a + (+wg[o.id] || 0), 0) - cap; for (const o of opts) { if (over <= 0) break; const v = +wg[o.id] || 0, cut = Math.min(v, over); wg[o.id] = v - cut; over -= cut; } });
  }
  function optionHTML(inst, o, def) {
    const wg = inst.wargear || {};
    if (o.type === 'choice') {
      const v = wg[o.id] || o.choices[0].id;
      return `<div class="stack" style="gap:6px"><span>${esc(o.label)}</span><div class="choicechips" role="radiogroup" aria-label="${esc(o.label)}">${o.choices.map(c => `<button class="cchip" role="radio" aria-checked="${c.id === v}" data-act="pickOpt" data-id="${inst.instanceId}" data-o="${o.id}" data-v="${c.id}">${esc(c.label)}${c.pts ? ` <span class="num">+${c.pts}</span>` : ''}</button>`).join('')}</div></div>`;
    }
    const mx = Engine.optionMax(o, inst, def), val = +wg[o.id] || 0, cap = Engine.ownCap(o, inst, def);
    if (o.type === 'toggle') return `<label class="row" style="min-height:44px"><input type="checkbox" id="opt-${inst.instanceId}-${o.id}" data-chg="optToggle" data-id="${inst.instanceId}" data-o="${o.id}" ${val ? 'checked' : ''} ${!val && mx < 1 ? 'disabled' : ''} style="width:22px;height:22px"> ${esc(o.label)}</label>`;
    const grp = o.group && def ? (def.optionGroups || []).find(g => g.id === o.group) : null;
    const capTxt = grp ? `${grp.n} ${grp.label.toLowerCase()} per ${grp.per} models` : o.per ? `${o.n || 1} per ${o.per} models` : o.max === 'models' ? 'any number' : o.max === 'slot' ? 'any of them' : `max ${cap}`;
    return `<div class="opt"><div><div>${esc(o.label)}${o.note ? ` <span class="faint">(${esc(o.note)})</span>` : ''}</div><div class="cap num" ${val > cap ? 'style="color:var(--err)"' : ''}>${val}/${cap} · ${capTxt}</div></div>
      <div class="stepper"><button data-act="optDec" data-id="${inst.instanceId}" data-o="${o.id}" aria-label="Fewer">−</button><output class="num">${val}</output><button data-act="optInc" data-id="${inst.instanceId}" data-o="${o.id}" aria-label="More" ${val >= mx ? 'disabled' : ''}>+</button></div></div>`;
  }

  function rosterViewHTML(r) {
    const fd = fdata(r.factionId), pts = rosterPts(r);
    const ctx = Engine.ctxFor(r, DATA);
    const rows = r.units.slice();
    const bs = bsDef(r.battleSize);
    return `<div class="stack"><div class="panel pad"><div class="row"><div class="grow"><div class="eyebrow">${esc(faction(r.factionId).name)} · ${bs.name}</div><h2>${esc(r.name)}</h2>
      <div class="dim">${esc(r.detachmentIds.map(id => fd.detachments.find(d => d.id === id).name).join(' + '))} · ${esc(r.forceDisposition || '—')}</div></div><b class="num" style="font-size:1.4rem">${pts.total} pts</b></div></div>
      ${rows.length ? rows.map(inst => { const def = unitDef(r.factionId, inst.datasheetId); const p = pts.per[inst.instanceId]; const enh = inst.enhancementId ? ctx.allEnh[inst.enhancementId] : null; const att = inst.attachedTo ? r.units.find(u => u.instanceId === inst.attachedTo) : null; const ws = wargearSummary(def, inst);
        return `<div class="panel additem"><button class="ptbtn" data-act="openInst" data-id="${inst.instanceId}" aria-label="Open datasheet">${portrait(def, r.factionId, 'sm')}</button><div class="grow"><button class="nm" data-act="openInst" data-id="${inst.instanceId}">${esc(dispName(r, inst))}${inst.size > 1 ? ` <span class="dim">×${inst.size}</span>` : ''}</button>
        <div class="sub">${[r.warlordUnitId === inst.instanceId ? '★ Warlord' : '', enh ? esc(enh.name) : '', att ? 'Leading ' + esc(dispName(r, att)) : '', ws.length ? esc(ws.join(', ')) : ''].filter(Boolean).join(' · ') || '&nbsp;'}</div></div><b class="num">${p ? p.total : ''}</b></div>`; }).join('') : '<div class="empty">No units yet. Add them on the Build tab.</div>'}
      <div class="row"><button class="btn" data-act="exportRoster" data-id="${r.id}">${ICON.share} Export / Share</button><button class="btn" data-act="rosterTab" data-id="play">${ICON.dice} Play mode</button></div>${stamp()}</div>`;
  }

  function rulesTabHTML(r) {
    const fd = fdata(r.factionId);
    const dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id));
    return `<div class="stack"><div class="seg" role="tablist"><button role="tab" aria-pressed="${S.rulesSeg === 'army'}" data-act="rulesSeg" data-id="army">Army Rules</button><button role="tab" aria-pressed="${S.rulesSeg === 'det'}" data-act="rulesSeg" data-id="det">Detachment Rules</button></div>
      ${S.rulesSeg === 'army' ? armyRulesHTML(fd) : dets.map(d => detachmentHTML(d, r)).join('')}</div>`;
  }

  function stratsTabHTML(r) {
    const fd = fdata(r.factionId);
    const dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id));
    let list = allStrats(r);
    if (S.stratSrc !== 'All') list = list.filter(x => x.src === S.stratSrc);
    if (S.stratPhase !== 'All') list = list.filter(x => x.s.phases.includes(S.stratPhase) || x.s.phases.includes('Any'));
    const phases = ['All', 'Command', 'Movement', 'Shooting', 'Charge', 'Fight', 'Any'];
    const srcs = ['All', 'Core', ...dets.map(d => d.name)];
    return `<div class="stack"><div class="chips phase-row" role="group" aria-label="Phase">${phases.map(p => `<button class="chip" aria-pressed="${S.stratPhase === p}" data-act="stratPhase" data-id="${p}" ${p !== 'All' ? `style="border-color:var(${PH_VAR[p]})"` : ''}>${p === 'Any' ? 'Any / Other' : p}</button>`).join('')}</div>
      <div class="chips" role="group" aria-label="Source">${srcs.map(s => `<button class="chip" aria-pressed="${S.stratSrc === s}" data-act="stratSrc" data-id="${esc(s)}">${esc(s)}</button>`).join('')}</div>
      ${S.stratPhase !== 'All' ? '<div class="faint" style="font-size:.85rem">Stratagems usable in any phase are included.</div>' : ''}
      <div class="sgrid">${list.map(x => stratCard(x.s, x.src)).join('') || '<div class="empty">No stratagems for this filter.</div>'}</div></div>`;
  }

  /* ---------------- PLAY MODE ---------------- */
  const PHASES = ['Command', 'Movement', 'Shooting', 'Charge', 'Fight'];
  function playState(r) {
    if (S.play && S.playFor === r.id) return S.play;
    let p = lsGet(playKey(r.id));
    S.playFor = r.id;
    if (!p) p = { cp: 1, round: 1, phase: 'Command', turn: 'mine', first: 'mine', vp: [0, 0], wounds: {}, active: [], usedStrats: {} };
    if (!p.turn) p.turn = 'mine';
    if (!p.first) p.first = 'mine';
    if (!p.usedStrats) p.usedStrats = {};
    S.play = p; return p;
  }
  const savePlay = (r) => lsSet(playKey(r.id), S.play);
  /* every game change can be undone once from the snackbar */
  function playChange(r, fn, msg, kind) {
    const before = JSON.stringify(S.play);
    const res = fn(S.play);
    if (res === false) { PL.haptic('reject'); return; }
    savePlay(r); PL.haptic(kind || 'tick'); render();
    const text = typeof msg === 'function' ? msg() : msg;
    if (text) toast(text, [{ label: 'Undo', fn: () => { S.play = JSON.parse(before); savePlay(r); PL.haptic('tick'); render(); } }]);
  }

  const counterHTML = (label, key, val) => `<div class="panel counter"><div class="eyebrow">${label}</div><div class="row nowrap"><button data-act="pc" data-k="${key}" data-d="-1" aria-label="Decrease ${label}">−</button><span class="val num">${val}</span><button data-act="pc" data-k="${key}" data-d="1" aria-label="Increase ${label}">+</button></div></div>`;
  /* Blessings of Khorne: dice are rolled at the table; the player just marks what is active this battle round.
     Two is the usual limit; more can be marked as extras (stratagems, enhancements). */
  function ensureGoo() {
    if (document.getElementById('scGoo')) return;
    const d = document.createElement('div'); d.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    d.innerHTML = '<svg width="0" height="0"><defs><filter id="scGoo" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter><linearGradient id="scDripG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a0004"/><stop offset=".6" stop-color="#8e050c"/><stop offset="1" stop-color="#b10a14"/></linearGradient>'
      + '<filter id="scRot" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter><linearGradient id="scRotG" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2f3d0c"/><stop offset=".6" stop-color="#5f7a1c"/><stop offset="1" stop-color="#8fae2c"/></linearGradient></defs></svg>';
    document.body.appendChild(d);
  }

  /* blood spray from the slash: canvas particles stretched along their velocity, merged into liquid by a gooey filter;
     some land on the card and leave fading splats */
  function bloodSpray(card) {
    ensureGoo();
    const r = card.getBoundingClientRect(), padX = 60, padT = 150, padB = 90, dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = r.width + padX * 2, H = r.height + padT + padB;
    const cv = document.createElement('canvas'); cv.width = W * dpr; cv.height = H * dpr;
    cv.style.cssText = `position:fixed;left:${r.left - padX}px;top:${r.top - padT}px;width:${W}px;height:${H}px;pointer-events:none;z-index:96;filter:url(#scGoo)`;
    document.body.appendChild(cv); const g = cv.getContext('2d'); g.scale(dpr, dpr);
    const ang = -11 * Math.PI / 180, cx0 = padX - r.width * .06, cy0 = padT + r.height * .5, len = r.width * 1.12;
    const P = [];
    for (let i = 0; i < 34; i++) {
      const t = Math.random(), x = cx0 + Math.cos(ang) * len * t, y = cy0 + Math.sin(ang) * len * t;
      const dir = ang - Math.PI / 2 + (Math.random() - .5) * 1.5 + (Math.random() < .25 ? Math.PI : 0); // mostly up-out, some down
      const sp = 180 + Math.random() * 380, big = Math.random() < .2;
      P.push({ x, y, vx: Math.cos(dir) * sp + (Math.random() - .5) * 60, vy: Math.sin(dir) * sp, r: big ? 3.4 + Math.random() * 2.2 : 1.2 + Math.random() * 2.2,
        t0: 70 + t * 170, life: 700 + Math.random() * 500, land: !big && Math.random() < .3 ? padT + r.height * (.2 + Math.random() * .7) : null, splat: 0 });
    }
    const t0 = performance.now(); let last = t0;
    (function frame(now) {
      const dt = Math.min(.04, (now - last) / 1000); last = now; const el = Math.max(0, now - t0);
      g.clearRect(0, 0, W, H); let alive = false;
      for (const p of P) {
        if (el < p.t0) { alive = true; continue; }
        const age = el - p.t0;
        if (p.splat) { // a stain on the card that slowly fades
          const a = 1 - (now - p.splat) / 900; if (a <= 0) continue; alive = true;
          g.globalAlpha = a * .9; g.fillStyle = '#7d040b';
          g.beginPath(); g.ellipse(p.x, p.y, p.r * 1.9, p.r * 1.3, p.rot, 0, 7); g.fill();
          p.sat.forEach(s => { g.beginPath(); g.arc(p.x + s[0], p.y + s[1], s[2], 0, 7); g.fill(); });
          continue;
        }
        if (age > p.life) continue; alive = true;
        p.vy += 1500 * dt; p.vx *= .985; p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.land != null && p.vy > 0 && p.y >= p.land) { p.splat = now; p.rot = Math.random() * 3; p.sat = Array.from({ length: 3 + (Math.random() * 3 | 0) }, () => [(Math.random() - .5) * p.r * 7, (Math.random() - .5) * p.r * 5, .6 + Math.random() * 1.2]); continue; }
        const sp = Math.hypot(p.vx, p.vy), st = Math.min(4, 1 + sp / 160);
        g.globalAlpha = age > p.life * .75 ? 1 - (age - p.life * .75) / (p.life * .25) : 1;
        g.save(); g.translate(p.x, p.y); g.rotate(Math.atan2(p.vy, p.vx));
        g.fillStyle = '#9a0610'; g.beginPath(); // teardrop: round head, tapered tail behind
        g.moveTo(p.r, 0); g.arc(0, 0, p.r, 0, Math.PI * .5); g.quadraticCurveTo(-p.r * st, p.r * .35, -p.r * st * 1.6, 0); g.quadraticCurveTo(-p.r * st, -p.r * .35, 0, -p.r); g.arc(0, 0, p.r, -Math.PI * .5, 0); g.fill();
        g.restore();
      }
      g.globalAlpha = 1;
      if (alive && el < 2200) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  }
  /* eight drips running from the top edge along the title: one gooey SVG so they read as liquid */
  function bloodDrips(card) {
    ensureGoo();
    const w = card.clientWidth, h = card.clientHeight, ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('class', 'drips'); svg.setAttribute('viewBox', `0 0 ${w} ${h}`); svg.setAttribute('width', w); svg.setAttribute('height', h);
    const grp = document.createElementNS(ns, 'g'); grp.setAttribute('filter', 'url(#scGoo)'); grp.setAttribute('fill', 'url(#scDripG)'); svg.appendChild(grp);
    const lip = document.createElementNS(ns, 'rect'); lip.setAttribute('x', 0); lip.setAttribute('y', -6); lip.setAttribute('width', w); lip.setAttribute('height', 0); grp.appendChild(lip);
    const D = [];
    for (let i = 0; i < 8; i++) {
      const x = w * (.06 + i * .09 + (Math.random() - .5) * .04), wd = 3 + Math.random() * 3.5, L = h * (.32 + Math.random() * .42);
      const rc = document.createElementNS(ns, 'rect'); rc.setAttribute('x', x - wd / 2); rc.setAttribute('width', wd); rc.setAttribute('y', -2);
      const bl = document.createElementNS(ns, 'ellipse'); bl.setAttribute('cx', x);
      grp.appendChild(rc); grp.appendChild(bl); D.push({ rc, bl, wd, L, d: 250 + i * 55 + Math.random() * 120, dur: 650 + Math.random() * 500 });
    }
    card.appendChild(svg);
    const t0 = performance.now();
    (function frame(now) {
      const el = Math.max(0, now - t0);
      lip.setAttribute('height', Math.max(0, Math.min(9, el / 40)));
      D.forEach(o => { let q = Math.max(0, Math.min(1, (el - o.d) / o.dur)); q = 1 - Math.pow(1 - q, 2.2); const len = o.L * q;
        o.rc.setAttribute('height', len + 2); const br = o.wd * (.75 + .35 * q); o.bl.setAttribute('cy', len); o.bl.setAttribute('rx', br * .95); o.bl.setAttribute('ry', br * 1.15); });
      svg.style.opacity = el > 1500 ? Math.max(0, 1 - (el - 1500) / 700) : 1;
      if (el < 2200) requestAnimationFrame(frame); else svg.remove();
    })(t0);
  }
  /* activating a Blessing: blade slash, blood spray, eight drips along the title, then the fire flares */
  function bloodStrike(c) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const s = document.createElement('span'); s.className = 'slash'; c.appendChild(s); setTimeout(() => s.remove(), 600);
    bloodSpray(c); bloodDrips(c);
    if (PL.android) setTimeout(() => PL.haptic('reject'), 120);
  }
  function patchBlessings(r, flareId) {
    const p = playState(r), act = p.active || [];
    document.querySelectorAll('.kbl').forEach(c => {
      const id = c.dataset.id, on = act.includes(id), extra = on ? act.indexOf(id) >= 2 : act.length >= 2;
      c.classList.toggle('on', on); c.classList.toggle('extra', extra); c.setAttribute('aria-pressed', on);
      c.querySelector('.kbl-s').textContent = on ? (extra ? 'Active · extra' : 'Active') : (extra ? '+ Extra (stratagem)' : 'Activate');
      if (id === flareId) { bloodStrike(c); setTimeout(() => { c.classList.remove('flare'); void c.offsetWidth; c.classList.add('flare'); setTimeout(() => c.classList.remove('flare'), 1300); }, 280); }
    });
    const n = document.getElementById('kbl-count'); if (n) { n.textContent = `Round ${p.round} · ${act.length} active`; n.classList.toggle('gold', act.length > 0); }
    const g = document.querySelector('.mstatus.game'); if (g) g.outerHTML = gameLine(r);
  }
  function blessHTML(r, p) {
    const bless = fdata(r.factionId).armyRules.find(a => a.blessings);
    if (!bless) return '';
    const act = p.active || [];
    const angron = r.units.some(u => u.datasheetId === 'angron');
    const rows = bless.blessings.map((b, i) => {
      const on = act.includes(b.id), idx = act.indexOf(b.id), extra = on ? idx >= 2 : act.length >= 2;
      return `<button class="kbl ${on ? 'on' : ''} ${extra ? 'extra' : ''}" style="--d:-${(i * 0.7).toFixed(1)}s" data-act="blessPick" data-id="${b.id}" aria-pressed="${on}"><span class="kbl-fire" aria-hidden="true"></span>
        <span class="kbl-t"><b>${esc(b.name)}</b><span class="kbl-req">${esc(b.reqText)}</span></span>
        <span class="kbl-e">${esc(b.effect)}</span>
        <span class="kbl-s">${on ? (extra ? 'Active · extra' : 'Active') : (extra ? '+ Extra (stratagem)' : 'Activate')}</span></button>`;
    }).join('');
    return `<div class="panel pad stack bless"><div class="row"><h3 class="grow">Blessings of Khorne</h3><span class="badge ${act.length ? 'gold' : ''}" id="kbl-count">Round ${p.round} · ${act.length} active</span></div>
      <div class="dim" style="font-size:.9rem" id="kbl-note">Roll 8D6 at the table, then tap the Blessings you activate. Up to two per battle round; mark more only if a rule gives an extra one. They end with the battle round.</div>
      <div class="kbl-list">${rows}</div>
      ${angron ? '<div class="faint" style="font-size:.85rem">Angron: a triple 6 can bring him back with Reborn in Blood instead of activating Blessings.</div>' : ''}</div>`;
  }
  /* Death Guard: Contagion Range for the current battle round, with the sources that extend it */
  function contagionHTML(r, p, gift, dets) {
    const c = gift.contagion, base = c.byRound[Math.min(p.round, c.byRound.length) - 1];
    const mods = [];
    if (r.units.some(u => u.datasheetId === 'lord_of_poxes')) mods.push('Lord of Poxes: +3″ for himself (Gift of Poxes)');
    if (dets.some(d => d.id === 'paragons_of_putrescence')) mods.push('DEATH GUARD CHARACTERS: +3″ (Hypervirulent Strains)');
    if (dets.some(d => d.id === 'tallyband_summoners')) mods.push('Units within 7″ of your PLAGUE LEGIONS: +3″ (Reverberant Rancidity)');
    if (dets.some(d => d.id === 'virulent_vectorium')) mods.push('Plaguesurge Stratagem: +3″ for the whole army until your next Command phase');
    if (dets.some(d => d.id === 'death_lords_chosen')) mods.push('Blooming Pestilence Stratagem: +3″ for one TERMINATOR unit this phase');
    const steps = c.byRound.map((v, i) => `<span class="cstep ${Math.min(p.round, c.byRound.length) === i + 1 ? 'on' : ''}">${i === c.byRound.length - 1 ? `R${i + 1}+` : `R${i + 1}`} · ${v}″</span>`).join('');
    return `<div class="panel pad stack trk contag"><div class="row"><h3 class="grow">Contagion Range</h3><span class="badge">Round ${p.round}</span></div>
      <div class="row nowrap"><div class="cring" aria-hidden="true"><i></i><i></i><i></i><b class="num">${base}″</b></div>
      <div class="stack" style="gap:6px"><div class="csteps">${steps}</div><div class="dim" style="font-size:.9rem">Enemy units this close to your DEATH GUARD models are Afflicted: -1 Toughness and your Plague. Never more than ${c.max}″.</div></div></div>
      ${mods.length ? `<div class="stack" style="gap:2px">${mods.map(m => `<div class="cmod">${esc(m)}</div>`).join('')}</div>` : ''}</div>`;
  }
  const plagueCanPick = (p, eachRound) => !p.plague || (p.phase === 'Command' && p.plagueAt === p.round) || (eachRound && (p.plagueAt || 0) < p.round);
  function plagueHTML(r, p, gift, dets) {
    const eachRound = dets.some(d => d.plagueEachRound), can = plagueCanPick(p, eachRound);
    const cur = gift.plagues.find(x => x.id === p.plague);
    const extra = ['cornucophagus', 'final_ingredient', 'host_of_the_hybridised_pox'].filter(e => r.units.some(u => Engine.enhIds(u).includes(e)));
    const cards = gift.plagues.map((g, i) => `<button class="plg ${p.plague === g.id ? 'on' : ''}" style="--d:-${(i * 1.1).toFixed(1)}s" data-act="dgPlague" data-id="${g.id}" aria-pressed="${p.plague === g.id}" ${!can && p.plague !== g.id ? 'aria-disabled="true"' : ''}><span class="plg-mist" aria-hidden="true"></span>
        <span class="plg-t"><b>${esc(g.name)}</b></span><span class="plg-e">${esc(g.effect)}</span><span class="plg-s">${p.plague === g.id ? 'Chosen' : can ? 'Choose' : 'Locked'}</span></button>`).join('');
    const badge = cur ? `<span class="badge gold" id="plg-badge">${esc(cur.name)}</span>` : '<span class="badge" id="plg-badge">Pick before the battle</span>';
    const note = eachRound ? 'Champions of Contagion: you can switch to another Plague at the start of every battle round.' : 'Pick in the Declare Battle Formations step. It lasts the whole battle.';
    return `<div class="panel pad stack plague"><div class="row"><h3 class="grow">Plague</h3>${badge}</div>
      <div class="dim" style="font-size:.9rem">${esc(note)} Afflicted enemy units always have -1 Toughness as well.</div>
      <div class="plg-list">${cards}</div>
      ${extra.length ? `<div class="faint" style="font-size:.85rem">Your roster also has ${esc(extra.map(id => ((DATA.factionData[r.factionId].detachments.flatMap(d => d.enhancements).find(e => e.id === id)) || {}).name).join(', '))}: those add a second Plague near the bearer.</div>` : ''}</div>`;
  }
  /* choosing a Plague: green slime wells up along the bottom of the card (gooey SVG, behind the text),
     then translucent bubbles rise out of it, wobble and pop (canvas, glossy rims, no fill-blobs) */

  function rotOoze(card) {
    const w = card.clientWidth, h = card.clientHeight, ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('class', 'ooze'); svg.setAttribute('viewBox', `0 0 ${w} ${h}`); svg.setAttribute('width', w); svg.setAttribute('height', h);
    const grp = document.createElementNS(ns, 'g'); grp.setAttribute('filter', 'url(#scRot)'); grp.setAttribute('fill', 'url(#scRotG)'); svg.appendChild(grp);
    const pool = document.createElementNS(ns, 'rect'); pool.setAttribute('x', -10); pool.setAttribute('width', w + 20); grp.appendChild(pool);
    const L = [];
    for (let i = 0; i < 11; i++) {
      const c = document.createElementNS(ns, 'circle'); c.setAttribute('cx', w * (.03 + i * .094 + (Math.random() - .5) * .04)); grp.appendChild(c);
      L.push({ c, R: 7 + Math.random() * 9, d: Math.random() * 380, sp: .7 + Math.random() * .6 });
    }
    card.appendChild(svg);
    const t0 = performance.now();
    (function frame(now) {
      const el = Math.max(0, now - t0), rise = Math.min(1, el / 650), fall = el > 1500 ? Math.min(1, (el - 1500) / 700) : 0;
      const ph = Math.max(0, (8 + 6 * Math.sin(el / 260)) * rise * (1 - fall));
      pool.setAttribute('y', h - ph); pool.setAttribute('height', ph + 10);
      L.forEach(o => { const q = Math.max(0, Math.min(1, (el - o.d) / 520)); const r = o.R * q * (1 - fall) * (.85 + .15 * Math.sin(el / 140 * o.sp));
        o.c.setAttribute('cy', h - ph + 2); o.c.setAttribute('r', Math.max(0, r)); });
      svg.style.opacity = fall ? 1 - fall : 1;
      if (el < 2250) requestAnimationFrame(frame); else svg.remove();
    })(t0);
  }
  function rotBubbles(card) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ensureGoo(); rotOoze(card);
    const rc = card.getBoundingClientRect(), padX = 16, padT = 90, dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = rc.width + padX * 2, H = rc.height + padT + 6;
    const cv = document.createElement('canvas'); cv.width = W * dpr; cv.height = H * dpr;
    cv.style.cssText = `position:fixed;left:${rc.left - padX}px;top:${rc.top - padT}px;width:${W}px;height:${H}px;pointer-events:none;z-index:96`;
    document.body.appendChild(cv); const g = cv.getContext('2d'); g.scale(dpr, dpr);
    const B = [];
    for (let i = 0; i < 18; i++) {
      const big = Math.random() < .25;
      B.push({ x: padX + rc.width * (.05 + Math.random() * .9), y: padT + rc.height - 4, r0: big ? 6 + Math.random() * 4 : 2.5 + Math.random() * 3,
        vy: -(55 + Math.random() * 85), wob: Math.random() * 6, t0: 260 + Math.random() * 900, life: 700 + Math.random() * 800, pop: 0 });
    }
    const pops = [], t0 = performance.now(); let last = t0;
    (function frame(now) {
      const el = Math.max(0, now - t0), dt = Math.min(.04, (now - last) / 1000); last = now;
      g.clearRect(0, 0, W, H); let alive = el < 1400;
      for (const b of B) {
        if (el < b.t0) { alive = true; continue; }
        const age = el - b.t0; if (b.pop) continue;
        if (age > b.life) { b.pop = now; pops.push({ x: b.x, y: b.y, r: b.r, t: now }); continue; }
        alive = true; const q = age / b.life;
        b.r = b.r0 * (.35 + Math.min(1, q * 2) * .75); b.y += b.vy * dt; b.x += Math.sin(age / 170 + b.wob) * .4;
        const sq = 1 + .08 * Math.sin(age / 90 + b.wob); // wobble: slightly squashed
        g.save(); g.translate(b.x, b.y); g.scale(sq, 2 - sq);
        const gr = g.createRadialGradient(0, 0, b.r * .2, 0, 0, b.r);
        gr.addColorStop(0, 'rgba(170, 205, 70, .10)'); gr.addColorStop(.75, 'rgba(150, 190, 55, .28)'); gr.addColorStop(1, 'rgba(205, 235, 120, .55)');
        g.fillStyle = gr; g.beginPath(); g.arc(0, 0, b.r, 0, 7); g.fill();
        g.strokeStyle = 'rgba(214, 240, 140, .75)'; g.lineWidth = 1.1; g.stroke();
        g.fillStyle = 'rgba(255, 255, 235, .85)'; g.beginPath(); g.ellipse(-b.r * .38, -b.r * .42, b.r * .22, b.r * .14, -.6, 0, 7); g.fill();
        g.restore();
      }
      for (const s of pops) { // popped: a quick ring and a few droplets flung out
        const a = 1 - (now - s.t) / 300; if (a <= 0) continue; alive = true;
        const rr = s.r * (1 + (1 - a) * 1.6);
        g.globalAlpha = a; g.strokeStyle = 'rgba(205, 235, 120, .8)'; g.lineWidth = 1; g.beginPath(); g.arc(s.x, s.y, rr, 0, 7); g.stroke();
        g.fillStyle = '#a9c84a'; for (let k = 0; k < 4; k++) { const an = k * 1.7 + s.r; g.beginPath(); g.arc(s.x + Math.cos(an) * rr * 1.3, s.y + Math.sin(an) * rr * 1.3, 1.1, 0, 7); g.fill(); }
        g.globalAlpha = 1;
      }
      if (alive && el < 3000) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  }
  function patchPlague(r, flareId) {
    const p = playState(r), dets = r.detachmentIds.map(id => fdata(r.factionId).detachments.find(d => d.id === id)).filter(Boolean);
    const gift = fdata(r.factionId).armyRules.find(a => a.contagion), can = plagueCanPick(p, dets.some(d => d.plagueEachRound));
    document.querySelectorAll('.plg').forEach(c => {
      const on = p.plague === c.dataset.id;
      c.classList.toggle('on', on); c.setAttribute('aria-pressed', on);
      if (!can && !on) c.setAttribute('aria-disabled', 'true'); else c.removeAttribute('aria-disabled');
      c.querySelector('.plg-s').textContent = on ? 'Chosen' : can ? 'Choose' : 'Locked';
      if (c.dataset.id === flareId) { rotBubbles(c); c.classList.remove('flare'); void c.offsetWidth; c.classList.add('flare'); setTimeout(() => c.classList.remove('flare'), 1400); }
    });
    const b = document.getElementById('plg-badge'), cur = gift.plagues.find(x => x.id === p.plague);
    if (b) { b.textContent = cur ? cur.name : 'Pick before the battle'; b.classList.toggle('gold', !!cur); }
    const g = document.querySelector('.mstatus.game'); if (g) g.outerHTML = gameLine(r);
  }
  /* Thousand Sons: Cabal of Sorcerers. Dice stay at the table; the player records who attempted which Ritual and how it went. */
  function ritCasters(r, dets) {
    const ctx = Engine.ctxFor(r, DATA), ch = dets.some(d => d.id === 'changehost_of_deceit');
    return r.units.map(u => {
      const def = unitDef(r.factionId, u.datasheetId); if (!def) return null;
      if ((def.factionAbilities || []).some(a => a.startsWith('Cabal of Sorcerers'))) return { u, def, n: def.ritualsPerTurn || 1, bonus: def.ritualBonus || 0 };
      if (ch && def.faction !== fdata(r.factionId).armyFaction && Engine.hasKw(def, ctx, 'Psyker', u)) return { u, def, n: 1, bonus: 0, cond: true };
      return null;
    }).filter(Boolean);
  }
  function ritualHTML(r, p, cabal, dets) {
    const done = (p.rit || {})[p.round] || {}, casters = ritCasters(r, dets), mine = p.turn !== 'opp';
    const used = id => Object.values(done).filter(x => x.by === id).length;
    const now = mine && p.phase === 'Shooting', k = Object.keys(done).length;
    const cards = cabal.rituals.map((x, i) => {
      const d = done[x.id], open = S.ritOpen === x.id && !d, by = d && r.units.find(u => u.instanceId === d.by);
      const card = `<button class="rit ${d ? (d.ok ? 'ok' : 'ko') : ''} ${open ? 'open' : ''}" style="--d:-${(i * 1.3).toFixed(1)}s" data-act="tsRit" data-id="${x.id}" aria-expanded="${open}">
        <span class="rit-w num">${x.wc}<small>WC</small></span><span class="rit-t"><b>${esc(x.name)}</b>${by ? ` <span class="faint">· ${esc(dispName(r, by))}</span>` : ''}</span>
        <span class="rit-s">${d ? (d.ok ? 'Manifested' : 'Failed') : 'Attempt'}</span><span class="rit-e">${esc(x.effect)}</span><span class="rit-b">${esc(x.boost)}</span></button>`;
      if (!open) return card;
      const chips = casters.map(c => { const left = c.n - used(c.u.instanceId);
        return `<button class="chip ${c.cond ? 'cond' : ''}" aria-pressed="${S.ritBy === c.u.instanceId}" data-act="tsRitBy" data-id="${c.u.instanceId}" ${left <= 0 ? 'aria-disabled="true"' : ''}>${esc(dispName(r, c.u))}${c.bonus ? ` +${c.bonus}` : ''}${c.cond ? '*' : ''}${c.n > 1 ? ` (${left}/${c.n})` : ''}</button>`; }).join('');
      return card + `<div class="ritpick" role="group" aria-label="Who attempts ${esc(x.name)}"><div class="eyebrow">Who attempts ${esc(x.name)}? Needs ${x.wc}+</div>
        ${chips ? `<div class="chips">${chips}</div>` : '<div class="faint">No unit in this roster has Cabal of Sorcerers.</div>'}
        ${casters.some(c => c.cond) ? '<div class="faint" style="font-size:.82rem">* only while within 6″ of a friendly THOUSAND SONS unit (Mortal Sorcery).</div>' : ''}
        <div class="row"><button class="btn sm primary" data-act="tsRitRes" data-id="ok" ${S.ritBy ? '' : 'aria-disabled="true"'}>Manifested</button><button class="btn sm" data-act="tsRitRes" data-id="ko" ${S.ritBy ? '' : 'aria-disabled="true"'}>Failed</button><button class="btn sm" data-act="tsRitClose">Cancel</button></div></div>`;
    }).join('');
    const enh = [['incandaeum', 'Incandaeum: once per battle its bearer can attempt Doombolt even if it was already attempted.'], ['lord_of_forbidden_lore', 'Lord of Forbidden Lore: Rituals of the bearer get +6″ range.']]
      .filter(([id]) => r.units.some(u => Engine.enhIds(u).includes(id))).map(x => x[1]);
    return `<div class="panel pad stack rituals"><div class="row"><h3 class="grow">Cabal of Sorcerers</h3><span class="badge ${now ? 'gold' : ''}">${now ? 'Now · ' : ''}Round ${p.round} · ${k}/${cabal.rituals.length}</span></div>
      <div class="dim" style="font-size:.9rem">Start of your Shooting phase. Roll the Psychic test at the table, then record it here. Each model and each Ritual once per turn.</div>
      <div class="rit-list">${cards}</div>
      <div class="faint" style="font-size:.85rem">Channelled the Warp and rolled a double or triple: the caster's unit suffers D3 mortal wounds before the Ritual resolves.</div>
      ${enh.map(t => `<div class="faint" style="font-size:.85rem">${esc(t)}</div>`).join('')}</div>`;
  }
  /* a manifested Ritual: two rune rings spin out from the Warp Charge seal while blue and pink warpfire rises through the card */
  function warpfire(card) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fx = document.createElement('span'); fx.className = 'wfx'; fx.setAttribute('aria-hidden', 'true');
    const C = ['#e48cff', '#5fd8ee', '#9fe9ff'], R = (a, b) => a + Math.random() * (b - a);
    fx.innerHTML = '<span class="rune"></span><span class="rune"></span>' + Array.from({ length: 18 }, (_, i) =>
      `<i style="left:${R(3, 95).toFixed(1)}%;--c:${C[i % 3]};--x:${R(-22, 22).toFixed(0)}px;--r:${R(-40, 40).toFixed(0)}deg;--t:${R(.9, 1.7).toFixed(2)}s;--dl:${R(0, .55).toFixed(2)}s"></i>`).join('');
    card.appendChild(fx); setTimeout(() => fx.remove(), 2400);
    if (PL.android) setTimeout(() => PL.haptic('confirm'), 150);
  }
  /* Grand Coven: Kindred Sorcery cards. The active one carries a slowly turning sigil behind the text. */
  function kinHTML(p, d) {
    const now = (p.imp || {})[p.round], usedIn = id => Object.entries(p.imp || {}).find(([rd, v]) => v === id && +rd !== p.round), cur = d.imperatives.find(i => i.id === now);
    const cards = d.imperatives.map((k, i) => { const u = usedIn(k.id), on = now === k.id;
      return `<button class="kin ${on ? 'on' : ''}" style="--d:-${(i * 1.7).toFixed(1)}s" data-act="tsKin" data-id="${k.id}" aria-pressed="${on}" ${u ? 'aria-disabled="true"' : ''}><span class="kin-sig" aria-hidden="true"></span>
        <span class="kin-t"><b>${esc(k.name)}</b></span><span class="kin-s">${u ? `Used · R${u[0]}` : on ? 'Active' : 'Pick'}</span><span class="kin-e">${esc(k.effect)}</span></button>`; }).join('');
    return `<div class="panel pad stack kindred"><div class="row"><h3 class="grow">${esc(d.impTitle)}</h3>${cur ? `<span class="badge gold">Round ${p.round}: ${esc(cur.name)}</span>` : `<span class="badge">Round ${p.round}: none</span>`}</div>
      <div class="kin-list">${cards}</div><div class="faint" style="font-size:.85rem">${esc(d.impNote || '')}</div></div>`;
  }
  /* picking a Kindred Sorcery: a golden sigil draws itself over the card, flashes and dissolves into rising motes */
  function sigilFx(card) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fx = document.createElement('span'); fx.className = 'sfx'; fx.setAttribute('aria-hidden', 'true');
    const R = (a, b) => a + Math.random() * (b - a), rays = Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4, c = Math.cos(a), s = Math.sin(a); return `M${(50 + c * 17).toFixed(1)} ${(50 + s * 17).toFixed(1)}L${(50 + c * 40).toFixed(1)} ${(50 + s * 40).toFixed(1)}`; }).join('');
    fx.innerHTML = `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" pathLength="1"/><circle cx="50" cy="50" r="11" pathLength="1"/><path d="${rays}" pathLength="1"/></svg>`
      + Array.from({ length: 12 }, () => `<i style="left:${R(10, 90).toFixed(0)}%;--x:${R(-14, 14).toFixed(0)}px;--t:${R(1, 1.6).toFixed(2)}s;--dl:${R(.35, .8).toFixed(2)}s"></i>`).join('');
    card.appendChild(fx); setTimeout(() => fx.remove(), 2600);
    if (PL.android) setTimeout(() => PL.haptic('confirm'), 200);
  }
  /* install the newest build: the service worker swaps itself and reloads; if it does not, drop the offline cache and reload from the site */
  async function doPwaUpdate() {
    toast('Updating…');
    try {
      const r = window.__scSW || (navigator.serviceWorker && await navigator.serviceWorker.getRegistration());
      if (r) await r.update();
      await new Promise(res => setTimeout(res, 2500));
      try { sessionStorage.setItem('scUpdated', '1'); } catch (e) { }
      if (r && (r.installing || r.waiting)) return;
      if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); }
      if (r) await r.unregister();
    } catch (e) { }
    location.reload();
  }
  function factionPlayHTML(r, p) {
    const fd = fdata(r.factionId), dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id)).filter(Boolean);
    const out = [];
    const panel = (title, badge, body) => `<div class="panel pad stack trk"><div class="row"><h3 class="grow">${esc(title)}</h3>${badge || ''}</div>${body}</div>`;
    if (fd.armyRules.some(a => a.shadow)) {
      const has = r.units.some(u => (unitDef(r.factionId, u.datasheetId).factionAbilities || []).some(a => a.startsWith('Shadow in the Warp')));
      const ready = has && !p.shadow && p.phase === 'Command';
      out.push(panel('Shadow in the Warp', p.shadow ? `<span class="badge">Unleashed · round ${p.shadow}</span>` : '<span class="badge gold">Ready</span>',
        `<div class="dim">Once per battle, in either player's Command phase: every enemy unit takes a battle-shock test, at -1 within 6" of your SYNAPSE units.</div>
        <div class="voidwrap"><button class="voidbtn ${p.shadow ? 'used' : ''} ${S.shadowFx ? 'scream' : ''}" data-act="tyrShadow" ${p.shadow || !ready ? 'aria-disabled="true"' : ''}>${p.shadow ? `Unleashed in round ${p.shadow}` : 'Unleash the Shadow in the Warp'}</button></div>
        ${has ? (p.shadow || p.phase === 'Command' ? '' : '<div class="faint" style="font-size:.85rem">Available in a Command phase.</div>') : '<div class="faint" style="font-size:.85rem">No unit in this roster has Shadow in the Warp.</div>'}`));
    }
    const gift = fd.armyRules.find(a => a.contagion);
    if (gift) out.push(contagionHTML(r, p, gift, dets), plagueHTML(r, p, gift, dets));
    const cabal = fd.armyRules.find(a => a.rituals);
    if (cabal) out.push(ritualHTML(r, p, cabal, dets));
    dets.forEach(d => {
      if (d.numberlessHorde) {
        const rounds = d.numberlessHorde[r.battleSize] || d.numberlessHorde.strike, done = p.pox || {};
        const nowR = rounds.includes(p.round) && p.turn !== 'opp' && p.phase === 'Command' && !done[p.round];
        out.push(panel('Numberless Horde', nowR ? '<span class="badge gold">Now</span>' : `<span class="badge">${Object.keys(done).length}/${rounds.length} added</span>`,
          `<div class="dim">In your Command phase of these battle rounds, add a new POXWALKERS unit (10 models) to Strategic Reserves.</div>
          <div class="chips" role="group" aria-label="Poxwalkers reinforcements by battle round">${rounds.map(rd => `<button class="chip pox ${rd === p.round ? 'cur' : ''}" aria-pressed="${!!done[rd]}" data-act="dgPox" data-id="${rd}" ${rd > p.round ? 'aria-disabled="true"' : ''}>Round ${rd}${done[rd] ? ' ✓' : ''}</button>`).join('')}</div>
          <div class="faint" style="font-size:.85rem">Tap the round once the new unit is in Strategic Reserves.</div>`));
      }
      if (d.persistentPests) {
        const has = r.units.some(u => u.datasheetId === 'nurglings');
        out.push(panel('Persistent Pests', p.pests ? `<span class="badge">Used · round ${p.pests}</span>` : '<span class="badge gold">Ready</span>',
          `<div class="dim">Once per battle (1CP): when a NURGLINGS unit is destroyed, add an identical new unit at full strength to Strategic Reserves.</div>
          <div class="row"><button class="btn sm ${p.pests ? '' : 'primary'}" data-act="dgPests">${p.pests ? 'Undo' : 'Mark as used'}</button>${has ? '' : '<span class="faint" style="font-size:.85rem">No NURGLINGS in this roster.</span>'}</div>`));
      }
      if (d.deadlyVectors) {
        const nowV = p.turn === 'opp' && p.phase === 'Command';
        out.push(panel('Deadly Vectors', nowV ? '<span class="badge gold">Now</span>' : '<span class="badge">Opponent\'s Command phase</span>',
          `<div class="dim">Roll 2D6 for each Afflicted enemy unit (-1 if it is Below Half-strength). On 6 or less it suffers D3 mortal wounds.</div>`));
      }
      if (d.hyperAdaptations) {
        const H = d.hyperAdaptations, cur = H.find(h => h.id === p.hyper), x = p.hyperExtra && H.find(h => h.id === p.hyperExtra.id);
        out.push(panel('Hyper-adaptation', cur ? `<span class="badge gold">${esc(cur.name)}</span>` : '<span class="badge">Pick at the start of round 1</span>',
          `<div class="chips" role="group" aria-label="Hyper-adaptation for the battle">${H.map(h => `<button class="chip" aria-pressed="${p.hyper === h.id}" data-act="tyrHyper" data-id="${h.id}" ${p.hyper && p.hyper !== h.id && p.round > 1 ? 'aria-disabled="true"' : ''}>${esc(h.name)}</button>`).join('')}</div>
          ${cur ? `<div class="dim">${esc(cur.effect)} Active for your TYRANIDS units for the whole battle.</div>` : '<div class="dim">Choose one; it stays active for the rest of the battle.</div>'}
          ${cur ? `<div class="eyebrow" style="margin-top:4px">Predatory Imperative (extra, until your next Command phase)</div><div class="chips" role="group" aria-label="Extra Hyper-adaptation">${H.filter(h => h.id !== p.hyper).map(h => `<button class="chip" aria-pressed="${!!x && x.id === h.id}" data-act="tyrHyperX" data-id="${h.id}">${esc(h.name)}</button>`).join('')}</div>${x ? `<div class="dim">${esc(x.effect)} For the units you targeted with the Stratagem.</div>` : '<div class="faint" style="font-size:.85rem">Mark it after you use the Predatory Imperative Stratagem.</div>'}` : ''}`));
      }
      if (d.imperatives && d.impTitle) { out.push(kinHTML(p, d)); return; }
      if (d.imperatives) {
        const now = (p.imp || {})[p.round], usedIn = id => Object.entries(p.imp || {}).find(([rd, v]) => v === id && +rd !== p.round);
        const curI = d.imperatives.find(i => i.id === now);
        out.push(panel(d.impTitle || 'Synaptic Imperative', curI ? `<span class="badge gold">Round ${p.round}: ${esc(curI.name)}</span>` : `<span class="badge">Round ${p.round}: none</span>`,
          `<div class="stack" style="gap:6px">${d.imperatives.map(i => { const u = usedIn(i.id); return `<div class="blessing ${now === i.id ? 'active' : u ? '' : 'can'}"><div><b>${esc(i.name)}</b><div class="dim">${esc(i.effect)}</div></div>${u ? `<span class="badge">Used · round ${u[0]}</span>` : `<button class="btn sm ${now === i.id ? '' : 'primary'}" data-act="tyrImp" data-id="${i.id}">${now === i.id ? 'Active ✓' : 'Pick'}</button>`}</div>`; }).join('')}</div>
          <div class="faint" style="font-size:.85rem">${esc(d.impNote || 'Pick at the start of each battle round; each one only once per battle. Units within Synapse Range benefit.')}</div>`));
      }
      if (d.tunnelMarkers) {
        out.push(panel('Tunnel Markers', '', `<div class="row"><div class="stepper" role="group" aria-label="Tunnel Markers"><button data-act="pc" data-k="tunnels" data-d="-1" aria-label="Remove a Tunnel Marker">−</button><output class="num" style="font-size:1.2rem;font-weight:800">${p.tunnels || 0}</output><button data-act="pc" data-k="tunnels" data-d="1" aria-label="Place a Tunnel Marker">+</button></div><span class="dim">on the battlefield</span></div>
          <div class="faint" style="font-size:.85rem">Place one when a BURROWER unit arrives from Reserves. Remove it when an enemy model (not AIRCRAFT) ends a move within 3".</div>`));
      }
      if (d.protean) {
        const norns = r.units.filter(u => d.protean.includes(u.datasheetId));
        if (norns.length) out.push(panel('Protean Purpose', '', `<div class="stack" style="gap:6px">${norns.map(u => { const used = (p.protean || {})[u.instanceId]; return `<div class="blessing ${used ? '' : 'can'}"><div><b>${esc(dispName(r, u))}</b><div class="dim">Your Command phase: make a new Singular Purpose selection.</div></div>${used ? `<button class="btn sm" data-act="tyrProtean" data-id="${u.instanceId}">Used · round ${used}</button>` : `<button class="btn sm primary" data-act="tyrProtean" data-id="${u.instanceId}">Use</button>`}</div>`; }).join('')}</div><div class="faint" style="font-size:.85rem">Once per battle for each Norn.</div>`));
      }
      if (d.harvesterReminder) {
        const ctx = Engine.ctxFor(r, DATA);
        const hs = r.units.filter(u => Engine.hasKw(unitDef(r.factionId, u.datasheetId), ctx, 'Harvester'));
        const nowCmd = p.phase === 'Command' && p.turn !== 'opp';
        out.push(panel('Feed the Swarm', nowCmd ? '<span class="badge gold">Now</span>' : '', `<div class="dim">In your Command phase each HARVESTER unit can Regenerate one friendly TYRANIDS unit within 6": one model regains up to D3+1 wounds, or one destroyed INFANTRY model returns (up to 3 for ENDLESS MULTITUDE).</div>
          <div class="${hs.length ? '' : 'faint'}" style="font-size:.9rem">${hs.length ? 'Harvesters: ' + esc(hs.map(u => dispName(r, u)).join(', ')) : 'No HARVESTER units in this roster.'}</div>`));
      }
    });
    return out.join('');
  }
  function roundHint(r, p) {
    const fd = fdata(r.factionId), dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id)).filter(Boolean);
    const startOfRound = p.turn === (p.first || 'mine');
    if (fd.armyRules.some(a => a.blessings)) return startOfRound && !(p.active || []).length ? ' Roll and pick Blessings of Khorne.' : '';
    const h = [];
    if (fd.armyRules.some(a => a.contagion)) {
      const c = fd.armyRules.find(a => a.contagion).contagion;
      if (startOfRound && p.round <= c.byRound.length && p.round > 1) h.push(` Contagion Range is now ${c.byRound[p.round - 1]}″.`);
      if (!p.plague) h.push(' Pick a Plague.');
      else if (startOfRound && dets.some(d => d.plagueEachRound) && (p.plagueAt || 0) < p.round) h.push(' You can change the Plague.');
      const nh = dets.find(d => d.numberlessHorde);
      if (nh && p.turn !== 'opp' && (nh.numberlessHorde[r.battleSize] || []).includes(p.round) && !(p.pox || {})[p.round]) h.push(' Add 10 Poxwalkers to Strategic Reserves.');
      if (p.turn === 'opp' && dets.some(d => d.deadlyVectors)) h.push(' Deadly Vectors: roll for Afflicted enemy units.');
    }
    const impD = dets.find(d => d.imperatives);
    if (impD && !(p.imp || {})[p.round] && (impD.impTitle ? p.turn !== 'opp' && p.phase === 'Command' : startOfRound)) h.push(` Pick ${impD.impTitle || 'a Synaptic Imperative'}.`);
    if (p.round === 1 && dets.some(d => d.hyperAdaptations) && !p.hyper) h.push(' Pick a Hyper-adaptation.');
    if (p.turn !== 'opp' && dets.some(d => d.harvesterReminder)) h.push(' Feed the Swarm.');
    if (!p.shadow && fd.armyRules.some(a => a.shadow)) h.push(' Shadow in the Warp is ready.');
    return h.join('');
  }
  /* The scream of the Shadow in the Warp: wavy psychic rings spread over the whole screen from the button,
     a dark pulse beats twice along the screen edges and the page trembles. About 3 seconds; transform/opacity only. */
  function voidScream(x, y) {
    const wavy = (k, amp, seed) => { let d = ''; for (let i = 0; i <= 120; i++) { const a = i / 120 * Math.PI * 2, rr = 50 + amp * Math.sin(k * a + seed) + amp * .45 * Math.sin((k + 3) * a - seed * 1.7); d += (i ? 'L' : 'M') + (60 + rr * Math.cos(a)).toFixed(2) + ' ' + (60 + rr * Math.sin(a)).toFixed(2); } return d + 'Z'; };
    const fx = document.createElement('div'); fx.className = 'voidfx'; fx.style.setProperty('--x', x + 'px'); fx.style.setProperty('--y', y + 'px');
    const rings = [[7, 4.5, .3, 0], [11, 3.5, 1.9, .28], [9, 5, 3.1, .56], [13, 3, 4.4, .84], [8, 4, 5.6, 1.15]];
    fx.innerHTML = '<div class="voidpulse"></div>' + rings.map(([k, a, sd, delay], i) => `<svg class="vring" viewBox="0 0 120 120" style="--dl:${delay}s;--rot:${i % 2 ? -1 : 1}"><path d="${wavy(k, a, sd)}"/></svg>`).join('');
    document.body.appendChild(fx);
    // the cards tremble (not <main>: a transform there would move the fixed bars inside it)
    const cards = document.querySelectorAll('main .panel, main .pcard, main .ucard'); cards.forEach(c => c.classList.add('quake')); setTimeout(() => cards.forEach(c => c.classList.remove('quake')), 1000);
    setTimeout(() => fx.remove(), 3300);
  }
  function overHTML(p) {
    if (!p.over) return '';
    const [a, b] = p.vp, res = a > b ? 'Victory' : a < b ? 'Defeat' : 'Draw';
    return `<div class="panel pad gameover stack" role="status"><div class="row"><span class="eyebrow grow">Game over · after battle round 5</span><b class="go-res ${res.toLowerCase()}">${res}</b></div>
      <div class="go-vp num"><span>You <b>${a}</b></span><span class="dim">:</span><span><b>${b}</b> Opponent</span></div>
      ${msOverHTML(p)}<div class="row"><button class="btn" data-act="resumeGame">${ICON.undo} Back to round 5</button><button class="btn danger" data-act="resetGameAsk">Reset game…</button></div></div>`;
  }
  /* ---------------- MISSIONS (Chapter Approved 2026-27) ----------------
     p.ms keeps the mission set-up, the Secondary deck/hand and a log of every scoring (raw VP);
     the shown VP always come from Missions.tally (caps applied in order). Opponent VP stays a plain counter. */
  const MX = Missions;
  const WIN_LABEL = { cmd: 'end of your Command phase', eot: 'end of your turn', opp: "end of the opponent's turn", eob: 'end of the battle' };
  const msCard = (src, id) => (src === 'P' ? MX.P : MX.S)[id];
  const msKey = (src, card, line, round, w) => `${src}|${card}|${line}|${w === 'eob' ? 'eob' : round + '|' + w}`;
  function msSync(p) { if (p.ms) p.vp[0] = MX.tally(p.ms).total; }
  function unitAlive(r, p, id) {
    const u = r.units.find(x => x.instanceId === id); if (!u) return false;
    const def = unitDef(r.factionId, u.datasheetId); if (!def) return false;
    return woundsOf(p, u, parseInt(def.profile.W, 10) || 1, def).some(w => w > 0);
  }
  function rosterDisps(r) {
    const fd = fdata(r.factionId);
    const ds = [...new Set((r.detachmentIds || []).flatMap(id => { const d = fd.detachments.find(x => x.id === id); return d ? Engine.dispositionsOf(d) : []; }))];
    return ds.length ? ds : MX.DISPS.slice();
  }
  const chipLbl = (ln, n) => `${n}${n === ln.max && ln.max * ln.per >= 15 ? '+' : ''}`;
  /* "1 unit", "2 units", "3+ objectives" */
  const nounLbl = (ln, n) => `${chipLbl(ln, n)}${ln.u ? ' ' + (n === 1 && chipLbl(ln, n) === '1' ? ln.u[0] : ln.u[1]) : ''}`;
  /* one scoring line: either "scored" (tap to undo) or its options in the card's own breakpoints */
  function msLine(src, card, ln, p, w, showTiming) {
    const ms = p.ms, key = msKey(src, card, ln.id, p.round, w), done = ms.log.find(e => e.key === key);
    const lbl = `<span class="ml-l">${esc(ln.l)}${showTiming ? `<span class="faint ml-t"> · ${esc(MX.timingLabel(ln))}</span>` : ''}</span>`;
    const base = `data-src="${src}" data-card="${card}" data-line="${ln.id}" data-w="${w}"`;
    if (done) {
      const ap = (MX.tally(ms).entries.find(e => e.key === key) || {}).applied;
      return `<div class="mline done">${lbl}<button class="chip on" data-act="msUnscore" data-key="${esc(key)}" aria-label="Scored ${done.raw} VP, tap to undo">✓ +${ap}${ap < done.raw ? ` <s class="faint">${done.raw}</s>` : ''} <span aria-hidden="true">↶</span></button></div>`;
    }
    const now = (v, l) => `<button class="chip" data-act="msScore" ${base} data-v="${esc(JSON.stringify(v))}">${l}</button>`;
    let ctl = '';
    if (ln.k === 'bool' && !ln.x) ctl = now({}, `+${ln.vp} VP`);
    else if (ln.k === 'or') ctl = ln.opts.map((o, i) => now({ o: i }, `${esc(o.l)} · ${o.vp} VP`)).join('');
    else if (ln.k === 'count' && !ln.x && !MX.isStepper(ln)) ctl = Array.from({ length: ln.max }, (_, i) => now({ n: i + 1 }, `${esc(nounLbl(ln, i + 1))} · ${(i + 1) * ln.per} VP`)).join('');
    else {
      const v = S.mpend[key] || (S.mpend[key] = { n: ln.k === 'count' ? 1 : 0, m: 0, f: false });
      const pend = (f, val, l, on) => `<button class="chip" aria-pressed="${!!on}" data-act="msPend" data-key="${esc(key)}" data-f="${f}" data-val="${val}">${l}</button>`;
      if (ln.k === 'count') ctl += MX.isStepper(ln) ? `<span class="stepper sm"><button data-act="msPend" data-key="${esc(key)}" data-f="n" data-val="${Math.max(1, v.n - 1)}" aria-label="Fewer">−</button><output class="num">${v.n}</output><button data-act="msPend" data-key="${esc(key)}" data-f="n" data-val="${Math.min(ln.max, v.n + 1)}" aria-label="More">+</button></span><span class="dim">${esc(ln.u ? ln.u[v.n === 1 ? 0 : 1] : '')} · ${v.n * ln.per} VP</span>`
        : Array.from({ length: ln.max }, (_, i) => pend('n', i + 1, esc(nounLbl(ln, i + 1)), v.n === i + 1)).join('');
      let xs = '';
      if (ln.x) {
        if (ln.x.k === 'bool') xs = pend('f', v.f ? 0 : 1, esc(ln.x.l), v.f);
        else { const mx = ln.x.max === 'n' ? v.n : ln.x.max; if (v.m > mx) v.m = mx; xs = `<span class="faint ml-x">${esc(ln.x.l)}</span>` + Array.from({ length: mx + 1 }, (_, i) => pend('m', i, i, v.m === i)).join(''); }
      }
      const vp = MX.lineVp(ln, v);
      ctl += (xs ? `<span class="mline-x">${xs}</span>` : '') + `<button class="btn sm primary" data-act="msScore" ${base} data-pend="${esc(key)}">Score +${vp} VP</button>`;
    }
    return `<div class="mline">${lbl}<div class="ml-c">${ctl}</div></div>`;
  }
  /* lines of a card for the current moment (or all of this round with "All timings") */
  function msLinesFor(src, id, p, win) {
    const ms = p.ms, card = msCard(src, id), mode = src === 'S' ? ms.secMode : null;
    const ls = MX.linesOf(card, mode);
    if (S.msAll) return ls.filter(ln => ln.t === 'eob' ? p.round === 5 : MX.inRound(ln, p.round)).map(ln => msLine(src, id, ln, p, ln.t === 'eat' ? (win === 'opp' ? 'opp' : 'eot') : MX.lineWindow(ln, p.round), true)).join('');
    const open = win ? ls.filter(ln => MX.lineOpen(ln, win, p.round)) : [];
    if (open.length) return open.map(ln => msLine(src, id, ln, p, win)).join('');
    const next = [...new Set(ls.filter(ln => ln.t === 'eob' || MX.inRound(ln, p.round)).map(ln => MX.TIMING[ln.t]))];
    return `<div class="faint ml-next">${next.length ? 'Scores: ' + esc(next.join(' · ')) : 'Nothing to score this round.'}</div>`;
  }
  function msWdHTML(r, p, h, i) {
    const k = h.wd, name = MX.S[h.id].name;
    if (!k) return '';
    const b = (act, l, cls) => `<button class="btn sm ${cls || ''}" data-act="${act}" data-i="${i}">${l}</button>`;
    let body = '';
    if (k === 'must') body = `<span>${esc(MX.wdText(h.id))}</span>` + b('msWdBack', 'Shuffle back · draw another', 'primary');
    else if (k === 'may') body = `<span>${esc(MX.wdText(h.id))}</span>` + b('msWdBack', 'Shuffle back · draw another') + b('msWdKeep', 'Keep it');
    else if (k === 'ask') body = `<span>${esc(MX.wdText(h.id))}</span>` + b('msWdDiscard', 'Discard · draw another') + b('msWdKeep', 'Keep it');
    else if (k === 'beacon') body = `<span>${esc(MX.wdText(h.id))}</span>` + b('msBeaconAsk', 'Pick beacon unit', 'primary');
    else if (k === 'note') body = `<span>${esc(MX.wdText(h.id))}</span>` + b('msWdKeep', 'OK');
    return `<div class="mwd" role="group" aria-label="When drawn: ${esc(name)}"><b class="eyebrow">When drawn</b>${body}</div>`;
  }
  function msSecHTML(r, p, win) {
    const ms = p.ms, t = MX.tally(ms), tac = ms.secMode === 'tactical';
    const top = [];
    if (tac && win === 'cmd') {
      const left = Math.min(2 - (ms.drawn[p.round] || 0), ms.deck.length);
      if (left > 0) top.push(ms.deckMode === 'real' ? `<button class="btn sm primary" data-act="msPickAsk">I drew… (${left})</button>` : `<button class="btn sm primary" data-act="msDraw">Draw ${left}</button>`);
      if (!ms.swapUsed && ms.hand.length && !left && !ms.hand.some(h => h.wd && h.wd !== 'note')) top.push(`<button class="btn sm" data-act="msSwapAsk">New card · 1CP</button>`);
    }
    const cards = ms.hand.map((h, i) => {
      const c = MX.S[h.id], wdPend = h.wd && h.wd !== 'note' ? true : false;
      let extra = '';
      if (h.id === 'beacon' && h.beacon) { const u = r.units.find(x => x.instanceId === h.beacon); extra = `<div class="faint ml-next">Beacon: ${u ? esc(dispName(r, u)) : '—'}${unitAlive(r, p, h.beacon) ? '' : ' · <span class="bad">destroyed: it cannot be achieved, discard it</span>'}</div>`; }
      const disc = tac && win === 'eot' && !wdPend ? `<div class="row"><button class="btn sm ghost" data-act="msDiscard" data-i="${i}">${ICON.trash} Discard${ms.cpTurn === p.round ? '' : ' · +1CP'}</button></div>` : '';
      const st = c.start && win === 'cmd' && !h.wd ? `<div class="faint ml-next">${esc(c.start)}</div>` : '';
      return `<div class="mcard"><div class="row nowrap"><button class="mname grow" data-act="msInfo" data-k="S" data-id="${h.id}">${esc(c.name)} <span class="faint" aria-hidden="true">ⓘ</span></button>${!tac ? `<span class="badge ${t.fixed[h.id] >= 20 ? 'gold' : ''} num">${t.fixed[h.id] || 0}/20</span>` : ''}</div>
        ${msWdHTML(r, p, h, i)}${extra}${st}${wdPend ? '' : msLinesFor('S', h.id, p, win)}${disc}</div>`;
    }).join('');
    const empty = tac && !ms.hand.length ? `<div class="faint ml-next">${win === 'cmd' ? '' : 'You draw two cards at the start of your Command phase.'}</div>` : '';
    return `<div class="msec"><div class="row"><span class="eyebrow grow">Secondary · ${tac ? 'Tactical' : 'Fixed'}${tac ? ` · deck ${ms.deck.length}` : ''}</span>${top.join('')}</div>${cards}${empty}
      ${tac && win === 'eot' && ms.hand.length ? `<div class="faint" style="font-size:.82rem">Discarding unachieved cards now gives 1CP in total${ms.event ? ' (event: max 1 extra CP per battle round)' : ''}.</div>` : ''}</div>`;
  }
  function missionsHTML(r, p) {
    if (!p.ms) {
      if (p.msSkip) return `<div class="row mskip"><span class="faint grow">Missions are off: VP counted by hand.</span><button class="btn sm" data-act="msSetup">Set up missions</button></div>`;
      return `<div class="panel pad stack mpanel"><div class="row"><h3 class="grow">Missions</h3></div>
        <div class="dim" style="font-size:.92rem">Your Primary Mission from both Force Dispositions, Secondary Missions and your VP with the official caps.</div>
        <div class="row"><button class="btn primary" data-act="msSetup">Set up missions</button><button class="btn ghost" data-act="msSkip">Count VP by hand</button></div></div>`;
    }
    const ms = p.ms, t = MX.tally(ms), win = MX.windowOf(p), pr = MX.primaries(ms), pc = MX.P[pr.mine];
    const rp = t.round.P[p.round] || 0, rs = t.round.S[p.round] || 0;
    const head = `<div class="row nowrap mhead"><button class="mtitle grow" data-act="msCollapse" aria-expanded="${!S.msCollapsed}"><h3>Missions</h3><span class="faint num">R${p.round} · P ${rp}/15 · S ${rs}/15</span></button><button class="badge gold num mvpb" data-act="msVp" aria-label="VP details">VP ${t.total}</button></div>`;
    if (S.msCollapsed) return `<div class="panel pad mpanel">${head}</div>`;
    const tw = ms.twist ? MX.TWISTS.find(x => x.id === ms.twist) : null;
    const winLine = p.over ? '' : `<div class="mwin ${win ? 'on' : ''}">${win ? `Scoring now: <b>${WIN_LABEL[win]}</b>` : 'Missions score at the end of your Command phase and at the end of each turn (Fight phase).'}</div>`;
    const prim = p.over ? '' : `<div class="mcard prim"><div class="row nowrap"><button class="mname grow" data-act="msInfo" data-k="P" data-id="${pr.mine}">${esc(pc.name)} <span class="faint" aria-hidden="true">ⓘ</span></button><span class="faint mvs">vs ${esc(MX.DSHORT[ms.oppDisp])}</span></div>
      ${pc.start && win === 'cmd' && (!pc.startR1 || p.round === 1) ? `<div class="mwd"><b class="eyebrow">Start of your turn</b><span>${esc(pc.start)}</span></div>` : ''}${msLinesFor('P', pr.mine, p, win)}</div>`;
    return `<div class="panel pad stack mpanel">${head}${winLine}
      ${tw ? `<button class="badge mtwist" data-act="tip" data-title="${esc(tw.name)}" data-tip="${esc(tw.name + ': ' + tw.text)}">Twist: ${esc(tw.name)}</button>` : ''}
      ${prim}${p.over ? '<div class="faint">The game is over: end of battle scoring is in the result panel above.</div>' : msSecHTML(r, p, win)}
      <div class="row">${p.over ? '' : `<button class="chip" aria-pressed="${!!S.msAll}" data-act="msAllT">Missed a scoring? Show all of this round</button>`}<span class="grow"></span><button class="btn sm ghost" data-act="msVp">VP details</button></div></div>`;
  }
  /* end-of-battle scoring inside the Game over banner */
  function msOverHTML(p) {
    const ms = p.ms; if (!ms) return '';
    const pr = MX.primaries(ms), pc = MX.P[pr.mine], t = MX.tally(ms);
    const eob = pc.lines.filter(ln => ln.t === 'eob');
    return `${eob.length ? `<div class="mcard prim"><div class="eyebrow">End of the battle · ${esc(pc.name)}</div>${eob.map(ln => msLine('P', pr.mine, ln, p, 'eob')).join('')}</div>` : ''}
      <div class="faint num">Primary ${t.P}/45 · Secondary ${t.S}/45${t.battleReady ? ' · Battle Ready 10' : ''}</div>`;
  }
  const msTile = p => { const t = MX.tally(p.ms); return `<button class="panel counter mvptile" data-act="msVp"><div class="eyebrow">Your VP</div><span class="val num">${t.total}</span><span class="faint num">P ${t.P} · S ${t.S}${t.battleReady ? ' · +10' : ''}</span></button>`; };
  const vpTile = p => p.ms ? msTile(p) : counterHTML('Your VP', 'vp0', p.vp[0]);

  /* ---- sheets ---- */
  function msSetupInner(r) {
    const d = S.msd, chips = (act, list, cur, lab) => `<div class="chips">${list.map(x => `<button class="chip" aria-pressed="${cur === x}" data-act="${act}" data-id="${esc(x)}">${esc(lab ? lab(x) : x)}</button>`).join('')}</div>`;
    const tog = (k, l) => `<button class="chip" aria-pressed="${!!d[k]}" data-act="msdTog" data-id="${k}">${l}</button>`;
    const pr = d.oppDisp ? MX.primaries(d) : null;
    let out = `<div class="eyebrow">Your Force Disposition</div>${chips('msdMy', rosterDisps(r), d.myDisp)}
      <div class="eyebrow">Opponent's Force Disposition</div>${chips('msdOpp', MX.DISPS, d.oppDisp)}`;
    if (pr && pr.mine) out += `<div class="panel pad mresult"><div class="eyebrow">Your Primary Mission</div><b class="mres-n">${esc(MX.P[pr.mine].name)}</b><div class="dim">${esc(MX.P[pr.mine].sum)}</div><div class="faint" style="margin-top:4px">Opponent: ${esc(MX.P[pr.theirs].name)}</div></div>`;
    if (!d.event) {
      out += `<div class="row">${tog('twistOn', 'Use a Twist')}<span class="faint" style="font-size:.85rem">Optional, both players agree</span></div>`;
      if (d.twistOn) {
        out += chips('msdTwist', MX.TWISTS.map(x => x.id), d.twist, id => MX.TWISTS.find(x => x.id === id).name);
        if (d.twist === 'mirrored_world') out += `<div class="faint">Both players use:</div>` + chips('msdMirror', MX.MIRRORED, d.mirror, id => MX.P[id].name);
        if (d.twist) out += `<div class="faint" style="font-size:.88rem">${esc(MX.TWISTS.find(x => x.id === d.twist).text)}</div>`;
      }
      out += `<div class="eyebrow">Deployment (optional)</div><div class="chips"><button class="chip" aria-pressed="${!d.deploy}" data-act="msdDeploy" data-id="">None</button>${MX.DEPLOYMENTS.map(x => `<button class="chip" aria-pressed="${d.deploy === x}" data-act="msdDeploy" data-id="${esc(x)}">${esc(x)}</button>`).join('')}<button class="chip" data-act="msdDeployDraw">${ICON.dice} Draw</button></div>`;
    }
    out += `<div class="eyebrow">Secondary Missions</div><div class="seg wide" role="group"><button aria-pressed="${d.secMode === 'tactical'}" data-act="msdSec" data-id="tactical">Tactical</button><button aria-pressed="${d.secMode === 'fixed'}" data-act="msdSec" data-id="fixed">Fixed</button></div>`;
    if (d.secMode === 'tactical') out += `<div class="seg wide" role="group" aria-label="Secondary deck"><button aria-pressed="${d.deckMode !== 'real'}" data-act="msdDeck" data-id="app">App draws the cards</button><button aria-pressed="${d.deckMode === 'real'}" data-act="msdDeck" data-id="real">I draw real cards</button></div>`;
    else out += `<div class="faint" style="font-size:.88rem">Pick two. Each Fixed card can give up to 20 VP.</div><div class="picklist">${MX.FIXED_IDS.map(id => `<button class="pickrow" aria-pressed="${d.fixed.includes(id)}" data-act="msdFixed" data-id="${id}"><b>${esc(MX.S[id].name)}</b><span class="dim">${esc(MX.S[id].sum)}</span></button>`).join('')}</div>`;
    out += `<div class="chips">${tog('painted', 'Battle Ready army · +10 VP')}${tog('event', 'Event rules')}</div>`;
    if (d.event) out += `<div class="faint" style="font-size:.85rem">Event Companion: no Deployment or Twist cards, max 1 extra CP per battle round (Core CP excluded).</div>`;
    const ok = d.myDisp && d.oppDisp && (d.secMode === 'tactical' || d.fixed.length === 2) && !(d.twistOn && d.twist === 'mirrored_world' && !d.mirror);
    out += `<div class="row sheet-btns"><button class="btn" data-act="closeSheet">Cancel</button><button class="btn primary" data-act="msStart" ${ok ? '' : 'disabled'}>${S.play && S.play.ms ? 'Restart missions' : 'Start'}</button></div>`;
    return `<div class="stack msetup">${out}</div>`;
  }
  function msVpInner(p) {
    const ms = p.ms, t = MX.tally(ms);
    const rows = [1, 2, 3, 4, 5].map(rd => `<tr class="${rd === p.round ? 'cur' : ''}"><th>Round ${rd}</th><td class="num">${t.round.P[rd] || 0}<span class="faint">/15</span></td><td class="num">${t.round.S[rd] || 0}<span class="faint">/15</span></td></tr>`).join('');
    const fixed = ms.secMode === 'fixed' ? `<div class="faint num">${ms.hand.map(h => `${esc(MX.S[h.id].name)} ${t.fixed[h.id] || 0}/20`).join(' · ')}</div>` : '';
    const log = t.entries.slice().reverse().map(e => `<div class="mlog"><span class="grow">${e.eob ? 'End' : 'R' + e.round} · ${esc(msCard(e.src, e.card).name)}</span><span class="num">${e.applied < e.raw ? `<s class="faint">${e.raw}</s> ` : ''}+${e.applied}</span><button class="iconbtn sm" data-act="msUnscore" data-key="${esc(e.key)}" aria-label="Remove this score">${ICON.close}</button></div>`).join('');
    return `<div class="stack"><table class="mvpt"><thead><tr><th></th><th>Primary</th><th>Secondary</th></tr></thead><tbody>${rows}
      <tr><th>End of battle</th><td class="num">${t.eob}</td><td class="faint">—</td></tr></tbody>
      <tfoot><tr><th>Total</th><td class="num">${t.P}<span class="faint">/45</span></td><td class="num">${t.S}<span class="faint">/45</span></td></tr></tfoot></table>${fixed}
      <div class="row"><button class="chip" aria-pressed="${!!ms.painted}" data-act="msPainted">Battle Ready · +10</button><span class="grow"></span><b class="num" style="font-size:1.3rem">${t.total} VP</b></div>
      <div class="faint" style="font-size:.85rem">VP above a limit are ignored: 15 per battle round for Primary and for Secondary, 45 for each in total${ms.secMode === 'fixed' ? ', 20 per Fixed card' : ''}. End of battle Primary VP do not count towards the round limit.</div>
      ${log ? `<div class="eyebrow">Scores</div><div class="stack" style="gap:2px">${log}</div>` : ''}
      <div class="row sheet-btns"><button class="btn" data-act="msSetup">Change set-up…</button><button class="btn danger" data-act="msOffAsk">Missions off</button></div></div>`;
  }
  function msInfoInner(sh) {
    const c = msCard(sh.k, sh.id), ms = S.play && S.play.ms, mode = sh.k === 'S' && ms ? ms.secMode : null;
    const ls = MX.linesOf(c, mode).map(ln => {
      let v = [];
      if (ln.k === 'bool') v = [`${ln.vp} VP`];
      else if (ln.k === 'or') v = ln.opts.map(o => `${o.l} – ${o.vp} VP`);
      else v = [`${ln.per} VP per ${ln.u ? ln.u[0] : 'one'}`];
      if (ln.x) v.push(`plus: ${ln.x.l}`);
      return `<div class="minfo-l"><b>${esc(ln.l)}</b><div class="faint">${esc(MX.timingLabel(ln))}</div><ul class="minfo-o">${v.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
    }).join('');
    const wd = sh.k === 'S' && c.wd ? `<div class="mwd"><b class="eyebrow">When drawn</b><span>${esc(MX.wdText(sh.id))}</span></div>` : '';
    return `<div class="stack"><div class="dim">${esc(c.sum)}</div>${c.start ? `<div class="faint">${esc(c.start)}</div>` : ''}${c.note ? `<div class="faint">${esc(c.note)}</div>` : ''}${wd}${ls}
      ${sh.k === 'S' ? `<div class="faint" style="font-size:.85rem">${c.fixed ? 'Can be taken as Fixed or Tactical.' : 'Tactical only.'} Up to the limits on the card; a Tactical card is discarded once you score it.</div>` : ''}</div>`;
  }
  function msPickInner(p) {
    const ms = p.ms, ids = ms.deck.slice().sort((a, b) => MX.S[a].name.localeCompare(MX.S[b].name));
    return `<div class="faint">Tap the card you drew from your real deck.</div><div class="picklist">${ids.map(id => `<button class="pickrow" data-act="msPick" data-id="${id}"><b>${esc(MX.S[id].name)}</b><span class="dim">${esc(MX.S[id].sum)}</span></button>`).join('')}</div>`;
  }
  function msBeaconInner(r, p, i) {
    const list = rosterOrder(r).filter(u => unitAlive(r, p, u.instanceId));
    return `<div class="picklist">${list.map(u => `<button class="pickrow" data-act="msBeacon" data-i="${i}" data-id="${u.instanceId}"><b>${esc(dispName(r, u))}</b></button>`).join('') || '<div class="empty">No units left alive.</div>'}</div>`;
  }
  function msSwapInner(p) {
    return `<div class="faint">Once per battle: spend 1CP, discard one active card and draw a new one.</div><div class="picklist">${p.ms.hand.map((h, i) => `<button class="pickrow" data-act="msSwap" data-i="${i}"><b>${esc(MX.S[h.id].name)}</b></button>`).join('')}</div>`;
  }
  /* a card leaves the hand (shuffled back into the deck, or discarded) and one replacement is drawn;
     swap = the once-per-battle New card for 1CP */
  function msReplace(i, how, swap) {
    const r = cur(), real = playState(r).ms.deckMode === 'real'; let name = '';
    playChange(r, p => {
      const ms = p.ms, h = ms.hand[i]; if (!h) return false;
      if (swap) { if (p.cp < 1) return false; p.cp -= 1; ms.swapUsed = true; }
      ms.hand.splice(i, 1);
      if (how === 'back') { if (real) ms.deck.push(h.id); else MX.shuffleBack(ms.deck, h.id); } else ms.discard.push(h.id);
      if (real) { S.sheet = ms.deck.length ? { type: 'mpick', replace: true } : null; return; }
      const id = ms.deck.shift(); if (id) { ms.hand.push({ id, wd: MX.wdPrompt(ms, id, p.round) }); name = MX.S[id].name; }
    }, () => real ? (swap ? '1CP spent. Pick the new card you drew.' : 'Pick the new card you drew.') : name ? `${swap ? '1CP spent. ' : ''}New card: ${name}.` : 'The deck is empty.', 'confirm');
  }
  function turnRow(p) {
    return `<div class="seg wide" role="group" aria-label="Whose turn"><button aria-pressed="${p.turn !== 'opp'}" data-act="plTurn" data-id="mine">Your turn</button><button aria-pressed="${p.turn === 'opp'}" data-act="plTurn" data-id="opp">Opponent's turn</button></div>
      <div class="chips scroll phase-row" role="group" aria-label="Current phase">${PHASES.map(ph => `<button class="chip" aria-pressed="${p.phase === ph}" data-act="plPhase" data-id="${ph}" style="border-color:var(${PH_VAR[ph]})">${ph}</button>`).join('')}</div>
      ${p.round === 1 && p.phase === 'Command' ? `<div class="row"><span class="dim">First turn:</span><button class="chip" aria-pressed="${p.first !== 'opp'}" data-act="plFirst" data-id="mine">Me</button><button class="chip" aria-pressed="${p.first === 'opp'}" data-act="plFirst" data-id="opp">Opponent</button></div>` : ''}`;
  }
  function playHTML(r) {
    const p = playState(r);
    const units = rosterOrder(r).map(inst => woundCard(r, inst, p)).join('');
    const resetHTML = `<div class="row"><span class="grow eyebrow">Game tracker</span><button class="btn sm danger" data-act="resetGameAsk">Reset game</button></div>`;
    return `<div class="stack">${resetHTML}<div class="playtop">${counterHTML('Command Points', 'cp', p.cp)}${counterHTML('Battle round', 'round', p.round)}${vpTile(p)}${counterHTML('Opponent VP', 'vp1', p.vp[1])}</div>
      ${overHTML(p)}${turnRow(p)}<div class="row"><button class="btn primary" data-act="nextPhase" ${p.over ? 'aria-disabled="true"' : ''}>${p.over ? 'Game over' : 'Next phase →'}</button></div>
      ${missionsHTML(r, p)}
      <div class="faint" style="font-size:.85rem">Both players gain 1CP at the start of every Command phase. “Next phase” after Fight hands the turn over; a new battle round starts when it comes back to the player who went first.</div>
      ${blessHTML(r, p)}${factionPlayHTML(r, p)}
      <div class="row"><h3 class="grow">Units</h3><button class="btn sm" data-act="resetWounds">Reset wounds</button><button class="btn sm" data-act="rosterTab" data-id="strats">${ICON.bolt} Stratagems</button></div>
      ${units || '<div class="empty">Add units on the Build tab first.</div>'}</div>`;
  }
  function woundCard(r, inst, p) {
    const def = unitDef(r.factionId, inst.datasheetId);
    const W = parseInt(def.profile.W, 10) || 1;
    const wl = woundsOf(p, inst, W, def);
    const alive = wl.filter(w => w > 0).length;
    let body;
    if (W === 1 && inst.size > 1) {
      body = `<div class="row"><div class="stepper"><button data-act="mAlive" data-id="${inst.instanceId}" data-d="-1" aria-label="Remove a model">−</button><output class="num" style="font-size:1.2rem;font-weight:800">${alive}/${inst.size}</output><button data-act="mAlive" data-id="${inst.instanceId}" data-d="1" aria-label="Return a model">+</button></div><span class="dim">models alive</span></div>`;
    } else {
      body = `<div class="models">${wl.map((w, i) => { const dmg = def.damaged && w > 0 && w <= def.damaged.threshold; return `<div class="model ${w <= 0 ? 'dead' : ''} ${dmg ? 'dmg' : ''}"><span class="faint" style="font-size:.75rem">${i === 0 && mixedUnit(def, inst) ? esc(def.leadModel.name) : `Model ${i + 1}`}</span><span class="w num">${w}/${maxW(def, i)}</span><div class="mb"><button data-act="mw" data-id="${inst.instanceId}" data-i="${i}" data-d="-1" aria-label="Model ${i + 1}: lose a wound">−</button><button data-act="mw" data-id="${inst.instanceId}" data-i="${i}" data-d="1" aria-label="Model ${i + 1}: heal a wound">+</button></div></div>`; }).join('')}</div>`;
    }
    const dmgOn = def.damaged && inst.size === 1 && wl[0] > 0 && wl[0] <= def.damaged.threshold;
    return `<div class="ucard ${inst.attachedTo ? 'attached' : ''}" style="padding:10px"><div class="row nowrap"><button class="ptbtn" data-act="openInst" data-id="${inst.instanceId}" aria-label="Open datasheet">${portrait(def, r.factionId, 'sm')}</button><div class="grow"><b>${esc(dispName(r, inst))}</b>${kwBadges(r, def, inst)}<div class="dim" style="font-size:.85rem">T${def.profile.T} · Sv ${def.profile.Sv}${def.profile.InSv !== '—' ? ' · ' + def.profile.InSv + ' invuln' : ''} · OC ${def.profile.OC}${alive === 0 ? ' · <span style="color:var(--err)">Destroyed</span>' : ''}</div></div></div>
      ${dmgOn ? `<div class="badge red" style="margin:8px 0">DAMAGED · ${esc(def.damaged.text)}</div>` : ''}<div style="margin-top:8px">${body}</div></div>`;
  }
  const maxW = (def, i) => (def.leadModel && i === 0 ? parseInt(def.leadModel.W, 10) : parseInt(def.profile.W, 10) || 1);
  /* a unit whose first model (Aspiring Sorcerer, Ravener Prime...) has its own wounds: the player picks who takes them */
  const mixedUnit = (def, inst) => !!(def.leadModel && inst.size > 1 && parseInt(def.leadModel.W, 10) !== (parseInt(def.profile.W, 10) || 1));
  function woundGroup(wl, def, inst, grp) { // indices of the chosen group: 'lead' = model 0, 'rest' = the others; whole unit otherwise
    if (!mixedUnit(def, inst)) return wl.map((_, i) => i);
    const lead = [0], rest = wl.map((_, i) => i).slice(1), alive = g => g.some(i => wl[i] > 0);
    if (grp === 'lead') return alive(lead) || !alive(rest) ? lead : rest;
    return alive(rest) || !alive(lead) ? rest : lead;
  }
  const wTarget = (def, inst, wl) => { const g = woundGroup(wl, def, inst, (S.wtgt || {})[inst.instanceId] || 'rest'); return g.length === 1 && def.leadModel && mixedUnit(def, inst) ? 'lead' : 'rest'; };
  function woundsOf(p, inst, W, def) {
    const wl = p.wounds[inst.instanceId] || (p.wounds[inst.instanceId] = Array.from({ length: inst.size }, (_, i) => def ? maxW(def, i) : W));
    while (wl.length < inst.size) wl.push(W);
    if (wl.length > inst.size) wl.length = inst.size;
    return wl;
  }

  /* ---------------- DATASHEET MODAL ---------------- */
  function weaponTable(list, kind, bonus) {
    const plus = (w, k) => { if (!bonus || k !== bonus.stat) return ''; const v = Engine.addStat(w[k], bonus.add); return v != null && v !== String(w[k]) ? ` <span class="synS" role="button" tabindex="0" data-act="tip" data-tip="${esc(bonus.tip)}" data-title="${esc(w.name)}">(${esc(v)})</span>` : ''; };
    if (!list.length) return '';
    if (S.m) { // phones: name on its own line, numbers in one aligned grid, keyword chips below
      const cols = ['range', 'A', 'skill', 'S', 'AP', 'D'];
      return `<div class="stack" style="gap:6px"><span class="eyebrow">${kind} weapons</span><div class="wlist"><div class="wl-h"><span>Range</span><span>A</span><span>${kind === 'Ranged' ? 'BS' : 'WS'}</span><span>S</span><span>AP</span><span>D</span></div>
        ${list.map(w => `<div class="wl-row"><div class="wl-name">${esc(w.name)}</div><div class="wl-stats">${cols.map(k => { const m = w.mark && w.mark[k]; return (m ? `<button class="mod" data-act="tip" data-tip="${esc(m)}" data-title="${esc(w.name)}">${esc(w[k])}</button>` : `<span>${esc(w[k])}</span>`).replace(/<\/(button|span)>$/, `${plus(w, k)}</$1>`); }).join('')}</div>${w.kw.length ? `<div class="wl-kw">${w.kw.map(k => `<button class="kwchip" data-act="tip" data-tip="${esc(glossFor(k))}" data-title="${esc(k)}">${esc(k)}</button>`).join('')}</div>` : ''}</div>`).join('')}</div></div>`;
    }
    return `<div class="stack" style="gap:6px"><span class="eyebrow">${kind} weapons</span><div class="tablewrap"><table class="wt"><thead><tr><th>Weapon</th><th>Range</th><th>A</th><th>${kind === 'Ranged' ? 'BS' : 'WS'}</th><th>S</th><th>AP</th><th>D</th></tr></thead><tbody>
      ${list.map(w => `<tr><td><b>${esc(w.name)}</b>${w.kw.length ? '<br>' + w.kw.map(k => `<button class="kwchip" data-act="tip" data-tip="${esc(glossFor(k))}">${esc(k)}</button>`).join('') : ''}</td><td>${esc(w.range)}</td>${['A', 'skill', 'S', 'AP', 'D'].map(k => `<td class="${w.mark && w.mark[k] ? 'mod' : ''}" ${w.mark && w.mark[k] ? `title="${esc(w.mark[k])}"` : ''}>${esc(w[k])}${plus(w, k)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }
  function dsHTML(m) {
    const r = cur();
    const fid = r ? r.factionId : S.factionId;
    const inst = m.instId && r ? r.units.find(u => u.instanceId === m.instId) : null;
    const def = unitDef(fid, inst ? inst.datasheetId : m.unitId);
    const roster = r || { factionId: fid, battleSize: 'strike', detachmentIds: [], units: [] };
    const ctx = Engine.ctxFor(roster, DATA);
    const useBuff = S.dsBuff && r;
    const B = Engine.buffed(def, inst, roster, DATA, { detachment: !!useBuff });
    const prof = useBuff ? B.profile : def.profile, pm = useBuff ? B.pmark : {};
    const kws = [...Engine.keywordsOf(def, ctx, inst)];
    const isEpic = kws.includes('Epic Hero');
    const pts = r && inst ? Engine.points(r, DATA).per[inst.instanceId] : null;
    const enh = inst && inst.enhancementId ? ctx.allEnh[inst.enhancementId] : null;
    const badges = [];
    if (r && inst && r.warlordUnitId === inst.instanceId) badges.push('<span class="badge gold">Warlord</span>');
    if (enh) badges.push(`<span class="badge gold">${esc(enh.name)}</span>`);
    if (isEpic) badges.push('<span class="badge">Epic Hero</span>');
    { const k = kwBadges(roster, def, inst); if (k) badges.push(k); }
    if (kws.includes('Battleline')) badges.push('<span class="badge">Battleline</span>');
    if (kws.includes('Dedicated Transport')) badges.push('<span class="badge">Dedicated Transport</span>');
    const ledBy = fdata(fid).units.filter(u => (u.leaderOf || []).includes(def.id)).map(u => u.name);
    const group = r && inst ? Engine.attachedGroup(r, inst) : null;
    const nav = m.list && m.list.length > 1 ? (() => { const i = m.list.indexOf(m.instId); return `<button class="btn sm" data-act="dsNav" data-d="-1" ${i <= 0 ? 'disabled' : ''} aria-label="Previous unit">‹ Prev</button><span class="dim num">${i + 1}/${m.list.length}</span><button class="btn sm" data-act="dsNav" data-d="1" ${i >= m.list.length - 1 ? 'disabled' : ''} aria-label="Next unit">Next ›</button>`; })() : '';
    let combined = '';
    if (m.combined && group) {
      const members = [group.bodyguard, ...group.attached];
      const bgDef = unitDef(fid, group.bodyguard.datasheetId);
      combined = `<div class="panel pad stack"><h3>Combined view</h3><div>Attacks against this attached unit use the <b>highest Toughness among the bodyguard models: T${esc(bgDef.profile.T)}</b>. If only leader models are left, use their highest T.</div>
        ${members.map(u => { const d = unitDef(fid, u.datasheetId); const b = Engine.buffed(d, u, r, DATA, { detachment: S.dsBuff }), hw = S.dsAll ? () => true : Engine.carries(d, u); b.ranged = b.ranged.filter(hw); b.melee = b.melee.filter(hw); return `<div class="stack" style="gap:8px"><div class="row nowrap">${portrait(d, fid, 'sm')}<b>${esc(dispName(r, u))}</b>${u === group.bodyguard ? '<span class="badge">Bodyguard</span>' : '<span class="badge gold">Leader</span>'}</div>${statlineHTML(b.profile, b.pmark)}${weaponTable(b.ranged, 'Ranged')}${weaponTable(b.melee, 'Melee', meleeBonus(r, d, u))}<div class="dim">${d.abilities.map(a => esc(a.name)).join(' · ')}</div></div>`; }).join('<hr style="border:0;border-top:1px solid var(--line);width:100%">')}</div>`;
    }
    const W0 = useBuff ? B : { ranged: def.ranged.map(w => ({ ...w, mark: {} })), melee: def.melee.map(w => ({ ...w, mark: {} })) };
    // a unit in a roster shows only the weapons it carries; "All weapons" brings back the full datasheet
    const has = inst && !S.dsAll ? Engine.carries(def, inst) : () => true;
    const W = { ranged: W0.ranged.filter(has), melee: W0.melee.filter(has) };
    const nHidden = def.ranged.length + def.melee.length - W.ranged.length - W.melee.length;
    const wToggle = inst && (nHidden || S.dsAll) ? `<button class="btn sm" data-act="dsAll">${S.dsAll ? 'Only carried weapons' : `All weapons (+${nHidden})`}</button>` : '';
    return `<div class="modal-back" data-act="closeModalBack"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="ds-title">
      <div class="modal-head">${portrait(def, fid, 'lg')}<div class="stack" style="gap:4px;min-width:0"><div class="eyebrow">${esc(CAT_NAME[catOf(def, roster)] || '')} · Base ${esc(def.baseSize)}</div><h2 id="ds-title">${esc(inst ? dispName(r, inst) : def.name)}</h2>
        <div class="row" style="gap:6px">${pts ? `<span class="badge gold num">${pts.total} pts</span>` : `<span class="badge num">${def.sizes.map(s => s.pts).join(' / ')} pts</span>`}${badges.join('')}</div>${S.m ? '' : `<div class="row" style="gap:6px">${nav}</div>`}</div>
        <button class="iconbtn" data-act="closeModal" aria-label="Close">${ICON.close}</button></div>
      <div class="modal-body">
        ${r ? `<div class="row"><div class="seg" role="group" aria-label="Show values"><button aria-pressed="${!S.dsBuff}" data-act="dsBuff" data-v="0">Base</button><button aria-pressed="${S.dsBuff}" data-act="dsBuff" data-v="1">With detachment buffs</button></div>${group ? `<button class="btn sm" data-act="dsCombined">${m.combined ? 'Single view' : 'Combined view'}</button>` : ''}</div>${useBuff && B.notes.length ? `<div class="dim" style="font-size:.9rem">Highlighted values include: ${esc(B.notes.join(', '))}. Conditional effects (charges, Blessings, stratagems) are not applied.</div>` : ''}` : ''}
        ${combined}
        ${m.combined ? '' : `${statlineHTML(prof, pm)}${def.leadModel ? `<div class="dim" style="font-size:.9rem">${esc(def.leadModel.name)}: W ${esc(def.leadModel.W)}, Ld ${esc(def.leadModel.Ld)}. The other models use the line above.</div>` : ''}
        ${def.damaged ? `<div class="abil"><b>Damaged profile</b>${esc(def.damaged.text)}</div>` : ''}
        ${weaponTable(W.ranged, 'Ranged')}${weaponTable(W.melee, 'Melee', meleeBonus(roster, def, inst))}${wToggle ? `<div class="row">${wToggle}</div>` : ''}
        <div class="stack" style="gap:8px"><span class="eyebrow">Abilities</span>
          ${def.coreAbilities.length ? `<div><b>Core:</b> ${def.coreAbilities.map(a => `<button class="kwchip" data-act="tip" data-tip="${esc(glossFor(a))}" data-title="${esc(a)}">${esc(a)}</button>`).join('')}</div>` : ''}
          ${def.factionAbilities.length ? `<div><b>Faction:</b> ${def.factionAbilities.map(a => `<button class="kwchip" data-act="tip" data-tip="${esc(abilityTip(fid, a))}" data-title="${esc(a)}">${esc(a)}</button>`).join('')}</div>` : ''}
          ${def.abilities.map(a => `<div class="abil"><b>${esc(a.name)}${a.kind === 'wargear' ? ' <span class="badge">Wargear</span>' : ''}</b>${esc(a.text)}</div>`).join('')}
          ${enh ? `<div class="abil"><b>${esc(enh.name)} <span class="badge gold">Enhancement</span></b>${esc(enh.text)}</div>` : ''}
          ${def.transport ? `<div class="abil"><b>Transport</b>${esc(def.transport)}</div>` : ''}</div>
        ${def.options.length ? `<div class="stack" style="gap:6px"><span class="eyebrow">Wargear options</span><ul style="margin:0;padding-left:20px">${def.options.map(o => `<li>${esc(o.label)}${o.type === 'choice' ? ': ' + esc(o.choices.map(c => c.label + (c.pts ? ` (+${c.pts})` : '')).join(' / ')) : o.per ? ` — ${o.n || 1} per ${o.per} models` : o.max === 'models' ? ' — any number' : ' — one model'}</li>`).join('')}</ul></div>` : ''}
        <div class="stack" style="gap:6px"><span class="eyebrow">Unit composition</span><div>${esc(def.composition)}</div></div>
        <div class="stack" style="gap:6px"><span class="eyebrow">Points</span><div class="num">${def.sizes.map(s => `${s.models} model${s.models > 1 ? 's' : ''}: ${s.pts} pts${s.ptsLater != null ? ` (${ORD(def.stepFrom)}+ copy: ${s.ptsLater} pts)` : ''}`).join('<br>')}</div></div>
        ${def.leaderOf.length ? `<div><b>Can lead:</b> ${esc(def.leaderOf.map(id => unitDef(fid, id).name).join(', '))}</div>` : ''}
        ${ledBy.length ? `<div><b>Led by:</b> ${esc(ledBy.join(', '))}</div>` : ''}
        <div><span class="eyebrow">Keywords</span><div>${kws.map(k => `<span class="kwchip">${esc(k)}</span>`).join('')}</div><div style="margin-top:6px"><span class="eyebrow">Faction</span> <span class="kwchip">${esc(inst && r ? Engine.factionOf(inst, def, ctx) : def.faction)}</span></div></div>`}
      </div>${S.m && nav ? `<div class="dsnav">${nav}</div>` : ''}</div></div>`;
  }
  function abilityTip(fid, a) {
    const tips = faction(fid).abilityTips || {};
    return tips[a] || tips[a.replace(/ \(.*\)$/, '')] || 'See Army Rules.';
  }
  function statlineHTML(p, pm) {
    return `<div class="statline">${['M', 'T', 'Sv', 'InSv', 'W', 'Ld', 'OC'].map(k => pm && pm[k]
      ? `<button class="stat mod" data-act="tip" data-tip="${esc(pm[k])}" data-title="${k}" title="${esc(pm[k])}"><div class="k">${k === 'InSv' ? 'Inv' : k}</div><div class="v">${esc(p[k])}</div></button>`
      : `<div class="stat"><div class="k">${k === 'InSv' ? 'Inv' : k}</div><div class="v">${esc(p[k])}</div></div>`).join('')}</div>`;
  }

  /* ---------------- OTHER MODALS ---------------- */
  function exportText(r, fmt) {
    const fd = fdata(r.factionId), bs = bsDef(r.battleSize), pts = Engine.points(r, DATA);
    const ctx = Engine.ctxFor(r, DATA);
    const dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id).name);
    const line = inst => {
      const def = unitDef(r.factionId, inst.datasheetId), p = pts.per[inst.instanceId];
      const enh = inst.enhancementId ? ctx.allEnh[inst.enhancementId] : null;
      const att = inst.attachedTo ? r.units.find(u => u.instanceId === inst.attachedTo) : null;
      return { def, p, enh, att, ws: wargearSummary(def, inst), name: dispName(r, inst), wl: r.warlordUnitId === inst.instanceId, size: inst.size };
    };
    const order = Object.keys(CAT_NAME).concat('other');
    const byCat = {};
    r.units.forEach(u => (byCat[catOf(unitDef(r.factionId, u.datasheetId), r)] = byCat[catOf(unitDef(r.factionId, u.datasheetId), r)] || []).push(line(u)));
    if (fmt === 'gw') {
      let t = `${r.name} (${pts.total} points)\n\n${faction(r.factionId).name}\n${dets.join(', ')}\n${bs.name} (${bs.points} points)\nForce Disposition: ${r.forceDisposition || '-'}\n`;
      order.filter(c => byCat[c]).forEach(c => {
        t += `\n${CAT_NAME[c].toUpperCase()}\n\n`;
        byCat[c].forEach(l => { t += `${l.name} (${l.p.total} points)\n`; if (l.wl) t += '  • Warlord\n'; if (l.size > 1) t += `  • ${l.size} models\n`; l.ws.forEach(w => (t += `  • ${w}\n`)); if (l.enh) t += `  • Enhancement: ${l.enh.name} (+${l.enh.pts} points)\n`; if (l.att) t += `  • Attached to: ${dispName(r, l.att)}\n`; t += '\n'; });
      });
      return t + 'Exported with Supreme Commander (approximate GW app format)\n';
    }
    if (fmt === 'wtc') {
      let t = `+++ ${r.name} +++\nFACTION: ${faction(r.factionId).name}\nDETACHMENTS: ${dets.join(' + ')} | DISPOSITION: ${r.forceDisposition || '-'}\nSIZE: ${bs.name} | TOTAL: ${pts.total}/${bs.points}\n`;
      const wl = r.units.find(u => u.instanceId === r.warlordUnitId);
      t += `WARLORD: ${wl ? dispName(r, wl) : '-'}\nENHANCEMENTS: ${r.units.filter(u => u.enhancementId).map(u => `${ctx.allEnh[u.enhancementId].name} (${dispName(r, u)})`).join(', ') || '-'}\n\n`;
      order.filter(c => byCat[c]).forEach(c => byCat[c].forEach(l => { t += `${CAT_NAME[c].slice(0, 4).toUpperCase()}: ${l.size > 1 ? l.size + 'x ' : ''}${l.name} (${l.p.total})${l.wl ? ' [WL]' : ''}${l.enh ? ' [' + l.enh.name + ']' : ''}${l.ws.length ? ' – ' + l.ws.join(', ') : ''}${l.att ? ' → ' + dispName(r, l.att) : ''}\n`; }));
      return t;
    }
    let t = `**${r.name}** — ${faction(r.factionId).name}, ${bs.name} ${pts.total}/${bs.points}\n*${dets.join(' + ')} · ${r.forceDisposition || '-'}*\n`;
    order.filter(c => byCat[c]).forEach(c => byCat[c].forEach(l => { t += `• ${l.size > 1 ? l.size + '× ' : ''}${l.name} — ${l.p.total}${l.wl ? ' ★' : ''}${l.enh ? ' · ' + l.enh.name : ''}${l.att ? ' → ' + dispName(r, l.att) : ''}\n`; }));
    return t;
  }
  const shareCode = r => 'MR1:' + btoa(unescape(encodeURIComponent(JSON.stringify(r))));
  function modalHTML() {
    const m = S.modal;
    if (!m) return '';
    if (m.type === 'ds') return dsHTML(m);
    const wrap = (title, inner) => `<div class="modal-back" data-act="closeModalBack"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="mt"><div class="modal-head" style="grid-template-columns:1fr auto"><h2 id="mt">${title}</h2><button class="iconbtn" data-act="closeModal" aria-label="Close">${ICON.close}</button></div><div class="modal-body">${inner}</div></div></div>`;
    if (m.type === 'val') { const r = cur(); return wrap('Validation', valList(Engine.validate(r, DATA))); }
    if (m.type === 'portrait') {
      const def = unitDef(S.factionId, m.unitId);
      const has = !!CUSTOM[m.unitId];
      return wrap(`Portrait · ${esc(def.name)}`, `<div class="stack">
        <p class="dim" style="margin:0">Portraits are square. Choose an image, then drag it to frame the unit and use the slider to zoom.</p>
        <div class="cropper"><canvas id="crop-canvas" width="280" height="280" aria-label="Crop area: drag to move the image"></canvas><div class="crop-frame" aria-hidden="true"></div></div>
        <label class="fld">Zoom<input type="range" id="crop-zoom" min="1" max="4" step="0.01" value="${m.zoom || 1}" ${m.img ? '' : 'disabled'}></label>
        <div class="row"><label class="btn">${ICON.camera} Choose image<input type="file" id="crop-file" accept="image/*" data-chg="portraitFile" class="sr"></label>
          <button class="btn primary" data-act="savePortrait" ${m.dirty ? '' : 'disabled'}>Save portrait</button>
          ${has ? '<button class="btn danger" data-act="resetPortrait">Use default</button>' : ''}
          <button class="btn ghost" data-act="closeModal">Cancel</button></div>
        <div class="row" style="gap:10px"><span class="dim">Current</span>${portrait(def, S.factionId, 'sm')}<span class="faint" style="font-size:.85rem">${has ? 'Custom portrait in use.' : 'Default portrait in use.'}</span></div>
      </div>`);
    }
    if (m.type === 'export') {
      const r = rosters.find(x => x.id === m.rosterId);
      const fmts = [['gw', 'GW app style'], ['wtc', 'WTC compact'], ['discord', 'Discord'], ['json', 'Share code (JSON)']];
      const txt = m.fmt === 'json' ? shareCode(r) : exportText(r, m.fmt);
      return wrap(`Export · ${esc(r.name)}`, `<div class="chips">${fmts.map(([id, l]) => `<button class="chip" aria-pressed="${m.fmt === id}" data-act="expFmt" data-id="${id}">${l}</button>`).join('')}</div>
        ${m.fmt === 'gw' ? '<div class="faint" style="font-size:.85rem">Approximate format. Paste a real export from the Warhammer 40,000 app to match it exactly.</div>' : ''}${m.fmt === 'json' ? '<div class="faint" style="font-size:.85rem">Paste this code into Import on any device to recreate the roster.</div>' : ''}
        <textarea id="exp-text" readonly style="min-height:260px;font:.9rem/1.45 ui-monospace,Menlo,monospace">${esc(txt)}</textarea>
        <div class="row">${PL.canShare() ? `<button class="btn primary" data-act="shareExport">${ICON.share} Share</button>` : ''}<button class="btn ${PL.canShare() ? '' : 'primary'}" data-act="copyExport">${ICON.copy} Copy</button>${Store.downloads || window.mrSaveFile || PL.android ? `<button class="btn" data-act="downloadExport">${ICON.save} ${window.mrSaveFile || PL.android ? 'Save to file' : 'Download'}</button>` : ''}</div>`);
    }
    if (m.type === 'import') return wrap('Import roster', `<div class="row"><button class="btn" data-act="pasteImport">${ICON.paste} Paste</button><label class="btn">${ICON.file} Open file<input type="file" id="imp-file" accept=".json,.txt,application/json,text/plain" data-chg="importFile" class="sr"></label></div>
      <label class="fld">Share code (MR1:…), roster JSON or a backup file<textarea id="imp-text" style="min-height:180px">${esc(m.text || '')}</textarea></label>${m.error ? `<div class="vmsg error"><span class="ic">✕</span><span>${esc(m.error)}</span></div>` : ''}<div class="row"><button class="btn primary" data-act="doImport">Import</button><span class="faint" style="font-size:.85rem">Text exports from the GW app can't be imported yet.</span></div>`);
    if (m.type === 'backup') {
      const json = backupJSON();
      return wrap('Back up all rosters', `<p class="dim" style="margin:0">One file with all ${rosters.length} rosters and your custom portraits. Keep it somewhere safe (cloud drive, e-mail to yourself). Import restores it on any device.</p>
        <div class="row">${PL.canShare() ? `<button class="btn primary" data-act="shareBackup">${ICON.share} Share</button>` : ''}${Store.downloads || window.mrSaveFile || PL.android ? `<button class="btn ${PL.canShare() ? '' : 'primary'}" data-act="saveBackup">${ICON.save} Save to file</button>` : ''}<button class="btn" data-act="copyBackup">${ICON.copy} Copy</button></div>
        <div class="faint" style="font-size:.85rem">${(json.length / 1024).toFixed(0)} KB</div>`);
    }
    return '';
  }

  /* ---------------- PHONE LAYOUT ---------------- */
  /* Below 760px (and always in the Android app on a phone) the roster becomes a stack of screens:
     roster list -> "Add units" catalogue / unit editor, with a 4-item bottom bar and bottom sheets. */
  function statusLine(r) {
    const bs = bsDef(r.battleSize), pts = rosterPts(r).total, dp = rosterDp(r);
    const ne = Engine.validate(r, DATA).filter(x => x.severity === 'error').length;
    return `<button class="mstatus" data-act="openStatus" aria-label="Points ${pts} of ${bs.points}, ${dp} of ${bs.dp} DP, ${ne ? ne + ' problems' : 'legal'}"><span class="num ${pts > bs.points ? 'bad' : ''}">${pts}/${bs.points}</span><i></i><span class="num ${dp > bs.dp ? 'bad' : ''}">DP ${dp}/${bs.dp}</span><i></i>${ne ? `<span class="bad">✕ ${ne}</span>` : '<span class="ok">✓ Legal</span>'}</button>`;
  }
  function gameLine(r) {
    const p = playState(r);
    return `<div class="mstatus game" aria-label="Game state"><span>R${p.round}</span><i></i><span style="color:var(${PH_VAR[p.phase]})">${p.phase}</span><i></i><span>${p.turn === 'opp' ? 'Opponent' : 'You'}</span><i></i><span class="num">CP ${p.cp}</span><i></i><span class="num">VP ${p.vp[0]}:${p.vp[1]}</span>${p.active.length ? '<i></i><span class="gold">✦' + p.active.length + '</span>' : ''}</div>`;
  }
  function mHeader(title, opts = {}) {
    return `<header class="mbar"><button class="iconbtn" data-act="${opts.back || 'goBack'}" aria-label="Back">${ICON.back}</button><div class="mbar-t"><div class="mbar-title">${title}</div>${opts.sub || ''}</div>${opts.right || ''}</header>`;
  }
  function viewRosterM(r) {
    const sub = S.sub;
    if (sub && sub.type === 'catalog') return catalogM(r);
    if (sub && sub.type === 'unit') { const u = r.units.find(x => x.instanceId === sub.id); if (u) return unitScreenM(r, u); S.sub = null; }
    if (sub && sub.type === 'summary') return mHeader('Summary', { back: 'closeSub' }) + `<main class="wrap mwrap">${rosterViewHTML(r)}</main>` + modalHTML() + sheetHTML();
    const gameTab = S.tab === 'play' || S.tab === 'strats';
    const head = mHeader(esc(r.name), { sub: gameTab ? gameLine(r) : statusLine(r), right: `<button class="iconbtn" data-act="rosterMenu" aria-label="Roster menu">${ICON.more}</button>` });
    let body = '';
    if (S.tab === 'play') body = playM(r);
    else if (S.tab === 'strats') body = stratsM(r);
    else if (S.tab === 'rules') body = rulesTabHTML(r);
    else body = rosterListM(r);
    const tabs = [['build', 'Roster', 'list'], ['play', 'Play', 'dice'], ['strats', 'Stratagems', 'bolt'], ['rules', 'Rules', 'book']];
    return head + `<main class="wrap mwrap tab-${S.tab}">${body}</main>` + tabbar(tabs, S.tab, 'rosterTab') + modalHTML() + sheetHTML();
  }
  function rosterListM(r) {
    const pts = rosterPts(r), v = Engine.validate(r, DATA), ctx = Engine.ctxFor(r, DATA);
    const ne = v.filter(x => x.severity === 'error').length;
    const errUnits = new Set(v.filter(x => x.severity === 'error' && x.unitInstanceId).map(x => x.unitInstanceId));
    const fd = fdata(r.factionId), bs = bsDef(r.battleSize);
    const rowOf = u => {
      const def = unitDef(r.factionId, u.datasheetId); if (!def) return '';
      const p = pts.per[u.instanceId] || { total: 0 };
      const enh = u.enhancementId ? ctx.allEnh[u.enhancementId] : null;
      const ai = attachInfo(r, u);
      const meta = [u.size > 1 ? `${u.size} models` : '', ai.text ? `<span class="linktxt">${esc(ai.text)}</span>` : '', r.warlordUnitId === u.instanceId ? '<span class="gold">★ Warlord</span>' : '', enh ? `<span class="gold">${esc(enh.name)}</span>` : '', p.surcharge ? `<span class="warn">${ORD(p.copyNo)} copy +${p.surcharge}</span>` : ''].filter(Boolean).join(' · ');
      return `<div class="mrow ${errUnits.has(u.instanceId) ? 'err' : ''} ${S.flash === u.instanceId ? 'flash' : ''}" id="u-${u.instanceId}"><button class="ptbtn" data-act="openInst" data-id="${u.instanceId}" aria-label="Datasheet: ${esc(dispName(r, u))}">${portrait(def, r.factionId)}</button><button class="mrow-main" data-act="openUnit" data-id="${u.instanceId}"><span class="mrow-name">${errUnits.has(u.instanceId) ? '<span class="bad">✕ </span>' : ''}${esc(dispName(r, u))}${kwBadges(r, def, u)}</span><span class="mrow-meta">${meta || '&nbsp;'}</span></button><span class="mrow-pts num">${p.total}</span><button class="iconbtn mrow-more" data-act="unitMenu" data-id="${u.instanceId}" aria-label="Actions for ${esc(dispName(r, u))}">${ICON.more}</button></div>`;
    };
    const rows = rosterGroups(r).map(g => groupHdr(r, g, errUnits) + (isColl(r, g.cat) ? '' : `<div class="mlist">${g.items.map(rowOf).join('')}</div>`)).join('');
    return `<div class="mdet"><span class="dim">${esc(bs.name)} · ${esc(r.detachmentIds.map(id => fd.detachments.find(d => d.id === id).name).join(' + '))}</span><span class="dim num">${r.units.length} units</span></div>
      ${rows ? `${hiSummary(r)}<div class="mgroups">${rows}</div>` : `<div class="empty">Your roster is empty. Start with a CHARACTER.<br><button class="btn primary" data-act="openCatalog" style="margin-top:12px">${ICON.plus} Add your first unit</button></div>`}
      <label class="fld" style="margin-top:18px">Roster notes<textarea id="roster-notes" data-inp="rosterNotes">${esc(r.notes || '')}</textarea></label>
      ${ne ? `<button class="errstrip" data-act="openStatus"><span>✕ ${ne} problem${ne > 1 ? 's' : ''}</span><span>Show ›</span></button>` : ''}
      <button class="fab" data-act="openCatalog">${ICON.plus}<span>Add unit</span></button>`;
  }
  function catalogM(r) {
    const { cats } = catalogCats(r);
    return mHeader('Add units', { back: 'closeSub', sub: statusLine(r), right: '<button class="btn sm primary donebtn" data-act="closeSub">Done</button>' })
      + `<main class="wrap mwrap"><input class="search" type="search" id="add-search" data-inp="search" placeholder="Search name or keyword" value="${esc(S.search)}" aria-label="Search units" autocomplete="off" enterkeyhint="search">
      <div class="chips scroll" role="group" aria-label="Categories">${cats.map(([c, l]) => `<button class="chip" aria-pressed="${S.cat === c}" data-act="cat" data-id="${c}">${l}</button>`).join('')}</div>
      <div id="cat-list" class="addlist">${catalogList(r)}</div></main>` + modalHTML() + sheetHTML();
  }
  function unitScreenM(r, inst) {
    const def = unitDef(r.factionId, inst.datasheetId), pts = rosterPts(r), ctx = Engine.ctxFor(r, DATA);
    const p = pts.per[inst.instanceId] || { total: 0 };
    const badges = unitBadges(r, inst, p, ctx);
    return mHeader(esc(dispName(r, inst)), { back: 'closeSub', sub: statusLine(r), right: `<button class="iconbtn" data-act="openInst" data-id="${inst.instanceId}" aria-label="Datasheet">${ICON.info}</button>` })
      + `<main class="wrap mwrap unitscreen"><button class="uhero" data-act="openInst" data-id="${inst.instanceId}">${portrait(def, r.factionId, 'lg')}<span class="stack" style="gap:6px;min-width:0"><span class="row" style="gap:6px">${badges.join('') || `<span class="dim">${esc(CAT_NAME[catOf(def, r)] || '')}</span>`}</span><span class="link">Open datasheet ›</span></span></button>
      <div class="stack ubody-m">${unitBody(r, inst, pts, true)}</div></main>
      <div class="mfoot"><span class="num mfoot-pts"><b>${p.total}</b> pts</span><button class="btn" data-act="dupUnit" data-id="${inst.instanceId}">${ICON.dup} Duplicate</button><button class="btn danger" data-act="removeUnit" data-id="${inst.instanceId}">${ICON.trash} Remove</button></div>` + modalHTML() + sheetHTML();
  }
  function playM(r) {
    const p = playState(r);
    const seg = `<div class="seg wide" role="group" aria-label="Play view"><button aria-pressed="${S.playSeg !== 'units'}" data-act="playSeg" data-id="turn">Turn</button><button aria-pressed="${S.playSeg === 'units'}" data-act="playSeg" data-id="units">Units</button></div>`;
    if (S.playSeg === 'units') return `<div class="stack">${seg}${playUnitsM(r, p)}</div>`;
    return `<div class="stack">${seg}${overHTML(p)}${turnRow(p)}
      <div class="playtop m2">${counterHTML('Command Points', 'cp', p.cp)}${counterHTML('Battle round', 'round', p.round)}${vpTile(p)}${counterHTML('Opponent VP', 'vp1', p.vp[1])}</div>
      ${missionsHTML(r, p)}${blessHTML(r, p)}${factionPlayHTML(r, p)}
      <button class="btn danger ghost" data-act="resetGameAsk">Reset game…</button></div>
      <div class="mact"><button class="btn" data-act="pc" data-k="cp" data-d="-1" aria-label="Spend 1 CP">CP −</button><button class="btn" data-act="pc" data-k="cp" data-d="1" aria-label="Gain 1 CP">CP +</button><button class="btn primary grow" data-act="nextPhase" ${p.over ? 'aria-disabled="true"' : ''}>${p.over ? 'Game over' : p.phase === 'Fight' ? (p.round >= 5 && (p.turn === 'opp' ? 'mine' : 'opp') === (p.first || 'mine') ? 'End the game' : p.turn === 'opp' ? 'Your turn →' : 'Opponent turn →') : 'Next: ' + PHASES[PHASES.indexOf(p.phase) + 1] + ' →'}</button></div>`;
  }
  function playUnitsM(r, p) {
    const order = rosterOrder(r);
    if (!order.length) return '<div class="empty">Add units on the Roster tab first.</div>';
    const groups = [];
    order.forEach(u => { const top = !u.attachedTo || !r.units.some(b => b.instanceId === u.attachedTo); if (top) groups.push([u]); else groups[groups.length - 1].push(u); });
    const dead = g => g.every(u => { const def = unitDef(r.factionId, u.datasheetId); return woundsOf(p, u, parseInt(def.profile.W, 10) || 1, def).every(w => w <= 0); });
    const live = groups.filter(g => !dead(g)), gone = groups.filter(dead);
    const card = g => `<div class="pgroup ${dead(g) ? 'dead' : ''}">${g.map(u => woundM(r, u, p)).join('')}</div>`;
    return `${live.map(card).join('')}${gone.length ? `<div class="grouphdr">Destroyed</div>${gone.map(card).join('')}` : ''}
      <button class="btn ghost" data-act="resetWounds">Reset all wounds</button>`;
  }
  function woundM(r, inst, p) {
    const def = unitDef(r.factionId, inst.datasheetId);
    const W = parseInt(def.profile.W, 10) || 1;
    const wl = woundsOf(p, inst, W, def);
    const alive = wl.filter(w => w > 0).length;
    const wi = wl.findIndex((w, i) => w > 0 && w < maxW(def, i));
    const id = inst.instanceId, name = esc(dispName(r, inst));
    let read, btns;
    if (inst.size === 1) {
      read = `<span class="wbig num">${wl[0]}<small>/${W}</small></span><span class="dim">wounds</span>`;
      btns = `<button class="wb minus" data-act="wnd" data-k="w" data-d="-1" data-id="${id}" aria-label="${name}: lose a wound">−1 wound</button><button class="wb plus" data-act="wnd" data-k="w" data-d="1" data-id="${id}" aria-label="${name}: heal a wound">+</button>`;
    } else if (W === 1) {
      read = `<span class="wbig num">${alive}<small>/${inst.size}</small></span><span class="dim">models</span>`;
      btns = `<button class="wb minus" data-act="wnd" data-k="m" data-d="-1" data-id="${id}" aria-label="${name}: remove a model">−1 model</button><button class="wb plus" data-act="wnd" data-k="m" data-d="1" data-id="${id}" aria-label="${name}: return a model">+</button>`;
    } else {
      const mixed = mixedUnit(def, inst), tg = mixed ? wTarget(def, inst, wl) : 'rest';
      const restWl = mixed ? wl.slice(1) : wl, rwi = restWl.findIndex(w => w > 0 && w < W);
      read = `<span class="wbig num">${alive}<small>/${inst.size}</small></span><span class="dim">models${!mixed && wi >= 0 ? ` · wounded model <b class="num">${wl[wi]}/${maxW(def, wi)}</b>` : mixed && rwi >= 0 ? ` · wounded <b class="num">${restWl[rwi]}/${W}</b>` : ''}</span>`;
      const who = tg === 'lead' ? def.leadModel.name : 'model';
      btns = `<button class="wb minus" data-act="wnd" data-k="w" data-d="-1" data-id="${id}" aria-label="${name}: ${esc(who)} loses a wound">−1 wound</button><button class="wb minus2" data-act="wnd" data-k="m" data-d="-1" data-id="${id}" aria-label="${name}: remove a ${esc(who)}">${tg === 'lead' ? 'Slay' : '−1 model'}</button><button class="wb plus" data-act="wnd" data-k="w" data-d="1" data-id="${id}" aria-label="${name}: heal or return a ${esc(who)}">+</button>`;
      if (mixed) {
        const lw = wl[0], LW = maxW(def, 0), restAlive = restWl.filter(w => w > 0).length;
        btns = `<div class="wtgt" role="group" aria-label="${name}: who takes the wounds"><span class="wtgt-l">Wounds go to</span><div class="seg"><button aria-pressed="${tg === 'rest'}" data-act="wtgt" data-id="${id}" data-g="rest" ${restAlive ? '' : 'disabled'}>${esc(def.name)} <span class="num">${restAlive}/${inst.size - 1}</span></button><button aria-pressed="${tg === 'lead'}" data-act="wtgt" data-id="${id}" data-g="lead" ${lw > 0 ? '' : 'disabled'} class="${lw > 0 && lw < LW ? 'hurt' : ''}">${esc(def.leadModel.name)} <span class="num">${lw > 0 ? `${lw}/${LW}W` : 'slain'}</span></button></div></div><div class="wbtns-in">${btns}</div>`;
      }
    }
    const dmgOn = def.damaged && inst.size === 1 && wl[0] > 0 && wl[0] <= def.damaged.threshold;
    return `<div class="pcard ${alive ? '' : 'dead'} ${inst.attachedTo ? 'att' : ''}"><div class="row nowrap"><button class="ptbtn" data-act="openInst" data-id="${id}" aria-label="Datasheet: ${name}">${portrait(def, r.factionId, 'sm')}</button><div class="grow"><b>${name}</b>${kwBadges(r, def, inst)}<div class="dim pstats">T${def.profile.T} · Sv ${def.profile.Sv}${def.profile.InSv !== '—' ? ' · ' + def.profile.InSv + ' inv' : ''} · OC ${def.profile.OC}</div></div><div class="wread">${read}</div></div>
      ${dmgOn ? `<div class="badge red dmgbadge">DAMAGED · ${esc(def.damaged.text)}</div>` : ''}${alive === 0 ? '<div class="bad" style="font-weight:700">Destroyed</div>' : ''}<div class="wbtns">${btns}</div></div>`;
  }
  /* stratagems: whose turn a stratagem is used in, read from its timing text */
  const stratTurn = s => /opponent's/i.test(s.when) ? 'opp' : /\byour\b/i.test(s.when) ? 'mine' : 'both';
  const stratDL = s => `<dl><dt>When</dt><dd>${esc(s.when)}</dd><dt>Target</dt><dd>${esc(s.target)}</dd><dt>Effect</dt><dd>${esc(s.effect)}</dd>${s.restrictions ? `<dt>Limit</dt><dd>${esc(s.restrictions)}</dd>` : ''}</dl>`;
  function allStrats(r) {
    const fd = fdata(r.factionId);
    const dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id));
    return [...GR.coreStratagems.map(s => ({ s, src: 'Core' })), ...dets.flatMap(d => d.stratagems.map(s => ({ s, src: d.name })))].map(x => ({ ...x, key: x.src + ':' + x.s.name, turn: stratTurn(x.s) }));
  }
  function stratsM(r) {
    const p = playState(r);
    const fd = fdata(r.factionId);
    const dets = r.detachmentIds.map(id => fd.detachments.find(d => d.id === id));
    let list = allStrats(r);
    const mode = S.stratMode;
    if (mode === 'now') list = list.filter(x => (x.s.phases.includes(p.phase) || x.s.phases.includes('Any')) && (x.turn === 'both' || x.turn === p.turn));
    else if (mode !== 'all') list = list.filter(x => x.s.phases.includes(mode) || x.s.phases.includes('Any'));
    if (S.stratSrc !== 'All') list = list.filter(x => x.src === S.stratSrc);
    const stamp = `${p.round}-${p.turn}-${p.phase}`;
    const modes = [['now', `Now · ${p.phase}`], ['all', 'All'], ...PHASES.map(ph => [ph, ph])];
    const row = x => {
      const open = !!S.stratOpen[x.key], used = p.usedStrats[x.key] === stamp, ph = x.s.phases[0];
      return `<article class="srow ${used ? 'used' : ''}" style="--ph:var(${PH_VAR[ph] || '--ph-any'})"><button class="srow-h" data-act="stratToggle" data-id="${esc(x.key)}" aria-expanded="${open}"><span class="srow-t"><span class="ph">${esc(x.s.phases.join(' / '))}${x.turn === 'opp' ? ' · opponent' : x.turn === 'mine' ? ' · your turn' : ''}</span><b>${esc(x.s.name)}</b></span><span class="cp num">${x.s.cp} CP</span>${CHEV}</button>
        ${open ? `<div class="srow-b">${stratDL(x.s)}<div class="faint" style="font-size:.8rem">${esc(x.src)}</div>
          <button class="btn ${used || p.cp < x.s.cp ? '' : 'primary'}" data-act="useStrat" data-id="${esc(x.key)}" data-cp="${x.s.cp}" ${used ? 'aria-disabled="true"' : ''}>${used ? 'Used this phase' : p.cp < x.s.cp ? `Needs ${x.s.cp} CP · you have ${p.cp}` : `Use · −${x.s.cp} CP (you have ${p.cp})`}</button></div>` : ''}</article>`;
    };
    return `<div class="stack"><div class="chips scroll" role="group" aria-label="When">${modes.map(([id, l]) => `<button class="chip" aria-pressed="${mode === id}" data-act="stratMode" data-id="${id}" ${PH_VAR[id] ? `style="border-color:var(${PH_VAR[id]})"` : ''}>${esc(l)}</button>`).join('')}</div>
      <div class="chips scroll" role="group" aria-label="Source">${['All', 'Core', ...dets.map(d => d.name)].map(x => `<button class="chip" aria-pressed="${S.stratSrc === x}" data-act="stratSrc" data-id="${esc(x)}">${esc(x)}</button>`).join('')}</div>
      ${mode === 'now' ? `<div class="faint" style="font-size:.85rem">${p.turn === 'opp' ? "Opponent's" : 'Your'} ${p.phase} phase, from the Play tab. Stratagems usable in any phase are included.</div>` : ''}
      <div class="slist">${list.map(row).join('') || '<div class="empty">No stratagems for this moment.</div>'}</div></div>`;
  }
  /* bottom sheets (phones) */
  function sheetHTML() {
    const sh = S.sheet; if (!sh) return '';
    const r = cur();
    let title = '', inner = '';
    if (sh.type === 'pick' && r) {
      const u = r.units.find(x => x.instanceId === sh.id); if (!u) { S.sheet = null; return ''; }
      if (sh.kind === 'enh') { const { isChar } = enhChoices(r, u); title = isChar ? 'Enhancement' : 'Upgrade'; inner = `<div class="picklist" role="radiogroup" aria-label="${title}">${enhPickList(r, u)}</div>`; }
      else { title = 'Attach to bodyguard'; inner = `<div class="picklist" role="radiogroup" aria-label="${title}">${attPickList(r, u)}</div>`; }
    } else if (sh.type === 'status' && r) {
      title = 'Roster check'; inner = meters(r) + valList(Engine.validate(r, DATA)) + `<button class="btn" data-act="editSetup">${ICON.gear} Battle size & detachments</button>`;
    } else if (sh.type === 'menu' && r) {
      title = esc(r.name);
      inner = `<div class="mmenu"><button data-act="openSummary">${ICON.list} Summary</button><button data-act="exportRoster" data-id="${r.id}">${ICON.share} Export / Share</button><button data-act="renameSheet" data-id="${r.id}">${ICON.edit} Rename</button><button data-act="editSetup">${ICON.gear} Battle size & detachments</button>${S.tab === 'play' ? `<button data-act="resetGameAsk" class="danger">${ICON.undo} Reset game</button>` : ''}<button data-act="goHomeArmies">${ICON.home} Home</button></div>`;
    } else if (sh.type === 'umenu' && r) {
      const u = r.units.find(x => x.instanceId === sh.id); if (!u) { S.sheet = null; return ''; }
      title = `${esc(dispName(r, u))} <span class="dim num" style="font-weight:600">· ${(rosterPts(r).per[u.instanceId] || { total: 0 }).total} pts</span>`;
      inner = `<div class="mmenu"><button data-act="openUnit" data-id="${u.instanceId}">${ICON.edit} Edit unit</button><button data-act="openInst" data-id="${u.instanceId}">${ICON.info} Datasheet</button><button data-act="dupUnit" data-id="${u.instanceId}">${ICON.dup} Duplicate</button><button class="danger" data-act="removeUnit" data-id="${u.instanceId}">${ICON.trash} Remove</button></div>`;
    } else if (sh.type === 'rmenu') {
      const x = rosters.find(q => q.id === sh.id); if (!x) { S.sheet = null; return ''; }
      title = esc(x.name);
      inner = `<div class="mmenu"><button data-act="openRoster" data-id="${x.id}">${ICON.list} Open</button><button data-act="rosterDup" data-id="${x.id}">${ICON.dup} Duplicate</button><button data-act="renameSheet" data-id="${x.id}">${ICON.edit} Rename</button><button data-act="exportRoster" data-id="${x.id}">${ICON.share} Export / Share</button><button class="danger" data-act="rosterDelAsk" data-id="${x.id}">${ICON.trash} Delete</button></div>`;
    } else if (sh.type === 'rename') {
      const x = rosters.find(q => q.id === sh.id); if (!x) { S.sheet = null; return ''; }
      title = 'Rename roster';
      inner = `<input type="text" id="sheet-rename" value="${esc(sh.value != null ? sh.value : x.name)}" aria-label="Roster name" autocomplete="off" enterkeyhint="done"><div class="row sheet-btns"><button class="btn" data-act="closeSheet">Cancel</button><button class="btn primary" data-act="renameSave" data-id="${x.id}">Save</button></div>`;
    } else if (sh.type === 'confirm') {
      title = esc(sh.title);
      inner = `<p style="margin:0">${esc(sh.text)}</p><div class="row sheet-btns"><button class="btn" data-act="closeSheet">${esc(sh.no || 'Cancel')}</button><button class="btn danger solid" data-act="${sh.act}" data-id="${esc(sh.id || '')}">${esc(sh.yes)}</button></div>`;
    } else if (sh.type === 'msetup' && r && S.msd) { title = 'Mission set-up'; inner = msSetupInner(r);
    } else if (sh.type === 'mvp' && S.play && S.play.ms) { title = 'Your VP'; inner = msVpInner(S.play);
    } else if (sh.type === 'minfo') { title = esc(msCard(sh.k, sh.id).name); inner = msInfoInner(sh);
    } else if (sh.type === 'mpick' && S.play && S.play.ms) { title = sh.replace ? 'Which card did you draw?' : `Card ${Math.min(2, (S.play.ms.drawn[S.play.round] || 0) + 1)} of 2`; inner = msPickInner(S.play);
    } else if (sh.type === 'mbeacon' && r && S.play) { title = 'Beacon unit'; inner = msBeaconInner(r, S.play, sh.i);
    } else if (sh.type === 'mswap' && S.play && S.play.ms) { title = 'New card · 1CP'; inner = msSwapInner(S.play);
    } else if (sh.type === 'tip') {
      title = esc(sh.title || 'Rule');
      inner = `<p style="margin:0;font-size:1.05rem;line-height:1.5">${esc(sh.text)}</p>`;
    }
    return `<div class="sheet-back" data-act="sheetBack" data-type="${esc(sh.type)}"><div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sh-t"><div class="sheet-grip" aria-hidden="true"><i></i></div><div class="sheet-head"><h2 id="sh-t">${title}</h2><button class="iconbtn" data-act="closeSheet" aria-label="Close">${ICON.close}</button></div><div class="sheet-body">${inner}</div></div></div>`;
  }
  /* one Back for everything: Android system Back, Escape, and the ← buttons */
  function goBack() {
    if (document.getElementById('tip')) { hideTip(); return true; }
    if (S.sheet) { S.sheet = null; render(); return true; }
    if (S.modal) { S.modal = null; render(); return true; }
    if (S.renaming) { S.renaming = false; render(); return true; }
    if (S.view === 'roster') {
      if (S.sub) { A.closeSub(); return true; }
      if (S.tab !== 'build' && S.m) { A.rosterTab({ dataset: { id: 'build' } }); return true; }
      leaveRoster(); return true;
    }
    if (S.view === 'wizard') { if (S.draft && S.draft.editing) go('roster'); else go('faction'); return true; }
    if (S.view === 'faction') { go('home'); return true; }
    if (S.view === 'home' && S.homeTab !== 'armies') { S.homeTab = 'armies'; render(); return true; }
    return false;
  }
  const atRoot = () => S.view === 'home' && S.homeTab === 'armies' && !S.sheet && !S.modal && !document.getElementById('tip');
  /* Web app (PWA, browser tab): system Back and the browser's swipe-back step back one screen instead of leaving.
     One spare history entry is kept while there is somewhere to go back to; at the Armies home Back leaves as usual. */
  const HIST = !NATIVE && window.top === window && !!(window.history && history.pushState);
  let histArmed = false;
  function armHistory() { if (!HIST || histArmed || atRoot()) return; try { history.pushState({ sc: 1 }, ''); histArmed = true; } catch (e) { } }
  if (HIST) window.addEventListener('popstate', () => { histArmed = false; goBack(); armHistory(); });
  /* iPhone home-screen app has no browser swipe-back, so a swipe from the left edge does Back here.
     If iOS did its own history Back during the same swipe (popstate), ours is skipped. */
  if (HIST && window.navigator.standalone === true) {
    let sx = null, sy = 0, dx = 0, t0 = 0, lastPop = 0, hint = null;
    window.addEventListener('popstate', () => { lastPop = Date.now(); });
    const drop = () => { if (hint) hint.remove(); hint = null; sx = null; };
    document.addEventListener('touchstart', e => {
      const t = e.touches[0]; if (e.touches.length !== 1 || t.clientX > 22 || atRoot()) return;
      sx = t.clientX; sy = t.clientY; dx = 0; t0 = Date.now();
      hint = document.createElement('div'); hint.className = 'swipeback'; hint.innerHTML = ICON.back; document.body.appendChild(hint);
    }, { passive: true });
    document.addEventListener('touchmove', e => {
      if (sx == null) return; const t = e.touches[0]; dx = t.clientX - sx; const dy = Math.abs(t.clientY - sy);
      if (dy > 40 && dy > dx) { drop(); return; }
      const k = Math.max(0, Math.min(1, dx / 90)); hint.style.opacity = k; hint.style.transform = `translateX(${-50 + 56 * k}px)`;
    }, { passive: true });
    document.addEventListener('touchend', () => { if (sx == null) return; const go = dx >= 90; drop(); if (go) setTimeout(() => { if (lastPop < t0) goBack(); }, 320); }, { passive: true });
    document.addEventListener('touchcancel', drop, { passive: true });
  }
  function leaveRoster() {
    const from = S.rosterFrom;
    S.sub = null; S.renaming = false;
    if (from === 'home') go('home', { rosterId: null }); else go('faction', { factionId: (cur() || {}).factionId || S.factionId || 'worldEaters', rosterId: null });
  }
  window.__onNativeBack = () => { try { return goBack(); } catch (e) { return false; } };

  /* ---------------- render ---------------- */
  /* ---------------- portrait cropper ---------------- */
  const CROP = 280;
  function loadCropSrc(src, dirty) {
    const m = S.modal; if (!m || m.type !== 'portrait') return;
    const img = new Image();
    img.onload = () => { if (S.modal !== m) return; m.img = img; m.zoom = 1; m.base = Math.max(CROP / img.naturalWidth, CROP / img.naturalHeight); m.scale = m.base; m.ox = (CROP - img.naturalWidth * m.scale) / 2; m.oy = (CROP - img.naturalHeight * m.scale) / 2; m.dirty = dirty; render(); };
    img.onerror = () => toast('Could not open that image.');
    img.src = src;
  }
  function clampCrop(m) { const w = m.img.naturalWidth * m.scale, h = m.img.naturalHeight * m.scale; m.ox = Math.min(0, Math.max(CROP - w, m.ox)); m.oy = Math.min(0, Math.max(CROP - h, m.oy)); }
  function drawCrop() {
    const m = S.modal, cv = document.getElementById('crop-canvas'); if (!cv || !m) return;
    const dpr = window.devicePixelRatio || 1; if (cv.width !== CROP * dpr) { cv.width = cv.height = CROP * dpr; }
    const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.fillStyle = '#1c0507'; g.fillRect(0, 0, CROP, CROP);
    if (m.img) g.drawImage(m.img, m.ox, m.oy, m.img.naturalWidth * m.scale, m.img.naturalHeight * m.scale);
  }
  function wireCrop() {
    const m = S.modal, cv = document.getElementById('crop-canvas'); if (!cv) return;
    drawCrop();
    const zoom = document.getElementById('crop-zoom');
    if (zoom) zoom.oninput = () => { if (!m.img) return; const cx = CROP / 2, cy = CROP / 2; const old = m.scale; m.zoom = +zoom.value; m.scale = m.base * m.zoom; m.ox = cx - (cx - m.ox) * (m.scale / old); m.oy = cy - (cy - m.oy) * (m.scale / old); clampCrop(m); m.dirty = true; drawCrop(); const b = document.querySelector('[data-act="savePortrait"]'); if (b) b.disabled = false; };
    let drag = null;
    cv.onpointerdown = e => { if (!m.img) return; drag = { x: e.clientX, y: e.clientY, ox: m.ox, oy: m.oy }; cv.setPointerCapture(e.pointerId); e.preventDefault(); };
    cv.onpointermove = e => { if (!drag) return; const k = CROP / cv.getBoundingClientRect().width; m.ox = drag.ox + (e.clientX - drag.x) * k; m.oy = drag.oy + (e.clientY - drag.y) * k; clampCrop(m); m.dirty = true; drawCrop(); };
    cv.onpointerup = cv.onpointercancel = () => { if (drag) { drag = null; const b = document.querySelector('[data-act="savePortrait"]'); if (b && m.dirty) b.disabled = false; } };
    cv.onclick = e => e.stopPropagation();
  }
  const MQL = matchMedia('(max-width: 759.98px)'), MQ = () => MQL.matches;
  let lastKey = null;
  function screenKey() { return [S.view, S.rosterId, S.view === 'roster' ? S.tab : '', S.sub ? S.sub.type + (S.sub.id || '') : '', S.view === 'home' ? S.homeTab : '', S.view === 'faction' ? S.factionId : ''].join('|'); }
  function render() {
    S.m = MQ();
    const root = document.documentElement;
    root.classList.toggle('m', S.m);
    root.classList.toggle('android', PL.android);
    const key = screenKey();
    const y = window.scrollY;
    if (lastKey !== null && key !== lastKey) S.scrollMem[lastKey] = y;
    const focusId = document.activeElement && document.activeElement.id;
    const selStart = document.activeElement && document.activeElement.selectionStart;
    const modalScroll = document.querySelector('.modal') ? document.querySelector('.modal').scrollTop : 0;
    const shPrev = document.querySelector('.sheet-back'), shType = shPrev && shPrev.dataset.type, shBody = shPrev && shPrev.querySelector('.sheet-body'), shScroll = shBody ? shBody.scrollTop : 0;
    let html = '';
    if (S.view === 'home') html = viewHome();
    else if (S.view === 'faction') html = viewFaction();
    else if (S.view === 'wizard') html = viewWizard();
    else html = viewRoster();
    $app.innerHTML = html;
    /* the same sheet re-rendered after a tap inside it: no slide-in again, same scroll position */
    const shNow = document.querySelector('.sheet-back');
    if (shNow && shType && shNow.dataset.type === shType) { shNow.classList.add('still'); const b = shNow.querySelector('.sheet-body'); if (b) b.scrollTop = shScroll; }
    if (key !== lastKey || S.modal || S.sheet) { const t = document.querySelector('.toast'); if (t && !t.hidden) { t.hidden = true; clearTimeout(toastT); } }
    root.classList.toggle('has-fab', !!document.querySelector('.fab'));
    root.classList.toggle('has-mact', !!document.querySelector('.mact, .mfoot'));
    root.classList.toggle('has-err', !!document.querySelector('.errstrip'));
    root.classList.toggle('has-tabbar', !!document.querySelector('.tabbar'));
    document.body.style.overflow = S.modal || S.sheet ? 'hidden' : '';
    if (key !== lastKey) window.scrollTo(0, S.scrollMem[key] || 0); else window.scrollTo(0, y);
    lastKey = key;
    const md = document.querySelector('.modal'); if (md && S.keepModalScroll) md.scrollTop = modalScroll; S.keepModalScroll = false;
    if (focusId) { const el = document.getElementById(focusId); if (el) { el.focus({ preventScroll: true }); try { if (selStart != null && el.setSelectionRange) el.setSelectionRange(selStart, selStart); } catch (e) { } } }
    if (S.modal && S.modal.type === 'portrait') wireCrop();
    if (S.sheet) wireSheet();
    if (S.flash) { const n = document.getElementById('u-' + S.flash); const id = S.flash; if (n) n.scrollIntoView({ block: 'center' }); setTimeout(() => { if (S.flash === id) S.flash = null; }, 1600); }
    PL.keepAwake(S.view === 'roster' && S.tab === 'play');
    armHistory();
  }
  /* sheets close with a downward drag on the grip or header */
  function wireSheet() {
    const sh = document.querySelector('.sheet'); if (!sh) return;
    const grip = sh.querySelector('.sheet-grip'), head = sh.querySelector('.sheet-head');
    let st = null;
    const down = e => { st = { y: e.clientY, id: e.pointerId }; sh.style.transition = 'none'; };
    const move = e => { if (!st) return; const d = Math.max(0, e.clientY - st.y); sh.style.transform = `translateY(${d}px)`; };
    const up = e => { if (!st) return; const d = e.clientY - st.y; st = null; sh.style.transition = ''; if (d > 90) { S.sheet = null; render(); } else sh.style.transform = ''; };
    [grip, head].forEach(el => { if (!el) return; el.addEventListener('pointerdown', down); });
    window.onpointermove = move; window.onpointerup = up; window.onpointercancel = up;
    const inp = document.getElementById('sheet-rename'); if (inp && document.activeElement !== inp) { inp.focus(); inp.select(); }
  }
  function go(view, patch = {}) { Object.assign(S, { view }, patch); S.modal = null; S.sheet = null; S.sub = null; S.scrollMem[screenKey()] = 0; render(); }

  /* ---------------- backup & files ---------------- */
  function backupJSON() { return JSON.stringify({ scBackup: 1, app: 'Supreme Commander', savedAt: new Date().toISOString(), rosters: rosters.filter(r => !r.isExample), portraits: CUSTOM }); }
  /* enhancement / attachment pickers: a disabled choice explains why, otherwise set the field and close */
  function pickInto(el, field) {
    if (el.getAttribute('aria-disabled') === 'true') { const w = el.querySelector('.pick-why'); if (w) toast(w.textContent.replace('⚠ ', '')); PL.haptic('reject'); return; }
    const r = cur(); inst(el.dataset.id)[field] = el.dataset.v || null; S.openPick = null; S.sheet = null; touch(r); PL.haptic('confirm'); render();
  }
  async function saveText(fn, data) {
    if (PL.android) { AND.saveFile(fn, data); return; }
    try {
      if (!Store.downloads && window.mrSaveFile) { const path = await window.mrSaveFile(fn, data); toast(path ? 'Saved to ' + path : 'Saved.'); return; }
      if (Store.downloads) { await Store.downloads.save({ filename: fn, data }); toast('Saved.'); return; }
      const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' })); a.download = fn; document.body.appendChild(a); a.click(); a.remove();
    } catch (e) { if (e && e.code !== 'declined') toast('Saving is not available here. Use Copy.'); }
  }

  /* ---------------- actions ---------------- */
  function defaultName(fid, bsId) {
    const f = faction(fid), b = bsDef(bsId);
    const n = rosters.filter(r => r.factionId === fid).length + 1;
    return `${f.name} ${b.points} #${n}`;
  }
  function inst(id) { return cur().units.find(u => u.instanceId === id); }
  const A = {
    editPortrait: el => { const id = el.dataset.id; const def = unitDef(S.factionId, id); S.modal = { type: 'portrait', unitId: id, zoom: 1, dirty: false }; render(); loadCropSrc(CUSTOM[id] || (def.image && IMG[def.image]) || IMG._logo, false); },
    savePortrait: () => { const m = S.modal; if (!m || !m.img) return; const out = document.createElement('canvas'); out.width = out.height = 320; const k = 320 / CROP; const g = out.getContext('2d'); g.fillStyle = '#1c0507'; g.fillRect(0, 0, 320, 320); g.drawImage(m.img, m.ox * k, m.oy * k, m.img.naturalWidth * m.scale * k, m.img.naturalHeight * m.scale * k); let url = out.toDataURL('image/webp', 0.82); if (!url.startsWith('data:image/webp')) url = out.toDataURL('image/jpeg', 0.85); Portraits.set(m.unitId, url); S.modal = null; toast('Portrait saved.'); render(); },
    resetPortrait: async () => { const m = S.modal; await Portraits.clear(m.unitId); S.modal = null; toast('Default portrait restored.'); render(); },
    pickEnh: el => pickInto(el, 'enhancementId'),
    pickAtt: el => pickInto(el, 'attachedTo'),
    pickSheet: el => { S.sheet = { type: 'pick', kind: el.dataset.kind, id: el.dataset.id }; render(); },
    goBack: () => { goBack(); },
    closeSheet: () => { S.sheet = null; render(); },
    sheetBack: (el, ev) => { if (ev.target === el) { S.sheet = null; render(); } },
    openStatus: () => { S.sheet = { type: 'status' }; render(); },
    rosterMenu: () => { S.sheet = { type: 'menu' }; render(); },
    rosterMenu2: (el, ev) => { ev.stopPropagation(); S.sheet = { type: 'rmenu', id: el.dataset.id }; render(); },
    openCatalog: () => { S.sub = { type: 'catalog' }; render(); },
    openUnit: el => { S.sheet = null; S.sub = { type: 'unit', id: el.dataset.id }; render(); },
    unitMenu: el => { S.sheet = { type: 'umenu', id: el.dataset.id }; render(); },
    openSummary: () => { S.sheet = null; S.sub = { type: 'summary' }; render(); },
    closeSub: () => { const wasCat = S.sub && S.sub.type === 'catalog', wasUnit = S.sub && S.sub.type === 'unit' ? S.sub.id : null; S.sub = null; S.flash = wasCat ? S.lastAdded : wasUnit; S.lastAdded = null; render(); },
    renameSheet: el => { S.sheet = { type: 'rename', id: el.dataset.id }; render(); },
    renameSave: el => { const x = rosters.find(q => q.id === el.dataset.id); const v = (document.getElementById('sheet-rename') || {}).value; if (x) { x.name = (v || '').trim() || defaultName(x.factionId, x.battleSize); touch(x); } S.sheet = null; toast('Renamed.'); render(); },
    rosterDelAsk: el => { const x = rosters.find(q => q.id === el.dataset.id); S.sheet = { type: 'confirm', title: 'Delete roster?', text: `“${x.name}” and its game tracker will be deleted from this device. Export it first if you may want it back.`, yes: 'Delete roster', no: 'Keep it', act: 'rosterDelYes', id: x.id }; render(); },
    removeUnit: el => {
      const r = cur(), id = el.dataset.id, u = inst(id); if (!u) return;
      const before = JSON.stringify({ units: r.units, wl: r.warlordUnitId }), name = dispName(r, u);
      r.units = r.units.filter(x => x.instanceId !== id); r.units.forEach(x => { if (x.attachedTo === id) x.attachedTo = null; }); if (r.warlordUnitId === id) r.warlordUnitId = null;
      S.sub = null; S.sheet = null; touch(r); PL.haptic('confirm'); render();
      toast(`${name} removed.`, [{ label: 'Undo', fn: () => { const b = JSON.parse(before); r.units = b.units; r.warlordUnitId = b.wl; touch(r); S.flash = id; render(); } }]);
    },
    togglePick: el => { S.openPick = S.openPick === el.dataset.k ? null : el.dataset.k; render(); },
    pickOpt: el => { const r = cur(), u = inst(el.dataset.id); u.wargear = u.wargear || {}; u.wargear[el.dataset.o] = el.dataset.v; touch(r); render(); },
    goHomeArmies: () => { S.homeTab = 'armies'; go('home'); },
    resetGameAsk: () => { const p = playState(cur()); S.sheet = { type: 'confirm', title: 'Reset game?', text: `Round ${p.round}, ${p.cp} CP, VP ${p.vp[0]}:${p.vp[1]}, army trackers and all wounds go back to the start.`, yes: 'Reset game', no: 'Keep playing', act: 'resetGameYes' }; render(); },
    resetGameYes: () => { const r = cur(); S.sheet = null; lsDel(playKey(r.id)); S.play = null; playState(r); savePlay(r); toast('Game reset: round 1, Command phase, 1 CP, 0 VP, full wounds.'); render(); },
    homeTab: el => { S.homeTab = el.dataset.id; S.view = 'home'; render(); },
    goHome: () => go('home'),
    goFaction: () => { const r = cur(); go('faction', { factionId: r ? r.factionId : S.factionId || 'worldEaters', rosterId: null, renaming: false }); },
    openFaction: el => go('faction', { factionId: el.dataset.id, search: '' }),
    factionTab: el => { S.factionTab = el.dataset.id; render(); },
    newRoster: () => { S.draft = { factionId: S.factionId, name: defaultName(S.factionId, 'strike'), nameTouched: false, battleSize: 'strike', detachmentIds: [], forceDisposition: null }; go('wizard'); },
    editSetup: () => { const r = cur(); S.draft = { editing: true, factionId: r.factionId, name: r.name, nameTouched: true, battleSize: r.battleSize, detachmentIds: r.detachmentIds.slice(), forceDisposition: r.forceDisposition }; go('wizard'); },
    wizCancel: () => go('roster'),
    draftSize: el => { const d = S.draft; d.battleSize = el.dataset.id; if (!d.nameTouched) d.name = defaultName(d.factionId, d.battleSize); const fd = fdata(d.factionId); /* drop detachments that no longer fit */ const keep = []; d.detachmentIds.forEach(id => { const tmp = { ...d, detachmentIds: keep }; if (!detBlock(fd.detachments.find(x => x.id === id), tmp)) keep.push(id); }); if (keep.length !== d.detachmentIds.length) toast('Some detachments no longer fit and were removed.'); d.detachmentIds = keep; render(); },
    draftDet: el => { const d = S.draft, id = el.dataset.id; if (d.detachmentIds.includes(id)) d.detachmentIds = d.detachmentIds.filter(x => x !== id); else { const det = fdata(d.factionId).detachments.find(x => x.id === id); const why = detBlock(det, d); if (why) { toast(why); return; } d.detachmentIds.push(id); } render(); },
    draftDisp: el => { S.draft.forceDisposition = el.dataset.id; render(); },
    wizDone: () => {
      const d = S.draft;
      const name = d.name.trim() || defaultName(d.factionId, d.battleSize);
      if (d.editing) {
        const r = cur(); Object.assign(r, { name, battleSize: d.battleSize, detachmentIds: d.detachmentIds.slice(), forceDisposition: d.forceDisposition });
        const ctx = Engine.ctxFor(r, DATA); let dropped = 0;
        r.units.forEach(u => { if (u.enhancementId && !ctx.enhById[u.enhancementId]) { u.enhancementId = null; dropped++; } });
        touch(r); go('roster', { tab: 'build' }); if (dropped) toast(`${dropped} enhancement${dropped > 1 ? 's' : ''} removed: detachment no longer selected.`);
        return;
      }
      const r = { id: 'r' + uid(), name, factionId: d.factionId, battleSize: d.battleSize, detachmentIds: d.detachmentIds.slice(), forceDisposition: d.forceDisposition, warlordUnitId: null, units: [], notes: '', createdAt: Date.now(), updatedAt: Date.now(), dataVersion: Engine.dataVersionFor(d.factionId, DATA) };
      rosters.push(r); Store.save(r); go('roster', { rosterId: r.id, tab: 'build', cat: 'character', search: '' });
    },
    openRoster: el => { const r = rosters.find(x => x.id === el.dataset.id); if (!r) return; sortUnits(r); const from = S.view === 'home' ? 'home' : 'faction'; go('roster', { rosterId: r.id, factionId: r.factionId, tab: 'build', cat: 'all', search: '', rosterFrom: from, play: null, playFor: null }); if (r.dataVersion !== DATA.meta.dataVersion) toast('Built on older data. Check the Validation panel.'); },
    rosterDup: el => { const r = rosters.find(x => x.id === el.dataset.id); const c = JSON.parse(JSON.stringify(r)); c.id = 'r' + uid(); delete c.isExample; c.name = r.name + ' (copy)'; c.createdAt = c.updatedAt = Date.now(); rosters.push(c); Store.save(c); S.sheet = null; toast('Roster duplicated.'); render(); },
    rosterDelYes: el => { const id = el.dataset.id; rosters = rosters.filter(r => r.id !== id); Store.remove(id); lsDel(playKey(id)); S.sheet = null; toast('Roster deleted.'); render(); },
    startRename: () => { S.renaming = true; render(); const i = document.getElementById('roster-name'); if (i) { i.focus(); i.select(); } },
    rosterTab: el => { if (el.dataset.id === 'home') { S.homeTab = 'armies'; go('home'); return; } if (S.m && el.dataset.id === S.tab && !S.sub) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; } S.tab = el.dataset.id; S.modal = null; S.sheet = null; S.sub = null; render(); },
    cat: el => { S.cat = el.dataset.id; render(); },
    /* web app on a phone: fetch the newest build now; if nothing new arrives, drop the offline cache and reload from the site */
    /* web app: ask the site which build is live; same build -> say so, newer -> offer to update now */
    pwaUpdate: async () => {
      let live = '';
      try { live = ((await (await fetch('version.json?t=' + Date.now(), { cache: 'no-store' })).json()).build) || ''; } catch (e) { toast('No connection. The app keeps working offline.'); return; }
      if (live === window.SC_BUILD) { toast(`You have the latest version (${live}).`); return; }
      toast(`New version ${live} is available.`, [{ label: 'Update', fn: () => doPwaUpdate() }]);
    },
    toggleGrp: el => { const r = cur(); if (!r) return; const l = COLL[r.id] || []; COLL[r.id] = l.includes(el.dataset.id) ? l.filter(x => x !== el.dataset.id) : [...l, el.dataset.id]; lsSet(COLL_KEY, COLL); PL.haptic('tick'); render(); },
    addUnit: el => {
      if (el.getAttribute('aria-disabled') === 'true') { toast(el.closest('.additem').querySelector('.why').textContent); return; }
      const r = cur(), def = unitDef(r.factionId, el.dataset.id), u = newInstance(def);
      r.units.push(u);
      if (!r.warlordUnitId && !Engine.warlordBlock(def, u, Engine.ctxFor(r, DATA)) && def.faction === fdata(r.factionId).armyFaction) r.warlordUnitId = u.instanceId;
      touch(r); PL.haptic('confirm'); S.lastAdded = u.instanceId;
      if (S.m) toast(`${def.name} added.`, [{ label: 'Configure', fn: () => { S.sub = { type: 'unit', id: u.instanceId }; render(); } }, { label: 'Undo', fn: () => { r.units = r.units.filter(x => x.instanceId !== u.instanceId); if (r.warlordUnitId === u.instanceId) r.warlordUnitId = null; touch(r); render(); } }]);
      else toast(`${def.name} added.`);
      if (S.m && document.getElementById('cat-list')) { document.getElementById('cat-list').innerHTML = catalogList(r); const st = document.querySelector('.mbar .mstatus'); if (st) st.outerHTML = statusLine(r); } else render();
    },
    toggleUnit: el => { S.expanded[el.dataset.id] = !S.expanded[el.dataset.id]; render(); },
    setSize: el => { const r = cur(), u = inst(el.dataset.id); u.size = +el.dataset.v; clampWargear(unitDef(r.factionId, u.datasheetId), u); touch(r); render(); },
    optInc: el => { const r = cur(), u = inst(el.dataset.id), def = unitDef(r.factionId, u.datasheetId), o = def.options.find(x => x.id === el.dataset.o); u.wargear = u.wargear || {}; if ((+u.wargear[o.id] || 0) >= Engine.optionMax(o, u, def)) { toast('No more models can take this option.'); return; } u.wargear[o.id] = (+u.wargear[o.id] || 0) + 1; touch(r); render(); },
    optDec: el => { const r = cur(), u = inst(el.dataset.id); u.wargear = u.wargear || {}; u.wargear[el.dataset.o] = Math.max(0, (+u.wargear[el.dataset.o] || 0) - 1); touch(r); render(); },
    dupUnit: el => { const r = cur(), u = inst(el.dataset.id); const c = JSON.parse(JSON.stringify(u)); c.instanceId = uid(); c.enhancementId = null; c.attachedTo = null; r.units.splice(r.units.indexOf(u) + 1, 0, c); S.sheet = null; S.flash = c.instanceId; touch(r); PL.haptic('confirm'); if (S.m) toast('Duplicated (without enhancement or attachment).', [{ label: 'Open copy', fn: () => { S.sub = { type: 'unit', id: c.instanceId }; render(); } }]); else toast('Unit duplicated (without enhancement or attachment).'); render(); },
    openVal: () => { S.modal = { type: 'val' }; render(); },
    jumpUnit: el => { const id = el.dataset.id; S.modal = null; S.sheet = null; if (!id) { render(); return; } if (S.m) { S.tab = 'build'; S.sub = { type: 'unit', id }; render(); return; } S.tab = 'build'; S.expanded[id] = true; render(); const n = document.getElementById('u-' + id); if (n) { n.scrollIntoView({ block: 'center', behavior: 'smooth' }); n.querySelector('.uname').focus({ preventScroll: true }); } },
    openDs: el => { S.modal = { type: 'ds', unitId: el.dataset.id }; render(); },
    openInst: el => { const r = cur(); const list = (S.tab === 'list' ? r.units : rosterOrder(r)).map(u => u.instanceId); S.sheet = null; S.modal = { type: 'ds', instId: el.dataset.id, list }; render(); },
    dsNav: el => { const m = S.modal; const i = m.list.indexOf(m.instId) + +el.dataset.d; if (i >= 0 && i < m.list.length) { m.instId = m.list[i]; m.combined = false; render(); } },
    dsBuff: el => { S.dsBuff = el.dataset.v === '1'; S.keepModalScroll = true; render(); },
    dsAll: () => { S.dsAll = !S.dsAll; render(); },
    dsCombined: () => { S.modal.combined = !S.modal.combined; render(); },
    closeModal: () => { S.modal = null; hideTip(); render(); },
    closeModalBack: (el, ev) => { if (ev.target === el) A.closeModal(); },
    tip: (el, ev) => { ev.stopPropagation(); if (S.m) { const t = el.dataset.tip || '', ti = el.dataset.title || el.textContent.trim(); S.sheet = { type: 'tip', title: ti, text: t.startsWith(ti + ': ') ? t.slice(ti.length + 2) : t }; render(); return; } if (document.getElementById('tip') && S.tipFor === el) { hideTip(); S.tipFor = null; return; } S.tipFor = el; showTip(el, el.dataset.tip); },
    rulesSeg: el => { S.rulesSeg = el.dataset.id; render(); },
    stratPhase: el => { S.stratPhase = el.dataset.id; render(); },
    stratSrc: el => { S.stratSrc = el.dataset.id; render(); },
    exportRoster: el => { S.sheet = null; S.modal = { type: 'export', rosterId: el.dataset.id, fmt: 'gw' }; render(); },
    expFmt: el => { S.modal.fmt = el.dataset.id; render(); },
    copyExport: () => { const ta = document.getElementById('exp-text'); const t = ta.value; const fb = () => { ta.focus(); ta.select(); toast(S.m ? 'Selected. Long-press and choose Copy.' : 'Selected. Press Ctrl/Cmd+C to copy.'); }; PL.copy(t).then(ok => { if (!ok) return fb(); PL.haptic('confirm'); if (!(PL.android && PL.sdk >= 33)) toast('Copied.'); }); },
    shareExport: () => { const m = S.modal, r = rosters.find(x => x.id === m.rosterId); PL.share(r.name, document.getElementById('exp-text').value); },
    openBackup: () => { S.modal = { type: 'backup' }; render(); },
    shareBackup: () => PL.share('Supreme Commander backup', backupJSON()),
    copyBackup: () => PL.copy(backupJSON()).then(ok => { if (ok && !(PL.android && PL.sdk >= 33)) toast('Copied.'); if (!ok) toast('Copy is not available here. Use Save or Share.'); }),
    saveBackup: () => saveText('supreme-commander-backup-' + new Date().toISOString().slice(0, 10) + '.json', backupJSON()),
    pasteImport: () => PL.paste().then(t => { if (!t) { toast('The clipboard is empty or not readable. Long-press the box and choose Paste.'); return; } S.modal = { type: 'import', text: t }; render(); }),
    downloadExport: () => { const m = S.modal, r = rosters.find(x => x.id === m.rosterId); const json = m.fmt === 'json'; saveText(r.name.replace(/[^\w\- ]+/g, '').trim().replace(/\s+/g, '_') + (json ? '.json' : '.txt'), json ? JSON.stringify(r, null, 1) : document.getElementById('exp-text').value); },
    openImport: () => { S.modal = { type: 'import' }; render(); },
    doImport: () => {
      const txt = document.getElementById('imp-text').value.trim();
      let r;
      try { r = JSON.parse(txt.startsWith('MR1:') ? decodeURIComponent(escape(atob(txt.slice(4)))) : txt); } catch (e) { S.modal = { type: 'import', text: txt, error: 'This is not a valid share code or roster JSON. Copy the whole code, including MR1:.' }; render(); return; }
      if (r && (r.scBackup || Array.isArray(r))) {
        const list = (Array.isArray(r) ? r : r.rosters || []).filter(x => x && Array.isArray(x.units) && x.factionId && DATA.factionData[x.factionId]);
        let added = 0, updated = 0;
        list.forEach(x => { const old = rosters.find(q => q.id === x.id); if (old) { if ((old.updatedAt || 0) < (x.updatedAt || 0)) { Object.assign(old, x); Store.save(old); updated++; } } else { delete x.isExample; rosters.push(x); Store.save(x); added++; } });
        if (r.portraits && typeof r.portraits === 'object') Object.entries(r.portraits).forEach(([k, v]) => { if (typeof v === 'string' && v.startsWith('data:image/') && !CUSTOM[k]) Portraits.set(k, v); });
        S.modal = null; S.homeTab = 'rosters'; go('home'); toast(`Backup restored: ${added} new, ${updated} updated.`); return;
      }
      if (!r || !Array.isArray(r.units) || !r.factionId || !DATA.factionData[r.factionId]) { S.modal = { type: 'import', text: txt, error: 'The code was read, but it is not a roster for an available army.' }; render(); return; }
      r.id = 'r' + uid(); delete r.isExample; r.name = r.name || defaultName(r.factionId, r.battleSize || 'strike'); r.updatedAt = Date.now(); r.createdAt = r.createdAt || Date.now(); r.detachmentIds = r.detachmentIds || [];
      rosters.push(r); Store.save(r); toast(r.dataVersion !== Engine.dataVersionFor(r.factionId, DATA) ? 'Imported. It was built on other data; check validation.' : 'Roster imported.'); go('roster', { rosterId: r.id, factionId: r.factionId, tab: 'build' });
    },
    // missions
    msSetup: () => {
      const r = cur(), p = playState(r), ms = p.ms, ds = rosterDisps(r);
      S.msd = ms ? { myDisp: ms.myDisp, oppDisp: ms.oppDisp, twistOn: !!ms.twist, twist: ms.twist, mirror: ms.mirror, deploy: ms.deploy, secMode: ms.secMode, deckMode: ms.deckMode, fixed: ms.secMode === 'fixed' ? ms.hand.map(h => h.id) : [], painted: ms.painted, event: ms.event }
        : { myDisp: ds.includes(r.forceDisposition) ? r.forceDisposition : (ds.length === 1 ? ds[0] : null), oppDisp: null, twistOn: false, twist: null, mirror: null, deploy: null, secMode: 'tactical', deckMode: 'app', fixed: [], painted: false, event: false };
      S.sheet = { type: 'msetup' }; render();
    },
    msSkip: () => { const r = cur(); playChange(r, p => { p.msSkip = true; }); },
    msdMy: el => { S.msd.myDisp = el.dataset.id; render(); },
    msdOpp: el => { S.msd.oppDisp = el.dataset.id; render(); },
    msdTog: el => { const k = el.dataset.id; S.msd[k] = !S.msd[k]; if (k === 'twistOn' && !S.msd.twistOn) { S.msd.twist = null; S.msd.mirror = null; } if (k === 'event' && S.msd.event) { S.msd.twistOn = false; S.msd.twist = null; S.msd.mirror = null; S.msd.deploy = null; } render(); },
    msdTwist: el => { S.msd.twist = S.msd.twist === el.dataset.id ? null : el.dataset.id; if (S.msd.twist !== 'mirrored_world') S.msd.mirror = null; render(); },
    msdMirror: el => { S.msd.mirror = el.dataset.id; render(); },
    msdDeploy: el => { S.msd.deploy = el.dataset.id || null; render(); },
    msdDeployDraw: () => { S.msd.deploy = Missions.DEPLOYMENTS[Math.floor(Math.random() * Missions.DEPLOYMENTS.length)]; toast(`Deployment: ${S.msd.deploy}.`); render(); },
    msdSec: el => { S.msd.secMode = el.dataset.id; render(); },
    msdDeck: el => { S.msd.deckMode = el.dataset.id; render(); },
    msdFixed: el => { const f = S.msd.fixed, id = el.dataset.id; if (f.includes(id)) f.splice(f.indexOf(id), 1); else { if (f.length >= 2) f.shift(); f.push(id); } render(); },
    msStart: () => {
      const r = cur(), d = S.msd; S.sheet = null; S.mpend = {};
      playChange(r, p => {
        const tac = d.secMode === 'tactical';
        p.ms = { on: true, myDisp: d.myDisp, oppDisp: d.oppDisp, twist: d.twistOn ? d.twist : null, mirror: d.twistOn && d.twist === 'mirrored_world' ? d.mirror : null, deploy: d.deploy, secMode: d.secMode, deckMode: tac ? d.deckMode : null,
          deck: tac ? (d.deckMode === 'real' ? Missions.SEC_IDS.slice() : Missions.newDeck()) : [], hand: tac ? [] : d.fixed.map(id => ({ id })), discard: [], drawn: {}, swapUsed: false, cpTurn: null, log: [], painted: !!d.painted, event: !!d.event };
        delete p.msSkip; msSync(p);
      }, () => { const pr = Missions.primaries(S.play.ms); return `Primary Mission: ${Missions.P[pr.mine].name}.`; }, 'confirm');
    },
    msOffAsk: () => { S.sheet = { type: 'confirm', title: 'Turn missions off?', text: 'Mission scores are cleared and VP go back to a plain counter. Your current VP total stays.', yes: 'Missions off', no: 'Keep missions', act: 'msOff' }; render(); },
    msOff: () => { const r = cur(); S.sheet = null; playChange(r, p => { delete p.ms; p.msSkip = true; }, 'Missions off: VP are counted by hand.'); },
    msCollapse: () => { S.msCollapsed = !S.msCollapsed; render(); },
    msAllT: () => { S.msAll = !S.msAll; render(); },
    msVp: () => { S.sheet = { type: 'mvp' }; render(); },
    msInfo: el => { S.sheet = { type: 'minfo', k: el.dataset.k, id: el.dataset.id }; render(); },
    msPainted: () => { const r = cur(); playChange(r, p => { p.ms.painted = !p.ms.painted; msSync(p); }); },
    msPend: el => { const v = S.mpend[el.dataset.key]; if (!v) return; const f = el.dataset.f; v[f] = f === 'f' ? el.dataset.val === '1' : +el.dataset.val; render(); },
    msScore: el => {
      const r = cur(), src = el.dataset.src, card = el.dataset.card, w = el.dataset.w, c = msCard(src, card), ln = c.lines.find(l => l.id === el.dataset.line);
      const v = el.dataset.pend ? S.mpend[el.dataset.pend] : JSON.parse(el.dataset.v || '{}');
      const raw = Missions.lineVp(ln, v); if (!(raw > 0)) { PL.haptic('reject'); return; }
      let applied = 0;
      playChange(r, p => {
        const ms = p.ms, key = msKey(src, card, ln.id, p.round, w);
        if (ms.log.some(e => e.key === key)) return false;
        const e = { key, src, card, line: ln.id, raw, round: p.round, w, eob: w === 'eob' };
        if (src === 'S' && ms.secMode === 'tactical') { const i = ms.hand.findIndex(h => h.id === card); if (i >= 0) { e.disc = ms.hand[i]; ms.hand.splice(i, 1); ms.discard.push(card); } }
        ms.log.push(e); if (el.dataset.pend) delete S.mpend[el.dataset.pend]; msSync(p);
        applied = Missions.tally(ms).entries.find(x => x.key === key).applied;
      }, () => `+${applied} VP · ${c.name}${applied < raw ? ` (${raw - applied} over the limit)` : ''}${src === 'S' && S.play.ms.secMode === 'tactical' ? ': achieved, discarded' : ''}.`, 'confirm');
    },
    msUnscore: el => {
      const r = cur(), key = el.dataset.key;
      playChange(r, p => {
        const ms = p.ms, i = ms.log.findIndex(e => e.key === key); if (i < 0) return false;
        const e = ms.log.splice(i, 1)[0];
        if (e.disc && !ms.hand.some(h => h.id === e.card)) { ms.hand.push(e.disc); const di = ms.discard.lastIndexOf(e.card); if (di >= 0) ms.discard.splice(di, 1); }
        msSync(p);
      }, 'Score removed.');
    },
    msDraw: () => {
      const r = cur(); let names = [];
      playChange(r, p => {
        const ms = p.ms, left = Math.min(2 - (ms.drawn[p.round] || 0), ms.deck.length); if (left <= 0) return false;
        for (let k = 0; k < left; k++) { const id = ms.deck.shift(); ms.hand.push({ id, wd: Missions.wdPrompt(ms, id, p.round) }); names.push(Missions.S[id].name); }
        ms.drawn[p.round] = (ms.drawn[p.round] || 0) + left;
      }, () => `Drawn: ${names.join(', ')}.`, 'confirm');
    },
    msPickAsk: () => { S.sheet = { type: 'mpick' }; render(); },
    msPick: el => {
      const r = cur(), id = el.dataset.id, ctx = S.sheet && S.sheet.replace;
      playChange(r, p => {
        const ms = p.ms, i = ms.deck.indexOf(id); if (i < 0) return false;
        ms.deck.splice(i, 1); ms.hand.push({ id, wd: Missions.wdPrompt(ms, id, p.round) });
        if (!ctx) ms.drawn[p.round] = (ms.drawn[p.round] || 0) + 1;
        S.sheet = !ctx && (ms.drawn[p.round] || 0) < 2 && ms.deck.length ? { type: 'mpick' } : null;
      }, `Drawn: ${Missions.S[id].name}.`, 'confirm');
    },
    msWdKeep: el => { const r = cur(), i = +el.dataset.i; playChange(r, p => { const h = p.ms.hand[i]; if (!h) return false; h.wd = null; }); },
    /* the card leaves the hand (back into the deck, or into the discard pile) and a replacement is drawn */
    msWdBack: el => msReplace(+el.dataset.i, 'back'),
    msWdDiscard: el => msReplace(+el.dataset.i, 'discard'),
    msBeaconAsk: el => { S.sheet = { type: 'mbeacon', i: +el.dataset.i }; render(); },
    msBeacon: el => { const r = cur(), i = +el.dataset.i, id = el.dataset.id; S.sheet = null; playChange(r, p => { const h = p.ms.hand[i]; if (!h) return false; h.beacon = id; h.wd = null; }, 'Beacon unit chosen. It cannot be replaced if it dies.'); },
    msSwapAsk: () => { if (S.play.cp < 1) { toast('You need 1CP for a new card.'); PL.haptic('reject'); return; } S.sheet = { type: 'mswap' }; render(); },
    msSwap: el => {
      const i = +el.dataset.i; S.sheet = null;
      if (S.play.cp < 1) { toast('You need 1CP for a new card.'); return; }
      msReplace(i, 'discard', true);
    },
    msDiscard: el => {
      const r = cur(), i = +el.dataset.i; let cp = false, name = '';
      playChange(r, p => {
        const ms = p.ms, h = ms.hand[i]; if (!h) return false;
        name = Missions.S[h.id].name; ms.hand.splice(i, 1); ms.discard.push(h.id);
        if (ms.cpTurn !== p.round) { ms.cpTurn = p.round; p.cp += 1; cp = true; }
      }, () => `${name} discarded${cp ? ': +1 CP' : ''}.`);
    },
    // play
    pc: el => { const r = cur(), d = +el.dataset.d, k = el.dataset.k; playChange(r, p => {
      if (k === 'cp') { if (p.cp + d < 0) return false; p.cp += d; }
      if (k === 'round') { const n = Math.min(5, Math.max(1, p.round + d)); if (n === p.round) return false; p.round = n; if (d > 0) { p.active = []; } }
      if (k === 'vp0' || k === 'vp1') { const i = k === 'vp0' ? 0 : 1; if (p.vp[i] + d < 0) return false; p.vp[i] += d; }
      if (k === 'tunnels') { const n = Math.max(0, Math.min(20, (p.tunnels || 0) + d)); if (n === (p.tunnels || 0)) return false; p.tunnels = n; }
    }); },
    tyrShadow: el => {
      if (el.getAttribute('aria-disabled') === 'true') { if (S.play && S.play.shadow) return; toast(S.play && S.play.phase !== 'Command' ? 'Unleash it in a Command phase (either player).' : 'No unit in this roster has Shadow in the Warp.'); PL.haptic('reject'); return; }
      const r = cur(), box = el.getBoundingClientRect(); S.shadowFx = true;
      playChange(r, p => { if (p.shadow) return false; p.shadow = p.round; }, 'Shadow in the Warp unleashed: every enemy unit takes a battle-shock test.', 'reject');
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) voidScream(box.left + box.width / 2, box.top + box.height / 2);
      if (PL.android) { [0, 260, 560, 900, 1300].forEach(t => setTimeout(() => PL.haptic('reject'), t)); } else { try { navigator.vibrate && navigator.vibrate([90, 60, 140, 60, 200, 80, 260]); } catch (e) { } }
      setTimeout(() => { S.shadowFx = false; document.querySelectorAll('.voidbtn.scream').forEach(b => b.classList.remove('scream')); }, 2600);
    },
    tyrHyper: el => { if (el.getAttribute('aria-disabled') === 'true') { toast('The Hyper-adaptation was picked at the start of round 1.'); PL.haptic('reject'); return; } const r = cur(); playChange(r, p => { p.hyper = p.hyper === el.dataset.id ? null : el.dataset.id; if (p.hyperExtra && p.hyperExtra.id === p.hyper) p.hyperExtra = null; }); },
    tyrHyperX: el => { const r = cur(); playChange(r, p => { p.hyperExtra = p.hyperExtra && p.hyperExtra.id === el.dataset.id ? null : { id: el.dataset.id, round: p.round }; }); },
    tyrImp: el => { const r = cur(); playChange(r, p => { p.imp = p.imp || {}; if (p.imp[p.round] === el.dataset.id) delete p.imp[p.round]; else p.imp[p.round] = el.dataset.id; }, null, 'confirm'); },
    tyrProtean: el => { const r = cur(); playChange(r, p => { p.protean = p.protean || {}; if (p.protean[el.dataset.id]) delete p.protean[el.dataset.id]; else p.protean[el.dataset.id] = p.round; }); },
    plPhase: el => { const r = cur(); playChange(r, p => { p.phase = el.dataset.id; }); },
    plTurn: el => { const r = cur(); playChange(r, p => { p.turn = el.dataset.id; }); },
    plFirst: el => { const r = cur(); playChange(r, p => { p.first = el.dataset.id; p.turn = el.dataset.id; }); },
    playSeg: el => { S.playSeg = el.dataset.id; render(); },
    resumeGame: () => { const r = cur(); playChange(r, p => { if (!p.over) return false; p.over = false; }, 'Back in battle round 5. VP can still be corrected.'); },
    nextPhase: () => {
      const r = cur(); let msg = '';
      if (playState(r).over) { toast('The game is over. Use “Back to round 5” or reset the game.'); PL.haptic('reject'); return; }
      playChange(r, p => {
        let i = PHASES.indexOf(p.phase) + 1;
        if (i >= PHASES.length) {
          const nt = p.turn === 'opp' ? 'mine' : 'opp';
          if (nt === (p.first || 'mine') && p.round >= 5) { p.over = true; msg = `Battle round 5 is over: the game ends. VP ${p.vp[0]} : ${p.vp[1]}.`; return; }
          i = 0; p.turn = nt;
          if (p.turn === (p.first || 'mine')) { p.round++; p.active = []; }
        }
        p.phase = PHASES[i];
        if (p.phase === 'Command') { p.cp += 1; if (p.turn !== 'opp') p.hyperExtra = null; msg = `${p.turn === 'opp' ? "Opponent's" : 'Your'} Command phase, round ${p.round}: +1 CP.${roundHint(r, p)}${p.turn !== 'opp' && p.ms && p.ms.secMode === 'tactical' ? ' Draw 2 Secondary Missions.' : ''}`; }
        else msg = `${p.turn === 'opp' ? "Opponent's" : 'Your'} ${p.phase} phase.`
        if (p.phase === 'Shooting' && p.turn !== 'opp' && fdata(r.factionId).armyRules.some(a => a.rituals)) msg += ' Attempt Rituals first.';
      }, () => msg, 'confirm');
    },
    dgPlague: el => {
      const r = cur(), id = el.dataset.id, p = playState(r);
      if (el.getAttribute('aria-disabled') === 'true') { toast('The Plague is set for the battle.'); PL.haptic('reject'); return; }
      if (p.plague === id) return;
      p.plague = id; p.plagueAt = p.round; p.plagueLog = Object.assign(p.plagueLog || {}, { [p.round]: id });
      savePlay(r); PL.haptic('confirm'); patchPlague(r, id);
    },
    dgPox: el => { if (el.getAttribute('aria-disabled') === 'true') { toast('That battle round has not started yet.'); PL.haptic('reject'); return; } const r = cur(), rd = +el.dataset.id; playChange(r, p => { p.pox = p.pox || {}; if (p.pox[rd]) delete p.pox[rd]; else p.pox[rd] = true; }, null, 'confirm'); },
    tsKin: el => {
      if (el.getAttribute('aria-disabled') === 'true') { toast('Each Kindred Sorcery only once per battle.'); PL.haptic('reject'); return; }
      const r = cur(), id = el.dataset.id, on = (playState(r).imp || {})[playState(r).round] !== id;
      playChange(r, p => { p.imp = p.imp || {}; if (p.imp[p.round] === id) delete p.imp[p.round]; else p.imp[p.round] = id; }, null, 'confirm');
      if (on) { const c = document.querySelector(`.kin[data-id="${id}"]`); if (c) sigilFx(c); }
    },
    tsRit: el => {
      const r = cur(), id = el.dataset.id, p = playState(r);
      if (((p.rit || {})[p.round] || {})[id]) { playChange(r, p => { delete p.rit[p.round][id]; }, 'Ritual result cleared.'); return; }
      S.ritOpen = S.ritOpen === id ? null : id; S.ritBy = null; PL.haptic('tick'); render();
    },
    tsRitBy: el => { if (el.getAttribute('aria-disabled') === 'true') { toast('That model already attempted a Ritual this turn.'); PL.haptic('reject'); return; } S.ritBy = S.ritBy === el.dataset.id ? null : el.dataset.id; PL.haptic('tick'); render(); },
    tsRitClose: () => { S.ritOpen = S.ritBy = null; render(); },
    tsRitRes: el => {
      if (!S.ritBy) { toast('Pick who attempts the Ritual.'); PL.haptic('reject'); return; }
      const r = cur(), id = S.ritOpen, by = S.ritBy, ok = el.dataset.id === 'ok', fd = fdata(r.factionId);
      const x = fd.armyRules.find(a => a.rituals).rituals.find(q => q.id === id), u = r.units.find(q => q.instanceId === by), def = unitDef(r.factionId, u.datasheetId);
      let msg = `${x.name}: ${ok ? 'manifested' : 'failed'}.`;
      const regen = r.detachmentIds.some(d => (fd.detachments.find(q => q.id === d) || {}).regenHint), ctx = Engine.ctxFor(r, DATA);
      if (ok && regen && def.faction === fd.armyFaction && Engine.hasKw(def, ctx, 'Psyker', u) && !Engine.hasKw(def, ctx, 'Monster', u))
        msg += ` Sorcerous Invigoration: ${dispName(r, u)} heals D3 wounds${Engine.enhIds(u).includes('curse_of_life') ? ' (+3 with Curse of Life)' : ''}.`;
      S.ritOpen = S.ritBy = null;
      playChange(r, p => { p.rit = p.rit || {}; (p.rit[p.round] = p.rit[p.round] || {})[id] = { by, ok }; }, msg, ok ? 'confirm' : 'tick');
      if (ok) { const c = document.querySelector(`.rit[data-id="${id}"]`); if (c) warpfire(c); }
    },
    dgPests: () => { const r = cur(); playChange(r, p => { p.pests = p.pests ? null : p.round; }, null, 'confirm'); },
    blessPick: el => {
      const r = cur(), id = el.dataset.id, p = playState(r);
      p.active = p.active || [];
      const on = !p.active.includes(id);
      p.active = on ? [...p.active, id] : p.active.filter(x => x !== id);
      savePlay(r); PL.haptic(on ? 'confirm' : 'tick');
      patchBlessings(r, on ? id : null);
    },
    mw: el => { const r = cur(), u = inst(el.dataset.id), def = unitDef(r.factionId, u.datasheetId); const W = parseInt(def.profile.W, 10) || 1; const i = +el.dataset.i; playChange(r, p => { const wl = woundsOf(p, u, W, def); const n = Math.min(maxW(def, i), Math.max(0, wl[i] + +el.dataset.d)); if (n === wl[i]) return false; wl[i] = n; }); },
    mAlive: el => { const r = cur(), u = inst(el.dataset.id); playChange(r, p => { const wl = woundsOf(p, u, 1); if (+el.dataset.d < 0) { const i = wl.findIndex(w => w > 0); if (i < 0) return false; wl[i] = 0; } else { const i = wl.findIndex(w => w <= 0); if (i < 0) return false; wl[i] = 1; } }); },
    /* phone wound buttons: −1 wound goes to the already wounded model first, then the next model;
       −1 model removes the wounded model first; + heals the wounded model or returns a model at full wounds */
    wnd: el => {
      const r = cur(), u = inst(el.dataset.id), def = unitDef(r.factionId, u.datasheetId), W = parseInt(def.profile.W, 10) || 1, d = +el.dataset.d, k = el.dataset.k;
      let msg = null;
      playChange(r, p => {
        const wl = woundsOf(p, u, W, def), mixed = mixedUnit(def, u);
        const g = mixed ? woundGroup(wl, def, u, wTarget(def, u, wl)) : wl.map((_, i) => i);
        const wi = g.find(i => wl[i] > 0 && wl[i] < maxW(def, i)), ai = g.find(i => wl[i] > 0), di = g.find(i => wl[i] <= 0);
        if (d < 0) {
          const i = wi != null ? wi : ai; if (i == null) return false;
          if (k === 'm') wl[i] = 0; else wl[i] -= 1;
          if (!wl.some(w => w > 0)) msg = `${dispName(r, u)} destroyed.`;
          else if (mixed && i === 0 && wl[0] <= 0) msg = `${def.leadModel.name} slain.`;
        } else {
          if (k === 'w' && wi != null) wl[wi] += 1; else if (di != null) wl[di] = k === 'w' && u.size === 1 ? 1 : maxW(def, di); else return false;
        }
      }, () => msg, d < 0 ? 'tick' : 'confirm');
    },
    wtgt: el => { S.wtgt = S.wtgt || {}; S.wtgt[el.dataset.id] = el.dataset.g; PL.haptic('tick'); render(); },
    resetWounds: () => { const r = cur(); playChange(r, p => { p.wounds = {}; }, 'Wounds reset.'); },
    stratMode: el => { S.stratMode = el.dataset.id; render(); },
    stratToggle: el => { S.stratOpen[el.dataset.id] = !S.stratOpen[el.dataset.id]; render(); },
    useStrat: el => {
      if (el.getAttribute('aria-disabled') === 'true') { toast('Already used this phase. Most stratagems can be used once per phase.'); PL.haptic('reject'); return; }
      const r = cur(), cp = +el.dataset.cp, key = el.dataset.id, name = key.split(':').slice(1).join(':');
      if (S.play.cp < cp) { toast(`Not enough CP: ${name} costs ${cp}, you have ${S.play.cp}.`); PL.haptic('reject'); return; }
      playChange(r, p => { p.cp -= cp; p.usedStrats[key] = `${p.round}-${p.turn}-${p.phase}`; }, `${name}: −${cp} CP.`, 'confirm');
    },
  };

  document.addEventListener('click', ev => {
    const el = ev.target.closest('[data-act]');
    if (!el) { hideTip(); return; }
    if (el.dataset.act !== 'tip') hideTip();
    const fn = A[el.dataset.act];
    if (fn) { if (el.dataset.act !== 'closeModalBack') ev.preventDefault(); fn(el, ev); }
  });
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape') { if (S.view === 'roster' && !S.sheet && !S.modal && !S.sub && !S.renaming && !document.getElementById('tip')) return; goBack(); }
    if (ev.key === 'Enter' && ev.target.id === 'sheet-rename') { ev.preventDefault(); const b = document.querySelector('[data-act="renameSave"]'); if (b) A.renameSave(b); }
    if (ev.key === 'Enter' && ev.target.id === 'roster-name') { ev.preventDefault(); ev.target.blur(); }
  });
  document.addEventListener('input', ev => {
    const el = ev.target, k = el.dataset && el.dataset.inp;
    if (!k) return;
    const r = cur();
    /* search boxes refresh only their result list, so the field (and the keyboard's composition) is never replaced */
    if (k === 'homeSearch') { S.homeSearch = el.value; const box = document.getElementById('roster-list'); if (box) box.innerHTML = rosterListInner(S.view === 'faction' ? S.factionId : null); else render(); }
    if (k === 'glossSearch') { S.glossSearch = el.value; const box = document.getElementById('gloss-list'); if (box) box.innerHTML = glossItems(glossFiltered()); else render(); }
    if (k === 'search') { S.search = el.value; const box = document.getElementById('cat-list'); if (box && r && S.view === 'roster') box.innerHTML = catalogList(r); else render(); }
    if (k === 'draftName') { S.draft.name = el.value; S.draft.nameTouched = true; const b = document.querySelector('[data-act="wizDone"]'); if (b) b.disabled = !(el.value.trim() && S.draft.detachmentIds.length && S.draft.forceDisposition); }
    if (k === 'rosterName' && r) { r.name = el.value; touch(r); }
    if (k === 'rosterNotes' && r) { r.notes = el.value; touch(r); }
  });
  document.addEventListener('focusout', ev => {
    const el = ev.target;
    if (el.id === 'roster-name') { const r = cur(); if (r && !r.name.trim()) { r.name = defaultName(r.factionId, r.battleSize); touch(r); } S.renaming = false; setTimeout(render, 0); }
    if (el.id === 'wiz-name' && S.draft && !S.draft.name.trim()) { S.draft.name = defaultName(S.draft.factionId, S.draft.battleSize); S.draft.nameTouched = false; setTimeout(render, 0); }
  });
  document.addEventListener('change', ev => {
    const el = ev.target, k = el.dataset && el.dataset.chg;
    if (!k) return;
    const r = cur();
    if (k === 'importFile') { const f = el.files && el.files[0]; if (!f) return; if (f.size > 20e6) { toast('That file is too large.'); return; } const rd = new FileReader(); rd.onload = () => { S.modal = { type: 'import', text: String(rd.result || '').trim() }; render(); }; rd.onerror = () => toast('Could not read that file.'); rd.readAsText(f); return; }
    if (k === 'portraitFile') { const f = el.files && el.files[0]; if (!f) return; if (!/^image\//.test(f.type)) { toast('That file is not an image.'); return; } const rd = new FileReader(); rd.onload = () => loadCropSrc(rd.result, true); rd.onerror = () => toast('Could not read that image.'); rd.readAsDataURL(f); return; }
    if (k === 'warlord') { r.warlordUnitId = el.checked ? el.dataset.id : null; touch(r); }
    if (k === 'grant') {
      const u = inst(el.dataset.id), def = unitDef(r.factionId, u.datasheetId), ctx = Engine.ctxFor(r, DATA);
      const g = Engine.grantsFor(def, ctx).find(x => x.id === el.dataset.g);
      if (!g) return;
      if (el.checked) {
        const n = r.units.filter(x => x.instanceId !== u.instanceId && (x.grants || []).includes(g.id)).length;
        if (g.max != null && n >= g.max) { el.checked = false; toast(`Up to ${g.max} units can have this.`); PL.haptic('reject'); return; }
        u.grants = [...new Set([...(u.grants || []), g.id])];
      } else {
        u.grants = (u.grants || []).filter(x => x !== g.id);
        if (g.keyword === 'Character') {
          if (r.warlordUnitId === u.instanceId) r.warlordUnitId = null;
          const e = u.enhancementId && ctx.allEnh[u.enhancementId]; if (e && !e.upgrade) u.enhancementId = null;
        }
      }
      touch(r); render(); return;
    }
    if (k === 'optToggle') { const u = inst(el.dataset.id); u.wargear = u.wargear || {}; u.wargear[el.dataset.o] = el.checked ? 1 : 0; clampWargear(unitDef(r.factionId, u.datasheetId), u); touch(r); }
    render();
  });

  /* keyboard open: hide the bottom bars so the field stays visible */
  document.addEventListener('focusin', ev => { if (ev.target.matches && ev.target.matches('input[type=text], input[type=search], textarea')) document.documentElement.classList.add('kb'); });
  document.addEventListener('focusout', () => setTimeout(() => { const a = document.activeElement; if (!(a && a.matches && a.matches('input[type=text], input[type=search], textarea'))) document.documentElement.classList.remove('kb'); }, 50));
  MQL.onchange = () => render();

  // Seed: first visit shows an example roster so the builder opens in a working state.
  if (!rosters.length && !lsGet('mr.seeded')) {
    lsSet('mr.seeded', true);
    const ex = { id: 'r' + uid(), name: 'Example: Berzerker spearhead', factionId: 'worldEaters', battleSize: 'strike', detachmentIds: ['berzerker_warband', 'vessels_of_wrath'], forceDisposition: 'Purge the Foe', warlordUnitId: null, units: [], notes: 'Example roster. Edit or delete it.', isExample: true, createdAt: Date.now(), updatedAt: Date.now() - 1000, dataVersion: DATA.meta.dataVersion };
    const add = (id, patch = {}) => { const def = unitDef('worldEaters', id); const u = Object.assign(newInstance(def), patch); ex.units.push(u); return u; };
    const b1 = add('khorne_berzerkers', { size: 10, wargear: { evisc: 2, icon: 1 } });
    const lord = add('lord_on_juggernaut', { enhancementId: 'berzerker_glaive', attachedTo: b1.instanceId });
    const b2 = add('khorne_berzerkers', { size: 10, wargear: { evisc: 2 } });
    add('master_of_executions', { attachedTo: b2.instanceId });
    add('angron'); add('chaos_rhino'); add('chaos_rhino'); add('eightbound', { size: 3 }); add('maulerfiend');
    ex.warlordUnitId = lord.instanceId;
    rosters.push(ex); lsSet(LS_KEY, rosters);
  }

  render();
  Store.init();
  try { if (sessionStorage.getItem('scUpdated')) { sessionStorage.removeItem('scUpdated'); toast(`Updated to version ${window.SC_BUILD || ''}.`); } } catch (e) { }
})();
