# Statistical Claims, lessons 0 to 5: fixes after the first reviews (2026-10-22)

Answers `review-learner-l0-5.md` (ids G1–G5, l0.1–l5.6) and `review-research-l0-5.md` (ids 1–21). The root cause of most of them was one:
there was no single written verdict rule, so items were built to surface patterns instead of to the rule. The rule now opens lesson 1 and
the plan (`plan.md`, "One verdict rule"), and `tests/stats-lessons-pure.mjs` asserts it on every lesson.

## The rule, and answers by pattern

| Defect | What was done |
|---|---|
| G5, no rule between "does not show" and "cannot tell" | Lesson 1's first screen: does not show it = the text itself shows the claim goes too far (numbers, other people, another explanation, or in words); cannot tell = something needed is not in the text at all; a missing number is not by itself "cannot tell". Lessons 2–5 restate it for their own move. |
| G1, "Not given" always "cannot tell" | Each lesson now has both cross cases. Not given + does not show: q-tea (L1, mice), p-bites (L2, "about as many as usual"), q-kelp (L3, "most never caught one"), q-fraud (L4, "most alerts were real purchases"), p-calls (L5, counted a new way). A sentence tapped + cannot tell: q-rate (L1), q-lunch and k-compost (L2, count and total, no usual), q-mats and k-paste (L3, start but no after), p-delling and k-gym (L4, no false-alarm rate), q-fires (L5, totals with no sizes). Test: every lesson has both. |
| G2, ads never hold | Holds ads: q-dentist, k-shelter (L1), p-nasal (L3), k-engine (L4), q-books (L5). Test: in every lesson with ads, one holds. |
| G3, broad words always wrong, headline verb always right | Right options carry "every/each" where the headline does (k-stadium, k-boarding); wrong options reuse headline verbs (b-sleep, q-kelp); "who" distractors are often narrower (b-club "members who answered", k-seat ages 8 to 12, L4's "for people with symptoms"). |
| G4, tap by position | The deciding sentence moves (b-library, p-crosswalk, q-commute, q-walking, k-reading, k-flights, k-stadium, k-compost, p-recycle-fair, q-bikes, k-tickets, k-farm, k-mills); L4's sentence of how common it is stands first, second or third and no longer always starts "Among". Test: in every lesson the tapped sentence is not always in one place. |
| l2.6, D16 (L3 verdict read off "slashes"/"dramatically"/"protects"), l4.1, D17 (L4 headline form decides) | The size decides. L2: "soar/boom" on holds (p-fires, k-pets), "surge/jumped" and plain words on outruns; generators draw the same three headlines for both forms. L3: each size in the headline is checked against the before and after; "halves" holds (q-hip, k-warmup) and fails (p-falls, k-training: 60→45, 40→30); "slashes" holds (p-nasal) and fails (k-training); "keeps/spares" holds with a true count (q-statin, 1 in 1,000) and fails (k-tutor, p-heart); q-statin and k-training replaced the adjective items; the generators now share one headline ("cuts the risk by …") and the over form claims twice the counted cut. L4: "N% accurate" holds (k-engine, generators) and fails; "usually right" holds (q-strep) and fails (q-rash, k-screen); the generators draw both headlines and shared groups. Tests: the same strong words sit on both verdicts; each L3 claim's size is parsed and matched to the numbers by the taught rule. |
| l5.4, "same … both years" means holds | "Counted the same way" now also sits on an outruns item (w-lakeview); a change at the place sits on holds items (q-books' website, k-mills' new line). |

## One meaning per item (claim and verdict never contradict)

| Defect | What was done |
|---|---|
| research 9, l5.1 | Every L5 right claim is the claim a reader takes away: w-lakeview "more break-ins than it usually does", q-schools "a student is more likely to pass at Dale", q-passrate "more students are passing", k-tickets "selling more than a year ago". No right claim is literally shown on an item judged "does not show it". |
| research 11 (k-farm) | Headline "Cedar County farms beat Maple County's at growing corn"; claim "grow corn better"; per acre decides. |
| research 12 (p-recycle-unfair) | Headline "Brookdale households recycle twice as much as Fenwick's"; the per-household reading is the plain one. |
| research 14 (b-club), l0.2 | Right claim "Nine in ten people say …"; the members-who-answered reading is the narrower wrong option. b-sleep's link option stays a slip; lesson 1 now says the claim is the headline's, which is what makes it one. |
| l1.2 (k-diner), l5.5 (k-burger) | k-diner: "Customers like the new menu better than the old one". k-burger: the post now says "a bigger hit than the old one", which is the right claim; the old rating is missing. |
| l0.1 (b-library), l1.1 / research 21 (p-crosswalk), l1.4 (q-commute) | b-library: "the same counter both years". p-crosswalk: corners picked for traffic, not a bad year; lesson 1 says "fell after" says when, not why; the reason says whether the lights did it is a later question. q-commute: "Over four in five". |
| research 13 / l3.4 (k-seat) | Headline and right claim are now the link ("hurt 40% less often"); the cause wording is the wrong option. |
| l3.2 (q-fish), l3.3 (k-airbag) | q-fish is now a coin-toss trial (Calmex) whose headline claims a number of people with only a percent given: cannot tell, and no cause word on observational data. k-airbag is replaced by k-paste (no crash-test phrase). |
| research 10 (k-training) | Replaced: a lottery, and counts that show a quarter where the headline says half. |
| l5.3 (k-tickets tap) | Tap prompt: "the sentence that gives what its number is compared with"; last June's count carries a note that it is not that number. |

## Wrong numbers and facts

| Defect | What was done |
|---|---|
| research 3 / l2.3 (rides vs riders) | q-bus counts people riding on an average day, against residents who ride. |
| research 7 (jobless rate) | Replaced by health insurance (88% → 90% of adults, a share of all adults): q-insure. |
| research 6 (calcium) | Invented product, Ostrel, in a coin-toss trial of people over 70 (q-hip). No real supplement is named. |
| research 8 ("accurate" as sensitivity) | L4 wrong-idea screen: "accurate" can mean several things; here it is how many who have it the test finds; none tells how many positives are real. The screen's paragraphs were also reordered so the rule is no longer drawn as part of the wrong idea. |
| research 4 / l2.2 (thresholds) | Every need says "above the usual, which is N"; every L2 item is 2–3 times the usual or at most the usual, so no verdict rests on how far above. |
| research 2 (q-passrate) | 400 took it at 82% (328 passed); 340 took it at 95% (323 passed): a higher rate, fewer students passing. |
| research 5 (k-tickets) | Monthly sales (800 in June, 500 in February, 950 last June), so the fault is the picked start, as the reason says. |
| research 15 (q-schools) | "The basic test" and "the harder advanced test". |
| Cause verdicts | Every "makes it happen" claim that holds rests on groups split by chance (p-nasal, q-hip, q-statin, k-warmup, k-training, the generators); q-helmet's reason adds that a before and after with no town to compare cannot show the law did it. |
| Minor: r-stopsign | Option and need both say "the city". |

## The risk generator bug (research 1)

`years: [3, 5, 10]` and `base: [4, 8, 12]` were read as ranges giving only 3 and 4. Rewritten: `years: [3, 4, 5, 10]`, `base: [20, 40, 60, 80]`
(also the research note's minor point: no more 160 in 1,000), two-entry lists elsewhere; the headline and claim choices are words. Every generator of
the subject was checked: gen-size's ranges (`popK`, `usual`, `rate`) are real ranges; gen-test's lists have two or four entries. The root guard: V75
now refuses a three-number list the engine reads as a one-value range (lesson standard 3.5 and 9.2 say so, with a seeded fault in
`tests/lessons/controls-table.mjs`; no other subject had one), and the Stats test checks that every listed choice and every range step appears on 400 seeds.

## Steps taught before they are asked

| Defect | What was done |
|---|---|
| l2.1, l3.1 (scaling a total that is not whole thousands) | L2's first screen teaches count ÷ total × 1,000 with 75 of 1,500; L3's screen shows 150 of 500; the traps say the sum. |
| l4.5 (taking 5 in 100) | L4's screen: 5 in 100 of 980 is 980 ÷ 100 × 5 = 49; the worked example shows it. |
| l4.4 ("accurate" vs the two numbers) | As research 8. |
| l5.2 (reversal inside groups) | A new L5 screen works it on two hospitals (905 and 676 of 1,000 sent home; each kind of patient does better at Southside) before q-schools is asked. |
| l2.4 (a count with no total) | L2's screen: tap the sentence that gives both the count and what it is out of, else Not given. |
| research 19, 20 (money sums; L2 check of five sizes) | L2 screen "A sum of money" ($6 million, 10 years, 300,000 people = $2 a year), q-library in the second group, k-stadium in the check (new slip "gave it for the whole time"). k-compost now types a size (pounds per student) and cannot be told, so the check has five typed sizes. |

## Near-duplicates and template words

| Defect | What was done |
|---|---|
| l2.5 (four near-copies) | The count generators vary the headline (three), the multiple (two or three times) and the usual (2 to 6). |
| l3.6 ("spares 1 people", Zelvin copies) | The over generator no longer says "spares {n} people"; Zelvin is out of the generators' products. |
| l4.2 ("people who have a real fault") | Each L4 item names its own units in the sentences, the typed question, the frame and the picture (cars, children, batches, workers). |
| l4.3 (same numbers twice) | k-seed is now 30/80/10; the generators use 70, 75, 85 and 95 of 100, never a fixed item's table. |
| research 18, l4 absurd who-options | Real who-confusions: "for people with symptoms …", "for cars with no warning light …". |

## Kept, with the reason

- l0.3, the baseline line: the line's form is the engine's (`SAY.baselineLine`, shared by every subject); the slip's words are now "believed the
  claim", so it reads "Of 3 claims the text does not show, you believed the claim on 1."
- l4.6, one sound claim in the L4 check with none turned down allowed: the plan's rule; the check's first screen states it.
- l5.6, the bakery pair is shown, not asked: the next group asks the same contrast back to back (`[p-recycle-fair, p-recycle-unfair]`); its line
  now asks which compares like with like before saying.
- l3.7, q-helmet: the verdict was already right; the reason now names the missing comparison too.

## Checks run

`node tests/validate-lessons.mjs`, `npm run lock`, validate again, `npm test` (all tiers, 192 seeded faults); browser checks X30 (now also walks
lessons 2 to 5 whole, typed sizes included, each check passed), X13, X15, X20, X31, X48, X51, X3 with `E2E_SKIP_FAULTS=1`; learner views l0–l5
regenerated.
