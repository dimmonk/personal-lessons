# IT Help Desk: Network hardware, connections and tools

Revision 2, live. Part: Network hardware, connections and tools. Where the subject ends up: Take a ticket you have never seen (a user's email, chat or call about a computer, phone, printer, network, account or security problem) and work it the way a help desk technician does: sort it and set its priority, get the user's story and what changed, try the known fix with a limit, then narrow it down with the cheapest test that splits what works from what does not, fix one thing at a time, confirm with the user and write it up, or hand it on with everything you found; and know every fact and scenario on both CompTIA A+ exams well enough to pass them.

## The why

Heath in Sales moved to desk 14. They plugged their laptop into the wall jack and the light by its network port stays off. Between their laptop and the internet are seven or eight parts in a row, and any one could be the fault.
A good technician knows what each part does, so a missing light points at one stretch of the path. Here you learn the devices, the kinds of line and network, the servers, and the cable tools.

## Step 1: The path from a desk to the internet

Each part on the path does one job.
A network card (NIC) is the part inside the computer that joins it to a network; ipconfig lists it as the adapter. Its MAC address is 12 hexadecimal digits (0 to 9, A to F), such as 3C:52:82:1A:9F:07, burned in by the maker. It stays the same when the IP address changes.
Ethernet is the name for wired networks. Its cable ends in an RJ45 plug, the wide plug with a clip. A telephone cable has the narrower RJ11.

A plain table, "From a desk to the internet, in order":

> Part  |  Its job on the path  (the column heads)
> The computer’s NIC  |  Joins the computer to the cable or the air. Its MAC address names the card.
> Wall jack and cable  |  Carry the signal to the wiring closet, the small room where a floor’s cables meet.
> Patch panel  |  Where the wall jacks’ cables end, pushed into slots at its back. Short patch cables join its front ports to the switch. It has no power.
> Switch  |  Joins the computers of one network. It learns each MAC address and sends a message only to the port it is for.
> Access point  |  Joins Wi-Fi devices to the wired network. It sits on a cable from a switch.
> Router  |  Joins two networks, the office and the internet, and passes traffic between them by IP address.
> Firewall  |  Checks the traffic that crosses it against rules, such as a port number, and lets it through or blocks it.
> Modem or ONT  |  Changes the provider’s line signal into one the router understands; the kind of line decides which.

## Step 2: Two kinds of switch, and power over the cable

An unmanaged switch has nothing to configure: plug cables in and it works. A managed switch has a login page, where a network technician can turn ports on or off, split them into separate groups (VLANs, so guests cannot reach accounting) and see what each port does. Changing it is the network team’s job, not the help desk’s.
PoE, Power over Ethernet, sends power with data over one cable, so an access point, phone or camera can sit where there is no outlet. A PoE switch has power built into its ports. A PoE injector is a small box between a non-PoE switch and the device that adds the power.

A plain table, "PoE standards; a cable run is at most 100 meters":

> Standard  |  Power at the switch port (the device gets a little less)  (the column heads)
> PoE (802.3af)  |  up to 15.4 watts
> PoE+ (802.3at)  |  up to 30 watts
> PoE++ (802.3bt)  |  up to 60 watts, or up to 90 watts on the stronger type

A device that needs more than its port gives will not run. A run longer than 100 meters needs another switch in between.

## Step 3: The line from the provider

The line reaches the building in one of six ways; the way decides the box that ends it.

A plain table, "Internet connection kinds":

> Kind  |  How it arrives  |  What to know  (the column heads)
> Fiber  |  Light through glass, ending in an ONT (optical network terminal)  |  Often the fastest, and as fast uploading as downloading
> Cable  |  Coax (the round cable of cable TV), ending in a cable modem  |  The neighborhood shares the line, so it can be slower in the evening
> DSL  |  The telephone line (RJ11 plug), ending in a DSL modem  |  Slower the farther the home is from the provider’s equipment
> Satellite  |  A dish aimed at a satellite  |  The signal goes far up and back, so each reply is slow to start (high latency), even when the speed is good. Newer low-orbit services have a shorter delay.
> Cellular  |  The cell phone network, through a phone’s hotspot or a cellular router  |  No wire, but speed follows the signal and there may be a data limit. A good choice where a tower is in reach and wires are not.
> WISP  |  A wireless internet provider: a roof antenna aimed at the provider’s tower  |  For places the wires do not reach. It needs a clear line to the tower.

## Step 4: Kinds of network

A plain table, "Kinds of network":

> Name  |  What it covers  |  Example  (the column heads)
> PAN, personal area network  |  A few meters around one person  |  A phone with earbuds and a watch
> LAN, local area network  |  One building or office  |  The desks and printers on a floor
> WLAN, wireless LAN  |  A LAN joined by Wi-Fi  |  Laptops and phones in the same office
> MAN, metropolitan area network  |  A city or a large campus  |  A school district’s buildings across a town
> WAN, wide area network  |  Offices far apart, in different cities or countries  |  The link between a head office and a branch in another state
> SAN, storage area network  |  A fast network that joins servers to shared storage; users’ computers are not on it  |  Six servers sharing one pool of disks

## Step 5: Servers: the jobs a network depends on

A server role is the one job a server does for the network.

A plain table, "Server roles":

> Role  |  Its job  (the column heads)
> DNS  |  Turns a name such as a web address into the IP address
> DHCP  |  Hands out IP addresses to devices as they join
> File share  |  Holds shared folders that people open from their desks
> Print  |  Holds the printers and the queue, the list of jobs waiting to print
> Mail  |  Sends, receives and stores email
> Web  |  Serves web pages to browsers
> Database  |  Stores records that programs read and change
> Syslog  |  Collects the log messages that many devices send, so they can be read in one place
> NTP  |  Keeps every clock on the network the same. Sign-in checks can fail when two clocks differ by about five minutes.
> AAA  |  Authentication (who are you), authorization (what may you use), accounting (what did you do).

A plain table, "Network appliances: boxes built for one network job":

> Appliance  |  Its job  (the column heads)
> Spam gateway  |  Filters incoming email before it reaches the mail server
> UTM, unified threat management  |  A firewall with an antivirus, a content filter and an intruder alarm (spots break-in attempts) in one box
> Load balancer  |  Shares requests among identical servers, and skips one that has failed
> Proxy server  |  Makes web requests for the users; it can block sites and keep copies of popular pages

Two more things sit on company networks. SCADA controls machines in factories, power and water plants; it is often old and hard to patch. IoT devices are ordinary things with a network connection: cameras, thermostats, door locks. Many ship with a weak password: change it. Keep both apart from the office computers.

## Step 6: The technician’s network tools

A plain table, "Tools and the job each does":

> Tool  |  Its job  (the column heads)
> Cable stripper  |  Takes the outer jacket off a cable without nicking the wires
> Crimper  |  Squeezes an RJ45 plug onto the end of a cable
> Punchdown tool  |  Pushes wire ends into the slots of a patch panel and trims them. Pushing a loose wire down again remakes the contact.
> Cable tester  |  Shows whether each of the eight wires reaches the right pin at the other end: a break (open), a short, wires in the wrong order
> Toner probe  |  A tone generator on one end makes a signal; a probe wand held near cables elsewhere squeals at the right one. It finds which cable is which.
> Loopback plug  |  A plug that wires a port’s sending pins back to its receiving pins, so the port can be tested alone
> Wi-Fi analyzer  |  An app that lists nearby Wi-Fi networks, their channels and signal strength. A channel is one slice of the radio band; two networks on the same one talk over each other.
> Network tap  |  Copies the traffic passing along a cable to an analyzer without stopping it

For a bad wire, redo the cheap part first: punch it down again, or crimp a new plug. Pull a new cable only when that did not help.

## Step 7: Replace the box with the lights

A wrong idea, marked wrong: “The internet is down, so the router is broken. Swap the router.”
The right line: Walk the path and find the first part that is not doing its job: is the link light on at the computer, do other desks on the same switch work, do the router and modem show their lights?

## Step 8: A worked example

A chat, with its history: "Heath, Sales", Chat with the help desk.

> (Heath, Sales, at the left) I moved to desk 14. I plugged my laptop into the wall jack and I have no network. The little light by the laptop’s network port is off. My first week, please help.

A plain table, "The path from desk 14":

> Part  |  What is known  (the column heads)
> Wall jack B-14  |  Cable runs to the patch panel in the wiring closet
> Patch panel port 14  |  A patch cable joins it to port 14 of the switch
> The switch  |  Managed, in the closet. Ports 1 to 13 are in use; port 14 has been empty
> Router and modem  |  Other desks on the floor are online, so these work
> This desk’s rule  |  Changes to switch settings belong to the network team. Hand on what you found.

Before the working, the learner may commit to a choice (not scored, not stored):
**You plug Heath’s laptop into the working jack at desk 15 and the light comes on. What does that show?**
(the options come in an order that depends on the seed of the question)
- The laptop’s network card is not the cause.
- The wall jack at desk 14 is the broken part.
- The patch cable at the switch end, since it is the only cable in play.
- The router is the broken part.

The working, one step at a time:
1. Write down every part on desk 14’s path that could leave the light off.: The laptop’s network card; the wall jack and the cable behind it; the punched-down end at the patch panel; the patch cable to the switch; port 14 on the switch.
1. Say what each part does for the whole, and which parts other desks share.: The router and modem serve the whole floor and other desks work, so they are cleared without a test. The switch also serves other desks, but only port 14 matters here.
1. Name your favorite cause and test it with a part known to work.: The laptop’s card: the last two laptops from that batch had a bad one. Plug the laptop into the jack at desk 15 that a neighbor is using.
1. Walk the path from the desk outward, cutting it with the cheapest check.: In the closet, port 14 on the switch has no light, even with the patch cable swapped for one known to work. The switch’s own page costs less than testing the cable in the wall, so look there first.
1. Look at the next part, the switch’s own page.: The switch is managed. Its page shows port 14 as disabled: someone turned unused ports off. That explains the dark light, so the cable tester is not needed yet. If the light stays off after the port is on, the cable tester comes next.
1. Decide who changes it, by the desk’s rule.: This desk’s rule says switch settings belong to the network team. Hand it on with what you found: the laptop works in the jack at desk 15, the patch cable was swapped, port 14 shows disabled.

Then the answer: The laptop’s network card is not the cause. The light is off at the computer, so the fault is on the path from the card to the switch. A card that works in another jack is cleared. Each part does one job, so the next cheapest cut is the closet: no light at port 14, even with a good patch cable, and a managed switch that shows the port disabled. This assumes one fault at a time.

## Step 9: Questions

6 questions, listed, with help (shown). A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 1

A chat, with its history: "Harold, Office manager", Chat with the help desk.

> (Harold, Office manager, at the left) **At 9:10 all twelve computers and the printer on the third floor lost the network at the same moment. The second and fourth floors are fine. Every cable on the third floor ends in one box in the closet, and its lights are all dark. Where do you look first?**

Help on screen: the words that decide it are marked.

**Where do you look first?**
(the options come in an order that depends on the seed of the question)
- At the closet box that every third-floor cable shares: its power (right)
- At each wall jack on the floor, one after another — if chosen: Twelve jacks failing in the same minute is not twelve faults. The shared part is the one to test.
- At the router and modem, since the internet is down — if chosen: The second and fourth floors are online through that same router and modem, so they work.
- At the network card in the first laptop to complain — if chosen: Twelve computers and a printer did not break their cards together.

After the answer: the deciding words are marked. Reason: Everything on one floor failed together and the other floors work, so the fault is in the part only that floor shares. That is the switch in the closet, and its dark lights point at its power. Each wall jack, and each card, serves one desk. The router serves all floors.

#### Item 2

A chat, with its history: "Jon, Warehouse", Chat with the help desk.

> (Jon, Warehouse, at the left) **In the warehouse, scanners and phones cannot find any Wi-Fi. A laptop plugged into a wall jack there works fine. There is a cable from the closet switch to a bracket on the warehouse wall. What is missing?**

Help on screen: the words that decide it are marked.

**What is missing?**
(the options come in an order that depends on the seed of the question)
- A device on that cable that turns the wired network into Wi-Fi (right)
- A faster line from the internet provider — if chosen: The wired laptop works, so the line is fine. The scanners have no radio network to join.
- A second modem beside the first one — if chosen: A modem ends the provider’s line. It adds no Wi-Fi inside the warehouse.
- A larger switch in the closet — if chosen: A switch passes data between cables. It has no radio, so the scanners still cannot join.

After the answer: the deciding words are marked. Reason: The wired side works, and what the scanners lack is a radio. An access point cabled to the switch adds it. A faster line, a modem or a larger switch changes nothing for Wi-Fi.

#### Item 3

A chat, with its history: "Maureen, Facilities", Chat with the help desk.

> (Maureen, Facilities, at the left) **We want a Wi-Fi access point on the ceiling of the hall. A network cable runs up there, but there is no power outlet. The closet switch is a managed one with no PoE. Can that one cable bring the power too?**

Help on screen: the words that decide it are marked.

**What brings the power?**
(the options come in an order that depends on the seed of the question)
- PoE: power over the same cable, from a PoE switch or an injector (right)
- The managed switch’s settings page, by turning power on for that port — if chosen: Managed means it has settings. It does not mean it has power built into its ports.
- The access point’s power adapter, plugged into the cable at the closet end — if chosen: A power adapter needs an outlet at its own end. A plain network cable carries no power from it.
- A cable with a fire-rated jacket for the ceiling — if chosen: The jacket is a fire rating. It does not change what the cable carries.

After the answer: the deciding words are marked. Reason: The ceiling has a network cable and no outlet. PoE puts power on the same cable and needs a PoE switch or injector. A managed switch is about settings, not power, and a jacket rating or an adapter does not add power.

#### Item 4

A chat, with its history: "Elif, Farm office", Chat with the help desk.

> (Elif, Farm office, at the left) **Our farm office is far out of town. There is no cable TV line and no phone line, and there is no cell signal at the house. We tried satellite, but the delay made video calls unusable. A provider’s tower 5 miles off has a clear view of our roof. What internet can we get?**

Help on screen: the words that decide it are marked.

**Which connection?**
(the options come in an order that depends on the seed of the question)
- A WISP, through an antenna on the roof aimed at the tower (right)
- Satellite again, with a better dish — if chosen: The delay comes from the long trip to a satellite, so a better dish does not remove it.
- Cellular, through a phone’s hotspot — if chosen: It needs cell signal at the house, and there is none.
- Cable internet, through a cable modem — if chosen: Cable internet comes on coax from the cable TV company. There is no line to the office.

After the answer: the deciding words are marked. Reason: Each fact removes a kind: no cable line, no phone line, no cell signal, and satellite was tried. A clear view of a provider’s tower is what a WISP needs.

#### Item 5

A chat, with its history: "Clark, New hire", Chat with the help desk.

> (Clark, New hire, at the left) **The plastic clip on the end of a 20-foot network cable snapped off, so the cable falls out of the port. The cable and its wires look fine. What is the cheapest fix that keeps this cable?**

Help on screen: the words that decide it are marked.

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Cut off the old plug, strip the end and crimp on a new plug (right)
- Push the wire ends down into a patch panel slot — if chosen: A punchdown tool seats wires in a panel or block. That does not put a plug on the end.
- Find the broken part with a toner probe — if chosen: A toner probe tells cables apart. The broken part is already in your hand.
- Throw the cable away and pull a new one through the wall — if chosen: This is a loose cable, not one in the wall, and the wires are fine. A new plug costs far less.

After the answer: the deciding words are marked. Reason: Only the plug is broken, so redo the plug: cut, strip, crimp. A punchdown tool works on panels, a toner probe finds cables, and a new cable is the last step, not the first.

#### Item 6

A chat, with its history: "Annette, Operations", Chat with the help desk.

> (Annette, Operations, at the left) **A new hire plugs in their laptop. The link light is on, but ipconfig shows an address starting 169.254. The computers already at their desks keep working. Which server role is not answering new devices?**

Help on screen: the words that decide it are marked.

**Which role is not answering?**
(the options come in an order that depends on the seed of the question)
- DHCP (right)
- DNS — if chosen: DNS turns names into addresses. A newcomer would still get an address and fail only on names.
- NTP — if chosen: NTP keeps clocks the same. It gives out no addresses.
- AAA — if chosen: AAA checks who people are. It gives out no addresses.

After the answer: the deciding words are marked. Reason: A new device with a 169.254 address got no answer when it asked for one, while the old ones still hold theirs. That is DHCP. DNS, NTP and AAA do other jobs.

Then a screen: you can stop here, your place is kept.

## Step 10: Questions

11 questions, shuffle. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 7

A chat, with its history: "Maeve, Intern", Chat with the help desk.

> (Maeve, Intern, at the left) Jack B-22 is dead. In the closet, its patch cable lights no port on the switch. When I move the same patch cable to another switch port, the light comes on at once. Where is the fault?

**Where is the fault?**
(the options come in an order that depends on the seed of the question)
- In the first switch port (right)
- In the cable in the wall behind jack B-22 — if chosen: That cable just carried a working link. It is cleared.
- In the laptop’s network card — if chosen: The laptop made a link through the other port. Its card is cleared.
- In the router, which shares the switch — if chosen: Nothing on the router changed between the two tries.

After the answer: the deciding words are marked. Reason: A light in the second port means the whole stretch from the laptop to the panel and the patch cable works. The one thing that changed is the port, so the port is the fault. This assumes one fault at a time.

#### Item 8

A chat, with its history: "Dmitri, Security", Chat with the help desk.

> (Dmitri, Security, at the left) A parking-lot camera lists its power need as PoE+ (802.3at). The closet switch ports are basic PoE (802.3af) and we do not want to replace the switch. What do you add?

**What do you add?**
(the options come in an order that depends on the seed of the question)
- A PoE+ (802.3at) injector between the switch and the camera cable (right)
- A basic PoE (802.3af) injector, the same standard as the switch — if chosen: Basic PoE gives up to 15.4 watts at the port, less than a PoE+ camera needs.
- A second patch panel for the camera — if chosen: A patch panel has no power to add.
- A network tap at the camera — if chosen: A tap copies traffic for an analyzer. It adds no power.

After the answer: the deciding words are marked. Reason: The switch has no PoE+ and is not to be replaced, and the camera needs the stronger standard. A PoE+ injector adds up to 30 watts on that one cable. A basic injector gives too little.

#### Item 9

A chat, with its history: "Nathaniel, Dock office", Chat with the help desk.

> (Nathaniel, Dock office, at the left) Our dock office uses a satellite dish. A speed test shows 90 Mbps down, which is good, but video calls lag and echo. The same test shows a delay of 600 milliseconds. Why?

**Why would that happen?**
(the options come in an order that depends on the seed of the question)
- Each reply makes a long trip up to a satellite and back, so it starts late (right)
- The neighbors share the line and it is busy — if chosen: Sharing the line is the better-known fault of cable. The test here shows a good speed with a long delay.
- The office is too far from the provider’s equipment — if chosen: Distance from the provider slows DSL, and a dish does not depend on it.
- The download speed is too low for video — if chosen: The test shows 90 Mbps, which is plenty. The delay is what hurts a call.

After the answer: the deciding words are marked. Reason: A good speed with a long delay is satellite: each reply travels far up and back. Shared lines are known on cable and distance on DSL.

#### Item 10

A chat, with its history: "Ann, School district", Chat with the help desk.

> (Ann, School district, at the left) Our district links its nine schools, all in one town, with its own fiber so that every school reaches one central server. No school is in another city. What kind of network is that?

**Which kind of network?**
(the options come in an order that depends on the seed of the question)
- A MAN (right)
- A LAN — if chosen: A LAN covers one building or office. This links nine buildings across town.
- A WAN — if chosen: A WAN joins offices far apart, in different cities or countries. These schools are in one town.
- A PAN — if chosen: A PAN is a few meters around one person.

After the answer: the deciding words are marked. Reason: Nine buildings across one town make a network the size of a city: a MAN. A LAN stays in a building, and a WAN joins places in different cities.

#### Item 11

A chat, with its history: "Kamal, Cabling crew", Chat with the help desk.

> (Kamal, Cabling crew, at the left) Twenty-four unlabeled cables come out of the wall to the patch panel. All of them are fine. I need to know which one goes to jack B-22. What do I use?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A toner probe: a tone at the jack, a wand over the cables (right)
- A cable tester, one cable at a time — if chosen: A cable tester shows whether the wires of a cable are good. They all are, so it does not say which cable is B-22’s.
- A loopback plug in the panel — if chosen: A loopback plug tests a port. It cannot trace a cable.
- A punchdown tool on each slot — if chosen: A punchdown tool seats wires. It can pull good cables loose and trace none.

After the answer: the deciding words are marked. Reason: The cables are all good and the question is which is which. A toner probe is for that. A tester checks the wires of a cable already found.

#### Item 12

A chat, with its history: "Nkosana, Desktop team", Chat with the help desk.

> (Nkosana, Desktop team, at the left) I made a patch cable myself. It shows a link, but copies keep dropping. I think two wires are in the wrong order or one is not touching its pin. Which tool shows that?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A cable tester (right)
- A crimper, squeezed again on the plug — if chosen: A crimper may re-seat the plug, but it shows nothing about which wire is wrong.
- A Wi-Fi analyzer — if chosen: A Wi-Fi analyzer reads radio signals, not the wires of a cable.
- A network tap — if chosen: A tap copies live traffic for an analyzer. It does not check wires.

After the answer: the deciding words are marked. Reason: The question is whether each of the eight wires reaches the right pin. A cable tester shows an open wire, a short, or a wrong order.

#### Item 13

A chat, with its history: "Ike, IT manager", Chat with the help desk.

> (Ike, IT manager, at the left) At ten every morning the internet line is full because many people watch the same training videos, and we also want gambling sites blocked. We want one server of ours to make the web requests for every desk. What is it?

**What is it?**
(the options come in an order that depends on the seed of the question)
- A proxy server (right)
- A load balancer — if chosen: A load balancer shares requests among identical servers. It does not fetch pages for desks.
- A spam gateway — if chosen: A spam gateway filters incoming email.
- A DHCP server — if chosen: DHCP hands out addresses. It does not fetch or block pages.

After the answer: the deciding words are marked. Reason: Copies of popular pages save the line, and blocking sites and fetching pages for every desk are a proxy’s jobs. The other boxes handle servers, email or addresses.

#### Item 14

A chat, with its history: "Herbert, Facilities", Chat with the help desk.

> (Herbert, Facilities, at the left) A new camera needs 20 watts at the camera. The closet has two ports: basic PoE, up to 15.4 watts at the port, and PoE+, up to 30 watts at the port. Which port do you use?

**Which port?**
(the options come in an order that depends on the seed of the question)
- The PoE+ port, up to 30 watts (right)
- The basic PoE port, up to 15.4 watts — if chosen: Basic PoE gives less than the 20 watts the camera needs, so it will not run.
- Either port, since both are PoE — if chosen: The two standards give different power. A device that needs more than its port gives will not run.
- Either port, with a longer cable to make up the power — if chosen: A longer cable adds no power, and a run over 100 meters fails.

After the answer: the deciding words are marked. Reason: The camera needs 20 watts and basic PoE tops out at 15.4. Only PoE+ covers it.

#### Item 15

A chat, with its history: "Colin, Security", Chat with the help desk.

> (Colin, Security, at the left) Our new in-house app on port 8443 does not open from the other building, but ping to its server works. The app is running. Which part on the path checks traffic by port number against rules?

**Which part do you check?**
(the options come in an order that depends on the seed of the question)
- The firewall, for a rule that allows 8443 (right)
- The patch panel, for a loose cable — if chosen: A loose cable would break ping too, and a patch panel judges nothing.
- The access point, for its radio channel — if chosen: An access point has no rule about port 8443.
- The modem, for its line signal — if chosen: A modem ends the provider’s line. Other services work.

After the answer: the deciding words are marked. Reason: Ping works, so the path is whole. One port does not get through, and a firewall is the part that allows or blocks by port.

#### Item 16

A chat, with its history: "Verna, Cabling crew", Chat with the help desk.

> (Verna, Cabling crew, at the left) Jack B-40 is dead. A cable tester shows wire 3 open between the jack and the panel. I have not touched either end yet. What is the cheapest next step?

**What do you do?**
(the options come in an order that depends on the seed of the question)
- Punch wire 3 down again at the jack and at the panel, then test again (right)
- Run a new cable through the wall — if chosen: That is the most work and the last step. The ends have not been redone yet.
- Crimp a new plug on the patch cable — if chosen: The open wire is in the wall cable between the jack and the panel, not in a plug.
- Swap the jack’s patch cable and the laptop together — if chosen: Two changes at once would not show which one did it, and neither touches the open wire.

After the answer: the deciding words are marked. Reason: The ends have not been redone, so redo them first: punching the wire down again is cheap and often mends a wire that is open. A new wall cable comes only if the wire is still open.

#### Item 17

A chat, with its history: "Dan, Office", Chat with the help desk.

> (Dan, Office, at the left) Since 8 this morning everyone’s sent email stays in the outbox and nothing new arrives. Web pages open and shared folders work. Which of our server roles is down?

**Which role?**
(the options come in an order that depends on the seed of the question)
- The mail server (right)
- The web server — if chosen: Web pages open, so the web job is working.
- The file share — if chosen: Shared folders work, so the file share is up.
- DNS — if chosen: Web pages open by name, so DNS is working.

After the answer: the deciding words are marked. Reason: Only email fails. Pages open, so DNS is up, and folders work, so the file share is up. The mail server is the one left.

Then a screen: you can stop here, your place is kept.

## Step 11: Questions

11 questions, shuffle, with about 30% from earlier lessons mixed in, unlabeled. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.

#### Item 18

A chat, with its history: "Tara, East wing", Chat with the help desk.

> (Tara, East wing, at the left) Wi-Fi is slow in the east wing and fine in the west wing. The offices around the east wing have their own Wi-Fi. I think ours shares a channel with one of them. What shows that?

**Which tool shows nearby networks, their channels and their signal strength?**
(the options come in an order that depends on the seed of the question)
- A Wi-Fi analyzer (right)
- A network tap — if chosen: A tap copies the traffic on a cable. It reads no radio signals.
- A toner probe — if chosen: A toner probe traces cables. It reads no radio signals.
- A cable tester — if chosen: A cable tester checks the wires of a cable, not the air.

After the answer: the deciding words are marked. Reason: The question is about the air: which networks are near, on which channel, how strong. A Wi-Fi analyzer shows that. The three cable tools read nothing from the air.

#### Item 19

A chat, with its history: "Aileen, Server room", Chat with the help desk.

> (Aileen, Server room, at the left) The network port on a server may be dead. Before we order a new card, I want to test the port by itself, with no cable and no switch in the way. What do I use?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A loopback plug (right)
- A cable tester on the cable to the switch — if chosen: That tests the cable, and the cable is not what is under test.
- A toner probe on the cable — if chosen: A toner probe traces cables. It tests no port.
- A network tap between the server and the switch — if chosen: A tap copies live traffic. With a dead port there may be none to copy.

After the answer: the deciding words are marked. Reason: The part under test is the port alone, so nothing else may be in the loop. A loopback plug joins the port’s send to its receive and tests it by itself.

#### Item 20

A chat, with its history: "Sid, Security", Chat with the help desk.

> (Sid, Security, at the left) We want to watch a copy of all the traffic between the file server and the switch with an analyzer, without cutting the link or changing anything on it.

**Which device?**
(the options come in an order that depends on the seed of the question)
- A network tap (right)
- A loopback plug — if chosen: A loopback plug would join the port to itself and stop the link.
- A PoE injector — if chosen: A PoE injector adds power to a cable. It copies nothing.
- A cable stripper — if chosen: A cable stripper takes off a jacket, and that would cut the link.

After the answer: the deciding words are marked. Reason: Watching a copy of the traffic on one cable, without stopping it, is what a network tap does.

#### Item 21

A chat, with its history: "Malcolm, Security", Chat with the help desk.

> (Malcolm, Security, at the left) The VPN, the office Wi-Fi and the switches each keep their own list of accounts. When someone leaves we remove them in three places, and after last night’s break-in we could not tell who had signed in. One server should do all of it. Which role?

**Which role?**
(the options come in an order that depends on the seed of the question)
- AAA (right)
- Syslog — if chosen: Syslog collects log messages. It does not check anyone’s account, so the three lists would stay.
- DHCP — if chosen: DHCP hands out IP addresses and does not check accounts.
- DNS — if chosen: DNS turns names into addresses and does not check accounts.

After the answer: the deciding words are marked. Reason: One place to check who signs in, what they may use and what they did is AAA. Syslog collects messages that others send but does not decide who is let in.

#### Item 22

A chat, with its history: "Zainab, Network team", Chat with the help desk.

> (Zainab, Network team, at the left) We have to turn off the unused ports and put the guest computers on a separate group of ports from the accounting computers. Which of these can do that?

**Which switch?**
(the options come in an order that depends on the seed of the question)
- A managed switch (right)
- An unmanaged switch — if chosen: An unmanaged switch has nothing to configure. Plug in and it works.
- An unmanaged PoE switch — if chosen: PoE adds power to the ports. An unmanaged switch still has no settings.
- A patch panel — if chosen: A patch panel is not a switch and has no settings.

After the answer: the deciding words are marked. Reason: Turning off ports and splitting them into groups needs settings. A managed switch has them. An unmanaged one, with or without PoE, has none.

#### Item 23

A chat, with its history: "Stella, Network team", Chat with the help desk.

> (Stella, Network team, at the left) The office printer gets a different IP address now and then. We want to recognize it by something that stays fixed on the printer’s own network card, and that the switch also learns. What is that?

**What is it?**
(the options come in an order that depends on the seed of the question)
- Its MAC address (right)
- Its IP address — if chosen: The IP address is the one that changes. It is handed out, not burned in.
- Its name in the print queue — if chosen: A name in the queue is typed by a person and can be changed.
- Its serial number on the sticker — if chosen: The sticker is printed on the box. The network cannot read it, and the card does not send it.

After the answer: the deciding words are marked. Reason: The thing that stays while the IP address changes, and that the switch learns, is the MAC address, burned in on the network card.

#### Item 24

A chat, with its history: "Cedric, Cabling crew", Chat with the help desk.

> (Cedric, Cabling crew, at the left) Jack B-31 is dead. I swapped the patch cable at the panel and then moved the laptop to another jack, and only B-31 fails. A cable tester found wire 6 open in the wall cable. I punched wire 6 down again at the panel and at a new jack, and tested again: wire 6 is still open.

**What do you do next?**
(the options come in an order that depends on the seed of the question)
- Run a new cable between the jack and the panel (right)
- Punch wire 6 down again at both ends and test once more — if chosen: That was just done, and the tester still shows the break. Doing it again tests nothing new.
- Swap the patch cable at the switch end too — if chosen: The patch cable was already swapped and the break was found in the wall, so another swap tests nothing new.
- Reset the switch and see whether the jack comes back — if chosen: The tester has already found the fault in the cable. A reset tests a part that was cleared.

After the answer: the deciding words are marked. Reason: Every cheaper step has been done: the patch cable, the other jack, the ends punched down again with a new jack, and a tester that still finds wire 6 open. The break is inside the wall, so a new wall cable is the right step now.

#### Item 25

A chat, with its history: "Vernon, Data center", Chat with the help desk.

> (Vernon, Data center, at the left) We have six servers that share one big pool of disks over a separate fast network of their own. Nobody’s desk computer is on it. What kind of network is that?

**Which kind?**
(the options come in an order that depends on the seed of the question)
- A SAN (right)
- A LAN — if chosen: A LAN is the users’ own network of a building. This one carries storage for servers only.
- A WAN — if chosen: A WAN joins offices far apart. This is inside one room.
- A WLAN — if chosen: A WLAN is a LAN over Wi-Fi.

After the answer: the deciding words are marked. Reason: A separate fast network that joins servers to shared storage, with no user computers on it, is a SAN.

#### Item 26

A chat, with its history: "Alan, Accounting", Chat with the help desk.

> (Alan, Accounting, at the left) This morning the shared drive S: is gone from every computer in accounting. Web pages open, email arrives, printing works, and nobody has trouble signing in. Which of our server roles is down?

**Which role is down?**
(the options come in an order that depends on the seed of the question)
- The file share (right)
- The print server — if chosen: Printing works, so the print server is up.
- DNS — if chosen: Web pages open by name, so DNS is working.
- DHCP — if chosen: The computers still have addresses and work, so DHCP is not the fault.

After the answer: the deciding words are marked. Reason: Everything works except the shared folders. Web pages by name rule out DNS, working computers rule out DHCP, and printing rules out the print server. That leaves the file share.

#### Item 27

A chat, with its history: "Zara, Marketing", Chat with the help desk.

> (Zara, Marketing, at the left) Customers say our company website will not load. Our staff can browse other sites and email works. The site runs on one of our own servers. Which role is down?

**Which role?**
(the options come in an order that depends on the seed of the question)
- The web server (right)
- The mail server — if chosen: Email works, so the mail job is up.
- DHCP — if chosen: Staff computers have addresses and browse other sites, so DHCP is up.
- The print server — if chosen: Printing has nothing to do with web pages.

After the answer: the deciding words are marked. Reason: Only our own site fails while other sites and email work, so the server that serves our pages is down.

#### Item 28

A chat, with its history: "Hugh, Front desk", Chat with the help desk.

> (Hugh, Front desk, at the left) Every printer shows ready, yet nothing prints. On the print server a list of waiting jobs grows by the minute. Web pages and shared folders work. Which part is stuck?

**Which part?**
(the options come in an order that depends on the seed of the question)
- The print server’s queue (right)
- The file share — if chosen: Shared folders work, so the file share is up.
- DNS — if chosen: Web pages open, so DNS is working.
- The printers’ paper trays — if chosen: The printers show ready, so paper is not what is stopping the jobs.

After the answer: the deciding words are marked. Reason: The printers are ready, the jobs are waiting and the rest works, so the queue on the print server is stuck.

Then a screen: you can stop here, your place is kept.

## The check

8 new questions, no help. No answer is shown until the end. The questions come in mixed order.

To pass:
- At least 7 right

#### Check question 29

A chat, with its history: "Bree, Branch office", Chat with the help desk.

> (Bree, Branch office, at the left) The provider just installed fiber. A thin glass cable from the street ends in a small box on the wall with a power cord, and an Ethernet cable runs from it to our router. Our old cable modem from the coax days is still on the shelf. How do I hook it up?

**What do you do with the old cable modem?**
(the options come in an order that depends on the seed of the question)
- Leave it out; the box on the wall is the ONT and the router plugs into that (right)
- Plug the glass cable into it; any modem ends any line — if chosen: A cable modem ends a coax line. It has no port for light in glass.
- Plug the glass cable straight into the router — if chosen: A router cannot read light. The ONT changes it into a network cable.
- Chain them: the ONT into the cable modem, then the router — if chosen: The ONT already gives the router an Ethernet cable, so the cable modem adds nothing to a fiber line.

After the answer: the deciding words are marked. Reason: The line is fiber, light in glass, and the box that changes it into a network cable is the ONT. A cable modem ends coax, so it has no place on this line.

#### Check question 30

A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **A switch tells devices apart by an address that the maker burned into each network card, written as 12 hexadecimal digits such as 3C:52:82:1A:9F:07. Name it.**

**Type the name.**
- One box and "Answer" (shut until something is typed; Enter sends it), and "Not yet", which answers with nothing and shows the answers. "Not sure? Tap Not yet to see the answers." Nothing is marked before the answer.
- What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.
- After: the mark (Right, Not this one, or "Not yet") with "You said: …", then the accepted answers, every one, the one given marked "You gave this one" (and "Words in brackets are optional." when some words are in brackets). After a miss with something typed: "If what you said means the same, say so. It counts this time, and the question comes back later to be sure." with the button "My answer means the same". It counts right in that sitting (shown as "Counted on your word"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.
- The accepted answers shown after (Accepted answers):
  - MAC address
  - MAC
  - physical address
  - media access control address

After the answer: Reason: The MAC address is burned into the network card and is written as 12 hexadecimal digits. A switch uses it to send each message to the right port; the IP address is handed out and can change.

#### Check question 31

A chat, with its history: "Casper, Home office", Chat with the help desk.

> (Casper, Home office, at the left) My internet comes in on the telephone line through a box with an RJ11 cable. When I moved farther from town, it got slower. Which connection is it?

**Which connection?**
(the options come in an order that depends on the seed of the question)
- DSL (right)
- Cable — if chosen: Cable internet comes on coax and is slowed by the neighbors, not by distance.
- Fiber — if chosen: Fiber arrives as light in glass, not on a telephone line.
- Satellite — if chosen: Satellite uses a dish, not a telephone line.

After the answer: the deciding words are marked. Reason: The telephone line and an RJ11 cable mean DSL, and its speed falls the farther the home is from the provider. Cable, fiber and satellite arrive differently.

#### Check question 32

The question, read aloud as above: **Give the short name of the kind of network that covers a city or a large campus.**

**Type the name.**
- The same box, checking and feedback as above.
- The accepted answers shown after (Accepted answers):
  - MAN
  - metropolitan area network

After the answer: Reason: A metropolitan area network, a MAN, covers a city or a large campus. A LAN covers a building and a WAN joins offices far apart.

#### Check question 33

A chat, with its history: "Margot, Cabling crew", Chat with the help desk.

> (Margot, Cabling crew, at the left) Twelve new jack cables have been pulled into the closet, and their loose wire ends hang at the back of the patch panel. Which tool seats them in the slots and trims them?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A punchdown tool (right)
- A crimper — if chosen: A crimper puts a plug on a cable end. A panel has slots, not plugs.
- A cable stripper — if chosen: A stripper takes the jacket off and does not seat the wires.
- A cable tester — if chosen: A cable tester checks the wires afterward and seats none.

After the answer: the deciding words are marked. Reason: Wire ends going into the slots of a panel are the punchdown tool’s job. The crimper makes plugs, the stripper takes jackets off, and the tester checks the result.

#### Check question 34

A chat, with its history: "Claudia, Cabling crew", Chat with the help desk.

> (Claudia, Cabling crew, at the left) Before I crimp a plug on a new cable I have to take the outer jacket off without nicking the wires inside. Which tool?

**Which tool?**
(the options come in an order that depends on the seed of the question)
- A cable stripper (right)
- A punchdown tool — if chosen: A punchdown tool seats wires in slots. It does not strip a jacket.
- A toner probe — if chosen: A toner probe traces cables. It strips nothing.
- A cable tester — if chosen: A cable tester checks the wires afterward.

After the answer: the deciding words are marked. Reason: Removing the jacket without cutting the wires is the job of a cable stripper. The crimper and the tester come after it.

#### Check question 35

A chat, with its history: "Oscar, Security", Chat with the help desk.

> (Oscar, Security, at the left) The logs from the file server and the firewall show times five minutes apart, and some sign-ins fail. Which server role, when it is missing or broken, lets the clocks drift like this?

**Which role?**
(the options come in an order that depends on the seed of the question)
- NTP (right)
- Syslog — if chosen: Syslog collects the log messages. It keeps no clock in step.
- AAA — if chosen: AAA checks accounts. It keeps no clock in step.
- DNS — if chosen: DNS turns names into addresses. It keeps no clock in step.

After the answer: the deciding words are marked. Reason: Clocks that differ by five minutes, with sign-ins failing, are what NTP prevents. Syslog only collects the messages, and AAA checks accounts.

#### Check question 36

A chat, with its history: "Fran, Web team", Chat with the help desk.

> (Fran, Web team, at the left) Our web site runs on three identical servers. We want the visitors’ requests shared out among them, and sent to the others if one fails. What is the box?

**Which appliance?**
(the options come in an order that depends on the seed of the question)
- A load balancer (right)
- A proxy server — if chosen: A proxy makes requests on behalf of users. It does not share visitors among servers.
- A UTM appliance — if chosen: A UTM is a firewall bundle. It does not share visitors among servers.
- A spam gateway — if chosen: A spam gateway filters email.

After the answer: the deciding words are marked. Reason: Sharing requests among identical servers and skipping a failed one is a load balancer’s job. A proxy, a UTM and a spam gateway do other jobs.

## The result

For example "8 of 8: passed" or "6 of 8: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.
