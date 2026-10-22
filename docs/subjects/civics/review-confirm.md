# Civics: confirmation review before shipping (2026-10-22)

A fresh reviewer, both roles of `review-brief.md`, on the four lessons the final review failed (`review-final.md` D1 to D4) and the
fixes claimed in `fixes-l9-16.md` ("After the final review").

Learner views regenerated with `node tools/learner-view/render-learner-view.mjs civics <l> --stdout`: l5, l7, l10 and l13 match the files
on disk except for the trailing newline that `--stdout` adds.

Runs: `node tests/civics-cues.mjs` (39 passed), `node scratchpad/civ-r2/cues2.mjs` (below), `node tests/civics-pure.mjs` (1490 passed),
`node tests/validate-lessons.mjs` (839179 passed).

## Verdicts

| Lesson | Verdict | Check score (learner, by reasoning) |
|---|---|---|
| l5 Theirs to do? | PASS | 6/6 |
| l7 Who is telling you | PASS | 5/5 |
| l10 Rights | PASS | 11/11 |
| l13 1877 to 1900 | PASS | 5/5 |

## Each fix, both roles

- **D1 (l5): fixed.** The check now holds a "not settled" story (Q7, `l5-trucks`: "Congress has said nothing about it, for or against")
  and an "in court" story (Q9, `l5-recycle`: "A state court is hearing a lawsuit ... and will rule in the spring"), with 3 "not
  theirs" and 2 "theirs" around them. `l5-cars`, `l5-parks` and `l5-drones` are in the review (`items-l5.js`); `l8-colleges` is in
  `items-l8.js`. Learner: the way of deciding (who acted, what lets them, then one of four answers by the Step 1 and Step 2 tables) could
  be stated before Item 1; every check answer came from the tables, and Q12's "might take the county to court" is the Step 4 trap,
  answered by it. cues2 "phrase rules" misses `l5-trucks`, so the not-settled item is not reachable by the old "allows or forbids" phrase.
- **D2 (l7): fixed.** Wrong results that ask or inspect now appear in the worked example ("SafeStreetsNow.org: Who pays for us?"), Item 1
  ("Daily Truth Report: Who runs this site?"), check Q8 ("Sponsored: Fact check: the garden ban, line by line") and check Q9 ("Americans
  for Real Facts: Who funds us? Our donors, in our own words"). cues2 "the result that asks/inspects is right": 25% against 25% (n=8);
  masthead/record 38% against 25%, as at the final review. The predictor is in `tests/civics-cues.mjs`. Learner: each check answer
  came from "who is speaking" (the source's own voice, a paid result, a reprint, or an outside report / the original record).
- **D3 (l10): fixed.** Step 3 has "Two examples of civic participation" with Q69's ten answers and "One way to serve your country" with
  Q70's six, each matching `tests/fixtures/uscis-m1778.json` word for word. Items 8 and 9 and checks 18 and 19 accept the same lists.
- **D4 (l13): fixed.** Check Q6's right cause is "Other workers' fear for their jobs, and anti-Chinese pressure from the West"; its
  reason says the same. Step 1's 1882 row gives that cause and marks the "good order" words as the law's own. The Office of the Historian
  passage is in `docs/research/civics.md` C24 (line 296). P6 is also done: the 1898 row now reads in one pass.

## Anything new broken in these four lessons

Nothing deciding. Three notes, none of them deciding:
- l5's check passes at 5 of 6, so a learner can still miss one "not settled" or "in court" story and pass; both kinds are now checked, and
  missing both fails. This is the final review's own fix as written.
- l10 Step 3 is headed "Answers the list accepts", but the federal-taxes row leaves out "Required by the (U.S.) Constitution (16th
  Amendment)", which Item 10 accepts. Every answer the row teaches is accepted, so no learner is marked wrong for it.
- P7 still holds for l7: in the learner view the results pages print on one line (renderer only).

## Counts

Deciding defects: 0. Fixes confirmed: 4 of 4. Notes: 3 (none deciding).
