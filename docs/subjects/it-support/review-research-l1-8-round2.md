# Research check, round 2, IT Help Desk lessons 1 to 8 (2026-10-23)

Read: plan.md, research note IT1 to IT29, rulings-l1-8.md, review-research-l1-8.md (round 1), fixes-l1-8.md, the A+ map lines I needed (2.5), subject.js, l1 to l8 lesson files, and every item as the learner sees it (docs/learner-view/it-support-l1.md to l8.md, rendered after the last edits: they post-date items-l1 to l8) plus the source of every reserve item. Nothing was run. Severity: M = moderate (a graded answer or a claim a learner will act on is wrong or unsupported), L = low.

## Part 1. Round 1 findings, one by one

Evidence is the current text. "Fixed" means the problem in the finding is gone; where a smaller residue remains it is listed in part 2.

### Lesson 1
- 1-1 FIXED. Lesson: "That is an incident with a high impact"; problem is "the same thing happening again and again"; the many-people clause is gone. l1-p-claims and l1-k-records reasons: "Many people hit at once is still an incident, with a high impact".
- 1-2 FIXED. "Nothing is broken" appears nowhere (grep). Request is "a routine job that the desk has fixed steps for". l1-q-folder now says "I have never had access to it".
- 1-3 FIXED. l1-r-badge is high/high, Critical, "no workaround".
- 1-4 FIXED. Table note: "work stopped but a workaround (paper...) keeps it going" is medium; the kiosk ticket (Tomas, paper) is High and its reason says so.
- 1-5 FIXED, residue in L1-N2. Desk rule "two or more earlier reports" stated; boundary tickets l1-r-once and l1-q-unrelated added.
- 1-6 FIXED, residue in L1-N1. "a way of working built from the six steps CompTIA... gives... and from... ITIL and knowledge-centered service"; numbered 1 to 9.
- 1-7 FIXED. "Rating a ticket is not the same as choosing what to open first."

### Lesson 2
- 2-1 FIXED. Lesson: "Yes-or-no questions have their place, but after the story". Wrong options say "as a first reply" and "a closed question like this is for confirming one detail after the story" (l2-p-open, l2-k-open).
- 2-2 FIXED. l2-p-call turn 3: "An open email does not show that the internet works".
- 2-3 FIXED. l2-k-call2: certificate warning glossed; right reply ends "the ticket also goes to the security team" if the site was unexpected.
- 2-4 FIXED. l2-k-call1: "The other two get their own tickets".
- 2-5 FIXED. "worse" gone; greeting/deadline claim is now "does not describe the fault".

### Lesson 3
- 3-1 FIXED. l3-p-black right answer is the times and the log; no cable swap is penalised; "Order her a new monitor" is wrong because "Nothing yet says the monitor is at fault".
- 3-2 FIXED. l3-q-freeze / l3-k-close: log and times are right; "Close the ticket until it happens again" now carries `waited-idle`, not `closed-early`; `no-repeat` unused.
- 3-3 FIXED. "Do not make a fault happen on purpose if that could cost files... Protect the files first."
- 3-4 FIXED. "A rule of thumb, not a law"; l3-q-group shows the users' side being right when the log shows no company change.
- 3-5 FIXED. l3-p-reset "again" option carries `repeated-step`.
- 3-6 FIXED. "a clean install of Windows".
- 3-7 NOT FIXED. plan.md move 3 is clean, but the research note still reads (line 356) "Can it be made to happen again? Back up before touching anything. (IT2, IT17)". See L3-N3.

### Lesson 4
- 4-1 FIXED. Lesson: "A failed known fix is not a reason to hand on by itself". l4-q-outlook, l4-r-first, l4-k-limit, limit questions: "you narrow the problem down; you hand on when the desk's rule says so". l4-m-note shows a quoted desk rule.
- 4-2 FIXED. Lesson: "No exam or study gives a number"; worked ticket: "That is my own choice for this ticket; no book gives the number"; numbers differ by ticket (2/10, 3/15, 3/12, 3/20).
- 4-3 FIXED. "If you have seen the symptom yourself, your own memory is a source of the known fix."
- 4-4 FIXED. l4-q-cost: "Very little: each failed try rules out only itself".
- 4-5 FIXED. Workaround paragraph in step 1 ("It does not count as a try").
- 4-6 FIXED. l4-m-search: "The knowledge base has an article for it."
- 4-7 FIXED. l4-k-reset reason: "An article can carry a step that erases files without a backup step of its own".

### Lesson 5
- 5-1 FIXED. Row r5: "Can the computer reach the internet?... A company server needs its own check"; worked ticket says "reaches the internet".
- 5-2 FIXED. Lesson: "These tests assume one fault at a time"; l5-g-two (Nina, cable and monitor both bad) with slip `one-fault`.
- 5-3 FIXED (header states the compare-with-a-working-machine step is left to units 2 to 7). Nothing learner-facing, acceptable.
- 5-4 FIXED. l5-k-lin uses "the desk's test account"; explained.
- 5-5 FIXED. Header corrected.

### Lesson 6
- 6-1 FIXED, residue in L6-N2. Lesson: "a working habit... not a law"; header says not a sourced rule.
- 6-2 FIXED. l6-k-uma and l6-r-streak: "cleaning routine" plus "toner cartridge"; no print head.
- 6-3 NOT FIXED. The lesson text is right (batching allowed when trivial, no "quicker" claim), but l6-s-hana and l6-r-ravi still score batching as wrong and say "Doing everything at once only feels faster". See L6-N1.
- 6-4 FIXED. Worked ticket: "The office changed the Wi-Fi password over the weekend"; story says "this morning... worked on Friday".
- 6-5 FIXED. "the office Wi-Fi is working: that cause is ruled out... her laptop and its own Wi-Fi settings stay".
- 6-6 FIXED. One round of six steps everywhere (l6-s-order, l6-k-order).
- 6-7 FIXED. l6-k-pat: network phone, "network port in the wall", no dial-tone logic beyond the stem (the stem still says "no dial tone"; acceptable for an IP phone display).

### Lesson 7
- 7-1 FIXED. ITIL 4 credited with confirmation on closing; A+ credited only with the follow-up.
- 7-2 FIXED. Auto-close gone; l7-r-quiet and l7-k-quiet keep the ticket open and follow up again.
- 7-3 FIXED. Every "20 minutes" sits beside a quoted desk rule (l7-p-limit, l7-k-hand, l7-s-hand).
- 7-4 FIXED. Lesson: "Move 8 stands in for move 7 on your side"; l1 list: "Move 7 or move 8 comes first, then move 9".
- 7-5 FIXED. Repeat-pattern wrong options use `dropped-pattern`.
- 7-6 FIXED. "A published standard for help desks, called knowledge-centered service".

### Lesson 8
- 8-1 FIXED, residue in L8-N1. Identity check in step 2, worked ticket, l8-p-lockout, l8-r-confirm, l8-q-id, l8-k-id; slip `no-id-check` is a pass rule.
- 8-2 FIXED. l8-p-next right answer is a loaner plus a test; the battery-first option is wrong ("You have not tested anything yet").
- 8-3 FIXED. l8-q-jargon right reply: "I cannot say exactly when they catch up, so I will call you at 3 to check."
- 8-4 FIXED. One sentence, studies separate, "limited... shops and banks".
- 8-5 FIXED. Worked ticket: "you hand the pattern on as a problem".
- 8-6 FIXED. "say back what they told you".
- 8-7 FIXED. l8-s-monitor and l8-k-meaning offer a test ("another monitor", "from another account") before a fix.
- 8-8 was a note, no defect.

### Cross-lesson findings
- Move after the known fix fails: FIXED (lessons 4, 5, 7 and all feedback now say narrow down, hand on by desk rule).
- Two time limits: FIXED (tries/minutes are the technician's own; 20 minutes always in a quoted desk rule).
- Close with or without confirmation: FIXED (l7-r-quiet, l8-r-confirm, l8-p-confirm agree).
- Kind "problem" against ITIL: FIXED as ruled (ruling 3), small residue L1-N2.
- Identity: FIXED, residue L8-N1.

Round 1 totals: 51 actionable, 49 fixed, 2 not fixed (3-7 in the research note, 6-3 in two items).

## Part 2. Open findings

### Moderate (3)

**L1-N3 (M) l1-g-wifi-once and l1-g-wifi-again (Ines 10:05 AM, Omar 10:20 AM).** The answer depends on a fact the tickets do not give. Both say the results are needed "this afternoon" (no hour). The reasons then say "more than 3 hours away, so it is needed today" (Ines) and "results due this afternoon" (Omar). At 10:05 and 10:20, 12:30 or 1:00 is "this afternoon" and is inside the table's "deadline within 3 hours" (urgency high, Moderate becomes High). A learner who reads it that way is marked wrong. Ruling 4 says a question never relies on a fact the ticket does not state, and ruling 5 says every mark follows the table's notes exactly. Fix: give the hour in both tickets ("by 3 PM", "by 4 PM"), and keep the reasons' arithmetic.

**L6-N1 (M) l6-s-hana (Item "Hana, slow computer") and l6-r-ravi (reserve).** Both score doing several changes together as wrong (`two-changes`, for "updates and the cleanup together", "do them all together", "do three together") with the reason "Doing everything at once only feels faster: if it does not help, nothing is crossed off". Lesson 6 says the opposite for this case: "when the changes are trivial and nobody will need to know which one worked, a desk may make them together". Updates, cleanup and a restart on a slow computer are trivial and reversible, and nothing in either ticket says the cause matters or may come back. The "feels faster" line is also the speed claim round 1 (6-3) asked to remove, and no source supports it. Fix: either make the tickets ones where the cause matters ("it keeps coming back", "the same fault last week") and say that in the reason, or drop `two-changes` for the batch of trivial changes and teach the cost in terms of what is known ("you will not know which one did it"), with no "feels faster".

**L8-N1 (M) l8-k-id (check, Marcus and Ms. Alvarez) and l8-q-id (Carla).** Both right answers hand the check to a phone number or name supplied by the person being checked: l8-k-id "give me her number and I call her"; l8-q-id "give me their name and I call now". Calling a number the requester supplies is how the impersonation the item teaches against succeeds. The desk's rule in the item says the reset goes "only to the account owner, after the desk's check on the owner". Fix: "I call her on the number the company has on file" and "I look up your manager in the directory and call them", and say so in the reasons.

### Low (13)

**L1-N1 (L) l1.lesson.js step 2, last paragraph.** "CompTIA left this way of working off the exams, but it recommends it to anyone going for a first IT job." "This way of working" is the nine moves; IT1 says CompTIA recommends its own six steps. Fix: "CompTIA left its six steps off the exams but recommends them... The nine moves are our version of them."

**L1-N2 (L) l1.lesson.js "Three kinds of ticket".** The ticket is "sorted as a problem" while ITIL 4 (IT10, IT11) keeps this user's ticket an incident and puts the cause in a separate problem record. Ruling 3 chose this wording, so it stays, but add one sentence: "In ITIL the user's ticket is still an incident; the cause is tracked as a problem. Here the desk sorts it as a problem so you hand the pattern on."

**L3-N1 (L) l3.lesson.js step 2, "Until the files are safe, no step of yours touches the machine."** Absolute, and contradicted two sentences later (restart on a healthy computer, Wi-Fi off and on, "loses nothing") and by lesson 4 (a restart is "a fair first try"). Fix: "no step that could lose files".

**L3-N2 (L) l3-r-print (reserve), reason.** "Several people with the same fault from the same day point at the company" is stated as fact; the lesson calls it a rule of thumb. Fix: add "usually" and "the log decides".

**L3-N3 (L) docs/research/it-support.md line 356 (round 1, 3-7).** "Can it be made to happen again?" still cited to IT2, IT17. Neither says it. Fix: delete the clause or recast it as "ask them to show you (IT19)"; and add the logs/times route as a judgement call (no source read gives it; A+ map 1.6 lists Event Viewer as a tool).

**L3-N4 (L) subject.js line 111.** Slip `no-repeat` ("tried a fix before making the fault happen again") is defined and used nowhere in lessons 1 to 8 (grep). It encodes the dropped precondition. Fix: delete it (no-backward-compat).

**L4-N1 (L) l4.lesson.js step 2.** "so many tries, or so many minutes, whichever runs out first" and "a user who cannot work needs a shorter limit than one who can" are the builder's design, not IT3. The text says only "No exam or study gives a number". Fix: add "This two-part limit is a working habit, not a sourced rule", as lesson 6 does for its habit.

**L5-N1 (L) l5.lesson.js step 2.** "These five come up most." No source counts them. Fix: "Five cheap tests that split" (IT4 supports the kinds, not the frequency).

**L6-N2 (L) l6.lesson.js step 1.** "This is a working habit of careful technicians". Attributes the practice to technicians; none of IT3, IT9 shows it. Fix: "This is a working habit this course uses, not a law."

**L7-N1 (L) l7.lesson.js step 3, l7-q-field and l8-q-words (their-words rule).** "shortened but not relabelled; leave out insults" is unsourced desk practice (IT14 says capture the customer's context and complete thoughts, nothing on insults). Fix: label "this course's practice" once.

**L7-N2 (L) l7-s-hand (reserve).** "a restart, and a forced shutdown, then holding the power button" lists one action twice (holding the power button is the forced shutdown), and the note repeats it as three tries. Fix: replace the third with a different try ("unplugged the charger and tried again").

**L7-N3 (L) l7 and l8 header comments.** They attribute "confirm who is asking before a reset" to A+ 2.5. A+ map line 101 lists impersonation as an attack, not a procedure, and the research note has no finding on identity checks. Fix: label it a judgement call from standard desk practice and add a short research entry (or read the A+ 2.5/4.x text for a procedure).

**L8-N2 (L) l8.lesson.js step 1.** "the work they cannot do is usually the cause" of an upset user: no source (IT17 to IT20 do not say this). Fix: "often", or drop the clause.

## Part 3. Other checks, no finding

- Nine moves: numbered the same in l1 text and subject.js `move` list; plan moves 1 to 9 match lessons 1 to 8. Move 4's limit, move 8's desk rule and move 9's "close only when the user confirms" are consistent in every lesson.
- Rulings: 1 (limit), 2 (reproduce), 3 (problem), 4 (request), 5 (table), 6 (identity), 7 (closing), 9 (single fault), 10 (print head) are all met in text and items, apart from the three moderate findings. Ruling 8: right option is the longest in 31 of 101 one-answer choices across lessons 2 to 8 (about chance).
- Problem threshold: lesson 1 "two or more earlier reports", lesson 7 desk rules "three tickets" (two earlier plus today in l7-r-three and l7-k-problem; three earlier in l7-q-problem). Consistent.
- IT facts spot-checked: laser/inkjet parts, failing-drive advice, DNS caching, VPN hotspot test, PoE phone, docking station: correct.

## Verdicts

| Lesson | Verdict | Open findings (M / L) |
|---|---|---|
| 1 | FAIL | 3 (1 M: L1-N3; 2 L: L1-N1, L1-N2) |
| 2 | PASS | 0 |
| 3 | PASS | 4 (0 M; L3-N1, N2, N3, N4) |
| 4 | PASS | 1 (L4-N1) |
| 5 | PASS | 1 (L5-N1) |
| 6 | FAIL | 2 (1 M: L6-N1; 1 L: L6-N2) |
| 7 | PASS | 3 (L7-N1, N2, N3) |
| 8 | FAIL | 2 (1 M: L8-N1; 1 L: L8-N2) |

Open findings: 16 in total (3 moderate, 13 low), plus nothing outstanding from round 1 that is not in this list (the two round 1 findings not fixed are L3-N3 and L6-N1).
