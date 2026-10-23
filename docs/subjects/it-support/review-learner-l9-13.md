# Cold learner review: IT Help Desk lessons 9 to 13

Reviewer: Sonnet 5.5, beginner persona (lessons 1 to 8 done). Read only the five learner views.
Honest limit: each view prints the marked answers in the same file, so "cover the mark" was a discipline, not a seal. I decided each answer from the taught text first, then read the mark. Where a mark disagreed with my reasoning, it is logged below.

## Verdict table

| Lesson | Verdict | My score vs pass rule | Blockers (fix before ship) |
|---|---|---|---|
| L9 From the power button to the desktop | PASS | 6 of 6 on the check (need 5) | 3 (contradictions: boot order link; Dev table vs reason; check 13 is two changes at once) |
| L10 The parts inside | PASS | 8 of 8 (need 7) | 1 (M.2 "connector" vs L11 "shape"); rest are recall/leak issues |
| L11 Storage and RAID | PASS | 8 of 8 (need 7) and data-first rule met | 3 (check 21 technically wrong; "start-up test" wording; "rebuild" for RAID 0) |
| L12 Cables, connectors and screens | PASS | 8 of 8 (need 7) | 1 (worked example tests the costly favorite before the one-button check) |
| L13 Printers | PASS | 6 of 6 (need 5) | 1 (check 16 asks two facts never taught: blank pages, cartridge seal) |

All five pass on my score, but a large share of the passes came from pattern, not reasoning (see Cross-lesson defects, C1 and C2).

---

## L9: the way of deciding, in my words

A computer starts as six steps in a row (power, self-test, firmware, boot drive, Windows loading, sign-in). Each runs only if the one before worked. So ask "how far did it get?": the last thing that worked rules out everything before it, and the next step is where to look. Match what I see or hear to a step using the table. Then run the cheapest test that tells that step's two sides apart (another outlet, monitor on another computer, open the firmware screen, stop code, another person signing in on the same computer). Never jump to the favorite cause (the drive) or a big fix (reinstall).

Practice score by reasoning: items 1-9 all right. Check 13-18: 6 of 6.

### Defects

1. **Contradiction: where the boot order lives.** Step 1 puts the boot order in link 3 (firmware). Step 2 table and Item 8's reason put it on link 4 ("the other side of link 4: the boot order"). Item 7's reason says "the boot order ... are links the computer never reached", but the computer did reach the firmware (it printed the message). Fix: pick one. Best: boot order belongs to firmware (link 3) everywhere; link 4 is "drive and its start-up files". Rewrite Step 2 row 4 to "Drive missing or failed, cable, damaged start-up files" and move "boot order" to a firmware row ("No bootable device after the logo: firmware cannot find a drive to start from: drive not listed, or listed but boot order/start-up files wrong"). Fix Item 7 and 8 reasons to match.
2. **Item 6 table contradicts its reason.** Table: Dev signing in on Pat's computer "loads in seconds". Reason: "fails only for Dev, on any computer". Both tests are fast, so the table clears Dev's account and Pat's computer, and the real culprit is the combination (Dev's saved profile on Dev's computer). "Dev's computer" is also defensible. Fix: change row 1 to "Dev signs in on Pat's computer: five minutes, the same wait", and keep row 2. Then Dev is slow everywhere and Pat is fast on Dev's computer: clearly the profile.
3. **Check 13 breaks the one-change rule it teaches in Item 12.** Right answer swaps the charger AND the outlet at once. If it works, you do not know which. Fix: "Plug the laptop's own charger into a different outlet" (splits wall from the rest), with a following step for a known-good charger; or make the question "which cause does this test rule out" and name only one swap.
4. **Item 5 reason is wrong logic.** "The clock is wrong before Windows loads" cannot be seen by Nora; she sees it in Windows. Fix: "Windows reads its time from the firmware; reinstalling does not give the firmware a battery."
5. **Check 14 symptom not taught.** "Blinking line on a black screen" is in no table. Add a row to Step 2 ("Logo, then a blinking line and no message: firmware or the start-up files; open the firmware screen").
6. **Words used before explained:** "driver" (Step 2 row 5, no definition in this lesson), "motherboard" and "heat sink" (Step 1-2, defined in L10), "video card" (Check 16 right answer; Step 2 says only "video"). Fix: one-clause definition at first use, or say "video" in Check 16.
7. **Fact taught only in feedback:** "never open a computer that is plugged in", and "unplug it from the wall" (Item 11). Step 2 says only "do not power it on again". Fix: add one sentence to Step 2: "Unplug it and do not open it while plugged in."
8. **Pattern answers.** In calls (Item 9, and Check 17) the only reply that continues is the one that ends in a question mark; the right ending reply is the one that repeats the evidence just given. Items 8, 10, 12, check 13 and 18: the right option is the longest and most specific; decoys are "Reinstall Windows", "Order a new X", "Press harder", "throw it away". Fix: make one decoy per item a plausible cheap test aimed at the wrong link (e.g. "Try another outlet" when the logo already showed), and give one wrong reply in calls that ends in a question that does not split.
9. **Item 9, reply "Unplug it, wait a minute, and plug it in again" is judged "a repeat, not a test".** Power-cycling is a standard first step in real help desks and earlier lessons teach "try the known fix". Arguable. Fix: reword the mark: "A real fix to try, but this question already shows power works; it would not tell you which link failed."
10. **Links 3 never an answer option.** Items 1 to 4 and check 14 never offer "Firmware" as a choice, so the learner never practises picking link 3. Fix: add "Firmware" as a distractor in Items 3 and 2 and a right-answer item (clock reset or "enter setup").

---

## L10: the way of deciding, in my words

Name the job of each part (power in, board, processor, memory, storage, cards, firmware, cooling) and the symptom tells which job failed. Then use the facts: match by label and size (voltage switch, board size, socket, memory generation and shape), add up watts and choose well above, read one temperature to separate heat from power, and fix one thing.

Practice: all right. Check 19-26: 8 of 8.

### Defects

1. **Vocabulary conflict with L11.** L10 Item 8 and Check 21 call M.2 "the connector" ("Which connector? M.2"). L11 teaches that M.2 is a shape, not a connection, and that mSATA also plugs straight into the board without a cable. Check 21's stem ("a small stick ... plugs straight into the motherboard with no cable") fits mSATA too. Fix: L10 says "slot" or "shape" for M.2; Check 21 adds "and it carries SATA or NVMe" is not needed; say "the slot is labeled M.2".
2. **Recall with leaks.** Item 3 (AM5): the right option repeats "AM5" from the stem. Item 2: stem names Mini-ITX and the right option is Mini-ITX. Check 22: stem says "found in phones and tablets"; the lesson sentence is copied. Check 20: the stem lists Bronze to Titanium (taught words). These test reading, not memory. Fix: ask the leaking question without the key word in the stem (e.g. "Which kind of processor fits a board with socket AM5 ... Intel or AMD?"; "which design is built for low power?").
3. **Typed answers accept too little.** Item 15 accepts VT-x, AMD-V, SVM, which the lesson never taught (they appear only in the feedback), but rejects plausible answers "virtualization technology", "enable virtualization", "Intel VT". Item 14 rejects "PCI" (correct, but the feedback should say why). Fix: add "virtualization technology", "enabled virtualization", "VT"; Item 14 feedback: "PCI is the older slot".
4. **HSM line mismatch.** Step 6: "a separate hardware security module that holds keys for many systems". Item 16 option: "a separate card in a server holding codes for users". Different wording of the same fact ("card", "users"). Fix: use "a separate hardware module that holds encryption keys for many systems".
5. **Unquantified rule.** Worked example says "550 W or more"; Check 19 wants 650 W for 500 W of parts. "Well above" is never given a number, so a learner cannot tell whether 550 W for 500 W is wrong. Fix: teach "about 30 to 50 percent above the total" and keep the distractor at 450 W only.
6. **"Single-bit" (Item 11), "dual channel in the right slots" colors (Check 24) not explained.** Fix: "single-bit = one flipped bit"; Step 7: "slots of the same color".
7. **Taught but never practised (will not be caught by the check):** x86/x64 as 32/64, multisocket, capture card, thermal pads, liquid cooling, USB permissions, fan and temperature setting, redundant and modular supplies, PCI vs PCIe, eSATA, 80 Plus levels. With 8 of 8 needing 7, a learner can skip a third of the lesson. Fix: rotate these into the check pool or the pass rule needs two items from the facts group.
8. **Item 9 Hugo:** right answer "Install a 64-bit Windows" erases the user's files; the lesson elsewhere says protect data first. Fix: "Back up, then install a 64-bit Windows".

---

## L11: the way of deciding, in my words

For storage, name the drive kind, how it connects and its shape separately (shape is not speed), and for RAID pick the level from what must survive and how many drives there are, and compute usable space (n minus parity drives). For any drive symptom the first move is: if it may be failing, copy the user's files off before testing, repairing or replacing. RAID is not a backup. For "no bootable device", open the firmware screen to see if the drive is listed.

Practice: all right. Check 14-21: 8 of 8; none touched the machine before protecting data.

### Defects

1. **Check 21 is technically wrong.** Boot order "1 USB flash drive, 2 Internal SSD" with a non-bootable stick: real firmware skips a stick with no start-up files and boots the SSD, so this would not give "bootable device not found". The reason ("same message as no drive at all") is a claim the learner cannot verify. Fix: make the stick a bootable installer left in (computer shows the installer screen) or show a boot order with only the USB entry enabled and the SSD "not in list".
2. **"Start-up test" wording contradicts L9.** Step 7 table and Item 8 reason say "the start-up test found no drive with the program that loads Windows". L9 names the start-up self-test (POST) as link 2 and says the firmware finds the drive. Fix: say "the firmware found no drive with the program that loads Windows".
3. **"Rebuild the array" for RAID 0 (Item 11 right answer)** contradicts the Item 11 reason ("RAID 0 cannot rebuild") and contradicts Step 7 "Do not create the array again". Fix: "Copy the work off, replace the drive, create a new array and copy the work back".
4. **Item 13 leaks and rejects.** "Four letters" gives the answer length; accepted answers list only "NVMe", so "NVM Express", "NVMe SSD", "PCIe NVMe" are misses. Fix: drop "Four letters"; accept "NVM Express", "NVMe SSD", "NVMe drive".
5. **Item 5 and Check 14 are self-answering.** The right option includes "as the sheet says" / "which matches the slot". Fix: remove the echo phrases.
6. **Check pass rule 2 ("none touched the machine before protecting the data") is only exercised by Check 19 (and Check 20/21 touch the machine legitimately).** As written it is unclear whether Check 20's "replace bay 2" counts. Fix: name the item in the rule, and add a reason line in Check 20 ("the surviving drive holds the only copy, so replace now; copy first if the second drive also warns").
7. **Words not explained before use:** "protocol" and "lanes" (Step 2 table), "controller" (Step 7 row, defined only in Item 10), "rebuild" (Step 7, Check 20), "drive bay" (Check 20), "defragment" (Item 4 distractor). Fix: one clause at first use.
8. **Item 12 order has two free steps.** "Copy first" and "user confirms last" fix four positions by pattern. Fix: add two more steps (read the report; tell the user the file may be lost) or make the question "which comes before replacing".
9. **Pattern.** Item 4, 8, 10, check 19: decoys are all "run a repair / reinstall / format / delete files". Fix: add one decoy that is a careful test that still touches the drive (e.g. a full disk check) as a mark that the order matters.

---

## L12: the way of deciding, in my words

Pick a cable by three questions: what must pass through it (picture, sound, data, power), how far and how fast, and what plug is on each end; a plug that fits is not proof it works. For screens, pair each symptom with its first check (input source, reseat cable, native resolution, refresh rate, solid color for pixels, flashlight for backlight).

Practice: all right. Check 20-27: 8 of 8.

### Defects

1. **Worked example order contradicts the teaching.** Step 2 test: "Name your favorite and test it with a part known to work", the cable, which is a minute of work. Step 3 then presses Source, one button. The symptoms table says No signal: first check = choose the input. The lesson elsewhere says run the cheapest cut first. Fix: put "press Source" first, or state in step 2 that the cable swap was not the cheapest test and that is why it cost a minute.
2. **Many items are word-match.** Item 3 ("it is called the plenum" -> plenum-rated), Item 8 (stem repeats "twists and locks on like a bayonet", copied from Step 3), Item 9 ("same from any angle" -> IPS), Item 17 ("old 4-pin power plug that feeds older internal drives and fans" -> Molex, copied). The learner needs to find the matching sentence, not know the fact. Fix: describe the job, not the table phrase (e.g. "a plug in a ticket photo: round, quarter turn to lock" shown as an image or different words).
3. **Step 2 table title contradicts its coax row.** Header: "Copper network cable (twisted pairs, RJ45 plug)". Last row: coax, one core, F-type. Fix: split coax into its own table.
4. **Undefined words:** "keystone" and "aspect ratio" (Step 9 table), "modem" (Item 2, Step 2), "router" (first used here, defined only in L13), "switch" (defined only in Item 1's stem), "console port". Fix: one clause each at first use.
5. **Typed answers:** Item 8 accepts "ST" only; "ST connector" is accepted only via the bracket rule, but "straight tip plug" is a miss. Item 17 accepts only "Molex (connector)". Check 23 lacks "DB-9 serial", "D-sub 9". Fix: add "ST plug", "straight tip plug", "Molex plug", "DB9 connector".
6. **Lightning vs Thunderbolt.** The lesson teaches "marked with a lightning bolt" for Thunderbolt and then asks for Apple's "Lightning" in Check 24. A beginner will confuse them. Fix: one line in Step 6: "Lightning (Apple, 8 pins) is not Thunderbolt (the 40 Gbps lightning-bolt port)".
7. **Item 16 distractor claim not taught:** "eSATA is copper"; Item 16 feedback also leans on eSATAp not existing. Fix: mention in Step 4 that eSATA is a copper cable like SATA.
8. **Taught but never practised:** Cat 5e, SC vs LC, VGA's blue plug, RJ11 DSL, punchdown block, micro vs mini USB (only as decoys), Thunderbolt 40 Gbps (decoy), serial, DisplayPort, Mini-LED, TN vs VA, keystone. A learner can pass the 8-of-8 check without them. Fix: raise each into the pool.
9. **Check 21 omits the other answer:** fiber also stops motor noise. Not offered, so no harm, but Step 3 says "electrical noise does not touch it". Fix: add fiber as a distractor with the cost reason.

---

## L13: the way of deciding, in my words

A print job goes through six links in order (program, queue, driver, connection, printer, paper/toner). Cut it with the cheapest test page: from the printer's own screen (skips the computer), from Windows (skips the program), the same job from another person's computer (skips this computer's side). If the printer's own test page is bad, the fault is inside the printer (use the symptom table); if good, look earlier. Only then fix one thing.

Practice: all right. Check 16-21: 6 of 6.

### Defects

1. **Check 16 asks two facts never taught.** "Pages completely blank" is not in either symptom table, and "seal left in" appears only in the answer. A beginner can only get it by elimination (all three other options are before the printer). Fix: add a row to the "Inside the printer" table: "Blank pages: empty cartridge, a seal left on a new one, or a failed drum/transfer".
2. **Half the items are answered by reading the table in the stem.** Item 5 (three of four distractors are each contradicted by a line in the "What you tried" table), Item 10 (the right option names "router"), Item 12 (copied from the table: "Fan the stack and reload"), Item 9 ("PIN or badge" in the option and the table). Fix: write distractors that fit the data less obviously (e.g. add a printer-side cause that Anna's job does not rule out, like a tray/driver mismatch on Marco's tray choice).
3. **Calls (Item 7) repeat the L9 pattern.** The continuing reply is the only question; the final right reply is the longest and repeats the evidence. Fix as in L9 defect 8.
4. **"30 percent from earlier lessons mixed in" is not visible.** Items 10 to 15 are all printer questions in the learner view. Either the mix is added at run time (then say so) or it is missing. Fix: show at least two earlier-lesson items (e.g. what changed, one change at a time, protect data before a repair) in the view, or drop the line.
5. **Item 4:** "200,000 pages" is a number the lesson never gives (Step 6 says "after many pages"). Fix: say "after a high page count" and make the stem the same.
6. **Item 8 (pick every one):** "pages come out sideways" is ambiguous, since a paper loaded sideways gives the same symptom and the table says "the setting in the program or the driver". Fix: "pages from one program come out sideways".
7. **Item 13:** modern network printers connect directly with no print server; the right option says "shared through a print server" but the lesson's own Step 5 also lists a share on an always-on computer, which is not an option. Fix: "On the network, with no one's computer needed" as the right answer, and print server as one way.
8. **Item 15 symptom wording differs from the table:** table says "Lines down the pages" (inkjet: clogged printhead); the item says "white streaks across the text". Fix: add "white streaks or gaps in the text" to the inkjet row.
9. **Words:** "calibrate" (laser, Step 6 table, defined only for inkjet), "maintenance kit" (defined once in a table cell), "unauthenticated" none. Fix: define calibrate once.
10. **Check 21:** "audit log" is right, but the distractor "Network scan, to a shared folder or email" is not a plausible answer for who printed; a beginner rules it out by sense. Fix: replace with "The printer's page counter".

---

## Cross-lesson defects

C1. **"Reinstall Windows" and "order a new X" are decoys in almost every item** (L9 items 8, 10, check 13, 14, 17, 18; L10 none; L11 items 3, 8, check 19, 21; L12 items 12, 15, check 26; L13 items 6, 7, 14, 10). A learner who always rejects the biggest, most expensive or most destructive option scores near 80 percent with no reasoning. Fix: in each lesson make at least a third of the items ones where the destructive/expensive option is correct (hard drive truly dead after the firmware test, supply truly too small) and the cheap option is the trap.

C2. **Right option is the cheapest test, named with the same words used in the lesson (e.g. "cheapest", "firmware screen", "test page from the printer's own screen") in every item.** Fix: vary where the cheap test sits (sometimes second or third option in a multi-step question; sometimes "do nothing yet, ask the user one more question").

C3. **Contradictions across lessons:**
 - Who finds the drive: firmware (L9) vs "start-up test" (L11).
 - M.2 is a connector (L10) vs a shape not a connection (L11).
 - Boot order: link 3 (L9 Step 1) vs link 4 (L9 Step 2, L11).
 - "Rebuild" of RAID 0 (L11 item 11) vs "do not create the array again" (L11 Step 7).
 - "Copy first" (L11) vs "Install a 64-bit Windows" with no backup mentioned (L10 Item 9) and "reseat memory" tests (L9) with no data warning.

C4. **Word order of "known to work":** "cable known to work" (L9, L12), "a cable that works" (L13), "known-good cable" (L13 table). Pick one.

C5. **Calls in L9 and L13 are the only items that can be passed by "ask a question, then cite the evidence"**; there is no call where the user pushes back on the right action (e.g. user insists on a reinstall after a good test). Fix: add one call where the right reply holds the line politely.

C6. **Facts asked in the checks that are never in the practice sets in the same lesson:** L10 check 20 (80 Plus), 23 (firmware password), L12 check 22 (USB 3.0 5 Gbps), 23 (DB9), 24 (Lightning). A learner who read the table once gets them; one who skimmed meets them cold. Fix: each fact asked in a check appears once in the practice items before.
