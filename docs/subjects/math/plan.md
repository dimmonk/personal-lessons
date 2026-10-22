# Basic Math: the plan (build-subject step 4)

Written 2026-10-22 from `docs/research/math.md` (M1–M33) and `docs/learning-science.md` (P ids). Replaces the gate 2–5
sections of `design.md` as the design; the pilot, lesson 1, is kept and revised.

**Change, 2026-10-22 (later the same day).** The owner: math should reach past everyday use into "basic high school knowledge
which someone more technical and hands on would use at some point", "more so a reminder then a full on lessons". Added Unit 6,
*Refreshers* (lessons 16 to 19), from research M25 to M33. It settles the four "owner to decide" asks below: prime check,
irrational numbers, trigonometry, log scales and the permutation and combination formulas are each a refresher card. The
refreshers are reminders, not the main method: they are not in the real-world test.

## What you'll be able to do, and when

**After this you can work out the number a situation needs (a total, a price per one, a scaled amount, a percent or the
price before one, how much paint or soil to buy, how high a ladder reaches, what savings grow to or a loan costs) and
tell whether it is sensible, when a receipt, a recipe, a sale tag, a room or an offer hands you some numbers and a
question and nobody names the method.**

**The real-world test.** 12 new problems in mixed order, each a real-looking document with more numbers than needed and
no hint of the method: one from each of lessons 3 to 14 (lessons 12 to 14 only if the owner keeps them; otherwise 9
problems). For each: type a rough answer without the calculator, then the exact one with it. **Pass: 10 of 12 right to
the rounding the problem states (7 of 9), and no exact answer wild (outside half to double the right one).** Taken at the
end and again on new problems two weeks later. The pass mark is ours (a judgement call); the "no wild answer" rule
targets the errors that cost money (a slipped decimal, a ratio upside down, growth treated as straight-line; M7, M9).

## The way of thinking (from the research)

1. **What is asked, what is given** (Pólya's first phase, M6; numeracy as managing a real situation, M1).
2. **A rough answer first, from friendly numbers**: make the numbers easy, make the sum simple, then nudge (how good
   estimators work, M4; adults' benchmarks such as half, a quarter, 10%, M3; knowing when rough is enough, M2).
3. **Find the kind by its structure and draw it**: per one (a rate), out of 100 (a percent), a space, a multiplier each
   year; and is it proportional at all? (multiplicative against additive is where novices fail, M7; visual
   representations, strong evidence, M15; structure not key words, M16).
4. **Work it exactly on the calculator** (M20; compound growth never by feel, M9).
5. **Look back**: near the rough answer, the right unit, the right direction, all the data used (Pólya, M6; monitoring
   and reflecting, strong evidence, M15).

## What it teaches, against every ask (the owner's words, from `design.md`)

| Ask | Where | What the evidence did to it |
|---|---|---|
| Before you do the math, check what the problem is about | Every lesson's first step; L1, L2 | Kept as "what is asked, what is given" (M6), inside solving, not as sorting (M1) |
| Six kinds of whole-number problem | L12 (remainders, equal groups, packs that line up, primes as building blocks); prime check and irrational numbers as one screen each | Taught through packs and schedules (M8); prime check and irrational numbers are refresher cards in L19 and L18 (M25) |
| Primes and common factors | L12 | As above |
| Find the missing number | L3 (proportion), L6 (price before), L14 (rearranging, two unknowns as two price plans, a squared unknown by completing the square drawn as a square) | Proportion and "price before" are core (M7, M8); the rest kept, taught by an everyday case (M24) |
| Amounts that change over time | L10, L11 | Straight-line against compound, the multiplier, doubling by 72 as a check, "how long" by trying years; log scales a refresher card in L18 (decibels, magnitudes, pH; M28) |
| Counting ways, and how likely it is | L13 | Multiplying the choices, "at least one" by the opposite, chances as counts out of 1,000 (M10); permutation and combination formulas refresher cards in L19 (M25) |
| Four types about lengths, areas and volumes | L7, L8, L9 | Areas and how much to buy, volumes, shapes at two sizes (area ×4 when length ×2, M7); trigonometry (a length from an angle) a refresher card in L16 (M25, M26) |
| Right triangles: the ladder against a wall | L9 | The trade's 1-in-4 rule first, the square rule to find height or length (M12) |
| School facts a hands-on person uses, as a reminder (2026-10-22): circumference against diameter, and the five above | L16–L19 | Fifteen refresher cards (M25–M33) |

Percentages and fractions (named in the brief) are lessons 5 and 6 and run through 2 and 3 (benchmarks, recipe
fractions, M3); completing the square is in lesson 14.

## The lessons

Every lesson: a one-screen why; one teaching screen with the way of thinking and the kind's picture (P11, P30, M15); one
worked item, each step with its reason and a look-back step (M13, M6); a set with `leave` support (last step, then last
two) and `estimateCheck` (M14, P17); a set of whole problems without support; from the second lesson of a unit on, `mix`
from earlier lessons, unlabeled (M17, P22); a check of fresh generated problems (`{ gen, n }` items), `feedback: 'at-end'`. Every problem is a
generator (`FC.gen`) with fresh numbers, a `document` or `figure` block with extra figures, an estimate `number` ask then
the exact one, `steps`, and `traps` with named slips (M18, M19). Strands return in the review as fresh problems (M22).

**Unit 1. A rough answer, and checking one**
- **L1 Ballpark and check** (pilot, built). Round and add, multiply, divide; check a printed total. Check: 4 of 5 rough
  answers within a fifth; the wrong printed total caught. Why: M2, M21 (names the "rough must be exact" wrong idea).
  Revise per its review: add a tax line to receipts; fix the sum-of-products trap (engine gap G1).
- **L2 Friendly numbers for times and divide.** Reys's three moves in plain words (make numbers friendly, make the sum
  simpler, nudge), with benchmarks (half, a quarter, 10%). Gens: price × quantity, cost per person, 23/45 of 720.
  Check: 4 of 5 within a fifth, no calculator. Why: M4, M3, M5.

**Unit 2. Per one and per hundred**
- **L3 Rates and scaling.** "Per one" in a two-row `rate-table`: unit price, recipe 4→7 servings (with ¾ cup), currency,
  map scale, unit change. Slips: ratio upside down, added the difference. Check: 4 of 5, none wild. Why: M7, M15, M8.
- **L4 Proportional or not?** Look-alike pairs (`[ItemRef, ItemRef]`, P12): a rate against a fixed fee plus a rate, a
  taxi, a phone plan, cooking time. Asks: a `choose` (scales or not), then the number. Check: 4 of 5. Why: M7 (overuse
  of proportionality grows with schooling).
- **L5 Percents forward.** The 100% `bar`; a percent of, a share as a percent, a change as a percent; the multiplier
  (up 5% = × 1.05); benchmarks first. Worked example shows benchmark and multiplier side by side (M15 rec. 4). Slips:
  change over the new amount, percent of the wrong whole. Check: 4 of 5. Why: M3, M7, M15.
- **L6 Percents backward and stacked.** Price before a discount or tax (divide by the multiplier), discount then tax,
  up 20% then down 20%, points against percent. Slips: added the percents, took the percent of the after-price. Check:
  4 of 5. Why: M7, M16 (key words mislead), M24.

**Unit 3. Space and how much to buy**
- **L7 Areas and how much to buy.** Labeled `plan`: walls minus a door, L-shaped floors, coverage per can, round up.
  Slips: perimeter for area, rounded down, unit not converted. Check: 4 of 5 including rounding up. Why: M8, M15.
- **L8 Circles, boxes and volume.** Round rug, planter soil in cubic feet then bags, cubic yards of mulch. Check: 4 of 5.
  Why: M8. Needs a circle in `plan` (G2).
- **L9 Ladders, scale and size.** The 1-in-4 ladder rule, then a² + b² = c² for reach or length; a photo or model at
  another size; double the length, 4 times the area, 8 times the volume. Slip: doubled the area with the length. Check:
  4 of 5. Why: M12, M7. Needs √ (G1) and a right-triangle figure (G2).

**Unit 4. Money over time**
- **L10 Growth year by year.** Adding the same amount against multiplying by the same number (`years` table); savings
  at 5% for 10 years with the power key; doubling time by 72 as a check; "how long until" by trying years. Slip: simple
  where it compounds. Check: 4 of 5, none wild. Why: M9. Needs the power key (G1).
- **L11 What a loan costs.** Payment × months, minus what was borrowed; a monthly rate against a yearly one; a "buy now,
  pay later" offer. Slips: monthly rate used as yearly, interest counted on the payment. Check: 4 of 5. Why: M9, M1.

**Unit 5. The school topics the owner asked for** (kept as asked; parts marked above wait on the owner)
- **L12 Packs, leftovers and lining up.** Division with a remainder and rounding up (buses, boxes), equal groups (the
  greatest common factor), packs that come out even (hot dogs in 10s, buns in 8s: the least common multiple), primes as
  the pieces numbers are built from. Check: 4 of 5. Why: M24, judgement call.
- **L13 Counting ways and chances.** Multiply the choices (outfits, a PIN); "at least one" by counting the opposite;
  a test result as counts out of 1,000 on the `people` figure. Check: 4 of 5. Why: M10.
- **L14 A missing number.** Rearrange a formula (Fahrenheit to Celsius); when two price plans cost the same (two
  unknowns); a square garden from its area plus a path, by completing the square drawn on `plan` as a square with two
  strips and a missing corner. Check: 4 of 5. Why: M24, M13 (worked examples are strongest in algebra).

**L15 Two steps, mixed, and the test.** One worked two-step (paint: area, cans, cost); three two-step problems with the
first step done; 8 mixed problems of every kind; then the real-world test as the check, `retest: 14`. Why: M17, M1.

**Unit 6. Refreshers: school math for hands-on work** (added 2026-10-22; reminders, not the main method)

What it is for: after it, the learner can bring back a school fact when a job needs it (a trim length around a round table, a
square corner, a rafter's rise from its angle, a drain's drop, concrete for a post hole, a decibel reading) and get the number
right. Not in the real-world test (the test is the main method's, L15).

*The card* (one teaching screen each; M32: the learner has met these before, so one short worked example, not a worked problem
with faded steps): the fact in plain words with its picture where it has one (M15); when a hands-on person reaches for it (M26,
M27, M28); one worked example ending in a look-back; the common wrong version named where there is one (P29). Then two quick
questions from memory, each a generator with fresh numbers (M31), typed as one exact number on the calculator with its power,
square-root, memory or angle buttons as the fact needs; the working shows the fact, then the buttons, then the look-back (M6:
the look-back stays; the rough answer, the kind and the drawing of the main lessons do not, M32). A choice comes first only
where choosing is the fact (is it prime; does the order matter). Every exact answer names the `wild` slip and the slips of the
known wrong versions (M19). The lesson ends with its cards mixed, unlabeled, with earlier refreshers mixed in from L17 on
(M17, P22), then a check of fresh questions, one per card plus one, pass all but one and none wild. Each card is a topic of its
own in the weekly review (M31, P24). Every lesson is recorded as a reminder in its subject record and history.

- **L16 Circles and right triangles.** Cards: distance around = π × distance across (and area π × r × r; the tree trunk and
  the round table); the right triangle and 3-4-5 (equal diagonals, a deck's diagonal); a triangle's angles make 180°, a straight
  line 180°; a length from an angle (SOH-CAH-TOA: rise = run × tan, height = length × sin). Why: M25, M26, M27. Needs the
  angle buttons (G3).
- **L17 Scale, slope and round volumes.** Cards: similar triangles and scale (a tree by its shadow, a plan at 1/4 inch to the
  foot); slope and grade (grade = rise ÷ run × 100; a drain's 1/4 inch per foot); a cylinder and a cone (a post hole's
  concrete, a gravel pile, a third of the cylinder); unit changes (2.54 cm an inch exactly, 7.48 gallons a cubic foot). Why:
  M25, M27, M29.
- **L18 Powers, roots and log scales.** Cards: order of operations, and the calculator that works left to right (M33);
  powers of ten and scientific notation (4.7 × 10³ ohms; dividing big numbers); square roots and irrational numbers (a square
  patio's side, a square frame's brace = side × √2, never exact); logs and log scales (a log counts the tens; 10 dB is 10 times
  the sound energy, a magnitude step 10 times the shaking, a pH step 10 times as acid). Why: M25, M26, M28, M33.
- **L19 Primes and counting formulas.** Cards: primes and factors (a prime check: try the primes up to the square root;
  reducing an inch fraction); orders, n! and n × (n − 1) × … for the first few places (permutations); choices where the order
  does not matter, the same divided by the orders of the chosen (combinations). Whether the order matters is decided by one test, does swapping two of the ones picked change the result, on stories that come in both forms (one bidder for each of 3 jobs, or 3 bidders on one job), so no title gives it away (review of 2026-10-22). Why: M25 (HSS-CP.B.9), the owner's asks.

**G3 Angle buttons.** The calculator gets an extra, `calc: ['trig']`: sin, cos and tan of the number shown, in degrees, held
like √ (35 tan × 12 =). The same machine and one list as G1 (`CALC_EXTRA` in `number.js`).

## Engine gaps (smallest real designs)

- **G1 Calculator keys.** The calculator has + − × ÷ only, left to right (`CALC_LAYOUT`, `number-view.js`). Add, per ask,
  `calc: ['pow', 'sqrt', 'mem']`: a power key (xʸ) for L10, a square root for L9 and L14, and M+ / MR so a sum of
  products can be added line by line (the L1 review's blocker). Default stays four keys.
- **G2 Shapes in figures.** `plan` draws rectangles only. Add `shape: 'circle'` (a radius) and `'triangle'` (two legs and
  the slant, each labeled) to its parts, drawn with the problem's numbers.

Everything else above uses asks, blocks and figures that exist (`number` with estimate and traps, `choose`,
`document`, `rate-table`, `bar`, `plan`, `years`, `people`, generators, `leave`, `estimateCheck`, `mix`, drawn checks).
