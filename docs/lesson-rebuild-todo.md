---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-10. Fieldcraft is live at https://fieldcraft.web.app with 8 subjects. On 2026-10-10 the Singing subject
was found useless for singing (it was built as story-sorting, the Scams template), and the cause was the way subjects get
built, not one subject. From now on every subject goes through the `build-subject` skill (`~/.claude/skills/build-subject`).

## Goal
- **Goal**: the reader efficiently learns each subject: after it, they can do the thing in real life.
- **The standard**: every subject starts from its end result and its real moment, never from the app's existing engine;
  practice is the real action (a voice skill is practiced by singing); every lesson serves a part of the end result;
  every design decision cites the evidence (`docs/learning-science.md`, `docs/research/`); the owner approves the end
  result and the practice method before content is written, and tries one lesson before the rest is built.
- **How we stay on track**: earlier style rules are inputs, not rules; nothing is kept because it exists; tests pass
  before anything is called done; one session owns the job: commit, push and deploy as each piece lands.

## Main task
- [x] The `build-subject` skill: seven gates in order, from the kind of learning to a tried pilot
- [x] The research for the weekly review: `docs/research/review-after-lessons.md`
- [ ] **(now)** The gates enforced in the app: each subject has `docs/subjects/<id>/design.md`, and the validator refuses a subject whose gates are missing or unapproved
- [ ] The weekly review: one review replacing the returns and the Mixed drill; each item has its own next date; only questions in the real form, mixed; misses again until right; an item retires after about three right weeks (standard section, engine, tests, deploy)
- [ ] The research document rewritten by kind of learning: it assumed "diagnostic classification" before looking at any evidence; add the evidence for body skills (the voice)
- [ ] Singing, gate 1: the evidence for learning to sing
- [ ] Singing, gates 2 and 3: the end result, the test, the practice method (your approval)
- [ ] Singing, the app capabilities the practice needs: a pitch line against the target, timing a held note, a short melody played and sung back
- [ ] Singing, gates 4 and 5: the parts and each lesson's design
- [ ] Singing, gate 6: one lesson built, you try it on your phone
- [ ] Singing, gate 7: the rest built; the old Singing deleted in one commit
- [ ] The other seven subjects through gates 1 to 5, designed blind, then compared with what exists: keeps, changes, goes (Wealth expected to change: it stops at naming and never acts on your own numbers)
- [ ] Rebuild whatever the audit says changes or goes

## Parked
- [ ] Scams baseline: a real invoice and a real reset code are marked "Something was wrong with it." Each baseline story carries whether it is real; the screen reads that
- [ ] The learner view prints the baseline screens (built, not committed)
- [ ] The status docs (`docs/HANDOFF.md`) brought up to date

## Done earlier today
- [x] The baseline question asks "Is something wrong here, or is it fine?" in every subject you act on (live)
- [x] Sound in Singing Unit Four: the note tool and five example sounds (live; the engine pieces are kept for the rebuild)

## Needs your decision
- [ ] For each subject, approve the end result and the practice method (two or three lines each; sent to you as each subject reaches gate 3)
- [ ] Singing pilot: try the first lesson on your phone and say whether it moved you
