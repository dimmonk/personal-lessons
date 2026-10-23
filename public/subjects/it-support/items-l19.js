// IT Help Desk, lesson 19 "Mobile problems" (part mobile-fix): the worked ticket and the three groups of questions. A phone or tablet is five links (the body: battery,
// charger and port, screen and touch layer; the connections: Wi-Fi, cellular, Bluetooth, NFC; the system: storage, updates, restarts; the app; what was installed:
// the store, developer mode, root or jailbreak), cut in half with the questions one app or all apps, Wi-Fi and cellular, after a restart, in safe mode (Android).
// Research: docs/research/it-support.md IT4, IT5, IT8 (cut the problem space), IT9 (one change at a time), IT2 (protect the data); docs/research/it-support-aplus.md
// Core 1 5.4 (battery health, swollen battery, broken screen, charging, connectivity, liquid, overheating, digitizer, ports, malware, cursor drift and touch
// calibration, installing apps, stylus, performance), Core 2 3.2 (app fails to launch, close, update or install; slow; OS fails to update; battery life; random
// reboots; Bluetooth, Wi-Fi, NFC; autorotate) and 3.3 (unofficial app stores, developer mode, root or jailbreak, malicious apps and app spoofing; high network
// traffic, slow, data-usage warning, no internet, ads, fake security warnings, odd app behavior, leaked data). Invented people, phones and apps.
// Strands: mobile-hw-fix (links 1), mobile-app-fix (links 2 to 4), mobile-sec-fix (link 5).
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', TWO = 'two-changes', WIPE = 'wipe-first',
    UNSAFE = 'unsafe-battery', WET = 'wet-power', KEEP = 'kept-app', POPUP = 'obeyed-popup', NOBACK = 'no-backup', SIGN = 'ignored-sign',
    ONE = 'one-cause', JARGON = 'jargon', GUESS = 'guessed-cause', SCOPE = 'wrong-scope', RULED = 'kept-ruled-out', OPEN = 'open-up';
  const HW = 'mobile-hw-fix', AP = 'mobile-app-fix', SE = 'mobile-sec-fix';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (the old battery) that a look at battery health rules out, then safe mode splits the apps from the system -----
    item({
      id: 'l19-w-tess', strand: AP,
      blocks: [
        chat('Tess, Sales', 't1', 'My phone is slow and the battery is dead by lunch. It is three years old, so I guess I need a new battery. I have not changed anything.'),
        list('b', 'Settings, Battery (what the phone shows)', ['Line', 'Value'], [['Battery health', 'Maximum capacity 91%'], ['Top user since 8 AM', 'Snapfilter 58%, background activity'], ['Storage', '118 GB of 128 GB used']])],
      asks: [ask('What does the battery health line show?', [
        ['The battery holds 91% of its charge, so it is not the cause', true, 'A battery that holds 91% of its charge is in good shape. Something is draining it, and the list says what.'],
        ['The battery is worn out', CAUSE, 'Age was the guess. The phone’s own reading says 91%, which is healthy.'],
        ['The charger is failing', LINK, 'Nothing here is about charging. The battery holds its charge well and runs down because something uses it.'],
        ['The phone needs a factory reset to stop the battery draining', WIPE, 'A reset wipes everything and has not been shown to be needed. A cheaper test comes first.']])],
      steps: [
        { id: 'chain', does: 'Write the links, so every cause has a place.', working: 'The body (battery, port, screen), the connections, the system, the app, what was installed. “Slow, and the battery dies” could sit on the body, the system or one app.' },
        { id: 'favorite', does: 'Name the favorite cause and look before replacing: the phone reports its own battery health.', working: 'The favorite is an old battery. Maximum capacity is 91%, which is healthy. The battery is ruled out.', ask: 'a' },
        { id: 'list', does: 'Read the rest of the list. It changes nothing.', working: 'Snapfilter, a photo app, used 58% of the battery in the background. Storage is nearly full, 118 of 128 GB. The apps are now the suspects, but a list is not a test.' },
        { id: 'safe', does: 'Cut in half: all apps, or one? Start the phone in safe mode (Android), which runs without apps the user installed.', working: 'In safe mode the phone is quick and the battery holds. The system and the body are fine, and the fault is in an app the user installed. Ruled out: the battery, the charger, the screen.' },
        { id: 'one', does: 'Change one thing: remove Snapfilter alone, after Tess’s photos are backed up, then restart normally.', working: 'The phone is quick again and the battery lasts the day. Had it not changed, the next app would have gone, one at a time.' },
        { id: 'next', does: 'Confirm with Tess and write it down.', working: 'Tess confirms after a full day. The note says: slow and a dead battery, battery health 91%, safe mode fine, removed Snapfilter, fixed. Ordering a battery would have cost money and fixed nothing.' }],
      deciding: ['t1', 'b1'],
      reason: 'The favorite cause was the old battery, and the phone’s own report ruled it out in a minute. Safe mode then split all apps from one app, and removing one app at a time found it. A new battery would not have helped.' }),

    // ----- group 1: the deciding words marked; which link, which first move -----
    item({
      id: 'l19-p-swell', strand: HW,
      blocks: [
        chat('Finn, Front desk', 'a1', 'My tablet’s screen is lifting away from the frame at one edge and the back looks puffed up. It is on the charger right now so it will be full for the morning.')],
      asks: [ask('What do you tell Finn first?', [
        ['Unplug it and stop using it, and do not charge it until it is checked', true, 'A swollen battery is a safety problem. The cells are filling with gas, and charging or pressing on them can start a fire.'],
        ['Leave it on the charger until it is full, then bring it to the desk', UNSAFE, 'Charging a swollen battery adds heat and pressure. It is the one thing to stop at once.'],
        ['Press the screen back down gently so that it sits flat on the frame', UNSAFE, 'Pushing on a swollen battery can puncture it. The screen is lifting because of the battery under it.'],
        ['Restart the tablet to see whether the screen settles down again', NOSPLIT, 'A restart cannot shrink a swollen battery, and it keeps the tablet running while it is unsafe.']])],
      deciding: ['a1'],
      reason: 'A lifting screen or puffed back means a swollen battery, which is a safety issue, so the first move is to stop using and charging it. After that, keep it away from heat and follow the desk’s rule for battery disposal and replacement.' }),
    item({
      id: 'l19-p-touch', strand: HW,
      blocks: [
        chat('Astrid, Warehouse', 'b1', 'Since I dropped the phone, the picture is perfect but the screen answers touches in the wrong place. Tapping the top of the screen opens things near the middle.'),
        note('The five links: the body, the connections, the system, the app, what was installed.')],
      asks: [ask('Which link and which cheap test?', [
        ['The body: the touch layer. Try the home screen and two other apps', true, 'The picture is fine but touches land in the wrong place, which points at the digitizer, the layer that senses touch. The drop explains it.'],
        ['The app: delete the app Astrid was using and install it again from the store', LINK, 'It happens everywhere on the screen, not in one app, so one app is not the place to look.'],
        ['What was installed: run a malware scan on the phone, then check its apps', CAUSE, 'Nothing is installed that is odd, and a drop followed by bad touches is physical.'],
        ['The system: install every waiting update, then restart the phone', NOSPLIT, 'An update does not mend a damaged touch layer, and it changes the phone before the test is done.']])],
      deciding: ['b1'],
      reason: 'Right picture, wrong touches, right after a drop: the digitizer, which senses touch and sits on the screen. Test it in the home screen and two apps to show it is not one app. If it is the digitizer, the screen is repaired or replaced.' }),
    item({
      id: 'l19-p-wifi', strand: AP,
      blocks: [
        chat('Mo, Accounting', 'm1', 'My phone will not load anything at my desk. When I walk to the lobby it works. Everyone around me is fine.'),
        list('b', 'Mo’s phone', ['Test', 'Result'], [['On the office Wi-Fi', 'Connected, nothing loads'], ['Wi-Fi turned off, on cellular', 'Everything loads'], ['Other phones on the same Wi-Fi', 'Fine']])],
      asks: [ask('Which cut does the table make?', [
        ['Cellular works, so fix the phone’s Wi-Fi link: forget the network and rejoin', true, 'Other phones are fine on this Wi-Fi and Mo’s phone works on cellular. The fault is how this phone joined the Wi-Fi.'],
        ['The office Wi-Fi is down, so tell the network team to restart the router for everyone', CAUSE, 'Other phones work on it. A restart would drop everyone to test a link that is fine.'],
        ['The phone’s system is broken, so back it up and reset it to factory state', WIPE, 'It works on cellular, so the system works. A reset is far more than the test shows.'],
        ['The cellular plan is the fault, so call the carrier', LINK, 'Cellular is the link that works. The failing one is Wi-Fi.']])],
      deciding: ['b1', 'b2', 'b3'],
      reason: 'Wi-Fi against cellular is the cut that tells the phone from the network. The other phones on the same Wi-Fi clear the network, and cellular working clears the phone, leaving how this phone joined. Forget the network and rejoin it is one change.' }),
    item({
      id: 'l19-p-ads', strand: SE,
      blocks: [
        chat('Hyun, Delivery', 's1', 'Since I got a free game last week, ads cover my screen even outside the game, and a box says my phone has a virus and I must tap to clean it. My data runs out in ten days now.'),
        note('The game did not come from the phone’s official store. A friend sent a link.')],
      asks: [ask('Which link, and what first?', [
        ['An app from outside the store: save Hyun’s files, switch on airplane mode, then remove the game', true, 'Ads everywhere, a fake virus box and fast data use are the signs of a malicious app, and it came from outside the store. Save the files, cut it off the network, then remove it.'],
        ['The system: save Hyun’s files, install the waiting update and the next one, and see if the ads stop', NOSPLIT, 'An update will not remove an app Hyun installed, and the phone stays online and leaking in the meantime.'],
        ['The connections: note Hyun’s Wi-Fi name, forget the network, rejoin it and test the ads', LINK, 'Ads that appear on every screen and a fast data use come from something on the phone, not from the way it joined the Wi-Fi.'],
        ['The body: have Hyun’s battery checked, then charge it to full and watch the ads', LINK, 'Nothing about the hardware has been shown. The signs are a malicious app’s.']])],
      deciding: ['s1'],
      reason: 'Many ads, a fake security warning and fast data use after installing an app from outside the store are the signs of a malicious app. Cut the phone off the network first, remove the app, then scan, change passwords from another device and report it.' }),

    // ----- group 2: more symptoms, a replacement that is right, a call, a recall -----
    item({
      id: 'l19-s-charge', strand: HW,
      blocks: [
        chat('Ida, Sales', 'i1', 'My phone charges very slowly now, or only if I hold the cable at a certain angle. The cable is new. The phone lives in my pocket.'),
        list('b', 'Tests so far', ['Test', 'Result'], [['A different cable, same charger', 'Same fault'], ['A different charger, first cable', 'Same fault'], ['A wireless pad', 'Charges at normal speed']])],
      asks: [ask('Which link does the table point at?', [
        ['The port: look inside it for lint, and clear it with a soft tool', true, 'A different cable and a different charger give the same fault while the pad works. That leaves the port, and lint from a pocket packs into it.'],
        ['The battery: replace it', PART, 'The pad charges at normal speed, so the battery takes a charge. The cable port is where the fault shows.'],
        ['The charger: buy a stronger one and try that tonight instead', ONE, 'A different charger gave the same fault. A stronger one is another try on a part already ruled out.'],
        ['The system: restore the phone from yesterday’s backup of its settings', WIPE, 'The pad charges fine, so the phone’s software is working. A restore is a big step for a cheap test.']])],
      deciding: ['b1', 'b2', 'b3'],
      reason: 'Improper charging is split by swapping one part at a time: cable, charger, then another way to charge. The pad worked, so the battery and system are fine, and the cable port is left. Check the port for lint or a bent pin, and if it is damaged, the port is repaired.' }),
    item({
      id: 'l19-s-wet', strand: HW,
      blocks: [chat('Theo, Field team', 'j1', 'I dropped my phone in a bucket of water for a few seconds. It is still on and looks fine. Can I put it on charge to be safe?')],
      asks: [ask('What do you tell Theo?', [
        ['Switch it off now, remove the cover and cables, and do not charge it', true, 'Power on wet circuits can short them. Switching off and keeping power off gives the best chance of keeping the phone.'],
        ['Charge it to keep it from shutting down', WET, 'Power through wet parts can damage them. Charging is the risk, not the cure.'],
        ['Keep using it normally for the day and see whether symptoms appear', WET, 'It looks fine for now, but liquid inside corrodes parts later, and a phone left on is still powered.'],
        ['Restart it first to clear any water-related errors from the system', WET, 'A restart turns the power on again and does nothing for water. It is an extra power-up on wet parts.']])],
      deciding: ['j1'],
      reason: 'Liquid damage is handled by cutting power: switch off, remove the cover, SIM tray and cables, and do not charge. Then the phone goes for inspection or repair, and the user’s data is backed up when it is safe to do so.' }),
    item({
      id: 'l19-s-battery', strand: HW,
      blocks: [
        chat('Kyle, Dispatch', 'r1', 'My phone drops from 100% to dead in about two hours and shuts off at 30%. I turned off everything I could.'),
        list('b', 'Settings, Battery', ['Line', 'Value'], [['Battery health', 'Maximum capacity 68%'], ['Top user', 'Screen 31%, nothing unusual'], ['Phone age', '3 years']])],
      asks: [ask('What is the next step?', [
        ['Replace the battery: the health reading and the shutdowns both point at it', true, 'Tests already ruled out the apps, and the phone itself reports 68% capacity. Replacing the battery is the fix.'],
        ['Factory reset the phone, which will also reset the battery reading', WIPE, 'A reset does not give a battery back its capacity. It erases everything for nothing.'],
        ['Find the app that drains the battery by removing apps one at a time, newest first', RULED, 'Battery usage shows no app using more than the screen. The apps are ruled out; the battery health is the reading that is bad.'],
        ['Buy a faster charger so the phone fills before it runs down', LINK, 'A faster charger fills a worn battery quickly, but the battery still empties in two hours.']])],
      deciding: ['r1', 'b1', 'b2'],
      reason: 'Poor battery health is a worn battery: low capacity, shutdowns with charge left and no app to blame. Here the tests point at the part, so replacing it is the right step. Back up the data first if the repair could touch it.' }),
    item({
      id: 'l19-s-update', strand: AP,
      blocks: [
        chat('Ivy, HR', 'i1', 'The phone says an update is waiting, but when I press install it fails after a minute. I have tried four times.'),
        list('b', 'What the phone shows', ['Line', 'Value'], [['Storage', '125 GB of 128 GB used'], ['Battery', '71%'], ['Wi-Fi', 'Connected, strong signal']])],
      asks: [ask('What do you have Ivy try first?', [
        ['Free up space (move photos to the cloud, remove unused apps), then retry', true, 'An update needs room to unpack, and the phone has about 3 GB free. Storage is the only line that is wrong.'],
        ['Press install a fifth time', NOSPLIT, 'Four identical tries gave four identical failures. A fifth tests nothing new.'],
        ['Reset the network settings', LINK, 'The Wi-Fi is connected with a strong signal. Nothing is wrong with that link.'],
        ['Reset the phone to factory settings, then install the update', WIPE, 'A reset would work only because it empties the storage, and it wipes the phone to do it.']])],
      deciding: ['b1'],
      reason: 'An OS that fails to update checks the storage, the battery level and the connection. Here only the storage is off, so freeing space is the one change to make. A reset would work only by emptying the storage, and costs the user’s data.' }),
    item({
      id: 'l19-s-rotate', strand: AP,
      blocks: [chat('Kit, Design', 'k1', 'My tablet’s screen has stopped turning sideways. I turn it and the picture stays upright. It does it in every app and the home screen.')],
      asks: [ask('What do you have Kit check first?', [
        ['The rotation lock in the quick controls, which keeps the screen upright', true, 'Every app and the home screen stay upright, which is what a lock does. It takes five seconds to check and changes nothing else.'],
        ['The one app Kit uses most, to see whether that app has its own fault in it', SCOPE, 'It happens everywhere, so it is not one app. A lock on the whole screen explains it.'],
        ['The screen itself, which probably needs replacing after all this time', PART, 'The touch and the picture work. Nothing has shown the screen to be faulty.'],
        ['Whether a pending update has caused the tablet to lose its sensor', GUESS, 'That is a guess with nothing behind it. The lock is the cheap check, and it is the usual cause.']])],
      deciding: ['k1'],
      reason: 'No autorotate in every app points at a setting, not an app or the screen: the rotation lock is the first thing to look at. If the lock is off and it still will not turn, then test with another app and restart before suspecting the sensor.' }),
    item({
      id: 'l19-s-bt', strand: AP,
      blocks: [
        chat('Craig, Service', 'd1', 'My Bluetooth headset worked fine until this morning. Now the phone says it is connected, but no sound plays through it.'),
        list('b', 'Craig’s tests', ['Test', 'Result'], [['Headset with a laptop', 'Works'], ['Another Bluetooth speaker with the phone', 'Works'], ['Headset with the phone', 'Connected, no sound'], ['Headset picked as the sound output', 'Picked, still no sound']])],
      asks: [ask('What is the next change?', [
        ['Remove the headset from the phone’s Bluetooth list, then pair it again', true, 'Each device works with another, so neither is broken. The saved pairing between these two is what went wrong.'],
        ['Replace the headset', PART, 'The headset works with a laptop, so it is fine.'],
        ['Update the phone and reset its network settings at the same time', TWO, 'Two changes at once. If it works, nobody knows which one fixed it. The pairing is the cheap one to try first.'],
        ['Factory reset the phone', WIPE, 'The phone works with another speaker. A reset is much more than the tests show.']])],
      deciding: ['b1', 'b2', 'b3', 'b4'],
      reason: 'The headset works with the laptop and the phone works with another speaker, so both are fine and picking the headset as the sound output did not help. Only the saved pairing between them is suspect. Remove and pair again changes one thing, and it is the usual cure for Bluetooth that says connected and does nothing.' }),
    item({
      id: 'l19-s-reboot', strand: AP,
      blocks: [
        chat('Martina, Plant', 'c1', 'My Android phone restarts by itself three or four times a day, with no warning. It started about two weeks ago.'),
        list('b', 'What Martina has tried', ['Test', 'Result'], [['Normal use', 'Restarts about 4 times a day'], ['Safe mode for two full days', 'No restarts'], ['Battery health', '94%']])],
      asks: [ask('What does safe mode tell you?', [
        ['An app the user installed. Remove recent apps one at a time', true, 'Safe mode runs without the apps the user installed. No restarts there means the system and the battery are fine.'],
        ['The battery is faulty, so replace it before the next restart', PART, 'Battery health is 94% and the restarts stopped in safe mode, where the battery works exactly the same.'],
        ['The system itself is damaged, so back up and reinstall it', WIPE, 'Safe mode runs the same system and it behaves. The system is not the cause.'],
        ['The restarts are random, so no test can find the cause', RULED, 'Safe mode just split them in half. The fault follows the apps the user installed.']])],
      deciding: ['b2', 'b3'],
      reason: 'Safe mode on Android runs without the apps the user installed. Random restarts that stop there are an app: remove recent ones one at a time and watch. If they continued in safe mode, the system or the battery would be next.' }),
    item({
      id: 'l19-s-data', strand: SE,
      blocks: [
        chat('Gordon, Sales', 'l1', 'I got a text that I have used 90% of my data for the month, and it is only the 8th. I only use email and maps.'),
        list('b', 'Settings, Mobile data (this month)', ['App', 'Data used'], [['Email', '0.4 GB'], ['Maps', '0.6 GB'], ['Weatherly (installed last week from a link in a text)', '9.1 GB']])],
      asks: [ask('What do you do first?', [
        ['Save the files, switch on airplane mode, then remove Weatherly', true, 'An app nobody asked for using 9 GB is a malicious app’s high network traffic. Cut it off the network first, then remove it.'],
        ['Buy more data so the phone does not run out before the month ends', OPEN, 'More data lets the app send more. The cause is the app that uses nearly all of it.'],
        ['Turn off the email and maps apps', ONE, 'They used a tenth of what Weatherly did. They are not the problem.'],
        ['Wait and see whether the data use is lower next month', RULED, 'The list shows the cause now, and waiting leaves the app running and sending.']])],
      deciding: ['l1', 'b3'],
      reason: 'High network traffic, a data-usage warning and an app installed from a link in a text are the signs of a malicious app. The per-app data list names it. Cut the network, remove the app, scan, change passwords from another device and report it.' }),
    item({
      id: 'l19-s-sideload', strand: SE,
      blocks: [chat('Esther, IT', 'p1', 'A user in Sales wants a paid app for free. A website sells a file that the user installs by turning on “allow installs from unknown sources”. The user says it is just one app.')],
      asks: [ask('What do you tell the user?', [
        ['No: the file skips the store’s checks, so use the store', true, 'Installing outside the official store skips the checks that catch malicious apps. An unchecked file can be one.'],
        ['It is fine, as long as the setting goes back off afterward', OPEN, 'The setting being off later does not undo what the one app was allowed to do while it was installed.'],
        ['Turn on developer mode first', CAUSE, 'Developer mode is for people who build apps and lowers some protections. It makes nothing safer.'],
        ['Root the phone first so the app gets everything it needs to run', OPEN, 'Rooting removes the maker’s limits on the whole phone. It is the opposite of safer.']])],
      deciding: ['p1'],
      reason: 'An unofficial app store or a file installed from an unknown source skips the checks. Developer mode and root or jailbreak lower the protections further. Malicious and spoofed apps arrive this way, so the answer is to stay with the official store.' }),
    item({
      id: 'l19-r-jailbreak', strand: SE,
      blocks: [{ kind: 'spoken', text: 'Removing the maker’s limits from an iPhone, so apps from anywhere can run with full control, has a name.' }],
      asks: [{ id: 'a', kind: 'text', prompt: 'Type the word. For an Android phone, the same idea is called rooting.', accept: ['jailbreak', 'jailbreaking', 'jailbroken'] }],
      reason: 'Jailbreaking an iPhone, or rooting an Android phone, removes the maker’s limits. It lets apps from anywhere run with full control, which is why malicious apps are far more dangerous on such a phone.' }),
    item({
      id: 'l19-x-call', strand: AP,
      blocks: [note('Noor in Accounting calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Noor calls about a slow phone. What do you say?', form: 'call', from: 'Noor, Accounting', detail: 'Incoming call · 2:20 PM', start: 'one',
        turns: {
          one: { lines: [L('n1', 'My phone has been so slow today. It is useless. Can you just give me a new one?')], push: 'Noor wants a replacement and has given no details.',
            options: [{ id: 'scope', text: 'Is it slow with everything, or mostly in one app?', goto: 'two' },
              { id: 'model', text: 'Which model is it, and how old is it?', end: 'model' },
              { id: 'new', text: 'I will order a new phone for you today.', end: 'new' },
              { id: 'reset', text: 'Go into settings and erase all content and settings.', end: 'reset' }] },
          two: { lines: [L('n2', 'Everything. Even the clock app takes a while. It got slow after I turned the phone off and on this morning.')], push: 'Noor wants a fix and has now said when it started.',
            options: [{ id: 'space', text: 'Open Settings and read me the storage line, then the battery list.', end: 'storage' },
              { id: 'app', text: 'Then it is probably the app you use most, so delete that app and see.', end: 'guess' },
              { id: 'skip', text: 'Thanks. Please run a factory reset now, so that the phone starts fresh.', end: 'reset2' }] }
        },
        ends: {
          storage: { ok: true, then: 'Slow with everything points at the phone, not one app. Storage and the battery list are free to read and change nothing.' },
          model: { ok: false, slip: NOSPLIT, then: 'The model and age do not split anything: slow in one app and slow everywhere are different problems, and that is the question to ask.' },
          new: { ok: false, slip: PART, then: 'Nothing has been tested, so a new phone is a guess that costs money. One question about what is slow would have narrowed it.' },
          reset: { ok: false, slip: WIPE, then: 'A factory reset erases everything and the data may not be backed up. It is the last step, not the first.' },
          guess: { ok: false, slip: GUESS, then: 'Noor said everything is slow, so one app is not the likely cause. Telling Noor a cause before knowing it sends both of you the wrong way.' },
          reset2: { ok: false, slip: WIPE, then: 'Cheaper reads, such as storage and the battery list, come first. A reset wipes Noor’s data to test a guess.' } } }],
      reason: 'Whether the slowness is in one app or everything is the cheapest cut. Everything points at the system or the phone itself, so the next free reads are storage and the battery list. Nothing is replaced or erased yet.' }),

    item({
      id: 'l19-s-life', strand: AP,
      blocks: [
        chat('Flo, Sales', 'f1', 'My battery is gone by three o’clock and I do not even play games. The phone is a year old.'),
        list('b', 'Settings, Battery', ['Line', 'Value'], [['Battery health', 'Maximum capacity 96%'], ['Screen brightness', 'Automatic'], ['Maps, location “always on”', '34% of the battery']])],
      asks: [ask('What is the first change?', [
        ['Limit the maps app to using location only while open', true, 'Battery health is good, so the battery is not at fault. The maps line is the one that is high, and it is one setting.'],
        ['Replace the battery', PART, 'The phone reports 96% of its original charge. A new battery would drain the same way.'],
        ['Back up the phone and restore it, so the battery starts again from new', WIPE, 'A restore cannot change brightness or what the maps app does, and it moves the whole phone for nothing.'],
        ['Buy a larger charger, so that the phone can fill up again at lunch', LINK, 'Charging is not the problem. The battery empties faster than it should because of what is using it.']])],
      deciding: ['b1', 'b2', 'b3'],
      reason: 'Short battery life with a healthy battery comes from what is using it: brightness, location and apps running in the background. The battery list names the maps app, and the change is one setting.' }),
    item({
      id: 'l19-s-ghost', strand: HW,
      blocks: [
        chat('Gil, Field team', 'g1', 'My phone opens apps and types by itself, as if someone were pressing the screen. It started after a rainy morning on the site. The screen is not cracked.'),
        note('The phone was not dropped. It has a thick screen protector that was put on weeks ago.')],
      asks: [ask('What do you have Gil try first?', [
        ['Dry the screen and wipe it clean, then see whether the touches stop', true, 'Water drops and dirt on the glass can read as touches. This costs nothing, changes one thing, and tests the surface first.'],
        ['Scan the phone for malware', CAUSE, 'Touches that start after rain are far more likely to be water on the glass than an app, and nothing odd was installed.'],
        ['Replace the touch layer of the screen straight from the repair shop', PART, 'The screen is not cracked and the rain is the new fact. The part is replaced only after the cheap checks.'],
        ['Reset the phone to factory settings so that the touch tests start fresh', WIPE, 'A reset erases Gil’s data and does not dry the screen. It is far more than the sign needs.']])],
      deciding: ['g1'],
      reason: 'Ghost touches are a digitizer sign. Moisture and dirt on the glass cause them, so dry and clean the screen first, and restart next if needed. If they continue on a dry screen, or after the protector is off, the screen is repaired.' }),
    item({
      id: 'l19-s-popups', strand: SE,
      blocks: [
        chat('Sonia, Sales', 'h1', 'Pop-up ads keep appearing in my phone’s browser with a message about winning a prize. Nothing has changed with my apps, and the data use is normal. It began after I visited a coupon site and tapped “Allow notifications”.')],
      asks: [ask('What is the likely cause, and the first change?', [
        ['The coupon site now sends notifications. Remove its permission', true, 'The ads come through the browser, no new apps exist and data use is normal. Allowing notifications gave the site a way to show them.'],
        ['A malicious app is hiding on the phone, so wipe the phone at once', WIPE, 'No new app, no data spike and nothing outside the browser. A wipe is far more than the signs show.'],
        ['The phone was rooted by the site, so take the phone off the network', CAUSE, 'Nothing shows the phone was rooted. The only sign is the browser’s ads.'],
        ['The data plan is too small, so move Sonia to a bigger plan', LINK, 'Data use is normal. A bigger plan changes nothing about what the site can send.']])],
      deciding: ['h1'],
      reason: 'Many ads can be a malicious app, but here the signs are only in the browser and a site was allowed to send notifications. Remove that permission, then clear the browser’s data as the next change, and watch; if ads appear elsewhere, think of an app.' }),
    item({
      id: 'l19-s-compat', strand: AP,
      blocks: [
        chat('Tabitha, Operations', 'i1', 'The store will not let me install the new work app. It says “This app requires Android 14 or later”. My phone is four years old.'),
        list('b', 'What the phone shows', ['Line', 'Value'], [['Operating system', 'Version 13, with 14 offered as an update'], ['Storage', '71 GB free'], ['Wi-Fi', 'Fine']])],
      asks: [ask('What is the next step?', [
        ['Back up the phone, install the waiting system update, try the store again', true, 'There is room and the connection is fine. The app needs a newer OS than version 13, and an update is offered.'],
        ['Delete photos to free space', CAUSE, 'There is 71 GB free, so storage is not the limit. The message names the operating system.'],
        ['Reset the network settings, then try to install the app from the store', LINK, 'The store reached the phone and gave a clear answer. The connection is not at fault.'],
        ['Install the app from a website file, which does not check the device', KEEP, 'That skips the store’s checks and may be a spoofed copy. The right change is the update.']])],
      deciding: ['i1', 'b1', 'b2'],
      reason: 'An app that will not install with a compatibility message needs a newer OS than the phone has. Storage and the connection are fine, so back up and update the OS; an unofficial copy of the app is never the answer.' }),
    item({
      id: 'l19-s-av', strand: SE,
      blocks: [
        chat('Jules, Marketing', 'j1', 'A pop-up on my phone said “Install this free cleaner to remove viruses” with a big button. I am worried my phone is slow because of one. Should I tap it?')],
      asks: [ask('What do you tell Jules?', [
        ['No. Close the pop-up; if you want a scan, use the company’s approved app from the store', true, 'A pop-up that offers a cleaner is a common way to install a malicious app. A scan comes from the approved list.'],
        ['Yes. Tap it and let the cleaner scan the phone', POPUP, 'The cleaner in the pop-up may be the malicious app. Nothing in it can be trusted.'],
        ['No. Switch the phone off for a day, and the pop-up will be gone', CAUSE, 'Switching the phone off scans nothing and removes nothing. Closing the pop-up and using an approved scan does.'],
        ['Tap it, and restart the phone if it looks bad', POPUP, 'A restart does not remove an app, and the app has already run once by then.']])],
      deciding: ['j1'],
      reason: 'A pop-up that offers to remove viruses is a fake security warning in a different form. Close it, do not tap it, and run a scan with the company’s approved mobile anti-malware from the official store.' }),

    // ----- group 3: mixed with lessons 5 and 18 comes from the lesson; these are three of this lesson's own -----
    item({
      id: 'l19-g-hot', strand: HW,
      blocks: [
        chat('Tai, Estimating', 't1', 'My phone has been getting very hot when it charges and the back has started to rise in one corner. It is only a little. Should I just take the cover off?'),
        note('Two signs: heat and a rising corner.')],
      asks: [ask('What do you do?', [
        ['Unplug it and stop using it: a rising back is a swollen battery', true, 'Heat alone calls for the cover off and a rest, but a rising back means a swollen battery. That is a safety problem, and the phone stops being used.'],
        ['Take the cover off and let it cool', SIGN, 'The cover is not the problem. The rising corner is the second sign, and it is the one that makes this a swollen battery.'],
        ['Close the apps running in the background to stop the heat while charging', SIGN, 'Heat while charging with a bulge is not an app. Closing apps ignores the sign that matters.'],
        ['Check the data usage list for an app that is working the phone too hard', CAUSE, 'The phone is hot while charging with the back bulging. The data list does not explain either.']])],
      deciding: ['t1'],
      reason: 'Overheating alone is handled by the cover off, out of the sun, rest. A swollen battery is the harder sign, because charging and using it can start a fire. When both show, the bulge decides: stop using and charging it.' }),
    item({
      id: 'l19-g-spoof', strand: SE,
      blocks: [
        chat('Otis, Admin', 'r1', 'I downloaded the bank’s app from a link in an email. It looks right, but it asks for my full card number and PIN on the first screen. My real bank app never asked for that.')],
      asks: [ask('What do you do?', [
        ['Enter nothing, remove the app, and tell both the bank and the desk', true, 'A look-alike app from an email link, asking for things the real app never did, is app spoofing. Entering the card and PIN gives them away.'],
        ['Enter the card number to see whether the app accepts it', OPEN, 'If it is fake, entering the details is the theft. It is not a test.'],
        ['Restart the phone and open the app again to see whether it shows the same screen', NOSPLIT, 'The app will look the same. A restart tests nothing about where it came from.'],
        ['Update the app to its newest version', CAUSE, 'The real bank’s app never asked for that. This one came from an email link and is the problem.']])],
      deciding: ['r1'],
      reason: 'An app spoofing a real one comes from a link rather than the store and wants what the real one does not. Nothing is entered, the app is removed, and the real bank and the desk are told, so passwords can be changed from a clean device.' }),
    item({
      id: 'l19-g-install', strand: AP,
      blocks: [
        chat('Kurt, Planning', 'c1', 'I cannot install a new app. The store starts to download it and then says it cannot install.'),
        list('b', 'What the phone shows', ['Line', 'Value'], [['Storage', '256 GB of 256 GB used'], ['Photos and videos', '171 GB'], ['Wi-Fi', 'Fine']])],
      asks: [ask('What is the one change?', [
        ['Back up the photos and videos, then move them off the phone', true, 'The phone is full, and photos are the large part. Backing them up first protects them while the space is freed.'],
        ['Delete the biggest photos and videos at once to make room', NOBACK, 'The photos would be gone if the backup was not made first. Backing up comes before touching Kurt’s files.'],
        ['Restart the phone and try the download of the app again', NOSPLIT, 'A restart does not free a full phone. It would try the same thing again.'],
        ['Sign out of the store, sign in again and retry the download', LINK, 'Wi-Fi works and the download starts. The failure comes after, when there is no room.']])],
      deciding: ['c1'],
      reason: 'An app that downloads and then cannot install is often a full phone. Free space by moving photos and videos, backing them up before anything leaves the phone.' })
  ]);
})();
