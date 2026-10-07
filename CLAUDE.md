# Working on this repo

Read this before touching anything. It encodes what already went wrong.

## Two roles, and they are not equal

**You own the structure.** `app.js`, `engine.js`, `style.css`, `sw.js`,
`index.html`, `data.js`, `tools/`, `docs/`, the build and the deploy. Every
id, points value, CP, keyword, profile, buff, option rule and mechanic.

**A second agent owns wording only.** It finds better rules text than you
can and that is genuinely useful. It is also fast, careless, and has broken
this app more than once. It writes to `text/inbox/` and **nowhere else**.
It never edits `data.js`. You take its text and place it.

Sourcing the wording, and whatever permission that needs, is the text
role's responsibility and the owner's call. Your side of the line is where
the text goes and what shape it must be in. Do not take over its sourcing.

## What it has actually done

Not hypothetical. All of this shipped and had to be undone:

- Converted `armyRules[].text` from an array to a string, got 7 of 10 done,
  and crashed. `armyRulesHTML` called `.map()` → every army page threw.
- Replaced a working detachment buff with `{target, stat, add, condition,
  duration}` — no `scope`, and `condition`/`duration` are keys the engine
  never reads. `Engine.buffed` threw inside `render()`, so `$app.innerHTML`
  never ran and **the whole UI froze**: no unit would open, no datasheet, no
  Add unit, and Android Back left the app because `armHistory()` is the last
  line of `render()` and was never reached.
- Deleted `coreAbilities` (Deep Strike, Leader, Scouts 6", Super-Heavy
  Walker), renamed abilities, flipped `kind` from `datasheet` to `wargear`,
  dropped abilities outright. `tools/mechanics-diff.js main` found 95 such
  edits in a pass advertised as text-only.

The pattern: **one malformed row anywhere freezes the entire app**, and the
symptom never points at the data. Budget for that.

## Debugging a frozen UI

If controls do nothing and the screen looks stale, it is almost never CSS
and almost never touch handling. `render()` threw. Open the app in the
browser pane and read the console — the stack trace names the data path.

Two traps that cost hours:

- **The console buffer persists across navigations in the pane.** An error
  you see may be from before your fix. Check the line numbers against the
  current file, and confirm in a *fresh tab* before concluding anything.
- **Synthetic mouse clicks open units fine on every build, broken or not.**
  Clicking through in the pane does not prove the app works. Watch the
  console, not the screenshot.

## Before you blame touch handling

A previous session added `user-select: none` and `pointer-events: none` to
every button to fix a tap bug it could not reproduce. It did not help and it
broke the roster builder completely. The real cause was the buff crash above.

Do not "fix" touch behaviour from reading the code. This environment cannot
test touch. If there is no evidence from the device, say so and leave it.

## Every time the text agent hands work over

```bash
node tools/check-agent-scope.js <their-base>..<their-head>   # scope gate
node tools/ingest-inbox.js                                   # inbox -> slots
node tools/merge-text.js --dry                               # preview
node tools/merge-text.js
node tools/validate-data.js                                  # errors block
node tools/mechanics-diff.js main                            # must be prose-only
node tools/release.js                                        # all four markers
```

`mechanics-diff` is the one that catches what the others miss. Anything it
reports that you did not do yourself is damage — investigate before shipping.

## Deploy

GitHub Pages serves a branch directly, set in Settings → Pages. No build
step on the server; whatever is on the selected branch is live. Rolling back
is the same switch. Only the repo owner can change it.

`data.js` is generated: parse → `JSON.stringify(data, null, 1)` → write is
byte-identical. That is what makes the tooling safe. Never hand-edit it.

Changing `data.js` alone does not reach phones. The service worker is
cache-first and matches with `ignoreSearch`, so a `?v=` query string does
**not** bust it — only a new `CACHE` name in `sw.js`. `tools/release.js`
moves `CACHE`, `SC_BUILD`, `version.json` and `VERSION` together and refuses
to reuse a shipped id. `SC_BUILD` and `version.json` must match or the in-app
update check reports "already latest" forever.

## Habits that would have saved this

- Run `mechanics-diff` against `main` before every release, not after a bug.
- Prefer a guard in the shared function over a guard in each caller. The
  engine now skips a malformed buff instead of throwing; do the same for the
  next shape that bites.
- When you cannot reproduce something, say so and stop. Do not ship a fix
  for a bug you have only reasoned about.
