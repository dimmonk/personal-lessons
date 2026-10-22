# Statistical Claims, lessons 0 to 5: fixes after the third reviews (2026-10-22)

Answers `review-research-l0-5-round3.md` (defects 1–6, advisory A1–A7) and the cheap polish of `review-learner-l0-5-round3.md`. No shared
helper (`items-build.js`, `items-asks.js`, `subject.js`) was changed; the lessons 6 to 9 builder's files are untouched.

## Deciding defects

| Defect | What was done |
|---|---|
| 1, "fell after" taught as timing only (p-crosswalk) | The cause is out of the headline: "Crashes at 12 busy downtown corners fall from 31 to 19 in two years", the lights only in the story; "The new lights make crashes … fall" is honestly the cause slip. L1's screen now warns: a headline that puts a change right after something invites a cause; take it as claiming one (T2: "Suggest a cause when only an association is observed"). |
| 2, L2's "above the usual" against b-pool | The rule now says "clearly above the usual: a strong word (soar, boom, surge) needs a big rise, half again or more; a little above is an ordinary year", and the mirror for "fewer". New practice item q-cards (11 against a usual 10, "soar", Does not show it) uses it. The pure test now enforces it: holds at 1.5 times the usual or more, outruns below. |
| 3, q-kelp's line ask | L3's prompt (fixed items and generator): "Tap the sentence that gives the number for how common it was without it." The words-only sentence is cleanly not it. |
| 4, k-engine's claim wider than its count | Scoped: "For cars brought in with a warning light, our code reader is 90% accurate …"; right claim about those cars; the no-warning-light wording stays the slip; "free with any oil change" replaced by "Readings take ten minutes". |
| 5, g-test-high claims for anyone on a selected group | Both test generators name the group in the headline and the right claim ("For people sent for a second test after a first positive, …"); "For anyone tested, …" is the who slip. The headline-word test leaves out the group's own words (who is tested is the base-rate reasoning, T10) and still passes. |
| 6, q-schools' claim could be true | The mix now comes from the students, not the school: the basic test in grade 9, the advanced in grade 11; Dale's test takers were mostly ninth graders. Claim: "Dale High teaches students to pass the state tests better than Hillcrest High", broken grade by grade. |

## Advisory

| Item | What was done |
|---|---|
| A1, wrong wordings gave themselves away; the wording closest to the headline won 71 of 87 | About 80 wrong options rewritten to reuse the headline's own words with one thing changed (present tense "makes" for cause slips, named groups instead of "whole/across/every/state"), and ~30 right options rewritten as plain paraphrases instead of copies. Two new pure tests over L0–L5 and the reserves: no wrong wording uses a give-away word ("whole", "across", "state", "never", "because", "already", "all", "every", "any", "made" …) that the headline and right wording do not; and picking the wording closest to the headline wins under 60% (now 24 of 95). |
| A2, q-commute | "85% said they drive to work, alone or with others"; right option "More than 80% of city employees go to work by car". |
| A3, a town against the county's usual | w-flu and the count generators give the town's own usual ("Millbrook sees about …, the county says"). |
| A4, "found that one thing works" | "found what works best". |
| A5, "people their age" | "people aged 50 to 60, like those in the study". |
| A6, the note's misquote | `docs/research/stats.md` T9 now quotes the syllabus exactly ("Regression to the mean pitched as treatment effect", "Selection masked as transformation"). |
| A7, group words in g-test | Kept on purpose (see defect 5). |

## Learner polish done

Cardiol now says a coin toss split the groups, so size alone decides it (P10). Percentage points come back in the third group (q-vote, 52% to 58%) (P6). The baseline's first screen says what each verdict means (P1). "Size … or any amount" covers pounds per student (P7). The out-of-100 slip names the item's unit, "out of 100 flights" (P9). Recycling now offers "Brookdale recycles twice as much in total" as a wrong wording (P16).

## Checks run

`node tests/stats-lessons-pure.mjs`: 4,376 passed. Validator: every L0–L5 item and lesson clean; the remaining failures are all in the L6–L9 builder's in-progress files (V47 index entries, V50/V62 words, V84). `npm run lock` run; negative controls 192 pass. Browser X13, X15, X20, X31, X48, X51, X3 pass. X30 passes its L1 walk and the L2–L5 walk; its one failure is the subject-screen line that expects four parts "not built yet", which the L6–L9 builder's new lessons changed (theirs to update). Learner views l0–l5 regenerated.
