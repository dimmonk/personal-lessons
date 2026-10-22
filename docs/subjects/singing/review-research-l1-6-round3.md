# Singing, lessons 1 to 6: research review, round 3 (2026-10-22)

Role "research" (brief: `review-brief.md`). Read: `public/subjects/singing/` (l1-l6, subject, items), the regenerated learner views,
`plan.md`, `docs/research/singing.md` (V1-V24), the build-subject skill, and the engine in the working tree (`sing-task.js`, `sing-score.js`,
`sing-strip.js`, `view.js` SAY). I read `fixes-l1-6-round2.md` and checked each of its claims.

**Method for the sounds.** I turned each example sound into readings every 50 ms, straight in cents as `scheduleTone` plays it, and
scored them with the app's own `singAnswer`, `singOk`, `singMarksHtml`, `singMissHtml` and the guess marks. I ran the scoring for each
guess (under, on, over) through `tests/load-app.mjs`. I also scored a few made-up tries for cases the lessons teach. The script is in the
reviewer's scratchpad (`r3/score.mjs`).

| Example (lesson) | Called | App says | |
|---|---|---|---|
| Sliding up into it, D4 from -300 (l3) | slide | start -225, note 0: "Sliding up into it"; guess Under = same | agrees |
| Landing on it (l3) | on | On the note | agrees |
| Hunting (l3), in the 1.9 s match window / whole 3.5 s | hunt | turns 2 / 3: "Hunting for the note", guess "neither under nor over" | agrees |
| A shade under / over, then moving (l3), 1.9 s window | shade | -75 / +75: "A shade under / over" | agrees |
| Holding steady (l4), 2 s hold | steady | Steady for 2 seconds | agrees |
| Sinking under (l4), 2 s and 4 s hold | sank | held 1.5 s, "Then it sank under the note"; guess Under = same | agrees |
| Step, jump, jump falling short at -75 (l5) | | on/on, on/on, on/"A shade under" | agrees |
| Jaws E3-F3 (l2) | half-step | 1 half-step | agrees |

Web check: Dalla Bella et al. 2011 (PMC3140645). These are quoted in the paper: "slowing down tempo typically enhances accuracy in
producing pitch intervals", the estimate "rises to about 55%" when precision is counted, and Table 1 "54–60% of non-musicians are
imprecise singers". So l4's "about half" and l6's "more in tune when they slow down" hold. (The l6 claim generalises from 15 people,
hedged by "most".) l1's numbers match V1 (checked on the web in round 2).

## Claimed fixes checked
D1 hunt detected (holds in both windows). D2 sinking example says "sank". D3 the slide's guess line agrees with the mark. D4 holds
answer the guess (but see R2). D5 and D6 lists complete in the lessons. D7 reactions confirmed in at least one practice and one check case
per lesson (l1 fit-duet-strain and fit-radio-bridge, l3 Item 2 and Check 19, l4 Item 2 and Check 27, l5 Item 8 and Check 29, l6 Item 5
and Check 30). P4, P5 and P7 done. **P6 is done but introduced R1.**

## Verdict

| Lesson | Verdict | Deciding defects |
|---|---|---|
| l1 | PASS | none |
| l2 | PASS | none |
| l3 | PASS | none |
| l4 | **FAIL** | R2 |
| l5 | PASS | none |
| l6 | **FAIL** | R1, R3 |

## Defects that decide the verdict (feedback that disagrees with what was sung)

**R1. l6: a tune that sat a shade under from its first note is told its last note "sank".** `sing-strip.js:114-115`: a melody's
long last note that did not hold gets `SAY.singDriftLine(singDrift(...))` from its `end` alone. A melody plan has no `onset`
(`sing-task.js:158`), so the app cannot tell "off from the start" from "sank". Scored: a three-note tune all at -70 reads "Note 1/2/3 A shade
under ... You stayed on the note for 0 seconds ... **Then it sank under the note: keep listening, and nudge it back up**". Lesson 6
teaches this exact case as "The whole tune sat off the same way", with the opposite fix (check the first note against a steady one;
`l6.lesson.js:29`). Lesson 4's rule ("a note off from the start is off from the start") is broken too. *Fix:* give a melody's last window
`onset` as for a hold, and use one function for "where a held note went" (start off → the start line; start on and end off → sank or
rose) for holds and a melody's last note alike. Add a pure test: a tune all at -70 must not say "sank".

**R2. l4: a hold's "start" uses the on-note band (50), not the slide test, so an ordinary onset is called "off from the start".**
`sing-task.js:226` and `sing-strip.js:124` treat any start beyond `cents` (50) as off from the start. A match uses the slide test
(more than 100 off *and* more than 100 from where it sat, `sing-task.js:180-184`). Scored with one onset, -150 rising to 0 over 250 ms,
then on:
- as a **match**, "On the note" (start -90, not a slide);
- as a **2 s hold**, it passes ("Steady for 2 seconds", held 2.8 s). But in a guess group, a learner who answers **On** to "where did your
  note end?" (`SAY.singGuessAsk`, which asks about the end) is marked as disagreeing: "The app measured: a shade under. Your note started
  lower than it sounded to you."

A real scoop into a hold that then breaks (-300 to 0 in 300 ms, held, sinks at the end) gets the miss line "From the first moment your
voice sat **well under the note, about two half-steps: sing that much higher**". That instruction would put the voice two half-steps sharp,
and it never says that the note sank. So the self-judging loop (V10, V14) tells a correct learner they were wrong. The result also names
"off from the start" for what lesson 3 calls a slide. *Fix:* judge a hold's start with the same slide test as a match. A start more than
a shade off that then sits on is a slide ("Sliding up into it"), not "off from the start". "Off from the start" is only when the start and the
body are off on the same side. Measure the guess for a hold at its end, as the question asks; put start problems in the miss lines. Add pure
tests: the 250 ms onset above with guess On agrees; a scoop plus sink says slide and sank, not "sing two half-steps higher".

**R3. l6: a last note that holds 2 s and then sinks is reported "on", and a learner who heard the sink is told they were wrong.**
`sing-task.js:230`: for a run, `singMeasured` returns the median of the last note, ignoring its stored `end`. Scored: three notes on,
the last held 2.2 s and then falling to -120 → "Steady for 2 seconds"; guess **Under** → "The app measured: on the note. Your note was
**higher** than it sounded to you." The note ended more than a half-step low, and lesson 6 teaches "The long last note sank" as an
outcome. *Fix:* measure a melody's guess on its last note the way a hold is measured (R2's one function), and if the end is off, show
"Sank under" or "Rose over" on the last note's mark even when it held 2 s.

## Polish
- **P1.** `l3.lesson.js:15` "A note that sounds wrong to you is often fine": no finding in the note measures how often a felt-wrong note is
  on. V1 is about self-rated musicality, and V7 is about listeners forgiving voices. Say "can be fine", or cite a source.
- **P2.** `view.js` `singDriftLine(0)`, "It wandered off the note and back", is a fifth hold outcome the `holding` list (l4) does not name. The
  plan says "A list names every outcome the app's result can show". Add it to l4's list in one line, or have the hold say which way it
  wandered.
- **P3.** In the closer-target groups (cents 25), notes 26-50 off are called "a shade under/over". Lesson 2 defines a shade as more than half
  a half-step. Say so on the closer-target screens, or have `singWordKey` call 26-50 "a little under/over".
- **P4.** The learner view prints "A miss comes back three tries later" for at-end groups, which never requeue (`player.js:130`). This is a
  renderer fix.
- **P5.** l4: the rule "if it does more than one, name the first" is never practised. l5 Item 6 says "small jump" where l5 defines "step". l6
  Item 9 (drift with the first note on) gets the fix "check ... starting with the first".
- **P6.** V23's thresholds are still untried on real recordings (the note says so). R2 shows why it matters: the same voice is judged by two
  thresholds in two tasks.

No structure looks carried over from another subject. Questions with a wrong or arguable marked answer: none found. Every case's
answer follows from the lesson's own definitions, including the jump-down reversals in l5.

## Count by kind
- Feedback or scoring that disagrees with what was sung: 3 (R1, R2, R3)
- Wrong or unsupported fact: 0 deciding (P1 is polish)
- Departure from the way of thinking: inside R2 and R3 (the self-judging loop V10 contradicts a correct judgement)
- Wrong or arguable answers: 0
- Polish: 6
