/* Data-driven roster engine: points, limits and validation. No DOM. */
const Engine = (function () {
  const ORD = n => n + (['th', 'st', 'nd', 'rd'][((n % 100) - 20) % 10] || ['th', 'st', 'nd', 'rd'][n % 100] || 'th');

  function ctxFor(roster, DATA) {
    const fd = DATA.factionData[roster.factionId];
    const bs = DATA.gameRules.battleSizes.find(b => b.id === roster.battleSize) || null;
    const dets = (roster.detachmentIds || []).map(id => fd.detachments.find(d => d.id === id)).filter(Boolean);
    const unitById = {};
    fd.units.forEach(u => (unitById[u.id] = u));
    const enhById = {};
    dets.forEach(d => d.enhancements.forEach(e => (enhById[e.id] = { ...e, detachmentId: d.id })));
    const allEnh = {};
    fd.detachments.forEach(d => d.enhancements.forEach(e => (allEnh[e.id] = { ...e, detachmentId: d.id })));
    return { DATA, fd, bs, dets, unitById, enhById, allEnh, roster };
  }

  function enhIds(inst) {
    if (Array.isArray(inst.enhancementIds)) return inst.enhancementIds.filter(Boolean);
    return inst.enhancementId ? [inst.enhancementId] : [];
  }

  /* Per-instance keyword grants offered by a detachment (e.g. up to 2 Trygons become CHARACTER). */
  function instGrants(def, ctx, inst) {
    if (!inst || !inst.grants || !inst.grants.length) return [];
    return ctx.dets.flatMap(d => (d.instanceGrants || []).filter(g => inst.grants.includes(g.id) && g.unitIds.includes(def.id)));
  }
  function grantsFor(def, ctx) { return ctx.dets.flatMap(d => (d.instanceGrants || []).filter(g => g.unitIds.includes(def.id))); }
  function keywordsOf(def, ctx, inst) {
    const kw = new Set(def.keywords);
    ctx.dets.forEach(d => (d.grantKeywords || []).forEach(g => { if (g.unitIds.includes(def.id)) kw.add(g.keyword); }));
    instGrants(def, ctx, inst).forEach(g => kw.add(g.keyword));
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

  function copyLimit(def, ctx) {
    if (!ctx.bs) return Infinity;
    if (hasKw(def, ctx, 'Epic Hero')) return ctx.DATA.gameRules.epicHeroLimit;
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
        }
      });
      let enh = 0;
      enhIds(inst).forEach(id => { const e = ctx.allEnh[id]; if (e) enh += e.pts; });
      const sum = base + wargear + enh;
      per[inst.instanceId] = { base, wargear, enh, total: sum, copyNo, surcharge: later ? sz.ptsLater - sz.pts : 0 };
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
      if (!e) return;
      if (e.upgrade) { if (!counted.has(id)) { counted.add(id); n++; } } else n++;
    }));
    return n;
  }

  function eligible(e, def, inst, ctx) {
    const el = e.eligible || {};
    const fac = def.faction;
    if (el.unitIds && !el.unitIds.includes(def.id)) return `${e.name} can only be given to ${el.unitIds.map(id => (ctx.unitById[id] || {}).name || id).join(' or ')}.`;
    if (el.excludeUnitIds && el.excludeUnitIds.includes(def.id)) return `${e.name} cannot be given to ${def.name}.`;
    if (el.factionsAll && !el.factionsAll.includes(fac)) return `${e.name} needs a ${el.factionsAll.join('/').toUpperCase()} unit.`;
    if (el.keywordsAll) for (const k of el.keywordsAll) if (!hasKw(def, ctx, k, inst)) return `${e.name} needs the ${k.toUpperCase()} keyword.`;
    if (el.keywordsNone) for (const k of el.keywordsNone) if (hasKw(def, ctx, k, inst)) return `${e.name} cannot go on a ${k.toUpperCase()} unit.`;
    if (el.coreAll) for (const k of el.coreAll) if (!(def.coreAbilities || []).some(c => c.toLowerCase().startsWith(k.toLowerCase()))) return `${e.name} needs a model with ${k}.`;
    return null;
  }

  /* Why can't this enhancement go on this unit right now (for the picker)? null = OK */
  function enhancementBlock(e, inst, roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const def = ctx.unitById[inst.datasheetId];
    if (!ctx.enhById[e.id]) return 'Its detachment is not in this roster.';
    const isChar = hasKw(def, ctx, 'Character', inst);
    if (!e.upgrade && !isChar) return 'Only CHARACTER units can take this enhancement.';
    if (e.upgrade && isChar) return 'Upgrades go on non-CHARACTER units.';
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

    // ---- Allied factions
    (fd.alliedFactions || []).forEach(a => {
      const units = roster.units.filter(inst => { const def = ctx.unitById[inst.datasheetId]; return def && factionOf(inst, def, ctx) === a.faction; });
      if (!units.length) return;
      const hasDet = (roster.detachmentIds || []).includes(a.requiresDetachment);
      if (!hasDet) units.forEach(inst => E(`${nameOf(inst)} is ${a.faction.toUpperCase()} and needs the ${(fd.detachments.find(d => d.id === a.requiresDetachment) || {}).name} detachment.`, inst.instanceId));
      const cap = bs[a.capKey];
      if (cap != null && (pts.allied[a.faction] || 0) > cap) E(`${a.faction} units total ${pts.allied[a.faction]} pts; the ${bs.name} cap is ${cap} pts.`);
    });

    // ---- Copy limits and surcharges
    const byDs = {};
    roster.units.forEach(inst => (byDs[inst.datasheetId] = byDs[inst.datasheetId] || []).push(inst));
    Object.entries(byDs).forEach(([dsId, list]) => {
      const def = ctx.unitById[dsId];
      if (!def) { list.forEach(i => E(`Unknown datasheet ${dsId}.`, i.instanceId)); return; }
      const lim = copyLimit(def, ctx);
      if (list.length > lim) {
        const why = hasKw(def, ctx, 'Epic Hero') ? 'is an Epic Hero (limit 1)' : `is limited to ${lim} in ${bs.name}`;
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
    });

    // ---- Per-unit keyword grants (e.g. Subterranean Assault Trygons)
    dets.forEach(d => (d.instanceGrants || []).forEach(g => {
      const list = roster.units.filter(u => (u.grants || []).includes(g.id) && g.unitIds.includes(u.datasheetId));
      if (g.max != null && list.length > g.max) E(`${g.label}: ${list.length} units chosen, up to ${g.max} allowed.`, list[g.max].instanceId);
    }));
    roster.units.forEach(inst => {
      const def = ctx.unitById[inst.datasheetId];
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
      if (ids.length > 1) E(`${nameOf(inst)} has ${ids.length} enhancements; a unit can have only one.`, inst.instanceId);
      ids.forEach(id => {
        const e = ctx.allEnh[id];
        if (!e) { E(`Unknown enhancement on ${nameOf(inst)}.`, inst.instanceId); return; }
        if (!ctx.enhById[id]) E(`${e.name} comes from ${(fd.detachments.find(d => d.id === e.detachmentId) || {}).name}, which is not in this roster.`, inst.instanceId);
        const isChar = hasKw(def, ctx, 'Character', inst);
        if (hasKw(def, ctx, 'Epic Hero')) E(`${def.name} is an Epic Hero and cannot take enhancements.`, inst.instanceId);
        else if (e.upgrade && isChar) E(`${e.name} is an Upgrade; give it to a non-CHARACTER unit.`, inst.instanceId);
        else if (!e.upgrade && !isChar) E(`${e.name} can only go on a CHARACTER.`, inst.instanceId);
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
      const extra = enhIds(inst).flatMap(id => (ctx.allEnh[id] || {}).leaderOf || []);
      const can = [...new Set([...(def.leaderOf || []), ...extra])];
      if (def.support && !inst.attachedTo) E(`${nameOf(inst)} is a Support unit and must be attached to a bodyguard unit.`, inst.instanceId);
      if (!inst.attachedTo) return;
      const target = roster.units.find(u => u.instanceId === inst.attachedTo);
      if (!target) { E(`${nameOf(inst)} is attached to a unit that is no longer in the roster.`, inst.instanceId); return; }
      const tdef = ctx.unitById[target.datasheetId];
      if (!can.length) E(`${nameOf(inst)} cannot lead other units.`, inst.instanceId);
      else if (!can.includes(target.datasheetId)) E(`${nameOf(inst)} can only lead ${can.map(id => (ctx.unitById[id] || {}).name || id).join(', ')}.`, inst.instanceId);
      if (target.attachedTo) E(`${nameOf(target)} is itself attached; attach ${nameOf(inst)} to a bodyguard unit.`, inst.instanceId);
      const role = def.support ? 'support' : 'leader';
      const key = target.instanceId + ':' + role;
      leadersOn[key] = (leadersOn[key] || []).concat(inst);
      const totalEnh = enhIds(inst).length + enhIds(target).length;
      if (totalEnh > 1) E(`${nameOf(inst)} and ${nameOf(target)} would form one attached unit with ${totalEnh} enhancements; an attached unit can have only one.`, inst.instanceId);
    });
    Object.entries(leadersOn).forEach(([key, list]) => {
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
      (def.optionRules || []).forEach(r => {
        if (r.forbidAllOf) { if (r.forbidAllOf.every(([k, v]) => (wg[k] || ((def.options.find(o => o.id === k) || {}).choices || [{}])[0].id) === v)) E(`${def.name}: ${r.message}`, inst.instanceId); return; }
        if ((wg[r.if] || 'none') === r.notValue) return;
        const ok = r.requireAnyOf ? r.requireAnyOf.some(([k, v]) => wg[k] === v) : r.requireAllOf.every(([k, v]) => wg[k] === v);
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

  function canLead(def, inst, roster, DATA) {
    const ctx = ctxFor(roster, DATA);
    const extra = (inst ? enhIds(inst) : []).flatMap(id => (ctx.allEnh[id] || {}).leaderOf || []);
    return [...new Set([...(def.leaderOf || []), ...extra])];
  }

  function eligibleReason(e, inst, roster, DATA) { const ctx = ctxFor(roster, DATA); const def = ctx.unitById[inst.datasheetId]; return eligible(e, def, inst, ctx); }
  return { warlordBlock, grantsFor, instGrants, dispositionsOf, dataVersionFor, eligibleReason, ctxFor, points, validate, copyLimit, nextCopyInfo, enhancementCount, enhancementBlock, optionMax, slotSize, slotUsed, ownCap, keywordsOf, hasKw, factionOf, buffed, attachedGroup, canLead, enhIds, addStat };
})();
if (typeof module !== 'undefined') module.exports = Engine;
