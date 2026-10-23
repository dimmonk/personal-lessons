// IT Help Desk, lesson 18 "Phones, tablets and laptops" (part mobile): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 1 1.1 (battery, keyboard, memory, drive, wireless card, biometrics and the near-field scanner, Wi-Fi antenna
// connector and placement, camera, microphone), 1.2 (USB, USB-C, micro-USB, mini-USB, Lightning, NFC, Bluetooth, tethering and hotspot; stylus, headsets, speakers, webcam;
// docking station, port replicator, trackpad, drawing pad, track point), 1.3 (cellular and Wi-Fi on and off, 3G/4G/5G, hotspot, SIM and eSIM, the Bluetooth steps,
// location services, MDM for corporate and BYOD devices, sync of mail, calendar and contacts, data caps) and Core 2 2.8 (encryption, screen locks, configuration profiles,
// patching, endpoint security, locator apps, remote wipe, remote backup, failed log-in limits, MDM, BYOD against corporate-owned, profile security requirements); Core 2 4.4
// (disconnect power, ESD) for opening a laptop. The way of working is the technician's: the cheapest test that splits the chain (IT4, IT5, IT8), one change (IT9), and who is
// calling before anything is locked or wiped (rulings-l1-8 no. 6). The chains are the plan's own cut: Bluetooth (on, pairing mode, found, PIN, test) and mobile data
// (switch, line, plan, account, sync). Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows, id) => ({ kind: 'document', form: 'table', ...(id ? { id } : {}), title, head, rows: rows.map(([rid, ...cells]) => ({ id: rid, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const PORT = 'wrong-port', SAFE = 'unsafe-open', WIPE = 'wipe-first', LOCK = 'weak-screen-lock', POL = 'wrong-policy', CAP = 'ignored-cap', SWITCH = 'wrong-switch',
    PART = 'part-first', NOSPLIT = 'no-split', CAUSE = 'wrong-cause', LOOK = 'mixed-look-alike', LINK = 'wrong-link', NOID = 'no-id-check', TWO = 'two-changes',
    PLUGS = 'plugs-in', WTOOL = 'wrong-part';
  const P = 'mobile-parts', Q = 'mobile-ports', C = 'mobile-connect', S = 'mobile-secure';

  FC.items('it-support', [
    // ----- the worked ticket: the favorite cause (a broken headset) ruled out by a second phone, then the pairing link -----
    item({
      id: 'l18-w-pair', strand: C,
      blocks: [
        msg('chat', 'Ana, Sales', 'Chat with the help desk', [['a1', 'My new earbuds will not work with my new phone. I tried three times. They must be broken, so I am sending them back.']]),
        msg('note', 'Your notes', 'On the desk', [
          ['n1', 'Ana’s phone: Bluetooth is on. In its Bluetooth list the earbuds appear under Saved devices as Not connected. The earbuds’ light blinks when they are in pairing mode.'],
          ['n2', 'A coworker’s phone is on the desk, with Bluetooth on.']])],
      asks: [ask('You put the earbuds in pairing mode and pair them to the coworker’s phone. They pair at once and play sound. What does that show?', [
        ['The earbuds work, so the fault is on Ana’s phone side of the pairing, not in the earbuds.', true, 'The same earbuds pair on another phone, so the earbuds are cleared. What differs is Ana’s phone.'],
        ['The earbuds work only with the coworker’s phone, the wrong model.', CAUSE, 'Earbuds are made to pair with any phone. Nothing in the test points at the model.'],
        ['The test proves nothing', NOSPLIT, 'Only one thing changed: the phone. That is why the test splits the earbuds from the phone.'],
        ['Ana’s phone must have a broken Bluetooth radio, so it needs replacing.', PART, 'The radio may be fine. One saved entry in Ana’s list has not been looked at yet.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits “new earbuds will not work with the new phone”.', working: 'The earbuds are faulty; they are not in pairing mode; the phone’s Bluetooth is off; an old saved entry in the phone is in the way; a PIN was not confirmed.' },
        { id: 'favorite', does: 'Name the favorite cause and test it cheaply.', working: 'Ana thinks the earbuds are broken. The cheapest cut is to pair them to a different phone.', ask: 'a' },
        { id: 'cut', does: 'Drop the cause the test rules out.', working: 'The earbuds pair and play on the coworker’s phone, so they are fine. The fault is on Ana’s side.' },
        { id: 'chain', does: 'Walk Ana’s phone along the chain: on, pairing mode, found, PIN, test.', working: 'Bluetooth is on. The earbuds are in pairing mode (the light blinks). They are not found as new, because a half-finished entry named Not connected is saved from Ana’s earlier tries.' },
        { id: 'one', does: 'Change one thing: forget the old entry and pair again.', working: 'Ana taps Forget on the saved entry, then scans, picks the earbuds and confirms the pairing. Nothing else is changed.' },
        { id: 'done', does: 'Test it with Ana and write it up.', working: 'Music plays, and a short test call works. The note says: new earbuds, stale saved entry, forgot it and paired again; earbuds fine.' }],
      deciding: ['a1', 'n1', 'n2'],
      reason: 'Ana blamed the earbuds. Pairing them to a second phone was the cheapest cut: they worked, so they were ruled out. The chain then showed Bluetooth on and pairing mode on, with a stale saved entry in the way, fixed by one change.' }),

    // ----- group 1: with the deciding words marked -----
    chat('l18-p-ram', P, 'Delia, Finance',
      'You are adding memory to a laptop. It is switched off, the charger is in the wall and the battery is inside the laptop. The memory sticks are small ones that sit under a cover on the bottom.',
      'What do you do before you touch the memory?', [
        ['Unplug the charger and battery, then ground yourself against static', true, 'Power must be off at every source, and static from your hands can destroy a memory chip. Taking out the screws in order comes after.'],
        ['Leave the charger in so the laptop stays grounded, and slide the memory out', SAFE, 'A plugged-in laptop still has power to its board. Disconnect first, then ground yourself.'],
        ['Put on rubber gloves so that nothing on your hands touches the board', SAFE, 'Gloves do nothing against static. A strap or touching bare metal lets the charge leave your body.'],
        ['Shut down in Windows and open the cover', SAFE, 'Shut down is not the same as unplugged. The battery and charger still feed the board.']],
      'The deciding words are the charger in the wall and the battery inside. Disconnect every power source, then ground yourself against static, before any part is touched.'),
    chat('l18-p-usbc', Q, 'Yaw, Marketing',
      'I need a charging cable for my new Android phone. The port is a small oval, and the plug goes in whichever way up I hold it. It is not an Apple phone.',
      'Which cable do you tell Yaw to buy?', [
        ['USB-C', true, 'A small oval plug that goes in either way up is USB-C. It carries power and data, and on many devices video.'],
        ['Micro-USB', PORT, 'Micro-USB is a flat, wider shape and goes in one way only. It is on older phones.'],
        ['Mini-USB', PORT, 'Mini-USB is bigger and older still, found on cameras and old gear, and it goes in one way only.'],
        ['Lightning', PORT, 'Lightning is Apple’s own thin plug. This is not an Apple phone.']],
      'The deciding words are a small oval and either way up. That is USB-C. Micro-USB and mini-USB fit one way only, and Lightning belongs to Apple.'),
    chat('l18-p-scan', C, 'Mike, Events',
      'The new conference speaker has been on for ten minutes. No light is lit and nobody has pressed its button. My phone’s Bluetooth is on and its scan lists other devices nearby, but the speaker never appears.',
      'What is the next step?', [
        ['Hold the speaker’s button until its light blinks, then scan again', true, 'A device must be discoverable before a phone can find it. The chain runs: on, pairing mode, found, PIN, test. The phone is on and lists other devices, so the speaker’s pairing mode is the link that fails.'],
        ['Restart the phone and scan again to see if the speaker shows up', NOSPLIT, 'A restart is cheap, but the phone already finds other devices. The speaker has not been made discoverable.'],
        ['Restore the phone to factory settings and pair again from the beginning', SWITCH, 'That erases the phone to fix a link that has not been checked yet.'],
        ['Return the speaker', PART, 'A new speaker may be fine. Nobody has tried its pairing mode.']],
      'The deciding words are no light, no button pressed, and other devices found by the phone. The phone side works, so the next link is the speaker being discoverable.'),
    chat('l18-p-lock', S, 'Leonard, Service manager',
      'My phone holds customer lists and my work email. Right now it unlocks with a swipe. A technician told me to pick a better screen lock.',
      'Which screen lock do you tell Leonard to choose?', [
        ['A six-digit PIN, with a fingerprint as a shortcut', true, 'A swipe is no lock at all. A PIN guards the phone, and the fingerprint is a shortcut with the PIN behind it.'],
        ['Keep the swipe, but add a picture as the lock screen so it is yours', LOCK, 'A picture changes how the screen looks, not who can open it.'],
        ['A pattern drawn on the screen', LOCK, 'A pattern is weaker than a PIN: a thief can see the smudges or watch it being drawn.'],
        ['A four-digit PIN', LOCK, 'A longer PIN is harder to guess. A six-digit one gives a thief far more to try than a four-digit one.']],
      'The deciding words are customer lists and a swipe. A swipe protects nothing. A PIN with a fingerprint shortcut protects the data and still opens fast.'),

    // ----- group 2: no help -----
    item({
      id: 'l18-s-wire', strand: P,
      blocks: [
        msg('chat', 'Una, Accounting', 'Chat with the help desk', [['u1', 'The vendor put in a new screen on my laptop yesterday. Since then the Wi-Fi shows one bar anywhere in the office. A coworker at the next desk has four bars.']]),
        msg('note', 'Your notes', 'On the desk', [['n1', 'Before the screen job, Una’s Wi-Fi worked well. The Wi-Fi card sits under the keyboard; its two thin antenna wires run up the hinge into the lid.']])],
      asks: [ask('What do you check first?', [
        ['That the two antenna wires are connected to the Wi-Fi card again', true, 'The antenna wires run through the lid. A screen job opens that part, so a wire may be loose. Weak signal after a repair points straight at it.'],
        ['Replace the Wi-Fi card with a new one and test the signal again', PART, 'A new card is a costly guess. The card worked before the screen job, so the antenna wires come first.'],
        ['Change the router’s channel', CAUSE, 'The coworker’s laptop shows the router and its channel are fine. Only this laptop changed.'],
        ['Reinstall the Wi-Fi driver', NOSPLIT, 'A driver does not become weak after a screen job. A wire that came loose does.']])],
      deciding: ['u1', 'n1'],
      reason: 'It worked before the screen job, a coworker on the same router is fine, and the antenna wires run through the lid that was opened. That points at a wire left off, not at the card, the driver or the router.' }),
    chat('l18-s-board', P, 'Charlie, Support',
      'Four letters on my laptop’s keyboard have stopped working since I spilled coffee on it. I shut it down and unplugged it at once and left it to dry overnight. It starts today and everything else works.',
      'What is the cheapest test to see whether the keyboard itself is the fault?', [
        ['Plug in an external USB keyboard and type the same letters', true, 'If the outside keyboard types them, the laptop is fine and the built-in keyboard is the part to replace.'],
        ['Reinstall Windows', PART, 'Reinstalling is a huge step. Spilled coffee points at the keyboard hardware, and an external keyboard checks that in a minute.'],
        ['Wipe the keyboard with a damp cloth and order a new laptop', SAFE, 'A damp cloth on a spilled-on laptop risks more liquid inside. Ordering a laptop is far more than the evidence calls for.'],
        ['Replace the built-in keyboard right away', NOSPLIT, 'The coffee fits, but nothing has yet split the keyboard from the software on top of it.']],
      'The built-in keyboard is cut from the rest by an external one. If the outside keyboard works, the keyboard hardware is the part to replace.'),
    chat('l18-s-tether', Q, 'Rhea, Consultant',
      'I am at a client site with no guest Wi-Fi. My phone has a good signal and plenty of data. My laptop has no cellular modem. I need the laptop online for an hour.',
      'What do you tell Rhea to do?', [
        ['Turn on the phone’s hotspot and join it from the laptop', true, 'A hotspot makes the phone a small Wi-Fi network. Tethering, sharing the data over a cable or Bluetooth, does the same job. Both use the phone’s data plan.'],
        ['Put the phone beside the laptop', LOOK, 'NFC works only from a few centimeters and carries small payments, not an internet connection.'],
        ['Pair the phone to the laptop as a Bluetooth headset', LOOK, 'A headset link carries sound, not the internet connection.'],
        ['Plug the laptop into a docking station', PORT, 'A docking station adds ports and power to a laptop. The internet connection still has to come from somewhere.']],
      'The deciding words are no guest Wi-Fi and a laptop without cellular. Hotspot and tethering both share the phone’s cellular data, and they use the plan’s data and the phone’s battery.'),
    chat('l18-s-dock', Q, 'Camilo, Design',
      'I come in with my laptop and want one connection to give it power, two monitors, a wired network, and a slot for an extra drive. A friend said to get a port replicator.',
      'What do you recommend, and why?', [
        ['A docking station', true, 'A docking station can add extras such as a drive slot. A port replicator only repeats the laptop’s ports onto the desk.'],
        ['A port replicator', PORT, 'A port replicator copies the laptop’s own ports. It does not add a drive bay.'],
        ['A drawing pad', LOOK, 'A drawing pad is a pen tablet for a computer. It does not connect monitors.'],
        ['A stylus', LOOK, 'A stylus is a pen for touch screens and has no part in connecting monitors or networks.']],
      'The slot for an extra drive is the deciding wish: it goes beyond repeating ports. A docking station can add it; a port replicator only copies the laptop’s own ports.'),
    chat('l18-s-signin', C, 'Dawn, HR',
      'I changed my company password on Monday. Since then my phone shows no new mail, and the calendar is stuck. A banner says I must sign in again. The phone has full signal and Wi-Fi.',
      'What do you do?', [
        ['Have Dawn sign in again with the new password in the phone’s mail account', true, 'The phone still holds the old password, so sync stops. The network is fine; the account link fails, and the banner says so.'],
        ['Turn on airplane mode for a minute, and then turn it off again', SWITCH, 'Airplane mode restarts the radios. The radios work: signal and Wi-Fi are full.'],
        ['Erase the phone and configure the work account again from the start', WIPE, 'That is the heaviest step and loses the local data. The banner points at one password.'],
        ['Put the SIM card into a different phone to see if mail arrives there', LINK, 'The mail does not depend on the SIM. It depends on the account being signed in.']],
      'The deciding words are changed my password and a banner asking to sign in. The network is fine, so the fault is the account link, and the cheapest change is to enter the new password.'),
    chat('l18-s-cap', C, 'Jolene, Sales rep',
      'My phone plan has a 10 GB limit. By the 12th I have used 9 GB. The data list says 7 GB of it is my photos syncing to cloud storage.',
      'What do you change?', [
        ['Switch photo sync to Wi-Fi only', true, 'The usage list names photo sync as the big user. Large transfers belong on Wi-Fi.'],
        ['Turn the phone’s cellular data off all month, and use it only on Wi-Fi', CAP, 'That would cut off mail and maps on the road. Only the heavy job needs moving to Wi-Fi.'],
        ['Delete the photos from the phone after they sync', CAP, 'The data is used when the photos are sent. Deleting them afterward saves none of it.'],
        ['Switch the phone to 3G', CAP, 'An older network is slower; it does not use less data for the same video.']],
      'The deciding words are a 10 GB limit, 9 GB used and 7 GB of photo sync. Large transfers belong on Wi-Fi, and moving that one job is a single change.'),
    item({
      id: 'l18-s-lost', strand: S,
      blocks: [msg('note', 'This desk’s rule', 'Lost phones', [
        ['r1', 'Confirm the caller with the desk’s identity check before any lock, wipe or reset.'],
        ['r2', 'Mark the phone as lost first: this locks it, shows a contact number on the screen, and shows where it is.'],
        ['r3', 'Wipe only when the owner confirms it is not coming back. A wipe cannot be undone.']])],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Nadia calls from a taxi stand. What do you say?', form: 'call', from: 'Nadia, Sales', detail: 'Incoming call · 6:40 PM', start: 'one',
        turns: {
          one: { lines: [L('c1', 'I think I left my work phone in a taxi an hour ago. It has customer lists and my mail. Please do something about it right now!')], push: 'Nadia is rushed and wants action at once.',
            options: [{ id: 'wipe', text: 'I will wipe the phone right now, so that nothing on it can be read.', end: 'wipenow' },
              { id: 'who', text: 'Before I do anything, I need to confirm who you are with our identity check.', goto: 'two' },
              { id: 'taxi', text: 'I will help right away. Please call the taxi company and phone me if it is not found.', end: 'taxi' }] },
          two: { lines: [L('c2', 'Okay, I have answered your questions. Can you find it? If not, wipe it.')], push: 'Nadia passes the desk’s identity check, and wants it found first and wiped second.',
            options: [{ id: 'mark', text: 'I will mark it lost, which locks it and shows where it is. You tell me if it is gone.', end: 'mark' },
              { id: 'wipe2', text: 'You said to wipe it if it is not found, so I am wiping it now.', end: 'wipenow2' },
              { id: 'wait', text: 'Let us wait until tomorrow in case the driver calls the number on the phone.', end: 'wait' }] }
        },
        ends: {
          mark: { ok: true, then: 'Marking it lost locks the phone and shows where it is, and nothing is erased that can still come back. Nadia decides on the wipe when it is known to be gone, which follows the desk’s rule.' },
          wipenow: { ok: false, slip: NOID, then: 'A wipe cannot be undone, and nobody has confirmed who is calling. Anyone could say they lost a phone to get one erased.' },
          taxi: { ok: false, slip: 'no-next', then: 'The phone stays unlocked and unwatched meanwhile. The desk can lock and locate it from here.' },
          wipenow2: { ok: false, slip: WIPE, then: 'Nadia asked to find it first. Wiping now erases the phone before the gentler step, and the wipe cannot be undone.' },
          wait: { ok: false, slip: 'waited-idle', then: 'Customer lists sit on an unlocked phone for the night. Marking it lost costs nothing and locks it.' } } }],
      deciding: ['r1', 'r2', 'r3'],
      reason: 'The desk’s rule gives the order: confirm who is calling, mark the phone lost (it locks and shows its place), and wipe only when the owner says it is not coming back.' }),

    // ----- group 3: look-alikes and the harder cases -----
    chat('l18-g-byod', S, 'Giulia, Operations',
      'Marco is leaving the company today. Marco reads work mail on a personal phone, which the company manages only for the work apps; the company can remove those apps and their data and nothing else. Family photos are on it too.',
      'What do you do to the phone?', [
        ['Remove the work apps and their data only, with a selective wipe', true, 'On a personal phone the company manages only the work part. A selective wipe takes out the work data and leaves Marco’s photos.'],
        ['Wipe the whole phone', POL, 'The company does not own the phone. A full wipe would destroy Marco’s own photos and data.'],
        ['Leave the phone alone and trust Marco to remove the mail', POL, 'The company mail and files must come off. Leaving them is a hole in the company’s protection.'],
        ['Lock the phone remotely until Marco hands it in', POL, 'It is Marco’s own phone, so locking it is out of bounds.']],
      'The deciding words are a personal phone and managed only for the work apps. A personal phone gets a selective wipe of the work part; a company-owned phone can be wiped whole.'),
    chat('l18-g-esim', C, 'Lia, Traveler',
      'I am flying abroad next week. My new phone is unlocked and has no slot for a SIM card, and I want a local data plan there without carrying a card.',
      'What do you tell Lia?', [
        ['Use an eSIM: buy a local carrier’s plan and add it by QR code or app', true, 'An eSIM is a SIM built into the phone, added to by a carrier’s QR code or app. No card is needed.'],
        ['Buy a SIM card and cut it down until it fits into the phone', PORT, 'The phone has no slot to put any card into.'],
        ['Turn on the hotspot of a friend’s phone and join its Wi-Fi in the other country', SWITCH, 'That depends on a friend’s plan and presence abroad, and not on Lia’s own plan.'],
        ['Keep the home plan and switch on data roaming for the trip', LINK, 'Roaming uses the home carrier’s plan and rates. Lia wants a local plan, and a local plan is added to the phone as an eSIM.']],
      'The deciding words are no slot for a SIM card. A phone without a slot has an eSIM, and a local plan is added to it through a carrier’s QR code or app.'),
    chat('l18-g-tries', S, 'Cleo, Front desk',
      'My little girl tapped my phone and now it says it is locked and to try again in one hour. I know my PIN. I am afraid that it will erase itself.',
      'What do you tell Cleo?', [
        ['Wait for the timer, then enter the right PIN', true, 'Failed log-in limits make each wrong try cost more time, and some policies erase the phone at a fixed count. Waiting and then using the right PIN is safe.'],
        ['Keep entering PINs until the timer clears and the phone opens', CAUSE, 'A wrong try adds to the count and lengthens the wait. A policy may even erase the phone at a fixed limit.'],
        ['Restart the phone to clear the lock and the timer', CAUSE, 'A restart does not clear a log-in lock. The timer and the count stay.'],
        ['Hand the phone to the desk to be wiped and configured again', WIPE, 'A wipe erases the phone. The lock clears by itself in an hour, and Cleo knows the PIN.']],
      'The deciding words are try again in one hour and I know my PIN. A failed-log-in limit slows or erases after too many wrong tries, so waiting and entering the right PIN is the cheap, safe step.'),
    item({
      id: 'l18-g-policy', strand: S,
      blocks: [
        msg('note', 'The company’s phone policy', 'Every company phone must meet all of these', [
          ['p1', 'Screen lock: a PIN of six digits or more, or a password'],
          ['p2', 'Encryption: on'],
          ['p3', 'Updates: install the phone’s and the apps’ updates within two weeks'],
          ['p4', 'Locator app: on, so a lost phone can be found'],
          ['p5', 'Remote backup: on'],
          ['p6', 'Fingerprint: allowed as a shortcut beside the PIN']]),
        msg('note', 'Anil’s new phone, as checked on the desk', 'Settings found', [
          ['s1', 'Screen lock: four-digit PIN'],
          ['s2', 'Encryption: on'],
          ['s3', 'Updates: the last update was installed five weeks ago; a newer one came out three weeks ago and is not installed'],
          ['s4', 'Locator app: off'],
          ['s5', 'Remote backup: on'],
          ['s6', 'Fingerprint: added as a shortcut']])],
      asks: [{ id: 'tap', kind: 'tap', prompt: 'Tap the three settings that break the policy.', pick: 3, right: ['s1', 's3', 's4'] }],
      deciding: ['p1', 'p3', 'p4', 's1', 's3', 's4'],
      reason: 'Three settings fall short of the policy: a four-digit PIN where six is needed, an update still not installed three weeks after it came out where two weeks is the limit, and a locator that is off. Encryption and the remote backup are on, and the fingerprint shortcut is allowed beside a PIN.' }),
    chat('l18-g-memory', P, 'Gerald, Facilities',
      'I bought memory for my laptop from the computer shop, and the sticks were long, like the ones in the office tower computers. I opened the laptop cover and the slot is much shorter.',
      'What did Gerald buy, and what does the laptop need?', [
        ['Tower memory (DIMM); a laptop needs the shorter SODIMM kind instead', true, 'Laptops use SODIMM, small outline memory. The long DIMM sticks from a tower will not fit the short slot.'],
        ['The right memory, but the laptop slot is faulty and must be replaced', WTOOL, 'The slot is made short on purpose. The sticks are the wrong shape.'],
        ['Laptop memory sticks (SODIMM); the tower needs the longer DIMM kind', LOOK, 'It is the other way round. The long sticks Gerald holds are DIMM, for towers.'],
        ['Memory sticks that need only a firmware update before they will fit', PLUGS, 'Firmware settings cannot change a stick’s length. The shape decides whether it fits.']],
      'Long sticks like those in a tower are DIMM. A laptop takes the shorter SODIMM. The shape of the part decides what fits, whatever the settings.'),

    // ----- facts said from memory -----
    recall('l18-t-esim', C, 'A phone has no card to slide in: its SIM is built in and added with a code from the carrier. What is that kind of SIM called?', ['eSIM', 'e-SIM', 'embedded SIM'],
      'An eSIM is built into the phone and added by the carrier’s QR code or app, so no card is swapped.'),
    recall('l18-t-nfc', P, 'A laptop’s scanner reads a badge or a tap-to-pay phone held a few centimeters away. What are the three letters of the technology?', ['NFC'],
      'NFC, near field communication, works from a few centimeters. It is the near-field scanner some laptops and most phones carry.'),
    recall('l18-t-replicator', Q, 'Which desk base only repeats a laptop’s own ports and adds nothing new? Two words.', ['port replicator'],
      'A port replicator repeats the laptop’s ports onto the desk. A docking station can add power, drives and more.'),
    recall('l18-t-usbc', Q, 'Which plug is a small oval that goes in either way up, and is on most current Android phones? Name it as a USB type.', ['USB-C', 'USB Type-C'],
      'USB-C is the small reversible oval. Micro-USB and mini-USB go in one way only, and Lightning is Apple’s own.'),
    recall('l18-t-byod', C, 'An employee uses their own phone for work mail, and the company manages the work part. What do the four letters BYOD stand for? Write the four words.', ['bring your own device'],
      'BYOD is bring your own device. The company manages the work part of such a phone and wipes only that, never the owner’s own data.'),
    recall('l18-t-wipe', S, 'What is the step called that erases a lost phone from afar, once it is online, and cannot be undone? Two words.', ['remote wipe'],
      'A remote wipe erases the phone from afar. It cannot be undone, so it comes after locking and finding the phone.')
  ]);
})();
