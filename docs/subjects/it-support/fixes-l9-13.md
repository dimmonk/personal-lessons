# IT Help Desk lessons 9 to 13: fixes (2026-10-23)

## Lesson 11

Files: `l11.lesson.js`, `items-l11.js`, `items-l11-check.js`; two slips added to `subject.js` (`too-small`, `wrong-shape`).

- **Boot wording (learner 2, research 2).** "Start-up test found no drive" is now "the firmware found no boot drive"; "start-up order" is "boot order"; the lesson row and the question reasons match lesson 9. The row also says a USB stick with nothing to start on is usually skipped.
- **Check `l11-k-usb` (learner 1, research 1).** Rewritten: the SSD is not listed after the cable and power were checked and a cable known to work was tried, backup is current, so replacing is right. Wrong options: stick out (no split), boot order and reset to defaults (firmware settings that do not split).
- **RAID 0 (learner 3, research 3).** `l11-r-zero` right answer: copy off, replace, make a new array, copy back; added a "wait a week" decoy.
- **Rebuild safety (research 4).** Symptom row, `l11-k-alarm` (ticket now has a three-week-old backup; copy first; decoy "swap now"), `l11-s-iops` (check the backup, then replace); same size or larger and a second failure during rebuild named in the row.
- **Capacity and parity wording (research 5, 6).** Trap text now says RAID 10 gives half; RAID 6 keeps "two sets of parity".
- **Windows-side causes (research 7).** Row d5 and `l11-s-missing` list no letter, offline, uninitialized, unallocated; the tool is left to a later lesson.
- **mSATA (research 9), disc (8), notbackup (10), nvme (11, learner 4).** "Older card shape with its own slot"; "the client has a Blu-ray drive"; "earlier versions of the folder"; NVMe accepts NVM Express, NVMe SSD, NVMe drive, PCIe NVMe; "Four letters" removed.
- **Echo phrases (learner 5).** "as the sheet says" and "which matches the slot" removed.
- **Words (learner 7).** Lanes, controller (twice), rebuild, drive bay, defragment and "protocol" each explained or replaced at first use.
- **Order question (learner 8).** `l11-r-order` now six steps: stop using, copy, replace, firmware lists the new drive, restore, user confirms.
- **Decoys and pattern (learner 9, cross C1, research 13).** Added a careful-but-wrong test (full drive check, `l11-q-notfound`); replacement is the right answer in `l11-k-usb`; right options reworded so they no longer repeat the stem.
- **Slips (research 12).** Discs: `too-small`; wrong shapes: `wrong-shape`; SAS definitions: `mixed-look-alike`; card reader decoys: `wrong-part`; replace-before-checking decoys: `part-first`.
- **Pass rule (learner 6).** Kept `no-backup` at 0; it is now exercised by `l11-k-smart` (full disk check) and `l11-k-alarm` (swap now). Check 20's reason now says why copy first.
- **Coverage (research 8).** The Core 1 3.4 text lists only "Optical drives" and "Memory cards", with no subtypes or SD size classes, so none were added.

## Lesson 9

Files: `l9.lesson.js`, `items-l9.js`; one slip added to `subject.js` (`refused-cheap-test`). Rev stays 1. Names changed to Malik, Ilsa, Rhea, Bram (research 10). Option lengths: right option longest in 4 of 16 (was 13), no reserve item flagged.
- Learner 1, research 1, ruling 1 (boot order and who finds the drive): the six links reworded once: the firmware runs the self-test, shows its logo, then finds the boot drive in the boot order; boot order sits on link 3, link 4 is the drive and its start-up files. The "no bootable device" row, l9-p-nodev (right answer now "Firmware ... found no drive it can start from"), l9-s-list and l9-s-next reasons follow. "Firmware" is now an answer option in p-dead, p-beeps, p-nodev and the reserve (learner 10).
- Learner 2: Dev's test row now "five minutes, the same wait".
- Learner 3, research 2 (check 13, charger and outlet at once): l9-k-laptop is now "own charger into another outlet"; the charger-light detail is gone; "swap both together" is a `two-changes` wrong option.
- Learner 4, research 8: l9-s-clock and l9-r-clock reasons/story fixed (Windows reads time from firmware; "unplugged for a week").
- Learner 5, 6, 7, research 3, 4 (lesson text): blinking-line row; driver, motherboard, heat sink, video card, recovery partition explained; "unplug it from the wall, do not open it while plugged in"; boot ways (drive, USB, network, recovery partition, USB with nothing is skipped), wrong-device start row; Mac color wheel / kernel panic row; sluggish and one-program-crashing row; swollen capacitor line; new reserve items l9-r-bulge and l9-r-slow.
- Learner 8, 9, C1, C2, C5, ruling 2, 3, 8: wrong options now include cheap tests on the wrong link or that do not split (outlet on a working computer, boot order with no drive listed, monitor test after a logo); new l9-s-dead where replacing the drive is right (cable and second computer already failed, files on the server); calls: say-back opening, question wrong options, right reply holds the line against a reinstall (Ilsa) and gives a time (Bram), wrong options also carry times. Restart reworded as "repeat, not a test" is kept only where power is already shown to work. Right options no longer longest.
- Research 5: l9-k-logo reason says nothing points at power. Research 6: slips relabelled (`kept-ruled-out`, `two-changes`, `credited-one`, `refused-cheap-test`, `part-first`). Research 7: clock reason lists two causes. Research 9: worked ticket reseats one stick, tests, then the next. C3: the lesson says reseating does not touch the files. C4: "known to work" everywhere.
- Not done: LED status indicators (5.2) belong to lesson 11.

## Lesson 12

Files: `l12.lesson.js`, `items-l12.js`, `items-l12-check.js`; `subject.js` strand `cables` split into `net-cables`, `fiber`, `peripheral` (`connectors`, `display` kept). No new slips. Rev stays 1.

- Ruling 5, research 7: the chain is named (computer's port and settings, cable and adapter, screen's input, panel/lamp); the symptom table has a Link column; the order is cheapest check first, one change at a time.
- Learner 1 (worked ticket): rewritten. Source button first (rules out the input), then the favorite (cable swap, with the one-fault caveat), then the adapter moved to the USB-C port marked for video (the real fault).
- Ruling 6, research 1, learner 3: DVI-D digital only, DVI-I both, DVI-A analog; coax split into its own table; new item l12-s-dvi.
- Research 3: adapter table (USB-C to HDMI, DVI to HDMI no sound, HDMI to VGA converter, mini plugs) and USB-A/B/C shapes; l12-d-audio is now a DVI-to-HDMI adapter ticket. Research 2: Cat 7/8 line, later USB versions, Thunderbolt 5 (Cat 3 dropped, not confirmed in the objectives).
- Research 4, 5: burn-in is weeks to months; stuck pixels can clear with a pixel-exercise tool, dead ones never.
- Research 6, learner 8: gamut, aspect ratio, fuzzy focus, SC, LC, micro/mini, DVI, Mini-LED, DB9, USB 3.0 all asked in practice or reserve.
- Research 8: strand split (above); reserves hold three or more per strand.
- Learner 2, research 10: stems describe the job, not the table phrase (plenum, ST, IPS, Molex, USB speed, STP).
- Learner 4, 6, 7: glosses for modem, router, switch, console port, keystone, aspect ratio; Lightning vs Thunderbolt line; eSATA is copper.
- Learner 5: accepted answers added (ST plug, straight tip, Molex plug, DB9 connector, D-sub 9); duplicate forms removed (V74).
- Ruling 2, learner 8, C1: wrong options include cheap non-splits and two-change moves; right-with-replacement items added (l12-d-tintmon: tests cleared cable and computer, replace the monitor; l12-d-lamp: replace the lamp). Learner C5: call l12-d-call where the user pushes for a new projector and the right reply holds to the one-button check.
- Learner 9, research 11, 13: crossover rare (r-crossover); l12-s-short has Cat 6 right at 30 m; Cat 5e item.
- Option lengths: right option longest in 1 of 34 (`node tools/option-lengths.mjs it-support`).
- Lessons-wide: reading share trimmed by moving reserve questions into the groups; V73 clear for l12. Other lessons' V70 failures (l13) are not mine.
- Not done: mix of earlier lessons is on group 4 only (l5, l6, 30%).

## Lesson 13

Files: `l13.lesson.js`, `items-l13.js`, `items-l13-check.js`; two slips added to `subject.js` (`missed-second`, `gave-in`). rev not raised. The validator's reading share could not run on the real tree (other lessons fail shape), so it was run on a scratch copy without them: l13 passes V73, no failure names l13.

- **Connection split (research 1):** "the connection from this computer" (port, cable, wireless, address) is separate from the printer's own network link; test 3 now clears only the printer and its link; Marta's worked ticket, `l13-s-twopc` and `l13-g-wifi` follow it. One-fault assumption stated once.
- **Laser process (ruling 5, research 2):** new table of the seven steps, each defect on its step (garbled = processing, lines = charging, pale = exposing, faded/blank/specks = developing, pale/half pages = transferring, rub-off/echo = fusing, echo/dark marks = cleaning). Facts checked on two study sources; they differ on some causes, so the table keeps the points both agree on.
- **Learner 1 (blank/seal):** blank pages and sealing tape are taught in the developing row; `l13-k-blank` names the step.
- **Odd-one-out (research 4, learner 2):** lines, echo, blank, speckle, finisher items now offer a second printer-side wrong option; `l13-s-both` is two faults; `l13-g-rollers`, `l13-s-fuser`, `l13-r-speckdrum` are right with a replacement; `l13-g-feed` rewritten (damp paper) so the kit is the trap.
- **Table-in-stem (learner 2):** `l13-c-secure` drops "PIN or badge" from the answer and adds User authentication as a decoy; `l13-g-wifi` has no "router"; `l13-g-next` loses the duplicate test.
- **Call (learner 3, C5):** `l13-s-call` right turn is a statement setting a one-minute test; second turn she demands a swap, right reply holds the line and notes the repeats.
- **Others:** "200,000 pages" gone ("the maker's page count"); kit defined once, drum separate (fixes `k-echo`); sideways is "from one program"; `l13-c-setup` right answer is "on the network, no one's computer on"; inkjet row has white streaks; calibrate defined; "safety data sheet (called MSDS on the exam)"; "a cable known to work" everywhere; audit-log distractor is the page counter; slips use `kept-ruled-out` where a test cleared the cause; named sender Nadia.
- **Uncovered A+ bullets added as items:** unbox/location (`c-place`), firmware (`c-firmware`), fixed IP (`c-address`), duplex/tray/quality (`c-defaults`), badging (`c-badge`), cloud scan (`c-cloud`), ADF vs flatbed and two-sided scan (`c-scan`, `c-duplexscan`), finishing issues (`r-finisher`), inkjet roller and feeder (`r-inkfeed`), laser calibrate and clean (in the care table; no separate item).
- **Left open:** the "mix from earlier lessons" is added at run time (set 3 declares `l5`); the learner view does not show it.

## Lesson 10

Learner review (defects 1-8, C1-C4, C6) and research review (findings 1-13), all fixed at the root:
- M.2 is a slot shape everywhere (lesson text, `l10-b-m2`, `l10-k-m2`); the answer no longer sits in the stem.
- Recall without leaks: `l10-r-am5` (LGA 1700, maker), `l10-r-ddrnew` (family of four sticks), `l10-r-dualn` (which slots), `l10-k-arm`, `l10-k-eff`, `l10-p-rail`, `l10-b-fit`, `l10-c-socket` stems reworded. Accept lists widened (PCIe x16, VT, virtualization technology, 80plus).
- Channels taught (single, dual, triple, quad, paired slots) and practised (`l10-m-chan`); power plugs taught and practised (`l10-p-conn`); non-ECC, integrated graphics, cores, PCI vs PCIe, capture card, symptom table per part added.
- Wattage rule: 30 to 50 percent above the total; check has 650 W right, 550 W as `tight-psu`. Auto-ranging supplies taught (`l10-r-auto`); HSM and TPM worded once (fTPM phrase).
- Not always the cheap option: `l10-k-fans` (dead fan, replace it; cleaning is the trap); `l10-c-arch` backs up first; `l10-k-hot` distractors fit the symptom.
- Every check fact practised first (80 Plus, M.2, ARM, firmware vs boot password, dual channel). Boot order wording follows lesson 9; USB stick skipped (`l10-r-usbskip`). Names made unique. Group 3 mixes in lesson 9. New slips: `tight-psu`, `wrong-slots`.
- Not changed: DDR3 stays as "older still"; the exam's exact DDR list could not be confirmed online.

## Round 2 (2026-10-23, after `review-learner-l9-13-round2.md` and `review-research-l9-13-round2.md`)

Not run: validator, lock, renderer (the lead runs them). Run: `node --check` on every edited file; `node tools/option-lengths.mjs it-support` (l9 to l13 and reserve all ✓).

- **Lesson 9:** link 2 now says the firmware runs the self-test first and a logo means memory and video started; "operating system not found" follows the table's links 3 and 4; how files come off a machine that will not start (drive in an enclosure, second computer) added in one line; `l9-g-smell` no longer says "hand it on"; `l9-s-clock` states only what the ticket gives; call `l9-x-new`: "Is it plugged in?" now marked for what it covers (link 1 only), the right reply promises "today" (the ticket asked for today), and all four replies are equally warm; call `l9-k-call` wrong reply as long as the right one; `l9-k-laptop` asks "which test do you run first".
- **Lesson 10:** 80 Plus says Titanium wastes least, Bronze most (items follow); top safe temperature taught (the maker's figure) and given in every temperature ticket (48/100, 97/100, 100/105); "30 to 50 percent" gone: lesson says leave room above the total, `l10-k-watt` carries a quoted desk rule (20 percent) so 650 W is right and 550 W is not; worked ticket says "well over"; DDR3 named once as an older generation; "switches off hot" moved off the processor row; boot password "cannot be started"; solid-state drive glossed; `l10-k-hot` ticket shows "bare metal on bare metal" in the table instead of "I did not put paste"; `l10-r-am5` asks for the maker's name, not Intel or AMD.
- **Lesson 11:** BLOCKER 1: `l11-r-order` has "Put Windows on the new drive" before restoring (matches check 21). BLOCKER 2 (research B1): `l11-r-array` carries a quoted desk rule (hand on after 20 minutes) and d8 says hand on only when the desk's rule says so. Also: company share is "if she has access to one"; rebuild reason is "if the survivor fails, the copy is the only way back" (d7, `l11-k-alarm`); `l11-k-usb` says the drive has to be replaced and the backup makes it free; "can mean" for the controller; TB, protocol, uninitialized and unallocated glossed; the `no-backup` slip reads "data that has no other copy" (subject.js), so a pick that risks nothing uncopied is not counted.
- **Lesson 12:** unsourced numbers: Cat 6 55 m kept with "less near electrical noise" (Wikipedia, Category 6 cable; ICC citing TIA TSB-155-A) and multimode "a few hundred meters" (Promax network distance limits), both cited in the items file header; fiber microns, Cat 7 and 8, USB 3.1/3.2/USB4 and Thunderbolt 5 removed; lamp hours are given in each ticket. "DVI normally carries no sound" everywhere. Lamp item no longer relies on a red light (a warning light that is on). Flashing item states the old rate (60 Hz to 144 Hz). Serial item asks about the laptop end. `l12-d-tintmon` adds the monitor's own color reset (also in the table). `l12-r-shield` now a different ticket (bank of lights and transformers); `l12-r-cat5e` states a 60 m run and 1 Gbps switch ports.
- **Lesson 13:** BLOCKER: `l13-r-conn` says a known-good cable clears only the cable; the port is next, then the driver. Seven-step table is marked in the header as a teaching model with its sources (Professor Messer, laser printers; Microsoft Press A+ Rapid Review: Printers); echo images sit on drum or fuser and cleaning (table and `l13-k-echo`, "exam words" line gone); the fuser row says too cool or worn. `l13-r-speckdrum` adds "rubs off" so the fuser is selected; the kit is said to be scheduled maintenance by page count. `l13-s-faded` says toner is the cheapest first look. Call `l13-s-call`: the right turn asks a colleague to print the same job, then the queue. Driver row no longer mentions trays. `l13-k-audit` has a named sender and says the desk lead approved the lookup. Two-question items split (`l13-c-duplex`, `l13-c-draft`, `l13-c-scan`, `l13-c-flatbed`); new recall `l13-c-msds` asks the MSDS fact.
- **Names:** every name used in l9 to l13 with another job anywhere in the subject was renamed (about 100 renames, one new name per name-and-job pair); l11 and l13 story names (Tomas, Sam, Ana, Mia, Omar, Pavel, Tom, Anna, Marta) and l9's Pat also renamed. A re-scan finds no reused name with a different job inside l9 to l13 or against the other lessons' speakers.
- **Left for the lead:** lesson locks and any test that lists item ids (new ids `l13-c-duplex`, `l13-c-draft`, `l13-c-flatbed`, `l13-c-msds`; `l13-c-defaults` removed).
