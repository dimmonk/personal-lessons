# Cold learner review: IT Help Desk lessons 22 to 24

Reviewer stance: a beginner who has done lessons 1 to 21. Read only the learner views of lessons 22, 23 and 24. Every question was answered from the taught tables and worked example before looking at the mark. Nothing was run.

## Verdict

PASS = passed by reasoning with no BLOCKER.

| Lesson | Practice (by reasoning) | Check score vs rule | BLOCKERs | MINORs | Verdict |
|---|---|---|---|---|---|
| L22 Installing and upgrading | 19 of 19 (Item 12 only by elimination) | 8 of 8, rule 7 of 8 | 1 | 11 | NOT PASS (fix the BLOCKER) |
| L23 Windows problems | 19 of 19 | 6 of 6, rule 5 of 6 | 0 | 8 | PASS |
| L24 Mac and Linux | 16 of 16 | 8 of 8, rule 7 of 8 | 0 | 6 | PASS |

Total BLOCKERs: 1 (L22-1).

## Way of deciding, per lesson

### L22 Installing and upgrading
Do not trust the favorite fact (memory and disk). List every line of the thing in question (Windows 11 needs, the edition table, the program's requirements) and test each line against what the ticket shows. Then match the ticket's deciding words to the one table row that settles it: edition (Home vs Pro), file system (4 GB limit, Mac and Windows), partition style (2 TB limit), 32 vs 64-bit, install kind (many identical, nobody touches, keep files). Before any change that erases or rewrites a disk, copy the files off. Change one thing at a time, and take the change that keeps files when one exists.

Committed before the first question: "Test every requirement line; the failing one is usually the one nobody mentioned."

Check, answered covered: Q20 Pro in place, Q21 Media Feature Pack, Q22 4 GB, Q23 do not format (Windows cannot read APFS), Q24 2.0, Q25 repair installation, Q26 plug in the dongle, Q27 identity synchronization. 8 of 8.

### L23 Windows problems
First place the fault: on the way up (which of the six links) or in the running system. Read the cheapest thing already on screen (stop code, Event Viewer, Task Manager) before any test. Name the favorite, say what it would predict, and check it. Ask what changed (the log answers when the user cannot). Cut in half with the cut that fits (safe mode, clean boot, test profile, one program or all, one user or all). Undo one change, the smallest way back first, and copy the user's files first when the step rewrites system files. Confirm and write up. A swollen or burning battery stops everything: power off and unplug.

Committed before the first question: "Read the evidence, then the smallest undo; never reinstall first."

Check, answered covered: Q20 remove the new stick alone, Q21 large roaming profile so move the videos, Q22 motherboard battery, Q23 Windows Time to Automatic then sync, Q24 add memory, Q25 roll back the USB controller driver. 6 of 6.

### L24 Mac and Linux
Name the job, name the Windows tool you would use, then take its counterpart from the tables (Force Quit, Spotlight, Time Machine, Keychain, FileVault, Disk Utility, Mission Control; ls, top, df, dig, chmod, apt, /etc files). Use root only for one command with sudo, never stay in it. For a name that fails while the number works, test the number first, then the name (dig), then the file that lists the name servers (/etc/resolv.conf).

Committed before the first question: "Job, Windows tool, table counterpart."

Check, answered covered: Q17 Mission Control, Q18 Applications, Q19 Time Machine, Q20 company management, Q21 chmod, Q22 /etc/shadow, Q23 bootloader, Q24 traceroute. 8 of 8.

## Defects

### L22

1. BLOCKER. Check Q27, wrong-option feedback for the license option: "The sign-in works with the old password, so the license is already there." This teaches that a working sign-in proves a license exists. Item 10 in the same lesson rests on the opposite (Lena signs in and has no license). Fix: reword to "The ticket gives no sign of a license problem: the apps open and only the password differs. Licenses decide what you can do, not which password the cloud accepts."

2. MINOR, untaught fact. Item 12: "restore it from the cloud recycle bin". Step 10 says only that a delete deletes the cloud copy too; nothing says there is a cloud recycle bin. The learner finds it by elimination, and "lost for good" is half-supported by the taught line. Fix: add to Step 10's storage row "Deleted files usually sit in the cloud recycle bin for a time."

3. MINOR, untaught fact. Item 3 (Priya): that a missing TPM is often just switched off in the firmware is never taught. Answerable only by elimination. Fix: add a line to Step 4: "A TPM that cannot be found may only be turned off in the firmware."

4. MINOR, ticket lacks a fact. Check Q23 (Isla): the ticket never says the drive is APFS (an old Mac drive may be HFS+, which is never taught). The answer asserts APFS. Fix: put "Disk Utility on her Mac called it APFS" in the ticket, or word the answer "a Mac file system such as APFS".

5. MINOR, answer likely marked wrong. Check Q24 ("Type the number"): the natural answer "2" is not in the accepted list (2.0, TPM 2.0, version 2.0). Fix: add "2", "TPM 2", "version 2".

6. MINOR, arguable. Item 8 (Ben): "a 5 GB video would not copy off" a FAT32 card is incoherent, since a FAT32 card cannot hold a 5 GB file. The story should be that the camera cannot record or copy a file onto it. Option 4 (two shorter files) is marked wrong only for "he has not asked for shorter videos", which is a weak reason; step 2 also lists FAT32 for cameras, so a camera that supports only FAT32 is plausible. Fix: reword the ticket (the camera stops recording at 4 GB) and give option 4 a real reason (the limit stays, and he wants one long recording).

7. MINOR, contradiction inside the lesson. Item 6's answer says the 4 TB disk needs GPT "after any files are copied off", suggesting conversion erases. The worked example teaches mbr2gpt converting without erasing. Fix: say "convert it to GPT (a new empty drive can simply be re-initialized)".

8. MINOR, contradiction with L23. Check Q25 asks which install kind to "try first" for a computer that will not start and has no backup, and answers repair installation. L23 teaches Startup Repair, System Restore and update uninstall before anything bigger, and says to copy files out first; its ways-back table has no repair installation row. Fix: add "Repair installation" to L23's table between Startup Repair and Reset, and reword Q25 "Of these four kinds, which fits, once the smaller repairs have failed" or add copying files out.

9. MINOR, false-ish. Step 3 labels "Pro for Workstations (Windows 10)", implying Windows 11 has none. Fix: drop "(Windows 10)".

10. MINOR, unclear. Step 11: "Your own note, written after an argument" has no argument anywhere. Fix: delete the phrase.

11. MINOR, untaught words and facts. mbr2gpt appears only inside the working; "served locally" (Item 16), "device encryption" (Item 17), "journaling" (Item 15 reason), and "the 8th-generation chip is on the list" (Dev's laptop is called four years old) are not explained or checked. None blocks an answer. Fix: one line each or remove.

12. MINOR, answerable by pattern. Items 9, 13, 17, 18, 26 are solved by copying a ticket phrase onto a table phrase ("fifty identical... built once and copied", "nobody on the desk will touch", "BitLocker", "menu at start-up"). Wrong options usually carry a padded "since..." clause with a false reason. Fix: add some tickets where the cue is described, not named.

### L23

13. MINOR, ambiguous table. Step 1: "Clock wrong: wrong after being off means the motherboard battery". Item 10 (off all weekend, wrong by exactly one hour, battery stated fine) fits the first half of that line, and the distinguishing rule (dead battery gives a reset or odd date such as January 1, not a clean offset) is only seen later in Check Q22. Daylight setting is also never taught as a clue. Fix: put that rule and the daylight clue in the Step 1 row.

14. MINOR, order contradiction. The ways-back table says "smallest first" and lists System Restore above Startup Repair. Item 2 calls Startup Repair the smallest way back, and Item 13 goes to System Restore after Startup Repair fails. Fix: reorder the table (Startup Repair before System Restore) or add "smallest that fits the sign".

15. MINOR, ticket lacks a tie-breaker. Item 17: two changes today (driver and update). The ticket gives no reason to undo the driver first; only the table order does. Fix: state in Step 2 "with two changes, undo the smaller (a driver) first", or give a cue.

16. MINOR, arguable. Item 11: uninstalling the suite is a reasonable smaller way back that the ways-back table never lists, and the option is marked wrong with an untaught claim ("an uninstall leaves some of what it added") plus "close the ticket". Fix: add "uninstall a program" to the table, and make the wrong reason only the missing confirmation.

17. MINOR, practical gap. Item 13: "copy Nia's files out first" for a laptop that will not start: no way to do so is taught. Fix: one line in Step 2 (command prompt in WinRE, or a boot USB).

18. MINOR, ordering. Item 1 uses "WinRE, start in safe mode" but WinRE is said to hold safe mode only in Item 15. Fix: say it in Step 2's WinRE row.

19. MINOR, words. "Faulting module" and ".dll" (Items 8 and 14), "virtual memory" (Item 6), and "Heat belongs to every link" (Item 19 reason) are not explained. Item 6's table also adds to 16.9 GB on a 16 GB machine. Fix: gloss each, correct the table.

20. MINOR, text error. Item 18: the ticket speaks in Ola's voice ("my computer") and then says "Her co-worker". Fix: "My co-worker".

### L24

21. MINOR, design. Almost every ticket hands the learner the Windows tool ("In Windows you would use Task Manager..."), so the question is table lookup and the right option repeats the table sentence. A real user does not name the Windows tool, so the practice never shows the learner can go from job to Mac tool. Fix: in the check, drop the Windows tool from half the tickets.

22. MINOR, contradiction in how to read "Permission denied". Step 9 and Item 8 say sudo; Check Q21 says chmod. The lesson never says how to tell them apart (installing needs root; running your own file needs the run permission). Fix: one line in Step 8.

23. MINOR, contradiction with L22. Step 2 gives ".dmg" as "No exact match" in Windows, while L22 taught the mountable ISO (a disc as a file that opens as a virtual drive). Fix: "Like a mountable ISO".

24. MINOR, arguable. Item 14: running First Aid first on a drive with no backup contradicts L23's rule to copy files out before anything that rewrites. Reasonable because the drive will not open to copy from, but not said. Fix: add to the answer that the drive will not open, so copying is not possible yet, and note First Aid is tried before any erase.

25. MINOR, input check. Item 15 accepts "(etc) hosts"; the most natural full answer "/etc/hosts" may be stripped to "etchosts" and missed, depending on how punctuation is normalized. Same for Check Q22 and Q18 ("/Applications"). Fix: test those three inputs, or list "/etc/hosts" and "/etc/shadow" explicitly.

26. MINOR, structure and words. Step 9's wrong idea (typing Windows names) is followed by a "right line" about staying as root that is called "the same error", which it is not. The worked example uses "ping -c 2" without saying why -c, and "mount" ("attaches a drive to a folder") and "certificates" are not explained for a beginner. Fix: split Step 9 into two ideas; gloss the three.
