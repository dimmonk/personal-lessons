# Singing, lessons 1 to 6: research review (build-subject step 6, role "research", 2026-10-22)

Read: `public/subjects/singing/` (subject.js, l1-l6, items-fit.js, items-landing.js), `docs/learner-view/singing-l1..l6.md`,
`docs/subjects/singing/plan.md`, `docs/research/singing.md`, the build-subject skill, and the engine changes
(`public/app/lessons/tones.js`, `sing-task.js` guess and `noteMs`, `audio-synth.js` and `audio-notes.js` voice tone,
`docs/singing-audio.md`). Checked against the source on the web: Peretz & Vuvan 2017 (PMC5437896: 1.5%, 4.2%, 66.7% / 20.3%,
16,625 analysed: all match the note), Dalla Bella et al. 2011 (PMC3140645: 85-90%, 10-15%, "about 55%" with precision, tempo:
match, but see 4.1), Hutchins & Peretz 2012 via the BRAMS summary (match), and the timbre literature behind the voice tone (E1).

**Verdict: FAIL.** l1 FAIL, l2 PASS (one wording note), l3 FAIL, l4 FAIL, l5 FAIL, l6 PASS (one wording note), engine
voice tone: the build is a fair judgement call but its claims overreach (fix the words, not the code).

## Lesson 1: Before you blame your voice (FAIL)

1.1 **The "softly" test for range is not supported and is partly wrong.** `l1.lesson.js:31` ("A note in your range comes out
easily when you sing it softly. A note above it will not come even softly"), `items-fit.js:3, 9-11` and every case built on it
(`fit-worked-chorus`, `fit-karaoke-squeak`, `fit-musical-end`, `fit-radio-bridge`, `fit-wedding-lift`, `fit-duet-strain`). No
finding in the note (V3, V4) defines range by soft production. Voice science points the other way near the top: phonation
threshold pressure rises steeply with pitch (Titze's fit, Pth = 0.14 + 0.60 (F0/F0mean)^2 kPa; Sundberg, Titze & Scherer: male
singers doubled subglottal pressure per octave up; V11 itself, "higher pitches need higher pressures"), so the softest possible
note gets louder as you climb, and a note near the top of a healthy range may not start at all when sung very softly. A man can
also reach notes softly in falsetto that his song's line, sung in the speaking voice, cannot use. **Fix:** make the test "comes
out without forcing or straining, at an easy, moderate loudness (on "oo" first)" rather than "even softly"; reword `MEANS.high`
and the cases ("will not come without straining, even sung lightly"); add the source to the note (Titze 1992 PTP; or a
voice-range-profile source) or say it is the course's judgement.

1.2 **The order of the seven checks is attributed to voice teachers, which the note says no study shows.** `l1.lesson.js:17`
("A voice teacher would not start there. They would check these, in this order"). The note's own "Gaps" says no expert-novice
study of teachers' diagnosis exists and the order is "partly a judgement call"; the tradition it cites (V8, McKinney; van Vuuren)
starts from posture and breathing, not from range and pitch. **Fix:** "Check these in this order: the ones that change the
result most come first" (V9's "largest error first"), and drop the claim about what teachers would do, or say "a teacher fixes
one thing at a time, the biggest first" (which V9 does support).

1.3 **Check 4 overstates "effort, not your ear".** `l1.lesson.js:22`; also `subject.js:49` (`effort`: "Is it off only where the
line climbs or gets loud?"). V11 supports pressure raising pitch (sharp). But V3 (Pfordresher & Brown) says errors grow with the
target's distance from the comfortable pitch, the usual high-note miss of a struggling singer being low (falling short), which is
the hearing-to-voice link, not effort. As worded, "off" in either direction where the line climbs is filed under effort, and the
lesson's own case `fit-anthem-flat` (a high note "a shade low") would land in check 4 with the fix "sing it lighter", which does
not follow from V11. **Fix:** word check 4 as "Does it go sharp or strained only where the line climbs or gets loud?" and keep
"off" without that sign in check 3; fix the list text once in `subject.js` (it feeds lessons 7, 8 and 12).

1.4 **Departure from the plan (minor).** Plan lesson 1: "Check: the range found (a fifth or more) plus 4 of 5 new cases". The
lesson's check (`l1.lesson.js:40`) is the five cases only; the range is in the flow. Acceptable if intended (the engine never
saves a range under a fifth, `SING_RANGE_MIN_SPAN = 7`), but the plan or the lesson should say so.

## Lesson 2: Match a note (PASS, one note)

2.1 **Wording overclaims the evidence (minor).** `l2.lesson.js:14`: "copying notes you have just heard is how that link is
trained". V3 supports copying as the practice; the note's "Gaps" says no controlled programme with pitch accuracy as outcome
exists (Berglin et al. is one session). **Fix:** "is the way to practise that link". (The code comment at `l2.lesson.js:5-6`
also calls V6's 56 cents an average "miss"; it is an interval deviation, not a single-note error. Comment only.)

## Lesson 3: Check before you fix (FAIL)

3.1 **The example "a shade under / over" is "on the note" by the lesson's own scoring.** `l3.lesson.js:25-26` play the second
tone at -30 and +30 cents and label it "A shade under/over"; every sung set in the lesson uses `cents: 50`, and `singWordKey`
(`sing-task.js:203-208`) calls anything within 50 "On the note" and 51-100 "A shade under/over" (`SING_SHADE_CENTS = 100`). A
learner who sings exactly the example's error is told "On the note", and the guess screen calls it "on". **Fix:** one meaning of
"a shade" across sounds and words: play the examples at about 60-80 cents off.

3.2 **"A slow wobble" is the wrong description of the sound played.** `l3.lesson.js:22`. Two sines 30 cents apart at D4
(293.7 Hz) beat at about 5 Hz, a fast flutter; at 70 cents (fix 3.1) about 12 Hz, a roughness. Beats only become a slow wobble
below about 10 cents. **Fix:** "a fast flutter or roughness, which slows and fades as yours moves onto the note".

3.3 **Hunting is given one cause as fact.** `l3.lesson.js:40` and `items-landing.js:13, 44` ("because the note was not in your
head first"). V5 is limited and correlational (imagery goes with accuracy); V3 names vocal-motor control as another cause of
unstable pitch. **Fix:** "often means the note was not in your head first; hear it first, and if it still wanders, slow down".

3.4 **The lesson teaches scooping as a fault, then practises and checks a slide that cannot detect a scoop.** `l3.lesson.js:44-47,
52`: "Slide from the first to the second"; the `slide` task scores only the last 400 ms (`SING_LAST_MS`, `slidePlan`,
`sing-task.js:134-139`). The title promises "scooping, guessing", but no sung try measures a scoop or a hunt; the plan's "`slide`
(land without a scoop)" is not what the task measures. A beginner just told "sliding up into it" is the fault is then told to
slide. **Fix:** either say plainly why a deliberate slide is practised (it trains landing on the target; the scoop fault is
arriving late on a note that should start on pitch), or check landing with `match`, which judges the whole note; long term, an
onset measure for `match` (the first 200-300 ms) would let the app check the scoop it teaches.

3.5 **The way of deciding taught here (the five outcomes) is never checked on new cases.** The lesson's check is five sung slides
(`l3.lesson.js:52`); the six `landing` cases are practice only, and no held-back cases exist (`items-landing.js` has none, unlike
`items-fit.js`). The skill (section 5) asks for "a check on new cases" of what was taught; the review (V18) also has nothing to
draw on. **Fix:** add 3-5 new `landing` cases to the check (pass 4 of 5) beside the sung part, and 3 held back for review.

3.6 **Arguable answer (minor).** `landing-long-note-low`: "sounds a little lower ... all the way through, until he moves up to
it" vs `landing-slides-in`. The only difference the learner can use is "all the way through" vs "slides up ... a moment late";
defensible, but the pair is decided by one phrase. Consider stating the time each took to arrive.

## Lesson 4: Hold it steady (FAIL)

4.1 **The finding is misreported.** `l4.lesson.js:9` "when researchers counted how steady people were, try after try, about
half drifted", and the header comment `l4.lesson.js:1-2`. Dalla Bella et al. (2011) define precision as "the consistency in
repeating the target pitch" across repeated attempts, not drift within a held note; the 55% is people whose repeats vary, and
nothing there measures a held note going off. The lesson then trains holding a note as the answer to that finding. **Fix:** say
"about half were not consistent: the same note came out a little different each time", and justify holding on its own grounds
(a long note in real songs; the melody's last note in the plan's real-world test), or train consistency directly by scoring
several repeats of the same note.

## Lesson 5: Steps and leaps (FAIL)

5.1 **Generalised beyond the source.** `l5.lesson.js:9` "Untrained singers tend to make big jumps too small"; the learner-view
feedback "The second note is where beginners most often fall short". V3: compression was found in the 10-15% of poor-pitch
singers (Pfordresher & Brown 2007); Dalla Bella et al. (2011, checked) make no compression claim for occasional singers.
**Fix:** "Singers who struggle with pitch tend to make big jumps too small".

5.2 **Taught "the gaps" but scored the notes.** `l5.lesson.js:10` "People listening ... hear mostly those gaps. Get the gaps
right and the tune sounds right" (V6), while `singOk` for `interval` (`sing-task.js:178`) scores both notes against absolute
pitch. A learner who sings a perfect gap 60 cents low fails both notes; V3 says a whole shifted tune is the typical poor-pitch
pattern, which the lesson's words then misdiagnose. **Fix:** either score the interval (second minus first) as the lesson's
words say, or change the words to "land on both notes; the usual miss is falling short on the far one" (absolute scoring is the
right test when singing along with a record, which is the learner's real use).

## Lesson 6: Short tunes (PASS, one note)

6.1 **Screen text does not match the sets (minor).** `l6.lesson.js:18` "The first tunes are three notes, played slowly. Then
four, then five, at their speed", but the first four-note set is slow (`noteMs: 1200`, line 22). **Fix:** "Then four, slowly and
then at speed, then five". The check matches the plan's test part 1 (4 of 5, last held 2 s); consistency over days is left to
lesson 12's retest, as planned.

## Across lessons 2 to 6

X.1 **The result never fades (departure from V10, V14).** The note's use of V10: "the display and the result fade"; V14:
reduced-frequency feedback builds the learner's own judgement. The line goes, and the guess asks the learner first (good), but
every try in every set and every check still shows its result at once (`feedback: 'after-each'` everywhere; the guess screen
shows the result right after). **Fix:** in the last set without the line in lessons 4-6, show the results in a summary after
every 2-3 tries (bandwidth or summary feedback, V14, V15), keeping the guess on each try.

X.2 **Structures carried over:** none found that are not drawn from this field's note; the worked case, pairs, `slips` and "Away
from the phone" are engine forms used for the reasons the note and plan give. The fixed seven-check order is from the old course
plus V8/V9; see 1.2 for how it is presented.

## Engine: the voice-like target (judgement call, checked against voice science)

E1. **The build is defensible; the claims around it are not.** `audio-notes.js` (`AUDIO_VOICE_HARMONICS = [1, 0.4, 0.15,
0.06]`, -8, -16, -24 dB on harmonics 2-4), comments and `docs/singing-audio.md` ("the target sounds like one", "shaped like a
soft hummed oo").
- What the evidence says: the human-voice advantage is for a real voice, best of all the singer's own. Hutchins & Peretz (BRAMS
  summary) found the timbre group matched their own recorded voice but not the synthesized tone; Lévêque, Giovanni & Schön
  (2012), *J Voice* 26(3), 293-298, found poor singers matched a human singing model better than a synthetic singing model;
  Pfordresher & Mantell (2014) found a self-advantage, larger in poor-pitch singers. None tested a few static harmonics.
- What was built: a fixed periodic wave with no formants, vibrato, onset or jitter. A hum is dominated by its fundamental, so
  a steep roll-off fits a hum; it does not fit "oo", whose first formant (about 300-400 Hz) would make harmonic 2 or 3 the
  strongest on a low male note. Fixed ratios at every pitch are not how a vocal tract shapes a voice (formants stay put while
  the harmonics move). Likely benefit over a sine: a richer, easier-to-hear tone in the singer's own octave (the targets come
  from their range, a real gain); unlikely: the "human model" advantage the note cites.
- **Fix:** keep the tone; reword the comment and `docs/singing-audio.md` to "a soft hum-like tone, richer than a sine; not a
  voice", call the "oo" shaping a judgement call, and add Lévêque et al. 2012 and Pfordresher & Mantell 2014 to V3 as the better
  sources, with the note that a synthetic target probably keeps most of the gap. The learner view's "a soft hummed tone" is fine.

E2. **`guess`, `noteMs`, `tones`:** consistent with V10, V14, V2/V17 and the plan. `noteMs` 800-1600 against the default 800 ms
is a real slowing. The `tones` block sits on teaching screens only (good, V70). The one defect in their use is 3.1-3.2 above.

## Count of defects by kind

- Wrong or unsupported facts: 6 (1.1, 3.2, 3.3, 4.1, 5.1, E1)
- Departures from the note's way of thinking or the plan: 6 (1.2, 1.3, 1.4, 3.4, 3.5, X.1)
- Internal contradictions between taught words and scoring: 2 (3.1, 5.2)
- Arguable answers: 1 (3.6)
- Wording or overclaim, minor: 2 (2.1, 6.1)
- Carried-over structures: 0
