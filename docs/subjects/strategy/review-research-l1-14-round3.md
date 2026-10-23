# Strategy lessons 1 to 14: research review, round 3 (2026-10-23)

Fresh reviewer, role "research". Read: every learner view (`docs/learner-view/strategy-l1..l14.md`, rendered in f602893, after the
round-2 fixes), the data files where a defect needed its line, `plan.md`, `docs/research/strategy.md`, `fixes-l1-14.md` and the
build-subject skill. Earlier reviews not read. Nothing was run.

**Checked against sources on the web:** BLS Business Employment Dynamics Table 7 (2013 cohort 79.6 / 68.9 / 61.4 / 55.3 / 50.6%; 2018
cohort 62.1% at three years, 51.9% at five): lesson 12's and 13's national figures are right. Continental Lite (lesson 6): the lesson's
account (meals and first class cut, more departures, lower fares, travel agents, mixed fleet, baggage checking and seat assignments
kept) matches the passage as secondary sources quote it. Maytag (lesson 9) matches the note (Porter p. 51-52). Paccar, Vanguard, the
six traps, the value stick, Kaplan's order for losing customers and the Lafley et al. method are taught as the note states them.

**Disputes in fixes-l1-14.md, judged.** The tap-then-verdict pairs (L2.5, L2-2, L4-2) hold: the tap is the evidence step ST16 and
Porter's "dig into the strongest force" ask for. L7-3 (the position is stated) holds: first-order fit is judged against a known
position (ST3). L8-4 holds: step 1 states it. L12-1 (three skills in one lesson) holds: the plan joins them as ST12/ST13's outside view.
L9-1 and L6-1 hold. None is re-raised.

**Carried-over structure:** none found. Every lesson's form follows its row in the plan and the plan's citations.

## Verdicts

| Lesson | Verdict | Defects |
|---|---|---|
| 1 | FAIL | 1 (contradictory fact in a check case) |
| 2 | FAIL | 1 (second tap defensible) |
| 3 | FAIL | 1 (wrong feedback, three items, one root) |
| 4 | PASS | |
| 5 | FAIL | 1 (wrong statement of what the share above 100% is) |
| 6 | FAIL | 1 (check case whose marked answer rests on a pull the case never states) |
| 7 | PASS | |
| 8 | PASS | |
| 9 | PASS | |
| 10 | PASS | |
| 11 | FAIL | 1 (the marked test step is the kind of evidence the lesson calls "talk") |
| 12 | FAIL | 2 (estimate accepts the trap; "knowing the trade is no difference" against the evidence) |
| 13 | PASS | |
| 14 | PASS | |

## Defects

1. **Lesson 1, check question 12 (Lena), `items-kernel.js:192` and `:194`.** Two background lines say opposite things: "We have built
   kitchens in this county for eleven years, and last year we finished 48 ..." and "We have built kitchens in this county for twelve
   years." The round-2 fix (L1-4) added the new line instead of replacing the old one. The verdict is unchanged, but a learner reading
   a check case meets a plan that contradicts itself. **Fix:** delete one of the two lines (keep line 192, the longer background line
   the BACKGROUND note was written for).

2. **Lesson 2, item 2 (bookkeeping), the line "We still type the numbers in by hand; both of those firms pull them straight from the
   bank."** It is marked wrong ("That is how the gap arose"), but it shows the rivals doing the same work a better way, which is what
   step 1 says settles a running problem, and in item 7 (roofing) the line of the same kind ("Their crews have materials delivered to
   the site; ours drives back to the yard twice a day") is the marked answer. A learner who applies item 7's lesson to item 2 is marked
   wrong. **Fix:** make item 2's line the cause only ("We still type every number in by hand."), so the only line comparing with rivals
   is the settling one, as in item 5 (salon) and check question 12 (courier).

3. **Lesson 3, feedback on "It shrinks the value" in items 6 (cleaners' four-day week), 11 (the mill's steady order) and check
   question 21 (tutors who pick their hours); `items-value.js:12`, the default `THEN.grows.shrinks`, used by the items at lines ~78-86,
   ~107-114 and ~172-180.** It says "What customers would pay rises by more than the move adds to the work". In all three nothing
   changes what customers would pay: the value grows because the least suppliers or staff would take fell. The feedback states a false
   fact about the case and teaches the wrong end of the stick. Items 6 and 21 already override only `moves`. **Fix:** give these three
   items their own `then.shrinks` ("Nothing was added to the work, and the least the staff [the mill] would take fell: the suppliers'
   end moved down, so the stick got longer, not shorter."), or make the default neutral ("The stick got longer, not shorter: ...").

4. **Lesson 5, step 1 ("the part above 100% is what the losing lines cost the rest", `l5.lesson.js:23`) and the working
   (`items-core.js:61`).** That is true only when the core is the only line that earns. In item 7 (Hal) the losing lines lose $19,000,
   but the part above 100% is 87.5 points, $14,000, because the florists earn $5,000. The item's reason ("over 100% because the losing
   lines take $19,000 back") is right; the rule's sentence is not, and a learner who checks it with the calculator finds it wrong.
   **Fix:** "the share passes 100% when the losing lines lose more than the other lines earn: the losses take back part of what the core
   earned."

5. **Lesson 6, check question 16 (Kim), `items-tradeoffs.js:~190-200`.** The marked answer is "a real trade-off", and the reason says
   the two kinds of tutoring "pull on the same hours and hiring", but no line of the note says so: the note says only that Kim copies
   the chain and drops the other subjects. Step 1 makes the pull the deciding fact and the other check cases state it (Jill: "Our staff
   hours are full"; Ray: remodels hold plumbers the restaurants need free). Here "no pull" is defensible from what the page shows, and
   the learner must take the pull on trust. Also "go part-time elsewhere, and so do their families" reads as if the families go
   part-time. **Fix:** add the pull as a line ("Our tutors' hours are full: every hour on reading or science is an hour the exam
   students cannot book.") and reword c3: "Our reading, science and college-entrance tutors leave for other work, and their students'
   families go elsewhere."

6. **Lesson 11, check question 11 (Jill's order), `items-true.js:200`.** The step marked as the cheap test is "put the question to the
   other hospital's nurses: would they move their children, and how many?" By the lesson's own rule (step 1: people saying they like the
   idea "is only talk: it costs nothing") that gathers talk, and the left-over decoy, "Poll friends and parents on whether they like each
   move", is rejected in the reason for exactly that ("gathers talk, which tests nothing"). The two differ only in who is asked. ST11's
   tests are designed to produce evidence on the doubted condition, and lesson 11's own check question 14 shows what that looks like
   for the same move kind (14 nurses "signed up and paid a deposit"). **Fix:** "Test that condition cheaply: ask the other hospital's
   nurses to hold a place with a deposit, and count them."

7. **Lesson 12, every made table (`gen-outside.js:41`, `items-outside.js:86`): the rough estimate has no `tol`, so the engine's default
   band (half to double, `app/lessons/number.js:10`) applies.** For a share near 60% that accepts 30% to 120%, so the share that closed
   (39.6% in item 5, 45.2% in item 6, the lesson's own named trap on the next ask) is marked right as an estimate, as are impossible
   values over 100%. **Fix:** `tol: { abs: 10 }` (or a band of about ±10 points) on the estimate.

8. **Lesson 12, step 1 ("Being sure, knowing the trade or working hard is not one: the owners in the record had those too",
   `l12.lesson.js:20` and `:26`), the generated "Near 100%" feedback (`gen-outside.js:46`: "Every owner in the table knew the business"),
   and check question 19 (Grace, twelve years, a second salon; "Well above 58%: twelve years in the trade ..." marked wrong).** The
   record (BLS establishments, the made county tables of all new salons) includes first-time founders, so "every owner in the record
   knew the business" is not true, and prior industry experience is a measured predictor of new-venture survival (e.g. Dahl &
   Reichstein 2007, Danish register data: industry-specific experience raises survival; Delmar & Shane's Swedish ventures likewise).
   ST12 supports starting from the record and distrusting one's own confidence; it does not support treating experience as worth
   nothing, and no passage in the note says it is. Being sure and friendly clients' words are rightly not differences; twelve years of
   running the same kind of shop arguably is. **Fix:** keep "being sure", "a convincing plan" and "clients saying they would come" as
   non-differences; say that experience in the trade moves the forecast a little, not to the plan's number; in check question 19 either
   make the marked answer "a little above 58%, well short of the plan" or replace the twelve years with a non-difference (her
   confidence), and reword the generated feedback to "Most owners in the table had a plan and were sure of it".

## Counts by kind

- Wrong or contradictory fact in a lesson: 3 (defects 1, 3, 4)
- Departure from the field's reasoning or the note: 2 (defects 6, 8; 8 has no source in the note and runs against the evidence)
- Marked answer arguable, or a second option defensible: 3 (defects 2, 5, and 8's check question 19)
- Scoring that accepts a wrong answer: 1 (defect 7)
- Structure carried over from another subject: 0

(Defect 8 is counted under both of its kinds.)
