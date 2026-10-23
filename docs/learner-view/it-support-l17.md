# IT Help Desk: Wireless and the small office network

Revision 2, live. Part: Wireless and the small office network. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Emily starts in a new office on Monday. The router login is admin and admin, there is no Wi-Fi password, and the back room drops off twice an hour.
Here you learn Wi-Fi bands, security and router setup.

## Step 1: Three radio bands

A router sends Wi-Fi on bands, ranges of radio frequency in GHz. An ordinary device uses one band at a time.

A plain table, "The three Wi-Fi bands":

> Band  |  Reach  |  Speed  |  Crowding  (the column heads)
> 2.4 GHz  |  Longest; passes walls best  |  Slowest  |  Most crowded: neighbors, Bluetooth, cordless phones, microwaves
> 5 GHz  |  Shorter; walls block more  |  Faster  |  Less crowded; more channels
> 6 GHz  |  Shortest  |  Fastest  |  Emptiest; only Wi-Fi 6E and 7 devices

## Step 2: Channels and width

Each band is cut into lanes called channels; networks on overlapping channels slow each other. Countries allow different channels (the US allows 1 to 11 on 2.4 GHz).
On 2.4 GHz the channels are 5 MHz apart but 20 MHz wide, so they overlap; only 1, 6 and 11 clear each other.
Width is 20, 40, 80 or 160 MHz. Wider is faster but leaves fewer clear lanes and picks up more noise. 2.4 GHz has room for only 20 and 40; keep it at 20. A Wi-Fi analyzer lists nearby networks and their channels.

## Step 3: Standards and their names

A plain table, "802.11 standards: bands and Wi-Fi names":

> Standard  |  Wi-Fi name  |  Band  (the column heads)
> 802.11b  |  No number name  |  2.4 GHz
> 802.11a  |  No number name  |  5 GHz
> 802.11g  |  No number name  |  2.4 GHz
> 802.11n  |  Wi-Fi 4  |  2.4 and 5 GHz
> 802.11ac  |  Wi-Fi 5  |  5 GHz only
> 802.11ax  |  Wi-Fi 6 (6E adds 6 GHz)  |  2.4 and 5 GHz
> 802.11be  |  Wi-Fi 7  |  2.4, 5 and 6 GHz

A link runs at the newest standard both ends know.

## Step 4: Bluetooth, NFC and RFID

A plain table, "Radios for short distances":

> Technology  |  Reach  |  What it does  (the column heads)
> Bluetooth  |  Several meters  |  Pairs two devices, often with a code: a headset. Uses 2.4 GHz.
> NFC (near field communication)  |  A few centimeters  |  Tap to pay. A kind of RFID with a very short reach.
> RFID (radio frequency identification)  |  Centimeters to meters  |  A reader reads a small tag, often with no battery.

## Step 5: The path, and the first check

A Wi-Fi ticket sits on one path: the laptop’s radio; the air (band, channel, distance, walls, noise); the router and its security; its link to the line; the line.
The cheapest cut is a speed test (in Mbps, megabits per second) by cable and one on Wi-Fi. Fast by cable puts the fault in the radio links; slow on both, in the last two.

A plain table, "Symptom, likely cause, first check":

> Symptom  |  Likely cause  |  First check  (the column heads)
> Slow on Wi-Fi, fast by cable  |  Crowded channel, distance, old standard  |  Wi-Fi analyzer; try 5 GHz
> Drops now and then  |  Microwave or cordless phone noise; neighbors; distance; router in a metal cabinet  |  Same time each day? Try 5 GHz; check router placement
> Weak in one corner  |  Distance and walls  |  Try 2.4 GHz; move the router; add an access point
> “Authentication failed”  |  A wrong password, or a device that cannot use the security type  |  Retype it; check the device

## Step 6: Blaming the line

A wrong idea, marked wrong: “The Wi-Fi is slow, so the internet line must be slow. Call the provider.”
The right line: Test by cable first: a fast result clears the line and the router.

## Step 7: Wi-Fi security

A plain table, "What protects the Wi-Fi traffic":

> Name  |  What it is  (the column heads)
> WPA2  |  The long-used security. AES is its strong scrambling: choose WPA2 with AES.
> TKIP  |  Older, weaker scrambling. Do not choose it.
> WPA3  |  The newest. A thief who records the sign-in cannot guess the password afterward. Use it when all devices can.

Personal security is one shared password. Enterprise gives each person an account, checked by a RADIUS server. A device that cannot use the security type fails to join even with the right password.

## Step 8: Who is signing in

RADIUS and TACACS+ are AAA servers: authentication (who you are), authorization (what you may do), accounting (what you did).

A plain table, "Sign-in methods":

> Method  |  What it does  (the column heads)
> RADIUS  |  Checks people joining the network: Enterprise Wi-Fi, a VPN. Uses UDP, combines authentication and authorization, scrambles only the password.
> TACACS+  |  Checks administrators on routers and switches, and which commands each may run. Uses TCP, keeps the three AAA jobs separate, scrambles the whole message.
> Kerberos  |  A Windows domain: sign in once, then get tickets for each service.
> Multifactor  |  Two or more of: something you know, have or are. A password plus a PIN is one kind twice.

## Step 9: Securing the router

A plain table, "The router itself":

> Setting  |  What to do  (the column heads)
> Default login  |  Change the name and password; defaults are published
> Firmware  |  The router’s own software. Save the settings first, then update (an update can reset them); updates close known flaws. On a shared router, follow the desk’s change rules.
> Secure management access  |  Keep the admin page off the internet, or reachable only by a secure connection
> UPnP (Universal Plug and Play)  |  Turn it off; it lets a program or malware (harmful software) open router ports by itself
> IP filtering  |  Allow or block by device address
> Content filtering  |  Block sites by category or words, not address
> Physical placement  |  High and central, away from metal and microwaves, out of reach of reset
> Screened subnet  |  A separate small network between the internet and the office, for servers the internet must reach. A router’s “DMZ host” setting is different: it exposes one device fully.

## Step 10: Securing the Wi-Fi and the firewall

A plain table, "The Wi-Fi and the firewall":

> Setting  |  What to do  (the column heads)
> SSID (the Wi-Fi’s name)  |  Change the default; it names the make and model
> SSID broadcast  |  Turning it off only hides the name. It is not a lock, though the A+ exam lists it as a security setting.
> Encryption  |  WPA3, or WPA2 with AES. Never None, never TKIP
> Guest access  |  A second Wi-Fi with its own password, internet only
> Unused ports  |  Close ports nothing uses. Ports 21 (FTP) and 23 (Telnet) send passwords as readable text.
> Port forwarding (also called port mapping)  |  Send one port to one device at a reserved, fixed address. It is now reachable from the internet: give it a strong password first, and use a VPN where there is one.

## Step 11: A worked example

A chat, with its history: "Rosa, Sales", Chat with the help desk.

> (Rosa, Sales, at the left) The Wi-Fi in the conference room crawls every afternoon and video calls freeze. Other rooms are fine. I think our internet line is bad.

A plain table, "Wi-Fi analyzer, conference room, 2.4 GHz band":

> Network  |  Channel  |  Signal  (the column heads)
> Our office network  |  6  |  Strong
> CafeGuest  |  6  |  Strong
> Studio5  |  6  |  Medium
> NetHome-77  |  7  |  Medium

Your own note, written after an argument: "Your notes", On the desk.

> The router offers a 2.4 GHz name and a 5 GHz name, and Rosa’s laptop can use both. A wall jack in the room goes to the same switch as the office.

Before the working, the learner may commit to a choice (not scored, not stored):
**You plug their laptop into the wall jack: a speed test gives 280 Mbps. On Wi-Fi in the same spot it gives 12 Mbps. What does that show?**
(the options come in an order that depends on the seed of the question)
- The internet line is fine; the slow part is the Wi-Fi in this room.
- The internet line is slow in the afternoons, and the Wi-Fi shows it first.
- The laptop’s network card is failing, so every connection it makes is slow.

The working, one step at a time:
1. Write down every cause that fits “slow in one room”.: The internet line; the router; a crowded Wi-Fi channel or noise from something else; distance and walls; the laptop.
1. Name the favorite cause and test it cheaply.: Rosa says the line. The cheapest cut is one cable: plug the laptop into the wall and run the same speed test.
1. Drop the cause the test rules out.: The line and the router are fine at 280 Mbps. Everything before the radio link works, so look at the radio link.
1. Test the next cause with a Wi-Fi analyzer.: The analyzer lists four networks on 2.4 GHz, ours included: three on channel 6 and one on channel 7. Our own is one of the three on channel 6, so those three share the same lane and take turns.
1. Change one thing: leave the crowded band.: The router offers a 5 GHz name and their laptop can use it; 5 GHz has far more channels and fewer neighbors. They join the 5 GHz name and the speed test gives 180 Mbps.
1. Check with Rosa and write it up.: The call stays smooth. The note says: slow in conference room, line fine by cable, 2.4 GHz channel 6 crowded, moved to 5 GHz.

Then the answer: The internet line is fine; the slow part is the Wi-Fi in this room. Rosa blamed the line. One cable test split the path: fast by cable, slow on Wi-Fi, so the line was ruled out. The analyzer then showed four networks on channels 6 and 7, three of them on channel 6, so the cause was a crowded channel, fixed by one change of band.

## Step 12: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Layla, Facilities", Chat with the help desk.

> (Layla, Facilities, at the left) **The tax team sits at the far end of the floor behind two brick walls. The office router gives two Wi-Fi names, one on 2.4 GHz and one on 5 GHz. Their laptops show one bar on the 5 GHz name and three bars on the 2.4 GHz name.**

Help on screen: the words that decide it are marked.

**Which name do you tell them to use, and why?**
(the options come in an order that depends on the seed of the question)
- The 2.4 GHz name, because that band reaches farther and passes walls better (right)
- The 5 GHz name, because it is faster and the signal only needs to be good enough — if chosen: A higher frequency carries more data over a shorter distance, and walls absorb it more. One bar is not good enough.
- Either name, since bars are only a rough guide and the faster standard wins — if chosen: Bars show how well the laptop hears the router. Here the 5 GHz name is heard least, because walls absorb it more.
- Neither: move the laptops closer to the router and test both names there — if chosen: The tax team cannot move. The bars already show which band the walls leave strongest.

After the answer: the deciding words are marked. Reason: The deciding words are two brick walls and more bars on 2.4 GHz. The 2.4 GHz band has the longest reach and goes through walls best; 5 GHz is faster, but its reach is shorter.

#### Item 2

A chat, with its history: "Seth, Front desk", Chat with the help desk.

> (Seth, Front desk, at the left) **The Wi-Fi at the reception desk cuts out for a minute or two around noon and then comes back. The break room is on the other side of the wall, and people heat their lunch there. The laptop uses the router’s 2.4 GHz name. The router also has a 5 GHz name, and the laptop can use it.**

Help on screen: the words that decide it are marked.

**What is the cheapest thing to try first?**
(the options come in an order that depends on the seed of the question)
- Join the 5 GHz name, which a microwave oven does not disturb (right)
- Raise the channel width to 40 MHz so the signal is stronger and the dropouts stop — if chosen: Width is not strength. A wider channel takes in more of the band, and on 2.4 GHz that means more noise, not less.
- Restart the laptop and see whether the dropout still happens at noon — if chosen: A restart is cheap but cannot tell noise from any other cause, and the drop matches lunchtime in the next room.
- Call the internet provider about the noon outage — if chosen: The line is not shown to fail. A drop at noon that clears alone points to the radio side.

After the answer: the deciding words are marked. Reason: The deciding words are around noon, the break room beyond the wall and the 2.4 GHz name. A microwave oven shares that band, so moving to 5 GHz is the cheap test that splits noise from every other cause.

#### Item 3

A chat, with its history: "Mitchell, Office manager", Chat with the help desk.

> (Mitchell, Office manager, at the left) **We are setting up the Wi-Fi for a new office. Every laptop and phone we own is under two years old, and the maker’s list says each works with WPA3. The router’s menu offers WPA3, WPA2 with AES, WPA2 with TKIP and None.**

Help on screen: the words that decide it are marked.

**Which security setting do you pick?**
(the options come in an order that depends on the seed of the question)
- WPA3, since every device in the office can use it (right)
- WPA2 with AES, since it is strong and works on every device made — if chosen: WPA2 with AES is strong, but WPA3 is stronger and every device here works with it.
- WPA2 with TKIP, since it is the most widely supported — if chosen: TKIP is the older, weaker way of scrambling the traffic. Nothing here needs it.
- None, with the Wi-Fi name hidden — if chosen: With no encryption anyone in range can read what is sent. Hiding the name does not change that.
- None, since the building door is locked — if chosen: Radio goes through walls and out to the street. A locked door does not keep the signal in.

After the answer: the deciding words are marked. Reason: The rule is the strongest security every device can use. Here every device works with WPA3, so WPA2 would leave strength unused. TKIP is old and weak, and None leaves the traffic open.

#### Item 4

A chat, with its history: "Emily, Accounting", Chat with the help desk.

> (Emily, Accounting, at the left) We start in the new office on Monday. The router is plugged in and everything works. Can you check it is safe to use?

Your own note, written after an argument: "The new router", Its settings as it came out of the box.

> **Router login: name admin, password admin (the maker’s default for this model)**
> **Wi-Fi encryption: None, anyone can join**
> **Firmware (the router’s own software): two years old; the maker’s site lists a newer one that fixes security flaws**
> **Ports open to the internet: 21 and 23; nothing in the office uses them**
> Firewall: On
> Addresses for the office computers (DHCP): On
> Wi-Fi name broadcast: Off, so the name is not in the list

Help on screen: the words that decide it are marked.

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

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Karen, Training", Chat with the help desk.

> (Karen, Training, at the left) The Wi-Fi in our building is slow. The analyzer shows neighbors on 2.4 GHz channels 1 and 6, and our router is on channel 3, which overlaps both.

**Which channel do you move the router to?**
(the options come in an order that depends on the seed of the question)
- Channel 11 (right)
- Channel 4, which sits between the neighbors on 1 and 6 — if chosen: Each channel is 20 MHz wide and they are 5 MHz apart, so channel 4 still overlaps both 1 and 6.
- Channel 8, a few steps away from the neighbor on 6 — if chosen: Channel 8 sits two steps from 6, so it overlaps 6.
- Channel 2, the one right next to the neighbor on 1 — if chosen: Channel 2 sits one step from 1, so it overlaps 1.

After the answer: the deciding words are marked. Reason: Two networks that overlap share the air and slow each other. On 2.4 GHz only channels 1, 6 and 11 are clear of each other, so with 1 and 6 taken the free lane is 11.

#### Item 6

A chat, with its history: "Esperanza, Retail", Chat with the help desk.

> (Esperanza, Retail, at the left) The new card reader takes payment when a customer holds a phone against it, almost touching, with nothing to pair first. What kind of radio is that?

**Which technology is it?**
(the options come in an order that depends on the seed of the question)
- NFC (right)
- Bluetooth — if chosen: Bluetooth reaches several meters and has to be paired first. Payment by a tap does not pair.
- 5 GHz Wi-Fi — if chosen: Wi-Fi joins a device to a network over many meters. A payment tap needs no network name or password.
- Cellular data — if chosen: Cellular links a phone to a tower far away, not to a reader a few centimeters off.

After the answer: the deciding words are marked. Reason: A phone held almost touching means a range of a few centimeters. That is NFC, near field communication.

#### Item 7

A chat, with its history: "Itzel, Warehouse", Chat with the help desk.

> (Itzel, Warehouse, at the left) Everything online is slow at my desk, Wi-Fi and all. We pay for 300 Mbps. Is it the Wi-Fi?

A plain table, "Speed tests from Itzel’s laptop, same time":

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

#### Item 8

A chat, with its history: "Isadora, Warehouse", Chat with the help desk.

> (Isadora, Warehouse, at the left) The router’s security menu lists WPA2 with AES, WPA2 with TKIP and WPA3 only. Most of our laptops are new, but the scanner guns and two old laptops can do WPA2 with AES and nothing newer.

**Which setting do you pick?**
(the options come in an order that depends on the seed of the question)
- WPA2 with AES (right)
- WPA2 with TKIP — if chosen: TKIP is the weaker, older scrambling. AES works on the same WPA2 devices.
- WPA3 only — if chosen: The scanners and old laptops cannot use WPA3, so they could not join.
- None, so the old devices can join — if chosen: No encryption lets anyone in range read the traffic, and WPA2 with AES already includes the old devices.

After the answer: the deciding words are marked. Reason: The oldest devices only know WPA2, so WPA3 only locks them out. Within WPA2, AES is the strong scrambling and TKIP the old weak one.

#### Item 9

A chat, with its history: "Troy, Front office", Chat with the help desk.

> (Troy, Front office, at the left) Visitors in the waiting room asked for Wi-Fi, so I gave them the office password. One of them could see our shared printer in their list.

**What do you do instead?**
(the options come in an order that depends on the seed of the question)
- Guest access: a second Wi-Fi name with its own password, internet only (right)
- Hide the office Wi-Fi name so visitors cannot find it, and give out the password — if chosen: Hiding the name does not stop anyone who already has the password, and the printer is still on the same network.
- Change the office Wi-Fi password every week and tell the visitors the new one — if chosen: Visitors would still join the office network each time.
- Tell visitors politely not to open the printer or any shared folders — if chosen: A request is not a control. The visitors are still on the office network.

After the answer: the deciding words are marked. Reason: The visitors reached the printer because they were on the office network. Guest access puts them on a separate network with its own password.

#### Item 10

A chat, with its history: "Arthur, Facilities", Chat with the help desk.

> (Arthur, Facilities, at the left) I put a camera in the shop and I want to watch it from home. The camera is at 192.168.1.60 and sends its video on port 8080. Its password is already changed from the maker’s default, and we have no VPN.

**What do you change on the router?**
(the options come in an order that depends on the seed of the question)
- Forward port 8080 to the camera (right)
- Forward every port to the camera, so that it works whatever it needs — if chosen: Only port 8080 is needed. Every port open makes the camera reachable on all of them from the internet.
- Turn UPnP on so the camera opens whichever ports it needs by itself — if chosen: UPnP lets any program on the network open ports without asking, and malware does the same.
- Turn the firewall off while they are watching the camera from home — if chosen: The firewall protects all the other computers. Only the one port needs a way through.

After the answer: the deciding words are marked. Reason: The camera needs one door from the internet, port 8080, to one device. Port forwarding makes exactly that door. Its password is already changed, which matters because the door faces the internet; a VPN is safer where one exists. The camera’s address is then kept fixed so the door keeps pointing at it.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

5 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 11

A chat, with its history: "Hannah, Warehouse", Chat with the help desk.

> (Hannah, Warehouse, at the left) Our scanner guns can only use 802.11g. The new router gives a 2.4 GHz name and a 5 GHz name.

**Which name can the scanners join?**
(the options come in an order that depends on the seed of the question)
- The 2.4 GHz name (right)
- The 5 GHz name — if chosen: 802.11a is the old 5 GHz one. 802.11g is on 2.4 GHz.
- Either: they pick the faster one — if chosen: A device can use only a band its radio has, and 802.11g has only 2.4 GHz.
- The 6 GHz name — if chosen: 6 GHz needs a Wi-Fi 6E or 7 device.

After the answer: the deciding words are marked. Reason: The standard decides the band. 802.11b and 802.11g are 2.4 GHz only, 802.11a is 5 GHz only.

#### Item 12

A chat, with its history: "Shana, Sales", Chat with the help desk.

> (Shana, Sales, at the left) Since the router was replaced last night I cannot join the Wi-Fi from my old tablet. It says authentication failed. I typed the password slowly, twice. My new phone joined fine. The router’s security page now shows only its newest type.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The tablet is too old to use the router’s security type, so the sign-in is refused (right)
- The 2.4 GHz channel is crowded, so the tablet times out when it signs in — if chosen: Crowding makes Wi-Fi slow or patchy. It does not turn the sign-in away.
- The tablet is too far from the router, and the weak signal makes it fail — if chosen: Distance gives a weak or dropping signal, not a refused sign-in. The message here is about authentication.
- The password is wrong, so they should try typing it a third time more slowly — if chosen: They typed it twice and the phone joined with the same one. Typing it again changes nothing.

After the answer: the deciding words are marked. Reason: The deciding words are authentication failed, an old tablet, a new phone that joins and a router with only its newest type. The one thing that differs is the security type the device can speak.

#### Item 13

A chat, with its history: "Abigail, HR", Chat with the help desk.

> (Abigail, HR, at the left) We have 60 staff. Whenever someone leaves we change the Wi-Fi password and retype it on 59 devices. We want each person to sign in with their own account, so turning off an account turns off their Wi-Fi.

**What do you put in?**
(the options come in an order that depends on the seed of the question)
- Enterprise Wi-Fi security, with a RADIUS server checking each account (right)
- A TACACS+ server that the router queries about each of the staff — if chosen: TACACS+ checks administrators logging in to network devices, not staff joining the Wi-Fi.
- A longer shared Wi-Fi password that is changed each time someone leaves — if chosen: It is still one password for everyone, so the same retyping happens when anyone leaves.
- Kerberos tickets given out by the router to every person — if chosen: Kerberos proves identity for services in a Windows domain. The router queries a RADIUS server.

After the answer: the deciding words are marked. Reason: The wish is one account each, ended by turning the account off. That is Enterprise security with RADIUS. The shared password of Personal security cannot do it, and TACACS+ and Kerberos do different jobs.

#### Item 14

A chat, with its history: "Henrietta, Accounting", Chat with the help desk.

> (Henrietta, Accounting, at the left) My manager wants to turn off SSID broadcast, the setting that stops the router sending out the Wi-Fi’s name. They say nobody can see the network then, so we can skip the Wi-Fi password.

**What does turning off SSID broadcast do?**
(the options come in an order that depends on the seed of the question)
- It leaves the name out of the list; the network can still be found, so encryption is still needed (right)
- It makes the network invisible outside the building, so a short password is enough — if chosen: It hides the name from the list only. Anyone who finds the name can try to join, so the password still has to be strong.
- It turns on encryption for the network, so the traffic is scrambled too — if chosen: Encryption is a separate setting. Hiding the name does not scramble anything.
- It stops devices from joining the network unless they were joined before — if chosen: Devices can still join; they have to type the name by hand.

After the answer: the deciding words are marked. Reason: SSID broadcast only announces the name. Turning it off removes the name from the list but not from the air, so it is no replacement for encryption.

#### Item 15

A chat, with its history: "Preston, Web team", Chat with the help desk.

> (Preston, Web team, at the left) We run a small web server that customers must reach from the internet. If it is ever hacked, I want the office computers to stay out of reach.

**Where does the server go?**
(the options come in an order that depends on the seed of the question)
- In a screened subnet: a separate network between the internet and the office, with firewall rules each way (right)
- On the office network, with only the server’s web port forwarded to it — if chosen: A hacked server would sit next to every office computer.
- On the guest Wi-Fi network, away from the staff computers — if chosen: The guest network is for visitors’ devices. It is not made to host a server.
- On the office network, with UPnP turned on so the server opens its own ports — if chosen: UPnP lets programs open ports on their own, and the server would still share the office network.

After the answer: the deciding words are marked. Reason: A server the internet must reach is the likeliest to be attacked. A screened subnet keeps it apart from the office network, so a break-in there does not reach the office computers.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 16

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **The box of a new router says 802.11ax. What Wi-Fi name does that standard go by on the box?**

**Type your answer.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - Wi-Fi 6
  - WiFi 6

After the answer: Reason: 802.11ax is Wi-Fi 6. The numbered names run: 802.11n is Wi-Fi 4, 802.11ac is Wi-Fi 5, 802.11ax is Wi-Fi 6 and 802.11be is Wi-Fi 7.

#### Check question 17

A chat, with its history: "Nadir, Warehouse", Chat with the help desk.

> (Nadir, Warehouse, at the left) We put a cheap tag with no battery on every pallet. A reader at the dock door picks up all the tags on a pallet as the forklift drives through.

**Which technology is that?**
(the options come in an order that depends on the seed of the question)
- RFID (right)
- NFC — if chosen: NFC is a kind of RFID with a very short reach that works from only a few centimeters, too short for a forklift driving past a door.
- Bluetooth — if chosen: Bluetooth devices pair one to one and need their own power. A cheap tag with no battery cannot do that.
- Wi-Fi — if chosen: Wi-Fi joins devices to a network and needs a powered radio, which a tag with no battery does not have.

After the answer: the deciding words are marked. Reason: Tags without a battery, read from a distance by a reader, are RFID. The reader’s signal powers each tag. NFC reaches only a few centimeters, and Bluetooth and Wi-Fi need powered, paired devices.

#### Check question 18

A chat, with its history: "Mika, Design", Chat with the help desk.

> (Mika, Design, at the left) My new laptop has Wi-Fi 6E. On the router’s 6 GHz name it is very fast beside the router, but it drops in the meeting room two walls away. The router also has a 5 GHz and a 2.4 GHz name, and the laptop can use all three.

**What is the cheapest thing to try first?**
(the options come in an order that depends on the seed of the question)
- Join the 5 GHz name, which reaches farther through walls than 6 GHz (right)
- Raise the channel width to 160 MHz to get more signal into the meeting room — if chosen: A wider channel carries more data over a short distance. It does not extend the reach.
- Replace the laptop’s wireless card — if chosen: Nothing points at the card. The problem follows the walls and the distance.
- Run a speed test beside the router — if chosen: Beside the router it already works, so that test cannot say why the meeting room drops.

After the answer: the deciding words are marked. Reason: It is fast close by and drops two walls away, so reach is the cause. 6 GHz reaches the least of the three bands, so a step down to 5 GHz is the cheap test.

#### Check question 19

A chat, with its history: "Kieran, Network team", Chat with the help desk.

> (Kieran, Network team, at the left) Our network admins sign in to the routers and switches. We want one central server that keeps who they are, what each may do and what each did as three separate jobs, and that decides which commands each admin may run.

**Which does that?**
(the options come in an order that depends on the seed of the question)
- TACACS+ (right)
- RADIUS, which checks every user who joins the network — if chosen: RADIUS combines authentication and authorization, and is used mostly for people joining the network, such as Wi-Fi or a VPN.
- Kerberos — if chosen: Kerberos gives sign-in tickets in a Windows domain. It is not made to control the commands on network devices.
- WPA3 — if chosen: WPA3 secures the Wi-Fi link between devices and the router. It does not check admin logins.

After the answer: the deciding words are marked. Reason: The job is admins on network devices, with the three jobs kept apart and each limited to certain commands. That is TACACS+. RADIUS combines authentication and authorization and checks users joining the network.

#### Check question 20

A chat, with its history: "Lorena, Accounts", Chat with the help desk.

> (Lorena, Accounts, at the left) A user gave away their password in a phishing email (a fake message that tricks people). I want a change so that the password alone can no longer sign anyone in to their account.

**Which change does that?**
(the options come in an order that depends on the seed of the question)
- Require a code from an app on their phone as well (right)
- Make their password longer and have them change it every month — if chosen: It is still one factor, and the thief now knows the new one.
- Switch the office Wi-Fi from TKIP to AES, so the traffic is scrambled better — if chosen: That changes how the Wi-Fi is scrambled, not how their account signs in.
- Turn off SSID broadcast so the Wi-Fi name is not shown in the list — if chosen: That hides the Wi-Fi name. It has no effect on their account.

After the answer: the deciding words are marked. Reason: Multifactor means two or more of something you know, something you have and something you are. The stolen password is one; the phone code is a second that the thief lacks.

#### Check question 21

A chat, with its history: "Karina, IT", Chat with the help desk.

> (Karina, IT, at the left) A worm (self-spreading harmful software) on one laptop opened a port on the office router by itself, with no one asking. The router has a setting that lets programs and devices do that.

**What is the setting, and what do you do with it?**
(the options come in an order that depends on the seed of the question)
- UPnP (Universal Plug and Play): turn it off (right)
- UPnP: leave it on, since it helps the router control which ports are used — if chosen: UPnP is a convenience for programs. It gives malware the same power.
- IP filtering: turn it off, since it opens ports for programs — if chosen: IP filtering allows or blocks by address. It does not open ports for programs.
- Port forwarding: turn it off, since it lets programs open ports — if chosen: Port forwarding is a rule you add by hand. The setting that lets programs open ports themselves is UPnP.

After the answer: the deciding words are marked. Reason: The deciding words are a port opened by itself. That is UPnP, Universal Plug and Play. With it off, only ports you open by hand are reachable; which ports to open is a separate decision.

#### Check question 22

A chat, with its history: "Hazel, Operations", Chat with the help desk.

> (Hazel, Operations, at the left) The maker’s site has an update for our router that fixes a flaw letting anyone on the internet take control of it. Ours is two updates behind. The office manager has approved the change for tonight.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Install the new firmware tonight (right)
- Change the Wi-Fi password and the router’s login to be safe — if chosen: The flaw is in the router’s software, not in the Wi-Fi password.
- Turn off SSID broadcast so the Wi-Fi name is not shown in the list — if chosen: Hiding the Wi-Fi name does nothing about a flaw in the router’s software.
- Block the maker’s site with content filtering so staff cannot download it — if chosen: That would cut the office off from the update and the flaw would stay.

After the answer: the deciding words are marked. Reason: A known flaw in the router’s software is closed by a firmware update. Save the settings first, because an update can reset them.

#### Check question 23

A chat, with its history: "Trudy, Owner", Chat with the help desk.

> (Trudy, Owner, at the left) I want staff blocked from gambling and adult sites, whatever the address of the site is.

**Which router setting does that?**
(the options come in an order that depends on the seed of the question)
- Content filtering (right)
- IP filtering, which blocks by the address of each website — if chosen: IP filtering allows or blocks by the address of a device. It would take a list of every site’s address.
- Port forwarding, which sends the site traffic where it is wanted — if chosen: Port forwarding sends outside traffic in to one device. It blocks nothing.
- Guest access, which gives staff a separate Wi-Fi for browsing — if chosen: Guest access is a separate Wi-Fi for visitors. It does not filter sites.

After the answer: the deciding words are marked. Reason: Blocking by kind of site is content filtering. IP filtering works from addresses, and port forwarding and guest access do other jobs.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
