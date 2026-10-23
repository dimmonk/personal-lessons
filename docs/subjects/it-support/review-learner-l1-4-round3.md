# IT Help Desk, lessons 1-4: cold learner review, round 3

Reviewer: cold beginner, read only the learner views `it-support-l1.md` to `l4.md`. Every practice and check question was answered from what the lesson taught, before reading the mark.

## Verdict

| Lesson | Verdict | Check score vs pass rule | Blockers |
|---|---|---|---|
| L1 What kind of ticket, and how soon | FAIL | 6 of 6 (needs 5). Practice: 1 miss by reasoning (Item 10) | 2 (D1, D2) |
| L2 Getting the story | PASS | 5 of 5 (needs 4). Practice: no misses | 0 |
| L3 What changed, and protect the data | FAIL | 6 of 6 (needs 5, none touched data first: met). Practice: 1 miss by reasoning (Item 16) | 1 (D5) |
| L4 The known fix, and when to stop | PASS | 6 of 6 (needs 5, none past the limit: met). Practice: no misses | 0 |

Blocker count: 3 (D1, D2, D5).

## Way of deciding, per lesson (written before the first practice question)

**L1.** Kind: it worked and stopped or got worse = incident; the user wants a routine service = request; two or more earlier reports of the same fault (in the records or listed with dates by the user) = problem. Impact: count people and the work (over ten, or patient or billing work = high; two to ten, or one person with no other work = medium; one person with other work = low). Urgency: deadline within 3 hours, or stopped with no workaround = high; needed today, or stopped with a workaround = medium; days = low. Then read the box in the table. Titles and capital letters count for nothing.

**L2.** Do not fix or guess first. Ask one open question ("what do you see when..."). If the answer is still a label or the user's own cause, ask openly again. Say back only what they told you, in their words, with no added fact and no cause. Search the knowledge base with the fault words (the message, the program name), not feelings or deadlines, and match both symptom and setup. Several problems in one call = several tickets; start with the one stopping work.

**L3.** "Nothing changed" means nothing they noticed: check the records and put particulars (new program, device, update, password, move). Many people, same day = company side first, but the records decide; a change many people made themselves is the users' side; a change made to one person's account is that person's side. Before any step that can erase files (clean install, factory reset, replacing the drive or computer, deleting a profile): copy the files and open one to check, unless a recent backup exists (then just open one from it). On a failing disk, even a restart is a risk. A fault that comes and goes: collect the times and match them to the log.

**L4.** After story, change and backup, try the known fix: search the knowledge base, match "applies to", follow the article as written. Pick the limit (tries or minutes, whichever runs out first) before the first try. At the limit, stop, write one line per try (what, minutes, result), narrow down; hand on only if the desk's rule says so; never close as "cannot reproduce". An article step that erases files needs a copy first. Fix or flag a stale step.

## Defects

### Blockers

**D1. L1 Item 10 (film scanner): marked answer is arguable and needs a fact the ticket does not give. BLOCKER.**
Impact is marked Medium ("two people use the scanner") although the lesson's own High rule includes "a task done for patients (check-in, records)" and the ticket says the scans must reach the doctors. A beginner reasonably reads radiology scans as patient work and answers High. Urgency is marked Medium, but the ticket never says whether there is a workaround; "Not connected" means the scanning is stopped, and the rule says stopped with no workaround is High. Item 1 states "We have no other way", Item 6 states the paper workaround; Item 10 states neither. Reasoned answer: High and High = Critical, marked Moderate.
Fix: either add one line (for example "We can still scan on the machine in room 2, but it is slow", and make the scans clearly not patient-care work, such as an archive) or change the marked answer. Simplest: replace the scanner with a non-patient device (plate printer in the lab store) and add the workaround line.

**D2. L1 Step 2 says CompTIA's six steps are "left off the exams", and L3 Step 2 cites CompTIA's own wording ("back up if applicable"). BLOCKER (contradiction between lessons, possibly false).**
L1: "CompTIA left its six steps off the exams ... you will not be tested on the nine moves". L3 then quotes CompTIA's wording as if from the exam material, and the course goal is to pass both A+ exams. As far as I recall, the best-practice troubleshooting methodology (identify and back up, theory, test, plan, verify, document) is a listed objective on the A+ Core 1 exam. A learner told it is not tested may skip it.
Fix: verify against the current objectives. If it is an objective, say so in L1 ("the six steps are on the exam; the nine moves are the desk's extension") and add a plain statement of where each CompTIA step maps to a move. If it is not, remove "if applicable" as a CompTIA quotation in L3, or say it comes from the study guide.

**D5. L3 Item 16 (which move comes next): marked answer skips a move the item does not say was done. BLOCKER.**
L1 and L2 teach move 2 as "get the words AND search what the desk already knows". The item says Lena has told her story and you have not found what changed; it never says the knowledge base was searched. A learner who follows L2 ("say it back, then search the knowledge base") picks the first option and is told "You already have her story", which is wrong against what was taught.
Fix: add "You have said it back and searched the knowledge base; nothing fits" to the stem, or reword options so that only the knowledge-base step is not already done. (L4 Item 12 is built correctly: the story, change and backup are stated.)

### Minor

**D3. L1 Item 1: the noon deadline is 3 hours 40 minutes from 8:20, yet the reason cites the deadline for High urgency.** The correct reason is "stopped with no workaround". Fix: change the reason to lead with "no other way to send them", and drop "must go out by noon" from the urgency reason.

**D4. L1 Item 7 (disk almost full): kind marked incident for a warning message with everything still working.** Arguable (a learner can call it a request for a look, or a problem). Fix: say "it worked yesterday without the message and now shows it", or choose a clearer stopped-working case.

**D6. Ticket numbers and dates are not consistent across tables.** L1: 4101 is Sep 22 but 4093 is Sep 23; 4150 is Oct 9 but 4140 is Oct 5 and 4155 Oct 9; 4170 is Oct 8; 4165 and 4166 are both Oct 12; 4189 (Oct 15) is below 4192 (Oct 17) but above 4188 (Oct 16). A careful beginner notices numbers that do not increase with time. Fix: one number series by date.

**D7. L1 Items 12 and 13 contradict each other.** Hui's printer is Offline at 9:20 (Item 12), and five minutes later "the old one works" (Item 13). Fix: make Item 12's printer a named one ("the pharmacy printer") and Item 13's "the old one" the floor-2 one, or change Hui in Item 13.

**D8. Many items can be answered by pattern rather than reasoning.**
- L1: the right urgency is whichever option mentions the stated time; the right kind is found by the words "again" or "worked yesterday".
- L2: the right first reply is the only one that starts with "What/Which/Can you describe"; the right say-back is the longest one that starts "So you..." and adds nothing.
- L3: every "Tap the line that tells you what changed" has the right line as the one that is neither symptom nor deadline; check 19-23 repeat practice items 2, 3, 7, 10, 13 with new names (Check 22 = Item 7, Check 21 = Item 10, Check 20 = Item 3).
- L4: "which article" is always the row with both matches; "limit reached" is arithmetic with the option "one more" always wrong.
Fix: vary option shape (a say-back that is short, a right first reply that starts with "Can you show me"); make at least one check item per lesson not a reskin of a practice item (L3 especially).

**D9. L3 Items 6 and 19: "A repair that keeps files is different, but you do not rely on it" (Step 2) is vague.** Check 19 and 23 then mark a disk repair tool as wrong because it "can make damage worse", which the lesson never states plainly. Fix: add one sentence in L3 Step 2: "Running a repair on a failing drive can make it worse; copy first."

**D10. IT words used before they are explained, or never.** "Sync" (L3 Item 15, "email will not sync"), "driver" (L3 Item 10 option; explained only in L4 Step 3), "Teams" (L4 Item 8, Check 15), "server" (explained only in L1 Item 6 text, then used in L2 and L3), "DNS", "spooler", "CPU", "Task Manager", "event log" (all appear in wrong options only, flagged as jargon, so harmless). Fix: gloss "sync" and "Teams" once at first use; move the "driver" gloss to L3.

**D11. L2 Step 1 teaches the security-team rule (clicked past a browser warning on an unintended site) but Check 16 never asks the learner to apply it.** The right answer asks "Which site were you opening?" and the feedback mentions the rule after the fact. Not wrong, but the taught rule is untested. Fix: add a later item where the site was not meant and the learner must route to security, or drop the rule from L2.

**D12. L2 Check 15 first-turn feedback labels "I will take the email first" as "argued with the user or brushed off", which is a mismatch with what the choice does (picking for her).** The explanation text is right, the slip label is not. Fix: add a slip label "chose for the user".

**D13. L4 limit semantics: the tries tables count a restart as the technician's try (Items 4, 10, 13, Check 17), but Step 1 says a restart is a fair first try only "if the user has not already done one", and Item 4 does not say whether the user restarted.** Not wrong in the item, but a careful learner asks. Fix: add "She has not restarted" to those stems.

## Words and facts I could not answer without a fact not given

- L1 Item 10: workaround and patient-task status (D1).
- L3 Item 16: whether the knowledge base was searched (D5).
- No others found in L2 or L4.

## Contradictions between lessons

- L1 Step 2 (steps not on the exam) vs L3 Step 2 (CompTIA's own wording) (D2).
- L3 rule of thumb (several people, same day = company side) vs L3 Item 12: reconciled in-lesson by the line "a change many people made themselves is the users' side", taught before the item. No defect.
- L2 Step 3 and L4 Step 1 agree on when a restart is fair. No defect.
