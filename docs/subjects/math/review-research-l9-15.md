# Math lessons 9 to 15: research review (build-subject step 6, role "research")

Reviewed 2026-10-22, read-only, by a fresh reviewer. Read: `public/subjects/math/` (gen-size, gen-growth, gen-loan, gen-packs, gen-chance,
gen-unknown, gen-two-step, kit.js, l9–l15), the learner views `docs/learner-view/math-l9..l15.md`, `docs/subjects/math/plan.md`,
`docs/research/math.md`, `shared-helper-changes.md`, the engine diff for plan figures (`doc-view.js`) and the calculator (`number.js`).

**How the generators were checked.** `scratchpad/math-gen-audit-l9.mjs` and `scratchpad/math-l9-paths.mjs` (adapted from
`math-gen-audit.mjs`) made every one of the 26 generators on 5,000 seeds and:
- recomputed each exact answer from the numbers the learner sees, with the standard formula (Pythagoras, (g/s)², v·k³, P·(1+r)ⁿ,
  first whole year to double, payments × months − amount, APR/12, ⌈S/c⌉, gcd, lcm, ∏ choices, 10ʷ·s/3600, 1000·((k−1)/k)ⁿ, Bayes,
  (F−32)/1.8, fee/(r−s), √(T+w²)−w, cans × price × tax, 2D/mpg × price, (total + tip)/n);
- pressed every printed button sequence (`keys…`) on the app's own calculator (`calcPress`);
- measured the worked rough answer against the exact one, traps against the answer's tolerance, distinct answers, ranges;
- re-priced every loan with the standard amortization formula and solved the APR back from the printed payment (as Reg Z does);
- tried the paths a careful learner would take (rounding a first answer before using it, etc.) against the tolerance.
`node tests/number-pure.mjs`: 887 checks pass.

**What holds (verified on 5,000 seeds each):** every exact answer agrees with the independent formula, except g-test (D3); every
printed key sequence gives its stated number on the app's calculator (0 wrong); every worked rough answer is within a fifth (worst:
car loan 15.6%, buses 16.1%); no trap sits inside its answer's tolerance; no unfilled slot, NaN or undefined in any text. Loan payments
match the standard amortization formula to the cent on every seed; the APR implied by the printed payment is within 0.02 points of
the printed APR; a car loan costs 9.5–37% of the amount and a pay-later plan 4.4–28%. Rates are realistic for October 2026 (car 6–11%
APR, card 18–30%, pay-later 15–33%, savings 3–5% APY, rent +3–6% a year, gas $2.89–4.59). Rule-of-72 figures, the 16 ft ladder
(15.49 ft), the $20,000 / 7% / 60-month loan ($396.02, $3,761.20) and the 1,000-people test example are right. The OSHA quote in M12
was checked against 29 CFR 1926.1053(b)(5)(i) and (b)(1) on osha.gov: it matches ("working length" = foot to top support).

## Defects that decide the verdict

1. **L15 / gen-two-step.js:38–56 (g-fuel): the cost is marked wrong for a learner who uses the gallons they were just asked for.**
   The first question asks the gallons "to two decimals"; the lesson says "find that first number, then the answer". Gallons to two
   decimals × the price is outside `tol: { abs: 0.01 }` on **2,163 of 5,000** seeds (seed 7932: 83.01 typed, 83.03 wanted).
   *Kind:* arguable answer. *Fix:* score the cost so both paths pass (tolerance of price × 0.005 + 0.01, or accept the value from the
   rounded gallons as a second right answer), or ask the gallons to the nearest whole gallon and the cost from the full chain.
2. **L15 / gen-two-step.js:59–82 (g-tip-split): rounding the tip to the cent first, as anyone paying does, is marked wrong** on
   219 of 5,000 seeds (seed 182150: $40.32 typed, $40.31425 wanted, `tol: { round: 0.01 }`). *Kind:* arguable answer. *Fix:* accept
   (total + tip rounded to the cent) ÷ n as well.
3. **L13 and the L15 check / gen-chance.js:77–99 (g-test): the "exact" chance uses the false positives rounded to a whole person.**
   A learner who works 5% of 970 = 48.5 (or the probability formula's equivalent) is outside `tol: { abs: 0.2 }` on 213 of 5,000
   seeds (b 30, s 90, f 5: item 35.53%, unrounded 35.76%). Also my recomputation disagrees on those seeds. *Kind:* arguable answer.
   *Fix:* draw only parameters where (1,000 − b) × f / 100 is whole (e.g. f ∈ {5, 10} with b ∈ {20, 40}), or widen the tolerance to
   cover both, or compute the answer from the unrounded count and accept the rounded path.
4. **L10 / gen-growth.js:69–93 (g-how-long): the answer depends only on the rate, and the rule of 72 gives it outright.** The goal is
   always double the deposit, so there are 4 answers in 5,000 seeds (2% → 36, 3% → 24, 4% → 18, 5% → 15), and the rough rule-of-72
   answer *is* the exact answer on 3,753 of 5,000. The question meant to practise "try years with xʸ" is passed without the
   calculator, and after a few tries by memory. *Kind:* guessable answer. *Fix:* vary the goal (1.5×, 3×, or a dollar goal not a
   multiple of the deposit) and the rates (2.5, 3.5, 4.5%), so the first year there differs from 72 ÷ r.
5. **L11 why (l11.lesson.js, `why[0]`): "none of them prints what the loan costs you" is wrong for US credit.** Regulation Z
   §1026.18(d) and (h) require a closed-end loan's disclosure (a car loan, and pay-later loans that charge interest) to print the
   "Finance Charge", "the dollar amount the credit will cost you", and the "Total of Payments" (checked on consumerfinance.gov);
   card statements print the interest charged and the minimum-payment warning. *Kind:* wrong fact. *Fix:* "An ad or an offer prints a
   payment and a rate; what the loan costs is in the fine print (the finance charge). Work it out yourself to check it and to compare
   offers."

## Polish (does not decide the verdict)

6. **L9 / gen-size.js:43–51 (g-ladder-long):** the foot is printed as "the safe way" at height ÷ 4, while the lesson teaches (as OSHA
   does) a quarter of the *ladder's* length; worst gap 0.18 ft (24 ft up: 6 ft given, 6.18 ft by the taught rule). Write "about", or
   use d = H ÷ √15 rounded. A ladder used to get onto the roof must also reach 3 ft above it (1926.1053(b)(1)); the eave job is not roof
   access, so this is fine as written.
7. **L9 / gen-size.js:89–108 (g-scale-volume):** the question asks two decimals but the working shows three (10.125) on 1,264 of
   5,000; and for k = 2 or 3 (half the seeds) the rough answer equals the exact one. Show `num(ans, 2)`; drop k = 2 and 3 or keep them
   knowingly.
8. **L10 / gen-growth.js:54–66:** for the "adds" forms the rough answer equals the exact on every g-save-add seed (P is a multiple of
   500, so rounding to $100 changes nothing) and on 53% of g-rent-add. Draw P on an odd step. The savings story should say "if the rate
   stays" (as the rent story does): no savings APY is fixed for 14–36 years. A learner who rounds to the cent each year (as a bank
   statement does) is outside the cent on ~60% of seeds; the lesson teaches xʸ, so this is an edge, but a tolerance of a few cents
   would remove it.
9. **L11 card (gen-loan.js:35–53, teaching screen):** US cards charge a daily periodic rate (APR ÷ 365) on the average daily balance;
   APR ÷ 12 is close (a 31-day cycle at 24% is 2.04%, not 2%). The statement's note makes ÷ 12 the stated term, so the answers stand;
   the teaching line should say "about a twelfth".
10. **L11 traps (gen-loan.js:31, 74):** `rate-on-payment` (payment × APR) is not a slip the research names. The linearizing slip
    M9 describes is flat interest, amount × APR × years ($20,000 × 7% × 5 = $7,000 against $3,761.20). Add it as a trap (the plan's
    "interest counted on the payment" can stay).
11. **L12 / gen-packs.js:51:** "about 20 children" beside 4–12 bags: every draw makes fewer bags than children, which a sensible
    reader notices. Make the children a number the answer can serve, or drop the row. Few distinct answers: hot dogs 3 (24 on 60%),
    gift bags 5, schedule 5, pizza 5; add pack pairs (8 and 10 buns/dogs exist both ways; 6, 12).
12. **L14 / gen-unknown.js:36–60 (g-plans):** a spin studio at $6–13 a class with a $30–60 pass is not a US price (boutique spin is
    about $25–35 a class); use the pool story only or scale the spin numbers. "Classes a month, to two decimals" is odd; the
    real question is the first whole number of visits where the pass is cheaper.
13. **L14 teaching screen:** "77 − 32 ÷ 1.8 = 25" reads as an expression; a phone calculator that follows the order of operations
    (the iPhone Calculator does) gives 59.22. Write "77 − 32 =, then ÷ 1.8 =".
14. **L15 vs plan:** the plan says "three two-step problems with the first step done"; the set uses `leave: 2`, which shows the
    given and the rough answer and leaves the first step and the exact one, so the learner never makes the rough answer there. Either
    is defensible; make the plan and the lesson say the same. g-fuel's rough answer is to the cent ("about $95.20"); round it.
15. **L15 check question 15 (g-buses):** "1 people on the last" (seed 15). Singular when `last` is 1.
16. **L9 teaching screen:** the "length / area / volume" table is drawn with the `years` figure type; a plain table block fits.
17. **Pictures only in feedback (L10 year table, L13 people):** M10 decides "works every problem as a count out of 1,000 people on
    the `people` figure", and M15 "draw it"; in the problems the figure appears only after the answer. Consider showing the empty
    figure (rows unfilled) with the problem.

## Way of thinking, plan, carried-over structures

Each lesson follows the plan's kinds and the note's way of thinking (asked/given, rough, kind, exact, look back); the rough answer is
left out only for whole-number answers the head finds exactly (L12 groups/packs, L13 counts), which M2 supports. L9 starts from the
trade's 1-in-4 rule (M12), L10 works growth by the multiplier with 72 only as a check (M9), L13 counts in 1,000 people (M10), L14 takes
each school topic through an everyday case (M24). No structure looks carried from another subject. Departures: items 14 and 17 above.
`kit.js` (`keys`, `first`, `then`, `asks0`) and the plan-figure `say` words behave as documented: a side with `say` never shows its
number, in the drawing or the screen-reader label.

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L9 Ladders, scale and size | PASS | none (polish 6, 7, 16) |
| L10 Growth year by year | FAIL | 4 |
| L11 What a loan costs | FAIL | 5 |
| L12 Packs, leftovers and lining up | PASS | none (polish 11) |
| L13 Counting ways and chances | FAIL | 3 |
| L14 A missing number | PASS | none (polish 12, 13) |
| L15 Two steps, mixed, and the test | FAIL | 1, 2, 3 (g-test is in its check) |

Counts: deciding 5 (arguable answers 3, guessable answer 1, wrong fact 1); polish 12; way-of-thinking departures 0 deciding
(2 noted as polish); carried-over structures 0.
