# Math L9–L15: fixes after the first reviews (2026-10-22)

Answers `review-learner-l9-15.md` (L) and `review-research-l9-15.md` (R). Each fix is at the root.

## Deciding defects
- **L11 rough answer (L1, L4; L15's car loan).**
  - Cause: the cost is a small difference of two big numbers, so a payment rounded coarsely misses the cost by more than a fifth.
  - Fix: the payment is now rounded to three figures in every loan and pay-later problem. The teaching screen says why and shows the coarse rounding going wrong. The worked example now reads $396 × 60 − $20,000 ≈ $3,760.
  - Worst rough answer is now 1.9% off for the car loan and 9.5% for pay-later.
- **L11 why (R5).**
  - Rewritten: an ad or a quote shows a payment and a rate, and what the loan costs is in the papers you sign.
  - The teaching screen names the loan papers' total of payments and finance charge (Reg Z §1026.18). The car loan's reason says its answer is the finance charge.
- **L14 answer leak (L1).**
  - The app's screen-reader words for a plan already used a side's words (`planSaid`). The learner-view renderer now does the same, and a blank side reads "nothing written", never its number.
  - The bed's sides read "?". The figure's sizes are rounded.
- **L14 wording (L2).** The pass row now reads "Summer pass, $40 a month, plus each swim | $3".
- **L15 fuel and tip (R1, R2).**
  - The cost now accepts gallons to two decimals × the price (`abs: 0.03`).
  - The share now accepts the tip rounded to the cent first (`abs: 0.01`).
  - Both paths are held by a test and by R's path script (0 of 5,000 wrong).
- **L13 test (R3).** The numbers are drawn so every count is whole (b in 20s, s and f in 5s). Working without rounding now agrees exactly.
- **L10 how long (L1, R4).**
  - The goal is now a round sum 2.1–2.5 times the deposit, at rates of 2.5–5%.
  - Rough: the doubling time, about a fifth longer (taught on the teaching screen).
  - The years are tried from the rough year toward the answer. A test checks that there are many answers and that 72 ÷ rate gives the answer on fewer than 100 of 400 seeds.
- **L15 check (L1).**
  - The check now has 15 questions: the plan's 12, plus one of each two-step kind.
  - Pass: 12 of 15, at least 2 of the 3 two-step problems, and none wild.
  - A practice group of three whole two-step problems is added. The first group leaves only the last step ("first step done", as the plan says).
- **Checks repeating practice numbers (L9, L12, L13).** Each generator now draws from far more values:
  - L9: the ladder, the height, 12 pizza pairs, the bed's soil.
  - L12: buses drawn as full × seats + those on the last bus, 12 pack pairs, 12 timetables.
  - L13: the test, the tickets.
  - Not done: a check that guarantees no repeat. That needs an engine change; not done.

## Polish done
- **L9:**
  - The foot of the ladder is about a quarter of the ladder, not "the safe way" at a quarter of the height.
  - The soil working shows two decimals.
- **L10:**
  - APY is explained.
  - Savings read "if it keeps growing this way".
  - The deposits are on odd steps.
  - A bank's year-by-year cents are accepted.
- **L11:**
  - The card statement's note on how interest is charged is shown on half the questions. The rule reads "about the APR ÷ 12".
  - A flat-interest slip was added.
- **L12:**
  - How to tell groups from packs, and how to list what divides a number.
  - The children row is dropped.
  - At least 2 people ride the last bus.
- **L13:**
  - 60 × 60 = 3,600 is taught.
  - The tickets win or lose on their own.
- **L14:**
  - The spin studio is replaced by a yoga studio at real prices.
  - The question is now the first whole number of visits where the pass costs less.
  - The calculator steps read "77 − 32 =, then ÷ 1.8".
- **L15:** The fuel rough answer is in whole dollars.

## Checks run
- Validator: 837,296 checks passed. Lock written.
- `npm test`: exit 0, 898 number checks, 200 seeded faults.
- R's `math-gen-audit-l9.mjs`: every printed calculator sequence gives its stated number.
  - Its g-plans "disagrees" is the new question: the first whole visit where the pass costs less.
  - The bed's sizes in the figure are now rounded.
- R's `math-l9-paths.mjs`: every path passes, except g-plans "fee ÷ saving", which is now the rough answer, not the answer.
- Browser checks X13, X20, X25, X48, X51 (E2E_SKIP_FAULTS=1): 336 passed.
- L9–L15 walked at 344 px dark and light, 752 px light and 1440 px dark, answering right: 0 failures, every check passed.

## Engine change: new numbers are new (2026-10-22, every subject)
- **The rule:** a made question in a group, a check, a retest, the review or a missed question's return never has the same numbers as a question the learner already tried of that generator. Nor does it repeat another question drawn for the same list.
- **Where:** `freshSeed` in `schedule.js`. Its callers pass the subject's data and the numbers already drawn: `refInstances` and `buildSet` in `sets.js`, `checkInstances` in `player.js`, `retestInstances` and `freshInstance` in `schedule.js`, and the redo in `queue.js`.
- **How it picks:** it tries seeds in order from the run's seed, so the same run gives the same questions. If none is new within 64 seeds, it takes any unused seed. Place groups are unchanged. When the numbers do not collide, other subjects get exactly the seeds they got before.
- **Tests:** pure tests in `tests/number-pure.mjs` cover practice, then a check, the same run, and the fallback. A seeded fault there (fresh seeds that ignore the numbers met) turns them red.
- **Lesson standard:** section 4.5 rule 4, and a dated entry.
- **Generator ranges:** the wider ranges from the first fixes are kept, for variety; no lesson needed a workaround removed.
- **Checks run:**
  - `npm test`: exit 0, 905 number checks.
  - Browser checks X13, X20, X21, X23, X25, X48, X51: 473 passed.
  - Walk at 344 px: 0 failures.

## After the final review (review-final.md), 2026-10-22
- **D1:**
  - The L13 test question's look-back now follows its own numbers: "below s%, because fp of the pos positives do not have it", and adds "most of them" only when they are most.
  - The teaching line now reads: "many positives can come from the many who do not have it, and for a rare condition most do".
- **D2:** what to buy is now drawn first, and the room is searched from the sizes drawn to fit it:
  - L7 paint cans: 4, 5 or 6 (the largest share is 38%). The rule that one coat rounded up is never two coats rounded down still holds.
  - L15 cans: 2, 3 or 4 (largest 38%).
  - L7 edging rolls: 1, 2 or 3 (largest 34%).
  - The worked examples are unchanged.
- **New pure test:** no number answer of any Math generator falls on one value on more than 40% of 2,000 seeds. It caught only those three.
- **Polish:**
  - L15's two-step pass rule now says "among the three two-step problems".
  - The yoga studio's pass is a "Monthly pass".
  - A card's minimum payment is 1% of the balance plus the interest, at least $35.
  - Not done: the polish in L2, L3 and L5 (the rough workings, the recipe lines).
- **Status:** all fifteen Math lessons are now `status: 'live'`. X25 now expects no draft line.
- **Checks run:**
  - Validator: 837,296 checks passed. Lock written.
  - `npm test`: exit 0, 990 number checks.
  - Browser checks X13, X20, X21, X23, X25, X48, X51: 473 passed.
  - Walk of L7 and L9–L15 at 344 px dark and 1440 px light: 0 failures.
  - Learner views regenerated.
