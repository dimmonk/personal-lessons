# IT Help Desk: Malware and attacks

Revision 2, draft (the screen carries the draft line). Part: Malware and attacks. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

At 9:05 a user writes that every file in their Documents folder now ends in .locked and a note wants $800. At 9:20 another says a man from “the bank” phoned and wants the code just texted to them. At 9:40 a third says their laptop is slow and the fan never stops. Each ticket gives you only a sign.
Here you learn to work back from the sign to the kind of malware or attack, to run the ten steps that clean a computer in the order that keeps each step safe, and to wipe drives and configure browsers safely.

## Step 1: From the way in to the sign

Malware is software built to harm: to damage files, spy, lock the computer, or use it for someone else. It gets in by a way in: a click on a fake email, a download that is not what it says, a flaw nobody has fixed, or a person who is tricked. Each kind leaves its own signs. You work back from the sign to the kind and the way in.

## Step 2: The kinds of malware, by the signs they leave

A plain table, "Twelve kinds":

> Kind  |  What it does  |  What the ticket shows  (the column heads)
> Virus  |  Attaches to a file and spreads when it is shared  |  Files damaged after a shared file was opened
> Trojan  |  Looks like useful software and lets something else in  |  Trouble began after a “free” tool
> Rootkit  |  Hides itself and other malware deep in the system  |  Antivirus finds nothing, yet signs go on
> Boot sector virus  |  Sits where the computer starts, so runs before Windows  |  A strange message before the Windows logo
> Fileless malware  |  Runs in memory using Windows’ own tools, leaving no file  |  No unknown file, but PowerShell acts oddly
> Ransomware  |  Scrambles (encrypts) files and demands payment  |  Files renamed and locked; a ransom note
> Spyware  |  Secretly records what the user does and sends it out  |  Accounts used by others
> Keylogger  |  Records every key typed, in software or a small plug  |  Passwords used by strangers
> Stalkerware  |  Spyware placed to track one person  |  Someone knows where the user goes
> Cryptominer  |  Uses the computer’s power to earn cryptocurrency for someone else  |  Slow, loud fan, short battery
> Adware  |  Shows ads nobody asked for  |  Pop-ups, a changed home page
> PUP (potentially unwanted program)  |  An extra program bundled with a download  |  New toolbars the user never chose

## Step 3: The tools that find, block and stop malware

A plain table, "What each one does":

> Tool  |  What it does  (the column heads)
> Antivirus, anti-malware  |  Scan for known malware and block it; anti-malware covers the wider list. Many products do both
> Software firewall  |  Allows or blocks what programs send and receive on the network
> Email security gateway  |  Filters mail before it reaches the inbox
> EDR  |  Software that records what each computer does and flags odd behavior
> MDR  |  An outside team does the watching and responding
> XDR  |  The same across computers, email, network and cloud
> User education  |  Teaches people to spot phishing before they click
> Recovery environment  |  A small Windows to start from, so a scan runs from outside the infected one
> Safe mode  |  Windows started with only what it needs, so most malware does not run while the scan works
> Reinstalling the system  |  The last resort when it cannot be trusted

## Step 4: Tricking the person: social engineering

Social engineering tricks a person instead of breaking a machine. Phishing is a message that pretends to be from someone trusted.

A plain table, "Ten ways to trick a person":

> Name  |  How it is done  (the column heads)
> Phishing  |  An email to many people with a link to a fake page
> Vishing  |  Phishing by voice: a phone call
> Smishing  |  Phishing by text message
> QR code phishing  |  A scanned QR code leads to a fake site
> Spear phishing  |  Written for one person, using details about them
> Whaling  |  Spear phishing aimed at senior leaders
> Shoulder surfing  |  Watching a screen or keyboard from behind
> Tailgating  |  Following an authorized person through a door
> Impersonation  |  Pretending to be IT, a driver, the boss
> Dumpster diving  |  Searching the trash for information

## Step 5: Attacks on systems, and weak spots

A plain table, "Thirteen attacks and threats":

> Name  |  What happens  (the column heads)
> DoS  |  One source floods a service until it cannot answer
> DDoS  |  The same flood from many computers (a botnet)
> Evil twin  |  A fake Wi-Fi network with the real one’s name
> Zero-day  |  An attack on a flaw with no fix yet
> Spoofing  |  Faking who a message comes from
> On-path  |  An attacker between two sides reads or changes what passes
> Brute force  |  Trying every possible password
> Dictionary attack  |  Trying common passwords from a list
> Insider threat  |  Someone with real access misuses it
> SQL injection  |  Database commands typed into a web form
> XSS (cross-site scripting)  |  A script on a web page runs in other visitors’ browsers
> BEC (business email compromise)  |  A business email requests a money transfer
> Supply chain  |  The attack comes through a trusted supplier or its update

A weak spot is a vulnerability. Five: non-compliant (breaks company rules), unpatched (fixes not installed), unprotected (no antivirus or firewall), end of life, or EOL (the maker sends no more fixes), and BYOD, bring your own device (a personal device on the company network).

## Step 6: Signs on a PC and in a browser

A plain table, "The sign, the usual cause, the cheapest test":

> Sign  |  Usual cause  |  Cheapest test  (the column heads)
> No network, others fine  |  Malware changed network settings, such as a proxy  |  Does a phone on the same network work?
> Desktop alert: “You are infected”  |  A false antivirus alert from a web page  |  Does it come from the desk’s security program?
> Files renamed, missing or locked  |  Ransomware or other malware  |  Look for a note; check the backup
> Unwanted Windows notifications  |  Often a site the user allowed to send them  |  Which site? See the browser’s notification settings
> Windows will not update  |  Malware blocking updates, or a plain failure  |  Do other PCs update?
> Pop-ups on every page  |  Adware or a bad extension  |  Same in another browser?
> A certificate warning  |  A fake site, someone on the path, or the PC’s clock  |  Every site, or one? Check the clock
> Searches sent elsewhere (redirection)  |  Malware, a bad extension, or a changed proxy  |  Try another browser
> A slow browser  |  Too many extensions, or a cryptominer  |  What uses the processor in Task Manager?

## Step 7: The ten steps of malware removal, and why each sits where it does

System Restore saves copies of important Windows files as restore points, so Windows can roll back to an earlier state. Two steps below turn it off and back on.

A plain table, "Contain it (1 to 4), clean it (5 to 7), keep it clean (8 to 10)":

> Step  |  Why it sits here  (the column heads)
> 1. Investigate and verify the symptoms  |  Be sure it is malware before you disrupt the user
> 2. Quarantine the infected computer  |  Cut it off so it cannot spread or send data out
> 3. Disable System Restore  |  Old restore points may hold the malware; the usual reason given is that a scan cannot clean them
> 4. Remediate the infected systems  |  Contained, so start the cleanup; steps 5 to 7 are how it is done
> 5. Update the anti-malware software  |  A scanner only knows what it has been taught
> 6. Scan and remove (safe mode, preinstallation environment)  |  Safe mode loads only what Windows needs; the preinstallation environment is a small Windows started from outside
> 7. Reimage or reinstall  |  If the scan cannot clear it, put back a clean copy, once the user’s files are saved
> 8. Schedule scans and run updates  |  Worth setting only once it is clean
> 9. Enable System Restore and create a restore point  |  After the cleanup, so the saved state is clean
> 10. Educate the end user  |  Last: the computer is safe, and the way in can be shown

## Step 8: Wiping and destroying drives

A plain table, "Ways to deal with a drive":

> Method  |  What it does  |  Use it when  (the column heads)
> Wipe (erase)  |  Overwrites all of the drive  |  It will be reused or given away
> Low-level format (the A+ name)  |  A tool writes over every part of the drive  |  It will be reused
> Quick (standard) format, Windows format /q or diskpart clean  |  Removes the way to find the files, not the files: the data can be recovered  |  Never alone, when data matters
> Full format, Windows format without /q  |  Writes zeros over the whole drive  |  A hard drive that will be reused
> Secure erase  |  The maker’s own erase command on an SSD; an overwrite can miss spare areas of the chips  |  An SSD that will be reused; if not, shred it
> Drilling  |  Holes through the platters  |  It will not be reused
> Shredding  |  A machine cuts the drive to pieces  |  It will not be reused
> Degaussing  |  A strong magnet scrambles magnetic drives and tapes  |  Hard drives and tapes only, never SSDs
> Incineration  |  Burning the drive  |  It will not be reused
> Third-party vendor  |  Destroys or recycles for you and gives a certificate of destruction  |  You need proof, or have many drives

A drive that leaves the company is wiped with a full overwrite, or destroyed. Laws on health, money and customer records say how data must be destroyed, and environmental rules keep electronics out of the ordinary trash.

## Step 9: Browser security settings

A plain table, "Twelve settings and what each is for":

> Setting  |  What it does  (the column heads)
> Trusted sources and hashing  |  Download from the maker’s own site. A hash is a fingerprint of a file; if it matches the maker’s, the file is unchanged
> Updates (patching)  |  Close known holes
> Extensions and plug-ins  |  Add features but can see your pages; keep few, from the official store
> Password manager  |  Fills a password only on the saved address, so not on a fake page
> Valid certificates  |  The padlock shows who the site is; a warning means stop
> Pop-up blocker  |  Blocks extra windows; leave it on
> Clearing data and cache  |  Removes history, cookies and saved pages; fixes old pages
> Private browsing  |  Saves no history here; the network and sites still see you
> Sign-in and sync  |  Copies passwords between devices; not on shared computers
> Ad blocker  |  Blocks ads, including ones that carry malware
> Proxy  |  A server the traffic goes through; an unknown one is trouble
> Secure DNS  |  Encrypts the lookup of a site’s name

## Step 10: Deleting the one file the alert names

A wrong idea, marked wrong: “The alert names a file. Delete it, run a quick scan while the laptop stays online, and close the ticket.”
The right line: This skips the first four steps. Nobody verified the alert, which may be fake. The laptop stays on the network, so malware can spread. A scan with System Restore on can miss copies in old restore points, the usual reason given. The ticket closes before the user confirms. Work the ten steps in order.

## Step 11: A worked example

A chat, with its history: "Rory, Accounting", Chat with the help desk.

> (Rory, Accounting, at the left) My laptop has crawled since Monday. The fan roars even when nothing is open and the battery dies in an hour. I put a free PDF converter on it last week, but that cannot matter.

A plain table, "Task Manager while Rory has nothing open":

> Program  |  Processor  |  Memory  (the column heads)
> pdfconv-helper.exe  |  91%  |  120 MB
> Chrome  |  4%  |  310 MB
> All programs together  |  98%  |  38% of memory in use

From the ticket record: last night’s backup of Rory’s laptop finished without errors.

Before the working, the learner may commit to a choice (not scored, not stored):
**What does Task Manager show?**
(the options come in an order that depends on the seed of the question)
- One unknown program uses almost all the processor; memory is mostly free
- The laptop is old, so more memory and a new drive are the cure for the slowness
- Chrome is the problem, so remove it and install it again
- The numbers are normal, because no single program is at 100%

The working, one step at a time:
1. Write down every cause that fits “slow, hot, short battery, nothing open”.: Too little memory; a failing drive; Windows busy updating; a program using the processor; malware.
1. Test the favorite cause with the cheapest check.: Rory thinks the laptop is just old. Task Manager takes seconds and changes nothing: memory is 38% in use, so memory is not the limit. One program, pdfconv-helper.exe, takes 91%.
1. Work back from the signs to the kind.: A helper that came with a free converter is most likely a Trojan: it looks useful and lets something else in. The scan will confirm it. A busy processor, a loud fan and a short battery with nothing open are the signs of a cryptominer, which earns cryptocurrency for someone else on Rory’s power.
1. Step 1: verify the symptoms.: Check where the file sits and that no Windows update explains the load. Nothing is deleted yet.
1. Step 2: quarantine.: Rory’s backup is from last night, so Rory’s files are safe. Take the laptop off the network: a miner reports to its owner and can spread, and cutting it off stops both.
1. Step 3: disable System Restore.: Turning System Restore off clears the old restore points, which could hold a copy of the miner that a scan, the usual reason given, cannot clean.
1. Steps 4 to 6: remediate, update, scan.: Fetch the newest anti-malware update on a clean computer and bring it over on a USB stick that is scanned afterwards. Then scan in safe mode, where Windows loads only what it needs, so the miner does not run.
1. Step 7: reimage, only if the scan fails.: Here the scan removes the helper and the miner. Had it kept coming back, you would erase the laptop and put back a clean image.
1. Steps 8 to 10: keep it clean.: Schedule scans and run updates. Turn System Restore on and create a restore point of the clean laptop. Then show Rory how to download from the maker’s own site and check the hash.
1. Confirm, write it up, then close.: Rory confirms the fan is quiet and the battery lasts. Write the note: the converter as the way in, the miner, the steps taken. Then close.

Then the answer: One unknown program uses almost all the processor; memory is mostly free. A ticket gives a sign, not a name. Task Manager ruled out memory and showed one unknown program using the processor, which with the loud fan and short battery points to a cryptominer that came in with a Trojan. The ten steps then run in order: contain it, clean it, keep it clean.

## Step 12: Questions

5 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Hector, Operations", Chat with the help desk.

> (Hector, Operations, at the left) **Every file in my Documents folder now ends in .locked and none will open. A note on the screen says I must pay $800 in cryptocurrency within three days to get a key.**

Help on screen: the words that decide it are marked.

**Which kind of malware is this?**
(the options come in an order that depends on the seed of the question)
- Ransomware, which scrambles files and demands payment to unscramble them (right)
- Spyware, which secretly records what the user does and sends it out — if chosen: Spyware works quietly and leaves no note. These files are locked and a demand is on the screen.
- A cryptominer, which uses the computer’s power to earn money for someone else — if chosen: A miner slows the computer and heats it up. It does not lock files or leave a demand.
- Adware, which fills the screen with ads nobody asked for — if chosen: Adware shows ads. It does not lock files or demand payment.

After the answer: the deciding words are marked. Reason: Files renamed and locked, with a note that demands money, mean ransomware. Spyware, miners and adware leave other signs.

#### Item 2

A chat, with its history: "Bryan, HR", Chat with the help desk.

> (Bryan, HR, at the left) **A text message came to my work phone: “Your parcel is held, pay a $1.99 fee at this link.” I never ordered anything. The link looks odd.**

Help on screen: the words that decide it are marked.

**What is this attack called?**
(the options come in an order that depends on the seed of the question)
- Smishing, phishing carried out by text message (right)
- Vishing, phishing carried out by a phone call — if chosen: Vishing is phishing by voice. This one arrived as a text.
- QR code phishing, a fake site reached from a scanned code — if chosen: There is no QR code here: the link came in a text.
- Spear phishing, a message written for one person with their details — if chosen: Spear phishing is written for one person. This one is a general parcel story that could go to anyone.

After the answer: the deciding words are marked. Reason: A fake message sent by text is smishing: the same trick as phishing, carried by a different channel.

#### Item 3

A chat, with its history: "Katrina, Sales", Chat with the help desk.

> (Katrina, Sales, at the left) **A window popped up on my laptop saying “Your PC is infected, call this number now.” It will not close. My files all open fine and the laptop runs normally.**

Help on screen: the words that decide it are marked.

**Which of the ten steps comes first?**
(the options come in an order that depends on the seed of the question)
- Investigate and verify the symptoms: is the alert real? (right)
- Quarantine the laptop by taking it off the network right away — if chosen: Quarantine is step 2. The laptop runs normally and the alert may be a fake one, so verify first.
- Scan the laptop in safe mode and remove whatever it finds — if chosen: Scanning is step 6. It comes after the symptoms are verified and the laptop is contained.
- Call the number on the window so the caller can fix it — if chosen: The window did not come from a security program the desk installed. Calling the number hands the problem to the people who made the alert.

After the answer: the deciding words are marked. Reason: The first step is to investigate and verify. A pop-up that fills the screen but a laptop that runs normally fits a fake antivirus alert, so you verify before you act.

#### Item 4

A chat, with its history: "Ella, Office manager", Chat with the help desk.

> (Ella, Office manager, at the left) **We are giving twenty old laptops to a local school. Their hard drives hold staff files. The laptops work and the school needs them to run.**

Help on screen: the words that decide it are marked.

**How should the drives be cleared?**
(the options come in an order that depends on the seed of the question)
- Wipe each drive, overwriting all of it so the old data cannot be read back (right)
- Quick-format each drive, which clears the list of files but not the data — if chosen: A quick (standard) format removes the way to find the files and leaves the data on the drive, where it can be recovered.
- Shred each drive, cutting it into small pieces — if chosen: Shredding ruins the drive, and the school needs working laptops.
- Degauss each drive with a strong magnet — if chosen: Degaussing makes a drive unusable, and the school needs working laptops.

After the answer: the deciding words are marked. Reason: The laptops are to be reused, so the drives must work and the data must be unreadable. A wipe does both, and so does a full format, which writes zeros. A quick format leaves the data; shredding and degaussing ruin the drive.

#### Item 5

A chat, with its history: "Ivan, Design", Chat with the help desk.

> (Ivan, Design, at the left) **I downloaded an installer from a link in a forum post. The maker’s own site lists a hash for the file. A hash is a fingerprint worked out from a file’s contents. I ran a hash tool on mine and the two do not match.**

Help on screen: the words that decide it are marked.

**What does the mismatch tell you?**
(the options come in an order that depends on the seed of the question)
- The file is not the one the maker published, so do not run it (right)
- The file was only compressed on the way, so it is still safe to run — if chosen: A compressed copy that unpacks to the same file gives the same hash. A mismatch means the file differs.
- The hash tool is out of date, so its answer can be ignored — if chosen: Hash tools do not go out of date. The same file always gives the same hash.
- The maker’s site has been tampered with, so the forum file is fine — if chosen: Nothing here points to the maker’s site. The file Ivan has is the one that does not match what the maker lists.

After the answer: the deciding words are marked. Reason: The maker lists the hash of the real file. If yours differs, the file is not the real one, and you download again from the maker’s own site.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

11 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 6

A chat, with its history: "Reggie, Security desk", Chat with the help desk.

> (Reggie, Security desk, at the left) The camera shows a man without a badge walking into the server area right behind Brooke, just before the door shut. Brooke did not notice them, and they said nothing.

**What is this called?**
(the options come in an order that depends on the seed of the question)
- Tailgating, following an authorized person through a door (right)
- Impersonation, pretending to be someone with a right to be there — if chosen: The man said nothing and pretended nothing. They just came in behind Brooke.
- Shoulder surfing, watching someone type or read a screen — if chosen: Shoulder surfing is watching a screen or keyboard. Nobody was watching one here.
- Dumpster diving, searching the trash for papers with information — if chosen: Nothing was taken from the trash. A person walked through a door.

After the answer: the deciding words are marked. Reason: Following an authorized person through a door without using your own badge is tailgating.

#### Item 7

A chat, with its history: "Melanie, Accounts Payable", Chat with the help desk.

> (Melanie, Accounts Payable, at the left) An email from our usual supplier’s accounts address says their bank has changed and asks us to pay today’s invoice to a new account. We later found out a crook had taken over that mailbox.

**What is this attack called?**
(the options come in an order that depends on the seed of the question)
- Business email compromise, using a business email to get money moved (right)
- Spoofing, faking who a message appears to come from — if chosen: Spoofing fakes the sender. Here the mailbox was really taken over, so the sender was not faked.
- Distributed denial of service, flooding a service until it stops answering anyone — if chosen: Nothing was flooded. The aim was to move money, not to stop a service.
- Zero-day, an attack on a flaw nobody has a fix for yet — if chosen: No flaw is described. The trick was a believable email asking for money.

After the answer: the deciding words are marked. Reason: An email, real or faked, that requests a money transfer, often to a changed bank account, is business email compromise.

#### Item 8

A chat, with its history: "Dalton, Facilities", Chat with the help desk.

> (Dalton, Facilities, at the left) We found a small plastic plug between the keyboard cable and the front-desk PC. Since it appeared, the receptionist’s email password has been used from another country.

**What was the plug?**
(the options come in an order that depends on the seed of the question)
- A keylogger, which records every letter and number typed so passwords can be read (right)
- A rootkit, which hides itself and other malware deep in the system — if chosen: A rootkit hides malware inside the system. It is not a plug on the cable.
- A Trojan, which looks like useful software but brings in something else — if chosen: A Trojan is software. This is a small piece of hardware.
- Stalkerware, which tracks one person for someone who knows them — if chosen: Stalkerware tracks a person’s location and messages. This plug caught typed passwords.

After the answer: the deciding words are marked. Reason: A plug that sits on the keyboard cable and a password used by a stranger fit a keylogger, which records what is typed.

#### Item 9

A chat, with its history: "Sawyer, IT", Chat with the help desk.

> (Sawyer, IT, at the left) A PC keeps sending odd traffic. Antivirus run from inside Windows finds nothing, and twice the antivirus was found switched off.

**Which kind is it likely to be, and where should the scan run from?**
(the options come in an order that depends on the seed of the question)
- A rootkit, so scan from outside Windows, such as a recovery environment (right)
- Adware, so scan again inside Windows once the antivirus is turned back on — if chosen: Adware shows ads, and scanning inside Windows is what already found nothing.
- A virus in one file, so delete the file the user last opened — if chosen: Nothing points to one file, and a security tool switched off points to something that hides.
- A fileless attack, so scan the drive for the file it left behind — if chosen: Fileless malware leaves no file. And it would not switch the antivirus off by hiding.

After the answer: the deciding words are marked. Reason: Odd traffic, a clean scan and a security tool that keeps being switched off are the signs of something hiding: a rootkit. Scan it from outside the system it hides in.

#### Item 10

A user’s Windows laptop is infected. You work the ten steps of the removal.

**Put the ten steps in order.**
- Tap the ten steps in the order you would do them. The steps are offered mixed (never already in the right order): "Investigate and verify the symptoms."; "Quarantine the infected computer."; "Disable System Restore."; "Remediate the infected computer."; "Update the anti-malware software."; "Scan and remove, in safe mode or from outside Windows."; "Reimage or reinstall, if the scan cannot clean it."; "Schedule scans and run updates."; "Enable System Restore and create a restore point."; "Educate the end user.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 10 are.
- Right: Investigate and verify the symptoms., then Quarantine the infected computer., then Disable System Restore., then Remediate the infected computer., then Update the anti-malware software., then Scan and remove, in safe mode or from outside Windows., then Reimage or reinstall, if the scan cannot clean it., then Schedule scans and run updates., then Enable System Restore and create a restore point., then Educate the end user.. After a miss: "You put: …" and why the order matters: Verify first, so you do not disrupt a user over a fake alert. Cut the computer off, then turn System Restore off so old restore points cannot bring the malware back. Remediate, which is done by updating the scanner, scanning, and reimaging if the scan fails. Schedule scans only when it is clean, turn System Restore back on so the new restore point is a clean one, and teach the user last.

After the answer: Reason: The steps run in three parts: contain it (verify, quarantine, System Restore off, remediate), clean it (update, scan, reimage) and keep it clean (schedule scans, System Restore on with a new restore point, educate the user). Each step makes the next one safe.

#### Item 11

A chat, with its history: "Nicole, Service desk", Chat with the help desk.

> (Nicole, Service desk, at the left) A coworker says: “Just roll the infected laptop back to last Tuesday’s restore point. There is no need to turn System Restore off first.” The laptop runs Windows.

**Why is System Restore turned off before the cleanup?**
(the options come in an order that depends on the seed of the question)
- Old restore points can hold a copy of the malware that a scan cannot clean (right)
- System Restore uses the network, so it would let the malware spread — if chosen: System Restore works on the computer itself. Cutting off the network is step 2.
- A restore point cannot be made while any anti-malware program is running — if chosen: Restore points can be made while security software runs. The reason is the copies already saved.
- System Restore makes the scan take much longer, so it is switched off to save time — if chosen: Saving time is not the reason. The stored copies are what could bring the malware back.

After the answer: the deciding words are marked. Reason: Restore points saved before the cleanup may contain the malware. The usual reason given is that a scan cannot clean inside them, and a rollback would restore the infection, so step 3 turns System Restore off and step 9 turns it on again.

#### Item 12

A chat, with its history: "Mamadou, Clinic manager", Chat with the help desk.

> (Mamadou, Clinic manager, at the left) Our clinic is closing. We have three hundred old drives holding patient records. The law says we must be able to prove they were destroyed.

**What is the best way to handle them?**
(the options come in an order that depends on the seed of the question)
- Hire a vendor to destroy them and get a certificate of destruction (right)
- Quick-format each drive and put them in the recycling bin on Friday — if chosen: A quick format leaves the data on the drive, and the bin leaves no proof of anything.
- Drill one hole through each drive and keep no record of the job — if chosen: Drilling destroys a drive, but with no record there is no proof, and proof is what the law requires.
- Wipe each drive yourself and tell the owners it was done — if chosen: A wipe may be sound, but your word is not the proof the law requires. A certificate is.

After the answer: the deciding words are marked. Reason: Many drives with patient records and a legal duty to prove destruction call for a third-party vendor and a certificate of destruction.

#### Item 13

A chat, with its history: "Abe, Warehouse", Chat with the help desk.

> (Abe, Warehouse, at the left) Every secure website I open shows “Your connection is not private” since this morning. My phone on the same Wi-Fi opens them fine. My PC’s clock says it is two years ago.

**What do you try first?**
(the options come in an order that depends on the seed of the question)
- Correct the PC’s date and time, then reload a secure site (right)
- Tell Abe to click Continue anyway on each site so Abe can work — if chosen: Clicking through a certificate warning takes Abe to a site the browser cannot vouch for, and it fixes nothing.
- Reinstall the browser to replace its certificates — if chosen: A reinstall is a big step before the cheap check of the clock, and the phone already shows the network is fine.
- Turn off the PC’s firewall, which is blocking the sites — if chosen: A firewall that blocks does not show a certificate warning, and turning it off makes the PC less safe.

After the answer: the deciding words are marked. Reason: The phone works on the same Wi-Fi, so the fault is on this PC, and the clock is two years off. Certificates have dates, so fix the clock first.

#### Item 14

A chat, with its history: "Harper, Marketing", Chat with the help desk.

> (Harper, Marketing, at the left) Little ad boxes pop up in the corner of my Windows screen all day, even when the browser is closed. They say “Win a prize.” They come from a site I opened last month and clicked Allow on.

**Where do you remove the cause?**
(the options come in an order that depends on the seed of the question)
- In the browser’s notification settings, removing that site’s permission (right)
- In the browser’s pop-up blocker, switching it on for every site — if chosen: The pop-up blocker stops extra windows. These are notifications the site was allowed to send.
- In Task Manager, ending Windows Explorer each time a new box appears on screen — if chosen: That clears the box once and leaves the permission, so the next one comes.
- In the browser, clearing the cache and cookies for every site — if chosen: Clearing the cache and cookies leaves the site’s notification permission in place, so the boxes keep coming.

After the answer: the deciding words are marked. Reason: Unwanted notifications from a site the user once allowed are removed by taking that site’s permission away in the browser’s notification settings.

#### Item 15

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **An attack that uses a flaw in software the maker has had no chance to fix yet, so no patch exists, has its own name.**

**Type the name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - zero-day
  - zero-day attack

After the answer: Reason: It is a zero-day: the maker has had zero days to fix the flaw. Once a patch exists, an unpatched computer is the weak spot instead.

#### Item 16

The question, read aloud as above: **Malware that quietly uses a computer’s power to earn cryptocurrency for someone else, leaving it slow and its fan loud, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - cryptominer
  - crypto miner
  - cryptocurrency miner

After the answer: Reason: It is a cryptominer. The signs are a slow computer, a loud fan and a short battery with nothing open.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

10 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 17

A chat, with its history: "Uma, Studio", Chat with the help desk.

> (Uma, Studio, at the left) I installed a “free screen recorder” from an ad. It records my screen just as advertised, but since then my webcam light blinks on at odd times.

**Which kind of malware brought the rest in?**
(the options come in an order that depends on the seed of the question)
- A Trojan, software that looks useful and carries something else in (right)
- A virus, which attaches itself to files and spreads when they are shared — if chosen: No file was shared. Uma installed a program from an ad.
- A rootkit, which hides deep in the system — if chosen: A rootkit is about hiding. What brought the extras in was the program Uma chose to install.
- A boot sector virus, which sits in the part of the drive that starts the computer — if chosen: Nothing is wrong at start-up, and the trouble began after an install.

After the answer: the deciding words are marked. Reason: Software that works as advertised, and trouble that started with its install, is a Trojan carrying something else in.

#### Item 18

A chat, with its history: "Luis, Server team", Chat with the help desk.

> (Luis, Server team, at the left) Antivirus scans come back clean, but every few minutes PowerShell, a built-in Windows tool, starts and talks to an outside address. There is no unknown file anywhere on the drive.

**Which kind fits, and what can catch it?**
(the options come in an order that depends on the seed of the question)
- Fileless malware, which a behavior-watching tool such as EDR can catch (right)
- A boot sector virus, which a scan from outside Windows will find at start-up — if chosen: A boot sector virus sits in the start-up area of the drive and shows at start-up. Here PowerShell calls out while Windows runs.
- Adware, which shows in the browser’s list of extensions — if chosen: Adware shows ads. PowerShell calling an outside address is not an ad.
- A keylogger, which shows as a small plug on the keyboard cable — if chosen: A keylogger records typing. This is a program that keeps calling out.

After the answer: the deciding words are marked. Reason: A clean file scan, a built-in tool doing odd things and no unknown file are the signs of fileless malware. Behavior-watching tools like EDR can catch it.

#### Item 19

A chat, with its history: "Macy, Owner of a twelve-person firm", Chat with the help desk.

> (Macy, Owner of a twelve-person firm, at the left) We have antivirus on every PC but no security staff. I want someone outside to watch for attacks around the clock and act on them for us.

**Which service is that?**
(the options come in an order that depends on the seed of the question)
- MDR, managed detection and response: an outside team watches and responds (right)
- EDR on its own, software that records what each computer does — if chosen: EDR is the software. Someone on Macy’s own side would still have to read its alerts and act.
- An email security gateway, which filters mail before it arrives — if chosen: A gateway filters mail only. It does not watch the computers or respond.
- A software firewall, which blocks programs on one computer — if chosen: A firewall on one computer does not watch for attacks across the firm or act on them.

After the answer: the deciding words are marked. Reason: EDR is software that watches each computer; MDR adds an outside team that watches and responds for you, and XDR widens the watching to email, network and cloud.

#### Item 20

The question, read aloud as above: **A phishing message written for a company’s most senior leaders, such as the chief executive or the chief financial officer, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - whaling
  - whale phishing

After the answer: Reason: It is whaling: the big targets. Spear phishing is written for one person, and whaling is spear phishing aimed at senior leaders.

#### Item 21

The scan has removed the malware from a Windows laptop and the computer is clean. Tap the steps still to do, in order. Leave out any step that does not belong.

**Tap the steps still to do, in order.**
- Tap the steps you would do, in order, leaving out any that do not belong, then Answer. The steps are offered mixed (never already in the right order): "Schedule scans and run updates."; "Enable System Restore and create a restore point."; "Educate the end user."; "Disable System Restore.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped when "Answer" is pressed (the right order has 3, which the screen does not say).
- Right: Schedule scans and run updates., then Enable System Restore and create a restore point., then Educate the end user.. After a miss: "You put: …" and why the order matters: Schedule scans and updates once it is clean, turn System Restore on and make a restore point so the saved state is a clean one, then teach the user. Disabling System Restore was step 3, before the cleanup.

After the answer: Reason: After the cleanup come the last three steps: schedule scans and run updates, enable System Restore and make a restore point, and educate the user. Disabling System Restore belongs before the cleanup.

#### Item 22

A chat, with its history: "Kiona, Facilities", Chat with the help desk.

> (Kiona, Facilities, at the left) We have a box of retired laptops with SSD drives, which store data in flash chips. A colleague wants to run them past the degausser we already own, then bin them.

**What do you do instead?**
(the options come in an order that depends on the seed of the question)
- Shred them, because a degausser works on magnetic drives, not SSDs (right)
- Run them through the degausser, since it clears every kind of drive — if chosen: A degausser clears magnetic drives and tapes. An SSD would come out with its data intact.
- Quick-format them and then bin them — if chosen: A quick format leaves the data on the drive, and the bin hands it to anyone.
- Give them to staff as spare drives, untouched — if chosen: The drives still hold the old data, and anyone who plugs one in can read it.

After the answer: the deciding words are marked. Reason: Degaussing needs a magnetic drive. An SSD stores data in flash chips, so it is shredded, or erased with the maker’s secure-erase tool, instead.

#### Item 23

A chat, with its history: "Joe, Sales", Chat with the help desk.

> (Joe, Sales, at the left) I browse job sites in a private window so my manager cannot see it on the company network. Is that safe?

**What does private browsing do?**
(the options come in an order that depends on the seed of the question)
- It saves no history here, but the network and the sites still see Joe (right)
- It hides what Joe does from the company network and from the websites Joe visits — if chosen: Private browsing does not change what the network or the sites can see.
- It blocks malware and fake sites from loading — if chosen: Private browsing has no protection against malware or fake sites.
- It encrypts everything Joe types so that no one can read it — if chosen: Encrypting the connection is the job of a secure site, not of a private window.

After the answer: the deciding words are marked. Reason: Private browsing leaves no history or cookies on this computer after the window closes. It does not hide anything from the network or the sites.

#### Item 24

A chat, with its history: "Zed, Finance", Chat with the help desk.

> (Zed, Finance, at the left) My password manager always fills in the bank’s sign-in page. Today it filled nothing, so I am about to type the password myself. The page looks the same as ever. I got there from an email link.

**What do you tell Zed?**
(the options come in an order that depends on the seed of the question)
- Stop: the manager did not know the address, so the page may be fake (right)
- The manager is broken, so reinstall it and then sign in to the bank again — if chosen: Reinstalling fixes nothing if the page is a fake, and Zed would type the password into it anyway.
- It is fine, because the page looks exactly the same as ever — if chosen: A fake page can look exactly the same. The manager’s check of the address is the better guide.
- Type the password more slowly, since the manager was slow — if chosen: The manager was not slow. It did not fill because the address did not match.

After the answer: the deciding words are marked. Reason: A password manager fills in only on the address it saved, so a page that gets no fill after an email link may be a fake. Stop and check the address.

#### Item 25

The question, read aloud as above: **When a vendor destroys or recycles your drives, the paper it hands you as proof has a name. It is what an audit or a law asks to see.**

**Type its name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - certificate of destruction
  - certificate of recycling
  - destruction certificate
  - certificate of destruction or recycling

After the answer: Reason: It is the certificate of destruction (or of recycling): the vendor’s proof that the drives were destroyed.

#### Item 26

Fiona in Purchasing calls the help desk. You answer.

**Fiona calls about a phone call Fiona took. What do you say?**
- An incoming call from "Fiona, Purchasing" (Incoming call · 2:40 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "A man phoned from “IT” and sent me a link. I typed my password into the page. It is probably nothing. Can we skip making a ticket?" [pushes: Fiona wants no ticket, though a stranger may now have Fiona’s password.]
  - reply "What did the page look like, and roughly what time did you type your password into it?": goes on to turn 2, where the pressure comes back
  - reply "All right, no ticket then. Just tell me if anything odd happens on your account.": the call ends (not this one): The password may already be in a stranger’s hands. Leaving it alone means no reset and no report. [slip: let a stolen password go as if it were nothing]
  - reply "I will reset your password right now and read you the new one over the phone.": the call ends (not this one): The reset is right, but not before the desk checks who is on the line by calling the number on record. A caller can be an impersonator. [slip: reset or unlocked an account before confirming who was asking]
  - reply "Please change your own password yourself when you have a moment this week.": the call ends (not this one): Waiting until “a moment this week” leaves a stolen password working for days. [slip: left the ticket waiting with nothing gathered]
- turn 2, the other side says: "It looked like our sign-in page. It has been an hour and nothing has happened. Honestly, skip the ticket." [pushes: Fiona still wants no ticket, though the password was typed into a page a stranger sent.]
  - reply "A stranger sent that page, so the password is exposed. I will call the number on your record to check it is you, then reset it and log this.": the call ends (right): A page sent by a stranger who phoned is vishing with a fake sign-in page. The password is in their hands, so it is reset at once, after the desk calls the number on record to check who is on the line, and the incident is written up.
  - reply "If nothing has happened in an hour, you are probably safe, so leave the password for now and tell me if anything odd shows up on your account.": the call ends (not this one): A stranger can use a stolen password at any time. An hour without trouble says nothing about the next hour. [slip: let a stolen password go as if it were nothing]
  - reply "Then I will reset it right now and read you the new password over the phone so you can sign in right away.": the call ends (not this one): The reset is right, but not before the desk checks who is on the line by calling the number on record. A caller can be an impersonator. [slip: reset or unlocked an account before confirming who was asking]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Fiona typed the password into a page sent by a stranger who phoned. The password counts as stolen, so it is reset at once after the desk calls the number on record to check who is calling, and the incident is written up.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 27

A chat, with its history: "Beth, Reception", Chat with the help desk.

> (Beth, Reception, at the left) My ex-boyfriend knows where I go and what I text. I found an app on my phone that I never installed. It has no icon on the home screen.

**Which kind of malware is this?**
(the options come in an order that depends on the seed of the question)
- Stalkerware, spyware placed to track one person (right)
- Adware, which shows ads the user never asked for — if chosen: Adware shows ads. Nothing here is an ad, and it does not explain how anyone knows where Beth goes.
- A cryptominer, which earns money from the phone’s power — if chosen: A miner drains the battery and heats the phone. It does not tell anyone where Beth goes.
- Ransomware, which locks files and demands payment — if chosen: Nothing is locked and nobody has asked for money.

After the answer: the deciding words are marked. Reason: A hidden app plus someone who knows Beth’s movements and messages is stalkerware: spyware placed to track one person. This is also a safety matter: the desk passes it to the security team and does not warn whoever placed the app.

#### Check question 28

A chat, with its history: "Rhys, Sales", Chat with the help desk.

> (Rhys, Sales, at the left) At the airport I joined “AirportFree-WiFi”. Then I saw a second network with exactly the same name. The one I joined asked me to sign in with my work email on a page I had never seen.

**What attack is this likely to be?**
(the options come in an order that depends on the seed of the question)
- An evil twin, a fake network that copies the real one’s name (right)
- A dictionary attack, trying common passwords from a list — if chosen: A dictionary attack guesses passwords at a sign-in. Nothing was guessed here.
- A DoS attack, flooding one service until it cannot answer — if chosen: Rhys’s connection worked. Nothing was flooded.
- SQL injection, typing database commands into a web form — if chosen: SQL injection targets a website’s database. This is about the network Rhys joined.

After the answer: the deciding words are marked. Reason: A second network with the real one’s name that wants a work sign-in is an evil twin. An on-path attacker can read what passes through it.

#### Check question 29

A Windows laptop is quarantined. You have verified the symptoms, turned System Restore off and started the cleanup. Put the next five steps in order.

**Put the next five steps in order.**
- Tap the five steps in the order you would do them. The steps are offered mixed (never already in the right order): "Update the anti-malware software."; "Scan and remove, using safe mode."; "Reimage or reinstall, if the scan cannot clean it."; "Schedule scans and run updates."; "Enable System Restore and create a restore point.". Each tapped step is numbered; "Start again" clears the taps; the answer is the order tapped once 5 are.
- Right: Update the anti-malware software., then Scan and remove, using safe mode., then Reimage or reinstall, if the scan cannot clean it., then Schedule scans and run updates., then Enable System Restore and create a restore point.. After a miss: "You put: …" and why the order matters: Update first, because a scanner only knows the malware it has been taught. Then scan. Reimage only if the scan cannot clean it. Scans are scheduled once the computer is clean, and the restore point is made last so it saves a clean state.

After the answer: Reason: Update the scanner, scan, reimage if needed, schedule scans, then turn System Restore on with a new restore point. Each step waits for the one before it to be safe.

#### Check question 30

The question, read aloud as above: **A phishing attack carried out by a phone call, where the caller pretends to be a bank or the help desk, has its own name.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - vishing
  - voice phishing

After the answer: Reason: It is vishing, phishing by voice. Smishing is by text message, and QR code phishing starts from a scanned code.

#### Check question 31

A chat, with its history: "Andy, Facilities", Chat with the help desk.

> (Andy, Facilities, at the left) Our recycler lets us use their degausser, a machine with a very strong magnet. We have four kinds of storage to get rid of.

**Which of these will the degausser actually clear?**
(the options come in an order that depends on the seed of the question)
- A hard drive, which stores its data magnetically (right)
- A solid-state drive, which stores its data in flash chips — if chosen: Chips do not store data magnetically, so a magnet leaves an SSD’s data in place.
- A USB flash drive, which stores its data in flash chips — if chosen: A flash drive stores data in chips, not magnetically, so a magnet does nothing to it.
- A DVD, which stores its data as marks read by a laser — if chosen: A disc is read by a laser, and a magnet does nothing to it. It can be shredded.

After the answer: the deciding words are marked. Reason: Degaussing works only on magnetic storage, such as hard drives and tapes. Flash chips and discs are shredded or otherwise destroyed.

#### Check question 32

A chat, with its history: "Lola, Web team", Chat with the help desk.

> (Lola, Web team, at the left) After we updated the price page, some people still see the old prices. My other computer shows the new ones, but this one shows the old page every time.

**Which browser setting fixes this?**
(the options come in an order that depends on the seed of the question)
- Clear the browser’s cache, its saved copies of pages, for that site (right)
- Turn on the pop-up blocker so that old pages can no longer open — if chosen: The pop-up blocker stops extra windows. It has no effect on a saved copy of a page.
- Turn on a proxy so the browser fetches every page from another server — if chosen: A proxy sends traffic through another server. It does not clear a saved copy.
- Turn off the ad blocker so older pages are replaced — if chosen: An ad blocker blocks ads. It does not replace a saved copy of a page.

After the answer: the deciding words are marked. Reason: A page that shows the old version on one browser while another computer shows the new one is a saved copy. Clearing the cache makes the browser fetch it again.

#### Check question 33

A chat, with its history: "Thelma, Admin", Chat with the help desk.

> (Thelma, Admin, at the left) Whenever I search from the address bar in Chrome, I land on a search site I never chose, full of ads. I have not tried another browser.

**Which test splits the causes at the least cost?**
(the options come in an order that depends on the seed of the question)
- Search the same words in a different browser on the same PC (right)
- Clear the cache and cookies in Chrome and search the same words again — if chosen: Clearing the cache is a fix, not a test. If the redirect stays, nothing is ruled out.
- Reinstall Chrome from the maker’s site and search again — if chosen: A reinstall is a bigger fix that does not tell Chrome from the system if it fails.
- Reinstall Windows from scratch and search again — if chosen: Reinstalling Windows is the biggest step, and a search in another browser answers the question in a minute.

After the answer: the deciding words are marked. Reason: Redirection can come from the browser (an extension or a search setting) or from the system (a changed proxy). Another browser on the same PC splits the two.

#### Check question 34

A chat, with its history: "Salma, Accountant", Chat with the help desk.

> (Salma, Accountant, at the left) Our accounting PC runs a Windows version whose maker stopped sending security fixes last year. Nothing is wrong yet, but our accounting software needs it.

**What kind of weak spot is this?**
(the options come in an order that depends on the seed of the question)
- End of life (EOL): the maker no longer fixes new holes (right)
- Unpatched: fixes exist but have not been installed — if chosen: Here no fixes are being made, so there is nothing to install.
- BYOD: a personal device on the company network — if chosen: The PC belongs to the firm. Nothing says it is a personal device.
- Non-compliant: the PC breaks the company’s own rules — if chosen: The ticket says nothing about a company rule. The problem is the maker’s lack of fixes.

After the answer: the deciding words are marked. Reason: A system the maker no longer sends fixes for is end of life. An unpatched system could still be fixed by installing updates that exist.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
