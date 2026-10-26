# Rules text: sources and which one wins

Applies to every army in the app: Chaos Space Marines, World Eaters, Death
Guard, Thousand Sons, Tyranids, Adepta Sororitas (with Imperial Agents),
Adeptus Mechanicus, Emperor's Children (with Legions of Excess), Drukhari (with Harlequins and Anhrathe allies), Necrons, T'au Empire, Imperial Knights (with Adeptus Mechanicus allies), Space Marines (codex Chapters, with Freeblades allies), Dark Angels (on the Space Marines pool by reference, Freeblades inherited), Blood Angels and Space Wolves (the same way), and
any army added later.

Current to: the 30 Sep 2026 update (MFM v1.5; Faction Packs World Eaters,
Death Guard, Thousand Sons v1.3; Tyranids and Adepta Sororitas v1.2 with no
rules change; Imperial Agents profiles only). Last full rebuild 2026-10-08. Emperor's Children (added 2026-10-14) is
current to MFM v1.6 and Faction Pack v1.2. Drukhari (added 2026-10-17) is
current to MFM v1.6 and Faction Pack v1.2. Necrons (added 2026-10-17) is current to MFM v1.6;
its Faction Pack v1.2 PDF was not read (rules text follows Wahapedia 1.2 and BSData). T'au Empire (added 2026-10-18) is current to MFM v1.6 and
Faction Pack v1.2 (= Wahapedia version). Imperial Knights (added 2026-10-19) is current to MFM v1.6; where BSData and Wahapedia differ BSData wins (owner's decision).
Space Marines (added 2026-10-22) is current to Codex: Space Marines 11e (October 2026; no Faction Pack), BSData cdc2667
(21.10.2026) and Wahapedia 19.10.2026, points from BSData after the MFM of 14.10.2026. Wahapedia already carries the codex,
so SM is rebuilt with an empty delta: `IMPORT=cdc2667..cdc2667 tools/rules/rebuild.sh spaceMarines`.
Dark Angels (added 2026-10-22) has no 11th-edition Faction Pack (the `eng_08-10` v1.0 PDF is 10th edition): texts follow Wahapedia
19.10.2026 (source "Dark Angels — App" 03.10.2026), structure BSData db61485 (DA catalogue) and 7232fde (DA detachments in the SM
catalogue), points MFM v1.6 = BSData = Wahapedia. Rebuilt with an empty delta: `IMPORT=7232fde..7232fde tools/rules/rebuild.sh darkAngels`.
Space Wolves (added 2026-10-26) likewise has no 11th-edition Faction Pack: texts Wahapedia 11e (SM rows, App 2.8.1), structure and points BSData
`IMPORT=b4dc3f4..HEAD tools/rules/rebuild.sh spaceWolves`; the Master of Wolves rule text comes from BSData (Wahapedia row empty), typo "within 9”"
fixed by an override. Decisions: `claude/army-builder/data/spaceWolves_decisions.md`.

Blood Angels (added 2026-10-25) has no 11th-edition Faction Pack either (the June 2026 pack was superseded in the app by Codex: Space
Marines; the only PDF found is the French v1.1, 10th edition): texts follow Wahapedia 19.10.2026 (source "Blood Angels — App" 03.10.2026),
structure BSData b4dc3f4 (BA catalogue + BA detachments in the SM catalogue), points BSData = Wahapedia App 2.8.1 (the MFM site cannot be
reached from here). Rebuilt with an empty delta: `IMPORT=b4dc3f4..b4dc3f4 tools/rules/rebuild.sh bloodAngels`.

## Order of precedence

| # | Source | Reach | Use it for | Known faults |
|---|---|---|---|---|
| 1 | **Official Warhammer 40,000 app** (screenshots from the owner) | owner only | final wording; recorded in `text/official.json` | none known — it is the reference |
| 2 | Official Faction Pack PDFs (assets.warhammer-community.com) | WebFetch, quotes capped at 125 chars | what an update changed; short exact phrases | cannot be read in full from here |
| 3 | BSData `wh40k-11e` | `git clone`, full history | what the newest update changed (diff across the import commit); errata; conditions on abilities (Leader-only, enhancement-only); DP, Force Dispositions | drops restriction lines and Designer's Notes; some 10th-edition wording; typos; a few stale entries (Revolting Regeneration) |
| 4 | Wahapedia CSV export, mirror `N041M/grimstat-wahapedia` (`wh40k-11e/`, `wh40k-10e/`) | `git clone` | base text: verbatim, restriction lines ("X model only."), full stratagems | **one update behind** the Faction Packs; **rewrites some rules in its own words** (below); errata in a separate block that the export misses; tables drawn as images |
| 5 | Reviews of an update (Spikey Bits, Tabletop Battles, La Voz de Horus …) | WebFetch | confirming a change no text source has (stratagem CP, conditions) — two that agree | paraphrase, never wording |

Rules for using them:

- **Never replace text wholesale from one source.** Every rebuild goes through
  `tools/rules/` which compares all of them and stops where they disagree in
  a way it cannot decide.
- **The app beats everything.** When the owner sends a screenshot, the text
  goes into `text/official.json` exactly as shown; `validate-data` then fails
  if any later pass changes it (`E-OFFICIAL`).
- **Wahapedia's rewordings are not rules text.** Its 11th-edition export
  replaces some codex wording with cross-references to the core rules:
  "makes an assault disembark move (Core Rules, 18.06)", "shock disembark
  move (Core Rules, 18.07)", "Explosives Stratagem" for "Grenade Stratagem".
  The official app prints the codex wording (confirmed for Carry Forth the
  Faithful, 2026-10-08). `validate-data` fails on these (`E-REWORDED`) and
  `best.py` takes the 10e export's wording instead (`CODEX_WORDING`).
  The universal 11th-edition core rule may still make those disembarks work
  as assault/shock moves in play; the app text is what we show.
- **CP, points and keywords are mechanics.** A source disagreeing on them is
  reported by the pipeline, never applied. Change them by hand only after two
  sources agree, and record the change in `docs/mechanics-accepted.json`.
  (On 2026-10-08 Wahapedia's 2CP for Infernal Fusillade was nearly shipped;
  the v1.3 pack made it 1CP.)
- **Nothing granted by a Leader, an enhancement or a detachment goes on a
  datasheet.** Check with `tools/rules/bsq.py`: BSData shows granted
  abilities as hidden profiles with a condition.

## What the 30 Sep 2026 update changed in text

Found by `bsdelta.py` across BSData's import (`374f505..HEAD`) plus reviews:

- World Eaters: Relentless Rage ("Friendly WORLD EATERS units' melee attacks
  have +1 A."); Khorne Berzerkers gain Murderous Charge; Angron's Driven by
  Ultimate Rage (re-roll hit and wound rolls of 1).
- Thousand Sons: Infernal Fusillade 1CP, no longer sets S5; Unwavering
  Phalanx only against attacks with S greater than T; Exalted Sorcerer on
  Disc has Illusions of Tzeentch instead of Arcane Shield.
- Death Guard, Tyranids, Adepta Sororitas, Imperial Agents: no text change
  (profiles, DP and Force Dispositions only, already in data.js).

## Open — check against the app when possible

- Unwavering Phalanx (Thousand Sons): wording reconstructed from reviews.
- Revolting Regeneration (Death Guard enhancement): Wahapedia "Feel No Pain
  5+", BSData "regains up to D3 lost wounds" (BSData did not change it in the
  import, so Wahapedia is kept).
- Storm of Retribution (Retributor Squad) "that model can re-roll" vs "re-roll";
  Death Approaches (Deathshroud) 8" vs 9"; Unleash Wrath (World Eaters
  Defiler) — Wahapedia 11e and BSData differ in wording.
- Psychostatic Disruption (Tyranids): BSData only; "(Aura)" in the name?
- Core stratagems (`gameRules.coreStratagems`) are still paraphrases.
- Adeptus Mechanicus (added 2026-10-11, MFM v1.5; Faction Pack v1.2, legal from
  26 Aug 2026, no v1.3 found): 34 datasheets, 10 detachments, 51 stratagems.
  Texts of TL-4Ø9 and Threat-cogitation Targeters come from the Faction Pack
  PDF only (Wahapedia has none) — check against the PDF/app. War-form Mantles
  (Lords of the Forge) wording differs between Wahapedia and BSData; RECON
  AUGURY granted by Cohort Acquisitus is not on any datasheet (keyword grant).
  Pteraxii and Hastarii step counts (1st-2nd vs 3rd+ unit): MFM v1.5 kept.
  No product photo on warhammer.com for Cybernetica Datasmith and Servitor
  Battleclade (logo placeholder); Hastarii Exterminators/Fusiliers and the two
  Sydonian Dragoons share one box each (two different box images used).
- Myphitic Blight-haulers: no 11th-edition datasheet text found.
- Chaos Space Marines (added 2026-10-08, MFM v1.5): Faction Pack exact version
  not confirmed in a text source (`factions.json` carries packVersion 1.3 /
  wahapediaVersion 1.2 like the other Chaos armies — confirm against the pack).
  Raid Leader (Huron's Marauders): Wahapedia 11e rewords with "(Core Rules,
  18.06)"; kept the 11e assault-disembark wording without the citation
  (`overrides.json`). Creations of Bile augmentation table: Wahapedia draws the
  D6 column as images, transcribed 1–6 by hand. Cabal of Chaos / Devotees of
  Destruction / Murdertalon Raiders carry only 3 stratagems in the Wahapedia
  export (likely a partial export — confirm the full set against the app).
- Chaos Space Marines allies (Cult of the Dark Gods, added 2026-10-11; rule text
  from Wahapedia Abilities.csv 000008360, confirmed by BSData): Noise Marines
  have W3 and 160/175 pts in BSData and MFM v1.5 but W2 and 145/160 in
  Wahapedia (pack 1.2) — the app uses W3; confirm against the app. The four
  units carry no faction ability of their home army (Wahapedia still lists
  them on its CSM copies) — confirm. BSData lifts the points limit in Crusade
  Force; the app has no such battle size. Details: `audit/chaos_space_marines_*.md`.
- Adeptus Mechanicus (added 2026-10-11, MFM v1.5, Faction Pack v1.2 = Wahapedia
  version; no allies, no Legends): TL-4Ø9 (Lords of the Forge) and Threat-cogitation
  Targeters (Eradication Cohort) are `replace` overrides from the pack because the
  Wahapedia rows are empty/truncated; the pack gives no points for TL-4Ø9 (MFM 30
  used). War-form Mantles text is garbled in Wahapedia ("4+ InSv", "On 2+") and
  identical in the pack — kept, check against the app. Explorator Dispensation and
  Voltagheist Reliquary texts lack a final period (verbatim). Copy-tier counting for
  Pteraxii/Hastarii is per datasheet. RECON AUGURY is granted by Cohort Acquisitus,
  not on datasheets. Theme and emblem are provisional (design pass pending).
- Emperor's Children (added 2026-10-14, MFM v1.6, Faction Pack v1.2 = Wahapedia
  version; allies: Legions of Excess via Carnival of Excess only, 500/1000/1500 pts,
  never Warlord): 23 datasheets (18 EC + 5 Legions of Excess), 10 detachments, 34
  enhancements, 51 stratagems. Excluded, not in MFM v1.6: the Sublime Strike
  detachment and six [Crucible] datasheets (Champion of Excess, Daemonic
  Charioteer, Daemonic Herald, Excruciator, Flawless Champion, Immortal Champion).
  Lord Exultant and Sorcerer have T5 (BSData; Wahapedia T4). Lord Exultant
  pistols BS 3+ and Power fist A3 3+ come from BSData (Wahapedia BS 2+, A5 2+) —
  the fist looks odd, confirm against the app. Precision on Tormentors' pistols
  and Infractors' power sword / Rapture lash is Wahapedia only (BSData has none) —
  not applied. Fulgrim's Serpentine (BSData only; MFM keyword update) is omitted.
  Court of the Phoenician has two detachment rules in Wahapedia; the app shows
  them as one text (`overrides.json`). Thrill Seekers / Daemonic Empowerment:
  typography only (apostrophe, keyword case). Noise Marines here and in the CSM
  Cult of the Dark Gods list may differ. Shalaxi and Keeper "Summoned" not applied.
  Photos: every unit has one; Sorcerer, Terminators, Rhino, Land Raider, Defiler,
  Spawn, Heldrake, Maulerfiend and the Daemon Princes use the Chaos kit photos;
  Infractors use a second image from the shared Tormentors/Infractors box. The
  Frenzied Host HOST tag is an interpretation — confirm.
- Drukhari (added 2026-10-17, MFM v1.6; Faction Pack v1.2): 23 datasheets plus 14 allied
  (Harlequins, Anhrathe). Where Wahapedia and BSData differ, BSData/MFM were taken
  (owner decision). Check against the app: Ravager default price (3 Dark Lances
  at +5 each = 125 pts), stratagem count of the 1-DP detachments (3 each, BSData
  has none), Incubi Klaivex wounds, conditional invulnerable saves (Wyches 6+*),
  Power from Pain / Pounce on the Prey / Venom Rapid Deployment overrides.
  Pounce on the Prey kept at the owner's request. No product photo on
  warhammer.com for Hand of the Archon, Scourges with Heavy Weapons (shares the
  Scourges box), Corsair Voidscarred and Troupe Master: faction logo placeholder.
- Necrons (added 2026-10-17, MFM v1.6): 52 datasheets (no Legends), 12 detachments, 63 stratagems,
  42 enhancements; Pantheon of Woe's Necrodermal Bindings are applied automatically with their
  surcharge (owner decision). Check against the app: Canoptek Reanimator Leadership (Wahapedia 7+,
  BSData 8+, not applied), TRIARCH keyword on Triarch Praetorians (Wahapedia only, not applied),
  Seraptek FRAME (BSData only, not applied), Geomancer and Trazyn base sizes (BSData differs),
  wording of Cursed Circlet, Targeting Relay, Plasmacyte and Timesplinter Mantle (Wahapedia kept),
  Prelocational Optimiser name (MFM) with Wahapedia text, Murdermind attach targets (from the MFM
  SUPPORT line), and the unit type of the 1-DP detachment stratagems (Wahapedia gives none).
  No product photo on warhammer.com for Transcendent C'tan, Plasmancer, Skorpekh Lord,
  Cryptothralls, Canoptek Reanimator, Canoptek Scarab Swarms, Lokhust Lord, Canoptek Macrocytes,
  Canoptek Tomb Crawlers and Geomancer: faction logo placeholder. Technomancer uses the Cryptek
  kit photo.
- T'au Empire (added 2026-10-18, MFM v1.6; Faction Pack v1.2 = Wahapedia version;
  BSData 14.10.2026; no allies, no Legends, no Boarding Actions): 43 datasheets
  (incl. the Imperial Armour Tiger Shark, AX-1-0 Tiger Shark, Manta and Ta'unar
  Supremacy Armour), 7 detachments, 23 enhancements, 31 stratagems. Check against the
  app: Devilfish (Rapid Deployment; Wahapedia 11e wording kept without the
  "(Core Rules, 18.07)" citation), the copy limit of the Advanced Acquisition Cadre
  Upgrades (BSData 1 per unit / 3 per army, the pack names none), the +5 swap price
  at Crisis Fireknife and Crisis Starscythe, the profiles of Crisis Sunforge and The
  Twin Lance, the profiles of Gun drone and Missile drone, and the texts of the three
  Auxiliary Cadre stratagems (not verbatim; Wahapedia has them empty, Guided Fire =
  Guided by Unity in the old pack). Details: `audit/tau_empire_rules.md`,
  `audit/tau_empire_units.md`, `data/tau_empire_build.md`.
- Imperial Knights (added 2026-10-19, MFM v1.6): the Code Chivalric Deed and
  Quality tables are transcribed from Wahapedia HTML — check against the app.
  Weapon names differ between BSData and Wahapedia ("twin Icarus autocannon" /
  "Icarus autocannons", "Questoris multi-laser" / "Preceptor multi-laser",
  Atrapos lascutter profile split); Skitarii Marshal pistol BS; Crushing Impact
  / Tank Shock and Protection Protocols wording. BSData taken (owner). The Mechanicus
  pack is v1.4 on Wahapedia web but v1.2 in CSV/PDF. The five allied Adeptus
  Mechanicus units are copies built inside the army (Mechanicus Allies, Questor
  Forgepact only, 500 pts): not reconciled with the Adeptus Mechanicus army
  (`allies-matrix.md`). No photo for Knight Preceptor and Knight Warden. The
  import fixture `imperial_knights_synthetic` is synthetic: replace with a real
  export.
- Space Marines (added 2026-10-22; codex 11e, BSData cdc2667, Wahapedia 19.10.2026; owner decision: one army per
  Chapter family — this army = common pool + six codex Chapters, picked in the roster setup; BA/DA/SW/BT/DW later as
  their own armies by reference). 87 datasheets, 21 detachments, 84 stratagems, 56 enhancements. Points: BSData
  (Gladiator Lancer 160/165, Valiant 165/145, Repulsor Executioner 260/265 vs Wahapedia). Multi-melta options of
  Gladiators/Impulsor/Repulsors are Wahapedia only (not added). Check against the app: Master of the Machine War (BSData
  text only), stratagem categories (Wahapedia exports none), the DOCTRINES tag on the three Brethren detachments,
  BS 3+ (BSData) vs 2+ (Wahapedia) on Captain with Jump Pack, Lieutenant, Eliminator and Invader ATV weapons,
  Thunderhawk M 20+" and the Astraeus/Thunderhawk weapon profiles. BSData profile errors corrected from Wahapedia:
  Captain in Phobos T4, Terminator Assault Squad W3, Apothecary Biologis OC1, Sternguard chainsword S5, Astraeus storm
  bolter S5 AP-1. Excluded: Legendary Proxies (Tactical, Devastator, Suppressor, Kantor, Ventris), Lieutenant in
  Reiver Armour, Captain Sicarius, [Crucible], Deathwatch Support (comes with the Deathwatch army). No product photo:
  Apothecary, Apothecary Biologis, Bladeguard Ancient, Judiciar, Chaplain, Chaplain with Jump Pack, Lieutenant in Phobos
  Armour, Lieutenant with Combi-weapon, Wardens of Ultramar. Details: `audit/space_marines_*.md`.
- Dark Angels (added 2026-10-22; owner decision: a Chapter army on the Space Marines pool — `fd.inherits` brings the shared units, 15
  shared detachments, Combat Doctrines, terms and Freeblades by reference; DEATHWING 18 / RAVENWING 9 grants from BSData; DARK ANGELS on
  every unit via `fd.armyKeyword`; Space Marines leaders of DA squads via `fd.leaderOfExtra`, SM data untouched). 16 own datasheets, 3
  own detachments, 12 stratagems, 8 enhancements; Legends (Talonmaster, Strikemaster, Deathwing Command Squad) excluded. Check against the
  app: every detachment, stratagem and enhancement text (no Faction Pack 11e); whether Azrael's / Sammael's / Lion's personal doctrines
  spend the once-per-battle limit (the app says no, owner); Ravenwing Black Knights Bolt Pistol S5 AP-1 [CLOSE-QUARTERS] and Deathwing
  Sergeant Power Weapon A5 (Wahapedia; BSData has 10th-edition S4 AP0 and A4); Asmodai Heavy Bolt Pistol BS 3+ (BSData) vs 2+ (Wahapedia);
  Teleport Homer on Deathwing Knights (Wahapedia only); SPEEDER on Darkshroud and CHARACTER on Ravenwing Command Squad (Wahapedia only);
  EXPLOSIVES on Lazarus and Black Knights (BSData GRENADES); Wrath of the Rock TERMINATOR tag (BSData); RAVENWING on Invader ATVs (BSData).
  The import fixture `dark_angels_synthetic` is synthetic: replace with a real export. Every own unit has a photo (Command Squad and
  Deathwing Terminator Squad have no product of their own: kit and box photos used). Details: `audit/darkAngels_*.md`.
- Blood Angels (added 2026-10-25; a Chapter army on the Space Marines pool like Dark Angels — `fd.inherits`, BLOOD ANGELS via `fd.armyKeyword`,
  no `grantKeywords` (BSData has no instanceOf-BA modifiers), `leaderOfExtra` for Captain with Jump Pack → Sanguinary Guard, Chaplain → Death
  Company Marines, Chaplain with Jump Pack → Death Company Marines with Jump Packs (Wahapedia 11e "App. Blood Angels"; BSData has none)).
  14 own datasheets, 3 own detachments, 12 stratagems, 8 enhancements. Excluded: 12 Legends and Death Company Intercessors (folded into Death
  Company Marines in 11e; hidden in BSData). Black Rage is a datasheet ability in 11e, DEATH COMPANY an ordinary keyword (no army-level
  selection). Decisions from the sources: Angelic Inheritors 3 DP (MFM via Tabletop Battles, BSData, Wahapedia; the September player pack says
  2), Prescient Flash 25 pts (Wahapedia, Tabletop Battles; BSData 20), DEATH COMPANY on Lemartes (Wahapedia 11e; BSData lacks it).
  Weapon profiles where BSData kept 10th-edition values and Wahapedia = the Space Marines pool were taken from Wahapedia (Relic Weapon S6,
  Captains' Heavy Bolt Pistol S5 [CLOSE-QUARTERS], DC Captain with Jump Pack plasma pistol BS 2+). Transfixing Gaze: BSData wording without
  Wahapedia's "(Core Rules, 09.04)" (`overrides.json`). Check against the app: every detachment, stratagem and enhancement text; the three
  decisions above; [ASSAULT] on the Baal Predator's storm bolter and hunter-killer (Wahapedia only, not applied); the Grenade Launcher of Death
  Company Marines needs a Bolt Rifle (not enforced). Photos: Death Company Dreadnought / Marines / Marines with Jump Packs are cut from the
  Warhammer Community army-set photo (no product of their own); Death Company Captain and Captain with Jump Pack use the logo. Import fixture
  `blood_angels_synthetic` is synthetic: replace with a real export. Details: `audit/bloodAngels_*.md`.
