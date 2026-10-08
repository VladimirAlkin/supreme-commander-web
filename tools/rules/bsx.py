# bsx.py <bsdata_dir> <out.json>: per faction, verbatim texts from BSData 11e
#   rules[name] (army + detachment rules), abil[name] -> [{owner, text}] (all Abilities profiles),
#   units[unitName] -> {abilityName: text} (unit's own profiles, crusade/enhancement groups skipped)
import json,sys,os,re
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from cfg import FACTIONS
root,out=sys.argv[1],sys.argv[2]
CAT={f:c['bsdata'] for f,c in FACTIONS.items()}
SKIP=re.compile(r'crusade|battle (honou?r|trait|scar)|weapon modification|relic|tyrannic|monster hunter|behemoth|upgrade path|warlord trait',re.I)
IDX={}
def index(o):
    if isinstance(o,dict):
        if 'id' in o: IDX.setdefault(o['id'],o)
        for v in o.values(): index(v)
    elif isinstance(o,list):
        for v in o: index(v)
cats={}
for fn in os.listdir(root):
    if fn.endswith('.json'):
        j=json.load(open(os.path.join(root,fn))); c=j.get('catalogue') or j.get('gameSystem'); cats[fn]=c; index(c)
def desc(p): return ' '.join((ch.get('$text') or '') for ch in p.get('characteristics',[]) or [] if ch.get('name')=='Description').strip()
res={}
for f,fns in CAT.items():
    R={'rules':{},'abil':{},'units':{}}
    def walk_all(o,owner):
        if isinstance(o,dict):
            nm=o.get('name',owner) if o.get('type') in ('unit','model','upgrade') or 'selectionEntries' in o else owner
            if 'description' in o and 'name' in o and isinstance(o['description'],str): R['rules'].setdefault(o['name'],o['description'])
            if o.get('typeName')=='Abilities': R['abil'].setdefault(o.get('name'),[]).append({'owner':owner,'text':desc(o)})
            for k,v in o.items(): walk_all(v, o.get('name',owner) if k in ('profiles','rules') else owner)
        elif isinstance(o,list):
            for v in o: walk_all(v,owner)
    miss=[fn for fn in fns if fn not in cats]
    if miss: sys.exit(f'{f}: BSData catalogue(s) not found: {miss} — fix factions.json')
    for fn in fns: walk_all(cats[fn],'')
    def unit_abil(n,acc,depth=0,seen=None):
        seen=seen if seen is not None else set()
        if not isinstance(n,dict) or depth>5 or id(n) in seen: return
        if depth>0 and SKIP.search(n.get('name','')): return
        seen.add(id(n))
        for p in n.get('profiles',[]) or []:
            if p.get('typeName')=='Abilities' and depth<=3: acc.setdefault(p['name'],desc(p))
        for il in n.get('infoLinks',[]) or []:
            if il.get('type')=='profile' and depth<=2:
                t=IDX.get(il.get('targetId'),{})
                if t.get('typeName')=='Abilities': acc.setdefault('LINK:'+t['name'],desc(t))
        for k in ('selectionEntries','selectionEntryGroups','entryLinks'):
            for ch in n.get(k,[]) or []:
                if k=='entryLinks':
                    if SKIP.search(ch.get('name','')): continue
                    unit_abil(IDX.get(ch.get('targetId'),{}),acc,depth+1,seen)
                else: unit_abil(ch,acc,depth+1,seen)
    for fn in fns:
        for k in ('sharedSelectionEntries','selectionEntries'):
            for e in cats[fn].get(k,[]) or []:
                if e.get('type') in ('unit','model') and e.get('name') not in R['units']:
                    acc={}; unit_abil(e,acc); R['units'][e['name']]=acc
    res[f]=R
    print(f,'rules',len(R['rules']),'abil names',len(R['abil']),'units',len(R['units']))
json.dump(res,open(out,'w'),ensure_ascii=False,indent=0)
