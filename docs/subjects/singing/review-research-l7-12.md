# Singing, lessons 7 to 12: research review (build-subject step 6)

Reviewer: a fresh reviewer, role "research" (Opus 5.5). Read: `public/subjects/singing/l7`-`l12.lesson.js`, `items-top.js`,
`items-breath.js`, `items-sound.js`, `items-care.js`, `items-cause.js`, `subject.js` (lists), the learner views
`docs/learner-view/singing-l7..l12.md` (spot-checked against the data), `docs/subjects/singing/plan.md`, `docs/research/singing.md`,
`docs/lesson-standard.md` 3.10 and 6.4, and the build-subject skill. Sources checked on the web, 2026-10-22:

- AAO-HNS Plain Language Summary: Hoarseness (Dysphonia), Krouse et al. 2018, *Otolaryngol Head Neck Surg* 158(3) 427-431, full text
  (PDF at dysphonia.org), with its Table 1 (the key action statements of Stachler et al. 2018).
- ASHA Practice Portal, Resonance Disorders (the cul-de-sac test: pinch and release the nostrils during oral sounds).
- MedlinePlus "Hoarseness" (adult: 2 to 3 weeks; avoid whispering and shouting); Northwestern Medicine hoarseness handout (two weeks).
- Samlan & Story 2011 (breathiness from a glottal gap kept open through the cycle); Sundberg, CIRMMT lecture slides (first formant
  "mostly jaw opening").

## Verdicts

| Lesson | Verdict | Defects that decide it |
|---|---|---|
| 7 Lighter, not louder | PASS | none (the falling-short wording feeds defect 9, counted at lesson 12) |
| 8 What happens at the top | PASS | none |
| 9 A breath that lasts the line | FAIL | 3, 4 |
| 10 Odd sound, right notes | FAIL | 5, 6 |
| 11 Looking after your voice | FAIL | 1, 2, 7, 8 |
| 12 Find the cause | FAIL | 9, 10 |

Count by kind: wrong or unsupported facts 5 (1-5); questions with a wrong or arguable answer 4 (6-9); departure from the plan 1 (10);
departure from the way of thinking 0; structures carried over from another subject 0 (every lesson follows this subject's plan:
worked case, look-alike pairs, check on new cases, `sgCase` is the subject's own). Plus one defect in the research note (N1) and
7 polish items.

## Defects

### Wrong, out of date or unsupported facts

**1. Lesson 11: the doctor timing departs from the guideline it cites.** `l11.lesson.js` 17-21, `items-care.js` 4-5, 10-12, 28-33, 53;
learner view l11 "Rest, and when to see a doctor". The lesson teaches: no cold, a doctor at about two weeks; a cold, wait up to four
weeks. The Plain Language Summary (p. 428, "When should I see a health care provider about my hoarseness?") lists as separate bullets
"Your hoarseness does not go away or get better in 7 to 10 days, especially if you smoke" and "You do not have a cold or flu"; four
weeks (or "no clear cause") is when it should be evaluated by an otolaryngologist (p. 428; key action 4B, laryngoscopy). So by the
guideline a hoarse voice that is not getting better after 7 to 10 days needs a doctor whether or not a cold started it; four weeks is
the latest line for the specialist, not the first one for a doctor. "About two weeks" comes from NCVS and other secondary pages
(MedlinePlus says 2-3 weeks for adults) and is looser than the guideline the subject's `refs` names. The worked case's reason
(`items-care.js` 53, Sam five days after a cold: "If it is not better by four weeks, see a doctor") teaches the wrong line.
**Fix:** one rule from the guideline: not getting better after 7 to 10 days, see a doctor (sooner if you smoke); by four weeks at
the latest it must be looked at by an ear, nose and throat doctor; at once with a warning sign. Sam's reason: "If it is not better in
another few days, see a doctor." Drop the cold/no-cold split from the rule and the `means`; recheck the cases (Mia 6 days, Joe 2 days,
Eva 1 day stay rest; Raj, Tom 3 weeks and Kay 5 weeks stay doctor). Correct the note's V19 "Use" line to match.

**2. Lesson 11: the warning signs are incomplete.** `l11.lesson.js` 21, `items-care.js` 6, 22, 34-36. The summary also lists
difficulty swallowing (not only pain), "loss or severe changes in your voice that lasts longer than a few days", smoking (sooner), and
a vocal performer who cannot do the job; key action 3 adds recent neck or chest surgery or intubation. **Fix:** add at least
"losing your voice, or a big change that lasts more than a few days" and "trouble swallowing" to the right-away list, and accept them
in `care-warning`; say "sooner if you smoke".

**3. Lesson 9: the fix for an airy tone is a judgement call taught as fact.** `l9.lesson.js` 25, `items-breath.js` 7-8, 16, 42, 59.
The mechanism is supported: breathiness is a glottal gap kept open through the cycle, so air passes as noise (Samlan & Story 2011),
which is why the breath goes fast. No source was found for the instruction "aim for a clearer sound with less air in it" as a fix a
beginner can apply; the builder marks it a judgement call only in a code comment. **Fix:** cite the mechanism in the note (new
finding) and label the fix in the lesson: "This is a rough aim, not a tested fix: try a clearer sound with less air in it, and a hum
or straw first." (V12's straw is the one sourced aid that makes phonation easier.)

**4. Lesson 9: airy tone has no route to the care rule.** Same lines. The guideline defines dysphonia as "altered voice quality, pitch,
loudness, or vocal effort" (key action 1); a breathy voice that is new or does not go away is hoarseness by that definition, and a
gap that will not close can be a fold problem, not a habit. Every airy case presents it as technique. **Fix:** one line on the screen:
"If the air in your voice is new, or does not clear in a week or two, treat it as a hoarse voice (lesson 11)."

**5. Lesson 10: the three fixes are judgement calls taught as fact.** `l10.lesson.js` 24-27, `items-sound.js` 8, 29, 35, 38, 44.
- Nasal: the check is sourced (ASHA's cul-de-sac test, nostrils pinched and released on oral sounds: a change points to
  hypernasality); "find the ‘ah’ that stays the same" is a reasonable aim but has no source, and ASHA notes hypernasality is often
  structural.
- Muffled: "open your mouth more" has only indirect support (jaw opening mainly sets the first formant, Sundberg); none for it as the
  fix of a muffled sound. ASHA's "muffled" (cul-de-sac resonance) comes from an obstruction, a different cause.
- Mumbled: "speak the line clearly, then sing it" is a teaching habit; no source found.
**Fix:** add the ASHA source for the nose check to the note; in the lesson, the line already says the checks are rough: add "and the
fixes are first things to try, not tested cures", and for nasal "if the change with the nose held will not go away, a speech
therapist can check it."

### Questions whose marked answer is wrong or arguable

**6. Lesson 10, `sound-ivan-friend` (`items-sound.js` 42-44, practice pair).** "Sounds as if he has a cold" describes a blocked,
too-little-nose voice (hyponasal, ASHA), the opposite of nasal; and with the nose blocked, pinching it changes little. The story's
first cue argues against its marked answer. **Fix:** "a friend says Ivan sounds as if he is singing through his nose" (or "twangy").

**7. Lesson 11, `care-two-weeks` (`items-care.js` 28-30, lesson and check).** A learner who types the guideline's "7 to 10 days" or
"a week" is marked wrong. **Fix:** with defect 1, the question becomes "If it is not getting better after about how long should you see
a doctor?", accepting 7 to 10 days, about a week, about ten days.

**8. Lesson 11, `care-avoid` (`items-care.js` 37-39, lesson and check).** "Besides shouting, what should you avoid with a hoarse voice?"
accepts only whispering and throat clearing, but the lesson itself says "stop singing and rest" (why) and "do not sing too long or too
loudly" (habits), and the guideline says do not use the voice too long or too loudly. "Singing" and "talking a lot" are right answers
the check marks wrong. **Fix:** accept singing, talking a lot / for long, using it too much; or ask "What is not rest, though it seems
quiet?" (whispering).

**9. Lesson 12, `cause-paul-short` (`items-cause.js` 58-60, practice) and the falling-short wording in lessons 7-8.** Lessons 7 and 8
teach the fix for falling short as "Hear the note first, then move up to it" (`l7.lesson.js` 24, `items-top.js` 41, 53, 61, 78, 109,
129, 149; `l8.lesson.js` 25). Lesson 12's fix list has "Hear the note in your head before you sing it" (`hear`) and "Check the note
against a steady one and move to it" (`match`); Paul's marked fix is `match`, but a learner who remembers lessons 7-8 picks `hear`,
which those lessons gave word for word. The review's held-back top cases carry the same risk. **Fix:** reword falling short in lessons
7-8 to the `match` fix: "That is the note check: check it against a steady note and move up to it." Keep "hear it first" only for the
hearing check.

### Departure from the plan

**10. Lesson 12: the sung test is not given on two different days.** `l12.lesson.js` 4-6, `l6.lesson.js` 45. The plan's real-world test
(1) is "twice, on two different days (V2 consistency, V18 retention)", and lesson 12 is to retest part 1 "on a later day, `retest`".
The builder counts lesson 6's check as day one and lesson 12's as day two, but nothing makes them different days: the engine has no
day gate between lessons, `retest` on a sung check and Singing's review are both "Not built" (lesson standard 3.10), and a learner can
take lessons 6 to 12 in one sitting. Then the test measures neither consistency over days nor retention, and lesson 6's promise ("The
last part of this course gives the tune test again on another day") may be false. **Judgement: not acceptable as built.** **Fix**
(end-game, not a patch): build `retest` for a check with sung tries (the same block of the review as 6.4, a new seed per tune), and put
`retest: 7` (or the plan's chosen days) on lesson 12's check; until then lesson 12's sung part does not count as the second day unless
it is taken on a later calendar day than lesson 6's check (the try dates are stored, 5.2), and the result screen says which. Record the
choice in the plan.

### The research note

**N1. V19 misreads the Plain Language Summary** (`docs/research/singing.md` 214-216, 223-226). It joins "7 to 10 days" with "when you do
not have a cold or flu"; on p. 428 they are separate bullets, and four weeks is the otolaryngologist line. The "Use" line (two weeks
without a cold, four at the latest) follows from the misreading. **Fix:** quote the bullets as printed; rank the guideline over NCVS
and MedlinePlus where they differ; rewrite the Use line as in defect 1.

## Polish (does not decide the verdict)

- P1. Lesson 11 why (`l11.lesson.js` 11) and lesson 12 (`l12.lesson.js` 27): "Pain ... stop singing and rest" beside "pain when you
  speak or swallow: see a doctor right away". Say "Stop singing. Pain when you speak or swallow means a doctor now."
- P2. `care-air` (`items-care.js` 40-42): accept "steam" / "steamy"; the note (V20) names steam.
- P3. Lesson 12's map of the seven checks (`l12.lesson.js` 19-26) leaves out where airy tone (lesson 9), cracking and squeezing
  (lesson 8) sit; add them (air; effort) so the review's mixed cases from lessons 8-9 fit the map.
- P4. Lesson 10's "your voice from outside" has no source in the note; bone conduction makes your own voice sound fuller to you than a
  recording (e.g. Reinfeldt et al. 2010, *JASA* 128(2), "Hearing one's own voice during phonation"); add it to the note.
- P5. "Plan your breaths at the ends of lines" (lesson 9) is in the note's Use line only, not in a quoted passage of V13; cite it as the
  teaching tradition (McKinney's breathing chapter, V8) or call it a sensible plan.
- P6. Lesson 7 why: "a top note sung harder tends to go sharp" is fair to V11 ("a raised subglottal pressure raises the pitch"), but
  Sundberg also says pressure misses are largest in loud, high singing in either direction; the lesson's test (off only when loud, on
  when light) is what decides, so keep the claim as "tends to".
- P7. Lesson 8's cracking is taught as a fault; a flip between registers is normal in an untrained voice and the fix (slide through
  it lightly, V12 "helps to avoid register instabilities") is right. One clause, "a crack is common and not damage", would stop a
  beginner worrying.

Checked and found right: lesson 7-8 effort versus the note (V11, V12, V21) and every top case's marked answer; lesson 9's no-one-way
breathing (V13, Collyer) and every breath case; the "most hoarseness ... resting the voice" and "7 to 10 days after a cold" lines
(p. 427-428); whispering (NIDCD, MedlinePlus); humidify and water as habit (p. 429, V20); lesson 12's other cases and both answers each.
