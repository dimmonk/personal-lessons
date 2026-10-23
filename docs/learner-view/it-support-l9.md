# IT Help Desk: From the power button to the desktop

Revision 2, live. Part: From the power button to the desktop. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Malik says their desktop will not start; they are sure the hard drive died. Instead of ordering a drive, you find out what happens when they push the button. Light on, fans spinning, no logo. That rules the drive out: the computer reaches it after four earlier steps, and their stopped before the third.
A computer starts as a chain, each step running only if the one before worked. Here you learn the six links, the symptom on each, and the cheap test for where it stopped.

## Step 1: The six links

A computer does six things in order, from the power button to the desktop. Where it stops tells you where to look.
1. Power. The outlet, the cable and the power supply (the box that turns wall power into what the parts use); on a laptop, the charger and battery.
2. The start-up self-test, called POST (power-on self-test). The firmware (link 3) runs it before it looks for a drive: it checks the processor, memory and video card (the part that makes the picture) and beeps a pattern on a fault. A logo means memory and video have started.
3. Firmware. The small program built into the motherboard (the main circuit board that every other part plugs into), called BIOS or UEFI (the newer kind). It holds the settings, including the date and time and the boot order: the places it looks, in turn, for something to start from. A small motherboard battery keeps them alive when the computer is off. After the self-test, the firmware follows the boot order to the boot drive. It can list the drive inside, a USB stick, the network, or a recovery partition (a hidden repair area on the drive). A USB stick with nothing to start is usually skipped.
4. The boot drive: the drive the firmware picked, holding Windows’ start-up files.
5. Windows loading. The logo and spinning dots. A crash now gives a blue screen with a stop code that names what failed.
6. Sign-in and profile. The sign-in screen, then the user’s profile: their desktop, settings and files.

## Step 2: Each symptom sits on a link

A plain table, "Where each sign belongs":

> What you see or hear  |  The link  |  What it points at  (the column heads)
> No light, no fan, no sound  |  1. Power  |  Outlet, cable, power supply; on a laptop, charger or battery
> Fans run, black screen, no logo, or beeps  |  2. Start-up self-test  |  Memory or video most often; the pattern differs by maker, so check the motherboard’s manual
> Wrong date and time, or settings that keep resetting  |  3. Firmware  |  The small battery on the motherboard
> It starts from a USB stick or the network instead of Windows  |  3. Firmware  |  The boot order puts the wrong place first
> “No bootable device,” “Operating system not found,” or a blinking line  |  3 and 4. Firmware looking for a drive  |  Firmware found no drive to start from. Open its screen: a drive not listed points at the drive or its cable; one listed points at the boot order or damaged start-up files
> Clicking or grinding, very slow reads, a failed drive health check (S.M.A.R.T.)  |  4 and 5. The drive  |  A failing drive that may stop for good
> Blue screen with a stop code, or restarts at the Windows dots  |  5. Windows loading  |  A driver (the small program that lets Windows use a part), a file, memory or the drive; the stop code names it
> On a Mac: an endless color wheel, or a restart message (a kernel panic)  |  5. Loading, on a Mac  |  The Mac’s blue screen: read what the message names
> Reaches sign-in, then slow or empty for one person only  |  6. Sign-in and profile  |  That person’s profile
> Slow all day, or one program crashing  |  After sign-in  |  All programs slow: memory, a full or failing drive, or heat. One program: that program

Heat belongs to every link: a hot computer, loud fan and shutdowns point at dust or a failing heat sink (the metal block cooling the processor). A burning smell or a swollen capacitor (a small part on the motherboard, bulged on top) means do not power it on again: unplug it, and never open it while plugged in.
Reseating memory or a cable does not touch the files, but anything that writes to the drive waits until they are copied. If the computer will not start, put its drive in an enclosure (a small box with a USB plug) on a second computer and copy the files.

## Step 3: How far did it get?

Earlier you cut a list in half. A chain gives the cheapest cut: how far did it get? Look at the link after the last one that worked; the rest are ruled out.
The questions are free: Does a light come on? Do the fans spin? Is there a logo? What do the words say? Does it reach sign-in? Does it fail for everyone?
Each link has a cheap test for which side the fault is on. Power: the computer’s own charger or cable in another outlet, or a cable known to work. Self-test: the monitor on another computer. Firmware: open its screen; is the drive listed, and what is first in the boot order? Windows loading: the stop code. Sign-in: another person signing in on the same computer.

## Step 4: Start at the drive

A wrong idea, marked wrong: “It will not start, so the drive is dead. I will order one, and if that fails, reinstall Windows.”
The right line: The drive is link 4. A computer with no logo never got near it, and a reinstall erases the user’s files. Find out how far it got; look at the first link that failed. The drive is the answer only when the firmware lists none and a known-good cable changes nothing.

## Step 5: A worked example

A chat, with its history: "Malik, Accounting", Chat with the help desk.

> (Malik, Accounting, at the left) My desktop will not start. I pushed the button and all I get is a black screen. It has been sick for a week, so I bet the hard drive finally died.

The chain from the button to the desktop: power, the start-up self-test, firmware, the boot drive, Windows loading, sign-in. A fault on one link stops everything after it.

Before the working, the learner may commit to a choice (not scored, not stored):
**Malik says the front light is on and the fans spin, but the screen never shows a logo or any words. Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Before the logo: the self-test, or the screen itself.
- At the boot drive, the part Malik says died this week.
- At power, so the outlet or the power cable is at fault.

The working, one step at a time:
1. Write the chain, so every cause has a place.: Power, start-up self-test, firmware, boot drive, Windows loading, sign-in. A black screen could be any of the first three, or the screen itself.
1. Name the favorite and find which link it sits on.: A dead hard drive is the boot drive link, number 4. The computer would first have to get through links 1 to 3.
1. Find out how far it got, the cheapest test there is: it changes nothing.: Malik: front light on, fans spin, no logo, no words. Link 1 is fine. It never reached link 3, so link 4 cannot be where it stopped.
1. Cut the two that are left: the screen against the computer.: Malik plugs their monitor into a co-worker’s computer. A picture shows. The monitor and cable are fine. The fault is inside their computer.
1. Find out whether the computer gave a sign.: Malik: “Now that you mention it, it beeps in a pattern when I push the button.” The start-up self-test beeps when it finds a fault. The pattern means something different for each maker, so look it up for their computer.
1. Look it up, then make one change.: The motherboard maker’s manual says that pattern is a memory fault, so the memory sticks are the cause to test, one at a time. Malik switches off and unplugs it, then reseats one memory stick and tries: still the same beeps. They reseat the second stick and try again: it starts. Only that second stick was loose, and the hard drive was never the problem.

Then the answer: Before the logo: the self-test, or the screen itself. The favorite cause, the drive, sits on link 4, and the computer never got that far: no logo meant it stopped between power and firmware. “How far did it get?” ruled the drive out with one question. The beeps then said which part the self-test found at fault.

## Step 6: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Ilsa, Records", Chat with the help desk.

> (Ilsa, Records, at the left) **My desktop is completely dead. No lights, no fans, no sound. The monitor says no signal.**

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

Help on screen: the words that decide it are marked.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Power (right)
- The start-up self-test — if chosen: The self-test cannot run on a computer with no power. Its signs (a screen, beeps) are missing, but so is everything else.
- Firmware — if chosen: The firmware runs only on a computer that has power. Nothing has come on.
- Windows loading — if chosen: Windows loads after four earlier links. This computer is not even on.

After the answer: the deciding words are marked. Reason: No light, no fan and no sound means nothing has power, so the first link is where it stops. A fault on link 1 stops every later link, which is why the cheap tests are an outlet that works, a power cable known to work, and the switch on the back of the power supply.

#### Item 2

A chat, with its history: "Everett, Warehouse", Chat with the help desk.

> (Everett, Warehouse, at the left) **I push the button, the fans run, and it beeps in a pattern. Long, short, short. The screen stays black.**

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

Help on screen: the words that decide it are marked.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- The start-up self-test, which beeps a pattern (right)
- Power, which feeds the fans and the board — if chosen: The fans run, so power reaches the computer.
- The boot drive, which holds Windows’ files — if chosen: The drive is looked for after the self-test passes. This one did not.
- Firmware, which looks for the boot drive — if chosen: The firmware looks for the boot drive only after the self-test passes and the logo shows. Beeps and a black screen mean the self-test found a fault first.

After the answer: the deciding words are marked. Reason: The start-up self-test (POST, the power-on self-test) checks the processor, memory, keyboard and video before anything else. When it finds a fault it beeps a pattern. The pattern differs by maker, so the next step is to look it up in the motherboard’s manual, not to guess.

#### Item 3

A chat, with its history: "Gabor, Sales", Chat with the help desk.

> (Gabor, Sales, at the left) **The maker’s logo shows, then a black screen with white words: “No bootable device found.”**

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

Help on screen: the words that decide it are marked.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Firmware: it found no drive it can start from (right)
- The start-up self-test: it checked memory and video and failed — if chosen: The logo shows, so the self-test passed. “No bootable device” is not a self-test message.
- Windows loading: the dots start and then it stops — if chosen: Windows would be loading if the firmware had found a drive to start it from. The message says it did not.
- Power: the outlet or the power supply is not feeding it — if chosen: A logo and a message on the screen mean power works.

After the answer: the deciding words are marked. Reason: The firmware is the program that finds the drive to start from, using the boot order. “No bootable device” means it found none it can start from. The cheapest test is to open the firmware screen and see whether the drive is listed: not listed points at the drive or its cable (link 4), listed points at the boot order or damaged start-up files.

#### Item 4

A chat, with its history: "Hilda, Shipping", Chat with the help desk.

> (Hilda, Shipping, at the left) **Windows starts to load, the little dots spin, and then a blue screen with a sad face and a code comes up. Then it restarts and does it again.**

Chain: power, start-up self-test, firmware, boot drive, Windows loading, sign-in.

Help on screen: the words that decide it are marked.

**Where does it stop?**
(the options come in an order that depends on the seed of the question)
- Windows loading (right)
- The boot drive — if chosen: The firmware found the drive and started Windows from it, so the drive link worked.
- Sign-in — if chosen: The computer never reaches the sign-in screen.
- The start-up self-test — if chosen: Windows loaded far enough to show a screen, so the self-test passed.

After the answer: the deciding words are marked. Reason: A blue screen is Windows’ own crash screen, shown with a stop code that names what failed. The code is what you write down and search for. It also says the first four links worked.

Then a screen: you can stop here, your place is kept.

## Step 7: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Olivia, HR", Chat with the help desk.

> (Olivia, HR, at the left) Every morning my computer shows the wrong date and time, a few years back, and my files say they were made in the past. I fix the clock and it is wrong again tomorrow.

The firmware keeps the date, time and its settings in a small memory that a coin-sized battery on the motherboard keeps alive when the computer is off.

**Which is the most likely cause?**
(the options come in an order that depends on the seed of the question)
- That small battery on the motherboard is dead. (right)
- The hard drive is failing. — if chosen: A failing drive shows as noises, slow reads or “no bootable device”, not a clock that loses time overnight.
- Windows’ automatic time setting is switched off. — if chosen: That would let the clock drift by minutes. It would not send it back years each night.
- The power supply is weak. — if chosen: A weak power supply causes shutdowns and failures to start, not a clock that resets each night.

After the answer: the deciding words are marked. Reason: Two causes fit a wrong clock: the battery, and Windows’ time setting. A clock that falls back years every night, with the files stamped to match, is the firmware losing its memory while the computer is off, so the battery (link 3) comes first. Windows reads its time from the firmware, and reinstalling Windows would not give the firmware a battery. Changing the battery is cheap, and if the clock then holds, the other cause is ruled out too.

#### Item 6

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

#### Item 7

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

#### Item 8

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

#### Item 9

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

#### Item 10

Bram in Shipping calls the help desk. You answer.

**Bram calls about their desktop. What do you say?**
- An incoming call from "Bram, Shipping" (Incoming call · 8:40 AM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer is dead. It is old. I need a new one today." [pushes: They want a replacement before anything has been tested.]
  - reply "I will put in the order for a new computer today.": the call ends (not this one): Nothing showed the old computer was the cause. One question about the lights and fan would have shown how far it got. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "You need to work today and the computer will not run. Before I order anything, tell me what happens when you push the power button.": goes on to turn 2, where the pressure comes back
  - reply "Is it plugged in? Check that first, and then call me back.": the call ends (not this one): The plug is a cheap check, but it covers only link 1. Asking what happens at the power button covers all six links at once and tells you whether power is the link to look at. [slip: ran a test that does not split what works from what does not]
  - reply "Unplug it, wait a minute, and plug it in again.": the call ends (not this one): Unplugging and plugging in is a repeat, not a test. If it fails again, you still do not know which link failed. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "The light comes on and the fan spins. Then the screen just says “No signal.” But I am sure it is old. Just order it." [pushes: They still want the replacement, though the computer is clearly powering on.]
  - reply "I hear you that it is old. Power works, so it may be only the cable or the monitor. I will check both and tell you today whether the computer needs replacing.": the call ends (right): The light and fan show power works, so the fault is further along. “No signal” is the screen not getting a picture, so the cable and monitor are the cheapest things to cut next. Telling them when they will hear back says what happens next.
  - reply "I hear you that it is old. All right: I will order the new computer today and tell you when it arrives.": the call ends (not this one): The computer powers on, so a new one is not shown to be needed. “No signal” could be the cable or the monitor. [slip: replaced a part before the cheap check]
  - reply "I hear you that it is old. It sounds like the hard drive has died, so I will line up a new one and call you today.": the call ends (not this one): A dead drive would show after the maker’s logo, as a message about a boot device. Bram has not got a picture at all, so the computer has not reached the drive. [slip: put the fault on the wrong link of the chain]
  - reply "I hear you that it is old. Let us open the firmware screen and see whether it lists the drive, and I will call you back today.": the call ends (not this one): There is no picture, so there is no firmware screen to open. The cable and monitor come first. [slip: put the fault on the wrong link of the chain]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: The light and fan show power works, which rules out link 1. “How far did it get?” is the question that cut the list; the screen, cable and self-test are what is left, and each can be tested without ordering anything.

Then a screen: you can stop here, your place is kept.

## Step 8: Questions

3 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 11

A chat, with its history: "Kendra, Planning", Chat with the help desk.

> (Kendra, Planning, at the left) My laptop makes a clicking noise from the bottom and then Windows takes ages to start. Twice this week it said it could not find the operating system.

You have a few minutes before you touch anything. The laptop still starts sometimes.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Have Kendra copy their files off now, then look at the drive. (right)
- Reinstall Windows to fix the slow start and the errors. — if chosen: A failing drive may not survive a reinstall, and a reinstall erases their files.
- Tell them the noise is normal and to keep working. — if chosen: The noise is the computer reporting what is failing. Ignoring it risks the files.
- Run the maker’s drive test on the laptop, and copy the files after. — if chosen: The test reads the whole failing drive hard and may be the thing that makes it stop. The files come out before any test touches the drive.

After the answer: the deciding words are marked. Reason: Clicking or grinding from a hard drive, slow starts and “operating system not found” say the drive (links 4 and 5) is failing, and the message is the firmware looking for it (links 3 and 4). A failing drive can stop for good, so the data comes out before any test or fix touches it, as in the earlier topic on protecting data.

#### Item 12

A chat, with its history: "Linus, Finance", Chat with the help desk.

> (Linus, Finance, at the left) My desktop smells like something is burning and it just switched itself off. Can I turn it on again to see?

**What do you tell Linus?**
(the options come in an order that depends on the seed of the question)
- Do not turn it on. Unplug it from the wall and have it looked at. (right)
- Turn it on once to see whether it still works, then decide. — if chosen: The smell is a warning. Powering it on again can finish off the part and is a safety risk.
- Open the side panel and look for the burnt part yourself, with it plugged in. — if chosen: Never open a computer that is plugged in. It is unsafe, and a look alone does not tell you the cause.
- Move it to another outlet and try it there, in case it is the outlet. — if chosen: The smell came from inside the computer, so a new outlet tests nothing and powers up a part that may be burning.

After the answer: the deciding words are marked. Reason: A burning smell, with a sudden shutdown, can come from the power supply or any part running too hot. It sits on no single link, so no start-up test is worth the risk. Safety comes first: power off, unplug, and have it looked at.

#### Item 13

A chat, with its history: "Marit, Support", Chat with the help desk.

> (Marit, Support, at the left) The user has a desktop with a black screen and fans that run. A co-worker already swapped the monitor cable, moved the memory sticks to different slots, and put in a new power cable all at once. It now starts. Nobody knows which did it.

**Why is that a problem?**
(the options come in an order that depends on the seed of the question)
- Three changes went in together, so nobody knows which one fixed it. (right)
- Memory sticks should never be moved, whatever the symptom is. — if chosen: Moving memory is a normal, cheap test. The mistake was doing it together with two other changes.
- The new power cable cannot have helped, so it did not count. — if chosen: It may have. With three changes together, you cannot tell.

After the answer: the deciding words are marked. Reason: The rule of one change at a time holds on the boot chain too: change one thing, look, then change the next. Each link has its own cheap changes (a cable, the memory, a power cord), and one at a time is the only way to learn which link was the fault.

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 14

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

#### Check question 15

A chat, with its history: "Vaughn, Records", Chat with the help desk.

> (Vaughn, Records, at the left) The computer shows the maker’s logo, then goes to a black screen with a blinking line and nothing else. It says nothing about a drive.

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

#### Check question 16

A chat, with its history: "Olwen, Planning", Chat with the help desk.

> (Olwen, Planning, at the left) I can sign in, but the screen then says it is “preparing” for ages and gives me a blank desktop with none of my icons or files. A co-worker signed in on my computer and has no trouble.

**Where on the chain is the fault?**
(the options come in an order that depends on the seed of the question)
- Sign-in and profile: the saved desktop and files (right)
- Windows loading: the logo, dots and the blue screen — if chosen: Windows loads fine for the co-worker on the same computer.
- The boot drive: where the start-up files sit — if chosen: The computer starts and shows sign-in, so the drive was found.
- Power: the outlet, cable and power supply — if chosen: The computer is on and shows a screen.

After the answer: the deciding words are marked. Reason: A different person gets through every link on the same computer, so the computer is cleared and the fault goes with Olwen’s profile. It is the same split as “another person, same computer” in cutting it in half, now on a chain.

#### Check question 17

A chat, with its history: "Pascal, Accounting", Chat with the help desk.

> (Pascal, Accounting, at the left) The fans spin and there are three long beeps, then nothing. The monitor says no signal. The same monitor works on my laptop.

**Which causes are still worth listing? Pick every one that fits.** (choose every one that fits)
(the options come in an order that depends on the seed of the question)
- A memory stick that is loose or has failed (right)
- The video card or its connection (right)
- The monitor is broken — if chosen: The same monitor works on Pascal’s laptop.
- The user’s profile is damaged — if chosen: The computer has not reached Windows or sign-in, so no profile has loaded.

After the answer: the deciding words are marked. Reason: The beeps mean the start-up self-test found a fault, usually memory or video, so those are the two to list. The monitor works elsewhere and the profile belongs to a link the computer never reached.

#### Check question 18

Ilsa in Records calls the help desk. You answer.

**Ilsa calls about their desktop. What do you say?**
- An incoming call from "Ilsa, Records" (Incoming call · 1:15 PM). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. Pick what you say. The call goes on from there. Nothing is marked until it ends, and a call is not on a clock.
- turn 1, the other side says: "My computer will not work. It is stuck on a black screen with some white words. I do not know what they say. Can you just reinstall Windows?" [pushes: They want the biggest fix before they have read the words.]
  - reply "Yes, I will reinstall Windows for you now.": the call ends (not this one): A reinstall erases their files and nothing said Windows was the fault. The words on the screen had not been read yet. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "So it is a black screen with white words on it. Please read me the words exactly as they are written.": goes on to turn 2, where the pressure comes back
  - reply "Turn it off and on again and call back.": the call ends (not this one): A restart repeats the failure, and rules nothing out. The message on the screen is the most useful thing they have. [slip: ran a test that does not split what works from what does not]
  - reply "Is the monitor plugged in properly?": the call ends (not this one): They can see words on the screen, so the monitor works. The question rules nothing out. [slip: ran a test that does not split what works from what does not]
- turn 2, the other side says: "It says “Operating system not found.” It showed the maker’s logo first. My last computer was fixed with a reinstall, so just do that." [pushes: They still want it reinstalled.]
  - reply "The logo means power and the self-test worked. A reinstall would erase your files, and if the drive is missing it would not help. First I will look in the firmware screen to see whether the computer sees the drive.": the call ends (right): The logo says the first two links worked. Whether the firmware sees the drive splits a missing or failed drive from damaged start-up files, and it erases nothing. Holding the line politely, with the reason, keeps their files safe.
  - reply "I understand it worked last time. Then yes, I will put Windows on again for you now and call you when it is done.": the call ends (not this one): The message could mean the drive is missing or unreadable, and a reinstall would not fix that. It also erases their files. [slip: worked on whatever was nearest instead of testing to split the causes]
  - reply "It is probably a virus.": the call ends (not this one): Nothing in “operating system not found” says a virus. Telling them a cause before knowing it can mislead them and the next person. [slip: told the user a cause before knowing it]
  - reply "Have you tried a different outlet for the computer?": the call ends (not this one): The computer has power: the logo and the message show it. Another outlet tests a link that already worked. [slip: put the fault on the wrong link of the chain]
- After it ends: the lines of every turn that pushed are marked and named ("It pushes:"), and the reply where it could have ended the right way is named ("You could have ended it at your first reply: “the reply”." or "You ended it as soon as you could.").

After the answer: Reason: Reading the words exactly is the cheapest test, and the maker’s logo says the first two links worked. The message places the fault on the boot drive, where the next cut is whether the firmware sees the drive, before any fix that erases files.

#### Check question 19

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

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
