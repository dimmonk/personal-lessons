# Research review, round 3: stats L0 to L5 (build-subject step 6, role "research")

Reviewer: a fresh agent (Opus 5.5) that did not build these lessons, 2026-10-22. Read-only, except for this file. Read: `plan.md`,
`docs/research/stats.md`, `l0`–`l5.lesson.js`, `subject.js`, `items-build.js`, `items-asks.js`, every items/gen file for L0–L5,
the learner views l0–l5 (spot checks; they match the data, including the round-2 changes), and `fixes-l0-5-round2.md` (only to
verify claims). Every number in every fixed item was recomputed by hand. The three generators were run on 4,000 seeds each
(scratchpad `r3/check.mjs`): every parameter value, whole numbers, every headline word against its verdict, and (L4) the share of
real positives against the verdict. A script (`r3/claims.mjs`) looked for answer patterns in the 87 claim asks of L0–L5.

## Source spot-checks (note against the web)

| Note | Checked against | Result |
|---|---|---|
| T9 Hill 1965 via Wakeford 2015: "None of my nine viewpoints…", "is there any other way of explaining the set of facts before us", "No formal tests of significance can answer those questions." | PMC4291331 | Verbatim match |
| T7/T9 Calling Bullshit syllabus: "Simpson's paradox", "data censoring", "means versus medians" under "Statistical traps and trickery" | callingbullshit.org/syllabus.html | Match |
| T9 "Supporting": syllabus lists under "Causality" "regression to the mean presented as a treatment effect", "selection presented as transformation" | same | **Not verbatim.** The page says "Regression to the mean pitched as treatment effect" and "Selection masked as transformation"; "correlation is not causation" is not one of the listed topics. The sense is right; the quotation marks are not (advisory A6). |

Rounds 1 and 2 checked T3, T5, T10, T12, T16 and found them right.

## Round-2 fixes: verified

- R1 gen-risk: fixed. Over 4,000 seeds both forms draw cut = fifth / forty / half about a third each; every headline share word
  ("a fifth", "40%", "half") sits under both verdicts, all counts are whole.
- R2 k-bread (90 of 1,800), R3 q-allergy (32 of 80, "fewer than half"), R5 (k-farm s3, q-bikes s3 carry "counted the same way"
  on outruns items), R6 (L4 wrong-idea wording), R9 (both test generators draw sens 70/75/85/95), R10, R11, R12: done as claimed.
- R4 q-schools: the wording changed, but the new claim is still arguable (defect 6).

## Defects that decide the verdict

### A departure from the field's way of thinking

1. **L1: "fell after says when, not why" (l1.lesson.js:20) and p-crosswalk (items-claims.js:40–51).** The screen teaches that a
   headline like "Crashes at 12 busy corners fell after new crosswalk lights went in" claims only timing. p-crosswalk then marks
   "The new lights made crashes fall" as a slip (heard-cause) and the verdict Holds up. But the plan's own verdict rule (plan.md:32–34)
   is that the claim is what a reader takes away from the headline, and putting the lights in a "fell after" headline is the classic
   way of suggesting a cause: Spiegelhalter's table (T2) lists "Suggest a cause when only an association is observed"; Bergstrom &
   West list "Regression to the mean pitched as treatment effect". No source in the note says readers hear "after" as timing only
   (T4 covers "linked", "may", "can", "causes", not "after"). So the lesson teaches learners to pass the very headline form the field
   warns about. **Fix:** take the cause out of the headline instead of teaching a reading rule: for example "Crashes at 12 busy
   downtown corners fall from 31 to 19 in two years", with the lights only in the story. Then "Crashes at the 12 corners fell" holds,
   and "The new lights made crashes fall" is honestly heard-cause. Drop the "(“fell after” says when, not why)" clause from the
   screen, or keep it as a warning ("a headline that puts a change after an event invites you to hear a cause; check whether it
   claims one").

### A rule taught that contradicts a marked answer

2. **L2: "A claim of more than usual holds up when your number is above the usual" (l2.lesson.js:20).** Taken as written, any
   amount above the usual makes a "soar" or "boom" hold. b-pool (items-base.js:54–67, strand claim-number, so it can return in
   the reviews) has 200 sign-ups against 190, above the usual, headline "soared", and is marked Does not show it because 5% is not a
   soar, which is the right call. A learner who applies L2's rule to b-pool is marked wrong. Every L2 item is two or three times the
   usual or at most the usual, so the gap is never practised. **Fix:** "A claim of more than usual holds up when your number is
   clearly above the usual; a strong word (“soar”, “boom”, “surge”) needs a big rise, such as half again or more. A little above the
   usual is an ordinary year." Add one practice item a little above the usual under a strong word (marked Does not show it), so the
   rule is used, not only read.

### Marked answers that are arguable

3. **L3 q-kelp (items-risk.js:177–187): the line ask.** The prompt is "Tap the sentence that tells how common it was without it"
   (LP, line 9). s2, "Colds were rare in both groups: most people in the trial never caught one", tells exactly that, in words, and
   is one of the item's own deciding lines; the marked answer is Not given. A learner who taps s2 is marked wrong for a defensible
   tap. **Fix:** change LP to "Tap the sentence that gives the number for how common it was without it" (then Not given is clean
   everywhere), or mark s2 right on q-kelp.
4. **L4 check, k-engine (items-test.js:197–210): the claim is about all fault codes, the count only about cars with a warning light,
   and the ad itself says it reads other cars too.** Headline: "Our code reader is 90% accurate: a fault code most likely means a
   real fault." Right claim: "When the code reader shows a fault code, there is most likely a real fault" (no group). The count is
   for "cars brought in with a warning light on" (600 in 1,000), and s3 says "Readings are free with any oil change", so the shop also
   reads cars with no warning light, where faults are rarer. The item's own `need` says "For cars with none you would need new counts."
   By L1's "who is it about", Cannot tell (or Does not show it) is defensible, and the check marks it as a sound claim turned down,
   which fails the check (`doubted` max 0). **Fix:** scope the claim: headline "For cars brought in with a warning light, our code
   reader is right: a fault code most likely means a real fault"; right claim "For a car brought in with a warning light on, a fault
   code most likely means a real fault"; replace s3 with a neutral line ("Readings take ten minutes"). Keep the "no warning light"
   option as the mixed-who slip.
5. **L4 generator g-test-high (gen-test.js:12–23, 49–52): the same gap on every seed.** The headline ("The {test} is {sens}% accurate:
   a positive result means you most likely have {cond}" or "A positive result on the {test} usually means {cond}") and the right claim
   ("A positive {test} result most likely means you have {cond}") are about anyone; the count is about a selected group (sent with a
   high fever, sent for a second test after a first positive, a clinic with a cough), and it is marked Holds up. The reason itself
   says "among people like these", and the need says "For people with no symptoms you would need new counts." That is the base-rate
   point of the lesson (who is tested decides), turned against the learner. The fixed items do it right: p-screen, q-strep and q-rash
   scope the headline ("At our clinic", "at our office"). The low form is unaffected (if positives are mostly false even in a sicker
   group, the general claim fails). **Fix:** give the high form a scoped headline and claim drawn from the group, for example "For
   patients sent for a second test, a positive {test} result usually means {cond}" with the claim "For people sent for a second test,
   a positive … most likely means {cond}", and the unscoped wording as the mixed-who option. The low form can keep its unscoped
   headline.
6. **L5 q-schools (items-compare.js:92–104): the right claim can be true.** Right claim: "A student would be more likely to pass at
   Dale High than at Hillcrest High." s2 says "Dale *sent* 200 students to the basic test … Hillcrest *sent* … 200 to the advanced
   one", so the school chooses the test. A student who moved to Dale would most likely be sent to the basic test and pass more often
   (82% against 63%), so the counterfactual claim is plausibly true on the text, and the reason's "a student taking either test would
   do better at Hillcrest" holds only for a student whose test is fixed. The hospital screen works because how ill a patient is does
   not depend on the hospital; here the mix is the school's own choice. **Fix:** make the mix come from the students, not the school:
   "Each student takes the test for their grade: the basic test in grade 9, the advanced one in grade 11. Dale's test takers were
   200 ninth graders and 20 eleventh graders; Hillcrest's were 20 and 200." Then claim "Dale High teaches students to pass the state
   tests better than Hillcrest High" (the reader's takeaway of "beats"), broken by the grade-by-grade rates.

## Advisory (does not decide the verdict)

A1. **Claim-ask distractors share give-away words.** Across the 87 claim asks of L0–L5, "whole", "across", "state", "never",
    "because", "already" and "all" occur only in wrong options (0 of 87 right), "every" in 25 wrong and 4 right, and past-tense "made"
    only in wrong options. Dropping those options and taking the one closest to the headline's words gets 71 of 87 right, and all 16
    in L4, where the wrong options are always "A negative … means you do not have it" and "For people who … ". Mostly this is the
    intended skill (the claim is what the headline says), but the mixed-who option almost always widens the scope with the same
    words. Vary it: some items where the headline is broad and the narrower wording is the slip (b-sleep does this), and more causal
    distractors in present tense ("makes") where the headline only links.
A2. **q-commute (items-claims.js:64–75):** "85% said they drive alone or carpool" against "drive to work": carpool riders do not drive.
    Census wording counts both as commuting by car, so Holds up stands, but "85% said they drive to work, alone or with others" removes
    the doubt.
A3. **Town count against a county usual** (w-flu s2, gen-size s2, "the county sees/counts about N in every 1,000"): comparing a town
    with the county's usual is itself a compared-with-what question L5 teaches. Say "In a usual winter, Millbrook sees about …".
A4. **l4.lesson.js:10, "found that one thing works":** the studies (T10, T17) found natural frequencies work far better than
    percentages, not that nothing else works. "found what works best" is supported.
A5. **w-stroke s2, "people their age":** whose age is never said. "people in the study's age group" or name it.
A6. **docs/research/stats.md:167–168:** the Calling Bullshit topics are quoted with wording the page does not use ("presented as"
    for "pitched as" and "masked as"; "correlation is not causation" is not a listed topic). Fix the quotation.
A7. **gen-test groups:** "a health fair" is always the low form and "a second test after a first positive" always the high form. That
    is sound base-rate reasoning (who is tested), so it is not a give-away, but with defect 5 fixed the scoped headline will name the
    group anyway.

## Structures carried over from another subject

None found. The three standing asks, the claim's two contrasts, counting 1,000 people through a test, before and after in 1,000,
the per-person-per-year sum, the fair/unfair pair and the reversal on two hospitals each come from T4, T5, T6, T7, T10 and T12.

## Verdict

| Lesson | Verdict | Deciding defects | Advisory |
|---|---|---|---|
| L0 | PASS | none | none (b-pool is right; defect 2 is L2's rule) |
| L1 | FAIL | 1 | A1, A2 |
| L2 | FAIL | 2 | A3 |
| L3 | FAIL | 3 | A5 |
| L4 | FAIL | 4, 5 | A1, A4, A7 |
| L5 | FAIL | 6 | none |

Counts by kind (deciding): departure from the field's way of thinking 1 (1); taught rule that contradicts a marked answer 1 (2);
arguable marked answers 4 (3, 4, 5, 6); wrong numbers 0 (every figure recomputed, all right); facts unsupported in the lessons 0;
answers guessable without reasoning 0 deciding (A1 advisory); carried-over structures 0. Advisory: 7 (one is a note misquote).

Sources checked: [Wakeford 2015 on Hill (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4291331);
[Calling Bullshit syllabus](https://callingbullshit.org/syllabus.html).
