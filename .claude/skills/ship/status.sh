#!/bin/bash
# Report what work exists that production does not have.
#
# "Deployed" is defined by the release tags: `npm run deploy` (the shared deploy standard, claude-config/standard/deploy)
# cuts every hosting release as one commit `chore: release N`, tags it `release-N` and pushes both together. So the
# highest `release-N` tag on origin IS the last deploy, and anything on main after it is unshipped:
#   git log release-N..origin/main
# The release file `<siteRoot>/version.json` ({ revision, date, commit }) is what ships and what clients read; the tag is
# derived from it by the same writer in the same push, so the two must agree, and this reports when they do not.
#
# That covers HOSTING only. Cloud Functions and Firestore rules deploy separately and write nothing to git, so
# functions-status.py checks them against production directly (needs gcloud credentials).
#
# Read-only. Prints a report and exits; never merges, deploys or writes.
set -u

cd "$(git rev-parse --show-toplevel)" || exit 1

echo "Fetching..."
git fetch --all --prune --tags --quiet 2>&1 | grep -v '^$' || true
echo

# The highest release-N tag, numerically (not alphabetically: release-9 sorts after release-10 as text).
TAG_N=$(git tag --list 'release-*' | sed -n 's/^release-\([0-9][0-9]*\)$/\1/p' | sort -n | tail -1)

if [ -z "$TAG_N" ]; then
  echo "!! No release-N tag found. This project has not adopted the shared deploy standard,"
  echo "!! so git cannot say what is deployed. Seed the tag at the commit that is live, then re-run:"
  echo "!!   git tag release-<N> <commit> && git push origin release-<N>"
  exit 1
fi
STAMP="release-$TAG_N"

echo "LAST DEPLOY  ($STAMP)"
git --no-pager log -1 --format='  %h  %ad  %s' --date=short "$STAMP"
echo

# The release file(s) at origin/main: revision must equal the highest tag, or the counter guard will refuse the next cut.
VERSION_FILES=$(git ls-tree -r --name-only origin/main 2>/dev/null | grep -E '(^|/)version\.json$' | grep -v node_modules || true)
for f in $VERSION_FILES; do
  REV=$(git show "origin/main:$f" 2>/dev/null | python3 -c 'import json,sys
try:
    d=json.load(sys.stdin)
    print(d["revision"] if list(d.keys())==["revision","date","commit"] else "")
except Exception:
    print("")')
  [ -n "$REV" ] || continue
  if [ "$REV" = "$TAG_N" ]; then
    echo "  $f: revision $REV (matches $STAMP)"
  else
    echo "  !! $f: revision $REV but the highest tag is $STAMP — a rewound file or a release commit that lost its tag; the next deploy will refuse"
  fi
done
echo

echo "UNDEPLOYED ON main"
COUNT=$(git rev-list --count "$STAMP"..origin/main)
if [ "$COUNT" -eq 0 ]; then
  echo "  (nothing — production is current)"
else
  git --no-pager log --format='  %h  %ad  %s' --date=short "$STAMP"..origin/main
fi
echo

# What the sites serve right now: each release line's origin in deploy.config.mjs, its /version.json. Best effort.
if [ -f deploy.config.mjs ]; then
  LIVE=$(node --input-type=module -e "
    const { default: config } = await import(process.cwd() + '/deploy.config.mjs');
    for (const [key, line] of Object.entries(config.releases)) console.log(key + ' ' + line.origin);
  " 2>/dev/null || true)
  if [ -n "$LIVE" ]; then
    echo "LIVE  (/version.json of each release line)"
    printf '%s\n' "$LIVE" | while read -r KEY ORIGIN; do
      BODY=$(curl -fsS --max-time 8 "$ORIGIN/version.json" 2>/dev/null || true)
      LIVE_REV=$(printf '%s' "$BODY" | python3 -c 'import json,sys
try: print(json.load(sys.stdin)["revision"])
except Exception: print("?")')
      echo "  $KEY  $ORIGIN  revision $LIVE_REV"
    done
    echo
  fi
fi

python3 "$(dirname "$0")/functions-status.py" || echo "  !! functions/rules check crashed — check them by hand"
echo

echo "UNMERGED REMOTE BRANCHES"
FOUND=0
for b in $(git branch -r --no-merged origin/main 2>/dev/null | grep -v 'HEAD' | tr -d ' '); do
  n=$(git rev-list --count origin/main.."$b" 2>/dev/null) || continue
  [ "${n:-0}" -gt 0 ] || continue
  LAST_AT=$(git log -1 --format='%ad' --date=short "$b")
  echo "  $b  (+$n, last $LAST_AT)"
  git --no-pager log --format='      %h %s' origin/main.."$b" | head -5
  FOUND=1
done
[ "$FOUND" -eq 0 ] && echo "  (none)"
echo

echo "LOCAL STATE"
echo "  branch:  $(git rev-parse --abbrev-ref HEAD)"
DIRTY=$(git status --porcelain --untracked-files=no)
if [ -n "$DIRTY" ]; then
  echo "  tree:    DIRTY (npm run deploy ships origin/main from its own worktree, so this does not block it). Files:"
  echo "$DIRTY" | sed 's/^/             /'
else
  echo "  tree:    clean"
fi
echo "  summary: $COUNT undeployed commit(s) on main"
