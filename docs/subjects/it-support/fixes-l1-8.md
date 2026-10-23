
## Lessons 3 and 4

Files: `l3.lesson.js`, `items-l3.js`, `items-l3-check.js`, `l4.lesson.js`, `items-l4.js`, `items-l4-check.js`; two slips added to `subject.js` (`repeated-step`, `waited-idle`). Rev stays 1. Both checks now have six questions (pass 5 of 6, and the old slip rule).

### Lesson 3
- Ruling 2, review 3-1, 3-2, 3-3, 3-7 (reproduce as precondition): dropped as a step. Step 3 is now "When it comes and goes": show-me is part of the story; faults with no steps are worked from what changed, the computer's log and the user's notes of times; never provoke a fault that could cost files. l3-p-black, l3-q-freeze and l3-k-close rewritten (log and times are the right answer; a cable swap is no longer penalised; the log is shown in the ticket). The `no-repeat` slip is no longer used here.
- 3-4 and learner 3 (scope rule of thumb): labelled a rule of thumb; new l3-q-group (three people, same add-in they installed themselves, no company change); l3-q-onlyme kept; line order varied in tap questions.
- 3-5 (slip on "find out again"): now `repeated-step`; 3-6: "clean install of Windows".
- Learner 1: restart is safe only on a healthy computer; failing disk (clicks, freezes, will not start) stated in Step 2; Sam's desktop now healthy; l3-m-swap restart option marked `no-backup`. Learner 4/5: Q15 distractor now "run the disk repair tool" (`no-backup`); the rule "no step touches the machine until files are safe" is stated; new check l3-k-click (restart offered on a failing drive).
- Learner 2: account changes (reset, new device) count as the user's side, stated in Step 1. Learner 6: "Move 3" label removed. Learner 7: glosses for add-in, USB hub, docking station, network switch, router, company storage, log, print server. Learner 8: call-back wording replaced by the log-and-times answer.
- Ruling 8: wrong options reworded to the same length and tone; right answers no longer the longest; "Nothing:" openers varied.

### Lesson 4
- Ruling 1, 4-1, 4-2, learner 2: no number taught as a rule (text says no source gives one; each ticket's numbers differ and are the technician's own pick). At the limit: narrow it down. All "hand on after it fails" feedback replaced (limit questions, outlook, r-first, k-limit). l4-m-note now shows a quoted desk rule ("Hand on after 20 minutes on one ticket") and is the only place handing on is right.
- 4-3: text says own memory is a source of the known fix; the article is for when you have not seen it. 4-5: workaround line added. 4-4: "none was a test that splits"; right answer "very little". 4-6: m-search states the article exists. 4-7: k-reset reason says an article can carry an erasing step without its own backup step.
- Learner 1 (arithmetic): l4-q-time rows 4 + 11 = 15; l4-r-stop total 5 (was 8). Learner 3: a restart is a fair first try if not already done; the worked ticket says Jo's is spent. Learner 4: "cheap enough to try within a limit". Learner 5/6: stop and limit wording varied per question; new l4-q-notyet (limit not reached, so keep going); lookalike wrong options; k-cost right answer shortened. Learner 7: word glosses in the lesson and inline (cannot reproduce, cache, driver, print queue, troubleshooter, profile, portal, sign-in loop, Wi-Fi card, audio device). Learner 8: new check l4-k-minutes (limit reached by minutes).
- "Move 4" label removed from l4-m-move.

Tests: `node tests/lessons/lock.mjs && node tests/validate-lessons.mjs` show no failure naming l3 or l4. Other lessons' failures (l5 to l8 words, V73 reading share, an l8 item list) are not mine.

## Lessons 1 and 2

### Lesson 1 (rulings 3, 4, 5, 8)
- 1-1, learner 1 (problem vs incident): "many people hit by one fault nobody has explained" is gone. A problem is the same fault again, with the desk's rule (two or more earlier reports); many people at once is an incident with high impact, said in the lesson and in the tells of l1-p-claims and l1-k-records.
- 1-5 (boundary): the rule is stated; new l1-r-once (one earlier ticket, so incident) and l1-q-unrelated (history of unrelated faults, incident); new l1-q-dates (problem from the user's own dated list, no table). Kind options now shuffle (learner 5).
- 1-2, learner 8 (request): "Nothing is broken" dropped everywhere; a request is a routine job with fixed steps. "I have never had access to it" added to l1-q-folder. l1-k-temps reworded (no longer a "this afternoon" start); l1-r-nurses no longer about booking patients.
- 1-3, 1-4, learner 2, 3, 4 (table): notes rewritten as this desk's own (3 hours; workaround makes urgency medium; patient care defined) and the lesson says every desk has its own. l1-r-badge is now high/high (Critical); l1-q-kiosk stays High through the workaround; pharmacy labels became a stock report; Wi-Fi tickets reworded so no stopped work is rated low. Group 2 tickets now ask impact and urgency too (learner 6).
- 1-6, 1-7 (nine moves): numbered 1 to 9, sourced to CompTIA's six steps and ITIL/KCS, "7 or 8, then 9"; one line that rating is not choosing what to open first.
- Learner 7 (words): workaround, login, shared folder explained in the lesson.
- Not changed: a learner view cannot show the mix share; lesson 1 has no mix.

### Lesson 2 (rulings 8, 10)
- 2-1: closed questions are for confirming after the story; the lesson says so and the wrong options are "as a first reply".
- 2-2: an open email proves nothing about the internet (story end, turn text, say-back). 2-3: certificate warning glossed; the ticket also goes to security if the site was unexpected. 2-4: story end says the other two get their own tickets. 2-5: "worse" and the greeting claim reworded.
- Learner 1: wrong options lengthened and varied; new `added-fact` slip and a plain, long wrong say-back that adds a fact in each say-back question; open questions shortened in some. Right article is now in a different row in each article question.
- Learner 2: l2-q-call has three turns; the second answer is still a label, so a second open question is right and a say-back is wrong.
- Learner 3: tap questions have a fault-like wrong line ("slow, then freezes") and the right line sits in a different place. The line "nothing is marked before the answer" is the engine's text for the help panel, not in my files.
- Learner 4: k-call1 `cut` reason is "you chose without asking". Learner 5: k-call2 right reply opens with thanks (no promise).
- Learner 6: the mixed group declares `mix: { from: ["l1"], share: 0.3 }`; the learner view does not print it.

### Lessons 7 and 8 (rulings 1, 3, 6, 7, 8, 10)
New slips in subject.js: no-id-check, dropped-pattern, cause-as-fact.
Lesson 7
- Research 7-1: closing on the user's yes is credited to ITIL 4; the A+ list is credited only for the follow-up. 7-6: "a published standard", not "around the world".
- 7-2, learner 4, 10, ruling 7: the three-day auto-close is gone. A silent user gets another follow-up and the ticket stays open (l7-r-quiet rewritten; new check question l7-k-quiet; check is now 5 of 6).
- 7-3, ruling 1: "your 20 minutes" is now always the desk's quoted rule (l7-p-limit, l7-k-hand, l7-s-hand). Lesson says a failed known fix means narrow down, not hand on. "Cannot reproduce" option dropped.
- 7-4: lesson says move 8 stands in for 7, then 9. 7-5, learner 5, ruling 3: problem versus incident defined; a desk's rule gives the repeat count; wrong answers use the new dropped-pattern slip instead of wrong-kind.
- Learner 1, 2, 6, ruling 8: wrong options now as long and as polite as the right one, right answer in varied places, wrong notes long but missing the facts (words, setup, results); cause options rewritten (cause-as-fact, blamed).
- Learner 3: second failed change line in the tap question. Learner 7: "shortened but not relabelled, leave out insults". Learner 8, ruling 10: VPN, hotspot, driver, cache, mail profile, print service explained. Learner 9: "how to reach you" in the order list.
- Ruling 6: the password-reset question has the desk's identity check first.
Lesson 8
- 8-1, ruling 6: identity check taught in step 2, in the worked ticket, p-lockout, r-confirm; new l8-q-id and check l8-k-id (no-id-check slip; check is now 4 of 5 plus four slip rules, learner 5).
- Learner 1, 7, ruling 8: wrong replies now also say sorry and give a time but argue, blame, promise or use jargon; right replies vary in length and wording.
- 8-2, 8-7, learner 2: p-next right answer is a loaner plus a test (new part-first wrong option); k-meaning and s-monitor offer a test before a fix; q-jargon no longer promises when it clears. 8-3 done the same way.
- Learner 3, 4, 6, 8: step 2 says an open question can be the whole first move, "I understand" alone is not saying it back, a polite one-minute check is not arguing; r-words leaves out the insult.
- 8-4, learner 9: evidence paragraph is one sentence with the studies separate and "limited, shops and banks". 8-5: repeat lockouts are raised as a problem. 8-6: "say back what they told you". Ruling 10 glosses: spooler, firmware, DNS, cache, shared inbox, loaner, escalating, approved list, queue.

### Lessons 5 and 6 (rulings 8, 9, 10)
New slips in subject.js: one-fault, credited-one.
Lesson 5
- Learner 1, 8, ruling 8: every "which test" and call question now has wrong options that are sensible but do not split (a co-worker testing something else, a repeat, a question about age or date) beside the fixes; the right test varies (other printer, moved monitor, web page, other account, sign-in screen, test account, part swap). New l5-s-boot (before or after sign-in, co-worker option is the distractor). Right option is no longer usually the longest.
- Learner 2: Ben's computer feedback reworded. 3: l5-g-marco no longer has the stray row. 4: l5-k-wifi lists two causes, so the phone does cut in half. 5, research 5-4: l5-k-lin uses the desk's test account (explained); lesson says a company account works on any company computer. 6: "cheapest test, which may or may not be the favorite's".
- Research 5-1: the web page row says "internet"; a company server needs its own check; worked ticket reworded. 5-2, ruling 9: one-fault line in the lesson, new item l5-g-two with the new slip. 5-3, 5-5: header comments corrected.
- Learner 7, ruling 10: port, router, server, Windows reinstall, test account explained where first used.
Lesson 6
- Learner 1, research 6-6: one round everywhere (list, test, cross off, change one, look, note) in the lesson, l6-s-order (six steps) and l6-k-order.
- Learner 2, 3, 4, 9: "next move" questions now carry a clue in the ticket (the password change, the typed address) or a test result, and the wrong options include a single change on a ruled-out cause; the notes (Vik, Uma) have long wrong notes (credited-one, vague-note), the right one is not the only one without "and".
- Learner 5, 6, 7: browser cause reworded to the first browser's own settings; the folder is stated to use the same Wi-Fi; "same mail account".
- Research 6-1: the lesson says one change at a time is a working habit, not a sourced rule. 6-3: no "quicker" claim; batching allowed when trivial. 6-4: Joy's password changed over the weekend. 6-5: office Wi-Fi ruled out, laptop's own Wi-Fi settings stay; single-fault line. 6-2: laser printer (cleaning routine, toner cartridge) in l6-k-uma and l6-r-streak. 6-7: network phone and wall port.
- Learner 8, ruling 10: power-save mode, docking station, port, network phone explained.
Left: learner 4 of lesson 6 (right answer without "and") is only partly met; about 14 of 33 right options are still the longest.

### Lessons 5 and 6, round 2
Lesson 5
- Learner 1: l5-g-two says Dee's monitor and computer work. Learner 2: the two call questions (l5-x-newpc, l5-k-call) say "you have his/her story" and the age and "when did it last work" answers say the story is already in, not that asking is wrong. Learner 3, 4: port, memory, Wi-Fi card, factory settings explained where first used.
- Learner 5, 6: a test "changes nothing you cannot put straight back"; a swap is a test; a quick known fix (Caps Lock) comes before the list, and Nadia has already retyped three times. Research L5-N1: "five cheap tests", no frequency claim.
- Pattern: l5-g-reset has a cheap non-splitting third way (press Print again); l5-s-fav no longer has the only "list" option; new l5-g-port, where the right test looks like a repeat (same mouse, other port).
Lesson 6
- Learner 7: the lesson teaches how to pick the next cause (cheapest test among those left); causes tables with test and time in the worked ticket and the next-move questions (p-mail, g-quinn, k-scan). Learner 8: a known-good swap is a test, keeping it is the one change; l6-k-pat now has that shape.
- Learner 9, research L6-N1/N2, ruling 12: the trivial-changes caveat is gone; reasons say "cannot tell which did it, and a change you did not need stays in"; "feels faster" removed (Hana, Ravi); the time of one change is given in the ticket. "Habit of careful technicians" is now "habit this course uses".
- Learner 10: router, saved networks, toner explained. Learner 11: l6-r-ned is now a second-fault question (shape varies).

## Lessons 1 and 2, round 2 (rulings 11 to 15)
Lesson 1
- Learner 1, 2, 3, research L1-N3: "work stopped" defined in the table note (both copies); Hui has a workaround and "rest of my work is fine"; Sofia has "rest of my work is fine"; Ines "by 3 PM", Omar "by 4 PM", the kiosk "by 1 PM"; the claims ticket now says there is no other way to send them (noon is 3 h 40 min away, so urgency rests on no workaround).
- Learner 4: Jun Park, Priya, Wen, Lena, Pavel, Hui, Ben, Yusuf, Noor: names or they, no guessed pronoun.
- Learner 5: the 8:20 question is answered in the table step; priority decides the order, ties go to the earlier deadline; the "not the same" sentence is gone.
- Learner 6: new ticket l1-q-again (polite, "again", one earlier record, an incident) in the second group.
- Learner 7: the check says a ticket is right only when kind and priority are both right.
- Learner 8, research L1-N1, L1-N2, ruling 15: CompTIA's six steps, the nine moves as their version; ITIL and knowledge-centered service explained; move 9 worded plainly; ITIL keeps the user's ticket an incident; disk and server explained.
Lesson 2
- Learner 9: Sandra uses "the Outlook program on my Windows laptop"; article renamed "Outlook program".
- Learner 10: step 1 teaches several problems in one message (find out which stops work, one ticket each); the wrong reply is now just choosing for her.
- Learner 11: step 1 teaches re-questioning until the answer is not a label or the user's own cause.
- Learner 12: Outbox, Offline, system, license explained; "mid-job" worded plainly; the security-team routing is stated once as this desk's rule; the scolding wrong reply is "What were you thinking...".
- Learner 13: say-backs open differently ("Let me check I have it", "Here is what I heard"); the wrong say-backs also end "Is that right?"; wrong first replies include "Tell me ..." that is jargon or loaded, the right ones open "Can you describe" and "Which program".
- Cross-lesson 19b: the wrong screen says a restart is a fair first try once the story and changes are known.

## Lessons 7 and 8, round 2 (rulings 11 to 15)
Lesson 7
- Learner 12: step 1 now says tell the user what you changed, then they try, then the yes (matches the order question).
- Learner 13, 16 and ruling 7 as overridden by the brief: a silent user gets a follow-up schedule in a quoted desk rule (days 1, 3, 5, a different way each time; ticket stays open until the user confirms; after day 5 with no answer it closes as "no answer, not confirmed", never "fixed"). l7-r-quiet is a day-3 ticket (follow up, do not close); l7-k-quiet is a day-6 ticket where closing as "no answer" is right, so "close" no longer decides the answer.
- Learner 14: ticket notes, hand-on notes and drafts are drawn as a desk ticket (email form), not the "note after an argument" form. Learner 15: l7-q-field says "likely ... not proved". Learner 16: ITIL 4 and the A+ objectives explained; moves named, not numbered. "Hand on" and "escalate" are defined once as the same thing.
- Learner 17 / L7-N1: l7-r-words keeps his exact words, shortened; "this course leaves insults out" is labelled as this course's practice. L7-N2: l7-s-hand lists three different tries. L7-N3: the 2.5 identity check is labelled a judgement call.
Lesson 8
- Learner 18, 19, L8-N1, ruling 11: l8-k-id calls the number on file; l8-q-id looks the manager up in the directory, and its desk rule says a number or name the caller gives is never used.
- Learner 20: "escalate" is gone from lesson 8; callers "complain to your manager". Learner 21: step 3 says a plain-words cause on request lowers anger, a defending explanation does not. L8-N2: "often the cause".
- Learner 22, ruling 13: facts moved into the stems (stock room, spare laptop free, DNS lag found, folder checks done, 4 working hours). Learner 23: the three-tickets rule is in the worked ticket and l8-p-lockout. Learner 24: l8-r-words quotes his full words. Learner 25: no result times promised; clock times (5:00) used.
- Patterns: one right reply starts "I am sorry, but" (l8-k-promise) and is not the longest; l8-q-id's wrong reply is the longer one with a time. Users' chat lines are drawn as chats.
- `no-repeat` slip removed from subject.js (unused).

### Lessons 3 and 4, round 2 (rulings 11 to 14)
Lesson 3
- Learner 14: Sam's question is "erase his saved files"; a restart loses only unsaved work, so save first. 15: hard drive/disk, Office, Outlook, shared drive explained. 16: new l3-q-backup (a recent backup exists: open one file, no second copy). 17: new l3-q-quiet (nothing found yet, put particulars to her) and l3-m-short (short right line).
- Learner 18: right options name only what the record shows (update and restart). 19a: "no step that could change or erase files". 19b: step 2 says a restart is fine once you have the story and the changes. 19c: the desk-made account change is quoted as this desk's rule (lesson and l3-q-onlyme). 19d: Dana Ortiz is billing; Priya Nair renamed Petra Lund.
- Research N1 (as 19a), N2 (l3-r-print: "usually", "the log decides"), N3 (research note line 356 recast: show-me from IT19; logs and times a judgement call), N4 (slip no-repeat deleted from subject.js).
- Option lengths rebalanced (right option longest 6 and shortest 3 of 17).
Lesson 4
- Learner 20: stems of l4-p-wifi, q-outlook, q-headset, k-video and the worked ticket say the story and the change are in and no step loses files; step 1 says this move follows the last two parts. 21: "This desk has no rule about handing on" in every ticket with a hand-on option (including check l4-k-minutes). 22: step 2 says an article step that erases files is not a quick try. 23: "Tries are your own". 24: toner, Office, shared drive, audio device, re-seated explained or reworded. 25: l4-k-limit wrong option names tries and minutes but sets them after the first try; l4-q-quick right answer no longer the shortest. 26: l4-p-stop reason says the tries ran out first.
- Research L4-N1: step 2 says the two-part limit is a working habit, not a sourced rule.

## Round 3 (lessons 1, 3, 7, 8; rulings 16 to 19)
Lesson 1
- D1: l1-q-again is now a document scanner in the records office (archive scans, not patient care, due 5 PM, slow scanner in room 2 as workaround); impact and urgency stay medium.
- D2 / M-1 / ruling 18: step 2 says the nine moves are CompTIA's six steps plus the desk's sorting and hand-on (ITIL) and a reusable write-up split from documenting (KCS); the current A+ exams do not test the six steps, older exams did.
- D3: claims-ticket urgency reason rests on "no other way to send them". D4: disk ticket says no message yesterday. D6: ticket numbers now rise with date in every table. D7: Hui's printers named (pharmacy printer Offline; old floor 2 printer works).
- M-2 "five weeks"; M-3 / ruling 19: priority is a rating, desk rule "open the highest priority first", no tie rule; M-4 VP of Sales renamed Maren Holt.
- D8 (pattern answers) not reworked: options are generated from the table's glosses; option-lengths is clean.
Lesson 3
- D2 / M-7: the quoted wording is called "CompTIA's older exam wording"; the current exams keep the six steps as a recommended method; "no second backup" is labelled this course's reading.
- D5: l3-m-move says the story was said back and the knowledge base searched with no match. D9: repair on a failing drive can make it worse, copy first. D10: sync and driver glossed. M-8: frequency words cut.
- D8: check items l3-k-drive (laptop sent back to supplier) and l3-k-nothing (password reset, shared drive) no longer reskin practice items.
Lesson 7
- B-1 / ruling 16: no day-5 close; after day 5 the note says "no answer", the desk lead is told, the ticket stays open (rule block, l7-r-quiet, l7-k-quiet). Ruling 17: worked ticket, lesson step 1 and items use confirm, note, close.
- Items: loaner dock stated free; 20-minute start time stated; hand-on B gets the password clue; l7-r-tell uses "write her at 5:00" with the time stated; l7-k-pick wrong note is now a structured note with a relabelled quote and a cause stated as fact. Header: identity check is the desk's own rule, A+ Core 2 2.5 lists impersonation as an attack.
Lesson 8
- Gloss added for update logs and print spooler (first use); l8-p-first states a technician is free; l8-k-promise promises "whatever the supplier has told me", not a delivery time; l8-k-policy states the approval request; l8-k-meeting states you know almost nothing yet; l8-r-words repeats the insults rule; l8-r-confirm uses confirm, note, close.
- Step 3 gives the example pair (plain cause vs defending the desk); "work they cannot do is often the cause" reworded; step 2 and both headers label the identity check as the desk's own rule.
