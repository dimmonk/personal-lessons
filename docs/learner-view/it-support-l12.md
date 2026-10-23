# IT Help Desk: Cables, connectors and screens

Revision 1, live. Part: Cables, connectors and screens. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Dina has ten minutes before class. The projector in room 4 says No signal. She has a cable, an adapter and a laptop with only USB-C ports, and no idea which part is wrong.
A picture travels a path: the computer’s port, the cable and any adapter, the screen’s input, the panel. You learn what each cable and plug carries, how to choose one, and where on that path each screen problem sits, with its cheap check.

## Step 1: Start from the job

Choosing a cable is three questions. What must pass through it: picture, sound, data or power? How far and how fast? What plug is on each end?

## Step 2: Network cables

A plain table, "Copper network cable (twisted pairs, RJ45 plug); a run is at most 100 meters":

> Cable  |  Speed  (the column heads)
> Cat 5  |  100 Mbps (a hundred million bits a second)
> Cat 5e  |  1 Gbps (a billion bits a second)
> Cat 6  |  1 Gbps to 100 meters; 10 Gbps only up to about 55 meters, less near a lot of electrical noise
> Cat 6a  |  10 Gbps to the full 100 meters

A plain table, "Coaxial cable, a different kind":

> Cable  |  What it is  (the column heads)
> Coaxial (coax)  |  One copper core inside a shield. Carries cable TV and cable internet from the wall to a modem (the box that joins the home to the internet company’s line). F-type plug.

T568A and T568B are two orders for the eight wires in an RJ45 plug. The same order at both ends makes a straight-through cable, the usual one. T568A at one end and T568B at the other makes a crossover cable, now rare because most ports detect which they have.
UTP is unshielded twisted pair. STP is shielded: foil or braid around the pairs blocks electrical noise from motors and lights. Plenum-rated cable has a jacket that burns slowly with little poisonous smoke, for air spaces above ceilings. Direct-burial cable has a jacket made to stand water and soil.

## Step 3: Fiber

A plain table, "Fiber carries light through glass, so electrical noise does not touch it":

> Cable or plug  |  What it is  (the column heads)
> Single-mode  |  A very thin core and laser light. Many kilometers.
> Multimode  |  A wider core. A few hundred meters at most, such as inside a building.
> ST plug  |  Round, twists and locks on like a bayonet.
> SC plug  |  Square, pushes in and clicks.
> LC plug  |  Small square with a latch, half the size of SC.

## Step 4: Device and drive cables

A plain table, "Cables for devices and drives":

> Cable  |  What it is  (the column heads)
> USB 2.0  |  480 Mbps.
> USB 3.0  |  5 Gbps; the port is often blue inside. Later, faster versions use the USB-C plug.
> Thunderbolt 3 and 4  |  40 Gbps over USB-C, for data, video and power; the port has a lightning bolt.
> Serial  |  A slow cable that sends one bit after another, with a 9-pin DB9 plug. Configures network gear through its console port (the port on a switch or router for a technician’s laptop).
> SATA  |  Joins a drive to the motherboard inside the computer. Data only; power is a separate cable.
> eSATA  |  SATA taken outside the case for an external drive. Data only, so the drive has its own power.

## Step 5: Video cables

A plain table, "Video cables":

> Cable  |  What it carries  (the column heads)
> HDMI  |  Digital picture and sound. TVs, monitors, projectors.
> DisplayPort  |  Digital picture and sound. Monitors; can chain several.
> DVI-D  |  Digital picture only.
> DVI-I  |  The port or plug that carries both digital and analog pictures. A DVI-D cable fits it and carries the digital one.
> DVI-A  |  Analog picture only. Rare.
> VGA  |  Analog picture only. Blue 15-pin plug on older monitors and projectors.
> USB-C  |  Picture, data and power in one reversible plug, but only if the port was built to. A USB-C port may be for charging and data only.

Digital is a picture sent as numbers; analog, as a changing voltage. Digital (HDMI) to analog (VGA) needs a converter, not just an adapter that fits.

## Step 6: Adapters, and the shapes of USB

A plain table, "An adapter changes the plug; it cannot add what the cable does not carry":

> Adapter  |  What it does and what it cannot  (the column heads)
> USB-C to HDMI  |  Turns a USB-C port’s video into HDMI, only if the port carries video.
> DVI to HDMI  |  Fits the plugs. The picture passes; DVI normally carries no sound, so sound needs its own cable.
> HDMI to VGA  |  A converter from digital to analog picture. No sound comes out of VGA.
> Mini DisplayPort or mini HDMI to full size  |  The same signal on a smaller plug.

USB shapes: USB-A is the flat rectangle on a computer; USB-B, the squarish plug on printers; USB-C, the small reversible oval.

## Step 7: Connectors

A plain table, "Plugs and where they go":

> Connector  |  What it is  (the column heads)
> RJ45  |  Wider, 8 contacts. Network cable.
> RJ11  |  Narrower, fewer contacts. Telephone line and DSL modem.
> F-type  |  Threaded, screws on. Coax.
> Punchdown block  |  No plug: bare wires pushed into slots with a punchdown tool, where wall cable ends. A keystone jack is the wall plate with an RJ45 socket.
> Micro USB and mini USB  |  Small USB plugs on older devices. Micro is the small flat trapezoid; mini is bigger, on older cameras and GPS units.
> Molex  |  Four-pin power plug for older internal drives and fans.
> Lightning  |  Apple’s reversible 8-pin plug, on phones and tablets before USB-C. Not Thunderbolt, the 40 Gbps port with a lightning bolt.
> DB9  |  The 9-pin D-shaped serial plug.

## Step 8: It fits, so it works

A wrong idea, marked wrong: “The plug goes into the port, so the cable will do the job.”
The right line: An RJ11 phone plug can be pushed into a network jack, and a charge-only USB-C cable fits a port that wants video. Decide by what the cable carries, how fast and how far, then check the plug.

## Step 9: Display kinds and numbers

A plain table, "Display kinds":

> Kind  |  What it is  (the column heads)
> LCD  |  Liquid crystals lit from behind by a backlight. Older ones use a tube lamp powered by an inverter, a small board that makes the lamp’s high voltage.
> IPS (a kind of LCD)  |  Best color and widest viewing angle.
> TN (a kind of LCD)  |  Fastest and cheapest; colors fade from the side.
> VA (a kind of LCD)  |  Deepest blacks, best contrast of the three.
> OLED  |  Every dot makes its own light; black is truly off. The same picture left on for weeks can burn in.
> Mini-LED  |  An LCD whose backlight is thousands of tiny LEDs in zones that dim separately.
> Touch screen  |  A digitizer layer senses where a finger lands. Picture fine, touch failing: suspect the digitizer.

A pixel is one dot of the picture. Resolution is how many pixels, wide by high: 1920 by 1080. A picture not at the panel’s own (native) resolution is stretched and fuzzy. Pixel density is pixels per inch: the same resolution on a smaller screen is sharper. Refresh rate, in Hz, is how many times a second the picture is redrawn: 60 for office work, higher for games. Color gamut is the range of colors a screen can show; wider is for photo and video work.

## Step 10: The signal path, and where each symptom sits

A picture reaches your eyes along four links. 1. The computer: its port and settings (which port sends video, resolution, refresh rate, sound output). 2. The cable and any adapter. 3. The screen’s input: a screen or projector listens to one input at a time. 4. The panel: the dots and their light, or the projector’s lamp.
Cut it with the cheapest check first: a button or setting before a swap, a swap before an order. Test with a part known to work, one change at a time. A swap that changes nothing clears that part only if one fault is behind the symptom; two faults can hide each other.

A plain table, "Symptom, link, likely cause, first check":

> Symptom  |  Link  |  Likely cause  |  First check  (the column heads)
> No signal  |  3. Input  |  Wrong input source  |  Press Source or Input and choose the input the cable is in
> No picture, flicker  |  2. Cable  |  Loose or damaged cable  |  Reseat both ends, then a cable known to work
> No picture only through an adapter  |  1 or 2  |  A USB-C port without video, or the wrong adapter  |  Try the other port or another adapter known to work
> Wrong colors, a tint  |  2. Cable  |  Loose cable or bent pin; a bad panel if a cable known to work and another computer show it too  |  Reseat the cable, reset the monitor’s own color settings, then another cable, then the screen on another computer
> Fuzzy image  |  1. Computer, or projector focus  |  Not native resolution, or the projector’s focus  |  Set native resolution; turn the focus ring
> Faint ghost of an old image  |  4. Panel  |  Burn-in  |  Screen saver and changing content; often permanent
> One dot always dark or one color  |  4. Panel  |  A dead pixel stays dark; a stuck pixel stays one color  |  Show a solid color. A stuck pixel sometimes clears with a pixel-exercise tool; a dead one never does; then warranty
> Flashing screen  |  1 or 2  |  Loose cable, or a refresh rate the screen cannot handle  |  Reseat the cable; put the refresh rate back to what it was
> Picture but no sound  |  1 or 2  |  A cable that normally carries no sound (VGA, DVI) or the wrong sound output  |  Pick the sound output; use HDMI
> Dim image  |  4. Panel  |  Low brightness, failing backlight or inverter, tired projector lamp  |  Raise brightness; shine a flashlight at the screen; check lamp hours
> Projector runs, no image, lamp warning light on or hours used up  |  4. Lamp  |  Burnt-out projector bulb  |  Check the lamp warning light and the hours; replace the lamp
> Projector shuts off by itself  |  4. Projector  |  Overheating  |  Vents and dust filter; let it cool
> Wrong size  |  1. Computer, or projector zoom  |  Resolution, or aspect ratio (the picture’s shape: wide 16 by 9, squarer 4 by 3); projector zoom  |  Resolution, aspect ratio, zoom
> Trapezoid, distorted  |  4. Projector  |  Projector at an angle  |  Square the projector; keystone setting (squares up a trapezoid)

## Step 11: A worked example

A chat, with its history: "Dina, Training", Chat with the help desk.

> (Dina, Training, at the left) The projector in room 4 says No signal. I plugged my laptop in with the HDMI cable on the table and nothing shows. I start in ten minutes.

A plain table, "What is in room 4":

> Part  |  What it has  (the column heads)
> Projector inputs  |  HDMI 1, HDMI 2, VGA
> Cable on the table  |  An HDMI cable, plugged into HDMI 2
> Dina’s laptop  |  Two USB-C ports and no HDMI port. The left port is marked with a small screen symbol; the right port has no mark. An adapter from USB-C to HDMI is in the right port.

Before the working, the learner may commit to a choice (not scored, not stored):
**You press Source and the projector is already on HDMI 2. You swap in an HDMI cable you know works. It still says No signal. What does that show?**
(the options come in an order that depends on the seed of the question)
- The cable is not the cause of the No signal.
- The input source is the cause.
- The projector is the broken part.
- The laptop is the broken part.

The working, one step at a time:
1. Write down every cause along the signal path that fits “No signal”.: The projector listens to a different input than the one the cable is in; the cable; the adapter, or a laptop port that does not carry video; the laptop is not sending a picture.
1. Check that the parts can do the job at all.: The adapter turns USB-C into HDMI, and an HDMI cable carries picture and sound. The projector has an HDMI input. The parts match. One thing is unknown: whether the right-hand USB-C port carries video, because only the left one is marked.
1. Run the cheapest cut first.: Press Source on the remote: one button. It shows HDMI 2, the input the cable is in. The input is ruled out.
1. Name your favorite cause and test it with a part known to work.: The cable: the last one in this room was bad. Swap in a cable known to work. It costs a minute.
1. Test the next link, one change.: Move the adapter to the left USB-C port, the one with the screen symbol. The picture appears. The right port was for charging and data only.
1. Look at the result.: The first guess was ruled out at the cost of a minute. The cheapest check came first and ruled out the input; the fault was the port, found by moving one thing.

Then the answer: The cable is not the cause of the No signal. The projector has an HDMI input and the cable plugs into it, so the setup can work. Source showed the right input, and a cable known to work gave the same No signal, so the input and the cable were cleared. The last thing left was the adapter’s USB-C port, and only one of the two carries video.

## Step 12: Questions

4 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Orla, Facilities", Chat with the help desk.

> (Orla, Facilities, at the left) **The new desk is 85 meters of cable run from the switch (the box that joins the office’s wired network cables) in the wiring closet. The company wants 10 Gbps on it, that is ten billion bits a second. Which cable do I pull?**

Help on screen: the words that decide it are marked.

**Which cable fits?**
(the options come in an order that depends on the seed of the question)
- Cat 6a (right)
- Cat 6 — if chosen: Cat 6 carries 10 Gbps only up to about 55 meters. At 85 meters it falls back to 1 Gbps.
- Cat 5e — if chosen: Cat 5e tops out at 1 Gbps.
- Cat 5 — if chosen: Cat 5 tops out at 100 Mbps, a hundred million bits a second.

After the answer: the deciding words are marked. Reason: The job is 10 Gbps over 85 meters. Only Cat 6a keeps 10 Gbps out to the full 100 meters. Cat 6 does it for about 55 meters, Cat 5e stops at 1 Gbps and Cat 5 at 100 Mbps.

#### Item 2

A chat, with its history: "Lucy, Front desk", Chat with the help desk.

> (Lucy, Front desk, at the left) **The cable company ran a new line to a jack in the wall. I have the cable modem (the box that joins us to the internet company’s line) on my desk. What goes between the wall jack and the modem?**

Help on screen: the words that decide it are marked.

**Which cable goes from the wall jack to the cable modem?**
(the options come in an order that depends on the seed of the question)
- A coax cable with F-type plugs on both ends (right)
- A phone cable with RJ11 plugs on both ends — if chosen: A phone cable is for a phone line and for a DSL modem. A cable modem is not on the phone line.
- A Cat 6 cable with RJ45 plugs — if chosen: A network cable fits the modem’s network port, which leads on to the router (the box that shares the connection). It does not go to the wall jack.
- A DVI cable with a DVI-I plug — if chosen: DVI carries a picture to a screen. It carries no internet.

After the answer: the deciding words are marked. Reason: A cable modem takes its signal from coax, the cable the cable company runs, and coax ends in an F-type plug. The network cable on the modem goes the other way, to the router.

#### Item 3

A chat, with its history: "Selma, Facilities", Chat with the help desk.

> (Selma, Facilities, at the left) **I am running new network cable above the ceiling tiles, in the open space the building’s heating and cooling air moves through. What do I buy?**

Help on screen: the words that decide it are marked.

**Which cable goes there?**
(the options come in an order that depends on the seed of the question)
- A plenum-rated cable with a fire-safe jacket (right)
- An ordinary cable with a plastic jacket — if chosen: In a fire its jacket gives off thick poisonous smoke, and the moving air would carry it through the building.
- A direct-burial cable — if chosen: That jacket is made to stand water and soil underground. It is not the fire-rated one the air space needs.

After the answer: the deciding words are marked. Reason: Where the building’s air moves above the ceiling, the jacket matters in a fire. Plenum-rated cable burns slowly and gives off little poisonous smoke. Direct-burial is for the ground.

#### Item 4

A chat, with its history: "Kay, Accounting", Chat with the help desk.

> (Kay, Accounting, at the left) **I am making a cable from my PC to the network jack in the wall. The cable is Cat 6. Which plug goes on each end?**

Help on screen: the words that decide it are marked.

**Which plug?**
(the options come in an order that depends on the seed of the question)
- RJ45 (right)
- RJ11 — if chosen: RJ11 looks like a smaller RJ45. It is the telephone plug, with fewer contacts. It can be pushed into a network jack, but it is not the right plug.
- F-type — if chosen: F-type is the screw-on plug of coax cable.
- LC — if chosen: LC is a small plug for fiber, not for copper network cable.

After the answer: the deciding words are marked. Reason: Ethernet cable, Cat 5e, Cat 6 or Cat 6a, ends in an RJ45 plug with 8 contacts. RJ11 is the narrower telephone plug.

Then a screen: you can stop here, your place is kept.

## Step 13: Questions

8 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 5

A chat, with its history: "Unity, Operations", Chat with the help desk.

> (Unity, Operations, at the left) We need a link between the main office and the warehouse. They are 2 kilometers apart. What cable?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- Single-mode fiber (right)
- Multimode fiber, the kind used for shorter runs — if chosen: Multimode fiber has a wider core and is made for runs of a few hundred meters at most, such as inside a building.
- Cat 6a — if chosen: Copper network cable is good for 100 meters.
- Coaxial cable — if chosen: Coax is for cable TV and cable internet to a building, not a 2 kilometer link between two of them.

After the answer: the deciding words are marked. Reason: At 2 kilometers, copper is out (100 meters at most) and multimode fiber is too short. Single-mode fiber, a thin core with laser light, is the one made for kilometers.

#### Item 6

A chat, with its history: "Viggo, IT team", Chat with the help desk.

> (Viggo, IT team, at the left) I need a cable for a 10 Gbps link between two servers in the same rack. The run is 30 meters. The budget is tight. Cat 6 costs less than Cat 6a. Is Cat 6 enough?

**What do you say?**
(the options come in an order that depends on the seed of the question)
- Yes, Cat 6 is enough for a 30 meter run, and it costs less. (right)
- No, only Cat 6a carries 10 Gbps on any run. — if chosen: Cat 6a is needed past about 55 meters. This run is 30.
- No, Cat 6 tops out at 1 Gbps on every run. — if chosen: Cat 6 does 1 Gbps to 100 meters and 10 Gbps up to about 55 meters.
- Yes, and Cat 5e does that for even less. — if chosen: Cat 5e tops out at 1 Gbps.

After the answer: the deciding words are marked. Reason: The job is 10 Gbps over 30 meters. Cat 6 does that out to about 55 meters, so the cheaper cable fits; the pricier Cat 6a is for longer runs.

#### Item 7

A chat, with its history: "Winnie, Conference room", Chat with the help desk.

> (Winnie, Conference room, at the left) The old monitor has a DVI-D port. The computer has a DVI-I port. I have a DVI-D cable. Will it carry a picture from the computer to the monitor?

**Will it work?**
(the options come in an order that depends on the seed of the question)
- Yes, DVI-I includes the digital picture. (right)
- No, DVI-I carries only an analog picture, like VGA. — if chosen: DVI-I carries both. Only DVI-A is analog alone.
- No, the plugs differ, so it needs a converter to analog. — if chosen: The plug fits, and no conversion is needed: both ends speak digital.
- Yes, and it will carry sound too. — if chosen: DVI normally carries no sound.

After the answer: the deciding words are marked. Reason: DVI-D carries digital only, DVI-I carries digital and analog, DVI-A analog only. A digital DVI-D cable between a DVI-I port and a DVI-D port carries the digital picture. DVI normally carries no sound.

#### Item 8

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **A fiber plug on the switch is round. You push it in and twist a quarter turn to lock it. Name it.**

**Type the name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - ST
  - ST plug
  - ST connector
  - straight tip
  - straight tip plug
  - straight tip connector

After the answer: Reason: ST, for straight tip, is round and locks with a twist. SC is square and pushes in, and LC is a small square plug with a latch.

#### Item 9

A chat, with its history: "Mira, Marketing", Chat with the help desk.

> (Mira, Marketing, at the left) I edit photos all day, and clients sit beside me at an angle and look at the screen from the side. I need a monitor whose colors stay true for them. Which kind of screen panel?

**Which panel?**
(the options come in an order that depends on the seed of the question)
- An IPS panel, which keeps its colors from the side (right)
- TN, the fast and cheap one — if chosen: A TN panel is the fastest and cheapest, but its colors fade when seen from the side.
- VA, the one with the deepest blacks — if chosen: A VA panel has the deepest blacks of the three, but its colors shift from the side more than IPS.

After the answer: the deciding words are marked. Reason: The need is true color from the side. IPS is the LCD panel made for that. TN is the fastest and cheapest, VA has the deepest blacks.

#### Item 10

A chat, with its history: "Zelda, Warehouse", Chat with the help desk.

> (Zelda, Warehouse, at the left) I put a new hard drive inside my desktop. What cable carries the drive’s data to the motherboard?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- A SATA cable, the kind that stays inside the computer (right)
- An eSATA cable, the one for outside the computer — if chosen: eSATA is the same connection taken outside the computer, for an external drive.
- A Molex cable — if chosen: A Molex is a power plug. It carries no data.

After the answer: the deciding words are marked. Reason: The job is data to a drive inside the computer: SATA. eSATA is for drives outside the computer, and Molex only brings power.

#### Item 11

A chat, with its history: "Deb, Facilities", Chat with the help desk.

> (Deb, Facilities, at the left) We are laying 30 meters of network cable from the main building to the shed, in a trench in the ground. No pipe around it. What kind of cable?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- A direct-burial cable (right)
- A plenum-rated cable — if chosen: A plenum jacket is made for fire safety in an air space. It is not made to stand soil and water.
- An ordinary indoor cable — if chosen: An indoor jacket lets water in, and the cable fails in the ground.

After the answer: the deciding words are marked. Reason: A cable in the ground with no pipe needs a jacket made for it: direct burial. The plenum rating answers a different problem, fire in an air space.

#### Item 12

A chat, with its history: "Winnie, Conference room", Chat with the help desk.

> (Winnie, Conference room, at the left) The new TV takes HDMI, DVI-D or VGA, and my laptop has all three. I want picture and sound to reach the TV over one cable. Which one?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- HDMI (right)
- DVI-D — if chosen: DVI-D carries a digital picture only. The sound would need its own cable.
- VGA — if chosen: VGA carries an analog picture only, and no sound.

After the answer: the deciding words are marked. Reason: The job is picture and sound in one cable. HDMI does both. DVI-D and VGA carry the picture only.

Then a screen: you can stop here, your place is kept.

## Step 14: Questions

9 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 13

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

#### Item 14

A chat, with its history: "Aiden, Sales", Chat with the help desk.

> (Aiden, Sales, at the left) My laptop screen is black, but if I hold a flashlight close to it I can just see my desktop.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The backlight or its inverter, the light behind the picture, has failed (right)
- Dead pixels, a patch of dots that no longer light — if chosen: Dead pixels are tiny dots. The whole screen is dark here.
- The wrong input source is chosen for the screen — if chosen: A laptop’s own screen has no input to choose, and the flashlight shows a picture is being made.
- Burn-in from an old image left on too long — if chosen: Burn-in leaves a faint ghost of an old image on a lit screen. The screen here is not lit.

After the answer: the deciding words are marked. Reason: The flashlight shows the desktop is on the panel, so the computer is sending a picture. What is missing is the light behind it: the backlight or what powers it. On older LCD screens that power part is the inverter, a small board that makes the high voltage a tube lamp needs.

#### Item 15

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

#### Item 16

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

#### Item 17

A chat, with its history: "Delphine, Purchasing", Chat with the help desk.

> (Delphine, Purchasing, at the left) There is a tiny dot near the middle of my new monitor that stays bright green. It stays there on every color and window.

**What is it?**
(the options come in an order that depends on the seed of the question)
- A stuck pixel in the panel (right)
- Burn-in from a still image — if chosen: Burn-in is a faint ghost of an old image that was on the screen a long time, not one bright dot.
- A loose cable at the back — if chosen: A loose cable spoils the whole picture, with flicker or a tint, not one dot.
- A resolution that is too high — if chosen: A wrong resolution makes the picture fuzzy or the wrong size, not one fixed dot.

After the answer: the deciding words are marked. Reason: A single dot that does not change with the picture is the panel’s own: a dead pixel stays dark and a stuck pixel stays one color. A cable or a setting would change the whole picture.

#### Item 18

A chat, with its history: "Emeric, Finance", Chat with the help desk.

> (Emeric, Finance, at the left) My monitor flashes on and off every few seconds. Yesterday I changed its refresh rate from 60 Hz to 144 Hz to see if it looked smoother.

**What do you do first?**
(the options come in an order that depends on the seed of the question)
- Put the refresh rate back to 60 Hz, what it was (right)
- Reseat the cable at both ends — if chosen: A cheap check, but the flashing began right after the setting change, so it will probably not split anything.
- Put the refresh rate back and swap the cable — if chosen: Two changes at once: if the flashing stops, nobody knows which one fixed it.
- Order a new monitor because it keeps flashing on and off — if chosen: The flashing began with a settings change. Undo that first.

After the answer: the deciding words are marked. Reason: The flashing started right after the refresh rate was changed. Refresh rate is how many times a second the screen is redrawn, and one the monitor cannot handle makes it flash. Undo the change before looking at a part.

#### Item 19

A chat, with its history: "Gideon, Training", Chat with the help desk.

> (Gideon, Training, at the left) The room 3 TV has an HDMI port and my laptop has an HDMI port, but the only cable I found is DVI at one end and HDMI at the other. The picture shows. No sound comes out of the TV.

**Why is there no sound?**
(the options come in an order that depends on the seed of the question)
- DVI normally carries no sound (right)
- The adapter cable is damaged and drops only the sound — if chosen: A bad cable would spoil the picture too. The picture is fine.
- The refresh rate is too low to carry sound — if chosen: The refresh rate changes how often the picture is redrawn. It does not change sound.
- The TV’s dead pixels are blocking the sound — if chosen: Dead pixels are dots on the picture. They have nothing to do with sound.

After the answer: the deciding words are marked. Reason: An adapter changes the plug; it cannot add what the cable does not carry. DVI, like VGA, normally carries the picture only. With a DVI cable the sound has to travel another way, or the job needs a cable that carries both, HDMI or DisplayPort.

#### Item 20

A chat, with its history: "Yvette, Training", Chat with the help desk.

> (Yvette, Training, at the left) The room 2 projector picture has been getting dimmer for months. Its menu says: Lamp 4,950 of 5,000 hours.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The lamp is nearly worn out (right)
- The projector is on the wrong input — if chosen: A wrong input shows No signal, not a dim picture.
- Burn-in from a still image — if chosen: Burn-in leaves a ghost of an old image, not a dim picture.

After the answer: the deciding words are marked. Reason: The menu shows the lamp at 4,950 of its 5,000 hours, and a slow dimming is what a lamp near the end of its life does.

#### Item 21

A chat, with its history: "Zephyr, Training", Chat with the help desk.

> (Zephyr, Training, at the left) The projector sits on a low cart and points up at the screen. The picture comes out wider at the top than the bottom, like a trapezoid.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Square the projector, or adjust keystone (right)
- Replace the lamp with a new one — if chosen: A lamp that is wearing out dims the picture. It does not change its shape.
- Change the input source on the remote — if chosen: A wrong input shows No signal. The picture here is showing.

After the answer: the deciding words are marked. Reason: A picture wider at the top than the bottom comes from a projector pointing up at an angle. The first check is the angle and the keystone setting, not a part.

Then a screen: you can stop here, your place is kept.

## Step 15: Questions

8 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 22

A chat, with its history: "Hans, Engineering", Chat with the help desk.

> (Hans, Engineering, at the left) My PC has an eSATA port on the back. What does an eSATA cable do that the SATA cable inside the computer does not?

**What is the difference?**
(the options come in an order that depends on the seed of the question)
- It takes SATA outside, with no power (right)
- It carries both power and data to the drive — if chosen: eSATA has no power in it. The external drive is plugged into the wall for power.
- It is a fiber cable for long runs between rooms — if chosen: eSATA is copper, the same connection as SATA.

After the answer: the deciding words are marked. Reason: eSATA is SATA taken outside the computer for an external drive. It carries data only, so the external drive has its own power.

#### Item 23

The question, read aloud as above: **An old optical drive inside a PC gets its power from a chunky four-pin plastic plug. Name it.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - Molex
  - Molex plug
  - Molex connector

After the answer: Reason: A Molex plug is a 4-pin plastic power connector for older internal drives and fans.

#### Item 24

A chat, with its history: "Honor, Records", Chat with the help desk.

> (Honor, Records, at the left) We have two laptops. Both screens have the same resolution, 1920 by 1080. One is 13 inches across the corner, the other 17 inches. Which one looks sharper?

**Which is sharper?**
(the options come in an order that depends on the seed of the question)
- The 13 inch, with its pixels packed closer (right)
- The 17 inch, because a bigger screen shows more — if chosen: A bigger screen with the same pixels spreads them farther apart, so each one is easier to see.
- Neither, the same resolution looks the same — if chosen: Resolution counts the pixels. Pixel density counts them per inch, which changes with the size of the screen.

After the answer: the deciding words are marked. Reason: Resolution is how many pixels there are. Pixel density is how many fit in an inch. The same 1920 by 1080 on a 13 inch screen is denser, so sharper, than on a 17 inch screen.

#### Item 25

A chat, with its history: "Ignacio, Field team", Chat with the help desk.

> (Ignacio, Field team, at the left) I dropped my tablet and the glass is cracked. The picture is fine, but nothing happens when I touch the bottom third of the screen.

**What is the likely cause?**
(the options come in an order that depends on the seed of the question)
- The digitizer, the touch-sensing layer (right)
- The backlight behind the glass has failed — if chosen: A failed backlight would darken the screen. The picture is fine.
- A wrong input source on the tablet — if chosen: A tablet’s own screen has no input source to choose.

After the answer: the deciding words are marked. Reason: The picture is fine, so the display and its light work. Only touch is lost in one area after a drop, which is the digitizer layer that senses touch.

#### Item 26

A chat, with its history: "Jasper, Network team", Chat with the help desk.

> (Jasper, Network team, at the left) To set up a new switch I have to connect my laptop to its console port with a serial cable. Which plug is on the end that goes into the laptop?

**Which plug?**
(the options come in an order that depends on the seed of the question)
- DB9, the 9-pin D-shaped plug (right)
- RJ45, the wide 8-contact plug — if chosen: RJ45 is the network plug. A console port can take one on some gear, but a serial cable ends in DB9.
- F-type, the screw-on plug — if chosen: F-type is the screw-on plug of coax.
- Molex, the four-pin power plug — if chosen: Molex brings power to a drive inside a PC. It carries no serial data.

After the answer: the deciding words are marked. Reason: A serial cable sends one bit after another and ends in a 9-pin D-shaped plug, DB9. It is what a technician uses to configure network gear through its console port.

#### Item 27

A chat, with its history: "Kelsey, Video team", Chat with the help desk.

> (Kelsey, Video team, at the left) My new drive says USB 3.0 and so do the ports on my PC. The old one was USB 2.0. How fast can this link go at its best?

**How fast?**
(the options come in an order that depends on the seed of the question)
- 5 Gbps (right)
- 480 Mbps — if chosen: That is USB 2.0.
- 10 Gbps — if chosen: That is a later, faster USB version.
- 40 Gbps — if chosen: That is Thunderbolt 3 or 4.

After the answer: the deciding words are marked. Reason: USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Later versions go faster over the USB-C plug.

#### Item 28

A chat, with its history: "Lorcan, Front desk", Chat with the help desk.

> (Lorcan, Front desk, at the left) The charging plug on an old iPad is small, 8 pins, and goes in either way up. My new laptop has a port marked with a lightning bolt. Is the iPad’s plug the same thing?

**What is the iPad’s plug called?**
(the options come in an order that depends on the seed of the question)
- Lightning (right)
- Thunderbolt — if chosen: Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.
- Micro USB — if chosen: Micro USB is a small flat trapezoid that goes in one way up.
- Mini USB — if chosen: Mini USB is bigger, found on older cameras and GPS units.

After the answer: the deciding words are marked. Reason: Apple’s reversible 8-pin plug is Lightning. The lightning bolt on a port marks Thunderbolt, a different thing.

#### Item 29

A chat, with its history: "Ximena, Warehouse", Chat with the help desk.

> (Ximena, Warehouse, at the left) The scanner’s cable has a very small flat plug that only goes in one way up. My old camera’s cable is bigger and does the same. Which is micro and which is mini?

**Which is which?**
(the options come in an order that depends on the seed of the question)
- The small flat one is micro USB; the bigger one is mini USB (right)
- The small flat one is mini USB; the bigger one is micro USB — if chosen: Reversed: micro is the smaller of the two.
- Both are Lightning plugs — if chosen: Lightning is Apple’s reversible 8-pin plug. These plugs go in one way up.

After the answer: the deciding words are marked. Reason: Micro USB is the small flat trapezoid and mini USB the bigger one, both for older devices. Lightning is Apple’s reversible plug.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 30

A chat, with its history: "Flor, Network team", Chat with the help desk.

> (Flor, Network team, at the left) I made a patch cable (a short cable from a PC to a switch, the box that joins wired computers). I wired both ends the T568B way. What kind of cable did I make?

**What kind of cable is it?**
(the options come in an order that depends on the seed of the question)
- A straight-through cable (right)
- A crossover cable, with A at one end — if chosen: A crossover has T568A on one end and T568B on the other.
- A shielded cable made with foil, STP — if chosen: Shielding is foil around the pairs. The wiring order says nothing about shielding.
- A Cat 6a cable, a faster grade — if chosen: The category is the grade of the cable and its speed. The wiring order is a separate choice.

After the answer: the deciding words are marked. Reason: T568A and T568B are two pin orders for the eight wires. The same order at both ends is straight-through. A crossover has A at one end and B at the other.

#### Check question 31

A chat, with its history: "Gwyn, Plant manager", Chat with the help desk.

> (Gwyn, Plant manager, at the left) The network cable to the packing line runs right beside a row of big motors, and the connection keeps dropping. The cable is ordinary twisted pair with no foil or braid, UTP. What cable should replace it?

**Which cable?**
(the options come in an order that depends on the seed of the question)
- Shielded cable (STP) (right)
- A plenum-rated UTP cable — if chosen: Plenum is a fire rating for air spaces. It does not block noise.
- A longer UTP cable to the same spot — if chosen: Length does not help against interference, and it adds to the loss.
- A Cat 6a UTP cable, much faster — if chosen: Cat 6a is faster, but it is just as open to electrical noise with no shield.

After the answer: the deciding words are marked. Reason: The drops come from the motors’ electrical noise. Shielding around the pairs, as in STP, is what blocks it.

#### Check question 32

A chat, with its history: "Heidi, Video team", Chat with the help desk.

> (Heidi, Video team, at the left) I copied 200 GB to my new drive and the first try over USB 2.0 took forever. The drive and my PC are both USB 3.0. At its best, how fast is the link between them?

**How fast is USB 3.0?**
(the options come in an order that depends on the seed of the question)
- 5 Gbps (right)
- 480 Mbps — if chosen: That is USB 2.0.
- 10 Gbps — if chosen: That is a later, faster USB version.
- 1 Gbps — if chosen: That is the speed of Cat 5e network cable.

After the answer: the deciding words are marked. Reason: USB 3.0 runs at 5 Gbps and USB 2.0 at 480 Mbps. Use the blue USB 3.0 ports and cable on both ends.

#### Check question 33

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

#### Check question 34

A chat, with its history: "Idris, Sales", Chat with the help desk.

> (Idris, Sales, at the left) I need a charging cable for my old iPhone 12. Its plug is small, 8 pins, and goes in either way up. What is that plug called?

**What is it called?**
(the options come in an order that depends on the seed of the question)
- Lightning (right)
- Micro USB — if chosen: Micro USB is a small flat trapezoid that goes in one way up, found on older non-Apple phones.
- Mini USB — if chosen: Mini USB is bigger, found on older cameras and GPS units.
- Thunderbolt — if chosen: Thunderbolt is the 40 Gbps port marked with a lightning bolt, on the USB-C plug. It is not Apple’s old plug.

After the answer: the deciding words are marked. Reason: Apple’s small reversible 8-pin plug on phones before USB-C is Lightning.

#### Check question 35

A chat, with its history: "Jana, Training", Chat with the help desk.

> (Jana, Training, at the left) The room 5 projector shuts off by itself after about 20 minutes, then works after a rest. The fan gets loud before it goes.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- The vents and the dust filter (right)
- The lamp hours in the menu — if chosen: A cheap look, but a tired lamp dims the picture. It does not shut the projector down.
- Replace the lamp with a new one — if chosen: Nothing says the lamp is spent, and a spent lamp gives no image rather than a shutdown.
- The resolution on the laptop — if chosen: Resolution changes the size and sharpness of the picture, not the power.

After the answer: the deciding words are marked. Reason: A projector that shuts off after a while, with a loud fan first, is overheating. Dust and blocked vents are the cheap thing to check.

#### Check question 36

A chat, with its history: "Lou, HR", Chat with the help desk.

> (Lou, HR, at the left) My new 4K monitor (3840 by 2160 pixels) has fuzzy text. Windows says the resolution is 1280 by 720.

**What do you check first?**
(the options come in an order that depends on the seed of the question)
- Switch Windows to native resolution (right)
- Replace the cable with a brand new one — if chosen: The picture shows, and the setting is plainly wrong. Fix the setting first.
- Turn the refresh rate down to 30 Hz — if chosen: Refresh rate is how often the picture is redrawn. It does not blur text.
- Order a new monitor this afternoon — if chosen: Nothing shows the monitor is at fault, and the setting is cheap to fix.

After the answer: the deciding words are marked. Reason: The monitor’s native resolution is 3840 by 2160 and Windows sends 1280 by 720, which the panel stretches. Switch it to native.

#### Check question 37

A chat, with its history: "Lior, Lobby", Chat with the help desk.

> (Lior, Lobby, at the left) Our lobby OLED TV has shown the same schedule board all day for months. Now a faint outline of the board stays on the screen even when it shows a video.

**What is it?**
(the options come in an order that depends on the seed of the question)
- Burn-in (right)
- Dead pixels — if chosen: Dead pixels are single dots. This is an outline of the board.
- A loose cable — if chosen: A loose cable flickers or tints the whole picture.
- The wrong input source — if chosen: A wrong input shows No signal.

After the answer: the deciding words are marked. Reason: Months of one static image left an outline in an OLED screen. That is burn-in. A screen saver and changing content help prevent it, and it often cannot be undone.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
