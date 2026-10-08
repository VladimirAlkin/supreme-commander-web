# Shared config for the rules-text pipeline: everything army-specific lives in
# factions.json and overrides.json, never in the scripts.
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
def _load(n): return {k: v for k, v in json.load(open(os.path.join(HERE, n), encoding='utf-8')).items() if not k.startswith('_')}
FACTIONS = _load('factions.json')
OVERRIDES = _load('overrides.json')
def pack_ahead(f):
    c = FACTIONS[f]; return c.get('packVersion') != c.get('wahapediaVersion')
