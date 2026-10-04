const DATA = {
 "meta": {
  "dataVersion": "2026-10-02-mfm15-fp13",
  "factionVersions": {
   "worldEaters": "2026-10-02-mfm15-fp13",
   "tyranids": "2026-10-03-mfm15-fp12",
   "deathGuard": "2026-10-04-mfm15-fp13"
  },
  "stamp": "Data as of: MFM v1.5 (30/09/2026), Faction Packs World Eaters v1.3, Tyranids v1.2 and Death Guard v1.3, GDM data v972 (02/10/2026). Checked 04.10.2026",
  "checked": "2026-10-04"
 },
 "gameRules": {
  "battleSizes": [
   {
    "id": "incursion",
    "name": "Incursion",
    "points": 1000,
    "dp": 2,
    "enhancements": 2,
    "copyLimit": 2,
    "blCap": 500,
    "loneThreeDp": true
   },
   {
    "id": "strike",
    "name": "Strike Force",
    "points": 2000,
    "dp": 3,
    "enhancements": 4,
    "copyLimit": 3,
    "blCap": 1000
   },
   {
    "id": "onslaught",
    "name": "Onslaught",
    "points": 3000,
    "dp": 4,
    "enhancements": 4,
    "copyLimit": 3,
    "blCap": 1500
   }
  ],
  "copyMultiplierKeywords": [
   "Battleline",
   "Dedicated Transport"
  ],
  "epicHeroLimit": 1,
  "maxThreeDpDetachments": 1,
  "upgradeMaxCopies": 3,
  "cpPerCommandPhase": 1,
  "coreStratagems": [
   {
    "id": "cs_reroll",
    "name": "Command Re-roll",
    "cp": 1,
    "phases": [
     "Any"
    ],
    "when": "Any phase, right after you roll an Advance, Charge, Damage, Hazard, Hit, Save or Wound roll, or the roll for the number of attacks of a weapon, for a friendly unit or model.",
    "target": "That unit or model.",
    "effect": "Re-roll that roll. If several dice were rolled together, re-roll one of them (charge rolls are always re-rolled in full)."
   },
   {
    "id": "cs_epic",
    "name": "Epic Challenge",
    "cp": 1,
    "phases": [
     "Fight"
    ],
    "when": "Fight phase, right after a friendly CHARACTER unit is selected to fight.",
    "target": "That CHARACTER unit.",
    "effect": "Pick one CHARACTER model in the unit. Until the end of the phase its melee weapons have [PRECISION]."
   },
   {
    "id": "cs_bravery",
    "name": "Insane Bravery",
    "cp": 1,
    "phases": [
     "Command"
    ],
    "when": "Battle-shock step of your Command phase, just before a friendly unit makes a battle-shock roll.",
    "target": "That unit.",
    "effect": "The battle-shock roll automatically succeeds.",
    "restrictions": "Once per battle."
   },
   {
    "id": "cs_crush",
    "name": "Crushing Impact",
    "cp": 1,
    "phases": [
     "Charge"
    ],
    "when": "Your Charge phase, right after a friendly MONSTER or VEHICLE unit ends a charge move.",
    "target": "That MONSTER/VEHICLE unit.",
    "effect": "Pick one engaged enemy unit and one of your models engaged with it. Roll D6 equal to that model's T: each 1 inflicts 1 mortal wound on your unit, each 5+ inflicts 1 mortal wound on the enemy unit (max 6 per unit)."
   },
   {
    "id": "cs_explosives",
    "name": "Explosives",
    "cp": 1,
    "phases": [
     "Shooting"
    ],
    "when": "Your Shooting phase.",
    "target": "One friendly unengaged EXPLOSIVES/GRENADES unit that is eligible to shoot and did not advance this turn.",
    "effect": "Pick one EXPLOSIVES/GRENADES model in it and one unengaged visible enemy unit within 8\". Roll six D6: each 4+ inflicts 1 mortal wound."
   },
   {
    "id": "cs_ingress",
    "name": "Rapid Ingress",
    "cp": 1,
    "phases": [
     "Movement"
    ],
    "when": "End of your opponent's Movement phase.",
    "target": "One friendly unit in strategic reserves (not AIRCRAFT).",
    "effect": "The unit makes an ingress move.",
    "restrictions": "Not in the first battle round."
   },
   {
    "id": "cs_overwatch",
    "name": "Fire Overwatch",
    "cp": 1,
    "phases": [
     "Movement"
    ],
    "when": "End of your opponent's Movement phase.",
    "target": "One friendly unengaged unit (not TITANIC).",
    "effect": "The unit shoots using snap shooting: one visible enemy unit within 24\", hits only on an unmodified 6, those hits are not critical hits, no hit re-rolls."
   },
   {
    "id": "cs_smoke",
    "name": "Smokescreen",
    "cp": 1,
    "phases": [
     "Shooting"
    ],
    "when": "Start of your opponent's Shooting phase.",
    "target": "One friendly SMOKE unit.",
    "effect": "Until the end of the phase, attacks against that unit, or against units not fully visible because of it, give the target the benefit of cover."
   },
   {
    "id": "cs_heroic",
    "name": "Heroic Intervention",
    "cp": 1,
    "phases": [
     "Charge"
    ],
    "when": "End of your opponent's Charge phase.",
    "target": "One friendly unengaged unit within 12\" of enemy units (a VEHICLE only if it is a CHARACTER or WALKER).",
    "effect": "The unit resolves a charge. Before rolling, choose a mode: either only target enemy units that charged this phase, or cap the charge roll at 6 and target any enemy within 6\" and in range."
   },
   {
    "id": "cs_counter",
    "name": "Counteroffensive",
    "cp": 2,
    "phases": [
     "Fight"
    ],
    "when": "Fight step of your opponent's Fight phase, right after an enemy unit has resolved its attacks.",
    "target": "One friendly unit that is eligible to fight.",
    "effect": "Until the end of the phase the unit has Fights First and must be the next unit you select to fight."
   }
  ],
  "glossary": {
   "Anti": "ANTI-X Y+: against a target with keyword X, an unmodified wound roll of Y+ is a critical wound.",
   "Assault": "The unit can shoot using assault shooting (after advancing).",
   "Blast": "Add 1 attack die per 5 models in the target unit (BLAST X: add X per 5 models).",
   "Cleave": "CLEAVE X: if all the weapon's attacks go into one target, add X attack dice per 5 models in that unit.",
   "Close-quarters": "Same as PISTOL. Allows close-quarters shooting; otherwise a model shoots either its close-quarters weapons or its other ranged weapons.",
   "Pistol": "Same as CLOSE-QUARTERS. Allows close-quarters shooting; otherwise a model shoots either its pistols or its other ranged weapons.",
   "Devastating Wounds": "A critical wound ends the attack and inflicts mortal wounds equal to D (max one model per critical wound).",
   "Extra Attacks": "Attacks with this weapon in addition to one other melee weapon.",
   "Hazardous": "After shooting or fighting, make one hazard roll per Hazardous weapon selected.",
   "Heavy": "+1 to hit in your Shooting phase if the unit is unengaged, was not set up this turn and no model moved more than 3\".",
   "Ignores Cover": "The target cannot have the benefit of cover against these attacks.",
   "Indirect Fire": "The unit can shoot using indirect shooting.",
   "Lance": "+1 to the wound roll if the attacker's unit made a charge move this turn.",
   "Lethal Hits": "A critical hit can automatically wound.",
   "Melta": "MELTA X: add X to D when the target was within half range.",
   "Precision": "You can allocate the attacks to a visible CHARACTER group in the target unit.",
   "Rapid Fire": "RAPID FIRE X: add X attack dice when the target is within half range.",
   "Sustained Hits": "SUSTAINED HITS X: a critical hit scores X extra hits.",
   "Torrent": "Attacks automatically hit.",
   "Twin-linked": "You can re-roll the wound roll.",
   "Psychic": "Can ignore modifiers to BS/WS and to the hit roll; these are psychic attacks.",
   "One Shot": "Can be used once per battle.",
   "Deep Strike": "When making an ingress move, set up anywhere more than 8\" horizontally from all enemy units.",
   "Deadly Demise": "DEADLY DEMISE X: when a model is destroyed, roll D6; on a 6 each unit within 6\" suffers X mortal wounds.",
   "Scouts": "SCOUTS X\": before the battle, make a scout move (or set up in your zone from reserves, or move a Dedicated Transport carrying only Scouts).",
   "Infiltrators": "Deploy anywhere more than 8\" horizontally from the enemy deployment zone and all enemy units.",
   "Feel No Pain": "FEEL NO PAIN X+: each time a model would lose a wound, roll D6; on X+ it is not lost.",
   "Lone Operative": "Unless attached, the unit is only visible to (and targetable by Indirect Fire from) enemies within 12\".",
   "Leader": "At muster, attach this unit to one listed bodyguard unit to form an attached unit (max one leader and one support per bodyguard).",
   "Support": "Must be attached to a bodyguard unit at muster.",
   "Firing Deck": "FIRING DECK X: the transport can borrow ranged weapons from up to X embarked models; those units can't shoot this turn.",
   "Hover": "When taking to the skies, do not subtract 2\" from the maximum distance.",
   "Super-Heavy Walker": "Moves through non-TITANIC models and terrain up to 4\" tall; can become MOBILE for a move (roll D6 after: on a 1 it is battle-shocked).",
   "Fights First": "The unit fights in the Fights First step.",
   "Stealth": "Ranged attacks against the unit give it the benefit of cover.",
   "Damaged": "At or below the listed wounds the model is damaged (see its damaged effect).",
   "Blessings of Khorne": "World Eaters army rule. See Army Rules.",
   "Synapse": "Tyranids army rule. Units within 6\" of a friendly SYNAPSE model test battle-shock on 3D6 and get +1 S in melee. See Army Rules.",
   "Shadow in the Warp": "Tyranids army rule. Once per battle, in either Command phase, every enemy unit takes a battle-shock test. See Army Rules.",
   "Harpooned": "When this unit declares a charge, if an enemy MONSTER/VEHICLE unit within 12\" was hit by this weapon this turn: +2 to the charge roll, but the charge must end engaged with that unit.",
   "Nurgle's Gift": "Death Guard army rule. Enemy units within Contagion Range (3\" in round 1, 6\" in round 2, 9\" from round 3; max 12\") are Afflicted: -1 Toughness plus the chosen Plague. See Army Rules.",
   "Afflicted": "An Afflicted enemy unit has -1 Toughness and the effect of the Death Guard player's chosen Plague.",
   "Contagion Range": "Round 1: 3\". Round 2: 6\". Round 3 onwards: 9\". Never more than 12\" after modifiers.",
   "Pact of Decay": "PLAGUE LEGIONS cannot be your Army Faction. Death Guard can field them with the Tallyband Summoners detachment.",
   "Reverberating Summons": "Each time this weapon destroys a model, you can return 1 destroyed Plaguebearer to a friendly PLAGUEBEARERS unit within 12\" of the bearer."
  }
 },
 "factions": [
  {
   "id": "worldEaters",
   "name": "World Eaters",
   "enabled": true,
   "theme": {
    "bg": "#2a0608",
    "bg2": "#4a0c10",
    "bgDeep": "#0d0102",
    "accent": "#c99a4b",
    "accent2": "#e04a3f",
    "panel": "rgba(18,6,7,.82)",
    "card1": "#5a1015",
    "card2": "#26070a",
    "icon1": "#3a0a0d",
    "icon2": "#160304"
   },
   "emblemSvg": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#240406\"/><path d=\"M32 11a21 21 0 1 0 20.4 16.1L47 30.5l-.6-6.4-5.6 3.2-.8-6.4-5.4 3.4-1-6.6-4.4 3z\" fill=\"#b0181f\"/><path d=\"M14.5 29c5.5 2.6 11.5 2.6 17.5 0M16.5 40.5c4.8 1.8 9.6 1.8 14.4 0M24 49c3 1 6 1 9 0\" stroke=\"#6b0b10\" stroke-width=\"2.2\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M52.4 27.1 47 30.5l-.6-6.4-5.6 3.2-.8-6.4-5.4 3.4-1-6.6-4.4 3\" fill=\"none\" stroke=\"#e2b866\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/></svg>",
   "logo": "_logo",
   "rosterIcon": "_rosterIcon",
   "abilityTips": {
    "Blessings of Khorne": "Roll 8D6 at the start of each battle round and activate up to two Blessings. See Army Rules."
   },
   "highlights": [
    {
     "id": "bloodshed",
     "label": "+1 DIE",
     "tone": "blood",
     "title": "Icon of Khorne: each enemy unit this unit destroys = 1 extra die at your next Blessings of Khorne roll.",
     "none": "No Icon of Khorne in this roster",
     "wargear": {
      "khorne_berzerkers": "icon",
      "jakhals": "icon"
     },
     "condNote": "Only with the Icon of Khorne (wargear option)."
    }
   ]
  },
  {
   "id": "chaosSpaceMarines",
   "name": "Chaos Space Marines",
   "enabled": false
  },
  {
   "id": "deathGuard",
   "name": "Death Guard",
   "enabled": true,
   "theme": {
    "bg": "#2a3016",
    "bg2": "#5c6b2a",
    "bgDeep": "#0c0f06",
    "accent": "#d8cfa8",
    "accent2": "#b08440",
    "panel": "rgba(13,16,6,.82)",
    "card1": "#3d4720",
    "card2": "#12160a",
    "icon1": "#2a3016",
    "icon2": "#0c0f06"
   },
   "emblemSvg": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#141a09\"/><circle cx=\"32\" cy=\"22\" r=\"9\" fill=\"none\" stroke=\"#b08440\" stroke-width=\"3.2\"/><circle cx=\"23\" cy=\"38\" r=\"9\" fill=\"none\" stroke=\"#b08440\" stroke-width=\"3.2\"/><circle cx=\"41\" cy=\"38\" r=\"9\" fill=\"none\" stroke=\"#b08440\" stroke-width=\"3.2\"/><circle cx=\"32\" cy=\"32\" r=\"3.4\" fill=\"#d8cfa8\"/></svg>",
   "highlights": [
    {
     "id": "contagion",
     "label": "CONTAGION",
     "tone": "green",
     "rangeStep": 3,
     "title": "Bigger Contagion Range (max 12\").",
     "none": "No unit extends its Contagion Range",
     "unitIds": {
      "lord_of_poxes": "Gift of Poxes: +3\" Contagion Range."
     },
     "detachments": {
      "paragons_of_putrescence": {
       "keywordsAll": [
        "Character"
       ],
       "factionsAll": [
        "Death Guard"
       ],
       "note": "Hypervirulent Strains: DEATH GUARD CHARACTERS get +3\" Contagion Range."
      }
     }
    }
   ],
   "abilityTips": {
    "Nurgle's Gift (Aura)": "Enemy units within Contagion Range (3\"/6\"/9\" by battle round, max 12\") are Afflicted: -1 T and your chosen Plague. See Army Rules.",
    "Pact of Decay": "PLAGUE LEGIONS join a Death Guard army only through Tallyband Summoners (points cap by battle size)."
   }
  },
  {
   "id": "thousandSons",
   "name": "Thousand Sons",
   "enabled": false
  },
  {
   "id": "emperorsChildren",
   "name": "Emperor's Children",
   "enabled": false
  },
  {
   "id": "chaosDaemons",
   "name": "Chaos Daemons",
   "enabled": false
  },
  {
   "id": "chaosKnights",
   "name": "Chaos Knights",
   "enabled": false
  },
  {
   "id": "spaceMarines",
   "name": "Space Marines",
   "enabled": false
  },
  {
   "id": "astraMilitarum",
   "name": "Astra Militarum",
   "enabled": false
  },
  {
   "id": "necrons",
   "name": "Necrons",
   "enabled": false
  },
  {
   "id": "orks",
   "name": "Orks",
   "enabled": false
  },
  {
   "id": "tyranids",
   "name": "Tyranids",
   "enabled": true,
   "theme": {
    "bg": "#4a2266",
    "bg2": "#643088",
    "bgDeep": "#0e0313",
    "accent": "#e6d8b8",
    "accent2": "#d0507e",
    "panel": "rgba(16,5,22,.82)",
    "card1": "#5b2a7a",
    "card2": "#1c0828",
    "icon1": "#3e1a52",
    "icon2": "#120418"
   },
   "emblemSvg": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#1c0826\"/><path d=\"M47 14a22 22 0 1 0 6 26c-5 4-12 5-18 2l3-3-5-1 3-3-5-1 3-3-5-1c5-6 12-9 18-16z\" fill=\"#e6d8b8\"/></svg>",
   "logo": "tyr_logo",
   "rosterIcon": "tyr_roster",
   "highlights": [
    {
     "keyword": "Synapse",
     "label": "SYNAPSE",
     "title": "Synapse: friendly TYRANIDS units within 6\" are within Synapse Range.",
     "none": "No SYNAPSE units yet",
     "meleeBonus": {
      "stat": "S",
      "add": 1,
      "tip": "Synapse: +1 S in melee"
     },
     "notes": {
      "hyperadapted_raveners": "Synapse: the Ravener Prime only."
     },
     "conditional": {
      "neurogaunts": "Neurocytes: SYNAPSE only while within Synapse Range of another TYRANIDS unit (not NEUROGAUNTS)."
     }
    }
   ],
   "abilityTips": {
    "Synapse": "Within 6\" of a friendly SYNAPSE model: battle-shock tests on 3D6 and +1 S for melee attacks. See Army Rules.",
    "Shadow in the Warp": "Once per battle, in either Command phase: every enemy unit takes a battle-shock test (-1 near your SYNAPSE units). See Army Rules."
   }
  }
 ],
 "factionData": {
  "worldEaters": {
   "armyFaction": "World Eaters",
   "alliedFactions": [
    {
     "faction": "Blood Legions",
     "requiresDetachment": "khorne_daemonkin",
     "capKey": "blCap",
     "cannotBeWarlord": true
    }
   ],
   "armyRules": [
    {
     "id": "blessings",
     "name": "Blessings of Khorne",
     "text": [
      "At the start of each battle round, if your Army Faction is WORLD EATERS, you can make a Blessings of Khorne roll: roll 8D6.",
      "Spend those dice to activate up to two different Blessings. Each Blessing needs a double (or triple) of the shown value or higher.",
      "Each Blessing can be activated once per battle round. Unused dice are discarded.",
      "An active Blessing applies to every unit in your army with the Blessings of Khorne ability until the end of the battle round."
     ],
     "blessings": [
      {
       "id": "b1",
       "name": "Unbridled Bloodlust",
       "req": [
        {
         "n": 2,
         "min": 1
        }
       ],
       "reqText": "Any double",
       "effect": "+1 to charge rolls."
      },
      {
       "id": "b2",
       "name": "Rage-fuelled Invigoration",
       "req": [
        {
         "n": 2,
         "min": 2
        }
       ],
       "reqText": "Double 2+",
       "effect": "Pile-in and consolidation moves can be up to 6\" instead of 3\"."
      },
      {
       "id": "b3",
       "name": "Total Carnage",
       "req": [
        {
         "n": 2,
         "min": 3
        }
       ],
       "reqText": "Double 3+",
       "effect": "When a model is destroyed by a melee attack before it has fought, roll D6: on a 4+ it stays, fights after the attacking unit, then is removed."
      },
      {
       "id": "b4",
       "name": "Martial Excellence",
       "req": [
        {
         "n": 2,
         "min": 4
        },
        {
         "n": 3,
         "min": 1
        }
       ],
       "reqText": "Double 4+ or triple 1+",
       "effect": "Melee weapons have [SUSTAINED HITS 1]."
      },
      {
       "id": "b5",
       "name": "Warp Blades",
       "req": [
        {
         "n": 2,
         "min": 5
        },
        {
         "n": 3,
         "min": 2
        }
       ],
       "reqText": "Double 5+ or triple 2+",
       "effect": "Melee weapons have [LETHAL HITS]."
      },
      {
       "id": "b6",
       "name": "Decapitating Strikes",
       "req": [
        {
         "n": 2,
         "min": 6
        },
        {
         "n": 3,
         "min": 3
        }
       ],
       "reqText": "Double 6+ or triple 3+",
       "effect": "Melee attacks against INFANTRY units have [DEVASTATING WOUNDS]."
      }
     ]
    },
    {
     "id": "pact",
     "name": "Pact of Blood",
     "text": [
      "BLOOD LEGIONS units can only be included if your army has the Khorne Daemonkin detachment.",
      "BLOOD LEGIONS cannot be your Army Faction, and no BLOOD LEGIONS model can be your Warlord.",
      "Points cap for BLOOD LEGIONS units: Incursion 500, Strike Force 1000, Onslaught 1500."
     ]
    }
   ],
   "detachments": [
    {
     "id": "berzerker_warband",
     "name": "Berzerker Warband",
     "dp": 2,
     "tags": [],
     "summary": "Every World Eaters unit gets +1 Attack in melee.",
     "rule": {
      "name": "Relentless Rage",
      "text": "Melee attacks made by friendly WORLD EATERS units have +1 A."
     },
     "buffs": [
      {
       "scope": {
        "factionsAny": [
         "World Eaters"
        ]
       },
       "target": "melee",
       "stat": "A",
       "add": 1,
       "source": "Relentless Rage"
      }
     ],
     "enhancements": [
      {
       "id": "battle_lust",
       "name": "Battle-lust",
       "pts": 20,
       "upgrade": false,
       "text": "You can re-roll charge rolls for the bearer's unit. While Unbridled Bloodlust is active, also +1 to those charge rolls.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "berzerker_glaive",
       "name": "Berzerker Glaive",
       "pts": 35,
       "upgrade": false,
       "text": "+1 A and +1 D to the bearer's melee weapons (not Extra Attacks weapons).",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "A",
         "add": 1,
         "excludeKeyword": "Extra Attacks"
        },
        {
         "target": "melee",
         "stat": "D",
         "add": 1,
         "excludeKeyword": "Extra Attacks"
        }
       ]
      },
      {
       "id": "favoured_of_khorne",
       "name": "Favoured of Khorne",
       "pts": 20,
       "upgrade": false,
       "text": "While the bearer is on the battlefield, you can re-roll up to 2 dice of each Blessings of Khorne roll.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "helm_of_brazen_ire",
       "name": "Helm of Brazen Ire",
       "pts": 30,
       "upgrade": false,
       "text": "Each attack allocated to the bearer has -1 Damage.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "blood_offering",
       "name": "Blood Offering",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a friendly WORLD EATERS unit is destroyed while within range of an objective you control.",
       "target": "That WORLD EATERS unit.",
       "effect": "That objective stays under your control until your opponent's Level of Control over it is higher than yours at the end of a phase."
      },
      {
       "id": "hack_and_slash",
       "name": "Hack and Slash",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One WORLD EATERS unit that made a charge move this turn and has not fought yet.",
       "effect": "Until the end of the phase, its melee weapons get +1 AP."
      },
      {
       "id": "frenzied_resilience",
       "name": "Frenzied Resilience",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit has selected its targets.",
       "target": "One WORLD EATERS unit targeted by those attacks.",
       "effect": "Until the end of the phase, attacks allocated to your unit get -1 Damage."
      },
      {
       "id": "skulls_for_the_skull_throne",
       "name": "Skulls for the Skull Throne!",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after a WORLD EATERS unit destroys an enemy CHARACTER or MONSTER.",
       "target": "That WORLD EATERS unit.",
       "effect": "Make a Blessings of Khorne roll and use it to activate one Blessing (in addition to those active)."
      },
      {
       "id": "apoplectic_frenzy",
       "name": "Apoplectic Frenzy",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, right after a KHORNE BERZERKERS unit is selected to advance.",
       "target": "That KHORNE BERZERKERS unit.",
       "effect": "The unit can still declare a charge this turn."
      },
      {
       "id": "berzerkers_wrath",
       "name": "Berzerker's Wrath",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit has shot.",
       "target": "One KHORNE BERZERKERS unit that can make a surge move.",
       "effect": "When it makes that surge move, models move up to 8\" instead of rolling."
      }
     ],
     "dispositions": [
      "Purge the Foe"
     ]
    },
    {
     "id": "cult_of_blood",
     "name": "Cult of Blood",
     "dp": 2,
     "tags": [],
     "summary": "Jakhals and Goremongers become Battleline; Monsters and Titanic units project Idols of Khorne auras.",
     "rule": {
      "name": "Idols of Khorne",
      "text": "At the start of your Command phase pick one Idol (each once per battle). Until your next Command phase it is active for your WORLD EATERS MONSTER and TITANIC units. Idol of Infinite Rage (Aura): friendly JAKHALS/GOREMONGERS within 6\" (9\" if TITANIC) get +1 to hit and +1 to wound. Idol of Burning Wrath (Aura): they get +1\" Move and +1 to Advance and Charge rolls. Idol of Blessed Blood (Aura): they get a 4+ invulnerable save. JAKHALS and GOREMONGERS units in your army have the BATTLELINE keyword."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "jakhals",
        "goremongers"
       ],
       "keyword": "Battleline"
      }
     ],
     "enhancements": [
      {
       "id": "brazen_form",
       "name": "Brazen Form",
       "pts": 25,
       "upgrade": false,
       "text": "WORLD EATERS MONSTER only. +1 Toughness and Feel No Pain 5+.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Monster"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "T",
         "add": 1
        }
       ]
      },
      {
       "id": "butcher_lord",
       "name": "Butcher Lord",
       "pts": 10,
       "upgrade": false,
       "text": "WORLD EATERS INFANTRY only. The bearer has Infiltrators. The bearer can lead JAKHALS and GOREMONGERS.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       },
       "leaderOf": [
        "jakhals",
        "goremongers"
       ]
      },
      {
       "id": "chosen_of_the_blood_god",
       "name": "Chosen of the Blood God",
       "pts": 15,
       "upgrade": false,
       "text": "WORLD EATERS MONSTER only. +3\" to the range of the bearer's Aura abilities.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Monster"
        ]
       }
      },
      {
       "id": "strategic_slaughter",
       "name": "Strategic Slaughter",
       "pts": 20,
       "upgrade": false,
       "text": "After both armies deploy, redeploy up to 3 JAKHALS and/or GOREMONGERS units; they can go into Strategic Reserves regardless of the usual limit.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "bloody_vengeance",
       "name": "Bloody Vengeance",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase, right after a friendly WORLD EATERS MONSTER or TITANIC unit is destroyed.",
       "target": "That destroyed unit.",
       "effect": "Until the end of the battle, JAKHALS and GOREMONGERS models can re-roll hit rolls against the unit that destroyed it."
      },
      {
       "id": "drawn_to_the_slaughter",
       "name": "Drawn to the Slaughter",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, right after a friendly JAKHALS unit is destroyed.",
       "target": "That JAKHALS unit.",
       "effect": "Add a new identical unit at Starting Strength to your Strategic Reserves (no CHARACTER units come back).",
       "restrictions": "Once per battle."
      },
      {
       "id": "in_the_shadow_of_brass_idols",
       "name": "In the Shadow of Brass Idols",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting or Fight phase, right after an enemy unit selects its targets.",
       "target": "One JAKHALS or GOREMONGERS unit targeted.",
       "effect": "Until the end of the phase it has Feel No Pain 6+, or 5+ while within 6\" of a friendly WORLD EATERS MONSTER or 9\" of a TITANIC unit."
      },
      {
       "id": "bloodthirsty_horde",
       "name": "Bloodthirsty Horde",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One JAKHALS or GOREMONGERS unit that is engaged and has not fought yet.",
       "effect": "Models within 3\" of an enemy are eligible to fight and can target enemy units within 3\" of them that are engaged with their unit."
      },
      {
       "id": "fail_not_the_blood_god",
       "name": "Fail Not the Blood God",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One JAKHALS or GOREMONGERS unit.",
       "effect": "Re-roll hit rolls of 1; re-roll all hit rolls instead while within 6\" of a friendly MONSTER or 9\" of a TITANIC unit."
      },
      {
       "id": "brazen_idol",
       "name": "Brazen Idol",
       "cp": 2,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One WORLD EATERS MONSTER or TITANIC unit.",
       "effect": "Pick one more Idol of Khorne ability; it is active for that unit until your next Command phase.",
       "restrictions": "Once per battle."
      }
     ],
     "dispositions": [
      "Priority Assets"
     ]
    },
    {
     "id": "possessed_slaughterband",
     "name": "Possessed Slaughterband",
     "dp": 2,
     "tags": [],
     "summary": "Eightbound-focused list; Possessed surge forward when shot.",
     "rule": {
      "name": "Brazen Fury",
      "text": "WORLD EATERS POSSESSED units gain Brazen Fury: in your opponent's Shooting phase, after an enemy unit shoots, if a model in this unit was destroyed by those attacks it can make a surge move of up to D6\" (a Brazen Fury move)."
     },
     "enhancements": [
      {
       "id": "frenzied_focus",
       "name": "Frenzied Focus",
       "pts": 20,
       "upgrade": false,
       "text": "DAEMON only. Attacks by the bearer's unit score critical hits on an unmodified 5+.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Daemon"
        ]
       }
      },
      {
       "id": "killing_clarity",
       "name": "Killing Clarity",
       "pts": 15,
       "upgrade": false,
       "text": "DAEMON only. Each time the bearer's unit destroys an enemy unit, roll D6: on a 4+ gain 1CP.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Daemon"
        ]
       }
      },
      {
       "id": "malicious_vigour",
       "name": "Malicious Vigour",
       "pts": 30,
       "upgrade": false,
       "text": "SLAUGHTERBOUND only. The bearer's unit counts a 6 for every Brazen Fury move distance.",
       "eligible": {
        "unitIds": [
         "slaughterbound"
        ]
       }
      },
      {
       "id": "violent_demise",
       "name": "Violent Demise",
       "pts": 10,
       "upgrade": false,
       "text": "DAEMON only. The bearer has Deadly Demise D3+1 and it triggers on a 2+ instead of a 6.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Daemon"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "daemonic_resistance",
       "name": "Daemonic Resistance",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting or Fight phase, right after an enemy unit selects its targets.",
       "target": "One WORLD EATERS POSSESSED unit targeted.",
       "effect": "Until the end of the phase, -1 to wound rolls against your unit."
      },
      {
       "id": "daemonic_strength",
       "name": "Daemonic Strength",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One WORLD EATERS POSSESSED unit that has not fought yet.",
       "effect": "Until the end of the phase: EIGHTBOUND get +1 D against non-MONSTER/VEHICLE targets; EXALTED EIGHTBOUND get +1 D against MONSTER/VEHICLE targets."
      },
      {
       "id": "immortal_fury",
       "name": "Immortal Fury",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit selects its targets.",
       "target": "One WORLD EATERS POSSESSED unit targeted.",
       "effect": "Models destroyed before they fought can fight after the attacking unit finishes, then are removed."
      },
      {
       "id": "rapid_manifestation",
       "name": "Rapid Manifestation",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, when an EXALTED EIGHTBOUND unit arrives by Deep Strike.",
       "target": "That EXALTED EIGHTBOUND unit.",
       "effect": "It can be set up more than 6\" horizontally from all enemy units.",
       "restrictions": "It cannot declare a charge this turn."
      },
      {
       "id": "warp_stalkers",
       "name": "Warp Stalkers",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement",
        "Charge"
       ],
       "when": "Your Movement or Charge phase.",
       "target": "One WORLD EATERS POSSESSED unit that has not moved or charged yet.",
       "effect": "During Normal, Advance, Fall Back or Charge moves its models can move through enemy models (not MONSTER/VEHICLE), but cannot end within Engagement Range unless charging."
      },
      {
       "id": "horrifying_violence",
       "name": "Horrifying Violence",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your opponent's Command phase.",
       "target": "One WORLD EATERS POSSESSED unit.",
       "effect": "Each enemy unit engaged with it takes a battle-shock test at -1."
      }
     ],
     "dispositions": [
      "Purge the Foe"
     ]
    },
    {
     "id": "khorne_daemonkin",
     "name": "Khorne Daemonkin",
     "dp": 2,
     "tags": [],
     "summary": "Unlocks Blood Legions daemons; kills earn Blood Tithe points for army-wide boons.",
     "rule": {
      "name": "Blood Tithe",
      "text": "Each time a BLOOD LEGIONS or WORLD EATERS unit from your army destroys an enemy unit, roll D6: on a 3+ gain 1 Blood Tithe point (BTP). At the start of the Command phase you can spend BTP to unlock one ability for the rest of the battle: Enraged Abjuration (2) - your BLOOD LEGIONS and WORLD EATERS models have Feel No Pain 5+ against psychic attacks and mortal wounds; Daemonic Rage (3) - BLOOD LEGIONS melee weapons have [LANCE]; Boon of Blood (4) - BLOOD LEGIONS units have a 4+ invulnerable save; Might of Khorne (5) - BLOOD LEGIONS units gain Blessings of Khorne. You can include BLOOD LEGIONS units up to 500 / 1000 / 1500 pts (Incursion / Strike Force / Onslaught)."
     },
     "unlocks": {
      "faction": "Blood Legions"
     },
     "enhancements": [
      {
       "id": "blade_of_endless_bloodshed",
       "name": "Blade of Endless Bloodshed",
       "pts": 30,
       "upgrade": false,
       "text": "WORLD EATERS only. +1 A, +1 S and +1 D to the bearer's melee weapons. When the bearer's unit destroys an enemy unit in melee you gain 1 BTP automatically.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "A",
         "add": 1
        },
        {
         "target": "melee",
         "stat": "S",
         "add": 1
        },
        {
         "target": "melee",
         "stat": "D",
         "add": 1
        }
       ]
      },
      {
       "id": "blood_forged_armour",
       "name": "Blood-Forged Armour",
       "pts": 20,
       "upgrade": false,
       "text": "The bearer has a 2+ Save. If the bearer is destroyed, gain 1 BTP.",
       "eligible": {},
       "mods": [
        {
         "target": "profile",
         "stat": "Sv",
         "set": "2+"
        }
       ]
      },
      {
       "id": "disciple_of_khorne",
       "name": "Disciple of Khorne",
       "pts": 15,
       "upgrade": false,
       "text": "LORD ON JUGGERNAUT only. The bearer has Deep Strike and the BLOOD LEGIONS Faction keyword instead of WORLD EATERS. It can lead BLOODCRUSHERS and FLESH HOUNDS. It cannot be your Warlord.",
       "eligible": {
        "unitIds": [
         "lord_on_juggernaut"
        ]
       },
       "leaderOf": [
        "bloodcrushers",
        "flesh_hounds"
       ],
       "factionSwap": "Blood Legions",
       "cannotBeWarlord": true
      },
      {
       "id": "icon_of_war",
       "name": "Icon of War",
       "pts": 25,
       "upgrade": false,
       "text": "WORLD EATERS only. Friendly BLOOD LEGIONS units within 6\" have Blessings of Khorne; while Might of Khorne is active they can also re-roll battle-shock tests.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "summoned_by_slaughter",
       "name": "Summoned by Slaughter",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when the last model of a friendly unit is destroyed.",
       "target": "One BLOODLETTERS unit in Reserves.",
       "effect": "Set it up within 9\" of the destroyed model and more than 6\" from all enemy units.",
       "restrictions": "Once per battle round."
      },
      {
       "id": "daemonic_fury",
       "name": "Daemonic Fury",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase.",
       "target": "One BLOOD LEGIONS unit and one WORLD EATERS unit near it.",
       "effect": "Their melee weapons gain [LANCE]; if Daemonic Rage is active they also gain [TWIN-LINKED]."
      },
      {
       "id": "a_worthy_skull",
       "name": "A Worthy Skull",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after a unit destroys an enemy CHARACTER or MONSTER.",
       "target": "That BLOOD LEGIONS or WORLD EATERS unit.",
       "effect": "Gain D3 Blood Tithe points; you can then activate one Blood Tithe ability."
      },
      {
       "id": "blessing_of_burning_blood",
       "name": "Blessing of Burning Blood",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting or Fight phase, right after an enemy unit selects its targets.",
       "target": "One targeted WORLD EATERS unit within 6\" of a friendly BLOOD LEGIONS unit.",
       "effect": "Until the end of the phase it has a 5+ invulnerable save (4+ if Boon of Blood is active)."
      },
      {
       "id": "daemontide",
       "name": "Daemontide",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One BLOOD LEGIONS unit near a WORLD EATERS unit.",
       "effect": "Return destroyed models: 1 MOUNTED, D3 BEAST or D6 INFANTRY models, at full wounds.",
       "restrictions": "Cannot return CHARACTER models."
      },
      {
       "id": "murder_call",
       "name": "Murder-call",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent's Fight phase.",
       "target": "One BLOOD LEGIONS unit that is not engaged.",
       "effect": "Remove it from the battlefield and place it into Strategic Reserves."
      }
     ],
     "dispositions": [
      "Reconnaissance"
     ]
    },
    {
     "id": "goretrack_onslaught",
     "name": "Goretrack Onslaught",
     "dp": 2,
     "tags": [],
     "summary": "Transport assault: units charging out of Rhinos and Land Raiders hit harder.",
     "rule": {
      "name": "Rush to the Fray",
      "text": "Each time a WORLD EATERS unit disembarks from a TRANSPORT, until the end of the turn it gets +1 to charge rolls and its melee weapons have [LANCE]."
     },
     "enhancements": [
      {
       "id": "aggressive_deployment",
       "name": "Aggressive Deployment",
       "pts": 20,
       "upgrade": false,
       "text": "If the bearer starts the battle embarked in a DEDICATED TRANSPORT, that transport has Scouts 9\".",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "infernal_infusion",
       "name": "Infernal Infusion",
       "pts": 25,
       "upgrade": false,
       "text": "Once per battle, at the start of the Fight phase: the bearer's unit has Fights First until the end of the phase.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "murderous_onslaught",
       "name": "Murderous Onslaught",
       "pts": 5,
       "upgrade": false,
       "text": "If the bearer's unit disembarked this turn, enemies cannot use Fire Overwatch against it this turn.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "unleash_hell",
       "name": "Unleash Hell",
       "pts": 10,
       "upgrade": false,
       "text": "Start of your Shooting phase: pick a VEHICLE within 6\" (or the transport carrying the bearer). After it shoots, one enemy unit it hit is suppressed (-1 to hit) until your next turn.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "endless_pursuit_of_violence",
       "name": "Endless Pursuit of Violence",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of the Fight phase.",
       "target": "One WORLD EATERS INFANTRY unit and one friendly TRANSPORT.",
       "effect": "If the unit is wholly within 6\" of the TRANSPORT, it can embark."
      },
      {
       "id": "smash_through",
       "name": "Smash Through",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One WORLD EATERS VEHICLE that has not moved yet.",
       "effect": "During Normal or Advance moves it can move horizontally through terrain features."
      },
      {
       "id": "aggressive_disembarkation",
       "name": "Aggressive Disembarkation",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One WORLD EATERS RHINO that has not moved yet.",
       "effect": "One embarked unit disembarks within 6\" and can be set up within Engagement Range of enemy units."
      },
      {
       "id": "full_throttle_assault",
       "name": "Full-Throttle Assault",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One WORLD EATERS RHINO that has not moved yet.",
       "effect": "Units that disembark from it after it made a Normal move make assault disembark moves."
      },
      {
       "id": "unrelenting_advance",
       "name": "Unrelenting Advance",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit has shot.",
       "target": "One WORLD EATERS VEHICLE hit by those attacks.",
       "effect": "It can make a Normal move of up to 6\".",
       "restrictions": "Not in the same phase as Fury Unleashed."
      },
      {
       "id": "fury_unleashed",
       "name": "Fury Unleashed",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit has shot.",
       "target": "One WORLD EATERS RHINO hit by those attacks.",
       "effect": "One KHORNE BERZERKERS unit embarked in it can disembark and make a surge move of up to D6+2\".",
       "restrictions": "Not in the same phase as Unrelenting Advance."
      }
     ],
     "dispositions": [
      "Take and Hold"
     ]
    },
    {
     "id": "brazen_engines",
     "name": "Brazen Engines",
     "dp": 1,
     "tags": [],
     "summary": "Daemon engines break enemy nerve in melee.",
     "rule": {
      "name": "Rampaging Terrors",
      "text": "Friendly DAEMON VEHICLE units gain Terror of Khorne: at the start of the Fight phase, pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit only once per phase)."
     },
     "enhancements": [
      {
       "id": "murder_forged_entity",
       "name": "Murder-forged Entity",
       "pts": 15,
       "upgrade": true,
       "text": "WORLD EATERS VEHICLE (not Maulerfiend). This unit has the DAEMON keyword.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Vehicle"
        ],
        "excludeUnitIds": [
         "maulerfiend"
        ]
       }
      },
      {
       "id": "talons_of_butchery",
       "name": "Talons of Butchery",
       "pts": 20,
       "upgrade": true,
       "text": "MAULERFIEND only. Its Maulerfiend fists have [CLEAVE 2].",
       "eligible": {
        "unitIds": [
         "maulerfiend"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "apoplectic_clarity",
       "name": "Apoplectic Clarity",
       "cp": 1,
       "type": "Brazen Engines",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting or Fight phase, when a friendly DAEMON VEHICLE unit is selected to shoot or fight.",
       "target": "That unit.",
       "effect": "Its attacks ignore all modifiers to BS/WS, hit rolls and wound rolls."
      },
      {
       "id": "trail_of_destruction",
       "name": "Trail of Destruction",
       "cp": 1,
       "type": "Brazen Engines",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, when a friendly DAEMON VEHICLE unit is selected to move.",
       "target": "That unit.",
       "effect": "It has the MOBILE keyword."
      },
      {
       "id": "goaded_to_fury",
       "name": "Goaded to Fury",
       "cp": 1,
       "type": "Brazen Engines",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit shoots a friendly unengaged DAEMON VEHICLE unit (not TITANIC).",
       "target": "That unit.",
       "effect": "It can make a surge move of up to D6\"."
      }
     ],
     "dispositions": [
      "Disruption"
     ]
    },
    {
     "id": "vessels_of_wrath",
     "name": "Vessels of Wrath",
     "dp": 1,
     "tags": [],
     "summary": "Characters choose Cleave or extra AP when they fight.",
     "rule": {
      "name": "Wrath of Khorne",
      "text": "When a friendly WORLD EATERS CHARACTER unit (not EPIC HERO) is selected to fight, its CHARACTER models' melee attacks gain either [CLEAVE 1] or +1 AP."
     },
     "enhancements": [
      {
       "id": "archslaughterer",
       "name": "Archslaughterer",
       "pts": 30,
       "upgrade": false,
       "text": "WORLD EATERS only. Once per battle per army, in your Command phase: every Blessing of Khorne is active for this unit until the start of your next turn.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ]
       }
      },
      {
       "id": "gateways_to_glory",
       "name": "Gateways to Glory",
       "pts": 10,
       "upgrade": false,
       "text": "WORLD EATERS DAEMON PRINCE only. The model has MOBILE and +1 to charge rolls.",
       "eligible": {
        "factionsAll": [
         "World Eaters"
        ],
        "keywordsAll": [
         "Daemon Prince"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "scorn_the_witch",
       "name": "Scorn the Witch",
       "cp": 1,
       "type": "Vessels of Wrath",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a friendly WORLD EATERS CHARACTER unit (not EPIC HERO) would suffer a mortal wound.",
       "target": "That unit.",
       "effect": "It has Feel No Pain 4+ against mortal wounds."
      },
      {
       "id": "aspire_to_infamy",
       "name": "Aspire to Infamy",
       "cp": 1,
       "type": "Vessels of Wrath",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a friendly WORLD EATERS CHARACTER unit (not EPIC HERO) is selected to fight.",
       "target": "That unit.",
       "effect": "Its CHARACTER models' melee attacks get +1 A and +2 S."
      },
      {
       "id": "punish_the_craven",
       "name": "Punish the Craven",
       "cp": 1,
       "type": "Vessels of Wrath",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent's Movement phase, when an enemy unit engaged with a friendly WORLD EATERS CHARACTER unit is selected to fall back.",
       "target": "That WORLD EATERS CHARACTER unit.",
       "effect": "The enemy unit must use Desperate Escape; if it is battle-shocked, -1 to those hazard rolls."
      }
     ],
     "dispositions": [
      "Priority Assets"
     ]
    },
    {
     "id": "butchers_of_khorne",
     "name": "Butchers of Khorne",
     "dp": 1,
     "tags": [],
     "summary": "Terminator squads get an extra Blessing when they fight.",
     "rule": {
      "name": "Adamantine Avalanche",
      "text": "At the start of the Fight phase, if a friendly TERMINATOR SQUAD unit is engaged, make a Blessings of Khorne roll and activate one Blessing. Until the end of the phase it is active for friendly TERMINATOR SQUAD units on top of your other active Blessings."
     },
     "enhancements": [
      {
       "id": "gore_stained_veterans",
       "name": "Gore-stained Veterans",
       "pts": 20,
       "upgrade": true,
       "text": "TERMINATOR SQUAD only. Melee attacks get +1 WS.",
       "eligible": {
        "keywordsAll": [
         "Terminator Squad"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "WS",
         "improve": 1
        }
       ]
      },
      {
       "id": "sanctified_in_slaughter",
       "name": "Sanctified in Slaughter",
       "pts": 15,
       "upgrade": true,
       "text": "TERMINATOR SQUAD only. +1 OC.",
       "eligible": {
        "keywordsAll": [
         "Terminator Squad"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "OC",
         "add": 1
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "focused_ferocity",
       "name": "Focused Ferocity",
       "cp": 1,
       "type": "Butchers of Khorne",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a friendly TERMINATOR SQUAD unit is selected to fight.",
       "target": "That unit.",
       "effect": "Its melee attacks get +1 A."
      },
      {
       "id": "a_trophy_for_the_throne",
       "name": "A Trophy for the Throne",
       "cp": 1,
       "type": "Butchers of Khorne",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a friendly TERMINATOR SQUAD unit is selected to fight.",
       "target": "That unit.",
       "effect": "Its attacks against MONSTER or VEHICLE units get +1 to wound."
      },
      {
       "id": "wrath_beyond_reason",
       "name": "Wrath Beyond Reason",
       "cp": 2,
       "type": "Butchers of Khorne",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, when an enemy unit targets a friendly TERMINATOR SQUAD unit.",
       "target": "That unit.",
       "effect": "Ranged attacks from that enemy unit get -1 Damage against it."
      }
     ],
     "dispositions": [
      "Take and Hold"
     ]
    }
   ],
   "units": [
    {
     "id": "angron",
     "name": "Angron",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Monster",
      "Fly",
      "Character",
      "Epic Hero",
      "Chaos",
      "Khorne",
      "Daemon",
      "Primarch",
      "Angron"
     ],
     "image": "angron",
     "baseSize": "100mm",
     "profile": {
      "M": "14\"",
      "T": "11",
      "Sv": "2+",
      "InSv": "4+",
      "W": "16",
      "OC": "6",
      "Ld": "5+"
     },
     "damaged": {
      "threshold": 6,
      "text": "While it has 1-6 wounds left: -1 to hit rolls."
     },
     "ranged": [],
     "melee": [
      {
       "name": "Samni’arius and Spinegrinder - strike",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6+2",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Samni’arius and Spinegrinder - sweep",
       "range": "Melee",
       "A": "16",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Reborn in Blood",
       "text": "If Angron is destroyed, at the start of a battle round you can spend a triple 6 from the Blessings of Khorne roll (instead of activating Blessings) to bring him back: in the Reinforcements step of your next Movement phase set him up anywhere using Deep Strike, with 8 wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Wrathful Presence",
       "text": "At the start of each battle round choose one Wrathful Presence ability; Angron has it until the next battle round.",
       "kind": "datasheet"
      },
      {
       "name": "The Blood God's Favour",
       "text": "Wrathful Presence. While Angron is on the battlefield you can re-roll up to 6 dice of each Blessings of Khorne roll.",
       "kind": "datasheet"
      },
      {
       "name": "Driven by Ultimate Rage (Aura)",
       "text": "Wrathful Presence (Aura). Friendly WORLD EATERS units within 6\" can re-roll hit rolls of 1 and wound rolls of 1 with melee attacks.",
       "kind": "datasheet"
      },
      {
       "name": "Overwhelming Wrath (Aura)",
       "text": "Wrathful Presence (Aura). An enemy unit within 6\" that is selected to fall back must pass a Leadership test or remain stationary instead.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 330
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Angron (Epic Hero).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "kharn_the_betrayer",
     "name": "Khârn the Betrayer",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Grenades",
      "Chaos",
      "Khorne",
      "Khârn the Betrayer"
     ],
     "image": "kharn",
     "baseSize": "40mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "4+",
      "W": "5",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Gorechild",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Legendary Killer",
       "text": "While leading a unit, melee attacks by models in that unit re-roll hit rolls of 1 and wound rolls of 1.",
       "kind": "datasheet"
      },
      {
       "name": "The Betrayer",
       "text": "End of your Charge phase: if this unit is on the battlefield, unengaged and still has a bodyguard model, take a leadership roll. If it fails, one bodyguard model is destroyed.",
       "kind": "datasheet"
      },
      {
       "name": "Berserker Frenzy",
       "text": "The first time Khârn is destroyed, roll D6 at the end of the phase: on a 2+ set him back up as close as possible to where he died (not in Engagement Range) with 3 wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 115
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "khorne_berzerkers"
     ],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "lord_invocatus",
     "name": "Lord Invocatus",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Mounted",
      "Character",
      "Epic Hero",
      "Chaos",
      "Khorne",
      "Lord Invocatus"
     ],
     "image": "lord_invocatus",
     "baseSize": "90x52mm",
     "profile": {
      "M": "10\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "4+",
      "W": "8",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Coward's Bane",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Bladed horn",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Lance"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader",
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Fire Riders",
       "text": "While leading a unit, that unit has Deep Strike and can move through models and terrain on Normal, Advance, Fall Back and Charge moves. On Normal, Advance and Fall Back moves it can cross Engagement Range but not end there, and auto-passes Desperate Escape tests.",
       "kind": "datasheet"
      },
      {
       "name": "Bloody Stampede",
       "text": "When this unit ends a Charge move, pick one engaged enemy unit and roll D6: 2-3 = 1 mortal wound, 4-5 = D3 mortal wounds, 6 = D3+3 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 100
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "eightbound",
      "exalted_eightbound",
      "khorne_berzerkers"
     ],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "daemon_prince",
     "name": "Daemon Prince of Khorne",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Monster",
      "Character",
      "Chaos",
      "Khorne",
      "Daemon",
      "Daemon Prince"
     ],
     "image": "daemon_prince",
     "baseSize": "60mm",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "16",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Lord of Murder",
       "text": "While within 3\" of a friendly WORLD EATERS INFANTRY unit, this model has Lone Operative.",
       "kind": "datasheet"
      },
      {
       "name": "Devastating Assault",
       "text": "After this model makes a Charge move, its hellforged weapons have [DEVASTATING WOUNDS] until the end of the turn.",
       "kind": "datasheet"
      },
      {
       "name": "Direct the Slaughter",
       "text": "Once per battle round (one model with this ability per army): when a friendly WORLD EATERS unit within 12\" is targeted with a Stratagem, reduce its cost by 1CP.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 200
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "daemon_prince_wings",
     "name": "Daemon Prince of Khorne with Wings",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Monster",
      "Character",
      "Chaos",
      "Khorne",
      "Daemon",
      "Daemon Prince",
      "Fly"
     ],
     "image": "daemon_prince_wings",
     "baseSize": "60mm",
     "profile": {
      "M": "14\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "16",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Bloodied Terror",
       "text": "Start of the Fight phase: each enemy unit engaged with this model takes a battle-shock test, at -1 if it is below half strength.",
       "kind": "datasheet"
      },
      {
       "name": "Swooping Predator",
       "text": "After a Normal or Advance move, pick one enemy unit this model moved over and roll 6D6: each 4+ inflicts 1 mortal wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 170
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "lord_on_juggernaut",
     "name": "Lord on Juggernaut",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Mounted",
      "Character",
      "Chaos",
      "Khorne",
      "Lord on Juggernaut"
     ],
     "image": "lord_on_juggernaut",
     "baseSize": "90x52mm",
     "profile": {
      "M": "10\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "4+",
      "W": "7",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Bladed horn",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Lance"
       ]
      },
      {
       "name": "Exalted chainblade",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Aggressive Advance",
       "text": "While leading a unit, models in it have Move 10\" and can move through terrain on Normal, Advance, Fall Back and Charge moves.",
       "kind": "datasheet"
      },
      {
       "name": "Crush All Who Stand Before Us",
       "text": "When this unit is selected to fight, models within 3\" of enemy models are eligible to fight and can target enemy units within 3\" that are engaged with their unit.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 95
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "eightbound",
      "exalted_eightbound",
      "khorne_berzerkers"
     ],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "master_of_executions",
     "name": "Master of Executions",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Khorne",
      "Master of Executions"
     ],
     "image": "master_of_executions",
     "baseSize": "40mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Axe of dismemberment",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds",
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "A Worthy Skull",
       "text": "Melee attacks by this model against CHARACTER units can re-roll the hit roll and the wound roll. Each time its unit destroys a CHARACTER model, gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "Forwards, For Blood!",
       "text": "While leading a unit, you can re-roll Advance rolls for it and re-roll the D6 for its Blood Surge moves.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "khorne_berzerkers"
     ],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "slaughterbound",
     "name": "Slaughterbound",
     "role": "character",
     "faction": "World Eaters",
     "keywords": [
      "Character",
      "Infantry",
      "Chaos",
      "Khorne",
      "Daemon",
      "Slaughterbound",
      "Possessed"
     ],
     "image": "slaughterbound",
     "baseSize": "50mm",
     "profile": {
      "M": "10\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "5+",
      "W": "6",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Lacerator and daemonic claw",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "10",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike",
      "Leader",
      "Scouts 6\" (when attached to Possessed)"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Rage Eternal",
       "text": "While leading a unit, in your Command phase return one destroyed bodyguard model to it.",
       "kind": "datasheet"
      },
      {
       "name": "Possessed Lord",
       "text": "Once per battle, at the start of the Fight phase: until the end of the phase this model's melee weapons get +3 A and [DEVASTATING WOUNDS].",
       "kind": "datasheet"
      },
      {
       "name": "Lord of the Eightbound",
       "text": "If attached to a WORLD EATERS POSSESSED unit when you declare battle formations, this model has Deep Strike and Scouts 6\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "eightbound",
      "exalted_eightbound"
     ],
     "composition": "1 model.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "khorne_berzerkers",
     "name": "Khorne Berzerkers",
     "role": "battleline",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Battleline",
      "Grenades",
      "Chaos",
      "Khorne",
      "Berzerkers"
     ],
     "image": "khorne_berzerkers",
     "baseSize": "32mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "—",
      "W": "2",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chainblade",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      },
      {
       "name": "Khornate eviscerator",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Blood Surge",
       "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model in this unit was destroyed by those attacks, the unit can surge up to D6+2\".",
       "kind": "datasheet"
      },
      {
       "name": "Murderous Charge",
       "text": "In a turn in which this unit made a charge move, its melee attacks get +1 S.",
       "kind": "datasheet"
      },
      {
       "name": "Icon of Khorne",
       "text": "Each time the bearer's unit destroys an enemy unit, gain 1 Bloodshed point. At each Blessings of Khorne roll, roll 1 extra die per Bloodshed point, then lose them all.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 170
      },
      {
       "models": 20,
       "pts": 330
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Khorne Berzerker Champion and 9 or 19 Khorne Berzerkers. Default: bolt pistol and chainblade.",
     "options": [
      {
       "id": "plasma",
       "type": "count",
       "label": "Plasma pistol",
       "slots": [
        "ranged"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "champ_plasma",
       "type": "toggle",
       "label": "Champion: plasma pistol",
       "slots": [
        "ranged"
       ]
      },
      {
       "id": "evisc",
       "type": "count",
       "label": "Khornate eviscerator",
       "slots": [
        "melee"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "icon",
       "type": "toggle",
       "label": "Icon of Khorne"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "ranged",
       "label": "Pistol",
       "default": "Bolt pistol",
       "size": {
        "models": 1
       }
      },
      {
       "id": "melee",
       "label": "Melee weapon",
       "default": "Chainblade",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "chaos_terminators",
     "name": "Chaos Terminators",
     "role": "infantry",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Chaos",
      "Khorne",
      "Terminator",
      "Terminator Squad"
     ],
     "image": "chaos_terminators",
     "baseSize": "40mm",
     "profile": {
      "M": "7\"",
      "T": "6",
      "Sv": "2+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-Infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Reaper autocannon",
       "range": "36\"",
       "A": "4",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Rapid Fire 2",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Heavy flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power fist",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Accursed weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Chainfist",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Anti-VEHICLE 3+"
       ]
      },
      {
       "name": "Paired accursed weapons",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Bloody Fury",
       "text": "Ranged attacks against the closest eligible target can re-roll hits. When this unit declares a charge you can let it re-roll the charge roll, but then it must end the move engaged with the closest charge target.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 175,
       "ptsLater": 185
      },
      {
       "models": 10,
       "pts": 350,
       "ptsLater": 360
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Terminator Champion and 4 or 9 Chaos Terminators. Default: combi-bolter and accursed weapon.",
     "options": [
      {
       "id": "combiw",
       "type": "count",
       "label": "Combi-weapon",
       "slots": [
        "ranged"
       ],
       "max": "models"
      },
      {
       "id": "hflamer",
       "type": "count",
       "label": "Heavy flamer",
       "slots": [
        "ranged"
       ],
       "per": 5,
       "n": 1,
       "group": "heavy"
      },
      {
       "id": "reaper",
       "type": "count",
       "label": "Reaper autocannon",
       "slots": [
        "ranged"
       ],
       "per": 5,
       "n": 1,
       "group": "heavy"
      },
      {
       "id": "fist",
       "type": "count",
       "label": "Power fist",
       "slots": [
        "melee"
       ],
       "per": 5,
       "n": 3
      },
      {
       "id": "chainfist",
       "type": "count",
       "label": "Chainfist",
       "slots": [
        "melee"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "paired",
       "type": "count",
       "label": "Paired accursed weapons",
       "slots": [
        "ranged",
        "melee"
       ],
       "note": "replaces combi-bolter and accursed weapon",
       "per": 5,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "ranged",
       "label": "Ranged weapon",
       "default": "Combi-bolter",
       "size": {
        "models": 1
       }
      },
      {
       "id": "melee",
       "label": "Melee weapon",
       "default": "Accursed weapon",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": [
      {
       "id": "heavy",
       "label": "Heavy flamer or reaper autocannon",
       "per": 5,
       "n": 1
      }
     ]
    },
    {
     "id": "jakhals",
     "name": "Jakhals",
     "role": "infantry",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Chaos",
      "Khorne",
      "Jakhals",
      "Grenades"
     ],
     "image": "jakhals",
     "baseSize": "28.5mm (Dishonoured 40mm)",
     "profile": {
      "M": "7\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Autopistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chainblades",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Mauler chainblade",
       "range": "Melee",
       "A": "3",
       "skill": "5+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Skullsmasher and mangler",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Paired manglers",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Objective Ravaged",
       "text": "End of your Command phase: if this unit is within range of an objective you control, it stays yours until your opponent's Level of Control over it is higher at the end of a phase.",
       "kind": "datasheet"
      },
      {
       "name": "Icon of Khorne",
       "text": "Each time the bearer's unit destroys an enemy unit, gain 1 Bloodshed point. At each Blessings of Khorne roll, roll 1 extra die per Bloodshed point, then lose them all.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 65
      },
      {
       "models": 20,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "10 models: 1 Jakhal Pack Leader, 1 Dishonoured, 8 Jakhals. 20 models: 1 Pack Leader, 2 Dishonoured, 17 Jakhals. Jakhals: autopistol and chainblades; Dishonoured: paired manglers.",
     "options": [
      {
       "id": "mauler",
       "type": "count",
       "label": "Mauler chainblade",
       "slots": [
        "jmelee"
       ],
       "per": 10,
       "n": 1
      },
      {
       "id": "skullsmasher",
       "type": "count",
       "label": "Skullsmasher and mangler",
       "slots": [
        "dish"
       ],
       "max": "slot"
      },
      {
       "id": "icon",
       "type": "count",
       "label": "Icon of Khorne",
       "per": 10,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "jmelee",
       "label": "Pack Leader and Jakhals",
       "default": "Chainblades",
       "size": {
        "models": 1,
        "minusPer": [
         10,
         1
        ]
       },
       "fixedNote": "All also carry an autopistol."
      },
      {
       "id": "dish",
       "label": "Dishonoured",
       "default": "Paired manglers",
       "size": {
        "per": [
         10,
         1
        ]
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "goremongers",
     "name": "Goremongers",
     "role": "infantry",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Grenades",
      "Chaos",
      "Khorne",
      "Goremongers"
     ],
     "image": "goremongers",
     "baseSize": "32mm",
     "profile": {
      "M": "9\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Autopistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Blood harpoon",
       "range": "18\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Assault",
        "Sustained Hits D3"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chainblade",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Lance"
       ]
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Infiltrators"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Loping Speed",
       "text": "In your opponent's Movement phase, if an enemy unit ends a move within 8\" and this unit is not engaged, it can make a Normal move of up to D6\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 8,
       "pts": 70
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Blood Herald and 7 Goremongers. Default: autopistol, chainblade, close combat weapon.",
     "options": [
      {
       "id": "pistols",
       "type": "count",
       "label": "2 autopistols",
       "slots": [
        "gm"
       ],
       "max": 1
      },
      {
       "id": "harpoon",
       "type": "count",
       "label": "Blood harpoon",
       "slots": [
        "gm"
       ],
       "max": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "gm",
       "label": "Goremongers (the Blood Herald keeps his chainblade)",
       "default": "Chainblade",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "All also carry an autopistol and a close combat weapon."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "eightbound",
     "name": "Eightbound",
     "role": "infantry",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Chaos",
      "Khorne",
      "Daemon",
      "Eightbound",
      "Possessed"
     ],
     "image": "eightbound",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "5+",
      "W": "3",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Chainblades",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Beacons of Rage (Aura)",
       "text": "Friendly WORLD EATERS units within 6\" get +1 to hit with melee attacks against non-MONSTER/VEHICLE units, and also +1 to wound if the target is below half strength.",
       "kind": "datasheet"
      },
      {
       "name": "Brazen Fury",
       "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model in this unit was destroyed by those attacks, it can surge up to D6\" (a Brazen Fury move).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 125,
       "ptsLater": 140
      },
      {
       "models": 6,
       "pts": 250,
       "ptsLater": 265
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Eightbound Champion and 2 or 5 Eightbound. Chainblades.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "exalted_eightbound",
     "name": "Exalted Eightbound",
     "role": "infantry",
     "faction": "World Eaters",
     "keywords": [
      "Infantry",
      "Chaos",
      "Khorne",
      "Daemon",
      "Exalted Eightbound",
      "Possessed"
     ],
     "image": "exalted_eightbound",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "5+",
      "W": "3",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Chainblades",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Anti-MONSTER 3+",
        "Anti-VEHICLE 3+"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Rend and Tear",
       "text": "Melee attacks against MONSTER or VEHICLE units get +1 Damage.",
       "kind": "datasheet"
      },
      {
       "name": "Brazen Fury",
       "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model in this unit was destroyed by those attacks, it can surge up to D6\" (a Brazen Fury move).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 130,
       "ptsLater": 145
      },
      {
       "models": 6,
       "pts": 260,
       "ptsLater": 275
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Exalted Eightbound Champion and 2 or 5 Exalted Eightbound. Chainblades.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_land_raider",
     "name": "Chaos Land Raider",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Transport",
      "Smoke",
      "Chaos",
      "Khorne",
      "Land Raider",
      "Frame"
     ],
     "image": "chaos_land_raider",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "12",
      "Sv": "2+",
      "InSv": "—",
      "W": "16",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Soulshatter lascannon",
       "range": "48\"",
       "A": "2",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-Infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Twin heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 2",
        "Sustained Hits 1",
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "9",
       "skill": "3+",
       "S": "8",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Assault Ramp",
       "text": "Units that disembark after this model made a Normal move can still declare a charge this turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 200,
       "ptsLater": 220
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: 2 soulshatter lascannons, twin heavy bolter, armoured tracks.",
     "options": [
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 14 WORLD EATERS INFANTRY models. Each POSSESSED or TERMINATOR model takes the space of 2 models."
    },
    {
     "id": "chaos_predator_annihilator",
     "name": "Chaos Predator Annihilator",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Khorne",
      "Predator Annihilator",
      "Frame"
     ],
     "image": "chaos_predator",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "11",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Predator twin lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "4+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Rapid Fire 2",
        "Twin-linked"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-Infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 2",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Blood-hungry Annihilator",
       "text": "Ranged attacks against the closest eligible MONSTER or VEHICLE within 18\" can re-roll the wound roll and the damage roll.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 130,
       "ptsLater": 140
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: Predator twin lascannon, armoured tracks.",
     "options": [
      {
       "id": "sponsons",
       "type": "choice",
       "label": "Sponsons",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "2 heavy bolters",
         "pts": 0
        },
        {
         "id": "las",
         "label": "2 lascannons",
         "pts": 0
        }
       ]
      },
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_predator_destructor",
     "name": "Chaos Predator Destructor",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Khorne",
      "Predator Destructor",
      "Frame"
     ],
     "image": "chaos_predator",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "11",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Predator autocannon",
       "range": "48\"",
       "A": "4",
       "skill": "4+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Rapid Fire 6"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-Infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 2",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Punishing Suppression",
       "text": "After this model shoots in your Shooting phase, one enemy unit it hit (not MONSTER/VEHICLE) is suppressed until your next turn: -1 to hit for its attacks.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 130,
       "ptsLater": 140
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: Predator autocannon, armoured tracks.",
     "options": [
      {
       "id": "sponsons",
       "type": "choice",
       "label": "Sponsons",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "2 heavy bolters",
         "pts": 0
        },
        {
         "id": "las",
         "label": "2 lascannons",
         "pts": 0
        }
       ]
      },
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "defiler",
     "name": "Defiler",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Khorne",
      "Daemon",
      "Defiler"
     ],
     "image": "defiler",
     "baseSize": "160mm",
     "profile": {
      "M": "14\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "5+",
      "W": "18",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy missile launcher - frag",
       "range": "48\"",
       "A": "2D6",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Blast",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Heavy missile launcher - krak",
       "range": "48\"",
       "A": "2",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "D6+1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Hades lascannon",
       "range": "48\"",
       "A": "2",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Heavy reaper autocannon",
       "range": "48\"",
       "A": "4",
       "skill": "4+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Rapid Fire 2",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Hades battle cannon",
       "range": "48\"",
       "A": "D6+3",
       "skill": "4+",
       "S": "10",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Blast",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Ectoplasma destructor",
       "range": "36\"",
       "A": "D6",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Heavy baleflamer",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Excruciator cannon",
       "range": "36\"",
       "A": "6",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Magma cutter",
       "range": "12\"",
       "A": "2",
       "skill": "4+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2",
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Shearing claws - strike",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "16",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Shearing claws - sweep",
       "range": "Melee",
       "A": "12",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Electroscourge",
       "range": "Melee",
       "A": "7",
       "skill": "3+",
       "S": "12",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Sustained Hits 2"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Scuttling Walker",
       "text": "On Normal, Advance and Fall Back moves it can move through models (not TITANIC) and terrain, cross Engagement Range without ending there, and auto-passes Desperate Escape tests.",
       "kind": "datasheet"
      },
      {
       "name": "Unleash Wrath",
       "text": "End of your opponent's Movement phase: pick an enemy unit set up within 12\" this phase. This model can shoot it (if eligible) or declare a charge against it (no charge bonus).",
       "kind": "datasheet"
      },
      {
       "name": "Terror of Khorne",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit once per phase).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 270,
       "ptsLater": 310
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 model. Default: Hades battle cannon, 2 excruciator cannons, heavy missile launcher, heavy baleflamer, shearing claws.",
     "options": [
      {
       "id": "main",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "hbc",
         "label": "Hades battle cannon",
         "pts": 0
        },
        {
         "id": "ecto",
         "label": "Ectoplasma destructor",
         "pts": 0
        }
       ]
      },
      {
       "id": "side",
       "type": "choice",
       "label": "Side guns",
       "choices": [
        {
         "id": "exc",
         "label": "2 excruciator cannons",
         "pts": 0
        },
        {
         "id": "magma",
         "label": "2 magma cutters",
         "pts": 0
        }
       ]
      },
      {
       "id": "slotA",
       "type": "choice",
       "label": "Heavy baleflamer slot",
       "choices": [
        {
         "id": "bale",
         "label": "Heavy baleflamer",
         "pts": 0
        },
        {
         "id": "hlc",
         "label": "Hades lascannon",
         "pts": 15
        },
        {
         "id": "hra",
         "label": "Heavy reaper autocannon",
         "pts": 15
        },
        {
         "id": "scourge",
         "label": "Electroscourge",
         "pts": 0
        }
       ]
      },
      {
       "id": "slotB",
       "type": "choice",
       "label": "Heavy missile launcher slot",
       "choices": [
        {
         "id": "hml",
         "label": "Heavy missile launcher",
         "pts": 0
        },
        {
         "id": "hlc",
         "label": "Hades lascannon",
         "pts": 15
        },
        {
         "id": "hra",
         "label": "Heavy reaper autocannon",
         "pts": 15
        },
        {
         "id": "scourge",
         "label": "Electroscourge",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "forgefiend",
     "name": "Forgefiend",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Khorne",
      "Daemon",
      "Forgefiend"
     ],
     "image": "forgefiend",
     "baseSize": "120x92mm",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "5+",
      "W": "12",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Ectoplasma cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Hades autocannon",
       "range": "36\"",
       "A": "6",
       "skill": "4+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 4"
       ]
      }
     ],
     "melee": [
      {
       "name": "Forgefiend claws",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Forgefiend jaws",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Furious Onslaught",
       "text": "Ranged attacks against the closest eligible target within 18\" can re-roll the hit roll.",
       "kind": "datasheet"
      },
      {
       "name": "Terror of Khorne",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit once per phase).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 140,
       "ptsLater": 155
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: 2 Hades autocannons, Forgefiend jaws.",
     "options": [
      {
       "id": "guns",
       "type": "choice",
       "label": "Main guns",
       "choices": [
        {
         "id": "hac",
         "label": "2 Hades autocannons",
         "pts": 0
        },
        {
         "id": "ecto",
         "label": "2 ectoplasma cannons",
         "pts": 10
        }
       ]
      },
      {
       "id": "head",
       "type": "choice",
       "label": "Head",
       "choices": [
        {
         "id": "jaws",
         "label": "Forgefiend jaws",
         "pts": 0
        },
        {
         "id": "ecto",
         "label": "Ectoplasma cannon and Forgefiend claws",
         "pts": 5
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "helbrute",
     "name": "Helbrute",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Khorne",
      "Helbrute"
     ],
     "image": "helbrute",
     "baseSize": "60mm",
     "profile": {
      "M": "9\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "—",
      "W": "8",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Heavy flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Missile launcher - frag",
       "range": "48\"",
       "A": "D6",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Missile launcher - krak",
       "range": "48\"",
       "A": "1",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "D6",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Multi-melta",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Twin autocannon",
       "range": "48\"",
       "A": "2",
       "skill": "4+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Rapid Fire 2",
        "Twin-linked"
       ]
      },
      {
       "name": "Plasma cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "8",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Hazardous",
        "Rapid Fire D3"
       ]
      },
      {
       "name": "Twin heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 2",
        "Sustained Hits 1",
        "Twin-linked"
       ]
      },
      {
       "name": "Twin lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Rapid Fire 1",
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Helbrute fist",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "12",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Helbrute hammer",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Power scourge",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Frenzy",
       "text": "(Once per turn) In the Fight phase, after an enemy unit that targeted this unit finishes its attacks, this unit can fight (even if it already fought) and must be selected next.",
       "kind": "datasheet"
      },
      {
       "name": "Devoted to Destruction",
       "text": "If equipped with 2 melee weapons besides its close combat weapon, those two weapons get +2 A.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 model. Default: multi-melta, missile launcher, close combat weapon.",
     "options": [
      {
       "id": "arm1",
       "type": "choice",
       "label": "Multi-melta arm",
       "choices": [
        {
         "id": "mm",
         "label": "Multi-melta",
         "pts": 0
        },
        {
         "id": "pc",
         "label": "Plasma cannon",
         "pts": 0
        },
        {
         "id": "tac",
         "label": "Twin autocannon",
         "pts": 0
        },
        {
         "id": "thb",
         "label": "Twin heavy bolter",
         "pts": 0
        },
        {
         "id": "tlc",
         "label": "Twin lascannon",
         "pts": 0
        },
        {
         "id": "fist",
         "label": "Helbrute fist",
         "pts": 0
        }
       ]
      },
      {
       "id": "arm2",
       "type": "choice",
       "label": "Missile launcher arm",
       "choices": [
        {
         "id": "ml",
         "label": "Missile launcher",
         "pts": 0
        },
        {
         "id": "fist",
         "label": "Helbrute fist",
         "pts": 0
        },
        {
         "id": "hammer",
         "label": "Helbrute hammer",
         "pts": 0
        },
        {
         "id": "scourge",
         "label": "Power scourge",
         "pts": 0
        }
       ]
      },
      {
       "id": "fist1",
       "type": "choice",
       "label": "Fist weapon (needs a Helbrute fist)",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Heavy flamer",
         "pts": 0
        }
       ]
      },
      {
       "id": "fist2",
       "type": "choice",
       "label": "Second fist weapon (needs two fists)",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Heavy flamer",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [
      {
       "if": "fist1",
       "notValue": "none",
       "requireAnyOf": [
        [
         "arm1",
         "fist"
        ],
        [
         "arm2",
         "fist"
        ]
       ],
       "message": "The fist weapon needs at least one Helbrute fist."
      },
      {
       "if": "fist2",
       "notValue": "none",
       "requireAllOf": [
        [
         "arm1",
         "fist"
        ],
        [
         "arm2",
         "fist"
        ]
       ],
       "message": "A second fist weapon needs two Helbrute fists."
      }
     ],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "heldrake",
     "name": "Heldrake",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Fly",
      "Chaos",
      "Khorne",
      "Daemon",
      "Heldrake"
     ],
     "image": "heldrake",
     "baseSize": "120x92mm (flying base)",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "5+",
      "W": "12",
      "OC": "0",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Baleflamer",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Hades autocannon",
       "range": "36\"",
       "A": "6",
       "skill": "4+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Rapid Fire 4"
       ]
      }
     ],
     "melee": [
      {
       "name": "Heldrake claws",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Anti-FLY 2+",
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Hover"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Airborne Predator",
       "text": "+1 to hit for attacks against units that can FLY.",
       "kind": "datasheet"
      },
      {
       "name": "Terror of Khorne",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit once per phase).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 175
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 model. Default: Hades autocannon, Heldrake claws.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Weapon",
       "choices": [
        {
         "id": "hac",
         "label": "Hades autocannon",
         "pts": 0
        },
        {
         "id": "bale",
         "label": "Baleflamer",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "maulerfiend",
     "name": "Maulerfiend",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Khorne",
      "Daemon",
      "Maulerfiend"
     ],
     "image": "maulerfiend",
     "baseSize": "120x92mm",
     "profile": {
      "M": "12\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "5+",
      "W": "12",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Magma cutter",
       "range": "6\"",
       "A": "2",
       "skill": "4+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2",
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Maulerfiend fists",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "14",
       "AP": "-2",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Lasher tendrils",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "The Scent of Blood",
       "text": "When this unit declares a charge: +1 to the charge roll if an enemy unit below starting strength is within 9\", or +2 if an enemy unit below half strength is within 9\".",
       "kind": "datasheet"
      },
      {
       "name": "Savage Exaltation",
       "text": "Melee attacks against a unit below starting strength get +1 to hit; against a unit below half strength they also get +1 to wound.",
       "kind": "datasheet"
      },
      {
       "name": "Terror of Khorne",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit once per phase).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 140,
       "ptsLater": 150
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: lasher tendrils, Maulerfiend fists.",
     "options": [
      {
       "id": "arms",
       "type": "choice",
       "label": "Arms",
       "choices": [
        {
         "id": "lasher",
         "label": "Lasher tendrils",
         "pts": 0
        },
        {
         "id": "magma",
         "label": "2 magma cutters",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_rhino",
     "name": "Chaos Rhino",
     "role": "transport",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Transport",
      "Dedicated Transport",
      "Smoke",
      "Chaos",
      "Khorne",
      "Rhino",
      "Frame"
     ],
     "image": "chaos_rhino",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "10",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-Infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Firing Deck 2"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Meet Any Challenge",
       "text": "In your opponent's Movement phase, when an enemy unit is set up or ends a Normal, Advance or Fall Back move within 8\", units embarked in this model can disembark.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 75,
       "ptsLater": 85
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 model. Default: combi-bolter, armoured tracks.",
     "options": [
      {
       "id": "extra",
       "type": "choice",
       "label": "Extra pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 WORLD EATERS INFANTRY models. Cannot carry POSSESSED or TERMINATOR models."
    },
    {
     "id": "chaos_spawn",
     "name": "Chaos Spawn",
     "role": "beast",
     "faction": "World Eaters",
     "keywords": [
      "Beast",
      "Chaos",
      "Khorne",
      "Spawn"
     ],
     "image": "chaos_spawn",
     "baseSize": "50mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Hideous Mutations",
       "range": "Melee",
       "A": "D6+4",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Feel No Pain 5+",
      "Scouts 8\""
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "To Slake Its Rage",
       "text": "This unit can declare a charge in a turn in which it advanced.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 2,
       "pts": 95
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "2 Chaos Spawn. Hideous mutations.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "khorne_lord_of_skulls",
     "name": "Khorne Lord of Skulls",
     "role": "vehicle",
     "faction": "World Eaters",
     "keywords": [
      "Vehicle",
      "Titanic",
      "Towering",
      "Chaos",
      "Khorne",
      "Daemon",
      "Lord of Skulls",
      "Frame"
     ],
     "image": "lord_of_skulls",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "13",
      "Sv": "3+",
      "InSv": "5+",
      "W": "24",
      "OC": "8",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 8,
      "text": "While it has 1-8 wounds left: -4 OC and -1 to hit.",
      "ocMod": -4
     },
     "ranged": [
      {
       "name": "Hades gatling cannon",
       "range": "48\"",
       "A": "12",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Rapid Fire 6",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Skullhurler",
       "range": "60\"",
       "A": "2D6",
       "skill": "4+",
       "S": "14",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Gorestorm cannon",
       "range": "24\"",
       "A": "D6+3",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Daemongore cannon",
       "range": "18\"",
       "A": "D6",
       "skill": "4+",
       "S": "14",
       "AP": "-4",
       "D": "D6+2",
       "kw": [
        "Blast",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Ichor cannon",
       "range": "48\"",
       "A": "2D6",
       "skill": "4+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Blast",
        "Rapid Fire 4"
       ]
      }
     ],
     "melee": [
      {
       "name": "Great cleaver of Khorne - strike",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "16",
       "AP": "-4",
       "D": "8",
       "kw": []
      },
      {
       "name": "Great cleaver of Khorne - sweep",
       "range": "Melee",
       "A": "18",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6+2",
      "Super-Heavy Walker"
     ],
     "factionAbilities": [
      "Blessings of Khorne"
     ],
     "abilities": [
      {
       "name": "Idol of Blessed Blood",
       "text": "While this unit is on the battlefield, roll 1 extra die for each Blessings of Khorne roll.",
       "kind": "datasheet"
      },
      {
       "name": "Terror of Khorne",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this unit; it makes a battle-shock roll at -1 (each enemy unit once per phase).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 505,
       "ptsLater": 535
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 model. Default: Hades gatling cannon, gorestorm cannon, great cleaver of Khorne.",
     "options": [
      {
       "id": "gatling",
       "type": "choice",
       "label": "Gatling slot",
       "choices": [
        {
         "id": "gat",
         "label": "Hades gatling cannon",
         "pts": 0
        },
        {
         "id": "skull",
         "label": "Skullhurler",
         "pts": 0
        }
       ]
      },
      {
       "id": "cannon",
       "type": "choice",
       "label": "Cannon slot",
       "choices": [
        {
         "id": "gore",
         "label": "Gorestorm cannon",
         "pts": 0
        },
        {
         "id": "daemon",
         "label": "Daemongore cannon",
         "pts": 0
        },
        {
         "id": "ichor",
         "label": "Ichor cannon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "skarbrand",
     "name": "Skarbrand",
     "role": "allies",
     "faction": "Blood Legions",
     "keywords": [
      "Monster",
      "Character",
      "Epic Hero",
      "Chaos",
      "Daemon",
      "Khorne",
      "Skarbrand"
     ],
     "image": "skarbrand",
     "baseSize": "100mm",
     "profile": {
      "M": "10\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "4+",
      "W": "20",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 7,
      "text": "While it has 1-7 wounds left: Slaughter and Carnage gets +2 A."
     },
     "ranged": [
      {
       "name": "Bellow of endless fury",
       "range": "12\"",
       "A": "2D6",
       "skill": "—",
       "S": "8",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Slaughter and Carnage - strike",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "16",
       "AP": "-4",
       "D": "6",
       "kw": []
      },
      {
       "name": "Slaughter and Carnage - sweep",
       "range": "Melee",
       "A": "16",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Rage Embodied (Aura)",
       "text": "Friendly BLOOD LEGIONS units within 6\" get +1 A on their melee weapons.",
       "kind": "datasheet"
      },
      {
       "name": "Murderlust",
       "text": "This unit can declare a charge in a turn in which it advanced.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 315
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 model (Epic Hero).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "bloodthirster",
     "name": "Bloodthirster",
     "role": "allies",
     "faction": "Blood Legions",
     "keywords": [
      "Monster",
      "Character",
      "Fly",
      "Chaos",
      "Daemon",
      "Khorne",
      "Summoned",
      "Bloodthirster"
     ],
     "image": "bloodthirster",
     "baseSize": "120x92mm",
     "profile": {
      "M": "12\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "4+",
      "W": "18",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 6,
      "text": "While it has 1-6 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Hellfire breath",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Bloodflail",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "16",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Lash of Khorne",
       "range": "12\"",
       "A": "9",
       "skill": "2+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Great axe of Khorne - strike",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "16",
       "AP": "-4",
       "D": "D6+2",
       "kw": []
      },
      {
       "name": "Great axe of Khorne - sweep",
       "range": "Melee",
       "A": "14",
       "skill": "2+",
       "S": "10",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Axe of Khorne - strike",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "14",
       "AP": "-4",
       "D": "D3+1",
       "kw": []
      },
      {
       "name": "Axe of Khorne - sweep",
       "range": "Melee",
       "A": "16",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Daemon Lord of Khorne (Aura)",
       "text": "Friendly BLOOD LEGIONS units within 6\" get +1 to hit with melee attacks.",
       "kind": "datasheet"
      },
      {
       "name": "Relentless Carnage",
       "text": "End of the Fight phase: pick one enemy unit engaged with this model and roll 8D6; each 4+ inflicts 1 mortal wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 320,
       "ptsLater": 335
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 model. Default: hellfire breath, great axe of Khorne.",
     "options": [
      {
       "id": "weapons",
       "type": "choice",
       "label": "Weapons",
       "choices": [
        {
         "id": "greataxe",
         "label": "Great axe of Khorne",
         "pts": 0
        },
        {
         "id": "flail",
         "label": "Axe of Khorne and bloodflail",
         "pts": 0
        },
        {
         "id": "lash",
         "label": "Axe of Khorne and lash of Khorne",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "bloodletters",
     "name": "Bloodletters",
     "role": "allies",
     "faction": "Blood Legions",
     "keywords": [
      "Infantry",
      "Battleline",
      "Chaos",
      "Daemon",
      "Khorne",
      "Summoned"
     ],
     "image": "bloodletters",
     "baseSize": "32mm",
     "profile": {
      "M": "8\"",
      "T": "4",
      "Sv": "7+",
      "InSv": "5+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Hellblade",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Bane of Cowards",
       "text": "Enemy units (not MONSTER/VEHICLE) that fall back from units with this ability must take Desperate Escape tests, at -1 if battle-shocked.",
       "kind": "datasheet"
      },
      {
       "name": "Instrument of Chaos",
       "text": "+1 to charge rolls for the bearer's unit.",
       "kind": "wargear"
      },
      {
       "name": "Daemonic Icon",
       "text": "Models in the bearer's unit have Leadership 6+.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Bloodreaper and 9 Bloodletters. Hellblades.",
     "options": [
      {
       "id": "icon",
       "type": "toggle",
       "label": "Daemonic Icon"
      },
      {
       "id": "instrument",
       "type": "toggle",
       "label": "Instrument of Chaos"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "bloodcrushers",
     "name": "Bloodcrushers",
     "role": "allies",
     "faction": "Blood Legions",
     "keywords": [
      "Mounted",
      "Chaos",
      "Daemon",
      "Khorne",
      "Summoned",
      "Bloodcrushers"
     ],
     "image": "bloodcrushers",
     "baseSize": "90x52mm",
     "profile": {
      "M": "10\"",
      "T": "7",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Hellblade",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Bladed horn",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Extra Attacks",
        "Lance"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Brass Stampede",
       "text": "When this unit ends a Charge move, pick one engaged enemy unit and roll D6 per model in this unit: each 4+ inflicts D3 mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Instrument of Chaos",
       "text": "+1 to charge rolls for the bearer's unit.",
       "kind": "wargear"
      },
      {
       "name": "Daemonic Icon",
       "text": "Models in the bearer's unit have Leadership 6+.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 95,
       "ptsLater": 115
      },
      {
       "models": 6,
       "pts": 190,
       "ptsLater": 210
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Bloodhunter and 2 or 5 Bloodcrushers. Hellblade and bladed horn.",
     "options": [
      {
       "id": "icon",
       "type": "toggle",
       "label": "Daemonic Icon"
      },
      {
       "id": "instrument",
       "type": "toggle",
       "label": "Instrument of Chaos"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "flesh_hounds",
     "name": "Flesh Hounds",
     "role": "allies",
     "faction": "Blood Legions",
     "keywords": [
      "Beast",
      "Chaos",
      "Daemon",
      "Khorne",
      "Summoned",
      "Flesh Hounds"
     ],
     "image": "flesh_hounds",
     "baseSize": "60x35.5mm",
     "profile": {
      "M": "12\"",
      "T": "4",
      "Sv": "7+",
      "InSv": "5+",
      "W": "2",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Burning roar",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Gore-drenched fangs",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Feel No Pain 3+ (psychic, from collar)"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Hunters from the Warp",
       "text": "End of your opponent's turn: if not engaged, this unit can be removed and placed into Strategic Reserves.",
       "kind": "datasheet"
      },
      {
       "name": "Collar of Khorne",
       "text": "The bearer has Feel No Pain 3+ against psychic attacks.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 75
      },
      {
       "models": 10,
       "pts": 150
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Gore Hound and 4 or 9 Flesh Hounds. Gore-drenched fangs and collar of Khorne; Gore Hound also has burning roar.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    }
   ]
  },
  "tyranids": {
   "armyFaction": "Tyranids",
   "alliedFactions": [],
   "armyRules": [
    {
     "id": "synapse",
     "name": "Synapse",
     "text": [
      "If your Army Faction is TYRANIDS: a TYRANIDS unit from your army within 6\" of one or more friendly SYNAPSE models is within Synapse Range of your army.",
      "While a unit is within Synapse Range, it takes battle-shock tests on 3D6 instead of 2D6, and its melee attacks get +1 S."
     ]
    },
    {
     "id": "shadow",
     "name": "Shadow in the Warp",
     "shadow": true,
     "text": [
      "If your Army Faction is TYRANIDS: once per battle, in either player's Command phase, while a unit with this ability is on the battlefield, you can unleash the Shadow in the Warp.",
      "Every enemy unit on the battlefield then takes a battle-shock test, at -1 if it is within 6\" of one or more of your SYNAPSE units."
     ]
    }
   ],
   "detachments": [
    {
     "id": "invasion_fleet",
     "name": "Invasion Fleet",
     "dp": 3,
     "dispositions": [
      "Take and Hold",
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Pick one Hyper-adaptation for the whole army at the start of the battle.",
     "rule": {
      "name": "Hyper-adaptations",
      "text": "At the start of the first battle round pick one Hyper-adaptation; it is active for your TYRANIDS units for the rest of the battle. Swarming Instincts: Attacks against INFANTRY or SWARM units have [SUSTAINED HITS 1]. Hyper-aggression: Attacks against MONSTER or VEHICLE units have [LETHAL HITS]. Hive Predators: Attacks against CHARACTER units have [PRECISION] on a critical hit."
     },
     "hyperAdaptations": [
      {
       "id": "swarming",
       "name": "Swarming Instincts",
       "effect": "Attacks against INFANTRY or SWARM units have [SUSTAINED HITS 1]."
      },
      {
       "id": "aggression",
       "name": "Hyper-aggression",
       "effect": "Attacks against MONSTER or VEHICLE units have [LETHAL HITS]."
      },
      {
       "id": "predators",
       "name": "Hive Predators",
       "effect": "Attacks against CHARACTER units have [PRECISION] on a critical hit."
      }
     ],
     "enhancements": [
      {
       "id": "adaptive_biology",
       "name": "Adaptive Biology",
       "pts": 25,
       "upgrade": false,
       "text": "The bearer has Feel No Pain 5+. If, at the start of any turn, it has fewer wounds left than its starting number, it has Feel No Pain 4+ instead for the rest of the battle.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "alien_cunning",
       "name": "Alien Cunning",
       "pts": 30,
       "upgrade": false,
       "text": "After both armies deploy, redeploy up to three TYRANIDS units; they can go into Strategic Reserves regardless of the usual limit.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "perfectly_adapted",
       "name": "Perfectly Adapted",
       "pts": 15,
       "upgrade": false,
       "text": "Once per turn, re-roll one hit, wound, damage, Advance or charge roll, or one saving throw, made for the bearer.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "synaptic_linchpin",
       "name": "Synaptic Linchpin",
       "pts": 20,
       "upgrade": false,
       "text": "Friendly TYRANIDS units within 9\" of the bearer are within your army's Synapse Range.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "rapid_regeneration",
       "name": "Rapid Regeneration",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One TYRANIDS unit targeted by those attacks.",
       "effect": "Until the end of the phase it has Feel No Pain 6+, or 5+ while within Synapse Range."
      },
      {
       "id": "adrenal_surge",
       "name": "Adrenal Surge",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "Up to two TYRANIDS units within Synapse Range that are eligible to fight, or one other eligible TYRANIDS unit.",
       "effect": "Until the end of the phase, their unmodified hit rolls of 5+ are critical hits."
      },
      {
       "id": "death_frenzy",
       "name": "Death Frenzy",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit selects its targets.",
       "target": "One TYRANIDS unit targeted by those attacks.",
       "effect": "Until the end of the phase, when a model in it is destroyed before it has fought, roll D6: on a 4+ it fights after the attacking unit finishes, then is removed."
      },
      {
       "id": "overrun",
       "name": "Overrun",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just before a TYRANIDS unit consolidates.",
       "target": "That unit.",
       "effect": "Its models can consolidate 3\" further as long as the unit ends engaged. If it is within Synapse Range and not engaged, it can make a Normal move of up to 6\" instead of consolidating."
      },
      {
       "id": "predatory_imperative",
       "name": "Predatory Imperative",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "Up to two TYRANIDS units within Synapse Range, or one other TYRANIDS unit.",
       "effect": "Pick a second Hyper-adaptation; it is also active for those units until your next Command phase.",
       "restrictions": "Not the Hyper-adaptation picked at the start of the first battle round."
      },
      {
       "id": "endless_swarm",
       "name": "Endless Swarm",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "Up to two ENDLESS MULTITUDE units within Synapse Range, or one other ENDLESS MULTITUDE unit.",
       "effect": "Return up to D3+3 destroyed models to each of them."
      }
     ]
    },
    {
     "id": "subterranean_assault",
     "name": "Subterranean Assault",
     "dp": 3,
     "dispositions": [
      "Disruption",
      "Reconnaissance"
     ],
     "tags": [],
     "summary": "Burrowers leave Tunnel Markers for your reinforcements; re-roll hit rolls of 1; up to two Trygons can be Characters.",
     "rule": {
      "name": "Surprise Assault",
      "text": "Attacks by TYRANIDS models re-roll hit rolls of 1. When a BURROWER unit is set up from Reserves, place a 40mm Tunnel Marker within 1\" of it and more than 3\" horizontally from enemy units. In the Reinforcements step you can set up units from Reserves wholly within 9\" of one of your Tunnel Markers and more than 6\" horizontally from enemy units. A marker is removed when an enemy model (not AIRCRAFT) ends any move within 3\" of it. MAWLOC and TRYGON units have the BURROWER keyword. At muster you can pick up to 2 TRYGON models to gain the CHARACTER keyword: they can take Enhancements and one can be your Warlord."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "mawloc",
        "trygon"
       ],
       "keyword": "Burrower"
      }
     ],
     "instanceGrants": [
      {
       "id": "trygon_character",
       "unitIds": [
        "trygon"
       ],
       "keyword": "Character",
       "max": 2,
       "label": "Character (Subterranean Assault)",
       "note": "Up to 2 Trygons. A CHARACTER Trygon can take an Enhancement and be your Warlord."
      }
     ],
     "tunnelMarkers": true,
     "enhancements": [
      {
       "id": "synaptic_strategy",
       "name": "Synaptic Strategy",
       "pts": 15,
       "upgrade": false,
       "text": "Once per battle, Rapid Ingress on the bearer's unit costs 0CP, even if another unit already used it this phase.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "tremor_senses",
       "name": "Tremor Senses",
       "pts": 20,
       "upgrade": false,
       "text": "After both armies deploy, redeploy up to three TYRANIDS units; they can go into Strategic Reserves regardless of the usual limit.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "trygon_prime",
       "name": "Trygon Prime",
       "pts": 20,
       "upgrade": false,
       "text": "TRYGON only. The bearer gains SYNAPSE and its melee weapons get +1 S and +1 WS.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "unitIds": [
         "trygon"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "S",
         "add": 1
        },
        {
         "target": "melee",
         "stat": "WS",
         "improve": 1
        }
       ],
       "addKeywords": [
        "Synapse"
       ]
      },
      {
       "id": "vanguard_intellect",
       "name": "Vanguard Intellect",
       "pts": 15,
       "upgrade": false,
       "text": "Models with Deep Strike only. The bearer's unit can arrive by Deep Strike in the Reinforcements step of your 1st, 2nd or 3rd Movement phase, regardless of mission rules.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "coreAll": [
         "Deep Strike"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "adaptive_optimisation",
       "name": "Adaptive Optimisation",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Command"
       ],
       "when": "Command phase.",
       "target": "One MAWLOC or TRYGON unit.",
       "effect": "It has the SYNAPSE keyword until the start of your next Command phase."
      },
      {
       "id": "replenishing_swarms",
       "name": "Replenishing Swarms",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One TYRANIDS unit wholly within 9\" of one of your Tunnel Markers.",
       "effect": "One model regains up to D3+1 lost wounds, or return up to D3+1 destroyed 1-wound models with full wounds instead."
      },
      {
       "id": "enfilading_emergence",
       "name": "Enfilading Emergence",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "End of your Movement phase.",
       "target": "One TYRANIDS unit set up as Reinforcements this turn.",
       "effect": "Until the end of your next Fight phase its weapons have [SUSTAINED HITS 1] and [IGNORES COVER]."
      },
      {
       "id": "tunnel_network",
       "name": "Tunnel Network",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "End of your Movement phase.",
       "target": "One unengaged TYRANIDS unit wholly within 9\" of one of your Tunnel Markers.",
       "effect": "Remove it and set it up again wholly within 9\" of another of your Tunnel Markers, more than 6\" horizontally from all enemy units."
      },
      {
       "id": "swarming_assault",
       "name": "Swarming Assault",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase.",
       "target": "One TYRANIDS MONSTER unit set up as Reinforcements this turn.",
       "effect": "Until the end of the phase, friendly TYRANIDS units within 6\" of it can re-roll charge rolls."
      },
      {
       "id": "retreat_below",
       "name": "Retreat Below",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent's Fight phase.",
       "target": "One TYRANIDS unit, or up to two BURROWER units, that are not engaged.",
       "effect": "Remove them and place them into Strategic Reserves."
      }
     ]
    },
    {
     "id": "synaptic_nexus",
     "name": "Synaptic Nexus",
     "dp": 2,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Each battle round, pick a Synaptic Imperative for units within Synapse Range.",
     "rule": {
      "name": "Synaptic Imperatives",
      "text": "At the start of each battle round you can pick one Synaptic Imperative (each one only once per battle). Until the end of the round your TYRANIDS units benefit from it while within Synapse Range. Synaptic Augmentation: 5+ invulnerable save. Surging Vitality: +1 to Advance and Charge rolls. Goaded to Slaughter: +1 to hit with melee attacks."
     },
     "imperatives": [
      {
       "id": "augmentation",
       "name": "Synaptic Augmentation",
       "effect": "5+ invulnerable save."
      },
      {
       "id": "vitality",
       "name": "Surging Vitality",
       "effect": "+1 to Advance and Charge rolls."
      },
      {
       "id": "slaughter",
       "name": "Goaded to Slaughter",
       "effect": "+1 to hit with melee attacks."
      }
     ],
     "enhancements": [
      {
       "id": "power_of_the_hive_mind",
       "name": "Power of the Hive Mind",
       "pts": 10,
       "upgrade": false,
       "text": "TYRANIDS PSYKER only. +1 S and +1 AP for the bearer's psychic weapons.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Psyker"
        ]
       }
      },
      {
       "id": "psychostatic_disruption",
       "name": "Psychostatic Disruption (Aura)",
       "pts": 30,
       "upgrade": false,
       "text": "TYRANIDS SYNAPSE only. Enemy units arriving from Reserves cannot be set up within 12\" of the bearer. Once per battle, in battle round 1 or 2, when your opponent says a unit will arrive from Strategic Reserves, roll D6: on a 4+ it cannot arrive this turn.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Synapse"
        ]
       }
      },
      {
       "id": "synaptic_control",
       "name": "Synaptic Control",
       "pts": 20,
       "upgrade": false,
       "text": "TYRANIDS SYNAPSE only. Attacks allocated to the bearer get -1 Damage.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Synapse"
        ]
       }
      },
      {
       "id": "the_dirgeheart_of_kharis",
       "name": "The Dirgeheart of Kharis",
       "pts": 15,
       "upgrade": false,
       "text": "TYRANIDS SYNAPSE only (Aura). Enemy units within 9\" of the bearer get -1 Leadership.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Synapse"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "the_smothering_shadow",
       "name": "The Smothering Shadow",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, right after an enemy unit fails a battle-shock test.",
       "target": "One SYNAPSE unit within 12\" of that enemy unit.",
       "effect": "Roll six D6: each 3+ inflicts 1 mortal wound on that enemy unit."
      },
      {
       "id": "synaptic_channelling",
       "name": "Synaptic Channelling",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Command"
       ],
       "when": "Command phase.",
       "target": "One SYNAPSE unit.",
       "effect": "Until the end of the turn, friendly TYRANIDS units within 9\" of it are within Synapse Range."
      },
      {
       "id": "irresistible_will",
       "name": "Irresistible Will",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "One SYNAPSE unit that has not shot or fought this phase, and one visible enemy unit within 24\" of it.",
       "effect": "Until the end of the phase, attacks by friendly TYRANIDS units within 6\" of your SYNAPSE unit against that enemy re-roll hit rolls of 1 and wound rolls of 1."
      },
      {
       "id": "reinforced_hive_node",
       "name": "Reinforced Hive Node",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One SYNAPSE unit targeted by those attacks.",
       "effect": "Until that enemy unit finishes its attacks, attacks against your unit have their AP worsened by 1."
      },
      {
       "id": "imperative_dominance",
       "name": "Imperative Dominance",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One TYRANIDS unit within Synapse Range.",
       "effect": "Pick any Synaptic Imperative, even one already used. Until your next Command phase it applies to this unit instead of the army's current one."
      },
      {
       "id": "override_instincts",
       "name": "Override Instincts",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One TYRANIDS unit within Synapse Range that fell back this phase.",
       "effect": "It can shoot and declare a charge this turn."
      }
     ]
    },
    {
     "id": "assimilation_swarm",
     "name": "Assimilation Swarm",
     "dp": 2,
     "dispositions": [
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Harvester units regenerate nearby Tyranids every Command phase.",
     "rule": {
      "name": "Feed the Swarm",
      "text": "In your Command phase each HARVESTER unit can Regenerate one friendly TYRANIDS unit within 6\" (each unit once per phase): either one model regains up to D3+1 lost wounds, or one destroyed INFANTRY model (not a CHARACTER) returns with full wounds; ENDLESS MULTITUDE units get up to 3 models back instead."
     },
     "harvesterReminder": true,
     "enhancements": [
      {
       "id": "biophagic_flow",
       "name": "Biophagic Flow",
       "pts": 10,
       "upgrade": false,
       "text": "While a friendly HARVESTER model is within 12\" of the bearer, it can Regenerate a unit within 9\" instead of 6\".",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "instinctive_defence",
       "name": "Instinctive Defence",
       "pts": 15,
       "upgrade": false,
       "text": "While the bearer is within 6\" of a friendly HARVESTER unit, Heroic Intervention on its unit costs 1CP less and the unit has Fights First.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "parasitic_biomorphology",
       "name": "Parasitic Biomorphology",
       "pts": 25,
       "upgrade": false,
       "text": "+1 S for melee weapons in the bearer's unit. The first time the unit destroys an enemy unit in the Fight phase while the bearer is within 6\" of a friendly HARVESTER, its melee weapons get +1 A for the rest of the battle.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "regenerating_monstrosity",
       "name": "Regenerating Monstrosity",
       "pts": 20,
       "upgrade": false,
       "text": "Not MONSTER models. The bearer's unit can be regenerated up to twice per phase.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsNone": [
         "Monster"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "broodguard_impulse",
       "name": "Broodguard Impulse",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase, right after a friendly HARVESTER unit is destroyed.",
       "target": "That HARVESTER unit.",
       "effect": "For the rest of the battle, friendly TYRANIDS attacks against the enemy unit that destroyed it get +1 to wound."
      },
      {
       "id": "reclaim_biomass",
       "name": "Reclaim Biomass",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a TYRANIDS unit is destroyed, before its last model is removed.",
       "target": "One HARVESTER unit within 6\" of that unit.",
       "effect": "Regenerate one friendly TYRANIDS unit within 6\" of your HARVESTER unit (see Feed the Swarm); not the unit that was just destroyed."
      },
      {
       "id": "tyrannoformed",
       "name": "Tyrannoformed",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Command phase.",
       "target": "One HARVESTER unit within range of an objective you control.",
       "effect": "That objective stays yours even with no models near it, until your opponent controls it at the start or end of a turn."
      },
      {
       "id": "ablative_carapace",
       "name": "Ablative Carapace",
       "cp": 2,
       "type": "Epic Deed",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One HARVESTER unit targeted by those attacks.",
       "effect": "Until the end of the phase it has Feel No Pain 5+, or 4+ while within range of an objective you control."
      },
      {
       "id": "secure_biomass",
       "name": "Secure Biomass",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One TYRANIDS unit that has not fought this phase.",
       "effect": "Its melee weapons have [LETHAL HITS]; a HARVESTER unit also scores critical hits on unmodified hit rolls of 5+ in melee."
      },
      {
       "id": "rapacious_hunger",
       "name": "Rapacious Hunger",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Your Fight phase.",
       "target": "One TYRANIDS unit that just destroyed an enemy unit.",
       "effect": "It Regenerates at once. If it is a HARVESTER unit and you heal one model, that model regains up to 3 wounds instead of rolling."
      }
     ]
    },
    {
     "id": "crusher_stampede",
     "name": "Crusher Stampede",
     "dp": 2,
     "dispositions": [
      "Purge the Foe"
     ],
     "tags": [],
     "summary": "Monsters hit harder as they take losses and hold objectives better at full strength.",
     "rule": {
      "name": "Enraged Behemoths",
      "text": "TYRANIDS MONSTER models get +1 to hit while their unit is below Starting Strength, and also +1 to wound while it is below half strength. While a TYRANIDS MONSTER unit is at Starting Strength and not battle-shocked, its models get +2 OC."
     },
     "enhancements": [
      {
       "id": "enraged_reserves",
       "name": "Enraged Reserves",
       "pts": 20,
       "upgrade": false,
       "text": "TYRANIDS MONSTER only. If the bearer is destroyed by a melee attack before it has fought this phase, roll D6: on a 3+ it fights after the attacking unit finishes, then is removed.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Monster"
        ]
       }
      },
      {
       "id": "monstrous_nemesis",
       "name": "Monstrous Nemesis",
       "pts": 25,
       "upgrade": false,
       "text": "TYRANIDS MONSTER only. +1 to wound for the bearer's melee attacks against MONSTER or VEHICLE units.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Monster"
        ]
       }
      },
      {
       "id": "null_nodules",
       "name": "Null Nodules",
       "pts": 10,
       "upgrade": false,
       "text": "TYRANIDS MONSTER only. Once per battle, when a psychic attack is allocated to the bearer, it has Feel No Pain 5+ against psychic attacks until the end of the phase.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Monster"
        ]
       }
      },
      {
       "id": "ominous_presence",
       "name": "Ominous Presence",
       "pts": 15,
       "upgrade": false,
       "text": "TYRANIDS MONSTER only. +3 OC for the bearer.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Monster"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "OC",
         "add": 3
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "corrosive_viscera",
       "name": "Corrosive Viscera",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after a TYRANIDS MONSTER model with Deadly Demise that cannot FLY is destroyed.",
       "target": "That model.",
       "effect": "Its Deadly Demise mortal wounds are inflicted automatically (no D6 roll)."
      },
      {
       "id": "rampaging_monstrosities",
       "name": "Rampaging Monstrosities",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One TYRANIDS MONSTER unit that has not fought this phase.",
       "effect": "Until the end of the phase its models can re-roll hit rolls."
      },
      {
       "id": "savage_roar",
       "name": "Savage Roar",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit selects its targets.",
       "target": "One TYRANIDS MONSTER unit targeted by those attacks.",
       "effect": "The enemy unit takes a battle-shock test and gets -1 to hit against your unit until the end of the phase; also -1 to wound if it failed the test."
      },
      {
       "id": "untrammelled_ferocity",
       "name": "Untrammelled Ferocity",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One TYRANIDS MONSTER unit that has not moved this phase.",
       "effect": "On Normal, Advance and Fall Back moves it can move through models (not TITANIC) and terrain up to 4\" tall, crossing Engagement Range without ending there. It can also cross taller terrain, but then roll D6 after the move: on a 1 it is battle-shocked."
      },
      {
       "id": "swarm_guided_salvoes",
       "name": "Swarm-guided Salvoes",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One TYRANIDS MONSTER unit that has not shot this phase.",
       "effect": "Until the end of the phase its ranged weapons have [IGNORES COVER] and its attacks ignore modifiers to BS and to hit rolls."
      },
      {
       "id": "massive_impact",
       "name": "Massive Impact",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, right after a TYRANIDS MONSTER model ends a charge move.",
       "target": "That model.",
       "effect": "Pick one engaged enemy unit and roll six D6: each 4+ inflicts 1 mortal wound."
      }
     ]
    },
    {
     "id": "vanguard_onslaught",
     "name": "Vanguard Onslaught",
     "dp": 2,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [],
     "summary": "Fall back and still charge; Vanguard Invaders can advance and charge. Deathleaper can be your Warlord.",
     "rule": {
      "name": "Questing Tendrils",
      "text": "TYRANIDS units can declare a charge in a turn in which they fell back; VANGUARD INVADER units can also declare a charge in a turn in which they advanced. Vanguard Prime: Deathleaper loses Hunter Organism and can be your Warlord."
     },
     "allowWarlord": [
      "deathleaper"
     ],
     "enhancements": [
      {
       "id": "chameleonic",
       "name": "Chameleonic",
       "pts": 15,
       "upgrade": false,
       "text": "VANGUARD INVADER only. The bearer's unit has Stealth.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Vanguard Invader"
        ]
       }
      },
      {
       "id": "hunting_grounds",
       "name": "Hunting Grounds",
       "pts": 30,
       "upgrade": false,
       "text": "While the bearer is on the battlefield, each time your opponent sets up a unit from Reserves, roll D6: on a 2+ that unit takes a battle-shock test.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "neuronode",
       "name": "Neuronode",
       "pts": 20,
       "upgrade": false,
       "text": "After both armies deploy, redeploy up to three VANGUARD INVADER units; any of them can go into Strategic Reserves regardless of the usual limit.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "stalker",
       "name": "Stalker",
       "pts": 10,
       "upgrade": false,
       "text": "VANGUARD INVADER only. At the start of the battle pick one enemy unit: the bearer gets +1 to hit and +1 to wound against it.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "keywordsAll": [
         "Vanguard Invader"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "surprise_assault",
       "name": "Surprise Assault",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase, right after a VANGUARD INVADER unit selects its targets.",
       "target": "That unit.",
       "effect": "Pick one enemy unit it targeted: that unit takes a battle-shock test. Until the end of the phase your unit gets +1 to hit against it, and +1 to wound as well if the test was failed."
      },
      {
       "id": "assassin_beasts",
       "name": "Assassin Beasts",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One VANGUARD INVADER INFANTRY unit that has not fought this phase.",
       "effect": "Until the end of the phase its melee weapons have [PRECISION]."
      },
      {
       "id": "seeded_broods",
       "name": "Seeded Broods",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One TYRANIDS unit in Reserves, or up to two VANGUARD INVADER units in Reserves.",
       "effect": "For setting them up this phase, treat the battle round as one higher than it is."
      },
      {
       "id": "hypersensory_scillia",
       "name": "Hypersensory Scillia",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent's Movement phase, right after an enemy unit ends a Normal, Advance or Fall Back move.",
       "target": "Up to two VANGUARD INVADER units within 8\" of that enemy unit, or one other TYRANIDS INFANTRY unit within 8\".",
       "effect": "Each of them can make a Normal move of up to 6\".",
       "restrictions": "Not units that are engaged."
      },
      {
       "id": "unseen_lurkers",
       "name": "Unseen Lurkers",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit selects its targets.",
       "target": "One VANGUARD INVADER unit targeted by those attacks.",
       "effect": "Until the end of the phase it can only be targeted by ranged attacks from models within 18\" (6\" if it has Lone Operative). Your opponent can pick new targets."
      },
      {
       "id": "invisible_hunter",
       "name": "Invisible Hunter",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent's Fight phase.",
       "target": "Up to two VANGUARD INVADER units, or one TYRANIDS INFANTRY unit.",
       "effect": "Remove them and place them into Strategic Reserves.",
       "restrictions": "They must be more than 3\" from all enemy units."
      }
     ]
    },
    {
     "id": "unending_swarm",
     "name": "Unending Swarm",
     "dp": 2,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Endless Multitude units surge forward when shot and keep coming back.",
     "rule": {
      "name": "Insurmountable Odds",
      "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model of a friendly ENDLESS MULTITUDE unit was destroyed by those attacks, that unit can surge up to D6\"."
     },
     "enhancements": [
      {
       "id": "adrenalised_onslaught",
       "name": "Adrenalised Onslaught",
       "pts": 15,
       "upgrade": false,
       "text": "The bearer's unit can pile in and consolidate 3\" further.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "naturalised_camouflage",
       "name": "Naturalised Camouflage",
       "pts": 30,
       "upgrade": false,
       "text": "Start of the first battle round: pick up to three friendly ENDLESS MULTITUDE units within 9\" of the bearer. Until the end of that round they have the benefit of cover against ranged attacks.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "piercing_talons",
       "name": "Piercing Talons",
       "pts": 25,
       "upgrade": false,
       "text": "Attacks by the bearer's unit get +1 AP on a critical wound.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      },
      {
       "id": "relentless_hunger",
       "name": "Relentless Hunger",
       "pts": 20,
       "upgrade": false,
       "text": "+2\" Move for models in the bearer's unit.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "synaptic_goading",
       "name": "Synaptic Goading",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, just before an ENDLESS MULTITUDE unit within Synapse Range makes a surge move.",
       "target": "That unit.",
       "effect": "You can re-roll the surge distance, and the unit can end as close as possible to the closest objective marker instead of the closest enemy unit."
      },
      {
       "id": "unending_waves",
       "name": "Unending Waves",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, right after a friendly ENDLESS MULTITUDE unit is destroyed.",
       "target": "That unit.",
       "effect": "Add an identical new unit at Starting Strength to your Strategic Reserves.",
       "restrictions": "Attached CHARACTER units do not come back. Once per battle."
      },
      {
       "id": "teeming_masses",
       "name": "Teeming Masses",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One ENDLESS MULTITUDE unit targeted by those attacks.",
       "effect": "Until the end of the phase, attacks against it get -1 to hit."
      },
      {
       "id": "swarming_masses",
       "name": "Swarming Masses",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "One ENDLESS MULTITUDE unit that has not shot or fought this phase.",
       "effect": "Until the end of the phase its weapons have [SUSTAINED HITS 1]; with 15 or more models, its unmodified hit rolls of 5+ are also critical hits."
      },
      {
       "id": "bounding_advance",
       "name": "Bounding Advance",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One ENDLESS MULTITUDE unit.",
       "effect": "When it advances this phase, do not roll: add 6\" to its Move instead."
      },
      {
       "id": "preservation_imperative",
       "name": "Preservation Imperative",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit selects its targets.",
       "target": "One ENDLESS MULTITUDE unit targeted by those attacks.",
       "effect": "Until the end of the phase it counts as having fewer than five models for [BLAST]."
      }
     ]
    },
    {
     "id": "ambush_predators",
     "name": "Ambush Predators",
     "dp": 1,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Lictors and Deathleaper strike from Deep Strike and hunt characters.",
     "rule": {
      "name": "Mindhunger",
      "text": "Friendly DEATHLEAPER, LICTOR and NEUROLICTOR units have Deep Strike. Attacks by LICTOR and NEUROLICTOR units against CHARACTER units re-roll hit rolls of 1."
     },
     "enhancements": [
      {
       "id": "cryptophotaic_camouflage",
       "name": "Cryptophotaic Camouflage",
       "pts": 15,
       "upgrade": true,
       "text": "VON RYAN'S LEAPERS only. The unit has -3\" detection range.",
       "eligible": {
        "unitIds": [
         "von_ryans_leapers"
        ]
       }
      },
      {
       "id": "encircling_horrors",
       "name": "Encircling Horrors",
       "pts": 20,
       "upgrade": true,
       "text": "NEUROLICTOR, LICTOR or VON RYAN'S LEAPERS only. In your opponent's Movement phase, when an enemy unit ends a move within 8\", this unit can make a Normal move of up to D3+3\".",
       "eligible": {
        "unitIds": [
         "neurolictor",
         "lictor",
         "von_ryans_leapers"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "counterpredation",
       "name": "Counterpredation",
       "cp": 1,
       "type": "Ambush Predators",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a friendly DEATHLEAPER, LICTOR, NEUROLICTOR or VON RYAN'S LEAPERS unit is selected to fight.",
       "target": "That unit.",
       "effect": "Its attacks against a hidden unit get +1 S and +1 AP."
      },
      {
       "id": "hypersensory_adaptations",
       "name": "Hypersensory Adaptations",
       "cp": 1,
       "type": "Ambush Predators",
       "phases": [
        "Shooting"
       ],
       "when": "Start of your Shooting phase.",
       "target": "One DEATHLEAPER, LICTOR, NEUROLICTOR or VON RYAN'S LEAPERS unit.",
       "effect": "Pick one visible enemy unit within 12\" of it: that enemy unit has +6\" detection range."
      },
      {
       "id": "scanner_gheist",
       "name": "Scanner Gheist",
       "cp": 1,
       "type": "Ambush Predators",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent's Fight phase.",
       "target": "One unengaged DEATHLEAPER, LICTOR or NEUROLICTOR unit.",
       "effect": "Place it into Strategic Reserves."
      }
     ]
    },
    {
     "id": "talons_of_the_norn_queen",
     "name": "Talons of the Norn Queen",
     "dp": 1,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Norns can change their Singular Purpose once per battle.",
     "rule": {
      "name": "Higher Imperatives",
      "text": "NORN EMISSARY and NORN ASSIMILATOR units gain Protean Purpose: once per battle per unit, in your Command phase, make a new Singular Purpose selection (it replaces the previous one)."
     },
     "protean": [
      "norn_emissary",
      "norn_assimilator"
     ],
     "enhancements": [
      {
       "id": "destabilising_predation",
       "name": "Destabilising Predation",
       "pts": 20,
       "upgrade": true,
       "text": "NORN EMISSARY only. Its ranged attacks have [ANTI-CHARACTER 2+].",
       "eligible": {
        "unitIds": [
         "norn_emissary"
        ]
       }
      },
      {
       "id": "synaptoprescience",
       "name": "Synaptoprescience",
       "pts": 30,
       "upgrade": true,
       "text": "NORN ASSIMILATOR only. It has a 4+ invulnerable save.",
       "eligible": {
        "unitIds": [
         "norn_assimilator"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "InSv",
         "set": "4+"
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "catalytic_biofortification",
       "name": "Catalytic Biofortification",
       "cp": 1,
       "type": "Talons of the Norn Queen",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a friendly NORN ASSIMILATOR unit suffers a mortal wound.",
       "target": "That unit.",
       "effect": "It has Feel No Pain 4+ against mortal wounds."
      },
      {
       "id": "lesser_prey",
       "name": "Lesser Prey",
       "cp": 1,
       "type": "Talons of the Norn Queen",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a NORN ASSIMILATOR or NORN EMISSARY unit is selected to fight.",
       "target": "That unit.",
       "effect": "Its melee attacks get +2 S."
      },
      {
       "id": "tanglestrike_rounds",
       "name": "Tanglestrike Rounds",
       "cp": 1,
       "type": "Talons of the Norn Queen",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, after a NORN ASSIMILATOR unit has shot.",
       "target": "That unit.",
       "effect": "Pick one enemy unit it hit: that unit is tethered (-2\" Move) until the start of your next Command phase."
      }
     ]
    },
    {
     "id": "warrior_bioform_onslaught",
     "name": "Warrior Bioform Onslaught",
     "dp": 1,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Tyranid Warriors become Battleline; Warriors and Primes get a 5+ invulnerable save.",
     "rule": {
      "name": "Leader-beasts",
      "text": "Both Tyranid Warriors units gain the TYRANID WARRIORS and BATTLELINE keywords. TYRANID WARRIORS, TYRANID PRIME WITH LASH WHIP and WINGED TYRANID PRIME models have a 5+ invulnerable save."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "tyranid_warriors_ranged",
        "tyranid_warriors_melee"
       ],
       "keyword": "Tyranid Warriors"
      },
      {
       "unitIds": [
        "tyranid_warriors_ranged",
        "tyranid_warriors_melee"
       ],
       "keyword": "Battleline"
      }
     ],
     "buffs": [
      {
       "scope": {
        "unitIds": [
         "tyranid_warriors_ranged",
         "tyranid_warriors_melee",
         "tyranid_prime_with_lash_whip",
         "winged_tyranid_prime"
        ]
       },
       "target": "profile",
       "stat": "InSv",
       "set": "5+",
       "source": "Leader-beasts"
      }
     ],
     "enhancements": [
      {
       "id": "elevated_might",
       "name": "Elevated Might",
       "pts": 30,
       "upgrade": false,
       "text": "WINGED TYRANID PRIME or TYRANID PRIME WITH LASH WHIP only. The bearer's melee attacks can re-roll wound rolls and get +1 AP.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "unitIds": [
         "winged_tyranid_prime",
         "tyranid_prime_with_lash_whip"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "AP",
         "add": -1
        }
       ]
      },
      {
       "id": "ocular_adaptation",
       "name": "Ocular Adaptation",
       "pts": 20,
       "upgrade": false,
       "text": "WINGED TYRANID PRIME or TYRANID PRIME WITH LASH WHIP only. Melee attacks by the bearer's unit get +1 to hit.",
       "eligible": {
        "factionsAll": [
         "Tyranids"
        ],
        "unitIds": [
         "winged_tyranid_prime",
         "tyranid_prime_with_lash_whip"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "alien_physiology",
       "name": "Alien Physiology",
       "cp": 1,
       "type": "Warrior Bioform Onslaught",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, when an enemy unit targets a friendly TYRANID WARRIORS unit.",
       "target": "That unit.",
       "effect": "Attacks against it with S higher than its T get -1 to wound."
      },
      {
       "id": "synaptic_micronodes",
       "name": "Synaptic Micronodes",
       "cp": 1,
       "type": "Warrior Bioform Onslaught",
       "phases": [
        "Movement"
       ],
       "when": "End of your Movement phase.",
       "target": "One TYRANID WARRIORS unit.",
       "effect": "Pick one objective it controls: that objective is secured."
      },
      {
       "id": "parasitic_payload",
       "name": "Parasitic Payload",
       "cp": 1,
       "type": "Warrior Bioform Onslaught",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a TYRANID WARRIORS unit is selected to shoot.",
       "target": "That unit.",
       "effect": "Its ranged attacks have [IGNORES COVER]."
      }
     ]
    }
   ],
   "units": [
    {
     "id": "the_swarmlord",
     "name": "The Swarmlord",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Epic Hero",
      "Character",
      "Monster",
      "The Swarmlord",
      "Great Devourer",
      "Synapse",
      "Psyker",
      "Hive Tyrant"
     ],
     "image": "tyr_the_swarmlord",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "10",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Synaptic Pulse",
       "range": "18\"",
       "A": "D6+3",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Psychic",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Bone Sabres",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Hive Commander",
       "text": "Start of your Command phase: if this model is on the battlefield, gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "Malign Presence (Aura)",
       "text": "Once per turn, when your opponent targets one of their units within 12\" of this model with a Stratagem, you can make that use cost 1CP more.",
       "kind": "datasheet"
      },
      {
       "name": "Domination of the Hive Mind (Aura)",
       "text": "Friendly TYRANIDS units within 9\" of this model are within your army's Synapse Range.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 210
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "tyrant_guard"
     ],
     "composition": "1 Swarmlord (Epic Hero): synaptic pulse, bone sabres.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "old_one_eye",
     "name": "Old One Eye",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Epic Hero",
      "Monster",
      "Character",
      "Great Devourer",
      "Old One Eye"
     ],
     "image": "tyr_old_one_eye",
     "baseSize": "105x70mm",
     "profile": {
      "M": "8\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "—",
      "W": "9",
      "OC": "3",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Old One Eye’s claws and talons - Strike",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Old One Eye’s claws and talons - Sweep",
       "range": "Melee",
       "A": "12",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Feel No Pain 5+",
      "Leader"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Alpha Leader",
       "text": "While this model leads a unit, models in that unit can re-roll hit rolls.",
       "kind": "datasheet"
      },
      {
       "name": "Unstoppable Monster",
       "text": "At the start of each player's Command phase this model regains up to D3 lost wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 130
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "carnifexes"
     ],
     "composition": "1 Old One Eye (Epic Hero): claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "deathleaper",
     "name": "Deathleaper",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Epic Hero",
      "Character",
      "Great Devourer",
      "Deathleaper",
      "Infantry",
      "Vanguard Invader"
     ],
     "image": "tyr_deathleaper",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "4+",
      "W": "7",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Lictor claws and talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Fights First",
      "Infiltrators",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Fear of the Unseen (Aura)",
       "text": "Enemy units within 6\" get -1 Leadership. In the battle-shock step of your opponent's Command phase, each such unit below its Starting Strength must take a battle-shock test.",
       "kind": "datasheet"
      },
      {
       "name": "Hunter Organism",
       "text": "This model cannot be your Warlord.",
       "kind": "datasheet"
      },
      {
       "name": "Feeder Tendrils",
       "text": "Each time this model destroys an enemy CHARACTER model, gain 1CP.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 80
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Deathleaper (Epic Hero): Lictor claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Hunter Organism: Deathleaper cannot be your Warlord (except in Vanguard Onslaught)."
    },
    {
     "id": "the_red_terror",
     "name": "The Red Terror",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Character",
      "Great Devourer",
      "Vanguard Invader",
      "Epic Hero",
      "Monster",
      "The Red Terror",
      "Burrower",
      "Mobile"
     ],
     "image": null,
     "baseSize": "100mm",
     "profile": {
      "M": "10\"",
      "T": "8",
      "Sv": "3+",
      "InSv": "—",
      "W": "9",
      "OC": "3",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Gaping maw",
       "range": "Melee",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "0",
       "D": "D3+2",
       "kw": [
        "Extra Attacks",
        "Devastating Wounds",
        "Precision"
       ]
      },
      {
       "name": "Scything talons",
       "range": "Melee",
       "A": "12",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Swallow Whole",
       "text": "Gaping maw attacks against INFANTRY, MOUNTED or BEASTS units turn every successful unmodified wound roll into a critical wound. Each such model the maw destroys heals this model by up to D3+2 wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Subterranean Hunter",
       "text": "End of the Fight phase: if not engaged, you can remove this unit and place it into Strategic Reserves.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Red Terror (Epic Hero): scything talons, gaping maw.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "hive_tyrant",
     "name": "Hive Tyrant",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Character",
      "Psyker",
      "Hive Tyrant",
      "Great Devourer",
      "Synapse"
     ],
     "image": "tyr_hive_tyrant",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "10",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy venom cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Stranglethorn cannon",
       "range": "36\"",
       "A": "D6+1",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Monstrous bonesword and lash whip",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Twin-linked"
       ]
      },
      {
       "name": "Monstrous scything talons",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Onslaught (Aura, Psychic)",
       "text": "Ranged weapons of friendly TYRANIDS units within 6\" have [ASSAULT] and [LETHAL HITS].",
       "kind": "datasheet"
      },
      {
       "name": "Will of the Hive Mind",
       "text": "Once per battle round (one model with this ability per army): when a friendly TYRANIDS unit within 12\" is targeted with a Stratagem, that use costs 1CP less.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 195
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "tyrant_guard"
     ],
     "composition": "1 Hive Tyrant: monstrous bonesword and lash whip, monstrous scything talons.",
     "options": [
      {
       "id": "arm1",
       "type": "choice",
       "label": "Bonesword arm",
       "choices": [
        {
         "id": "bonesword",
         "label": "Monstrous bonesword and lash whip",
         "pts": 0
        },
        {
         "id": "hvc",
         "label": "Heavy venom cannon",
         "pts": 0
        },
        {
         "id": "sc",
         "label": "Stranglethorn cannon",
         "pts": 0
        },
        {
         "id": "mst",
         "label": "Monstrous scything talons",
         "pts": 0
        }
       ]
      },
      {
       "id": "arm2",
       "type": "choice",
       "label": "Scything talons arm",
       "choices": [
        {
         "id": "mst",
         "label": "Monstrous scything talons",
         "pts": 0
        },
        {
         "id": "hvc",
         "label": "Heavy venom cannon",
         "pts": 0
        },
        {
         "id": "sc",
         "label": "Stranglethorn cannon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [
      {
       "forbidAllOf": [
        [
         "arm1",
         "hvc"
        ],
        [
         "arm2",
         "hvc"
        ]
       ],
       "message": "Only one heavy venom cannon."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "sc"
        ],
        [
         "arm2",
         "sc"
        ]
       ],
       "message": "Only one stranglethorn cannon."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "hvc"
        ],
        [
         "arm2",
         "sc"
        ]
       ],
       "message": "It cannot have both a heavy venom cannon and a stranglethorn cannon."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "sc"
        ],
        [
         "arm2",
         "hvc"
        ]
       ],
       "message": "It cannot have both a heavy venom cannon and a stranglethorn cannon."
      }
     ],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "winged_hive_tyrant",
     "name": "Winged Hive Tyrant",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Character",
      "Psyker",
      "Winged Hive Tyrant",
      "Great Devourer",
      "Fly",
      "Synapse",
      "Vanguard Invader",
      "Hive Tyrant"
     ],
     "image": "tyr_winged_hive_tyrant",
     "baseSize": "60mm",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Stranglethorn cannon",
       "range": "36\"",
       "A": "D6+1",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Heavy venom cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Tyrant talons",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Monstrous scything talons",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks"
       ]
      },
      {
       "name": "Monstrous bonesword and lash whip",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Paroxysm (Psychic)",
       "text": "Start of the Fight phase: pick one visible enemy unit within 12\" and roll D6. On a 1 this model takes D3 mortal wounds; on a 2+ that unit's weapons get -1 A until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Will of the Hive Mind",
       "text": "Once per battle round (one model with this ability per army): when a friendly TYRANIDS unit within 12\" is targeted with a Stratagem, that use costs 1CP less.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 185
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Winged Hive Tyrant: monstrous bonesword and lash whip, Tyrant talons.",
     "options": [
      {
       "id": "arm1",
       "type": "choice",
       "label": "Bonesword arm",
       "choices": [
        {
         "id": "bonesword",
         "label": "Monstrous bonesword and lash whip",
         "pts": 0
        },
        {
         "id": "hvc",
         "label": "Heavy venom cannon",
         "pts": 0
        },
        {
         "id": "sc",
         "label": "Stranglethorn cannon",
         "pts": 0
        },
        {
         "id": "mst",
         "label": "Monstrous scything talons",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "neurotyrant",
     "name": "Neurotyrant",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Character",
      "Monster",
      "Fly",
      "Psyker",
      "Great Devourer",
      "Neurotyrant",
      "Synapse"
     ],
     "image": "tyr_neurotyrant",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "8",
      "Sv": "4+",
      "InSv": "4+",
      "W": "9",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Psychic scream",
       "range": "18\"",
       "A": "2D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "Psychic",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Neurotyrant claws and lashes",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Node Lash (Psychic)",
       "text": "While this model leads a unit, models in that unit get +1 to hit, and +1 to wound as well against battle-shocked targets.",
       "kind": "datasheet"
      },
      {
       "name": "Psychic Terror (Psychic)",
       "text": "If a model with this ability is on the battlefield when you unleash the Shadow in the Warp, the enemy battle-shock tests it causes get an extra -1.",
       "kind": "datasheet"
      },
      {
       "name": "Neuroloids",
       "text": "Your Command phase: pick up to two friendly TYRANIDS units within 18\" of this model's unit. Until your next Command phase they always count as within your army's Synapse Range.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "neurogaunts",
      "tyrant_guard",
      "zoanthropes"
     ],
     "composition": "1 Neurotyrant: psychic scream, claws and lashes.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tervigon",
     "name": "Tervigon",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Character",
      "Monster",
      "Psyker",
      "Great Devourer",
      "Tervigon",
      "Synapse"
     ],
     "image": "tyr_tervigon",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "11",
      "Sv": "2+",
      "InSv": "—",
      "W": "16",
      "OC": "5",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Stinger salvoes",
       "range": "24\"",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Massive scything talons - strike",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D6",
       "kw": []
      },
      {
       "name": "Massive scything talons - sweep",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Massive crushing claws",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Spawn Termagants",
       "text": "Your Command phase: pick one friendly TERMAGANTS unit within 6\" and return up to D3+3 destroyed models to it (each unit once per phase).",
       "kind": "datasheet"
      },
      {
       "name": "Brood Progenitor (Aura, Psychic)",
       "text": "Ranged weapons of friendly TERMAGANTS units within 6\" have [LETHAL HITS].",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 150
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Tervigon: stinger salvoes, massive scything talons.",
     "options": [
      {
       "id": "claws",
       "type": "choice",
       "label": "Melee weapon",
       "choices": [
        {
         "id": "talons",
         "label": "Massive scything talons",
         "pts": 0
        },
        {
         "id": "claws",
         "label": "Massive crushing claws",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "broodlord",
     "name": "Broodlord",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Broodlord",
      "Great Devourer",
      "Vanguard Invader",
      "Synapse"
     ],
     "image": "tyr_broodlord",
     "baseSize": "75x42mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "4+",
      "W": "6",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Broodlord Claws and Talons",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds",
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Leader",
      "Scouts 8\""
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Vicious Insight",
       "text": "While this model leads a unit, weapons in that unit have [DEVASTATING WOUNDS].",
       "kind": "datasheet"
      },
      {
       "name": "Hypnotic Gaze (Psychic)",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this model; until the end of the phase its attacks get -1 to hit.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 80
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "genestealers"
     ],
     "composition": "1 Broodlord: claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "parasite_of_mortrex",
     "name": "Parasite of Mortrex",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Parasite of Mortrex",
      "Character",
      "Fly",
      "Great Devourer",
      "Infantry",
      "Vanguard Invader",
      "Synapse"
     ],
     "image": "tyr_parasite_of_mortrex",
     "baseSize": "40mm",
     "profile": {
      "M": "12\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "5",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Barbed ovipositor",
       "range": "Melee",
       "A": "1",
       "skill": "2+",
       "S": "3",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Anti-infantry 3+",
        "Extra Attacks"
       ]
      },
      {
       "name": "Clawed limbs",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Parasitic Infection",
       "text": "Each time this model's barbed ovipositor destroys an INFANTRY model, after its attacks you can add a new Ripper Swarms unit of D3 models within 3\" of it. It can be set up engaged with the destroyed model's unit (but no other enemy unit).",
       "kind": "datasheet"
      },
      {
       "name": "It Itches!",
       "text": "Start of the Fight phase: one enemy unit engaged with this model must take a battle-shock test.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Parasite of Mortrex: barbed ovipositor, clawed limbs.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tyranid_prime_with_lash_whip",
     "name": "Tyranid Prime with Lash Whip",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Character",
      "Great Devourer",
      "Synapse",
      "Tyranid Prime with Lash Whip"
     ],
     "image": "tyr_tyranid_prime_with_lash_whip",
     "baseSize": "50mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "—",
      "W": "6",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Rending claw",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Lash whip",
       "range": "Melee",
       "A": "8",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Extra Attacks"
       ]
      },
      {
       "name": "Scything talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Alpha Warrior",
       "text": "Weapons of models in this model's unit have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Aggressive Leader-beast",
       "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model in this unit was destroyed, the unit can surge up to D6\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 75
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "hormagaunts",
      "termagants",
      "tyranid_warriors_melee",
      "tyranid_warriors_ranged"
     ],
     "composition": "1 Tyranid Prime: rending claw, lash whip, scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "winged_tyranid_prime",
     "name": "Winged Tyranid Prime",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Winged Tyranid Prime",
      "Character",
      "Infantry",
      "Fly",
      "Great Devourer",
      "Synapse",
      "Vanguard Invader"
     ],
     "image": "tyr_winged_tyranid_prime",
     "baseSize": "50mm",
     "profile": {
      "M": "12\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "6",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Prime talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Alpha Warrior",
       "text": "While this model leads a unit, weapons in that unit have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Death Blow",
       "text": "If this model is destroyed by a melee attack before it has fought this phase, roll D6: on a 4+ it fights after the attacking unit finishes, then is removed.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "gargoyles",
      "tyranid_warriors_melee",
      "tyranid_warriors_ranged"
     ],
     "composition": "1 Winged Tyranid Prime: Prime talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "hyperadapted_raveners",
     "name": "Hyperadapted Raveners",
     "role": "character",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Vanguard Invader",
      "Burrowers",
      "Hyperadapted Raveners",
      "Character",
      "Synapse"
     ],
     "image": "tyr_hyperadapted_raveners",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "3",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Venom bolt",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Assault",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Prime claws and talons",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-monster 5+",
        "Anti-vehicle 5+",
        "Twin-linked"
       ]
      },
      {
       "name": "Ravener heavy claws and talons",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-monster 5+",
        "Anti-vehicle 5+",
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp (Ravener Prime only)"
     ],
     "abilities": [
      {
       "name": "Alpha Invader",
       "text": "Weapons of models in this unit have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Hypersensory Array",
       "text": "Once per battle round you can use Rapid Ingress or Heroic Intervention on this unit even if that Stratagem was already used this phase; that use costs 1CP less and does not stop other units using it.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 165,
       "ptsLater": 175
      }
     ],
     "stepFrom": 3,
     "leaderOf": [
      "raveners"
     ],
     "composition": "1 Ravener Prime (CHARACTER, SYNAPSE; Prime claws and talons) and 4 Raveners (heavy claws and talons; one also has a venom bolt).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Ravener Prime",
      "W": "6",
      "Ld": "7+"
     }
    },
    {
     "id": "termagants",
     "name": "Termagants",
     "role": "battleline",
     "faction": "Tyranids",
     "keywords": [
      "Battleline",
      "Infantry",
      "Great Devourer",
      "Endless Multitude",
      "Termagants"
     ],
     "image": "tyr_termagants",
     "baseSize": "28.5mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "5+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Fleshborer",
       "range": "18\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Termagant spinefist",
       "range": "12\"",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault",
        "Pistol",
        "Twin-linked"
       ]
      },
      {
       "name": "Termagant devourer",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Shardlauncher",
       "range": "18\"",
       "A": "D3",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast",
        "Heavy"
       ]
      },
      {
       "name": "Spike rifle",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Heavy"
       ]
      },
      {
       "name": "Strangleweb",
       "range": "18\"",
       "A": "D6",
       "skill": "—",
       "S": "2",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault",
        "Devastating Wounds",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Skulking Horrors",
       "text": "In your opponent's Movement phase, when an enemy unit ends a move within 8\", this unit (if not engaged) can make a Normal move of up to D6\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 55
      },
      {
       "models": 20,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "10 or 20 Termagants: fleshborer, chitinous claws and teeth.",
     "options": [
      {
       "id": "devourer",
       "type": "count",
       "label": "Termagant devourer",
       "slots": [
        "tg"
       ],
       "max": "slot"
      },
      {
       "id": "spinefist",
       "type": "count",
       "label": "Termagant spinefists",
       "slots": [
        "tg"
       ],
       "max": "slot"
      },
      {
       "id": "shard",
       "type": "count",
       "label": "Shardlauncher",
       "slots": [
        "tg"
       ],
       "per": 10,
       "n": 1
      },
      {
       "id": "spike",
       "type": "count",
       "label": "Spike rifle",
       "slots": [
        "tg"
       ],
       "per": 10,
       "n": 1
      },
      {
       "id": "web",
       "type": "count",
       "label": "Strangleweb",
       "slots": [
        "tg"
       ],
       "per": 10,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "tg",
       "label": "Ranged weapon",
       "default": "Fleshborer",
       "size": {
        "models": 1
       },
       "fixedNote": "All also have chitinous claws and teeth."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "hormagaunts",
     "name": "Hormagaunts",
     "role": "battleline",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Battleline",
      "Great Devourer",
      "Endless Multitude",
      "Hormagaunts"
     ],
     "image": "tyr_hormagaunts",
     "baseSize": "28.5mm",
     "profile": {
      "M": "10\"",
      "T": "3",
      "Sv": "5+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Hormagaunt talons",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Bounding Leap",
       "text": "This unit can declare a charge in a turn in which it advanced.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 70
      },
      {
       "models": 20,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "10 or 20 Hormagaunts: Hormagaunt talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "gargoyles",
     "name": "Gargoyles",
     "role": "battleline",
     "faction": "Tyranids",
     "keywords": [
      "Battleline",
      "Infantry",
      "Fly",
      "Gargoyles",
      "Great Devourer",
      "Endless Multitude",
      "Vanguard Invader"
     ],
     "image": "tyr_gargoyles",
     "baseSize": "32mm (flying base)",
     "profile": {
      "M": "12\"",
      "T": "3",
      "Sv": "6+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Fleshborer",
       "range": "18\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      }
     ],
     "melee": [
      {
       "name": "Blinding venom",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Winged Swarm",
       "text": "Your Shooting phase, after this unit shoots: if not engaged it can make a Normal move of up to 6\", but then it cannot declare a charge this turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 75
      },
      {
       "models": 20,
       "pts": 150
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "10 or 20 Gargoyles: fleshborer, blinding venom.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tyrannocyte",
     "name": "Tyrannocyte",
     "role": "transport",
     "faction": "Tyranids",
     "keywords": [
      "Dedicated Transport",
      "Transport",
      "Monster",
      "Fly",
      "Great Devourer",
      "Tyrannocyte",
      "Vanguard Invader",
      "Frame"
     ],
     "image": "tyr_tyrannocyte",
     "baseSize": "100mm",
     "profile": {
      "M": "8\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "10",
      "OC": "2",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Tyrannocyte Bio-weapons",
       "range": "24\"",
       "A": "5",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Flensing Whips",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Aerial Seeding",
       "text": "Must start the battle in Reserves; it and its passengers do not count toward Reserves limits. It can arrive in the Reinforcements step of your 1st, 2nd or 3rd Movement phase whatever the mission says. Passengers disembark at once, more than 8\" from all enemy models. No unit can embark afterwards.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 80,
       "ptsLater": 90
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Tyrannocyte: bio-weapons, flensing whips.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 20 TYRANIDS INFANTRY models, or 1 TYRANIDS MONSTER with 12 or fewer wounds. Each INFANTRY model with more than 1 wound takes the space of 3."
    },
    {
     "id": "spore_mines",
     "name": "Spore Mines",
     "role": "beast",
     "faction": "Tyranids",
     "keywords": [
      "Spore Mines",
      "Beast",
      "Fly",
      "Great Devourer"
     ],
     "image": "tyr_spore_mines",
     "baseSize": "25mm",
     "profile": {
      "M": "4\"",
      "T": "1",
      "Sv": "7+",
      "InSv": "—",
      "W": "1",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Bio-minefield",
       "text": "Enemy units cannot start or end an Advance move within 6\" of this unit.",
       "kind": "datasheet"
      },
      {
       "name": "Floating Death",
       "text": "Whenever this unit or an enemy unit ends a move, each model in this unit within 3\" of an enemy unit is destroyed and you roll D6 against one of those enemies: 2-5 inflicts 1 mortal wound, 6 inflicts D3 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 55
      },
      {
       "models": 6,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Spore Mines (no weapons).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "mucolid_spores",
     "name": "Mucolid Spores",
     "role": "beast",
     "faction": "Tyranids",
     "keywords": [
      "Mucolid Spores",
      "Beast",
      "Fly",
      "Great Devourer"
     ],
     "image": "tyr_mucolid_spores",
     "baseSize": "40mm",
     "profile": {
      "M": "4\"",
      "T": "4",
      "Sv": "7+",
      "InSv": "—",
      "W": "3",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Bio-minefield",
       "text": "Enemy units cannot start or end an Advance move within 6\" of this unit.",
       "kind": "datasheet"
      },
      {
       "name": "Floating Death",
       "text": "Whenever this unit or an enemy unit ends a move, each model in this unit within 3\" of an enemy unit is destroyed and you roll D6 against one of those enemies: 2-5 inflicts D3 mortal wounds, 6 inflicts D6 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 30
      },
      {
       "models": 2,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 or 2 Mucolid Spores (no weapons).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "barbgaunts",
     "name": "Barbgaunts",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Barbgaunts",
      "Infantry",
      "Great Devourer"
     ],
     "image": "tyr_barbgaunts",
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "4+",
      "InSv": "—",
      "W": "2",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Barblauncher",
       "range": "24\"",
       "A": "D6",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast",
        "Heavy"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Disruption Bombardment",
       "text": "Your Shooting phase, after this unit shoots: one enemy INFANTRY unit it hit is disrupted until the end of your opponent's next turn: -2\" Move and -2 to Advance and charge rolls.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 50
      },
      {
       "models": 10,
       "pts": 100
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "5 or 10 Barbgaunts: barblauncher, chitinous claws and teeth.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "biovores",
     "name": "Biovores",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Biovores"
     ],
     "image": "tyr_biovores",
     "baseSize": "80mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "5",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Spore mine launcher",
       "range": "48\"",
       "A": "D3",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Devastating Wounds",
        "Heavy",
        "Indirect Fire"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitin-barbed limbs",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Seed Spore Mines",
       "text": "Once per turn, when selected to shoot, one unit with this ability can skip its ranged attacks to add a new SPORE MINES unit (1 model per Biovore) wholly within 48\" and more than 8\" horizontally from all enemy units.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      },
      {
       "models": 2,
       "pts": 100
      },
      {
       "models": 3,
       "pts": 140
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1-3 Biovores: Spore Mine launcher, chitin-barbed limbs.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "genestealers",
     "name": "Genestealers",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Genestealers",
      "Vanguard Invader"
     ],
     "image": "tyr_genestealers",
     "baseSize": "32mm",
     "profile": {
      "M": "8\"",
      "T": "4",
      "Sv": "5+",
      "InSv": "5+",
      "W": "2",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Genestealers claws and talons",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Scouts 8\""
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Vanguard Predator",
       "text": "Re-roll hit rolls of 1. Against a target within range of an objective marker, also re-roll wound rolls of 1.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 75,
       "ptsLater": 85
      },
      {
       "models": 10,
       "pts": 140,
       "ptsLater": 150
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "5 or 10 Genestealers: claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "hive_guard",
     "name": "Hive Guard",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Hive Guard"
     ],
     "image": "tyr_hive_guard",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "7",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Shockcannon",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Anti-vehicle 2+"
       ]
      },
      {
       "name": "Impaler cannon",
       "range": "36\"",
       "A": "4",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Heavy",
        "Indirect Fire"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Defensive Stance",
       "text": "When this unit uses Fire Overwatch it hits on unmodified 5+, or 4+ while it is within range of an objective marker.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 80,
       "ptsLater": 90
      },
      {
       "models": 6,
       "pts": 160,
       "ptsLater": 170
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "3 or 6 Hive Guard: shockcannon, chitinous claws and teeth.",
     "options": [
      {
       "id": "impaler",
       "type": "count",
       "label": "Impaler cannon",
       "slots": [
        "hg"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "hg",
       "label": "Gun",
       "default": "Shockcannon",
       "size": {
        "models": 1
       },
       "fixedNote": "All also have chitinous claws and teeth."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "lictor",
     "name": "Lictor",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Lictor",
      "Vanguard Invader"
     ],
     "image": "tyr_lictor",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "6",
      "Sv": "4+",
      "InSv": "—",
      "W": "6",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Lictor claws and talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Fights First",
      "Infiltrators",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Pheromone Trail",
       "text": "Once per battle round you can use Rapid Ingress on one model with this ability for 0CP.",
       "kind": "datasheet"
      },
      {
       "name": "Feeder Tendrils",
       "text": "Each time this model destroys an enemy CHARACTER model, gain 1CP.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Lictor: claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "neurogaunts",
     "name": "Neurogaunts",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Neurogaunts",
      "Endless Multitude"
     ],
     "image": "tyr_neurogaunts",
     "baseSize": "25mm (Nodebeast 28mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "6+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Neurocytes",
       "text": "While within Synapse Range of a friendly TYRANIDS unit other than NEUROGAUNTS, this unit has the SYNAPSE keyword.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 11,
       "pts": 45
      },
      {
       "models": 22,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "11 models: 1 Nodebeast and 10 Neurogaunts. 22 models: 2 Nodebeasts and 20 Neurogaunts. Chitinous claws and teeth.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "neurolictor",
     "name": "Neurolictor",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Neurolictor",
      "Vanguard Invader",
      "Synapse"
     ],
     "image": "tyr_neurolictor",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "4+",
      "W": "7",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Piercing claws and talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Infiltrators",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Feeder Tendrils",
       "text": "Each time this model destroys an enemy CHARACTER model, gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "Neural Disruption",
       "text": "Your Command phase: one enemy unit within 12\" must take a battle-shock test.",
       "kind": "datasheet"
      },
      {
       "name": "Psychological Saboteur (Aura)",
       "text": "Battle-shocked enemy units within 12\" get -1 to hit, and friendly TYRANIDS attacks against them get +1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 80,
       "ptsLater": 90
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Neurolictor: piercing claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "pyrovores",
     "name": "Pyrovores",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Pyrovores",
      "Infantry",
      "Great Devourer",
      "Harvester"
     ],
     "image": "tyr_pyrovores",
     "baseSize": "80mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "5",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Flamespurt",
       "range": "12\"",
       "A": "D6+1",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent",
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitin-barbed limbs",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Burning Spray",
       "text": "Your Shooting phase, after this unit shoots: one enemy unit it hit cannot have the benefit of cover until the end of the phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 40,
       "ptsLater": 50
      },
      {
       "models": 2,
       "pts": 70,
       "ptsLater": 80
      },
      {
       "models": 3,
       "pts": 100,
       "ptsLater": 110
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1-3 Pyrovores: flamespurt, chitin-barbed limbs.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "raveners",
     "name": "Raveners",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Raveners",
      "Vanguard Invader",
      "Burrowers"
     ],
     "image": "tyr_raveners",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "3",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Ravener claws and talons",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Death From Below",
       "text": "End of your opponent's turn: if not engaged, you can remove this unit and place it into Strategic Reserves.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 125,
       "ptsLater": 135
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "5 Raveners: claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tyranid_warriors_melee",
     "name": "Tyranid Warriors with Melee Bio-weapons",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Tyranid Warriors with Melee Bio-weapons",
      "Great Devourer",
      "Synapse"
     ],
     "image": "tyr_tyranid_warriors_with_melee_bio_weapons",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "3",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Tyranid Warrior claws and talons",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Adaptive Instincts",
       "text": "(Once per turn) In the Fight phase, when this unit is selected to fight or is targeted by an enemy unit, choose one: its melee attacks get +1 S, or the unit gets +1 T.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 75
      },
      {
       "models": 6,
       "pts": 150
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Tyranid Prime and 2 or 5 Tyranid Warriors: claws and talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tyranid_warriors_ranged",
     "name": "Tyranid Warriors with Ranged Bio-weapons",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Tyranid Warriors with Ranged Bio-weapons",
      "Synapse",
      "Great Devourer"
     ],
     "image": "tyr_tyranid_warriors_with_ranged_bio_weapons",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "3",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Deathspitter",
       "range": "24\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      },
      {
       "name": "Spinefists",
       "range": "12\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault",
        "Pistol",
        "Twin-linked"
       ]
      },
      {
       "name": "Venom cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Barbed strangler",
       "range": "36\"",
       "A": "D6+1",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Devourer",
       "range": "18\"",
       "A": "5",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Tyranid Warrior claws and talons",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Adaptable Predators",
       "text": "This unit can shoot and declare a charge in a turn in which it fell back.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 60
      },
      {
       "models": 6,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Tyranid Prime and 2 or 5 Tyranid Warriors: devourer, claws and talons.",
     "options": [
      {
       "id": "deathspitter",
       "type": "count",
       "label": "Deathspitter",
       "slots": [
        "rw"
       ],
       "max": "slot"
      },
      {
       "id": "spinefists",
       "type": "count",
       "label": "Spinefists",
       "slots": [
        "rw"
       ],
       "max": "slot"
      },
      {
       "id": "strangler",
       "type": "count",
       "label": "Barbed strangler",
       "slots": [
        "rw"
       ],
       "per": 3,
       "n": 1
      },
      {
       "id": "venom",
       "type": "count",
       "label": "Venom cannon",
       "slots": [
        "rw"
       ],
       "per": 3,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "rw",
       "label": "Ranged weapon",
       "default": "Devourer",
       "size": {
        "models": 1
       },
       "fixedNote": "All also have claws and talons."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "tyrant_guard",
     "name": "Tyrant Guard",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Tyrant Guard"
     ],
     "image": "tyr_tyrant_guard",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "8",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Scything talons and rending claws",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      },
      {
       "name": "Bone cleaver, lash whip and rending claws",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Crushing claws and rending claws",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Guardian Organism",
       "text": "While a CHARACTER leads this unit, that CHARACTER has Feel No Pain 5+.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 80
      },
      {
       "models": 6,
       "pts": 170
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Tyrant Guard: scything talons and rending claws.",
     "options": [
      {
       "id": "cleaver",
       "type": "count",
       "label": "Bone cleaver, lash whip and rending claws",
       "slots": [
        "tgm"
       ],
       "max": "slot"
      },
      {
       "id": "crushing",
       "type": "count",
       "label": "Crushing claws and rending claws",
       "slots": [
        "tgm"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "tgm",
       "label": "Melee weapons",
       "default": "Scything talons and rending claws",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "venomthropes",
     "name": "Venomthropes",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Fly",
      "Venomthropes",
      "Great Devourer"
     ],
     "image": "tyr_venomthropes",
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "—",
      "W": "3",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Toxic lashes",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 2+"
       ]
      }
     ],
     "coreAbilities": [
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Foul Spores (Aura)",
       "text": "Friendly TYRANIDS units within 6\" of this unit have Stealth.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 55
      },
      {
       "models": 6,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Venomthropes: toxic lashes.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "von_ryans_leapers",
     "name": "Von Ryan's Leapers",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Great Devourer",
      "Von Ryan's Leapers",
      "Vanguard Invader"
     ],
     "image": "tyr_von_ryan_s_leapers",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "6+",
      "W": "3",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Leaper's talons",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Fights First",
      "Infiltrators",
      "Stealth"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Pouncing Leap",
       "text": "You can use Heroic Intervention on this unit even if that Stratagem was already used this phase; that use costs 1CP less and does not stop other units using it.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 55
      },
      {
       "models": 6,
       "pts": 105
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Von Ryan's Leapers: Leaper's talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "zoanthropes",
     "name": "Zoanthropes",
     "role": "infantry",
     "faction": "Tyranids",
     "keywords": [
      "Infantry",
      "Fly",
      "Psyker",
      "Great Devourer",
      "Zoanthropes",
      "Synapse"
     ],
     "image": "tyr_zoanthropes",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "5",
      "Sv": "5+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Warp blast - witchfire",
       "range": "24\"",
       "A": "D3",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Blast",
        "Psychic"
       ]
      },
      {
       "name": "Warp blast - focused witchfire",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Lethal Hits",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "2",
       "skill": "5+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Spirit Leech (Aura, Psychic)",
       "text": "If this unit includes a Neurothrope: each time an enemy unit within 6\" fails a battle-shock test, it takes D3 mortal wounds and one model in this unit regains up to D3 lost wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Warp Field (Aura, Psychic)",
       "text": "Models in friendly TYRANIDS units within 6\" have a 6+ invulnerable save.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 90
      },
      {
       "models": 6,
       "pts": 190
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Neurothrope and 2 or 5 Zoanthropes: warp blast, chitinous claws and teeth.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "carnifexes",
     "name": "Carnifexes",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Carnifexes"
     ],
     "image": "tyr_carnifexes",
     "baseSize": "105x70mm",
     "profile": {
      "M": "8\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "—",
      "W": "8",
      "OC": "3",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bio-plasma",
       "range": "12\"",
       "A": "D3",
       "skill": "4+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Assault",
        "Blast"
       ]
      },
      {
       "name": "Spine banks",
       "range": "6\"",
       "A": "5",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Deathspitters with slimer maggots",
       "range": "24\"",
       "A": "6",
       "skill": "4+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Devourers with brainleech worms",
       "range": "18\"",
       "A": "12",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Heavy venom cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Stranglethorn cannon",
       "range": "36\"",
       "A": "D6+1",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Carnifex scything talons",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Carnifex crushing claws",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Carnifex extra scything talons",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Blistering Assault",
       "text": "In your opponent's Shooting phase, after an enemy unit shoots: if a model in this unit lost a wound to those attacks, the unit can surge up to D6+2\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 90
      },
      {
       "models": 2,
       "pts": 180
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 or 2 Carnifexes: scything talons, extra scything talons, chitinous claws and teeth.",
     "options": [
      {
       "id": "x_spit",
       "type": "count",
       "label": "Deathspitters with slimer maggots",
       "slots": [
        "extra"
       ],
       "max": "slot"
      },
      {
       "id": "x_dev",
       "type": "count",
       "label": "Devourers with brainleech worms",
       "slots": [
        "extra"
       ],
       "max": "slot"
      },
      {
       "id": "x_hvc",
       "type": "count",
       "label": "Heavy venom cannon",
       "slots": [
        "extra"
       ],
       "max": "slot"
      },
      {
       "id": "x_sc",
       "type": "count",
       "label": "Stranglethorn cannon",
       "slots": [
        "extra"
       ],
       "max": "slot"
      },
      {
       "id": "x_claws",
       "type": "count",
       "label": "Carnifex crushing claws",
       "slots": [
        "extra"
       ],
       "max": "slot"
      },
      {
       "id": "m_spit",
       "type": "count",
       "label": "Deathspitters with slimer maggots",
       "slots": [
        "main"
       ],
       "max": "slot"
      },
      {
       "id": "m_dev",
       "type": "count",
       "label": "Devourers with brainleech worms",
       "slots": [
        "main"
       ],
       "max": "slot"
      },
      {
       "id": "m_claws",
       "type": "count",
       "label": "Carnifex crushing claws",
       "slots": [
        "main"
       ],
       "max": "slot"
      },
      {
       "id": "bioplasma",
       "type": "count",
       "label": "Bio-plasma",
       "max": "models"
      },
      {
       "id": "spines",
       "type": "count",
       "label": "Spine banks",
       "max": "models"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "extra",
       "label": "Extra scything talons arm",
       "default": "Carnifex extra scything talons",
       "size": {
        "models": 1
       }
      },
      {
       "id": "main",
       "label": "Scything talons arm",
       "default": "Carnifex scything talons",
       "size": {
        "models": 1
       },
       "fixedNote": "All also have chitinous claws and teeth."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "exocrine",
     "name": "Exocrine",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Exocrine"
     ],
     "image": "tyr_exocrine",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "4",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Bio-plasmic cannon",
       "range": "36\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "9",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Heavy"
       ]
      }
     ],
     "melee": [
      {
       "name": "Powerful limbs",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "7",
       "AP": "0",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Symbiotic Targeting",
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit it hit. Until the end of the phase, friendly TYRANIDS models re-roll hit rolls of 1 against it.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 135,
       "ptsLater": 145
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Exocrine: bio-plasmic cannon, powerful limbs.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "harpy",
     "name": "Harpy",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Harpy",
      "Monster",
      "Fly",
      "Aircraft",
      "Great Devourer",
      "Vanguard Invader"
     ],
     "image": "tyr_harpy",
     "baseSize": "120x92mm (flying base)",
     "profile": {
      "M": "-",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "12",
      "OC": "-",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Twin stranglethorn cannon",
       "range": "36\"",
       "A": "D6+1",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Twin-linked"
       ]
      },
      {
       "name": "Twin heavy venom cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast",
        "Twin-linked"
       ]
      },
      {
       "name": "Stinger salvoes",
       "range": "24\"",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Scything wings",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Spore Mine Cysts",
       "text": "End of your opponent's Fight phase, choose one: roll six D6 against one visible enemy unit within 24\" (not Lone Operative), each 3+ inflicting 1 mortal wound; or add a new SPORE MINES unit of D3 models within 6\" of this model and more than 8\" horizontally from all enemies (only one model per turn can choose this).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 185
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Harpy: stinger salvoes, twin stranglethorn cannon, scything wings.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "sc",
         "label": "Twin stranglethorn cannon",
         "pts": 0
        },
        {
         "id": "hvc",
         "label": "Twin heavy venom cannon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "haruspex",
     "name": "Haruspex",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Haruspex",
      "Harvester"
     ],
     "image": "tyr_haruspex",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "4",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Grasping tongue",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "D6+1",
       "kw": [
        "Precision"
       ]
      }
     ],
     "melee": [
      {
       "name": "Shovelling claws",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "14",
       "AP": "-2",
       "D": "D6+1",
       "kw": [
        "Extra Attacks"
       ]
      },
      {
       "name": "Ravenous maw",
       "range": "Melee",
       "A": "14",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Grisly Spectacle",
       "text": "When this model fights, if its attacks destroyed one or more enemy units, every enemy unit within 6\" of it must take a battle-shock test.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 125,
       "ptsLater": 135
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Haruspex: grasping tongue, ravenous maw, shovelling claws.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "hive_crone",
     "name": "Hive Crone",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Aircraft",
      "Monster",
      "Fly",
      "Great Devourer",
      "Hive Crone",
      "Vanguard Invader"
     ],
     "image": "tyr_hive_crone",
     "baseSize": "120x92mm (flying base)",
     "profile": {
      "M": "-",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "12",
      "OC": "-",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Drool cannon",
       "range": "12\"",
       "A": "2D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Torrent"
       ]
      },
      {
       "name": "Tentaclids",
       "range": "36\"",
       "A": "4",
       "skill": "3+",
       "S": "7",
       "AP": "0",
       "D": "2",
       "kw": [
        "Anti-vehicle 4+",
        "Devastating Wounds"
       ]
      },
      {
       "name": "Stinger salvoes",
       "range": "24\"",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Thorax spur",
       "range": "Melee",
       "A": "1",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "Anti-fly 2+",
        "Extra Attacks"
       ]
      },
      {
       "name": "Scything wings",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Airborne Predator",
       "text": "+1 to hit for ranged attacks against units that can FLY.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 170
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Hive Crone: drool cannon, stinger salvoes, tentaclids, scything wings, thorax spur.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "maleceptor",
     "name": "Maleceptor",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Psyker",
      "Great Devourer",
      "Maleceptor",
      "Synapse"
     ],
     "image": "tyr_maleceptor",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "4+",
      "W": "14",
      "OC": "4",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Psychic overload",
       "range": "18\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Massive scything talons - strike",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Massive scything talons - sweep",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Encephalic Diffusion (Aura, Psychic)",
       "text": "Enemy units within 6\" get -1 to hit; if they are below half strength, also -1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 180,
       "ptsLater": 190
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Maleceptor: psychic overload, massive scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "mawloc",
     "name": "Mawloc",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Mawloc",
      "Monster",
      "Great Devourer",
      "Vanguard Invader"
     ],
     "image": "tyr_mawloc",
     "baseSize": "120x92mm",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "4",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [],
     "melee": [
      {
       "name": "Distendible jaw",
       "range": "Melee",
       "A": "1",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "3",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Extra Attacks"
       ]
      },
      {
       "name": "Mawloc scything talons",
       "range": "Melee",
       "A": "16",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Terror from the Deep",
       "text": "When this model is set up by Deep Strike, roll D6 for each enemy unit within 12\": on 2-4 it takes D3 mortal wounds; on 5+ it takes 3 mortal wounds and must take a battle-shock test.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 130
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Mawloc: distensible jaw, scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "norn_assimilator",
     "name": "Norn Assimilator",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Synapse",
      "Norn Assimilator",
      "Harvester"
     ],
     "image": "tyr_norn_assimilator",
     "baseSize": "100mm",
     "profile": {
      "M": "10\"",
      "T": "11",
      "Sv": "2+",
      "InSv": "—",
      "W": "16",
      "OC": "5",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Toxinjecter Harpoon",
       "range": "12\"",
       "A": "2",
       "skill": "2+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Harpooned"
       ]
      }
     ],
     "melee": [
      {
       "name": "Monstrous scything talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Toxinjecter Harpoon",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Harpoon Barbs",
       "text": "Once per turn, when an enemy unit engaged with this model is selected to fall back, roll D6: on a 2+ it takes D6 mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Singular Purpose",
       "text": "Start of the first battle round, choose one: an enemy unit (this model can re-roll hit and wound rolls against it for the rest of the battle), or an objective marker (while within its range, this model has Feel No Pain 5+ and OC 15).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 250,
       "ptsLater": 270
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Norn Assimilator: toxinjector harpoon, monstrous scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "norn_emissary",
     "name": "Norn Emissary",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Psyker",
      "Great Devourer",
      "Synapse",
      "Norn Emissary"
     ],
     "image": "tyr_norn_emissary",
     "baseSize": "100mm",
     "profile": {
      "M": "10\"",
      "T": "11",
      "Sv": "2+",
      "InSv": "4+",
      "W": "16",
      "OC": "5",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Psychic tendril - neuroparasite",
       "range": "18\"",
       "A": "2",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Precision",
        "Psychic"
       ]
      },
      {
       "name": "Psychic tendril - neurolance",
       "range": "18\"",
       "A": "2",
       "skill": "2+",
       "S": "12",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "Melta 2",
        "Psychic"
       ]
      },
      {
       "name": "Psychic tendril - neuroblast",
       "range": "18\"",
       "A": "2D6",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Blast",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Monstrous rending claws",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks"
       ]
      },
      {
       "name": "Monstrous scything talons",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Synapse",
      "Shadow in the Warp"
     ],
     "abilities": [
      {
       "name": "Singular Purpose",
       "text": "Start of the first battle round, choose one: an enemy unit (this model can re-roll hit and wound rolls against it for the rest of the battle), or an objective marker (while within its range, this model has Feel No Pain 5+ and OC 15).",
       "kind": "datasheet"
      },
      {
       "name": "Unnatural Resilience",
       "text": "This model has Feel No Pain 4+ against mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 250,
       "ptsLater": 270
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Norn Emissary: psychic tendril, monstrous scything talons, monstrous rending claws.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "psychophage",
     "name": "Psychophage",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Psychophage",
      "Harvester",
      "Smoke"
     ],
     "image": "tyr_psychophage",
     "baseSize": "120x92mm",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "10",
      "OC": "3",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Psychoclastic torrent",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Talons and betentacled maw",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-psyker 4+",
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Bio-stimulus",
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit it hit. Until the end of the turn, melee attacks by friendly TYRANIDS units against it get +1 AP (each enemy unit once per turn).",
       "kind": "datasheet"
      },
      {
       "name": "Feeding Frenzy",
       "text": "Melee attacks against a unit below its Starting Strength get +1 to hit; also +1 to wound if it is below half strength.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Psychophage: psychoclastic torrent, talons and betentacled maw.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "screamer_killer",
     "name": "Screamer-Killer",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Screamer-killer"
     ],
     "image": "tyr_screamer_killer",
     "baseSize": "90mm",
     "profile": {
      "M": "8\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "—",
      "W": "10",
      "OC": "3",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bio-plasmic scream",
       "range": "18\"",
       "A": "D6+3",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Assault",
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Screamer-killer talons",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Death Scream",
       "text": "Your Shooting phase, after this model shoots: one unit it hit takes a battle-shock test at -1.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 125,
       "ptsLater": 135
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Screamer-Killer: bio-plasmic scream, talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "sporocyst",
     "name": "Sporocyst",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Sporocyst",
      "Great Devourer"
     ],
     "image": "tyr_sporocyst",
     "baseSize": "Use model",
     "profile": {
      "M": "-",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "10",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Sporocyst bio-weapon",
       "range": "24\"",
       "A": "10",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Flensing whips",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Seed Mucolids",
       "text": "Once per turn, when selected to shoot, one unit with this ability can skip its ranged attacks to add a new 1-model MUCOLID SPORES unit wholly within 18\" and more than 8\" horizontally from all enemy units.",
       "kind": "datasheet"
      },
      {
       "name": "Hive Defences",
       "text": "You can use Fire Overwatch on this model for 0CP, even if another unit already used it this turn (this model once per turn).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 145
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Sporocyst: bio-weapons, flensing whips.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "toxicrene",
     "name": "Toxicrene",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Toxicrene",
      "Frame"
     ],
     "image": "tyr_toxicrene",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "4",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Massive toxic lashes",
       "range": "9\"",
       "A": "2D6",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Anti-infantry 2+"
       ]
      }
     ],
     "melee": [
      {
       "name": "Massive toxic lashes",
       "range": "Melee",
       "A": "12",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Anti-infantry 2+"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Grasping Tendrils",
       "text": "When an engaged enemy unit (not TITANIC) is selected to fall back from units with this ability, roll D6: on a 3+ it must remain stationary instead.",
       "kind": "datasheet"
      },
      {
       "name": "Hypertoxic Miasma (Aura)",
       "text": "End of your Movement phase: roll D6 for each enemy unit within 6\". 2-3: 1 mortal wound; 4-5: D3 mortal wounds; 6: D6 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Toxicrene: massive toxic lashes.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "trygon",
     "name": "Trygon",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Trygon",
      "Monster",
      "Great Devourer",
      "Vanguard Invader"
     ],
     "image": "tyr_trygon",
     "baseSize": "120x92mm",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "4",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Bio-electric pulse",
       "range": "12\"",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Sustained Hits 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Trygon scything talons",
       "range": "Melee",
       "A": "12",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Subterranean Tunnels",
       "text": "Your Movement phase: when this model is set up by Deep Strike it can use a tunnel and be set up anywhere more than 6\" horizontally from all enemy units, but it cannot declare a charge that turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 135
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Trygon: bio-electric pulse, scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tyrannofex",
     "name": "Tyrannofex",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Great Devourer",
      "Tyrannofex",
      "Frame"
     ],
     "image": "tyr_tyrannofex",
     "baseSize": "120x92mm",
     "profile": {
      "M": "9\"",
      "T": "12",
      "Sv": "2+",
      "InSv": "—",
      "W": "16",
      "OC": "5",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Rupture cannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "18",
       "AP": "-4",
       "D": "D6+6",
       "kw": [
        "Heavy"
       ]
      },
      {
       "name": "Fleshborer hive",
       "range": "24\"",
       "A": "20",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Heavy",
        "Sustained Hits 1",
        "Twin-linked"
       ]
      },
      {
       "name": "Acid spray",
       "range": "18\"",
       "A": "D6+6",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Torrent"
       ]
      },
      {
       "name": "Stinger salvoes",
       "range": "24\"",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Powerful limbs",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "8",
       "AP": "0",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Resilient Organism",
       "text": "Once per battle, when an attack is allocated to this model, you can change that attack's Damage to 0.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 170,
       "ptsLater": 180
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Tyrannofex: fleshborer hive, stinger salvoes, powerful limbs.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "hive",
         "label": "Fleshborer hive",
         "pts": 0
        },
        {
         "id": "acid",
         "label": "Acid spray",
         "pts": 10
        },
        {
         "id": "rupture",
         "label": "Rupture cannon",
         "pts": 20
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "harridan",
     "name": "Harridan",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Titanic",
      "Fly",
      "Transport",
      "Great Devourer",
      "Harridan"
     ],
     "image": "tyr_harridan",
     "baseSize": "Unique",
     "profile": {
      "M": "14\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "30",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 10,
      "text": "While it has 1-10 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Dire bio-cannon",
       "range": "48\"",
       "A": "D6+6",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Gargantuan scything talons",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "14",
       "AP": "-2",
       "D": "D6",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 2D6",
      "Hover"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Frenzied Metabolism",
       "text": "When this model is selected to shoot you can use this: +1 to wound for its attacks until the end of the phase; afterwards roll D6, on a 2+ it takes D3 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 610,
       "ptsLater": 660
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Harridan: 2 dire bio-cannons, gargantuan scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 20 GARGOYLES models and 1 WINGED TYRANID PRIME model."
    },
    {
     "id": "hierophant",
     "name": "Hierophant",
     "role": "monster",
     "faction": "Tyranids",
     "keywords": [
      "Monster",
      "Titanic",
      "Towering",
      "Transport",
      "Great Devourer",
      "Hierophant",
      "Frame"
     ],
     "image": "tyr_hierophant",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "14",
      "Sv": "2+",
      "InSv": "5+",
      "W": "30",
      "OC": "12",
      "Ld": "8+"
     },
     "damaged": {
      "threshold": 10,
      "text": "While it has 1-10 wounds left: -6 OC and -1 to hit.",
      "ocMod": -6
     },
     "ranged": [
      {
       "name": "Bio-plasma torrent",
       "range": "12\"",
       "A": "3D6",
       "skill": "—",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Assault",
        "Torrent"
       ]
      },
      {
       "name": "Dire bio-cannon",
       "range": "48\"",
       "A": "D6+6",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Lashwhip pods",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Extra Attacks"
       ]
      },
      {
       "name": "Titanic scything talons",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "20",
       "AP": "-2",
       "D": "D6+1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 2D6"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Apex-beast",
       "text": "+1 to hit against battle-shocked units.",
       "kind": "datasheet"
      },
      {
       "name": "Stalking Forward",
       "text": "On Normal, Advance and Fall Back moves it can move over models (not TITANIC) and terrain 4\" tall or less as if they were not there.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 810,
       "ptsLater": 910
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Hierophant: bio-plasma torrent, 2 dire bio-cannons, lashwhip pods, titanic scything talons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 20 TYRANIDS INFANTRY models; each model with more than 1 wound takes the space of 3. Cannot carry models that can FLY."
    },
    {
     "id": "ripper_swarms",
     "name": "Ripper Swarms",
     "role": "swarm",
     "faction": "Tyranids",
     "keywords": [
      "Ripper Swarms",
      "Swarm",
      "Great Devourer",
      "Harvester"
     ],
     "image": null,
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "2",
      "Sv": "6+",
      "InSv": "—",
      "W": "4",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Spinemaw",
       "range": "6\"",
       "A": "4",
       "skill": "5+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chitinous claws and teeth",
       "range": "Melee",
       "A": "6",
       "skill": "5+",
       "S": "2",
       "AP": "0",
       "D": "1",
       "kw": [
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Synapse"
     ],
     "abilities": [
      {
       "name": "Chitinous Horrors (Aura)",
       "text": "Enemy models engaged with this unit have their OC halved.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 30
      },
      {
       "models": 2,
       "pts": 40
      },
      {
       "models": 3,
       "pts": 50
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1-3 Ripper Swarms: chitinous claws and teeth.",
     "options": [
      {
       "id": "spinemaws",
       "type": "count",
       "label": "Spinemaws",
       "max": "models"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    }
   ]
  },
  "deathGuard": {
   "armyFaction": "Death Guard",
   "alliedFactions": [
    {
     "faction": "Plague Legions",
     "requiresDetachment": "tallyband_summoners",
     "capKey": "blCap",
     "cannotBeWarlord": true
    }
   ],
   "armyRules": [
    {
     "id": "nurgles_gift",
     "name": "Nurgle's Gift (Aura)",
     "contagion": {
      "byRound": [
       3,
       6,
       9
      ],
      "max": 12
     },
     "plagues": [
      {
       "id": "skullsquirm",
       "name": "Skullsquirm Blight",
       "effect": "Their ranged attacks give your units the benefit of cover, and their melee attacks get -1 to hit."
      },
      {
       "id": "rattlejoint",
       "name": "Rattlejoint Ague",
       "effect": "Worsen their Save characteristic by 1."
      },
      {
       "id": "soulrot",
       "name": "Scabrous Soulrot",
       "effect": "Worsen their Move, Leadership and OC by 1 (OC cannot drop below 1)."
      }
     ],
     "text": [
      "If your Army Faction is DEATH GUARD: while an enemy unit is within Contagion Range of one or more DEATH GUARD models from your army, it is Afflicted.",
      "Contagion Range is 3\" in the first battle round, 6\" in the second and 9\" from the third onwards. Modifiers can never take it above 12\".",
      "In the Declare Battle Formations step pick one Plague. For the rest of the battle an Afflicted enemy unit has -1 Toughness and suffers that Plague.",
      "Skullsquirm Blight: Their ranged attacks give your units the benefit of cover, and their melee attacks get -1 to hit.",
      "Rattlejoint Ague: Worsen their Save characteristic by 1.",
      "Scabrous Soulrot: Worsen their Move, Leadership and OC by 1 (OC cannot drop below 1)."
     ]
    },
    {
     "id": "pact_of_decay",
     "name": "Pact of Decay",
     "text": [
      "PLAGUE LEGIONS units cannot be your Army Faction unless a rule says otherwise.",
      "A Death Guard army can include them with the Tallyband Summoners detachment (up to 500/1000/1500 pts by battle size); none of them can be your WARLORD."
     ]
    }
   ],
   "detachments": [
    {
     "id": "virulent_vectorium",
     "name": "Virulent Vectorium",
     "dp": 3,
     "dispositions": [
      "Take and Hold",
      "Purge the Foe"
     ],
     "tags": [],
     "summary": "Objectives you hold stay yours and afflict every enemy unit on them.",
     "rule": {
      "name": "Worldblight",
      "text": "At the end of your Command phase, each objective a friendly DEATH GUARD unit controls becomes secured. Until you lose control of it, enemy units within range of that objective are Afflicted."
     },
     "enhancements": [
      {
       "id": "daemon_weapon_of_nurgle",
       "name": "Daemon Weapon of Nurgle",
       "pts": 10,
       "upgrade": false,
       "text": "DEATH GUARD model only. The bearer's melee attacks score a critical hit on an unmodified hit roll of 5+.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "furnace_of_plagues",
       "name": "Furnace of Plagues",
       "pts": 25,
       "upgrade": false,
       "text": "DEATH GUARD model only. +1 S and +1 A for the bearer's melee weapons, which also gain [DEVASTATING WOUNDS].",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "S",
         "add": 1
        },
        {
         "target": "melee",
         "stat": "A",
         "add": 1
        }
       ]
      },
      {
       "id": "arch_contaminator",
       "name": "Arch Contaminator",
       "pts": 25,
       "upgrade": false,
       "text": "DEATH GUARD model only. While the bearer's unit is within range of an objective you control, its models can re-roll wound rolls.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "revolting_regeneration",
       "name": "Revolting Regeneration",
       "pts": 30,
       "upgrade": false,
       "text": "DEATH GUARD model only. The bearer has Feel No Pain 5+.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "putrid_detonation",
       "name": "Putrid Detonation",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a DEATH GUARD VEHICLE or MONSTER model with Deadly Demise is destroyed.",
       "target": "That model (even though it was just destroyed).",
       "effect": "Its Deadly Demise mortal wounds are inflicted automatically (no D6 roll), and every enemy unit that suffers them is Afflicted until the start of your next turn."
      },
      {
       "id": "disgustingly_resilient",
       "name": "Disgustingly Resilient",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One DEATH GUARD unit targeted by those attacks.",
       "effect": "Until the end of the phase, attacks allocated to its models get -1 Damage."
      },
      {
       "id": "plaguesurge",
       "name": "Plaguesurge",
       "cp": 2,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "Your DEATH GUARD WARLORD, if it is on the battlefield.",
       "effect": "Until the start of your next Command phase, models from your army get +3\" Contagion Range."
      },
      {
       "id": "leechspore_eruption",
       "name": "Leechspore Eruption",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One DEATH GUARD model that has lost one or more wounds.",
       "effect": "Pick one enemy unit within 3\" and roll one D6 per wound your model has lost: each 5+ inflicts 1 mortal wound on that unit and heals your model by 1 wound (up to 6 each)."
      },
      {
       "id": "overwhelming_generosity",
       "name": "Overwhelming Generosity",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Shooting"
       ],
       "when": "Start of your Shooting phase.",
       "target": "One DEATH GUARD CHARACTER unit.",
       "effect": "Pick one enemy unit visible to it. Until the end of the phase, DEATH GUARD units shooting at that enemy can re-roll the number of attacks their weapons make."
      },
      {
       "id": "creeping_blight",
       "name": "Creeping Blight",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One DEATH GUARD INFANTRY unit that has not shot this phase.",
       "effect": "Until the end of the phase, its ranged attacks against an Afflicted unit can re-roll the hit roll and the wound roll."
      }
     ]
    },
    {
     "id": "mortarions_hammer",
     "name": "Mortarion's Hammer",
     "dp": 2,
     "dispositions": [
      "Purge the Foe"
     ],
     "tags": [],
     "summary": "A preliminary bombardment afflicts distant enemy units each round; vehicle-heavy stratagems.",
     "rule": {
      "name": "Miasmic Bombardment",
      "text": "At the start of each battle round, pick enemy units that are more than 12\" from every model of your army on the battlefield (up to 1 in Incursion, 2 in Strike Force, 3 in Onslaught). They are Afflicted until the end of the battle round."
     },
     "enhancements": [
      {
       "id": "eye_of_affliction",
       "name": "Eye of Affliction",
       "pts": 20,
       "upgrade": false,
       "text": "DEATH GUARD model only. Ranged weapons in the bearer's unit have [IGNORES COVER] against Afflicted units.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "bilemaw_blight",
       "name": "Bilemaw Blight",
       "pts": 10,
       "upgrade": false,
       "text": "MALIGNANT PLAGUECASTER only. At the start of your Shooting phase, +12\" Range for its Plague Wind until the end of the phase.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "malignant_plaguecaster"
        ]
       }
      },
      {
       "id": "shriekworm_familiar",
       "name": "Shriekworm Familiar",
       "pts": 15,
       "upgrade": false,
       "text": "DEATH GUARD model only. Once per battle round, Fire Overwatch on the bearer's unit costs 0CP.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "tendrilous_emissions",
       "name": "Tendrilous Emissions",
       "pts": 30,
       "upgrade": false,
       "text": "LORD OF VIRULENCE only. While within 3\" of a friendly DEATH GUARD VEHICLE it has Lone Operative, and those VEHICLE units re-roll wound rolls of 1 when shooting enemy units the bearer can see.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "lord_of_virulence"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "blighted_land",
       "name": "Blighted Land",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "End of your Movement phase.",
       "target": "One DEATH GUARD VEHICLE unit.",
       "effect": "Pick a terrain feature within 24\" that it can see. Until the start of your next turn, enemy units within 3\" of that terrain feature are Afflicted."
      },
      {
       "id": "relentless_grind",
       "name": "Relentless Grind",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement",
        "Charge"
       ],
       "when": "Your Movement or Charge phase.",
       "target": "One DEATH GUARD VEHICLE unit that has not moved or charged this phase.",
       "effect": "Until the end of the phase, its Normal, Advance and Charge moves can pass horizontally through terrain features."
      },
      {
       "id": "drawn_to_despair",
       "name": "Drawn to Despair",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One DEATH GUARD unit that has not shot this phase.",
       "effect": "Until the end of the phase, its attacks against visible enemy units (not AIRCRAFT) in your opponent's deployment zone can re-roll the hit roll."
      },
      {
       "id": "font_of_filth",
       "name": "Font of Filth",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One DEATH GUARD VEHICLE unit that has not shot this phase.",
       "effect": "Until the end of the phase its ranged weapons have [ASSAULT]."
      },
      {
       "id": "eyestinger_storm",
       "name": "Eyestinger Storm",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your opponent's Command phase.",
       "target": "One DEATH GUARD VEHICLE unit.",
       "effect": "Pick an objective marker it can see: every Afflicted enemy unit within range of it takes a battle-shock test (and no other battle-shock test that phase)."
      },
      {
       "id": "stinking_mire",
       "name": "Stinking Mire",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Start of your opponent's Charge phase.",
       "target": "One unengaged DEATH GUARD VEHICLE unit.",
       "effect": "Pick one visible enemy unit within 12\": if it declares a charge, it gets -1 to the charge roll."
      }
     ]
    },
    {
     "id": "champions_of_contagion",
     "name": "Champions of Contagion",
     "dp": 2,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Change your chosen Plague at the start of every battle round; champion-led units hit harder.",
     "rule": {
      "name": "Manifold Maladies",
      "text": "At the start of each battle round you can pick one of the Plagues from Nurgle's Gift. It replaces your previously chosen Plague for the rest of the battle."
     },
     "plagueEachRound": true,
     "enhancements": [
      {
       "id": "final_ingredient",
       "name": "Final Ingredient",
       "pts": 20,
       "upgrade": false,
       "text": "BIOLOGUS PUTRIFIER only. Once per battle, after its unit has fought and destroyed one or more CHARACTER models, pick one Plague: for the rest of the battle Afflicted enemy units also suffer it.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "biologus_putrifier"
        ]
       }
      },
      {
       "id": "visions_of_virulence",
       "name": "Visions of Virulence",
       "pts": 15,
       "upgrade": false,
       "text": "MALIGNANT PLAGUECASTER only. An enemy unit enfeebled by its Pestilent Fallout is also Afflicted.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "malignant_plaguecaster"
        ]
       }
      },
      {
       "id": "needle_of_nurgle",
       "name": "Needle of Nurgle",
       "pts": 25,
       "upgrade": false,
       "text": "PLAGUE SURGEON only. Tainted Narthecium returns up to D3 destroyed models instead of 1.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "plague_surgeon"
        ]
       }
      },
      {
       "id": "cornucophagus",
       "name": "Cornucophagus",
       "pts": 35,
       "upgrade": false,
       "text": "LORD OF POXES only. In Declare Battle Formations pick one Plague: enemy units within the bearer's Contagion Range also suffer it for the whole battle.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "lord_of_poxes"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "blessings_of_filth",
       "name": "Blessings of Filth",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "One DEATH GUARD Attached unit that has not shot or fought this phase.",
       "effect": "Until the end of the phase its attacks score a critical hit on an unmodified hit roll of 5+."
      },
      {
       "id": "malignance_magnified",
       "name": "Malignance Magnified",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "One DEATH GUARD Attached unit that has not shot or fought this phase.",
       "effect": "Until the end of the phase its attacks against units below Starting Strength can re-roll the hit roll and the wound roll."
      },
      {
       "id": "grotesque_fortitude",
       "name": "Grotesque Fortitude",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, right after an enemy unit selects its targets.",
       "target": "One DEATH GUARD Attached unit targeted by those attacks.",
       "effect": "Until the end of the phase its models get +2 Toughness."
      },
      {
       "id": "rabid_infusion",
       "name": "Rabid Infusion",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase.",
       "target": "One DEATH GUARD unit that contains two CHARACTER models.",
       "effect": "Until the end of the phase it has Fights First."
      },
      {
       "id": "mobile_vector",
       "name": "Mobile Vector",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, before the Reinforcements step.",
       "target": "One DEATH GUARD CHARACTER unit that is not leading a unit.",
       "effect": "Attach it as a Leader to another friendly DEATH GUARD unit within 2\" horizontally and 5\" vertically that it could lead (not battle-shocked, and with room for another Leader). Adjust that unit's Starting Strength."
      },
      {
       "id": "deaths_heads",
       "name": "Death's Heads",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One unengaged BIOLOGUS PUTRIFIER unit that has not shot this phase.",
       "effect": "Pick one enemy unit (not a VEHICLE) within 8\" that it can see: until the start of your next turn it suffers the effects of all Plagues."
      }
     ]
    },
    {
     "id": "tallyband_summoners",
     "name": "Tallyband Summoners",
     "dp": 2,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Field the daemons of Nurgle (PLAGUE LEGIONS) alongside the Death Guard and spread Contagion further near them.",
     "rule": {
      "name": "Reverberant Rancidity",
      "text": "A PLAGUE LEGIONS unit within 7\" of one of your DEATH GUARD units has Nurgle's Gift. A DEATH GUARD unit within 7\" of one of your PLAGUE LEGIONS units gets +3\" Contagion Range. You can include PLAGUE LEGIONS units up to 500 pts (Incursion), 1000 pts (Strike Force) or 1500 pts (Onslaught); none of them can be your WARLORD."
     },
     "persistentPests": true,
     "enhancements": [
      {
       "id": "beckoning_blight",
       "name": "Beckoning Blight",
       "pts": 20,
       "upgrade": false,
       "text": "DEATH GUARD model only. A PLAGUE LEGIONS unit arriving by Deep Strike wholly within 12\" of the bearer can be set up more than 6\" (instead of 8\") horizontally from enemy models.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "fell_harvester",
       "name": "Fell Harvester",
       "pts": 10,
       "upgrade": false,
       "text": "DEATH GUARD model only. +2 A for the bearer's melee weapons.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "A",
         "add": 2
        }
       ]
      },
      {
       "id": "entropic_knell",
       "name": "Entropic Knell",
       "pts": 15,
       "upgrade": false,
       "text": "GREAT UNCLEAN ONE only. In the Battle-shock step of your opponent's Command phase, each enemy unit within 6\" that is below Starting Strength takes a battle-shock test at -1.",
       "eligible": {
        "unitIds": [
         "great_unclean_one"
        ]
       }
      },
      {
       "id": "tome_of_bounteous_blessings",
       "name": "Tome of Bounteous Blessings",
       "pts": 20,
       "upgrade": false,
       "text": "MALIGNANT PLAGUECASTER only. PLAGUE LEGIONS units within 12\" get +1 to battle-shock tests; when one passes, a model regains up to D3 wounds (a BATTLELINE unit gets up to D3 destroyed models back instead).",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "malignant_plaguecaster"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "persistent_pests",
       "name": "Persistent Pests",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a NURGLINGS unit is destroyed.",
       "target": "That NURGLINGS unit (even though it was just destroyed).",
       "effect": "Add an identical new unit at Starting Strength and full wounds to your Strategic Reserves.",
       "restrictions": "Once per battle."
      },
      {
       "id": "clutching_corruption",
       "name": "Clutching Corruption",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One DEATH GUARD unit that has not fought this phase.",
       "effect": "Until the end of the phase its attacks against enemy units engaged with your PLAGUE LEGIONS units can re-roll the hit roll."
      },
      {
       "id": "all_is_rot",
       "name": "All Is Rot",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One PLAGUE LEGIONS unit engaged with enemy units.",
       "effect": "Until the end of the phase, enemies engaged with it can still be shot at. Each time an enemy model engaged with it loses a wound, roll D6: on a 5+ your unit suffers 1 mortal wound after the attacking unit finishes."
      },
      {
       "id": "fleshy_avalanche",
       "name": "Fleshy Avalanche",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement",
        "Charge"
       ],
       "when": "Your Movement or Charge phase.",
       "target": "One PLAGUE LEGIONS MONSTER unit that has not moved or charged this phase.",
       "effect": "Until the end of the phase, its Normal, Advance and Charge moves can pass horizontally through terrain features."
      },
      {
       "id": "avatars_of_decay",
       "name": "Avatars of Decay",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One PLAGUE LEGIONS unit.",
       "effect": "Until the end of the phase, enemy units within 6\" of it are Afflicted."
      },
      {
       "id": "mireslick",
       "name": "Mireslick",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent's Movement phase, when an enemy unit (not MONSTER or VEHICLE) is selected to fall back.",
       "target": "One PLAGUE LEGIONS unit engaged with that enemy unit.",
       "effect": "Until the end of the phase, each time an enemy unit engaged with yours is selected to fall back it takes a Leadership test; if failed it must remain stationary instead."
      }
     ]
    },
    {
     "id": "shamblerot_vectorium",
     "name": "Shamblerot Vectorium",
     "dp": 2,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Fresh Poxwalkers keep arriving from Strategic Reserves; Poxwalkers are Battleline.",
     "rule": {
      "name": "Numberless Horde",
      "text": "In your Command phase of battle rounds 2 and 3 (Incursion), 2-4 (Strike Force) or 2-5 (Onslaught), add a new POXWALKERS unit with a Starting Strength of 10 to your army, in Strategic Reserves. POXWALKERS units gain the BATTLELINE keyword."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "poxwalkers"
       ],
       "keyword": "Battleline"
      }
     ],
     "numberlessHorde": {
      "incursion": [
       2,
       3
      ],
      "strike": [
       2,
       3,
       4
      ],
      "onslaught": [
       2,
       3,
       4,
       5
      ]
     },
     "enhancements": [
      {
       "id": "witherbone_pipes",
       "name": "Witherbone Pipes",
       "pts": 25,
       "upgrade": false,
       "text": "NOXIOUS BLIGHTBRINGER only. While it leads POXWALKERS, they get +1 OC and +1 to battle-shock and Leadership tests.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "noxious_blightbringer"
        ]
       }
      },
      {
       "id": "lord_of_the_walking_pox",
       "name": "Lord of the Walking Pox",
       "pts": 15,
       "upgrade": false,
       "text": "DEATH GUARD model only. If the bearer leads POXWALKERS in Strategic Reserves, treat the battle round as the third when setting that unit up.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      },
      {
       "id": "sorrowsyphon",
       "name": "Sorrowsyphon",
       "pts": 10,
       "upgrade": false,
       "text": "MALIGNANT PLAGUECASTER only. While it leads POXWALKERS its Plague Wind gets +1 Damage; after each use, D3 Poxwalkers in its unit are destroyed.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "unitIds": [
         "malignant_plaguecaster"
        ]
       }
      },
      {
       "id": "talisman_of_burgeoning",
       "name": "Talisman of Burgeoning",
       "pts": 25,
       "upgrade": false,
       "text": "DEATH GUARD model only. While the bearer leads a unit, POXWALKERS models in it get +1 Toughness.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "grip_of_the_walking_pox",
       "name": "Grip of the Walking Pox",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit selects its targets.",
       "target": "One POXWALKERS unit targeted by those attacks.",
       "effect": "After the attacker fights, roll D6 for each Poxwalker it destroyed: each 6 inflicts 1 mortal wound on it. If your unit survives, models killed this way count for Curse of the Walking Pox."
      },
      {
       "id": "smeared_with_filth",
       "name": "Smeared with Filth",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a POXWALKERS unit is destroyed.",
       "target": "That POXWALKERS unit (even though it was just destroyed).",
       "effect": "Pick one enemy unit that attacked it this phase: it is Afflicted for the rest of the battle."
      },
      {
       "id": "gnawing_hunger",
       "name": "Gnawing Hunger",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One POXWALKERS unit.",
       "effect": "Until the end of the turn: +1 Move, and +1 A and +1 S for its melee weapons."
      },
      {
       "id": "hidden_amongst_the_dead",
       "name": "Hidden Amongst the Dead",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Reinforcements step of your Movement phase.",
       "target": "One POXWALKERS unit in Strategic Reserves that is not an Attached unit.",
       "effect": "Until the end of the phase its models have Deep Strike."
      },
      {
       "id": "shock_and_horror",
       "name": "Shock and Horror",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, right after a DEATH GUARD unit ends a Charge move.",
       "target": "That unit.",
       "effect": "Every enemy unit engaged with it takes a battle-shock test at -1."
      },
      {
       "id": "shambling_wall",
       "name": "Shambling Wall",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent's Shooting phase, right after an enemy unit selects its targets.",
       "target": "One DEATH GUARD unit targeted by those attacks, and one friendly POXWALKERS unit within 3\" that both it and the attacker can see.",
       "effect": "Until the end of the phase, attacks that would be allocated to your unit can instead destroy Poxwalkers (as many as the attack's Damage) with no saving throw, if the Poxwalkers are a visible, eligible target."
      }
     ]
    },
    {
     "id": "death_lords_chosen",
     "name": "Death Lord's Chosen",
     "dp": 2,
     "dispositions": [
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Afflicted enemies may take mortal wounds every enemy Command phase; Terminator-focused.",
     "rule": {
      "name": "Deadly Vectors",
      "text": "In your opponent's Command phase roll 2D6 for each Afflicted enemy unit (-1 if it is Below Half-strength). On 6 or less it suffers D3 mortal wounds."
     },
     "deadlyVectors": true,
     "enhancements": [
      {
       "id": "face_of_death",
       "name": "Face of Death",
       "pts": 10,
       "upgrade": false,
       "text": "TERMINATOR model only. At the start of the Fight phase every enemy unit engaged with the bearer's unit takes a battle-shock test.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Terminator"
        ]
       }
      },
      {
       "id": "vile_vigour",
       "name": "Vile Vigour",
       "pts": 15,
       "upgrade": false,
       "text": "TERMINATOR model only. While the bearer leads a unit, its models get +1\" Move and can re-roll Advance rolls.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Terminator"
        ]
       }
      },
      {
       "id": "warprot_talisman",
       "name": "Warprot Talisman",
       "pts": 30,
       "upgrade": false,
       "text": "TERMINATOR model only. Once per battle, at the end of your opponent's turn, if the bearer's unit is not engaged it can be placed into Strategic Reserves.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Terminator"
        ]
       }
      },
      {
       "id": "helm_of_the_fly_king",
       "name": "Helm of the Fly King",
       "pts": 20,
       "upgrade": false,
       "text": "TERMINATOR model only. While the bearer leads a unit, it can only be shot by models within 18\".",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Terminator"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "blooming_pestilence",
       "name": "Blooming Pestilence",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Start of any phase.",
       "target": "One TERMINATOR unit.",
       "effect": "Until the end of the phase its models get +3\" Contagion Range."
      },
      {
       "id": "grim_reapers",
       "name": "Grim Reapers",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One TERMINATOR unit that has not fought this phase.",
       "effect": "Until the end of the phase its attacks against units other than MONSTERS and VEHICLES can re-roll the hit roll."
      },
      {
       "id": "undying_spite",
       "name": "Undying Spite",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, right after an enemy unit selects its targets.",
       "target": "One TERMINATOR unit targeted by those attacks.",
       "effect": "Until the end of the phase, when one of its models that has not fought is destroyed, roll D6: on a 4+ it fights after the attacking unit finishes, then is removed."
      },
      {
       "id": "signal_pox",
       "name": "Signal Pox",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One LORD OF VIRULENCE model.",
       "effect": "Pick an objective marker within 30\" that it can see: until the start of your next turn, enemy units within range of it are Afflicted."
      },
      {
       "id": "mortarions_teachings",
       "name": "Mortarion's Teachings",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One TERMINATOR unit that has not shot this phase.",
       "effect": "Until the end of the phase its ranged weapons have [ASSAULT] and [HEAVY]."
      },
      {
       "id": "sickening_impact",
       "name": "Sickening Impact",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, right after a TERMINATOR unit ends a Charge move.",
       "target": "That unit.",
       "effect": "Pick one engaged enemy unit and roll D6 for each of your models engaged with it: each 2+ inflicts 1 mortal wound (max 6)."
      }
     ]
    },
    {
     "id": "contagion_engines",
     "name": "Contagion Engines",
     "dp": 1,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [
      "ENGINES"
     ],
     "summary": "Bloat-drones, Helbrutes and Blight-haulers become Contagion Engines and shoot on the move.",
     "rule": {
      "name": "Warped and Rusted Animus",
      "text": "Friendly FOETID BLOAT-DRONE (both kinds), HELBRUTE and MYPHITIC BLIGHT-HAULER units have CONTAGION ENGINE. Ranged attacks by CONTAGION ENGINE units have [ASSAULT]. Cannot be taken with another ENGINES detachment."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "foetid_bloat_drone",
        "foetid_bloat_drone_hbl",
        "helbrute",
        "myphitic_blight_hauler"
       ],
       "keyword": "Contagion Engine"
      }
     ],
     "enhancements": [
      {
       "id": "parasitic_woe_reaper",
       "name": "Parasitic Woe-reaper",
       "pts": 15,
       "upgrade": true,
       "text": "CONTAGION ENGINE unit only. After this unit has fought, one of its models heals D3 wounds.",
       "eligible": {
        "keywordsAll": [
         "Contagion Engine"
        ]
       }
      },
      {
       "id": "lancet_of_the_worldsore",
       "name": "Lancet of the Worldsore",
       "pts": 15,
       "upgrade": true,
       "text": "HELBRUTE or MYPHITIC BLIGHT-HAULER only. This unit has MOBILE.",
       "eligible": {
        "unitIds": [
         "helbrute",
         "myphitic_blight_hauler"
        ]
       },
       "addKeywords": [
        "Mobile"
       ]
      }
     ],
     "stratagems": [
      {
       "id": "fresh_vectors",
       "name": "Fresh Vectors",
       "cp": 1,
       "type": "Contagion Engines",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase, when a CONTAGION ENGINE unit is selected to attack.",
       "target": "That unit.",
       "effect": "Its attacks can re-roll wound rolls of 1."
      },
      {
       "id": "bloodrust_deluge",
       "name": "Bloodrust Deluge",
       "cp": 1,
       "type": "Contagion Engines",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a CONTAGION ENGINE unit is selected to shoot.",
       "target": "That unit.",
       "effect": "Pick one visible enemy unit: it is Afflicted until your unit has finished attacking."
      },
      {
       "id": "soulrot_flux",
       "name": "Soulrot Flux",
       "cp": 1,
       "type": "Contagion Engines",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent's Movement phase, when an enemy unit engaged with a CONTAGION ENGINE unit is selected to fall back.",
       "target": "That CONTAGION ENGINE unit.",
       "effect": "Roll D6 for that enemy unit: 1 = 1 mortal wound, 2-5 = D3 mortal wounds, 6 = 3 mortal wounds."
      }
     ]
    },
    {
     "id": "flyblown_host",
     "name": "Flyblown Host",
     "dp": 1,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [
      "FLYBLOWN"
     ],
     "summary": "Up to two Plague Marines units infiltrate under a cloud of daemon flies.",
     "rule": {
      "name": "Verminous Haze",
      "text": "In the Declare Battle Formations step pick up to two friendly PLAGUE MARINES units: they have Infiltrators. Cannot be taken with another FLYBLOWN detachment."
     },
     "enhancements": [
      {
       "id": "insectile_murmuration",
       "name": "Insectile Murmuration",
       "pts": 15,
       "upgrade": true,
       "text": "PLAGUE MARINES unit only. Its attacks against a unit within Contagion Range of a friendly unit can re-roll wound rolls of 1.",
       "eligible": {
        "unitIds": [
         "plague_marines"
        ]
       }
      },
      {
       "id": "plagueveil",
       "name": "Plagueveil",
       "pts": 15,
       "upgrade": true,
       "text": "PLAGUE MARINES unit only. This unit has -3\" detection range.",
       "eligible": {
        "unitIds": [
         "plague_marines"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "nauseating_paroxysms",
       "name": "Nauseating Paroxysms",
       "cp": 1,
       "type": "Flyblown Host",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase.",
       "target": "One engaged PLAGUE MARINES unit.",
       "effect": "Pick one enemy unit engaged with it: it makes a battle-shock roll at -1."
      },
      {
       "id": "droning_horror",
       "name": "Droning Horror",
       "cp": 1,
       "type": "Flyblown Host",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a PLAGUE MARINES unit is selected to shoot.",
       "target": "That unit.",
       "effect": "Its ranged attacks re-roll hit rolls of 1, and also wound rolls of 1 against targets within half range."
      },
      {
       "id": "eye_of_the_swarm",
       "name": "Eye of the Swarm",
       "cp": 1,
       "type": "Flyblown Host",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a PLAGUE MARINES unit is selected to shoot.",
       "target": "That unit.",
       "effect": "Its ranged attacks have [CLOSE-QUARTERS]."
      }
     ]
    },
    {
     "id": "paragons_of_putrescence",
     "name": "Paragons of Putrescence",
     "dp": 1,
     "dispositions": [
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Death Guard Characters spread their Contagion 3\" further.",
     "rule": {
      "name": "Hypervirulent Strains",
      "text": "Friendly DEATH GUARD CHARACTER units get +3\" Contagion Range (max 12\")."
     },
     "enhancements": [
      {
       "id": "rejuvenating_swarm",
       "name": "Rejuvenating Swarm",
       "pts": 20,
       "upgrade": false,
       "text": "DEATH GUARD INFANTRY model only (not TERMINATOR). Attacks against the bearer's unit with S greater than its T get -1 to wound.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Infantry"
        ],
        "keywordsNone": [
         "Terminator"
        ]
       }
      },
      {
       "id": "host_of_the_hybridised_pox",
       "name": "Host of the Hybridised Pox",
       "pts": 40,
       "upgrade": false,
       "text": "DEATH GUARD INFANTRY model only. Once per battle (per army), in your Command phase, pick a Plague: enemy units within the bearer's Contagion Range also suffer it for the rest of the battle.",
       "eligible": {
        "factionsAll": [
         "Death Guard"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "territorial_infection",
       "name": "Territorial Infection",
       "cp": 1,
       "type": "Paragons of Putrescence",
       "phases": [
        "Command"
       ],
       "when": "Start of the Command phase.",
       "target": "One DEATH GUARD CHARACTER unit.",
       "effect": "It gets +1 OC until the end of the turn."
      },
      {
       "id": "aggravus_spasms",
       "name": "Aggravus Spasms",
       "cp": 1,
       "type": "Paragons of Putrescence",
       "phases": [
        "Shooting"
       ],
       "when": "Start of your Shooting phase.",
       "target": "One DEATH GUARD CHARACTER unit.",
       "effect": "Pick one visible enemy unit within its Contagion Range: that unit has +6\" detection range."
      },
      {
       "id": "simultaneous_contamination",
       "name": "Simultaneous Contamination",
       "cp": 1,
       "type": "Paragons of Putrescence",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a DEATH GUARD CHARACTER unit starts an action.",
       "target": "That unit.",
       "effect": "The action does not stop it from shooting."
      }
     ]
    }
   ],
   "units": [
    {
     "id": "mortarion",
     "name": "Mortarion",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Monster",
      "Psyker",
      "Fly",
      "Character",
      "Epic Hero",
      "Daemon",
      "Grenades",
      "Chaos",
      "Nurgle",
      "Primarch",
      "Mortarion"
     ],
     "image": "dg_mortarion",
     "baseSize": "100mm",
     "profile": {
      "M": "10\"",
      "T": "12",
      "Sv": "2+",
      "InSv": "4+",
      "W": "16",
      "OC": "6",
      "Ld": "5+"
     },
     "damaged": {
      "threshold": 6,
      "text": "While it has 1-6 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Rotwind",
       "range": "24\"",
       "A": "D6+3",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Blast",
        "Devastating Wounds",
        "Lethal Hits",
        "Psychic"
       ]
      },
      {
       "name": "Lantern",
       "range": "24\"",
       "A": "1",
       "skill": "2+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Pistol",
        "Sustained Hits D3"
       ]
      }
     ],
     "melee": [
      {
       "name": "Silence - strike",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Devastating Wounds",
        "Lethal Hits"
       ]
      },
      {
       "name": "Silence - sweep",
       "range": "Melee",
       "A": "15",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Supreme Commander",
       "text": "If this model is in your army, it must be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Host of Plagues",
       "text": "End of your Movement phase: roll D6 for each enemy unit within 6\" (+1 if it is Afflicted). On a 3+ it suffers D3 mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Lord of the Death Guard",
       "text": "Once per turn Mortarion can use one of these: Diseased Influence - after an enemy unit ends a Normal, Advance or Fall Back move within 8\" of a friendly unengaged DEATH GUARD unit within 6\" of him, that unit can make a Normal move of up to 5\". Boon of Death - in the Fight phase, when a friendly DEATH GUARD unit within 6\" is targeted, until the end of the phase its models destroyed by melee attacks before fighting roll D6: on a 2+ they fight after the attacker, then are removed. Inflamed Reprisal - in your opponent's Shooting phase, when a friendly DEATH GUARD unit within 6\" is targeted, after the attacker finishes, that unit can shoot back at it as if it were your Shooting phase, with -1 BS.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 375
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Mortarion (Epic Hero): Lantern, Rotwind, Silence.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "mustBeWarlord": "Supreme Commander: Mortarion must be your Warlord."
    },
    {
     "id": "typhus",
     "name": "Typhus",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Chaos",
      "Nurgle",
      "Psyker",
      "Typhus",
      "Terminator"
     ],
     "image": "dg_typhus",
     "baseSize": "50mm",
     "profile": {
      "M": "5\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "6",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Lakrimae - strike",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Lakrimae - sweep",
       "range": "Melee",
       "A": "12",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "The Destroyer Hive",
       "text": "While this model leads a unit, melee attacks against that unit get -1 to hit.",
       "kind": "datasheet"
      },
      {
       "name": "Eater Plague (Psychic)",
       "text": "Your Shooting phase: pick one visible enemy unit within 18\" (a Lone Operative unit not in an Attached unit only within 12\") and roll D6. 1: this unit suffers D3 mortal wounds. 2-5: that unit suffers D6 mortal wounds. 6: D3+3 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "blightlord_terminators",
      "deathshroud_terminators",
      "poxwalkers"
     ],
     "composition": "1 Typhus (Epic Hero): Lakrimae.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "daemon_prince_of_nurgle",
     "name": "Daemon Prince of Nurgle",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Monster",
      "Character",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Daemon Prince"
     ],
     "image": "dg_daemon_prince_of_nurgle",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "12",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "2+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "14",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Death Guard Defenders",
       "text": "While within 3\" of a friendly DEATH GUARD INFANTRY unit, this model has Lone Operative.",
       "kind": "datasheet"
      },
      {
       "name": "Fevered Strategist",
       "text": "Once per battle round (one model with this ability per army): when a friendly DEATH GUARD unit within 12\" is targeted with a Stratagem, that use costs 1CP less.",
       "kind": "datasheet"
      },
      {
       "name": "Miasma of Pestilence (Aura)",
       "text": "Friendly DEATH GUARD units within 6\" have the benefit of cover against ranged attacks.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 185
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Daemon Prince of Nurgle: infernal cannon, hellforged weapons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "daemon_prince_of_nurgle_with_wings",
     "name": "Daemon Prince of Nurgle with Wings",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Monster",
      "Character",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Fly",
      "Daemon Prince with Wings"
     ],
     "image": "dg_daemon_prince_of_nurgle_with_wings",
     "baseSize": "60mm",
     "profile": {
      "M": "12\"",
      "T": "11",
      "Sv": "2+",
      "InSv": "4+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "14",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Horrifying Visage",
       "text": "Each time this model ends a Charge move, pick one enemy unit engaged with it: that unit takes a battle-shock test at -1.",
       "kind": "datasheet"
      },
      {
       "name": "Enfeebling Miasma (Aura)",
       "text": "Enemy units (not MONSTERS or VEHICLES) within 6\" must take Desperate Escape tests whenever they fall back, at -1 if they are battle-shocked.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 160
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Daemon Prince of Nurgle with Wings: infernal cannon, hellforged weapons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "lord_of_contagion",
     "name": "Lord of Contagion",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Grenades",
      "Lord of Contagion",
      "Terminator"
     ],
     "image": "dg_lord_of_contagion",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "6",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Manreaper - strike",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Manreaper - sweep",
       "range": "Melee",
       "A": "10",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Vector of Disease",
       "text": "While this model leads a unit, melee weapons in that unit have [SUSTAINED HITS 1] and [LANCE].",
       "kind": "datasheet"
      },
      {
       "name": "Unholy Resilience",
       "text": "The first time this model is destroyed in a battle round, roll D6 at the end of the phase: on a 2+ set it back up as close as possible to where it died (not in Engagement Range) with 3 wounds. Once per battle.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "blightlord_terminators",
      "deathshroud_terminators"
     ],
     "composition": "1 Lord of Contagion: manreaper.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "lord_of_virulence",
     "name": "Lord of Virulence",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Lord of Virulence",
      "Terminator"
     ],
     "image": "dg_lord_of_virulence",
     "baseSize": "50mm",
     "profile": {
      "M": "5\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "6",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Twin plague spewer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent",
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power fist",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Virulent Aura",
       "text": "While this model leads a unit, ranged attacks by that unit can re-roll the wound roll.",
       "kind": "datasheet"
      },
      {
       "name": "Blight Bombardment",
       "text": "Start of your Shooting phase: pick one visible enemy unit within 30\". Until the end of the phase, friendly DEATH GUARD ranged attacks against it re-roll hit rolls of 1 (Blast weapons can re-roll the hit roll).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "blightlord_terminators",
      "deathshroud_terminators"
     ],
     "composition": "1 Lord of Virulence: twin plague spewer, power fist.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "lord_of_poxes",
     "name": "Lord of Poxes",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Character",
      "Infantry",
      "Grenades",
      "Chaos",
      "Nurgle",
      "Lord of Poxes"
     ],
     "image": "dg_lord_of_poxes",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "4+",
      "W": "5",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Great plague blade",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds",
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Gift of Poxes",
       "text": "This model's Contagion Range is 3\" larger.",
       "kind": "datasheet"
      },
      {
       "name": "Shroud of Disease",
       "text": "While this model leads a unit, that unit can only be targeted by ranged attacks from models within 18\".",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Lord of Poxes: plasma pistol, great plague blade.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "malignant_plaguecaster",
     "name": "Malignant Plaguecaster",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Psyker",
      "Malignant Plaguecaster"
     ],
     "image": "dg_malignant_plaguecaster",
     "baseSize": "32mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plague Wind - witchfire",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic",
        "Torrent"
       ]
      },
      {
       "name": "Plague Wind - focused witchfire",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Hazardous",
        "Psychic",
        "Torrent"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Corrupted staff",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Lethal Hits",
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Gift of Contagion (Psychic)",
       "text": "While this model leads a unit, that unit's attacks against Afflicted units have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Pestilent Fallout (Psychic)",
       "text": "Your Shooting phase, after this model shoots: pick one enemy INFANTRY unit hit by its Plague Wind. Until the end of your opponent's next turn it is enfeebled: -2\" Move.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines",
      "poxwalkers"
     ],
     "composition": "1 Malignant Plaguecaster: bolt pistol, Plague Wind, corrupted staff.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "noxious_blightbringer",
     "name": "Noxious Blightbringer",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Noxious Blightbringer"
     ],
     "image": "dg_noxious_blightbringer",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Cursed plague bell",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Anti-psyker 2+",
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Sickening Vitality",
       "text": "While this model leads a unit, that unit gets +1\" Move and can re-roll Advance and Charge rolls.",
       "kind": "datasheet"
      },
      {
       "name": "Tocsin of Misery (Aura)",
       "text": "Battle-shock step of your opponent's Command phase: each enemy unit below Starting Strength within 9\" takes a battle-shock test (-1 if it is a PSYKER unit).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 50
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines",
      "poxwalkers"
     ],
     "composition": "1 Noxious Blightbringer: plasma pistol, cursed plague bell.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines",
      "poxwalkers"
     ]
    },
    {
     "id": "foul_blightspawn",
     "name": "Foul Blightspawn",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Grenades",
      "Foul Blightspawn"
     ],
     "image": "dg_foul_blightspawn",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plague sprayer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Putrefying Stink",
       "text": "Enemy models cannot start or end an Advance move within 9\" of this model.",
       "kind": "datasheet"
      },
      {
       "name": "Blinding Spray",
       "text": "Fight phase: one model with this ability per army can give its unit Fights First until the end of the phase. Each model once per battle.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Foul Blightspawn: plague sprayer, close combat weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines"
     ]
    },
    {
     "id": "biologus_putrifier",
     "name": "Biologus Putrifier",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Grenades",
      "Biologus Putrifier"
     ],
     "image": "dg_biologus_putrifier",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Hyper blight grenades",
       "range": "12\"",
       "A": "D6",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Assault",
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Injector pistol",
       "range": "3\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Anti-infantry 2+",
        "Pistol",
        "Precision"
       ]
      }
     ],
     "melee": [
      {
       "name": "Plague knives",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Extraction of Fresh Disease",
       "text": "The first time this model's unit destroys an enemy unit with a melee attack, this model gets +6 OC for the rest of the battle.",
       "kind": "datasheet"
      },
      {
       "name": "Foul Infusion",
       "text": "While this model leads a unit, that unit's weapons have [LETHAL HITS] and score critical hits on unmodified hit rolls of 5+.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Biologus Putrifier: hyper blight grenades, injector pistol, plague knives.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines"
     ]
    },
    {
     "id": "tallyman",
     "name": "Tallyman",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Tallyman"
     ],
     "image": "dg_tallyman",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Malicious Calculations",
       "text": "While this model leads a unit, that unit's attacks can ignore any or all modifiers to BS/WS and to the hit roll.",
       "kind": "datasheet"
      },
      {
       "name": "Seven-fold Chant",
       "text": "Your Command phase: if this model is on the battlefield, roll 2D6. On 7+ you gain 1CP.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Tallyman: plasma pistol, close combat weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines"
     ]
    },
    {
     "id": "plague_surgeon",
     "name": "Plague Surgeon",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Plague Surgeon"
     ],
     "image": "dg_plague_surgeon",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Balesword",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Tainted Narthecium",
       "text": "While this model leads a unit, in your Command phase you can return 1 destroyed Bodyguard model to that unit.",
       "kind": "datasheet"
      },
      {
       "name": "Inflamed Infections",
       "text": "Start of the Fight phase: pick one enemy unit engaged with this model. This model's attacks against it score critical hits on unmodified hit rolls of 5+ (4+ if that unit is Below Half-strength).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 50
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Plague Surgeon: bolt pistol, balesword.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines"
     ]
    },
    {
     "id": "icon_bearer",
     "name": "Icon Bearer",
     "role": "character",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Character",
      "Chaos",
      "Nurgle",
      "Grenades",
      "Icon Bearer"
     ],
     "image": "dg_icon_bearer",
     "baseSize": "32mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "5+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "melee": [
      {
       "name": "Plague knife",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Unclean Icon",
       "text": "While this model leads a unit, models in that unit get +1 OC.",
       "kind": "datasheet"
      },
      {
       "name": "Blessed Icon of Disease",
       "text": "Once per battle, at the start of any phase: one friendly battle-shocked DEATH GUARD unit within 12\" stops being battle-shocked.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 45
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "plague_marines"
     ],
     "composition": "1 Icon Bearer: boltgun, plague knife.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "coLeaderOf": [
      "plague_marines"
     ]
    },
    {
     "id": "plague_marines",
     "name": "Plague Marines",
     "role": "battleline",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Chaos",
      "Nurgle",
      "Grenades",
      "Battleline",
      "Plague Marines"
     ],
     "image": "dg_plague_marines",
     "baseSize": "32mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "—",
      "W": "2",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Pistol"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Plasma gun - standard",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Plasma gun - supercharge",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      },
      {
       "name": "Blight launcher",
       "range": "24\"",
       "A": "D3",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Plague spewer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Meltagun",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2"
       ]
      },
      {
       "name": "Plague belcher",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power fist",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Plague knives",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Bubotic weapons",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Heavy plague weapon",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Infused with the Blessings of Nurgle",
       "text": "Your Shooting phase, after this unit shoots: pick one enemy unit it hit. It is Afflicted until the start of your next turn.",
       "kind": "datasheet"
      },
      {
       "name": "Icon of Despair (Aura)",
       "text": "Enemy units within 6\" of the bearer get -1 Leadership.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 90
      },
      {
       "models": 7,
       "pts": 125
      },
      {
       "models": 10,
       "pts": 175
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Plague Champion and 4, 6 or 9 Plague Marines: boltgun, plague knives.",
     "options": [
      {
       "id": "ch_gun",
       "type": "choice",
       "label": "Champion: ranged weapon",
       "choices": [
        {
         "id": "bolt",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "pistol",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma gun",
         "pts": 0
        },
        {
         "id": "ppistol",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "ch_melee",
       "type": "choice",
       "label": "Champion: melee weapon",
       "choices": [
        {
         "id": "knives",
         "label": "Plague knives",
         "pts": 0
        },
        {
         "id": "bubotic",
         "label": "Bubotic weapons",
         "pts": 0
        },
        {
         "id": "fist",
         "label": "Power fist",
         "pts": 0
        }
       ]
      },
      {
       "id": "blight",
       "type": "count",
       "label": "Blight launcher",
       "slots": [
        "pm"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "spewer",
       "type": "count",
       "label": "Plague spewer",
       "slots": [
        "pm"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "melta",
       "type": "count",
       "label": "Meltagun",
       "slots": [
        "pm"
       ],
       "group": "special",
       "per": 5,
       "n": 1
      },
      {
       "id": "belcher",
       "type": "count",
       "label": "Plague belcher",
       "slots": [
        "pm"
       ],
       "group": "special",
       "per": 5,
       "n": 1
      },
      {
       "id": "plasma",
       "type": "count",
       "label": "Plasma gun",
       "slots": [
        "pm"
       ],
       "group": "special",
       "per": 5,
       "n": 1
      },
      {
       "id": "bubotic",
       "type": "count",
       "label": "Bubotic weapons",
       "slots": [
        "pm"
       ],
       "per": 5,
       "n": 2
      },
      {
       "id": "heavy",
       "type": "count",
       "label": "Heavy plague weapon",
       "slots": [
        "pm"
       ],
       "per": 5,
       "n": 2
      },
      {
       "id": "icon",
       "type": "toggle",
       "label": "Icon of despair (on a boltgun Plague Marine)"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "pm",
       "label": "Plague Marine weapon",
       "default": "Boltgun",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "All also have plague knives."
      }
     ],
     "optionGroups": [
      {
       "id": "special",
       "per": 5,
       "n": 1,
       "label": "Meltagun / plague belcher / plasma gun"
      }
     ]
    },
    {
     "id": "poxwalkers",
     "name": "Poxwalkers",
     "role": "infantry",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Chaos",
      "Nurgle",
      "Poxwalkers"
     ],
     "image": "dg_poxwalkers",
     "baseSize": "25mm",
     "profile": {
      "M": "5\"",
      "T": "4",
      "Sv": "7+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Improvised weapons",
       "range": "Melee",
       "A": "2",
       "skill": "5+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Infiltrators",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Curse of the Walking Pox",
       "text": "Each time a Poxwalker destroys an enemy model (not MONSTER or VEHICLE), after the unit's attacks you can return one destroyed Poxwalker to the unit. While TYPHUS leads the unit, models killed by his Eater Plague count too.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 65
      },
      {
       "models": 20,
       "pts": 130
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "10 or 20 Poxwalkers: improvised weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "blightlord_terminators",
     "name": "Blightlord Terminators",
     "role": "infantry",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Chaos",
      "Nurgle",
      "Blightlord Terminators",
      "Terminator"
     ],
     "image": "dg_blightlord_terminators",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Plague spewer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Blight launcher",
       "range": "24\"",
       "A": "D3",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Reaper autocannon",
       "range": "36\"",
       "A": "4",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Sustained Hits 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Bubotic blade",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Flail of corruption",
       "range": "Melee",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Blistering Fusillade",
       "text": "If this unit has a Starting Strength of 5+ or is led by a CHARACTER, its ranged attacks against Afflicted units get +1 S and +1 AP.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 115,
       "ptsLater": 145
      },
      {
       "models": 5,
       "pts": 185,
       "ptsLater": 215
      },
      {
       "models": 10,
       "pts": 370,
       "ptsLater": 400
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Blightlord Champion and 2, 4 or 9 Blightlord Terminators: combi-bolter, bubotic blade.",
     "options": [
      {
       "id": "combiw",
       "type": "count",
       "label": "Combi-weapon",
       "slots": [
        "bl"
       ],
       "per": 5,
       "n": 3
      },
      {
       "id": "flail",
       "type": "count",
       "label": "Flail of corruption",
       "slots": [
        "bl"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "blight",
       "type": "count",
       "label": "Blight launcher",
       "slots": [
        "bl"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "reaper",
       "type": "count",
       "label": "Reaper autocannon",
       "slots": [
        "bl"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "spewer",
       "type": "count",
       "label": "Plague spewer",
       "slots": [
        "bl"
       ],
       "per": 5,
       "n": 1
      },
      {
       "id": "spewer3",
       "type": "count",
       "label": "Plague spewer and close combat weapon",
       "slots": [
        "bl"
       ],
       "note": "Only in a 3-model unit.",
       "max": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "bl",
       "label": "Blightlord weapons",
       "default": "Combi-bolter and bubotic blade",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "The Blightlord Champion keeps a combi-bolter and bubotic blade."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "deathshroud_terminators",
     "name": "Deathshroud Terminators",
     "role": "infantry",
     "faction": "Death Guard",
     "keywords": [
      "Infantry",
      "Chaos",
      "Nurgle",
      "Deathshroud Terminators",
      "Terminator"
     ],
     "image": "dg_deathshroud_terminators",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plaguespurt gauntlet",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Manreaper - strike",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Manreaper - sweep",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Silent Bodyguard",
       "text": "While a CHARACTER leads this unit, that CHARACTER has Feel No Pain 4+.",
       "kind": "datasheet"
      },
      {
       "name": "Death Approaches",
       "text": "In your Movement phase, when this unit arrives by Deep Strike it can be set up more than 6\" horizontally from Afflicted enemy units (and more than 8\" from other enemy units).",
       "kind": "datasheet"
      },
      {
       "name": "Icon of Despair (Aura)",
       "text": "Enemy units within 6\" of the bearer get -1 Leadership.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 150,
       "ptsLater": 160
      },
      {
       "models": 6,
       "pts": 305,
       "ptsLater": 315
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Deathshroud Champion and 2 or 5 Deathshroud Terminators: plaguespurt gauntlet, manreaper.",
     "options": [
      {
       "id": "gauntlet",
       "type": "toggle",
       "label": "Champion: extra plaguespurt gauntlet"
      },
      {
       "id": "icon",
       "type": "toggle",
       "label": "Champion: icon of despair"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_spawn",
     "name": "Chaos Spawn",
     "role": "beast",
     "faction": "Death Guard",
     "keywords": [
      "Beast",
      "Chaos",
      "Nurgle",
      "Spawn"
     ],
     "image": "dg_chaos_spawn",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "7",
      "Sv": "4+",
      "InSv": "—",
      "W": "4",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Hideous Mutations",
       "range": "Melee",
       "A": "D6+2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Feel No Pain 5+",
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Lethal Ichor",
       "text": "Each time a melee attack is allocated to a model in this unit, after the attacking unit finishes, roll D6 (max six per attacking unit): each 4+ inflicts 1 mortal wound on the attacking unit.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 2,
       "pts": 80
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "2 Chaos Spawn: hideous mutations.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "helbrute",
     "name": "Helbrute",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Nurgle",
      "Helbrute"
     ],
     "image": "dg_helbrute",
     "baseSize": "60mm",
     "profile": {
      "M": "7\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "—",
      "W": "8",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Heavy flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Missile launcher - frag",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Missile launcher - krak",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D6",
       "kw": []
      },
      {
       "name": "Multi-melta",
       "range": "18\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Lethal Hits",
        "Melta 2"
       ]
      },
      {
       "name": "Twin autocannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "10",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Twin-linked",
        "Lethal Hits"
       ]
      },
      {
       "name": "Plasma cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Hazardous",
        "Lethal Hits"
       ]
      },
      {
       "name": "Twin heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Sustained Hits 1",
        "Twin-linked"
       ]
      },
      {
       "name": "Twin lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Helbrute fist",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "12",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Power scourge",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Helbrute hammer",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Diseased Malice",
       "text": "Attacks by this model against Afflicted units get +1 to wound.",
       "kind": "datasheet"
      },
      {
       "name": "Froth-spattered Frenzy",
       "text": "If equipped with 2 melee weapons besides its close combat weapon, those two weapons get +2 A.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 105
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Helbrute: multi-melta, Helbrute fist, close combat weapon.",
     "options": [
      {
       "id": "arm1",
       "type": "choice",
       "label": "Multi-melta arm",
       "choices": [
        {
         "id": "mm",
         "label": "Multi-melta",
         "pts": 0
        },
        {
         "id": "pc",
         "label": "Plasma cannon",
         "pts": 0
        },
        {
         "id": "tac",
         "label": "Twin autocannon",
         "pts": 0
        },
        {
         "id": "tlc",
         "label": "Twin lascannon",
         "pts": 0
        },
        {
         "id": "thb",
         "label": "Twin heavy bolter",
         "pts": 0
        },
        {
         "id": "fist",
         "label": "Helbrute fist",
         "pts": 0
        }
       ]
      },
      {
       "id": "arm2",
       "type": "choice",
       "label": "Fist arm",
       "choices": [
        {
         "id": "fist",
         "label": "Helbrute fist",
         "pts": 0
        },
        {
         "id": "ml",
         "label": "Missile launcher",
         "pts": 0
        },
        {
         "id": "hammer",
         "label": "Helbrute hammer",
         "pts": 0
        },
        {
         "id": "scourge",
         "label": "Power scourge",
         "pts": 0
        }
       ]
      },
      {
       "id": "fistw",
       "type": "choice",
       "label": "Fist-mounted weapon (fist arm)",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Heavy flamer",
         "pts": 0
        }
       ]
      },
      {
       "id": "fistw2",
       "type": "choice",
       "label": "Fist-mounted weapon (second fist)",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Heavy flamer",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [
      {
       "forbidAllOf": [
        [
         "arm2",
         "ml"
        ],
        [
         "fistw",
         "combib"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm2",
         "ml"
        ],
        [
         "fistw",
         "flamer"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm2",
         "hammer"
        ],
        [
         "fistw",
         "combib"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm2",
         "hammer"
        ],
        [
         "fistw",
         "flamer"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm2",
         "scourge"
        ],
        [
         "fistw",
         "combib"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm2",
         "scourge"
        ],
        [
         "fistw",
         "flamer"
        ]
       ],
       "message": "The fist-mounted weapon needs the Helbrute fist on that arm."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "mm"
        ],
        [
         "fistw2",
         "combib"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "mm"
        ],
        [
         "fistw2",
         "flamer"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "pc"
        ],
        [
         "fistw2",
         "combib"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "pc"
        ],
        [
         "fistw2",
         "flamer"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "tac"
        ],
        [
         "fistw2",
         "combib"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "tac"
        ],
        [
         "fistw2",
         "flamer"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "tlc"
        ],
        [
         "fistw2",
         "combib"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "tlc"
        ],
        [
         "fistw2",
         "flamer"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "thb"
        ],
        [
         "fistw2",
         "combib"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      },
      {
       "forbidAllOf": [
        [
         "arm1",
         "thb"
        ],
        [
         "fistw2",
         "flamer"
        ]
       ],
       "message": "A second fist-mounted weapon needs the multi-melta swapped for a Helbrute fist."
      }
     ],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "myphitic_blight_hauler",
     "name": "Myphitic Blight-haulers",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Smoke",
      "Myphitic Blight-hauler"
     ],
     "image": "dg_myphitic_blight_hauler",
     "baseSize": "80mm",
     "profile": {
      "M": "10\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "5+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bile spurt",
       "range": "12\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Missile launcher - frag",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Missile launcher - krak",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D6",
       "kw": []
      },
      {
       "name": "Multi-melta",
       "range": "18\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Lethal Hits",
        "Melta 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Gnashing maw",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Tank Hunters",
       "text": "Your Shooting phase: attacks against MONSTER or VEHICLE units get +1 to hit and +1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 95
      },
      {
       "models": 2,
       "pts": 190
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 or 2 Myphitic Blight-haulers: bile spurt, missile launcher, multi-melta, gnashing maw.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "foetid_bloat_drone",
     "name": "Foetid Bloat-drone",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Fly",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Foetid Bloat-drone"
     ],
     "image": "dg_foetid_bloat_drone",
     "baseSize": "60mm",
     "profile": {
      "M": "10\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "5+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plaguespitter",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Plague probe",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Fleshmower",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Hovering Death",
       "text": "This model can shoot and declare a charge in a turn in which it fell back.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 100,
       "ptsLater": 110
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Foetid Bloat-drone: fleshmower, plague probe.",
     "options": [
      {
       "id": "mower",
       "type": "choice",
       "label": "Fleshmower",
       "choices": [
        {
         "id": "mower",
         "label": "Fleshmower",
         "pts": 0
        },
        {
         "id": "spit",
         "label": "2 plaguespitters",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "foetid_bloat_drone_hbl",
     "name": "Foetid Bloat-drone with Heavy Blight Launcher",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Fly",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Foetid Bloat-drone",
      "Foetid Bloat-drone with Heavy Blight Launcher"
     ],
     "image": "dg_foetid_bloat_drone_hbl",
     "baseSize": "60mm",
     "profile": {
      "M": "10\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "5+",
      "W": "10",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy blight launcher",
       "range": "36\"",
       "A": "D6+2",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      }
     ],
     "melee": [
      {
       "name": "Plague probe",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Explosive Blight",
       "text": "Your Shooting phase: when this model's attack destroys an enemy unit, roll D6 before removing its last model (+1 if it was Afflicted). On a 5+ every enemy unit within 6\" of that model is Afflicted until the start of your next turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 125,
       "ptsLater": 135
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Foetid Bloat-drone: heavy blight launcher, plague probe.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "plagueburst_crawler",
     "name": "Plagueburst Crawler",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Chaos",
      "Nurgle",
      "Daemon",
      "Plagueburst Crawler",
      "Frame"
     ],
     "image": "dg_plagueburst_crawler",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "2+",
      "InSv": "5+",
      "W": "12",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Plagueburst mortar",
       "range": "48\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Indirect Fire",
        "Lethal Hits"
       ]
      },
      {
       "name": "Rothail volley gun",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Heavy slugger",
       "range": "36\"",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Entropy cannon",
       "range": "36\"",
       "A": "1",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Plaguespitter",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Spore-laced Shock Waves",
       "text": "Your Shooting phase, when it targets a unit with its Plagueburst mortar: roll D6 for that unit and each other enemy unit within 3\" of it (+1 if Afflicted). On a 6+ that unit suffers D3 mortal wounds after the mortar attacks are resolved.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 170,
       "ptsLater": 200
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Plagueburst Crawler: 2 entropy cannons, heavy slugger, Plagueburst mortar, armoured tracks.",
     "options": [
      {
       "id": "cannons",
       "type": "choice",
       "label": "Entropy cannons",
       "choices": [
        {
         "id": "ent",
         "label": "2 entropy cannons",
         "pts": 0
        },
        {
         "id": "spit",
         "label": "2 plaguespitters",
         "pts": 0
        }
       ]
      },
      {
       "id": "slugger",
       "type": "choice",
       "label": "Heavy slugger",
       "choices": [
        {
         "id": "slug",
         "label": "Heavy slugger",
         "pts": 0
        },
        {
         "id": "rothail",
         "label": "Rothail volley gun",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_land_raider",
     "name": "Chaos Land Raider",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Chaos",
      "Nurgle",
      "Transport",
      "Smoke",
      "Land Raider",
      "Frame"
     ],
     "image": "dg_chaos_land_raider",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "12",
      "Sv": "2+",
      "InSv": "—",
      "W": "16",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Soulshatter lascannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Twin heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Sustained Hits 1",
        "Twin-linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "8",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Assault Ramp",
       "text": "A unit that disembarks after this model made a Normal move makes an assault disembark move.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 220,
       "ptsLater": 240
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Chaos Land Raider: 2 soulshatter lascannons, twin heavy bolter, armoured tracks.",
     "options": [
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 14 DEATH GUARD INFANTRY models. Each TERMINATOR model takes the space of 2."
    },
    {
     "id": "chaos_predator_annihilator",
     "name": "Chaos Predator Annihilator",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Nurgle",
      "Predator Annihilator",
      "Frame"
     ],
     "image": "dg_chaos_predator_annihilator",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "11",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Predator twin lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Twin-linked"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Metalophagic Infection",
       "text": "Your Shooting phase, after this model shoots: pick one MONSTER or VEHICLE unit it hit and roll D6 (+1 if Afflicted). On a 5+ it suffers D3 mortal wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 130,
       "ptsLater": 140
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Chaos Predator Annihilator: Predator twin lascannon, armoured tracks.",
     "options": [
      {
       "id": "sponsons",
       "type": "choice",
       "label": "Sponsons",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "las",
         "label": "2 lascannons",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "2 heavy bolters",
         "pts": 0
        }
       ]
      },
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_predator_destructor",
     "name": "Chaos Predator Destructor",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Chaos",
      "Nurgle",
      "Smoke",
      "Predator Destructor",
      "Frame"
     ],
     "image": "dg_chaos_predator_destructor",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "11",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Predator autocannon",
       "range": "48\"",
       "A": "4",
       "skill": "3+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Lascannon",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Hail of Corrosive Disease",
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit (not MONSTER or VEHICLE) it hit. Until the end of the phase, friendly DEATH GUARD ranged attacks against it get +1 AP (once per phase per enemy unit).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 140,
       "ptsLater": 150
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Chaos Predator Destructor: Predator autocannon, armoured tracks.",
     "options": [
      {
       "id": "sponsons",
       "type": "choice",
       "label": "Sponsons",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "2 heavy bolters",
         "pts": 0
        },
        {
         "id": "las",
         "label": "2 lascannons",
         "pts": 0
        }
       ]
      },
      {
       "id": "pintle",
       "type": "choice",
       "label": "Pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "defiler",
     "name": "Defiler",
     "role": "vehicle",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Defiler"
     ],
     "image": "dg_defiler",
     "baseSize": "160mm",
     "profile": {
      "M": "12\"",
      "T": "11",
      "Sv": "3+",
      "InSv": "5+",
      "W": "18",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 6,
      "text": "While it has 1-6 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Heavy missile launcher - frag",
       "range": "48\"",
       "A": "2D6",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Heavy missile launcher - krak",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "D6+1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Hades lascannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Heavy reaper autocannon",
       "range": "48\"",
       "A": "4",
       "skill": "3+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Lethal Hits",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Hades battle cannon",
       "range": "48\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "10",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Ectoplasma destructor",
       "range": "36\"",
       "A": "D6",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      },
      {
       "name": "Heavy baleflamer",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Excruciator cannon",
       "range": "36\"",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Magma cutter",
       "range": "12\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Lethal Hits",
        "Melta 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Shearing claws - strike",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "16",
       "AP": "-3",
       "D": "D6+1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Shearing claws - sweep",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Electroscourge",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "12",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Sustained Hits 2"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Scuttling Walker",
       "text": "On Normal, Advance and Fall Back moves it can move through models (not TITANIC) and terrain, crossing Engagement Range without ending there; it automatically passes Desperate Escape tests.",
       "kind": "datasheet"
      },
      {
       "name": "Barrage of Filth",
       "text": "Your Shooting phase, after this model shoots: one enemy unit it hit cannot have the benefit of cover until the end of the phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 300,
       "ptsLater": 350
      }
     ],
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Defiler: Hades battle cannon, 2 excruciator cannons, heavy missile launcher, heavy baleflamer, shearing claws.",
     "options": [
      {
       "id": "main",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "hbc",
         "label": "Hades battle cannon",
         "pts": 0
        },
        {
         "id": "ecto",
         "label": "Ectoplasma destructor",
         "pts": 0
        }
       ]
      },
      {
       "id": "excr",
       "type": "choice",
       "label": "Hull guns",
       "choices": [
        {
         "id": "excr",
         "label": "2 excruciator cannons",
         "pts": 0
        },
        {
         "id": "magma",
         "label": "2 magma cutters",
         "pts": 0
        }
       ]
      },
      {
       "id": "flamer",
       "type": "choice",
       "label": "Heavy baleflamer",
       "choices": [
        {
         "id": "bale",
         "label": "Heavy baleflamer",
         "pts": 0
        },
        {
         "id": "las",
         "label": "Hades lascannon",
         "pts": 15
        },
        {
         "id": "reaper",
         "label": "Heavy reaper autocannon",
         "pts": 15
        },
        {
         "id": "scourge",
         "label": "Electroscourge",
         "pts": 0
        }
       ]
      },
      {
       "id": "hml",
       "type": "choice",
       "label": "Heavy missile launcher",
       "choices": [
        {
         "id": "hml",
         "label": "Heavy missile launcher",
         "pts": 0
        },
        {
         "id": "las",
         "label": "Hades lascannon",
         "pts": 15
        },
        {
         "id": "reaper",
         "label": "Heavy reaper autocannon",
         "pts": 15
        },
        {
         "id": "scourge",
         "label": "Electroscourge",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [
      {
       "forbidAllOf": [
        [
         "flamer",
         "scourge"
        ],
        [
         "hml",
         "scourge"
        ]
       ],
       "message": "Only one electroscourge."
      }
     ],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_rhino",
     "name": "Chaos Rhino",
     "role": "transport",
     "faction": "Death Guard",
     "keywords": [
      "Vehicle",
      "Transport",
      "Dedicated Transport",
      "Smoke",
      "Chaos",
      "Nurgle",
      "Rhino",
      "Frame"
     ],
     "image": "dg_chaos_rhino",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "10",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Havoc launcher",
       "range": "48\"",
       "A": "D6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Armoured tracks",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Firing Deck 2"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Fire Support",
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit it hit. Until the end of the phase, models that disembarked from it this turn can re-roll wound rolls against that unit.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 75,
       "ptsLater": 85
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Chaos Rhino: combi-bolter, armoured tracks.",
     "options": [
      {
       "id": "extra",
       "type": "choice",
       "label": "Extra pintle weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "combib",
         "label": "Combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 DEATH GUARD INFANTRY models. Cannot carry TERMINATOR models."
    },
    {
     "id": "miasmic_malignifier",
     "name": "Miasmic Malignifier",
     "role": "other",
     "faction": "Death Guard",
     "keywords": [
      "Fortification",
      "Chaos",
      "Nurgle",
      "Miasmic Malignifier",
      "Frame"
     ],
     "image": "dg_miasmic_malignifier",
     "baseSize": "Use model",
     "profile": {
      "M": "-",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "12",
      "OC": "0",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Miasmic gouts",
       "range": "9\"",
       "A": "2D6",
       "skill": "—",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Nurgle's Gift (Aura)"
     ],
     "abilities": [
      {
       "name": "Putrescent Fog (Aura)",
       "text": "Enemy units arriving as Reinforcements cannot be set up within 12\" of this model.",
       "kind": "datasheet"
      },
      {
       "name": "Diseased Cover",
       "text": "A model that is not fully visible to the attacking unit because of this Fortification has the benefit of cover against that ranged attack.",
       "kind": "datasheet"
      },
      {
       "name": "Deployment",
       "text": "Deploy both parts within 1\" of each other; together they count as a single model.",
       "kind": "datasheet"
      },
      {
       "name": "Fortification",
       "text": "While an enemy unit is only within Engagement Range of your FORTIFICATIONS, it can still be shot (non-Pistol attacks get -1 to hit), and its models do not take Desperate Escape tests for falling back while battle-shocked (unless moving over enemy models).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 105
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Miasmic Malignifier (two parts, set up within 1\" of each other): miasmic gouts.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "great_unclean_one",
     "name": "Great Unclean One",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Monster",
      "Character",
      "Psyker",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Great Unclean One",
      "Summoned"
     ],
     "image": "dg_great_unclean_one",
     "baseSize": "130mm",
     "profile": {
      "M": "7\"",
      "T": "12",
      "Sv": "5+",
      "InSv": "4+",
      "W": "20",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 7,
      "text": "While it has 1-7 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Putrid vomit",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Plague flail",
       "range": "6\"",
       "A": "D6+1",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Bileblade",
       "range": "Melee",
       "A": "3",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Lethal Hits"
       ]
      },
      {
       "name": "Bilesword - strike",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "10",
       "AP": "-2",
       "D": "D6+1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Bilesword - sweep",
       "range": "Melee",
       "A": "12",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Doomsday bell",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Reverberating Summons"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike",
      "Feel No Pain 6+"
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Daemon Lord of Nurgle (Aura)",
       "text": "Friendly PLAGUE LEGIONS units within 6\" get +1 Toughness.",
       "kind": "datasheet"
      },
      {
       "name": "Nurgle’s Rot (Psychic)",
       "text": "End of your Movement phase: pick one enemy unit within 12\". Until the start of your next Movement phase it is rotted: -1 Toughness.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 265,
       "ptsLater": 280
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Great Unclean One: plague flail, putrid vomit, bilesword.",
     "options": [
      {
       "id": "flail",
       "type": "choice",
       "label": "Plague flail",
       "choices": [
        {
         "id": "flail",
         "label": "Plague flail",
         "pts": 0
        },
        {
         "id": "bileblade",
         "label": "Bileblade",
         "pts": 0
        }
       ]
      },
      {
       "id": "sword",
       "type": "choice",
       "label": "Bilesword",
       "choices": [
        {
         "id": "sword",
         "label": "Bilesword",
         "pts": 0
        },
        {
         "id": "bell",
         "label": "Doomsday bell",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "rotigus",
     "name": "Rotigus",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Monster",
      "Character",
      "Epic Hero",
      "Psyker",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Rotigus",
      "Summoned"
     ],
     "image": "dg_rotigus",
     "baseSize": "130mm",
     "profile": {
      "M": "7\"",
      "T": "12",
      "Sv": "5+",
      "InSv": "4+",
      "W": "22",
      "OC": "5",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 7,
      "text": "While it has 1-7 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Streams of brackish filth",
       "range": "12\"",
       "A": "2D6",
       "skill": "—",
       "S": "8",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Gnarlrod - strike",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Lethal Hits",
        "Psychic"
       ]
      },
      {
       "name": "Gnarlrod - sweep",
       "range": "Melee",
       "A": "14",
       "skill": "2+",
       "S": "8",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits",
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike",
      "Feel No Pain 6+"
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Virulent Blessing (Psychic)",
       "text": "Start of the Fight phase: pick one visible enemy unit within 24\". Until the end of the phase, attacks by PLAGUE LEGIONS models allocated to it get +1 Damage.",
       "kind": "datasheet"
      },
      {
       "name": "Deluge of Nurgle (Aura)",
       "text": "Enemy units within 6\" get -2\" Move and -1 OC.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 280
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Rotigus (Epic Hero): streams of brackish filth, gnarlrod.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "plaguebearers",
     "name": "Plaguebearers",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Infantry",
      "Battleline",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Plaguebearers",
      "Summoned"
     ],
     "image": "dg_plaguebearers",
     "baseSize": "32mm",
     "profile": {
      "M": "5\"",
      "T": "5",
      "Sv": "7+",
      "InSv": "5+",
      "W": "2",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Plaguesword",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Infected Outbreak",
       "text": "End of your Command phase: if this unit is within range of an objective you control, it stays yours until your opponent's Level of Control over it is higher at the end of a phase.",
       "kind": "datasheet"
      },
      {
       "name": "Daemonic Icon",
       "text": "Models in the bearer's unit have Leadership 6+.",
       "kind": "wargear"
      },
      {
       "name": "Instrument of Chaos",
       "text": "+1 to charge rolls for the bearer's unit.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 115
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Plagueridden and 9 Plaguebearers: plaguesword.",
     "options": [
      {
       "id": "icon",
       "type": "toggle",
       "label": "Daemonic icon"
      },
      {
       "id": "instrument",
       "type": "toggle",
       "label": "Instrument of Chaos"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "plague_drones",
     "name": "Plague Drones",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Mounted",
      "Fly",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Summoned",
      "Plague Drones"
     ],
     "image": "dg_plague_drones",
     "baseSize": "60mm (flying base)",
     "profile": {
      "M": "10\"",
      "T": "8",
      "Sv": "6+",
      "InSv": "5+",
      "W": "5",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Death's heads",
       "range": "12\"",
       "A": "D3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast",
        "Lethal Hits"
       ]
      }
     ],
     "melee": [
      {
       "name": "Foul mouthparts",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Extra Attacks",
        "Lethal Hits"
       ]
      },
      {
       "name": "Plaguesword",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Death’s Heads",
       "text": "Your Shooting phase, after this unit shoots: pick one enemy unit it hit. Until the end of the turn, friendly PLAGUE LEGIONS attacks against it can re-roll the wound roll.",
       "kind": "datasheet"
      },
      {
       "name": "Daemonic Icon",
       "text": "Models in the bearer's unit have Leadership 6+.",
       "kind": "wargear"
      },
      {
       "name": "Instrument of Chaos",
       "text": "+1 to charge rolls for the bearer's unit.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 110
      },
      {
       "models": 6,
       "pts": 220
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Plaguebringer and 2 or 5 Plague Drones: death's heads, foul mouthparts, plaguesword.",
     "options": [
      {
       "id": "icon",
       "type": "toggle",
       "label": "Daemonic icon"
      },
      {
       "id": "instrument",
       "type": "toggle",
       "label": "Instrument of Chaos"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "beasts_of_nurgle",
     "name": "Beasts of Nurgle",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Beast",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Summoned",
      "Beasts of Nurgle"
     ],
     "image": "dg_beasts_of_nurgle",
     "baseSize": "60mm",
     "profile": {
      "M": "6\"",
      "T": "9",
      "Sv": "6+",
      "InSv": "5+",
      "W": "7",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Putrid appendages",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Deep Strike",
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Grotesque Regeneration",
       "text": "At the end of each phase, each Beast of Nurgle that lost wounds but was not destroyed regains all of them.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 70
      },
      {
       "models": 2,
       "pts": 140
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 or 2 Beasts of Nurgle: putrid appendages.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "nurglings",
     "name": "Nurglings",
     "role": "allies",
     "faction": "Plague Legions",
     "keywords": [
      "Swarm",
      "Chaos",
      "Daemon",
      "Nurgle",
      "Summoned",
      "Nurglings"
     ],
     "image": "dg_nurglings",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "3",
      "Sv": "7+",
      "InSv": "5+",
      "W": "4",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Diseased claws and teeth",
       "range": "Melee",
       "A": "4",
       "skill": "5+",
       "S": "2",
       "AP": "0",
       "D": "1",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Infiltrators"
     ],
     "factionAbilities": [
      "Pact of Decay"
     ],
     "abilities": [
      {
       "name": "Mischief Makers (Aura)",
       "text": "Each time an enemy unit (not TITAN) engaged with this unit is selected to fight, its melee attacks get -1 to hit until the end of the phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 45
      },
      {
       "models": 6,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Nurgling Swarms: diseased claws and teeth.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    }
   ]
  }
 }
};
if (typeof module !== "undefined") module.exports = DATA;
