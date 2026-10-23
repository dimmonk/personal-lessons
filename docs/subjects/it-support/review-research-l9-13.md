# IT Help Desk lessons 9 to 13: research and fact check (2026-10-23)

Checker: Sonnet 5.5. Read: plan, both research notes, l9 to l13 lesson files, items-l9 to items-l13-check, subject.js, l5 and l6 (for the moves).

## Limits of this check (read first)

- Fact verdicts come from my knowledge of A+ and standard references. I tried to re-read CompTIA's Core 1 objectives PDF: one copy returned only logo artwork, two others returned 403 and 429. So the sub-bullet coverage below is checked against the A+ map in `docs/research/it-support-aplus.md`, which says it read the PDF in full. Items marked **verify** rest on my memory only.
- Core 2 (C2 1.2, 3.1, 2.7) is the map's version 2.0, not 3.0. Lessons 9 and 10 lean on it for boot methods and TPM.
- Facts I found correct are not listed one by one. Checked and correct: supply input and output voltages, 20+4 pin, 80 Plus ladder, form-factor order, AMD/Intel sockets, DIMM/SODIMM and notch, ECC, 32-bit 4 GB limit, thermal paste and pads, HDD speeds and sizes, SATA ~600 MB/s, M.2/mSATA/NVMe/SAS relations, RAID 0/1/5/6/10 minimum drives, fault tolerance and capacity, optical sizes, Cat 5/5e/6/6a speeds and the 55 m figure, T568A/B, plenum, direct burial, single/multimode and ST/SC/LC, USB 2.0 480 Mbps and 3.0 5 Gbps, Thunderbolt 40 Gbps, connectors, IPS/TN/VA/OLED/Mini-LED, printer parts and symptom causes.

## Findings by lesson

### Lesson 9 (10 findings)

1. **l9.lesson.js, link list, and items-l9.js (all items).** Problem: POST is run by the firmware, but the chain makes "self-test" link 2 and "firmware" link 3 as if separate programs. L11 then calls the missing-drive message a failure of the "start-up test" (see L11-2). Fix: say "the firmware runs the self-test, then shows its logo, then looks for a boot drive"; keep six links but name link 2 "self-test (run by the firmware)" and keep "logo shown" as the line between 2 and 3.
2. **l9-k-laptop.** Problem: the correct test swaps the charger AND the outlet at once, the exact fault l9-g-two and lesson 6 punish; "the charger has no light" is also unreliable (many chargers have no light). Fix: known-good charger in the same outlet first, then the original charger in another outlet; or drop the light detail.
3. **Plan lesson 9 lists C2 1.2 boot methods; no lesson content covers them** (USB, network/PXE, internet, multiboot, recovery partition). Only the boot order appears, in L10. Fix: add a short "ways to start a computer" row in l9 or move C2 1.2 to lesson 22 in the plan and say so.
4. **5.1 sub-bullets not covered in L9 or L10:** sluggish performance, application crashes, proprietary crash screens beyond the Windows blue screen (macOS pinwheel or kernel panic), swollen capacitor (one prose line, no item), inaccurate date/time only via the battery. Fix: one row each in the symptom table plus one item each for capacitor and sluggish (memory, drive, heat).
5. **l9-k-logo.** Problem: "Replace the power supply: power already worked" overclaims; a weak supply can pass POST and fail later. Fix: reason "nothing points at power" not "power worked".
6. **l9-g-two, l9-s-list, l9-k-list.** Problem: slip labels do not match (`wrong-side` and `wrong-link` are used for "cause the evidence excludes" and for "never move memory"). Fix: use `kept-ruled-out` for excluded causes and a `two-changes` or new slip for the memory-sticks option.
7. **l9-s-clock.** Problem: reason says "you do not need to cut the list further", which departs from move 5 (write at least two causes). Fix: list the dead battery and "Windows time sync off" and say the symptom picks the first.
8. **l9-r-clock.** Problem: a power cut alone does not reset a desktop with a good CMOS battery; the story implies it does. Fix: "The desktop was unplugged for a week and now ...".
9. **Worked ticket l9-w-marcus.** Problem: "presses each memory stick in firmly" is several changes then credits "it". Fix: reseat one stick, test, then the next, or say "one pass of reseating, then watch".
10. **Names.** Rosa, Ines, Marcus, Gus appear in L9 and L10 with different jobs (Rosa Planning vs Design, Marcus Accounting vs Technician). Fix: unique names per lesson.

### Lesson 10 (13 findings)

1. **l10-b-con accept list.** "PCIe x16" is rejected (the matcher splits to tokens; only "PCI-E x16" and "PCI Express x16" are listed). Fix: add "PCIe x16", "x16", "PCI Express 16x".
2. **l10-c-virt, l10-k-eff, l10-r-dualn accept lists.** Missing: "virtualization technology", "VT", "80plus", "two sticks". Fix: add them.
3. **l10-r-ddrnew, l10-r-am5, l10-r-dualn.** Problem: guessable. A higher DDR number is newer; AM5 vs Intel is 50%; "dual" is 2. Fix: ask for the notch consequence, the socket family of a named Intel socket, and which slots a four-slot board needs.
4. **3.3 channel configurations: single/dual/triple/quad appear only inside "reason" text (l10-k-dual, l10-r-dualn), never in the lesson body.** Fix: add one sentence and one item.
5. **Power connectors not taught:** 4/8-pin CPU, PCIe 6/8-pin, SATA power, Molex, with 3.5 "power" connectors and 3.6 install. Only the 24-pin is covered. Fix: one table plus an item (the graphics card has no power plug free).
6. **l10-p-volt and lesson text.** Problem: marks "the supply fixes itself" as wrong; many modern supplies auto-range. The lesson never says so. Fix: add "many modern supplies switch themselves; check the label".
7. **l10-f-tpm and firmware table b3/b4.** Problem: TPM can be firmware-based (fTPM/PTT) and the HSM text differs between table ("many systems") and item ("users"). Fix: one phrase on fTPM; one wording for HSM.
8. **l10-k-watt.** Problem: pure arithmetic, wrong options are 450 or "right plugs", and "well above" has no source or number. Fix: cite a rule (keep the load near half to 80% of the rating) or drop the number; add a distractor 550 W (adds up, tight) vs 650 W.
9. **DDR3 taught as in scope; the A+ map says only "DDR iterations".** **verify** whether 1201 lists DDR4/DDR5 only.
10. **Answer in the stem:** l10-k-arm ("found in phones and tablets"), l10-k-m2 ("plugs straight in, no cable"), l10-p-rail (the passage describes what 12 V does). Fix: describe the need without naming the feature.
11. **Impossible distractors:** l10-k-hot ("computer runs for 30 s" rules out notch and voltage). Fix: use distractors that fit the symptom: unseated cooler, failing fan, dust.
12. **x86 called "the 32-bit design".** Loose: x86 is a family that includes 64-bit (x86-64); A+ uses it for 32-bit, so keep, but say "called x86 on the exam".
13. **Chain.** The opening paragraph is a chain, but the lesson body is recall tables; symptoms (5.1 POST beeps, overheating, noise) are not tied back to the part jobs. Fix: add one row per part: "when it fails you see ...".

### Lesson 11 (13 findings)

1. **l11-k-usb.** Problem: facts doubtful. Most UEFI firmware skips a non-bootable USB stick and tries the next device; the stated result ("not found because USB is first") is true only on some legacy firmware. **verify** on real firmware. Fix: make the cause "the SSD's boot entry is missing" or "UEFI and legacy mode mismatch", or say the message was "Non-system disk".
2. **d4 row and l11-q-notfound reason.** Problem: "the start-up test found no drive" contradicts L9 (the firmware looks for the drive, after the self-test). Fix: "the firmware found no drive with a boot loader".
3. **l11-r-zero.** Problem: the keyed answer says "replace the drive and rebuild the array", but option 3 is wrong because "RAID 0 cannot rebuild". Fix: "recreate the array and restore the copy".
4. **d7 row and l11-k-alarm, l11-s-iops.** Problem: no step to check the backup before a rebuild (a rebuild stresses the surviving drives), no "same size or larger", and nothing on a second failure during rebuild. This contradicts the lesson's own "copy first". Fix: first move = confirm a current backup, then replace and rebuild.
5. **l11-q-cap trap text.** "Half, as RAID 1 and 10 give" is wrong for a four-drive RAID 1 (one drive's worth). Fix: "as RAID 10 gives".
6. **l11-q-six reason.** "Two copies of parity" is wrong: two different parity sets (P and Q). Fix wording.
7. **d5 row ("Windows side") and l11-s-missing.** Vague: Disk Management causes (no drive letter, offline, uninitialized, unallocated) are not named. Fix: list them with a pointer to lesson 20.
8. **3.4 optical:** no ROM/R/RW or dual-layer, and no SD size classes. **verify** whether the objective lists them. **l11-k-disc**: "the client's older computer can read" contradicts choosing Blu-ray. Fix: say "client has a Blu-ray drive".
9. **mSATA "smaller"**: not smaller than every M.2 length. Fix: "different, older connector".
10. **l11-s-notbackup.** "Recycle bin" is wrong for a network share; deletes there skip it. Fix: "backup or previous versions".
11. **l11-r-nvme accept list:** add "NVM Express".
12. **Slip labels:** `slower-pick` is used for discs that are too small (l11-k-disc), and `shape-speed` for wrong card shapes. Fix: add slips `too-small` and `wrong-shape`.
13. **Pattern:** the correct option often repeats a word from the stem (mSATA, RAID 1 "survive one", RAID 6 "two"). Fix: vary the wording.

### Lesson 12 (13 findings)

1. **Video table v3, l12-s-hdmi.** DVI is "digital only": wrong for DVI-I and DVI-A, which carry analog. Fix: add DVI-D, DVI-I, DVI-A and an item.
2. **Cat 3, 7, 8 and USB 3.1/3.2/USB4:** absent. **verify** whether the 1201 objective lists them (the map says "categories", USB 2.0 and 3.0 only). Fix: add one line each if listed.
3. **Adapters (3.2):** only one prose paragraph. No item; no USB-C connector row; no USB-A/B shapes; no mini-DisplayPort/HDMI. Fix: adapter table plus one item (DVI to HDMI cannot add sound).
4. **k5 OLED text and l12-k-burn.** "A still picture shown for years" understates; burn-in can show in weeks to months. Fix: "weeks to months of the same picture".
5. **l12-d-pixel.** "Software cannot fix it" overstates; stuck pixels sometimes clear with a pixel-exercise tool; dead pixels do not. Fix: separate the two.
6. **3.1 gamut:** taught, never asked. Mini-LED, VA only in reserve. SC and LC never appear as an answer. Fix: one item each.
7. **No chain.** L12 has "three questions" but no named chain (source, cable, input, display, backlight), which departs from the IT5 pattern the plan promises per system lesson. Fix: name it and place the 5.3 symptoms on it.
8. **Strand `cables`** holds network, fiber, USB, video and drive cables, so one weak fact drags a big group in the review. Fix: split into network cables, fiber, peripheral/video.
9. **Unsourced numbers:** 55 m for Cat 6, 9/50/62.5 micron, lamp 5,000 h. They are standard but cited nowhere. Fix: cite or mark as examples.
10. **l12-k-usb3, l12-k-light, l12-k-stp:** the stem names the answer ("blue USB 3.0 ports", "8 pins either way up", "shielded"). Fix: describe the need, not the answer.
11. **T568/crossover:** no mention that modern ports auto-detect, so a crossover is rare. Fix: one sentence.
12. **Thunderbolt:** only 3 and 4. **verify** whether the objective names others; Thunderbolt 5 is 80 Gbps.
13. **l12-p-run:** "10 Gbps over 85 m" assumes no wiring-closet limit; fine, but the wrong options are all slower-speed so the largest category wins. Fix: add a case where Cat 6 is right (30 m, 10 Gbps).

### Lesson 13 (13 findings)

1. **Print path table, test row t3, l13-w-stuck, l13-s-twopc.** Problem: "another person's computer prints, so the connection is fine" clears the printer-to-network side only. This computer's own port, IP or cable is still possible. Fix: split "connection" into "this computer's link" and "the printer's link", and add the port setting to the "left" list.
2. **No laser imaging process.** The "printer" link is a black box, though lines, speckles, ghosting and fading all sit on stages of it (charge, expose, develop, transfer, fuse, clean). This is not an objective in the map's text, but it is the chain the plan promises. Fix: add a six-step row, with each symptom on its step.
3. **l13-k-echo reason** says the maintenance kit replaces drum and fuser, but l13-c-laser defines the kit as rollers and fuser (the drum is its own unit). Fix: "the fuser is in the kit; the drum is replaced separately".
4. **Odd-one-out pattern.** In l13-p-lines, l13-p-garble, l13-s-twopc, l13-r-speckle, l13-k-blank, l13-k-echo the right option is the one that is not driver/queue/connection. A learner can pass without the facts. Fix: sometimes make the cause a computer-side link when the printer's test page is also faulty (two faults), or offer two printer-side options.
5. **l13-c-scan** second ask has two options (50%) with the answer in the stem. Fix: add ADF, flatbed, both, and a case with duplex scanning.
6. **3.7 sub-bullets with no item:** unbox/location, firmware update, IP address or port for a network printer (reserve it), duplex/tray/quality settings, badging, cloud scan. Fix: one item per bullet.
7. **5.6 "finishing issues"**: only a table row; no item.
8. **l13-c-setup.** Keyed answer needs a print server, but a printer on the network with direct IP printing also works. Fix: accept both or name the need "one place that holds the queue".
9. **"Safety data sheet" vs A+ "MSDS".** Fix: "safety data sheet (MSDS on the exam)".
10. **l13-c-laser "200,000 pages"** is invented; real kit intervals vary (about 50k to 225k+). Fix: say "the maker's page count".
11. **l13-g-wifi** uses router/wireless before lesson 14 and has a sender with no name ("Facilities"). Fix: name the sender; mix from lesson 5 only, as declared.
12. **Table titled "Inside the printer (its own test page shows it)"** includes jams, grinding and finishers, which a test page may not show. Fix: retitle.
13. **Wrong-answer wording:** `wrong-care`, `open-print` are fine, but several `poked-nearest` options ("reinstall the driver") appear when the test page already cleared them, which is `kept-ruled-out`. Fix: use that slip.

## Across lessons 9 to 13

- **Pattern answer:** in almost every choose item the right option is the gentle check ("look, copy, read, test page") and the wrong ones are "reinstall Windows", "order a new X", "replace the part". This is guessable. Fix: add items where acting at once is right (S.M.A.R.T. failing then replace; swollen capacitor then power down and replace; a cooling fault proven by temperature) and where "look first" is wrong because data or safety is at risk.
- **Slip labels** do not match the wrong choice in about 15 options (L9-6, L11-12, L13-13).
- **Contradictions with lessons 1 to 8:** L9-2 vs lesson 6; L9-7 vs lesson 5 (list at least two causes). No contradiction between L9 and L5's "before or after sign-in". L11 vs L9: L9-1, L11-2.
- **Structures carried over:** the same four-part scaffold (ticket, table, one worked ticket, group of 4/5/4, check) is used for recall lessons and for chain lessons; for L10 to L12 the recall tables lead and the "chain" opening is a paragraph. Not a defect alone, but the plan says recall lessons ask from memory with an explanation, which L10 to L12 do.
- **Plan vs lessons:** the plan check sizes match (L9: 6, L10: 8, L11: 8, L12: 8, L13: 6). Plan lists C1 3.7, 3.8, 5.6 for lesson 13; 3.7 items are weak (L13-6).

## A+ sub-bullets with no lesson coverage (3.1 to 3.8, 5.1 to 5.3, 5.6)

- **3.1:** color gamut asked nowhere; VA and Mini-LED only in reserve.
- **3.2:** adapters; USB-C as a connector; possibly Cat 3/7/8 (verify).
- **3.3:** triple and quad channel; non-ECC compared in a table.
- **3.4:** optical subtypes (verify); SD size classes (verify).
- **3.5:** CPU and PCIe power connectors; core configurations; integrated graphics.
- **3.6:** supply connectors other than 24-pin.
- **3.7:** unbox/location, firmware, network setup, badging item, cloud scan.
- **3.8:** laser calibrate and clean, inkjet roller and feeder, as items.
- **5.1:** sluggish performance, application crashes, proprietary crash screens, swollen capacitor.
- **5.2:** LED status indicators beyond amber/red.
- **5.3:** all symptoms present.
- **5.6:** finishing issues.
