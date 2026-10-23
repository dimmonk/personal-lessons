// IT Help Desk, lesson 18 "Phones, tablets and laptops": twelve questions held in reserve for the weekly review, three for each of the four topics (parts, ports and
// accessories, connections and company management, securing phones). Facts as in items-l18.js (A+ map Core 1 1.1 to 1.3; Core 2 2.8, 4.4). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const PORT = 'wrong-port', SAFE = 'unsafe-open', WIPE = 'wipe-first', LOCK = 'weak-screen-lock', POL = 'wrong-policy', CAP = 'ignored-cap', SWITCH = 'wrong-switch',
    PART = 'part-first', NOSPLIT = 'no-split', CAUSE = 'wrong-cause', LOOK = 'mixed-look-alike', LINK = 'wrong-link', WTOOL = 'wrong-part', WSHAPE = 'wrong-shape',
    OPEN = 'left-open';

  FC.items('it-support', [
    // ----- parts -----
    chat('l18-r-cam', 'mobile-parts', 'Bea, Recruiting',
      'On video calls my laptop’s camera shows a black picture. The same call app shows my face fine on my coworker’s laptop. A small sliding cover on my laptop’s camera is closed.',
      'What is the cheapest thing to try first?', [
        ['Slide the camera cover open, then test the call again to see the picture', true, 'A closed cover gives a black picture and costs one touch to check. It is the cheapest cut before any part is changed.'],
        ['Open the lid and replace the camera module right away', PART, 'The cover has not been looked at yet, and opening the lid risks the antenna wires and other parts.'],
        ['Reinstall the call app on the laptop and test the picture again', NOSPLIT, 'The app works on the coworker’s laptop. The cover is on the hardware side of Bea’s laptop.'],
        ['Replace the laptop’s microphone', CAUSE, 'The microphone is not part of the black picture, and nothing points at it.']],
      'The deciding words are a closed cover and a black picture. A privacy cover blocks the lens, so opening it is the cheapest test.'),
    chat('l18-r-drive', 'mobile-parts', 'Amelia, Design',
      'My laptop’s storage is full. The laptop has a small gum-stick shaped card on the board where the drive sits, with no cable, and no 2.5 inch drive bay. I bought a 2.5 inch SSD.',
      'What is the problem?', [
        ['The laptop takes an M.2 drive, which fits that small slot; a 2.5 inch drive has no bay', true, 'M.2 drives are the small gum-stick shape and plug straight into the board. A 2.5 inch drive needs a bay that this laptop does not have.'],
        ['The 2.5 inch drive is right, but the laptop needs a firmware update before it can accept it', WSHAPE, 'Firmware cannot make a bay appear. The drive is the wrong shape.'],
        ['The M.2 drive is the old kind, and the new 2.5 inch drive was the better choice', LOOK, 'It is the reverse: M.2 is the small stick in Amelia’s laptop. The 2.5 inch drive has no place to go.'],
        ['Nothing is wrong; plug the 2.5 inch drive in through the charger socket', PORT, 'The charger socket carries power into the laptop. It is not a data port for a drive.']],
      'The deciding words are the gum-stick slot with no cable, and no 2.5 inch bay. That is an M.2 slot, and a 2.5 inch drive has nowhere to go.'),
    chat('l18-r-mic', 'mobile-parts', 'Polly, Training',
      'People cannot hear me on calls from my laptop. My headset works on a coworker’s laptop. In the sound settings, the laptop’s built-in microphone shows no movement when I speak.',
      'What is the cheapest test to split the built-in microphone from the call app?', [
        ['Record a few words in the laptop’s sound recorder, which uses no call app', true, 'If the recorder also shows nothing, the microphone or its settings are at fault. If it moves, the call app is.'],
        ['Replace the laptop’s built-in microphone right now', PART, 'No test has split the part from the software yet.'],
        ['Reinstall the call app', NOSPLIT, 'The sound settings belong to the laptop, not to the app. The recorder splits them.'],
        ['Buy a new headset', CAUSE, 'The headset works on the coworker’s laptop, and it is not what was in use here.']],
      'The deciding words are no movement in the sound settings. A recorder with no call app in it is the cheapest cut between the microphone and the app.'),

    // ----- ports and accessories -----
    chat('l18-r-micro', 'mobile-ports', 'Nell, Stockroom',
      'The scanner in the stockroom has a small flat plug-in port, wider at the top, that goes in one way only. The only cable I have has a thin oval end that goes in either way up.',
      'What does the scanner need?', [
        ['A micro-USB cable; the oval USB-C end will not fit its flat port', true, 'A small trapezoid port that goes in one way is micro-USB. A USB-C plug is a reversible oval and will not go in.'],
        ['A Lightning cable, which goes in one way only on small devices', PORT, 'Lightning is Apple’s reversible plug and a scanner would not use it.'],
        ['A mini-USB cable; it is the small plug that goes in either way up', PORT, 'Mini-USB goes in one way only, and it is bigger than micro-USB.'],
        ['The cable Nell has, pushed in harder from the other side', PORT, 'A plug that does not fit the port is the wrong cable. Forcing it damages the port.']],
      'The deciding words are a flat port, wider at the top, one way only. That is micro-USB. USB-C is the reversible oval Nell already holds.'),
    recall('l18-r-point', 'mobile-ports', 'Some laptops have a small rubber nub between the G, H and B letters on the keyboard that moves the pointer. What is it called? Two words.', ['track point', 'trackpoint', 'pointing stick'],
      'A track point, also called a pointing stick, moves the pointer by pressure. The trackpad is the flat touch panel under the keyboard, and a drawing pad is a separate pen tablet.'),
    chat('l18-r-share', 'mobile-ports', 'Perpetua, Field team',
      'There are four of us in a car park, and none of our laptops or tablets has cellular. One phone has data. We all need to be online for an hour.',
      'What do you turn on at the phone?', [
        ['A hotspot, so the phone becomes a Wi-Fi network that all four can join', true, 'A hotspot makes a Wi-Fi network from the phone’s data. Several devices can join it. USB tethering serves one computer.'],
        ['USB tethering to all four with one cable, which shares to every device at once', LOOK, 'Tethering over a cable serves the one computer plugged in.'],
        ['A docking station, which gives each laptop its own data from the phone', PORT, 'A docking station adds ports and power. It does not make a data connection.'],
        ['A Bluetooth headset link, so that each device uses the phone’s sound and data', LOOK, 'A headset link carries sound and not an internet connection.']],
      'The deciding words are four devices and one phone with data. A hotspot turns the phone into a Wi-Fi network, so several devices can join it at once.'),

    // ----- connections and company management -----
    chat('l18-r-loc', 'mobile-connect', 'April, Delivery',
      'The map app on my work phone cannot find where I am. It says location is off. My signal and data are fine. The phone is a company phone and I have not changed anything.',
      'What do you check first?', [
        ['Turn location services on for the phone, and allow them for the map app', true, 'Location services use GPS, with nearby Wi-Fi and cell towers for a rough fix. The app needs them on and permission to use them.'],
        ['Replace the SIM card', LINK, 'The SIM identifies the subscriber to the carrier. It does not give a position.'],
        ['Turn on the hotspot, which lets the phone find its own location', SWITCH, 'A hotspot shares data. It does not give the phone a position.'],
        ['Reinstall the map app and pair it with a Bluetooth speaker to test', NOSPLIT, 'The message says location is off. Reinstalling the app leaves that off.']],
      'The deciding words are location is off, with fine signal and data. Location services are a switch, and the app needs permission to use it.'),
    chat('l18-r-sim', 'mobile-connect', 'Mara, Accounting',
      'I moved my SIM card from my old phone into my new one. It now says no service, and I cannot call. The new phone is the same make. The old phone made calls well yesterday with this SIM.',
      'What is the cheapest test to split the SIM from the new phone?', [
        ['Put the SIM back into the old phone and see if that phone gets service again', true, 'If the old phone gets service with this SIM, the SIM is fine and the new phone is the place to look. If it does not, the SIM or the account is.'],
        ['Order a new SIM card from the carrier and wait for it to arrive', PART, 'A new card is a costly guess. A swap of one SIM tells which side it is on.'],
        ['Turn on the hotspot on the new phone, to see if it gets service', SWITCH, 'The hotspot shares a connection that the phone already has. It cannot create service.'],
        ['Reset the new phone to factory settings and put the SIM in again', WIPE, 'A reset erases the new phone and costs more than moving a card back.']],
      'The cheapest cut puts the one SIM into the phone known to work. If the old phone gets service, the SIM is cleared and the new phone is at fault.'),
    chat('l18-r-pin', 'mobile-connect', 'Gianna, Fleet',
      'I am pairing my phone with a new car. The phone found the car, and now both screens show a six-digit number. The car asks me to confirm.',
      'What does Gianna do?', [
        ['Check that the two numbers match, and then confirm on both screens', true, 'This is the PIN step of pairing. The matching numbers show the two devices are talking to each other and not to a stranger.'],
        ['Cancel and begin again', CAUSE, 'The number is part of pairing. It is the step, not a fault.'],
        ['Turn off Bluetooth on the phone, so that the number goes away', SWITCH, 'That ends the pairing and leaves the car unpaired.'],
        ['Type the number into the phone’s search box, as a code for the car', NOSPLIT, 'A code to confirm is compared on both screens, and no search box needs it.']],
      'The deciding words are both screens show a six-digit number. Pairing runs: on, pairing mode, found, PIN, test. Matching the number is the PIN step, then the pair is tested.'),

    // ----- securing phones -----
    chat('l18-r-patch', 'mobile-secure', 'Edna, Security',
      'A flaw in the phone’s operating system lets a website take over the phone. The maker has released an update that fixes it. Our company has 200 phones.',
      'What does the desk do?', [
        ['Require the update on all phones through MDM, within a fixed number of days', true, 'Patch management keeps phones updated, and MDM can require a minimum version and block phones that fall behind.'],
        ['Wait to see whether anyone loses data before installing the update', CAUSE, 'The flaw is already known. Waiting leaves 200 phones open.'],
        ['Tell each person that they may update if they have time this month', OPEN, 'Some will not. A flaw that takes over a phone needs a deadline.'],
        ['Turn off the phones’ location services, which removes the flaw', LINK, 'Location services have nothing to do with a flaw in the system software.']],
      'The deciding words are a flaw, a released fix and 200 phones. Patch management installs updates on a deadline, and MDM is the tool that enforces it.'),
    chat('l18-r-filter', 'mobile-secure', 'Antonia, Security',
      'Our staff phones keep opening harmful websites from links in text messages. We want something on the phones that blocks whole categories of sites and also catches malware.',
      'What do you put on the phones?', [
        ['Endpoint security: an anti-malware app with content filtering', true, 'Endpoint security protects the device itself. Anti-malware catches harmful apps and files, and content filtering blocks categories of sites.'],
        ['A longer screen lock PIN, which stops sites from being opened', LOCK, 'A PIN guards the phone against someone else holding it. It does not filter links.'],
        ['A locator app, so that harmful sites can be found on the map', LOOK, 'A locator shows where a lost phone is. It does not look at websites.'],
        ['Remote backup, which keeps a copy and filters links as it copies', LOOK, 'A backup keeps a copy of data. It does not block anything.']],
      'The deciding words are blocks whole categories of sites and catches malware. That is endpoint security with content filtering.'),
    recall('l18-r-backup', 'mobile-secure', 'Before a phone is lost, a company wants a copy of its photos, contacts and files kept in the cloud, so that a wipe does not lose them. What is that kind of backup called? Two words.', ['remote backup', 'cloud backup'],
      'A remote backup keeps a copy of the phone’s data away from the phone. With one in place, a wipe of a lost phone loses little, and the data can be restored to a new phone.')
  ]);
})();
