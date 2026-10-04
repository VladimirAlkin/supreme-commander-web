/* Chapter Approved Mission Deck 2026-27: Force Dispositions, Primary and Secondary Missions, VP caps.
   Card texts are short paraphrases. Checked against Wahapedia and the GW Warhammer Event Companion v1.2 (Aug 2026),
   see claude/army-builder/missions_rules_verified.md. No DOM here.

   Scoring line timings (t):
     cmd  end of your Command phase (from round 2; in round 5 it moves to the end of your turn unless r5:false)
     eot  end of your turn
     eat  end of any turn (yours or the opponent's)
     eop  end of the opponent's turn (or the end of round 5, whichever comes first)
     eob  end of the battle
   Line kinds (k):
     bool   one condition, vp
     or     pick one option: opts [{l, vp}]
     count  "for each": per VP each, chips 1..max (stepper when max > 6); optional x = cumulative extra
            x {k:'bool', l, vp: n => VP}  or  x {k:'count', l, per, max ('n' = up to the main count)} */
const Missions = (function () {
  const DISPS = ['Take and Hold', 'Purge the Foe', 'Disruption', 'Reconnaissance', 'Priority Assets'];
  const DSHORT = { 'Take and Hold': 'T&H', 'Purge the Foe': 'PtF', 'Disruption': 'Disr', 'Reconnaissance': 'Recon', 'Priority Assets': 'PA' };
  /* my disposition card -> [mission under the opponent's symbol, in DISPS order] */
  const MATRIX = {
    'Take and Hold': ['battlefield_dominance', 'immovable_object', 'determined_acquisition', 'purge_and_secure', 'inescapable_dominion'],
    'Purge the Foe': ['unstoppable_force', 'meatgrinder', 'punishment', 'consecrate', 'destroyers_wrath'],
    'Disruption': ['death_trap', 'delaying_action', 'outmanoeuvre', 'smoke_and_mirrors', 'locate_and_deny'],
    'Reconnaissance': ['reconnaissance_sweep', 'triangulation', 'surveil_the_foe', 'gather_intel', 'search_and_scour'],
    'Priority Assets': ['secure_asset', 'vital_link', 'extract_relic', 'vanguard_operation', 'sabotage'],
  };
  const MIRRORED = ['battlefield_dominance', 'meatgrinder', 'outmanoeuvre', 'gather_intel', 'sabotage'];

  const HOLD1 = (vp) => ({ id: 'hold', t: 'cmd', r: [2, 5], l: 'Hold 1+ objective (not your home)', k: 'bool', vp });
  const MORE = (vp) => ({ id: 'more', t: 'cmd', r: [2, 5], l: 'Hold more objectives than the opponent', k: 'bool', vp });
  const KILL = (vp) => ({ id: 'kill', t: 'eot', l: 'One or more enemy units destroyed this turn', k: 'bool', vp });
  const EACH = (per, max) => ({ id: 'each', t: 'cmd', r: [2, 5], l: 'Objectives you hold (not your home)', k: 'count', per, max, u: ['objective', 'objectives'] });
  const NEWOBJ = (vp) => ({ id: 'new', t: 'eot', r: [2, 5], l: 'Took a non-home objective you did not hold at the start of the turn', k: 'bool', vp });
  const OPPHOME = (id, t, vp, r) => ({ id, t, r, l: "Hold the opponent's home objective", k: 'bool', vp });

  const P = {
    battlefield_dominance: { name: 'Battlefield Dominance', sum: 'Out-hold the enemy early, then score every objective you hold, more while you keep your home.',
      lines: [{ id: 'more', t: 'eot', r: [1, 2], l: 'Hold more objectives than the opponent', k: 'bool', vp: 2 },
        { id: 'each', t: 'cmd', r: [2, 5], l: 'Objectives you hold (home included)', k: 'count', per: 3, max: 6, u: ['objective', 'objectives'], x: { k: 'bool', l: 'One of them is your home objective (+2 per other)', vp: n => 2 * (n - 1) } }] },
    immovable_object: { name: 'Immovable Object', sum: 'Sit on the centre and on the ground you took. Make the enemy pay for every objective.',
      lines: [{ id: 'centre', t: 'eot', l: 'Hold 1+ central objective', k: 'bool', vp: 3 },
        { id: 'each', t: 'cmd', r: [2, 4], r5: false, l: 'Objectives you hold (not your home)', k: 'count', per: 5, max: 3, u: ['objective', 'objectives'] },
        { id: 'each5', t: 'eot', r: [5, 5], l: 'Objectives you hold (not your home)', k: 'count', per: 5, max: 3, u: ['objective', 'objectives'] }] },
    determined_acquisition: { name: 'Determined Acquisition', sum: 'Keep taking new ground, and push into the enemy half.',
      lines: [{ id: 'new', t: 'eot', l: 'Non-home objectives taken this turn', k: 'count', per: 2, max: 5, u: ['objective', 'objectives'] },
        { id: 'each', t: 'cmd', r: [2, 5], l: 'Objectives you hold (home included)', k: 'count', per: 3, max: 6, u: ['objective', 'objectives'], x: { k: 'count', l: 'of them in the enemy territory', per: 3, max: 'n' } }] },
    purge_and_secure: { name: 'Purge and Secure', sum: 'Kill around the objectives, hold forward ground, keep taking more.',
      lines: [{ id: 'kill', t: 'eot', l: 'Enemy unit destroyed by your unit near an objective, or an enemy unit that started the turn near an objective destroyed', k: 'bool', vp: 3 },
        EACH(4, 4), NEWOBJ(3)] },
    inescapable_dominion: { name: 'Inescapable Dominion', sum: 'Spread over the battlefield, out-hold the enemy, end the game on their home.',
      lines: [{ id: 'three', t: 'eot', l: 'Hold 3+ objectives', k: 'bool', vp: 4 },
        { id: 'two', t: 'cmd', r: [2, 5], l: 'Hold 2+ objectives', k: 'bool', vp: 5 }, MORE(4), OPPHOME('home', 'eob', 5)] },
    unstoppable_force: { name: 'Unstoppable Force', sum: 'Break through: kill, take forward objectives, finish in the centre.',
      lines: [KILL(3), EACH(4, 4), NEWOBJ(3), { id: 'centre', t: 'eob', l: 'Hold 1+ central objective', k: 'bool', vp: 5 }] },
    meatgrinder: { name: 'Meatgrinder', sum: 'Kill more than you lose and keep a foot on the objectives.',
      lines: [KILL(3), HOLD1(4), { id: 'trade', t: 'eot', r: [2, 5], l: 'Destroyed more enemy units this turn than you lost in their last turn', k: 'bool', vp: 5 }, OPPHOME('home', 'eot', 5, [2, 5])] },
    punishment: { name: 'Punishment', sum: 'Mark up to three enemy units each turn and remove them from the battlefield.', start: 'Start of your turn: mark 1-3 enemy units on objectives and/or that killed your units last turn (if none, any one enemy unit). They stay condemned until your next turn.',
      lines: [{ id: 'cond', t: 'eat', l: 'A condemned enemy unit left the battlefield this turn', k: 'bool', vp: 5 }, HOLD1(4), MORE(5), OPPHOME('home', 'eob', 8)] },
    consecrate: { name: 'Consecrate', sum: 'Units that kill can consecrate the objective they stand on.', note: 'A unit that destroys a unit becomes a consecration unit. End of your turn: each can consecrate one objective it is near (not your home), placing your marker there.',
      lines: [{ id: 'cons', t: 'eot', l: 'Objectives consecrated', k: 'or', opts: [{ l: '1–2 objectives', vp: 3 }, { l: '3+ objectives', vp: 6 }] }, HOLD1(4), MORE(4),
        { id: 'home', t: 'eob', l: "The opponent's home objective is consecrated", k: 'bool', vp: 5 }] },
    destroyers_wrath: { name: "Destroyer's Wrath", sum: 'Pure slaughter, with a foothold on the objectives.',
      lines: [KILL(3), HOLD1(4), MORE(6), { id: 'trade', t: 'eot', r: [2, 5], l: 'Destroyed more enemy units this turn than you lost in their last turn', k: 'bool', vp: 4 }] },
    death_trap: { name: 'Death Trap', sum: 'Trap terrain areas (more for objectives) and kill enemies who started there.', note: 'Action Booby Trap (your Shooting phase, any number of units, each in a different terrain area outside your deployment zone or on a non-home objective): that area is trapped at once, place your marker.',
      lines: [{ id: 'trap', t: 'eot', l: 'Terrain areas trapped this turn', k: 'count', per: 2, max: 8, u: ['terrain area', 'terrain areas'], x: { k: 'count', l: 'of them objectives (+3 each)', per: 3, max: 'n' } },
        { id: 'kill', t: 'eot', l: 'Enemy unit that started the turn in a trapped terrain area destroyed (it can be trapped later in the turn)', k: 'bool', vp: 3 }, HOLD1(4)] },
    delaying_action: { name: 'Delaying Action', sum: 'Bleed the advancing enemy and hold the centre with an expansion objective.',
      lines: [{ id: 'kills', t: 'eot', l: 'Enemy units destroyed this turn', k: 'count', per: 2, max: 10, u: ['unit', 'units'] }, HOLD1(4),
        { id: 'cx', t: 'eot', r: [2, 5], l: 'Hold 1+ central and 1+ expansion objective', k: 'bool', vp: 3 }] },
    outmanoeuvre: { name: 'Outmanoeuvre', sum: 'Take ground fast, and more of it as the game goes on. Their home is worth 10.',
      lines: [OPPHOME('home', 'eot', 10),
        { id: 'r1', t: 'eot', r: [1, 1], l: 'Objectives you hold (not your home)', k: 'count', per: 4, max: 4, u: ['objective', 'objectives'] },
        { id: 'r23', t: 'cmd', r: [2, 3], r5: false, l: 'Objectives you hold (not your home)', k: 'count', per: 5, max: 3, u: ['objective', 'objectives'] },
        { id: 'r45', t: 'eot', r: [4, 5], l: 'Objectives you hold (not your home)', k: 'count', per: 6, max: 3, u: ['objective', 'objectives'] }] },
    smoke_and_mirrors: { name: 'Smoke and Mirrors', sum: 'Decoy objectives, deeper is better. Four decoys at the end are worth 10.', note: 'Action Decoy (your Shooting phase, any number of units, each on a different non-home objective that is not decoyed): completes at the end of your turn if your unit controls it; place your marker.',
      lines: [{ id: 'dec', t: 'eot', l: 'Objectives decoyed now', k: 'count', per: 2, max: 5, u: ['objective', 'objectives'], x: { k: 'count', l: 'of them in the enemy territory (+2 each)', per: 2, max: 'n' } },
        HOLD1(4), { id: 'four', t: 'eob', l: '4+ objectives decoyed', k: 'bool', vp: 10 }] },
    locate_and_deny: { name: 'Locate and Deny', sum: 'Hide five markers, sweep them away until one is left, and guard that one.', start: 'Start of the battle: put your markers in five terrain areas outside your deployment zone (in all of them if fewer).', startR1: true, note: 'Action Sensor Sweep (once per turn, on a central objective, completes at the end of your turn if you control it): remove a marker; not while only one is left.',
      lines: [{ id: 'kill', t: 'eot', l: 'Enemy unit that started the turn near an objective destroyed', k: 'bool', vp: 4 },
        { id: 'one', t: 'eot', l: 'Exactly one of YOUR markers left, your unit in its terrain area, no enemy units there', k: 'bool', vp: 4 },
        HOLD1(4), { id: 'one_b', t: 'eob', l: 'Exactly one of YOUR markers left, your unit in its terrain area, no enemy units there', k: 'bool', vp: 5 }] },
    reconnaissance_sweep: { name: 'Reconnaissance Sweep', sum: 'Spread out into the table quarters and pick off what you find.',
      lines: [{ id: 'q', t: 'eot', l: 'Units in different table quarters, not within 6″ of the centre', k: 'or', opts: [{ l: '3 table quarters', vp: 3 }, { l: '4 table quarters', vp: 6 }] },
        { id: 'kills', t: 'eot', l: 'Enemy units destroyed this turn', k: 'count', per: 1, max: 15, u: ['unit', 'units'] }, HOLD1(3)] },
    triangulation: { name: 'Triangulation', sum: 'Triangulate up to three objectives from round 2. Four objectives at the end are worth 10.', note: 'Action Triangulate (from round 2, once per turn, on a non-home objective): completes at the end of your turn if you control it; place your marker.',
      lines: [HOLD1(4), { id: 'tri', t: 'eot', r: [2, 5], l: 'Objectives triangulated', k: 'or', opts: [{ l: '1 objective', vp: 3 }, { l: '2 objectives', vp: 6 }, { l: '3+ objectives', vp: 10 }] },
        { id: 'four', t: 'eob', l: 'Hold 4+ objectives', k: 'bool', vp: 10 }] },
    surveil_the_foe: { name: 'Surveil the Foe', sum: 'Watch enemy units and clear away the enemy markers.', note: 'Moving onto an objective removes the opponent’s markers there. Action Surveil (your Shooting phase, any unit): an enemy unit within 18″ and visible is surveilled this turn.',
      lines: [{ id: 'surv', t: 'eot', l: 'An enemy unit was surveilled (not one sitting on an objective that has a marker)', k: 'bool', vp: 4 }, HOLD1(4), MORE(4),
        { id: 'clear', t: 'eot', r: [2, 5], l: "None of the opponent's markers left on the battlefield", k: 'bool', vp: 5 }] },
    gather_intel: { name: 'Gather Intel', sum: 'Grab the centre in round 1, then extract intelligence from objectives.', note: 'Action Extract Intelligence (from round 2, any number of units, each on a different non-home objective without your marker): completes at the end of your turn if you control it; place your marker.',
      lines: [{ id: 'centre', t: 'eot', r: [1, 1], l: 'Hold 1+ central objective', k: 'bool', vp: 6 }, HOLD1(4),
        { id: 'intel', t: 'eot', r: [2, 5], l: 'Units that completed Extract Intelligence', k: 'count', per: 7, max: 3, u: ['unit', 'units'] },
        { id: 'three', t: 'eob', l: '3+ of your markers on the battlefield', k: 'bool', vp: 5 },
        { id: 'home', t: 'eob', l: "One of your markers on the opponent's home objective", k: 'bool', vp: 5 }] },
    search_and_scour: { name: 'Search and Scour', sum: 'Hold the centre, hunt in the terrain, keep the enemy out of your half.',
      lines: [{ id: 'centre', t: 'eot', l: 'Hold 1+ central objective', k: 'bool', vp: 3 },
        { id: 'kill', t: 'eot', l: 'Enemy unit that started the turn in a terrain area destroyed', k: 'bool', vp: 2 },
        EACH(4, 4), { id: 'terr', t: 'eob', l: 'No enemy units wholly in your territory', k: 'bool', vp: 5 }] },
    secure_asset: { name: 'Secure Asset', sum: 'Secure the asset every turn and hold ground.', note: 'Action Secure Asset (once per turn, on a non-home objective): completes at the end of your turn if you control it.',
      lines: [{ id: 'asset', t: 'eot', l: 'Your unit secured the asset this turn', k: 'bool', vp: 4 },
        { id: 'kill', t: 'eot', l: 'Enemy unit that started the turn near a central objective destroyed', k: 'bool', vp: 2 },
        HOLD1(4), { id: 'three', t: 'cmd', r: [2, 5], l: 'Hold 3+ objectives', k: 'bool', vp: 4 }] },
    vital_link: { name: 'Vital Link', sum: 'Hold the central node and pile your markers on it.', note: 'Action Maintain Control (once per turn, on a central objective): completes at the end of your turn if you control it; place your marker.',
      lines: [{ id: 'centre', t: 'eot', l: 'Hold 1+ central objective', k: 'bool', vp: 2, x: { k: 'count', l: 'your markers on central objectives you hold (+1 each)', per: 1, max: 5 } },
        { id: 'hold', t: 'cmd', r: [2, 5], l: 'Hold 1+ objective (not your home)', k: 'bool', vp: 4, x: { k: 'bool', l: 'One of them is central (+4)', vp: () => 4 } },
        OPPHOME('home', 'eob', 10)] },
    extract_relic: { name: 'Extract Relic', sum: 'Sweep away the enemy markers until one is left, and secure that one.', note: 'Action Sensor Sweep (once per turn, on a central objective, completes at the end of your turn if you control it): remove a marker; not while only one is left.',
      lines: [{ id: 'sweep', t: 'eot', l: 'Your unit performed a sensor sweep this turn', k: 'bool', vp: 4 },
        { id: 'kill', t: 'eot', l: 'Enemy unit that started the turn near an objective destroyed', k: 'bool', vp: 3 },
        { id: 'one', t: 'eot', l: "Exactly one of the OPPONENT's markers left, your unit in its terrain area, no enemy units there", k: 'bool', vp: 4 },
        HOLD1(4), { id: 'one_b', t: 'eob', l: "Exactly one of the OPPONENT's markers left, your unit in its terrain area, no enemy units there", k: 'bool', vp: 5 }] },
    vanguard_operation: { name: 'Vanguard Operation', sum: 'Strike into enemy terrain, keep killing, finish on their home.', note: 'Action Vanguard Operation (once per turn, a unit in a terrain area in the enemy territory): completes at the end of your turn if no enemy units are in that area.',
      lines: [{ id: 'op', t: 'eot', l: 'Your unit performed a vanguard operation this turn', k: 'bool', vp: 4 }, { id: 'kill', t: 'eot', l: 'One or more enemy units destroyed this turn', k: 'bool', vp: 2 },
        HOLD1(4), OPPHOME('home', 'eob', 10)] },
    sabotage: { name: 'Sabotage', sum: 'Commit sabotage on objectives, better in the enemy half.', note: 'Action Sabotage (any number of units, each on a different non-home objective): completes at the end of your turn if the unit controls it.',
      lines: [{ id: 'sab', t: 'eot', l: 'Units that committed sabotage', k: 'count', per: 3, max: 5, u: ['unit', 'units'], x: { k: 'count', l: 'of them on objectives in the enemy territory (+2 each)', per: 2, max: 'n' } }, HOLD1(4)] },
  };

  const S = {
    no_prisoners: { name: 'No Prisoners', sum: 'Destroy enemy units.', lines: [{ id: 'a', t: 'eat', l: 'Enemy units destroyed this turn', k: 'or', opts: [{ l: '1 unit', vp: 2 }, { l: '2 units', vp: 4 }, { l: '3+ units', vp: 5 }] }] },
    overwhelming_force: { name: 'Overwhelming Force', sum: 'Destroy enemy units that sat on objectives.', lines: [{ id: 'a', t: 'eat', l: 'Enemy units destroyed that started the turn near an objective', k: 'or', opts: [{ l: '1 unit', vp: 3 }, { l: '2+ units', vp: 5 }] }] },
    plunder: { name: 'Plunder', sum: 'Plunder a terrain area outside your territory.', note: 'Action Plunder (once per turn, a unit in a terrain area outside your territory): completes at once.', wd: { k: 'pair', other: 'cleanse' },
      lines: [{ id: 'a', t: 'eot', l: 'A terrain area was plundered this turn', k: 'bool', vp: 5 }] },
    display_of_might: { name: 'Display of Might', sum: 'Have more units than the enemy wholly in No Man’s Land (no AIRCRAFT or battle-shocked).',
      lines: [{ id: 'a', t: 'eot', l: 'More of your units wholly in No Man’s Land', k: 'bool', vp: 2 }, { id: 'b', t: 'eop', l: 'More of your units wholly in No Man’s Land', k: 'bool', vp: 5 }] },
    outflank: { name: 'Outflank', sum: 'Reach the battlefield edges outside your territory (no AIRCRAFT or battle-shocked).',
      lines: [{ id: 'a', t: 'eot', l: 'Units within 6″ of battlefield edges', k: 'or', opts: [{ l: 'One edge, outside your territory', vp: 3 }, { l: 'Opposite edges, one outside your territory', vp: 5 }] }] },
    beacon: { name: 'Beacon', sum: 'Push your beacon unit forward and keep it alive.', wd: { k: 'beacon' },
      lines: [{ id: 'a', t: 'eop', l: 'Beacon unit on the battlefield', k: 'or', opts: [{ l: 'Outside your deployment zone', vp: 3 }, { l: 'Outside your territory', vp: 5 }] }] },
    cleanse: { name: 'Cleanse', sum: 'Cleanse non-home objectives.', note: 'Action Cleanse (any number of units, each on a different non-home objective): completes at the end of your turn if the unit controls it.', wd: { k: 'pair', other: 'plunder' },
      lines: [{ id: 'a', t: 'eot', l: 'Objectives cleansed this turn', k: 'or', opts: [{ l: '1 objective', vp: 2 }, { l: '2+ objectives', vp: 5 }] }] },
    a_grievous_blow: { name: 'A Grievous Blow', fixed: true, sum: 'Destroy big enemy units (starting strength 13+).', wd: { k: 'ask', q: 'No enemy unit with starting strength 13+ on the battlefield?' },
      lines: [{ id: 'f', mode: 'fixed', t: 'eat', l: 'Enemy units with starting strength 13+ destroyed', k: 'or', opts: [{ l: '1 unit', vp: 4 }, { l: '2+ units', vp: 5 }] },
        { id: 't', mode: 'tactical', t: 'eat', l: 'Enemy unit with starting strength 13+ destroyed', k: 'bool', vp: 5 }] },
    defend_stronghold: { name: 'Defend Stronghold', sum: 'Keep your home objective and your deployment zone clear.', wd: { k: 'r1must' },
      lines: [{ id: 'a', t: 'eop', r: [2, 5], l: 'Hold your home objective', k: 'bool', vp: 3, x: { k: 'bool', l: 'No enemy units in your deployment zone (+2)', vp: () => 2 } }] },
    engage_on_all_fronts: { name: 'Engage on All Fronts', fixed: true, sum: 'Have a presence in the table quarters (units wholly inside, not within 6″ of the centre).',
      lines: [{ id: 'f', mode: 'fixed', t: 'eot', l: 'Presence in table quarters', k: 'or', opts: [{ l: '3 quarters', vp: 2 }, { l: '4 quarters', vp: 4 }] },
        { id: 't', mode: 'tactical', t: 'eot', l: 'Presence in table quarters', k: 'or', opts: [{ l: '3 quarters', vp: 3 }, { l: '4 quarters', vp: 5 }] }] },
    secure_no_mans_land: { name: "Secure No Man's Land", sum: 'Hold two objectives in No Man’s Land.', lines: [{ id: 'a', t: 'eot', l: 'Hold 2+ objectives in No Man’s Land (not your home)', k: 'bool', vp: 5 }] },
    forward_position: { name: 'Forward Position', sum: 'Take the enemy home or every expansion objective.', wd: { k: 'r1may' },
      lines: [{ id: 'a', t: 'eot', l: "Hold the opponent's home and/or every expansion objective", k: 'bool', vp: 5 }] },
    centre_ground: { name: 'Centre Ground', sum: 'Stand within 3″ of the centre with the enemy kept away (no AIRCRAFT or battle-shocked).',
      lines: [{ id: 'a', t: 'eot', l: 'Your unit within 3″ of the centre', k: 'or', opts: [{ l: 'No enemy within 3″', vp: 3 }, { l: 'No enemy within 6″', vp: 5 }] }] },
    assassination: { name: 'Assassination', fixed: true, sum: 'Kill enemy CHARACTERS.',
      lines: [{ id: 'f', mode: 'fixed', t: 'eat', l: 'Enemy CHARACTER models destroyed this turn', k: 'count', per: 3, max: 5, u: ['character', 'characters'], x: { k: 'count', l: 'of them W4+ (+1 each)', per: 1, max: 'n' } },
        { id: 't', mode: 'tactical', t: 'eat', l: 'Enemy CHARACTER destroyed this turn, or all of them are dead', k: 'bool', vp: 5 }] },
    a_tempting_target: { name: 'A Tempting Target', sum: 'Take the objective your opponent picked for you.', wd: { k: 'target' },
      lines: [{ id: 'a', t: 'eot', l: 'Hold your tempting target', k: 'bool', vp: 5 }] },
    behind_enemy_lines: { name: 'Behind Enemy Lines', sum: 'Get units wholly into the enemy deployment zone (no AIRCRAFT or battle-shocked).', wd: { k: 'r1may' },
      lines: [{ id: 'a', t: 'eot', l: 'Units wholly in the enemy deployment zone', k: 'or', opts: [{ l: '1 unit', vp: 3 }, { l: '2+ units', vp: 5 }] }] },
    bring_it_down: { name: 'Bring It Down', fixed: true, sum: 'Destroy big enemy models (W10+).', wd: { k: 'ask', q: 'No enemy model with W10+ on the battlefield?' },
      lines: [{ id: 'f', mode: 'fixed', t: 'eat', l: 'Enemy models with W10+ destroyed', k: 'or', opts: [{ l: '1 model', vp: 4 }, { l: '2+ models', vp: 5 }] },
        { id: 't', mode: 'tactical', t: 'eat', l: 'Enemy model with W10+ destroyed', k: 'bool', vp: 5 }] },
    burden_of_trust: { name: 'Burden of Trust', sum: 'Guard objectives with chosen units.', wd: { k: 'guards' }, start: 'Start of your turn: you can name one guarding unit per objective.', note: 'When drawn and at the start of each of your turns: you can name one guarding unit per objective. An objective is guarded while that unit is on it and you control it.',
      lines: [{ id: 'a', t: 'eop', l: 'Objectives guarded by your army', k: 'or', opts: [{ l: '1 objective', vp: 2 }, { l: '2 objectives', vp: 4 }, { l: '3+ objectives', vp: 5 }] }] },
  };
  const SEC_IDS = Object.keys(S);
  const FIXED_IDS = SEC_IDS.filter(id => S[id].fixed);

  const WD_TEXT = {
    r1must: 'Round 1: it goes back into your deck and you draw another card.',
    r1may: 'Round 1: you may shuffle it back into your deck and draw another card.',
    beacon: 'Pick your beacon unit (on the battlefield or in a transport on it). If it dies it cannot be replaced: discard the card.',
    target: 'Your opponent picks one non-home objective in No Man’s Land as your tempting target.',
    guards: 'You may name one guarding unit per objective (again at the start of each of your turns).',
  };
  const wdText = id => { const w = S[id] && S[id].wd; if (!w) return ''; if (w.k === 'pair') return `If ${S[w.other].name} is active, you may shuffle this card back and draw another.`; if (w.k === 'ask') return `${w.q.replace(/\?$/, '')}: you may discard it and draw another.`; return WD_TEXT[w.k]; };

  const TWISTS = [
    { id: 'nowhere_to_hide', name: 'Nowhere to Hide', text: 'Terrain features lose the Solid rule: line of sight through any gap.' },
    { id: 'mirrored_world', name: 'Mirrored World', text: 'Both players use the same Primary Mission: agree on one of five, otherwise roll a D6 (6 re-rolls).' },
    { id: 'scrambled_communications', name: 'Scrambled Communications', text: 'The players swap their Primary Missions.' },
    { id: 'martial_pride', name: 'Martial Pride', text: 'BATTLELINE units can start an action after Advancing and can shoot in a turn they started an action.' },
    { id: 'ruinscape', name: 'Ruinscape', text: 'Units have the MOBILE keyword while making a Normal or Advance move.' },
    { id: 'night_fighting', name: 'Night Fighting', text: 'Units are only visible to enemies within 18″, and INDIRECT FIRE needs the attacker within 18″.' },
  ];
  const DEPLOYMENTS = ['Tipping Point', 'Sweeping Engagement', 'Search and Destroy', 'Hammer and Anvil', 'Dawn of War', 'Crucible of Battle'];

  const TIMING = { cmd: 'End of your Command phase', eot: 'End of your turn', eat: 'End of either turn', eop: "End of the opponent's turn", eob: 'End of the battle' };

  /* ---------- primary mission ---------- */
  function primaryFor(my, opp) { return MATRIX[my] && DISPS.includes(opp) ? MATRIX[my][DISPS.indexOf(opp)] : null; }
  function primaries(ms) {
    let mine = primaryFor(ms.myDisp, ms.oppDisp), theirs = primaryFor(ms.oppDisp, ms.myDisp);
    if (ms.twist === 'mirrored_world' && ms.mirror) mine = theirs = ms.mirror;
    if (ms.twist === 'scrambled_communications') [mine, theirs] = [theirs, mine];
    return { mine, theirs };
  }

  /* ---------- scoring windows ---------- */
  function windowOf(p) {
    if (p.over) return 'eob';
    if (p.phase === 'Command' && p.turn !== 'opp') return 'cmd';
    if (p.phase === 'Fight') return p.turn === 'opp' ? 'opp' : 'eot';
    return null;
  }
  const inRound = (ln, round) => { const r = ln.r || [1, 5]; return round >= r[0] && round <= r[1]; };
  /* natural window for a line in a given round */
  function lineWindow(ln, round) {
    if (ln.t === 'cmd') return round === 5 && ln.r5 !== false ? 'eot' : 'cmd';
    if (ln.t === 'eot') return 'eot';
    if (ln.t === 'eop') return 'opp';
    if (ln.t === 'eob') return 'eob';
    return 'eot'; // eat: both; caller checks
  }
  function lineOpen(ln, win, round) {
    if (win === 'eob') return ln.t === 'eob';
    if (ln.t === 'eob' || !inRound(ln, round)) return false;
    if (ln.t === 'eat') return win === 'eot' || win === 'opp';
    return lineWindow(ln, round) === win;
  }
  const linesOf = (card, mode) => card.lines.filter(l => !l.mode || l.mode === mode);
  function timingLabel(ln) {
    let s = TIMING[ln.t];
    if (ln.t === 'cmd' && ln.r5 !== false) s += ' (round 5: end of your turn)';
    const r = ln.r;
    if (r && !(r[0] === 1 && r[1] === 5)) s += r[0] === r[1] ? ` · round ${r[0]}` : r[1] === 5 ? ` · round ${r[0]}+` : ` · rounds ${r[0]}–${r[1]}`;
    return s;
  }

  /* ---------- VP of one scoring ---------- */
  function chipMax(ln) { return ln.max; }
  const isStepper = ln => ln.k === 'count' && ln.max > 6;
  function lineVp(ln, v) {
    v = v || {};
    if (ln.k === 'bool') return ln.vp + (!ln.x ? 0 : ln.x.k === 'bool' ? (v.f ? ln.x.vp(1) : 0) : Math.min(v.m || 0, ln.x.max) * ln.x.per);
    if (ln.k === 'or') return (ln.opts[v.o] || { vp: 0 }).vp;
    if (ln.k === 'count') {
      const n = Math.max(0, Math.min(ln.max, v.n || 0));
      let vp = n * ln.per;
      if (ln.x && n) vp += ln.x.k === 'bool' ? (v.f ? ln.x.vp(n) : 0) : Math.min(v.m || 0, ln.x.max === 'n' ? n : ln.x.max) * ln.x.per;
      return vp;
    }
    return 0;
  }

  /* ---------- caps: raw -> Fixed card 20 -> 15 per battle round (end of battle exempt) -> 45 per source ---------- */
  function tally(ms) {
    const out = { P: 0, S: 0, round: { P: {}, S: {} }, eob: 0, fixed: {}, entries: [], battleReady: ms.painted ? 10 : 0 };
    (ms.log || []).forEach(e => {
      let a = e.raw;
      if (e.src === 'S' && ms.secMode === 'fixed') { const used = out.fixed[e.card] || 0; a = Math.min(a, Math.max(0, 20 - used)); }
      if (!e.eob) { const used = out.round[e.src][e.round] || 0; a = Math.min(a, Math.max(0, 15 - used)); }
      a = Math.min(a, Math.max(0, 45 - out[e.src]));
      out[e.src] += a;
      if (!e.eob) out.round[e.src][e.round] = (out.round[e.src][e.round] || 0) + a; else out.eob += a;
      if (e.src === 'S' && ms.secMode === 'fixed') out.fixed[e.card] = (out.fixed[e.card] || 0) + a;
      out.entries.push({ ...e, applied: a });
    });
    out.total = out.P + out.S + out.battleReady;
    return out;
  }

  /* ---------- Tactical deck ---------- */
  function shuffle(a, rnd) { rnd = rnd || Math.random; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function newDeck(rnd) { return shuffle(SEC_IDS.slice(), rnd); }
  /* puts a card back somewhere random in the deck */
  function shuffleBack(deck, id, rnd) { deck.splice(Math.floor((rnd || Math.random)() * (deck.length + 1)), 0, id); }

  /* what happens right after drawing a card: null (nothing), or a prompt kind for the UI */
  function wdPrompt(ms, id, round) {
    const w = S[id].wd; if (!w || ms.secMode !== 'tactical') return null;
    if (w.k === 'r1must') return round === 1 ? 'must' : null;
    if (w.k === 'r1may') return round === 1 ? 'may' : null;
    if (w.k === 'pair') return (ms.hand || []).some(h => h.id === w.other) ? 'may' : null;
    if (w.k === 'ask') return 'ask';
    if (w.k === 'beacon') return 'beacon';
    if (w.k === 'target' || w.k === 'guards') return 'note';
    return null;
  }

  return { DISPS, DSHORT, MATRIX, MIRRORED, P, S, SEC_IDS, FIXED_IDS, TWISTS, DEPLOYMENTS, TIMING, wdText, primaryFor, primaries, windowOf, lineOpen, lineWindow, linesOf, timingLabel, inRound, isStepper, chipMax, lineVp, tally, shuffle, newDeck, shuffleBack, wdPrompt };
})();
if (typeof module !== 'undefined') module.exports = Missions;
