# IT Help Desk: Mobile problems

Revision 2, live. Part: Mobile problems. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Tess says the phone is slow and the battery is dead by lunch. Tess is sure it needs a new battery. The phone itself will say in a minute.
A phone fails in five places, each with its own signs. Here you learn the five, the symptoms on each, the questions that cut them in half, and the one sign that means stop at once.

## Step 1: Five links in a phone

Five places to look, from the part you can touch to the part you cannot see.
1. The body. The battery, the charger and the charging port, the screen, and the layer under the glass that senses a touch (the digitizer).
2. The connections. Wi-Fi, cellular (the phone network), Bluetooth for headsets and watches, and NFC (near-field communication), the very short range radio for tap to pay.
3. The system. The operating system (OS, such as Android or iOS), storage, updates and restarts.
4. The app. One program on the phone.
5. What was installed. Where apps and settings came from: the official store, or somewhere unchecked.

## Step 2: Body symptoms and the first check

A plain table, "The body: what you see, and the first check":

> What you see  |  Likely cause  |  First check  (the column heads)
> Battery drains fast or shuts off with charge left (poor battery health)  |  A worn battery  |  The phone’s battery health reading, then which app uses the battery
> Screen lifts, the back bulges, hot while charging  |  A swollen battery. A safety issue  |  Stop using and charging it at once (next screen)
> Charges slowly or only at an angle (improper charging)  |  Worn cable, weak charger, lint or a damaged port  |  Swap one part at a time: cable, charger, then look in the port. Try a wireless pad
> Cracked glass, or the picture is fine but touches land wrong or not at all (broken screen, digitizer)  |  Damaged screen or touch layer  |  Same in other apps? Look for a crack. Save data first
> Phone fell in water (liquid damage)  |  Liquid inside  |  Power off, remove cover and cables, no charging until checked
> Hot to hold (overheating)  |  Sun, charging, a heavy app, a cover  |  Cover off, out of the sun, stop charging. A bulge means a swollen battery
> Loose cable, bent contacts (damaged port)  |  The port is worn or bent  |  Swap cables, check the port with a light. Repair it
> Touches drift, land a little off, or happen by themselves (cursor drift, touch calibration)  |  Water, dirt, a screen protector, or calibration  |  Dry and clean the screen, test without the protector, then run the touch calibration
> Stylus draws nothing, finger works  |  Its battery, pairing or tip  |  Charge or replace its battery, pair it again

## Step 3: The one sign that means stop

A swollen battery is a lithium-ion battery filled with gas. The screen lifts from its frame, the back puffs up, a laptop’s touchpad rises or the lid will not close. It can catch fire.
So the first move is not a test. The user unplugs it, stops using it and does not charge it. Nobody presses on it or opens it. It stays away from heat and follows the desk’s rule for battery repair and disposal, never the ordinary bin.

## Step 4: Connections, system and app

A plain table, "Links 2 to 4: what you see, and the first check":

> What you see  |  Link  |  First check  (the column heads)
> No bars, no Wi-Fi, nothing loads (poor or no connectivity)  |  2. Connections  |  Airplane mode? Wi-Fi against cellular. Forget the network and rejoin it
> Bluetooth says connected, no sound, or will not pair  |  2. Connections  |  On? Try each side with something else, then remove the saved pairing and pair again
> Tap to pay fails (NFC)  |  2. Connections  |  NFC on, the phone right at the reader, a thick cover off
> Slow everywhere, apps will not install or the OS will not update  |  3. System  |  Free storage, battery level, a connection. Then restart
> Battery life short with a healthy battery  |  3. System or 4. App  |  The battery list names the app. Brightness, location
> Restarts by itself (random reboots)  |  3. System or 4. App  |  After a restart? In safe mode? A recent app or update
> Screen does not turn sideways (autorotate)  |  3. System  |  The rotation lock in the quick controls
> One app will not launch, close, update or install  |  4. App  |  Reopen, restart, update, clear its cache (Android), reinstall (back up its data first)

## Step 5: Cutting a phone in half

Cheap questions cut the five links in half:

A plain table, "Questions that split a phone":

> Question  |  If yes  |  If no  (the column heads)
> Is it only one app?  |  Link 4, that app  |  Link 3 or 1, the whole phone
> Does it fail on both Wi-Fi and cellular?  |  The phone, or the account  |  That connection is the fault
> Does a restart fix it?  |  A stuck process, perhaps  |  Look further
> Fine in safe mode (Android; runs without installed apps)?  |  An app the user installed  |  The system or the body
> Does another cable or charger fix it?  |  The cable or charger  |  The port or the battery

This assumes one fault at a time. The phone’s own reports are free: battery health, and the battery, data and storage lists. Safe mode is Android’s only.

## Step 6: What was installed

A plain table, "The security concerns":

> Word  |  What it is  |  Why it matters  (the column heads)
> Unofficial app store  |  A store or file not from the phone maker or the company  |  It skips the checks that catch bad apps
> Developer mode  |  Settings for app builders (such as USB debugging)  |  They lower protections. Off unless needed
> Root (Android), jailbreak (iPhone)  |  Removing the maker’s limits on the phone  |  A bad app then reaches everything
> Malicious app  |  An app made to steal, spy or send ads  |  It reaches what the phone lets any app reach
> App spoofing  |  A fake app copying a real one’s name and look  |  It wants things the real one does not

A plain table, "Signs of a bad app":

> What you see  |  What it points at  (the column heads)
> High network traffic, a data-usage warning, slow, hot  |  An app sending data in the background; the data list names it
> Many ads, even outside the app  |  Adware
> Fake security warning  |  A page or app that wants a tap on its button
> Odd app behavior, limited or no internet  |  An app changed settings or is blocking the connection
> Leaked photos, messages or accounts  |  An app that can read them
> Pop-ups only in the browser, after allowing a site’s notifications  |  The site may show them: remove its permission, clear the browser data

This desk’s order for a bad app: save the files, cut the phone off the network (airplane mode), remove the app, scan with the company’s mobile anti-malware, update the OS, change passwords from another device, and close root or developer mode. A factory reset is last, if the scan is not clean. Tell the desk early; others may have the app.

## Step 7: Slow, so reset the phone

A wrong idea, marked wrong: “It is slow and the battery dies, so the battery is old. I will order one, and if that fails, wipe the phone.”
The right line: Slow and a dead battery fit a worn battery, one app or a full phone. A battery costs money, a wipe costs the user’s data, and the battery report takes a minute and changes nothing.

## Step 8: A worked example

A chat, with its history: "Tess, Sales", Chat with the help desk.

> (Tess, Sales, at the left) My phone is slow and the battery is dead by lunch. It is three years old, so I guess I need a new battery. I have not changed anything.

A plain table, "Settings, Battery (what the phone shows)":

> Line  |  Value  (the column heads)
> Battery health  |  Maximum capacity 91%
> Top user since 8 AM  |  Snapfilter 58%, background activity
> Storage  |  118 GB of 128 GB used

Before the working, the learner may commit to a choice (not scored, not stored):
**What does the battery health line show?**
(the options come in an order that depends on the seed of the question)
- The battery holds 91% of its charge, so it is not the cause
- The battery is worn out
- The charger is failing
- The phone needs a factory reset to stop the battery draining

The working, one step at a time:
1. Write the links, so every cause has a place.: The body (battery, port, screen), the connections, the system, the app, what was installed. “Slow, and the battery dies” could sit on the body, the system or one app.
1. Name the favorite cause and look before replacing: the phone reports its own battery health.: The favorite is an old battery. Maximum capacity is 91%, which is healthy. The battery is ruled out.
1. Read the rest of the list. It changes nothing.: Snapfilter, a photo app, used 58% of the battery in the background. Storage is nearly full, 118 of 128 GB. The apps are now the suspects, but a list is not a test.
1. Cut in half: all apps, or one? Start the phone in safe mode (Android), which runs without apps the user installed.: In safe mode the phone is quick and the battery holds. The system and the body are fine, and the fault is in an app the user installed. Ruled out: the battery, the charger, the screen.
1. Change one thing: remove Snapfilter alone, after Tess’s photos are backed up, then restart normally.: The phone is quick again and the battery lasts the day. Had it not changed, the next app would have gone, one at a time.
1. Confirm with Tess and write it down.: Tess confirms after a full day. The note says: slow and a dead battery, battery health 91%, safe mode fine, removed Snapfilter, fixed. Ordering a battery would have cost money and fixed nothing.

Then the answer: The battery holds 91% of its charge, so it is not the cause. The favorite cause was the old battery, and the phone’s own report ruled it out in a minute. Safe mode then split all apps from one app, and removing one app at a time found it. A new battery would not have helped.

## Step 9: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Finn, Front desk", Chat with the help desk.

> (Finn, Front desk, at the left) **My tablet’s screen is lifting away from the frame at one edge and the back looks puffed up. It is on the charger right now so it will be full for the morning.**

Help on screen: the words that decide it are marked.

**What do you tell Finn first?**
(the options come in an order that depends on the seed of the question)
- Unplug it and stop using it, and do not charge it until it is checked (right)
- Leave it on the charger until it is full, then bring it to the desk — if chosen: Charging a swollen battery adds heat and pressure. It is the one thing to stop at once.
- Press the screen back down gently so that it sits flat on the frame — if chosen: Pushing on a swollen battery can puncture it. The screen is lifting because of the battery under it.
- Restart the tablet to see whether the screen settles down again — if chosen: A restart cannot shrink a swollen battery, and it keeps the tablet running while it is unsafe.

After the answer: the deciding words are marked. Reason: A lifting screen or puffed back means a swollen battery, which is a safety issue, so the first move is to stop using and charging it. After that, keep it away from heat and follow the desk’s rule for battery disposal and replacement.

#### Item 2

A chat, with its history: "Astrid, Warehouse", Chat with the help desk.

> (Astrid, Warehouse, at the left) **Since I dropped the phone, the picture is perfect but the screen answers touches in the wrong place. Tapping the top of the screen opens things near the middle.**

The five links: the body, the connections, the system, the app, what was installed.

Help on screen: the words that decide it are marked.

**Which link and which cheap test?**
(the options come in an order that depends on the seed of the question)
- The body: the touch layer. Try the home screen and two other apps (right)
- The app: delete the app Astrid was using and install it again from the store — if chosen: It happens everywhere on the screen, not in one app, so one app is not the place to look.
- What was installed: run a malware scan on the phone, then check its apps — if chosen: Nothing is installed that is odd, and a drop followed by bad touches is physical.
- The system: install every waiting update, then restart the phone — if chosen: An update does not mend a damaged touch layer, and it changes the phone before the test is done.

After the answer: the deciding words are marked. Reason: Right picture, wrong touches, right after a drop: the digitizer, which senses touch and sits on the screen. Test it in the home screen and two apps to show it is not one app. If it is the digitizer, the screen is repaired or replaced.

#### Item 3

A chat, with its history: "Mo, Accounting", Chat with the help desk.

> (Mo, Accounting, at the left) My phone will not load anything at my desk. When I walk to the lobby it works. Everyone around me is fine.

A plain table, "Mo’s phone":

> Test  |  Result  (the column heads)
> On the office Wi-Fi  |  Connected, nothing loads  <- marked after the answer
> Wi-Fi turned off, on cellular  |  Everything loads  <- marked after the answer
> Other phones on the same Wi-Fi  |  Fine  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which cut does the table make?**
(the options come in an order that depends on the seed of the question)
- Cellular works, so fix the phone’s Wi-Fi link: forget the network and rejoin (right)
- The office Wi-Fi is down, so tell the network team to restart the router for everyone — if chosen: Other phones work on it. A restart would drop everyone to test a link that is fine.
- The phone’s system is broken, so back it up and reset it to factory state — if chosen: It works on cellular, so the system works. A reset is far more than the test shows.
- The cellular plan is the fault, so call the carrier — if chosen: Cellular is the link that works. The failing one is Wi-Fi.

After the answer: the deciding words are marked. Reason: Wi-Fi against cellular is the cut that tells the phone from the network. The other phones on the same Wi-Fi clear the network, and cellular working clears the phone, leaving how this phone joined. Forget the network and rejoin it is one change.

#### Item 4

A chat, with its history: "Hyun, Delivery", Chat with the help desk.

> (Hyun, Delivery, at the left) **Since I got a free game last week, ads cover my screen even outside the game, and a box says my phone has a virus and I must tap to clean it. My data runs out in ten days now.**

The game did not come from the phone’s official store. A friend sent a link.

Help on screen: the words that decide it are marked.

**Which link, and what first?**
(the options come in an order that depends on the seed of the question)
- An app from outside the store: save Hyun’s files, switch on airplane mode, then remove the game (right)
- The system: save Hyun’s files, install the waiting update and the next one, and see if the ads stop — if chosen: An update will not remove an app Hyun installed, and the phone stays online and leaking in the meantime.
- The connections: note Hyun’s Wi-Fi name, forget the network, rejoin it and test the ads — if chosen: Ads that appear on every screen and a fast data use come from something on the phone, not from the way it joined the Wi-Fi.
- The body: have Hyun’s battery checked, then charge it to full and watch the ads — if chosen: Nothing about the hardware has been shown. The signs are a malicious app’s.

After the answer: the deciding words are marked. Reason: Many ads, a fake security warning and fast data use after installing an app from outside the store are the signs of a malicious app. Cut the phone off the network first, remove the app, then scan, change passwords from another device and report it.

Then a screen: you can stop here, your place is kept.

## Step 10: Questions

16 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

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

#### Item 6

A chat, with its history: "Theo, Field team", Chat with the help desk.

> (Theo, Field team, at the left) I dropped my phone in a bucket of water for a few seconds. It is still on and looks fine. Can I put it on charge to be safe?

**What do you tell Theo?**
(the options come in an order that depends on the seed of the question)
- Switch it off now, remove the cover and cables, and do not charge it (right)
- Charge it to keep it from shutting down — if chosen: Power through wet parts can damage them. Charging is the risk, not the cure.
- Keep using it normally for the day and see whether symptoms appear — if chosen: It looks fine for now, but liquid inside corrodes parts later, and a phone left on is still powered.
- Restart it first to clear any water-related errors from the system — if chosen: A restart turns the power on again and does nothing for water. It is an extra power-up on wet parts.

After the answer: the deciding words are marked. Reason: Liquid damage is handled by cutting power: switch off, remove the cover, SIM tray and cables, and do not charge. Then the phone goes for inspection or repair, and the user’s data is backed up when it is safe to do so.

#### Item 7

A chat, with its history: "Kyle, Dispatch", Chat with the help desk.

> (Kyle, Dispatch, at the left) My phone drops from 100% to dead in about two hours and shuts off at 30%. I turned off everything I could.

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

#### Item 8

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

#### Item 9

A chat, with its history: "Kit, Design", Chat with the help desk.

> (Kit, Design, at the left) My tablet’s screen has stopped turning sideways. I turn it and the picture stays upright. It does it in every app and the home screen.

**What do you have Kit check first?**
(the options come in an order that depends on the seed of the question)
- The rotation lock in the quick controls, which keeps the screen upright (right)
- The one app Kit uses most, to see whether that app has its own fault in it — if chosen: It happens everywhere, so it is not one app. A lock on the whole screen explains it.
- The screen itself, which probably needs replacing after all this time — if chosen: The touch and the picture work. Nothing has shown the screen to be faulty.
- Whether a pending update has caused the tablet to lose its sensor — if chosen: That is a guess with nothing behind it. The lock is the cheap check, and it is the usual cause.

After the answer: the deciding words are marked. Reason: No autorotate in every app points at a setting, not an app or the screen: the rotation lock is the first thing to look at. If the lock is off and it still will not turn, then test with another app and restart before suspecting the sensor.

#### Item 10

A chat, with its history: "Craig, Service", Chat with the help desk.

> (Craig, Service, at the left) My Bluetooth headset worked fine until this morning. Now the phone says it is connected, but no sound plays through it.

A plain table, "Craig’s tests":

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

#### Item 11

A chat, with its history: "Martina, Plant", Chat with the help desk.

> (Martina, Plant, at the left) My Android phone restarts by itself three or four times a day, with no warning. It started about two weeks ago.

A plain table, "What Martina has tried":

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

#### Item 12

A chat, with its history: "Gordon, Sales", Chat with the help desk.

> (Gordon, Sales, at the left) I got a text that I have used 90% of my data for the month, and it is only the 8th. I only use email and maps.

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

#### Item 13

A chat, with its history: "Esther, IT", Chat with the help desk.

> (Esther, IT, at the left) A user in Sales wants a paid app for free. A website sells a file that the user installs by turning on “allow installs from unknown sources”. The user says it is just one app.

**What do you tell the user?**
(the options come in an order that depends on the seed of the question)
- No: the file skips the store’s checks, so use the store (right)
- It is fine, as long as the setting goes back off afterward — if chosen: The setting being off later does not undo what the one app was allowed to do while it was installed.
- Turn on developer mode first — if chosen: Developer mode is for people who build apps and lowers some protections. It makes nothing safer.
- Root the phone first so the app gets everything it needs to run — if chosen: Rooting removes the maker’s limits on the whole phone. It is the opposite of safer.

After the answer: the deciding words are marked. Reason: An unofficial app store or a file installed from an unknown source skips the checks. Developer mode and root or jailbreak lower the protections further. Malicious and spoofed apps arrive this way, so the answer is to stay with the official store.

#### Item 14

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **Removing the maker’s limits from an iPhone, so apps from anywhere can run with full control, has a name.**

**Type the word. For an Android phone, the same idea is called rooting.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - jailbreak
  - jailbreaking
  - jailbroken

After the answer: Reason: Jailbreaking an iPhone, or rooting an Android phone, removes the maker’s limits. It lets apps from anywhere run with full control, which is why malicious apps are far more dangerous on such a phone.

#### Item 15

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

#### Item 16

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

#### Item 17

A chat, with its history: "Sonia, Sales", Chat with the help desk.

> (Sonia, Sales, at the left) Pop-up ads keep appearing in my phone’s browser with a message about winning a prize. Nothing has changed with my apps, and the data use is normal. It began after I visited a coupon site and tapped “Allow notifications”.

**What is the likely cause, and the first change?**
(the options come in an order that depends on the seed of the question)
- The coupon site now sends notifications. Remove its permission (right)
- A malicious app is hiding on the phone, so wipe the phone at once — if chosen: No new app, no data spike and nothing outside the browser. A wipe is far more than the signs show.
- The phone was rooted by the site, so take the phone off the network — if chosen: Nothing shows the phone was rooted. The only sign is the browser’s ads.
- The data plan is too small, so move Sonia to a bigger plan — if chosen: Data use is normal. A bigger plan changes nothing about what the site can send.

After the answer: the deciding words are marked. Reason: Many ads can be a malicious app, but here the signs are only in the browser and a site was allowed to send notifications. Remove that permission, then clear the browser’s data as the next change, and watch; if ads appear elsewhere, think of an app.

#### Item 18

A chat, with its history: "Tabitha, Operations", Chat with the help desk.

> (Tabitha, Operations, at the left) The store will not let me install the new work app. It says “This app requires Android 14 or later”. My phone is four years old.

A plain table, "What the phone shows":

> Line  |  Value  (the column heads)
> Operating system  |  Version 13, with 14 offered as an update
> Storage  |  71 GB free
> Wi-Fi  |  Fine

**What is the next step?**
(the options come in an order that depends on the seed of the question)
- Back up the phone, install the waiting system update, try the store again (right)
- Delete photos to free space — if chosen: There is 71 GB free, so storage is not the limit. The message names the operating system.
- Reset the network settings, then try to install the app from the store — if chosen: The store reached the phone and gave a clear answer. The connection is not at fault.
- Install the app from a website file, which does not check the device — if chosen: That skips the store’s checks and may be a spoofed copy. The right change is the update.

After the answer: the deciding words are marked. Reason: An app that will not install with a compatibility message needs a newer OS than the phone has. Storage and the connection are fine, so back up and update the OS; an unofficial copy of the app is never the answer.

#### Item 19

A chat, with its history: "Jules, Marketing", Chat with the help desk.

> (Jules, Marketing, at the left) A pop-up on my phone said “Install this free cleaner to remove viruses” with a big button. I am worried my phone is slow because of one. Should I tap it?

**What do you tell Jules?**
(the options come in an order that depends on the seed of the question)
- No. Close the pop-up; if you want a scan, use the company’s approved app from the store (right)
- Yes. Tap it and let the cleaner scan the phone — if chosen: The cleaner in the pop-up may be the malicious app. Nothing in it can be trusted.
- No. Switch the phone off for a day, and the pop-up will be gone — if chosen: Switching the phone off scans nothing and removes nothing. Closing the pop-up and using an approved scan does.
- Tap it, and restart the phone if it looks bad — if chosen: A restart does not remove an app, and the app has already run once by then.

After the answer: the deciding words are marked. Reason: A pop-up that offers to remove viruses is a fake security warning in a different form. Close it, do not tap it, and run a scan with the company’s approved mobile anti-malware from the official store.

#### Item 20

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

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

3 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 21

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

#### Item 22

A chat, with its history: "Otis, Admin", Chat with the help desk.

> (Otis, Admin, at the left) I downloaded the bank’s app from a link in an email. It looks right, but it asks for my full card number and PIN on the first screen. My real bank app never asked for that.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Enter nothing, remove the app, and tell both the bank and the desk (right)
- Enter the card number to see whether the app accepts it — if chosen: If it is fake, entering the details is the theft. It is not a test.
- Restart the phone and open the app again to see whether it shows the same screen — if chosen: The app will look the same. A restart tests nothing about where it came from.
- Update the app to its newest version — if chosen: The real bank’s app never asked for that. This one came from an email link and is the problem.

After the answer: the deciding words are marked. Reason: An app spoofing a real one comes from a link rather than the store and wants what the real one does not. Nothing is entered, the app is removed, and the real bank and the desk are told, so passwords can be changed from a clean device.

#### Item 23

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

Then a screen: you can stop here, your place is kept.

## The check

6 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 5 right

#### Check question 24

A chat, with its history: "Niamh, Legal", Chat with the help desk.

> (Niamh, Legal, at the left) I dropped my phone and the glass is cracked across the middle. The picture is fine at the top, but the bottom third does not answer touches at all, and I have two weeks of site photos on it that are not saved anywhere.

**What is the order of the work?**
(the options come in an order that depends on the seed of the question)
- Save the photos with a cable to a computer first, then repair the screen (right)
- Replace the screen at once — if chosen: Repairs can go wrong, and two weeks of photos exist nowhere else. Protect the data before touching the phone.
- Restart the phone to see whether the touch in the lower third wakes up on its own — if chosen: A crack across the glass is physical. A restart cannot undo it and keeps the damaged screen in use.
- Factory reset the phone to clear the touch fault, then repair it later — if chosen: A reset erases the photos that were not saved, and cannot repair a crack.

After the answer: the deciding words are marked. Reason: A cracked screen with a dead touch strip is a damaged digitizer, a hardware fault. Because the photos exist only on the phone, the data is protected before any repair.

#### Check question 25

A chat, with its history: "Samir, Surveyor", Chat with the help desk.

> (Samir, Surveyor, at the left) My phone keeps warning “too hot, cooling down” when I use it for navigation in the truck. It sits in the cradle on the dashboard, in the sun, plugged in. It cools off when I get inside the office.

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

#### Check question 26

A chat, with its history: "Shona, Sales", Chat with the help desk.

> (Shona, Sales, at the left) I just landed. My phone shows no bars and nothing loads, not on the airport Wi-Fi either. Other people around me have signal.

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

#### Check question 27

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

#### Check question 28

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
- Run the scan, then report Yun’s phone clean if it finds nothing — if chosen: The 14 GB app is still there and root is still on. The signs are already enough.
- Remove only the app, run the scan, and leave the phone rooted for Yun’s other apps — if chosen: The app is removed, but the lowered protections stay, and the next unofficial app can do the same.
- Factory reset the phone at once, without saving Yun’s files first — if chosen: It erases Yun’s files. Back up what is needed first.

After the answer: the deciding words are marked. Reason: A rooted phone with ads, slowness and a data warning and an app from outside the store is a malicious app on a phone with the protections removed. The app goes, root goes too, Yun’s files are saved first, and passwords are changed from another device.

#### Check question 29

A chat, with its history: "Stan, Finance", Chat with the help desk.

> (Stan, Finance, at the left) Two clients texted me about odd messages I never sent, with a link. Yesterday I put a free PDF reader on from a pop-up on a website. Last night my work photos showed up in a group chat I am not in.

**Which first move fits?**
(the options come in an order that depends on the seed of the question)
- Save Stan’s files, go offline, remove the PDF reader, then change passwords from another device (right)
- Save Stan’s files, then change the passwords from the same phone and update the PDF reader — if chosen: The app may read what is typed on that phone, so the new passwords would reach it too, and an update from the same source is no fix.
- Go offline, then reply to the clients and tell them to ignore the texts Stan never sent — if chosen: Nothing has stopped them. The app is still running and can send more.
- Update the PDF reader, then restart Stan’s phone and watch whether the texts stop — if chosen: The reader came from a pop-up and is the likely source. An update from the same source is no fix.

After the answer: the deciding words are marked. Reason: Leaked personal data and messages the user did not send after an app from a pop-up are signs of a malicious app. Airplane mode and removing the app come first, then passwords change from another device, the clients are warned and the desk is told.

## The result

For example "6 of 6: passed" or "4 of 6: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
