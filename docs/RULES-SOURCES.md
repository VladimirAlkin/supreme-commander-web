# Rules text: sources and which one wins

Applies to every army in the app: Chaos Space Marines, World Eaters, Death
Guard, Thousand Sons, Tyranids, Adepta Sororitas (with Imperial Agents),
Adeptus Mechanicus, Emperor's Children (with Legions of Excess), Drukhari (with Harlequins and Anhrathe allies), Necrons, and
any army added later.

Current to: the 30 Sep 2026 update (MFM v1.5; Faction Packs World Eaters,
Death Guard, Thousand Sons v1.3; Tyranids and Adepta Sororitas v1.2 with no
rules change; Imperial Agents profiles only). Last full rebuild 2026-10-08. Emperor's Children (added 2026-10-14) is
current to MFM v1.6 and Faction Pack v1.2. Drukhari (added 2026-10-17) is
current to MFM v1.6 and Faction Pack v1.2. Necrons (added 2026-10-17) is current to MFM v1.6;
its Faction Pack v1.2 PDF was not read (rules text follows Wahapedia 1.2 and BSData).

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
