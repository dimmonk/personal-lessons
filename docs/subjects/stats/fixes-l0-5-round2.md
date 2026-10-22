# Statistical Claims, lessons 0 to 5: fixes after the second reviews (2026-10-22)

Answers `review-research-l0-5-round2.md` (ids 1–12) and `review-learner-l0-5-round2.md` (L4 item 8, P1–P12). No shared helper
(`items-build.js`, `subject.js`) was changed, so the lessons 6 to 9 builder's items are untouched.

## Deciding defects

| Defect | What was done |
|---|---|
| R1, L3 generator: the share word gave the verdict ("by a quarter" always held, "by 40%" never) | Both forms now draw the same claimed shares by word (`cut: fifth, forty, half`): the fair form counts the cut it claims, the over form counts half of it (a tenth, a fifth, a quarter). New pure test: over 600 seeds of each form, for all three lessons with paired generators, every word a headline uses appears under both verdicts (it fails on the old gen-risk). |
| R2, k-bread repeated the teaching numbers | 90 returned of 1,800 (still 50 in 1,000, the usual); the screen keeps 75 of 1,500. |
| R3 / learner L4 item 8, q-allergy at 48 of 95 | 40 in 1,000, finds 80, flags 5: 32 of 80 real (40%), "fewer than half". Headline now "80% accurate", the meaning the screen explains. |
| R4, q-schools' right claim true on its plain reading | "A student would be more likely to pass at Dale High than at Hillcrest High", the claim the per-test rates break; the reason says a student taking either test does better at Hillcrest. |
| R5, "counted the same way" only on holds | Outruns items carry it too: k-farm (check) "both counties' figures ... counted the same way" and q-bikes (group) "county police records, kept the same way in every town"; the per-acre and per-person rates decide. |
| R6, "in most ads" unsourced | Removed: "In these questions the text says which: it is how many of the people who have it the test finds." |

## Advisory, done

| Item | What was done |
|---|---|
| R7, survey rises with no sample size | q-insure: "surveys 20,000 adults picked at random" (a 2-point rise is well outside luck at that size, as L6 will teach). q-commute: 85% of 1,200 (bus share now 7% so the parts add up). |
| R9, sensitivity cued the L4 form | Both test generators draw `sens: [70, 75, 85, 95]`; the doubled entries are gone (`p: [300, 400, 500, 600]`). |
| R10, unrealistic heart risks | p-heart 80 → 60 in 1,000 over ten years in adults with heart disease ("protects a quarter": spares 1 in 50); q-statin 40 → 30 over ten years, headline "spares 1 in 100". |
| R11 / P4, k-tutor | The reason adds that students chose the program, so the groups were not split by chance. |
| R12, k-pets slip tag | "Twice as many dogs live in Harbor City …" is now `mixed-claim`. |
| P1, SkyBridge | Feedback: "the small print itself says the others were left out". |
| P3, why a coin toss matters | L3's screen: a makes-the-difference claim stands only when a coin toss or lottery split the groups. |
| P5, fewer than usual | L2's screen gives the mirror rule. |
| P6, P7, L2 notes and needs | Note "not the count for this time"; needs say "more than 2,400" (and the like). |
| P9, Harbor Books | The reason says the ad claims only the stores. |

## Kept, with the reason

- R8, an unambiguous range form (`{ from, to, step }`) for every subject: a cross-subject engine and data change (math, wealth, stats);
  V75 already refuses the one misreading that occurs, and the reviewer found no generator it misreads. Logged for the owner rather than
  done inside a Stats fix.
- P2, lesson 1's first screen is dense: it holds the one verdict rule the whole subject is built on (round 1); splitting it is a
  presentation choice left for the learner's own try.
- P8, how far above usual is a soar: every L2 item is two or three times the usual or at most the usual, so none rests on it.
- P10–P12: notes, no change needed.

## Checks run

Validator, `npm run lock`, validator, `npm test`, browser checks X30 (lessons 1 to 5 walked) and X13, X15, X20, X31, X48, X51, X3 with
`E2E_SKIP_FAULTS=1`; learner views l0–l5 regenerated.
