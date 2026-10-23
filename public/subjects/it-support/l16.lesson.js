// IT Help Desk, lesson 16: Network hardware, connections and tools (part gear). Core 1 2.3, 2.5, 2.7 and 2.8 of the A+ map (docs/research/it-support-aplus.md): the devices
// on the path from a desk to the internet, the kinds of internet connection and network, the server roles and network appliances, and the technician's network tools.
// Each device is taught by the job it does on the path (IT5: a few levels of "what does this part do for the whole"); a fault is cut by finding the first part on the
// path that does not do its job (IT4 follow-the-path, IT8 check the connections before poking at devices). Plan: docs/subjects/it-support/plan.md, lesson 16.
// One worked ticket (Heath's desk: a favorite cause ruled out by the jack next door); three groups of questions, the first with the deciding words marked; the check:
// eight new questions with no help, 7 of 8 to pass. Round 2 fixes: docs/subjects/it-support/fixes-l14-17.md. Topics (one for each group of objectives): net-devices, net-types, net-tools, servers.
FC.lesson('it-support', {
  id: 'l16', part: 'gear', title: 'Network hardware, connections and tools', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (each network device by its job on the path from a desk to the internet; internet connections and kinds of network; server roles and appliances; the technician’s network tools).' }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    'Heath in Sales moved to desk 14. They plugged their laptop into the wall jack and the light by its network port stays off. Between their laptop and the internet are seven or eight parts in a row, and any one could be the fault.',
    'A good technician knows what each part does, so a missing light points at one stretch of the path. Here you learn the devices, the kinds of line and network, the servers, and the cable tools.'],
  flow: [
    { title: 'The path from a desk to the internet',
      show: [{ kind: 'prose', text: [
        'Each part on the path does one job.',
        'A network card (NIC) is the part inside the computer that joins it to a network; ipconfig lists it as the adapter. Its MAC address is 12 hexadecimal digits (0 to 9, A to F), such as 3C:52:82:1A:9F:07, burned in by the maker. It stays the same when the IP address changes.',
        'Ethernet is the name for wired networks. Its cable ends in an RJ45 plug, the wide plug with a clip. A telephone cable has the narrower RJ11.'] },
      { kind: 'document', form: 'table', title: 'From a desk to the internet, in order', head: ['Part', 'Its job on the path'], rows: [
        { id: 'p1', cells: ['The computer’s NIC', 'Joins the computer to the cable or the air. Its MAC address names the card.'] },
        { id: 'p2', cells: ['Wall jack and cable', 'Carry the signal to the wiring closet, the small room where a floor’s cables meet.'] },
        { id: 'p3', cells: ['Patch panel', 'Where the wall jacks’ cables end, pushed into slots at its back. Short patch cables join its front ports to the switch. It has no power.'] },
        { id: 'p4', cells: ['Switch', 'Joins the computers of one network. It learns each MAC address and sends a message only to the port it is for.'] },
        { id: 'p5', cells: ['Access point', 'Joins Wi-Fi devices to the wired network. It sits on a cable from a switch.'] },
        { id: 'p6', cells: ['Router', 'Joins two networks, the office and the internet, and passes traffic between them by IP address.'] },
        { id: 'p7', cells: ['Firewall', 'Checks the traffic that crosses it against rules, such as a port number, and lets it through or blocks it.'] },
        { id: 'p8', cells: ['Modem or ONT', 'Changes the provider’s line signal into one the router understands; the kind of line decides which.'] }] }] },
    { title: 'Two kinds of switch, and power over the cable',
      show: [{ kind: 'prose', text: [
        'An unmanaged switch has nothing to configure: plug cables in and it works. A managed switch has a login page, where a network technician can turn ports on or off, split them into separate groups (VLANs, so guests cannot reach accounting) and see what each port does. Changing it is the network team’s job, not the help desk’s.',
        'PoE, Power over Ethernet, sends power with data over one cable, so an access point, phone or camera can sit where there is no outlet. A PoE switch has power built into its ports. A PoE injector is a small box between a non-PoE switch and the device that adds the power.'] },
      { kind: 'document', form: 'table', title: 'PoE standards; a cable run is at most 100 meters', head: ['Standard', 'Power at the switch port (the device gets a little less)'], rows: [
        { id: 'w1', cells: ['PoE (802.3af)', 'up to 15.4 watts'] },
        { id: 'w2', cells: ['PoE+ (802.3at)', 'up to 30 watts'] },
        { id: 'w3', cells: ['PoE++ (802.3bt)', 'up to 60 watts, or up to 90 watts on the stronger type'] }] },
      { kind: 'prose', text: ['A device that needs more than its port gives will not run. A run longer than 100 meters needs another switch in between.'] }] },
    { title: 'The line from the provider',
      show: [{ kind: 'prose', text: [
        'The line reaches the building in one of six ways; the way decides the box that ends it.'] },
      { kind: 'document', form: 'table', title: 'Internet connection kinds', head: ['Kind', 'How it arrives', 'What to know'], rows: [
        { id: 'i1', cells: ['Fiber', 'Light through glass, ending in an ONT (optical network terminal)', 'Often the fastest, and as fast uploading as downloading'] },
        { id: 'i2', cells: ['Cable', 'Coax (the round cable of cable TV), ending in a cable modem', 'The neighborhood shares the line, so it can be slower in the evening'] },
        { id: 'i3', cells: ['DSL', 'The telephone line (RJ11 plug), ending in a DSL modem', 'Slower the farther the home is from the provider’s equipment'] },
        { id: 'i4', cells: ['Satellite', 'A dish aimed at a satellite', 'The signal goes far up and back, so each reply is slow to start (high latency), even when the speed is good. Newer low-orbit services have a shorter delay.'] },
        { id: 'i5', cells: ['Cellular', 'The cell phone network, through a phone’s hotspot or a cellular router', 'No wire, but speed follows the signal and there may be a data limit. A good choice where a tower is in reach and wires are not.'] },
        { id: 'i6', cells: ['WISP', 'A wireless internet provider: a roof antenna aimed at the provider’s tower', 'For places the wires do not reach. It needs a clear line to the tower.'] }] }] },
    { title: 'Kinds of network',
      show: [{ kind: 'document', form: 'table', title: 'Kinds of network', head: ['Name', 'What it covers', 'Example'], rows: [
        { id: 'n1', cells: ['PAN, personal area network', 'A few meters around one person', 'A phone with earbuds and a watch'] },
        { id: 'n2', cells: ['LAN, local area network', 'One building or office', 'The desks and printers on a floor'] },
        { id: 'n3', cells: ['WLAN, wireless LAN', 'A LAN joined by Wi-Fi', 'Laptops and phones in the same office'] },
        { id: 'n4', cells: ['MAN, metropolitan area network', 'A city or a large campus', 'A school district’s buildings across a town'] },
        { id: 'n5', cells: ['WAN, wide area network', 'Offices far apart, in different cities or countries', 'The link between a head office and a branch in another state'] },
        { id: 'n6', cells: ['SAN, storage area network', 'A fast network that joins servers to shared storage; users’ computers are not on it', 'Six servers sharing one pool of disks'] }] }] },
    { title: 'Servers: the jobs a network depends on',
      show: [{ kind: 'prose', text: [
        'A server role is the one job a server does for the network.'] },
      { kind: 'document', form: 'table', title: 'Server roles', head: ['Role', 'Its job'], rows: [
        { id: 'r1', cells: ['DNS', 'Turns a name such as a web address into the IP address'] },
        { id: 'r2', cells: ['DHCP', 'Hands out IP addresses to devices as they join'] },
        { id: 'r3', cells: ['File share', 'Holds shared folders that people open from their desks'] },
        { id: 'r4', cells: ['Print', 'Holds the printers and the queue, the list of jobs waiting to print'] },
        { id: 'r5', cells: ['Mail', 'Sends, receives and stores email'] },
        { id: 'r6', cells: ['Web', 'Serves web pages to browsers'] },
        { id: 'r7', cells: ['Database', 'Stores records that programs read and change'] },
        { id: 'r8', cells: ['Syslog', 'Collects the log messages that many devices send, so they can be read in one place'] },
        { id: 'r9', cells: ['NTP', 'Keeps every clock on the network the same. Sign-in checks can fail when two clocks differ by about five minutes.'] },
        { id: 'r10', cells: ['AAA', 'Authentication (who are you), authorization (what may you use), accounting (what did you do).'] }] },
      { kind: 'document', form: 'table', title: 'Network appliances: boxes built for one network job', head: ['Appliance', 'Its job'], rows: [
        { id: 'a1', cells: ['Spam gateway', 'Filters incoming email before it reaches the mail server'] },
        { id: 'a2', cells: ['UTM, unified threat management', 'A firewall with an antivirus, a content filter and an intruder alarm (spots break-in attempts) in one box'] },
        { id: 'a3', cells: ['Load balancer', 'Shares requests among identical servers, and skips one that has failed'] },
        { id: 'a4', cells: ['Proxy server', 'Makes web requests for the users; it can block sites and keep copies of popular pages'] }] },
      { kind: 'prose', text: [
        'Two more things sit on company networks. SCADA controls machines in factories, power and water plants; it is often old and hard to patch. IoT devices are ordinary things with a network connection: cameras, thermostats, door locks. Many ship with a weak password: change it. Keep both apart from the office computers.'] }] },
    { title: 'The technician’s network tools',
      show: [{ kind: 'document', form: 'table', title: 'Tools and the job each does', head: ['Tool', 'Its job'], rows: [
        { id: 't1', cells: ['Cable stripper', 'Takes the outer jacket off a cable without nicking the wires'] },
        { id: 't2', cells: ['Crimper', 'Squeezes an RJ45 plug onto the end of a cable'] },
        { id: 't3', cells: ['Punchdown tool', 'Pushes wire ends into the slots of a patch panel and trims them. Pushing a loose wire down again remakes the contact.'] },
        { id: 't4', cells: ['Cable tester', 'Shows whether each of the eight wires reaches the right pin at the other end: a break (open), a short, wires in the wrong order'] },
        { id: 't5', cells: ['Toner probe', 'A tone generator on one end makes a signal; a probe wand held near cables elsewhere squeals at the right one. It finds which cable is which.'] },
        { id: 't6', cells: ['Loopback plug', 'A plug that wires a port’s sending pins back to its receiving pins, so the port can be tested alone'] },
        { id: 't7', cells: ['Wi-Fi analyzer', 'An app that lists nearby Wi-Fi networks, their channels and signal strength. A channel is one slice of the radio band; two networks on the same one talk over each other.'] },
        { id: 't8', cells: ['Network tap', 'Copies the traffic passing along a cable to an analyzer without stopping it'] }] },
      { kind: 'prose', text: ['For a bad wire, redo the cheap part first: punch it down again, or crimp a new plug. Pull a new cable only when that did not help.'] }] },
    { title: 'Replace the box with the lights',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The internet is down, so the router is broken. Swap the router.”',
        'Walk the path and find the first part that is not doing its job: is the link light on at the computer, do other desks on the same switch work, do the router and modem show their lights?'] }] },
    { worked: 'l16-w-desk' },
    { set: { items: ['l16-p-switch', 'l16-p-ap', 'l16-p-poe', 'l16-p-wisp', 'l16-p-crimp', 'l16-p-dhcp'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l16-s-patch', 'l16-s-injector', 'l16-s-lag', 'l16-s-man', 'l16-s-toner', 'l16-s-tester', 'l16-s-proxy', 'l16-r-poe', 'l16-r-firewall', 'l16-r-repunch', 'l16-r-mail'], order: 'shuffle' } },
    { set: { items: ['l16-g-wifi', 'l16-g-loop', 'l16-g-tap', 'l16-g-aaa', 'l16-g-managed', 'l16-g-mac', 'l16-g-replace', 'l16-g-san', 'l16-g-file', 'l16-r-web', 'l16-r-print'], order: 'shuffle', mix: { from: ['l14', 'l15'], share: 0.3 } } }
  ],
  check: {
    items: ['l16-k-ont', 'l16-k-nic', 'l16-k-dsl', 'l16-k-man', 'l16-k-punch', 'l16-k-strip', 'l16-k-ntp', 'l16-k-balancer'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
