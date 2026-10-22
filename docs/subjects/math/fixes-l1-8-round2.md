# Math L1–L8: fixes after the second reviews (2026-10-22)

This answers `review-learner-l1-8-round2.md` (L) and `review-research-l1-8-round2.md` (R). Changes to shared helpers are logged in `shared-helper-changes.md`.

## Deciding defects
1. **"None wild" now counts every wild answer (R1).**
   - `scoreNumber` decides `wild` (more than double or less than half the answer) before matching traps.
   - The feedback still prints the matching trap's own line: `numberMissHtml` finds the trap from the numbers typed.
   - Tests: pure tests in `number-pure.mjs`, the test subject `till` (a wild slip on its cart, and X13 asserting a fourfold total is stored as wild), and a seeded fault for X13 in `e2e-controls.mjs`. The seeded-fault pass was not run, so that fault is unverified.
2. **The nudge is applied, not only said (R2).**
   - L2's four rough answers are the friendly answer moved the way the nudge says, kept to two figures. The worked example now reads "50 × 70 = 3,500 … say $3,200".
   - L6's discount-then-tax rough answer adds the tax from a benchmark.
3. **Rough answers are friendly-number estimates, not exact division (R3, R6).**
   - L5 change: benchmarks of 10% and 5%, then a 2-point nudge ("$134 is a bit less than 10%, say 8%").
   - L6 points: the rate made friendly (16 → 15, 3.5 → 4).
   - L7 floor: sides rounded to 10, 12 or 15.
4. **L6 before tax no longer uses the slip's method (R4).** The rough step says the tax was on the smaller price, so take off a little less than t% of the total.
5. **M16 is built (R5).** `g-was` in L6 prices something "Now $X, 20% more than last year!". The word "more" tempts × 1.2; the answer divides. It is taught on L6's teaching screen and is in L6's sets and check.

## Other defects
- **L8 check (L FAIL):** the planter, round bed and mulch in the check are made with `fr: 'low'`, so what to buy always has a fraction under a half. Rounding to the nearest then buys too little on every seed; a test holds this.
- **L1:**
  - The teaching says to press MC before each new total, and so does the order's working.
  - A new slip, `memory-not-cleared`, has its own line.
  - The check holds two bills that add up (9 questions; X25 updated).
  - The "by about how much" tolerance is now $3 (R P3).
  - The subtotal wording now says "a few dollars or tens of dollars" (R P5).
- **L5:** 15% and half-percents are taught before they are asked, with "a rough answer catches big slips; a small one needs the look back" (R P2).
- **L7:** a new `one-coat` slip names the missed second coat. It comes before "rounded down" in the feedback.
- **L4:**
  - Half the questions (`card: 'hidden'`, and two in the check) show a price list without the fixed part. The learner checks the first cost against the rate, as the teaching now shows.
  - Fixed template grammar: "ride of 8 miles", "whatever the amount", beans 2–4 pounds.
  - Trucks now cost $0.59–0.79 a mile (R P1).
- **L3:** the teaching example is now 4 for $10. The bigger-or-smaller test is named as the check that always works.
- **Learner view:** the sample "You said" line keeps two decimals. The mulch order has no unit, so it never reads "1 cubic yards".

## Not done
- L1 digit-slip case: the random fault list already draws $10–$40 sums.
- L6 rough tolerance at 10%: the one rule stays a fifth, by decision.
- L3's km rough wording: unchanged.
- Realism of no-fee rate forms (R P4): kept, because the pairs need them.
- The five topics marked "owner must decide": not built.

## Checks
All checks were run in a copy of the clone without the L9–L15 builder's unfinished `gen-*` files. The clone itself fails only V47, on those files, which are not yet in `index.html` or `sw.js`.
- Validator: 813,897 checks passed.
- Seeded validator faults: 198 went red on their own rule.
- `test:data`: passed (566 number checks).
- Browser checks X25, X13, X20, X48, X51, run directly: 336 passed.
- Fold and width walk of L1–L8: 7,972 checks passed.
- Learner views regenerated.
