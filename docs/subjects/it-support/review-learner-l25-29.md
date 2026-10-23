# Cold learner review: IT Help Desk lessons 25 to 29

Reviewer: beginner with lessons 1 to 24 only. Read only docs/learner-view/it-support-l25.md to l29.md. No scripts run. Each question answered from what was taught before looking at the mark.

## Verdict table

| Lesson | Practice by reasoning | Check (pass rule) | BLOCKERs | Minors | Verdict |
|---|---|---|---|---|---|
| 25 Accounts and access | 23 of 23 | 8 of 8 (needs 7) | 1 | 6 | FAIL (one BLOCKER) |
| 26 Malware and attacks | 34 of 34 | 8 of 8 (needs 7) | 1 | 7 | FAIL (one BLOCKER) |
| 27 Changes, backups, safety, evidence | 18 of 18 | 6 of 6 (needs 5) | 0 | 5 | PASS |
| 28 Policy, scripts, remote, AI, cloud | 20 of 20 | 6 of 6 (needs 5) | 0 | 4 | PASS |
| 29 Whole ticket and mock exam | 10 of 10 | random 40 of ~890, needs 32; described clearly enough | 0 | 3 | PASS |

BLOCKER count: 2 (D1, D9).

"Answered by reasoning" means every right answer followed from a taught rule or from ruling out options with the ticket's own words. Some were also reachable by pattern; see below.

## Way of deciding, per lesson

**L25.** Find the link before changing anything. Link 1 (who you are: account, sign-in), link 2 (what you are allowed: group, share and NTFS level, file label), link 3 (policy over many PCs), and the door in front. Cheapest test is what the user already did: signed in means link 1 works; opened the file means link 2 gives something and the question is how much; works on one PC but not another means link 3 or an account that exists on one PC. Across the network the lower of share and NTFS wins. Give the least access that fixes it. Never reset or unlock on what the caller supplied; check by a record the desk holds.

**L26.** Work back from the sign to the kind of malware or attack using the three-column tables (kind, what it does, what the ticket shows). Before acting, run the ten steps in order: verify, quarantine, System Restore off, remediate, update scanner, scan, reimage, schedule scans, System Restore on, educate. Tests before fixes (phone on same Wi-Fi, another browser, Task Manager). Drives: reuse means wipe; no reuse means shred or drill; proof needed or many drives means vendor and certificate; never degauss an SSD.

**L27.** Ask which rule group the ticket lands in. Change: routine and pre-approved is standard, outage or attack now is emergency, anything else normal; needs rollback, backup, test, named staff, maintenance window. Backup: restore needs differential = full plus latest; incremental = full plus every one in order. Safety: pick the hazard, then its control. Evidence: stop, change nothing, tell management, write down, chain of custody, collect memory first, work on an image checked by hash.

**L28.** Match the ticket's need to the tool: network access first means VPN; Windows desktop means RDP; screen on any system means VNC; Linux command line means SSH; many Windows machines by command means WinRM; hundreds of PCs from one console means RMM. Unknown script means read and test first. Public AI gets no private data. Cloud: model is about who shares it, level is about who manages what (IaaS OS and up, PaaS app and data, SaaS account and data).

**L29.** Nine moves in order. First move is usually sort or get the story. Once a symptom shows, the next move is a test that splits a chain, or protecting data that has no other copy. Do not start with a part, reset or reinstall. For an upset user, say what happens next. For a change, approval, written undo plan first. The mock check is a 40-question random draw from all earlier lessons, so it tests recall of everything.

## Numbered defects

### Lesson 25

**D1. BLOCKER. Worked example says "Saving needs Modify", contradicting the lesson's own table.** Step 12 working, step 4: "she can open, not save. Saving needs Modify." The "Levels and more" table says Write "adds and saves but cannot delete". A beginner learns that only Modify lets you save, then later is asked (Item 3, Jo) about adding but not deleting, which only makes sense if Write saves. Fix: say "Saving needs Write or Modify; Modify is the least that also deletes. Grant Modify (not Full control) because the job needs it."

**D2. MINOR. Stray sentence in Step 11.** "The right line: Another common shortcut: ..." has a leftover "Another common shortcut:" mid-line. Fix: delete it; the second wrong idea (reset because the caller says who they are) should be its own marked wrong idea.

**D3. MINOR. "recovery key" versus "recovery code".** Taught (Step 9) as "recovery key"; Check 28 asks for the "recovery code" and the screen shows "Recovery key ID". Fix: use "recovery key" everywhere.

**D4. MINOR. Claims never taught in distractor feedback.** Item 15: "A PIN does not expire on a timer" (not taught; policy can expire PINs). Item 19: a "power user account" is described as "a named person's account with extra rights", but the table says it is an older group. Fix: reword both to match the tables.

**D5. MINOR. Arguable unlock path.** Item 10 turn 2 third reply ("I have unlocked you. Nothing else I can do there") is marked wrong only for leaving no next step; a beginner could see it as fine. Also the right reply is the longest in each turn, so pattern wins (Items 10 turn 1 and 2). Fix: make the wrong replies as long and polite as the right one.

**D6. MINOR. Unexplained IT words.** "sfc /scannow" (Step 7), "domain controller" (Step 8: "run by a domain controller" with no meaning), "port" in the firewall row, "TPM". Used but never defined here. Fix: add half a line each or drop sfc.

**D7. MINOR. Check 28 distractor weakness.** "Fresh install wipes the data" is fine, but "same account as before" option text suggests the answer in Windows password; low risk. No fix needed beyond D3.

### Lesson 26

**D8. MINOR. System Restore is never explained.** Steps 7 to 9 and Items 10, 11, 21, Check 29 lean on "restore points" with no sentence saying what System Restore or a restore point is, and the table label "(Windows Home)" is unexplained (Pro is the same). Fix: add one line defining System Restore and restore point; drop "(Windows Home)" or say why.

**D9. BLOCKER. Contradiction with L25 on how to confirm a caller.** L25 Item 10 and Check 25 teach: check by something the caller did not supply (call the number on the directory record); anything the caller reads out proves nothing. L26 Item 26 marks right "I will check it is you with the desk's own questions, then reset it", and says the other reset replies are wrong only because the desk has not confirmed "with its own questions". The beginner is never taught what such questions are; questions the caller answers are things the caller supplies. Two lessons give two different identity checks. Fix: use the L25 wording (call back on the number on record) in the right replies and feedback.

**D10. MINOR. "Same day" and "log the report" appear in the Item 26 reason but were never taught** (reset "the same day"). Fix: say "at once" and cite the L25/L27 documentation habit.

**D11. MINOR. Item 6 tailgating.** Ana held the door open for him; the table defines tailgating as following an authorized person, so it fits, but some would call this piggybacking (consent). Fix: have him slip in unseen, or add "even if held open".

**D12. MINOR. Item 17 and the PUP row overlap.** "I never agreed to anything else" plus a changed home page also fits PUP ("extra program bundled with a download") and adware. Answerable only because PUP is not offered. Fix: add that a legitimate-looking tool ran as advertised and the extras opened a hidden channel, or remove the home-page detail.

**D13. MINOR. Item 20 whaling reason** says "aimed at one person or a small group"; the table says spear phishing is "for one person". Fix: match the table.

**D14. MINOR. Worked example jumps to Trojan** from only a "free PDF converter" and an unknown helper; step 3 states it as fact. Fix: say "most likely a Trojan" and note the scan will tell.

### Lesson 27

**D15. MINOR. Check 21 marked answer is arguable.** Full backup Monday, "each night after that", yet the right option includes "the Monday, Tuesday and Wednesday night backups". If the full is Monday's run, no separate Monday-night incremental exists; a careful beginner has no exactly matching option. Item 2 sets Sunday's full with Monday to Wednesday nights, which is clean. Fix: make Check 21 "full on Sunday", options Monday, Tuesday, Wednesday nights.

**D16. MINOR. Item 14 leaks its answer.** The stem says memory "is lost when the power goes off" and asks "memory or drive", so the answer comes from the stem. Fix: ask which to collect first from a list of three evidence kinds.

**D17. MINOR. Item 3 grounding.** The strap clips to "bare metal... grounded" while the lesson also says to unplug first; an unplugged frame is not grounded by the outlet. A beginner may be confused which is true. Fix: say "bare metal of the frame (it equalizes charge with you)" or note the plug stays in the wall on a switched-off supply; pick one story.

**D18. MINOR. Unexplained words.** "firmware" (the why and worked example), "VPN" (Item 11), "AUP" (Item 5 distractor, taught only in L28), "extinguisher kind". Fix: define on first use or avoid in this lesson.

**D19. MINOR. Typing format cues.** Item 6 says "type the two words" but accepts "freeze"; Item 18 says "four letters" but accepts "sds". Harmless, but unfair if the learner types three letters and is told the prompt was wrong. Fix: say "the short name".

### Lesson 28

**D20. MINOR. Item 2 VDI distractor is confusing.** A VDI desktop could itself run Windows 7 on a server; the feedback says "also runs Windows 11", an unstated assumption in the ticket. Fix: say "a VDI desktop that is Windows 11", or drop the option.

**D21. MINOR. Check 21 uses a fact not given.** Ticket never says personal addresses are unapproved; the reason adds "kept inside approved channels", not taught. Fix: add to the regulated-data row "keep it in approved channels, not personal email".

**D22. MINOR. Terms used but not explained here:** "port" (SSH 22, WinRM ports) , "Linux", "agent" beyond RMM, "splash screen" is defined, "protocol". Item 20 also leans on RDP 3389 in feedback only. Fix: one line on what a port is, or drop the number from feedback.

**D23. MINOR. Pattern answers.** Items 11 (public or private), 10 (ingress follows egress), 7 (three letters) can be answered from the stem. Fix: ask in a scenario.

### Lesson 29

**D24. MINOR. Step 1 rule contradicts Item 7.** "Never start with a part, a reset or a reinstall", yet Item 7 (Cleo) marks "Reset her password..." right as the first move. Fix: say "never a reset of a working system; a stolen password is reset at once".

**D25. MINOR. Item 9 reason does not match the right answer.** The reply is "I will check your connection now and tell you what happens next" while the reason says it is "a problem to hand on with their dates"; the reply never acknowledges her frustration (the other options fail on blame or dismissal). Pick-by-elimination works, but the stated lesson is unclear. Fix: right reply "I am sorry, that is the third time; I will check now and tell you what happens next".

**D26. MINOR. Check description wording.** "(40 of them)" after a list of about seventy topics, and "the same run drawing the same" are unclear. The pass rule 32 of 40 (80 percent) differs from the 7 of 8 (87.5 percent) of other lessons, unexplained. Fix: "40 questions, one from each of 40 topics chosen at random" and rewrite the second phrase. Item 6 also expects the learner to know `du -sh /var/*`; if it is not taught in an earlier lesson, add it to Step 1 or name the tool in the option wording.

## Self-score summary

Practice (listed, shuffle, mixed) answered correct by reasoning in all five lessons. Pattern risks: L25 Item 10 (longest reply right), L26 Item 26 (long reply right), L27 Items 8, 14, L28 Items 10, 11. Facts asked from memory never taught: none certain, except `du -sh` (L29 Item 6, check earlier lesson) and RDP 3389 (L28 feedback only). Questions needing a fact the ticket lacks: L28 Check 21 (D21).
