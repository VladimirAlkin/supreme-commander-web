# best.py — line up every rules text in data.js against Wahapedia (11e, and
# 10e for codex wording) and BSData, and pick a candidate for each.
#
#   python3 best.py --w11 DIR --bsx bsx.json --ours ours.json --out best.json [--w10 DIR] [faction ...]
#
#   --delta delta.json   names changed in BSData across the newest pack import (bsdelta.py --json)
#
# Candidates: A = Wahapedia 11e export, A10 = Wahapedia 10e export (codex
# wording), B = BSData 11e. Nothing army-specific lives here: faction codes and
# catalogue names come from factions.json. Every entry gets a status; anything
# other than A / A=B / STRAT / CODEX_WORDING is listed by report.js for review.
import csv, json, sys, re, os, argparse
from collections import Counter
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from h2t import h2lines
from cfg import FACTIONS, pack_ahead
csv.field_size_limit(10**9)

ap = argparse.ArgumentParser()
ap.add_argument('--w11', required=True); ap.add_argument('--w10'); ap.add_argument('--bsx', required=True)
ap.add_argument('--delta'); ap.add_argument('--ours', required=True); ap.add_argument('--out', required=True); ap.add_argument('only', nargs='*')
args = ap.parse_args()

def norm(s): return re.sub(r'\s+', ' ', re.sub(r'[‘’ʼ`]', "'", re.sub(r'[“”]', '"', re.sub(r'[–—]', '-', str(s or '').lower())))).strip().rstrip('.').strip()
def key(s): return re.sub(r'[^a-z0-9]', '', norm(s))
def paras(s): return [l for l in h2lines(s)[0] if not l.startswith('Example:')]
def h2t(s): return ' '.join(paras(s)).strip()
def bsclean(s):
    s = str(s or '')
    s = re.sub(r'\*\*\^\^(.+?)\^\^\*\*', lambda m: m.group(1).upper(), s); s = re.sub(r'\^\^\*\*(.+?)\^\^\*\*', lambda m: m.group(1).upper(), s)
    s = re.sub(r'\^\^(.+?)\^\^', lambda m: m.group(1).replace('**', '').upper(), s); s = s.replace('**', '')
    s = re.sub(r'\n\s*[-•]\s*', '\n■ ', s)
    return re.sub(r'[ \t]+', ' ', ' '.join(l.strip() for l in s.split('\n') if l.strip())).strip()
def sim(a, b):
    A = norm(a).split(); B = norm(b).split()
    if not A and not B: return 1.0
    if not A or not B: return 0.0
    ca = Counter(A); c = sum(min(v, ca[k]) for k, v in Counter(B).items()); return 2 * c / (len(A) + len(B))

# Wahapedia's own harmonised phrasing; not printed in the official app.
REWORDED = re.compile(r'\(Core Rules,|Explosives Stratagem')
CODES = sorted({c for f in FACTIONS.values() for c in f['wahapedia']})

def index(W):
    def rd(n): return list(csv.reader(open(os.path.join(W, n), encoding='utf-8'), delimiter='|'))
    I = dict(ST={}, DA={}, EN={}, AB={}, DS={}, KWS=set())
    for r in rd('Stratagems.csv')[1:]:
        if len(r) >= 11: I['ST'].setdefault(r[0], {})[(key(r[8]), key(r[1]))] = dict(name=r[1], type=r[3], cp=r[4], det=r[8], html=r[10])
    for r in rd('Detachment_abilities.csv')[1:]:
        if len(r) >= 6: I['DA'].setdefault(r[1], {})[(key(r[5]), key(r[2]))] = h2t(r[4])
    for r in rd('Enhancements.csv')[1:]:
        if len(r) >= 9: I['EN'].setdefault(r[0], {})[(key(r[4]), key(r[1]))] = dict(text=h2t(r[8]), cost=r[3])
    for r in rd('Abilities.csv')[1:]:
        if len(r) >= 5: I['AB'].setdefault(r[3], {})[key(r[1])] = paras(r[4])
    ds = {r[0]: (r[1], r[2]) for r in rd('Datasheets.csv')[1:] if len(r) > 2}
    for r in rd('Datasheets_abilities.csv')[1:]:
        if len(r) >= 7 and r[0] in ds and r[4]:
            un, fid = ds[r[0]]
            I['DS'].setdefault(fid, {}).setdefault(key(un), {})[key(r[4])] = dict(name=r[4], text=h2t(r[5]), type=r[6])
    for r in rd('Datasheets_keywords.csv')[1:]:
        if len(r) > 1 and r[0] in ds and ds[r[0]][1] in CODES and r[1].strip(): I['KWS'].add(r[1].strip())
    return I

W11 = index(args.w11)
W10 = index(args.w10) if args.w10 else None

# GW prints keywords in caps; Wahapedia's export often has them in Title Case.
KWS = W11['KWS'] | {'Infantry', 'Character', 'Monster', 'Vehicle', 'Psyker', 'Battleline', 'Transport', 'Epic Hero', 'Daemon',
                    'Swarm', 'Beast', 'Mounted', 'Fly', 'Walker', 'Titanic', 'Synapse'}
_kw = '|'.join(re.escape(k) for k in sorted(KWS, key=len, reverse=True) if k[:1].isupper())
_KWRE = re.compile(r'(?<![\w-])((?:' + _kw + r')(?:(?: |/| or | and )(?:' + _kw + r'))*)(?=(?: |’s |\'s )(?:unit|units|model|models|Character|CHARACTER)\b)')
def kwcaps(t):
    if not t: return t
    t = re.sub(r'(Army Faction is )([A-Z][A-Za-z’\' ]+?)(?=[,.]| or )', lambda m: m.group(1) + m.group(2).upper(), t)
    return _KWRE.sub(lambda m: re.sub(r'\S+', lambda w: w.group(0) if w.group(0) in ('or', 'and') else w.group(0).upper(), m.group(1)), t)
def split_strat(t):
    return {m.group(1).lower(): m.group(2).strip() for m in
            re.finditer(r'(WHEN|TARGET|EFFECT|RESTRICTIONS)\s*:\s*(.*?)(?=(?:WHEN|TARGET|EFFECT|RESTRICTIONS)\s*:|$)', t, flags=re.S)}

ours = json.load(open(args.ours)); bsx = json.load(open(args.bsx))
# names whose BSData text changed across the commit that imported the newest Faction Packs (bsdelta.py --json)
DELTA = {f: set(v) for f, v in json.load(open(args.delta)).items()} if args.delta else None
targets = [f for f in ours if not args.only or f in args.only]
missing = [f for f in targets if f not in FACTIONS]
if missing: sys.exit(f'not in factions.json: {missing} — add the army there first')

def lookup(I, codes, table, k):
    if I is None: return None
    for c in codes:
        v = I[table].get(c, {}).get(k)
        if v is not None: return v
    return None
def ds_lookup(I, codes, unit, name):
    if I is None: return None
    for c in codes:
        v = I['DS'].get(c, {}).get(key(unit), {}).get(key(name))
        if v: return v
    return None

out = []
for f in targets:
    fd = ours[f]; codes = FACTIONS[f]['wahapedia']; B = bsx[f]
    def bs_rule(n): v = B['rules'].get(n); return bsclean(v) if v else None
    def bs_abil(n): l = B['abil'].get(n) or []; return bsclean(l[0]['text']) if l else None
    for r in fd.get('armyRules', []):
        ap_ = lookup(W11, codes, 'AB', key(r['name'])); op = r['text'] if isinstance(r['text'], list) else [r['text']]
        out.append(dict(f=f, cat='army-rule', ref=dict(rule=r['id']), name=r['name'], ours=' '.join(op), ours_paras=op,
                        A=' '.join(ap_) if ap_ else None, A_paras=ap_, B=bs_rule(r['name'])))
    for d in fd.get('detachments', []):
        dk = key(d['name'])
        if d.get('rule'):
            out.append(dict(f=f, cat='det-rule', ref=dict(det=d['id']), det=d['name'], name=d['rule']['name'], ours=d['rule'].get('text', ''),
                            A=lookup(W11, codes, 'DA', (dk, key(d['rule']['name']))), A10=lookup(W10, codes, 'DA', (dk, key(d['rule']['name']))),
                            B=bs_rule(d['rule']['name']) or bs_abil(d['rule']['name'])))
        for s in d.get('stratagems', []):
            w = lookup(W11, codes, 'ST', (dk, key(s['name']))); w10 = lookup(W10, codes, 'ST', (dk, key(s['name'])))
            out.append(dict(f=f, cat='strat', ref=dict(det=d['id'], strat=s['id']), det=d['name'], name=s['name'],
                            ours=dict(when=s.get('when', ''), target=s.get('target', ''), effect=s.get('effect', ''), restrictions=s.get('restrictions')),
                            A=split_strat(h2t(w['html'])) if w else None, A10=split_strat(h2t(w10['html'])) if w10 else None,
                            A_cp=(w or {}).get('cp'), A_type=(w or {}).get('type'), ours_cp=s.get('cp'), ours_type=s.get('type')))
        for e in d.get('enhancements', []):
            w = lookup(W11, codes, 'EN', (dk, key(e['name']))); w10 = lookup(W10, codes, 'EN', (dk, key(e['name'])))
            out.append(dict(f=f, cat='enh', ref=dict(det=d['id'], enh=e['id']), det=d['name'], name=e['name'], ours=e.get('text', ''),
                            A=(w or {}).get('text'), A10=(w10 or {}).get('text'), A_cost=(w or {}).get('cost'), ours_pts=e.get('pts'),
                            B=bs_abil(e['name']) or bs_rule(e['name'])))
    for u in fd.get('units', []):
        bu = B['units'].get(u['name']) or {}
        for i, a in enumerate(u.get('abilities', [])):
            w = ds_lookup(W11, codes, u['name'], a['name']); w10 = ds_lookup(W10, codes, u['name'], a['name'])
            bt = bu.get(a['name']) or bu.get('LINK:' + a['name'])
            out.append(dict(f=f, cat='unit-abil', ref=dict(unit=u['id'], idx=i), unit=u['name'], name=a['name'], kind=a.get('kind'),
                            ours=a.get('text', ''), A=(w or {}).get('text'), A10=(w10 or {}).get('text'), A_type=(w or {}).get('type'),
                            B=bsclean(bt) if bt else None))

for o in out:
    for k in ('A', 'A10'):
        if o['cat'] == 'strat' and o.get(k): o[k] = {x: kwcaps(v) for x, v in o[k].items()}
        elif o.get(k): o[k] = kwcaps(o[k])
    if o.get('A_paras'): o['A_paras'] = [kwcaps(x) for x in o['A_paras']]

for o in out:
    if o['cat'] == 'strat':
        A, A10 = o['A'], o.get('A10')
        if not A: o['final'] = None; o['status'] = 'NO_SOURCE'; continue
        o['final'] = dict(A); o['status'] = 'STRAT'
        for fld, v in A.items():
            if REWORDED.search(v or ''):
                if A10 and A10.get(fld) and not REWORDED.search(A10[fld]): o['final'][fld] = A10[fld]; o['status'] = 'CODEX_WORDING'
                else: o['status'] = 'REWORDED'
        continue
    A, Bt, A10 = o.get('A'), o.get('B'), o.get('A10')
    if A and REWORDED.search(A):
        if A10 and not REWORDED.search(A10) and (not Bt or sim(A10, Bt) >= sim(A, Bt)): A = o['A'] = A10; o['codex'] = True
        else: o['final'] = A; o['status'] = 'REWORDED'; continue
    o['sAB'] = round(sim(A, Bt), 2) if (A and Bt) else None
    if not A and not Bt: o['final'] = None; o['status'] = 'NO_SOURCE'; continue
    if not A: o['final'] = Bt; o['status'] = 'B_ONLY'; continue  # e.g. an ability added by the newest pack
    body = re.sub(r'^.*?\bonly\.\s+', '', A) if o['cat'] == 'enh' else A
    if Bt: o['sAB'] = round(max(o['sAB'], sim(body, Bt)), 2)
    if not Bt or o['sAB'] >= 0.9:
        o['final'] = A; o['status'] = 'CODEX_WORDING' if o.get('codex') else ('A' if not Bt else 'A=B'); continue
    changed = DELTA is not None and o['name'] in DELTA.get(o['f'], ())
    if changed or (pack_ahead(o['f']) and DELTA is None):
        # The Faction Pack moved past Wahapedia and BSData imported the change: BSData has the newer text.
        # Without --delta we cannot tell an update from a BSData quirk, so it is only a suggestion.
        m = re.match(r'^(.*?\bonly\.)\s+', A) if o['cat'] == 'enh' else None
        o['final'] = ((m.group(1) + ' ') if m else '') + Bt; o['status'] = 'PACK_CHANGE' if changed else 'PACK_AHEAD'
    else: o['final'] = A; o['status'] = 'A_vs_B_DIFF'

json.dump(out, open(args.out, 'w'), ensure_ascii=False, indent=1)
c = Counter((o['f'], o['status']) for o in out)
for f in targets: print(f.ljust(16), {s: n for (ff, s), n in sorted(c.items()) if ff == f})
