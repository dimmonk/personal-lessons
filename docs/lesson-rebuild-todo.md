---
title: Lesson rebuild
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

Status on 2026-10-12. Fieldcraft is live at https://fieldcraft.web.app. On 2026-10-10 every subject was found to practice
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
- [ ] **(now)** Stand-in learner reviews (the gain gate) of the seven live pilots: "after this lesson, can the reader do more of the real thing?"; fix what fails (owner, 2026-10-11: "keep going. just finish everything and don't wait on my read")
- [ ] V69 enforces it: every lesson needs a passing stand-in review or your own try; the pilot gate accepts the stand-in with your words recorded
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
- [x] Scams' pilot and baseline built and tested (2026-10-11), waiting to be deployed: messages as they arrive in six forms, act / check first / leave, a clock, a call that pushes back (standard 26.10, step 8)
- [x] US Civics' pilot built and tested (2026-10-11), waiting to be deployed: the 17 questions of part 1 in the list's own words, read aloud when you tap, answered from memory and checked, "my answer means the same", your own answers and interview date, the mock interview (on the test subject) (standard 26.10, step 9)
- [ ] Geography, a new subject (2026-10-12): the plan is written through the gates (`docs/subjects/geography/design.md`, evidence
  `docs/research/knowing-where-places-are.md`): a name shown, the place tapped on a map with no names on it; 21 parts, 26
  lessons; no lesson is written until you approve the end result and the practice method (V69)
- [ ] Each subject's other lessons (about 50), each with a passing stand-in review, tested and deployed subject by subject
- [ ] The research document (`docs/learning-science.md`) reorganized by kind of learning

## Parked
- [ ] The status docs (`docs/HANDOFF.md`) brought up to date with the new engine

## Needs your decision
- [x] Your approvals: "approve all, keep going" (2026-10-10), recorded in all eight design records
- [ ] Geography: approve or change the end result and the practice method in `docs/subjects/geography/design.md` (gates 2
  and 3); then the pilot, lesson 1 (the map of the United States), is built for you to try
- [ ] Whenever you have time: try any lesson on your phone; your words overwrite the stand-in review
- [x] The helpline in Psychology's pilot checked against thehotline.org (2026-10-11): 1.800.799.SAFE (7233) and text START to 88788, as written