/* Property test over every datasheet of every army: build the text the app would export for
   (a) the default loadout and (b) the default loadout with one option applied, import it, and require
   the same loadout (what the unit carries) and the same points. No remarks allowed.
   The generator reads the datasheet the same way the importer does (RosterImport.describe), so it cannot catch a
   misread composition on its own; the real exports in fixtures/ cover that. What it does catch is the class of
   bug where layout, defaults or naming of one army's data break the matcher. */
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data.js')), Engine = require(path.join(ROOT, 'engine.js')), RI = require(path.join(ROOT, 'import.js'));
const gk = RI.gk;
const prefixOf = o => { const l = String(o.label), c = l.indexOf(':'); return c > 0 ? l.slice(0, c).trim() : null; };
const coreOf = o => String(o.label).replace(/^[^:]*:\s*/, '').replace(/\([^)]*\)/g, ' ').replace(/\s+replace(?:s|d)\b.*$/i, '').trim();
const n1 = l => { const m = /^(\d+)\s+(.*)$/.exec(String(l)); return m ? [+m[1], m[2]] : [1, String(l)]; };
const sameNm = (a, b) => RI.key(a).replace(/s\b/g, '') === RI.key(b).replace(/s\b/g, '');

function exportFor(fid, u, opt, choice) {
  const fd = DATA.factionData[fid], det = fd.detachments[0], disp = Engine.dispositionsOf(det)[0] || '';
  const D = RI.describe(u), big = u.sizes.length > 1 && opt && opt.type === 'count', n = u.sizes[big ? 1 : 0].models;
  const pre = opt && prefixOf(opt), sq = s => RI.key(s).replace(/ /g, '').replace(/s$/, '');
  const isModel = nm => D.models.some(m => m.sq.replace(/s$/, '') === sq(nm));
  const asModel = opt && opt.type !== 'choice' && isModel(coreOf(opt));
  /* model lines the app would print: every model the datasheet gives its own loadout, the rest under the unit name */
  const lines = [];
  if (n > 1) {
    const optional = w => (u.options || []).some(o => o.type !== 'choice' && sq(coreOf(o)) === w.sq.replace(/s$/, ''));   /* "0-1 Shade Runner": only when its option is taken */
    D.loads.filter(l => Array.isArray(l.who)).forEach(l => l.who.forEach(w => { if (optional(w)) return; if (!lines.some(x => sq(x.name) === w.sq.replace(/s$/, '')) && lines.length < n - 1) lines.push({ name: w.t.join(' '), n: 1, who: w }); }));
    if (pre && !lines.some(x => sq(x.name).includes(sq(pre)) || sq(pre).includes(sq(x.name)))) lines.unshift({ name: pre, n: 1 });
    if (asModel && !lines.some(x => sq(x.name) === sq(coreOf(opt)))) lines.push({ name: coreOf(opt), n: 1, who: D.models.find(m => m.sq.replace(/s$/, '') === sq(coreOf(opt))) });
    lines.push({ name: u.name, n: n - lines.reduce((a, x) => a + x.n, 0), rest: true });
  } else lines.push({ name: u.name, n, rest: true });
  const gear = lines.map(() => new Map());
  const add = (gi, lbl, k) => { const [m, nm0] = n1(lbl), nm = nm0.replace(/\s*\([^)]*\)\s*/g, ' ').trim(), key = gk(nm), g = gear[gi]; g.set(key, { lbl: nm, n: (g.has(key) ? g.get(key).n : 0) + k * m }); };
  const sub = (gi, lbl, k) => { const [m, nm] = n1(lbl), key = gk(nm), g = gear[gi]; if (g.has(key)) g.get(key).n -= k * m; };
  const named = line => line.who && D.loads.some(l => Array.isArray(l.who) && l.who.some(w => w.sq === line.who.sq));
  lines.forEach((line, gi) => {
    const loads = D.loads.filter(l => !l.who || (l.who === 'rest' ? !named(line) : Array.isArray(l.who) && line.who && l.who.some(w => w.sq === line.who.sq)));
    const seen = new Set();
    loads.forEach(l => l.items.forEach(it => { const k = gk(n1(it)[1]); if (seen.has(k) || (u.slots || []).some(s => gk(s.default) === k)) return; seen.add(k); add(gi, it, line.n); }));
    (u.slots || []).forEach(s => { if (line.rest) add(gi, s.default, line.n); });
  });
  const target = pre ? Math.max(0, lines.findIndex(x => sq(x.name).includes(sq(pre)) || sq(pre).includes(sq(x.name)))) : lines.length - 1;
  (u.options || []).forEach(o => {
    if (o.type !== 'choice' || /^none$/i.test(o.choices[0].label)) return;
    const gi = prefixOf(o) ? Math.max(0, lines.findIndex(x => sq(x.name).includes(sq(prefixOf(o))) || sq(prefixOf(o)).includes(sq(x.name)))) : lines.length - 1;
    if (!gear[gi].has(gk(n1(o.choices[0].label)[1]))) add(gi, o.choices[0].label, 1);
  });
  if (opt && !asModel) {
    const gi = opt.type === 'choice' ? (() => { const k = gk(n1(opt.choices[0].label)[1]); const i = gear.findIndex((g, j) => (j === target || !pre) && g.has(k) && g.get(k).n > 0); return i >= 0 ? i : target; })() : target;
    if (opt.type === 'choice') { sub(gi, opt.choices[0].label, 1); if (!/^none$/i.test(choice.label)) add(gi, choice.label, 1); }
    else { (opt.slots || []).forEach(sid => { const s = (u.slots || []).find(x => x.id === sid); if (s) s.default.split(/\s+and\s+/i).forEach(p => sub(gi, p, 1)); }); add(gi, coreOf(opt), 1); }
  }
  const multi = n > 1, body = [];
  lines.forEach((line, gi) => { if (multi && line.n > 0) body.push(`\u2022 ${line.n}x ${line.name}`); [...gear[gi].values()].filter(v => v.n > 0).forEach(v => body.push(`${multi ? '  \u25E6' : '\u2022'} ${v.n}x ${v.lbl}`)); });
  return [`P (999 points)`, '', DATA.factions.find(f => f.id === fid).name, `${det.name} (${det.dp} Detachment Points)`, disp, 'Strike Force (2000 points)', '', 'OTHER DATASHEETS', '', `${u.name} (${u.sizes[0].pts} points)`, ...body, '', 'Exported with App Version: v1'].join('\n');
}
/* what the unit carries beyond its defaults, independent of which equivalent option slot holds it */
function loadout(u, wg) {
  const out = [];
  (u.options || []).forEach(o => {
    const v = wg[o.id];
    if (o.type === 'choice') { if (v != null && v !== o.choices[0].id) { const c = o.choices.find(c => c.id === v); out.push('+' + gk(n1(c ? c.label : v)[1]), '-' + gk(n1(o.choices[0].label)[1])); } }
    else for (let i = 0; i < (+v || 0); i++) out.push('+' + gk(coreOf(o)));
  });
  return out.sort().join(',');
}
function check(fid, u, opt, choice) {
  const txt = exportFor(fid, u, opt, choice), res = RI.run(txt, DATA, Engine);
  if (!res.ok) return `hard stop: ${res.error.message}`;
  const inst = res.roster.units[0]; if (!inst) return 'unit skipped';
  const want = {}; (u.options || []).forEach(o => { if (o.type === 'choice') want[o.id] = o.choices[0].id; });
  if (opt) want[opt.id] = opt.type === 'choice' ? choice.id : 1;
  const r = { ...res.roster, units: [inst] }, rw = { ...r, units: [{ ...inst, wargear: want, size: inst.size }] };
  const got = loadout(u, inst.wargear), exp = loadout(u, want), pg = Engine.points(r, DATA).total, pw = Engine.points(rw, DATA).total;
  const notes = res.notes.filter(x => /^(Wargear|Unit size)/.test(x.text)).map(x => x.text);
  if (got !== exp || pg !== pw || notes.length) return `got [${got}] want [${exp}] pts ${pg}/${pw} ${notes.join(' | ')}\n      ${txt.split('\n').slice(9, -2).join(' / ')}`;
  return null;
}
function all() {
  let cases = 0; const fails = [];
  DATA.factions.filter(f => DATA.factionData[f.id]).forEach(f => DATA.factionData[f.id].units.forEach(u => {
    const one = (o, c, tag) => { cases++; const e = check(f.id, u, o, c); if (e) fails.push(`${f.id}/${u.id} [${tag}]: ${e}`); };
    one(null, null, 'defaults');
    (u.options || []).forEach(o => (o.type === 'choice' ? o.choices.slice(1).forEach(c => one(o, c, `${o.id}=${c.id}`)) : one(o, null, o.id)));
  }));
  return { cases, fails };
}
module.exports = { all, check, exportFor };
if (require.main === module) { const { cases, fails } = all(); console.log(`${cases} cases, ${fails.length} fail`); fails.slice(0, +process.argv[2] || 40).forEach(x => console.log(' -', x.slice(0, 500))); }
