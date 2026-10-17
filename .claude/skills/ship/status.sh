#!/bin/bash
# Report what work exists that production does not have.
#
# "Deployed" is defined by the deploy stamp: this project's deploy script
# rewrites a small build/version file on every hosting deploy, and the
# operator commits it (typically as "chore: bump deploy stamp (...)"). So the
# last commit touching that file IS the last deploy, and anything on main
# after it is unshipped.
#
# The stamp file's path differs per project — there is no universal name
# across TMV apps. This script tries a short list of common locations and
# uses the first one whose git history is non-empty; pass
# `--stamp-file <path>` (relative to the repo root) to override when a
# project's actual stamp file isn't in the candidate list below.
#
# That stamp covers HOSTING only. Cloud Functions and Firestore rules deploy
# separately and write nothing to git, so functions-status.py checks them
# against production directly (needs gcloud credentials).
#
# Read-only. Prints a report and exits; never merges, deploys or writes.
set -u

cd "$(git rev-parse --show-toplevel)" || exit 1

STAMP_FILE_OVERRIDE=""
if [ "${1:-}" = "--stamp-file" ] && [ -n "${2:-}" ]; then
  STAMP_FILE_OVERRIDE="$2"
fi

echo "Fetching..."
git fetch --all --prune --quiet 2>&1 | grep -v '^$' || true
echo

# Candidate deploy-stamp files. Add a project's actual stamp file here once
# it's confirmed, or pass --stamp-file to override without editing this list.
#
# Selection is by MOST RECENTLY COMMITTED, not by list order, and a candidate
# that no longer exists in the tree is skipped. Order-based selection picked a
# same-named decoy on TMV-Members: `public/version.json` was a dead file from a
# backup import with one commit (Jan 2) and no readers or writers, while the
# real stamp — `public/js/foundation/version.js`, rewritten by the deploy's own
# predeploy hook every single time — sat second in the list. Result: the last
# deploy resolved to the initial commit and the tool reported 3,137 undeployed
# commits. A deploy stamp is by definition the file that MOVES on every deploy,
# so recency is the signal; a name is only a hint.
CANDIDATES=(
  "public/js/foundation/version.js"
  "public/version.json"
  "public/version.js"
  "src/version.json"
  "version.json"
)

STAMP_FILE=""
STAMP=""
if [ -n "$STAMP_FILE_OVERRIDE" ]; then
  STAMP_FILE="$STAMP_FILE_OVERRIDE"
  STAMP=$(git log -1 --format=%H -- "$STAMP_FILE")
else
  BEST_TS=0
  for f in "${CANDIDATES[@]}"; do
    # A deleted file is not this project's stamp, whatever its history says.
    [ -f "$f" ] || continue
    h=$(git log -1 --format=%H -- "$f")
    [ -n "$h" ] || continue
    ts=$(git log -1 --format=%ct -- "$f")
    if [ "${ts:-0}" -gt "$BEST_TS" ]; then
      BEST_TS="$ts"
      STAMP_FILE="$f"
      STAMP="$h"
    fi
  done
fi

if [ -z "$STAMP" ]; then
  echo "!! No deploy-stamp commit found (tried: ${CANDIDATES[*]})."
  echo "!! Cannot tell what is deployed from git history alone."
  echo "!! Check this project's deploy script for the file it writes, then re-run:"
  echo "!!   bash $0 --stamp-file <path/from/repo/root>"
  exit 1
fi

echo "LAST DEPLOY  (stamp file: $STAMP_FILE)"
git --no-pager log -1 --format='  %h  %ad  %s' --date=short "$STAMP"
echo

echo "UNDEPLOYED ON main"
COUNT=$(git rev-list --count "$STAMP"..origin/main)
if [ "$COUNT" -eq 0 ]; then
  echo "  (nothing — production is current)"
else
  git --no-pager log --format='  %h  %ad  %s' --date=short "$STAMP"..origin/main
fi
echo

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
  echo "  tree:    DIRTY — deploy will refuse (if this project's deploy script guards on it). Files:"
  echo "$DIRTY" | sed 's/^/             /'
else
  echo "  tree:    clean"
fi
echo "  summary: $COUNT undeployed commit(s) on main"
