# Research review, round 2: stats L0 to L5 (build-subject step 6, role "research")

Reviewer: a fresh agent (Opus 5.5) that did not build these lessons, 2026-10-22. Read-only, except for this file. Read: `plan.md`,
`docs/research/stats.md`, the build-subject skill, `l0`–`l5.lesson.js`, `subject.js`, every items/gen file for L0–L5, the learner views
l0–l5 (spot checks), V75 in `tests/lessons/rules-lesson.mjs` and its lesson-standard lines, and `fixes-l0-5.md` (to verify claims only).
Every number in every fixed item was recomputed by hand. Each generator was run on 2,000 seeds (scratchpad `gencheck.mjs`): every
parameter value, every headline form against its verdict, whole numbers, and (L4) the share of real positives against the verdict.
`node tests/stats-lessons-pure.mjs` (4,146 checks) and `node tests/validate-lessons.mjs` (817,139 checks) both pass on the working tree.

## Source spot-checks (note against the web)

| Note | Checked against | Result |
|---|---|---|
| T5 Akl et al. 2011: SMD 0.02 understanding, 0.41 perceived larger, 0.66 more persuasive | PMC6464912 abstract | Verbatim match |
| T10 Akl et al.: natural frequencies SMD 0.69 | same | Verbatim match (CI 0.45 to 0.93) |
| T5 Gigerenzer et al. 2007 summary: "reduces the risk ... by 25% in fact means that 1 less woman out of 1,000" | PubMed 26161749, Konstanz record | Matches the abstract |

No quoted passage was found to be wrong (round 1 also checked T3, T12, T16).

## Round-1 fixes: verified

Fixed as claimed: the risk generator ranges (years 3/4/5/10 and base 20–80 all appear); q-passrate (328 → 323 passed, fewer students);
q-bus (people riding, not rides); q-insure replaces the jobless rate; q-hip is an invented product in a coin-toss trial; the L4
"accurate" screen; every L2 `need` says "above the usual (N)"; k-tickets uses monthly sales; q-schools has a basic and an advanced test;
k-seat's right claim is the link; k-training is a lottery with a quarter against "half"; b-club, k-farm, p-recycle-unfair and the
L5 right claims now say what a reader takes away; the L2 money screen, q-library and k-stadium (T6) are in; the L2 check has five typed
sizes; p-crosswalk's corners were picked for traffic; r-stopsign matches. "Halves" and "slashes" now sit on both verdicts in L3,
"N% accurate" and "usually right" on both in L4, "soar/boom" on both in L2. All arithmetic in the fixed items checks out, apart from
item 3 below.

## Defects that decide the verdict

### A. Answers you can get without the reasoning

1. **gen-risk.js:11, 32, 39: the share word in the headline gives the verdict.** g-risk-fair draws `cut: [25, 50]`, so its headline says
   "by a quarter" or "by half"; g-risk-over draws `cut: [20, 25]` and claims twice that, so it says "by 40%" or "by half". On 2,000 seeds:
   "by a quarter" is always Holds up, "by 40%" is always Does not show it; only "half" falls on both. The file's own comment says "The
   words are the same in both", and the lesson rule (l3.lesson.js:18) says the numbers decide. **Fix:** let both forms draw from the
   same share words. For example fair `cut: [20, 25, 40, 50]` (all give whole numbers on base 20–80 and groups of 2,000/4,000) and over
   real cut `[10, 20, 25]` claimed as `[20, 40, 50]` (add `10: ["a tenth", ...]` to SHARE); then "a fifth", "40%" and "half" sit on
   both. Add to `stats-lessons-pure.mjs` the same assertion the fixed items have: every headline share word appears on both verdicts.
2. **items-size.js:254–269 k-bread (L2 check): the check repeats the teaching screen's numbers.** l2.lesson.js:18 works "75 loaves
   returned out of 1,500 baked is 75 ÷ 1,500 × 1,000 = 50 in every 1,000"; k-bread asks the learner to type the size of "75 of the
   1,500 loaves", answer 50. The typed size in the check is recall of the screen, not the procedure. **Fix:** new numbers in k-bread
   (for example 90 of 1,800 returned, usual 50: still 50, still the usual), or a different example on the screen.

### B. Marked answers that are wrong or arguable

3. **items-test.js:146–156 q-allergy (L4): the marked verdict breaks the lesson's own rule.** 60 in 1,000 have it, the test finds 48,
   flags 47 of the 940 others: 95 positives, 48 real. 48 of 95 is 50.5%, so *most* positives are real, and l4.lesson.js:20 says "If most
   of the positives are real, ‘a positive most likely means you have it’ holds up." The item is marked Does not show it, and the
   reason says "only 48 ... about half". A careful counter is marked wrong. **Fix:** numbers that land clearly below half, such as
   `p: 40, sens: 80, fpr: 5` (32 real of 80, 40%), with the reason's "about half" changed to "fewer than half". Also: the headline
   says "right 80% of the time", which reads as overall accuracy, while 80 is how many with the allergy it finds (overall it is right
   about 94% of the time). Say "finds 80% of allergies" or "80% accurate", which the wrong-idea screen covers.
4. **items-compare.js:92 q-schools (L5): the right claim is true on its plain reading.** "A student is more likely to pass at Dale High
   than at Hillcrest High" is true of a student picked at random from each school (82% against 63%), which is what the text's first
   sentence shows. It is false only as "a given student would do better at Dale". A learner who reads it the first way says Holds up
   and is marked as having turned down a sound claim. **Fix:** "Dale High gets its students through the tests better than Hillcrest
   High", or "A student would be more likely to pass at Dale than at Hillcrest" (the counterfactual is the claim the per-test numbers
   break).
5. **L5: "counted the same way" decides every answered verdict.** Every answered Holds-up item carries a sentence that says the
   comparison is like with like (p-recycle-fair s1, q-books f1, k-mills s2, k-bus s2; r-garden s2 in reserve), and no answered
   Does-not-show or Cannot-tell item has one. Round 1's fix put "counted the same way" on w-lakeview, but that is the worked example,
   which is never answered. A learner who learns "an assurance sentence means it holds" scores every set and the check without
   judging the comparison. **Fix:** give one practice and one check outruns item such a sentence (k-farm: "both counts come from
   the state agriculture office, counted the same way"; q-bikes: "both from county police records"), so the per-acre or per-person
   rate has to decide.

### C. A fact not supported by the note

6. **l4.lesson.js:23 (the wrong-idea screen): "In most ads, and in the text of these questions, it is how many of the people who have
   it the test finds."** Neither the note nor any source read supports "in most ads". T10 says only that "accurate"-style forms are
   nontransparent. Real US test labels use "accuracy" for overall agreement as often as for sensitivity: home pregnancy tests' "99%
   accurate" is agreement with a lab test, and COVID home tests report positive and negative agreement separately. q-allergy's
   "right 80% of the time" (item 3) is a third meaning inside the lesson itself. **Fix:** "‘Accurate’ can mean several things. In
   these questions the text says which: it is how many of the people who have it the test finds. None of them tells you how many of
   the positives are real."

## Advisory (does not decide the verdict)

7. **items-size.js:107–123 q-insure: a 2-point survey rise with no sample size.** Holds up is right for L2 (the text shows the rise),
   but plan L6 teaches "the margin of error as could be this far off by luck", and under it a survey's 88% → 90% with no sample size is
   Cannot tell. The same tension round 1 raised for p-crosswalk. **Fix:** "The office surveys 20,000 adults picked at random", or make
   it a count from county records. q-commute (L1) is the same in small: 82% of 1,200 has a margin of about ±2 points, so "over four in
   five" is just inside it; say 85%.
8. **V75 (tests/lessons/rules-lesson.mjs:236–238) guards one case of an ambiguous encoding, not the encoding.** It refuses a
   three-number list whose step passes its max ([3, 5, 10]), which is the round-1 bug. It cannot see three numbers meant as choices
   whose step fits ([2, 6, 3] gives 2 and 5; [10, 40, 10] gives 10, 20, 30, 40), and the workaround it forces is visible in the data:
   `sens: [70, 75, 95, 95]`, `[75, 85, 95, 95]`, `p: [300, 400, 500, 500]` duplicate a value, which silently doubles its chance. The
   end-game fix is a range form the engine cannot confuse with choices (for example `{ from, to, step }`), every existing range
   rewritten (math, wealth and stats use them), and the list form always meaning choices; V75's special case then goes. I found no
   current generator in any subject that V75 misreads: every three-number list in the repo is a real range.
9. **gen-test.js:47, 51: the sensitivity number half-cues the form.** "70% accurate" only occurs on the low form and "85%" only on the
   high form (75 and 95 occur on both). Weak, since the group sentence rightly carries most of the signal (a health fair is always low,
   a second test always high, which is sound base-rate reasoning). Draw the same `sens` list for both.
10. **Realism of L3 base risks.** p-heart (8 in 1,000 heart attacks over ten years in adults who would take a heart pill) and q-statin
    (4 in 1,000 over four years in adults with high cholesterol) are an order of magnitude below real risks for those groups
    (Gigerenzer's own example is 20 in 100 over 10 years). The products are invented, so nothing false is claimed, but every small-risk
    item is a heart or stroke pill. Raise one of them to a realistic base where the relative claim still fails on people (for
    example 80 → 60 in 1,000, "protects a quarter of patients": 20 in 1,000).
11. **k-tutor (items-risk.js:234–249): observational data under a cause claim.** "Students in the program ... than students outside
    it" is not a chance split, and the plan's rule says a makes-happen claim holds only on one. The verdict is right anyway (the size
    fails); add one sentence to the reason so the learner hears both reasons.
12. **Claim tags.** k-pets "Twice as many dogs live in Harbor City as in other cities" is tagged mixed-who but changes the claim
    (mixed-claim); the feedback line it prints ("took the claim to be about other people") reads oddly.

## Structures carried over from another subject

None found. The three standing asks, the claim ask's two contrasts, counting 1,000 people through a test, before-and-after in 1,000,
the per-person-per-year sum, the contrast pair and the hospital worked reversal are each drawn from T4, T5, T6, T7, T10 and T12.

## Verdict

| Lesson | Verdict | Deciding defects | Advisory |
|---|---|---|---|
| L0 | PASS | none | none |
| L1 | PASS | none | 7 (q-commute) |
| L2 | FAIL | 2 | 7, 12 |
| L3 | FAIL | 1 | 10, 11 |
| L4 | FAIL | 3, 6 | 9 |
| L5 | FAIL | 4, 5 | none |
| V75 | works as specified | none | 8 |

Counts by kind (deciding): answers guessable without the reasoning 3 (1, 2, 5); wrong or arguable marked answers 2 (3, 4); facts not
supported 1 (6); wrong numbers in the text 0 (q-allergy's arithmetic is right, its verdict is not); departures from the plan or note 0;
carried-over structures 0. Advisory: 6.

Sources checked: [Akl et al. 2011, Cochrane (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6464912/);
[Gigerenzer et al. 2007 (PubMed)](https://pubmed.ncbi.nlm.nih.gov/26161749/);
[Konstanz repository record](https://kops.uni-konstanz.de/entities/publication/1c820f2d-aeed-4bfd-b65b-0e3f86803750/full).
