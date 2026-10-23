# Research check, round 3, IT Help Desk lessons 1 to 8 (2026-10-23)

Read: plan.md, research note IT1 to IT29 (it-support.md, in full), rulings-l1-8.md (1 to 15), review-research-l1-8-round2.md, fixes-l1-8.md, build-brief.md, subject.js (lists, slips), l1 to l8 lesson files, and every item source file (items-l1.js to items-l8.js, items-l3-check.js, items-l4-check.js). I read the item sources, not the older rendered learner views. The only thing run: `node tools/option-lengths.mjs it-support` (read-only; l1 to l8 all show a tick). BLOCKER = teaches something false or contradicts a ruling. MINOR = everything else.

## Part 1. Round 2 findings (16 open), one by one

All sixteen are FIXED. Evidence is the current text.

| Id | Status | Evidence |
|---|---|---|
| L1-N3 | FIXED | Hours now in the tickets: l1-g-wifi-once "by 3 PM" (10:05, 4 h 55 min), l1-g-wifi-again "by 4 PM" (10:20), l1-q-kiosk "by 1 PM", l1-q-again "5 PM". The "more than 3 hours away" reasons match the arithmetic in every ticket I recomputed (15 tickets). |
| L1-N1 | FIXED | l1 step 2: "CompTIA ... recommends six steps ... The nine moves are those six steps, with three things help desks add" and "CompTIA left its six steps off the exams". (Wording residue: M-1 below.) |
| L1-N2 | FIXED | l1 step 1: "ITIL itself keeps the user's ticket an incident and tracks the cause as a separate problem. This desk sorts the ticket as a problem so that the pattern gets handed on." |
| L3-N1 | FIXED | l3 step 2: "Until the files are safe, make no step that could change or erase them. Copying them and reading the log change nothing." The restart and Wi-Fi sentences that follow no longer contradict it. |
| L3-N2 | FIXED | l3-r-print reason: "usually point at the company, and the log decides". |
| L3-N3 | FIXED | Research note lines 355 to 358: show-me credited to IT19; reproducing "not made a required step"; logs and times labelled a judgement call. |
| L3-N4 | FIXED | `no-repeat` has no definition in subject.js and no use in any l1 to l8 file (grep: 0 and 0). |
| L4-N1 | FIXED | l4 step 2: "this two-part limit is a working habit, not a sourced rule". |
| L5-N1 | FIXED | l5 step 2: "Here are five cheap tests that split"; no frequency claim. |
| L6-N1 | FIXED | l6-s-hana and l6-r-ravi: no `feels faster`, no trivial-changes caveat (grep: 0 hits in any l1 to l8 file). Reasons now say "nobody will know which change did it, and changes it did not need stay in". Lesson: "it has no exception". |
| L6-N2 | FIXED | l6 step 1: "a working habit this course uses, not a sourced rule". |
| L7-N1 | FIXED | l7 step 3 and the l7-r-words stem: "this course leaves insults out". (Not repeated in the l8-r-words stem: M-18.) |
| L7-N2 | FIXED | l7-s-hand: three different tries (restart, forced shutdown, unplugging the charger); hand-on Q repeats the same three. |
| L7-N3 | FIXED | l7 and l8 lesson headers: "a judgement call from standard desk practice (A+ 2.5 lists impersonation as an attack, not a procedure)". (The items-l8.js header still says otherwise: M-17.) |
| L8-N1 | FIXED | l8-k-id: "I call her on the number the company has on file"; l8-q-id: "I look up your manager in the directory and call them"; both desk rules quoted, "a number or name the caller gives is never used". |
| L8-N2 | FIXED | l8 step 1: "the work they cannot do is often the cause". |

Round 1 residues (3-7, 6-3) are closed by L3-N3 and L6-N1 above. Rulings 8 to 15: checked against the text and items; all met except the points below.

## Part 2. New findings

### BLOCKER (1)

**B-1 (L7). The day-5 close contradicts ruling 7, plan move 9 and the plan's real-world test.** Ruling 7: "Close only when the user confirms it works (IT11, plan). A silent user gets a follow-up". Plan move 9: "Close only when the user confirms." Plan, real-world test: no ticket "closed without the user's confirmation". Research IT11: closure includes "user confirmation of service restoration". Lesson 7 now teaches, in the quoted desk rule and in check question l7-k-quiet (right answer), that after day 5 with no answer the ticket is closed as "no answer, not confirmed". fixes-l1-8.md says this follows "ruling 7 as overridden by the brief", but the brief (build-brief.md) and rulings-l1-8.md say nothing of the kind, so as written the course contradicts itself: lesson 28's check (plan) will mark a silent-user close as a fail, lesson 7 marks it right. The lesson is internally careful (never "fixed", the rule is quoted and the schedule is the desk's), so this is paper, not teaching error. Fix, either: (a) add ruling 16 to rulings-l1-8.md ("a desk's own rule may end follow-ups after a set time and close as 'no answer, not confirmed', never 'fixed'; IT11's confirmation applies to closing as fixed"), amend plan move 9 and the real-world test wording to match; or (b) change l7-k-quiet and the rule block so the ticket stays open. Clears the moment one of those is done.

### MINOR (23)

Lesson 1
- M-1. l1 step 2: "the nine moves are those six steps, with three things help desks add: sorting, handing on, and writing it up". CompTIA's six steps already end with "Document findings" (IT1), so writing up is not an addition; KCS gives the form, not the step. The wording is ruling 15's, so it is not a lesson departure, but it is wrong against IT1. Fix: "...with the desk's sorting and hand-on, and a fuller write-up from knowledge-centered service", and amend ruling 15. Also "recommends them to anyone going for a first IT job": IT1 addresses training institutions preparing first-job learners.
- M-2. l1 "fifth time this month" (why, and step 1 example) against the room 4B record, which runs Sep 22 to Oct 16 ("last five weeks"). Say "fifth time in five weeks".
- M-3. l1 step 3: "The priority decides the order you open tickets in, and ties go to the earlier deadline." IT12 (ITIL) says rating impact and urgency is not prioritising and ordering is needed only when people are scarce; the round 1 sentence that kept this apart was cut in round 2. The tie rule has no source. Fix: present both as "this desk's rule" in the table notes.
- M-4. "Priya Nair" is the VP of Sales in l1-w-monitor and an accounts clerk in l7-w-drive (same company). Rename one (l3 already renamed its Priya).

Lesson 2
- M-5. l2-k-call2 right option opens "That is fine." after "I clicked something" and sits beside the wrong "Don't worry, it is nothing"; it can read as reassurance about the click. Open with "Thank you for telling me."
- M-6. l2-r-call end text: "a pattern to search for and to hand on" after one earlier fix. Under lesson 1's rule (two or more earlier reports) this is not yet a problem. Say "a detail to put in the note".

Lesson 3
- M-7. l3 step 2 and l3-q-backup: "if a recent backup exists you do not make another" is attributed to CompTIA's "if applicable" (IT2), which says only back up when a change could lose files. The extension is reasonable but no source gives it; the wrong option "copy again by hand" is defensible practice on a failing drive. Label it this course's reading, or drop the "do not make another" half.
- M-8. l3-w-slow wrong option and l3-m-question wrong option state invented facts ("what usually slows a laptop down", "a restart brings a missing drive back more often than not"). Harmless in distractors but untrue-sounding; remove the frequency words.

Lesson 4
- M-9. l4-k-reset: a laptop in a sign-in loop cannot be signed in to, yet the right option is "copy the user's files to the company storage". The ticket does not say how the files can be reached. Add "(from the drive, with a recovery tool)" or use a PC that still starts.
- M-10. l4-m-note: "Unplugged the printer's cable and plugged it back in", 11 minutes, reads as an invented duration. Use a different try (e.g. "Printed a test page from the printer's own menu").

Lesson 5
- M-11. l5-p-print reason: "If it comes out there, her laptop is fine and the second-floor printer is the cause." The note lists three causes; "her connection to that printer" is still open. Say "the fault is in her connection to that printer or the printer itself".
- M-12. l5-p-mail wrong option "check the date and time": rationale "something that is not on the list" is arguable (a wrong clock can break a mail login). Rationale should say "it does not split the three causes", as for the others.
- M-13. l5-s-fav reason ("A favorite cause is the first thing to test") and the worked ticket step ("keep it as the first thing to test") against the right option and lesson ("run the cheapest test, which may or may not be the favorite's"). Say once: test the cheapest first; the favorite is on the list, not exempt.
- M-14. Table row r4 and l5-s-boot reason: "only after sign-in points at the account and what starts for it". A failing drive or too little memory also shows after sign-in; l5-k-lin's test account is what separates them. Add "or the computer's own speed" to the r4 text.

Lesson 6
- M-15. l6-k-scan: right option "Correct the email address", but the ticket says only that she typed a new address, not that it is wrong. Use "Retype the email address" (the table's own words).
- M-16. l6-r-ned: right option says "the port on his computer" is faulty; the tests cannot tell the port from the computer (both are on the cause list). Say "his port or his computer".
- M-17b. l6-k-order puts "forget the saved network" (2 minutes) without the 10-second switch look the worked ticket takes first. Add the switch to the cause list sentence or note that only one cause is shown.

Lesson 8 (and l7 headers)
- M-17. items-l8.js header still says "A+ 2.5 (confirm who is asking before a reset or unlock)", against the lesson header (judgement call). Align it.
- M-18. l8-r-words stem does not restate "this course leaves insults out" (l7-r-words does); the right answer and wrong option ("the insult ... is not a fact the next tech can use") depend on it. Copy the sentence.
- M-19. l8-p-first right option "I am sending someone to the printer now": the ticket does not say anyone is free (l8-p-next states "the desk has one free" loaner). Add "A technician is free." to the stem; its feedback also invents "the printer on 2".
- M-20. l8 step 2 teaches the identity check as plain fact; no research finding supports it (headers call it a judgement call; the research note has no entry). Add a short research entry (standard desk practice; A+ 2.5 names impersonation only) or label it in the lesson as this desk's rule.
- M-21. l8 step 1 "the work they cannot do is often the cause" has no source (IT17 to IT20 do not say it). Cut it or soften further ("a user who cannot work is often upset").
- M-22. Plan check sizes differ from the build (l3, l4, l7 plan "5 new", built 6; l8 plan "4 calls", built 4 calls and one chat). Update plan.md.

## Part 3. Looked for and not found

- Departures from the nine moves: none. Move numbers in l1's list, subject.js `move`, and lessons 2 to 8 agree. Move 4's own limit, move 8's desk-rule hand-on, move 9's note: consistent in all eight lessons and every feedback line. No "hand on because the known fix failed" remains.
- Time limits: tries and minutes are the technician's own in l4, differ by ticket (2/10, 3/15, 3/12, 3/20); 20 minutes appears only inside a quoted desk rule (l4-m-note, l7-p-limit, l7-k-hand, l7-s-hand).
- Problem threshold agrees across lessons: l1 "two or more earlier reports"; l7 and l8 desk rules "three tickets" (two earlier plus today) give the same answer in every ticket (l7-q-problem has three earlier plus Dee's, also a problem).
- Rulings 3, 4, 5, 6, 9, 10, 11, 12, 13, 14: met. Ruling 5: I recomputed the priority of all 26 l1 tickets against the table and its notes; all agree. Ruling 10: no ticket gives a print head and toner together. Ruling 12: "feels faster", "trivial", "careful technicians", "these five come up most": 0 hits. Ruling 13: hours are in the tickets; "no rule about handing on" is stated in every l4 ticket that offers a hand-on option.
- Ruling 8: l1 to l8 all pass the option-length tool (right option longest in 3 to 6 of 9 to 24 per lesson).
- Slips used in items are all defined in subject.js (repeated-step, waited-idle, cause-as-fact, part-first, dropped-pattern, no-id-check, wrong-scope); none defined and unused in l1 to l8 other than shared list entries.
- IT facts checked and correct: laser/inkjet parts, failing-drive advice (repair tools can worsen it; each start is a risk), DNS caching and TTL gloss, PoE desk phone, VPN test over a phone hotspot, forced shutdown, docking station, Error 1603 as an installer error, certificate warning gloss, restart loses only unsaved work.
- IT20 use in l8: the lesson says the studies are from shops and banks and untested on help desks; its two supported claims (apology with explanation; an employee's explanation lowering anger) match IT20's search descriptions.

## Verdicts

| Lesson | Verdict | BLOCKER | MINOR |
|---|---|---|---|
| 1 | PASS | 0 | 4 (M-1 to M-4) |
| 2 | PASS | 0 | 2 (M-5, M-6) |
| 3 | PASS | 0 | 2 (M-7, M-8) |
| 4 | PASS | 0 | 2 (M-9, M-10) |
| 5 | PASS | 0 | 4 (M-11 to M-14) |
| 6 | PASS | 0 | 3 (M-15, M-16, M-17b) |
| 7 | FAIL | 1 (B-1) | 0 |
| 8 | PASS | 0 | 5 (M-17 to M-21) |

Total: 1 BLOCKER, 22 MINOR (M-22 is plan housekeeping). Lesson 7 passes once B-1 is cleared by recording the override in the rulings and plan (or changing l7-k-quiet); nothing else blocks.
