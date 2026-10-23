// IT Help Desk, lesson 17 "Wireless and the small office network" (part wireless): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 1 2.2 (2.4, 5 and 6 GHz; channels, widths and country rules; 802.11 standards; Bluetooth, NFC, RFID),
// Core 1 5.5 (intermittent wireless, slow speeds, external interference, authentication failures), Core 2 2.3 (WPA2, WPA3, TKIP, AES, RADIUS, TACACS+, Kerberos,
// multifactor) and Core 2 2.10 (router: default password, IP filtering, firmware, content filtering, placement, UPnP, screened subnet, secure management; wireless: SSID,
// hiding it, encryption, guest access; firewall: unused ports, port forwarding). The way of working is the technician's: cut the problem with the cheapest test, a
// cable against Wi-Fi (IT4, IT8), then one change (IT9). Judgement call: the depth of the 802.11 standards (b, a, g, n, ac, ax, be: bands and Wi-Fi names only).
// Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows, id) => ({ kind: 'document', form: 'table', ...(id ? { id } : {}), title, head, rows: rows.map(([rid, ...cells]) => ({ id: rid, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const BAND = 'wrong-band', WEAK = 'weak-lock', OPEN = 'left-open', AUTH = 'wrong-auth', SHARED = 'shared-network', LINE = 'blamed-line',
    LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split';
  const W = 'wifi', S = 'short-range', F = 'wifi-fix', X = 'wifi-security', O = 'soho';

  FC.items('it-support', [
    // ----- the worked ticket: the favorite cause (the internet line) ruled out by one cable, then a crowded channel -----
    item({
      id: 'l17-w-room', strand: F,
      blocks: [
        msg('chat', 'Rosa, Sales', 'Chat with the help desk', [['p1', 'The Wi-Fi in the conference room crawls every afternoon and video calls freeze. Other rooms are fine. I think our internet line is bad.']]),
        table('Wi-Fi analyzer, conference room, 2.4 GHz band', ['Network', 'Channel', 'Signal'], [
          ['a1', 'Our office network', '6', 'Strong'],
          ['a2', 'CafeGuest', '6', 'Strong'],
          ['a3', 'Studio5', '6', 'Medium'],
          ['a4', 'NetHome-77', '7', 'Medium']]),
        msg('note', 'Your notes', 'On the desk', [['n1', 'The router offers a 2.4 GHz name and a 5 GHz name, and Rosa’s laptop can use both. A wall jack in the room goes to the same switch as the office.']])],
      asks: [ask('You plug her laptop into the wall jack: a speed test gives 280 Mbps. On Wi-Fi in the same spot it gives 12 Mbps. What does that show?', [
        ['The internet line is fine; the slow part is the Wi-Fi in this room.', true, 'The cable took the same line and the same router and was fast, so the part left is the radio link.'],
        ['The internet line is slow in the afternoons, and the Wi-Fi shows it first.', LINE, 'A slow line would be slow on the cable too. The cable test was fast.'],
        ['The laptop’s network card is failing, so every connection it makes is slow.', CAUSE, 'The card is part of the cable test too, and it gave 280. Only the wireless path differs.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits “slow in one room”.', working: 'The internet line; the router; a crowded Wi-Fi channel or noise from something else; distance and walls; the laptop.' },
        { id: 'favorite', does: 'Name the favorite cause and test it cheaply.', working: 'Rosa says the line. The cheapest cut is one cable: plug the laptop into the wall and run the same speed test.', ask: 'a' },
        { id: 'cut', does: 'Drop the cause the test rules out.', working: 'The line and the router are fine at 280 Mbps. Everything before the radio link works, so look at the radio link.' },
        { id: 'analyzer', does: 'Test the next cause with a Wi-Fi analyzer.', working: 'The analyzer lists four networks on 2.4 GHz, ours included: three on channel 6 and one on channel 7. Our own is one of the three on channel 6, so those three share the same lane and take turns.' },
        { id: 'one', does: 'Change one thing: leave the crowded band.', working: 'The router offers a 5 GHz name and her laptop can use it; 5 GHz has far more channels and fewer neighbors. She joins the 5 GHz name and the speed test gives 180 Mbps.' },
        { id: 'done', does: 'Check with Rosa and write it up.', working: 'The call stays smooth. The note says: slow in conference room, line fine by cable, 2.4 GHz channel 6 crowded, moved to 5 GHz.' }],
      deciding: ['p1', 'a1', 'a2', 'a3', 'a4'],
      reason: 'Rosa blamed the line. One cable test split the path: fast by cable, slow on Wi-Fi, so the line was ruled out. The analyzer then showed four networks on channels 6 and 7, three of them on channel 6, so the cause was a crowded channel, fixed by one change of band.' }),

    // ----- group 1: with the deciding words marked -----
    chat('l17-p-walls', W, 'Ravi, Facilities',
      'The tax team sits at the far end of the floor behind two brick walls. The office router gives two Wi-Fi names, one on 2.4 GHz and one on 5 GHz. Their laptops show one bar on the 5 GHz name and three bars on the 2.4 GHz name.',
      'Which name do you tell them to use, and why?', [
        ['The 2.4 GHz name, because that band reaches farther and passes walls better', true, 'A lower frequency travels farther and loses less to walls. It is slower, but a steady signal beats a fast one that drops.'],
        ['The 5 GHz name, because it is faster and the signal only needs to be good enough', BAND, 'A higher frequency carries more data over a shorter distance, and walls absorb it more. One bar is not good enough.'],
        ['Either name, since bars are only a rough guide and the faster standard wins', BAND, 'Bars show how well the laptop hears the router. Here the 5 GHz name is heard least, because walls absorb it more.'],
        ['Neither: move the laptops closer to the router and test both names there', NOSPLIT, 'The tax team cannot move. The bars already show which band the walls leave strongest.']],
      'The deciding words are two brick walls and more bars on 2.4 GHz. The 2.4 GHz band has the longest reach and goes through walls best; 5 GHz is faster, but its reach is shorter.'),
    chat('l17-p-lunch', F, 'Dan, Front desk',
      'The Wi-Fi at the reception desk cuts out for a minute or two around noon and then comes back. The break room is on the other side of the wall, and people heat their lunch there. The laptop uses the router’s 2.4 GHz name. The router also has a 5 GHz name, and the laptop can use it.',
      'What is the cheapest thing to try first?', [
        ['Join the 5 GHz name, which a microwave oven does not disturb', true, 'A microwave oven gives off radio noise in the 2.4 GHz band. On 5 GHz the laptop is out of its way, and it costs one tap.'],
        ['Raise the channel width to 40 MHz so the signal is stronger and the dropouts stop', BAND, 'Width is not strength. A wider channel takes in more of the band, and on 2.4 GHz that means more noise, not less.'],
        ['Restart the laptop and see whether the dropout still happens at noon', NOSPLIT, 'A restart is cheap but cannot tell noise from any other cause, and the drop matches lunchtime in the next room.'],
        ['Call the internet provider about the noon outage', LINE, 'The line is not shown to fail. A drop at noon that clears alone points to the radio side.']],
      'The deciding words are around noon, the break room beyond the wall and the 2.4 GHz name. A microwave oven shares that band, so moving to 5 GHz is the cheap test that splits noise from every other cause.'),
    chat('l17-p-wpa3', X, 'Una, Office manager',
      'We are setting up the Wi-Fi for a new office. Every laptop and phone we own is under two years old, and the maker’s list says each works with WPA3. The router’s menu offers WPA3, WPA2 with AES, WPA2 with TKIP and None.',
      'Which security setting do you pick?', [
        ['WPA3, since every device in the office can use it', true, 'WPA3 is the strongest of the four, and the ticket says all the devices can use it.'],
        ['WPA2 with AES, since it is strong and works on every device made', WEAK, 'WPA2 with AES is strong, but WPA3 is stronger and every device here works with it.'],
        ['WPA2 with TKIP, since it is the most widely supported', WEAK, 'TKIP is the older, weaker way of scrambling the traffic. Nothing here needs it.'],
        ['None, with the Wi-Fi name hidden', WEAK, 'With no encryption anyone in range can read what is sent. Hiding the name does not change that.'],
        ['None, since the building door is locked', OPEN, 'Radio goes through walls and out to the street. A locked door does not keep the signal in.']],
      'The rule is the strongest security every device can use. Here every device works with WPA3, so WPA2 would leave strength unused. TKIP is old and weak, and None leaves the traffic open.'),
    item({
      id: 'l17-p-setup', strand: O,
      blocks: [
        msg('chat', 'Marta, Accounting', 'Chat with the help desk', [['m1', 'We start in the new office on Monday. The router is plugged in and everything works. Can you check it is safe to use?']]),
        msg('note', 'The new router', 'Its settings as it came out of the box', [
          ['t1', 'Router login: name admin, password admin (the maker’s default for this model)'],
          ['t2', 'Wi-Fi encryption: None, anyone can join'],
          ['t3', 'Firmware (the router’s own software): two years old; the maker’s site lists a newer one that fixes security flaws'],
          ['t4', 'Ports open to the internet: 21 and 23; nothing in the office uses them'],
          ['t5', 'Firewall: On'],
          ['t6', 'Addresses for the office computers (DHCP): On'],
          ['t7', 'Wi-Fi name broadcast: Off, so the name is not in the list']])],
      asks: [{ id: 'tap', kind: 'tap', prompt: 'Tap the four settings that must change before the office uses this router.', pick: 4, right: ['t1', 't2', 't3', 't4'] }],
      deciding: ['t1', 't2', 't3', 't4'],
      reason: 'Four settings leave a way in: the default login (published for the model), no encryption, old firmware with known flaws, and ports that nothing uses (21 is FTP and 23 is Telnet, which send passwords as readable text). The firewall and DHCP are meant to be on. Hiding the Wi-Fi name is not a fault, and not a lock either.' }),

    // ----- group 2: no help -----
    chat('l17-s-chan', W, 'Ola, Training',
      'The Wi-Fi in our building is slow. The analyzer shows neighbors on 2.4 GHz channels 1 and 6, and our router is on channel 3, which overlaps both.',
      'Which channel do you move the router to?', [
        ['Channel 11', true, 'Channels 1, 6 and 11 are the only three on 2.4 GHz that do not overlap, and 1 and 6 are taken.'],
        ['Channel 4, which sits between the neighbors on 1 and 6', BAND, 'Each channel is 20 MHz wide and they are 5 MHz apart, so channel 4 still overlaps both 1 and 6.'],
        ['Channel 8, a few steps away from the neighbor on 6', BAND, 'Channel 8 sits two steps from 6, so it overlaps 6.'],
        ['Channel 2, the one right next to the neighbor on 1', BAND, 'Channel 2 sits one step from 1, so it overlaps 1.']],
      'Two networks that overlap share the air and slow each other. On 2.4 GHz only channels 1, 6 and 11 are clear of each other, so with 1 and 6 taken the free lane is 11.'),
    chat('l17-s-nfc', S, 'Hana, Retail',
      'The new card reader takes payment when a customer holds a phone against it, almost touching, with nothing to pair first. What kind of radio is that?',
      'Which technology is it?', [
        ['NFC', true, 'NFC works only from a few centimeters, which is why the phone is held against the reader.'],
        ['Bluetooth', LOOK, 'Bluetooth reaches several meters and has to be paired first. Payment by a tap does not pair.'],
        ['5 GHz Wi-Fi', LOOK, 'Wi-Fi joins a device to a network over many meters. A payment tap needs no network name or password.'],
        ['Cellular data', LOOK, 'Cellular links a phone to a tower far away, not to a reader a few centimeters off.']],
      'A phone held almost touching means a range of a few centimeters. That is NFC, near field communication.'),
    item({
      id: 'l17-s-wired', strand: F,
      blocks: [
        msg('chat', 'Gus, Warehouse', 'Chat with the help desk', [['g1', 'Everything online is slow at my desk, Wi-Fi and all. We pay for 300 Mbps. Is it the Wi-Fi?']]),
        table('Speed tests from Gus’s laptop, same time', ['Connection', 'Result'], [
          ['t1', 'Plugged into the wall jack by cable', '14 Mbps'],
          ['t2', 'On Wi-Fi, 5 GHz, same spot', '13 Mbps']])],
      asks: [ask('What does the test show?', [
        ['The slow part is before the Wi-Fi: the line or the router’s connection to it', true, 'The cable is slow too, so a Wi-Fi fix would change nothing.'],
        ['The 5 GHz channel is crowded and the router needs a different channel', CAUSE, 'A crowded channel would slow only the Wi-Fi. The cable gave the same result.'],
        ['The laptop’s wireless card is failing, so both connections run slowly', CAUSE, 'The card is not used on the cable, and the cable is slow as well.'],
        ['Nothing yet; run the same test again until the numbers differ', NOSPLIT, 'The two numbers already split the path: they match, so the problem is shared by both.']])],
      deciding: ['t1', 't2'],
      reason: 'By cable and by Wi-Fi both give almost the same low speed. What both paths share is the line and the router’s link to it, so look there, not at channels.' }),
    chat('l17-s-tkip', X, 'Leo, Warehouse',
      'The router’s security menu lists WPA2 with AES, WPA2 with TKIP and WPA3 only. Most of our laptops are new, but the scanner guns and two old laptops can do WPA2 with AES and nothing newer.',
      'Which setting do you pick?', [
        ['WPA2 with AES', true, 'AES is the strong way of scrambling traffic in WPA2, and every device here can use WPA2.'],
        ['WPA2 with TKIP', WEAK, 'TKIP is the weaker, older scrambling. AES works on the same WPA2 devices.'],
        ['WPA3 only', 'wrong-setting', 'The scanners and old laptops cannot use WPA3, so they could not join.'],
        ['None, so the old devices can join', OPEN, 'No encryption lets anyone in range read the traffic, and WPA2 with AES already includes the old devices.']],
      'The oldest devices only know WPA2, so WPA3 only locks them out. Within WPA2, AES is the strong scrambling and TKIP the old weak one.'),
    chat('l17-s-guest', O, 'Tia, Front office',
      'Visitors in the waiting room asked for Wi-Fi, so I gave them the office password. One of them could see our shared printer in his list.',
      'What do you do instead?', [
        ['Guest access: a second Wi-Fi name with its own password, internet only', true, 'Guest access keeps visitors on a separate network that cannot reach the office computers or printer.'],
        ['Hide the office Wi-Fi name so visitors cannot find it, and give out the password', WEAK, 'Hiding the name does not stop anyone who already has the password, and the printer is still on the same network.'],
        ['Change the office Wi-Fi password every week and tell the visitors the new one', SHARED, 'Visitors would still join the office network each time.'],
        ['Tell visitors politely not to open the printer or any shared folders', SHARED, 'A request is not a control. The visitors are still on the office network.']],
      'The visitors reached the printer because they were on the office network. Guest access puts them on a separate network with its own password.'),
    chat('l17-s-forward', O, 'Ben, Facilities',
      'I put a camera in the shop and I want to watch it from home. The camera is at 192.168.1.60 and sends its video on port 8080. Its password is already changed from the maker’s default, and we have no VPN.',
      'What do you change on the router?', [
        ['Forward port 8080 to the camera', true, 'Port forwarding sends traffic arriving at port 8080 on to that one device. A VPN would be safer where the company has one.'],
        ['Forward every port to the camera, so that it works whatever it needs', OPEN, 'Only port 8080 is needed. Every port open makes the camera reachable on all of them from the internet.'],
        ['Turn UPnP on so the camera opens whichever ports it needs by itself', OPEN, 'UPnP lets any program on the network open ports without asking, and malware does the same.'],
        ['Turn the firewall off while he is watching the camera from home', OPEN, 'The firewall protects all the other computers. Only the one port needs a way through.']],
      'The camera needs one door from the internet, port 8080, to one device. Port forwarding makes exactly that door. Its password is already changed, which matters because the door faces the internet; a VPN is safer where one exists. The camera’s address is then kept fixed so the door keeps pointing at it.'),

    // ----- group 3: look-alikes and the harder cases -----
    chat('l17-g-std', W, 'Sam, Warehouse',
      'Our scanner guns can only use 802.11g. The new router gives a 2.4 GHz name and a 5 GHz name.',
      'Which name can the scanners join?', [
        ['The 2.4 GHz name', true, '802.11g works on 2.4 GHz only.'],
        ['The 5 GHz name', LOOK, '802.11a is the old 5 GHz one. 802.11g is on 2.4 GHz.'],
        ['Either: they pick the faster one', LOOK, 'A device can use only a band its radio has, and 802.11g has only 2.4 GHz.'],
        ['The 6 GHz name', BAND, '6 GHz needs a Wi-Fi 6E or 7 device.']],
      'The standard decides the band. 802.11b and 802.11g are 2.4 GHz only, 802.11a is 5 GHz only.'),
    chat('l17-g-auth', F, 'Eli, Sales',
      'Since the router was replaced last night I cannot join the Wi-Fi from my old tablet. It says authentication failed. I typed the password slowly, twice. My new phone joined fine. The router’s security page now shows only its newest type.',
      'What is the likely cause?', [
        ['The tablet is too old to use the router’s security type, so the sign-in is refused', true, 'Authentication is the sign-in step. A device that does not know the router’s security type fails it even with the right password.'],
        ['The 2.4 GHz channel is crowded, so the tablet times out when it signs in', CAUSE, 'Crowding makes Wi-Fi slow or patchy. It does not turn the sign-in away.'],
        ['The tablet is too far from the router, and the weak signal makes it fail', CAUSE, 'Distance gives a weak or dropping signal, not a refused sign-in. The message here is about authentication.'],
        ['The password is wrong, so he should try typing it a third time more slowly', CAUSE, 'He typed it twice and the phone joined with the same one. Typing it again changes nothing.']],
      'The deciding words are authentication failed, an old tablet, a new phone that joins and a router with only its newest type. The one thing that differs is the security type the device can speak.'),
    item({
      id: 'l17-g-radius', strand: X,
      blocks: [msg('chat', 'Mo, HR', 'Chat with the help desk', [['m1', 'We have 60 staff. Whenever someone leaves we change the Wi-Fi password and retype it on 59 devices. We want each person to sign in with their own account, so turning off an account turns off their Wi-Fi.']])],
      asks: [ask('What do you put in?', [
        ['Enterprise Wi-Fi security, with a RADIUS server checking each account', true, 'RADIUS is a server that checks who is signing in. The router queries it, so each person has an account and removing it removes the access.'],
        ['A TACACS+ server that the router queries about each of the staff', AUTH, 'TACACS+ checks administrators logging in to network devices, not staff joining the Wi-Fi.'],
        ['A longer shared Wi-Fi password that is changed each time someone leaves', WEAK, 'It is still one password for everyone, so the same retyping happens when anyone leaves.'],
        ['Kerberos tickets given out by the router to every person', AUTH, 'Kerberos proves identity for services in a Windows domain. The router queries a RADIUS server.']])],
      deciding: ['m1'],
      reason: 'The wish is one account each, ended by turning the account off. That is Enterprise security with RADIUS. The shared password of Personal security cannot do it, and TACACS+ and Kerberos do different jobs.' }),
    chat('l17-g-ssid', O, 'Ana, Accounting',
      'My manager wants to turn off SSID broadcast, the setting that stops the router sending out the Wi-Fi’s name. She says nobody can see the network then, so we can skip the Wi-Fi password.',
      'What does turning off SSID broadcast do?', [
        ['It leaves the name out of the list; the network can still be found, so encryption is still needed', true, 'The name is still in the air whenever a device joins, and tools can read it. Hiding it is no lock.'],
        ['It makes the network invisible outside the building, so a short password is enough', WEAK, 'It hides the name from the list only. Anyone who finds the name can try to join, so the password still has to be strong.'],
        ['It turns on encryption for the network, so the traffic is scrambled too', WEAK, 'Encryption is a separate setting. Hiding the name does not scramble anything.'],
        ['It stops devices from joining the network unless they were joined before', LOOK, 'Devices can still join; they have to type the name by hand.']],
      'SSID broadcast only announces the name. Turning it off removes the name from the list but not from the air, so it is no replacement for encryption.'),
    chat('l17-g-sub', O, 'Kim, Web team',
      'We run a small web server that customers must reach from the internet. If it is ever hacked, I want the office computers to stay out of reach.',
      'Where does the server go?', [
        ['In a screened subnet: a separate network between the internet and the office, with firewall rules each way', true, 'A break-in there lands in a small separate network, and the firewall between it and the office stops it going further.'],
        ['On the office network, with only the server’s web port forwarded to it', SHARED, 'A hacked server would sit next to every office computer.'],
        ['On the guest Wi-Fi network, away from the staff computers', SHARED, 'The guest network is for visitors’ devices. It is not made to host a server.'],
        ['On the office network, with UPnP turned on so the server opens its own ports', OPEN, 'UPnP lets programs open ports on their own, and the server would still share the office network.']],
      'A server the internet must reach is the likeliest to be attacked. A screened subnet keeps it apart from the office network, so a break-in there does not reach the office computers.')
  ]);
})();
