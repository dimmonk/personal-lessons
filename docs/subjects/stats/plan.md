# Statistical Claims: plan (build-subject step 4, 2026-10-22)

Evidence: `docs/research/stats.md` (T1–T21) for the field; `docs/learning-science.md` (P ids) for learning in general.
App terms: `docs/lesson-standard.md` sections 3 and 4.

## What you'll be able to do, and when

**After this you can** say whether a number shows what it is used to claim, point to the line that decides it (or say
what is missing), and say how big it really is in plain counts ("from 3 in 1,000 to 2 in 1,000 over ten years"), **when**
a headline and its article, a chart, an ad or a post on your phone is about to make you believe, share or act.

**The real-world test.** Ten new items in their real form (article with headline, chart, ad, post), from areas of life the
lessons did not use, no questions shown: about four hold up, four do not show what they claim, two cannot be told. For
each: the verdict, the deciding line or "Not given", and the plain size typed wherever there is a risk, a change or a
count. **Pass: verdict and line right on 8 of 10, at most one sound claim turned down, plain size right on 4 of 5;** then
again with new items four weeks later. The pass marks are ours (no source gives one); the form is the real moment
(P25, T12).

## The way of thinking (T-ids in `docs/research/stats.md`)

The field has no single checklist (Spiegelhalter T1–T2, Gal T8, Full Fact T12, Gigerenzer T5), but they share six moves:
1. **Say exactly what it claims, and find its number.** Does it say one thing *makes* another happen, or only that they
   went together, and about whom? The article often says less than the headline (T2, T3, T4, T12).
2. **How big is it?** Out of how many, over how long; a risk as so many in 1,000 before and after; a test as how many of
   the positives are real (T5, T6, T10).
3. **Compared with what, and is it fair?** (T7.)
4. **Who was counted, and how, and by whom?** (T8, T2, T13.)
5. **Could anything else explain it?** Hill's question; groups split by chance answer it (T9).
6. **Verdict:** holds up / does not show it / cannot tell from this (something needed is missing, T8).
The judgment is of the conclusion, not of the number alone (T1, T12). No method jargon is needed (T14).

## What it teaches, covering every ask

The owner's asks are the old units at the tag `old-lessons` (titles in the owner's words) and the approved design
(`docs/subjects/stats/design.md`). Nothing is dropped.

| Owner's ask (their words) | Where | What the evidence did to it |
|---|---|---|
| "Before you believe a number"; "Find the first place a claim could fool you, or see that it holds up" | L1, every item's verdict, L9 | "First place" order replaced by "any question that breaks it" (approved 2026-10-10); kept as the verdict (T1, T12) |
| The baseline before Unit One | L0 | Kept as a baseline lesson (no source needed: it measures, it does not teach) |
| "When a claim with numbers holds up": a fair count, a real change, a fair comparison, a fair test; at random, sample, margin of error, placebo | Sound items in every set (L1–L9); fair count and margin of error L6; real change and fair comparison L5; fair test and placebo L7 | Sound claims belong in every set, not a unit of their own (T20, P26) |
| "Four ways a figure can come from the wrong people": survivorship, self-selection, non-response, too few to trust | L6 | Taught as the question "who was counted"; the four names appear as "also called" (P5); the skill is the question (T8, T18) |
| "Why a number moved": gaming the target, a new way of counting, more looking | L5 ("counted the same way at both ends") | Kept; gaming the target is one item (Bergstrom & West's Goodhart, T7 syllabus) |
| "Before you trust a figure": a percentage without the numbers, base rate fallacy, Simpson's paradox, false alarm | L3, L4, L5 | Base rate taught as counting 1,000 people (T10, T17), not as a named fallacy; Simpson's as totals with a different mix (L5) |
| "Before you believe 'it worked'": no comparison group, confounding, reverse causation, regression to the mean, the one fair test | L7 (no comparison group also L5) | Organized under Hill's one question, what else could explain it (T9) |
| Plan card at the close of each old unit | L9, optional | Kept optional; no evidence it builds the habit (P26) |
| Charts, cut axes (approved design) | L8 | Read the axis numbers, not the trick (T11) |
| The plain size in so many in 1,000 (approved design) | L2–L4, then every item with a risk | Split in three: counts, risks, tests are three procedures (T5, T6, T10) |

## The lessons

Every lesson: the why screen states the question and why experts ask it (P9), then one worked item with the deciding
line marked (P10, P8), a wrong-idea screen where a known one exists (P29), a set with the line shown (`support: {shown:
true}`), a set without, then the check. Items are `article` blocks (news, post, ad, report) or `chart` blocks, from at
least two areas of life, the check in a third (T15, P25). Every set holds sound and "cannot tell" items (`mix` on facet
`fit`, T20). From L2 on, sets carry `mix: { from, share: 0.3 }` of earlier lessons, unlabelled (T21, P22). Each lesson is
its own strand for the review (P24). The three standing asks are the pilot's: what it claims, tap the line ("Not given"
allowed), the verdict from `lists.verdict`.

**L0. Before you start** (baseline, `role: 'baseline'`). Six mixed items, no teaching, nothing shown per item; its line
counts claims believed that the text does not show (`danger: { slip: 'believed', facet: 'fit', risky: 'outruns', real:
'holds' }`). Why: the owner's ask; measures the start (P23).

**Unit 1. The claim and its size**

**L1. What it claims, and the number it rests on.** Teaches move 1 and the three verdicts. The claim ask changes from the
pilot's five kinds to a `choose` with the item's own options, plain paraphrases that differ on the two things readers
mishear: makes-happen against went-together, and whom it is about ("Coffee makes heart attacks less likely" / "Coffee
drinkers had fewer heart attacks"). Check: 5 new items, 4 of 5 right, at most one sound claim turned down. Why: T3, T4
(readers cannot hear finer kinds; the pilot's stand-in review missed only kind labels), T12, P15.

**L2. How big is it: out of how many.** A count or a sum turned into a rate ("1,200 cases in a city of 400,000 = 3 in
1,000"); "percentage points" recognized and turned back into counts. `number` ask with a frame ("__ in 1,000"), `tol:
{ round: 1 }`, traps for the common slips (dividing the wrong way); a generator (`FC.gen`) for fresh numbers after the
fixed items, because this step recurs on every item. Check: 5 typed sizes, 4 of 5. Why: T6, T5 (points "too subtle"),
T17, P10 requires 6.

**L3. A risk, before and after.** "Cuts your risk by half" typed as before and after in 1,000 over the stated time, then
whether the headline's word fits. Two-blank `number` frame, the `people` figure in the feedback, a generator. Wrong idea:
"50% less means half of people are spared". Check: 5 items, both numbers right on 4 of 5, the word judged. Why: T5
(persuasion gap, Gigerenzer's "from 20 in 100 to 10 in 100 over 10 years"), T16, T17.

**L4. A test says yes.** Count 1,000 people: how many have it, how many of them test positive, how many of the rest test
positive anyway, so how many of the positives are real. Two-blank `number` ask; the counts as a `document` table or
`people` rows in the feedback. "False alarm" taught here. Check: 4 items, 3 of 4. Why: T10 (21% to 87% with natural
frequencies), T17.

**Unit 2. Is the comparison fair**

**L5. Compared with what.** No comparison; a picked start; totals where rates are needed; a different mix inside the
totals; counted a new way or looked for harder at one end; one target-gaming item. Opens with a contrast pair (`pair`
block, then `[a, b]` items asked back to back): fair and unfair on one topic. Check: 6 items, verdict and line on 5.
Why: T7, T2 ("no context or comparative perspective"), P12.

**L6. Who was counted, and how.** How many; who chose to answer or did not answer; only the survivors; the people the
claim is about (mice, one clinic, the seller's customers); who did the counting; the margin of error as "could be this
far off by luck". Check: 6 items, 5 right. Why: T8, T2 ("Sampling things that are convenient", "Too small a sample"),
T13, T15 (sample size is the best-taught rule).

**Unit 3. Cause**

**L7. Could anything else explain it?** Hill's question on one article: a fourth ask, `choose` from the item's own
options, names the other explanation (other differences between the groups, the arrow the other way, a bounce back from
an extreme, nothing to compare with) or "nothing else: the groups were split by chance". Worked pair: a randomized trial
(holds) beside a survey of people who chose (does not show the cause); placebo taught in the trial. Check: 6 items with
two sound trials, 5 right. Why: T9, T3 (33% of releases), T4.

**Unit 4. Charts and the whole item**

**L8. Read the chart's numbers.** Where the axis starts, the time window, the real change typed from the numbers; then
the verdict. `chart` blocks, `number` ask, `redraw: 'from-zero'`; fair charts mixed in. Check: 5 charts, real change on
4. Why: T11 (warnings do not protect; read the numbers), T8.

**L9. The whole item, unprompted.** First the six moves recalled from memory (`text` ask with `accept` and `count`, P16),
then ten mixed items with no question shown beyond the three standing asks and a size where one applies; optional plan
(`own: 'plan'`). Check: 8 new items, the real-world test in small (7 of 8, at most one sound turned down); `retest: 28`
is the test four weeks on. Why: P22, P24, P26, T15 (fades without return).

## For the builder

- The subject record's `parts` become L1–L9 (nine, from seven); `lists.claim` goes (L1 uses each item's own options);
  strands one per lesson. The pilot L1 is rewritten for the new claim ask; its items and checks keep.
- **Engine gaps: none found.** Every form above uses built asks and blocks (`choose` with own options, `tap` with "Not
  given", `number` with frames, traps and tolerance, generators, `article`, `chart` with `redraw`, `figure` people,
  `pair`, `text` recall, `own` plan, baseline, retest). A frequency-tree figure for L4 would read more easily than a
  table but is not needed.
