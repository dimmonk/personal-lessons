# IT Help Desk lessons 18 to 21: research and fact check (2026-10-23)

Scope: `l18` to `l21` lesson, items, check and reserve files, and `subject.js` (strand and part names only). Read against `plan.md`,
`docs/research/it-support.md`, `docs/research/it-support-aplus.md`, `rulings-l1-8.md` and `rulings-l9-13.md`. No node run.
Ratings: BLOCKER = false teaching or contradicts a ruling; MINOR = the rest. "Ruling 8-4" means rulings-l1-8 no. 8; "R9-13 no. 1" is the other file.

Counts: BLOCKER 14 (L18 3, L19 5, L20 3, L21 3). MINOR 41.

## Sources read (for the facts I verified)

- Microsoft Learn, chkdsk: /f fixes, /r "includes the functionality of /f", read-only without switches, needs Administrators even to run, the exact
  "Chkdsk cannot run because the volume is in use by another process..." text. https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk
- Microsoft Learn, robocopy: /e includes empty directories, /mir = /e + /purge, /z restartable, defaults /r 1,000,000 and /w 30. https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy
- Microsoft Support, System File Checker: for "unable to fix some" the article's route is to find the file in the log and replace it by hand (no
  "scan again"). https://support.microsoft.com/en-us/topic/use-the-system-file-checker-tool-to-repair-missing-or-corrupted-system-files-79aa86cb-ca52-166a-92a3-966e85d4094e
- Double extension: Explorer hides the last known extension, so invoice.pdf.exe shows as invoice.pdf. Secondary sources only (no Microsoft page found):
  https://www.startupdefense.io/mitre-attack-techniques/t1036-007-double-file-extension , https://www.seqrite.com/blog/how-to-avoid-dual-attack-and-vulnerable-files-with-double-extension/
- gpedit.msc and lusrmgr.msc are not in Windows 11/10 Home (several sources agree, one spam page disagrees and is ignored):
  https://www.manageengine.com/products/ad-manager/kb/gpo/how-to-fix-gpedit-msc-not-found-error.html , https://morgantechspace.com/?p=19982
- diskpart clean: standard `clean` zeroes only the first and last 1 MB and leaves the disk "uninitialized"; data is often recoverable; `clean all` zero-fills.
  https://www.sevenforums.com/threads/recover-data-from-a-diskpart-clean-command.333571/ , https://www.powerdatarecovery.com/hard-drive-recovery/recover-data-lost-by-diskpart-clean.html
- Dock against port replicator: basic replicators repeat ports and traditionally do not charge; USB-C docks blur it. https://cdw.com/content/cdw/en/articles/hardware/docking-stations-and-port-replicators.html
- Task Manager tabs (Win 10: Processes, Performance, App history, Startup, Users, Details, Services): https://helpdeskgeek.com/windows-10/the-ultimate-guide-to-the-windows-10-task-manager/
- Command list for 220-1202 objective 1.5 (includes `copy` with /v and /y; not xcopy, shutdown): https://www.professormesser.com/free-a-plus-training/220-1202/220-1202-video/windows-command-line-tools-220-1202/

Not verified (search gave no authoritative page): the iPhone lockout schedule (the one-hour message in l18-g-tries is plausible, Apple's own schedule not read);
whether `copy` with a wildcard stops at the first locked file; Windows 11's exact name of the Task Manager Startup tab ("Startup apps").

## BLOCKERS

### Lesson 18

| # | File / item | Problem | Fix |
|---|---|---|---|
| L18-B1 | items-l18.js `l18-p-scan` | The ticket says the speaker's "light blinks blue". The lesson (Bluetooth chain, step 2) says pairing mode is "usually ... holding its button until a light blinks", and the worked ticket calls a blinking light "pairing mode". So the stated right answer, "put the speaker into pairing mode", contradicts the ticket and the lesson; the reason ("the speaker is the link that fails") is not what the ticket shows. | Make the ticket say the speaker has a steady light or no light and was last used with another phone; or change the right answer to the link the blink actually leaves (check the speaker is not still connected to another device, then remove stale entries). |
| L18-B2 | `l18-g-policy` | Policy says "install ... updates within two weeks". The ticket gives only "the last phone update was installed five weeks ago", not when the next update came out, so the learner cannot know the phone broke the rule. A right tap depends on a fact not given (R1-8 no. 13). The reason also says a fingerprint shortcut "is allowed", which the policy does not state. | Add to s3 "an update came out three weeks ago and is not installed", and add a policy line "Fingerprint: allowed beside the PIN" (or drop the claim from the reason). |
| L18-B3 | all of items-l18.js, items-l18-check.js (and reserve) | Answer by pattern (R1-8 no. 8). Wrong options carry a faulty justification clause ("..., since ..."): 17 of 45 wrong options in items-l18.js and 6 of 8 in the check, against 2 of 15 right options and 0 of 3 in the check. Right options are mostly plain actions; a learner who drops every option with "since" removes about a third of the wrong ones for free. | Rewrite so "since / because" appears on right and wrong options in about equal share, or on none. |

### Lesson 19

| # | File / item | Problem | Fix |
|---|---|---|---|
| L19-B1 | items-l19.js `l19-s-life` | Right option: "Lower the screen brightness, and limit the maps app to using location only while open" is two changes at once. R1-8 no. 12 (no exception) and the lesson's own `TWO` slips ("two changes at once") are broken, and the reason says "one at a time". | Make the first change one setting (the maps app, the 34 % line) and leave brightness for the next step; wrong options keep one change each. |
| L19-B2 | `l19-r-slow` (reserve) | Right option "Restart it, and free storage" is two changes, while a wrong option is marked `TWO` for the same fault. | Right option: free the storage (the line that is wrong) only; or restart only, matching the lesson's c4 row. |
| L19-B3 | `l19-s-compat` | The wrong option's reason says "The message names the operating system" and the right reason says "The app needs a newer OS than version 11". The ticket's message is "not compatible with this device", which names nothing; it can equally mean the hardware is too old. The right option's cause is a fact the ticket does not give (R1-8 no. 13). | Quote the real message in the ticket ("requires Android 14 or later" or the iOS equivalent) and keep the OS table. |
| L19-B4 | `l19-x-call` | Answer by pattern (R1-8 no. 8, R9-13 no. 3). Turn 1: the right option is the only question. Turn 2: the right option is by far the longest and the only one starting "Thanks". | Add a right-looking wrong option of equal length in each turn; make a wrong option in turn 1 a question too (for example "Which model is it?"); drop "Thanks." from the right line or add courtesy to the others. |
| L19-B5 | all of items-l19.js and items-l19-check.js | Same "since" pattern as L18-B3: 36 of 111 wrong options carry a "since ..." clause, 0 of 37 right options do. | As L18-B3. |

### Lesson 20

| # | File / item | Problem | Fix |
|---|---|---|---|
| L20-B1 | l20.lesson.js table row `f3`; items-l20-check.js `l20-k-ext` | False. With "Hide extensions for known file types" on, `invoice.pdf.exe` shows as `invoice.pdf`, not `invoice` (Explorer hides only the last known extension). The check ticket shows the name as "invoice" and the reason repeats the error. As written, the user's own words ("invoice.pdf", a PDF icon) and the table ("invoice", type Application) cannot both be true. | Row f3: "invoice.pdf.exe shows as invoice.pdf". Ticket table: Name `invoice.pdf`, Icon PDF, Type Application. Reason: "the real ending, .exe, was hidden; the name looked like a PDF". |
| L20-B2 | l20.lesson.js "The consoles" prose ("on any Windows computer"); items `l20-s-lusr`, `l20-k-policy`, `l20-r-gpedit` | False for two of the eight: lusrmgr.msc and gpedit.msc do not exist in Windows 10 or 11 Home. None of the three tickets states the edition, so the right answer depends on a fact not given (R1-8 no. 13). A+ Core 2 1.3 lists "gpedit.msc" as an edition difference. | Say once in the lesson: "lusrmgr.msc and gpedit.msc are in Pro, Enterprise and Education, not Home"; add "Windows 11 Pro" to the three tickets. |
| L20-B3 | `l20-g-call` | Answer by pattern (R1-8 no. 8). Both turns: the right option is the longest by a wide margin (turn 1 a full instruction; turn 2 the only one with "I hear you ... fair guess"). | Add a long wrong option each turn (for example a wrong tool described step by step) and shorten the right ones. |

### Lesson 21

| # | File / item | Problem | Fix |
|---|---|---|---|
| L21-B1 | l21.lesson.js rows `f1`, `g3`, `x1`, `x2`; items `l21-s-diskpart`, `l21-k-diskpart`, `l21-r-format-q` | Overclaims erasure. `clean` zeroes only the first and last 1 MB and leaves the disk uninitialized; the data is often recoverable (`clean all` zero-fills). A quick format (`/q`) rewrites the file system and leaves most contents on the disk. The lesson says "every file on it is gone" and the tickets are about wiping a stick for "the next person" or "a retired" stick, so the learner leaves believing it is wiped. | Wording: "removes the partition table: Windows sees nothing, but the data can still be recovered with tools. For a real wipe, `clean all` or the secure methods of lesson 26." Tickets keep the disk-number lesson but stop calling the result a wipe. |
| L21-B2 | `l21-s-chkdsk-r` (Joy: clicking, slow, files will not open, no backup) | Right option "Copy her important files off now, then run chkdsk C: /r". Lesson 11 (row d1 and its worked ticket, Boris) teaches clicking as "stop using it; copy the files off; replace the drive" and rejects "run a repair tool". The Microsoft page also notes /r reads every sector (hours on a large HDD). Contradicts an earlier lesson and this lesson's own warning. | Right option: copy the files off now, then treat the drive as failing and replace it (chkdsk /r is not the next step); keep the wrong option "run /r first" as the no-backup slip. |
| L21-B3 | `l21-x-call` | Answer by pattern (R1-8 no. 8). Turn 1: the right option is the only question. Turn 2: it is the longest by about double and the only one with two actions and the word "first". | As L19-B4. |

## MINOR

### Lesson 18
1. l18.lesson.js "Opening one safely": "touch bare metal" is the only grounding offered besides a strap; fine for A+, but say "an unplugged laptop on a bare metal part, ideally with a strap". The unsourced line "Phones and tablets are glued and partly soldered, so a desk often swaps the whole device" has no source in the research notes.
2. "The card does Wi-Fi and Bluetooth": true of most combo cards, not all; say "usually".
3. `l18-w-pair`: the notes never say the earbuds' light blinks or that pairing mode is on; the worked step supplies it. Add to notes.
4. `l18-s-board` (coffee on the keyboard): the first move for a liquid spill is power off and unplug (A+ Core 1 5.4 liquid damage; lesson 19 h5). The ticket never asks, and the right option does not mention it. Add "Shut down and unplug first" to the right option or the ticket.
5. `l18-s-dock`: power is a fair separator today only for basic replicators (CDW); USB-C replicators can charge. The ticket's "slot for an extra drive" is the better separator; make the reason lean on that.
6. `l18-s-cap`: right option is two changes plus a check ("Move video and photo sync ... and check which apps use data"); the three wrong options are extremes (all month, hotspot, 3G). Split it and give the wrong ones a moderate wrong move.
7. `l18-s-tether`: the right option names two methods (hotspot or tether); fine, but one answer per question is cleaner.
8. `l18-s-lost`: Nadia says "that check is done" without the technician doing it; the check should be the learner's step. Ruling 11 is otherwise met (desk's own check).
9. `l18-g-tries`: "one hour" is 9 failed tries on an iPhone with a possible 10th-try erase if Erase Data is on; the item says "some policies erase", which is correct. Apple's schedule not verified here.
10. `l18-g-byod`: ticket does not say the MDM supports a selective wipe; "managed only for the work apps" implies it. Add "the company can remove the work apps".
11. `l18-g-esim`: ticket does not say the phone supports eSIM or is carrier-unlocked; "no slot" implies eSIM only. Add "unlocked".
12. `l18-k-wipe`: a selective wipe runs only when the phone next contacts the MDM; this phone is in a lake. The right option should be "queue the work-data wipe, change his password and revoke his sign-ins"; today the reason says the wipe "removes the work data", which conflicts with the lesson's "once it is online". "Confirm it is Ray" in chat has no named method (ruling 11).
13. `l18-k-airplane`, `l18-k-battery`: right options are the longest in the item (pattern; see B3).
14. `l18-p-lock`: calling a pattern lock wrong is relative (A+ lists it as a screen lock); say "weaker than a PIN".
15. Reserve `l18-r-sim`: the ticket says the old phone "made calls well yesterday" but not that it was with this SIM; add it. `l18-r-point`: accepts "pointing stick" (fine).
16. `l18-g-policy` reason "Encryption on" etc. fine.

### Lesson 19
17. Lesson "bad app" order (save files, airplane mode, remove, scan, update, change passwords from another device, close root, reset last, tell the desk) has no source; the research notes do not give a mobile removal order. Mark it "this desk's order" in a quoted block, and move "tell the desk" earlier (others may have the app). Also `l19-p-ads`, `l19-s-data` right options skip "save the files" that the order puts first.
18. Table c8 and items `l19-k-app`, `l19-r-launch` reach "clear the cache"; iPhones have no clear-cache (offload app). Say "Android".
19. "Cutting a phone in half" table (q2): "If yes / If no" columns do not match the question; q3 "Gone: it was a stuck process" is an assumption. Rewrite rows as "If it works / If it does not".
20. s4 "often a free copy of a paid app" and z4 "the phone's own system does not warn with a countdown and a link" have no source.
21. `l19-s-charge`: "I keep it in my pocket" is ambiguous (cable or phone). The second table row swaps charger, cable and pad together, against the lesson's "swap one part at a time", and the reason says "two cables and two chargers" when the table shows one cable swap with the same charger.
22. `l19-s-bt` contradicts l18 table b3 ("paired, no sound": first pick the headset as the sound output and check it is not joined to another device). The right answer removes the pairing without checking the sound output.
23. `l19-k-air` option "Restart the phone": reason is muddled ("may work because the restart turns airplane mode off, but the phone stays in it"); a restart does not turn airplane mode off. Slip label `TWO` does not fit.
24. `l19-s-popups`: "A site cannot root a phone by itself" is too absolute. Notification-permission spam is not taught in the lesson text; add a row. Right option is two changes (remove permission, clear data).
25. `l19-s-ghost`: right option bundles dry, wipe, restart; say which is the one change.
26. `l19-k-root`: "removing the app and root returns the phone to a state that can be trusted" is unsourced; with root a malicious app may have persisted, and the lesson itself ends the order with a factory reset and the company scan. Add the scan and say reset if the scan is not clean.
27. `l19-k-hot`: right option adds "remove the cover", which the ticket never mentions; `l19-k-leak` fine.
28. `l19-s-av`, `l19-r-warning`, `l19-r-store`: the right option is the only refusal ("No ...") and every wrong one is a "Yes". Add a wrong option that refuses for the wrong reason.
29. `l19-r-dev`: right option is three changes at once (closing doors, so defensible), but ruling 12 has no exception; do one, then the next.
30. Comments: items-l19.js says group three "mixed with lessons 5 and 6" (the lesson says 5 and 18).
31. `l19-s-update`: "about 3 GB free" fine.

### Lesson 20
32. msinfo32 recall accepts "msinfo": no such name opens in Run; remove it. The other accepted short forms (eventvwr, diskmgmt, perfmon, taskschd) do work because .msc is in PATHEXT.
33. Table p-rows: "Administrative Tools" is "Windows Tools" in Windows 11; note once. Fast startup row: the switch sits under "Choose what the power buttons do", not on the plan screen; say so.
34. `l20-s-perfmon` reason: Task Manager's graph shows about 60 seconds, not "a few minutes".
35. `l20-p-driver`: a yellow triangle also shows in Devices and Printers; say "in Device Manager" in the ticket.
36. `l20-s-fast`, `l20-s-lang`, `l20-s-usb` wrong options are absurd (a sleep timer under Privacy; "Devices and Mouse" under a power plan). R1-8 no. 8 asks wrong options to be what a novice would really do.
37. `l20-k-startup`: right option disables BackupAgent; a backup agent off at start leaves the data unprotected (move 3). Add "after checking with the owner of the backup".
38. `l20-r-shrink`: reason says "the backup comes first" but the right option has no backup; shrinking a volume is a partition change (A+ lesson 3 move). Add "after a backup".
39. `l20-k-hib`: hibernate must be turned on in some builds; add "it is on in this laptop's menu".
40. Lesson prose: msconfig only mentions "which services load"; its Startup tab moved to Task Manager and its Boot tab is used in the check. Add one line.

### Lesson 21
41. Table `n`: "412,318,203,904 bytes is 384 GB" is 384 GiB (Windows' GB); decimal it is 412 GB. Say "384 GB as Windows counts it".
42. Table "robocopy against copy": row r1 is missing (ids start at r2); "copy stops at the error" is unverified (could not confirm; `copy` probably reports and moves on to the next match). `copy` and its /v and /y switches, which Professor Messer lists for 1202, are not taught anywhere. The A+ map in the repo does not list `copy`, so this is a gap against the live exam, not against the map.
43. `l21-p-copy` right option omits `/r /w`; with a Wi-Fi that drops, default robocopy waits 30 s a million times per failed file (Microsoft page), which the lesson itself teaches. Right option should be `/e /r:3 /w:5`.
44. Worked ticket Dana: copying from `D:\` also trips on System Volume Information and $RECYCLE.BIN; and if the drive's root is unreadable ("file or directory is corrupted") robocopy fails with the same error. Say "copy what can still be read" and show failures in the report.
45. `l21-s-chkdsk-c`: the repair of the main drive is run with no mention of protecting the data first (move 3; lesson teaches it two items earlier).
46. `l21-s-sfc`: "try another repair step" is vague. The Microsoft page's route is to read CBS.log and replace the file by hand; DISM is outside the A+ list. Name the step. "A repeat finds the same damage" is stated as certain (supported by the Microsoft page for this message, but not shown).
47. `l21-s-netstat`: "the web service is not running" overclaims; nothing on 80/443 only says nothing is listening there (could be 8080). The reason says so; the option should.
48. `l21-s-netuse`: "Unavailable" also appears for a persistent mapping not yet reached since sign-in; say "look at that share first".
49. `l21-s-netuser` (Fern): confirms the caller (ruling 11 met) but never asks why the account was turned off (a leaver or a security lock). Add "check the ticket history for why it is off".
50. `l21-s-diskpart`, `l21-k-diskpart`: no check that the stick's owner agrees the content can go (move 3); the two items are near duplicates (same 58 GB trick).
51. `l21-r-diskpart-after`: after `clean`, Disk Management shows "Not Initialized", not "unallocated space".
52. `l21-s-robo`: timeline: the 212 extras shown would be from this run, but the ticket says last week's deletion already removed them. State that the output is last Friday's run.
53. `l21-k-chkdsk`: plain chkdsk on an active volume can report spurious errors (Microsoft page) and does not check bad sectors; "the file system is sound" is fine but add "bad sectors not tested".
54. `l21-k-gpresult`: a domain laptop that last applied policy two days ago was probably off the network; the right option is still correct.

## Answers a learner can get by pattern (summary)

- "since ..." clause: wrong in almost every case (L18 and L19 tables above).
- The one question or the one long reply in every phone call: `l19-x-call`, `l20-g-call`, `l21-x-call`, and `l18-s-lost` turn 1 (the only option with "help right away").
- The only refusal or the only "Do not" among permissive options: `l19-s-sideload`, `l19-s-av`, `l19-r-store`, `l19-r-warning`.
- Absurd wrong options that need no knowledge: `l18-g-esim`, `l18-p-ram` (gloves), `l20-s-fast`, `l20-s-lang`, `l20-s-usb`, `l20-g-lid`, `l21-s-cd` (md/dir), `l21-p-map`.
- Duplicate templates: `l21-s-diskpart` and `l21-k-diskpart`.

## Right options that state facts the ticket does not give

- `l18-p-scan` (contradicts the blinking light), `l18-g-policy` (update age against "within two weeks"), `l19-s-compat` (app needs a newer OS), `l19-k-hot` ("remove the cover"), `l20-s-lusr`, `l20-k-policy`, `l20-r-gpedit` (edition), `l18-g-byod` (selective wipe supported), `l18-g-esim` (eSIM supported, unlocked).

## Claims with no source

- Lessons cite the A+ map and IT numbers only; no vendor page is cited for a command, tool or symptom. The facts I checked against vendor pages held, except those under BLOCKER.
- Not backed by the research notes: the mobile bad-app removal order; "pop-up cleaners are a common cover"; "a free copy of a paid app"; "phones are glued so a desk swaps the whole device"; "older gear uses 0000 or 1234"; the lost-phone order (it is quoted as the desk's rule in `l18-s-lost`, which is fine, but the lesson prose states it as a rule); "chkdsk can often repair without erasing" (l21 wrong-block).

## Departures from the nine moves, the chains and the rulings

- Move 3 (protect data) missing: `l21-s-chkdsk-c`, `l21-s-diskpart`, `l21-k-diskpart`, `l20-r-shrink`, `l20-k-startup`, `l18-s-board` (power off/unplug).
- Move 6 / ruling 12 (one change): `l19-s-life`, `l19-r-slow`, `l19-r-dev`, `l19-s-popups`, `l18-s-cap`.
- Ruling 6 / 11 (who is asking): met in `l18-s-lost`, `l21-s-netuser`; weak in `l18-k-wipe` (no named method) and `l18-s-lost` turn 2 ("that check is done").
- Ruling 13 (state what the answer depends on): see the list above.
- Ruling 8: see patterns.
- Chains: lessons 18 and 19 follow the plan (Bluetooth chain, data chain, five links of a phone). Lessons 20 and 21 are "tool for the job" lists; the plan also asks for the tool by question, so no departure, but no cheapest-test-that-splits step appears in lesson 20 or 21 beyond the worked tickets. Lesson 19's header comment and plan (Core 1 5.4) match.
- Ruling 1 (time limit) and 7 (closing): not touched in these lessons.

## Contradictions with earlier lessons

- `l21-s-chkdsk-r` against lesson 11 (clicking drive: replace it).
- `l19-s-bt` against lesson 18 table b3 (pick the sound output first).
- `l19-s-charge` table row 2 against lesson 6 / lesson 19 h3 ("swap one part at a time").
- Lesson 14 teaches ipconfig, ping, nslookup, tracert and pathping; lesson 21 asks `ipconfig /flushdns` in a mixed item (flushdns is in l14 row c4: consistent).

## A+ sub-bullets no lesson covers

Core 1 1.1, 1.2, 1.3 and 5.4 and Core 2 1.4, 1.5, 1.6, 2.8, 3.2 and 3.3 are covered bullet by bullet except:

- Core 1 1.3: "business applications" is shown only as mail and cloud storage; 3G is mentioned in one sentence with no symptom; Wi-Fi enable/disable has a question only through airplane mode.
- Core 2 1.4: msconfig's General, Services and Tools tabs (only Boot and "which services load" appear); regedit hives are not named; dfrgui on an SSD (it runs TRIM, not defragmentation) is not said; Task Manager's App history and Details are named but excluded on purpose.
- Core 2 1.5: `pathping`, `tracert`, `ipconfig`, `ping`, `nslookup` live in lesson 14 (checked: present). `whoami /all`, `mkdir`, `rd` aliases and `help` are not given. `copy` /v and /y are not taught (not in the repo's map).
- Core 2 1.6: all areas present; "System" in the Settings app is not one of the ten, so no gap.
- Core 2 2.8: all bullets present (encryption, screen locks, profiles, patching, endpoint security, locator, remote wipe, remote backup, failed log-in, MDM, BYOD). "Profile security requirements" appear only in `l18-g-policy`.
- Core 2 3.2: all bullets present; "OS fails to update" has one question (`l19-s-update`) and no iPhone version.
- Core 2 3.3: all bullets present; "developer mode" and "root" each have one item.
- Core 1 5.4: all bullets present.

## Verdicts

- **Lesson 18: not ready.** 3 blockers (the blinking-light item that contradicts its own chain, the policy item that needs an unstated fact, the "since" pattern). Parts, connectors, Bluetooth and sync facts held up.
- **Lesson 19: not ready.** 5 blockers (two items with two changes at once, the compatibility item's invented message, the call pattern, the "since" pattern). Symptom-to-link facts are sound.
- **Lesson 20: not ready.** 3 blockers (the double-extension display error, the `.msc` claim and edition gap, the call pattern). Task Manager, console, Power Options and Settings facts held up.
- **Lesson 21: not ready.** 3 blockers (wipe overclaim for `clean` and `format /q`, the clicking-drive item that contradicts lesson 11, the call pattern). Switches, outputs and messages for chkdsk, robocopy, net use, netstat, sfc and gpresult held up against Microsoft's pages.
