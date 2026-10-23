# Research check, IT Help Desk lessons 1 to 8 (2026-10-23)

Read: plan.md, research note IT1 to IT29 in full, subject.js, l1 to l8 lesson files, all items files (including the two check files). learning-science.md was not skimmed beyond the P findings the notes cite, because every cited finding in these lessons is an IT finding. Nothing was run; this is a read check. Not fetched: the ServiceNow page, the AXELOS request guide, the CompTIA 1101 PDF. Where a ruling needs one of these, it says so.

Severity: S = serious (teaches something unsupported, wrong or contradictory that a learner will act on), M = moderate, L = low.

## Rulings on the four builder doubts

1. **"Make it happen again" (reproduce), lesson 3.** Keep the idea, fix the source and the handling of faults that cannot be reproduced. Neither the research note nor IT2's quoted text contains it. The note's move 3 cites IT2 and IT17 for "can it be made to happen again", and neither quoted passage says that. (Older CompTIA step 1 wording, from my memory of the 1001 objectives, includes "duplicate the problem, if possible", but the note does not quote it. Verify against the 1101 PDF and cite it, which would turn this into a sourced "if possible" step.) The lesson's claims go past that: "A fault you cannot make happen again leaves you unable to tell a fix from a lucky day". The items then make the unreproducible case the right answer (see 3-1 and 3-2).
2. **"Two tries or ten minutes" (lesson 4).** The principle (decide a stopping point before guessing) is IT3's "knowing when to stop". The number is not sourced. The only time-box figure in the note is a vendor-blog 20 minutes for Tier 1 (IT13c), which the note says it did not rely on, and that is a whole-ticket box. Lesson 4 uses a try-count limit for the known fix. Lesson 7 uses 20 minutes for handing on. The two limits are never told apart (see 4-1, 7-3). Fix: keep "decide beforehand", present any number only as "this desk's rule" in the table of a ticket (never as the technician's own habit in the worked ticket), and say outright that no source sets a number.
3. **Impact and urgency table (lesson 1).** Acceptable as a desk's own table because IT12 says the table is the company's and the ServiceNow sample is a tool default. The five invented boxes are honestly marked in the file comment, but not in the research note or lesson. From memory, ServiceNow's default matrix gives Moderate, High, Low, Moderate, Low for the five invented boxes, which matches what was invented. I could not confirm this. Fix: re-read the ServiceNow page, print all nine boxes in IT12, and cite it. The notes' headcount thresholds ("more than ten people") are invented and must be labelled "this desk's". Two tickets break the table's own notes (1-3, 1-4).
4. **Definition of a service request (lesson 1).** The lesson's definition ("something the desk already has steps for") is close to the ITIL 4 glossary meaning (a request that starts a service action agreed as a normal part of service delivery). I have not read the AXELOS guide, so it stays a judgement call until read. The sentence "Nothing is broken" is too strong (see 1-2).

## Findings by lesson

### Lesson 1, What kind of ticket, and how soon (7)

- **1-1 (S) File l1.lesson.js, "Three kinds of ticket".** Text: "A problem is the same fault coming back, or many people hit by one fault nobody has explained." The items classify exactly those tickets as incidents: l1-p-claims (14 people, blank program), l1-k-records (11 people cannot sign in), l1-q-kiosk (three kiosks). IT10 puts investigating causes in problem management and restoring service in incidents; many people hit is an incident (a major one). Fix: delete "or many people hit by one fault nobody has explained"; define a problem by the repeat and the missing explanation only.
- **1-2 (M) l1.lesson.js and KIND_RIGHT.** "A request ... Nothing is broken." Account access, password resets and software installs are often requests though something does not work for the user. Also l1-q-folder: the ticket says "Please give me access", the tell says "access she has never had", which the learner cannot see in the text, so incident against request is ambiguous. Fix: add a line to the email ("I have never had access to it") or reword the tell; soften "Nothing is broken" to "The user is asking for a service, not reporting a fault".
- **1-3 (M) l1-r-badge.** Urgency is set to medium. The table notes say high urgency is "work stopped right now", and the ticket says "Staff are waiting at the door". With high urgency the table gives Critical, not High. Fix: raise urgency to high and the answer to Critical, or change the ticket so work is not stopped.
- **1-4 (L) l1-q-kiosk.** "Paper works for now" gives medium urgency, but check-in is still "work stopped" in the table's wording. Make the note say a workaround exists, or alter the notes to include "a workaround exists".
- **1-5 (M) Kind of ticket against ITIL (IT10, IT11).** The learner is asked to sort a ticket as "problem". In ITIL the repeat ticket is still an incident (the user is down now), and the problem is a separate record for the cause. The lesson half says so ("You still get each person working") but names the ticket's kind "problem". No threshold for how many repeats make a pattern is given (zero earlier tickets = incident; two or four earlier = problem; l7 uses two earlier plus today). Fix: word it "an incident that matches a pattern: get them working, and raise it as a problem"; say the count that triggers it is the desk's rule, and add one boundary ticket with one earlier ticket.
- **1-6 (M) "The nine moves" framing.** Text: "These nine moves are how help desk technicians work." The nine moves are the plan's synthesis of CompTIA's six steps, ITIL and KCS (plan: "the six steps with the desk's own steps put in their places"). No source observed technicians working in this order. Fix: say "a way of working built from CompTIA's six steps and the ITIL and KCS practices of a desk", not "how technicians work". Also the sixth CompTIA step's "implement preventive measures" is dropped without comment.
- **1-7 (L) IT12 caution not carried.** IT12 says rating impact and urgency is not prioritising and that prioritising is needed only when people are scarce. The lesson ends with "the table matters most when several tickets wait", which is right, but the check and groups ask a priority per ticket in isolation. Fine to keep, but say so once.

### Lesson 2, Getting the story (5)

- **2-1 (M) l2 lesson and items.** "A question like 'Is it plugged in?' gets a yes or a no and little else", and the items mark closed questions as an error (slip yes-no) even when they are good second questions (l2-k-open "Does it close every single time?", l2-r-open "Is the phone on Wi-Fi?"). IT17 asks for open questions to narrow, restate, and verify; it does not forbid closed questions. CompTIA's own step 2 says "question the obvious". Fix: teach "open question first, closed questions to confirm after"; keep the closed question as the wrong first reply, not as a wrong question.
- **2-2 (L) l2-q-call, ends.story.** "Her email works, so the whole internet is not down." A mail client with a local cache keeps "working" without the network. Reword to "her email is open and she can read it, so ask what happens when she sends or refreshes".
- **2-3 (L) l2-k-call2, Dr Hassan.** He clicked "continue anyway" on a certificate warning. The correct path only asks which site. The A+ objective 3.4 lists certificate warnings as a security symptom, and IT17 mentions handling confidential material. Fix: add a line that this ticket also goes to security if the site was not expected.
- **2-4 (L) l2-k-call1.** Three problems in one call are treated as "one story to sort". ITIL (IT11) registers separate incidents. Fix: the right ending should say the other two get their own tickets.
- **2-5 (L) Unsourced claims.** "A wrong guess said as a fact ... is worse" and "A greeting or a deadline will not match anything" are reasonable but cite nothing. IT14 supports only "search with the fault's own words". Keep, but remove "worse".

### Lesson 3, What changed, and protect the data (7)

- **3-1 (S) l3-p-black.** Right answer: "Have her work as usual while you listen, note what she does just before it goes black, and try the same steps yourself". The user said "I can't say what I was doing". The wrong answer "Swap her monitor cable" is penalised with slip no-repeat ("You cannot yet"). For a screen that goes black sometimes, a cable swap is a legitimate cheap test and the standard expert first look; the "can't tell a fix from a lucky day" argument applies to any fix. The reproduce step has been made a prerequisite for every other move, which neither the research nor IT3/IT4 supports. Fix: make the right answer "note when it happens and check the cable and logs", or move this to a fault the user can trigger.
- **3-2 (S) l3-k-close (a check item), l3-q-freeze.** Right answer for "I never see it coming" is "Have her keep it open and tell you the moment it closes ... try the same steps", which cannot be done: there are no steps. The expert action is to read the application's crash records and record times. The wrong answer "Repair Office" is rejected with no-repeat, and "Close the ticket until it happens again" is tagged closed-early, a slip defined as closing before the user confirmed. Fix: add the log check to the lesson; reword the "no steps" cases; use a slip that fits.
- **3-3 (M) l3.lesson.js "Make it happen again".** "A fault you cannot make happen again leaves you unable to tell a fix from a lucky day." Over-general (see ruling 1), and reproducing a fault that destroys data (a crash that corrupts, a disk that is failing) contradicts the same lesson's backup rule. Fix: sequence "back up, then reproduce if it is safe and possible".
- **3-4 (M) Rule of thumb on scope.** Text: "When several people have the same fault from the same day, the change is probably the company's" and the matching items. No source; IT2 only says to inquire about environmental changes. A shared update pushed to a group, or one shared dependency, could produce the same picture. Fix: label as a heuristic and name it as a judgement call; add one item where the change is a user-side change shared by a group.
- **3-5 (L) l3-p-reset, wrong option "again".** Slip fixed-first is attached to "Find out again what changed", which is not a fix. Use a more fitting slip (e.g. add "repeated-step") or mark none.
- **3-6 (L) l3-q-lose.** "Reinstall Windows" is listed as losing files unless copied. In-place repair installs and "keep my files" resets do not. A+ 1.x covers them. Fix: say "a clean install".
- **3-7 (L) Source note.** The file header correctly calls reproduce "a judgement call", but plan.md move 3 and research move 3 cite IT2/IT17 for it. Fix the citation as in ruling 1.

### Lesson 4, The known fix, and when to stop (7)

- **4-1 (S) Contradiction on what the limit triggers.** The lesson text: at the limit "Stop. Write one line for each try ... Then narrow the problem down". But the wrong-answer feedback in limitAsk, l4-q-outlook, l4-r-first and l4-k-limit says "Hand on after it fails, with what you tried", and l4-m-note says "You must now hand it on". Lesson 5 to 6 then teach narrowing as the next move, and lesson 7 hands on only by the desk's rule or time box. A learner gets two answers for "known fix failed". Fix: in all five places say "narrow it down; hand on only when the desk's rule or time box says so".
- **4-2 (S) The number.** See ruling 2. The worked ticket's step "Two tries or ten minutes, whichever comes first" is stated as what the technician decides, and every limit question accepts it as the example. IT3 gives no number and says the skill is judging when to stop. Fix as in ruling 2.
- **4-3 (M) Departure from IT3.** IT3 says an expert's quick fix comes from their own pattern memory after a short look. Lesson 4 narrows the "known fix" to the desk's article plus a few trivial restarts, and says the knowledge base is the beginner's memory (unsupported gloss). It never gives a case where the learner's own pattern knowledge is right. Fix: one sentence acknowledging pattern knowledge, with the article as the beginner's version.
- **4-4 (M) l4-q-cost.** "None of the four tests split the possible causes" calls them tests; lesson 5 says restarts and retries are fixes or repeats, not tests. Reason also says the four tries tell him "almost nothing", but a cable re-seat and a driver reinstall that fail do rule out those as loose-cable or driver-state causes in a narrow way. Fix: "none was a test that splits"; accept "very little".
- **4-5 (L) Time of the limit against the incident.** IT10 says an incident's purpose is to restore service quickly, and workarounds are valid. The lesson says nothing about offering a workaround while the limit runs. Add a line.
- **4-6 (L) l4-m-search.** The right answer says to search the knowledge base, but the item never says an article exists. Add "the knowledge base has an article for this".
- **4-7 (L) l4-k-reset.** The article's step 2 resets the laptop for a sign-in loop and step 3 restores from "backup". Plausible but unusual; an article that carries a destructive step without its own backup step is the lesson's point, so state that in the reason.

### Lesson 5, Cut it in half (5)

- **5-1 (M) "Can the computer reach the network? Open a web page" (table row r5, l5-w-price, l5-p-mail).** A page opening proves the internet path, not that the laptop can reach an internal server or the VPN. The worked ticket says "The laptop reaches the network, so the Wi-Fi is not the cause. Half the list is gone." IT4's own test is a ping of a known address, and the later network lessons will teach internal against external. Fix: word it "reaches the internet"; add a note that an internal share needs its own check.
- **5-2 (M) Single-fault assumption.** IT4 says the swap method "assumes the problem is with a single component"; IT5 mentions doubled faults. The lesson states that if the trouble stays when a part is swapped, the part is not the cause, with no caveat (also lesson 6). l5-k-monitor shows no second fault. Fix: add one line and one item where two faults give a misleading result.
- **5-3 (L) Plan against lesson.** Plan move 5 includes "compare with a working machine". The lesson has no compare item beyond the person/machine swaps. IT5's functional levels are deferred to units 2 to 7, which is fine; say so in the lesson header.
- **5-4 (L) l5-k-lin.** "Have a co-worker sign in on Lin's laptop" creates a new profile for them, which is slow on first sign-in, so the test is unfair, and signing another user in is a policy question. Use a local test account or the desk's test user.
- **5-5 (L) Stale comment.** File header says "There is no earlier lesson of this builder to mix in", but the lesson mixes in l3 and l4.

### Lesson 6, One change at a time (7)

- **6-1 (S) No source for "one change at a time".** The lesson and plan cite IT9 and IT3. IT9 is about fixation (write more than one cause, drop a ruled-out one). IT3 is about systematic elimination. Neither says to change one variable at a time. The lesson's title idea is common practice but not in the note. Fix: find and read a source (Cisco TSHOOT chapter 1 may have it; the note read that chapter) or mark it as a judgement call.
- **6-2 (S) Wrong IT fact, l6-k-uma (check) and l6-r-streak.** "Printer printed streaks. I cleaned the print head and replaced the toner." A print head belongs to inkjet and thermal printers, toner to laser printers. A gray streak with toner is a laser fault (drum, toner, fuser). A+ 5.6 pairs these on separate printer types. Fix: laser version "ran the cleaning routine and replaced the toner cartridge", or inkjet version "cleaned the print head and replaced the ink cartridge". Same for l6-r-streak's cause list.
- **6-3 (M) Time pressure.** The lesson says the one-at-a-time way "is the quick way" under pressure (l6-s-hana, l6-r-ravi). IT10 puts restoring service first, and IT7 notes performance falls under time pressure, but nothing supports the claim that single changes are quicker. Batching low-risk reversible changes during an outage is normal. Fix: say it costs a few minutes and keeps the cause known; allow batching when the changes are trivial and the cause does not matter.
- **6-4 (M) Worked ticket l6-w-joy.** The saved password "had changed last month" but the failure began "this morning". The story does not explain the timing, in a course that has just taught "what changed". Fix: make the password change recent, or say the old password was accepted until a lockout rule changed.
- **6-5 (M) "A test rules a cause out when its result could not happen if that cause were the one".** The phone joining the Wi-Fi does not rule out a laptop-specific Wi-Fi fault (band, security mode), and the lesson counts the Wi-Fi as ruled out. Fix: "the office Wi-Fi is up" is what the test shows, not that Wi-Fi is not involved; keep the laptop's own Wi-Fi settings on the list (the cause list already does this).
- **6-6 (L) l6-s-order.** "Change one thing", "test" and "check" are mixed; test and change are different moves (lesson 5 treats tests as changing nothing). Reword step names.
- **6-7 (L) l6-k-pat.** "Dial tone" with a wall jack suggests analogue phones; a large company desk uses IP phones. Use "no display, no dial tone on a network phone" and a network port.

### Lesson 7, Finishing: confirm, hand on, write it up (6)

- **7-1 (M) "so does the A+ list of what a technician does".** IT15 and IT17 list ticket content and a later follow-up to verify satisfaction; IT1's step 5 is "verify full system functionality". None says the user confirms before closing; IT11 (ITIL) does. Fix: attribute only to ITIL; cite A+ 4.7 for the follow-up.
- **7-2 (M) Auto-close rule (l7-r-quiet).** The plan's real-world test fails any ticket "closed without the user's confirmation", and lesson 7 teaches that a ticket closes after three working days of silence. The rule is the desk's invented one. Fix: use ITIL's two states (resolved awaiting confirmation, then closed by rule), and state in the plan's test that the desk rule is allowed.
- **7-3 (M) Two different "time limits".** l7-p-limit and l7-k-hand use "your 20 minutes", where L4 used "two tries or ten minutes" for the first fix and said to narrow down. The 20 minutes comes from a vendor blog that the note did not rely on (IT13c). Fix: say once that a desk may set an overall time box, label it as an example, and show it in the desk's table, not as the technician's own rule.
- **7-4 (M) Move order.** The nine moves list confirm (7), hand on (8), write up (9) as a sequence. Hand on is a branch (instead of confirming, or while the ticket is open), and l7-q-order omits it. Fix: in lesson 1's list and lesson 7, say "7 or 8, then 9".
- **7-5 (L) l7-q-problem and l7-k-problem.** The wrong slip wrong-kind is used for failing to hand on the pattern after closing, which is a different error. Add a specific slip.
- **7-6 (L) Overclaim.** "A method used by help desks around the world, called knowledge-centered service". IT14 supports an HDI standard and a consortium method; "around the world" is not in it. Also the ticket note and the KB article are treated as one thing; KCS captures the article in the workflow but a licence level decides who edits it. Reword to "a published standard".

### Lesson 8, When the user is upset (8)

- **8-1 (S) Account unlock or reset with no identity check.** l8-w-lockout, l8-p-lockout ("I am unlocking you now while we talk") and l7-s-confirm (password reset) unlock accounts for a caller or a chat with no check of who it is. A desk verifies the person first; the A+ exam (2.x social engineering) treats this as the classic attack. IT17 also lists handling confidential material properly. Not in the research, and the lessons teach the opposite by omission. Fix: add "after the desk's identity check" to the good replies and one item where the caller fails it.
- **8-2 (M) l8-p-next.** The right answer commits to "putting in a new battery now" for a laptop that shut off during a presentation, with no test. That is the guess-first move lessons 4 to 6 reject, and the other wrong option penalises only the promise. Fix: right answer uses a loaner or a first check; keep the replacement for after a test.
- **8-3 (M) l8-q-jargon.** The "good" reply says the address "clears by itself, usually within an hour" and "should work by about 2:30". That is a promise of a result outside the technician's hands, which the lesson forbids. Fix: promise the call back time and the check, not the clearing time.
- **8-4 (M) Evidence paragraph.** Text: "an apology and a clear explanation lowered anger and raised satisfaction". IT20 has separate studies (apologies and excuses gave higher satisfaction than justifications when the explanation was good; an employee explanation lowered complaint intention through lowering anger; over half of bank recovery attempts reinforced dissatisfaction). Fix: report them separately and keep "limited, from shops and banks".
- **8-5 (L) l8-w-lockout and repeat lockouts.** Three lockouts in a week is the lesson 1 pattern (a problem to hand on). The worked ticket never raises it. Add "and I will raise the pattern so the cause is found".
- **8-6 (L) "Say what it has cost them".** Reflecting the cost is not in IT17 or IT20 (IT17 says restate the issue). Reword to "restate".
- **8-7 (L) l8-k-meaning and l8-s-monitor.** Right answers fix a plan ("restore from backup", "swap the monitor and cable") before a cause is known. As with 8-2, offer a check first or label it a workaround.
- **8-8 (L) l8-p-tap.** Mixed ticket note with "Hi Mr. Cole" and the rest fine; no finding beyond noting the lesson's headline "three things not to do" is exactly IT17 and is well supported.

## Cross-lesson findings

- **Which move after the known fix fails (5 in the brief):** lesson 4 text, lesson 5 and lesson 7 say narrow down, then hand on by rule; lesson 4 feedback (five places) and l4-m-note say hand on. Resolved by 4-1.
- **Two time limits:** 4-2 and 7-3.
- **Close with or without the user's confirmation:** lesson 7 text and lesson 8 (l8-r-confirm) say never close on your test; l7-r-quiet closes by desk rule. See 7-2.
- **Kind "problem" against ITIL:** lessons 1 and 7 call a ticket a problem; ITIL calls the cause a problem. 1-5.
- **Identity:** lessons 7 and 8 unlock and reset without verification. 8-1.

## Departures from how the research says technicians reason

- IT3 (pattern-memory quick fix): narrowed to the article; see 4-3.
- IT3's time limit: no number in the source; see ruling 2.
- IT4/IT5/IT8 splitting: sound in lesson 5 except 5-1 (web page is not a ping to the right place), 5-2 (single fault), 5-3 (no compare).
- IT9: lesson 6 matches (list, drop what a test rules out) except 6-1 (the one-change rule has no source).
- IT10/IT11 incident, problem, request: 1-1, 1-5.
- IT13 hand-on: matched in lesson 7, but the time box number is a vendor figure (7-3).
- IT20: stated honestly as limited; wording in 8-4.

## Structures that look carried over from other subjects

- The check passes use "right min 4 of 5" and a "slip max 0" with named slips on every lesson. The slip list is shared across eight lessons (31 entries in subject.js), several used for the wrong error (3-5, 7-5). This is the engine's form from the other subjects, not drawn from this research. Keep, but make each slip mean one thing.
- The "mix" groups (share 0.3 from earlier lessons) follow the plan's IT25 interleaving, so they are sourced, but lessons 1 and 2 have no mix from anywhere and l5 carries a stale comment about it (5-5).
- "Why" openers, "common mistake" blocks and worked tickets with a wrong first guess: sourced by IT28 and IT9 in the plan. No finding.
- The "reserve" items and weekly review are the engine's, sourced by IT27.

## Wrong IT facts, in one list

- 6-2: print head with toner (l6-k-uma, l6-r-streak).
- 5-1: web page proves the connection to the internal server.
- 2-2: working email proves the internet is up.
- 8-3: DNS clear time promised.
- 3-6: reinstalling Windows always erases files.
- 6-7: dial tone and wall jack for a company phone.

## Count by lesson

| Lesson | Serious | Moderate | Low | Total |
|---|---|---|---|---|
| 1 | 1 | 4 | 2 | 7 |
| 2 | 0 | 1 | 4 | 5 |
| 3 | 2 | 2 | 3 | 7 |
| 4 | 2 | 2 | 3 | 7 |
| 5 | 0 | 2 | 3 | 5 |
| 6 | 2 | 3 | 2 | 7 |
| 7 | 0 | 4 | 2 | 6 |
| 8 | 1 | 3 | 4 | 8 |
| **Total** | **8** | **21** | **23** | **52** |

(Lesson 8 includes finding 8-8, which is a note and not a defect; so 51 actionable.)

## Three most serious

1. 4-1: lesson 4 teaches "narrow it down" after the known fix fails but five answers say "hand on", and 4-2 gives an unsourced number as the technician's own habit.
2. 3-1 and 3-2: lesson 3 makes reproducing the fault a precondition, and marks right the actions that cannot be done for faults that give no steps, while penalising a legitimate cable swap and omitting the logs.
3. 1-1: lesson 1 defines a problem to include many people hit by one fault, contradicting its own items, and 6-2 (wrong printer fact in a check item) is the next worst.
