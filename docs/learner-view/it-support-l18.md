# IT Help Desk: Phones, tablets and laptops

Revision 2, live. Part: Phones, tablets and laptops. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Nadia in Sales calls from a taxi stand. Nadia left the work phone in a cab an hour ago. It holds customer lists and mail, and Nadia wants something done now.
Here you learn what is inside a laptop and a phone, how they connect, how a company manages them, and how to lock one down, so you know which step comes first and which cannot be undone.

## Step 1: Inside a laptop

A plain table, "Laptop parts you may be asked to replace":

> Part  |  What to know  (the column heads)
> Battery  |  Often inside the case: disconnect its connector first. A worn one shuts the laptop off soon after it is unplugged.
> Keyboard  |  Replaced as one unit. An external USB keyboard is the cheapest test of whether the built-in one is at fault.
> Memory (RAM)  |  SODIMM, a short stick, much shorter than the DIMM in a tower computer. Some laptops have memory soldered on.
> Drive  |  A 2.5 inch drive in a bay, or an M.2 SSD, a small stick that plugs into the board with no cable. Check which the laptop takes.
> Wireless card and Wi-Fi antenna  |  The card usually does both Wi-Fi and Bluetooth. Two thin antenna wires snap onto it and run up the hinge into the lid. A repair that opens the lid can leave one loose, and the signal drops.
> Camera (webcam) and microphone  |  In the lid frame. Check the sliding cover or the sound settings before changing a part.
> Biometrics and the near-field scanner  |  The fingerprint reader and face camera check who you are. The near-field (NFC) scanner reads a badge or phone held a few centimeters away.

## Step 2: Opening one safely

Shut down, unplug the charger and disconnect the battery. Then ground yourself so static from your hands cannot reach the board: wear a wrist strap, or touch a bare metal part of the unplugged laptop. A chip can be ruined by static you never feel.
Photograph the screws and keep them in order, and pry with plastic tools. If the battery is swollen, stop and do not charge it.

## Step 3: Connectors and cables

A plain table, "How a phone or tablet connects":

> Connection  |  What it is  (the column heads)
> USB-C  |  A small oval plug, either way up. Carries power and data, and video on many devices.
> Micro-USB  |  Older, flat, wider at the top, one way only. Older Android phones and small gear.
> Mini-USB  |  Older still and bigger than micro-USB, one way only. Cameras and old devices.
> Lightning  |  Apple’s own thin plug, either way up. Older iPhones and iPads; newer ones use USB-C.
> NFC (near field communication)  |  A tap from a few centimeters: pay, tap a badge, start a pairing.
> Bluetooth  |  A radio for short distances that pairs two devices: a headset, a speaker, a car.
> Hotspot  |  The phone shares its cellular data as a Wi-Fi network that several devices can join.
> Tethering  |  The phone shares its cellular data with one computer over a USB cable or Bluetooth.

Hotspot and tethering both use the phone’s data plan and drain its battery.

## Step 4: Accessories and desk bases

A plain table, "Accessories":

> Accessory  |  What it does  (the column heads)
> Stylus  |  A pen for a touch screen.
> Headset, speakers, webcam  |  Sound out, a microphone, and a better camera, wired or by Bluetooth.
> Docking station  |  A desk base. One connection gives the laptop power, monitors and a wired network, and it can add extras such as drives.
> Port replicator  |  A simpler base that repeats the laptop’s own ports onto the desk. It adds nothing new.
> Trackpad, track point, drawing pad  |  The flat panel under the keyboard; the small rubber nub between G, H and B; a separate pen tablet.

## Step 5: Bluetooth is a chain

Five things happen in order, and each works only if the one before it did.
1. On. Bluetooth is switched on in the phone.
2. Pairing mode. The other device is made discoverable, usually by holding its button until a light blinks. It stays discoverable only a short time.
3. Found. The phone scans and lists it. Pick it.
4. PIN. Enter its code, or confirm that the same number shows on both screens. Older gear often uses 0000 or 1234.
5. Test. Play a sound or make a short call. Many headsets connect to one phone at a time.

A plain table, "Where each sign belongs":

> What you see  |  The link  |  First move  (the column heads)
> The device never appears  |  2. Pairing mode  |  Make it discoverable again; disconnect it from its other device
> It appears, but pairing fails  |  4. PIN  |  Retype the code, or remove the old saved entry and pair again
> Paired, but no sound  |  5. Test  |  Pick it as the sound output; check it is not joined to another device
> The phone lists nothing at all  |  1. On  |  Switch Bluetooth on; check airplane mode

## Step 6: The broken-part guess

A wrong idea, marked wrong: “The headset will not connect, so the headset is broken. Send it back.”
The right line: Try the headset with a second phone first. If it pairs there, the headset is fine and the fault is on the first phone, in one of the five links.

## Step 7: Data and accounts: a chain

Mail, calendar and contacts reach a phone through five links, each depending on the one before.
1. The switch. Airplane mode turns off the cellular, Wi-Fi and Bluetooth radios together; each can be turned back on alone.
2. The line. Wi-Fi, or cellular data through a SIM, the small chip card that identifies you to the carrier, or an eSIM, a SIM built into the phone and added by the carrier’s QR code or app. Cellular comes as 3G, 4G and 5G, each faster than the one before.
3. The plan. Most plans have a data cap, a monthly amount of data; past it the phone slows or the bill grows. Video and photo backup belong on Wi-Fi.
4. The account. The phone is signed in to the mail or cloud account, and after a password change it must be given the new one.
5. Sync. Mail, calendar, contacts and cloud storage each turn on or off and refresh on their own.
Location services are a separate switch. They use GPS (satellites) under a clear sky, and nearby Wi-Fi and cell towers for a rougher fix. Each app needs permission.

## Step 8: Company phones and personal phones

MDM (mobile device management) is software a company uses to run its phones and tablets. It configures settings, enforces rules such as a minimum passcode, installs company apps, and can lock, find or wipe a device from afar.
A corporate-owned phone is the company’s, so it can be managed and wiped whole. A BYOD phone (bring your own device) is the employee’s; the company usually manages only the work part and wipes only that.

## Step 9: Securing a phone

A plain table, "Ways to secure a mobile device":

> Measure  |  What it does  (the column heads)
> Device encryption  |  Scrambles what is stored, so it opens only with the passcode.
> Screen lock  |  Swipe protects nothing. A pattern can be watched. A PIN or password is stronger the longer it is. Fingerprint and face are quick, with the PIN behind them.
> Configuration profile  |  A bundle of settings and rules sent to many phones at once: Wi-Fi, email, VPN, passcode rules.
> Patch management  |  Keeping the system and apps updated, because updates close known flaws.
> Endpoint security  |  Protection on the device: anti-malware, and content filtering that blocks categories of sites.
> Locator app  |  Shows a lost phone on a map and can lock it. Needs location services and the phone online.
> Remote backup  |  A copy of the phone’s data kept away from it, so a wipe loses little.
> Remote wipe  |  Erases the phone from afar, once it is online. It cannot be undone, so it comes after locking and finding.
> Failed log-in limit  |  After too many wrong PINs the phone waits longer, or erases itself where the policy says.

A lost phone goes in this order: confirm who is calling, mark it lost to lock and find it, and wipe only when the owner says it is gone.

## Step 10: A worked example

A chat, with its history: "Ana, Sales", Chat with the help desk.

> (Ana, Sales, at the left) My new earbuds will not work with my new phone. I tried three times. They must be broken, so I am sending them back.

A written note: "Your notes", On the desk.

> Ana’s phone: Bluetooth is on. In its Bluetooth list the earbuds appear under Saved devices as Not connected. The earbuds’ light blinks when they are in pairing mode.
> A coworker’s phone is on the desk, with Bluetooth on.

Before the working, the learner may commit to a choice (not scored, not stored):
**You put the earbuds in pairing mode and pair them to the coworker’s phone. They pair at once and play sound. What does that show?**
(the options come in an order that depends on the seed of the question)
- The earbuds work, so the fault is on Ana’s phone side of the pairing, not in the earbuds.
- The earbuds work only with the coworker’s phone, the wrong model.
- The test proves nothing
- Ana’s phone must have a broken Bluetooth radio, so it needs replacing.

The working, one step at a time:
1. Write down every cause that fits “new earbuds will not work with the new phone”.: The earbuds are faulty; they are not in pairing mode; the phone’s Bluetooth is off; an old saved entry in the phone is in the way; a PIN was not confirmed.
1. Name the favorite cause and test it cheaply.: Ana thinks the earbuds are broken. The cheapest cut is to pair them to a different phone.
1. Drop the cause the test rules out.: The earbuds pair and play on the coworker’s phone, so they are fine. The fault is on Ana’s side.
1. Walk Ana’s phone along the chain: on, pairing mode, found, PIN, test.: Bluetooth is on. The earbuds are in pairing mode (the light blinks). They are not found as new, because a half-finished entry named Not connected is saved from Ana’s earlier tries.
1. Change one thing: forget the old entry and pair again.: Ana taps Forget on the saved entry, then scans, picks the earbuds and confirms the pairing. Nothing else is changed.
1. Test it with Ana and write it up.: Music plays, and a short test call works. The note says: new earbuds, stale saved entry, forgot it and paired again; earbuds fine.

Then the answer: The earbuds work, so the fault is on Ana’s phone side of the pairing, not in the earbuds. Ana blamed the earbuds. Pairing them to a second phone was the cheapest cut: they worked, so they were ruled out. The chain then showed Bluetooth on and pairing mode on, with a stale saved entry in the way, fixed by one change.

## Step 11: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Delia, Finance", Chat with the help desk.

> (Delia, Finance, at the left) **You are adding memory to a laptop. It is switched off, the charger is in the wall and the battery is inside the laptop. The memory sticks are small ones that sit under a cover on the bottom.**

Help on screen: the words that decide it are marked.

**What do you do before you touch the memory?**
(the options come in an order that depends on the seed of the question)
- Unplug the charger and battery, then ground yourself against static (right)
- Leave the charger in so the laptop stays grounded, and slide the memory out — if chosen: A plugged-in laptop still has power to its board. Disconnect first, then ground yourself.
- Put on rubber gloves so that nothing on your hands touches the board — if chosen: Gloves do nothing against static. A strap or touching bare metal lets the charge leave your body.
- Shut down in Windows and open the cover — if chosen: Shut down is not the same as unplugged. The battery and charger still feed the board.

After the answer: the deciding words are marked. Reason: The deciding words are the charger in the wall and the battery inside. Disconnect every power source, then ground yourself against static, before any part is touched.

#### Item 2

A chat, with its history: "Yaw, Marketing", Chat with the help desk.

> (Yaw, Marketing, at the left) **I need a charging cable for my new Android phone. The port is a small oval, and the plug goes in whichever way up I hold it. It is not an Apple phone.**

Help on screen: the words that decide it are marked.

**Which cable do you tell Yaw to buy?**
(the options come in an order that depends on the seed of the question)
- USB-C (right)
- Micro-USB — if chosen: Micro-USB is a flat, wider shape and goes in one way only. It is on older phones.
- Mini-USB — if chosen: Mini-USB is bigger and older still, found on cameras and old gear, and it goes in one way only.
- Lightning — if chosen: Lightning is Apple’s own thin plug. This is not an Apple phone.

After the answer: the deciding words are marked. Reason: The deciding words are a small oval and either way up. That is USB-C. Micro-USB and mini-USB fit one way only, and Lightning belongs to Apple.

#### Item 3

A chat, with its history: "Mike, Events", Chat with the help desk.

> (Mike, Events, at the left) **The new conference speaker has been on for ten minutes. No light is lit and nobody has pressed its button. My phone’s Bluetooth is on and its scan lists other devices nearby, but the speaker never appears.**

Help on screen: the words that decide it are marked.

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Hold the speaker’s button until its light blinks, then scan again (right)
- Restart the phone and scan again to see if the speaker shows up — if chosen: A restart is cheap, but the phone already finds other devices. The speaker has not been made discoverable.
- Restore the phone to factory settings and pair again from the beginning — if chosen: That erases the phone to fix a link that has not been checked yet.
- Return the speaker — if chosen: A new speaker may be fine. Nobody has tried its pairing mode.

After the answer: the deciding words are marked. Reason: The deciding words are no light, no button pressed, and other devices found by the phone. The phone side works, so the next link is the speaker being discoverable.

#### Item 4

A chat, with its history: "Leonard, Service manager", Chat with the help desk.

> (Leonard, Service manager, at the left) **My phone holds customer lists and my work email. Right now it unlocks with a swipe. A technician told me to pick a better screen lock.**

Help on screen: the words that decide it are marked.

**Which screen lock do you tell Leonard to choose?**
(the options come in an order that depends on the seed of the question)
- A six-digit PIN, with a fingerprint as a shortcut (right)
- Keep the swipe, but add a picture as the lock screen so it is yours — if chosen: A picture changes how the screen looks, not who can open it.
- A pattern drawn on the screen — if chosen: A pattern is weaker than a PIN: a thief can see the smudges or watch it being drawn.
- A four-digit PIN — if chosen: A longer PIN is harder to guess. A six-digit one gives a thief far more to try than a four-digit one.

After the answer: the deciding words are marked. Reason: The deciding words are customer lists and a swipe. A swipe protects nothing. A PIN with a fingerprint shortcut protects the data and still opens fast.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

11 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

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

#### Item 6

A chat, with its history: "Charlie, Support", Chat with the help desk.

> (Charlie, Support, at the left) Four letters on my laptop’s keyboard have stopped working since I spilled coffee on it. I shut it down and unplugged it at once and left it to dry overnight. It starts today and everything else works.

**What is the cheapest test to see whether the keyboard itself is the fault?**
(the options come in an order that depends on the seed of the question)
- Plug in an external USB keyboard and type the same letters (right)
- Reinstall Windows — if chosen: Reinstalling is a huge step. Spilled coffee points at the keyboard hardware, and an external keyboard checks that in a minute.
- Wipe the keyboard with a damp cloth and order a new laptop — if chosen: A damp cloth on a spilled-on laptop risks more liquid inside. Ordering a laptop is far more than the evidence calls for.
- Replace the built-in keyboard right away — if chosen: The coffee fits, but nothing has yet split the keyboard from the software on top of it.

After the answer: the deciding words are marked. Reason: The built-in keyboard is cut from the rest by an external one. If the outside keyboard works, the keyboard hardware is the part to replace.

#### Item 7

A chat, with its history: "Rhea, Consultant", Chat with the help desk.

> (Rhea, Consultant, at the left) I am at a client site with no guest Wi-Fi. My phone has a good signal and plenty of data. My laptop has no cellular modem. I need the laptop online for an hour.

**What do you tell Rhea to do?**
(the options come in an order that depends on the seed of the question)
- Turn on the phone’s hotspot and join it from the laptop (right)
- Put the phone beside the laptop — if chosen: NFC works only from a few centimeters and carries small payments, not an internet connection.
- Pair the phone to the laptop as a Bluetooth headset — if chosen: A headset link carries sound, not the internet connection.
- Plug the laptop into a docking station — if chosen: A docking station adds ports and power to a laptop. The internet connection still has to come from somewhere.

After the answer: the deciding words are marked. Reason: The deciding words are no guest Wi-Fi and a laptop without cellular. Hotspot and tethering both share the phone’s cellular data, and they use the plan’s data and the phone’s battery.

#### Item 8

A chat, with its history: "Camilo, Design", Chat with the help desk.

> (Camilo, Design, at the left) I come in with my laptop and want one connection to give it power, two monitors, a wired network, and a slot for an extra drive. A friend said to get a port replicator.

**What do you recommend, and why?**
(the options come in an order that depends on the seed of the question)
- A docking station (right)
- A port replicator — if chosen: A port replicator copies the laptop’s own ports. It does not add a drive bay.
- A drawing pad — if chosen: A drawing pad is a pen tablet for a computer. It does not connect monitors.
- A stylus — if chosen: A stylus is a pen for touch screens and has no part in connecting monitors or networks.

After the answer: the deciding words are marked. Reason: The slot for an extra drive is the deciding wish: it goes beyond repeating ports. A docking station can add it; a port replicator only copies the laptop’s own ports.

#### Item 9

A chat, with its history: "Dawn, HR", Chat with the help desk.

> (Dawn, HR, at the left) I changed my company password on Monday. Since then my phone shows no new mail, and the calendar is stuck. A banner says I must sign in again. The phone has full signal and Wi-Fi.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Have Dawn sign in again with the new password in the phone’s mail account (right)
- Turn on airplane mode for a minute, and then turn it off again — if chosen: Airplane mode restarts the radios. The radios work: signal and Wi-Fi are full.
- Erase the phone and configure the work account again from the start — if chosen: That is the heaviest step and loses the local data. The banner points at one password.
- Put the SIM card into a different phone to see if mail arrives there — if chosen: The mail does not depend on the SIM. It depends on the account being signed in.

After the answer: the deciding words are marked. Reason: The deciding words are changed my password and a banner asking to sign in. The network is fine, so the fault is the account link, and the cheapest change is to enter the new password.

#### Item 10

A chat, with its history: "Jolene, Sales rep", Chat with the help desk.

> (Jolene, Sales rep, at the left) My phone plan has a 10 GB limit. By the 12th I have used 9 GB. The data list says 7 GB of it is my photos syncing to cloud storage.

**What do you change?**
(the options come in an order that depends on the seed of the question)
- Switch photo sync to Wi-Fi only (right)
- Turn the phone’s cellular data off all month, and use it only on Wi-Fi — if chosen: That would cut off mail and maps on the road. Only the heavy job needs moving to Wi-Fi.
- Delete the photos from the phone after they sync — if chosen: The data is used when the photos are sent. Deleting them afterward saves none of it.
- Switch the phone to 3G — if chosen: An older network is slower; it does not use less data for the same video.

After the answer: the deciding words are marked. Reason: The deciding words are a 10 GB limit, 9 GB used and 7 GB of photo sync. Large transfers belong on Wi-Fi, and moving that one job is a single change.

#### Item 11

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

#### Item 12

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **A phone has no card to slide in: its SIM is built in and added with a code from the carrier. What is that kind of SIM called?**

**Type your answer.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - eSIM
  - e-SIM
  - embedded SIM

After the answer: Reason: An eSIM is built into the phone and added by the carrier’s QR code or app, so no card is swapped.

#### Item 13

The question, read aloud as above: **A laptop’s scanner reads a badge or a tap-to-pay phone held a few centimeters away. What are the three letters of the technology?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - NFC

After the answer: Reason: NFC, near field communication, works from a few centimeters. It is the near-field scanner some laptops and most phones carry.

#### Item 14

The question, read aloud as above: **Which desk base only repeats a laptop’s own ports and adds nothing new? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - port replicator

After the answer: Reason: A port replicator repeats the laptop’s ports onto the desk. A docking station can add power, drives and more.

#### Item 15

The question, read aloud as above: **Which plug is a small oval that goes in either way up, and is on most current Android phones? Name it as a USB type.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - USB-C
  - USB Type-C

After the answer: Reason: USB-C is the small reversible oval. Micro-USB and mini-USB go in one way only, and Lightning is Apple’s own.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

7 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 16

A chat, with its history: "Giulia, Operations", Chat with the help desk.

> (Giulia, Operations, at the left) Marco is leaving the company today. Marco reads work mail on a personal phone, which the company manages only for the work apps; the company can remove those apps and their data and nothing else. Family photos are on it too.

**What do you do to the phone?**
(the options come in an order that depends on the seed of the question)
- Remove the work apps and their data only, with a selective wipe (right)
- Wipe the whole phone — if chosen: The company does not own the phone. A full wipe would destroy Marco’s own photos and data.
- Leave the phone alone and trust Marco to remove the mail — if chosen: The company mail and files must come off. Leaving them is a hole in the company’s protection.
- Lock the phone remotely until Marco hands it in — if chosen: It is Marco’s own phone, so locking it is out of bounds.

After the answer: the deciding words are marked. Reason: The deciding words are a personal phone and managed only for the work apps. A personal phone gets a selective wipe of the work part; a company-owned phone can be wiped whole.

#### Item 17

A chat, with its history: "Lia, Traveler", Chat with the help desk.

> (Lia, Traveler, at the left) I am flying abroad next week. My new phone is unlocked and has no slot for a SIM card, and I want a local data plan there without carrying a card.

**What do you tell Lia?**
(the options come in an order that depends on the seed of the question)
- Use an eSIM: buy a local carrier’s plan and add it by QR code or app (right)
- Buy a SIM card and cut it down until it fits into the phone — if chosen: The phone has no slot to put any card into.
- Turn on the hotspot of a friend’s phone and join its Wi-Fi in the other country — if chosen: That depends on a friend’s plan and presence abroad, and not on Lia’s own plan.
- Keep the home plan and switch on data roaming for the trip — if chosen: Roaming uses the home carrier’s plan and rates. Lia wants a local plan, and a local plan is added to the phone as an eSIM.

After the answer: the deciding words are marked. Reason: The deciding words are no slot for a SIM card. A phone without a slot has an eSIM, and a local plan is added to it through a carrier’s QR code or app.

#### Item 18

A chat, with its history: "Cleo, Front desk", Chat with the help desk.

> (Cleo, Front desk, at the left) My little girl tapped my phone and now it says it is locked and to try again in one hour. I know my PIN. I am afraid that it will erase itself.

**What do you tell Cleo?**
(the options come in an order that depends on the seed of the question)
- Wait for the timer, then enter the right PIN (right)
- Keep entering PINs until the timer clears and the phone opens — if chosen: A wrong try adds to the count and lengthens the wait. A policy may even erase the phone at a fixed limit.
- Restart the phone to clear the lock and the timer — if chosen: A restart does not clear a log-in lock. The timer and the count stay.
- Hand the phone to the desk to be wiped and configured again — if chosen: A wipe erases the phone. The lock clears by itself in an hour, and Cleo knows the PIN.

After the answer: the deciding words are marked. Reason: The deciding words are try again in one hour and I know my PIN. A failed-log-in limit slows or erases after too many wrong tries, so waiting and entering the right PIN is the cheap, safe step.

#### Item 19

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

#### Item 20

A chat, with its history: "Gerald, Facilities", Chat with the help desk.

> (Gerald, Facilities, at the left) I bought memory for my laptop from the computer shop, and the sticks were long, like the ones in the office tower computers. I opened the laptop cover and the slot is much shorter.

**What did Gerald buy, and what does the laptop need?**
(the options come in an order that depends on the seed of the question)
- Tower memory (DIMM); a laptop needs the shorter SODIMM kind instead (right)
- The right memory, but the laptop slot is faulty and must be replaced — if chosen: The slot is made short on purpose. The sticks are the wrong shape.
- Laptop memory sticks (SODIMM); the tower needs the longer DIMM kind — if chosen: It is the other way round. The long sticks Gerald holds are DIMM, for towers.
- Memory sticks that need only a firmware update before they will fit — if chosen: Firmware settings cannot change a stick’s length. The shape decides whether it fits.

After the answer: the deciding words are marked. Reason: Long sticks like those in a tower are DIMM. A laptop takes the shorter SODIMM. The shape of the part decides what fits, whatever the settings.

#### Item 21

The question, read aloud as above: **An employee uses their own phone for work mail, and the company manages the work part. What do the four letters BYOD stand for? Write the four words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - bring your own device

After the answer: Reason: BYOD is bring your own device. The company manages the work part of such a phone and wipes only that, never the owner’s own data.

#### Item 22

The question, read aloud as above: **What is the step called that erases a lost phone from afar, once it is online, and cannot be undone? Two words.**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - remote wipe

After the answer: Reason: A remote wipe erases the phone from afar. It cannot be undone, so it comes after locking and finding the phone.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 23

A chat, with its history: "Edith, Planning", Chat with the help desk.

> (Edith, Planning, at the left) My laptop shuts off about ten minutes after I unplug it. The battery screen says the battery is worn. The charger works and the laptop runs fine plugged in. The battery is inside the case.

**What is the right step?**
(the options come in an order that depends on the seed of the question)
- Power off, unplug the charger, disconnect the old battery, then replace it (right)
- Replace the battery with the laptop on and plugged in, so that it never shuts down — if chosen: Power must be off at every source before a part is changed. A live board can be damaged.
- Replace the charger — if chosen: The laptop runs fine on the charger. The fault shows only without it.
- Reinstall Windows — if chosen: A worn battery report is a hardware sign, and reinstalling would not change it.

After the answer: the deciding words are marked. Reason: The deciding words are a worn battery that shuts the laptop off, and fine on the charger. The battery is the part, and every power source is disconnected before it is changed.

#### Check question 24

The question, read aloud as above: **Lightning is a charging and data connector found on older iPhones and iPads. Which company made it?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Apple

After the answer: Reason: Lightning is Apple’s own connector. Newer iPhones and iPads use USB-C, which is the standard shape on most other phones.

#### Check question 25

A chat, with its history: "Myra, Warehouse", Chat with the help desk.

> (Myra, Warehouse, at the left) My phone shows Wi-Fi and the cellular bars gone, and the Bluetooth speaker is off, too. The little plane icon is lit. I have not touched any setting.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Turn airplane mode off, then check each radio (right)
- Replace the SIM card — if chosen: The SIM is only one of three affected radios. A single switch explains all three.
- Forget the Wi-Fi network and pair the speaker again from the beginning — if chosen: Each of those starts over on one radio. The plane icon is the one switch that covers every one.
- Update the phone’s software — if chosen: Nothing has been checked first. The plane icon already says what turned the radios off.

After the answer: the deciding words are marked. Reason: The deciding words are Wi-Fi, cellular and Bluetooth all gone, with the plane icon lit. Airplane mode switches the three radios off together, so turning it off is the first test.

#### Check question 26

The question, read aloud as above: **A company uses software to push settings, apps and rules to its phones and tablets and to lock or wipe them from afar. What are the three words that the letters MDM stand for?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - mobile device management

After the answer: Reason: MDM is mobile device management. The company enrolls a phone, then the software configures it, enforces its rules, installs company apps and can lock or wipe it.

#### Check question 27

The question, read aloud as above: **A company bundles a phone’s Wi-Fi, email, VPN and passcode rules into one file that it sends to many phones at once. What is that bundle called?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - configuration profile
  - configuration profiles
  - profile

After the answer: Reason: A configuration profile carries settings and security rules. MDM sends it, so every phone is configured the same way without anyone touching each one.

#### Check question 28

A chat, with its history: "Ray, Sales", Chat with the help desk.

> (Ray, Sales, at the left) I dropped my phone in the lake while fishing, so it is gone. It is my own phone, and the company only manages my work mail on it. I want to be sure nobody can read my work mail.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Check Ray by the desk’s own check, queue a selective wipe of work data, change the password (right)
- Check the serial number Ray reads out, then wipe the whole phone when it next connects — if chosen: This is a personal phone, so the company has no claim on Ray’s own data. A number the caller supplies also proves nothing about who is calling.
- Take the caller’s word that it is Ray, queue a selective wipe of work data, change the password — if chosen: The wipe and the password are the right moves, but the caller must be confirmed by something the caller did not supply.
- Mark it lost, wait a week to see whether it is found, and then decide what is possible — if chosen: A phone in a lake will not be found by a locator, and a week leaves the mail open.

After the answer: the deciding words are marked. Reason: The deciding words are a personal phone and managed work mail only. After the identity check, a selective wipe takes the work data when the phone is next online, and a changed password closes the account at once.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
