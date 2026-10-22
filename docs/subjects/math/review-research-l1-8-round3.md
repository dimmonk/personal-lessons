# Math L1–L8: research review, round 3 (2026-10-22)

Read: `public/subjects/math/` (kit.js, gen-totals, gen-friendly, gen-rates, gen-scales, gen-percent, gen-percent-back,
gen-area, gen-volume, l1–l8.lesson.js), the regenerated learner views, `docs/subjects/math/plan.md`, `docs/research/math.md`,
the build-subject skill, `fixes-l1-8-round2.md`, and `public/app/lessons/number.js` and `rules.js` (scoring, which asks are
open). Ran `scratchpad/math-gen-audit2.mjs` (5,000 seeds per generator; output `scratchpad/r3-audit.txt`) and two probes
(`scratchpad/r3probe.mjs`, `r3probe2.mjs`). L9–L15 generators ignored (their NaN rows in the audit are the other builder's
unfinished files).

## Verdict: FAIL (one deciding defect, in L4)

L1, L2, L3, L5, L6, L7, L8: no deciding defect. L4: FAIL.

## Round 2 fixes verified

- R1 "none wild" counts every wild answer: verified, `number.js:63` scores `wild` before any trap. The audit's
  `[wild-masked]` lines are stale (they test trap size, not scoring).
- R2 the nudge is applied: verified in `gen-friendly.js` (but see defect 4).
- R3/R6 rough answers from friendly numbers: verified for L5, L6, L7.
- R4 L6 before-tax rough no longer uses the slip's method: verified in wording; numerically it still lands within $1 of
  the slip's value on 3,219/5,000 seeds (see 5).
- R5 M16 built (`g-was`): verified, taught on L6's screen, in sets and check.
- L8 check `fr: 'low'`: verified (`l8.lesson.js` check), rounding to the nearest always buys too little there.
- Independent recomputation of every L1–L8 exact answer from the numbers shown: 0 disagreements, except 1-cent exact-half
  cases (defect 6). (`g-planter` 146 "disagree" is the audit using the drawn depth `d`, not the shown `depth` after
  `fr: 'low'`; the item is right.) Every buy count equals the round-up of the shown working, on all seeds, also with the
  π key for the round bed.

## Deciding defects

1. **L4: the "does it scale" choice is asked before the number that decides it; on half the items it is a guess.**
   `gen-scales.js:27–33`: with `card: 'hidden'` the fixed row is replaced by a filler row (`otherRow`, lines 61, 68, 75, 82,
   90), so the fee and rate forms show identical documents (probe: identical blocks for fee and rate at the same seed on
   990/2,000 seeds, i.e. every hidden pair). The first cost, the only evidence, is in the rough ask's prompt
   (`prompt: 'Your ride of {a} miles cost {costText}…'`), and `rules.js:52–60` opens asks one at a time, so the choice
   (`asks0`, line 34) is answered before that prompt appears. The teaching (`l4.lesson.js:19`, "check the first cost")
   cannot be applied. The check has two such questions (`g-beans-fee` and `g-taxi-rate` with `card: 'hidden'`), so a
   learner who reasons perfectly passes "4 of 5 right in every part" only 75% of the time, and one who guesses blindly
   gets the choice right half the time on those items. This departs from the way of thinking's step 1 ("what is asked,
   what is given": the givens must be on screen) and makes the marked answer unguessable-by-reasoning.
   **Fix:** put the earlier cost on the document (a row such as "Last ride: 3 miles, $11.25", or a past bill), so the
   choice is made with it in view; keep the prompt asking only for the new amount. Then the hidden form tests exactly what
   `l4.lesson.js:19` teaches.

## Other defects (wrong or arguable answers, departures)

2. **L7 paint: the "rounded down" trap can never fire; its slip is always reported as "one coat".** `gen-area.js:20–22,
   36–37`: `oneCoat` equals `short` (`cans − 1`) on 5,000/5,000 seeds, and the one-coat trap is listed first, so a learner
   who rounds 2.07 down to 2 is told "That is what one coat needs", and the L7 check rule "None rounded down, so you would
   run short" never counts a paint round-down. **Fix:** one trap for that value with feedback naming both causes, slip
   `rounded-down` (the rule the check enforces), or draw rooms where one coat and two coats round up to numbers that differ by 2.
3. **L8 check repeats practice items.** `gen-volume.js:20` gives the rug 11 versions (5–10 ft by halves); the round bed with
   `fr: 'low'` has 14. The check draws two rugs and one round bed after practice drew three of each, so a check rug or bed
   is a repeat of one already answered (with its answer shown in feedback) a large share of the time; in the learner view
   check 13 = Item 1, 17 = Item 5, 15 = Item 12. A learner can pass those single-number questions from memory.
   **Fix:** widen the rug and bed ranges (quarter feet, 4–12 ft) or have the check exclude parameter sets met in the run.
4. **L2 `g-sum` nudge departs from the source's compensation.** `gen-friendly.js:107` always nudges 3% the way of the sum's
   offset, however small: seed 2 nudges $440 to $450 when the exact is $440.42, making the rough answer worse. Reys's
   compensation (M4; the 2005 replication, verified: "Most of the students interviewed made final adjustments") is an
   adjustment toward the true value, sized by what the rounding did; and the learner cannot see that the four weeks are
   "together a bit above" without adding them. **Fix:** nudge only when the rounding direction is visible (all four on
   one side of the friendly number) and size it from the rounding; otherwise say "about 4 × $110, no nudge needed".
5. **L5/L6: the rough band accepts the lessons' own named slips, so the estimate step does not do its job there.** From
   the audit (`[est-accepts-slip]`, 2,000 seeds): tip on the total 2,000/2,000 (`g-tip`), tax off the total instead of
   dividing 2,000/2,000 (`g-before-tax`), percents added 2,000/2,000 (`g-off-tax`), change over the new amount 1,560
   (`g-change`), percent of the after-price 1,490 (`g-before-off`, `g-was`), and doing nothing at all (typing the old salary
   for a 1–5% raise, `gen-percent.js:97`; typing the tag for 10–15% off, line 118) always passes the L5 rough ask. The L5
   screen says "a small one needs the look back", but the taught look-backs ("less than the total", "more than you paid")
   are also true of these wrong answers, so nothing in the way of thinking catches them except the exact model. Not a
   wrong answer, but the plan's step 2 ("rough answer first … catches the error") is not delivered on these strands.
   **Fix:** for small changes ask the rough answer of the part that changes (the raise, the amount off, the tax), whose
   slips are far outside a fifth; and give L6 a look-back that does discriminate ("the price before × 1.065 gives the
   total back").
6. **Exact half-cent answers mark a defensible answer wrong (≈0.5% of seeds).** `tol: { round: 0.01 }` with answers made
   half-up: `g-split` seed 411801 is $121.35 ÷ 6 = 20.225 exactly; 20.23 is right and 20.22 is marked wrong
   (`withinTol(20.22, 20.23, {round:0.01})` is false). Same in `g-share` (27/5,000) and `g-tip` (24/5,000, e.g. $67.10 × 0.15
   = 10.065). **Fix:** draw numbers that never land on a half cent, or accept both neighbours when the exact is a half cent.
7. **L3 recipe feedback wrong for fewer servings.** `gen-rates.js:58` says "More people need more, so it is {want} ÷ {s}" also
   when want < s (learner view L3 Item 4: 8 → 6), and line 59's added-difference trap then has a negative value
   (−1.25 cups). **Fix:** word by direction ("Fewer people need less"), and skip the added trap when it is ≤ 0.

## Facts checked

- Conversions and constants: 1 gal = 3.785 L, 1 mi = 1.609 km, 1 oz = 28.35 g, 1 sq yd = 9 sq ft, 1 cu yd = 27 cu ft, π ≈
  3.14: all right.
- Prices and rates as of October 2026 are plausible and not dated claims: USD/EUR 0.86–0.92, USD/MXN ~17.9, USD/CAD 1.30–1.32,
  card APRs 22–26%, savings 3.5–4.5%, sales tax 5–8% (state plus local is in that range in most states), paint 350–400 sq ft a
  gallon, flooring 18.5–22.5 sq ft a box, carpet $25–45 a square yard installed, truck $19.95–39.95 a day plus $0.59–0.79 a
  mile. Tip on the pre-tax subtotal matches common US etiquette guidance.
- L1 subtotal rule ("five lines, each moved at most 50 cents, so within $2.50; over about $3 is a mistake"): arithmetic right.
- L6 "6% to 7% is 1 point, about 17% of the old rate", "× 1.20 × 0.80 = × 0.96": right.
- Note quotes checked against the sources: the 2005 replication of Reys (Cortés Flores et al., p. 8–9): 47 × 66 rounded to
  50 × 70 = 3,500 then adjusted; "always tried to replace the original data with numbers easier to handle"; "Most of the
  students interviewed made final adjustments" — all present (the same paper also says "students do not always make final
  adjustments … only student H made adjustments in all the exercises"; the note's summary is fair). The IES 2012 guide:
  "Students who learn to visually represent the mathematical information in problems prior to writing an equation are
  more effective at problem solving" and "diagrams such as strip diagrams, percent bars, and schematic diagrams" — present
  verbatim. No wrong fact found in L1–L8.

## Structure carried over from another subject

None found. The lesson shape (why, teaching screen, one worked item, faded sets, mixed set, check) is the app's lesson
standard and each part is tied to M13–M17 in the plan; the two answers per problem, the pictures (rate table, 100% bar,
plan) and the slips come from M2, M4, M7, M15, M19.

## Departures from the plan (non-deciding)

- Plan L4 lists "cooking time" among the look-alike pairs; built: taxi, phone, gym, truck, beans. Cooking time is not
  built (M7 names it). Either add it or change the plan line.
- Plan L3 slips include "added the difference"; the currency and unit items have only the upside-down trap. Fine for
  conversions; note only.

## Polish

- L3 rough answers printed to the cent ("About $77.55", "$251.25"), `gen-rates.js:82, 88`: round them to friendly numbers (M4).
- L6 rough fraction facts ("add a third back", "take off a fifth / a sixth") are used in workings but not taught on the screen.
- L4 working says "Calls and texts do not matter" / "The opening hours do not matter" when the list shown has no such row
  (`given` in `gen-scales.js:69, 76` is fixed text).
- L1 Step 1 names "name the kind of problem" but no L1 working shows it.
- Capitalised "The Price / The Start time / The Water does not matter" (gen-rates units).

## Counts

Deciding: 1 (L4). Other defects: 6 (2 arguable or mis-scored answers: 2, 6; 1 repeat that lets the check pass by memory: 3;
3 departures from the way of thinking: 4, 5, 7 partly). Wrong facts: 0. Carried-over structure: 0. Polish: 5.
