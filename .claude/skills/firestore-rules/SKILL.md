---
name: firestore-rules
description: Use when writing or editing firestore.rules, or any time a change adds/changes who can read or write a Firestore collection. Global skill, not tied to one app: encodes the emulator-backed test:rules workflow and rules conventions common across the TMV apps, plus a step to check this project's own backlog/ADRs for known pitfalls (seeded with real worked examples for calibration). Always pair a rules change with a rules-test case covering both the allow and the deny path.
origin: tmv-members
---

> **Recommended model:** Sonnet 5 — rules + emulator-backed test flow is everyday, mechanical coding, the floor tier per `~/.claude/rules/performance.md`.

# Firestore Security Rules

This is a global skill — the loop below is the same in every project; the specifics (helper-function names, doc paths, deploy command) belong to whichever project you're in and must be read, not assumed. Single source of truth for the rules surface is this project's `firestore.rules` at the repo root. Tests live under this project's rules-test directory — commonly `tests/rules/*.test.js`, sometimes flatter as `tests/*.test.js` — and run against the Firestore emulator via `npm run test:rules`. Check `docs/patterns/` for this project's canonical rules-test pattern doc (commonly named `rules-test.md`) before writing a new test file.

## The non-negotiable loop

Every rules change follows this, in order:

1. **Find the collection in this project's `docs/subsystems.md`** — know which subsystem owns it and its atomicity guarantees BEFORE changing access.
2. **Edit `firestore.rules`** — match the existing helper-function style already in the file (e.g. an `isAdmin()` / `isCoach()` / `isAdminOrCoach()`, a per-discipline claim helper like `hasDiscipline()`). Don't inline a condition an existing `function` already expresses.
3. **Add/extend a rules test case** — both the ALLOW path and the DENY path. A rules change with no test is incomplete. Follow this project's rules-test pattern doc for the file layout and test-context shape.
4. **Run `npm run test:rules`** — the emulator spins up automatically; it requires Java 11+. Report the pass count.
5. **Deploy rules** with this project's scoped rules-deploy command — commonly `npm run deploy -- --only firestore:rules` or `firebase deploy --only firestore:rules` (check `package.json` / `CLAUDE.md` for the exact form; never a bare full deploy for a rules-only change). Don't ask first — it's the obvious unblock once tests pass.

If the change **tightens** an existing Rule (rather than adding a new one), check this project's `docs/adr/` for a documented tighten-sequencing discipline first — a Rule that newly denies existing client behavior can lock out every connected user within seconds of deploy, with no feature flag or canary to fall back on. The safe order is: make clients respect the future shape → ship that → verify the future Rule in the emulator → then deploy the Rule. (TMV Training App writes this up as an ADR; other projects may not have it written down yet, but the risk is identical either way — treat it as the default discipline for any tightening change regardless of whether an ADR says so.)

## Pitfalls — check this project's own history first

Before writing the change, check this project's own `docs/backlog.md` and `docs/adr/` for known pitfalls in the subsystem you're touching — every TMV app accumulates project-specific gotchas there (a field that's server-owned and must never gain a second writer, a collection that's append-only and must stay closed to client writes, a claim that's easy to get backwards). Don't assume one project's pitfall list carries over to another — go look at this project's own docs before writing the change.

**Worked examples, for calibration** — real findings from a TMV Training App rules audit (2026-09-15). These are illustrations of the *kind* of bug class to watch for, not a checklist to run against every project:

- **A Rules helper gating writes on a Custom Claim failed open on a missing/malformed claim.** `hasDiscipline()` treated an absent claim as grandfathered-in rather than denying. A helper gating writes must fail *closed* on an absent or malformed claim, not treat absence as grandfathered-in, unless there's a documented, time-bounded migration reason — and even then, verify that reason is still needed before trusting it.
- **One branch of an `allow create`/`update` OR-chain was validated field-by-field; a sibling branch wasn't.** A `users/{userId}` create rule's coach-branch allowed setting an arbitrary `uid` field and an unenumerated status string, while another branch in the same rule was tightly constrained. A rule that validates one branch's fields but not another's creates an asymmetric escalation path — check EVERY branch of an `allow create`/`update` OR-chain for the same field-level rigor, not just the branch you're currently editing.
- **`allow write` bundling create+update+delete behind a `fieldsValid(request.resource.data)`-style check silently denies every DELETE.** `request.resource` is `null` on delete, so a validity check written with create/update in mind fails delete unconditionally. Split create/update from delete whenever a fields-valid-style check is involved. This shipped broken to production because no rules test exercised delete on that path — only setDoc/create tests existed — which is also the reason every new branch needs both an ALLOW and a DENY test, and a delete test wherever delete is a real operation on that path.

## Verify after deploy

"Deploy complete" can lie. After deploying rules, confirm the live behavior — a quick read/write against the deployed rules, or re-run the relevant `test:rules` case against the live project if warranted.

## Scope note

This skill is rules-only. For a broader Firestore data-shape change (new collection, schema bump, write path), use the `firestore-change` skill, which covers the write/atomicity side.
