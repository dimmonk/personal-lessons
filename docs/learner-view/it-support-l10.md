# IT Help Desk: The parts inside

Revision 2, live. Part: The parts inside. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Odile’s desktop switches itself off seconds after they start a game, a week after they put in a new graphics card. Is it the card, the heat, the memory, a setting? Each part has a job in the whole computer, and the job tells you where to look.
Here you learn each part by what it does, plus the facts you will be asked for: power numbers, board sizes, sockets, firmware settings, memory and cooling.

## Step 1: A computer is a chain of jobs

Follow the power in. The power supply turns the outlet’s power into the low-voltage power the parts use. The motherboard is the large board every part plugs into. The processor (CPU) calculates, memory (RAM) holds what is open now, storage keeps files for good, cards add abilities, firmware is the small program that starts the computer, and cooling carries away heat.
The symptom shows which job failed.

A plain table, "What you see when each part fails":

> Part  |  What you see when it fails  (the column heads)
> Power supply  |  No lights or fans; or it switches off when the biggest parts work hard
> Motherboard  |  Nothing starts, or ports and slots stop working
> Processor  |  Fans spin but nothing appears on the screen
> Memory  |  Beeps at start-up, crashes, blue screens
> Storage  |  “No bootable device”, or missing files
> Cards  |  No picture from the card, or no network
> Firmware  |  Wrong date and time, or it starts from the wrong device
> Cooling  |  Loud fans, slowing down, then switching off

## Step 2: The power supply: what goes in, what comes out

The input is wall power: in North America 110 to 120 volts of alternating current (written VAC), in much of Europe and Asia 220 to 240 volts. Many supplies have a back switch to match the outlet; a wrong setting can ruin the supply, so check it first. Newer supplies adjust themselves (label “100-240 V”).
The output is direct current at three voltages. 12 volts does the heavy work: the processor, graphics card, fans and hard drive motors. 5 volts and 3.3 volts run the small circuits: chips, USB ports and drive electronics.
The main connector to the board has 24 pins. Older boards had 20, so a “20+4” connector has four pins that unclip.

## Step 3: The power supply: wattage, cables and spares

Add up what the parts draw at full work, then choose a supply labeled well above the total, so the parts never run it flat out; the maker’s or the desk’s rule says how much room. Too small and the computer switches off under hard work, as Odile’s did.
Efficiency is how little wall power turns into heat. The 80 Plus program rates it: Bronze, Silver, Gold, Platinum, Titanium. Bronze wastes the most, Titanium the least.
The supply’s cables end in different plugs. The 24-pin plug feeds the board. A 4-pin or 8-pin plug (sometimes 4+4) feeds the processor. A graphics card with its own power socket takes a PCIe plug of 6 or 8 pins (often 6+2, with two pins that clip on). SATA power plugs feed drives; older four-pin Molex plugs feed old drives and some fans. The CPU and PCIe plugs look alike but are wired differently.
A modular supply has cables you plug in only as needed, leaving fewer loose wires. A redundant setup has two supplies in one server; if one fails, the other keeps it running.

A wrong idea, marked wrong: “A 1000 watt supply pushes 1000 watts into the computer, so it gives more to the card.”
The right line: The wattage label is only the most the supply can give. The parts take what they need; a bigger supply just has more in reserve.

## Step 4: The motherboard: sizes and connectors

Boards come in sizes, called form factors: ATX is full-size, microATX is smaller with fewer slots, and Mini-ITX is the smallest. A smaller board fits a larger tower, never the reverse.
Connectors are how parts reach the board. PCIe slots take cards: the longest takes a graphics card, the short ones small cards. PCI is the older slot. M.2 is a slot shape: a small stick, such as a solid-state drive (a drive with no moving parts) or a wireless card, plugs in with no cable (what the drive carries is covered with storage). SATA ports take a cable to a drive; eSATA is the same connection outside the tower. Headers are rows of pins for the tower’s own wires: power button, lights, front USB ports, audio and fans.

## Step 5: The processor: sockets and kinds

A processor fits only the socket it was made for. AMD’s sockets have names like AM4 and AM5; Intel’s are named LGA and a number. One maker’s processor never fits the other’s socket, so match it to the board. A server board with two or more sockets is multisocket.
The design inside matters too. The exam calls the 32-bit PC design x86 and its 64-bit form x64. A 64-bit system runs 32-bit and 64-bit programs and uses far more memory; a 32-bit system uses only about 4 GB and runs only 32-bit programs. ARM is a low-power design found in phones, tablets and some laptops.
Most processors are multicore: several processing units (cores) in one chip, working on separate jobs at once, such as dual-core (two) or quad-core (four). Some carry integrated graphics, a built-in graphics part that shows a picture with no graphics card. Some features need turning on in the firmware, such as virtualization (VT-x on Intel, AMD-V on AMD), which lets the computer run virtual machines.

## Step 6: Firmware settings

The firmware (BIOS or UEFI) starts the computer and holds settings that configure the hardware. The table lists the ones the exam names.

A plain table, "Firmware settings and what each one does":

> Setting  |  What it does  (the column heads)
> Boot options  |  The boot order: the devices the firmware tries, in turn, for something to start from. Move a USB stick to the top to install from it. A stick with nothing to start is skipped, so it does not by itself cause “no bootable device”
> USB permissions  |  Turn USB ports on or off
> TPM  |  A chip on the board (some processors do it in firmware) that stores this computer’s encryption codes; Windows 11 needs it
> HSM  |  A separate module that holds encryption codes for many systems, used with servers
> Secure Boot  |  Lets only trusted, signed software start, keeping malware out of start-up
> Boot password  |  Asked for before the system starts, so a stolen laptop cannot start
> BIOS or UEFI password  |  Asked for only when someone opens the settings; the computer still starts for anyone
> Virtualization  |  Lets the processor run virtual machines
> Fan and temperature  |  Shows temperatures and fan speeds, and lets you change fan speed

## Step 7: Memory

Memory (RAM) holds what is open right now and loses it when the power goes off. A DIMM is the full-length stick for desktops and servers; a SODIMM is the short stick, about half the length, for laptops and small computers.
DDR is the generation: DDR4 and DDR5 are in new computers, each faster than the one before (DDR3 is older). The notch sits in a different place in each, so the wrong generation does not fit the slot. ECC memory carries extra bits that find and fix small errors, so servers use it; it costs more and needs a board made for it. Ordinary non-ECC memory costs less and is what most home computers use.
Channels are the paths from memory to processor. One stick, or sticks that do not pair, give single channel. Two matching sticks in the slots the board pairs (usually the same color) give dual channel, which moves data faster. Some boards take three (triple) or four (quad) matching sticks.

## Step 8: Cards and cooling

Add-on cards go in PCIe slots: a sound card handles audio, a video (graphics) card draws the picture, a capture card records video from a camera or console, and a network card (NIC) connects to a network.
Cooling keeps heat away from the chips. A fan moves air. Each processor has a top safe temperature its maker publishes, and the firmware’s temperature screen shows the reading: near the top is too hot, far below is fine. A heat sink is a finned metal block on a chip that draws heat out. Thermal paste is a thin layer between chip and heat sink that fills tiny gaps so heat passes; thermal pads do the same for wider gaps. Liquid cooling pumps liquid from a block on the chip to a fan-cooled radiator.

## Step 9: A worked example

A chat, with its history: "Odile, Design", Chat with the help desk.

> (Odile, Design, at the left) My desktop switches itself off a few seconds after I start a game. I put in a new graphics card last week.

A plain table, "What the parts need, and what the power supply can give":

> Part  |  Watts  (the column heads)
> Processor, at full work  |  95
> New graphics card, at full work  |  250
> Drives, fans and the rest  |  60
> Label on the power supply: “300 W”  |  300

Before the working, the learner may commit to a choice (not scored, not stored):
**The processor read 48 degrees C when the computer switched off; its maker lists 100 degrees C as the top. What do you do next?**
(the options come in an order that depends on the seed of the question)
- Cross off heat, then compare the parts’ total with the supply label.
- Take the heat sink off and put on new thermal paste, then test the game again.
- Reset the firmware settings to their defaults, then start the game again.

The working, one step at a time:
1. Start from what the computer does: power in, parts that draw it, heat out.: It dies when the game starts, which is when the graphics card works hardest. So the parts that need the most power or make the most heat are the first causes.
1. Name the first guess and test it with one reading.: Guess: it overheats, because a new card makes more heat. Reading the temperature as it switches off: 48 degrees C, with the fans running. That is cool, so heat is ruled out.
1. Add up what the parts can draw at once.: 95 + 250 + 60 = 405 watts at full work. The label on the supply says 300 W, which is all it can give.
1. Change one thing: a bigger supply.: A supply labeled 550 W gives well over the 405 watts, which leaves room to spare. The computer now runs the game. The old supply was too small for the new card.

Then the answer: Cross off heat, then compare the parts’ total with the supply label. A cool processor ruled out heat. The parts add up to 405 watts at full work and the supply gives 300, so the supply shuts down when the new card works hard. One change, a bigger supply, fixed it.

## Step 10: Questions

6 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Birgit, Marketing", Chat with the help desk.

> (Birgit, Marketing, at the left) **I moved to Germany and brought my desktop. The outlet here gives 230 volts. The power supply has a red switch on the back that says 115 or 230.**

Help on screen: the words that decide it are marked.

**Where should the red switch be before you plug it in?**
(the options come in an order that depends on the seed of the question)
- At 230 (right)
- At 115 — if chosen: 115 is the 110 to 120 volt range of North American outlets. Switched that low on a 230 volt outlet, the supply can be ruined.
- Wherever it is; plug in and see whether it starts — if chosen: A supply with a switch has to be told which outlet it is on. Plugging in on the wrong position can break it, so the starting test comes after the switch is right.

After the answer: the deciding words are marked. Reason: The input voltage of the supply has to match the outlet: 110 to 120 volts in North America, 220 to 240 volts in much of the rest of the world. A switch in the wrong position can destroy the supply.

#### Item 2

A chat, with its history: "Piers, Facilities", Chat with the help desk.

> (Piers, Facilities, at the left) **I am building a small desktop for the lobby. The tower is a tiny one that only takes the smallest of the three common board sizes.**

Help on screen: the words that decide it are marked.

**Which board do you buy?**
(the options come in an order that depends on the seed of the question)
- A Mini-ITX board (right)
- A microATX board — if chosen: It is larger than Mini-ITX and will not fit a tower made only for the smallest size.
- An ATX board — if chosen: ATX is the largest of the three. It will not fit a tower made only for the smallest size.

After the answer: the deciding words are marked. Reason: The motherboard sizes in order, largest first: ATX, then microATX, then Mini-ITX. A smaller board fits a larger tower, but a larger board never fits a smaller one.

#### Item 3

A chat, with its history: "Rhoda, Support", Chat with the help desk.

> (Rhoda, Support, at the left) I am replacing the processor in a desktop. The board’s label is below. Which of the shop’s three processors will fit?

A plain table, "The board’s label":

> Detail  |  Value  (the column heads)
> Processor socket  |  AM5  <- marked after the answer

Help on screen: the words that decide it are marked.

**Which processor fits?**
(the options come in an order that depends on the seed of the question)
- A Ryzen processor made for AM5 (right)
- A Ryzen processor made for AM4 — if chosen: Same maker, but AMD has more than one socket. AM4 is an older socket and does not fit AM5.
- A Core processor made for LGA 1700 — if chosen: Intel and AMD processors do not fit each other’s sockets.

After the answer: the deciding words are marked. Reason: The socket on the motherboard decides which processors fit. Intel and AMD use different sockets, and each maker has several, so the name on the board must match the one the processor was made for.

#### Item 4

A chat, with its history: "Silas, Technician", Note in the ticket.

> (Silas, Technician, at the left) **Plugged in a USB stick to put Windows on a new computer. It keeps starting from the old drive instead and shows the old system.**

Help on screen: the words that decide it are marked.

**Which setting in the firmware do you change?**
(the options come in an order that depends on the seed of the question)
- The boot order, with the USB stick first (right)
- The TPM, so it holds the Windows code — if chosen: The TPM is a chip that stores secret codes for encryption. It does not choose which device starts.
- The firmware password, so only you can change it — if chosen: A password controls who may change settings. It does not choose what starts.

After the answer: the deciding words are marked. Reason: The firmware keeps a boot order, a list of devices it tries one after the other. To start from a USB stick, move it to the top of that list.

#### Item 5

A chat, with its history: "Thea, Sales", Chat with the help desk.

> (Thea, Sales, at the left) **I want to add more memory to my laptop. What kind of memory module goes in a laptop?**

Help on screen: the words that decide it are marked.

**Which module?**
(the options come in an order that depends on the seed of the question)
- SODIMM (right)
- DIMM — if chosen: A DIMM is the full-length module for desktops and servers. It is too long for a laptop.
- An ECC server module — if chosen: ECC checks for errors and is used in servers. It is not the form that fits a laptop.

After the answer: the deciding words are marked. Reason: Desktops take DIMMs. Laptops and small computers take SODIMMs, which are about half the length.

#### Item 6

A chat, with its history: "Ulla, Technician", Note in the ticket.

> (Ulla, Technician, at the left) **Fitted the new heat sink on the processor. A thin layer of thermal paste goes between the two first. What is that paste for?**

Help on screen: the words that decide it are marked.

**What does the thermal paste do?**
(the options come in an order that depends on the seed of the question)
- It fills tiny gaps so heat reaches the heat sink (right)
- It glues the heat sink onto the chip firmly — if chosen: The heat sink is held by clips or screws. The paste is not glue.
- It stops electricity passing between the two — if chosen: Paste is for moving heat, not for blocking power.

After the answer: the deciding words are marked. Reason: The processor makes heat, and the heat sink carries it away. Thermal paste is a thin layer that fills the tiny gaps between them so the heat can pass.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

8 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 7

A power supply gives three direct current outputs: 3.3 volts, 5 volts and 12 volts. A graphics card draws up to 250 watts through its own power plug.

**Which output voltage does that plug carry?**
(the options come in an order that depends on the seed of the question)
- 12 volts (right)
- 5 volts — if chosen: The 5 volt output runs smaller circuits such as USB ports and the electronics of drives.
- 3.3 volts — if chosen: The 3.3 volt output runs the small circuits on the board.

After the answer: Reason: Of the three outputs, 12 volts does the heavy work. The 5 and 3.3 volt outputs run the small circuits: chips on the board, USB ports and the electronics of drives.

#### Item 8

A chat, with its history: "Vance, Design", Chat with the help desk.

> (Vance, Design, at the left) I bought a graphics card for my desktop. Where on the motherboard does it go?

**Which place on the board?**
(the options come in an order that depends on the seed of the question)
- The longest PCIe slot (right)
- The M.2 slot on the board — if chosen: M.2 is a small slot for solid-state drives and some wireless cards, not graphics cards.
- A SATA port beside it — if chosen: SATA ports are for cables to drives, not cards.

After the answer: the deciding words are marked. Reason: Cards go in PCIe slots, and a graphics card uses the longest. M.2 is a small slot for solid-state drives and wireless cards, and SATA is the cable connection for drives.

#### Item 9

A chat, with its history: "Wilma, Billing", Chat with the help desk.

> (Wilma, Billing, at the left) My computer has 8 GB of memory but Windows only shows 3.5 GB usable. All my files are on this computer.

A plain table, "About this computer":

> Detail  |  Value  (the column heads)
> Installed memory  |  8 GB
> System type  |  32-bit operating system
> Processor  |  Can run 64-bit

**What fixes it?**
(the options come in an order that depends on the seed of the question)
- Copy their files off first, then put on 64-bit Windows (right)
- Put on 64-bit Windows over the old system now — if chosen: This is the right fix, but a new system can wipe the drive. Their files are protected first.
- Buy more memory sticks and fit them in the computer — if chosen: The memory is already there. The 32-bit system cannot use more than about 4 GB.
- Turn on dual channel in the firmware to free the memory — if chosen: Dual channel makes memory faster. It does not lift a 32-bit system’s limit.

After the answer: the deciding words are marked. Reason: A 32-bit (x86) system can address about 4 GB of memory. A 64-bit (x64) system can address far more. The processor can run 64-bit, so the system, not the hardware, is the limit. Files are protected before a new system goes on.

#### Item 10

A chat, with its history: "Per, Technician", Note in the ticket.

> (Per, Technician, at the left) Tried to start an old repair tool from a USB stick. The computer shows “Secure Boot violation” and starts from the drive instead.

**Which firmware feature refused the tool?**
(the options come in an order that depends on the seed of the question)
- Secure Boot, which checks signatures (right)
- The TPM, the chip for encryption codes — if chosen: The TPM stores secret codes for encryption. It does not decide which software starts.
- The boot password, asked before starting — if chosen: A boot password is asked for before anything starts. This message names Secure Boot.

After the answer: the deciding words are marked. Reason: Secure Boot lets only software signed by a trusted maker start, which keeps malware out of the start-up. An old unsigned tool is refused until Secure Boot is turned off or a signed tool is used.

#### Item 11

A chat, with its history: "Xavi, Server Team", Chat with the help desk.

> (Xavi, Server Team, at the left) The new database server should catch and fix a single flipped bit in memory on its own. What memory type do I order?

**Which memory?**
(the options come in an order that depends on the seed of the question)
- ECC memory (right)
- SODIMM memory — if chosen: SODIMM describes the size and shape, for laptops. It says nothing about correcting errors.
- Dual-channel memory — if chosen: Channels make memory faster. They do not correct errors.

After the answer: the deciding words are marked. Reason: ECC memory carries extra bits that let it detect and fix a flipped bit. It costs more and needs a board and processor made to work with it, so servers use it and most home computers (non-ECC) do not.

#### Item 12

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

#### Item 13

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

#### Item 14

A chat, with its history: "Anton, Security", Chat with the help desk.

> (Anton, Security, at the left) Staff keep plugging personal flash drives into the lobby computers. I want those ports not to work at all, without taking the computers apart.

**Where do you turn the ports off?**
(the options come in an order that depends on the seed of the question)
- In the firmware’s USB permissions (right)
- By turning off Secure Boot in the firmware — if chosen: Secure Boot controls which software may start, not whether ports work.
- In the boot order of the firmware — if chosen: The boot order picks which device starts the system, not whether a port works.

After the answer: the deciding words are marked. Reason: The firmware has settings for USB permissions. Turn the ports off there, and guard the settings with a firmware password.

Then a screen: you can stop here, your place is kept.

## Step 12: Questions

7 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 15

A chat, with its history: "Anselm, Technician", Note in the ticket.

> (Anselm, Technician, at the left) The old board has a 20-pin power socket. The new supply’s main connector is marked “20+4” and has four pins on a separate clip.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Unclip the four pins and plug in the 20 only (right)
- Buy a different supply, since the connector is the wrong size — if chosen: The 20+4 connector fits both 20-pin and 24-pin boards.
- Plug the 24 pins in anyway — if chosen: A 20-pin socket has no place for the extra four pins.

After the answer: the deciding words are marked. Reason: The main power connector to the board is 24 pins on newer boards and 20 on older ones. A “20+4” connector splits into 20 and 4 so one supply fits both.

#### Item 16

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **What setting in the firmware must be on before a computer can run virtual machines?**

**Type your answer.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
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

#### Item 17

A chat, with its history: "Bela, Technician", Note in the ticket.

> (Bela, Technician, at the left) The Windows 11 check says: “This PC can’t run Windows 11. TPM 2.0 required.” What is the TPM?

**What is a TPM?**
(the options come in an order that depends on the seed of the question)
- A chip, or a processor feature, that stores this computer’s encryption codes (right)
- A password asked for before the system starts up — if chosen: That is a boot password. A TPM stores codes; it is not a password.
- A separate hardware module that holds encryption codes for many systems — if chosen: That describes an HSM. A TPM guards the codes of this one computer.

After the answer: the deciding words are marked. Reason: A TPM (trusted platform module) stores a computer’s encryption codes safely, usually on a chip on the motherboard. An HSM is a separate device that does the same job for many systems, used with servers. The firmware can turn the TPM on.

#### Item 18

A chat, with its history: "Wren, Receiving", Chat with the help desk.

> (Wren, Receiving, at the left) The board takes DDR4. I was sent a DDR5 stick instead. The notch in the stick is in a different place from the notch in the slot.

**What is the right way to read that?**
(the options come in an order that depends on the seed of the question)
- It is the wrong generation and will not fit; send it back (right)
- It will fit if pushed harder, and just run slower on this board — if chosen: The notch stops the stick going in. Forcing it can break the slot.
- It will work, as long as it is put in dual channel — if chosen: Channels do not matter when the stick cannot go into the slot.

After the answer: the deciding words are marked. Reason: DDR4 and DDR5 are different generations. Each has its notch in a different place, so the generations cannot be swapped.

#### Item 19

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

#### Item 20

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

#### Item 21

A chat, with its history: "Joss, Training Room", Chat with the help desk.

> (Joss, Training Room, at the left) Someone changed the boot order on a classroom computer to start a game from a stick. Students must still be able to start the computers and sign in. How do we stop settings being changed?

**Which password?**
(the options come in an order that depends on the seed of the question)
- A firmware (BIOS or UEFI) password (right)
- A boot password at every start — if chosen: A boot password is asked for before the system starts, so students could not even start the computers.
- A TPM, the chip for encryption — if chosen: A TPM is a chip for encryption codes, not a password for the settings.

After the answer: the deciding words are marked. Reason: A firmware password guards the settings. A boot password guards the start-up itself. The classroom needs the first and not the second.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

6 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 22

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

#### Item 23

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

#### Item 24

A chat, with its history: "Edda, Technician", Note in the ticket.

> (Edda, Technician, at the left) The board has four memory slots: two black and two gray. I have two matching sticks and want the memory to run on two paths to the processor.

**Where do the two sticks go?**
(the options come in an order that depends on the seed of the question)
- In the two slots of the same color, as the board’s manual shows (right)
- In the two slots right beside each other — if chosen: Slots side by side are often not a pair. Use the pair the manual shows, usually the same color.
- In any two slots; the board works out the paths — if chosen: Only the paired slots make dual channel. In others the sticks may run as single channel.

After the answer: the deciding words are marked. Reason: Single channel is one path. Dual channel is two matching sticks in the paired slots, usually the same color. Some boards take three (triple channel) or four (quad channel).

#### Item 25

A chat, with its history: "Rune, Procurement", Chat with the help desk.

> (Rune, Procurement, at the left) We want a laptop that lasts about twenty hours on one charge and stays cool. Which processor design is built for using as little power as possible?

**Which design?**
(the options come in an order that depends on the seed of the question)
- ARM (right)
- x64, the 64-bit PC design — if chosen: x64 is common in desktops and laptops, but it is not the design made for the lowest power.
- x86, the 32-bit PC design — if chosen: x86 is the older PC design. It is not the one built to save power.

After the answer: the deciding words are marked. Reason: ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.

#### Item 26

A chat, with its history: "Fenn, Records", Chat with the help desk.

> (Fenn, Records, at the left) I have an old network card whose box says “PCI”. My new computer’s board only has PCIe slots and one M.2 slot. Can I use the card?

**What do you tell Fenn?**
(the options come in an order that depends on the seed of the question)
- No; PCI is an older kind of slot, so you need a PCIe card (right)
- Yes, in any PCIe slot, since PCIe is just the new name — if chosen: The names are alike, but the slots are different shapes and speeds. An old PCI card does not go in a PCIe slot.
- Yes, in the M.2 slot, because it is the smallest — if chosen: M.2 is a slot for small sticks such as drives. It does not take an old card.

After the answer: the deciding words are marked. Reason: PCI is the older card slot and PCIe is the newer one. Cards for one do not fit the other, so the new board needs a PCIe network card.

#### Item 27

A chat, with its history: "Sade, Studio", Chat with the help desk.

> (Sade, Studio, at the left) I want to record video from my game console on this desktop, with the console plugged into the computer.

**Which add-on card does that?**
(the options come in an order that depends on the seed of the question)
- A capture card (right)
- A video (graphics) card — if chosen: A graphics card draws the picture on a screen. It does not record video coming in.
- A sound card — if chosen: A sound card handles audio only.
- A network card — if chosen: A network card connects the computer to a network.

After the answer: the deciding words are marked. Reason: Cards add abilities: sound, graphics, a network connection, and capture, which records video coming in from a camera or console. All go in PCIe slots.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 28

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

#### Check question 29

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

#### Check question 30

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

#### Check question 31

A chat, with its history: "Elsa, Procurement", Chat with the help desk.

> (Elsa, Procurement, at the left) We are buying a device that must run all day on a small battery. Which processor design is built for that?

**Which design?**
(the options come in an order that depends on the seed of the question)
- ARM (right)
- x86 (32-bit) — if chosen: x86 is the older design used in PCs. The 32-bit form is the older of its two forms.
- x64 (64-bit) — if chosen: x64 is the 64-bit form of the PC design. It is common in desktops and laptops, not made for tiny batteries.

After the answer: the deciding words are marked. Reason: ARM is the design built for low power. x86 and x64 are the 32-bit and 64-bit forms of the design used in most PCs.

#### Check question 32

A chat, with its history: "Rik, Security", Chat with the help desk.

> (Rik, Security, at the left) A sales rep travels with a laptop. If it is stolen, the thief must not be able to start it to reach the drive.

**Which password?**
(the options come in an order that depends on the seed of the question)
- A boot password, asked before the system starts (right)
- A firmware password, asked to open the settings — if chosen: That guards the settings. A thief could still start the laptop.
- USB permissions, to block the ports — if chosen: They control the ports, not whether the laptop starts.

After the answer: the deciding words are marked. Reason: A boot password stops the system starting without it. A firmware password guards only the settings, and USB permissions control the ports.

#### Check question 33

A chat, with its history: "Femi, Technician", Note in the ticket.

> (Femi, Technician, at the left) Added a second matching stick, in the slot of the same color as the first. The firmware now reports “dual channel.”

**What did that change?**
(the options come in an order that depends on the seed of the question)
- Memory has two paths to the processor and moves data faster (right)
- Memory now finds and fixes errors by itself — if chosen: That is ECC. Channels are about speed.
- The sticks now keep their contents with the power off — if chosen: Memory loses what it holds when the power goes off, in any channel setup.
- The sticks are now short enough for a laptop — if chosen: The size of a stick is its form, DIMM or SODIMM. Channels have nothing to do with it.

After the answer: the deciding words are marked. Reason: Dual channel uses two matched sticks in the paired slots, each on its own path to the processor, so memory is faster. Single, dual, triple and quad are the numbers of paths.

#### Check question 34

The question, read aloud as above: **What is the name of the memory stick form used in laptops, as opposed to the DIMM used in desktops?**

**Type your answer.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - SODIMM
  - SO-DIMM
  - Small outline DIMM

After the answer: Reason: A SODIMM (small outline DIMM) is the half-length module for laptops and small computers. Desktops use the full-length DIMM.

#### Check question 35

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

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
