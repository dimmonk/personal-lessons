# Basic Math: key rewrite and unit plan

Date: 2026-10-05. Standard: `docs/lesson-standard.md` version 1 (sections 3, 4 S1, 6 K1 to K9, 11, 15, 16).
Files written: `public/subjects/math/subject.js`, `public/subjects/math/key.js`, wired into `public/index.html` and the
`SHELL` of `public/sw.js` straight after `subjects/math/standard0.js`. No unit is written. The old units still run from
`standard0.js` through `FC.legacy` until each is rebuilt.

The key in one line per question (codes are data only, never shown):

| Code | Question | Answers | Names it leads to |
|---|---|---|---|
| M1 (gate, u1) | What does the problem ask you to work out? | 5 | the five families below |
| W1 (u2) | What does the problem want to know about the number or numbers? | 6 | Prime check, Prime factors, Highest common factor, Lowest common multiple, Remainder, Irrational number |
| A1 (u3) | What does the problem give that the missing number must fit? | 4 | Rearranging a formula, Proportion, Simultaneous equations, Quadratic equation |
| G1 (u4) | What happens to the amount each time it changes? | 3 | Linear growth; Exponential growth or Logarithm; A one-off change |
| G2 (u4) | Does the problem ask what the amount will be, or how long until it reaches a target? | 2 | crosses G1: separates Exponential growth from Logarithm |
| C1 (u5) | What does the problem ask you to count, or find the chance of? | 5 | Multiplying the choices, Permutations, Combinations, Counting the opposite, Base rate |
| S1 (u6) | What does the problem give you to work with? | 3 | Pythagoras’ theorem; Trigonometry; Similar shapes or Square-cube law |
| S2 (u6) | Does the problem ask how long something is, or how much area or volume it has? | 2 | crosses S1: separates Similar shapes from Square-cube law |

23 names (old: 22). Eight terms. Six tie-breaks as data (`yieldsTo`). Every name is isolated by a route (checked by a
scratch script that walks every combination of answers).

## (a) Every key change, and why

This list is `build.keyChanges`. The gate's entries belong in u1's `build`, each branch's in the unit that teaches it.

### The whole key

- **One word for one thing (section 11, K9).** The old course called the thing you choose a "tool", a "method", a
  "rule" and a "question"; it is now a **kind of problem** (the learner's word, as in every subject, is "name") and
  what you do to solve it is its **procedure**, which matches the engine's own words for procedure units
  (`app/lessons/view.js`: "the kind of problem", "procedure", "step", "slip"). "tool", "method" and "trick" are on the
  avoid list. "step" now means only a step of the working (the app's word), never a key question and never a stretch
  of time. "factor" now means only a whole number that divides another; the old second sense (the number something is
  multiplied by each period) is the term "multiplier". "amount" is the one thing followed over time; "quantity" and
  "period" are on the avoid list.
- **No name holds two names (K4, V1).** Every old name was "plain phrase (technical name)". The new name is the
  real-life word where people meet it (Permutations, Combinations, Proportion, Trigonometry, Base rate, Pythagoras’
  theorem, Highest common factor, Lowest common multiple, Linear growth, Exponential growth, Logarithm, Irrational
  number, Simultaneous equations, Quadratic equation, Square-cube law, Remainder, Prime factors) and plain words where
  the name was the app's own coinage (Prime check, Rearranging a formula, Multiplying the choices, Counting the
  opposite, A one-off change). The other half of each old name moved to `aka`, shown once on the meet card.
- **Every second question was a list of procedures, one per name (K2.2, V55).** In all five old branches the second
  question's answers each kept exactly one name ("Try dividing it by each prime up to its square root", "Write both
  numbers as primes and compare them" ...): an answer you can only give once you already know the name, and a first
  question that then decided nothing the second did not. Three branches now ask one question (each kind is defined by
  one thing, and the key says so); two ask two questions that cross (what the problem gives, then what it asks for),
  so each question separates a pair the other does not.
- **Tie-breaks are data (K2.8).** The old course stated two in prose ("Don't confuse it with ...") and none in the key.
  Six are now `yieldsTo`, listed at the top of `key.js`, and each is to be taught as an `exception` card.
- **Terms (K6), new.** The old key declared none, and used "prime", "factor", "square root", "right angle" and the
  superscript 2 untaught (audit C-9, U2-3). Now: `righttriangle` "right-angled triangle" and `formula` (u1, because the
  gate's answers use them); `prime` "prime number", `factor`, `sqroot` "square root" (u2); `squared` (u3); `multiplier`
  and `logscale` "log scale" (u4).
- **Avoid list (K6), new**, from the audit's vocabulary map: tool, method, trick, branch, unknown, quantity, period,
  composite, divisor, scale factor, ratio, exponent, independent, hypotenuse, discriminant, order(s) of magnitude.

### Gate, M1 (u1)

| Was | Now | Why |
|---|---|---|
| q "What is the question about?" | "What does the problem ask you to work out?" | "About" invites a topic (a pizza question is about food); what the problem asks for is what decides the family. |
| Whole numbers (sub: how numbers split, what is left over, when cycles line up) | How whole numbers split, repeat or are made up | A label became an answer an observer can point to; "line up" (a figure of speech) removed; the `when` now also covers "whether a number can be written exactly", which the old answer did not, though the irrational name sat under it (audit U2-8). |
| A missing number (sub: work out a hidden number from facts) | A missing number, from a formula, a rate or totals | Every problem has a missing number, its answer, so the old answer fitted every case. The new one names what the problem gives. |
| Growth over time (sub: ... or numbers from tiny to huge) | What an amount becomes over time, or how long it takes | The old answer held the log-scale name, whose own G1 answer said "Nothing is growing" (a contradiction a careful learner trips on). It now covers shrinking and a single change, and says what is asked. |
| Counting and chances (sub: how many ways, or how likely) | How many ways something can turn out, or how likely it is | `when` narrowed to the chances the key has procedures for (at least one of several; a test result). A plain share of equally likely ways (the old raffle item) is now named in `limits` as outside the key. |
| Shapes and sizes (sub: lengths, angles, areas, volumes) | A length, an area or a volume, from a right-angled triangle or the same shape at different sizes | "Shapes and sizes" fitted a rectangle's width from its area, which is a formula problem with no shape procedure behind it. The new answer names the two things every shape procedure starts from. "the same shape at different sizes" is the one wording for a copy, a model, a scale drawing or a bigger pizza. |
| (none) | unknown yieldsTo growth: "an amount that goes up or down by the same number, or is multiplied by the same number, each hour, day, month or year, or that changed once ..." | The plumber (€45 call-out plus €30 an hour), the musician (€15 an hour) and the savings jar all show a rate and a missing number. The key's line: a rate for each hour, day, month or year is an amount over time; a rate for each thing is a missing number. Checkable by pointing at "an hour", "a month". |
| (none) | unknown yieldsTo shape: "a right-angled triangle, or two things of the same shape at different sizes" | A scale model (1 to 50) or a shadow is also a rate. The old card stated this tie-break in prose only ("if the case gives you a shape ... it is a shape question"). |
| (none) | growth yieldsTo whole: "a count that goes round a loop and starts again, such as the days of a week or the hours on a clock" | "What day is it in 100 days?" runs over time but is a remainder. |
| (no `plain`, `needs`) | each gate answer carries `plain` and `needs` | A15: the gate's answers are Unit One's families. |

No "nothing to name here" gate answer (A15 last bullet, K2.9): this is not a subject of errors or frauds, and the cases
where nothing repeats (a single price rise) have their own name, A one-off change. Problems outside the key (an
everyday sum, a percentage of an amount, a plain share of ways) are named in `subject.limits`.

### Whole numbers, W1 (u2)

| Was | Now | Why |
|---|---|---|
| W1 "What do you want to find out about the number or numbers?" (4 answers) and W2 "What do you do to settle it?" (5 answers, one name each) | one question, W1 "What does the problem want to know about the number or numbers?" (6 answers, one name each) | W2's answers were the procedures (V55, K2.2). Old W1's `parts` answer joined one number (prime factors) and two numbers (GCD and LCM), so W1 could not finish the job alone; split, it can. |
| split / divtest | split "Whether one number splits into equal groups at all" | Same idea; the procedure moves to the cards. |
| parts (one number) / unique | parts "Every way one number splits, or the prime numbers that make it" | "Every way to set them out in equal rows" (the cupcakes item) is the same procedure. |
| parts (two numbers) / shared, biggest-piece half | piece "The biggest equal piece two numbers both split into" | See the split name below. |
| parts (two numbers) / shared, line-up half | together "When two things that repeat next happen together" | Fixes the gears route (audit U7-4): gears repeat, and "built out of" never described them. A learner who says "they repeat" now gives the key's answer. |
| cycle / remainder "Where a count lands after going round and round one loop" | cycle "What is left over, or where a count ends on a loop" | The old M1 drill's sweets item (share 50 among 7, the leftovers to the teacher) is the same procedure and had no answer. |
| exact / proof "Show that no fraction can ever equal it (a proof)" | exact "Whether a number can be written exactly" | The proof is a card, not an answer a problem shows. |
| outcome gcdlcm "Biggest shared piece or first line-up (GCD / LCM)" | two outcomes: hcf "Highest common factor", lcm "Lowest common multiple" | Two procedures with opposite rules (keep the shared primes; keep every prime the most times either has it) and opposite answers (6 and 36 for 12 and 18). The old card itself warned "do not mix up the two halves", and specimen 2's verdict had to say "the first line-up half". One name for two things breaks P5; the slash and brackets break V1. They are now a ledger pair. |
| modrem "Remainder (mod)" | "Remainder" (aka: clock arithmetic, modular arithmetic) | V1. "mod" is not an `aka` because V8 matches by substring and would flag "model". |
| irrat "A number with no exact fraction (irrational)" | "Irrational number" (aka: a number with no exact fraction) | V1; the real-life name is the target (K4). |

### Missing numbers, A1 (u3)

| Was | Now | Why |
|---|---|---|
| A1 "How does the missing number show up?" (once / sq / two) and A2 "What do you want out of it?" (isolate / scale / crossing / roots, one name each) | one question, A1 "What does the problem give that the missing number must fit?" (4 answers) | A2 kept one name per answer (V55). A1's "once" could not tell rearranging from proportion (audit U3-3). A2's "roots" ("When something reaches zero, or whether it ever does") described one story, a thrown stone, not the kind of problem. What is given (a formula and its result; a rate and a new amount; two facts; a formula with the missing number multiplied by itself) is what decides the procedure and is visible in every case. |
| (none) | rate yieldsTo formula: "a fixed amount added on top of the rate, such as a call-out fee or a standing charge" | The electricity bill (€8 a month plus €0.25 a unit) shows a rate and a formula. |
| (none) | formula yieldsTo itself: "the missing number multiplied by itself" | The break-even profit (−x² + 12x − 20) is a formula and a result too. |
| rate's `when` | says the rate is for each thing, not for each hour, month or year | Restates the gate's tie-break where the question is taught. |
| names | Rearranging a formula (kept), Proportion, Simultaneous equations, Quadratic equation | K4, V1. |

### Growth, G1 and G2 (u4)

| Was | Now | Why |
|---|---|---|
| G1 add "The same amount is added each time" | adds "It goes up or down by the same number each time" | Same grammatical form as the multiplying answer, so the difference is only the verb (K2.5); covers taking away (the candle); "amount" kept for the thing followed. |
| G1 mult | multiplies "It is multiplied by the same number each time" (kept) | |
| G1 spread "Nothing is growing; the numbers just range from tiny to enormous" | removed | See the log-scale name below. |
| (none) | once "It changed once, and has stayed the same since" | The handoff leftover: the drill answer "Neither — a one-off jump" was in no key step. K2.9: a problem where nothing repeats needs somewhere to go. |
| G2 "What are you trying to work out?" (total / size / steps / display, one name each) | G2 "Does the problem ask what the amount will be, or how long until it reaches a target?" (willbe / howlong), crossed with G1 | Old G2 kept one name per answer (V55), and its "total" and "size" answers both fitted the shoebox, so a defensible route was marked wrong (audit U7-4). Crossed, G2 has one job: separating the two multiplying kinds. Linear growth and A one-off change are kept by both answers, because each is worked by one procedure whichever is asked. "target" is used, not "size", because "size" is the shape branch's word for how big a copy is. |
| outcome logscale "Equal space for each ×10 (log scale)" | removed as a name; "log scale" becomes a term taught in u4 | It is a way of drawing, not a kind of problem with a procedure that gives a number. Its problems (how many times bigger is a point three gridlines up; how many ten-times steps from a mouse to a whale) are worked by the multiplying procedures, so they route through G1 multiplies. The audit found it had no specimen and no drill item that could be answered (U4-3, U7-3). |
| (none) | outcome oneoff "A one-off change" | Its procedure gives a number (the amount stays where it is), and its wrong choices are named slips (carrying the change forward as if it added, or as if it multiplied). |
| lin "Adding the same amount each time (linear growth)" | "Linear growth", needs covers what it will be and how long | One procedure (start, plus the same number times how many times) answers both asks. |
| expg, logsolve | "Exponential growth", "Logarithm" | V1, K4. "How many steps to get there" also used "step" for time. |

### Counting and chances, C1 (u5)

| Was | Now | Why |
|---|---|---|
| C1 "What is the question asking for?" (arrange / atleast / given) and C2 "What detail in the case decides it?" (slots / group / order / none / rare, one name each) | one question, C1 "What does the problem ask you to count, or find the chance of?" (5 answers) | C2 kept one name per answer (V55); C1 grouped three counting names that C2 split again, so C1 separated no pair C2 did not. C2's "none" answer ("Counting none of them is far easier than counting at least one") was advice, not something a problem shows. "slots" and "menu" were figures of speech (K2.6). |
| names | Multiplying the choices, Permutations, Combinations, Counting the opposite, Base rate | K4, V1. "Counting the opposite" and "Multiplying the choices" stay plain: the textbook names (complement rule, multiplication principle) are `aka`. |

### Shapes, S1 and S2 (u6)

| Was | Now | Why |
|---|---|---|
| S1 "What do you have to work with?" | "What does the problem give you to work with?" | Same question; "the problem" is the subject's word for the case. |
| twosides "Two sides of a right-angled triangle" | kept; `when` says any two of its sides, and no angle besides the right angle | Audit U3-5: the old wording ("two sides around a right angle") did not describe the ladder (the long side and one short side), and "no angles given" contradicted the right angle. |
| angleside "One angle and one side" | sideangle "One side and one angle of a right-angled triangle" | The procedure needs the right angle. |
| samesh | matching "Two things of the same shape at different sizes" | One wording for a copy (K9). |
| (none) | twosides yieldsTo matching: "a second thing of the same shape at a different size, and the length wanted is on that second thing" | Found when re-running the old shadow item (K2.10): the child and her shadow are two sides of a right-angled triangle, so the problem shows both answers. |
| S2 "What do you want to find?" (third / unreach / ratiolen / areavol, one name each) | S2 "Does the problem ask how long something is, or how much area or volume it has?" (length / room), crossed with S1 | V55; three of its four answers restated S1. |
| names | Pythagoras’ theorem, Trigonometry, Similar shapes, Square-cube law | K4, V1 (the old en dash in "square–cube" breaks V1). |

## (b) Unit plan

Order follows the gate's answers, which is also the old course's order (F6: gate unit first; branch units in key
order). Every unit after the first assumes every earlier one, so each drill can carry earlier kinds unlabelled
(A12, P22 requires 8) and every term is available by token. `subject.units` lists u1 to u6 and keeps u7 for the old
"Running the whole key" until the subject is fully rebuilt (see gap 1).

Shared for u2 to u6 (A12, fixture `tests/fixtures/procedure-unit.mjs`): per name, `meet`, `again`, `portrait`, `check`,
then two `solved` cards in different areas of life with every number worked and one held step, then a `check` with
`ask: { type: 'solve' }`; `lookalike` cards as soon as both of a pair are taught; the `question` card(s) and a step
check; drill stages `last`, `whole`, `route`, every item a problem whose wrong choices each carry a `slip`; three
`returns` problems per name; `recap`, `transfer`. Every problem asked in a `route` stage or returned carries cues and a
reason for M1 as well as the unit's own questions (S6). No problem shown on a card is asked (W5.4): the old cards'
worked examples become `solved` problems, and the old drill items become drill and return problems.

### u1, kind C (gate unit, A15)

- Title `{ text: 'What kind of problem is it?' }`. Teaches steps [M1]; families [whole, unknown, growth, chance, shape];
  outcomes []; terms [righttriangle, formula]. Assumes [].
- Parts follow the five families; ledger pairs families: whole~chance (24 friends in equal rows, against four friends
  in a row), unknown~growth, unknown~shape, growth~whole, unknown~chance (the bake sale's "how many of each" is fixed
  by two totals, not counted ways).
- Exceptions, one per tie-break: the plumber per hour (looks like a missing number, is growth); a scale model 1 to 50
  (looks like a rate, is shape); a delivery in 100 days (looks like growth, is whole numbers). One with no tie-break:
  the falling stone (height 20 − 5t² after t seconds: changes over time, but by a formula, not the same number each
  second, so it is a missing number).
- Refute candidates: "the numbers tell you the procedure" (the old Unit One opening, school's chapter headings);
  "'how many' means counting" (the bake sale). Sources `app-data` (the audit's learner simulation), `verified: false`.
- Drill: `piece` (M1 on new problems, a reverse item for each family, `tell` items for the family pairs), `route` (M1
  mixed, two or more per family, clean before misleading, the tie-break cases last), `claim` (ask `option` on M1).
- Replaces: old Unit One's nine cards (the five family cards, "the five kinds side by side", the baker sort) and the M1
  drill (`m1`, 10 items). The baker sort becomes a worked case.

### u2, kind P: How whole numbers split, repeat or are made up

- Title `{ fromKey: 'M1.whole' }`. Teaches [W1]; outcomes [prime, factor, hcf, lcm, modrem, irrat]; terms [prime,
  factor, sqroot]. Assumes [u1].
- Order and parts (A2, A13, following W1's answers): one number (prime, then factor; `sqroot` before prime's first
  solved card, because the check stops at the square root), two numbers (hcf, then lcm), leftovers and loops (modrem),
  exact or not (irrat).
- Ledger, all on W1: prime~factor (only whether it splits, or every way?), factor~hcf (one number or two?), hcf~lcm
  (the biggest piece both split into, or the first time both happen together? the first is never more than the smaller
  number, the second never less than the bigger), lcm~modrem (two things that repeat, or one loop and a count?),
  prime~irrat (whether it splits, or whether it is exact?).
- Solved problems from the old cards: 67 and 119 (prime), 84 (factor), the 60 by 84 cm panel (hcf), buses every 20 and
  30 minutes (lcm), 9 o'clock plus 50 hours (modrem), the diagonal of a 1 m square (irrat), the fence posts 126 and 90
  (hcf, second). Each needs a second solved problem in another setting.
- Drill and returns from the old M2 items (53 members, the 143 claim, 90 cupcakes, 391, street lights 8 and 12, boards
  150 and 210, the 50th bead, the 29-stop bus loop, π and 22/7, the 7 m² garden), the M1 sweets and 221 chairs, and the
  claims ERR 9 (Monday plus 50 days: slip "you threw away the 1 left over") and ERR 10 (133: slip "you stopped testing
  at 5"). Topics must not repeat specimens 1 to 3 (91; gears; Tuesday plus 100 days) (V52).
- Replaces: old Unit Two (cards, `m2` drill), specimens 1 to 3, ERR 9 and 10.
- This is the first procedure unit of the subject and the exemplar of kind P (F6.6): read it cold before u3 to u6 are
  written.

### u3, kind P: A missing number, from a formula, a rate or totals

- Title `{ fromKey: 'M1.unknown' }`. Teaches [A1]; outcomes [rearr, prop, simul, quad]; terms [squared]. Assumes [u1, u2]
  (u2 for `sqroot`, which the quadratic procedure needs).
- Order: rearr, prop (pair), simul, quad. Ledger on A1: rearr~prop, rearr~quad, rearr~simul.
- Exceptions: the electricity bill (looks like a rate, is a formula: rate yieldsTo formula); break-even profit (looks
  like a formula, is a quadratic: formula yieldsTo itself). The old "Does an answer exist?" card becomes part of the
  quadratic portrait: when the squared number must equal a negative number, there is no answer.
- Solved problems from the old cards' worked examples: the oven at 392 °F (rearr), fuel at 6 litres per 100 km (prop: a
  rate for each kilometre, not for time), theatre tickets at €12 and €7 (simul), the garden 3 m longer than it is wide
  with area 40 m² (quad). The thrown ball (h = 6t − t²) is too close to specimen 5's stone to sit in the same unit as
  a quadratic case (V52, W5.4); use it for "whether it ever reaches a height" only if specimen 5 is rewritten. Each
  name needs a second solved problem in another setting. Drill from M3 items 1 to 8 (electricity, room width, recipe
  for 7, prints, café, chickens and goats, profit, consecutive numbers 56) and the M1 bake sale.
- Replaces: old Unit Three, first half (cards 1 to 9), M3 items 1 to 8, specimens 4 to 6.

### u4, kind P: What an amount becomes over time, or how long it takes

- Title `{ fromKey: 'M1.growth' }`. Teaches [G1, G2]; outcomes [lin, expg, logsolve, oneoff]; terms [multiplier,
  logscale]. Assumes [u1, u2, u3].
- Order and parts (following G1's answers): goes up or down by the same number (lin), multiplied (expg, then logsolve),
  changed once (oneoff). `multiplier` before expg's first solved card (5% a year is a multiplier of 1.05); `logscale`
  before expg's portrait, and used again in a drill problem (reading how many times bigger a point is three gridlines
  up), as V6 requires.
- Ledger: lin~expg (G1), expg~logsolve (G2), lin~oneoff (G1), lin~logsolve (G1). V55 holds: G1's multiplying answer
  keeps two names, and each G2 answer keeps three.
- Exceptions without a tie-break: interest paid out each year and not left in (a percentage, but the same number each
  year, so linear); the rumour (each person tells two new people, so ×3 a day, not ×2).
- Solved problems from the old cards (water tank 20 + 4 a minute; a car losing €1,500 a year; video views doubling;
  €1,000 at 5%; the app at 10% a week; €1,000 doubling at 5%; the bus fare €2.00 to €2.40; the jacket at 20% then 10%
  off for `multiplier`). The old card's rumour example must not be reused: specimen 8 is the rumour (V52). Drill from M4 (musician, candle, bacteria, car value,
  credit card, 4% doubling, pond weed, the phone plan and the coffee shop, each given a question with a number), the
  M1 plumber (lin, how long) and town at 3%. Claims folded in as problems: ERR 1 (sales up €3,000 a month called
  exponential), ERR 2 (rents up 10% three years running: slip "you added the three rises"), ERR 8 (10% a year doubles
  in 10 years: slip "you added 10% ten times"). The old log-scale items (the virus chart, the 200 cities, the museum
  time chart) have no route under the new key: rewrite each as a log-scale problem that multiplies (how many times
  bigger, how many ten-times steps) or drop it.
- Replaces: old Unit Four (cards, `m4`), specimens 7 to 9, ERR 1, 2, 8.

### u5, kind P: How many ways something can turn out, or how likely it is

- Title `{ fromKey: 'M1.chance' }`. Teaches [C1]; outcomes [multprin, perm, comb, complement, baserate]; terms [].
  Assumes [u1 to u4].
- Order: multprin, perm (pair), comb (pair with perm), complement, baserate. Ledger on C1: multprin~perm, perm~comb,
  multprin~comb, complement~multprin (both multiply separate things), complement~baserate (both chances).
- Refute candidates: "a 95% accurate test means a 95% chance I have it" (base rate); "a combination lock counts
  combinations" (it is Multiplying the choices; the real-life word is the trap); "black is due after six reds" (the
  old ERR 6, which has no procedure of its own; `testedBy` a Counting the opposite problem).
- Drill from M5 (bike lock, pizza sizes, 12 runners, seven books, 4 of 9 students, 3 toppings of 8, rain on 3 days, 30
  servers, airport scanner, drug test) and the M1 café lunches. Claims folded in: ERR 3 (test 95%: slip "you took the
  test's accuracy as the chance"), ERR 5 (six rolls of a die: slip "you added the six chances").
- Replaces: old Unit Five (cards, `m5`), specimens 10 to 12, ERR 3, 5, 6.

### u6, kind P: A length, an area or a volume, from a right-angled triangle or the same shape at different sizes

- Title `{ fromKey: 'M1.shape' }`. Teaches [S1, S2]; outcomes [pyth, trig, similar, sqcube]; terms [] (it uses
  `righttriangle` from u1, `sqroot` from u2, `squared` from u3). Assumes [u1 to u5].
- Order and parts (following S1's answers): right-angled triangles (pyth, then trig), the same shape at different sizes
  (similar, then sqcube). Ledger: pyth~trig (S1), similar~sqcube (S2), pyth~similar (S1, the shadow).
- Exception with a tie-break: the shadow (the child is two sides of a right-angled triangle, but the length wanted is
  the lamp post's: twosides yieldsTo matching). Teach both Pythagoras cases (adding the squares for the long side,
  taking away for a short side: the ladder).
- The calculator keys for sin, cos and tan need a card; see gap 2 before declaring them as terms.
- Solved problems from the old cards: the 30 by 40 m yard and the 10 m cable to a pole (pyth, one each way), the tower
  seen at 35° from 30 m and the kite on 50 m of string at 40° (trig), the 10 by 15 cm photo enlarged (similar), the
  10 cm and 20 cm cubes (sqcube). The old card's shadow (person and tree) is the tie-break case: put it on the
  exception card, not in a solved card, and keep the drill's lamp-post shadow a different story.
- Drill from M3 items 9 to 16 (phone screen, hill road, ramp, ladder at 70°, bridge model, shadow, paint tins, window),
  the M1 lake and model aeroplane. Claims folded in: ERR 4 (the shed: slip "you multiplied the area by 3, as for a
  length"), ERR 7 (garden diagonal 5 + 12: slip "you added the two sides").
- Replaces: old Unit Three, second half (cards 10 to 15), specimens 13 and 14, ERR 4 and 7.

### Old material with no unit of its own

- Old Unit Six (faulty claims): its card's advice is folded into the `refute` cards above; its claims become problems
  (procedure units have no `claim` stage, gap 3). The old "Taking apart a claim about a chart" card feeds u4's log-scale
  term card.
- Old Unit Seven (the whole key): replaced by the app's run of the whole key on the re-keyed specimens (E13), and its
  "Using the key on your own case" card by each unit's `transfer`. It stays as u7 until every unit is rebuilt.
- Specimens to add for names with none (old handoff list, updated): factor, hcf, irrat, rearr, multprin, perm, trig,
  similar, oneoff. The old log-scale name is gone; the old GCD / LCM specimen (gears) is now Lowest common multiple, so
  Highest common factor needs its own.

## (c) Every old specimen, one question at a time (K2.10)

Old route in old codes; new route in new codes. "Also" lists an answer the problem shows that loses to its own by the
key's tie-break (S6 `also`). Every specimen is rewritten in the new shape regardless (`route`, `cues`, `reason` for every
question including M1, `not`, `wouldChange`); this table says whether its story can stay.

| # | Problem | Old route | M1 | Branch questions | Name | Verdict |
|---|---|---|---|---|---|---|
| 1 | Someone says 91 is prime | whole, split, divtest → prime | whole: one whole number, whether it splits | W1 split ("is prime") | Prime check | Keeps its story. No second defensible answer: it asks yes or no, not what 91 is made of. |
| 2 | Gears with 12 and 18 teeth, marks meet again | whole, parts, shared → gcdlcm | whole | W1 together: two things that repeat, when they happen together. `cycle` is not defensible: its `when` needs one loop and one count | Lowest common multiple | Keeps its story. The old route marked the natural answer ("they repeat") wrong; the new one is that answer. |
| 3 | Tuesday, delivery in 100 days | whole, cycle, remainder → modrem | whole. Also growth? No: no amount changes. The growth→whole tie-break is taught on a problem that does show an amount (u1) | W1 cycle: one loop of 7 days and a count | Remainder | Keeps its story. |
| 4 | Fifteen banknotes, fives and tens, €120 | unknown, two, crossing → simul | unknown: two totals | A1 totals | Simultaneous equations | Keeps its story. |
| 5 | Stone dropped, height 20 − 5t², when it lands | unknown, sq, roots → quad | unknown. Not growth: the height changes over time, but not by the same number or the same multiple each second | A1 itself; also A1 formula (loses to itself) | Quadratic equation | Keeps its story; `also: ['formula']`. Good second exception for u1 (looks like growth, is a missing number). |
| 6 | Paint 12 m² a litre, wall 30 m² | unknown, once, scale → prop | unknown: a rate for each thing (a litre), not for time | A1 rate | Proportion | Keeps its story. |
| 7 | Friend says his savings grow exponentially, €200 a month in a shoebox | growth, add, total → lin | growth: same number each month | G1 adds; G2: **no answer**, the problem asks no number (no time, no target) | Linear growth | **Rewrite**: add a question with a number ("how much after a year?" gives G2 willbe; or "how long until €3,000?" gives howlong). As written it is a claim, not a problem (it suits a u4 problem whose slip is calling it exponential). |
| 8 | Rumour, each tells two new people a day, after two weeks | growth, mult, size → expg | growth | G1 multiplies (×3 a day: each knower stays and brings in two); G2 willbe (after 14 days) | Exponential growth | Keeps its story; the reason must write out why it is ×3, not ×2 (audit U4-6). Do not reuse the rumour in u4's cards (V52). |
| 9 | 7% a year, "about ten years to double" | growth, mult, steps → logsolve | growth | G1 multiplies; G2 howlong (target: double) | Logarithm | Keeps its story. |
| 10 | 23 people, two share a birthday | chance, atleast, none → complement | chance | C1 atleast | Counting the opposite | Keeps its story. |
| 11 | 99% test, 1 in 10,000, positive | chance, given, rare → baserate | chance | C1 test | Base rate | Keeps its story. |
| 12 | Six numbers from 49, how many tickets | chance, arrange, group → comb | chance | C1 group | Combinations | Keeps its story. |
| 13 | 5 m ladder, base 1.5 m from the wall | shape, twosides, third → pyth | shape: a right-angled triangle (wall and ground) | S1 twosides (any two sides: the long one and one short one); S2 length | Pythagoras’ theorem | Keeps its story. The old wording did not describe it (audit U3-5); the new one does. |
| 14 | 16-inch pizza at twice the price of the 8-inch | shape, samesh, areavol → sqcube | shape: the same shape at different sizes. Not a missing number: "twice the price" is not a rate | S1 matching; S2 room (area) | Square-cube law | Keeps its story. |

Outcome: 13 of 14 keep their story under the new key; specimen 7 must be rewritten because it asks for no number.
None now has two defensible answers that the key does not settle.

### The old drill and claim banks, in brief

Run the same way; only the ones whose route changes or fails are listed.

- **Change family:** M1 plumber (€30 an hour) was "A missing number", now growth, Linear growth, how long (gate
  tie-break). M4 musician and candle stay Linear growth. M3 electricity bill (per unit) stays a formula. M3 room width
  (a rectangle) stays Rearranging a formula: no right-angled triangle.
- **Split name:** M2 street lights (8 s and 12 s) are Lowest common multiple; M2 boards (150 and 210) are Highest common
  factor.
- **No route, rewrite or drop:** M4 phone plan and coffee shop (Neither — a one-off jump) need a question with a number
  to answer G2; M4 science chart, M4 200 cities, M1 museum time chart (old log scale) have no family (nothing changes
  over time and nothing is multiplied); M1 raffle (5 tickets of 200) is a plain share of ways, outside the key
  (`limits`); ERR 6 (roulette) has no procedure and becomes a `refute` card.
- **Every other item** (M2 1 to 10, M3 1 to 16, M4 1 to 9, M5 1 to 10, M1 sweets, chairs, bake sale, town, café, lake,
  model aeroplane; ERR 1 to 5 and 7 to 10) has one defensible answer to every question under the new key and goes to
  the unit listed in (b).

## (d) Gaps this subject's units are expected to hit

1. **Legacy course entries have no ids** (`standard0.js` `MATH_COURSE`). While no unit is rebuilt, `app/state.js`
   `legacyEntry` maps `subject.units` to the old course by position, so the list must stay seven long (it is: u1 to u6
   plus u7). Once any math unit is rebuilt it looks entries up by `id`, and without ids the whole app throws at load
   (the same error showed today for civics' u8). The u1 build must add `id: 'u1'` to `'u7'` to the seven old entries in
   the same commit.
2. **V2 and V8 match by raw substring, not whole words** (`tests/lessons/rules-vocab.mjs`). Short key lines and `aka`
   words therefore flag ordinary prose: the term "factor" flags "factory", "formula" flags "formulae", the name
   "Remainder" forbids typing "remainder" anywhere (cards must say "what is left over"), and calculator keys "tan",
   "sin", "cos" cannot be declared as terms under those names (they would flag "distance", "using", "cost"). I kept
   `aka` entries long for this reason (no "mod", "log", "surd"). If u6 needs the keys as terms, name them "the tan key"
   and so on, or make V2 and V8 whole-word.
3. **Procedure units have no `claim` stage** (V38: `last`, `whole`, `route`). The old faulty claims return as problems
   whose wrong choice is the claim's own slip; a claim with no procedure (roulette) becomes a `refute` card. In the
   gate unit a claim's `ask: { type: 'missing' }` takes an outcome, and A15 does not say it may take a family, so u1's
   claims use `ask: { type: 'option', step: 'M1' }`.
4. **Look-alikes from different families cannot be ledger entries in a branch unit.** V15 sets `step` to the first
   question the unit teaches on which the pair share no answer; for Proportion against Similar shapes, Linear growth
   against Rearranging a formula (the per-hour rate), and Remainder against growth, that question is only M1, taught in
   u1. S3 has no form for an outcome-level pair separated only by the gate, so these live in u1's family ledger and
   come back in later units only through `earlier` items.
5. **The key map draws a crossed second question as if each answer led straight to names**
   (`app/lessons/key-map.js` `leadsTo`): G2 reads "What the amount will be after a given time → Linear growth ·
   Exponential growth · A one-off change", without showing that G1 has already narrowed it. No subject has a
   two-question branch yet; check the preview, the question card and the reference map when u4 and u6 are built.
6. **V17** (no step's `purpose` holds a whole word of a case topic): the purposes use "amount", "number", "time",
   "shape", "target", "test". Case topics must avoid those words.
7. **Linear growth is kept by both G2 answers.** Its two `solved` cards should show the one procedure used both ways
   (forward to a time, back to how long); if the cold read shows a beginner needs them as two kinds, that is a key
   change, settled in the key, not in the unit.
8. **The first procedure unit is u2** and is the exemplar of kind P (F6.6, A12): read it cold before u3 to u6. The
   fixture is the only reference for `solved`, `solve` checks and problem `slip`s.
9. **V46, the lock.** The lesson validator now reports "math: content differs from the lock": a lock entry for math was
   written while this rewrite was in progress (not by me; I did not touch `tests/`). Run `node tests/lessons/lock.mjs`
   once the key is final.
10. **Size.** u2 teaches six names, each with two solved cards, checks and look-alikes: expect about 60 cards and well
    over one `cards-<k>` file (F3).
