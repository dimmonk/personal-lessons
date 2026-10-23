// IT Help Desk, lesson 16 "Network hardware, connections and tools" (part gear): the worked ticket, the three groups of questions and the reserve for the review.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 1 2.3 (server roles, appliances, SCADA, IoT), 2.5 (router, switches, access point, patch panel, firewall, PoE and its standards,
// cable modem, DSL, ONT, NIC and MAC), 2.7 (six internet connections, six kinds of network) and 2.8 (the eight tools). PoE power at the port: 15.4 W, 30 W, 60 W and 90 W (the device gets a little less).
// Round 2 (docs/subjects/it-support/fixes-l14-17.md): tickets describe the situation, not the table row; four options; PoE standards, server roles, SCADA, IoT, cellular, firewall now asked.
// The way of choosing is the technician's: say what each part does for the whole path, then cut the path with the cheapest test (IT4 follow-the-path, IT5, IT8).
// Four topics: net-devices, net-types, net-tools, servers. Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  // a ticket in a chat, one question about it
  const chat = (id, strand, who, detail, words, prompt, rows, deciding, reason) => item({
    id, strand, blocks: [msg('chat', who, detail, [['m1', words]])], asks: [ask(prompt, rows)], deciding, reason });
  // a name from memory: the question is read in a spoken block, and the accepted answers are the words the lesson teaches
  const say = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt: 'Type the name.', accept }], reason });
  const DEV = 'wrong-device', CON = 'wrong-connection', NET = 'wrong-network', TOOL = 'wrong-tool', ROLE = 'wrong-role', POW = 'wrong-power',
    CAUSE = 'wrong-cause', LINK = 'wrong-link', LOOK = 'mixed-look-alike', NEAR = 'poked-nearest';
  const D = 'net-devices', T = 'net-types', L = 'net-tools', S = 'servers';
  const H = 'Chat with the help desk';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (the laptop's network card) that the jack next door rules out, then the path -----
    item({
      id: 'l16-w-desk', strand: D,
      blocks: [
        msg('chat', 'Ravi, Sales', H, [['d1', 'I moved to desk 14. I plugged my laptop into the wall jack and I have no network. The little light by the laptop’s network port is off. My first week, please help.']]),
        table('The path from desk 14', ['Part', 'What is known'], [
          ['t1', 'Wall jack B-14', 'Cable runs to the patch panel in the wiring closet'],
          ['t2', 'Patch panel port 14', 'A patch cable joins it to port 14 of the switch'],
          ['t3', 'The switch', 'Managed, in the closet. Ports 1 to 13 are in use; port 14 has been empty'],
          ['t4', 'Router and modem', 'Other desks on the floor are online, so these work'],
          ['t5', 'This desk’s rule', 'Changes to switch settings belong to the network team. Hand on what you found.']])],
      asks: [ask('You plug Ravi’s laptop into the working jack at desk 15 and the light comes on. What does that show?', [
        ['The laptop’s network card is not the cause.', true, 'The same laptop and card worked in another jack, so the fault is somewhere on desk 14’s stretch of the path.'],
        ['The wall jack at desk 14 is the broken part.', CAUSE, 'Nothing has been tested on desk 14’s stretch yet. The jack, the cable behind it, the patch cable and the switch port are all still possible.'],
        ['The patch cable at the switch end, since it is the only cable in play.', 'no-split', 'Nothing was tested on it. Plugging into another jack tests the laptop, not desk 14’s own stretch.'],
        ['The router is the broken part.', LINK, 'The router and modem are shared by desks that are online. A fault there would not leave one desk dark.']])],
      steps: [
        { id: 'causes', does: 'Write down every part on desk 14’s path that could leave the light off.', working: 'The laptop’s network card; the wall jack and the cable behind it; the punched-down end at the patch panel; the patch cable to the switch; port 14 on the switch.' },
        { id: 'job', does: 'Say what each part does for the whole, and which parts other desks share.', working: 'The router and modem serve the whole floor and other desks work, so they are cleared without a test. The switch also serves other desks, but only port 14 matters here.' },
        { id: 'favorite', does: 'Name your favorite cause and test it with a part known to work.', working: 'The laptop’s card: the last two laptops from that batch had a bad one. Plug the laptop into the jack at desk 15 that a neighbor is using.', ask: 'a' },
        { id: 'path', does: 'Walk the path from the desk outward, cutting it with the cheapest check.', working: 'In the closet, port 14 on the switch has no light, even with the patch cable swapped for one known to work. The switch’s own page costs less than testing the cable in the wall, so look there first.' },
        { id: 'port', does: 'Look at the next part, the switch’s own page.', working: 'The switch is managed. Its page shows port 14 as disabled: someone turned unused ports off. That explains the dark light, so the cable tester is not needed yet. If the light stays off after the port is on, the cable tester comes next.' },
        { id: 'handon', does: 'Decide who changes it, by the desk’s rule.', working: 'This desk’s rule says switch settings belong to the network team. Hand it on with what you found: the laptop works in the jack at desk 15, the patch cable was swapped, port 14 shows disabled.' }],
      deciding: ['d1', 't3'],
      reason: 'The light is off at the computer, so the fault is on the path from the card to the switch. A card that works in another jack is cleared. Each part does one job, so the next cheapest cut is the closet: no light at port 14, even with a good patch cable, and a managed switch that shows the port disabled. This assumes one fault at a time.' }),

    // ----- group 1: the deciding words are marked, help shown -----
    chat('l16-p-switch', D, 'Mei, Office manager', H, 'At 9:10 all twelve computers and the printer on the third floor lost the network at the same moment. The second and fourth floors are fine. Every cable on the third floor ends in one box in the closet, and its lights are all dark. Where do you look first?',
      'Where do you look first?', [
        ['At the closet box that every third-floor cable shares: its power', true, 'One box serves all twelve desks and the printer, the other floors work, and its lights are dark. A power loss there explains everything at once.'],
        ['At each wall jack on the floor, one after another', 'no-split', 'Twelve jacks failing in the same minute is not twelve faults. The shared part is the one to test.'],
        ['At the router and modem, since the internet is down', LINK, 'The second and fourth floors are online through that same router and modem, so they work.'],
        ['At the network card in the first laptop to complain', 'one-cause', 'Twelve computers and a printer did not break their cards together.']],
      ['m1'], 'Everything on one floor failed together and the other floors work, so the fault is in the part only that floor shares. That is the switch in the closet, and its dark lights point at its power. Each wall jack, and each card, serves one desk. The router serves all floors.'),
    chat('l16-p-ap', D, 'Jon, Warehouse', H, 'In the warehouse, scanners and phones cannot find any Wi-Fi. A laptop plugged into a wall jack there works fine. There is a cable from the closet switch to a bracket on the warehouse wall. What is missing?',
      'What is missing?', [
        ['A device on that cable that turns the wired network into Wi-Fi', true, 'An access point on a cable from the switch adds the radio and puts Wi-Fi devices onto the wired network.'],
        ['A faster line from the internet provider', CAUSE, 'The wired laptop works, so the line is fine. The scanners have no radio network to join.'],
        ['A second modem beside the first one', DEV, 'A modem ends the provider’s line. It adds no Wi-Fi inside the warehouse.'],
        ['A larger switch in the closet', DEV, 'A switch passes data between cables. It has no radio, so the scanners still cannot join.']],
      ['m1'], 'The wired side works, and what the scanners lack is a radio. An access point cabled to the switch adds it. A faster line, a modem or a larger switch changes nothing for Wi-Fi.'),
    chat('l16-p-poe', D, 'Ola, Facilities', H, 'We want a Wi-Fi access point on the ceiling of the hall. A network cable runs up there, but there is no power outlet. The closet switch is a managed one with no PoE. Can that one cable bring the power too?',
      'What brings the power?', [
        ['PoE: power over the same cable, from a PoE switch or an injector', true, 'PoE sends power along with the data over the network cable. A PoE switch or a PoE injector supplies it.'],
        ['The managed switch’s settings page, by turning power on for that port', POW, 'Managed means it has settings. It does not mean it has power built into its ports.'],
        ['The access point’s power adapter, plugged into the cable at the closet end', POW, 'A power adapter needs an outlet at its own end. A plain network cable carries no power from it.'],
        ['A cable with a fire-rated jacket for the ceiling', POW, 'The jacket is a fire rating. It does not change what the cable carries.']],
      ['m1'], 'The ceiling has a network cable and no outlet. PoE puts power on the same cable and needs a PoE switch or injector. A managed switch is about settings, not power, and a jacket rating or an adapter does not add power.'),
    chat('l16-p-wisp', T, 'Cal, Farm office', H, 'Our farm office is far out of town. There is no cable TV line and no phone line, and there is no cell signal at the house. We tried satellite, but the delay made video calls unusable. A provider’s tower 5 miles off has a clear view of our roof. What internet can we get?',
      'Which connection?', [
        ['A WISP, through an antenna on the roof aimed at the tower', true, 'A wireless internet provider reaches places the wires do not, through a fixed antenna aimed at its tower.'],
        ['Satellite again, with a better dish', CON, 'The delay comes from the long trip to a satellite, so a better dish does not remove it.'],
        ['Cellular, through a phone’s hotspot', CON, 'It needs cell signal at the house, and there is none.'],
        ['Cable internet, through a cable modem', CON, 'Cable internet comes on coax from the cable TV company. There is no line to the office.']],
      ['m1'], 'Each fact removes a kind: no cable line, no phone line, no cell signal, and satellite was tried. A clear view of a provider’s tower is what a WISP needs.'),
    chat('l16-p-crimp', L, 'Dee, New hire', H, 'The plastic clip on the end of a 20-foot network cable snapped off, so the cable falls out of the port. The cable and its wires look fine. What is the cheapest fix that keeps this cable?',
      'What do you do?', [
        ['Cut off the old plug, strip the end and crimp on a new plug', true, 'The wires are fine, so only the plug is replaced: cut, strip the jacket, and squeeze a new RJ45 plug on with the crimper.'],
        ['Push the wire ends down into a patch panel slot', TOOL, 'A punchdown tool seats wires in a panel or block. That does not put a plug on the end.'],
        ['Find the broken part with a toner probe', TOOL, 'A toner probe tells cables apart. The broken part is already in your hand.'],
        ['Throw the cable away and pull a new one through the wall', 'part-first', 'This is a loose cable, not one in the wall, and the wires are fine. A new plug costs far less.']],
      ['m1'], 'Only the plug is broken, so redo the plug: cut, strip, crimp. A punchdown tool works on panels, a toner probe finds cables, and a new cable is the last step, not the first.'),
    chat('l16-p-dhcp', S, 'Wes, Operations', H, 'A new hire plugs in his laptop. The link light is on, but ipconfig shows an address starting 169.254. The computers already at their desks keep working. Which server role is not answering new devices?',
      'Which role is not answering?', [
        ['DHCP', true, 'DHCP hands out an address to each device as it joins. The others keep the addresses they already hold, so only a newcomer shows the fault.'],
        ['DNS', ROLE, 'DNS turns names into addresses. A newcomer would still get an address and fail only on names.'],
        ['NTP', ROLE, 'NTP keeps clocks the same. It gives out no addresses.'],
        ['AAA', ROLE, 'AAA checks who people are. It gives out no addresses.']],
      ['m1'], 'A new device with a 169.254 address got no answer when it asked for one, while the old ones still hold theirs. That is DHCP. DNS, NTP and AAA do other jobs.'),

    // ----- group 2: no help -----
    chat('l16-s-patch', D, 'Ned, Intern', H, 'Jack B-22 is dead. In the closet, its patch cable lights no port on the switch. When I move the same patch cable to another switch port, the light comes on at once. Where is the fault?',
      'Where is the fault?', [
        ['In the first switch port', true, 'The same cable, the jack, the cable in the wall and the laptop all produced a link on another port, so only the first port is left.'],
        ['In the cable in the wall behind jack B-22', 'kept-ruled-out', 'That cable just carried a working link. It is cleared.'],
        ['In the laptop’s network card', 'kept-ruled-out', 'The laptop made a link through the other port. Its card is cleared.'],
        ['In the router, which shares the switch', LINK, 'Nothing on the router changed between the two tries.']],
      ['m1'], 'A light in the second port means the whole stretch from the laptop to the panel and the patch cable works. The one thing that changed is the port, so the port is the fault. This assumes one fault at a time.'),
    chat('l16-s-injector', D, 'Pia, Security', H, 'A parking-lot camera lists its power need as PoE+ (802.3at). The closet switch ports are basic PoE (802.3af) and we do not want to replace the switch. What do you add?',
      'What do you add?', [
        ['A PoE+ (802.3at) injector between the switch and the camera cable', true, 'An injector adds power to that one cable, so the switch stays. PoE+ gives up to 30 watts.'],
        ['A basic PoE (802.3af) injector, the same standard as the switch', POW, 'Basic PoE gives up to 15.4 watts at the port, less than a PoE+ camera needs.'],
        ['A second patch panel for the camera', POW, 'A patch panel has no power to add.'],
        ['A network tap at the camera', POW, 'A tap copies traffic for an analyzer. It adds no power.']],
      ['m1'], 'The switch has no PoE+ and is not to be replaced, and the camera needs the stronger standard. A PoE+ injector adds up to 30 watts on that one cable. A basic injector gives too little.'),
    chat('l16-s-lag', T, 'Bo, Dock office', H, 'Our dock office uses a satellite dish. A speed test shows 90 Mbps down, which is good, but video calls lag and echo. The same test shows a delay of 600 milliseconds. Why?',
      'Why would that happen?', [
        ['Each reply makes a long trip up to a satellite and back, so it starts late', true, 'High latency comes with older satellite internet, even when the speed is good.'],
        ['The neighbors share the line and it is busy', CAUSE, 'Sharing the line is the better-known fault of cable. The test here shows a good speed with a long delay.'],
        ['The office is too far from the provider’s equipment', CAUSE, 'Distance from the provider slows DSL, and a dish does not depend on it.'],
        ['The download speed is too low for video', CAUSE, 'The test shows 90 Mbps, which is plenty. The delay is what hurts a call.']],
      ['m1'], 'A good speed with a long delay is satellite: each reply travels far up and back. Shared lines are known on cable and distance on DSL.'),
    chat('l16-s-man', T, 'Ann, School district', H, 'Our district links its nine schools, all in one town, with its own fiber so that every school reaches one central server. No school is in another city. What kind of network is that?',
      'Which kind of network?', [
        ['A MAN', true, 'A metropolitan area network covers a city or a large campus.'],
        ['A LAN', NET, 'A LAN covers one building or office. This links nine buildings across town.'],
        ['A WAN', NET, 'A WAN joins offices far apart, in different cities or countries. These schools are in one town.'],
        ['A PAN', NET, 'A PAN is a few meters around one person.']],
      ['m1'], 'Nine buildings across one town make a network the size of a city: a MAN. A LAN stays in a building, and a WAN joins places in different cities.'),
    chat('l16-s-toner', L, 'Gus, Cabling crew', H, 'Twenty-four unlabeled cables come out of the wall to the patch panel. All of them are fine. I need to know which one goes to jack B-22. What do I use?',
      'Which tool?', [
        ['A toner probe: a tone at the jack, a wand over the cables', true, 'The tone box at the jack makes a signal and the wand squeals at the right cable.'],
        ['A cable tester, one cable at a time', TOOL, 'A cable tester shows whether the wires of a cable are good. They all are, so it does not say which cable is B-22’s.'],
        ['A loopback plug in the panel', TOOL, 'A loopback plug tests a port. It cannot trace a cable.'],
        ['A punchdown tool on each slot', TOOL, 'A punchdown tool seats wires. It can pull good cables loose and trace none.']],
      ['m1'], 'The cables are all good and the question is which is which. A toner probe is for that. A tester checks the wires of a cable already found.'),
    chat('l16-s-tester', L, 'Una, Desktop team', H, 'I made a patch cable myself. It shows a link, but copies keep dropping. I think two wires are in the wrong order or one is not touching its pin. Which tool shows that?',
      'Which tool?', [
        ['A cable tester', true, 'A cable tester shows each wire reach its pin: an open wire, a short, or wires in the wrong order.'],
        ['A crimper, squeezed again on the plug', TOOL, 'A crimper may re-seat the plug, but it shows nothing about which wire is wrong.'],
        ['A Wi-Fi analyzer', TOOL, 'A Wi-Fi analyzer reads radio signals, not the wires of a cable.'],
        ['A network tap', TOOL, 'A tap copies live traffic for an analyzer. It does not check wires.']],
      ['m1'], 'The question is whether each of the eight wires reaches the right pin. A cable tester shows an open wire, a short, or a wrong order.'),
    chat('l16-s-proxy', S, 'Ike, IT manager', H, 'At ten every morning the internet line is full because many people watch the same training videos, and we also want gambling sites blocked. We want one server of ours to make the web requests for every desk. What is it?',
      'What is it?', [
        ['A proxy server', true, 'A proxy makes web requests on behalf of users, can block sites, and keeps copies of popular pages.'],
        ['A load balancer', ROLE, 'A load balancer shares requests among identical servers. It does not fetch pages for desks.'],
        ['A spam gateway', ROLE, 'A spam gateway filters incoming email.'],
        ['A DHCP server', ROLE, 'DHCP hands out addresses. It does not fetch or block pages.']],
      ['m1'], 'Copies of popular pages save the line, and blocking sites and fetching pages for every desk are a proxy’s jobs. The other boxes handle servers, email or addresses.'),

    // ----- group 3: tickets that need two or more devices told apart -----
    chat('l16-g-wifi', L, 'Tara, East wing', H, 'Wi-Fi is slow in the east wing and fine in the west wing. The offices around the east wing have their own Wi-Fi. I think ours shares a channel with one of them. What shows that?',
      'Which tool shows nearby networks, their channels and their signal strength?', [
        ['A Wi-Fi analyzer', true, 'A Wi-Fi analyzer lists nearby networks with channel and signal strength.'],
        ['A network tap', TOOL, 'A tap copies the traffic on a cable. It reads no radio signals.'],
        ['A toner probe', TOOL, 'A toner probe traces cables. It reads no radio signals.'],
        ['A cable tester', TOOL, 'A cable tester checks the wires of a cable, not the air.']],
      ['m1'], 'The question is about the air: which networks are near, on which channel, how strong. A Wi-Fi analyzer shows that. The three cable tools read nothing from the air.'),
    chat('l16-g-loop', L, 'Hal, Server room', H, 'The network port on a server may be dead. Before we order a new card, I want to test the port by itself, with no cable and no switch in the way. What do I use?',
      'Which tool?', [
        ['A loopback plug', true, 'A loopback plug wires the port’s sending pins to its receiving pins, so the port tests itself.'],
        ['A cable tester on the cable to the switch', TOOL, 'That tests the cable, and the cable is not what is under test.'],
        ['A toner probe on the cable', TOOL, 'A toner probe traces cables. It tests no port.'],
        ['A network tap between the server and the switch', TOOL, 'A tap copies live traffic. With a dead port there may be none to copy.']],
      ['m1'], 'The part under test is the port alone, so nothing else may be in the loop. A loopback plug joins the port’s send to its receive and tests it by itself.'),
    chat('l16-g-tap', L, 'Sid, Security', H, 'We want to watch a copy of all the traffic between the file server and the switch with an analyzer, without cutting the link or changing anything on it.',
      'Which device?', [
        ['A network tap', true, 'A network tap copies the traffic on a cable to an analyzer without stopping it.'],
        ['A loopback plug', TOOL, 'A loopback plug would join the port to itself and stop the link.'],
        ['A PoE injector', POW, 'A PoE injector adds power to a cable. It copies nothing.'],
        ['A cable stripper', TOOL, 'A cable stripper takes off a jacket, and that would cut the link.']],
      ['m1'], 'Watching a copy of the traffic on one cable, without stopping it, is what a network tap does.'),
    chat('l16-g-aaa', S, 'Kim, Security', H, 'The VPN, the office Wi-Fi and the switches each keep their own list of accounts. When someone leaves we remove them in three places, and after last night’s break-in we could not tell who had signed in. One server should do all of it. Which role?',
      'Which role?', [
        ['AAA', true, 'AAA checks who signs in, decides what each person may use, and records what they did, in one place.'],
        ['Syslog', ROLE, 'Syslog collects log messages. It does not check anyone’s account, so the three lists would stay.'],
        ['DHCP', ROLE, 'DHCP hands out IP addresses and does not check accounts.'],
        ['DNS', ROLE, 'DNS turns names into addresses and does not check accounts.']],
      ['m1'], 'One place to check who signs in, what they may use and what they did is AAA. Syslog collects messages that others send but does not decide who is let in.'),
    chat('l16-g-managed', D, 'Lia, Network team', H, 'We have to turn off the unused ports and put the guest computers on a separate group of ports from the accounting computers. Which of these can do that?',
      'Which switch?', [
        ['A managed switch', true, 'A managed switch has a login page where ports are turned off and split into groups.'],
        ['An unmanaged switch', DEV, 'An unmanaged switch has nothing to configure. Plug in and it works.'],
        ['An unmanaged PoE switch', DEV, 'PoE adds power to the ports. An unmanaged switch still has no settings.'],
        ['A patch panel', DEV, 'A patch panel is not a switch and has no settings.']],
      ['m1'], 'Turning off ports and splitting them into groups needs settings. A managed switch has them. An unmanaged one, with or without PoE, has none.'),
    chat('l16-g-mac', D, 'Ruth, Network team', H, 'The office printer gets a different IP address now and then. We want to recognize it by something that stays fixed on the printer’s own network card, and that the switch also learns. What is that?',
      'What is it?', [
        ['Its MAC address', true, 'A MAC address is burned into the card by its maker, so it stays the same when the IP address changes.'],
        ['Its IP address', LOOK, 'The IP address is the one that changes. It is handed out, not burned in.'],
        ['Its name in the print queue', LOOK, 'A name in the queue is typed by a person and can be changed.'],
        ['Its serial number on the sticker', LOOK, 'The sticker is printed on the box. The network cannot read it, and the card does not send it.']],
      ['m1'], 'The thing that stays while the IP address changes, and that the switch learns, is the MAC address, burned in on the network card.'),
    item({
      id: 'l16-g-replace', strand: L,
      blocks: [msg('chat', 'Ben, Cabling crew', H, [['m1', 'Jack B-31 is dead. I swapped the patch cable at the panel and then moved the laptop to another jack, and only B-31 fails. A cable tester found wire 6 open in the wall cable. I punched wire 6 down again at the panel and at a new jack, and tested again: wire 6 is still open.']])],
      asks: [ask('What do you do next?', [
        ['Run a new cable between the jack and the panel', true, 'Both ends were redone, with a new jack, and the wire is still open, so the break is inside the wall. A new cable is the step the ticket points to.'],
        ['Punch wire 6 down again at both ends and test once more', 'repeated-step', 'That was just done, and the tester still shows the break. Doing it again tests nothing new.'],
        ['Swap the patch cable at the switch end too', 'no-split', 'The patch cable was already swapped and the break was found in the wall, so another swap tests nothing new.'],
        ['Reset the switch and see whether the jack comes back', NEAR, 'The tester has already found the fault in the cable. A reset tests a part that was cleared.']])],
      deciding: ['m1'],
      reason: 'Every cheaper step has been done: the patch cable, the other jack, the ends punched down again with a new jack, and a tester that still finds wire 6 open. The break is inside the wall, so a new wall cable is the right step now.' }),
    chat('l16-g-san', T, 'Quin, Data center', H, 'We have six servers that share one big pool of disks over a separate fast network of their own. Nobody’s desk computer is on it. What kind of network is that?',
      'Which kind?', [
        ['A SAN', true, 'A storage area network joins servers to shared storage, apart from the users’ network.'],
        ['A LAN', NET, 'A LAN is the users’ own network of a building. This one carries storage for servers only.'],
        ['A WAN', NET, 'A WAN joins offices far apart. This is inside one room.'],
        ['A WLAN', NET, 'A WLAN is a LAN over Wi-Fi.']],
      ['m1'], 'A separate fast network that joins servers to shared storage, with no user computers on it, is a SAN.'),
    chat('l16-g-file', S, 'Rae, Accounting', H, 'This morning the shared drive S: is gone from every computer in accounting. Web pages open, email arrives, printing works, and nobody has trouble signing in. Which of our server roles is down?',
      'Which role is down?', [
        ['The file share', true, 'The file share holds the shared folders that people open from their desks. The other jobs are all working.'],
        ['The print server', ROLE, 'Printing works, so the print server is up.'],
        ['DNS', ROLE, 'Web pages open by name, so DNS is working.'],
        ['DHCP', ROLE, 'The computers still have addresses and work, so DHCP is not the fault.']],
      ['m1'], 'Everything works except the shared folders. Web pages by name rule out DNS, working computers rule out DHCP, and printing rules out the print server. That leaves the file share.'),

    // ----- held in reserve for the weekly review: three or more for each topic -----
    chat('l16-r-router', D, 'Vic, Branch office', H, 'Our branch has two networks: the office and the internet. All the office computers reach each other, but none reach the internet, and the box between the two networks is flashing red. What is that box?',
      'Which device?', [
        ['The router', true, 'A router joins two networks and passes traffic between them by IP address.'],
        ['The switch', DEV, 'A switch joins the devices inside one network, and they reach each other.'],
        ['The patch panel', DEV, 'A patch panel only ends cables and has no light.'],
        ['The access point', DEV, 'An access point adds Wi-Fi inside the office. It does not join the office to the internet.']],
      ['m1'], 'Computers that reach each other have a working switch. Reaching the internet is joining two networks, and that is a router’s job.'),
    chat('l16-r-firewall', D, 'Zed, Security', H, 'Our new in-house app on port 8443 does not open from the other building, but ping to its server works. The app is running. Which part on the path checks traffic by port number against rules?',
      'Which part do you check?', [
        ['The firewall, for a rule that allows 8443', true, 'A firewall allows or blocks traffic by rules such as the port number.'],
        ['The patch panel, for a loose cable', DEV, 'A loose cable would break ping too, and a patch panel judges nothing.'],
        ['The access point, for its radio channel', DEV, 'An access point has no rule about port 8443.'],
        ['The modem, for its line signal', DEV, 'A modem ends the provider’s line. Other services work.']],
      ['m1'], 'Ping works, so the path is whole. One port does not get through, and a firewall is the part that allows or blocks by port.'),
    chat('l16-r-poe', D, 'Abe, Facilities', H, 'A new camera needs 20 watts at the camera. The closet has two ports: basic PoE, up to 15.4 watts at the port, and PoE+, up to 30 watts at the port. Which port do you use?',
      'Which port?', [
        ['The PoE+ port, up to 30 watts', true, 'Even after the small loss on the cable, PoE+ leaves more than 20 watts at the camera.'],
        ['The basic PoE port, up to 15.4 watts', POW, 'Basic PoE gives less than the 20 watts the camera needs, so it will not run.'],
        ['Either port, since both are PoE', POW, 'The two standards give different power. A device that needs more than its port gives will not run.'],
        ['Either port, with a longer cable to make up the power', POW, 'A longer cable adds no power, and a run over 100 meters fails.']],
      ['m1'], 'The camera needs 20 watts and basic PoE tops out at 15.4. Only PoE+ covers it.'),
    say('l16-r-poe-std', D, 'Name the PoE standard, or its 802.3 number, that gives up to 60 watts at the port.', ['PoE++', 'PoE plus plus', '802.3bt', 'bt', '802.3 bt'],
      'The strongest PoE standard is PoE++, 802.3bt: 60 watts, or 90 watts on the stronger type. PoE+ (802.3at) gives 30 and basic PoE (802.3af) gives 15.4.'),
    say('l16-r-poe-at', D, 'How many watts at the port does PoE+ (802.3at) give? Type the number.', ['30', '30 watts', '30 W', '30w'],
      'PoE+ gives up to 30 watts at the port. Basic PoE (802.3af) gives 15.4 and PoE++ (802.3bt) gives 60 or 90.'),
    chat('l16-r-100m', D, 'Mo, Facilities', H, 'A PoE camera sits 130 meters of cable from the closet switch. The PoE port is strong enough, but the camera has no link. Which fact explains it?',
      'What explains it?', [
        ['A network cable run is at most 100 meters', true, 'Past 100 meters the signal fails, however strong the port.'],
        ['The camera needs the 802.3af standard', POW, 'The port is strong enough, so the standard is not the fault.'],
        ['PoE cannot work on a cable with a jack in it', POW, 'PoE runs through jacks and patch panels. The length is the problem.'],
        ['The switch needs to be a managed one', DEV, 'Managed or not has nothing to do with the cable length.']],
      ['m1'], 'The power is enough, and the run is longer than the 100 meters a network cable allows. A switch in between would fix it.'),
    chat('l16-r-dslmodem', D, 'Fay, Home office', H, 'My internet arrives on the telephone line, with an RJ11 cable from the wall into a box that gives my router an Ethernet cable. The old house had cable TV internet, and I still have that modem. Which box is the right one now?',
      'Which box?', [
        ['A DSL modem', true, 'A DSL modem ends the telephone line and gives the router an Ethernet cable.'],
        ['The old cable modem', LOOK, 'A cable modem ends a coax line from the cable TV company, and this line is a telephone line.'],
        ['An ONT', LOOK, 'An ONT ends a fiber line, not a telephone line.'],
        ['A second router in place of the modem', DEV, 'A router joins networks. It cannot read a telephone line’s signal.']],
      ['m1'], 'The line is the telephone line, so the box that ends it is a DSL modem. The cable modem ends coax, the ONT ends fiber.'),
    chat('l16-r-cable', T, 'Gil, Home', H, 'Our internet is fast at 6 in the morning and slow at 7 in the evening, when the whole street is home. The line into the house is coax. Which connection is it?',
      'Which connection?', [
        ['Cable', true, 'Cable shares the neighborhood line, so evenings are slower.'],
        ['Fiber', CON, 'Fiber arrives as light in glass, not on coax.'],
        ['DSL', CON, 'DSL comes over the telephone line, and its speed follows distance from the provider, not the hour.'],
        ['Satellite', CON, 'Satellite uses a dish, not coax into the house.']],
      ['m1'], 'Coax into the house and a slowdown when the street is online is cable internet.'),
    chat('l16-r-wan', T, 'Hana, Head office', H, 'We are linking our head office in Denver to a branch in Atlanta so the branch can use the same file server. What kind of network is that link?',
      'Which kind?', [
        ['A WAN', true, 'A wide area network joins offices far apart.'],
        ['A LAN', NET, 'A LAN covers one building or office.'],
        ['A MAN', NET, 'A MAN covers one city or campus, and these are two cities.'],
        ['A SAN', NET, 'A SAN joins servers to shared storage and is not a link between offices.']],
      ['m1'], 'Two cities far apart make a wide area network.'),
    chat('l16-r-cell', T, 'Ivo, Field crew', H, 'Our crew drives between road jobs and needs internet in each truck. There are no wires anywhere on the roads, and the trucks move all day. Which connection fits?',
      'Which connection?', [
        ['Cellular, with a hotspot in each truck', true, 'Cellular internet uses the cell phone network and works wherever there is a signal.'],
        ['A WISP, with an antenna on each truck', CON, 'A WISP uses a fixed antenna aimed at the provider’s tower, so a moving truck loses it.'],
        ['Satellite, with a dish on each truck', CON, 'A dish has to be aimed at its satellite, and the delay of older satellite internet hurts calls.'],
        ['Cable internet, with a modem in each truck', CON, 'Cable internet needs the coax line of the cable TV company.']],
      ['m1'], 'The crew moves and there are no wires, so the connection must work wherever there is a cell signal: cellular. A WISP is for a fixed building, and a cable modem needs a coax line.'),
    chat('l16-r-pan', T, 'Eve, Retail', H, 'A customer asks what kind of network her phone makes when it shares audio with her earbuds and her watch, all within two meters of her. What do you tell her?',
      'Which kind of network?', [
        ['A PAN', true, 'A personal area network covers a few meters around one person.'],
        ['A LAN', NET, 'A LAN covers a building or an office, not one person’s devices.'],
        ['A WLAN', NET, 'A WLAN is a LAN over Wi-Fi, in an office, not earbuds.'],
        ['A MAN', NET, 'A MAN covers a city or a large campus.']],
      ['m1'], 'A few meters around one person’s phone, earbuds and watch is a personal area network.'),
    say('l16-r-crimper', L, 'Name the tool that squeezes an RJ45 plug onto the end of a network cable.', ['crimper', 'crimping tool', 'crimp tool'],
      'The crimper squeezes the plug onto the cable end. The punchdown tool seats wires in a panel, and the stripper takes the jacket off first.'),
    chat('l16-r-tone', L, 'Neha, Cabling crew', H, 'I clipped a small box to jack B-9 and now I am waving a wand over the cables in the closet until one squeals. What am I doing?',
      'What is she doing?', [
        ['Finding the cable that goes to B-9, with a toner probe', true, 'The box makes the tone and the wand squeals at the right cable.'],
        ['Testing the wires of the cable, with a cable tester', TOOL, 'A cable tester has a plug and a lit panel and checks wires. It does not squeal at one cable in a bundle.'],
        ['Testing the closet’s port, with a loopback plug', TOOL, 'A loopback plug plugs into a port. It has no wand.'],
        ['Copying the traffic of the cable, with a network tap', TOOL, 'A network tap sits in a link and copies traffic. It does not trace cables.']],
      ['m1'], 'A tone from one end and a wand that squeals at the other find which cable is which. That is a toner probe.'),
    chat('l16-r-open', L, 'Oli, Desktop team', H, 'A cable from the wall to the switch carries no signal on two of its eight wires. Which tool tells me whether a wire is broken or just in the wrong place?',
      'Which tool?', [
        ['A cable tester', true, 'A cable tester shows an open wire, a short, or wires in the wrong order.'],
        ['A Wi-Fi analyzer', TOOL, 'A Wi-Fi analyzer reads the air, not wires.'],
        ['A network tap', TOOL, 'A tap copies live traffic and does not test wires.'],
        ['A loopback plug', TOOL, 'A loopback plug tests a port, not a cable.']],
      ['m1'], 'Whether a wire is open or in the wrong place is a cable tester’s answer.'),
    chat('l16-r-repunch', L, 'Joy, Cabling crew', H, 'Jack B-40 is dead. A cable tester shows wire 3 open between the jack and the panel. I have not touched either end yet. What is the cheapest next step?',
      'What do you do?', [
        ['Punch wire 3 down again at the jack and at the panel, then test again', true, 'A wire that came loose in its slot is the cheapest cause to remove, and pushing it down again remakes the contact.'],
        ['Run a new cable through the wall', 'part-first', 'That is the most work and the last step. The ends have not been redone yet.'],
        ['Crimp a new plug on the patch cable', TOOL, 'The open wire is in the wall cable between the jack and the panel, not in a plug.'],
        ['Swap the jack’s patch cable and the laptop together', 'two-changes', 'Two changes at once would not show which one did it, and neither touches the open wire.']],
      ['m1'], 'The ends have not been redone, so redo them first: punching the wire down again is cheap and often mends a wire that is open. A new wall cable comes only if the wire is still open.'),
    chat('l16-r-spam', S, 'Pru, Mail admin', H, 'Too much junk reaches our mail server, and users keep deleting it by hand. We want something in front of the mail server that filters email before it arrives. What is it?',
      'What is it?', [
        ['A spam gateway', true, 'A spam gateway filters email before it reaches the mail server.'],
        ['A load balancer', ROLE, 'A load balancer shares requests among servers. It does not read email.'],
        ['A file share', ROLE, 'A file share holds shared folders.'],
        ['A proxy server', ROLE, 'A proxy makes web requests for users. It does not filter email.']],
      ['m1'], 'A box in front of the mail server that filters incoming email is a spam gateway.'),
    chat('l16-r-utm', S, 'Ron, Small business', H, 'We are a ten-person office, and one part-time person looks after IT. We want one box at the internet edge that checks traffic against rules, finds harmful files, blocks kinds of web sites and spots break-in attempts. What do we buy?',
      'What do you buy?', [
        ['A UTM appliance', true, 'UTM, unified threat management, puts those jobs in one box.'],
        ['A proxy server', ROLE, 'A proxy fetches pages and can block sites. It does not do the rest of the bundle.'],
        ['A load balancer', ROLE, 'A load balancer shares requests among servers.'],
        ['A spam gateway', ROLE, 'A spam gateway only filters email.']],
      ['m1'], 'A firewall, a virus check, a content filter and an intruder alarm in one box is unified threat management, which suits a small office with one part-time person.'),
    chat('l16-r-scada', S, 'Sue, Plant manager', H, 'The controls of our water plant run on a 20-year-old SCADA system that cannot be patched easily. The office laptops share its network. What lowers the risk most?',
      'What do you do?', [
        ['Put it on a network apart from the office computers', true, 'A system that cannot be patched is kept apart so that a problem on an office laptop cannot reach it.'],
        ['Install the maker’s newest update tonight', CAUSE, 'The ticket says it cannot be patched easily, and a failed update at a water plant is a risk of its own.'],
        ['Give the office laptops the system’s password', 'open-up', 'That puts it in more hands, not fewer.'],
        ['Turn off the antivirus on the office laptops', 'open-up', 'That makes the laptops easier to take over.']],
      ['m1'], 'When a system cannot be patched, the safe move is distance: its own network, apart from the office computers.'),
    chat('l16-r-iot-pw', S, 'Tom, Facilities', H, 'We installed 30 smart thermostats and door cameras. They all still have the maker’s password, which is printed in the manual. What is the first change?',
      'What is the first change?', [
        ['Give each device its own new password', true, 'A password from the maker’s manual is known to anyone, so it is replaced on each device.'],
        ['Change the office Wi-Fi password', CAUSE, 'The devices would still answer to the maker’s password, so nothing about them is safer.'],
        ['Hide the Wi-Fi network’s name', CAUSE, 'A hidden name does not change the password on the devices.'],
        ['Unplug the cameras at night', CAUSE, 'They would still be open to the manual’s password whenever they are on.']],
      ['m1'], 'The weakness is the maker’s password. Replacing it on every device removes it. Each of the other changes leaves it in place.'),
    chat('l16-r-iot-net', S, 'Tom, Facilities', H, 'All 30 thermostats and cameras now have their own passwords, but they still share a network with the accounting computers. A camera in the lobby was just found taken over through a flaw that a password does not block. What limits the damage next time?',
      'What limits the damage?', [
        ['Keep them on a network apart from the accounting computers', true, 'If a camera is taken over, the intruder is still on the network of cameras, not the accounting one.'],
        ['Choose an even longer password on the camera', CAUSE, 'The flaw works whatever the password is.'],
        ['Move the accounting computers to Wi-Fi', 'shared-network', 'That moves them but leaves them on the same network as the cameras.'],
        ['Turn the lobby camera off', CAUSE, 'That removes one camera and leaves the other 29 on the shared network.']],
      ['m1'], 'A flaw that a password does not block is limited by distance: devices of that kind sit on their own network, away from the computers that matter.'),
    chat('l16-r-mail', S, 'Dan, Office', H, 'Since 8 this morning everyone’s sent email stays in the outbox and nothing new arrives. Web pages open and shared folders work. Which of our server roles is down?',
      'Which role?', [
        ['The mail server', true, 'It sends, receives and stores email, and nothing else is affected.'],
        ['The web server', ROLE, 'Web pages open, so the web job is working.'],
        ['The file share', ROLE, 'Shared folders work, so the file share is up.'],
        ['DNS', ROLE, 'Web pages open by name, so DNS is working.']],
      ['m1'], 'Only email fails. Pages open, so DNS is up, and folders work, so the file share is up. The mail server is the one left.'),
    chat('l16-r-web', S, 'Lou, Marketing', H, 'Customers say our company website will not load. Our staff can browse other sites and email works. The site runs on one of our own servers. Which role is down?',
      'Which role?', [
        ['The web server', true, 'It serves our pages to browsers, and only our own site fails.'],
        ['The mail server', ROLE, 'Email works, so the mail job is up.'],
        ['DHCP', ROLE, 'Staff computers have addresses and browse other sites, so DHCP is up.'],
        ['The print server', ROLE, 'Printing has nothing to do with web pages.']],
      ['m1'], 'Only our own site fails while other sites and email work, so the server that serves our pages is down.'),
    chat('l16-r-db', S, 'Ana, Order desk', H, 'Our order screen says it cannot load customers. The pages of the order program open, but every list is empty. The program keeps its records on a separate server. Which role is down?',
      'Which role?', [
        ['The database server', true, 'It stores the records that programs read and change.'],
        ['The web server', ROLE, 'The pages open, so the web job is working.'],
        ['The file share', ROLE, 'The program does not keep its records in shared folders.'],
        ['The print server', ROLE, 'Printing has nothing to do with the lists.']],
      ['m1'], 'The pages load but the records do not, so the part that stores the records is down: the database server.'),
    chat('l16-r-print', S, 'Hugh, Front desk', H, 'Every printer shows ready, yet nothing prints. On the print server a list of waiting jobs grows by the minute. Web pages and shared folders work. Which part is stuck?',
      'Which part?', [
        ['The print server’s queue', true, 'The print server holds the printers and the queue of waiting jobs, and the queue is not moving.'],
        ['The file share', ROLE, 'Shared folders work, so the file share is up.'],
        ['DNS', ROLE, 'Web pages open, so DNS is working.'],
        ['The printers’ paper trays', CAUSE, 'The printers show ready, so paper is not what is stopping the jobs.']],
      ['m1'], 'The printers are ready, the jobs are waiting and the rest works, so the queue on the print server is stuck.')
  ]);
})();
