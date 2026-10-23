// IT Help Desk, lesson 18: Phones, tablets and laptops (part mobile). Core 1 1.1 (laptop and mobile parts and replacement: battery, keyboard, memory, drive, wireless card,
// biometrics and the near-field scanner, Wi-Fi antenna, camera, microphone), 1.2 (USB, USB-C, micro-USB, mini-USB, Lightning, NFC, Bluetooth, tethering and hotspot;
// accessories; docking station, port replicator, trackpad), 1.3 (cellular and Wi-Fi on and off, SIM and eSIM, the Bluetooth steps, location services, MDM, BYOD, sync, data
// caps) and Core 2 2.8 (securing mobile devices) and 4.4 (disconnect power, static) of the A+ map (docs/research/it-support-aplus.md). Plan: lesson 18. The facts are
// recalled; the symptoms are tickets worked with the cheapest test that splits the chain (IT4, IT5, IT8) and one change at a time (IT9). Judgement call: two chains of the
// plan's own cut, Bluetooth (on, pairing mode, found, PIN, test) and mobile data (switch, line, plan, account, sync). One worked ticket (Ana's earbuds: a favorite cause
// ruled out by a second phone); a first group of four with the deciding words marked; a second of seven and a third of five with none; the check: six new questions,
// no help, 5 of 6 to pass. The plan gives no earlier lesson of this builder to mix in, so no group mixes; cross-builder mixing is added later.
FC.lesson('it-support', {
  id: 'l18', part: 'mobile', title: 'Phones, tablets and laptops', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (laptop and phone parts and how to replace them safely; connectors, accessories and desk bases; the Bluetooth and mobile data chains; SIM, eSIM, location, sync and data caps; MDM, company and personal phones; securing a phone).' }],
  why: [
    'Nadia in Sales calls from a taxi stand. Nadia left the work phone in a cab an hour ago. It holds customer lists and mail, and Nadia wants something done now.',
    'Here you learn what is inside a laptop and a phone, how they connect, how a company manages them, and how to lock one down, so you know which step comes first and which cannot be undone.'],
  flow: [
    { title: 'Inside a laptop',
      show: [{ kind: 'document', form: 'table', title: 'Laptop parts you may be asked to replace', head: ['Part', 'What to know'], rows: [
        { id: 'p1', cells: ['Battery', 'Often inside the case: disconnect its connector first. A worn one shuts the laptop off soon after it is unplugged.'] },
        { id: 'p2', cells: ['Keyboard', 'Replaced as one unit. An external USB keyboard is the cheapest test of whether the built-in one is at fault.'] },
        { id: 'p3', cells: ['Memory (RAM)', 'SODIMM, a short stick, much shorter than the DIMM in a tower computer. Some laptops have memory soldered on.'] },
        { id: 'p4', cells: ['Drive', 'A 2.5 inch drive in a bay, or an M.2 SSD, a small stick that plugs into the board with no cable. Check which the laptop takes.'] },
        { id: 'p5', cells: ['Wireless card and Wi-Fi antenna', 'The card usually does both Wi-Fi and Bluetooth. Two thin antenna wires snap onto it and run up the hinge into the lid. A repair that opens the lid can leave one loose, and the signal drops.'] },
        { id: 'p6', cells: ['Camera (webcam) and microphone', 'In the lid frame. Check the sliding cover or the sound settings before changing a part.'] },
        { id: 'p7', cells: ['Biometrics and the near-field scanner', 'The fingerprint reader and face camera check who you are. The near-field (NFC) scanner reads a badge or phone held a few centimeters away.'] }] }] },
    { title: 'Opening one safely',
      show: [{ kind: 'prose', text: [
        'Shut down, unplug the charger and disconnect the battery. Then ground yourself so static from your hands cannot reach the board: wear a wrist strap, or touch a bare metal part of the unplugged laptop. A chip can be ruined by static you never feel.',
        'Photograph the screws and keep them in order, and pry with plastic tools. If the battery is swollen, stop and do not charge it.'] }] },
    { title: 'Connectors and cables',
      show: [{ kind: 'document', form: 'table', title: 'How a phone or tablet connects', head: ['Connection', 'What it is'], rows: [
        { id: 'c1', cells: ['USB-C', 'A small oval plug, either way up. Carries power and data, and video on many devices.'] },
        { id: 'c2', cells: ['Micro-USB', 'Older, flat, wider at the top, one way only. Older Android phones and small gear.'] },
        { id: 'c3', cells: ['Mini-USB', 'Older still and bigger than micro-USB, one way only. Cameras and old devices.'] },
        { id: 'c4', cells: ['Lightning', 'Apple’s own thin plug, either way up. Older iPhones and iPads; newer ones use USB-C.'] },
        { id: 'c5', cells: ['NFC (near field communication)', 'A tap from a few centimeters: pay, tap a badge, start a pairing.'] },
        { id: 'c6', cells: ['Bluetooth', 'A radio for short distances that pairs two devices: a headset, a speaker, a car.'] },
        { id: 'c7', cells: ['Hotspot', 'The phone shares its cellular data as a Wi-Fi network that several devices can join.'] },
        { id: 'c8', cells: ['Tethering', 'The phone shares its cellular data with one computer over a USB cable or Bluetooth.'] }] },
      { kind: 'prose', text: [
        'Hotspot and tethering both use the phone’s data plan and drain its battery.'] }] },
    { title: 'Accessories and desk bases',
      show: [{ kind: 'document', form: 'table', title: 'Accessories', head: ['Accessory', 'What it does'], rows: [
        { id: 'a1', cells: ['Stylus', 'A pen for a touch screen.'] },
        { id: 'a2', cells: ['Headset, speakers, webcam', 'Sound out, a microphone, and a better camera, wired or by Bluetooth.'] },
        { id: 'a3', cells: ['Docking station', 'A desk base. One connection gives the laptop power, monitors and a wired network, and it can add extras such as drives.'] },
        { id: 'a4', cells: ['Port replicator', 'A simpler base that repeats the laptop’s own ports onto the desk. It adds nothing new.'] },
        { id: 'a5', cells: ['Trackpad, track point, drawing pad', 'The flat panel under the keyboard; the small rubber nub between G, H and B; a separate pen tablet.'] }] }] },
    { title: 'Bluetooth is a chain',
      show: [{ kind: 'prose', text: [
        'Five things happen in order, and each works only if the one before it did.',
        '1. On. Bluetooth is switched on in the phone.',
        '2. Pairing mode. The other device is made discoverable, usually by holding its button until a light blinks. It stays discoverable only a short time.',
        '3. Found. The phone scans and lists it. Pick it.',
        '4. PIN. Enter its code, or confirm that the same number shows on both screens. Older gear often uses 0000 or 1234.',
        '5. Test. Play a sound or make a short call. Many headsets connect to one phone at a time.'] },
      { kind: 'document', form: 'table', title: 'Where each sign belongs', head: ['What you see', 'The link', 'First move'], rows: [
        { id: 'b1', cells: ['The device never appears', '2. Pairing mode', 'Make it discoverable again; disconnect it from its other device'] },
        { id: 'b2', cells: ['It appears, but pairing fails', '4. PIN', 'Retype the code, or remove the old saved entry and pair again'] },
        { id: 'b3', cells: ['Paired, but no sound', '5. Test', 'Pick it as the sound output; check it is not joined to another device'] },
        { id: 'b4', cells: ['The phone lists nothing at all', '1. On', 'Switch Bluetooth on; check airplane mode'] }] }] },
    { title: 'The broken-part guess',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The headset will not connect, so the headset is broken. Send it back.”',
        'Try the headset with a second phone first. If it pairs there, the headset is fine and the fault is on the first phone, in one of the five links.'] }] },
    { title: 'Data and accounts: a chain',
      show: [{ kind: 'prose', text: [
        'Mail, calendar and contacts reach a phone through five links, each depending on the one before.',
        '1. The switch. Airplane mode turns off the cellular, Wi-Fi and Bluetooth radios together; each can be turned back on alone.',
        '2. The line. Wi-Fi, or cellular data through a SIM, the small chip card that identifies you to the carrier, or an eSIM, a SIM built into the phone and added by the carrier’s QR code or app. Cellular comes as 3G, 4G and 5G, each faster than the one before.',
        '3. The plan. Most plans have a data cap, a monthly amount of data; past it the phone slows or the bill grows. Video and photo backup belong on Wi-Fi.',
        '4. The account. The phone is signed in to the mail or cloud account, and after a password change it must be given the new one.',
        '5. Sync. Mail, calendar, contacts and cloud storage each turn on or off and refresh on their own.',
        'Location services are a separate switch. They use GPS (satellites) under a clear sky, and nearby Wi-Fi and cell towers for a rougher fix. Each app needs permission.'] }] },
    { title: 'Company phones and personal phones',
      show: [{ kind: 'prose', text: [
        'MDM (mobile device management) is software a company uses to run its phones and tablets. It configures settings, enforces rules such as a minimum passcode, installs company apps, and can lock, find or wipe a device from afar.',
        'A corporate-owned phone is the company’s, so it can be managed and wiped whole. A BYOD phone (bring your own device) is the employee’s; the company usually manages only the work part and wipes only that.'] }] },
    { title: 'Securing a phone',
      show: [{ kind: 'document', form: 'table', title: 'Ways to secure a mobile device', head: ['Measure', 'What it does'], rows: [
        { id: 'k1', cells: ['Device encryption', 'Scrambles what is stored, so it opens only with the passcode.'] },
        { id: 'k2', cells: ['Screen lock', 'Swipe protects nothing. A pattern can be watched. A PIN or password is stronger the longer it is. Fingerprint and face are quick, with the PIN behind them.'] },
        { id: 'k3', cells: ['Configuration profile', 'A bundle of settings and rules sent to many phones at once: Wi-Fi, email, VPN, passcode rules.'] },
        { id: 'k4', cells: ['Patch management', 'Keeping the system and apps updated, because updates close known flaws.'] },
        { id: 'k5', cells: ['Endpoint security', 'Protection on the device: anti-malware, and content filtering that blocks categories of sites.'] },
        { id: 'k6', cells: ['Locator app', 'Shows a lost phone on a map and can lock it. Needs location services and the phone online.'] },
        { id: 'k7', cells: ['Remote backup', 'A copy of the phone’s data kept away from it, so a wipe loses little.'] },
        { id: 'k8', cells: ['Remote wipe', 'Erases the phone from afar, once it is online. It cannot be undone, so it comes after locking and finding.'] },
        { id: 'k9', cells: ['Failed log-in limit', 'After too many wrong PINs the phone waits longer, or erases itself where the policy says.'] }] },
      { kind: 'prose', text: [
        'A lost phone goes in this order: confirm who is calling, mark it lost to lock and find it, and wipe only when the owner says it is gone.'] }] },
    { worked: 'l18-w-pair' },
    { set: { items: ['l18-p-ram', 'l18-p-usbc', 'l18-p-scan', 'l18-p-lock'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l18-s-wire', 'l18-s-board', 'l18-s-tether', 'l18-s-dock', 'l18-s-signin', 'l18-s-cap', 'l18-s-lost', 'l18-t-esim', 'l18-t-nfc', 'l18-t-replicator', 'l18-t-usbc'], order: 'shuffle' } },
    { set: { items: ['l18-g-byod', 'l18-g-esim', 'l18-g-tries', 'l18-g-policy', 'l18-g-memory', 'l18-t-byod', 'l18-t-wipe'], order: 'shuffle' } }
  ],
  check: {
    items: ['l18-k-battery', 'l18-k-lightning', 'l18-k-airplane', 'l18-k-mdm', 'l18-k-profile', 'l18-k-wipe'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
