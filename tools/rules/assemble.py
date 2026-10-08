# assemble.py — turn best.json into the final text for every entry.
#
#   python3 assemble.py --best best.json --w11 DIR --out final.json [--allow-review]
#
# Order of precedence (highest first):
#   text/official.json      applied later by fill-slots.js; never decided here
#   overrides.json replace  a reviewed decision with its reason
#   overrides.json useBsdata
#   best.json final         Wahapedia, or BSData where the newest pack changed it
#
# Stops (exit 1) when an entry needs a human decision and none is recorded:
# status REWORDED, an army rule whose source has a table drawn as an image, or
# a composite ability whose option rows are missing. --allow-review writes the
# file anyway, keeping data.js text for those entries.
import json, sys, re, csv, os, argparse
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from h2t import h2lines
from cfg import FACTIONS, OVERRIDES
csv.field_size_limit(10**9)

ap = argparse.ArgumentParser()
ap.add_argument('--best', required=True); ap.add_argument('--w11', required=True); ap.add_argument('--out', required=True)
ap.add_argument('--allow-review', action='store_true')
args = ap.parse_args()
best = json.load(open(args.best))

k = lambda s: re.sub(r'[^a-z0-9]', '', str(s).lower())
def lines(h): return [l for l in h2lines(h)[0] if not l.startswith('Example:')]
def clean(t):
    if not t: return t
    t = re.sub(r'\s*\(see (left|right|below|above)\)', '', t).replace('$FAQ$', '')
    return re.sub(r'\s+', ' ', t).strip()

def match(o, e):
    return o['f'] == e['f'] and o['cat'] == e['cat'] and o['name'] == e['name'] and \
        (not e.get('unit') or e['unit'] == o.get('unit')) and (not e.get('det') or e['det'] == o.get('det'))
def find(lst, e): return next((x for x in OVERRIDES.get(lst, []) if match(e, x)), None)
used = Counter()

# Wahapedia lists some options of one ability as separate datasheet rows.
def rd(n): return list(csv.reader(open(os.path.join(args.w11, n), encoding='utf-8'), delimiter='|'))
ds = {r[0]: (r[1], r[2]) for r in rd('Datasheets.csv')[1:] if len(r) > 2}
dsab = {}
for r in rd('Datasheets_abilities.csv')[1:]:
    if len(r) > 6 and r[0] in ds and r[4]: dsab.setdefault((ds[r[0]][1], k(ds[r[0]][0])), []).append((r[4], ' '.join(lines(r[5]))))

NOTES, REVIEW, final = [], [], []
for e in best:
    f, cat, name = e['f'], e['cat'], e['name']; where = f"{f} {cat} {e.get('unit') or e.get('det') or ''} / {name}"
    rep = find('replace', e)
    if rep:
        used['replace'] += 1
        t = rep['text']; src = 'override: ' + rep['why']
        if cat == 'strat':
            base = e.get('final') or e['ours']; t = {**{x: clean(base.get(x)) for x in ('when', 'target', 'effect', 'restrictions')}, **t}
    elif cat == 'strat':
        if not e.get('final'): NOTES.append(f'NO SOURCE, kept data.js: {where}'); continue
        if e['status'] == 'REWORDED': REVIEW.append(f'{where}: Wahapedia rewording and no 10e text — add a replace override'); continue
        t = {x: clean(e['final'].get(x)) for x in ('when', 'target', 'effect')}; t['restrictions'] = clean(e['final'].get('restrictions')) or None
        src = 'wahapedia 10e (codex wording)' if e['status'] == 'CODEX_WORDING' else 'wahapedia'
    elif cat == 'army-rule':
        P = [clean(x) for x in (e.get('A_paras') or []) if clean(x)]
        if not P: NOTES.append(f'NO SOURCE, kept data.js: {where}'); continue
        if any('[[IMG]]' in x for x in P):
            REVIEW.append(f'{where}: source draws part of the rule as an image — transcribe it (BSData) into a replace override'); continue
        t = P; src = 'wahapedia'
    else:
        ub = find('useBsdata', e)
        if ub and e.get('B'): used['useBsdata'] += 1; t = e['B']; src = 'bsdata: ' + ub['why']
        elif e['status'] == 'REWORDED': REVIEW.append(f'{where}: Wahapedia rewording, codex text unavailable — add a replace override'); continue
        elif not e.get('final'): NOTES.append(f'NO SOURCE, kept data.js: {where}'); continue
        else: t = e['final']; src = {'PACK_CHANGE': 'bsdata (newest pack)', 'B_ONLY': 'bsdata', 'CODEX_WORDING': 'wahapedia 10e (codex wording)'}.get(e['status'], 'wahapedia')
        t = clean(t)
        comp = find('composites', e)
        if comp:
            used['composites'] += 1
            rows = dsab.get((comp['wahapedia'], k(e['unit'])), [])
            parts = [(n, x) for nm in comp['options'] for n, x in rows if k(n) == k(nm)]
            if len(parts) != len(comp['options']):
                REVIEW.append(f"{where}: composite options found {[p[0] for p in parts]} of {comp['options']}"); continue
            t = t + ' ' + ' '.join(f'■ {n.upper()}: {clean(x)}' for n, x in parts); src += ' + options'
    final.append(dict(f=f, cat=cat, ref=e['ref'], unit=e.get('unit'), det=e.get('det'), name=name, text=t, src=src, status=e['status'],
                      ours=e['ours'], A_cp=e.get('A_cp'), ours_cp=e.get('ours_cp'), A_type=e.get('A_type'), ours_type=e.get('ours_type')))

# An override that matched nothing is stale (renamed entry) — say so rather than silently doing nothing.
for lst in ('replace', 'useBsdata', 'composites'):
    for x in OVERRIDES.get(lst, []):
        if not any(match(e, x) for e in best if e['f'] == x['f']): REVIEW.append(f"overrides.json {lst}: matches nothing — {x['f']} {x['cat']} {x.get('unit') or x.get('det') or ''} / {x['name']}")
# CP from Wahapedia differs from data.js: data.js CP is mechanics and is changed only by hand, after checking the pack.
for x in final:
    if x['cat'] == 'strat' and x.get('A_cp') and str(x['ours_cp']) and re.sub(r'\D', '', str(x['A_cp'])) != str(x['ours_cp']):
        NOTES.append(f"CP differs (not applied): {x['f']} {x['det']} / {x['name']}: data.js {x['ours_cp']}CP, Wahapedia {x['A_cp']}")

json.dump(dict(final=final, notes=NOTES, review=REVIEW), open(args.out, 'w'), ensure_ascii=False, indent=1)
print(dict(Counter(x['f'] for x in final)), 'overrides used:', dict(used))
for n in NOTES: print('  note:', n)
for r in REVIEW: print('  REVIEW:', r)
if REVIEW and not args.allow_review: print(f'\n{len(REVIEW)} entr(ies) need a decision — record it in overrides.json (see README.md)'); sys.exit(1)
