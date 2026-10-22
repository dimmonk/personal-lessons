# Statistical Claims: final review before shipping (2026-10-22)

Fresh reviewer, both roles. I regenerated the learner views l0 to l9 first (`node tools/learner-view/render-learner-view.mjs stats`). As the
learner I read l6 to l9 in full, and in l0 to l5 the items changed in round 4. As the researcher I read the data files, the plan, the
research note and the fix logs. I swept the six generators over 1,000 seeds each and ran a cue script over every fixed item plus each
generator. `npm run test:unit` exits 0.

## Verdicts

| Lesson | Verdict | Deciding defects |
|---|---|---|
| L0 Before you start | PASS | none |
| L1 What it claims | PASS | none |
| L2 How big: out of how many | PASS | none |
| L3 A risk, before and after | PASS | none (polish P1) |
| L4 A test says yes | PASS | none |
| L5 Compared with what | **FAIL** | 1 (D1) |
| L6 Who was counted | PASS | none (polish P2, P3) |
| L7 Could anything else explain it | **FAIL** | 1 (D2) |
| L8 Read the chart's numbers | PASS | none (polish P4, P5) |
| L9 The whole claim | **FAIL** | 3 (D3, D4, D5) |

Four of the five deciding defects come from one root cause. A trial's feedback says "luck is unlikely" when the numbers do not support
that, or when the lesson's rule ("a few hundred people and a clear gap" against "a handful") cannot decide it. The round-4 test for two
standard errors covers the generators and the L3 trials only. Extend it to every fixed trial in L6 to L9 and in the reserve.

## Deciding defects

**D1. L5, check k-tickets: two defensible claims (arguable answer).** The headline is "Season ticket sales up 60%". The marked claim is
"Bayside is selling more season tickets than it did a year ago". The wrong option "Bayside sold 60% more season tickets this June than
last June" (labeled `mixed-claim`) is the same reading with the number kept in. L1 teaches claims that keep their size ("about a quarter"),
so a beginner who picks it has read the headline correctly. The tap and the verdict fixes from round 4 hold.
*Fix:* replace that option with one that is plainly another claim, such as "Bayside sells more season tickets than any other stadium in
the league" (`mixed-claim`).

**D2. L7, check k-hens (GrainPlus): the luck call cannot be made with what the lesson taught.** The trial has 48 barns (24 in each
group) and a 5% gap (294 eggs against 280). It is marked Holds up, and the feedback says "luck is an unlikely reason". Step 1's rule
covers "a few hundred people and a clear gap" against "a handful or a tiny gap". 48 units with a 5% gap falls between the two. In the
same check, k-focus (12 students, a 4% gap) is marked luck. A beginner who answers "too few to rule out luck" is reasoning as taught.
*Fix:* make the units clearly many and the gap clear, for example "The station split 400 hens by coin toss: 200 got GrainPlus…". The
alternative is several hundred barns.

**D3. L9, check k-lockwell: wrong statistical fact, and so a wrong marked answer.** The trial is "a lottery among 3,000 homes", 30
against 20 in every 1,000 over three years. Split evenly, that is 45 break-ins against 30, z ≈ 1.75 (two-sided p ≈ 0.08), so luck is not
ruled out. The feedback says "with that many homes luck is unlikely", and Holds up is marked right. By L7's own rule ("enough of them for
luck to be unlikely") the verdict is at best arguable.
*Fix:* 12,000 homes (6,000 in each group gives z ≈ 3.5). Keep the rest of the item.

**D4. L9, practice q-pravel: wrong statistical fact in the feedback.** The trial has 2,000 adults (1,000 in each group), 60 against 45 in
every 1,000, so z ≈ 1.5. The feedback says "The coin toss and 2,000 people make luck unlikely, so Pravel most likely made a difference."
The verdict, Does not show it, is still right on size, but the sentence teaches a false rule of thumb. L3's p-falls uses the same 60 and 45
with 10,000 people (z ≈ 3.4).
*Fix:* 10,000 adults, or drop the "most likely made a difference" clause.

**D5. L9's 28-day re-check pool, reserve r-fallguard: the same problem as D2.** "40 care homes were split by lottery", 80 against 60 in
every 1,000 residents, and the number of residents is never given. It is marked Holds up with "unlikely to be luck". A beginner cannot
size it, and with the unit being the home (20 in each group) it may not be true.
*Fix:* state the residents and more homes, for example "120 care homes, about 9,000 residents, were split by lottery".

## The claimed fixes, checked

Every fix below is verified (read in the regenerated views and the data files) unless marked.

- **l6-9, R1:** the luck option reads "Only luck: the groups were split by chance", and L7 Step 1 and 2 cover size and luck.
- **l6-9, R2:** L9 Step 1 lists the six questions in the accepted wording, and the recall comes at the end of the group.
- **l6-9, R3:** q-elmwood and r-dunmore each give the count and the usual in one sentence, and q-harbor's small print is the right tap.
- **l6-9, R4:** the Fairfield claim no longer says "Recycling is working".
- **l6-9, R5:** the L6 screen has the line "a fault the text shows decides it".
- **l6-9, R6:** k-focus and k-growmax (luck), q-stepup and k-ferry ("ever" holds), and q-water and k-techmart (cannot tell) are all as
  claimed.
- **l6-9, R7:** the right claim is uniquely the longest in 16 of 67 claim asks in L6 to L9 (24%), and in 48 of 189 across the subject.
- **l6-9, R8:** the renamed checks are in place.
- **l6-9, D4, D7, D8, D9, D11:** all as claimed: the margin rule with its example, k-hawks with 3 and 8 in one sentence, "up or down"
  with no "Type 0", first-to-last prompts, and the list of fractions.
- **round 4, g-risk-fair:** over 1,000 seeds of each generator, no gap is under two standard errors (lowest z 4.3 fair, about 2.1 over).
  The fixed trials state their size: Ostrel (z 3.2), Ravel (3.4), Tolpex (2.7), training (2.7).
- **round 4, k-tickets:** the tap prompt and "its slowest month" are fixed. The claim options are not (D1).
- **round 4, cause wrong options:** a sample was checked (k-mills, k-bus, k-tutor, k-5k, q-marlow). Each now names a cause the text
  offers.

## Research checks

- **Facts.** The margins of error are right: 400 people gives about 4.9 points, 600 gives 4.0, 700 gives 3.7, 1,000 gives 3.1 and
  1,200 gives 2.8. The two-margin rule for a two-way lead is correct. Every percent, every "in 1,000" figure and both test counts
  (TickCheck 450 of 475, Kessel 30 of 78) recompute. Trials that clear two standard errors: Brightmind (z ≈ 2.1, borderline but true),
  Steadyfoot 3.2, Mintel 2.8, NasalCare 3.6, and the Restwell comparison 2.3. The exceptions are D2 to D5.
- **Note checked against the source.** T11 (Yang, Vargas Restrepo, Stanley & Marsh 2021, *JARMC* 10(2) 298–311) matches Duke's record:
  83.5% of participants across five studies, the effect persisted after teaching, and graph literacy did not predict it. T9 (Hill's
  "any other way of explaining the set of facts") matches the standard text.
- **Way of thinking.** L6 to L9 follow T8 (Gal's questions), T9 (Hill's one question, with chance first), T11 (read the axis numbers)
  and T12 (pin the claim first). The one departure is the luck call in D2 and D5, where the item asks for a judgment the note's T9
  says needs "big enough" groups and "a clear" gap, and the text gives neither. I found no structure carried over from another subject.
  The verdict triad comes from T8's "Is something missing?".

### Surface cues (script `final-cues.mjs` in the session scratchpad)

The pool was every fixed item plus each generator over 300 seeds.

- **Option position:** every choose ask with options is shuffled, so position gives nothing away.
- **Length:** the right claim is uniquely the longest in 25% of claim asks and uniquely the shortest in 19%. Chance is 33%.
- **Overlap with the headline:** the right claim has the most words in common with the headline in 43% of claim asks (chance 33%).
  That is a mild cue. It follows from the claim being the headline's, and it is not enough to pass a check.
- **Verdict words:** no word that appears in 6 or more items goes with one verdict 90% of the time or more. The text form (news, ad,
  post, report), a split by chance (13 hold, 10 do not show it, 4 cannot tell) and the chart scale are each spread across all three
  verdicts.
- **"Could anything else explain it?":** "Only luck" is right exactly when the text has a coin toss or a lottery (20 of 20). That is the
  rule being taught, not a cue.
- **Tap:** the right sentence is the longest in 116 of 154 taps with a sentence answer (chance would give about 66). "The first sentence
  with a digit" is right 13 of 15 times in L8. That is mostly the skill itself (find the number). Taps alone never decide an item, so
  this is not deciding. See polish P6.
- **Cause wording:** in L2, L5, L6 and L8 an option worded as a cause is never the right claim (0 of 32). In L7 it is right 13 of 16
  times. Ruling it out follows the headline, which is the taught move, so this is noted only.

## Polish (does not decide a verdict)

- **P1. L3 generators** print counts without a thousands comma ("4000 of 40,000", "2400 of 40,000"). Put `statsN` on `a` and `b`.
- **P2. L6 item 7 (IronWorks):** the wrong option "Most adults in town go to a gym … at least twice a week in March" mixes tenses.
  Use "went".
- **P3. L6 check 13 (Westside) and L9 check 15 (GrowMax), L9 item 9 (Chalk Talk):** one tap segment holds two sentences, so "tap the
  sentence" is slightly off. In Chalk Talk the tap feedback says "That is not the sentence" where "That repeats the claim" fits better.
- **P4. L8 item 2 (library):** "Up 150% since 2021" is literally true. The verdict rests on the claim having been fixed as "more than
  it used to". The feedback says so, but a cold reader may push back.
- **P5. L8 check 13:** the wrong-value feedback "66.67%" reads oddly. Round it to 67.
- **P6. Taps across the subject:** the right sentence is the longest about 75% of the time. A few distractor sentences with numbers
  (as k-tickets now has) would make the tap need reading.
- **P7. L9 item 5 (Pravel):** the wrong option "a quarter less likely in children" carries the true size. Use the headline's "half".
