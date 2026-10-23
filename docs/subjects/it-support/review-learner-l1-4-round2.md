# IT Help Desk, lessons 1 to 4: cold learner review, round 2

Reviewer: cold beginner, no IT training. Read only the learner views it-support-l1.md to l4.md. Every practice and check question was answered from the taught method before reading the mark.

## Verdict

| Lesson | Verdict | Check score vs pass rule | Why |
|---|---|---|---|
| L1 What kind of ticket, and how soon | FAIL | 6 of 6 by reasoning (pass: 5) | Passed the check, but defects 1 to 8 would trip a beginner |
| L2 Getting the story | FAIL | 5 of 5 by reasoning (pass: 4) | Passed the check, but defects 9 to 13 would trip a beginner |
| L3 What changed, protect the data | FAIL | 6 of 6 by reasoning (pass: 5, and no machine touched before data safe: met) | Passed the check, but defects 14 to 19 would trip a beginner |
| L4 The known fix, and when to stop | FAIL | 6 of 6 by reasoning (pass: 5, and no trying past the limit: met) | Passed the check, but defects 20 to 26 would trip a beginner |

Score against the pass rule is not the problem in any lesson. The fails are for defects a beginner would trip on and for answers reachable by pattern.

## Way of deciding I took from each lesson

**L1.** Three steps in order. (1) Kind: it worked and stopped or got worse = incident; routine job with fixed steps (access, new account, device, approved software) = request; two or more earlier reports of the same fault = problem. (2) Impact from the desk's table: more than 10 people or patient tasks or billing = high; 2 to 10, or one person who can do no work = medium; one person with other work = low. Urgency: deadline within 3 hours or stopped with no workaround = high; by end of today, or stopped with a workaround = medium; days = low. (3) Read priority from the grid. Titles, capitals and "URGENT" count for nothing.

**L2.** Do not touch or guess. First reply is an open question in plain words ("what did you see when..."). Then say back only what they told me, in their words, no cause, no added fact, ending "is that right?". Search the knowledge base with the exact on-screen message and program name, never with "slow", "weird", greetings or deadlines. Pick the article whose symptom and "applies to" setup both match. A hurried or sure-of-the-cause caller still gets open questions, never an argument or a restart.

**L3.** Ask what changed with particulars (user did / computer did / company did) and check the records, because "nothing changed" means nothing noticed. Rule of thumb: many people, same day = company side; one person (including a change made to their account) = their side; records decide. Before any step that can lose files (wipe, factory reset, new drive, delete profile) copy the files to company storage and open one. A failing disk makes even a restart a risk. A fault that comes and goes: collect the times and match them to the log, do not force it.

**L4.** Search the knowledge base with the user's words, match symptom and setup, follow the article as written. Before the first try, pick a limit (tries or minutes, whichever runs out first). At the limit stop, write one line per try (what, minutes, result), then narrow down. Hand on only if the desk's own rule says. Never close as "cannot reproduce". A failed guess rules out only itself. Fix or flag a wrong article step. Copy files before any article step that erases.

## Practice and check answers, by lesson

- L1: all 20 items answered correctly from the method. Check 15 to 20: Critical/incident, request/Low, problem/High, incident/Low, request/Moderate, incident/Moderate. 6 of 6.
- L2: items 1 to 11 and check 12 to 16 answered correctly. 5 of 5.
- L3: items 1 to 14 and check 15 to 20 answered correctly. 6 of 6.
- L4: items 1 to 14 and check 15 to 20 answered correctly. 6 of 6.

## Defects and fixes

### L1

1. **"Work stopped" is undefined, so urgency is arguable (Items 11, 13).** Item 11 (Hui, printer Offline, report by end of day) has no stated workaround, and the urgency rule says "work stopped with no workaround" is high. It is marked medium with no reason given. Item 13 (Ines, no Wi-Fi) is the same. I could not tell whether "work stopped" means all of her work or the one task. Fix: define it in the table note ("the person's main task is stopped") and add a workaround line to each ticket, e.g. Hui: "I can print from the other floor if I have to".
2. **"This afternoon" is not a time (Items 13, 14; Item 6 less so).** Item 13 is marked medium because the deadline is "more than 3 hours away", but "this afternoon" can start at noon, under 2 hours from 10:05. Fix: give a clock time ("results go out at 3 PM").
3. **Facts the Reason invents that the ticket never says (Items 5, 11).** Item 5 (Sofia) and Item 11 (Hui) are marked impact low "with other work to do", but the tickets do not say so. The impact rule turns on exactly that. Fix: add "the rest of my work is fine" to each ticket, as Items 4 and 18 already do.
4. **Wrong pronouns (Items 2, 9).** Item 9 is from Pavel Novak, but the feedback says "she wants it looked at today". Item 2 says "nothing of hers is stopped" about Jun Park, whose gender is not given. A beginner doubts whether the facts are right. Fix: use "he"/"they" to match the name, or "the new hire".
5. **The opening question is never answered, and one sentence in Step 3 contradicts itself.** The why asks "Which one do you open first?" and nothing answers it. Step 3 says rating is "not the same as choosing what to open first", then "the table matters most when several tickets wait". Item 5 gets Moderate with a meeting in 35 minutes, which looks like it should go first. Fix: add one line, "the priority sets the order you open them in; ties go to the earlier deadline", answer the 8:20 question, and delete the "not the same" sentence.
6. **Answers reachable by pattern.** (a) "again" or a history table means problem in every item that has it; no item has "again" with only one earlier report, so the "two or more" boundary is never tested. (b) "Please get/install/give me..." means request in every case. Fix: add a ticket that says "again" with one earlier record (incident) and an incident phrased politely.
7. **Check scoring unit is unclear.** Each check question has two parts (kind and priority). "At least 5 right" does not say whether a question is right only if both parts are. Fix: say so in the pass rule.
8. **Smaller wording.** "Move 7 or move 8 comes first, then move 9" and "CompTIA left this way of working off the exams, but it recommends it" are hard to follow. "Disk" (Item 7) and "server" (Item 6) are used without explanation. ITIL and "knowledge-centered service" are named and never explained, though they are not needed.

### L2

9. **Item 10 requires an unstated assumption.** Sandra says "Outlook on my work laptop". The right article is "Outlook desktop / Outlook program on a Windows laptop", but she never said Windows, and "desktop" reads like a desktop computer. The web article could also fit a laptop. Fix: add "the Outlook program on my Windows laptop", and rename the article "Outlook program".
10. **Check 15 relies on rules never taught in the lesson.** The right turn-1 reply ("which of those is stopping your work") and the feedback "three problems are three tickets, taken in the order her work needs" are not in the text. The wrong reply "start with email since slow email affects the most people" uses the same people-count logic L1 taught as impact, then marks it wrong for "not asking her". Fix: teach the rule in a step (several problems at once: ask which one stops work, one ticket each), and reword the wrong option so it is wrong for one clear reason.
11. **The "label vs message" rule appears only in feedback (Item 8).** Re-asking an open question until the answer is a real message, not a label or the user's own cause, is in the Reason only. Fix: add it to Step 1.
12. **Jargon not explained.** Outbox, Offline, macOS, license, "mid-job". The security-team routing in Check 16 feedback ("also goes to the security team") is taught nowhere. In Check 16, "you should never click continue..." is marked "blamed the user", although it is also plain advice. Fix: gloss each term, or add a short security-team line to L2, and make the wrong reply scold ("what were you thinking?") rather than advise.
13. **Pattern: shared phrases.** The right say-back always starts "So you..." and ends "Is that right?" and so do the traps, which differ only by one inserted clause. The right turn-1 reply is always the one starting "Tell me" or "What". Fix: put a trap that opens "Tell me" but asks a loaded or jargon question, and a trap that is one extra word longer.

### L3

14. **Item 6 (Sam): restart is arguable.** The question is "which steps could lose Sam's files", and Restart can lose unsaved work. The feedback says it needs no copy, but only after "save first". Fix: ask "which steps could erase his saved files".
15. **"Hard drive", "disk", "shared drive", "Office", "Outlook" are not explained.** The slide never says the hard drive is where the files live (Items 6, 11, Check 16, 20). Fix: one gloss in Step 2, "the hard drive is the part inside that holds the files".
16. **Pattern: "None found" means copy.** In every backup item the table shows "Backup | None found" and the right answer is "Copy her files to the company storage and open one" (Items 2, 11, Check 16, 20). No item shows an existing backup, so "if applicable" is never tested. Fix: add an item where the records show a backup made yesterday and the right answer is to check it opens and go on.
17. **Pattern: any option that says "nothing" is wrong.** Item 3, Item 10, Check 17, and the worked example all have a "nothing changed" option and it is always wrong. In the tap-the-line items, the right line is always the one with a day and a new thing (Items 1, 5, 12, Check 15). Fix: add an item where the honest answer is "nothing found yet, ask for particulars", and one where the right line is short.
18. **Check 19 and Item 7: right answer lists particulars the records rule out.** The records say "Programs added: None", yet the right option says "a restart, a new program, a new device". Fix: list only what the record shows ("the update and restart on Tuesday night").
19. **Contradictions.** (a) Step 2 says "until the files are safe, no step of yours touches the machine", but copying touches it, and so does reading the log. (b) Item 14 calls a restart "a fix tried before you know what changed", while L4 Step 1 calls a restart "a fair first try". The order explains it, but a beginner sees two verdicts. (c) Item 9 says a password reset by the desk is on her side. Step 1 says so, but the desk is the company and the slide invites a second guess. (d) Dana Ortiz is in Billing in L1 and "sales" in Item 2 here. Fix: (a) "no step that could change or erase files"; (b) in L2 and L3 say "a restart is fine once you have the story and the changes"; (c) quote the rule in the Item 9 feedback; (d) rename.

### L4

20. **Items 1, 5, 8 and Check 15 jump straight to the article.** They ask "what do you do first" with no mention of what changed or the backup, yet L3 taught those come before the fix and Check scoring depends on it. A beginner asks "do I check what changed first?". Fix: state "you have the story and what changed, and files are safe" in each stem, as Items 12 and 14 already do.
21. **Check 18 does not say whether the desk has a hand-on rule.** The wrong option "pass it to the next level now" is wrong only if the desk has no rule. Fix: add "This desk has no rule about handing on."
22. **Contradiction in Step 2 versus Items 11 and Check 20.** Step 2 says a quick fix "takes minutes, loses nothing". The articles in Items 11 and Check 20 contain a profile delete and a factory reset as steps. A beginner cannot tell whether to run those inside the limit. Fix: one line in Step 2, "an article may hold a step that erases; copy first, and that step does not make the fix quick".
23. **Does a restart the user already did count as a try?** The worked example says it is spent and not counted, but does it use one of "two tries"? Fix: state "tries are your own".
24. **Jargon not explained.** Re-seated (Item 13), toner, "audio device", "Repair on Office", "shared drive". Fix: gloss each.
25. **Pattern: shared phrases.** The limit-setting right answer is always "a number of tries and a number of minutes... whichever" (worked example, Item 2, Check 16), with wrong options starting "Nothing" or "Pass it on". In Item 6 the right answer is the shortest. Fix: put one wrong option that also names tries and minutes but sets them after the first try.
26. **Item 4 and the example overlap.** The limit is "two tries or ten minutes" and two tries used 9 minutes, so stop is by tries. The reader must work out which half of "whichever first" fired. Fix: put it in the Reason.

## Contradictions between lessons (summary)

- Restart: guess before the story (L2, L3) versus fair first try (L4). See 19b.
- Dana Ortiz department (L1 Billing, L3 sales). See 19d.
- L3 Check pass rule needs "none touched the machine first"; L4 items 1, 5, 8, Check 15 skip that step. See 20.
- L1 second field of an item header is the department; from L3 on it is the channel ("Email", "Chat"). Priya Nair is the VP of Sales in L1 and "Email" in L3. Fix: pick one.
