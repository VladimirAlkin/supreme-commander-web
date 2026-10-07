const DATA = {
 "meta": {
  "dataVersion": "2026-10-02-mfm15-fp13",
  "factionVersions": {
   "worldEaters": "2026-10-02-mfm15-fp13",
   "tyranids": "2026-10-03-mfm15-fp12",
   "deathGuard": "2026-10-04-mfm15-fp13",
   "thousandSons": "2026-10-04-mfm15-fp13",
   "adeptaSororitas": "2026-10-05-mfm15-fp12"
  },
  "stamp": "Data as of: MFM v1.5 (30/09/2026), Faction Packs World Eaters v1.3, Tyranids v1.2, Death Guard v1.3, Thousand Sons v1.3, Adepta Sororitas v1.2 and Imperial Agents v1.1, GDM data v972 (02/10/2026). Checked 05.10.2026",
  "checked": "2026-10-05"
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
   "Reverberating Summons": "Each time this weapon destroys a model, you can return 1 destroyed Plaguebearer to a friendly PLAGUEBEARERS unit within 12\" of the bearer.",
   "Cabal of Sorcerers": "Thousand Sons army rule. At the start of your Shooting phase each model with it can attempt one Ritual (each Ritual once per turn): roll 2D6 (optionally a third D6 to Channel the Warp) and beat the Warp Charge. See Army Rules.",
   "Pact of Sorcery": "SCINTILLATING LEGIONS cannot be your Army Faction. Thousand Sons can field them with the Changehost of Deceit detachment.",
   "Psychic Test": "Roll 2D6 (plus one more D6 if you Channel the Warp). If you Channelled and rolled any double or triple, the model's unit suffers D3 mortal wounds. The total must equal or beat the Ritual's Warp Charge.",
   "Acts of Faith": "Adepta Sororitas army rule. Each unit with it can replace one dice roll per phase (Advance, Battle-shock, Charge, Damage, Hit, Save or Wound) with a Miracle dice from your pool. See Army Rules.",
   "Miracle dice": "Gained at the start of each turn and each time one of your ADEPTA SORORITAS units is destroyed: roll a D6, that is its fixed value. Spent by Acts of Faith; it counts as an unmodified roll of that value.",
   "Assigned Agents": "An army whose models all have IMPERIUM can include AGENTS OF THE IMPERIUM units without a detachment: Incursion 1 RETINUE, 1 CHARACTER, 1 REQUISITIONED; Strike Force 2/2/1; Onslaught 3/3/2."
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
     "label": "ICON OF KHORNE",
     "tone": "gore",
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
   },
   "logo": "dg_logo",
   "rosterIcon": "dg_roster"
  },
  {
   "id": "thousandSons",
   "name": "Thousand Sons",
   "enabled": true,
   "theme": {
    "bg": "#0f2340",
    "bg2": "#1f4f8a",
    "bgDeep": "#050b16",
    "accent": "#d8b45a",
    "accent2": "#3fb6c9",
    "panel": "rgba(6,14,30,.82)",
    "card1": "#173a68",
    "card2": "#081428",
    "icon1": "#0f2340",
    "icon2": "#050b16"
   },
   "emblemSvg": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#0b1a33\"/><circle cx=\"32\" cy=\"32\" r=\"9\" fill=\"none\" stroke=\"#d8b45a\" stroke-width=\"3.4\"/><path d=\"M32 6v13M32 45v13M6 32h13M45 32h13M13.6 13.6l9.2 9.2M41.2 41.2l9.2 9.2M50.4 13.6l-9.2 9.2M22.8 41.2l-9.2 9.2\" stroke=\"#d8b45a\" stroke-width=\"3.2\" stroke-linecap=\"round\"/></svg>",
   "logo": "ts_logo",
   "rosterIcon": "ts_roster",
   "highlights": [
    {
     "id": "cabal",
     "label": "CABAL",
     "tone": "arcane",
     "title": "Can attempt a Ritual in your Shooting phase (Cabal of Sorcerers).",
     "none": "No unit can attempt Rituals",
     "unitIds": {
      "magnus_the_red": "Up to two Rituals per turn, +2 to the Psychic test.",
      "ahriman": "+1 to the Psychic test.",
      "exalted_sorcerer": "",
      "exalted_sorcerer_on_disc_of_tzeentch": "",
      "infernal_master": "",
      "sorcerer": "",
      "sorcerer_in_terminator_armour": "",
      "daemon_prince_of_tzeentch": "",
      "daemon_prince_of_tzeentch_with_wings": "",
      "tzaangor_shaman": "",
      "rubric_marines": "The Aspiring Sorcerer attempts the Ritual.",
      "scarab_occult_terminators": "The Scarab Occult Sorcerer attempts the Ritual."
     },
     "detachments": {
      "changehost_of_deceit": {
       "factionsAll": [
        "Scintillating Legions"
       ],
       "keywordsAll": [
        "Psyker"
       ],
       "cond": true,
       "note": "Mortal Sorcery: has Cabal of Sorcerers while within 6\" of a friendly THOUSAND SONS unit."
      }
     }
    },
    {
     "id": "dust",
     "label": "ALL IS DUST",
     "tone": "gold",
     "title": "All Is Dust: +1 to armour saves against attacks with an unmodified Damage of 1.",
     "none": "No RUBRICAE units",
     "detachments": {
      "rubricae_phalanx": {
       "keywordsAll": [
        "Rubricae"
       ],
       "note": "All Is Dust: +1 to armour saves against Damage 1 attacks."
      }
     }
    }
   ],
   "abilityTips": {
    "Cabal of Sorcerers": "Start of your Shooting phase: attempt Rituals with a Psychic test (2D6, optionally +1D6 to Channel the Warp). Each model and each Ritual once per turn. See Army Rules.",
    "Pact of Sorcery": "SCINTILLATING LEGIONS join a Thousand Sons army only through Changehost of Deceit (points cap by battle size)."
   }
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
   "id": "adeptaSororitas",
   "name": "Adepta Sororitas",
   "enabled": true,
   "theme": {
    "bg": "#18202b",
    "bg2": "#3c5a78",
    "bgDeep": "#090c11",
    "accent": "#d4af5a",
    "accent2": "#b02a35",
    "panel": "rgba(9,12,17,.82)",
    "card1": "#26364a",
    "card2": "#090c11",
    "icon1": "#26364a",
    "icon2": "#090c11"
   },
   "emblemSvg": "<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"30\" fill=\"#18202b\"/><path d=\"M32 9c5 6 7 12 4 19 6-5 13-4 15 1-6-1-10 2-11 7h-16c-1-5-5-8-11-7 2-5 9-6 15-1-3-7-1-13 4-19z\" fill=\"#d4af5a\"/><rect x=\"20\" y=\"37\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#d4af5a\"/><path d=\"M28 41h8l-4 12z\" fill=\"#d4af5a\"/></svg>",
   "logo": "as_logo",
   "rosterIcon": "as_roster",
   "highlights": [
    {
     "id": "miracle",
     "label": "MIRACLE",
     "tone": "gold",
     "title": "Brings extra Miracle dice into your pool.",
     "none": "No unit brings extra Miracle dice",
     "unitIds": {
      "battle_sisters_squad": "Cherub: once per battle +1 die after an Act of Faith. Simulacrum Imperialis (if taken): end of your Command phase, D6 per objective you control with it, 4+ is a die of that value.",
      "dominion_squad": "Cherub: once per battle +1 die after an Act of Faith. Simulacrum Imperialis (if taken) on objectives.",
      "retributor_squad": "Cherubs: twice per battle +1 die after an Act of Faith.",
      "sanctifiers": "Cherub: once per battle +1 die after an Act of Faith. Simulacrum Imperialis (if taken) on objectives.",
      "aestred_thurga_and_agathae_dolan": "Agathae Dolan: +1 die each time the unit she leads destroys an enemy unit, D3 dice when she dies.",
      "morvenn_vahl": "+1 die each time she destroys an enemy unit.",
      "triumph_of_saint_katherine": "Solemn Procession: the die of the first turn of each battle round is a 6."
     },
     "conditional": {
      "sisters_novitiate_squad": "Simulacrum Imperialis (if taken): D6 per objective you control with it, 4+ is a die of that value.",
      "celestian_insidiants": "Simulacrum Imperialis (if taken): D6 per objective you control with it, 4+ is a die of that value."
     },
     "enhancements": {
      "saintly_example": "Saintly Example: +D3 dice when the bearer dies.",
      "litanies_of_faith": "Litanies of Faith: Leadership test each Command phase, +1 die if passed.",
      "blade_of_saint_ellynor": "Blade of Saint Ellynor: +1 die when the bearer kills a model in a fight.",
      "psalm_of_righteous_judgement": "Psalm: swap a die for a 6 when a PENITENT unit destroys an enemy unit.",
      "divine_aspect": "Divine Aspect: +1 die if the enemy fails the Battle-shock test."
     }
    },
    {
     "id": "righteous",
     "label": "RIGHTEOUS",
     "tone": "blood",
     "playSel": "righteous",
     "title": "Champions of Faith: pick up to 3 units in your Command phase.",
     "none": "No unit gets the BS/WS bonus",
     "detachments": {
      "champions_of_faith": {
       "unitIds": [
        "battle_sisters_squad",
        "celestian_insidiants",
        "celestian_sacresants",
        "paragon_warsuits"
       ],
       "cond": true,
       "note": "If picked as Righteous: +1\" Move, +1 Ld and +1 BS/WS."
      }
     }
    },
    {
     "id": "penitent",
     "label": "PENITENT",
     "tone": "gore",
     "title": "Penitent Host: Vows of Atonement and Stratagems work on PENITENT units.",
     "none": "No PENITENT units",
     "detachments": {
      "penitent_host": {
       "keywordsAll": [
        "Penitent"
       ],
       "note": "Gets the Vow of Atonement active this battle round."
      }
     }
    },
    {
     "id": "celestian",
     "label": "HOLY QUEST",
     "tone": "steel",
     "title": "Sacred Champions: CELESTIAN attacks get +1 BS and WS.",
     "none": "No CELESTIAN units",
     "detachments": {
      "sacred_champions": {
       "keywordsAll": [
        "Celestian"
       ],
       "note": "Holy Quest: +1 BS and WS."
      }
     }
    }
   ],
   "abilityTips": {
    "Acts of Faith": "Once per phase this unit can replace one Advance, Battle-shock, Charge, Damage, Hit, Save or Wound roll with a Miracle dice from your pool. See Army Rules.",
    "Assigned Agents": "AGENTS OF THE IMPERIUM ally: no detachment needed, limited by battle size (RETINUE / CHARACTER / REQUISITIONED). Cannot be your Warlord."
   }
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
      "If your Army Faction is WORLD EATERS, at the start of the battle round, you can make a Blessings of Khorne roll. To do so, roll eight D6. You can then use those dice to activate up to two Blessings of Khorne (see below). Each Blessing of Khorne specifies the dice results it requires (where a number is specified, a double or triple of that value or higher is required). You can only activate each Blessing of Khorne once per battle round. Any unused dice from the Blessings of Khorne roll are then discarded. Once activated, each Blessing of Khorne applies to all units from your army with this ability until the end of the battle round."
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
       "effect": "This unit has +1 to charge rolls."
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
       "effect": "Each time a model in this unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\"."
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
       "effect": "Each time a model in this unit is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
       "text": "Each time a model in this unit is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play."
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
       "effect": "Melee weapons equipped by models in this unit have the [SUSTAINED HITS 1] ability."
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
       "effect": "Melee weapons equipped by models in this unit have the [LETHAL HITS] ability."
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
       "effect": "Each time a model in this unit makes a melee attack that targets an INFANTRY unit, that attack has the [DEVASTATING WOUNDS] ability."
      }
     ]
    },
    {
     "id": "pact",
     "name": "Pact of Blood",
     "text": "When mustering your army, unless specifically stated otherwise, you cannot select BLOOD LEGIONS as your Army Faction."
    }
   ],
   "detachments": [
    {
     "id": "berzerker_warband",
     "name": "Berzerker Warband",
     "dp": 2,
     "tags": [],
     "summary": "Each time a WORLD EATERS unit makes a Charge move, until the end of the turn its melee weapons get +1 Attacks and +2 Strength.",
     "rule": {
      "name": "Relentless Rage",
      "text": "Each time a WORLD EATERS unit from your army makes a Charge move, until the end of the turn, add 1 to the Attacks characteristic and add 2 to the Strength characteristic of melee weapons equipped by models in that unit."
     },
     "buffs": [
      {
       "target": "melee",
       "stat": "A",
       "add": 1,
       "condition": "after_charge",
       "duration": "end_of_turn"
      },
      {
       "target": "melee",
       "stat": "S",
       "add": 2,
       "condition": "after_charge",
       "duration": "end_of_turn"
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
       "text": "WORLD EATERS model only. Add 1 to the Attacks characteristic and add 1 to the Damage characteristic of melee weapons equipped by the bearer (excluding weapons with the [EXTRA ATTACKS] ability).",
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
       "when": "Any phase.",
       "target": "One World Eaters unit from your army that was just destroyed while it was within range of one or more objective markers you controlled at the end of the previous phase. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "Select one of those objective markers. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase."
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
       "target": "One World Eaters unit from your army that has not been selected to fight this phase and that made a charge move this turn.",
       "effect": "Until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1."
      },
      {
       "id": "frenzied_resilience",
       "name": "Frenzied Resilience",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One World Eaters unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack."
      },
      {
       "id": "skulls_for_the_skull_throne",
       "name": "Skulls for the Skull Throne!",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after a WORLD EATERS unit from your army destroys a CHARACTER or MONSTER model.",
       "target": "That World Eaters unit.",
       "effect": "Make a Blessings of Khorne roll and use the results to activate one Blessing of Khorne. Until the end of the battle round, that Blessing of Khorne is active in addition to any other Blessings of Khorne that are currently active."
      },
      {
       "id": "apoplectic_frenzy",
       "name": "Apoplectic Frenzy",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after a KHORNE BERZERKERS unit from your army is selected to Advance.",
       "target": "That Khorne Berzerkers unit.",
       "effect": "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced."
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
       "when": "Any phase.",
       "target": "One World Eaters Monster or World Eaters Titanic unit from your army that was just destroyed by an enemy unit. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "Until the end of the battle, each time a model in a Jakhals or Goremongers unit from your army makes an attack that targets the enemy unit that just destroyed your unit, you can re-roll the Hit roll."
      },
      {
       "id": "drawn_to_the_slaughter",
       "name": "Drawn to the Slaughter",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One Jakhals unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.",
       "restrictions": "This Stratagem cannot be used to return destroyed Character units to Attached units. You can only use this Stratagem once per battle."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Jakhals or Goremongers unit from your army that was selected as the target as one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within 6\" of one or more friendly World Eaters Monster units, or within 9\" of one or more friendly World Eaters Titanic units, your unit has the Feel No Pain 5+ ability instead."
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
       "target": "One Jakhals or Goremongers unit from your army that has not been selected to fight this phase and is within Engagement Range of one or more enemy units.",
       "effect": "Until the end of the phase, each time your unit is selected to fight, when determining which models in it are eligible to fight, any models in your unit that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit."
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
       "target": "One Jakhals or Goremongers unit from your army.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If that model’s unit is within 6\" of one or more friendly World Eaters Monster units, or within 9\" of one or more friendly World Eaters Titanic units, you can re-roll the Hit roll instead."
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
       "target": "One World Eaters Monster or World Eaters Titanic unit from your army.",
       "effect": "Select the Idol of Infinite Rage, Idol of Burning Wrath or Idol of Blessed Blood. Until the start of your next Command phase, that Idols of Khorne ability is active for your unit instead of any other Idols of Khorne ability that is active for your army, even if you have already selected that ability this battle.",
       "restrictions": "You can only use this Stratagem once per battle."
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
      "text": "WORLD EATERS POSSESSED units from your army have the following ability: Brazen Fury: In your opponent’s Shooting phase , when an enemy unit has shot , if a model in this unit was destroyed as a result of those attacks, this unit can make a surge move of up to D6\"."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One World Eaters Possessed unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll."
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
       "target": "One World Eaters Possessed unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time an attack made by a model in your unit is allocated to an enemy model, if your unit has the Eightbound keyword and that enemy model is not a MONSTER or VEHICLE, add 1 to the Damage characteristic of that attack. If your unit has the Exalted Eightbound keyword and that enemy model is a MONSTER or VEHICLE, add 1 to the Damage characteristic of that attack instead."
      },
      {
       "id": "immortal_fury",
       "name": "Immortal Fury",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One World Eaters Possessed unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
      },
      {
       "id": "rapid_manifestation",
       "name": "Rapid Manifestation",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One Exalted Eightbound unit from your army that is arriving using the Deep Strike ability this phase.",
       "effect": "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units.",
       "restrictions": "A unit targeted with this Stratagem is not eligible to declare a charge in the same turn."
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
       "when": "Your Movement phase or your Charge phase.",
       "target": "One World Eaters Possessed unit from your army that has not been selected to move or declare a charge this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a Normal, Advance, Fall Back or Charge move, it can move through enemy models (excluding MONSTERS and VEHICLES). When doing so, it can move within Engagement Range of such models but, unless that move was a Charge move, it cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed."
      },
      {
       "id": "horrifying_violence",
       "name": "Horrifying Violence",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your opponent’s Command phase.",
       "target": "One World Eaters Possessed unit from your army.",
       "effect": "Each enemy unit within Engagement Range of your unit must take a Battle-shock test, subtracting 1 from that test."
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
       "text": "BLOOD LEGIONS or WORLD EATERS model only. The bearer has a 2+ Save. If the bearer is destroyed, gain 1 BTP.",
       "eligible": {
        "keywordsAny": [
         "BLOOD LEGIONS",
         "WORLD EATERS"
        ]
       },
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
       "when": "Any phase, when the last model in a unit is destroyed, before removing it from play. (If that unit is a Transport, any units embarked within that TRANSPORT model must disembark first.)",
       "target": "One Bloodletters unit from your army that is in Reserves.",
       "effect": "Set your unit up anywhere on the battlefield wholly within 9\" of that destroyed model and more than 6\" horizontally away from all enemy units, then remove the destroyed model from play.",
       "restrictions": "You cannot use this Stratagem more than once per battle round."
      },
      {
       "id": "daemonic_fury",
       "name": "Daemonic Fury",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Start of your Fight phase.",
       "target": "One Blood Legions unit from your army.",
       "effect": "Select one friendly World Eaters unit within 6\" of your unit. Until the end of the turn, melee weapons equipped by models in your WORLD EATERS unit have the [LANCE] ability. If the Daemonic Rage ability is active for your army, then until the end of the phase those melee weapons also have the [TWIN-LINKED] ability."
      },
      {
       "id": "a_worthy_skull",
       "name": "A Worthy Skull",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after a Blood Legions or World Eaters unit from your army has fought, and one or more enemy CHARACTER or MONSTER models were destroyed as a result of those attacks.",
       "target": "That BLOOD LEGIONS or WORLD EATERS unit.",
       "effect": "You gain D3BTP and you can then spend one or more BTP you have to activate one of the Blood Tithe abilities."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Blood Legions unit from your army that is within 6\" of a friendly World Eaters unit that was selected as the target as one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your WORLD EATERS unit have a 5+ invulnerable save. If the Boon of Blood ability is active for your army, then until the end of the phase, models in your WORLD EATERS unit have a 4+ invulnerable save."
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
       "target": "One World Eaters unit from your army.",
       "effect": "Select one friendly Blood Legions unit within 6\" of your unit. One destroyed Mounted model, up to D3 destroyed Beast models, or up to D6 destroyed Infantry models are returned to that BLOOD LEGIONS unit with their full wounds remaining.",
       "restrictions": "This Stratagem cannot be used to return destroyed Character models to Attached units."
      },
      {
       "id": "murder_call",
       "name": "Murder-call",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase.",
       "target": "One Blood Legions unit from your army that is on the battlefield and not within Engagement Range of one or more enemy units.",
       "effect": "Remove your unit from the battlefield and place it into Strategic Reserves."
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
      "text": "Each time a WORLD EATERS unit from your army disembarks from a TRANSPORT , until the end of the turn, add 1 to Charge rolls made for that unit and that unit’s melee weapons have the [lance] ability."
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
       "target": "One World Eaters Infantry unit from your army and one friendly Transport that it is able to embark within.",
       "effect": "If your WORLD EATERS INFANTRY unit is wholly within 6\" of that TRANSPORT, it can embark within it."
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
       "target": "One World Eaters Vehicle model from your army that has not been selected to move this phase.",
       "effect": "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features."
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
       "target": "One World Eaters Rhino model from your army that has not been selected to move this phase.",
       "effect": "One WORLD EATERS unit embarked within your RHINO can disembark. When doing so, models in that unit can be set up anywhere on the battlefield wholly within 6\" of your RHINO and can be set up within Engagement Range of one or more enemy units."
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
       "target": "One World Eaters Rhino model from your army that has not been selected to move this phase.",
       "effect": "Until the end of the phase, each time a WORLD EATERS unit disembarks from that model after it has made a Normal move, that unit is still eligible to declare a charge this turn."
      },
      {
       "id": "unrelenting_advance",
       "name": "Unrelenting Advance",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has shot.",
       "target": "One World Eaters Vehicle model from your army that was hit by one or more of the attacking unit’s attacks.",
       "effect": "Your model can make a Normal move of up to 6\".",
       "restrictions": "A unit cannot be targeted by this Stratagem and the Fury Unleashed Stratagem in the same phase."
      },
      {
       "id": "fury_unleashed",
       "name": "Fury Unleashed",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has shot.",
       "target": "One World Eaters Rhino model from your army that has one or more wounds remaining and was hit by one or more of the attacking unit’s attacks.",
       "effect": "One Khorne Berzerkers unit embarked within your model can disembark and make a Blood Surge move.",
       "restrictions": "A unit cannot be targeted by this Stratagem and the Unrelenting Advance Stratagem in the same phase."
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
      "text": "Friendly DAEMON VEHICLE units from your army have the following ability: Terror of Khorne: At the start of the Fight phase, you can select one enemy unit engaged with this unit. That enemy unit must take a Battle-shock test, subtracting 1 from the result."
     },
     "enhancements": [
      {
       "id": "murder_forged_entity",
       "name": "Murder-forged Entity",
       "pts": 15,
       "upgrade": true,
       "text": "WORLD EATERS VEHICLE unit only. This unit has the DAEMON keyword.",
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
       "when": "Your Shooting phase or the Fight phase , when a friendly DAEMON VEHICLE unit is selected to attack .",
       "target": "That DAEMON VEHICLE unit.",
       "effect": "Your unit’s attacks can ignore modifiers to: BS . WS . Hit rolls and wound rolls ."
      },
      {
       "id": "trail_of_destruction",
       "name": "Trail of Destruction",
       "cp": 1,
       "type": "Brazen Engines",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase , when a friendly DAEMON VEHICLE unit is selected to move .",
       "target": "That DAEMON VEHICLE unit.",
       "effect": "Your unit has MOBILE ."
      },
      {
       "id": "goaded_to_fury",
       "name": "Goaded to Fury",
       "cp": 1,
       "type": "Brazen Engines",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase , when an enemy unit that targeted a friendly unengaged DAEMON VEHICLE unit (excluding TITANIC units) has shot .",
       "target": "That DAEMON VEHICLE unit.",
       "effect": "Your unit can make a surge move of up to D6\"."
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
      "text": "When a friendly WORLD EATERS CHARACTER unit (excluding EPIC HERO units) is selected to fight , that unit’s CHARACTER models’ melee attacks can have: [CLEAVE 1] ."
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
       "when": "Any phase, when a friendly WORLD EATERS CHARACTER unit (excluding EPIC HERO units) suffers a mortal wound .",
       "target": "That WORLD EATERS CHARACTER unit.",
       "effect": "Your unit has Feel No Pain 4+ against mortal wounds ."
      },
      {
       "id": "aspire_to_infamy",
       "name": "Aspire to Infamy",
       "cp": 1,
       "type": "Vessels of Wrath",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One Khorne Berzerkers or Jakhals unit from your army that has not been selected to fight this phase and is within 8\" of one or more friendly World Eaters Character models.",
       "effect": "Until the end of the phase, improve the Strength and Armour Penetration characteristics of melee weapons equipped by non-CHARACTER models in your unit by 1."
      },
      {
       "id": "punish_the_craven",
       "name": "Punish the Craven",
       "cp": 1,
       "type": "Vessels of Wrath",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent’s Movement phase, just after an enemy unit (excluding MONSTERS and VEHICLES) is selected to Fall Back.",
       "target": "One World Eaters Infantry or World Eaters Daemon Prince unit from your army within Engagement Range of that enemy unit.",
       "effect": "When that enemy unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if your unit is a VESSEL OF WRATH  unit, subtract 1 from each of those tests."
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
       "text": "TERMINATOR SQUAD only. Improve the Weapon Skill characteristic of melee weapons equipped by models in the bearer's unit by 1.",
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
       "text": "TERMINATOR SQUAD only. Add 1 to the Objective Control characteristic of models in the bearer's unit.",
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
       "effect": "Until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by models in your unit."
      },
      {
       "id": "a_trophy_for_the_throne",
       "name": "A Trophy for the Throne",
       "cp": 1,
       "type": "Butchers of Khorne",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase , when a friendly TERMINATOR SQUAD unit is selected to fight .",
       "target": "That TERMINATOR SQUAD unit.",
       "effect": "Your unit’s attacks that target a MONSTER/VEHICLE unit have +1 to wound rolls ."
      },
      {
       "id": "wrath_beyond_reason",
       "name": "Wrath Beyond Reason",
       "cp": 2,
       "type": "Butchers of Khorne",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting Phase , when an enemy unit targets a friendly TERMINATOR SQUAD unit.",
       "target": "That TERMINATOR SQUAD unit.",
       "effect": "Ranged attacks that target your unit have -1 D until that enemy unit has attacked ."
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
       "text": "At the start of the battle round, when you make a Blessings of Khorne roll, if this model is destroyed, you can use a triple 6 from that roll to use this ability instead of activating any Blessings of Khorne at the start of that battle round. If you do, this model is no longer destroyed and in the Reinforcements step of your next Movement phase, it is set up anywhere on the battlefield using its Deep Strike ability, with 8 wounds remaining.",
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
       "text": "Wrathful Presence (Aura). While a friendly WORLD EATERS unit is within 6\" of this model, you can ignore any or all modifiers to that unit’s Move characteristic and to Advance and Charge rolls made for it, and each time a model in that unit makes a melee attack, you can ignore any or all modifiers to that attack’s Weapon Skill characteristic and/or any or all modifiers to the Hit roll.",
       "kind": "datasheet"
      },
      {
       "name": "Overwhelming Wrath (Aura)",
       "text": "Wrathful Presence (Aura). An enemy unit within 6\" that is selected to fall back must pass a Leadership test or remain stationary instead.",
       "kind": "datasheet"
      },
      {
       "name": "Supreme Commander",
       "text": "If this model is in your army, it must be your WARLORD."
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
     "optionGroups": [],
     "roundPick": {
      "title": "Wrathful Presence",
      "style": "wrath",
      "who": "Angron",
      "note": "Start of each battle round: Angron takes one of these until the next battle round.",
      "deadNote": "Angron is dead. Reborn in Blood: at the start of a battle round a triple 6 from the Blessings roll can bring him back (instead of activating Blessings).",
      "options": [
       {
        "id": "favour",
        "name": "The Blood God's Favour",
        "effect": "While Angron is on the battlefield, re-roll up to 6 dice of each Blessings of Khorne roll."
       },
       {
        "id": "rage",
        "name": "Driven by Ultimate Rage",
        "effect": "Aura 6\": friendly WORLD EATERS units re-roll hit and wound rolls of 1 with melee attacks.",
        "text": "While a friendly WORLD EATERS unit is within 6\" of this model, you can ignore any or all modifiers to that unit’s Move characteristic and to Advance and Charge rolls made for it, and each time a model in that unit makes a melee attack, you can ignore any or all modifiers to that attack’s Weapon Skill characteristic and/or any or all modifiers to the Hit roll."
       },
       {
        "id": "wrath",
        "name": "Overwhelming Wrath",
        "effect": "Aura 6\": an enemy unit selected to fall back must pass a Leadership test or stay where it is."
       }
      ]
     },
     "compositionNote": "This model is equipped with: Samni'arius and Spinegrinder."
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
     "optionGroups": [],
     "compositionNote": "This model is equipped with: plasma pistol; Gorechild."
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
     "optionGroups": [],
     "compositionNote": "This model is equipped with: bolt pistol; Coward's Bane; bladed horn."
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
       "text": "While leading a unit, models in it have Move 10\" and can move horizontally through terrain on Normal, Advance, Fall Back and Charge moves.",
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
      "Leader"
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
       "text": "If this model is attached to a WORLD EATERS POSSESSED unit during the Declare Battle Formations step, until the end of the battle, this model has the Deep Strike and Scouts 6\" abilities.",
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
     "optionGroups": [],
     "compositionNote": "This model is equipped with: lacerator and daemonic claw."
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
     "coreAbilities": [],
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
       "text": "Each time a unit disembarks from this model after it has made a Normal move, that unit makes an assault disembark move (Core Rules, 18.06) for that disembarkation.",
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
      },
      {
       "name": "Damaged: 1-4 wounds remaining",
       "text": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
      },
      {
       "name": "Damaged: 1-4 wounds remaining",
       "text": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
       "name": "Damaged: 1-6 wounds remaining",
       "text": "While this model has 1-6 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
     "optionRules": [
      {
       "type": "maxCount",
       "optionId": "electroscourge",
       "max": 1,
       "note": "A model cannot be equipped with more than one electroscourge."
      }
     ],
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
       "name": "Damaged: 1-4 wounds remaining",
       "text": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
       "name": "Damaged: 1-4 wounds remaining",
       "text": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
       "name": "Damaged: 1-4 wounds remaining",
       "text": "While this model has 1-4 wounds remaining, each time this model makes an attack, subtract 1 from the Hit roll."
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
       "label": "Havoc launcher",
       "note": "This model can be equipped with 1 havoc launcher or can replace 1 combi-bolter with 1 havoc launcher."
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
      "Deadly Demise D6+2"
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
       "name": "Super-heavy War Engine",
       "text": "Each time this model makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4\" or less in height as if they were not there. When doing so, it can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them. Each time this model makes a Normal, Advance or Fall Back move, if it moves over any sections of terrain features that are more than 4\" in height, after it has finished that move, roll one D6: on a roll of 1, this model is Battle-shocked."
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
      "Skarbrand",
      "Summoned"
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
     "optionGroups": [],
     "compositionNote": "This model is equipped with: Slaughter and Carnage."
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
      "Summoned",
      "Bloodletters"
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
   ],
   "terms": [
    "Blessings of Khorne",
    "Blessings?",
    "Blood Tithe",
    "BTP",
    "Daemonic Rage",
    "Boon of Blood",
    "Might of Khorne",
    "Brazen Fury"
   ]
  },
  "tyranids": {
   "armyFaction": "Tyranids",
   "alliedFactions": [],
   "armyRules": [
    {
     "id": "synapse",
     "name": "Synapse",
     "text": "If your Army Faction is TYRANIDS, while a TYRANIDS unit from your army is within 6\" of one or more friendly SYNAPSE models, that TYRANIDS unit is said to be within Synapse Range of that model and of your army. While a TYRANIDS unit from your army is within Synapse Range of your army: Each time that unit takes a Battle-shock test, take that test on 3D6 instead of 2D6. Each time a model in that unit makes a melee attack, add 1 to the Strength characteristic of that attack."
    },
    {
     "id": "shadow",
     "name": "Shadow in the Warp",
     "shadow": true,
     "text": "If your Army Faction is TYRANIDS, once per battle, in either player’s Command phase, if one or more units from your army with this ability are on the battlefield, you can unleash the Shadow in the Warp. When you do, each enemy unit on the battlefield must take a Battle-shock test. Each time an enemy unit takes such a Battle-shock test, if it is within 6\" of one or more SYNAPSE units from your army, subtract 1 from that test."
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
     "summary": "Pick one Hyper-adaptation for the whole army at the start of the first battle round.",
     "rule": {
      "name": "Hyper-adaptations",
      "text": "At the start of the first battle round, select one of the following Hyper-adaptations to be active for TYRANIDS units from your army until the end of the battle: Swarming Instincts – Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets an INFANTRY or SWARM unit, that attack has the [SUSTAINED HITS 1] ability. Hyper-aggression – Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets a MONSTER or VEHICLE unit, that attack has the [LETHAL HITS] ability. Hive Predators – Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets a CHARACTER unit, on a Critical Hit, that attack has the [PRECISION] ability."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One TYRANIDS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, models in your unit have the Feel No Pain 5+ ability instead."
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
       "target": "Up to two TYRANIDS units from your army that are within Synapse Range of your army and are eligible to fight, or one other TYRANIDS unit from your army that is eligible to fight.",
       "effect": "Until the end of the phase, each time a model in any of those selected units makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit."
      },
      {
       "id": "death_frenzy",
       "name": "Death Frenzy",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One TYRANIDS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play."
      },
      {
       "id": "overrun",
       "name": "Overrun",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just before a TYRANIDS unit from your army Consolidates.",
       "target": "That TYRANIDS unit.",
       "effect": "Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3\" as long as your unit can end that move within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can make a Normal move of up to 6\"."
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
       "target": "Up to two TYRANIDS units from your army that are within Synapse Range of your army, or one other TYRANIDS unit from your army.",
       "effect": "Select one Hyper-adaptation. Until the start of your next Command phase, that Hyper-adaptation is active for those selected units in addition to any other that may be active for your army.",
       "restrictions": "You cannot select the same Hyper-adaptation you selected at the start of the first battle round."
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
       "target": "Up to two Endless Multitude units from your army that are within Synapse Range of your army, or one other ENDLESS MULTITUDE unit from your army.",
       "effect": "You can return up to D3+3 destroyed models to each of the selected units."
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
       "target": "One Mawloc or Trygon unit from your army.",
       "effect": "Until the start of your next Command phase, your unit has the Synapse keyword."
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
       "target": "One Tyranids unit from your army, wholly within 9\" of one or more Tunnel Markers you placed.",
       "effect": "One model in your unit regains up to D3+1 lost wounds, or you can return up to D3+1 destroyed models with a Wounds characteristic of 1 to your unit, with their full wounds remaining, instead."
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
       "target": "One Tyranids unit from your army that was set up as Reinforcements this turn.",
       "effect": "Until the end of your next Fight phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities."
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
       "target": "One Tyranids unit from your army that is wholly within 9\" of one or more of your Tunnel Markers and not within Engagement Range of one or more enemy units.",
       "effect": "Remove your unit from the battlefield and set it up again, wholly within 9\" of another Tunnel Marker you placed, and more than 6\" horizontally away from all enemy units."
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
       "target": "One Tyranids Monster unit from your army that was set up as Reinforcements this turn.",
       "effect": "Until the end of the phase, friendly Tyranids units within 6\" of your unit can re-roll Charge rolls."
      },
      {
       "id": "retreat_below",
       "name": "Retreat Below",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase.",
       "target": "One Tyranids unit or up to two Burrower units from your army that are not within Engagement Range of one or more enemy units.",
       "effect": "Remove your unit from the battlefield and place it into Strategic Reserves."
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
      "text": "At the start of the battle round , you can select one of the Synaptic Imperatives shown below. Until the end of the battle round, that Synaptic Imperative is active for your army and while a TYRANIDS unit from your army is within Synapse Range of your army, it will benefit from it."
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
       "when": "Any phase, just after an enemy unit fails a Battle-shock test.",
       "target": "One Synapse unit from your army within 12\" of that enemy unit.",
       "effect": "Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound."
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
       "target": "One Synapse unit from your army.",
       "effect": "Until the end of the turn, while a friendly TYRANIDS unit is within 9\" of the selected unit, that unit is within Synapse Range of your army."
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
       "target": "One Synapse unit from your army that has not been selected to shoot or fight this phase, and one enemy unit within 24\" of and visible to the SYNAPSE unit.",
       "effect": "Until the end of the phase, each time a friendly TYRANIDS model makes an attack that targets that enemy unit, if the attacking model’s unit is within 6\" of your SYNAPSE unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Synapse unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1."
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
       "target": "One TYRANIDS unit from your army that is within Synapse Range of your army.",
       "effect": "Select one Synaptic Imperative, even if you have already selected that imperative this battle. Until the start of your next Command phase, that Synaptic Imperative is active for your unit instead of any other Synaptic Imperative that is active for your army."
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
       "target": "One TYRANIDS unit from your army that is within Synapse Range of your army and made a Fall Back move this phase.",
       "effect": "Your unit is eligible to shoot and declare a charge this turn."
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
       "when": "Any phase.",
       "target": "One Harvester unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "Until the end of the battle, each time a friendly TYRANIDS model makes an attack that targets the enemy unit that just destroyed your HARVESTER unit, add 1 to the Wound roll."
      },
      {
       "id": "reclaim_biomass",
       "name": "Reclaim Biomass",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a TYRANIDS unit from your army is destroyed, before the last model in it is removed from play.",
       "target": "One Harvester unit from your army that is within 6\" of that destroyed unit.",
       "effect": "Regenerate one friendly TYRANIDS unit within 6\" of your HARVESTER unit (See Feed the Swarm)."
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
       "target": "One Harvester unit from your army that is within range of an objective marker you control.",
       "effect": "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Harvester unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability. If your unit is within range of an objective marker you control, until the end of the phase models in your unit have the Feel No Pain 4+ ability instead."
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
       "target": "One TYRANIDS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a Harvester unit, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit as well."
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
       "target": "One TYRANIDS unit from your army that just destroyed an enemy unit.",
       "effect": "Your unit immediately Regenerates (See Feed the Swarm). When doing so, if your unit is a Harvester unit and you choose for one model to regain up to D3 lost wounds, that model regains up to 3 lost wounds instead."
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
      "text": "Each time a TYRANIDS MONSTER model from your army makes an attack, add 1 to the Hit roll if that model’s unit is below its Starting Strength , and add 1 to the Wound roll as well if that model’s unit is Below Half-strength ."
     },
     "enhancements": [
      {
       "id": "enraged_reserves",
       "name": "Enraged Reserves",
       "pts": 20,
       "upgrade": false,
       "text": "TYRANIDS MONSTER only. If the bearer is destroyed by a melee attack before it has fought this phase, roll D6: on a 3+ it can fight after the attacking unit finishes, then is removed.",
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
       "text": "TYRANIDS MONSTER model only. Add 3 to the Objective Control characteristic of the bearer.",
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after a Tyranids Monster model from your army with the Deadly Demise ability that cannot FLY is destroyed.",
       "target": "That TYRANIDS MONSTER model. You can use this Stratagem on that model even though it was just destroyed.",
       "effect": "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted."
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
       "target": "One Tyranids Monster unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll."
      },
      {
       "id": "savage_roar",
       "name": "Savage Roar",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Tyranids Monster unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll. If that Battle-shock test was failed, subtract 1 from the Wound roll as well."
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
       "target": "One Tyranids Monster unit from your army that has not been selected to move this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4\" or less in height. When doing so: \nIt can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them. It can also move through sections of terrain features that are more than 4\" in height, but if it does, after its unit has moved, roll one D6: on a 1, your unit is Battle-shocked."
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
       "target": "One Tyranids Monster unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and until the end of the phase each time a model in your unit makes an attack, you can ignore any or all modifiers to that model’s Ballistic Skill characteristic and any or all modifiers to the Hit roll."
      },
      {
       "id": "massive_impact",
       "name": "Massive Impact",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, just after a Tyranids Monster model from your army ends a Charge move.",
       "target": "That TYRANIDS MONSTER model.",
       "effect": "Select one enemy unit within Engagement Range of your model and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound."
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
       "when": "Your Shooting phase or the Fight phase, just after a Vanguard Invader unit from your army has selected its targets.",
       "target": "That VANGUARD INVADER unit.",
       "effect": "Select one enemy unit that was selected as the target of one or more of your unit’s attacks. That enemy unit must take a Battle-shock test. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, add 1 to the Hit roll. If the Battle-shock test was failed, add 1 to the Wound roll as well."
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
       "target": "One Vanguard Invader Infantry unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability."
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
       "target": "One TYRANIDS unit from your army that is in Reserves, or up to two Vanguard Invader units from your army that are in Reserves.",
       "effect": "Until the end of the phase, for the purposes of setting up those selected units on the battlefield, treat the current battle round number as being one higher than it actually is."
      },
      {
       "id": "hypersensory_scillia",
       "name": "Hypersensory Scillia",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
       "target": "Up to two Vanguard Invader units from your army that are within 9\" of that enemy unit, or one other Tyranids Infantry unit from your army that is within 9\" of that enemy unit.",
       "effect": "Those selected units can each make a Normal move of up to 6\".",
       "restrictions": "You cannot target units that are within Engagement Range of one or more enemy units."
      },
      {
       "id": "unseen_lurkers",
       "name": "Unseen Lurkers",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Vanguard Invader unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\" or, if your unit has the Lone Operative ability, if the attacking model is within 6\". Your opponent can select new targets for the attacking unit’s attacks."
      },
      {
       "id": "invisible_hunter",
       "name": "Invisible Hunter",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase.",
       "target": "Up to two Vanguard Invader units from your army, or one Tyranids Infantry unit from your army.",
       "effect": "Remove the targeted units from the battlefield and place them into Strategic Reserves.",
       "restrictions": "The targeted units must be more than 3\" away from all enemy units."
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
      "text": "In your opponent’s Shooting phase , when an enemy unit has shot , if a model from a friendly ENDLESS MULTITUDE unit was destroyed as a result of those attacks, that friendly unit can make a surge move of up to D6\"."
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
       "text": "Add 2\" to the Move characteristic of models in the bearer's unit.",
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
       "when": "Any phase, just before an Endless Multitude unit from your army that is within Synapse Range of your army makes a Surge move.",
       "target": "That ENDLESS MULTITUDE unit.",
       "effect": "When making that Surge move, you can re-roll the D6 to determine how far your unit moves, and your unit can end that move as close as possible to the closest objective marker (instead of as close as possible to the closest enemy unit]. All other rules for making Surge moves still apply."
      },
      {
       "id": "unending_waves",
       "name": "Unending Waves",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One Endless Multitude unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.",
       "restrictions": "Any destroyed Character units that were attached to your unit are not returned. You can only use this Stratagem once per battle."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Endless Multitude unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll."
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
       "target": "One Endless Multitude unit from your army that has not been selected to shoot or fight this phase.",
       "effect": "Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, and If your unit contains 15 or more models, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit."
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
       "target": "One Endless Multitude unit from your army.",
       "effect": "Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit."
      },
      {
       "id": "preservation_imperative",
       "name": "Preservation Imperative",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Endless Multitude unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, your unit is treated as containing fewer than five models for the purpose of the [BLAST] ability."
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
      "text": "Friendly DEATHLEAPER / LICTOR / NEUROLICTOR units have Deep Strike . Friendly LICTOR/NEUROLICTOR units’ attacks that target a CHARACTER unit can re-roll hit rolls of 1."
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
       "when": "Fight phase , when a friendly DEATHLEAPER / LICTOR / NEUROLICTOR / VON RYAN’S LEAPERS unit is selected to fight .",
       "target": "That DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN’S LEAPERS unit.",
       "effect": "Your unit’s attacks that target a hidden unit have +1 S and AP ."
      },
      {
       "id": "hypersensory_adaptations",
       "name": "Hypersensory Adaptations",
       "cp": 1,
       "type": "Ambush Predators",
       "phases": [
        "Shooting"
       ],
       "when": "Start of your Shooting phase .",
       "target": "One friendly DEATHLEAPER / LICTOR / NEUROLICTOR / VON RYAN’S LEAPERS unit.",
       "effect": "Select one visible enemy unit within 12\" of your unit. That enemy unit has +6\" detection range ."
      },
      {
       "id": "scanner_gheist",
       "name": "Scanner Gheist",
       "cp": 1,
       "type": "Ambush Predators",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase .",
       "target": "One friendly unengaged DEATHLEAPER / LICTOR / NEUROLICTOR unit.",
       "effect": "Place your unit in strategic reserves ."
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
      "text": "Friendly NORN EMISSARY / NORN ASSIMILATOR units have the following ability: Protean Purpose: (Once per battle, per unit) In your Command phase , you can use this ability."
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
       "when": "Any phase, when a friendly NORN ASSIMILATOR unit suffers a mortal wound .",
       "target": "That NORN ASSIMILATOR unit.",
       "effect": "Your unit has Feel No Pain 4+ against mortal wounds ."
      },
      {
       "id": "lesser_prey",
       "name": "Lesser Prey",
       "cp": 1,
       "type": "Talons of the Norn Queen",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase , when a friendly NORN ASSIMILATOR / NORN EMISSARY unit is selected to fight .",
       "target": "That NORN ASSIMILATOR/NORN EMISSARY unit.",
       "effect": "Your unit’s melee attacks have +2 S ."
      },
      {
       "id": "tanglestrike_rounds",
       "name": "Tanglestrike Rounds",
       "cp": 1,
       "type": "Talons of the Norn Queen",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase , when a friendly NORN ASSIMILATOR unit has shot .",
       "target": "That NORN ASSIMILATOR unit.",
       "effect": "Select one enemy unit hit by those attacks. That enemy unit is tethered until the start of your next Command phase : While a unit is tethered , that unit has -2\" M ."
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
      "text": "Friendly TYRANID WARRIORS WITH RANGED BIO-WEAPONS / TYRANID WARRIORS WITH MELEE BIO-WEAPONS units have: TYRANID WARRIORS . TYRANID WARRIORS / TYRANID PRIME WITH LASH WHIP / WINGED TYRANID PRIME models from your army have 5+ InSv ."
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
       "when": "Your opponent’s Shooting phase or the Fight phase , just after an enemy unit has selected its targets.",
       "target": "One TYRANIDS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, models in your unit have the Feel No Pain 5+ ability instead."
      },
      {
       "id": "synaptic_micronodes",
       "name": "Synaptic Micronodes",
       "cp": 1,
       "type": "Warrior Bioform Onslaught",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One Tyranid Warriors unit from your army.",
       "effect": "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase."
      },
      {
       "id": "parasitic_payload",
       "name": "Parasitic Payload",
       "cp": 1,
       "type": "Warrior Bioform Onslaught",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Tyranid Warriors with Ranged Bio-weapons unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. After your unit has resolved its shooting attacks this phase, select one enemy unit hit by one or more of those attacks. Until the end of the turn, models in that unit cannot have the Benefit of Cover."
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
     "optionGroups": [],
     "cpEachCommand": {
      "name": "Hive Commander",
      "who": "the Swarmlord"
     }
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
       "text": "At the start of the Fight phase, you can select one enemy unit within 12\" of and visible to this model and roll one D6: on a 1, this PSYKER suffers D3 mortal wounds; on a 2-5, until the end of the phase, that enemy unit is not eligible to fight this phase; on a 6, until the end of the phase, that enemy unit is not eligible to fight this phase and subtract 1 from the Attacks characteristic of weapons equipped by models in that unit.",
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
       "name": "Termagant spinefists",
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
       "text": "Once per turn, in your Shooting phase, when selected to shoot, one unit with this ability can skip its ranged attacks to add a new SPORE MINES unit (1 model per Biovore) wholly within 48\" and more than 8\" horizontally from all enemy units.",
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
       "name": "Genestealer claws and talons",
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
       "text": "Once per turn, per unit: you can select one of the following: add 1 to the Strength characteristic of melee weapons equipped by models in this unit, or add 1 to the Toughness characteristic of models in this unit.",
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
       "text": "At the end of your opponent's Fight phase, you can do one of the following: End of your opponent's Fight phase, choose one: roll six D6 against one visible enemy unit within 24\" (not Lone Operative), each 3+ inflicting 1 mortal wound; or add a new SPORE MINES unit of D3 models within 6\" of this model and more than 8\" horizontally from all enemies (only one model per turn can choose this).",
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
       "name": "Distensible jaw",
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
       "name": "Toxinjector Harpoon",
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
       "name": "Toxinjector Harpoon",
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
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit it hit. Until the end of the turn, melee attacks by friendly TYRANIDS units against it get improve the Armour Penetration characteristic of that attack by 1 (each enemy unit once per turn).",
       "kind": "datasheet"
      },
      {
       "name": "Feeding Frenzy",
       "text": "Each time this model makes a melee attack that targets a unit that is below its Starting Strength, add 1 to the Hit roll. If that unit is also Below Half-strength, add 1 to the Wound roll as well.",
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
       "name": "Sporocyst bio-weapons",
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
       "text": "Once per turn, in your Shooting phase, when selected to shoot, one unit with this ability can skip its ranged attacks to add a new 1-model MUCOLID SPORES unit wholly within 18\" and more than 8\" horizontally from all enemy units.",
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
       "text": "Each time this model makes an attack that targets a Battle-shocked unit, add 1 to the Hit roll.",
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
       "name": "Spinemaws",
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
   ],
   "terms": [
    "Synapse Range",
    "Shadow in the Warp",
    "Synaptic Imperatives?",
    "Hyper-adaptations?",
    "Tunnel Markers?",
    "Singular Purpose"
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
     "text": "If your Army Faction is DEATH GUARD, while an enemy unit is within Contagion Range of one or more DEATH GUARD models from your army, it is Afflicted. CONTAGION RANGE: Contagion Range changes over the course of the battle. Contagion Range cannot be greater than 12\" after modifiers. AFFLICTED: During the Declare Battle Formations step, select one of the Plagues below. Until the end of the battle, while an enemy unit is Afflicted, subtract 1 from the Toughness characteristic of models in that unit, and that unit has the effect of your chosen Plague. Skullsquirm Blight: Each time a model in this unit makes a ranged attack, enemy units have the benefit of cover against that attack. Each time a model in this unit makes a melee attack, subtract 1 from the Hit roll. Rattlejoint Ague: Worsen the Save characteristic of models in this unit by 1. Scabrous Soulrot: Worsen the Move, Leadership, and Objective Control characteristics of models in this unit by 1 (this rule can only worsen a model’s Objective Control characteristic to a minimum of 1)."
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
      "text": "At the end of your Command phase, if a friendly DEATH GUARD unit is controlling an objective, that objective is secured. Until you lose control of that objective, while an enemy unit is within range of that objective, that enemy unit is Afflicted."
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
       "when": "Any phase.",
       "target": "One Death Guard Vehicle or Death Guard Monster model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
       "effect": "Do not roll one D6 to determine whether mortal wounds are inflicted by your model’s Deadly Demise ability. Instead, mortal wounds are automatically inflicted. In addition, any enemy units that suffer mortal wounds as a result of this Stratagem are Afflicted until the start of your next turn."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Death Guard unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack."
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
       "target": "Your Death Guard WARLORD that is on the battlefield.",
       "effect": "Until the start of your next Command phase, add 3\" to the Contagion Range of models from your army."
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
       "target": "One Death Guard model your army that has lost one or more wounds.",
       "effect": "Select one enemy unit within 3\" of your model. Roll a number of D6 equal to the number of wounds your model has lost: for each 5+, that enemy unit suffers one mortal wound (to a maximum of 6 mortal wounds) and your model regains 1 lost wound (to a maximum of 6 lost wounds)."
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
       "target": "One Death Guard Character unit from your army.",
       "effect": "Select one enemy unit visible to your unit. Until the end of the phase, each time a DEATH GUARD unit from your army selects that enemy unit as the target of any ranged attacks, you can re-roll the dice to determine how many attacks a weapon equipped by a model in that unit makes."
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
       "target": "One Death Guard Infantry unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an Afflicted unit, you can re-roll the Hit roll and you can re-roll the Wound roll."
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
      "text": "At the start of the battle round , select a number of enemy units more than 12\" away from every model from your army that is on the battlefield. Until the end of the battle round, those enemy units are Afflicted ."
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
       "target": "One Death Guard Vehicle unit from your army.",
       "effect": "Select one terrain feature within 24\" of and visible to your unit. Until the start of your next turn, enemy units are Afflicted while they are within 3\" of that terrain feature."
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
       "when": "Your Movement phase or your Charge phase.",
       "target": "One Death Guard Vehicle unit from your army that has not been selected to move or charge this phase.",
       "effect": "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features."
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
       "target": "One Death Guard unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack that targets a visible enemy unit (excluding AIRCRAFT) within your opponent’s deployment zone, you can re-roll the Hit roll."
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
       "target": "One Death Guard Vehicle unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability."
      },
      {
       "id": "eyestinger_storm",
       "name": "Eyestinger Storm",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your opponent’s Command phase.",
       "target": "One Death Guard Vehicle unit from your army.",
       "effect": "Select one objective marker visible to one or more models in your unit. Each Afflicted enemy unit within range of that objective marker must take a Battle-shock test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase."
      },
      {
       "id": "stinking_mire",
       "name": "Stinking Mire",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Start of your opponent’s Charge phase.",
       "target": "One Death Guard Vehicle unit from your army.",
       "effect": "Until the end of the phase, each time an enemy unit selects your unit as the target of a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll)."
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
      "text": "At the start of the battle round , you can select one of the Plagues listed in Nurgle’s Gift . Until the end of the battle, that is your chosen Plague instead of any previously chosen Plague."
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
       "text": "Until the end of the battle, while an enemy unit is within Contagion Range of the bearer, that enemy unit has the effect of that Plague in addition to any other.",
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
       "target": "One Death Guard Attached unit from your army that has not been selected to shoot or fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit."
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
       "target": "One Death Guard Attached unit from your army that has not been selected to shoot or fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, you can re-roll the Hit roll and you can re-roll the Wound roll."
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
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Death Guard Attached unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, add 2 to the Toughness characteristic of models in your unit."
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
       "target": "One Death Guard unit from your army that includes two Character models.",
       "effect": "Until the end of the phase, your unit has the Fights First ability."
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
       "target": "One Death Guard Character unit from your army that is not leading a unit.",
       "effect": "Select one other friendly Death Guard unit (excluding Battle-shocked units and Attached units that already have two Leader units or one of your CHARACTER units leading it] within 2\" horizontally and 5\" vertically of your unit that your unit can lead (as described in the Leader section of its datasheet]. Your unit attaches to that unit as a Leader. Change that unit’s Starting Strength accordingly."
      },
      {
       "id": "deaths_heads",
       "name": "Death's Heads",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase .",
       "target": "One BIOLOGUS PUTRIFIER unit from your army that is not within Engagement Range of one or more enemy units and has not been selected to shoot this phase.",
       "effect": "Select one enemy unit (excluding VEHICLES ) that is within 8\" of and visible to your unit. Until the start of your next turn, that unit has the effect of all Plagues (see Nurgle’s Gift )."
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
       "when": "Any phase.",
       "target": "One Nurglings unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
       "effect": "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength and with its full wounds remaining.",
       "restrictions": "You can only use this Stratagem once per battle."
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
       "target": "One Death Guard unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit that is within Engagement Range of one or more Plague Legions units from your army, you can re-roll the Hit roll."
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
       "target": "One Plague Legions unit from your army that is within Engagement Range of one or more enemy units.",
       "effect": "Until the end of the phase, enemy units are not considered to be within Engagement Range of your unit for the purposes of selecting targets of ranged weapons. Until the end of the phase, each time an enemy model loses a wound, while that model’s unit is within Engagement Range of your unit, roll one D6: on a 5+, your unit suffers 1 mortal wound after the attacking unit has finished making its attacks."
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
       "when": "Your Movement phase or your Charge phase.",
       "target": "One Plague Legions Monster unit from your army that has not been selected to move or charge this phase.",
       "effect": "Until the end of the phase, each time your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features."
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
       "target": "One Plague Legions unit from your army.",
       "effect": "Until the end of the phase, while an enemy unit is within 6\" of your unit, that enemy unit is Afflicted."
      },
      {
       "id": "mireslick",
       "name": "Mireslick",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent’s Movement phase, when an enemy unit (excluding MONSTERS and VEHICLES) is selected to Fall Back.",
       "target": "One Plague Legions unit from your army that is within Engagement Range of that enemy unit.",
       "effect": "Until the end of the phase, while an enemy unit is within Engagement Range of your unit, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead."
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
      "text": "In your Command phase in each of the following battle rounds , depending on your chosen battle size, add a new POXWALKERS unit with a Starting Strength of 10 to your army, in Strategic Reserves ."
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
       "text": "While the bearer is leading a unit, after the bearer's unit has resolved its attacks, D3 Bodyguard models from the bearer's unit are destroyed. (Also grants Plague Wind +1 Damage while leading Poxwalkers if that clause exists.)",
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
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Poxwalkers unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "After the attacking unit has fought, roll one D6 for each model from your unit that was destroyed as a result of those attacks: on a 6, the attacking unit suffers 1 mortal wound. If your unit is not destroyed after the attacking unit has fought, enemy models destroyed as a result of this Stratagem count as enemy models destroyed by an attack made by a model in your unit for the purposes of the Curse of the Walking Pox ability."
      },
      {
       "id": "smeared_with_filth",
       "name": "Smeared with Filth",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One Poxwalkers unit from your army that was just destroyed. You can target that unit with this Stratagem even though it was just destroyed.",
       "effect": "Select one enemy unit that made one or more attacks that targeted your unit this phase. Until the end of the battle, that enemy unit is Afflicted."
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
       "target": "One Poxwalkers unit from your army.",
       "effect": "Until the end of the turn, add 1 to the Move characteristic of models in your unit, and add 1 to the Attacks and Strength characteristics of melee weapons equipped by models in your unit."
      },
      {
       "id": "hidden_amongst_the_dead",
       "name": "Hidden Amongst the Dead",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "The Reinforcements step of your Movement phase.",
       "target": "One Poxwalkers unit from your army that is in Strategic Reserves and that is not an Attached unit.",
       "effect": "Until the end of the phase, models in that unit have the Deep Strike ability."
      },
      {
       "id": "shock_and_horror",
       "name": "Shock and Horror",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, just after a Death Guard unit from your army ends a Charge move.",
       "target": "That DEATH GUARD unit.",
       "effect": "Each enemy unit within Engagement Range of your unit must take a Battle-shock test, subtracting 1 from that test."
      },
      {
       "id": "shambling_wall",
       "name": "Shambling Wall",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Death Guard unit from your army that was selected as the target of one or more of the attacking unit’s attacks, and one friendly Poxwalkers unit within 3\" of your unit and visible to both your unit and the attacking unit.",
       "effect": "Until the end of the phase, each time you would allocate an attack to a model in your DEATH GUARD unit, if your POXWALKERS unit is visible to the attacking model and is an eligible target for that attack, no saving throw is made for that attack; instead a number of POXWALKERS from your POXWALKERS unit equal to the Damage characteristic of that attack are destroyed."
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
      "text": "In your opponent’s Command phase , roll 2D6 for each Afflicted enemy unit, subtracting 1 from the result if that unit is Below Half-strength . If the result is 6 or less, that enemy unit suffers D3 mortal wounds ."
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
       "target": "One Terminator unit from your army.",
       "effect": "Until the end of the phase, add 3\" to the Contagion Range of models in your unit."
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
       "target": "One Terminator unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit (excluding MONSTERS and VEHICLES) you can re-roll the Hit roll."
      },
      {
       "id": "undying_spite",
       "name": "Undying Spite",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Terminator unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play."
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
       "target": "One Lord of Virulence model from your army.",
       "effect": "Select one objective marker within 30\" of and visible to your model. Until the start of your next turn, while an enemy unit is within range of that objective marker, that unit is Afflicted."
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
       "target": "One Terminator unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] and [HEAVY] abilities."
      },
      {
       "id": "sickening_impact",
       "name": "Sickening Impact",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your Charge phase, just after a Terminator unit from your army ends a Charge move.",
       "target": "That TERMINATOR unit.",
       "effect": "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 2+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds)."
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
      "text": "For all their slow degeneration, many of the Death Guard’s war machines are augmented with a fevered and inexorable urgency that brings their corrupted weapons to bear upon the foe all too quickly Friendly FOETID BLOAT-DRONE / FOETID BLOAT-DRONE WITH HEAVY BLIGHT LAUNCHER / HELBRUTE / MYPHITIC BLIGHT-HAULER units have CONTAGION ENGINE ."
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
       "when": "Your Shooting phase or the Fight phase , when a friendly CONTAGION ENGINE unit is selected to attack .",
       "target": "That CONTAGION ENGINE unit.",
       "effect": "Your unit’s attacks can re-roll wound rolls of 1."
      },
      {
       "id": "bloodrust_deluge",
       "name": "Bloodrust Deluge",
       "cp": 1,
       "type": "Contagion Engines",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase , when a friendly CONTAGION ENGINE unit is selected to shoot .",
       "target": "That CONTAGION ENGINE unit.",
       "effect": "Select one visible enemy unit. That enemy unit is Afflicted until your unit has attacked ."
      },
      {
       "id": "soulrot_flux",
       "name": "Soulrot Flux",
       "cp": 1,
       "type": "Contagion Engines",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent’s Movement phase , when an enemy unit is selected to make a fall-back move , if that enemy unit is engaged with a friendly CONTAGION ENGINE unit.",
       "target": "That CONTAGION ENGINE unit.",
       "effect": "When an enemy unit engaged with your unit is selected to make a fall-back move , roll one D6: On a 1, that enemy unit suffers 1 mortal wound . On a 2-5, that enemy unit suffers D3 mortal wounds . On a 6, that enemy unit suffers 3 mortal wounds ."
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
      "text": "In the Declare Battle Formations step, you can select up to two friendly PLAGUE MARINES units. This detachment has the FLYBLOWN tag and cannot be taken with another FLYBLOWN detachment ."
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
       "target": "One Death Guard Infantry unit from your army that is within Engagement Range of one or more enemy units.",
       "effect": "Select one enemy unit within Engagement Range of your unit. That unit must take a Battle-shock test, subtracting 1 from the result."
      },
      {
       "id": "droning_horror",
       "name": "Droning Horror",
       "cp": 1,
       "type": "Flyblown Host",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Death Guard Infantry unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a ranged attack, re-roll a Hit roll of 1. If that attack targets a unit within half range, you can re-roll the Hit roll instead."
      },
      {
       "id": "eye_of_the_swarm",
       "name": "Eye of the Swarm",
       "cp": 1,
       "type": "Flyblown Host",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Death Guard Infantry unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit (excluding Blast weapons) have the [PISTOL] ability."
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
      "text": "The rancid champions of the Death Guard are blessed with the most virulent contagions of Nurgle, supernatural strains that radiate towards unwilling hosts in floods of foulness Friendly DEATH GUARD CHARACTER units have +3\" to their Contagion Range (to a maximum of 12\")."
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
       "text": "Enemy units within Contagion Range of this unit also have the effect of that Plague in addition to any other.",
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
       "when": "Start of the Command phase .",
       "target": "One friendly DEATH GUARD CHARACTER unit.",
       "effect": "Your unit has +1 OC until the end of the turn."
      },
      {
       "id": "aggravus_spasms",
       "name": "Aggravus Spasms",
       "cp": 1,
       "type": "Paragons of Putrescence",
       "phases": [
        "Shooting"
       ],
       "when": "Start of your Shooting Phase .",
       "target": "One friendly DEATH GUARD CHARACTER unit.",
       "effect": "Select one visible enemy unit within Contagion Range of your unit. That enemy unit has +6\" detection range ."
      },
      {
       "id": "simultaneous_contamination",
       "name": "Simultaneous Contamination",
       "cp": 1,
       "type": "Paragons of Putrescence",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase , when a friendly DEATH GUARD CHARACTER unit starts an action .",
       "target": "That DEATH GUARD CHARACTER unit.",
       "effect": "That action does not prevent your unit from being eligible to shoot ."
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
     "mustBeWarlord": "Supreme Commander: Mortarion must be your Warlord.",
     "phaseTrigger": {
      "title": "Host of Plagues",
      "style": "rot",
      "who": "Mortarion",
      "phase": "Movement",
      "turn": "mine",
      "when": "End of your Movement phase",
      "text": "Roll a D6 for each enemy unit within 6\" of Mortarion (+1 if it is Afflicted). On a 3+ that unit suffers D3 mortal wounds.",
      "button": "Unleash the plagues",
      "done": "Plagues spread"
     }
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
       "text": "In your Shooting phase, you can select one enemy unit within 18\" of and visible to this model and roll one D6: on a 1, this model's unit suffers D3 mortal wounds; on a 2-5, that enemy unit suffers D3 mortal wounds; on a 6, that enemy unit suffers D6 mortal wounds.",
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
       "name": "Sevenfold Chant",
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
       "text": "Until the end of the phase, each time this model makes an attack that targets that unit, an unmodified Hit roll of 5+ scores a Critical Hit.",
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
       "name": "Improvised weapon",
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
       "text": "Each time a model in this unit makes a ranged attack, improve the Strength and Armour Penetration characteristics of that attack by 1.",
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
      "Chaos Spawn"
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
       "text": "After resolving all of this model's attacks against the target unit, each unit struck by spores suffers D3 mortal wounds.",
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
       "name": "Magma cutters",
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
       ],
       "note": " A model cannot be equipped with more than one electroscourge."
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
       ],
       "note": " A model cannot be equipped with more than one electroscourge."
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
       "label": "Havoc launcher",
       "note": "This model can be equipped with 1 havoc launcher or can replace 1 combi-bolter with 1 havoc launcher."
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
       "name": "Mischief Makers",
       "text": "Each time an enemy unit (excluding TITANIC units) within Engagement Range of one or more units with this ability is selected to fight, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.",
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
   ],
   "terms": [
    "Nurgle's Gift",
    "Contagion Range",
    "Afflicted",
    "Plagues?(?! Wind)"
   ]
  },
  "thousandSons": {
   "armyFaction": "Thousand Sons",
   "alliedFactions": [
    {
     "faction": "Scintillating Legions",
     "requiresDetachment": "changehost_of_deceit",
     "capKey": "blCap",
     "cannotBeWarlord": true
    }
   ],
   "armyRules": [
    {
     "id": "cabal",
     "name": "Cabal of Sorcerers",
     "rituals": [
      {
       "id": "destinys_ruin",
       "name": "Destiny's Ruin",
       "wc": 5,
       "effect": "One enemy unit within 24\" and visible: until the end of the phase your THOUSAND SONS and SCINTILLATING LEGIONS attacks against it re-roll hit rolls of 1.",
       "boost": "10+: re-roll the whole hit roll instead."
      },
      {
       "id": "temporal_surge",
       "name": "Temporal Surge",
       "wc": 6,
       "effect": "One unengaged friendly THOUSAND SONS or SCINTILLATING LEGIONS unit within 24\" and visible makes a Normal move of up to D6\"; it cannot charge this turn.",
       "boost": "10+: move up to 6\" instead."
      },
      {
       "id": "doombolt",
       "name": "Doombolt",
       "wc": 7,
       "effect": "One enemy unit within 24\" and visible (a lone Lone Operative only within 12\") suffers D3 mortal wounds.",
       "boost": "11+: D3+3 mortal wounds instead."
      },
      {
       "id": "twist_of_fate",
       "name": "Twist of Fate",
       "wc": 9,
       "effect": "One enemy unit within 24\" and visible: until the end of the phase your THOUSAND SONS and SCINTILLATING LEGIONS attacks against it get +1 AP.",
       "boost": "12+: +2 AP instead."
      }
     ],
     "text": "If your Army Faction is THOUSAND SONS, at the start of your Shooting phase, one or more models from your army with this ability can attempt Rituals from those listed below. To do so, select one model from your army with this ability that has not yet attempted a Ritual this turn and select one Ritual no model from your army has attempted to manifest this turn, then take a Psychic test for that model. PSYCHIC TEST SEQUENCE: Roll 2D6. Channel the Warp (Optional): Then, if one or more doubles or triples were rolled during this test, that model’s unit suffers D3 mortal wounds. If that model is not destroyed, the combined total of all the dice rolled during this test is the Psychic test result. If this equals or exceeds the Warp Charge value of the Ritual being attempted, that model manifests that Ritual and you resolve its effects. DESTINY’S RUIN (PSYCHIC) WARP CHARGE 5: Select one enemy unit within 24\" of and visible to the manifesting model. Until the end of the phase, each time a THOUSAND SONS or SCINTILLATING LEGIONS model from your army makes an attack that targets that unit, re-roll a Hit roll of 1. If the Psychic test result for this Ritual was 10+, you can re-roll the Hit roll instead. TEMPORAL SURGE (PSYCHIC) WARP CHARGE 6: Select one friendly THOUSAND SONS or SCINTILLATING LEGIONS unit that is not within Engagement Range of one or more enemy units and is within 24\" of and visible to the manifesting model. That unit can make a Normal move of up to D6\". If the Psychic test result for this Ritual was 10+, that unit can make a Normal move of up to 6\" instead. In either case, until the end of the turn, that unit is not eligible to declare a charge. DOOMBOLT (PSYCHIC) WARP CHARGE 7: Select one enemy unit within 24\" of and visible to the manifesting model (excluding units with the Lone Operative ability that are not part of an Attached unit and are not within 12\" of the manifesting model); that unit suffers D3 mortal wounds. If the Psychic test result for this Ritual was 11+, that unit suffers D3+3 mortal wounds instead. TWIST OF FATE (PSYCHIC) WARP CHARGE 9: Select one enemy unit within 24\" of and visible to the manifesting model. Until the end of the phase, each time a THOUSAND SONS or SCINTILLATING LEGIONS model from your army makes an attack that targets that unit, improve the Armour Penetration characteristic of that attack by 1. If the Psychic test result for this Ritual was 12+, improve the Armour Penetration characteristic of that attack by 2 instead."
    },
    {
     "id": "pact_of_sorcery",
     "name": "Pact of Sorcery",
     "text": "When mustering your army, unless specifically stated otherwise, you cannot select SCINTILLATING LEGIONS as your Army Faction."
    }
   ],
   "detachments": [
    {
     "id": "grand_coven",
     "name": "Grand Coven",
     "dp": 3,
     "dispositions": [
      "Disruption",
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Each Command phase pick one Kindred Sorcery boost for your psychic weapons; each only once per battle.",
     "rule": {
      "name": "Kindred Sorcery",
      "text": "In your Command phase, you can select one of the abilities listed below to take effect until the start of your next Command phase. You can only select each of these abilities once per battle. Imbued Manifestation: Add 6\" to the Range characteristic of ranged Psychic weapons equipped by THOUSAND SONS models from your army. Psychic Maelstrom: Each time a THOUSAND SONS model from your army makes an attack with a Psychic weapon, add 1 to the Wound roll. Wrath of the Immaterium: Psychic weapons equipped by THOUSAND SONS models from your army have the [DEVASTATING WOUNDS] ability."
     },
     "imperatives": [
      {
       "id": "imbued",
       "name": "Imbued Manifestation",
       "effect": "+6\" Range for ranged Psychic weapons of your THOUSAND SONS models."
      },
      {
       "id": "maelstrom",
       "name": "Psychic Maelstrom",
       "effect": "+1 to wound for attacks with Psychic weapons by your THOUSAND SONS models."
      },
      {
       "id": "wrath",
       "name": "Wrath of the Immaterium",
       "effect": "Psychic weapons of your THOUSAND SONS models have [DEVASTATING WOUNDS]."
      }
     ],
     "impTitle": "Kindred Sorcery",
     "impNote": "Pick in your Command phase; it lasts until your next Command phase. Each only once per battle.",
     "enhancements": [
      {
       "id": "lord_of_forbidden_lore",
       "name": "Lord of Forbidden Lore",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS model only. Rituals the bearer manifests get +6\" range.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "incandaeum",
       "name": "Incandaeum",
       "pts": 15,
       "upgrade": false,
       "text": "EXALTED SORCERER only. Once per battle the bearer can attempt Doombolt even if another model already attempted it this phase.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Exalted Sorcerer"
        ]
       }
      },
      {
       "id": "umbralefic_crystal",
       "name": "Umbralefic Crystal",
       "pts": 30,
       "upgrade": false,
       "text": "THOUSAND SONS model only. Once per battle (per army), in your Command phase, if unengaged: place the unit in Strategic Reserves; it has Deep Strike until your next Shooting phase and must make an ingress move in your next Movement phase (including in your first turn).",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "eldritch_vortex_of_etaph",
       "name": "Eldritch Vortex of E'Taph",
       "pts": 35,
       "upgrade": false,
       "text": "THOUSAND SONS model only. +1 S and +1 D for the bearer's Psychic weapons.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "psychic_dominion",
       "name": "Psychic Dominion",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase, just after an enemy unit has selected its targets.",
       "target": "One Thousand Sons unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, Psychic weapons equipped by models in the attacking unit have the [hazardous] ability, and models in your unit have the Feel No Pain 4+ ability against Psychic Attacks."
      },
      {
       "id": "destined_by_fate",
       "name": "Destined by Fate",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase, just after a saving throw is failed for a Thousand Sons Psyker model from your army. If you are using fast dice rolling, this Stratagem can still be used after rolling multiple saving throws at once.",
       "target": "That PSYKER model.",
       "effect": "Change the Damage characteristic of that attack to 0. If you are using fast dice rolling, select one of those attacks you failed a saving throw for."
      },
      {
       "id": "egotistical_power",
       "name": "Egotistical Power",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One Thousand Sons Psyker unit from your army.",
       "effect": "Select the Imbued Manifestation, Psychic Maelstrom or Wrath of the Immaterium ability. Until the start of your next Command phase, that ability applies to your unit instead of any other Kindred Sorcery ability, even if you have already selected that ability this battle."
      },
      {
       "id": "desecration_of_worlds",
       "name": "Desecration of Worlds",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One Thousand Sons Psyker unit from your army within range of an objective marker you control.",
       "effect": "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase."
      },
      {
       "id": "arcane_focus",
       "name": "Arcane Focus",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, just after you take a Psychic test for a Thousand Sons model from your army that Channelled the Warp (before resolving that Ritual).",
       "target": "That THOUSAND SONS model.",
       "effect": "Re-roll all of the D6 rolled for that Psychic test (including the additional D6 for Channelling the Warp)."
      },
      {
       "id": "devastating_sorcery",
       "name": "Devastating Sorcery",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, add 9\" to the Range characteristic of Psychic weapons equipped by models in your unit, and each time a model in your unit makes an attack with a Psychic weapon, you can re-roll the Hit roll and you can re-roll the Wound roll."
      }
     ]
    },
    {
     "id": "changehost_of_deceit",
     "name": "Changehost of Deceit",
     "dp": 2,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [],
     "summary": "Field the daemons of Tzeentch (SCINTILLATING LEGIONS); they grant nearby THOUSAND SONS PSYKER units a 4+ invulnerable save against ranged attacks.",
     "rule": {
      "name": "Infernal Pacts",
      "text": "SCINTILLATING LEGIONS units from your army have the following the ability: Daemonic Illusions (Aura): While a friendly THOUSAND SONS PSYKER unit is within 6\" of and visible to this unit, models in that unit have a 4+ invulnerable save against ranged attacks."
     },
     "enhancements": [
      {
       "id": "nethershriek_mind_eater",
       "name": "Nethershriek Mind-Eater",
       "pts": 10,
       "upgrade": false,
       "text": "THOUSAND SONS or LORD OF CHANGE model only. Start of your Shooting phase: one visible enemy unit within 12\" takes a battle-shock test; if failed it suffers 3 mortal wounds.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "orUnitIds": [
         "lord_of_change"
        ]
       }
      },
      {
       "id": "diabolic_savant",
       "name": "Diabolic Savant",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS INFANTRY model only. While within 6\" of a friendly SCINTILLATING LEGIONS unit, +1 to its Psychic test result when it Channels the Warp.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       }
      },
      {
       "id": "duplicitous_malediction",
       "name": "Duplicitous Malediction",
       "pts": 15,
       "upgrade": false,
       "text": "THOUSAND SONS or LORD OF CHANGE model only. After both armies deploy, redeploy up to three THOUSAND SONS units; they can go into Strategic Reserves regardless of the usual limit.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "orUnitIds": [
         "lord_of_change"
        ]
       }
      },
      {
       "id": "tome_of_true_names",
       "name": "Tome of True Names",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS INFANTRY model only. Once per battle, at the start of any phase: the bearer has a 2+ invulnerable save until the end of the phase.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "sulphurous_veil",
       "name": "Sulphurous Veil",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Thousand Sons or Scintillating Legions unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll."
      },
      {
       "id": "deceptive_glamour",
       "name": "Deceptive Glamour",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase.",
       "target": "One Thousand Sons unit from your army.",
       "effect": "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects targets for its attacks, it can only target your unit if there are no eligible Scintillating Legions targets for those attacks."
      },
      {
       "id": "ethereal_phantasm",
       "name": "Ethereal Phantasm",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
       "target": "One Scintillating Legions unit from your army that is within 9\" of that enemy unit and not within Engagement Range of one or more enemy units.",
       "effect": "Your unit can make a Normal move of up to D6\", or a Normal move of up to 6\" instead if it is wholly within 6\" of one or more friendly Thousand Sons units."
      },
      {
       "id": "fractal_disjunction",
       "name": "Fractal Disjunction",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Scintillating Legions unit from your army (excluding Monsters) that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18\"."
      },
      {
       "id": "chronosorcerous_bleed",
       "name": "Chronosorcerous Bleed",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Charge"
       ],
       "when": "Your opponent’s Charge phase, just after an enemy unit has declared a charge.",
       "target": "One Thousand Sons Psyker or Scintillating Legions unit from your army that was selected as a target of that charge.",
       "effect": "Until the end of the phase, subtract 2 from Charge rolls made for that enemy unit (this is not cumulative with any other negative modifiers to that Charge roll)."
      },
      {
       "id": "glimmershift_portal",
       "name": "Glimmershift Portal",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase.",
       "target": "Up to two Scintillating Legions units from your army (excluding Monsters), or one Scintillating Legions Monster unit from your army, if all of those units are more than 6\" horizontally away from all enemy units.",
       "effect": "Remove those units from the battlefield and place them into Strategic Reserves."
      }
     ]
    },
    {
     "id": "warpmeld_pact",
     "name": "Warpmeld Pact",
     "dp": 2,
     "dispositions": [
      "Purge the Foe"
     ],
     "tags": [
      "MUTANT"
     ],
     "summary": "Mutants trade wounds for power with Warpmeld Sacrifice; Tzaangors are Battleline with +1 OC.",
     "rule": {
      "name": "Warpmeld Sacrifice",
      "text": "Each time an enemy unit is selected to shoot or fight and one or more of the targets of those attacks are TZEENTCH MUTANT units from your army, one of those TZEENTCH MUTANT units can make a Warpmeld Sacrifice. Each time a TZEENTCH MUTANT unit from your army is selected to shoot or fight, before selecting its targets, that unit can make a Warpmeld Sacrifice."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "tzaangors"
       ],
       "keyword": "Battleline"
      }
     ],
     "enhancements": [
      {
       "id": "warpmeld_dagger",
       "name": "Warpmeld Dagger",
       "pts": 10,
       "upgrade": false,
       "text": "TZAANGOR SHAMAN only. When it attempts a Ritual, before the result it can suffer D3 mortal wounds; if it survives, add that many to the Psychic test result.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "unitIds": [
         "tzaangor_shaman"
        ]
       }
      },
      {
       "id": "diamond_of_distortion",
       "name": "Diamond of Distortion",
       "pts": 20,
       "upgrade": false,
       "text": "TZAANGOR SHAMAN only. While it leads a unit, attacks against that unit get -1 to hit.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "unitIds": [
         "tzaangor_shaman"
        ]
       }
      },
      {
       "id": "bray_lord",
       "name": "Bray Lord",
       "pts": 15,
       "upgrade": false,
       "text": "SORCERER or INFERNAL MASTER only. The bearer has Scouts 6\" and can lead TZAANGORS.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAny": [
         "Sorcerer",
         "Infernal Master"
        ]
       },
       "leaderOf": [
        "tzaangors"
       ]
      },
      {
       "id": "flowing_flesh",
       "name": "Flowing Flesh",
       "pts": 10,
       "upgrade": false,
       "text": "TZAANGOR SHAMAN only. The bearer has the Feel No Pain 4+ ability and a Wounds characteristic of 5.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "unitIds": [
         "tzaangor_shaman"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "W",
         "set": "5"
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "gift_of_change",
       "name": "Gift of Change",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One Thousand Sons Character model from your army (excluding Monsters) that was just destroyed. You can use this Stratagem on that model even though it was just destroyed.",
       "effect": "At the end of the phase, add one Tzeentch Chaos Spawn unit containing one model to your army, and set it up as close as possible to where your model was destroyed and not within Engagement Range of one or more enemy units.",
       "restrictions": "You can only use this Stratagem once per battle round."
      },
      {
       "id": "warped_vicissitude",
       "name": "Warped Vicissitude",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Tzaangors unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, models in your unit have a 4+ invulnerable save."
      },
      {
       "id": "deranged_ferocity",
       "name": "Deranged Ferocity",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after a Tzeentch Mutant unit from your army is selected to fight.",
       "target": "That TZEENTCH MUTANT unit.",
       "effect": "Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\", and when determining which models in it are eligible to fight, any models in it that are within 3\" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3\" of them and within Engagement Range of their unit."
      },
      {
       "id": "blessed_transmutations",
       "name": "Blessed Transmutations",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One Thousand Sons Psyker model from your army, and one friendly Tzaangors unit that is below its Starting Strength and within 12\" of that PSYKER model.",
       "effect": "Return up to D3+1 destroyed models (excluding Characters) to your TZAANGORS unit."
      },
      {
       "id": "touched_by_tzeentch",
       "name": "Touched by Tzeentch",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Start of your Movement phase.",
       "target": "One Tzeentch Mutant unit from your army.",
       "effect": "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Advanced."
      },
      {
       "id": "twisted_mirage",
       "name": "Twisted Mirage",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Reinforcements step of your Movement phase.",
       "target": "One Tzeentch Mutant unit from your army that is arriving from Strategic Reserves this phase.",
       "effect": "Your unit can be set up anywhere on the battlefield that is more than 6\" horizontally away from all enemy units, or anywhere on the battlefield that is more than 9\" horizontally away from all enemy units if it is a Monster unit. In either case, until the end of the turn, it is not eligible to declare a charge."
      }
     ],
     "restrictions": " This detachment has the MUTANT tag and cannot be taken with another MUTANT detachment."
    },
    {
     "id": "rubricae_phalanx",
     "name": "Rubricae Phalanx",
     "dp": 3,
     "dispositions": [
      "Take and Hold",
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Rubricae shrug off small-arms fire: +1 to armour saves against Damage 1 attacks.",
     "rule": {
      "name": "All Is Dust",
      "text": "Each time an attack with an unmodified Damage characteristic of 1 is allocated to a RUBRICAE model from your army, add 1 to any armour saving throw made against that attack."
     },
     "enhancements": [
      {
       "id": "risen_rubricae",
       "name": "Risen Rubricae",
       "pts": 30,
       "upgrade": false,
       "text": "THOUSAND SONS model only. At the start of Declare Battle Formations pick two RUBRICAE BATTLELINE units or one other RUBRICAE unit: they have Infiltrators (an attached CHARACTER too).",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "arcane_thralls",
       "name": "Arcane Thralls (Aura)",
       "pts": 5,
       "upgrade": false,
       "text": "THOUSAND SONS model only. Friendly RUBRICAE units within 9\" can re-roll battle-shock tests.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "lord_of_the_rubricae",
       "name": "Lord of the Rubricae",
       "pts": 15,
       "upgrade": false,
       "text": "THOUSAND SONS model only. While the bearer leads a unit, attacks by RUBRICAE models in it get +1 to hit.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "stave_abominus",
       "name": "The Stave Abominus",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS INFANTRY model only. The bearer's melee weapons have [SUSTAINED HITS D3] and [DEVASTATING WOUNDS].",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "ardent_automata",
       "name": "Ardent Automata",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after a Rubricae unit from your army Falls Back.",
       "target": "That RUBRICAE unit.",
       "effect": "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
      },
      {
       "id": "inexorable_advance",
       "name": "Inexorable Advance",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase.",
       "target": "One Rubricae unit from your army.",
       "effect": "Until the end of the turn, your unit can ignore any or all modifiers to its Move characteristic and to Advance rolls made for it, and ranged weapons equipped by models in your unit have the [ASSAULT] ability."
      },
      {
       "id": "infernal_fusillade",
       "name": "Infernal Fusillade",
       "cp": 2,
       "type": "Wargear",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, all inferno bolt pistols, inferno boltguns, inferno combi-bolters and inferno combi-weapons equipped by models in your unit have the [PSYCHIC] ability and a Strength characteristic of 5."
      },
      {
       "id": "revenge_of_the_rubricae",
       "name": "Revenge of the Rubricae",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after a Thousand Sons Psyker model from your army is destroyed.",
       "target": "One Rubricae unit from your army that was within 6\" of that PSYKER model when it was destroyed.",
       "effect": "After the attacking unit has shot, your RUBRICAE unit can shoot as if it were your Shooting phase, but when resolving those attacks it can only target the enemy unit that just destroyed your PSYKER model (and only if it is an eligible target)."
      },
      {
       "id": "implacable_guardians",
       "name": "Implacable Guardians",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Rubric Marines Psyker unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack is allocated to a model in your unit (excluding PSYKER models), subtract 1 from the Damage characteristic of that attack."
      },
      {
       "id": "unwavering_phalanx",
       "name": "Unwavering Phalanx",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Charge"
       ],
       "when": "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
       "target": "One Rubric Marines unit from your army within Engagement Range of that enemy unit.",
       "effect": "Until the end of the turn, each time an attack targets your unit, subtract 1 from the Wound roll."
      }
     ]
    },
    {
     "id": "warpforged_cabal",
     "name": "Warpforged Cabal",
     "dp": 2,
     "dispositions": [
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Vehicles re-roll a hit, wound and damage roll near your psykers and explode more readily.",
     "rule": {
      "name": "Warpfire Infusion",
      "text": "Each time a THOUSAND SONS VEHICLE unit from your army is selected to shoot or fight, apply one of the following when resolving those attacks: If that VEHICLE unit is within 6\" of one or more friendly THOUSAND SONS PSYKER models, you can re-roll one Hit roll , one Wound roll and one Damage roll."
     },
     "enhancements": [
      {
       "id": "warp_syphon",
       "name": "Warp Syphon",
       "pts": 5,
       "upgrade": false,
       "text": "Each time the bearer Channels the Warp, the bearer can use this Enhancement. If it does, select one friendly THOUSAND SONS VEHICLE unit within 6\"; that VEHICLE unit suffers 1 mortal wound and you can re-roll that additional D6.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "perplexing_cloak",
       "name": "The Perplexing Cloak",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS INFANTRY model only. Lone Operative while within 3\" of a friendly THOUSAND SONS VEHICLE.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Infantry"
        ]
       }
      },
      {
       "id": "biomechanical_mutation",
       "name": "Biomechanical Mutation",
       "pts": 15,
       "upgrade": false,
       "text": "THOUSAND SONS model only. Your Command phase: one friendly THOUSAND SONS VEHICLE model within 6\" regains up to D3 wounds.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "warp_cursed_runemaster",
       "name": "Warp-Cursed Runemaster",
       "pts": 10,
       "upgrade": false,
       "text": "THOUSAND SONS model only. While within 6\" of a friendly THOUSAND SONS VEHICLE, Rituals it manifests get +6\" range.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "hex_marked_armour",
       "name": "Hex-marked Armour",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Thousand Sons Vehicle unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1."
      },
      {
       "id": "mutate_landscape",
       "name": "Mutate Landscape",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One Thousand Sons Psyker unit from your army within range of an objective marker you control.",
       "effect": "That objective marker is mutated, and remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase. While an objective marker is mutated and under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 4+, that enemy unit suffers D3 mortal wounds."
      },
      {
       "id": "cyberspirit_machinations",
       "name": "Cyberspirit Machinations",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after a Thousand Sons Vehicle unit from your army Falls Back.",
       "target": "That VEHICLE unit, and one friendly Thousand Sons Psyker unit within 6\" of that VEHICLE unit.",
       "effect": "Until the end of the turn, your VEHICLE unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
      },
      {
       "id": "malevolent_animus",
       "name": "Malevolent Animus",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Your Command phase.",
       "target": "One Thousand Sons Vehicle unit from your army within 6\" of one or more friendly Thousand Sons Psyker units.",
       "effect": "Until the start of your next Command phase, your VEHICLE unit is malevolent. While a unit is malevolent, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill and Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws)."
      },
      {
       "id": "ensorcelled_infusion",
       "name": "Ensorcelled Infusion",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Thousand Sons Vehicle unit from your army that has not been selected to shoot this phase, that is within 6\" of one or more friendly Thousand Sons Psyker units.",
       "effect": "Until the end of the phase, ranged weapons equipped by VEHICLE models in your unit have the [PSYCHIC] ability and each time an attack is made with such a weapon, add 1 to the Wound roll."
      },
      {
       "id": "warpflame_gargoyles",
       "name": "Warpflame Gargoyles",
       "cp": 1,
       "type": "Wargear",
       "phases": [
        "Charge"
       ],
       "when": "Your opponent’s Charge phase, just after an enemy unit ends a Charge move.",
       "target": "One Thousand Sons Vehicle unit from your army within Engagement Range of that enemy unit.",
       "effect": "Roll six D6: for each 5+, that enemy unit suffers 1 mortal wound. That enemy unit must then take a Battle-shock test."
      }
     ]
    },
    {
     "id": "ritual_of_regeneration",
     "name": "Ritual of Regeneration",
     "dp": 1,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Psykers heal themselves each time they manifest a Ritual.",
     "rule": {
      "name": "Sorcerous Invigoration",
      "text": "(Once per turn, per unit) When a friendly THOUSAND SONS PSYKER unit (excluding MONSTER units) successfully manifests a Ritual , that unit heals D3 wounds."
     },
     "regenHint": true,
     "enhancements": [
      {
       "id": "eruption_of_vitality",
       "name": "Eruption of Vitality",
       "pts": 35,
       "upgrade": false,
       "text": "INFANTRY/MOUNTED THOUSAND SONS PSYKER only. Once per battle (per army), when it is destroyed, roll D6 at the end of the phase: on a 2+ set it back up unengaged as close as possible, on its own, with 3 wounds. This model is not part of an attached unit and its unit has a starting strength of 1.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Psyker"
        ],
        "keywordsNone": [
         "Monster"
        ]
       }
      },
      {
       "id": "curse_of_life",
       "name": "Curse of Life",
       "pts": 20,
       "upgrade": false,
       "text": "INFANTRY/MOUNTED THOUSAND SONS PSYKER only. When it heals through Sorcerous Invigoration, it can heal 3 more wounds.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAll": [
         "Psyker"
        ],
        "keywordsNone": [
         "Monster"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "relentless_rebirth",
       "name": "Relentless Rebirth",
       "cp": 1,
       "type": "Ritual of Regeneration",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a friendly INFANTRY / MOUNTED THOUSAND SONS PSYKER unit suffers a mortal wound .",
       "target": "That INFANTRY/MOUNTED THOUSAND SONS PSYKER unit.",
       "effect": "Your unit has Feel No Pain 5+ against mortal wounds ."
      },
      {
       "id": "mutagenic_magicks",
       "name": "Mutagenic Magicks",
       "cp": 1,
       "type": "Ritual of Regeneration",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase .",
       "target": "One friendly engaged THOUSAND SONS PSYKER unit.",
       "effect": "Select one enemy unit engaged with your unit. Roll six D6: For each 4+, that enemy unit suffers 1 mortal wound ."
      },
      {
       "id": "multitudinous_limbs",
       "name": "Multitudinous Limbs",
       "cp": 1,
       "type": "Ritual of Regeneration",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase , when a friendly INFANTRY / MOUNTED THOUSAND SONS PSYKER unit is selected to make an advance / fall back move .",
       "target": "That INFANTRY/MOUNTED THOUSAND SONS PSYKER unit.",
       "effect": "That move does not prevent your unit from being eligible to start an action ."
      }
     ]
    },
    {
     "id": "sekhetar_cohort",
     "name": "Sekhetar Cohort",
     "dp": 1,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Sekhetar Robots strike with psychic force and fight better near your psykers.",
     "rule": {
      "name": "Ensorcelled Animus",
      "text": "Friendly SEKHETAR ROBOTS units’ attacks have [PSYCHIC] . Friendly THOUSAND SONS PSYKER units have the following ability: Infusion (Aura): While a friendly SEKHETAR ROBOTS unit is within 12\" of this unit, that unit’s melee attacks have +1 WS ."
     },
     "enhancements": [
      {
       "id": "walking_rampart",
       "name": "Walking Rampart",
       "pts": 30,
       "upgrade": false,
       "text": "SORCERER or EXALTED SORCERER only. Movement phase, start or end of its move: one SEKHETAR ROBOTS unit within 3\" heals D3+1 wounds. Lone Operative while within 3\" of a SEKHETAR ROBOTS unit.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAny": [
         "Sorcerer",
         "Exalted Sorcerer"
        ]
       }
      },
      {
       "id": "occulus_infernum",
       "name": "Occulus Infernum",
       "pts": 20,
       "upgrade": false,
       "text": "SORCERER or EXALTED SORCERER only. Movement phase, start or end of its move: one SEKHETAR ROBOTS unit within 6\" gets +1 BS for ranged attacks until your next turn.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "keywordsAny": [
         "Sorcerer",
         "Exalted Sorcerer"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "arcane_venting",
       "name": "Arcane Venting",
       "cp": 1,
       "type": "Sekhetar Cohort",
       "phases": [
        "Movement"
       ],
       "when": "End of your Movement phase .",
       "target": "One friendly SEKHETAR ROBOTS unit.",
       "effect": "Select one objective your unit is controlling . That objective is secured ."
      },
      {
       "id": "ectoplasmic_extrusion",
       "name": "Ectoplasmic Extrusion",
       "cp": 1,
       "type": "Sekhetar Cohort",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase , when a friendly SEKHETAR ROBOTS unit within 12\" of a friendly THOUSAND SONS PSYKER unit starts an action .",
       "target": "That SEKHETAR ROBOTS unit.",
       "effect": "That action does not prevent your unit from being eligible to shoot ."
      },
      {
       "id": "warp_fields",
       "name": "Warp Fields",
       "cp": 1,
       "type": "Sekhetar Cohort",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase , when an enemy unit targets a friendly SEKHETAR ROBOTS unit within 12\" of a friendly THOUSAND SONS PSYKER unit.",
       "target": "That SEKHETAR ROBOTS unit.",
       "effect": "Ranged attacks that target your unit with a S greater than your unit’s T have -1 to wound rolls ."
      }
     ]
    },
    {
     "id": "servants_of_change",
     "name": "Servants of Change",
     "dp": 1,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [
      "MUTANT"
     ],
     "summary": "Tzaangors are Battleline and mutants expose their targets.",
     "rule": {
      "name": "All-seeing Mutant Hordes",
      "text": "Friendly TZAANGORS units have BATTLELINE . In your Shooting phase , while a friendly MUTANT unit is shooting, enemy units have +6\" detection range . This detachment has the MUTANT tag and cannot be taken with another MUTANT detachment."
     },
     "grantKeywords": [
      {
       "unitIds": [
        "tzaangors"
       ],
       "keyword": "Battleline"
      }
     ],
     "enhancements": [
      {
       "id": "unravelled_fates",
       "name": "Unravelled Fates",
       "pts": 15,
       "upgrade": false,
       "text": "TZAANGOR SHAMAN only. Movement phase, start or end of its move: one battle-shocked friendly MUTANT unit within 6\" is no longer battle-shocked.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ],
        "unitIds": [
         "tzaangor_shaman"
        ]
       }
      },
      {
       "id": "thicket_of_bladed_bone",
       "name": "Thicket of Bladed Bone",
       "pts": 10,
       "upgrade": true,
       "text": "SPAWN unit only. Its melee attacks get +1 AP and [CLEAVE 1].",
       "eligible": {
        "unitIds": [
         "chaos_spawn"
        ]
       },
       "mods": [
        {
         "target": "melee",
         "stat": "AP",
         "add": -1
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "prismatic_displacement",
       "name": "Prismatic Displacement",
       "cp": 1,
       "type": "Servants of Change",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase , when a friendly INFANTRY / MOUNTED MUTANT unit is selected to make an advance / fall back move .",
       "target": "That INFANTRY/MOUNTED MUTANT unit.",
       "effect": "Your unit’s ranged attacks have [ASSAULT] until the end of the turn. That move does not prevent your unit from being eligible to shoot / declare a charge ."
      },
      {
       "id": "temporal_instability",
       "name": "Temporal Instability",
       "cp": 1,
       "type": "Servants of Change",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase , when a friendly INFANTRY / MOUNTED MUTANT unit is selected to make an advance / fall back move .",
       "target": "That INFANTRY/MOUNTED MUTANT unit.",
       "effect": "In a turn your unit made an advance/fall-back move , that move does not prevent your unit from being eligible to start an action ."
      },
      {
       "id": "the_land_writhes",
       "name": "The Land Writhes",
       "cp": 1,
       "type": "Servants of Change",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, when a friendly MONSTER MUTANT unit is selected to move.",
       "target": "That unit.",
       "effect": "Until the end of the phase, your unit has the MOBILE ability (it can shoot and charge in a turn in which it Fell Back)."
      }
     ]
    },
    {
     "id": "hexwarp_thrallband",
     "name": "Hexwarp Thrallband",
     "dp": 3,
     "dispositions": [
      "Take and Hold",
      "Reconnaissance"
     ],
     "tags": [],
     "summary": "Psychic attacks re-roll wound rolls of 1, or get +1 to wound inside your Flow of Magic.",
     "rule": {
      "name": "Flow of Magic",
      "text": "Certain areas of the battlefield are within your army’s Flow of Magic, as follows: Your deployment zone is always within your army’s Flow of Magic. At the start of any phase, if you control at least half of the objective markers within No Man’s Land, until the end of that phase, No Man’s Land is within your army’s Flow of Magic."
     },
     "enhancements": [
      {
       "id": "arcane_might",
       "name": "Arcane Might",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS model only. +1 S for Psychic weapons in the bearer's unit (+2 while wholly within your Flow of Magic).",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "empowered_manifestation",
       "name": "Empowered Manifestation",
       "pts": 20,
       "upgrade": false,
       "text": "THOUSAND SONS model only. While wholly within your Flow of Magic: +6\" to the range of its ranged Psychic abilities (Rituals too) and re-roll Hazardous tests for Psychic weapons.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "empyric_onslaught",
       "name": "Empyric Onslaught",
       "pts": 25,
       "upgrade": false,
       "text": "THOUSAND SONS model only. While wholly within your Flow of Magic: +3 A for the bearer's ranged Psychic weapons.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      },
      {
       "id": "noctilith_mantle",
       "name": "Noctilith Mantle",
       "pts": 15,
       "upgrade": false,
       "text": "THOUSAND SONS model only. The bearer's unit is always wholly within your Flow of Magic, but its models cannot attempt Rituals.",
       "eligible": {
        "factionsAll": [
         "Thousand Sons"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "warding_hex",
       "name": "Warding Hex",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Command"
       ],
       "when": "Command phase.",
       "target": "One Thousand Sons Psyker unit from your army within range of an objective marker you control, if that objective marker is wholly within your army’s Flow of Magic.",
       "effect": "That objective marker remains under your control until your opponent’s Level of Control over that objective marker is greater than yours at the end of a phase."
      },
      {
       "id": "wrath_of_the_doomed",
       "name": "Wrath of the Doomed",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One THOUSAND SONS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if your unit is wholly within your army’s Flow of Magic: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play."
      },
      {
       "id": "strands_of_time",
       "name": "Strands of Time",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after a THOUSAND SONS PSYKER unit from your army Falls Back.",
       "target": "That Thousand Sons Psyker unit.",
       "effect": "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Fell Back. If your unit is wholly within your army’s Flow of Magic when it is targeted with this Stratagem, then until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back."
      },
      {
       "id": "through_the_veil",
       "name": "Through the Veil",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Movement"
       ],
       "when": "Start of the Reinforcements step of your Movement phase.",
       "target": "One Rubric Marines or Scarab Occult Terminators unit from your army that is in Strategic Reserves.",
       "effect": "If it is a RUBRIC MARINES unit, until the end of the phase, it has the Deep Strike ability. When your unit is set up on the battlefield using the Deep Strike ability, if it is a SCARAB OCCULT TERMINATOR unit it can be set up anywhere on the battlefield that is wholly within your army’s Flow of Magic and more than 6\" horizontally away from all enemy models.",
       "restrictions": "If a SCARAB OCCULT TERMINATORS unit is targeted with this Stratagem, it is not eligible to declare a charge in the same turn."
      },
      {
       "id": "scouring_warpflame",
       "name": "Scouring Warpflame",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One Thousand Sons Psyker unit from your army that has not been selected to shoot this phase and is wholly within your army’s Flow of Magic.",
       "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. After your unit has shot this phase, select one enemy unit hit by one or more of those attacks. Until the end of the phase, models in that unit cannot have the Benefit of Cover."
      },
      {
       "id": "kaleidoscopic_tempest",
       "name": "Kaleidoscopic Tempest",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
       "target": "One Thousand Sons Psyker unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, your unit has the Stealth ability, and, if your unit is wholly within your army’s Flow of Magic, each time an attack targets your unit, it has the Benefit of Cover against that attack."
      }
     ]
    }
   ],
   "units": [
    {
     "id": "magnus_the_red",
     "name": "Magnus the Red",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Monster",
      "Psyker",
      "Fly",
      "Character",
      "Epic Hero",
      "Daemon",
      "Chaos",
      "Tzeentch",
      "Primarch",
      "Magnus the Red"
     ],
     "image": "ts_magnus_the_red",
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
     "ranged": [
      {
       "name": "Gaze of Magnus",
       "range": "24\"",
       "A": "3D3",
       "skill": "2+",
       "S": "11",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Tzeentch's Firestorm",
       "range": "24\"",
       "A": "D6+3",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Ignores Cover",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Blade of Magnus - strike",
       "range": "Melee",
       "A": "7",
       "skill": "2+",
       "S": "16",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Blade of Magnus - sweep",
       "range": "Melee",
       "A": "14",
       "skill": "2+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Supreme Commander",
       "text": "If this model is in your army, it must be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Unearthly Power",
       "text": "Start of each battle round: Magnus gains one Crimson King ability until the next round. Impossible Form: -1 Damage for non-psychic attacks against him. Treason of Tzeentch: start of your opponent's Shooting phase, one enemy unit within 24\" has [HAZARDOUS] ranged weapons that phase. Time Flux (Aura): friendly THOUSAND SONS units within 6\" get +2\" Move.",
       "kind": "datasheet"
      },
      {
       "name": "Lord of the Planet of the Sorcerers (Psychic)",
       "text": "Magnus can attempt up to two Rituals per turn and adds 2 to his Psychic test results.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 455
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Magnus the Red (Epic Hero): Gaze of Magnus, Tzeentch's Firestorm, blade of Magnus.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "ritualsPerTurn": 2,
     "ritualBonus": 2,
     "mustBeWarlord": "Supreme Commander: Magnus the Red must be your Warlord.",
     "roundPick": {
      "title": "The Crimson King",
      "style": "eye",
      "who": "Magnus",
      "note": "Start of each battle round: Magnus gains one of these until the next battle round.",
      "deadNote": "Magnus is dead.",
      "options": [
       {
        "id": "form",
        "name": "Impossible Form",
        "effect": "-1 Damage to attacks against Magnus that are not Psychic."
       },
       {
        "id": "treason",
        "name": "Treason of Tzeentch",
        "effect": "Start of your opponent's Shooting phase: one enemy unit within 24\" has [HAZARDOUS] ranged weapons that phase."
       },
       {
        "id": "flux",
        "name": "Time Flux",
        "effect": "Aura 6\": friendly THOUSAND SONS units get +2\" Move."
       }
      ]
     }
    },
    {
     "id": "ahriman",
     "name": "Ahriman",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Fly",
      "Mounted",
      "Ahriman"
     ],
     "image": "ts_ahriman",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "4+",
      "W": "6",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Transmogrifying Blast",
       "range": "18\"",
       "A": "D6+1",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Blast",
        "Psychic"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Black Staff of Ahriman",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "7",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Scryer of Fates (Psychic)",
       "text": "After both armies deploy, redeploy up to three THOUSAND SONS units; they can go into Strategic Reserves regardless of the usual limit.",
       "kind": "datasheet"
      },
      {
       "name": "Arch-Sorcerer of Tzeentch (Psychic)",
       "text": "+1 to this model's Psychic test results.",
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
     "leaderOf": [
      "rubric_marines",
      "tzaangor_enlightened",
      "tzaangor_enlightened_fatecaster"
     ],
     "composition": "1 Ahriman (Epic Hero): inferno bolt pistol, Transmogrifying Blast, Black Staff of Ahriman.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "ritualBonus": 1
    },
    {
     "id": "exalted_sorcerer",
     "name": "Exalted Sorcerer",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Exalted Sorcerer"
     ],
     "image": "ts_exalted_sorcerer",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
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
       "name": "Astral Blast",
       "range": "18\"",
       "A": "D6",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Blast",
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Prosperine khopesh",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Arcane Shield (Psychic)",
       "text": "While this model leads a unit, its models have a 4+ invulnerable save.",
       "kind": "datasheet"
      },
      {
       "name": "Rebind Rubricae (Psychic)",
       "text": "In your Command phase, if this model is leading a unit, you can roll one D6: on a 1, that unit suffers D3 mortal wounds; on a 2-5, you can return up to D3 destroyed Bodyguard models to that unit; on a 6, you can return up to 3 destroyed Bodyguard models to that unit.",
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
      "rubric_marines"
     ],
     "composition": "1 Exalted Sorcerer: Astral Blast, inferno bolt pistol, force weapon.",
     "options": [
      {
       "id": "khopesh",
       "type": "toggle",
       "label": "Prosperine khopesh"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "exalted_sorcerer_on_disc_of_tzeentch",
     "name": "Exalted Sorcerer on Disc of Tzeentch",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Exalted Sorcerer",
      "Fly",
      "Grenades",
      "Mounted"
     ],
     "image": "ts_exalted_sorcerer_on_disc_of_tzeentch",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "4+",
      "W": "6",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Arcane Fire",
       "range": "18\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Ignores Cover",
        "Psychic",
        "Torrent"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Prosperine khopesh",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Illusions of Tzeentch (Psychic)",
       "text": "While this model leads a unit, that unit can only be shot by models within 18\".",
       "kind": "datasheet"
      },
      {
       "name": "Binding Tendrils (Psychic)",
       "text": "Your Shooting phase, after this model shoots: one enemy INFANTRY unit hit by its Arcane Fire is ensnared until your next turn: -2\" Move and -2 to charge rolls.",
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
      "rubric_marines",
      "tzaangor_enlightened",
      "tzaangor_enlightened_fatecaster"
     ],
     "composition": "1 Exalted Sorcerer on Disc of Tzeentch: Arcane Fire, inferno bolt pistol, force weapon.",
     "options": [
      {
       "id": "khopesh",
       "type": "toggle",
       "label": "Prosperine khopesh"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "infernal_master",
     "name": "Infernal Master",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Infernal Master"
     ],
     "image": "ts_infernal_master",
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Fires of the Abyss - witchfire",
       "range": "18\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Psychic",
        "Torrent"
       ]
      },
      {
       "name": "Fires of the Abyss - focused witchfire",
       "range": "18\"",
       "A": "2D6",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Hazardous",
        "Psychic",
        "Torrent"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Malefic Maelstrom (Psychic)",
       "text": "While this model leads a unit, weapons in that unit have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Glimpse of Eternity (Psychic)",
       "text": "Once per turn, change one hit roll, wound roll or saving throw made for this model to an unmodified 6.",
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
     "leaderOf": [
      "rubric_marines"
     ],
     "composition": "1 Infernal Master: inferno bolt pistol, Fires of the Abyss, force weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "sorcerer",
     "name": "Sorcerer",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Grenades",
      "Chaos",
      "Tzeentch",
      "Sorcerer"
     ],
     "image": "ts_sorcerer",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Pandaemonic Delusion",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Psychic",
        "Sustained Hits 3"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Prosperine khopesh",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Twisted Sorceries (Psychic)",
       "text": "Once per battle, in your Shooting phase or the Fight phase: +3 S and +3 A for this model's Psychic weapons until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Empyric Guidance (Psychic)",
       "text": "While this model leads a unit, weapons in that unit have [LETHAL HITS].",
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
     "leaderOf": [
      "rubric_marines"
     ],
     "composition": "1 Sorcerer: inferno bolt pistol, Pandaemonic Delusion, force weapon.",
     "options": [
      {
       "id": "khopesh",
       "type": "toggle",
       "label": "Prosperine khopesh"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "sorcerer_in_terminator_armour",
     "name": "Sorcerer in Terminator Armour",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Sorcerer",
      "Terminator"
     ],
     "image": "ts_sorcerer_in_terminator_armour",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "2+",
      "InSv": "4+",
      "W": "5",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Gaze of Hate",
       "range": "18\"",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Anti-monster 4+",
        "Anti-vehicle 4+",
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Marked by Fate (Psychic)",
       "text": "Start of your Shooting phase: pick one enemy unit visible to this model. Until the end of the phase, attacks by models in this unit against it get +1 to hit.",
       "kind": "datasheet"
      },
      {
       "name": "Empyric Guidance (Psychic)",
       "text": "While this model leads a unit, weapons in that unit have [LETHAL HITS].",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 110,
       "ptsLater": 120
      }
     ],
     "stepFrom": 3,
     "leaderOf": [
      "scarab_occult_terminators"
     ],
     "composition": "1 Sorcerer in Terminator Armour: Gaze of Hate, inferno combi-bolter, force weapon.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Gun",
       "choices": [
        {
         "id": "combib",
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
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
     "id": "daemon_prince_of_tzeentch",
     "name": "Daemon Prince of Tzeentch",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Monster",
      "Character",
      "Daemon",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Daemon Prince"
     ],
     "image": "ts_daemon_prince_of_tzeentch",
     "baseSize": "60mm",
     "profile": {
      "M": "9\"",
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
       "name": "Dark Blessing",
       "range": "24\"",
       "A": "9",
       "skill": "2+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Psychic",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "12",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Spirit Snare",
       "text": "When a friendly THOUSAND SONS PSYKER with Cabal of Sorcerers dies within 9\" of models with this ability, one of them gets +1 to its Psychic tests for the rest of the battle (max +2).",
       "kind": "datasheet"
      },
      {
       "name": "Servile Pawns",
       "text": "While within 3\" of a friendly THOUSAND SONS INFANTRY unit, this model has Lone Operative.",
       "kind": "datasheet"
      },
      {
       "name": "Glamour of Tzeentch (Aura, Psychic)",
       "text": "Friendly THOUSAND SONS INFANTRY units within 6\" have Stealth.",
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
     "composition": "1 Daemon Prince of Tzeentch: Dark Blessing, infernal cannon, hellforged weapons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "daemon_prince_of_tzeentch_with_wings",
     "name": "Daemon Prince of Tzeentch with Wings",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Monster",
      "Character",
      "Daemon",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Daemon Prince",
      "Fly"
     ],
     "image": "ts_daemon_prince_of_tzeentch_with_wings",
     "baseSize": "60mm",
     "profile": {
      "M": "13\"",
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
       "name": "Dark Blessing",
       "range": "24\"",
       "A": "9",
       "skill": "2+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Psychic",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Infernal cannon",
       "range": "24\"",
       "A": "3",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Hellforged weapons - strike",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Hellforged weapons - sweep",
       "range": "Melee",
       "A": "12",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Aetherstride (Psychic)",
       "text": "When it arrives by Deep Strike in your Movement phase it can aetherstride: set up more than 6\" horizontally away from enemy units, its Dark Blessing gains [SUSTAINED HITS D3] this turn, and it cannot charge this turn.",
       "kind": "datasheet"
      },
      {
       "name": "Hunter of Souls",
       "text": "Attacks against CHARACTER units re-roll hit and wound rolls of 1 (full re-rolls against PSYKER CHARACTERS). Destroying a CHARACTER unit heals up to D3 wounds (3 if it was a PSYKER).",
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
     "stepFrom": 2,
     "leaderOf": [],
     "composition": "1 Daemon Prince of Tzeentch with Wings: Dark Blessing, infernal cannon, hellforged weapons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "tzaangor_shaman",
     "name": "Tzaangor Shaman",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Mounted",
      "Character",
      "Fly",
      "Psyker",
      "Chaos",
      "Tzeentch",
      "Tzaangor Shaman",
      "Infantry",
      "Mutant"
     ],
     "image": "ts_tzaangor_shaman",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "4",
      "Sv": "5+",
      "InSv": "5+",
      "W": "4",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Baleful Devolution",
       "range": "18\"",
       "A": "D6",
       "skill": "3+",
       "S": "9",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast",
        "Devastating Wounds",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Force stave",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Cabal of Sorcerers"
     ],
     "abilities": [
      {
       "name": "Sacrificial Blessing",
       "text": "In your Shooting phase and the Fight phase, each time that unit is selected to shoot or fight, this model can use this ability. If it does, destroy one Bodyguard model in that unit; until the end of the phase, add D3 to the Attacks and Strength characteristics of weapons equipped by models in that unit.",
       "kind": "datasheet"
      },
      {
       "name": "Bestial Prophet",
       "text": "While this model leads a unit, that unit's attacks get +1 to hit.",
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
      "tzaangors",
      "tzaangor_enlightened",
      "tzaangor_enlightened_fatecaster"
     ],
     "composition": "1 Tzaangor Shaman: Baleful Devolution, force stave.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "rubric_marines",
     "name": "Rubric Marines",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Battleline",
      "Chaos",
      "Tzeentch",
      "Rubric Marines",
      "Rubricae"
     ],
     "image": "ts_rubric_marines",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "5",
      "Sv": "3+",
      "InSv": "5+",
      "W": "2",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Malefic Curse",
       "range": "24\"",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-3",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Inferno bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Warpflame pistol",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      },
      {
       "name": "Inferno boltgun",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Warpflamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Soulreaper cannon",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "melee": [
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Cabal of Sorcerers (Aspiring Sorcerer only)"
     ],
     "abilities": [
      {
       "name": "Bringers of Change",
       "text": "Ranged attacks re-roll wound rolls of 1, or the whole wound roll against a unit within range of an objective you do not control.",
       "kind": "datasheet"
      },
      {
       "name": "Icon of Flame",
       "text": "Ranged weapons of the bearer's unit (not CHARACTERS) have [IGNORES COVER].",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 115,
       "ptsLater": 125
      },
      {
       "models": 10,
       "pts": 210,
       "ptsLater": 220
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Aspiring Sorcerer (inferno bolt pistol, Malefic Curse, force weapon) and 4 or 9 Rubric Marines (inferno boltgun, close combat weapon).",
     "options": [
      {
       "id": "ch_gun",
       "type": "choice",
       "label": "Champion: pistol",
       "choices": [
        {
         "id": "bolt",
         "label": "Inferno bolt pistol",
         "pts": 0
        },
        {
         "id": "warp",
         "label": "Warpflame pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "soulreaper",
       "type": "count",
       "label": "Soulreaper cannon",
       "slots": [
        "rm"
       ],
       "max": 1
      },
      {
       "id": "warpflamer",
       "type": "count",
       "label": "Warpflamer",
       "slots": [
        "rm"
       ],
       "max": "slot"
      },
      {
       "id": "icon",
       "type": "toggle",
       "label": "Icon of flame"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "rm",
       "label": "Rubric Marine gun",
       "default": "Inferno boltgun",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "All also have a close combat weapon."
      }
     ],
     "optionGroups": [],
     "leadModel": {
      "name": "Aspiring Sorcerer",
      "W": "3",
      "Ld": "6+",
      "keywords": [
       "Psyker"
      ]
     }
    },
    {
     "id": "scarab_occult_terminators",
     "name": "Scarab Occult Terminators",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Chaos",
      "Tzeentch",
      "Scarab Occult",
      "Rubricae",
      "Terminator"
     ],
     "image": "ts_scarab_occult_terminators",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "2+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Malefic Curse",
       "range": "24\"",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-3",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Psychic"
       ]
      },
      {
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Hellfyre missile rack",
       "range": "36\"",
       "A": "2",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Heavy warpflamer",
       "range": "12\"",
       "A": "D6",
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
       "name": "Soulreaper cannon",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "melee": [
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      },
      {
       "name": "Prosperine khopesh",
       "range": "Melee",
       "A": "3",
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
     "factionAbilities": [
      "Cabal of Sorcerers (Scarab Occult Sorcerer only)"
     ],
     "abilities": [
      {
       "name": "Rites of Coalescence",
       "text": "While this unit contains a PSYKER model, attacks against it get -1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 200,
       "ptsLater": 240
      },
      {
       "models": 10,
       "pts": 425,
       "ptsLater": 465
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Scarab Occult Sorcerer (inferno combi-bolter, Malefic Curse, force weapon) and 4 or 9 Scarab Occult Terminators (inferno combi-bolter, Prosperine khopesh).",
     "options": [
      {
       "id": "ch_gun",
       "type": "choice",
       "label": "Champion: inferno combi-bolter",
       "choices": [
        {
         "id": "combib",
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "khopesh",
         "label": "Prosperine khopesh",
         "pts": 0
        }
       ]
      },
      {
       "id": "hwf",
       "type": "count",
       "label": "Heavy warpflamer",
       "slots": [
        "so"
       ],
       "group": "heavy",
       "per": 5,
       "n": 1
      },
      {
       "id": "reaper",
       "type": "count",
       "label": "Soulreaper cannon",
       "slots": [
        "so"
       ],
       "group": "heavy",
       "per": 5,
       "n": 1
      },
      {
       "id": "rack",
       "type": "count",
       "label": "Hellfyre missile rack",
       "per": 5,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "so",
       "label": "Terminator gun",
       "default": "Inferno combi-bolter",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "All Terminators also have a Prosperine khopesh."
      }
     ],
     "optionGroups": [
      {
       "id": "heavy",
       "per": 5,
       "n": 1,
       "label": "Heavy warpflamer / soulreaper cannon"
      }
     ],
     "leadModel": {
      "name": "Scarab Occult Sorcerer",
      "W": "4",
      "Ld": "6+",
      "keywords": [
       "Psyker"
      ]
     }
    },
    {
     "id": "tzaangors",
     "name": "Tzaangors",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Infantry",
      "Chaos",
      "Tzeentch",
      "Tzaangors",
      "Mutant"
     ],
     "image": "ts_tzaangors",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "6+",
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
       "name": "Chainsword",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Tzaangor blades",
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
      "Scouts 6\""
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Ambushing Hunters",
       "text": "End of your opponent's turn: if more than 6\" from all enemy units, you can place this unit into Strategic Reserves.",
       "kind": "datasheet"
      },
      {
       "name": "Brayhorn",
       "text": "Re-roll Advance and charge rolls for the bearer's unit.",
       "kind": "wargear"
      },
      {
       "name": "Herd banner",
       "text": "While the bearer's unit is within range of an objective you control, +1 Leadership (better) for its models.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 75
      },
      {
       "models": 20,
       "pts": 145
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Twistbray and 9 or 19 Tzaangors: Tzaangor blades.",
     "options": [
      {
       "id": "pistols",
       "type": "count",
       "label": "Autopistol and chainsword",
       "slots": [
        "tz"
       ],
       "max": "slot"
      },
      {
       "id": "horn",
       "type": "toggle",
       "label": "Brayhorn"
      },
      {
       "id": "banner",
       "type": "toggle",
       "label": "Herd banner"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "tz",
       "label": "Tzaangor weapons",
       "default": "Tzaangor blades",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "tzaangor_enlightened",
     "name": "Tzaangor Enlightened",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Mounted",
      "Fly",
      "Chaos",
      "Tzeentch",
      "Tzaangor Enlightened",
      "Mutant"
     ],
     "image": "ts_tzaangor_enlightened",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "4",
      "Sv": "5+",
      "InSv": "5+",
      "W": "2",
      "OC": "2",
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
       "name": "Chainsword",
       "range": "Melee",
       "A": "6",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Precision"
       ]
      },
      {
       "name": "Divining spear",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lance",
        "Precision"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Prophesied Doom",
       "text": "Each time this unit ends a Charge move, pick one engaged enemy unit and roll D6 per model in range: each 4+ inflicts 1 mortal wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 50
      },
      {
       "models": 6,
       "pts": 90
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Aviarch and 2 or 5 Enlightened: divining spear.",
     "options": [
      {
       "id": "pistols",
       "type": "count",
       "label": "Autopistol and chainsword",
       "slots": [
        "en"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "en",
       "label": "Enlightened weapons",
       "default": "Divining spear",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "tzaangor_enlightened_fatecaster",
     "name": "Tzaangor Enlightened with Fatecaster Greatbows",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Mounted",
      "Fly",
      "Chaos",
      "Tzeentch",
      "Tzaangor Enlightened",
      "Mutant",
      "Tzaangor Enlightened with Fatecaster Greatbows"
     ],
     "image": "ts_tzaangor_enlightened_fatecaster",
     "baseSize": "40mm",
     "profile": {
      "M": "10\"",
      "T": "4",
      "Sv": "5+",
      "InSv": "5+",
      "W": "2",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Fatecaster greatbow",
       "range": "30\"",
       "A": "2",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "Lethal Hits",
        "Precision"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Malign Trickery",
       "text": "In your opponent's Movement phase, when an enemy unit ends a move within 8\" and this unit is unengaged, it can make a Normal move of up to D6\".",
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
     "composition": "1 Aviarch and 2 or 5 Enlightened: fatecaster greatbow, close combat weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "mutalith_vortex_beast",
     "name": "Mutalith Vortex Beast",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Monster",
      "Chaos",
      "Tzeentch",
      "Mutalith Vortex Beast",
      "Mutant"
     ],
     "image": "ts_mutalith_vortex_beast",
     "baseSize": "120x92mm",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "4+",
      "InSv": "5+",
      "W": "13",
      "OC": "4",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Warp vortex - blast",
       "range": "24\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Warp vortex - beam",
       "range": "36\"",
       "A": "1",
       "skill": "3+",
       "S": "18",
       "AP": "-3",
       "D": "D6+6",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Warp vortex - torrent",
       "range": "18\"",
       "A": "2D6",
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
       "name": "Betentacled maw",
       "range": "Melee",
       "A": "15",
       "skill": "3+",
       "S": "7",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Mutalith claws",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Mutating Vortex (Aura)",
       "text": "End of your Movement phase: roll D6 for each enemy unit within 6\": 2-3 = 1 mortal wound, 4-5 = D3, 6 = D6; each of those units then takes a battle-shock test.",
       "kind": "datasheet"
      },
      {
       "name": "Immaterial Flare (Aura)",
       "text": "A friendly THOUSAND SONS PSYKER within 6\" adds 1 to its Psychic test result when it Channels the Warp (does not stack with other modifiers).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 170,
       "ptsLater": 190
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Mutalith Vortex Beast: warp vortex, betentacled maw, Mutalith claws.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "chaos_spawn",
     "name": "Chaos Spawn",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Beast",
      "Chaos",
      "Tzeentch",
      "Chaos Spawn",
      "Mutant"
     ],
     "image": "ts_chaos_spawn",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "4+",
      "InSv": "5+",
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
      "Feel No Pain 5+"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Regenerating Monstrosities",
       "text": "At the start of each player's Command phase, one model in this unit regains up to 3 wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 2,
       "pts": 65
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
     "id": "sekhetar_robots",
     "name": "Sekhetar Robots",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Tzeentch",
      "Sekhetar Robots"
     ],
     "image": "ts_sekhetar_robots",
     "baseSize": "40mm",
     "profile": {
      "M": "8\"",
      "T": "6",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Pyreflux meltagun",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "10",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2"
       ]
      },
      {
       "name": "Heavy warpflamer",
       "range": "12\"",
       "A": "D6",
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
       "name": "Hellfyre missile rack",
       "range": "36\"",
       "A": "2",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": []
      },
      {
       "name": "Warpflame projector",
       "range": "12\"",
       "A": "D3",
       "skill": "—",
       "S": "3",
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
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Power claw",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Infiltrators",
      "Stealth"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Prophetic Sentinels",
       "text": "Once per turn, Fire Overwatch or Heroic Intervention on this unit costs 1CP less.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 2,
       "pts": 85,
       "ptsLater": 100
      },
      {
       "models": 4,
       "pts": 175,
       "ptsLater": 190
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "2 or 4 Sekhetar Robots: heavy warpflamer, hellfyre missile rack, pyreflux meltagun, close combat weapon.",
     "options": [
      {
       "id": "proj",
       "type": "count",
       "label": "Warpflame projector and power claw",
       "slots": [
        "sk"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "sk",
       "label": "Robot weapons",
       "default": "Pyreflux meltagun",
       "size": {
        "models": 1
       },
       "fixedNote": "All keep a heavy warpflamer, a hellfyre missile rack and a close combat weapon."
      }
     ],
     "optionGroups": []
    },
    {
     "id": "chaos_rhino",
     "name": "Chaos Rhino",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Transport",
      "Dedicated Transport",
      "Chaos",
      "Tzeentch",
      "Rhino",
      "Smoke",
      "Frame"
     ],
     "image": "ts_chaos_rhino",
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
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Sorcerous Support",
       "text": "Your Shooting phase, after this model shoots: pick one enemy unit it hit. Until the end of the phase, Psychic Attacks against it by models that disembarked from this transport this turn get +1 to hit and +1 to wound.",
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
     "composition": "1 Chaos Rhino: inferno combi-bolter, armoured tracks.",
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
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "havoc",
       "type": "toggle",
       "label": "Havoc launcher",
       "note": "This model can be equipped with 1 havoc launcher or can replace 1 inferno combi-bolter with 1 havoc launcher."
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 THOUSAND SONS INFANTRY models (not TERMINATOR models)."
    },
    {
     "id": "chaos_land_raider",
     "name": "Chaos Land Raider",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Transport",
      "Smoke",
      "Chaos",
      "Tzeentch",
      "Land Raider",
      "Frame"
     ],
     "image": "ts_chaos_land_raider",
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
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
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
       "name": "Twin inferno heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
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
     "factionAbilities": [],
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
     "composition": "1 Chaos Land Raider: 2 soulshatter lascannons, twin inferno heavy bolter, armoured tracks.",
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
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
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
     "transport": "Carries 14 THOUSAND SONS INFANTRY models. Each TERMINATOR model takes the space of 2."
    },
    {
     "id": "chaos_predator_annihilator",
     "name": "Chaos Predator Annihilator",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Tzeentch",
      "Predator Annihilator",
      "Frame"
     ],
     "image": "ts_chaos_predator_annihilator",
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
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Inferno heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Ensorcelled Annihilation",
       "text": "Ranged attacks against a MONSTER or VEHICLE unit already hit this phase by a THOUSAND SONS PSYKER's Psychic Attack (Doombolt included) can re-roll the hit roll and the damage roll.",
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
         "label": "2 inferno heavy bolters",
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
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
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
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Tzeentch",
      "Predator Destructor",
      "Frame"
     ],
     "image": "ts_chaos_predator_destructor",
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
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Inferno heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Ensorcelled Destruction",
       "text": "Ranged attacks against a non-MONSTER, non-VEHICLE unit already hit this phase by a THOUSAND SONS PSYKER's Psychic Attack (Doombolt included) get +1 S and +1 AP.",
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
         "id": "las",
         "label": "2 lascannons",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "2 inferno heavy bolters",
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
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
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
     "id": "chaos_vindicator",
     "name": "Chaos Vindicator",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Chaos",
      "Tzeentch",
      "Vindicator",
      "Frame"
     ],
     "image": "ts_chaos_vindicator",
     "baseSize": "Use model",
     "profile": {
      "M": "9\"",
      "T": "11",
      "Sv": "2+",
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
       "name": "Demolisher cannon",
       "range": "24\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Inferno combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-2",
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
      "Deadly Demise D3"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Siege Shield",
       "text": "Its demolisher cannon can target enemy units in Engagement Range with it (if no other friendly unit is engaged with them), and it suffers no hit penalty for shooting while engaged.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 185,
       "ptsLater": 195
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Chaos Vindicator: demolisher cannon, armoured tracks.",
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
         "label": "Inferno combi-bolter",
         "pts": 0
        },
        {
         "id": "combiw",
         "label": "Inferno combi-weapon",
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
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Daemon",
      "Defiler",
      "Tzeentch"
     ],
     "image": "ts_defiler",
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
        "Blast"
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
       "kw": []
      },
      {
       "name": "Hades lascannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "12",
       "AP": "-3",
       "D": "D6+1",
       "kw": []
      },
      {
       "name": "Heavy reaper autocannon",
       "range": "48\"",
       "A": "4",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds",
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
        "Blast"
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
        "Blast"
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
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Pyraflux magma cutter",
       "range": "12\"",
       "A": "2",
       "skill": "3+",
       "S": "10",
       "AP": "-4",
       "D": "D6",
       "kw": [
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
       "kw": []
      },
      {
       "name": "Shearing claws - sweep",
       "range": "Melee",
       "A": "10",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": []
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Scuttling Walker",
       "text": "On Normal, Advance and Fall Back moves it can move through models (not TITANIC) and terrain, crossing Engagement Range without ending there; it automatically passes Desperate Escape tests.",
       "kind": "datasheet"
      },
      {
       "name": "Destroyer of Futures (Once per phase, per unit)",
       "text": "Once per phase you can use Counteroffensive on this unit even if it was already used this phase; that use costs 1CP less and does not stop other units using it.",
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
         "label": "2 pyraflux magma cutters",
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
     "id": "forgefiend",
     "name": "Forgefiend",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Walker",
      "Daemon",
      "Chaos",
      "Tzeentch",
      "Forgefiend"
     ],
     "image": "ts_forgefiend",
     "baseSize": "120x92mm",
     "profile": {
      "M": "8\"",
      "T": "10",
      "Sv": "3+",
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
       "name": "Ectoplasma cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Hades autocannon",
       "range": "36\"",
       "A": "6",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Forgefiend claws",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Forgefiend jaws",
       "range": "Melee",
       "A": "5",
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Blazing Salvos",
       "text": "Your Shooting phase, after this model shoots: one enemy unit it hit is suppressed until your next turn: -1 to hit for its attacks.",
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
     "composition": "1 Forgefiend: 2 Hades autocannons, Forgefiend jaws.",
     "options": [
      {
       "id": "guns",
       "type": "choice",
       "label": "Guns",
       "choices": [
        {
         "id": "hades",
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
       "id": "jaws",
       "type": "choice",
       "label": "Forgefiend jaws",
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
     "id": "maulerfiend",
     "name": "Maulerfiend",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Walker",
      "Daemon",
      "Chaos",
      "Tzeentch",
      "Maulerfiend"
     ],
     "image": "ts_maulerfiend",
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
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Magma cutter",
       "range": "6\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Maulerfiend fists",
       "range": "Melee",
       "A": "6",
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
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Snarling Protector",
       "text": "Heroic Intervention on this unit costs 1CP less and ignores other uses this phase. When it declares a charge with a friendly engaged PSYKER unit within 12\", it can re-roll the charge but must end engaged with an enemy unit engaged with that PSYKER.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 120,
       "ptsLater": 130
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Maulerfiend: lasher tendrils, Maulerfiend fists.",
     "options": [
      {
       "id": "tendrils",
       "type": "choice",
       "label": "Lasher tendrils",
       "choices": [
        {
         "id": "tendrils",
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
     "id": "helbrute",
     "name": "Helbrute",
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Walker",
      "Chaos",
      "Tzeentch",
      "Helbrute"
     ],
     "image": "ts_helbrute",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "9",
      "Sv": "2+",
      "InSv": "5+",
      "W": "8",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Inferno combi-bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Heavy flamer",
       "range": "12\"",
       "A": "D6",
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
        "Melta 2"
       ]
      },
      {
       "name": "Twin autocannon",
       "range": "48\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Twin-linked"
       ]
      },
      {
       "name": "Helbrute plasma cannon",
       "range": "36\"",
       "A": "D3",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Blast",
        "Hazardous"
       ]
      },
      {
       "name": "Twin inferno heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
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
       "name": "Helbrute hammer",
       "range": "Melee",
       "A": "5",
       "skill": "4+",
       "S": "14",
       "AP": "-3",
       "D": "D6+1",
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
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Terrifying Assault",
       "text": "In your Shooting phase and the Fight phase, after this model has shot or fought, select one enemy unit hit by one or more of those attacks; that enemy unit must take a Battle-shock test.",
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
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Helbrute: missile launcher, multi-melta, close combat weapon.",
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
         "label": "Helbrute plasma cannon",
         "pts": 0
        },
        {
         "id": "tac",
         "label": "Twin autocannon",
         "pts": 0
        },
        {
         "id": "thb",
         "label": "Twin inferno heavy bolter",
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
         "label": "Inferno combi-bolter",
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
         "label": "Inferno combi-bolter",
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
     "role": "unit",
     "faction": "Thousand Sons",
     "keywords": [
      "Vehicle",
      "Fly",
      "Chaos",
      "Tzeentch",
      "Heldrake",
      "Daemon"
     ],
     "image": "ts_heldrake",
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
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Baleflamer",
       "range": "12\"",
       "A": "D6+3",
       "skill": "—",
       "S": "6",
       "AP": "-2",
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
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Heldrake claws",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Anti-fly 2+",
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Hover"
     ],
     "factionAbilities": [],
     "abilities": [
      {
       "name": "Flame-wreathed",
       "text": "Each time this model ends a Normal move, one enemy unit it moved over cannot have the benefit of cover until the end of the turn.",
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
     "composition": "1 Heldrake: Hades autocannon, Heldrake claws.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Gun",
       "choices": [
        {
         "id": "hades",
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
     "id": "lord_of_change",
     "name": "Lord of Change",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Monster",
      "Character",
      "Fly",
      "Psyker",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Lord of Change"
     ],
     "image": "ts_lord_of_change",
     "baseSize": "100mm",
     "profile": {
      "M": "12\"",
      "T": "10",
      "Sv": "6+",
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
       "name": "Bolt of Change - witchfire",
       "range": "18\"",
       "A": "9",
       "skill": "2+",
       "S": "9",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Psychic"
       ]
      },
      {
       "name": "Bolt of Change - focused witchfire",
       "range": "18\"",
       "A": "9",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Hazardous",
        "Psychic"
       ]
      },
      {
       "name": "Rod of sorcery",
       "range": "18\"",
       "A": "6",
       "skill": "2+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Staff of Tzeentch",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Psychic"
       ]
      },
      {
       "name": "Baleful sword",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "Daemon Lord of Tzeentch (Aura)",
       "text": "Ranged attacks by friendly SCINTILLATING LEGIONS units within 6\" get +1 S.",
       "kind": "datasheet"
      },
      {
       "name": "Master of Magicks (Psychic)",
       "text": "Your Shooting phase: its Bolt of Change gains [IGNORES COVER], [LETHAL HITS] or [SUSTAINED HITS D3] (your pick) until the end of the phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 320,
       "ptsLater": 340
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Lord of Change: Bolt of Change, staff of Tzeentch.",
     "options": [
      {
       "id": "extra",
       "type": "choice",
       "label": "Extra weapon",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "rod",
         "label": "Rod of sorcery",
         "pts": 0
        },
        {
         "id": "sword",
         "label": "Baleful sword",
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
     "id": "kairos_fateweaver",
     "name": "Kairos Fateweaver",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Monster",
      "Character",
      "Epic Hero",
      "Fly",
      "Psyker",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Kairos Fateweaver"
     ],
     "image": "ts_kairos_fateweaver",
     "baseSize": "100mm",
     "profile": {
      "M": "12\"",
      "T": "10",
      "Sv": "6+",
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
       "name": "Infernal Gateway - witchfire",
       "range": "24\"",
       "A": "D6+3",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Blast",
        "Indirect Fire",
        "Psychic"
       ]
      },
      {
       "name": "Infernal Gateway - focused witchfire",
       "range": "24\"",
       "A": "D3+6",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Blast",
        "Hazardous",
        "Indirect Fire",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Staff of Tomorrow",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D6",
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "One Head Looks Forward",
       "text": "End of your Command phase: if this model is on the battlefield, take a Leadership test; if passed, gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "One Head Looks Back (Aura)",
       "text": "Once per turn, when your opponent targets one of their units within 12\" with a Stratagem, you can make that use cost 1CP more.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 305
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Kairos Fateweaver (Epic Hero): Infernal Gateway, Staff of Tomorrow.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "pink_horrors",
     "name": "Pink Horrors",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Infantry",
      "Battleline",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Horrors"
     ],
     "image": "ts_pink_horrors",
     "baseSize": "32mm (Blue/Brimstone 25mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "7+",
      "InSv": "4+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Coruscating blue flames",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Psychic"
       ]
      },
      {
       "name": "Coruscating yellow flames",
       "range": "18\"",
       "A": "2",
       "skill": "5+",
       "S": "2",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Psychic"
       ]
      },
      {
       "name": "Coruscating pink flames",
       "range": "18\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Blue claws",
       "range": "Melee",
       "A": "1",
       "skill": "5+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Yellow claws",
       "range": "Melee",
       "A": "2",
       "skill": "5+",
       "S": "2",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Pink claws",
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
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "Split",
       "text": "When a Horror in this unit is destroyed, after the attacker finishes (if the unit survives) roll D6: on a 4+ a Pink Horror becomes two Blue Horrors, a Blue Horror becomes one Brimstone Horror.",
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
      },
      {
       "name": "Horrors are Pink. Horrors are Blue. Whereonce there was one, now there are two.",
       "text": "If, at any point, this unit contains no PINK HORROR models, use the BLUE HORRORS datasheet for this unit. While this unit contains one or more PINK HORROR models, the Sullen Malevolence and Exploding Horrors abilities from the BLUE HORRORS datasheet do not apply to this unit."
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
     "composition": "10 Pink Horrors: coruscating pink flames, pink claws. Split adds Blue and Brimstone Horrors.",
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
     "id": "blue_horrors",
     "name": "Blue Horrors",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Infantry",
      "Battleline",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Horrors"
     ],
     "image": "ts_blue_horrors",
     "baseSize": "25mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "7+",
      "InSv": "4+",
      "W": "1",
      "OC": "0",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Coruscating Yellow flames",
       "range": "18\"",
       "A": "2",
       "skill": "5+",
       "S": "2",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Psychic"
       ]
      },
      {
       "name": "Coruscating Blue flames",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Yellow claws",
       "range": "Melee",
       "A": "2",
       "skill": "5+",
       "S": "2",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Blue claws",
       "range": "Melee",
       "A": "1",
       "skill": "5+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Infiltrators"
     ],
     "factionAbilities": [
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "Split",
       "text": "When a Horror in this unit is destroyed, after the attacker finishes (if the unit survives) roll D6: on a 4+ a Pink Horror becomes two Blue Horrors, a Blue Horror becomes one Brimstone Horror.",
       "kind": "datasheet"
      },
      {
       "name": "Sullen Malevolence (Aura)",
       "text": "While an enemy unit is within 6\" of this unit, worsen the Leadership characteristic of models in that enemy unit by 1.",
       "kind": "datasheet"
      },
      {
       "name": "Exploding Horrors",
       "text": "Each time a BRIMSTONE HORROR model in this unit is destroyed, you can select one enemy unit within Engagement Range of it, then select one or more BRIMSTONE HORROR models in this unit that were destroyed this phase; for each model selected, roll one D6: on a 4+, that enemy unit suffers 1 mortal wound.",
       "kind": "datasheet"
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
     "composition": "10 Blue Horrors: coruscating blue flames, blue claws. Split adds Brimstone Horrors.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "flamers",
     "name": "Flamers",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Infantry",
      "Fly",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Flamers"
     ],
     "image": "ts_flamers",
     "baseSize": "32mm",
     "profile": {
      "M": "9\"",
      "T": "4",
      "Sv": "7+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Flickering flames",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Psychic",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Flamer mouths",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "Bounding Leaps",
       "text": "This unit can shoot in a turn in which it fell back.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 65
      },
      {
       "models": 6,
       "pts": 130
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Pyrocaster and 2 or 5 Flamers: flickering flames, Flamer mouths.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "screamers",
     "name": "Screamers",
     "role": "allies",
     "faction": "Scintillating Legions",
     "keywords": [
      "Beast",
      "Fly",
      "Chaos",
      "Daemon",
      "Tzeentch",
      "Summoned",
      "Screamers"
     ],
     "image": "ts_screamers",
     "baseSize": "32mm (flying base)",
     "profile": {
      "M": "14\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Lamprey bite",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-monster 4+",
        "Anti-vehicle 4+"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Pact of Sorcery"
     ],
     "abilities": [
      {
       "name": "Slashing Dive",
       "text": "Your Movement phase, after a Normal move: pick one enemy unit it moved over and roll D6 per model: each 4+ inflicts 1 mortal wound.",
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
       "pts": 160
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3 or 6 Screamers: lamprey bite.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    }
   ],
   "terms": [
    "Cabal of Sorcerers",
    "Rituals?",
    "Psychic tests?",
    "Channel(?:s|led)? the Warp",
    "Warp Charge",
    "Flow of Magic",
    "Kindred Sorcery",
    "Warpmeld Sacrifice"
   ]
  },
  "adeptaSororitas": {
   "armyFaction": "Adepta Sororitas",
   "alliedFactions": [
    {
     "faction": "Agents of the Imperium",
     "rule": "Assigned Agents",
     "cannotBeWarlord": true,
     "caps": [
      {
       "keyword": "Retinue",
       "n": {
        "incursion": 1,
        "strike": 2,
        "onslaught": 3
       }
      },
      {
       "keyword": "Character",
       "n": {
        "incursion": 1,
        "strike": 2,
        "onslaught": 3
       }
      },
      {
       "keyword": "Requisitioned",
       "n": {
        "incursion": 1,
        "strike": 1,
        "onslaught": 2
       }
      }
     ],
     "free": [
      {
       "unitIds": [
        "inquisitorial_agents"
       ],
       "perKeywords": [
        "Inquisitor"
       ],
       "from": "Retinue",
       "label": "Inquisitorial Henchmen"
      },
      {
       "unitIds": [
        "voidsmen_at_arms"
       ],
       "perKeywords": [
        "Voidfarers",
        "Character"
       ],
       "from": "Retinue",
       "label": "Navy Bodyguards"
      }
     ],
     "transportsNote": "Agents DEDICATED TRANSPORTS must start the battle with a unit embarked."
    }
   ],
   "relics": [
    {
     "id": "fiery_heart",
     "name": "The Fiery Heart",
     "effect": "Aura 6\": +2\" Move and +1 to Advance and Charge rolls."
    },
    {
     "id": "censer",
     "name": "Censer of the Sacred Rose",
     "effect": "Aura 6\": re-roll Battle-shock tests."
    },
    {
     "id": "ebon_chalice",
     "name": "Simulacrum of the Ebon Chalice",
     "effect": "Aura 6\": up to two Acts of Faith per phase (never two dice in one roll)."
    },
    {
     "id": "argent_shroud",
     "name": "Simulacrum of the Argent Shroud",
     "effect": "Aura 6\": ranged attacks re-roll wound rolls of 1."
    },
    {
     "id": "valorous_heart",
     "name": "Icon of the Valorous Heart",
     "effect": "Aura 6\": Feel No Pain 6+."
    },
    {
     "id": "bloody_rose",
     "name": "Petals of the Bloody Rose",
     "effect": "Aura 6\": +1 AP on melee weapons."
    }
   ],
   "armyRules": [
    {
     "id": "acts_of_faith",
     "name": "Acts of Faith",
     "miracle": {
      "gainTurn": true,
      "gainDestroyed": true
     },
     "text": "If your Army Faction is ADEPTA SORORITAS, each unit from your army with this ability can perform one Act of Faith per phase. GAINING MIRACLE DICE: If your Army Faction is ADEPTA SORORITAS, you gain 1 Miracle dice: at the start of each turn; each time an ADEPTA SORORITAS unit from your army is destroyed. Each time you gain a Miracle dice, roll one D6. The number you roll is the value of that Miracle dice. This value cannot be changed or re-rolled, unless a rule specifically states otherwise. Keep your Miracle dice to one side – this is your Miracle dice pool. PERFORMING AN ACT OF FAITH: Before making a dice roll for a model or unit from your army with the Acts of Faith ability, if you have one or more dice in your Miracle dice pool, that unit can perform an Act of Faith. If it does, select one of the dice from your Miracle dice pool to substitute that dice roll (if a roll involves more than one dice, e.g. a Charge roll or Battle-shock test, only a single dice can be substituted). The dice that is being substituted is not rolled; instead, the value of the selected Miracle dice is used as if it had been rolled (this counts as an unmodified dice roll of that value for all rules purposes). Each Miracle dice can only be selected for substitution once. Once all Miracle dice substitutions have been made, remove the chosen Miracle dice from your Miracle dice pool, and roll all remaining, unsubstituted dice that are a part of the dice roll. You can use Miracle dice when a unit performs an Act of Faith for any of the following types of dice roll: Advance roll; Battle-shock test; Charge roll; Damage roll; Hit roll; Saving throw; Wound roll."
    },
    {
     "id": "assigned_agents",
     "name": "Assigned Agents (allies)",
     "text": [
      "Every model in your army has the IMPERIUM keyword, so you can include AGENTS OF THE IMPERIUM units without taking one of their detachments.",
      "Limits: Incursion 1 RETINUE, 1 CHARACTER and 1 REQUISITIONED unit; Strike Force 2 / 2 / 1; Onslaught 3 / 3 / 2. Each INQUISITOR unit lets you take one INQUISITORIAL AGENTS unit and each VOIDFARERS CHARACTER one VOIDSMEN-AT-ARMS unit that do not count as RETINUE.",
      "Their DEDICATED TRANSPORTS can be included; each must start the battle with a unit embarked, or it is destroyed at the start of the first battle round. Agents use the \"Imperium\" price list of the Munitorum Field Manual and cannot be your WARLORD."
     ]
    }
   ],
   "detachments": [
    {
     "id": "hallowed_martyrs",
     "name": "Hallowed Martyrs",
     "dp": 3,
     "dispositions": [
      "Take and Hold",
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Wounded units hit harder: +1 to hit below Starting Strength, +1 to wound as well below Half-strength.",
     "rule": {
      "name": "The Blood of Martyrs",
      "text": "Each time an ADEPTA SORORITAS model from your army makes an attack, add 1 to the Hit roll if that model’s unit is below its Starting Strength, and add 1 to the Wound roll as well if that model’s unit is Below Half-strength."
     },
     "martyrs": true,
     "enhancements": [
      {
       "id": "saintly_example",
       "name": "Saintly Example",
       "pts": 10,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. When the bearer is destroyed, you gain D3 extra Miracle dice (an Imagifier within 12\" can re-roll them).",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "through_suffering_strength",
       "name": "Through Suffering, Strength",
       "pts": 25,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. Add 1 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons. If the bearer has lost one or more wounds, add 2 to the Attacks, Strength and Damage characteristics of the bearer’s melee weapons instead.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "chaplet_of_sacrifice",
       "name": "Chaplet of Sacrifice",
       "pts": 25,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. At the end of your Command phase, if the bearer is on the battlefield, you can re-roll 1 Miracle dice from your Miracle dice pool and return it to your Miracle dice pool showing the new result you rolled. When doing so, if the bearer's unit is below its Starting Strength, you can re-roll up to 3 Miracle dice in this way instead.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "mantle_of_ophelia",
       "name": "Mantle of Ophelia",
       "pts": 20,
       "upgrade": false,
       "text": "CANONESS or PALATINE model only. Each time an attack is allocated to the bearer, change the Damage characteristic of that attack to 1.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAny": [
         "Canoness",
         "Palatine"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "divine_intervention",
       "name": "Divine Intervention",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One Adepta Sororitas Character unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "You can discard 1-3 Miracle dice. At the end of the phase, set the last destroyed model from your unit back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy models. Roll one D3, adding 1 to the result for each Miracle dice you discarded. That model is set back up with that number of wounds remaining (up to its starting number of wounds).",
       "restrictions": "You cannot select Saint Celestine as the target of this Stratagem. You cannot select the same CHARACTER as the target of this Stratagem more than once per battle."
      },
      {
       "id": "suffering_and_sacrifice",
       "name": "Suffering and Sacrifice",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Start of the Fight phase.",
       "target": "One Adepta Sororitas Infantry or Adepta Sororitas Walker unit from your army.",
       "effect": "Until the end of the phase, each time an enemy model within Engagement Range of your unit selects its targets, it must select your unit as the target of its attacks."
      },
      {
       "id": "righteous_vengeance",
       "name": "Righteous Vengeance",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a melee attack, you can re-roll the Hit roll and, if your unit is Below Half-strength, you can re-roll the Wound roll as well."
      },
      {
       "id": "sanctified_immolation",
       "name": "Sanctified Immolation",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One ADEPTA SORORITAS VEHICLE model from your army with the Deadly Demise ability that was just destroyed. You can use this Stratagem on that model even though It was just destroyed.",
       "effect": "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted."
      },
      {
       "id": "spirit_of_the_martyr",
       "name": "Spirit of the Martyr",
       "cp": 2,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play."
      },
      {
       "id": "praise_the_fallen",
       "name": "Praise the Fallen",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has shot.",
       "target": "One ADEPTA SORORITAS unit from your army that had one or more of its models destroyed as a result of the attacking unit’s attacks.",
       "effect": "Your unit can shoot as if it were your Shooting phase, but it must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target."
      }
     ]
    },
    {
     "id": "penitent_host",
     "name": "Penitent Host",
     "dp": 2,
     "dispositions": [
      "Purge the Foe"
     ],
     "tags": [],
     "summary": "Each battle round pick a Vow of Atonement for your PENITENT units; each Vow once per battle.",
     "rule": {
      "name": "Desperate for Redemption",
      "text": "At the start of the battle round, you can select one of the following Vows of Atonement to be active for your army until the start of the next battle round. You can only select each Vow of Atonement once per battle."
     },
     "vows": [
      {
       "id": "path",
       "name": "The Path of the Penitent",
       "effect": "+3\" Move for your PENITENT models."
      },
      {
       "id": "absolution",
       "name": "Absolution in Battle",
       "effect": "A unit that charged this turn: its PENITENT models get +1 A and +1 S on melee weapons when it fights."
      },
      {
       "id": "death",
       "name": "Death Before Disgrace",
       "effect": "A PENITENT model killed by a melee attack before it fought: on a 2+ it fights after the attacker, then is removed."
      }
     ],
     "enhancements": [
      {
       "id": "psalm_of_righteous_judgement",
       "name": "Psalm of Righteous Judgement",
       "pts": 20,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. While it is on the battlefield, each time a PENITENT unit of yours destroys an enemy unit you can discard 1 Miracle dice to gain one showing 6.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "verse_of_holy_piety",
       "name": "Verse of Holy Piety",
       "pts": 15,
       "upgrade": false,
       "text": "PENITENT model only. Once per battle, at the start of the battle round, pick a Vow (even one already used): it is also active for the bearer's unit until the next battle round.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAll": [
         "Penitent"
        ]
       }
      },
      {
       "id": "refrain_of_enduring_faith",
       "name": "Refrain of Enduring Faith",
       "pts": 15,
       "upgrade": false,
       "text": "PENITENT model only. While it leads a unit, its models have a 5+ invulnerable save.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAll": [
         "Penitent"
        ]
       }
      },
      {
       "id": "catechism_of_divine_penitence",
       "name": "Catechism of Divine Penitence",
       "pts": 15,
       "upgrade": false,
       "text": "CANONESS, PALATINE or MINISTORUM PRIEST only. The bearer gains PENITENT and can lead a REPENTIA SQUAD.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAny": [
         "Canoness",
         "Palatine",
         "Ministorum Priest"
        ]
       },
       "addKeywords": [
        "Penitent"
       ],
       "leaderOf": [
        "repentia_squad"
       ]
      }
     ],
     "stratagems": [
      {
       "id": "final_redemption",
       "name": "Final Redemption",
       "cp": 1,
       "type": "Epic Deed",
       "phases": [
        "Any"
       ],
       "when": "Any phase.",
       "target": "One PENITENT unit from your army that was just destroyed while it was within range of an objective marker you controlled. You can use this Stratagem on that unit even though it was just destroyed.",
       "effect": "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn."
      },
      {
       "id": "purity_of_suffering",
       "name": "Purity of Suffering",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One PENITENT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
       "effect": "Until the end of the phase, PENITENT models in your unit have the Feel No Pain 4+ ability."
      },
      {
       "id": "passion_of_the_penitent",
       "name": "Passion of the Penitent",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One PENITENT unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, each time a PENITENT model in your unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit."
      },
      {
       "id": "lash_of_guilt",
       "name": "Lash of Guilt",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just before a PENITENT unit from your army Advances.",
       "target": "That PENITENT unit.",
       "effect": "Until the end of the turn, your unit is eligible to declare a charge in a turn in which it Advanced. If your unit has the PENITENT ENGINES keyword, do not make an Advance roll for it; instead, until the end of the phase, add 6\" to the Move characteristic of models in your unit."
      },
      {
       "id": "boundless_zeal",
       "name": "Boundless Zeal",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after an ADEPTA SORORITAS unit from your army Falls Back.",
       "target": "That ADEPTA SORORITAS unit.",
       "effect": "Until the end of the turn, your unit is eligible to shoot or declare a charge in a turn in which it Fell Back. If your unit has the PENITENT keyword, it is eligible to shoot and declare a charge in a turn in which it Fell Back instead."
      },
      {
       "id": "devout_fanaticism",
       "name": "Devout Fanaticism",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has shot.",
       "target": "One PENITENT unit from your army that was selected as the target as one or more of the attacking unit’s attacks.",
       "effect": "Roll one D6: your unit can be moved a distance in inches up to the result, but it must end that move as close as possible to the closest enemy unit (excluding AIRCRAFT). When doing so, models in your unit can be moved within Engagement Range of enemy units."
      }
     ]
    },
    {
     "id": "bringers_of_flame",
     "name": "Bringers of Flame",
     "dp": 2,
     "dispositions": [
      "Priority Assets"
     ],
     "tags": [],
     "summary": "Every ranged weapon has [ASSAULT] and +1 S against units within 6\".",
     "rule": {
      "name": "Fervent Purgation",
      "text": "Ranged weapons equipped by ADEPTA SORORITAS models from your army have the [ASSAULT] ability, and each time an attack made with such a weapon targets a unit within 6\", add 1 to the Strength characteristic of that attack."
     },
     "enhancements": [
      {
       "id": "righteous_rage",
       "name": "Righteous Rage",
       "pts": 15,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. When the bearer is selected to fight, discard up to 3 Miracle dice: +1 A and +1 S on its melee weapons per die until the end of the phase.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "manual_of_saint_griselda",
       "name": "Manual of Saint Griselda",
       "pts": 20,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. Start of your Command phase: discard up to 2 Miracle dice and gain one whose value is their sum (max 6).",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "fire_and_fury",
       "name": "Fire and Fury",
       "pts": 30,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. While it leads a unit: +1 A for its Torrent weapons, and its other ranged weapons have [SUSTAINED HITS 1].",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "iron_surplice_of_saint_istalela",
       "name": "Iron Surplice of Saint Istalela",
       "pts": 10,
       "upgrade": false,
       "text": "CANONESS or PALATINE only. Save 2+ and Feel No Pain 5+.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAny": [
         "Canoness",
         "Palatine"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "Sv",
         "set": "2+"
        }
       ]
      }
     ],
     "stratagems": [
      {
       "id": "shield_of_aversion",
       "name": "Shield of Aversion",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1."
      },
      {
       "id": "righteous_blows",
       "name": "Righteous Blows",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If one or more enemy models are destroyed as the result of attacks made by those weapons this phase, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test."
      },
      {
       "id": "carry_forth_the_faithful",
       "name": "Carry Forth the Faithful",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just before an ADEPTA SORORITAS TRANSPORT model from your army Advances.",
       "target": "That ADEPTA SORORITAS TRANSPORT model.",
       "effect": "Until the end of the turn, you can re-roll Advance rolls made for your TRANSPORT, and units can disembark from your TRANSPORT even though it Advanced. Units that do so make a shock disembark move (Core Rules, 18.07) for that disembarkation."
      },
      {
       "id": "cleansing_flames",
       "name": "Cleansing Flames",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability"
      },
      {
       "id": "rites_of_fire",
       "name": "Rites of Fire",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase.",
       "target": "One ADEPTA SORORITAS unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit within 6\" that is also within range of an objective marker, add 1 to the Wound roll. If one or more enemy models are destroyed as the result of those attacks, select one of those destroyed models; that destroyed model’s unit must take a Battle-shock test."
      },
      {
       "id": "blazing_ire",
       "name": "Blazing Ire",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Shooting"
       ],
       "when": "Your opponent’s Shooting phase, just after an enemy unit has shot.",
       "target": "One ADEPTA SORORITAS TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
       "effect": "One unit embarked within your TRANSPORT can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target."
      }
     ]
    },
    {
     "id": "army_of_faith",
     "name": "Army of Faith",
     "dp": 2,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [],
     "summary": "Every unit can perform up to two Acts of Faith per phase.",
     "rule": {
      "name": "Sacred Rites",
      "text": "Each ADEPTA SORORITAS unit from your army can perform up to two Acts of Faith per phase, instead of just one. Enhancements Litanies of Faith 10 pts This unassuming parchment is one of the holiest relics in the Ministorum's charge, its mere presence enough to fill the hearts of the faithful with righteous fervour."
     },
     "faithNote": "Sacred Rites: each unit can perform up to two Acts of Faith per phase.",
     "enhancements": [
      {
       "id": "litanies_of_faith",
       "name": "Litanies of Faith",
       "pts": 10,
       "upgrade": false,
       "text": "CANONESS or PALATINE only. Start of your Command phase, if on the battlefield: take a Leadership test; if passed, gain 1 Miracle dice.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAny": [
         "Canoness",
         "Palatine"
        ]
       }
      },
      {
       "id": "blade_of_saint_ellynor",
       "name": "Blade of Saint Ellynor",
       "pts": 15,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. +1 S and +1 AP on the bearer's melee weapons, which have [PRECISION]; each time it fights and kills one or more models, gain 1 Miracle dice.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "divine_aspect",
       "name": "Divine Aspect",
       "pts": 5,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. Your Movement phase: one enemy unit within 12\" takes a Battle-shock test; if it fails, gain 1 Miracle dice.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "triptych_of_the_macharian_crusade",
       "name": "Triptych of the Macharian Crusade",
       "pts": 20,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. A saving throw the bearer replaces with a Miracle dice always succeeds, whatever its value.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "shield_of_faith",
       "name": "Shield of Faith",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Any"
       ],
       "when": "Any phase, just after an ADEPTA SORORITAS unit from your army suffers a mortal wound.",
       "target": "That ADEPTA SORORITAS unit, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of it.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is unit is within 3\" of your unit, models in that unit have the Feel No Pain 5+ ability against mortal wounds."
      },
      {
       "id": "light_of_the_emperor",
       "name": "Light of the Emperor",
       "cp": 2,
       "type": "Battle Tactic",
       "phases": [
        "Command"
       ],
       "when": "Command phase.",
       "target": "One ADEPTA SORORITAS unit from your army.",
       "effect": "Until the end of the turn, your unit is blessed. While a unit is blessed, it can ignore any or all modifiers to the following: the profile characteristics of its models; the Weapon Skill or Ballistic Skill characteristics of weapons equipped by its models; any roll or test made for it (excluding modifiers to saving throws). If your unit has the JUMP PACK keyword, until the end of the turn, while a friendly ADEPTA SORORITAS unit is within 3\" of your unit, that friendly unit is also blessed."
      },
      {
       "id": "faith_and_fury",
       "name": "Faith and Fury",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If one or more enemy models are destroyed as the result of your unit's attacks this phase, you gain 1 Miracle dice."
      },
      {
       "id": "blinding_radiance",
       "name": "Blinding Radiance",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
       "target": "One ADEPTA SORORITAS unit from your army that was selected as the target of one or more of the attacking unit's attacks, or one friendly ADEPTA SORORITAS JUMP PACK unit within 3\" of such a unit.",
       "effect": "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. If you targeted an ADEPTA SORORITAS JUMP PACK unit from your army with this Stratagem, then until the end of the phase, while a friendly ADEPTA SORORITAS unit is unit is within 3\" of your unit, each time an attack targets that unit, subtract 1 from the Hit roll."
      },
      {
       "id": "divine_guidance",
       "name": "Divine Guidance",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "That ADEPTA SORORITAS unit from your army that has not been selected to shoot or fight this phase.",
       "effect": "Until the end of the phase, each time a model in your unit makes an attack, improve the Armour Penetration characteristic of that attack by 1. If one or more enemy models are destroyed as the result of any of those attacks, you gain 1 Miracle dice."
      },
      {
       "id": "angelic_descent",
       "name": "Angelic Descent",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Fight"
       ],
       "when": "End of your opponent’s Fight phase.",
       "target": "One ADEPTA SORORITAS JUMP PACK unit from your army.",
       "effect": "Remove your unit from the battlefield and place it into Strategic Reserves.",
       "restrictions": "You cannot select a unit that is within Engagement Range of one or more enemy units."
      }
     ]
    },
    {
     "id": "champions_of_faith",
     "name": "Champions of Faith",
     "dp": 2,
     "dispositions": [
      "Disruption"
     ],
     "tags": [
      "REVEREND"
     ],
     "summary": "Each Command phase pick up to 3 units to be Righteous: faster, braver and, for some, more accurate.",
     "rule": {
      "name": "Righteous Purpose",
      "text": "In your Command phase pick up to 3 ADEPTA SORORITAS units (embarked ones too): until your next Command phase they are Righteous: +1\" Move and +1 Leadership, and BATTLE SISTERS SQUAD, CELESTIAN INSIDIANTS, CELESTIAN SACRESANTS and PARAGON WARSUITS models in them also get +1 BS and WS. CELESTIAN SACRESANTS that are not battle-shocked get +1 OC."
     },
     "righteous": {
      "max": 3
     },
     "enhancements": [
      {
       "id": "triptych_of_judgement",
       "name": "Triptych of Judgement",
       "pts": 15,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. Attacks by the bearer's unit ignore modifiers to BS/WS and to the hit roll.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "mark_of_devotion",
       "name": "Mark of Devotion",
       "pts": 30,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. +1 A on the bearer's melee weapons; while its unit is Righteous, +2 A and +1 D instead.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "eyes_of_the_oracle",
       "name": "Eyes of the Oracle",
       "pts": 10,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. The bearer's weapons have [PRECISION]; each time its unit destroys an enemy CHARACTER model, gain 1CP.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      },
      {
       "id": "sanctified_amulet",
       "name": "Sanctified Amulet",
       "pts": 25,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. Enemy units arriving from Reserves cannot be set up within 12\" of the bearer.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "shield_of_denial",
       "name": "Shield of Denial",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Any"
       ],
       "when": "Any phase, just after a mortal wound is allocated to an ADEPTA SORORITAS unit from your army.",
       "target": "That ADEPTA SORORITAS unit.",
       "effect": "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability against mortal wounds. If your unit is Righteous, until the end of the phase, models in your unit have the Feel No Pain 5+ ability against mortal wounds instead."
      },
      {
       "id": "suffer_not_the_unfaithful",
       "name": "Suffer Not the Unfaithful",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Shooting",
        "Fight"
       ],
       "when": "Your Shooting phase or the Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that is Righteous and that has not been selected to shoot or fight this phase.",
       "effect": "Select either the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have the selected ability."
      },
      {
       "id": "to_the_heart_of_heresy",
       "name": "To the Heart of Heresy",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the turn, improve the Strength characteristic of melee weapons equipped by models in your unit by 1. If your unit is Righteous, until the end of the phase, improve the Armour Penetration characteristic of melee weapons equipped by models in your unit by 1 as well."
      },
      {
       "id": "path_of_the_righteous",
       "name": "Path of the Righteous",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase.",
       "target": "One ADEPTA SORORITAS unit from your army that has not been selected to fight this phase.",
       "effect": "Until the end of the turn, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6\" instead of up to 3\". When doing so, if your unit is Righteous, it does not need to end that move closer to the closest enemy model, provided it ends that move as close as possible to the closest enemy unit."
      },
      {
       "id": "bastion_of_faith",
       "name": "Bastion of Faith",
       "cp": 1,
       "type": "Battle Tactic",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, just after an enemy unit has selected its targets.",
       "target": "One Celestian Sacresants unit that was selected as the target of one or more of the attacking unit’s attacks.",
       "effect": "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll. In addition, if your unit is Righteous, you can select one other CELESTIAN SACRESANTS unit from your army that is not Battle-shocked and is within 6\" of your unit. Until the end of the phase, each time an attack targets that CELESTIAN SACRESANTS unit, subtract 1 from the Hit roll as well."
      },
      {
       "id": "indefatigable_dedication",
       "name": "Indefatigable Dedication",
       "cp": 1,
       "type": "Strategic Ploy",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, just after an ADEPTA SORORITAS unit from your army Falls Back.",
       "target": "That ADEPTA SORORITAS unit.",
       "effect": "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back. If your unit is Righteous, until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back instead."
      }
     ]
    },
    {
     "id": "chorus_of_condemnation",
     "name": "Chorus of Condemnation",
     "dp": 1,
     "dispositions": [
      "Reconnaissance"
     ],
     "tags": [],
     "summary": "Flying infantry condemn enemy units and guide Exorcist strikes.",
     "rule": {
      "name": "Angelic Judgement",
      "text": "Friendly ADEPTA SORORITAS INFANTRY FLY units have the following ability: Condemnatory Psalms: In your Shooting phase , this unit can select one visible enemy unit within 12\"."
     },
     "enhancements": [
      {
       "id": "clarion_of_urgency",
       "name": "Clarion of Urgency",
       "pts": 15,
       "upgrade": false,
       "text": "CANONESS WITH JUMP PACK only. End of your opponent's Fight phase, if unengaged: place its unit into Strategic Reserves.",
       "eligible": {
        "unitIds": [
         "canoness_with_jump_pack"
        ]
       }
      },
      {
       "id": "symphonic_payload",
       "name": "Symphonic Payload",
       "pts": 10,
       "upgrade": true,
       "text": "EXORCIST unit only. It can re-roll rolls for the number of attacks of its weapons.",
       "eligible": {
        "unitIds": [
         "exorcist"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "inspirational_battle_canticles",
       "name": "Inspirational Battle Canticles",
       "cp": 1,
       "type": "Chorus of Condemnation",
       "phases": [
        "Command"
       ],
       "when": "Start of the Command phase.",
       "target": "One friendly ADEPTA SORORITAS INFANTRY FLY unit or one friendly EXORCIST unit.",
       "effect": "Select one friendly battle-shocked ADEPTA SORORITAS unit within 6\" of your unit. That unit is no longer battle-shocked."
      },
      {
       "id": "harmonised_exorcism",
       "name": "Harmonised Exorcism",
       "cp": 1,
       "type": "Chorus of Condemnation",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a friendly EXORCIST unit is selected to shoot.",
       "target": "That EXORCIST unit.",
       "effect": "Select one unit visible to and within 9\" of a friendly ADEPTA SORORITAS INFANTRY FLY unit. Your unit’s ranged attacks that target that unit have +1 to hit rolls."
      },
      {
       "id": "devastating_reprise",
       "name": "Devastating Reprise",
       "cp": 1,
       "type": "Chorus of Condemnation",
       "phases": [
        "Shooting"
       ],
       "when": "Your Shooting phase, when a friendly EXORCIST unit has shot.",
       "target": "One friendly ADEPTA SORORITAS INFANTRY FLY unit.",
       "effect": "Select one enemy unit (excluding MONSTER/VEHICLE units) hit by those ranged attacks. Your unit’s ranged attacks that target that unit have [DEVASTATING WOUNDS]."
      }
     ]
    },
    {
     "id": "sacred_champions",
     "name": "Sacred Champions",
     "dp": 1,
     "dispositions": [
      "Take and Hold"
     ],
     "tags": [
      "REVEREND"
     ],
     "summary": "Celestian veterans on a holy quest: +1 BS and WS.",
     "rule": {
      "name": "Holy Quest",
      "text": "Charged with a holy quest in service to the God-Emperor, the veteran Sacresant elite of an Order Militant are relentless in their pursuit of victory Friendly CELESTIAN units’ attacks have +1 BS and WS ."
     },
     "buffs": [
      {
       "target": "ranged",
       "stat": "WS",
       "improve": 1,
       "scope": {
        "unitIds": [
         "celestian_sacresants",
         "celestian_insidiants"
        ]
       },
       "source": "Holy Quest"
      },
      {
       "target": "melee",
       "stat": "WS",
       "improve": 1,
       "scope": {
        "unitIds": [
         "celestian_sacresants",
         "celestian_insidiants"
        ]
       },
       "source": "Holy Quest"
      }
     ],
     "enhancements": [
      {
       "id": "writ_of_compunction",
       "name": "Writ of Compunction",
       "pts": 20,
       "upgrade": true,
       "text": "CELESTIAN SACRESANTS unit only. Add 1 to the Objective Control characteristic of models in the bearer's unit.",
       "eligible": {
        "unitIds": [
         "celestian_sacresants"
        ]
       },
       "mods": [
        {
         "target": "profile",
         "stat": "OC",
         "add": 1
        }
       ]
      },
      {
       "id": "perfervid_haste",
       "name": "Perfervid Haste",
       "pts": 10,
       "upgrade": false,
       "text": "ADEPTA SORORITAS model only. The bearer's unit has +1\" Move.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ]
       }
      }
     ],
     "stratagems": [
      {
       "id": "sanctified_blows",
       "name": "Sanctified Blows",
       "cp": 1,
       "type": "Sacred Champions",
       "phases": [
        "Fight"
       ],
       "when": "Fight phase, when a friendly CELESTIAN SACRESANTS unit is selected to fight.",
       "target": "That CELESTIAN SACRESANTS unit.",
       "effect": "Your unit’s melee attacks have +1 A and +1 S."
      },
      {
       "id": "faithful_fortitude",
       "name": "Faithful Fortitude",
       "cp": 1,
       "type": "Sacred Champions",
       "phases": [
        "Any"
       ],
       "when": "Any phase, when a friendly CELESTIAN SACRESANTS unit suffers a mortal wound.",
       "target": "That CELESTIAN SACRESANTS unit.",
       "effect": "Your unit has Feel No Pain 5+ against mortal wounds until the end of the phase."
      },
      {
       "id": "unflinching_determination",
       "name": "Unflinching Determination",
       "cp": 1,
       "type": "Sacred Champions",
       "phases": [
        "Movement"
       ],
       "when": "Your Movement phase, when a friendly CELESTIAN SACRESANTS unit is selected to make an Advance or Fall Back move.",
       "target": "That CELESTIAN SACRESANTS unit.",
       "effect": "Your unit’s ranged attacks have [ASSAULT] until the end of the turn. That move does not prevent your unit from being eligible to shoot or declare a charge."
      }
     ]
    },
    {
     "id": "sanctified_orators",
     "name": "Sanctified Orators",
     "dp": 1,
     "dispositions": [
      "Disruption"
     ],
     "tags": [],
     "summary": "Commanders preach to their units; Hagiomnifex does not count toward your enhancement limit.",
     "rule": {
      "name": "Hymns of Battle",
      "text": "Enhancements selected from this detachment do not count towards the total number of enhancements in your army. Friendly ADEPTA SORORITAS CHARACTER units have +1 Ld ."
     },
     "enhancements": [
      {
       "id": "hagiomnifex",
       "name": "Hagiomnifex",
       "pts": 25,
       "upgrade": true,
       "text": "ADEPTA SORORITAS CHARACTER only (not PENITENT). Once per turn, at the start of a phase, pick one for the bearer's unit until the end of the phase: enemy units have +6\" detection range while it shoots; it passes Battle-shock automatically; +1\" Move; +1 S on its attacks; or attacks with S above its T get -1 to wound.",
       "eligible": {
        "factionsAll": [
         "Adepta Sororitas"
        ],
        "keywordsAll": [
         "Character"
        ],
        "keywordsNone": [
         "Penitent"
        ]
       },
       "onCharacter": true,
       "noCount": true
      }
     ],
     "stratagems": []
    }
   ],
   "units": [
    {
     "id": "aestred_thurga_and_agathae_dolan",
     "name": "Aestred Thurga and Agathae Dolan",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Epic Hero",
      "Aestred Thurga and Agathae Dolan",
      "Character",
      "Imperium",
      "Grenades",
      "Infantry"
     ],
     "image": "as_aestred_thurga_and_agathae_dolan",
     "baseSize": "32mm / 25mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "2+",
      "InSv": "4+",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Blade of Vigil",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Scribe's staff",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Auto-Tapestry of the Emperor's Judgement",
       "text": "While this unit leads a unit and Aestred Thurga is alive, weapons in that unit have [DEVASTATING WOUNDS].",
       "kind": "datasheet"
      },
      {
       "name": "Recount the Deeds of the Saints",
       "text": "While this model is leading a unit, each time a model in that unit destroys an enemy unit, you gain 1 Miracle dice.",
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
     "leaderOf": [
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Aestred Thurga (Epic Hero: bolt pistol, Blade of Vigil) and 1 Agathae Dolan (Epic Hero: bolt pistol, scribe's staff).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Agathae Dolan",
      "W": "3",
      "Ld": "7+",
      "Sv": "6+"
     }
    },
    {
     "id": "arco_flagellants",
     "name": "Arco-flagellants",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Imperium",
      "Penitent",
      "Arco-flagellants"
     ],
     "image": "as_arco_flagellants",
     "baseSize": "25mm",
     "profile": {
      "M": "7\"",
      "T": "3",
      "Sv": "7+",
      "InSv": "6+",
      "W": "2",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [],
     "melee": [
      {
       "name": "Arco-flails",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Extremis Trigger Word",
       "text": "When selected to fight, you can invoke it: until the end of the phase arco-flails are A 6 with [HAZARDOUS].",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 50
      },
      {
       "models": 10,
       "pts": 140
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "3-10 Arco-flagellants: arco-flails.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "battle_sisters_squad",
     "name": "Battle Sisters Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Battleline",
      "Grenades",
      "Battle Sisters Squad",
      "Imperium"
     ],
     "image": "as_battle_sisters_squad",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "6+",
      "W": "1",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Condemnor boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Inferno pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
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
       "name": "Artificer-crafted storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Ministorum flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
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
        "Heavy",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Ministorum heavy flamer",
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
        "Heavy",
        "Melta 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chainsword",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Close combat weapon",
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Defenders of the Faith",
       "text": "End of your Command phase: an objective you control that this unit is in range of stays yours with no models nearby, until your opponent controls it at the start or end of a turn.",
       "kind": "datasheet"
      },
      {
       "name": "Cherub",
       "text": "Once per battle, after this unit performs an Act of Faith, gain 1 Miracle dice.",
       "kind": "datasheet"
      },
      {
       "name": "Simulacrum Imperialis",
       "text": "End of your Command phase: for each objective you control with one or more of your units with this ability in range, roll D6; on a 4+ gain a Miracle dice of that value.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 100
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Sister Superior and 9 Battle Sisters: bolt pistol, boltgun, close combat weapon.",
     "options": [
      {
       "id": "sup_gun",
       "type": "choice",
       "label": "Sister Superior: gun",
       "choices": [
        {
         "id": "boltgun",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "combi",
         "label": "Combi-weapon",
         "pts": 0
        },
        {
         "id": "cond",
         "label": "Condemnor boltgun",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        },
        {
         "id": "hflamer",
         "label": "Ministorum hand flamer",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "sup_melee",
       "type": "choice",
       "label": "Sister Superior: melee",
       "choices": [
        {
         "id": "ccw",
         "label": "Close combat weapon",
         "pts": 0
        },
        {
         "id": "chain",
         "label": "Chainsword",
         "pts": 0
        },
        {
         "id": "power",
         "label": "Power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "special",
       "type": "choice",
       "label": "Battle Sister: special weapon",
       "choices": [
        {
         "id": "boltgun",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "storm",
         "label": "Artificer-crafted storm bolter",
         "pts": 0
        },
        {
         "id": "melta",
         "label": "Meltagun",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Ministorum flamer",
         "pts": 0
        }
       ]
      },
      {
       "id": "heavy",
       "type": "choice",
       "label": "Battle Sister: special or heavy weapon",
       "choices": [
        {
         "id": "boltgun",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "storm",
         "label": "Artificer-crafted storm bolter",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "Heavy bolter",
         "pts": 0
        },
        {
         "id": "melta",
         "label": "Meltagun",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Ministorum flamer",
         "pts": 0
        },
        {
         "id": "hflamer",
         "label": "Ministorum heavy flamer",
         "pts": 0
        },
        {
         "id": "mm",
         "label": "Multi-melta",
         "pts": 0
        }
       ]
      },
      {
       "id": "simulacrum",
       "type": "toggle",
       "label": "Simulacrum imperialis"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "once": [
      {
       "id": "cherub",
       "name": "Cherub",
       "n": 1,
       "gain": true,
       "text": "After this unit performs an Act of Faith: gain 1 Miracle dice."
      }
     ]
    },
    {
     "id": "canoness",
     "name": "Canoness",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Character",
      "Infantry",
      "Grenades",
      "Canoness"
     ],
     "image": "as_canoness",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Brazier of Holy Fire",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "One Shot",
        "Torrent"
       ]
      },
      {
       "name": "Bolt Pistol",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Condemnor boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "2+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Inferno Pistol",
       "range": "6\"",
       "A": "1",
       "skill": "2+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
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
       "skill": "2+",
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
       "name": "Blessed blade",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Hallowed Chainsword",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "The Emperor's Grace",
       "text": "Once per battle, at the start of any phase: 2+ invulnerable save until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Sacred Command",
       "text": "Once per battle round, one unit with this ability can use it when its unit is targeted with a Stratagem: that use costs 1CP less.",
       "kind": "datasheet"
      },
      {
       "name": "Null Rod",
       "text": "Models in the bearer's unit have Feel No Pain 4+ against mortal wounds and Psychic Attacks.",
       "kind": "wargear"
      },
      {
       "name": "Rod of Office",
       "text": "Attacks by models in the bearer's unit re-roll hit rolls of 1.",
       "kind": "wargear"
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
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Canoness: bolt pistol, hallowed chainsword.",
     "options": [
      {
       "id": "pistol",
       "type": "choice",
       "label": "Pistol",
       "choices": [
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "cond",
         "label": "Condemnor boltgun",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "melee",
       "type": "choice",
       "label": "Melee weapon",
       "choices": [
        {
         "id": "chain",
         "label": "Hallowed chainsword",
         "pts": 0
        },
        {
         "id": "blade",
         "label": "Blessed blade",
         "pts": 0
        },
        {
         "id": "power",
         "label": "Power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "relic",
       "type": "choice",
       "label": "Extra (needs the hallowed chainsword)",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "brazier",
         "label": "Brazier of holy fire",
         "pts": 0
        },
        {
         "id": "nullrod",
         "label": "Null rod",
         "pts": 0
        }
       ]
      },
      {
       "id": "rod",
       "type": "toggle",
       "label": "Rod of office (needs plasma pistol and power weapon)"
      }
     ],
     "optionRules": [
      {
       "if": "relic",
       "notValue": "none",
       "requireAllOf": [
        [
         "melee",
         "chain"
        ]
       ],
       "message": "The brazier or null rod needs the hallowed chainsword."
      },
      {
       "if": "rod",
       "notValue": 0,
       "requireAllOf": [
        [
         "pistol",
         "plasma"
        ],
        [
         "melee",
         "power"
        ]
       ],
       "message": "The rod of office needs a plasma pistol and a power weapon."
      }
     ],
     "slots": [],
     "optionGroups": [],
     "once": [
      {
       "id": "grace",
       "name": "The Emperor's Grace",
       "n": 1,
       "text": "Start of any phase: 2+ invulnerable save until the end of the phase."
      }
     ]
    },
    {
     "id": "canoness_with_jump_pack",
     "name": "Canoness with Jump Pack",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Character",
      "Infantry",
      "Grenades",
      "Canoness",
      "Jump Pack",
      "Fly",
      "Imperium"
     ],
     "image": "as_canoness_with_jump_pack",
     "baseSize": "32mm",
     "profile": {
      "M": "12\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Blessed Halberd",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Holy Eviscerator",
       "range": "Melee",
       "A": "3",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Divine Deliverance",
       "text": "Once per battle, start of the Fight phase: +3 A and [DEVASTATING WOUNDS] on her melee weapons until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Sacred Command",
       "text": "Once per battle round, one unit with this ability can use it when its unit is targeted with a Stratagem: that use costs 1CP less.",
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
      "seraphim_squad",
      "zephyrim_squad"
     ],
     "composition": "1 Canoness with Jump Pack: blessed halberd.",
     "options": [
      {
       "id": "melee",
       "type": "choice",
       "label": "Weapon",
       "choices": [
        {
         "id": "halberd",
         "label": "Blessed halberd",
         "pts": 0
        },
        {
         "id": "evisc",
         "label": "Holy eviscerator",
         "pts": 0
        },
        {
         "id": "flamer",
         "label": "Ministorum hand flamer and power weapon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "once": [
      {
       "id": "deliverance",
       "name": "Divine Deliverance",
       "n": 1,
       "text": "Start of the Fight phase: +3 A and [DEVASTATING WOUNDS] on her melee weapons."
      }
     ]
    },
    {
     "id": "castigator",
     "name": "Castigator",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Imperium",
      "Castigator",
      "Frame"
     ],
     "image": "as_castigator",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "6+",
      "W": "11",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Castigator autocannons",
       "range": "48\"",
       "A": "4",
       "skill": "3+",
       "S": "9",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Twin-Linked",
        "Rapid Fire 4"
       ]
      },
      {
       "name": "Castigator battle cannon",
       "range": "48\"",
       "A": "D6+3",
       "skill": "3+",
       "S": "10",
       "AP": "-1",
       "D": "3",
       "kw": [
        "Blast",
        "Ignores Cover"
       ]
      },
      {
       "name": "Storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Rites of Castigation",
       "text": "Your Shooting phase, after it shoots: one enemy unit it hit gets -1 AP (worse for them: +1 AP for your attacks) against your ADEPTA SORORITAS ranged attacks until the end of the turn; once per enemy unit per turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 165,
       "ptsLater": 185
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Castigator: Castigator autocannons, 3 heavy bolters, armoured tracks.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "ac",
         "label": "Castigator autocannons",
         "pts": 0
        },
        {
         "id": "bc",
         "label": "Castigator battle cannon",
         "pts": 0
        }
       ]
      },
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      },
      {
       "id": "storm",
       "type": "toggle",
       "label": "Storm bolter"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "celestian_insidiants",
     "name": "Celestian Insidiants",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Celestian Insidiants",
      "Celestian"
     ],
     "image": "as_celestian_insidiants",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "5+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Inferno pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Condemnor bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 4+",
        "Devastating Wounds",
        "Pistol"
       ]
      },
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Null mace",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-psyker 4+",
        "Devastating Wounds"
       ]
      },
      {
       "name": "Blessed sword",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      },
      {
       "name": "Virge of Admonition",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Anti-psyker 4+",
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Rituale Nullificatus",
       "text": "Feel No Pain 4+ against Psychic Attacks and mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Virtue of Intolerance",
       "text": "Start of the battle: pick one enemy unit as the quarry. Attacks against it have [PRECISION] and re-roll the hit roll (also while embarked).",
       "kind": "datasheet"
      },
      {
       "name": "Attached Unit",
       "text": "A character that can join a listed bodyguard can join this unit instead (see the Leader lists).",
       "kind": "datasheet"
      },
      {
       "name": "Denuncia Oratory",
       "text": "When the quarry is destroyed, pick a new quarry.",
       "kind": "wargear"
      },
      {
       "name": "Simulacrum Imperialis",
       "text": "End of your Command phase: for each objective you control with one or more of your units with this ability in range, roll D6; on a 4+ gain a Miracle dice of that value.",
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
     "composition": "1 Celestian Insidiant Superior and 9 Celestian Insidiants: condemnor bolt pistol, null mace.",
     "options": [
      {
       "id": "sup_pistol",
       "type": "choice",
       "label": "Insidiant Superior: pistol",
       "choices": [
        {
         "id": "cond",
         "label": "Condemnor bolt pistol",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "hflamer",
       "type": "count",
       "label": "Ministorum hand flamer",
       "max": 2
      },
      {
       "id": "sword",
       "type": "count",
       "label": "Blessed sword",
       "max": 2
      },
      {
       "id": "virge",
       "type": "toggle",
       "label": "Virge of admonition"
      },
      {
       "id": "denuncia",
       "type": "toggle",
       "label": "Denuncia oratory"
      },
      {
       "id": "simulacrum",
       "type": "toggle",
       "label": "Simulacrum imperialis"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "celestian_sacresants",
     "name": "Celestian Sacresants",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Celestian Sacresants",
      "Celestian"
     ],
     "image": "as_celestian_sacresants",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
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
       "name": "Inferno pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Spear of the Faithful",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Anointed Halberd",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Hallowed Mace",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Lethal Hits"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Sworn Protectors",
       "text": "While an ADEPTA SORORITAS CHARACTER leads this unit, attacks against it get -1 to wound.",
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
       "pts": 150,
       "ptsLater": 160
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Sacresant Superior and 4-9 Celestian Sacresants: bolt pistol, hallowed mace.",
     "options": [
      {
       "id": "halberd",
       "type": "count",
       "label": "Anointed halberd",
       "slots": [
        "sm"
       ],
       "max": "slot"
      },
      {
       "id": "sup_pistol",
       "type": "choice",
       "label": "Sacresant Superior: pistol",
       "choices": [
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        },
        {
         "id": "hflamer",
         "label": "Ministorum hand flamer",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "sup_melee",
       "type": "choice",
       "label": "Sacresant Superior: melee",
       "choices": [
        {
         "id": "mace",
         "label": "Hallowed mace",
         "pts": 0
        },
        {
         "id": "spear",
         "label": "Spear of the Faithful",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "sm",
       "label": "Sacresant melee weapon",
       "default": "Hallowed mace",
       "size": {
        "models": 1,
        "minus": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "daemonifuge",
     "name": "Daemonifuge",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Epic Hero",
      "Infantry",
      "Grenades",
      "Character",
      "Imperium",
      "Daemonifuge"
     ],
     "image": "as_daemonifuge",
     "baseSize": "32mm",
     "profile": {
      "M": "8\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "5",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Sanctity",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-chaos 2+",
        "Precision"
       ]
      },
      {
       "name": "The Outcast's Blades",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Fights First",
      "Lone Operative"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Holy Judgement",
       "text": "Start of your Shooting phase: one enemy unit within 12\" of Ephrael Stern takes a Battle-shock test (-2 if CHAOS); if failed it suffers 3 mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Mysterious Saviours",
       "text": "You can target this unit with the Heroic Intervention Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 2,
       "pts": 85
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Ephrael Stern (Epic Hero: bolt pistol, Sanctity) and 1 Kyganil of the Bloody Tears (Epic Hero: the Outcast's Blades).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Kyganil of the Bloody Tears",
      "W": "3",
      "Ld": "7+",
      "Sv": "6+"
     }
    },
    {
     "id": "dialogus",
     "name": "Dialogus",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Imperium",
      "Dialogus"
     ],
     "image": "as_dialogus",
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "3",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Dialogus staff",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Support"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Laud Hailer",
       "text": "Once per battle, at the start of any phase: one battle-shocked ADEPTA SORORITAS unit within 12\" is no longer battle-shocked.",
       "kind": "datasheet"
      },
      {
       "name": "Stirring Rhetoric",
       "text": "While leading a unit, each time that unit performs an Act of Faith, one Miracle dice used is first changed to a 6.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 40
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Dialogus: bolt pistol, Dialogus staff.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "support": true,
     "once": [
      {
       "id": "laud",
       "name": "Laud Hailer",
       "n": 1,
       "text": "Start of any phase: one battle-shocked ADEPTA SORORITAS unit within 12\" is no longer battle-shocked."
      }
     ]
    },
    {
     "id": "dogmata",
     "name": "Dogmata",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Dogmata"
     ],
     "image": "as_dogmata",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "6+",
      "W": "3",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Mace of the Righteous",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Support"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Executioner of Heretics (Aura)",
       "text": "Enemy units within 6\" get -1 Leadership (worse).",
       "kind": "datasheet"
      },
      {
       "name": "Unflinching Determination",
       "text": "While leading a unit, its models get +1 OC.",
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
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad"
     ],
     "composition": "1 Dogmata: bolt pistol, mace of the righteous.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "support": true
    },
    {
     "id": "dominion_squad",
     "name": "Dominion Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Dominion Squad"
     ],
     "image": "as_dominion_squad",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "6+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Condemnor boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Inferno pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
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
       "name": "Artificer-crafted storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Rapid Fire 2",
        "Assault"
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
        "Melta 2",
        "Assault"
       ]
      },
      {
       "name": "Ministorum flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "0",
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
       "name": "Chainsword",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Close combat weapon",
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
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Holy Vanguard",
       "text": "If a Leader is attached at Declare Battle Formations and the unit starts inside a TRANSPORT, that Leader gains Scouts 6\".",
       "kind": "datasheet"
      },
      {
       "name": "Righteous Awareness",
       "text": "Your opponent's Movement phase: when an enemy unit ends a move within 8\", this unit can make a Normal move of up to D6\" if unengaged.",
       "kind": "datasheet"
      },
      {
       "name": "Cherub",
       "text": "Once per battle, after this unit performs an Act of Faith, gain 1 Miracle dice.",
       "kind": "datasheet"
      },
      {
       "name": "Simulacrum Imperialis",
       "text": "End of your Command phase: for each objective you control with one or more of your units with this ability in range, roll D6; on a 4+ gain a Miracle dice of that value.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 10,
       "pts": 90,
       "ptsLater": 100
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Dominion Superior and 9 Dominions: bolt pistol, boltgun, close combat weapon.",
     "options": [
      {
       "id": "sup_gun",
       "type": "choice",
       "label": "Dominion Superior: gun",
       "choices": [
        {
         "id": "boltgun",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "combi",
         "label": "Combi-weapon",
         "pts": 0
        },
        {
         "id": "cond",
         "label": "Condemnor boltgun",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        },
        {
         "id": "hflamer",
         "label": "Ministorum hand flamer",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "sup_melee",
       "type": "choice",
       "label": "Dominion Superior: melee",
       "choices": [
        {
         "id": "ccw",
         "label": "Close combat weapon",
         "pts": 0
        },
        {
         "id": "chain",
         "label": "Chainsword",
         "pts": 0
        },
        {
         "id": "power",
         "label": "Power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "storm",
       "type": "count",
       "label": "Artificer-crafted storm bolter",
       "group": "spec",
       "max": 4
      },
      {
       "id": "melta",
       "type": "count",
       "label": "Meltagun (+5 pts each)",
       "group": "spec",
       "max": 4,
       "pts": 5
      },
      {
       "id": "flamer",
       "type": "count",
       "label": "Ministorum flamer",
       "group": "spec",
       "max": 4
      },
      {
       "id": "simulacrum",
       "type": "toggle",
       "label": "Simulacrum imperialis"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [
      {
       "id": "spec",
       "per": 10,
       "n": 4,
       "label": "Special weapons"
      }
     ],
     "once": [
      {
       "id": "cherub",
       "name": "Cherub",
       "n": 1,
       "gain": true,
       "text": "After this unit performs an Act of Faith: gain 1 Miracle dice."
      }
     ]
    },
    {
     "id": "exorcist",
     "name": "Exorcist",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Smoke",
      "Imperium",
      "Exorcist",
      "Frame"
     ],
     "image": "as_exorcist",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "6+",
      "W": "11",
      "OC": "3",
      "Ld": "7+"
     },
     "damaged": {
      "threshold": 4,
      "text": "While it has 1-4 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Heavy Bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Exorcist Missile Launcher",
       "range": "36\"",
       "A": "D6+2",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "Indirect Fire"
       ]
      },
      {
       "name": "Exorcist Conflagration Rockets",
       "range": "36\"",
       "A": "3D6",
       "skill": "3+",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Blast",
        "Ignores Cover",
        "Indirect Fire"
       ]
      },
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Devastating Refrain",
       "text": "After it shoots: an enemy unit hit by an Indirect Fire weapon takes a Battle-shock test; models with Deadly Demise killed by those attacks explode on a 5+.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 180,
       "ptsLater": 220
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Exorcist: Exorcist missile launcher, heavy bolter, armoured tracks.",
     "options": [
      {
       "id": "launcher",
       "type": "choice",
       "label": "Launcher",
       "choices": [
        {
         "id": "ml",
         "label": "Exorcist missile launcher",
         "pts": 0
        },
        {
         "id": "rockets",
         "label": "Exorcist conflagration rockets",
         "pts": 0
        }
       ]
      },
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "hospitaller",
     "name": "Hospitaller",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Imperium",
      "Hospitaller"
     ],
     "image": "as_hospitaller",
     "baseSize": "50mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "6+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chirugeon's tools",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Support"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Medicus Ministorum",
       "text": "While leading a unit, its models have Feel No Pain 5+.",
       "kind": "datasheet"
      },
      {
       "name": "Sacred Healing",
       "text": "While leading a unit, in your Command phase return 1 destroyed non-CHARACTER model to it; or discard 1 Miracle dice to return up to D3+1.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65,
       "ptsLater": 75
      }
     ],
     "stepFrom": 2,
     "leaderOf": [
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Hospitaller: bolt pistol, chirurgeon's tools.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "support": true
    },
    {
     "id": "imagifier",
     "name": "Imagifier",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Imagifier"
     ],
     "image": "as_imagifier",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "3",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Support"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Litany of Deeds",
       "text": "When you gain a Miracle dice because a friendly ADEPTA SORORITAS unit or model was destroyed within 12\" of this model, you can re-roll that die before adding it.",
       "kind": "datasheet"
      },
      {
       "name": "Stanchion of Holy Martyrs",
       "text": "While leading a unit, its models have Save 2+ and a 4+ invulnerable save.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 55
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad"
     ],
     "composition": "1 Imagifier: bolt pistol, boltgun, close combat weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "support": true
    },
    {
     "id": "immolator",
     "name": "Immolator",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Dedicated Transport",
      "Vehicle",
      "Smoke",
      "Transport",
      "Imperium",
      "Immolator",
      "Frame"
     ],
     "image": "as_immolator",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "6+",
      "W": "11",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy Bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Immolation Flamers",
       "range": "18\"",
       "A": "2D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Twin Heavy Bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 2",
        "Twin-Linked"
       ]
      },
      {
       "name": "Twin Multi-melta",
       "range": "18\"",
       "A": "2",
       "skill": "3+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2",
        "Twin-Linked"
       ]
      },
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Purge and Cleanse",
       "text": "After it shoots: one enemy unit it hit cannot have the Benefit of Cover until the end of the phase.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 100,
       "ptsLater": 115
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Immolator: heavy bolter, immolation flamers, armoured tracks.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Main gun",
       "choices": [
        {
         "id": "flamers",
         "label": "Immolation flamers",
         "pts": 0
        },
        {
         "id": "thb",
         "label": "Twin heavy bolter",
         "pts": 0
        },
        {
         "id": "tmm",
         "label": "Twin multi-melta",
         "pts": 15
        }
       ]
      },
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 6 ADEPTA SORORITAS INFANTRY models (not JUMP PACK models or the Triumph of Saint Katherine). At Declare Battle Formations you can split one BATTLE SISTERS SQUAD, DOMINION SQUAD or SISTERS NOVITIATE SQUAD in two (only one half keeps the Cherub); one half must start inside this transport."
    },
    {
     "id": "intranzia_fraye",
     "name": "Intranzia Fraye",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Walker",
      "Imperium",
      "Character",
      "Penitent",
      "Epic Hero",
      "Intranzia Fraye"
     ],
     "image": "as_intranzia_fraye",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "7",
      "Sv": "3+",
      "InSv": "4+",
      "W": "8",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "2+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Melta missile array",
       "range": "24\"",
       "A": "2",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Melta 2"
       ]
      },
      {
       "name": "Ministorum heavy flamer",
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
       "name": "Mace of Saint Praxedes",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Throne of Blame",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Righteous Denunciation",
       "text": "Start of the Fight phase: each enemy unit within 6\" takes a Battle-shock test at -1.",
       "kind": "datasheet"
      },
      {
       "name": "Judged for Execution",
       "text": "End of your Movement phase: one visible enemy unit within 18\": until your next Command phase, your ADEPTA SORORITAS attacks against it have [LETHAL HITS].",
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
     "composition": "1 Intranzia Fraye (Epic Hero): 2 heavy bolters, 2 Ministorum heavy flamers, melta missile array, Mace of Saint Praxedes, Throne of Blame.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "junith_eruita",
     "name": "Junith Eruita",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Epic Hero",
      "Character",
      "Fly",
      "Imperium",
      "Junith Eruita",
      "Mounted"
     ],
     "image": "as_junith_eruita",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "5",
      "Sv": "2+",
      "InSv": "4+",
      "W": "8",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Twin Ministorum Heavy Flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent",
        "Twin-Linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Mace of Castigation",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "The Pulpit of Saint Holline’s Basilica",
       "text": "This unit has Stealth, and melee attacks against it get -1 to hit.",
       "kind": "datasheet"
      },
      {
       "name": "Fiery Conviction",
       "text": "Start of your Command phase, if on the battlefield: discard 1 Miracle dice to gain 1CP, or take a Leadership test and gain 1CP if passed.",
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
     "leaderOf": [
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Junith Eruita (Epic Hero): twin Ministorum heavy flamer, Mace of Castigation.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "ministorum_priest",
     "name": "Ministorum Priest",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Imperium",
      "Ministorum Priest",
      "Penitent"
     ],
     "image": "as_ministorum_priest",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "6+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Holy Pistol",
       "range": "12\"",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Zealot's vindictor",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
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
       "name": "Power weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Zealot's vindictor",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Righteous Smiting",
       "text": "While leading a unit, melee attacks by its models get +1 to wound.",
       "kind": "datasheet"
      },
      {
       "name": "Zealot",
       "text": "Once per battle, in the Fight phase: +3 S and +3 A on his melee weapons until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Holy Mission",
       "text": "Attached to a DOMINION SQUAD at Declare Battle Formations: Scouts 6\". Attached to a SISTERS NOVITIATE SQUAD: Infiltrators.",
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
      "arco_flagellants",
      "battle_sisters_squad",
      "celestian_insidiants",
      "dominion_squad",
      "sanctifiers",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Ministorum Priest: zealot's vindictor.",
     "options": [
      {
       "id": "gun",
       "type": "choice",
       "label": "Weapons",
       "choices": [
        {
         "id": "vindictor",
         "label": "Zealot's vindictor",
         "pts": 0
        },
        {
         "id": "pistol",
         "label": "Holy pistol and power weapon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "once": [
      {
       "id": "zealot",
       "name": "Zealot",
       "n": 1,
       "text": "Fight phase: +3 S and +3 A on his melee weapons until the end of the phase."
      }
     ]
    },
    {
     "id": "mortifiers",
     "name": "Mortifiers",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Walker",
      "Imperium",
      "Mortifiers",
      "Penitent"
     ],
     "image": "as_mortifiers",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "6",
      "Sv": "4+",
      "InSv": "6+",
      "W": "5",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Heavy Bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Mortifier flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "n/a",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent",
        "Twin-Linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Twin Penitent Buzz-Blades",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Sustained Hits 1",
        "Twin-Linked"
       ]
      },
      {
       "name": "Twin Penitent Flails",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Sustained Hits 1",
        "Twin-Linked"
       ]
      },
      {
       "name": "Penitent Buzz-Blade",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "10",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Penitent Flail",
       "range": "Melee",
       "A": "8",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Anguish of the Unredeemed",
       "text": "A model killed by a melee attack before it fought: on a 2+ it fights after the attacker, then is removed.",
       "kind": "datasheet"
      },
      {
       "name": "Anchorite Sarcophagus",
       "text": "The bearer has a Move characteristic of 7\" and a Save characteristic of 3+.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 70
      },
      {
       "models": 2,
       "pts": 130
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1-2 Mortifiers: 2 heavy bolters, twin penitent buzz-blades.",
     "options": [
      {
       "id": "sarco",
       "type": "toggle",
       "label": "Anchorite sarcophagus"
      },
      {
       "id": "hbf",
       "type": "count",
       "label": "Heavy bolter and Mortifier flamer",
       "slots": [
        "mg"
       ],
       "max": "slot"
      },
      {
       "id": "mf",
       "type": "count",
       "label": "2 Mortifier flamers",
       "slots": [
        "mg"
       ],
       "max": "slot"
      },
      {
       "id": "blade_flail",
       "type": "count",
       "label": "Penitent buzz-blade and penitent flail",
       "slots": [
        "pm"
       ],
       "max": "slot"
      },
      {
       "id": "flails",
       "type": "count",
       "label": "Twin penitent flails",
       "slots": [
        "pm"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "mg",
       "label": "Mortifier guns",
       "default": "2 heavy bolters",
       "size": {
        "models": 1
       }
      },
      {
       "id": "pm",
       "label": "Mortifier melee weapons",
       "default": "Twin penitent buzz-blades",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "morvenn_vahl",
     "name": "Morvenn Vahl",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Walker",
      "Character",
      "Epic Hero",
      "Imperium",
      "Morvenn Vahl"
     ],
     "image": "as_morvenn_vahl",
     "baseSize": "60mm",
     "profile": {
      "M": "8\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "8",
      "OC": "3",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Fidelis",
       "range": "36\"",
       "A": "3",
       "skill": "2+",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Paragon missile launcher - prioris",
       "range": "36\"",
       "A": "2",
       "skill": "2+",
       "S": "9",
       "AP": "-2",
       "D": "D6",
       "kw": []
      },
      {
       "name": "Paragon missile launcher - sanctorum",
       "range": "36\"",
       "A": "2D6",
       "skill": "2+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      }
     ],
     "melee": [
      {
       "name": "Lance of Illumination - strike",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Lance of Illumination - sweep",
       "range": "Melee",
       "A": "10",
       "skill": "2+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Abbess Sanctorum",
       "text": "While leading a unit, attacks by its models re-roll hit and wound rolls.",
       "kind": "datasheet"
      },
      {
       "name": "Righteous Repugnance",
       "text": "When her unit shoots or fights, discard 1 Miracle dice for +3 A on Fidelis and the Lance of Illumination until the end of the phase. Gain 1 Miracle dice each time she destroys an enemy unit.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 215
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "paragon_warsuits"
     ],
     "composition": "1 Morvenn Vahl (Epic Hero): Fidelis, Paragon missile launcher, Lance of Illumination.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "palatine",
     "name": "Palatine",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Palatine"
     ],
     "image": "as_palatine",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - supercharge",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "2+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Palatine blade",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Fury of the Righteous",
       "text": "While leading a unit, weapons in that unit have [LETHAL HITS].",
       "kind": "datasheet"
      },
      {
       "name": "Rapturous Blows",
       "text": "When her unit fights, discard 1 Miracle dice: until the end of the phase each wound from her melee attacks also inflicts 1 mortal wound.",
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
      "battle_sisters_squad",
      "celestian_insidiants",
      "celestian_sacresants",
      "dominion_squad",
      "retributor_squad",
      "sisters_novitiate_squad"
     ],
     "composition": "1 Palatine: bolt pistol, Palatine blade.",
     "options": [
      {
       "id": "pistol",
       "type": "choice",
       "label": "Pistol",
       "choices": [
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
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
     "id": "paragon_warsuits",
     "name": "Paragon Warsuits",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Walker",
      "Grenades",
      "Imperium",
      "Paragon Warsuits"
     ],
     "image": "as_paragon_warsuits",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "7",
      "Sv": "2+",
      "InSv": "4+",
      "W": "4",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Paragon Storm Bolters",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 2",
        "Twin-Linked"
       ]
      },
      {
       "name": "Paragon Grenade Launchers",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Twin-Linked"
       ]
      },
      {
       "name": "Heavy Bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
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
        "Melta 2"
       ]
      },
      {
       "name": "Ministorum heavy flamer",
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
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Paragon War Blade",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": []
      },
      {
       "name": "Paragon War Mace",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "12",
       "AP": "-1",
       "D": "3",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Righteous Paragons",
       "text": "Attacks against MONSTER or VEHICLE units get +1 to hit and +1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 165,
       "ptsLater": 175
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Paragon Superior and 2 Paragons: bolt pistol, heavy bolter, Paragon storm bolters, Paragon war blade.",
     "options": [
      {
       "id": "gl",
       "type": "count",
       "label": "Paragon grenade launchers",
       "slots": [
        "pg"
       ],
       "max": "slot"
      },
      {
       "id": "mace",
       "type": "count",
       "label": "Paragon war mace",
       "slots": [
        "pw"
       ],
       "max": "slot"
      },
      {
       "id": "hflamer",
       "type": "count",
       "label": "Ministorum heavy flamer",
       "slots": [
        "ph"
       ],
       "max": "slot"
      },
      {
       "id": "mm",
       "type": "count",
       "label": "Multi-melta (+10 pts each)",
       "slots": [
        "ph"
       ],
       "max": "slot",
       "pts": 10
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "pg",
       "label": "Paragon storm bolters",
       "default": "Paragon storm bolters",
       "size": {
        "models": 1
       }
      },
      {
       "id": "pw",
       "label": "Paragon melee weapon",
       "default": "Paragon war blade",
       "size": {
        "models": 1
       }
      },
      {
       "id": "ph",
       "label": "Paragon heavy weapon",
       "default": "Heavy bolter",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "penitent_engines",
     "name": "Penitent Engines",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Vehicle",
      "Walker",
      "Imperium",
      "Penitent Engines",
      "Penitent"
     ],
     "image": "as_penitent_engines",
     "baseSize": "50mm",
     "profile": {
      "M": "8\"",
      "T": "6",
      "Sv": "4+",
      "InSv": "6+",
      "W": "5",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Penitent Flamers",
       "range": "12\"",
       "A": "2D6",
       "skill": "—",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault",
        "Ignores Cover",
        "Torrent",
        "Twin-Linked"
       ]
      }
     ],
     "melee": [
      {
       "name": "Twin Penitent Buzz-Blades",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "10",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Sustained Hits 1",
        "Twin-Linked"
       ]
      },
      {
       "name": "Twin Penitent Flails",
       "range": "Melee",
       "A": "8",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Sustained Hits 1",
        "Twin-Linked"
       ]
      },
      {
       "name": "Penitent Buzz-Blade",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "10",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Penitent Flail",
       "range": "Melee",
       "A": "8",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Sustained Hits 1"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise 1",
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Endless Suffering",
       "text": "This unit can charge in a turn in which it advanced.",
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
     "composition": "1-2 Penitent Engines: penitent flamers, twin penitent buzz-blades.",
     "options": [
      {
       "id": "blade_flail",
       "type": "count",
       "label": "Penitent buzz-blade and penitent flail",
       "slots": [
        "pm"
       ],
       "max": "slot"
      },
      {
       "id": "flails",
       "type": "count",
       "label": "Twin penitent flails",
       "slots": [
        "pm"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "pm",
       "label": "Penitent melee weapons",
       "default": "Twin penitent buzz-blades",
       "size": {
        "models": 1
       }
      }
     ],
     "optionGroups": []
    },
    {
     "id": "repentia_squad",
     "name": "Repentia Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Repentia Squad",
      "Penitent"
     ],
     "image": "as_repentia_squad",
     "baseSize": "32mm (Repentia 28.5mm)",
     "profile": {
      "M": "7\"",
      "T": "3",
      "Sv": "7+",
      "InSv": "6+",
      "W": "1",
      "OC": "1",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Penitent Eviscerator",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Neural Whips",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+"
       ]
      }
     ],
     "coreAbilities": [
      "Feel No Pain 5+"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Overseer of Redemption",
       "text": "While the Repentia Superior is alive, melee attacks by Sisters Repentia re-roll hit and wound rolls.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 70
      },
      {
       "models": 10,
       "pts": 140
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Repentia Superior (bolt pistol, neural whips) and 4-9 Sisters Repentia (penitent eviscerator).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Repentia Superior",
      "W": "1",
      "Ld": "7+",
      "Sv": "3+"
     }
    },
    {
     "id": "retributor_squad",
     "name": "Retributor Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retributor Squad"
     ],
     "image": "as_retributor_squad",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "6+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Condemnor boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Inferno pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      },
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
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
       "name": "Ministorum heavy flamer",
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
        "Heavy",
        "Melta 2"
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
        "Heavy",
        "Sustained Hits 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Chainsword",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Cherubs",
       "text": "Twice per battle, after this unit performs an Act of Faith, gain 1 Miracle dice.",
       "kind": "datasheet"
      },
      {
       "name": "Storm of Retribution",
       "text": "Ranged attacks re-roll hit and wound rolls of 1; against an enemy unit that has destroyed one of your ADEPTA SORORITAS units this battle, also +1 to hit and +1 to wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 105,
       "ptsLater": 115
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Retributor Superior (bolt pistol, boltgun, close combat weapon) and 4 Retributors (bolt pistol, heavy bolter, close combat weapon).",
     "options": [
      {
       "id": "sup_gun",
       "type": "choice",
       "label": "Retributor Superior: gun",
       "choices": [
        {
         "id": "boltgun",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "combi",
         "label": "Combi-weapon",
         "pts": 0
        },
        {
         "id": "cond",
         "label": "Condemnor boltgun",
         "pts": 0
        },
        {
         "id": "inferno",
         "label": "Inferno pistol",
         "pts": 0
        },
        {
         "id": "hflamer",
         "label": "Ministorum hand flamer",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
         "pts": 0
        }
       ]
      },
      {
       "id": "sup_melee",
       "type": "choice",
       "label": "Retributor Superior: melee",
       "choices": [
        {
         "id": "ccw",
         "label": "Close combat weapon",
         "pts": 0
        },
        {
         "id": "chain",
         "label": "Chainsword",
         "pts": 0
        },
        {
         "id": "power",
         "label": "Power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "hflamer",
       "type": "count",
       "label": "Ministorum heavy flamer",
       "slots": [
        "rh"
       ],
       "max": "slot"
      },
      {
       "id": "mm",
       "type": "count",
       "label": "Multi-melta (+5 pts each)",
       "slots": [
        "rh"
       ],
       "max": "slot",
       "pts": 5
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "rh",
       "label": "Retributor heavy weapon",
       "default": "Heavy bolter",
       "size": {
        "models": 1,
        "minus": 1
       }
      }
     ],
     "optionGroups": [],
     "once": [
      {
       "id": "cherubs",
       "name": "Cherubs",
       "n": 2,
       "gain": true,
       "text": "After this unit performs an Act of Faith: gain 1 Miracle dice. Twice per battle."
      }
     ]
    },
    {
     "id": "saint_celestine",
     "name": "Saint Celestine",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Fly",
      "Grenades",
      "Imperium",
      "Epic Hero",
      "Jump Pack",
      "Character",
      "Saint Celestine"
     ],
     "image": "as_saint_celestine",
     "baseSize": "40mm (Geminae 32mm)",
     "profile": {
      "M": "12\"",
      "T": "3",
      "Sv": "2+",
      "InSv": "4+",
      "W": "2",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "The Ardent Blade",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Bolt Pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "The Ardent Blade",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "6",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Power Weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Healing Tears",
       "text": "While Celestine is alive, in your Command phase return 1 destroyed Geminae Superia.",
       "kind": "datasheet"
      },
      {
       "name": "Lifewards",
       "text": "While a Geminae Superia is alive, Celestine has Feel No Pain 4+.",
       "kind": "datasheet"
      },
      {
       "name": "Miraculous Intervention",
       "text": "The first time Celestine dies, roll D6 at the end of the phase: on a 2+ she is set back up as close as possible, unengaged, with full wounds.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 3,
       "pts": 135
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "seraphim_squad",
      "zephyrim_squad"
     ],
     "composition": "1 Celestine (Epic Hero: the Ardent Blade) and 2 Geminae Superia (bolt pistol, power weapon).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Saint Celestine",
      "W": "5",
      "Ld": "6+"
     },
     "once": [
      {
       "id": "miraculous",
       "name": "Miraculous Intervention",
       "n": 1,
       "text": "The first time Celestine dies: roll D6 at the end of the phase, on a 2+ she returns with full wounds."
      }
     ]
    },
    {
     "id": "sanctifiers",
     "name": "Sanctifiers",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Sanctifiers"
     ],
     "image": "as_sanctifiers",
     "baseSize": "25mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "6+",
      "InSv": "5+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      },
      {
       "name": "Holy fire",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "6",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Ignores Cover",
        "One Shot",
        "Torrent"
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
       "name": "Meltagun",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2"
       ]
      },
      {
       "name": "Ministorum flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
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
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Sanctifier melee weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Burning hands",
       "range": "Melee",
       "A": "1",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Death Cult blades",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Ministorum Sermon",
       "text": "While a MINISTORUM PRIEST is in this unit, its melee weapons have [SUSTAINED HITS 1].",
       "kind": "datasheet"
      },
      {
       "name": "Cherub",
       "text": "Once per battle, after this unit performs an Act of Faith, gain 1 Miracle dice.",
       "kind": "datasheet"
      },
      {
       "name": "Attached Unit",
       "text": "A character that can join a listed bodyguard can join this unit instead (see the Leader lists).",
       "kind": "datasheet"
      },
      {
       "name": "Simulacrum Imperialis",
       "text": "End of your Command phase: for each objective you control with one or more of your units with this ability in range, roll D6; on a 4+ gain a Miracle dice of that value.",
       "kind": "wargear"
      },
      {
       "name": "Salvationist Medikit",
       "text": "Your Command phase, if the bearer is on the battlefield: return up to D3 destroyed non-CHARACTER models.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 9,
       "pts": 110
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Miraculist (holy fire, burning hands), 1 Salvationist (close combat weapon, Salvationist medikit), 1 Death Cult Assassin (Death Cult blades), 2 Missionaries (one with plasma gun, one with Ministorum flamer; Sanctifier melee weapons) and 4 Sanctifiers (Ministorum hand flamer, Sanctifier melee weapon).",
     "options": [
      {
       "id": "missionary",
       "type": "choice",
       "label": "Missionary: gun",
       "choices": [
        {
         "id": "plasma",
         "label": "Plasma gun",
         "pts": 0
        },
        {
         "id": "melta",
         "label": "Meltagun",
         "pts": 0
        }
       ]
      },
      {
       "id": "holyfire",
       "type": "toggle",
       "label": "Holy fire (Missionary with plasma gun)"
      },
      {
       "id": "hf2",
       "type": "toggle",
       "label": "Second Ministorum hand flamer (1 Sanctifier)"
      }
     ],
     "optionRules": [
      {
       "if": "holyfire",
       "notValue": 0,
       "requireAllOf": [
        [
         "missionary",
         "plasma"
        ]
       ],
       "message": "Holy fire needs the Missionary with a plasma gun."
      }
     ],
     "slots": [],
     "optionGroups": [],
     "once": [
      {
       "id": "cherub",
       "name": "Cherub",
       "n": 1,
       "gain": true,
       "text": "After this unit performs an Act of Faith: gain 1 Miracle dice."
      }
     ]
    },
    {
     "id": "seraphim_squad",
     "name": "Seraphim Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Fly",
      "Grenades",
      "Imperium",
      "Seraphim Squad",
      "Jump Pack"
     ],
     "image": "as_seraphim_squad",
     "baseSize": "32mm",
     "profile": {
      "M": "12\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "5+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
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
       "name": "Ministorum hand flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Pistol",
        "Torrent"
       ]
      },
      {
       "name": "Inferno Pistol",
       "range": "6\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-4",
       "D": "D3",
       "kw": [
        "Melta 2",
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power Weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Chainsword",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Angelic Ascent",
       "text": "Your Shooting phase, after it shoots, if unengaged: Normal move up to 6\"; it cannot charge this turn.",
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
       "pts": 150,
       "ptsLater": 160
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Seraphim Superior and 4-9 Seraphim: 2 bolt pistols, close combat weapon.",
     "options": [
      {
       "id": "inferno",
       "type": "count",
       "label": "2 inferno pistols",
       "group": "sp",
       "per": 5,
       "n": 2
      },
      {
       "id": "hflamers",
       "type": "count",
       "label": "2 Ministorum hand flamers",
       "group": "sp",
       "per": 5,
       "n": 2
      },
      {
       "id": "sup",
       "type": "choice",
       "label": "Seraphim Superior: weapons",
       "choices": [
        {
         "id": "bp",
         "label": "2 bolt pistols",
         "pts": 0
        },
        {
         "id": "bpc",
         "label": "Bolt pistol and chainsword",
         "pts": 0
        },
        {
         "id": "bpp",
         "label": "Bolt pistol and plasma pistol",
         "pts": 0
        },
        {
         "id": "bpw",
         "label": "Bolt pistol and power weapon",
         "pts": 0
        },
        {
         "id": "ppc",
         "label": "Plasma pistol and chainsword",
         "pts": 0
        },
        {
         "id": "ppw",
         "label": "Plasma pistol and power weapon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [
      {
       "id": "sp",
       "per": 5,
       "n": 2,
       "label": "Special pistols"
      }
     ]
    },
    {
     "id": "sisters_novitiate_squad",
     "name": "Sisters Novitiate Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Sisters Novitiate Squad"
     ],
     "image": "as_sisters_novitiate_squad",
     "baseSize": "32mm (Novitiates 28.5mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "6+",
      "W": "1",
      "OC": "2",
      "Ld": "8+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
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
       "name": "Novitiate autopistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Ministorum flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Torrent"
       ]
      },
      {
       "name": "Novitiate autogun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Novitiate melee weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Infiltrators"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Impetuous Fervour",
       "text": "Attacks re-roll hit rolls of 1, or the whole hit roll against an enemy unit in range of an objective.",
       "kind": "datasheet"
      },
      {
       "name": "Sacred Banner",
       "text": "Re-roll Advance and Charge rolls for the bearer's unit.",
       "kind": "wargear"
      },
      {
       "name": "Simulacrum Imperialis",
       "text": "End of your Command phase: for each objective you control with one or more of your units with this ability in range, roll D6; on a 4+ gain a Miracle dice of that value.",
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
     "composition": "1 Novitiate Superior (bolt pistol, boltgun, close combat weapon) and 9 Sisters Novitiate (Novitiate autopistol, Novitiate autogun, close combat weapon).",
     "options": [
      {
       "id": "sup",
       "type": "choice",
       "label": "Novitiate Superior: weapons",
       "choices": [
        {
         "id": "gun",
         "label": "Bolt pistol and boltgun",
         "pts": 0
        },
        {
         "id": "bpw",
         "label": "Bolt pistol and power weapon",
         "pts": 0
        },
        {
         "id": "ppw",
         "label": "Plasma pistol and power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "banner",
       "type": "toggle",
       "label": "Sacred banner"
      },
      {
       "id": "simulacrum",
       "type": "toggle",
       "label": "Simulacrum imperialis"
      },
      {
       "id": "flamer",
       "type": "count",
       "label": "Ministorum flamer",
       "max": 2
      },
      {
       "id": "melee",
       "type": "count",
       "label": "Novitiate melee weapons",
       "slots": [
        "nv"
       ],
       "max": "slot"
      }
     ],
     "optionRules": [],
     "slots": [
      {
       "id": "nv",
       "label": "Novitiate weapons",
       "default": "Novitiate autogun",
       "size": {
        "models": 1,
        "minus": 1
       },
       "fixedNote": "All also have a Novitiate autopistol."
      }
     ],
     "optionGroups": [],
     "leadModel": {
      "name": "Novitiate Superior",
      "W": "1",
      "Ld": "7+",
      "Sv": "3+"
     }
    },
    {
     "id": "sororitas_rhino",
     "name": "Sororitas Rhino",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Dedicated Transport",
      "Vehicle",
      "Transport",
      "Smoke",
      "Imperium",
      "Sororitas Rhino",
      "Frame"
     ],
     "image": "as_sororitas_rhino",
     "baseSize": "Use model",
     "profile": {
      "M": "12\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "6+",
      "W": "10",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
       ]
      },
      {
       "name": "Storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
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
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Self Repair",
       "text": "Start of your Command phase: this model regains 1 lost wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65,
       "ptsLater": 75
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Sororitas Rhino: storm bolter, armoured tracks.",
     "options": [
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 ADEPTA SORORITAS INFANTRY models (not JUMP PACK models or the Triumph of Saint Katherine)."
    },
    {
     "id": "triumph_of_saint_katherine",
     "name": "Triumph of Saint Katherine",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Grenades",
      "Character",
      "Epic Hero",
      "Imperium",
      "Triumph of Saint Katherine"
     ],
     "image": "as_triumph_of_saint_katherine",
     "baseSize": "120x92mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "18",
      "OC": "6",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 6,
      "text": "While it has 1-6 wounds left: the Attacks of all its weapons are halved, and Relics of the Matriarchs picks only one ability."
     },
     "ranged": [
      {
       "name": "Bolt Pistols",
       "range": "12\"",
       "A": "6",
       "skill": "2+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Relic Weapons",
       "range": "Melee",
       "A": "18",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Relics of the Matriarchs",
       "text": "Start of each battle round: pick up to two Relics (one while Damaged); it has them until the next battle round. The Fiery Heart: Aura 6\": +2\" Move and +1 to Advance and Charge rolls. Censer of the Sacred Rose: Aura 6\": re-roll Battle-shock tests. Simulacrum of the Ebon Chalice: Aura 6\": up to two Acts of Faith per phase (never two dice in one roll). Simulacrum of the Argent Shroud: Aura 6\": ranged attacks re-roll wound rolls of 1. Icon of the Valorous Heart: Aura 6\": Feel No Pain 6+. Petals of the Bloody Rose: Aura 6\": +1 AP on melee weapons.",
       "kind": "datasheet"
      },
      {
       "name": "Solemn Procession",
       "text": "While this model is on the battlefield, each time you gain a Miracle dice at the start of the battle round, that Miracle dice is a 6 (do not roll for it).",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 245
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "battle_sisters_squad"
     ],
     "composition": "1 Triumph of Saint Katherine (Epic Hero): bolt pistols, relic weapons.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": []
    },
    {
     "id": "zephyrim_squad",
     "name": "Zephyrim Squad",
     "role": "unit",
     "faction": "Adepta Sororitas",
     "keywords": [
      "Infantry",
      "Fly",
      "Grenades",
      "Imperium",
      "Zephyrim Squad",
      "Jump Pack"
     ],
     "image": "as_zephyrim_squad",
     "baseSize": "32mm",
     "profile": {
      "M": "12\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "5+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
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
      }
     ],
     "melee": [
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Acts of Faith"
     ],
     "abilities": [
      {
       "name": "Embodied Prophecy",
       "text": "When it fights, its melee weapons gain [SUSTAINED HITS 1] or [LETHAL HITS] until the end of the phase; both if it charged this turn.",
       "kind": "datasheet"
      },
      {
       "name": "Sacred Banner",
       "text": "Re-roll Advance and Charge rolls for the bearer's unit.",
       "kind": "wargear"
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
       "pts": 150,
       "ptsLater": 160
      }
     ],
     "stepFrom": 3,
     "leaderOf": [],
     "composition": "1 Zephyrim Superior and 4-9 Zephyrim: bolt pistol, power weapon.",
     "options": [
      {
       "id": "banner",
       "type": "toggle",
       "label": "Sacred banner"
      },
      {
       "id": "sup_pistol",
       "type": "choice",
       "label": "Zephyrim Superior: pistol",
       "choices": [
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma pistol",
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
     "id": "aquila_kill_team",
     "name": "Aquila Kill Team",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Battleline",
      "Grenades",
      "Imperium",
      "Deathwatch",
      "Aquila Kill Team",
      "Retinue",
      "Ordo Xenos",
      "Tacticus",
      "Gravis"
     ],
     "image": "ag_aquila_kill_team",
     "baseSize": "32mm (Gravis 40mm)",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "3+",
      "InSv": "—",
      "W": "2",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Plasma pistol - Standard",
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
       "name": "Plasma pistol - Supercharge",
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
       "name": "Stalker bolt rifle",
       "range": "30\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Heavy",
        "Lethal Hits",
        "Precision"
       ]
      },
      {
       "name": "Plasma incinerator - Standard",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Assault",
        "Heavy"
       ]
      },
      {
       "name": "Plasma incinerator - Supercharge",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "8",
       "AP": "-3",
       "D": "2",
       "kw": [
        "Assault",
        "Hazardous",
        "Heavy"
       ]
      },
      {
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol",
        "Lethal Hits"
       ]
      },
      {
       "name": "Deathwatch marksman bolt carbine",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Heavy",
        "Lethal Hits"
       ]
      },
      {
       "name": "Special-issue bolt pistol",
       "range": "18\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol",
        "Precision",
        "Lethal Hits"
       ]
      },
      {
       "name": "Frag cannon",
       "range": "18\"",
       "A": "D3",
       "skill": "3+",
       "S": "7",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Blast",
        "Heavy",
        "Lethal Hits",
        "Rapid Fire D3"
       ]
      },
      {
       "name": "Hellstorm bolt rifle",
       "range": "30\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Assault",
        "Heavy",
        "Lethal Hits"
       ]
      },
      {
       "name": "Astartes grenade launcher - frag",
       "range": "24\"",
       "A": "D3",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Astartes grenade launcher - krak",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": []
      },
      {
       "name": "Infernus heavy bolter - heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Infernus heavy bolter - heavy flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Heavy thunder hammer",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Combat knife",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Precision"
       ]
      },
      {
       "name": "Xenophase blade",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Death to the Alien",
       "text": "Attacks re-roll hit rolls of 1, or the whole hit roll against a unit without IMPERIUM or CHAOS.",
       "kind": "datasheet"
      },
      {
       "name": "Attached Unit",
       "text": "A character that can join a DEATHWATCH KILL TEAM can join this unit instead.",
       "kind": "datasheet"
      },
      {
       "name": "Astartes shield",
       "text": "The bearer has a 4+ invulnerable save.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 110
      },
      {
       "models": 10,
       "pts": 210
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Kill Team Sergeant (plasma pistol, power weapon), 1-2 Gravis Veterans (infernus heavy bolter, bolt pistol, close combat weapon) and Deathwatch Veterans with stalker bolt rifle, heavy thunder hammer and Deathwatch marksman bolt carbine.",
     "options": [
      {
       "id": "frag",
       "type": "count",
       "label": "Frag cannon",
       "per": 5,
       "n": 1
      },
      {
       "id": "hellstorm",
       "type": "count",
       "label": "Hellstorm bolt rifle and Astartes grenade launcher",
       "per": 5,
       "n": 1
      },
      {
       "id": "shield",
       "type": "count",
       "label": "Power weapon and Astartes shield",
       "per": 5,
       "n": 1
      },
      {
       "id": "incin",
       "type": "count",
       "label": "Plasma incinerator",
       "per": 5,
       "n": 1
      },
      {
       "id": "knife",
       "type": "count",
       "label": "Combat knife",
       "per": 5,
       "n": 1
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "callidus_assassin",
     "name": "Callidus Assassin",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Imperium",
      "Callidus Assassin",
      "Officio Assassinorum"
     ],
     "image": "ag_callidus_assassin",
     "baseSize": "32mm",
     "profile": {
      "M": "7\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Neural shredder",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Anti-infantry 2+",
        "Precision",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Phase sword and poison blades",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "5",
       "AP": "-4",
       "D": "2",
       "kw": [
        "Lethal Hits",
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Fights First",
      "Infiltrators",
      "Lone Operative"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Reign of Confusion",
       "text": "Once per turn, when your opponent targets one of their units within 12\" with a Stratagem, that use costs 1CP more.",
       "kind": "datasheet"
      },
      {
       "name": "Acrobatic Escape",
       "text": "End of the Fight phase, if engaged: fall back up to D6\". End of your opponent's turn, if more than 3\" from enemies: go into Strategic Reserves and arrive in your next Movement phase.",
       "kind": "datasheet"
      },
      {
       "name": "Shadow Assignment",
       "text": "This model cannot be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Decoy Targets",
       "text": "Twice per battle (not in the same round), your Movement phase: destroy another friendly unengaged INFANTRY model and put this model in its place.",
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
     "leaderOf": [],
     "composition": "1 Callidus Assassin (Epic Hero): neural shredder, phase sword and poison blades.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "corvus_blackstar",
     "name": "Corvus Blackstar",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Fly",
      "Vehicle",
      "Imperium",
      "Transport",
      "Retinue",
      "Corvus Blackstar",
      "Ordo Xenos",
      "Deathwatch",
      "Frame",
      "Smoke"
     ],
     "image": "ag_corvus_blackstar",
     "baseSize": "120x92mm (flying base)",
     "profile": {
      "M": "14\"",
      "T": "10",
      "Sv": "3+",
      "InSv": "—",
      "W": "14",
      "OC": "0",
      "Ld": "6+"
     },
     "damaged": {
      "threshold": 5,
      "text": "While it has 1-5 wounds left: -1 to hit rolls."
     },
     "ranged": [
      {
       "name": "Hurricane bolter",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 6",
        "Twin-Linked"
       ]
      },
      {
       "name": "Twin assault cannon",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Twin-Linked"
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
        "Twin-Linked"
       ]
      },
      {
       "name": "Blackstar rocket launcher",
       "range": "30\"",
       "A": "D6+1",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Stormstrike missile launcher",
       "range": "48\"",
       "A": "1",
       "skill": "3+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Armoured hull",
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
      "Deadly Demise D6",
      "Hover",
      "Stealth"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Blackstar Cluster Launcher",
       "text": "After a Normal move: one enemy unit it moved over, roll six D6, each 5+ is 1 mortal wound.",
       "kind": "datasheet"
      },
      {
       "name": "Auspex Array",
       "text": "The bearer's ranged weapons have [IGNORES COVER].",
       "kind": "wargear"
      },
      {
       "name": "Infernum Halo-launcher",
       "text": "The bearer has the SMOKE keyword.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 180
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Corvus Blackstar: 2 Blackstar rocket launchers, twin assault cannon, armoured hull.",
     "options": [
      {
       "id": "cannon",
       "type": "choice",
       "label": "Nose gun",
       "choices": [
        {
         "id": "ac",
         "label": "Twin assault cannon",
         "pts": 0
        },
        {
         "id": "las",
         "label": "Twin lascannon",
         "pts": 0
        }
       ]
      },
      {
       "id": "rockets",
       "type": "choice",
       "label": "Missiles",
       "choices": [
        {
         "id": "bs",
         "label": "2 Blackstar rocket launchers",
         "pts": 0
        },
        {
         "id": "ss",
         "label": "2 stormstrike missile launchers",
         "pts": 0
        }
       ]
      },
      {
       "id": "hurricane",
       "type": "toggle",
       "label": "Hurricane bolter"
      },
      {
       "id": "system",
       "type": "choice",
       "label": "System",
       "choices": [
        {
         "id": "none",
         "label": "None",
         "pts": 0
        },
        {
         "id": "auspex",
         "label": "Auspex array",
         "pts": 0
        },
        {
         "id": "halo",
         "label": "Infernum halo-launcher",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 DEATHWATCH INFANTRY models.",
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "culexus_assassin",
     "name": "Culexus Assassin",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Grenades",
      "Imperium",
      "Culexus Assassin",
      "Officio Assassinorum"
     ],
     "image": "ag_culexus_assassin",
     "baseSize": "32mm",
     "profile": {
      "M": "7\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Animus speculum",
       "range": "24\"",
       "A": "3",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Anti-psyker 2+",
        "Assault",
        "Precision",
        "Psychic Assassin"
       ]
      }
     ],
     "melee": [
      {
       "name": "Life-draining touch",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Abomination",
       "text": "Feel No Pain 2+ against Psychic Attacks.",
       "kind": "datasheet"
      },
      {
       "name": "Soulless Horror",
       "text": "Once per battle, start of any Command phase: each enemy unit within 9\" takes a Battle-shock test at -1 (-2 if PSYKER).",
       "kind": "datasheet"
      },
      {
       "name": "Etheric Emergence",
       "text": "When it arrives by Deep Strike it can be set up anywhere more than 6\" from enemy units, but cannot charge that turn.",
       "kind": "datasheet"
      },
      {
       "name": "Shadow Assignment",
       "text": "This model cannot be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Esoteric Explosives",
       "text": "When targeted with the Grenades Stratagem, mortal wounds are inflicted on 3+ instead of 4+.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 85
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Culexus Assassin (Epic Hero): animus speculum, life-draining touch.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "deathwatch_kill_team",
     "name": "Deathwatch Kill Team",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Battleline",
      "Grenades",
      "Imperium",
      "Retinue",
      "Ordo Xenos",
      "Deathwatch",
      "Kill Team"
     ],
     "image": "ag_deathwatch_kill_team",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "3+",
      "InSv": "—",
      "W": "2",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Boltgun",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Frag cannon",
       "range": "18\"",
       "A": "D3",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Blast",
        "Heavy",
        "Rapid Fire D3"
       ]
      },
      {
       "name": "Infernus heavy bolter - heavy bolter",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Heavy",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Infernus heavy bolter - heavy flamer",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores cover",
        "Torrent"
       ]
      },
      {
       "name": "Stalker-pattern boltgun",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Heavy",
        "Precision"
       ]
      },
      {
       "name": "Deathwatch shotgun",
       "range": "18\"",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Deathwatch thunder hammer",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "10",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Black Shield blades",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Twin-linked"
       ]
      },
      {
       "name": "Xenophase blade",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Death to the Alien",
       "text": "Attacks re-roll hit rolls of 1, or the whole hit roll against a unit without IMPERIUM or CHAOS.",
       "kind": "datasheet"
      },
      {
       "name": "Astartes shield",
       "text": "The bearer has a 4+ invulnerable save.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 115
      },
      {
       "models": 10,
       "pts": 220
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Watch Sergeant and 4-9 Deathwatch Veterans: boltgun, power weapon.",
     "options": [
      {
       "id": "shield",
       "type": "count",
       "label": "Astartes shield",
       "per": 5,
       "n": 2
      },
      {
       "id": "hammer",
       "type": "count",
       "label": "Deathwatch thunder hammer",
       "per": 5,
       "n": 2
      },
      {
       "id": "stalker",
       "type": "count",
       "label": "Stalker-pattern boltgun",
       "per": 5,
       "n": 1
      },
      {
       "id": "shotgun",
       "type": "count",
       "label": "Deathwatch shotgun",
       "per": 5,
       "n": 2
      },
      {
       "id": "frag",
       "type": "count",
       "label": "Frag cannon",
       "per": 5,
       "n": 1
      },
      {
       "id": "infernus",
       "type": "count",
       "label": "Infernus heavy bolter",
       "per": 5,
       "n": 1
      },
      {
       "id": "blades",
       "type": "toggle",
       "label": "Black Shield blades"
      },
      {
       "id": "sgt_melee",
       "type": "choice",
       "label": "Watch Sergeant: melee",
       "choices": [
        {
         "id": "power",
         "label": "Power weapon",
         "pts": 0
        },
        {
         "id": "xeno",
         "label": "Xenophase blade",
         "pts": 0
        }
       ]
      },
      {
       "id": "sgt_gun",
       "type": "choice",
       "label": "Watch Sergeant: gun",
       "choices": [
        {
         "id": "bolt",
         "label": "Boltgun",
         "pts": 0
        },
        {
         "id": "combi",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "eversor_assassin",
     "name": "Eversor Assassin",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Grenades",
      "Imperium",
      "Eversor Assassin",
      "Officio Assassinorum"
     ],
     "image": "ag_eversor_assassin",
     "baseSize": "32mm",
     "profile": {
      "M": "9\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Executioner pistol",
       "range": "12\"",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-infantry 3+",
        "Pistol",
        "Precision",
        "Sustained Hits 3"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power sword and neuro gauntlet",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-infantry 3+",
        "Precision",
        "Sustained Hits 3"
       ]
      }
     ],
     "coreAbilities": [
      "Deadly Demise D3",
      "Lone Operative",
      "Scouts 9\""
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Frenzon",
       "text": "It can shoot and charge in a turn in which it advanced.",
       "kind": "datasheet"
      },
      {
       "name": "Overkill",
       "text": "Once per battle, your Movement phase before a Normal move: +6\" Move and +3 A on its melee weapons until the end of the turn.",
       "kind": "datasheet"
      },
      {
       "name": "Shadow Assignment",
       "text": "This model cannot be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Intra-neural Biotech",
       "text": "Heroic Intervention on this unit costs 1CP less and ignores other uses this phase.",
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
     "composition": "1 Eversor Assassin (Epic Hero): executioner pistol, power sword and neuro gauntlet.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "exaction_squad",
     "name": "Exaction Squad",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retinue",
      "Exaction Squad",
      "Adeptus Arbites"
     ],
     "image": "ag_exaction_squad",
     "baseSize": "28.5mm (Cyber-mastiff 25mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Arbites combat shotgun",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Arbites shotpistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Arbites grenade launcher - frag",
       "range": "24\"",
       "A": "D3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Arbites grenade launcher - krak",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": []
      },
      {
       "name": "Executioner shotgun",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Precision"
       ]
      },
      {
       "name": "Heavy stubber",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Webber",
       "range": "12\"",
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
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Excruciator maul",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": []
      },
      {
       "name": "Mechanical bite",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Imperial Law",
       "text": "Start of the battle: pick one enemy unit; this unit's attacks against it have [LETHAL HITS] and [PRECISION].",
       "kind": "datasheet"
      },
      {
       "name": "Nuncio-aquila",
       "text": "Once per battle, start of any Command phase: enemy units (not MONSTER or VEHICLE) in range of an objective within 6\" take a Battle-shock test.",
       "kind": "wargear"
      },
      {
       "name": "Arbites medi-kit",
       "text": "Start of your Command phase, if below Starting Strength: return up to D3 destroyed Exaction Vigilants.",
       "kind": "wargear"
      },
      {
       "name": "Soulguilt scanner",
       "text": "Ranged weapons of the bearer's unit have [IGNORES COVER].",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 11,
       "pts": 85
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Proctor-Exactant and 9 Exaction Vigilants (Arbites combat shotgun, Arbites shotpistol, close combat weapon) and 1 Cyber-mastiff (mechanical bite).",
     "options": [
      {
       "id": "gl",
       "type": "toggle",
       "label": "Arbites grenade launcher"
      },
      {
       "id": "exec",
       "type": "toggle",
       "label": "Executioner shotgun"
      },
      {
       "id": "stubber",
       "type": "toggle",
       "label": "Heavy stubber"
      },
      {
       "id": "webber",
       "type": "toggle",
       "label": "Webber"
      },
      {
       "id": "maul",
       "type": "toggle",
       "label": "Excruciator maul"
      },
      {
       "id": "medi",
       "type": "toggle",
       "label": "Arbites medi-kit"
      },
      {
       "id": "scanner",
       "type": "toggle",
       "label": "Soulguilt scanner"
      },
      {
       "id": "nuncio",
       "type": "toggle",
       "label": "Nuncio-aquila"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "grey_knights_terminator_squad",
     "name": "Grey Knights Terminator Squad",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Psyker",
      "Terminator",
      "Grenades",
      "Imperium",
      "Ordo Malleus",
      "Requisitioned",
      "Grey Knights Terminator Squad",
      "Psychic Weapon"
     ],
     "image": "ag_grey_knights_terminator_squad",
     "baseSize": "40mm",
     "profile": {
      "M": "5\"",
      "T": "6",
      "Sv": "2+",
      "InSv": "4+",
      "W": "3",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Incinerator",
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
      },
      {
       "name": "Psilencer",
       "range": "24\"",
       "A": "6",
       "skill": "3+",
       "S": "5",
       "AP": "0",
       "D": "1",
       "kw": [
        "Psychic",
        "Sustained Hits 1"
       ]
      },
      {
       "name": "Psycannon",
       "range": "24\"",
       "A": "3",
       "skill": "3+",
       "S": "8",
       "AP": "-1",
       "D": "2",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Nemesis force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Deep Strike"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Rites of Teleportation",
       "text": "INQUISITOR units attached at Declare Battle Formations get Deep Strike.",
       "kind": "datasheet"
      },
      {
       "name": "Hammerhand (Psychic)",
       "text": "After it makes a Charge move, its melee weapons have [LETHAL HITS] until the end of the turn.",
       "kind": "datasheet"
      },
      {
       "name": "Narthecium",
       "text": "Your Command phase: return 1 destroyed non-CHARACTER model to the bearer's unit.",
       "kind": "wargear"
      },
      {
       "name": "Ancient's Banner",
       "text": "Add 1 to the Objective Control characteristic of models in the bearer's unit.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 5,
       "pts": 190
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Terminator Justicar and 4 Grey Knights Terminators: storm bolter, Nemesis force weapon.",
     "options": [
      {
       "id": "incin",
       "type": "count",
       "label": "Incinerator",
       "group": "gk",
       "per": 5,
       "n": 1
      },
      {
       "id": "psil",
       "type": "count",
       "label": "Psilencer",
       "group": "gk",
       "per": 5,
       "n": 1
      },
      {
       "id": "psyc",
       "type": "count",
       "label": "Psycannon (+5 pts each)",
       "group": "gk",
       "per": 5,
       "n": 1,
       "pts": 5
      },
      {
       "id": "banner",
       "type": "toggle",
       "label": "Ancient's banner"
      },
      {
       "id": "nar",
       "type": "toggle",
       "label": "Narthecium"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [
      {
       "id": "gk",
       "per": 5,
       "n": 1,
       "label": "Special weapon"
      }
     ],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "imperial_navy_breachers",
     "name": "Imperial Navy Breachers",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retinue",
      "Imperial Navy Breachers",
      "Battleline",
      "Smoke",
      "Voidfarers"
     ],
     "image": "ag_imperial_navy_breachers",
     "baseSize": "25mm (melta/plasma Armsman 28mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Navis shotgun",
       "range": "12\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
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
       "name": "Bolt pistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Demolition charge",
       "range": "6\"",
       "A": "D6",
       "skill": "5+",
       "S": "9",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Assault",
        "Blast",
        "Hazardous",
        "One Shot"
       ]
      },
      {
       "name": "Navis heavy shotgun",
       "range": "12\"",
       "A": "4",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Navis las-volley",
       "range": "18\"",
       "A": "4",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Plasma gun - standard",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Plasma gun - supercharge",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Hazardous",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Meltagun",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "9",
       "AP": "-4",
       "D": "D6",
       "kw": [
        "Melta 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Chainsword",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Power weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Chainfist",
       "range": "Melee",
       "A": "1",
       "skill": "5+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-vehicle 3+"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Breaching Team",
       "text": "Attacks re-roll wound rolls of 1, or the whole wound roll against a unit in range of an objective.",
       "kind": "datasheet"
      },
      {
       "name": "Gheistskull",
       "text": "Once per battle, Grenades on this unit can target an enemy unit within 18\" that is not engaged with your army.",
       "kind": "wargear"
      },
      {
       "name": "CAT Unit",
       "text": "Once per battle, when it shoots: its ranged weapons gain [IGNORES COVER] until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Endurant shield",
       "text": "The bearer has a 4+ invulnerable save.",
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
     "composition": "1 Navis Sergeant-at-Arms (Navis shotgun), 1 Armsman with Navis las-volley, 1 with Navis heavy shotgun and endurant shield, 7 with Navis shotgun; all have a close combat weapon.",
     "options": [
      {
       "id": "sgt",
       "type": "choice",
       "label": "Sergeant-at-Arms: weapons",
       "choices": [
        {
         "id": "shot",
         "label": "Navis shotgun",
         "pts": 0
        },
        {
         "id": "chain",
         "label": "Autopistol and chainsword",
         "pts": 0
        },
        {
         "id": "power",
         "label": "Bolt pistol and power weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "volley",
       "type": "choice",
       "label": "Armsman: Navis las-volley",
       "choices": [
        {
         "id": "volley",
         "label": "Navis las-volley",
         "pts": 0
        },
        {
         "id": "melta",
         "label": "Meltagun",
         "pts": 0
        },
        {
         "id": "plasma",
         "label": "Plasma gun",
         "pts": 0
        }
       ]
      },
      {
       "id": "apw",
       "type": "toggle",
       "label": "Autopistol and power weapon (1 Armsman)"
      },
      {
       "id": "chainfist",
       "type": "toggle",
       "label": "Autopistol and chainfist (1 Armsman)"
      },
      {
       "id": "demo",
       "type": "toggle",
       "label": "Demolition charge"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "imperial_rhino",
     "name": "Imperial Rhino",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Dedicated Transport",
      "Vehicle",
      "Smoke",
      "Transport",
      "Imperium",
      "Imperial Rhino",
      "Frame"
     ],
     "image": "ag_imperial_rhino",
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
       "name": "Storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
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
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Self-repair",
       "text": "Start of your Command phase: this model regains 1 lost wound.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 65,
       "ptsLater": 75
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Imperial Rhino: storm bolter, armoured tracks.",
     "options": [
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 12 AGENTS OF THE IMPERIUM INFANTRY models (not TERMINATOR or OFFICIO ASSASSINORUM). Must start the battle with a unit embarked.",
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitor",
     "name": "Inquisitor",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Inquisitor",
      "Psychic Weapon"
     ],
     "image": "ag_inquisitor",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "5+",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Combi-weapon",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Psychic Shock Wave",
       "range": "18\"",
       "A": "2D6",
       "skill": "—",
       "S": "3",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Devastating Wounds",
        "Psychic",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Inquisitorial melee weapon",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Force weapon",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Authority of the Inquisition",
       "text": "While leading a unit, it can embark in any TRANSPORT its bodyguard can.",
       "kind": "datasheet"
      },
      {
       "name": "Power of the Rosette",
       "text": "Each time you target his unit with a Stratagem, roll D6: on a 3+ you gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "Blessed Wardings",
       "text": "While leading a unit, its models have a 6+ invulnerable save.",
       "kind": "datasheet"
      },
      {
       "name": "Psychic gifts",
       "text": "The bearer has the PSYKER keyword.",
       "kind": "wargear"
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
      "aquila_kill_team",
      "battle_sisters_squad",
      "deathwatch_kill_team",
      "exaction_squad",
      "grey_knights_terminator_squad",
      "imperial_navy_breachers",
      "inquisitorial_agents",
      "sanctifiers",
      "subductor_squad",
      "vigilant_squad"
     ],
     "composition": "1 Inquisitor: bolt pistol, Inquisitorial melee weapon, blessed wardings.",
     "options": [
      {
       "id": "pistol",
       "type": "choice",
       "label": "Pistol",
       "choices": [
        {
         "id": "bp",
         "label": "Bolt pistol",
         "pts": 0
        },
        {
         "id": "combi",
         "label": "Combi-weapon",
         "pts": 0
        }
       ]
      },
      {
       "id": "gifts",
       "type": "choice",
       "label": "Wardings",
       "choices": [
        {
         "id": "ward",
         "label": "Blessed wardings",
         "pts": 0
        },
        {
         "id": "gifts",
         "label": "Psychic gifts and Psychic Shock Wave",
         "pts": 0
        }
       ]
      },
      {
       "id": "melee",
       "type": "choice",
       "label": "Melee weapon",
       "choices": [
        {
         "id": "inq",
         "label": "Inquisitorial melee weapon",
         "pts": 0
        },
        {
         "id": "force",
         "label": "Force weapon (needs psychic gifts)",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [
      {
       "if": "melee",
       "notValue": "inq",
       "requireAllOf": [
        [
         "gifts",
         "gifts"
        ]
       ],
       "message": "The force weapon needs psychic gifts."
      }
     ],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitor_coteaz",
     "name": "Inquisitor Coteaz",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Psyker",
      "Imperium",
      "Inquisitor",
      "Coteaz",
      "Ordo Malleus"
     ],
     "image": "ag_inquisitor_coteaz",
     "baseSize": "40mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "2+",
      "InSv": "4+",
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
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Psychic Blast",
       "range": "18\"",
       "A": "D6",
       "skill": "3+",
       "S": "3",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-daemon 4+",
        "Anti-infantry 5+",
        "Devastating Wounds",
        "Psychic"
       ]
      }
     ],
     "melee": [
      {
       "name": "Nemesis daemon hammer",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "9",
       "AP": "-3",
       "D": "3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Malefic Wardings (Psychic)",
       "text": "While leading a unit, its models have a 6+ invulnerable save (4+ against Psychic Attacks and DAEMON attacks).",
       "kind": "datasheet"
      },
      {
       "name": "Spy Network",
       "text": "Each time your opponent gains CP from an ability, roll D6: on a 2+ you gain 1CP.",
       "kind": "datasheet"
      },
      {
       "name": "Authority of the Inquisition",
       "text": "While leading a unit, it can embark in any TRANSPORT its bodyguard can.",
       "kind": "datasheet"
      },
      {
       "name": "Glovodan Psyber-eagle",
       "text": "Your Command phase: one enemy unit within 18\" cannot have the Benefit of Cover until your next Command phase.",
       "kind": "wargear"
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
      "aquila_kill_team",
      "battle_sisters_squad",
      "deathwatch_kill_team",
      "exaction_squad",
      "grey_knights_terminator_squad",
      "imperial_navy_breachers",
      "inquisitorial_agents",
      "subductor_squad",
      "vigilant_squad"
     ],
     "composition": "1 Inquisitor Coteaz (Epic Hero): bolt pistol, Psychic Blast, Nemesis daemon hammer, Glovodan psyber-eagle.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitor_draxus",
     "name": "Inquisitor Draxus",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Psyker",
      "Grenades",
      "Imperium",
      "Inquisitor",
      "Draxus",
      "Ordo Xenos"
     ],
     "image": "ag_inquisitor_draxus",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Dirgesinger",
       "range": "18\"",
       "A": "4",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Anti-infantry 4+",
        "Assault",
        "Devastating Wounds"
       ]
      },
      {
       "name": "Psychic Tempest",
       "range": "18\"",
       "A": "6",
       "skill": "3+",
       "S": "6",
       "AP": "0",
       "D": "2",
       "kw": [
        "Psychic",
        "Sustained Hits 2"
       ]
      }
     ],
     "melee": [
      {
       "name": "Power fist",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
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
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Xenos Hunter",
       "text": "While leading a unit, attacks against a unit without IMPERIUM or CHAOS get +1 to hit.",
       "kind": "datasheet"
      },
      {
       "name": "Psychic Veil (Psychic)",
       "text": "Your Command phase: roll D6. On a 1 its unit suffers D3 mortal wounds; on a 2+ it can only be shot from within 18\" until your next Command phase.",
       "kind": "datasheet"
      },
      {
       "name": "Authority of the Inquisition",
       "text": "While leading a unit, it can embark in any TRANSPORT its bodyguard can.",
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
      "aquila_kill_team",
      "battle_sisters_squad",
      "deathwatch_kill_team",
      "exaction_squad",
      "imperial_navy_breachers",
      "inquisitorial_agents",
      "subductor_squad",
      "vigilant_squad"
     ],
     "composition": "1 Inquisitor Draxus (Epic Hero): Dirgesinger, Psychic Tempest, power fist.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitor_greyfax",
     "name": "Inquisitor Greyfax",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Psyker",
      "Grenades",
      "Imperium",
      "Inquisitor",
      "Greyfax",
      "Ordo Hereticus"
     ],
     "image": "ag_inquisitor_greyfax",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "5+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Castigation",
       "range": "18\"",
       "A": "1",
       "skill": "3+",
       "S": "8",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Anti-character 4+",
        "Devastating Wounds",
        "Precision",
        "Psychic"
       ]
      },
      {
       "name": "Condemnor stake",
       "range": "24\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Anti-psyker 2+",
        "Devastating Wounds",
        "Precision",
        "Rapid Fire 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Master-crafted power sword",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Psyoculum",
       "text": "While leading a unit, its ranged weapons have [ANTI-PSYKER 4+].",
       "kind": "datasheet"
      },
      {
       "name": "No Mercy",
       "text": "While leading a unit, attacks against a Below Half-strength unit get +1 to hit.",
       "kind": "datasheet"
      },
      {
       "name": "Authority of the Inquisition",
       "text": "While leading a unit, it can embark in any TRANSPORT its bodyguard can.",
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
      "aquila_kill_team",
      "battle_sisters_squad",
      "deathwatch_kill_team",
      "exaction_squad",
      "imperial_navy_breachers",
      "inquisitorial_agents",
      "sanctifiers",
      "subductor_squad",
      "vigilant_squad"
     ],
     "composition": "1 Inquisitor Greyfax (Epic Hero): Castigation, condemnor stake, master-crafted power sword.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitor_kroyle",
     "name": "Inquisitor Kroyle",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Mounted",
      "Character",
      "Epic Hero",
      "Imperium",
      "Grenades",
      "Ordo Xenos",
      "Inquisitor",
      "Kroyle"
     ],
     "image": "ag_inquisitor_kroyle",
     "baseSize": "60mm",
     "profile": {
      "M": "12\"",
      "T": "4",
      "Sv": "3+",
      "InSv": "4+",
      "W": "6",
      "OC": "2",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Jindarii tox-cycler",
       "range": "36\"",
       "A": "1",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Anti-monster 2+",
        "Heavy",
        "Precision"
       ]
      },
      {
       "name": "Stubcarbine",
       "range": "12\"",
       "A": "2",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Butcher blade",
       "range": "Melee",
       "A": "5",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": []
      },
      {
       "name": "Garralisk's claws and teeth",
       "range": "Melee",
       "A": "4",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Extra Attacks"
       ]
      }
     ],
     "coreAbilities": [
      "Lone Operative",
      "Scouts 6\""
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "On My Signal, Fire!",
       "text": "After it shoots: one enemy unit it hit; until the end of the phase AGENTS OF THE IMPERIUM and IMPERIUM BATTLELINE INFANTRY attacks against it re-roll the hit roll.",
       "kind": "datasheet"
      },
      {
       "name": "Tox‑cycler",
       "text": "After a hit with the Jindarii tox-cycler: +2 S and +2 D on it for the rest of the battle (max D6).",
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
     "leaderOf": [],
     "composition": "1 Inquisitor Kroyle (Epic Hero): Jindarii tox-cycler, stubcarbine, butcher blade, Garralisk's claws and teeth.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitorial_agents",
     "name": "Inquisitorial Agents",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retinue",
      "Inquisitorial Agents",
      "Psychic Weapon"
     ],
     "image": "ag_inquisitorial_agents",
     "baseSize": "25mm (Gun Servitors 32mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "5+",
      "InSv": "—",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Agent firearm",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Plasma pistol - standard",
       "range": "12\"",
       "A": "1",
       "skill": "3+",
       "S": "7",
       "AP": "-1",
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
       "AP": "-2",
       "D": "2",
       "kw": [
        "Hazardous",
        "Pistol"
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
        "Heavy",
        "Sustained Hits 1"
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
        "Heavy",
        "Melta 2"
       ]
      },
      {
       "name": "Plasma cannon - standard",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "7",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Blast",
        "Heavy"
       ]
      },
      {
       "name": "Plasma cannon - supercharge",
       "range": "36\"",
       "A": "D3",
       "skill": "4+",
       "S": "8",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Blast",
        "Hazardous",
        "Heavy"
       ]
      }
     ],
     "melee": [
      {
       "name": "Agent melee weapon",
       "range": "Melee",
       "A": "3",
       "skill": "3+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Eviscerator",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "6",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Devastating Wounds"
       ]
      },
      {
       "name": "Mystic stave",
       "range": "Melee",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Anti-infantry 4+",
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Loyal Henchmen",
       "text": "While an INQUISITOR leads this unit, attacks against it get -1 to wound.",
       "kind": "datasheet"
      },
      {
       "name": "Inquisitorial Henchmen",
       "text": "In another faction's army, each INQUISITOR unit lets you take one INQUISITORIAL AGENTS unit that does not count as RETINUE.",
       "kind": "datasheet"
      },
      {
       "name": "Tome-skull",
       "text": "Once per battle per Tome-skull, start of any phase: one battle-shocked friendly AGENTS OF THE IMPERIUM unit within 6\" recovers, or one enemy unit within 6\" takes a Battle-shock test.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 6,
       "pts": 60
      },
      {
       "models": 12,
       "pts": 120
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "5-10 Inquisitorial Agents (agent firearm, agent melee weapon) and 1-2 Gun Servitors (heavy bolter, agent melee weapon); 2 Servitors only with 10 Agents.",
     "options": [
      {
       "id": "skull",
       "type": "count",
       "label": "Tome-skull",
       "per": 5,
       "n": 1
      },
      {
       "id": "plasma",
       "type": "count",
       "label": "Plasma pistol",
       "group": "ia",
       "per": 5,
       "n": 1
      },
      {
       "id": "evisc",
       "type": "count",
       "label": "Eviscerator",
       "group": "ia",
       "per": 5,
       "n": 1
      },
      {
       "id": "stave",
       "type": "count",
       "label": "Mystic stave",
       "group": "ia",
       "per": 5,
       "n": 1
      },
      {
       "id": "servitor",
       "type": "choice",
       "label": "Gun Servitor weapon",
       "choices": [
        {
         "id": "hb",
         "label": "Heavy bolter",
         "pts": 0
        },
        {
         "id": "mm",
         "label": "Multi-melta",
         "pts": 0
        },
        {
         "id": "pc",
         "label": "Plasma cannon",
         "pts": 0
        }
       ]
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [
      {
       "id": "ia",
       "per": 5,
       "n": 2,
       "label": "Agent wargear"
      }
     ],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "navigator",
     "name": "Navigator",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Psyker",
      "Imperium",
      "Voidfarers",
      "Navigator",
      "Psychic Weapon"
     ],
     "image": "ag_navigator",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "5+",
      "InSv": "4+",
      "W": "3",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Laspistol",
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
       "name": "Force-orb cane",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "6",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Psychic"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Third Eye (Psychic)",
       "text": "Start of your Shooting phase: one visible enemy unit within 12\" takes a Battle-shock test (-2 if INFANTRY); if failed it suffers 3 mortal wounds.",
       "kind": "datasheet"
      },
      {
       "name": "Gaze into the Empyrean (Psychic)",
       "text": "Enemy reinforcements cannot be set up within 12\" of this model.",
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
      "imperial_navy_breachers",
      "voidsmen_at_arms"
     ],
     "composition": "1 Navigator: laspistol, force-orb cane.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "rogue_trader_entourage",
     "name": "Rogue Trader Entourage",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Grenades",
      "Imperium",
      "Rogue Trader Entourage",
      "Voidfarers"
     ],
     "image": "ag_rogue_trader_entourage",
     "baseSize": "25mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "4+",
      "W": "2",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Household pistol",
       "range": "12\"",
       "A": "2",
       "skill": "3+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": [
        "Pistol",
        "Devastating Wounds"
       ]
      },
      {
       "name": "Dartmask",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "2",
       "AP": "-1",
       "D": "D3",
       "kw": [
        "Anti-infantry 2+",
        "Pistol",
        "Precision"
       ]
      },
      {
       "name": "Voltaic pistol",
       "range": "12\"",
       "A": "3",
       "skill": "3+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Pistol",
        "Sustained Hits 2"
       ]
      },
      {
       "name": "Laspistol",
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
       "name": "Monomolecular cane-rapier",
       "range": "Melee",
       "A": "4",
       "skill": "3+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": []
      },
      {
       "name": "Death Cult power blade",
       "range": "Melee",
       "A": "5",
       "skill": "2+",
       "S": "4",
       "AP": "-2",
       "D": "1",
       "kw": [
        "Precision"
       ]
      },
      {
       "name": "Close combat weapon",
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
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Backroom Deals",
       "text": "At Declare Battle Formations pick one unit with this ability: while it leads a unit, those models have Infiltrators.",
       "kind": "datasheet"
      },
      {
       "name": "Warrant of Trade",
       "text": "After deployment, redeploy up to D3 IMPERIUM BATTLELINE units (they can go into Strategic Reserves regardless of the limit).",
       "kind": "datasheet"
      },
      {
       "name": "Healing Serum",
       "text": "Start of your Command phase, if the unit is below Starting Strength: return up to D3 destroyed non-CHARACTER models.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 4,
       "pts": 105
      }
     ],
     "stepFrom": null,
     "leaderOf": [
      "imperial_navy_breachers",
      "voidsmen_at_arms"
     ],
     "composition": "1 Rogue Trader (household pistol, monomolecular cane-rapier), 1 Death Cult Assassin (dartmask, Death Cult power blade), 1 Lectro-maester (voltaic pistol, close combat weapon), 1 Rejuvenant Adept (laspistol, close combat weapon, healing serum).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "leadModel": {
      "name": "Rogue Trader",
      "W": "4",
      "Ld": "6+"
     },
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "subductor_squad",
     "name": "Subductor Squad",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retinue",
      "Subductor Squad",
      "Adeptus Arbites"
     ],
     "image": "ag_subductor_squad",
     "baseSize": "28.5mm (Cyber-mastiff 25mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "3+",
      "InSv": "4+",
      "W": "1",
      "OC": "1",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Arbites shotpistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      }
     ],
     "melee": [
      {
       "name": "Shock maul",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": []
      },
      {
       "name": "Mechanical bite",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Dedication to Duty",
       "text": "A model killed in melee before it fought: on a 4+ it fights after the attacker, then is removed.",
       "kind": "datasheet"
      },
      {
       "name": "Nuncio-aquila",
       "text": "Once per battle, start of any Command phase: enemy units (not MONSTER or VEHICLE) in range of an objective within 6\" take a Battle-shock test.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 11,
       "pts": 100
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Proctor-Subductor and 9 Subductors (Arbites shotpistol, shock maul) and 1 Cyber-mastiff (mechanical bite).",
     "options": [
      {
       "id": "nuncio",
       "type": "toggle",
       "label": "Nuncio-aquila"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "vigilant_squad",
     "name": "Vigilant Squad",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Battleline",
      "Grenades",
      "Imperium",
      "Retinue",
      "Vigilant Squad",
      "Adeptus Arbites"
     ],
     "image": "ag_vigilant_squad",
     "baseSize": "28.5mm (Cyber-mastiff 25mm)",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Arbites combat shotgun",
       "range": "18\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Arbites shotpistol",
       "range": "12\"",
       "A": "1",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Pistol"
       ]
      },
      {
       "name": "Arbites grenade launcher - frag",
       "range": "24\"",
       "A": "D3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Blast"
       ]
      },
      {
       "name": "Arbites grenade launcher - krak",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "9",
       "AP": "-2",
       "D": "D3",
       "kw": []
      },
      {
       "name": "Executioner shotgun",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "5",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Ignores Cover",
        "Precision"
       ]
      },
      {
       "name": "Heavy stubber",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Webber",
       "range": "12\"",
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
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "2",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Mechanical bite",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Merciless Judgement",
       "text": "Ranged attacks against a Below Half-strength unit get +1 to wound.",
       "kind": "datasheet"
      },
      {
       "name": "Nuncio-aquila",
       "text": "Once per battle, start of any Command phase: enemy units (not MONSTER or VEHICLE) in range of an objective within 6\" take a Battle-shock test.",
       "kind": "wargear"
      }
     ],
     "sizes": [
      {
       "models": 11,
       "pts": 85
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Proctor-Vigilant and 9 Vigilants (Arbites combat shotgun, Arbites shotpistol, close combat weapon) and 1 Cyber-mastiff (mechanical bite).",
     "options": [
      {
       "id": "gl",
       "type": "toggle",
       "label": "Arbites grenade launcher"
      },
      {
       "id": "exec",
       "type": "toggle",
       "label": "Executioner shotgun"
      },
      {
       "id": "stubber",
       "type": "toggle",
       "label": "Heavy stubber"
      },
      {
       "id": "webber",
       "type": "toggle",
       "label": "Webber"
      },
      {
       "id": "nuncio",
       "type": "toggle",
       "label": "Nuncio-aquila"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "vindicare_assassin",
     "name": "Vindicare Assassin",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Character",
      "Epic Hero",
      "Smoke",
      "Imperium",
      "Vindicare Assassin",
      "Officio Assassinorum"
     ],
     "image": "ag_vindicare_assassin",
     "baseSize": "32mm",
     "profile": {
      "M": "7\"",
      "T": "4",
      "Sv": "6+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Exitus pistol",
       "range": "12\"",
       "A": "3",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "3",
       "kw": [
        "Devastating Wounds",
        "Ignores Cover",
        "Pistol",
        "Precision"
       ]
      },
      {
       "name": "Exitus rifle",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "8",
       "AP": "-3",
       "D": "D3+3",
       "kw": [
        "Devastating Wounds",
        "Heavy",
        "Ignores Cover",
        "Precision"
       ]
      }
     ],
     "melee": [
      {
       "name": "Vindicare combat knife",
       "range": "Melee",
       "A": "4",
       "skill": "2+",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Infiltrators",
      "Lone Operative",
      "Stealth"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Shieldbreaker",
       "text": "Once per battle, with the exitus rifle: +1 to wound and every successful wound roll is a Critical Wound until the end of the phase.",
       "kind": "datasheet"
      },
      {
       "name": "Dead-shot",
       "text": "While it shoots, enemy units lose Lone Operative and hidden enemy units have +15\" detection range.",
       "kind": "datasheet"
      },
      {
       "name": "Shadow Assignment",
       "text": "This model cannot be your WARLORD.",
       "kind": "datasheet"
      },
      {
       "name": "Micromelta Rounds",
       "text": "Its exitus rifle has [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+].",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 125
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Vindicare Assassin (Epic Hero): exitus pistol, exitus rifle, Vindicare combat knife.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "voidsmen_at_arms",
     "name": "Voidsmen-at-Arms",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Infantry",
      "Grenades",
      "Imperium",
      "Retinue",
      "Voidsmen-at-Arms",
      "Voidfarers"
     ],
     "image": "ag_voidsmen_at_arms",
     "baseSize": "25mm",
     "profile": {
      "M": "6\"",
      "T": "3",
      "Sv": "4+",
      "InSv": "—",
      "W": "1",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Artificer shotgun",
       "range": "12\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "2",
       "kw": [
        "Assault"
       ]
      },
      {
       "name": "Laspistol",
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
       "name": "Lasgun",
       "range": "24\"",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 1"
       ]
      },
      {
       "name": "Voidsman rotor cannon",
       "range": "24\"",
       "A": "6",
       "skill": "5+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": [
        "Heavy",
        "Sustained Hits 1"
       ]
      }
     ],
     "melee": [
      {
       "name": "Close combat weapon",
       "range": "Melee",
       "A": "1",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Vicious bite",
       "range": "Melee",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": []
      }
     ],
     "coreAbilities": [],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Masters of Close Confines",
       "text": "Ranged attacks against the closest eligible target have [LETHAL HITS].",
       "kind": "datasheet"
      },
      {
       "name": "Navy Bodyguards",
       "text": "In another faction's army, each VOIDFARERS CHARACTER lets you take one VOIDSMEN-AT-ARMS unit that does not count as RETINUE.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 6,
       "pts": 70
      }
     ],
     "stepFrom": null,
     "leaderOf": [],
     "composition": "1 Voidmaster (artificer shotgun, laspistol, close combat weapon), 4 Voidsmen (lasgun or Voidsman rotor cannon, laspistol, close combat weapon) and 1 Canid (vicious bite).",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "watch_captain_artemis",
     "name": "Watch Captain Artemis",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Epic Hero",
      "Character",
      "Infantry",
      "Grenades",
      "Imperium",
      "Deathwatch",
      "Watch Captain Artemis",
      "Ordo Xenos"
     ],
     "image": "ag_watch_captain_artemis",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "3+",
      "InSv": "4+",
      "W": "4",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Hellfire Extremis",
       "range": "12\"",
       "A": "D6",
       "skill": "—",
       "S": "4",
       "AP": "-1",
       "D": "1",
       "kw": [
        "Anti-infantry 4+",
        "Devastating Wounds",
        "Ignores Cover",
        "Torrent"
       ]
      }
     ],
     "melee": [
      {
       "name": "Master-crafted power weapon",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "5",
       "AP": "-2",
       "D": "2",
       "kw": []
      }
     ],
     "coreAbilities": [
      "Feel No Pain 6+",
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Tactical Instinct",
       "text": "While leading a unit, weapons in that unit have [LETHAL HITS].",
       "kind": "datasheet"
      },
      {
       "name": "Unstoppable Champion",
       "text": "The first time he dies, roll D6 at the end of the phase: on a 2+ he returns with 1 wound.",
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
      "aquila_kill_team",
      "deathwatch_kill_team"
     ],
     "composition": "1 Watch Captain Artemis (Epic Hero): Hellfire Extremis, master-crafted power weapon.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "watch_master",
     "name": "Watch Master",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Character",
      "Infantry",
      "Captain",
      "Grenades",
      "Imperium",
      "Watch Master",
      "Deathwatch",
      "Ordo Xenos"
     ],
     "image": "ag_watch_master",
     "baseSize": "32mm",
     "profile": {
      "M": "6\"",
      "T": "4",
      "Sv": "2+",
      "InSv": "4+",
      "W": "5",
      "OC": "1",
      "Ld": "6+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Vigil spear",
       "range": "24\"",
       "A": "2",
       "skill": "2+",
       "S": "4",
       "AP": "-1",
       "D": "2",
       "kw": []
      }
     ],
     "melee": [
      {
       "name": "Vigil spear",
       "range": "Melee",
       "A": "6",
       "skill": "2+",
       "S": "6",
       "AP": "-2",
       "D": "D3",
       "kw": [
        "Lance"
       ]
      }
     ],
     "coreAbilities": [
      "Leader"
     ],
     "factionAbilities": [
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Strategic Knowledge",
       "text": "While leading a unit, it can shoot and charge in a turn in which it advanced or fell back.",
       "kind": "datasheet"
      },
      {
       "name": "Rites of Battle",
       "text": "Once per battle round, one unit with this ability can use it when its unit is targeted with a Stratagem: that use costs 1CP less.",
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
     "leaderOf": [
      "aquila_kill_team",
      "deathwatch_kill_team"
     ],
     "composition": "1 Watch Master: vigil spear.",
     "options": [],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    },
    {
     "id": "inquisitorial_chimera",
     "name": "Inquisitorial Chimera",
     "role": "allies",
     "faction": "Agents of the Imperium",
     "keywords": [
      "Dedicated Transport",
      "Vehicle",
      "Smoke",
      "Transport",
      "Imperium",
      "Inquisitorial Chimera",
      "Frame"
     ],
     "image": "ag_inquisitorial_chimera",
     "baseSize": "Use model",
     "profile": {
      "M": "10\"",
      "T": "9",
      "Sv": "3+",
      "InSv": "—",
      "W": "11",
      "OC": "2",
      "Ld": "7+"
     },
     "damaged": null,
     "ranged": [
      {
       "name": "Lasgun array",
       "range": "24\"",
       "A": "6",
       "skill": "4+",
       "S": "3",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 6"
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
      },
      {
       "name": "Storm bolter",
       "range": "24\"",
       "A": "2",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 2"
       ]
      },
      {
       "name": "Heavy stubber",
       "range": "36\"",
       "A": "3",
       "skill": "4+",
       "S": "4",
       "AP": "0",
       "D": "1",
       "kw": [
        "Rapid Fire 3"
       ]
      },
      {
       "name": "Multi-laser",
       "range": "36\"",
       "A": "4",
       "skill": "4+",
       "S": "6",
       "AP": "0",
       "D": "1",
       "kw": []
      },
      {
       "name": "Hunter-killer missile",
       "range": "48\"",
       "A": "1",
       "skill": "2+",
       "S": "14",
       "AP": "-3",
       "D": "D6",
       "kw": [
        "One Shot"
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
      "Assigned Agents"
     ],
     "abilities": [
      {
       "name": "Rapid Deployment",
       "text": "Units can disembark after it advanced; they count as having made a Normal move and cannot charge that turn.",
       "kind": "datasheet"
      }
     ],
     "sizes": [
      {
       "models": 1,
       "pts": 60,
       "ptsLater": 70
      }
     ],
     "stepFrom": 4,
     "leaderOf": [],
     "composition": "1 Inquisitorial Chimera: multi-laser, heavy bolter, lasgun array, armoured tracks.",
     "options": [
      {
       "id": "hb",
       "type": "choice",
       "label": "Hull gun",
       "choices": [
        {
         "id": "hb",
         "label": "Heavy bolter",
         "pts": 0
        },
        {
         "id": "hf",
         "label": "Heavy flamer",
         "pts": 0
        }
       ]
      },
      {
       "id": "ml",
       "type": "choice",
       "label": "Turret",
       "choices": [
        {
         "id": "ml",
         "label": "Multi-laser",
         "pts": 0
        },
        {
         "id": "hb",
         "label": "Heavy bolter",
         "pts": 0
        },
        {
         "id": "hf",
         "label": "Heavy flamer",
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
         "id": "stubber",
         "label": "Heavy stubber",
         "pts": 0
        },
        {
         "id": "storm",
         "label": "Storm bolter",
         "pts": 0
        }
       ]
      },
      {
       "id": "hk",
       "type": "toggle",
       "label": "Hunter-killer missile"
      }
     ],
     "optionRules": [],
     "slots": [],
     "optionGroups": [],
     "transport": "Carries 13 INQUISITOR INFANTRY and INQUISITORIAL AGENTS models (not TERMINATOR). Must start the battle with a unit embarked.",
     "cannotBeWarlord": "Agents of the Imperium cannot be your Warlord in an Adepta Sororitas army."
    }
   ],
   "terms": [
    "Acts? of Faith",
    "Miracle dice",
    "Vows? of Atonement"
   ]
  }
 }
};
if (typeof module !== "undefined") module.exports = DATA;
