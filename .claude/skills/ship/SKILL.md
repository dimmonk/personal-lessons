---
name: ship
description: Pull cloud/mobile work and deploy it from this desktop. Use when the user says "ship", "ship it", "deploy", "deploy what's pending", "what's undeployed", or asks to get work done in a phone/web/cloud session onto production. Lists undeployed commits and unmerged branches, merges what is ready, runs the tests, deploys, and commits the deploy stamp.
---

# ship

One command to get cloud-session work onto production. The user is on their
desktop; the work was written elsewhere (phone, web, a cloud session) and lives
on GitHub. Git is the handoff — nothing else transfers.

**Global skill — works the same way across every project.** What differs per
project (test commands, deploy command, stamp file(s), hosting target names,
known pre-existing failures) is never hardcoded here: read it fresh from that
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

The deploy stamp only moves on a HOSTING deploy, so "0 undeployed commits" says
nothing about functions or rules. Never report production current from that
line alone — a project can look current on the stamp while Cloud Functions
still run old code.

`status.sh` auto-detects the deploy-stamp file from a short candidate list. If
it reports it can't find one, check this project's deploy script for the file
it actually writes and re-run with `--stamp-file <path>`.

## 2. Merge anything still on a branch

For each unmerged branch, check CI before merging:

```bash
gh pr list --head <branch> --state open
gh pr checks <pr-number>
```

- Green → merge it (`gh pr merge <n> --merge`).
- Red → **check whether `main` fails the same way** before treating it as this
  branch's problem: `gh run list --branch main --limit 3`, then compare the
  failing test. A failure already present on `main` — and already documented
  as a known issue in this project's own docs/CLAUDE.md — is pre-existing and
  not a blocker for shipping. A failure unique to the branch, or one you can't
  confirm is the same pre-existing failure, is — stop and tell the user.
- No PR for the branch → list it, ask before merging.
- No CI configured for this repo → `gh pr checks` reports nothing; treat the
  branch as unverified rather than merging blind, and say so.

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

Use **this project's own canonical deploy command** — check its CLAUDE.md /
package.json first; never assume a name or run the underlying deploy tool
(e.g. `firebase deploy`) directly if the project wraps it. A wrapper script
commonly exists to stamp a version file, refuse a dirty tree, or trigger an
in-app update notice — bypassing it loses whatever it does.

If the deploy targets a hosting provider that supports multiple named
targets (e.g. Firebase Hosting with more than one entry in `firebase.json`), a
bare "deploy hosting" call can deploy **every** target declared, not just the
one intended — check for more than one target before assuming a hosting
deploy only touched the site you meant, and name the target explicitly when
the project has more than one.

Functions and rules deploy separately and scoped: a single named function
(never a bare functions deploy that redeploys everything), rules-only when
only rules changed. `status.sh` / `functions-status.py`'s report names
exactly which functions are stale and prints the scoped command to redeploy
them.

If it fails on auth, the desktop is not logged in — log in with this
project's provider CLI (e.g. `firebase login`).

## 5. The release commit

A counted-release deploy script (TMV-Members, TMV Training, TMV-Payroll, Rentals:
`npm run deploy` / `./deploy.sh`) cuts the release itself: it writes the version
file, commits it as `chore: release N`, pushes it and fast-forwards your checkout.
Then there is nothing to commit; if the script says your checkout is not at the
release commit, `git pull`.

Only a project whose deploy script writes a stamp without committing it needs a
commit here. Commit exactly the file(s) it wrote, or the next deploy trips the
dirty-tree guard:

```bash
git add <the stamp file(s) the deploy script wrote>
git commit -m "chore: release <N>"
git push
```

A functions- or rules-only deploy is not a release and writes no stamp. The last
release commit is what lets the *next* run of this skill tell what is deployed.

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
- If the user wants merging to deploy automatically, that is a CI workflow
  change (e.g. a GitHub Actions job on push to `main` with a deploy token in
  repo secrets) — a change to the project's deploy security posture. Propose,
  do not build it unasked.
- Per-project specifics (test commands, deploy command, stamp file(s),
  hosting target names, any currently-known pre-existing test failures) live
  in that project's own CLAUDE.md/docs. This skill reads them fresh each run
  instead of caching them here, so it stays correct as those projects change
  and works unmodified on a project it has never run against before.
