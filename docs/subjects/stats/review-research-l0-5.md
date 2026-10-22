# Research review: stats L0 to L5 (build-subject step 6, role "research")

Reviewer: a fresh agent that did not build these lessons (Opus 5.5), 2026-10-22. Read: `docs/subjects/stats/plan.md`,
`docs/research/stats.md`, `l0`–`l5.lesson.js`, `subject.js`, every items/gen file for L0–L5, the generator engine
(`public/app/lessons/gen.js`), the learner view for L3, and the build-subject skill. Read-only. Every number in every
item was recomputed by hand. The clone has uncommitted changes to some L1 files; this review is of the working tree.

## Source spot-checks (note against the web)

| Note | Checked against | Result |
|---|---|---|
| T3 Sumner 2014: 40% / 33% / 36%; 58/81/86% vs 17/18/10%; "little evidence ... uptake" | PMC4262123 abstract | Matches (Results give 9.6% for the 10%) |
| T12 Full Fact: the three quoted sentences | fullfact.org/how-we-fact-check | All three verbatim; the third sentence goes on ("so it's important to draw out exactly what someone means") |
| T16 Woloshin 2007 | PubMed blocked; Dartmouth release | Design, populations and the "did not assess decision-making" limit confirmed; 74/56 and 44/26 not confirmed or contradicted |

No quoted passage was found to be wrong.

## Arithmetic: what checks out

These are all correct: w-coffee (25→22 is 12% fewer); every L2 rate; the Simpson's numbers in q-schools (180/220 = 82%,
138/220 = 63%); every L4 count (w-test 16 of 65; p-rapid 36 of 84; p-screen 360 of 390; q-drug 9 of 108; q-strep 270 of
340; q-allergy 48 of 95; k-engine 540 of 560; k-screen 45 of 140; k-seed 18 of 116), with each feedback's "about 1 in N"
right. Also correct: every L3 before-and-after, every L5 percent and per-unit figure, and both L4 generators (whole
people, and the "fewer than half" / "more than 8 in 10" claims hold for every combination). Every outlet, product,
town and condition is invented and named that way, except the items flagged at 6 and 7.

## Defects

### A. Wrong numbers, or numbers that contradict their own item

1. **gen-risk.js:25 and :44: the generator ranges are not choices, so the "fresh numbers" never change.** Under the engine
   rule (`gen.js:34`: three numbers with step > 0 and min ≤ max is a range), `years: [3, 5, 10]` is the range 3..5 in
   steps of 10, so it is always 3. In `g-risk-big`, `base: [4, 8, 12]` is the range 4..8 in steps of 12, so it is always
   4. The learner view (stats-l3.md:346–465) confirms that every generated item is "3-year" and every g-risk-big item is
   "4 in every 1,000". **Fix:** use lists the engine cannot read as a range (`years: [3, 5, 10, 10]`, or
   `[3, 10]` + `[5]`...). The cleanest fix is four values, such as `years: [3, 4, 5, 10]` and `base: [4, 8, 12, 16]`, with
   the outputs re-checked for whole numbers. Add a test that each listed choice can appear.
2. **items-compare.js:108–112 q-passrate: the item's own numbers undo its point.** Last year 400 took the test and 80%
   passed (320). This year 360 took it and 95% passed (342). Out of all 400 that is 85.5%, so *more* students passed. Yet
   the reason says the rate rose "without more students passing", and the "need" asks for exactly the figure that shows
   a real rise. **Fix:** make this year 340 takers and 323 passes (95%), which is 323 of 400 (81%), flat. Or keep 360
   takers with 320 passes and state the rate as 89%, so it still clears the 90% bonus line.
3. **items-size.js:105–116 q-bus: rides are counted as riders.** "54,000 bus rides a day" is set against "30 of every
   1,000 residents ride the bus", and the typed answer is "residents who rode". Most riders make two rides a day, so
   54,000 rides is about 27,000 people. **Fix:** count riders in s1 ("54,000 people rode the bus on a given day"), or
   give the usual level as rides per 1,000 residents.
4. **items-size.js:33 w-flu `need`: the threshold is the usual.** "About 2,400 or more" is 6 in 1,000 of 400,000, which
   is the usual level itself. The lesson's own rule (l2.lesson.js:18) says the same as the usual does not hold. **Fix:**
   "well above 2,400, the usual for a city this size". Related: the thresholds in the other `need` lines are about 2×
   (potholes, crash, team), 1.67× (bus) and 1.33× (bread), while the rule taught is only "above the usual". **Fix:**
   say "above the usual (N)" everywhere, or teach that a soar or a boom needs clearly above.
5. **items-compare-check.js:13–16 k-tickets: the wrong mechanism is named.** "Sold 8,000 season tickets by June, up
   from 5,000 in February" compares running totals, which can only go up. The reason says February is "the slowest month,
   so any later month would look like a jump", which is the picked-start fault, not this one. **Fix:** make both numbers
   monthly sales ("sold 800 in June, up from 500 in February"), or rewrite the reason to say a running total always
   grows.

### B. Facts wrong or misleading in the real world (US, October 2026)

6. **items-risk.js:89–104 q-hip: a real, generic product given an effect the evidence contradicts.** "Calcium supplement
   halves the chance of a broken hip" is marked Holds up, with "a calcium supplement" and adults over 70 named: no
   invented brand, so it reads as fact. USPSTF (2018, still the final statement) recommends *against* low-dose calcium and
   vitamin D for preventing fractures (grade D), and its December 2024 draft extends this to vitamin D with or without
   calcium for adults 60+ ("zero fewer hip fractures per 1,000"). A beginner leaves with a false health belief. **Fix:**
   give it an invented product name, as every other L3 pill has ("Ostrel supplement").
7. **items-size.js:88–101 q-points: the jobless rate is misdefined.** s1 calls it "the share of Carver County adults
   without a job". s2 says the office counts adults who looked for work, which is the labor force, the real (BLS)
   denominator. The feedback then turns it into "20 fewer people without a job in every 1,000 adults", but a falling
   unemployment rate can come from people who stop looking. **Fix:** use a rate that really is out of all adults (for
   example "the share of adults with health insurance rose from 88% to 90%"), or word it "out of every 1,000 adults in
   the labor force" and drop "adults" from the claim.
8. **items-test.js:20–21 (the wrong-idea screen in l4.lesson.js:20–21) and every "% accurate" headline: "accurate" is
   taught as sensitivity.** The screen says flatly "The 80% is how many of the people who have it the test finds". In
   real ads "accurate" means sensitivity, specificity or overall accuracy. In w-test's own numbers the overall accuracy
   is (16 + 931) / 1,000 = 95%, not 80%. T10 lists sensitivities among the "nontransparent" forms because the word hides
   what it means. **Fix:** "An ‘accurate’ figure is usually one of several things, here how many of the people who have
   it the test finds; it never tells you how many positives are real." Each s1 already says which figure it is, so only
   the screen needs this.

### C. Marked answers that are wrong or arguable

9. **L5's claim and verdict disagree: the "right" claim is literally shown, and the verdict says it is not.**
   - w-lakeview (items-compare.js:11): the right claim "55% higher than two years ago" is true (the reason says so).
   - q-schools (:79): "Dale students pass more often than Hillcrest students" is true (82% vs 63%).
   - q-passrate (:104): "went up to 95%" is true of test takers.
   - k-tickets (check:9): "60% higher than before" is true against February.

   In each, the verdict is about an *implied* claim (rising, better school, more learning, selling better), but the
   learner has just picked a wording that the text shows. A careful learner says Holds up, which is defensible and gets
   marked as the "doubted" slip. r-rent (check:82) shows the right way: its claim names the implied part ("for the same
   kind of apartment"). **Fix:** make each right claim the implied one: "Break-ins in Lakeview are rising", "Dale High
   teaches students to pass better than Hillcrest", "More Marlow students are passing", "Bayside is selling more season
   tickets than last year". T12 (Full Fact: "draw out exactly what someone means") supports this.
10. **items-risk.js:220–234 k-training (L3 check): the claim marked right is the one the numbers show.** The right claim
    is "Safety training halves the number of workers hurt", and the item's numbers are 2 → 1 in 1,000, which is half.
    The headline "slashes ... by half" states the relative change correctly. q-hip ("halves", 6 → 3) and k-warmup
    ("halves", 80 → 40) hold up. So the verdict turns on "slashes" alone, and "Holds up" is defensible. The real fault is
    elsewhere and unused: sites "that began training" are compared before and after, with nothing to compare against
    (L5's fault). **Fix:** make the headline claim people ("Safety training protects half of workers from accidents"), as
    the other outruns items do, or replace the item.
11. **items-compare-check.js:20–30 k-farm: the marked claim is a stretch, and the "wrong" option is the literal
    reading.** "Cedar County is the state's corn leader" says most corn in the state, which is the option marked
    mixed-who. The marked right one ("more corn for their size than Maple County") is not what the headline says.
    **Fix:** headline "Cedar County farms outgrow Maple County's", or keep the headline and mark "more corn than any
    county in the state" right, with the reason that only Maple is compared and per acre Maple does better.
12. **items-compare.js:40–51 p-recycle-unfair: the second option is also defensible.** The headline "Brookdale recycles
    twice as much as Fenwick" is literally true in total, and option b says exactly that (plus "because it is a bigger
    town"). **Fix:** headline "Brookdale households recycle twice as much as Fenwick's", which makes the per-household
    reading the plain one.
13. **items-risk.js:189–203 k-seat (L3 check): a causal "cut" holds on observational data.** Children in boosters are
    compared with children not in them, matched on cars, roads and speed, but not split by chance. L1 marks the same
    design as does-not-show (w-coffee, q-walking, b-sleep: "groups as they already were"), and T9 / plan L7 say only a
    chance split answers "what else". The real-world fact is true (boosters do cut injuries), but the item teaches the
    opposite rule from L1. **Fix:** say the groups were split by chance (not possible here), or make the claim and its
    right option the link ("Children in booster seats were hurt less in crashes"), with the heard-link option removed.
14. **items-base.js:17–29 b-club (L0): the claim and the reason disagree.** The right claim says "FreshBrew *members*
    say...". The reason's first point is that the headline leaves out "members", which makes the mixed-who option
    ("people in town") the headline's claim. **Fix:** right claim "Nine in ten people say FreshBrew is the best coffee in
    town"; wrong options "Nine in ten of the members who answered rated it best" (the text shows this) and the
    mixed-claim one.
15. **items-compare.js:79–88 q-schools: the courses do not make sense.** It is "the state test", but basic-course
    students pass at 85–90% and advanced-course students at 50–60%, and the reason calls basic "the easier basic
    course". If both sit one test, the advanced students failing more is odd. **Fix:** "the basic test" and "the advanced
    test", so the difficulty is in the test.

### D. Answers you can get by pattern, not reasoning

16. **L3: the headline verb decides the verdict.** Every outruns item says "spares / protects / keeps ... of people /
    rescues / dramatically / slashes", and every holds item says "cuts / halves / fewer". The typed before-and-after
    never decides the verdict, and the gen-risk comment ("the words do not give it away") is untrue. The lesson's rule
    (l3.lesson.js:19) makes this the rule. **Fix (end-game):** let the size decide some verdicts. For example, a "cuts
    risk sharply" headline that holds on a big base (300 → 150) next to the same words on 4 → 3, or a "halves" headline
    whose counts in the text show only a quarter. Then rewrite the rule as "words that make the change sound bigger than
    the before and after". Bring the gens into line with that.
17. **L4: the headline form decides the verdict on the fixed items.** "N% accurate: a positive means..." with a
    how-common line is always outruns; with no how-common line, always unclear; no "%" with a symptomatic group, always
    holds. The check (k-engine, k-screen, k-seed, k-gym) follows this exactly. Only the gens break it. **Fix:** give one
    check holds item the "N% accurate" headline (as g-test-high does), and one outruns item a clinic-style "usually right"
    headline with a low base rate.
18. **L4 mixed-who options are absurd** ("everyone you know has the allergy", "every child in the district will
    struggle", "every pipe in the house leaks"), so the claim ask is two-way. **Fix:** use real who-confusions ("a
    positive means a person *with symptoms* most likely has it" against people screened with none).

### E. Departures from the plan or the research note

19. **Plan L2 (plan.md:72–76) "a count or a sum ... over how long"; T6 (Blastland & Dilnot: £300m → about £1 per place
    per week).** Every L2 item is a head count; no sum of money and no per-person-per-week. **Fix:** add at least one
    money item to the groups and one to the check (for example "$40 million for the city's parks" → "about $4 a resident
    a year").
20. **Plan L2 check "5 typed sizes, 4 of 5".** k-compost has no size, so the check has 4 typed sizes, and the pass rule
    counts whole items. **Fix:** either change the plan line to "4 typed sizes, and 1 cannot-tell", or add a fifth sized
    item.
21. **p-crosswalk (items-claims.js:41–51): a holds that L7 will contradict.** The lights went in at "12 busy corners",
    which were likely picked for high crash counts. A drop afterwards is the "bounce back from an extreme" that plan L7
    and T9 name. The claim ("fell after") is literally shown, so Holds up is right for L1. But the earlier stand-in review
    (reviews/l1.md) found it reads as teaching learners to pass "fell after X" headlines. **Fix:** say the corners were
    chosen for being busy, not for a bad year. Or keep it and add one line to the reason: "Whether the lights did it is
    a later question."

### F. Structures carried over from another subject

None found. The three standing asks, the claim ask's two contrasts (makes-happen against went-together, and about
whom), the counting-1,000 procedure and the three verdicts are each drawn from T4, T5, T10 and T8. The why / wrong idea
/ worked / two sets / check shape is the app's lesson standard, not another subject's.

### Minor (no change needed to pass)

- items-reserve.js:16–25 r-stopsign: the wrong option says "in the city", and the `need` says "the whole neighborhood".
  Make them match.
- gen-risk.js:25 g-risk-fair `base` up to 160 in 1,000 having a stroke in 3 years is unrealistic. Cap it near 80 once
  `years` varies.

## Verdict

| Lesson | Verdict | Defects |
|---|---|---|
| L0 | FAIL | 14 |
| L1 | PASS | 21 (advisory), minor r-stopsign |
| L2 | FAIL | 3, 4, 7, 19, 20 |
| L3 | FAIL | 1, 6, 10, 13, 16 |
| L4 | FAIL | 8, 17, 18 |
| L5 | FAIL | 2, 5, 9, 11, 12, 15 |

Counts by kind: wrong or self-contradicting numbers 5 (A); real-world facts 3 (B); arguable or wrong marked answers 7
(C); pattern cues 3 (D); plan or research departures 3 (E); carried-over structures 0.

Sources checked: [Sumner et al. 2014 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4262123/);
[Full Fact, How we fact check](https://fullfact.org/how-we-fact-check/);
[USPSTF 2018 vitamin D / calcium for fractures](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-d-calcium-or-combined-supplementation-for-the-primary-prevention-of-fractures-in-adults-preventive-medication);
[HealthDay on the 2024 USPSTF draft](https://www.healthday.com/healthpro-news/senior-health/uspstf-recommends-against-vitamin-d-supplementation-for-fracture-fall-prevention);
[Dartmouth release on Woloshin 2007](https://geiselmed.dartmouth.edu/news/2007_h1/print/19feb2007_booklet.html).
