# text/inbox — the only place the text role writes

Full brief: `docs/AGENT-BRIEF.md`.

One file per faction and category:

```
<faction>.<category>.md
```

- faction: `worldEaters` `tyranids` `deathGuard` `thousandSons` `adeptaSororitas`
- category: `stratagems` `enhancements` `detachment-rules` `army-rules` `unit-abilities`

Example: `deathGuard.stratagems.md`

Each entry starts with `## ` and the entry's name **exactly as the app shows
it**. Matching is by name, so no ids are needed and nothing can be filed
under the wrong entry. A name that matches nothing, or more than one thing,
is reported back — never guessed at.

Plain text only. No HTML, no markdown inside the body, no manual keyword
markup: highlighting is applied automatically from ALL-CAPS, dice notation,
phase names and the faction's own term list. Keep ALL-CAPS, `D6`/`D3`/`2D6`,
`Shooting phase`, `"` for inches and `+` for saves exactly as written.

## Shapes

Stratagems — labels in any order, `RESTRICTIONS` only when there is one:

```
## Some Stratagem Name
WHEN: Your Shooting phase.
TARGET: One unit from your army that has not shot this phase.
EFFECT: Describe what the stratagem does, in one paragraph.
RESTRICTIONS:
```

Enhancements and detachment rules — name, then the text:

```
## Some Enhancement Name
The text of the rule as one paragraph.
```

Army rules — one paragraph per block, separated by a blank line, in order:

```
## Some Army Rule Name
First paragraph.

Second paragraph.
```

Unit abilities — always prefixed with the unit, because the same ability
name appears on several units:

```
## Some Unit Name :: Some Ability Name
The text of the ability.
```

## Before committing

```bash
git add text/inbox
git status      # nothing outside text/inbox/ may appear here
```

The bodies above are placeholders showing the shape, not real rules text.
