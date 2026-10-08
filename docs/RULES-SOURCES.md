# Rules text: sources and which one wins

Applies to every army in the app: Chaos Space Marines, World Eaters, Death
Guard, Thousand Sons, Tyranids, Adepta Sororitas (with Imperial Agents), and
any army added later.

Current to: the 30 Sep 2026 update (MFM v1.5; Faction Packs World Eaters,
Death Guard, Thousand Sons v1.3; Tyranids and Adepta Sororitas v1.2 with no
rules change; Imperial Agents profiles only). Last full rebuild 2026-10-08.

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
