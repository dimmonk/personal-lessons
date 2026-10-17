---
name: firestore-change
description: Use BEFORE writing any Firestore data change — a new collection, a new field, a schema bump, or a new/edited write path (set/update/transaction/batch). Enforces a read-the-inventory -> match-atomicity-pattern -> test sequence. Global skill, not tied to one app: works in any project that keeps a docs/subsystems.md-style canon (all three TMV apps qualify) — it reads that project's own docs rather than assuming one app's file layout. For access/permission (Rules) changes use the firestore-rules skill instead.
origin: tmv-members
---

> **Recommended model:** Sonnet 5 — this is procedural, mechanical work (read inventory → match pattern → test), the floor tier per `~/.claude/rules/performance.md`. Step up only if the subsystem itself is unusually high-stakes (money / lifecycle) per that file's finder-tier guidance.

# Firestore Data Change

This is a global skill — the sequence below is the same in every project, but every doc reference in it is a *description of what to look for*, not a hardcoded path. Pattern-doc filenames differ per project: TMV Training App's schema pattern is `docs/patterns/schema-versioning.md`, not `schema.md`, and it has no audit-log pattern at all since it has no audit-log subsystem. Always check what a project's `docs/patterns/` directory actually contains before assuming a doc exists — don't carry over another project's file names.

Firestore writes are typically an app's highest-risk change type. Static reasoning misses transition-invariant bugs, and parallel writers of server-owned fields are a recurring failure mode across every TMV app audited so far. Follow this sequence; do not skip step 1.

## The sequence

1. **Find the collection/subsystem in this project's `docs/subsystems.md`.** Identify its owner, its atomicity guarantee (TX vs batch vs single write), and whether the field you're touching is server-owned. Do NOT invent a new collection or field if an existing system already tracks the concept — that's the single-source-of-truth rule (`~/.claude/rules/single-source-of-truth.md`), and parallel collections tracking the same concept are exactly what has burned these apps before.

2. **Match the existing write pattern.** Look in this project's `docs/patterns/` for the doc that matches what you're writing. The concepts recur across TMV projects even where the filenames don't:
   - a **service-module** pattern — the client-side write path for a collection family
   - a **schema-versioning** pattern — schema shape + version-constant bumps (seen as both `schema.md` and `schema-versioning.md` across projects — don't guess, look)
   - a **cloud-function** pattern — server-side / trigger writes
   - a **listener** pattern — the read/listener side
   - an **audit-log write** pattern, but *only* if this project actually has an audit-log subsystem — check `docs/subsystems.md` first; a project can legitimately have none of this pattern (e.g. Training App, whose data model is state-based rather than event-sourced)

   If nothing in `docs/patterns/` matches, the nearest sibling pattern (or the canonical example file it points at) is the fallback — check `docs/adr/` for why the existing shape looks the way it does before inventing a new one.

3. **Respect atomicity.** If the subsystem guarantees a transaction, do all reads before any writes — reads-after-writes inside a `runTransaction` is a real, recurring bug class (Members' waiver-family withdraw/restore bugs are the canonical example). Don't silently downgrade a TX path to a batch or to loose writes; if the atomicity guarantee genuinely needs to change, update `docs/subsystems.md`'s Atomicity column in the same change.

4. **Don't second-write server-owned fields.** Check `docs/subsystems.md`'s Owner column and this project's ADRs for which fields on the subsystem you're touching are server-owned / computed (Members: `accountStatus`, `activeMemberships`, `activePassBundles` — every project has its own set, shaped by its own lifecycle; look, don't assume the same names apply). New features store feature-specific metadata only; they don't re-derive or re-write the core lifecycle/aggregate fields.

5. **Test.** `npm run test:unit` for the logic, `npm run test:rules` if access or shape changed (follow this project's rules-test pattern doc — commonly `docs/patterns/rules-test.md`), `npm run test:e2e -- <spec>` if it's on a critical flow, and this project's typecheck script if it has one (commonly `npm run typecheck`). Report pass counts, not a guess — see `~/.claude/rules/use-existing-test-harnesses.md`: "tested" means you ran them and they passed.

6. **Doc currency.** If you added/removed/moved a subsystem, changed a read-path/tier/cache behavior, or bumped a schema, update the matching canon doc in the SAME change (`subsystems.md` / `data-flow.md` / the relevant pattern doc + a new ADR). Most TMV projects enforce this with a Stop hook that nags once per session when source moved but no doc did — don't fight it, update the doc.

## Is this an architecture shift?

A new collection, a schema-version bump, or a clean-break removal of an old write path **is** an architecture shift. Check this project's `CLAUDE.md` for its arch-shift workflow — most TMV projects gate this behind an architect-agent-first / refactor-cleaner-last pipeline (typically a `.claude/hook-state/arch-shift.*` marker file plus an arch-pipeline hook). Use it if the project defines one. A field tweak on an existing write path is not an architecture shift.
