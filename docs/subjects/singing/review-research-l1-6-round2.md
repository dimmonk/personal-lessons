# Singing, lessons 1 to 6: research review, round 2 (2026-10-22)

Role "research" (brief: `review-brief.md`). Read: `public/subjects/singing/` (subject, l1-l6, the six items files), the learner views
`docs/learner-view/singing-l1..l6.md`, `docs/subjects/singing/plan.md`, `docs/research/singing.md`, the build-subject skill, and the engine
changes in `public/app/lessons/` (sing-task, sing-score, sing-strip, sing-run, view, player, audio-synth, tones). `fixes-l1-6.md` was read to
check its claims, but this review judges the lessons fresh.

**Method for the sounds.** Each example sound that a lesson names was turned into readings every 50 ms (the path is straight in cents, as
`scheduleTone` plays it) and scored with the app's own `singAnswer`, `singOk`, `singMarksHtml` and `singMissHtml` (script loaded through
`tests/load-app.mjs`). Results:

| Example (lesson) | What the lesson calls it | What the app says |
|---|---|---|
| Sliding up into it, D4 from -300 (l3) | sliding up into it | start -225, note 0: "Sliding up into it". **Agrees** |
| Hunting for the note (l3) | hunting | start -174, note +16: **"Sliding up into it"** |
| A shade under, then moving up (l3), first 1.9 s | a shade under | -75: "A shade under". Agrees |
| A jump that falls short, A4 at -75 (l5) | fell short | note 2 -75: "A shade under". Agrees |
| Holding steady (l4) | steady | held 3.0 s, on. Agrees |
| Sinking under (l4), as a 2 s hold | sinks, would not count | held 1.5 s (fails, agrees), but note -52 so the words are **"Your voice sat a shade under the note: sing a little higher"**, not "sank" |

Sources checked on the web: Peretz & Vuvan 2017 (PMC5437896): "only 1.5%", 16,625 analysed, 20.3% of controls and 66.7% of amusics said they
lack a sense of music. Matches l1 and V1. Larrouy-Maestri & Pfordresher (2018), "Pitch perception in music: do scoops matter?" (*JEP:HPP*
44(10)), found through the abstract only: scoops at the start and end of sung tones change how listeners judge intonation, partly through
averaging pitch across the tone. The research note does not cite it (see P1).

## Verdict

| Lesson | Verdict | Defects that decide it |
|---|---|---|
| l1 | **PASS** | none (P7 is polish) |
| l2 | **FAIL** | D3 |
| l3 | **FAIL** | D1, D3, D7 |
| l4 | **FAIL** | D2, D4, D7 |
| l5 | **FAIL** | D5, D7 |
| l6 | **FAIL** | D6, D7 |

## Defects that decide the verdict

**Sounds and words that disagree with the scoring**

**D1. l3: the app scores the hunting example as a slide, and cannot name hunting at all.** The example `l3.lesson.js:40` (path -250, +130,
-100, +70 ...) scores as start -174 and note +16, so `singSlid` = 1 and the mark reads "Sliding up into it". The engine has no hunting
result (`sing-task.js` `singSlid` and `singWordKey` only). The lesson teaches five outcomes as different faults with different fixes (`l3:42-44`:
slide means aim at the note; hunting means hear it first, then slow down). In the sung part right after (`l3:49-52`, "The app listens to how each
note starts"), a real hunt is named a slide and given the slide's fix. *Fix:* the end-game fix is to detect a hunt in the engine. Count the
direction changes of more than a shade-sized step in the opening second, say, two or more reversals. Name it "Hunting for the note" with the
hear-it-first line. Test that the l3 example scores as a hunt and the scoop example still scores as a slide. Until then the lesson cannot say
that the app names what lesson 3 teaches.

**D2. l4: the app describes the lesson's own "Sinking under" example as off from the start.** `l4:25` sinks from 0.7 s to -100 by 2.2 s.
As a 2-second hold the median of the middle readings is -52 (off at 50). `singHoldLines` (`sing-strip.js:111-116`) prefers the median, so the
result says "Your voice sat a shade under the note: sing a little higher", and never "Then it sank under the note". That is the wording for
`off`, the answer the lesson contrasts with `sank`. `l4:33` says "If the result says it sank or rose, that is which way to nudge it next time."
Any sink that starts before the middle of a hold gets the wrong name. *Fix:* decide "off from the start" by how the hold *started*: store
`start` for holds too, as a match does (`onset`). Say "sank" or "rose" when the start was on and the end was off, whatever the median.
Add a pure test with the l4 example.

**D3. l2, l3: the guess feedback contradicts the slide mark.** `singMeasuredSide` (`sing-task.js:211-215`) reads only the note's median, not
the slide. Take a scoop that settles on the note. If the learner says "On", they get "The app measured it the same way" next to a red "Sliding
up into it". If they say "Under", they get "The app measured: on the note. Your note was higher than it sounded to you". That is wrong too,
because it did start under. Both appear in every `guess: true` group of l2 and l3. *Fix:* when `singSlid` is set, the measured side is not
"on". Either compare the guess with the start's side or name the slide in the "measured" line. Add the two cases to `tests/sing-pure.mjs`.

**D4. l4: a hold asks for the guess and never answers it.** For `hold`, `singMarksHtml` returns at `sing-strip.js:80` before the "You said"
mark. So in l4's two guess groups and the at-end stretch group ("judge each one yourself first", `l4:39`), the learner says under, on or over
and is never told whether they were right. This is the self-judging loop that V10 and V14 put in the plan, and it is silently missing here.
The question is also unclear for a hold: under/on/over of which part? *Fix:* for a hold, ask about the end ("Where did your note end: under,
on or over?"), compare it with `singDrift` (or the start when off from the start), and show the "You said" mark as for other tasks.

**A list that leaves out what the app and the research can show**

**D5. l5: "two notes can go three ways" is false.** `l5:26-30` and the list `jump` (`subject.js:89-93`) leave out a far note that goes past
the target (over after a jump up) and a first note off with the far note on. The app's interval result reports both after any sung try, so the
learner meets results that have no name in the lesson. The research (V3) says compression is *typical* in poor-pitch singers, not that it is
the only error. *Fix:* add "Went past on the jump" and "Started off, landed on" to the list (or one "the jump was the wrong size" with both
directions), with look-alike cases. Reword the screen to "the common ways" and keep "check each note against its own".

**D6. l6: the tune list leaves out the whole tune shifted or drifting.** The `tune` list (`subject.js:95-100`, `l6:23-28`) has four outcomes
and none of them is the whole tune off the same way, or drifting into a new key. That error is V3's second named error, l5 teaches it as
"shifted", and V6 makes it the reason melodies are scored note by note. l6's own header cites it ("so a drift counts"). A learner whose five
notes are all a shade under has no answer to pick. *Fix:* add "The whole tune sat off the same way (or drifted)", whose fix is to check the
first note against a steady one. Add two cases in pairs with "one jump fell short".

**Answers guessable by pattern**

**D7. l3 to l6 (and l1): every case that opens with a reaction has the "fine" answer.** Every story that starts with a feeling or another
person's remark has the "nothing wrong" answer. That is 13 of the 13 such cases: landing-worked-chorus, -sure-it-was-flat, -friend-says-sharp,
-thinks-flat; holding-felt-shaky, -sounded-wobbly; jump-both-fine, -checked-fine; tune-all-on, -steady-all; fit-birthday-middle, -lullaby-worry,
-car-daughter. No case has a reaction that the check confirms. So "a worry means it is fine" answers the cases without the check. It also
teaches something the research does not say: V2 and V3 give 10-15% of untrained singers as clearly off, and the point of V1 is "measure,
don't trust the feeling", not "the feeling is always wrong". l3's "Watch which wins: the reaction, or the check" (`l3:45`) always ends the
same way. Also in l5 every `shifted` case, and only those, says "by about the same amount" (`items-jump.js:28,37,48,57`, and :68 "by the same
amount"). *Fix:* in each lesson, make at least one practice case and one check case a reaction that the check confirms (for example, a friend
says sharp and the check finds a shade over). Word "both off" cases in more than one way, and give one `short` case two numbers that are not
equal, so the reader has to compare them.

## Polish (does not decide the verdict)

- **P1. V23's threshold is unsourced, and every match in the l2 and l3 checks depends on it.** The note and `sing-task.js:174-177` claim that
  "a natural start moves far less than a shade in its first quarter of a second", with no source. Larrouy-Maestri & Pfordresher (2018) treat
  scoops as common in sung tones and partly averaged by listeners. *Fix:* read and cite it (and any onset measurement in untrained singers).
  Before shipping, try the 100-cent rule on real recorded attempts, so that clean but ordinary starts are not failed as slides.
- **P2. "Sliding down onto it"** (`view.js:160`) is a result word that l3 never teaches; the `landing` list has only the slide up. Add one
  line to l3.
- **P3. l2 can show "Sliding up into it"** before l3 teaches it. The miss line explains it, but add half a sentence to l2's "How a try goes".
- **P4. l4 check rule label** "At least 4 on the note (the held notes)" for a hold that is scored as steady for 2 seconds: say "held steady
  for 2 seconds".
- **P5. l4 example text** "sinks after about a second and a half" (`l4:22`): the sound starts sinking at 0.7 s and leaves the band at about
  1.45 s. Say "starts to slip before a second is out and is off by a second and a half".
- **P6. l6 teaches "The long last note sank"**, but a melody's result reports only how long the last note held, never the direction. Use the
  hold's drift words for the last note of a melody.
- **P7. "Sharp means a shade over the note"** (`l1:23`), and l3 likewise for flat: sharp and flat mean over or under by any amount. Say
  "over the note, too high".

## Claimed fixes checked (from `fixes-l1-6.md`)

These hold: the range test at an easy loudness on "oo" (V21, with V11 read correctly); the "shade" examples at 75 off; the scoop example
scored as a slide; the half-step defined with the Jaws theme (E to F, played as E3/F3); l5's jump that falls short scored as a shade under;
the order of checks called a sensible order, not a researched one; the hunting cause hedged with "often"; the "about half" wording in l4 now
about consistency across tries (V2, "54-60% of non-musicians are imprecise singers"); the tune test's pass rule matches `singOk`
(`ceil(0.8 x 5)` = 4 notes on plus a 2-second hold). The "held results" claim holds for match, interval and melody, but not for the guess on
holds (D4).

No structure looks carried over from another subject: the case shape (`sgCase`) and the outcome lists come from this field's note check
(V6, V15) and the plan. The repeated worked case + six pairs + five check + three held back is the subject's own plan, not a template from
another subject.

## Count by kind

- Wrong or unsupported fact: 2 (D5, D6; the "three ways" and "four ways" lists are incomplete against V3 and V6 and against what the app reports)
- Example sound or feedback that disagrees with the scoring: 4 (D1, D2, D3, D4)
- Guessable answers: 1, across 5 lessons (D7)
- Departure from the way of thinking: inside D4 (self-judging loop missing) and D7 (feeling taught as always wrong)
- Polish: 7 (P1 to P7)
