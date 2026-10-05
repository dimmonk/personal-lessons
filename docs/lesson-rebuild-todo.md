---
title: Lesson rebuild — make every unit teach, then apply
artifact: https://claude.ai/artifact/GwniHhX1ntEJah2MQ5kFjv
---

# Lesson rebuild

The lessons name things without teaching them, and the lesson, the questionnaire and the drills use different words for the same idea. Every unit gets rebuilt so a reader understands the idea, sees it applied, then practises it in the same words.

## Research, audit and standard

- [x] Learning-science source of truth: 29 principles from about 270 sources, every reference checked online, 41 review points applied (docs/learning-science.md)
- [x] Fable pass over the research document: 30 principles, 11 conflicts between rules fixed
- [x] Comprehension audit of all 7 subjects: 150 of 363 practice items cannot be answered from the lessons (docs/comprehension-audit/)
- [ ] **(now)** Lesson standard designed from the research, on Fable (judged; critics found 82 problems; revision running): three independent designs, judged into one, every rule traced to a research principle, with Psychology Unit Two fully rewritten as the exemplar
- [ ] Review the standard and the exemplar against the research and the audit findings

## Build the engine

- [ ] Structured lesson cards replace free-text cards (plain explanation, worked example, in-card check, recap)
- [ ] One vocabulary per subject: lesson, questionnaire, drills and verdict all read from the key
- [x] App split out of the 4,500-line index.html into stylesheet, engine and per-subject files; tests pass, live 0b0ba22
- [ ] Validator fails the build when a lesson, drill or key drifts from the standard
- [ ] Revision number on every lesson: each unit carries its own revision, starting at 1 for this rebuild, shown in the app; the test fails if a lesson's content changes without its revision going up
- [ ] Psychology Unit Two rebuilt as the exemplar and live to try

## Rewrite the subjects

- [ ] Psychology (6 units)
- [ ] Political Ideologies (5 units)
- [ ] Basic Math (7 units)
- [ ] Statistical Claims (7 units)
- [ ] Scams & Social Engineering (7 units)
- [ ] Wealth Preservation (7 units)
- [ ] US Civics & History (7 units)

## Verify and ship

- [ ] Learner simulation re-run on the rewritten units: every practice item answerable from its lessons
- [ ] Data checks and browser checks pass
- [ ] Commit, deploy to fieldcraft.web.app, push

## Needs your decision

- [ ] Try the rebuilt Psychology Unit Two when it is live and say whether this is what a proper lesson should be. My pick: roll the same format out to all 7 subjects unless you object.
