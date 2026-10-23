# Cold learner review, round 2: IT Help Desk lessons 9 to 13

Reviewer: fresh beginner, lessons 1 to 8 only. Read only the learner-view files for L9 to L13. No scripts run.
Method: wrote the way of deciding before the first practice question, answered each practice and check question from what was taught with the mark covered, then scored the check against its pass rule.

## Verdict table

| Lesson | Check self-score | Pass rule | Stuck / arguable | Blockers | Verdict |
|---|---|---|---|---|---|
| L9 Power button to desktop | 6 of 6 | 5 of 6 | 4 | 0 | PASS |
| L10 The parts inside | 8 of 8 | 7 of 8 | 4 | 0 | PASS |
| L11 Storage and RAID | 8 of 8 | 7 of 8 and data protected first | 2 | 1 (D11) | FAIL (one blocker, easy fix) |
| L12 Cables, connectors, screens | 8 of 8 | 7 of 8 | 4 | 0 | PASS |
| L13 Printers | 6 of 6 | 5 of 6 | 4 | 0 | PASS |

Blocker count: 1.

## Way of deciding, per lesson (written before the first practice question)

- L9: Six links in a row: power, self-test, firmware, boot drive, Windows loading, sign-in. Ask "how far did it get?" (light, fan, logo, words, sign-in, fails for everyone?). The fault is the first link that did not work; later links are ruled out. Cheapest test per link: other outlet or cable, monitor on another computer, firmware screen (drive listed? boot order?), stop code, another person signing in. If a drive may be failing or the files exist only here, copy them first. One change at a time. Burning smell: unplug, do not power on.
- L10: Each part has a job; the symptom names the job that failed. Add up watts and pick 30 to 50 percent above; match the voltage switch to the outlet; a smaller board fits a bigger tower; processor must match the socket; read the temperature and fan before blaming heat; firmware settings each do one named thing (boot order, USB, TPM, Secure Boot, boot password vs settings password, virtualization).
- L11: Sort the drive by connection (SATA, NVMe, SAS) and by shape (M.2, mSATA); shape is not speed. RAID level by "how many drives lost can it survive, how much space is left". RAID is not a backup. Any sign of a failing drive: copy files off first, then test or replace. Missing array: change nothing, look, hand on. No bootable device: look in the firmware screen first.
- L12: Pick a cable by what it must carry, how fast, how far, then the plug. A screen problem sits on one of four links (computer, cable/adapter, screen input, panel); cheapest check first (button or setting, then swap with a known-good part, then order), one change at a time. An adapter changes the plug, not what the cable carries.
- L13: Print path: program, queue, driver, connection, printer, paper/toner. Cut it with the cheapest test: test page from the printer's own screen, then from Windows, then the same job from another computer. Laser defects map to the seven steps. A stuck queue: cancel jobs, restart the spooler. Two faults at once: fix and test one at a time. Care depends on printer kind.

## Check self-scores (answers given before looking at marks)

- L9 check (Q14 to 19): another outlet; firmware screen; sign-in and profile; memory + video; ask for the words then hold the line; write stop code and copy report first. 6 of 6.
- L10 check (Q28 to 35): 650 W; 80 Plus; slot shape; ARM; boot password; two paths, faster; SODIMM; no thermal paste. 8 of 8.
- L11 check (Q14 to 21): mSATA card; Blu-ray; 3; drives 1 and 2; 12 TB; copy thesis first; copy work then replace bay 2; replace SSD, install Windows, restore. 8 of 8, and no data-risking pick.
- L12 check (Q30 to 37): straight-through; STP; 5 Gbps; DB9; Lightning; vents and filter; native resolution; burn-in. 8 of 8.
- L13 check (Q26 to 31): developing (tape/empty); program orientation; switch off, look for jam; cleaning or fusing; clean heating element; audit log. 6 of 6.

## Defects

Severity: BLOCKER = a beginner would answer wrong or learn something false. MINOR = everything else.

### L9

1. MINOR. Step 1 puts the self-test as link 2 and firmware as link 3, but says "the firmware (link 3) checks the processor, memory and video" in the self-test entry. A beginner asks how link 2 runs before the thing that does it. Fix: say the firmware runs the self-test first, then looks for the drive; or name link 3 as "firmware looks for a drive".
2. MINOR. Item 11 (links "4 and 5") and Item 19 file "operating system not found" differently from the Step 2 table, which puts it on "3 and 4". Fix: use the table's link numbers everywhere.
3. MINOR. Item 10 turn 1 marks "Is it plugged in?" wrong ("does not tell you how far it got"). Many real help desks ask exactly this, and it is cheap. Arguable mark. Fix: accept it as a reasonable first step that leads to turn 2, or say why the lesson's question beats it. Also the right reply promises "before noon", a time the ticket never asked for.
4. MINOR. Item 19 and Item 11 mark "copy the files off first" right for a computer that restarts in a loop, but the lesson never says how files come off a machine that will not start (second computer, drive in an enclosure). A beginner picks it only because "data first" repeats. Fix: add one line to Step 2 or 3.
5. MINOR. Check Q14 asks which test "cuts the causes in half". Another outlet clears one of four listed causes, not half. Fix: reword to "cheapest test" or list the causes so the split is half.
6. MINOR (pattern). In the two phone calls (Item 10, Q18) the correct reply is the longest and most polite in each turn. Fix: make one wrong reply equally long and warm.

### L10

7. MINOR. Step 3 says of 80 Plus "Bronze, Silver, Gold, Platinum, Titanium. Higher up wastes less", yet Bronze is first in the printed list. Item 20 then says Bronze "is lower on the list". Check Q29 says "higher up the list (Gold, Platinum, Titanium)". A literal reader gets the direction backwards. Fix: write "Titanium wastes least, Bronze most".
8. MINOR. No temperature is ever taught as hot or cool. The worked example calls 48 C "cool"; Item 12 and Q35 use 97 and 100 C. A beginner guesses. Fix: one sentence in Step 8, for example "above about 90 C is too hot".
9. MINOR. Terms used before the lesson that explains them: "solid-state drive" (Step 4) and "NVMe" (Item 23 ticket label) are defined only in L11. Fix: define in a clause or drop "NVMe" from the L10 ticket.
10. MINOR (pattern). Items 21 and Q32 are mirror images, and Q31 repeats Item 25; the second one is answered from memory of the first, not by reasoning. Fine for spacing, noted.

### L11

11. BLOCKER. Item 12 marks this order right: stop saving, copy, replace the drive, check the firmware lists the new drive, put the files back, user confirms. The user's drive is her only (system) drive, and a new drive is blank, so Windows must be put on it before files go back. Check Q21 in the same lesson says "put Windows on the new one and restore the files". The two contradict, and Item 12 teaches an incomplete procedure. Fix: add the step "Put Windows on the new drive" before "Put the files back", or state in the ticket that the drive is a second data drive.
12. MINOR. Check Q21's second pass rule ("none touched the machine before protecting the user's data") is unclear when a backup already exists: is "take the flash drive out and restart" a touch? Fix: say the rule counts only picks that risk data that has no copy.
13. MINOR. "TB", "protocol" (Item 13) and "unallocated/uninitialized" (Step 7 table) are used without being explained. Fix: one-clause glosses.

### L12

14. MINOR. Item 18 asks to "put the refresh rate back to 60 Hz", but Pia never says what it was before. The lesson only says 60 is typical for office work. Fix: state the old value in the ticket, or word the option "back to what it was".
15. MINOR. Item 26 asks "which plug is on the serial end?" of a laptop-to-switch console cable. The cable has two ends; the switch end is often RJ45 (the feedback admits this). Fix: say "the end that goes into the laptop".
16. MINOR. Item 16: the table row says "lamp light on or hours used up", and the ticket gives "Red, steady", but what a red lamp light means is never taught. The hours (5,040 of 5,000) carry the answer. Fix: teach that a lit lamp warning means the lamp has failed, or drop the colour.
17. MINOR (pattern). Item 29 (micro vs mini) is answerable by matching the ticket's words "very small flat" and "bigger" to Step 7's words. Item 18 (finisher) and Item 17 (stuck pixel) likewise match one word. Noted, not a fix request. Also "DSL" and "bayonet" appear in tables without a gloss (MINOR).

### L13

18. MINOR. Item 7 (call) marks "look at the waiting jobs on your computer" as the right next step after the printer's own test page. The lesson's own method (Step 2 and the Marta example) cuts next with the same job from another person's computer, because the printer's network link is not yet cleared. The marked reply skips that. Fix: make the right turn-2 reply ask a colleague to print, then look at the queue.
19. MINOR. Item 10 (smears) and Step 3 disagree on cause: the table says toner that rubs off means a fuser too cool, and a worn fuser gives echoes; the item says "worn fuser, apply the maintenance kit". The ticket line "far past the maker's page count" supplies the answer. Fix: align the table (worn or failing fuser can run cool) or give the item a different clue.
20. MINOR. Check Q29 offers one option, "Cleaning or fusing", because Step 3 lists echo images under both steps. The feedback then adds "the exam words it as a worn drum or fuser", which Step 3 never said. Fix: teach "worn drum or fuser" in Step 3 and keep the combined option.
21. MINOR. Items 23 and 24 each hold two questions under one number, so it is unclear whether one slip fails the item. Fix: split them or say both parts must be right.
22. MINOR. Step 1 says a driver fault shows as "a tray is not offered", while Step 4 says "tray not recognized" is a printer-properties setting. Not asked, but a beginner would be torn. Fix: remove the tray phrase from the driver row.
23. MINOR. The MSDS fact (Step 7) is taught but never asked in practice or the check. Fix: add one recall question or drop the line.

## Summary of findings by type

- Stuck points: L10 Item 20 (which way "higher up" runs), L12 Item 18 (what the old rate was), L13 Item 7 (why not another computer first), L11 Item 12 (no Windows step).
- Answers I could get by pattern: phone-call correct replies (longest, most polite); "copy data first" in L9, L11; one-word matches in L12 Items 17, 18, 29 and L13 Item 18; the ticket's own hint "far past the maker's page count" in L13 Items 10 and 15.
- Marked answers that seem arguable: L9 Item 10 turn 1, L9 Q14, L12 Item 26, L13 Item 7, L13 Item 10.
- Facts asked from memory never taught: none found. Every typed answer (virtualization, PCIe, 80 Plus, SODIMM, parity, NVMe, ST, Molex, DB9) was taught before it was asked.
- Questions needing a fact the ticket does not give: L12 Item 18 (previous refresh rate), L10 worked example and Items 12, Q35 (what temperature is too hot).
- Contradictions between items or lessons: L11 Item 12 vs Check Q21 (BLOCKER); L9 link numbers for "operating system not found"; L13 Step 1 vs Step 4 on trays; L13 Step 3 vs Item 10 on the fuser.
