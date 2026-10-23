// IT Help Desk, lesson 17 "Wireless and the small office network": fifteen questions held in reserve for the weekly review, three for each of the five topics
// (bands and standards, short-range radio, wireless symptoms, security and sign-in, the router). Facts as in items-l17.js (A+ map Core 1 2.2, 5.5; Core 2 2.3, 2.10).
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const NOSPLIT = 'no-split', BAND = 'wrong-band', WEAK = 'weak-lock', OPEN = 'left-open', AUTH = 'wrong-auth', LINE = 'blamed-line', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', PART = 'part-first';

  FC.items('it-support', [
    // ----- bands, channels and standards -----
    chat('l17-r-width', 'wifi', 'Karina, Facilities',
      'Our 2.4 GHz Wi-Fi is crowded, and a colleague says to set the channel width to 40 MHz to double the speed.',
      'What happens if you do?', [
        ['It leaves fewer clear channels and takes in more noise, so it can get slower', true, 'A wider channel uses more of a small band, so more neighbors overlap it.'],
        ['The speed doubles in practice, because a wider channel carries twice the data', BAND, 'In a quiet place it would, but 2.4 GHz is small and crowded, so the gain is lost.'],
        ['The range doubles as well, because a wider channel reaches much farther', BAND, 'Width changes how much data goes at once, not how far it reaches.'],
        ['Nothing changes, since 40 MHz is the standard width for 2.4 GHz', BAND, 'The standard width on 2.4 GHz is 20 MHz. 40 MHz is allowed but takes in more noise.']],
      'Width is how wide a channel is: 20, 40, 80 or 160 MHz. Wider is faster only where there is room, and 2.4 GHz has room for little. It should stay at 20 MHz.'),
    recall('l17-r-n', 'wifi', 'Which Wi-Fi generation name goes with the 802.11n standard, the one that works on both 2.4 and 5 GHz?', ['Wi-Fi 4', 'WiFi 4'],
      '802.11n is Wi-Fi 4. It was the first standard to work on both 2.4 GHz and 5 GHz.'),
    chat('l17-r-six', 'wifi', 'Edmund, Design',
      'My new router has a 6 GHz name, but my three-year-old laptop does not see it. The laptop sees the 2.4 and 5 GHz names.',
      'Why not?', [
        ['The laptop’s radio is older than Wi-Fi 6E, the first generation that can use 6 GHz', true, 'Only Wi-Fi 6E and Wi-Fi 7 devices have the 6 GHz band.'],
        ['6 GHz reaches too far, so it is hidden from nearby devices and shows only far away', BAND, '6 GHz has the shortest reach of the three bands, so it is not hidden by distance.'],
        ['The 6 GHz name is switched off whenever the 5 GHz name is on at the same time', CAUSE, 'Each band is separate; one does not switch the other off.'],
        ['The laptop needs a driver update before it can see any new name', PART, 'The laptop sees the 2.4 and 5 GHz names, so its driver works. Its radio lacks the 6 GHz band.']],
      '6 GHz needs a Wi-Fi 6E or Wi-Fi 7 radio in the device. An older laptop sees only 2.4 and 5 GHz.'),

    // ----- Bluetooth, NFC and RFID -----
    chat('l17-r-bt', 'short-range', 'Mateus, New hire',
      'I want my wireless headset to work with my laptop from my desk and when I walk a few meters away. I had to confirm a code on both when I first connected them.',
      'What is the radio called?', [
        ['Bluetooth', true, 'Bluetooth reaches several meters and joins two devices by pairing, which is the confirmed code.'],
        ['NFC', LOOK, 'NFC works only from a few centimeters, so you could not walk away.'],
        ['RFID', LOOK, 'RFID reads tags. A headset is not a tag, and it does not pair.'],
        ['Wi-Fi, since the headset works across the room', LOOK, 'Wi-Fi joins a device to a network. The headset pairs straight with the laptop and needs no network name or password.']],
      'Pairing two devices that stay joined across a few meters is Bluetooth.'),
    recall('l17-r-nfc', 'short-range', 'Name the radio that works only from a few centimeters, used for tapping a phone to pay.', ['NFC', 'near field communication'],
      'NFC, near field communication, works over a few centimeters. It is why a phone must be held almost touching.'),
    recall('l17-r-rfid', 'short-range', 'Name the technology in which a reader uses radio to read a small tag, often with no battery in it, used for badges and for stock.', ['RFID', 'radio frequency identification'],
      'RFID, radio frequency identification: the reader’s signal powers the tag, which sends back its number.'),

    // ----- wireless symptoms -----
    chat('l17-r-tool', 'wifi-fix', 'Tomoko, Operations',
      'The Wi-Fi in our building is slow in the evenings. Which tool shows me every network nearby and the channel each is on?',
      'Which tool is it?', [
        ['A Wi-Fi analyzer', true, 'A Wi-Fi analyzer lists nearby networks, their channels and their signal strengths.'],
        ['A cable tester, which shows the networks in the air by reading the wires', LOOK, 'A cable tester checks the wires inside a network cable, not radio.'],
        ['A toner probe, which traces the signal of each network around the building', LOOK, 'A toner probe finds a cable by tracing a tone along it.'],
        ['A speed test, which lists the networks it finds on its way', LOOK, 'A speed test measures one connection. It does not list the networks around you.']],
      'The tool that shows networks and channels in the air is a Wi-Fi analyzer. It lets you pick a lane that is free.'),
    chat('l17-r-night', 'wifi-fix', 'Leandro, Resident',
      'The Wi-Fi in my apartment drops every few minutes, on every device. I moved the router to a free channel, then to 5 GHz, and it still drops. A router borrowed from the next office, put in the same spot, stays steady for an hour.',
      'What do you do next?', [
        ['Replace the router with a working one', true, 'Two changes of channel and band did not help, and a known-good router in the same spot is steady, so this router is the fault.'],
        ['Change the channel a third time and look at the speed test again', 'kept-guessing', 'Two channel changes already ruled out the air; the swap pointed at the router.'],
        ['Run another speed test on the borrowed router to double-check it', NOSPLIT, 'It already proved the spot is fine.'],
        ['Call the provider about the line', LINE, 'The borrowed router works on the same line.']],
      'The swap with a known-good router split the problem: same spot, same line, steady. After two changes that did nothing, replacing the router is the right step.'),
    chat('l17-r-cabinet', 'wifi-fix', 'Cy, Facilities',
      'The whole office Wi-Fi started dropping every few minutes after cleaners moved the router into a metal cabinet by the kitchen door.',
      'What do you try first?', [
        ['Put the router back in the open, high and central', true, 'Metal blocks radio, and the cabinet is the one thing that changed.'],
        ['Change every device to the 2.4 GHz name so the signal goes through the metal', CAUSE, 'The change was the router’s place, not the band, and the cabinet will block both.'],
        ['Reset every laptop’s network settings and join the Wi-Fi again', PART, 'All devices drop at once, so the common thing is the router.'],
        ['Restart the router and see whether it holds a while longer', NOSPLIT, 'A restart repeats the same setup. The cabinet is what changed, and it is still there.']],
      'Everyone drops since the router went into a metal cabinet. Placement is the change, and metal blocks radio. Put it back in the open.'),

    // ----- WPA, sign-in methods -----
    chat('l17-r-kerb', 'wifi-security', 'Candice, Accounts',
      'When I sign in to my Windows computer at work, I am not asked for my password again when I open the file server. What proves it is me?',
      'Which method does that?', [
        ['Kerberos, which gives tickets after one sign-in', true, 'Kerberos proves who you are once and hands out tickets for services, so passwords are not sent again.'],
        ['RADIUS, which scrambles the Wi-Fi', AUTH, 'RADIUS checks sign-ins for a network. It does not scramble Wi-Fi.'],
        ['TACACS+, which controls the file server’s folders', AUTH, 'TACACS+ checks administrators on network devices.'],
        ['WPA3, which keeps the office Wi-Fi sign-in safe', AUTH, 'WPA3 secures the Wi-Fi link. It does not give out tickets for file servers.']],
      'One sign-in and tickets for every service is Kerberos, the method of a Windows domain.'),
    chat('l17-r-factors', 'wifi-security', 'Ada, Finance',
      'Our bank site asks for more than a password when I sign in. I want to explain to the team which kinds of sign-in count as multifactor.',
      'Which pair is multifactor?', [
        ['A password and a code from an app on a phone', true, 'A password is known, a phone is held. Those are two kinds of factor.'],
        ['A password and a PIN, which they type one after the other', LOOK, 'Both are things you know, so it is the same kind twice.'],
        ['A password and a security question, answered from their memory', LOOK, 'Both are things you know, so it is the same kind twice.'],
        ['A fingerprint and a face scan on the same phone', LOOK, 'Both are things you are, so it is the same kind twice.']],
      'Multifactor takes two or more kinds: something you know, something you have, something you are. A password plus a PIN is one kind twice.'),
    recall('l17-r-tkip', 'wifi-security', 'Name the older, weak method of scrambling Wi-Fi traffic that the first WPA used and WPA2 replaced with AES. It has four letters.', ['TKIP'],
      'TKIP is the old method. WPA2 uses AES, which is the strong one.'),

    // ----- the small office router -----
    chat('l17-r-pw', 'soho', 'Troy, Front office',
      'The new router’s login is still admin and admin, the maker’s. It is only reachable from inside the office, so I think it is fine.',
      'What do you do about the login?', [
        ['Change the login to a strong password only the admin knows', true, 'The maker’s default login is published for the model. Anyone who gets onto the network, even a guest, can take over the router.'],
        ['Leave it as it is, since the page is only reachable from inside the office', OPEN, 'Anyone on the office network, including a visitor or a worm, could try it.'],
        ['Make it the same as the Wi-Fi password so there is only one to remember', OPEN, 'Everyone who knows the Wi-Fi password could then change the router.'],
        ['Write the default login on a label on the router so staff can find it', OPEN, 'A label tells every visitor the login too. The default is published for the model.']],
      'A default login is known to every attacker. Changing it is the first change on any router.'),
    chat('l17-r-place', 'soho', 'Aoife, Operations',
      'We are placing the office router. Someone suggests the cabinet by the entrance, someone else a shelf at the back.',
      'Where do you put it?', [
        ['High and central, in a spot staff cannot reach to press reset', true, 'Central gives even coverage, away from metal and the microwave, and out of reach keeps people from resetting it.'],
        ['In the metal cabinet by the entrance, where it is safe', BAND, 'Metal blocks radio, and a room-edge spot gives weak coverage on the far side.'],
        ['On the floor behind the front desk, next to the break-room microwave', BAND, 'The floor and a microwave next door spoil the signal.'],
        ['On the front desk, where visitors can see that it is working', OPEN, 'Within reach, anyone can press reset or plug in. Keep it out of reach.']],
      'Placement matters twice: coverage (central, high, clear of metal and microwaves) and security (out of reach so no one resets or plugs in).'),
    chat('l17-r-remote', 'soho', 'Cy, IT contractor',
      'The router lets me open its admin page from the internet. It saves me a visit, and it asks for the password.',
      'What do you do about remote management?', [
        ['Turn it off, or limit it to a secure connection from a known address', true, 'An admin page open to the whole internet is found and tried all day. Secure management access keeps it narrow.'],
        ['Leave it on, since the page wants a password before it lets anyone in', OPEN, 'A password alone leaves the page open to guessing from anywhere.'],
        ['Move the admin page to a different port number so that it is not so easy to find', OPEN, 'Hiding a page behind another port is found by a scan.'],
        ['Keep it on, and change the router login once a year', OPEN, 'A page open to the internet is tried all day. A yearly change leaves it open.']],
      'Secure management means keeping the admin page off the open internet, or reachable only by a secure connection from a known place.')
  ]);
})();
