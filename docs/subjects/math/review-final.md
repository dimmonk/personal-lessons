# Math L1–L15: final review before shipping (2026-10-22)

Both roles: learner (cold read of the regenerated learner views, each problem worked before the marked answer) and research
(data, generators over 5,000 seeds, engine logic, plan, note). Full read: L4, L7, L8, L9–L15. Quick pass: L1–L3, L5, L6.

## Verdicts

| Lesson | Verdict | Check score (learner, by reasoning) |
|---|---|---|
| L1 Ballpark and check | PASS (quick pass) | – |
| L2 Friendly numbers | PASS (quick pass) | – |
| L3 Rates and scaling | PASS (quick pass) | – |
| L4 Proportional or not? | PASS | 5/5 |
| L5 Percents forward | PASS (quick pass) | – |
| L6 Percents backward | PASS (quick pass) | – |
| L7 Areas and how much to buy | **FAIL** (D2) | 5/5 |
| L8 Circles, boxes and volume | PASS | 5/5 |
| L9 Ladders, scale and size | PASS | 5/5 |
| L10 Growth year by year | PASS | 5/5 |
| L11 What a loan costs | PASS | 5/5 |
| L12 Packs, leftovers, lining up | PASS | 5/5 |
| L13 Counting ways and chances | **FAIL** (D1) | 5/5 |
| L14 A missing number | PASS | 5/5 |
| L15 Two steps, mixed, the test | **FAIL** (D1, D2 carried in) | 15/15 |

Way of deciding, in my own words, written before each lesson's practice: every lesson gave one (L4: look for a part paid once,
checked by per-one × amount against the earlier cost; L7: area or distance around, one unit, ÷ coverage, round up; L13: count
1,000 people; and so on). None failed on this.

## Deciding defects

**D1. L13 (and every screening question in L15's check): the look-back states something false on about 1 in 5 questions.**
`gen-chance.js:93` always says "Look back: far below {s}%, because most positives come from the many who do not have it."
On 978 of 5,000 seeds the answer is over 50% (e.g. learner view L13 item 4: 64%, 80 of the 125 positives *do* have it), so
the line is wrong, and "far below 80%" for 64% is not far. The teaching screen's right line (`l13.lesson.js:22`, "most
positives come from the many who do not have it") over-generalizes the same way.
Fix: make the look-back depend on the numbers: "below {s}%, because {fp} of the {pos} positives do not have it" (and "most"
only when fp > tp); in the teaching line say "many positives can come from the many who do not have it".

**D2. L7 (and L15's first step): the number of paint cans can be had by pattern.** Two-coat cans in `g-paint` are 4 on 4,663
of 5,000 seeds (else 5); in `g-paint-cost` (L15) 3 on 4,616 of 5,000. Every paint question in the L7 view answers 4; a
learner notices and stops dividing and rounding up. Cause: round-3's rule that one coat rounded up never equals two coats
rounded down removes 3 cans, and the room and coverage ranges then land almost always in one band.
Fix: draw the room and coverage so two-coat cans spread over 4, 5 and 6 (L7) and 2–4 evenly (L15, where only one coat
rule is not in play), with a test on the distribution like the existing 400-seed one.

## Claimed fixes, verified

- L4: the earlier cost is on every price list; "the other lines do not matter" names no hidden row. Verified in all 17 items.
- L7: one coat rounded up ≠ two coats rounded down: holds in every item; coverage 250–300. (This rule is D2's cause.)
- L8: check rugs on quarter feet, round bed on half feet with 1.5 or 2 cu ft bags. Verified.
- L11: payment to three figures; worst rough 3.6% (car), 9.5% (pay later) by audit; Reg Z §1026.18 "finance charge" and
  "total of payments" checked against the CFPB text.
- L13: counts whole (Bayes gap 0.000). L14: blank sides read "nothing written"; first whole visit where the pass costs less.
- L15: fuel (gallons to 2 decimals × price) and tip-split (tip rounded first) paths: 0 of 5,000 marked wrong.
- Engine: estimate band naming a nearer slip, `wild` before traps, half-cent rounding either way, calculator memory and √
  (read in `number.js`); every printed key sequence gives its number (audit, 0 wrong). `freshSeed` (read in `schedule.js`),
  and simulated: 78 generators × 8 runs, 4 practice then 2 check each, 0 checks repeating practice numbers. Note: the learner
  views render seeds 1–N, so L9 check 16/20 and L12 check 17 look like practice repeats there; the app does not repeat them.
- Tests: `npm run test:unit` exit 0 (905 number checks, 837,296 lesson checks). OSHA 1926.1053(b)(5)(i) 1-in-4 quote checked.

Audit flags that are not defects: `[BAD] trap-inside-est` (by design now: the nearer slip is named); `g-planter`/`g-round-bed`
disagreements and `g-plans` "disagrees" (the scripts are older than the check pool, the bag sizes and the new question).

## Polish (does not block)

1. L13/L14 learner-view text "A table, year by year" labels L9's scaling table; renderer wording only.
2. L10 "within 0.1 or within 0%" and L15's result line "4 of 5" for a 15-question check: renderer wording.
3. L15 pass rule "At least 2 right among two steps": say "among the three two-step problems".
4. L15 check 9 (g-recipe): lentil soup and banana bread list "2 eggs" and "Bake or cook 25 minutes"; give each dish its own lines.
5. L5/L15 rent-rise rough working "$282 is about 20% ($282)" is garbled; L5 tip and L3 chips rough workings print the exact
   answer as the rough one; L2 groceries "nudged to about $360" with no nudge; L2 "$2,289 is close to $2,100" is a long way.
6. L4 item 2 rough rounds $2.25 to $2.30.
7. L11 card minimum payment $35 on balances up to ~$4,500 is below real minimums (usually 1% + interest); it "does not matter",
   but reads oddly.
8. L14 yoga tag says "Membership" while questions say "the pass".
9. L12 step 1 holds five ideas (buses, groups, packs, telling apart, primes) on one screen; a beginner rereads it.
10. Plan departure: L4's "cooking time" look-alike was not built (taxi, phone, gym, truck, beans instead). Paint coverage
    250–300 sq ft is below the 350–400 most can labels print (conservative, not wrong).
