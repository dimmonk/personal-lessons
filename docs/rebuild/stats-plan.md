# Statistical Claims: key rewrite and unit plan

Written 2026-10-05 against lesson standard 1 (`docs/lesson-standard.md`). Files: `public/subjects/stats/subject.js`, `public/subjects/stats/key.js`, wired after `standard0.js` in `public/index.html` and `public/sw.js`. No unit is written. The old key in `standard0.js` still runs the old screens and the determination until the units are rebuilt (E13, F5).

## 0. The key in one view

| Step | Question | Answers (id: text) | Names |
|---|---|---|---|
| S1 (gate, u1) | Which part of the claim goes wrong first? | counted: Who was counted; measure: What the number counts; compare: What it is compared with; cause: What it says caused what; holds: Nothing goes wrong (legit) | five families |
| H1 (holds, u2) | What does the claim say the figures show? | group: A figure for one group; change: A rise or fall in one figure; difference: A difference between two things; causes: One thing causing another | A fair count, A real change, A fair comparison, A fair test (all legit) |
| A1 (counted, u3) | How did the people or things in the figure get into it? | lasted; chose; replied; handful | Survivorship bias, Self-selection bias, Non-response bias, Too few to trust |
| M1 (measure, u4) | What besides the real thing could move this figure? | pushed; newrule; looked | Gaming the target, A change in how it is counted, Detection bias |
| C1 (compare, u5) | What would you need to see to read the figure fairly? | numbers; common; split | A percentage without the numbers, Base rate fallacy, Simpson's paradox |
| K1 (cause, u6) | What else could produce the same result? | anyway; behind; backward; extreme | No comparison group, Confounding, Reverse causation, Regression to the mean |

Tie-breaks (data, `yieldsTo`): on S1 each later part yields to every earlier one (measure to counted; compare to counted and measure; cause to counted, measure and compare). On K1, `anyway` yields to `extreme`. No other question has one: H1's answers are exclusive by their `when` lines, and every other branch was written so that a case shows one answer.

Outcome ids are the old ones (18 outcomes, same ids), so nothing keyed by an outcome id is orphaned.

## (a) Key changes and why (becomes `build.keyChanges`)

Each line is `{ step | outcome, was, now, why }`. The audit is `docs/comprehension-audit/stats.md`; section 11 of the standard lists the questions this rewrite had to settle.

### The gate

1. **step S1.** was: "Which part of the claim goes wrong first? (If none does, which part does it rest on?)" with four answers. now: "Which part of the claim goes wrong first?" with five answers; the fifth, "Nothing goes wrong", is marked `legit` and has its own branch. why: a claim with nothing wrong had no answer (audit W10). The old fix, "which part does it rest on", sent each sound claim to whichever part "the claim spends its words on", a rule no observer can apply the same way twice, and the same randomised trial was keyed "nothing wrong" in one drill and "cause" in a specimen. K2.3 also forbids a question with a second question in brackets. Section 11 asks for "a gate answer for a claim with nothing wrong"; this is it.
2. **step S1, order as data.** was: the "earliest part" rule lived only in a card and in feedback, and two specimens broke it. now: each later answer `yieldsTo` every earlier one, with a `say` line. why: K2.8, a tie-break exists only as data; it becomes three named `exception` cards in Unit One and the `also` field on every case that shows two parts going wrong.
3. **step S1, answer texts.** was: "Who was counted", "What the number counts", "What it is compared with", "What it says caused what" (four wordings across the old app, audit vocabulary map). now: the same four texts, kept because the audit found them the one part of the key the course already taught in its own words; each now has `plain`, `needs` and `when`. why: K2.4, continuity for a learner who used the old app; the `when` lines say what a case must show, which the old `sub` lines did not.
4. **step S1, compare.** was: its `sub` and answers covered "nothing beside the figure" (No comparison group). now: "What it is compared with" covers a percentage of what it was, a test's accuracy, and totals set side by side, where the claim leaves out what is needed to read them. why: every old case of a lone figure ("nine in ten improved after the programme; it works") was a claim that something worked, and its fix (a group that went without) was the same fix the cause branch used for a group picked at its worst. Specimens 12 and 17 were keyed to two different parts for one problem (audit U7-2). Moving No comparison group to the cause branch puts both in one question, separated by one answer and one tie-break.
5. **step S1, measure.** was: "whether the number measures the real thing". now: `when` is "the figure could rise, fall or differ without the real thing it is read as showing doing the same". why: the old second question of this branch was the only one the audit found taught word for word (U3-1); it becomes the gate's test for the family and the branch's own question.

### The new branch: Nothing goes wrong (H1, Unit Two)

6. **step H1.** was: none; the four sound names sat one in each branch as a fifth answer that the gate could not reach. now: one question, "What does the claim say the figures show?", four answers, one name each. why: P26 needs the sound claims taught as names in their own right and present in every drill stage; one branch for them lets every later unit set its faults beside them (Non-response bias against A fair count) across the gate. The question does work: it tells the learner what a sound claim has earned and what it has not (a fair comparison shows no cause).
7. **outcome samp_ok.** was: "A fair count", reached by the false answer "Everyone in the frame was counted" (U7-6: a 40,000-household sample is not everyone). now: "A fair count", `needs` "all of its members or some picked at random". why: K2.4, an answer must be true of the cases it is given for; "frame" is on the avoid list.
8. **outcome meas_ok.** was: "A trustworthy measure". now: "A real change". why: the branch now names a sound claim by what it says; "a trustworthy measure" named a quality of the instrument, and its old specimen (the reservoir) also set the level beside a twenty-year average, which made it a comparison.
9. **outcome comp_ok.** was: "A fair comparison", untaught (audit U4-5: "like-for-like" was a three-word mention). now: same name, `needs` lists what like for like means (same kind, same way, same period, numbers given, no hidden mix).
10. **outcome cause_ok.** was: "A cause that holds up", four phrasings (U5-6). now: "A fair test" (aka a randomised controlled trial). why: one name; the `needs` line says what makes it fair (groups formed at random, one given the thing). Claims of cause from other kinds of study are a limit of the key, stated on the reference screen.

### Who was counted (A1, Unit Three)

11. **step A1.** was: two questions, "How did these people or cases get into the data?" and "Who is missing, and would adding them change the answer?", where every answer of the first kept one name except one (W5). now: one question, "How did the people or things in the figure get into it?". why: V55; the second question repeated the first.
12. **option A1.chose / A1.replied.** was: "They chose to take part" and "Only the ones who replied were counted", which the audit found fit the same survey (U2-2, the employee survey). now: "They chose to answer, when anyone could" and "Everyone on a list was asked, and many did not reply". why: the difference an observer can point to is whether people were asked by name from a known list or nobody was asked at all; "frame" is replaced by "a known list".
13. **option A1.handful.** was: "Nobody was filtered out: everyone had an equal chance of being counted", shared with the sound count. now: "All were counted, but there are only a handful". why: settles where small numbers live (U2-4): in Who was counted, because the problem is too few in the figure, and the gate's order says a percentage change built on a handful (up 300% from 1 to 4) is named here before What it is compared with.
14. **outcome smalln.** was: "Too few cases to trust (small-number volatility)". now: "Too few to trust". why: V1 (no bracketed second name); "case" is the app's word for an example and must not also mean "a person counted".
15. **outcomes survivor, selfselect, nonresp.** was: plain names with the textbook name in brackets. now: the real-life names "Survivorship bias", "Self-selection bias", "Non-response bias", each with `plain` and `aka`. why: K4, names people meet in real life are target terms; "bias" is explained in the sentence that gives the name.
16. **selfselect and the volunteers in a trial.** was: a trial of 40,000 volunteers was keyed sound while Unit Two taught that volunteers are a fault (U5-5). now: the `when` of A1.chose requires the answers to be read as true of a wider group than the ones who chose; a fair test's claim is about the difference between two groups split at random from the same volunteers, which volunteering does not lean. why: this is the line between choosing who is counted and choosing who is compared; it is taught as an `exception` in Unit Three (looks like Self-selection bias, is A fair test).

### What the number counts (M1, Unit Four)

17. **step M1.** was: "What is this number really a count of?" then "If the real situation had not changed at all, could this number still have changed?", each answer of the first keeping one name. now: one question, "What besides the real thing could move this figure?". why: V55; the kept question is the one the audit found already taught, reworded so it also covers two places that differ (more screening in one region).
18. **outcome proxy.** was: "Hitting the target, missing the point (Goodhart's law)". now: "Gaming the target", aka Goodhart's law, teaching to the test. why: V1; a name people use for the thing, with the researcher's name kept only as another name real life uses.
19. **outcome defshift.** was: "The counting rule or tool changed"; the tool half was never taught (U3-4). now: "A change in how it is counted"; the answer names "a new rule or tool", and the `when` gives a meter as the tool. why: the units must teach the tool half with its own case.
20. **outcome detection.** was: "More looking, not more happening (detection effect)". now: "Detection bias", aka "more looking, not more happening". why: V1, K4.

### What it is compared with (C1, Unit Five)

21. **step C1.** was: "What is the number compared with?" and "What would you need to see to read it properly?", redundant (W5). now: one question, "What would you need to see to read the figure fairly?". why: V55; the second wording is the one a person asks out loud.
22. **outcome relrisk.** was: "A percentage without the numbers (relative risk)". now: "A percentage without the numbers", aka relative risk. why: V1. The units show the arithmetic both ways (6 in 100 to 7 in 100 is "18% higher"; 2 in 10,000 to 1 in 10,000 is "cut by half").
23. **outcome baserate.** was: "Ignoring how common it is (base-rate neglect)", five wordings (U4-2). now: "Base rate fallacy", aka base-rate neglect and the false positive paradox; the answer is "How common the thing is to begin with". why: one name, one answer; "a test's accuracy" replaces "a rate", which meant something else in Unit Two; "false alarm" is a term with its own card.
24. **outcome simpson, and its line from confounding.** was: no taught criterion (W11). now: the `when` of C1.split requires two totals of two places or people that deal with cases (hospitals, tutors, shops) set side by side as a ranking, with the case showing each deals with a different mix of easy and hard ones; Confounding's `when` requires people or places that did one thing set beside ones that did not, with something else differing between them. The gate's order makes a ranking of totals with a hidden mix What it is compared with even when it also says one thing caused another. why: in the field Simpson's paradox is one form of confounding; the key draws the line at what is set side by side, and the units say plainly that this is the key's decision (K2.8).

### What it says caused what (K1, Unit Six)

25. **step K1.** was: "What else could produce this same pattern?" and "What would settle it?", redundant, with two fixes never taught (U5-2). now: one question, "What else could produce the same result?", four answers; what would settle each is taught in its `portrait` and `meet` cards, not asked as a second question. why: V55.
26. **option K1.anyway, outcome nocontrol.** was: in the comparison branch. now: the first answer of K1, "It would have happened anyway". why: see change 4.
27. **K1 tie-break.** now: `anyway` yields to `extreme` (say: "a group picked because it was at its worst or best"). why: a group picked at its worst and given nothing to compare with shows both; the later answer says why the change would have come anyway, so it is the more exact name (old specimen 17).
28. **answers K1.behind, K1.backward, K1.extreme.** was: "Something else that drives both at once", "It could run the other way", "The group was picked for being at an extreme, and drifted back". now: "Something else causes both", "The second thing causes the first", "It was picked at its worst or best, and goes back toward usual". why: K2.6 (no figure of speech: "drives", "runs", "drifted"); K2.5 (all four are clauses saying what else produced the result).

### Terms and avoid list

29. **terms.** new: at random, sample, margin of error, placebo (Unit Two), false alarm (Unit Five). why: the audit's W7 list; each is a word a sound claim or a test result leans on. "rate" was considered and left out: the validator's V2 matches a term's name inside other words ("accurate", "separate"), so a term named "rate" would flag ordinary prose (gap 6 below). Units say "for every 100" instead.
30. **avoid.** new: frame, population, denominator, pipeline, first break, fault, proxy, metric, baseline, absolute risk, prevalence, correlation, variable, confounder, cohort, counterfactual, random error, systematic error, falsify, the rule. why: the audit's jargon list and K9.

## (b) The unit plan

Six units, all kind C. Unit One is the gate unit (A15). The arithmetic the standard asks for (section 11: relative against absolute risk, the base-rate table, small numbers) is shown inside `meet`, `lens` and `worked` cards of C units; no P unit is planned, because a procedure unit's outcomes would have to be kinds of problem in the key, and the skill here is choosing the name, not doing the sum (gap 5 says what this costs). Old Unit Six ("Claims that skip the questions") and old Unit Seven ("Putting it all together") have no unit: their claims become claim items and `refute` cards in the units below, and the whole key is practised by the specimens (E13) and by every unit's `route` stage.

Every unit: an action subject's close (`recap`, `transfer`, `plan`); a drill whose every case stage holds at least one claim with nothing wrong (V37); four return cases per name (E9, V44); every case new (no topic of the old drills or specimens, W5.4); every rule taught in two areas of life and drilled in a third (W5.5).

### u1 (C, gate unit) "Which part of the claim goes wrong first?" (title in plain words, as Psychology's: "Four parts of a claim, and a claim that holds")

- Teaches: step S1; families counted, measure, compare, cause, holds; the word "route" (K9); no terms.
- Assumes: nothing. Baseline check (E21) asked before it: six cases (below).
- Parts (A13, following the gate's answers in order): (1) a claim is put together in order; Who was counted; What the number counts. (2) What it is compared with; What it says caused what. (3) Nothing goes wrong; the order as a tie-break (three `exception` cards); the `question` card; two `worked` cases; drill; close.
- Ledger (pairs families, step S1): counted~measure, measure~compare, compare~cause, counted~holds, measure~holds, compare~holds, cause~holds, counted~cause. The four "~holds" pairs carry P26: the same claim with and without the problem (the same café survey with 90% of the list replying, and with 9%).
- Exceptions (the tie-break): a claim of cause built on the ones that renewed (looks like What it says caused what, is Who was counted); "since the bonus, calls per hour are up, so the bonus improved service" (looks like cause, is What the number counts); "sales up 300% since the advert, so it worked" with no numbers (looks like cause, is What it is compared with).
- Refute (P29): "It was in a respected journal, so it is settled" (correct reasoning: the same four parts are checked whatever the source). Source to verify.
- Drill: `piece` (S1 on new cases, a reverse item per family, "which question" items are impossible in a gate unit), `route` (S1 on mixed cases, clean before misleading, two or more per family, `also` cases), `claim` (a lone figure, "nine in ten recommend it", put right).
- Replaces: old Unit One (cards "A claim has four parts" to "Worked example: running the parts in order", drill V1). The café running example can stay as the lens; every drill case is new.
- Plan cues: "if I see a figure in a headline I want to share, then I will ask who was counted before I share it".

### u2 (C, branch holds) "Nothing goes wrong"

- Teaches: step H1; outcomes samp_ok, meas_ok, comp_ok, cause_ok; terms at random, sample, margin of error, placebo.
- Assumes: u1.
- Parts: (1) A fair count and A real change (a figure for one group; one figure over time). (2) A fair comparison and A fair test (two things set side by side; one thing causing another). (3) question, worked, drill, close.
- Ledger: samp_ok~meas_ok, comp_ok~cause_ok (the same two groups, compared, then said to show a cause), meas_ok~comp_ok (a level that fell, against a level set beside the usual one).
- Refute: "A sample of a thousand cannot speak for a country of millions" (correct reasoning: how they were picked matters, and a margin of error says how far chance can move it).
- Every drill item is a sound claim, so V37 holds trivially; `route` items from u1 (earlier) mix in faulty claims at the gate, so the learner does not learn that every claim in this unit holds.
- Replaces: old cards "When nothing is wrong" (Unit One), "A fair count" (Two), "A trustworthy measure" (Three), "A fair comparison" (Four), "A cause that holds up" (Five), and the sound items of drills V1 to V5.

### u3 (C, branch counted) "Who was counted"

- Teaches: step A1; outcomes survivor, selfselect, nonresp, smalln; no new term (sample and at random restated in a line, W8).
- Assumes: u1, u2.
- Parts: (1) Survivorship bias and Self-selection bias (who is missing because of what happened to them, or because of what they chose). (2) Non-response bias and Too few to trust. (3) question, worked, drill, close.
- Ledger: survivor~selfselect, selfselect~nonresp (asked by name from a list, or nobody asked), nonresp~samp_ok (step S1: the same list, few replies against most replies or followed up), smalln~samp_ok (step S1), selfselect~cause_ok (step S1, the volunteers exception), smalln~relrisk is taught in u5.
- Exception: the volunteers split at random (looks like Self-selection bias, is A fair test).
- Refute: "A bigger sample fixes it" (old card "A big sample does not fix a bad one"; correct reasoning in plain words with numbers: asking 100,000 people at bus stops still asks only bus users).
- Arithmetic: one person more or fewer in a class of 20 moves a share by 5 points; in a school of 2,000 by 0.05; small places crowd both ends of a ranking.
- Legit cases in each drill stage: claims of A fair count (cross-branch, gap 2).
- Claims (old errDrill): "Nobody who followed our trading system lost money last year" (survivor), "97% of the people we asked at the rally support us" (selfselect), "This diet worked for me and everyone I know" (selfselect, also: anyway).
- Replaces: old Unit Two (cards and drill V2), old errDrill items 6, 7, 9.

### u4 (C, branch measure) "What the number counts"

- Teaches: step M1; outcomes proxy, defshift, detection.
- Assumes: u1, u2.
- Parts: (1) Gaming the target (what people do when judged on a figure). (2) A change in how it is counted (a rule; a tool) and Detection bias. (3) question, worked, drill, close.
- Ledger: proxy~meas_ok (S1), defshift~meas_ok (S1), detection~meas_ok (S1), proxy~detection (both rise with effort: effort on the figure, or effort to find the thing), defshift~detection (a new, finer test: tool or more looking; the case must say which, see gap 7).
- Refute: "If the figure went up, more of it is happening".
- Claims: "UFO sightings have tripled since the film came out" (detection).
- Replaces: old Unit Three, drill V3, old errDrill item 10. The tool half of the old outcome gets its own `again` case (a new meter, a new scale).

### u5 (C, branch compare) "What it is compared with"

- Teaches: step C1; outcomes relrisk, baserate, simpson; term false alarm.
- Assumes: u1, u2, u3 (the exception with Too few to trust needs it).
- Parts: (1) A percentage without the numbers (with the sums). (2) Base rate fallacy (count 10,000 people through the test, as a table) and Simpson's paradox (a two-row table that reverses). (3) question, worked, drill, close.
- Ledger: relrisk~comp_ok (S1), simpson~comp_ok (S1), relrisk~baserate, relrisk~smalln (step S1, exception: "up 300%" from 1 to 4 is Who was counted first), baserate~comp_ok (S1: a test whose yes is read with how common the thing is).
- Refute: "A percentage is the fairest way to show how big a change is".
- Claims: "Crime in the neighbourhood is up 200%" (relrisk).
- This is the split of old Unit Four that section 11 asks for: its two other names went elsewhere (No comparison group to u6, A fair comparison to u2).
- Replaces: old Unit Four except No comparison group and A fair comparison; drill V4; old errDrill item 3.

### u6 (C, branch cause) "What it says caused what"

- Teaches: step K1; outcomes nocontrol, confound, reverse, regression.
- Assumes: u1, u2, u5 (the Simpson exception).
- Parts: (1) No comparison group and Regression to the mean (one group, before and after). (2) Confounding and Reverse causation (two groups that chose). (3) question, worked, drill, close.
- Ledger: nocontrol~regression (tie-break, exception: a group picked at its worst), confound~reverse, nocontrol~cause_ok (S1), confound~cause_ok (S1: the same two groups, chosen or formed at random), confound~simpson (step S1, exception, "the key's decision").
- Refute: "Correlation does not imply causation, so the study proves nothing" (old errDrill item 2; correct reasoning: name the other explanation and check it; a fair test closes them).
- Arithmetic: regression with ten scores re-measured (the worst three move toward the middle with nothing done).
- Replaces: old Unit Five (cards, drill V5), old Unit Four's No comparison group card and items, old errDrill item 2.

### Not carried over

Old errDrill items 4 ("an average household has 1.9 children"), 5 ("peer-reviewed, so settled", becomes the u1 refute) and 8 ("40% healthier hair") ask about things outside the key; the first and last are dropped and the limits screen names averages. Old Unit Seven's "How the screen works" card is the app's own job (E13 shows one worked determination before the first specimen).

### Baseline check (E21), in u1's case collection, `use: 'baseline'`, then listed in `subject.baseline`

Six claims, three sound: a survey of residents picked at random with most replying (holds); two clinics' waiting times measured the same way (holds); a lottery-split trial of a reading scheme (holds); a website poll read as the town's view (counted); "diagnoses doubled after the new screening" (measure); "people who own dogs live longer, so get a dog" (cause). Not listed in `subject.js` yet: V0 refuses a baseline id with no case behind it.

## (c) The old specimens, run one question at a time against the new key (K2.10)

All 18 retell an old drill item or card example (audit W8); all are rewritten as new cases whatever their route. The route below is what the old text gets under the new key, to show whether the wording or the case needs fixing.

| # | Old outcome | S1 | Branch question | New route and name | Verdict |
|---|---|---|---|---|---|
| 1 funds on the platform today | survivor | counted ("every fund available today") | A1 lasted | counted/lasted, Survivorship bias | route holds; rewrite (retold) |
| 2 website questionnaire, 78% | selfselect | counted ("readers responded") | A1 chose | counted/chose, Self-selection bias | holds; rewrite |
| 3 wellbeing survey, 600 of 4,000 | nonresp | counted | A1 replied ("sent to all 4,000") | counted/replied, Non-response bias | holds; the new answers separate it from #2 (old U2-2 fixed); rewrite |
| 4 kidney cancer, small districts | smalln | counted (every district counted, few people each) | A1 handful | counted/handful, Too few to trust | holds; rewrite |
| 5 labour survey, 40,000 at random | samp_ok | holds (random draw, chased, margin stated) | H1 group | holds/group, A fair count | holds; old false answer "everyone in the frame" gone (U7-6); "margin of error" is now a term; rewrite |
| 6 four-hour target | proxy | measure ("made the target the central measure") | M1 pushed | measure/pushed, Gaming the target | holds; rewrite in US wording (no "trust", W13) |
| 7 recording standard | defshift | measure | M1 newrule | measure/newrule, A change in how it is counted | holds; rewrite ("constabulary", W13) |
| 8 thyroid screening | detection | measure ("screening programme") | M1 looked | measure/looked, Detection bias | holds ("fifteen-fold" with no numbers would also be compare, which yields to measure: mark `also: ['compare']` if kept); rewrite |
| 9 reservoir gauge | meas_ok | holds | H1: the fall is set beside a 20-year average, so `difference`, not `change` | holds/difference, A fair comparison | case does not show what its old name needs; rewrite as a level read the same way with no comparison (A real change), or keep the comparison and name it A fair comparison |
| 10 screening test, 1 in 10,000 | baserate | compare ("99% chance") | C1 common | compare/common, Base rate fallacy | holds; rewrite (numbers retold in V4) |
| 11 bacon, 18% | relrisk | compare | C1 numbers | compare/numbers, A percentage without the numbers | holds; "advises readers to give up bacon" is also a cause claim (cause yields to compare: `also: ['cause']`); "rashers", "cohort" out (W13, avoid list); rewrite |
| 12 back pain programme | nocontrol (via compare) | cause ("the programme works"); nothing beside the one figure, so compare does not apply | K1 anyway | cause/anyway, No comparison group | route moves (change 4); the old first-break conflict is gone because the old text no longer says "completed"; rewrite |
| 13 hospital mortality, referral centre | simpson | compare (two totals, different mix stated) | C1 split | compare/split, Simpson's paradox | holds; "district general", "referral" need plain words; rewrite |
| 14 two cities, pedestrian injuries | comp_ok | holds | H1 difference | holds/difference, A fair comparison | holds; rewrite |
| 15 music lessons | confound | cause ("builds the skills"); not a ranking of totals of two providers, so compare does not apply | K1 behind | cause/behind, Confounding | holds; "tuition" out (W13); rewrite |
| 16 gym and sick days | reverse | cause | K1: both backward (ill people cannot train) and behind (health-minded people) fit (audit U5-8) | ambiguous | case must be rewritten to show one: e.g. the gym records show people stopped coming in the months they were ill |
| 17 clinic, worst 100 scores | regression | cause | K1: extreme and anyway both shown; anyway yields to extreme | cause/extreme, Regression to the mean, `also: ['anyway']` | holds by the new tie-break (old U7-2 conflict settled in data); rewrite |
| 18 vaccine trial, 40,000 volunteers | cause_ok | holds | H1: the old text states no claim, so no answer of H1 can be given | none | case does not show what H1 needs; rewrite with the claim stated ("the vaccine prevents the illness"), the volunteers split at random, and placebo as the term |

Specimens needed after the rebuild: at least one per name (18), clean first, look-alikes alternating (E13), at least two that go wrong in two parts with the earlier named (`also`), and sound ones from every H1 answer.

## (d) Gaps this subject's units will hit

1. **Legacy course ids (engine, blocking for the first build).** `app/state.js` maps a subject's units to its old course by position only while no unit is rebuilt; once one is, it looks each old unit up by `id`, and the old stats course entries have no ids, so the app throws on load. Today `units` lists six ids, so the six first old units show in order and old Unit Seven's cards are not listed (the determination stays on the subject screen). The builder of u1 must either give the old entries ids or rebuild u1 and u2 together; the new u2 has no old counterpart, and old Units Six and Seven have no new one. Either way it is a change to `standard0.js` or to `state.js`, made in the same commit as u1.
2. **Legitimate cases across branches.** V37 needs a claim with nothing wrong in every case stage of u3 to u6, and their own branches have no legitimate name: the sound names are all in u2's branch. Those stages must hold cases whose outcome is taught by u2 (route S1 holds, then H1). Not yet confirmed: that the engine's `name`, `finish` and `route` stages offer the names of the case's own branch when it differs from the unit's (E6 says "every outcome taught so far in the case's branch", which reads as yes), and that the validator accepts a drill case whose outcome is taught by an assumed unit. `{ earlier: 'u2' }` items would not count for V37 (the rule cannot see their case).
3. **Ledger pairs across the gate inside a branch unit** (nonresp~samp_ok with `step: 'S1'` in u3, and so on). The gate unit pairs families and Psychology's branch units pair outcomes of one branch; a pair of outcomes from two branches, separated by the gate, has no exemplar. Check V13 to V15 and the `lookalike` table (E2) with one.
4. **No separator items.** Every branch has one question, so no unit can ask "which question tells these apart" (S6, section 15 item 11). The skill is carried by the gate items instead.
5. **No arithmetic from the learner in a C unit.** The `solve` check exists only in procedure units, so u3 and u5 can show the sums (a share in a class of 20, 6 in 100 to 7 in 100, 10,000 people through a test, a reversing table) but cannot ask the learner to do one. If the cold read shows the sums are not learned by reading, the remedy is a `solve`-style check for C units, not a P unit.
6. **V2 matches inside words.** The typed-copy check is a substring test (`bare.includes`), so a key line or term name that is also part of a longer word (a term "rate" inside "accurate") would flag ordinary prose. This is why "rate" is not a term. Short names that are ordinary phrases ("A fair test", "A real change", "Nothing goes wrong", "Confounding") will force every use in cards through a token, which is intended, but writers should expect hits on natural phrases like "a fair test of".
7. **One overlap with no tie-break yet:** a new, finer test brought in during the period is both "a new rule or tool" and "more looking". Units should keep to cases that show one; if real cases keep showing both, add a `yieldsTo` (likely `looked` yields to `newrule`) and teach it as an exception (K2.8). The same holds for Confounding against Reverse causation (old specimen 16).
8. **"case" means two things.** The app's word "case" (the example) collides with the statistical "cases" (people found with an illness). Units must say "people found with it", never "cases", in that sense. The avoid list cannot enforce it because "case" is an app word (K9); only the cold read can.
9. **K2.5 form.** The fifth gate answer, "Nothing goes wrong", is a clause where the other four are noun clauses. It was kept because it is the natural answer to the question and reads as a family name and a unit title; the cold read should confirm it.
10. **The lock.** With the subject record at standard 1, V46 first reported `stats: no lock entry`. A lock entry for stats appeared in `tests/lessons.lock.json` during the same session (not written by this rewrite), and V46 now passes. Any later change to `key.js` or `subject.js` needs the lock rewritten.
11. **Baseline not listed yet.** `subject.baseline` waits for u1's cases (V0 refuses an id with no case).
12. **The old determination keeps running the old key** until every unit is rebuilt (E13), so for a while the subject shows two keys: the new one on the reference screen, the old one in "Run the determination". This is the same state Psychology was in.

## Validator output for this subject (2026-10-05, after these files)

- `node tests/validate-data.mjs`: all checks pass across 7 subjects (the app builds Statistical Claims with the new record and the old course).
- `node tests/validate-lessons.mjs`: no finding for stats. The first run reported V46 (no lock entry); after a lock entry for stats was written elsewhere in the session, the subject-level rules (V0 shapes and references, V2, V8, V50 on the blurb and limits, V37 at subject level, V46) all pass. No unit rule runs, because there are no stats units: once units exist, V37 (unit), V54, V44, V52 and the anatomy rules apply to each. The four failures left in that run belong to civics, math, scams and wealth.
