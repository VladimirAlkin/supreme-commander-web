/* Chaos Space Marines: detachment `summary` was rule text cut with .slice(0,140). Short hand-written
   one-liners, like the other armies; the full wording stays in detachment.rule.text. */
const { loadData, writeData } = require('./lib.js');
const D = loadData();
const S = {
  cabal_of_chaos: 'Psykers and Daemon Princes that make a Dark Pact hit harder: +1 S ranged, or +2 S and +1 AP in melee.',
  chaos_cult: 'DAMNED units can make a Desperate Pact for +2 Move and +2 to Charge rolls, at the risk of D3 mortal wounds.',
  creations_of_bile: 'At the start of the battle choose, or roll for, two augmentations for your non-DAMNED Infantry.',
  cult_of_the_arkifane: 'Vehicles gain DAEMON; Vehicles, Lord Discordant and Vashtorr gain SOUL FORGE and a 5+ invulnerable save.',
  deceptors: 'Chosen Legionaries and Cultist Mobs, and Characters attached to them, gain Infiltrators.',
  devotees_of_destruction: 'Havocs and Obliterators’ ranged attacks have [HEAVY].',
  dread_talons: 'Enemy units below Starting Strength within 12" of your army take Battle-shock tests, at -1 to the result.',
  fellhammer_siege_host: 'Non-DAMNED units subtract 1 from the Wound roll of ranged attacks whose Strength beats their Toughness.',
  hurons_marauders: 'Each Command phase pick an ability for your Infantry; those visible to Huron Blackheart gain both.',
  murdertalon_raiders: 'Infantry Fly units re-roll Hit rolls of 1 against weakened enemies and are harder to hit by them.',
  nightmare_hunt: 'Enemy units below Starting Strength near your army take Battle-shock at -1; +1 to Hit against Below Half-strength units.',
  pactbound_zealots: 'Every unit takes a Mark of Chaos (a god or Undivided) that strengthens its Dark Pacts.',
  renegade_raiders: 'Ranged weapons gain [ASSAULT], and attacks against units on objectives get +1 AP.',
  renegade_warband: 'Units lose Dark Pacts; ranged weapons gain [ASSAULT]; no Cults of the Dark Gods.',
  soulforged_warpack: 'Daemon Vehicles can invoke their contract on a Dark Pact: +1 to wound at range, +2 Attacks in melee.',
  veterans_long_war: 'Each Command phase pick an enemy unit as your focus of hatred and re-roll Hit rolls against it.',
  warpstrike_champions: 'At the end of your opponent’s turn, Terminators, Obliterators and Mutilators can return to Strategic Reserves.',
};
const fd = D.factionData.chaosSpaceMarines;
fd.detachments.forEach(d => { if (!S[d.id]) throw new Error('missing ' + d.id); d.summary = S[d.id]; });
writeData(D);
console.log(fd.detachments.map(d => d.summary.length).join(' '));
