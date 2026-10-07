# Text pipeline

Two roles work on this app and they must not edit the same file.

| Role | Owns | Touches |
|---|---|---|
| **Structure** | ids, points, CP, keywords, profiles, eligibility, mechanics flags, images, UI, build, deploy | `data.js` (via tools), `app.js`, `engine.js`, `sw.js`, `index.html`, `docs/` |
| **Text** | the wording of rules, stratagems, enhancements, abilities | `text/*.slots.json` **only** |

**`data.js` is generated output. Never hand-edit it.** Parse → write is
byte-identical, which is what makes the tooling safe; editing it by hand
breaks that guarantee and causes the merge conflicts we had before.

Sourcing the wording is the text role's responsibility, including whatever
permission that requires. This pipeline only defines where text goes and
what shape it must be in.

---

## Loop

```
node tools/gen-slots.js            # data.js -> text/*.slots.json
#   text role edits text/*.slots.json
node tools/merge-text.js --dry     # show what would change, write nothing
node tools/merge-text.js           # apply into data.js
node tools/validate-data.js        # gate: errors block the deploy
node tools/release.js              # bump the four cache markers
git commit && git push
```

One faction at a time: `node tools/gen-slots.js deathGuard`.

---

## The addressing guarantee

This is the heart of the pipeline. Everything else is convenience; this part
is what stops an enhancement's wording landing on a stratagem, or one unit's
ability on another unit.

**1. The author never chooses a destination.** They do not type a path, an
id, or a field name, and they never decide where something belongs. Slot
files are generated from `data.js` already addressed: every blank sits at
the one place that entry lives, under the stable id the app itself uses.
Filling a blank is the only available action, so "putting it in the wrong
place" is not a move that exists.

**2. Every blank is labelled with who it belongs to.** Each entry carries
read-only context — `_name`, and `_cp` / `_pts` / `_type` where they apply —
so the author can see exactly which stratagem or enhancement they are
writing, and whether a given blank is the title or the body. These are
labels, not data: they are never written back.

**3. The labels are verified before anything is written.** `merge-text.js`
re-checks every `_name`, `_cp`, `_pts` and `_type` against `data.js` first.
One disagreement means the file was restructured and addressing can no
longer be trusted, so the **entire merge aborts and writes nothing** — not
just the mismatched entry. Fail closed, never half-applied. It also refuses
a file whose `_meta.faction` does not match the faction being merged, so a
Death Guard file cannot be applied to Tyranids.

**4. Mechanics are physically out of reach.** Only a whitelist of text
fields is applied. Points, CP, ids, keywords, eligibility and every
mechanic flag are never read from a slot file. A mistake in the text pass
can produce wrong *wording*; it cannot change what the app *computes*.

**5. Unknown ids are reported, never guessed.** An id that no longer exists
— renamed, or a stale slot file — is listed and skipped. Nothing is matched
by position or by similar-looking name.

What this does **not** catch: if the author writes the wrong wording into
the correct, correctly-labelled blank, no tool can know. That is a reading
error, not an addressing error, and `_name` sitting next to the blank is the
defence. The validator adds a thin net on top (see below), but structure is
what carries the guarantee.

### Which field is which

| You are writing | It goes in |
|---|---|
| the title of a stratagem/enhancement/ability | nowhere — titles are structure, already set, shown as `_name` |
| when a stratagem may be used | `when` |
| what it is used on | `target` |
| what it does | `effect` |
| a limit on its use ("once per battle") | `restrictions`, or `null` if none |
| what an enhancement does | `text` |
| what a unit ability does | the `text` under that ability's name, inside that unit |
| an army rule, paragraph by paragraph | `text` as a list |

If a rule seems to need a new field or a new entry, that is a structure
change: ask, do not improvise one.

---

## Writing rules

**Plain text only.** The renderer escapes HTML, so any tag or entity shows
up as literal characters on screen. No `<b>`, no `&nbsp;`, no markdown
`**bold**`, no `[brackets]` for emphasis.

**Do not mark up keywords.** Highlighting is automatic: `hl()` builds a
regex per faction and colours ALL-CAPS runs, dice notation (`D3`, `D6`,
`2D6`, `D6+3`), phase names (`Command phase`, `Fight phase`), unit keywords
followed by unit/squad/model, and the faction's own phrases from
`factionData.<faction>.terms`. So:

- keep ALL-CAPS exactly as in the source — that is what produces the keyword styling
- keep dice notation in the `D6` form, not "d6" or "D-6"
- write phases as `Shooting phase`, not `shooting phase`
- keep `"` for inches and `+` for saves

If a faction phrase should be highlighted and is not, that is a `terms`
entry — ask the structure role, do not add markup.

**Shape.** `armyRules[].text` is a **list**, one entry per paragraph.
Everything else is a single string. A bare string in `armyRules` is accepted
and wrapped automatically, but the list is canonical.

**Never delete a key.** Leave an entry untouched if it is not done yet; an
unchanged value merges as a no-op. Deleting a key makes it look missing.

---

## Slot file shape

```jsonc
{
  "_meta": { "faction": "deathGuard", "counts": { } },
  "armyRules": {
    "<ruleId>": { "_name": "…", "text": ["paragraph one", "paragraph two"] }
  },
  "detachments": {
    "<detId>": {
      "_name": "…",
      "rule": { "_name": "…", "text": "…" },
      "stratagems": {
        "<stratId>": {
          "_name": "…", "_cp": 1, "_type": "Battle Tactic",
          "when": "…", "target": "…", "effect": "…",
          "restrictions": null
        }
      },
      "enhancements": { "<enhId>": { "_name": "…", "_pts": 15, "text": "…" } }
    }
  },
  "units": {
    "<unitId>": { "_name": "…", "abilities": { "<ability name>": { "text": "…" } } }
  }
}
```

Writable fields, and nothing else:

| Entry | Fields |
|---|---|
| army rule | `text` (array) |
| detachment rule | `text` |
| stratagem | `when`, `target`, `effect`, `restrictions` |
| enhancement | `text` |
| unit ability | `text` |

Unit abilities are keyed by ability **name** within the unit. A unit with two
abilities of the same name gets `Name`, `Name #2`.

---

## The gate

`validate-data.js` exits non-zero on **errors**, which block a deploy:

| Code | Meaning |
|---|---|
| `E-TYPE` | wrong type (string where a number belongs, and so on) |
| `E-EMPTY` | required text is empty |
| `E-MISSING` | required field absent |
| `E-MARKUP` | HTML or markdown that would render as literal characters |
| `E-PLACEHOLDER` | `TODO` / `<FILL>` left in |
| `E-ENCODING` | broken character encoding |
| `E-DUPID` | two entries share an id |

Warnings do not block but are worth reading. `W-UNTERMINATED` and
`W-ELLIPSIS` are the signatures of a pass that stopped mid-entry, which is
exactly what a crashed run leaves behind — check those first when resuming.

---

## Shipping

Changing `data.js` alone is **not enough for phones**. The service worker
serves cache-first and matches with `ignoreSearch`, so a `?v=` query string
does **not** bust it. Only a new `CACHE` name in `sw.js` makes it purge.

`tools/release.js` moves all four markers together — `sw.js` `CACHE`,
`index.html` `SC_BUILD`, `version.json`, `VERSION` — and refuses to reuse a
shipped id. `SC_BUILD` and `version.json` must match, because the in-app
"Check for updates" compares them; if they disagree it reports "already
latest" and the phone never updates.

`node tools/release.js --check` verifies consistency without changing
anything.

Deploy is GitHub Pages serving a branch directly, set in **Settings →
Pages → Branch**. There is no build step on the server: whatever is on the
selected branch is the live site. Rolling back is the same switch.

---

## Adding a new army

Structure role does all of this before any text exists:

1. Add the faction to `DATA.factions` (id, name, theme, logo, rosterIcon) and
   a `factionData.<id>` block.
2. Add units with ids, profiles, keywords, points, base sizes, options; add
   detachments with ids, enhancements (ids + points) and stratagems (ids, CP,
   type, phases). Leave every text field as `""`.
3. Add the faction's highlight phrases to `factionData.<id>.terms`.
4. Add images to `img/`, register them in the `IMAGES` map in `index.html`
   and in the `FILES` list in `sw.js`, or they will not work offline.
5. `node tools/gen-slots.js <id>` → hand the slot file to the text role.
6. On the way back: `merge-text` → `validate-data` → `release` → push.

Step 2 is the expensive part and it is pure structure, so it never needs the
wording to exist first. That is the point of the split: the two roles can
work at the same time and never touch the same file.
