# Math L1–L8: learner review, round 3 (2026-10-22)

Fresh cold read of the regenerated learner views `docs/learner-view/math-l1.md` … `math-l8.md` only (regenerated with
`node tools/learner-view/render-learner-view.mjs math lN` before reading). Every practice and check question worked before
looking at the marked answer. One thing was confirmed outside the views because the view itself raised it: whether the
L4 "does it scale" question is answered before the first cost is shown (`public/app/lessons/rules.js` `openAsks`, lines
52–60: asks open one at a time, the next one only after the current one is answered).

## Verdicts

| Lesson | Verdict | Check score |
|---|---|---|
| L1 Ballpark and check | PASS | 9 of 9 |
| L2 Friendly numbers | PASS | 5 of 5 |
| L3 Rates and scaling | PASS | 5 of 5 |
| L4 Proportional or not? | **FAIL** | 4 of 5, by luck (2 of the 5 "does it scale" choices were guesses) |
| L5 Percents forward | PASS | 5 of 5 |
| L6 Percents backward and stacked | PASS | 5 of 5 |
| L7 Areas and how much to buy | PASS | 5 of 5 |
| L8 Circles, boxes and volume | PASS | 5 of 5 (2 of them I had already seen with the same numbers) |

## L1 Ballpark and check — PASS

Way of deciding, in my words: say what is asked and which numbers matter; round each price to the dollar and add (or
multiply, or round a bill to something the group divides) for a rough answer; do it exactly on the calculator (M+ for
lines of "n ×"); the two should be within about a fifth. For a bill: round the lines, add, compare with the subtotal; a gap
over about $3 means something is wrong; tax after the subtotal is normal.

Check: 17 $31, 18 $51, 19 $121, 20 $17, 21 $27, 22 adds up, 23 adds up, 24 does not, 25 does not. 9/9.

Polish (no stall):
1. Step 1 lists "name the kind of problem" as a step, but no L1 working shows it. Drop it from the L1 wording or show it once.
2. Rough-answer feedback examples read "You said $38.01" — a head estimate is never typed to the cent. Use a whole-dollar example.

## L2 Friendly numbers for times and divide — PASS

Way of deciding: change the numbers to easy ones (50 × 70, a total the group divides, four of the same), work that in your
head, then nudge the way the rounding went; for a part, use an easy fraction (half, a third, a tenth).

Check: 13 $2,200, 14 $350, 15 $490, 16 $320, 17 $310. 5/5.

Polish:
1. Item 2: "Four amounts near $110 … a bit above that, so a bit more. Say $450", exact $440.42. The sum was only 42 cents
   above $440, so the nudge made the rough answer worse. I could not tell from the four weeks whether they were "together
   a bit above" without adding them. The nudge should be shown only when it is visible (all four on one side), or sized.
2. Item 1 working says "one went up and one went down, so they roughly cancel" — a rule not on the teaching screen. Add one
   line to Step 1.

## L3 Rates and scaling — PASS

Way of deciding: write two rows, find the amount for one, then multiply; for a rate "1 X = n Y", going toward the side
with the 1 divide, going away multiply; then ask "should it be bigger or smaller?".

Check: 14 $15.75, 15 2.19 cups, 16 $284.09, 17 22.5 miles, 18 15.87 oz. 5/5.

Polish:
1. Item 4 (8 servings → 6): the upside-down feedback says "More people need more, so it is 6 ÷ 8" when here there are
   fewer people; and the added-difference line answers a typed "−1.25 cups". Word the line by direction ("Fewer people
   need less"), and drop a trap whose value is negative.
2. Rough answers are printed to the cent ("About $77.55", "$251.25", "$181.50", "$335.50") although they are head
   estimates. Show them rounded ("about $78").
3. "The Price does not matter", "The Start time", "The Water": capitals mid-sentence.
4. Item 5: "5½ inches is about 5.5 (to the nearest half inch)" says nothing. Drop the clause when the length is already a half.

## L4 Proportional or not? — FAIL

Way of deciding: look for a part paid once whatever the amount (a start charge, a monthly fee, a joining fee, a day
charge, shipping). None: per one, times how many. One: scale only the part that grows, then add the fixed part. If the
list does not show one, check the first cost against the rate.

Check: 13 (beans, list shows "Roasted: Mondays", no fixed part) — I had to choose "scales or not" before the question told
me what 2 pounds had cost, so I guessed "scales" (wrong; it had $7.95 shipping hidden). 14 right, 15 (cab, list shows
"Pay by") guessed "scales" (right), 16 right, 17 right. 4/5, passed only because one guess landed.

Defects:
1. **Deciding. The scale choice comes before the number it depends on** (Items 1, 2, 3, 6, 7, 8, 9 wherever the list
   shows a filler row instead of the fixed part; check questions 13 and 15). Step 1 says "A price list may not show a fixed
   part. Then check the first cost", but the first cost ("Your ride of 3 miles cost $11.25") is in the *next* question,
   which opens only after the choice is made. On those lists the scaling and non-scaling versions look exactly alike
   (e.g. Item 1 and Item 2 both show "Pay by: card or cash / Each mile / Tips"), so the choice is a coin flip, and the
   feedback then explains it with a number I had not been shown. Fix: put the first cost on the document itself (a line
   such as "Last ride: 3 miles, $11.25", or the bill as a receipt row) so it is visible when the choice is asked, or ask
   the choice after the cost is shown.
2. Items 4, 5, 10: the working says "Calls and texts do not matter" / "The opening hours do not matter" when the list shown
   has no calls row or opening hours (it shows "Each month" or "Joining fee: none"). Say what is actually on the list.

## L5 Percents forward — PASS

Way of deciding: name the whole (100%): the subtotal for a tip, the pay for a share, the old amount for a change. Rough
from 10% (decimal one place left), 5%, 1%, a quarter, a half; exact with the multiplier (18% → × 0.18; up 4% → × 1.04;
30% off → × 0.70); share = part ÷ whole × 100; change = change ÷ start × 100.

Check: 13 $13.19, 14 28.0%, 15 17.0%, 16 $71,750, 17 $241.39. 5/5.

Defect (not deciding, the exact part still needs the reasoning):
1. Rough answers for a small change pass without doing anything: for a 2.5% raise (check 16) typing today's salary,
   $70,000, is within a fifth; for 15% off (check 17) typing the tag price, $284, is within a fifth. The rough step there
   tests nothing. Ask the rough answer for the part that changes (the raise, the amount off) or tighten its band.

Polish:
2. Item 3 rough: "5% is half that, $84" is worked out and then not used. Drop it or use it.

## L6 Percents backward and stacked — PASS

Way of deciding: decide which amount is 100% (the one the percent was taken of). If that is the unknown, divide by the
multiplier (paid ÷ 0.75; total ÷ 1.07; "now, 20% more than last year" ÷ 1.20). Percents one after another multiply in turn;
they never add or cancel. Points against percent: change in points ÷ old rate × 100.

Check: 14 $200, 15 $55.19, 16 $176.26, 17 $282.15, 18 16.7%. 5/5.

Polish:
1. The rough answers use fraction facts not on the teaching screen: "paid 75%: add a third back", "125%: take off a fifth",
   "120%: take off a sixth". I could follow them in the feedback but could not have produced them. One line in Step 1
   ("÷ 0.75 is + a third; ÷ 1.25 is − a fifth; ÷ 1.2 is − a sixth") would let the learner make the rough answer.
2. The wrong method (add 25% of what you paid back; take 6.5% of the total off) lands within a fifth of the right answer, so
   the rough answer cannot catch this lesson's own slip; only the exact answer does. Say so on the teaching screen, as L5 does.

## L7 Areas and how much to buy — PASS

Way of deciding: area = length × width (square feet); walls = distance around × height, less the door; an L is two
rectangles; edging and fences use the distance around; square yards = square feet ÷ 9; amount to buy = need ÷ what one
covers (two coats: double first), always round up.

Check: 13 363 / 3 cans, 14 180 / 10 boxes, 15 15.33 / $506, 16 30 ft / 2 rolls, 17 158 / 9. 5/5.

Defect (not deciding):
1. Items 1, 6, 10 and check 13: the cans question lists two different feedback lines for the same typed number ("If typed 2:
   That is what one coat needs" and "If typed 2: Rounded down…"). A learner who rounded 2.07 down to 2 is told they forgot
   the second coat. When the two wrong answers coincide, give one line that names both ("2 cans is one coat's worth, or
   2.07 rounded down: two coats need 2.07, so round up to 3").

## L8 Circles, boxes and volume — PASS

Way of deciding: a circle's area is π × radius × radius, radius = half the distance across; volume = bottom area × depth
with every length in feet (inches ÷ 12); cubic yards = cubic feet ÷ 27; then divide by what a bag holds and round up (mulch
to the next half yard).

Check: 13 50.2, 14 9.17 / 7, 15 14.72 / 8, 16 1.04 / 1.5, 17 56.7. 5/5.

Defect (not deciding):
1. The check said "5 new questions", but check 13 (8 ft rug) was Item 1 word for word, check 17 (8.5 ft rug) was Item 5, and
   check 15 (5 ft round bed, 9 in) was Item 12. I typed 50.2 and 56.7 from memory. Make the check's rugs and beds differ
   from those already met in the run.

## Defect count

- Deciding: 1 (L4 choice asked before its evidence).
- Other defects: 4 (L4 wrong "does not matter" line; L5 rough band passes the do-nothing answer; L7 two feedback lines for
  one number; L8 check repeats practice).
- Polish: 11.
