# Rules text: where it comes from and how it was rebuilt

Last full rebuild: 2026-10-08 (build after 08.10-c8af56f).

## What is current

Freshness cutoff: the 30 Sep 2026 update (MFM v1.5; Faction Packs World
Eaters v1.3, Death Guard v1.3, Thousand Sons v1.3; Tyranids v1.2 and Adepta
Sororitas v1.2 unchanged for rules; Imperial Agents profiles only).

## Sources, and what each is good for

| Source | Reach from the container | Current to | Use it for |
|---|---|---|---|
| Official Faction Pack PDFs (assets.warhammer-community.com) | WebFetch only, quotes capped at 125 chars | 30 Sep 2026 | the list of what changed; short exact phrases |
| Wahapedia CSV export, mirrored at github.com/N041M/grimstat-wahapedia (`wh40k-11e/`) | `git clone` | Faction Pack v1.2 (26 Aug 2026), export of 28 Sep | **base text** for everything: verbatim, includes restriction lines ("X model only."), Designer's Notes and 11th-edition wording (shock/assault disembark, Level of Control) |
| BSData `wh40k-11e` (github.com/BSData/wh40k-11e) | `git clone` | 7 Oct 2026, includes the 30 Sep import (commits 119dab8, baaf144) | **what changed on 30 Sep**: diff the catalogues across the import; conditions (e.g. Deep Strike only with Lord Invocatus); DP and Force Dispositions |
| Reviews of the update (Spikey Bits, Tabletop Battles, La Voz de Horus) | WebFetch | 30 Sep 2026 | confirming changes BSData does not encode (stratagems) — need two that agree |

Where they disagree:

- BSData is **not** a reliable text source on its own: it drops restriction
  lines and Designer's Notes, keeps some 10th-edition wording (Assault Ramp,
  Infected Outbreak, Rapid Deployment) and has typos.
- Wahapedia's datasheet export sometimes misses an errata that the page
  shows in a separate Errata block (The Swarmlord's Malign Presence, Kairos
  Fateweaver's One Head Looks Back): BSData has the errata version.
- Wahapedia shows table values as images in two army rules (Contagion
  Range, the Psychic test sequence); those values came from BSData.

## The 30 Sep 2026 text changes (from the BSData diff + reviews)

- World Eaters: Relentless Rage ("Friendly WORLD EATERS units' melee attacks
  have +1 A."), Khorne Berzerkers gain Murderous Charge, Angron's Driven by
  Ultimate Rage (re-roll hit and wound rolls of 1). Berzerker Warband 2 DP.
- Thousand Sons: Infernal Fusillade 1CP and no longer sets S5; Unwavering
  Phalanx only against attacks with S greater than T; Exalted Sorcerer on
  Disc has Illusions of Tzeentch instead of Arcane Shield.
- Profiles (Astartes T5/T6, bolt weapons S5 AP-1) and several Force
  Dispositions — already in data.js before this rebuild.

**Unwavering Phalanx**: the official v1.3 wording was not retrieved. The
text in data.js expresses the change in GW's standard phrasing. Replace it
with the printed text when the Thousand Sons Faction Pack v1.3 is available.

## How the rebuild was done

1. Parse the Wahapedia CSV (HTML to plain text: lists as "■", inline
   headings in caps, flavour text removed, keyword case restored).
2. Take BSData only where it is newer (the 30 Sep set above, and errata
   blocks Wahapedia missed).
3. Options that Wahapedia lists as separate rows (Mortarion's Lord of the
   Death Guard, Magnus' Crimson King abilities, the Triumph's relics) are
   folded into the parent ability as "■ NAME: text".
4. Write into the slot files and apply with `tools/merge-text.js`; ability
   and enhancement renames and added datasheet weapon rules go through
   `lib.writeData` and are recorded in `docs/mechanics-accepted.json`.

Nothing granted by a Leader or a detachment is written onto a datasheet.

## Not covered

- Core stratagems in `gameRules.coreStratagems` are still paraphrases; the
  Wahapedia faction export does not contain 11th-edition core stratagems.
- Myphitic Blight-haulers: no 11th-edition datasheet found; text unchanged.
