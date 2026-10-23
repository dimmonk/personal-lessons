# IT Help Desk: The whole ticket

Revision 2, live. Part: The whole ticket. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

It is 9 a.m. on your first week. The next ticket is a laptop with a black screen, then a printer, then a locked account, then a phone that is hot to the touch. Nobody tells you which system it is, and nobody shows you the deciding words.
Here you do the job as it will be. First a recap of the nine moves and the chains, then six tickets from every system with no help. The check is ten more tickets. You need 8 right, and none of the ten may touch someone’s data before it is protected or close a ticket before the user confirms it works. The mock exam comes next.

## Step 1: The nine moves, and the chains, by name

Every ticket gets the same nine moves, in order: sort it, get their words and search what the desk knows, find out what changed and protect their data, try the known fix with a limit, cut it in half with the cheapest test, change one thing at a time, check it works for them and say what happens next, hand it on with everything you found, and write it up.
Each system has a chain, and the cheapest test splits it. The boot chain: power, the start-up test, firmware, the boot drive, Windows, sign-in. The print path: app, queue, driver, printer, paper. The connection chain: link, address, gateway, name lookup, service. Phone Bluetooth: on, pairing mode, found, PIN, test. Phone data: switch, line, plan, account, sync. Windows: the tool that shows the fault, then its fix. Access: who you are, what you are allowed, the policy over both, the door in front. Malware: the ten removal steps in order, beginning with verify, then quarantine. The desk: change, backup, evidence, policy.
Reading a ticket: the first move is usually sort it or get the story. Once the ticket shows a symptom, the next move is a test that splits a chain, or protecting data that has no other copy. A part swapped first or a reinstall is never the start, and neither is a reset of a computer that works. An account whose password may be stolen is different: confirm who is asking by a record the desk holds, such as the number on file, then change the password at once.
A ticket closes in one order: the user confirms it works, you write the note, then you close it. A change to something many people use gets approval, a written way back and a backup before it is made.

## Step 2: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Oksana, Design", Chat with the help desk.

> (Oksana, Design, at the left) Every page from the shared laser printer has a dark streak down the left edge. I printed from Word and from my browser and both show it.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Print the printer’s own test page from its panel and look for the streak (right)
- Reinstall the printer driver on the computer, restart it, and print the report again — if chosen: Two programs gave the same streak, so the driver is an unlikely link. The streak is marked on the paper by the printer.
- Clear the print queue and restart the Print Spooler on the computer — if chosen: The pages do come out, so the queue works. The fault shows up after the job leaves the computer.
- Replace the whole printer with the spare from the storeroom and move the cables across — if chosen: A swap is a costly way to learn what a test page would show for free.

After the answer: the deciding words are marked. Reason: A test page printed from the printer’s own panel splits the printer from everything before it on the print path.

#### Item 2

A chat, with its history: "Nikhil, Sales", Chat with the help desk.

> (Nikhil, Sales, at the left) My laptop says Connected but no internet when I sit at my desk. My phone works fine on the same Wi-Fi from the same chair.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Run ipconfig on the laptop and read its address and gateway (right)
- Restart the office router in the supply room and try again — if chosen: The phone works on it, and other people are on it too. Restarting it would not tell what is wrong with one laptop.
- Replace the Wi-Fi card inside the laptop and test the connection — if chosen: A part is not the first move when a free command can show whether the laptop has an address.
- Change the Wi-Fi password and have Nikhil sign in to it again — if chosen: The laptop already connects, so the password is not what is wrong. This changes a setting that does not match the symptom.

After the answer: the deciding words are marked. Reason: The phone works on the same Wi-Fi, so the fault is on the laptop’s side of the connection chain; ipconfig shows its address and gateway.

#### Item 3

A chat, with its history: "Ulises, Finance", Chat with the help desk.

> (Ulises, Finance, at the left) Since Monday my PC takes ten minutes to reach the desktop. My teammates have the same model, bought the same day, and theirs start in one minute.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Open the Startup tab in Task Manager and look at what loads at sign-in (right)
- Reinstall Windows on the PC and put the programs back afterwards one by one — if chosen: A reinstall is the biggest step. Smaller ways back come first, and the files are at risk.
- Add more memory to the PC and see whether it starts any faster — if chosen: The teammates have the same memory and start fast. A part is not the first move.
- Run a registry cleaner to tidy up whatever has built up since Monday — if chosen: A cleaner changes the PC before anyone has looked at what is wrong with it.

After the answer: the deciding words are marked. Reason: The same model starting fast elsewhere points to software on this PC; the Startup tab in Task Manager shows what loads.

#### Item 4

A chat, with its history: "Valeria, Sales", Chat with the help desk.

> (Valeria, Sales, at the left) I tapped a link in a text and installed a free app from a website, not the store. Now the phone is hot, the battery is dead by lunch and my data plan is almost used up.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Check the data and battery usage lists, and remove the app that came from the website (right)
- Tell Valeria the carrier is overcharging and request a bigger data plan on the account — if chosen: The plan was used up by something. A bigger plan would only let it run longer.
- Reset the phone to factory settings and configure it from scratch with a new account — if chosen: A reset wipes the phone before the cheaper steps, and the data on it may have no other copy.
- Install a second security app, using the link on the same website the first came from — if chosen: That trusts the same site that gave the first app. Nothing says it is safe.

After the answer: the deciding words are marked. Reason: An app from outside the store plus heat, battery and data signs is checked in the usage lists, then removed.

#### Item 5

A chat, with its history: "Zaid, Estimating", Chat with the help desk.

> (Zaid, Estimating, at the left) I work from home tomorrow and need my Windows desktop at the office. How do I reach it?

**What do you configure?**
(the options come in an order that depends on the seed of the question)
- Have Zaid join the company VPN first, then open Remote Desktop to the office PC (right)
- Open the Remote Desktop port on the office router so Zaid can connect straight from home — if chosen: Remote Desktop open to the internet is a door anyone can try. It belongs behind a VPN.
- Configure SSH on the office PC so Zaid can type commands to it from home tomorrow — if chosen: SSH gives typed commands on a Linux machine. Zaid needs the Windows desktop.
- Have Zaid install a free screen-sharing app found by a web search — if chosen: Only tools the company allows are used, and a program from a search result has not been checked.

After the answer: the deciding words are marked. Reason: A Windows desktop from home is reached with Remote Desktop, through the company VPN.

#### Item 6

A chat, with its history: "Isolde, Design", Chat with the help desk.

> (Isolde, Design, at the left) Yesterday I added a new memory stick to my desktop. Now it beeps when I turn it on and the screen stays black.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Take out the new memory stick and start the computer again (right)
- Replace the motherboard — if chosen: The beeps appeared right after the new stick went in. A board is the last part to swap.
- Reinstall Windows from a USB stick and try the new memory afterwards — if chosen: The computer fails before Windows starts, so Windows is not the suspect. A reinstall also risks the files.
- Update the firmware on the motherboard and start the computer again — if chosen: A computer that does not start cannot take an update, and the step does not split anything.

After the answer: the deciding words are marked. Reason: The new memory stick is what changed, and taking it out is the cheapest test that splits the chain.

Then a screen: you can stop here, your place is kept.

## The check

10 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 8 right
- None touched the machine before protecting data that has no other copy
- None closed the ticket before the user confirmed it works

#### Check question 7

A chat, with its history: "Odell, Front office", Chat with the help desk.

> (Odell, Front office, at the left) My desktop is on, the fans spin and the light is green, but the monitor says No Signal. It worked fine yesterday, and the cleaners were in last night.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Push the monitor cable in firmly at both ends and check the port (right)
- Replace the power supply — if chosen: The fans spin and the light is green, so the power link works. Swapping a part first skips the cheap check.
- Reinstall Windows from the recovery drive to rule out a bad install — if chosen: No picture appears even before Windows starts, so Windows is not yet the suspect. A reinstall also puts the files at risk.
- Update the monitor driver in Device Manager and restart the PC — if chosen: A driver needs a working picture to be changed, and the step does not split the monitor side from the PC side.

After the answer: the deciding words are marked. Reason: The cleaners moved things, so the cheapest check on the video link comes first: the cable seated at both ends, before any part is swapped.

#### Check question 8

A chat, with its history: "Perla, Billing", Chat with the help desk.

> (Perla, Billing, at the left) None of the websites open and the shared drive is gone since I came in. Here is what the command shows.

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

#### Check question 9

A chat, with its history: "Thandi, Accounts", Chat with the help desk.

> (Thandi, Accounts, at the left) My report has said Printing for an hour and the jobs I send after it are lined up behind it. My coworkers print to the same printer fine from their own PCs.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Stop the Print Spooler on that PC, clear the stuck job and start it again (right)
- Replace the toner cartridge in the printer and print the report again — if chosen: The printer works for the coworkers, so the toner is not the cause.
- Restart the shared printer in the supply room and send the report again — if chosen: Everyone else is printing on it. Only one PC’s queue is stuck, so the shared printer is left alone.
- Tell Thandi the queue will clear by itself, and close the ticket — if chosen: Nothing has been fixed and nobody has checked that the report prints. The ticket closes after the user confirms.

After the answer: the deciding words are marked. Reason: A queue stuck on one PC while others print is fixed by clearing that queue and restarting the Print Spooler.

#### Check question 10

A chat, with its history: "Calder, Sales", Chat with the help desk.

> (Calder, Sales, at the left) Since last week my company phone drops from full to about 30 percent in three hours, and it feels warm in my pocket. The phone is two years old.

**What is the cheapest test to start with?**
(the options come in an order that depends on the seed of the question)
- Open the battery usage list in Settings and see which app uses most (right)
- Order a new battery for the phone from the company supplier — if chosen: A battery may turn out to be the cause, but the usage list is free and could rule it out first.
- Reset the phone to factory settings and start again from scratch — if chosen: A reset wipes the phone before anyone knows the cause, and the data on it may have no other copy.
- Buy a faster charger so the phone fills sooner in the morning — if chosen: A charger changes how fast it fills, not how fast it drains.

After the answer: the deciding words are marked. Reason: The battery usage list is the cheapest test that splits an app problem from a battery problem.

#### Check question 11

An email: "Fabian, Estimating", Email to the help desk.

> Subject: **Laptop will not start**
>
> My laptop now says Operating system not found when I turn it on. It worked yesterday. All my client quotes are saved on the Desktop and my last backup was a month ago.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Copy the quotes off with a rescue USB stick before any repair (right)
- Run the startup repair now — if chosen: A repair is a change to a drive that may be failing, and the quotes are the only copy.
- Reinstall Windows to get the laptop going again quickly today — if chosen: A reinstall can erase the quotes, and nobody knows yet why the system is not found.
- Order a new drive for the laptop and swap it in this afternoon — if chosen: It may turn out to be the drive, but a part is not the first move when the only copy of the quotes is on it.

After the answer: the deciding words are marked. Reason: Data with no other copy is protected before anything is repaired or changed.

#### Check question 12

A chat, with its history: "Kenji, Web team", Chat with the help desk.

> (Kenji, Web team, at the left) Our Linux web server stopped saving uploads about ten minutes ago. Here is the disk output.

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

#### Check question 13

A chat, with its history: "Essie, HR", Chat with the help desk.

> (Essie, HR, at the left) I got an email from IT asking me to confirm my password on a page. I clicked the link and typed my password. The page just closed and nothing else happened.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Check it is Essie with the number on file, then reset the password, end the sessions and report it (right)
- Reset the password and end all the sessions now — if chosen: Anyone can type a name into a chat. The desk confirms who is asking by a record it holds, such as the number on file, before it resets anything.
- Tell Essie it is fine to carry on — if chosen: A page that closes is how a fake page ends. The password was still sent.
- Scan the PC for malware and wait for the result, then close the ticket once the scan comes back clean — if chosen: A scan does not change the password that was sent, and the ticket closes only after the user confirms.

After the answer: the deciding words are marked. Reason: Phishing that got a password is handled by confirming who is asking, then changing the password at once and reporting it.

#### Check question 14

A chat, with its history: "Garrick, Support", Chat with the help desk.

> (Garrick, Support, at the left) I moved from Sales to Support and still need the Pricing folder. I get Access denied. My manager approved it in this ticket this morning.

**What is the next move?**
(the options come in an order that depends on the seed of the question)
- Check which group may open the folder and add Garrick’s account to it (right)
- Give Everyone full control of the Pricing folder so it opens for Garrick today — if chosen: That opens the folder to every account. Least privilege gives only what the job needs.
- Make Garrick’s account a local administrator of the PC and try the folder again — if chosen: Administrator rights on one PC do not open a shared folder, and give far more than the job needs.
- Copy the Pricing folder onto Garrick’s Desktop so it is at hand each day — if chosen: A copy goes out of date and skips the folder’s permissions.

After the answer: the deciding words are marked. Reason: A shared folder is opened through the group that has the permission, with only the access the job needs.

#### Check question 15

A chat, with its history: "Halle, Planning", Chat with the help desk.

> (Halle, Planning, at the left) This is the third time this week my Wi-Fi drops while I am on a call! Nobody does anything about it. I am sick of it!

**What do you say next?**
(the options come in an order that depends on the seed of the question)
- I am sorry, that is three drops. I will check your connection now and tell you what happens next (right)
- I am sorry, but nobody else has this trouble, so it is probably your laptop — if chosen: This pushes the blame at the user, and no test has said it.
- I am sorry about that. It is almost certainly interference on the 2.4 GHz band — if chosen: A cause told before any test, in words the user may not know.
- I am sorry. I have noted the drops, so I will close this ticket, and you can open a new one if it happens again — if chosen: Nothing is fixed and the user has not confirmed anything. A ticket that repeats is handed on with its dates, not closed.

After the answer: the deciding words are marked. Reason: An upset user hears what happens next and when. The three drops are a problem to hand on with their dates.

#### Check question 16

A chat, with its history: "Wilhelm, Server team", Chat with the help desk.

> (Wilhelm, Server team, at the left) I plan to patch the main file server at 2 p.m. tomorrow. Everyone uses it. I have not written a way to undo the patch, but I will do it carefully.

**What do you tell Wilhelm?**
(the options come in an order that depends on the seed of the question)
- Hold it until it has a written undo plan and approval (right)
- Go ahead — if chosen: Being careful is not a change process. Without an undo plan, a bad patch has no way back.
- Move it to 2 a.m., when fewer people are on, and skip the approval — if chosen: A quieter hour helps, but the approval and the undo plan are still missing.
- Patch it tomorrow as planned and back up the server after the patch — if chosen: The backup has to exist before the change. After a bad patch, there is nothing safe to go back to.

After the answer: the deciding words are marked. Reason: A change to a shared server needs approval, a written plan, a backup and a way back first.

## The result

For example "10 of 10: passed" or "7 of 10: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
