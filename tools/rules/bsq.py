# bsq.py <bsdata_dir> <catalogue-substring> <unit name> [...]
import json,sys,glob,os,re
root=sys.argv[1]; IDX={}; CATS={}
SKIP=re.compile(r'crusade|battle (honou?r|trait|scar)|weapon modification|relic|enhancement|tyrannic|monster hunter|behemoth|upgrade path|warlord trait|detachment',re.I)
def index(o):
    if isinstance(o,dict):
        if 'id' in o and 'name' in o: IDX.setdefault(o['id'],o)
        for v in o.values(): index(v)
    elif isinstance(o,list):
        for v in o: index(v)
for f in glob.glob(os.path.join(root,'*.json')):
    try: j=json.load(open(f))
    except Exception: continue
    c=j.get('catalogue') or j.get('gameSystem') or j; CATS[os.path.basename(f)]=c; index(c)
def cond(n):
    out=[]
    for m in n.get('modifiers',[]) or []:
        cs=[]
        for k in ('conditions',):
            for cc in m.get(k,[]) or []: cs.append(f"{cc.get('type')} {IDX.get(cc.get('childId'),{}).get('name',cc.get('childId'))}")
        for g in m.get('conditionGroups',[]) or []:
            for cc in g.get('conditions',[]) or []: cs.append(f"{g.get('type')}:{cc.get('type')} {IDX.get(cc.get('childId'),{}).get('name',cc.get('childId'))}")
        out.append(f"{m.get('type')} {m.get('field')}={m.get('value')} if [{'; '.join(cs)}]")
    return out
def walk(n,acc,depth=0,seen=None):
    seen=seen if seen is not None else set()
    if not isinstance(n,dict) or depth>6 or id(n) in seen: return
    if depth>0 and SKIP.search(n.get('name','')): return
    seen.add(id(n))
    for cl in n.get('categoryLinks',[]) or []:
        if depth<=1: acc['kw'].add(cl.get('name'))
    for p in n.get('profiles',[]) or []:
        t=p.get('typeName') or ''
        if 'Weapon' in t or (t=='Abilities' and depth<=2):
            acc['prof'].setdefault(t,{})[p.get('name')]=(' '.join((ch.get('$text') or '') for ch in p.get('characteristics',[]) or [] if ch.get('name')=='Description')[:170], p.get('hidden'), cond(p))
    if depth<=2:
        for il in n.get('infoLinks',[]) or []:
            t=IDX.get(il.get('targetId'),{}); nm=il.get('name') or t.get('name')
            acc['info'].append((f"{il.get('type')}:{nm}", il.get('hidden'), cond(il)))
    for k in ('selectionEntries','selectionEntryGroups','entryLinks'):
        for ch in n.get(k,[]) or []:
            if k=='entryLinks':
                if SKIP.search(ch.get('name','')): continue
                walk(IDX.get(ch.get('targetId'),{}),acc,depth+1,seen)
            else: walk(ch,acc,depth+1,seen)
for name in sys.argv[3:]:
    hits=[(cn,e) for cn,c in CATS.items() if sys.argv[2].lower() in cn.lower() for k in ('sharedSelectionEntries','selectionEntries') for e in (c.get(k,[]) or []) if e.get('name','').lower()==name.lower() and e.get('type') in ('unit','model')]
    if not hits: print(f'\n### {name}: NOT FOUND'); continue
    cn,e=hits[0]; acc={'kw':set(),'prof':{},'info':[]}; walk(e,acc)
    print(f'\n### {name}  [{cn}]'); print(' keywords:',sorted(k for k in acc['kw'] if k))
    for nm,h,c in acc['info']: print('  link',nm,'HIDDEN' if h else '', ('| '+' / '.join(c)) if c else '')
    for t,ps in acc['prof'].items():
        print(f' {t}:')
        for pn,(txt,h,c) in ps.items(): print('   -',pn,'HIDDEN' if h else '','|',txt[:120], ('|| '+' / '.join(c)[:160]) if c else '')
