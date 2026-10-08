# Working on this repo

Read this before touching anything. It encodes what already went wrong.

One role: you own everything — structure, rules text, tooling, release.
There is no second agent and no inbox; text comes from the sources through
`tools/rules/`, and from the owner's screenshots of the official app.

The app covers several armies: World Eaters, Death Guard, Thousand Sons,
Tyranids, Adepta Sororitas (with Imperial Agents). Treat them alike; a fix
or a check made for one army is made for all of them.

## The failure pattern

**One malformed row anywhere freezes the entire app**, and the symptom never
points at the data. Examples that shipped and had to be undone:

- `armyRules[].text` turned from an array into a string → `.map()` threw on
  every army page.
- A detachment buff written as `{target, stat, add, condition, duration}` —
  no `scope`, keys the engine never reads. `Engine.buffed` threw inside
  `render()`, `$app.innerHTML` never ran, nothing opened, and Android Back
  left the app because `armHistory()` is the last line of `render()`.
- A "text-only" pass that deleted core abilities, renamed abilities and
  flipped `kind`: `mechanics-diff` found 95 such edits.

## Rules text

Read `docs/RULES-SOURCES.md` first. Short version:

1. The official app (owner's screenshots) beats everything. Put that text in
   `text/official.json` verbatim; `validate-data` fails if it drifts.
2. Wahapedia is the verbatim base but one update behind, and it rewrites some
   rules in its own words ("(Core Rules, 18.06)", "Explosives Stratagem") —
   `validate-data` fails on those.
3. BSData carries the newest update; diff it across its import commit to see
   what changed. Not a clean text source on its own.
4. Never replace text wholesale from one source. Rebuild with
   `tools/rules/rebuild.sh`, read its report, record each decision in
   `tools/rules/overrides.json` with the source in `why`.
5. Do not put on a datasheet any ability or keyword that only a Leader, an
   enhancement or a detachment grants.

When the owner gives text to use, use it as given; check only that it landed
on the right entry and the app still works.

Adding an army: follow `docs/NEW-ARMY.md`. Per-army configuration lives in
`tools/rules/factions.json`; no script names an army.

## Pipeline

```bash
tools/rules/rebuild.sh [faction]       # or edit text/<faction>.slots.json directly
node tools/merge-text.js --dry         # addressing + context check, preview
node tools/merge-text.js
node tools/validate-data.js            # errors block: E-CRASH E-MECH E-OFFICIAL E-REWORDED …
node tools/mechanics-diff.js main      # anything not prose must be reviewed
node tools/release.js                  # all four version markers
```

`data.js` is generated: parse → `JSON.stringify(data, null, 1)` → write is
byte-identical. Text goes in through slot files + `merge-text`; structure
through `tools/lib.js` `writeData`. Never hand-edit it.

### The reviewed-mechanics ledger

`docs/mechanics-accepted.json` lists mechanics changes vs `main` that were
checked against a source and kept, each with its reason. `mechanics-diff`
subtracts exact matches and fails on anything else, including a reviewed fix
that has been undone (`REVERTED`). `--all` ignores the ledger. Add an entry
only after verifying against the current rules; never to make the gate pass.

## Debugging a frozen UI

If controls do nothing and the screen looks stale, it is almost never CSS
and almost never touch handling. `render()` threw. Open the app in a browser
and read the console — the stack trace names the data path.

- **The console buffer persists across navigations in the pane.** Check line
  numbers against the current file, and confirm in a *fresh tab*.
- **Synthetic mouse clicks open units fine on every build, broken or not.**
  Watch the console, not the screenshot.
- Playwright is installed (`/opt/pw-browsers`). Stop local servers by PID
  (`ss -ltnp`), never `pkill -f` — it kills your own shell.

## Before you blame touch handling

A previous session added `user-select: none` and `pointer-events: none` to
every button to fix a tap bug it could not reproduce. It broke the roster
builder. The real cause was the buff crash above. This environment cannot
test touch; without evidence from the device, say so and leave it. The tab
bar on iPhone is in that category.

## Deploy

GitHub Pages serves the branch `rules-fidelity-fix` directly (Settings →
Pages). `main` is the rollback; do not commit to it. Whatever is on the
served branch is live; only the owner can switch it.

Changing `data.js` alone does not reach phones. The service worker is
cache-first and matches with `ignoreSearch` — only a new `CACHE` name in
`sw.js` busts it. `tools/release.js` moves `CACHE`, `SC_BUILD`,
`version.json` and `VERSION` together and refuses to reuse a shipped id.
The live site cannot be reached from the container: after a push, ask the
owner to tap "Check for updates".

## Habits

- Run `npm run check` before every release, not after a bug.
- Prefer a guard in the shared function over a guard in each caller. The
  engine skips a malformed buff and optionRule instead of throwing; do the
  same for the next shape that bites, and add a check to `validate-data`.
- The faction (`unit.faction`) counts as a keyword in `Engine.keywordsOf`,
  so eligibility can say "WORLD EATERS model only" with `keywordsAny`.
- When you cannot reproduce something, say so and stop.
- Verify before reverting. On 2026-10-08 most "damage" in a text pass turned
  out to be correct fixes; the real errors were few.
