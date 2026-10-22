# Civics: final review before shipping (2026-10-22)

A fresh reviewer, both roles of `review-brief.md`. Learner role on the regenerated learner views only (l1 to l16 regenerated with
`tools/learner-view/render-learner-view.mjs`; all 16 came out byte for byte the same as the files on disk). Research role on the data, the
plan, the research note, `items-shape.js`, `tests/civics-cues.mjs`, `scratchpad/civ-r2/cues2.mjs`, the fixture against the official PDF,
and history facts against archives.gov, history.state.gov, nps.gov and the CRS sidebar.

Runs: `node tests/civics-cues.mjs` (38 passed), `node tests/civics-pure.mjs` (1473 passed), `node tests/validate-lessons.mjs` (837385
passed), `node scratchpad/civ-r2/cues2.mjs` (results below).

## Verdicts

| Lesson | Verdict | Check score (learner, by reasoning) |
|---|---|---|
| l1 to l4 | PASS (quick pass) | |
| l5 Theirs to do? | **FAIL**: 1 defect (D1) | 6/6 |
| l6 Who can stop it | PASS | 6/6 |
| l7 Who is telling you | **FAIL**: 1 defect (D2) | 5/5 |
| l8 Whole stories | PASS (polish P1, P2) | 6/6 |
| l9 Principles | PASS | 14/14 |
| l10 Rights | **FAIL**: 1 defect (D3) | 11/11 |
| l11 Colonies | PASS (polish P4) | 18/18 |
| l12 1800s | PASS (polish P5) | 11/11 |
| l13 1877 to 1900 | **FAIL**: 1 defect (D4) | 5/5 |
| l14 1900s | PASS | 20/20 |
| l15 Symbols | PASS | 10/10 |
| l16 Interview | PASS | |

The way of deciding, written before the first practice question, could be stated for every story lesson (l4 to l8, l13).

## Deciding defects

**D1 (l5, check; departs from the way of thinking).** "Not settled", the middle of Jackson's three zones and the expert's own first
question for a president's order (note C7, plan way of thinking 2), is never in any check or review story: across the subject it is
the right answer in only `l5-prices` and `l8-hospitals`, both practice. "In court" is in no l5 check story either. The l5 check is 4 theirs,
2 not theirs (`items-l5.js`, lesson `check.items`), so a learner who has "not settled" wrong passes it.
Fix: put one "not settled" story and one "in court" story in the l5 check in place of two "theirs" ones (`l5-parks`, `l5-civics`), and one
"not settled" story in the l8 check or review.

**D2 (l7, results pages; answer by wording).** On all 8 results pages the right result is the one whose snippet asks or inspects ("Who
runs", "Who funds", "We read its tax filings", "line by line", "full text", "minutes ... with every vote"), and no wrong result does:
`cues2.mjs` "the result that asks/inspects is right" scores **75% against 25%** (n=8). Three of the five check items are results pages, so
this cue plus a guess on the two take/check items reaches the 4 of 5 pass without asking who is speaking. `tests/civics-cues.mjs` does
not test this predictor.
Fix: in at least two results pages (one in the check), give a wrong result that asks or inspects in the source's own voice or as a paid
result (e.g. "Americans for Real Facts: Who funds us? Our donors, in our words"; "Sponsored: Fact check: the garden ban is real"), and add
the predictor to `tests/civics-cues.mjs`.

**D3 (l10, Step 3 table; teaches answers the list rejects).** The row "Ways to take part and to serve" merges Q69 and Q70: "Vote, run for
office, join a political party or a civic group, help with a campaign, contact elected officials, pay taxes, obey the law, serve in the
military". Q69 (civic participation) does not accept pay taxes, obey the law or serve in the military (M-1778 Q69, checked in the PDF), so a
learner answering Q69 from the table is marked wrong.
Fix: two rows, each in the list's words: "Two examples of civic participation" (Q69's ten) and "One way to serve the country" (Q70's six).

**D4 (l13, check question 6 `l13` Chinese Exclusion story; marked cause is the law's own claim).** "What led to the Chinese Exclusion Act?"
is answered "A claim, written into the law, that Chinese workers endangered 'good order'". That is the act's preamble, the law's account of
itself; taking a source's own stated reason as its cause is the sourcing error lessons 7 and 11 teach against. The Office of the
Historian (history.state.gov, "Chinese Immigration and the Chinese Exclusion Acts", read today) names what led to it: non-Chinese workers
"came to resent the Chinese laborers, who might squeeze them out of their jobs"; "As the numbers of Chinese laborers increased, so did the
strength of anti-Chinese sentiment"; pressure from Western politicians, a vetoed 1879 bill, then the Angell Treaty. The National Archives
page (C24) gives only the preamble. The l13 Step 1 table also teaches only the preamble as "the law gives its reason".
Fix: right option "Resentment of Chinese workers by other workers who feared for their jobs and wages, and pressure from the West"; the
Step 1 row keeps the preamble but labels it as the law's own reason; add the history.state.gov passage to C24.

## Verified as fixed (fixes-l1-8-round2.md, fixes-l9-16.md)

All claimed fixes are in the regenerated views or data: L5 president row, the 9 a.m. / lunch-money pair and `l5-meals` (no `l5-army`,
`l8-airfares` left); checks named in positive words and live checks with "not" (cues2: 16% and 22% against 25%); masthead predictor 38%;
known-source predictor 67% / 71% against 63%; `l8-sidewalk` theirs with the city row; alarming defined in L7 and L8. L9 to L16: poll taxes
(24th Amendment 1964, *Harper* 1966, VRA literacy tests), Lucy Stone 1890s line gone, Iraq given no reason, l9 three levels, l12 cause by
cause and "on paper", l13 rebuilt with lesson 13 cue checks, l11 16 of 18, l9 and l14 terms taught, wars dated, list wording rows, Statue
of Liberty NJ reason (NPS contact page lists "1 Ellis Island, Jersey City, NJ 07305"), no "Level of government" result line on l9 to l16,
l16 without a form and naming each missed question's lesson (`homeLessonOf`, player.js).

## Research checks that held

- **Fixture against the official list:** every question and accepted answer in `tests/fixtures/uscis-m1778.json` matches the M-1778
  (09/25) PDF text; the 13 apparent mismatches of a script comparison are all ligatures dropped by the PDF extraction (ffi, ff, ft:
  "oicer", "Jeerson", "Aer", "dra"). civics-pure holds the app's items to the fixture word for word.
- **The 2026 ruling (l13 why, worked example):** confirmed by CRS LSB11468: *Trump v. Barbara*, June 30, 2026, EO 14160 invalid,
  citizenship for "nearly all children born in the United States", *Wong Kim Ark* followed.
- **Dates and causes** sampled against C23/C24 sources: Fort Sumter April 1861, Emancipation Proclamation January 1, 1863 (seceded states
  only), 13th/14th/15th/19th/24th/26th dates, 525,000 square miles, Saratoga then France, Maine February 1898 after three years of
  Cuban fighting, Laboulaye's proposal (nps.gov), *Plessy* and the 1890 Louisiana law, Brown and the civil rights acts.
- Law in l5/l6/l8: the three zones (C7), Art. II own powers (C7a), *Dole* conditions and *Printz* anti-commandeering (C6a), supremacy,
  override two-thirds, amendment two-thirds and three-fourths: all as the note quotes them.
- Nothing looks carried over from another subject; the l7 own-step is the plan's gap 1, drawn from C18.

## Polish (not deciding)

- **P1 (l8 item 4, `l8-hospitals`):** "Carries it out" for an order with "no law of Congress"; the feedback says "carrying out a rule or a
  law" though no law exists. Say why by the taught test: an order is not a vote, so it is the executive at work; whether it reaches too far
  is the next question.
- **P2 (l8 check 7 and 11):** borderline "ordinary" (a Supreme Court ruling striking a national school law, taken) and "alarming" (a $1,000
  bag fine, checked). Both are defensible as marked; a sentence in each reason saying which half of the rule decides would remove doubt.
- **P3 (plan.md):** the lessons table is stale: l5 and l6 checks are 6 stories, 5 to pass (plan: 5, 4 of 5); recall checks are 13/14,
  10/11, 18/20, 9/10 (plan: 9 in 10). Update the plan.
- **P4 (l11 Step 3):** the 1767 row puts quartering after the Townshend Acts; the Quartering Act was 1765. Move the line or drop the date link.
- **P5 (l12 Step 1):** the 1860 row includes secession and the Confederacy, which came December 1860 to February 1861. "1860 and 1861".
- **P6 (l13 Step 1, 1898 row):** "held under the Chinese Exclusion Act as no citizen, a man born here..." needs a second read; reorder:
  "The government held Wong Kim Ark, born here to Chinese parents, as no citizen under the Chinese Exclusion Act; the Supreme Court said
  the 14th Amendment made him one."
- **P7 (learner view, l4 to l8 workings):** the step label runs into its text ("Find who acted The story says..."); l7 results pages print
  as one run-on line. Renderer only; the app was not checked.
- **P8 (tests/e2e-civics.mjs:16):** comment names `tests/fixtures/uscis-m1778-lesson1.json`, which is deleted; it is now `uscis-m1778.json`.
- **P9 (l7):** the long slip line repeats under every wrong result.

## Counts

Deciding: 4 (1 check coverage / way of thinking, 1 surface cue, 1 taught wrong answer, 1 arguable marked answer / unsupported cause).
Wrong facts: 0. Polish: 9.
