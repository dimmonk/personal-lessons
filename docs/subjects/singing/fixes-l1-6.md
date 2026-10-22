# Singing, lessons 1 to 6: what was fixed after the first reviews (2026-10-22)

The reviews: `review-learner-l1-6.md` (L) and `review-research-l1-6.md` (R). Each defect, then what was done. New sources are in
`docs/research/singing.md` with their passages (V2 and V3 extended, V21 to V23 new); the plan says how lessons 7 to 12 build the same way.

## Facts voice science contradicts

| Defect | Fix |
|---|---|
| R1.1 the "sing it softly" range test | A top note is tried on "oo" at an easy loudness, about as loud as talking; above the range it will not come without straining or shouting however it is tried (V21, on V11's "higher pitches need higher pressures"). Every case in `items-fit.js`, its `means`, l1's teaching screen and the away-from-the-phone line rewritten. |
| R4.1 "about half drifted" | l4 now says what V2 measured: about half of people with no music training did not sing the same note the same way each time (precision, quoted in V2). Holding is justified on its own grounds (long notes in songs; the tune test's held last note), and the consistency finding is why checks take several tries. |
| R5.1 big-jump finding generalised | "Singers who struggle to sing in tune" (V3's poor-pitch group) in l5's why and in the app's reason for a pair of notes. |
| R1.2 the order credited to teachers | l1 says the order puts first what changes the result most and is "a sensible order, not one a study has tested"; the plan, the subject record's comment and the research note's way of thinking say the same. |
| R1.3 check 4 too broad | "Does it go sharp or strained only where the line climbs or gets loud?" in the subject list, l1, the plan and the note; a note falling short on a climb is check 3 (V3). |
| R3.3 hunting given one cause | "often means the note was not in your head first; hear it first, and if it still wanders, slow down" (l3, its cases, `means`). |
| R2.1 "is how that link is trained" | "is the way to practice that link"; the code comment no longer calls V6's 56 an average miss of a note. |
| R E1 the target tone called a voice | Tone kept. Code comments, the standard and `singing-audio.md` call it a hum-like tone, fuller than a sine, not a voice; Lévêque et al. 2012 and Pfordresher & Mantell 2014 added to V3 with the note that a made tone probably keeps most of the gap. |

## Sounds and words that disagreed with the scoring

| Defect | Fix |
|---|---|
| R3.1 the "shade" examples scored as on | The examples play 75 off, a shade by the lessons' own scoring (more than 50, up to 100). |
| R3.2 "slow wobble" | "a fast flutter or roughness, which slows and fades as yours moves onto the note" (about 13 beats a second at 75 off). |
| R3.4, L3.2 scoop taught as a fault, slide practised and scored only at the end | Engine: a match or light note stores how it starts (`start`); one that slid more than a shade into the note is named "Sliding up into it" and is not on the note (V23). l3 practises and checks `match`, aiming at the note from the first moment; the slide task is no longer used by Singing. The example scoop scores as a slide. |
| R5.2 gaps taught, notes scored | l5 now says both notes must match the recording's, as singing along needs, and teaches the two misses as the app reports them: the far note short, or both off the same way (V3). |

## A decision taught, worked and practised on new cases

| Defect | Fix |
|---|---|
| R3.5, L3.4 the five outcomes never checked | l3's check: five new cases (4 right) and five sung notes (4 on); three cases held back for the review. |
| L4.2, L4.4 (no example, no cases), L5.4, L6 no decision | Each of l4, l5, l6 now teaches a list of what can go wrong (`holding`, `jump`, `tune` in the subject record, each its own topic), works one case, practises six in look-alike pairs, checks five new ones (4 right) beside the sung tries, and holds three back. The shared case shape is `items-shape.js`. Checks with both parts count each with its own rule (engine: `checkHasSung`, `checkParts`, a rule by the `sing` ask reads "on the note"). |
| L3.3 the worked case's point hidden | The working starts by putting the reaction aside, and the screen before it says to watch which wins, the reaction or the check. |
| L1.1 Mia "straining softly" | "At an easy loudness its top notes will not come: some she reaches only by straining, and some do not come out at all." |
| R3.6 under vs sliding decided by one phrase | Times stated: Omar reaches the note about half a second in by itself; Chris stays low for the whole two seconds until he moves it. |

## Feedback after a sung try

| Defect | Fix |
|---|---|
| L2.1, L4.5, L5.5 "half the gap on a piano", "a quarter of the gap" | The half-step is defined once, in l2, as the smallest step between two notes of a tune, the two notes of the Jaws theme, and played (V22). On the note is within half a half-step; the stretch is a quarter of one. |
| L2.2, L4.3 no direction, no size | After a miss each note that was off says which way and how far: "sing a little higher, less than a half-step", "about two half-steps: sing that much lower". A broken hold says how long it stayed on and whether it sank or rose (engine: `end`, `singDrift`). |
| L2.3 "measured it differently" | "The app measured: a shade over. Your note was higher than it sounded to you." |
| L5.2, L6.4 only the last note | Every note of a run has its mark and, if off, its move line; l5 and l6 say the result names every note. The question before the result stays on the last note (the far note of a jump). |
| L2.4, L2.5 no explicit inner step, nothing after a miss | l2: a try in three numbered steps (listen; hear it in your head, silently; sing, aiming at the note from the first moment), and what to do after a miss. |
| R X.1 the result never fades | The last group of l4, l5 and l6 holds its results to the end of the group: the learner says under, on or over after each try, and the break screen lists every try (engine: `feedback: 'at-end'` on a sung group with `guess`; V78; X16). |
| L4.1 "steady" undefined | "on the note, within half a half-step, without a break, for the seconds the try names", with a steady hold and a sinking one to hear. |
| L4.4 no physical cue | "Keep the loudness even from start to end: a note that swells louder is being pushed, and pushing makes a note go sharp" (V11). |
| L5.1, L5.3 no way to hear a gap, steps and jumps unlabeled | Sounds of a step, a jump and a jump that falls short; each try's words say "a small step apart", "a big jump apart" or "a step or a jump apart". |
| L6.1, R6.1 speed not stated | The screen lists the groups as they are; a slowed tune's words say "played slowly". |
| L6.5 nothing on a lost tune | "Go back to the slow speed, hear the tune again, and sing the part you lost on its own before the whole tune" (V2, V17), also the fix of the `lost` case. |

## Numbers and screens

| Defect | Fix |
|---|---|
| L6.2 "4 of 5" beside a 3-try check | The learner view prints the result with the check's own numbers. |
| L6.3 "Tries 18 to 18" | Two tries print "Try 18". |
| L4.6 4-second practice, 2-second check | Kept, and said: 4 seconds is twice the check, so 2 comes easily. |
| L6.6 a thin pass | Kept to the plan's test (twice, with one spare; lesson 12 retests on another day), said on a screen before the check; the check now adds five cases. |
| R1.4 the range not in the check | The plan says the range (a fifth or more, never saved narrower) is found in the flow and is not repeated in the check. |
| L1.2, L2.6, L3.5 learner-view wording ("the line drawn", "closer than a fifth", note names on sound buttons) | The learner view says "a line on the screen follows your voice", "too close together", and prints only each sound's label; sharp is defined where l1 first uses it ("a shade over the note, too high"); flat and sharp are named in l3 with their meaning. |

## Also checked

- No Singing task or generator takes a list of three numbers (the range trap of lesson standard 3.5): Singing has no generators, and its
  sung tasks take single whole numbers only.
- Tests: `node tests/validate-lessons.mjs`, `npm run lock`, validate again, `npm test`; browser checks X8 X10 X11 X12 X16 X29 X48 X51 run
  with `E2E_SKIP_FAULTS=1`. X16 now also checks a slide into a note, a group that holds its results, and a check with stories and sung
  tries; two seeded faults were added for them (not run here). `tests/sing-pure.mjs` checks the new scoring and words, with two seeded faults.
