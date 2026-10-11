/* Chaos Space Marines: Daemonic Allegiance (Wahapedia Datasheets_abilities, type Primarch) on both Daemon Princes,
   and the effect text of each Pactbound Zealots Mark, cut verbatim from the detachment rule. */
const { loadData, writeData } = require('./lib.js');
const D = loadData();
const fd = D.factionData.chaosSpaceMarines;

/* ---- Pactbound Zealots: Mark notes ---- */
const pz = fd.detachments.find(d => d.id === 'pactbound_zealots');
const T = pz.rule.text;
const seg = (head) => { const m = T.match(new RegExp('■ ' + head + ': (.*?)(?= ■| UNITS THAT| RESTRICTIONS|$)')); if (!m) throw new Error('no segment ' + head); return m[1].trim(); };
const LH = '[LETHAL HITS]', SH = '[SUSTAINED HITS 1]';
const notes = {
  mk_khorne: `Dark Pact ${LH}: ${seg('KHORNE')}`,
  mk_tzeentch: `Dark Pact ${LH}: ${seg('TZEENTCH')}`,
  mk_nurgle: `Dark Pact ${SH}: ${seg('NURGLE')}`,
  mk_slaanesh: `Dark Pact ${SH}: ${seg('SLAANESH')}`,
  mk_undivided: `Dark Pact ${LH} or ${SH}: ${seg('CHAOS UNDIVIDED')}`,
};
pz.instanceGrants.forEach(g => { if (notes[g.id]) g.note = notes[g.id]; });
/* A Daemon Prince already has a god keyword from Daemonic Allegiance, so it is not given a Mark
   ("does not already have one of the following keywords"). */
const DP = ['daemon_prince', 'daemon_prince_wings'];
pz.instanceGrants.forEach(g => { g.unitIds = g.unitIds.filter(id => !DP.includes(id)); });

/* ---- Daemonic Allegiance ---- */
const BASE = "When you select this model to include in your army, you must select one of the keywords below. Until the end of the battle, this model has that keyword and the characteristic modifier stated for that keyword below.";
const GODS = [
  ['khorne', 'Khorne', 'blood', "Add 2 to the Strength characteristic of this model's hellforged weapons."],
  ['tzeentch', 'Tzeentch', 'arcane', 'Add 3 to the Attacks characteristic of its infernal cannon.'],
  ['nurgle', 'Nurgle', 'green', 'Add 1 to its Toughness characteristic.'],
  ['slaanesh', 'Slaanesh', 'slaanesh', 'Add 2" to its Move characteristic.'],
];
const text = BASE + ' ' + GODS.map(([, n, , t]) => `■ ${n.toUpperCase()}: ${t}`).join(' ');
DP.forEach(id => {
  const u = fd.units.find(x => x.id === id);
  if (!u.abilities.some(a => a.name === 'Daemonic Allegiance')) u.abilities.push({ name: 'Daemonic Allegiance', text, kind: 'datasheet' });
  u.instanceGrants = GODS.map(([k, n, tone, t]) => ({ id: 'al_' + k, group: 'allegiance', label: 'Daemonic Allegiance: ' + n, keyword: n, tone, required: true, note: t }));
});
writeData(D);
console.log(JSON.stringify(notes, null, 1));
