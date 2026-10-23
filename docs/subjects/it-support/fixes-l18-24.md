
## Lessons 22 to 24

Files: `l22..l24.lesson.js`, `items-l22*.js`, `items-l23*.js`, `items-l24*.js`. No slips added; rev stays 1. Checked with `node --check` and `option-lengths` (l22, l23, l24 all ✓); validator, lock and renderer not run.

Rulings applied: Windows 11 needs UEFI firmware that is "Secure Boot capable" (Microsoft Learn), not Secure Boot on; recovery order is one wording in l22 and l23: Startup Repair, then System Restore or uninstalling the latest update, then reset or repair installation, then clean install, files copied off first (move 3); data before First Aid on a failing drive.

Lesson 22
- BLOCKER Q27 identity-sync wrong option no longer says a working sign-in proves a license.
- B1 FAT32 ticket (camera supports exFAT; copy onto the card; one file wanted); B2 repair-installation check ticket now a Windows that starts, smaller repairs used up; B3 Secure Boot wording in table, worked ticket, p-eleven, k-tpm; B4 Remote Desktop ticket states both machines are on the VPN.
- Taught now: cloud recycle bin, a missing TPM may only be switched off, mbr2gpt, device encryption, journaling, "sent from a server in each office"; Pro for Workstations without "(Windows 10)"; ext4 as default on Ubuntu and Debian; x86 System Type; 192 GB installed and 128 GB usable; k-tpm accepts "2"; k-apfs ticket says Disk Utility called the drive APFS; the "written after an argument" note became a table.
- Real novice moves replace absurd decoys (version 3.0 TPM, 64 GB for recovery, keyboard USB).

Lesson 23
- B5 ways-back table reordered (Startup Repair, driver, update, program, System Restore, reset or repair installation, clean install); safe mode is a place to undo from, not a way back; WinRE row holds safe mode, System Restore and a command prompt that copies files off.
- B6 x-call: every option now carries a time. B7 p-noos: files are on the company drive.
- USB wording is "not enough USB controller resources" (no Code 12); clock row separates battery, one-hour offset and drift; clean boot uses msconfig plus Task Manager; memory in safe mode is "some evidence"; "points toward memory"; roaming profile "copies what changed"; two-change tie-break (newer first) stated; Task Manager table sums to 15.9 GB; glosses for .dll, virtual memory; pronoun and garbled-option fixes; uninstall-a-program row added and Iris's ticket states the uninstaller leaves drivers behind.

Lesson 24
- B8 g-disk: mount and copy what can be read, then First Aid; "First Aid at once" is a wrong option.
- Rapid Security Response taught as Apple's quick security update, now Background Security Improvements (sources in the file header; Apple's own page not reached).
- Added ~/Library, Time Machine under General, curl.exe, ".dmg like a mountable ISO", sudo against chmod line, root as its own wrong screen, glosses (mount, certificates, ping -c). Ubuntu stub resolv.conf avoided ("Linux workstation"); Keychain ticket premise fixed; g-hosts no longer gives the answer; "/etc/hosts", "/etc/shadow", "/Applications" accepted explicitly; Windows tool dropped from five tickets; chown and fsck reserve tickets state approval and backup.

Left: strand labels for df/du/top/ps/man (linux-net) unchanged; pattern-matching of tickets in l22 groups only partly reduced.

## Lessons 20 and 21

`node --check` clean; option-lengths l20, l21 both ✓. Validator, lock and renderer not run. Sources in the lesson file headers (Microsoft Q&A for gpedit/lusrmgr editions; MITRE T1036.007; Microsoft clean and copy references; the full-format zero-fill is per ruling 21, Microsoft KB not reached).

Lesson 20
- B1 invoice.pdf.exe shows as invoice.pdf (table row, check ticket, reason). B2 lusrmgr.msc and gpedit.msc "not in Home" taught once; the four tickets state Windows 11 Pro. B3 call: a long polite wrong reply each turn, right replies short.
- Processes tab "lists everything running, background programs too" and a service also shows as a process; the Services item no longer says "programs with windows". msinfo no longer accepted. Check Ken stem: file, not program. msconfig tabs (General, Boot, Services, Startup moved), registry hives, Details tab and PID, volume, partition and build glosses, Windows Tools name, fast startup switch location.
- Wrong options made plausible (fast startup, USB, time zone); backup owner, backup before shrinking, hibernate on in the menu; "since" tails and guessed pronouns removed.

Lesson 21
- B1 erasing taught exactly: quick format and clean leave data recoverable, format without /q and clean all overwrite; tickets say "clear" not "wipe"; the check diskpart item now asks "is the stick wiped?"; Not Initialized after clean.
- B2 clicking drive: copy off, then replace; chkdsk /r not the next step. B3 call reworked as in lesson 20.
- Added copy /v /y, row r1, /r:3 /w:5, Extras, Denied (Security), port 3389, Details tab, sfc next step, 384 GB as Windows counts it, bad sectors not tested, gpupdate /force only, Fern's ticket history, files copied before chkdsk on C:, Friday timeline for robocopy, owner agrees before clearing a stick.

Left: reserve and group wrong options that carry ", so ..." tails were not all evened out; the mild-cheap-step distractor (review item 19) added only where noted.

## Lessons 18 and 19

`node --check` clean on all seven files; option-lengths l18 and l19 both ✓. Validator, lock and renderer not run. No reading text grown (two sentences cut, two rows added to l19 tables).

Lesson 18
- B1 p-scan: speaker on ten minutes, no light, no button pressed, phone lists other devices; right option is holding the button until the light blinks. B2 g-policy: a newer update came out three weeks ago and is not installed; policy line "Fingerprint: allowed as a shortcut beside the PIN". B3 all "since" tails removed from every option (rule 20), and the ", so / which" tails evened out.
- s-cap one change (photo sync to Wi-Fi, 7 GB named in the ticket), moderate decoy; s-board ticket says shut down, unplugged, dried; s-tether one method; s-dock leans on the drive slot; s-lost: the technician runs the check (Nadia answers, the desk passes it), call options equal length, a wrong one also says "help right away"; g-byod, g-esim ("unlocked"; roaming decoy replaces NFC), k-wipe (identity check, wipe queued until the phone is online, password changed) per review; pattern called weaker than a PIN; r-sim "with this SIM"; right options shortened (k-battery, k-airplane, p-lock).
- Lesson text: "usually" on the combo card, grounding wording, the unsourced "glued and soldered" sentence cut.

Lesson 19
- B1 s-life one setting (maps location; brightness now Automatic). B2 r-slow right option is freeing storage only; a restart is a wrong option. B3 s-compat quotes "This app requires Android 14 or later". B4 x-call: a wrong question added ("Which model?"), turn 2 options equal length, "Thanks." on right and wrong. B5 "since" tails gone.
- Added: water on the glass (h8), pop-up notification row (z7), "(Android)" on clear cache, "this desk's order" for a bad app, the yes/no table rewritten, unsourced "free copy" and "countdown" claims cut. s-charge three tests, one swap each; s-bt adds the sound-output test; s-popups, s-ghost one change; k-hot drops the cover; k-air restart reason fixed; k-root adds airplane/offline and the company scan; r-dev one change; r-warning, r-store, s-av get a refusal for the wrong reason; save-files first in the bad-app answers.
- People: each name has one job inside lessons 18 and 19 (Ana, Bea, Cal, Eli, Hal, Ivo, Jo, Ray, Tess, Zed duplicates renamed to Finn, Kurt, Milo, Owen, Remy, Suki, Theo, Otis, Edna, Stan); no guessed pronouns left.

Left: names still repeat with other jobs in other lessons of the subject (lead to settle).

## Confirm round (lessons 18 to 21)

`node --check` clean; option-lengths l18 to l21 all ✓. Validator, lock and renderer not run. No reading text grown.

- l18-k-wipe: identity check now also appears on two wrong options done wrongly (caller's serial number, caller's word); all four about 85 to 95 characters. g-tries: right option cut to one clause, wrongs lengthened.
- l19-k-leak, k-root, p-ads: Stan, Yun and Sam named in every option; wrong options are multi-step too (save files then change passwords on the same phone; remove the app, scan, stay rooted; and so on). s-compat now Version 13 offered 14; p-swell semicolon gone.
- l20: g-drv driver date "Tuesday"; k-startup "check with the backup's owner" removed from the right option.
- l21: s-netuser right option shortened, wrong options carry caller-supplied checks; k-diskpart right option 113 to 85 characters, others lengthened; k-dirfree has a wrong "Yes", dir output shows . and .. (3 Dir(s), deciding line a7); k-gpresult "his" to "their"; lesson "she says she is happy" to "Dana is happy".
- Pronouns: grep for he/she/his/her/him in l18 to l21 lesson and items files returns zero.

## Confirm round (lessons 22 to 24)

`node --check` clean; option-lengths l22, l23, l24 all ✓. Validator, lock and renderer not run. No reading text grown.

- Ruling 20: every "since" and "because" tail removed from options in l22 (27), l23 (26) and l24 (3); counts are now zero on right and wrong alike. Shortened wrong options were lengthened with plain steps (no reason clauses) so the right option stays the longest in 5, 4 and 8 of 24, 24 and 20.
- l23-x-call turn 1: right option is a question of 88 characters, a wrong option is also a question ("Which model is the computer?"), and a wrong option is the longest polite statement.
- Ruling 22: he/she/his/her/him for ticket people replaced by name or they/their in l22, l23 and l24 (lesson texts, intro, w-dns, k-corp, k-chmod); grep returns zero.
- Minor: l22-k-n no longer says the Camera app is missing; semicolons on right-only options removed (p-gfx kept, k-n, g-two changed); l22 right options trimmed (w-eleven, p-gfx, s-rdp, g-dist, k-path).
- Open item, strand labels: strand "linux-net" retitled in subject.js to "Linux commands for the network, running programs, disk space and help" so df, du, top, ps and man sit under a fitting label (the only edit outside l22 to l24).
- Open item, l22 pattern tickets: the image, zero-touch, BitLocker (two tickets) and multiboot tickets now describe the situation instead of repeating the table phrase; their reasons name the described cue.

Left: names repeat jobs across lessons (lead to settle); l22-p-domain decoys not touched.
