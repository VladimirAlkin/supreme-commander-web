# Rollback

First roll back, then investigate. Never force-push, never reset the branch:
`rules-fidelity-fix` is live.

## Whole patch

```bash
A=<anchor SHA from index.md>; Z=<last commit of the patch>
git revert --no-edit $A..$Z          # newest first, one revert commit each
```

## One army

```bash
git revert --no-edit <commit "patch(<id>): <army>">
```
If the patch had a fixtures+docs commit that mentions that army, revert or
adjust it too. A Space Marines pool commit also rolls back the Chapters.

## After either

```bash
npm run check
node tools/patch-snapshot.js /tmp/now.json.gz
node tools/patch-diff.js patches/work/<id>/before.json.gz /tmp/now.json.gz
#   whole patch: 0 changed rows except versions
#   one army:    no rows for that army
node tests/rosters.test.js --update   # points back to the old values
node tools/release.js && git push && node tools/check-live.js
```
`factionVersions` after a revert go back to the old values: a roster saved
during the patch will show "older data version" — correct, its points changed.

Status in `index.md`: `откатан` or `откатан частично (<armies>)`. The cause
goes to the owner as a report; the fix comes as the next patch.
