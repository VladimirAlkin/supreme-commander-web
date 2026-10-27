/* Data-driven roster engine: points, limits and validation. No DOM. */
const Engine = (function () {
  const ORD = n => n + (['th', 'st', 'nd', 'rd'][((n % 100) - 20) % 10] || ['th', 'st', 'nd', 'rd'][n % 100] || 'th');

  /* Units an army fields from another army BY REFERENCE (not copied): alliedFactions[].unitsFrom = {source, unitIds?, keywordsAny?, exclude?}.
     `source` is a factionData id; without `unitIds` the units whose own faction is the group's faction are taken, except units bound
     to one of the source's own sub-factions (its Chapters). `exclude: {unitIds?, keywordsAny?}` then takes listed units out of the pool.
     A missing source gives an empty list. Not transitive: a referenced unit's own alliedFactions are never followed. [{unit, group}] */
  const hasAny = (u, ks) => (ks || []).some(k => (u.keywords || []).some(x => x.toLowerCase() === k.toLowerCase()));
  function pickUnits(src, uf, faction) {
    if (!src || !Array.isArray(src.units) || !uf) return [];
    const ex = uf.exclude || {};
    return src.units.filter(u => {
      if (uf.unitIds ? !uf.unitIds.includes(u.id) : (u.faction !== faction || u.subfaction)) return false;
      if (uf.keywordsAny && !hasAny(u, uf.keywordsAny)) return false;
      return !(ex.unitIds || []).includes(u.id) && !hasAny(u, ex.keywordsAny);
    });
  }
  const _refs = new WeakMap();
  function refUnits(fd, DATA) {
    if (_refs.has(fd)) return _refs.get(fd);
    const out = [];
    (fd.alliedFactions || []).forEach(a => {
      const uf = a && a.unitsFrom;
      pickUnits(uf && DATA.factionData && DATA.factionData[uf.source], uf, a.faction).forEach(u => out.push({ unit: u, group: a }));
    });
    _refs.set(fd, out);
    return out;
  }

  /* An army built on another army's pool (a Chapter with its own book on Space Marines): fd.inherits = {source, exclude?:
     {unitIds?, keywordsAny?, detachmentIds?}}. The source's units of the same faction, its detachments and, when the army has none
     of its own, its army rules join the army BY REFERENCE (its highlighted terms are added to the army's own) (the same objects): an id the army has itself wins. Whatever is bound to
     one of the source's sub-factions stays with the source. Linked once per DATA; the joined arrays serialise as the army's own
     items only, so a tool that writes data.js never writes a copy. Not transitive: the source's own `inherits` is not followed. */
  const _linked = new WeakSet();
  function inherit(DATA) {
    if (!DATA || !DATA.factionData || _linked.has(DATA)) return DATA;
    _linked.add(DATA);
    const join = (orig, extra) => {
      const own = orig || [], ids = new Set(own.map(x => x.id)), all = own.concat(extra.filter(x => !ids.has(x.id)));
      Object.defineProperty(all, 'toJSON', { value: () => orig, enumerable: false });
      return all;
    };
    Object.keys(DATA.factionData).forEach(id => {
      const fd = DATA.factionData[id], inh = fd && fd.inherits, src = inh && DATA.factionData[inh.source];
      if (!src || src === fd) return;
      const ex = inh.exclude || {};
      fd.units = join(fd.units, pickUnits(src, { exclude: ex }, src.armyFaction));
      fd.detachments = join(fd.detachments, (src.detachments || []).filter(d => !d.subfaction && !(ex.detachmentIds || []).includes(d.id)));
      if (!(fd.armyRules || []).length && (src.armyRules || []).length) {
        const orig = fd.armyRules;
        fd.armyRules = src.armyRules.slice();
        Object.defineProperty(fd.armyRules, 'toJSON', { value: () => orig, enumerable: false });
      }
      if (!(fd.alliedFactions || []).length && (src.alliedFactions || []).length) {   // allies of the source army (Freeblades) by reference too
        const orig = fd.alliedFactions;
        fd.alliedFactions = src.alliedFactions.slice();
        Object.defineProperty(fd.alliedFactions, 'toJSON', { value: () => orig, enumerable: false });
      }
      if (Array.isArray(src.terms)) {   // highlighted phrases: the army's own plus the source's (its army rules come with them)
        const orig = fd.terms;
        fd.terms = [...new Set((orig || []).concat(src.terms))];
        Object.defineProperty(fd.terms, 'toJSON', { value: () => orig, enumerable: false });
      }
    });
    return DATA;
  }
  /* Bodyguard units a datasheet can lead in this army: its own leaderOf plus the army's fd.leaderOfExtra (a Chapter army whose
     shared characters lead its own squads: Dark Angels' Captain in Terminator Armour -> Deathwing Knights), so the source
     army's datasheets stay untouched. */
  function leadsOf(def, fd) { return [...new Set([...(def.leaderOf || []), ...(((fd && fd.leaderOfExtra) || {})[def.id] || [])])]; }
  /* Own datasheets plus referenced ones; an id the army already has always wins. */
  function unitsOf(fd, DATA) {
    const own = new Set(fd.units.map(u => u.id));
    return fd.units.concat(refUnits(fd, DATA).filter(r => !own.has(r.unit.id)).map(r => r.unit));
  }

  /* Sub-factions inside one army (Space Marines Chapters): fd.subfactions [{id, name, keyword}], a datasheet's or detachment's
     `subfaction` id, the roster's `subfaction` (null = none chosen). An item with a subfaction fits only a roster with that one. */
  const subOk = (x, roster) => !x || !x.subfaction || x.subfaction === (roster && roster.subfaction || null);
  function subName(fd, id) { const s = (fd.subfactions || []).find(x => x.id === id); return s ? s.name : id; }

  function ctxFor(roster, DATA) {
    inherit(DATA);
    const fd = DATA.factionData[roster.factionId];
    const bs = DATA.gameRules.battleSizes.find(b => b.id === roster.battleSize) || null;
    const dets = (roster.detachmentIds || []).map(id => fd.detachments.find(d => d.id === id)).filter(Boolean);
    const unitById = {};
    fd.units.forEach(u => (unitById[u.id] = u));
    const refGroup = {};
    refUnits(fd, DATA).forEach(r => { if (!unitById[r.unit.id]) { unitById[r.unit.id] = r.unit; refGroup[r.unit.id] = r.group; } });
    const enhById = {};
    dets.forEach(d => d.enhancements.forEach(e => (enhById[e.id] = { ...e, detachmentId: d.id })));
    const allEnh = {};
    fd.detachments.forEach(d => d.enhancements.forEach(e => (allEnh[e.id] = { ...e, detachmentId: d.id })));
    /* Add-ons a detachment gives to every eligible unit and charges for (Pantheon of Woe: Necrodermal Binding): enhancements flagged `binding`. */
    const bindings = dets.flatMap(d => (d.enhancements || []).filter(e => e.binding).map(e => ({ ...e, detachmentId: d.id })));
    return { DATA, fd, bs, dets, unitById, refGroup, enhById, allEnh, bindings, roster };
  }

  function enhIds(inst) {
    if (Array.isArray(inst.enhancementIds)) return inst.enhancementIds.filter(Boolean);
    return inst.enhancementId ? [inst.enhancementId] : [];
  }

  /* Per-instance keyword grants offered by a detachment (e.g. up to 2 Trygons become CHARACTER). */
  function instGrants(def, ctx, inst) {
    if (!inst || !inst.grants || !inst.grants.length) return [];
    return grantsFor(def, ctx).filter(g => inst.grants.includes(g.id));
  }
  /* a datasheet's own grants (e.g. Daemonic Allegiance) apply in every roster; a detachment's apply to the units it lists */
  function grantsFor(def, ctx) { return [...(def.instanceGrants || []), ...ctx.dets.flatMap(d => (d.instanceGrants || []).filter(g => g.unitIds.includes(def.id)))]; }
  function keywordsOf(def, ctx, inst) {
    const kw = new Set(def.keywords);
    /* The faction keyword (WORLD EATERS, BLOOD LEGIONS, ...) is a keyword in
       the rules, so "X model only" must match it. It lives in def.faction,
       and an enhancement's factionSwap replaces it. */
    const fac = inst ? factionOf(inst, def, ctx) : def.faction;
    if (fac) kw.add(keywordAsOf(ctx, fac));
    /* an army-wide keyword every own or inherited unit carries (fd.armyKeyword: DARK ANGELS), not its allies */
    if (ctx.fd && ctx.fd.armyKeyword && !(ctx.refGroup && ctx.refGroup[def.id])) kw.add(ctx.fd.armyKeyword);
    /* detachment grants apply while it is chosen; an army's own grants (fd.grantKeywords, same shape) apply to its units,
       referenced ones included (Dark Angels: listed ADEPTUS ASTARTES units gain DEATHWING) */
    [ctx.fd || {}].concat(ctx.dets).forEach(d => (d.grantKeywords || []).forEach(g => { if ((g.unitIds || []).includes(def.id)) kw.add(g.keyword); }));
    instGrants(def, ctx, inst).forEach(g => kw.add(g.keyword));
    // a wargear pick that gives its unit a keyword (T'au Marker drone: MARKERLIGHT)
    if (inst && inst.wargear) (def.options || []).forEach(o => { if (o.grantKeyword && (+inst.wargear[o.id] || 0) > 0) kw.add(o.grantKeyword); });
    if (inst) enhIds(inst).forEach(id => { const e = ctx.allEnh[id]; ((e && e.addKeywords) || []).forEach(k => kw.add(k)); });
    return kw;
  }
  function hasKw(def, ctx, k, inst) { return [...keywordsOf(def, ctx, inst)].some(x => x.toLowerCase() === k.toLowerCase()); }
  function dispositionsOf(d) { return d.dispositions || (d.disposition ? [d.disposition] : []); }
  function dataVersionFor(fid, DATA) { return ((DATA.meta.factionVersions || {})[fid]) || DATA.meta.dataVersion; }
  /* null if this unit can be the Warlord, otherwise the reason */
  function warlordBlock(def, inst, ctx) {
    if (!hasKw(def, ctx, 'Character', inst)) return `${def.name} is not a CHARACTER.`;
    if (def.cannotBeWarlord && !ctx.dets.some(d => (d.allowWarlord || []).includes(def.id))) return def.cannotBeWarlord;
    for (const id of enhIds(inst || {})) { const e = ctx.allEnh[id]; if (e && e.cannotBeWarlord) return `A model with ${e.name} cannot be your Warlord.`; }
    return null;
  }

  function factionOf(inst, def, ctx) {
    for (const id of enhIds(inst)) { const e = ctx.allEnh[id]; if (e && e.factionSwap) return e.factionSwap; }
    return def.faction;
  }
  /* Points cap of an allied group for a battle size: per-size map `ptsCap` {incursion, strike, onslaught}, else the battleSizes key `capKey`. */
  function alliedPtsCap(a, bs) {
    if (!bs) return null;
    if (a.ptsCap && a.ptsCap[bs.id] != null) return a.ptsCap[bs.id];
    return a.capKey && bs[a.capKey] != null ? bs[a.capKey] : null;
  }
  /* An allied group as it applies to this roster: a detachment can replace its rule and cap, or shut the group out
     (`overrides: {<detachmentId>: {rule, ptsCap}|{forbid: true}}` — Reaper's Wager). */
  function alliedEff(a, roster) {
    const ov = a.overrides && (roster.detachmentIds || []).map(id => a.overrides[id]).find(Boolean);
    return ov ? Object.assign({}, a, ov) : a;
  }
  /* Points used against each allied cap. Groups sharing a `capGroup` (Harlequins + Anhrathe) count together under one cap.
     [{label, factions, used, cap}] */
  function alliedPtsInfo(roster, DATA) {
    const ctx = ctxFor(roster, DATA), out = [];
    if (!ctx.bs) return out;
    const pts = points(roster, DATA), all = (ctx.fd.alliedFactions || []).map(a => alliedEff(a, roster)).filter(a => !a.forbid), seen = new Set();
    all.forEach(a => {
      const cap = alliedPtsCap(a, ctx.bs), key = a.capGroup || a.faction;
      if (cap == null || seen.has(key)) return;
      seen.add(key);
      const members = all.filter(x => a.capGroup ? x.capGroup === a.capGroup : x.faction === a.faction);
      out.push({ label: a.rule || a.faction, factions: members.map(x => x.faction), used: members.reduce((n, x) => n + ((pts.allied || {})[x.faction] || 0), 0), cap });
    });
    return out;
  }
  /* Keyword an allied unit counts as in place of its own faction (Cult of the Dark Gods: HERETIC ASTARTES). */
  function keywordAsOf(ctx, fac) {
    const a = ((ctx.fd && ctx.fd.alliedFactions) || []).find(x => x.faction === fac && x.keywordAs);
    return a ? a.keywordAs : fac;
  }

  function copyLimit(def, ctx) {
    if (!ctx.bs) return Infinity;
    if (hasKw(def, ctx, 'Epic Hero')) return ctx.DATA.gameRules.epicHeroLimit;
    if (def.copyMax) return def.copyMax;          // "you cannot include more than one of this model" (Death Jester, Shadowseer, Troupe Master)
    let lim = ctx.bs.copyLimit;
    if (ctx.DATA.gameRules.copyMultiplierKeywords.some(k => hasKw(def, ctx, k))) lim *= 2;
    return lim;
  }

  function sizeOf(def, inst) {
    return def.sizes.find(s => s.models === inst.size) || def.sizes[0];
  }

  /* Points: base (with per-datasheet stepper by roster order) + wargear + enhancement. */
  function points(roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const seen = {};
    const per = {};
    let total = 0, allied = {};
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (!def) return;
      seen[def.id] = (seen[def.id] || 0) + 1;
      const copyNo = seen[def.id];
      const sz = sizeOf(def, inst);
      const later = def.stepFrom && copyNo >= def.stepFrom && sz.ptsLater != null;
      const base = later ? sz.ptsLater : sz.pts;
      let wargear = 0;
      (def.options || []).forEach(o => {
        if (o.type === 'choice') {
          const v = (inst.wargear || {})[o.id];
          const c = o.choices.find(c => c.id === v);
          if (c && c.pts) wargear += c.pts;
        } else if (o.ptsOnceBySize) { if ((+(inst.wargear || {})[o.id] || 0) > 0) wargear += o.ptsOnceBySize[inst.size] || 0; }   // one flat price once any is taken, by unit size (Wolf Guard Headtakers' Hunting Wolves)
        else if (o.pts) wargear += (+(inst.wargear || {})[o.id] || 0) * o.pts;
      });
      let enh = 0;
      enhIds(inst).forEach(id => { const e = ctx.allEnh[id]; if (e) enh += e.pts; });
      const bind = bindingsFor(def, inst, ctx).reduce((n, e) => n + e.pts, 0);
      const sum = base + wargear + enh + bind;
      per[inst.instanceId] = { base, wargear, enh, bind, total: sum, copyNo, surcharge: later ? sz.ptsLater - sz.pts : 0 };
      total += sum;
      const fac = factionOf(inst, def, ctx);
      if (fac !== ctx.fd.armyFaction) allied[fac] = (allied[fac] || 0) + sum;
    });
    return { per, total, allied };
  }

  function nextCopyInfo(def, roster, DATA, size) {
    const ctx = ctxFor(roster, DATA);
    const count = roster.units.filter(u => u.datasheetId === def.id).length;
    const copyNo = count + 1;
    const sz = def.sizes.find(s => s.models === size) || def.sizes[0];
    const later = def.stepFrom && copyNo >= def.stepFrom && sz.ptsLater != null;
    return { copyNo, limit: copyLimit(def, ctx), pts: later ? sz.ptsLater : sz.pts, surcharge: later ? sz.ptsLater - sz.pts : 0 };
  }

  function enhancementCount(roster, ctx) {
    const counted = new Set();
    let n = 0;
    roster.units.forEach(inst => enhIds(inst).forEach(id => {
      const e = ctx.allEnh[id];
      if (!e || e.noCount) return;
      if (e.upgrade) { if (!counted.has(id)) { counted.add(id); n++; } } else n++;
    }));
    return n;
  }

  function eligible(e, def, inst, ctx) {
    const el = e.eligible || {};
    const fac = def.faction;
    const rg = ctx.refGroup && ctx.refGroup[def.id];
    if (rg && rg.noEnhancements) return `${def.name} is an allied unit (${rg.rule || rg.faction}) and cannot take enhancements.`;
    if (el.unitIds && !el.unitIds.includes(def.id)) return `${e.name} can only be given to ${el.unitIds.map(id => (ctx.unitById[id] || {}).name || id).join(' or ')}.`;
    if (el.excludeUnitIds && el.excludeUnitIds.includes(def.id)) return `${e.name} cannot be given to ${def.name}.`;
    const extra = (el.orUnitIds || []).includes(def.id);
    if (el.factionsAll && !extra && !el.factionsAll.includes(fac)) return `${e.name} needs a ${[...el.factionsAll, ...(el.orUnitIds || []).map(id => (ctx.unitById[id] || {}).name || id)].join('/').toUpperCase()} unit.`;
    if (el.keywordsAll) for (const k of el.keywordsAll) if (!hasKw(def, ctx, k, inst)) return `${e.name} needs the ${k.toUpperCase()} keyword.`;
    if (el.keywordsAny && !el.keywordsAny.some(k => hasKw(def, ctx, k, inst))) return `${e.name} needs a ${el.keywordsAny.join(' or ').toUpperCase()} model.`;
    if (el.keywordsNone) for (const k of el.keywordsNone) if (hasKw(def, ctx, k, inst)) return `${e.name} cannot go on a ${k.toUpperCase()} unit.`;
    if (el.coreAll) for (const k of el.coreAll) if (!(def.coreAbilities || []).some(c => c.toLowerCase().startsWith(k.toLowerCase()))) return `${e.name} needs a model with ${k}.`;
    return null;
  }

  /* Binding add-ons this unit gets from the selected detachments (automatic, paid for, not counted as enhancements). */
  function bindingsFor(def, inst, ctx) { return (ctx.bindings || []).filter(e => !eligible(e, def, inst, ctx)); }

  /* Why can't this enhancement go on this unit right now (for the picker)? null = OK */
  function enhancementBlock(e, inst, roster, DATA) {
    if (e.binding) return 'Given automatically by its detachment.';
    const ctx = ctxFor(roster, DATA);
    const def = ctx.unitById[inst.datasheetId];
    if (!ctx.enhById[e.id]) return 'Its detachment is not in this roster.';
    const isChar = hasKw(def, ctx, 'Character', inst);
    if ((!e.upgrade || e.onCharacter) && !isChar) return 'Only CHARACTER units can take this enhancement.';
    if (e.upgrade && isChar && !e.onCharacter) return 'Upgrades go on non-CHARACTER units.';
    if (hasKw(def, ctx, 'Epic Hero')) return 'Epic Heroes cannot take enhancements.';
    const why = eligible(e, def, inst, ctx);
    if (why) return why;
    const others = roster.units.filter(u => u.instanceId !== inst.instanceId && enhIds(u).includes(e.id)).length;
    if (!e.upgrade && others >= 1) return 'Already taken by another unit.';
    if (e.upgrade && others >= DATA.gameRules.upgradeMaxCopies) return `Already on ${DATA.gameRules.upgradeMaxCopies} units.`;
    return null;
  }

  /* Weapon slots: one weapon per model per slot; options swap the default. */
  function slotSize(slot, inst) {
    const z = slot.size || {}; let n = 0;
    if (z.models) n += inst.size * z.models;
    if (z.per) n += Math.floor(inst.size / z.per[0]) * z.per[1];
    if (z.minusPer) n -= Math.floor(inst.size / z.minusPer[0]) * z.minusPer[1];
    if (z.minus) n -= z.minus;
    return Math.max(0, n);
  }
  function slotUsed(def, inst, slotId, exceptId) {
    const wg = inst.wargear || {};
    return (def.options || []).filter(o => (o.slots || []).includes(slotId) && o.id !== exceptId).reduce((s, o) => s + (+wg[o.id] || 0), 0);
  }
  function ownCap(o, inst, def) {
    if (o.type === 'toggle') return 1;
    if (o.maxBySize) return o.maxBySize[inst.size] || 0;      // cap depends on the unit size chosen (Troupe: 2 up to 9 models, 4 from 10)
    if (o.max === 'models') return inst.size;
    if (o.max === 'slot') { const sl = (def && def.slots || []).find(x => x.id === (o.slots || [])[0]); return sl ? slotSize(sl, inst) : 0; }
    if (o.per) return Math.floor(inst.size / o.per) * (o.n || 1);
    return o.max != null ? o.max : 1;
  }
  /* Highest value this option can take right now, given slot room and shared groups. */
  function optionMax(o, inst, def) {
    let mx = ownCap(o, inst, def);
    if (def) {
      (o.slots || []).forEach(sid => { const sl = (def.slots || []).find(x => x.id === sid); if (sl) mx = Math.min(mx, slotSize(sl, inst) - slotUsed(def, inst, sid, o.id)); });
      if (o.group) { const g = (def.optionGroups || []).find(x => x.id === o.group); if (g) { const cap = Math.floor(inst.size / g.per) * g.n; const used = (def.options || []).filter(x => x.group === o.group && x.id !== o.id).reduce((s, x) => s + (+(inst.wargear || {})[x.id] || 0), 0); mx = Math.min(mx, cap - used); } }
    }
    return Math.max(0, mx);
  }

  /* Group rules for referenced allies. `hostKeyword`: every non-allied model in the army must carry it (Freeblades: IMPERIUM).
     `oneOf: [{keyword, n}]`: models of ONE of the listed kinds only, up to n (1 TITANIC or up to 3 ARMIGER). */
  function alliedHostMiss(a, roster, ctx) {
    if (!a.hostKeyword) return null;
    return roster.units.find(inst => { const def = ctx.unitById[inst.datasheetId]; return def && factionOf(inst, def, ctx) === ctx.fd.armyFaction && !hasKw(def, ctx, a.hostKeyword, inst); }) || null;
  }
  function alliedOneOf(a, roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const mine = roster.units.filter(inst => { const def = ctx.unitById[inst.datasheetId]; return def && factionOf(inst, def, ctx) === a.faction; });
    return (a.oneOf || []).map(o => ({ keyword: o.keyword, n: o.n, used: mine.filter(u => hasKw(ctx.unitById[u.datasheetId], ctx, o.keyword, u)).reduce((m, u) => m + (u.size || 1), 0) }));
  }
  /* Why an allied datasheet cannot be added right now (greys the row in the catalogue), or null. */
  function allyBlock(def, roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const a = (ctx.fd.alliedFactions || []).find(x => x.faction === def.faction && (x.hostKeyword || x.oneOf));
    if (!a) return null;
    const miss = alliedHostMiss(a, roster, ctx);
    if (miss) return `${a.rule || a.faction}: every other model must be ${a.hostKeyword.toUpperCase()} (${(ctx.unitById[miss.datasheetId] || {}).name} is not)`;
    if (a.oneOf) {
      const st = alliedOneOf(a, roster, DATA), me = st.find(o => hasKw(def, ctx, o.keyword));
      if (!me) return `${a.rule || a.faction}: only ${a.oneOf.map(o => o.keyword.toUpperCase()).join(' or ')} models`;
      const other = st.find(o => o !== me && o.used > 0);
      if (other) return `${a.rule || a.faction}: already took ${other.keyword.toUpperCase()}; ${me.keyword.toUpperCase()} is the other choice`;
      if (me.used + (def.sizes && def.sizes[0] ? def.sizes[0].models : 1) > me.n) return `${a.rule || a.faction}: ${me.keyword.toUpperCase()} limit ${me.n} reached`;
    }
    return null;
  }

  /* Allies limited by unit counts per battle size instead of a detachment (Assigned Agents): [{faction, keyword, n, used, units}] */
  function alliedCaps(roster, DATA) {
    const ctx = ctxFor(roster, DATA), out = [];
    if (!ctx.bs) return out;
    (ctx.fd.alliedFactions || []).filter(a => a.caps).forEach(a => {
      const units = roster.units.filter(inst => { const def = ctx.unitById[inst.datasheetId]; return def && factionOf(inst, def, ctx) === a.faction; });
      const has = (inst, k) => hasKw(ctx.unitById[inst.datasheetId], ctx, k, inst);
      const exempt = new Set();
      (a.free || []).forEach(f => {
        let allowance = units.filter(u => f.perKeywords.every(k => has(u, k))).length;
        units.filter(u => f.unitIds.includes(u.datasheetId)).forEach(u => { if (allowance > 0) { exempt.add(u.instanceId + ':' + f.from); allowance--; } });
      });
      a.caps.forEach(c => {
        const list = units.filter(u => has(u, c.keyword) && !exempt.has(u.instanceId + ':' + c.keyword));
        out.push({ faction: a.faction, keyword: c.keyword, n: c.n[ctx.bs.id] != null ? c.n[ctx.bs.id] : 0, used: list.length, units: list });
      });
    });
    return out;
  }

  function validate(roster, DATA) {
    const out = [];
    const E = (message, unitInstanceId) => out.push({ severity: 'error', message, unitInstanceId });
    const W = (message, unitInstanceId) => out.push({ severity: 'warning', message, unitInstanceId });
    const I = (message, unitInstanceId) => out.push({ severity: 'info', message, unitInstanceId });
    const ctx = ctxFor(roster, DATA);
    const { fd, bs, dets } = ctx;
    const nameOf = inst => inst.customName || (ctx.unitById[inst.datasheetId] || {}).name || inst.datasheetId;

    if (roster.dataVersion && roster.dataVersion !== dataVersionFor(roster.factionId, DATA)) W('This roster was built with an older data version. Check points and rules.');
    if (!bs) { E('Choose a battle size.'); return out; }

    // ---- Detachments
    if (!dets.length) E('Choose at least one detachment.');
    const idsSeen = new Set();
    (roster.detachmentIds || []).forEach(id => { if (idsSeen.has(id)) E('You cannot take the same detachment twice.'); idsSeen.add(id); });
    const dp = dets.reduce((s, d) => s + d.dp, 0);
    const threes = dets.filter(d => d.dp === 3).length;
    const loneException = bs.loneThreeDp && dets.length === 1 && dets[0].dp === 3;
    if (dp > bs.dp && !loneException) E(`Detachments cost ${dp} DP but ${bs.name} allows ${bs.dp} DP. Remove a detachment.`);
    if (threes > DATA.gameRules.maxThreeDpDetachments) E('Only one 3 DP detachment is allowed per army.');
    if (bs.loneThreeDp && threes && dets.length > 1) E(`In ${bs.name} a 3 DP detachment can only be taken as your only detachment.`);
    // ---- Sub-faction (Chapter): one per army; its units and detachments only with it
    if ((fd.subfactions || []).length) {
      const lbl = (fd.subfactionLabel || 'sub-faction').toLowerCase();
      dets.forEach(d => { if (!subOk(d, roster)) E(`${d.name} needs the ${subName(fd, d.subfaction)} ${lbl}${roster.subfaction ? `, not ${subName(fd, roster.subfaction)}` : ''}. Change the ${lbl} in the roster setup or remove the detachment.`); });
      (roster.units || []).forEach(inst => { const def = ctx.unitById[inst.datasheetId]; if (def && !subOk(def, roster)) E(`${def.name} is from the ${subName(fd, def.subfaction)} ${lbl}; this army ${roster.subfaction ? `is ${subName(fd, roster.subfaction)}` : `has no ${lbl}`}. Pick the ${lbl} in the roster setup or remove the unit.`, inst.instanceId); });
    }
    const tagOwner = {};
    dets.forEach(d => (d.tags || []).forEach(t => {
      if (tagOwner[t]) E(`${tagOwner[t]} and ${d.name} both have the ${t} tag. Keep only one.`);
      else tagOwner[t] = d.name;
    }));

    // ---- Force Disposition
    if (!roster.forceDisposition) E('Choose a Force Disposition.');
    else if (!dets.some(d => dispositionsOf(d).includes(roster.forceDisposition))) E(`${roster.forceDisposition} is not offered by your detachments. Pick ${[...new Set(dets.flatMap(dispositionsOf))].join(' or ') || 'a detachment first'}.`);

    // ---- Points
    const pts = points(roster, DATA);
    if (pts.total > bs.points) E(`Army is ${pts.total} pts, over the ${bs.points} pts limit by ${pts.total - bs.points}.`);
    // a unit whose detachment add-on pushes the army over the limit cannot be included (Pantheon of Woe)
    const bindTotal = Object.values(pts.per).reduce((n, x) => n + (x.bind || 0), 0);
    if (bindTotal && pts.total > bs.points && pts.total - bindTotal <= bs.points) roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (def) bindingsFor(def, inst, ctx).forEach(e => E(`${def.name}: ${e.name} (+${e.pts} pts) is required by ${(fd.detachments.find(d => d.id === e.detachmentId) || {}).name} and takes the army over the points limit. Remove this unit or drop the detachment.`, inst.instanceId));
    });

    // ---- Allied factions
    (fd.alliedFactions || []).forEach(a0 => {
      const a = alliedEff(a0, roster);
      const units = roster.units.filter(inst => { const def = ctx.unitById[inst.datasheetId]; return def && factionOf(inst, def, ctx) === a.faction; });
      if (!units.length) return;
      if (a.forbid) {
        const why = (fd.detachments.find(d => (roster.detachmentIds || []).includes(d.id) && a0.overrides && a0.overrides[d.id]) || {}).name || 'a detachment in this roster';
        units.forEach(inst => E(`${nameOf(inst)} is ${a.faction.toUpperCase()}; ${why} does not allow ${a.faction.toUpperCase()} units.`, inst.instanceId));
        return;
      }
      { const miss = alliedHostMiss(a, roster, ctx);
        if (miss) units.forEach(inst => E(`${nameOf(inst)} is ${a.faction.toUpperCase()}; ${a.rule || a.faction} needs every other model to be ${a.hostKeyword.toUpperCase()}, and ${nameOf(miss)} is not.`, inst.instanceId)); }
      if (a.oneOf) {
        const st = alliedOneOf(a, roster, DATA), used = st.filter(o => o.used > 0);
        units.forEach(inst => { if (!st.some(o => hasKw(ctx.unitById[inst.datasheetId], ctx, o.keyword, inst))) E(`${nameOf(inst)}: ${a.rule || a.faction} allows only ${a.oneOf.map(o => o.keyword.toUpperCase()).join(' or ')} models.`, inst.instanceId); });
        if (used.length > 1) E(`${a.rule || a.faction}: take ${a.oneOf.map(o => o.keyword.toUpperCase()).join(' or ')}, not both.`);
        st.filter(o => o.used > o.n).forEach(o => E(`${a.rule || a.faction}: ${o.used} ${o.keyword.toUpperCase()} models; the limit is ${o.n}.`));
      }
      alliedCaps(roster, DATA).filter(c => c.faction === a.faction && c.used > c.n).forEach(c =>
        E(`${a.rule || a.faction}: ${c.used} ${c.keyword.toUpperCase()} units; ${bs.name} allows ${c.n}.`, c.units[c.units.length - 1].instanceId));
      if (a.requiresDetachment) {
        const hasDet = (roster.detachmentIds || []).includes(a.requiresDetachment);
        if (!hasDet) units.forEach(inst => E(`${nameOf(inst)} is ${a.faction.toUpperCase()} and needs the ${(fd.detachments.find(d => d.id === a.requiresDetachment) || {}).name} detachment.`, inst.instanceId));
      }
    });
    alliedPtsInfo(roster, DATA).filter(i => i.used > i.cap).forEach(i => E(`${i.label}: units total ${i.used} pts; the ${bs.name} cap is ${i.cap} pts.`));

    // ---- Copy limits and surcharges
    const byDs = {};
    roster.units.forEach(inst => (byDs[inst.datasheetId] = byDs[inst.datasheetId] || []).push(inst));
    Object.entries(byDs).forEach(([dsId, list]) => {
      const def = ctx.unitById[dsId];
      if (!def) { list.forEach(i => E(`Unknown datasheet ${dsId}.`, i.instanceId)); return; }
      const lim = copyLimit(def, ctx);
      if (list.length > lim) {
        const why = hasKw(def, ctx, 'Epic Hero') ? 'is an Epic Hero (limit 1)' : def.copyMax ? `can only be included ${def.copyMax === 1 ? 'once' : def.copyMax + ' times'} in an army` : `is limited to ${lim} in ${bs.name}`;
        E(`${def.name} ${why}; you have ${list.length}. Remove ${list.length - lim}.`, list[lim].instanceId);
      }
      list.forEach(inst => {
        const p = pts.per[inst.instanceId];
        if (p && p.surcharge) I(`${ORD(p.copyNo)} ${def.name} unit costs +${p.surcharge} pts.`, inst.instanceId);
      });
    });

    // ---- Characters and Warlord
    const chars = roster.units.filter(inst => { const d = ctx.unitById[inst.datasheetId]; return d && hasKw(d, ctx, 'Character', inst); });
    if (!chars.length) E('Your army needs at least one CHARACTER.');
    const warlords = roster.units.filter(u => u.instanceId === roster.warlordUnitId);
    if (!roster.warlordUnitId || !warlords.length) E('Choose a Warlord (a CHARACTER from your army faction).');
    if (warlords.length > 1) E(`You have ${warlords.length} Warlords; choose exactly one.`);
    warlords.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (!hasKw(def, ctx, 'Character', inst)) E(`${nameOf(inst)} is not a CHARACTER and cannot be your Warlord.`, inst.instanceId);
      const fac = factionOf(inst, def, ctx);
      if (fac !== fd.armyFaction) E(`${nameOf(inst)} is ${fac.toUpperCase()} and cannot be your Warlord.`, inst.instanceId);
      enhIds(inst).forEach(id => { const e = ctx.allEnh[id]; if (e && e.cannotBeWarlord) E(`A model with ${e.name} cannot be your Warlord.`, inst.instanceId); });
      if (def.cannotBeWarlord && !dets.some(d => (d.allowWarlord || []).includes(def.id))) E(`${def.cannotBeWarlord}`, inst.instanceId);
    });
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (def && def.warlordHint && roster.warlordUnitId !== inst.instanceId) W(def.warlordHint, inst.instanceId);
      // excludesUnits: this unit and the listed datasheets cannot be in one army (T'au Independent Power: Farsight / Ethereal)
      if (def && def.excludesUnits && roster.units.some(o => def.excludesUnits.ids.includes(o.datasheetId))) E(def.excludesUnits.message, inst.instanceId);
      if (def && def.mustBeWarlord && roster.warlordUnitId !== inst.instanceId) {
        // units sharing a warlordGroup (Cawl and Ghuld: Supreme Commander) can both be in the army: one of them being the Warlord is enough
        const wl = roster.units.find(o => o.instanceId === roster.warlordUnitId), peer = def.warlordGroup && wl && (ctx.unitById[wl.datasheetId] || {}).warlordGroup === def.warlordGroup;
        if (!peer) E(def.mustBeWarlord, inst.instanceId);
      }
    });

    // ---- Per-unit keyword grants (e.g. Subterranean Assault Trygons)
    dets.forEach(d => (d.instanceGrants || []).forEach(g => {
      const list = roster.units.filter(u => (u.grants || []).includes(g.id) && g.unitIds.includes(u.datasheetId));
      if (g.max != null && list.length > g.max) E(`${g.label}: ${list.length} units chosen, up to ${g.max} allowed.`, list[g.max].instanceId);
    }));
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (def) { const gs = grantsFor(def, ctx); [...new Set(gs.filter(g => g.required).map(g => g.group))].forEach(grp => { if (!gs.some(g => g.group === grp && (inst.grants || []).includes(g.id))) W(`${nameOf(inst)}: choose its ${(gs.find(g => g.group === grp).label.split(':')[0])}.`, inst.instanceId); }); }
      if (def && (inst.grants || []).length && !instGrants(def, ctx, inst).length) W(`${nameOf(inst)} has a keyword choice from a detachment that is not in this roster; it is ignored.`, inst.instanceId);
    });

    // ---- Enhancements
    const cap = bs.enhancements;
    const used = enhancementCount(roster, ctx);
    if (used > cap) E(`You have ${used} enhancements; ${bs.name} allows ${cap}.`);
    const taken = {};
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (!def) return;
      const ids = enhIds(inst);
      if (ids.filter(id => !(ctx.allEnh[id] || {}).noCount).length > 1) E(`${nameOf(inst)} has ${ids.length} enhancements; a unit can have only one.`, inst.instanceId);
      ids.forEach(id => {
        const e = ctx.allEnh[id];
        if (!e) { E(`Unknown enhancement on ${nameOf(inst)}.`, inst.instanceId); return; }
        if (!ctx.enhById[id]) E(`${e.name} comes from ${(fd.detachments.find(d => d.id === e.detachmentId) || {}).name}, which is not in this roster.`, inst.instanceId);
        const isChar = hasKw(def, ctx, 'Character', inst);
        if (hasKw(def, ctx, 'Epic Hero')) E(`${def.name} is an Epic Hero and cannot take enhancements.`, inst.instanceId);
        else if (e.upgrade && isChar && !e.onCharacter) E(`${e.name} is an Upgrade; give it to a non-CHARACTER unit.`, inst.instanceId);
        else if ((!e.upgrade || e.onCharacter) && !isChar) E(`${e.name} can only go on a CHARACTER.`, inst.instanceId);
        const why = eligible(e, def, inst, ctx);
        if (why) E(why, inst.instanceId);
        taken[id] = (taken[id] || []).concat(inst);
      });
    });
    Object.entries(taken).forEach(([id, list]) => {
      const e = ctx.allEnh[id];
      if (!e.upgrade && list.length > 1) E(`${e.name} is taken ${list.length} times; each enhancement can be taken once.`, list[1].instanceId);
      if (e.upgrade && list.length > DATA.gameRules.upgradeMaxCopies) E(`${e.name} is on ${list.length} units; an Upgrade can go on up to ${DATA.gameRules.upgradeMaxCopies}.`, list[DATA.gameRules.upgradeMaxCopies].instanceId);
    });

    // ---- Attachments
    const leadersOn = {};
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (!def) return;
      const can = canLead(def, inst, roster, DATA);
      if (def.support && !inst.attachedTo) E(`${nameOf(inst)} is a Support unit and must be attached to a bodyguard unit.`, inst.instanceId);
      if (!inst.attachedTo) return;
      const target = roster.units.find(u => u.instanceId === inst.attachedTo);
      if (!target) { E(`${nameOf(inst)} is attached to a unit that is no longer in the roster.`, inst.instanceId); return; }
      const tdef = ctx.unitById[target.datasheetId];
      if (!can.length) E(`${nameOf(inst)} cannot lead other units.`, inst.instanceId);
      else if (!can.includes(target.datasheetId)) E(`${nameOf(inst)} can only lead ${can.map(id => (ctx.unitById[id] || {}).name || id).join(', ')}.`, inst.instanceId);
      { const clash = markClash(inst, target, ctx); if (clash) E(`${nameOf(inst)} cannot lead ${nameOf(target)}. ${clash}`, inst.instanceId); }
      if (target.attachedTo) E(`${nameOf(target)} is itself attached; attach ${nameOf(inst)} to a bodyguard unit.`, inst.instanceId);
      const role = def.support ? 'support' : 'leader';
      const key = target.instanceId + ':' + role;
      leadersOn[key] = (leadersOn[key] || []).concat(inst);
      const counts = u => enhIds(u).filter(id => !(ctx.allEnh[id] || {}).noCount).length;
      const totalEnh = counts(inst) + counts(target);
      if (totalEnh > 1) E(`${nameOf(inst)} and ${nameOf(target)} would form one attached unit with ${totalEnh} enhancements; an attached unit can have only one.`, inst.instanceId);
    });
    Object.entries(leadersOn).forEach(([key, list]) => {
      if (list.length === 2 && key.endsWith(':leader') && coLeadOk(list[0], list[1], roster.units.find(u => u.instanceId === key.split(':')[0]), ctx)) return;
      if (list.length > 1) {
        const target = roster.units.find(u => u.instanceId === key.split(':')[0]);
        E(`${nameOf(target)} has ${list.length} ${key.endsWith('support') ? 'support' : 'leader'} units attached; only one is allowed.`, list[1].instanceId);
      }
    });
    // Attached unit may also be counted as having the bodyguard's upgrade + leader enhancement (checked above).

    // ---- Wargear
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
      if (!def) return;
      if (!def.sizes.some(s => s.models === inst.size)) E(`${def.name} cannot have ${inst.size} models.`, inst.instanceId);
      const wg = inst.wargear || {};
      (def.options || []).forEach(o => {
        if (o.type === 'count' || o.type === 'toggle') {
          const v = +wg[o.id] || 0;
          const mx = ownCap(o, inst, def);
          if (v > mx) E(`${def.name}: ${o.label} ${v}/${mx}${o.per ? ` (${o.n || 1} per ${o.per} models)` : ''}.`, inst.instanceId);
        }
      });
      (def.slots || []).forEach(sl => { const size = slotSize(sl, inst), used = slotUsed(def, inst, sl.id); if (used > size) E(`${def.name}: ${used} ${sl.label.toLowerCase()} swaps but only ${size} model${size === 1 ? '' : 's'} can take them. Reduce the options.`, inst.instanceId); });
      (def.optionGroups || []).forEach(g => { const cap = Math.floor(inst.size / g.per) * g.n; const used = (def.options || []).filter(x => x.group === g.id).reduce((s, x) => s + (+wg[x.id] || 0), 0); if (used > cap) E(`${def.name}: ${g.label} ${used}/${cap} (${g.n} per ${g.per} models).`, inst.instanceId); });
      // unset picks count as their default: the first choice, or 0 for counts and toggles
      const val = k => { const o = (def.options || []).find(x => x.id === k) || {}; return wg[k] != null ? wg[k] : o.type === 'choice' ? o.choices[0].id : 0; };
      (def.optionRules || []).forEach(r => {
        /* A rule of a shape this engine does not know is skipped, not thrown:
           validate() runs inside render(), so one bad row would freeze the UI.
           tools/validate-data.js reports it as an error before deploy. */
        // sumOf: the picks listed together may not exceed atMost {per, n} (Broadside: no model has both a twin plasma rifle and a twin smart missile system)
        if (r && Array.isArray(r.sumOf) && r.atMost) { if (r.sumOf.reduce((t, k) => t + (+val(k) || 0), 0) > Math.floor(inst.size / (r.atMost.per || 1)) * (r.atMost.n || 1)) E(`${def.name}: ${r.message}`, inst.instanceId); return; }
        if (!r || !(Array.isArray(r.forbidAllOf) || Array.isArray(r.requireAnyOf) || Array.isArray(r.requireAllOf))) return;
        if (r.forbidAllOf) { if (r.forbidAllOf.every(([k, v]) => val(k) === v)) E(`${def.name}: ${r.message}`, inst.instanceId); return; }
        if (String(val(r.if)) === String(r.notValue)) return;
        const ok = r.requireAnyOf ? r.requireAnyOf.some(([k, v]) => val(k) === v) : r.requireAllOf.every(([k, v]) => val(k) === v);
        if (!ok) E(`${def.name}: ${r.message}`, inst.instanceId);
      });
    });
    return out;
  }

  /* Stat helpers for buffs */
  function addStat(v, n) {
    if (v == null) return v;
    const s = String(v).trim();
    if (/^-?\d+$/.test(s)) return String(+s + n);
    const m = s.match(/^(\d*D\d+)([+-]\d+)?$/i);
    if (m) { const k = (m[2] ? +m[2] : 0) + n; return m[1] + (k ? (k > 0 ? '+' + k : String(k)) : ''); }
    return s;
  }
  function improveSkill(v, n) { const m = String(v).match(/^(\d)\+$/); return m ? Math.max(2, +m[1] - n) + '+' : v; }

  /* Which weapons a unit actually carries, from its wargear picks. Weapons are matched to option and slot labels by name:
     a weapon that some option names is shown only while one of those picks is active; a weapon no option names is always carried.
     ponytail: name matching instead of a weapon->option map in the data; add explicit `weapons` lists to options if a label ever misleads. */
  const wnorm = s => String(s).toLowerCase().replace(/\(.*?\)/g, '').replace(/^[^:]*:\s*/, '').replace(/\s+[-\u2013]\s+.*$/, '').replace(/^\d+\s+/, '')
    .split(/\s+/).map(x => x.replace(/s$/, '')).join(' ').trim();
  const wparts = label => { const whole = wnorm(label); return [whole, ...String(label).replace(/\(.*?\)/g, '').replace(/^[^:]*:\s*/, '').split(/,\s*|\s+and\s+/).map(wnorm)]; };
  function carries(def, inst) {
    if (!inst || !(def.options || []).length) return () => true;
    const wg = inst.wargear || {}, on = new Map();
    const add = (label, sel) => wparts(label).forEach(k => on.set(k, on.get(k) || sel));
    def.options.forEach(o => {
      // a champion's swap leaves the rest of the unit with the default weapon
      if (o.type === 'choice') { const v = wg[o.id] != null ? wg[o.id] : o.choices[0].id, keep = (o.single || /^champion/i.test(o.label)) && inst.size > 1; /* single: one model (a Sergeant) makes the swap */ o.choices.forEach((c, i) => add(c.label, c.id === v || (keep && i === 0))); }
      else add(o.label, (+wg[o.id] || 0) > 0);
    });
    (def.slots || []).forEach(sl => add(sl.default, slotSize(sl, inst) - slotUsed(def, inst, sl.id) > 0));
    // weapons in the base loadout that no choice swaps out and no slot tracks (e.g. a Rhino's own combi-bolter) are always carried
    const swapped = new Set([...def.options.filter(o => o.type === 'choice').flatMap(o => wparts(o.choices[0].label)), ...(def.slots || []).flatMap(sl => wparts(sl.default))]);
    String(def.composition || '').split(':').pop().split(/[,;.]|\s+and\s+/).map(wnorm).filter(k => k && !swapped.has(k)).forEach(k => on.set(k, true));
    return w => { const k = wnorm(w.name); return !on.has(k) || on.get(k); };
  }

  /* Returns {profile, ranged, melee, notes[]} with highlights: changed fields carry {src} */
  function buffed(def, inst, roster, DATA, opts) {
    const ctx = ctxFor(roster, DATA);
    const fac = inst ? factionOf(inst, def, ctx) : def.faction;
    const profile = { ...def.profile }, pmark = {};
    const clone = ws => ws.map(w => ({ ...w, mark: {} }));
    const ranged = clone(def.ranged), melee = clone(def.melee);
    const notes = [];
    const apply = (m, src) => {
      if (m.target === 'profile') {
        if (m.set) profile[m.stat] = m.set; else profile[m.stat] = addStat(profile[m.stat], m.add);
        pmark[m.stat] = src;
      } else {
        const list = m.target === 'melee' ? melee : ranged;
        list.forEach(w => {
          if (m.excludeKeyword && w.kw.includes(m.excludeKeyword)) return;
          const key = m.stat === 'WS' ? 'skill' : m.stat;
          if (m.improve) w[key] = improveSkill(w[key], m.improve); else w[key] = addStat(w[key], m.add);
          w.mark[key] = src;
        });
      }
      notes.push(src);
    };
    if (opts && opts.detachment !== false) ctx.dets.forEach(d => (d.buffs || []).forEach(b => {
      /* A buff with no scope is malformed data. Skip it: applying a shape the
         engine does not understand would silently change stats, and reading
         through it throws inside render(), which leaves the whole screen
         unrendered and every control dead. */
      if (!b || !b.scope) return;
      if (b.scope.factionsAny && !b.scope.factionsAny.includes(fac)) return;
      if (b.scope.unitIds && !b.scope.unitIds.includes(def.id)) return;
      apply(b, b.source);
    }));
    if (inst) enhIds(inst).forEach(id => { const e = ctx.allEnh[id]; (e && e.mods || []).forEach(m => apply(m, e.name)); });
    return { profile, pmark, ranged, melee, notes: [...new Set(notes)] };
  }

  function attachedGroup(roster, inst) {
    const bodyguard = inst.attachedTo ? roster.units.find(u => u.instanceId === inst.attachedTo) : inst;
    if (!bodyguard) return null;
    const attached = roster.units.filter(u => u.attachedTo === bodyguard.instanceId);
    if (!attached.length) return null;
    return { bodyguard, attached };
  }

  /* Two leaders on one bodyguard: allowed when they are different datasheets and at least one of them may join
     a unit that already has a Leader (Death Guard champions: coLeaderOf). */
  function coLeadOk(a, b, target, ctx) {
    if (!target || a.datasheetId === b.datasheetId) return false;
    const dt = ctx.unitById[target.datasheetId] || {};
    if (dt.twoLeaders && target.size >= dt.twoLeaders.size) return true;     // Kroot Carnivores' Bodyguard: two different Leaders at Starting Strength 20
    const da = ctx.unitById[a.datasheetId] || {}, db = ctx.unitById[b.datasheetId] || {};
    return (da.coLeaderOf || []).includes(target.datasheetId) || (db.coLeaderOf || []).includes(target.datasheetId);
  }
  /* Why can't inst be attached to target right now (leader slots)? null = OK */
  /* A detachment with a markGroup (Pactbound Zealots) lets a character join a unit only if both share one keyword of that group.
     A unit that has not picked one yet is not blocked; the Mark reminder asks for the pick. null = fine. */
  function markClash(inst, target, ctx) {
    for (const d of ctx.dets) {
      if (!d.markGroup) continue;
      const set = new Set((d.instanceGrants || []).filter(g => g.group === d.markGroup).map(g => g.keyword.toLowerCase()));
      const of = i => { const df = ctx.unitById[i.datasheetId]; return df ? [...keywordsOf(df, ctx, i)].filter(k => set.has(k.toLowerCase())) : []; };
      const a = of(inst), b = of(target);
      if (a.length && b.length && !a.some(k => b.includes(k))) return `Marks differ (${a.join('/')} vs ${b.join('/')}): ${d.name} lets a character join a unit only if both share the same Mark.`;
    }
    return null;
  }
  function attachBlock(inst, target, roster, DATA) {
    const ctx = ctxFor(roster, DATA), def = ctx.unitById[inst.datasheetId] || {};
    const clash = markClash(inst, target, ctx);
    if (clash) return clash;
    const role = def.support ? 'support' : 'leader';
    const others = roster.units.filter(u => u.attachedTo === target.instanceId && u.instanceId !== inst.instanceId && !!(ctx.unitById[u.datasheetId] || {}).support === (role === 'support'));
    const nm = u => u.customName || (ctx.unitById[u.datasheetId] || {}).name || u.datasheetId;
    if (!others.length) return null;
    if (role === 'leader' && others.length === 1 && coLeadOk(inst, others[0], target, ctx)) return null;
    return `Leader slot taken by ${others.map(nm).join(' and ')}`;
  }
  function canLead(def, inst, roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const extra = (inst ? enhIds(inst) : []).flatMap(id => (ctx.allEnh[id] || {}).leaderOf || []);
    return [...new Set([...leadsOf(def, ctx.fd), ...extra])];
  }

  function eligibleReason(e, inst, roster, DATA) { const ctx = ctxFor(roster, DATA); const def = ctx.unitById[inst.datasheetId]; return eligible(e, def, inst, ctx); }
  return { subOk, subName, refUnits, unitsOf, leadsOf, inherit, pickUnits, allyBlock, alliedOneOf, alliedCaps, alliedPtsCap, alliedEff, alliedPtsInfo, warlordBlock, grantsFor, instGrants, dispositionsOf, dataVersionFor, eligibleReason, ctxFor, points, validate, copyLimit, nextCopyInfo, enhancementCount, enhancementBlock, bindingsFor, optionMax, slotSize, slotUsed, ownCap, keywordsOf, hasKw, factionOf, buffed, attachedGroup, canLead, attachBlock, carries, enhIds, addStat, ORD };
})();
if (typeof DATA !== 'undefined') Engine.inherit(DATA);
if (typeof module !== 'undefined') module.exports = Engine;
