# IT Help Desk: Changes, backups, safety and evidence

Revision 2, live. Part: Changes, backups, safety and evidence. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

It is Friday at 4:30. A manager writes: “Please update the firmware (the built-in software of the hardware) on the accounting server tonight. It only takes ten minutes.” A technician who does it alone, with no approval, no copy of the data and no way back, can stop payroll on Monday. The desk has rules for what to get approved, copy, wear and keep.
Here are four small groups of those rules. Each answers a question from a ticket: who must approve this change, which backup restores fastest, what do I wear and do before I open this, what do I do with this drive. You read each rule once, watch it used, then answer from memory and as a choice.

## Step 1: Changes: who approves, and what must be ready

A change is anything done to a company system that could stop someone working. Change management means a written request, then approval, then the work, then a check.

A plain table, "The three types of change":

> Type  |  What it is  |  Who approves it  (the column heads)
> Standard  |  Low risk and routine, from a written procedure  |  Approved once, ahead of time
> Normal  |  Anything not routine; the whole process  |  The change board, a group that reviews the risk
> Emergency  |  Must be done now to stop an outage or an attack  |  A quick approval from a few named people; the paperwork follows

The request form states the purpose (why), the scope (what is and is not included), the type, the date and time, the systems affected and the risk level from a risk analysis (how likely is harm, and how bad). Four things are ready before approval: a rollback plan (steps to undo the change), a backup plan (data and settings copied first), sandbox testing (a trial in a safe copy) and the responsible staff (named people who do the work).
A maintenance window is a time agreed for changes, when few people work. A change freeze is a time when no changes are allowed, such as the week the books close. After approval comes the work (implementation), a peer review (a second technician checks it), then end-user acceptance (the users confirm it works for them).

## Step 2: Backups: which kind, and where

A backup is a copy kept somewhere else so data can come back after a loss. RAID is not one. The four kinds differ in what they copy and what a restore needs.

A plain table, "The four kinds of backup":

> Kind  |  What it copies  |  Making it  |  Restoring it  (the column heads)
> Full  |  Everything, every time  |  Slowest and biggest  |  Fastest: one backup
> Incremental  |  Only what changed since the last backup of any kind  |  Fastest and smallest  |  Slowest: the last full plus every incremental, in order
> Differential  |  Everything changed since the last full  |  Grows a little each day  |  The last full plus the latest differential only
> Synthetic full  |  A new full built on the backup server from the last full plus the changes  |  Light load on the computer  |  One backup, like a full

A restore goes in place (over the originals, replacing what is there) or to an alternate location (another folder or machine, so you can compare first). A backup nobody has restored from is untested, so restore a sample on a regular schedule.
Onsite copies restore fast but burn with the building; offsite copies survive it. GFS (grandfather, father, son) is a rotation of daily (son), weekly (father) and monthly (grandfather) copies, each kept longer. The 3-2-1 rule: 3 copies of the data (the original counts), on 2 kinds of media, 1 copy offsite.

## Step 3: Safety: before you open it, lift it or plug it in

A plain table, "The hazard and what answers it":

> Hazard  |  What to use or do  (the column heads)
> Static (ESD): a spark you cannot feel can kill a chip  |  An ESD strap on your wrist clipped to bare metal of the computer’s frame, which keeps you and the frame at the same charge; or an ESD mat; keep spare parts in antistatic bags
> Shock  |  Disconnect power before a repair; use grounded outlets (equipment grounding) and never cut off the third pin
> A heavy load  |  Lifting technique: bend the knees, back straight, load close; use a cart or a second person
> Tripping  |  Cable management: tie cables together and keep them out of walkways
> Fire  |  Know where the fire extinguisher is and what kind it is; never water on an electrical fire; leave and call emergency services
> Dust, chips and toner  |  Safety goggles for the eyes; an air filter mask for the lungs

Do not wear an ESD strap inside a power supply or an old CRT (tube) monitor: they hold a charge that can shock you. Government safety regulations apply as well.

## Step 4: The room: heat, dust, power and the data sheet

A plain table, "The environment and its controls":

> Problem  |  What it does  |  Control  (the column heads)
> Heat  |  Parts overheat, slow down and fail  |  A cool room; ventilation: leave vents and fans clear, with space around the equipment
> Humidity too high or too low  |  Too humid: moisture and corrosion. Too dry: static  |  Keep the humidity in range
> Dust  |  Clogs fans and heat sinks (metal fins that carry heat off a chip), so parts run hot  |  With the equipment switched off and unplugged: compressed air (hold the fan still, wear goggles) or an ESD-safe vacuum
> Power surge: a spike above normal voltage  |  Burns out parts  |  A surge suppressor
> Under-voltage: a brownout, where voltage sags  |  Crashes and damage  |  A UPS (uninterruptible power supply), a battery box; most also even out the voltage
> Power loss: a blackout  |  Unsaved work and open files are lost  |  A UPS gives minutes to save and shut down; a surge suppressor cannot keep power on

An MSDS (material safety data sheet, now often called an SDS) comes with products such as batteries and toner. It says what is inside, the hazards, and how to handle, store and dispose of it. Batteries and toner do not go in the regular trash.

## Step 5: Evidence: you find something on a drive you were sent to repair

Prohibited content (illegal files) or signs of a crime or attack: you stop repairing and start protecting evidence. Leave the computer as it is, and do not power it off, because memory is lost when the power goes: delete nothing, clean nothing, run no scan. Tell your manager (inform management), who decides whether to call law enforcement. Write down what you saw, when, and everything you touched (incident documentation).

A plain table, "Order of volatility (simplified): collect what disappears first":

> Order  |  What  |  Why this place  (the column heads)
> 1  |  Memory (RAM), the swap file and the running state  |  Gone when the power is off
> 2  |  Files on the drive  |  Stay until something overwrites them
> 3  |  Logs and backups kept elsewhere  |  Last to change

Chain of custody is the written record of who held the evidence, when, where, and what they did with it. Without an unbroken record, the evidence may not be accepted. Nobody works on the original drive: make an exact copy (an image), check it with a hash (a fingerprint number that must match), and examine the copy.

## Step 6: Doing the change first and writing it up Monday

A wrong idea, marked wrong: “It is a ten-minute job. I will do it tonight and put it in the ticket on Monday.”
The right line: The same shortcut hides in every group here: a change with no approval and no way back, a backup on the machine it protects, a drive cleaned that should have been left alone. It works until the one time it does not, and then there is no copy, no plan and no record.

## Step 7: A worked example

A chat, with its history: "Mr. Okafor, Finance", Chat with the help desk.

> (Mr. Okafor, Finance, at the left) Please update the firmware on the accounting server tonight. It only takes ten minutes, and payroll runs Monday morning. The server is working normally.

A plain table, "From the desk’s change rules":

> Rule  (the column heads)
> A routine change with a written, pre-approved procedure is a standard change.
> An emergency change is only for an outage or an attack that is happening now.
> Every other change to a server needs a request form, a rollback plan, a backup, a test, and the change board’s approval.
> Server changes happen in the maintenance window, Saturday 10 p.m. to 2 a.m.
> No written procedure covers firmware updates.

Before the working, the learner may commit to a choice (not scored, not stored):
**Which type of change is this?**
(the options come in an order that depends on the seed of the question)
- A normal change
- An emergency change
- A standard change
- Not a change

The working, one step at a time:
1. Name the favorite type and check it against the desk’s own rule.: The first guess is emergency, because Mr. Okafor said “tonight”. The rule needs one answer: is there an outage or an attack now? No. Emergency is ruled out.
1. Write the request form.: Purpose: current firmware, fixes a fault the maker listed. Scope: the accounting server only. Type: normal. Affected systems: accounting and payroll. Risk: a failed update could stop payroll, so the risk level is high.
1. Get the four things ready before the board sees it.: Rollback plan: keep the old firmware file and the steps to put it back. Backup plan: a full backup and a copy of the settings first. Sandbox testing: run the update on the spare server. Responsible staff: you do the work; the senior technician answers for it.
1. Pick the time.: Not tonight. The change board must approve, and servers change only in the maintenance window: the coming Saturday. The year-end change freeze, if one were running, would block it altogether.
1. After approval, do the work, get it checked, and get the users to accept it.: Implement it Saturday. A second technician reviews it (peer review). On Monday, Mr. Okafor confirms payroll runs (end-user acceptance). Write the note: the approval, the backup and the check. Then close the ticket.

Then the answer: A normal change. The type comes from the desk’s rule, not from the wish for tonight. Nothing was down, so it is a normal change: a request form, rollback and backup plans, a test, board approval, the maintenance window, a peer review and the users’ acceptance.

## Step 8: A worked example

A chat, with its history: "Cheryl, HR", Chat with the help desk.

> (Cheryl, HR, at the left) My laptop is slow and the drive says it is almost full. Can you clean it up?

A plain table, "What you saw while checking the drive":

> Folder  |  What is in it  (the column heads)
> Downloads: a spreadsheet with about 400 rows of full credit card numbers and names
> Documents: a note that says “sell the list Friday”

Before the working, the learner may commit to a choice (not scored, not stored):
**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Stop, change nothing, and tell your manager what you saw
- Delete the spreadsheet and wipe the drive to protect the company
- Copy the spreadsheet to a USB stick to show your manager
- Call the police yourself, right away, from your own phone

The working, one step at a time:
1. The ticket says “clean it up”. Test that against what you found.: The first guess is the usual one: delete big files, free space. But one folder holds 400 card numbers and a note about selling them. This is no longer a slow laptop.
1. Stop and leave everything as it is.: Delete nothing, clean nothing, run no scan, do not shut it down on your own. Every change can damage evidence.
1. Inform management, and write it down.: Tell your manager at once. Incident documentation: what you saw, the time, the folders, and every click you made on the laptop.
1. Keep the chain of custody.: The laptop goes into a locked place, with a sheet that records who held it, when and why. Anyone who takes it signs the sheet.
1. Leave the copying to the people who handle evidence.: They collect memory first, since it is lost at power-off, then make an exact copy of the drive and check it with a hash. They examine the copy, and the original stays unchanged.

Then the answer: Stop, change nothing, and tell your manager what you saw. The first guess, clean it up, would have deleted evidence. Prohibited content or a crime found on a drive means: stop, leave it alone, inform management, document everything, keep the chain of custody, and let the copy be examined while the original stays unchanged.

## Step 9: Questions

5 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Rosalind, Operations", Chat with the help desk.

> (Rosalind, Operations, at the left) **Every month the 40 reception PCs get the same Windows updates, by the desk’s written procedure. The change board approved that procedure once, for good, last year.**

Help on screen: the words that decide it are marked.

**Which type of change is the monthly update?**
(the options come in an order that depends on the seed of the question)
- A standard change (right)
- A normal change — if chosen: Normal changes are the ones with no pre-approved procedure. This procedure was approved once, for good.
- An emergency change — if chosen: Emergency means an outage or an attack happening now. The number of PCs does not decide it.
- Not a change — if chosen: Updates can break a PC, so they are changes. A routine one is a standard change.

After the answer: the deciding words are marked. Reason: Routine, written down and approved ahead of time is what makes a change standard. Normal needs the whole process each time, and emergency is for an outage or an attack now.

#### Item 2

A chat, with its history: "Pauline, Warehouse", Chat with the help desk.

> (Pauline, Warehouse, at the left) **The file server gets a full backup on Sunday. Each night after that, it copies everything that changed since Sunday. It crashed on Thursday morning.**

Help on screen: the words that decide it are marked.

**Which backups does the restore need?**
(the options come in an order that depends on the seed of the question)
- Sunday’s full and Wednesday night’s backup only (right)
- Sunday’s full and the Monday, Tuesday and Wednesday backups — if chosen: That is how an incremental restore goes. These nightly backups each hold everything since Sunday, so Wednesday’s already includes the earlier days.
- Wednesday night’s backup alone — if chosen: Wednesday’s holds only what changed since Sunday. Everything unchanged lives only in the full.
- Sunday’s full alone — if chosen: That brings back Sunday’s files and loses the changes from Monday to Wednesday.

After the answer: the deciding words are marked. Reason: A backup of everything changed since the last full is a differential. A restore needs the last full and the latest differential, and no more.

#### Item 3

A chat, with its history: "Tim, Field tech", Chat with the help desk.

> (Tim, Field tech, at the left) **I am about to swap the memory in a desktop. I have an ESD wrist strap. The side panel is off and I am deciding where to clip the strap.**

Help on screen: the words that decide it are marked.

**Where does the strap go, and what comes first?**
(the options come in an order that depends on the seed of the question)
- On bare metal of the frame, once the power cord is unplugged (right)
- On the memory stick itself, so both stay at the same charge — if chosen: The strap goes to bare metal of the frame, not to the part. Clipped to the stick, it equalizes nothing.
- On any plastic panel, as long as the strap touches Tim’s skin — if chosen: Plastic does not carry static away. The clip needs bare metal.
- On the power cord’s plug, with the computer still switched on — if chosen: Working inside a computer that is switched on risks shock, and the strap is no substitute for unplugging it.

After the answer: the deciding words are marked. Reason: An ESD strap clips to bare metal of the frame, and power is disconnected before any repair.

#### Item 4

A chat, with its history: "Gail, Clinic", Chat with the help desk.

> (Gail, Clinic, at the left) **The power flickered for two seconds and the reception computer restarted. The patient notes I was typing were lost. Nothing was damaged.**

Help on screen: the words that decide it are marked.

**What do you recommend for that computer?**
(the options come in an order that depends on the seed of the question)
- A UPS, a battery box that carries the computer through a power loss (right)
- A surge suppressor, which blocks power spikes from reaching the computer — if chosen: A surge suppressor guards against a spike. It cannot keep the computer running when the power drops.
- A cooler room and clear vents, which keep the computer from overheating — if chosen: Heat was not the problem. The computer restarted because the power dropped.
- An ESD mat under the chair, which drains static from the person — if chosen: An ESD mat is for static. Nothing in the story points to static.

After the answer: the deciding words are marked. Reason: A short loss of power that restarts a computer is what a UPS covers. A surge suppressor handles spikes only.

#### Item 5

A chat, with its history: "Audrey, Security", Chat with the help desk.

> (Audrey, Security, at the left) **I made an exact copy of the drive from the Reyes laptop and gave the original to Legal. I did not write down who took it, or when.**

Help on screen: the words that decide it are marked.

**Which record is now missing?**
(the options come in an order that depends on the seed of the question)
- The chain of custody: who held the evidence, and when (right)
- The order of volatility: which evidence to collect first — if chosen: The order of volatility says what to collect first. It is a plan for collecting, not a record of who held the evidence.
- The rollback plan: the steps to undo a change that failed — if chosen: A rollback plan belongs to change management. This is an evidence ticket.
- A change freeze: a time when no changes are allowed — if chosen: A change freeze blocks changes for a period. It does not record who held a drive.

After the answer: the deciding words are marked. Reason: The written record of who held the evidence, when and where is the chain of custody.

Then a screen: you can stop here, your place is kept.

## Step 10: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 6

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **In the last week of December, the accounting team is closing the books, and the rule says no changes to their systems until January.**

**What is a period like this called? Type the name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - change freeze
  - freeze

After the answer: Reason: A period when no changes are allowed is a change freeze. A maintenance window is the opposite: a time agreed for making changes.

#### Item 7

A chat, with its history: "Kiana, Systems", Chat with the help desk.

> (Kiana, Systems, at the left) The nightly backup has a 30-minute window and the backup disk has little space. A slow restore is fine with us, because the server rarely fails.

**Which backup kind fits?**
(the options come in an order that depends on the seed of the question)
- Incremental: only what changed since the last backup (right)
- Full: a complete copy of everything, every single night — if chosen: A full copy every night is the slowest and biggest to make, so it breaks the window and the disk space.
- Differential: everything changed since the last full backup — if chosen: A differential grows a little every night, so it takes more time and space than an incremental.
- Synthetic full: a full built on the backup server — if chosen: A synthetic full is a complete copy, so it takes the most room on a small backup disk.

After the answer: the deciding words are marked. Reason: Fastest and smallest to make is incremental. The cost is the restore, which needs the last full plus every incremental in order.

#### Item 8

The question, read aloud as above: **The 3-2-1 backup rule says how many copies to keep, how many kinds of media to use, and how many copies to keep away from the building.**

**How many copies are kept away from the building? Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 1

After the answer: Reason: The 3-2-1 rule: 3 copies of the data, on 2 kinds of media, with 1 copy offsite. The original counts as one of the three.

#### Item 9

A chat, with its history: "Bob, Archive", Chat with the help desk.

> (Bob, Archive, at the left) In the dry winter air of the archive room, people get small static shocks from the metal shelves, and two memory modules have failed in the PCs there.

**Which part of the environment needs controlling?**
(the options come in an order that depends on the seed of the question)
- Humidity: air that is too dry builds up static charge (right)
- Dust: the shelves need cleaning — if chosen: Dust clogs fans and heat sinks. It does not give people shocks from metal shelves; dry air does.
- Surges: a spike on the power line is burning out the modules — if chosen: A power surge does not give people shocks from metal shelves. Static in dry air does.
- Temperature: the room must be made as warm as possible — if chosen: Heat does not cure static, and it shortens the life of parts.

After the answer: the deciding words are marked. Reason: Too dry raises static, too humid brings moisture and corrosion. Humidity is one of the things the room controls.

#### Item 10

The question, read aloud as above: **One kind of backup copies everything every time. It is the slowest and biggest to make, but a restore needs only that one backup, so it is the fastest to restore.**

**Which kind of backup is it? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - full
  - full backup

After the answer: Reason: It is the full backup. Incremental and differential backups are smaller to make but need more backups to restore.

#### Item 11

A chat, with its history: "Jamal, Security", Chat with the help desk.

> (Jamal, Security, at the left) Attackers are using a hole in our VPN server (the entrance into the company network) right now, and people are being locked out. The patch is ready. The change board does not meet until Thursday.

**How is this change handled?**
(the options come in an order that depends on the seed of the question)
- As an emergency change: a quick approval, then the paperwork (right)
- As a normal change: wait for Thursday, then follow the whole process — if chosen: The attack is happening now, and waiting three days leaves the hole open. Emergency changes exist for this.
- As a standard change: use the written procedure with no new approval — if chosen: A standard change is routine and pre-approved. A patch for an active attack has no such procedure.
- Skip approval: make it tonight, and write it up whenever there is time — if chosen: Even an emergency has a quick approval and a record. What it skips is the wait for the board.

After the answer: the deciding words are marked. Reason: An outage or an attack happening now makes a change an emergency: fast approval by a few named people, the write-up afterward.

#### Item 12

A chat, with its history: "Darius, Facilities", Chat with the help desk.

> (Darius, Facilities, at the left) A power strip behind the server rack is smoking and sparking, and a small flame has started. A water extinguisher hangs by the door.

**What is the first thing to do?**
(the options come in an order that depends on the seed of the question)
- Leave the room, warn people, and call emergency services (right)
- Pour the water on the strip — if chosen: Water on an electrical fire can carry current to the person. It is never used on one.
- Unplug the rack’s other cables, one by one, to save the servers — if chosen: Reaching into a smoking, sparking rack risks shock and burns, and it leaves the fire growing.
- Put on goggles and a mask, then carry the servers out — if chosen: Goggles and a mask protect against dust. They do not make a fire safe to work around.

After the answer: the deciding words are marked. Reason: Fire safety: never water on an electrical fire; leave, warn and call emergency services.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

6 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 13

A chat, with its history: "Ramona, Finance", Chat with the help desk.

> (Ramona, Finance, at the left) A teammate saved the wrong version over the budget file yesterday. The backup has yesterday’s morning version. Before anything changes, I want to compare the two.

**How do you restore the file?**
(the options come in an order that depends on the seed of the question)
- To an alternate location, so both versions stay and can be compared (right)
- In place, over the current file, to save the time of a copy — if chosen: Restoring in place overwrites the current file before anyone has compared them.
- Delete the current file first, then restore the backup in its place — if chosen: Deleting first removes the version Ramona wants to compare against.
- Run a new full backup of the drive, and compare the files later — if chosen: A new backup copies the wrong version too, and does not bring back yesterday’s file.

After the answer: the deciding words are marked. Reason: A restore to an alternate location keeps the current file, which is what a comparison needs. A restore in place overwrites it.

#### Item 14

The question, read aloud as above: **A computer is still running, and it holds evidence in three places: in its memory, on its drive, and in logs kept on another server.**

**Which of the three is collected first? Type memory, drive or logs.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - memory
  - ram
  - in memory

After the answer: Reason: The order of volatility collects what disappears first. Memory goes when the power does, so it comes before the files on the drive.

#### Item 15

A chat, with its history: "Eda, Systems", Chat with the help desk.

> (Eda, Systems, at the left) The weekly full backup puts too much load on the server. We would like a new full copy made on the backup server from the last full and the changes, without reading the server again.

**Which backup kind is that?**
(the options come in an order that depends on the seed of the question)
- A synthetic full, built on the backup server from changes (right)
- A differential backup, copying changes since the last full — if chosen: A differential copies what changed since the last full. It does not build a new full copy.
- An incremental backup, copying changes since the last backup — if chosen: An incremental copies what changed since the last backup. It does not build a new full copy.
- A full backup, copying everything from the server again — if chosen: A full backup reads everything from the server again, which is the load Eda wants to avoid.

After the answer: the deciding words are marked. Reason: A new full built on the backup server from the last full plus the changes is a synthetic full.

#### Item 16

A chat, with its history: "Randall, Operations", Chat with the help desk.

> (Randall, Operations, at the left) The request form says: “Only the two reception printers are changed. The network, the servers and the other printers are not part of this.”

**Which part of the request form is that?**
(the options come in an order that depends on the seed of the question)
- The scope: what is and is not included (right)
- The purpose: why the change is wanted — if chosen: The purpose gives the reason. This text lists what is included.
- The type: standard, normal or emergency — if chosen: The type names the kind of change. This text names the systems it covers.
- The date and time: when the change will happen — if chosen: The date and time say when. This text says what.

After the answer: the deciding words are marked. Reason: The scope of a change is what it covers and what it does not.

#### Item 17

The question, read aloud as above: **To examine a suspect drive, nobody works on the original. They make a full, exact copy of the drive first, and check it against the original.**

**What is that exact copy of a drive called? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - image
  - drive image
  - disk image
  - forensic image

After the answer: Reason: The exact copy is an image. It is checked with a hash, and the image is examined while the original stays unchanged.

#### Item 18

The question, read aloud as above: **A box of used toner cartridges and a swollen battery need disposing of. The sheet that comes with such products says what is inside, the hazards, and how to handle and dispose of them.**

**What is the sheet called? Type its short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - msds
  - sds

After the answer: Reason: It is the MSDS (material safety data sheet, now often called SDS). Batteries and toner do not go in the regular trash.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 19

A chat, with its history: "Chidi, Network", Chat with the help desk.

> (Chidi, Network, at the left) I changed the branch firewall rules (the filter between networks) yesterday. Today the branch cannot reach the main office, and nobody wrote down any steps for undoing what I did.

**Which part of change management was missing?**
(the options come in an order that depends on the seed of the question)
- A rollback plan, the exact steps to undo the change (right)
- End-user acceptance, where users confirm that it works — if chosen: Acceptance comes after the work and confirms it. It does not give the way back.
- A change freeze, a time when changes are not allowed at all — if chosen: A freeze blocks changes during a period. It is not a plan for undoing one.
- A risk analysis, which rates how likely harm is — if chosen: A risk analysis rates the danger before the change. It does not say how to undo it.

After the answer: the deciding words are marked. Reason: Steps for undoing a change that goes wrong are the rollback plan, one of the four things that must be ready before approval.

#### Check question 20

The question, read aloud as above: **A rotation keeps daily, weekly and monthly copies, each kept longer than the one before.**

**What is the rotation called? Type its short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gfs
  - grandfather-father-son

After the answer: Reason: The rotation is GFS: grandfather, father, son.

#### Check question 21

A chat, with its history: "Stephen, Systems", Chat with the help desk.

> (Stephen, Systems, at the left) We make a full backup on Sunday. Each night after that, we copy only what changed since the night before. The server failed on Friday morning.

**Which backups does the restore need?**
(the options come in an order that depends on the seed of the question)
- Sunday’s full and the nightly backups from Monday to Thursday, in order (right)
- Sunday’s full and Thursday night’s backup, which holds all the changes — if chosen: That is how a differential restore goes. Thursday’s here holds only Thursday’s changes, so the other nights are needed too.
- Thursday night’s backup alone — if chosen: Thursday’s holds only one day of changes. Everything else lives in the full and the earlier nights.
- Sunday’s full alone — if chosen: That brings back Sunday’s files and loses every change made from Monday to Thursday.

After the answer: the deciding words are marked. Reason: Nightly copies of only what changed since the last backup are incremental. A restore needs the last full and every incremental after it, in order.

#### Check question 22

A chat, with its history: "Wade, Server room", Chat with the help desk.

> (Wade, Server room, at the left) The fans in the rack are thick with dust and the rack is warm. I want to clean it this afternoon.

**How is the dust removed?**
(the options come in an order that depends on the seed of the question)
- With the rack switched off and unplugged, blow it out with compressed air, fans held still, goggles on (right)
- Blow it out with compressed air while the rack keeps running, fans left free to spin — if chosen: Air can spin a fan far faster than it is built for, and the equipment is switched off and unplugged before any cleaning.
- Spray cleaner on the fans and let them dry themselves on power — if chosen: Liquid on a running fan can short it, and the cleaner can damage the parts.
- Leave it — if chosen: Dust clogs fans and heat sinks, so parts run hot and fail. It is a real problem.

After the answer: the deciding words are marked. Reason: Dust is cleaned with compressed air (fans held still, goggles and mask) or an ESD-safe vacuum, never with liquid on live parts.

#### Check question 23

A chat, with its history: "Ora, Stockroom", Chat with the help desk.

> (Ora, Stockroom, at the left) I have to move a heavy UPS (a battery box) from the floor to a shelf in the server room. I am on my own today, and it is awkward to hold.

**What is the safe way to move it?**
(the options come in an order that depends on the seed of the question)
- Bend the knees, keep the back straight, hold it close or use a cart (right)
- Bend over from the waist and lift quickly so the strain is over fast — if chosen: Lifting with a bent back is how backs are injured. The legs should do the work.
- Twist at the waist to swing it onto the shelf in one movement — if chosen: Twisting under a load strains the back. Turn the feet, not the waist.
- Put on an ESD strap first — if chosen: The strap guards parts from static. It does nothing for the weight of the load.

After the answer: the deciding words are marked. Reason: A heavy load is lifted with the knees bent, the back straight and the load close, or moved with a cart or a second person.

#### Check question 24

A chat, with its history: "Chiara, Security", Chat with the help desk.

> (Chiara, Security, at the left) I made an exact copy of a suspect drive for an investigation. A lawyer will want proof later that the copy is identical to the original.

**How is that proven?**
(the options come in an order that depends on the seed of the question)
- By checking both with a hash, a fingerprint number that must match (right)
- By leaving the original powered on beside the copy until the trial — if chosen: Leaving the original running changes it, and the hash is what shows the match.
- By writing “same as original” on the label of the copy — if chosen: A label is a claim. A hash is a check anyone can repeat.
- By opening both drives and comparing the files by eye — if chosen: Opening the original changes it, and eyes cannot compare every byte.

After the answer: the deciding words are marked. Reason: An exact copy of a drive is checked against the original with a hash, so the original stays unchanged and the match can be shown.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
