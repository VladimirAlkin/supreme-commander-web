/* One-off: parse the restriction line of every Chaos Space Marines enhancement into `eligible`.
   Sources agree: Wahapedia text; BSData conditions (Conduit of Chaos, Pact of Destruction,
   Eye of Oblivion, Shadowcowl Talisman, Pact of Cursed Pinions) say the same. */
const { loadData, writeData } = require('./lib.js');
const D = loadData();
const fd = D.factionData.chaosSpaceMarines;
const T = s => s.replace(/\s+/g, ' ').trim();
const unparsed = [];
fd.detachments.forEach(d => d.enhancements.forEach(e => {
  const first = T((e.text || '').split(/(?<=[.■])\s/)[0]);
  const m = first.match(/^(.*?)\bmodel\b(.*)$/i);
  if (!m) { unparsed.push(e.id); return; }
  let head = T(m[1]), tail = T(m[2]);
  const el = { factionsAll: ['Heretic Astartes'] };
  const all = [], any = [], none = [];
  let excl = (tail.match(/excluding ([^)]*)\)?/i) || (head.match(/\(excluding ([^)]*)\)/i)) || [])[1] || '';
  head = head.replace(/\(excluding[^)]*\)/i, '').trim();
  const withDS = /with the Deep Strike ability/i.test(tail);
  head = head.replace(/^HERETIC ASTARTES\s*/i, '').trim();
  const cap = s => s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  if (/^DARK APOSTLE or DAMNED$/i.test(head)) any.push('Dark Apostle', 'Damned');
  else if (/JUMP PACK/i.test(head) || /WITH JUMP PACK/i.test(tail)) all.push('Chaos Lord', 'Jump Pack');
  else if (/^CHAOS LORD$/i.test(head)) any.push('Chaos Lord');
  else if (head) head.split(/\s+and\s+/i).forEach(k => all.push(cap(k)));
  if (/WITH JUMP PACK/i.test(tail) && !all.includes('Jump Pack')) all.push('Chaos Lord', 'Jump Pack');
  excl.split(/\s+and\s+|,\s*/i).map(s => s.replace(/\bmodels?\b/i, '').trim()).filter(Boolean).forEach(k => none.push(cap(k)));
  if (all.length) el.keywordsAll = [...new Set(all)];
  if (any.length) el.keywordsAny = any;
  if (none.length) el.keywordsNone = none;
  if (withDS) el.coreAll = ['Deep Strike'];
  e.eligible = el;
}));
if (unparsed.length) { console.error('UNPARSED', unparsed); process.exit(1); }
writeData(D);
fd.detachments.forEach(d => d.enhancements.forEach(e => console.log(e.id.padEnd(46), JSON.stringify({ ...e.eligible, factionsAll: undefined }))));
