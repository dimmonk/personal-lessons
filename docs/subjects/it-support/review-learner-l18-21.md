# Cold learner review: IT Help Desk lessons 18 to 21

Reviewer: cold beginner, lessons 1 to 17 done. Read only docs/learner-view/it-support-l18.md to l21.md. Answers were reasoned from the teaching before looking at the marks. No scripts run.

## Verdict

| Lesson | Practice by reasoning | Check (pass rule) | BLOCKERs | MINORs | Verdict |
|---|---|---|---|---|---|
| L18 Phones, tablets and laptops | 21 of 22, one arguable (Item 3) | 6 of 6 (needs 5) | 1 | 6 | NOT PASS |
| L19 Mobile problems | 28 of 29, none wrong; 2 answered by elimination | 6 of 6 (needs 5) | 0 | 6 | PASS |
| L20 Which Windows tool for the job | 34 of 35, one false reason line | 8 of 8 (needs 7) | 1 | 7 | NOT PASS |
| L21 Windows at the command line | 32 of 32 | 8 of 8 (needs 7) | 0 | 6 | PASS |

Blocker count: 2.

## Way of deciding taught, per lesson

**L18.** Take the symptom to its link, and test the cheapest cut before blaming a part. Bluetooth is a chain: on, pairing mode, found, PIN, test. Mail is a chain: switch (airplane mode), line, plan, account, sync. Power off at every source and ground yourself before opening a laptop. Lost phone order: confirm the caller, mark it lost (lock and find), wipe only when the owner says it is gone. Company-owned phone is wiped whole; BYOD only the work part.

**L19.** Five links in a phone: body, connections, system, app, what was installed. Look at the phone's own reports (battery health, storage, data and battery lists) before replacing or resetting. Cut in half with: one app or all, Wi-Fi or cellular, after restart, safe mode, another cable or charger. A swollen battery is the one stop-at-once sign. Bad app order: save files, airplane mode, remove the app, scan, update, change passwords from another device. Factory reset last.

**L20.** Pick the tool by the question: live view (Task Manager, Resource Monitor), record (Event Viewer, Performance Monitor, System Information), or change one thing (consoles, Control Panel, Settings). Look first, change second, one change at a time. Names to type are shortened words (eventvwr, diskmgmt, devmgmt, taskschd, lusrmgr, perfmon). Registry: export first.

**L21.** Protect the only copy of the data before touching a drive. Run read-only checks first (chkdsk with no switch), then one change (/f). Never format or clean on a guess, and read the drive letter or disk number by size, not position. Read the output text (Errors found, Cannot lock current drive, Unavailable, LISTENING, Extras, filtered out) to pick the next step. Confirm the caller before an account unlock or reset.

## Defects

**1. BLOCKER, L18 Item 3 (Mike's speaker).** The stem says the speaker "is on and its light blinks blue." Step 5 taught that pairing mode is made by "holding its button until a light blinks." So a beginner reads the speaker as already in pairing mode, and the marked answer ("put the speaker into pairing mode") looks wrong or pointless. The reason line also says "the phone side works," which the ticket never established. The only other answer that fits a beginner is "restart the phone," and that is marked wrong. Fix: remove "light blinks blue" from the stem. Say instead that the speaker has been on for ten minutes with no light and no button pressed. Or teach that a blinking light can mean "was discoverable, timed out" and give the stem a fact that shows it. Either way, state in the stem that the phone found other devices, so "the phone side works" is given.

**2. BLOCKER, L20 Item 19 (reason line).** It says "The Processes tab lists programs that have windows." This is false and it contradicts the lesson. Step 1 defines a process as "a program that is running," and the worked example lists PhotoSync Helper (a background helper) on the Processes tab. A beginner would learn that background programs never appear on Processes. Fix: change the feedback for the Processes distractor and the reason to "the Processes tab lists what is running and can end it, but a service is stopped and restarted from the Services tab (restarting a service is not the same as ending a task)." Also state in Step 1 that a service also shows as a running process.

**3. MINOR, L18 Item 15 and L19 (Item 15).** The question is "What is the first change?" but the marked answer is two changes (lower brightness AND limit maps location). This contradicts "change one thing at a time." Fix: ask for one change (limit maps to location only while open, the 34% user), or say "Which two settings are the cause?"

**4. MINOR, L19 Item 16 (ghost touches in rain).** Water on the glass causing phantom touches was never taught. Step 2's touch row covers dirt, a protector, and calibration, not rain. It is answerable by "cheapest check first," but the reason line states a new fact. Fix: add "water or dirt on the glass can make touches by themselves" to the Step 2 touch row.

**5. MINOR, L19 Item 17 (browser notification permission).** "Allow notifications" from a website causing pop-up ads is not taught anywhere. Fix: add a row to the Step 6 signs table: "Pop-ups only in the browser after allowing notifications from a site → remove that site's permission, clear browser data."

**6. MINOR, L19 Check 28 vs Step 6.** The taught order puts airplane mode before removing the app. Item 12 and Item 4 follow it. The marked answer in Check 28 ("back up her files, remove the app, take root off") omits it. Fix: add "airplane mode" to the marked answer, or note that backing up needs the network, and say so in Step 6.

**7. MINOR, L19 Check 28 (reason).** "A scan on a rooted phone may not see everything" is a new fact that was not taught. Fix: add one line to Step 6 or drop the claim.

**8. MINOR, L20 Item 22 (typed name).** "msinfo" is accepted. It is not a command that opens System Information from the Run box. Fix: accept only msinfo32 (and msinfo32.exe).

**9. MINOR, L20 Check 29 stem.** Ken says Task Manager "cannot tell which program" is using the disk. Step 2 taught that Processes can be sorted by disk to find the heaviest program. The question really turns on "which file," so the stem is off. Fix: reword to "I can see the program but not which file it is reading."

**10. MINOR, L20 Check 30 ("Boot tab").** The lesson taught only that msconfig covers "safe boot." The Boot tab and "tick Safe boot" are new facts. Safe mode itself was taught in L19 (Android). Fix: add "Boot tab: Safe boot" to the msconfig row in Step 4.

**11. MINOR, L20 Item 25 and similar calls.** In the phone calls (L18 Item 11, L19 Item 20, L20 Item 25, L21 Item 17) the right reply is always the longest, most polite, and the only one with a concrete next step. A beginner can pass the calls by length alone. Fix: make at least one wrong reply long and polite, and one right reply short.

**12. MINOR, L20 vocabulary.** "Volume," "partition," and "Windows build" are used before they are explained (Step 3 table, Item 5). Fix: one short definition line each, in Step 1.

**13. MINOR, L21 Item 19 (accepted answers).** "gpupdate [/force]" makes /force optional, so plain "gpupdate" is accepted for a question that says "with the /force switch." That is a wrong answer scored as right. Fix: accept only "gpupdate /force."

**14. MINOR, L21 Item 11 (reason vs answer).** The marked answer says "the web service is not running." The reason says "stopped or listening elsewhere." Also port 3389 (remote desktop) is explained only in the feedback. Fix: mark "nothing is listening on 80 or 443" without "is not running," and teach 3389 once in Step 7.

**15. MINOR, L21 Item 10 and Item 14 (output terms).** "Denied (Security)" in gpresult and the "Extras" column in robocopy are read without being taught. Both are answerable by elimination. Fix: add one line each to Step 9 and Step 6.

**16. MINOR, L21 Item 7 vs Step 1.** The Item 7 distractor quotes "Access Denied" but Step 1 teaches "Access is denied". Fix: use one wording.

**17. MINOR, L21 Check 25 (Task Manager).** The PID is to be "looked up in Task Manager," but the Details tab is not taught in L20 (only the five tabs). Fix: name the Details tab in Step 7 or L20.

**18. MINOR, L21 Item 9 (sfc ending three).** The answer says "try another repair step" but no other repair step is taught in this lesson. Fix: name the next step (for example, a repair from installation media or a hand-off) or say "hand on to the next tier with the log."

**19. MINOR, global pattern across L18 to L21.** Wrong options often carry giveaway words ("reset," "wipe," "replace," "all together," "right away," "always"), and right options often contain "then," "first," or "one." Beginners can score by spotting these. Fix: add a plausible wrong option that is a mild cheap step (a restart or a second try) to more questions.

## Per-lesson notes

- **L18:** Check 24, 26, 27 are plain recall of words taught in tables (Apple, MDM, configuration profile). Fair. Item 16 and Check 28 use "selective wipe," which Step 8 only describes ("wipes only that"); the term is not named. Minor, answerable.
- **L19:** All 6 check questions passed by reasoning. Items 5, 8, 10, and 18 are answered from the tables given.
- **L20:** Typed-name questions (eventvwr, diskmgmt, perfmon, msinfo32, taskschd) test memory of names taught in the tables, with the shortened-word hints. gpedit, certmgr, and the six msconfig-style names have no hint; they are recall only. That is fair because they were in the tables. Check score 8 of 8.
- **L21:** Every item can be reasoned from the taught switches and the printed output. Check score 8 of 8.

## Contradictions between lessons

- L20 Step 1 ("a process is a program that is running") against L20 Item 19 reason ("Processes lists programs that have windows"): see defect 2.
- L19 Step 6 (airplane mode before removal) against L19 Check 28 marked answer: see defect 6.
- No contradictions found between L18 and L19 (Bluetooth chain, airplane mode) or between L20 and L21 (command and tool names).
