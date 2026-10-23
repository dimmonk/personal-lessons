# IT Help Desk: The whole ticket, and the mock exam

Revision 1, draft (the screen carries the draft line). Part: The whole ticket, and the mock exam. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

It is 9 a.m. on your first week. The next ticket is a laptop with a black screen, then a printer, then a locked account, then a phone that is hot to the touch. Nobody tells you which system it is, and nobody shows you the deciding words.
Here you do the job as it will be. First ten tickets from every system, with no help. Then a mock exam of forty questions on the facts and scenarios of both A+ exams, drawn from everything in this subject. The mock is graded at the end, and you need 32 right to pass.

## Step 1: The nine moves, and the chains, by name

Every ticket gets the same nine moves, in order: sort it, get their words and search what the desk knows, find out what changed and protect their data, try the known fix with a limit, cut it in half with the cheapest test, change one thing at a time, check it works for them and say what happens next, hand it on with everything you found, and write it up.
Each system has a chain, and the cheapest test splits it. The boot chain: power, the start-up test, firmware, the boot drive, Windows, sign-in. The print path: app, queue, driver, printer, paper. The connection chain: link, address, gateway, name lookup, service. Wireless and phones: radio, connection, account, app. Windows: the tool that shows the fault, then its fix. Security: account, password, permission, and the ten steps to remove malware in order. The desk: change, backup, evidence, policy.
Reading a ticket: the first move is usually sort it or get the story; once the ticket shows a symptom, the next move is a test that splits a chain, or protecting data that has no other copy. Never start with a part, a reset or a reinstall.

## Step 2: Questions

10 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Rae, Front office", Chat with the help desk.

> (Rae, Front office, at the left) My desktop is on, the fans spin and the light is green, but the monitor says No Signal. It worked fine yesterday, and the cleaners were in last night.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Try the monitor on another computer, and check its cable ends (right)
- Replace the power supply, since the fans spin but nothing shows on the screen — if chosen: The fans spin and the light is green, so the power link works. Swapping a part first skips the cheap test.
- Reinstall Windows from the recovery drive on this desktop, to rule out a bad install — if chosen: No picture appears even before Windows starts, so Windows is not yet the suspect. A reinstall also puts her files at risk.
- Have her update the monitor driver in Device Manager and restart the PC — if chosen: A driver needs a working picture to be changed, and the test does not split the monitor side from the PC side.

After the answer: the deciding words are marked. Reason: The cheapest test that splits the chain is to try the monitor on another computer and check the cable at both ends.

#### Item 2

A chat, with its history: "Teo, Billing", Chat with the help desk.

> (Teo, Billing, at the left) None of the websites open and the shared drive is gone since I came in. Here is what the command shows.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Autoconfiguration IPv4 Address  |  169.254.20.9
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  (empty)

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Check the cable and wall port, then run ipconfig /renew (right)
- Run ipconfig /flushdns to clear the saved website names from the computer — if chosen: The name lookup is a later link. The computer has no real address yet, so nothing reaches it.
- Type 8.8.8.8 in as the DNS server in the adapter settings, then test a site — if chosen: The computer has no address or gateway, so a DNS server could not be reached anyway.
- Ping 8.8.8.8 to see whether the internet is down for the whole building — if chosen: With a 169.254 address and no gateway the ping cannot leave the computer. The output has already answered.

After the answer: the deciding words are marked. Reason: A 169.254 address with no gateway puts the fault at the address link: check the link, then request an address from the server again.

#### Item 3

A chat, with its history: "Una, Accounts", Chat with the help desk.

> (Una, Accounts, at the left) My report has said Printing for an hour and the jobs I send after it are lined up behind it. My coworkers print to the same printer fine from their own PCs.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Stop the Print Spooler on her PC, clear the job, and start it again (right)
- Replace the toner cartridge in the printer, since the page never comes out — if chosen: The printer works for her coworkers, so the toner is not the cause.
- Reinstall the printer driver on every PC in the whole office — if chosen: Only her queue is stuck, and the others work. Changing everyone’s PC is far more than the ticket shows.
- Tell her to send the report again a few times until one prints — if chosen: Each new job only joins the stuck queue behind the first one.

After the answer: the deciding words are marked. Reason: A queue stuck on one PC while others print is fixed by clearing that queue and restarting the Print Spooler.

#### Item 4

A chat, with its history: "Vik, Sales", Chat with the help desk.

> (Vik, Sales, at the left) Since last week my company phone drops from full to about 30 percent in three hours, and it feels warm in my pocket. The phone is two years old.

**What is the cheapest test to start with?**
(the options come in an order that depends on the seed of the question)
- Open the battery usage list in Settings and see which app uses most (right)
- Order a new battery for the phone, since it is two years old — if chosen: A battery may turn out to be the cause, but the usage list is free and could rule it out first.
- Reset the phone to factory settings and start again from scratch — if chosen: A reset wipes the phone before anyone knows the cause, and the data on it may have no other copy.
- Buy a faster charger so the phone fills sooner in the morning — if chosen: A charger changes how fast it fills, not how fast it drains.

After the answer: the deciding words are marked. Reason: The battery usage list is the cheapest test that splits an app problem from a battery problem.

#### Item 5

An email: "Dev, Estimating", Email to the help desk.

> Subject: **Laptop will not start**
>
> My laptop now says Operating system not found when I turn it on. It worked yesterday. All my client quotes are saved on the Desktop and my last backup was a month ago.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Copy the quotes to another place first, before any repair (right)
- Run the startup repair now, since it is meant to keep the files — if chosen: A repair is a change to a drive that may be failing, and the quotes are the only copy.
- Reinstall Windows to get the laptop going again quickly today — if chosen: A reinstall can erase the quotes, and nobody knows yet why the system is not found.
- Order a new drive for the laptop and swap it in this afternoon — if chosen: It may turn out to be the drive, but a part is not the first move when the only copy of the quotes is on it.

After the answer: the deciding words are marked. Reason: Data with no other copy is protected before anything is repaired or changed.

#### Item 6

A chat, with its history: "Sam, Web team", Chat with the help desk.

> (Sam, Web team, at the left) Our Linux web server stopped saving uploads about ten minutes ago. Here is the disk output.

A plain table, "$ df -h":

> Filesystem  |  Size  |  Used  |  Avail  |  Use%  |  Mounted on  (the column heads)
> /dev/sda1  |  40G  |  16G  |  22G  |  42%  |  /
> /dev/sdb1  |  20G  |  20G  |  0  |  100%  |  /var

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Find which folders fill /var, with du -sh /var/* (right)
- Delete everything inside /var to make room for uploads right away — if chosen: Deleting before looking could remove what the server needs, and nobody knows what is filling it.
- Reboot the server to see whether the disk clears itself — if chosen: A reboot does not shrink files. The output already shows /var is full.
- Add more memory to the server so it can keep more in use — if chosen: The output shows no memory problem. It shows a full /var drive.

After the answer: the deciding words are marked. Reason: The output puts the fault on the full /var drive. The cheapest next test is to see which folders fill it.

#### Item 7

A chat, with its history: "Cleo, HR", Chat with the help desk.

> (Cleo, HR, at the left) I got an email from IT asking me to confirm my password on a page. I clicked the link and typed my password. The page just closed and nothing else happened.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Reset her password, sign out her sessions, and report it to security (right)
- Tell her it is fine, since the page closed and nothing else happened — if chosen: A page that closes is how a fake page ends. The password was still sent.
- Delete the email so nobody else clicks it, and close the ticket — if chosen: The email is evidence, and the password still works for whoever took it.
- Run an antivirus scan on her PC and wait for the result — if chosen: A scan does not change the stolen password, which is the urgent part.

After the answer: the deciding words are marked. Reason: Phishing that got a password is handled by changing the password at once and reporting it, with the email kept as evidence.

#### Item 8

A chat, with its history: "Ben, Support", Chat with the help desk.

> (Ben, Support, at the left) I moved from Sales to Support and still need the Pricing folder. I get Access denied. My manager approved it in this ticket this morning.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Check which group may open the folder and add his account (right)
- Give Everyone full control of the Pricing folder so it opens — if chosen: That opens the folder to every account. Least privilege gives only what the job needs.
- Make his account a local administrator of his own PC — if chosen: Administrator rights on his PC do not open a shared folder, and give far more than he needs.
- Copy the Pricing folder onto his Desktop so he has it — if chosen: A copy goes out of date and skips the folder’s permissions.

After the answer: the deciding words are marked. Reason: A shared folder is opened through the group that has the permission, with only the access the job needs.

#### Item 9

A chat, with its history: "Mara, Planning", Chat with the help desk.

> (Mara, Planning, at the left) This is the third time this week my Wi-Fi drops while I am on a call! Nobody does anything about it. I am sick of it!

**What do you say next?**
(the options come in an order that depends on the seed of the question)
- I will check your connection now and tell you what happens next (right)
- Nobody else has this trouble, so it is probably your laptop — if chosen: This pushes the blame at her, and no test has said it.
- It is almost certainly interference on the 2.4 GHz band — if chosen: A cause told before any test, in words she may not know.
- Please restart the laptop and call back if it drops again — if chosen: She has already called three times. This sends her away with nothing.

After the answer: the deciding words are marked. Reason: An upset user hears what happens next and when. The three drops are a problem to hand on with their dates.

#### Item 10

A chat, with its history: "Gil, Server team", Chat with the help desk.

> (Gil, Server team, at the left) I plan to patch the main file server at 2 p.m. tomorrow. Everyone uses it. I have not written a way to undo the patch, but I will do it carefully.

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- Hold it until it has a written undo plan and approval (right)
- Go ahead, since he says he will be careful with it — if chosen: Being careful is not a change process. Without an undo plan, a bad patch has no way back.
- Move it to 2 a.m., when fewer people are on, and skip the approval — if chosen: A quieter hour helps, but the approval and the undo plan are still missing.
- Back up the user desktops first and then patch the server — if chosen: The file server is the change. Desktop backups do not undo a bad patch on it.

After the answer: the deciding words are marked. Reason: A change to a shared server needs approval, a written plan and a way back first.

Then a screen: you can stop here, your place is kept.

## The check

40 questions drawn at random from the whole list, with no help. No answer is shown until the end. It comes back once, on new questions, 28 days after the first time.

To pass:
- At least 32 right

The questions are drawn at random from the topics: drives, raid, drive-fix, boot, power, board, cpu, firmware, memory, cooling, print-path, print-care, net-cables, fiber, peripheral, connectors, display, online, addressing, net-commands, net-settings, net-devices, net-types, net-tools, servers, ports-web, ports-mail, ports-files, ports-admin, wifi, short-range, wifi-fix, wifi-security, soho, mobile-hw-fix, mobile-app-fix, mobile-sec-fix, mobile-parts, mobile-ports, mobile-connect, mobile-secure, win-tools, win-consoles, win-settings, mac, mac-care, linux-files, linux-admin, linux-net, editions, filesystems, install-types, app-reqs, cloud-tools, win-boot-fix, win-run-fix, cmd-net, cmd-disk, cmd-files, cmd-admin, access-physical, access-logical, win-security, ad-policy, hardening, change, backup, safety, evidence, policy, scripts, remote, ai, virtual, cloud, malware-kinds, attacks, malware-removal, destruction, browser-security (40 of them), the same run drawing the same; what no earlier run of this check asked comes first, and a question about the learner's own answers is left out until they are entered. Each is shown here once, as a learner would meet it:

#### Question in the draw: l11-p-speed

The platters of a hard drive spin at a steady speed, counted in revolutions per minute (RPM). Faster spinning reads and writes sooner, but runs hotter and louder. These four speeds are the ones to know.

**Tap the speeds from slowest to fastest.**
- Tap the four steps in the order you would do them. The steps are offered mixed (never already in the right order): "15,000 RPM"; "5,400 RPM"; "10,000 RPM"; "7,200 RPM". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 4 are.
- Right: 5,400 RPM, then 7,200 RPM, then 10,000 RPM, then 15,000 RPM. After a miss: "You put: …" and why the order matters: The common speeds are 5,400, 7,200, 10,000 and 15,000 RPM. The first two are in laptops and desktops, the last two in servers.

After the answer: Reason: Slowest to fastest: 5,400, 7,200, 10,000, 15,000 RPM. Laptops and cheap desktops use the first two; servers use the last two.

#### Question in the draw: l11-p-nvme

Joaquin is building a desktop to edit video. The motherboard has an M.2 slot that takes NVMe drives, and Joaquin wants the fastest storage it can have. A solid-state drive (SSD) stores files in memory chips and has no moving parts.

**Which drive should Joaquin buy?**
(the options come in an order that depends on the seed of the question)
- An NVMe SSD in the board’s M.2 slot (right)
- A 2.5-inch SATA SSD on a cable — if chosen: SATA is the old connection that hard drives used. It tops out far below what the M.2 slot can do.
- A 15,000 RPM hard drive, the fastest kind — if chosen: A spinning drive is slower than any SSD, however fast it spins.

After the answer: Reason: NVMe is a way of talking to a drive over PCIe lanes, which is the fastest connection a desktop drive has. SATA and spinning drives are both slower.

#### Question in the draw: l11-q-m2

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

#### Question in the draw: l11-r-nvme

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **An SSD can talk to the computer through a protocol (a set of rules for how two parts talk) designed for flash memory that runs over PCIe lanes. Name it.**

**Type the name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - NVMe
  - NVM Express
  - NVMe SSD
  - NVMe drive
  - PCIe NVMe
  - NVM Express SSD

After the answer: Reason: NVMe runs over PCIe lanes, which makes it much faster than SATA. It usually comes on an M.2 stick.

#### Question in the draw: l11-k-msata

An older ultrabook has a small card slot, labeled mSATA, for its drive. The drive has died. The shop has an M.2 NVMe stick, an mSATA card and a 2.5-inch SATA drive.

**Which one fits that slot?**
(the options come in an order that depends on the seed of the question)
- The mSATA card (right)
- The M.2 NVMe stick, because it is newer — if chosen: M.2 and mSATA are different shapes and slots. They are not interchangeable, and NVMe needs a slot that runs it.
- The 2.5-inch SATA drive, on a cable — if chosen: It connects by SATA but is the wrong size for a card slot. It needs a drive bay and a cable.

After the answer: Reason: The slot is named for the card it takes: mSATA. M.2 is a different shape that does not fit it, so read the label on the slot.

#### Question in the draw: l11-k-disc

A designer has to hand a client a folder of 20 GB of photos on a disc. The client has a Blu-ray drive. A CD holds about 700 MB, a single-layer DVD 4.7 GB, and a single-layer Blu-ray disc 25 GB.

**Which single disc holds it?**
(the options come in an order that depends on the seed of the question)
- A single-layer Blu-ray disc (right)
- A single-layer DVD, at 4.7 GB — if chosen: 4.7 GB holds about a quarter of it. It would take five discs.
- A CD, at about 700 MB — if chosen: At about 700 MB it holds a few percent of the folder.

After the answer: Reason: Only Blu-ray, at 25 GB a layer, holds 20 GB on a disc. A DVD holds 4.7 GB and a CD about 700 MB.

#### Question in the draw: l11-s-laptop

Two drives are on a desk: a 3.5-inch hard drive and a 2.5-inch hard drive. A customer’s laptop needs a bigger hard drive.

**Which size does the laptop take?**
(the options come in an order that depends on the seed of the question)
- The 2.5-inch drive, for a laptop bay (right)
- The 3.5-inch drive, because it holds more — if chosen: Size in inches is the shape of the drive, and a laptop bay is built for 2.5.
- Either; the size is only a label — if chosen: The two sizes do not fit each other’s bays.

After the answer: Reason: A 2.5-inch drive fits a laptop, and the 3.5-inch size goes into desktops and servers. 2.5-inch SSDs use the same bay as 2.5-inch hard drives.

#### Question in the draw: l11-s-server

A company’s rack server has hot-swap drive bays, which let you pull and replace a drive while the server runs. The vendor’s quote lists drives that connect by SAS. A new technician wonders why not plain SATA.

**What is SAS?**
(the options come in an order that depends on the seed of the question)
- A sturdy server connection that also runs SATA drives (right)
- A small card shape used by laptop SSDs — if chosen: That describes M.2 or mSATA. SAS is a connection for servers.
- The memory chips used inside an SSD — if chosen: SAS is a way to connect, not what the drive is made of.

After the answer: Reason: SAS, Serial Attached SCSI, is the server connection. It is built for heavy use and many drives at once. SATA drives work on a SAS controller, but not the other way around.

#### Question in the draw: l11-s-card

A photographer’s camera takes a small memory card, and the photographer’s laptop has no card slot. The photographer wants to move the pictures today.

**What do you suggest?**
(the options come in an order that depends on the seed of the question)
- A USB card reader that plugs into the laptop (right)
- A Blu-ray burner that copies to discs — if chosen: The pictures are already on a card, and a burner would need a disc and many discs’ worth of time.
- A RAID array of two new hard drives — if chosen: RAID joins hard drives and does not read a camera card.

After the answer: Reason: Flash drives and memory cards are removable flash storage. A card goes into a reader, which plugs into USB.

#### Question in the draw: l11-s-rpm

The question, read aloud as above: **What is the fastest common spindle speed of a hard drive? Type the speed in RPM.**

**Type the speed.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 15000
  - 15000 RPM

After the answer: Reason: The common hard drive speeds are 5,400, 7,200, 10,000 and 15,000 RPM, and 15,000 is the fastest.

#### Question in the draw: l11-p-raid1

RAID uses several drives together so that they look like one. A small office has two drives in its file server. If one dies, the office must keep working with nothing lost, and the owner does not care about the speed.

**Which RAID level fits?**
(the options come in an order that depends on the seed of the question)
- RAID 1, which mirrors the data onto each drive (right)
- RAID 0, which stripes the data across both drives — if chosen: RAID 0 is fast but has no copy. If either drive dies, the data on both is gone.
- No RAID: one drive, copied once every month — if chosen: That loses up to a month of work, and the office stops until the drive is replaced.

After the answer: Reason: Two drives that must survive one failing is RAID 1, a mirror: each drive holds the same data. RAID 0 spreads the data and loses all of it when one drive fails.

#### Question in the draw: l11-q-cap

A file server has four 2 TB drives. The owner wants RAID 5: it stripes the data across the drives and adds parity, extra information that can rebuild one lost drive. The space of one drive goes to parity.

**How much space can the owner use?**
- The learner types a number, with the calculator within reach: [ ] TB.
- Right (within 0.01): 6 TB
- If typed 8 TB: 8 TB is all four drives, which is RAID 0. RAID 5 gives up one drive’s worth of space for parity.
- If typed 4 TB: 4 TB is what RAID 6 gives with four drives, and what RAID 10 gives, which is half the space. RAID 5 gives up only one drive’s worth.

After the answer: Reason: RAID 5 uses the space of all drives but one: three drives of 2 TB is 6 TB, and the fourth drive’s worth holds the parity.

#### Question in the draw: l11-q-six

Esme is building storage for her firm’s accounts. She has six drives. Losing the data would be a disaster, and when one drive fails she cannot always replace it the same day, so a second one might fail while she waits. Speed does not matter.

**Which RAID level fits?**
(the options come in an order that depends on the seed of the question)
- RAID 6, which keeps two parity blocks (right)
- RAID 5, which survives one drive failing — if chosen: A second failure during the wait loses everything. RAID 5 holds only one.
- RAID 0, because it keeps all the space — if chosen: RAID 0 survives nothing: one failure loses all the data.

After the answer: Reason: She needs to survive two failures at the same time, and only RAID 6 of these does. It needs at least four drives, and she has six.

#### Question in the draw: l11-q-parity

The question, read aloud as above: **RAID 5 and RAID 6 store extra information across the drives that can rebuild what a lost drive held. What is that extra information called? One word.**

**Type the word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - parity

After the answer: Reason: Parity is the extra information that lets the array rebuild a lost drive. RAID 5 keeps one drive’s worth of it and RAID 6 keeps two.

#### Question in the draw: l11-r-zero

A written note: "Ticket", Fritz’s workstation.

> Two drives in RAID 0 for fast video work. One drive reports a S.M.A.R.T. warning. The array still works.

**What do you tell Fritz to do?**
(the options come in an order that depends on the seed of the question)
- Copy the work off now, replace the drive, make a new array and copy the work back (right)
- Wait until it fails; RAID will rebuild the data — if chosen: RAID 0 has no copy to rebuild from. When one drive fails, the data on both is gone.
- Swap the warned drive now and let RAID rebuild — if chosen: RAID 0 cannot rebuild a drive, so the swap loses everything.
- Check the warning again after a week, then decide — if chosen: Waiting leaves the only copy on a drive that has warned. The work is copied off first, whatever the check says later.

After the answer: the deciding words are marked. Reason: RAID 0 only splits the data. It keeps no copy and no parity, so a warning on either drive means copy first. After a failure it is a new array and a restore. The levels that rebuild are 1, 5, 6 and 10.

#### Question in the draw: l11-k-min5

The question, read aloud as above: **What is the smallest number of drives that RAID 5 needs? Type the number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 3
  - three drives

After the answer: Reason: RAID 5 needs at least three drives: the data is striped across them, with the parity of one drive’s worth spread through. RAID 1 needs two, and RAID 6 and RAID 10 need four.

#### Question in the draw: l11-k-ten

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

#### Question in the draw: l11-k-six

A backup server has five 4 TB drives in RAID 6. It stripes the data and keeps two drives’ worth of parity, so it survives two drives failing.

**How much space can be used?**
- The learner types a number, with the calculator within reach: [ ] TB.
- Right (within 0.01): 12 TB
- If typed 16 TB: 16 TB is what RAID 5 gives from five drives, losing only one drive’s worth to parity. RAID 6 loses two.
- If typed 20 TB: 20 TB is all five drives, which is RAID 0. RAID 6 gives up two drives’ worth of space.

After the answer: Reason: RAID 6 gives up two drives’ worth of space to parity: three drives of 4 TB left is 12 TB.

#### Question in the draw: l11-s-mirror

A file server has two 4 TB drives in RAID 1, a mirror.

**How much space can be used?**
- The learner types a number, with the calculator within reach: [ ] TB.
- Right (within 0.01): 4 TB
- If typed 8 TB: 8 TB is both drives added together, which is RAID 0. A mirror holds the same data on both, so only one drive’s worth is usable.

After the answer: Reason: In RAID 1 each drive holds a full copy, so the usable space is one drive: 4 TB.

#### Question in the draw: l11-s-notbackup

A written note: "Message from Leif", Chat · 4:30 PM.

> We have RAID 5, so I deleted the old projects folder to clean up. Can you get it back? The RAID must have it.

**What do you tell Leif?**
(the options come in an order that depends on the seed of the question)
- The delete went to every drive too; look in the backup or in earlier versions of the folder (right)
- Check the other drives, because RAID keeps a copy — if chosen: The parity rebuilds a lost drive, not a deleted folder. The delete was written to every drive.
- Replace one drive and let RAID rebuild the folder back — if chosen: A rebuild restores the array to what it was, with the folder already gone.

After the answer: the deciding words are marked. Reason: RAID protects against a drive dying. It does not protect against deletes, malware, fire or a damaged controller, so it is not a backup. A separate copy is.

#### Question in the draw: l11-s-zero

A video editor needs the fastest drive speed possible for scratch files, which are copied back from the main storage and can be made again. The workstation has two identical drives.

**Which RAID level fits?**
(the options come in an order that depends on the seed of the question)
- RAID 0, which stripes the data for speed (right)
- RAID 1, which mirrors the two drives — if chosen: Mirroring uses both drives to hold one drive’s worth of data and does not read faster by much.
- RAID 6, which survives two drives failing — if chosen: RAID 6 needs four drives, and it is not the speed pick.

After the answer: Reason: RAID 0 splits data across the drives for speed, with no copy. It fits files that can be rebuilt and fits nothing else.

#### Question in the draw: l11-s-stripe

The question, read aloud as above: **What is the name for the way RAID 0 splits data across drives? One word.**

**Type the word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - striping
  - stripe
  - striped

After the answer: Reason: Striping spreads the data across the drives. RAID 0 only stripes, RAID 1 mirrors, and RAID 5 and 6 stripe with parity.

#### Question in the draw: l11-w-click

An email: "Boris Lund, Operations", Email · 9:10 AM.

> Subject: **Computer slow and clicking**
>
> My computer has made a clicking noise since Monday and opening a file takes minutes.
> Every customer file and all my photos are in My Documents. The last copy I made was last year.
> I think it just needs a cleanup.
> It clicks even when I have nothing open.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy his files to an external drive, then read the drive’s own report (right)
- Run a disk cleanup first, as he suggests, then watch it — if chosen: A cleanup frees space, but nothing about space makes a drive click. The drive keeps running, and may stop for good.
- Reinstall Windows to start fresh, then restore later — if chosen: A reinstall wipes the drive, files included, and the drive is the thing that is failing.

After the answer: the deciding words are marked. Reason: He clicks even when nothing is open, so the cause is a part that moves, not a program. His customer files have no copy. The failing hard drive is the thing to protect before it is the thing to fix.
The working:
- Sort it: something is broken now, and his files are at risk.: It is an incident, and the files may be worth more than the computer. That decides what comes first.
- Write down the favorite cause, then find the test that can rule it out.: Boris thinks it needs a cleanup. A full drive or too many programs makes a computer slow, but neither makes a click. His own line, that it clicks with nothing open, rules the cleanup out: a click with no program running is a part moving.
- Copy his files to another drive before anything else.: A clicking hard drive has moving parts that are failing, and every hour it runs may be the last. Copy first. A cleanup, a repair tool or a reinstall all work the drive hard, and a reinstall wipes the files.
- Check the drive’s own report, replace it, restore the copy, and have Boris confirm.: The drive’s S.M.A.R.T. report, its built-in self-check, says failing. You replace the drive, put his files back from the copy, and close the ticket only after he opens a customer file himself.

#### Question in the draw: l11-p-click

A written note: "Message from Kasia", Chat · 11:20 AM.

> My laptop’s hard drive started to grind and click this morning. I have the whole budget file on it, and no copy.

**What is your first move?**
(the options come in an order that depends on the seed of the question)
- Have her stop using it and copy the budget file to an external drive, or to the company share if she has access to one (right)
- Run the disk repair tool on it overnight — if chosen: A repair tool works the drive hard and may change files. A drive that grinds may not finish the job.
- Defragment it (rearrange its files to sit together) — if chosen: Defragmenting moves every file around on a drive that is already failing. It cannot fix a part that grinds.

After the answer: the deciding words are marked. Reason: Grinding or clicking from a hard drive is the platters or the head failing. Copy the files off first, with as little use of the drive as you can, then deal with the drive.

#### Question in the draw: l11-q-notfound

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

#### Question in the draw: l11-r-array

A NAS is a storage box on the office network that holds several drives. The controller is the part that joins them into an array.

This desk’s rule: hand on any array fault that is still open after 20 minutes.

A written note: "Ticket", Office NAS.

> After a power cut, the file server shows no storage. The array is missing. All four drives show in the controller.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Change nothing on the drives; check cables, power and the controller screen, and hand on only if the desk’s rule below says so (right)
- Create a new array from the same four drives — if chosen: Creating the array again can wipe the data that is still on the drives.
- Format all four drives and start over fresh — if chosen: Formatting erases the data that the array was holding.

After the answer: the deciding words are marked. Reason: A missing array with all drives still listed can mean the controller lost its settings, not the data. Anything that writes to the drives risks the data, so look and do not change.

#### Question in the draw: l11-r-order

A user’s hard drive, the one Windows starts from, has a S.M.A.R.T. warning. It still works, but slowly, and the only copy of her files is on it. Put the work in order.

**Tap the steps in the order you do them.**
- Tap the seven steps in the order you would do them. The steps are offered mixed (never already in the right order): "Replace the drive"; "Copy the files to another drive"; "The user opens a file and says it works"; "Put Windows on the new drive"; "Put the files back on the new drive"; "Tell the user to stop saving work to the drive"; "Check that the firmware screen lists the new drive". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 7 are.
- Right: Tell the user to stop saving work to the drive, then Copy the files to another drive, then Replace the drive, then Check that the firmware screen lists the new drive, then Put Windows on the new drive, then Put the files back on the new drive, then The user opens a file and says it works. After a miss: "You put: …" and why the order matters: Stop the drive being used, copy before you touch it, replace it, make sure the computer sees the new one, put Windows on it (a new drive is blank), restore the files, and close only when the user confirms.

After the answer: Reason: The copy comes right after the user stops using the drive, because the drive is the failing part. The new drive must be seen and have Windows on it before files go back, and the user’s yes comes last, so the ticket is not closed on your test alone.

#### Question in the draw: l11-k-smart

A written note: "Ticket", Laptop, 95% full.

> Computer very slow for a month. The drive’s S.M.A.R.T. report (its built-in self-check) says: failing.
> The user has the only copy of a thesis on it.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy the thesis to another drive, then replace it (right)
- Delete old files to free space, as it is 95% full — if chosen: Space is not what a failing report is about. Working the drive harder to make space puts the thesis at risk.
- Run a full disk check to confirm the report — if chosen: A check reads every part of a drive that is failing. Copy first, and test later.

After the answer: the deciding words are marked. Reason: The S.M.A.R.T. report is the drive saying it is failing, and the thesis has no other copy. A full disk is a plain fix for a slow computer but not when the drive itself says it is failing.

#### Question in the draw: l11-k-alarm

A written note: "Ticket", Small office server, RAID 1.

> The server beeps every minute. A red light shows on drive bay 2 (the slot that drive slides into). Everything still works, so the owner wants to ignore it until Monday.
> The last backup ran three weeks ago.

**What do you tell the owner?**
(the options come in an order that depends on the seed of the question)
- Copy the work to an external drive today, then put a same-size drive in bay 2 and let the mirror rebuild (right)
- Nothing is wrong yet: RAID 1 protects it, so Monday is fine — if chosen: The array survives one failure. It does not survive a second, and until the drive is replaced the other drive is the only copy.
- Recreate the array to clear the alarm and the light — if chosen: Creating the array again can wipe the surviving drive. Replace the failed drive and let it rebuild.
- Put a new drive in bay 2 right now and let the rebuild run — if chosen: The rebuild reads every file from the one drive still working. If it fails under that load, the only copy goes with it, and the backup is three weeks old.

After the answer: the deciding words are marked. Reason: An audible alarm and a red light on a bay mean one drive in the array has failed. RAID 1 keeps the data going, but the backup is old and the surviving drive is the only copy if it fails during the rebuild, so copy the work off first, then replace the failed drive.

#### Question in the draw: l11-k-usb

A plain table, "Firmware setup screen":

> Device  |  Listed?  (the column heads)
> Internal SSD  |  Not listed
> USB flash drive (holds only photos)  |  Listed

A written note: "Ticket", Desktop, no bootable device found.

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

#### Question in the draw: l11-s-missing

A user says drive D: has disappeared from Windows. Her computer starts fine. You open the firmware setup screen (the built-in screen that shows what the computer can see) and it lists the second drive.

**What does that tell you?**
(the options come in an order that depends on the seed of the question)
- The firmware sees it, so look at Windows before erasing (right)
- The drive is dead, so order a new one — if chosen: A dead drive would not be listed in the firmware setup screen.
- Reinstall Windows from scratch — if chosen: Nothing shows Windows is damaged, and a reinstall puts the files at risk.

After the answer: Reason: A drive that shows in the firmware screen is alive and connected. The fault is further up the chain, in how Windows sees it, so look there without erasing.

#### Question in the draw: l11-s-slow

A written note: "Ticket", Desktop.

> Files take a long time to open and to save. S.M.A.R.T. status: OK. The drive has 3% free space.

**What is the cheapest test or fix first?**
(the options come in an order that depends on the seed of the question)
- Free up space, then test again; S.M.A.R.T. shows no failure (right)
- Replace the drive and restore the files — if chosen: S.M.A.R.T. says it is healthy, and the full drive explains the slowness.
- Rebuild the RAID array from scratch — if chosen: There is no array here, and nothing is wrong with one.

After the answer: the deciding words are marked. Reason: Slow reads and writes have several causes: a failing drive, a full drive or a loose cable. S.M.A.R.T. shows OK and the drive is nearly full, so the cheap test is to make room.

#### Question in the draw: l11-s-iops

A database server with a RAID 5 array takes several seconds to answer when many people use it at once, but a single user feels no delay. An IOPS reading, the number of reads and writes the array handles each second, is far lower than it was last month. One drive has an amber light.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- A failing drive in the array; check the backup, then replace the amber one (right)
- The users use it more, and nothing is wrong — if chosen: IOPS fell compared to last month, with the same use, and a drive has a warning light.
- Recreate the array and restore from backup — if chosen: Creating it again can wipe the data. Replace the failed drive and let it rebuild.

After the answer: Reason: Low IOPS and an amber drive light together mean a failing drive in the array. With a current backup in hand, replacing it lets the array rebuild and brings the speed back.

#### Question in the draw: l9-w-marcus

A chat, with its history: "Malik, Accounting", Chat with the help desk.

> (Malik, Accounting, at the left) My desktop will not start. I pushed the button and all I get is a black screen. It has been sick for a week, so I bet the hard drive finally died.

The chain from the button to the desktop: power, the start-up self-test, firmware, the boot drive, Windows loading, sign-in. A fault on one link stops everything after it.

**Malik says the front light is on and the fans spin, but the screen never shows a logo or any words. Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Before the logo: the self-test, or the screen itself. (right)
- At the boot drive, the part Malik says died this week. — if chosen: The firmware looks for the drive only after the self-test passes and the logo shows. No logo has shown, so the computer never got that far.
- At power, so the outlet or the power cable is at fault. — if chosen: The light is on and the fans spin, so power reaches the computer.

After the answer: the deciding words are marked. Reason: The favorite cause, the drive, sits on link 4, and the computer never got that far: no logo meant it stopped between power and firmware. “How far did it get?” ruled the drive out with one question. The beeps then said which part the self-test found at fault.
The working:
- Write the chain, so every cause has a place.: Power, start-up self-test, firmware, boot drive, Windows loading, sign-in. A black screen could be any of the first three, or the screen itself.
- Name the favorite and find which link it sits on.: A dead hard drive is the boot drive link, number 4. The computer would first have to get through links 1 to 3.
- Find out how far it got, the cheapest test there is: it changes nothing.: Malik: front light on, fans spin, no logo, no words. Link 1 is fine. It never reached link 3, so link 4 cannot be where it stopped.
- Cut the two that are left: the screen against the computer.: Malik plugs his monitor into a co-worker’s computer. A picture shows. The monitor and cable are fine. The fault is inside his computer.
- Find out whether the computer gave a sign.: Malik: “Now that you mention it, it beeps in a pattern when I push the button.” The start-up self-test beeps when it finds a fault. The pattern means something different for each maker, so look it up for his computer.
- Look it up, then make one change.: The motherboard maker’s manual says that pattern is a memory fault, so the memory sticks are the cause to test, one at a time. Malik switches off and unplugs it, then reseats one memory stick and tries: still the same beeps. He reseats the second stick and tries again: it starts. Only that second stick was loose, and the hard drive was never the problem.

#### Question in the draw: l9-p-dead

A chat, with its history: "Ilsa, Records", Chat with the help desk.

> (Ilsa, Records, at the left) My desktop is completely dead. No lights, no fans, no sound. The monitor says no signal.

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Power (right)
- The start-up self-test — if chosen: The self-test cannot run on a computer with no power. Its signs (a screen, beeps) are missing, but so is everything else.
- Firmware — if chosen: The firmware runs only on a computer that has power. Nothing has come on.
- Windows loading — if chosen: Windows loads after four earlier links. This computer is not even on.

After the answer: the deciding words are marked. Reason: No light, no fan and no sound means nothing has power, so the first link is where it stops. A fault on link 1 stops every later link, which is why the cheap tests are an outlet that works, a power cable known to work, and the switch on the back of the power supply.

#### Question in the draw: l9-p-beeps

A chat, with its history: "Everett, Warehouse", Chat with the help desk.

> (Everett, Warehouse, at the left) I push the button, the fans run, and it beeps in a pattern. Long, short, short. The screen stays black.

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- The start-up self-test, which beeps a pattern (right)
- Power, which feeds the fans and the board — if chosen: The fans run, so power reaches the computer.
- The boot drive, which holds Windows’ files — if chosen: The drive is looked for after the self-test passes. This one did not.
- Firmware, which looks for the boot drive — if chosen: The firmware looks for the boot drive only after the self-test passes and the logo shows. Beeps and a black screen mean the self-test found a fault first.

After the answer: the deciding words are marked. Reason: The start-up self-test (POST, the power-on self-test) checks the processor, memory, keyboard and video before anything else. When it finds a fault it beeps a pattern. The pattern differs by maker, so the next step is to look it up in the motherboard’s manual, not to guess.

#### Question in the draw: l9-p-nodev

A chat, with its history: "Gabor, Sales", Chat with the help desk.

> (Gabor, Sales, at the left) The maker’s logo shows, then a black screen with white words: “No bootable device found.”

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Firmware: it found no drive it can start from (right)
- The start-up self-test: it checked memory and video and failed — if chosen: The logo shows, so the self-test passed. “No bootable device” is not a self-test message.
- Windows loading: the dots start and then it stops — if chosen: Windows would be loading if the firmware had found a drive to start it from. The message says it did not.
- Power: the outlet or the power supply is not feeding it — if chosen: A logo and a message on the screen mean power works.

After the answer: the deciding words are marked. Reason: The firmware is the program that finds the drive to start from, using the boot order. “No bootable device” means it found none it can start from. The cheapest test is to open the firmware screen and see whether the drive is listed: not listed points at the drive or its cable (link 4), listed points at the boot order or damaged start-up files.

#### Question in the draw: l9-p-blue

A chat, with its history: "Hilda, Shipping", Chat with the help desk.

> (Hilda, Shipping, at the left) Windows starts to load, the little dots spin, and then a blue screen with a sad face and a code comes up. Then it restarts and does it again.

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Windows loading (right)
- The boot drive — if chosen: The firmware found the drive and started Windows from it, so the drive link worked.
- Sign-in — if chosen: The computer never reaches the sign-in screen.
- The start-up self-test — if chosen: Windows loaded far enough to show a screen, so the self-test passed.

After the answer: the deciding words are marked. Reason: A blue screen is Windows’ own crash screen, shown with a stop code that names what failed. The code is what you write down and search for. It also says the first four links worked.

#### Question in the draw: l9-s-clock

A chat, with its history: "Nora, HR", Chat with the help desk.

> (Nora, HR, at the left) Every morning my computer shows the wrong date and time, a few years back, and my files say they were made in the past. I fix the clock and it is wrong again tomorrow.

The firmware keeps the date, time and its settings in a small memory that a coin-sized battery on the motherboard keeps alive when the computer is off.

**Which is the most likely cause?**
(the options come in an order that depends on the seed of the question)
- That small battery on the motherboard is dead. (right)
- The hard drive is failing. — if chosen: A failing drive shows as noises, slow reads or “no bootable device”, not a clock that loses time overnight.
- Windows’ automatic time setting is switched off. — if chosen: That would let the clock drift by minutes. It would not send it back years each night.
- The power supply is weak. — if chosen: A weak power supply causes shutdowns and failures to start, not a clock that resets each night.

After the answer: the deciding words are marked. Reason: Two causes fit a wrong clock: the battery, and Windows’ time setting. A clock that falls back years every night, with the files stamped to match, is the firmware losing its memory while the computer is off, so the battery (link 3) comes first. Windows reads its time from the firmware, and reinstalling Windows would not give the firmware a battery. Changing the battery is cheap, and if the clock then holds, the other cause is ruled out too.

#### Question in the draw: l9-s-profile

A chat, with its history: "Imre, Engineering", Chat with the help desk.

> (Imre, Engineering, at the left) My computer starts fine, I get to the sign-in screen and type my password, and then it sits for five minutes before the desktop shows up. My files and icons also look different.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Imre signs in on Saoirse’s computer  |  Five minutes, the same wait
> Saoirse signs in on Imre’s computer  |  The desktop loads in seconds

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Imre’s profile (the saved desktop that loads at sign-in) (right)
- Imre’s computer: something inside it slows the sign-in — if chosen: Saoirse signs in on Imre’s computer and it loads in seconds, so the computer is cleared.
- The boot drive, which Windows loads from at start-up — if chosen: The computer reaches the sign-in screen, so the drive and Windows loaded.
- The start-up self-test, which checks memory and video — if chosen: The sign-in screen shows, so the self-test passed long ago.

After the answer: the deciding words are marked. Reason: It is slow only for Imre, on any computer, and only after sign-in: that is link 6, the profile. The first five links worked, because Saoirse gets through them on the same machine. A slow profile load points at the profile, not the computer.

#### Question in the draw: l9-s-list

A chat, with its history: "Yuki, Legal", Chat with the help desk.

> (Yuki, Legal, at the left) My desktop shows “No bootable device found” after the logo. It worked yesterday.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Open the firmware screen and look at the list of drives  |  The list is empty. No hard drive is shown.

**Which causes are still worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- The drive has failed (right)
- The cable or the connection to the drive has come loose or failed (right)
- The boot order tells the firmware to look at the wrong drive — if chosen: The firmware sees no drive at all, so there is nothing to put in a different order.
- The user’s password is wrong — if chosen: The computer has not reached Windows, so no password has been asked for.

After the answer: the deciding words are marked. Reason: An empty drive list means the firmware cannot see the drive. That points at the drive itself or the cable between it and the motherboard, the two things to cut between next (try a cable known to work, or check the drive in another computer). With no drive listed there is nothing to order, and the password belongs to a link the computer never reached.

#### Question in the draw: l9-s-next

A chat, with its history: "Jorin, Operations", Chat with the help desk.

> (Jorin, Operations, at the left) My desktop shows “No bootable device found.” The logo appears first.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Open the firmware screen and look at the list of drives  |  The drive is listed, with its right name and size

The drive is there. Causes left: the boot order points at something else, or the drive’s start-up files are damaged.

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Check whether the drive is first in the boot order. (right)
- Swap the cable between the drive and the motherboard, then restart. — if chosen: The firmware lists the drive with its right name and size, so the cable carries data. The test was already answered.
- Replace the hard drive with a new one and put Windows on it. — if chosen: The firmware sees the drive, so it is not shown to be bad. It would also lose the data on it.
- Press the power button again and read the message once more. — if chosen: The same try gives the same message and rules nothing out.

After the answer: Reason: The firmware sees the drive, so the cause is the boot order (a firmware setting) or the start-up files on the drive. The boot order is cheap to look at and changes nothing until you change it. Check it before any fix that touches the user’s files.

#### Question in the draw: l9-s-dead

A chat, with its history: "Kendra, Planning", Chat with the help desk.

> (Kendra, Planning, at the left) My desktop says “No bootable device found” after the logo. The files that matter are all on the company server, and I checked: the latest copies are there.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Open the firmware screen and look at the list of drives  |  The list is empty
> Change the cable between the drive and the motherboard to one known to work  |  The list is still empty
> Put the drive in another computer  |  That computer does not see it either

**What do you do now?**
(the options come in an order that depends on the seed of the question)
- Replace the drive and bring the files back from the server. (right)
- Try a third cable, in case the second one is also bad. — if chosen: A cable known to work already gave the same answer. Another cable splits nothing new.
- Change the boot order in the firmware screen, then restart. — if chosen: With no drive listed there is nothing to put in a different order.
- Press the power button again and read the message once more. — if chosen: The same try gives the same message and rules nothing out.

After the answer: the deciding words are marked. Reason: Each test cut one side away: the firmware cannot see the drive, a cable known to work did not help, and another computer cannot see it. What is left is the drive itself, so the fix is a new drive. The data came first: Kendra’s files are already on the server, which is why the repair can start at once.

#### Question in the draw: l9-x-new

Bram in Shipping calls the help desk. You answer.

**Bram calls about his desktop. What do you say?**
- An incoming call from "Bram, Shipping" (Incoming call · 8:40 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer is dead. It is old. I need a new one today." [pushes: He wants a replacement before anything has been tested.]
  - reply "I will put in the order for a new computer today.": the call ends (not this one): Nothing showed the old computer was the cause. One question about the lights and fan would have shown how far it got. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "You need to work today and the computer will not run. Before I order anything, tell me what happens when you push the power button.": goes on to turn 2, where the pressure comes back
  - reply "Is it plugged in? Check that first, and then call me back.": the call ends (not this one): The plug is a cheap check, but it covers only link 1. Asking what happens at the power button covers all six links at once and tells you whether power is the link to look at. [slip: ran a test that does not split what works from what does not]
  - reply "Unplug it, wait a minute, and plug it in again.": the call ends (not this one): Unplugging and plugging in is a repeat, not a test. If it fails again, you still do not know which link failed. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "The light comes on and the fan spins. Then the screen just says “No signal.” But I am sure it is old. Just order it." [pushes: He still wants the replacement, though the computer is clearly powering on.]
  - reply "I hear you that it is old. Power works, so it may be only the cable or the monitor. I will check both and tell you today whether the computer needs replacing.": the call ends (right): The light and fan show power works, so the fault is further along. “No signal” is the screen not getting a picture, so the cable and monitor are the cheapest things to cut next. Telling him when he will hear back says what happens next.
  - reply "I hear you that it is old. All right: I will order the new computer today and tell you when it arrives.": the call ends (not this one): The computer powers on, so a new one is not shown to be needed. “No signal” could be the cable or the monitor. [slip: replaced a part before the cheap check]
  - reply "I hear you that it is old. It sounds like the hard drive has died, so I will line up a new one and call you today.": the call ends (not this one): A dead drive would show after the maker’s logo, as a message about a boot device. Bram has not got a picture at all, so the computer has not reached the drive. [slip: put the fault on the wrong link of the chain]
  - reply "I hear you that it is old. Let us open the firmware screen and see whether it lists the drive, and I will call you back today.": the call ends (not this one): There is no picture, so there is no firmware screen to open. The cable and monitor come first. [slip: put the fault on the wrong link of the chain]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: The light and fan show power works, which rules out link 1. “How far did it get?” is the question that cut the list; the screen, cable and self-test are what is left, and each can be tested without ordering anything.

#### Question in the draw: l9-g-click

A chat, with its history: "Kendra, Planning", Chat with the help desk.

> (Kendra, Planning, at the left) My laptop makes a clicking noise from the bottom and then Windows takes ages to start. Twice this week it said it could not find the operating system.

You have a few minutes before you touch anything. The laptop still starts sometimes.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Have Kendra copy her files off now, then look at the drive. (right)
- Reinstall Windows to fix the slow start and the errors. — if chosen: A failing drive may not survive a reinstall, and a reinstall erases her files.
- Tell her the noise is normal and to keep working. — if chosen: The noise is the computer reporting what is failing. Ignoring it risks the files.
- Run the maker’s drive test on the laptop, and copy the files after. — if chosen: The test reads the whole failing drive hard and may be the thing that makes it stop. The files come out before any test touches the drive.

After the answer: the deciding words are marked. Reason: Clicking or grinding from a hard drive, slow starts and “operating system not found” say the drive (links 4 and 5) is failing, and the message is the firmware looking for it (links 3 and 4). A failing drive can stop for good, so the data comes out before any test or fix touches it, as in the earlier topic on protecting data.

#### Question in the draw: l9-g-smell

A chat, with its history: "Linus, Finance", Chat with the help desk.

> (Linus, Finance, at the left) My desktop smells like something is burning and it just switched itself off. Can I turn it on again to see?

**What do you tell Linus?**
(the options come in an order that depends on the seed of the question)
- Do not turn it on. Unplug it from the wall and have it looked at. (right)
- Turn it on once to see whether it still works, then decide. — if chosen: The smell is a warning. Powering it on again can finish off the part and is a safety risk.
- Open the side panel and look for the burnt part yourself, with it plugged in. — if chosen: Never open a computer that is plugged in. It is unsafe, and a look alone does not tell you the cause.
- Move it to another outlet and try it there, in case it is the outlet. — if chosen: The smell came from inside the computer, so a new outlet tests nothing and powers up a part that may be burning.

After the answer: the deciding words are marked. Reason: A burning smell, with a sudden shutdown, can come from the power supply or any part running too hot. It sits on no single link, so no start-up test is worth the risk. Safety comes first: power off, unplug, and have it looked at.

#### Question in the draw: l9-g-two

A chat, with its history: "Marit, Support", Chat with the help desk.

> (Marit, Support, at the left) The user has a desktop with a black screen and fans that run. A co-worker already swapped the monitor cable, moved the memory sticks to different slots, and put in a new power cable all at once. It now starts. Nobody knows which did it.

**Why is that a problem?**
(the options come in an order that depends on the seed of the question)
- Three changes went in together, so nobody knows which one fixed it. (right)
- Memory sticks should never be moved, whatever the symptom is. — if chosen: Moving memory is a normal, cheap test. The mistake was doing it together with two other changes.
- The new power cable cannot have helped, so it did not count. — if chosen: It may have. With three changes together, you cannot tell.

After the answer: the deciding words are marked. Reason: The rule of one change at a time holds on the boot chain too: change one thing, look, then change the next. Each link has its own cheap changes (a cable, the memory, a power cord), and one at a time is the only way to learn which link was the fault.

#### Question in the draw: l9-k-laptop

A chat, with its history: "Nestor, Sales", Chat with the help desk.

> (Nestor, Sales, at the left) My laptop will not turn on. I plugged in the charger last night and now there is no light at all on the laptop.

Causes you can list: the wall outlet, the charger and its cable, the laptop’s battery, the laptop’s power parts.

**Which test do you run first?**
(the options come in an order that depends on the seed of the question)
- Plug the laptop’s own charger into another outlet. (right)
- Swap the charger and the outlet together. — if chosen: Two changes at once. If the laptop comes on, you cannot tell whether the charger or the outlet was the fault.
- Open the firmware screen and check the boot order. — if chosen: The laptop has no power, so there is no firmware screen to open. The test is on a link it has not reached.
- Order a new charger and wait for it to come. — if chosen: It spends money on one cause before any cheap test, and it changes the one thing the next test needs to keep.

After the answer: the deciding words are marked. Reason: No light on the laptop puts the fault on link 1, power. A charger in a different outlet splits the wall from the rest, and changes only one thing. If it still fails, the next single change is a charger known to work for this model, which splits the charger from the laptop.

#### Question in the draw: l9-k-logo

A chat, with its history: "Keira, Records", Chat with the help desk.

> (Keira, Records, at the left) The computer shows the maker’s logo, then goes to a black screen with a blinking line and nothing else. It says nothing about a drive.

A plain table, "What you know":

> Link  |  Worked?  (the column heads)
> Power  |  Yes: lights and fans
> Start-up self-test  |  Yes: the logo shows

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Open the firmware screen: is the drive listed, and first? (right)
- Replace the power supply with one from the stores room. — if chosen: Nothing in this ticket points at power: the lights, the fans and the logo show the computer started. A part is not replaced before the cheap look.
- Replace the memory with sticks from the stores room. — if chosen: The memory passed the self-test, since the logo shows.
- Try the monitor on another computer to check the screen. — if chosen: The logo shows on this monitor, so the screen works. The question is what happens after the logo.

After the answer: the deciding words are marked. Reason: The first two links worked, so the fault is the third link or later. The firmware screen is the cheapest place to look next: whether it sees the drive, and in what order it looks, splits firmware and drive from Windows.

#### Question in the draw: l9-k-where

A chat, with its history: "Olwen, Planning", Chat with the help desk.

> (Olwen, Planning, at the left) I can sign in, but the screen then says it is “preparing” for ages and gives me a blank desktop with none of my icons or files. A co-worker signed in on my computer and has no trouble.

**Where on the chain is the fault?**
(the options come in an order that depends on the seed of the question)
- Sign-in and profile: the saved desktop and files (right)
- Windows loading: the logo, dots and the blue screen — if chosen: Windows loads fine for the co-worker on the same computer.
- The boot drive: where the start-up files sit — if chosen: The computer starts and shows sign-in, so the drive was found.
- Power: the outlet, cable and power supply — if chosen: The computer is on and shows a screen.

After the answer: the deciding words are marked. Reason: A different person gets through every link on the same computer, so the computer is cleared and the fault goes with Olwen’s profile. It is the same split as “another person, same computer” in cutting it in half, now on a chain.

#### Question in the draw: l9-k-list

A chat, with its history: "Pascal, Accounting", Chat with the help desk.

> (Pascal, Accounting, at the left) The fans spin and there are three long beeps, then nothing. The monitor says no signal. The same monitor works on my laptop.

**Which causes are still worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- A memory stick that is loose or has failed (right)
- The video card or its connection (right)
- The monitor is broken — if chosen: The same monitor works on Pascal’s laptop.
- The user’s profile is damaged — if chosen: The computer has not reached Windows or sign-in, so no profile has loaded.

After the answer: the deciding words are marked. Reason: The beeps mean the start-up self-test found a fault, usually memory or video, so those are the two to list. The monitor works elsewhere and the profile belongs to a link the computer never reached.

#### Question in the draw: l9-k-call

Ilsa in Records calls the help desk. You answer.

**Ilsa calls about her desktop. What do you say?**
- An incoming call from "Ilsa, Records" (Incoming call · 1:15 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer will not work. It is stuck on a black screen with some white words. I do not know what they say. Can you just reinstall Windows?" [pushes: She wants the biggest fix before she has read the words.]
  - reply "Yes, I will reinstall Windows for you now.": the call ends (not this one): A reinstall erases her files and nothing said Windows was the fault. The words on the screen had not been read yet. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "So it is a black screen with white words on it. Please read me the words exactly as they are written.": goes on to turn 2, where the pressure comes back
  - reply "Turn it off and on again and call back.": the call ends (not this one): A restart repeats the failure, and rules nothing out. The message on the screen is the most useful thing she has. [slip: ran a test that does not split what works from what does not]
  - reply "Is the monitor plugged in properly?": the call ends (not this one): She can see words on the screen, so the monitor works. The question rules nothing out. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "It says “Operating system not found.” It showed the maker’s logo first. My last computer was fixed with a reinstall, so just do that." [pushes: She still wants it reinstalled.]
  - reply "The logo means power and the self-test worked. A reinstall would erase your files, and if the drive is missing it would not help. First I will look in the firmware screen to see whether the computer sees the drive.": the call ends (right): The logo says the first two links worked. Whether the firmware sees the drive splits a missing or failed drive from damaged start-up files, and it erases nothing. Holding the line politely, with the reason, keeps her files safe.
  - reply "I understand it worked last time. Then yes, I will put Windows on again for you now and call you when it is done.": the call ends (not this one): The message could mean the drive is missing or unreadable, and a reinstall would not fix that. It also erases her files. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "It is probably a virus.": the call ends (not this one): Nothing in “operating system not found” says a virus. Telling her a cause before knowing it can mislead her and the next person. [slip: told the user a cause before knowing it]
  - reply "Have you tried a different outlet for the computer?": the call ends (not this one): The computer has power: the logo and the message show it. Another outlet tests a link that already worked. [slip: put the fault on the wrong link of the chain]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Reading the words exactly is the cheapest test, and the maker’s logo says the first two links worked. The message places the fault on the boot drive, where the next cut is whether the firmware sees the drive, before any fix that erases files.

#### Question in the draw: l9-k-blue

A chat, with its history: "Radu, Operations", Chat with the help desk.

> (Radu, Operations, at the left) Since this morning my computer starts, shows the Windows dots, then a blue screen and restarts, over and over. I have a report on it I have not saved anywhere else.

Windows loading fails, and the report exists only on this computer.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Write down the stop code, and copy the report off before any repair. (right)
- Reinstall Windows, since it will not start, and then rebuild the report. — if chosen: A reinstall can erase the report, the one thing Radu cannot replace.
- Restart it a few more times to see whether the blue screen clears. — if chosen: It has restarted over and over already. Another try gives the same answer and rules nothing out.
- Open the firmware screen and move the drive to the top of the boot order. — if chosen: Windows has already started from this drive, so the firmware found it and the boot order works. The test was answered by the dots.

After the answer: the deciding words are marked. Reason: A blue screen at the dots puts the fault on link 5, Windows loading. The stop code is the clue, and, as in the earlier topic on protecting data, the user’s only copy of the report comes first.

#### Question in the draw: l9-r-clock

A chat, with its history: "Siena, Facilities", Chat with the help desk.

> (Siena, Facilities, at the left) My desktop was unplugged for a week, and now it says the date is back in 2015 and the firmware screen says “settings have been reset.” It still works.

**Which link, and which part?**
(the options come in an order that depends on the seed of the question)
- Firmware: the small battery that keeps its settings and clock. (right)
- The boot drive: it is failing and losing its settings. — if chosen: The computer starts, so the drive is found. A failing drive does not reset the clock.
- Sign-in and profile: the profile is damaged and loads wrongly. — if chosen: The date is wrong at the firmware screen, before any profile loads.

After the answer: the deciding words are marked. Reason: A reset clock and “settings have been reset” both come from the firmware’s memory losing power. It is link 3.

#### Question in the draw: l9-r-noise

A chat, with its history: "Tomasz, Finance", Chat with the help desk.

> (Tomasz, Finance, at the left) My desktop makes a grinding noise from inside and the file I open takes a minute. A pop-up from the manufacturer’s tool said a drive health check failed.

**What does this show, and what comes first?**
(the options come in an order that depends on the seed of the question)
- A failing hard drive; get her files off first. (right)
- The power supply; replace it today and test it. — if chosen: Nothing here is about power. A power fault shows as no start or random shutdowns.
- The monitor; replace the cable and try again. — if chosen: The screen works. The noise and slow reads come from a drive.

After the answer: the deciding words are marked. Reason: Grinding, slow reads and a failed health check all name the drive. The files come out before any other step.

#### Question in the draw: l9-r-monitor

A chat, with its history: "Lee, Planning", Chat with the help desk.

> (Lee, Planning, at the left) The computer starts, the lights are on and the fans spin, but the monitor says “No signal.” It did not beep.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Lee’s monitor plugged into a co-worker’s computer  |  A picture shows
> Lee’s computer plugged into the co-worker’s monitor with a cable that works  |  No picture

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Lee’s computer, not the monitor or its cable (right)
- Lee’s monitor, which has stopped showing a picture — if chosen: The monitor shows a picture from the co-worker’s computer.
- The cable between the computer and the monitor — if chosen: The test used a cable that works, and the computer still gave no picture.

After the answer: the deciding words are marked. Reason: The monitor works on another computer and Lee’s computer fails on a good monitor with a good cable, so the fault is inside the computer: the self-test, the video part or the memory.

#### Question in the draw: l9-r-shutdown

A chat, with its history: "Ursa, Sales", Chat with the help desk.

> (Ursa, Sales, at the left) My desktop shuts itself off after about ten minutes of work. It is hot to the touch and the fan sounds loud.

**Which causes are worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- The fan or the vents are blocked with dust (right)
- The heat sink is not making good contact on the processor, or the thermal paste has dried out (right)
- The user’s profile is damaged — if chosen: A damaged profile does not shut off the computer or make it hot.
- The monitor cable is loose — if chosen: A loose cable would change the picture, not shut off the computer or heat it.

After the answer: the deciding words are marked. Reason: A hot computer, a loud fan and shutdowns point at heat: dust that blocks cooling, or a heat sink that no longer cools the processor. The profile and monitor cable are not about heat.

#### Question in the draw: l9-r-bulge

A chat, with its history: "Vidal, Stores", Chat with the help desk.

> (Vidal, Stores, at the left) I opened my old desktop to clean the dust. On the motherboard, one of the little round cans has a bulged top, and there is a brown crust on it. It still starts. Should I just keep using it?

**What do you tell Vidal?**
(the options come in an order that depends on the seed of the question)
- Switch it off, unplug it, and leave it off until the board is replaced. (right)
- Keep using it, and watch whether the bulge gets bigger over the next week. — if chosen: Waiting to watch it grow runs the computer with a part that can fail suddenly.
- Press the bulge flat with a screwdriver while the computer runs. — if chosen: A running board is live. Pressing on a failed can does not repair it, and it is unsafe.
- Clean off the crust, then start it to see whether it still works. — if chosen: A start-up test would run a failing part. Cleaning it does not repair it.

After the answer: the deciding words are marked. Reason: A swollen capacitor sits on no single link, because power reaches everything through the board. Here the cheap look comes second: a failing part is a safety risk, so power off, unplug, and replace the board.

#### Question in the draw: l9-r-slow

A chat, with its history: "Wanda, Legal", Chat with the help desk.

> (Wanda, Legal, at the left) My computer has become slow with everything I do, all day. It starts fine and signs me in fine. Nothing crashes. The fan runs loud.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> Wanda signs in on a co-worker’s computer of the same make  |  Fast
> Co-worker signs in on Wanda’s computer  |  Just as slow

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Wanda’s computer, not her profile: memory, the drive or heat (right)
- Wanda’s profile, which holds her saved desktop and settings — if chosen: Wanda is fast on the other computer, so her profile is cleared.
- The start-up self-test, which checks memory and video first — if chosen: The computer starts and signs in, so the self-test passed long ago.
- The power supply, which is not feeding the parts enough — if chosen: A weak power supply stops the computer or shuts it down. It does not slow every program.

After the answer: the deciding words are marked. Reason: Slow with everything, for anyone who signs in on that computer, puts the fault in the computer: memory too small, a drive that is full or failing, or heat from a loud fan. The next cheap looks are how full the drive is and the temperature.

#### Question in the draw: l10-w-shutoff

A chat, with its history: "Odile, Design", Chat with the help desk.

> (Odile, Design, at the left) My desktop switches itself off a few seconds after I start a game. I put in a new graphics card last week.

A plain table, "What the parts need, and what the power supply can give":

> Part  |  Watts  (the column heads)
> Processor, at full work  |  95
> New graphics card, at full work  |  250
> Drives, fans and the rest  |  60
> Label on the power supply: “300 W”  |  300

**The processor read 48 degrees C when the computer switched off; its maker lists 100 degrees C as the top. What do you do next?**
(the options come in an order that depends on the seed of the question)
- Cross off heat, then compare the parts’ total with the supply label. (right)
- Take the heat sink off and put on new thermal paste, then test the game again. — if chosen: At 48 degrees the processor is cool. Heat is ruled out, and this would change a part that is not the cause.
- Reset the firmware settings to their defaults, then start the game again. — if chosen: Settings do not make a computer switch off the moment a hungry card starts work. The power chain is the next link.

After the answer: the deciding words are marked. Reason: A cool processor ruled out heat. The parts add up to 405 watts at full work and the supply gives 300, so the supply shuts down when the new card works hard. One change, a bigger supply, fixed it.
The working:
- Start from what the computer does: power in, parts that draw it, heat out.: It dies when the game starts, which is when the graphics card works hardest. So the parts that need the most power or make the most heat are the first causes.
- Name the first guess and test it with one reading.: Guess: it overheats, because a new card makes more heat. Reading the temperature as it switches off: 48 degrees C, with the fans running. That is cool, so heat is ruled out.
- Add up what the parts can draw at once.: 95 + 250 + 60 = 405 watts at full work. The label on the supply says 300 W, which is all it can give.
- Change one thing: a bigger supply.: A supply labeled 550 W gives well over the 405 watts, which leaves room to spare. The computer now runs the game. The old supply was too small for the new card.

#### Question in the draw: l10-p-volt

A chat, with its history: "Birgit, Marketing", Chat with the help desk.

> (Birgit, Marketing, at the left) I moved to Germany and brought my desktop. The outlet here gives 230 volts. The power supply has a red switch on the back that says 115 or 230.

**Where should the red switch be before you plug it in?**
(the options come in an order that depends on the seed of the question)
- At 230 (right)
- At 115 — if chosen: 115 is the 110 to 120 volt range of North American outlets. Switched that low on a 230 volt outlet, the supply can be ruined.
- Wherever it is; plug in and see whether it starts — if chosen: A supply with a switch has to be told which outlet it is on. Plugging in on the wrong position can break it, so the starting test comes after the switch is right.

After the answer: the deciding words are marked. Reason: The input voltage of the supply has to match the outlet: 110 to 120 volts in North America, 220 to 240 volts in much of the rest of the world. A switch in the wrong position can destroy the supply.

#### Question in the draw: l10-p-rail

A power supply gives three direct current outputs: 3.3 volts, 5 volts and 12 volts. A graphics card draws up to 250 watts through its own power plug.

**Which output voltage does that plug carry?**
(the options come in an order that depends on the seed of the question)
- 12 volts (right)
- 5 volts — if chosen: The 5 volt output runs smaller circuits such as USB ports and the electronics of drives.
- 3.3 volts — if chosen: The 3.3 volt output runs the small circuits on the board.

After the answer: Reason: Of the three outputs, 12 volts does the heavy work. The 5 and 3.3 volt outputs run the small circuits: chips on the board, USB ports and the electronics of drives.

#### Question in the draw: l10-p-conn

A chat, with its history: "Dario, Technician", Note in the ticket.

> (Dario, Technician, at the left) The new graphics card has one 8-pin power socket on its edge. The power supply’s leads are listed below. Which one goes in?

A plain table, "Leads on this power supply":

> Label on the lead  |  Plug  (the column heads)
> 24-pin main  |  20+4 pins
> CPU  |  4+4 pins
> PCIe  |  6+2 pins
> SATA power  |  Flat, for drives
> Molex  |  Four-pin, for old drives

**Which lead?**
(the options come in an order that depends on the seed of the question)
- The one labeled PCIe, clipping the 6 and 2 pins together (right)
- The one labeled CPU, since it also has 8 pins — if chosen: The CPU plug and the PCIe plug look alike but are wired differently. The processor’s plug does not belong in a graphics card.
- The SATA power lead with an adapter — if chosen: SATA power is for drives and cannot carry what a graphics card draws.
- The 24-pin main lead, since it is the biggest — if chosen: The 24-pin plug feeds the motherboard.

After the answer: the deciding words are marked. Reason: The 24-pin plug feeds the board, the 4 or 8-pin CPU plug feeds the processor, and a graphics card takes a PCIe plug of 6 or 8 pins. SATA power and Molex are for drives.

#### Question in the draw: l10-p-pin

A chat, with its history: "Anselm, Technician", Note in the ticket.

> (Anselm, Technician, at the left) The old board has a 20-pin power socket. The new supply’s main connector is marked “20+4” and has four pins on a separate clip.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Unclip the four pins and plug in the 20 only (right)
- Buy a different supply, since the connector is the wrong size — if chosen: The 20+4 connector fits both 20-pin and 24-pin boards.
- Plug the 24 pins in anyway — if chosen: A 20-pin socket has no place for the extra four pins.

After the answer: the deciding words are marked. Reason: The main power connector to the board is 24 pins on newer boards and 20 on older ones. A “20+4” connector splits into 20 and 4 so one supply fits both.

#### Question in the draw: l10-p-eighty

A plain table, "Two power supplies, same wattage":

> Supply  |  Rating  |  Price  (the column heads)
> A  |  80 Plus Gold  |  $85
> B  |  80 Plus Bronze  |  $50

**Which supply wastes less of the wall power as heat?**
(the options come in an order that depends on the seed of the question)
- A, because Gold is more efficient than Bronze (right)
- B, because it costs less to buy — if chosen: The price is not the efficiency. Bronze wastes more than Gold.
- They waste the same, because the wattage is the same — if chosen: Wattage is how much it can give. Efficiency is how much it wastes making it.

After the answer: the deciding words are marked. Reason: The 80 Plus list runs Bronze, Silver, Gold, Platinum, Titanium. Titanium wastes the least as heat and Bronze the most. The wattage tells how much the supply can give, not how much it wastes.

#### Question in the draw: l10-k-watt

A chat, with its history: "Bruno, Engineering", Chat with the help desk.

> (Bruno, Engineering, at the left) I am building a workstation. Which power supply should I buy?

A plain table, "What the parts can draw at full work":

> Part  |  Watts  (the column heads)
> Processor  |  125
> Graphics card  |  300
> Drives, fans and the rest  |  75

This desk’s rule: the label on the supply must be at least 20 percent above the total the parts can draw.

**Which power supply?**
(the options come in an order that depends on the seed of the question)
- One labeled 650 W (right)
- One labeled 550 W — if chosen: It covers the total, but only 10 percent above it, short of the desk’s 20 percent rule.
- One labeled 450 W — if chosen: The parts can draw 500 watts, which is more than 450 W can give.
- Any supply with the right plugs — if chosen: Plugs that fit do not make the supply big enough. The wattage must cover the parts.

After the answer: the deciding words are marked. Reason: Add up what the parts can draw at full work: 125 + 300 + 75 = 500 watts. The desk’s rule is a label at least 20 percent above that, so 600 watts or more. One labeled below the total shuts the computer off under load, and one just above it has too little room.

#### Question in the draw: l10-k-eff

The question, read aloud as above: **A power supply’s box shows a badge with a metal level, such as Gold. What is the name of the efficiency program behind the badge? It starts with a number.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 80 Plus
  - 80+
  - 80plus
  - 80 Plus certified
  - 80 Plus rating

After the answer: Reason: The 80 Plus program rates a supply’s efficiency, the share of wall power that reaches the computer rather than turning into heat. Gold, Platinum and Titanium waste less than Bronze.

#### Question in the draw: l10-r-redundant

A chat, with its history: "Jude, Server Team", Chat with the help desk.

> (Jude, Server Team, at the left) The file server must keep running even if one of its power supplies burns out. The server holds two, and either can run it alone.

**What do you call that kind of power supply setup?**
(the options come in an order that depends on the seed of the question)
- Redundant (right)
- Modular — if chosen: Modular means the cables can be unplugged from the supply, not that there is a spare.
- Efficient — if chosen: Efficiency is the share of power wasted as heat. It does not give a spare.

After the answer: the deciding words are marked. Reason: A redundant power supply setup has two supplies so one can fail without stopping the server. Modular means detachable cables, and efficiency is how little power is wasted.

#### Question in the draw: l10-r-wattwrong

A user says: “The new graphics card needs a lot of power, so I will buy a 1000 W supply and it will push more power through the computer.”

**What is wrong with that idea?**
(the options come in an order that depends on the seed of the question)
- Wattage is the most it can give; parts take what they need (right)
- A larger supply fits fewer boards and towers — if chosen: Size in watts does not change which boards the supply plugs into.
- Nothing; more watts always means more power reaches the parts — if chosen: The parts draw what they need. The rating is the most the supply can give.

After the answer: Reason: The wattage label is the most the supply can give. The parts take only what they need, so a bigger supply is simply a bigger reserve, and one below the total need shuts the computer off.

#### Question in the draw: l10-r-auto

A chat, with its history: "Mabel, Facilities", Chat with the help desk.

> (Mabel, Facilities, at the left) Moving a desktop to a branch in Germany. I cannot find a voltage switch on the power supply. What do I set?

A plain table, "Label on the power supply":

> Field  |  Value  (the column heads)
> Input  |  100-240 V, 50/60 Hz
> Switch on the back  |  None

**What do you tell Mabel?**
(the options come in an order that depends on the seed of the question)
- Nothing to change; the label says it adjusts to the outlet itself (right)
- Open the computer and look for a switch inside — if chosen: This supply has none. Opening a supply is dangerous, and the label already answers the question.
- Buy a voltage converter to put between outlet and supply — if chosen: The supply already accepts the range up to 240 volts. A converter is not needed.

After the answer: the deciding words are marked. Reason: Many newer supplies adjust to the outlet themselves, and their label says 100-240 V. Read the label first: a switch needs setting, and a self-adjusting supply needs nothing.

#### Question in the draw: l10-r-modular

A small tower has little room. The technician wants a power supply whose cables can be unplugged, so only the cables the parts need are fitted.

**What do you call that kind of supply?**
(the options come in an order that depends on the seed of the question)
- Modular (right)
- Redundant — if chosen: Redundant means two supplies, so one can fail without stopping the server.
- Efficient — if chosen: Efficiency is how little power is wasted as heat. It says nothing about the cables.

After the answer: Reason: A modular supply has detachable cables. A redundant setup has a second supply as a spare, and efficiency is how little power is wasted.

#### Question in the draw: l10-b-fit

A chat, with its history: "Piers, Facilities", Chat with the help desk.

> (Piers, Facilities, at the left) I am building a small desktop for the lobby. The tower is a tiny one that only takes the smallest of the three common board sizes.

**Which board do you buy?**
(the options come in an order that depends on the seed of the question)
- A Mini-ITX board (right)
- A microATX board — if chosen: It is larger than Mini-ITX and will not fit a tower made only for the smallest size.
- An ATX board — if chosen: ATX is the largest of the three. It will not fit a tower made only for the smallest size.

After the answer: the deciding words are marked. Reason: The motherboard sizes in order, largest first: ATX, then microATX, then Mini-ITX. A smaller board fits a larger tower, but a larger board never fits a smaller one.

#### Question in the draw: l10-b-slot

A chat, with its history: "Vance, Design", Chat with the help desk.

> (Vance, Design, at the left) I bought a graphics card for my desktop. Where on the motherboard does it go?

**Which place on the board?**
(the options come in an order that depends on the seed of the question)
- The longest PCIe slot (right)
- The M.2 slot on the board — if chosen: M.2 is a small slot for solid-state drives and some wireless cards, not graphics cards.
- A SATA port beside it — if chosen: SATA ports are for cables to drives, not cards.

After the answer: the deciding words are marked. Reason: Cards go in PCIe slots, and a graphics card uses the longest. M.2 is a small slot for solid-state drives and wireless cards, and SATA is the cable connection for drives.

#### Question in the draw: l10-b-con

The question, read aloud as above: **What is the name of the kind of slot on a motherboard that takes a graphics card?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - PCIe
  - PCI Express
  - PCIe slot
  - PCI-E
  - PCI-E x16
  - PCIe x16
  - PCI Express x16
  - PCI Express 16x
  - x16
  - PCIe 16x

After the answer: Reason: PCIe (PCI Express) is the slot for add-on cards. The longest slot is the one graphics cards use. PCI alone is the older slot, which PCIe replaced.

#### Question in the draw: l10-b-m2

A chat, with its history: "Cora, Technician", Note in the ticket.

> (Cora, Technician, at the left) The new solid-state drive is labeled “M.2 NVMe”. It is a thin stick, about the size of a stick of gum. The board has the connectors in the table.

A plain table, "Connectors on this board":

> Connector  |  Count  (the column heads)
> SATA ports (for cables)  |  4
> Slot labeled M.2  |  1
> PCIe slots  |  2
> Header for the front panel  |  1

**Where does the drive go?**
(the options come in an order that depends on the seed of the question)
- In the slot labeled M.2 (right)
- In a SATA port, with a cable — if chosen: A drive is not always a SATA drive. This stick is the M.2 shape, which has its own slot.
- In a PCIe slot, like other cards — if chosen: Cards go in PCIe slots. This drive’s shape is M.2.
- On the front-panel header — if chosen: A header is a row of pins for front-panel wires, USB ports and fans.

After the answer: the deciding words are marked. Reason: A drive labeled M.2 is a small stick that plugs straight into a slot labeled M.2. SATA drives use a cable, and headers are pin rows for the tower’s own wires and ports.

#### Question in the draw: l10-b-pci

A chat, with its history: "Fenn, Records", Chat with the help desk.

> (Fenn, Records, at the left) I have an old network card whose box says “PCI”. My new computer’s board only has PCIe slots and one M.2 slot. Can I use the card?

**What do you tell Fenn?**
(the options come in an order that depends on the seed of the question)
- No; PCI is an older kind of slot, so you need a PCIe card (right)
- Yes, in any PCIe slot, since PCIe is just the new name — if chosen: The names are alike, but the slots are different shapes and speeds. An old PCI card does not go in a PCIe slot.
- Yes, in the M.2 slot, because it is the smallest — if chosen: M.2 is a slot for small sticks such as drives. It does not take an old card.

After the answer: the deciding words are marked. Reason: PCI is the older card slot and PCIe is the newer one. Cards for one do not fit the other, so the new board needs a PCIe network card.

#### Question in the draw: l10-b-card

A chat, with its history: "Sade, Studio", Chat with the help desk.

> (Sade, Studio, at the left) I want to record video from my game console on this desktop, with the console plugged into the computer.

**Which add-on card does that?**
(the options come in an order that depends on the seed of the question)
- A capture card (right)
- A video (graphics) card — if chosen: A graphics card draws the picture on a screen. It does not record video coming in.
- A sound card — if chosen: A sound card handles audio only.
- A network card — if chosen: A network card connects the computer to a network.

After the answer: the deciding words are marked. Reason: Cards add abilities: sound, graphics, a network connection, and capture, which records video coming in from a camera or console. All go in PCIe slots.

#### Question in the draw: l10-k-m2

A chat, with its history: "Drew, Technician", Note in the ticket.

> (Drew, Technician, at the left) Fitting a new solid-state drive, a thin stick labeled “M.2”. The board’s manual lists the connectors below.

A plain table, "Connectors in the manual":

> Connector  |  Used for  (the column heads)
> SATA port  |  Drives, with a cable
> M.2 slot  |  Small sticks plugged straight in
> PCIe slot  |  Cards
> Header  |  Front-panel wires, USB, fans

**What is M.2?**
(the options come in an order that depends on the seed of the question)
- A slot shape: the stick plugs straight into the board (right)
- A cable connection, like SATA — if chosen: SATA is the cable connection to a drive. M.2 is a slot the stick goes into.
- A row of pins for the tower’s own wires — if chosen: That is a header, for the front panel, USB ports and fans.
- The slot for a graphics card — if chosen: Graphics cards go in the longest PCIe slot.

After the answer: the deciding words are marked. Reason: M.2 is a slot shape where a small stick, such as a solid-state drive or a wireless card, plugs straight on the board. SATA drives use a cable, and headers are pin rows for the tower’s own wires and ports.

#### Question in the draw: l10-r-header

The front panel of a computer tower has a power button, two lights, a headphone jack and a USB port. Thin wires from each run to the motherboard.

**What are the rows of pins on the board that those wires push onto?**
(the options come in an order that depends on the seed of the question)
- Headers (right)
- PCIe slots — if chosen: PCIe slots take cards, not thin front-panel wires.
- M.2 slots — if chosen: M.2 slots take small drives and wireless cards.

After the answer: Reason: Headers are the pin rows on the motherboard for the front panel’s button, lights, USB ports and audio, and for fans.

#### Question in the draw: l10-r-pcie1

A chat, with its history: "Kyra, Front Desk", Chat with the help desk.

> (Kyra, Front Desk, at the left) We are adding a second network card to the desktop and a sound card. Which kind of slot do these small cards go in?

**Which slot?**
(the options come in an order that depends on the seed of the question)
- A short PCIe slot (right)
- A SATA port on the board — if chosen: SATA is the cable connection for drives.
- The socket for the processor — if chosen: The processor’s socket holds the processor only.

After the answer: the deciding words are marked. Reason: Add-on cards such as sound, network, video and capture cards go in PCIe slots. Small cards use the short slot, and graphics cards use the longest.

#### Question in the draw: l10-r-sata

A technician connects an older 2.5-inch drive with a thin flat cable. One end plugs into the drive and the other into the motherboard.

**What is that connection called?**
(the options come in an order that depends on the seed of the question)
- SATA (right)
- PCIe — if chosen: PCIe is the slot for cards.
- M.2 — if chosen: M.2 drives plug in with no cable.

After the answer: Reason: SATA connects drives to the board with a cable. eSATA is the same connection routed outside the tower. M.2 and PCIe do not use that kind of cable.

#### Question in the draw: l10-c-socket

A chat, with its history: "Rhoda, Support", Chat with the help desk.

> (Rhoda, Support, at the left) I am replacing the processor in a desktop. The board’s label is below. Which of the shop’s three processors will fit?

A plain table, "The board’s label":

> Detail  |  Value  (the column heads)
> Processor socket  |  AM5

**Which processor fits?**
(the options come in an order that depends on the seed of the question)
- A Ryzen processor made for AM5 (right)
- A Ryzen processor made for AM4 — if chosen: Same maker, but AMD has more than one socket. AM4 is an older socket and does not fit AM5.
- A Core processor made for LGA 1700 — if chosen: Intel and AMD processors do not fit each other’s sockets.

After the answer: the deciding words are marked. Reason: The socket on the motherboard decides which processors fit. Intel and AMD use different sockets, and each maker has several, so the name on the board must match the one the processor was made for.

#### Question in the draw: l10-c-arch

A chat, with its history: "Wilma, Billing", Chat with the help desk.

> (Wilma, Billing, at the left) My computer has 8 GB of memory but Windows only shows 3.5 GB usable. All my files are on this computer.

A plain table, "About this computer":

> Detail  |  Value  (the column heads)
> Installed memory  |  8 GB
> System type  |  32-bit operating system
> Processor  |  Can run 64-bit

**What fixes it?**
(the options come in an order that depends on the seed of the question)
- Copy his files off first, then put on 64-bit Windows (right)
- Put on 64-bit Windows over the old system now — if chosen: This is the right fix, but a new system can wipe the drive. His files are protected first.
- Buy more memory sticks and fit them in the computer — if chosen: The memory is already there. The 32-bit system cannot use more than about 4 GB.
- Turn on dual channel in the firmware to free the memory — if chosen: Dual channel makes memory faster. It does not lift a 32-bit system’s limit.

After the answer: the deciding words are marked. Reason: A 32-bit (x86) system can address about 4 GB of memory. A 64-bit (x64) system can address far more. The processor can run 64-bit, so the system, not the hardware, is the limit. Files are protected before a new system goes on.

#### Question in the draw: l10-c-virt

The question, read aloud as above: **What setting in the firmware must be on before a computer can run virtual machines?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Virtualization
  - Virtualization support
  - CPU virtualization
  - Hardware virtualization
  - Virtualization technology
  - Enable virtualization
  - Enabled virtualization
  - VT
  - VT-x
  - Intel VT
  - Intel VT-x
  - AMD-V
  - SVM

After the answer: Reason: Virtualization (VT-x on Intel, AMD-V on AMD) is often off at first. Turn it on in the firmware to run virtual machines.

#### Question in the draw: l10-c-lowpower

A chat, with its history: "Rune, Procurement", Chat with the help desk.

> (Rune, Procurement, at the left) We want a laptop that lasts about twenty hours on one charge and stays cool. Which processor design is built for using as little power as possible?

**Which design?**
(the options come in an order that depends on the seed of the question)
- ARM (right)
- x64, the 64-bit PC design — if chosen: x64 is common in desktops and laptops, but it is not the design made for the lowest power.
- x86, the 32-bit PC design — if chosen: x86 is the older PC design. It is not the one built to save power.

After the answer: the deciding words are marked. Reason: ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.

#### Question in the draw: l10-k-arm

A chat, with its history: "Elsa, Procurement", Chat with the help desk.

> (Elsa, Procurement, at the left) We are buying a device that must run all day on a small battery. Which processor design is built for that?

**Which design?**
(the options come in an order that depends on the seed of the question)
- ARM (right)
- x86 (32-bit) — if chosen: x86 is the older design used in PCs. The 32-bit form is the older of its two forms.
- x64 (64-bit) — if chosen: x64 is the 64-bit form of the PC design. It is common in desktops and laptops, not made for tiny batteries.

After the answer: the deciding words are marked. Reason: ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.

#### Question in the draw: l10-r-multi

A chat, with its history: "Vin, Server Team", Chat with the help desk.

> (Vin, Server Team, at the left) This server board has two processor sockets. Can it take two processors?

**What is that kind of board called?**
(the options come in an order that depends on the seed of the question)
- Multisocket (right)
- Dual channel — if chosen: Dual channel describes memory, not processors.
- Redundant — if chosen: Redundant describes power supplies that back each other up.

After the answer: the deciding words are marked. Reason: A board with two or more processor sockets is multisocket. Both processors must be ones that socket takes.

#### Question in the draw: l10-r-x64

A chat, with its history: "Lars, Sales", Chat with the help desk.

> (Lars, Sales, at the left) I bought a program that only comes as a 64-bit program. My computer runs a 32-bit Windows. Will it run?

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- No; a 32-bit system cannot run it (right)
- Yes; 64-bit programs run on any Windows system — if chosen: Only a 64-bit system can run a 64-bit program.
- Yes, if she adds more memory to the computer — if chosen: Memory does not change what kind of programs the system can run.

After the answer: the deciding words are marked. Reason: The 32-bit (x86) system runs only 32-bit programs. A 64-bit (x64) system runs both, so the fix is a 64-bit system, if the processor can run one.

#### Question in the draw: l10-r-igpu

A chat, with its history: "Colm, Front Desk", Chat with the help desk.

> (Colm, Front Desk, at the left) The new office computer has no graphics card, but the monitor shows a picture from a port on the board. Is that normal?

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- Yes; the processor has graphics built in (right)
- No; a computer cannot show a picture without a graphics card — if chosen: Integrated graphics are built into many processors, so a card is not needed for ordinary work.
- Yes; the power supply draws the picture — if chosen: The supply only gives power. The picture is drawn by the processor’s graphics or by a card.

After the answer: Reason: Integrated graphics are a small graphics part built into the processor. A graphics card adds more power for games and design work.

#### Question in the draw: l10-r-multicore

A box says “quad-core processor.” The user wonders what the four are.

**What does quad-core mean?**
(the options come in an order that depends on the seed of the question)
- Four processing units in one chip, working on separate jobs at once (right)
- Four chips, one in each of four sockets — if chosen: That is a multisocket board. Quad-core is four cores inside one chip.
- Four memory channels to the processor — if chosen: Channels are the memory paths. Cores are inside the processor.

After the answer: Reason: A core is a processing unit. Dual-core is two in a chip, quad-core is four. Several sockets on a server board is a different thing, called multisocket.

#### Question in the draw: l10-r-am5

The question, read aloud as above: **A board is labeled LGA 1700. Name the maker whose processors fit it.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Intel
  - Intel processors
  - An Intel processor

After the answer: Reason: LGA plus a number is how Intel names its sockets. AMD’s are named AM4, AM5 and so on. A processor fits only the socket it was made for.

#### Question in the draw: l10-f-boot

A chat, with its history: "Silas, Technician", Note in the ticket.

> (Silas, Technician, at the left) Plugged in a USB stick to put Windows on a new computer. It keeps starting from the old drive instead and shows the old system.

**Which setting in the firmware do you change?**
(the options come in an order that depends on the seed of the question)
- The boot order, with the USB stick first (right)
- The TPM, so it holds the Windows code — if chosen: The TPM is a chip that stores secret codes for encryption. It does not choose which device starts.
- The firmware password, so only you can change it — if chosen: A password controls who may change settings. It does not choose what starts.

After the answer: the deciding words are marked. Reason: The firmware keeps a boot order, a list of devices it tries one after the other. To start from a USB stick, move it to the top of that list.

#### Question in the draw: l10-f-secure

A chat, with its history: "Per, Technician", Note in the ticket.

> (Per, Technician, at the left) Tried to start an old repair tool from a USB stick. The computer shows “Secure Boot violation” and starts from the drive instead.

**Which firmware feature refused the tool?**
(the options come in an order that depends on the seed of the question)
- Secure Boot, which checks signatures (right)
- The TPM, the chip for encryption codes — if chosen: The TPM stores secret codes for encryption. It does not decide which software starts.
- The boot password, asked before starting — if chosen: A boot password is asked for before anything starts. This message names Secure Boot.

After the answer: the deciding words are marked. Reason: Secure Boot lets only software signed by a trusted maker start, which keeps malware out of the start-up. An old unsigned tool is refused until Secure Boot is turned off or a signed tool is used.

#### Question in the draw: l10-f-usb

A chat, with its history: "Anton, Security", Chat with the help desk.

> (Anton, Security, at the left) Staff keep plugging personal flash drives into the lobby computers. I want those ports not to work at all, without taking the computers apart.

**Where do you turn the ports off?**
(the options come in an order that depends on the seed of the question)
- In the firmware’s USB permissions (right)
- By turning off Secure Boot in the firmware — if chosen: Secure Boot controls which software may start, not whether ports work.
- In the boot order of the firmware — if chosen: The boot order picks which device starts the system, not whether a port works.

After the answer: the deciding words are marked. Reason: The firmware has settings for USB permissions. Turn the ports off there, and guard the settings with a firmware password.

#### Question in the draw: l10-f-tpm

A chat, with its history: "Bela, Technician", Note in the ticket.

> (Bela, Technician, at the left) The Windows 11 check says: “This PC can’t run Windows 11. TPM 2.0 required.” What is the TPM?

**What is a TPM?**
(the options come in an order that depends on the seed of the question)
- A chip, or a processor feature, that stores this computer’s encryption codes (right)
- A password asked for before the system starts up — if chosen: That is a boot password. A TPM stores codes; it is not a password.
- A separate hardware module that holds encryption codes for many systems — if chosen: That describes an HSM. A TPM guards the codes of this one computer.

After the answer: the deciding words are marked. Reason: A TPM (trusted platform module) stores a computer’s encryption codes safely, usually on a chip on the motherboard. An HSM is a separate device that does the same job for many systems, used with servers. The firmware can turn the TPM on.

#### Question in the draw: l10-f-fwpw

A chat, with its history: "Joss, Training Room", Chat with the help desk.

> (Joss, Training Room, at the left) Someone changed the boot order on a classroom computer to start a game from a stick. Students must still be able to start the computers and sign in. How do we stop settings being changed?

**Which password?**
(the options come in an order that depends on the seed of the question)
- A firmware (BIOS or UEFI) password (right)
- A boot password at every start — if chosen: A boot password is asked for before the system starts, so students could not even start the computers.
- A TPM, the chip for encryption — if chosen: A TPM is a chip for encryption codes, not a password for the settings.

After the answer: the deciding words are marked. Reason: A firmware password guards the settings. A boot password guards the start-up itself. The classroom needs the first and not the second.

#### Question in the draw: l10-k-bootpw

A chat, with its history: "Rik, Security", Chat with the help desk.

> (Rik, Security, at the left) A sales rep travels with a laptop. If it is stolen, the thief must not be able to start it to reach the drive.

**Which password?**
(the options come in an order that depends on the seed of the question)
- A boot password, asked before the system starts (right)
- A firmware password, asked to open the settings — if chosen: That guards the settings. A thief could still start the laptop.
- USB permissions, to block the ports — if chosen: They control the ports, not whether the laptop starts.

After the answer: the deciding words are marked. Reason: A boot password stops the system starting without it. A firmware password guards only the settings, and USB permissions control the ports.

#### Question in the draw: l10-r-hsm

A company wants the encryption codes for many servers kept in one tamper-resistant device, not on each machine’s chip.

**What is that device?**
(the options come in an order that depends on the seed of the question)
- A hardware security module (HSM) (right)
- A TPM on each board — if chosen: A TPM guards the codes of its own computer only.
- A firmware password on each — if chosen: A password guards settings. It does not store encryption codes.

After the answer: Reason: A TPM guards the codes for one machine. An HSM is a separate hardware module that holds codes for many systems, used with servers.

#### Question in the draw: l10-r-usbskip

A chat, with its history: "Nico, Technician", Note in the ticket.

> (Nico, Technician, at the left) A computer says “No bootable device.” There is a blank USB stick in a port, with nothing on it to start. The stick is first in the boot order.

**What does that stick tell you?**
(the options come in an order that depends on the seed of the question)
- Nothing yet; most firmware skips a stick with nothing to start and moves on (right)
- The stick is the cause; it blocks the firmware from finding the drive — if chosen: Most firmware skips a stick with nothing to start and tries the next device.
- The boot password is blocking the start — if chosen: A boot password is asked for with a prompt. This message says the firmware found no drive it can start.

After the answer: the deciding words are marked. Reason: A stick with nothing to start is skipped by most firmware. “No bootable device” means the firmware found no drive it can start from, so look at the boot drive and the boot order next.

#### Question in the draw: l10-r-temp

A technician wants to see the processor temperature and fan speeds before opening a computer that runs loud, and to slow a fan that is too noisy.

**Where does the technician look?**
(the options come in an order that depends on the seed of the question)
- The firmware’s fan and temperature page (right)
- The firmware’s boot order — if chosen: The boot order picks the device to start from.
- The firmware’s Secure Boot page — if chosen: Secure Boot controls which software may start.

After the answer: Reason: The firmware shows temperatures and fan speeds, and lets you change the fan speed, before you open the computer.

#### Question in the draw: l10-m-sodimm

A chat, with its history: "Thea, Sales", Chat with the help desk.

> (Thea, Sales, at the left) I want to add more memory to my laptop. What kind of memory module goes in a laptop?

**Which module?**
(the options come in an order that depends on the seed of the question)
- SODIMM (right)
- DIMM — if chosen: A DIMM is the full-length module for desktops and servers. It is too long for a laptop.
- An ECC server module — if chosen: ECC checks for errors and is used in servers. It is not the form that fits a laptop.

After the answer: the deciding words are marked. Reason: Desktops take DIMMs. Laptops and small computers take SODIMMs, which are about half the length.

#### Question in the draw: l10-m-ecc

A chat, with its history: "Xavi, Server Team", Chat with the help desk.

> (Xavi, Server Team, at the left) The new database server should catch and fix a single flipped bit in memory on its own. What memory type do I order?

**Which memory?**
(the options come in an order that depends on the seed of the question)
- ECC memory (right)
- SODIMM memory — if chosen: SODIMM describes the size and shape, for laptops. It says nothing about correcting errors.
- Dual-channel memory — if chosen: Channels make memory faster. They do not correct errors.

After the answer: the deciding words are marked. Reason: ECC memory carries extra bits that let it detect and fix a flipped bit. It costs more and needs a board and processor made to work with it, so servers use it and most home computers (non-ECC) do not.

#### Question in the draw: l10-m-ddr

A chat, with its history: "Wren, Receiving", Chat with the help desk.

> (Wren, Receiving, at the left) The board takes DDR4. I was sent a DDR5 stick instead. The notch in the stick is in a different place from the notch in the slot.

**What is the right way to read that?**
(the options come in an order that depends on the seed of the question)
- It is the wrong generation and will not fit; send it back (right)
- It will fit if pushed harder, and just run slower on this board — if chosen: The notch stops the stick going in. Forcing it can break the slot.
- It will work, as long as it is put in dual channel — if chosen: Channels do not matter when the stick cannot go into the slot.

After the answer: the deciding words are marked. Reason: DDR4 and DDR5 are different generations. Each has its notch in a different place, so the generations cannot be swapped.

#### Question in the draw: l10-m-chan

A chat, with its history: "Edda, Technician", Note in the ticket.

> (Edda, Technician, at the left) The board has four memory slots: two black and two gray. I have two matching sticks and want the memory to run on two paths to the processor.

**Where do the two sticks go?**
(the options come in an order that depends on the seed of the question)
- In the two slots of the same color, as the board’s manual shows (right)
- In the two slots right beside each other — if chosen: Slots side by side are often not a pair. Use the pair the manual shows, usually the same color.
- In any two slots; the board works out the paths — if chosen: Only the paired slots make dual channel. In others the sticks may run as single channel.

After the answer: the deciding words are marked. Reason: Single channel is one path. Dual channel is two matching sticks in the paired slots, usually the same color. Some boards take three (triple channel) or four (quad channel).

#### Question in the draw: l10-k-dual

A chat, with its history: "Femi, Technician", Note in the ticket.

> (Femi, Technician, at the left) Added a second matching stick, in the slot of the same color as the first. The firmware now reports “dual channel.”

**What did that change?**
(the options come in an order that depends on the seed of the question)
- Memory has two paths to the processor and moves data faster (right)
- Memory now finds and fixes errors by itself — if chosen: That is ECC. Channels are about speed.
- The sticks now keep their contents with the power off — if chosen: Memory loses what it holds when the power goes off, in any channel setup.
- The sticks are now short enough for a laptop — if chosen: The size of a stick is its form, DIMM or SODIMM. Channels have nothing to do with it.

After the answer: the deciding words are marked. Reason: Dual channel uses two matched sticks in the paired slots, each on its own path to the processor, so memory is faster. Single, dual, triple and quad are the numbers of paths.

#### Question in the draw: l10-k-so

The question, read aloud as above: **What is the name of the memory stick form used in laptops, as opposed to the DIMM used in desktops?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SODIMM
  - SO-DIMM
  - Small outline DIMM

After the answer: Reason: A SODIMM (small outline DIMM) is the half-length module for laptops and small computers. Desktops use the full-length DIMM.

#### Question in the draw: l10-r-eccwhat

A workstation order lists “ECC memory.” A user wonders what ECC memory does that ordinary memory does not.

**What do you tell the user?**
(the options come in an order that depends on the seed of the question)
- It finds and fixes small errors in memory (right)
- It makes memory run faster by using two paths at once — if chosen: That is dual channel.
- It makes the stick short enough to fit a laptop — if chosen: That is the SODIMM form.

After the answer: Reason: ECC is error correction. It finds and fixes small errors, costs more, and needs a board and processor made to work with it.

#### Question in the draw: l10-r-ddrnew

A chat, with its history: "Opal, Stockroom", Chat with the help desk.

> (Opal, Stockroom, at the left) The desktop board is labeled DDR5. The stockroom has these sticks. Which one goes in the board?

**Which stick?**
(the options come in an order that depends on the seed of the question)
- A DDR5 DIMM (right)
- A DDR4 DIMM — if chosen: Same length, but the notch is in a different place, so it will not go in a DDR5 slot.
- A DDR5 SODIMM — if chosen: The generation is right, but a SODIMM is the short laptop stick and does not fit a desktop slot.
- A DDR3 DIMM — if chosen: DDR3 is an older generation with its notch elsewhere.

After the answer: the deciding words are marked. Reason: The DDR generation must match the board because each has its notch in a different place, and a desktop takes a DIMM, a laptop a SODIMM.

#### Question in the draw: l10-r-dualn

A chat, with its history: "Teo, Technician", Note in the ticket.

> (Teo, Technician, at the left) The board has four memory slots, colored black, gray, black, gray in a row. I have two matching sticks and want dual channel.

**Which two slots?**
(the options come in an order that depends on the seed of the question)
- The two black ones (right)
- The first two, side by side — if chosen: Side by side is a black and a gray slot here, not a pair.
- The gray one and the black one next to it — if chosen: Different colors are not a pair on this board.

After the answer: the deciding words are marked. Reason: Boards pair their memory slots, usually by color. Matching sticks in a pair give dual channel.

#### Question in the draw: l10-k-paste

A chat, with its history: "Ulla, Technician", Note in the ticket.

> (Ulla, Technician, at the left) Fitted the new heat sink on the processor. A thin layer of thermal paste goes between the two first. What is that paste for?

**What does the thermal paste do?**
(the options come in an order that depends on the seed of the question)
- It fills tiny gaps so heat reaches the heat sink (right)
- It glues the heat sink onto the chip firmly — if chosen: The heat sink is held by clips or screws. The paste is not glue.
- It stops electricity passing between the two — if chosen: Paste is for moving heat, not for blocking power.

After the answer: the deciding words are marked. Reason: The processor makes heat, and the heat sink carries it away. Thermal paste is a thin layer that fills the tiny gaps between them so the heat can pass.

#### Question in the draw: l10-k-fans

A chat, with its history: "Zane, Front Desk", Chat with the help desk.

> (Zane, Front Desk, at the left) My computer gets slow and then turns itself off. I cleaned the dust out of it last month.

A plain table, "Read in the firmware":

> Reading  |  Value  (the column heads)
> Processor temperature  |  97 degrees C
> Top temperature the maker lists  |  100 degrees C
> Fan on the processor  |  0 rpm: not turning

**What is the cause, and what do you do?**
(the options come in an order that depends on the seed of the question)
- The processor fan has stopped; replace the fan (right)
- Dust again; clean the fan and heat sink once more — if chosen: It was cleaned last month, and cleaning does not start a fan that has stopped. The reading shows the fan is not turning.
- Not enough thermal paste; put on fresh paste — if chosen: Paste helps heat pass into the heat sink, but with no fan turning the heat has nowhere to go.
- The power supply is too small; buy a bigger one — if chosen: A heat reading of 97 degrees points to cooling. A supply that is too small switches off at once under load, with no slow climb.

After the answer: the deciding words are marked. Reason: A processor near 100 degrees with its fan at 0 rpm is a cooling fault: the computer slows itself down, then switches off to protect the chip. Cleaning cannot fix a dead fan, so the fan is replaced.

#### Question in the draw: l10-k-sink

The question, read aloud as above: **What do you call the finned metal block that sits on a processor and pulls heat away from it?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Heat sink
  - Heatsink
  - Cooler
  - CPU cooler
  - Processor cooler

After the answer: Reason: A heat sink is a block of metal with fins. Heat from the chip passes into it, and a fan blows the heat off the fins.

#### Question in the draw: l10-k-hot

A chat, with its history: "Greta, Technician", Note in the ticket.

> (Greta, Technician, at the left) Fitted a new processor and heat sink this morning, clipped down firmly. The computer shuts off after about thirty seconds.

A plain table, "Read in the firmware":

> Reading  |  Value  (the column heads)
> Processor temperature just before the shutoff  |  100 degrees C
> Fan on the heat sink  |  Running at top speed
> Heat sink  |  Clipped down, does not wobble
> Top temperature the maker lists  |  105 degrees C
> Between chip and heat sink  |  Bare metal on bare metal

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- No thermal paste between chip and heat sink (right)
- The fan is failing — if chosen: The fan is running at top speed. The reading rules out a stopped fan.
- Dust is blocking the fan — if chosen: The computer was fitted this morning, so there has been no time for dust.
- The heat sink is loose on the chip — if chosen: The table says it is clipped down and does not wobble.

After the answer: the deciding words are marked. Reason: A chip at 100 degrees with the fan running and the heat sink firm is not passing its heat into the sink. Thermal paste fills the gaps between them, and it was left out.

#### Question in the draw: l10-r-pads

The memory chips and an M.2 drive on a graphics card and a board run warm. Between each of them and a metal cover sits a soft, thin sheet.

**What is the soft sheet?**
(the options come in an order that depends on the seed of the question)
- A thermal pad (right)
- A heat sink with fins — if chosen: A heat sink is the finned metal block. The sheet only carries heat to it or to a cover.
- An insulator that keeps heat in the chip — if chosen: The sheet carries heat away. It is not there to keep heat in.

After the answer: Reason: Thermal pads are soft sheets that carry heat from a chip into a cover or heat sink where a gap is too big for paste.

#### Question in the draw: l10-r-liquid

A gaming computer’s processor is cooled by a plastic tube loop, a small pump and a radiator with fans mounted on the tower.

**How does this cooling carry the heat away?**
(the options come in an order that depends on the seed of the question)
- A pump moves liquid to a radiator, and fans cool it (right)
- Fans blow air across the chip, with no liquid at all — if chosen: That is air cooling with a heat sink. This loop has a pump and a radiator.
- The chip sits in a bath of liquid that stays still — if chosen: The loop circulates liquid with a pump. It does not sit still.

After the answer: Reason: In liquid cooling a pump moves coolant through a block on the processor to a radiator, and fans cool the radiator.

#### Question in the draw: l10-r-dust

A chat, with its history: "Wynn, Warehouse", Chat with the help desk.

> (Wynn, Warehouse, at the left) The computer got louder and slower over a year. Today it shut off by itself. I looked inside: the grille on the fan is covered in gray fuzz.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Clean the dust off the fan and heat sink (right)
- Replace the power supply with a bigger one — if chosen: The signs are those of heat, not of a supply that is too small.
- Reset the firmware settings to the defaults — if chosen: Settings do not clog a fan with dust.

After the answer: the deciding words are marked. Reason: Louder, slower, then switching off by itself are signs of heat, and dust over the fan is the cause. Clean it first, then check the temperature.

#### Question in the draw: l13-w-stuck

A chat, with its history: "Galen, Accounts", Chat with the help desk.

> (Galen, Accounts, at the left) I sent the invoice to the printer by the kitchen four times and nothing comes out. The printer’s screen says Ready.

The links you can list: the program Galen printed from, the print queue on her computer, the driver, her computer’s connection to the printer, the printer itself, and its paper and toner.

**Galen prints a test page from the printer’s own screen. It comes out sharp. What does that rule out?**
(the options come in an order that depends on the seed of the question)
- The printer, its paper and its toner. (right)
- Galen’s print queue and driver. — if chosen: The test page never touched them, so it says nothing about them either way.
- Nothing: a test page says little about a real job. — if chosen: It shows the printer can print, which is a whole end of the chain.

After the answer: the deciding words are marked. Reason: The printer’s own test page ruled out the printer, its paper and its toner, so the favorite (toner) was wrong. Ruben’s page ruled out the printer’s network link. The queue was the link left, and it showed the stuck job. Two cheap tests cut the chain; the fix came last.
The working:
- Write down the links of the print path before testing any.: The program, the queue, the driver, the connection from her computer, the printer, its paper and toner.
- Name your favorite, and keep it as the first test, not the answer.: Out of toner: the last person to use it said the pages were faint.
- Run the cheapest test of the favorite: a test page from the printer’s own screen.: It comes out sharp. The printer, its paper and its toner are ruled out, and the favorite goes with them. Half the chain is gone.
- Cut what is left in half with another person.: Ruben prints the same invoice to the same printer from his computer, and it comes out. The printer and its network link are fine. Left: Galen’s program, her queue, her driver, and her own link to the printer (port, cable, address).
- Look at the queue, the list of jobs waiting on Galen’s computer.: Her computer shows the printer as Ready, not Offline, so her link is up. Four copies of the invoice wait. The first is marked Error, and a stuck job at the front holds back all the ones behind it.
- Now change one thing, and check it.: Cancel the four jobs, restart the print spooler (the Windows service that holds the queue), print once. It comes out. Then check with Galen that it works for her.

#### Question in the draw: l13-p-lines

A chat, with its history: "Hester, Design", Chat with the help desk.

> (Hester, Design, at the left) A dark line runs down every page, in the same place. I printed a test page from the printer’s own screen and the line is on that too.

It is a laser printer.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Charging: a dirty charging wire or roller, or a scratched drum. (right)
- Fusing: the fuser is not hot enough. — if chosen: A cool fuser leaves toner that rubs off. It does not draw a line in the same place on every page.
- The driver that the computer uses for this printer. — if chosen: The printer’s own test page skips the driver, and the line is on it.
- The print queue on the computer that sent the job to the printer. — if chosen: The printer’s own test page skips the queue, and the line is on it.

After the answer: the deciding words are marked. Reason: The line is on the test page made inside the printer, so everything before the printer is cleared. A mark that repeats in the same place on every page is made by a part that touches every page: on a laser printer the charging wire or roller, or the drum; on an inkjet the printhead.

#### Question in the draw: l13-p-garble

A chat, with its history: "Aiden, Sales", Chat with the help desk.

> (Aiden, Sales, at the left) Everything I print comes out as rows of strange symbols and letters. The printer’s own test page looks normal.

The printer is new: the office bought it last week.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The driver, which sends the job in the wrong language. (right)
- The print queue, with a stuck job at the front. — if chosen: A stuck job keeps pages from coming out. It does not change their letters.
- The program’s page setup, turned to landscape. — if chosen: Orientation turns the page. It does not change the letters.
- The USB cable that runs between the computer and the printer. — if chosen: A bad cable shows as Offline or nothing printing, not as symbols.

After the answer: the deciding words are marked. Reason: The clean test page clears the printer. Garbled print means the printer was sent the job in a language it does not read (the processing step fails). The driver translates the job, so the fix is the right driver for that printer, in the right language (PCL or PostScript).

#### Question in the draw: l13-p-queue

A chat, with its history: "Ilya, Reception", Chat with the help desk.

> (Ilya, Reception, at the left) My print jobs say Printing but nothing comes out. The printer says Ready.

A plain table, "Ilya’s print queue":

> Job  |  Status  (the column heads)
> Invoice.pdf  |  Error - Printing
> Letter.docx  |  Printing
> Menu.docx  |  Printing

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The print queue, with a stuck job at the front. (right)
- The driver installed on Ilya’s computer for this printer. — if chosen: A wrong driver garbles a page that does come out. Here the jobs never leave the queue.
- Ilya’s own link to the printer: its cable or port. — if chosen: A broken link shows the printer as Offline. Here it shows Ready, and the jobs sit in Ilya’s queue.
- The printer itself, which has stopped working. — if chosen: The printer says Ready, and the jobs never reached it.

After the answer: the deciding words are marked. Reason: The queue shows one job in error with two behind it, and the printer is ready and idle. The jobs are stuck before they reach the printer, so the link is the queue. The fix is to clear it and restart the print spooler.

#### Question in the draw: l13-s-twopc

A chat, with its history: "Jonah, Purchasing", Chat with the help desk.

> (Jonah, Purchasing, at the left) Nothing I print comes out of the printer on the third floor.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> Gita prints the same file to that printer from her computer  |  Prints fine
> Jonah prints it again from his computer  |  Nothing comes out

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Jonah’s computer: his program, queue, driver or link (right)
- The printer on the third floor and its paper — if chosen: It printed a test page and Gita’s file.
- The printer’s own link to the network — if chosen: Gita’s computer reaches the printer over the same link.
- Gita’s computer, which prints differently from Jonah’s — if chosen: Gita’s file printed, so her side works. The one that fails is Jonah’s.

After the answer: the deciding words are marked. Reason: The printer prints (its own page, and Gita’s file), so the printer, its paper and its network link are cleared. What is left is what only Jonah’s computer has: his program, his queue, his driver and his own link to the printer (port, cable, address).

#### Question in the draw: l13-s-faded

A chat, with its history: "Keira, Records", Chat with the help desk.

> (Keira, Records, at the left) My prints have been getting paler all week, and now they are very pale. The printer’s own test page is pale too.

It is a laser printer.

**What is the cheapest next step?**
(the options come in an order that depends on the seed of the question)
- Look at the toner level, and replace the cartridge if low. (right)
- Reinstall the driver on Keira’s computer and test the page again. — if chosen: The pale page came from the printer’s own screen, so Keira’s driver is not involved.
- Restart the print spooler on Keira’s computer. — if chosen: The spooler holds jobs. The pale test page never went through it.
- Take out the charging wire and the fuser and clean them. — if chosen: Nothing shows those parts are dirty. The screen shows the toner level in a minute, so the other parts wait.

After the answer: Reason: Fading on the test page made inside the printer is the printer’s own side. Checking the toner level costs a minute and changes nothing; the driver and the queue are cleared by the test page.

#### Question in the draw: l13-s-call

Lazar in Planning calls the help desk. You answer.

**Lazar calls about the printer. What do you say?**
- An incoming call from "Lazar, Planning" (Incoming call · 11:15 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "The printer is broken. I print and nothing happens. Please send somebody to swap it." [pushes: She wants the printer replaced before anything has been tested.]
  - reply "I will send someone to swap the printer today.": the call ends (not this one): A swap costs a day, and nothing showed the printer was the cause. A test page from its own screen would have shown whether it was. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "Before anyone is sent, let us try one thing: a test page from the printer’s own screen. It takes a minute.": goes on to turn 2, where the pressure comes back
  - reply "Let me reinstall the printer on your computer from here.": the call ends (not this one): That is a fix on the nearest cause. If it fails, you still do not know which side to look on. [slip: worked on whatever was nearest instead of testing to split the causes]
- turn 2, the other side says: "It printed a page that says Test Page, and it looks fine. But I still want a new printer. This is the third time this month!" [pushes: She is frustrated and still wants the swap.]
  - reply "The printer works, so a new one would not fix this. Let me have a colleague print the same job, and then we look at the waiting jobs on your computer. I will note that it keeps happening.": the call ends (right): The test page came from inside the printer, so the printer, its paper and its toner work. The same job from a colleague’s computer is the next cut: it clears this computer or the printer’s network link. Noting the repeats lets someone look for the pattern.
  - reply "Three times is too many. I will order a new printer today.": the call ends (not this one): The printer just printed a clean test page. A new one would cost money and fix nothing, however many times she has called. [slip: gave in to a demand the tests did not support]
  - reply "Then the fault is on your computer, so it is not a printer matter.": the call ends (not this one): It may be, but telling her so and stopping leaves her with nothing. Look at the waiting jobs with her. [slip: blamed or judged the user]
  - reply "Try printing your file again.": the call ends (not this one): The same job gives the same answer and rules nothing out. [slip: ran a test that does not split what works from what does not]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: A test page from the printer’s own screen is the cheapest test that splits the printer from everything before it. It printed, so the printer is cleared and the fault is on the way. A caller who is frustrated still gets the tested answer, said kindly.

#### Question in the draw: l13-s-symptoms

A desk keeps a list of printer symptoms and the link of the print path each one sits on.

**Which of these show a fault on the computer’s side of the path (the program, queue or driver) and not in the printer itself? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- Rows of strange symbols on the page (right)
- Many jobs waiting and none printing (right)
- Pages from one program come out sideways (right)
- Small dark specks of toner on the page — if chosen: Specks come from loose toner inside the printer.
- Toner that rubs off the page on a finger — if chosen: That is a fuser that is too cool, inside the printer.

After the answer: Reason: Garbled symbols are a driver problem, a waiting queue is the queue, and one program printing sideways is an orientation setting in that program or the driver. Specks and toner that rubs off are made inside the printer.

#### Question in the draw: l13-s-fuser

A chat, with its history: "Noemi, Print Room", Chat with the help desk.

> (Noemi, Print Room, at the left) The pages look fine, but the black comes off on my fingers and smears when I touch it. The printer’s own test page does the same.

It is a laser printer, far past the maker’s page count for its maintenance kit.

**What fixes it?**
(the options come in an order that depends on the seed of the question)
- Apply the maintenance kit, which includes a new fuser. (right)
- Turn the print quality down to draft in the driver on Noemi’s computer. — if chosen: Draft quality changes how much toner goes on. It does not make the fuser bake it in.
- Reinstall the driver on Noemi’s computer. — if chosen: The test page from the printer’s own screen smears too, so the driver is not involved.
- Replace the toner cartridge and print again. — if chosen: The toner reaches the page; it is the baking that fails.

After the answer: the deciding words are marked. Reason: The smear is on the test page made inside the printer, and the fusing step is the one that bakes the toner in. With the page count far past the maker’s figure, the worn fuser is replaced at once through the kit: here the bigger step is the right one.

#### Question in the draw: l13-s-both

A chat, with its history: "Osric, Planning", Chat with the help desk.

> (Osric, Planning, at the left) Nothing came out of the printer on four when I printed. I printed a test page from its own screen: it came out, but with a dark line down the middle. Windows shows my jobs stuck, the first marked Error.

It is a laser printer.

**What is going on?**
(the options come in an order that depends on the seed of the question)
- Two faults: a stuck queue, and a marked drum or dirty charging wire. Fix and test one at a time. (right)
- Only the printer: the line on the page is why the jobs stuck. — if chosen: A line on a page does not hold jobs back. The Error job in the queue is its own fault.
- Only the queue: the line on the test page can wait. — if chosen: The line is real and will be on every page once the queue is cleared.
- Both: clear the queue and replace the drum, then print once. — if chosen: Two changes at once leave you not knowing which one fixed the printing.

After the answer: the deciding words are marked. Reason: The tests assume one fault at a time, so two faults showing means treat them as two. The stuck job in the queue stops the printing; the line is a fault inside the printer that shows as soon as pages print. Fix one, check it, then the other.

#### Question in the draw: l13-g-wifi

A chat, with its history: "Phoebe, Facilities", Chat with the help desk.

> (Phoebe, Facilities, at the left) The wireless printer on two says Offline since Monday morning. Nobody on the floor can print. IT changed the office Wi-Fi password on Sunday night.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> Three computers on two print to it  |  None can

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- The printer’s own wireless link, still on the old password. (right)
- The toner and drum loaded in the printer. — if chosen: The test page printed, so the toner works.
- The driver installed on each of the three computers that cannot print. — if chosen: Three drivers do not fail at once on the day the password changes. The shared link does.
- Each computer’s own cable or port to the network. — if chosen: Three separate links do not break together on the day the password changes.

After the answer: the deciding words are marked. Reason: What changed was the Wi-Fi password. The printer prints and every computer fails, so the fault is the link they share: the printer’s own wireless link, which still holds the old password.

#### Question in the draw: l13-g-next

A chat, with its history: "Rafael, Sales", Chat with the help desk.

> (Rafael, Sales, at the left) Nothing comes out when I print from my spreadsheet program.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- A test page from Windows, in the printer’s properties. (right)
- Print the same spreadsheet again with fewer pages. — if chosen: It uses the same program, queue, driver and connection, so it rules nothing out.
- Replace the toner cartridge and print again. — if chosen: The printer’s own test page just printed fine, so the toner is not the cause.
- Reinstall the spreadsheet program on the computer and print again. — if chosen: That is a fix on the nearest cause. If it fails, nothing is ruled out.

After the answer: the deciding words are marked. Reason: The first test cleared the printer. A test page from Windows travels through the queue, the driver and the connection but skips the program, so it splits the program from everything else on the way.

#### Question in the draw: l13-g-feed

A chat, with its history: "Sabine, Operations", Chat with the help desk.

> (Sabine, Operations, at the left) The printer pulls two or three sheets through at once, and then it says Paper jam. It is two months old. I just opened a ream that sat in the damp storeroom.

**Which first fix fits?**
(the options come in an order that depends on the seed of the question)
- Fan the stack so the sheets part, and load dry paper. (right)
- Apply the maintenance kit and new feed rollers. — if chosen: The kit replaces worn parts. A printer this new has none, and the paper is the likelier cause.
- Install a new driver for this printer model. — if chosen: A driver does not change how paper is picked up.
- Restart the print spooler and send the job again. — if chosen: The spooler holds jobs. This fault is paper being pulled through.

After the answer: the deciding words are marked. Reason: Several sheets at once is a multipage misfeed, and it sits on the paper path. On a new printer with damp paper, the paper is the cheap first fix.

#### Question in the draw: l13-g-rollers

A chat, with its history: "Teodor, Mailroom", Chat with the help desk.

> (Teodor, Mailroom, at the left) The mailroom printer often pulls two sheets together, or none at all. I fanned the paper and loaded a fresh ream. No change.

It is a laser printer, far past the maker’s page count for its maintenance kit.

**What now?**
(the options come in an order that depends on the seed of the question)
- Apply the maintenance kit, which has new feed rollers. (right)
- Fan the stack again and reload it. — if chosen: Fanning and a fresh ream have been tried and did not help.
- Try a different brand of paper for a week. — if chosen: A fresh ream already answered the paper question, and a week is a slow test.
- Install a new driver for this printer model. — if chosen: A driver does not change how paper is picked up.

After the answer: the deciding words are marked. Reason: Fanning and fresh paper have been tried, and the page count is far past the maker’s figure. The feed rollers are worn, and the maintenance kit replaces them. Here replacing is right, because the cheaper steps are done.

#### Question in the draw: l13-r-frozen

A chat, with its history: "Valdis, Shipping", Chat with the help desk.

> (Valdis, Shipping, at the left) I canceled a stuck print job an hour ago and it still sits in the list as Deleting. Nothing else prints either.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Restart the print spooler and print a page. (right)
- Replace the toner cartridge and print again. — if chosen: Nothing has reached the printer, so its toner is not in question.
- Change the paper size in the print window. — if chosen: Paper size does not unfreeze a queue.
- Order a new printer for the shipping desk. — if chosen: The jobs never left the computer, so nothing shows the printer is at fault.

After the answer: the deciding words are marked. Reason: A job that will not delete, with everything behind it stuck, is a frozen queue. Restarting the print spooler frees it; then print one page to check.

#### Question in the draw: l13-r-tray

A chat, with its history: "Willa, Shipping", Chat with the help desk.

> (Willa, Shipping, at the left) The printer has a second paper tray with letterhead in it, but my print window does not offer it.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The driver’s options, or a loose tray. (right)
- The toner level of the cartridge in the printer. — if chosen: Toner marks the page. It does not list trays.
- The print queue holding the jobs on this computer. — if chosen: The queue holds jobs. It does not decide which trays are offered.
- The cable or wireless link to the printer. — if chosen: Printing works, so the connection is up. The window lacks one option.

After the answer: the deciding words are marked. Reason: Printing works, so the connection and the queue are fine. A tray that does not show up is a missing option on the computer, or a tray that is not seated in the printer.

#### Question in the draw: l13-r-speckle

A chat, with its history: "Yorick, Legal", Chat with the help desk.

> (Yorick, Legal, at the left) My pages have small black specks over them. The printer’s own test page has them too.

It is a laser printer.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- A leaking cartridge or a dirty inside. (right)
- The fuser, which is too cool. — if chosen: A cool fuser makes toner rub off. It does not scatter specks.
- The driver that sends the page to the printer. — if chosen: The printer’s own test page skips the driver, and has the specks.
- The connection between the computer and printer. — if chosen: The printer’s own test page starts inside the printer.

After the answer: the deciding words are marked. Reason: The specks are on the page made inside the printer, so everything before the printer is cleared. Speckling is loose toner: a leaking cartridge, or a dirty inside.

#### Question in the draw: l13-r-conn

A chat, with its history: "Zora, Planning", Chat with the help desk.

> (Zora, Planning, at the left) Since I moved desks my printer says Offline. It is plugged in with a USB cable.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> Zora prints from his computer  |  Printer shown as Offline

**Which test splits the connection from the rest?**
(the options come in an order that depends on the seed of the question)
- Try a USB cable that is known to work. (right)
- Replace the toner cartridge in the printer. — if chosen: The printer’s own test page printed, so the toner works.
- Reinstall Windows on Zora’s computer. — if chosen: That is a very large fix on one cause, and it is not shown to be the right one.
- Press Print once more and wait a minute. — if chosen: The same try gives the same answer and rules nothing out.

After the answer: the deciding words are marked. Reason: The printer works and the computer shows it Offline, so the fault is between them. A cable known to work, put where the doubtful one was, clears or convicts the cable only. If it still fails, the port is the next single change, then the driver.

#### Question in the draw: l13-r-finisher

A chat, with its history: "Adela, Legal", Chat with the help desk.

> (Adela, Legal, at the left) The big copier prints my reports fine, but every time I ask for stapled sets it stops with a staple jam.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A test page from the printer’s own screen  |  Prints fine
> The same report, stapling turned off  |  Prints fine

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- The finisher: clear the jammed staple and check the staple cartridge. (right)
- The fuser, which is too cool for the paper. — if chosen: A cool fuser makes toner rub off. It does not jam staples.
- The driver, which sends the job in the wrong language. — if chosen: Reports print fine without stapling, so the language is understood.
- The print queue, with a stuck job at the front. — if chosen: Jobs leave the queue and print. Only the stapled ones stop.

After the answer: the deciding words are marked. Reason: Everything works until the staple is asked for, so the fault is the finisher, the add-on that staples or punches. Clear the jam and look at the staple cartridge.

#### Question in the draw: l13-r-inkfeed

A chat, with its history: "Cosmo, Home Office", Chat with the help desk.

> (Cosmo, Home Office, at the left) My inkjet will not pick up paper any more. The rollers look shiny and gray with dust, and the paper just slides. The ink is full.

**What is the care?**
(the options come in an order that depends on the seed of the question)
- Clean the feed rollers, and replace them if they still slip. (right)
- Run the printhead cleaning from the settings menu. — if chosen: That clears blocked nozzles. The paper never gets as far as the head.
- Replace the ink cartridges with new ones. — if chosen: The ink is full, and ink does not pull the paper.
- Calibrate the printer from its settings menu. — if chosen: Calibrating lines up heads and colors. It does not pick up paper.

After the answer: Reason: Paper that is not pulled in, with rollers shiny with dust, is a feed problem on the paper path. The inkjet care for it is cleaning the rollers (the feeder), then replacing them if they still slip.

#### Question in the draw: l13-r-speckdrum

A chat, with its history: "Dinah, Design", Chat with the help desk.

> (Dinah, Design, at the left) The text on every page has a faint ghost of the previous page behind it, and the black rubs off on my fingers. The printer’s own test page does the same. Nothing was changed.

It is a laser printer, far past the maker’s page count for its maintenance kit.

**What is the most likely fix?**
(the options come in an order that depends on the seed of the question)
- Apply the maintenance kit, since its fuser is worn. (right)
- Reinstall the driver on Dinah’s computer. — if chosen: The printer’s own test page has the ghost too, so the computer is cleared.
- Clear the print queue and restart the spooler. — if chosen: The test page from the printer’s screen skips the queue.
- Print a test page from Windows to compare. — if chosen: The printer’s own page already has the ghost, so a second page tells nothing new.

After the answer: the deciding words are marked. Reason: The ghost is on the page made inside the printer. An echo alone could be the drum or the fuser, but toner that rubs off is the fuser’s sign, and the fuser comes in the maintenance kit.

#### Question in the draw: l13-k-blank

A chat, with its history: "Pri, Legal", Chat with the help desk.

> (Pri, Legal, at the left) Pages come out of the printer completely blank. The printer’s own test page is blank too.

It is a laser printer, and the cartridge was changed this morning.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Developing: the cartridge is empty, or its sealing tape is still on. (right)
- Fusing: the fuser is too cool to bake the toner in. — if chosen: A cool fuser leaves toner on the page that rubs off. A blank page has none.
- The driver that the computer uses to print. — if chosen: The printer’s own test page skips the driver, and it is blank.
- The print queue holding the waiting jobs. — if chosen: The printer’s own test page skips the queue.

After the answer: the deciding words are marked. Reason: The blank test page is made inside the printer, so the program, queue, driver and connection are cleared. In the developing step toner sticks to the drum; with an empty cartridge or the sealing tape still on, none does, and the cartridge is what changed this morning.

#### Question in the draw: l13-k-app

A chat, with its history: "Dalia, Marketing", Chat with the help desk.

> (Dalia, Marketing, at the left) Reports from our design program come out sideways. Everything I print from other programs is upright.

**Which link holds the fault?**
(the options come in an order that depends on the seed of the question)
- The orientation in that program’s print window. (right)
- The connection from that computer to the printer. — if chosen: Other programs print through the same connection.
- The driver installed for the whole printer. — if chosen: Other programs print upright through the same driver.
- The toner level in the printer’s cartridge. — if chosen: Toner does not change which way a page is turned.

After the answer: the deciding words are marked. Reason: Only one program prints sideways, so the printer, the driver and the connection are cleared. Orientation (portrait or landscape) is chosen in the program’s print window or its page setup.

#### Question in the draw: l13-k-grind

A chat, with its history: "Ennis, Warehouse", Chat with the help desk.

> (Ennis, Warehouse, at the left) The printer makes a loud grinding noise when it pulls the paper in, and then it stops. Nothing comes out.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Switch it off, then look for caught paper. (right)
- Keep printing for a while to see if it stops. — if chosen: Running it on can strip a gear or tear the paper into the rollers.
- Reinstall the driver and print a test page. — if chosen: A driver does not make a noise inside the printer.
- Replace the toner cartridge and try again. — if chosen: Toner does not drive the rollers.

After the answer: the deciding words are marked. Reason: A grinding noise as paper is pulled in sits on the paper path inside the printer. Stop the machine and look for a jam before anything else; worn gears or rollers come after.

#### Question in the draw: l13-k-echo

A chat, with its history: "Farah, Billing", Chat with the help desk.

> (Farah, Billing, at the left) A faint copy of the text sits just below the real text on every page. It does this on the printer’s own test page too.

It is a laser printer.

**Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Cleaning or fusing: leftover toner stays on the drum, or the fuser is worn. (right)
- Developing: the cartridge is nearly out of toner. — if chosen: Low toner makes pages faint. It does not copy the last page onto this one.
- The driver that the computer uses to print. — if chosen: The printer’s own test page skips the driver, and has the echo.
- The print queue of jobs waiting to print. — if chosen: The printer’s own test page skips the queue.

After the answer: the deciding words are marked. Reason: The echo is on the page made inside the printer, so the fault is in the printer. A double or echo image on a laser printer comes from the cleaning step not wiping the drum, or a worn fuser; the table of the seven steps lists echo images under both. The fuser is in the maintenance kit; the drum is replaced separately.

#### Question in the draw: l13-c-laser

The copy room has a laser printer that is far past the maker’s page count for its maintenance kit. It jams more and more often.

**What is the maintenance kit?**
(the options come in an order that depends on the seed of the question)
- The parts that wear out, such as the fuser and rollers, replaced together. (right)
- A fresh toner cartridge and a new drum, replaced together. — if chosen: Toner is replaced when it runs low. It is not a worn part of the paper path.
- A cleaning cloth, a small vacuum and a soft brush for cleaning the inside of the printer. — if chosen: Cleaning is part of care, but it does not replace a roller that has worn smooth.
- The newest driver and firmware update, installed together. — if chosen: A driver does not wear out, and it does not change how the paper is picked up.

After the answer: Reason: Jams that grow more frequent past the maker’s page count come from worn rollers. The maintenance kit replaces the parts that wear on a laser printer (the fuser and rollers; the drum is replaced separately), and the desk applies it on a schedule by page count.

#### Question in the draw: l13-c-secure

A chat, with its history: "Mateo, Finance", Chat with the help desk.

> (Mateo, Finance, at the left) I print payroll on the shared printer in the hall, and the pages sit in the tray until I walk there. Anyone could pick them up.

**Which printer feature fixes this?**
(the options come in an order that depends on the seed of the question)
- Secured print: the job waits in the printer until she signs in there. (right)
- User authentication, so only signed-in people can send jobs to the printer. — if chosen: That limits who can send. Once Mateo’s pages print, they still sit in the tray for anyone.
- The audit log, to record who sends each job. — if chosen: A log records who printed, afterward. The pages still sit in the tray for anyone.
- Duplex printing, to use half as much paper. — if chosen: Duplex prints on both sides of the paper. It does not hold pages back.

After the answer: the deciding words are marked. Reason: The trouble is that finished pages sit in the open. Secured print holds the job inside the printer and releases it when the owner signs in at it, with a PIN or a badge (a card the reader scans).

#### Question in the draw: l13-c-setup

The office of twelve people has a new laser printer. Everyone must be able to print to it, and nobody should need Clara’s computer to be switched on.

**How should it be connected?**
(the options come in an order that depends on the seed of the question)
- On the network, so no one’s computer has to be on. (right)
- By a USB cable to Clara’s computer, and shared from there. — if chosen: It prints only while Clara’s computer is on.
- By a USB cable to each person’s computer in turn. — if chosen: A USB cable reaches one computer at a time.
- Everyone emails the files to Clara to print. — if chosen: That does not give the office a printer.

After the answer: Reason: The need is a printer everyone reaches without one person’s computer being on. A network connection meets it, with a print server or direct to the printer’s address; USB reaches one computer.

#### Question in the draw: l13-c-address

After a weekend power cut, the printer says Offline on every computer. Someone fixes it by typing in the number now on the printer’s screen, which differs from last week’s. This has happened four times.

**What is the lasting fix?**
(the options come in an order that depends on the seed of the question)
- Give the printer a fixed IP address, or have the network reserve one. (right)
- Reinstall the driver on every computer. — if chosen: The driver is not what changed. The printer’s number did.
- Swap the printer’s network cable for a new one. — if chosen: The printer answered on its screen. Nothing shows the cable is bad.
- Restart the print spooler on each computer after a power cut. — if chosen: The spooler is fine. Restarting it hides nothing and fixes nothing here.

After the answer: Reason: A network printer that gets a new number after each power cut leaves every computer sending to the old one. Giving it a fixed IP address, or reserving one for it, removes the cause rather than correcting the symptom each time.

#### Question in the draw: l13-c-kind

An inkjet printer prints white streaks across the text. The ink levels on its screen show full.

**What is the care?**
(the options come in an order that depends on the seed of the question)
- Run the printer’s printhead cleaning. (right)
- Apply the maintenance kit from the maker. — if chosen: That is the kit of worn parts for laser printers.
- Replace the cartridges with new ones. — if chosen: The ink levels are full. The ink is not the problem.
- Calibrate the printer from its settings menu. — if chosen: Calibrating lines up the heads and colors. It does not clear a blocked nozzle.

After the answer: Reason: White streaks with full ink come from clogged nozzles on the printhead. The care for an inkjet is cleaning the printhead; replacing cartridges is for when the ink runs out.

#### Question in the draw: l13-c-impact

A clerk prints three-part carbon-copy invoices on a dot matrix printer. The top copy is dark, but the third copy is very faint.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Replace the ribbon and check the printhead. (right)
- Replace the toner cartridge and the drum. — if chosen: An impact printer has no toner. It prints with a ribbon.
- Clean the heating element with a soft cloth. — if chosen: That is a thermal printer’s care.
- Clean the inkjet nozzles with the cleaning tool. — if chosen: An impact printer has no nozzles. Pins strike the ribbon.

After the answer: Reason: An impact printer is the kind that prints multipart forms, by striking pins through a ribbon. Faint lower copies mean the strike is weak: a worn ribbon first, then the printhead.

#### Question in the draw: l13-c-scan

Reception wants to scan paper contracts and have them land in a shared folder on the office file server, with no email involved.

**Which network scan destination fits?**
(the options come in an order that depends on the seed of the question)
- Scan to a shared folder, over SMB. (right)
- Scan to email, to each person’s inbox. — if chosen: That sends a message. They want a file in a folder.
- Scan to a cloud account on the internet. — if chosen: That puts the file outside the office file server.
- Scan to a USB stick in the printer. — if chosen: That puts the file on a stick, not on the file server.

After the answer: Reason: Scanning into a shared folder on the file server is the SMB destination.

#### Question in the draw: l13-c-flatbed

One contract is a single 100-year-old page, torn at the edge, to be scanned.

**Which part of the scanner takes it?**
(the options come in an order that depends on the seed of the question)
- The flatbed glass, laid flat. (right)
- The automatic document feeder. — if chosen: The feeder pulls pages through rollers and would tear it.
- The feeder with the two-sided scan turned on. — if chosen: Two-sided scanning still pulls the page through rollers.
- Either one, since they work the same way. — if chosen: They do not: one pulls paper through, the other holds it still.

After the answer: Reason: A fragile single page goes on the flatbed glass, which holds it still; the automatic document feeder pulls pages through rollers.

#### Question in the draw: l13-c-duplexscan

Legal has a stack of 40 loose sheets, printed on both sides, to scan into one file. Nobody wants to stand there turning sheets.

**Which way gets all 80 sides scanned?**
(the options come in an order that depends on the seed of the question)
- The automatic document feeder, with two-sided scan turned on. (right)
- The automatic document feeder, one-sided. — if chosen: It would read only the front of each sheet.
- The flatbed glass, one sheet at a time. — if chosen: Someone would have to stand and turn 40 sheets.
- The flatbed glass with the lid open, two sheets at a time. — if chosen: The glass takes one page at a time, face down.

After the answer: Reason: A stack of loose sheets goes in the automatic document feeder. Its two-sided scan reads both sides, so no one turns the sheets.

#### Question in the draw: l13-c-cloud

Staff who work from home need scans from the office printer to arrive in their own online storage, not on the office file server.

**Which scan destination fits?**
(the options come in an order that depends on the seed of the question)
- Scan to the cloud, to each person’s storage account. (right)
- Scan to a shared folder over SMB on the office file server. — if chosen: That keeps the file in the office, where staff at home may not reach it.
- Scan to email for the office manager to forward. — if chosen: It works, but it sends a message through one person and does not put the file in their storage.
- Scan to the printer’s own memory, to pick up later. — if chosen: It leaves the file in the printer, not in anyone’s storage.

After the answer: Reason: Scan to cloud sends the file to online storage tied to the person. SMB is a shared folder inside the office; email sends a message.

#### Question in the draw: l13-c-driver

The office prints Word documents and spreadsheets on a laser printer that can read two printer languages, PCL and PostScript. The designers print page layouts where fonts and graphics must look exactly as they do on screen.

**Which fits best?**
(the options come in an order that depends on the seed of the question)
- PCL for documents, PostScript for the designers. (right)
- PostScript for documents, PCL for the designers. — if chosen: That reverses them: PostScript is the one used where exact layout matters.
- PostScript for everyone, since it is newer. — if chosen: It is not about age. Each language has a job; PCL is the everyday one.
- Either one, since the printer decides by itself. — if chosen: The driver on each computer chooses the language, so installing the wrong one gives garbled print.

After the answer: Reason: PCL and PostScript are the two printer languages the exam names. The driver picks one, so the choice is made when the driver is installed: PCL for ordinary office work, PostScript for exact layout and graphics.

#### Question in the draw: l13-c-badge

A law firm wants staff to sign in at the printer by tapping their ID card, with no password to type.

**Which security setting is that?**
(the options come in an order that depends on the seed of the question)
- Badging, signing in by scanning a card. (right)
- Secured print, holding the job until a PIN. — if chosen: That holds a job until its owner signs in; it is about when pages come out, not how people sign in.
- The audit log, listing who printed. — if chosen: A log records afterward. It does not sign anyone in.
- Duplex, to print on both sides. — if chosen: Duplex is a print default, not a sign-in.

After the answer: Reason: Signing in at the printer by scanning a card is badging. Secured print is the hold on a job, and the audit log is the record kept afterward.

#### Question in the draw: l13-c-place

A new office laser printer arrives in its box. It is heavy and gives off heat. The office has a spare table by the network socket, a shelf above a desk, and a cupboard.

**Where should it go, and what comes first?**
(the options come in an order that depends on the seed of the question)
- On the sturdy table by the socket, with room around it, after taking off all packing tape. (right)
- In the cupboard with the door shut, to keep it quiet. — if chosen: A printer needs air around it, and the paper trays need room.
- On the shelf above the desk, tape left on until it jams. — if chosen: The shelf is not stable for something heavy, and the tape has to come off.
- On the floor behind the door, out of the way. — if chosen: The floor puts it out of reach and gets paper dust and knocks.

After the answer: Reason: A new printer goes on a stable surface near a socket and the network, with room for paper and airflow. Packing tape comes off before it is switched on.

#### Question in the draw: l13-c-firmware

A chat, with its history: "Ayo, Operations", Chat with the help desk.

> (Ayo, Operations, at the left) The new printer prints fine, but the scan-to-folder button gives an error. The maker’s support page says a firmware update fixes it.

**What do you update?**
(the options come in an order that depends on the seed of the question)
- The printer’s firmware, from the maker’s page. (right)
- The driver on each computer. — if chosen: A driver is for printing from a computer. The scan button runs on the printer.
- Windows on every computer. — if chosen: Nothing points to Windows; the fault is in the printer’s scan feature.
- The cartridge, with a new one. — if chosen: A cartridge does not run the scan feature.

After the answer: Reason: The scan feature runs on the printer, so the fix is the printer’s own software, its firmware, from the maker.

#### Question in the draw: l13-c-duplex

Accounts wants every report to print on both sides of the paper by default.

**Which setting puts a report on both sides of the sheet?**
(the options come in an order that depends on the seed of the question)
- Duplex. (right)
- Orientation. — if chosen: Orientation turns the page upright or sideways.
- Tray. — if chosen: The tray picks which paper to use.
- Quality. — if chosen: Quality decides how dark and fine the print is.

After the answer: Reason: Duplex prints both sides. The defaults are chosen once on the printer so every job starts with them.

#### Question in the draw: l13-c-draft

Accounts wants proofs to use less toner.

**Which setting makes a proof use less toner?**
(the options come in an order that depends on the seed of the question)
- Draft quality. (right)
- Duplex. — if chosen: Duplex saves paper, not toner.
- Tray. — if chosen: The tray picks which paper to use.
- Orientation. — if chosen: Orientation turns the page.

After the answer: Reason: Draft quality lays down less toner. The defaults are chosen once on the printer so every job starts with them.

#### Question in the draw: l13-c-msds

A technician has swapped the toner cartridge and holds the empty one. The bin by the printer is the ordinary rubbish.

**Where does she find how to dispose of the used toner?**
(the options come in an order that depends on the seed of the question)
- In its safety data sheet (called MSDS on the exam). (right)
- In the printer’s audit log. — if chosen: The audit log records who printed what, not how to dispose of toner.
- In the driver’s settings on the computer. — if chosen: The driver turns jobs into the printer’s language. It holds nothing about disposal.
- Nowhere: it goes in the ordinary rubbish. — if chosen: Used toner is not household waste.

After the answer: Reason: The safety data sheet for the toner says how to dispose of it. The ordinary rubbish is not the answer.

#### Question in the draw: l13-k-thermal

The shop’s receipt printer prints pale stripes. It has no ink and no toner. It uses a roll of special paper.

**What is the care?**
(the options come in an order that depends on the seed of the question)
- Clean the heating element and any debris. (right)
- Replace the ink cartridge and clean the head. — if chosen: A thermal printer uses no ink.
- Replace the ribbon and check the printhead. — if chosen: That is an impact printer’s care.
- Apply the maintenance kit and calibrate it. — if chosen: That is the kit of worn parts for laser printers.

After the answer: Reason: No ink and no toner, and special paper: this is a thermal printer. Its care is a clean heating element, free of debris, and the right paper.

#### Question in the draw: l13-k-audit

A chat, with its history: "Hollis, Finance manager", Chat with the help desk.

> (Hollis, Finance manager, at the left) Who printed 400 pages of the staff salary list last Friday afternoon? The desk lead has approved this lookup.

**Which printer feature answers this?**
(the options come in an order that depends on the seed of the question)
- The audit log kept by the printer. (right)
- Secured print, with a PIN at the printer. — if chosen: It holds a job until its owner signs in. It does not by itself tell you afterward who printed.
- Duplex printing, on both sides of the paper. — if chosen: Duplex prints on both sides of the paper.
- The printer’s page counter. — if chosen: It counts total pages. It does not record who printed them.

After the answer: the deciding words are marked. Reason: The question is about what already happened. Audit logs record who printed what, and when; secured print and sign-in at the printer limit what happens next.

#### Question in the draw: l12-p-run

A chat, with its history: "Orla, Facilities", Chat with the help desk.

> (Orla, Facilities, at the left) The new desk is 85 meters of cable run from the switch (the box that joins the office’s wired network cables) in the wiring closet. The company wants 10 Gbps on it, that is ten billion bits a second. Which cable do I pull?

**Which cable fits?**
(the options come in an order that depends on the seed of the question)
- Cat 6a (right)
- Cat 6 — if chosen: Cat 6 carries 10 Gbps only up to about 55 meters. At 85 meters it falls back to 1 Gbps.
- Cat 5e — if chosen: Cat 5e tops out at 1 Gbps.
- Cat 5 — if chosen: Cat 5 tops out at 100 Mbps, a hundred million bits a second.

After the answer: the deciding words are marked. Reason: The job is 10 Gbps over 85 meters. Only Cat 6a keeps 10 Gbps out to the full 100 meters. Cat 6 does it for about 55 meters, Cat 5e stops at 1 Gbps and Cat 5 at 100 Mbps.

#### Question in the draw: l12-p-modem

A chat, with its history: "Lucy, Front desk", Chat with the help desk.

> (Lucy, Front desk, at the left) The cable company ran a new line to a jack in the wall. I have the cable modem (the box that joins us to the internet company’s line) on my desk. What goes between the wall jack and the modem?

**Which cable goes from the wall jack to the cable modem?**
(the options come in an order that depends on the seed of the question)
- A coax cable with F-type plugs on both ends (right)
- A phone cable with RJ11 plugs on both ends — if chosen: A phone cable is for a phone line and for a DSL modem. A cable modem is not on the phone line.
- A Cat 6 cable with RJ45 plugs — if chosen: A network cable fits the modem’s network port, which leads on to the router (the box that shares the connection). It does not go to the wall jack.
- A DVI cable with a DVI-I plug — if chosen: DVI carries a picture to a screen. It carries no internet.

After the answer: the deciding words are marked. Reason: A cable modem takes its signal from coax, the cable the cable company runs, and coax ends in an F-type plug. The network cable on the modem goes the other way, to the router.

#### Question in the draw: l12-p-plenum

A chat, with its history: "Selma, Facilities", Chat with the help desk.

> (Selma, Facilities, at the left) I am running new network cable above the ceiling tiles, in the open space the building’s heating and cooling air moves through. What do I buy?

**Which cable goes there?**
(the options come in an order that depends on the seed of the question)
- A plenum-rated cable with a fire-safe jacket (right)
- An ordinary cable with a plastic jacket — if chosen: In a fire its jacket gives off thick poisonous smoke, and the moving air would carry it through the building.
- A direct-burial cable — if chosen: That jacket is made to stand water and soil underground. It is not the fire-rated one the air space needs.

After the answer: the deciding words are marked. Reason: Where the building’s air moves above the ceiling, the jacket matters in a fire. Plenum-rated cable burns slowly and gives off little poisonous smoke. Direct-burial is for the ground.

#### Question in the draw: l12-s-short

A chat, with its history: "Viggo, IT team", Chat with the help desk.

> (Viggo, IT team, at the left) I need a cable for a 10 Gbps link between two servers in the same rack. The run is 30 meters. The budget is tight. Cat 6 costs less than Cat 6a. Is Cat 6 enough?

**What do you say?**
(the options come in an order that depends on the seed of the question)
- Yes, Cat 6 is enough for a 30 meter run, and it costs less. (right)
- No, only Cat 6a carries 10 Gbps on any run. — if chosen: Cat 6a is needed past about 55 meters. This run is 30.
- No, Cat 6 tops out at 1 Gbps on every run. — if chosen: Cat 6 does 1 Gbps to 100 meters and 10 Gbps up to about 55 meters.
- Yes, and Cat 5e does that for even less. — if chosen: Cat 5e tops out at 1 Gbps.

After the answer: the deciding words are marked. Reason: The job is 10 Gbps over 30 meters. Cat 6 does that out to about 55 meters, so the cheaper cable fits; the pricier Cat 6a is for longer runs.

#### Question in the draw: l12-s-burial

A chat, with its history: "Deb, Facilities", Chat with the help desk.

> (Deb, Facilities, at the left) We are laying 30 meters of network cable from the main building to the shed, in a trench in the ground. No pipe around it. What kind of cable?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- A direct-burial cable (right)
- A plenum-rated cable — if chosen: A plenum jacket is made for fire safety in an air space. It is not made to stand soil and water.
- An ordinary indoor cable — if chosen: An indoor jacket lets water in, and the cable fails in the ground.

After the answer: the deciding words are marked. Reason: A cable in the ground with no pipe needs a jacket made for it: direct burial. The plenum rating answers a different problem, fire in an air space.

#### Question in the draw: l12-r-crossover

A chat, with its history: "Nolan, IT team", Chat with the help desk.

> (Nolan, IT team, at the left) I need to join two new switches. Someone said I must make a crossover cable. These switches are from this year.

**What do you say?**
(the options come in an order that depends on the seed of the question)
- A straight-through cable is usually fine; today’s ports detect the wiring (right)
- A crossover is the only cable that joins two switches — if chosen: That was true of older gear. Newer ports detect and adjust.
- A coax cable is needed between switches — if chosen: Coax is for cable TV and cable internet, not a link between switches.

After the answer: the deciding words are marked. Reason: A crossover has T568A on one end and T568B on the other. Most network ports today detect which wiring they have, so a straight-through cable works.

#### Question in the draw: l12-r-shield

A chat, with its history: "Oriel, Workshop", Chat with the help desk.

> (Oriel, Workshop, at the left) The network cable to the welding bay runs along a bank of bright lights and lamp transformers, and it drops whenever they are switched on. I swapped it for a faster one, Cat 6a UTP, and it still drops.

**What should replace it?**
(the options come in an order that depends on the seed of the question)
- A shielded cable (STP) with foil or braid around the pairs (right)
- A longer Cat 6a UTP — if chosen: Length does not help against noise, and it adds to the loss.
- A plenum-rated Cat 6 UTP — if chosen: Plenum is a fire rating. It does not block noise.

After the answer: the deciding words are marked. Reason: Speed does not cure interference. Shielding around the pairs, as in STP, blocks electrical noise.

#### Question in the draw: l12-r-cat5e

A chat, with its history: "Reuben, Office", Chat with the help desk.

> (Reuben, Office, at the left) The wall jacks in our old office are wired with Cat 5e, the longest run is 60 meters, and the switches have 1 Gbps ports. We want every desk at 1 Gbps. Do we have to pull new cable?

**What do you say?**
(the options come in an order that depends on the seed of the question)
- No, Cat 5e already carries 1 Gbps (right)
- Yes, only Cat 6a carries 1 Gbps — if chosen: Cat 6a is for 10 Gbps over the full run. 1 Gbps needs far less.
- Yes, Cat 5e is limited to 100 Mbps — if chosen: That is Cat 5. Cat 5e carries 1 Gbps.

After the answer: the deciding words are marked. Reason: The job is 1 Gbps. Cat 5e carries 1 Gbps, Cat 5 only 100 Mbps, so nothing needs replacing.

#### Question in the draw: l12-k-t568

A chat, with its history: "Flor, Network team", Chat with the help desk.

> (Flor, Network team, at the left) I made a patch cable (a short cable from a PC to a switch, the box that joins wired computers). I wired both ends the T568B way. What kind of cable did I make?

**What kind of cable is it?**
(the options come in an order that depends on the seed of the question)
- A straight-through cable (right)
- A crossover cable, with A at one end — if chosen: A crossover has T568A on one end and T568B on the other.
- A shielded cable made with foil, STP — if chosen: Shielding is foil around the pairs. The wiring order says nothing about shielding.
- A Cat 6a cable, a faster grade — if chosen: The category is the grade of the cable and its speed. The wiring order is a separate choice.

After the answer: the deciding words are marked. Reason: T568A and T568B are two pin orders for the eight wires. The same order at both ends is straight-through. A crossover has A at one end and B at the other.

#### Question in the draw: l12-k-stp

A chat, with its history: "Gwyn, Plant manager", Chat with the help desk.

> (Gwyn, Plant manager, at the left) The network cable to the packing line runs right beside a row of big motors, and the connection keeps dropping. The cable is ordinary twisted pair with no foil or braid, UTP. What cable should replace it?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- Shielded cable (STP) (right)
- A plenum-rated UTP cable — if chosen: Plenum is a fire rating for air spaces. It does not block noise.
- A longer UTP cable to the same spot — if chosen: Length does not help against interference, and it adds to the loss.
- A Cat 6a UTP cable, much faster — if chosen: Cat 6a is faster, but it is just as open to electrical noise with no shield.

After the answer: the deciding words are marked. Reason: The drops come from the motors’ electrical noise. Shielding around the pairs, as in STP, is what blocks it.

#### Question in the draw: l12-s-fiber

A chat, with its history: "Unity, Operations", Chat with the help desk.

> (Unity, Operations, at the left) We need a link between the main office and the warehouse. They are 2 kilometers apart. What cable?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- Single-mode fiber (right)
- Multimode fiber, the kind used for shorter runs — if chosen: Multimode fiber has a wider core and is made for runs of a few hundred meters at most, such as inside a building.
- Cat 6a — if chosen: Copper network cable is good for 100 meters.
- Coaxial cable — if chosen: Coax is for cable TV and cable internet to a building, not a 2 kilometer link between two of them.

After the answer: the deciding words are marked. Reason: At 2 kilometers, copper is out (100 meters at most) and multimode fiber is too short. Single-mode fiber, a thin core with laser light, is the one made for kilometers.

#### Question in the draw: l12-r-multi

A chat, with its history: "Perrin, Operations", Chat with the help desk.

> (Perrin, Operations, at the left) We want a fiber link between the first and fifth floor of one building, about 150 meters. A single-mode cable costs more. Is multimode all right?

**What do you say?**
(the options come in an order that depends on the seed of the question)
- Yes, multimode reaches a few hundred meters, so it fits inside a building (right)
- No, only single-mode works at any length — if chosen: Single-mode is for kilometers. For 150 meters multimode is enough.
- No, fiber cannot go through floors, so use Cat 5 — if chosen: Cat 5 is slow and is not a fiber answer; fiber runs in a building like other cable.

After the answer: the deciding words are marked. Reason: The run is about 150 meters inside a building, within multimode’s few hundred meters. Single-mode’s long range is not needed.

#### Question in the draw: l12-r-fibernoise

A chat, with its history: "Sunniva, Plant", Chat with the help desk.

> (Sunniva, Plant, at the left) Why can fiber run right past the big motors when copper drops out?

**Why?**
(the options come in an order that depends on the seed of the question)
- Fiber carries light, so electrical noise does not touch it (right)
- Fiber is thicker, so the noise cannot get in — if chosen: Thickness is not the reason. The signal is light, not electricity.
- Fiber has a shield of foil around it — if chosen: Shielded copper has foil. Fiber needs none, because light is not affected by electrical noise.

After the answer: the deciding words are marked. Reason: Fiber carries light through glass. Electrical noise from motors and lights does not touch it.

#### Question in the draw: l12-r-lc

The question, read aloud as above: **On the patch panel the fiber plugs are small squares with a latch, about half the size of the SC plug. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - LC
  - LC plug
  - LC connector

After the answer: Reason: LC is a small square fiber plug with a latch. SC is bigger and pushes in; ST is round and twists on.

#### Question in the draw: l12-r-sc

The question, read aloud as above: **A fiber plug is a square that you push in until it clicks. It is bigger than LC. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SC
  - SC plug
  - SC connector

After the answer: Reason: SC is a square fiber plug that pushes in and clicks. LC is a smaller square with a latch; ST is round and twists.

#### Question in the draw: l12-s-dvi

A chat, with its history: "Winnie, Conference room", Chat with the help desk.

> (Winnie, Conference room, at the left) The old monitor has a DVI-D port. The computer has a DVI-I port. I have a DVI-D cable. Will it carry a picture from the computer to the monitor?

**Will it work?**
(the options come in an order that depends on the seed of the question)
- Yes, DVI-I includes the digital picture. (right)
- No, DVI-I carries only an analog picture, like VGA. — if chosen: DVI-I carries both. Only DVI-A is analog alone.
- No, the plugs differ, so it needs a converter to analog. — if chosen: The plug fits, and no conversion is needed: both ends speak digital.
- Yes, and it will carry sound too. — if chosen: DVI normally carries no sound.

After the answer: the deciding words are marked. Reason: DVI-D carries digital only, DVI-I carries digital and analog, DVI-A analog only. A digital DVI-D cable between a DVI-I port and a DVI-D port carries the digital picture. DVI normally carries no sound.

#### Question in the draw: l12-s-sata

A chat, with its history: "Zelda, Warehouse", Chat with the help desk.

> (Zelda, Warehouse, at the left) I put a new hard drive inside my desktop. What cable carries the drive’s data to the motherboard?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- A SATA cable, the kind that stays inside the computer (right)
- An eSATA cable, the one for outside the computer — if chosen: eSATA is the same connection taken outside the computer, for an external drive.
- A Molex cable — if chosen: A Molex is a power plug. It carries no data.

After the answer: the deciding words are marked. Reason: The job is data to a drive inside the computer: SATA. eSATA is for drives outside the computer, and Molex only brings power.

#### Question in the draw: l12-d-audio

A chat, with its history: "Gideon, Training", Chat with the help desk.

> (Gideon, Training, at the left) The room 3 TV has an HDMI port and my laptop has an HDMI port, but the only cable I found is DVI at one end and HDMI at the other. The picture shows. No sound comes out of the TV.

**Why is there no sound?**
(the options come in an order that depends on the seed of the question)
- DVI normally carries no sound (right)
- The adapter cable is damaged and drops only the sound — if chosen: A bad cable would spoil the picture too. The picture is fine.
- The refresh rate is too low to carry sound — if chosen: The refresh rate changes how often the picture is redrawn. It does not change sound.
- The TV’s dead pixels are blocking the sound — if chosen: Dead pixels are dots on the picture. They have nothing to do with sound.

After the answer: the deciding words are marked. Reason: An adapter changes the plug; it cannot add what the cable does not carry. DVI, like VGA, normally carries the picture only. With a DVI cable the sound has to travel another way, or the job needs a cable that carries both, HDMI or DisplayPort.

#### Question in the draw: l12-g-esata

A chat, with its history: "Hans, Engineering", Chat with the help desk.

> (Hans, Engineering, at the left) My PC has an eSATA port on the back. What does an eSATA cable do that the SATA cable inside the computer does not?

**What is the difference?**
(the options come in an order that depends on the seed of the question)
- It takes SATA outside, with no power (right)
- It carries both power and data to the drive — if chosen: eSATA has no power in it. The external drive is plugged into the wall for power.
- It is a fiber cable for long runs between rooms — if chosen: eSATA is copper, the same connection as SATA.

After the answer: the deciding words are marked. Reason: eSATA is SATA taken outside the computer for an external drive. It carries data only, so the external drive has its own power.

#### Question in the draw: l12-g-db9

A chat, with its history: "Jasper, Network team", Chat with the help desk.

> (Jasper, Network team, at the left) To set up a new switch I have to connect my laptop to its console port with a serial cable. Which plug is on the end that goes into the laptop?

**Which plug?**
(the options come in an order that depends on the seed of the question)
- DB9, the 9-pin D-shaped plug (right)
- RJ45, the wide 8-contact plug — if chosen: RJ45 is the network plug. A console port can take one on some gear, but a serial cable ends in DB9.
- F-type, the screw-on plug — if chosen: F-type is the screw-on plug of coax.
- Molex, the four-pin power plug — if chosen: Molex brings power to a drive inside a PC. It carries no serial data.

After the answer: the deciding words are marked. Reason: A serial cable sends one bit after another and ends in a 9-pin D-shaped plug, DB9. It is what a technician uses to configure network gear through its console port.

#### Question in the draw: l12-g-usb

A chat, with its history: "Kelsey, Video team", Chat with the help desk.

> (Kelsey, Video team, at the left) My new drive says USB 3.0 and so do the ports on my PC. The old one was USB 2.0. How fast can this link go at its best?

**How fast?**
(the options come in an order that depends on the seed of the question)
- 5 Gbps (right)
- 480 Mbps — if chosen: That is USB 2.0.
- 10 Gbps — if chosen: That is a later, faster USB version.
- 40 Gbps — if chosen: That is Thunderbolt 3 or 4.

After the answer: the deciding words are marked. Reason: USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Later versions go faster over the USB-C plug.

#### Question in the draw: l12-r-usbc

A chat, with its history: "Tamsin, Accounting", Chat with the help desk.

> (Tamsin, Accounting, at the left) My new laptop has only USB-C ports. My monitor has only a DisplayPort input. IT gave me a USB-C to DisplayPort cable. Why would that work?

**Why can that cable work?**
(the options come in an order that depends on the seed of the question)
- USB-C can carry video as well as data and power (right)
- USB-C and DisplayPort are the same connector — if chosen: They are different. The cable has a USB-C plug on one end and a DisplayPort plug on the other.
- USB-C only charges, and the adapter does the rest — if chosen: USB-C can carry data and video too. Which it does depends on the laptop’s port and the cable.

After the answer: the deciding words are marked. Reason: USB-C is a plug that can carry data, power and video. Whether a given port does video is a feature of the laptop, so check the port, not only the plug.

#### Question in the draw: l12-r-tb

A chat, with its history: "Ulrich, Design", Chat with the help desk.

> (Ulrich, Design, at the left) My laptop has a USB-C port with a little lightning bolt beside it. My dock needs the fastest port, 40 Gbps. Is that port the one?

**What is that port?**
(the options come in an order that depends on the seed of the question)
- Thunderbolt, 40 Gbps over the USB-C plug (right)
- USB 2.0, 480 Mbps over the USB-C plug — if chosen: USB 2.0 is not marked with a lightning bolt and runs at only 480 Mbps.
- USB 3.0, 5 Gbps over the same plug — if chosen: USB 3.0 runs at 5 Gbps, not 40 Gbps.

After the answer: the deciding words are marked. Reason: A lightning bolt next to a USB-C port marks Thunderbolt, which runs at 40 Gbps over the same plug. A USB-C port without it may be much slower.

#### Question in the draw: l12-r-vga

A chat, with its history: "Verity, Training", Chat with the help desk.

> (Verity, Training, at the left) The old projector in room 1 has only a VGA input. My new laptop has only an HDMI output. What do I need?

**What do you need?**
(the options come in an order that depends on the seed of the question)
- A converter from digital HDMI to analog VGA (right)
- A good-quality HDMI cable, plugged in — if chosen: The projector has no HDMI input for it to plug into.
- A Cat 6 network cable between them — if chosen: Network cable carries no picture to a projector.

After the answer: the deciding words are marked. Reason: The two ends speak different kinds of signal, digital HDMI and analog VGA, so the adapter must convert the signal, not just fit the plugs. VGA carries no sound, so that needs its own cable.

#### Question in the draw: l12-s-hdmi

A chat, with its history: "Winnie, Conference room", Chat with the help desk.

> (Winnie, Conference room, at the left) The new TV takes HDMI, DVI-D or VGA, and my laptop has all three. I want picture and sound to reach the TV over one cable. Which one?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- HDMI (right)
- DVI-D — if chosen: DVI-D carries a digital picture only. The sound would need its own cable.
- VGA — if chosen: VGA carries an analog picture only, and no sound.

After the answer: the deciding words are marked. Reason: The job is picture and sound in one cable. HDMI does both. DVI-D and VGA carry the picture only.

#### Question in the draw: l12-k-usb3

A chat, with its history: "Heidi, Video team", Chat with the help desk.

> (Heidi, Video team, at the left) I copied 200 GB to my new drive and the first try over USB 2.0 took forever. The drive and my PC are both USB 3.0. At its best, how fast is the link between them?

**How fast is USB 3.0?**
(the options come in an order that depends on the seed of the question)
- 5 Gbps (right)
- 480 Mbps — if chosen: That is USB 2.0.
- 10 Gbps — if chosen: That is a later, faster USB version.
- 1 Gbps — if chosen: That is the speed of Cat 5e network cable.

After the answer: the deciding words are marked. Reason: USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Use the blue USB 3.0 ports and cable on both ends.

#### Question in the draw: l12-p-rj45

A chat, with its history: "Kay, Accounting", Chat with the help desk.

> (Kay, Accounting, at the left) I am making a cable from my PC to the network jack in the wall. The cable is Cat 6. Which plug goes on each end?

**Which plug?**
(the options come in an order that depends on the seed of the question)
- RJ45 (right)
- RJ11 — if chosen: RJ11 looks like a smaller RJ45. It is the telephone plug, with fewer contacts. It can be pushed into a network jack, but it is not the right plug.
- F-type — if chosen: F-type is the screw-on plug of coax cable.
- LC — if chosen: LC is a small plug for fiber, not for copper network cable.

After the answer: the deciding words are marked. Reason: Ethernet cable, Cat 5e, Cat 6 or Cat 6a, ends in an RJ45 plug with 8 contacts. RJ11 is the narrower telephone plug.

#### Question in the draw: l12-s-st

The question, read aloud as above: **A fiber plug on the switch is round. You push it in and twist a quarter turn to lock it. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - ST
  - ST plug
  - ST connector
  - straight tip
  - straight tip plug
  - straight tip connector

After the answer: Reason: ST, for straight tip, is round and locks with a twist. SC is square and pushes in, and LC is a small square plug with a latch.

#### Question in the draw: l12-g-molex

The question, read aloud as above: **An old optical drive inside a PC gets its power from a chunky four-pin plastic plug. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Molex
  - Molex plug
  - Molex connector

After the answer: Reason: A Molex plug is a 4-pin plastic power connector for older internal drives and fans.

#### Question in the draw: l12-g-light

A chat, with its history: "Lorcan, Front desk", Chat with the help desk.

> (Lorcan, Front desk, at the left) The charging plug on an old iPad is small, 8 pins, and goes in either way up. My new laptop has a port marked with a lightning bolt. Is the iPad’s plug the same thing?

**What is the iPad’s plug called?**
(the options come in an order that depends on the seed of the question)
- Lightning (right)
- Thunderbolt — if chosen: Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.
- Micro USB — if chosen: Micro USB is a small flat trapezoid that goes in one way up.
- Mini USB — if chosen: Mini USB is bigger, found on older cameras and GPS units.

After the answer: the deciding words are marked. Reason: Apple’s reversible 8-pin plug is Lightning. The lightning bolt on a port marks Thunderbolt, a different thing.

#### Question in the draw: l12-r-rj11

The question, read aloud as above: **Name the narrow plug on a telephone cable, also used on a DSL modem’s phone line.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - RJ11

After the answer: Reason: RJ11 is the narrower telephone plug. Network cable uses the wider RJ45.

#### Question in the draw: l12-r-ftype

The question, read aloud as above: **Name the threaded, screw-on connector at the end of coaxial cable.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - F-type
  - F connector
  - F-type connector

After the answer: Reason: The F-type connector screws onto coax, the cable of cable TV and cable internet.

#### Question in the draw: l12-r-punch

A chat, with its history: "Wendell, New hire", Chat with the help desk.

> (Wendell, New hire, at the left) My trainer said the cable in the wall ends in a “punchdown block”. What is that?

**What is a punchdown block?**
(the options come in an order that depends on the seed of the question)
- Slots that take bare wires, no plug (right)
- The plug on the end of a fiber cable — if chosen: Fiber ends in ST, SC or LC plugs. A punchdown block has no plug.
- The power plug for an old drive or fan — if chosen: That is a Molex. A punchdown block carries no power to a drive.

After the answer: the deciding words are marked. Reason: A punchdown block holds the bare wire ends of cable, pushed down into slots with a punchdown tool. It is a connection point, not a plug.

#### Question in the draw: l12-g-micro

A chat, with its history: "Ximena, Warehouse", Chat with the help desk.

> (Ximena, Warehouse, at the left) The scanner’s cable has a very small flat plug that only goes in one way up. My old camera’s cable is bigger and does the same. Which is micro and which is mini?

**Which is which?**
(the options come in an order that depends on the seed of the question)
- The small flat one is micro USB; the bigger one is mini USB (right)
- The small flat one is mini USB; the bigger one is micro USB — if chosen: Reversed: micro is the smaller of the two.
- Both are Lightning plugs — if chosen: Lightning is Apple’s reversible 8-pin plug. These plugs go in one way up.

After the answer: the deciding words are marked. Reason: Micro USB is the small flat trapezoid and mini USB the bigger one, both for older devices. Lightning is Apple’s reversible plug.

#### Question in the draw: l12-k-db9

The question, read aloud as above: **A serial cable to a switch’s console port ends in a 9-pin D-shaped plug. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - DB9
  - DB 9
  - DB9 connector
  - D-sub 9
  - DE9
  - DE 9

After the answer: Reason: DB9 is the 9-pin D-shaped serial connector, used to configure network gear through its console port.

#### Question in the draw: l12-k-light

A chat, with its history: "Idris, Sales", Chat with the help desk.

> (Idris, Sales, at the left) I need a charging cable for my old iPhone 12. Its plug is small, 8 pins, and goes in either way up. What is that plug called?

**What is it called?**
(the options come in an order that depends on the seed of the question)
- Lightning (right)
- Micro USB — if chosen: Micro USB is a small flat trapezoid that goes in one way up, found on older non-Apple phones.
- Mini USB — if chosen: Mini USB is bigger, found on older cameras and GPS units.
- Thunderbolt — if chosen: Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.

After the answer: the deciding words are marked. Reason: Apple’s small reversible 8-pin plug on phones before USB-C is Lightning.

#### Question in the draw: l12-w-room

A chat, with its history: "Dina, Training", Chat with the help desk.

> (Dina, Training, at the left) The projector in room 4 says No signal. I plugged my laptop in with the HDMI cable on the table and nothing shows. I start in ten minutes.

A plain table, "What is in room 4":

> Part  |  What it has  (the column heads)
> Projector inputs  |  HDMI 1, HDMI 2, VGA
> Cable on the table  |  An HDMI cable, plugged into HDMI 2
> Dina’s laptop  |  Two USB-C ports and no HDMI port. The left port is marked with a small screen symbol; the right port has no mark. An adapter from USB-C to HDMI is in the right port.

**You press Source and the projector is already on HDMI 2. You swap in an HDMI cable you know works. It still says No signal. What does that show?**
(the options come in an order that depends on the seed of the question)
- The cable is not the cause of the No signal. (right)
- The input source is the cause. — if chosen: Source showed HDMI 2, the input the cable is in, so the input was already cleared.
- The projector is the broken part. — if chosen: Nothing has been tested on the projector itself. A second cable that gives the same result only clears the cable.
- The laptop is the broken part. — if chosen: Nothing has been tested on the laptop yet. The swap cleared the cable and nothing else.

After the answer: the deciding words are marked. Reason: The projector has an HDMI input and the cable plugs into it, so the setup can work. Source showed the right input, and a cable known to work gave the same No signal, so the input and the cable were cleared. The last thing left was the adapter’s USB-C port, and only one of the two carries video.
The working:
- Write down every cause along the signal path that fits “No signal”.: The projector listens to a different input than the one the cable is in; the cable; the adapter, or a laptop port that does not carry video; the laptop is not sending a picture.
- Check that the parts can do the job at all.: The adapter turns USB-C into HDMI, and an HDMI cable carries picture and sound. The projector has an HDMI input. The parts match. One thing is unknown: whether the right-hand USB-C port carries video, because only the left one is marked.
- Run the cheapest cut first.: Press Source on the remote: one button. It shows HDMI 2, the input the cable is in. The input is ruled out.
- Name your favorite cause and test it with a part known to work.: The cable: the last one in this room was bad. Swap in a cable known to work. It costs a minute.
- Test the next link, one change.: Move the adapter to the left USB-C port, the one with the screen symbol. The picture appears. The right port was for charging and data only.
- Look at the result.: The first guess was ruled out at the cost of a minute. The cheapest check came first and ruled out the input; the fault was the port, found by moving one thing.

#### Question in the draw: l12-s-photo

A chat, with its history: "Mira, Marketing", Chat with the help desk.

> (Mira, Marketing, at the left) I edit photos all day, and clients sit beside me at an angle and look at the screen from the side. I need a monitor whose colors stay true for them. Which kind of screen panel?

**Which panel?**
(the options come in an order that depends on the seed of the question)
- An IPS panel, which keeps its colors from the side (right)
- TN, the fast and cheap one — if chosen: A TN panel is the fastest and cheapest, but its colors fade when seen from the side.
- VA, the one with the deepest blacks — if chosen: A VA panel has the deepest blacks of the three, but its colors shift from the side more than IPS.

After the answer: the deciding words are marked. Reason: The need is true color from the side. IPS is the LCD panel made for that. TN is the fastest and cheapest, VA has the deepest blacks.

#### Question in the draw: l12-d-call

Hank in Sales calls the help desk about the projector in room 6. You answer.

**Hank calls about the projector. What do you say?**
- An incoming call from "Hank, Sales" (Incoming call · 9:40 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "The projector in room 6 says No signal. Just order a new one, it is broken. I have a client in twenty minutes." [pushes: He wants the biggest step before anything was tried.]
  - reply "I will put in an order for a new projector today.": the call ends (not this one): Nothing has been checked yet. An order costs money and days, and the first check costs one button. [slip: replaced a part before the cheap check]
  - reply "Swap the cable, then call me back.": the call ends (not this one): A cable swap is cheap but is not the cheapest cut, and it leaves Hank alone with a guess. The Source button is faster and names the link. [slip: ran a test that does not split what works from what does not]
  - reply "Press the Source button on the projector’s remote and read me the input it shows.": goes on to turn 2, where the pressure comes back
- turn 2, the other side says: "It shows VGA. The cable is in HDMI 1. But it is the second time this week the projector has had a problem, and I am sure it is broken." [pushes: He still wants it replaced.]
  - reply "It cannot be broken if the input menu comes up.": the call ends (not this one): The menu does not prove the projector is fine, and arguing leaves Hank no closer to a picture. Give him a next step instead. [slip: argued with the user or brushed off what they said]
  - reply "Twice in a week is annoying, and I will note it. The projector is listening to VGA while the cable is in HDMI 1. Choose HDMI 1 and tell me what you see.": the call ends (right): The projector listens to one input and it was on the wrong one; choosing the right one costs a button. His worry is heard and noted, and the plan stays with the cheap check.
  - reply "Understood, I will order one now.": the call ends (not this one): The projector was on the wrong input. Ordering a new one hides a one-button fix and lets the same mistake happen again. [slip: replaced a part before the cheap check]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: No signal sits on the input first. The cheapest cut is to read which input the projector listens to, and when the user pushes for a replacement, you keep to the check, say you heard the complaint, and give the next step.

#### Question in the draw: l12-d-dark

A chat, with its history: "Aiden, Sales", Chat with the help desk.

> (Aiden, Sales, at the left) My laptop screen is black, but if I hold a flashlight close to it I can just see my desktop.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The backlight or its inverter, the light behind the picture, has failed (right)
- Dead pixels, a patch of dots that no longer light — if chosen: Dead pixels are tiny dots. The whole screen is dark here.
- The wrong input source is chosen for the screen — if chosen: A laptop’s own screen has no input to choose, and the flashlight shows a picture is being made.
- Burn-in from an old image left on too long — if chosen: Burn-in leaves a faint ghost of an old image on a lit screen. The screen here is not lit.

After the answer: the deciding words are marked. Reason: The flashlight shows the desktop is on the panel, so the computer is sending a picture. What is missing is the light behind it: the backlight or what powers it. On older LCD screens that power part is the inverter, a small board that makes the high voltage a tube lamp needs.

#### Question in the draw: l12-d-tintmon

A chat, with its history: "Beatrix, Design", Chat with the help desk.

> (Beatrix, Design, at the left) My second monitor shows a pink tint all over. I reseated the cable at both ends and it is still pink.

A plain table, "What you tried":

> Test  |  Result  (the column heads)
> A cable known to work, same computer  |  Still pink
> The same monitor on a different computer  |  Still pink
> The monitor’s own color settings reset to the factory default  |  Still pink
> A different monitor on Beatrix’s computer  |  Normal colors

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Replace the monitor, or send it for repair (right)
- Try a third cable — if chosen: Two cables are already ruled out. A third repeats a test that has answered.
- Reinstall the graphics driver on Beatrix’s computer — if chosen: A different monitor looks normal on her computer, and this monitor is pink on another computer. The computer is cleared.
- Reseat the cable and swap the computer at the same time — if chosen: Two changes together would not say which one matters, and the table already points at the monitor.

After the answer: the deciding words are marked. Reason: A tint is usually the cable, so the cable comes first. Here the tests already cleared the cable and the computer: the pink follows the monitor. When the earlier tests point at a part, replacing it is right.

#### Question in the draw: l12-d-lamp

A chat, with its history: "Caspian, Training", Chat with the help desk.

> (Caspian, Training, at the left) The room 3 projector powers on and the fan runs, but there is no picture, not even the projector’s menu. The menu worked fine last week.

A plain table, "What the projector shows":

> Check  |  Result  (the column heads)
> Lamp warning light on the projector  |  On
> Lamp hours  |  5,040 of 5,000
> The projector’s own menu (not the laptop’s picture)  |  Dark

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Replace the projector lamp (right)
- Press Source until it finds an input — if chosen: The input does not matter: the projector’s own menu is dark too.
- Reseat the HDMI cable at both ends — if chosen: The cable carries the picture to the projector. The menu comes from inside the projector and is dark as well.
- Wait ten minutes for it to cool and try again — if chosen: Nothing points at overheating, and the hours are used up. Waiting gives the same result.

After the answer: the deciding words are marked. Reason: The fan runs and the menu is dark, so the cable and the input are not in question. The lamp warning light and the hours say the lamp is spent. Here the replacement is the right first step.

#### Question in the draw: l12-d-pixel

A chat, with its history: "Delphine, Purchasing", Chat with the help desk.

> (Delphine, Purchasing, at the left) There is a tiny dot near the middle of my new monitor that stays bright green. It stays there on every color and window.

**What is it?**
(the options come in an order that depends on the seed of the question)
- A stuck pixel in the panel (right)
- Burn-in from a still image — if chosen: Burn-in is a faint ghost of an old image that was on the screen a long time, not one bright dot.
- A loose cable at the back — if chosen: A loose cable spoils the whole picture, with flicker or a tint, not one dot.
- A resolution that is too high — if chosen: A wrong resolution makes the picture fuzzy or the wrong size, not one fixed dot.

After the answer: the deciding words are marked. Reason: A single dot that does not change with the picture is the panel’s own: a dead pixel stays dark and a stuck pixel stays one color. A cable or a setting would change the whole picture.

#### Question in the draw: l12-d-flash

A chat, with its history: "Emeric, Finance", Chat with the help desk.

> (Emeric, Finance, at the left) My monitor flashes on and off every few seconds. Yesterday I changed its refresh rate from 60 Hz to 144 Hz to see if it looked smoother.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Put the refresh rate back to 60 Hz, what it was (right)
- Reseat the cable at both ends — if chosen: A cheap check, but the flashing began right after the setting change, so it will probably not split anything.
- Put the refresh rate back and swap the cable — if chosen: Two changes at once: if the flashing stops, nobody knows which one fixed it.
- Order a new monitor because it keeps flashing on and off — if chosen: The flashing began with a settings change. Undo that first.

After the answer: the deciding words are marked. Reason: The flashing started right after the refresh rate was changed. Refresh rate is how many times a second the screen is redrawn, and one the monitor cannot handle makes it flash. Undo the change before looking at a part.

#### Question in the draw: l12-g-ppi

A chat, with its history: "Honor, Records", Chat with the help desk.

> (Honor, Records, at the left) We have two laptops. Both screens have the same resolution, 1920 by 1080. One is 13 inches across the corner, the other 17 inches. Which one looks sharper?

**Which is sharper?**
(the options come in an order that depends on the seed of the question)
- The 13 inch, with its pixels packed closer (right)
- The 17 inch, because a bigger screen shows more — if chosen: A bigger screen with the same pixels spreads them farther apart, so each one is easier to see.
- Neither, the same resolution looks the same — if chosen: Resolution counts the pixels. Pixel density counts them per inch, which changes with the size of the screen.

After the answer: the deciding words are marked. Reason: Resolution is how many pixels there are. Pixel density is how many fit in an inch. The same 1920 by 1080 on a 13 inch screen is denser, so sharper, than on a 17 inch screen.

#### Question in the draw: l12-g-touch

A chat, with its history: "Ignacio, Field team", Chat with the help desk.

> (Ignacio, Field team, at the left) I dropped my tablet and the glass is cracked. The picture is fine, but nothing happens when I touch the bottom third of the screen.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The digitizer, the touch-sensing layer (right)
- The backlight behind the glass has failed — if chosen: A failed backlight would darken the screen. The picture is fine.
- A wrong input source on the tablet — if chosen: A tablet’s own screen has no input source to choose.

After the answer: the deciding words are marked. Reason: The picture is fine, so the display and its light work. Only touch is lost in one area after a drop, which is the digitizer layer that senses touch.

#### Question in the draw: l12-d-dim

A chat, with its history: "Yvette, Training", Chat with the help desk.

> (Yvette, Training, at the left) The room 2 projector picture has been getting dimmer for months. Its menu says: Lamp 4,950 of 5,000 hours.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The lamp is nearly worn out (right)
- The projector is on the wrong input — if chosen: A wrong input shows No signal, not a dim picture.
- Burn-in from a still image — if chosen: Burn-in leaves a ghost of an old image, not a dim picture.

After the answer: the deciding words are marked. Reason: The menu shows the lamp at 4,950 of its 5,000 hours, and a slow dimming is what a lamp near the end of its life does.

#### Question in the draw: l12-r-mini

A salesperson says a new monitor has “a backlight made of thousands of tiny LEDs in zones that can dim separately”.

**Which kind of screen is that?**
(the options come in an order that depends on the seed of the question)
- Mini-LED (right)
- OLED — if chosen: An OLED has no backlight. Each dot makes its own light.
- TN — if chosen: TN is a kind of LCD panel with a fast response. It says nothing about the backlight’s zones.

After the answer: Reason: Mini-LED is an LCD whose backlight is thousands of tiny LEDs in separate zones. An OLED has no backlight at all.

#### Question in the draw: l12-d-trap

A chat, with its history: "Zephyr, Training", Chat with the help desk.

> (Zephyr, Training, at the left) The projector sits on a low cart and points up at the screen. The picture comes out wider at the top than the bottom, like a trapezoid.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Square the projector, or adjust keystone (right)
- Replace the lamp with a new one — if chosen: A lamp that is wearing out dims the picture. It does not change its shape.
- Change the input source on the remote — if chosen: A wrong input shows No signal. The picture here is showing.

After the answer: the deciding words are marked. Reason: A picture wider at the top than the bottom comes from a projector pointing up at an angle. The first check is the angle and the keystone setting, not a part.

#### Question in the draw: l12-r-fuzzy

A chat, with its history: "Amos, Training", Chat with the help desk.

> (Amos, Training, at the left) The projector picture is soft and blurry at the edges of the text. The laptop is set to the projector’s own resolution.

**What do you check?**
(the options come in an order that depends on the seed of the question)
- Turn the projector’s focus ring (right)
- Switch the laptop to a lower resolution — if chosen: The resolution is already native; a lower one would only stretch the picture.
- Replace the HDMI cable — if chosen: A bad cable gives flicker or a tint, not a soft focus.

After the answer: the deciding words are marked. Reason: Fuzzy has two causes: not native resolution, or focus. The first is cleared, so turn the focus ring.

#### Question in the draw: l12-r-gamut

A chat, with its history: "Blythe, Studio", Chat with the help desk.

> (Blythe, Studio, at the left) I edit video and the colors on my laptop look flat next to a client’s screen. The client’s screen shows more of the range of colors. What is that range called?

**What is the range called?**
(the options come in an order that depends on the seed of the question)
- Color gamut (right)
- Pixel density — if chosen: Pixel density is pixels per inch, about sharpness.
- Refresh rate — if chosen: Refresh rate is how many times a second the picture is redrawn.

After the answer: the deciding words are marked. Reason: The range of colors a screen can show is its color gamut. Pixel density is sharpness and refresh rate is how often the picture is redrawn.

#### Question in the draw: l12-r-aspect

A chat, with its history: "Corin, Training", Chat with the help desk.

> (Corin, Training, at the left) The picture on the projector looks stretched, like everyone is wide. The projector has the right focus and no shape problem.

**What do you check?**
(the options come in an order that depends on the seed of the question)
- The aspect ratio and the resolution the laptop sends (right)
- The lamp hours — if chosen: A tired lamp dims the picture. It does not stretch it.
- The keystone setting — if chosen: Keystone fixes a trapezoid from an angle, not a stretch.

After the answer: the deciding words are marked. Reason: A wrong size or stretch is a resolution or aspect ratio mismatch. Aspect ratio is the shape of the picture, wide 16 by 9 or squarer 4 by 3.

#### Question in the draw: l12-k-hot

A chat, with its history: "Jana, Training", Chat with the help desk.

> (Jana, Training, at the left) The room 5 projector shuts off by itself after about 20 minutes, then works after a rest. The fan gets loud before it goes.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- The vents and the dust filter (right)
- The lamp hours in the menu — if chosen: A cheap look, but a tired lamp dims the picture. It does not shut the projector down.
- Replace the lamp with a new one — if chosen: Nothing says the lamp is spent, and a spent lamp gives no image rather than a shutdown.
- The resolution on the laptop — if chosen: Resolution changes the size and sharpness of the picture, not the power.

After the answer: the deciding words are marked. Reason: A projector that shuts off after a while, with a loud fan first, is overheating. Dust and blocked vents are the cheap thing to check.

#### Question in the draw: l12-k-native

A chat, with its history: "Lou, HR", Chat with the help desk.

> (Lou, HR, at the left) My new 4K monitor (3840 by 2160 pixels) has fuzzy text. Windows says the resolution is 1280 by 720.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Switch Windows to native resolution (right)
- Replace the cable with a brand new one — if chosen: The picture shows, and the setting is plainly wrong. Fix the setting first.
- Turn the refresh rate down to 30 Hz — if chosen: Refresh rate is how often the picture is redrawn. It does not blur text.
- Order a new monitor this afternoon — if chosen: Nothing shows the monitor is at fault, and the setting is cheap to fix.

After the answer: the deciding words are marked. Reason: The monitor’s native resolution is 3840 by 2160 and Windows sends 1280 by 720, which the panel stretches. Switch it to native.

#### Question in the draw: l12-k-burn

A chat, with its history: "Lior, Lobby", Chat with the help desk.

> (Lior, Lobby, at the left) Our lobby OLED TV has shown the same schedule board all day for months. Now a faint outline of the board stays on the screen even when it shows a video.

**What is it?**
(the options come in an order that depends on the seed of the question)
- Burn-in (right)
- Dead pixels — if chosen: Dead pixels are single dots. This is an outline of the board.
- A loose cable — if chosen: A loose cable flickers or tints the whole picture.
- The wrong input source — if chosen: A wrong input shows No signal.

After the answer: the deciding words are marked. Reason: Months of one static image left an outline in an OLED screen. That is burn-in. A screen saver and changing content help prevent it, and it often cannot be undone.

#### Question in the draw: l14-w-priya

A chat, with its history: "Odette, Billing", Chat with the help desk.

> (Odette, Billing, at the left) Nothing loads on my computer. I think the internet is down for the whole office. I am plugged in with a cable, and the light by the cable is on.

The chain from the cable to a website: the link, the address, the mask and gateway, the name lookup, the service.

This desk’s rule: wall jacks and switch ports belong to the network team.

**Tom at the next desk says his websites load fine. What does that show?**
(the options come in an order that depends on the seed of the question)
- The line out and the router work, so the fault is on Odette’s side of them. (right)
- The router needs a restart, since it is the one box every computer in the office shares. — if chosen: Tom’s computer works through it, so it is not shown to be at fault, and a restart would knock the whole office offline for a minute.
- Odette’s browser is broken, since her cable and the light by it both look fine. — if chosen: Nothing has tested the browser. Her address and her name lookup are still on the list.

After the answer: the deciding words are marked. Reason: The favorite cause was the office connection, and one person next door cleared it. ipconfig then showed a 169.254 address: the link was up and DHCP was not reached. Two cheap swaps, the cable and the jack, split the computer from the wall, and nothing was restarted that other people use.
The working:
- Write the chain, so every cause has a place.: The link, the address, the mask and gateway, the name lookup, the service. “Nothing loads” could be any of the five.
- Name the favorite cause and cut with the cheapest test: another person on the same network.: The favorite is the office’s internet. Tom, at the next desk, loads sites fine. The office connection and the router are cleared, and the fault is somewhere on Odette’s side of them.
- Run ipconfig on Odette’s computer. It changes nothing.: The Ethernet adapter shows an IPv4 address of 169.254.31.77, a mask of 255.255.0.0 and an empty Default Gateway. The adapter is not “Media disconnected”, so link 1 is up. The computer made up its own address because no DHCP answer came: link 2 failed.
- Cut again: the cable against everything else. Swap in a cable known to work.: Same result, 169.254 again. The cable is ruled out.
- Plug Odette’s computer into Tom’s cable, which works.: It gets 192.168.1.57 at once, with a gateway. Her computer and its settings are fine, and the fault is her wall jack or its port on the switch.
- Get her working, then hand on with what you found.: Odette works from a spare jack. The network team gets the jack number, the 169.254 address, the cable swap and the result on Tom’s cable. Restarting the router would have fixed nothing and cut off the office.

#### Question in the draw: l14-p-disc

A chat, with its history: "Wen, Legal", Chat with the help desk.

> (Wen, Legal, at the left) My desktop says there is no network. It was fine yesterday. The cleaners were in last night.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Media State  |  Media disconnected
> Connection-specific DNS Suffix  |  (empty)

Chain: the link, the address, the mask and gateway, the name lookup, the service.

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The link: the cable, the jack or the adapter (right)
- The address that DHCP should have handed to the computer — if chosen: No address can be handed out until a link exists. The address step has not even been tried.
- The name lookup that turns names into numbers — if chosen: A name lookup needs an address and a way out first. It is link 4.
- The service, the website at the far end — if chosen: The service is the last link. The computer has no connection to reach anything.

After the answer: the deciding words are marked. Reason: Media disconnected means the computer sees no connection at the cable end, so the fault is link 1 and links 2 to 5 cannot work. The cheapest tests change nothing: push both ends of the cable in, look at the light by the switch port, then try a cable known to work.

#### Question in the draw: l14-p-gw

A chat, with its history: "Rana, Accounting", Chat with the help desk.

> (Rana, Accounting, at the left) No website will open. The shared drive on the office server still works.

A plain table, "C:\> ipconfig":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.42
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.1":

> What the computer prints  (the column heads)
> Pinging 192.168.1.1 with 32 bytes of data:
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
> Reply from 192.168.1.1: bytes=32 time=2ms TTL=64
> Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

A plain table, "C:\> ping 8.8.8.8":

> What the computer prints  (the column heads)
> Pinging 8.8.8.8 with 32 bytes of data:
> Request timed out.
> Request timed out.
> Request timed out.
> Request timed out.
> Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)

**Where does the chain break?**
(the options come in an order that depends on the seed of the question)
- Past the gateway: the router’s line out to the internet (right)
- The cable between the computer and the router, which is loose — if chosen: The gateway answered all four pings, so the cable and the link are working.
- The computer’s own address, which was never handed out — if chosen: ipconfig shows a good address, and the gateway’s replies needed one.
- The name lookup, which turns names into numbers — if chosen: The failed ping was to a number, which needs no lookup. The lookup was never used.

After the answer: the deciding words are marked. Reason: The gateway replied, so links 1 to 3 work on the computer’s side of the router. The ping to 8.8.8.8 needs no name lookup and still failed, so the break is past the router: its line out, the modem or the provider. The server still works because it is inside the office, and the shared drive never leaves it.

#### Question in the draw: l14-x-call

Ula in Marketing calls the help desk. You answer.

**Ula calls about her internet. What do you say?**
- An incoming call from "Ula, Marketing" (Incoming call · 9:10 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "The internet is down. The woman next to me is fine, only mine. There is a yellow triangle on the little network picture by the clock. Please fix it." [pushes: She wants it fixed now. She has not said how her computer is connected.]
  - reply "So it is only your computer, and your neighbor is fine. Click the little network picture by the clock and read me the name next to it.": goes on to turn 2, where the pressure comes back
  - reply "Is anyone near you having the same trouble, or is it only your computer?": the call ends (not this one): She had just told you: her neighbor is fine, only hers. Asking again shows her you were not listening. Say it back, then give her one thing to look at. [slip: did not say the story back to check it]
  - reply "I will restart the router for you now.": the call ends (not this one): Her neighbor is fine through the same router, so it is cleared, and a restart drops everyone in the office. [slip: restarted or changed shared equipment that other people rely on]
  - reply "Open a command window and type ipconfig slash all, then read me the lines.": the call ends (not this one): She does not know what a command window is, and she is in a hurry. Give her something she can read off the screen. [slip: used words the user may not know]
  - reply "It is probably your Wi-Fi.": the call ends (not this one): Nothing said how she is connected. A cause told to her before it is known can send both of you the wrong way. [slip: told the user a cause before knowing it]
  - reply "I will arrange a new laptop for you.": the call ends (not this one): No test has been run, so a new laptop or a driver reinstall is a guess that costs time or money. [slip: replaced a part before the cheap check]
- turn 2, the other side says: "It says Ethernet. I have a call at ten. Can you just fix it from there?" [pushes: She wants it fixed from your side before her call.]
  - reply "Not yet; it is one look. Check that the cable is pushed in at both ends and whether a light is on beside it, then tell me. I will keep this ticket open.": the call ends (right): Her neighbor is fine, so the office connection and the router are cleared, and Ethernet means a cable, so link 1 is the cheapest next look. The yellow triangle only means Windows could not confirm internet; it does not say which link failed.
  - reply "Yes, let me restart the router, then.": the call ends (not this one): Her neighbor is fine through the same router, so it is cleared, and a restart drops everyone in the office. [slip: restarted or changed shared equipment that other people rely on]
  - reply "I will reinstall the network driver on your computer from here.": the call ends (not this one): No test has been run, so a new laptop or a driver reinstall is a guess that costs time or money. [slip: replaced a part before the cheap check]
  - reply "It will be working before your call, I promise.": the call ends (not this one): Nothing is known yet, so the result is not in your hands. Give her the next look instead. [slip: promised a result that was not in their hands]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: She gave the cut herself: only her computer is affected. Saying it back confirms it, and one thing she can read from the screen, how she is connected, picks the next cheap test. The yellow triangle means only that Windows could not confirm internet; the light, the name by the picture and ipconfig say which link.

#### Question in the draw: l14-s-slow

A chat, with its history: "Kai, Design", Chat with the help desk.

> (Kai, Design, at the left) My laptop is slow on Wi-Fi at the far desk. A computer on a cable next to me is fast. We open the same sites.

**Which test cuts the causes in half?**
(the options come in an order that depends on the seed of the question)
- Plug the same laptop into a cable and run the same download (right)
- Ping the website from the cabled computer next to him and read the times — if chosen: That computer is already fast. Its times say nothing about what the radio link does for the laptop.
- Restart the office router and then the laptop together — if chosen: Two changes at once, and a restart that drops everyone, rule nothing out.
- Replace the laptop’s Wi-Fi card with a new one — if chosen: Nothing has shown the card at fault, and the cable test is free.

After the answer: the deciding words are marked. Reason: Slow only over Wi-Fi at one desk points at the radio link: signal, distance or interference. A cable test with the same laptop splits the Wi-Fi from the laptop and the internet, and changes nothing.

#### Question in the draw: l14-s-auth

A chat, with its history: "Lia, HR", Chat with the help desk.

> (Lia, HR, at the left) The office Wi-Fi password was changed on Monday. My laptop now says it cannot connect. My phone, which I joined with the new password, is fine.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Forget the network on the laptop and join again with the new password (right)
- Run ipconfig /renew, then try the old password again — if chosen: The laptop never got far enough to request an address, and the old password is still refused.
- Type in a static address on the laptop to skip the password step — if chosen: A fixed address does not remove the password. The Wi-Fi still has to let the laptop on.
- Replace the laptop’s Wi-Fi card, since the phone works — if chosen: The card finds the network. It is the saved password that fails.

After the answer: the deciding words are marked. Reason: A phone that joined with the new password works, so the network is fine. The laptop is being refused at the link: a wrong or changed password is the usual cause of an authentication failure.

#### Question in the draw: l14-g-wifi

A chat, with its history: "Rae, Warehouse", Chat with the help desk.

> (Rae, Warehouse, at the left) The Wi-Fi drops about every ten minutes at the back dock, then comes back. The laptops on cables in the office never drop.

**Which test cuts the causes in half?**
(the options come in an order that depends on the seed of the question)
- Stand beside the access point with the same laptop and watch it (right)
- Replace the laptop’s Wi-Fi card with one from stock — if chosen: Nothing has shown the card at fault, and the cabled laptops say nothing about it either way.
- Ping the access point from a cabled computer in the office and compare — if chosen: A cabled computer never uses the radio link, so a good result there says nothing about the dock.
- Restart the office router to refresh the wireless network — if chosen: It drops everyone and rules nothing out, since the drops would come back.

After the answer: the deciding words are marked. Reason: Intermittent wireless that drops in one place and never on a cable points at the radio side: signal strength, distance or interference at the dock. Moving the same laptop next to the access point is a free test that splits the place from the laptop.

#### Question in the draw: l14-k-gwping

A chat, with its history: "Sol, Planning", Chat with the help desk.

> (Sol, Planning, at the left) Nothing opens, not the websites and not the shared drive.

A plain table, "C:\> ipconfig":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.77
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.1":

> What the computer prints  (the column heads)
> Pinging 192.168.1.1 with 32 bytes of data:
> Request timed out.
> Request timed out.
> Request timed out.
> Request timed out.
> Packets: Sent = 4, Received = 0, Lost = 4 (100% loss)

**What does this show?**
(the options come in an order that depends on the seed of the question)
- No further than the router: the computer’s connection to it, or the router (right)
- The name lookup has failed, since no name could be turned into a number at all — if chosen: The ping was to a number, so no lookup was used.
- The internet provider has a problem somewhere past the office — if chosen: The ping never got past the office router, so the provider was not involved yet.
- The router is broken, because it did not answer any of the four pings — if chosen: Four timeouts from the gateway do not prove the router is broken: it may ignore pings, or the cable, the port or this computer may be at fault. Test another computer and a cable known to work.

After the answer: the deciding words are marked. Reason: The address looks good, so the fault is not link 2. The gateway is the first stop beyond the computer. Silence from it means the break is on this side of the router or at the router, and another computer pinging the same gateway, or a cable known to work, splits the two.

#### Question in the draw: l14-r-flap

A chat, with its history: "Bo, Network team", Chat with the help desk.

> (Bo, Network team, at the left) The switch log shows port 14 going up and down every few seconds. One desk computer is plugged into it.

**Which test comes first?**
(the options come in an order that depends on the seed of the question)
- Swap the cable for one known to work (right)
- Restart the whole switch — if chosen: It drops every port, and the cause is probably one cable.
- Replace the desk computer — if chosen: Nothing has been tested on the computer yet.
- Look at the DNS servers the computer was given — if chosen: DNS is link 4. A port going up and down is link 1.

After the answer: the deciding words are marked. Reason: A port that keeps going up and down is called flapping, and it is a fault on link 1. A cable known to work is the cheapest cut.

#### Question in the draw: l14-r-jitter

A chat, with its history: "Dru, Reception", Chat with the help desk.

> (Dru, Reception, at the left) Calls on the desk phones, which go over the office network, are choppy every afternoon. Web pages load fine. It is worst when the video files upload.

**What fits?**
(the options come in an order that depends on the seed of the question)
- Jitter: the busy line delays call packets unevenly (right)
- The phones’ DNS records are wrong, so calls cannot connect — if chosen: Wrong records would stop calls from connecting, not make them choppy at one time of day.
- Every phone needs replacing, since they all sound bad — if chosen: All of them are choppy at once, and at one time of day. That points at the shared line.
- The phones need a new password after the last change — if chosen: A password problem would block them at sign-in, not break up the sound.

After the answer: the deciding words are marked. Reason: Latency is the delay for a packet (a small piece of data) to arrive; jitter is delay that varies. Either makes choppy calls over the network (VoIP). Poor call quality that comes and goes with the load is jitter, often with some lost packets. The line is shared, so the cure is found by looking at what uses it.

#### Question in the draw: l14-r-drops

A chat, with its history: "Ned, Operations", Chat with the help desk.

> (Ned, Operations, at the left) Every few hours the whole office loses the internet for a minute or two. The file server never drops.

**Which link, and what do you do?**
(the options come in an order that depends on the seed of the question)
- Past the router, the line out: leave a ping to 8.8.8.8 running (right)
- Each person’s Wi-Fi card, so replace them one by one until it stops — if chosen: Everyone drops at once, and the server inside never does.
- The file server, so restart it — if chosen: It never drops. It is the part that works.
- The DNS records, so edit them — if chosen: The whole connection goes away, not only names.

After the answer: the deciding words are marked. Reason: An office that drops together while its own server stays up points past the router. A ping to a number left running records when it fails, and that goes to the provider.

#### Question in the draw: l14-r-nic

A chat, with its history: "Wen, Legal", Chat with the help desk.

> (Wen, Legal, at the left) My desktop still says there is no network. Yesterday you swapped the cable and moved me to another jack. A laptop works on the same cable and the same jack.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Media State  |  Media disconnected
> Adapter in Device Manager  |  Enabled, no errors

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Replace the desktop’s network adapter: the cable and the jack are cleared (right)
- Restart the office router in case it stopped handing out addresses — if chosen: The adapter does not see a link at all, which comes before any address. A restart would also drop everyone.
- Run ipconfig /renew, then check again — if chosen: The adapter has no link, so there is nothing to renew.
- Type in a static address on the desktop — if chosen: An address cannot be used until the adapter has a link.

After the answer: the deciding words are marked. Reason: A cable and a jack that work for a laptop clear the cable, the jack and the switch port. Media disconnected still says the desktop sees no link, so the part left is its adapter. After the cheap tests have pointed there, replacing it is the right step.

#### Question in the draw: l14-p-apipa

A chat, with its history: "Hal, Sales", Chat with the help desk.

> (Hal, Sales, at the left) Since I plugged my laptop in at the new desk, a yellow warning says limited connectivity and no page loads. The light by the cable is on.

A plain table, "C:\> ipconfig (the Ethernet adapter)":

> Setting  |  Value  (the column heads)
> Autoconfiguration IPv4 Address  |  169.254.31.77
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  (empty)

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The address: DHCP was not reached (right)
- The link: the cable is faulty or loose at one end — if chosen: The light is on and Windows reports a working adapter. It could build its own address only because the adapter is up.
- The name lookup that turns names into numbers — if chosen: There is no gateway to send a lookup through. The address step failed before this link.
- The website, which is not answering today — if chosen: No website has been tried. The computer has no good address to try one with.

After the answer: the deciding words are marked. Reason: A 169.254 address, a mask of 255.255.0.0 and no gateway are what Windows builds for itself when no DHCP server answers. The link is up, so link 2 failed. The next cheap tests: ipconfig /renew to request one again, then another jack or a computer known to work on this one, to split the port from the DHCP service.

#### Question in the draw: l14-s-lease

A chat, with its history: "Gina, Office manager", Chat with the help desk.

> (Gina, Office manager, at the left) Three new hires plugged in today and none of them can get on. Their laptops show 169.254 addresses. Everybody who was here yesterday is fine.

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope (addresses it may hand out)  |  192.168.1.100 to 192.168.1.119
> Addresses in the scope  |  20
> Addresses leased now  |  20
> Lease time  |  8 days

**Why did the new laptops get 169.254 addresses?**
(the options come in an order that depends on the seed of the question)
- The scope has no free address left, so the server had none to give (right)
- Three new network adapters all failed on the same morning — if chosen: Three at once, with everyone else fine, points at the one thing they share: the list of addresses, not three adapters.
- The router has run out of public addresses to share with new laptops — if chosen: Public addresses are the internet side. These laptops asked for private ones from the local scope.
- The three new laptops run a newer version of Windows than the old ones — if chosen: The Windows version does not decide whether the server has an address left to give. Everyone else is fine, and the list is full.

After the answer: the deciding words are marked. Reason: The scope is the range the server may hand out, and every address in it is leased. The fix is on the DHCP server: widen the scope, or shorten the lease so addresses of people who left come back sooner. Typing addresses into the laptops would hide the full scope and invite conflicts.

#### Question in the draw: l14-s-private

A chat, with its history: "Ola, Network team", Chat with the help desk.

> (Ola, Network team, at the left) A vendor sent us a list of the addresses they plan to put on the new cameras. We use private addresses inside the building. Which of these are private?

**Pick every private address.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- 172.20.14.9 (right)
- 192.168.40.2 (right)
- 172.32.0.5 — if chosen: The private block runs from 172.16 to 172.31. 172.32 is just outside it, so it is public.
- 169.254.8.8 — if chosen: A 169.254 address is not private: Windows makes it up when DHCP does not answer.
- 8.8.4.4 — if chosen: It is outside all three private blocks, so it is public.

After the answer: Reason: The three private blocks are 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255 and 192.168.0.0 to 192.168.255.255. Anything else is public, apart from the self-made 169.254 range and 127.0.0.1, which is the computer itself.

#### Question in the draw: l14-r-apipa

The question, read aloud as above: **What are the first two numbers of the address Windows gives itself when no DHCP server answers?**

**Type the two numbers.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 169.254
  - 169.254.x.x
  - 169.254.0.0

After the answer: Reason: Windows builds an address in the 169.254 range (APIPA, automatic private IP addressing), with mask 255.255.0.0 and no gateway, when it calls on DHCP and nothing answers. Seeing it means DHCP was not reached.

#### Question in the draw: l14-s-ipv6

A chat, with its history: "Moe, Sales", Chat with the help desk.

> (Moe, Sales, at the left) ipconfig shows an address starting fe80:: under my adapter. Is that the 169.254 problem again?

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- No: fe80:: is the normal local IPv6 address; read the IPv4 lines (right)
- Yes: it also means DHCP was not reached, so check the link light — if chosen: A 169.254 address is the warning. fe80:: is made for the local network on purpose and always there.
- Yes: IPv6 has failed, so turn it off on the adapter — if chosen: Nothing has failed, and turning IPv6 off would not fix an IPv4 fault.
- No: it is a public IPv6 address that anyone online can reach — if chosen: fe80:: works only on the local network and is never reached from the internet.

After the answer: the deciding words are marked. Reason: IPv6 addresses are 128 bits in hexadecimal. The one starting fe80:: is link-local: it works only on the local network and is always present. The warning sign is an IPv4 address starting 169.254.

#### Question in the draw: l14-s-alldown

A chat, with its history: "Gus, Office manager", Chat with the help desk.

> (Gus, Office manager, at the left) Everyone in the building has the yellow warning this morning, and every laptop shows a 169.254 address. The router’s lights look odd after last night’s power cut.

A plain table, "Gus’s network notes":

> Detail  |  Value  (the column heads)
> Where addresses come from (DHCP)  |  The router
> Other DHCP servers  |  None

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Restart the router, which runs DHCP; everyone is already down (right)
- Type in a static address on each laptop so people can start work — if chosen: It hides a fault that sits in one box and creates dozens of hand-typed addresses to undo.
- Run ipconfig /flushdns on every laptop in turn — if chosen: Saved name answers have nothing to do with laptops that have no address.
- Replace the network adapter in the first laptop — if chosen: Every laptop has the same sign, so the shared box is the cause, not one adapter.

After the answer: the deciding words are marked. Reason: Everyone getting 169.254 at once means the DHCP service is not answering for the whole building, and here it is the router after a power cut. A restart is right this time because nobody is online to lose and the cause is that one box.

#### Question in the draw: l14-g-vlan

A chat, with its history: "Quin, Office", Chat with the help desk.

> (Quin, Office, at the left) I plugged a new laptop into the jack by the conference phone. It got 10.50.8.12 and the file server will not open. My own laptop on a normal jack has 10.20.4.31 and works. The server fails by its address too, not only by name.

A plain table, "What the network team says":

> Fact  |  Value  (the column heads)
> File server  |  10.20.1.5
> Normal jacks  |  Addresses 10.20.x.x
> Phone jacks  |  Addresses 10.50.x.x

**What explains it?**
(the options come in an order that depends on the seed of the question)
- The phone jack is in another VLAN, a separate network (right)
- The laptop made up a 169.254 address when DHCP was not reached — if chosen: Its address starts 10.50. A DHCP server handed it out.
- The file server needs a fixed address, not a handed-out one — if chosen: The server works for the laptop on the normal jack, so its address is not the problem.
- The laptop’s DNS server is down, so the server name fails — if chosen: It fails by address too, since the server is on another network, so a lookup is not the missing link.

After the answer: the deciding words are marked. Reason: Computers on different VLANs cannot reach each other unless a router passes traffic between them, and each VLAN has its own addresses. The phone jack hands out 10.50.x.x, and the server is on 10.20.x.x. The fix is a data jack, or the network team moving that port.

#### Question in the draw: l14-g-conflict

A chat, with its history: "Eli, Front desk", Chat with the help desk.

> (Eli, Front desk, at the left) The front desk printer keeps dropping off. A few times a day Windows on some computer says there is an IP address conflict. Last month we typed 192.168.1.130 into the printer by hand.

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope  |  192.168.1.100 to 192.168.1.199
> Exclusions  |  None

**What fixes it for good?**
(the options come in an order that depends on the seed of the question)
- Exclude 192.168.1.130 from the scope so it is never handed out (right)
- Shorten the lease time to one hour so that addresses are handed back sooner — if chosen: The server would still hand out .130 to any laptop in turn.
- Restart the printer every morning before the office opens — if chosen: It clears the conflict for a while. It returns the next time .130 is given out.
- Type an address into every laptop too, outside the scope — if chosen: More hand-typed addresses mean more chances for two devices to share one.

After the answer: the deciding words are marked. Reason: An address conflict is two devices holding one address. The printer’s hand-typed address sits inside the range the server hands out, so the cure is an exclusion: an address in the scope the server must never give away.

#### Question in the draw: l14-s-samenet

A chat, with its history: "Ben, Front desk", Chat with the help desk.

> (Ben, Front desk, at the left) We bought a new printer. I cannot print to it from my computer. Both of us are plugged into the same switch.

A plain table, "What the computer and the printer show":

> Detail  |  Computer  |  Printer  (the column heads)
> IPv4 address  |  192.168.1.42  |  192.168.2.80
> Subnet mask  |  255.255.255.0  |  255.255.255.0
> How it got its address  |  DHCP  |  Typed in by hand

A plain table, "The DHCP server’s list":

> Detail  |  Value  (the column heads)
> Scope  |  192.168.1.100 to 192.168.1.199
> Free outside the scope  |  192.168.1.80 (nothing uses it)

**What is the one change?**
(the options come in an order that depends on the seed of the question)
- Change the printer’s typed-in address to 192.168.1.80, which is on the computer’s network and outside the scope (right)
- Change the computer’s mask to 255.255.0.0 so that the printer counts as local — if chosen: That edits the computer to suit one typo, and every other device would still see the printer as another network.
- Run ipconfig /renew on the computer — if chosen: The computer’s address is fine. The printer’s is the one on the wrong network.
- Plug the printer into a different port on the switch — if chosen: It is on the same switch already, and the addresses show the problem. A different port keeps the same address.

After the answer: the deciding words are marked. Reason: The mask 255.255.255.0 says the first three numbers must match for two devices to share a network. The computer is 192.168.1 and the printer 192.168.2, so they are on different networks, and the printer has no way in. Giving the printer an address that starts 192.168.1 and sits outside the scope fixes the one thing that is wrong.

#### Question in the draw: l14-s-mask

A chat, with its history: "Tobias, Accounts", Chat with the help desk.

> (Tobias, Accounts, at the left) I can open the shared drive on this floor, but not the payroll server upstairs. My neighbor can open both. I typed my own address settings last week.

A plain table, "C:\> ipconfig on Tobias’s computer":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.50
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ipconfig on the neighbor’s computer":

> Setting  |  Value  (the column heads)
> IPv4 Address  |  192.168.1.71
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

The payroll server is at 192.168.2.10. The router connects the two floors.

**What explains it?**
(the options come in an order that depends on the seed of the question)
- The mask he typed is too wide, so his computer treats 192.168.2.10 as local and never sends it to the gateway (right)
- The gateway is typed wrong, because the shared drive on his floor opens — if chosen: His gateway, 192.168.1.1, is the same as his neighbor’s, and the neighbor reaches the server.
- His address is a duplicate of another computer’s — if chosen: A duplicate would break the drive on his floor too, and Windows would warn him.
- The payroll server is down for him but up for his neighbor — if chosen: A server is not down for one person. What differs is the mask in his settings.

After the answer: the deciding words are marked. Reason: The mask tells a computer which addresses are on its own network. His 255.255.0.0 is wider than the office’s 255.255.255.0, so the server upstairs looks local and he sends to it directly, where nothing answers. Anything outside the local network goes through the gateway. Setting the adapter back to automatic, or typing the same mask as his neighbor, is one change.

#### Question in the draw: l14-s-spoof

A chat, with its history: "Gina, Office manager", Chat with the help desk.

> (Gina, Office manager, at the left) A customer says they got an email that looked like it was from our domain asking them to pay a new bank account. We never sent it. Our domain has an SPF record already.

**Which record tells other mail servers what to do with mail that fails the checks?**
(the options come in an order that depends on the seed of the question)
- A DMARC record, which says what to do with mail that fails (right)
- A DKIM record, which lists the servers allowed to send — if chosen: DKIM carries what lets receivers check a message’s digital signature. SPF is the one that lists the servers allowed to send.
- An MX record, which says where the domain’s email is delivered — if chosen: An MX record is for mail coming in to the domain. It says nothing about what to do with forged mail.
- A CNAME record, which makes one name an alias for another — if chosen: A CNAME points a name at another name. It has no part in email checks.

After the answer: the deciding words are marked. Reason: SPF lists who may send, DKIM adds a signature the receiver can check, and DMARC tells the receiver what to do when those checks fail. All three live in TXT records. The domain already has the first, so the missing piece is the instruction.

#### Question in the draw: l14-k-renew

A chat, with its history: "Tess, Design", Chat with the help desk.

> (Tess, Design, at the left) My laptop joined the office Wi-Fi but says limited and nothing loads. My phone on the same Wi-Fi is fine.

A plain table, "C:\> ipconfig (the Wi-Fi adapter)":

> Setting  |  Value  (the column heads)
> Autoconfiguration IPv4 Address  |  169.254.77.5
> Subnet Mask  |  255.255.0.0
> Default Gateway  |  (empty)

**Which test comes next?**
(the options come in an order that depends on the seed of the question)
- Run ipconfig /renew, so the laptop requests an address again (right)
- Type in a static address on the laptop so that it connects — if chosen: It hides the fault, and an address chosen by hand can collide with one the server hands out.
- Restart the office router so that it hands out addresses again — if chosen: The phone is fine through it. A restart drops everyone for a problem that is on one laptop.
- Run ipconfig /flushdns to clear the saved name answers — if chosen: That empties saved name answers. The laptop has no address yet, so names are not the problem.

After the answer: the deciding words are marked. Reason: The 169.254 address says the laptop got no answer from DHCP, and the phone shows the server works. Requesting again with ipconfig /renew is the cheapest cut: if it gets a good address, the first request was lost, and if not, look at the laptop’s Wi-Fi connection.

#### Question in the draw: l14-k-gate

A chat, with its history: "Zoe, Frontdesk", Chat with the help desk.

> (Zoe, Frontdesk, at the left) The shared drive opens, but no website does. I typed in my own address settings last week to fix a printer.

A plain table, "C:\> ipconfig /all on Zoe’s computer":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  No
> IPv4 Address  |  192.168.1.50
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.254

A plain table, "C:\> ipconfig /all on the computer next to hers":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  Yes
> IPv4 Address  |  192.168.1.71
> Subnet Mask  |  255.255.255.0
> Default Gateway  |  192.168.1.1

A plain table, "C:\> ping 192.168.1.254":

> What the computer prints  (the column heads)
> Pinging 192.168.1.254 with 32 bytes of data:
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Reply from 192.168.1.50: Destination host unreachable.
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**What is the fault?**
(the options come in an order that depends on the seed of the question)
- The gateway typed in by hand is not the router’s address (right)
- DHCP gave her a bad lease that has not yet run out — if chosen: DHCP Enabled says No, so the numbers were typed in.
- The subnet mask is wrong and does not match the network — if chosen: Her mask matches her neighbor’s, 255.255.255.0.
- The cable is faulty, so part of the traffic is lost on the way — if chosen: The shared drive opens and the message came from her own address, so the link works.

After the answer: the deciding words are marked. Reason: Computers on the same local network reach each other directly, so the shared drive works. Anything outside needs the gateway, and the one she typed in matches no device. A static address means every number is typed by hand and must match the router. Setting the adapter back to automatic is one change.

#### Question in the draw: l14-r-mx

The question, read aloud as above: **Which kind of DNS record says where email for a domain is delivered?**

**Type the record name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - MX
  - MX record
  - mail exchange
  - mail exchanger

After the answer: Reason: An MX record (mail exchange) names the mail servers that receive email for the domain.

#### Question in the draw: l14-r-aaaa

The question, read aloud as above: **Which kind of DNS record holds a name’s IPv6 address?**

**Type the record name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - AAAA
  - AAAA record

After the answer: Reason: An AAAA record holds an IPv6 address. An A record holds an IPv4 address.

#### Question in the draw: l14-r-spf

The question, read aloud as above: **Which spam-fighting TXT record lists the servers allowed to send email for a domain?**

**Type the three letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SPF
  - Sender Policy Framework

After the answer: Reason: SPF lists the sending servers. DKIM carries what checks a message’s digital signature, and DMARC says what to do with mail that fails those checks.

#### Question in the draw: l14-r-cname

The question, read aloud as above: **Which kind of DNS record makes one name an alias for another name?**

**Type the record name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - CNAME
  - CNAME record
  - canonical name

After the answer: Reason: A CNAME record points one name at another name. An A record points a name at an IPv4 address.

#### Question in the draw: l14-r-bits

The question, read aloud as above: **How many bits long is an IPv6 address?**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 128

After the answer: Reason: An IPv6 address is 128 bits, written as eight groups of hexadecimal digits. An IPv4 address is 32 bits.

#### Question in the draw: l14-r-vpn

A chat, with its history: "Isa, Remote", Chat with the help desk.

> (Isa, Remote, at the left) From home the intranet site (the company’s own internal website) and the shared drives will not open, but ordinary websites do. What should I do?

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Connect the VPN, which reaches the internal sites (right)
- Type in a static address from the office range to reach them — if chosen: An address from the office range does nothing at her home, where the router hands out the addresses.
- Switch the home network to Public to hide her computer — if chosen: It would hide her computer and reach nothing at the office.
- Flush the DNS cache and try the sites again — if chosen: Websites open, so names work. The internal sites sit behind the tunnel.

After the answer: the deciding words are marked. Reason: Internal sites and drives sit inside the company network. Ordinary sites work from home, so the connection is fine, and the VPN is what reaches the rest.

#### Question in the draw: l14-r-dkim

The question, read aloud as above: **Which spam-fighting TXT record lets receivers check a message’s digital signature?**

**Type the four letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - DKIM
  - DomainKeys Identified Mail

After the answer: Reason: DKIM adds a signature that receivers check. SPF lists the servers allowed to send, and DMARC says what to do with mail that fails.

#### Question in the draw: l14-p-dns

A chat, with its history: "Joel, Shipping", Chat with the help desk.

> (Joel, Shipping, at the left) Every website says it cannot be reached. I have a network and everything.

A plain table, "C:\> ping 8.8.8.8":

> What the computer prints  (the column heads)
> Pinging 8.8.8.8 with 32 bytes of data:
> Reply from 8.8.8.8: bytes=32 time=14ms TTL=117
> Reply from 8.8.8.8: bytes=32 time=13ms TTL=117
> Reply from 8.8.8.8: bytes=32 time=14ms TTL=117
> Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

A plain table, "C:\> ping www.example.com":

> What the computer prints  (the column heads)
> Ping request could not find host www.example.com. Please check the name and try again.

**Which link failed?**
(the options come in an order that depends on the seed of the question)
- The name lookup (DNS) (right)
- The gateway that leads out of the office — if chosen: The ping to 8.8.8.8 went out through the gateway and came back.
- The link, the cable or the Wi-Fi — if chosen: Four replies from outside the office mean the cable or Wi-Fi works.
- The website, which is down for everyone — if chosen: The message says the name was not found. No website was asked, so none can be called down.

After the answer: the deciding words are marked. Reason: A ping to a number works, so links 1 to 3 work and the way out is open. The same computer cannot turn a name into a number: link 4, DNS. The cheap tests next: nslookup shows which DNS server was asked and whether it answered, and ipconfig /all shows that server’s address.

#### Question in the draw: l14-s-nslookup

A chat, with its history: "Dee, HR", Chat with the help desk.

> (Dee, HR, at the left) Websites will not load on my computer. The person next to me is fine. I can ping 8.8.8.8 and it answers.

A plain table, "C:\> ipconfig /all on Dee’s computer":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  No
> IPv4 Address  |  192.168.1.64
> Default Gateway  |  192.168.1.1
> DNS Servers  |  192.168.1.5

A plain table, "C:\> ipconfig /all on the computer next to hers":

> Setting  |  Value  (the column heads)
> DHCP Enabled  |  Yes
> IPv4 Address  |  192.168.1.71
> Default Gateway  |  192.168.1.1
> DNS Servers  |  192.168.1.1

A plain table, "C:\> nslookup www.example.com":

> What the computer prints  (the column heads)
> DNS request timed out.
>     timeout was 2 seconds.
> Server:  UnKnown
> Address:  192.168.1.5
> DNS request timed out.
> *** Request to UnKnown timed-out

**What is the fault, and the cheapest fix?**
(the options come in an order that depends on the seed of the question)
- A DNS address typed in by hand no longer answers: switch to automatic (right)
- The gateway is wrong, so nothing she sends can leave the office at all — if chosen: The ping to 8.8.8.8 went out through the gateway and came back.
- The websites she wants are down, which is why the lookup timed out — if chosen: No website was reached. The lookup of the name timed out first, and her neighbor gets through.
- DHCP gave her a bad lease that has not yet expired — if chosen: DHCP Enabled says No. Her numbers were typed in by hand, so no lease was handed out.

After the answer: the deciding words are marked. Reason: Pings to a number work, so the link, address and gateway are fine. nslookup shows the DNS server it asked, 192.168.1.5, and that server does not answer. Her neighbor uses 192.168.1.1. A DNS address typed in long ago is the likely cause, and choosing “obtain DNS automatically” is one change that can be undone.

#### Question in the draw: l14-s-tracert

A chat, with its history: "Ken, IT manager", Chat with the help desk.

> (Ken, IT manager, at the left) The whole office lost the internet at 10:05. Pings to 8.8.8.8 time out as well. I ran tracert to a website.

A plain table, "C:\> tracert www.example.com":

> What the computer prints  (the column heads)
> Tracing route to www.example.com [203.0.113.20] over a maximum of 30 hops:
> 1   <1 ms   <1 ms   <1 ms  192.168.1.1
> 2    9 ms    8 ms    9 ms  198.51.100.1
> 3     *        *        *     Request timed out.
> 4     *        *        *     Request timed out.
> 5     *        *        *     Request timed out.
> (the same for hops 6 to 30)
> Trace complete.

This desk’s rule: a fault past the office router is reported to the internet provider, with the tracert output.

**Where does the path break, and what do you do?**
(the options come in an order that depends on the seed of the question)
- After hop 2, at the provider: report it to them with this output (right)
- At hop 1: the office router has stopped answering the trace — if chosen: Hop 1 replied in under a millisecond. The stars start after it.
- Nowhere: stars only mean the site blocks tracert, so wait it out — if chosen: Stars in the middle with replies after them are a quiet router. Stars from hop 3 to the end, with ping failing too, are a broken path.
- At the destination: the website is down and not replying — if chosen: The trace stopped at hop 3 of up to 30. It never got near the website.

After the answer: the deciding words are marked. Reason: tracert lists every router on the way, three tries each. Hop 1 is the office router and hop 2 the provider’s. Stars from hop 3 to the end, when pings fail too, show where the path breaks. The desk’s rule sends it to the provider, with this output so they need not run it again.

#### Question in the draw: l14-s-unreach

A chat, with its history: "Ben, Front desk", Chat with the help desk.

> (Ben, Front desk, at the left) I cannot print. IT told me the printer is at 192.168.1.80. My computer is 192.168.1.42.

A plain table, "C:\> ping 192.168.1.80":

> What the computer prints  (the column heads)
> Pinging 192.168.1.80 with 32 bytes of data:
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Reply from 192.168.1.42: Destination host unreachable.
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**What does it show?**
(the options come in an order that depends on the seed of the question)
- Nothing on the local network answers at that address (right)
- The internet connection is down for the whole office — if chosen: The ping stayed inside the office network and never needed the internet.
- The printer replied, so the fault is in the print queue — if chosen: The reply line names 192.168.1.42, Ben’s own address, not the printer’s.
- The name lookup failed, so the printer name is wrong — if chosen: The ping was to a number, so no lookup was used.

After the answer: the deciding words are marked. Reason: Destination host unreachable, from your own address, means there is no way to reach that address on the local network. Check that the printer is on and what address it now has, before anything on the computer is changed.

#### Question in the draw: l14-s-netuse

The question, read aloud as above: **Which Windows command shows the mapped drives, or maps a new one to a drive letter?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - net use

After the answer: Reason: net use shows mapped drives, and net use Z: \\fileserver\Sales maps one. netstat lists open connections, and nslookup queries DNS.

#### Question in the draw: l14-k-typo

A chat, with its history: "Uri, Accounts", Chat with the help desk.

> (Uri, Accounts, at the left) The company portal will not open. I type www.exmaple.com and it says the site cannot be reached.

A plain table, "C:\> nslookup www.exmaple.com":

> What the computer prints  (the column heads)
> Server:  router.lan
> Address:  192.168.1.1
> *** router.lan can’t find www.exmaple.com: Non-existent domain

**What does the output show?**
(the options come in an order that depends on the seed of the question)
- DNS works and answered: no such name exists, so check the spelling (right)
- The DNS server is down, so nothing could be looked up — if chosen: A down server gives no reply at all, and a timeout message instead of an answer.
- Uri’s computer has no address, so it cannot look anything up — if chosen: It reached the DNS server at 192.168.1.1, which needs a working address.
- The portal’s website is down, so the page will not open for anybody at all — if chosen: The name does not exist in DNS, so no website was asked. The name has a spelling slip in it.

After the answer: the deciding words are marked. Reason: nslookup shows who answered and what it said. A named server with “Non-existent domain” means the lookup worked and the name is wrong: exmaple, not example. A broken lookup would show a timeout instead.

#### Question in the draw: l14-k-pathping

A chat, with its history: "Vik, Sales", Chat with the help desk.

> (Vik, Sales, at the left) Video calls to our customer in Denver keep breaking up, but other sites are fine.

A plain table, "C:\> pathping www.example.com (the statistics, shortened)":

> Hop  |  RTT  |  Source to Here: lost/sent  |  This Node/Link: lost/sent  |  Address  (the column heads)
> 0  |  -  |  -  |  -  |  DESK-0417 [192.168.1.42]
> 1  |  1ms  |  0/100 = 0%  |  0/100 = 0%  |  192.168.1.1
> 2  |  9ms  |  0/100 = 0%  |  0/100 = 0%  |  198.51.100.1
> 3  |  14ms  |  31/100 = 31%  |  31/100 = 31%  |  198.51.100.9
> 4  |  16ms  |  33/100 = 33%  |  2/100 = 2%  |  203.0.113.20

This desk’s rule: a fault past the office router is reported to the internet provider, with the output.

**Where does the loss start, and what does it show?**
(the options come in an order that depends on the seed of the question)
- At hop 3 and on to the end: at or just past that router, so tell the provider (right)
- At hop 0, the user’s own computer, where the lost packets start — if chosen: Hop 0 is the user’s own computer and shows no loss. The first loss is at hop 3.
- Only at the last hop: the customer’s server is the one losing them — if chosen: The loss starts at hop 3 and carries on. It is not only at the end.
- Nowhere: pathping always shows some loss on every hop, so there is nothing to report — if chosen: The first three hops show none. A hop that loses packets and the hops after it that lose them too are a real fault.

After the answer: the deciding words are marked. Reason: pathping lists the hops like tracert, then counts lost packets at each. Loss that begins at one hop and continues on every hop after it marks a real fault at or past that router, and the output goes to the provider as it is. Loss at one hop alone, with clean hops after it, is a router that answers slowly, not a fault.

#### Question in the draw: l14-r-pathping

The question, read aloud as above: **Name the Windows command that lists the routers on the way to a destination and then measures lost packets at each one, taking minutes.**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - pathping

After the answer: Reason: pathping lists the hops as tracert does, then measures loss at each. tracert alone only lists them.

#### Question in the draw: l14-r-flush

The question, read aloud as above: **Which ipconfig switch empties the computer’s saved DNS answers?**

**Type the switch, with ipconfig if you like.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - /flushdns
  - ipconfig /flushdns

After the answer: Reason: ipconfig /flushdns empties the DNS cache, so names are looked up again. /release and /renew are for the address.

#### Question in the draw: l14-r-netstat

The question, read aloud as above: **Which Windows command lists the computer’s open connections and the ports it is listening on?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - netstat

After the answer: Reason: netstat lists connections and listening ports. net use shows mapped drives, and nslookup queries DNS.

#### Question in the draw: l14-s-proxy

A chat, with its history: "Mae, Sales", Chat with the help desk.

> (Mae, Sales, at the left) Back in the office after a week at a hotel. Every website says it cannot be reached. A co-worker’s laptop on the same Wi-Fi opens sites fine. At the hotel I had to change a setting before the internet would work.

A plain table, "C:\> ping www.example.com":

> What the computer prints  (the column heads)
> Pinging www.example.com [203.0.113.20] with 32 bytes of data:
> Reply from 203.0.113.20: bytes=32 time=16ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=15ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=15ms TTL=56
> Reply from 203.0.113.20: bytes=32 time=16ms TTL=56
> Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)

**Where does this point, and what do you check?**
(the options come in an order that depends on the seed of the question)
- A proxy left on from the hotel: check Network and Internet, Proxy (right)
- DNS is down, so names cannot be turned into numbers — if chosen: The ping by name worked, so the name was turned into a number.
- The Wi-Fi link is weak, so pages time out before they finish loading — if chosen: Four replies came back and her co-worker is fine on the same Wi-Fi.
- Run ipconfig /renew on her laptop and try a site again — if chosen: The ping by name worked, so her address is fine. Asking for a new one cannot change a proxy setting.

After the answer: the deciding words are marked. Reason: The ping by name worked, so links 1 to 4 are fine, and a co-worker is fine on the same Wi-Fi. What is left is the service link on her own computer. A proxy is a server her web traffic goes through, and one that was typed in for the hotel does not exist here.

#### Question in the draw: l14-g-mapped

A chat, with its history: "Abe, Remote", Chat with the help desk.

> (Abe, Remote, at the left) I am working from home today. My Z: drive in File Explorer has a red X and says it cannot connect. At the office it works.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Whether the VPN is on, since the drive lives inside the office (right)
- Map the drive again with a different letter, in case Z: is stuck — if chosen: A new letter points at the same server, which still cannot be reached.
- Run ipconfig /renew on his laptop to get a fresh address — if chosen: His home address is working, since he is online. Asking for it again tells nothing about the path to the office server.
- Turn on the metered connection so the drive reconnects — if chosen: Metered only holds back big downloads. It does not open a path to the server.

After the answer: the deciding words are marked. Reason: A mapped drive is a drive letter for a network path such as \\fileserver\Sales. The server sits inside the office network, so away from it the drive works only through the VPN. The red X says the path cannot be reached, which sends you to the VPN before anything else.

#### Question in the draw: l14-g-public

A chat, with its history: "Cal, Sales", Chat with the help desk.

> (Cal, Sales, at the left) I moved to the office’s new conference room Wi-Fi. Websites open fine, but I cannot see the shared printer or any of the other laptops. It worked at my old seat.

A plain table, "Windows network settings":

> Setting  |  Value  (the column heads)
> Network profile  |  Public

This desk’s rule: the office’s own Wi-Fi networks use the Private profile.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Change the profile to Private, as this desk’s rule says for the office’s own Wi-Fi (right)
- Turn off the firewall so that nothing blocks the printer — if chosen: That opens the computer to every network it joins, a café included. The profile is the setting that changes.
- Restart the office router and then the printer, one after the other — if chosen: Websites work and the profile explains the missing printer. A restart would drop everyone.
- Type in a static address from the conference room range — if chosen: His address is working, since websites open. A fixed one would not show the printer either.

After the answer: the deciding words are marked. Reason: Windows wants to know whether a new network is public or private. Public, for a café or hotel, hides the computer and turns network discovery (the computer showing itself to others) and sharing off, so the printer and other laptops vanish while websites still work. This desk’s rule makes its own Wi-Fi Private.

#### Question in the draw: l14-s-cell

A chat, with its history: "Sam, Field sales", Chat with the help desk.

> (Sam, Field sales, at the left) The hotel Wi-Fi is down tonight and I have a report due. My laptop has a SIM card in it from the company. In the network list I see only the hotel network.

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- Turn Cellular on in the network list or settings; it uses the SIM in the laptop (right)
- Connect the VPN first, because it gives the laptop its own internet — if chosen: A VPN is a tunnel that rides on an internet connection that already works. It cannot make one.
- Type in a static address from the hotel’s range — if chosen: The hotel network is the one that is down. An address from its range gets nowhere.
- Mark the hotel network Private so the laptop can see more networks — if chosen: The profile changes what the computer shows to others, not which networks it can reach.

After the answer: the deciding words are marked. Reason: Cellular is a third kind of connection beside wired and wireless: the laptop reaches the internet through its SIM. Once it is on, the same chain applies. Cellular data is often limited, so marking it metered tells Windows to hold back big downloads.

#### Question in the draw: l14-g-exception

A chat, with its history: "Nia, Warehouse", Chat with the help desk.

> (Nia, Warehouse, at the left) I installed the scanner program IT gave me. Other computers cannot reach it. A Windows box came up when I started it and I clicked Cancel. Websites and email are fine.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Add the scanner program as an exception in the Windows firewall, for the network profile in use (right)
- Turn the Windows firewall off while the scanner is in use — if chosen: That opens every program on the computer. One exception for one program is enough.
- Run ipconfig /release and /renew on her computer — if chosen: Her address works, since websites and email do. The block is on the program.
- Type in a static address for her computer so the scanner keeps one address — if chosen: Her address already works, since websites and email do. The block is on the program, not on the address.

After the answer: the deciding words are marked. Reason: The Windows firewall blocks incoming connections to a program unless an exception lets them through, and its rules are kept for each network profile. Websites and email work, so the chain is fine. Allowing the one program is the narrowest change.

#### Question in the draw: l14-k-home

A chat, with its history: "Wes, New starter", Chat with the help desk.

> (Wes, New starter, at the left) My manager says to join my new laptop to the company domain, but the option to join one is not in Settings. The laptop is Windows 11 Home.

**Why is the option missing?**
(the options come in an order that depends on the seed of the question)
- Windows Home cannot join a domain; Pro or Enterprise can (right)
- The laptop is in a workgroup, which blocks domains — if chosen: A workgroup is the default for a computer that has joined no domain. It does not block joining one.
- The network is marked Public, which hides the laptop from the domain — if chosen: Public or private changes what the computer shows to others. It does not remove the domain option.
- The saved DNS answers are out of date — if chosen: Emptying them with ipconfig /flushdns cannot add an option the edition lacks.

After the answer: the deciding words are marked. Reason: A domain is a company group of computers run from a central server, with one sign-in that works on any joined computer. Windows Home has no domain join. The change is an upgrade to Pro, which also fits the company’s need for central rules.

#### Question in the draw: l14-r-metered

A chat, with its history: "Pam, Field sales", Chat with the help desk.

> (Pam, Field sales, at the left) On my phone hotspot, Windows Update just says it is waiting. Web pages and email work. At the office it downloads fine.

**Why?**
(the options come in an order that depends on the seed of the question)
- The hotspot is marked metered, so updates wait (right)
- The hotspot has no DNS, so downloads cannot start — if chosen: Web pages open, so names are being looked up.
- Her address is private, which blocks updates from the web — if chosen: Private addresses are what almost every network uses, and updates work on them.
- Her computer gave itself a 169.254 address — if chosen: Pages open, so she has a real address.

After the answer: the deciding words are marked. Reason: Windows holds back large downloads on a metered connection, to save data. It is a setting on the connection, and it can be turned off if the plan allows.

#### Question in the draw: l14-r-group

A chat, with its history: "Jo, Owner", Chat with the help desk.

> (Jo, Owner, at the left) We are six people in one room with no server. We just want to share a folder with each other, each with our own sign-in on our own computer. What is that kind of setup called?

**What is it called?**
(the options come in an order that depends on the seed of the question)
- A workgroup, with local accounts (right)
- A domain, with a central server — if chosen: A domain needs a central server and one shared sign-in.
- A VLAN, a separate network on one switch — if chosen: A VLAN splits a switch into separate networks. It is not about accounts.
- A VPN, a tunnel to another network — if chosen: A VPN is a tunnel to another network.

After the answer: the deciding words are marked. Reason: No server and local accounts on each computer is a workgroup. A domain is the choice when a company wants one sign-in and central rules.

#### Question in the draw: l14-r-moved

A chat, with its history: "Lev, Sales", Chat with the help desk.

> (Lev, Sales, at the left) I took my laptop home and plugged it in at the office again. It has a cable light but no network. At home I typed in my own address settings.

A plain table, "The adapter’s IPv4 properties":

> Setting  |  Value  (the column heads)
> Use the following IP address  |  Selected
> IP address  |  192.168.0.20
> Default gateway  |  192.168.0.1

**What is the one change?**
(the options come in an order that depends on the seed of the question)
- Put the adapter back on automatic addressing (right)
- Type in the office router’s address as the gateway only — if chosen: Her address would still be from the home network, and the mask and DNS would still be wrong.
- Run ipconfig /flushdns — if chosen: It empties saved name answers. The trouble is the address.
- Mark the network Public — if chosen: It changes what is shared, not the address.

After the answer: the deciding words are marked. Reason: A static address is typed by hand and stays when the computer moves. Back on automatic, the office’s DHCP server hands out an address, mask, gateway and DNS that fit.

#### Question in the draw: l16-w-desk

A chat, with its history: "Ravi, Sales", Chat with the help desk.

> (Ravi, Sales, at the left) I moved to desk 14. I plugged my laptop into the wall jack and I have no network. The little light by the laptop’s network port is off. My first week, please help.

A plain table, "The path from desk 14":

> Part  |  What is known  (the column heads)
> Wall jack B-14  |  Cable runs to the patch panel in the wiring closet
> Patch panel port 14  |  A patch cable joins it to port 14 of the switch
> The switch  |  Managed, in the closet. Ports 1 to 13 are in use; port 14 has been empty
> Router and modem  |  Other desks on the floor are online, so these work
> This desk’s rule  |  Changes to switch settings belong to the network team. Hand on what you found.

**You plug Ravi’s laptop into the working jack at desk 15 and the light comes on. What does that show?**
(the options come in an order that depends on the seed of the question)
- The laptop’s network card is not the cause. (right)
- The wall jack at desk 14 is the broken part. — if chosen: Nothing has been tested on desk 14’s stretch yet. The jack, the cable behind it, the patch cable and the switch port are all still possible.
- The patch cable at the switch end, since it is the only cable in play. — if chosen: Nothing was tested on it. Plugging into another jack tests the laptop, not desk 14’s own stretch.
- The router is the broken part. — if chosen: The router and modem are shared by desks that are online. A fault there would not leave one desk dark.

After the answer: the deciding words are marked. Reason: The light is off at the computer, so the fault is on the path from the card to the switch. A card that works in another jack is cleared. Each part does one job, so the next cheapest cut is the closet: no light at port 14, even with a good patch cable, and a managed switch that shows the port disabled. This assumes one fault at a time.
The working:
- Write down every part on desk 14’s path that could leave the light off.: The laptop’s network card; the wall jack and the cable behind it; the punched-down end at the patch panel; the patch cable to the switch; port 14 on the switch.
- Say what each part does for the whole, and which parts other desks share.: The router and modem serve the whole floor and other desks work, so they are cleared without a test. The switch also serves other desks, but only port 14 matters here.
- Name your favorite cause and test it with a part known to work.: The laptop’s card: the last two laptops from that batch had a bad one. Plug the laptop into the jack at desk 15 that a neighbor is using.
- Walk the path from the desk outward, cutting it with the cheapest check.: In the closet, port 14 on the switch has no light, even with the patch cable swapped for one known to work. The switch’s own page costs less than testing the cable in the wall, so look there first.
- Look at the next part, the switch’s own page.: The switch is managed. Its page shows port 14 as disabled: someone turned unused ports off. That explains the dark light, so the cable tester is not needed yet. If the light stays off after the port is on, the cable tester comes next.
- Decide who changes it, by the desk’s rule.: This desk’s rule says switch settings belong to the network team. Hand it on with what you found: the laptop works in the jack at desk 15, the patch cable was swapped, port 14 shows disabled.

#### Question in the draw: l16-p-switch

A chat, with its history: "Mei, Office manager", Chat with the help desk.

> (Mei, Office manager, at the left) At 9:10 all twelve computers and the printer on the third floor lost the network at the same moment. The second and fourth floors are fine. Every cable on the third floor ends in one box in the closet, and its lights are all dark. Where do you look first?

**Where do you look first?**
(the options come in an order that depends on the seed of the question)
- At the closet box that every third-floor cable shares: its power (right)
- At each wall jack on the floor, one after another — if chosen: Twelve jacks failing in the same minute is not twelve faults. The shared part is the one to test.
- At the router and modem, since the internet is down — if chosen: The second and fourth floors are online through that same router and modem, so they work.
- At the network card in the first laptop to complain — if chosen: Twelve computers and a printer did not break their cards together.

After the answer: the deciding words are marked. Reason: Everything on one floor failed together and the other floors work, so the fault is in the part only that floor shares. That is the switch in the closet, and its dark lights point at its power. Each wall jack, and each card, serves one desk. The router serves all floors.

#### Question in the draw: l16-p-ap

A chat, with its history: "Jon, Warehouse", Chat with the help desk.

> (Jon, Warehouse, at the left) In the warehouse, scanners and phones cannot find any Wi-Fi. A laptop plugged into a wall jack there works fine. There is a cable from the closet switch to a bracket on the warehouse wall. What is missing?

**What is missing?**
(the options come in an order that depends on the seed of the question)
- A device on that cable that turns the wired network into Wi-Fi (right)
- A faster line from the internet provider — if chosen: The wired laptop works, so the line is fine. The scanners have no radio network to join.
- A second modem beside the first one — if chosen: A modem ends the provider’s line. It adds no Wi-Fi inside the warehouse.
- A larger switch in the closet — if chosen: A switch passes data between cables. It has no radio, so the scanners still cannot join.

After the answer: the deciding words are marked. Reason: The wired side works, and what the scanners lack is a radio. An access point cabled to the switch adds it. A faster line, a modem or a larger switch changes nothing for Wi-Fi.

#### Question in the draw: l16-p-poe

A chat, with its history: "Ola, Facilities", Chat with the help desk.

> (Ola, Facilities, at the left) We want a Wi-Fi access point on the ceiling of the hall. A network cable runs up there, but there is no power outlet. The closet switch is a managed one with no PoE. Can that one cable bring the power too?

**What brings the power?**
(the options come in an order that depends on the seed of the question)
- PoE: power over the same cable, from a PoE switch or an injector (right)
- The managed switch’s settings page, by turning power on for that port — if chosen: Managed means it has settings. It does not mean it has power built into its ports.
- The access point’s power adapter, plugged into the cable at the closet end — if chosen: A power adapter needs an outlet at its own end. A plain network cable carries no power from it.
- A cable with a fire-rated jacket for the ceiling — if chosen: The jacket is a fire rating. It does not change what the cable carries.

After the answer: the deciding words are marked. Reason: The ceiling has a network cable and no outlet. PoE puts power on the same cable and needs a PoE switch or injector. A managed switch is about settings, not power, and a jacket rating or an adapter does not add power.

#### Question in the draw: l16-s-patch

A chat, with its history: "Ned, Intern", Chat with the help desk.

> (Ned, Intern, at the left) Jack B-22 is dead. In the closet, its patch cable lights no port on the switch. When I move the same patch cable to another switch port, the light comes on at once. Where is the fault?

**Where is the fault?**
(the options come in an order that depends on the seed of the question)
- In the first switch port (right)
- In the cable in the wall behind jack B-22 — if chosen: That cable just carried a working link. It is cleared.
- In the laptop’s network card — if chosen: The laptop made a link through the other port. Its card is cleared.
- In the router, which shares the switch — if chosen: Nothing on the router changed between the two tries.

After the answer: the deciding words are marked. Reason: A light in the second port means the whole stretch from the laptop to the panel and the patch cable works. The one thing that changed is the port, so the port is the fault. This assumes one fault at a time.

#### Question in the draw: l16-s-injector

A chat, with its history: "Pia, Security", Chat with the help desk.

> (Pia, Security, at the left) A parking-lot camera lists its power need as PoE+ (802.3at). The closet switch ports are basic PoE (802.3af) and we do not want to replace the switch. What do you add?

**What do you add?**
(the options come in an order that depends on the seed of the question)
- A PoE+ (802.3at) injector between the switch and the camera cable (right)
- A basic PoE (802.3af) injector, the same standard as the switch — if chosen: Basic PoE gives up to 15.4 watts at the port, less than a PoE+ camera needs.
- A second patch panel for the camera — if chosen: A patch panel has no power to add.
- A network tap at the camera — if chosen: A tap copies traffic for an analyzer. It adds no power.

After the answer: the deciding words are marked. Reason: The switch has no PoE+ and is not to be replaced, and the camera needs the stronger standard. A PoE+ injector adds up to 30 watts on that one cable. A basic injector gives too little.

#### Question in the draw: l16-g-managed

A chat, with its history: "Lia, Network team", Chat with the help desk.

> (Lia, Network team, at the left) We have to turn off the unused ports and put the guest computers on a separate group of ports from the accounting computers. Which of these can do that?

**Which switch?**
(the options come in an order that depends on the seed of the question)
- A managed switch (right)
- An unmanaged switch — if chosen: An unmanaged switch has nothing to configure. Plug in and it works.
- An unmanaged PoE switch — if chosen: PoE adds power to the ports. An unmanaged switch still has no settings.
- A patch panel — if chosen: A patch panel is not a switch and has no settings.

After the answer: the deciding words are marked. Reason: Turning off ports and splitting them into groups needs settings. A managed switch has them. An unmanaged one, with or without PoE, has none.

#### Question in the draw: l16-g-mac

A chat, with its history: "Ruth, Network team", Chat with the help desk.

> (Ruth, Network team, at the left) The office printer gets a different IP address now and then. We want to recognize it by something that stays fixed on the printer’s own network card, and that the switch also learns. What is that?

**What is it?**
(the options come in an order that depends on the seed of the question)
- Its MAC address (right)
- Its IP address — if chosen: The IP address is the one that changes. It is handed out, not burned in.
- Its name in the print queue — if chosen: A name in the queue is typed by a person and can be changed.
- Its serial number on the sticker — if chosen: The sticker is printed on the box. The network cannot read it, and the card does not send it.

After the answer: the deciding words are marked. Reason: The thing that stays while the IP address changes, and that the switch learns, is the MAC address, burned in on the network card.

#### Question in the draw: l16-r-router

A chat, with its history: "Vic, Branch office", Chat with the help desk.

> (Vic, Branch office, at the left) Our branch has two networks: the office and the internet. All the office computers reach each other, but none reach the internet, and the box between the two networks is flashing red. What is that box?

**Which device?**
(the options come in an order that depends on the seed of the question)
- The router (right)
- The switch — if chosen: A switch joins the devices inside one network, and they reach each other.
- The patch panel — if chosen: A patch panel only ends cables and has no light.
- The access point — if chosen: An access point adds Wi-Fi inside the office. It does not join the office to the internet.

After the answer: the deciding words are marked. Reason: Computers that reach each other have a working switch. Reaching the internet is joining two networks, and that is a router’s job.

#### Question in the draw: l16-r-firewall

A chat, with its history: "Zed, Security", Chat with the help desk.

> (Zed, Security, at the left) Our new in-house app on port 8443 does not open from the other building, but ping to its server works. The app is running. Which part on the path checks traffic by port number against rules?

**Which part do you check?**
(the options come in an order that depends on the seed of the question)
- The firewall, for a rule that allows 8443 (right)
- The patch panel, for a loose cable — if chosen: A loose cable would break ping too, and a patch panel judges nothing.
- The access point, for its radio channel — if chosen: An access point has no rule about port 8443.
- The modem, for its line signal — if chosen: A modem ends the provider’s line. Other services work.

After the answer: the deciding words are marked. Reason: Ping works, so the path is whole. One port does not get through, and a firewall is the part that allows or blocks by port.

#### Question in the draw: l16-r-poe

A chat, with its history: "Abe, Facilities", Chat with the help desk.

> (Abe, Facilities, at the left) A new camera needs 20 watts at the camera. The closet has two ports: basic PoE, up to 15.4 watts at the port, and PoE+, up to 30 watts at the port. Which port do you use?

**Which port?**
(the options come in an order that depends on the seed of the question)
- The PoE+ port, up to 30 watts (right)
- The basic PoE port, up to 15.4 watts — if chosen: Basic PoE gives less than the 20 watts the camera needs, so it will not run.
- Either port, since both are PoE — if chosen: The two standards give different power. A device that needs more than its port gives will not run.
- Either port, with a longer cable to make up the power — if chosen: A longer cable adds no power, and a run over 100 meters fails.

After the answer: the deciding words are marked. Reason: The camera needs 20 watts and basic PoE tops out at 15.4. Only PoE+ covers it.

#### Question in the draw: l16-r-poe-std

The question, read aloud as above: **Name the PoE standard, or its 802.3 number, that gives up to 60 watts at the port.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - PoE++
  - PoE plus plus
  - 802.3bt
  - bt
  - 802.3 bt

After the answer: Reason: The strongest PoE standard is PoE++, 802.3bt: 60 watts, or 90 watts on the stronger type. PoE+ (802.3at) gives 30 and basic PoE (802.3af) gives 15.4.

#### Question in the draw: l16-r-poe-at

The question, read aloud as above: **How many watts at the port does PoE+ (802.3at) give? Type the number.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 30
  - 30 watts
  - 30 W
  - 30w

After the answer: Reason: PoE+ gives up to 30 watts at the port. Basic PoE (802.3af) gives 15.4 and PoE++ (802.3bt) gives 60 or 90.

#### Question in the draw: l16-r-100m

A chat, with its history: "Mo, Facilities", Chat with the help desk.

> (Mo, Facilities, at the left) A PoE camera sits 130 meters of cable from the closet switch. The PoE port is strong enough, but the camera has no link. Which fact explains it?

**What explains it?**
(the options come in an order that depends on the seed of the question)
- A network cable run is at most 100 meters (right)
- The camera needs the 802.3af standard — if chosen: The port is strong enough, so the standard is not the fault.
- PoE cannot work on a cable with a jack in it — if chosen: PoE runs through jacks and patch panels. The length is the problem.
- The switch needs to be a managed one — if chosen: Managed or not has nothing to do with the cable length.

After the answer: the deciding words are marked. Reason: The power is enough, and the run is longer than the 100 meters a network cable allows. A switch in between would fix it.

#### Question in the draw: l16-r-dslmodem

A chat, with its history: "Fay, Home office", Chat with the help desk.

> (Fay, Home office, at the left) My internet arrives on the telephone line, with an RJ11 cable from the wall into a box that gives my router an Ethernet cable. The old house had cable TV internet, and I still have that modem. Which box is the right one now?

**Which box?**
(the options come in an order that depends on the seed of the question)
- A DSL modem (right)
- The old cable modem — if chosen: A cable modem ends a coax line from the cable TV company, and this line is a telephone line.
- An ONT — if chosen: An ONT ends a fiber line, not a telephone line.
- A second router in place of the modem — if chosen: A router joins networks. It cannot read a telephone line’s signal.

After the answer: the deciding words are marked. Reason: The line is the telephone line, so the box that ends it is a DSL modem. The cable modem ends coax, the ONT ends fiber.

#### Question in the draw: l16-k-ont

A chat, with its history: "Bree, Branch office", Chat with the help desk.

> (Bree, Branch office, at the left) The provider just installed fiber. A thin glass cable from the street ends in a small box on the wall with a power cord, and an Ethernet cable runs from it to our router. Our old cable modem from the coax days is still on the shelf. How do I hook it up?

**What do you do with the old cable modem?**
(the options come in an order that depends on the seed of the question)
- Leave it out; the box on the wall is the ONT and the router plugs into that (right)
- Plug the glass cable into it; any modem ends any line — if chosen: A cable modem ends a coax line. It has no port for light in glass.
- Plug the glass cable straight into the router — if chosen: A router cannot read light. The ONT changes it into a network cable.
- Chain them: the ONT into the cable modem, then the router — if chosen: The ONT already gives the router an Ethernet cable, so the cable modem adds nothing to a fiber line.

After the answer: the deciding words are marked. Reason: The line is fiber, light in glass, and the box that changes it into a network cable is the ONT. A cable modem ends coax, so it has no place on this line.

#### Question in the draw: l16-k-nic

The question, read aloud as above: **A switch tells devices apart by an address that the maker burned into each network card, written as 12 hexadecimal digits such as 3C:52:82:1A:9F:07. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - MAC address
  - MAC
  - physical address
  - media access control address

After the answer: Reason: The MAC address is burned into the network card and is written as 12 hexadecimal digits. A switch uses it to send each message to the right port; the IP address is handed out and can change.

#### Question in the draw: l16-p-wisp

A chat, with its history: "Cal, Farm office", Chat with the help desk.

> (Cal, Farm office, at the left) Our farm office is far out of town. There is no cable TV line and no phone line, and there is no cell signal at the house. We tried satellite, but the delay made video calls unusable. A provider’s tower 5 miles off has a clear view of our roof. What internet can we get?

**Which connection?**
(the options come in an order that depends on the seed of the question)
- A WISP, through an antenna on the roof aimed at the tower (right)
- Satellite again, with a better dish — if chosen: The delay comes from the long trip to a satellite, so a better dish does not remove it.
- Cellular, through a phone’s hotspot — if chosen: It needs cell signal at the house, and there is none.
- Cable internet, through a cable modem — if chosen: Cable internet comes on coax from the cable TV company. There is no line to the office.

After the answer: the deciding words are marked. Reason: Each fact removes a kind: no cable line, no phone line, no cell signal, and satellite was tried. A clear view of a provider’s tower is what a WISP needs.

#### Question in the draw: l16-s-lag

A chat, with its history: "Bo, Dock office", Chat with the help desk.

> (Bo, Dock office, at the left) Our dock office uses a satellite dish. A speed test shows 90 Mbps down, which is good, but video calls lag and echo. The same test shows a delay of 600 milliseconds. Why?

**Why would that happen?**
(the options come in an order that depends on the seed of the question)
- Each reply makes a long trip up to a satellite and back, so it starts late (right)
- The neighbors share the line and it is busy — if chosen: Sharing the line is the better-known fault of cable. The test here shows a good speed with a long delay.
- The office is too far from the provider’s equipment — if chosen: Distance from the provider slows DSL, and a dish does not depend on it.
- The download speed is too low for video — if chosen: The test shows 90 Mbps, which is plenty. The delay is what hurts a call.

After the answer: the deciding words are marked. Reason: A good speed with a long delay is satellite: each reply travels far up and back. Shared lines are known on cable and distance on DSL.

#### Question in the draw: l16-s-man

A chat, with its history: "Ann, School district", Chat with the help desk.

> (Ann, School district, at the left) Our district links its nine schools, all in one town, with its own fiber so that every school reaches one central server. No school is in another city. What kind of network is that?

**Which kind of network?**
(the options come in an order that depends on the seed of the question)
- A MAN (right)
- A LAN — if chosen: A LAN covers one building or office. This links nine buildings across town.
- A WAN — if chosen: A WAN joins offices far apart, in different cities or countries. These schools are in one town.
- A PAN — if chosen: A PAN is a few meters around one person.

After the answer: the deciding words are marked. Reason: Nine buildings across one town make a network the size of a city: a MAN. A LAN stays in a building, and a WAN joins places in different cities.

#### Question in the draw: l16-g-san

A chat, with its history: "Quin, Data center", Chat with the help desk.

> (Quin, Data center, at the left) We have six servers that share one big pool of disks over a separate fast network of their own. Nobody’s desk computer is on it. What kind of network is that?

**Which kind?**
(the options come in an order that depends on the seed of the question)
- A SAN (right)
- A LAN — if chosen: A LAN is the users’ own network of a building. This one carries storage for servers only.
- A WAN — if chosen: A WAN joins offices far apart. This is inside one room.
- A WLAN — if chosen: A WLAN is a LAN over Wi-Fi.

After the answer: the deciding words are marked. Reason: A separate fast network that joins servers to shared storage, with no user computers on it, is a SAN.

#### Question in the draw: l16-r-cable

A chat, with its history: "Gil, Home", Chat with the help desk.

> (Gil, Home, at the left) Our internet is fast at 6 in the morning and slow at 7 in the evening, when the whole street is home. The line into the house is coax. Which connection is it?

**Which connection?**
(the options come in an order that depends on the seed of the question)
- Cable (right)
- Fiber — if chosen: Fiber arrives as light in glass, not on coax.
- DSL — if chosen: DSL comes over the telephone line, and its speed follows distance from the provider, not the hour.
- Satellite — if chosen: Satellite uses a dish, not coax into the house.

After the answer: the deciding words are marked. Reason: Coax into the house and a slowdown when the street is online is cable internet.

#### Question in the draw: l16-r-wan

A chat, with its history: "Hana, Head office", Chat with the help desk.

> (Hana, Head office, at the left) We are linking our head office in Denver to a branch in Atlanta so the branch can use the same file server. What kind of network is that link?

**Which kind?**
(the options come in an order that depends on the seed of the question)
- A WAN (right)
- A LAN — if chosen: A LAN covers one building or office.
- A MAN — if chosen: A MAN covers one city or campus, and these are two cities.
- A SAN — if chosen: A SAN joins servers to shared storage and is not a link between offices.

After the answer: the deciding words are marked. Reason: Two cities far apart make a wide area network.

#### Question in the draw: l16-r-cell

A chat, with its history: "Ivo, Field crew", Chat with the help desk.

> (Ivo, Field crew, at the left) Our crew drives between road jobs and needs internet in each truck. There are no wires anywhere on the roads, and the trucks move all day. Which connection fits?

**Which connection?**
(the options come in an order that depends on the seed of the question)
- Cellular, with a hotspot in each truck (right)
- A WISP, with an antenna on each truck — if chosen: A WISP uses a fixed antenna aimed at the provider’s tower, so a moving truck loses it.
- Satellite, with a dish on each truck — if chosen: A dish has to be aimed at its satellite, and the delay of older satellite internet hurts calls.
- Cable internet, with a modem in each truck — if chosen: Cable internet needs the coax line of the cable TV company.

After the answer: the deciding words are marked. Reason: The crew moves and there are no wires, so the connection must work wherever there is a cell signal: cellular. A WISP is for a fixed building, and a cable modem needs a coax line.

#### Question in the draw: l16-r-pan

A chat, with its history: "Eve, Retail", Chat with the help desk.

> (Eve, Retail, at the left) A customer asks what kind of network her phone makes when it shares audio with her earbuds and her watch, all within two meters of her. What do you tell her?

**Which kind of network?**
(the options come in an order that depends on the seed of the question)
- A PAN (right)
- A LAN — if chosen: A LAN covers a building or an office, not one person’s devices.
- A WLAN — if chosen: A WLAN is a LAN over Wi-Fi, in an office, not earbuds.
- A MAN — if chosen: A MAN covers a city or a large campus.

After the answer: the deciding words are marked. Reason: A few meters around one person’s phone, earbuds and watch is a personal area network.

#### Question in the draw: l16-k-dsl

A chat, with its history: "Carl, Home office", Chat with the help desk.

> (Carl, Home office, at the left) My internet comes in on the telephone line through a box with an RJ11 cable. When I moved farther from town, it got slower. Which connection is it?

**Which connection?**
(the options come in an order that depends on the seed of the question)
- DSL (right)
- Cable — if chosen: Cable internet comes on coax and is slowed by the neighbors, not by distance.
- Fiber — if chosen: Fiber arrives as light in glass, not on a telephone line.
- Satellite — if chosen: Satellite uses a dish, not a telephone line.

After the answer: the deciding words are marked. Reason: The telephone line and an RJ11 cable mean DSL, and its speed falls the farther the home is from the provider. Cable, fiber and satellite arrive differently.

#### Question in the draw: l16-k-man

The question, read aloud as above: **Give the short name of the kind of network that covers a city or a large campus.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - MAN
  - metropolitan area network

After the answer: Reason: A metropolitan area network, a MAN, covers a city or a large campus. A LAN covers a building and a WAN joins offices far apart.

#### Question in the draw: l16-p-crimp

A chat, with its history: "Dee, New hire", Chat with the help desk.

> (Dee, New hire, at the left) The plastic clip on the end of a 20-foot network cable snapped off, so the cable falls out of the port. The cable and its wires look fine. What is the cheapest fix that keeps this cable?

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Cut off the old plug, strip the end and crimp on a new plug (right)
- Push the wire ends down into a patch panel slot — if chosen: A punchdown tool seats wires in a panel or block. That does not put a plug on the end.
- Find the broken part with a toner probe — if chosen: A toner probe tells cables apart. The broken part is already in your hand.
- Throw the cable away and pull a new one through the wall — if chosen: This is a loose cable, not one in the wall, and the wires are fine. A new plug costs far less.

After the answer: the deciding words are marked. Reason: Only the plug is broken, so redo the plug: cut, strip, crimp. A punchdown tool works on panels, a toner probe finds cables, and a new cable is the last step, not the first.

#### Question in the draw: l16-s-toner

A chat, with its history: "Gus, Cabling crew", Chat with the help desk.

> (Gus, Cabling crew, at the left) Twenty-four unlabeled cables come out of the wall to the patch panel. All of them are fine. I need to know which one goes to jack B-22. What do I use?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A toner probe: a tone at the jack, a wand over the cables (right)
- A cable tester, one cable at a time — if chosen: A cable tester shows whether the wires of a cable are good. They all are, so it does not say which cable is B-22’s.
- A loopback plug in the panel — if chosen: A loopback plug tests a port. It cannot trace a cable.
- A punchdown tool on each slot — if chosen: A punchdown tool seats wires. It can pull good cables loose and trace none.

After the answer: the deciding words are marked. Reason: The cables are all good and the question is which is which. A toner probe is for that. A tester checks the wires of a cable already found.

#### Question in the draw: l16-s-tester

A chat, with its history: "Una, Desktop team", Chat with the help desk.

> (Una, Desktop team, at the left) I made a patch cable myself. It shows a link, but copies keep dropping. I think two wires are in the wrong order or one is not touching its pin. Which tool shows that?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A cable tester (right)
- A crimper, squeezed again on the plug — if chosen: A crimper may re-seat the plug, but it shows nothing about which wire is wrong.
- A Wi-Fi analyzer — if chosen: A Wi-Fi analyzer reads radio signals, not the wires of a cable.
- A network tap — if chosen: A tap copies live traffic for an analyzer. It does not check wires.

After the answer: the deciding words are marked. Reason: The question is whether each of the eight wires reaches the right pin. A cable tester shows an open wire, a short, or a wrong order.

#### Question in the draw: l16-g-wifi

A chat, with its history: "Tara, East wing", Chat with the help desk.

> (Tara, East wing, at the left) Wi-Fi is slow in the east wing and fine in the west wing. The offices around the east wing have their own Wi-Fi. I think ours shares a channel with one of them. What shows that?

**Which tool shows nearby networks, their channels and their signal strength?**
(the options come in an order that depends on the seed of the question)
- A Wi-Fi analyzer (right)
- A network tap — if chosen: A tap copies the traffic on a cable. It reads no radio signals.
- A toner probe — if chosen: A toner probe traces cables. It reads no radio signals.
- A cable tester — if chosen: A cable tester checks the wires of a cable, not the air.

After the answer: the deciding words are marked. Reason: The question is about the air: which networks are near, on which channel, how strong. A Wi-Fi analyzer shows that. The three cable tools read nothing from the air.

#### Question in the draw: l16-g-loop

A chat, with its history: "Hal, Server room", Chat with the help desk.

> (Hal, Server room, at the left) The network port on a server may be dead. Before we order a new card, I want to test the port by itself, with no cable and no switch in the way. What do I use?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A loopback plug (right)
- A cable tester on the cable to the switch — if chosen: That tests the cable, and the cable is not what is under test.
- A toner probe on the cable — if chosen: A toner probe traces cables. It tests no port.
- A network tap between the server and the switch — if chosen: A tap copies live traffic. With a dead port there may be none to copy.

After the answer: the deciding words are marked. Reason: The part under test is the port alone, so nothing else may be in the loop. A loopback plug joins the port’s send to its receive and tests it by itself.

#### Question in the draw: l16-g-tap

A chat, with its history: "Sid, Security", Chat with the help desk.

> (Sid, Security, at the left) We want to watch a copy of all the traffic between the file server and the switch with an analyzer, without cutting the link or changing anything on it.

**Which device?**
(the options come in an order that depends on the seed of the question)
- A network tap (right)
- A loopback plug — if chosen: A loopback plug would join the port to itself and stop the link.
- A PoE injector — if chosen: A PoE injector adds power to a cable. It copies nothing.
- A cable stripper — if chosen: A cable stripper takes off a jacket, and that would cut the link.

After the answer: the deciding words are marked. Reason: Watching a copy of the traffic on one cable, without stopping it, is what a network tap does.

#### Question in the draw: l16-g-replace

A chat, with its history: "Ben, Cabling crew", Chat with the help desk.

> (Ben, Cabling crew, at the left) Jack B-31 is dead. I swapped the patch cable at the panel and then moved the laptop to another jack, and only B-31 fails. A cable tester found wire 6 open in the wall cable. I punched wire 6 down again at the panel and at a new jack, and tested again: wire 6 is still open.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Run a new cable between the jack and the panel (right)
- Punch wire 6 down again at both ends and test once more — if chosen: That was just done, and the tester still shows the break. Doing it again tests nothing new.
- Swap the patch cable at the switch end too — if chosen: The patch cable was already swapped and the break was found in the wall, so another swap tests nothing new.
- Reset the switch and see whether the jack comes back — if chosen: The tester has already found the fault in the cable. A reset tests a part that was cleared.

After the answer: the deciding words are marked. Reason: Every cheaper step has been done: the patch cable, the other jack, the ends punched down again with a new jack, and a tester that still finds wire 6 open. The break is inside the wall, so a new wall cable is the right step now.

#### Question in the draw: l16-r-crimper

The question, read aloud as above: **Name the tool that squeezes an RJ45 plug onto the end of a network cable.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - crimper
  - crimping tool
  - crimp tool

After the answer: Reason: The crimper squeezes the plug onto the cable end. The punchdown tool seats wires in a panel, and the stripper takes the jacket off first.

#### Question in the draw: l16-r-tone

A chat, with its history: "Neha, Cabling crew", Chat with the help desk.

> (Neha, Cabling crew, at the left) I clipped a small box to jack B-9 and now I am waving a wand over the cables in the closet until one squeals. What am I doing?

**What is she doing?**
(the options come in an order that depends on the seed of the question)
- Finding the cable that goes to B-9, with a toner probe (right)
- Testing the wires of the cable, with a cable tester — if chosen: A cable tester has a plug and a lit panel and checks wires. It does not squeal at one cable in a bundle.
- Testing the closet’s port, with a loopback plug — if chosen: A loopback plug plugs into a port. It has no wand.
- Copying the traffic of the cable, with a network tap — if chosen: A network tap sits in a link and copies traffic. It does not trace cables.

After the answer: the deciding words are marked. Reason: A tone from one end and a wand that squeals at the other find which cable is which. That is a toner probe.

#### Question in the draw: l16-r-open

A chat, with its history: "Oli, Desktop team", Chat with the help desk.

> (Oli, Desktop team, at the left) A cable from the wall to the switch carries no signal on two of its eight wires. Which tool tells me whether a wire is broken or just in the wrong place?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A cable tester (right)
- A Wi-Fi analyzer — if chosen: A Wi-Fi analyzer reads the air, not wires.
- A network tap — if chosen: A tap copies live traffic and does not test wires.
- A loopback plug — if chosen: A loopback plug tests a port, not a cable.

After the answer: the deciding words are marked. Reason: Whether a wire is open or in the wrong place is a cable tester’s answer.

#### Question in the draw: l16-r-repunch

A chat, with its history: "Joy, Cabling crew", Chat with the help desk.

> (Joy, Cabling crew, at the left) Jack B-40 is dead. A cable tester shows wire 3 open between the jack and the panel. I have not touched either end yet. What is the cheapest next step?

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Punch wire 3 down again at the jack and at the panel, then test again (right)
- Run a new cable through the wall — if chosen: That is the most work and the last step. The ends have not been redone yet.
- Crimp a new plug on the patch cable — if chosen: The open wire is in the wall cable between the jack and the panel, not in a plug.
- Swap the jack’s patch cable and the laptop together — if chosen: Two changes at once would not show which one did it, and neither touches the open wire.

After the answer: the deciding words are marked. Reason: The ends have not been redone, so redo them first: punching the wire down again is cheap and often mends a wire that is open. A new wall cable comes only if the wire is still open.

#### Question in the draw: l16-k-punch

A chat, with its history: "Pat, Cabling crew", Chat with the help desk.

> (Pat, Cabling crew, at the left) Twelve new jack cables have been pulled into the closet, and their loose wire ends hang at the back of the patch panel. Which tool seats them in the slots and trims them?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A punchdown tool (right)
- A crimper — if chosen: A crimper puts a plug on a cable end. A panel has slots, not plugs.
- A cable stripper — if chosen: A stripper takes the jacket off and does not seat the wires.
- A cable tester — if chosen: A cable tester checks the wires afterward and seats none.

After the answer: the deciding words are marked. Reason: Wire ends going into the slots of a panel are the punchdown tool’s job. The crimper makes plugs, the stripper takes jackets off, and the tester checks the result.

#### Question in the draw: l16-k-strip

A chat, with its history: "Dot, Cabling crew", Chat with the help desk.

> (Dot, Cabling crew, at the left) Before I crimp a plug on a new cable I have to take the outer jacket off without nicking the wires inside. Which tool?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A cable stripper (right)
- A punchdown tool — if chosen: A punchdown tool seats wires in slots. It does not strip a jacket.
- A toner probe — if chosen: A toner probe traces cables. It strips nothing.
- A cable tester — if chosen: A cable tester checks the wires afterward.

After the answer: the deciding words are marked. Reason: Removing the jacket without cutting the wires is the job of a cable stripper. The crimper and the tester come after it.

#### Question in the draw: l16-p-dhcp

A chat, with its history: "Wes, Operations", Chat with the help desk.

> (Wes, Operations, at the left) A new hire plugs in his laptop. The link light is on, but ipconfig shows an address starting 169.254. The computers already at their desks keep working. Which server role is not answering new devices?

**Which role is not answering?**
(the options come in an order that depends on the seed of the question)
- DHCP (right)
- DNS — if chosen: DNS turns names into addresses. A newcomer would still get an address and fail only on names.
- NTP — if chosen: NTP keeps clocks the same. It gives out no addresses.
- AAA — if chosen: AAA checks who people are. It gives out no addresses.

After the answer: the deciding words are marked. Reason: A new device with a 169.254 address got no answer when it asked for one, while the old ones still hold theirs. That is DHCP. DNS, NTP and AAA do other jobs.

#### Question in the draw: l16-s-proxy

A chat, with its history: "Ike, IT manager", Chat with the help desk.

> (Ike, IT manager, at the left) At ten every morning the internet line is full because many people watch the same training videos, and we also want gambling sites blocked. We want one server of ours to make the web requests for every desk. What is it?

**What is it?**
(the options come in an order that depends on the seed of the question)
- A proxy server (right)
- A load balancer — if chosen: A load balancer shares requests among identical servers. It does not fetch pages for desks.
- A spam gateway — if chosen: A spam gateway filters incoming email.
- A DHCP server — if chosen: DHCP hands out addresses. It does not fetch or block pages.

After the answer: the deciding words are marked. Reason: Copies of popular pages save the line, and blocking sites and fetching pages for every desk are a proxy’s jobs. The other boxes handle servers, email or addresses.

#### Question in the draw: l16-g-aaa

A chat, with its history: "Kim, Security", Chat with the help desk.

> (Kim, Security, at the left) The VPN, the office Wi-Fi and the switches each keep their own list of accounts. When someone leaves we remove them in three places, and after last night’s break-in we could not tell who had signed in. One server should do all of it. Which role?

**Which role?**
(the options come in an order that depends on the seed of the question)
- AAA (right)
- Syslog — if chosen: Syslog collects log messages. It does not check anyone’s account, so the three lists would stay.
- DHCP — if chosen: DHCP hands out IP addresses and does not check accounts.
- DNS — if chosen: DNS turns names into addresses and does not check accounts.

After the answer: the deciding words are marked. Reason: One place to check who signs in, what they may use and what they did is AAA. Syslog collects messages that others send but does not decide who is let in.

#### Question in the draw: l16-g-file

A chat, with its history: "Rae, Accounting", Chat with the help desk.

> (Rae, Accounting, at the left) This morning the shared drive S: is gone from every computer in accounting. Web pages open, email arrives, printing works, and nobody has trouble signing in. Which of our server roles is down?

**Which role is down?**
(the options come in an order that depends on the seed of the question)
- The file share (right)
- The print server — if chosen: Printing works, so the print server is up.
- DNS — if chosen: Web pages open by name, so DNS is working.
- DHCP — if chosen: The computers still have addresses and work, so DHCP is not the fault.

After the answer: the deciding words are marked. Reason: Everything works except the shared folders. Web pages by name rule out DNS, working computers rule out DHCP, and printing rules out the print server. That leaves the file share.

#### Question in the draw: l16-r-spam

A chat, with its history: "Pru, Mail admin", Chat with the help desk.

> (Pru, Mail admin, at the left) Too much junk reaches our mail server, and users keep deleting it by hand. We want something in front of the mail server that filters email before it arrives. What is it?

**What is it?**
(the options come in an order that depends on the seed of the question)
- A spam gateway (right)
- A load balancer — if chosen: A load balancer shares requests among servers. It does not read email.
- A file share — if chosen: A file share holds shared folders.
- A proxy server — if chosen: A proxy makes web requests for users. It does not filter email.

After the answer: the deciding words are marked. Reason: A box in front of the mail server that filters incoming email is a spam gateway.

#### Question in the draw: l16-r-utm

A chat, with its history: "Ron, Small business", Chat with the help desk.

> (Ron, Small business, at the left) We are a ten-person office, and one part-time person looks after IT. We want one box at the internet edge that checks traffic against rules, finds harmful files, blocks kinds of web sites and spots break-in attempts. What do we buy?

**What do you buy?**
(the options come in an order that depends on the seed of the question)
- A UTM appliance (right)
- A proxy server — if chosen: A proxy fetches pages and can block sites. It does not do the rest of the bundle.
- A load balancer — if chosen: A load balancer shares requests among servers.
- A spam gateway — if chosen: A spam gateway only filters email.

After the answer: the deciding words are marked. Reason: A firewall, a virus check, a content filter and an intruder alarm in one box is unified threat management, which suits a small office with one part-time person.

#### Question in the draw: l16-r-scada

A chat, with its history: "Sue, Plant manager", Chat with the help desk.

> (Sue, Plant manager, at the left) The controls of our water plant run on a 20-year-old SCADA system that cannot be patched easily. The office laptops share its network. What lowers the risk most?

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Put it on a network apart from the office computers (right)
- Install the maker’s newest update tonight — if chosen: The ticket says it cannot be patched easily, and a failed update at a water plant is a risk of its own.
- Give the office laptops the system’s password — if chosen: That puts it in more hands, not fewer.
- Turn off the antivirus on the office laptops — if chosen: That makes the laptops easier to take over.

After the answer: the deciding words are marked. Reason: When a system cannot be patched, the safe move is distance: its own network, apart from the office computers.

#### Question in the draw: l16-r-iot-pw

A chat, with its history: "Tom, Facilities", Chat with the help desk.

> (Tom, Facilities, at the left) We installed 30 smart thermostats and door cameras. They all still have the maker’s password, which is printed in the manual. What is the first change?

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Give each device its own new password (right)
- Change the office Wi-Fi password — if chosen: The devices would still answer to the maker’s password, so nothing about them is safer.
- Hide the Wi-Fi network’s name — if chosen: A hidden name does not change the password on the devices.
- Unplug the cameras at night — if chosen: They would still be open to the manual’s password whenever they are on.

After the answer: the deciding words are marked. Reason: The weakness is the maker’s password. Replacing it on every device removes it. Each of the other changes leaves it in place.

#### Question in the draw: l16-r-iot-net

A chat, with its history: "Tom, Facilities", Chat with the help desk.

> (Tom, Facilities, at the left) All 30 thermostats and cameras now have their own passwords, but they still share a network with the accounting computers. A camera in the lobby was just found taken over through a flaw that a password does not block. What limits the damage next time?

**What limits the damage?**
(the options come in an order that depends on the seed of the question)
- Keep them on a network apart from the accounting computers (right)
- Choose an even longer password on the camera — if chosen: The flaw works whatever the password is.
- Move the accounting computers to Wi-Fi — if chosen: That moves them but leaves them on the same network as the cameras.
- Turn the lobby camera off — if chosen: That removes one camera and leaves the other 29 on the shared network.

After the answer: the deciding words are marked. Reason: A flaw that a password does not block is limited by distance: devices of that kind sit on their own network, away from the computers that matter.

#### Question in the draw: l16-r-mail

A chat, with its history: "Dan, Office", Chat with the help desk.

> (Dan, Office, at the left) Since 8 this morning everyone’s sent email stays in the outbox and nothing new arrives. Web pages open and shared folders work. Which of our server roles is down?

**Which role?**
(the options come in an order that depends on the seed of the question)
- The mail server (right)
- The web server — if chosen: Web pages open, so the web job is working.
- The file share — if chosen: Shared folders work, so the file share is up.
- DNS — if chosen: Web pages open by name, so DNS is working.

After the answer: the deciding words are marked. Reason: Only email fails. Pages open, so DNS is up, and folders work, so the file share is up. The mail server is the one left.

#### Question in the draw: l16-r-web

A chat, with its history: "Lou, Marketing", Chat with the help desk.

> (Lou, Marketing, at the left) Customers say our company website will not load. Our staff can browse other sites and email works. The site runs on one of our own servers. Which role is down?

**Which role?**
(the options come in an order that depends on the seed of the question)
- The web server (right)
- The mail server — if chosen: Email works, so the mail job is up.
- DHCP — if chosen: Staff computers have addresses and browse other sites, so DHCP is up.
- The print server — if chosen: Printing has nothing to do with web pages.

After the answer: the deciding words are marked. Reason: Only our own site fails while other sites and email work, so the server that serves our pages is down.

#### Question in the draw: l16-r-db

A chat, with its history: "Ana, Order desk", Chat with the help desk.

> (Ana, Order desk, at the left) Our order screen says it cannot load customers. The pages of the order program open, but every list is empty. The program keeps its records on a separate server. Which role is down?

**Which role?**
(the options come in an order that depends on the seed of the question)
- The database server (right)
- The web server — if chosen: The pages open, so the web job is working.
- The file share — if chosen: The program does not keep its records in shared folders.
- The print server — if chosen: Printing has nothing to do with the lists.

After the answer: the deciding words are marked. Reason: The pages load but the records do not, so the part that stores the records is down: the database server.

#### Question in the draw: l16-r-print

A chat, with its history: "Hugh, Front desk", Chat with the help desk.

> (Hugh, Front desk, at the left) Every printer shows ready, yet nothing prints. On the print server a list of waiting jobs grows by the minute. Web pages and shared folders work. Which part is stuck?

**Which part?**
(the options come in an order that depends on the seed of the question)
- The print server’s queue (right)
- The file share — if chosen: Shared folders work, so the file share is up.
- DNS — if chosen: Web pages open, so DNS is working.
- The printers’ paper trays — if chosen: The printers show ready, so paper is not what is stopping the jobs.

After the answer: the deciding words are marked. Reason: The printers are ready, the jobs are waiting and the rest works, so the queue on the print server is stuck.

#### Question in the draw: l16-k-ntp

A chat, with its history: "Eli, Security", Chat with the help desk.

> (Eli, Security, at the left) The logs from the file server and the firewall show times five minutes apart, and some sign-ins fail. Which server role, when it is missing or broken, lets the clocks drift like this?

**Which role?**
(the options come in an order that depends on the seed of the question)
- NTP (right)
- Syslog — if chosen: Syslog collects the log messages. It keeps no clock in step.
- AAA — if chosen: AAA checks accounts. It keeps no clock in step.
- DNS — if chosen: DNS turns names into addresses. It keeps no clock in step.

After the answer: the deciding words are marked. Reason: Clocks that differ by five minutes, with sign-ins failing, are what NTP prevents. Syslog only collects the messages, and AAA checks accounts.

#### Question in the draw: l16-k-balancer

A chat, with its history: "Fran, Web team", Chat with the help desk.

> (Fran, Web team, at the left) Our web site runs on three identical servers. We want the visitors’ requests shared out among them, and sent to the others if one fails. What is the box?

**Which appliance?**
(the options come in an order that depends on the seed of the question)
- A load balancer (right)
- A proxy server — if chosen: A proxy makes requests on behalf of users. It does not share visitors among servers.
- A UTM appliance — if chosen: A UTM is a firewall bundle. It does not share visitors among servers.
- A spam gateway — if chosen: A spam gateway filters email.

After the answer: the deciding words are marked. Reason: Sharing requests among identical servers and skipping a failed one is a load balancer’s job. A proxy, a UTM and a spam gateway do other jobs.

#### Question in the draw: l15-p-dns

A chat, with its history: "Sam, Purchasing", Chat with the help desk.

> (Sam, Purchasing, at the left) I can open the supplier’s site by typing its address, 203.0.113.20, but not by typing its name. Other sites fail by name too.

**Which service is not doing its job?**
(the options come in an order that depends on the seed of the question)
- DNS, port 53 (right)
- DHCP, ports 67 and 68 — if chosen: DHCP hands out addresses. The computer has one, since the number address works.
- HTTP, port 80 — if chosen: HTTP loaded the page when Sam typed the number, so it works.
- LDAP, port 389 — if chosen: LDAP looks up accounts in the company directory. It has nothing to do with website names.

After the answer: the deciding words are marked. Reason: The page loads by number and fails by name. Turning a name into a number is DNS, port 53.

#### Question in the draw: l15-q-443

The question, read aloud as above: **Which port number does HTTPS use? Type the number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 443

After the answer: Reason: HTTPS is HTTP made secure, so nobody on the way can read the page. The plain one is on 80 and the secure one is on 443.

#### Question in the draw: l15-q-dhcp

A chat, with its history: "Ted, Reception", Chat with the help desk.

> (Ted, Reception, at the left) A visitor’s laptop just joined our Wi-Fi and has no address yet. Which service gives it one, and how does that service send its data?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- DHCP, over UDP (right)
- DHCP, over TCP — if chosen: TCP first opens a connection and confirms every piece. The laptop has no address to open one from, so DHCP uses UDP.
- DNS, over UDP — if chosen: DNS turns names into addresses. It does not give the laptop its own address.
- LDAP, over TCP — if chosen: LDAP looks up accounts in the directory. It does not give out addresses.

After the answer: the deciding words are marked. Reason: A device with no address gets one from DHCP, on ports 67 and 68, and it uses UDP: one short message with no connection to open.

#### Question in the draw: l15-t-web

A chat, with its history: "Kai, Finance", Chat with the help desk.

> (Kai, Finance, at the left) Since this morning nobody can open our bank’s login page, which starts with https://. Plain http:// pages and everything else work.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Block
> 25  |  Block
> 23  |  Block

**Which blocked port explains it?**
(the options come in an order that depends on the seed of the question)
- 443 (right)
- 80 — if chosen: 80 is the plain HTTP door, and plain pages open, so 80 is working.
- 25 — if chosen: Port 25 is blocked, but it is the mail-sending service. Pages do not use it.
- 23 — if chosen: Port 23 is blocked, but it is Telnet, for typing commands on another computer. Pages do not use it.
- Clear the browser’s saved data and try again — if chosen: Clearing it is cheap, but the list already shows blocked ports, and plain pages open from the same browser.

After the answer: the deciding words are marked. Reason: Pages that start with https:// use port 443, the secure partner of 80. Of the three blocked lines, only 443 is a web door.

#### Question in the draw: l15-q-dns

A chat, with its history: "Fay, Network team", Chat with the help desk.

> (Fay, Network team, at the left) I am writing the firewall rule for name lookups on port 53. Most answers are short, and a few are too big for one short message. How does DNS deliver?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- By UDP for short answers and by TCP for big ones (right)
- By UDP only, because every answer is short — if chosen: Some answers are too big for one short message, and those go by TCP.
- By TCP only, because lookups must arrive whole — if chosen: The usual short lookup goes by UDP. TCP is the second way, used for big answers.
- By TCP for short answers and by UDP for big ones — if chosen: It is the other way round: UDP for the short answers, TCP for the big ones.

After the answer: the deciding words are marked. Reason: Port 53 is used both ways: UDP for the short answers, TCP for the big ones.

#### Question in the draw: l15-t-none

A chat, with its history: "Zed, Reception", Chat with the help desk.

> (Zed, Reception, at the left) Nothing opens by name on the front desk computer, but typing the address 203.0.113.20 loads the supplier’s site. The firewall was changed this morning.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Allow
> 3389  |  Block
> 23  |  Block
> 137, 138, 139  |  Block

**Which blocked line explains it?**
(the options come in an order that depends on the seed of the question)
- 3389 — if chosen: 3389 is Remote Desktop. It has nothing to do with looking up names.
- 23 — if chosen: 23 is Telnet. It has nothing to do with looking up names.
- 137, 138, 139 — if chosen: These are NetBIOS names inside Windows networks. Websites are looked up by DNS, port 53, which is allowed.
- None: port 53 is allowed, so the fault is not in this list (right)

After the answer: the deciding words are marked. Reason: Looking up a name is DNS, port 53, and it is allowed. The blocked lines are other jobs, so the list does not explain it.

#### Question in the draw: l15-k-443

The question, read aloud as above: **Which service uses port 443? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - HTTPS
  - HTTP Secure
  - Hypertext Transfer Protocol Secure

After the answer: Reason: Port 443 is HTTPS, the web with its pages encrypted, the padlock in the browser. Plain HTTP is on port 80.

#### Question in the draw: l15-k-dhcp

The question, read aloud as above: **DHCP uses two port numbers, one for the server and one for the device. Type both numbers.**

**Type both numbers.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 67 68
  - 68 67

After the answer: Reason: DHCP, which hands out addresses, uses 67 for the server and 68 for the device.

#### Question in the draw: l15-k-udp

A chat, with its history: "Mo, Network team", Chat with the help desk.

> (Mo, Network team, at the left) Our monitoring tool lists the services that deliver by UDP, the quick way with no connection. Which one of these should be on its list?

**Which service uses UDP?**
(the options come in an order that depends on the seed of the question)
- DHCP, handing out addresses (right)
- SMTP, sending mail — if chosen: Mail must arrive whole, so SMTP uses TCP, which confirms each piece.
- FTP, moving files — if chosen: A file must arrive whole, so FTP uses TCP.
- HTTPS, secure web pages — if chosen: Web pages must arrive whole, so HTTPS uses TCP.

After the answer: the deciding words are marked. Reason: DHCP uses UDP. Web, mail and file moving must arrive whole, so they use TCP.

#### Question in the draw: l15-r-dnsname

The question, read aloud as above: **Which service uses port 53? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - DNS
  - Domain Name System

After the answer: Reason: Port 53 is DNS, the phone book that turns a name into the number address.

#### Question in the draw: l15-r-lock

A chat, with its history: "Quin, Web team", Chat with the help desk.

> (Quin, Web team, at the left) The staff portal opens as http:// and the browser warns Not secure. The company wants it reached with the padlock. Which port must the firewall allow for that?

**Which port?**
(the options come in an order that depends on the seed of the question)
- 443, for HTTPS (right)
- 80, for HTTP — if chosen: Port 80 is the plain version, the one that gave the warning.
- 53, for DNS — if chosen: DNS turns names into addresses. It does not carry the page.
- 67, for DHCP — if chosen: DHCP hands out addresses. It does not carry the page.

After the answer: the deciding words are marked. Reason: Web pages with the padlock are HTTPS, port 443. Port 80 carries the plain, readable version.

#### Question in the draw: l15-r-dhcpdev

The question, read aloud as above: **DHCP uses ports 67 and 68. Which one does the device asking for an address use? Type the number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 68

After the answer: Reason: The DHCP server listens on 67 and the device that requests an address uses 68.

#### Question in the draw: l15-k-dns

A chat, with its history: "Hal, Network team", Chat with the help desk.

> (Hal, Network team, at the left) The new firewall allows port 53 only for UDP. Short name lookups work, but a few lookups with big answers fail. What do we change?

**What do we change?**
(the options come in an order that depends on the seed of the question)
- Also allow port 53 for TCP (right)
- Also allow ports 67 and 68 — if chosen: Those are DHCP, which hands out addresses. They do not carry lookups.
- Allow port 443 for TCP — if chosen: Port 443 is HTTPS, the secure web. Lookups go through 53.
- Change port 53 to TCP only — if chosen: That would stop the short lookups, which go by UDP.

After the answer: the deciding words are marked. Reason: Short DNS answers go by UDP and big ones by TCP, both on port 53. Allowing only one way breaks the other.

#### Question in the draw: l15-p-imap

A chat, with its history: "Lena, Sales", Chat with the help desk.

> (Lena, Sales, at the left) I read a message on my phone, but my laptop still shows it as new. A message I deleted on the laptop is still on the phone. How do I get them to agree?

**Which mail service should both be using to receive mail?**
(the options come in an order that depends on the seed of the question)
- IMAP, port 143 (right)
- POP3, port 110 — if chosen: POP3 downloads mail to one device and usually removes it from the server, so each device ends with its own copy.
- SMTP, port 25 — if chosen: SMTP sends mail out. It does not keep or show a mailbox.
- SMB, port 445 — if chosen: SMB shares folders and printers on a Windows network. It does not keep a mailbox.

After the answer: the deciding words are marked. Reason: Two devices that must agree on what is read and deleted need the mail kept on the server: IMAP, port 143. POP3 on 110 downloads it to one device, and SMTP on 25 only sends.

#### Question in the draw: l15-q-smtp

The question, read aloud as above: **Mail going out is sent by a service on port 25. Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SMTP
  - Simple Mail Transfer Protocol

After the answer: Reason: SMTP, Simple Mail Transfer Protocol, sends mail out and passes it from server to server. S is for sending. POP3 and IMAP receive.

#### Question in the draw: l15-t-send

A chat, with its history: "Ruth, Accounts", Chat with the help desk.

> (Ruth, Accounts, at the left) My mail program, set to send on SMTP’s own port, receives mail, but every message I send sits in the Outbox.

A plain table, "The office firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 25  |  Block
> 110  |  Allow
> 143  |  Allow
> 80  |  Allow
> 3389  |  Block
> 22  |  Block

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The blocked line for port 25 stops mail going out. (right)
- The blocked line for port 22 stops mail going out. — if chosen: Port 22 is blocked, but it is SSH, for typing commands on another computer.
- The blocked line for port 3389 stops mail going out. — if chosen: Port 3389 is blocked, but it is Remote Desktop, which shows another computer’s screen.
- The allowed line for port 143 stops mail going out. — if chosen: Port 143 is allowed, and it receives mail. Sending is the failing job.
- Reinstall the mail program and send again. — if chosen: Receiving works from the same program, so the program is not the fault, and the list already shows a blocked line that fits.

After the answer: the deciding words are marked. Reason: Receiving works and sending fails, so the sending service is the one to check. That is port 25. Of the blocked lines, 22 and 3389 are other jobs.

#### Question in the draw: l15-t-tcp

A chat, with its history: "Gus, Network team", Chat with the help desk.

> (Gus, Network team, at the left) I am writing a firewall rule that only needs TCP. Which of these lists has services that all deliver by TCP?

**Which list is all TCP?**
(the options come in an order that depends on the seed of the question)
- SMTP, POP3, IMAP and HTTPS (right)
- SMTP, POP3, IMAP and DHCP — if chosen: DHCP delivers by UDP; the other three are TCP.
- HTTPS, SSH, RDP and NetBIOS names on 137 — if chosen: NetBIOS names on 137 deliver by UDP; the others are TCP.
- SMB, FTP, SSH and DHCP — if chosen: DHCP delivers by UDP; the others are TCP.

After the answer: the deciding words are marked. Reason: Of these services, only DHCP, the short DNS answers and NetBIOS names and messages deliver by UDP. SMTP, POP3, IMAP and HTTPS are all TCP.

#### Question in the draw: l15-k-pop3

The question, read aloud as above: **Type the port number for POP3.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 110

After the answer: Reason: POP3 is port 110. It receives mail by downloading it to one device and usually removing it from the server.

#### Question in the draw: l15-k-smtp

A chat, with its history: "Nia, Sales", Chat with the help desk.

> (Nia, Sales, at the left) My mail program asks for an outgoing mail server. Which service is that, and which port does the exam give for it?

**Which is it?**
(the options come in an order that depends on the seed of the question)
- SMTP, port 25 (right)
- POP3, port 110 — if chosen: POP3 receives mail. The outgoing server is the one that sends.
- IMAP, port 143 — if chosen: IMAP receives mail and keeps it on the server. It does not send.
- HTTP, port 80 — if chosen: HTTP loads web pages. It is not a mail service.

After the answer: the deciding words are marked. Reason: Outgoing mail is sent by SMTP, port 25. POP3 on 110 and IMAP on 143 receive.

#### Question in the draw: l15-r-smtpnum

The question, read aloud as above: **Type the port number for SMTP.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 25

After the answer: Reason: SMTP, the service that sends mail, is port 25.

#### Question in the draw: l15-r-pop

A chat, with its history: "Gil, Support", Chat with the help desk.

> (Gil, Support, at the left) My old mail program downloads my mail to my PC and removes it from the server, so my phone shows an empty mailbox. Which service is the program using?

**Which service is it?**
(the options come in an order that depends on the seed of the question)
- POP3, port 110 (right)
- IMAP, port 143 — if chosen: IMAP leaves the mail on the server, so the phone would see it.
- SMTP, port 25 — if chosen: SMTP sends mail out. It does not receive.
- DNS, port 53 — if chosen: DNS turns names into addresses. It does not handle mail.

After the answer: the deciding words are marked. Reason: Mail pulled down to one PC and gone from the server is POP3, port 110. IMAP, 143, would leave it there.

#### Question in the draw: l15-r-imapname

The question, read aloud as above: **Which service uses port 143? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - IMAP
  - Internet Message Access Protocol

After the answer: Reason: Port 143 is IMAP, which keeps mail on the server so every device shows the same mailbox.

#### Question in the draw: l15-p-share

A chat, with its history: "Ola, Branch office", Chat with the help desk.

> (Ola, Branch office, at the left) The new branch firewall lets web and mail through, but I cannot open the team folder on the head office file server. It is a Windows shared folder. Which port must it allow?

**Which port?**
(the options come in an order that depends on the seed of the question)
- 445, SMB (right)
- 21, FTP — if chosen: FTP moves files to a server as a transfer. A Windows shared folder opens through SMB instead.
- 389, LDAP — if chosen: LDAP looks up accounts in the directory. The folder itself is shared by SMB.
- 25, SMTP — if chosen: SMTP sends mail. Mail already works.
- 22, SSH — if chosen: SSH types commands on another computer. A Windows shared folder opens through SMB instead.

After the answer: the deciding words are marked. Reason: A Windows shared folder is SMB, port 445 (CIFS is its older name). Web and mail already pass, so the door left to open is 445.

#### Question in the draw: l15-q-ftp

The question, read aloud as above: **FTP moves files and uses two port numbers. Type both numbers.**

**Type both numbers.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 20 21
  - 21 20

After the answer: Reason: FTP uses 21 for the commands and 20 for the file data. The password travels as readable text.

#### Question in the draw: l15-t-name

A chat, with its history: "Bo, Lab", Chat with the help desk.

> (Bo, Lab, at the left) The old lab scanner saves scans to a shared folder it finds by the computer’s NetBIOS name. After this morning’s firewall change it says it cannot find the computer.

A plain table, "The lab firewall (changed this morning)":

> Port  |  Rule  (the column heads)
> 137, 138, 139  |  Block
> 445  |  Allow
> 389  |  Allow
> 3389  |  Block

**Which ports must be allowed again?**
(the options come in an order that depends on the seed of the question)
- 137, 138 and 139 (right)
- 445 only — if chosen: That door is already allowed, and the scanner still cannot find the computer. Finding it by NetBIOS name uses other numbers.
- 389 only — if chosen: 389 looks up accounts in the directory, and it is already allowed.
- 3389 only — if chosen: 3389 is blocked, but it is Remote Desktop. The scanner does not use it.

After the answer: the deciding words are marked. Reason: The scanner finds the computer by NetBIOS name, which uses ports 137, 138 and 139. They are the ones the new rule blocks.

#### Question in the draw: l15-t-udp

The question, read aloud as above: **A service delivers its data by TCP or by UDP. Which does NetBIOS use for its names on port 137? Type TCP or UDP.**

**Type TCP or UDP.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - UDP
  - User Datagram Protocol

After the answer: Reason: Port 137 looks up computer names with short messages, so it uses UDP. The sharing session on 139 uses TCP, because shared files must arrive whole.

#### Question in the draw: l15-k-smb

The question, read aloud as above: **Type the port number for SMB, the Windows shared folders and printers.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 445

After the answer: Reason: SMB, also named CIFS, is port 445. It shares folders and printers on a Windows network.

#### Question in the draw: l15-k-netbios

The question, read aloud as above: **Which older Windows service uses ports 137 to 139? Type its name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NetBIOS
  - NetBT
  - NetBIOS over TCP/IP
  - NetBIOS over TCP IP
  - NetBIOS NetBT
  - Network Basic Input/Output System

After the answer: Reason: Ports 137, 138 and 139 are NetBIOS (NetBT): the older way for Windows computers to find each other by name and share files.

#### Question in the draw: l15-r-ftpname

The question, read aloud as above: **Which service uses ports 20 and 21? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - FTP
  - File Transfer Protocol

After the answer: Reason: Ports 20 and 21 are FTP, which moves files to and from a server. 21 carries commands and 20 carries data.

#### Question in the draw: l15-r-cifs

The question, read aloud as above: **SMB has an older name for the same job. Type that name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - CIFS
  - Common Internet File System

After the answer: Reason: CIFS, Common Internet File System, is the older name for SMB, port 445.

#### Question in the draw: l15-r-printer

A chat, with its history: "Ray, Branch office", Chat with the help desk.

> (Ray, Branch office, at the left) Nobody at the branch can reach the shared printer on the head office print server, a Windows shared printer. Web pages and mail work. Which port is blocked?

**Which port?**
(the options come in an order that depends on the seed of the question)
- 445, SMB (right)
- 3389, RDP — if chosen: RDP shows another computer’s screen. It does not share a printer.
- 21, FTP — if chosen: FTP moves files. A shared printer is not an FTP job.
- 143, IMAP — if chosen: IMAP is mail, and mail works.

After the answer: the deciding words are marked. Reason: Shared printers and folders on a Windows network use SMB, port 445. Web and mail pass, so that door is the one left.

#### Question in the draw: l15-k-split

A chat, with its history: "Joy, Lab", Chat with the help desk.

> (Joy, Lab, at the left) Our old NetBIOS rule says 137, 138 and 139 all use TCP. Is that right?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- No: 137 and 138 use UDP, and 139 uses TCP (right)
- Yes: all three use TCP — if chosen: Only the sharing session on 139 uses TCP. Names and short messages use UDP.
- No: all three use UDP — if chosen: The sharing session on 139 moves files and must arrive whole, so it uses TCP.
- No: 137 uses TCP, and 138 and 139 use UDP — if chosen: It is the other way round: 137 and 138 are UDP, and 139 is TCP.

After the answer: the deciding words are marked. Reason: NetBIOS names (137) and short messages (138) are UDP. The sharing session (139) is TCP.

#### Question in the draw: l15-w-rdp

A chat, with its history: "Anita, Branch office", Chat with the help desk.

> (Anita, Branch office, at the left) Remote Desktop to my computer at head office says it cannot connect. It worked on Friday. Web pages and my email are fine.

A plain table, "The branch firewall: rules for traffic leaving the branch (changed this morning)":

> Port  |  Rule  (the column heads)
> 53  |  Allow
> 80  |  Allow
> 443  |  Allow
> 25  |  Allow
> 23  |  Block
> 3389  |  Block

**Web pages and email work for Anita. What does that show?**
(the options come in an order that depends on the seed of the question)
- The link to head office works, so only one service is stuck. (right)
- Remote Desktop must be working too, so she mistyped. — if chosen: Each service has its own door. Web and mail working says nothing about the door for Remote Desktop.
- Her computer at head office must be switched off. — if chosen: Nothing so far says the computer is off, and the link to head office is clearly up.
- Restart her computer and try Remote Desktop again. — if chosen: A restart is cheap but cuts nothing in half: web and mail working already show the link is fine, and a blocked door stays blocked.

After the answer: the deciding words are marked. Reason: Web pages and mail passing shows the link and the name lookup work. Remote Desktop uses port 3389, and the firewall list shows that number blocked, changed this morning. The other blocked line, 23, is Telnet and has nothing to do with it.
The working:
- Write down every cause that fits “Remote Desktop cannot connect”.: The link between the branch and head office is down; the computer at head office is off; the password is wrong; the door for Remote Desktop is closed somewhere on the way.
- Name your favorite cause and test it with the cheapest check.: The link to head office: it dropped last month. Open a web page and send an email. Both work, so the link is up and the name lookup works.
- Match the symptom to a service and a number.: Remote Desktop is RDP, port 3389. One service fails while the web and mail work, so check that one door.
- Read the firewall list for that number.: 53, 80, 443 and 25 are allowed. Two lines are blocked: 23 and 3389. Remote Desktop is 3389, so that is the line that matters; 23 is Telnet, which nobody should use anyway.
- Act on the result.: The desk’s rule is that firewall changes belong to the network team, so hand them the number and the time: allow 3389 for the branch if the company allows it. The first guess cost a minute; the answer was one number.

#### Question in the draw: l15-p-ssh

A chat, with its history: "Dev, Network team", Chat with the help desk.

> (Dev, Network team, at the left) I need to type commands on the new Linux server (a company computer that runs Linux, an operating system like Windows, and serves others) from my desk. The security rule says nothing typed, passwords included, may travel as readable text. Which service do I allow through the firewall?

**Which service?**
(the options come in an order that depends on the seed of the question)
- SSH, port 22 (right)
- Telnet, port 23 — if chosen: Telnet does the same job but sends everything, passwords too, as readable text. SSH replaced it.
- RDP, port 3389 — if chosen: RDP shows the screen of a Windows computer. The job here is typing commands.
- FTP, port 21 — if chosen: FTP moves files. It gives no place to type commands.

After the answer: the deciding words are marked. Reason: The job is typing commands on another computer, with nothing readable on the way. That is SSH on port 22. Telnet on 23 does the job in plain text.

#### Question in the draw: l15-q-telnet

A chat, with its history: "Una, Security", Chat with the help desk.

> (Una, Security, at the left) Our audit found an old switch (a box that joins office network cables) managed from a desk over port 23. The auditor says to stop. Why, and what do we use?

**Which is right?**
(the options come in an order that depends on the seed of the question)
- Port 23 is Telnet, which sends passwords as readable text. Use SSH. (right)
- Port 23 is Telnet, which is too slow. Use RDP. — if chosen: Speed is not the problem, and RDP shows a Windows screen. The fault is the readable password.
- Port 22 is Telnet, which sends passwords as readable text. Use SSH. — if chosen: Telnet is on 23. Port 22 is SSH, the encrypted one.
- Port 23 is SSH, which is secure. Leave it as it is. — if chosen: SSH is on 22. Port 23 is Telnet, the unencrypted one.

After the answer: the deciding words are marked. Reason: Port 23 is Telnet, which sends passwords as readable text. SSH on port 22 is the encrypted replacement for the same job.

#### Question in the draw: l15-q-ldap

The question, read aloud as above: **Computers look up user accounts in the company directory over LDAP. Type its port number.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 389

After the answer: Reason: LDAP, port 389, looks up accounts, passwords and computers in the company directory, such as Active Directory.

#### Question in the draw: l15-t-who

A chat, with its history: "Wes, Security", Chat with the help desk.

> (Wes, Security, at the left) Our firewall log shows hundreds of connection attempts from outside, all to port 3389 on our computers. What is someone trying to reach?

**What is on port 3389?**
(the options come in an order that depends on the seed of the question)
- Remote Desktop, the screens of our computers (right)
- Mail, our mail server — if chosen: Mail uses 25, 110 and 143.
- Shared folders on the file server — if chosen: Shared folders use SMB on port 445.
- The web server, our website — if chosen: A website uses 80 and 443.

After the answer: the deciding words are marked. Reason: Port 3389 is Remote Desktop. A log full of attempts on it is someone trying to reach the screens of the computers.

#### Question in the draw: l15-t-rdp

The question, read aloud as above: **Port 3389 lets you use another Windows computer’s screen. Type the short name of the service.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - RDP
  - Remote Desktop
  - Remote Desktop Protocol

After the answer: Reason: RDP, Remote Desktop Protocol, is port 3389. It shows you another Windows computer’s screen and lets you use it.

#### Question in the draw: l15-k-ssh

The question, read aloud as above: **Type the port number for SSH.**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 22

After the answer: Reason: SSH is port 22: typing commands on another computer over an encrypted link. Telnet is the unencrypted one next to it, on 23.

#### Question in the draw: l15-k-rdp

A chat, with its history: "Ivo, Security", Chat with the help desk.

> (Ivo, Security, at the left) We are blocking port 3389 on the firewall today. What will stop working for our staff?

**What stops working?**
(the options come in an order that depends on the seed of the question)
- Remote Desktop to the office computers (right)
- Receiving mail on the phone — if chosen: Receiving mail uses 110 or 143.
- Opening secure web pages — if chosen: Secure pages use 443.
- Opening shared folders — if chosen: Shared folders use SMB on 445.
- Nothing: a ping to each computer still works — if chosen: A ping only shows that a computer is there. Port 3389 is a door, and blocking it stops the service behind it.

After the answer: the deciding words are marked. Reason: Port 3389 is Remote Desktop. Blocking it stops that one service and leaves mail, web pages and shared folders alone.

#### Question in the draw: l15-k-telnet

The question, read aloud as above: **Telnet sends passwords as readable text. Which service replaced it? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SSH
  - Secure Shell

After the answer: Reason: SSH, Secure Shell, replaced Telnet. It does the same job of typing commands on another computer, but encrypted.

#### Question in the draw: l15-r-rdpnum

The question, read aloud as above: **Type the port number for Remote Desktop (RDP).**

**Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 3389

After the answer: Reason: RDP, Remote Desktop, is port 3389.

#### Question in the draw: l15-r-ldapname

The question, read aloud as above: **Which service uses port 389? Type its short name.**

**Type the short name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - LDAP
  - Lightweight Directory Access Protocol

After the answer: Reason: Port 389 is LDAP, which looks up accounts and computers in the company directory.

#### Question in the draw: l15-r-vendor

A chat, with its history: "Sol, Facilities", Chat with the help desk.

> (Sol, Facilities, at the left) The vendor of our door-lock controller says its tool connects with Telnet on port 23. Our rule is encrypted remote typing only. What do we tell them?

**What do you tell them?**
(the options come in an order that depends on the seed of the question)
- Use SSH on port 22 instead. (right)
- Port 23 is fine inside the office. — if chosen: Readable text can be read by anyone who can see the traffic, inside the office too.
- Use Remote Desktop on port 3389. — if chosen: RDP shows a Windows screen. A lock controller needs typed commands.
- Use FTP on port 21 instead. — if chosen: FTP moves files and is also readable text.

After the answer: the deciding words are marked. Reason: Telnet on 23 sends everything readable. SSH on 22 does the same job encrypted, so it meets the rule.

#### Question in the draw: l15-r-ldaptcp

A chat, with its history: "Kit, Network team", Chat with the help desk.

> (Kit, Network team, at the left) We are writing rules for the directory (LDAP, 389) and for Remote Desktop (3389). Which delivery is the usual one for both?

**Which delivery?**
(the options come in an order that depends on the seed of the question)
- TCP for both (right)
- UDP for both — if chosen: UDP is for DHCP, short DNS answers and NetBIOS names and messages.
- UDP for LDAP, TCP for RDP — if chosen: LDAP is normally TCP.
- TCP for LDAP, UDP for RDP — if chosen: RDP is normally TCP.

After the answer: the deciding words are marked. Reason: LDAP and RDP are normally TCP, though each also has a rarer UDP form.

#### Question in the draw: l17-p-walls

A chat, with its history: "Ravi, Facilities", Chat with the help desk.

> (Ravi, Facilities, at the left) The tax team sits at the far end of the floor behind two brick walls. The office router gives two Wi-Fi names, one on 2.4 GHz and one on 5 GHz. Their laptops show one bar on the 5 GHz name and three bars on the 2.4 GHz name.

**Which name do you tell them to use, and why?**
(the options come in an order that depends on the seed of the question)
- The 2.4 GHz name, because that band reaches farther and passes walls better (right)
- The 5 GHz name, because it is faster and the signal only needs to be good enough — if chosen: A higher frequency carries more data over a shorter distance, and walls absorb it more. One bar is not good enough.
- Either name, since bars are only a rough guide and the faster standard wins — if chosen: Bars show how well the laptop hears the router. Here the 5 GHz name is heard least, because walls absorb it more.
- Neither: move the laptops closer to the router and test both names there — if chosen: The tax team cannot move. The bars already show which band the walls leave strongest.

After the answer: the deciding words are marked. Reason: The deciding words are two brick walls and more bars on 2.4 GHz. The 2.4 GHz band has the longest reach and goes through walls best; 5 GHz is faster, but its reach is shorter.

#### Question in the draw: l17-s-chan

A chat, with its history: "Ola, Training", Chat with the help desk.

> (Ola, Training, at the left) The Wi-Fi in our building is slow. The analyzer shows neighbors on 2.4 GHz channels 1 and 6, and our router is on channel 3, which overlaps both.

**Which channel do you move the router to?**
(the options come in an order that depends on the seed of the question)
- Channel 11 (right)
- Channel 4, which sits between the neighbors on 1 and 6 — if chosen: Each channel is 20 MHz wide and they are 5 MHz apart, so channel 4 still overlaps both 1 and 6.
- Channel 8, a few steps away from the neighbor on 6 — if chosen: Channel 8 sits two steps from 6, so it overlaps 6.
- Channel 2, the one right next to the neighbor on 1 — if chosen: Channel 2 sits one step from 1, so it overlaps 1.

After the answer: the deciding words are marked. Reason: Two networks that overlap share the air and slow each other. On 2.4 GHz only channels 1, 6 and 11 are clear of each other, so with 1 and 6 taken the free lane is 11.

#### Question in the draw: l17-g-std

A chat, with its history: "Sam, Warehouse", Chat with the help desk.

> (Sam, Warehouse, at the left) Our scanner guns can only use 802.11g. The new router gives a 2.4 GHz name and a 5 GHz name.

**Which name can the scanners join?**
(the options come in an order that depends on the seed of the question)
- The 2.4 GHz name (right)
- The 5 GHz name — if chosen: 802.11a is the old 5 GHz one. 802.11g is on 2.4 GHz.
- Either: they pick the faster one — if chosen: A device can use only a band its radio has, and 802.11g has only 2.4 GHz.
- The 6 GHz name — if chosen: 6 GHz needs a Wi-Fi 6E or 7 device.

After the answer: the deciding words are marked. Reason: The standard decides the band. 802.11b and 802.11g are 2.4 GHz only, 802.11a is 5 GHz only.

#### Question in the draw: l17-k-ax

The question, read aloud as above: **The box of a new router says 802.11ax. What Wi-Fi name does that standard go by on the box?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Wi-Fi 6
  - WiFi 6

After the answer: Reason: 802.11ax is Wi-Fi 6. The numbered names run: 802.11n is Wi-Fi 4, 802.11ac is Wi-Fi 5, 802.11ax is Wi-Fi 6 and 802.11be is Wi-Fi 7.

#### Question in the draw: l17-r-width

A chat, with its history: "Pat, Facilities", Chat with the help desk.

> (Pat, Facilities, at the left) Our 2.4 GHz Wi-Fi is crowded, and a colleague says to set the channel width to 40 MHz to double the speed.

**What happens if you do?**
(the options come in an order that depends on the seed of the question)
- It leaves fewer clear channels and takes in more noise, so it can get slower (right)
- The speed doubles in practice, because a wider channel carries twice the data — if chosen: In a quiet place it would, but 2.4 GHz is small and crowded, so the gain is lost.
- The range doubles as well, because a wider channel reaches much farther — if chosen: Width changes how much data goes at once, not how far it reaches.
- Nothing changes, since 40 MHz is the standard width for 2.4 GHz — if chosen: The standard width on 2.4 GHz is 20 MHz. 40 MHz is allowed but takes in more noise.

After the answer: the deciding words are marked. Reason: Width is how wide a channel is: 20, 40, 80 or 160 MHz. Wider is faster only where there is room, and 2.4 GHz has room for little. It should stay at 20 MHz.

#### Question in the draw: l17-r-n

The question, read aloud as above: **Which Wi-Fi generation name goes with the 802.11n standard, the one that works on both 2.4 and 5 GHz?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Wi-Fi 4
  - WiFi 4

After the answer: Reason: 802.11n is Wi-Fi 4. It was the first standard to work on both 2.4 GHz and 5 GHz.

#### Question in the draw: l17-r-six

A chat, with its history: "Ivy, Design", Chat with the help desk.

> (Ivy, Design, at the left) My new router has a 6 GHz name, but my three-year-old laptop does not see it. The laptop sees the 2.4 and 5 GHz names.

**Why not?**
(the options come in an order that depends on the seed of the question)
- The laptop’s radio is older than Wi-Fi 6E, the first generation that can use 6 GHz (right)
- 6 GHz reaches too far, so it is hidden from nearby devices and shows only far away — if chosen: 6 GHz has the shortest reach of the three bands, so it is not hidden by distance.
- The 6 GHz name is switched off whenever the 5 GHz name is on at the same time — if chosen: Each band is separate; one does not switch the other off.
- The laptop needs a driver update before it can see any new name — if chosen: The laptop sees the 2.4 and 5 GHz names, so its driver works. Its radio lacks the 6 GHz band.

After the answer: the deciding words are marked. Reason: 6 GHz needs a Wi-Fi 6E or Wi-Fi 7 radio in the device. An older laptop sees only 2.4 and 5 GHz.

#### Question in the draw: l17-s-nfc

A chat, with its history: "Hana, Retail", Chat with the help desk.

> (Hana, Retail, at the left) The new card reader takes payment when a customer holds a phone against it, almost touching, with nothing to pair first. What kind of radio is that?

**Which technology is it?**
(the options come in an order that depends on the seed of the question)
- NFC (right)
- Bluetooth — if chosen: Bluetooth reaches several meters and has to be paired first. Payment by a tap does not pair.
- 5 GHz Wi-Fi — if chosen: Wi-Fi joins a device to a network over many meters. A payment tap needs no network name or password.
- Cellular data — if chosen: Cellular links a phone to a tower far away, not to a reader a few centimeters off.

After the answer: the deciding words are marked. Reason: A phone held almost touching means a range of a few centimeters. That is NFC, near field communication.

#### Question in the draw: l17-k-rfid

A chat, with its history: "Joel, Warehouse", Chat with the help desk.

> (Joel, Warehouse, at the left) We put a cheap tag with no battery on every pallet. A reader at the dock door picks up all the tags on a pallet as the forklift drives through.

**Which technology is that?**
(the options come in an order that depends on the seed of the question)
- RFID (right)
- NFC — if chosen: NFC is a kind of RFID with a very short reach that works from only a few centimeters, too short for a forklift driving past a door.
- Bluetooth — if chosen: Bluetooth devices pair one to one and need their own power. A cheap tag with no battery cannot do that.
- Wi-Fi — if chosen: Wi-Fi joins devices to a network and needs a powered radio, which a tag with no battery does not have.

After the answer: the deciding words are marked. Reason: Tags without a battery, read from a distance by a reader, are RFID. The reader’s signal powers each tag. NFC reaches only a few centimeters, and Bluetooth and Wi-Fi need powered, paired devices.

#### Question in the draw: l17-r-bt

A chat, with its history: "Jo, New hire", Chat with the help desk.

> (Jo, New hire, at the left) I want my wireless headset to work with my laptop from my desk and when I walk a few meters away. I had to confirm a code on both when I first connected them.

**What is the radio called?**
(the options come in an order that depends on the seed of the question)
- Bluetooth (right)
- NFC — if chosen: NFC works only from a few centimeters, so you could not walk away.
- RFID — if chosen: RFID reads tags. A headset is not a tag, and it does not pair.
- Wi-Fi, since the headset works across the room — if chosen: Wi-Fi joins a device to a network. The headset pairs straight with the laptop and needs no network name or password.

After the answer: the deciding words are marked. Reason: Pairing two devices that stay joined across a few meters is Bluetooth.

#### Question in the draw: l17-r-nfc

The question, read aloud as above: **Name the radio that works only from a few centimeters, used for tapping a phone to pay.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NFC
  - near field communication

After the answer: Reason: NFC, near field communication, works over a few centimeters. It is why a phone must be held almost touching.

#### Question in the draw: l17-r-rfid

The question, read aloud as above: **Name the technology in which a reader uses radio to read a small tag, often with no battery in it, used for badges and for stock.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - RFID
  - radio frequency identification

After the answer: Reason: RFID, radio frequency identification: the reader’s signal powers the tag, which sends back its number.

#### Question in the draw: l17-w-room

A chat, with its history: "Rosa, Sales", Chat with the help desk.

> (Rosa, Sales, at the left) The Wi-Fi in the conference room crawls every afternoon and video calls freeze. Other rooms are fine. I think our internet line is bad.

A plain table, "Wi-Fi analyzer, conference room, 2.4 GHz band":

> Network  |  Channel  |  Signal  (the column heads)
> Our office network  |  6  |  Strong
> CafeGuest  |  6  |  Strong
> Studio5  |  6  |  Medium
> NetHome-77  |  7  |  Medium

A written note: "Your notes", On the desk.

> The router offers a 2.4 GHz name and a 5 GHz name, and Rosa’s laptop can use both. A wall jack in the room goes to the same switch as the office.

**You plug her laptop into the wall jack: a speed test gives 280 Mbps. On Wi-Fi in the same spot it gives 12 Mbps. What does that show?**
(the options come in an order that depends on the seed of the question)
- The internet line is fine; the slow part is the Wi-Fi in this room. (right)
- The internet line is slow in the afternoons, and the Wi-Fi shows it first. — if chosen: A slow line would be slow on the cable too. The cable test was fast.
- The laptop’s network card is failing, so every connection it makes is slow. — if chosen: The card is part of the cable test too, and it gave 280. Only the wireless path differs.

After the answer: the deciding words are marked. Reason: Rosa blamed the line. One cable test split the path: fast by cable, slow on Wi-Fi, so the line was ruled out. The analyzer then showed four networks on channels 6 and 7, three of them on channel 6, so the cause was a crowded channel, fixed by one change of band.
The working:
- Write down every cause that fits “slow in one room”.: The internet line; the router; a crowded Wi-Fi channel or noise from something else; distance and walls; the laptop.
- Name the favorite cause and test it cheaply.: Rosa says the line. The cheapest cut is one cable: plug the laptop into the wall and run the same speed test.
- Drop the cause the test rules out.: The line and the router are fine at 280 Mbps. Everything before the radio link works, so look at the radio link.
- Test the next cause with a Wi-Fi analyzer.: The analyzer lists four networks on 2.4 GHz, ours included: three on channel 6 and one on channel 7. Our own is one of the three on channel 6, so those three share the same lane and take turns.
- Change one thing: leave the crowded band.: The router offers a 5 GHz name and her laptop can use it; 5 GHz has far more channels and fewer neighbors. She joins the 5 GHz name and the speed test gives 180 Mbps.
- Check with Rosa and write it up.: The call stays smooth. The note says: slow in conference room, line fine by cable, 2.4 GHz channel 6 crowded, moved to 5 GHz.

#### Question in the draw: l17-p-lunch

A chat, with its history: "Dan, Front desk", Chat with the help desk.

> (Dan, Front desk, at the left) The Wi-Fi at the reception desk cuts out for a minute or two around noon and then comes back. The break room is on the other side of the wall, and people heat their lunch there. The laptop uses the router’s 2.4 GHz name. The router also has a 5 GHz name, and the laptop can use it.

**What is the cheapest thing to try first?**
(the options come in an order that depends on the seed of the question)
- Join the 5 GHz name, which a microwave oven does not disturb (right)
- Raise the channel width to 40 MHz so the signal is stronger and the dropouts stop — if chosen: Width is not strength. A wider channel takes in more of the band, and on 2.4 GHz that means more noise, not less.
- Restart the laptop and see whether the dropout still happens at noon — if chosen: A restart is cheap but cannot tell noise from any other cause, and the drop matches lunchtime in the next room.
- Call the internet provider about the noon outage — if chosen: The line is not shown to fail. A drop at noon that clears alone points to the radio side.

After the answer: the deciding words are marked. Reason: The deciding words are around noon, the break room beyond the wall and the 2.4 GHz name. A microwave oven shares that band, so moving to 5 GHz is the cheap test that splits noise from every other cause.

#### Question in the draw: l17-s-wired

A chat, with its history: "Gus, Warehouse", Chat with the help desk.

> (Gus, Warehouse, at the left) Everything online is slow at my desk, Wi-Fi and all. We pay for 300 Mbps. Is it the Wi-Fi?

A plain table, "Speed tests from Gus’s laptop, same time":

> Connection  |  Result  (the column heads)
> Plugged into the wall jack by cable  |  14 Mbps
> On Wi-Fi, 5 GHz, same spot  |  13 Mbps

**What does the test show?**
(the options come in an order that depends on the seed of the question)
- The slow part is before the Wi-Fi: the line or the router’s connection to it (right)
- The 5 GHz channel is crowded and the router needs a different channel — if chosen: A crowded channel would slow only the Wi-Fi. The cable gave the same result.
- The laptop’s wireless card is failing, so both connections run slowly — if chosen: The card is not used on the cable, and the cable is slow as well.
- Nothing yet; run the same test again until the numbers differ — if chosen: The two numbers already split the path: they match, so the problem is shared by both.

After the answer: the deciding words are marked. Reason: By cable and by Wi-Fi both give almost the same low speed. What both paths share is the line and the router’s link to it, so look there, not at channels.

#### Question in the draw: l17-g-auth

A chat, with its history: "Eli, Sales", Chat with the help desk.

> (Eli, Sales, at the left) Since the router was replaced last night I cannot join the Wi-Fi from my old tablet. It says authentication failed. I typed the password slowly, twice. My new phone joined fine. The router’s security page now shows only its newest type.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The tablet is too old to use the router’s security type, so the sign-in is refused (right)
- The 2.4 GHz channel is crowded, so the tablet times out when it signs in — if chosen: Crowding makes Wi-Fi slow or patchy. It does not turn the sign-in away.
- The tablet is too far from the router, and the weak signal makes it fail — if chosen: Distance gives a weak or dropping signal, not a refused sign-in. The message here is about authentication.
- The password is wrong, so he should try typing it a third time more slowly — if chosen: He typed it twice and the phone joined with the same one. Typing it again changes nothing.

After the answer: the deciding words are marked. Reason: The deciding words are authentication failed, an old tablet, a new phone that joins and a router with only its newest type. The one thing that differs is the security type the device can speak.

#### Question in the draw: l17-k-far

A chat, with its history: "Mika, Design", Chat with the help desk.

> (Mika, Design, at the left) My new laptop has Wi-Fi 6E. On the router’s 6 GHz name it is very fast beside the router, but it drops in the meeting room two walls away. The router also has a 5 GHz and a 2.4 GHz name, and the laptop can use all three.

**What is the cheapest thing to try first?**
(the options come in an order that depends on the seed of the question)
- Join the 5 GHz name, which reaches farther through walls than 6 GHz (right)
- Raise the channel width to 160 MHz to get more signal into the meeting room — if chosen: A wider channel carries more data over a short distance. It does not extend the reach.
- Replace the laptop’s wireless card — if chosen: Nothing points at the card. The problem follows the walls and the distance.
- Run a speed test beside the router — if chosen: Beside the router it already works, so that test cannot say why the meeting room drops.

After the answer: the deciding words are marked. Reason: It is fast close by and drops two walls away, so reach is the cause. 6 GHz reaches the least of the three bands, so a step down to 5 GHz is the cheap test.

#### Question in the draw: l17-r-tool

A chat, with its history: "Kai, Operations", Chat with the help desk.

> (Kai, Operations, at the left) The Wi-Fi in our building is slow in the evenings. Which tool shows me every network nearby and the channel each is on?

**Which tool is it?**
(the options come in an order that depends on the seed of the question)
- A Wi-Fi analyzer (right)
- A cable tester, which shows the networks in the air by reading the wires — if chosen: A cable tester checks the wires inside a network cable, not radio.
- A toner probe, which traces the signal of each network around the building — if chosen: A toner probe finds a cable by tracing a tone along it.
- A speed test, which lists the networks it finds on its way — if chosen: A speed test measures one connection. It does not list the networks around you.

After the answer: the deciding words are marked. Reason: The tool that shows networks and channels in the air is a Wi-Fi analyzer. It lets you pick a lane that is free.

#### Question in the draw: l17-r-night

A chat, with its history: "Bo, Resident", Chat with the help desk.

> (Bo, Resident, at the left) The Wi-Fi in my apartment drops every few minutes, on every device. I moved the router to a free channel, then to 5 GHz, and it still drops. A router borrowed from the next office, put in the same spot, stays steady for an hour.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Replace the router with a working one (right)
- Change the channel a third time and look at the speed test again — if chosen: Two channel changes already ruled out the air; the swap pointed at the router.
- Run another speed test on the borrowed router to double-check it — if chosen: It already proved the spot is fine.
- Call the provider about the line — if chosen: The borrowed router works on the same line.

After the answer: the deciding words are marked. Reason: The swap with a known-good router split the problem: same spot, same line, steady. After two changes that did nothing, replacing the router is the right step.

#### Question in the draw: l17-r-cabinet

A chat, with its history: "Cy, Facilities", Chat with the help desk.

> (Cy, Facilities, at the left) The whole office Wi-Fi started dropping every few minutes after cleaners moved the router into a metal cabinet by the kitchen door.

**What do you try first?**
(the options come in an order that depends on the seed of the question)
- Put the router back in the open, high and central (right)
- Change every device to the 2.4 GHz name so the signal goes through the metal — if chosen: The change was the router’s place, not the band, and the cabinet will block both.
- Reset every laptop’s network settings and join the Wi-Fi again — if chosen: All devices drop at once, so the common thing is the router.
- Restart the router and see whether it holds a while longer — if chosen: A restart repeats the same setup. The cabinet is what changed, and it is still there.

After the answer: the deciding words are marked. Reason: Everyone drops since the router went into a metal cabinet. Placement is the change, and metal blocks radio. Put it back in the open.

#### Question in the draw: l17-p-wpa3

A chat, with its history: "Una, Office manager", Chat with the help desk.

> (Una, Office manager, at the left) We are setting up the Wi-Fi for a new office. Every laptop and phone we own is under two years old, and the maker’s list says each works with WPA3. The router’s menu offers WPA3, WPA2 with AES, WPA2 with TKIP and None.

**Which security setting do you pick?**
(the options come in an order that depends on the seed of the question)
- WPA3, since every device in the office can use it (right)
- WPA2 with AES, since it is strong and works on every device made — if chosen: WPA2 with AES is strong, but WPA3 is stronger and every device here works with it.
- WPA2 with TKIP, since it is the most widely supported — if chosen: TKIP is the older, weaker way of scrambling the traffic. Nothing here needs it.
- None, with the Wi-Fi name hidden — if chosen: With no encryption anyone in range can read what is sent. Hiding the name does not change that.
- None, since the building door is locked — if chosen: Radio goes through walls and out to the street. A locked door does not keep the signal in.

After the answer: the deciding words are marked. Reason: The rule is the strongest security every device can use. Here every device works with WPA3, so WPA2 would leave strength unused. TKIP is old and weak, and None leaves the traffic open.

#### Question in the draw: l17-s-tkip

A chat, with its history: "Leo, Warehouse", Chat with the help desk.

> (Leo, Warehouse, at the left) The router’s security menu lists WPA2 with AES, WPA2 with TKIP and WPA3 only. Most of our laptops are new, but the scanner guns and two old laptops can do WPA2 with AES and nothing newer.

**Which setting do you pick?**
(the options come in an order that depends on the seed of the question)
- WPA2 with AES (right)
- WPA2 with TKIP — if chosen: TKIP is the weaker, older scrambling. AES works on the same WPA2 devices.
- WPA3 only — if chosen: The scanners and old laptops cannot use WPA3, so they could not join.
- None, so the old devices can join — if chosen: No encryption lets anyone in range read the traffic, and WPA2 with AES already includes the old devices.

After the answer: the deciding words are marked. Reason: The oldest devices only know WPA2, so WPA3 only locks them out. Within WPA2, AES is the strong scrambling and TKIP the old weak one.

#### Question in the draw: l17-g-radius

A chat, with its history: "Mo, HR", Chat with the help desk.

> (Mo, HR, at the left) We have 60 staff. Whenever someone leaves we change the Wi-Fi password and retype it on 59 devices. We want each person to sign in with their own account, so turning off an account turns off their Wi-Fi.

**What do you put in?**
(the options come in an order that depends on the seed of the question)
- Enterprise Wi-Fi security, with a RADIUS server checking each account (right)
- A TACACS+ server that the router queries about each of the staff — if chosen: TACACS+ checks administrators logging in to network devices, not staff joining the Wi-Fi.
- A longer shared Wi-Fi password that is changed each time someone leaves — if chosen: It is still one password for everyone, so the same retyping happens when anyone leaves.
- Kerberos tickets given out by the router to every person — if chosen: Kerberos proves identity for services in a Windows domain. The router queries a RADIUS server.

After the answer: the deciding words are marked. Reason: The wish is one account each, ended by turning the account off. That is Enterprise security with RADIUS. The shared password of Personal security cannot do it, and TACACS+ and Kerberos do different jobs.

#### Question in the draw: l17-k-tacacs

A chat, with its history: "Sue, Network team", Chat with the help desk.

> (Sue, Network team, at the left) Our network admins sign in to the routers and switches. We want one central server that keeps who they are, what each may do and what each did as three separate jobs, and that decides which commands each admin may run.

**Which does that?**
(the options come in an order that depends on the seed of the question)
- TACACS+ (right)
- RADIUS, which checks every user who joins the network — if chosen: RADIUS combines authentication and authorization, and is used mostly for people joining the network, such as Wi-Fi or a VPN.
- Kerberos — if chosen: Kerberos gives sign-in tickets in a Windows domain. It is not made to control the commands on network devices.
- WPA3 — if chosen: WPA3 secures the Wi-Fi link between devices and the router. It does not check admin logins.

After the answer: the deciding words are marked. Reason: The job is admins on network devices, with the three jobs kept apart and each limited to certain commands. That is TACACS+. RADIUS combines authentication and authorization and checks users joining the network.

#### Question in the draw: l17-k-mfa

A chat, with its history: "Ned, Accounts", Chat with the help desk.

> (Ned, Accounts, at the left) A user gave away her password in a phishing email (a fake message that tricks people). I want a change so that the password alone can no longer sign anyone in to her account.

**Which change does that?**
(the options come in an order that depends on the seed of the question)
- Require a code from an app on her phone as well (right)
- Make her password longer and have her change it every month — if chosen: It is still one factor, and the thief now knows the new one.
- Switch the office Wi-Fi from TKIP to AES, so the traffic is scrambled better — if chosen: That changes how the Wi-Fi is scrambled, not how her account signs in.
- Turn off SSID broadcast so the Wi-Fi name is not shown in the list — if chosen: That hides the Wi-Fi name. It has no effect on her account.

After the answer: the deciding words are marked. Reason: Multifactor means two or more of something you know, something you have and something you are. The stolen password is one; the phone code is a second that the thief lacks.

#### Question in the draw: l17-r-kerb

A chat, with its history: "Dee, Accounts", Chat with the help desk.

> (Dee, Accounts, at the left) When I sign in to my Windows computer at work, I am not asked for my password again when I open the file server. What proves it is me?

**Which method does that?**
(the options come in an order that depends on the seed of the question)
- Kerberos, which gives tickets after one sign-in (right)
- RADIUS, which scrambles the Wi-Fi — if chosen: RADIUS checks sign-ins for a network. It does not scramble Wi-Fi.
- TACACS+, which controls the file server’s folders — if chosen: TACACS+ checks administrators on network devices.
- WPA3, which keeps the office Wi-Fi sign-in safe — if chosen: WPA3 secures the Wi-Fi link. It does not give out tickets for file servers.

After the answer: the deciding words are marked. Reason: One sign-in and tickets for every service is Kerberos, the method of a Windows domain.

#### Question in the draw: l17-r-factors

A chat, with its history: "Ada, Finance", Chat with the help desk.

> (Ada, Finance, at the left) Our bank site asks for more than a password when I sign in. I want to explain to the team which kinds of sign-in count as multifactor.

**Which pair is multifactor?**
(the options come in an order that depends on the seed of the question)
- A password and a code from an app on a phone (right)
- A password and a PIN, which she types one after the other — if chosen: Both are things you know, so it is the same kind twice.
- A password and a security question, answered from her memory — if chosen: Both are things you know, so it is the same kind twice.
- A fingerprint and a face scan on the same phone — if chosen: Both are things you are, so it is the same kind twice.

After the answer: the deciding words are marked. Reason: Multifactor takes two or more kinds: something you know, something you have, something you are. A password plus a PIN is one kind twice.

#### Question in the draw: l17-r-tkip

The question, read aloud as above: **Name the older, weak method of scrambling Wi-Fi traffic that the first WPA used and WPA2 replaced with AES. It has four letters.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - TKIP

After the answer: Reason: TKIP is the old method. WPA2 uses AES, which is the strong one.

#### Question in the draw: l17-p-setup

A chat, with its history: "Marta, Accounting", Chat with the help desk.

> (Marta, Accounting, at the left) We start in the new office on Monday. The router is plugged in and everything works. Can you check it is safe to use?

A written note: "The new router", Its settings as it came out of the box.

> Router login: name admin, password admin (the maker’s default for this model)
> Wi-Fi encryption: None, anyone can join
> Firmware (the router’s own software): two years old; the maker’s site lists a newer one that fixes security flaws
> Ports open to the internet: 21 and 23; nothing in the office uses them
> Firewall: On
> Addresses for the office computers (DHCP): On
> Wi-Fi name broadcast: Off, so the name is not in the list

**Tap the four settings that must change before the office uses this router.**
- Tap four sentences in the text above, then tap Answer. Nothing is marked before the answer; Answer opens when that many are tapped.
- "We start in the new office on Monday. The router is plugged in and everything works. Can you check it is safe to use?" — if tapped: That is not the sentence.
- "Router login: name admin, password admin (the maker’s default for this model)" (right)
- "Wi-Fi encryption: None, anyone can join" (right)
- "Firmware (the router’s own software): two years old; the maker’s site lists a newer one that fixes security flaws" (right)
- "Ports open to the internet: 21 and 23; nothing in the office uses them" (right)
- "Firewall: On" — if tapped: That is not the sentence.
- "Addresses for the office computers (DHCP): On" — if tapped: That is not the sentence.
- "Wi-Fi name broadcast: Off, so the name is not in the list" — if tapped: That is not the sentence.

After the answer: the deciding words are marked. Reason: Four settings leave a way in: the default login (published for the model), no encryption, old firmware with known flaws, and ports that nothing uses (21 is FTP and 23 is Telnet, which send passwords as readable text). The firewall and DHCP are meant to be on. Hiding the Wi-Fi name is not a fault, and not a lock either.

#### Question in the draw: l17-s-guest

A chat, with its history: "Tia, Front office", Chat with the help desk.

> (Tia, Front office, at the left) Visitors in the waiting room asked for Wi-Fi, so I gave them the office password. One of them could see our shared printer in his list.

**What do you do instead?**
(the options come in an order that depends on the seed of the question)
- Guest access: a second Wi-Fi name with its own password, internet only (right)
- Hide the office Wi-Fi name so visitors cannot find it, and give out the password — if chosen: Hiding the name does not stop anyone who already has the password, and the printer is still on the same network.
- Change the office Wi-Fi password every week and tell the visitors the new one — if chosen: Visitors would still join the office network each time.
- Tell visitors politely not to open the printer or any shared folders — if chosen: A request is not a control. The visitors are still on the office network.

After the answer: the deciding words are marked. Reason: The visitors reached the printer because they were on the office network. Guest access puts them on a separate network with its own password.

#### Question in the draw: l17-s-forward

A chat, with its history: "Ben, Facilities", Chat with the help desk.

> (Ben, Facilities, at the left) I put a camera in the shop and I want to watch it from home. The camera is at 192.168.1.60 and sends its video on port 8080. Its password is already changed from the maker’s default, and we have no VPN.

**What do you change on the router?**
(the options come in an order that depends on the seed of the question)
- Forward port 8080 to the camera (right)
- Forward every port to the camera, so that it works whatever it needs — if chosen: Only port 8080 is needed. Every port open makes the camera reachable on all of them from the internet.
- Turn UPnP on so the camera opens whichever ports it needs by itself — if chosen: UPnP lets any program on the network open ports without asking, and malware does the same.
- Turn the firewall off while he is watching the camera from home — if chosen: The firewall protects all the other computers. Only the one port needs a way through.

After the answer: the deciding words are marked. Reason: The camera needs one door from the internet, port 8080, to one device. Port forwarding makes exactly that door. Its password is already changed, which matters because the door faces the internet; a VPN is safer where one exists. The camera’s address is then kept fixed so the door keeps pointing at it.

#### Question in the draw: l17-g-ssid

A chat, with its history: "Ana, Accounting", Chat with the help desk.

> (Ana, Accounting, at the left) My manager wants to turn off SSID broadcast, the setting that stops the router sending out the Wi-Fi’s name. She says nobody can see the network then, so we can skip the Wi-Fi password.

**What does turning off SSID broadcast do?**
(the options come in an order that depends on the seed of the question)
- It leaves the name out of the list; the network can still be found, so encryption is still needed (right)
- It makes the network invisible outside the building, so a short password is enough — if chosen: It hides the name from the list only. Anyone who finds the name can try to join, so the password still has to be strong.
- It turns on encryption for the network, so the traffic is scrambled too — if chosen: Encryption is a separate setting. Hiding the name does not scramble anything.
- It stops devices from joining the network unless they were joined before — if chosen: Devices can still join; they have to type the name by hand.

After the answer: the deciding words are marked. Reason: SSID broadcast only announces the name. Turning it off removes the name from the list but not from the air, so it is no replacement for encryption.

#### Question in the draw: l17-g-sub

A chat, with its history: "Kim, Web team", Chat with the help desk.

> (Kim, Web team, at the left) We run a small web server that customers must reach from the internet. If it is ever hacked, I want the office computers to stay out of reach.

**Where does the server go?**
(the options come in an order that depends on the seed of the question)
- In a screened subnet: a separate network between the internet and the office, with firewall rules each way (right)
- On the office network, with only the server’s web port forwarded to it — if chosen: A hacked server would sit next to every office computer.
- On the guest Wi-Fi network, away from the staff computers — if chosen: The guest network is for visitors’ devices. It is not made to host a server.
- On the office network, with UPnP turned on so the server opens its own ports — if chosen: UPnP lets programs open ports on their own, and the server would still share the office network.

After the answer: the deciding words are marked. Reason: A server the internet must reach is the likeliest to be attacked. A screened subnet keeps it apart from the office network, so a break-in there does not reach the office computers.

#### Question in the draw: l17-k-upnp

A chat, with its history: "Pat, IT", Chat with the help desk.

> (Pat, IT, at the left) A worm (self-spreading harmful software) on one laptop opened a port on the office router by itself, with no one asking. The router has a setting that lets programs and devices do that.

**What is the setting, and what do you do with it?**
(the options come in an order that depends on the seed of the question)
- UPnP (Universal Plug and Play): turn it off (right)
- UPnP: leave it on, since it helps the router control which ports are used — if chosen: UPnP is a convenience for programs. It gives malware the same power.
- IP filtering: turn it off, since it opens ports for programs — if chosen: IP filtering allows or blocks by address. It does not open ports for programs.
- Port forwarding: turn it off, since it lets programs open ports — if chosen: Port forwarding is a rule you add by hand. The setting that lets programs open ports themselves is UPnP.

After the answer: the deciding words are marked. Reason: The deciding words are a port opened by itself. That is UPnP, Universal Plug and Play. With it off, only ports you open by hand are reachable; which ports to open is a separate decision.

#### Question in the draw: l17-k-fw

A chat, with its history: "Wes, Operations", Chat with the help desk.

> (Wes, Operations, at the left) The maker’s site has an update for our router that fixes a flaw letting anyone on the internet take control of it. Ours is two updates behind. The office manager has approved the change for tonight.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Install the new firmware tonight (right)
- Change the Wi-Fi password and the router’s login to be safe — if chosen: The flaw is in the router’s software, not in the Wi-Fi password.
- Turn off SSID broadcast so the Wi-Fi name is not shown in the list — if chosen: Hiding the Wi-Fi name does nothing about a flaw in the router’s software.
- Block the maker’s site with content filtering so staff cannot download it — if chosen: That would cut the office off from the update and the flaw would stay.

After the answer: the deciding words are marked. Reason: A known flaw in the router’s software is closed by a firmware update. Save the settings first, because an update can reset them.

#### Question in the draw: l17-k-filter

A chat, with its history: "Lena, Owner", Chat with the help desk.

> (Lena, Owner, at the left) I want staff blocked from gambling and adult sites, whatever the address of the site is.

**Which router setting does that?**
(the options come in an order that depends on the seed of the question)
- Content filtering (right)
- IP filtering, which blocks by the address of each website — if chosen: IP filtering allows or blocks by the address of a device. It would take a list of every site’s address.
- Port forwarding, which sends the site traffic where it is wanted — if chosen: Port forwarding sends outside traffic in to one device. It blocks nothing.
- Guest access, which gives staff a separate Wi-Fi for browsing — if chosen: Guest access is a separate Wi-Fi for visitors. It does not filter sites.

After the answer: the deciding words are marked. Reason: Blocking by kind of site is content filtering. IP filtering works from addresses, and port forwarding and guest access do other jobs.

#### Question in the draw: l17-r-pw

A chat, with its history: "Tia, Front office", Chat with the help desk.

> (Tia, Front office, at the left) The new router’s login is still admin and admin, the maker’s. It is only reachable from inside the office, so I think it is fine.

**What do you do about the login?**
(the options come in an order that depends on the seed of the question)
- Change the login to a strong password only the admin knows (right)
- Leave it as it is, since the page is only reachable from inside the office — if chosen: Anyone on the office network, including a visitor or a worm, could try it.
- Make it the same as the Wi-Fi password so there is only one to remember — if chosen: Everyone who knows the Wi-Fi password could then change the router.
- Write the default login on a label on the router so staff can find it — if chosen: A label tells every visitor the login too. The default is published for the model.

After the answer: the deciding words are marked. Reason: A default login is known to every attacker. Changing it is the first change on any router.

#### Question in the draw: l17-r-place

A chat, with its history: "Hal, Operations", Chat with the help desk.

> (Hal, Operations, at the left) We are placing the office router. Someone suggests the cabinet by the entrance, someone else a shelf at the back.

**Where do you put it?**
(the options come in an order that depends on the seed of the question)
- High and central, in a spot staff cannot reach to press reset (right)
- In the metal cabinet by the entrance, where it is safe — if chosen: Metal blocks radio, and a room-edge spot gives weak coverage on the far side.
- On the floor behind the front desk, next to the break-room microwave — if chosen: The floor and a microwave next door spoil the signal.
- On the front desk, where visitors can see that it is working — if chosen: Within reach, anyone can press reset or plug in. Keep it out of reach.

After the answer: the deciding words are marked. Reason: Placement matters twice: coverage (central, high, clear of metal and microwaves) and security (out of reach so no one resets or plugs in).

#### Question in the draw: l17-r-remote

A chat, with its history: "Cy, IT contractor", Chat with the help desk.

> (Cy, IT contractor, at the left) The router lets me open its admin page from the internet. It saves me a visit, and it asks for the password.

**What do you do about remote management?**
(the options come in an order that depends on the seed of the question)
- Turn it off, or limit it to a secure connection from a known address (right)
- Leave it on, since the page wants a password before it lets anyone in — if chosen: A password alone leaves the page open to guessing from anywhere.
- Move the admin page to a different port number so that it is not so easy to find — if chosen: Hiding a page behind another port is found by a scan.
- Keep it on, and change the router login once a year — if chosen: A page open to the internet is tried all day. A yearly change leaves it open.

After the answer: the deciding words are marked. Reason: Secure management means keeping the admin page off the open internet, or reachable only by a secure connection from a known place.

#### Question in the draw: l19-p-swell

A chat, with its history: "Finn, Front desk", Chat with the help desk.

> (Finn, Front desk, at the left) My tablet’s screen is lifting away from the frame at one edge and the back looks puffed up. It is on the charger right now so it will be full for the morning.

**What do you tell Finn first?**
(the options come in an order that depends on the seed of the question)
- Unplug it and stop using it; do not charge it until it is checked (right)
- Leave it on the charger until it is full, then bring it to the desk — if chosen: Charging a swollen battery adds heat and pressure. It is the one thing to stop at once.
- Press the screen back down gently so that it sits flat on the frame — if chosen: Pushing on a swollen battery can puncture it. The screen is lifting because of the battery under it.
- Restart the tablet to see whether the screen settles down again — if chosen: A restart cannot shrink a swollen battery, and it keeps the tablet running while it is unsafe.

After the answer: the deciding words are marked. Reason: A lifting screen or puffed back means a swollen battery, which is a safety issue, so the first move is to stop using and charging it. After that, keep it away from heat and follow the desk’s rule for battery disposal and replacement.

#### Question in the draw: l19-p-touch

A chat, with its history: "Ben, Warehouse", Chat with the help desk.

> (Ben, Warehouse, at the left) Since I dropped the phone, the picture is perfect but the screen answers touches in the wrong place. Tapping the top of the screen opens things near the middle.

The five links: the body, the connections, the system, the app, what was installed.

**Which link and which cheap test?**
(the options come in an order that depends on the seed of the question)
- The body: the touch layer. Try the home screen and two other apps (right)
- The app: delete the app Ben was using and install it again from the store — if chosen: It happens everywhere on the screen, not in one app, so one app is not the place to look.
- What was installed: run a malware scan on the phone, then check its apps — if chosen: Nothing is installed that is odd, and a drop followed by bad touches is physical.
- The system: install every waiting update, then restart the phone — if chosen: An update does not mend a damaged touch layer, and it changes the phone before the test is done.

After the answer: the deciding words are marked. Reason: Right picture, wrong touches, right after a drop: the digitizer, which senses touch and sits on the screen. Test it in the home screen and two apps to show it is not one app. If it is the digitizer, the screen is repaired or replaced.

#### Question in the draw: l19-s-charge

A chat, with its history: "Ida, Sales", Chat with the help desk.

> (Ida, Sales, at the left) My phone charges very slowly now, or only if I hold the cable at a certain angle. The cable is new. The phone lives in my pocket.

A plain table, "Tests so far":

> Test  |  Result  (the column heads)
> A different cable, same charger  |  Same fault
> A different charger, first cable  |  Same fault
> A wireless pad  |  Charges at normal speed

**Which link does the table point at?**
(the options come in an order that depends on the seed of the question)
- The port: look inside it for lint, and clear it with a soft tool (right)
- The battery: replace it — if chosen: The pad charges at normal speed, so the battery takes a charge. The cable port is where the fault shows.
- The charger: buy a stronger one and try that tonight instead — if chosen: A different charger gave the same fault. A stronger one is another try on a part already ruled out.
- The system: restore the phone from yesterday’s backup of its settings — if chosen: The pad charges fine, so the phone’s software is working. A restore is a big step for a cheap test.

After the answer: the deciding words are marked. Reason: Improper charging is split by swapping one part at a time: cable, charger, then another way to charge. The pad worked, so the battery and system are fine, and the cable port is left. Check the port for lint or a bent pin, and if it is damaged, the port is repaired.

#### Question in the draw: l19-s-wet

A chat, with its history: "Theo, Field team", Chat with the help desk.

> (Theo, Field team, at the left) I dropped my phone in a bucket of water for a few seconds. It is still on and looks fine. Can I put it on charge to be safe?

**What do you tell Theo?**
(the options come in an order that depends on the seed of the question)
- Switch it off now, remove the cover and cables, and do not charge it (right)
- Charge it to keep it from shutting down — if chosen: Power through wet parts can damage them. Charging is the risk, not the cure.
- Keep using it normally for the day and see whether symptoms appear — if chosen: It looks fine for now, but liquid inside corrodes parts later, and a phone left on is still powered.
- Restart it first to clear any water-related errors from the system — if chosen: A restart turns the power on again and does nothing for water. It is an extra power-up on wet parts.

After the answer: the deciding words are marked. Reason: Liquid damage is handled by cutting power: switch off, remove the cover, SIM tray and cables, and do not charge. Then the phone goes for inspection or repair, and the user’s data is backed up when it is safe to do so.

#### Question in the draw: l19-s-battery

A chat, with its history: "Rae, Dispatch", Chat with the help desk.

> (Rae, Dispatch, at the left) My phone drops from 100% to dead in about two hours and shuts off at 30%. I turned off everything I could.

A plain table, "Settings, Battery":

> Line  |  Value  (the column heads)
> Battery health  |  Maximum capacity 68%
> Top user  |  Screen 31%, nothing unusual
> Phone age  |  3 years

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Replace the battery: the health reading and the shutdowns both point at it (right)
- Factory reset the phone, which will also reset the battery reading — if chosen: A reset does not give a battery back its capacity. It erases everything for nothing.
- Find the app that drains the battery by removing apps one at a time, newest first — if chosen: Battery usage shows no app using more than the screen. The apps are ruled out; the battery health is the reading that is bad.
- Buy a faster charger so the phone fills before it runs down — if chosen: A faster charger fills a worn battery quickly, but the battery still empties in two hours.

After the answer: the deciding words are marked. Reason: Poor battery health is a worn battery: low capacity, shutdowns with charge left and no app to blame. Here the tests point at the part, so replacing it is the right step. Back up the data first if the repair could touch it.

#### Question in the draw: l19-s-ghost

A chat, with its history: "Gil, Field team", Chat with the help desk.

> (Gil, Field team, at the left) My phone opens apps and types by itself, as if someone were pressing the screen. It started after a rainy morning on the site. The screen is not cracked.

The phone was not dropped. It has a thick screen protector that was put on weeks ago.

**What do you have Gil try first?**
(the options come in an order that depends on the seed of the question)
- Dry the screen and wipe it clean, then see whether the touches stop (right)
- Scan the phone for malware — if chosen: Touches that start after rain are far more likely to be water on the glass than an app, and nothing odd was installed.
- Replace the touch layer of the screen straight from the repair shop — if chosen: The screen is not cracked and the rain is the new fact. The part is replaced only after the cheap checks.
- Reset the phone to factory settings so that the touch tests start fresh — if chosen: A reset erases Gil’s data and does not dry the screen. It is far more than the sign needs.

After the answer: the deciding words are marked. Reason: Ghost touches are a digitizer sign. Moisture and dirt on the glass cause them, so dry and clean the screen first, and restart next if needed. If they continue on a dry screen, or after the protector is off, the screen is repaired.

#### Question in the draw: l19-g-hot

A chat, with its history: "Tai, Estimating", Chat with the help desk.

> (Tai, Estimating, at the left) My phone has been getting very hot when it charges and the back has started to rise in one corner. It is only a little. Should I just take the cover off?

Two signs: heat and a rising corner.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Unplug it and stop using it: a rising back is a swollen battery (right)
- Take the cover off and let it cool — if chosen: The cover is not the problem. The rising corner is the second sign, and it is the one that makes this a swollen battery.
- Close the apps running in the background to stop the heat while charging — if chosen: Heat while charging with a bulge is not an app. Closing apps ignores the sign that matters.
- Check the data usage list for an app that is working the phone too hard — if chosen: The phone is hot while charging with the back bulging. The data list does not explain either.

After the answer: the deciding words are marked. Reason: Overheating alone is handled by the cover off, out of the sun, rest. A swollen battery is the harder sign, because charging and using it can start a fire. When both show, the bulge decides: stop using and charging it.

#### Question in the draw: l19-k-crack

A chat, with its history: "Uma, Legal", Chat with the help desk.

> (Uma, Legal, at the left) I dropped my phone and the glass is cracked across the middle. The picture is fine at the top, but the bottom third does not answer touches at all, and I have two weeks of site photos on it that are not saved anywhere.

**What is the order of the work?**
(the options come in an order that depends on the seed of the question)
- Save the photos with a cable to a computer first, then repair the screen (right)
- Replace the screen at once — if chosen: Repairs can go wrong, and two weeks of photos exist nowhere else. Protect the data before touching the phone.
- Restart the phone to see whether the touch in the lower third wakes up on its own — if chosen: A crack across the glass is physical. A restart cannot undo it and keeps the damaged screen in use.
- Factory reset the phone to clear the touch fault, then repair it later — if chosen: A reset erases the photos that were not saved, and cannot repair a crack.

After the answer: the deciding words are marked. Reason: A cracked screen with a dead touch strip is a damaged digitizer, a hardware fault. Because the photos exist only on the phone, the data is protected before any repair.

#### Question in the draw: l19-k-hot

A chat, with its history: "Vic, Surveyor", Chat with the help desk.

> (Vic, Surveyor, at the left) My phone keeps warning “too hot, cooling down” when I use it for navigation in the truck. It sits in the cradle on the dashboard, in the sun, plugged in. It cools off when I get inside the office.

A plain table, "Settings, Battery":

> Line  |  Value  (the column heads)
> Battery health  |  Maximum capacity 93%
> Back of the phone, when it is cool  |  Flat, no bulge
> Top user  |  Navigation, screen on

**What fits?**
(the options come in an order that depends on the seed of the question)
- Sun, charging and navigation together: get it out of the sun (right)
- A swollen battery, so stop using it and have the battery replaced now — if chosen: The back is flat and the battery holds 93%. A swollen battery bulges, and this phone cools off when the sun is removed.
- A faulty battery that should be replaced under the phone’s warranty — if chosen: Battery health is 93%. The heat follows the sun and the cradle, not the battery.
- A malicious app that is working the phone’s processor far too hard — if chosen: The top user is navigation, which the user started, and the heat leaves with the sun.

After the answer: the deciding words are marked. Reason: Overheating from heat in the sun, charging and a heavy app is a fault in the situation, not in the phone. A swollen battery would show a bulge or a lifting screen, and a bad battery would show poor health. Out of the sun is the first change; less charging while it runs is the next.

#### Question in the draw: l19-r-stylus

A chat, with its history: "Abe, Design", Chat with the help desk.

> (Abe, Design, at the left) The stylus for my tablet has stopped drawing. The screen answers my finger fine. The stylus is two years old, and the light on it is off.

**What do you try first?**
(the options come in an order that depends on the seed of the question)
- Charge the stylus or replace its battery, then pair it again (right)
- Replace the tablet screen — if chosen: It answers a finger, so the screen works.
- Factory reset the tablet to clear the stylus settings — if chosen: The tablet works. A reset wipes everything for a stylus with its light off.
- Update the tablet and the drawing app before doing anything else — if chosen: Two changes at once, and the dead light was never looked at.

After the answer: the deciding words are marked. Reason: A stylus that does not work while the finger does is the stylus: its battery or its pairing, then a worn tip. The screen is cleared by the finger.

#### Question in the draw: l19-r-drift

A chat, with its history: "Bev, Planning", Chat with the help desk.

> (Bev, Planning, at the left) On my touch-screen laptop the pointer drifts a little to the left, and touches land a bit off. I put a new screen protector on last night.

The laptop was fine before the screen protector.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Clean the screen, take the protector off to test, then calibrate (right)
- Replace the screen — if chosen: It was fine before last night. The change on the screen comes before a part.
- Install the laptop’s waiting updates and graphics drivers together — if chosen: Two changes together. The new protector is the change to test first.
- Reinstall Windows — if chosen: A reinstall erases the files. The protector went on last night, and it has not been tested.

After the answer: the deciding words are marked. Reason: Cursor drift and misplaced touches come from the screen surface, dirt, a protector or a need to calibrate. What changed is the protector, so that is tested first, then calibration.

#### Question in the draw: l19-r-port

A chat, with its history: "Milo, Dispatch", Chat with the help desk.

> (Milo, Dispatch, at the left) The charging port on my phone is loose. The cable wobbles, and it charges only if I hold it. I have tried four cables and the pad, which works.

A plain table, "Port check":

> Look  |  Result  (the column heads)
> Inside the port with a light  |  Clean, no lint
> The metal contacts  |  Bent, one is pushed in
> The pad  |  Charges normally

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Back up the phone, then have the damaged port repaired (right)
- Buy a fifth cable with a firmer plug and keep trying — if chosen: Four cables gave the same fault. A fifth tests a part already ruled out.
- Straighten the contacts with a metal pin from a sewing kit — if chosen: A metal pin can short the contacts or damage them more. The port needs a repair.
- Replace the battery — if chosen: The pad charges at normal speed. The battery takes a charge.

After the answer: the deciding words are marked. Reason: A physically damaged port is a hardware fault: cables are ruled out, the lint check is done and the contacts are bent. Repair the port, with the data backed up first. Wireless charging works as a stopgap.

#### Question in the draw: l19-w-tess

A chat, with its history: "Tess, Sales", Chat with the help desk.

> (Tess, Sales, at the left) My phone is slow and the battery is dead by lunch. It is three years old, so I guess I need a new battery. I have not changed anything.

A plain table, "Settings, Battery (what the phone shows)":

> Line  |  Value  (the column heads)
> Battery health  |  Maximum capacity 91%
> Top user since 8 AM  |  Snapfilter 58%, background activity
> Storage  |  118 GB of 128 GB used

**What does the battery health line show?**
(the options come in an order that depends on the seed of the question)
- The battery holds 91% of its charge, so it is not the cause (right)
- The battery is worn out — if chosen: Age was the guess. The phone’s own reading says 91%, which is healthy.
- The charger is failing — if chosen: Nothing here is about charging. The battery holds its charge well and runs down because something uses it.
- The phone needs a factory reset to stop the battery draining — if chosen: A reset wipes everything and has not been shown to be needed. A cheaper test comes first.

After the answer: the deciding words are marked. Reason: The favorite cause was the old battery, and the phone’s own report ruled it out in a minute. Safe mode then split all apps from one app, and removing one app at a time found it. A new battery would not have helped.
The working:
- Write the links, so every cause has a place.: The body (battery, port, screen), the connections, the system, the app, what was installed. “Slow, and the battery dies” could sit on the body, the system or one app.
- Name the favorite cause and look before replacing: the phone reports its own battery health.: The favorite is an old battery. Maximum capacity is 91%, which is healthy. The battery is ruled out.
- Read the rest of the list. It changes nothing.: Snapfilter, a photo app, used 58% of the battery in the background. Storage is nearly full, 118 of 128 GB. The apps are now the suspects, but a list is not a test.
- Cut in half: all apps, or one? Start the phone in safe mode (Android), which runs without apps the user installed.: In safe mode the phone is quick and the battery holds. The system and the body are fine, and the fault is in an app the user installed. Ruled out: the battery, the charger, the screen.
- Change one thing: remove Snapfilter alone, after Tess’s photos are backed up, then restart normally.: The phone is quick again and the battery lasts the day. Had it not changed, the next app would have gone, one at a time.
- Confirm with Tess and write it down.: Tess confirms after a full day. The note says: slow and a dead battery, battery health 91%, safe mode fine, removed Snapfilter, fixed. Ordering a battery would have cost money and fixed nothing.

#### Question in the draw: l19-p-wifi

A chat, with its history: "Mo, Accounting", Chat with the help desk.

> (Mo, Accounting, at the left) My phone will not load anything at my desk. When I walk to the lobby it works. Everyone around me is fine.

A plain table, "Mo’s phone":

> Test  |  Result  (the column heads)
> On the office Wi-Fi  |  Connected, nothing loads
> Wi-Fi turned off, on cellular  |  Everything loads
> Other phones on the same Wi-Fi  |  Fine

**Which cut does the table make?**
(the options come in an order that depends on the seed of the question)
- Cellular works, so fix the phone’s Wi-Fi link: forget the network and rejoin (right)
- The office Wi-Fi is down, so tell the network team to restart the router for everyone — if chosen: Other phones work on it. A restart would drop everyone to test a link that is fine.
- The phone’s system is broken, so back it up and reset it to factory state — if chosen: It works on cellular, so the system works. A reset is far more than the test shows.
- The cellular plan is the fault, so call the carrier — if chosen: Cellular is the link that works. The failing one is Wi-Fi.

After the answer: the deciding words are marked. Reason: Wi-Fi against cellular is the cut that tells the phone from the network. The other phones on the same Wi-Fi clear the network, and cellular working clears the phone, leaving how this phone joined. Forget the network and rejoin it is one change.

#### Question in the draw: l19-s-update

A chat, with its history: "Ivy, HR", Chat with the help desk.

> (Ivy, HR, at the left) The phone says an update is waiting, but when I press install it fails after a minute. I have tried four times.

A plain table, "What the phone shows":

> Line  |  Value  (the column heads)
> Storage  |  125 GB of 128 GB used
> Battery  |  71%
> Wi-Fi  |  Connected, strong signal

**What do you have Ivy try first?**
(the options come in an order that depends on the seed of the question)
- Free up space (move photos to the cloud, remove unused apps), then retry (right)
- Press install a fifth time — if chosen: Four identical tries gave four identical failures. A fifth tests nothing new.
- Reset the network settings — if chosen: The Wi-Fi is connected with a strong signal. Nothing is wrong with that link.
- Reset the phone to factory settings, then install the update — if chosen: A reset would work only because it empties the storage, and it wipes the phone to do it.

After the answer: the deciding words are marked. Reason: An OS that fails to update checks the storage, the battery level and the connection. Here only the storage is off, so freeing space is the one change to make. A reset would work only by emptying the storage, and costs the user’s data.

#### Question in the draw: l19-s-rotate

A chat, with its history: "Kit, Design", Chat with the help desk.

> (Kit, Design, at the left) My tablet’s screen has stopped turning sideways. I turn it and the picture stays upright. It does it in every app and the home screen.

**What do you have Kit check first?**
(the options come in an order that depends on the seed of the question)
- The rotation lock in the quick controls, which keeps the screen upright (right)
- The one app Kit uses most, to see whether that app has its own fault in it — if chosen: It happens everywhere, so it is not one app. A lock on the whole screen explains it.
- The screen itself, which probably needs replacing after all this time — if chosen: The touch and the picture work. Nothing has shown the screen to be faulty.
- Whether a pending update has caused the tablet to lose its sensor — if chosen: That is a guess with nothing behind it. The lock is the cheap check, and it is the usual cause.

After the answer: the deciding words are marked. Reason: No autorotate in every app points at a setting, not an app or the screen: the rotation lock is the first thing to look at. If the lock is off and it still will not turn, then test with another app and restart before suspecting the sensor.

#### Question in the draw: l19-s-bt

A chat, with its history: "Dee, Service", Chat with the help desk.

> (Dee, Service, at the left) My Bluetooth headset worked fine until this morning. Now the phone says it is connected, but no sound plays through it.

A plain table, "Dee’s tests":

> Test  |  Result  (the column heads)
> Headset with a laptop  |  Works
> Another Bluetooth speaker with the phone  |  Works
> Headset with the phone  |  Connected, no sound
> Headset picked as the sound output  |  Picked, still no sound

**What is the next change?**
(the options come in an order that depends on the seed of the question)
- Remove the headset from the phone’s Bluetooth list, then pair it again (right)
- Replace the headset — if chosen: The headset works with a laptop, so it is fine.
- Update the phone and reset its network settings at the same time — if chosen: Two changes at once. If it works, nobody knows which one fixed it. The pairing is the cheap one to try first.
- Factory reset the phone — if chosen: The phone works with another speaker. A reset is much more than the tests show.

After the answer: the deciding words are marked. Reason: The headset works with the laptop and the phone works with another speaker, so both are fine and picking the headset as the sound output did not help. Only the saved pairing between them is suspect. Remove and pair again changes one thing, and it is the usual cure for Bluetooth that says connected and does nothing.

#### Question in the draw: l19-s-reboot

A chat, with its history: "Cy, Plant", Chat with the help desk.

> (Cy, Plant, at the left) My Android phone restarts by itself three or four times a day, with no warning. It started about two weeks ago.

A plain table, "What Cy has tried":

> Test  |  Result  (the column heads)
> Normal use  |  Restarts about 4 times a day
> Safe mode for two full days  |  No restarts
> Battery health  |  94%

**What does safe mode tell you?**
(the options come in an order that depends on the seed of the question)
- An app the user installed. Remove recent apps one at a time (right)
- The battery is faulty, so replace it before the next restart — if chosen: Battery health is 94% and the restarts stopped in safe mode, where the battery works exactly the same.
- The system itself is damaged, so back up and reinstall it — if chosen: Safe mode runs the same system and it behaves. The system is not the cause.
- The restarts are random, so no test can find the cause — if chosen: Safe mode just split them in half. The fault follows the apps the user installed.

After the answer: the deciding words are marked. Reason: Safe mode on Android runs without the apps the user installed. Random restarts that stop there are an app: remove recent ones one at a time and watch. If they continued in safe mode, the system or the battery would be next.

#### Question in the draw: l19-x-call

Noor in Accounting calls the help desk. You answer.

**Noor calls about a slow phone. What do you say?**
- An incoming call from "Noor, Accounting" (Incoming call · 2:20 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My phone has been so slow today. It is useless. Can you just give me a new one?" [pushes: Noor wants a replacement and has given no details.]
  - reply "Is it slow with everything, or mostly in one app?": goes on to turn 2, where the pressure comes back
  - reply "Which model is it, and how old is it?": the call ends (not this one): The model and age do not split anything: slow in one app and slow everywhere are different problems, and that is the question to ask. [slip: ran a test that does not split what works from what does not]
  - reply "I will order a new phone for you today.": the call ends (not this one): Nothing has been tested, so a new phone is a guess that costs money. One question about what is slow would have narrowed it. [slip: replaced a part before the cheap check]
  - reply "Go into settings and erase all content and settings.": the call ends (not this one): A factory reset erases everything and the data may not be backed up. It is the last step, not the first. [slip: wiped or reset the phone before the cheaper steps]
- turn 2, the other side says: "Everything. Even the clock app takes a while. It got slow after I turned the phone off and on this morning." [pushes: Noor wants a fix and has now said when it started.]
  - reply "Open Settings and read me the storage line, then the battery list.": the call ends (right): Slow with everything points at the phone, not one app. Storage and the battery list are free to read and change nothing.
  - reply "Then it is probably the app you use most, so delete that app and see.": the call ends (not this one): Noor said everything is slow, so one app is not the likely cause. Telling Noor a cause before knowing it sends both of you the wrong way. [slip: told the user a cause before knowing it]
  - reply "Thanks. Please run a factory reset now, so that the phone starts fresh.": the call ends (not this one): Cheaper reads, such as storage and the battery list, come first. A reset wipes Noor’s data to test a guess. [slip: wiped or reset the phone before the cheaper steps]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Whether the slowness is in one app or everything is the cheapest cut. Everything points at the system or the phone itself, so the next free reads are storage and the battery list. Nothing is replaced or erased yet.

#### Question in the draw: l19-s-life

A chat, with its history: "Flo, Sales", Chat with the help desk.

> (Flo, Sales, at the left) My battery is gone by three o’clock and I do not even play games. The phone is a year old.

A plain table, "Settings, Battery":

> Line  |  Value  (the column heads)
> Battery health  |  Maximum capacity 96%
> Screen brightness  |  Automatic
> Maps, location “always on”  |  34% of the battery

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Limit the maps app to using location only while open (right)
- Replace the battery — if chosen: The phone reports 96% of its original charge. A new battery would drain the same way.
- Back up the phone and restore it, so the battery starts again from new — if chosen: A restore cannot change brightness or what the maps app does, and it moves the whole phone for nothing.
- Buy a larger charger, so that the phone can fill up again at lunch — if chosen: Charging is not the problem. The battery empties faster than it should because of what is using it.

After the answer: the deciding words are marked. Reason: Short battery life with a healthy battery comes from what is using it: brightness, location and apps running in the background. The battery list names the maps app, and the change is one setting.

#### Question in the draw: l19-s-compat

A chat, with its history: "Ian, Operations", Chat with the help desk.

> (Ian, Operations, at the left) The store will not let me install the new work app. It says “This app requires Android 14 or later”. My phone is four years old.

A plain table, "What the phone shows":

> Line  |  Value  (the column heads)
> Operating system  |  Version 11, with 14 offered as an update
> Storage  |  71 GB free
> Wi-Fi  |  Fine

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Back up the phone, install the waiting system update, try the store again (right)
- Delete photos to free space — if chosen: There is 71 GB free, so storage is not the limit. The message names the operating system.
- Reset the network settings, then try to install the app from the store — if chosen: The store reached the phone and gave a clear answer. The connection is not at fault.
- Install the app from a website file, which does not check the device — if chosen: That skips the store’s checks and may be a spoofed copy. The right change is the update.

After the answer: the deciding words are marked. Reason: An app that will not install with a compatibility message needs a newer OS than the phone has. Storage and the connection are fine, so back up and update the OS; an unofficial copy of the app is never the answer.

#### Question in the draw: l19-g-install

A chat, with its history: "Kurt, Planning", Chat with the help desk.

> (Kurt, Planning, at the left) I cannot install a new app. The store starts to download it and then says it cannot install.

A plain table, "What the phone shows":

> Line  |  Value  (the column heads)
> Storage  |  256 GB of 256 GB used
> Photos and videos  |  171 GB
> Wi-Fi  |  Fine

**What is the one change?**
(the options come in an order that depends on the seed of the question)
- Back up the photos and videos, then move them off the phone (right)
- Delete the biggest photos and videos at once to make room — if chosen: The photos would be gone if the backup was not made first. Backing up comes before touching Kurt’s files.
- Restart the phone and try the download of the app again — if chosen: A restart does not free a full phone. It would try the same thing again.
- Sign out of the store, sign in again and retry the download — if chosen: Wi-Fi works and the download starts. The failure comes after, when there is no room.

After the answer: the deciding words are marked. Reason: An app that downloads and then cannot install is often a full phone. Free space by moving photos and videos, backing them up before anything leaves the phone.

#### Question in the draw: l19-k-air

A chat, with its history: "Wes, Sales", Chat with the help desk.

> (Wes, Sales, at the left) I just landed. My phone shows no bars and nothing loads, not on the airport Wi-Fi either. Other people around me have signal.

A plain table, "What the phone shows":

> Line  |  Value  (the column heads)
> Top of the screen  |  A small airplane picture
> Wi-Fi  |  Off
> Bluetooth  |  Off

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Turn airplane mode off, then check Wi-Fi and cellular again (right)
- Restart the phone — if chosen: A restart does not turn airplane mode off, and the plane stays lit. Turning airplane mode off is the change that names the cause.
- Reset the network settings to clear the saved connections — if chosen: Resetting the network settings deletes saved Wi-Fi passwords and is more than the table shows is needed.
- Call the carrier to report that the airport has no signal — if chosen: Other people have signal. The table shows the phone has turned its own radios off.

After the answer: the deciding words are marked. Reason: Poor or no connectivity starts with the cheap sign on the screen: airplane mode turns off cellular, Wi-Fi and Bluetooth together. One change, with a name for the cause, comes before restarts or resets.

#### Question in the draw: l19-k-app

A chat, with its history: "Xia, Marketing", Chat with the help desk.

> (Xia, Marketing, at the left) The Ledgerly app closes itself a second after I open it. Every other app is fine. It worked on Friday.

A plain table, "What Xia has done":

> Step  |  Result  (the column heads)
> Closed Ledgerly and opened it again  |  Closes itself
> Restarted the phone  |  Closes itself
> Storage  |  38 GB free
> App store  |  An update for Ledgerly is waiting

**What is the next change?**
(the options come in an order that depends on the seed of the question)
- Install the waiting update for Ledgerly, and test it (right)
- Reinstall every app on the phone — if chosen: Other apps work. Changing them all hides which change helped, and it costs the user’s settings in each.
- Back up and factory reset the phone — if chosen: Everything else on the phone works. A reset wipes it to fix one app.
- Restart the phone again — if chosen: The table already shows a restart did not help. Doing it again tests nothing new.

After the answer: the deciding words are marked. Reason: An app that closes itself while the others work is an app fault. The ladder runs from the cheap to the costly: close and reopen, restart, free space, update, clear the app’s cache, reinstall. The table is at the update.

#### Question in the draw: l19-r-slow

A chat, with its history: "Dax, Sales", Chat with the help desk.

> (Dax, Sales, at the left) My tablet got slower over the last month. It is slow in every app, even Settings.

A plain table, "What the tablet shows":

> Line  |  Value  (the column heads)
> Storage  |  62 GB of 64 GB used
> Apps open in the background  |  23
> Last restart  |  41 days ago
> System update  |  Waiting

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Free storage by moving photos and files off, then test (right)
- Delete the apps one by one until it speeds up — if chosen: It is slow in every app, including Settings, so an app is not the likely cause. Storage is the line that is wrong.
- Restart it and see whether it speeds up — if chosen: A restart is cheap, but storage comes first and the restart follows; the full storage would slow the tablet again.
- Install the waiting update and reset the network settings at the same time — if chosen: Two changes at once, and the network is not the fault.

After the answer: the deciding words are marked. Reason: Degraded performance that is the same in every app belongs to the system: a full tablet and a long time since a restart. Free space first and test, then restart if it is still slow, one change at a time, with files saved before they leave the tablet.

#### Question in the draw: l19-r-nfc

A chat, with its history: "Owen, Retail", Chat with the help desk.

> (Owen, Retail, at the left) Tap to pay at the register fails on my phone. It worked last week. Other phones tap fine on the same reader.

A plain table, "Owen’s phone":

> Test  |  Result  (the column heads)
> NFC in settings  |  On
> With the thick wallet cover on  |  Fails
> Cover off, held right against the reader  |  Works

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- The thick wallet cover keeps the phone too far from the reader (right)
- The register is broken, so report it to the store’s manager today — if chosen: Other phones tap fine on it, and Owen’s works with the cover off.
- NFC has stopped working, so back it up and factory reset the phone — if chosen: NFC works with the cover off. The phone is fine.
- The payment card has expired, so order a new one from the bank — if chosen: The payment works when the cover is off. Nothing shows the card is the problem.

After the answer: the deciding words are marked. Reason: NFC (near-field communication) needs the phone right next to the reader. Cover on fails and cover off works, so the cover is the cause. This is a cut: one change, one result.

#### Question in the draw: l19-r-launch

A chat, with its history: "Fay, Maintenance", Chat with the help desk.

> (Fay, Maintenance, at the left) My work-order app on my Android phone will not open. It sits on a white screen. Everything else works. It worked yesterday.

A plain table, "What Fay has done":

> Step  |  Result  (the column heads)
> Closed the app and reopened it  |  White screen
> Restarted the phone  |  White screen
> App store  |  No update waiting
> Storage  |  41 GB free

**What do you try next?**
(the options come in an order that depends on the seed of the question)
- Clear the app’s cache, then reinstall it after saving its data (right)
- Factory reset the phone — if chosen: Everything else works. A reset is for after everything cheaper has failed, and it wipes the phone.
- Update the phone’s operating system and then try the app — if chosen: No update is waiting for the app, but a change to the whole phone does not follow from one app failing.
- Restart the phone once more to be sure it is not a glitch — if chosen: A restart is already in the table with the same result.

After the answer: the deciding words are marked. Reason: An app that fails to launch while the others work is an app fault, and the steps go from cheap to costly: reopen, restart, update, storage, cache, reinstall. The table has done the first four.

#### Question in the draw: l19-p-ads

A chat, with its history: "Sam, Delivery", Chat with the help desk.

> (Sam, Delivery, at the left) Since I got a free game last week, ads cover my screen even outside the game, and a box says my phone has a virus and I must tap to clean it. My data runs out in ten days now.

The game did not come from the phone’s official store. A friend sent a link.

**Which link, and what first?**
(the options come in an order that depends on the seed of the question)
- An app from outside the store: save Sam’s files, switch on airplane mode, then remove the game (right)
- The system: install the waiting update and the next one, and see if the ads stop — if chosen: An update will not remove an app Sam installed, and the phone stays online and leaking in the meantime.
- The connections: forget the Wi-Fi network, rejoin it and test the ads — if chosen: Ads that appear on every screen and a fast data use come from something on the phone, not from the way it joined the Wi-Fi.
- The body: have the battery checked — if chosen: Nothing about the hardware has been shown. The signs are a malicious app’s.

After the answer: the deciding words are marked. Reason: Many ads, a fake security warning and fast data use after installing an app from outside the store are the signs of a malicious app. Cut the phone off the network first, remove the app, then scan, change passwords from another device and report it.

#### Question in the draw: l19-s-data

A chat, with its history: "Lou, Sales", Chat with the help desk.

> (Lou, Sales, at the left) I got a text that I have used 90% of my data for the month, and it is only the 8th. I only use email and maps.

A plain table, "Settings, Mobile data (this month)":

> App  |  Data used  (the column heads)
> Email  |  0.4 GB
> Maps  |  0.6 GB
> Weatherly (installed last week from a link in a text)  |  9.1 GB

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Save the files, switch on airplane mode, then remove Weatherly (right)
- Buy more data so the phone does not run out before the month ends — if chosen: More data lets the app send more. The cause is the app that uses nearly all of it.
- Turn off the email and maps apps — if chosen: They used a tenth of what Weatherly did. They are not the problem.
- Wait and see whether the data use is lower next month — if chosen: The list shows the cause now, and waiting leaves the app running and sending.

After the answer: the deciding words are marked. Reason: High network traffic, a data-usage warning and an app installed from a link in a text are the signs of a malicious app. The per-app data list names it. Cut the network, remove the app, scan, change passwords from another device and report it.

#### Question in the draw: l19-s-sideload

A chat, with its history: "Pam, IT", Chat with the help desk.

> (Pam, IT, at the left) A user in Sales wants a paid app for free. A website sells a file that the user installs by turning on “allow installs from unknown sources”. The user says it is just one app.

**What do you tell the user?**
(the options come in an order that depends on the seed of the question)
- No: the file skips the store’s checks, so use the store (right)
- It is fine, as long as the setting goes back off afterward — if chosen: The setting being off later does not undo what the one app was allowed to do while it was installed.
- Turn on developer mode first — if chosen: Developer mode is for people who build apps and lowers some protections. It makes nothing safer.
- Root the phone first so the app gets everything it needs to run — if chosen: Rooting removes the maker’s limits on the whole phone. It is the opposite of safer.

After the answer: the deciding words are marked. Reason: An unofficial app store or a file installed from an unknown source skips the checks. Developer mode and root or jailbreak lower the protections further. Malicious and spoofed apps arrive this way, so the answer is to stay with the official store.

#### Question in the draw: l19-r-jailbreak

The question, read aloud as above: **Removing the maker’s limits from an iPhone, so apps from anywhere can run with full control, has a name.**

**Type the word. For an Android phone, the same idea is called rooting.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - jailbreak
  - jailbreaking
  - jailbroken

After the answer: Reason: Jailbreaking an iPhone, or rooting an Android phone, removes the maker’s limits. It lets apps from anywhere run with full control, which is why malicious apps are far more dangerous on such a phone.

#### Question in the draw: l19-s-popups

A chat, with its history: "Hana, Sales", Chat with the help desk.

> (Hana, Sales, at the left) Pop-up ads keep appearing in my phone’s browser with a message about winning a prize. Nothing has changed with my apps, and the data use is normal. It began after I visited a coupon site and tapped “Allow notifications”.

**What is the likely cause, and the first change?**
(the options come in an order that depends on the seed of the question)
- The coupon site now sends notifications. Remove its permission (right)
- A malicious app is hiding on the phone, so wipe the phone at once — if chosen: No new app, no data spike and nothing outside the browser. A wipe is far more than the signs show.
- The phone was rooted by the site, so take the phone off the network — if chosen: Nothing shows the phone was rooted. The only sign is the browser’s ads.
- The data plan is too small, so move Hana to a bigger plan — if chosen: Data use is normal. A bigger plan changes nothing about what the site can send.

After the answer: the deciding words are marked. Reason: Many ads can be a malicious app, but here the signs are only in the browser and a site was allowed to send notifications. Remove that permission, then clear the browser’s data as the next change, and watch; if ads appear elsewhere, think of an app.

#### Question in the draw: l19-s-av

A chat, with its history: "Jules, Marketing", Chat with the help desk.

> (Jules, Marketing, at the left) A pop-up on my phone said “Install this free cleaner to remove viruses” with a big button. I am worried my phone is slow because of one. Should I tap it?

**What do you tell Jules?**
(the options come in an order that depends on the seed of the question)
- No. Close the pop-up; if you want a scan, use the company’s approved app from the store (right)
- Yes. Tap it and let the cleaner scan the phone — if chosen: The cleaner in the pop-up may be the malicious app. Nothing in it can be trusted.
- No. Switch the phone off for a day, and the pop-up will be gone — if chosen: Switching the phone off scans nothing and removes nothing. Closing the pop-up and using an approved scan does.
- Tap it, and restart the phone if it looks bad — if chosen: A restart does not remove an app, and the app has already run once by then.

After the answer: the deciding words are marked. Reason: A pop-up that offers to remove viruses is a fake security warning in a different form. Close it, do not tap it, and run a scan with the company’s approved mobile anti-malware from the official store.

#### Question in the draw: l19-g-spoof

A chat, with its history: "Otis, Admin", Chat with the help desk.

> (Otis, Admin, at the left) I downloaded the bank’s app from a link in an email. It looks right, but it asks for my full card number and PIN on the first screen. My real bank app never asked for that.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Enter nothing, remove the app, and tell both the bank and the desk (right)
- Enter the card number to see whether the app accepts it — if chosen: If it is fake, entering the details is the theft. It is not a test.
- Restart the phone and open the app again to see whether it shows the same screen — if chosen: The app will look the same. A restart tests nothing about where it came from.
- Update the app to its newest version — if chosen: The real bank’s app never asked for that. This one came from an email link and is the problem.

After the answer: the deciding words are marked. Reason: An app spoofing a real one comes from a link rather than the store and wants what the real one does not. Nothing is entered, the app is removed, and the real bank and the desk are told, so passwords can be changed from a clean device.

#### Question in the draw: l19-k-root

A chat, with its history: "Yun, Operations", Chat with the help desk.

> (Yun, Operations, at the left) I rooted my Android phone last year so I could run apps that are not in the store. This week it is slow, ads cover the screen and the data warning came up. Can you just run a scan and tell me it is clean?

A plain table, "Settings, Mobile data (this month)":

> App  |  Data used  (the column heads)
> Browser  |  1.1 GB
> Navigator  |  0.9 GB
> Free VPN Pro (from a link, outside the store)  |  14.2 GB

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Back up Yun’s files, go offline, remove the app, take root off, then run the company scan (right)
- Run the scan and report the phone clean if it finds nothing — if chosen: The 14 GB app is still there and root is still on. The signs are already enough.
- Remove only the app, and leave the phone rooted for Yun’s other apps — if chosen: The app is removed, but the lowered protections stay, and the next unofficial app can do the same.
- Factory reset the phone at once without saving anything — if chosen: It erases Yun’s files. Back up what is needed first.

After the answer: the deciding words are marked. Reason: A rooted phone with ads, slowness and a data warning and an app from outside the store is a malicious app on a phone with the protections removed. The app goes, root goes too, Yun’s files are saved first, and passwords are changed from another device.

#### Question in the draw: l19-k-leak

A chat, with its history: "Stan, Finance", Chat with the help desk.

> (Stan, Finance, at the left) Two clients texted me about odd messages I never sent, with a link. Yesterday I put a free PDF reader on from a pop-up on a website. Last night my work photos showed up in a group chat I am not in.

**Which first move fits?**
(the options come in an order that depends on the seed of the question)
- Save Stan’s files, go offline, remove the PDF reader, then change passwords from another device (right)
- Change the passwords from the same phone — if chosen: The app may read what is typed on that phone. The new passwords would reach it too.
- Reply to the clients and tell them to ignore the texts Stan never sent — if chosen: Nothing has stopped them. The app is still running and can send more.
- Update the PDF reader — if chosen: The reader came from a pop-up and is the likely source. An update from the same source is no fix.

After the answer: the deciding words are marked. Reason: Leaked personal data and messages the user did not send after an app from a pop-up are signs of a malicious app. Airplane mode and removing the app come first, then passwords change from another device, the clients are warned and the desk is told.

#### Question in the draw: l19-r-warning

A chat, with its history: "Gus, Reception", Chat with the help desk.

> (Gus, Reception, at the left) While reading the news on my phone, a red box filled the screen: “Your phone is infected! Tap here to clean it now.” It has a countdown and a security logo. I have not tapped it.

**What do you tell Gus?**
(the options come in an order that depends on the seed of the question)
- Do not tap it. Close the page or the browser tab (right)
- Tap the button to clean the phone — if chosen: The button is how the page gets Gus to install something bad.
- Do not tap it. Switch the phone off and leave it off all day — if chosen: Switching off does not remove the page that showed the box. Closing the page does.
- Factory reset the phone at once — if chosen: Nothing has been installed. Closing the page is enough, and a reset wipes the phone for a web page.

After the answer: the deciding words are marked. Reason: A fake security warning on a web page tries to scare the user into tapping. Close the page without tapping; only if the phone shows other signs, such as new apps or fast data use, is it checked for a malicious app.

#### Question in the draw: l19-r-dev

A chat, with its history: "Remy, Warehouse", Chat with the help desk.

> (Remy, Warehouse, at the left) I looked in my Settings and there is a new menu called Developer options. I never turned it on. The phone has also been warm and a little slow.

A plain table, "Settings":

> Line  |  Value  (the column heads)
> Developer options  |  On
> USB debugging  |  On
> Apps installed from unknown sources  |  Allowed for Browser

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Turn off the unknown-sources allowance for Browser (right)
- Leave it, as developer options do nothing unless a developer uses them — if chosen: USB debugging gives a connected computer or an app a way into the phone. Remy did not enable it, so someone or something did.
- Turn on more developer options to see what exactly changed on the phone — if chosen: Turning more on opens more. The aim is to close what was opened.
- Buy a new phone — if chosen: Nothing shows hardware at fault. Settings can be turned off.

After the answer: the deciding words are marked. Reason: Developer mode and installs from unknown sources are settings that lower the phone’s protections. If the owner did not turn them on, something did, so close them and look for the app that could have.

#### Question in the draw: l19-r-store

A chat, with its history: "Suki, IT", Chat with the help desk.

> (Suki, IT, at the left) A manager asks for permission to install an “app store” found on a website that offers premium apps for free. It is not the phone maker’s store or the company’s, and the site has no named owner.

**What do you tell the manager?**
(the options come in an order that depends on the seed of the question)
- No: apps there are unchecked, so use the store the company allows (right)
- Yes, if the manager installs one app first and watches how the phone behaves — if chosen: A malicious app often behaves normally at first. Watching one is no check.
- No: wait a week, and install it if nobody reports a problem — if chosen: Waiting does not check anything: a malicious app can stay quiet for a week, and by then it has run.
- Yes. The phone’s antivirus will block anything harmful — if chosen: Nothing guarantees that. The store’s checks happen before an app reaches the phone, and that is what is skipped.

After the answer: the deciding words are marked. Reason: An unofficial app store is one of the named concerns for mobile security. The safe answer is the company’s approved store, with the desk’s own list of what may be installed.

#### Question in the draw: l18-p-ram

A chat, with its history: "Dev, Finance", Chat with the help desk.

> (Dev, Finance, at the left) You are adding memory to a laptop. It is switched off, the charger is in the wall and the battery is inside the laptop. The memory sticks are small ones that sit under a cover on the bottom.

**What do you do before you touch the memory?**
(the options come in an order that depends on the seed of the question)
- Unplug the charger and battery, then ground yourself against static (right)
- Leave the charger in so the laptop stays grounded, and slide the memory out — if chosen: A plugged-in laptop still has power to its board. Disconnect first, then ground yourself.
- Put on rubber gloves so that nothing on your hands touches the board — if chosen: Gloves do nothing against static. A strap or touching bare metal lets the charge leave your body.
- Shut down in Windows and open the cover — if chosen: Shut down is not the same as unplugged. The battery and charger still feed the board.

After the answer: the deciding words are marked. Reason: The deciding words are the charger in the wall and the battery inside. Disconnect every power source, then ground yourself against static, before any part is touched.

#### Question in the draw: l18-s-wire

A chat, with its history: "Una, Accounting", Chat with the help desk.

> (Una, Accounting, at the left) The vendor put in a new screen on my laptop yesterday. Since then the Wi-Fi shows one bar anywhere in the office. A coworker at the next desk has four bars.

A written note: "Your notes", On the desk.

> Before the screen job, Una’s Wi-Fi worked well. The Wi-Fi card sits under the keyboard; its two thin antenna wires run up the hinge into the lid.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- That the two antenna wires are connected to the Wi-Fi card again (right)
- Replace the Wi-Fi card with a new one and test the signal again — if chosen: A new card is a costly guess. The card worked before the screen job, so the antenna wires come first.
- Change the router’s channel — if chosen: The coworker’s laptop shows the router and its channel are fine. Only this laptop changed.
- Reinstall the Wi-Fi driver — if chosen: A driver does not become weak after a screen job. A wire that came loose does.

After the answer: the deciding words are marked. Reason: It worked before the screen job, a coworker on the same router is fine, and the antenna wires run through the lid that was opened. That points at a wire left off, not at the card, the driver or the router.

#### Question in the draw: l18-s-board

A chat, with its history: "Fran, Support", Chat with the help desk.

> (Fran, Support, at the left) Four letters on my laptop’s keyboard have stopped working since I spilled coffee on it. I shut it down and unplugged it at once and left it to dry overnight. It starts today and everything else works.

**What is the cheapest test to see whether the keyboard itself is the fault?**
(the options come in an order that depends on the seed of the question)
- Plug in an external USB keyboard and type the same letters (right)
- Reinstall Windows — if chosen: Reinstalling is a huge step. Spilled coffee points at the keyboard hardware, and an external keyboard checks that in a minute.
- Wipe the keyboard with a damp cloth and order a new laptop — if chosen: A damp cloth on a spilled-on laptop risks more liquid inside. Ordering a laptop is far more than the evidence calls for.
- Replace the built-in keyboard right away — if chosen: The coffee fits, but nothing has yet split the keyboard from the software on top of it.

After the answer: the deciding words are marked. Reason: The built-in keyboard is cut from the rest by an external one. If the outside keyboard works, the keyboard hardware is the part to replace.

#### Question in the draw: l18-g-memory

A chat, with its history: "Jo, Facilities", Chat with the help desk.

> (Jo, Facilities, at the left) I bought memory for my laptop from the computer shop, and the sticks were long, like the ones in the office tower computers. I opened the laptop cover and the slot is much shorter.

**What did Jo buy, and what does the laptop need?**
(the options come in an order that depends on the seed of the question)
- Tower memory (DIMM); a laptop needs the shorter SODIMM kind instead (right)
- The right memory, but the laptop slot is faulty and must be replaced — if chosen: The slot is made short on purpose. The sticks are the wrong shape.
- Laptop memory sticks (SODIMM); the tower needs the longer DIMM kind — if chosen: It is the other way round. The long sticks Jo holds are DIMM, for towers.
- Memory sticks that need only a firmware update before they will fit — if chosen: Firmware settings cannot change a stick’s length. The shape decides whether it fits.

After the answer: the deciding words are marked. Reason: Long sticks like those in a tower are DIMM. A laptop takes the shorter SODIMM. The shape of the part decides what fits, whatever the settings.

#### Question in the draw: l18-t-nfc

The question, read aloud as above: **A laptop’s scanner reads a badge or a tap-to-pay phone held a few centimeters away. What are the three letters of the technology?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NFC

After the answer: Reason: NFC, near field communication, works from a few centimeters. It is the near-field scanner some laptops and most phones carry.

#### Question in the draw: l18-k-battery

A chat, with its history: "Lena, Planning", Chat with the help desk.

> (Lena, Planning, at the left) My laptop shuts off about ten minutes after I unplug it. The battery screen says the battery is worn. The charger works and the laptop runs fine plugged in. The battery is inside the case.

**What is the right step?**
(the options come in an order that depends on the seed of the question)
- Power off, unplug the charger, disconnect the old battery, then replace it (right)
- Replace the battery with the laptop on and plugged in, so that it never shuts down — if chosen: Power must be off at every source before a part is changed. A live board can be damaged.
- Replace the charger — if chosen: The laptop runs fine on the charger. The fault shows only without it.
- Reinstall Windows — if chosen: A worn battery report is a hardware sign, and reinstalling would not change it.

After the answer: the deciding words are marked. Reason: The deciding words are a worn battery that shuts the laptop off, and fine on the charger. The battery is the part, and every power source is disconnected before it is changed.

#### Question in the draw: l18-r-cam

A chat, with its history: "Bea, Recruiting", Chat with the help desk.

> (Bea, Recruiting, at the left) On video calls my laptop’s camera shows a black picture. The same call app shows my face fine on my coworker’s laptop. A small sliding cover on my laptop’s camera is closed.

**What is the cheapest thing to try first?**
(the options come in an order that depends on the seed of the question)
- Slide the camera cover open, then test the call again to see the picture (right)
- Open the lid and replace the camera module right away — if chosen: The cover has not been looked at yet, and opening the lid risks the antenna wires and other parts.
- Reinstall the call app on the laptop and test the picture again — if chosen: The app works on the coworker’s laptop. The cover is on the hardware side of Bea’s laptop.
- Replace the laptop’s microphone — if chosen: The microphone is not part of the black picture, and nothing points at it.

After the answer: the deciding words are marked. Reason: The deciding words are a closed cover and a black picture. A privacy cover blocks the lens, so opening it is the cheapest test.

#### Question in the draw: l18-r-drive

A chat, with its history: "Cal, Design", Chat with the help desk.

> (Cal, Design, at the left) My laptop’s storage is full. The laptop has a small gum-stick shaped card on the board where the drive sits, with no cable, and no 2.5 inch drive bay. I bought a 2.5 inch SSD.

**What is the problem?**
(the options come in an order that depends on the seed of the question)
- The laptop takes an M.2 drive, which fits that small slot; a 2.5 inch drive has no bay (right)
- The 2.5 inch drive is right, but the laptop needs a firmware update before it can accept it — if chosen: Firmware cannot make a bay appear. The drive is the wrong shape.
- The M.2 drive is the old kind, and the new 2.5 inch drive was the better choice — if chosen: It is the reverse: M.2 is the small stick in Cal’s laptop. The 2.5 inch drive has no place to go.
- Nothing is wrong; plug the 2.5 inch drive in through the charger socket — if chosen: The charger socket carries power into the laptop. It is not a data port for a drive.

After the answer: the deciding words are marked. Reason: The deciding words are the gum-stick slot with no cable, and no 2.5 inch bay. That is an M.2 slot, and a 2.5 inch drive has nowhere to go.

#### Question in the draw: l18-r-mic

A chat, with its history: "Eli, Training", Chat with the help desk.

> (Eli, Training, at the left) People cannot hear me on calls from my laptop. My headset works on a coworker’s laptop. In the sound settings, the laptop’s built-in microphone shows no movement when I speak.

**What is the cheapest test to split the built-in microphone from the call app?**
(the options come in an order that depends on the seed of the question)
- Record a few words in the laptop’s sound recorder, which uses no call app (right)
- Replace the laptop’s built-in microphone right now — if chosen: No test has split the part from the software yet.
- Reinstall the call app — if chosen: The sound settings belong to the laptop, not to the app. The recorder splits them.
- Buy a new headset — if chosen: The headset works on the coworker’s laptop, and it is not what was in use here.

After the answer: the deciding words are marked. Reason: The deciding words are no movement in the sound settings. A recorder with no call app in it is the cheapest cut between the microphone and the app.

#### Question in the draw: l18-p-usbc

A chat, with its history: "Gina, Marketing", Chat with the help desk.

> (Gina, Marketing, at the left) I need a charging cable for my new Android phone. The port is a small oval, and the plug goes in whichever way up I hold it. It is not an Apple phone.

**Which cable do you tell Gina to buy?**
(the options come in an order that depends on the seed of the question)
- USB-C (right)
- Micro-USB — if chosen: Micro-USB is a flat, wider shape and goes in one way only. It is on older phones.
- Mini-USB — if chosen: Mini-USB is bigger and older still, found on cameras and old gear, and it goes in one way only.
- Lightning — if chosen: Lightning is Apple’s own thin plug. This is not an Apple phone.

After the answer: the deciding words are marked. Reason: The deciding words are a small oval and either way up. That is USB-C. Micro-USB and mini-USB fit one way only, and Lightning belongs to Apple.

#### Question in the draw: l18-s-tether

A chat, with its history: "Rhea, Consultant", Chat with the help desk.

> (Rhea, Consultant, at the left) I am at a client site with no guest Wi-Fi. My phone has a good signal and plenty of data. My laptop has no cellular modem. I need the laptop online for an hour.

**What do you tell Rhea to do?**
(the options come in an order that depends on the seed of the question)
- Turn on the phone’s hotspot and join it from the laptop (right)
- Put the phone beside the laptop — if chosen: NFC works only from a few centimeters and carries small payments, not an internet connection.
- Pair the phone to the laptop as a Bluetooth headset — if chosen: A headset link carries sound, not the internet connection.
- Plug the laptop into a docking station — if chosen: A docking station adds ports and power to a laptop. The internet connection still has to come from somewhere.

After the answer: the deciding words are marked. Reason: The deciding words are no guest Wi-Fi and a laptop without cellular. Hotspot and tethering both share the phone’s cellular data, and they use the plan’s data and the phone’s battery.

#### Question in the draw: l18-s-dock

A chat, with its history: "Dana, Design", Chat with the help desk.

> (Dana, Design, at the left) I come in with my laptop and want one connection to give it power, two monitors, a wired network, and a slot for an extra drive. A friend said to get a port replicator.

**What do you recommend, and why?**
(the options come in an order that depends on the seed of the question)
- A docking station (right)
- A port replicator — if chosen: A port replicator copies the laptop’s own ports. It does not add a drive bay.
- A drawing pad — if chosen: A drawing pad is a pen tablet for a computer. It does not connect monitors.
- A stylus — if chosen: A stylus is a pen for touch screens and has no part in connecting monitors or networks.

After the answer: the deciding words are marked. Reason: The slot for an extra drive is the deciding wish: it goes beyond repeating ports. A docking station can add it; a port replicator only copies the laptop’s own ports.

#### Question in the draw: l18-t-replicator

The question, read aloud as above: **Which desk base only repeats a laptop’s own ports and adds nothing new? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - port replicator

After the answer: Reason: A port replicator repeats the laptop’s ports onto the desk. A docking station can add power, drives and more.

#### Question in the draw: l18-t-usbc

The question, read aloud as above: **Which plug is a small oval that goes in either way up, and is on most current Android phones? Name it as a USB type.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - USB-C
  - USB Type-C

After the answer: Reason: USB-C is the small reversible oval. Micro-USB and mini-USB go in one way only, and Lightning is Apple’s own.

#### Question in the draw: l18-k-lightning

The question, read aloud as above: **Lightning is a charging and data connector found on older iPhones and iPads. Which company made it?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Apple

After the answer: Reason: Lightning is Apple’s own connector. Newer iPhones and iPads use USB-C, which is the standard shape on most other phones.

#### Question in the draw: l18-r-micro

A chat, with its history: "Nell, Stockroom", Chat with the help desk.

> (Nell, Stockroom, at the left) The scanner in the stockroom has a small flat plug-in port, wider at the top, that goes in one way only. The only cable I have has a thin oval end that goes in either way up.

**What does the scanner need?**
(the options come in an order that depends on the seed of the question)
- A micro-USB cable; the oval USB-C end will not fit its flat port (right)
- A Lightning cable, which goes in one way only on small devices — if chosen: Lightning is Apple’s reversible plug and a scanner would not use it.
- A mini-USB cable; it is the small plug that goes in either way up — if chosen: Mini-USB goes in one way only, and it is bigger than micro-USB.
- The cable Nell has, pushed in harder from the other side — if chosen: A plug that does not fit the port is the wrong cable. Forcing it damages the port.

After the answer: the deciding words are marked. Reason: The deciding words are a flat port, wider at the top, one way only. That is micro-USB. USB-C is the reversible oval Nell already holds.

#### Question in the draw: l18-r-point

The question, read aloud as above: **Some laptops have a small rubber nub between the G, H and B letters on the keyboard that moves the pointer. What is it called? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - track point
  - trackpoint
  - pointing stick

After the answer: Reason: A track point, also called a pointing stick, moves the pointer by pressure. The trackpad is the flat touch panel under the keyboard, and a drawing pad is a separate pen tablet.

#### Question in the draw: l18-r-share

A chat, with its history: "Ivo, Field team", Chat with the help desk.

> (Ivo, Field team, at the left) There are four of us in a car park, and none of our laptops or tablets has cellular. One phone has data. We all need to be online for an hour.

**What do you turn on at the phone?**
(the options come in an order that depends on the seed of the question)
- A hotspot, so the phone becomes a Wi-Fi network that all four can join (right)
- USB tethering to all four with one cable, which shares to every device at once — if chosen: Tethering over a cable serves the one computer plugged in.
- A docking station, which gives each laptop its own data from the phone — if chosen: A docking station adds ports and power. It does not make a data connection.
- A Bluetooth headset link, so that each device uses the phone’s sound and data — if chosen: A headset link carries sound and not an internet connection.

After the answer: the deciding words are marked. Reason: The deciding words are four devices and one phone with data. A hotspot turns the phone into a Wi-Fi network, so several devices can join it at once.

#### Question in the draw: l18-w-pair

A chat, with its history: "Ana, Sales", Chat with the help desk.

> (Ana, Sales, at the left) My new earbuds will not work with my new phone. I tried three times. They must be broken, so I am sending them back.

A written note: "Your notes", On the desk.

> Ana’s phone: Bluetooth is on. In its Bluetooth list the earbuds appear under Saved devices as Not connected. The earbuds’ light blinks when they are in pairing mode.
> A coworker’s phone is on the desk, with Bluetooth on.

**You put the earbuds in pairing mode and pair them to the coworker’s phone. They pair at once and play sound. What does that show?**
(the options come in an order that depends on the seed of the question)
- The earbuds work, so the fault is on Ana’s phone side of the pairing, not in the earbuds. (right)
- The earbuds work only with the coworker’s phone, the wrong model. — if chosen: Earbuds are made to pair with any phone. Nothing in the test points at the model.
- The test proves nothing — if chosen: Only one thing changed: the phone. That is why the test splits the earbuds from the phone.
- Ana’s phone must have a broken Bluetooth radio, so it needs replacing. — if chosen: The radio may be fine. One saved entry in Ana’s list has not been looked at yet.

After the answer: the deciding words are marked. Reason: Ana blamed the earbuds. Pairing them to a second phone was the cheapest cut: they worked, so they were ruled out. The chain then showed Bluetooth on and pairing mode on, with a stale saved entry in the way, fixed by one change.
The working:
- Write down every cause that fits “new earbuds will not work with the new phone”.: The earbuds are faulty; they are not in pairing mode; the phone’s Bluetooth is off; an old saved entry in the phone is in the way; a PIN was not confirmed.
- Name the favorite cause and test it cheaply.: Ana thinks the earbuds are broken. The cheapest cut is to pair them to a different phone.
- Drop the cause the test rules out.: The earbuds pair and play on the coworker’s phone, so they are fine. The fault is on Ana’s side.
- Walk Ana’s phone along the chain: on, pairing mode, found, PIN, test.: Bluetooth is on. The earbuds are in pairing mode (the light blinks). They are not found as new, because a half-finished entry named Not connected is saved from Ana’s earlier tries.
- Change one thing: forget the old entry and pair again.: Ana taps Forget on the saved entry, then scans, picks the earbuds and confirms the pairing. Nothing else is changed.
- Test it with Ana and write it up.: Music plays, and a short test call works. The note says: new earbuds, stale saved entry, forgot it and paired again; earbuds fine.

#### Question in the draw: l18-p-scan

A chat, with its history: "Mike, Events", Chat with the help desk.

> (Mike, Events, at the left) The new conference speaker has been on for ten minutes. No light is lit and nobody has pressed its button. My phone’s Bluetooth is on and its scan lists other devices nearby, but the speaker never appears.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Hold the speaker’s button until its light blinks, then scan again (right)
- Restart the phone and scan again to see if the speaker shows up — if chosen: A restart is cheap, but the phone already finds other devices. The speaker has not been made discoverable.
- Restore the phone to factory settings and pair again from the beginning — if chosen: That erases the phone to fix a link that has not been checked yet.
- Return the speaker — if chosen: A new speaker may be fine. Nobody has tried its pairing mode.

After the answer: the deciding words are marked. Reason: The deciding words are no light, no button pressed, and other devices found by the phone. The phone side works, so the next link is the speaker being discoverable.

#### Question in the draw: l18-s-signin

A chat, with its history: "Ines, HR", Chat with the help desk.

> (Ines, HR, at the left) I changed my company password on Monday. Since then my phone shows no new mail, and the calendar is stuck. A banner says I must sign in again. The phone has full signal and Wi-Fi.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Have Ines sign in again with the new password in the phone’s mail account (right)
- Turn on airplane mode for a minute, and then turn it off again — if chosen: Airplane mode restarts the radios. The radios work: signal and Wi-Fi are full.
- Erase the phone and configure the work account again from the start — if chosen: That is the heaviest step and loses the local data. The banner points at one password.
- Put the SIM card into a different phone to see if mail arrives there — if chosen: The mail does not depend on the SIM. It depends on the account being signed in.

After the answer: the deciding words are marked. Reason: The deciding words are changed my password and a banner asking to sign in. The network is fine, so the fault is the account link, and the cheapest change is to enter the new password.

#### Question in the draw: l18-s-cap

A chat, with its history: "Tom, Sales rep", Chat with the help desk.

> (Tom, Sales rep, at the left) My phone plan has a 10 GB limit. By the 12th I have used 9 GB. The data list says 7 GB of it is my photos syncing to cloud storage.

**What do you change?**
(the options come in an order that depends on the seed of the question)
- Switch photo sync to Wi-Fi only (right)
- Turn the phone’s cellular data off all month, and use it only on Wi-Fi — if chosen: That would cut off mail and maps on the road. Only the heavy job needs moving to Wi-Fi.
- Delete the photos from the phone after they sync — if chosen: The data is used when the photos are sent. Deleting them afterward saves none of it.
- Switch the phone to 3G — if chosen: An older network is slower; it does not use less data for the same video.

After the answer: the deciding words are marked. Reason: The deciding words are a 10 GB limit, 9 GB used and 7 GB of photo sync. Large transfers belong on Wi-Fi, and moving that one job is a single change.

#### Question in the draw: l18-g-esim

A chat, with its history: "Lia, Traveler", Chat with the help desk.

> (Lia, Traveler, at the left) I am flying abroad next week. My new phone is unlocked and has no slot for a SIM card, and I want a local data plan there without carrying a card.

**What do you tell Lia?**
(the options come in an order that depends on the seed of the question)
- Use an eSIM: buy a local carrier’s plan and add it by QR code or app (right)
- Buy a SIM card and cut it down until it fits into the phone — if chosen: The phone has no slot to put any card into.
- Turn on the hotspot of a friend’s phone and join its Wi-Fi in the other country — if chosen: That depends on a friend’s plan and presence abroad, and not on Lia’s own plan.
- Keep the home plan and switch on data roaming for the trip — if chosen: Roaming uses the home carrier’s plan and rates. Lia wants a local plan, and a local plan is added to the phone as an eSIM.

After the answer: the deciding words are marked. Reason: The deciding words are no slot for a SIM card. A phone without a slot has an eSIM, and a local plan is added to it through a carrier’s QR code or app.

#### Question in the draw: l18-t-esim

The question, read aloud as above: **A phone has no card to slide in: its SIM is built in and added with a code from the carrier. What is that kind of SIM called?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - eSIM
  - e-SIM
  - embedded SIM

After the answer: Reason: An eSIM is built into the phone and added by the carrier’s QR code or app, so no card is swapped.

#### Question in the draw: l18-t-byod

The question, read aloud as above: **An employee uses their own phone for work mail, and the company manages the work part. What do the four letters BYOD stand for? Write the four words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - bring your own device

After the answer: Reason: BYOD is bring your own device. The company manages the work part of such a phone and wipes only that, never the owner’s own data.

#### Question in the draw: l18-k-airplane

A chat, with its history: "Sid, Warehouse", Chat with the help desk.

> (Sid, Warehouse, at the left) My phone shows Wi-Fi and the cellular bars gone, and the Bluetooth speaker is off, too. The little plane icon is lit. I have not touched any setting.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Turn airplane mode off, then check each radio (right)
- Replace the SIM card — if chosen: The SIM is only one of three affected radios. A single switch explains all three.
- Forget the Wi-Fi network and pair the speaker again from the beginning — if chosen: Each of those starts over on one radio. The plane icon is the one switch that covers every one.
- Update the phone’s software — if chosen: Nothing has been checked first. The plane icon already says what turned the radios off.

After the answer: the deciding words are marked. Reason: The deciding words are Wi-Fi, cellular and Bluetooth all gone, with the plane icon lit. Airplane mode switches the three radios off together, so turning it off is the first test.

#### Question in the draw: l18-k-mdm

The question, read aloud as above: **A company uses software to push settings, apps and rules to its phones and tablets and to lock or wipe them from afar. What are the three words that the letters MDM stand for?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - mobile device management

After the answer: Reason: MDM is mobile device management. The company enrolls a phone, then the software configures it, enforces its rules, installs company apps and can lock or wipe it.

#### Question in the draw: l18-r-loc

A chat, with its history: "Kai, Delivery", Chat with the help desk.

> (Kai, Delivery, at the left) The map app on my work phone cannot find where I am. It says location is off. My signal and data are fine. The phone is a company phone and I have not changed anything.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Turn location services on for the phone, and allow them for the map app (right)
- Replace the SIM card — if chosen: The SIM identifies the subscriber to the carrier. It does not give a position.
- Turn on the hotspot, which lets the phone find its own location — if chosen: A hotspot shares data. It does not give the phone a position.
- Reinstall the map app and pair it with a Bluetooth speaker to test — if chosen: The message says location is off. Reinstalling the app leaves that off.

After the answer: the deciding words are marked. Reason: The deciding words are location is off, with fine signal and data. Location services are a switch, and the app needs permission to use it.

#### Question in the draw: l18-r-sim

A chat, with its history: "Mara, Accounting", Chat with the help desk.

> (Mara, Accounting, at the left) I moved my SIM card from my old phone into my new one. It now says no service, and I cannot call. The new phone is the same make. The old phone made calls well yesterday with this SIM.

**What is the cheapest test to split the SIM from the new phone?**
(the options come in an order that depends on the seed of the question)
- Put the SIM back into the old phone and see if that phone gets service again (right)
- Order a new SIM card from the carrier and wait for it to arrive — if chosen: A new card is a costly guess. A swap of one SIM tells which side it is on.
- Turn on the hotspot on the new phone, to see if it gets service — if chosen: The hotspot shares a connection that the phone already has. It cannot create service.
- Reset the new phone to factory settings and put the SIM in again — if chosen: A reset erases the new phone and costs more than moving a card back.

After the answer: the deciding words are marked. Reason: The cheapest cut puts the one SIM into the phone known to work. If the old phone gets service, the SIM is cleared and the new phone is at fault.

#### Question in the draw: l18-r-pin

A chat, with its history: "Omar, Fleet", Chat with the help desk.

> (Omar, Fleet, at the left) I am pairing my phone with a new car. The phone found the car, and now both screens show a six-digit number. The car asks me to confirm.

**What does Omar do?**
(the options come in an order that depends on the seed of the question)
- Check that the two numbers match, and then confirm on both screens (right)
- Cancel and begin again — if chosen: The number is part of pairing. It is the step, not a fault.
- Turn off Bluetooth on the phone, so that the number goes away — if chosen: That ends the pairing and leaves the car unpaired.
- Type the number into the phone’s search box, as a code for the car — if chosen: A code to confirm is compared on both screens, and no search box needs it.

After the answer: the deciding words are marked. Reason: The deciding words are both screens show a six-digit number. Pairing runs: on, pairing mode, found, PIN, test. Matching the number is the PIN step, then the pair is tested.

#### Question in the draw: l18-p-lock

A chat, with its history: "Hal, Service manager", Chat with the help desk.

> (Hal, Service manager, at the left) My phone holds customer lists and my work email. Right now it unlocks with a swipe. A technician told me to pick a better screen lock.

**Which screen lock do you tell Hal to choose?**
(the options come in an order that depends on the seed of the question)
- A six-digit PIN, with a fingerprint as a shortcut (right)
- Keep the swipe, but add a picture as the lock screen so it is yours — if chosen: A picture changes how the screen looks, not who can open it.
- A pattern drawn on the screen — if chosen: A pattern is weaker than a PIN: a thief can see the smudges or watch it being drawn.
- A four-digit PIN — if chosen: A longer PIN is harder to guess. A six-digit one gives a thief far more to try than a four-digit one.

After the answer: the deciding words are marked. Reason: The deciding words are customer lists and a swipe. A swipe protects nothing. A PIN with a fingerprint shortcut protects the data and still opens fast.

#### Question in the draw: l18-s-lost

A written note: "This desk’s rule", Lost phones.

> Confirm the caller with the desk’s identity check before any lock, wipe or reset.
> Mark the phone as lost first: this locks it, shows a contact number on the screen, and shows where it is.
> Wipe only when the owner confirms it is not coming back. A wipe cannot be undone.

**Nadia calls from a taxi stand. What do you say?**
- An incoming call from "Nadia, Sales" (Incoming call · 6:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "I think I left my work phone in a taxi an hour ago. It has customer lists and my mail. Please do something about it right now!" [pushes: Nadia is rushed and wants action at once.]
  - reply "I will wipe the phone right now, so that nothing on it can be read.": the call ends (not this one): A wipe cannot be undone, and nobody has confirmed who is calling. Anyone could say they lost a phone to get one erased. [slip: reset or unlocked an account before confirming who was asking]
  - reply "Before I do anything, I need to confirm who you are with our identity check.": goes on to turn 2, where the pressure comes back
  - reply "I will help right away. Please call the taxi company and phone me if it is not found.": the call ends (not this one): The phone stays unlocked and unwatched meanwhile. The desk can lock and locate it from here. [slip: left the user not knowing what happens next and when]
- turn 2, the other side says: "Okay, I have answered your questions. Can you find it? If not, wipe it." [pushes: Nadia passes the desk’s identity check, and wants it found first and wiped second.]
  - reply "I will mark it lost, which locks it and shows where it is. You tell me if it is gone.": the call ends (right): Marking it lost locks the phone and shows where it is, and nothing is erased that can still come back. Nadia decides on the wipe when it is known to be gone, which follows the desk’s rule.
  - reply "You said to wipe it if it is not found, so I am wiping it now.": the call ends (not this one): Nadia asked to find it first. Wiping now erases the phone before the gentler step, and the wipe cannot be undone. [slip: wiped or reset the phone before the cheaper steps]
  - reply "Let us wait until tomorrow in case the driver calls the number on the phone.": the call ends (not this one): Customer lists sit on an unlocked phone for the night. Marking it lost costs nothing and locks it. [slip: left the ticket waiting with nothing gathered]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: the deciding words are marked. Reason: The desk’s rule gives the order: confirm who is calling, mark the phone lost (it locks and shows its place), and wipe only when the owner says it is not coming back.

#### Question in the draw: l18-g-byod

A chat, with its history: "Pete, Operations", Chat with the help desk.

> (Pete, Operations, at the left) Marco is leaving the company today. Marco reads work mail on a personal phone, which the company manages only for the work apps; the company can remove those apps and their data and nothing else. Family photos are on it too.

**What do you do to the phone?**
(the options come in an order that depends on the seed of the question)
- Remove the work apps and their data only, with a selective wipe (right)
- Wipe the whole phone — if chosen: The company does not own the phone. A full wipe would destroy Marco’s own photos and data.
- Leave the phone alone and trust Marco to remove the mail — if chosen: The company mail and files must come off. Leaving them is a hole in the company’s protection.
- Lock the phone remotely until Marco hands it in — if chosen: It is Marco’s own phone, so locking it is out of bounds.

After the answer: the deciding words are marked. Reason: The deciding words are a personal phone and managed only for the work apps. A personal phone gets a selective wipe of the work part; a company-owned phone can be wiped whole.

#### Question in the draw: l18-g-tries

A chat, with its history: "Cleo, Front desk", Chat with the help desk.

> (Cleo, Front desk, at the left) My little girl tapped my phone and now it says it is locked and to try again in one hour. I know my PIN. I am afraid that it will erase itself.

**What do you tell Cleo?**
(the options come in an order that depends on the seed of the question)
- Wait for the timer, then enter the right PIN; more guesses add time (right)
- Keep entering PINs until the timer clears — if chosen: A wrong try adds to the count and lengthens the wait. A policy may even erase the phone at a fixed limit.
- Restart the phone to clear the lock — if chosen: A restart does not clear a log-in lock. The timer and the count stay.
- Hand the phone to the desk to be wiped — if chosen: A wipe erases the phone. The lock clears by itself in an hour, and Cleo knows the PIN.

After the answer: the deciding words are marked. Reason: The deciding words are try again in one hour and I know my PIN. A failed-log-in limit slows or erases after too many wrong tries, so waiting and entering the right PIN is the cheap, safe step.

#### Question in the draw: l18-g-policy

A written note: "The company’s phone policy", Every company phone must meet all of these.

> Screen lock: a PIN of six digits or more, or a password
> Encryption: on
> Updates: install the phone’s and the apps’ updates within two weeks
> Locator app: on, so a lost phone can be found
> Remote backup: on
> Fingerprint: allowed as a shortcut beside the PIN

A written note: "Anil’s new phone, as checked on the desk", Settings found.

> Screen lock: four-digit PIN
> Encryption: on
> Updates: the last update was installed five weeks ago; a newer one came out three weeks ago and is not installed
> Locator app: off
> Remote backup: on
> Fingerprint: added as a shortcut

**Tap the three settings that break the policy.**
- Tap three sentences in the text above, then tap Answer. Nothing is marked before the answer; Answer opens when that many are tapped.
- "Screen lock: a PIN of six digits or more, or a password" — if tapped: That is not the sentence.
- "Encryption: on" — if tapped: That is not the sentence.
- "Updates: install the phone’s and the apps’ updates within two weeks" — if tapped: That is not the sentence.
- "Locator app: on, so a lost phone can be found" — if tapped: That is not the sentence.
- "Remote backup: on" — if tapped: That is not the sentence.
- "Fingerprint: allowed as a shortcut beside the PIN" — if tapped: That is not the sentence.
- "Screen lock: four-digit PIN" (right)
- "Encryption: on" — if tapped: That is not the sentence.
- "Updates: the last update was installed five weeks ago; a newer one came out three weeks ago and is not installed" (right)
- "Locator app: off" (right)
- "Remote backup: on" — if tapped: That is not the sentence.
- "Fingerprint: added as a shortcut" — if tapped: That is not the sentence.

After the answer: the deciding words are marked. Reason: Three settings fall short of the policy: a four-digit PIN where six is needed, an update still not installed three weeks after it came out where two weeks is the limit, and a locator that is off. Encryption and the remote backup are on, and the fingerprint shortcut is allowed beside a PIN.

#### Question in the draw: l18-t-wipe

The question, read aloud as above: **What is the step called that erases a lost phone from afar, once it is online, and cannot be undone? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - remote wipe

After the answer: Reason: A remote wipe erases the phone from afar. It cannot be undone, so it comes after locking and finding the phone.

#### Question in the draw: l18-k-profile

The question, read aloud as above: **A company bundles a phone’s Wi-Fi, email, VPN and passcode rules into one file that it sends to many phones at once. What is that bundle called?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - configuration profile
  - configuration profiles
  - profile

After the answer: Reason: A configuration profile carries settings and security rules. MDM sends it, so every phone is configured the same way without anyone touching each one.

#### Question in the draw: l18-k-wipe

A chat, with its history: "Ray, Sales", Chat with the help desk.

> (Ray, Sales, at the left) I dropped my phone in the lake while fishing, so it is gone. It is my own phone, and the company only manages my work mail on it. I want to be sure nobody can read my work mail.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Confirm it is Ray with the desk’s identity check, queue a selective wipe of the work data, change the password (right)
- Wipe the whole phone — if chosen: This is a personal phone. The company has no claim on Ray’s own data.
- Do nothing for now and wait for the phone to turn up — if chosen: It may be pulled out and dried. The work mail must be removed from it either way.
- Mark it lost, wait a week for it to be found, and then see what is possible — if chosen: A phone in a lake will not be found by a locator, and a week leaves the mail open.

After the answer: the deciding words are marked. Reason: The deciding words are a personal phone and managed work mail only. After the identity check, a selective wipe takes the work data when the phone is next online, and a changed password closes the account at once.

#### Question in the draw: l18-r-patch

A chat, with its history: "Edna, Security", Chat with the help desk.

> (Edna, Security, at the left) A flaw in the phone’s operating system lets a website take over the phone. The maker has released an update that fixes it. Our company has 200 phones.

**What does the desk do?**
(the options come in an order that depends on the seed of the question)
- Require the update on all phones through MDM, within a fixed number of days (right)
- Wait to see whether anyone loses data before installing the update — if chosen: The flaw is already known. Waiting leaves 200 phones open.
- Tell each person that they may update if they have time this month — if chosen: Some will not. A flaw that takes over a phone needs a deadline.
- Turn off the phones’ location services, which removes the flaw — if chosen: Location services have nothing to do with a flaw in the system software.

After the answer: the deciding words are marked. Reason: The deciding words are a flaw, a released fix and 200 phones. Patch management installs updates on a deadline, and MDM is the tool that enforces it.

#### Question in the draw: l18-r-filter

A chat, with its history: "Zed, Security", Chat with the help desk.

> (Zed, Security, at the left) Our staff phones keep opening harmful websites from links in text messages. We want something on the phones that blocks whole categories of sites and also catches malware.

**What do you put on the phones?**
(the options come in an order that depends on the seed of the question)
- Endpoint security: an anti-malware app with content filtering (right)
- A longer screen lock PIN, which stops sites from being opened — if chosen: A PIN guards the phone against someone else holding it. It does not filter links.
- A locator app, so that harmful sites can be found on the map — if chosen: A locator shows where a lost phone is. It does not look at websites.
- Remote backup, which keeps a copy and filters links as it copies — if chosen: A backup keeps a copy of data. It does not block anything.

After the answer: the deciding words are marked. Reason: The deciding words are blocks whole categories of sites and catches malware. That is endpoint security with content filtering.

#### Question in the draw: l18-r-backup

The question, read aloud as above: **Before a phone is lost, a company wants a copy of its photos, contacts and files kept in the cloud, so that a wipe does not lose them. What is that kind of backup called? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - remote backup
  - cloud backup

After the answer: Reason: A remote backup keeps a copy of the phone’s data away from the phone. With one in place, a wipe of a lost phone loses little, and the data can be restored to a new phone.

#### Question in the draw: l20-w-dean

A chat, with its history: "Dean, Design", Chat with the help desk.

> (Dean, Design, at the left) My laptop has been slow since Monday and the fan is loud all day. It is four years old, so I think it needs more memory.

A plain table, "Task Manager, Performance tab (what Dean reads out)":

> Line  |  Value  (the column heads)
> CPU (the processor)  |  96% in use
> Memory  |  5.1 of 16 GB in use
> Disk  |  3% in use
> Wi-Fi  |  Almost nothing sent or received

A plain table, "Task Manager, Processes tab, sorted by CPU":

> Name  |  CPU  |  Memory  (the column heads)
> PhotoSync Helper  |  71%  |  210 MB
> Chrome  |  14%  |  1.4 GB
> Windows Explorer  |  2%  |  90 MB

**What do the Performance lines show?**
(the options come in an order that depends on the seed of the question)
- Memory is mostly free and the processor is busy, so memory is not the limit (right)
- Memory is the problem: 5.1 GB is a lot to have in use at once — if chosen: Memory is less than a third full. The guess was memory; the reading says otherwise.
- The machine is healthy: the disk and the Wi-Fi are both nearly idle — if chosen: Two idle lines do not cancel a processor at 96%. The busy line is the one that matters.
- Open Disk Management to look for a drive fault on the slow laptop — if chosen: Disk Management shows how drives are divided up. The Disk line reads 3%, so the drive is not the limit.

After the answer: the deciding words are marked. Reason: The favorite cause was memory, and the Performance tab ruled it out in seconds. Processes named the program using the processor, and Startup showed why it came back. Each tab answered one question, and nothing was changed before the look.
The working:
- Split the question first: what is happening now, or what was recorded earlier?: “Slow since Monday” with a loud fan is happening now, so the live view comes first: Task Manager. Event Viewer, which keeps records, is for questions about the past.
- Name the favorite cause and look before buying: Task Manager’s Performance tab shows which part is the limit.: The favorite is memory. Memory is 5.1 of 16 GB, so it is ruled out. The processor is at 96%.
- Cut in half: which program uses the processor? Open the Processes tab and sort by CPU.: PhotoSync Helper uses 71%. Chrome, with many tabs, uses 14%. One program is the suspect, and a list is not yet a fix.
- Next question: does it start with Windows? Look at the Startup tab.: PhotoSync Helper is enabled at start with a High startup impact. It began on Monday when Dean installed a photo tool. That explains why it comes back after every restart.
- Change one thing: disable PhotoSync Helper at start, then restart.: After the restart the processor idles and the fan is quiet. Ending the task alone would have helped only until the next sign-in.
- Confirm with Dean and write it down.: Dean confirms after a day. The note says: slow, loud fan, memory 5.1 of 16 GB, processor 96%, PhotoSync Helper 71% and a High startup impact, disabled at start, fixed. Buying memory would have fixed nothing.

#### Question in the draw: l20-s-msinfo

A chat, with its history: "Kit, Procurement", Chat with the help desk.

> (Kit, Procurement, at the left) I am filling in a form for the insurer and it wants the computer’s model, how much memory is installed, the BIOS version and the Windows build. Where do I find all of that in one place?

**Which tool gives that in one list?**
(the options come in an order that depends on the seed of the question)
- System Information (msinfo32), which lists the hardware and the build (right)
- Task Manager, whose Performance tab shows the memory and the processor — if chosen: Task Manager gives live use and some hardware details, but not the model, the firmware version or the build in one place.
- Device Manager, which shows each device and the driver version it uses — if chosen: Device Manager lists devices and drivers. The form wants facts about the whole computer.
- Event Viewer, in which the System log keeps notes about the hardware — if chosen: Event Viewer holds records of what happened, not a list of what the computer is made of.

After the answer: the deciding words are marked. Reason: System Information answers “what is in this computer?” in one place: model, installed memory, firmware version and Windows build. Task Manager answers what is busy now.

#### Question in the draw: l20-s-clean

A chat, with its history: "Gus, Sales", Chat with the help desk.

> (Gus, Sales, at the left) The C: drive says it has 2 GB free and Windows keeps warning me. I emptied nothing and I have no big files that I know of. Is there a quick way to clear the junk Windows keeps?

**Which tool clears temporary files and the Recycle Bin?**
(the options come in an order that depends on the seed of the question)
- Disk Cleanup (cleanmgr), which lists temporary files and the Recycle Bin (right)
- Defragment and Optimize Drives (dfrgui), which rearranges the files on the drive — if chosen: Optimizing arranges how files sit on the drive. It does not free any space.
- Registry Editor, to delete the entries that older programs left behind — if chosen: Registry entries take almost no space, and a wrong edit can break Windows. It does not fix a full drive.
- Disk Management, to shrink the drive and make a new volume from the room left — if chosen: Disk Management changes how the drive is divided. It cannot make room that is not free.

After the answer: the deciding words are marked. Reason: Disk Cleanup answers “how do I free space?” and shows how much each group of temporary files would free before it removes anything. Optimizing and Disk Management do not free space.

#### Question in the draw: l20-s-reg

A chat, with its history: "Pam, Legal", Chat with the help desk.

> (Pam, Legal, at the left) The vendor’s guide for our scanner says to change one value in the registry to stop it from timing out. They gave me the exact path. I have never opened it.

**What does the technician do before editing?**
(the options come in an order that depends on the seed of the question)
- Open regedit and export that branch of the registry first, then edit it (right)
- Open regedit and change the value at once, then test the scanner afterward — if chosen: With no export there is no easy way back if the value is wrong. A backup costs a minute.
- Open Task Manager and look for the scanner’s process, then end it — if chosen: Ending a process does not change a stored value. The timeout is written in the registry.
- Open Programs and Features and reinstall the scanner program from scratch — if chosen: Reinstalling is a big step for a change the vendor has spelled out. It may not touch that value at all.

After the answer: the deciding words are marked. Reason: Regedit changes the registry, which has no undo. Export the part you will edit first, then make the one change the vendor gives and test. A written instruction and a backup make it safe. The registry has five top-level branches called hives; the two met most are HKEY_LOCAL_MACHINE (the computer’s settings) and HKEY_CURRENT_USER (the signed-in person’s).

#### Question in the draw: l20-s-users

A chat, with its history: "Ben, IT", Chat with the help desk.

> (Ben, IT, at the left) The shared reception PC has 8 GB of memory and it is crawling at 9 AM. The front desk shows one person signed in, but I wonder if someone from last night stayed signed in too.

**Which Task Manager tab shows who is signed in and what each uses?**
(the options come in an order that depends on the seed of the question)
- The Users tab, which lists each signed-in person and what each one uses (right)
- The Startup tab, which lists the programs that open when Windows starts — if chosen: Startup shows what opens at sign-in, not who is signed in.
- The Services tab, which lists the background programs and their state — if chosen: Services lists background programs. They run for the computer as a whole and do not name the people signed in.
- The Performance tab, which graphs the processor and the memory over time — if chosen: Performance shows the totals. It cannot say who is using them.

After the answer: the deciding words are marked. Reason: The Users tab answers “who is signed in, and what does each person use?”. The other tabs show programs and totals, not people.

#### Question in the draw: l20-s-svc

A chat, with its history: "Ivy, HR", Chat with the help desk.

> (Ivy, HR, at the left) I cannot print. The spooler (the background program that lines up print jobs) is stuck. A colleague told me to restart it, but I do not know where that is.

**Where can a technician see and restart a background program?**
(the options come in an order that depends on the seed of the question)
- Task Manager’s Services tab, where a service can be restarted (right)
- Task Manager’s Processes tab, then End task on the spooler — if chosen: The Processes tab lists the spooler as a running process, but a service is restarted from the Services tab. End task only closes it.
- Device Manager, then remove and reinstall the printer’s entry — if chosen: Reinstalling the printer is more than a restart of the stuck program, and it changes the printer’s setup too.
- Task Scheduler, then run the print job again on a schedule — if chosen: Task Scheduler starts jobs by the clock. It does not restart a stuck background program.

After the answer: the deciding words are marked. Reason: A service is a background program, and the Services tab is where it is started, stopped or restarted. The Processes tab lists it too and can end it, but a service is stopped and restarted from the Services tab, and restarting is not the same as ending a task.

#### Question in the draw: l20-s-run-info

The question, read aloud as above: **The tool that lists the model, the installed memory, the firmware version and the Windows build on one screen is System Information.**

**Type the name that opens System Information from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - msinfo32
  - msinfo32.exe

After the answer: Reason: System Information opens with msinfo32: “ms” for Microsoft, “info” for information, and 32 as part of the name.

#### Question in the draw: l20-g-call

Sunil in Sales calls the help desk: Sunil’s laptop is slow and the client demo is in an hour. You answer. Sunil is on the laptop now.

**Sunil calls about the slow laptop. What do you say?**
- An incoming call from "Sunil, Sales" (Incoming call · 1:10 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My laptop is crawling. I think it needs more memory. Can you just send me a new one?" [pushes: Sunil wants the biggest step before anything was looked at.]
  - reply "I will put in an order for a new laptop today.": the call ends (not this one): Nothing has been looked at yet. A laptop order costs days, and Task Manager costs a minute. [slip: replaced a part before the cheap check]
  - reply "Press Ctrl, Shift and Esc. In Task Manager, open the Performance tab and read me memory and CPU.": goes on to turn 2, where the pressure comes back
  - reply "I am sorry, a slow laptop an hour before a demo is stressful. I will check what upgrade fits your model, order the memory, and send a technician to your desk to fit it before the demo.": the call ends (not this one): Polite, but nothing has been looked at. A memory order and a visit cost days and money, and Task Manager costs a minute. [slip: replaced a part before the cheap check]
  - reply "Restart it and see if the memory problem goes away on its own.": the call ends (not this one): A restart is cheap but it cuts nothing in half and loses the live view of what is using the processor. Look first. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "Memory says 6.2 of 16 GB. CPU says 98%. But I still think I need more memory." [pushes: Sunil holds to the first idea.]
  - reply "Memory cannot be the problem if it says 6.2 GB, so please stop saying that.": the call ends (not this one): The number is a fair answer, but telling Sunil to stop leaves no next step. Say it back, then give the next look. [slip: argued with the user or brushed off what they said]
  - reply "Memory is under half full, so the processor is the busy part. Open Processes, click the CPU heading, and read me the top name.": the call ends (right): The Performance tab ruled out memory with a number Sunil read out, and the next look is the Processes tab. The cheap look continues.
  - reply "Understood, I will order more memory for you.": the call ends (not this one): Memory is under half full, so it is not the limit. Ordering it would cost money and leave the slowness untouched. [slip: replaced a part before the cheap check]
  - reply "I completely understand, and I am sorry for the trouble this close to your demo. Let me restart your laptop from here, and we will look at the numbers again once it is back up.": the call ends (not this one): Kind words, but a restart ends the live view of what is using the processor, and the numbers just read already ruled memory out. [slip: ran a test that does not split what works from what does not]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: A slow computer is a live question, so Task Manager comes first. Its Performance tab shows which part is the limit, and the user reads the number out. When Sunil holds to the guess, you say it back and give the next look.

#### Question in the draw: l20-k-startup

A chat, with its history: "Hana, Billing", Chat with the help desk.

> (Hana, Billing, at the left) After I sign in, my laptop is unusable for about four minutes while things open and the fan runs. Once it settles it is fine.

A plain table, "Task Manager, Startup tab":

> Name  |  Status  |  Startup impact  (the column heads)
> BackupAgent  |  Enabled  |  High
> Chat app  |  Enabled  |  Medium
> OneDrive  |  Enabled  |  Low
> Printer tray icon  |  Enabled  |  Low

**What is the first change?**
(the options come in an order that depends on the seed of the question)
- Check with the backup’s owner, then disable BackupAgent at start and time the sign-in (right)
- Disable all four programs at start and restart the laptop — if chosen: If the sign-in speeds up, nobody knows which program was the cause, and the ones that were fine are off for no reason.
- Run Disk Cleanup and Defragment and Optimize Drives, then sign in again — if chosen: Neither tool answers “what opens at sign-in?”, and the table already names the likely program.
- End BackupAgent in the Processes tab after each sign-in — if chosen: Ending it after it has started works only until the next sign-in. The Startup tab stops it from starting.

After the answer: the deciding words are marked. Reason: A slow minutes after sign-in is the question “which program starts with Windows?”, answered by the Startup tab. Disable one program, the High one, and restart. Ending a task helps only until the next sign-in.

#### Question in the draw: l20-k-resmon

A chat, with its history: "Ken, Archive", Chat with the help desk.

> (Ken, Archive, at the left) My PC stalls every few minutes. Task Manager shows the disk at 100% and I can see which program is busy, but I cannot tell which file it is reading.

A plain table, "Task Manager, Performance tab":

> Line  |  Value  (the column heads)
> CPU  |  12%
> Memory  |  7.8 of 16 GB
> Disk 0  |  100%

**Which tool shows which file the program is reading?**
(the options come in an order that depends on the seed of the question)
- Resource Monitor (resmon), on the Disk tab, which lists programs and files (right)
- Disk Management (diskmgmt.msc), to see how the drive is divided into volumes — if chosen: It shows how the drive is divided, not what is using it now.
- Disk Cleanup (cleanmgr), to clear temporary files off the busy drive — if chosen: Clearing files does not say what is using the disk. The look has to come before the change.
- Event Viewer (eventvwr.msc), to find the disk errors from last week — if chosen: The stall is happening now. Event Viewer holds what was recorded, not the files being read this minute.

After the answer: the deciding words are marked. Reason: The Performance tab told us the disk is the limit; the question “which program, and which file?” is Resource Monitor’s Disk tab. It is opened from the bottom of Task Manager’s Performance tab, or by typing resmon.

#### Question in the draw: l20-k-msconfig

A chat, with its history: "Lou, Training", Chat with the help desk.

> (Lou, Training, at the left) The training laptop only shows its fault in safe mode. I need it to start in safe mode on the next restart, but the screen at power-on goes by too quickly for me to press a key in time.

**Which tool can make Windows start in safe mode next time?**
(the options come in an order that depends on the seed of the question)
- System Configuration (msconfig), Boot tab: tick Safe boot, then restart (right)
- Task Manager, on the Startup tab, with the whole list disabled and a restart — if chosen: The Startup tab controls programs that open at sign-in. It does not choose how Windows itself starts.
- Device Manager, with every device disabled and then a restart — if chosen: Disabling every device is many changes at once and does not start safe mode, which is a way of starting Windows.
- Registry Editor, adding a safe-mode value in the boot entry by hand — if chosen: A tick in msconfig writes that setting for you with a way back. Editing by hand risks an unbootable laptop.

After the answer: the deciding words are marked. Reason: System Configuration (msconfig) is the tool for how Windows starts: normal, diagnostic or safe. Tick Safe boot on the Boot tab for the next start, and untick it when the work is finished.

#### Question in the draw: l20-r-defrag

A chat, with its history: "Abe, Reception", Chat with the help desk.

> (Abe, Reception, at the left) The reception desktop has an old spinning hard drive and it has taken longer and longer to open files over the years. Nothing is wrong with it otherwise.

**Which tool tidies how files sit on a spinning drive?**
(the options come in an order that depends on the seed of the question)
- Defragment and Optimize Drives (dfrgui), which joins up file pieces (right)
- Disk Management (diskmgmt.msc), which divides the drive into volumes — if chosen: It changes how the drive is divided and cannot tidy the files inside it.
- Registry Editor (regedit), to remove the old programs’ entries — if chosen: Registry entries are tiny and do not slow the drive. A wrong edit risks Windows.
- Event Viewer (eventvwr.msc), to look for entries from the drive — if chosen: Nothing has failed. Files being slow to open is a layout matter, and no error is likely to be recorded.

After the answer: the deciding words are marked. Reason: Defragment and Optimize Drives (dfrgui) answers “are the files spread across a spinning drive?”. Disk Management changes volumes, Disk Cleanup frees space, and neither tidies the pieces.

#### Question in the draw: l20-r-hang

A chat, with its history: "Bea, Studio", Chat with the help desk.

> (Bea, Studio, at the left) My spreadsheet window has gone white and says “Not responding”. I clicked a lot of times and nothing happened. I have been waiting for five minutes. I saved 10 minutes ago.

**What does the technician do?**
(the options come in an order that depends on the seed of the question)
- In Task Manager’s Processes tab, select the spreadsheet and choose End task (right)
- In Device Manager, update the keyboard and mouse drivers and try again — if chosen: The keyboard and mouse work. One program has stopped answering.
- In Event Viewer, read the Application log before touching the window — if chosen: The log can wait and may help afterward. The window is frozen now and Task Manager can end it.
- In Task Scheduler, create a job that restarts the program every hour — if chosen: A timed restart is a different job, and it would not free this frozen window.

After the answer: the deciding words are marked. Reason: Task Manager’s Processes tab shows each running program and can end one that is not responding. Ending it loses unsaved work, so the saved time matters. The live tab answers a live problem.

#### Question in the draw: l20-r-perf

A chat, with its history: "Cal, Admin", Chat with the help desk.

> (Cal, Admin, at the left) The accounts PC freezes while a report builds. I think it needs a faster processor.

A plain table, "Task Manager, Performance tab, while the report builds":

> Line  |  Value  (the column heads)
> CPU  |  14%
> Memory  |  6 of 16 GB
> Disk  |  100%

**What do the lines show, and what comes next?**
(the options come in an order that depends on the seed of the question)
- The disk is the limit; open Resource Monitor’s Disk tab to find the program (right)
- The processor is the limit, so order a faster one for the accounts PC — if chosen: The processor is at 14%. The busy line is the disk.
- The memory is the limit, so add more memory to the accounts PC — if chosen: Memory is far from full at 6 of 16 GB.
- Nothing is the limit, so the report itself must be broken and should be rebuilt — if chosen: One line at 100% is a limit. The disk is where the wait is.

After the answer: the deciding words are marked. Reason: The Performance tab shows which part is at its limit, and here it is the disk, not the favorite cause of the processor. The next question is which program, and that is Resource Monitor.

#### Question in the draw: l20-p-log

A chat, with its history: "Mia, Accounting", Chat with the help desk.

> (Mia, Accounting, at the left) At start-up this morning a message flashed up saying a driver failed to load, and then everything seemed normal. I would like to know which driver, so I can tell you.

**Which tool shows what Windows recorded at start-up?**
(the options come in an order that depends on the seed of the question)
- Event Viewer, in the System log, which keeps what Windows recorded (right)
- Task Manager, and in it the Processes tab, which lists what is running — if chosen: Task Manager shows what is running now. A driver that failed to load during start-up is a record of the past.
- Task Scheduler, which lists the jobs that run at chosen times — if chosen: Task Scheduler runs programs on a timetable. It does not keep a record of what failed.
- System Information, which lists the hardware the computer has in it — if chosen: System Information describes the computer as it is. The failed load is an event, and events are in Event Viewer.

After the answer: the deciding words are marked. Reason: Windows writes down what happened as it started, including a driver that failed to load. The question is about the past, so the tool is a record: Event Viewer, in the System log. Task Manager answers questions about now.

#### Question in the draw: l20-p-driver

A chat, with its history: "Raj, Warehouse", Chat with the help desk.

> (Raj, Warehouse, at the left) The label printer worked yesterday. This morning it is not listed, and in Device Manager I saw a yellow triangle next to its name.

**Which tool lists devices and flags one with a problem?**
(the options come in an order that depends on the seed of the question)
- Device Manager, where a yellow triangle marks a device with a problem (right)
- Disk Management, which lists the drives and divides them into volumes — if chosen: Disk Management is for drives and the space on them. A label printer is not a drive.
- Local Users and Groups, which lists the accounts on the computer — if chosen: That console is for accounts. The yellow triangle is about a device.
- Registry Editor, which can show the printer’s entry as raw values — if chosen: It is a risky place to start. Device Manager shows the same device with a plain warning, and changes nothing until you do.

After the answer: the deciding words are marked. Reason: The question is which device has a problem, and Device Manager answers it with a yellow triangle on the device. From there the driver can be updated, rolled back or the device disabled, one change at a time.

#### Question in the draw: l20-p-disk

A chat, with its history: "Nell, Finance", Chat with the help desk.

> (Nell, Finance, at the left) I put a second drive in the desktop for the year-end files. It does not show up in File Explorer, but the BIOS (the first screen at power-on) lists it.

**Which tool shows a drive that Windows has not prepared yet?**
(the options come in an order that depends on the seed of the question)
- Disk Management, which lists a new drive that has no volume yet (right)
- Device Manager, then update the driver of the whole computer — if chosen: Device Manager can show the drive as a device, but it cannot give it a letter or a format. Updating the whole computer changes more than the cheap look.
- Disk Cleanup, which clears out temporary files to make room — if chosen: Disk Cleanup removes files from a drive that is already in use. This drive has no volume yet.
- Resource Monitor, which shows which program is reading the disk — if chosen: Resource Monitor shows activity on drives in use. Nothing can be reading a drive with no volume.

After the answer: the deciding words are marked. Reason: The firmware sees the drive, so it is installed. Windows has not prepared it yet, and Disk Management is the console that lists a drive with no volume and gives it a letter and a format.

#### Question in the draw: l20-s-sched

A chat, with its history: "Tom, Operations", Chat with the help desk.

> (Tom, Operations, at the left) Every night at 2 AM I need a small script to copy the shift report to the shared drive. I do not want to be there to start it. What do I use?

**Which console runs a program at a chosen time?**
(the options come in an order that depends on the seed of the question)
- Task Scheduler (taskschd.msc), which starts a program at a chosen time (right)
- Services tab in Task Manager, which starts background programs by hand — if chosen: The Services tab starts and stops programs when someone clicks it. It has no clock.
- Performance Monitor (perfmon.msc), which records numbers over time — if chosen: It records performance counters for later reading. It does not run a script.
- Group Policy Editor (gpedit.msc), which holds rules for the computer — if chosen: It holds rules for how Windows behaves. A timed copy is a job to run, not a rule.

After the answer: the deciding words are marked. Reason: Task Scheduler answers “how do I run a program at a time, or when something happens?”. Its trigger and action are the two parts of a job.

#### Question in the draw: l20-s-cert

A chat, with its history: "Una, Compliance", Chat with the help desk.

> (Una, Compliance, at the left) My browser says the certificate for our new internal site is not trusted. Our security guide says to check whether the company’s certificate is in my personal certificates.

**Which console lists a person’s certificates?**
(the options come in an order that depends on the seed of the question)
- Certificate Manager (certmgr.msc), which lists certificates for the user (right)
- Local Users and Groups (lusrmgr.msc), which lists accounts and their groups — if chosen: It lists accounts and groups. A certificate is not an account.
- Device Manager (devmgmt.msc), which lists the computer’s devices — if chosen: It lists hardware. The certificate is stored data, not a device.
- Event Viewer (eventvwr.msc), which lists what Windows recorded — if chosen: It might hold a related error, but it is a record of events, not the place where certificates are stored.

After the answer: the deciding words are marked. Reason: Certificate Manager answers “which certificates are stored for this user?”. Certificates prove who a site or program is, and the other consoles hold accounts, devices or events.

#### Question in the draw: l20-s-lusr

A chat, with its history: "Dax, Workshop", Chat with the help desk.

> (Dax, Workshop, at the left) The workshop PC runs Windows 11 Pro and is not on a domain (it is a stand-alone computer). I need to add a new person as a local user and put them in the Users group, not Administrators.

**Which console manages the accounts on this one computer?**
(the options come in an order that depends on the seed of the question)
- Local Users and Groups (lusrmgr.msc), which manages accounts and groups (right)
- Certificate Manager (certmgr.msc), which stores digital IDs — if chosen: Certificates are digital IDs for sites and programs. They do not create people’s accounts.
- Task Scheduler (taskschd.msc), which runs jobs at chosen times — if chosen: It runs jobs. The need here is an account.
- Performance Monitor (perfmon.msc), which records how the computer is doing — if chosen: It records performance numbers. It cannot create an account.

After the answer: the deciding words are marked. Reason: Local Users and Groups answers “which accounts are on this computer, and in which groups?”. Putting a person in Users and not Administrators keeps their rights small.

#### Question in the draw: l20-s-perfmon

A chat, with its history: "Lea, Planning", Chat with the help desk.

> (Lea, Planning, at the left) Our reporting PC slows down every afternoon, but never while I am looking at it. I would like the disk and processor use logged for a week so we can see when it happens.

**Which console can record counters over time?**
(the options come in an order that depends on the seed of the question)
- Performance Monitor (perfmon.msc), which can log counters for days (right)
- Task Manager’s Performance tab, left open on the screen all week — if chosen: Its graph shows about the last 60 seconds and nothing when the window is closed. The slow period would be gone.
- Event Viewer, searching its logs for the word “slow” — if chosen: Windows does not write “slow” into its logs. Use numbers that were recorded over time.
- Resource Monitor (resmon), which shows details of what runs at that moment — if chosen: Resource Monitor is a live view. It will not have been open when the slowdown happens.

After the answer: the deciding words are marked. Reason: Performance Monitor answers “how did the computer do over hours or days?” by recording counters. Task Manager and Resource Monitor are live views and show only the present.

#### Question in the draw: l20-s-run-event

The question, read aloud as above: **Windows keeps a record of errors, warnings and start-ups. The tool that reads it is Event Viewer.**

**Type the name that opens Event Viewer from the Run box (it ends in .msc).**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - eventvwr.msc
  - eventvwr
  - eventvwr msc

After the answer: Reason: Event Viewer opens with eventvwr.msc. An easy way to remember: “event” and “viewer” with the vowels dropped, and .msc for a console.

#### Question in the draw: l20-s-run-disk

The question, read aloud as above: **The console that lists drives, partitions and volumes, and that formats a new drive, is Disk Management.**

**Type the name that opens Disk Management from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - diskmgmt.msc
  - diskmgmt
  - diskmgmt msc

After the answer: Reason: Disk Management opens with diskmgmt.msc: “disk” and “management” shortened.

#### Question in the draw: l20-s-run-pick

A chat, with its history: "Ned, Field team", Chat with the help desk.

> (Ned, Field team, at the left) I am standing at a customer’s desk. I need to open Device Manager quickly. The customer shows me the Run box.

**Which name opens Device Manager?**
(the options come in an order that depends on the seed of the question)
- devmgmt.msc (right)
- diskmgmt.msc — if chosen: That one is Disk Management. The names look alike, and only one holds the devices.
- taskschd.msc — if chosen: That is Task Scheduler. “Task schedule” is about jobs at chosen times.
- lusrmgr.msc — if chosen: That is Local Users and Groups. “usr” is the clue: users.

After the answer: the deciding words are marked. Reason: The names are built from the tool’s own words: devmgmt is “device management”, diskmgmt is “disk management”, taskschd is “task scheduler”, lusrmgr is “local user manager”. Match the first part to the job, then the ending, .msc, shows it is a console.

#### Question in the draw: l20-s-run-perf

The question, read aloud as above: **The console that records how the computer does over hours or days, and graphs it, is Performance Monitor.**

**Type the name that opens Performance Monitor from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - perfmon.msc
  - perfmon
  - perfmon msc

After the answer: Reason: Performance Monitor opens with perfmon.msc: “perf” and “mon”, short for performance and monitor.

#### Question in the draw: l20-g-drv

A chat, with its history: "Ira, Lab", Chat with the help desk.

> (Ira, Lab, at the left) Since the update on Tuesday my USB scanner stopped working. It showed a yellow triangle in Device Manager as soon as I plugged it in. It worked last week.

A plain table, "Device Manager, Scanners":

> Line  |  Value  (the column heads)
> Device  |  Flatbed Scanner 200
> Status  |  Yellow triangle: a problem
> Driver date  |  Today, installed by the update
> Previous driver  |  Available to roll back to

**What is the one change to try first?**
(the options come in an order that depends on the seed of the question)
- Roll the driver back to the previous version, then test the scanner again (right)
- Update the driver, reinstall the scanner program and unplug it, all together — if chosen: Three changes at once: if the scanner works, nobody can say which one did it.
- Run Disk Cleanup and then open the registry to look for scanner entries — if chosen: Neither tool answers “what changed for the scanner?”. The table already names the new driver.
- Disable the scanner in Device Manager and plug it into another computer — if chosen: Disabling turns the device off here and teaches nothing about the new driver, which is the change.

After the answer: the deciding words are marked. Reason: Device Manager answers “is the driver the problem, and can I undo it?”. The change came with the update, so rolling the driver back is the cheapest one-change test. If it does not work, the next cause comes next.

#### Question in the draw: l20-k-event

A chat, with its history: "Joy, Server room", Chat with the help desk.

> (Joy, Server room, at the left) The file server restarted by itself last night around 3 AM. Nobody was there, and it is fine now. My boss wants to know what happened.

**Where does the technician look first?**
(the options come in an order that depends on the seed of the question)
- Event Viewer, System log, around 3 AM, for the error before the restart (right)
- Task Manager, on the Processes tab, to see which program is using the most — if chosen: Task Manager shows the present. The server is fine now, and the cause is in what was recorded then.
- Task Scheduler, to see whether a job was scheduled to run at 3 AM — if chosen: This may be worth a look later, but it guesses a cause. The log shows what happened without guessing.
- Performance Monitor, starting a log of counters from now on — if chosen: A log starting now will miss last night. Event Viewer already holds what happened then.

After the answer: the deciding words are marked. Reason: Event Viewer answers “what happened, and when?” for the past. Task Manager answers the present. For a restart nobody saw, open the System log and read the entries around the time.

#### Question in the draw: l20-k-policy

A chat, with its history: "Gil, Clinic", Chat with the help desk.

> (Gil, Clinic, at the left) The front-desk PC runs Windows 11 Pro and is a stand-alone computer, not on the company network. The owner wants Windows to require passwords at least 12 characters long and to block USB sticks.

**Which console holds rules like these for one computer?**
(the options come in an order that depends on the seed of the question)
- Local Group Policy Editor (gpedit.msc), which holds the computer’s rules (right)
- Local Users and Groups (lusrmgr.msc), which creates accounts and groups — if chosen: It manages who the accounts are. The rules for passwords and drives are policy.
- Certificate Manager (certmgr.msc), which stores digital IDs — if chosen: Certificates prove who a site or program is. They do not hold password rules.
- Task Scheduler (taskschd.msc), which runs jobs at chosen times — if chosen: It starts jobs. Neither rule is a job to run.

After the answer: the deciding words are marked. Reason: The rules for how Windows behaves belong to Group Policy, and on a stand-alone computer the editor is gpedit.msc. Local Users and Groups is for who has an account.

#### Question in the draw: l20-k-run

The question, read aloud as above: **The console that runs a program at a time you choose, or when something happens, is Task Scheduler.**

**Type the name that opens Task Scheduler from the Run box.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - taskschd.msc
  - taskschd
  - taskschd msc

After the answer: Reason: Task Scheduler opens with taskschd.msc: “task” and “schd” for scheduler.

#### Question in the draw: l20-r-gpedit

A chat, with its history: "Dee, Studio", Chat with the help desk.

> (Dee, Studio, at the left) The studio PC runs Windows 11 Pro and is stand-alone. The owner wants Windows to lock the screen after 5 minutes of no use, for every user on it, with no way for them to change it.

**Where does a rule like this for one computer live?**
(the options come in an order that depends on the seed of the question)
- Local Group Policy Editor (gpedit.msc), in the computer’s rules for the lock (right)
- Task Manager, on the Users tab, signing each person out when they are idle — if chosen: The Users tab signs people out by hand. It makes no rule.
- Task Scheduler (taskschd.msc), with a job that locks the screen every 5 minutes — if chosen: A job on a clock locks at chosen times whether or not anyone is idle, and users could end it.
- Device Manager, disabling the display so the screen turns off by itself — if chosen: The display is a device, not a rule. Disabling it would turn the screen off for good.

After the answer: the deciding words are marked. Reason: Group Policy holds the rules a computer follows, such as a lock after idle time. Task Scheduler runs jobs, and Task Manager shows what is running now. The name gpedit.msc is “group policy edit”.

#### Question in the draw: l20-r-shrink

A chat, with its history: "Fin, Warehouse", Chat with the help desk.

> (Fin, Warehouse, at the left) The warehouse PC has one big drive, C:, with 200 GB free. The owner wants a separate D: volume for scan files, with no reinstalling of Windows.

**Which console divides the free space into a new volume?**
(the options come in an order that depends on the seed of the question)
- Back up first, then in Disk Management shrink C: and make a new volume from the free room (right)
- Disk Cleanup (cleanmgr), which frees space by clearing temporary files — if chosen: It removes files. It cannot make a new volume.
- Device Manager (devmgmt.msc), which lists the drive and its driver — if chosen: It lists the drive as a device and cannot divide it.
- Resource Monitor (resmon), which shows how the drive is used — if chosen: It shows activity. It cannot change how a drive is divided.

After the answer: the deciding words are marked. Reason: Disk Management is the console for drives, partitions and volumes. Shrink one volume and use the free space for another. Back up first: any change to partitions is risky.

#### Question in the draw: l20-r-touch

A chat, with its history: "Gwen, Field team", Chat with the help desk.

> (Gwen, Field team, at the left) The laptop’s touchpad keeps moving the cursor while I type, and I always use an external mouse. I want the touchpad off, but not removed.

**Which console can turn a device off without removing it?**
(the options come in an order that depends on the seed of the question)
- Device Manager (devmgmt.msc): select the touchpad and choose Disable device (right)
- Disk Management (diskmgmt.msc), by taking the touchpad offline — if chosen: Disk Management is for drives. A touchpad is not a drive.
- Local Users and Groups (lusrmgr.msc), by removing Gwen from the group — if chosen: Groups decide what an account may do. The touchpad is hardware.
- Certificate Manager (certmgr.msc), by revoking its certificate — if chosen: A touchpad has no certificate to revoke. Certificates are for sites and programs.

After the answer: the deciding words are marked. Reason: Device Manager lists the computer’s devices and can disable and enable them, update or roll back their drivers and show a warning. It is the console for hardware.

#### Question in the draw: l20-p-hidden

A chat, with its history: "Ola, Reception", Chat with the help desk.

> (Ola, Reception, at the left) Our software guide says the settings file is in a folder called AppData in my user folder. I open my folder and there is no AppData. I can see everything else.

**Where does Windows hide this choice?**
(the options come in an order that depends on the seed of the question)
- File Explorer Options, View tab: show hidden files, folders and drives (right)
- Programs and Features, to see if the software installed all of its folders — if chosen: That list shows which programs are installed, not which folders are visible.
- Indexing Options, to rebuild the list of places Windows searches — if chosen: The index feeds search. It does not control which folders File Explorer shows.
- Device Manager, to see if the disk driver is hiding part of the folder — if chosen: Nothing is wrong with the drive: the rest of the user folder shows. This single folder is marked hidden.

After the answer: the deciding words are marked. Reason: The folder is hidden, and showing hidden files is a File Explorer Options choice on the View tab. The question is how File Explorer shows files, not which programs are installed or how search works.

#### Question in the draw: l20-s-fast

A chat, with its history: "Cy, Marketing", Chat with the help desk.

> (Cy, Marketing, at the left) After the update I shut the laptop down every night, but a wrong display setting keeps coming back until I choose Restart. The vendor’s note says it may be “fast startup”.

**What does fast startup do, and where is it?**
(the options come in an order that depends on the seed of the question)
- A shutdown that keeps part of Windows saved to speed the next start, under “Choose what the power buttons do” in Power Options (right)
- Hibernate, which saves open work to the drive and powers off, chosen in Power Options — if chosen: Hibernate keeps your open work for the next start. Fast startup keeps part of Windows, and a Shut down still closes your programs.
- The High performance power plan, which makes every start quicker, chosen in Power Options — if chosen: A power plan controls speed and sleep. Fast startup is its own switch, and it is why a fault saved at Shut down comes back.
- A Task Manager Startup tab choice that makes programs open faster, turned off there — if chosen: Fast startup is about Windows itself, not about the programs on the Startup tab.

After the answer: the deciding words are marked. Reason: With fast startup on, Shut down keeps part of Windows saved, so a fault stored there survives a shutdown. Restart does a full start. The choice is in Power Options.

#### Question in the draw: l20-s-usb

A chat, with its history: "Ria, Design", Chat with the help desk.

> (Ria, Design, at the left) My laptop’s USB mouse freezes if I leave it alone for a minute, and it takes a second or two to wake when I move it. The mouse is fine on my other computer.

**Which Power Options setting powers down idle USB devices?**
(the options come in an order that depends on the seed of the question)
- USB selective suspend, in the plan’s advanced settings; turn it off here (right)
- Hibernate, in the Power Options, which saves memory to the drive and shuts off — if chosen: Hibernate puts the whole computer off. Only the USB port is losing power here.
- The lid action, which picks what happens when the laptop is closed — if chosen: The lid is open. This is about the mouse’s port.
- Switch to the High performance power plan in Power Options — if chosen: A power plan changes many settings at once. This is one setting, and one change is tested alone.

After the answer: the deciding words are marked. Reason: USB selective suspend lets Windows cut power to an idle USB port, and a device on it wakes slowly. It is in the plan’s advanced settings under Power Options. One setting, changed alone.

#### Question in the draw: l20-s-prog

A chat, with its history: "Fay, Admin", Chat with the help desk.

> (Fay, Admin, at the left) I need to remove an old program, and I also want to turn on the Windows feature called Telnet Client. The desk’s guide says both are in one place in Control Panel.

**Which Control Panel area does both?**
(the options come in an order that depends on the seed of the question)
- Programs and Features, which uninstalls programs and turns features on (right)
- Devices and Printers, which lists the hardware and the printers attached — if chosen: It lists hardware. Programs and Windows features live elsewhere.
- Indexing Options, which controls which places the search looks in — if chosen: It controls search. Programs and features are somewhere else.
- Network and Sharing Center, which shows the connections — if chosen: It is for connections. Telnet Client is a program, not a connection setting.

After the answer: the deciding words are marked. Reason: Programs and Features answers “uninstall a program, or turn a Windows feature on or off?”. Devices, search and connections each have their own areas.

#### Question in the draw: l20-s-index

A chat, with its history: "Moe, Records", Chat with the help desk.

> (Moe, Records, at the left) Searching the Documents folder used to find my files in a second. Now it misses files I saved last week. I can open the folder and see them.

**Which area controls which places Windows searches?**
(the options come in an order that depends on the seed of the question)
- Indexing Options, which shows the places indexed and can rebuild them (right)
- Disk Cleanup, which clears out files that are no longer needed — if chosen: The files are fine and wanted. Clearing files would make them harder to find, not easier.
- Disk Management, to check the drive that holds Documents — if chosen: The drive opens and shows the files, so it is working. The search list is the part that is behind.
- Defragment and Optimize Drives, to speed up how fast files are found — if chosen: Optimizing sorts how files sit on a drive. It does not rebuild the search list.

After the answer: the deciding words are marked. Reason: Indexing Options answers “which places does Windows search, and is the list up to date?”. Files that exist but do not turn up in search call for a rebuild of the index.

#### Question in the draw: l20-s-priv

A chat, with its history: "Sal, Sales", Chat with the help desk.

> (Sal, Sales, at the left) My video call app says it cannot find my camera. The camera works in the camera app. Windows says nothing is wrong with the device.

**Where do you check that apps are allowed to use the camera?**
(the options come in an order that depends on the seed of the question)
- The Settings app, in Privacy, where each app’s camera access is listed (right)
- Device Manager, and reinstall the camera driver — if chosen: The camera works in another app, so its driver is fine. A reinstall is a bigger step than the one setting.
- The Settings app, in Accounts, to sign in to the call app again — if chosen: Accounts holds sign-in options for Windows. Access to a camera is held in Privacy.
- The Settings app, in Time and Language, to match the call app’s region — if chosen: Time and Language is for the clock and the region. The camera is not tied to either.

After the answer: the deciding words are marked. Reason: The Privacy area of the Settings app holds what each app may use, such as the camera and the microphone. The camera works elsewhere, so the device and its driver are fine.

#### Question in the draw: l20-s-lang

A chat, with its history: "Eli, Travel", Chat with the help desk.

> (Eli, Travel, at the left) I flew in from London and my meetings show the wrong times. My laptop’s clock is an hour out and the calendar uses the wrong time zone. Where do I fix this in Settings?

**Which area of the Settings app holds the clock and region?**
(the options come in an order that depends on the seed of the question)
- Time and Language, with the date, time zone and region (right)
- Network and Internet, where the Wi-Fi connection can change the clock — if chosen: It holds Wi-Fi, VPN and proxy choices. The time zone lives with the clock.
- Privacy, where location choices can change the time zone — if chosen: Location access sits in Privacy, but the time zone and region are chosen in Time and Language.
- Accounts, where the sign-in region is kept — if chosen: It holds sign-in options and users. The time zone is not among them.

After the answer: the deciding words are marked. Reason: Time and Language holds the date, the time, the time zone and the region. The ten areas each hold one family of choices, and the clock is in this one.

#### Question in the draw: l20-g-lid

A chat, with its history: "Zoe, Finance", Chat with the help desk.

> (Zoe, Finance, at the left) When I close my laptop lid at my desk, it goes to sleep and drops the video call that I have on the big screen. I want the call to continue with the lid shut and the screen plugged in.

The laptop is plugged in to power and to the external screen.

**Where does the technician change this?**
(the options come in an order that depends on the seed of the question)
- Power Options, the lid action, choosing do nothing when plugged in (right)
- Task Manager, Startup tab, disabling the sleep program — if chosen: Sleep is not a program that opens at sign-in. It is a power setting.
- The Settings app, Devices, then the screen’s entry in the list — if chosen: The screen is fine. What closes the call is what the lid does.
- Device Manager, disabling the lid sensor under the system devices — if chosen: The lid action is a choice Windows offers in Power Options. Turning off a device is a rough way to reach it.

After the answer: the deciding words are marked. Reason: The lid action belongs to Power Options. It has its own choice for plugged in and for battery, so Zoe’s call can continue while plugged in and the laptop still sleeps on the move.

#### Question in the draw: l20-k-ext

A chat, with its history: "Pat, Orders", Chat with the help desk.

> (Pat, Orders, at the left) I got an email with “invoice.pdf”. I double-clicked it, a black window flashed and nothing opened. The icon looked like a PDF.

A plain table, "The file in the Downloads folder":

> Line  |  Shows  (the column heads)
> Name as File Explorer shows it  |  invoice.pdf
> Icon  |  A PDF icon
> Type column  |  Application

**Which setting shows the whole file name?**
(the options come in an order that depends on the seed of the question)
- File Explorer Options, View tab: show file name extensions (right)
- Programs and Features, to see whether a PDF reader is installed — if chosen: The Type column says Application, so a missing reader is not the issue. The question is what the file really is.
- Indexing Options, to rebuild the list of file names Windows searches — if chosen: The index is for search. It does not change how a name is shown.
- Disk Cleanup, to clear the Downloads folder of old files — if chosen: The file is a clue and should be looked at, not cleared. It may not even be a PDF.

After the answer: the deciding words are marked. Reason: The Type column says Application where a PDF would say a document type: the real ending, .exe, was hidden, and the name looked like a PDF. Showing extensions in File Explorer Options (View tab) shows the real name. A program named like a document is a warning sign, so do not open it again.

#### Question in the draw: l20-k-hib

A chat, with its history: "Una, Travel", Chat with the help desk.

> (Una, Travel, at the left) I am taking my laptop on a week-long trip with no charger until I get there. I want all my open documents back exactly as they are when I open it, and I do not want the battery to drain on the way. Hibernate is on in this laptop’s power menu.

**Which power state fits?**
(the options come in an order that depends on the seed of the question)
- Hibernate: saves the open work to the drive, then powers off (right)
- Sleep: it keeps the open work in memory on a trickle of power — if chosen: Sleep uses a little power all the time. Over a week the battery could run out, and unsaved work would be lost.
- Shut down with fast startup on, so it starts quickly on the trip — if chosen: Shut down closes the programs. Fast startup only speeds up the next start; the open documents are not kept.
- Lock the screen with Windows and L and close the lid — if chosen: Lock keeps everything running behind the lock screen, so the battery keeps draining.

After the answer: the deciding words are marked. Reason: Hibernate saves what is open to the drive and powers off. Sleep keeps it in memory with a little power. Shut down closes everything. The need was “work kept” and “no drain”, and only hibernate does both.

#### Question in the draw: l20-r-ie

A chat, with its history: "Ray, Branch", Chat with the help desk.

> (Ray, Branch, at the left) Our old intranet site only works through the company’s proxy (a server that the browser goes through to reach sites). Pages time out. The desk’s guide says the proxy address has to be entered in Control Panel.

**Which Control Panel area holds the proxy and browser security choices?**
(the options come in an order that depends on the seed of the question)
- Internet Options, with the proxy on Connections and zones on Security (right)
- Network and Sharing Center, which lists the computer’s connections — if chosen: It shows connections and adapters. The proxy belongs to the browser settings.
- Windows Defender Firewall, which allows or blocks apps through the network — if chosen: The firewall allows or blocks traffic. It has no field for a proxy address.
- Programs and Features, which uninstalls browsers — if chosen: It adds or removes programs. The proxy is a setting, not a program.

After the answer: the deciding words are marked. Reason: Internet Options is the Control Panel area for browser choices: the proxy on the Connections tab and the security zones on the Security tab.

#### Question in the draw: l20-r-fw

A chat, with its history: "Ivo, Sales", Chat with the help desk.

> (Ivo, Sales, at the left) We installed a new chat program. It works on my laptop, but others on the office network cannot connect to the shared feature on my machine. Windows asked me to allow it and I clicked Cancel.

**Where is an app allowed through the firewall?**
(the options come in an order that depends on the seed of the question)
- Windows Defender Firewall, “Allow an app or feature”, then tick the program (right)
- Network and Sharing Center, then turning off sharing for the network — if chosen: That area changes sharing and adapters. The program is blocked by the firewall.
- Internet Options, then lowering the Security zone to the lowest level — if chosen: It changes the browser. Lowering a zone does not open the firewall for the chat program.
- Windows Defender Firewall, turning the whole firewall off for every network — if chosen: Turning it off lets everything through, far more than the one program needs.

After the answer: the deciding words are marked. Reason: The firewall decides which programs may receive traffic. The narrow fix is to allow the one program in Windows Defender Firewall, not to switch the firewall off.

#### Question in the draw: l20-r-sound

A chat, with its history: "Ash, Reception", Chat with the help desk.

> (Ash, Reception, at the left) Since I plugged in the new headset, video calls play the sound through the headset, but the desktop speakers now stay silent for everything else. I want the speakers to be the normal output again.

**Which Control Panel area picks the default speakers?**
(the options come in an order that depends on the seed of the question)
- Sound, Playback tab, where the default device is chosen (right)
- Devices and Printers, then removing the headset from the list — if chosen: Removing the headset would send sound back, but it also takes away the headset when it is needed. One choice of default is smaller.
- Device Manager, then disabling the desktop speakers completely — if chosen: That makes the speakers silent on purpose. The aim is the opposite.
- Mail, then changing the profile for the call program — if chosen: Mail holds email profiles. It has no say over sound.

After the answer: the deciding words are marked. Reason: Sound is the Control Panel area for playback and recording devices and which one is the default. Devices appear there when plugged in, and the default moves to the newest.

#### Question in the draw: l24-p-force

A chat, with its history: "Kim, Accounts", Chat with the help desk.

> (Kim, Accounts, at the left) The spreadsheet app on my Mac froze. The spinning wheel has been there for five minutes and nothing I click works. My email and browser are fine.

**In Windows you would use Task Manager and End task. What is the Mac’s way to close just that app?**
(the options come in an order that depends on the seed of the question)
- Force Quit, which lists the open apps and stops the frozen one (right)
- Restart the Mac, so the frozen app starts again from nothing — if chosen: A restart works but closes the email and the browser too, and loses what is not saved in them. Force Quit stops only the frozen app.
- Spotlight, searching for the app so that it opens a new window — if chosen: Spotlight finds and opens things. It cannot stop an app that is already running.
- Mission Control, dragging the frozen window off to another desktop — if chosen: Mission Control only shows windows and desktops side by side. It does not close an app.

After the answer: the deciding words are marked. Reason: A frozen app on a Mac that otherwise works is the job of Force Quit, the counterpart of End task in Task Manager. It stops that one app and leaves the rest running.

#### Question in the draw: l24-p-spot

A chat, with its history: "Joel, HR", Chat with the help desk.

> (Joel, HR, at the left) I saved a file called “Offer letter template” on my Mac last week and I cannot remember which folder. I only know its name.

**Which Mac tool finds a file from its name?**
(the options come in an order that depends on the seed of the question)
- Spotlight, which finds files, apps and mail from a name typed (right)
- The Dock, which holds shortcuts to the apps used most often — if chosen: The Dock is the Mac’s taskbar: it holds apps. It does not search for a file.
- Keychain, which keeps the passwords and certificates saved — if chosen: Keychain keeps saved passwords. It does not look for files.
- Time Machine, which keeps older copies of the files on a drive — if chosen: Time Machine restores older copies from a backup. It is not a search by name.

After the answer: the deciding words are marked. Reason: Finding a file from its name is search: the counterpart of the Windows search box is Spotlight.

#### Question in the draw: l24-q-key

A chat, with its history: "Omar, Purchasing", Chat with the help desk.

> (Omar, Purchasing, at the left) Since my Mac was rebuilt, the supplier’s portal asks for my login every time. The old Mac filled it in for me. I want to see which logins this Mac has saved.

**Which Mac tool stores saved logins?**
(the options come in an order that depends on the seed of the question)
- Keychain, which holds saved passwords and certificates (right)
- Finder, which shows the files and folders on the Mac — if chosen: Finder is the Mac’s File Explorer. It browses files, not saved passwords.
- Continuity, which lets an iPhone and the Mac work together — if chosen: Continuity connects the Mac to an iPhone or iPad. It does not store passwords.
- Mission Control, which shows every open window and desktop — if chosen: Mission Control is for windows and desktops.

After the answer: the deciding words are marked. Reason: Saved passwords and certificates live in Keychain, the counterpart of Credential Manager.

#### Question in the draw: l24-q-dmg

A chat, with its history: "Lisa, Marketing", Chat with the help desk.

> (Lisa, Marketing, at the left) I downloaded a program called Notes-Pro.dmg. When I double-click it, a small window opens with the app’s icon and an arrow pointing to a folder icon named Applications.

**What installs it?**
(the options come in an order that depends on the seed of the question)
- Drag the app’s icon onto Applications, then eject the disk image (right)
- Drag the .dmg file itself into the Applications folder and open it there — if chosen: The .dmg is only the container. The app inside it is what belongs in Applications.
- Keep the window open and start the app from the disk image each time — if chosen: It would run from the image, and stop working once the image is ejected or the Mac restarts. The app has to be copied into Applications.
- Look in the window for a setup.exe and run that to install it — if chosen: A Mac does not run Windows .exe files. The drag into Applications is the whole install.

After the answer: the deciding words are marked. Reason: A .dmg opens like a disk. The app inside is dragged into /Applications, which is the whole install. A .pkg runs an installer instead, and the App Store installs with the Apple ID.

#### Question in the draw: l24-k-mission

A chat, with its history: "Ruth, Sales", Chat with the help desk.

> (Ruth, Sales, at the left) I have fourteen windows open across three desktops on my Mac and I have lost the budget spreadsheet.

**What shows every open window and desktop on a Mac?**
(the options come in an order that depends on the seed of the question)
- Mission Control, which spreads out all windows and desktops (right)
- Spotlight, which finds a file from the words in its name — if chosen: Spotlight searches for files and apps. It does not lay out the open windows.
- The Dock, which holds shortcuts to the apps used most often — if chosen: The Dock is the Mac’s taskbar. It shows apps, not every window and desktop.
- Force Quit, which lists the open apps that can be stopped — if chosen: Force Quit stops apps. It does not show windows or desktops.

After the answer: the deciding words are marked. Reason: Seeing every window and desktop together is Mission Control, the counterpart of Task View.

#### Question in the draw: l24-k-folder

The question, read aloud as above: **On a Mac, which folder holds the apps that are installed for everyone?**

**Type the folder name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Applications

After the answer: Reason: Installed apps live in /Applications. /Users holds each person’s files, /Library holds settings shared by every user and /System holds macOS itself.

#### Question in the draw: l24-r-continuity

A chat, with its history: "Aya, Sales", Chat with the help desk.

> (Aya, Sales, at the left) My iPhone rings and I would like to answer the call on my Mac, and start an email on one and finish it on the other.

**Which Mac feature lets the Mac and an iPhone work together like this?**
(the options come in an order that depends on the seed of the question)
- Continuity, which links the Mac with the iPhone and iPad of the same person (right)
- Spotlight, which finds files, apps and mail from a typed name — if chosen: Spotlight searches the Mac. It does not link it to a phone.
- Mission Control, which spreads out every open window and desktop — if chosen: Mission Control is about windows and desktops on the Mac.
- Disk Utility, which checks, repairs and erases drives — if chosen: Disk Utility looks after drives.

After the answer: the deciding words are marked. Reason: Using a call or unfinished work across a Mac and an iPhone is Continuity.

#### Question in the draw: l24-r-finder

The question, read aloud as above: **On a Mac, which app browses files and folders, the way File Explorer does in Windows?**

**Type its name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Finder

After the answer: Reason: Finder is the Mac’s File Explorer. The Dock is the Mac’s taskbar.

#### Question in the draw: l24-r-icloud

A chat, with its history: "Bo, Finance", Chat with the help desk.

> (Bo, Finance, at the left) I want the files on my Mac’s desktop to show up on my iPhone, and I want iMessage and FaceTime to work on both. Windows has OneDrive for the file part.

**Which Apple service holds the files and ties the devices to one Apple ID?**
(the options come in an order that depends on the seed of the question)
- iCloud, which holds iCloud Drive files and joins iMessage and FaceTime (right)
- Time Machine, which backs the Mac up to an external drive — if chosen: Time Machine makes backups to a local drive. It does not sync files to a phone.
- Keychain, which stores the passwords saved on the Mac — if chosen: Keychain stores passwords.
- Finder, which shows the files and folders on the Mac — if chosen: Finder shows what is on the Mac. It does not sync with another device.

After the answer: the deciding words are marked. Reason: The Apple ID’s cloud is iCloud: iCloud Drive for files, iMessage and FaceTime for messages and calls. OneDrive does the file part in Windows.

#### Question in the draw: l24-r-pkg

A chat, with its history: "Chen, Support", Chat with the help desk.

> (Chen, Support, at the left) A vendor’s Mac software comes as a .pkg file. When I open it, a step-by-step window appears and asks for the Mac’s admin password.

**How is a .pkg different from a .dmg?**
(the options come in an order that depends on the seed of the question)
- A .pkg runs an installer that can put files in several places (right)
- A .pkg is an app that runs straight from wherever it sits — if chosen: That describes an .app. A .pkg is an installer.
- A .pkg is a backup copy that Time Machine restores later — if chosen: A backup is not a .pkg file.
- A .pkg is a Windows installer that the Mac runs after a download — if chosen: A .pkg is a Mac installer, not a Windows one.

After the answer: the deciding words are marked. Reason: A .pkg runs an installer (the Mac’s setup program); a .dmg is a disk image holding an app to drag into Applications; an .app is the app itself; the App Store installs with the Apple ID. To remove an app, drag it from Applications to the Trash.

#### Question in the draw: l24-q-tm

A chat, with its history: "Rosa, Design", Chat with the help desk.

> (Rosa, Design, at the left) I saved over a logo file on my Mac on Tuesday and I need Monday’s copy. An external drive is plugged into the Mac and it has been backing the Mac up every hour.

**Which Mac tool brings back an older copy of a file?**
(the options come in an order that depends on the seed of the question)
- Time Machine, which keeps hourly copies on the drive (right)
- Disk Utility, which checks and repairs the drive itself — if chosen: Disk Utility looks after drives. It holds no older copies of files.
- FileVault, which scrambles the Mac’s drive so thieves cannot read it — if chosen: FileVault encrypts the drive. It does not keep older copies.
- Keychain, which stores the passwords the Mac has saved — if chosen: Keychain stores passwords, not files.

After the answer: the deciding words are marked. Reason: An older copy of a file comes from the backup. The Mac’s backup is Time Machine, the counterpart of File History.

#### Question in the draw: l24-g-fv

A chat, with its history: "Priya, Operations", Chat with the help desk.

> (Priya, Operations, at the left) My boss is taking a company MacBook abroad. If it is lost, nobody must be able to read what is on its drive. Windows has BitLocker for this.

**What does that on a Mac?**
(the options come in an order that depends on the seed of the question)
- FileVault, which encrypts the whole startup drive (right)
- Disk Utility, which erases, partitions and checks drives — if chosen: Disk Utility looks after drives. It does not protect what is on them.
- Time Machine, which backs the Mac up to another drive — if chosen: A backup helps after a loss but does not stop anyone reading the lost Mac.
- Keychain, which holds the passwords the Mac has saved — if chosen: Keychain stores passwords. It does not encrypt the drive.

After the answer: the deciding words are marked. Reason: Making a lost laptop’s drive unreadable is encryption. The Mac’s counterpart of BitLocker is FileVault.

#### Question in the draw: l24-g-disk

A chat, with its history: "Sam, Finance", Chat with the help desk.

> (Sam, Finance, at the left) An external drive shows up gray in Finder and will not open. I need to check it for errors. On Windows I would use chkdsk. The files on it are not backed up anywhere.

**What do I do first?**
(the options come in an order that depends on the seed of the question)
- In Disk Utility, try to mount the drive and copy off what can be read, then run First Aid (right)
- Erase the drive in Disk Utility, then put the files back from it — if chosen: Erase wipes what is on it. The files are not backed up, so an erase destroys the only copy.
- Restore the drive from Time Machine on the same screen — if chosen: The files on it are not backed up, so Time Machine holds nothing to restore.
- Run First Aid at once, since it checks the drive and repairs it — if chosen: First Aid rewrites the drive, and nothing is copied off yet. The files are the only copy, so they come first.

After the answer: the deciding words are marked. Reason: A drive that will not open is checked with Disk Utility (First Aid), the counterpart of chkdsk. Because the drive will not open, copying may not work; whatever can be read is copied first, then First Aid, and an erase only once the files are copied or given up.

#### Question in the draw: l24-g-rsr

A chat, with its history: "Jo, IT", Chat with the help desk.

> (Jo, IT, at the left) A security hole in Safari is in the news. The company says the Macs get a fix “today”, but the next big macOS update is weeks away.

**What is Rapid Security Response, as the exam names it?**
(the options come in an order that depends on the seed of the question)
- Apple’s quick security update, sent between the big updates; current Macs call it Background Security Improvements (right)
- A tool that finds and removes viruses on the Mac — if chosen: That is antivirus. Rapid Security Response installs fixes from Apple.
- A copy of the whole Mac kept on an external drive — if chosen: That is a backup, which Time Machine makes.
- A way to lock the Mac from far away when it is stolen — if chosen: It is about security fixes, not about locking a lost Mac.

After the answer: the deciding words are marked. Reason: Rapid Security Response is Apple’s quick security update between the big updates (now called Background Security Improvements): part of keeping the Mac updated, with antivirus and backups kept alongside.

#### Question in the draw: l24-k-tm

The question, read aloud as above: **What is the Mac’s own backup tool called, the one that keeps copies of files that can be brought back?**

**Type its name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Time Machine

After the answer: Reason: Time Machine is the Mac’s backup, the counterpart of File History. It keeps copies on a drive and lets you go back to an earlier one.

#### Question in the draw: l24-k-corp

A chat, with its history: "Nia, Legal", Chat with the help desk.

> (Nia, Legal, at the left) I tried to install a game from the App Store on my company Mac with my personal Apple ID. A message says the company does not allow this. The Mac works normally.

**What is going on?**
(the options come in an order that depends on the seed of the question)
- The company manages the Mac and limits what is installed and which Apple ID is used (right)
- The App Store is broken on this Mac, so reinstall macOS to fix it — if chosen: The message names a company rule, and the Mac works normally. Reinstalling would erase her files to fix something that is not broken.
- FileVault is switched on, so it blocks every new app from loading — if chosen: FileVault encrypts the drive. It does not decide which apps may be installed.
- The Mac is out of date, so run the updates and try the game again — if chosen: An old macOS does not produce a message about company rules.

After the answer: the deciding words are marked. Reason: The message names a company rule. A company can manage its Macs, limiting what is installed and which Apple ID is used, so it is not a fault to repair.

#### Question in the draw: l24-r-printer

A chat, with its history: "Fay, Reception", Chat with the help desk.

> (Fay, Reception, at the left) I need to add the new office printer to my Mac. On Windows I would open Settings and look for Printers & scanners.

**Where is the Mac’s own place for printers and scanners?**
(the options come in an order that depends on the seed of the question)
- System Settings, in the area named Printers & Scanners (right)
- Disk Utility, in the list of connected drives — if chosen: Disk Utility lists drives.
- The Dock, in the shortcut for devices — if chosen: The Dock holds app shortcuts, not device setup.
- Keychain, in the list of saved passwords — if chosen: Keychain holds passwords.

After the answer: the deciding words are marked. Reason: System Settings holds the Mac’s areas: Displays, Network, Printers & Scanners, Privacy & Security, Accessibility and Time Machine.

#### Question in the draw: l24-r-priv

A chat, with its history: "Zed, Training", Chat with the help desk.

> (Zed, Training, at the left) A video-call app on my Mac cannot see my camera. The camera works in other apps. The app was installed this morning.

**Which System Settings area controls which apps may use the camera?**
(the options come in an order that depends on the seed of the question)
- Privacy & Security, where each app is allowed or not (right)
- Displays, where the screen sizes and brightness are chosen — if chosen: Displays controls the screen. The camera permission is in Privacy & Security.
- Network, where the Wi-Fi and wired connections are chosen — if chosen: Network controls connections.
- Accessibility, where help for seeing and hearing is chosen — if chosen: Accessibility turns on aids such as larger text. The permission is in Privacy & Security.

After the answer: the deciding words are marked. Reason: A new app is not allowed to use the camera until it is permitted in Privacy & Security.

#### Question in the draw: l24-r-av

A chat, with its history: "Ida, Support", Chat with the help desk.

> (Ida, Support, at the left) A manager says: “Macs do not get malware, so skip antivirus and the updates.”

**What is the best practice the exam teaches?**
(the options come in an order that depends on the seed of the question)
- Keep a backup, run antivirus and install updates and patches (right)
- Macs cannot be infected, so no care beyond the backups is needed — if chosen: Macs get malware too, and updates close the holes that malware uses.
- Only turn on FileVault, which does all the other jobs as well — if chosen: FileVault encrypts the drive. It does not scan for malware or install updates.
- Reinstall macOS every month so nothing can last long on the Mac — if chosen: Reinstalling is a drastic step for a fault and no part of regular care.

After the answer: the deciding words are marked. Reason: Mac care is the same list as any computer: back up, run antivirus, install updates and patches.

#### Question in the draw: l24-p-ls

A chat, with its history: "Dan, Server team", Chat with the help desk.

> (Dan, Server team, at the left) I have a terminal open on a Linux machine. I want to see which files are in the folder I am in. In Windows I would type dir.

**Which Linux command does that?**
(the options come in an order that depends on the seed of the question)
- ls, which lists the files and folders in the folder you are in (right)
- pwd, which shows the path of the folder you are standing in — if chosen: pwd prints the name of the folder you are in, not what is inside it.
- cat, which prints the text that is inside one file you name — if chosen: cat shows the contents of one file. It does not list a folder.
- cp, which copies a file or folder from one place to another — if chosen: cp copies. It does not show anything.

After the answer: the deciding words are marked. Reason: dir lists a folder in Windows; ls lists a folder on Linux. pwd names the folder you are in, cat prints one file.

#### Question in the draw: l24-g-fstab

A chat, with its history: "Eli, Engineering", Chat with the help desk.

> (Eli, Engineering, at the left) The second drive on my Linux workstation is missing after every restart, and I have to mount it by hand each morning. I want Linux to attach it by itself at start-up.

**Which file lists the drives to attach at start-up?**
(the options come in an order that depends on the seed of the question)
- /etc/fstab (right)
- /etc/passwd — if chosen: /etc/passwd lists the accounts on the machine. It has nothing about drives.
- /etc/hosts — if chosen: /etc/hosts lists names and addresses that the computer checks before it queries DNS.
- /etc/resolv.conf — if chosen: /etc/resolv.conf lists the name servers the computer uses. It has nothing about drives.

After the answer: the deciding words are marked. Reason: /etc/fstab names the drives mounted at start-up. mount attaches one by hand; fstab does it every time the machine starts.

#### Question in the draw: l24-g-hosts

The question, read aloud as above: **Linux keeps a short list of names and addresses that the computer reads before it queries DNS.**

**Type the name of the file.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - (etc) hosts

After the answer: Reason: It is /etc/hosts, the same job as the hosts file in Windows. /etc/resolv.conf is the other name file: it lists the name servers the computer uses.

#### Question in the draw: l24-k-chmod

A chat, with its history: "Gus, Operations", Chat with the help desk.

> (Gus, Operations, at the left) I own the file backup.sh on a Linux machine, but when I type ./backup.sh it says “Permission denied”. The file is not marked as allowed to run.

**Which command changes who may read, write or run a file?**
(the options come in an order that depends on the seed of the question)
- chmod, which changes the permissions of a file (right)
- chown, which changes the person who owns a file — if chosen: chown changes the owner. Gus already owns the file; the permissions are what is wrong.
- mv, which moves a file or gives it a new name — if chosen: mv moves or renames the file. It does not change its permissions.
- grep, which searches the text inside files for a word — if chosen: grep searches inside files. It changes nothing.

After the answer: the deciding words are marked. Reason: chmod changes what a file allows (read, write, run); chown changes who owns it. The file is already his, so chmod is the fix.

#### Question in the draw: l24-k-shadow

The question, read aloud as above: **Linux keeps the scrambled passwords of its accounts in a file in /etc that only root can read. The list of the accounts themselves is /etc/passwd.**

**Type the name of the file.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - (etc) shadow

After the answer: Reason: /etc/shadow holds the scrambled passwords and only root reads it. /etc/passwd lists the accounts themselves, without their passwords.

#### Question in the draw: l24-r-grep

A chat, with its history: "Hana, Support", Chat with the help desk.

> (Hana, Support, at the left) I need every line that says “timeout” in a log file on a Linux server. In Windows I would use findstr.

**Which Linux command searches inside files for text?**
(the options come in an order that depends on the seed of the question)
- grep, which prints the lines that hold the words you give it (right)
- find, which looks for files by their name, size or date — if chosen: find looks for files, not for words inside them.
- cat, which prints a whole file from start to end — if chosen: cat prints every line of the file, with no search.
- ls, which lists the names of the files in a folder — if chosen: ls lists names only.

After the answer: the deciding words are marked. Reason: grep searches the text inside files (findstr); find searches for files themselves (dir /s).

#### Question in the draw: l24-r-find

A chat, with its history: "Ike, Support", Chat with the help desk.

> (Ike, Support, at the left) A user saved a report somewhere on a Linux machine. All I know is that it is called budget.ods. In Windows I would search with dir /s.

**Which command looks for a file by its name?**
(the options come in an order that depends on the seed of the question)
- find, which walks through the folders and reports matching names (right)
- grep, which looks for words inside the files themselves — if chosen: grep searches inside files for text, not for a file by its name.
- mv, which moves a file from one place to another — if chosen: mv moves a file you already found.
- pwd, which shows the folder you are standing in — if chosen: pwd shows where you are, not where a file is.

After the answer: the deciding words are marked. Reason: find finds files; grep finds text inside files.

#### Question in the draw: l24-r-chown

A chat, with its history: "Lou, Operations", Chat with the help desk.

> (Lou, Operations, at the left) The files in a shared folder belong to a person who left. The manager has approved giving them to the new owner, who needs to own them. Nothing is wrong with who can read or write them.

**Which command gives the files to another owner?**
(the options come in an order that depends on the seed of the question)
- chown, which changes who owns a file (right)
- chmod, which changes who may read, write or run a file — if chosen: chmod changes the permissions. The owner is what needs changing.
- cp, which copies the files into the new owner’s folder — if chosen: A copy would leave the old files behind.
- rm, which removes the files so they can be made again — if chosen: rm removes files, and Linux has no Recycle Bin to get them back from.

After the answer: the deciding words are marked. Reason: chown changes the owner. chmod changes what the owner, the group and everyone else may do.

#### Question in the draw: l24-r-fsck

A chat, with its history: "Mel, Support", Chat with the help desk.

> (Mel, Support, at the left) A Linux server stopped badly in a power cut and now complains about its file system. Its data is backed up and the drive is not mounted. Windows would use chkdsk to check and repair a drive.

**Which command checks and repairs a file system on Linux?**
(the options come in an order that depends on the seed of the question)
- fsck, which checks a file system and repairs errors (right)
- mount, which attaches a drive’s file system to a folder — if chosen: mount makes a drive usable at a folder. It does not repair it.
- df, which shows the free space of each drive — if chosen: df shows space, not errors.
- ps, which lists the programs running now — if chosen: ps lists programs.

After the answer: the deciding words are marked. Reason: fsck checks and repairs a file system; mount attaches one to a folder.

#### Question in the draw: l24-q-sudo

A chat, with its history: "Ben, Support", Chat with the help desk.

> (Ben, Support, at the left) On my Ubuntu laptop I typed apt install htop and it answered “Permission denied”. I was told never to stay logged in as root.

**What is the right way to run that one command?**
(the options come in an order that depends on the seed of the question)
- Put sudo in front of the command and give your own password (right)
- Log out and sign in as root, then stay in that account from now on — if chosen: Root can change or delete anything. Staying in it makes every typing mistake a disaster. sudo gives root’s rights for one command only.
- Run the command again from another folder, in case this one is locked — if chosen: The folder is not the problem. The command only needed root’s rights.
- Look for a downloadable installer to run, as you would on Windows — if chosen: Ubuntu installs programs with apt, and apt needs root’s rights, which sudo provides.

After the answer: the deciding words are marked. Reason: Installing programs changes the whole system, so it needs root’s rights. sudo gives them for one command: the counterpart of Run as administrator.

#### Question in the draw: l24-g-apt

A chat, with its history: "Wen, Design", Chat with the help desk.

> (Wen, Design, at the left) My new Ubuntu desktop needs the Vim text editor installed from the command line. A friend on Fedora says to use dnf.

**Which do I use on Ubuntu?**
(the options come in an order that depends on the seed of the question)
- apt, because Ubuntu takes its programs through apt (right)
- dnf, because it is the one tool every Linux uses — if chosen: dnf belongs to Fedora and Red Hat. Ubuntu uses apt.
- mount, to attach the editor to the desktop — if chosen: mount attaches a drive to a folder. It installs nothing.
- A .dmg from the vendor’s site, opened by double-clicking — if chosen: A .dmg is a Mac file. Linux installs through apt or dnf.

After the answer: the deciding words are marked. Reason: Both apt and dnf install programs from a list kept by the distribution, the version of Linux in use. Ubuntu uses apt; Fedora uses dnf.

#### Question in the draw: l24-k-boot

A chat, with its history: "Kai, Service desk", Chat with the help desk.

> (Kai, Service desk, at the left) A Linux machine passes its start-up test and the firmware finds the boot drive, but nothing loads after that. I need to know which part comes next.

**Which part runs next and loads the kernel?**
(the options come in an order that depends on the seed of the question)
- The bootloader, the first program that starts from the boot drive (right)
- systemd, the program that starts the services — if chosen: systemd starts the services after the kernel is running, so it comes later.
- sudo, the command that grants root’s rights — if chosen: sudo is a command typed after sign-in. It has no part in starting the machine.
- fsck, the check that repairs the file system — if chosen: fsck checks a file system. It is not a stage of start-up.

After the answer: the deciding words are marked. Reason: The chain on Linux: firmware, the boot drive, the bootloader, the kernel, systemd (which starts the services), then sign-in. The bootloader loads the kernel.

#### Question in the draw: l24-r-passwd

A chat, with its history: "Ned, Service desk", Chat with the help desk.

> (Ned, Service desk, at the left) I want to see which user accounts exist on a Linux machine. I do not need passwords.

**Which file lists the accounts?**
(the options come in an order that depends on the seed of the question)
- /etc/passwd (right)
- /etc/shadow — if chosen: /etc/shadow holds the scrambled passwords, readable by root only.
- /etc/fstab — if chosen: /etc/fstab lists the drives to mount at start-up.
- /etc/hosts — if chosen: /etc/hosts lists names and addresses.

After the answer: the deciding words are marked. Reason: /etc/passwd lists the accounts; /etc/shadow keeps their scrambled passwords.

#### Question in the draw: l24-r-dnf

A chat, with its history: "Una, Support", Chat with the help desk.

> (Una, Support, at the left) A new Fedora workstation needs the nano editor, and nothing is installed on it yet.

**Which command installs programs from the distribution’s list on Fedora?**
(the options come in an order that depends on the seed of the question)
- dnf, the package manager for Fedora and Red Hat (right)
- apt, the package manager for Ubuntu and Debian — if chosen: apt is for Ubuntu and Debian. Fedora uses dnf.
- curl, which fetches a web address from the terminal — if chosen: curl downloads a page. It does not manage programs.
- su, which switches to another account — if chosen: su changes accounts.

After the answer: the deciding words are marked. Reason: dnf for Fedora and Red Hat, apt for Ubuntu and Debian.

#### Question in the draw: l24-r-systemd

A chat, with its history: "Vic, Service desk", Chat with the help desk.

> (Vic, Service desk, at the left) After the kernel is running, something starts the web server, the printing service and the rest, and restarts them if they stop. Windows has Services for this.

**Which part starts and manages the services on Linux?**
(the options come in an order that depends on the seed of the question)
- systemd, which starts the services after the kernel runs (right)
- The bootloader, which loads the kernel from the boot drive — if chosen: The bootloader comes before the kernel.
- fsck, which checks the file systems for errors — if chosen: fsck checks drives.
- root, the account that can change anything on the machine — if chosen: root is an account, not a part of start-up.

After the answer: the deciding words are marked. Reason: Order of start: firmware, the boot drive, bootloader, kernel, systemd, sign-in. root is the all-powerful account.

#### Question in the draw: l24-r-su

A chat, with its history: "Wes, Operations", Chat with the help desk.

> (Wes, Operations, at the left) I have to do several admin jobs in a row on a Linux machine and I know the root password. I do not want to type sudo before every line.

**Which command switches to another account such as root?**
(the options come in an order that depends on the seed of the question)
- su, which switches to the account you name, root if none is named (right)
- sudo, which runs one command with root’s rights — if chosen: sudo is for one command at a time. su changes the account for the whole session.
- chown, which changes who owns a file — if chosen: chown changes file owners.
- mount, which attaches a drive to a folder — if chosen: mount attaches drives.

After the answer: the deciding words are marked. Reason: su switches account; sudo runs one command with root’s rights. Root can change anything, so leave it when the job ends.

#### Question in the draw: l24-w-dns

A chat, with its history: "Tomas, Engineering", Chat with the help desk.

> (Tomas, Engineering, at the left) My Linux workstation will not open intranet.example.com. Typing the number 10.0.4.20 into the browser opens the same page. Everyone else on my row is fine.

A plain table, "What Tomas typed at the terminal, and what came back":

> Command  |  What it printed  (the column heads)
> ping -c 2 10.0.4.20  |  2 packets transmitted, 2 received, 0% packet loss
> dig intranet.example.com  |  connection timed out; no servers could be reached
> cat /etc/resolv.conf  |  nameserver 10.0.4.9

A plain table, "From the desk’s network notes":

> Note  (the column heads)
> The company’s name servers are 10.0.4.2 and 10.0.4.3. The old one, 10.0.4.9, was switched off last week.

**Typing the number opens the page. What does that show?**
(the options come in an order that depends on the seed of the question)
- The link and the address work, so only the name lookup is failing. (right)
- The network is down for his machine, so check the cable first. — if chosen: A page that opens by number has already crossed the cable and the gateway. The cable test would only repeat that.
- The intranet server is broken, so wait for it to be fixed. — if chosen: The server answered when Tomas typed its number, and the rest of the row can reach it.
- The browser is damaged, so remove it and install it again. — if chosen: The browser opened the page by number. A damaged browser would fail that too.

After the answer: the deciding words are marked. Reason: The ping by number worked, so the link, the address and the gateway are fine. dig failed and /etc/resolv.conf lists a name server that was switched off, so the name lookup is the broken link.
The working:
- Write down every cause that fits “this page will not open”.: The cable or Wi-Fi; no address; the gateway; the name lookup; the intranet server; the browser.
- Name your favorite cause and test it with the cheapest check.: The network is down. Ping the number (-c 2 sends two test messages and stops): two replies, no loss. The cable, the address and the gateway are fine.
- Test the next link: the name lookup.: dig is the Linux nslookup. It looks up the name and gets no answer: no server could be reached. The computer queries a server that is not answering.
- Find which server the computer uses.: cat prints a file, as type does in Windows. /etc/resolv.conf lists the name servers. It lists 10.0.4.9, the one switched off last week.
- Change one thing, then check it.: Point the computer at 10.0.4.2 (through the network settings that write the file), run dig again, and have Tomas open the page. The first guess cost one ping; the answer was one line in one file.

#### Question in the draw: l24-p-top

A chat, with its history: "Ana, Build team", Chat with the help desk.

> (Ana, Build team, at the left) Our Linux build machine feels slow. On Windows I would open Task Manager and sort by CPU. What do I type in the terminal to watch the busiest programs live?

**Which command?**
(the options come in an order that depends on the seed of the question)
- top, a list of running programs that updates as they use more or less (right)
- ps, a list of the running programs as they were at one moment — if chosen: ps lists the programs once and stops. It does not update, so you cannot watch it.
- df, a list of how much free space each drive has right now — if chosen: df is about disk space, not about running programs.
- du, a list of how much room each folder takes up on a drive — if chosen: du measures folders. It does not show running programs.

After the answer: the deciding words are marked. Reason: A live list of busy programs is top, the Linux counterpart of Task Manager. ps lists them once; df and du are about disk space.

#### Question in the draw: l24-q-df

A chat, with its history: "Mia, Office manager", Chat with the help desk.

> (Mia, Office manager, at the left) The Linux file server says “No space left on device” when I save. I want to see how full each drive is.

**Which command shows the free space on each drive?**
(the options come in an order that depends on the seed of the question)
- df, which prints the size, the used space and the free space of each drive (right)
- du, which adds up how much room one folder and what is in it take up — if chosen: du measures a folder. It is the next step once df shows a full drive, to find what is big.
- top, which lists the running programs and how busy each one is — if chosen: top is about running programs, not about space.
- ps, which lists the programs that are running at this moment — if chosen: ps lists programs, not drives.

After the answer: the deciding words are marked. Reason: df shows how full each drive is, like the drive bars in Windows. du then finds which folder takes the room.

#### Question in the draw: l24-q-dig

A chat, with its history: "Hal, Web team", Chat with the help desk.

> (Hal, Web team, at the left) Our site’s name stopped working this morning. On a Linux machine I want to ask DNS for the address behind www.example.com and see the answer, as nslookup does in Windows.

**Which command looks up the address of a name in DNS?**
(the options come in an order that depends on the seed of the question)
- dig, which queries a name server and prints what it answers (right)
- traceroute, which lists each stop on the way to a computer — if chosen: traceroute shows the path to a computer. It does not look up a name in DNS.
- ip, which shows this machine’s own connections and addresses — if chosen: ip shows this machine’s addresses, not what DNS answers for a name.
- curl, which fetches a web page and prints what it holds — if chosen: curl fetches a page. It would fail without the lookup it needs, and shows nothing about it.

After the answer: the deciding words are marked. Reason: Asking DNS for a name’s address is dig, the counterpart of nslookup.

#### Question in the draw: l24-k-trace

The question, read aloud as above: **In Windows, tracert shows each stop on the way to another computer. What is the Linux command that does the same job?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - traceroute

After the answer: Reason: traceroute is the Linux tracert: it lists each stop on the path to a destination.

#### Question in the draw: l24-r-ip

A chat, with its history: "Xia, Support", Chat with the help desk.

> (Xia, Support, at the left) On a Linux machine I want to see its IP address. In Windows I would type ipconfig.

**Which Linux command shows the machine’s addresses?**
(the options come in an order that depends on the seed of the question)
- ip, as in ip addr, which lists each connection and its address (right)
- dig, which looks up the address of a name — if chosen: dig looks up a name in DNS, like nslookup. It does not show this machine’s own address.
- ping, which sends a test message to another computer — if chosen: ping tests whether another computer answers.
- df, which shows the free space of each drive — if chosen: df is about drives.

After the answer: the deciding words are marked. Reason: ip is ipconfig; ping is ping; dig is nslookup; traceroute is tracert.

#### Question in the draw: l24-r-curl

A chat, with its history: "Yan, Support", Chat with the help desk.

> (Yan, Support, at the left) From a terminal with no browser, I want to fetch a web page and see what the server sends back, to check that the web service answers.

**Which command fetches a web address from the terminal?**
(the options come in an order that depends on the seed of the question)
- curl, which fetches a web address and prints the reply (right)
- cat, which prints the text inside a file — if chosen: cat reads a local file.
- traceroute, which lists each stop on the way to a computer — if chosen: traceroute shows the path, not the page.
- man, which opens the manual for a command — if chosen: man explains commands.

After the answer: the deciding words are marked. Reason: curl fetches a web address; man shows the manual page of a command.

#### Question in the draw: l24-r-ps

A chat, with its history: "Zoe, Support", Chat with the help desk.

> (Zoe, Support, at the left) I want a one-time list of the programs running on a Linux machine, and the number of each, so I can pick one to stop. Windows has tasklist.

**Which command prints that list once?**
(the options come in an order that depends on the seed of the question)
- ps, which lists the programs running at that moment (right)
- top, which keeps a live list that updates by itself — if chosen: top is live; it is the Task Manager counterpart.
- du, which adds up the room folders take — if chosen: du measures folders.
- nano, which edits a text file in the terminal — if chosen: nano edits text.

After the answer: the deciding words are marked. Reason: ps lists once; top watches live.

#### Question in the draw: l24-r-man

A chat, with its history: "Abe, Trainee", Chat with the help desk.

> (Abe, Trainee, at the left) I forgot what the options of the du command do. There is no internet on this machine.

**Which command shows the manual page of another command?**
(the options come in an order that depends on the seed of the question)
- man, as in man du, which shows how the command is used (right)
- cat, which prints a file you name — if chosen: cat prints a file; the manual is not one you can name.
- nano, which edits a text file — if chosen: nano edits files.
- grep, which searches for words inside files — if chosen: grep searches files.

After the answer: the deciding words are marked. Reason: man shows help for a command; nano is the simple text editor.

#### Question in the draw: l22-p-domain

A chat, with its history: "Maya, Sales", Chat with the help desk.

> (Maya, Sales, at the left) I just got a new laptop with Windows 11 Home. IT says I must join the company domain to reach the shared drives, but I find no way to join one in Settings.

**What does her laptop need?**
(the options come in an order that depends on the seed of the question)
- The Pro edition, the lowest one that can join a domain, upgraded in place with her files kept (right)
- A setting changed in Home. Domain join is hidden until Remote Desktop is turned on in the System page of Settings and the laptop restarted — if chosen: No setting adds domain join to Home. The edition decides it.
- The N version of Home. N is the edition that is made for company networks — if chosen: N means the media features are left out, as in Europe. It has nothing to do with domains.
- A clean install of Home, since the first install must have been faulty — if chosen: A clean install of Home gives the same edition and erases her files. Home has no domain join however it is installed.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and join the company domain. Home has no domain join; Pro and above do. An upgrade from Home to Pro keeps files.

#### Question in the draw: l22-s-rdp

A chat, with its history: "Omar, Consultant", Chat with the help desk.

> (Omar, Consultant, at the left) I want to connect from my office computer to my Windows 11 Home laptop at home using Remote Desktop. The laptop is on, both computers are on the company VPN, and the laptop answers a ping, but the connection is refused.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- Windows Home can connect out with Remote Desktop but cannot be the computer that is connected to; that needs Pro or above (right)
- The laptop’s memory is too small, because Home allows only 4 GB for hosting — if chosen: Home’s limit is 128 GB, and memory is not what blocks hosting.
- The N version of Windows must be installed first, because N adds the remote connections that Home leaves out of the laptop — if chosen: N only leaves out media features. It does not add remote connections.
- The home router is the cause, so you swap it — if chosen: Both computers reach each other over the VPN and the laptop answers a ping, so the network path works. Home cannot host, whatever the router does.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and connected to. Home can start a Remote Desktop session but cannot host one.

#### Question in the draw: l22-g-ram

A chat, with its history: "Vic, Studio", Chat with the help desk.

> (Vic, Studio, at the left) Our old Windows 11 Home workstation has 192 GB of memory fitted, and Windows reports 192 GB installed but only 128 GB usable. The memory tests clean.

**Why is that?**
(the options come in an order that depends on the seed of the question)
- Windows 11 Home is limited to 128 GB of memory, so Pro or above is needed to use more (right)
- It is a 32-bit Windows, which is limited to 4 GB — if chosen: He sees 128 GB, far above any 32-bit limit. The figure of 128 GB is the Home edition’s.
- Windows holds the other 64 GB back for its start-up files and the pages it swaps to the drive — if chosen: Windows does not hold memory back like that. The 128 GB figure is the Home edition’s limit.
- Two of the sticks are bad, so they are swapped one at a time — if chosen: The memory tests clean, and a bad pair would not land on exactly 128 GB.

After the answer: the deciding words are marked. Reason: The deciding words are Windows 11 Home and 192 GB installed with 128 GB usable. The memory limit belongs to the edition.

#### Question in the draw: l22-g-bitlocker

A chat, with its history: "Tess, Legal", Chat with the help desk.

> (Tess, Legal, at the left) The firm now requires BitLocker on every laptop. Mine is the only one on Windows 11 Home, and the encryption page offers me nothing but device encryption (a simpler lock that some Home laptops have).

**What does her laptop need?**
(the options come in an order that depends on the seed of the question)
- An upgrade to Pro, the lowest of the editions that has BitLocker (right)
- Device encryption left on, since it is the same lock under another name — if chosen: Device encryption is a simpler lock. The firm requires BitLocker, which Home does not have.
- A different file system, since BitLocker works on exFAT only — if chosen: BitLocker encrypts an NTFS drive in Windows. The file system is not the missing piece.
- The N version of Home, which adds the security tools — if chosen: N leaves out media features. It adds no security tools.

After the answer: the deciding words are marked. Reason: The deciding words are BitLocker and Windows 11 Home. The edition has to be raised to Pro.

#### Question in the draw: l22-k-path

A chat, with its history: "Dora, Sales", Chat with the help desk.

> (Dora, Sales, at the left) My Windows 11 Home laptop needs BitLocker for a customer contract. Our IT person says to wipe it and put Windows on again from scratch.

**What is the better way?**
(the options come in an order that depends on the seed of the question)
- Upgrade the edition in place to Pro, which keeps her files, apps and settings and adds BitLocker (right)
- Wipe it, as the technician said, since an edition can only be changed by a clean install, which also gives her a clean Windows 11 to start from — if chosen: Home to Pro is changed in place. Going down from Pro to Home is the one that needs a clean install.
- Turn BitLocker on in Home, in the same Settings page as device encryption — if chosen: Home has no BitLocker. Pro and above have it.
- Install the N version, which adds the security features that Home lacks — if chosen: N leaves out media features. It does not add security features.

After the answer: the deciding words are marked. Reason: BitLocker is a Pro feature, so the edition must rise to Pro. Home to Pro is an in-place upgrade and keeps everything.

#### Question in the draw: l22-k-n

A chat, with its history: "Fred, Marketing", Chat with the help desk.

> (Fred, Marketing, at the left) My new laptop says Windows 11 Pro N. I cannot play the training videos, and the Camera and Media Player apps are missing.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- N versions leave out the media features; the Media Feature Pack adds them back (right)
- The laptop is faulty, so it goes back for replacement — if chosen: Nothing is broken. The edition was sold without those features.
- Pro N is a smaller edition, so it needs more memory to play video — if chosen: N is not about memory. It is about which media features come with Windows.
- The videos use the wrong file system, so they need to be copied to exFAT — if chosen: Media features are missing from Windows itself. A file system does not decide whether a video plays.

After the answer: the deciding words are marked. Reason: The deciding words are Pro N and media apps are missing. N versions come without media features, and the pack adds them back.

#### Question in the draw: l22-r-gpedit

A chat, with its history: "Wes, Operations", Chat with the help desk.

> (Wes, Operations, at the left) I was told to open gpedit.msc on my Windows 11 Home laptop to change a policy. The program is not found.

**Why not?**
(the options come in an order that depends on the seed of the question)
- The Local Group Policy Editor is in Pro and above, not in Home (right)
- It needs a restart first, since the program loads at start-up — if chosen: A restart does not add a program that the edition leaves out.
- It is hidden on laptops, so it must be run from a desktop — if chosen: The edition decides it, not the shape of the computer.
- It is part of the N version only — if chosen: N leaves out media features and has nothing to do with policy.

After the answer: the deciding words are marked. Reason: The deciding words are gpedit.msc and Windows 11 Home. The Local Group Policy Editor comes with Pro and above.

#### Question in the draw: l22-r-pro-ram

The question, read aloud as above: **What is the most memory Windows 11 Pro can use? Type the amount with its unit.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 2 TB
  - 2TB
  - 2 terabytes

After the answer: Reason: Home reaches 128 GB, Pro 2 TB, and Pro for Workstations and Enterprise 6 TB.

#### Question in the draw: l22-r-down

A chat, with its history: "Zoe, Studio", Chat with the help desk.

> (Zoe, Studio, at the left) Our laptop has Windows 11 Pro, but this user only needs Home. Can we step it down to Home and keep her files?

**What is the answer?**
(the options come in an order that depends on the seed of the question)
- No. Going down to Home needs a clean install, so her files come back from a backup (right)
- Yes, by entering a Home license in place, the same way an upgrade works — if chosen: The in-place way goes up in edition, not down.
- Yes, by removing the Pro features in Settings, one at a time — if chosen: Features cannot be removed one at a time. The edition is one thing.
- Yes, by installing the N version over it, which counts as a step down — if chosen: N is a media change, not a lower edition.

After the answer: the deciding words are marked. Reason: The deciding words are step it down to Home and keep her files. Only a clean install lowers the edition, so the files must be backed up.

#### Question in the draw: l22-p-usb

A chat, with its history: "Gina, Marketing", Chat with the help desk.

> (Gina, Marketing, at the left) I need one USB drive that my Windows PC and my coworker’s Mac can both read and write. I will put 6 GB video files on it.

**Which file system do you format it with?**
(the options come in an order that depends on the seed of the question)
- exFAT (right)
- FAT32 — if chosen: FAT32 works on both, but one file must stay under 4 GB. The 6 GB videos will not fit.
- NTFS — if chosen: A Mac reads an NTFS drive but, without extra software, cannot write to it.
- APFS — if chosen: APFS is Apple’s own. Windows cannot read it without extra software.

After the answer: the deciding words are marked. Reason: The deciding words are Windows PC and Mac, both read and write, and 6 GB files. Only exFAT is read and written by both and holds a file over 4 GB.

#### Question in the draw: l22-s-fat

A chat, with its history: "Ben, Events", Chat with the help desk.

> (Ben, Events, at the left) My camera supports exFAT. Its memory card is FAT32, and a 5 GB video from my PC will not copy onto it. I want the video as one file. The card holds today’s photos, not yet backed up.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Copy the photos off first, then format the card as exFAT (right)
- Format the card as exFAT now, since the photos are also on the camera — if chosen: The ticket does not say the photos are anywhere else. Formatting erases the card.
- Format the card as NTFS, since it is the Windows file system — if chosen: The ticket says his camera reads exFAT, which is the one made for cards and flash drives. A camera may not read NTFS.
- Keep FAT32 and split the video into pieces under 4 GB — if chosen: That works around the limit, but the limit stays and he wants one file.

After the answer: the deciding words are marked. Reason: The deciding words are FAT32, a 5 GB video as one file, and photos not yet backed up. exFAT lifts the 4 GB limit, and the photos are copied off before the format erases the card.

#### Question in the draw: l22-g-ext4

The question, read aloud as above: **Which file system is the usual default on Ubuntu and Debian Linux? Type its name.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - ext4

After the answer: Reason: ext4 is the usual default on Ubuntu and Debian. It keeps a log of changes (journaling) so a crash does not leave the drive in a mess, and it has file permissions. XFS is the Linux choice for very large files and volumes on servers.

#### Question in the draw: l22-k-fat4

The question, read aloud as above: **A single file of what size or larger will not fit on a FAT32 drive? Type the size with its unit.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 4 GB
  - 4GB
  - 4 gigabytes

After the answer: Reason: FAT32 stops a single file at 4 GB, so a bigger file needs exFAT or NTFS.

#### Question in the draw: l22-k-apfs

A chat, with its history: "Isla, Design", Chat with the help desk.

> (Isla, Design, at the left) My external drive came from my old Mac, where Disk Utility called it APFS. On my work PC, Windows says the drive needs formatting. My photos are on it, with no other copy.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Do not format it. Windows cannot read APFS; read it on a Mac, or add software that reads it (right)
- Click Format, since Windows always offers that to fix an unreadable drive — if chosen: Formatting erases everything on the drive, and the photos have no other copy.
- Format it as NTFS so that Windows can use it, and then copy the photos back from the old Mac when it is free — if chosen: The format erases the photos first, so there is nothing left to restore.
- Run chkdsk until the drive is repaired, since the drive is damaged — if chosen: The drive is fine. Windows simply does not know the file system.

After the answer: the deciding words are marked. Reason: The deciding words are came from my old Mac and Windows says the drive needs formatting. Windows cannot read APFS, and formatting would erase the photos.

#### Question in the draw: l22-r-ntfs

A chat, with its history: "Lou, Design", Chat with the help desk.

> (Lou, Design, at the left) My Mac can open the files on my NTFS drive, but it will not let me save a file there.

**Why?**
(the options come in an order that depends on the seed of the question)
- A Mac reads NTFS but, without extra software, cannot write to it (right)
- The drive is full, so nothing more can be saved — if chosen: A full drive would show a different message. The Mac can read it, which is the sign.
- NTFS is read-only for any file made on a Windows PC — if chosen: NTFS is read and write on Windows.
- The Mac has used up its memory, so it cannot save to outside drives — if chosen: The limit is in the file system, not the memory.

After the answer: the deciding words are marked. Reason: The deciding words are Mac can open the files and will not let me save. NTFS is read-only on a Mac without extra software.

#### Question in the draw: l22-r-refs

A chat, with its history: "Ria, Server team", Chat with the help desk.

> (Ria, Server team, at the left) We are building a Windows Server storage pool for very large data that must resist corruption and repair itself.

**Which file system is built for that?**
(the options come in an order that depends on the seed of the question)
- ReFS, the Resilient File System (right)
- FAT32, for the most computers — if chosen: FAT32 has no repair and a 4 GB file limit.
- exFAT, since it holds very large files — if chosen: exFAT is for flash drives and cards. It does not repair itself.
- APFS, the newest of these — if chosen: APFS is Apple’s own and is not a Windows Server choice.

After the answer: the deciding words are marked. Reason: The deciding words are Windows Server, very large data and resist corruption. That is ReFS.

#### Question in the draw: l22-r-xfs

The question, read aloud as above: **Name the Linux file system made for very large files and volumes on servers. Type its name.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - XFS

After the answer: Reason: XFS is a Linux file system for very large files and volumes. ext4 is the usual default for a Linux computer.

#### Question in the draw: l22-w-eleven

A chat, with its history: "Dev, Finance", Chat with the help desk.

> (Dev, Finance, at the left) My laptop is four years old and runs fine. Can it take Windows 11? It has 8 GB of memory and plenty of disk, so I think yes.

A plain table, "System information on Dev’s laptop (msinfo32)":

> Field  |  Value  (the column heads)
> OS Name  |  Windows 10 Pro, 64-bit
> Processor  |  Intel Core i5-8250U, 4 cores, 1.60 GHz (on Microsoft’s supported list)
> Installed memory (RAM)  |  8.00 GB
> BIOS Mode  |  Legacy
> Secure Boot State  |  Unsupported

A plain table, "Your notes from the desk":

> Check  |  Result  (the column heads)
> Disk Management  |  The 256 GB system disk is MBR, with 150 GB free
> Firmware screen  |  A start-up mode choice of Legacy or UEFI, and a Secure Boot setting that is off
> tpm.msc  |  A TPM, specification version 2.0

**Memory, disk and processor all meet Windows 11. What does the BIOS Mode line show?**
(the options come in an order that depends on the seed of the question)
- The laptop starts in Legacy mode from an MBR disk. Windows 11 needs UEFI firmware that is Secure Boot capable, so the start-up mode must change first. (right)
- Legacy mode is only a label. Windows 11 will install on it once the TPM is turned off, because the TPM is what blocks setup on older laptops. — if chosen: The TPM is not in the way, and Windows 11 needs it on. The start-up mode is what fails the list.
- The processor is too old, because only newer chips can run Windows 11. — if chosen: An Intel Core i5 of the eighth generation is on the supported list. The line that fails is the start-up mode.
- Legacy mode can stay if the 8 GB of memory is raised to 16 GB. — if chosen: Memory is not the failing line: Windows 11 needs 4 GB. More memory does not change how the laptop starts.

After the answer: the deciding words are marked. Reason: Dev named memory and disk. Both pass, and the TPM does too. The failing line is BIOS Mode Legacy with an MBR disk, which also leaves Secure Boot unavailable. The disk was backed up, then converted to GPT, then the firmware was switched, one change at a time.
The working:
- List what Windows 11 needs, so no line is skipped.: A 64-bit processor on the supported list, 4 GB of memory, 64 GB of storage, UEFI firmware that is Secure Boot capable, TPM 2.0, and DirectX 12 graphics.
- Name the favorite answer and test it against the list.: Dev points at memory and disk. Both pass (8 GB and 150 GB free), and the processor is on the list. Those lines do not settle it.
- Read the lines still unchecked: firmware and TPM.: The TPM is 2.0, which passes. BIOS Mode is Legacy and the disk is MBR, so the start-up mode is the one failing line.
- Back up before changing how the disk starts.: Dev’s files are copied to the company storage first. Converting a disk changes its first sectors, and a backup is the way back.
- Change one thing at a time.: Windows includes a tool, mbr2gpt, that changes an MBR disk to GPT without erasing it. That is done first. Then the firmware is switched to UEFI and Secure Boot is turned on, which is good practice. The laptop is checked to start.
- Check again and write it up.: The PC Health Check app now says the laptop meets Windows 11. The note: Legacy mode and MBR disk blocked the upgrade; converted to GPT, switched to UEFI; files backed up first.

#### Question in the draw: l22-p-eleven

A chat, with its history: "Priya, Design", Chat with the help desk.

> (Priya, Design, at the left) The Windows 11 upgrade says my PC does not qualify. Everything else about it is new: 16 GB of memory, a 512 GB drive, a recent chip.

A plain table, "From msinfo32 and tpm.msc":

> Field  |  Value  (the column heads)
> BIOS Mode  |  UEFI
> Secure Boot State  |  On (so the firmware is capable)
> tpm.msc  |  Compatible TPM cannot be found

**What do you do about the failing line?**
(the options come in an order that depends on the seed of the question)
- Look in the firmware for a TPM setting that is turned off, and turn it on (right)
- Restart and run the PC Health Check app again, to see whether it changes its answer — if chosen: Nothing has changed, so it gives the same answer. The tpm.msc line already says what fails.
- Switch to Legacy mode so that the TPM check is skipped — if chosen: Legacy mode breaks the other requirement: Windows 11 needs UEFI, which Priya already has.
- Reinstall Windows 10 to see if the TPM comes back — if chosen: A reinstall erases her files and cannot create a TPM. The firmware is the place the TPM is turned on.

After the answer: the deciding words are marked. Reason: The deciding line is Compatible TPM cannot be found, with UEFI already in use and Secure Boot on. The TPM is the one requirement failing, and the firmware setting is the cheapest place to look.

#### Question in the draw: l22-s-backup

A chat, with its history: "Abe, Accounting", Chat with the help desk.

> (Abe, Accounting, at the left) My laptop passed the Windows 11 check and I want the upgrade tonight. It keeps my files, so I can skip the copying step, right?

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Back up his files and note his settings, then run the in-place upgrade (right)
- Run the in-place upgrade and copy files off only if it fails — if chosen: If the upgrade fails halfway, the files may not be reachable to copy. Back up first.
- Format the drive so the new version starts clean, then restore from the copy — if chosen: A format is a clean install, not the upgrade he asked for. His apps and settings would be gone.
- Check the apps and drivers work with Windows 11, and back up afterward — if chosen: The app check is right, but the copy comes before anything changes. Backing up afterward leaves the changes unprotected.

After the answer: the deciding words are marked. Reason: Before an upgrade the order is: back up files and preferences, then check that the apps, drivers and hardware work with the new version, then upgrade.

#### Question in the draw: l22-s-mbr

A chat, with its history: "Cal, Facilities", Chat with the help desk.

> (Cal, Facilities, at the left) I put a new 4 TB drive in the office PC. Disk Management shows only 2 TB, and the rest says Unallocated. Its properties give the partition style as MBR. The drive is not broken; it tests fine.

**Why is that?**
(the options come in an order that depends on the seed of the question)
- The drive uses MBR, which cannot address more than 2 TB; it needs GPT (a new empty drive can simply be made GPT) (right)
- NTFS cannot hold a drive larger than 2 TB, so it must be formatted again as ReFS, the file system made for the biggest drives — if chosen: NTFS handles volumes far larger than 2 TB. The partition style is the limit here.
- The drive needs to be formatted again as FAT32 to see all of it — if chosen: FAT32 is no better. It is the older format and has its own limits.
- Half the drive is bad, so it should be returned — if chosen: The drive tests fine. A 2 TB limit appearing on a 4 TB drive is the sign of MBR.

After the answer: the deciding words are marked. Reason: The deciding words are 4 TB, shows only 2 TB and partition style MBR. That 2 TB ceiling belongs to MBR; GPT lifts it.

#### Question in the draw: l22-s-image

A chat, with its history: "Hana, IT manager", Chat with the help desk.

> (Hana, IT manager, at the left) Fifty identical laptops arrive on Monday. Each needs the same Windows, the same twelve programs and the same settings. We would like it built once and copied.

**Which installation kind fits?**
(the options come in an order that depends on the seed of the question)
- Image deployment: build one reference computer, capture it as an image, and copy it to all fifty (right)
- Upgrade installation on each laptop, to keep what the maker installed — if chosen: An upgrade keeps old files, apps and settings. These laptops are new and need the company’s own programs and settings.
- Recovery partition on each laptop, which restores the maker’s copy — if chosen: The recovery partition restores how the laptop shipped, without the twelve programs or the company’s settings.
- A clean install of Windows on each, with the twelve programs added by hand, one laptop at a time through Monday and Tuesday — if chosen: It gives a clean start, but the work is done fifty times and small differences creep in.

After the answer: the deciding words are marked. Reason: The deciding words are fifty identical laptops and built once and copied. That is image deployment.

#### Question in the draw: l22-g-zero

A chat, with its history: "Ines, Operations", Chat with the help desk.

> (Ines, Operations, at the left) We hire forty remote staff. Nobody on the desk will touch their laptops. The laptops ship from the maker straight to their homes.

**Which installation kind fits?**
(the options come in an order that depends on the seed of the question)
- Zero-touch: the laptop configures itself from the company account when the user first signs in (right)
- Remote network installation from a server in the office, started on each laptop once it is plugged into the office network — if chosen: It runs over the office network, so the laptop would have to be there, or on a VPN, to start.
- Image deployment, carried out on each laptop before it ships — if chosen: An image copied by the desk means someone handles each laptop, which the ticket rules out.
- Repair installation on each, which fixes Windows after it arrives — if chosen: A repair fixes a damaged Windows. The new laptops are not damaged.

After the answer: the deciding words are marked. Reason: The deciding words are nobody on the desk will touch and ship straight to their homes. That is zero-touch.

#### Question in the draw: l22-g-multi

A chat, with its history: "Jon, Lab", Chat with the help desk.

> (Jon, Lab, at the left) The lab PC shows a menu at start-up with Windows 11 and Ubuntu, and the user picks one each time. Both live on the one computer.

**What is this arrangement called?**
(the options come in an order that depends on the seed of the question)
- Multiboot, two operating systems on one computer with a start-up menu (right)
- Image deployment, a copy of a system placed on one computer — if chosen: Image deployment copies one built system to many computers. It has no start-up menu.
- Zero-touch, where the company account chooses the system — if chosen: Zero-touch prepares a laptop on its first sign-in. It gives no menu.
- A repair installation, where the second system fixes the first — if chosen: A repair replaces Windows files. It does not add a second system.

After the answer: the deciding words are marked. Reason: The deciding words are a menu at start-up and both live on the one computer. That is multiboot.

#### Question in the draw: l22-k-tpm

The question, read aloud as above: **Windows 11 needs a TPM. Which version of the TPM does it need? Type the number.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 2.0
  - 2
  - TPM 2
  - TPM 2.0
  - version 2
  - version 2.0

After the answer: Reason: Windows 11 needs TPM 2.0, along with UEFI firmware that is Secure Boot capable.

#### Question in the draw: l22-k-repair

A chat, with its history: "Gus, Warehouse", Chat with the help desk.

> (Gus, Warehouse, at the left) After a failed update Windows still starts, but Settings and several programs crash, and sfc could not repair the files. The update was uninstalled and no restore points exist. I have no recent backup and the files on it matter. The programs took days to set up.

**The smaller repairs are used up. Which installation kind fits, once his files are copied off?**
(the options come in an order that depends on the seed of the question)
- A repair installation, which replaces the Windows system files and keeps his files and programs (right)
- A clean install, which gives a fresh Windows without the failed update — if chosen: A clean install erases the drive and the programs that took days to put in, when a repair installation keeps them.
- The recovery partition, which brings back the computer the way it shipped — if chosen: It returns the maker’s copy, so his added programs and, usually, files go.
- An image deployment from another computer that works, so that this one matches it and has the same Windows and programs — if chosen: An image replaces everything on the drive, and his files and programs would be gone.

After the answer: the deciding words are marked. Reason: The deciding words are Windows still starts, smaller repairs used up and programs took days. A repair installation fixes Windows and keeps files and apps; the other kinds erase them. His files are copied off first all the same.

#### Question in the draw: l22-r-driver

A chat, with its history: "Ken, Desk", Chat with the help desk.

> (Ken, Desk, at the left) I booted the new workstation from the Windows USB drive. Setup asks where to install, but the list of drives is empty. The SSD is fitted and shows up in the firmware.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Load the storage driver from the maker, from a second USB drive, in setup (right)
- Reformat the USB drive and start setup again — if chosen: The setup files are working. The list is empty because no driver is loaded for the controller.
- Swap the SSD for a hard disk drive, which setup always sees — if chosen: Nothing is wrong with the SSD. The driver is what is missing.
- Skip the drive step and install on a network share — if chosen: Windows cannot be installed on a network share this way.

After the answer: the deciding words are marked. Reason: The deciding words are the list of drives is empty and shows up in the firmware. The drive is fine; setup needs the controller’s driver.

#### Question in the draw: l22-r-recovery

A chat, with its history: "Una, Reception", Chat with the help desk.

> (Una, Reception, at the left) My laptop is slow and cluttered. I want it back the way it was when I bought it, and I have already copied my files elsewhere.

**Which installation kind do you use?**
(the options come in an order that depends on the seed of the question)
- The recovery partition, which restores the laptop to how it shipped (right)
- An in-place upgrade, which clears the clutter and keeps everything — if chosen: An upgrade keeps her apps and settings, so the clutter stays.
- A repair installation, which leaves her programs in place — if chosen: A repair keeps the files and programs, and she wants them gone.
- Zero-touch, which cleans the laptop over the internet — if chosen: Zero-touch prepares a new device. It does not reset an old one.

After the answer: the deciding words are marked. Reason: The deciding words are back the way it was when I bought it and I have already copied my files. The recovery partition does that.

#### Question in the draw: l22-r-gpt

The question, read aloud as above: **A disk bigger than 2 TB must use which partition style? Type its short name.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - GPT
  - GUID partition table

After the answer: Reason: GPT lifts the 2 TB limit of MBR, allows up to 128 partitions in Windows, and goes with UEFI start-up.

#### Question in the draw: l22-p-gfx

A chat, with its history: "Rosa, Video", Chat with the help desk.

> (Rosa, Video, at the left) The new editing program lists “dedicated graphics with 4 GB of VRAM” as its minimum. My laptop has integrated graphics. It has 16 GB of main memory, so that should cover it.

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Integrated graphics borrows main memory and has no VRAM of its own, so it falls short; she needs a dedicated graphics card with 4 GB (right)
- Main memory counts as VRAM, so her 16 GB of main memory more than meets the 4 GB minimum and the program will run without trouble — if chosen: VRAM is the graphics card’s own memory. The 16 GB of main memory is a different pool.
- The program needs a faster processor instead, since graphics work is done by the CPU — if chosen: The listing names the graphics hardware. A faster processor does not add VRAM.
- The program will run if she installs the 32-bit version — if chosen: The bit width is not the problem. The graphics minimum applies to both versions.

After the answer: the deciding words are marked. Reason: The deciding words are dedicated graphics, 4 GB of VRAM and integrated graphics. VRAM is the card’s own memory, and integrated graphics has none of its own.

#### Question in the draw: l22-s-bit

A chat, with its history: "Tom, Engineering", Chat with the help desk.

> (Tom, Engineering, at the left) The installer for the new design program says “64-bit only”. My laptop has 8 GB of memory but Windows only shows 3.2 GB usable.

A plain table, "System type, from msinfo32":

> Field  |  Value  (the column heads)
> System Type  |  x86-based PC

**What is the cause, and what changes it?**
(the options come in an order that depends on the seed of the question)
- Windows is the 32-bit version, which reaches at most 4 GB and cannot run 64-bit programs; moving to 64-bit means a clean install (right)
- The installer is faulty, and a fresh download from the company’s own site will let the program use all 8 GB of memory with no other change — if chosen: The limit is in the operating system, not the installer.
- The memory is damaged, so replacing the sticks will bring back the missing 4.8 GB — if chosen: The memory is fine. A 32-bit Windows reaches no more than 4 GB, and some of that is held for the system.
- An in-place upgrade to 64-bit keeps his files and programs and fixes both — if chosen: An upgrade cannot change from 32-bit to 64-bit. That change is a clean install, with a backup first.

After the answer: the deciding words are marked. Reason: The deciding lines are 64-bit only, 3.2 GB usable of 8 GB, and System Type x86-based PC (a 64-bit Windows says x64-based PC). A 32-bit Windows reaches at most 4 GB and runs only 32-bit programs, and the only way to 64-bit is a clean install.

#### Question in the draw: l22-g-dist

A chat, with its history: "Pam, Training", Chat with the help desk.

> (Pam, Training, at the left) We will push a 3 GB program to all 400 computers on Monday at 9. Everyone is online then. I need a plan.

**What is the main risk to deal with?**
(the options come in an order that depends on the seed of the question)
- The network: 400 downloads at once will slow everything for everyone, so the push is spread out in groups or sent from a server in each office (right)
- The license count, since 400 users each need a license — if chosen: Licenses matter, but nothing in the ticket suggests that they are short. The timing is what she asked about.
- The device, because a program of 3 GB will not fit on any of the computers that are online at that hour on a Monday morning — if chosen: Storage is worth checking, but 3 GB fits on almost every computer. The shared line is the larger risk.
- Nothing, since a download package has no effect on the network — if chosen: Every download uses the network. This one is 1.2 TB in total, all in the same hour.

After the answer: the deciding words are marked. Reason: The deciding words are 3 GB to all 400 computers at 9 and everyone is online. That is the network impact of distribution, and spreading it out is the answer.

#### Question in the draw: l22-g-vram

The question, read aloud as above: **What do we call the memory on a graphics card itself, as a program’s requirements list it? Type the short name.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - VRAM
  - video RAM
  - video memory

After the answer: Reason: VRAM is the graphics card’s own memory. Integrated graphics has none of its own and shares the main memory.

#### Question in the draw: l22-k-token

A chat, with its history: "Jess, Engineering", Chat with the help desk.

> (Jess, Engineering, at the left) Our costing program started on my old PC and now says “Security dongle not found”. I am on the new PC, and the program is installed fine.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Plug in the small USB dongle that came with the program, since it needs that token to run (right)
- Reinstall the program, since the install is the part that failed — if chosen: The program installed fine. It is asking for a device, not for files.
- Add graphics memory, since the program needs more VRAM to start — if chosen: The message names the dongle, not the graphics.
- Switch to the 32-bit version of the program, since the 64-bit version is the one that looks for the dongle — if chosen: The bit width does not change the need for the token.

After the answer: the deciding words are marked. Reason: The deciding words are Security dongle not found and the program is installed fine. The program needs its external hardware token.

#### Question in the draw: l22-r-iso

A chat, with its history: "Lex, Desk", Chat with the help desk.

> (Lex, Desk, at the left) The vendor sent the program as a single ISO file, about 4 GB. The server has no disc drive.

**How do you install from it?**
(the options come in an order that depends on the seed of the question)
- Open the ISO, which mounts as a virtual drive, and run setup from there (right)
- Install a disc drive on the server from the parts room, then burn the ISO to a DVD — if chosen: That takes parts and a trip for something the file does on its own. Windows mounts the ISO as a virtual drive.
- Copy the ISO to a USB drive and run setup from the USB drive’s folder — if chosen: A USB drive holds the file, but the ISO still has to be mounted or opened.
- Unzip it with a zip program and run the biggest file — if chosen: An ISO is a disc image, not a zip file.

After the answer: the deciding words are marked. Reason: The deciding words are a single ISO file and the server has no disc drive. A mountable ISO acts as a virtual drive.

#### Question in the draw: l22-r-x86

A chat, with its history: "Mel, Finance", Chat with the help desk.

> (Mel, Finance, at the left) I see two folders on the C drive, Program Files and Program Files (x86). My old accounting program is in the second one.

**What does the second folder hold?**
(the options come in an order that depends on the seed of the question)
- 32-bit programs, which 64-bit Windows keeps apart from the 64-bit ones (right)
- Programs that were installed from a disc — if chosen: The folder is about bit width, not about where a program came from.
- Programs that need dedicated graphics — if chosen: Graphics needs are listed by the program, not by the folder.
- Old copies of programs kept as a backup — if chosen: It holds working 32-bit programs, not backup copies.

After the answer: the deciding words are marked. Reason: The deciding words are Program Files (x86) and old accounting program. The folder holds 32-bit programs.

#### Question in the draw: l22-r-osver

A chat, with its history: "Hugh, Legal", Chat with the help desk.

> (Hugh, Legal, at the left) The new case-management program says it needs Windows 11. My PC runs Windows 10 and the installer stops with a message about the operating system.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- The program is made for a newer operating system than the PC has (right)
- The PC’s memory is too small, because every program needs 16 GB — if chosen: Memory is not what the installer names. It names the operating system.
- The installer must be run as the 32-bit version — if chosen: Bit width is not what the message says.
- The antivirus is blocking the installer, so it is removed — if chosen: The message is about the operating system, and nothing points at antivirus.

After the answer: the deciding words are marked. Reason: The deciding words are needs Windows 11 and the PC runs Windows 10. The program is not compatible with the older operating system.

#### Question in the draw: l22-s-license

A chat, with its history: "Lena, New hire", Chat with the help desk.

> (Lena, New hire, at the left) It is my first day. I can sign in to the company web apps, but Word online says something like “you need a license to edit” and only lets me view.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Whether a license is assigned to her account in the admin console (right)
- Whether Word needs reinstalling on her laptop, since it is the web app that fails — if chosen: Word online runs in the browser. Reinstalling anything on her laptop changes nothing.
- Whether her password needs to be reset, since sign-in must be partly working — if chosen: The sign-in works. A reset fixes a password problem, not a missing license.
- Whether her mailbox is full, which can block editing — if chosen: A mailbox limit has nothing to do with editing a document online.

After the answer: the deciding words are marked. Reason: The deciding words are I can sign in and you need a license to edit. Sign-in works, so the missing piece is the license assigned to her account.

#### Question in the draw: l22-g-sync

A chat, with its history: "Sam, Finance", Chat with the help desk.

> (Sam, Finance, at the left) I deleted a folder from my OneDrive folder on my laptop, and now it is gone from my phone and the web page too. I only wanted it off the laptop.

**What happened, and what do you do?**
(the options come in an order that depends on the seed of the question)
- The sync folder mirrors the cloud copy, so the deletion synced everywhere; restore it from the cloud recycle bin (right)
- The phone app is faulty and shows the folder as missing, so the phone must be signed out of the account and signed back in again — if chosen: The web page also lost the folder. That points at the sync, not the phone.
- The laptop’s disk is corrupt, so the files must be recovered from the disk — if chosen: The disk did what it was asked. The delete was real and synced.
- The folder is lost for good, since cloud storage has no way to bring files back — if chosen: Cloud storage usually keeps deleted files for a time. Look there first.

After the answer: the deciding words are marked. Reason: The deciding words are deleted from my OneDrive folder and gone from my phone and the web page too. A synced folder shares its deletions.

#### Question in the draw: l22-k-identity

A chat, with its history: "Noor, HR", Chat with the help desk.

> (Noor, HR, at the left) I changed my password at my desk this morning. The office computer takes the new one, but my cloud mail and apps still want the old one.

**What do you check?**
(the options come in an order that depends on the seed of the question)
- Whether identity synchronization from the office directory to the cloud is running (right)
- Whether the cloud mail license has been assigned to her account in the admin console, since the old password still works — if chosen: The ticket gives no sign of a license problem: the apps open and only the password differs. Licenses decide what you can do, not which password the cloud accepts.
- Whether her mailbox is full, since a full mailbox blocks the password — if chosen: A full mailbox does not control which password the cloud accepts.
- Whether the sync folder on her laptop is paused — if chosen: The folder sync moves files. Passwords belong to identity synchronization.

After the answer: the deciding words are marked. Reason: The deciding words are office computer takes the new one and cloud still wants the old one. That is identity synchronization between the two places.

#### Question in the draw: l22-r-leaver

A chat, with its history: "Ola, HR", Chat with the help desk.

> (Ola, HR, at the left) Arjun left the company on Friday. His cloud account is still active and takes up one of our paid licenses.

**What is the right step on the licenses?**
(the options come in an order that depends on the seed of the question)
- Remove his license in the admin console, so it can be assigned to a new person (right)
- Delete his files, so that the license goes with them — if chosen: Files do not hold the license. The account does.
- Leave the license alone. Unused licenses free themselves after a week — if chosen: Licenses stay assigned until someone removes them, and they keep costing money.
- Rename the account to the new hire’s name — if chosen: Renaming reuses the account, and with it his mail and files.

After the answer: the deciding words are marked. Reason: The deciding words are left the company and takes up one of our paid licenses. License assignment is done and undone in the admin console.

#### Question in the draw: l22-r-selective

A chat, with its history: "Pia, Design", Chat with the help desk.

> (Pia, Design, at the left) My laptop’s drive is almost full since I turned on cloud sync. The cloud holds 400 GB of team files, and I only work in two folders.

**What do you change?**
(the options come in an order that depends on the seed of the question)
- In the sync settings, choose only those two folders to keep on the laptop (right)
- Delete the large folders from the sync folder to free the space — if chosen: A delete in the sync folder deletes the cloud copy for everyone too.
- Turn sync off and email the files as needed — if chosen: That drops the sync she needs for her two folders.
- Replace the drive with a 1 TB one — if chosen: A bigger drive is a costly change when a setting solves it.

After the answer: the deciding words are marked. Reason: The deciding words are my laptop’s drive is almost full and only work in two folders. The sync folder settings choose what is kept on the laptop.

#### Question in the draw: l22-r-collab

A chat, with its history: "Eli, Sales", Chat with the help desk.

> (Eli, Sales, at the left) Four of us must work on the same price spreadsheet at once this afternoon, and each of us keeps saving over the others’ changes with copies in email.

**What do you suggest?**
(the options come in an order that depends on the seed of the question)
- Keep one copy in the cloud and open it in the online spreadsheet, so all four edit it together (right)
- Put the file in a sync folder on one laptop and tell the others to take turns — if chosen: Taking turns on one laptop is what the sync folder does not do for four at once.
- Print the sheet and merge the changes by hand — if chosen: It works, but it is slower than shared editing.
- Give each person a separate copy and join them at the end — if chosen: Separate copies bring the same overwriting problem.

After the answer: the deciding words are marked. Reason: The deciding words are the same spreadsheet at once and saving over the others’ changes. A shared online document is edited by all at once.

#### Question in the draw: l23-p-blue

A chat, with its history: "Pia, Finance", Chat with the help desk.

> (Pia, Finance, at the left) My laptop shows the Windows dots, then a blue screen, then restarts, again and again. It started right after the graphics update ran last night. I cannot reach my desktop. My files are all on the company drive.

A plain table, "The blue screen":

> Line  |  What it says  (the column heads)
> Stop code  |  DRIVER_IRQL_NOT_LESS_OR_EQUAL
> What failed  |  A display driver file

**What is the first move?**
(the options come in an order that depends on the seed of the question)
- Open WinRE, start in safe mode, and roll back the display driver (right)
- Reinstall Windows from a USB stick, since it cannot reach the desktop — if chosen: Nothing shows Windows itself is damaged. The code names one driver, and the ways back cost far less than a reinstall.
- Take out the memory sticks and put them back, then start the laptop — if chosen: The stop code names a display driver. Reseating memory touches a part that nothing points at.
- Restart the laptop a few more times to see whether it gets through — if chosen: It has failed the same way every time. Another try gives the same blue screen and tests nothing.

After the answer: the deciding words are marked. Reason: A blue screen at the Windows dots is link 5. The stop code names a display driver and the change came the night before, so the way back is safe mode and a roll back, one change. The files are on the company drive, so nothing needs protecting first.

#### Question in the draw: l23-p-noos

A chat, with its history: "Quinn, Warehouse", Chat with the help desk.

> (Quinn, Warehouse, at the left) The screen says “Operating system not found” right after the logo. Nothing changed except a power cut last night, when the lights went out while I was working. All my files are on the company drive.

A plain table, "The firmware screen, and the drive check":

> Line  |  Result  (the column heads)
> Drives listed  |  One drive, 500 GB
> Boot order  |  That drive is first
> Drive health check (S.M.A.R.T.)  |  Passed

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Run Startup Repair from WinRE, using the install USB if WinRE will not open (right)
- Order a new drive, since the computer says it cannot find the system it needs to run — if chosen: The drive is listed and passed its health check. The message is about the start-up files, not the drive.
- Change the boot order and put the network ahead of the drive — if chosen: The boot order is already right, with the drive first. Changing it tests nothing the table has not answered.
- Wipe the drive and install Windows again, so the files are fresh — if chosen: A mended start-up needs a repair, not a wipe. A wipe costs Quinn’s programs and setup to fix something that Startup Repair may fix alone.

After the answer: the deciding words are marked. Reason: No operating system found is the firmware not finding start-up files it can use. The drive is listed, first in the boot order and healthy, and the power cut explains damaged start-up files, so Startup Repair in WinRE is the smallest way back. Quinn’s files are on the company drive, so nothing needs copying first.

#### Question in the draw: l23-p-profile

A chat, with its history: "Rob, Shipping", Chat with the help desk.

> (Rob, Shipping, at the left) I sign in and wait about eight minutes before my desktop appears. Once it shows, everything is quick. A co-worker signed in on this same computer yesterday and was at his desktop in under a minute.

The chain: power, start-up self-test, firmware, the boot drive, Windows loading, sign-in and profile.

**Which link, and which cheap test?**
(the options come in an order that depends on the seed of the question)
- Link 6, the profile: sign in as a new test user and compare the time (right)
- Link 4, the boot drive: run a full health scan on the whole drive today — if chosen: The same computer and drive are fast for his co-worker. The slow part is Rob’s sign-in.
- Link 5, Windows loading: uninstall the latest Windows update — if chosen: Windows loads fast for the co-worker on the same computer. An uninstall changes the whole computer to fix one person’s sign-in.
- Link 3, firmware: reset the firmware settings to their defaults — if chosen: Firmware runs before sign-in and is the same for both users. It cannot explain a slow profile.

After the answer: the deciding words are marked. Reason: One person slow and another quick on the same computer cuts the computer away and leaves the profile, link 6. A new test profile confirms it: quick means Rob’s profile is the cause. Back up his files before any repair.

#### Question in the draw: l23-s-loop

A chat, with its history: "Nia, HR", Chat with the help desk.

> (Nia, HR, at the left) My laptop restarts at the logo over and over. A blue screen with a repair message came up, and now it says Startup Repair could not repair my PC. My files are only on this laptop.

WinRE opened by itself after failed starts. System Restore points exist from last week.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Copy Nia’s files out first (command prompt in WinRE), then try System Restore to last week (right)
- Run Startup Repair a second time, since it may work on another try — if chosen: It has just failed. Running the same repair again tests nothing new.
- Choose Reset this PC, since the laptop will not start after Startup Repair failed — if chosen: It would remove programs and may remove files, and her files exist nowhere else. Smaller ways back are left.
- Order a new drive, since the laptop cannot repair itself — if chosen: Nothing has tested the drive. Failing Startup Repair does not mean a failed drive.

After the answer: the deciding words are marked. Reason: Boot issues are worked in order: copy files if they exist nowhere else, then the smallest way back that is left. Startup Repair failed once, so System Restore from WinRE is next. Reset and reinstall come last.

#### Question in the draw: l23-r-winre

The question, read aloud as above: **The repair mode that opens by itself after Windows fails to start a few times, and holds Startup Repair, System Restore and safe mode, has a three-word name, shortened to WinRE.**

**Type the three-word name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - windows recovery environment

After the answer: Reason: The Windows Recovery Environment (WinRE) is the repair mode. It opens by itself after failed starts, or from install media, and holds Startup Repair, System Restore and the way into safe mode.

#### Question in the draw: l23-g-copy

A chat, with its history: "Ola, Reception", Chat with the help desk.

> (Ola, Reception, at the left) My computer takes ages to sign in and, when it does, my desktop is empty. My co-worker signed in on the same computer and it was fine. My photos and documents are in my profile and nowhere else.

A new test profile signs in fast and shows an empty desktop. The plan is to move Ola to a new profile.

**What is the order of the work?**
(the options come in an order that depends on the seed of the question)
- Copy her Documents, Desktop and Pictures folders first, then move her to the new profile (right)
- Delete the old profile folder, then let Windows build a new one for her — if chosen: Her photos and documents are only in that folder. Deleting it first loses them for good.
- Move her to the new profile now and copy the files over if she wants them later on — if chosen: The old profile stays in place at first, but nothing protects the files, and she has no word of what happens next.
- Reinstall Windows, which gives a clean profile and clears the slow sign-in — if chosen: The computer is fine for her co-worker. A reinstall fixes nothing that the new profile does not and erases more.

After the answer: the deciding words are marked. Reason: The test profile showed the old profile is the fault. Her files are only there, so they are copied out before the profile is replaced: protect the data, then change one thing.

#### Question in the draw: l23-g-smell

A chat, with its history: "Ray, Facilities", Chat with the help desk.

> (Ray, Facilities, at the left) My laptop blue-screened twice this morning. There is a burning smell from the left side, the body is too hot to touch, and the base has started to bulge.

**What do you tell Ray first?**
(the options come in an order that depends on the seed of the question)
- Shut it down, unplug it, take it off his desk and do not power it on again (right)
- Run Event Viewer to read the stop code before the laptop restarts again — if chosen: The stop code is useful, but not before the laptop is safe. Powering it on again adds risk.
- Start it in safe mode to see whether the blue screen comes back — if chosen: Starting it up once more keeps a hot, bulging battery running. The safety stop comes before the cut.
- Let it cool for ten minutes, then plug it in again and watch the temperature — if chosen: A bulge and a burning smell are not a temperature problem that cooling fixes. Plugging it in feeds the battery.

After the answer: the deciding words are marked. Reason: Heat can cause trouble at any link, and a burning smell with a bulge means the computer is not powered on again. Unplug it, move it away, and follow the desk’s rule for a swollen battery. The blue screens wait.

#### Question in the draw: l23-k-ram

A chat, with its history: "Max, Estimating", Chat with the help desk.

> (Max, Estimating, at the left) Since Friday, when I put a second memory stick in, my computer blue-screens at the Windows dots, most mornings. Before that it never did. I want it fixed, but please do not wipe it.

A plain table, "The blue screen":

> Line  |  What it says  (the column heads)
> Stop code  |  MEMORY_MANAGEMENT
> Changed on Friday  |  A second memory stick was added

**What is the smallest test?**
(the options come in an order that depends on the seed of the question)
- Take out the new memory stick alone and see whether the blue screens stop (right)
- Roll back the display driver, since drivers are behind most blue screens in general — if chosen: No driver changed on Friday, and the code points toward memory. A roll back tests something nothing points at.
- Run sfc /scannow from a command prompt opened as administrator — if chosen: sfc checks Windows files. The code and the Friday change both point toward memory.
- Reinstall Windows with the new stick in, so everything starts fresh — if chosen: Max wanted no wipe, and a reinstall with the same stick in would repeat the fault.

After the answer: the deciding words are marked. Reason: A blue screen that began right after a new part was added is the what-changed move. The stop code points toward memory and the new stick is the only change, so removing it alone is one change that splits the cause. Reseating or swapping it comes after.

#### Question in the draw: l23-k-roam

A chat, with its history: "Pat, Planning", Chat with the help desk.

> (Pat, Planning, at the left) It takes about twelve minutes to sign in, whichever company computer I use. After that all is fine. I have a lot of videos on my desktop.

A plain table, "The desk’s record":

> Line  |  Value  (the column heads)
> Profile type  |  Roaming: changes are copied between the server and the computer at every sign-in
> Profile size  |  14 GB, mostly a Videos folder
> Sign-in time on three other computers  |  About twelve minutes each

**What is the finding and the fix?**
(the options come in an order that depends on the seed of the question)
- The profile is large and is copied at each sign-in; move the videos to a network drive (right)
- This computer’s drive is slow, so replace it and reinstall Windows — if chosen: Three other computers are just as slow. The fault travels with Pat, not with one computer.
- Create a new test profile on this computer and see whether that signs in quickly for Pat — if chosen: A new profile has no videos and would be quick, but it only repeats what the table already says: the fault is in Pat’s profile.
- Roll back the newest Windows update on this computer, then sign in again — if chosen: Other computers are slow too, and an update on one computer cannot explain it. The size of the profile does.

After the answer: the deciding words are marked. Reason: Slow profile load for one person on every computer is the profile, link 6. The record says it is roaming and 14 GB, so it is copied at each sign-in. Moving the big files out of the profile is one change, with Pat’s files copied first.

#### Question in the draw: l23-k-clock

A chat, with its history: "Dot, Archive", Chat with the help desk.

> (Dot, Archive, at the left) Every Monday my desktop says the date is January 1, and I fix it by hand. The rest of the week it is right. It is switched off and unplugged all weekend.

A plain table, "What the desk found":

> Test  |  Result  (the column heads)
> Firmware screen on Monday  |  Date and time missing; settings back to defaults
> Time zone and Sync now in Windows  |  Right all week once corrected
> Age of the computer  |  7 years

**Which link and which fix?**
(the options come in an order that depends on the seed of the question)
- Link 3, firmware: replace the small battery on the motherboard (right)
- Windows time: put the Windows Time service to Automatic and sync daily — if chosen: Windows time is right all week. What fails is the firmware losing its date while the power is off.
- Windows files: run sfc /scannow, if a clock file is damaged — if chosen: The firmware screen already shows the lost date, before Windows loads. Windows files cannot cause that.
- The time zone: change it to match the office and press Sync now each Monday — if chosen: The time zone and Sync now are already known to work. Fixing it by hand each week is what Dot is doing.

After the answer: the deciding words are marked. Reason: Wrong date after being off, with firmware settings back at defaults, is link 3: the small battery on the motherboard. Windows time is fine while it runs, which is the cut that splits the battery from the time service.

#### Question in the draw: l23-res-bsodonce

A chat, with its history: "Cy, Operations", Chat with the help desk.

> (Cy, Operations, at the left) My laptop blue-screened one time yesterday, during start-up. I wrote the code down. It has started normally four times since, and nothing is different.

A plain table, "The record":

> Line  |  Value  (the column heads)
> Stop code  |  One entry, never seen before
> Starts since  |  Four, all normal
> Changes recently  |  None known

**What is the right move?**
(the options come in an order that depends on the seed of the question)
- Record the stop code and the time, check for updates, and watch for it to come back (right)
- Reinstall Windows, so that a crash like that can never come back — if chosen: One crash and four normal starts do not show Windows is damaged. A reinstall costs a day for no evidence.
- Replace the memory, since a blue screen at start-up usually means memory — if chosen: Nothing points at memory yet. Telling Cy a cause before knowing it is a guess that costs a part.
- Reset the firmware to its defaults, to clear anything that may have changed — if chosen: Nothing is shown to have changed in the firmware, and this adds a change with no test behind it.

After the answer: the deciding words are marked. Reason: A single blue screen is written down, not hunted. A second one gives something to cut. Until then the stop code and the time are the useful part.

#### Question in the draw: l23-res-profile2

A chat, with its history: "Lou, Records", Chat with the help desk.

> (Lou, Records, at the left) My sign-in takes six minutes. The help desk had me sign in as a test user on my computer and that took six minutes too.

A plain table, "The desk’s tests":

> Test  |  Result  (the column heads)
> Test profile on this computer  |  Six minutes
> Test profile on another computer  |  Under one minute
> Lou’s own profile on the other computer  |  Under one minute

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- This computer, not the profile: look at its startup programs and its drive (right)
- Lou’s profile, so build him a new one and copy his files across — if chosen: His own profile is quick on another computer. The new profile test cleared it.
- The company network, so call the network team about every computer — if chosen: The other computer signs in fast on the same network. One computer is slow.
- Link 5, Windows loading: reinstall Windows on the other computer — if chosen: The other computer is the fast one. The slow one is the computer in front of Lou.

After the answer: the deciding words are marked. Reason: A new test profile splits the profile from the machine. Slow with a new profile on this computer, quick elsewhere, leaves this computer. Lou’s profile is cleared.

#### Question in the draw: l23-res-noback

A chat, with its history: "Mel, Intake", Chat with the help desk.

> (Mel, Intake, at the left) My laptop restarts at the logo and goes into a repair screen every time. Startup Repair could not fix it and no restore points exist. Everything I need is on the company server.

A plain table, "What the desk tried":

> Step  |  Result  (the column heads)
> Startup Repair  |  Could not repair it
> System Restore  |  No restore points exist
> Files on the laptop  |  All are saved on the server

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Reset this PC, since the smaller ways back are used up (right)
- Run Startup Repair again, since it may work the second time — if chosen: It has just failed. The same repair gives the same result.
- Order a new laptop, since the repair screen shows it cannot be fixed — if chosen: Nothing has tested the hardware, and a reset costs far less.
- Copy her files to a USB stick first, as every repair starts with a backup — if chosen: They are already saved on the server. Copying them again adds a step and protects nothing new.

After the answer: the deciding words are marked. Reason: The ways back go smallest first. With Startup Repair failed, no restore point and the files already on the server, a reset is right: a bigger step, taken because the earlier ones are used up.

#### Question in the draw: l23-w-dara

A chat, with its history: "Dara, Design", Chat with the help desk.

> (Dara, Design, at the left) My computer shows a blue screen and restarts. It has done it three times today, since Tuesday morning. I think the memory is going, because my last computer did exactly this. I have not installed anything.

A plain table, "The blue screen, and the System log in Event Viewer":

> Where  |  What it says  (the column heads)
> Blue screen  |  Stop code: VIDEO_TDR_FAILURE. What failed: a display (graphics) driver file
> Event Viewer, System, Monday 5:10 PM  |  Information: a driver package for the display adapter was installed
> Event Viewer, System, Tuesday 9:41 AM  |  Critical: the system restarted without shutting down cleanly

**What does the blue screen say about Dara’s memory guess?**
(the options come in an order that depends on the seed of the question)
- It names a display driver, not memory, so memory has no evidence behind it yet (right)
- It confirms memory, because any blue screen on a computer means memory — if chosen: A blue screen is Windows crashing, and the stop code names the cause. This one names a driver.
- It says nothing useful, so the memory should be tested before anything else — if chosen: The code is the most useful thing on the screen. Testing memory first ignores what it says.
- It points at the hard drive, since the files Windows needs sit there — if chosen: The code names a display driver. A drive fault would show a different name, or none.

After the answer: the deciding words are marked. Reason: The favorite was memory. The stop code named a driver, the log showed one installed the evening before, and safe mode split Windows from it. One roll back fixed it. Ordering memory or reinstalling Windows would have cost a day and left the driver in place.
The working:
- Place the fault: loading or running?: It happens three times a day, mid-work, after sign-in. That is the running system, not the boot chain. The cheapest read is on the screen already.
- Name Dara’s favorite, and read the stop code before testing it.: Her guess is memory. The stop code names a display driver. Memory is not ruled out for good, but nothing points at it.
- What changed? Dara says nothing, so let the computer’s log say.: Event Viewer, System log: on Monday at 5:10 PM a driver package for the display adapter was installed. A vendor updater did it by itself. The blue screens began the next morning.
- Cut in half: start in safe mode, which loads only basic drivers.: In safe mode the computer runs an hour with no crash. Windows and the hardware are fine, and the fault is in a driver that normal start-up loads. A clean hour in safe mode is only some evidence against memory, which can still fail there, but the stop code and the log agree.
- One change: in Device Manager, roll back the display driver, and nothing else. Restart normally.: The Driver tab offers Roll Back Driver. After it, no blue screen all afternoon. Had it failed, the next move was System Restore to a point before Monday.
- Confirm with Dara after a full day, and write it up.: Dara confirms on Wednesday evening. The note: blue screen, stop code, new display driver Monday, safe mode fine, rolled back, fixed. Pause that driver’s automatic updates, and tell the desk, since others may have the same update.

#### Question in the draw: l23-p-service

A chat, with its history: "Sam, Bookkeeping", Chat with the help desk.

> (Sam, Bookkeeping, at the left) My accounting program says it cannot connect to the database service. It worked yesterday, and I have not changed anything.

A plain table, "The Services console, and the System log":

> Where  |  What it shows  (the column heads)
> Services console  |  BookDB Service: stopped. Startup type: Automatic
> Event Viewer, System log  |  The BookDB Service depends on the Data Store service, which failed to start

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Look at the Data Store service it depends on, and start that one first (right)
- Start BookDB again until it stays running, since its type is Automatic — if chosen: It cannot stay running while the service it needs is stopped. The log has already said why.
- Change BookDB’s startup type to Disabled and restart the computer — if chosen: Disabled stops it from ever starting, which is the opposite of what Sam needs.
- Reinstall the accounting program, since it lost its database service — if chosen: The program is not damaged. The log names a stopped service, which costs nothing to look at.

After the answer: the deciding words are marked. Reason: A service that will not start is read in the Services console and the System log. The log names the cause: a service it depends on. The Dependencies tab shows the same chain, and starting the first service in it is one change.

#### Question in the draw: l23-s-slow

A chat, with its history: "Eli, Sales", Chat with the help desk.

> (Eli, Sales, at the left) My computer crawls every Monday morning between 9 and 11, and then it is fine. I think it needs more memory or a new drive.

A plain table, "Task Manager, Monday 9:30 AM":

> Reading  |  Value  (the column heads)
> Processor  |  12%
> Memory  |  41% used
> Disk  |  100% busy
> Top disk user  |  Antivirus full scan (the desk’s schedule: Mondays at 9)

**What is the finding?**
(the options come in an order that depends on the seed of the question)
- The scheduled full scan keeps the disk busy until it ends; move it after hours (right)
- Memory is the limit, so order more RAM to fit the workload — if chosen: Memory is at 41%, with plenty free. More RAM would change nothing the table shows.
- The drive is failing, so back it up and swap it for a new one before the next scan — if chosen: A failing drive would be slow all day, not only while the scan runs. The scan explains the hours.
- Windows is damaged, so run sfc /scannow every morning from now on — if chosen: sfc checks Windows’s own files. Nothing in the table shows damage, and the scan accounts for the slowness.

After the answer: the deciding words are marked. Reason: Degraded performance is read in Task Manager before any change. Disk at 100% with the antivirus scan on top, in the same hours as the slowness, is the cause. Moving the scan is one change to the desk’s schedule, not a repair.

#### Question in the draw: l23-s-memory

A chat, with its history: "Kim, Marketing", Chat with the help desk.

> (Kim, Marketing, at the left) A box says Windows is low on memory and I should close programs. It happens most afternoons. The computer has 16 GB.

A plain table, "Task Manager, Processes sorted by memory":

> Program  |  Memory at 9 AM  |  Memory at 3 PM  (the column heads)
> Layout Studio  |  2 GB  |  9.8 GB
> Browser, 12 tabs  |  2.9 GB  |  3.1 GB
> Windows and the rest  |  3 GB  |  3 GB

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Update Layout Studio and watch it again: one program keeps growing all day (right)
- Close the browser tabs each afternoon, since tabs use a lot of memory — if chosen: The browser barely grows, from 2.9 to 3.1 GB. Closing tabs frees a small part of the problem.
- Order 32 GB of memory so that the warning stops for good — if chosen: More memory only delays the warning if one program keeps growing. The table points at the program first.
- Raise the virtual memory (drive space used as extra memory) to its largest size and restart — if chosen: It hides the growth and leaves the program that causes it.

After the answer: the deciding words are marked. Reason: Task Manager shows memory by program and the growth over time. One program climbing all day is a program fault, so it is updated or reinstalled. Adding RAM is for a computer whose normal work needs more than it has.

#### Question in the draw: l23-s-shutdown

A chat, with its history: "Lena, Engineering", Chat with the help desk.

> (Lena, Engineering, at the left) My desktop switches itself off about once an hour while I run the big spreadsheets. There is no blue screen, it just goes dark. It is fine when idle. The fan roars before it goes, and boxes are stacked against the case.

A plain table, "Event Viewer, System log":

> Time  |  What it says  (the column heads)
> 10:42 AM  |  Critical: restarted without shutting down cleanly
> 11:44 AM  |  Critical: restarted without shutting down cleanly
> 12:51 PM  |  Critical: restarted without shutting down cleanly
> Bug check (blue screen) entries  |  None

**Where does this point?**
(the options come in an order that depends on the seed of the question)
- Heat: clear the vents, remove the dust, and watch the temperature (right)
- A bad update, so uninstall the newest Windows update and test again — if chosen: No update is mentioned, and a crash from Windows would leave a blue screen entry. Heat explains it.
- The power supply, so order a new one before doing any other check — if chosen: It may be, but heat is the cheaper explanation and blocked vents are shown. Clear it first, and the supply comes next if it still happens.
- Damaged Windows files, so run sfc /scannow and wait for it to finish — if chosen: sfc checks Windows files. A sudden power-off with a roaring fan under load is not what a damaged file looks like.

After the answer: the deciding words are marked. Reason: Many sudden shutdowns with no blue screen, under heavy work, with a roaring fan and blocked vents, point at heat. Event Viewer confirms it is sudden power loss rather than a crash. The cheap fix is airflow; the power supply is the next cut if it continues.

#### Question in the draw: l23-s-crash

A chat, with its history: "Tom, Accounts", Chat with the help desk.

> (Tom, Accounts, at the left) Tally Pro closes by itself when I open an invoice. Other programs are fine. My colleague Ana has the same on her computer.

A plain table, "Event Viewer, Application log":

> Line  |  What it says  (the column heads)
> Faulting application  |  tallypro.exe, version 4.2.1
> Faulting module  |  report.dll, a file of code the program loads; the same on both computers

**Which move fits?**
(the options come in an order that depends on the seed of the question)
- Update or repair Tally Pro: two computers fail the same way and nothing else does (right)
- Run sfc /scannow, since a program crashing means Windows is damaged — if chosen: Other programs are fine, and Ana’s computer fails the same way. Windows files are not the suspect.
- Create a new profile for Tom, since only his program fails on his own computer — if chosen: Ana has the same fault on her own computer and profile. A profile cannot explain it.
- Restore Tom’s computer to last week with System Restore, to be safe — if chosen: The log names the program’s own file. A restore is a big step that Ana’s computer would not share.

After the answer: the deciding words are marked. Reason: Applications crashing is cut by one program or all, and one user or all. One program on two computers is the program: the log names its own module. Update or repair it, and tell the desk, since others may have it.

#### Question in the draw: l23-s-usb

A chat, with its history: "Hana, Records", Chat with the help desk.

> (Hana, Records, at the left) My scanner stopped working this morning. I plugged a webcam, a card reader and a label printer into the same hub last week.

A plain table, "Device Manager":

> Line  |  What it shows  (the column heads)
> USB controller  |  Yellow triangle: not enough USB controller resources
> Devices on the hub  |  Scanner, webcam, card reader, label printer, mouse

**What is the cheapest cut?**
(the options come in an order that depends on the seed of the question)
- Unplug all the hub devices, then plug them in one at a time, testing after each (right)
- Reinstall Windows, since the controller cannot be trusted any more — if chosen: A resource warning on one controller is not damage to Windows. Unplugging devices is free.
- Update every driver on the computer and replace the hub in the same visit on Friday — if chosen: Two changes at once, so nothing would show which one mattered.
- Order a new motherboard, since the USB controller is built into it — if chosen: The warning is about too many devices on a controller, not a dead part. The cheap test comes first.

After the answer: the deciding words are marked. Reason: A USB controller resource warning in Device Manager means the controller cannot serve what is plugged in. Unplug everything and add back one at a time: that is the cut. A powered hub or a driver update are the next steps if one device still fails.

#### Question in the draw: l23-s-zone

A chat, with its history: "Uma, Legal", Chat with the help desk.

> (Uma, Legal, at the left) My clock is exactly one hour behind since Sunday. It stays exactly one hour behind all day. It is 3 PM now and it shows 2 PM. Date and minutes are right, and it was fine last week.

This computer is not on the company domain. It was off the whole weekend; the firmware battery is a month old and fine.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- The time zone and daylight setting in Date and time, then press Sync now (right)
- The small battery on the motherboard, since a clock error comes from that battery — if chosen: A dead battery gives dates like January 1 and a reset after power-off, not exactly one hour. The minutes are right.
- Windows system files, with sfc /scannow, since the clock is part of Windows — if chosen: A damaged file would not leave the minutes exact and the hour off. A setting is the cheaper explanation.
- The Windows Time service, by changing its startup type to Disabled — if chosen: Disabling the service would stop the clock from being corrected at all. It would not fix an hour.

After the answer: the deciding words are marked. Reason: Time drift has two homes. Wrong after being off and reset to an odd date is the battery on the motherboard (firmware). A clean hour off while running is the time zone or daylight setting, and Sync now contacts the time server.

#### Question in the draw: l23-s-restore

A chat, with its history: "Iris, Video", Chat with the help desk.

> (Iris, Video, at the left) Since I installed the editing suite Monday, Windows stutters and two other programs crash. Windows made a restore point just before the install. I have my projects saved to the server.

The suite installed its own drivers and two background services as well. The vendor’s page says its uninstaller leaves the drivers and services behind.

**What is the smallest way back?**
(the options come in an order that depends on the seed of the question)
- Use System Restore to the point before the install, and tell Iris it removes the suite (right)
- Roll back one driver at a time until the stutter stops, then the next — if chosen: The suite installed drivers and services together. Rolling back one driver does not undo the rest.
- Reinstall Windows and then the programs she needs, one by one, starting with the suite — if chosen: A restore point made just before the install is the smaller way back. A reinstall costs everything on the computer.
- Tell Iris to uninstall the suite from Apps, restart, and check whether the stutter stops — if chosen: The vendor’s page says the uninstaller leaves the drivers and services, so the stutter would stay.

After the answer: the deciding words are marked. Reason: When one install changed many things and a restore point from just before it exists, System Restore is the smallest way back that undoes them all. It leaves documents alone and removes programs installed after the point, which the user is told first.

#### Question in the draw: l23-s-clean

A chat, with its history: "Jan, Planning", Chat with the help desk.

> (Jan, Planning, at the left) My computer freezes about ten minutes after I sign in. It never freezes in safe mode. No blue screen, no error. About twelve things start when I sign in.

Safe mode ran for an hour without a freeze. Windows itself and the hardware looked fine.

**What is the next cut?**
(the options come in an order that depends on the seed of the question)
- Do a clean boot (msconfig for services, Task Manager for startup programs), then turn half back on (right)
- Turn off all twelve startup programs for good and tell Jan it is fixed — if chosen: Twelve changes at once. Nothing shows which one mattered, and programs she needs are lost.
- Run sfc /scannow, since a freeze after sign-in is a damaged Windows file — if chosen: Safe mode is fine, which points away from Windows’s own files. sfc does not split the added programs.
- Remove the memory sticks one at a time to find the one that freezes — if chosen: Nothing points at memory: safe mode ran an hour clean and the freeze waits ten minutes after sign-in. Pulling sticks tests a part the ticket gives no sign of.

After the answer: the deciding words are marked. Reason: Fine in safe mode, frozen in normal start: the fault is in a driver, service or startup program that safe mode leaves out. A clean boot removes the added services and startup programs, and turning half back on, restart, keep halving finds the one.

#### Question in the draw: l23-s-sfc

A chat, with its history: "Zed, Procurement", Chat with the help desk.

> (Zed, Procurement, at the left) Since yesterday the Start menu will not open, Settings crashes, and three different programs close by themselves. Nothing was installed. No blue screen.

A plain table, "Event Viewer, Application log":

> Line  |  What it says  (the column heads)
> Faulting module  |  Different programs, the same Windows system file (a .dll, a shared file of code)
> Count since yesterday  |  31 errors

**Which tool fits?**
(the options come in an order that depends on the seed of the question)
- sfc /scannow in a command prompt opened as administrator (right)
- Device Manager, to roll back the drivers of every device one by one — if chosen: The log names a Windows file, not a driver, and rolling back many drivers is many changes at once.
- Task Manager, to end each program that crashes and open it again — if chosen: The programs close because the shared file is damaged. Restarting them just shows the same fault.
- The Services console, to restart every service marked Automatic — if chosen: No service is named. Restarting them all changes a lot and does not touch the damaged file.

After the answer: the deciding words are marked. Reason: Several programs and parts of Windows failing on the same system file is system instability from a damaged file. sfc /scannow checks the protected files and replaces damaged ones, and it changes nothing else.

#### Question in the draw: l23-x-call

Wes in Operations calls the help desk. You answer.

**Wes calls about a blue screen. What do you say?**
- An incoming call from "Wes, Operations" (Incoming call · 10:05 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer keeps blue-screening and restarting. It is a mess. Can you just wipe it and put Windows back on?" [pushes: He wants a reinstall and has given no details.]
  - reply "Before I wipe anything: what does the blue screen say, and has anything been installed since it began?": goes on to turn 2, where the pressure comes back
  - reply "Yes, bring it to the desk and I will wipe it and reinstall Windows today.": the call ends (not this one): Nothing has been tested. A reinstall costs a day and his programs, and may bring back the same fault. The stop code and what changed come first. [slip: reinstalled or reset Windows before trying the smaller ways back]
  - reply "It is probably the memory. I will order a new stick for you.": the call ends (not this one): No test points at memory yet. Telling Wes a cause before knowing it sends both of you the wrong way. [slip: told the user a cause before knowing it]
- turn 2, the other side says: "It says something about a stop code. I wrote down the name. And the printer program updated itself on Monday, I think." [pushes: He has given a stop code and a change, and still wants it fixed today.]
  - reply "Read me the code. We start in safe mode and undo that update, and I call you at 2 PM to confirm.": the call ends (right): A stop code and a change from Monday point at one thing to undo. Safe mode and a roll back are the small way back, and the call at 2 PM confirms it held.
  - reply "Restart it a few more times, and I call you at 2 PM to see if it came back.": the call ends (not this one): Restarting repeats the same crash and tests nothing; the stop code and the Monday change are not used. [slip: ran a test that does not split what works from what does not]
  - reply "Then the printer program is the cause. I reinstall Windows tonight and call you at 8 AM.": the call ends (not this one): The update is one change, and a roll back undoes it. A reinstall would be the last step, and tonight is a guess. [slip: reinstalled or reset Windows before trying the smaller ways back]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: The stop code and what changed come before any big step. Wes gave both, so the next move is the small way back, safe mode and undoing the Monday update. Every answer here gives a time to call; only this one acts on the evidence.

#### Question in the draw: l23-g-two

A chat, with its history: "Ann, Purchasing", Chat with the help desk.

> (Ann, Purchasing, at the left) This morning I let Windows install an update, and I also installed a new label printer driver. Now my computer freezes every few minutes. Both changed today: the update ran first, the driver went on last, around noon.

Safe mode ran for an hour without a freeze.

**How do you undo them?**
(the options come in an order that depends on the seed of the question)
- Roll back the printer driver alone and test; uninstall the update only if freezes remain (right)
- Roll back the printer driver and uninstall the update together, then restart and test — if chosen: With both gone, a fix would not show which one caused it, and a change that was not needed stays out.
- Run sfc /scannow, since freezes mean damaged Windows files — if chosen: Safe mode is fine, which points away from Windows’s own files, and two recent changes are the better suspects.
- Reinstall Windows, which removes both changes in one step — if chosen: A reinstall removes everything, not just the two changes. Two small undos are left to try.

After the answer: the deciding words are marked. Reason: One change at a time has no exception: you cannot tell which change did it if you undo both, and a change that was not the cause comes out for nothing. Undo one, test, then the other.

#### Question in the draw: l23-k-time

A chat, with its history: "Fay, Dispatch", Chat with the help desk.

> (Fay, Dispatch, at the left) My laptop clock drifts by a few minutes every week. I put in a new firmware battery last month. I correct it by hand each Friday and it drifts again.

A plain table, "What the desk found":

> Where  |  What it shows  (the column heads)
> Date and time settings  |  Time zone right; the last successful sync was nine weeks ago
> Services console  |  Windows Time: stopped; startup type: Disabled

**What is the fix?**
(the options come in an order that depends on the seed of the question)
- Change the Windows Time startup type to Automatic, start it, and press Sync now (right)
- Replace the firmware battery again, since a battery keeps the time — if chosen: The battery is a month old, and the clock holds its date while off. The service is what is stopped.
- Keep correcting the clock by hand each Friday, and tell Fay to do it — if chosen: That is the workaround she already uses. It leaves the stopped service where it is.
- Run sfc /scannow, since the clock settings belong to Windows — if chosen: The table already names the cause: a disabled service. sfc checks Windows files, which are not shown to be damaged.

After the answer: the deciding words are marked. Reason: Time that drifts while the computer runs is Windows keeping time, not the firmware. The Services console shows the Windows Time service disabled, so the fix is its startup type, a start and a sync.

#### Question in the draw: l23-k-full

A chat, with its history: "Gus, Estimating", Chat with the help desk.

> (Gus, Estimating, at the left) Three programs close by themselves in the afternoons, and Windows warns that memory is low. My computer has 8 GB. A big new project started last month, so I have more open than before.

A plain table, "Task Manager, Performance and Processes, 3 PM":

> Reading  |  Value  (the column heads)
> Memory in use  |  7.8 of 8 GB
> Browser  |  3 GB, the same all day
> Spreadsheet and Teams  |  2 GB and 1.5 GB, the same all day
> Any program growing through the day  |  None
> Event Viewer, Application log  |  Out of memory, at each crash

**What is the finding?**
(the options come in an order that depends on the seed of the question)
- Normal work now needs more than 8 GB; add memory (right)
- One program leaks, so update the spreadsheet program — if chosen: No program grows through the day, so there is no leak to update away.
- The computer is infected, so scan it before touching anything else — if chosen: Nothing in the table says so, and all the readings are steady. The memory is full from honest work.
- Windows is damaged, so run sfc /scannow and restart the computer — if chosen: The log says out of memory, not a damaged file. sfc will find nothing to explain it.

After the answer: the deciding words are marked. Reason: Memory full from steady, ordinary programs, with the work grown, is the situation where adding RAM is the right answer. The earlier tests ruled out a leak, so the part is no longer a guess.

#### Question in the draw: l23-k-usb

A chat, with its history: "Ira, Training", Chat with the help desk.

> (Ira, Training, at the left) Since this morning my mouse, keyboard and headset all stopped working on the docking station. Windows installed a driver for the USB controller overnight.

A plain table, "Device Manager":

> Line  |  What it shows  (the column heads)
> USB controller  |  Yellow triangle: not enough USB controller resources. Driver installed last night
> Devices tried alone  |  A single mouse also fails on the docking station
> Roll Back Driver button  |  Available

**What is the smallest way back?**
(the options come in an order that depends on the seed of the question)
- Roll back the USB controller driver, restart, and test the devices (right)
- Unplug everything and plug the devices back in one at a time — if chosen: A single mouse already fails, so adding devices one by one cannot split anything. The new driver is the change.
- Replace the docking station, since the controller is failing — if chosen: The warning followed a driver install, and a roll back is free. A new dock comes after that.
- Reinstall Windows, since the controller has no resources left — if chosen: A resource warning after a driver install is not damage to Windows. The roll back is the small way back.

After the answer: the deciding words are marked. Reason: The warning can come from too many devices or from the driver. One mouse failing rules out too many, and the new driver the night before is the change, so the Roll Back Driver button is the first and smallest way back.

#### Question in the draw: l23-res-svc

A chat, with its history: "Neil, Shipping", Chat with the help desk.

> (Neil, Shipping, at the left) The label service on my computer will not start. A message says it did not start because of a logon failure. It started fine until last week.

A plain table, "The Services console, and the log":

> Where  |  What it shows  (the column heads)
> Services console  |  Label Service: stopped. Startup type: Automatic
> Properties, Log On tab  |  It runs as a service account; the password changed last week

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Open the service’s Log On tab and enter the new password with the account’s owner (right)
- Change the startup type to Manual and start the service by hand each day — if chosen: It would still fail to start. The startup type is not the problem.
- Check the Dependencies tab for another service that must start first — if chosen: The message names a logon failure, not a dependency. This is the cause already ruled out.
- Uninstall the label program and install it again from the desk’s share — if chosen: The program is not damaged. A service that cannot log on needs the right account details.

After the answer: the deciding words are marked. Reason: A service that will not start is read in the Services console and the log. A logon failure after a password change points at the Log On tab of that service. The account’s owner enters the password with the technician; the technician does not take it from the user.

#### Question in the draw: l23-res-hung

A chat, with its history: "Odo, Billing", Chat with the help desk.

> (Odo, Billing, at the left) My report program froze and says Not Responding. Everything else is fine. I do not want to lose the other work I have open.

A plain table, "Task Manager":

> Line  |  What it shows  (the column heads)
> Report program  |  Not responding, using no processor time
> Everything else  |  Responding, memory at 40%

**What do you have Odo do?**
(the options come in an order that depends on the seed of the question)
- End that one program in Task Manager, wait, then reopen it (right)
- Restart the whole computer to clear anything that is stuck — if chosen: The restart would close all of Odo’s open work, though one program is stuck.
- Run sfc /scannow so that Windows files are checked before anything else — if chosen: One program is stuck and everything else works. Windows files are not shown to be damaged.
- Reinstall the report program right now, so it will not hang again — if chosen: A single freeze does not show the program is damaged. Reinstalling costs time for no evidence.

After the answer: the deciding words are marked. Reason: One program against all programs is the first cut. Task Manager shows only that program stuck, so ending that one program is the smallest step. A second freeze is the time to update or repair it.

#### Question in the draw: l23-res-when

A chat, with its history: "Pru, Admissions", Chat with the help desk.

> (Pru, Admissions, at the left) Last Tuesday around 2 PM my computer closed a program and restarted. I want to know what happened and when. Can you look?

Pru’s computer is back at normal. The desk needs the record from last Tuesday.

**Which tool shows it?**
(the options come in an order that depends on the seed of the question)
- Event Viewer: its System and Application logs keep entries with their times (right)
- Task Manager: its Processes list shows everything that happened last Tuesday — if chosen: Task Manager shows what runs right now, not what happened a week ago.
- Device Manager: it lists each part and any error each part had — if chosen: Device Manager shows the state of devices now, with no history of a restart.
- The Services console: it keeps each service’s status for the past week — if chosen: The Services console shows status now. It has no week of history.

After the answer: the deciding words are marked. Reason: The question is what happened and when, a week ago. Only Event Viewer keeps entries with their times. The other tools show how things stand now.

#### Question in the draw: l21-p-map

A chat, with its history: "Lena, Sales", Chat with the help desk.

> (Lena, Sales, at the left) I need the Sales folder on the file server to show up as drive Z: on my laptop. The server is called fileserver and the shared folder is Sales.

**Which command does that?**
(the options come in an order that depends on the seed of the question)
- Type net use Z: \\fileserver\Sales (right)
- Type cd Z: \\fileserver\Sales to move to the folder — if chosen: cd moves around folders the computer already has. It does not create a drive letter.
- Type dir \\fileserver\Sales to open it as drive Z: — if chosen: dir lists a folder but gives it no drive letter.
- Type netstat Z: \\fileserver\Sales to list the connection — if chosen: netstat lists connections and ports. It does not make one.

After the answer: the deciding words are marked. Reason: Mapping a drive letter to a shared folder is the job of net use. The pattern is net use, the letter, then the server and share name; net use alone lists what is mapped and /delete removes one.

#### Question in the draw: l21-s-netstat

A chat, with its history: "Gus, Web team", Chat with the help desk.

> (Gus, Web team, at the left) Staff say the web page on the server SRV2 will not open. I am on SRV2. Is the web service even waiting for visitors?

A plain table, "C:\> netstat -an":

> What the computer prints  (the column heads)
>   Proto  Local Address          Foreign Address        State
>   TCP    0.0.0.0:135            0.0.0.0:0              LISTENING
>   TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
>   TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING
>   TCP    192.168.1.20:3389      192.168.1.55:50412     ESTABLISHED

**What does this show about the web service?**
(the options come in an order that depends on the seed of the question)
- Nothing is listening on port 80 or 443 on SRV2 (right)
- It is running: a connection shows as ESTABLISHED in the list — if chosen: The established connection is on port 3389, remote desktop, not the web.
- The firewall on SRV2 is blocking port 443 for every visitor — if chosen: netstat shows what the computer is doing, not what a firewall does. No firewall evidence is on the screen.
- The server has no network connection at all, so nothing can reach it — if chosen: The list shows a live connection from 192.168.1.55, so the network works.

After the answer: the deciding words are marked. Reason: netstat -an lists each port the computer is waiting on (LISTENING) and each open conversation (ESTABLISHED). The web uses port 80 or 443 and neither is listed, so the service may be stopped or listening elsewhere, and the next step is to look at the service.

#### Question in the draw: l21-s-netuse

A chat, with its history: "Rae, Sales", Chat with the help desk.

> (Rae, Sales, at the left) The Y: drive on my laptop shows a red X. Z: works fine.

A plain table, "C:\> net use":

> What the computer prints  (the column heads)
> Status       Local   Remote                     Network
> -------------------------------------------------------------
> OK           Z:      \\fileserver\Sales         Microsoft Windows Network
> Unavailable  Y:      \\fileserver\Archive       Microsoft Windows Network

**What does it show?**
(the options come in an order that depends on the seed of the question)
- The Archive share does not answer, while Z: on the same server works; look at that share first (right)
- The laptop has lost the network connection, so restart the laptop — if chosen: Z: is OK on the same server. The network is working.
- The mapping was deleted from the laptop, so map the drive again — if chosen: Y: is still listed. It is marked Unavailable, which is different from missing.
- The whole file server is down, so restart the server for everyone — if chosen: Z: reaches the same server, and a restart would cut off everyone using it.

After the answer: the deciding words are marked. Reason: Z: is OK and Y: is Unavailable on the same server, which cuts the problem in half: the laptop and the server are fine and the Archive share is the one that does not answer. Check that share’s state and permissions.

#### Question in the draw: l21-g-flush

A chat, with its history: "Abe, Support", Chat with the help desk.

> (Abe, Support, at the left) The intranet site moved to a new server this morning. nslookup gives me the new address, but my browser still goes to the old one. Everyone else is fine.

**Which command empties the saved name answers?**
(the options come in an order that depends on the seed of the question)
- ipconfig /flushdns (right)
- ipconfig /release, then ipconfig /renew — if chosen: That gives the address back and requests another. The saved name answers stay.
- gpupdate /force — if chosen: That refreshes Group Policy, not the name answers.
- netstat -an — if chosen: netstat lists connections and ports. It changes nothing.

After the answer: the deciding words are marked. Reason: The fresh lookup is right and the browser is wrong, so the computer is holding an old saved answer. ipconfig /flushdns empties that DNS cache, one change that can be undone by simply looking up again.

#### Question in the draw: l21-k-netstat

A chat, with its history: "Ola, Security", Chat with the help desk.

> (Ola, Security, at the left) A manager saw a strange program send data out. One connection on this computer goes to 203.0.113.99. Which program is behind it?

A plain table, "C:\> netstat -ano":

> What the computer prints  (the column heads)
>   Proto  Local Address          Foreign Address        State           PID
>   TCP    192.168.1.42:50188     203.0.113.99:443       ESTABLISHED     5124
>   TCP    192.168.1.42:50201     203.0.113.20:443       ESTABLISHED     3380

**What is the next step to name the program?**
(the options come in an order that depends on the seed of the question)
- Look up process ID 5124 on Task Manager’s Details tab, the one on that line (right)
- Run tracert 203.0.113.99, where each router on the way names the program — if chosen: tracert lists the routers on the way. It says nothing about which program on this computer is talking.
- Run ipconfig /all, where the adapter lists the program using each connection — if chosen: ipconfig /all prints the adapter’s settings, not the programs that use the connection.
- Look up process ID 3380 on Task Manager’s Details tab, the last to connect — if chosen: The row to 203.0.113.99 ends in 5124. 3380 belongs to the other connection.

After the answer: the deciding words are marked. Reason: The PID column ties each connection to a running program. The line to 203.0.113.99 ends in 5124, so that process is the one to look up in Task Manager; the other line is a different program.

#### Question in the draw: l21-k-netuse

The question, read aloud as above: **Which command connects a drive letter, such as Z:, to a shared folder on a server?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - net use

After the answer: Reason: net use maps a drive letter to a shared folder: net use Z: \\fileserver\Sales. net use alone lists the mappings.

#### Question in the draw: l21-r-netstat-pid

A chat, with its history: "Dev, Security", Chat with the help desk.

> (Dev, Security, at the left) The antivirus flagged a connection from this computer to 203.0.113.77 and I need the program behind it. I have the netstat output, but it only shows addresses.

**Which switch adds the process ID of each connection?**
(the options come in an order that depends on the seed of the question)
- netstat -ano, where the o adds the process ID (right)
- netstat -an, where the n adds the process ID — if chosen: -n only shows numbers instead of names. It adds no process ID.
- netstat /?, which prints the process ID of every connection — if chosen: /? prints help for the command. It lists no connections.
- tracert 203.0.113.77, which names the program on the way — if chosen: tracert lists routers, not the programs on this computer.

After the answer: the deciding words are marked. Reason: netstat -a lists all connections and listening ports, -n shows numbers, and -o adds the PID, the process ID of the program behind each line.

#### Question in the draw: l21-r-netuse-delete

A chat, with its history: "Ruth, Finance", Chat with the help desk.

> (Ruth, Finance, at the left) My Y: drive points to a share that no longer exists. I want the letter gone from my computer so I can use it for a USB drive.

**Which command removes the mapping?**
(the options come in an order that depends on the seed of the question)
- net use Y: /delete (right)
- rmdir Y: to take the letter away — if chosen: rmdir removes folders. It does not remove the mapping.
- format Y: /q to clear the letter — if chosen: format would erase what the mapping points at, if it let Ruth.
- netstat Y: to drop the connection — if chosen: netstat lists connections. It cannot remove one.

After the answer: the deciding words are marked. Reason: net use Y: /delete removes only the mapping. The files on the server are untouched.

#### Question in the draw: l21-r-netstat

The question, read aloud as above: **Which command lists a computer’s open connections and the ports it is waiting on?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - netstat

After the answer: Reason: netstat lists the connections (ESTABLISHED) and the ports waiting for one (LISTENING). -a shows all, -n shows numbers, -o adds the process ID.

#### Question in the draw: l21-w-dana

A chat, with its history: "Dana, Accounting", Chat with the help desk.

> (Dana, Accounting, at the left) My D: drive, where all of last year’s invoices are, will not open. It says the file or directory is corrupted and unreadable. I have no other copy. My cousin says to just format it and start clean.

Commands you can use: robocopy, chkdsk, format. A working USB drive, E:, is plugged in with plenty of room.

**Which step comes first?**
(the options come in an order that depends on the seed of the question)
- Copy off what can still be read, to the working USB drive (right)
- Format D: so the drive is clean, then start the year’s invoices again — if chosen: Format erases every invoice on the drive, and it is the one command that can never be right while the files exist only here.
- Run chkdsk D: /r first, which repairs the drive and recovers the data — if chosen: A repair run changes the drive, and a long scan of a damaged one can lose files. The copy comes first.
- Tell Dana the drive is dead and order a new one — if chosen: Nothing has shown the drive is dead, and a new one would not bring the invoices back.

After the answer: the deciding words are marked. Reason: The only copy of the invoices was on the drive, so the files were protected before anything else, and the favorite fix, format, was kept out. A read-only chkdsk then showed file system errors rather than a failing drive, and a single /f repair, one change at a time, fixed them.
The working:
- Take the story and the guess. Dana has the only copy, and Dana’s cousin’s guess is format.: Format erases the drive and is aimed at the files that matter most. The guess is put aside until the files are safe.
- Protect the data first: robocopy D:\ E:\Rescue /e /r:1 /w:1 in an administrator window.: robocopy copies every folder it can read, and with one retry and one second of waiting it does not stall on a bad file. The report says 1,904 files copied, 0 failed. A drive failing under the read would have shown failed files. System Volume Information and $RECYCLE.BIN may show as failures; they are not Dana’s files.
- Test the other favorite cause, a failing drive, with the cheapest read-only check: chkdsk D: with no switches.: It prints “Errors found. CHKDSK cannot continue in read-only mode.” The file system has errors, and every file still read, so the drive itself is not shown to be failing. Replacing it is not supported by anything seen.
- One change: chkdsk D: /f, in the administrator window.: chkdsk fixes the file system errors it found and reports it is done. Nothing else was changed at the same time.
- Check with Dana, then write it up.: D: opens and the invoices are there. Dana confirms. The note holds Dana’s words, the error text, the copy to E:, the read-only report and the /f repair; the rescue copy stays until she says she is happy.

#### Question in the draw: l21-p-chkdsk

A chat, with its history: "Ravi, Operations", Chat with the help desk.

> (Ravi, Operations, at the left) My second drive, E:, keeps saying files are unreadable. I copied my work off it this morning.

A plain table, "C:\> chkdsk E:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Stage 1: Examining basic file system structure ...
> Errors found.  CHKDSK cannot continue in read-only mode.

**The work is copied off. Which command fixes the errors?**
(the options come in an order that depends on the seed of the question)
- Run chkdsk E: /f, which fixes the file system errors it finds (right)
- Run chkdsk E: again; a second read-only pass may fix them — if chosen: A read-only pass changes nothing, so it will print the same report.
- Run format E: /q, which clears the errors by erasing the drive — if chosen: The drive can be repaired, so erasing it does more than the job needs.
- Run sfc /scannow, which repairs the files on every drive it finds — if chosen: sfc checks Windows’ own system files, not another drive’s file system.

After the answer: the deciding words are marked. Reason: Errors found in read-only mode is chkdsk saying it saw damage and was not allowed to fix it. chkdsk E: /f, in an administrator window, repairs the file system. The files were copied off first, so a repair is safe to try.

#### Question in the draw: l21-s-format

A chat, with its history: "Mo, Intern", Chat with the help desk.

> (Mo, Intern, at the left) A tech guide told me to type format D: to fix a drive that is slow. I typed it, and Windows now asks me a question. I have not answered.

A plain table, "C:\> format D:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> WARNING, ALL DATA ON NON-REMOVABLE DISK
> DRIVE D: WILL BE LOST!
> Proceed with Format (Y/N)?

**What do you tell Mo?**
(the options come in an order that depends on the seed of the question)
- Answer N and close the window; a format cannot be undone (right)
- Answer Y; the warning is only Windows being extra careful — if chosen: The warning is exact: the format erases everything on D:.
- Answer Y, then restore the files from the Recycle Bin afterward — if chosen: A format does not send files to the Recycle Bin. They are gone from the drive.
- Wait until the drive is no longer slow, then answer Y at last — if chosen: Waiting does not change what the question does. A slow drive and an erase are separate matters.

After the answer: the deciding words are marked. Reason: The prompt says ALL DATA ON DRIVE D: WILL BE LOST. A command-line format has no undo and no Recycle Bin. Answering N cancels it; then find why the drive is slow with a read-only check, after the files are safe.

#### Question in the draw: l21-s-diskpart

A chat, with its history: "Ned, Facilities", Chat with the help desk.

> (Ned, Facilities, at the left) Please clear the USB stick from the old training room so the next person gets an empty one. Its owner says nothing on it is needed. File Explorer shows the stick as 58 GB. It is plugged into a laptop with one internal drive.

A plain table, "DISKPART> list disk":

> What the computer prints  (the column heads)
>   Disk ###  Status         Size     Free     Dyn  Gpt
>   --------  -------------  -------  -------  ---  ---
>   Disk 0    Online          476 GB      0 B        *
>   Disk 1    Online           58 GB      0 B

**What do you do before typing clean?**
(the options come in an order that depends on the seed of the question)
- Type select disk 1, then check its size and volumes again (right)
- Type select disk 0, because the first disk listed is the removable one — if chosen: Disk 0 is 476 GB and holds Windows. Position does not say which disk is the stick; size does.
- Type clean now; diskpart picks the removable disk on its own — if chosen: clean works on the selected disk only. With none selected it stops with an error.
- Type format C: /q on it; new disks are always called C: — if chosen: C: is the laptop’s own drive, not the stick, so the command is aimed at the wrong thing.

After the answer: the deciding words are marked. Reason: clean removes the partitions from whichever disk is selected, so the number matters more than the command. Tell the disks apart by size: 58 GB is the stick, and 476 GB is the laptop’s drive. Select it, check with detail disk or list volume, and only then clean.

#### Question in the draw: l21-s-chkdsk-c

A chat, with its history: "Uma, Finance", Chat with the help desk.

> (Uma, Finance, at the left) Windows said my computer’s main drive has errors. I ran chkdsk C: /f in an administrator window and it printed a question I do not understand.

A plain table, "C:\> chkdsk C: /f":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Cannot lock current drive.
> Chkdsk cannot run because the volume is in use by another process.
> Would you like to schedule this volume to be checked
> the next time the system restarts? (Y/N)

**What does the question mean, and what do you tell Uma?**
(the options come in an order that depends on the seed of the question)
- The drive is in use, so copy the important files off, answer Y and restart (right)
- The drive is too damaged for chkdsk to read, so answer N and replace it — if chosen: Nothing here says the drive is damaged beyond repair. It only says the drive is in use.
- The command needs a different switch, so type chkdsk C: /r and try again — if chosen: /r includes /f and would stop at the same question.
- The window is not running as administrator, so open it again as one — if chosen: That error reads “Access is denied”. This message is about the drive being in use.

After the answer: the deciding words are marked. Reason: “Cannot lock current drive” means the volume is in use, and the drive Windows runs from always is. Answering Y schedules the check for the next start-up. This is a different message from the one an ordinary window gives for a command that needs an administrator.

#### Question in the draw: l21-s-chkdsk-r

A chat, with its history: "Joy, Records", Chat with the help desk.

> (Joy, Records, at the left) My laptop has been clicking and slow since this morning, and some files will not open. I have not backed anything up.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Copy the important files off now, then replace the drive (right)
- Run chkdsk C: /r first to recover whatever it can read — if chosen: It would read a failing drive for hours and may be the last thing it does. The copy comes first, and /r is not the fix for a clicking drive.
- Format the drive and reinstall Windows, to start with a clean one — if chosen: A format erases the files that have not been backed up.
- Run sfc /scannow; clicking means damaged Windows files — if chosen: Clicking is a sound the drive makes. sfc checks Windows’ files, not the drive.

After the answer: the deciding words are marked. Reason: Clicking and unreadable files point at the drive, and there is no backup. Move 3 comes first: protect the data. A clicking drive is replaced, not repaired, and chkdsk /r is a long read of a drive that is failing.

#### Question in the draw: l21-x-call

Rob in Purchasing calls the help desk. You answer.

**Rob’s D: drive will not open. What do you say?**
- An incoming call from "Rob, Purchasing" (Incoming call · 2:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My D: drive says it is unreadable. My nephew says just format it and the problem goes away." [pushes: Rob wants the quickest fix and has a plan ready.]
  - reply "Is there a copy of what is on D: anywhere else?": goes on to turn 2, where the pressure comes back
  - reply "Your nephew is right. Type format D: and press Y.": the call ends (not this one): Format erases the drive, and it holds the only copy of two years of orders. [slip: ran a command that erases data before the data was safe or needed erasing]
  - reply "What exact error words does the drive show, and did it start after a power cut or a bump?": the call ends (not this one): The exact words are worth having later, but the question that decides the order is whether the files exist anywhere else. [slip: replaced a part before the cheap check]
  - reply "I am sorry, that must be worrying. Let me connect to your computer now and run chkdsk D: /r on it, and I will tell you what it finds.": the call ends (not this one): A repair run changes the drive, and a long scan of a damaged one can lose files. Nothing was copied off first. [slip: touched the machine before protecting data that has no other copy]
- turn 2, the other side says: "No. It is all on D:. Two years of purchase orders." [pushes: Rob is worried now.]
  - reply "I will copy off what can be read first, then run chkdsk with no switches.": the call ends (right): The only copy is protected before anything is changed, and the read-only check shows what is wrong without touching it.
  - reply "Then format will have to do after all.": the call ends (not this one): Format erases the drive, and it holds the only copy of two years of orders. [slip: ran a command that erases data before the data was safe or needed erasing]
  - reply "I understand, two years of orders is a lot to lose. We will run chkdsk /f first, which repairs a drive without erasing anything, and see whether the orders open.": the call ends (not this one): A repair run changes the drive, and a long scan of a damaged one can lose files. Nothing was copied off first. [slip: touched the machine before protecting data that has no other copy]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Move 3: protect their data before touching anything. One question, whether the files exist anywhere else, decides the order: copy, then a read-only check, then at most one repair.

#### Question in the draw: l21-r-chkdsk

The question, read aloud as above: **Which command checks a drive’s file system for errors and, with /f, fixes them?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - chkdsk

After the answer: Reason: chkdsk reads a drive’s file system. With no switch it only reports, /f fixes the errors it finds, and /r also hunts for bad sectors.

#### Question in the draw: l21-g-destroy

A chat, with its history: "Lou, Intern", Chat with the help desk.

> (Lou, Intern, at the left) My guide lists commands. Which of these make files vanish with no Recycle Bin and no undo in Windows?

**Pick every command that can.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- format D: /q (right)
- rmdir /s /q C:\OldReports (right)
- diskpart, then clean (right)
- robocopy C:\Docs E:\Backup /mir (right)
- dir C:\Docs /s — if chosen: dir only lists files.
- gpresult /r — if chosen: gpresult only reports which policies applied.

After the answer: Reason: format erases a drive, rmdir /s removes a folder and everything in it, diskpart clean wipes a disk’s partitions, and robocopy /mir deletes from the destination what the source no longer has. Special recovery tools may bring back some files after a quick format or a clean, but Windows has no undo. dir and gpresult only read.

#### Question in the draw: l21-k-diskpart

A chat, with its history: "Bea, Depot", Chat with the help desk.

> (Bea, Depot, at the left) The USB stick for installs held client contracts on its last job, and its owner agrees the contents can go. I ran select disk 2, the 58 GB one, then clean, and Windows now shows the stick as empty. Is it wiped for the next job?

**Is the stick wiped?**
(the options come in an order that depends on the seed of the question)
- Not fully: clean removed the partitions, and tools can still recover the contracts; clean all zeroes every sector (right)
- Yes: Windows sees nothing on it and nothing is left to recover — if chosen: Windows sees nothing because the partition information is gone. The data is still on the disk until it is written over.
- Not fully: run format E: /q, which overwrites the files — if chosen: A quick format also leaves the data in place. Only a format without /q, or clean all, writes zeros.
- Yes, once the stick is unplugged and plugged in again — if chosen: Plugging it in again changes nothing on the disk.

After the answer: the deciding words are marked. Reason: clean removes the partitions from the selected disk, so Windows sees an empty disk, but the contracts can be recovered with tools. A real wipe is clean all (zeros every sector) or destroying the stick.

#### Question in the draw: l21-k-chkdsk

A chat, with its history: "Cy, Logistics", Chat with the help desk.

> (Cy, Logistics, at the left) One file on my D: drive will not open, but the other files do. I ran chkdsk D: and pasted what it said.

A plain table, "C:\> chkdsk D:":

> What the computer prints  (the column heads)
> The type of the file system is NTFS.
> Stage 1: Examining basic file system structure ...
> Windows has scanned the file system and found no problems.
> No further action is required.

**What does this tell you, and what next?**
(the options come in an order that depends on the seed of the question)
- The file system is sound (bad sectors were not tested); test the file, its program and its permissions (right)
- Run chkdsk D: /f anyway; there must be something wrong with the drive — if chosen: /f repairs errors it finds. It found none, so the repair has nothing to change.
- Format D: to be sure the drive is clean, then copy the file back — if chosen: The other files on D: open, and a format would erase them for a problem with one file.
- Run sfc /scannow, which also checks the files on the D: drive — if chosen: sfc checks Windows’ own files, not the files on another drive.

After the answer: the deciding words are marked. Reason: “Found no problems” is the all-clear for D:’s file system. One file that will not open while the rest do points at that file, the program opening it or the permissions on it, so test those next with the cheapest test.

#### Question in the draw: l21-r-format-q

A chat, with its history: "Gil, Depot", Chat with the help desk.

> (Gil, Depot, at the left) I have to reformat a 4 GB USB stick for reuse. I typed format E: and it is taking a long while. A colleague says there is a faster switch.

**Which switch does a quick format?**
(the options come in an order that depends on the seed of the question)
- /q, which skips the full check of the drive (right)
- /f, which makes the format finish earlier — if chosen: /f is how chkdsk fixes errors. It is not the quick switch of format.
- /r, which formats only the readable parts — if chosen: /r is how chkdsk looks for bad sectors. It is not the quick switch of format.
- /s, which includes the subfolders and goes faster — if chosen: /s is how dir and rmdir take in subfolders. It is not the quick switch of format.

After the answer: the deciding words are marked. Reason: format /q is the quick format: the drive looks empty but the old data stays recoverable. Without /q the drive is overwritten with zeros. Either way the drive letter is confirmed first.

#### Question in the draw: l21-r-chkdsk-r

The question, read aloud as above: **Which chkdsk switch looks for bad sectors, recovers what it can read, and includes the fixing that /f does? Type the switch.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - [chkdsk] /r

After the answer: Reason: /r locates bad sectors and recovers readable data. It includes /f and takes a long time, so a drive that may be failing is copied first.

#### Question in the draw: l21-r-diskpart-after

A chat, with its history: "Una, Depot", Chat with the help desk.

> (Una, Depot, at the left) I selected the right disk in diskpart and typed clean. Now Disk Management shows the disk as Not Initialized. I want it to be a usable E: drive again.

**What comes next in diskpart?**
(the options come in an order that depends on the seed of the question)
- create partition primary, format fs=ntfs quick, assign letter=E (right)
- select disk 0, then clean again to be sure it is empty — if chosen: The disk is already empty. Disk 0 may be the Windows drive.
- chkdsk E: /f, to find the missing drive — if chosen: There is no E: yet. chkdsk checks a drive that exists.
- sfc /scannow, to restore the partition from Windows’ copy — if chosen: sfc checks Windows’ system files. It does not make partitions.

After the answer: the deciding words are marked. Reason: After clean, Windows sees no partitions (the data itself is not erased). create partition primary makes a partition across it, format puts a file system on it, and assign gives it a letter.

#### Question in the draw: l21-p-copy

A chat, with its history: "Omar, Design", Chat with the help desk.

> (Omar, Design, at the left) Each evening I must copy my whole Projects folder, with all its subfolders, to the server share. The Wi-Fi drops now and then, and the copy I use gives me no list of what got there.

**Which command fits?**
(the options come in an order that depends on the seed of the question)
- robocopy C:\Projects \\fileserver\Backup /e /r:3 /w:5 (right)
- copy C:\Projects \\fileserver\Backup /v, then check the result — if chosen: copy takes the files of one folder, not the subfolders, and has no retry setting or summary.
- md \\fileserver\Backup\Projects, then drop the files in — if chosen: md only makes an empty folder. Nothing would be copied into it.
- dir C:\Projects /s, then copy what it lists by hand — if chosen: dir only lists what is there. It copies nothing.

After the answer: the deciding words are marked. Reason: The job is a whole folder tree, over a connection that sometimes drops. robocopy does this: /e includes subfolders, /r:3 /w:5 limits retries to three, five seconds apart, and its report names any file that failed.

#### Question in the draw: l21-s-rmdir

A chat, with its history: "Cal, Facilities", Chat with the help desk.

> (Cal, Facilities, at the left) I typed rmdir C:\OldReports to clear it out and got an error. How do I make it go?

A plain table, "C:\> rmdir C:\OldReports":

> What the computer prints  (the column heads)
> The directory is not empty.

**What does the message mean, and what next?**
(the options come in an order that depends on the seed of the question)
- Something is inside it; look with dir first, then use rmdir /s only if it can all go (right)
- Windows has locked the folder for now, so restart the computer and try again — if chosen: The message says the folder has contents, not that it is locked.
- Run rmdir /s /q right away; the folder is old and nobody uses it — if chosen: Old does not mean unneeded. /s /q deletes everything inside without asking, and without the Recycle Bin.
- Use md C:\OldReports again to make the folder empty first — if chosen: md makes a new folder. It does not empty an existing one.

After the answer: the deciding words are marked. Reason: “The directory is not empty” is rmdir refusing to remove a folder that still holds files. dir shows what is inside. rmdir /s would remove it all at once and skip the Recycle Bin, so it comes after a look.

#### Question in the draw: l21-s-robo

A chat, with its history: "Sue, Archive", Chat with the help desk.

> (Sue, Archive, at the left) I run robocopy C:\Docs E:\Backup /mir every Friday. Last Wednesday I deleted a folder from C:\Docs by mistake, and after the Friday run it is also gone from the backup. This is that Friday’s output.

A plain table, "C:\> robocopy C:\Docs E:\Backup /mir":

> What the computer prints  (the column heads)
>                Total    Copied   Skipped  Mismatch    FAILED    Extras
>     Dirs :        41         0        41         0         0         1
>    Files :      1260         0      1260         0         0       212

**What happened?**
(the options come in an order that depends on the seed of the question)
- /mir makes the backup an exact mirror, so it deleted what the source lacked (right)
- robocopy lost the files while copying them, so run it again with /z — if chosen: /z lets a copy resume. It would not bring back files the mirror removed.
- The drive E: is failing and dropped the folder on its own — if chosen: FAILED is 0 and nothing read badly. The Extras line shows the removal.
- Windows moved them to the Recycle Bin, so restore them from there — if chosen: Command-line deletes skip the Recycle Bin.

After the answer: the deciding words are marked. Reason: /mir copies and then deletes from the destination anything not in the source. 212 files and 1 folder in the Extras column are exactly what Sue deleted from C:\Docs. /e would have copied without deleting.

#### Question in the draw: l21-s-cd

A chat, with its history: "Wes, Intern", Chat with the help desk.

> (Wes, Intern, at the left) I am in C:\Users\wes. I typed cd D:\Data and the prompt still says C:. Where am I?

A plain table, "C:\Users\wes> cd D:\Data":

> What the computer prints  (the column heads)
> C:\Users\wes>

**How does Wes get to D:\Data?**
(the options come in an order that depends on the seed of the question)
- Type cd /d D:\Data to switch the drive too (right)
- Type dir D:\Data, which takes Wes into the folder — if chosen: dir lists a folder. It never moves the prompt.
- Type D:\Data on its own line — if chosen: A path alone is not a command. To switch drives, type the letter and a colon.
- Type cd .. twice, to go up to the top of the tree — if chosen: Going up stays on C:, so it cannot reach D:.

After the answer: the deciding words are marked. Reason: Each drive remembers its own current folder, and plain cd only changes that memory. cd /d D:\Data moves the prompt there. Typing D: and then cd \Data does the same in two steps.

#### Question in the draw: l21-g-dir

A chat, with its history: "Nia, Legal", Chat with the help desk.

> (Nia, Legal, at the left) I need a list of everything in C:\Contracts, including files someone marked hidden. Which command prints it?

**Which command?**
(the options come in an order that depends on the seed of the question)
- dir C:\Contracts /a (right)
- dir C:\Contracts /w — if chosen: /w only lays the names out across the screen; hidden files stay hidden.
- dir C:\Contracts /s — if chosen: /s adds the subfolders, but hidden files are still left out.
- cd C:\Contracts /a — if chosen: cd changes folder. It prints no list.

After the answer: the deciding words are marked. Reason: dir lists a folder, and each switch changes one thing about the listing. /a adds hidden and system files, /s the subfolders and /w the layout.

#### Question in the draw: l21-k-robo

A chat, with its history: "Tia, Studio", Chat with the help desk.

> (Tia, Studio, at the left) I want my E: backup to hold everything in C:\Work, including subfolders. A file I delete from C:\Work must never disappear from E:\Backup.

**Which command fits?**
(the options come in an order that depends on the seed of the question)
- robocopy C:\Work E:\Backup /e (right)
- robocopy C:\Work E:\Backup /mir — if chosen: /mir deletes from the backup whatever is no longer in C:\Work, the opposite of Tia’s rule.
- copy C:\Work E:\Backup — if chosen: copy takes the files of one folder, not the subfolders.
- rmdir /s E:\Backup, then copy C:\Work to it — if chosen: That deletes the old backup first, then copies. Nothing is kept from before.

After the answer: the deciding words are marked. Reason: The two needs are subfolders included and nothing deleted from the backup. robocopy /e does both; /mir deletes extras, copy skips subfolders, and deleting the backup first loses it.

#### Question in the draw: l21-k-dirfree

A chat, with its history: "Cara, Studio", Chat with the help desk.

> (Cara, Studio, at the left) I need to put a 300 GB video backup on C:. Does it fit? I ran dir in the folder where I want to put it.

A plain table, "C:\> dir C:\Contracts":

> What the computer prints  (the column heads)
>  Directory of C:\Contracts
> 10/02/2026  09:14 AM    <DIR>          2026
> 10/02/2026  09:15 AM            48,210 notes.txt
>                1 File(s)         48,210 bytes
>                1 Dir(s)  412,318,203,904 bytes free

**Does it fit?**
(the options come in an order that depends on the seed of the question)
- Yes: the last line shows about 384 GB free on the drive (right)
- No: the line before it shows only 48,210 bytes — if chosen: 48,210 bytes is the size of the files in this folder. Free space is the line below it.
- No: dir shows only one folder, so only one folder’s worth fits — if chosen: The count of folders is what is inside C:\Contracts. It does not limit the drive.
- It cannot be told from dir; run chkdsk to find the free space — if chosen: dir already prints the free space, and chkdsk checks a drive’s file system.

After the answer: the deciding words are marked. Reason: dir ends with a count of the files and folders in that directory and the free space left on the drive. 412,318,203,904 bytes is 384 GB, more than the 300 GB backup needs.

#### Question in the draw: l21-r-md

A chat, with its history: "Pat, Admin", Chat with the help desk.

> (Pat, Admin, at the left) I need the folders C:\Reports\2026\March made before a user arrives. None of the three exists yet.

**Which command makes all three?**
(the options come in an order that depends on the seed of the question)
- md C:\Reports\2026\March, which also makes the missing folders (right)
- cd C:\Reports\2026\March, which makes the path as it goes there — if chosen: cd only moves into folders that already exist.
- rmdir C:\Reports\2026\March, which makes it ready for the user — if chosen: rmdir removes folders. It never makes one.
- dir C:\Reports\2026\March, which makes the path to look at — if chosen: dir lists a folder. It makes nothing.

After the answer: the deciding words are marked. Reason: md means make directory, and a directory is a folder. With the path typed in full it makes every missing folder in it.

#### Question in the draw: l21-r-dir-s

A chat, with its history: "Ed, Legal", Chat with the help desk.

> (Ed, Legal, at the left) I need every file named contract.pdf somewhere under C:\Contracts, in any subfolder. File Explorer is too slow on this old machine.

**Which switch makes dir look in the subfolders too?**
(the options come in an order that depends on the seed of the question)
- dir C:\Contracts\contract.pdf /s (right)
- dir C:\Contracts\contract.pdf /a — if chosen: /a adds hidden and system files. It does not search subfolders.
- dir C:\Contracts\contract.pdf /w — if chosen: /w only changes how the names are laid out.
- cd C:\Contracts\contract.pdf /s — if chosen: cd changes folder. It does not search.

After the answer: the deciding words are marked. Reason: dir /s walks into every subfolder. /a is hidden files and /w is the wide layout.

#### Question in the draw: l21-r-robocopy

The question, read aloud as above: **Which command copies whole folder trees, retries failed files, skips what is already the same, and prints a summary at the end?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - robocopy

After the answer: Reason: robocopy, robust file copy, is built for folders: it retries, copies only the changes on a second run, and reports copied, skipped, failed and extra.

#### Question in the draw: l21-p-who

A chat, with its history: "Tess, Reception", Chat with the help desk.

> (Tess, Reception, at the left) The help desk form wants the name of my computer. I have no idea where to find that.

**Which command prints it?**
(the options come in an order that depends on the seed of the question)
- hostname (right)
- whoami — if chosen: whoami prints the signed-in account, not the computer.
- winver — if chosen: winver shows the Windows edition and version, not the computer’s name.
- net user — if chosen: net user lists the accounts on the computer.

After the answer: the deciding words are marked. Reason: The ticket needs the name of the machine, and hostname prints exactly that. whoami names the account and winver names the Windows version, which are different facts.

#### Question in the draw: l21-s-sfc

A chat, with its history: "Kofi, IT manager", Chat with the help desk.

> (Kofi, IT manager, at the left) A user’s Windows keeps crashing since an update. I ran sfc /scannow and pasted what it printed.

A plain table, "C:\Windows\system32> sfc /scannow":

> What the computer prints  (the column heads)
> Beginning system scan.  This process will take some time.
> Beginning verification phase of system scan.
> Verification 100% complete.
> Windows Resource Protection found corrupt files but was unable to fix some of them.
> Details are included in the CBS.Log windir\Logs\CBS\CBS.log.

**What does this tell you?**
(the options come in an order that depends on the seed of the question)
- Some system files stay damaged; put the CBS.log name on the ticket, then replace the named file by hand or hand it on (right)
- The scan did not finish, so run sfc /scannow again until it says no problems at all — if chosen: It finished: verification reached 100 percent. A repeat is likely to say the same, and the log already has the names.
- Windows is fine; the corrupt files message is only a warning that can be ignored — if chosen: It says some files are damaged and unrepaired, and that is the finding.
- The hard drive is failing under the scan, so replace it now — if chosen: sfc checks system files. Damaged ones do not show the drive is at fault.

After the answer: the deciding words are marked. Reason: sfc /scannow has three endings, and this is the third: damage it could not fix. The scan completed. Writing the CBS.log name on the ticket keeps the evidence, and the named files are replaced by hand or the ticket goes on, because the same scan is unlikely to change.

#### Question in the draw: l21-s-gpresult

A chat, with its history: "Ina, HR", Chat with the help desk.

> (Ina, HR, at the left) The Finance mapped drives policy should give every Finance computer the drive F:. This user is in Finance and has no F:.

A plain table, "C:\> gpresult /r":

> What the computer prints  (the column heads)
> USER SETTINGS
>     Applied Group Policy Objects
>         Default Domain Policy
>     The following GPOs were not applied because they were filtered out
>         Finance Mapped Drives
>             Filtering:  Denied (Security)

**What does it show?**
(the options come in an order that depends on the seed of the question)
- It was filtered out for this user; check who the policy is allowed to cover (right)
- The policy has not refreshed yet, so gpupdate /force will apply it to this user — if chosen: A refresh would not help: the report says the policy was denied to this user, not that it was late.
- The computer never reached the server, so no policy applied at all to anyone — if chosen: The Default Domain Policy did apply, so the computer did reach the server.
- The policy applied, but F: is already taken by a USB stick plugged in — if chosen: The policy is listed as filtered out, not as applied.

After the answer: the deciding words are marked. Reason: gpresult /r lists the policies that applied and the ones filtered out, with the reason. Finance Mapped Drives is under “not applied”, with the filtering denied by security, so the fix is in who the policy covers.

#### Question in the draw: l21-s-netuser

A chat, with its history: "Fern, Warehouse", Chat with the help desk.

> (Fern, Warehouse, at the left) Hi, it is Fern. My sign-in has not worked since Monday. Please turn my account back on right now, I have a delivery to log.

A plain table, "C:\> net user fern":

> What the computer prints  (the column heads)
> User name                    fern
> Full Name                    Fern Ortiz
> Account active               No
> Account expires              Never
> Password last set            10/5/2026 7:41:12 AM
> Local Group Memberships      *Users

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Confirm it is Fern by the desk’s own check, such as the number on file, and read the ticket history for why it is off (right)
- Run net user fern /active:yes now; the output shows what is wrong — if chosen: The output shows what is wrong, not who is calling. The check comes first.
- Run net user fern * and give Fern a new password over the phone — if chosen: A password reset for an unchecked caller is worse. The caller must be confirmed first.
- Run net user fern /delete and make Fern a new account — if chosen: Deleting the account loses its identity, and the old files would not belong to the new one.

After the answer: the deciding words are marked. Reason: The fault is plain: Account active: No. But before an unlock, a reset or access, the technician confirms the caller by something the caller did not supply, such as the number on file or the directory. Then net user fern /active:yes is one change.

#### Question in the draw: l21-r-gpupdate

The question, read aloud as above: **Which command, with the /force switch, reapplies every Group Policy setting on a computer right now?**

**Type the command.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpupdate /force

After the answer: Reason: gpupdate refreshes Group Policy. /force reapplies every policy, not only the ones that changed.

#### Question in the draw: l21-g-elevate

A chat, with its history: "Ben, Marketing", Chat with the help desk.

> (Ben, Marketing, at the left) A guide gave me five commands to try. Which of them will refuse to run in my ordinary Command Prompt window?

**Pick every command that needs an administrator window.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- sfc /scannow (right)
- diskpart (right)
- hostname — if chosen: hostname only prints the computer’s name and runs in an ordinary window.
- dir C:\Users — if chosen: dir only lists a folder and runs in an ordinary window.
- whoami — if chosen: whoami only prints the account and runs in an ordinary window.

After the answer: Reason: sfc /scannow changes protected system files and diskpart changes disks, so both need an administrator window. hostname, dir and whoami only read, and an ordinary window runs them.

#### Question in the draw: l21-g-windows

A chat, with its history: "Hal, Sales", Chat with the help desk.

> (Hal, Sales, at the left) Since last night’s update, two of my programs crash on start. The drive is fine. I want Windows to check and repair its own files.

**Which command does that, in an administrator window?**
(the options come in an order that depends on the seed of the question)
- sfc /scannow (right)
- chkdsk C: /f — if chosen: chkdsk repairs the drive’s file system, not Windows’ files.
- gpupdate /force — if chosen: That reapplies Group Policy, not the system files.
- format C: /q — if chosen: That would erase the drive. Nothing needs to be erased to check Windows’ files.

After the answer: the deciding words are marked. Reason: The drive is fine and Windows’ own files are suspected, so the job is sfc /scannow. chkdsk checks the drive and sfc checks the files Windows depends on.

#### Question in the draw: l21-k-gpresult

A chat, with its history: "Zed, Help desk", Chat with the help desk.

> (Zed, Help desk, at the left) The new Block USB Storage policy went out on October 23 at 10:00. A user says it is not blocking his laptop. I ran gpresult /r on it at noon the same day.

A plain table, "C:\> gpresult /r":

> What the computer prints  (the column heads)
> Last time Group Policy was applied: 10/21/2026 at 8:03:15 AM
> COMPUTER SETTINGS
>     Applied Group Policy Objects
>         Default Domain Policy
>         Workstation Lockdown

**What does it show, and what next?**
(the options come in an order that depends on the seed of the question)
- It last refreshed two days ago, before the change; run gpupdate /force and look again (right)
- The policy is wrong: it is missing from the list of applied ones — if chosen: It is missing because this laptop has not refreshed since before the policy was made, not because the policy is wrong.
- The policy was filtered out for this user, so change who it applies to — if chosen: Nothing in the report says filtered out. Filtered policies are listed separately.
- Reinstall Windows on the laptop so it picks up the policy — if chosen: No test has shown anything wrong with Windows. A refresh costs a minute.

After the answer: the deciding words are marked. Reason: Last time Group Policy was applied is two days before the policy existed, and the list shows no Block USB Storage. The cheapest change is gpupdate /force, then gpresult /r again to see whether the policy is listed.

#### Question in the draw: l21-k-sfc

The question, read aloud as above: **What is the full command that scans Windows’ protected system files and replaces damaged ones?**

**Type the command with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - sfc /scannow

After the answer: Reason: sfc /scannow runs System File Checker in an administrator window. It replaces damaged protected system files from a stored good copy.

#### Question in the draw: l21-r-sfc-admin

A chat, with its history: "Ben, Marketing", Chat with the help desk.

> (Ben, Marketing, at the left) I typed sfc /scannow as you told me. It printed: You must be an administrator running a console session in order to use the sfc utility.

**What does Ben do?**
(the options come in an order that depends on the seed of the question)
- Open Command Prompt with Run as administrator and retype it (right)
- Type SFC /SCANNOW in capital letters instead — if chosen: The message is about rights, not capital letters.
- Run chkdsk C: /f first, which gives Ben the rights — if chosen: chkdsk needs the same administrator window. It gives no rights.
- Add sfc through Windows Features, as it is not installed — if chosen: sfc is part of Windows. The message says the rights are the problem.

After the answer: the deciding words are marked. Reason: An ordinary window cannot run commands that change system files or disks. The title bar of an administrator window says Administrator: Command Prompt.

#### Question in the draw: l21-r-whoami

The question, read aloud as above: **Which command prints the account you are signed in as, such as corp\dana?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - whoami

After the answer: Reason: whoami prints the signed-in account, with its domain or computer name first. whoami /groups lists the groups it belongs to.

#### Question in the draw: l21-r-winver

A chat, with its history: "Kim, Reception", Chat with the help desk.

> (Kim, Reception, at the left) The software installer says it needs Windows version 24H2 or newer. I do not know which one my computer has.

**Which command shows the version?**
(the options come in an order that depends on the seed of the question)
- winver, which opens a window with the version and build (right)
- hostname, which prints the version after the computer’s name — if chosen: hostname prints only the computer’s name.
- whoami, which prints the version beside the account — if chosen: whoami prints only the account name.
- gpresult /r, which lists the Windows version at the top — if chosen: gpresult reports which policies applied. It is not a version tool.

After the answer: the deciding words are marked. Reason: winver opens a small window with the edition, version and build number. The window is on the screen, not printed in the command window.

#### Question in the draw: l25-p-vest

A chat, with its history: "Ravi, Facilities", Chat with the help desk.

> (Ravi, Facilities, at the left) Twice this week a person walked into the data room right behind an employee, before the door closed. We want a way in that lets only one person through at a time.

**Which measure stops that?**
(the options come in an order that depends on the seed of the question)
- An access control vestibule, with a second door that opens only after the first has shut (right)
- Video surveillance on the door, so every visit is recorded — if chosen: A camera records who followed. It does not stop anyone from getting in.
- Bollards outside the entrance, so no vehicle gets near the door — if chosen: Bollards stop vehicles. A person on foot walks past them.
- A badge reader that logs each badge held up to it — if chosen: A reader logs the badge, not the person behind it. Two people can still pass on one badge.

After the answer: the deciding words are marked. Reason: Following close behind is tailgating. A measure that stops it has to let one person through at a time, and that is the access control vestibule.

#### Question in the draw: l25-q-tailgate

The question, read aloud as above: **A stranger slips through a secure door by following close behind an employee before it shuts.**

**Type the one-word name for this.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - tailgating
  - tailgate

After the answer: Reason: Following close behind someone through a door is tailgating. An access control vestibule stops it with two doors.

#### Question in the draw: l25-k-bio

A chat, with its history: "Ines, Pharmacy", Chat with the help desk.

> (Ines, Pharmacy, at the left) The door to our drug store room opens with a card. Staff lend their cards to each other, and we cannot tell who went in. We want the door to open only for the person themselves.

**Which way of opening the door fits?**
(the options come in an order that depends on the seed of the question)
- A fingerprint reader, since the body cannot be lent (right)
- A fob held near the reader, since each one is numbered — if chosen: A fob is carried, like a card. It can be lent in the same way.
- A smart card with a chip, since it is harder to copy — if chosen: A smart card is still a thing someone holds. Lending it is exactly the problem.
- A digital pass on the phone, since people keep their phones — if chosen: A phone can also be lent, and it can open the door for someone else.

After the answer: the deciding words are marked. Reason: Cards, fobs and phones are things a person has, so they can be lent. Biometrics, such as a fingerprint, is who the person is, so only they can open the door.

#### Question in the draw: l25-r-bollard

A chat, with its history: "Dev, Shop owner", Chat with the help desk.

> (Dev, Shop owner, at the left) A van drove into the glass front of the shop next door last month. I want something outside my entrance that stops a vehicle.

**Which measure fits?**
(the options come in an order that depends on the seed of the question)
- Bollards, short strong posts in front of the glass (right)
- A magnetometer at the door, to find metal — if chosen: A magnetometer is a metal detector for people. It does not stop a vehicle.
- An alarm that rings when the glass breaks — if chosen: An alarm warns after the damage. It stops nothing.
- A badge reader on the front door — if chosen: A reader controls who walks in. A van does not use the door.

After the answer: the deciding words are marked. Reason: A measure against a vehicle has to be in its way. Bollards are posts strong enough to stop one.

#### Question in the draw: l25-r-fob

The question, read aloud as above: **A small plastic device on a ring, held near a reader to open a door. Staff carry one each.**

**Type its short name, one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - fob
  - key fob
  - keyfob

After the answer: Reason: A fob is held near a reader to open a door. A smart card has a chip and is often used with a PIN.

#### Question in the draw: l25-r-mag

A chat, with its history: "Court, Security desk", Chat with the help desk.

> (Court, Security desk, at the left) We want to find metal objects that visitors carry in before they reach the courtroom.

**Which measure fits?**
(the options come in an order that depends on the seed of the question)
- A magnetometer at the entrance (right)
- Lighting over the car park — if chosen: Lighting helps people be seen. It does not find metal.
- Video surveillance of the hallway — if chosen: Cameras record. They do not find a hidden object.
- A vestibule with two doors — if chosen: A vestibule lets in one person at a time. It does not find metal.

After the answer: the deciding words are marked. Reason: Finding metal on people entering is the job of a magnetometer.

#### Question in the draw: l25-p-mfa

A chat, with its history: "Omar, Sales", Chat with the help desk.

> (Omar, Sales, at the left) Our sign-in wants my password and then a six-digit code from an app on my phone. The code changes every thirty seconds or so.

**Which second check is the code?**
(the options come in an order that depends on the seed of the question)
- An authenticator app, making a TOTP: a code made from the clock (right)
- A hardware token, a small device that shows the code — if chosen: A token is a separate physical device. Omar uses an app on his phone.
- An SMS code, sent to his number in a text message — if chosen: Nothing is sent to him. The app makes the code on the phone itself.
- A voice call that reads out the code — if chosen: No call is made. The code comes from the app on the phone.

After the answer: the deciding words are marked. Reason: A code from an app that changes about every thirty seconds is made from the clock: a TOTP, made by an authenticator app.

#### Question in the draw: l25-q-call

A caller reaches the help desk. You answer.

**Dana calls about a locked account. What do you say?**
- An incoming call from "Dana, Finance" (Incoming call · 8:40 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "Hi, this is Dana in Finance. My account is locked and I have a meeting in five minutes. Please unlock it now." [pushes: She is in a hurry and is asking for an unlock.]
  - reply "I can do that. First I need to check it is you: I will call the number on your directory record and unlock it once you answer there.": goes on to turn 2, where the pressure comes back
  - reply "Of course, I will unlock it right now so you can get to your meeting.": the call ends (not this one): Anyone can say a name and a hurry. The unlock waits until the caller is checked by something she did not give. [slip: reset or unlocked an account before confirming who was asking]
  - reply "Sure. Read me your employee number and I will unlock it when it matches.": the call ends (not this one): An employee number the caller reads out is something she supplied, and others can find it. The check has to come from a record the desk holds, such as a call to the number on file. [slip: reset or unlocked an account before confirming who was asking]
- turn 2, the other side says: "That is my desk phone, yes. While you are in there, can you make me an administrator on the Finance share? It would save waiting." [pushes: She is verified, and now wants more access than an unlock.]
  - reply "I will unlock you now. More access needs your manager’s approval on a ticket, and I will open it and tell you when it is done.": the call ends (right): The number on the directory record is something Dana did not supply, so it checks who she is. An unlock is one job; extra access is another, and it goes through the approval, so she keeps only what her job needs.
  - reply "Done: you are now an administrator on the Finance share.": the call ends (not this one): Administrator rights on a share are far above what the job needs. Extra access goes through the manager’s approval in a ticket. [slip: gave more access than the job needs]
  - reply "I have unlocked you. Nothing else I can do there.": the call ends (not this one): Dana asked for access and is left with no idea how to get it. The ticket and the approval are the way, and she needs to hear that. [slip: left the user not knowing what happens next and when]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Before an unlock the desk checks the caller by something she did not supply: here, a call to the number on the directory record. Extra access is a separate change that needs approval, because least privilege gives only what the job needs.

#### Question in the draw: l25-q-otp

The question, read aloud as above: **A code that works once and is then useless, such as one sent in a text message.**

**Type its short name, three letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - otp

After the answer: Reason: A code that works once is an OTP, a one-time password. A TOTP is an OTP made from the clock.

#### Question in the draw: l25-q-pin

A chat, with its history: "Kai, Design", Chat with the help desk.

> (Kai, Design, at the left) I sign in to my own laptop with a four-digit PIN. On the shared studio PC I typed the same PIN and it was refused, though my account is fine.

**Why was the PIN refused?**
(the options come in an order that depends on the seed of the question)
- A PIN is tied to the one computer it was made on, so the studio PC does not know it (right)
- His account was locked, because a PIN counts as a wrong password — if chosen: A locked account would be refused on his laptop too.
- The studio PC needs a hardware token before any PIN works — if chosen: A token is a second check. Nothing in the ticket says one is required.
- PINs expire after a day on a shared PC — if chosen: A PIN does not expire on a timer. It is tied to one PC.

After the answer: the deciding words are marked. Reason: A PIN is a short code tied to the one PC it was made on, so the same PIN means nothing on another PC.

#### Question in the draw: l25-g-sso

A chat, with its history: "Beth, HR", Chat with the help desk.

> (Beth, HR, at the left) Every morning I sign in to the payroll site, the benefits site and the training site, each with its own password. Surely there is a way to sign in once.

**Which feature lets one sign-in open all three?**
(the options come in an order that depends on the seed of the question)
- SSO, where the company’s sign-in service vouches for her to each site, using a standard such as SAML (right)
- MFA, adding a second check such as a code from her phone to every one of the three separate sign-ins — if chosen: MFA makes each sign-in stronger. It adds a step; it does not remove the other sign-ins.
- IAM, creating and removing accounts for the three sites — if chosen: IAM is the job of managing accounts and access. It does not join three sign-ins into one.
- Zero Trust, checking every request from the three sites again — if chosen: Zero Trust is the idea of checking each request. It does not give one sign-in.

After the answer: the deciding words are marked. Reason: One sign-in that opens several apps is SSO. The company’s sign-in service tells each app who the person is, and SAML is a standard way to do that.

#### Question in the draw: l25-g-pam

A chat, with its history: "Cole, Server team", Chat with the help desk.

> (Cole, Server team, at the left) An engineer needs administrator rights on the billing server for one hour tonight to install a patch. We do not want him to keep them afterward.

**Which approach fits?**
(the options come in an order that depends on the seed of the question)
- Just-in-time access through privileged access management: the rights last the hour, then are removed (right)
- Make him a permanent administrator and trust him to be careful — if chosen: Permanent rights are far more than one hour of work needs.
- Give him the default administrator password, written on a note — if chosen: A shared default password gives full rights to anyone who reads the note, and nothing is ever taken back.
- Add his account to the Guest group for the night — if chosen: Guest has limited rights. It cannot install a patch.

After the answer: the deciding words are marked. Reason: Rights for one task, then removed, is just-in-time access, which is what privileged access management does.

#### Question in the draw: l25-k-id

A chat, with its history: "Caller, by chat", Chat with the help desk.

> (Caller, by chat, at the left) I am Chris Bell, the CFO’s assistant. The CFO is traveling and needs the password reset now. My employee number is 40718 and my manager is Lee Ward, who will confirm it.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Look Chris up in the directory and call the number on that record (right)
- Check the employee number he gave against the directory — if chosen: He read out the number himself. Matching it proves he knows a number, not who he is.
- Call Lee Ward on the number Chris gave you — if chosen: Anyone can give the number of a friend. The manager has to be looked up in the directory.
- Reset it and force a new password at the next sign-in — if chosen: The reset still hands the account to whoever is typing. The check comes before it.

After the answer: the deciding words are marked. Reason: Before a reset the desk checks the caller by something the caller did not supply: the directory record and the number on it. A number, a name or a manager the caller gives proves nothing.

#### Question in the draw: l25-k-dlp

A chat, with its history: "Pia, Compliance", Chat with the help desk.

> (Pia, Compliance, at the left) Staff keep emailing spreadsheets with customer card numbers to their personal addresses. I want the system to spot the card numbers and stop the email leaving.

**Which control is that?**
(the options come in an order that depends on the seed of the question)
- DLP, which spots sensitive data and blocks it from leaving (right)
- MDM, which enforces rules such as screen locks and remote wipe on phones and tablets — if chosen: MDM manages mobile devices: screen lock, encryption, remote wipe. It does not read email contents.
- IAM, which creates accounts and removes their access — if chosen: IAM manages who has accounts and access. It does not look at what is sent out.
- An ACL, which lists who may use a folder — if chosen: An ACL decides who may open a file or folder. It does not stop its contents being emailed once someone may open it.

After the answer: the deciding words are marked. Reason: Spotting sensitive data in what is sent and blocking it is DLP, data loss prevention.

#### Question in the draw: l25-r-zero

A chat, with its history: "Mo, Network team", Chat with the help desk.

> (Mo, Network team, at the left) A visitor connected to our office Wi-Fi and could open the payroll system right away, because the network is trusted. We want every request checked again, whoever it is from.

**Which idea is that?**
(the options come in an order that depends on the seed of the question)
- Zero Trust, which checks every request instead of trusting the inside (right)
- Least privilege, which gives only the access a job needs — if chosen: That limits how much access an account has. It does not check each request again.
- SSO, which signs a person in once for many apps — if chosen: SSO reduces sign-ins. It does not check each request.
- DLP, which blocks sensitive data from leaving — if chosen: DLP watches data leaving. It does not decide who is trusted.

After the answer: the deciding words are marked. Reason: Checking every request instead of trusting the office network is Zero Trust.

#### Question in the draw: l25-r-least

A chat, with its history: "Wen, Intern", Chat with the help desk.

> (Wen, Intern, at the left) I need to export one report from the finance system. Can you just make me an administrator so nothing gets in the way?

**What does least privilege say to do?**
(the options come in an order that depends on the seed of the question)
- Give access to that one report, for as long as the job needs it (right)
- Make him an administrator, since interns are trusted — if chosen: Administrator is far more than one report needs.
- Give him the finance manager’s sign-in for the day — if chosen: Sharing a sign-in hides who did what and gives the manager’s full access.
- Refuse and tell him to find another way to get the report — if chosen: Saying no and leaving him with no other way gives him nothing to do. Least privilege gives the report access he needs.

After the answer: the deciding words are marked. Reason: Least privilege is the smallest access that does the job.

#### Question in the draw: l25-r-same

A chat, with its history: "Sol, Security", Chat with the help desk.

> (Sol, Security, at the left) We added a security question after the password and now call the sign-in multifactor. A colleague says it is not.

**Who is right?**
(the options come in an order that depends on the seed of the question)
- The colleague: a password and an answer are both something you know (right)
- Sol: two checks are always multifactor — if chosen: Two checks of the same kind are still one kind. A code from a phone would be a second kind.
- Sol: a question is something you have, so it counts — if chosen: An answer is held in memory, so it is something you know.
- The colleague: a question can never be part of MFA, even with a hardware token — if chosen: A question is allowed as one check. The point is that a second, different kind is missing.

After the answer: the deciding words are marked. Reason: MFA is two or more different kinds of proof: know, have, are. A password and an answer are the same kind.

#### Question in the draw: l25-r-saml

A chat, with its history: "Ula, Cloud team", Chat with the help desk.

> (Ula, Cloud team, at the left) Our sign-in service has to tell an outside app that this person is signed in. Which standard carries that message?

**Which standard is it?**
(the options come in an order that depends on the seed of the question)
- SAML (right)
- TOTP — if chosen: TOTP is a time-based code. It is a second check, not a message to an app.
- DLP — if chosen: DLP blocks sensitive data from leaving. It does not carry a sign-in.
- MDM — if chosen: MDM manages phones and tablets. It does not carry a sign-in.

After the answer: the deciding words are marked. Reason: SAML carries the message that a person is signed in, from the sign-in service to the app.

#### Question in the draw: l25-w-priya

A chat, with its history: "Priya, Finance", Chat with the help desk.

> (Priya, Finance, at the left) I started in Finance on Monday. I can open every file in the Budget folder on the shared drive, but when I save one it says I do not have permission. Can you reset my password?

A plain table, "The Budget folder on the file server":

> Layer  |  Who  |  Level  (the column heads)
> Share permission  |  Finance group  |  Change
> NTFS permission  |  Finance group  |  Read & execute

A plain table, "Priya’s account in the directory":

> Check  |  Result  (the column heads)
> Signed in today at 8:12 AM  |  Success
> Member of  |  Finance

A plain table, "From the desk’s rules":

> Rule  (the column heads)
> A change to a shared folder’s permissions needs the folder owner’s approval written in the ticket.

**Priya signs in and opens the files, but cannot save. Where does the fault sit?**
(the options come in an order that depends on the seed of the question)
- Link 2: what she is allowed, because the level on the folder is too low for saving (right)
- Link 1: who she is, because her password is wrong, so reset it — if chosen: She signed in at 8:12 and opened the files. A wrong password would have stopped her before any folder. A reset changes nothing here.
- Link 3: the policy, because Group Policy blocks saving on her computer — if chosen: Nothing in the ticket points at a policy, and the folder’s own two layers already explain what she sees.
- Her computer is not on the domain, so join it again — if chosen: A domain account signed in today at 8:12, so the computer reached the domain. That is not the fault.

After the answer: the deciding words are marked. Reason: She signed in and opened the files, so link 1 works. The share allows Change but the folder’s NTFS level is Read & execute, and the more restrictive layer wins. The fault is on link 2, and the fix is one level on one layer.
The working:
- Write down every place a “no permission” could sit.: Account and sign-in; the group she is in; the share level; the NTFS level; a policy; a Read-only label on one file.
- Name the favorite cause, her password, and test it with what she already did.: She signed in at 8:12 and opened the files. The account and the password work, so link 1 is cleared. Resetting the password would change nothing.
- Check link 2: her group.: She is in Finance, and Finance has both a share level and an NTFS level on the folder. That is why she can open the files.
- Read both layers; the more restrictive one wins.: The share gives Change. NTFS gives Read & execute. Across the network the lower one wins, so she gets Read & execute: she can open, not save. Saving needs Modify.
- Change one thing, with the owner’s approval, then check it.: Get the owner’s approval in the ticket, then raise the NTFS level for the Finance group to Modify, not Full Control, so no more access than the job needs. Priya saves a file and confirms. The note says which layer was low.

#### Question in the draw: l25-p-delete

A chat, with its history: "Jo, Sales", Chat with the help desk.

> (Jo, Sales, at the left) I can open the price list folder on the shared drive and add new files, but when I try to delete an old one it says I need permission. I signed in fine this morning.

**Which link of the chain is the fault on?**
(the options come in an order that depends on the seed of the question)
- Link 2: her level on the folder is below the one that allows deleting (right)
- Link 1: her sign-in is broken, so reset her password — if chosen: She signed in this morning and opened the folder. The sign-in works.
- Link 3: a policy blocks her computer from the network — if chosen: She reaches the folder and adds files. A policy cutting her off would stop that too.
- The door: she needs a badge before she can use the shared drive — if chosen: A badge opens a building. She is already working on the drive.

After the answer: the deciding words are marked. Reason: She signed in and can open and add, so links 1 and 3 give her what she needs. The level on the folder decides whether she can also delete, and it is too low: link 2.

#### Question in the draw: l25-p-uac

A chat, with its history: "Eli, Marketing", Chat with the help desk.

> (Eli, Marketing, at the left) Every time I install a program, the screen goes dark and a box wants an administrator’s name and password. My account is a standard user. Is my computer broken?

**What is the box?**
(the options come in an order that depends on the seed of the question)
- User Account Control, making a standard user get an administrator to approve the install (right)
- A virus warning from the antivirus, so scan the whole computer before installing anything else — if chosen: A virus warning names a threat. This box names no threat and only wants administrator rights.
- The firewall blocking the program, so open its port — if chosen: The firewall controls network traffic. It does not call for an administrator before an install.
- A damaged profile, so build him a new one — if chosen: A damaged profile shows errors and odd settings. A dark screen with a request for administrator rights is UAC.

After the answer: the deciding words are marked. Reason: A dimmed screen and a request for an administrator’s name and password is UAC. A standard user cannot approve it alone, and nothing is broken.

#### Question in the draw: l25-q-both

A plain table, "The Archive folder":

> Layer  |  For the Staff group  |  Level  (the column heads)
> Share permission  |  Full Control
> NTFS permission  |  Read

A chat, with its history: "Marcus, Staff", Chat with the help desk.

> (Marcus, Staff, at the left) I am in Staff and I open the Archive folder through the shared drive on my laptop. What can I do in it?

**What can Marcus do through the share?**
(the options come in an order that depends on the seed of the question)
- Read only, because the more restrictive layer wins (right)
- Anything, because the share gives Full Control — if chosen: The share is one layer. The folder’s own NTFS level is Read, and the lower one wins.
- Change, the middle between the two levels — if chosen: The layers are not averaged. The more restrictive one decides.
- Nothing, because two different layers cancel each other — if chosen: They do not cancel. Both allow something, and the lower level wins.

After the answer: the deciding words are marked. Reason: A person reaching a folder through its share meets both the share permission and the NTFS permission, and the more restrictive of the two wins. Full Control and Read give Read.

#### Question in the draw: l25-q-readonly

A chat, with its history: "Sam, Legal", Chat with the help desk.

> (Sam, Legal, at the left) I can save every file in the Contracts folder except one, the quarterly plan. It opens, but saving says the file is read-only. All the other files in the same folder save fine.

**What is the cheapest check?**
(the options come in an order that depends on the seed of the question)
- Open that file’s properties and look at its Read-only attribute (right)
- Move Sam into a different group and try again — if chosen: Group membership and folder permissions are the same for every file in the folder. The others save, so this is not it.
- Reset Sam’s password in the directory — if chosen: His sign-in works, since the other files save.
- Turn User Account Control off and restart the computer — if chosen: UAC prompts for administrator rights. It does not mark one file read-only.

After the answer: the deciding words are marked. Reason: Same folder, same permissions, and only one file fails. A label on the file itself fits: the Read-only attribute, which stops saving whatever the permissions say.

#### Question in the draw: l25-q-togo

A chat, with its history: "Hana, Consulting", Chat with the help desk.

> (Hana, Consulting, at the left) I carry client files on a USB stick. If I lose it, I do not want anyone to read what is on it.

**Which protection fits?**
(the options come in an order that depends on the seed of the question)
- BitLocker To Go, which locks a removable drive and opens with a password (right)
- BitLocker on the C: drive, which locks the drive Windows is on — if chosen: BitLocker on the Windows drive protects that drive. The stick is a different drive and stays open.
- A BIOS or UEFI password, which guards starting this computer — if chosen: A firmware password guards one computer’s start-up. The stick is read on any other computer.
- Windows Hello, which signs a person in with a face or a fingerprint — if chosen: Windows Hello signs in to Windows. It does not encrypt a stick.

After the answer: the deciding words are marked. Reason: Encrypting a removable drive so a lost one cannot be read is BitLocker To Go. The other tools protect the Windows drive, the start-up or the sign-in.

#### Question in the draw: l25-g-efs

A chat, with its history: "Mina, Legal", Chat with the help desk.

> (Mina, Legal, at the left) Last year I encrypted a folder of contracts with EFS under my account. IT rebuilt my profile this week and gave me a new account, and now I cannot open the folder.

**What happened?**
(the options come in an order that depends on the seed of the question)
- EFS ties the files to the old account’s certificate, and the new account does not have it (right)
- BitLocker has locked the whole drive since the profile rebuild, and it needs its recovery code — if chosen: BitLocker locks a drive at start-up, and the rest of her files open. This one folder was encrypted by EFS.
- The share permission for the new account is Read only — if chosen: A low permission would let her open and read the files. She cannot open them at all.
- User Account Control is blocking the folder — if chosen: UAC calls for administrator rights. It does not encrypt or hide a folder.

After the answer: the deciding words are marked. Reason: One folder cannot be opened after the account changed, and it was encrypted by that account: EFS. The certificate is needed, so it should have been backed up before the rebuild.

#### Question in the draw: l25-g-local

A chat, with its history: "Raj, Accounts", Chat with the help desk.

> (Raj, Accounts, at the left) I sign in to my desk PC fine. On the spare PC in the meeting room my name and password are rejected, though they are the same ones.

A plain table, "From the desk’s records":

> Computer  |  Joined to the domain  (the column heads)
> Raj’s desk PC  |  Yes
> Meeting-room PC  |  No

**Why is the sign-in rejected on one PC?**
(the options come in an order that depends on the seed of the question)
- The meeting-room PC is not on the domain, so it has no account for him (right)
- His password expired overnight, on one PC only — if chosen: A password belongs to the account, not to a PC. It would fail on his desk PC too.
- A Group Policy has locked his account out of that one computer, though not out of his desk PC — if chosen: A policy that blocked him would apply to computers in a domain. This PC is not in it.
- The firewall on the meeting-room PC blocks the sign-in — if chosen: The firewall controls network traffic. It does not reject a name that the PC does not have an account for.

After the answer: the deciding words are marked. Reason: The same sign-in works on one PC and not another, and the records show one is joined to the domain and one is not. The domain account is unknown to a PC outside the domain: link 1 differs per computer.

#### Question in the draw: l25-k-inherit

A chat, with its history: "Ana, Planning", Chat with the help desk.

> (Ana, Planning, at the left) I have Modify on the Projects folder, but in its subfolder Budget I can only read. My manager says it should be the same.

A plain table, "Security of the Budget subfolder":

> Check  |  Value  (the column heads)
> Inheritance from Projects  |  Turned off
> Ana  |  Read

**Why can she only read in Budget?**
(the options come in an order that depends on the seed of the question)
- Inheritance is off on Budget, so it keeps its own level and no longer takes Projects’ Modify (right)
- Her sign-in works only on the Projects folder and is not accepted on its subfolder called Budget — if chosen: A sign-in belongs to the account and works for every folder she can reach.
- The share permission on Projects is lower than the NTFS level — if chosen: The ticket shows no share permission at all. The difference is inside the folder: Projects against Budget.
- User Account Control is blocking the change in Budget — if chosen: UAC prompts for administrator rights on a change. It does not lower a permission.

After the answer: the deciding words are marked. Reason: Permissions flow down from a folder to what is inside it, unless inheritance is turned off on the subfolder. Budget has it off and its own level for Ana is Read.

#### Question in the draw: l25-k-bitlocker

A chat, with its history: "Gus, Field team", Chat with the help desk.

> (Gus, Field team, at the left) The company replaced my laptop’s motherboard. Now it stops before Windows loads and shows a strange screen.

A plain table, "What the screen says":

> Line  (the column heads)
> BitLocker recovery
> Enter the recovery key to unlock this drive.
> Recovery key ID: 4F2A-9C10

**What gets Gus in?**
(the options come in an order that depends on the seed of the question)
- The recovery code saved when BitLocker was turned on, found with the ID on the screen (right)
- His Windows sign-in password, typed in at that screen, since it is the same account as before — if chosen: BitLocker unlocks the drive before Windows loads. Windows’ own password is not what it wants.
- A new PIN made in Windows Hello — if chosen: Windows Hello is for signing in once Windows runs. The drive is still locked.
- A fresh install of Windows on the drive — if chosen: A reinstall wipes the data on the drive. The recovery code opens it with the data kept.

After the answer: the deciding words are marked. Reason: BitLocker locks the drive and, after a hardware change, wants its recovery code. The code was saved when BitLocker was turned on, and the ID on the screen finds it. Without it the data stays locked.

#### Question in the draw: l25-r-account

A chat, with its history: "Noel, Design", Chat with the help desk.

> (Noel, Design, at the left) On my home PC I sign in with my email address and my background and settings follow me to a new laptop. On the office laptop they do not, and I use a different name.

**What kind of account does he use at home?**
(the options come in an order that depends on the seed of the question)
- A Microsoft account, kept online and the same on any PC he signs in on (right)
- A local account, kept on that one computer — if chosen: A local account lives on one PC. Its settings would not follow him to a laptop.
- A domain account, made by his company — if chosen: A domain account comes from a company directory. He uses it at the office, not at home.
- The Guest account, with no personal settings — if chosen: Guest has no personal settings to carry.

After the answer: the deciding words are marked. Reason: An email address that works on any PC and carries settings with it is a Microsoft account.

#### Question in the draw: l25-r-network

A chat, with its history: "Bo, Archive", Chat with the help desk.

> (Bo, Archive, at the left) Sitting at the file server I can save in the Reports folder. From my laptop, through the share, I can only read.

A plain table, "The Reports folder":

> Layer  |  Bo’s group  |  Level  (the column heads)
> Share permission  |  Read
> NTFS permission  |  Modify

**Why does it differ?**
(the options come in an order that depends on the seed of the question)
- At the server only the NTFS level applies; through the share both apply and the lower, Read, wins (right)
- His laptop is not allowed to run User Account Control — if chosen: UAC has nothing to do with which layer applies.
- The NTFS level is lower than the share level — if chosen: Here the share is the lower one: Read against Modify.
- His sign-in works only at the server — if chosen: His sign-in works on both, or he would not be able to read.

After the answer: the deciding words are marked. Reason: NTFS permissions apply however a folder is reached. Share permissions add a second layer only across the network, and the more restrictive wins: Read.

#### Question in the draw: l25-r-defender

A chat, with its history: "Ivy, Accounts", Chat with the help desk.

> (Ivy, Accounts, at the left) Windows Security says my virus protection is on, but the scan list says the definitions are four weeks old.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Update the Defender Antivirus definitions, then scan (right)
- Turn the firewall off and on again — if chosen: The firewall filters network traffic. It does not hold malware definitions.
- Run BitLocker on the drive — if chosen: BitLocker encrypts a drive. It does not detect malware.
- Disable Defender because it is out of date — if chosen: Switching protection off leaves the PC with none. Updating fixes the problem.

After the answer: the deciding words are marked. Reason: Out-of-date protection is fixed by updating the definitions, the list of known malware.

#### Question in the draw: l25-r-runas

A chat, with its history: "Ty, Desk 2", Chat with the help desk.

> (Ty, Desk 2, at the left) I typed sfc /scannow in a normal Command Prompt window and it says I must run it as administrator.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Close it, then right-click Command Prompt and choose Run as administrator (right)
- Turn User Account Control off so nothing is refused — if chosen: Turning UAC off removes a safety check and is not needed for one command.
- Make his account a permanent administrator — if chosen: Permanent rights are more than one command needs. Step up for the task.
- Run the command again; the message will go away — if chosen: Running the same command in the same window repeats the same refusal. The rights come from how the window is started.

After the answer: the deciding words are marked. Reason: Some commands need administrator rights. Starting the program with Run as administrator gives them for that task only.

#### Question in the draw: l25-q-ou

A chat, with its history: "Lena, Reception", Chat with the help desk.

> (Lena, Reception, at the left) My USB drive is blocked on PC-12 at reception but works on PC-15 in the lab. It is the same sign-in on both.

A plain table, "Where each computer sits in the directory":

> Computer  |  OU  |  Policy linked to the OU  (the column heads)
> PC-12  |  Reception  |  Block USB storage
> PC-15  |  Lab  |  None

**Where does the difference come from?**
(the options come in an order that depends on the seed of the question)
- PC-12 sits in an OU that has a policy blocking USB drives, and PC-15 does not (right)
- Her domain account is damaged on PC-12, so it must be rebuilt for that computer only — if chosen: Her sign-in works on both computers. The block is a rule on the computer, not on who she is.
- Her folder permissions differ between the two PCs — if chosen: Folder permissions belong to a folder. They do not decide whether a USB drive is accepted.
- PC-12 is missing BitLocker, which blocks USB drives — if chosen: BitLocker encrypts drives. Blocking USB storage is a Group Policy setting.

After the answer: the deciding words are marked. Reason: The same account behaves differently on two computers, so look at link 3. The computers sit in different OUs, and only the Reception OU has the policy that blocks USB storage.

#### Question in the draw: l25-q-gpupdate

The question, read aloud as above: **The desk changed a Group Policy rule and wants it to reach a computer now instead of waiting.**

**Type the command, with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpupdate /force

After the answer: Reason: gpupdate /force applies Group Policy now. gpresult /r shows which policies applied.

#### Question in the draw: l25-q-gpresult

The question, read aloud as above: **A PC is not following a policy. The desk wants a list of the policies that actually applied to it.**

**Type the command, with its switch.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gpresult /r

After the answer: Reason: gpresult /r shows which policies applied. gpupdate /force applies them again.

#### Question in the draw: l25-q-home

A chat, with its history: "Zed, Sales", Chat with the help desk.

> (Zed, Sales, at the left) In the office my Documents folder shows my files on every PC I sit at, but they are not on the laptop itself. How does that work?

**Which feature is it?**
(the options come in an order that depends on the seed of the question)
- A home folder, or folder redirection, which keeps the files on a server (right)
- EFS, which encrypts the files so any PC can open them — if chosen: EFS encrypts files for one account. It does not move them to a server.
- A login script that copies the files to each PC at sign-in — if chosen: A login script runs a small program at sign-in, such as connecting drives. Here the files are kept on the server.
- A local account, which stores the files on every PC — if chosen: A local account exists on one PC only, and its files stay there.

After the answer: the deciding words are marked. Reason: A personal folder kept on a server, shown on any PC, is a home folder; redirecting Documents to the server does the same.

#### Question in the draw: l25-q-home-edition

A chat, with its history: "Ira, Facilities", Chat with the help desk.

> (Ira, Facilities, at the left) The new laptops came with Windows Home. I tried to join one to the company domain and the option is missing.

**What is the cause?**
(the options come in an order that depends on the seed of the question)
- Windows Home cannot join a domain; Pro and above can (right)
- The domain controller is down, so it should be restarted — if chosen: A domain controller that was down would give an error. The option itself is missing.
- Group Policy blocks domain joins in that OU — if chosen: A policy applies to computers already in the domain. This one is not yet.
- His account has no permission, so make him an administrator — if chosen: An administrator still sees no option on Home.

After the answer: the deciding words are marked. Reason: The join option is missing because the edition is Home. Pro and above can join a domain.

#### Question in the draw: l25-k-gpo

The question, read aloud as above: **In a company domain, rules are applied to the accounts and computers in an OU: password rules, blocked USB drives, locked settings.**

**Type the two-word name of the feature.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - group policy
  - group policies

After the answer: Reason: Group Policy applies rules to the accounts and computers in an OU. Security groups hold permissions and a login script only runs a program at sign-in.

#### Question in the draw: l25-r-script

The question, read aloud as above: **A small program in the domain that runs when a person signs in and connects their shared drives.**

**Type its two-word name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - login script
  - logon script
  - sign-in script
  - signin script

After the answer: Reason: A login script runs at sign-in, for example to connect drives. A home folder is a personal folder on a server.

#### Question in the draw: l25-r-ou

A chat, with its history: "Hal, HR", Chat with the help desk.

> (Hal, HR, at the left) Zoe moved from Sales to Finance. She still gets the Sales team’s policies and drive letters, and not Finance’s.

**What do you change?**
(the options come in an order that depends on the seed of the question)
- Move her account object into the Finance OU (right)
- Give her a new password — if chosen: Her sign-in works. The rules she receives come from her OU.
- Reinstall Windows on her computer — if chosen: The computer is fine. The directory decides the policies she receives.
- Run gpresult on her laptop each morning — if chosen: gpresult only shows what applied. It does not change which policies apply.

After the answer: the deciding words are marked. Reason: In Active Directory an object receives the policies of the OU it sits in. Moving it to a new OU changes them.

#### Question in the draw: l25-r-group

A chat, with its history: "Ray, File server", Chat with the help desk.

> (Ray, File server, at the left) Forty people in Accounting need Modify on the Invoices folder, and people join and leave all the time.

**What is the cleanest way?**
(the options come in an order that depends on the seed of the question)
- Give Modify to one security group, Accounting, and move people in and out (right)
- Give Modify to each of the forty accounts one by one — if chosen: That is forty permissions to track and clean up each time someone leaves.
- Give Everyone Full Control, to save time — if chosen: That gives the whole company full control. It breaks least privilege.
- Share one Accounting sign-in between all forty — if chosen: A shared sign-in hides who did what and cannot be taken away from one person.

After the answer: the deciding words are marked. Reason: Permissions go to a security group. People move in and out of the group, not on and off the folder.

#### Question in the draw: l25-q-lockout

A chat, with its history: "Nadia, Security", Chat with the help desk.

> (Nadia, Security, at the left) Someone is guessing passwords for the same account all night. I want the account to stop taking tries after a few wrong ones.

**Which hardening step is this?**
(the options come in an order that depends on the seed of the question)
- Failed-attempt lockout, locking the account after a chosen number of wrong passwords (right)
- Password expiration, forcing everyone to choose a new password every few weeks or months — if chosen: Expiration changes passwords on a schedule. A guesser keeps guessing until the password changes.
- Account expiration, ending the account on a chosen date — if chosen: That ends an account on a date, for a contractor. It does not slow a guesser.
- Disabling AutoRun, so nothing starts from a plugged-in drive — if chosen: AutoRun is about drives and discs. It has nothing to do with sign-in tries.

After the answer: the deciding words are marked. Reason: Stopping a guesser means limiting the tries. Failed-attempt lockout locks the account after a chosen number of wrong passwords.

#### Question in the draw: l25-g-guest

A chat, with its history: "Tara, Audit", Chat with the help desk.

> (Tara, Audit, at the left) The audit found an account on our laptops that anyone can use with no personal settings, and it has limited rights. It is turned off on most machines but on for a few.

**Which account is it, and what is the fix?**
(the options come in an order that depends on the seed of the question)
- The Guest account; disable it on the laptops where it is on (right)
- The default Administrator account; rename it and change its password — if chosen: The default Administrator has full rights, not limited ones. The account in the audit is Guest.
- A power user account; move it to the standard group — if chosen: A power user is a named person’s account with extra rights. The audit describes an account anyone can use.
- A Microsoft account; remove the email address from it — if chosen: A Microsoft account belongs to a person with an email address. It is not an account anyone can use.

After the answer: the deciding words are marked. Reason: An account anyone can use, with limited rights and no personal settings, is Guest. Hardening disables it so nobody can sign in with it.

#### Question in the draw: l25-g-autorun

A chat, with its history: "Fatima, Reception", Chat with the help desk.

> (Fatima, Reception, at the left) A visitor plugged a USB stick into the front desk PC and a program started by itself before anyone opened anything. How do we stop that?

**Which hardening step is it?**
(the options come in an order that depends on the seed of the question)
- Disable AutoRun, so nothing on a plugged-in drive starts by itself (right)
- A BIOS or UEFI password, so that nobody can change the boot order or other start-up settings — if chosen: A firmware password guards start-up settings. The program started after Windows was running.
- A shorter screen lock timeout for the reception PC — if chosen: A lock stops a person using a PC left alone. The program ran by itself.
- Disabling the Guest account on every computer — if chosen: Guest is a sign-in account. The USB program did not sign in to anything.

After the answer: the deciding words are marked. Reason: A program that starts by itself from a plugged-in drive is AutoRun. Disabling it is the hardening step.

#### Question in the draw: l25-k-uefi

A chat, with its history: "Quentin, Kiosk team", Chat with the help desk.

> (Quentin, Kiosk team, at the left) Someone at a shared kiosk changed the boot order and started the PC from their own USB stick. I need to stop people changing start-up settings.

**Which single step does that?**
(the options come in an order that depends on the seed of the question)
- A BIOS or UEFI password (right)
- A screen lock after two minutes — if chosen: A lock stops use of a signed-in PC. The visitor changed the firmware before Windows.
- Failed-attempt lockout on the accounts — if chosen: Lockout limits password tries inside Windows. The change was made before Windows started.
- Disabling the Guest account — if chosen: Guest is a Windows account. The boot order is not in Windows.

After the answer: the deciding words are marked. Reason: Start-up settings and the boot order live in the BIOS or UEFI. A password on them is the step that stops people changing them.

#### Question in the draw: l25-k-default

A chat, with its history: "Vera, Imaging", Chat with the help desk.

> (Vera, Imaging, at the left) The new PC image still has the standard Administrator account with the password it came with. Everyone who builds PCs knows that name and password.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Change the default administrator name and password (right)
- Leave it, because nobody outside the building knows about it — if chosen: The standard name and password are public knowledge. Leaving them is leaving the door open.
- Turn off password expiration for that account so it never changes — if chosen: That keeps the factory password forever. It does the opposite of the fix.
- Move the account to the Guest group so it has fewer rights — if chosen: An administrator account moved to Guest stops working for its job and still has the known password. Change the password.

After the answer: the deciding words are marked. Reason: A default administrator account with a known password is a way in. Hardening changes the name and the password.

#### Question in the draw: l25-r-expire

A chat, with its history: "Ada, HR", Chat with the help desk.

> (Ada, HR, at the left) A contractor’s project ends on 30 November. We want the account to stop working that day without anyone remembering to do it.

**Which step fits?**
(the options come in an order that depends on the seed of the question)
- Account expiration, with the end date on the account (right)
- Password expiration, so the password lasts a while — if chosen: That forces a new password. The account would still work after the project.
- Failed-attempt lockout, after a few wrong tries — if chosen: Lockout reacts to wrong passwords. It does not depend on a date.
- Restricting login times to office hours — if chosen: That limits hours in a day. It does not end the account on a date.

After the answer: the deciding words are marked. Reason: An account that must stop on a date uses account expiration.

#### Question in the draw: l25-r-service

A chat, with its history: "Kit, Kiosk team", Chat with the help desk.

> (Kit, Kiosk team, at the left) The kiosk PC is only used for one app. Windows still runs a file-sharing service and a remote tool nobody uses.

**What does hardening say to do?**
(the options come in an order that depends on the seed of the question)
- Disable the unused services (right)
- Leave them, because services cannot be attacked — if chosen: A service that listens for connections can be attacked, used or not.
- Turn on AutoRun to keep the services busy — if chosen: AutoRun is about plugged-in drives. It is not a way to manage services.
- Lower the password length so staff sign in faster — if chosen: Shorter passwords weaken the PC. They are not a service.

After the answer: the deciding words are marked. Reason: Hardening removes doors that are not needed. Unused services are turned off.

#### Question in the draw: l25-r-unique

A chat, with its history: "Bea, Security", Chat with the help desk.

> (Bea, Security, at the left) After a website was breached, attackers tried the same email and password on our company sign-in and got in on four accounts.

**Which password rule would have stopped it?**
(the options come in an order that depends on the seed of the question)
- Uniqueness: a different password for every service (right)
- Expiration: a new password every few months — if chosen: Expiration changes passwords on a schedule. The attackers used them immediately.
- Complexity: capital letters and numbers — if chosen: Complexity makes a password harder to guess. These were not guessed; they were reused.
- Length: at least twelve characters — if chosen: Length also makes guessing harder. These passwords were copied from a breach.

After the answer: the deciding words are marked. Reason: A password reused across sites is only as safe as the weakest site. Uniqueness is the rule that stops it.

#### Question in the draw: l27-w-change

A chat, with its history: "Mr. Okafor, Finance", Chat with the help desk.

> (Mr. Okafor, Finance, at the left) Please update the firmware on the accounting server tonight. It only takes ten minutes, and payroll runs Monday morning.

A plain table, "From the desk’s change rules":

> Rule  (the column heads)
> A routine change with a written, pre-approved procedure is a standard change.
> An emergency change is only for an outage or an attack that is happening now.
> Every other change to a server needs a request form, a rollback plan, a backup, a test, and the change board’s approval.
> Server changes happen in the maintenance window, Saturday 10 p.m. to 2 a.m.

**Which type of change is this?**
(the options come in an order that depends on the seed of the question)
- A normal change: not routine, and nothing is down (right)
- An emergency change, because he wants it done tonight — if chosen: Wanting it tonight does not make it an emergency. The rule is an outage or an attack happening now, and neither is on the ticket.
- A standard change, because it only takes ten minutes — if chosen: Standard means a routine change with a pre-approved written procedure. How long it takes does not decide the type.
- Not a change, because the server keeps working — if chosen: A firmware update can stop the server, which is why it is a change. What matters is the risk to people’s work.

After the answer: the deciding words are marked. Reason: The type comes from the desk’s rule, not from the wish for tonight. Nothing was down, so it is a normal change: a request form, rollback and backup plans, a test, board approval, the maintenance window, a peer review and the users’ acceptance.
The working:
- Name the favorite type and check it against the desk’s own rule.: The first guess is emergency, because he said “tonight”. The rule needs one answer: is there an outage or an attack now? No. Emergency is ruled out.
- Write the request form.: Purpose: current firmware, fixes a fault the maker listed. Scope: the accounting server only. Type: normal. Affected systems: accounting and payroll. Risk: a failed update could stop payroll, so the risk level is high.
- Get the four things ready before the board sees it.: Rollback plan: keep the old firmware file and the steps to put it back. Backup plan: a full backup and a copy of the settings first. Sandbox testing: run the update on the spare server. Responsible staff: you do the work; the senior technician answers for it.
- Pick the time.: Not tonight. The change board must approve, and servers change only in the maintenance window: the coming Saturday. The year-end change freeze, if one were running, would block it altogether.
- After approval, do the work, get it checked, and get the users to accept it.: Implement it Saturday. A second technician reviews it (peer review). On Monday, Mr. Okafor confirms payroll runs (end-user acceptance), and the ticket is closed.

#### Question in the draw: l27-p-type

A chat, with its history: "Marco, Operations", Chat with the help desk.

> (Marco, Operations, at the left) Every month the 40 reception PCs get the same Windows updates, by the desk’s written procedure. The change board approved that procedure once, for good, last year.

**Which type of change is the monthly update?**
(the options come in an order that depends on the seed of the question)
- A standard change, since it is routine and pre-approved (right)
- A normal change, so it goes to the board every month — if chosen: Normal changes are the ones with no pre-approved procedure. This procedure was approved once, for good.
- An emergency change, because 40 PCs are involved — if chosen: Emergency means an outage or an attack happening now. The number of PCs does not decide it.
- Not a change, because the PCs keep working during it — if chosen: Updates can break a PC, so they are changes. A routine one is a standard change.

After the answer: the deciding words are marked. Reason: Routine, written down and approved ahead of time is what makes a change standard. Normal needs the whole process each time, and emergency is for an outage or an attack now.

#### Question in the draw: l27-q-freeze

The question, read aloud as above: **In the last week of December, the accounting team is closing the books, and the rule says no changes to their systems until January.**

**What is a period like this called? Type the two words.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - change freeze
  - freeze

After the answer: Reason: A period when no changes are allowed is a change freeze. A maintenance window is the opposite: a time agreed for making changes.

#### Question in the draw: l27-g-emerg

A chat, with its history: "Ruth, Security", Chat with the help desk.

> (Ruth, Security, at the left) Attackers are using a hole in our VPN server right now, and people are being locked out. The patch is ready. The change board does not meet until Thursday.

**How is this change handled?**
(the options come in an order that depends on the seed of the question)
- As an emergency change: a quick approval, then the paperwork (right)
- As a normal change: wait for Thursday, then follow the whole process — if chosen: The attack is happening now, and waiting three days leaves the hole open. Emergency changes exist for this.
- As a standard change: use the written procedure with no new approval — if chosen: A standard change is routine and pre-approved. A patch for an active attack has no such procedure.
- Skip approval: make it tonight, and write it up whenever there is time — if chosen: Even an emergency has a quick approval and a record. What it skips is the wait for the board.

After the answer: the deciding words are marked. Reason: An outage or an attack happening now makes a change an emergency: fast approval by a few named people, the write-up afterward.

#### Question in the draw: l27-g-scope

A chat, with its history: "Hui, Operations", Chat with the help desk.

> (Hui, Operations, at the left) The request form says: “Only the two reception printers are changed. The network, the servers and the other printers are not part of this.”

**Which part of the request form is that?**
(the options come in an order that depends on the seed of the question)
- The scope: what is and is not included (right)
- The purpose: why the change is wanted — if chosen: The purpose gives the reason. This text lists what is included.
- The type: standard, normal or emergency — if chosen: The type names the kind of change. This text names the systems it covers.
- The date and time: when the change will happen — if chosen: The date and time say when. This text says what.

After the answer: the deciding words are marked. Reason: The scope of a change is what it covers and what it does not.

#### Question in the draw: l27-k-change

A chat, with its history: "Tess, Network", Chat with the help desk.

> (Tess, Network, at the left) I changed the branch firewall rules (the filter between networks) yesterday. Today the branch cannot reach the main office, and nobody wrote down any steps for undoing what I did.

**Which part of change management was missing?**
(the options come in an order that depends on the seed of the question)
- A rollback plan, the exact steps to undo the change (right)
- End-user acceptance, where users confirm that it works — if chosen: Acceptance comes after the work and confirms it. It does not give the way back.
- A change freeze, a time when changes are not allowed at all — if chosen: A freeze blocks changes during a period. It is not a plan for undoing one.
- A risk analysis, which rates how likely harm is — if chosen: A risk analysis rates the danger before the change. It does not say how to undo it.

After the answer: the deciding words are marked. Reason: Steps for undoing a change that goes wrong are the rollback plan, one of the four things that must be ready before approval.

#### Question in the draw: l27-r-change-1

A chat, with its history: "Abe, Network", Chat with the help desk.

> (Abe, Network, at the left) We will put in the new switch on Sunday at 2 a.m., when almost nobody is in the building, and the board has agreed to that time.

**What is that agreed time called?**
(the options come in an order that depends on the seed of the question)
- A maintenance window (right)
- A change freeze — if chosen: A change freeze is a time when changes are not allowed.
- End-user acceptance — if chosen: End-user acceptance is the users confirming the finished change works for them.
- Sandbox testing — if chosen: Sandbox testing is a trial in a safe copy, not a time slot for the live change.

After the answer: the deciding words are marked. Reason: A time agreed for making changes, usually when few people work, is a maintenance window.

#### Question in the draw: l27-r-change-2

A chat, with its history: "Bea, Systems", Chat with the help desk.

> (Bea, Systems, at the left) Before we touch the live mail server, I put the update on a copy of it that nobody uses, to see what the update does.

**Which part of change management is that?**
(the options come in an order that depends on the seed of the question)
- Sandbox testing: a trial in a safe copy, not the live system (right)
- A rollback plan: the steps that undo a change — if chosen: A rollback plan is written steps for going back. A trial run on a copy is something else.
- A backup plan: a copy of the data taken before — if chosen: A backup plan copies the data. Here, the update itself is being tried on a copy.
- A peer review: a second technician checks the work — if chosen: A peer review checks finished work. Here the update has not been applied to anything live.

After the answer: the deciding words are marked. Reason: Trying a change in a safe copy first is sandbox testing.

#### Question in the draw: l27-r-change-3

The question, read aloud as above: **After the work is finished, the people who use the system tell the desk that it works for them, and the change is accepted.**

**What is this last step called? Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - end-user acceptance
  - user acceptance
  - acceptance

After the answer: Reason: The users’ confirmation at the end is end-user acceptance. It comes after implementation and the peer review.

#### Question in the draw: l27-p-backup

A chat, with its history: "Lena, Warehouse", Chat with the help desk.

> (Lena, Warehouse, at the left) The file server gets a full backup on Sunday. Each night after that, it copies everything that changed since Sunday. It crashed on Thursday morning.

**Which backups does the restore need?**
(the options come in an order that depends on the seed of the question)
- Sunday’s full and Wednesday night’s backup only (right)
- Sunday’s full and the Monday, Tuesday and Wednesday backups — if chosen: That is how an incremental restore goes. These nightly backups each hold everything since Sunday, so Wednesday’s already includes the earlier days.
- Wednesday night’s backup alone, since it is the newest — if chosen: Wednesday’s holds only what changed since Sunday. Everything unchanged lives only in the full.
- Sunday’s full alone, since it is the only full one — if chosen: That brings back Sunday’s files and loses the changes from Monday to Wednesday.

After the answer: the deciding words are marked. Reason: A backup of everything changed since the last full is a differential. A restore needs the last full and the latest differential, and no more.

#### Question in the draw: l27-q-diff

A chat, with its history: "Hugo, Systems", Chat with the help desk.

> (Hugo, Systems, at the left) The nightly backup has a 30-minute window and little disk space. A slow restore is fine with us, because the server rarely fails.

**Which backup kind fits?**
(the options come in an order that depends on the seed of the question)
- Incremental: only what changed since the last backup (right)
- Full: a complete copy of everything, every single night — if chosen: A full copy every night is the slowest and biggest to make, so it breaks the window and the disk space.
- Differential: everything changed since the last full backup — if chosen: A differential grows a little every night, so it takes more time and space than an incremental.
- Synthetic full: a full built on the backup server — if chosen: A synthetic full is built on the backup server. It is light on the computer but is a full copy, so it takes the most space.

After the answer: the deciding words are marked. Reason: Fastest and smallest to make is incremental. The cost is the restore, which needs the last full plus every incremental in order.

#### Question in the draw: l27-q-321

The question, read aloud as above: **The 3-2-1 rule says to keep 3 copies of the data on 2 kinds of media, with some number of them somewhere else, away from the building.**

**How many copies are kept offsite? Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 1

After the answer: Reason: The 3-2-1 rule: 3 copies of the data, on 2 kinds of media, with 1 copy offsite. The original counts as one of the three.

#### Question in the draw: l27-q-full

The question, read aloud as above: **One kind of backup copies everything every time. It is the slowest and biggest to make, but a restore needs only that one backup, so it is the fastest to restore.**

**Which kind of backup is it? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - full
  - full backup

After the answer: Reason: It is the full backup. Incremental and differential backups are smaller to make but need more backups to restore.

#### Question in the draw: l27-g-restore

A chat, with its history: "Pia, Finance", Chat with the help desk.

> (Pia, Finance, at the left) A teammate saved the wrong version over the budget file yesterday. The backup has yesterday’s morning version. Before anything changes, I want to compare the two.

**How do you restore the file?**
(the options come in an order that depends on the seed of the question)
- To an alternate location, so both versions stay and can be compared (right)
- In place, over the current file, to save the time of a copy — if chosen: Restoring in place overwrites the current file before anyone has compared them.
- Delete the current file first, then restore the backup in its place — if chosen: Deleting first removes the version Pia wants to compare against.
- Run a new full backup of the drive, and compare the files later — if chosen: A new backup copies the wrong version too, and does not bring back yesterday’s file.

After the answer: the deciding words are marked. Reason: A restore to an alternate location keeps the current file, which is what a comparison needs. A restore in place overwrites it.

#### Question in the draw: l27-g-synth

A chat, with its history: "Eda, Systems", Chat with the help desk.

> (Eda, Systems, at the left) The weekly full backup puts too much load on the server. We would like a new full copy made on the backup server from the last full and the changes, without reading the server again.

**Which backup kind is that?**
(the options come in an order that depends on the seed of the question)
- A synthetic full backup (right)
- A differential backup — if chosen: A differential copies what changed since the last full. It does not build a new full copy.
- An incremental backup — if chosen: An incremental copies what changed since the last backup. It does not build a new full copy.
- A full backup — if chosen: A full backup reads everything from the server again, which is the load Eda wants to avoid.

After the answer: the deciding words are marked. Reason: A new full built on the backup server from the last full plus the changes is a synthetic full.

#### Question in the draw: l27-k-backup

The question, read aloud as above: **A rotation keeps daily copies (the son), weekly copies (the father) and monthly copies (the grandfather), each kept longer than the one before.**

**What is the rotation called? Type the three letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - gfs
  - grandfather-father-son

After the answer: Reason: The rotation is GFS: grandfather, father, son.

#### Question in the draw: l27-k-incr

A chat, with its history: "Rae, Systems", Chat with the help desk.

> (Rae, Systems, at the left) We make a full backup on Monday. Each night after that, we copy only what changed since the night before. The server failed on Thursday morning.

**Which backups does the restore need?**
(the options come in an order that depends on the seed of the question)
- Monday’s full and the Monday, Tuesday and Wednesday night backups (right)
- Monday’s full and Wednesday night’s backup, which holds all the changes — if chosen: That is how a differential restore goes. Wednesday’s here holds only Wednesday’s changes, so the other nights are needed too.
- Wednesday night’s backup alone, since it is the newest one made — if chosen: Wednesday’s holds only one day of changes. Everything else lives in the full and the earlier nights.
- Monday’s full alone, because a full backup is the complete copy — if chosen: That brings back Monday’s files and loses every change made on Tuesday and Wednesday.

After the answer: the deciding words are marked. Reason: Nightly copies of only what changed since the last backup are incremental. A restore needs the last full and every incremental after it, in order.

#### Question in the draw: l27-r-backup-1

A chat, with its history: "Cal, Office", Chat with the help desk.

> (Cal, Office, at the left) We keep copies on a disk and on tapes, and both sit in the server room. A fire in that room destroyed the server, the disk and the tapes.

**What did the backups lack?**
(the options come in an order that depends on the seed of the question)
- A copy offsite, away from the building (right)
- A third kind of media kept in the same room — if chosen: A third kind in the same room would have burned too. The place was the problem.
- A full backup instead of an incremental one — if chosen: The kind of backup does not matter when every copy is in the same room.
- A UPS to protect the server room from power loss — if chosen: A UPS handles power problems. It does not save copies from a fire.

After the answer: the deciding words are marked. Reason: A copy kept only in the building is lost with the building. The 3-2-1 rule puts one copy offsite.

#### Question in the draw: l27-r-backup-2

A chat, with its history: "Dee, Accounts", Chat with the help desk.

> (Dee, Accounts, at the left) Our backup makes a full copy on Sunday, and each night it copies only what changed since the night before. The drive failed on Thursday morning.

**What does the restore need?**
(the options come in an order that depends on the seed of the question)
- Sunday’s full and the Monday, Tuesday and Wednesday backups, in order (right)
- Sunday’s full and only Wednesday night’s backup — if chosen: That is how a differential restore goes. These nightly copies hold just one night of changes each.
- Wednesday night’s backup alone, since it is the newest — if chosen: Wednesday’s copy holds only Wednesday’s changes.
- Sunday’s full alone, since a full holds everything — if chosen: The full holds the files as they were on Sunday. The changes since then are in the nightly copies.

After the answer: the deciding words are marked. Reason: A backup of what changed since the last backup of any kind is incremental. Its restore needs the last full plus every incremental, in order.

#### Question in the draw: l27-r-backup-3

A chat, with its history: "Eve, Owner", Chat with the help desk.

> (Eve, Owner, at the left) We have run nightly backups for two years. The program says “success” every morning. Nobody has ever tried to get a file back from it.

**What should the desk do?**
(the options come in an order that depends on the seed of the question)
- Restore a sample file on a regular schedule, to prove that backups work (right)
- Nothing: a success message proves that the backup is good — if chosen: The message says the copy finished. Only a restore shows that the data can come back.
- Make a second backup of the same drive with the same program — if chosen: A second copy by the same program carries the same untested risk.
- Switch from nightly to weekly backups to reduce the risk — if chosen: Fewer backups do not make them any more tested.

After the answer: the deciding words are marked. Reason: A backup is tested by restoring from it on a regular schedule.

#### Question in the draw: l27-p-esd

A chat, with its history: "Tim, Field tech", Chat with the help desk.

> (Tim, Field tech, at the left) I am about to swap the memory in a desktop. I have an ESD wrist strap. The side panel is off and I am deciding where to clip the strap.

**Where does the strap go, and what comes first?**
(the options come in an order that depends on the seed of the question)
- On bare metal of the computer’s frame, after the power cord is unplugged (right)
- On the memory stick itself, so both stay at the same charge — if chosen: The strap goes to bare metal that is grounded, not to the part. Clipped to the stick, it drains nothing away.
- On any plastic panel, as long as the strap touches his skin — if chosen: Plastic does not carry static away. The clip needs bare metal.
- On the power cord’s plug, with the computer still switched on — if chosen: Working inside a computer that is switched on risks shock, and the strap is no substitute for unplugging it.

After the answer: the deciding words are marked. Reason: An ESD strap clips to bare metal of the frame, and power is disconnected before any repair.

#### Question in the draw: l27-q-ups

A chat, with its history: "Gail, Clinic", Chat with the help desk.

> (Gail, Clinic, at the left) The power flickered for two seconds and the reception computer restarted. The patient notes she was typing were lost. Nothing was damaged.

**What do you recommend for that computer?**
(the options come in an order that depends on the seed of the question)
- A UPS, a battery box that carries the computer through a power loss (right)
- A surge suppressor, which blocks power spikes from reaching the computer — if chosen: A surge suppressor guards against a spike. It cannot keep the computer running when the power drops.
- A cooler room and clear vents, which keep the computer from overheating — if chosen: Heat was not the problem. The computer restarted because the power dropped.
- An ESD mat under the chair, which drains static from the person — if chosen: An ESD mat is for static. Nothing in the story points to static.

After the answer: the deciding words are marked. Reason: A short loss of power that restarts a computer is what a UPS covers. A surge suppressor handles spikes only.

#### Question in the draw: l27-q-humid

A chat, with its history: "Bob, Archive", Chat with the help desk.

> (Bob, Archive, at the left) In the dry winter air of the archive room, people get small static shocks from the metal shelves, and two memory modules have failed in the PCs there.

**Which part of the environment needs controlling?**
(the options come in an order that depends on the seed of the question)
- Humidity: air that is too dry builds up static charge (right)
- Ventilation: the PCs need their vents blocked to keep dust out — if chosen: Blocking vents makes parts hotter. Vents are kept clear.
- Surges: a spike on the power line is burning out the modules — if chosen: A power surge does not give people shocks from metal shelves. Static in dry air does.
- Temperature: the room must be made as warm as possible — if chosen: Heat does not cure static, and it shortens the life of parts.

After the answer: the deciding words are marked. Reason: Too dry raises static, too humid brings moisture and corrosion. Humidity is one of the things the room controls.

#### Question in the draw: l27-g-fire

A chat, with its history: "Leo, Facilities", Chat with the help desk.

> (Leo, Facilities, at the left) A power strip behind the server rack is smoking and sparking, and a small flame has started. A water extinguisher hangs by the door.

**What is the first thing to do?**
(the options come in an order that depends on the seed of the question)
- Leave the room, warn people, and call emergency services (right)
- Pour the water on the strip, since it is a small fire — if chosen: Water on an electrical fire can carry current to the person. It is never used on one.
- Unplug the rack’s other cables, one by one, to save the servers — if chosen: Reaching into a smoking, sparking rack risks shock and burns, and it leaves the fire growing.
- Put on goggles and a mask, then carry the servers out — if chosen: Goggles and a mask protect against dust. They do not make a fire safe to work around.

After the answer: the deciding words are marked. Reason: Fire safety: never water on an electrical fire; leave, warn and call emergency services.

#### Question in the draw: l27-g-msds

The question, read aloud as above: **A box of used toner cartridges and a swollen battery need disposing of. The sheet that comes with such products says what is inside, the hazards, and how to handle and dispose of them.**

**What is the sheet called? Type the four letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - msds
  - sds

After the answer: Reason: It is the MSDS (material safety data sheet, now often called SDS). Batteries and toner do not go in the regular trash.

#### Question in the draw: l27-k-safety

A chat, with its history: "Wade, Server room", Chat with the help desk.

> (Wade, Server room, at the left) The fans in the rack are thick with dust and the rack is warm. I want to clean it this afternoon.

**How is the dust removed?**
(the options come in an order that depends on the seed of the question)
- Blow it out with compressed air, fans held still, goggles on (right)
- Wipe the boards with a damp cloth while the rack is still running — if chosen: Moisture on live boards risks a short and a shock. Power is disconnected for any repair.
- Spray cleaner on the fans and let them dry themselves on power — if chosen: Liquid on a running fan can short it, and the cleaner can damage the parts.
- Leave it, because dust only matters for how the room looks — if chosen: Dust clogs fans and heat sinks, so parts run hot and fail. It is a real problem.

After the answer: the deciding words are marked. Reason: Dust is cleaned with compressed air (fans held still, goggles and mask) or an ESD-safe vacuum, never with liquid on live parts.

#### Question in the draw: l27-k-lift

A chat, with its history: "Ora, Stockroom", Chat with the help desk.

> (Ora, Stockroom, at the left) I have to move a heavy UPS (a battery box) from the floor to a shelf in the server room. I am on my own today, and it is awkward to hold.

**What is the safe way to move it?**
(the options come in an order that depends on the seed of the question)
- Bend the knees, keep the back straight and the load close, or use a cart (right)
- Bend over from the waist and lift quickly so the strain is over fast — if chosen: Lifting with a bent back is how backs are injured. The legs should do the work.
- Lift it by the power cord so that both hands are free to steer it — if chosen: A cord is not a handle. It can tear out, and the load drops.
- Put on an ESD strap first, since a battery box can hold a charge — if chosen: The strap guards parts from static. It does nothing for the weight of the load.

After the answer: the deciding words are marked. Reason: A heavy load is lifted with the knees bent, the back straight and the load close, or moved with a cart or a second person.

#### Question in the draw: l27-r-safety-1

A chat, with its history: "Fay, Facilities", Chat with the help desk.

> (Fay, Facilities, at the left) A technician has to move a 60-pound laser printer from the floor onto a shelf by himself, today.

**What is the safe way?**
(the options come in an order that depends on the seed of the question)
- Bend the knees, keep the back straight, hold it close, or use a cart or a helper (right)
- Bend at the waist and lift with the back, to move it fast — if chosen: Lifting with the back is how backs get hurt.
- Hold it at arm’s length so it stays away from the body — if chosen: A load held away from the body strains the back more. Keep it close.
- Lift it alone in one go, because it is only 60 pounds — if chosen: A load that heavy gets a cart or a helper, not a guess about how strong one person is.

After the answer: the deciding words are marked. Reason: Lifting is done with the legs, the back straight and the load close, and heavy things get a cart or a second person.

#### Question in the draw: l27-r-safety-2

A chat, with its history: "Gil, Reception", Chat with the help desk.

> (Gil, Reception, at the left) Three new printers were plugged in using long cables that run across the hallway floor to the one wall outlet. Someone has already tripped.

**Which safety practice fixes it?**
(the options come in an order that depends on the seed of the question)
- Cable management: bundle the cables and run them along the wall (right)
- Put a warning sign beside the cables and leave them where they are — if chosen: A sign warns people, but the hazard stays.
- Use even longer cables so that they lie flatter on the floor — if chosen: Longer cables across a hallway are still across a hallway.
- Wear antistatic bags over the plugs to keep out the dust — if chosen: Antistatic bags store parts. They have nothing to do with a trip hazard.

After the answer: the deciding words are marked. Reason: Tying cables together and keeping them out of walkways is cable management.

#### Question in the draw: l27-r-safety-3

A chat, with its history: "Hana, Stockroom", Chat with the help desk.

> (Hana, Stockroom, at the left) A laptop battery in the stockroom has swollen, and there is a box of used toner cartridges on the shelf beside it. I need to know how to get rid of them.

**Where does the desk find out how to handle and dispose of them?**
(the options come in an order that depends on the seed of the question)
- The MSDS, the data sheet that comes with the product (right)
- The EULA that came with the laptop’s software — if chosen: A EULA is software terms. It says nothing about disposing of a battery.
- The rollback plan for the last change to the laptops — if chosen: A rollback plan undoes changes. It is not a safety document.
- The acceptable use policy that staff sign each year — if chosen: An AUP says how staff use computers, not how to dispose of batteries and toner.

After the answer: the deciding words are marked. Reason: How to handle, store and dispose of batteries and toner is in the MSDS. They do not go in the regular trash.

#### Question in the draw: l27-w-evid

A chat, with its history: "Dana, HR", Chat with the help desk.

> (Dana, HR, at the left) My laptop is slow and the drive says it is almost full. Can you clean it up?

A plain table, "What you saw while checking the drive":

> Folder  |  What is in it  (the column heads)
> Downloads: a spreadsheet with about 400 rows of full credit card numbers and names
> Documents: a note that says “sell the list Friday”

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Stop, change nothing, and tell your manager what you saw (right)
- Delete the spreadsheet and wipe the drive to protect the company — if chosen: Deleting or wiping destroys what may be evidence, and it is not your decision to make.
- Copy the spreadsheet to a USB stick to show your manager — if chosen: Copying files off the laptop changes it and starts a copy nobody has a record of. The drive is copied the proper way, by the people who handle evidence.
- Call the police yourself, right away, from your own phone — if chosen: Management is told first and decides about law enforcement. Telling the police is not the technician’s call.

After the answer: the deciding words are marked. Reason: The first guess, clean it up, would have deleted evidence. Prohibited content or a crime found on a drive means: stop, leave it alone, inform management, document everything, keep the chain of custody, and let the copy be examined while the original stays unchanged.
The working:
- The ticket says “clean it up”. Test that against what you found.: The first guess is the usual one: delete big files, free space. But one folder holds 400 card numbers and a note about selling them. This is no longer a slow laptop.
- Stop and leave everything as it is.: Delete nothing, clean nothing, run no scan, do not shut it down on your own. Every change can damage evidence.
- Inform management, and write it down.: Tell your manager at once. Incident documentation: what you saw, the time, the folders, and every click you made on the laptop.
- Keep the chain of custody.: The laptop goes into a locked place, with a sheet that records who held it, when and why. Anyone who takes it signs the sheet.
- Leave the copying to the people who handle evidence.: They collect memory first, since it is lost at power-off, then make an exact copy of the drive and check it with a hash. They examine the copy, and the original stays unchanged.

#### Question in the draw: l27-q-custody

A chat, with its history: "Sam, Security", Chat with the help desk.

> (Sam, Security, at the left) I made an exact copy of the drive from the Reyes laptop and gave the original to Legal. I did not write down who took it, or when.

**Which record is now missing?**
(the options come in an order that depends on the seed of the question)
- The chain of custody: who held the evidence, and when (right)
- The order of volatility: which evidence to collect first — if chosen: The order of volatility says what to collect first. It is a plan for collecting, not a record of who held the evidence.
- The rollback plan: the steps to undo a change that failed — if chosen: A rollback plan belongs to change management. This is an evidence ticket.
- The acceptable use policy: what staff may do on company computers — if chosen: The AUP says what staff may do. It does not record who held a drive.

After the answer: the deciding words are marked. Reason: The written record of who held the evidence, when and where is the chain of custody.

#### Question in the draw: l27-g-order

The question, read aloud as above: **A computer is still running, and it holds evidence. Part of that evidence is on the drive and part is in memory, which is lost when the power goes off.**

**Which is collected first? Type memory or drive.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - memory
  - ram
  - in memory

After the answer: Reason: The order of volatility collects what disappears first. Memory goes when the power does, so it comes before the files on the drive.

#### Question in the draw: l27-g-image

The question, read aloud as above: **To examine a suspect drive, nobody works on the original. They make a full, exact copy of the drive first, and check it against the original.**

**What is that exact copy of a drive called? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - image
  - drive image
  - disk image
  - forensic image

After the answer: Reason: The exact copy is an image. It is checked with a hash, and the image is examined while the original stays unchanged.

#### Question in the draw: l27-k-evidence

A chat, with its history: "Wes, Security", Chat with the help desk.

> (Wes, Security, at the left) I made an exact copy of a suspect drive for an investigation. A lawyer will want proof later that the copy is identical to the original.

**How is that proven?**
(the options come in an order that depends on the seed of the question)
- By checking both with a hash, a fingerprint number that must match (right)
- By leaving the original powered on beside the copy until the trial — if chosen: Leaving the original running changes it, and the hash is what shows the match.
- By writing “same as original” on the label of the copy — if chosen: A label is a claim. A hash is a check anyone can repeat.
- By opening both drives and comparing the files by eye — if chosen: Opening the original changes it, and eyes cannot compare every byte.

After the answer: the deciding words are marked. Reason: An exact copy of a drive is checked against the original with a hash, so the original stays unchanged and the match can be shown.

#### Question in the draw: l27-r-evidence-1

A chat, with its history: "Ivo, Security", Chat with the help desk.

> (Ivo, Security, at the left) I finished imaging a drive for an investigation, and the lawyers are coming to collect the image today.

**What keeps the chain of custody intact?**
(the options come in an order that depends on the seed of the question)
- A hand-off sheet signed by both people, with date and time (right)
- Leaving the image on the lawyers’ desk when nobody is there — if chosen: That leaves a gap in the record, since nobody can say who held it.
- Emailing the image to them and deleting the local copy — if chosen: Deleting the copy and sending the file leaves no record of who handled it.
- Telling them in person, without writing anything down — if chosen: A spoken hand-off leaves no record to prove who held the evidence.

After the answer: the deciding words are marked. Reason: Each hand-off of evidence is written down and signed. That record is the chain of custody.

#### Question in the draw: l27-r-evidence-2

The question, read aloud as above: **The order of volatility collects what disappears first. Memory comes first, then the files on the drive, and then a last group kept elsewhere.**

**Name one thing in that last group.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - logs
  - backups
  - log
  - archives
  - archive
  - logs and backups
  - backup

After the answer: Reason: The most lasting evidence is collected last: logs and backups kept elsewhere change least.

#### Question in the draw: l27-r-evidence-3

A chat, with its history: "Jon, Server team", Chat with the help desk.

> (Jon, Server team, at the left) While patching a server I saw signs that someone had been copying customer files out at night. I was only there to patch.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Tell management and write down what you saw and did (right)
- Delete the suspicious logins to stop the copying right now — if chosen: Deleting logs destroys evidence. Stopping an attack is decided by management and security.
- Email the customers to say their files may have been stolen — if chosen: Telling customers is a company decision made by management, not by the technician.
- Finish the patch, restart the server and say nothing — if chosen: A restart loses what is in memory, and saying nothing hides the evidence.

After the answer: the deciding words are marked. Reason: Signs of an attack are reported to management and documented, and the evidence is left unchanged.

#### Question in the draw: l28-q-license

A chat, with its history: "Ana, Shop owner", Chat with the help desk.

> (Ana, Shop owner, at the left) I bought one copy of an office suite for myself, on a personal license. I want to install it on the five PCs in my shop.

**What is the problem?**
(the options come in an order that depends on the seed of the question)
- A personal license covers one person; a business needs corporate ones (right)
- Perpetual licenses expire after a year and must be bought again — if chosen: A perpetual license is paid once and used for good. A subscription is the kind that runs out.
- The DRM will block the second install, and only a new EULA lifts it — if chosen: DRM can limit how many installs there are, but a new EULA does not lift it. The real problem is the kind of license.
- There is none: a license bought once covers every PC in a building — if chosen: A license covers what its terms say. A personal one covers one person.

After the answer: the deciding words are marked. Reason: A personal license covers one person’s own use. Business PCs need corporate licenses.

#### Question in the draw: l28-q-pii

The question, read aloud as above: **A name together with an address and a birth date can point to one real person, and the company must protect it as regulated data.**

**What is this kind of data called? Type the three letters.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - pii

After the answer: Reason: It is PII, personally identifiable information. Credit card numbers, government IDs and healthcare records are the other regulated kinds.

#### Question in the draw: l28-g-nda

A chat, with its history: "Carla, Legal", Chat with the help desk.

> (Carla, Legal, at the left) We are about to show a partner company our product plans and see theirs. Both sides want to be bound to keep the other’s secrets.

**Which agreement is this?**
(the options come in an order that depends on the seed of the question)
- An MNDA, a mutual nondisclosure agreement that binds both (right)
- An NDA that only our side signs, covering our plans alone — if chosen: A one-way NDA binds only one party. Both want to be bound.
- An EULA, the terms a person accepts when installing software — if chosen: A EULA covers software use. It says nothing about secrets exchanged by two companies.
- An AUP, the rules for how staff use company computers — if chosen: An AUP governs the company’s own staff. It is not an agreement between two companies.

After the answer: the deciding words are marked. Reason: Two parties each protecting the other’s secrets is a mutual NDA (MNDA).

#### Question in the draw: l28-g-drm

A chat, with its history: "Gus, Studio", Chat with the help desk.

> (Gus, Studio, at the left) A film I bought from an online store plays on my laptop but not on my tablet. The store says the film is protected so that it cannot be freely copied.

**What is the protection called?**
(the options come in an order that depends on the seed of the question)
- DRM, digital rights management for content (right)
- A EULA, the terms accepted when installing software — if chosen: A EULA is an agreement a person accepts. The limit on the film is built into the file.
- An AUP, the company’s rules for using its computers — if chosen: An AUP covers how staff use company computers, not the film.
- An MNDA, a promise by two sides to keep secrets — if chosen: An MNDA is an agreement between two parties and has nothing to do with a film.

After the answer: the deciding words are marked. Reason: Technology that limits copying or playing of content you bought is DRM.

#### Question in the draw: l28-k-policy

A chat, with its history: "Mona, Clinic", Chat with the help desk.

> (Mona, Clinic, at the left) A nurse asked me to email a patient’s records to her personal address so that she can finish her notes at home.

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- No: these are regulated records, and a personal address is not approved (right)
- Yes: she works there, so any address she picks is fine — if chosen: Working there does not make any address safe. The records leave the company’s control.
- Yes, if the email is marked private in the subject line — if chosen: A label in the subject line protects nothing.
- Yes: PII rules only cover credit cards and government IDs — if chosen: PII and healthcare records are regulated too. Credit cards are only one kind.

After the answer: the deciding words are marked. Reason: Healthcare records are regulated data, kept inside approved channels and handled only by the people who need them.

#### Question in the draw: l28-r-policy-1

A chat, with its history: "Kai, Developer", Chat with the help desk.

> (Kai, Developer, at the left) We use some free Linux tools at work. A coworker says that free means there are no rules about how we may use them.

**What is true of open source?**
(the options come in an order that depends on the seed of the question)
- The code is public and free to use, but it still comes with license terms (right)
- It has no license, since the code is public — if chosen: Public code still has a license. Public does not mean free of terms.
- It is licensed only for personal use, never at work — if chosen: Open source licenses commonly allow business use. What matters is each one’s terms.
- It carries a DRM lock that blocks copying the code — if chosen: Open source is the opposite of locked: the code is open.

After the answer: the deciding words are marked. Reason: Open source is free and public but still licensed. The terms are read and followed.

#### Question in the draw: l28-r-policy-2

A chat, with its history: "Lou, Sales", Chat with the help desk.

> (Lou, Sales, at the left) Before sign-in, every company PC shows a screen: “Use of these computers is monitored and covered by the company’s acceptable use policy. Click OK to continue.”

**What is this window called?**
(the options come in an order that depends on the seed of the question)
- A splash screen (right)
- An MNDA — if chosen: An MNDA is an agreement between two parties. This is a notice to staff.
- A change freeze — if chosen: A change freeze is a time when changes are not allowed.
- A EULA — if chosen: A EULA is the terms for software. This notice is about the company’s rules for its computers.

After the answer: the deciding words are marked. Reason: A notice shown before sign-in that staff accept is a splash screen, and it points to the acceptable use policy.

#### Question in the draw: l28-r-policy-3

A chat, with its history: "Mia, Shop", Chat with the help desk.

> (Mia, Shop, at the left) Our shop keeps spreadsheets with full customer card numbers going back ten years. No rule has ever told us when to destroy them.

**Which good practice is missing?**
(the options come in an order that depends on the seed of the question)
- Retention rules: how long to keep records, and when to destroy them (right)
- A perpetual license that lets the shop keep the files forever — if chosen: A license is about software. Holding customer card data has nothing to do with it.
- An MNDA signed with every customer in the spreadsheet — if chosen: An MNDA is between two companies, and does not decide how long card data is kept.
- DRM on the spreadsheets so that customers cannot copy them — if chosen: DRM limits copying of content. It does not decide how long to keep data.

After the answer: the deciding words are marked. Reason: Regulated data comes with retention: a stated time to keep it and a time to destroy it.

#### Question in the draw: l28-q-script

A chat, with its history: "Vera, Accounts", Chat with the help desk.

> (Vera, Accounts, at the left) I found a .ps1 file on a forum that says it clears temp files and speeds things up. Can I run it on the accounting PC today?

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Read it first and test it on a spare PC or in a sandbox (right)
- Run it now; it is only text, so it cannot harm the PC — if chosen: A script is text that does things. It can install malware or change settings, and it runs with the user’s rights.
- Rename it .bat first, because Windows trusts those more — if chosen: Renaming does not make it safe. It only changes how Windows tries to run the same lines.
- Run it as an administrator, so it finishes without errors — if chosen: More rights let a bad script do more damage. It does not make a script safe.

After the answer: the deciding words are marked. Reason: Scripts are read and tested on a safe machine before they reach a real one, and only from a trusted source.

#### Question in the draw: l28-g-bat

The question, read aloud as above: **A batch file ends in .bat, and a shell script on Linux ends in .sh. A PowerShell script has its own ending.**

**What does a PowerShell script file end in? Type it with the dot.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - .ps1

After the answer: Reason: PowerShell scripts end in .ps1. A .bat is a batch file, .vbs is VBScript, .sh a shell script, .js JavaScript and .py Python.

#### Question in the draw: l28-k-scripts

A chat, with its history: "Hal, Intern", Chat with the help desk.

> (Hal, Intern, at the left) My cleanup script opened thousands of files and never closed them. The PC slowed down and then froze. Nothing was installed and no settings changed.

**Which risk of scripts is this?**
(the options come in an order that depends on the seed of the question)
- A crash from mishandled resources of the PC (right)
- Unintentionally introducing malware to the PC — if chosen: Nothing was installed, so no malware came in.
- Inadvertently changing system settings of the PC — if chosen: No settings changed. The problem was files left open.
- Running a script that came from an untrusted source — if chosen: The script was the intern’s own, and the problem was how it handled files.

After the answer: the deciding words are marked. Reason: Using up memory or leaving files open is the third risk of scripts: a crash from mishandled resources.

#### Question in the draw: l28-r-scripts-1

The question, read aloud as above: **A batch file ends in .bat and a PowerShell script ends in .ps1. A shell script, for Linux and macOS, has a third ending.**

**What does a shell script end in? Type it with the dot.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - .sh

After the answer: Reason: A shell script ends in .sh. It runs on Linux and macOS, not on Windows.

#### Question in the draw: l28-r-scripts-2

A chat, with its history: "Nia, Developer", Chat with the help desk.

> (Nia, Developer, at the left) I wrote one script that must run the same way on our Windows laptops, our Macs and our Linux servers. Python is installed on all of them.

**Which script file ending works on all three?**
(the options come in an order that depends on the seed of the question)
- .py, a Python script (right)
- .bat, a batch file — if chosen: A batch file runs Command Prompt commands, so it is for Windows only.
- .vbs, a VBScript file — if chosen: VBScript is an older Windows scripting language.
- .sh, a shell script — if chosen: A shell script runs on Linux and macOS but not on Windows.

After the answer: the deciding words are marked. Reason: Python scripts (.py) run on any system with Python. .bat and .vbs are Windows; .sh is Linux and macOS.

#### Question in the draw: l28-r-scripts-3

A chat, with its history: "Oz, Desk", Chat with the help desk.

> (Oz, Desk, at the left) We pushed a script to every PC to change one Windows setting. Afterward, one accounting program would not open on any of them.

**Which risk of scripts is this?**
(the options come in an order that depends on the seed of the question)
- Inadvertently changing system settings (right)
- Unintentionally introducing malware — if chosen: Nothing in the story points to malware. A setting changed.
- A crash from mishandled resources — if chosen: The PCs did not crash from using up memory. One program stopped opening.
- Losing the backup of every PC at the same time — if chosen: The backups are not part of the story.

After the answer: the deciding words are marked. Reason: A script that changes a setting nobody meant to change is the second risk of scripts, and it reaches every machine it runs on.

#### Question in the draw: l28-w-remote

A chat, with its history: "Priya, Branch IT", Chat with the help desk.

> (Priya, Branch IT, at the left) The Linux file server at the Dayton branch stopped taking logins. I need to restart its file service tonight. I am at home on my laptop.

A plain table, "From the desk’s notes on the Dayton branch":

> Note  (the column heads)
> The file server runs Linux with no desktop: it has only a text command line.
> Company computers outside the office must connect through the company VPN. The server has no direct line to the internet.

**Which tools does she use, in order?**
(the options come in an order that depends on the seed of the question)
- The VPN first, then SSH to the server (right)
- RDP straight to the server’s address — if chosen: RDP shows a Windows desktop. This server is Linux with no desktop, and it has no direct line to the internet either.
- VNC straight to the server, with nothing in front of it — if chosen: VNC shows a screen, and the server has none to show. It would also expose the server’s door to the internet.
- A screen-sharing app, run by a user at the branch — if chosen: That needs a person at the branch to start it, and a server with no desktop has no screen to share.

After the answer: the deciding words are marked. Reason: A Linux server with only a command line is reached with SSH, and from outside the company the way in is the VPN. RDP is for a Windows desktop and VNC would have left a door open to the internet.
The working:
- Name the favorite tool, then test it against the server.: The first guess is RDP, because it is the tool most people know. But RDP is for a Windows desktop, and note 1 says this server has no desktop. RDP is ruled out.
- Check how she gets to the branch at all.: Note 2: the server is only reachable from the company network, so she connects the VPN first. The VPN is not a screen tool; it is the way in.
- Pick the tool that fits a Linux server with only a command line.: SSH, Secure Shell, on port 22. She signs in with her own account and types the command that restarts the file service.
- Check, then close properly.: Priya tries a login from a branch computer, and it works. The note lists the VPN, SSH, the account used and the service restarted. The VPN and SSH sessions are ended.

#### Question in the draw: l28-p-remote

A chat, with its history: "Nora, Accounts", Chat with the help desk.

> (Nora, Accounts, at the left) I am at home. I want the office file share to show up on my laptop, so that I can open a spreadsheet saved there.

**Which remote tool gets her onto the office network first?**
(the options come in an order that depends on the seed of the question)
- A VPN, which is an encrypted tunnel into the company network (right)
- RDP, which shows the Windows desktop of another computer — if chosen: RDP controls another computer’s desktop. She wants the share on her own laptop.
- SSH, which types encrypted commands on a Linux server — if chosen: SSH gives a command line on a server. It does not put a share on her laptop.
- VNC, which shows and controls the screen of another computer — if chosen: VNC shares another computer’s screen. It does not connect her laptop to the office network.

After the answer: the deciding words are marked. Reason: Reaching the office shares from home is the job of a VPN. RDP, SSH and VNC are used after you are on the network, to control a specific computer.

#### Question in the draw: l28-q-winrm

A chat, with its history: "Cy, Systems", Chat with the help desk.

> (Cy, Systems, at the left) I am at my desk. I need to run the same PowerShell command on 20 Windows servers at once, with no screens to watch.

**Which remote tool fits?**
(the options come in an order that depends on the seed of the question)
- WinRM, which runs PowerShell on remote Windows machines (right)
- VNC, which shows and controls the screen of another computer — if chosen: VNC is for watching and clicking one screen. It would not run one command on 20 servers.
- SPICE, a remote display for virtual machines — if chosen: SPICE shows a VM’s screen. It does not run commands on many servers.
- A VPN, an encrypted tunnel into the company network — if chosen: A VPN is the way into the network, not the tool that runs the command.

After the answer: the deciding words are marked. Reason: Running PowerShell commands on remote Windows machines is the job of WinRM.

#### Question in the draw: l28-g-vnc

A chat, with its history: "Eli, Help desk", Chat with the help desk.

> (Eli, Help desk, at the left) A user on a Mac needs help. I want to see exactly what is on her screen and click for her, from my Windows PC.

**Which remote tool fits?**
(the options come in an order that depends on the seed of the question)
- VNC, which shows and controls a screen on any system (right)
- RDP, which shows the desktop of a Windows computer — if chosen: RDP is built for Windows desktops. A Mac user is not on one.
- SSH, which types encrypted commands on a server — if chosen: SSH gives a command line. It does not show her screen.
- WinRM, which runs PowerShell commands on Windows machines — if chosen: WinRM runs commands on Windows machines. It shows no screen, and her Mac is not one.

After the answer: the deciding words are marked. Reason: Seeing and controlling a screen on any system is a job for VNC, or a screen-sharing tool the company allows.

#### Question in the draw: l28-g-ssh

The question, read aloud as above: **SSH, Secure Shell, gives encrypted typed commands on a Linux server. Like every service, it listens on a numbered port.**

**Which port number does SSH use? Type the number.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - 22

After the answer: Reason: SSH uses port 22. RDP uses 3389.

#### Question in the draw: l28-k-remote

A chat, with its history: "Gus, IT contractor", Chat with the help desk.

> (Gus, IT contractor, at the left) I look after 300 PCs for clients. Each night I need to patch them, watch their health, and reach any of them quickly from one console.

**Which tool is built for this?**
(the options come in an order that depends on the seed of the question)
- RMM, remote monitoring and management with an agent on each PC (right)
- RDP, which opens the desktop of one Windows computer at a time — if chosen: RDP reaches one machine per connection. It does not patch or watch hundreds.
- A VPN, which is an encrypted tunnel into a network — if chosen: A VPN is the way in to a network. It does not manage the machines.
- SPICE, which shows a virtual machine’s screen — if chosen: SPICE is for virtual machines’ screens, not for patching 300 PCs.

After the answer: the deciding words are marked. Reason: One console to patch, watch and control many machines is RMM.

#### Question in the draw: l28-r-remote-1

A chat, with its history: "Pat, Network", Chat with the help desk.

> (Pat, Network, at the left) I need to open a command line on a Linux router from my laptop, and everything I type must be encrypted.

**Which tool fits?**
(the options come in an order that depends on the seed of the question)
- SSH, Secure Shell, on port 22 (right)
- RDP, which shows a Windows desktop — if chosen: RDP is for a Windows desktop. A router has none.
- VNC, which shares another computer’s screen — if chosen: A router has no screen to share, and VNC is often weakly protected.
- SPICE, which shows a virtual machine’s screen — if chosen: SPICE is for virtual machines, not for a router.

After the answer: the deciding words are marked. Reason: Encrypted typed commands on a Linux server or network device are SSH.

#### Question in the draw: l28-r-remote-2

A chat, with its history: "Quin, Systems", Chat with the help desk.

> (Quin, Systems, at the left) RDP on the accounting server is open straight to the internet on its normal port, and thousands of failed sign-in attempts arrive each hour.

**What fixes the exposure?**
(the options come in an order that depends on the seed of the question)
- Close it to the internet and reach it through a VPN with MFA (right)
- Leave it open and choose a longer password for the account — if chosen: A longer password helps but leaves the door open to everyone. The exposure is the problem.
- Swap RDP for VNC and leave that open to the internet too — if chosen: VNC is often weakly protected, so this opens the same door with a worse lock.
- Give all staff the same shared admin password to keep it simple — if chosen: A shared password makes it harder to tell who did what.

After the answer: the deciding words are marked. Reason: RDP is reached through a VPN with strong sign-in and MFA, never open to the internet.

#### Question in the draw: l28-r-remote-3

A chat, with its history: "Rex, Server team", Chat with the help desk.

> (Rex, Server team, at the left) I run virtual machines on a Linux host. I want to open one VM’s screen from my laptop, with sound and USB devices passed through.

**Which remote display tool is built for this?**
(the options come in an order that depends on the seed of the question)
- SPICE, a remote display for virtual machines (right)
- WinRM, which runs PowerShell commands on Windows — if chosen: WinRM runs commands on Windows machines. It shows no VM screen.
- RMM, a console for patching many computers — if chosen: RMM manages many machines through agents. It is not a VM screen.
- A VPN, an encrypted tunnel into a network — if chosen: A VPN is the way into the network, not a screen tool.

After the answer: the deciding words are marked. Reason: A remote screen for a virtual machine, with sound and USB, is SPICE.

#### Question in the draw: l28-q-ai

A chat, with its history: "Dev, Customer service", Chat with the help desk.

> (Dev, Customer service, at the left) I pasted a customer’s name, address and card details into a public AI chatbot to help write a reply. The answer was good. Was that fine?

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- No: a public AI service may keep what is typed in, even data (right)
- Yes: the chatbot deletes everything when the window is closed — if chosen: A public service makes no such promise. The text may be kept.
- Yes, as long as the reply is checked for plagiarism afterward — if chosen: Plagiarism is about passing off work as your own. It has nothing to do with where customer data goes.
- Yes: the answer was good, so the tool can be trusted with data — if chosen: A good answer does not make the service safe. What matters is who keeps what is typed.

After the answer: the deciding words are marked. Reason: Private and regulated data stays out of a public AI service, whatever the quality of the answer.

#### Question in the draw: l28-q-public

The question, read aloud as above: **Staff must not paste passwords or customer data into one kind of AI service, because it may keep and learn from what is typed. The other kind is run by the company and keeps data inside.**

**Which kind may keep what you type? Type public or private.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - public

After the answer: Reason: A public AI service may keep what is typed, so private and regulated data stays out. A private one run by the company keeps data inside.

#### Question in the draw: l28-g-halluc

A chat, with its history: "Rosa, Help desk", Chat with the help desk.

> (Rosa, Help desk, at the left) An AI told me to run a command called repair-netstack --force. It sounds right, but I cannot find it in any manual or on any website.

**What most likely happened?**
(the options come in an order that depends on the seed of the question)
- A hallucination: the AI invented a command that sounds real (right)
- Bias: the AI leaned toward one system because of its training — if chosen: Bias skews answers toward some view. A command that does not exist is invented, which is a different limit.
- Plagiarism: the AI copied the command from a manual without credit — if chosen: Plagiarism is copying work without credit. A command found nowhere was not copied from anywhere.
- Multitenancy: other customers of the AI shared the command — if chosen: Multitenancy is many customers sharing a provider’s systems. It does not explain an invented command.

After the answer: the deciding words are marked. Reason: A confident answer that does not exist anywhere is a hallucination, which is why AI answers are checked before use.

#### Question in the draw: l28-k-ai

A chat, with its history: "Ines, Teacher", Chat with the help desk.

> (Ines, Teacher, at the left) A student pasted a whole essay written by an AI and handed it in as her own work, with no mention of the tool.

**Which issue is this?**
(the options come in an order that depends on the seed of the question)
- Plagiarism: passing off AI writing as her own (right)
- A hallucination: the AI made up facts in the essay — if chosen: The story is about who wrote the essay, not about whether the facts are invented.
- Bias: the essay leans toward one view — if chosen: Nothing in the story is about the essay leaning. It is about credit.
- Accuracy: the essay could simply be wrong — if chosen: The accuracy of the essay is a separate matter from who wrote it.

After the answer: the deciding words are marked. Reason: Presenting AI text as your own work is plagiarism, which a company policy on acceptable use names alongside what data may go in.

#### Question in the draw: l28-r-ai-1

A chat, with its history: "Sol, Policy", Chat with the help desk.

> (Sol, Policy, at the left) The company’s rule says staff may use only the company’s own AI tool for anything that holds customer data, and never a public one.

**Why is that the rule?**
(the options come in an order that depends on the seed of the question)
- A private tool keeps the data inside; a public one may keep what is typed (right)
- A private tool is never wrong; a public one often is — if chosen: Any AI can be wrong. The rule is about where data goes.
- A public tool is not allowed to answer questions about customers — if chosen: The difference is who keeps the data typed in.
- A private tool avoids plagiarism; a public one does not — if chosen: Plagiarism is about passing off work as your own, not about the kind of tool.

After the answer: the deciding words are marked. Reason: The company’s own AI tool keeps data inside. A public one may keep it, so customer data stays out.

#### Question in the draw: l28-r-ai-2

A chat, with its history: "Tam, HR", Chat with the help desk.

> (Tam, HR, at the left) A tool that ranks job applicants keeps ranking people from a few well-known schools first. It was trained on the company’s past hires.

**Which limit of AI is this?**
(the options come in an order that depends on the seed of the question)
- Bias: answers lean the way the training data leaned (right)
- A hallucination: the tool invented the applicants’ schools — if chosen: The schools are real. The tool is favoring some of them.
- Plagiarism: the tool copied another company’s ranking — if chosen: Nothing was copied. The tool learned from this company’s own data.
- Metered utilization: the tool charges for each applicant — if chosen: Metered utilization is about paying for use. It does not explain a lean in the ranking.

After the answer: the deciding words are marked. Reason: Answers that lean toward what the training data leaned toward are bias.

#### Question in the draw: l28-r-ai-3

A chat, with its history: "Uma, Desk", Chat with the help desk.

> (Uma, Desk, at the left) An AI tool says that error code 0x80070005 means a broken network cable. I think it is a permissions error, but the answer sounded sure.

**What do you do before telling the user?**
(the options come in an order that depends on the seed of the question)
- Check the answer against the maker’s documentation (right)
- Send it on as is, since the AI sounded certain — if chosen: Sounding sure is not accuracy. AI can state wrong things with confidence.
- Put the same question to the AI until it gives the same answer twice — if chosen: Repeating the question can repeat the same mistake.
- Paste the user’s whole ticket into the AI for a second opinion — if chosen: Pasting the ticket may send private data to a public service.

After the answer: the deciding words are marked. Reason: AI answers are checked against the maker’s documentation before anyone acts on them.

#### Question in the draw: l28-p-vm

A chat, with its history: "Ibrahim, Shop floor", Chat with the help desk.

> (Ibrahim, Shop floor, at the left) An old time-clock program only runs on Windows 7. Our PCs have Windows 11, and we need that program every day.

**What lets a Windows 11 PC run that program?**
(the options come in an order that depends on the seed of the question)
- A virtual machine on the PC with Windows 7 running in it (right)
- A container, which carries the program on the PC’s own system — if chosen: A container shares the host’s operating system, so it cannot give the program Windows 7.
- A PaaS account, which hosts new apps that people write — if chosen: PaaS is a platform for building and running apps. It does not run an old program on an old Windows.
- A VDI desktop on a server that also runs Windows 11 — if chosen: VDI puts desktops on a server, but this one also runs Windows 11, and the program needs Windows 7.

After the answer: the deciding words are marked. Reason: An old program that needs an old system runs in a VM that holds that system. A container shares the host’s own operating system.

#### Question in the draw: l28-g-hyper

A chat, with its history: "Omar, Server team", Chat with the help desk.

> (Omar, Server team, at the left) We are putting software straight on a new server, with no operating system underneath, to run twelve virtual machines.

**Which kind of hypervisor is this?**
(the options come in an order that depends on the seed of the question)
- Type 1, which runs directly on the server hardware (right)
- Type 2, which runs as a program on an operating system — if chosen: Type 2 needs an operating system under it, such as VirtualBox on a laptop. This server has none.
- A container engine, which shares the host’s operating system — if chosen: A container engine shares an operating system, and it does not run twelve machines of their own.
- VDI, which gives people their desktops from a server — if chosen: VDI delivers desktops to people. The question is about what runs the machines.

After the answer: the deciding words are marked. Reason: A hypervisor that runs straight on the hardware is Type 1. One that runs on an operating system is Type 2.

#### Question in the draw: l28-g-vdi

A chat, with its history: "Fox, Call center", Chat with the help desk.

> (Fox, Call center, at the left) Our agents sign in from any basic device and get their own Windows desktop, which actually runs on a server in the data center.

**What is this called?**
(the options come in an order that depends on the seed of the question)
- VDI, desktop virtualization with desktops on servers (right)
- A container, a package that shares the host’s operating system — if chosen: A container packs one app. Here each agent gets a whole desktop.
- A Type 2 hypervisor, a program running on an operating system — if chosen: A hypervisor type is about where the VM software runs, not about who gets the desktops.
- A sandbox, a sealed place to open suspicious files — if chosen: A sandbox is for safe testing. Agents use these desktops all day for work.

After the answer: the deciding words are marked. Reason: Desktops that run as VMs on servers and are used from any device are VDI.

#### Question in the draw: l28-k-virtual

The question, read aloud as above: **A small package holds one app and what it needs, but it shares the host’s operating system instead of carrying a whole one. It starts in seconds.**

**What is this called? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - container
  - containers

After the answer: Reason: This is a container. A VM carries a whole guest operating system, which is why it is bigger and slower to start.

#### Question in the draw: l28-r-virtual-1

The question, read aloud as above: **A virtual machine is a computer made of software that runs inside a real one. The real computer that carries it has its own name.**

**What is the real computer called? Type one word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - host

After the answer: Reason: The real computer is the host and the virtual machine is the guest.

#### Question in the draw: l28-r-virtual-2

A chat, with its history: "Vic, Security", Chat with the help desk.

> (Vic, Security, at the left) Our analyst must open suspicious attachments safely and throw the whole machine away afterward, so nothing can spread.

**What is built for this?**
(the options come in an order that depends on the seed of the question)
- A VM used as a sandbox, deleted when the analyst is done (right)
- A VDI desktop shared by every member of the staff — if chosen: A shared VDI desktop would put the suspicious file in front of everyone.
- A container that holds the email program for each user — if chosen: A container shares the host’s operating system, so what spreads can reach the host.
- A Type 1 hypervisor installed on every employee laptop — if chosen: A hypervisor type is about where it runs, not about throwing a machine away.

After the answer: the deciding words are marked. Reason: A sealed VM deleted afterward is a sandbox.

#### Question in the draw: l28-r-virtual-3

A chat, with its history: "Wen, Server team", Chat with the help desk.

> (Wen, Server team, at the left) The new host will not start any virtual machine and shows a message about hardware virtualization. The processor has it.

**What is the likely fix?**
(the options come in an order that depends on the seed of the question)
- Turn on the processor’s virtualization feature in the firmware settings (right)
- Replace the power supply with a larger one — if chosen: Power is not what the message is about.
- Move the virtual machines to a SaaS service instead — if chosen: SaaS is a finished app, not a place for virtual machines. The host needs the feature.
- Delete the virtual disk files and make them again — if chosen: The message is about the processor’s feature, not the disk files.

After the answer: the deciding words are marked. Reason: A host needs the processor’s virtualization feature turned on in firmware, among the requirements for security, network and storage.

#### Question in the draw: l28-q-cloud

A chat, with its history: "Maya, Office manager", Chat with the help desk.

> (Maya, Office manager, at the left) We want email, calendars and documents in a browser. We do not want to run servers or look after an operating system.

**Which service level is this?**
(the options come in an order that depends on the seed of the question)
- SaaS: a finished app that the provider runs for us (right)
- IaaS: virtual servers where we manage the operating system — if chosen: IaaS leaves the customer the operating system and everything above it, which is what Maya wants to avoid.
- PaaS: a platform where we build and run our own app — if chosen: PaaS is for building your own app. Maya wants finished tools.
- A community cloud: a model, not a level of service — if chosen: Community is a cloud model, about who shares it. The question is about what is provided.

After the answer: the deciding words are marked. Reason: Finished software used in a browser is SaaS. IaaS and PaaS leave more work with the customer.

#### Question in the draw: l28-q-hybrid

A chat, with its history: "Dot, Retail", Chat with the help desk.

> (Dot, Retail, at the left) Our customer records stay in our own private cloud. For the holiday rush we rent web servers from a public cloud, and the two work together.

**Which cloud model is this?**
(the options come in an order that depends on the seed of the question)
- A hybrid cloud (right)
- A community cloud — if chosen: A community cloud is shared by several organizations. This is one company’s own mix.
- A private cloud — if chosen: Private means one organization’s own cloud alone. This one also uses a public cloud.
- A public cloud — if chosen: Public means a provider’s shared systems only. This company also runs its own.

After the answer: the deciding words are marked. Reason: A private cloud and a public one working together make a hybrid cloud.

#### Question in the draw: l28-q-ingress

The question, read aloud as above: **Cloud services are metered, and the bill can count data going out of the cloud, which is called egress. The data coming into the cloud has its own word.**

**What is data coming in called? Type the word.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - ingress

After the answer: Reason: Data going in is ingress and data going out is egress. The two can be priced differently.

#### Question in the draw: l28-g-saas

A chat, with its history: "Quinn, Developer", Chat with the help desk.

> (Quinn, Developer, at the left) We write our own app. We want the provider to run the servers, the operating system and the software that runs the code, and we only upload our code.

**Which service level is this?**
(the options come in an order that depends on the seed of the question)
- PaaS: a platform to build and run our own app (right)
- IaaS: virtual servers where we look after the operating system — if chosen: With IaaS the customer manages the operating system and everything above it. Quinn wants the provider to do that.
- SaaS: a finished app that is used in a browser — if chosen: SaaS is software someone else wrote. Quinn is running their own code.
- A private cloud: a model for one organization only — if chosen: A private cloud is a model, about who uses it. The question is about the service level.

After the answer: the deciding words are marked. Reason: The provider running everything but your own app and data is PaaS.

#### Question in the draw: l28-k-cloud

A chat, with its history: "Lin, Hospital IT", Chat with the help desk.

> (Lin, Hospital IT, at the left) Several hospitals in our region share one cloud built for their common needs. They run it together, and it is closed to everyone else.

**Which cloud model is this?**
(the options come in an order that depends on the seed of the question)
- A community cloud (right)
- A private cloud — if chosen: A private cloud serves one organization only. Several hospitals share this one.
- A public cloud — if chosen: A public cloud is open to many customers. This one is closed.
- A hybrid cloud — if chosen: Hybrid joins a private cloud and a public one. Nothing here is public.

After the answer: the deciding words are marked. Reason: A cloud shared by several organizations with the same needs, closed to others, is a community cloud.

#### Question in the draw: l28-r-cloud-1

A chat, with its history: "Xav, Finance", Chat with the help desk.

> (Xav, Finance, at the left) Our cloud bill jumped this month because we sent a very large amount of data out of the cloud to customers.

**What explains it?**
(the options come in an order that depends on the seed of the question)
- Metered utilization: egress, data going out, is counted and charged (right)
- File synchronization: the same files were kept on every device — if chosen: File synchronization keeps copies in step. It does not explain a bill for data sent out.
- Multitenancy: other customers shared our servers and the cost — if chosen: Multitenancy is sharing systems with other customers. It does not explain a jump from outgoing data.
- Availability: the provider kept the service running all month — if chosen: Availability is about staying up. The bill rose because of data sent out.

After the answer: the deciding words are marked. Reason: Cloud services are metered. Data going out (egress) can cost money.

#### Question in the draw: l28-r-cloud-2

A chat, with its history: "Yara, Shop", Chat with the help desk.

> (Yara, Shop, at the left) Our shop is quiet most of the year and very busy before the holidays. We want more servers only in the busy weeks, and fewer afterward.

**Which cloud trait is that?**
(the options come in an order that depends on the seed of the question)
- Elasticity: resources grow and shrink with demand (right)
- Dedicated resources: servers kept for one customer only — if chosen: Dedicated resources are reserved all the time, so they do not shrink with demand.
- File synchronization: files kept the same on every device — if chosen: That keeps files in step. It does not add or remove servers.
- A community cloud shared by several organizations — if chosen: A community cloud is a model, about who shares it. Growing and shrinking is a trait.

After the answer: the deciding words are marked. Reason: A service that grows and shrinks with demand is elastic.

#### Question in the draw: l28-r-cloud-3

A chat, with its history: "Zed, Studio", Chat with the help desk.

> (Zed, Studio, at the left) Photos taken on the phone show up on the laptop and the tablet a minute later, and a change made on one appears on the others.

**Which cloud trait is that?**
(the options come in an order that depends on the seed of the question)
- File synchronization (right)
- Multitenancy — if chosen: Multitenancy is many customers sharing the same systems, kept apart from each other.
- Metered utilization — if chosen: Metered means paying for what is used. It does not keep devices in step.
- IaaS — if chosen: IaaS is a service level, virtual servers. It is not the trait that keeps files the same everywhere.

After the answer: the deciding words are marked. Reason: The same files on every device, kept in step, are file synchronization.

#### Question in the draw: l26-w-priya

A chat, with its history: "Priya, Accounting", Chat with the help desk.

> (Priya, Accounting, at the left) My laptop has crawled since Monday. The fan roars even when nothing is open and the battery dies in an hour. I put a free PDF converter on it last week, but that cannot matter.

A plain table, "Task Manager while Priya has nothing open":

> Program  |  Processor  |  Memory  (the column heads)
> pdfconv-helper.exe  |  91%  |  120 MB
> Chrome  |  4%  |  310 MB
> All programs together  |  98%  |  38% of memory in use

From the ticket record: last night’s backup of Priya’s laptop finished without errors. She has Windows Home.

**What does Task Manager show?**
(the options come in an order that depends on the seed of the question)
- One unknown program uses almost all the processor while memory is mostly free (right)
- The laptop is old, so more memory and a new drive are the cure — if chosen: Memory is far from full, and no drive problem shows. Buying parts would not touch a program that eats the processor.
- Chrome is the problem, so remove it and install it again — if chosen: Chrome uses 4%. The program using 91% is another one.
- The numbers are normal, because no single program is at 100% — if chosen: With nothing open, 91% for one program is far from normal, and the whole laptop is at 98%.

After the answer: the deciding words are marked. Reason: A ticket gives a sign, not a name. Task Manager ruled out memory and showed one unknown program using the processor, which with the loud fan and short battery points to a cryptominer that came in with a Trojan. The ten steps then run in order: contain it, clean it, keep it clean.
The working:
- Write down every cause that fits “slow, hot, short battery, nothing open”.: Too little memory; a failing drive; Windows busy updating; a program using the processor; malware.
- Test the favorite cause with the cheapest check.: Priya thinks the laptop is just old. Task Manager takes seconds and changes nothing: memory is 38% in use, so memory is not the limit. One program, pdfconv-helper.exe, takes 91%.
- Work back from the signs to the kind.: A helper that came with a free converter is a Trojan: it looks useful and lets something else in. A busy processor, a loud fan and a short battery with nothing open are the signs of a cryptominer, which earns cryptocurrency for someone else on Priya’s power.
- Step 1: verify the symptoms.: Check where the file sits and that no Windows update explains the load. Nothing is deleted yet.
- Step 2: quarantine.: Her backup is from last night, so her files are safe. Take the laptop off the network: a miner reports to its owner and can spread, and cutting it off stops both.
- Step 3: disable System Restore.: She has Windows Home. Turning System Restore off clears the old restore points, which could hold a copy of the miner that a scan cannot clean.
- Steps 4 to 6: remediate, update, scan.: Fetch the newest anti-malware update on a clean computer and carry it over on a USB stick. Then scan in safe mode, where Windows loads only what it needs, so the miner does not run.
- Step 7: reimage, only if the scan fails.: Here the scan removes the helper and the miner. Had it kept coming back, you would erase the laptop and put back a clean image.
- Steps 8 to 10: keep it clean.: Schedule scans and run updates. Turn System Restore on and create a restore point of the clean laptop. Then show Priya how to download from the maker’s own site and check the hash.
- Confirm, write it up, then close.: Priya confirms the fan is quiet and the battery lasts. Write the note: the converter as the way in, the miner, the steps taken. Then close.

#### Question in the draw: l26-p-ransom

A chat, with its history: "Dan, Operations", Chat with the help desk.

> (Dan, Operations, at the left) Every file in my Documents folder now ends in .locked and none will open. A note on the screen says I must pay $800 in cryptocurrency within three days to get a key.

**Which kind of malware is this?**
(the options come in an order that depends on the seed of the question)
- Ransomware, which scrambles files and demands payment to unscramble them (right)
- Spyware, which secretly records what the user does and sends it out — if chosen: Spyware works quietly and leaves no note. These files are locked and a demand is on the screen.
- A cryptominer, which uses the computer’s power to earn money for someone else — if chosen: A miner slows the computer and heats it up. It does not lock files or leave a demand.
- Adware, which fills the screen with ads nobody asked for — if chosen: Adware shows ads. It does not lock files or demand payment.

After the answer: the deciding words are marked. Reason: Files renamed and locked, with a note that demands money, mean ransomware. Spyware, miners and adware leave other signs.

#### Question in the draw: l26-q-keylog

A chat, with its history: "Hal, Facilities", Chat with the help desk.

> (Hal, Facilities, at the left) We found a small plastic plug between the keyboard cable and the front-desk PC. Since it appeared, the receptionist’s email password has been used from another country.

**What was the plug?**
(the options come in an order that depends on the seed of the question)
- A keylogger, which records every letter and number typed so passwords can be read (right)
- A rootkit, which hides itself and other malware deep in the system — if chosen: A rootkit hides malware inside the system. It is not a plug on the cable.
- A Trojan, which looks like useful software but brings in something else — if chosen: A Trojan is software. This is a small piece of hardware.
- Stalkerware, which tracks one person for someone who knows them — if chosen: Stalkerware tracks a person’s location and messages. This plug caught typed passwords.

After the answer: the deciding words are marked. Reason: A plug that sits on the keyboard cable and a password used by a stranger fit a keylogger, which records what is typed.

#### Question in the draw: l26-q-root

A chat, with its history: "Noor, IT", Chat with the help desk.

> (Noor, IT, at the left) A PC keeps sending odd traffic. Antivirus run from inside Windows finds nothing, and twice the antivirus was found switched off.

**Which kind is it likely to be, and where should the scan run from?**
(the options come in an order that depends on the seed of the question)
- A rootkit, so scan from outside Windows, such as a recovery environment (right)
- Adware, so scan again inside Windows once the antivirus is turned back on — if chosen: Adware shows ads, and scanning inside Windows is what already found nothing.
- A virus in one file, so delete the file the user last opened — if chosen: Nothing points to one file, and a security tool switched off points to something that hides.
- A fileless attack, so scan the drive for the file it left behind — if chosen: Fileless malware leaves no file. And it would not switch the antivirus off by hiding.

After the answer: the deciding words are marked. Reason: Odd traffic, a clean scan and a security tool that keeps being switched off are the signs of something hiding: a rootkit. Scan it from outside the system it hides in.

#### Question in the draw: l26-q-miner

The question, read aloud as above: **Malware that quietly uses a computer’s power to earn cryptocurrency for someone else, leaving it slow and its fan loud, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - cryptominer
  - crypto miner
  - cryptocurrency miner

After the answer: Reason: It is a cryptominer. The signs are a slow computer, a loud fan and a short battery with nothing open.

#### Question in the draw: l26-g-trojan

A chat, with its history: "Uma, Studio", Chat with the help desk.

> (Uma, Studio, at the left) I installed a “free screen recorder” from an ad. It works, but since then my webcam light blinks on and my browser home page changed. I never agreed to anything else.

**Which kind of malware brought the rest in?**
(the options come in an order that depends on the seed of the question)
- A Trojan, software that looks useful and carries something else in (right)
- A virus, which attaches itself to files and spreads when they are shared — if chosen: No file was shared. She installed a program from an ad.
- A rootkit, which hides deep in the system — if chosen: A rootkit is about hiding. What brought the extras in was the program she chose to install.
- A boot sector virus, which sits in the part of the drive that starts the computer — if chosen: Nothing is wrong at start-up, and the trouble began after an install.

After the answer: the deciding words are marked. Reason: Software that works as advertised, and trouble that started with its install, is a Trojan carrying something else in.

#### Question in the draw: l26-g-fileless

A chat, with its history: "Luis, Server team", Chat with the help desk.

> (Luis, Server team, at the left) Antivirus scans come back clean, but every few minutes PowerShell, a built-in Windows tool, starts and talks to an outside address. There is no unknown file anywhere on the drive.

**Which kind fits, and what can catch it?**
(the options come in an order that depends on the seed of the question)
- Fileless malware, which a tool that watches behavior, such as EDR, can catch (right)
- A boot sector virus, which a scan from outside Windows will find — if chosen: A boot sector virus is a file-like thing in the start-up area, and nothing here happens at start-up.
- Adware, which shows in the browser’s list of extensions — if chosen: Adware shows ads. PowerShell calling an outside address is not an ad.
- A keylogger, which shows as a small plug on the keyboard cable — if chosen: A keylogger records typing. This is a program that keeps calling out.

After the answer: the deciding words are marked. Reason: A clean file scan, a built-in tool doing odd things and no unknown file are the signs of fileless malware. Behavior-watching tools like EDR can catch it.

#### Question in the draw: l26-g-mdr

A chat, with its history: "Rita, Owner of a twelve-person firm", Chat with the help desk.

> (Rita, Owner of a twelve-person firm, at the left) We have antivirus on every PC but no security staff. I want someone outside to watch for attacks around the clock and act on them for us.

**Which service is that?**
(the options come in an order that depends on the seed of the question)
- MDR, managed detection and response: an outside team watches and responds (right)
- EDR on its own, software that records what each computer does — if chosen: EDR is the software. Someone on her own side would still have to read its alerts and act.
- An email security gateway, which filters mail before it arrives — if chosen: A gateway filters mail only. It does not watch the computers or respond.
- A software firewall, which blocks programs on one computer — if chosen: A firewall on one computer does not watch for attacks across the firm or act on them.

After the answer: the deciding words are marked. Reason: EDR is software that watches each computer; MDR adds an outside team that watches and responds for you, and XDR widens the watching to email, network and cloud.

#### Question in the draw: l26-k-stalk

A chat, with its history: "Beth, Reception", Chat with the help desk.

> (Beth, Reception, at the left) My ex-boyfriend knows where I go and what I text. I found an app on my phone that I never installed. It has no icon on the home screen.

**Which kind of malware is this?**
(the options come in an order that depends on the seed of the question)
- Stalkerware, spyware placed to track one person (right)
- Adware, which shows ads the user never asked for — if chosen: Adware shows ads. Nothing here is an ad, and it does not explain how he knows her movements.
- A cryptominer, which earns money from the phone’s power — if chosen: A miner drains the battery and heats the phone. It does not tell anyone where she goes.
- Ransomware, which locks files and demands payment — if chosen: Nothing is locked and nobody has asked for money.

After the answer: the deciding words are marked. Reason: A hidden app plus someone who knows her movements and messages is stalkerware: spyware placed to track one person.

#### Question in the draw: l26-r-virus

A chat, with its history: "Ken, Print shop", Chat with the help desk.

> (Ken, Print shop, at the left) A coworker gave me a spreadsheet on a USB stick. Now other spreadsheets on my PC will not open, and the same thing has started on hers.

**Which kind of malware fits?**
(the options come in an order that depends on the seed of the question)
- A virus, which attaches itself to files and spreads when they are shared (right)
- A Trojan, which looks like useful software the user installs — if chosen: Nothing was installed as software. The trouble came with a shared file.
- A cryptominer, which uses the computer’s power for someone else and slows everything down — if chosen: A miner slows the computer. It does not stop files opening or follow a shared file.
- Spyware, which secretly records what the user does — if chosen: Spyware is quiet. Files that stop opening and a spread to another PC are not its signs.

After the answer: the deciding words are marked. Reason: A virus attaches itself to a file and spreads when the file is run or shared.

#### Question in the draw: l26-r-boot

A chat, with its history: "Ava, Lab", Chat with the help desk.

> (Ava, Lab, at the left) A strange message appears before the Windows logo every morning. Antivirus inside Windows finds nothing. The message is back after every restart.

**Which kind fits?**
(the options come in an order that depends on the seed of the question)
- A boot sector virus, which sits in the part of the drive that starts the computer (right)
- Fileless malware, which runs in memory using the tools Windows already has built in — if chosen: Fileless malware works inside Windows. This message appears before Windows loads.
- Adware, which shows ads in the browser — if chosen: Adware shows in the browser. This message comes before Windows even starts.
- A keylogger, which records the letters and numbers that are typed — if chosen: A keylogger records typing. It does not put a message on the screen at start-up.

After the answer: the deciding words are marked. Reason: A sign that comes before Windows loads and survives a scan inside Windows points to a boot sector virus.

#### Question in the draw: l26-r-pup

A chat, with its history: "Cy, Intake", Chat with the help desk.

> (Cy, Intake, at the left) After installing a free zip tool, my browser has a new toolbar and a “PC speed booster” program I never picked. They were on the install screens, but I clicked Next quickly.

**What are the extras called?**
(the options come in an order that depends on the seed of the question)
- PUPs, potentially unwanted programs bundled with a download (right)
- A rootkit, which hides other malware deep in the system — if chosen: The extras are in plain sight, in the browser and in the program list.
- Ransomware, which locks the user’s files and demands money to open them — if chosen: No files are locked and nobody has asked for money.
- A boot sector virus, which sits where the computer starts — if chosen: Nothing is wrong at start-up. The extras came with a download.

After the answer: the deciding words are marked. Reason: A toolbar or a “speed booster” that came bundled with a free program is a PUP.

#### Question in the draw: l26-r-fakealert

A chat, with its history: "Del, Warehouse", Chat with the help desk.

> (Del, Warehouse, at the left) My screen suddenly filled with a red page: “Virus detected! Download SecureClean now.” It showed up while I was reading news in the browser. The desk installed Microsoft Defender on this PC.

**What is this alert most likely?**
(the options come in an order that depends on the seed of the question)
- A false antivirus alert from a web page, not from Defender (right)
- A real alert from Defender, so download SecureClean — if chosen: Defender is the installed program, and it does not tell people to download another one.
- A message from Windows Update about a new patch — if chosen: Windows Update does not tell anyone to download a cleaning program.
- A sign the drive is failing, so back it up and replace the drive soon — if chosen: A failing drive does not show a red page offering a download.

After the answer: the deciding words are marked. Reason: An alert in a browser that offers a download of a program the desk never installed is a false antivirus alert. Close the browser and scan with the real security program.

#### Question in the draw: l26-r-update

A chat, with its history: "Moe, Front desk", Chat with the help desk.

> (Moe, Front desk, at the left) Windows Update fails with an error on my PC every day. Four other PCs in the office updated fine last night. I also noticed that the antivirus is switched off and will not turn on.

**What is the worry, and what is the first step?**
(the options come in an order that depends on the seed of the question)
- Malware may be blocking updates and security tools, so verify the symptoms first (right)
- Windows Update is broken, so reinstall Windows today and start again from the beginning — if chosen: Four other PCs updated fine. Reinstalling is a big step before the symptoms are verified.
- The update server is down, so wait a week and try again — if chosen: Four other PCs updated last night, so the server is up.
- The four other PCs are infected and this one is fine — if chosen: Nothing points to the other four. This PC is the one with the odd signs.

After the answer: the deciding words are marked. Reason: Updates that fail on one PC while others work, together with a security tool that cannot be turned on, suggest malware. The first of the ten steps is to verify.

#### Question in the draw: l26-p-phish

A chat, with its history: "Mara, HR", Chat with the help desk.

> (Mara, HR, at the left) A text message came to my work phone: “Your parcel is held, pay a $1.99 fee at this link.” I never ordered anything. The link looks odd.

**What is this attack called?**
(the options come in an order that depends on the seed of the question)
- Smishing, phishing carried out by text message (right)
- Vishing, phishing carried out by a phone call — if chosen: Vishing is phishing by voice. This one arrived as a text.
- QR code phishing, a fake site reached from a scanned code — if chosen: There is no QR code here: the link came in a text.
- Spear phishing, a message written for one person with their details — if chosen: Spear phishing is written for one person. This one is a general parcel story that could go to anyone.

After the answer: the deciding words are marked. Reason: A fake message sent by text is smishing: the same trick as phishing, carried by a different channel.

#### Question in the draw: l26-q-tailgate

A chat, with its history: "Reggie, Security desk", Chat with the help desk.

> (Reggie, Security desk, at the left) The camera shows a man without a badge walking into the server area right behind Ana, who held the door open for him because his hands were full. He said nothing.

**What is this called?**
(the options come in an order that depends on the seed of the question)
- Tailgating, following an authorized person through a door (right)
- Impersonation, pretending to be someone with a right to be there — if chosen: He said nothing and pretended nothing. He just came in behind her.
- Shoulder surfing, watching someone type or read a screen — if chosen: Shoulder surfing is watching a screen or keyboard. Nobody was watching one here.
- Dumpster diving, searching the trash for papers with information — if chosen: Nothing was taken from the trash. A person walked through a door.

After the answer: the deciding words are marked. Reason: Following an authorized person through a door without using your own badge is tailgating.

#### Question in the draw: l26-q-bec

A chat, with its history: "Tessa, Accounts Payable", Chat with the help desk.

> (Tessa, Accounts Payable, at the left) An email from our usual supplier’s accounts address says their bank has changed and asks us to pay today’s invoice to a new account. We later found out a crook had taken over that mailbox.

**What is this attack called?**
(the options come in an order that depends on the seed of the question)
- Business email compromise, using a business email to get money moved (right)
- Spoofing, faking who a message appears to come from — if chosen: Spoofing fakes the sender. Here the mailbox was really taken over, so the sender was not faked.
- Distributed denial of service, flooding a service until it stops answering anyone — if chosen: Nothing was flooded. The aim was to move money, not to stop a service.
- Zero-day, an attack on a flaw nobody has a fix for yet — if chosen: No flaw is described. The trick was a believable email asking for money.

After the answer: the deciding words are marked. Reason: An email, real or faked, that requests a money transfer, often to a changed bank account, is business email compromise.

#### Question in the draw: l26-q-zero

The question, read aloud as above: **An attack that uses a flaw in software the maker has had no chance to fix yet, so no patch exists, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - zero-day
  - zero-day attack

After the answer: Reason: It is a zero-day: the maker has had zero days to fix the flaw. Once a patch exists, an unpatched computer is the weak spot instead.

#### Question in the draw: l26-g-whale

The question, read aloud as above: **A phishing message written for a company’s most senior leaders, such as the chief executive or the chief financial officer, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - whaling
  - whale phishing

After the answer: Reason: It is whaling: the big targets. Spear phishing is aimed at one person or a small group, and whaling is spear phishing aimed at senior leaders.

#### Question in the draw: l26-g-call

Fiona in Purchasing calls the help desk. You answer.

**Fiona calls about a phone call she took. What do you say?**
- An incoming call from "Fiona, Purchasing" (Incoming call · 2:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "A man phoned from “IT” and sent me a link. I typed my password into the page. It is probably nothing. Can we skip making a ticket?" [pushes: She wants no ticket, though a stranger may now have her password.]
  - reply "What did the page look like, and what time was this?": goes on to turn 2, where the pressure comes back
  - reply "All right, no ticket. Tell me if anything odd happens.": the call ends (not this one): The password may already be in a stranger’s hands. Leaving it alone means no reset and no report. [slip: let a stolen password go as if it were nothing]
  - reply "I will reset your password right now.": the call ends (not this one): The reset is right, but not before the desk confirms who is on the line with its own questions. A caller can be an impersonator. [slip: reset or unlocked an account before confirming who was asking]
  - reply "Please change your own password when you have a moment this week.": the call ends (not this one): Waiting until “a moment this week” leaves a stolen password working for days. [slip: left the ticket waiting with nothing gathered]
- turn 2, the other side says: "It looked like our sign-in page. It has been an hour and nothing has happened. Honestly, skip the ticket." [pushes: She still wants no ticket, though the password was typed into a page a stranger sent.]
  - reply "A stranger sent that page, so the password is no longer only yours. I will check it is you with the desk’s own questions, then reset it and log this.": the call ends (right): A page sent by a stranger who phoned is vishing with a fake sign-in page. The password is in his hands, so it is reset the same day, after the desk confirms the caller with its own questions, and the report is logged for the security team.
  - reply "If nothing has happened in an hour, you are probably safe.": the call ends (not this one): A stranger can use a stolen password at any time. An hour without trouble says nothing about the next hour. [slip: let a stolen password go as if it were nothing]
  - reply "Then I will reset it now.": the call ends (not this one): The reset is right, but not before the desk confirms who is on the line with its own questions. A caller can be an impersonator. [slip: reset or unlocked an account before confirming who was asking]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Fiona typed her password into a page sent by a stranger who phoned. The password counts as stolen, so it is reset the same day after the desk confirms who is calling by its own questions, and the report is logged.

#### Question in the draw: l26-k-evil

A chat, with its history: "Sam, Sales", Chat with the help desk.

> (Sam, Sales, at the left) At the airport I joined “AirportFree-WiFi”. Then I saw a second network with exactly the same name. The one I joined asked me to sign in with my work email on a page I had never seen.

**What attack is this likely to be?**
(the options come in an order that depends on the seed of the question)
- An evil twin, a fake network that copies the real one’s name (right)
- A dictionary attack, trying common passwords from a list — if chosen: A dictionary attack guesses passwords at a sign-in. Nothing was guessed here.
- A DoS attack, flooding one service until it cannot answer — if chosen: Sam’s connection worked. Nothing was flooded.
- SQL injection, typing database commands into a web form — if chosen: SQL injection targets a website’s database. This is about the network he joined.

After the answer: the deciding words are marked. Reason: A second network with the real one’s name that wants a work sign-in is an evil twin. An on-path attacker can read what passes through it.

#### Question in the draw: l26-k-vish

The question, read aloud as above: **A phishing attack carried out by a phone call, where the caller pretends to be a bank or the help desk, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - vishing
  - voice phishing

After the answer: Reason: It is vishing, phishing by voice. Smishing is by text message, and QR code phishing starts from a scanned code.

#### Question in the draw: l26-k-eol

A chat, with its history: "Fran, Accountant", Chat with the help desk.

> (Fran, Accountant, at the left) Our accounting PC runs a Windows version whose maker stopped sending security fixes last year. Nothing is wrong yet, but our accounting software needs it.

**What kind of weak spot is this?**
(the options come in an order that depends on the seed of the question)
- End of life (EOL): the maker no longer fixes new holes (right)
- Unpatched: fixes exist but have not been installed — if chosen: Here no fixes are being made, so there is nothing to install.
- BYOD: a personal device on the company network — if chosen: The PC belongs to the firm. Nothing says it is a personal device.
- Non-compliant: the PC breaks the company’s own rules — if chosen: The ticket says nothing about a company rule. The problem is the maker’s lack of fixes.

After the answer: the deciding words are marked. Reason: A system the maker no longer sends fixes for is end of life. An unpatched system could still be fixed by installing updates that exist.

#### Question in the draw: l26-r-ddos

A chat, with its history: "Tia, IT", Chat with the help desk.

> (Tia, IT, at the left) Our web shop went down at 2 PM. The logs show thousands of requests a second from computers all over the world.

**What is this attack?**
(the options come in an order that depends on the seed of the question)
- A DDoS attack, a flood of requests from many computers at once (right)
- A DoS attack, a flood of requests that comes from one single source — if chosen: A DoS comes from one source. Here the requests came from computers all over the world.
- SQL injection, database commands typed into a web form — if chosen: Nothing was typed into a form. The shop was flooded.
- Brute force, trying every possible password — if chosen: Nobody was trying passwords. The shop was flooded with requests.

After the answer: the deciding words are marked. Reason: A flood from many computers at once is a DDoS. The same flood from one source is a DoS.

#### Question in the draw: l26-r-sqli

A chat, with its history: "Gil, Web team", Chat with the help desk.

> (Gil, Web team, at the left) Someone typed a long line of database commands into the search box of our shop, and the page showed every customer’s name and card details.

**What is this attack?**
(the options come in an order that depends on the seed of the question)
- SQL injection, database commands typed into a web form (right)
- XSS, a script placed on a page to run in other visitors’ browsers — if chosen: XSS runs a script in visitors’ browsers. Here the database itself answered.
- On-path, an attacker between two sides reading what passes — if chosen: Nobody sat between two sides. The attacker typed into the shop’s own search box.
- A zero-day, an attack on a flaw nobody has a fix for yet — if chosen: A zero-day is about a flaw with no fix. This one is about typing commands into a form.

After the answer: the deciding words are marked. Reason: Database commands typed into a web form that the database then runs is SQL injection.

#### Question in the draw: l26-r-dict

A chat, with its history: "Uri, Admin", Chat with the help desk.

> (Uri, Admin, at the left) The log shows four thousand failed sign-in tries on the account “admin” in one hour. Each used a common password such as “Password1” or “letmein”.

**What is this attack?**
(the options come in an order that depends on the seed of the question)
- A dictionary attack, trying common passwords from a list (right)
- A brute-force attack, trying every possible password — if chosen: Brute force tries every possible combination. These tries were common passwords from a list.
- A DoS attack, flooding the sign-in until it cannot answer — if chosen: The sign-in kept answering, and each try was a password guess.
- An insider threat, someone with real access misusing it — if chosen: The tries were failures from outside the account, not a person with real access.

After the answer: the deciding words are marked. Reason: Many failed tries with common words and passwords are a dictionary attack. Trying every possible combination is brute force.

#### Question in the draw: l26-r-supply

A chat, with its history: "Jade, IT manager", Chat with the help desk.

> (Jade, IT manager, at the left) An update from a trusted accounting vendor went out to all our PCs. It carried hidden code that opened a way into our network. The vendor had been breached first.

**What is this attack?**
(the options come in an order that depends on the seed of the question)
- A supply chain attack, coming in through a trusted supplier’s software (right)
- A zero-day, an attack on a flaw that nobody has a fix for yet in the software — if chosen: No unfixed flaw is described. The update itself carried the hidden code.
- An insider threat, someone with real access misusing it — if chosen: The hidden code came from the vendor’s update, not from someone inside Jade’s firm.
- An evil twin, a fake network with the real one’s name — if chosen: Nothing here is a network. It is an update.

After the answer: the deciding words are marked. Reason: An attack that arrives through a trusted supplier or its software update is a supply chain attack.

#### Question in the draw: l26-p-first

A chat, with its history: "Ola, Sales", Chat with the help desk.

> (Ola, Sales, at the left) A window popped up on my laptop saying “Your PC is infected, call this number now.” It will not close. My files all open fine and the laptop runs normally.

**Which of the ten steps comes first?**
(the options come in an order that depends on the seed of the question)
- Investigate and verify the symptoms: find out whether the alert is real (right)
- Quarantine the laptop by taking it off the network — if chosen: Quarantine is step 2. The laptop runs normally and the alert may be a fake one, so verify first.
- Scan the laptop in safe mode and remove whatever it finds — if chosen: Scanning is step 6. It comes after the symptoms are verified and the laptop is contained.
- Call the number on the window so the caller can fix it — if chosen: The window did not come from a security program the desk installed. Calling the number hands the problem to the people who made the alert.

After the answer: the deciding words are marked. Reason: The first step is to investigate and verify. A pop-up that fills the screen but a laptop that runs normally fits a fake antivirus alert, so you verify before you act.

#### Question in the draw: l26-q-order

A user’s Windows Home laptop is infected. You work the ten steps of the removal.

**Put the ten steps in order.**
- Tap the ten steps in the order you would do them. The steps are offered mixed (never already in the right order): "Investigate and verify the symptoms."; "Quarantine the infected computer."; "Disable System Restore."; "Remediate the infected computer."; "Update the anti-malware software."; "Scan and remove, in safe mode or from outside Windows."; "Reimage or reinstall, if the scan cannot clean it."; "Schedule scans and run updates."; "Enable System Restore and create a restore point."; "Educate the end user.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 10 are.
- Right: Investigate and verify the symptoms., then Quarantine the infected computer., then Disable System Restore., then Remediate the infected computer., then Update the anti-malware software., then Scan and remove, in safe mode or from outside Windows., then Reimage or reinstall, if the scan cannot clean it., then Schedule scans and run updates., then Enable System Restore and create a restore point., then Educate the end user.. After a miss: "You put: …" and why the order matters: Verify first, so you do not disrupt a user over a fake alert. Cut the computer off, then turn System Restore off so old restore points cannot bring the malware back. Remediate, which is done by updating the scanner, scanning, and reimaging if the scan fails. Schedule scans only when it is clean, turn System Restore back on so the new restore point is a clean one, and teach the user last.

After the answer: Reason: The steps run in three parts: contain it (verify, quarantine, System Restore off, remediate), clean it (update, scan, reimage) and keep it clean (schedule scans, System Restore on with a new restore point, educate the user). Each step makes the next one safe.

#### Question in the draw: l26-q-restore

A chat, with its history: "Pam, Service desk", Chat with the help desk.

> (Pam, Service desk, at the left) A coworker says: “Just roll the infected laptop back to last Tuesday’s restore point. There is no need to turn System Restore off first.” The laptop runs Windows Home.

**Why is System Restore turned off before the cleanup?**
(the options come in an order that depends on the seed of the question)
- Old restore points can hold a copy of the malware that a scan cannot clean (right)
- System Restore uses the network, so it would let the malware spread — if chosen: System Restore works on the computer itself. Cutting off the network is step 2.
- A restore point cannot be made while any anti-malware program is running — if chosen: Restore points can be made while security software runs. The reason is the copies already saved.
- System Restore makes the scan take much longer, so it is switched off to save time — if chosen: Saving time is not the reason. The stored copies are what could bring the malware back.

After the answer: the deciding words are marked. Reason: Restore points saved before the cleanup may contain the malware. A scan cannot clean inside them and a rollback would restore the infection, so step 3 turns System Restore off and step 9 turns it on again.

#### Question in the draw: l26-g-tail

The scan has removed the malware from a Windows Home laptop and the computer is clean. Tap the steps still to do, in order. Leave out any step that does not belong.

**Tap the steps still to do, in order.**
- Tap the steps you would do, in order, leaving out any that do not belong, then Answer. The steps are offered mixed (never already in the right order): "Schedule scans and run updates."; "Enable System Restore and create a restore point."; "Educate the end user."; "Disable System Restore.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped when "Answer" is pressed (the right order has 3, which the screen does not say).
- Right: Schedule scans and run updates., then Enable System Restore and create a restore point., then Educate the end user.. After a miss: "You put: …" and why the order matters: Schedule scans and updates once it is clean, turn System Restore on and make a restore point so the saved state is a clean one, then teach the user. Disabling System Restore was step 3, before the cleanup.

After the answer: Reason: After the cleanup come the last three steps: schedule scans and run updates, enable System Restore and make a restore point, and educate the user. Disabling System Restore belongs before the cleanup.

#### Question in the draw: l26-k-order

A Windows Home laptop is quarantined. You have verified the symptoms, turned System Restore off and started the cleanup. Put the next five steps in order.

**Put the next five steps in order.**
- Tap the five steps in the order you would do them. The steps are offered mixed (never already in the right order): "Update the anti-malware software."; "Scan and remove, using safe mode."; "Reimage or reinstall, if the scan cannot clean it."; "Schedule scans and run updates."; "Enable System Restore and create a restore point.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 5 are.
- Right: Update the anti-malware software., then Scan and remove, using safe mode., then Reimage or reinstall, if the scan cannot clean it., then Schedule scans and run updates., then Enable System Restore and create a restore point.. After a miss: "You put: …" and why the order matters: Update first, because a scanner only knows the malware it has been taught. Then scan. Reimage only if the scan cannot clean it. Scans are scheduled once the computer is clean, and the restore point is made last so it saves a clean state.

After the answer: Reason: Update the scanner, scan, reimage if needed, schedule scans, then turn System Restore on with a new restore point. Each step waits for the one before it to be safe.

#### Question in the draw: l26-r-quar

A chat, with its history: "Vic, Tech", Chat with the help desk.

> (Vic, Tech, at the left) You verified that Jo’s PC has malware. A colleague wants to start the scan right away while the PC stays on the office network.

**What comes first, and why?**
(the options come in an order that depends on the seed of the question)
- Quarantine it: take it off the network so it cannot spread or send data out (right)
- Update the scanner first, because the update needs the network — if chosen: Updating is step 5. If the PC is cut off, fetch the update on a clean computer.
- Start the scan now, since removing the malware is the fastest cure for the PC — if chosen: The scan takes time, and the PC stays connected the whole while.
- Reinstall Windows now, since any infection means a reinstall — if chosen: Reinstalling is step 7, and only when the scan cannot clean the PC.

After the answer: the deciding words are marked. Reason: After verifying comes quarantine: cut the infected computer off from the network and drives before any cleaning begins.

#### Question in the draw: l26-r-why-update

A chat, with its history: "Ned, New tech", Chat with the help desk.

> (Ned, New tech, at the left) My lead says to update the anti-malware first, even though the scanner was updated last month. Why?

**What is the reason?**
(the options come in an order that depends on the seed of the question)
- A scanner only knows the malware it has been taught, and new kinds appear often (right)
- The update makes the scan run faster, so the cleanup ends sooner — if chosen: Speed is not the reason. The reason is what the scanner can recognize.
- The update turns System Restore off, which the cleanup needs — if chosen: System Restore is turned off in step 3 by hand. Updates do not do it.
- The update removes the malware by itself, so the scan afterwards is only a double check of the update — if chosen: An update only teaches the scanner. The scan is what finds and removes.

After the answer: the deciding words are marked. Reason: Step 5 comes before the scan because a scanner only finds what it has been taught to recognize.

#### Question in the draw: l26-r-reimage

A chat, with its history: "Eve, Legal", Chat with the help desk.

> (Eve, Legal, at the left) Three scans in safe mode removed what they found, but the same program is back after every restart. The tech cannot trust the system any more.

**Which step comes now?**
(the options come in an order that depends on the seed of the question)
- Reimage or reinstall: erase the system and put back a clean copy (right)
- Schedule scans and run updates, so that it is found sooner next time — if chosen: Scheduling scans comes after the computer is clean. It is not clean yet.
- Educate the user, then close the ticket — if chosen: Education is the last step, and closing waits for the user to confirm that it works.
- Enable System Restore and create a restore point — if chosen: The restore point is made after the cleanup, so it saves a clean state. Not yet.

After the answer: the deciding words are marked. Reason: When scans keep failing to clear the malware, the system cannot be trusted, and step 7 reimages or reinstalls it.

#### Question in the draw: l26-r-point

A chat, with its history: "Ned, New tech", Chat with the help desk.

> (Ned, New tech, at the left) After the cleanup, why do we turn System Restore on and make a new restore point?

**What is the reason?**
(the options come in an order that depends on the seed of the question)
- So the saved state is a clean one that a later rollback can return to (right)
- So the restore point can scan the system for leftover malware — if chosen: A restore point does not scan anything. It saves the state of the system.
- So the old restore points that held the malware are available again to use — if chosen: The old ones were cleared when System Restore was turned off. Bringing them back would bring the malware back.
- So the antivirus has room to store its updates — if chosen: Updates do not depend on restore points.

After the answer: the deciding words are marked. Reason: Step 9 comes after the cleanup, so the new restore point holds a clean system.

#### Question in the draw: l26-p-wipe

A chat, with its history: "Lena, Office manager", Chat with the help desk.

> (Lena, Office manager, at the left) We are giving twenty old laptops to a local school. Their drives hold staff files. The laptops work and the school needs them to run.

**How should the drives be cleared?**
(the options come in an order that depends on the seed of the question)
- Wipe each drive, overwriting all of it so the old data cannot be read back (right)
- Standard-format each drive, which clears the list of files but not the data — if chosen: A standard format clears the list of files and leaves the data on the drive, where it can often be recovered.
- Shred each drive, cutting it into small pieces — if chosen: Shredding ruins the drive, and the school needs working laptops.
- Degauss each drive with a strong magnet — if chosen: Degaussing makes a drive unusable, and the school needs working laptops.

After the answer: the deciding words are marked. Reason: The laptops are to be reused, so the drives must work and the data must be unreadable. A wipe does both. A standard format leaves the data; shredding and degaussing ruin the drive.

#### Question in the draw: l26-q-vendor

A chat, with its history: "Carl, Clinic manager", Chat with the help desk.

> (Carl, Clinic manager, at the left) Our clinic is closing. We have three hundred old drives holding patient records. The law says we must be able to prove they were destroyed.

**What is the best way to handle them?**
(the options come in an order that depends on the seed of the question)
- Hire a vendor to destroy them and get a certificate of destruction (right)
- Standard-format each drive and put them in the recycling bin on Friday — if chosen: A standard format leaves the data on the drive, and the bin leaves no proof of anything.
- Drill one hole through each drive and keep no record of the job — if chosen: Drilling destroys a drive, but with no record there is no proof, and proof is what the law requires.
- Wipe each drive yourself and tell the owners it was done — if chosen: A wipe may be sound, but your word is not the proof the law requires. A certificate is.

After the answer: the deciding words are marked. Reason: Many drives with patient records and a legal duty to prove destruction call for a third-party vendor and a certificate of destruction.

#### Question in the draw: l26-g-ssd

A chat, with its history: "Pia, Facilities", Chat with the help desk.

> (Pia, Facilities, at the left) We have a box of retired laptops with SSD drives, which store data in flash chips. A colleague wants to run them past the degausser we already own, then bin them.

**What do you do instead?**
(the options come in an order that depends on the seed of the question)
- Shred them, because a degausser works on magnetic drives, not SSDs (right)
- Run them through the degausser, since it clears every kind of drive — if chosen: A degausser clears magnetic drives and tapes. An SSD would come out with its data intact.
- Standard-format them and then bin them — if chosen: A standard format leaves the data on the drive, and the bin hands it to anyone.
- Give them to staff as spare drives, untouched — if chosen: The drives still hold the old data, and anyone who plugs one in can read it.

After the answer: the deciding words are marked. Reason: Degaussing needs a magnetic drive. An SSD stores data in flash chips, so it is shredded or wiped instead.

#### Question in the draw: l26-g-certdest

The question, read aloud as above: **When a vendor destroys or recycles your drives, the paper it hands you as proof has a name. It is what an audit or a law asks to see.**

**Type its name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - certificate of destruction
  - certificate of recycling
  - destruction certificate
  - certificate of destruction or recycling

After the answer: Reason: It is the certificate of destruction (or of recycling): the vendor’s proof that the drives were destroyed.

#### Question in the draw: l26-k-degauss

A chat, with its history: "Omar, Facilities", Chat with the help desk.

> (Omar, Facilities, at the left) Our recycler lets us use their degausser, a machine with a very strong magnet. We have four kinds of storage to get rid of.

**Which of these will the degausser actually clear?**
(the options come in an order that depends on the seed of the question)
- A hard drive, which stores its data magnetically (right)
- A solid-state drive, which stores its data in flash chips — if chosen: Chips do not store data magnetically, so a magnet leaves an SSD’s data in place.
- A USB flash drive, which stores its data in flash chips — if chosen: A flash drive stores data in chips, not magnetically, so a magnet does nothing to it.
- A DVD, which stores its data as marks read by a laser — if chosen: A disc is read by a laser, and a magnet does nothing to it. It can be shredded.

After the answer: the deciding words are marked. Reason: Degaussing works only on magnetic storage, such as hard drives and tapes. Flash chips and discs are shredded or otherwise destroyed.

#### Question in the draw: l26-r-dead

A chat, with its history: "Kai, Accounts", Chat with the help desk.

> (Kai, Accounts, at the left) A hard drive with payroll files died. It will not power on, so nothing can be wiped. The company will not reuse it.

**What now?**
(the options come in an order that depends on the seed of the question)
- Destroy it physically, for example by shredding or drilling (right)
- Wipe it with a utility when it next powers up — if chosen: It will not power on, and waiting leaves the payroll data on it.
- Standard-format it and send it for recycling with the other old drives — if chosen: A standard format cannot run on a dead drive, and it would leave the data in place if it could.
- Put it in a drawer, since a dead drive cannot be read — if chosen: A drive that will not power on still holds its data on the platters, so it is not safe.

After the answer: the deciding words are marked. Reason: A dead drive cannot be wiped, so its data is protected by destroying it: shredding, drilling, degaussing or incineration.

#### Question in the draw: l26-r-format

A chat, with its history: "Ben, Intern", Chat with the help desk.

> (Ben, Intern, at the left) I formatted the drive in Windows with the quick option before selling the laptop. Is the old data gone?

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- No: a standard format only clears the list of files, so wipe the drive (right)
- Yes: a format erases every file and all the data from the drive for good — if chosen: A standard format only clears the list of files. The data stays on the drive.
- Yes, as soon as the laptop has been restarted — if chosen: A restart changes nothing on the drive.
- Yes, if the Recycle Bin is emptied too — if chosen: The Recycle Bin holds deleted files. Emptying it does not overwrite the drive.

After the answer: the deciding words are marked. Reason: A standard format only clears the list of files. Overwrite the whole drive with a wipe before it leaves the company.

#### Question in the draw: l26-r-trash

A chat, with its history: "Joy, Office", Chat with the help desk.

> (Joy, Office, at the left) Our old monitors, batteries and drives are going out with the ordinary trash on Friday.

**What is the problem?**
(the options come in an order that depends on the seed of the question)
- Rules cover the data and how electronics are thrown out, so use a recycler with a certificate (right)
- Nothing, since a drive in a bin cannot be read by anyone — if chosen: A drive in a bin can be taken out and read, and the data is still on it.
- Only the drives matter, so the monitors and batteries can go in the bin with the ordinary trash — if chosen: Environmental rules cover monitors and batteries too.
- Only the data matters, so it is enough to delete the files first — if chosen: Deleting files leaves the data on the drive, and the other equipment still needs recycling.

After the answer: the deciding words are marked. Reason: Two groups of rules apply: how the data must be destroyed, and how electronics are thrown out. A recycler that gives a certificate covers both.

#### Question in the draw: l26-p-hash

A chat, with its history: "Ivan, Design", Chat with the help desk.

> (Ivan, Design, at the left) I downloaded an installer from a link in a forum post. The maker’s own site lists a hash for the file. A hash is a fingerprint worked out from a file’s contents. I ran a hash tool on mine and the two do not match.

**What does the mismatch tell you?**
(the options come in an order that depends on the seed of the question)
- The file is not the one the maker published, so do not run it (right)
- The file was only compressed on the way, so it is still safe to run — if chosen: A compressed copy that unpacks to the same file gives the same hash. A mismatch means the file differs.
- The hash tool is out of date, so its answer can be ignored — if chosen: Hash tools do not go out of date. The same file always gives the same hash.
- The maker’s site has been tampered with, so the forum file is fine — if chosen: Nothing here points to the maker’s site. The file Ivan has is the one that does not match what the maker lists.

After the answer: the deciding words are marked. Reason: The maker lists the hash of the real file. If yours differs, the file is not the real one, and you download again from the maker’s own site.

#### Question in the draw: l26-q-cert

A chat, with its history: "Abe, Warehouse", Chat with the help desk.

> (Abe, Warehouse, at the left) Every secure website I open shows “Your connection is not private” since this morning. My phone on the same Wi-Fi opens them fine. My PC’s clock says it is two years ago.

**What do you try first?**
(the options come in an order that depends on the seed of the question)
- Correct the PC’s date and time, then reload a secure site (right)
- Tell him to click Continue anyway on each site so he can work — if chosen: Clicking through a certificate warning takes him to a site the browser cannot vouch for, and it fixes nothing.
- Reinstall the browser to replace its certificates — if chosen: A reinstall is a big step before the cheap check of the clock, and the phone already shows the network is fine.
- Turn off the PC’s firewall, which is blocking the sites — if chosen: A firewall that blocks does not show a certificate warning, and turning it off makes the PC less safe.

After the answer: the deciding words are marked. Reason: The phone works on the same Wi-Fi, so the fault is on this PC, and the clock is two years off. Certificates have dates, so fix the clock first.

#### Question in the draw: l26-q-pop

A chat, with its history: "Gina, Marketing", Chat with the help desk.

> (Gina, Marketing, at the left) Little ad boxes pop up in the corner of my Windows screen all day, even when the browser is closed. They say “Win a prize.” They come from a site I opened last month and clicked Allow on.

**Where do you remove the cause?**
(the options come in an order that depends on the seed of the question)
- In the browser’s notification settings, removing that site’s permission (right)
- In the browser’s pop-up blocker, switching it on for every site — if chosen: The pop-up blocker stops extra windows. These are notifications the site was allowed to send.
- In Task Manager, ending Windows Explorer each time a new box appears on screen — if chosen: That clears the box once and leaves the permission, so the next one comes.
- In Disk Management, wiping the system drive — if chosen: Wiping the drive is a huge step for a permission that can be removed in the browser.

After the answer: the deciding words are marked. Reason: Unwanted notifications from a site the user once allowed are removed by taking that site’s permission away in the browser’s notification settings.

#### Question in the draw: l26-g-private

A chat, with its history: "Joe, Sales", Chat with the help desk.

> (Joe, Sales, at the left) I browse job sites in a private window so my manager cannot see it on the company network. Is that safe?

**What does private browsing do?**
(the options come in an order that depends on the seed of the question)
- It saves no history or cookies here, but the network and the sites still see him (right)
- It hides what he does from the company network and from the websites he visits — if chosen: Private browsing does not change what the network or the sites can see.
- It blocks malware and fake sites from loading — if chosen: Private browsing has no protection against malware or fake sites.
- It encrypts everything he types so that no one can read it — if chosen: Encrypting the connection is the job of a secure site, not of a private window.

After the answer: the deciding words are marked. Reason: Private browsing leaves no history or cookies on this computer after the window closes. It does not hide anything from the network or the sites.

#### Question in the draw: l26-g-pwm

A chat, with its history: "Zed, Finance", Chat with the help desk.

> (Zed, Finance, at the left) My password manager always fills in the bank’s sign-in page. Today it filled nothing, so I am about to type the password myself. The page looks the same as ever. I got there from an email link.

**What do you tell him?**
(the options come in an order that depends on the seed of the question)
- Stop: the manager did not recognize the address, so the page may be fake (right)
- The manager is broken, so reinstall it and sign in again — if chosen: Reinstalling fixes nothing if the page is a fake, and he would type the password into it anyway.
- It is fine, because the page looks the same as ever — if chosen: A fake page can look exactly the same. The manager’s check of the address is the better guide.
- Type the password more slowly, since the manager was slow — if chosen: The manager was not slow. It did not fill because the address did not match.

After the answer: the deciding words are marked. Reason: A password manager fills in only on the address it saved, so a page that gets no fill after an email link may be a fake. Stop and check the address.

#### Question in the draw: l26-k-cache

A chat, with its history: "Lola, Web team", Chat with the help desk.

> (Lola, Web team, at the left) After we updated the price page, some people still see the old prices. My other computer shows the new ones, but this one shows the old page every time.

**Which browser setting fixes this?**
(the options come in an order that depends on the seed of the question)
- Clear the browser’s cache, its saved copies of pages, for that site (right)
- Turn on the pop-up blocker so that old pages can no longer open — if chosen: The pop-up blocker stops extra windows. It has no effect on a saved copy of a page.
- Turn on a proxy so the browser fetches every page from another server — if chosen: A proxy sends traffic through another server. It does not clear a saved copy.
- Turn off the ad blocker so older pages are replaced — if chosen: An ad blocker blocks ads. It does not replace a saved copy of a page.

After the answer: the deciding words are marked. Reason: A page that shows the old version on one browser while another computer shows the new one is a saved copy. Clearing the cache makes the browser fetch it again.

#### Question in the draw: l26-k-redirect

A chat, with its history: "Wes, Admin", Chat with the help desk.

> (Wes, Admin, at the left) Whenever I search from the address bar in Chrome, I land on a search site I never chose, full of ads. I have not tried another browser.

**Which test splits the causes at the least cost?**
(the options come in an order that depends on the seed of the question)
- Search the same words in a different browser on the same PC (right)
- Clear the cache and cookies in Chrome and search the same words again — if chosen: Clearing the cache is a fix, not a test. If the redirect stays, nothing is ruled out.
- Reinstall Chrome from the maker’s site and search again — if chosen: A reinstall is a bigger fix that does not tell Chrome from the system if it fails.
- Reinstall Windows from scratch and search again — if chosen: Reinstalling Windows is the biggest step, and a search in another browser answers the question in a minute.

After the answer: the deciding words are marked. Reason: Redirection can come from the browser (an extension or a search setting) or from the system (a changed proxy). Another browser on the same PC splits the two.

#### Question in the draw: l26-r-ext

A chat, with its history: "Gus, Marketing", Chat with the help desk.

> (Gus, Marketing, at the left) A coupon extension I installed asks to “read and change all data on all websites”. Do I need it?

**What do you advise?**
(the options come in an order that depends on the seed of the question)
- Remove it, since an extension that can read every site can see what he types (right)
- Keep it, because every extension wants that much access to every website he visits — if chosen: Extensions differ. A coupon tool that wants every site’s data is asking for far more than it needs.
- Keep it, and use private browsing so it cannot see anything — if chosen: Private browsing does not stop an extension from seeing a page.
- Keep it, and clear the cache every day — if chosen: Clearing the cache does not change what the extension can see.

After the answer: the deciding words are marked. Reason: An extension can see and change what happens on pages. Keep few, from the official store, and remove ones that want more than they need.

#### Question in the draw: l26-r-sync

A chat, with its history: "Mina, Volunteer", Chat with the help desk.

> (Mina, Volunteer, at the left) I signed in to my browser on the library’s shared PC to get my bookmarks. Is that a problem?

**What do you tell her?**
(the options come in an order that depends on the seed of the question)
- Yes: sync copies passwords and history there, so sign out and clear the data (right)
- No: sync only copies bookmarks, so nothing private is shared with the next person — if chosen: Sync can also copy passwords and history.
- No, as long as she closes the window when she leaves — if chosen: Closing the window does not remove what sync copied.
- Yes, and she should turn on the pop-up blocker — if chosen: The pop-up blocker does not affect what sync copied.

After the answer: the deciding words are marked. Reason: Sign-in and sync copy bookmarks, passwords and history. On a shared computer, sign out and clear the browsing data afterwards.

#### Question in the draw: l26-r-dns

A chat, with its history: "Pat, IT", Chat with the help desk.

> (Pat, IT, at the left) On café Wi-Fi, a customer’s lookups for the bank’s site went to a fake page. We want the browser to protect the lookups themselves.

**Which setting does that?**
(the options come in an order that depends on the seed of the question)
- Secure DNS, which encrypts the lookup so the network cannot change it (right)
- The pop-up blocker, which stops extra windows from opening on the page — if chosen: The pop-up blocker has nothing to do with lookups.
- The ad blocker, which stops ads from loading — if chosen: An ad blocker does not protect the lookup of a site’s name.
- Private browsing, which saves no history on the computer — if chosen: Private browsing does not change how the name is looked up.

After the answer: the deciding words are marked. Reason: Secure DNS encrypts the lookup of a site’s name, so someone on the network cannot change where it leads.

#### Question in the draw: l26-r-proxy

A chat, with its history: "Uma, Studio", Chat with the help desk.

> (Uma, Studio, at the left) After a free download, every website goes through a proxy setting I never made. Pages are slow and extra ads appear on them.

**What is the setting, and what do you do?**
(the options come in an order that depends on the seed of the question)
- A proxy sends traffic through another server, so remove the unknown one (right)
- A proxy blocks ads, so it is helping the user and can stay in place for now — if chosen: The ads are being added, not blocked.
- A proxy speeds up the browser, so it can stay — if chosen: The pages are slower, and nobody chose the proxy.
- A proxy is the browser’s cache, so clear it — if chosen: The cache is a different thing. Clearing it leaves the proxy in place.

After the answer: the deciding words are marked. Reason: A proxy relays the browser’s traffic through another server. An unknown one is a sign of trouble and is removed.

## The result

For example "40 of 40: passed" or "31 of 40: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
