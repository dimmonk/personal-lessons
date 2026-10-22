# Singing, lessons 1 to 6: fixes after the round 3 reviews (2026-10-22)

Reviews: `review-research-l1-6-round3.md` (R, P) and `review-learner-l1-6-round3.md`. Engine changes are only in the scoring and feedback
functions (`sing-task.js`, `sing-score.js` untouched, `sing-strip.js`, SAY in `view.js`) and are logged in `shared-helper-changes.md`.

| Defect | Fix |
|---|---|
| R1 a tune sung a shade under throughout told its last note "sank" | One function, `singHeldShape`, names a held note (a hold, or a melody's long last note) from its start and its end. A melody's last note now stores its start. A note that began off and ended off on the same side is off from the start, and is never called sank or rose. Test: a three-note tune at -70 has no "sank", and a guess of Under agrees. |
| R2 a hold's start judged by the on-note band, not the slide test | The hold's start uses the same slide test as a single note (`singSlid`, now given the note to compare with). An ordinary start that settles on the note is not "off from the start". A scoop into a hold is named as a slide ("Your voice started under the note and slid up into it"), and a later sink is named as sinking; the "two half-steps higher" line is gone. The guess for a hold is measured at its end, as its question asks. Tests: the reviewer's 250 ms onset with guess On agrees and has no miss line; scoop plus sink says slide and sank. |
| R3 a last note held 2 s, then sinking, reported "on" | A melody's guess is measured at its last note's end. The long-note mark says "Steady for 2 seconds, then sank under". Test: guess Under agrees. |
| P1 "often fine" | l3: "can be fine". |
| P2 the fifth hold outcome | The `holding` list gets "Wandered off and back", with its meaning; l4 names it in one line. |
| P3 26 to 50 off called "a shade" | With a target closer than half a half-step, a note off by up to half a half-step is "A little under/over" ("within half a half-step: sing a touch higher"), never "a shade". The closer-target screens of l4, l5 and l6 say so. |
| P4 "a miss comes back" in held-to-the-end groups | The learner view no longer says it for those groups: a missed try does not come back in them, because the learner has not seen its result. |
| P5 l4 "name the first thing you hear" | A practice case where a note is off from the start and then sinks; the answer is "off from the start", with the rule in its reason. |
| P5 l5 item 6 | "a small step" (and the same in the next shifted case). |
| P5 l6 item 9 | A drift whose first note was right: "check each note after it against a steady one, slowly, one at a time". The l6 screen says the same for this case. |
| P6 thresholds untried on real recordings | Still true, and still stated in research note V23. |

Checks: validate, `npm run lock`, validate (840,465 pass), `npm test` (green; 122 sung-question checks, 15 seeded faults, 199 negative
controls), browser checks X8 X10 X11 X12 X16 X29 X48 X51 with `E2E_SKIP_FAULTS=1` (450 pass; four test-subject expectations in X16
updated to the new words "A little over" and "then rose over"). Learner views l1 to l6 regenerated.
