# bsdelta.py <bsdata-repo> <old-rev> <new-rev> [--json delta.json] [faction ...] : texts changed in BSData between two revisions, per catalogue
#   Use it to find what an official update changed: diff across the BSData commit that imported it.
import json,subprocess,sys,re,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from cfg import FACTIONS
argv=sys.argv[1:]
jout=None
if '--json' in argv: i=argv.index('--json'); jout=argv[i+1]; del argv[i:i+2]
repo,old,new=argv[:3]
only=argv[3:]
FILES=[fn for f,c in FACTIONS.items() if not only or f in only for fn in c['bsdata']]
OWNER={fn:f for f,c in FACTIONS.items() for fn in c['bsdata']}
DELTA={}
def texts(rev,fn):
    try: j=json.loads(subprocess.run(['git','-C',repo,'show',f'{rev}:{fn}'],capture_output=True,check=True).stdout)
    except Exception: return {}
    c=j.get('catalogue') or j; m={}
    def w(o,owner):
        if isinstance(o,dict):
            if 'description' in o and 'name' in o and isinstance(o['description'],str): m[('rule',o['name'])]=o['description']
            if o.get('typeName') and o.get('typeName') not in ('Unit','Ranged Weapons','Melee Weapons','Transport'):
                d=' '.join((ch.get('$text') or '') for ch in o.get('characteristics',[]) or [])
                m[('abil:'+o['typeName'],o['name'],owner)]=d
            own=o.get('name',owner) if o.get('type') in ('unit','model','upgrade') else owner
            for v in o.values(): w(v,own)
        elif isinstance(o,list):
            for v in o: w(v,owner)
    w(c,''); return m
for fn in FILES:
    a,b=texts(old,fn),texts(new,fn)
    ch=[k for k in b if k in a and re.sub(r'\s+',' ',a[k]).strip()!=re.sub(r'\s+',' ',b[k]).strip()]
    ad=[k for k in b if k not in a]; rm=[k for k in a if k not in b]
    DELTA.setdefault(OWNER[fn],set()).update(k[1] for k in ch+ad)
    print(f'\n=== {fn}: changed {len(ch)}, added {len(ad)}, removed {len(rm)}')
    for k in ch: print('  CHANGED',k[0],'|',k[1],'|',(k[2] if len(k)>2 else ''),'\n     was:',re.sub(r'\s+',' ',a[k])[:200],'\n     now:',re.sub(r'\s+',' ',b[k])[:200])
    for k in ad[:25]: print('  ADDED  ',k[0],'|',k[1],'|',(k[2] if len(k)>2 else ''),'|',re.sub(r'\s+',' ',b[k])[:140])
    for k in rm[:25]: print('  REMOVED',k[0],'|',k[1],'|',(k[2] if len(k)>2 else ''))
if jout: json.dump({f:sorted(v) for f,v in DELTA.items()},open(jout,'w'),ensure_ascii=False,indent=1); print('\nwrote',jout)
