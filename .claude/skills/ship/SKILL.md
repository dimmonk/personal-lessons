---
name: ship
description: Pull cloud/mobile work and deploy it from this desktop. Use when the user says "ship", "ship it", "deploy", "deploy what's pending", "what's undeployed", or asks to get work done in a phone/web/cloud session onto production. Lists undeployed commits and unmerged branches, merges what is ready, runs the tests and deploys with the project's `npm run deploy`, which cuts, tags and pushes the release itself.
---

# ship

One command to get cloud-session work onto production. The user is on their
desktop; the work was written elsewhere (phone, web, a cloud session) and lives
on GitHub. Git is the handoff — nothing else transfers.

**Global skill — works the same way across every project.** What differs per
project (test commands, hosting target names, known pre-existing failures) is
never hardcoded here: read it fresh from that
project's own CLAUDE.md / package.json / deploy script every run, per
`~/.claude/rules/read-before-writing.md`. Don't assume one project's layout
carries over to the next — check.

Be terse. Report state in short lists, not prose. This user does not want
explanation unless something is wrong.

## 1. Report what is pending

```bash
bash ~/.claude/skills/ship/status.sh
```

Shows the last deploy, undeployed commits on `main`, Cloud Functions and
Firestore rules that production is behind on, unmerged remote branches, and
whether the local tree is clean. **Always run this first and show the
output**, even if the user asked to deploy directly — they need to see what is
about to ship.

If it reports 0 undeployed commits, all functions current, rules current and no
unmerged branches: say "production is current", stop. Nothing to do.

"Deployed" is a git question: every hosting release is a commit `chore: release N`
tagged `release-N`, so the highest `release-N` tag on origin is the last deploy and
`git log release-N..origin/main` lists what is undeployed. `status.sh` reads those
tags, cross-checks them against the release file `<siteRoot>/version.json`
(`{ revision, date, commit }`, served at `/version.json`) and prints what each site
serves now. A file and a tag that disagree are flagged: the next deploy will refuse
until they are reconciled.

The tags only move on a HOSTING deploy, so "0 undeployed commits" says nothing about
functions or rules. Never report production current from that line alone — a project
can look current on its tags while Cloud Functions still run old code.

If `status.sh` finds no `release-N` tag, the project has not adopted the shared
deploy standard (`standard/deploy` in claude-config, run as `npm run deploy`);
say so and stop rather than guessing from some other file.

## 2. Merge anything still on a branch

There is no GitHub CI on any project, so verify each unmerged branch locally:
check it out, run the tests, and merge it if they pass.

- Red → **check whether `main` fails the same way** before treating it as this
  branch's problem: run the same test on `main` and compare. A failure already
  present on `main` — and already documented as a known issue in this
  project's own docs/CLAUDE.md — is pre-existing and not a blocker for
  shipping. A failure unique to the branch, or one you can't confirm is the
  same pre-existing failure, is — stop and tell the user.

Skip this step entirely if everything is already on `main`.

## 3. Sync and test

```bash
git checkout main && git pull
npm ci                  # only if node_modules is stale or package-lock changed
```

Then run **this project's own test tiers** — read its CLAUDE.md /
`package.json` scripts for the actual command names; there is no universal
`test:unit` / `test:e2e` naming across projects. Typical shape: typecheck (if
the project has one) → unit → Firestore-rules tier (if the project is
Firestore-backed) → the full e2e suite, since e2e is usually the project's own
documented pre-deploy gate. Run the full suite, not just the touched spec,
unless the user says otherwise.

### Known failures — verify before waving through, don't invent

Only skip a failing test if this project's own docs currently list it as a
known, still-matching pre-existing failure. Verify it's still the *same*
failure (same test, same assertion) before waving it through — a "known"
failure that has since changed shape is a regression, not the known issue.
Any other failing test stops the deploy — report it and stop.

## 4. Deploy

Every Firebase project deploys with the shared command, `npm run deploy -- --only
<targets>` (`.claude/standard/deploy/`, configured by the project's
`deploy.config.mjs`). Never run `firebase deploy` directly: the project's
`firebase.json` predeploy guard refuses it, and it would skip the count, the
commit, the tag and the live check. The command ships `origin/main` from a
throwaway worktree, so nothing unpushed or uncommitted in this checkout ships; it
prints what is NOT shipping before it starts.

`--only` is mandatory and names targets: `hosting:<name>` (or bare `hosting` in a
one-site project), `functions:<name>`, `firestore:rules`, `firestore:indexes`,
`storage`. A run releases at most one hosting target; named functions, rules,
indexes and storage can share its list. Read the accepted names from the usage the
command prints when it refuses a list, or from the project's CLAUDE.md.

Functions and rules deploy separately and scoped: a single named function
(never a bare functions deploy that redeploys everything), rules-only when
only rules changed. `status.sh` / `functions-status.py`'s report names
exactly which functions are stale and prints the scoped command to redeploy
them.

If it fails on auth, the desktop is not logged in — log in with this
project's provider CLI (e.g. `firebase login`).

## 5. The release commit and tag

`npm run deploy` cuts the release itself: it writes `<siteRoot>/version.json`,
stamps the project's declared copies, commits them alone as `chore: release N`,
tags the commit `release-N`, pushes branch and tag together and fast-forwards
your checkout. There is nothing to commit here, ever. If it says your checkout is
not at the release commit, `git pull`.

A failure after the push (an upload, or a hook that runs before it) leaves the
release commit and tag standing: the message says so and gives `npm run
deploy-check -- <target> N`, which tells whether release N went live; if not, the
next run cuts the next revision. A failed live check exits 2 with the console
rollback and the command to re-check the previous revision (`npm run deploy-check
-- <target> N-1`); if the CDN was only slow, re-check N itself instead of rolling
back. A functions- or rules-only deploy is not a release: no count, no commit,
no tag. The highest `release-N` tag is what lets the *next* run of this skill tell
what is deployed.

## 6. Report

Four lines max:
- what shipped (commit subjects)
- test result
- deploy result
- anything the user should eyeball in the running app

## Notes

- Deploys only work where this project's provider credentials are.
  Cloud/remote sessions typically have none — if this skill is running in
  one, say so and stop at step 3 rather than failing at step 4.
- Deploys run from the Mac only. Never add GitHub Actions or any other CI to
  test or deploy; Steven turned it off on every repo.
- Per-project specifics (test commands, hosting target names, any
  currently-known pre-existing test failures) live in that project's own
  CLAUDE.md/docs. This skill reads them fresh each run
  instead of caching them here, so it stays correct as those projects change
  and works unmodified on a project it has never run against before.
