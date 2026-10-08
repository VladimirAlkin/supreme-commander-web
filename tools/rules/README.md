# tools/rules — rebuilding rules text from the sources

One pipeline for every army. Nothing in the scripts names an army: what is
army-specific lives in two files.

| File | What goes in it |
|---|---|
| `factions.json` | per army: Wahapedia faction codes, BSData catalogue files, newest Faction Pack version vs the version Wahapedia carries |
| `overrides.json` | reviewed decisions, each with a `why`: `replace` (exact final text), `useBsdata` (an errata Wahapedia's export misses), `composites` (options Wahapedia exports as separate rows) |
| `../../text/official.json` | wording copied from the official app — beats everything, checked by `validate-data` |

## Sources (clone once per session)

```bash
mkdir -p /home/claude/src
git clone --depth 1 https://github.com/N041M/grimstat-wahapedia /home/claude/src/gw   # wh40k-11e/ and wh40k-10e/
git clone https://github.com/BSData/wh40k-11e /home/claude/src/bsdata-11e             # full history: bsdelta needs it
```

Other locations: set `W11`, `W10`, `BSD`. `IMPORT` is the BSData commit range
around the newest Faction Pack import (30 Sep 2026: `374f505..HEAD`; for the
next update find the import commit with `git log --oneline -- "*.cat"` and
read its message).

## Run

```bash
tools/rules/rebuild.sh [faction ...]       # writes text/<faction>.slots.json only
less /tmp/rules-out/report.md              # every field that would change, and why
node tools/merge-text.js --dry && node tools/merge-text.js
npm run check                              # validate-data + mechanics-diff main
```

`rebuild.sh` stops if an entry needs a decision (see below). Run on the
current data it changes nothing: that is the test that the pipeline and the
recorded decisions reproduce what ships.

## Steps and statuses

1. `bsx.py` — BSData texts per army (rules, ability profiles, per-unit abilities).
2. `bsdelta.py` — what BSData changed across the pack import (`delta.json`).
   That is the list of what the newest update changed. Read `delta.txt`.
3. `best.py` — lines every entry up against Wahapedia 11e (A), Wahapedia 10e (A10, codex wording) and BSData (B):

   | status | meaning | text used |
   |---|---|---|
   | `A`, `A=B`, `STRAT` | Wahapedia, BSData agrees or has nothing | A |
   | `CODEX_WORDING` | A has Wahapedia's own rewording (`(Core Rules, 18.06)`, `Explosives Stratagem`) | A10 |
   | `PACK_CHANGE` | name is in the import delta: the newest pack changed it | B |
   | `B_ONLY` | only BSData has it (often an ability the newest pack added) | B |
   | `A_vs_B_DIFF` | they disagree and the import did not touch it | A — BSData quirks are common |
   | `REWORDED` | rewording and no 10e text | stops: needs `replace` |
   | `NO_SOURCE` | neither has it | data.js kept, listed in notes |

4. `assemble.py` — applies `overrides.json`, folds composites, stops on
   anything unresolved (army rule with an image table, stale override,
   `REWORDED`). CP differences are reported, never applied: CP is mechanics.
5. `report.js` — `report.md`.
6. `fill-slots.js` — writes slots, then `text/official.json` on top.
   `--official-only` re-applies just the official set.

## Helpers

- `bsq.py <bsdata> <catalogue-substring> <unit>` — a unit's keywords, abilities
  and the conditions on them. Use it to check whether an ability is the unit's
  own or only granted by a Leader, an enhancement or a detachment (BSData
  shows those as hidden profiles with a condition).
- `h2t.py` — Wahapedia HTML to plain lines (lists as `■`, inline headings in
  caps, flavour text dropped, images marked `[[IMG]]`).
