// IT Help Desk, lesson 19 "Mobile problems": the six new tickets of the check, and the reserve for the review (three or more unseen for each topic the check
// covers: mobile-hw-fix, mobile-app-fix, mobile-sec-fix). Facts as in items-l19.js (A+ map Core 1 5.4; Core 2 3.2, 3.3). Invented people, phones and apps.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', TWO = 'two-changes', WIPE = 'wipe-first',
    UNSAFE = 'unsafe-battery', KEEP = 'kept-app', POPUP = 'obeyed-popup', NOBACK = 'no-backup', SIGN = 'ignored-sign', ONE = 'one-cause',
    GUESS = 'guessed-cause', OPEN = 'open-up', RULED = 'kept-ruled-out', REPEAT = 'repeated-step';
  const HW = 'mobile-hw-fix', AP = 'mobile-app-fix', SE = 'mobile-sec-fix';

  FC.items('it-support', [
    // ----- the check: six new tickets -----
    item({
      id: 'l19-k-crack', strand: HW,
      blocks: [
        chat('Niamh, Legal', 'u1', 'I dropped my phone and the glass is cracked across the middle. The picture is fine at the top, but the bottom third does not answer touches at all, and I have two weeks of site photos on it that are not saved anywhere.')],
      asks: [ask('What is the order of the work?', [
        ['Save the photos with a cable to a computer first, then repair the screen', true, 'The data comes first because the screen could fail further. The dead touch strip is the touch layer under the glass, so the screen is repaired.'],
        ['Replace the screen at once', NOBACK, 'Repairs can go wrong, and two weeks of photos exist nowhere else. Protect the data before touching the phone.'],
        ['Restart the phone to see whether the touch in the lower third wakes up on its own', NOSPLIT, 'A crack across the glass is physical. A restart cannot undo it and keeps the damaged screen in use.'],
        ['Factory reset the phone to clear the touch fault, then repair it later', WIPE, 'A reset erases the photos that were not saved, and cannot repair a crack.']])],
      deciding: ['u1'],
      reason: 'A cracked screen with a dead touch strip is a damaged digitizer, a hardware fault. Because the photos exist only on the phone, the data is protected before any repair.' }),
    item({
      id: 'l19-k-hot', strand: HW,
      blocks: [
        chat('Samir, Surveyor', 'v1', 'My phone keeps warning “too hot, cooling down” when I use it for navigation in the truck. It sits in the cradle on the dashboard, in the sun, plugged in. It cools off when I get inside the office.'),
        list('b', 'Settings, Battery', ['Line', 'Value'], [['Battery health', 'Maximum capacity 93%'], ['Back of the phone, when it is cool', 'Flat, no bulge'], ['Top user', 'Navigation, screen on']])],
      asks: [ask('What fits?', [
        ['Sun, charging and navigation together: get it out of the sun', true, 'The battery is healthy, the back is flat and the heat goes away indoors. Three heat sources at once are the cause, and none is a fault.'],
        ['A swollen battery, so stop using it and have the battery replaced now', UNSAFE, 'The back is flat and the battery holds 93%. A swollen battery bulges, and this phone cools off when the sun is removed.'],
        ['A faulty battery that should be replaced under the phone’s warranty', PART, 'Battery health is 93%. The heat follows the sun and the cradle, not the battery.'],
        ['A malicious app that is working the phone’s processor far too hard', CAUSE, 'The top user is navigation, which the user started, and the heat leaves with the sun.']])],
      deciding: ['v1', 'b1', 'b2'],
      reason: 'Overheating from heat in the sun, charging and a heavy app is a fault in the situation, not in the phone. A swollen battery would show a bulge or a lifting screen, and a bad battery would show poor health. Out of the sun is the first change; less charging while it runs is the next.' }),
    item({
      id: 'l19-k-air', strand: AP,
      blocks: [
        chat('Shona, Sales', 'w1', 'I just landed. My phone shows no bars and nothing loads, not on the airport Wi-Fi either. Other people around me have signal.'),
        list('b', 'What the phone shows', ['Line', 'Value'], [['Top of the screen', 'A small airplane picture'], ['Wi-Fi', 'Off'], ['Bluetooth', 'Off']])],
      asks: [ask('What is the first change?', [
        ['Turn airplane mode off, then check Wi-Fi and cellular again', true, 'Airplane mode turns off all the radios, which fits no bars, no Wi-Fi and the airplane at the top of the screen.'],
        ['Restart the phone', NOSPLIT, 'A restart does not turn airplane mode off, and the plane stays lit. Turning airplane mode off is the change that names the cause.'],
        ['Reset the network settings to clear the saved connections', WIPE, 'Resetting the network settings deletes saved Wi-Fi passwords and is more than the table shows is needed.'],
        ['Call the carrier to report that the airport has no signal', CAUSE, 'Other people have signal. The table shows the phone has turned its own radios off.']])],
      deciding: ['b1', 'b2', 'b3'],
      reason: 'Poor or no connectivity starts with the cheap sign on the screen: airplane mode turns off cellular, Wi-Fi and Bluetooth together. One change, with a name for the cause, comes before restarts or resets.' }),
    item({
      id: 'l19-k-app', strand: AP,
      blocks: [
        chat('Xia, Marketing', 'x1', 'The Ledgerly app closes itself a second after I open it. Every other app is fine. It worked on Friday.'),
        list('b', 'What Xia has done', ['Step', 'Result'], [['Closed Ledgerly and opened it again', 'Closes itself'], ['Restarted the phone', 'Closes itself'], ['Storage', '38 GB free'], ['App store', 'An update for Ledgerly is waiting']])],
      asks: [ask('What is the next change?', [
        ['Install the waiting update for Ledgerly, and test it', true, 'Only this app is failing, the restart did not help and there is room. A waiting update is the cheapest change that is left.'],
        ['Reinstall every app on the phone', TWO, 'Other apps work. Changing them all hides which change helped, and it costs the user’s settings in each.'],
        ['Back up and factory reset the phone', WIPE, 'Everything else on the phone works. A reset wipes it to fix one app.'],
        ['Restart the phone again', REPEAT, 'The table already shows a restart did not help. Doing it again tests nothing new.']])],
      deciding: ['x1', 'b2', 'b4'],
      reason: 'An app that closes itself while the others work is an app fault. The ladder runs from the cheap to the costly: close and reopen, restart, free space, update, clear the app’s cache, reinstall. The table is at the update.' }),
    item({
      id: 'l19-k-root', strand: SE,
      blocks: [
        chat('Yun, Operations', 'y1', 'I rooted my Android phone last year so I could run apps that are not in the store. This week it is slow, ads cover the screen and the data warning came up. Can you just run a scan and tell me it is clean?'),
        list('b', 'Settings, Mobile data (this month)', ['App', 'Data used'], [['Browser', '1.1 GB'], ['Navigator', '0.9 GB'], ['Free VPN Pro (from a link, outside the store)', '14.2 GB']])],
      asks: [ask('What do you do?', [
        ['Back up Yun’s files, go offline, remove the app, take root off, then run the company scan', true, 'Root removed the phone’s protections, so one bad app can reach everything. The app and root go, and the company scan checks what is left; a reset follows only if the scan is not clean.'],
        ['Run the scan, then report Yun’s phone clean if it finds nothing', KEEP, 'The 14 GB app is still there and root is still on. The signs are already enough.'],
        ['Remove only the app, run the scan, and leave the phone rooted for Yun’s other apps', KEEP, 'The app is removed, but the lowered protections stay, and the next unofficial app can do the same.'],
        ['Factory reset the phone at once, without saving Yun’s files first', NOBACK, 'It erases Yun’s files. Back up what is needed first.']])],
      deciding: ['y1', 'b3'],
      reason: 'A rooted phone with ads, slowness and a data warning and an app from outside the store is a malicious app on a phone with the protections removed. The app goes, root goes too, Yun’s files are saved first, and passwords are changed from another device.' }),
    item({
      id: 'l19-k-leak', strand: SE,
      blocks: [
        chat('Stan, Finance', 'z1', 'Two clients texted me about odd messages I never sent, with a link. Yesterday I put a free PDF reader on from a pop-up on a website. Last night my work photos showed up in a group chat I am not in.')],
      asks: [ask('Which first move fits?', [
        ['Save Stan’s files, go offline, remove the PDF reader, then change passwords from another device', true, 'Messages Stan never sent and photos posted without Stan are leaked data from a malicious app. The app is cut off first, then the passwords change from a device that is clean.'],
        ['Save Stan’s files, then change the passwords from the same phone and update the PDF reader', ONE, 'The app may read what is typed on that phone, so the new passwords would reach it too, and an update from the same source is no fix.'],
        ['Go offline, then reply to the clients and tell them to ignore the texts Stan never sent', GUESS, 'Nothing has stopped them. The app is still running and can send more.'],
        ['Update the PDF reader, then restart Stan’s phone and watch whether the texts stop', CAUSE, 'The reader came from a pop-up and is the likely source. An update from the same source is no fix.']])],
      deciding: ['z1'],
      reason: 'Leaked personal data and messages the user did not send after an app from a pop-up are signs of a malicious app. Airplane mode and removing the app come first, then passwords change from another device, the clients are warned and the desk is told.' }),

    // ----- reserve: hardware -----
    item({
      id: 'l19-r-stylus', strand: HW,
      blocks: [
        chat('Rowan, Design', 'a1', 'The stylus for my tablet has stopped drawing. The screen answers my finger fine. The stylus is two years old, and the light on it is off.')],
      asks: [ask('What do you try first?', [
        ['Charge the stylus or replace its battery, then pair it again', true, 'The finger works, so the screen and touch layer are fine. A stylus with its light off has an empty battery.'],
        ['Replace the tablet screen', PART, 'It answers a finger, so the screen works.'],
        ['Factory reset the tablet to clear the stylus settings', WIPE, 'The tablet works. A reset wipes everything for a stylus with its light off.'],
        ['Update the tablet and the drawing app before doing anything else', TWO, 'Two changes at once, and the dead light was never looked at.']])],
      deciding: ['a1'],
      reason: 'A stylus that does not work while the finger does is the stylus: its battery or its pairing, then a worn tip. The screen is cleared by the finger.' }),
    item({
      id: 'l19-r-drift', strand: HW,
      blocks: [
        chat('Bev, Planning', 'b1', 'On my touch-screen laptop the pointer drifts a little to the left, and touches land a bit off. I put a new screen protector on last night.'),
        note('The laptop was fine before the screen protector.')],
      asks: [ask('What do you do first?', [
        ['Clean the screen, take the protector off to test, then calibrate', true, 'One change happened last night, and the protector is it. Cleaning and removing it tests that, and calibration is the next step if needed.'],
        ['Replace the screen', PART, 'It was fine before last night. The change on the screen comes before a part.'],
        ['Install the laptop’s waiting updates and graphics drivers together', TWO, 'Two changes together. The new protector is the change to test first.'],
        ['Reinstall Windows', WIPE, 'A reinstall erases the files. The protector went on last night, and it has not been tested.']])],
      deciding: ['b1'],
      reason: 'Cursor drift and misplaced touches come from the screen surface, dirt, a protector or a need to calibrate. What changed is the protector, so that is tested first, then calibration.' }),
    item({
      id: 'l19-r-port', strand: HW,
      blocks: [
        chat('Milo, Dispatch', 'c1', 'The charging port on my phone is loose. The cable wobbles, and it charges only if I hold it. I have tried four cables and the pad, which works.'),
        list('b', 'Port check', ['Look', 'Result'], [['Inside the port with a light', 'Clean, no lint'], ['The metal contacts', 'Bent, one is pushed in'], ['The pad', 'Charges normally']])],
      asks: [ask('What is the next step?', [
        ['Back up the phone, then have the damaged port repaired', true, 'Four cables, a clean port and bent contacts show the port is physically damaged. The pad works, so the battery is fine.'],
        ['Buy a fifth cable with a firmer plug and keep trying', ONE, 'Four cables gave the same fault. A fifth tests a part already ruled out.'],
        ['Straighten the contacts with a metal pin from a sewing kit', UNSAFE, 'A metal pin can short the contacts or damage them more. The port needs a repair.'],
        ['Replace the battery', PART, 'The pad charges at normal speed. The battery takes a charge.']])],
      deciding: ['c1', 'b1', 'b2'],
      reason: 'A physically damaged port is a hardware fault: cables are ruled out, the lint check is done and the contacts are bent. Repair the port, with the data backed up first. Wireless charging works as a stopgap.' }),

    // ----- reserve: system, app and connections -----
    item({
      id: 'l19-r-slow', strand: AP,
      blocks: [
        chat('Dax, Sales', 'd1', 'My tablet got slower over the last month. It is slow in every app, even Settings.'),
        list('b', 'What the tablet shows', ['Line', 'Value'], [['Storage', '62 GB of 64 GB used'], ['Apps open in the background', '23'], ['Last restart', '41 days ago'], ['System update', 'Waiting']])],
      asks: [ask('What is the first change?', [
        ['Free storage by moving photos and files off, then test', true, 'It is slow in every app, so not one app. The nearly full storage is the line that is wrong, and freeing it is one change.'],
        ['Delete the apps one by one until it speeds up', ONE, 'It is slow in every app, including Settings, so an app is not the likely cause. Storage is the line that is wrong.'],
        ['Restart it and see whether it speeds up', NOSPLIT, 'A restart is cheap, but storage comes first and the restart follows; the full storage would slow the tablet again.'],
        ['Install the waiting update and reset the network settings at the same time', TWO, 'Two changes at once, and the network is not the fault.']])],
      deciding: ['b1', 'b2', 'b3'],
      reason: 'Degraded performance that is the same in every app belongs to the system: a full tablet and a long time since a restart. Free space first and test, then restart if it is still slow, one change at a time, with files saved before they leave the tablet.' }),
    item({
      id: 'l19-r-nfc', strand: AP,
      blocks: [
        chat('Owen, Retail', 'e1', 'Tap to pay at the register fails on my phone. It worked last week. Other phones tap fine on the same reader.'),
        list('b', 'Owen’s phone', ['Test', 'Result'], [['NFC in settings', 'On'], ['With the thick wallet cover on', 'Fails'], ['Cover off, held right against the reader', 'Works']])],
      asks: [ask('What is the cause?', [
        ['The thick wallet cover keeps the phone too far from the reader', true, 'NFC works only at a very short distance. With the cover off and the phone against the reader, it works.'],
        ['The register is broken, so report it to the store’s manager today', CAUSE, 'Other phones tap fine on it, and Owen’s works with the cover off.'],
        ['NFC has stopped working, so back it up and factory reset the phone', WIPE, 'NFC works with the cover off. The phone is fine.'],
        ['The payment card has expired, so order a new one from the bank', GUESS, 'The payment works when the cover is off. Nothing shows the card is the problem.']])],
      deciding: ['b2', 'b3'],
      reason: 'NFC (near-field communication) needs the phone right next to the reader. Cover on fails and cover off works, so the cover is the cause. This is a cut: one change, one result.' }),
    item({
      id: 'l19-r-launch', strand: AP,
      blocks: [
        chat('Victoria, Maintenance', 'f1', 'My work-order app on my Android phone will not open. It sits on a white screen. Everything else works. It worked yesterday.'),
        list('b', 'What Victoria has done', ['Step', 'Result'], [['Closed the app and reopened it', 'White screen'], ['Restarted the phone', 'White screen'], ['App store', 'No update waiting'], ['Storage', '41 GB free']])],
      asks: [ask('What do you try next?', [
        ['Clear the app’s cache, then reinstall it after saving its data', true, 'The cheaper steps are done: reopen, restart, update, storage. Clearing the cache is the next cheapest, and reinstalling is the last for one app.'],
        ['Factory reset the phone', WIPE, 'Everything else works. A reset is for after everything cheaper has failed, and it wipes the phone.'],
        ['Update the phone’s operating system and then try the app', TWO, 'No update is waiting for the app, but a change to the whole phone does not follow from one app failing.'],
        ['Restart the phone once more to be sure it is not a glitch', REPEAT, 'A restart is already in the table with the same result.']])],
      deciding: ['f1', 'b2', 'b3', 'b4'],
      reason: 'An app that fails to launch while the others work is an app fault, and the steps go from cheap to costly: reopen, restart, update, storage, cache, reinstall. The table has done the first four.' }),

    // ----- reserve: security -----
    item({
      id: 'l19-r-warning', strand: SE,
      blocks: [
        chat('Clifford, Reception', 'g1', 'While reading the news on my phone, a red box filled the screen: “Your phone is infected! Tap here to clean it now.” It has a countdown and a security logo. I have not tapped it.')],
      asks: [ask('What do you tell Clifford?', [
        ['Do not tap it. Close the page or the browser tab', true, 'It is a fake security warning on a web page: it wants a tap on its button.'],
        ['Tap the button to clean the phone', POPUP, 'The button is how the page gets Clifford to install something bad.'],
        ['Do not tap it. Switch the phone off and leave it off all day', CAUSE, 'Switching off does not remove the page that showed the box. Closing the page does.'],
        ['Factory reset the phone at once', WIPE, 'Nothing has been installed. Closing the page is enough, and a reset wipes the phone for a web page.']])],
      deciding: ['g1'],
      reason: 'A fake security warning on a web page tries to scare the user into tapping. Close the page without tapping; only if the phone shows other signs, such as new apps or fast data use, is it checked for a malicious app.' }),
    item({
      id: 'l19-r-dev', strand: SE,
      blocks: [
        chat('Remy, Warehouse', 'h1', 'I looked in my Settings and there is a new menu called Developer options. I never turned it on. The phone has also been warm and a little slow.'),
        list('b', 'Settings', ['Line', 'Value'], [['Developer options', 'On'], ['USB debugging', 'On'], ['Apps installed from unknown sources', 'Allowed for Browser']])],
      asks: [ask('What do you do?', [
        ['Turn off the unknown-sources allowance for Browser', true, 'Installs from unknown sources let an app in, and Remy never turned the allowance on. Closing that door is the first change; USB debugging and developer options are the next, one at a time, then look for the app.'],
        ['Leave it, as developer options do nothing unless a developer uses them', OPEN, 'USB debugging gives a connected computer or an app a way into the phone. Remy did not enable it, so someone or something did.'],
        ['Turn on more developer options to see what exactly changed on the phone', TWO, 'Turning more on opens more. The aim is to close what was opened.'],
        ['Buy a new phone', PART, 'Nothing shows hardware at fault. Settings can be turned off.']])],
      deciding: ['h1', 'b1', 'b2', 'b3'],
      reason: 'Developer mode and installs from unknown sources are settings that lower the phone’s protections. If the owner did not turn them on, something did, so close them and look for the app that could have.' }),
    item({
      id: 'l19-r-store', strand: SE,
      blocks: [
        chat('Suki, IT', 'i1', 'A manager asks for permission to install an “app store” found on a website that offers premium apps for free. It is not the phone maker’s store or the company’s, and the site has no named owner.')],
      asks: [ask('What do you tell the manager?', [
        ['No: apps there are unchecked, so use the store the company allows', true, 'Apps from outside the official store are not checked, and an unchecked app can be a malicious one.'],
        ['Yes, if the manager installs one app first and watches how the phone behaves', OPEN, 'A malicious app often behaves normally at first. Watching one is no check.'],
        ['No: wait a week, and install it if nobody reports a problem', OPEN, 'Waiting does not check anything: a malicious app can stay quiet for a week, and by then it has run.'],
        ['Yes. The phone’s antivirus will block anything harmful', GUESS, 'Nothing guarantees that. The store’s checks happen before an app reaches the phone, and that is what is skipped.']])],
      deciding: ['i1'],
      reason: 'An unofficial app store is one of the named concerns for mobile security. The safe answer is the company’s approved store, with the desk’s own list of what may be installed.' })
  ]);
})();
