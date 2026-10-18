---
paths:
  - "**/firebase.json"
  - "**/firestore.rules"
  - "**/storage.rules"
  - "**/deploy.sh"
  - "**/scripts/deploy*"
  - "**/.claude/enforcement.json"
  - "**/package.json"
  - "**/docs/subsystems.md"
  - "**/docs/adr/**"
---
# TMV App Professional Standards — Cross-Project

One place for the coding/tooling/testing standard that applies to every TMV
app (Training, Members, Payroll, and any future one). Add to this file
whenever a practice proves valuable on one app — don't wait to be asked
per-project. These are professional, business-used applications; the bar is
"would a paying customer's downtime or a lost record trace back to us
skipping this."

TMV-Members is the reference implementation for most of these — it's the
oldest, most heavily audited codebase and where each mechanism was proven out
before generalizing. When porting a mechanism to another project, adapt it to
that project's actual code (naming, file layout, CSS tokens, etc.) rather than
copying verbatim — see `~/.claude/rules/read-before-writing.md`.

## The nine mechanisms

**A. Rules made unauthorable, not just documented.** A convention written down
but not enforced drifts. Prefer: an import gateway that makes the wrong thing
impossible to write (e.g. no direct Firestore SDK import outside one
`firebase-config.js`), one constructor per component family instead of
copy-pasted markup, and a drift test (`*-drift.test.js`) pinning each one so a
regression fails CI/local tests, not just code review. Client/server constants
that must match (schema versions, enum values) get a `*-mirror.test.js`.
Server-owned fields (computed status, balances) are rejected on client write
by Firestore Rules, not just "no UI writes it."

**B. Hook gates.** A PreToolUse `docGate` blocking the first source edit until
the project's canonical docs are read; an `archPipeline` gate (architect →
implement → refactor-cleaner) for architecture shifts; a Stop `docCurrency`
gate nagging when source moved but no doc did. These already exist per-project
via `.claude/enforcement.json` + `~/.claude/scripts/hooks/enforce.js` — when
standing up a new project, port `enforcement.json`'s shape, don't invent a new
one.

**C. Testing discipline.** Typecheck always (if the project has one). Three
tiers minimum: unit (pure logic), rules (Firestore emulator), e2e (Playwright,
filtered to the specs that exercise the change — ALWAYS; the unfiltered suite
runs only when the user explicitly asks, never as a pre-deploy gate). Visual harnesses for any surface with meaningful visual state
an e2e assertion can't judge (notification tiers, popovers, drag states) — not
required for a project with no such surfaces yet, but wire it in
`enforcement.json` the day one is built. **Negative-control rule: a guard
isn't coverage until you've seen it go red.** When two local dev servers for
different TMV projects share emulator ports, they need a shared lock (see
Members' `scripts/e2e.sh` — port a compatible lock, don't let one project's
e2e run silently kill another's).

**D. Deploy safety.** Every Firebase app deploys through the shared core, `npm run deploy -- --only <targets>`
(`standard/deploy/` in claude-config, vendored by `sync.mjs` to `.claude/standard/deploy/`; design:
`docs/deploy-standard-design.md`). A project does not write a deploy script; it writes `deploy.config.mjs` (data and
named hook functions) and the core does by construction what each script used to be asked to do:
- ships `origin/main` fetched now, from a throwaway worktree, so nothing dirty or unpushed can ship (no dirty-tree or
  `HEAD == origin/main` gate, and no escape hatch) and it prints what is NOT shipping;
- always names its targets: no `--only`, bare `--only functions` and a bare `--only hosting` where a `firebase.json`
  declares several targets are refused (functions are `functions:name`, one by one; the global
  `~/.claude/scripts/hooks/enforce-scoped-function-deploy.js` still applies);
- cuts a counted release the app actually reads (`<siteRoot>/version.json`, `{ revision, date, commit }`, copies stamped
  from the one writer), committed as `chore: release N`, tagged `release-N`, pushed atomically with the branch;
- checks the live site afterwards (version, copies, header samples, private paths) and exits 2 with the rollback and
  `npm run deploy-check`;
- makes `firebase.json`'s `predeploy` a guard that refuses a hand-typed `firebase deploy`.
`npm run test:standard` holds the mirror (version file, copies, service-worker cache name, docs that hand out a command
the core refuses) and `sync.mjs --check` holds the wiring against hand reverts. A new app starts from this, not from a
copied script.

**D1. Firebase Hosting cache headers: revalidate, don't re-download (measured 2026-09-26, Training App).** First-party JS/CSS
served `no-store` is re-downloaded in full on every visit (918 KB → a cold boot every time). The fix is NOT plain
`no-cache`: Firebase's CDN answered every conditional request for a `no-cache` response with a full 200. Use
`public, max-age=0, must-revalidate` — same freshness (every use revalidates; a deploy purges the CDN), and the CDN
answers 304 (production: 236/236 files 304, ~71 KB vs ~918 KB). Verify with `curl -H 'If-None-Match: <etag>'`, not by
reading the header. `immutable` + long max-age only once file names are content-hashed. Applied and measured 304
on all three apps (Training, Members' staff app, Payroll), each pinned by a `tests/unit/hosting-cache-headers.test.js`
that refuses `no-store` and bare `no-cache`. A new TMV app starts with this rule and that test.

**D2. Before enforcing a field nothing has ever enforced, reconcile it first —
and measure, don't reason.** A denormalized field that no code checks will have
drifted from reality, so "start validating it" is a data migration wearing a
correctness fix's clothes. Order is: survey production → backfill → verify →
only then enforce, as its own commit. The tell that this is needed: the field
is a copy of something derivable from data the app already holds. Worked
example (Training App, 2026-09-23): enabling a per-user `disciplines` check
looked safe behind a "missing or empty means all" rule, and a read-only survey
of 26 user docs found **8 users who would have lost access to a discipline they
already had data in** — the field had drifted for years because nothing read
it. That inverted the rollout order. One throwaway script, before any code was
written, was the whole cost of catching it.

**E. The adversarial-audit practice.** This is the mechanism most worth
having and least likely to get invented ad hoc: derive the invariants a
subsystem should hold (from its docs + code, not assumptions) → trace each one
end-to-end through the real code → an adversarial prosecutor/skeptic panel
tries to refute each suspected finding → land a dated `docs/<subsystem>-audit.md`
with HIGH/MED/LOW confirmed findings → fix in the same session → an
independent re-verify pass against the *live* tree (not the audit doc's
claims) → retire into a `docs/audit-tracker.md` row. Re-verify routinely finds
"fixed" claims half-shipped — that's the check earning its keep, not a
formality. Every subsystem audited this way on Members has produced multiple
confirmed bugs nobody knew about. Run it on a new project's subsystems in
priority order (money/lifecycle/auth first) rather than waiting for a user
bug report.

Two handoff rules for the *fix* pipeline that follows an audit, both learned
the hard way on the Training App's execution-state audit (2026-09-22):
- **The architect's design outranks the audit report.** A real design pass
  routinely finds the report's suggested fix direction wrong (that run: 16
  corrections, including "a `_version` precondition does not prevent two
  runners — a lease does"). Implementer prompts must say the design wins on
  conflict, and must defer to the design's own scope split rather than a
  finding list written before the design existed — otherwise the prompts and
  the design disagree and you get both a coverage gap and duplicated work.
- **Revert an interrupted implementer's partial output before re-running it.**
  An agent stopped mid-task left a source file 234 lines into a migration.
  Back it up, restore the tree, then resume — a fresh implementer building on
  a half-migrated file is the patchwork failure mode, not a head start.

**F. ADR granularity.** One ADR per consolidation or reversal, however small
("a name and an age are one label" is a real ADR title on Members) —
superseding chains (`0107→0110`) instead of editing history. An ADR is
written *because* a drift test exists for the decision it records, not as a
substitute for one.

**G. `subsystems.md` as a test index, not just an inventory.** Owner /
Liveness / Read-paths columns per row, and the row should name the test that
pins its invariant where one exists. An owner-uniqueness check
(`scripts/audit-sweep.mjs`-style) validates every collection has exactly one
writer.

**H. Shipping cadence and commit hygiene.** Every logical change ships as its
own commit; a deploy gets its own `chore: release N` commit (cut, tagged `release-N` and pushed by `npm run deploy`, never by hand); a
multi-step initiative runs as named phases in commit messages (not one giant
commit). Small, frequent, reversible — never a week of uncommitted work.

**I. The redesign/UI standard**, once a project reaches that phase: a
read-only design-token reference the app's CSS is measured against (never
edited freestyle), every prototype built mobile-first before touching the
real app (`prototype-mobile-first` skill), one modal constructor / one
bottom-sheet host / one breakpoint module instead of scattered
implementations, WCAG measured (a real contrast check), not eyeballed.

## How to apply this without being asked

- **Starting a new project or onboarding an existing one to this standard**:
  work the doc-canon layer first (subsystems/architecture/data-flow/ADRs),
  then hook gates, then the testing tiers, then deploy safety, then start the
  audit practice on its highest-stakes subsystem. This mirrors the Training
  App roadmap's phase ordering (`docs/members-standard-roadmap.md` in that
  project) — reuse that ordering rather than re-deriving it per project.
- **A genuinely reusable, invocable mechanism** (not passive style guidance —
  something with actual steps to run) belongs in `~/.claude/skills/` as a
  GLOBAL skill, not copied per-project. `worklist` (live checklists) is
  already ported this way; `ship`, `firestore-change`, `firestore-rules`,
  `new-subsystem`, and the `audit-subsystem` workflow exist on Members and are
  candidates for the same global promotion the next time any of them would
  help on another project — port on first real use, don't pre-port
  speculatively.
- **A genuinely per-project artifact** (a drift test, an enforcement.json gate,
  a deploy guard script) has to live in that project's own codebase since it
  tests/guards that project's actual code — but the *template* for building
  one should come from the nearest existing example (usually Members) via
  read-before-writing, not reinvented from scratch each time.
- **When you find a new practice worth generalizing** (on any project, not
  just while doing a formal audit), add it here in the same session you find
  it — this file is the one place, not a todo to write it down "later."

## Related

- `~/.claude/rules/end-game-architecture.md`, `no-backward-compat.md`,
  `no-patchwork.md`, `single-source-of-truth.md` — the standing engineering
  discipline these mechanisms exist to make structural rather than aspirational.
- Project-specific status: each project's own `docs/backlog.md` (or
  equivalent gap-analysis doc) tracks where that project currently stands
  against this list — this file is the standard, not the per-project scoreboard.
