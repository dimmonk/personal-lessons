---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-11. Fieldcraft is live at https://fieldcraft.web.app. On 2026-10-10 every subject was found to practice
the wrong thing (Singing was story-sorting), so every subject is being rebuilt through the `build-subject` skill on one
new practice engine (lesson standard section 26), each subject's pilot lesson first, the rest after you try the pilot.

## Goal
- **Goal**: the reader efficiently learns each subject: after it, they can do the thing in real life.
- **The standard**: every subject starts from its end result and its real moment, never from the app's existing engine;
  practice is the real action (a voice skill is practiced by singing); every lesson serves a part of the end result;
  every design decision cites the evidence (`docs/research/`); the owner approves the end result and the practice
  method before content is written, and tries one lesson before the rest is built.
- **How we stay on track**: earlier style rules are inputs, not rules; nothing is kept because it exists; tests pass
  before anything is called done; one session owns the job: commit, push and deploy as each piece lands.

## Main task
- [x] The `build-subject` skill: seven gates in order, from the kind of learning to a tried pilot
- [x] The gates enforced in the app: design records and V69 (standard sections 23 and 26.7)
- [x] Every subject designed blind and audited: all eight rebuilt from scratch (verdicts in `docs/subjects/<id>/design.md`)
- [x] The weekly review: one review a week across every subject (section 24; live)
- [x] The practice engine designed (section 26) and its core built; the old engine and lessons deleted (tag `old-lessons`)
- [x] Singing's pilot live: the singing answer, the pitch line that fades, your range, "Match a note"
- [x] Basic Math's pilot live: typed numbers, estimate first, fresh prices each try, "Ballpark and check"
- [x] Wealth's pilot live: your own accounts sheet on the phone, statements, dollar costs, dated actions
- [x] Statistical Claims' pilot live: headlines, charts and ads as they appear, tap the line that decides
- [x] Your two bugs fixed and live: phone Back stays in the app; "Find my range again" on the Singing screen
- [x] Political Ideologies' pilot live: labels thrown from both sides, earned or not, results side by side
- [x] Psychology's pilot live: what someone did, told the way it reaches you, "can't tell yet" a right answer
- [ ] **(now)** Scams' pilot: messages as they arrive, act / check first / ignore, calls that push back
- [ ] US Civics' pilot: questions spoken aloud, typed answers checked, the interview
- [ ] Each subject's other lessons, after your try of its pilot
- [ ] The research document (`docs/learning-science.md`) reorganized by kind of learning

## Parked
- [ ] The status docs (`docs/HANDOFF.md`) brought up to date with the new engine

## Needs your decision
- [x] Your approvals: "approve all, keep going" (2026-10-10), recorded in all eight design records
- [ ] **Try the pilots on your phone** and tell me in a line how each went (each line unlocks that subject's other lessons):
  Singing → Match a note; Basic Math → Ballpark and check; Wealth → What it costs a year; Statistical Claims → Find the
  claim and its number; Political Ideologies → Socialist, or not?; Psychology → What did they do?
- [x] The helpline in Psychology's pilot checked against thehotline.org (2026-10-11): 1.800.799.SAFE (7233) and text START to 88788, as written