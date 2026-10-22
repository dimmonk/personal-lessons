# Statistical Claims, lessons 0 to 5: fixes after the fourth reviews (2026-10-22)

Answers `review-research-l0-5-round4.md` and `review-learner-l0-5-round4.md`. No shared helper was changed; lessons 6 to 9 untouched.

## Deciding

| Defect | What was done |
|---|---|
| 1, g-risk-fair: on about a quarter of seeds the feedback credits the pill for a gap chance could give | Groups of 20,000 and 40,000 and a starting risk of 40 to 100 in 1,000 (both risk generators): the smallest cut either form counts (40 → 36 of 1,000) is over two standard errors. The fixed trials whose feedback credits the pill now state their size: Ostrel 20,000, Ravel 10,000, Tolpex 10,000, safety training 10,000 workers. New pure test: over 1,000 seeds of each risk generator, and on each of those fixed trials, the gap is more than two standard errors (T2 "Too small a sample", T8 "Is the sample large enough?", as lesson 6 teaches). |
| 2, k-tickets: two defensible taps, and an unsupported "slow month" | L5's tap now asks for "the sentence that gives the two numbers the headline compares" (Step 1 matches), so last June's 950 is plainly not it, and its note says it is the fair number but not one the headline compares. The story now says February is "its slowest month". Every L5 item was rechecked against the new prompt. |

## Advisory

| Item | What was done |
|---|---|
| k-tutor's "students chose the program" | The story now says "Students sign up for the program themselves". |
| k-5k's who-slip | Plainly someone else: "her running partner’s 5K time". |
| q-marlow (q-passrate) | Right claim: "Marlow High students are doing better on the test than last year". |
| Cause slips naming causes the text never mentions (about fifteen) | Each now names a cause the text offers (the pickup program, the GPS system, the new packing line, renewing online, fresh sourdough, the compost bin, smoke alarms, being open late through the holidays, paying schools more, needing volunteers …), or became a claim slip where the text offers none (b-pool, q-cards, p-nocomp, q-hotel, k-tickets, k-burger, k-boarding, r-garden). New pure test: every word of five letters or more in the cause a cause slip names appears in the item's text. |

## Checks run

Validator (every L0–L5 lesson and item clean), `npm run lock`, `npm test`, X30 with `E2E_SKIP_FAULTS=1` (160 checks pass, lesson 1 and lessons 2 to 5 walked). The only failures left (`k-hawks` deciding line, lesson 7 ads) are in the L6–L9 builder's files. Learner views l0–l5 regenerated.
