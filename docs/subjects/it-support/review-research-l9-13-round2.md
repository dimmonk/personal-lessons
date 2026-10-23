# IT Help Desk lessons 9 to 13: research and fact check, round 2 (2026-10-23)

Checker: Sonnet 5.5. Read: plan, both research notes, both rulings files, round-1 report, fix log, l9 to l13 lesson files, items and check files, subject.js (slip ids only). No node scripts run.
Web checks (WebSearch, standard): DVI-to-HDMI audio (forums and a vendor listing: audio over DVI depends on the graphics card, driver and adapter); A+ 220-1201 RAM (study guides name DDR4 and DDR5, official objective text not retrieved); laser ghosting (repair FAQs: a ghost can come from the drum area, the cleaning blade or the fuser, so sources differ). Everything else rests on my knowledge of A+ and standard references; marked "unverified" where so.

## 1. Round-1 findings: status

**Lesson 9:** 1 FIXED (six links reworded; firmware runs the self-test, shows the logo, finds the drive via the boot order; l9-p-nodev right answer is firmware). 2 FIXED (l9-k-laptop is own charger to another outlet; both-at-once is the `two-changes` option). 3 FIXED (boot ways listed in link 3: drive, USB, network, recovery partition). 4 FIXED (rows r6b, r8, capacitor line, l9-r-bulge, l9-r-slow). 5 FIXED (l9-k-logo reason). 6 FIXED (slips). 7 FIXED (l9-s-clock reason lists two causes). 8 FIXED (l9-r-clock "unplugged for a week"). 9 FIXED (worked ticket reseats one stick, tests, then the next). 10 PARTLY: collisions inside L9/L10 are gone, but names recur across lessons with other jobs (see minor M1).

**Lesson 10:** 1 FIXED (accept list has PCIe x16, x16). 2 FIXED. 3 FIXED (l10-r-am5 asks maker of LGA 1700; l10-r-ddrnew offers DDR3/4/5 and DIMM/SODIMM; l10-r-dualn needs a colour pair). 4 FIXED (channels in lesson, l10-m-chan). 5 FIXED (power plug paragraph, l10-p-conn). 6 FIXED (auto-ranging, l10-r-auto). 7 FIXED (fTPM phrase; HSM worded once). 8 PARTLY: 550 W decoy and arithmetic added, but "30 to 50 percent above" is still stated with no source (M2). 9 NOT FIXED, still open: DDR3 kept as "older still"; the study guides I found name DDR4 and DDR5 only (M3). 10 FIXED (stems no longer carry the answer, except l10-k-hot, M4). 11 FIXED (l10-k-hot distractors fit). 12 FIXED ("the exam calls the 32-bit design x86"). 13 FIXED (symptom table "What you see when each part fails").

**Lesson 11:** 1 FIXED (l11-k-usb now a replace-the-SSD case with cable tried and nightly backup in the ticket; stick skipped). 2 FIXED (d4, l11-q-notfound say the firmware found no drive). 3 FIXED (l11-r-zero). 4 FIXED (d7 row; l11-k-alarm; l11-s-iops; backup first, same size or larger, second failure). 5 FIXED. 6 FIXED. 7 FIXED. 8 FIXED (disc, and no subtypes added: the map lists only "Optical drives"). 9 FIXED. 10 FIXED. 11 FIXED. 12 FIXED (`too-small`, `wrong-shape`, defined in subject.js). 13 FIXED in the main.

**Lesson 12:** 1 FIXED (DVI-D, DVI-I, DVI-A, l12-s-dvi). 2 FIXED but unsourced (Cat 7/8, USB4, Thunderbolt 5 are not in the A+ map; M5). 3 FIXED (adapter table, USB shapes, l12-d-audio). 4 FIXED (weeks). 5 FIXED. 6 FIXED. 7 FIXED (signal path with a Link column). 8 FIXED (strand split into net-cables, fiber, peripheral). 9 NOT FIXED: 55 m, 9/50/62.5 micron and the 5,000 h lamp are still uncited (the item-file header says "published ones" only; M6). 10 FIXED. 11 FIXED. 12 FIXED. 13 FIXED (l12-s-short).

**Lesson 13:** 1 FIXED (connection split into this computer's link and the printer's link; t3 clears only the printer side). 2 FIXED (seven-step table; unsourced, M7). 3 FIXED (kit vs drum). 4 FIXED (second printer-side distractors, l13-s-both, right-with-replacement items). 5 FIXED (l13-c-scan, c-duplexscan). 6 FIXED (c-place, c-firmware, c-address, c-defaults, c-badge, c-cloud). 7 FIXED (l13-r-finisher). 8 FIXED (c-setup). 9 FIXED (MSDS). 10 FIXED ("maker's page count"). 11 FIXED (Nadia; no router). 12 FIXED (titles). 13 FIXED (kept-ruled-out).

Cross-lesson round-1 items: pattern answer FIXED in the main (right-with-replacement: l9-s-dead, l10-k-fans, l11-k-usb, l12-d-tintmon, l12-d-lamp, l13-s-fuser, l13-g-rollers). Contradictions L9-2, L9-7, L11-vs-L9 FIXED.

## 2. New findings

### Lesson 9
- No BLOCKER.
- M-9a MINOR. `l9-g-smell` reason ends "power off, unplug, and hand it on": the desk-rule ruling (rulings-l1-8, 1) says hand-on comes only from a quoted desk rule. The right option says only "have it looked at". Fix: drop "and hand it on" from the reason.
- M-9b MINOR. `l9-s-clock` option "Windows' time setting off ... would not touch the firmware's other settings": the ticket never says other settings reset. Reword to what the ticket gives.
- M-9c MINOR. Link 2 says "when it passes, the logo shows" and items treat a logo as proof the self-test passed. On many boards the logo appears during POST. Say "a logo means memory and video started" (consistent with the items, less absolute).

### Lesson 10
- No BLOCKER.
- M2 MINOR. "30 to 50 percent above the total" (lesson, worked ticket, `l10-k-watt`, which marks a 10 percent margin as wrong) has no source. Common guidance is 20 to 30 percent, others say keep load near half to 80 percent of the rating. Cite a source or label it "this lesson's rule of thumb".
- M3 MINOR. DDR3 is taught as in scope; the 220-1201 guides I found list DDR4 and DDR5. Harmless as a decoy, but say "older still, not on the exam" or drop it.
- M4 MINOR. `l10-k-hot` stem says "I did not put thermal paste", so the stem names the answer (round-1 finding 10 pattern). Also a new heat sink often has paste pre-applied; the stem should say "bare surface".
- M10a MINOR. Table row f3 lists "switches off hot" under Processor; that is cooling (row f8). Remove.
- M10b MINOR. `l10-r-am5` asks "Intel or AMD" in the stem: a typed answer, but a coin flip. Ask for the socket family name or the maker without offering both.
- M10c MINOR. Boot password "so a stolen laptop cannot be used" overclaims (the drive can be removed). Say "cannot be started".

### Lesson 11
- **BLOCKER B1.** `l11-r-array` right option and lesson row d8 say "hand on if it stays missing" with no desk rule in the ticket. rulings-l1-8 ruling 1: hand-on comes only when the desk's own rule says so, shown in a quoted block; no feedback may say "hand on" because a fix failed. Fix: add a quoted desk rule to the ticket (for example "This desk's rule: hand on any array fault after 20 minutes") or change the option to "tell the user it stays open and note what you checked", and remove "hand on" from d8 or tie it to the rule.
- M11a MINOR. `l11-p-click` right option copies to "the company share"; the ticket does not say one exists (ruling 13 of l1-8). Say "to an external drive or the company share if she has one".
- M11b MINOR. `l11-k-alarm` and d7: "a rebuild works the survivor hard, so copy first". A copy also reads the survivor. The advice (current backup before a rebuild) is standard; the reason should say "if the survivor fails, the backup is the only way back", not "copy is gentler".
- M11c MINOR. `l11-k-usb` reason "the drive is dead" without trying another port or computer (l9-s-dead did both). It is acceptable only because last night's backup makes replacing free; say so, not "so the drive is dead".
- M11d MINOR. `l11-r-nvme` still says "a protocol" with no gloss (round-1 learner word).
- M11e MINOR. `l11-r-array` reason "often means the controller lost its settings, not the data" is unsourced; hedge to "can".

### Lesson 12
- No BLOCKER.
- M12a MINOR (fact). "DVI has no sound" / "No DVI cable carries sound" (l12-s-dvi option 4, l12-d-audio, a2 row, v3). Exam-standard, but some graphics cards and adapters do pass audio over DVI-to-HDMI (web check above: depends on card, driver, adapter). Say "normally carries no sound; some cards send it through a DVI-to-HDMI adapter, so check the card" or keep `l12-d-audio` ticket-specific ("this cable and laptop give none").
- M5 MINOR. Cat 7, Cat 8, USB 3.1/3.2/USB4 and Thunderbolt 5 are not in the A+ map objectives (3.2 lists categories, USB 2.0/3.0, serial, Thunderbolt). Unsourced extras; mark as "beyond the exam" or cite.
- M6 MINOR (round-1 9 open). 55 m, fiber micron sizes, 5,000 lamp hours, "few hundred meters": cite or mark as typical.
- M12b MINOR. `l12-d-flash` right option "back to 60 Hz": the ticket does not give the old rate. Say "back to the rate it had".
- M12c MINOR. `l12-d-tintmon` replaces the monitor without resetting its on-screen colour settings (a cheap check). Add "reset the monitor's own colour settings" to the table of tests, or as a decoy that is already done.
- M12d MINOR. `l12-r-shield` is a near-copy of check item `l12-k-stp` (same Gus, Plant, same motors): the reserve is not unseen. Change the reserve to a different symptom.
- M12e MINOR. `l12-r-cat5e` right option "No, Cat 5e already carries 1 Gbps" depends on run length and switch speed that the ticket does not state.

### Lesson 13
- **BLOCKER B2.** `l13-r-conn` reason: "If not, both are cleared and the driver is next." A known-good cable in the same port clears the cable only; the port is not cleared, and the lesson's own rule is that a swap clears only what changed. The next test is another port, not the driver. Also "the cable or the port was the fault" if it prints is wrong (the cable was). Fix: "If it prints, the cable was the fault. If not, the cable is cleared; the port is next (try another port), then the driver."
- M7 MINOR. The seven-step table and its defect lists have no cited source in the lesson or research notes (fix log says two study sources). The A+ map lists only the symptoms. Echo/ghost is placed on both Fusing and Cleaning; repair FAQs also put it on the drum area. Cite sources, and mark the table as a teaching model.
- M13a MINOR. `l13-r-speckdrum` and `l13-k-echo`: right option says "its fuser is worn" (the ticket gives only the page count), while the reason admits "fuser or the drum", and the drum is not in the kit. Ask for "the step where it sits" or give a ticket fact (hot, smudged print) that selects the fuser. `l13-k-echo` also says "the exam words it as a worn drum or fuser", which the A+ map does not say ("double/echo images").
- M13b MINOR. `l13-s-fuser` and `l13-g-rollers` apply a multi-part kit; lesson 6's no-exception one-change rule is in tension. Say once that the kit is scheduled maintenance by page count, not a diagnostic change.
- M13c MINOR. `l13-s-faded` reason "slow fade ... points at toner running low" ignores weak exposing and transfer rows in the same table; say "toner is the cheapest first look".
- M13d MINOR. `l13-k-audit`: the sender is "The manager", no name and no check that the request may be answered (salary data). Name the sender and say the desk lead approves the log lookup, or leave as is since the question is which feature.

### Across lessons
- M1 MINOR. Names recur with different jobs: Ben (Finance L9, Technician L10, IT team and Training L12), Dev (Engineering L9, Planning L13), Lou (Records L9, HR L12), Pia (Planning L9, Stockroom L10, Finance L12), Una (Technician L10; Conference room and Front desk in L12), Tess (Stores L9, Technician and Design L10/L13), Ola (L10, L12), Gus (Plant L12, Planning L13), Rhea/Sam/Mia. Not wrong teaching, but the round-1 fix wanted unique names.
- Chains and moves: the boot chain wording is identical in L9, L10, L11 (firmware finds the drive via the boot order; stick skipped). L12 signal path and L13 print path follow ruling 5. Move 5 is followed: the right option is a split on every system item I read. Ruling 2 and 3 satisfied (calls l9-x-new, l9-k-call, l12-d-call, l13-s-call end on a statement, a time or holding the line).
- Hand-on appears three times with no desk rule: B1 above, `l11` row d8, `l9-g-smell` reason (M-9a).

## 3. Facts checked and correct (not listed above)
Supply voltages and 20+4 pin; 80 Plus order; CPU 8-pin vs PCIe 8-pin differ; DDR4 vs DDR5 same length, notch differs; SATA ~600 MB/s; mSATA vs M.2; SAS runs SATA, not the reverse; RAID 0/1/5/6/10 minimums, capacities, 5 TB arithmetic (6 TB RAID 5, 12 TB RAID 6); disc sizes; Cat 5/5e/6/6a speeds; DVI-D/I/A; Lightning vs Thunderbolt; PCL/PostScript; printer security terms; thermal and impact care; keystone direction; flashlight test for a failed backlight.

## 4. Verdicts

| Lesson | BLOCKER | Minor | Verdict |
|---|---|---|---|
| 9 | 0 | 3 | PASS |
| 10 | 0 | 6 | PASS |
| 11 | 1 (B1) | 5 | FAIL |
| 12 | 0 | 8 | PASS |
| 13 | 1 (B2) | 4 | FAIL |

Total BLOCKERs: 2.
