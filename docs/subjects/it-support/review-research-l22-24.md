# IT Help Desk lessons 22 to 24: research and fact check (2026-10-23)

Read: plan, both research notes, both rulings files, l22..l24 lesson, items, check and reserve files, lessons 9, 20, 21, 25, 26 where they overlap. No node scripts run. Right-option lengths were judged by eye, not measured.

Sources read for uncertain facts:
- Windows 11 requirements, Microsoft Learn (updated 2026-07): "System firmware: UEFI, Secure Boot capable"; 4 GB, 64 GB, TPM 2.0, DirectX 12/WDDM 2.0; Home needs internet and a Microsoft account at setup. https://learn.microsoft.com/en-us/windows/whats-new/windows-11-requirements
- Memory limits, Microsoft Learn: Win 11 and 10 x64: Home 128 GB, Pro 2 TB, Pro for Workstations 6 TB, Enterprise 6 TB, Education 2 TB; 32-bit Windows 4 GB. **Windows 11 has Pro for Workstations.** https://learn.microsoft.com/en-us/windows/win32/memory/memory-limits-for-windows-releases
- Clean boot, Microsoft support KB 929135 (via search summary): msconfig Services tab (hide Microsoft services, disable all), then the Startup tab only points to Task Manager, where startup apps are disabled.
- Rapid Security Response: replaced by Background Security Improvements in Apple's 2026 systems (RSR deprecated January 2026). Secondary sources (FileWave KB, Mr. Macintosh, AppleInsider, Computerworld); Apple's own page not reached.
- "Not enough USB controller resources": a per-controller endpoint limit, worse behind hubs (Plugable KB, helpdeskgeek). Device Manager "Code 12" is a different, generic resource-conflict code; no source ties Code 12 to this USB case.
- SD cards: SDXC uses exFAT, SDHC/small cards ship FAT32, and some cameras refuse a card in the "wrong" file system (Transcend FAQ, Lexar article). So "most cameras read exFAT" is not guaranteed.
- Facts I held as established without a fetch (state as "known, not re-fetched"): FAT32 4 GB file limit; MBR 2 TB; NTFS read-only on Mac; APFS unreadable on Windows; mbr2gpt exists and runs before the firmware switch; WinRE opens after repeated failed starts; Event 41 "restarted without shutting down cleanly"; Ubuntu desktop resolv.conf normally shows the 127.0.0.53 stub; Windows 10 end of support Oct 2025.

## BLOCKERS

**B1. l22-s-fat (items-l22.js).** The ticket cannot happen: a FAT32 card cannot hold a 5 GB file, so "a 5 GB video would not copy off" is impossible, and cameras split at 4 GB. The right option also needs a fact the ticket does not give ("most cameras read exFAT"); SD cards that came as FAT32 may be refused by a camera if reformatted exFAT (ruling 13). Fix: make it a copy onto the card ("a 5 GB video will not copy onto the card from my PC"), state "the camera supports exFAT" in the ticket, and drop "most cameras read it" from the feedback. Also the TWO slip label on "two shorter files" is wrong (it is a workaround, not two changes).

**B2. l22-k-repair (items-l22-check.js).** Computer "will not start", right answer "repair installation". A repair install (in-place Setup) runs from inside Windows, not from a Windows that will not boot; for a failed start lesson 23 teaches Startup Repair in WinRE and "smallest way back first". The check item contradicts lesson 23. The lesson 22 table also defines "Repair installation" without saying how it starts. Fix: change the ticket to "Windows starts but system files are damaged (sfc cannot repair them), no backup, programs matter", or add the start-up mechanics to the lesson and the cheaper WinRE ways to the options.

**B3. Secure Boot "on" taught as a requirement (lesson l22 table r4; l22-w-eleven; l22-p-eleven; worked step "firmware switched to UEFI with Secure Boot on").** Microsoft: "UEFI, Secure Boot capable." Windows 11 does not require it switched on; PC Health Check/setup test capability. Lesson text says "UEFI with Secure Boot"; the worked ticket says Windows 11 "needs UEFI with Secure Boot" and p-eleven says Priya "already meets" it because it is On. Fix: teach "UEFI and Secure Boot capable (it can be turned on; turning it on is good practice, not a setup test)". In the worked ticket the failing line is UEFI (Legacy), with Secure Boot becoming available once in UEFI. Keep "TPM 2.0".

**B4. l22-s-rdp.** The user connects from an office computer to a home laptop. "Connection refused" has a second plausible cause the ticket does not exclude: the home router/NAT (needs forwarding or VPN). The wrong option "the router" is ruled out by "nothing in the ticket points at the router", but the ticket's own setup (two places) does. Right option relies on an unstated fact (ruling 13). Fix: add "both computers are on the company VPN/same network" to the ticket.

**B5. Lesson 23 "The ways back, smallest first" table contradicts its questions.** Table order: driver, update, System Restore, safe mode, Startup Repair, reset. Items treat Startup Repair as smaller than System Restore (l23-p-noos "the smallest way back"; l23-s-loop "System Restore is the next smallest way back" after Startup Repair failed). Fix: reorder the table (Startup Repair only mends start-up files and touches no programs; System Restore changes drivers and programs) or justify and remove "smallest" claims in the items. Also safe mode is not a "way back"; keep it as a tool but out of the ranking.

**B6. l23-x-call, turn "two".** The right option is the only one with a time ("2 PM") and also the longest and the only one with a plan; ruling 8 and ruling 3 forbid that pattern. Fix: give the wrong options a time or a person too, e.g. "Restart it a few more times and I will call you tomorrow at 9", "I will reinstall Windows tonight and call you at 8 AM".

**B7. l23-p-noos.** The lesson says "Copy the user's files out first if not saved elsewhere, before anything that rewrites system files". The ticket never says where Quinn's files are, and the right option runs Startup Repair without copying. The reason text admits the condition. Move 3 and ruling 13. Fix: add "Quinn's files are all on the company drive" to the ticket, or make "copy files first" part of the right option.

**B8. l24-g-disk.** Files "not backed up anywhere"; the right option runs First Aid (repair) first, claims it works "without removing what is on it" (no source; not guaranteed). Lesson 21 (line 116) teaches the same situation the opposite way: copy off what you can read, run the read-only check, repair last. Contradiction plus move 3. Fix: right option becomes "mount the drive in Disk Utility, copy what can be read, then run First Aid (verify first)"; remove the "without removing" claim.

Blocker count: 8 (lesson 22: 4, lesson 23: 3, lesson 24: 1).

## MINOR

Lesson 22
- l22.lesson.js editions table: "Pro for Workstations (Windows 10)". Windows 11 has it too (Microsoft memory-limit page). Drop the version tag. Also "desktop styles/UI" (A+ 1.3) is not covered.
- Home "No BitLocker": l22-g-bitlocker mentions "device encryption" which the lesson never explains. Add one line: Home has device encryption on some hardware, not BitLocker management.
- l22-g-multi: right feedback says "the firmware starts a boot menu". The menu comes from the bootloader on the boot drive (lesson 9 chain, lesson 24). Say "the start-up code on the boot drive shows a menu".
- l22-g-ram: "Task Manager shows only 128 GB in use" is wrong wording; it should say 192 GB installed, 128 GB usable.
- l22-s-bit: "x86-based PC (32-bit operating system)" is not the real msinfo32 value; System Type shows "x86-based PC" (64-bit shows "x64-based PC"). Remove the parenthesis.
- l22-s-mbr: "initialized as MBR" is inferred, not given; fine for teaching but say "which style?" in the stem or add Disk Management's "Partition style" line. Converting in Disk Management needs the volumes deleted; mbr2gpt is for a system disk. The feedback "after any files are copied off" is right.
- l22-g-ext4: reason says "ext4 is the default Linux file system". Fedora uses Btrfs, RHEL XFS. Say "the usual default on Ubuntu and Debian". Same for lesson table "The usual Linux default" (acceptable).
- l22-s-license: "you need a license to edit" is an invented message; lesson "without one the app opens view-only" is not sourced. Add "a vendor's wording varies".
- l22 lesson "Zero-touch ... at the user's first sign-in" is Autopilot-specific; A+ term is generic. Say "ready on first sign-in with no technician".
- l22-r-iso: wrong option "burn to DVD and use a drive from another computer" works; make it clearly impossible (server has no drive and no way to attach one) or remove.
- l22-s-backup: feedback "keeps files in most upgrades" is vague; say "keeps files but can fail partway".
- l22 coverage gaps (A+ 1.1-1.3): "update limitations" of vendor life cycle, PXE named for network boot, desktop styles/UI.

Lesson 23
- c1 safe-mode row, worked step "a bad memory stick would have crashed in safe mode too", l23-s-clean option 4: failing memory is intermittent and safe mode loads less; say "bad memory can still fail in safe mode, so a clean hour is only some evidence".
- t5 and c2 and l23-s-clean: in Windows 10/11 msconfig's Startup tab just opens Task Manager (Microsoft clean-boot steps). A clean boot uses msconfig for services and Task Manager for startup apps; lesson 20 already says Startup is a Task Manager tab. Fix t5: "msconfig: safe boot and which services load".
- l23-s-usb, l23-k-usb, w10: "Code 12" is a generic resource code; the Windows message about too many devices is "Not enough USB controller resources", caused by a controller's endpoint limit (more likely behind a hub). Use that message and keep Code 12 only if shown in a real Device Manager line.
- l23-k-ram: "the stop code names memory" overstated; MEMORY_MANAGEMENT can come from drivers too. Say "points toward memory".
- w4 / l23-k-roam: roaming profile "copied at every sign-in" simplified; it syncs changes from a local cached copy. Say "copies what changed, a lot when the profile is big".
- l23-g-copy: ticket mixes "My ... Her co-worker" (pronoun slip). l23-res-profile2 option 4: "Windows loading on every link" is garbled. l23-res-svc: reason says the owner enters the password, but the right option has the technician enter it; reword to "with the account owner".
- l23-g-two: nothing in the ticket decides driver first over update; add "the driver was the newer change" or accept either first.
- l23-s-shutdown: "Blue screen entries: None" is an invented log row; fine but say "no bug check entries".
- Wrong-option slip labels that do not match their text (l23-p-noos "REPEAT" on boot order, l23-res-bsodonce "TWO"): cosmetic.

Lesson 24
- Rapid Security Response: Apple replaced it with Background Security Improvements in its 2026 systems (secondary sources). The exam still names RSR. Teach both in l24.lesson.js and l24-g-rsr/l24-r? wording: "RSR (now called Background Security Improvements on current macOS)".
- Time Machine is under System Settings, General on current macOS, not a top-level area; say "found in System Settings".
- /Users/Library (user-level Library) is in the A+ list and not taught; add `~/Library` row.
- curl "No plain match": Windows ships curl.exe. Say "curl.exe in Windows 10 and later".
- l24-w-dns: on a stock Ubuntu desktop /etc/resolv.conf shows 127.0.0.53 (systemd-resolved stub), not a server address. Call it a Debian-style server or have `resolvectl status`. The worked ticket's own step hints at this ("network settings that write the file").
- l24-q-key: the saved logins lived on the old, rebuilt Mac; Keychain on the new Mac will not have them unless iCloud Keychain was on. The ticket's premise ("must be stored on the Mac somewhere") is false; ask only for the tool name or change the ticket.
- l24-r-chown: a departed person's files given to a new owner; a real desk asks who approved it (off-boarding rule). l24-r-fsck: no backup/unmount note. Both light, move 3 and ruling 6 flavour.
- l24-g-hosts recall: the prompt gives the answer away ("a file of the same name"). Remove that phrase.
- Strand labels: df, du, top, ps, man are information commands filed under linux-net.
- Check that the text engine accepts "/Applications" and "/etc/shadow" typed with the slash; accept list is `['Applications']` and `['(etc) shadow']` (could not verify the matching rule without running code).

## Claims with no source (beyond the sources above)
- l22: "Zero-touch ... first sign-in", "view-only without a license", ReFS "repairs itself" (needs mirrored storage), "Home 128 GB" is sourced.
- l23: roaming-profile behaviour, "bad memory fails in safe mode", the Windows analogy table of "ways back" ordering, "WinRE opens after failed starts" (known, not re-fetched).
- l24: all Windows counterpart pairings (File History/Time Machine, Credential Manager/Keychain, icacls/chmod, takeown/chown, Phone Link/Continuity) are the builder's own teaching device; the A+ map pairs few of them. Say so in the lesson comment.

## Departures from the nine moves, the boot chain and rulings
- Move 3 (protect data): B7, B8; l24-r-fsck; l22-k-repair.
- Ruling 8: B6.
- Ruling 13: B1, B4, B7; also l22-s-mbr (MBR inferred).
- Boot chain (ruling 1 of l9-13): l22-g-multi. Otherwise lessons 23 and 24 reuse lesson 9's links correctly (links 3, 4, 5, 6; "Operating system not found" matches lesson 9 row r4; time drift matches r3).
- Ruling 12 (one change at a time): clean.
- Time-limit ruling 1: no "hand on" appears; clean.
- Ruling 7/16: l23-s-restore wrong option 4 "close the ticket" correctly marked wrong; l23-x-call end states a call time and confirmation. Clean.

## Answers a learner can get by pattern
- Right option echoes the ticket's noun (dongle, Time Machine "backing the Mac up every hour", fstab "mount it by hand", chmod "not marked as allowed to run"). Acceptable in groups 1 and 2, but the check items l22-k-token, l24-k-chmod, l24-k-folder prompt ("plays the part that Program Files plays") hand over the answer.
- Absurd decoys in l22 and l24 (a Windows .exe on a Mac; "chmod every file"; "a version 3.0 TPM"; "64 GB memory for the recovery partition"; "plug the ISO in as a keyboard"; "Spotlight as the Dock"). A learner discards them without knowing the topic. Replace with real novice moves (ruling 2).
- l23 reasons "cheap test first" are the right answer in almost every ticket except the two "bigger step" ones (l23-k-full add RAM, l23-res-noback reset); these stand out.

## Right options stating facts the ticket does not give
l22-s-fat (camera supports exFAT), l22-s-rdp (reachable over the network), l22-s-mbr (initialised as MBR), l22-p-eleven (TPM setting exists in firmware), l23-p-noos (files saved elsewhere), l24-g-disk (First Aid will not remove files).

## A+ sub-bullets in Core 2 1.1-1.3, 1.8-1.11, 3.1 with no lesson coverage
1.1 vendor update limitations; 1.2 PXE by name; 1.3 desktop styles/UI; 1.8 /Users/Library; 1.9 none; 1.10 none; 1.11 none; 3.1 none (all twelve signs have items). Reasonable coverage overall.

## Verdicts
- **Lesson 22: not ready** (4 blockers: s-fat, k-repair, Secure Boot wording in three items, s-rdp; 11 minors). Most facts (editions, memory limits, FAT32, MBR, 32-bit, ISO, mbr2gpt order) check out.
- **Lesson 23: not ready** (3 blockers: way-back order, x-call pattern, p-noos missing data fact; about 10 minors). Technical content (stop codes, Event 41, dependencies, Log On tab, roll back, Windows Time) is sound; the Code 12 USB wording and msconfig startup claim need fixes.
- **Lesson 24: not ready** (1 blocker: l24-g-disk; about 10 minors including the stale Rapid Security Response). All Linux commands, /etc files and Mac tools check out and every 1.8/1.9 sub-bullet but /Users/Library is covered.
