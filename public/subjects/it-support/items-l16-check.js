// IT Help Desk, lesson 16 "Network hardware, connections and tools": the eight new questions of the check, two for each topic. Research: docs/research/it-support-aplus.md
// Core 1 2.3, 2.5, 2.7, 2.8. Same helpers and conventions as items-l16.js.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt) });
  const chat = (id, strand, who, words, prompt, rows, reason) => ({
    id, strand, facets: {}, blocks: [msg('chat', who, 'Chat with the help desk', [['m1', words]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const say = (id, strand, words, accept, reason) => ({ id, strand, facets: {}, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt: 'Type the name.', accept }], reason });
  const DEV = 'wrong-device', CON = 'wrong-connection', TOOL = 'wrong-tool', ROLE = 'wrong-role', LOOK = 'mixed-look-alike';

  FC.items('it-support', [
    chat('l16-k-ont', 'net-devices', 'Bree, Branch office', 'The provider just installed fiber. A thin glass cable from the street ends in a small box on the wall with a power cord, and an Ethernet cable runs from it to our router. Our old cable modem from the coax days is still on the shelf. How do I hook it up?',
      'What do you do with the old cable modem?', [
        ['Leave it out; the box on the wall is the ONT and the router plugs into that', true, 'An optical network terminal ends a fiber line and gives the router an Ethernet cable. The kind of line decides the box.'],
        ['Plug the glass cable into it; any modem ends any line', DEV, 'A cable modem ends a coax line. It has no port for light in glass.'],
        ['Plug the glass cable straight into the router', DEV, 'A router cannot read light. The ONT changes it into a network cable.'],
        ['Chain them: the ONT into the cable modem, then the router', DEV, 'The ONT already gives the router an Ethernet cable, so the cable modem adds nothing to a fiber line.']],
      'The line is fiber, light in glass, and the box that changes it into a network cable is the ONT. A cable modem ends coax, so it has no place on this line.'),
    say('l16-k-nic', 'net-devices', 'A switch tells devices apart by an address that the maker burned into each network card, written as 12 hexadecimal digits such as 3C:52:82:1A:9F:07. Name it.',
      ['MAC address', 'MAC', 'physical address', 'media access control address'],
      'The MAC address is burned into the network card and is written as 12 hexadecimal digits. A switch uses it to send each message to the right port; the IP address is handed out and can change.'),
    chat('l16-k-dsl', 'net-types', 'Casper, Home office', 'My internet comes in on the telephone line through a box with an RJ11 cable. When I moved farther from town, it got slower. Which connection is it?',
      'Which connection?', [
        ['DSL', true, 'DSL comes over the telephone line and slows with distance from the provider’s equipment.'],
        ['Cable', CON, 'Cable internet comes on coax and is slowed by the neighbors, not by distance.'],
        ['Fiber', CON, 'Fiber arrives as light in glass, not on a telephone line.'],
        ['Satellite', CON, 'Satellite uses a dish, not a telephone line.']],
      'The telephone line and an RJ11 cable mean DSL, and its speed falls the farther the home is from the provider. Cable, fiber and satellite arrive differently.'),
    say('l16-k-man', 'net-types', 'Give the short name of the kind of network that covers a city or a large campus.',
      ['MAN', 'metropolitan area network'],
      'A metropolitan area network, a MAN, covers a city or a large campus. A LAN covers a building and a WAN joins offices far apart.'),
    chat('l16-k-punch', 'net-tools', 'Margot, Cabling crew', 'Twelve new jack cables have been pulled into the closet, and their loose wire ends hang at the back of the patch panel. Which tool seats them in the slots and trims them?',
      'Which tool?', [
        ['A punchdown tool', true, 'The punchdown tool seats the wires in the slots of a patch panel or block, and trims them.'],
        ['A crimper', TOOL, 'A crimper puts a plug on a cable end. A panel has slots, not plugs.'],
        ['A cable stripper', TOOL, 'A stripper takes the jacket off and does not seat the wires.'],
        ['A cable tester', TOOL, 'A cable tester checks the wires afterward and seats none.']],
      'Wire ends going into the slots of a panel are the punchdown tool’s job. The crimper makes plugs, the stripper takes jackets off, and the tester checks the result.'),
    chat('l16-k-strip', 'net-tools', 'Claudia, Cabling crew', 'Before I crimp a plug on a new cable I have to take the outer jacket off without nicking the wires inside. Which tool?',
      'Which tool?', [
        ['A cable stripper', true, 'A cable stripper cuts only the jacket, so the wires inside are not nicked.'],
        ['A punchdown tool', TOOL, 'A punchdown tool seats wires in slots. It does not strip a jacket.'],
        ['A toner probe', TOOL, 'A toner probe traces cables. It strips nothing.'],
        ['A cable tester', TOOL, 'A cable tester checks the wires afterward.']],
      'Removing the jacket without cutting the wires is the job of a cable stripper. The crimper and the tester come after it.'),
    chat('l16-k-ntp', 'servers', 'Oscar, Security', 'The logs from the file server and the firewall show times five minutes apart, and some sign-ins fail. Which server role, when it is missing or broken, lets the clocks drift like this?',
      'Which role?', [
        ['NTP', true, 'NTP keeps every clock on the network the same, and sign-in checks can fail when clocks differ by about five minutes.'],
        ['Syslog', ROLE, 'Syslog collects the log messages. It keeps no clock in step.'],
        ['AAA', ROLE, 'AAA checks accounts. It keeps no clock in step.'],
        ['DNS', ROLE, 'DNS turns names into addresses. It keeps no clock in step.']],
      'Clocks that differ by five minutes, with sign-ins failing, are what NTP prevents. Syslog only collects the messages, and AAA checks accounts.'),
    chat('l16-k-balancer', 'servers', 'Fran, Web team', 'Our web site runs on three identical servers. We want the visitors’ requests shared out among them, and sent to the others if one fails. What is the box?',
      'Which appliance?', [
        ['A load balancer', true, 'A load balancer shares requests among identical servers and skips one that has failed.'],
        ['A proxy server', ROLE, 'A proxy makes requests on behalf of users. It does not share visitors among servers.'],
        ['A UTM appliance', ROLE, 'A UTM is a firewall bundle. It does not share visitors among servers.'],
        ['A spam gateway', ROLE, 'A spam gateway filters email.']],
      'Sharing requests among identical servers and skipping a failed one is a load balancer’s job. A proxy, a UTM and a spam gateway do other jobs.')
  ]);
})();
