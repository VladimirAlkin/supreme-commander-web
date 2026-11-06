# Patches: how a rules update goes into finished armies

Scope: points, profiles, keywords, rules text, stratagems, enhancements,
detachments, restrictions, moves to Legends — for armies already in the app.
A new army or a new engine mechanic is not a patch.

## Files

| File | What it is |
|---|---|
| `patches/index.md` | log: one line per patch (date, id, source, armies, anchor SHA, commits, status) |
| `patches/ROLLBACK.md` | how to undo a whole patch or one army |
| `patches/<date>_<id>.md` | patch report (written at close) |
| `patches/work/<id>/table.json` | approved change table — the contract for `patch-diff --expect` |
| `patches/work/<id>/before.json.gz`, `after.json.gz` | data snapshots before / after |

## Tools

| Command | What it does |
|---|---|
| `node tools/patch-snapshot.js <file.json.gz>` | flat snapshot of every army (inherited pool units included) |
| `node tools/patch-diff.js <before> <after> [--expect table.json] [-v]` | what changed; with `--expect` fails on EXTRA / MISSING / MISMATCH / VERSION |
| `node tools/patch-bump.js <id> <army…>` | moves `meta.factionVersions` → saved rosters of those armies get the "older data version" warning |
| `node tests/rosters.test.js [--update]` | saved lists still open; points moved = listed; part of `npm run check` |
| `node tools/check-live.js [--wait 300]` | live build = local build; exit 3 = not reachable from the container → owner taps "Check for updates" |

## Steps

0. **Anchor.** `git rev-parse --short HEAD` → line in `index.md`, status `в работе`.
   Tag push is blocked in this environment: the SHA is the anchor (a local
   tag `pre-patch-<date>-<id>` is optional). Snapshot:
   `node tools/patch-snapshot.js patches/work/<id>/before.json.gz`.
1. **Table** (nothing changes yet). One row per change: army, kind, id,
   field, from (read from `before`, never from memory), to, source + page,
   how (data / text / official.json). Out of scope and FAQ-only items as
   separate lists. Space Marines pool change = one row for `spaceMarines`;
   the Chapter armies follow by inheritance (patch-diff shows them as
   "via spaceMarines"). **Stop: owner's "ок"** (may be partial — drop the
   rest from `table.json`).
2. **Apply.** One commit per army `patch(<id>): <army>`; structure via
   `tools/lib.js` loadData → change → writeData, text via slot files +
   `merge-text`. Each mechanic change → `docs/mechanics-accepted.json`
   with `why: "<id>, <date>, p. X"`. Then `node tools/patch-bump.js <id>
   <armies>` (every army patch-diff shows, Chapters included).
3. **Check.** `after` snapshot → `patch-diff --expect` = all zeros →
   `npm run check` → `node tests/rosters.test.js --update` (points diff
   goes into the report) → browser at 390 px, console clean, 2–3 changed
   units per army → `node tools/release.js` → push → `check-live`.
4. **Close.** `patches/<date>_<id>.md`, status `внесён` in `index.md`,
   keep `work/<id>/`.

Two failed tries at the same fix → stop and report. No fixing unrelated
bugs on the way: one line to the owner.
