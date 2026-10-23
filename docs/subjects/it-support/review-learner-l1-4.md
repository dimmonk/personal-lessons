# Cold learner review: IT Help Desk lessons 1 to 4

Reviewer: beginner with no IT training. Read only docs/learner-view/it-support-l1..l4.md.

Honesty note: the learner views print the marked answers inline, so I could not hide them. I wrote each lesson's way of deciding from its teaching text first, then answered each check question from that way of deciding, and only then compared with the mark. Where the mark and my reasoning differ, I say so. Practice items are scored the same way.

## Verdict

| Lesson | Verdict | Check score vs pass rule |
|---|---|---|
| L1 What kind of ticket, and how soon | PASS (fragile) | 5 of 6 vs "at least 5 right". I missed Q17 (read "start this afternoon" as high urgency). Reading the urgency line literally I also get 3 practice items wrong (see L1 defect 2). |
| L2 Getting the story | PASS | 5 of 5 vs "at least 4 right" |
| L3 What changed, and protect the data | PASS | 5 of 5 vs "at least 4 right" and "none touched the machine before protecting data" (met). Q15 distractor is arguable (defect 4). |
| L4 The known fix, and when to stop | PASS, with one wrong-keyed item | 5 of 5 vs "at least 4 right" and "none kept trying past the limit" (met). Item 9 is internally inconsistent (defect 1). |

## My way of deciding, per lesson

L1: Decide the kind first: broke after working = incident; asking for something the desk has steps for = request; the history table shows the same fault again = problem. Then count impact from people and work (not titles), read urgency from the deadline, and read the priority from the table's box. I used the history table as the signal for "problem".

L2: Do not fix or guess. Ask an open question in plain words ("what did you see when..."), say the story back in the user's own words and ask "is that right?", never state a cause, never use jargon, never blame or argue, then search the knowledge base with the fault's words (the message, the program) and pick the article where symptom and setup both match.

L3: Something changed. Put particulars to the user (new program, update, password, move, new device), check the records, and look at the company's side if many people have it from the same day, the user's side if one. Before any step that can erase files (reinstall, reset, replace drive, delete profile) copy files to company storage and open one to check. For a fault that comes and goes, make it happen again and write the steps down before trying fixes.

L4: Before the first try decide a limit (tries or minutes, whichever first). Search the knowledge base with the user's words, check the "applies to" line, follow the article as written, fix or flag a stale step. At the limit stop, write one line per try, narrow down. A failed quick fix tells you almost nothing. Copy files first if a step could lose them.

## Defects and fixes

### L1

1. Kinds overlap. The "problem" definition is "many people hit by one fault nobody has explained", yet Item 1 (14 people, blank program), Q13 (11 people cannot sign in) and Item 7 (three HR laptops, same message) are keyed plain incidents with no explanation of why not. Fix: restate "problem" as "the same fault coming back over days, shown in the history table", and add to Step 1 one line that many people hit at once is still an incident until it repeats.
2. "Work stopped right now" is in the urgency-high definition, but Item 6 (check-in screens down), Item 9 (printer offline), Item 11 (Wi-Fi will not reconnect) and Item 3 (screen lost connection) have work stopped and are keyed urgency medium. A literal reader gets them wrong; I did. Fix: change the high line to "a deadline within a few hours" only, or add "and no workaround", and reword Items 6/9/11 so the deciding words are the deadline, not the outage.
3. Q17 (logins for four temps who "start this afternoon") is keyed medium ("needed today") but also fits "deadline within a few hours". Fix: give the start time (for example "start at 4 PM" or "start tomorrow") or add a worked boundary example.
4. "Patient care or billing" makes impact high, but Item 6 is high for the whole clinic check-in while Item 9 (pharmacy labels) is keyed low, and Item 5 (a presentation) low. Never stated what counts as patient care. Fix: add to the impact note that "patient care" means a clinical task stopped for patients, and state it in Item 9's reason.
5. Pattern answers. Kind questions: the correct "problem" answer appears only when a history table is shown, and "Broken now" is the first-listed right answer in 8 of the 12 incident items. Fix: shuffle the option order on kind questions in practice and add two incident items that carry a history table of unrelated faults, and one problem item with no table but a user saying "again".
6. The priority question is answerable from the "if chosen" lookup text pattern (the table is printed under every item) with no reading of the ticket for Items 5-8 and 10 because impact and urgency are not asked separately. Fix: ask impact and urgency in every Step 6 and 7 item, or drop the table from a few so recall is tested.
7. Unexplained words: "workaround", "shared folder", "login", "incident/request/problem" as desk terms are fine, but "workaround" (Step 1) has no definition. Fix: add "a temporary way to keep working".
8. Item 5 reason says "access she has never had"; the email does not say so. Fix: add "I have never had access to it" to the email.

### L2

1. Length/wording pattern. The right answer is always the longest and starts "Tell me what you..." (open question) or "So you...[all facts]... Is that right?". Wrong options are short, jargon, or "So [cause]". A learner can answer without reading the ticket. Fix: add wrong options that are long and plain but wrong (a say-back that adds a fact the user never said), and a right open question that is short.
2. Call items: the correct reply at turn 2 is always "Let me say that back...". Pattern-answerable. Fix: vary the turn 2 situation so that sometimes a fresh open question is the right reply (the user's answer is still too vague to say back).
3. Items 3 and 11 (tap the line): in Step 5 the help bolds the correct line, so help gives the answer away and the "nothing is marked before the answer" line is false. Also the right line is always the one with the on-screen message. Fix: help should bold the type of words (e.g. messages on screen) in a worked sentence, not the answer; keep the tap items with plausible fault-like distractors ("it is slow, then it freezes").
4. Check Q15 feedback hindsight: "The printer was the one with a 4 o'clock deadline" is told only after, so "do email first" cannot be ruled out from the call. Fix: reword the reason to "you chose for her without asking", which is what turn 1 teaches.
5. Check Q16: the dentist/doctor asks "Did I break something?" and the keyed reply says nothing about that; arguable that an answer should acknowledge the worry. Fix: key reply to include "I will check, and thank you for telling me", still no promise.
6. Step 7 says about 30% from earlier lessons mixed in, but Items 9-11 contain none. Fix: confirm the mix is real in the build (or remove the claim from the learner text).
7. Unexplained words in distractors (fine as distractors) but "knowledge base" is explained; "Outbox", "environment line" used in Item 10: "Environment" column is taught; fine. "Spooler", "DNS", "TLS", "cert" appear only in wrong options, OK.

### L3

1. Item 6 (multi-select) says a restart loses nothing but unsaved work, yet Item 10 says a restart of a clicking, freezing laptop "is a risk to the files". Sam's desktop "sometimes will not start", so a restart is also a risk. Contradiction. Fix: add "unless the disk is failing (clicks, freezes, will not start)" to Step 2, and reword Item 6's Sam to a healthy computer.
2. Item 9: the change is "her password reset by the desk", which Step 1 files under "what the company did" and therefore under the many-people rule, while Item 9 keys "Rosa's own side". Fix: add to Step 1 that a change made to one account (a reset, a new device) counts as the user's side, or reword the record to "Rosa reset her own password".
3. Pattern. The "Nothing: X said so" option is always wrong and the "company" option is right exactly when a second table lists other tickets. The tap-the-line items always have the symptom first, the deadline last, and the answer in the middle. Fix: put the change line first or last in some items, and include one item where the table shows the other people but the change is on the user's side.
4. Q15 distractor "Find out what the disk warning says before anything else" is marked wrong, but the lesson's own order is find the change, then back up. A cautious learner can argue reading the warning loses nothing. Fix: change the distractor to something that touches the machine (run the disk check), or reword it as "Run the disk repair first".
5. Check rule "None touched the machine before protecting the user's data" is not stated in the lesson, and only Q15 offers a way to fail it. Fix: say it in Step 2 as the rule, and add a second check item where a quick, tempting touch (restart) is offered on a failing machine.
6. "Move 3" in Item 12 is a label the lesson never teaches. Fix: number the nine moves in L1 Step 2 and show the numbers on the move names in L3/L4 options.
7. Unexplained: "USB hub", "docking station", "add-in", "display driver", "network switch", "router", "company storage" (used as if known). Fix: one line each in a glossary box the first time they appear, or add the plain gloss ("the box that connects the floor's wires").
8. Item 4 asks the learner to "have her work as usual while you listen" on a phone call, which is physically odd. Fix: "ask her to call back or message the moment it goes black, and ask what she does before".

### L4

1. Item 9 is wrong-keyed by arithmetic: tries 1 and 2 add to 8 minutes (2 + 6), but the table says "Time used so far 17". The stated reason ("17 have passed") only holds if the total is correct. Fix: make the row 2 minutes 6 and the total 8 and change the key to tries (two used, three allowed), or change the rows so the sum is 17, for example 11 minutes for try 2.
2. After the limit the lesson says narrow it down (Step 3, Item 4, Item 9), but Item 12 says "You must now hand it on", and Item 5's feedback says "hand on after it fails". Contradicts the nine-move order (narrow, one change at a time, confirm, then hand on). Fix: reword Item 12 as "you are going to hand it on at the end of your shift" or "you pause"; and change "hand on after it fails" to "narrow it down after it fails".
3. Contradiction on restart. The worked example calls restarting her PC a "tempting guess" and rules it out, but Item 4 and Q16 count a restart as try 1, and Q17 says a failed restart "is not the fix". Fix: say in Step 1 that a restart is a legitimate first quick try if the user has not done it; the example should say Jo already did it so it is spent, not a rejected guess.
4. Item 6 asks "which is a quick fix", but Step 1 defines the known fix as a knowledge-base article. The keyed answer, turn Wi-Fi off and on, is not from an article. Fix: reword as "which is cheap enough to try within a limit", or show an article table that contains the step.
5. Pattern. The "what do you decide" answer is identical text in the worked example, Item 2 and Q15, and the "stop guessing, write one line, narrow down" answer is the same text in Item 4, 9 and Q16, so the learner can answer by sight. The wrong options start with "Nothing:" or "Close the ticket". Fix: vary the wording and add a wrong option that sounds like the right one ("Stop, write one line for each try, and hand it on" when the limit is not reached).
6. Q17's right option is the longest by far and contains its own justification. Fix: shorten, and put the justification in the feedback.
7. Unexplained: "cannot reproduce" (distractor in Items 4, 9, Q16), "cache", "graphics driver", "print queue", "troubleshooter", "audio device", "sign-in loop", "portal", "profile" (explained in L3 only), "Wi-Fi card". Fix: gloss the ones in right answers and Step text; "cannot reproduce" gets one line in Step 3 ("closing because you cannot make it happen again, which is not the same as fixed").
8. Check rule "none kept trying fixes past the time limit" is only testable by Q16. Fix: add a second check item where the limit is the minutes, not the tries.

## Contradictions between lessons (summary)

- L3 restart loses nothing (Item 6) vs L3 Item 10 restart is a risk on a failing machine. Fix in L3 defect 1.
- L1 "problem" = many people with one unexplained fault vs L1 keys for 11 to 14 people hit as incidents. Fix in L1 defect 1.
- L4 hand on after limit vs narrow down after limit. Fix in L4 defect 2.
- L4 restart as rejected guess vs restart as counted try. Fix in L4 defect 3.
- L2 and L3 Step 7 claim a 30% mix from earlier lessons that is not visible in the learner view.
