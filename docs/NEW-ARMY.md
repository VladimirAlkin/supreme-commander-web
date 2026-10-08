# Adding an army

The order matters: structure first, text from the pipeline, gates last.
Every step below exists because skipping it broke something before.

## 1. Structure (by hand, through `tools/lib.js` `writeData`)

- `factions[]` entry and `factionData.<id>`: `armyRules`, `detachments`
  (rule, stratagems with cp/type/phases, enhancements with pts and
  `eligible`), `units` (profiles, points, keywords, `coreAbilities`,
  abilities with `kind`, options, `optionRules`, `damaged`), `terms`.
- Only the unit's **own** abilities and keywords. Anything a Leader, an
  enhancement or a detachment grants is not on the datasheet — check every
  unit with `python3 tools/rules/bsq.py <bsdata> "<catalogue>" "<unit>"`.
- Buffs and option rules only in shapes the engine reads (see
  `tools/validate-data.js`: buff keys, `forbidAllOf`/`requireAnyOf`/
  `requireAllOf`). The faction name counts as a keyword in eligibility.
- Text fields can start empty; the pipeline fills them.

## 2. Sources

- Add the army to `tools/rules/factions.json`: Wahapedia codes (check
  `Datasheets.csv`), BSData catalogue files (and its Library file), newest
  Faction Pack version and the version Wahapedia carries.
- Find the newest pack's BSData import commit and set `IMPORT` (see
  `tools/rules/README.md`).

## 3. Text

```bash
node tools/gen-slots.js <id>
tools/rules/rebuild.sh <id>
```

- Read `report.md` and `delta.txt`. Every `PACK_CHANGE` and `B_ONLY` is a
  claimed rules change — confirm it with a review or the pack.
- When it stops, record the decision in `overrides.json` with a `why` that
  names the source. Never edit `data.js` or work around the stop.
- `A_vs_B_DIFF` with low similarity: look at both; BSData is often stale.
- If the owner can send app screenshots of the army's key rules, put them in
  `text/official.json` first.

## 4. Gates

```bash
node tools/merge-text.js --dry && node tools/merge-text.js
node tools/validate-data.js           # E-CRASH, E-MECH, E-OFFICIAL, E-REWORDED block
node tools/mechanics-diff.js main     # new army = all ADDED; review, then ledger
```

Then open the app in a browser, add every unit in every detachment, open its
datasheet, and read the console — not the screenshot. Then `tools/release.js`.

## 5. Docs

- `docs/RULES-SOURCES.md`: the army in the scope line, its open questions.
- Project docs: `claude/army-builder/audit/checkpoint.md`.
