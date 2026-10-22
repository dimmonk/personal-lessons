# Basic Math, lessons 16 to 19 (the refreshers): research review

Reviewer: a fresh reader (Opus 5.5), 2026-10-22, working read-only in the clone. I read `l16`–`l19.lesson.js`, the four
`gen-refresh-*.js`, the kit's `reminder`, the calculator change in `public/app/lessons/number.js`, plan Unit 6, research M25–M33 and the
build-subject skill. Judged as the owner asked: short reminders, not full lessons.

## What was run

- `node tests/math-refresh-pure.mjs`: 302 checks passed. `node tests/number-pure.mjs`: 1,102 checks passed.
- A sweep of 5,000 seeds per generator (29 generators, script in the session scratchpad). It found no thrown error and no trap value scored
  right. Every answer had already been checked against an independent formula by the refresher test.

| Generator | Distinct answers | Most common answer, share of draws |
|---|---|---|
| g-podium | 8 | 5,040: **34.6%** (the lock-code variant is always 10 × 9 × 8 × 7) |
| g-prime-check | 15 | 7: **25.2%** (half of all non-primes) |
| g-orders | 5 | 40,320: 20.2% (n is 4 to 8, so 5 values is built in) |
| g-345 | 6 | 10: 17.1% (built in) |
| g-inch-fraction | 14 | 3/4: 16.9% |
| g-sci-divide | 22 | 80,000: 12.9% |
| all others | 16 to 1,561 | 9.6% or less |

The choice questions always have the same right answer within each generator: g-orders and g-podium are "matters" 100% of the time, and
g-choose is "free" 100%. g-345's square/not-square split is 51/49.

- **The trig calculator change** (`number.js` `CALC_TRIG`, `calcTrig`): verified by reading and by pressing keys. sin 30 = 0.5, cos 90 = 0,
  tan 45 = 1, tan 90 and tan 270 give Error, and sin 180 = 0. Both orders work: "35 tan × 12 =" and "12 × 35 tan =" each give 8.4025. A
  digit typed after tan starts a new number, the same as after √. It is sound and has pure tests. No defect.

## Facts checked

- Correct: ADA 1:12 = 8.33% (2010 ADA §405.2). IPC Table 704.1: 1/4 inch a foot for pipe of 2½ inches or less, 1/8 inch a foot for 3 to
  6 inches. 2.54 cm exact and 7.48 gal/ft³ (NIST SP 811 B.8: 28.31685 ÷ 3.785412 = 7.4805). 27 ft³ a cubic yard.
- Correct, and the USGS quote was checked against the live page: a magnitude step is 10 times the amplitude and about 32 times the energy.
  pH steps are tenfold. 10 dB is 10 times the sound energy, and 3 dB is about double.
- Correct: the prime check up to √n, with the paired-factor reason. n!, nPr as n × (n − 1) × …, and nCr as nPr ÷ k!. Every worked number
  on the cards (150.72, 11.66, 4.66, 45, 26, 8.33, 2.36, 76.2, 119.68, 105, 18, 400,000, 12.25, 50.91, 25.12, 336, 56) was recomputed and
  is right.
- The circle and volume questions use π = 3.14 with a relative tolerance of 0.2%, so an answer worked with the π key is also accepted (the
  test checks this). The learner view prints "within 0%", which is only how the view tool rounds the tolerance.

## Deciding defects

1. **Wrong fact: `public/subjects/math/l18.lesson.js:18`** (and research M33, `docs/research/math.md:321–325`) says "The calculator here,
   like a basic phone calculator, works each button as you press it, left to right." Phone calculators do not reliably work that way. An
   Engadget test of iOS Calculator found it applies the order of operations (5 + 2 × 5 = 15). M33 itself says it checked only this app's
   calculator, and lesson 14 already hedges with "some phone calculators would divide first". Fix: "The calculator here, like a simple
   pocket calculator (some phone calculators differ), works each button as you press it…". Correct M33 to match.
2. **The order choice can be passed by pattern: `gen-refresh-count.js:69, 83, 115`.** Each generator's "Does the order matter?" has one
   fixed answer, and its table title shows which generator it is ("The order to work in", "Filling: first, second…", "Picking {k}"). The
   lesson's one decision, which the plan says comes first "where choosing is the fact", is never actually tested. Fix: use neutral titles,
   and give g-podium and g-choose shared case kinds that differ only in whether the places are distinct. Examples: bidders for 3 different
   jobs against 3 bidders for one shared job, or a 4-digit code against a sample pack of 4.
3. **Contradicting wording: `gen-refresh-count.js:69`.** The cell "any order works" sits beside the right answer "The order matters", so a
   beginner can defend "does not matter". Fix: remove the cell, as in the learner review, defect 1.
4. **Answer concentrated on one value: `gen-refresh-count.js:83`, the lock-code variant.** It forces n = 10 and k = 4, so its answer is
   always 5,040 (34.6% of g-podium draws). That also equals 7!, which g-orders asks. Fix: vary the code length (3 to 5 digits) or the set
   (digits or letters), or drop the variant.

## Polish (not blocking)

5. `gen-refresh-count.js:17`: the smallest divisor of a non-prime is 7 for half of them (91, 119, 133, 161, 203, 217), so "7" is right in a
   quarter of all draws. Add non-primes with smallest factor 11, 13 or 17 (for example 253, 247, 289, 323) so the answers spread out.
6. `gen-refresh-powers.js:56`: the capacitor (7.5 × 10² to 9.9 × 10⁶ farads) and the coil of wire (up to about 10⁷ m) are not real
   parts, and M27's rule is that numbers stay inside real values. Give each part its own power range, or use real cases such as a 2.2 × 10⁵
   ohm resistor or a 3.2 × 10⁶ byte file. Minus powers are taught on the card but never practised. That is acceptable for a reminder, but
   one question on a µF capacitor would cover it.
7. `gen-refresh-shapes.js:143`: the angle range of 12 to 40° is shared by a stair (really about 30 to 37°) and a wheelbarrow ramp (really
   under about 15°). Give each thing its own range (M27).
8. `gen-refresh-powers.js` g-sci-divide: the `wrongWay` trap's line "divides the photo by the drive" does not describe what happened, which
   was flipping the front numbers. Reword it.
9. `gen-refresh-scale.js` g-drain-drop: "Length of the level run" should say "pipe run", since a drain is not level.
10. L19's check has 5 items, but the plan's rule ("one per card plus one", for 3 cards) gives 4. This is harmless, but either the plan or
    the lesson should change so they agree.

## Against the plan and the research

Everything else matches Unit 6: one teaching screen per card, one worked example with a look-back, two questions with fresh numbers, a mixed
set with earlier refreshers from L17 on, and the right calculator buttons per fact. There is no rough answer (M32). Each card is its own
topic, and none is in the real-world test. The facts come from the M25 standards and the trade sources in M26 to M29. I found nothing
carried over from another subject. The cards fit the owner's ask: the principle, when to reach for it, one example, and quick questions.

## Verdict

L16 PASS, L17 PASS, L18 FAIL (defect 1), L19 FAIL (defects 2 to 4). 4 deciding defects: 1 wrong fact, 2 that let a question be answered
by pattern or wording, and 1 answer concentrated on one value. 6 polish items.
