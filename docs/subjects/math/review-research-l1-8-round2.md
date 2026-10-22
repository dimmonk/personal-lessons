# Research review, round 2: Math, lessons 1 to 8

Reviewer: a fresh research reviewer (Opus 5.5) that did not build the lessons or write round 1. Written 2026-10-22, role "research" of the
review brief.

**What I read:**
- `public/subjects/math/` (kit.js, every gen file, l1–l8, subject.js).
- The engine's scoring of `wild` and of pass rules (`public/app/lessons/number.js:43–63`, `rules.js:78–101`, `gen.js:33–41`).
- The learner views `docs/learner-view/math-l1..l8.md`, `plan.md`, `docs/research/math.md` and the build-subject skill.
- `fixes-l1-8.md`, read only to check the claimed fixes.

**What I ran** (scratchpad `math-gen-audit2.mjs`, adapted from round 1's `math-gen-audit.mjs`, and `by-check.mjs`):
- Every math generator made on 5,000 seeds, with every exact answer recomputed independently from the numbers shown.
- Each worked rough answer measured against the one rough-answer rule ("within a fifth").
- Each named slip value tested against the rough-answer tolerance, and for its size against the "wild" band.
- Buy counts recomputed with the π key.
- Every 3-number parameter list checked as the engine draws it.

**Sources:**
- OSHA 1926.1053(b)(1) and (b)(5)(i) were fetched and match the note word for word (L9 material, checked as a sample).
- Reys et al.'s three processes (reformulation, translation, compensation) and the "83 + 74 + 96 + 82 → 4 × 80" example match a search of
  secondary accounts.
- **Not verified:** the 47 × 66 example and the SciELO paper's wording, because the PDF's text is font-encoded and unreadable here. The
  Pólya quotations are also unverified: the Harvard scan has no text layer.

**Verdict: FAIL.** L1 PASS; L2 to L8 FAIL.

| Lesson | Verdict | Deciding defects | Polish |
|---|---|---|---|
| L1 Ballpark and check | PASS | none | P3, P5 |
| L2 Friendly numbers | FAIL | 2 | |
| L3 Rates and scaling | FAIL | 1 | P1, P2, P4 |
| L4 Proportional or not? | FAIL | 1 | P1, P4, P6 |
| L5 Percents forward | FAIL | 1, 3 | P2 |
| L6 Percents backward and stacked | FAIL | 1, 2, 3, 4, 5 | P2 |
| L7 Areas | FAIL | 1, 6 | P2 |
| L8 Volume | FAIL | 1 | P2 |

## What checks out

**Arithmetic and values**
- All 38 generators' exact answers agree with an independent recomputation on 5,000 seeds. The only gaps are half-cent ties (about 0.5%),
  which the item rounds up.
- No empty slot and no NaN.
- Every buy count (cans, boxes, rolls, bags, half yards) matches rounding up the 2-decimal figure the learner sees, and also with the π key.
- Every 3-number list now draws all its values: recipe serves 4/6/8; tip tax 5–8; discount-then-tax 6/7/8; box coverage 18.5/20.5/22.5;
  mulch depth 2/3/4 inches.

**Rough answers and the subtotal check**
- Every worked rough answer is within a fifth of the exact one; the worst cases sit exactly at 20%.
- Right bills are within $2.35 of the rough sum.
- Wrong bills are always more than $3 off, so the taught "$3 gap" rule decides correctly every time.

**Facts**
- Correct: 1.609 km, 28.35 g, 3.785 L, 3.281 ft, 9 sq ft, 27 cu ft and 0.83 ft for 10 in.
- 1 ÷ 6 ≈ 17% is right, as are the teaching screens' sums.
- The CARD Act's 45-day notice applies to a card rate rise, and it now sits only on the card.

**Round-1 fixes I checked in the code**
- R1 (constants).
- R4: the edging excludes area = perimeter (`gen-area.js:94`).
- R5: the workings are typed in key order, and the floor uses M+.
- R6: the roast is gone.
- R7: each question names its own amount.
- R8: L4 has a rough answer and a table from 0.
- R9: a figure for every L6 kind.
- R10: the tip's rough answer is nudged.
- R12: `g-sum` exists.
- R14: the check prompts are plain (`roughOnly` prompt).
- R15: the card notice and the savings changes of at most a point.
- R16: the torn receipt.

R11 and R13 are fixed only in part (defects 4 and 1).

No structure looks carried over from another subject. The five steps in `kit.js` are the note's way of thinking (M6, M4, M7/M15/M16, M20,
M6/M15). As in round 1, the uniform "4 of 5" pass mark is a judgement call the plan admits (plan line 17); it is not counted here.

## Deciding defects

**1. The "none wild" pass rule does not count the wild answers it exists to catch (L3–L8; a departure from the plan, and a false rule on
the check screen).**
- **What the code does:** `scoreNumber` (`number.js:55–63`) returns a matching trap's slip *before* it tests for wild. So an answer that is
  ten times off, but equals a named slip, is scored as that slip, and `{ slip: 'wild', max: 0 }` never sees it.
- **How often:** the audit counted, out of 2,000 seeds, how often each named slip is wild-sized and so goes uncounted:

| Slip | Wild-sized and uncounted |
|---|---|
| ratio-upside-down, map and units (L3) | 2,000 |
| recipe (L3) | 1,124 |
| currency (L3) | 675 |
| decimal-point, tip (L5) | 2,000 |
| wrong-whole, share (L5) | 2,000 |
| gave-part, change and raise (L5) | 2,000 |
| points-not-percent (L6) | 2,000 |
| perimeter-for-area (L7) | 2,000 |
| unit-not-converted (L7, L8) | 2,000 |
| diameter-as-radius (L8) | 2,000 |
| added-difference, gym and beans (L4) | about 1,000 |

- **What the plan says:** it puts "none wild" in L3's check precisely for "the errors that cost money (a slipped decimal, a ratio upside
  down …)" (plan lines 17, 67).
- **What the learner is told:** the check screens of L3–L8 say "None gave an answer more than double or less than half the right one".
  For these errors that is untrue.
- **Example:** in L3, a learner with 4 right whose fifth answer is a map scale worked upside down (1/25 of the right number) passes.
- `fixes-l1-8.md` names the limit but leaves it in place.
- **Fix:** decide wild by the band alone, whatever slip label the answer also gets. For example, `scoreNumber` returns the trap slip plus a
  wild flag, and a `wild` rule counts the flag. Add a pure test with a wild-sized trap value.

**2. The third move, the nudge, is said but never done (L2; also L6 discount-then-tax).**
- M4 describes compensation as "making final numerical adjustments to the results": 47 × 66 is rounded to 3,500 and then *lowered*.
- **L2:** the worked example says "Both numbers went up to get there, so the real answer is a bit less. So about $3,500"
  (`gen-friendly.js:25`, worked `w-times`, est = 3500). So the shown rough answer contradicts the sentence before it.
- Every L2 generator does the same: `rough` is the unnudged friendly figure for times, share, part and sum (`gen-friendly.js:19, 43, 75,
  102`).
- **L6:** `g-off-tax` says "about {roughText} and a bit" but keeps the figure before tax (`gen-percent-back.js:62, 67`). It sits 6.5% low
  in the median case.
- L5's tip was fixed this way in round 1 (floor/ceil), so the lesson that teaches the move is now the one that does not do it.
- **Fix:**
  - Make the worked rough answer the nudged one, for example "a bit less than 3,500: say 3,200".
  - Keep every friendly-figure answer accepted, because the band already allows it.
  - Add the tax to the discount-then-tax rough answer with a benchmark (≈ 7%).

**3. Some "rough answers" are the exact division done in the head (L5 change as a percent, L6 points; L7 floor is lesser).**
- **L5 change:** `g-change` sets `rough = Math.round(c / tenth * 10)`, which equals the exact percent rounded on 5,000 of 5,000 seeds. Its
  working asks the learner to divide in their head to a tenth, for example "$134 is about 0.8 of those [$167], so about 8%" (learner view
  l5:115).
- **L6 points:** `g-points` does the same (5,000 of 5,000), for example "the change, 1.5, is about 0.9 times [1.6]".
- **Why it departs from the research:** M4 says good estimators "replace the original data with numbers easier to handle". M5 says
  unskilled ones run the exact method mentally.
- **L7 floor** (lesser): `g-floor`'s rough answer is the exact area (`gen-area.js:47`, 0% off on every seed), for example "about 15 × 11 =
  165".
- **Fix:**
  - Benchmark against 10% with friendly numbers: "$134 is a bit less than $167, 10%, so a bit under 10%, about 8%".
  - For points: "1.5 of 16 is about 1.5 of 15, a tenth".
  - For the floor: round the sides to friendly numbers (15 × 10 + 5 × 5).

**4. L6's rough answer for the price before tax works by the method the next step calls the mistake.**
- The rough working takes "{t}% of the total" off the total (`gen-percent-back.js:40, 47`; learner view l6:83: "10% of $159.23 is about
  $16, so 6.5% is about $10 … about $149").
- That is the `percent-of-after` slip. The rough answer lands within $1 of the trap value on 5,000 of 5,000 seeds.
- The exact step's feedback then says "That takes {t}% of the total off. The tax was {t}% of the smaller price."
- It contradicts the lesson's one rule ("100% is the amount the percent is of").
- **Fix:** keep the benchmark but say why it is only rough: "the tax was on the smaller price, so it is a little less than $10: about
  $150". Or divide by a friendly multiplier (÷ 1.05 ≈ take off a twentieth).

**5. M16's decision is not built.**
- The note decides: "problems are written so that key words mislead ('off' in a price that went up)". The plan cites M16 for L6, and
  `gen-percent-back.js:2` claims it.
- No L5 or L6 item has a misleading key word: "off" always means a discount, "up" always means an increase.
- **Fix:** add one L6 generator whose wording invites the wrong operation. For example, a sign that says "Now $96, that's 20% more than last
  year: what was it last year?", where "more" tempts × 1.2 but the answer is ÷ 1.2.

**6. L7's floor rough answer** (see 3): it is a departure from M4, but a minor one.

## Polish (does not decide the verdict)

- **P1. Look-alikes where per one is about $1 do not separate adding from scaling.**
  - With a per-one price near $1, adding the difference gives nearly the scaled answer. The audit counted how often the "added the
    difference" value passes as a rough answer:

    | Generator | Passes |
    |---|---|
    | `g-deal` | 910 of 2,000 |
    | `g-truck-rate` | 2,000 of 2,000 ($0.79–1.29 a mile) |

  - The exact ask still catches the slip.
  - L3's own wrong-idea example is $8 against $8.75 (9% apart).
  - Fix: price the teaching example and the truck away from $1 per unit (e.g. 4 for $10; trucks at $0.59–0.79 a mile).
- **P2. Some named slips pass as rough answers.** Each lands within a fifth of the right answer for its kind:
  - tip on the total (2,000 of 2,000);
  - before-tax percent-of-after (2,000);
  - discount-then-tax with the percents added (2,000);
  - up-then-down (1,490);
  - change over the new amount (1,560);
  - currency flipped for euros and Canadian dollars (420);
  - edging area (266);
  - rug circumference (199).

  This is built into a one-fifth band. But L1 sells the rough answer as what "can" catch a wrong answer. One line in L5's teaching would
  set the expectation: "a rough answer catches big slips; small ones need the look-back".
- **P3. L1's "by about how many dollars" practice ask** marks the learner's own gap (subtotal − rough sum) wrong on 14 of 5,000 seeds
  (`tol { abs: 1, rel: 0.25 }` against a rough sum that can be $2.50 off). Fix: `abs: 3`.
- **P4. Realism.**
  - The rate forms of L4 show "To start the ride: no charge", "For the day: no charge" and a phone plan with "Each month: no charge".
    These are unusual in the US. Free shipping on beans and a gym with no joining fee are the natural ones.
  - The map scale of 1 inch to 25 miles makes "trails" up to 169 miles long.
  - The euro range (0.86–0.95 a dollar) runs high against late-2025 rates of about 0.85–0.87. It will date either way.
- **P5. L1's subtotal screen** says a slip makes the sum "$10 or $20 too high", but the generated faults are $6, $8, $10, $20, $30 or $40.
  Say "a few dollars to tens of dollars".
- **P6. L4's decision can be read off the price list.** Every fixed-or-not choice is decided by one row that reads "no charge", "none" or
  "free" against a price. The "two totals, no price list" form is still not built (the fixes defer it). It would test the judgement
  rather than reading.

## Count of defects by kind

**Deciding:**

| Kind | Count | Which |
|---|---|---|
| Wrong numbers or facts | 0 | 1 is also a false statement on the check screen |
| Departures from the plan or the way of thinking | 6 | 1–6 |
| Wrong or arguable marked answers | 0 | |
| Carried-over structures | 0 | |

**Polish:** 6 (P1–P6).
