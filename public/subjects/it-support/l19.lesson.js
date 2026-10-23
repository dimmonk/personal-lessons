// IT Help Desk, lesson 19: Mobile problems (part mobile-fix). A phone or tablet as five links (the body; the connections; the system; the app; what was installed),
// each Core 1 5.4 and Core 2 3.2 and 3.3 symptom on its link, cut in half with the questions one app or all apps, Wi-Fi and cellular, after a restart, in safe mode
// (Android); the swollen battery as a safety stop; the security concerns (unofficial stores, developer mode, root or jailbreak, malicious and spoofed apps) and their
// signs. Research: docs/research/it-support.md IT4, IT5, IT8, IT9, IT2; docs/research/it-support-aplus.md Core 1 5.4, Core 2 3.2, 3.3. Plan: lesson 19. One worked ticket
// (Tess: the old battery that the phone’s own report rules out); a first group of four with the deciding words marked; a second of sixteen; a third of three mixed with
// lessons 5 and 18; the check: six new tickets, no help, 5 of 6 to pass.
FC.lesson('it-support', {
  id: 'l19', part: 'mobile-fix', title: 'Mobile problems', rev: 2, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the five links of a phone or tablet; hardware, system, app and security symptoms on their links; the swollen battery as a safety stop; the cuts one app or all apps, Wi-Fi and cellular, after a restart, in safe mode).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'Tess says the phone is slow and the battery is dead by lunch. Tess is sure it needs a new battery. The phone itself will say in a minute.',
    'A phone fails in five places, each with its own signs. Here you learn the five, the symptoms on each, the questions that cut them in half, and the one sign that means stop at once.'],
  flow: [
    { title: 'Five links in a phone',
      show: [{ kind: 'prose', text: [
        'Five places to look, from the part you can touch to the part you cannot see.',
        '1. The body. The battery, the charger and the charging port, the screen, and the layer under the glass that senses a touch (the digitizer).',
        '2. The connections. Wi-Fi, cellular (the phone network), Bluetooth for headsets and watches, and NFC (near-field communication), the very short range radio for tap to pay.',
        '3. The system. The operating system (OS, such as Android or iOS), storage, updates and restarts.',
        '4. The app. One program on the phone.',
        '5. What was installed. Where apps and settings came from: the official store, or somewhere unchecked.'] }] },
    { title: 'Body symptoms and the first check',
      show: [{ kind: 'document', form: 'table', title: 'The body: what you see, and the first check', head: ['What you see', 'Likely cause', 'First check'], rows: [
        { id: 'h1', cells: ['Battery drains fast or shuts off with charge left (poor battery health)', 'A worn battery', 'The phone’s battery health reading, then which app uses the battery'] },
        { id: 'h2', cells: ['Screen lifts, the back bulges, hot while charging', 'A swollen battery. A safety issue', 'Stop using and charging it at once (next screen)'] },
        { id: 'h3', cells: ['Charges slowly or only at an angle (improper charging)', 'Worn cable, weak charger, lint or a damaged port', 'Swap one part at a time: cable, charger, then look in the port. Try a wireless pad'] },
        { id: 'h4', cells: ['Cracked glass, or the picture is fine but touches land wrong or not at all (broken screen, digitizer)', 'Damaged screen or touch layer', 'Same in other apps? Look for a crack. Save data first'] },
        { id: 'h5', cells: ['Phone fell in water (liquid damage)', 'Liquid inside', 'Power off, remove cover and cables, no charging until checked'] },
        { id: 'h6', cells: ['Hot to hold (overheating)', 'Sun, charging, a heavy app, a cover', 'Cover off, out of the sun, stop charging. A bulge means a swollen battery'] },
        { id: 'h7', cells: ['Loose cable, bent contacts (damaged port)', 'The port is worn or bent', 'Swap cables, check the port with a light. Repair it'] },
        { id: 'h8', cells: ['Touches drift, land a little off, or happen by themselves (cursor drift, touch calibration)', 'Water, dirt, a screen protector, or calibration', 'Dry and clean the screen, test without the protector, then run the touch calibration'] },
        { id: 'h9', cells: ['Stylus draws nothing, finger works', 'Its battery, pairing or tip', 'Charge or replace its battery, pair it again'] }] },
      ] },
    { title: 'The one sign that means stop',
      show: [{ kind: 'prose', text: [
        'A swollen battery is a lithium-ion battery filled with gas. The screen lifts from its frame, the back puffs up, a laptop’s touchpad rises or the lid will not close. It can catch fire.',
        'So the first move is not a test. The user unplugs it, stops using it and does not charge it. Nobody presses on it or opens it. It stays away from heat and follows the desk’s rule for battery repair and disposal, never the ordinary bin.'] }] },
    { title: 'Connections, system and app',
      show: [{ kind: 'document', form: 'table', title: 'Links 2 to 4: what you see, and the first check', head: ['What you see', 'Link', 'First check'], rows: [
        { id: 'c1', cells: ['No bars, no Wi-Fi, nothing loads (poor or no connectivity)', '2. Connections', 'Airplane mode? Wi-Fi against cellular. Forget the network and rejoin it'] },
        { id: 'c2', cells: ['Bluetooth says connected, no sound, or will not pair', '2. Connections', 'On? Try each side with something else, then remove the saved pairing and pair again'] },
        { id: 'c3', cells: ['Tap to pay fails (NFC)', '2. Connections', 'NFC on, the phone right at the reader, a thick cover off'] },
        { id: 'c4', cells: ['Slow everywhere, apps will not install or the OS will not update', '3. System', 'Free storage, battery level, a connection. Then restart'] },
        { id: 'c5', cells: ['Battery life short with a healthy battery', '3. System or 4. App', 'The battery list names the app. Brightness, location'] },
        { id: 'c6', cells: ['Restarts by itself (random reboots)', '3. System or 4. App', 'After a restart? In safe mode? A recent app or update'] },
        { id: 'c7', cells: ['Screen does not turn sideways (autorotate)', '3. System', 'The rotation lock in the quick controls'] },
        { id: 'c8', cells: ['One app will not launch, close, update or install', '4. App', 'Reopen, restart, update, clear its cache (Android), reinstall (back up its data first)'] }] }] },
    { title: 'Cutting a phone in half',
      show: [{ kind: 'prose', text: [
        'Cheap questions cut the five links in half:'] },
      { kind: 'document', form: 'table', title: 'Questions that split a phone', head: ['Question', 'If yes', 'If no'], rows: [
        { id: 'q1', cells: ['Is it only one app?', 'Link 4, that app', 'Link 3 or 1, the whole phone'] },
        { id: 'q2', cells: ['Does it fail on both Wi-Fi and cellular?', 'The phone, or the account', 'That connection is the fault'] },
        { id: 'q3', cells: ['Does a restart fix it?', 'A stuck process, perhaps', 'Look further'] },
        { id: 'q4', cells: ['Fine in safe mode (Android; runs without installed apps)?', 'An app the user installed', 'The system or the body'] },
        { id: 'q5', cells: ['Does another cable or charger fix it?', 'The cable or charger', 'The port or the battery'] }] },
      { kind: 'prose', text: [
        'This assumes one fault at a time. The phone’s own reports are free: battery health, and the battery, data and storage lists. Safe mode is Android’s only.'] }] },
    { title: 'What was installed',
      show: [{ kind: 'document', form: 'table', title: 'The security concerns', head: ['Word', 'What it is', 'Why it matters'], rows: [
        { id: 's1', cells: ['Unofficial app store', 'A store or file not from the phone maker or the company', 'It skips the checks that catch bad apps'] },
        { id: 's2', cells: ['Developer mode', 'Settings for app builders (such as USB debugging)', 'They lower protections. Off unless needed'] },
        { id: 's3', cells: ['Root (Android), jailbreak (iPhone)', 'Removing the maker’s limits on the phone', 'A bad app then reaches everything'] },
        { id: 's4', cells: ['Malicious app', 'An app made to steal, spy or send ads', 'It reaches what the phone lets any app reach'] },
        { id: 's5', cells: ['App spoofing', 'A fake app copying a real one’s name and look', 'It wants things the real one does not'] }] },
      { kind: 'document', form: 'table', title: 'Signs of a bad app', head: ['What you see', 'What it points at'], rows: [
        { id: 'z1', cells: ['High network traffic, a data-usage warning, slow, hot', 'An app sending data in the background; the data list names it'] },
        { id: 'z3', cells: ['Many ads, even outside the app', 'Adware'] },
        { id: 'z4', cells: ['Fake security warning', 'A page or app that wants a tap on its button'] },
        { id: 'z5', cells: ['Odd app behavior, limited or no internet', 'An app changed settings or is blocking the connection'] },
        { id: 'z6', cells: ['Leaked photos, messages or accounts', 'An app that can read them'] },
        { id: 'z7', cells: ['Pop-ups only in the browser, after allowing a site’s notifications', 'The site may show them: remove its permission, clear the browser data'] }] },
      { kind: 'prose', text: [
        'This desk’s order for a bad app: save the files, cut the phone off the network (airplane mode), remove the app, scan with the company’s mobile anti-malware, update the OS, change passwords from another device, and close root or developer mode. A factory reset is last, if the scan is not clean. Tell the desk early; others may have the app.'] }] },
    { title: 'Slow, so reset the phone',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It is slow and the battery dies, so the battery is old. I will order one, and if that fails, wipe the phone.”',
        'Slow and a dead battery fit a worn battery, one app or a full phone. A battery costs money, a wipe costs the user’s data, and the battery report takes a minute and changes nothing.'] }] },
    { worked: 'l19-w-tess' },
    { set: { items: ['l19-p-swell', 'l19-p-touch', 'l19-p-wifi', 'l19-p-ads'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l19-s-charge', 'l19-s-wet', 'l19-s-battery', 'l19-s-update', 'l19-s-rotate', 'l19-s-bt', 'l19-s-reboot', 'l19-s-data', 'l19-s-sideload', 'l19-r-jailbreak', 'l19-s-life', 'l19-s-ghost', 'l19-s-popups', 'l19-s-compat', 'l19-s-av', 'l19-x-call'], order: 'shuffle' } },
    { set: { items: ['l19-g-hot', 'l19-g-spoof', 'l19-g-install'], order: 'shuffle', mix: { from: ['l5', 'l18'], share: 0.3 } } }
  ],
  check: {
    items: ['l19-k-crack', 'l19-k-hot', 'l19-k-air', 'l19-k-app', 'l19-k-root', 'l19-k-leak'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
