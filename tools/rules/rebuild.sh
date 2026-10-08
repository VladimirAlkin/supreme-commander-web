#!/usr/bin/env bash
# rebuild.sh — rebuild rules text for one or more armies from the sources.
#
#   tools/rules/rebuild.sh [faction ...]            (default: all in factions.json)
#
# Environment (defaults are where this repo's sessions keep the clones):
#   W11=<Wahapedia 11e CSV dir>   W10=<Wahapedia 10e CSV dir>   BSD=<BSData wh40k-11e clone>
#   IMPORT=<old>..<new>           BSData commits around the newest Faction Pack import
#   OUT=<work dir>                intermediate files (not committed)
#
# Writes only slot files. Review, then: node tools/merge-text.js --dry && node tools/merge-text.js
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; ROOT="$(cd "$HERE/../.." && pwd)"
W11="${W11:-/home/claude/src/gw/wh40k-11e}"; W10="${W10:-/home/claude/src/gw/wh40k-10e}"
BSD="${BSD:-/home/claude/src/bsdata-11e}"; IMPORT="${IMPORT:-374f505..HEAD}"; OUT="${OUT:-${TMPDIR:-/tmp}/rules-out}"
mkdir -p "$OUT"
for d in "$W11" "$W10" "$BSD"; do [ -d "$d" ] || { echo "missing source: $d (see tools/rules/README.md)"; exit 1; }; done

node -e "process.stdout.write(JSON.stringify(require('$ROOT/data.js').factionData))" > "$OUT/ours.json"
python3 "$HERE/bsx.py" "$BSD" "$OUT/bsx.json"
python3 "$HERE/bsdelta.py" "$BSD" "${IMPORT%%..*}" "${IMPORT##*..}" --json "$OUT/delta.json" "$@" > "$OUT/delta.txt"
python3 "$HERE/best.py" --w11 "$W11" --w10 "$W10" --bsx "$OUT/bsx.json" --delta "$OUT/delta.json" --ours "$OUT/ours.json" --out "$OUT/best.json" "$@"
python3 "$HERE/assemble.py" --best "$OUT/best.json" --w11 "$W11" --out "$OUT/final.json"
node "$HERE/report.js" "$OUT/final.json" > "$OUT/report.md"
node "$HERE/fill-slots.js" "$OUT/final.json" "$@"
echo; echo "review: $OUT/report.md   (BSData changes in the import: $OUT/delta.txt)"
echo "then:   node tools/merge-text.js --dry && node tools/merge-text.js && npm run check"
