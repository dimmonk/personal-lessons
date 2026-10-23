# IT Help Desk: Storage and RAID

Revision 1, live. Part: Storage and RAID. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Boris writes that his computer has clicked since Monday and files take minutes to open. His customer files and photos are on it; his last copy is a year old. He wants a cleanup.
You learn the kinds of drive, how each connects, and the RAID levels that join drives. Then what each symptom means, and why the first move on a failing drive is to copy the files off.

## Step 1: Two kinds of drive

A hard disk drive (HDD) stores files on spinning metal platters, read by a small head; its moving parts can click and grind when it fails. A solid-state drive (SSD) stores files in memory chips and has none.
Platters spin at a steady speed in revolutions per minute (RPM). Sizes: 3.5-inch for desktops and servers, 2.5-inch for laptops.

A plain table, "Hard drive speeds":

> Speed  |  Where you find it  (the column heads)
> 5,400 RPM  |  Laptops, cheap desktops; slowest, quietest, coolest
> 7,200 RPM  |  Most desktops; the common speed
> 10,000 RPM  |  Servers
> 15,000 RPM  |  Servers; fastest, hottest, loudest

## Step 2: How an SSD connects, and its shape

An SSD has a connection (how it talks to the computer) and a shape; they differ.
Four connections. SATA is the old cable connection hard drives used, topping out near 600 megabytes a second. PCIe is the fast expansion slot graphics cards use, built from lanes (separate paths for data at once). NVMe is how an SSD talks over PCIe lanes; built for flash, it is several times faster than SATA. SAS (Serial Attached SCSI) is the sturdy server connection; a SAS controller (the part that connects drives to the computer) also runs SATA drives, but a SATA port does not run SAS.
Two shapes. M.2 is a small stick that plugs into the motherboard and can carry SATA or NVMe. mSATA is the older card shape, SATA only, in its own slot, not an M.2 slot.

A plain table, "Connections and shapes":

> Name  |  What it is  |  What to remember  (the column heads)
> SATA  |  A cable connection  |  Slowest SSD way; same as hard drives
> NVMe  |  Fast talk over PCIe lanes  |  Usually on M.2; the fastest
> PCIe  |  The expansion slot and its lanes  |  What NVMe runs on
> SAS  |  Server drive connection  |  Runs SATA drives too, not the reverse
> M.2  |  A stick shape, plugged into the board  |  SATA or NVMe; check which
> mSATA  |  An older card shape  |  SATA only; not an M.2 slot

## Step 3: Shape is not speed

A wrong idea, marked wrong: “It is an M.2 drive, so it is the fast kind.”
The right line: M.2 only says the size and where it plugs in. The same stick may be slow SATA or fast NVMe, and some slots take only one. Check both.

## Step 4: RAID: several drives acting as one

RAID joins several drives so the computer sees one; the group is the array. Sizes are in terabytes (TB): 1 TB is 1,000 gigabytes.
Striping spreads data across the drives for speed. Mirroring keeps a full copy on a second drive. Parity is extra information that can rebuild one lost drive’s data. A rebuild copies that data onto a new drive; it works the survivors hard, and while it runs the array has no spare.

A plain table, "The five levels (drives of equal size)":

> Level  |  How it works  |  Fewest drives  |  Survives  |  Space you can use  (the column heads)
> RAID 0  |  Striping only  |  2  |  Nothing: one drive lost, all data lost  |  All the drives
> RAID 1  |  Mirroring  |  2  |  One drive  |  One drive's worth (half with two)
> RAID 5  |  Striping with parity  |  3  |  One drive  |  All drives but one
> RAID 6  |  Striping with two parities  |  4  |  Two drives  |  All drives but two
> RAID 10  |  Mirrored pairs, striped  |  4  |  One drive per pair (not both of one)  |  Half the drives

## Step 5: RAID is not a backup

A wrong idea, marked wrong: “We have RAID, so we do not need a backup.”
The right line: RAID keeps working when a drive dies, but it copies everything you do to all its drives, so a deleted folder, a virus, a fire or a broken controller takes all the data at once. A backup is a separate copy none of those reach.

## Step 6: Drives you carry or load

A plain table, "Removable and optical media":

> Medium  |  What it is  |  What to remember  (the column heads)
> Flash drive  |  A small flash stick that plugs into USB  |  No moving parts
> Memory card  |  SD, microSD: flash for cameras and phones  |  Needs a slot or USB reader
> CD  |  Optical disc, read by laser  |  About 700 MB
> DVD  |  Optical disc  |  About 4.7 GB a layer
> Blu-ray  |  Optical disc  |  About 25 GB a layer

## Step 7: Drive symptoms, and the first move

The first move is nearly always the same: if a drive may be failing, copy the files off before you test, repair or replace it.
S.M.A.R.T. is a self-check inside a drive that can warn before it stops. IOPS is the reads and writes a drive handles each second.

A plain table, "Symptom, what it points to, first move":

> Symptom  |  What it points to  |  First move  (the column heads)
> Clicking or grinding  |  A hard drive with failing moving parts  |  Stop using it; copy files off; replace it
> S.M.A.R.T. failure  |  The drive itself says it is failing  |  Copy files off; replace it
> Slow reads and writes, low IOPS  |  A failing or nearly full drive, or a loose cable  |  Check S.M.A.R.T. and free space; copy if it warns
> Bootable device not found  |  The firmware found no drive to start Windows from. (A USB stick with nothing to start is usually skipped, so not the cause alone.)  |  Open the firmware screen. Not listed: cable, power or a dead drive. Listed: the boot order, or Windows loading
> Drive missing in Windows  |  Listed in the firmware: Windows is not showing it (no drive letter, offline, uninitialized, meaning not set up yet, or unallocated, meaning its space is not divided into a usable part; a later lesson covers the tool). Not listed: cable, power or a dead drive  |  Check the firmware screen and cable first; fix the Windows side without erasing
> Files missing or damaged  |  A failing drive or a bad shutdown  |  Copy what is readable; check S.M.A.R.T.
> Amber or red light, beeping alarm, RAID failure  |  A drive in an array has failed  |  Levels 1, 5, 6 and 10 still run. First confirm a current backup or copy the files off: if a survivor fails during the rebuild, that copy is the only way back. Then replace the drive with one the same size or larger and let the array rebuild; a second failure during the rebuild can lose a RAID 1 or 5. RAID 0: the data is gone; restore from backup
> Array missing  |  The controller (what joins the drives into an array) lost it, or too many drives failed  |  Do not re-create the array; check cables, power and the controller screen; hand on only if the desk’s rule says so

## Step 8: Fix first, copy later

A wrong idea, marked wrong: “It is slow and clicking, so I will run a repair tool, and reinstall Windows if that fails.”
The right line: A failing drive may stop for good within the hour, repair tools and a reinstall work it hard, and a reinstall erases the files. Copy them first, then fix or replace.

## Step 9: A worked example

An email: "Boris Lund, Operations", Email · 9:10 AM.

> Subject: **Computer slow and clicking**
>
> My computer has made a clicking noise since Monday and opening a file takes minutes.
> Every customer file and all my photos are in My Documents. The last copy I made was last year.
> I think it just needs a cleanup.
> It clicks even when I have nothing open.

Before the working, the learner may commit to a choice (not scored, not stored):
**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy his files to an external drive, then read the drive’s own report
- Run a disk cleanup first, as he suggests, then watch it
- Reinstall Windows to start fresh, then restore later

The working, one step at a time:
1. Sort it: something is broken now, and his files are at risk.: It is an incident, and the files may be worth more than the computer. That decides what comes first.
1. Write down the favorite cause, then find the test that can rule it out.: Boris thinks it needs a cleanup. A full drive or too many programs makes a computer slow, but neither makes a click. His own line, that it clicks with nothing open, rules the cleanup out: a click with no program running is a part moving.
1. Copy his files to another drive before anything else.: A clicking hard drive has moving parts that are failing, and every hour it runs may be the last. Copy first. A cleanup, a repair tool or a reinstall all work the drive hard, and a reinstall wipes the files.
1. Check the drive’s own report, replace it, restore the copy, and have Boris confirm.: The drive’s S.M.A.R.T. report, its built-in self-check, says failing. You replace the drive, put his files back from the copy, and close the ticket only after he opens a customer file himself.

Then the answer: Copy his files to an external drive, then read the drive’s own report. He clicks even when nothing is open, so the cause is a part that moves, not a program. His customer files have no copy. The failing hard drive is the thing to protect before it is the thing to fix.

## Step 10: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

The platters of a hard drive spin at a steady speed, counted in revolutions per minute (RPM). Faster spinning reads and writes sooner, but runs hotter and louder. These four speeds are the ones to know.

Help on screen: the words that decide it are marked.

**Tap the speeds from slowest to fastest.**
- Tap the four steps in the order you would do them. The steps are offered mixed (never already in the right order): "15,000 RPM"; "5,400 RPM"; "10,000 RPM"; "7,200 RPM". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 4 are.
- Right: 5,400 RPM, then 7,200 RPM, then 10,000 RPM, then 15,000 RPM. After a miss: "You put: …" and why the order matters: The common speeds are 5,400, 7,200, 10,000 and 15,000 RPM. The first two are in laptops and desktops, the last two in servers.

After the answer: Reason: Slowest to fastest: 5,400, 7,200, 10,000, 15,000 RPM. Laptops and cheap desktops use the first two; servers use the last two.

#### Item 2

Joaquin is building a desktop to edit video. The motherboard has an M.2 slot that takes NVMe drives, and Joaquin wants the fastest storage it can have. A solid-state drive (SSD) stores files in memory chips and has no moving parts.

Help on screen: the words that decide it are marked.

**Which drive should Joaquin buy?**
(the options come in an order that depends on the seed of the question)
- An NVMe SSD in the board’s M.2 slot (right)
- A 2.5-inch SATA SSD on a cable — if chosen: SATA is the old connection that hard drives used. It tops out far below what the M.2 slot can do.
- A 15,000 RPM hard drive, the fastest kind — if chosen: A spinning drive is slower than any SSD, however fast it spins.

After the answer: Reason: NVMe is a way of talking to a drive over PCIe lanes, which is the fastest connection a desktop drive has. SATA and spinning drives are both slower.

#### Item 3

RAID uses several drives together so that they look like one. A small office has two drives in its file server. If one dies, the office must keep working with nothing lost, and the owner does not care about the speed.

Help on screen: the words that decide it are marked.

**Which RAID level fits?**
(the options come in an order that depends on the seed of the question)
- RAID 1, which mirrors the data onto each drive (right)
- RAID 0, which stripes the data across both drives — if chosen: RAID 0 is fast but has no copy. If either drive dies, the data on both is gone.
- No RAID: one drive, copied once every month — if chosen: That loses up to a month of work, and the office stops until the drive is replaced.

After the answer: Reason: Two drives that must survive one failing is RAID 1, a mirror: each drive holds the same data. RAID 0 spreads the data and loses all of it when one drive fails.

#### Item 4

Your own note, written after an argument: "Message from Kasia", Chat · 11:20 AM.

> **My laptop’s hard drive started to grind and click this morning. I have the whole budget file on it, and no copy.**

Help on screen: the words that decide it are marked.

**What is your first move?**
(the options come in an order that depends on the seed of the question)
- Have her stop using it and copy the budget file to an external drive, or to the company share if she has access to one (right)
- Run the disk repair tool on it overnight — if chosen: A repair tool works the drive hard and may change files. A drive that grinds may not finish the job.
- Defragment it (rearrange its files to sit together) — if chosen: Defragmenting moves every file around on a drive that is already failing. It cannot fix a part that grinds.

After the answer: the deciding words are marked. Reason: Grinding or clicking from a hard drive is the platters or the head failing. Copy the files off first, with as little use of the drive as you can, then deal with the drive.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

5 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A plain table, "Laptop spec sheet":

> Part  |  Detail  (the column heads)
> Storage slot  |  One M.2 slot, PCIe NVMe drives only

A shop sells two M.2 drives for this laptop: one is labeled SATA, one NVMe. Both are the same size.

**Which one does the laptop take?**
(the options come in an order that depends on the seed of the question)
- The one labeled NVMe (right)
- Either, because both are M.2 sticks — if chosen: M.2 is only the shape and size of the drive. The same shape can carry a SATA drive or an NVMe drive, and a slot may take just one.
- The one labeled SATA, because SATA is common — if chosen: The sheet lists NVMe only. A SATA drive in that slot is not read.

After the answer: the deciding words are marked. Reason: M.2 says how big the drive is and where it fits, not how it connects. The sheet says this slot takes NVMe, so check the connection every time as well as the shape.

#### Item 6

A file server has four 2 TB drives. The owner wants RAID 5: it stripes the data across the drives and adds parity, extra information that can rebuild one lost drive. The space of one drive goes to parity.

**How much space can the owner use?**
- The learner types a number, with the calculator within reach: [ ] TB.
- Right (within 0.01): 6 TB
- If typed 8 TB: 8 TB is all four drives, which is RAID 0. RAID 5 gives up one drive’s worth of space for parity.
- If typed 4 TB: 4 TB is what RAID 6 gives with four drives, and what RAID 10 gives, which is half the space. RAID 5 gives up only one drive’s worth.

After the answer: Reason: RAID 5 uses the space of all drives but one: three drives of 2 TB is 6 TB, and the fourth drive’s worth holds the parity.

#### Item 7

Esme is building storage for her firm’s accounts. She has six drives. Losing the data would be a disaster, and when one drive fails she cannot always replace it the same day, so a second one might fail while she waits. Speed does not matter.

**Which RAID level fits?**
(the options come in an order that depends on the seed of the question)
- RAID 6, which keeps two parity blocks (right)
- RAID 5, which survives one drive failing — if chosen: A second failure during the wait loses everything. RAID 5 holds only one.
- RAID 0, because it keeps all the space — if chosen: RAID 0 survives nothing: one failure loses all the data.

After the answer: Reason: She needs to survive two failures at the same time, and only RAID 6 of these does. It needs at least four drives, and she has six.

#### Item 8

A plain table, "Screen at start-up":

> Message  (the column heads)
> No bootable device found. Press any key to restart.

A desktop shows this when it starts. It worked yesterday, and no one has changed anything that they know of. The firmware is the built-in program that runs before Windows, and its setup screen shows which drives the computer can see.

**What is your cheapest first test?**
(the options come in an order that depends on the seed of the question)
- Look in the firmware screen for the drive (right)
- Reinstall Windows from a USB stick today — if chosen: If the computer cannot see the drive, a reinstall has nowhere to go. If it can, the files on it could be wiped.
- Buy a new drive and swap it in — if chosen: You do not yet know the drive is the fault. A cable or the boot order gives the same message.
- Start from a repair stick and run a full drive check — if chosen: A check can only read a drive the computer sees, and it works the drive hard. It does not tell a hardware fault from a boot order fault. The firmware screen does, in seconds.

After the answer: the deciding words are marked. Reason: The message means the firmware found no drive it can start Windows from. The firmware screen splits it: a drive that is not listed is a hardware problem, and a drive that is listed is a boot order or Windows loading problem.

#### Item 9

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **RAID 5 and RAID 6 store extra information across the drives that can rebuild what a lost drive held. What is that extra information called? One word.**

**Type the word.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - parity

After the answer: Reason: Parity is the extra information that lets the array rebuild a lost drive. RAID 5 keeps one drive’s worth of it and RAID 6 keeps two.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

4 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 10

A NAS is a storage box on the office network that holds several drives. The controller is the part that joins them into an array.

This desk’s rule: hand on any array fault that is still open after 20 minutes.

Your own note, written after an argument: "Ticket", Office NAS.

> After a power cut, the file server shows no storage. The array is missing. All four drives show in the controller.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Change nothing on the drives; check cables, power and the controller screen, and hand on only if the desk’s rule below says so (right)
- Create a new array from the same four drives — if chosen: Creating the array again can wipe the data that is still on the drives.
- Format all four drives and start over fresh — if chosen: Formatting erases the data that the array was holding.

After the answer: the deciding words are marked. Reason: A missing array with all drives still listed can mean the controller lost its settings, not the data. Anything that writes to the drives risks the data, so look and do not change.

#### Item 11

Your own note, written after an argument: "Ticket", Fritz’s workstation.

> Two drives in RAID 0 for fast video work. One drive reports a S.M.A.R.T. warning. The array still works.

**What do you tell Fritz to do?**
(the options come in an order that depends on the seed of the question)
- Copy the work off now, replace the drive, make a new array and copy the work back (right)
- Wait until it fails; RAID will rebuild the data — if chosen: RAID 0 has no copy to rebuild from. When one drive fails, the data on both is gone.
- Swap the warned drive now and let RAID rebuild — if chosen: RAID 0 cannot rebuild a drive, so the swap loses everything.
- Check the warning again after a week, then decide — if chosen: Waiting leaves the only copy on a drive that has warned. The work is copied off first, whatever the check says later.

After the answer: the deciding words are marked. Reason: RAID 0 only splits the data. It keeps no copy and no parity, so a warning on either drive means copy first. After a failure it is a new array and a restore. The levels that rebuild are 1, 5, 6 and 10.

#### Item 12

A user’s hard drive, the one Windows starts from, has a S.M.A.R.T. warning. It still works, but slowly, and the only copy of her files is on it. Put the work in order.

**Tap the steps in the order you do them.**
- Tap the seven steps in the order you would do them. The steps are offered mixed (never already in the right order): "Replace the drive"; "Copy the files to another drive"; "The user opens a file and says it works"; "Put Windows on the new drive"; "Put the files back on the new drive"; "Tell the user to stop saving work to the drive"; "Check that the firmware screen lists the new drive". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 7 are.
- Right: Tell the user to stop saving work to the drive, then Copy the files to another drive, then Replace the drive, then Check that the firmware screen lists the new drive, then Put Windows on the new drive, then Put the files back on the new drive, then The user opens a file and says it works. After a miss: "You put: …" and why the order matters: Stop the drive being used, copy before you touch it, replace it, make sure the computer sees the new one, put Windows on it (a new drive is blank), restore the files, and close only when the user confirms.

After the answer: Reason: The copy comes right after the user stops using the drive, because the drive is the failing part. The new drive must be seen and have Windows on it before files go back, and the user’s yes comes last, so the ticket is not closed on your test alone.

#### Item 13

The question, read aloud as above: **An SSD can talk to the computer through a protocol (a set of rules for how two parts talk) designed for flash memory that runs over PCIe lanes. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NVMe
  - NVM Express
  - NVMe SSD
  - NVMe drive
  - PCIe NVMe
  - NVM Express SSD

After the answer: Reason: NVMe runs over PCIe lanes, which makes it much faster than SATA. It usually comes on an M.2 stick.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right
- None touched the machine before protecting data that has no other copy

#### Check question 14

An older ultrabook has a small card slot, labeled mSATA, for its drive. The drive has died. The shop has an M.2 NVMe stick, an mSATA card and a 2.5-inch SATA drive.

**Which one fits that slot?**
(the options come in an order that depends on the seed of the question)
- The mSATA card (right)
- The M.2 NVMe stick, because it is newer — if chosen: M.2 and mSATA are different shapes and slots. They are not interchangeable, and NVMe needs a slot that runs it.
- The 2.5-inch SATA drive, on a cable — if chosen: It connects by SATA but is the wrong size for a card slot. It needs a drive bay and a cable.

After the answer: Reason: The slot is named for the card it takes: mSATA. M.2 is a different shape that does not fit it, so read the label on the slot.

#### Check question 15

A designer has to hand a client a folder of 20 GB of photos on a disc. The client has a Blu-ray drive. A CD holds about 700 MB, a single-layer DVD 4.7 GB, and a single-layer Blu-ray disc 25 GB.

**Which single disc holds it?**
(the options come in an order that depends on the seed of the question)
- A single-layer Blu-ray disc (right)
- A single-layer DVD, at 4.7 GB — if chosen: 4.7 GB holds about a quarter of it. It would take five discs.
- A CD, at about 700 MB — if chosen: At about 700 MB it holds a few percent of the folder.

After the answer: Reason: Only Blu-ray, at 25 GB a layer, holds 20 GB on a disc. A DVD holds 4.7 GB and a CD about 700 MB.

#### Check question 16

The question, read aloud as above: **What is the smallest number of drives that RAID 5 needs? Type the number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 3
  - three drives

After the answer: Reason: RAID 5 needs at least three drives: the data is striped across them, with the parity of one drive’s worth spread through. RAID 1 needs two, and RAID 6 and RAID 10 need four.

#### Check question 17

A plain table, "A RAID 10 array of four drives":

> Mirrored pair  |  Drives  (the column heads)
> Pair A  |  Drive 1, Drive 2
> Pair B  |  Drive 3, Drive 4

**Which two drives failing at once loses the data?**
(the options come in an order that depends on the seed of the question)
- Drive 1 and Drive 2, both in Pair A (right)
- Drive 1 and Drive 3, from different pairs — if chosen: Each pair still has a drive with a full copy, so the array runs and can rebuild.
- Drive 2 and Drive 4, from different pairs — if chosen: Each pair still has one drive with its half, so no data is lost.

After the answer: the deciding words are marked. Reason: RAID 10 mirrors pairs and stripes across the pairs. It survives one drive from each pair, but not both drives of a pair.

#### Check question 18

A backup server has five 4 TB drives in RAID 6. It stripes the data and keeps two drives’ worth of parity, so it survives two drives failing.

**How much space can be used?**
- The learner types a number, with the calculator within reach: [ ] TB.
- Right (within 0.01): 12 TB
- If typed 16 TB: 16 TB is what RAID 5 gives from five drives, losing only one drive’s worth to parity. RAID 6 loses two.
- If typed 20 TB: 20 TB is all five drives, which is RAID 0. RAID 6 gives up two drives’ worth of space.

After the answer: Reason: RAID 6 gives up two drives’ worth of space to parity: three drives of 4 TB left is 12 TB.

#### Check question 19

Your own note, written after an argument: "Ticket", Laptop, 95% full.

> Computer very slow for a month. The drive’s S.M.A.R.T. report (its built-in self-check) says: failing.
> The user has the only copy of a thesis on it.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy the thesis to another drive, then replace it (right)
- Delete old files to free space, as it is 95% full — if chosen: Space is not what a failing report is about. Working the drive harder to make space puts the thesis at risk.
- Run a full disk check to confirm the report — if chosen: A check reads every part of a drive that is failing. Copy first, and test later.

After the answer: the deciding words are marked. Reason: The S.M.A.R.T. report is the drive saying it is failing, and the thesis has no other copy. A full disk is a plain fix for a slow computer but not when the drive itself says it is failing.

#### Check question 20

Your own note, written after an argument: "Ticket", Small office server, RAID 1.

> The server beeps every minute. A red light shows on drive bay 2 (the slot that drive slides into). Everything still works, so the owner wants to ignore it until Monday.
> The last backup ran three weeks ago.

**What do you tell the owner?**
(the options come in an order that depends on the seed of the question)
- Copy the work to an external drive today, then put a same-size drive in bay 2 and let the mirror rebuild (right)
- Nothing is wrong yet: RAID 1 protects it, so Monday is fine — if chosen: The array survives one failure. It does not survive a second, and until the drive is replaced the other drive is the only copy.
- Recreate the array to clear the alarm and the light — if chosen: Creating the array again can wipe the surviving drive. Replace the failed drive and let it rebuild.
- Put a new drive in bay 2 right now and let the rebuild run — if chosen: The rebuild reads every file from the one drive still working. If it fails under that load, the only copy goes with it, and the backup is three weeks old.

After the answer: the deciding words are marked. Reason: An audible alarm and a red light on a bay mean one drive in the array has failed. RAID 1 keeps the data going, but the backup is old and the surviving drive is the only copy if it fails during the rebuild, so copy the work off first, then replace the failed drive.

#### Check question 21

A plain table, "Firmware setup screen":

> Device  |  Listed?  (the column heads)
> Internal SSD  |  Not listed
> USB flash drive (holds only photos)  |  Listed

Your own note, written after an argument: "Ticket", Desktop, no bootable device found.

> The firmware does not list the internal SSD.
> The SSD’s data cable and power connector were reseated, and then a cable known to work was tried. The SSD is still not listed.
> The user’s files are backed up every night, and last night’s backup finished.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Replace the SSD, put Windows on the new one and restore the files from the backup (right)
- Take the flash drive out and restart the computer — if chosen: The firmware skips a stick with nothing to start from, so it is not the cause. The SSD is missing from the list either way.
- Move the SSD to the top of the boot order — if chosen: The boot order only sorts drives the firmware can see. This one is not listed, so there is nothing to move.
- Reset the firmware to its default settings and restart — if chosen: Defaults change many settings at once, and a drive that the firmware cannot see stays unseen.

After the answer: the deciding words are marked. Reason: The SSD is missing from the firmware list after the cable and the power were checked, so the drive has to be replaced, and the nightly backup means nothing is lost by replacing it. A USB stick with nothing to start on it is skipped, so it does not cause this message.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
