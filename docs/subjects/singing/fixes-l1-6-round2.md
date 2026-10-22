# Singing, lessons 1 to 6: fixes after the round 2 reviews (2026-10-22)

The reviews are `review-research-l1-6-round2.md` (D, P) and `review-learner-l1-6-round2.md` (L). For each defect, what was done. Engine
changes are logged for the lessons 7 to 12 builder in `shared-helper-changes.md`; `items-shape.js` is unchanged.

| Defect | Fix |
|---|---|
| D1 the hunting example scored as a slide | Engine: a match or a light note stores `turns`, how many times it turned back by more than a shade. Two or more is "Hunting for the note": it is not on the note, it is named before a slide, and its line gives the hunt's own fix (`singHunted`). Pure tests play lesson 3's hunting sound (it turns twice) and its scoop (no turns); X16 sings a hunt. |
| D2 the sinking example named as off from the start | A hold now stores `start` as well as `end`. A hold that started on and ended off says "Then it sank under the note", whatever its middle; only a start that is off says "From the first moment...". The lesson 4 example is tested to say "sank". The example's text now says it starts to slip before a second is out (P5). |
| D3 "You said" contradicting the slide mark | One reading, `singMeasured`, serves the mark and the "You said" line. A slide up is measured as started under ("Your note started lower than it sounded to you"); a hunt has no one side and says so. Tested both ways. |
| D4 holds ask and never answer | A hold is asked "where did your note end, under, on or over?", measured at its end (or its start when off from the start), and shows "You said" with the measured answer. X16 checks it. |
| D5, L5 jump outcomes incomplete | The list `jump` has five: both on, fell short, went past, first note off and far note on, both off the same way. Lesson 5 teaches all five, says to fix the first note first, and has a pair for each new one in the practice and one of each in the check. |
| D6 tune list incomplete | `tune` adds "The whole tune sat off the same way" (every note under or over, or drifting further off), with its fix; two practice cases and one check case; lesson 6 adds "If more than one shows, fix the first one you hear" (L6.2). |
| D7, L-A answers guessable | In lessons 1, 3, 4, 5 and 6 at least one practice case and one check case has a reaction the check confirms (a friend says sharp, and it is a shade over), beside reactions the check does not confirm. Lesson 3 no longer says the check always beats the reaction. "By the same amount" is worded several ways and no longer only on shifted cases; loudness appears in a steady case and a rise appears without it (L4.2); tune stories use other words than the answers (L6.3). |
| L1.1 how to move a song | Lesson 1: many karaoke machines and music apps have a setting that moves the whole song lower or higher; or a version by a lower or higher voice; or the other part (research note V24, marked as everyday practice, not a finding). |
| L3.1 a paused recording is silent | Every story and screen in lessons 2 to 6 uses a piano app, or a long note of the recording while it plays. |
| P1 the slide threshold's source | V23 now quotes Larrouy-Maestri & Pfordresher (2018, abstract): scoops are common and change how a note is heard; the thresholds for a slide and a hunt are marked as the course's judgement, to be tried on real recordings before shipping. |
| P2, P3 the slide down, and the slide named in lesson 2 | Lesson 3 names sliding down onto a note; lesson 2's third step says a slide or a wander is named and not on. |
| P4 the lesson 4 rule label | "At least 4 on the note (the held notes, each steady for 2 seconds)". |
| P6 a melody's last note never said which way | A melody stores its last note's end; a last note that did not hold says it sank or rose. |
| P7, L1.3 sharp and flat | "Sharp means over the note, too high"; lesson 3: any note sung under is flat, over sharp. |
| L1.2 "oo" | "oo” (as in “moon”)" in lessons 1 and 2. |
| L2.1, L2.3, L2.4 | A shade is "more than half a half-step but less than a whole one"; sing as soon as the note stops and the screen says Sing now; a half-step is also two notes next to each other on a piano, counting the black ones. |
| L4.1, L4.3 | "The check wants 2 seconds. These groups go on to 4, so 2 will feel easy."; "If it does more than one, name the first thing you hear." |
| L5.2 | "the first groups tell you which" (step or jump). |
| L6.1 duplicate heading | The screen before the check is titled "Before the check". |
| L-C which piano app | Not changed: any free piano app does; naming one would date the lesson. |

Checks run: `node tests/validate-lessons.mjs`, `npm run lock`, validate again, `npm test` (all green, 116 sung-question checks with 15
seeded faults); browser checks X8 X10 X11 X12 X16 X29 X48 X51 with `E2E_SKIP_FAULTS=1`: 450 passed (X16 is sometimes broken by the
Firestore emulator's network errors on this busy machine; a rerun passes). Learner views l1 to l6 regenerated.
