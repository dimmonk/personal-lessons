# Statistical Claims, lessons 0 to 5: research review, round 4 (2026-10-22)

Read: the L0–L5 data files (`public/subjects/stats/`), the regenerated learner views, `plan.md`, `docs/research/stats.md`, the build-subject
skill, `fixes-l0-5-round3.md`. Ran `node tests/stats-lessons-pure.mjs` (5,820 checks pass) and the six generators over 1,000 seeds each
(script in the reviewer's scratchpad: integrity of every count, the test generators' share of real positives, and a two-sample z for the risk
generators). Web check of quoted passages: Calling Bullshit syllabus (T9's "Regression to the mean pitched as treatment effect", "Selection
masked as transformation", T7's "Simpson's paradox", "Data censoring", "Means versus medians": all verbatim); Full Fact (T12's three
passages: verbatim; the third is the first clause of a longer sentence, fair).

## Round 3 fixes: all verified
1 p-crosswalk (cause out of the headline; L1 screen on "fell after"), 2 L2's strong-word rule and q-cards, 3 L3's tap prompt, 4 k-engine
scoped to warning-light cars, 5 g-test names its group (and "anyone tested" is the slip), 6 q-schools (grade-by-grade favors Hillcrest;
numbers recomputed: 81.8% vs 62.7%). A1 (closest-to-headline wording now right on 33 of 116), A2–A6 as stated. Every number in the L0–L5
fixed items recomputed by hand: no arithmetic error (hospitals 905/676, Marlow 323/328, Pinewood 4 vs Westbrook 2 per 1,000, all L4 trees).

## Verdict: FAIL (2 deciding defects)

### Deciding
1. **Wrong inference in g-risk-fair (L3), and in fixed L3 items without group sizes.** The fair form's feedback says "The coin toss means
   the pill made the difference" on counts that chance alone could give. Over 1,000 seeds, 254 have a gap under two standard errors; the
   worst are 40 vs 32 of 2,000 (z ≈ 0.95), 80 vs 64 of 4,000 (seed 12 in the learner view, z ≈ 1.35), 80 vs 64 of 2,000, 120 vs 96 of
   2,000. The field asks this question: "Too small a sample" (T2, Spiegelhalter), "Is the sample large enough?" (T8, Gal), and L6 teaches
   "could be this far off by luck", so L3 now teaches the opposite of L6 on a quarter of its generated items. Fix: groups of 20,000 and
   40,000 in `gen-risk.js` (the smallest fair-form gap, 20 vs 16 in 1,000, is then z ≈ 3.0), and a pure test that every fair-form seed is
   beyond two standard errors. Advisory with it: Ostrel, Ravel, Tolpex and the safety-training check give rates with no group size yet say
   the trial shows the difference; add "of 10,000 adults" (or similar) so the claim rests on something.
2. **k-tickets (L5 check) has a second defensible tap answer** and an unsupported fact. "Tap the sentence that gives what its number is
   compared with": last June's 950 is also a comparison number, and it is the fair one the lesson tells the learner to look for; the marked
   answer (February) is right only for "the number the 60% is computed from". The reason also asserts February is "a slow month for season
   tickets", which the text does not say. Fix: across L5 word the tap ask as "the sentence the headline's number comes from" (Step 1 to
   match), and put "February, the slowest month for season tickets" in the story or drop the clause.

### Advisory (not deciding)
3. k-tutor (L3 check): the reason says "students chose the program"; the story does not. Verdict stands on the size alone (1 in 50, not
   1 in 5). Add a line ("Students sign up for the program themselves") or cut the clause.
4. k-5k (L1 check): "They work!" is a general claim, so the who-slip "PowerPeak shakes cut a runner's 5K time by 2 minutes" is arguably
   what the post says. Make the slip plainly about other people.
5. q-marlow (L5): "pass rate climbs to 95%" is literally true; the marked claim ("more students are passing") is the reader's take-away and
   the item teaches Goodhart well, but the claim option should name the reading explicitly ("Marlow High students are doing better on the
   test than last year") so the literal rate is not also defensible.
6. About fifteen cause-slips name a cause the text never mentions (a new pool, new coach, new drivers, new owner, new bins, cold snap,
   cutting the fee, a new bug, a new lunch menu, booming business, weather); T4/T3's slip is hearing a cause in the text's own words, as
   p-crosswalk now does. Rewrite these to the cause the text names, and extend the pure test's give-away rule to nouns absent from the text.

### Polish
- g-test source line names the outlet after the product ("Orrel swab · Health News"); use the town paper.
- L2's "clearly above the usual" for a plain "more than usual" has no number; no item tests it.
- Result examples in the learner view ("4 of 5" on L4's 4-item check; L0's "Of 6 … Of 4") do not match the lessons.

## Way of thinking and carried-over structure
L1–L5 follow the note's moves 1–3 and 6 (T12 claim first, T5/T6/T10 sizes as counts in 1,000, T7 fair comparison) and the plan's single
verdict rule; sound and cannot-tell items appear in every set and check (T20). No structure looks carried over from another subject: the
standing three asks, natural-frequency trees and contrast pair each cite this note.

Counts: deciding 2 (wrong inference 1, arguable answer 1); advisory 4 (unsupported feedback fact 1, arguable 2, give-away pattern 1);
polish 3.
