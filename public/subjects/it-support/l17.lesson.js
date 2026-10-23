// IT Help Desk, lesson 17: Wireless and the small office network (part wireless). Core 1 2.2 (bands, channels, 802.11 standards, Bluetooth, NFC, RFID), Core 1 5.5
// (wireless symptoms), Core 2 2.3 (WPA2, WPA3, TKIP, AES, RADIUS, TACACS+, Kerberos, multifactor) and Core 2 2.10 (router, wireless and firewall settings) of the
// A+ map (docs/research/it-support-aplus.md). The facts are recalled; the symptoms and the router task are tickets worked with the cheapest test (IT4, IT8: a cable
// against Wi-Fi) and one change at a time (IT9). Plan: docs/subjects/it-support/plan.md, lesson 17. Judgement call: the standards are taught as bands and Wi-Fi names.
// One worked ticket (Ross's conference room: a favorite cause ruled out by one cable); a first group with the deciding words marked; a second and a third with none;
// and the check: eight new questions, no help, 7 of 8 to pass. The third group mixes in lessons 5 and 9. Fixed after the first reviews (fixes-l14-17.md, Lesson 17).
FC.lesson('it-support', {
  id: 'l17', part: 'wireless', title: 'Wireless and the small office network', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (bands, channels and standards; Bluetooth, NFC and RFID; wireless symptoms; WPA2, WPA3 and the sign-in methods; setting up and securing a small office router).' }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    'Emily starts in a new office on Monday. The router login is admin and admin, there is no Wi-Fi password, and the back room drops off twice an hour.',
    'Here you learn Wi-Fi bands, security and router setup.'],
  flow: [
    { title: 'Three radio bands',
      show: [{ kind: 'prose', text: [
        'A router sends Wi-Fi on bands, ranges of radio frequency in GHz. An ordinary device uses one band at a time.'] },
      { kind: 'document', form: 'table', title: 'The three Wi-Fi bands', head: ['Band', 'Reach', 'Speed', 'Crowding'], rows: [
        { id: 'b1', cells: ['2.4 GHz', 'Longest; passes walls best', 'Slowest', 'Most crowded: neighbors, Bluetooth, cordless phones, microwaves'] },
        { id: 'b2', cells: ['5 GHz', 'Shorter; walls block more', 'Faster', 'Less crowded; more channels'] },
        { id: 'b3', cells: ['6 GHz', 'Shortest', 'Fastest', 'Emptiest; only Wi-Fi 6E and 7 devices'] }] }] },
    { title: 'Channels and width',
      show: [{ kind: 'prose', text: [
        'Each band is cut into lanes called channels; networks on overlapping channels slow each other. Countries allow different channels (the US allows 1 to 11 on 2.4 GHz).',
        'On 2.4 GHz the channels are 5 MHz apart but 20 MHz wide, so they overlap; only 1, 6 and 11 clear each other.',
        'Width is 20, 40, 80 or 160 MHz. Wider is faster but leaves fewer clear lanes and picks up more noise. 2.4 GHz has room for only 20 and 40; keep it at 20. A Wi-Fi analyzer lists nearby networks and their channels.'] }] },
    { title: 'Standards and their names',
      show: [{ kind: 'document', form: 'table', title: '802.11 standards: bands and Wi-Fi names', head: ['Standard', 'Wi-Fi name', 'Band'], rows: [
        { id: 'st1', cells: ['802.11b', 'No number name', '2.4 GHz'] },
        { id: 'st2', cells: ['802.11a', 'No number name', '5 GHz'] },
        { id: 'st3', cells: ['802.11g', 'No number name', '2.4 GHz'] },
        { id: 'st4', cells: ['802.11n', 'Wi-Fi 4', '2.4 and 5 GHz'] },
        { id: 'st5', cells: ['802.11ac', 'Wi-Fi 5', '5 GHz only'] },
        { id: 'st6', cells: ['802.11ax', 'Wi-Fi 6 (6E adds 6 GHz)', '2.4 and 5 GHz'] },
        { id: 'st7', cells: ['802.11be', 'Wi-Fi 7', '2.4, 5 and 6 GHz'] }] },
      { kind: 'prose', text: [
        'A link runs at the newest standard both ends know.'] }] },
    { title: 'Bluetooth, NFC and RFID',
      show: [{ kind: 'document', form: 'table', title: 'Radios for short distances', head: ['Technology', 'Reach', 'What it does'], rows: [
        { id: 'r1', cells: ['Bluetooth', 'Several meters', 'Pairs two devices, often with a code: a headset. Uses 2.4 GHz.'] },
        { id: 'r2', cells: ['NFC (near field communication)', 'A few centimeters', 'Tap to pay. A kind of RFID with a very short reach.'] },
        { id: 'r3', cells: ['RFID (radio frequency identification)', 'Centimeters to meters', 'A reader reads a small tag, often with no battery.'] }] }] },
    { title: 'The path, and the first check',
      show: [{ kind: 'prose', text: [
        'A Wi-Fi ticket sits on one path: the laptop’s radio; the air (band, channel, distance, walls, noise); the router and its security; its link to the line; the line.',
        'The cheapest cut is a speed test (in Mbps, megabits per second) by cable and one on Wi-Fi. Fast by cable puts the fault in the radio links; slow on both, in the last two.'] },
      { kind: 'document', form: 'table', title: 'Symptom, likely cause, first check', head: ['Symptom', 'Likely cause', 'First check'], rows: [
        { id: 'y1', cells: ['Slow on Wi-Fi, fast by cable', 'Crowded channel, distance, old standard', 'Wi-Fi analyzer; try 5 GHz'] },
        { id: 'y2', cells: ['Drops now and then', 'Microwave or cordless phone noise; neighbors; distance; router in a metal cabinet', 'Same time each day? Try 5 GHz; check router placement'] },
        { id: 'y3', cells: ['Weak in one corner', 'Distance and walls', 'Try 2.4 GHz; move the router; add an access point'] },
        { id: 'y4', cells: ['“Authentication failed”', 'A wrong password, or a device that cannot use the security type', 'Retype it; check the device'] }] }] },
    { title: 'Blaming the line',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The Wi-Fi is slow, so the internet line must be slow. Call the provider.”',
        'Test by cable first: a fast result clears the line and the router.'] }] },
    { title: 'Wi-Fi security',
      show: [{ kind: 'document', form: 'table', title: 'What protects the Wi-Fi traffic', head: ['Name', 'What it is'], rows: [
        { id: 'w1', cells: ['WPA2', 'The long-used security. AES is its strong scrambling: choose WPA2 with AES.'] },
        { id: 'w3', cells: ['TKIP', 'Older, weaker scrambling. Do not choose it.'] },
        { id: 'w4', cells: ['WPA3', 'The newest. A thief who records the sign-in cannot guess the password afterward. Use it when all devices can.'] }] },
      { kind: 'prose', text: [
        'Personal security is one shared password. Enterprise gives each person an account, checked by a RADIUS server. A device that cannot use the security type fails to join even with the right password.'] }] },
    { title: 'Who is signing in',
      show: [{ kind: 'prose', text: ['RADIUS and TACACS+ are AAA servers: authentication (who you are), authorization (what you may do), accounting (what you did).'] },
      { kind: 'document', form: 'table', title: 'Sign-in methods', head: ['Method', 'What it does'], rows: [
        { id: 'a1', cells: ['RADIUS', 'Checks people joining the network: Enterprise Wi-Fi, a VPN. Uses UDP, combines authentication and authorization, scrambles only the password.'] },
        { id: 'a2', cells: ['TACACS+', 'Checks administrators on routers and switches, and which commands each may run. Uses TCP, keeps the three AAA jobs separate, scrambles the whole message.'] },
        { id: 'a3', cells: ['Kerberos', 'A Windows domain: sign in once, then get tickets for each service.'] },
        { id: 'a4', cells: ['Multifactor', 'Two or more of: something you know, have or are. A password plus a PIN is one kind twice.'] }] }] },
    { title: 'Securing the router',
      show: [{ kind: 'document', form: 'table', title: 'The router itself', head: ['Setting', 'What to do'], rows: [
        { id: 'p1', cells: ['Default login', 'Change the name and password; defaults are published'] },
        { id: 'p2', cells: ['Firmware', 'The router’s own software. Save the settings first, then update (an update can reset them); updates close known flaws. On a shared router, follow the desk’s change rules.'] },
        { id: 'p3', cells: ['Secure management access', 'Keep the admin page off the internet, or reachable only by a secure connection'] },
        { id: 'p4', cells: ['UPnP (Universal Plug and Play)', 'Turn it off; it lets a program or malware (harmful software) open router ports by itself'] },
        { id: 'p5', cells: ['IP filtering', 'Allow or block by device address'] },
        { id: 'p6', cells: ['Content filtering', 'Block sites by category or words, not address'] },
        { id: 'p7', cells: ['Physical placement', 'High and central, away from metal and microwaves, out of reach of reset'] },
        { id: 'p8', cells: ['Screened subnet', 'A separate small network between the internet and the office, for servers the internet must reach. A router’s “DMZ host” setting is different: it exposes one device fully.'] }] }] },
    { title: 'Securing the Wi-Fi and the firewall',
      show: [{ kind: 'document', form: 'table', title: 'The Wi-Fi and the firewall', head: ['Setting', 'What to do'], rows: [
        { id: 'q1', cells: ['SSID (the Wi-Fi’s name)', 'Change the default; it names the make and model'] },
        { id: 'q2', cells: ['SSID broadcast', 'Turning it off only hides the name. It is not a lock, though the A+ exam lists it as a security setting.'] },
        { id: 'q3', cells: ['Encryption', 'WPA3, or WPA2 with AES. Never None, never TKIP'] },
        { id: 'q4', cells: ['Guest access', 'A second Wi-Fi with its own password, internet only'] },
        { id: 'q5', cells: ['Unused ports', 'Close ports nothing uses. Ports 21 (FTP) and 23 (Telnet) send passwords as readable text.'] },
        { id: 'q6', cells: ['Port forwarding (also called port mapping)', 'Send one port to one device at a reserved, fixed address. It is now reachable from the internet: give it a strong password first, and use a VPN where there is one.'] }] }] },
    { worked: 'l17-w-room' },
    { set: { items: ['l17-p-walls', 'l17-p-lunch', 'l17-p-wpa3', 'l17-p-setup'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l17-s-chan', 'l17-s-nfc', 'l17-s-wired', 'l17-s-tkip', 'l17-s-guest', 'l17-s-forward'], order: 'shuffle' } },
    { set: { items: ['l17-g-std', 'l17-g-auth', 'l17-g-radius', 'l17-g-ssid', 'l17-g-sub'], order: 'shuffle', mix: { from: ['l5', 'l9'], share: 0.3 } } }
  ],
  check: {
    items: ['l17-k-ax', 'l17-k-rfid', 'l17-k-far', 'l17-k-tacacs', 'l17-k-mfa', 'l17-k-upnp', 'l17-k-fw', 'l17-k-filter'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
