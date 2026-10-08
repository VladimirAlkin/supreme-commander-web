# Superseded inbox files — do not ingest

These 25 files were handed over on 2026-10-07/08. They were checked on
2026-10-08 and are NOT used:

- Most entries are copies of the app's own earlier paraphrases, not new
  wording (e.g. all Death Guard, Thousand Sons, Tyranids and Sororitas unit
  abilities and enhancements are byte-identical to what data.js had).
- The rest is Wahapedia Faction Pack v1.2 text, which predates the
  30 Sep 2026 Faction Pack v1.3 changes (Relentless Rage, Angron's Driven by
  Ultimate Rage, Infernal Fusillade, Unwavering Phalanx). Ingesting it rolls
  those rules back — this is how the "+2 S" Relentless Rage reached prod.

All rules text was replaced on 2026-10-08 from the Wahapedia CSV export
(28.09.2026) plus the 30.09 changes; see docs/RULES-SOURCES.md.

tools/ingest-inbox.js only reads *.md directly in text/inbox/, so files in
this folder are never ingested.
