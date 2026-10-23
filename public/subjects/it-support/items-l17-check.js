// IT Help Desk, lesson 17 "Wireless and the small office network": the eight new questions of the check (one on standards, one on short-range radio,
// one wireless symptom, two on security and sign-in, three on the router). Facts as in items-l17.js (A+ map Core 1 2.2, 5.5; Core 2 2.3, 2.10). Invented people.
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
    recall('l17-k-ax', 'wifi', 'The box of a new router says 802.11ax. What Wi-Fi name does that standard go by on the box?', ['Wi-Fi 6', 'WiFi 6'],
      '802.11ax is Wi-Fi 6. The numbered names run: 802.11n is Wi-Fi 4, 802.11ac is Wi-Fi 5, 802.11ax is Wi-Fi 6 and 802.11be is Wi-Fi 7.'),
    chat('l17-k-rfid', 'short-range', 'Joel, Warehouse',
      'We put a cheap tag with no battery on every pallet. A reader at the dock door picks up all the tags on a pallet as the forklift drives through.',
      'Which technology is that?', [
        ['RFID', true, 'An RFID reader powers each tag with its radio signal and reads it, from a few centimeters up to meters, with no pairing.'],
        ['NFC', LOOK, 'NFC is a kind of RFID with a very short reach that works from only a few centimeters, too short for a forklift driving past a door.'],
        ['Bluetooth', LOOK, 'Bluetooth devices pair one to one and need their own power. A cheap tag with no battery cannot do that.'],
        ['Wi-Fi', LOOK, 'Wi-Fi joins devices to a network and needs a powered radio, which a tag with no battery does not have.']],
      'Tags without a battery, read from a distance by a reader, are RFID. The reader’s signal powers each tag. NFC reaches only a few centimeters, and Bluetooth and Wi-Fi need powered, paired devices.'),
    chat('l17-k-far', 'wifi-fix', 'Mika, Design',
      'My new laptop has Wi-Fi 6E. On the router’s 6 GHz name it is very fast beside the router, but it drops in the meeting room two walls away. The router also has a 5 GHz and a 2.4 GHz name, and the laptop can use all three.',
      'What is the cheapest thing to try first?', [
        ['Join the 5 GHz name, which reaches farther through walls than 6 GHz', true, '6 GHz has the shortest reach of the three bands. 5 GHz goes farther, and joining it costs one tap.'],
        ['Raise the channel width to 160 MHz to get more signal into the meeting room', BAND, 'A wider channel carries more data over a short distance. It does not extend the reach.'],
        ['Replace the laptop’s wireless card', PART, 'Nothing points at the card. The problem follows the walls and the distance.'],
        ['Run a speed test beside the router', NOSPLIT, 'Beside the router it already works, so that test cannot say why the meeting room drops.']],
      'It is fast close by and drops two walls away, so reach is the cause. 6 GHz reaches the least of the three bands, so a step down to 5 GHz is the cheap test.'),
    chat('l17-k-tacacs', 'wifi-security', 'Sue, Network team',
      'Our network admins sign in to the routers and switches. We want one central server that keeps who they are, what each may do and what each did as three separate jobs, and that decides which commands each admin may run.',
      'Which does that?', [
        ['TACACS+', true, 'TACACS+ is made for administrators logging in to network devices. It keeps authentication, authorization and accounting apart, and it decides what each may run.'],
        ['RADIUS, which checks every user who joins the network', AUTH, 'RADIUS combines authentication and authorization, and is used mostly for people joining the network, such as Wi-Fi or a VPN.'],
        ['Kerberos', AUTH, 'Kerberos gives sign-in tickets in a Windows domain. It is not made to control the commands on network devices.'],
        ['WPA3', WEAK, 'WPA3 secures the Wi-Fi link between devices and the router. It does not check admin logins.']],
      'The job is admins on network devices, with the three jobs kept apart and each limited to certain commands. That is TACACS+. RADIUS combines authentication and authorization and checks users joining the network.'),
    chat('l17-k-mfa', 'wifi-security', 'Ned, Accounts',
      'A user gave away her password in a phishing email (a fake message that tricks people). I want a change so that the password alone can no longer sign anyone in to her account.',
      'Which change does that?', [
        ['Require a code from an app on her phone as well', true, 'A password is something she knows. A code from her phone is something she has, so a thief with only the password is stopped.'],
        ['Make her password longer and have her change it every month', WEAK, 'It is still one factor, and the thief now knows the new one.'],
        ['Switch the office Wi-Fi from TKIP to AES, so the traffic is scrambled better', LOOK, 'That changes how the Wi-Fi is scrambled, not how her account signs in.'],
        ['Turn off SSID broadcast so the Wi-Fi name is not shown in the list', LOOK, 'That hides the Wi-Fi name. It has no effect on her account.']],
      'Multifactor means two or more of something you know, something you have and something you are. The stolen password is one; the phone code is a second that the thief lacks.'),
    chat('l17-k-upnp', 'soho', 'Pat, IT',
      'A worm (self-spreading harmful software) on one laptop opened a port on the office router by itself, with no one asking. The router has a setting that lets programs and devices do that.',
      'What is the setting, and what do you do with it?', [
        ['UPnP (Universal Plug and Play): turn it off', true, 'UPnP lets any program open router ports without asking. Turned off, only ports you open yourself can be reached.'],
        ['UPnP: leave it on, since it helps the router control which ports are used', OPEN, 'UPnP is a convenience for programs. It gives malware the same power.'],
        ['IP filtering: turn it off, since it opens ports for programs', LOOK, 'IP filtering allows or blocks by address. It does not open ports for programs.'],
        ['Port forwarding: turn it off, since it lets programs open ports', LOOK, 'Port forwarding is a rule you add by hand. The setting that lets programs open ports themselves is UPnP.']],
      'The deciding words are a port opened by itself. That is UPnP, Universal Plug and Play. With it off, only ports you open by hand are reachable; which ports to open is a separate decision.'),
    chat('l17-k-fw', 'soho', 'Wes, Operations',
      'The maker’s site has an update for our router that fixes a flaw letting anyone on the internet take control of it. Ours is two updates behind. The office manager has approved the change for tonight.',
      'What do you do?', [
        ['Install the new firmware tonight', true, 'Firmware is the router’s own software, and an update fixes the flaw.'],
        ['Change the Wi-Fi password and the router’s login to be safe', OPEN, 'The flaw is in the router’s software, not in the Wi-Fi password.'],
        ['Turn off SSID broadcast so the Wi-Fi name is not shown in the list', WEAK, 'Hiding the Wi-Fi name does nothing about a flaw in the router’s software.'],
        ['Block the maker’s site with content filtering so staff cannot download it', CAUSE, 'That would cut the office off from the update and the flaw would stay.']],
      'A known flaw in the router’s software is closed by a firmware update. Save the settings first, because an update can reset them.'),
    chat('l17-k-filter', 'soho', 'Lena, Owner',
      'I want staff blocked from gambling and adult sites, whatever the address of the site is.',
      'Which router setting does that?', [
        ['Content filtering', true, 'Content filtering blocks sites by their category or words, so new addresses are still caught.'],
        ['IP filtering, which blocks by the address of each website', LOOK, 'IP filtering allows or blocks by the address of a device. It would take a list of every site’s address.'],
        ['Port forwarding, which sends the site traffic where it is wanted', LOOK, 'Port forwarding sends outside traffic in to one device. It blocks nothing.'],
        ['Guest access, which gives staff a separate Wi-Fi for browsing', LOOK, 'Guest access is a separate Wi-Fi for visitors. It does not filter sites.']],
      'Blocking by kind of site is content filtering. IP filtering works from addresses, and port forwarding and guest access do other jobs.')
  ]);
})();
