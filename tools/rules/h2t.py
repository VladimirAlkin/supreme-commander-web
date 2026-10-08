# Wahapedia HTML -> plain rules text (list of lines). Handles nested tables, fluff, headings, lists, images.
from html.parser import HTMLParser
import re
FLUFF=re.compile(r'ShowFluff|legend2|tooltip_templates|ttCheck')
class _P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.bufs=[[]]; s.rows=[]; s.skip=0; s.img=False; s.tags=[]
    def w(s,x): s.bufs[-1].append(x)
    def handle_starttag(s,t,a):
        c=dict(a).get('class') or ''
        void=t in('br','img','hr','input','meta')
        if s.skip:
            if not void: s.skip+=1
            return
        if FLUFF.search(c) and not void: s.skip=1; return
        if t=='img': s.img=True; s.w('[[IMG]]'); return
        if t=='br': s.w('\n'); return
        if t=='li': s.w('\n■ '); return
        if t=='tr': s.rows.append([]); return
        if t in('td','th'): s.bufs.append([]); return
        heading=(t=='p' and 'impact18' in c) or (t=='span' and 'hi_custom' in c)
        if heading: s.bufs.append([]); s.tags.append('H'); return
        if t in('p','div','ul','ol','table','tbody'): s.w('\n')
        s.tags.append(t)
    def handle_endtag(s,t):
        if s.skip:
            s.skip-=1; return
        if t in('td','th'):
            if len(s.bufs)>1 and s.rows: s.rows[-1].append(''.join(s.bufs.pop()))
            return
        if t=='tr':
            if not s.rows: return
            cells=[re.sub(r'\s+',' ',x).strip() for x in s.rows.pop()]
            cells=[x for x in cells if x]
            if not cells: return
            letters=[x for x in cells if re.search('[A-Za-z]',x)]
            if len(cells)>1 and letters and all(x==x.upper() for x in letters) and not any(re.search(r'\d',x) for x in cells): return  # header row
            if len(cells)==1: s.w('\n'+cells[0]+'\n')
            else: s.w('\n■ '+(': '.join(cells) if len(cells)==2 else ' – '.join(cells))+'\n')
            return
        if s.tags and s.tags[-1]=='H' and t in('p','span'):
            s.tags.pop(); txt=re.sub(r'\s+',' ',''.join(s.bufs.pop())).strip().rstrip(':')
            if txt: s.w('\n'+txt.upper()+': ')
            return
        if t in('p','div','ul','ol','table','li'): s.w('\n')
        if s.tags and s.tags[-1]==t: s.tags.pop()
    def handle_data(s,d):
        if not s.skip: s.w(d)
def h2lines(src):
    p=_P(); p.feed(str(src or '')); 
    while len(p.bufs)>1: p.bufs[-2].extend(p.bufs.pop())
    raw=''.join(p.bufs[0]).replace('\xa0',' ')
    lines=[re.sub(r'[ \t]+',' ',l).strip() for l in raw.split('\n')]
    out=[]
    for l in lines:
        if not l: continue
        if out and re.search(r'[A-Z0-9’\'\)\]] ?:$',out[-1]) and re.match(r'^[A-Z][A-Z0-9’\'\-\(\)\[\] ]+:$',out[-1].split('. ')[-1].strip()):
            out[-1]=out[-1]+' '+l
        else: out.append(l)
    return out, p.img
def h2t(src): return ' '.join(h2lines(src)[0]).strip()
