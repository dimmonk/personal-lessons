# Confirm review: IT Help Desk lessons 18 to 24 (2026-10-23)

Read: rulings (rulings-l1-8.md holds rulings 20 to 22; rulings-l9-13.md), the four reviews, fixes-l18-24.md, and every lesson, items, check and reserve file of l18 to l24. No node run. A small Python script (scratchpad) counted option lengths and "since" tails; recall.js was read to check the answer matcher. WebSearch: Background Security Improvements confirmed (Apple's iOS/macOS 26.1 successor to Rapid Security Response); the Media Feature Pack pages do not list the Camera app.

## Verdict per lesson

| Lesson | Verdict | Open blockers |
|---|---|---|
| L18 | NOT PASS | N1 |
| L19 | NOT PASS | N2 |
| L20 | PASS | none |
| L21 | NOT PASS | N3, N4 (pronoun) |
| L22 | NOT PASS | N5 ("since" tails), N4 (pronouns) |
| L23 | NOT PASS | N5, N6 (call), N4 |
| L24 | NOT PASS | N4 (pronouns) |

## Part 1: earlier BLOCKERs

| Blocker | Status | Evidence |
|---|---|---|
| L18 p-scan (blinking light) | FIXED | Ticket: no light, no button pressed, phone lists other devices; right option holds the button until the light blinks. |
| L18 g-policy | FIXED | s3 states a newer update 3 weeks old not installed; p6 states the fingerprint rule. |
| L18 "since" tails | FIXED | None in items-l18 (counts: no "since"/"because" on any option). |
| L19 s-life (two changes) | FIXED | Brightness is Automatic; right option is the maps setting only. |
| L19 r-slow | FIXED | Right option is freeing storage only; restart and two-change options are wrong. |
| L19 s-compat | FIXED | Ticket quotes "This app requires Android 14 or later". |
| L19 x-call | FIXED | Turn 1 has a second (wrong) question; turn 2 options are close in length; "Thanks" is on a wrong option. |
| L19 "since" tails | FIXED | Counts balanced (", so" 13% of wrong, 11% of right). |
| L20 double extension | FIXED | Row f3, check ticket and reason say invoice.pdf.exe shows as invoice.pdf; Type column Application. |
| L20 lusrmgr/gpedit editions | FIXED | Lesson states Pro/Enterprise/Education only; s-lusr, k-policy, r-gpedit state Windows 11 Pro. |
| L20 call pattern | FIXED | Long polite wrong options each turn; right option is not the longest. |
| L20 Processes-tab false line (learner) | FIXED | Step 1 says a service shows as a process; s-svc feedback reworded. |
| L21 erasing overclaim | FIXED | Lesson f1/g3/x2, k-diskpart, r-format-q, g-destroy now say quick format and clean leave data recoverable; format without /q and clean all overwrite. |
| L21 s-chkdsk-r | FIXED | Right: copy off, then replace; chkdsk /r called not the next step. |
| L21 x-call | FIXED | Turn 1 has two questions; turn 2 right option is not the longest. |
| L22 Q27 (learner) l22-k-identity | FIXED | Feedback now says licenses decide what you can do, not which password the cloud accepts. |
| L22 s-fat | FIXED | Camera supports exFAT; copy onto the card; no impossible 5 GB file on FAT32. |
| L22 k-repair | FIXED | Windows still starts; smaller repairs used up; files copied first. |
| L22 Secure Boot wording | FIXED | r4, worked ticket, p-eleven, k-tpm say "UEFI, Secure Boot capable". |
| L22 s-rdp | FIXED | Ticket states both machines on the VPN and a ping answers. |
| L23 ways-back order | FIXED | Table: Startup Repair, driver, update, program, System Restore, reset/repair, clean install; safe mode is "a place to undo from". |
| L23 x-call turn 2 | FIXED | All three options carry a time; lengths 77 to 98. (Turn 1 is a new blocker, N6.) |
| L23 p-noos | FIXED | Ticket: files are on the company drive. |
| L24 g-disk | FIXED | Right: mount, copy what can be read, then First Aid; "First Aid at once" is a wrong option. |

## Part 2: NEW BLOCKERS

**N1. L18 l18-k-wipe (a scored check item).** The right option is 110 characters against about 50 for the others, and it is the only option that names the identity check. Ruling 8 (not the longest, not the only one with a person). A learner who knows nothing picks it. Fix: give two wrong options the identity step done wrongly (a number or name the caller supplies, ruling 11) and bring all four to a similar length.

**N2. L19 l19-k-leak, l19-k-root, l19-p-ads.** In each, the right option is the only one that names the user ("save Stan's files", "Back up Yun's files", "save Sam's files") and the only multi-step option; k-leak is 95 characters against about 44. Ruling 8. Fix: let wrong options be multi-step too (for example save files, then reset first; remove the app but change passwords on the same phone) and name the person in all or none.

**N3. L21 l21-s-netuser.** The right option is 117 characters against about 60 and is the only one with the desk's identity check. Same cure as N1. (Not a check item.)

**N4. Ruling 22, guessed pronouns.** L18 to L20 are clean. Remaining:
- L21: items-l21-check.js `l21-k-gpresult` ("his laptop").
- L22: l22.lesson.js why ("He ... he"); about 40 in items-l22*.js (Maya "her", Abe "his", Tom "his", Ben "his", Lena "her", Priya "her", Rosa "she/her", Vic "He", Arjun "his", Zoe, Una, Pia, Isla and others).
- L23: l23.lesson.js lines 13 and 67; about 25 in items-l23*.js (Pia, Rob "his", Tom "his", Iris "her", Nia "her", Ola "her", Ray "his", Wes "He", Mel, Lou "him", Odo).
- L24: l24.lesson.js why ("her Mac"); items-l24.js (w-dns "his machine"); items-l24-check.js (k-corp "her", k-chmod "his").
Fix: name or "they".

**N5. Ruling 20, "since/because" marks wrong options. L22 and L23.** L22: 21 of 119 wrong options carry "since" and 6 "because", against 1 of 36 right (18% against 3%). L23: 25 of 90 wrong against 1 of 30 right (28% against 3%). Examples: l22-s-fat, s-license, g-dist, g-bitlocker, g-sync, p-domain, p-gfx, k-identity, k-path; l23 s-zone, k-ram, k-time, k-usb and most group-2 wrong options. This is the same pattern that blocked L18 and L19 before. The fix log says L22 was "only partly reduced". Fix: remove the tails from wrong options (or add them to right ones in equal share). L24 and L21 are not affected.

**N6. L23 l23-x-call, turn 1.** The right option is the only question and the longest; the other two are plain statements. Rulings 3 and 8, and the same defect that blocked L19's call. Fix: add a wrong question ("Which model is it?") and a wrong long polite option.

## Part 3: MINOR

Lengths (ruling 8): the right option is the longest by 1.7 times or more in many practice items; worst: l18-r-mic, l19-s-bt, l19-s-update, l21-k-diskpart (check), l22-r-x86, l22-p-gfx, l22-g-dist, l24-g-rsr, l24-r-man. Even them out when fixing N1 to N3.

L18: g-tries right option is the longest and uses a semicolon (66 against 38). k-wipe tells a phone dropped in a lake it is "gone"; fine.
L19: s-compat shows Android 11 offered an update to 14, which is unlikely; l19-k-leak and k-root reasons repeat. p-swell right has a semicolon clause only on the right.
L20: g-drv ticket says the update was Tuesday but the driver date is "Today". k-startup right option alone says "Check with the backup's owner". Statement in l20-s-fast ticket is fine.
L21: ", so" tail is on 16 wrong against 2 right options (shape is mostly diagnosis-and-action, so mild). k-dirfree: the only "Yes" among three "No" options; its dir output omits "." and ".." entries so "1 Dir(s)" would be 3 on a real screen. k-diskpart right option is 113 characters against 57.
L22: N-edition lines say the Camera app is missing; Microsoft's Media Feature Pack lists Media Player, Groove, Movies and TV, Voice Recorder, Skype (Camera not confirmed). Worked ticket: msinfo32 says Secure Boot "Unsupported" while the firmware screen note says a Secure Boot setting that is off. p-eleven "TPM often off by default" unsourced. p-domain wrong options 2 and 3 are absurd decoys (hidden until Remote Desktop; N for company networks). Names repeat jobs across lessons (leave to lead, per fix log).
L23: s-zone ticket says "since Sunday" and the reason says "since a clock change" with no change stated in the ticket; k-time right option is three actions. res-profile2 and others use "him/her".
L24: prompts often restate the right option (k-chmod: "changes who may read, write or run a file"; r-man, r-ps, r-curl), so recall is easy; many tickets still name the Windows tool. `(etc) hosts`/`(etc) shadow` accept lists: recall.js turns "/" into a space and ignores punctuation, so "/etc/hosts", "/etc/shadow" and "/Applications" are accepted (the fix log's claim of explicit entries is not what the file shows, but it works). g-rsr right option is long and names the new Apple term, which is correct (confirmed above).
