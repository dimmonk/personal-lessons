# Research review: Math, lessons 1 to 8

Reviewer: a fresh research reviewer (Opus 5.5) that did not build the lessons, 2026-10-22, role "research" of the review brief.
Read: `public/subjects/math/` (kit.js, every gen file, l1–l8, subject.js), `docs/learner-view/math-l1..l8.md` (worked examples, teaching
screens, check sections), `docs/subjects/math/plan.md`, `docs/research/math.md`, the build-subject skill, and the engine diffs
(`number.js`, `number-run.js`, `number-view.js`, `doc-view.js`, `view.js`, `app.css`).
Ran: a node script in the session scratchpad (`math-gen-audit.mjs`, `by-check.mjs`) that loads the app as the tests do and makes every math
generator on 5,000 seeds. It checks: every 3-number parameter list as the engine reads it; filled text (no NaN or empty slot); every exact
answer recomputed on its own from the numbers shown to the learner; the worked rough answer against the estimate's tolerance; every trap
against its ask's tolerance; the buy counts recomputed from the rounded figures the learner sees (and with the π key); value ranges.
Sources: I could not open the note's PDFs (no PDF text tool here; the SciELO server refused the connection). The M1 definition matches
OECD's own wording, which a search confirmed. M4 (Reys et al.'s three processes and the 47 × 66 example) matches my knowledge of that
paper but is **not verified** here.

**Verdict: FAIL** (L1 PASS; L2 to L8 FAIL). Most fixes are one line each. The two that matter most are defect 6 (the roast) and
defect 1 (five parameters stuck on one value).

| Lesson | Verdict | Defects |
|---|---|---|
| L1 Ballpark and check | PASS | 14 (mild) |
| L2 Friendly numbers | FAIL | 12, 14 |
| L3 Rates and scaling | FAIL | 1a, 13 |
| L4 Proportional or not? | FAIL | 6, 7, 8 |
| L5 Percents forward | FAIL | 1b, 2, 10 |
| L6 Percents backward | FAIL | 1c, 2, 9, 11, 15, 16 |
| L7 Areas | FAIL | 1d, 4, 5 |
| L8 Volume | FAIL | 1e |

What checks out: all 28 exact answers agree with an independent recomputation on 5,000 seeds each. The only gaps are half-cent ties, and
the item rounds those up, as a person would. No slot is left empty and no NaN appears. Every buy count (cans, boxes, rolls, bags, half
yards) matches what a learner gets by rounding up the 2-decimal figure shown, and with the π key in place of 3.14. Every unit fact is
right (1.609 km, 28.35 g, 3.785 L, 3.281 ft, 9 and 27). The worked examples are right (47 × $66 = $3,102; $63 ÷ 0.75 = $84; 331 sq ft
→ 2 cans; 10 cu ft → 7 bags; 18% of $64.50 = $11.61). The teaching screens' arithmetic is right. The memory keys work as the L1 order
working says (`5 × 11.09 M+ … MR`): I traced `calcPress`. The circle in `plan` labels the distance across as 2r.

## Generators

**1. Five 3-number choice lists are read as a range `[min, max, step]`, so each always gives its first value** (confirmed: one
value in 5,000 seeds each).
- a. `gen-rates.js:41` `s: [4, 6, 8]`: every recipe serves 4, so "per one" is always ÷ 4 (L3 practice and check).
- b. `gen-percent.js:13` `tax: [6, 7, 8]`: the tip receipt's tax is always 6%. It is only shown, never used.
- c. `gen-percent-back.js:57` `t: [6, 7, 8]`: discount-then-tax always uses × 1.06.
- d. `gen-area.js:43` `cov: [18.5, 20, 22.5]`: flooring always covers 18.5 sq ft a box.
- e. `gen-volume.js:87` `d: [2, 3, 4]`: mulch is always 2 inches deep. So the order is only ever 0.5, 1 or 1.5 cubic yards
  (answers 0.19–1.48), which is small for a bulk-mulch delivery.

Fix: give each a fourth value, or write the choices so they cannot read as a range (e.g. `[4, 6, 8, 4]`). Then add a test that fails
when any 3-number list draws fewer than 3 values or a step larger than max − min (the audit script's check, in
`tests/number-pure.mjs`).

**2.** The rough answers of the percent problems are not checked against the "within a fifth" that L1 and L2 teach. Every L3–L8 estimate
has no `tol`, so it falls back to half-to-double. In L5 and L6 this lets the lesson's own named wrong answers pass as rough answers on
every seed. The script found this for the percent of the price after (`afterUp`, `afterDown`), the starting price for up-then-down, the
percents added, the change over the new amount, and the tip on the total: 5,000 of 5,000 each. This is partly built in, since those slips
change the answer by under 20%. But the learner is told nothing about the looser band. Fix: give the L3–L8 estimates `tol: { rel: 0.25 }`
(every worked rough answer is inside 25% except recipe and map at 33%, which item 13 covers). Or have the L3 teaching screen say that
from here a rough answer only has to catch big slips.

**3.** (Not a defect, for the record.) About 10% of split, share and tip answers land on a half cent (e.g. 20.225). The item takes
round-half-up, and only that. This is right for "to the nearest cent". It only matters if a learner truncates.

**4. `gen-area.js:94` edging: on 55 of 5,000 seeds the area equals the distance around** (e.g. 6 × 3: 18 and 18). A learner who works
out the area is then marked right, and the `area-for-perimeter` trap cannot fire. Fix: redraw when `l * w === 2 * (l + w)`.

## The calculator and the figures

**5. L7 workings tell the learner to type sums the calculator cannot do in one go.** This is the same class of blocker as the L1 pilot
review's. The calculator works left to right and has no brackets (`CALC_LAYOUT`).
- The edging exact working says `On the calculator: 2 × ({l} + {ww})` (`gen-area.js:103`). Typed as written, `2 × 6 + 3 =` gives 15,
  not 18.
- The paint setup says `2 × ({ll} + {w})` (`gen-area.js:30`), the same problem.
- The floor adds two products (`{a} × {b}` and `{c} × {dd}`, `gen-area.js:55`), but its exact ask has no `calc: ['mem']`. L1's order has
  memory for exactly this.

Fix: write the workings in key order (`{l} + {ww} = then × 2`), and give the floor's exact ask `calc: ['mem']` with an M+ working as
in `g-qty`.

## Departures from the research or the plan

**6. L4's roast "scales" form teaches something the note itself names as false.** M7 (`docs/research/math.md:94`) lists "cooking time
for twice the food" as the *non*-proportional look-alike. Real roasting time is not proportional to weight either: it grows more slowly,
with thickness. Yet `g-roast-rate` (`gen-scales.js:80–98`) marks "It scales" right and says "twice the weight, twice the time". It is also
in the L4 check (`l4.lesson.js` check items). The fee form has a smaller version of the same problem: it scales the oven time and treats
only the rest as fixed. Fix: drop the roast's rate form (and take it out of the check), and use a story that really is proportional
(e.g. fuel for a drive, or tiles at a price each). Keep the roast only as a fixed-part case, ideally with the note that "minutes per
pound" is itself a rough rule.

**7. L4 asks "Does the cost scale with the amount?" on the roast**, where the amount asked is time, not cost (`gen-scales.js:20`, shared
by all four stories). Fix: a `scalePrompt` per story ("Does the time scale with the weight?").

**8. L4 departs from the plan's problem shape.** Plan line 54: every problem has an estimate `number` ask then the exact one. L4's items
have no rough answer and no figure. The plan's L4 check is "4 of 5", and the lesson comment (`l4.lesson.js:3`) promises "five new
stories, both forms". The check in fact reuses the four practice stories (taxi, phone ×2, roast, truck). Fix: add the rough step (kit
`problem` with `asks0` for the choice, as `kit.js` already allows) and a `rate-table` figure, and correct the comment or add a fifth
story.

**9. L6 has a figure for one kind in five** (only `g-before-off` has the bar). M15 ("one picture per kind ... 100% bar", note line 170) is
what the plan builds on. Before-tax, discount-then-tax, up-then-down and points have none. Fix: a bar for before-tax; a `rate-table` of
the two steps (100 → 80 → 84.8) for the stacked kinds; a two-cell table for points.

**10. L5 tip: the worked rough answer for 18% and 22% is plain 20%, with no nudge.** M4's third move, taught in L2, is to adjust.
`gen-percent.js:16` uses `tenth * 2`, and the worked example says "18% is a bit less than 20% … about $12.90" without making the answer a
bit less (it is 11% high). Fix: nudge in the working ("so a bit under $12.90, about $12"), or take 20% less 1–2% off.

**11. L6 rough answers that are not rough answers.**
- `g-before-tax` sets `rough = Math.floor(total)`, the total's whole dollars, on 5,000 of 5,000 seeds. The working says "a bit less than
  the total" but the number is not less by the tax. Fix: total less t% by benchmark (about 7% of $107 is $7, so about $100).
- `g-up-down` sets `rough = Math.round(ans)`, the exact answer rounded (5,000 of 5,000), which nobody can make in their head. Fix:
  benchmark the first step (up 20% of $85 is about $100), then the second.

**12. L2 teaches "make the sum simpler" (Reys's *translation*, M4), but no problem practises it.** `l2.lesson.js:17` teaches it; the
three generators are times, share and part. The plan (line 61) names the three moves. Fix: add a fourth generator (a column of 4 to 6
near-equal amounts, e.g. weekly grocery bills, as "about n × 80") to L2's sets and check.

**13. L3 check is missing the plan's "none wild" rule.** Plan line 67: "Check: 4 of 5, none wild"; `l3.lesson.js:32` has only
`right: { min: 4 }`. Fix: add a pass rule that no exact answer is outside half to double (the rule the plan's final test uses). In the
same lesson the recipe and map rough answers can be 33% off the exact one (`halfStep` of 3/4 is 1; 1¼ in rounds to 1). That is fine for
the band but is not "within a fifth". Fix: round the factor to quarters for the recipe.

**14. L1/L2 check prompts name the strategy.** M4 says the mark of a good estimator is choosing the strategy ("knowing how to select and
use the adequate strategies"), and M1 decides that "the method is never named in the problem". Yet the rough-only check items keep the
practice prompts: "Round each price to the nearest dollar…" (`gen-totals.js:36,58,78`), "Make the numbers friendly first", "Find a number
near the total that {n} divides evenly", "Find an easy fraction near your part of the hours" (`gen-friendly.js:26,51,84`). Fix: a plain
prompt in `roughOnly` ("About how much …?"), keeping the hint in practice only. (Listed under L2. L1's check is milder because rounding
is its only move.)

## Facts and realism (US, October 2026)

**15. Savings rate notice** (`gen-percent-back.js:109`): "Notice sent 45 days ahead" is right for a credit-card rate rise (CARD Act),
but a bank does not owe 45 days' notice for cutting a variable savings rate. Some draws also cut savings from 4% to 1% in one notice
(points answers up to 75%), which is unrealistic. Fix: put the notice row only on the card, and cap the savings change at 1 point.

**16. Card statement "sales tax 7% included"** (`gen-percent-back.js:43`): US card statements show one posted amount and do not split
out tax, and US tags add tax at the register. The task (a pre-tax price for an expense report) is real. Put the total on a receipt
line instead ("Total paid, tax included").

**17. Small realism points (no fix required).** "Pot roast" timed in minutes per pound at 325°F is really braised for hours: call it
"Roast beef". The cabin share reaches $9,316 for 3 nights. EUR 0.86–0.95 per dollar, CAD 1.30–1.40 and MXN 17–20 are plausible for
2026 but will date. Other values checked and realistic: paint 350–400 sq ft/gal, carpet $25–45/sq yd installed, truck $19.95–39.95 +
$0.79–1.29/mi, sales tax 5–8.5%, card APR 16–24%.

## Structures carried over

I found no structure carried over from another subject. The five-step frame (`kit.js`) is drawn from M6, M4, M7/M15/M16, M20 and
M6/M15, and the slips come from M7. One thing is a template rather than research: every check is "4 of 5" whatever the kind. The plan
says this pass mark is a judgement call (plan line 17), so it is noted here, not counted.

## Count of defects by kind

- Generator bugs: 6 (item 1 a–e: five lists read as ranges; item 4: area equals perimeter).
- Calculator or workflow: 1 (item 5).
- Departures from the research or the plan: 9 (items 2, 6–14).
- Wrong or arguable marked answers: 2 (item 6, roast-rate marked "scales"; item 4, area accepted as perimeter). Both are also counted
  above.
- Factual or realism: 2 needing a fix (15, 16), plus minor notes (17).
