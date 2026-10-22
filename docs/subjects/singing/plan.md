# Singing: the plan (build-subject step 4, 2026-10-22)

Evidence: `docs/research/singing.md` (V1-V20); general findings `docs/learning-science.md` (P ids),
`docs/research/review-after-lessons.md` (R ids), `docs/research/designing-a-subject.md` (D ids). Owner's asks: the design
record's `asked` list (old Units One to Six at the tag `old-lessons`) and the owner's message of 2026-10-09 asking for sound.

## What you'll be able to do, and when

**After this you can** sing a tune you have just heard, or the line of a song you know, in tune and at a height that suits
your voice, with high notes that come out light instead of shouted, **when** you sing along in the car, at karaoke or with
friends; and when a line goes wrong you can say which of a few things went wrong and what to try, or that nothing did.

**The real-world test.** (1) Without the pitch line, the app plays a new five-note tune inside your range; you sing it back:
at least 4 of 5 notes within 50 hundredths of a half-step (a quarter-tone) and the last note held 2 seconds; twice, on two
different days (V2 consistency, V18 retention). (2) Six short new cases of a line going wrong: name the first thing to check
and the fix, 5 of 6 right (V8, V9). **The pass marks are ours** (research note, "Where the evidence is thin"): the field's
line for a poor-pitch singer is about a half-step and untrained singers' interval error averages about 56 hundredths (V3,
V6); the earlier draft's 25 is stricter than the evidence asks of a hobby singer, and the app cannot judge it reliably for a
voice with a natural vibrato (up to about +-50, averaged to within a few hundredths of its middle; tests/sing-sim.mjs), so the last practice
set of lessons 4 to 6 stretches to 35, about a third of a half-step, never in a check (judgement call, changed from 25 on 2026-10-22; the
app's words follow each task's `cents`).

## The way of thinking (the teacher's diagnosis, for a singer on their own)

Check in this order, fix one thing at a time, the largest first (V9). The order puts first what changes the result most; it is a
sensible order, not a researched one (no study of how teachers diagnose was found; the tradition in V8 starts elsewhere), and the
lessons say so and never credit it to teachers:
1. **Is the song in my range?** If not, move it lower or higher; that is not a fault (V3, V4).
2. **Did I hear the note before I sang it?** (V5)
3. **Is the note on, under or over?** Check it against a reference; the feeling "I'm tone deaf" is not evidence (V1, V2, V6).
4. **Does it go sharp or strained only where the line climbs or gets loud?** Then it is effort, not the ear: lighter and softer
   (V11, V12). A note that falls short (under) on a climb is check 3, the hearing-to-voice link (V3).
5. **Does the air last the phrase,** without a gasp or squeezing out the last of it? Plan where to breathe (V13).
6. **Only then the sound of the words** (nasal, muffled, mumbled), and the recording surprise (V8).
7. **Nothing wrong:** it is just not the record's voice.
And always: pain or hoarseness means stop and rest (V19). Learning loop: say what you heard before you look, let the help fade,
judge by the measured result (V10, V14, V15; P23).

## What it teaches, covering every ask

| Owner's ask (their words) | Where | What the evidence did to it |
|---|---|---|
| "Before you blame your voice" (Your range) | L1, L12 | Kept; opens with V1 (true tone deafness 1.5%) and puts range first (V3) |
| "Five things that can happen at the top of a line, and the one that needs no fixing" (A lighter top) | L7, L8 | Kept all five; the reason it comes before the note is now V11 (effort raises pitch) |
| "One breath that works, four ways the air goes wrong, and a fix for each" | L9 | Kept; **corrected**: no single right breathing pattern (V13), so "belly out, shoulders still" is one way, not the definition |
| "Check the note before you fix it: four ways to be off, and one way to be fine" (Match a note) | L2, L3, L4 | Kept; practised by singing with the microphone (V3, V14) |
| "Your voice sounds odd but the notes are right (airy, nasal, muffled): two quick checks…" | L10 | Kept; the checks are done away from the phone (no clips; research note, "Where the evidence is thin") |
| "Looking after your voice: water, rest for a hoarse voice" (+ warm-up, practice) | L11, every warm-up | Kept; **corrected**: a doctor if not getting better in 7 to 10 days whatever started it, an ear, nose and throat doctor by four weeks at the latest, at once with warning signs (V19, re-read 2026-10-22); water is a habit, not a fix (V20) |
| Sound, notes, audio examples (2026-10-09) | every sung lesson; L3 | Kept: the microphone is the practice; example sounds need engine gap 2 |
| The draft's parts: hold it steady, move between notes, steps and leaps, short melodies | L4, L5, L6 | Kept (V2, V3) |

No ask is proposed for dropping.

## Practice in the app, and away from the phone

**In the app it is real singing:** every sung set is the `sing` ask: the app plays a target from your range, you sing, the
microphone measures the pitch (and loudness for `light`). This trains the hearing-to-voice link the research names (V3).
The live line (`support: { line: true }`) is used in the first set of a new task only; later sets and every check have no line
(V14; P17). A warm-up (`warmup`, a hum, or a straw held in the lips) opens each sung lesson (V12). Most of each lesson is
singing (V10).
**Away from the phone** (each lesson ends with one line of it, never scored): sing the day's skill in a real song you know;
record a line on your phone's voice memo and listen back (L10); hold your nose on "ah" (L10); mark breaths in the lyrics (L9);
water and rest habits (L11). The app cannot hear tone, words or songs with lyrics (`lesson-standard.md` 10.2).

## The lessons

Each sung lesson: why in a few lines, the first set with the line, a set without it, then the check without the line,
`feedback: 'after-each'`. Judging lessons: the rule (P9), a worked case (P10), contrast pairs (P12), mixed practice with
feedback (P19, P22), a check on new cases. Cases are short prose blocks of what a singer noticed; answers are `choose` asks
on a subject list `check` (the seven checks above, worded once, P5) and a list `fix`.

**Unit One: Your voice and the note**
1. **Before you blame your voice: your range.** Teaches: tone deafness is rare (V1); the seven checks as a map (P1, P30);
   range first (V3, V4), a top note tried on "oo" at an easy loudness, never "softly" (V21). Practice: `range`, then 6 `choose`
   cases "in range, too high or too low?". Check: 4 of 5 new cases; the range (a fifth or more) is found in the flow, since the app
   never saves a narrower one, so it is not repeated in the check. Why: V1, V3, V4, V21.
2. **Match a note** (the pilot, `l2`, kept). Teaches: a try in three steps, hear it, hold it in your head, then sing (V5); the
   half-step, the one measure every result uses, defined with the Jaws theme and played (V22); aim at the note from the first moment.
   Practice: `match` 8 with line, 8 without. Check: `match` n 5, 4 on the note (cents 50). Why: V2, V3, V14, V22.
3. **Check before you fix: on, under, over, scooping, guessing.** Teaches: the five outcomes of the note check (old Unit Four)
   with example sounds that the app's own scoring would call what they are named (a shade: 75 off), and contrast pairs (P12).
   Practice: 6 `choose` cases, then `match` with the line and without; the app judges how a note starts, so a scoop is named and is
   not on the note, and a hunt (turning back twice by more than a shade) is named too (V23). Check: 5 new cases (4 right) and `match` n 5
   (4 on the note). Why: V5, V6, V15, V23.
4. **Hold it steady.** Teaches: precision is the same note each time, about half of non-musicians are not consistent (V2), so
   checks take several tries; steady means on the note without a break for the seconds asked; a held note stays, sinks, rises or
   was off from the start (list `holding`); an even loudness, since pushing raises the note (V11). Practice: a worked case, 6
   `choose` cases, `hold` 2 s then 4 s (twice the check, for margin), line then none, the stretch group's results held to its end
   (V14). Check: 5 new cases (4 right) and `hold` 2 s, 4 of 5. Why: V2, V11, V14.

**Unit Two: Tunes**
5. **Steps and leaps.** Teaches: singers who struggle with pitch squeeze big jumps smaller and shift whole tunes (V3); each note
   is checked against its note, as singing along with a recording needs; a jump goes both on, fell short, went past, first note off
   and far note on, or both off the same way (list `jump`: the result can show all five). Practice: example sounds, a worked case, 6 `choose` cases, `interval` small then large (each try names step or
   jump), the stretch group's results held to its end. Check: 5 new cases (4 right) and `interval` 4 of 5. Why: V3, V6, V14.
6. **Short tunes.** Teaches: slow first, then at speed (V2, V17); a lost tune goes back to the slow speed; a tune goes on all the
   way, one jump short, the last note sank, lost partway, or the whole tune off the same way or drifting (list `tune`, each an earlier
   lesson's check: mixed, P22). Practice: a
   worked case, 6 `choose` cases, `melody` 3, then 4 (slow, then at speed), then 5 notes, each try saying when it is played slowly;
   the stretch group's results held to its end. Check: 5 new cases (4 right) and the test's part (1), 2 of 3 tunes. Why: V2, V6, V17,
   S2 in V14.

**Unit Three: Easy high notes**
7. **Lighter, not louder.** Teaches: pushing makes the note go sharp and strained (V11); "oo" or a straw first (V12). Practice:
   `light` (loud note and talking note set the scale), first on "oo". Check: `light` 4 of 5. Why: V11, V12, V16.
8. **What happens at the top.** Teaches: a light easy top (fine), pushing, cracking, squeezing, out of range; which fix each
   needs; the top beats the note when both show (V11). Practice: contrast pairs then 8 mixed `choose` cases; one `light` set.
   Check: 5 of 6 new cases. Why: V8, V9, V11.

**Unit Four: Air and sound**
9. **A breath that lasts the line.** Teaches: a breath that works (several ways), shallow gasp, airy tone, forcing, unplanned
   breaths (V13). Practice: `hold` up to 6 s on one quiet breath; 6 `choose` cases. Check: 5 of 6 new cases. Why: V13, V9.
10. **Odd sound, right notes.** Teaches: the recording surprise, nasal (nose-hold check), muffled, mumbled; checked last (V8).
    Practice: 6 `choose` cases; the two self-checks away from the phone. Check: 5 of 6 new cases. Why: V8, V10.

**Unit Five: Looking after it, and the whole check**
11. **Looking after your voice.** Teaches: warm-up, water and humid air, rest a hoarse voice, stop at pain, when to see a
    doctor; short daily practice. Practice: `text` from memory and `choose` cases. Check: 6 of 7 from memory. Why: V19, V20,
    V18; R1, R2.
12. **Find the cause.** Mixed new cases across all seven checks (P22), then the sung test without the line. Check: the
    real-world test above, both parts; the whole check comes back once on new stories and new tunes seven days later (`retest: 7`, built
    for checks with sung tries on 2026-10-22), so the tune test is sung on two different days. Why: V8, V9, D6, V2, V18.

**Review:** sung checks without the line plus mixed cases, on later days (V18; R2, R8).

## How the judging lessons are built (for lessons 7 to 12, as for 1 to 6)

- A case is written with `sgCase` (`public/subjects/singing/items-shape.js`): a story, one `choose` ask on a list of the subject,
  `means` saying once what each answer would look like. Each judging lesson has a worked case, six cases in look-alike pairs, five
  new cases in the check and three held back for the review; its list and its topic (strand) are in the subject record. A list names
  every outcome the app's result can show. A reaction (a worry, a friend's remark) is confirmed by the check in at least one practice
  case and one check case, and wrong in others, so no cue gives the answer; stories describe what was heard in other words than the
  answers. A steady note to check against is a piano app, or a long note of a recording while it plays (a paused recording is silent).
- A check that teaches both a decision and a sung skill holds both: the cases and the sung tries, `feedback: 'after-each'`, one pass
  rule each (`{ ask: <the list's ask>, right: { min: 4 }, of: 'the stories' }`, `{ ask: 'sing', ... }`).
- After a miss the app says which way to move and about how many half-steps (V15, V22); a run names every note. Lessons never call
  the target tone a voice.
- The last group of a sung skill without the line may hold its results to the end of the group (`feedback: 'at-end'` with `guess`),
  feedback after every few tries (V14).

## Engine gaps (smallest real design)

1. **Say what you heard first** (V10, V14): `guess: true` on a sung set shows "Under / On / Over" after the window closes and
   before the result; stored with the try, never scored. Lessons 2-7.
2. **Example sounds in a v2 lesson** (owner's 2026-10-09 ask; L3, L7): the `tones` block exists for the old cards
   (`audio-notes.js`) but is not in `BLOCK_KINDS`; add it to `show` steps only, same rules (plays on a tap).
3. **A fuller target tone** (V3: poor singers match a real voice better than a synthetic one; the advantage is for a real
   voice, best their own): the target was a sine (`audio-synth.js`); built as a hum-like tone with three weaker harmonics, easier to
   hear in the singer's own part of the range. Not a voice and never called one; judgement call.
4. **A slower tune** (V2, V17): a `melody` setting for note length (e.g. 0.8 to 1.6 s) in `SING_PARAMS`.
5. **Reading share:** lessons 8-12 are mostly judging or recall; the record's `readingShare: 0.1` must rise (to about 0.4)
   or they fail V73. The record's seven `parts` become the twelve lessons above.
6. **Not buildable:** recorded clips of tone faults (`docs/singing-clips.md`); tone is taught in words and self-checks.
7. **Built after the first reviews (2026-10-22):** how a single note starts (`start`, a scoop is named and is not on the note, V23) and
   how a hold ends (`end`, sank or rose); results with direction and size in half-steps; a check with cases and sung tries; a sung group
   whose results are held to its end. Round 2: a hunt is detected (`turns`), a hold is judged from its start and its end, the "You said"
   line uses the same reading as the note's mark, a hold shows the answer to its question, a melody's last note says which way it went.
   All in `public/app/lessons/`, tested in `tests/sing-pure.mjs` and X16; changes logged in `shared-helper-changes.md`.
