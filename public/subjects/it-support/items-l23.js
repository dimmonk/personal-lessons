// IT Help Desk, lesson 23 "Windows problems" (part windows-fix): the worked ticket and the three groups of questions. The Core 2 3.1 signs sit on lesson 9's chain (power, start-up self-test,
// firmware, boot drive, Windows loading, sign-in and profile) or on the running system (drivers, services, memory, programs, time), and are worked with what changed and the ways back (roll back a
// driver or update, System Restore, safe mode, Startup Repair in WinRE), the cuts (safe mode, clean boot, a test profile, one program or all) and the right tool (Event Viewer, Task Manager,
// Device Manager, the Services console, msconfig, sfc). Research: docs/research/it-support.md IT4, IT5, IT8, IT9, IT2; docs/research/it-support-aplus.md Core 2 3.1, 1.4, 1.5; Core 1 5.1, 5.2.
// Invented people, programs and services. Strands: win-boot-fix (links 3 to 6 of the chain, and the clock battery), win-run-fix (the running system).
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
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', TWO = 'two-changes', KEPT = 'kept-ruled-out', NOBACK = 'no-backup',
    WIPE = 'windows-wipe', TOOL = 'wrong-tool', IGN = 'ignored-sign', ONE = 'one-cause', REPEAT = 'repeated-step', GUESS = 'guessed-cause', RISK = 'kept-powering',
    NEXT = 'no-next', SIDE = 'wrong-side';
  const BOOT = 'win-boot-fix', RUN = 'win-run-fix';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (memory) that the stop code rules out, then the log shows what changed, and safe mode splits Windows from the added driver -----
    item({
      id: 'l23-w-dara', strand: RUN,
      blocks: [
        chat('Dara, Design', 'd1', 'My computer shows a blue screen and restarts. It has done it three times today, since Tuesday morning. I think the memory is going, because my last computer did exactly this. I have not installed anything.'),
        list('b', 'The blue screen, and the System log in Event Viewer', ['Where', 'What it says'], [
          ['Blue screen', 'Stop code: VIDEO_TDR_FAILURE. What failed: a display (graphics) driver file'],
          ['Event Viewer, System, Monday 5:10 PM', 'Information: a driver package for the display adapter was installed'],
          ['Event Viewer, System, Tuesday 9:41 AM', 'Critical: the system restarted without shutting down cleanly']])],
      asks: [ask('What does the blue screen say about Dara’s memory guess?', [
        ['It names a display driver, not memory, so memory has no evidence behind it yet', true, 'The stop code names what failed: a graphics driver file. Nothing on the screen points at memory, so the guess waits for a test that points there.'],
        ['It confirms memory, so the memory sticks are replaced first', CAUSE, 'A blue screen is Windows crashing, and the stop code names the cause. This one names a driver.'],
        ['It says nothing useful about memory, so the memory sticks should be tested before anything else', GUESS, 'The code is the most useful thing on the screen. Testing memory first ignores what it says.'],
        ['It points at the hard drive, where the files Windows needs are kept', LINK, 'The code names a display driver. A drive fault would show a different name, or none.']])],
      steps: [
        { id: 'chain', does: 'Place the fault: loading or running?', working: 'It happens three times a day, mid-work, after sign-in. That is the running system, not the boot chain. The cheapest read is on the screen already.' },
        { id: 'favorite', does: 'Name Dara’s favorite, and read the stop code before testing it.', working: 'Their guess is memory. The stop code names a display driver. Memory is not ruled out for good, but nothing points at it.', ask: 'a' },
        { id: 'changed', does: 'What changed? Dara says nothing, so let the computer’s log say.', working: 'Event Viewer, System log: on Monday at 5:10 PM a driver package for the display adapter was installed. A vendor updater did it by itself. The blue screens began the next morning.' },
        { id: 'safe', does: 'Cut in half: start in safe mode, which loads only basic drivers.', working: 'In safe mode the computer runs an hour with no crash. Windows and the hardware are fine, and the fault is in a driver that normal start-up loads. A clean hour in safe mode is only some evidence against memory, which can still fail there, but the stop code and the log agree.' },
        { id: 'one', does: 'One change: in Device Manager, roll back the display driver, and nothing else. Restart normally.', working: 'The Driver tab offers Roll Back Driver. After it, no blue screen all afternoon. Had it failed, the next move was System Restore to a point before Monday.' },
        { id: 'next', does: 'Confirm with Dara after a full day, and write it up.', working: 'Dara confirms on Wednesday evening. The note: blue screen, stop code, new display driver Monday, safe mode fine, rolled back, fixed. Pause that driver’s automatic updates, and tell the desk, since others may have the same update.' }],
      deciding: ['d1', 'b1', 'b2'],
      reason: 'The favorite was memory. The stop code named a driver, the log showed one installed the evening before, and safe mode split Windows from it. One roll back fixed it. Ordering memory or reinstalling Windows would have cost a day and left the driver in place.' }),

    // ----- group 1: the deciding words marked -----
    item({
      id: 'l23-p-blue', strand: BOOT,
      blocks: [
        chat('Pia, Finance', 'p1', 'My laptop shows the Windows dots, then a blue screen, then restarts, again and again. It started right after the graphics update ran last night. I cannot reach my desktop. My files are all on the company drive.'),
        list('b', 'The blue screen', ['Line', 'What it says'], [['Stop code', 'DRIVER_IRQL_NOT_LESS_OR_EQUAL'], ['What failed', 'A display driver file']])],
      asks: [ask('What is the first move?', [
        ['Open WinRE, start in safe mode, and roll back the display driver', true, 'The stop code names a driver, the update came the night before, and Pia’s files are safe on the company drive. Safe mode gets in, and one roll back undoes the change.'],
        ['Reinstall Windows from a USB stick', WIPE, 'Nothing shows Windows itself is damaged. The code names one driver, and the ways back cost far less than a reinstall.'],
        ['Take out the memory sticks and put them back, then start the laptop', PART, 'The stop code names a display driver. Reseating memory touches a part that nothing points at.'],
        ['Restart the laptop a few more times to see whether it gets through', NOSPLIT, 'It has failed the same way every time. Another try gives the same blue screen and tests nothing.']])],
      deciding: ['p1', 'b2'],
      reason: 'A blue screen at the Windows dots is link 5. The stop code names a display driver and the change came the night before, so the way back is safe mode and a roll back, one change. The files are on the company drive, so nothing needs protecting first.' }),
    item({
      id: 'l23-p-noos', strand: BOOT,
      blocks: [
        chat('Edwin, Warehouse', 'q1', 'The screen says “Operating system not found” right after the logo. Nothing changed except a power cut last night, when the lights went out while I was working. All my files are on the company drive.'),
        list('b', 'The firmware screen, and the drive check', ['Line', 'Result'], [['Drives listed', 'One drive, 500 GB'], ['Boot order', 'That drive is first'], ['Drive health check (S.M.A.R.T.)', 'Passed']])],
      asks: [ask('What is the next step?', [
        ['Run Startup Repair from WinRE, using the install USB if WinRE will not open', true, 'The firmware sees the drive, the boot order is right and the health check passed. A power cut in the middle of work is how start-up files get damaged, and Startup Repair mends them.'],
        ['Order a new drive and leave the laptop with the stores until it arrives', PART, 'The drive is listed and passed its health check. The message is about the start-up files, not the drive.'],
        ['Change the boot order and put the network ahead of the drive', NOSPLIT, 'The boot order is already right, with the drive first. Changing it tests nothing the table has not answered.'],
        ['Wipe the drive and install Windows again, so the files are fresh', WIPE, 'A mended start-up needs a repair, not a wipe. A wipe costs Edwin’s programs and setup to fix something that Startup Repair may fix alone.']])],
      deciding: ['q1', 'b1', 'b2', 'b3'],
      reason: 'No operating system found is the firmware not finding start-up files it can use. The drive is listed, first in the boot order and healthy, and the power cut explains damaged start-up files, so Startup Repair in WinRE is the smallest way back. Edwin’s files are on the company drive, so nothing needs copying first.' }),
    item({
      id: 'l23-p-profile', strand: BOOT,
      blocks: [
        chat('Rob, Shipping', 'r1', 'I sign in and wait about eight minutes before my desktop appears. Once it shows, everything is quick. A co-worker signed in on this same computer yesterday and got to the desktop in under a minute.'),
        note('The chain: power, start-up self-test, firmware, the boot drive, Windows loading, sign-in and profile.')],
      asks: [ask('Which link, and which cheap test?', [
        ['Link 6, the profile: sign in as a new test user and compare the time', true, 'The computer is quick for the co-worker, so the computer is fine. Only Rob’s sign-in is slow, which leaves Rob’s profile.'],
        ['Link 4, the boot drive: run a full health scan on the whole drive today', LINK, 'The same computer and drive are fast for the co-worker. The slow part is Rob’s sign-in.'],
        ['Link 5, Windows loading: uninstall the latest Windows update', CAUSE, 'Windows loads fast for the co-worker on the same computer. An uninstall changes the whole computer to fix one person’s sign-in.'],
        ['Link 3, firmware: reset the firmware settings to their defaults', LINK, 'Firmware runs before sign-in and is the same for both users. It cannot explain a slow profile.']])],
      deciding: ['r1'],
      reason: 'One person slow and another quick on the same computer cuts the computer away and leaves the profile, link 6. A new test profile confirms it: quick means Rob’s profile is the cause. Back up Rob’s files before any repair.' }),
    item({
      id: 'l23-p-service', strand: RUN,
      blocks: [
        chat('Mary, Bookkeeping', 's1', 'My accounting program says it cannot connect to the database service. It worked yesterday, and I have not changed anything.'),
        list('b', 'The Services console, and the System log', ['Where', 'What it shows'], [
          ['Services console', 'BookDB Service: stopped. Startup type: Automatic'],
          ['Event Viewer, System log', 'The BookDB Service depends on the Data Store service, which failed to start']])],
      asks: [ask('What is the next move?', [
        ['Look at the Data Store service it depends on, and start that one first', true, 'The log says BookDB waits for Data Store, which did not start. A service cannot run before the one it depends on, so the cause sits one step back.'],
        ['Start BookDB again and keep restarting it until it stays running all day', REPEAT, 'It cannot stay running while the service it needs is stopped. The log has already said why.'],
        ['Change BookDB’s startup type to Disabled and restart the computer', CAUSE, 'Disabled stops it from ever starting, which is the opposite of what Mary needs.'],
        ['Reinstall the accounting program and its database from the company installer', WIPE, 'The program is not damaged. The log names a stopped service, which costs nothing to look at.']])],
      deciding: ['b1', 'b2'],
      reason: 'A service that will not start is read in the Services console and the System log. The log names the cause: a service it depends on. The Dependencies tab shows the same chain, and starting the first service in it is one change.' }),

    // ----- group 2 -----
    item({
      id: 'l23-s-slow', strand: RUN,
      blocks: [
        chat('Lydia, Sales', 'e1', 'My computer crawls every Monday morning between 9 and 11, and then it is fine. I think it needs more memory or a new drive.'),
        list('b', 'Task Manager, Monday 9:30 AM', ['Reading', 'Value'], [['Processor', '12%'], ['Memory', '41% used'], ['Disk', '100% busy'], ['Top disk user', 'Antivirus full scan (the desk’s schedule: Mondays at 9)']])],
      asks: [ask('What is the finding?', [
        ['The scheduled full scan keeps the disk busy until it ends; move it after hours', true, 'Memory and processor are low. The disk is busy with the scan, which starts at 9 on Mondays, the same hours as the slowness.'],
        ['Memory is the limit, so order more RAM to fit the workload', CAUSE, 'Memory is at 41%, with plenty free. More RAM would change nothing the table shows.'],
        ['The drive is failing, so back it up and swap it for a new one before the next scan', PART, 'A failing drive would be slow all day, not only while the scan runs. The scan explains the hours.'],
        ['Windows is damaged, so run sfc /scannow every morning from now on', TOOL, 'sfc checks Windows’s own files. Nothing in the table shows damage, and the scan accounts for the slowness.']])],
      deciding: ['b2', 'b3', 'b4'],
      reason: 'Degraded performance is read in Task Manager before any change. Disk at 100% with the antivirus scan on top, in the same hours as the slowness, is the cause. Moving the scan is one change to the desk’s schedule, not a repair.' }),
    item({
      id: 'l23-s-memory', strand: RUN,
      blocks: [
        chat('Patricia, Marketing', 'k1', 'A box says Windows is low on memory and I should close programs. It happens most afternoons. The computer has 16 GB.'),
        list('b', 'Task Manager, Processes sorted by memory', ['Program', 'Memory at 9 AM', 'Memory at 3 PM'], [['Layout Studio', '2 GB', '9.8 GB'], ['Browser, 12 tabs', '2.9 GB', '3.1 GB'], ['Windows and the rest', '3 GB', '3 GB']])],
      asks: [ask('What is the next step?', [
        ['Update Layout Studio and watch it again: one program keeps growing all day', true, 'Everything else stays the same. Only Layout Studio grows, from 2 GB to 9.8 GB, which looks like a leak. An update may fix it.'],
        ['Close the browser tabs each afternoon', CAUSE, 'The browser barely grows, from 2.9 to 3.1 GB. Closing tabs frees a small part of the problem.'],
        ['Order 32 GB of memory so that the warning stops for good', PART, 'More memory only delays the warning if one program keeps growing. The table points at the program first.'],
        ['Raise the virtual memory (drive space used as extra memory) to its largest size and restart', NOSPLIT, 'It hides the growth and leaves the program that causes it.']])],
      deciding: ['b1'],
      reason: 'Task Manager shows memory by program and the growth over time. One program climbing all day is a program fault, so it is updated or reinstalled. Adding RAM is for a computer whose normal work needs more than it has.' }),
    item({
      id: 'l23-s-shutdown', strand: RUN,
      blocks: [
        chat('Arlo, Engineering', 'l1', 'My desktop switches itself off about once an hour while I run the big spreadsheets. There is no blue screen, it just goes dark. It is fine when idle. The fan roars before it goes, and boxes are stacked against the case.'),
        list('b', 'Event Viewer, System log', ['Time', 'What it says'], [['10:42 AM', 'Critical: restarted without shutting down cleanly'], ['11:44 AM', 'Critical: restarted without shutting down cleanly'], ['12:51 PM', 'Critical: restarted without shutting down cleanly'], ['Bug check (blue screen) entries', 'None']])],
      asks: [ask('Where does this point?', [
        ['Heat: clear the vents, remove the dust, and watch the temperature', true, 'The off-switches come under load, with a roaring fan and blocked vents, and there is no blue screen entry. That is heat, which can cause trouble at any link.'],
        ['A bad update, so uninstall the newest Windows update and test again', CAUSE, 'No update is mentioned, and a crash from Windows would leave a blue screen entry. Heat explains it.'],
        ['The power supply, so order a new one before doing any other check', PART, 'It may be, but heat is the cheaper explanation and blocked vents are shown. Clear it first, and the supply comes next if it still happens.'],
        ['Damaged Windows files, so run sfc /scannow and wait for it to finish', TOOL, 'sfc checks Windows files. A sudden power-off with a roaring fan under load is not what a damaged file looks like.']])],
      deciding: ['l1', 'b4'],
      reason: 'Many sudden shutdowns with no blue screen, under heavy work, with a roaring fan and blocked vents, point at heat. Event Viewer confirms it is sudden power loss rather than a crash. The cheap fix is airflow; the power supply is the next cut if it continues.' }),
    item({
      id: 'l23-s-crash', strand: RUN,
      blocks: [
        chat('Sabrina, Accounts', 't1', 'Tally Pro closes by itself when I open an invoice. Other programs are fine. The same happens on my colleague Maxwell’s computer.'),
        list('b', 'Event Viewer, Application log', ['Line', 'What it says'], [['Faulting application', 'tallypro.exe, version 4.2.1'], ['Faulting module', 'report.dll, a file of code the program loads; the same on both computers']])],
      asks: [ask('Which move fits?', [
        ['Update or repair Tally Pro: two computers fail the same way and nothing else does', true, 'One program, on two computers, with the fault inside its own file. That is the program, not Windows, memory or Sabrina’s profile.'],
        ['Run sfc /scannow and then restart the computer to see what changed', TOOL, 'Other programs are fine, and Maxwell’s computer fails the same way. Windows files are not the suspect.'],
        ['Create a new profile for Sabrina and move Sabrina’s files over to it', LINK, 'Maxwell’s computer and profile show the same fault. A profile cannot explain it.'],
        ['Restore Sabrina’s computer to last week with System Restore, to be safe, and then try the program again', WIPE, 'The log names the program’s own file. A restore is a big step that Maxwell’s computer would not share.']])],
      deciding: ['t1', 'b1', 'b2'],
      reason: 'Applications crashing is cut by one program or all, and one user or all. One program on two computers is the program: the log names its own module. Update or repair it, and tell the desk, since others may have it.' }),
    item({
      id: 'l23-s-usb', strand: RUN,
      blocks: [
        chat('Katarina, Records', 'h1', 'My scanner stopped working this morning. I plugged a webcam, a card reader and a label printer into the same hub last week.'),
        list('b', 'Device Manager', ['Line', 'What it shows'], [['USB controller', 'Yellow triangle: not enough USB controller resources'], ['Devices on the hub', 'Scanner, webcam, card reader, label printer, mouse']])],
      asks: [ask('What is the cheapest cut?', [
        ['Unplug all the hub devices, then plug them in one at a time, testing after each', true, 'The warning says the controller cannot serve everything on it. Adding them back one at a time shows which device, or how many, tips it over.'],
        ['Reinstall Windows and add every device again from the start', WIPE, 'A resource warning on one controller is not damage to Windows. Unplugging devices is free.'],
        ['Update every driver on the computer and replace the hub in the same visit on Friday', TWO, 'Two changes at once, so nothing would show which one mattered.'],
        ['Order a new motherboard', PART, 'The warning is about too many devices on a controller, not a dead part. The cheap test comes first.']])],
      deciding: ['b1', 'b2'],
      reason: 'A USB controller resource warning in Device Manager means the controller cannot serve what is plugged in. Unplug everything and add back one at a time: that is the cut. A powered hub or a driver update are the next steps if one device still fails.' }),
    item({
      id: 'l23-s-zone', strand: RUN,
      blocks: [
        chat('Eugene, Legal', 'u1', 'My clock is exactly one hour behind since Sunday. It stays exactly one hour behind all day. It is 3 PM now and it shows 2 PM. Date and minutes are right, and it was fine last week.'),
        note('This computer is not on the company domain. It was off the whole weekend; the firmware battery is a month old and fine.')],
      asks: [ask('What do you check first?', [
        ['The time zone and daylight setting in Date and time, then press Sync now', true, 'Exactly one hour off, with right minutes, since a clock change, is a time zone or daylight setting. Sync now then contacts the time server.'],
        ['The small battery on the motherboard, by swapping it for a new one', LINK, 'A dead battery gives dates like January 1 and a reset after power-off, not exactly one hour. The minutes are right.'],
        ['The Windows system files, with sfc /scannow from an administrator prompt', TOOL, 'A damaged file would not leave the minutes exact and the hour off. A setting is the cheaper explanation.'],
        ['The Windows Time service, by changing its startup type to Disabled', CAUSE, 'Disabling the service would stop the clock from being corrected at all. It would not fix an hour.']])],
      deciding: ['u1'],
      reason: 'Time drift has two homes. Wrong after being off and reset to an odd date is the battery on the motherboard (firmware). A clean hour off while running is the time zone or daylight setting, and Sync now contacts the time server.' }),
    item({
      id: 'l23-s-restore', strand: RUN,
      blocks: [
        chat('Iris, Video', 'i1', 'Since I installed the editing suite Monday, Windows stutters and two other programs crash. Windows made a restore point just before the install. I have my projects saved to the server.'),
        note('The suite installed its own drivers and two background services as well. The vendor’s page says its uninstaller leaves the drivers and services behind.')],
      asks: [ask('What is the smallest way back?', [
        ['Use System Restore to the point before the install, and tell Iris it removes the suite', true, 'The suite changed drivers, services and settings, so there are several things to undo. System Restore returns them together and leaves Iris’s documents; the projects are on the server.'],
        ['Roll back one driver at a time until the stutter stops, then the next', ONE, 'The suite installed drivers and services together. Rolling back one driver does not undo the rest.'],
        ['Reinstall Windows and then the programs they need, one by one, starting with the suite', WIPE, 'A restore point made just before the install is the smaller way back. A reinstall costs everything on the computer.'],
        ['Tell Iris to uninstall the suite from Apps, restart, and check whether the stutter stops', ONE, 'The vendor’s page says the uninstaller leaves the drivers and services, so the stutter would stay.']])],
      deciding: ['i1'],
      reason: 'When one install changed many things and a restore point from just before it exists, System Restore is the smallest way back that undoes them all. It leaves documents alone and removes programs installed after the point, which the user is told first.' }),
    item({
      id: 'l23-s-clean', strand: RUN,
      blocks: [
        chat('Jan, Planning', 'j1', 'My computer freezes about ten minutes after I sign in. It never freezes in safe mode. No blue screen, no error. About twelve things start when I sign in.'),
        note('Safe mode ran for an hour without a freeze. Windows itself and the hardware looked fine.')],
      asks: [ask('What is the next cut?', [
        ['Do a clean boot (msconfig for services, Task Manager for startup), then turn half back on', true, 'Safe mode cleared the hardware and Windows, so the fault is in what is added. A clean boot starts with none of it, and turning half back on halves the twelve.'],
        ['Turn off all twelve startup programs for good and tell Jan it is fixed', TWO, 'Twelve changes at once. Nothing shows which one mattered, and programs they need are lost.'],
        ['Run sfc /scannow from an administrator prompt, then restart and wait to see if the freeze comes back', TOOL, 'Safe mode is fine, which points away from Windows’s own files. sfc does not split the added programs.'],
        ['Remove the memory sticks one at a time to find the one that freezes', PART, 'Nothing points at memory: safe mode ran an hour clean and the freeze waits ten minutes after sign-in. Pulling sticks tests a part the ticket gives no sign of.']])],
      deciding: ['j1'],
      reason: 'Fine in safe mode, frozen in normal start: the fault is in a driver, service or startup program that safe mode leaves out. A clean boot removes the added services and startup programs, and turning half back on, restart, keep halving finds the one.' }),
    item({
      id: 'l23-s-loop', strand: BOOT,
      blocks: [
        chat('Nia, HR', 'n1', 'My laptop restarts at the logo over and over. A blue screen with a repair message came up, and now it says Startup Repair could not repair my PC. My files are only on this laptop.'),
        note('WinRE opened by itself after failed starts. System Restore points exist from last week.')],
      asks: [ask('What do you do next?', [
        ['Copy Nia’s files out first (command prompt in WinRE), then try System Restore to last week', true, 'Nia’s files exist only here, so they come first. System Restore is the next smallest way back and leaves Nia’s documents alone.'],
        ['Run Startup Repair a second time, and then try System Restore if that fails again', REPEAT, 'It has just failed. Running the same repair again tests nothing new.'],
        ['Choose Reset this PC and keep the files when the reset offers it, then reinstall the programs', WIPE, 'It would remove programs and may remove files, and their files exist nowhere else. Smaller ways back are left.'],
        ['Order a new drive and wait for it before trying anything else', PART, 'Nothing has tested the drive. Failing Startup Repair does not mean a failed drive.']])],
      deciding: ['n1'],
      reason: 'Boot issues are worked in order: copy files if they exist nowhere else, then the smallest way back that is left. Startup Repair failed once, so System Restore from WinRE is next. Reset and reinstall come last.' }),
    item({
      id: 'l23-s-sfc', strand: RUN,
      blocks: [
        chat('Cindy, Procurement', 'z1', 'Since yesterday the Start menu will not open, Settings crashes, and three different programs close by themselves. Nothing was installed. No blue screen.'),
        list('b', 'Event Viewer, Application log', ['Line', 'What it says'], [['Faulting module', 'Different programs, the same Windows system file (a .dll, a shared file of code)'], ['Count since yesterday', '31 errors']])],
      asks: [ask('Which tool fits?', [
        ['sfc /scannow in a command prompt opened as administrator', true, 'Many different programs and parts of Windows fail on the same system file. sfc checks Windows’s own files and replaces damaged ones.'],
        ['Device Manager, to roll back the drivers of every device one by one', TWO, 'The log names a Windows file, not a driver, and rolling back many drivers is many changes at once.'],
        ['Task Manager, to end each program that crashes and open it again', NOSPLIT, 'The programs close because the shared file is damaged. Restarting them just shows the same fault.'],
        ['The Services console, to restart every service marked Automatic', CAUSE, 'No service is named. Restarting them all changes a lot and does not touch the damaged file.']])],
      deciding: ['z1', 'b1', 'b2'],
      reason: 'Several programs and parts of Windows failing on the same system file is system instability from a damaged file. sfc /scannow checks the protected files and replaces damaged ones, and it changes nothing else.' }),
    item({
      id: 'l23-r-winre', strand: BOOT,
      blocks: [{ kind: 'spoken', text: 'The repair mode that opens by itself after Windows fails to start a few times, and holds Startup Repair, System Restore and safe mode, has a three-word name, shortened to WinRE.' }],
      asks: [{ id: 'say', kind: 'text', prompt: 'Type the three-word name.', accept: ['windows recovery environment'] }],
      reason: 'The Windows Recovery Environment (WinRE) is the repair mode. It opens by itself after failed starts, or from install media, and holds Startup Repair, System Restore and the way into safe mode.' }),
    item({
      id: 'l23-x-call', strand: RUN,
      blocks: [note('Wes in Operations calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Wes calls about a blue screen. What do you say?', form: 'call', from: 'Wes, Operations', detail: 'Incoming call · 10:05 AM', start: 'one',
        turns: {
          one: { lines: [L('w1', 'My computer keeps blue-screening and restarting. It is a mess. Can you just wipe it and put Windows back on?')], push: 'Wes wants a reinstall and has given no details.',
            options: [{ id: 'story', text: 'What does the blue screen say, and has anything been installed or changed since it began?', goto: 'two' },
              { id: 'wipe', text: 'Which model is the computer? Bring it to the desk and I will wipe it and reinstall Windows today.', end: 'wipe' },
              { id: 'memory', text: 'It sounds like the memory, Wes, and sorry for the trouble. I will order a new stick and fit it tomorrow.', end: 'guess' }] },
          two: { lines: [L('w2', 'It says something about a stop code. I wrote down the name. And the printer program updated itself on Monday, I think.')], push: 'Wes has given a stop code and a change, and still wants it fixed today.',
            options: [{ id: 'safe', text: 'Read me the code. We start in safe mode and undo that update, and I call you at 2 PM to confirm.', end: 'safe' },
              { id: 'again', text: 'Restart it a few more times, and I call you at 2 PM to see if it came back.', end: 'again' },
              { id: 'new', text: 'Then the printer program is the cause. I reinstall Windows tonight and call you at 8 AM.', end: 'wipe2' }] }
        },
        ends: {
          safe: { ok: true, then: 'A stop code and a change from Monday point at one thing to undo. Safe mode and a roll back are the small way back, and the call at 2 PM confirms it held.' },
          wipe: { ok: false, slip: WIPE, then: 'Nothing has been tested. A reinstall costs a day and Wes’s programs, and may bring back the same fault. The stop code and what changed come first.' },
          guess: { ok: false, slip: GUESS, then: 'No test points at memory yet. Telling Wes a cause before knowing it sends both of you the wrong way.' },
          again: { ok: false, slip: NOSPLIT, then: 'Restarting repeats the same crash and tests nothing; the stop code and the Monday change are not used.' },
          wipe2: { ok: false, slip: WIPE, then: 'The update is one change, and a roll back undoes it. A reinstall would be the last step, and tonight is a guess.' } } }],
      reason: 'The stop code and what changed come before any big step. Wes gave both, so the next move is the small way back, safe mode and undoing the Monday update. Every answer here gives a time to call; only this one acts on the evidence.' }),

    // ----- group 3: mixed with lessons 9 and 5; the same moves, different ground -----
    item({
      id: 'l23-g-two', strand: RUN,
      blocks: [
        chat('Lamar, Purchasing', 'a1', 'This morning I let Windows install an update, and I also installed a new label printer driver. Now my computer freezes every few minutes. Both changed today: the update ran first, the driver went on last, around noon.'),
        note('Safe mode ran for an hour without a freeze.')],
      asks: [ask('How do you undo them?', [
        ['Roll back the printer driver alone and test, and uninstall the update only if freezes remain', true, 'Two things changed, so one goes at a time, the newer one first. Each undo is a test, and the order shows which one did it.'],
        ['Roll back the printer driver and uninstall the update together, then restart and test both at once', TWO, 'With both gone, a fix would not show which one caused it, and a change that was not needed stays out.'],
        ['Run sfc /scannow from an administrator prompt, then test again', TOOL, 'Safe mode is fine, which points away from Windows’s own files, and two recent changes are the better suspects.'],
        ['Reinstall Windows, which removes both changes in one step', WIPE, 'A reinstall removes everything, not just the two changes. Two small undos are left to try.']])],
      deciding: ['a1'],
      reason: 'One change at a time has no exception: you cannot tell which change did it if you undo both, and a change that was not the cause comes out for nothing. Undo one, test, then the other.' }),
    item({
      id: 'l23-g-copy', strand: BOOT,
      blocks: [
        chat('Sadia, Reception', 'o1', 'My computer takes ages to sign in and, when it does, my desktop is empty. My co-worker signed in on the same computer and it was fine. My photos and documents are in my profile and nowhere else.'),
        note('A new test profile signs in fast and shows an empty desktop. The plan is to move Sadia to a new profile.')],
      asks: [ask('What is the order of the work?', [
        ['Copy their Documents, Desktop and Pictures folders first, then move them to the new profile', true, 'The files exist only in their old profile. They are protected before the profile is touched.'],
        ['Delete the old profile folder, then let Windows build a new one for them', NOBACK, 'Their photos and documents are only in that folder. Deleting it first loses them for good.'],
        ['Move them to the new profile now and copy the files over later if they request them', NOBACK, 'The old profile stays in place at first, but nothing protects the files, and nobody has told them what happens next.'],
        ['Reinstall Windows, which gives a clean profile and clears the slow sign-in', WIPE, 'The computer is fine for the co-worker. A reinstall fixes nothing that the new profile does not and erases more.']])],
      deciding: ['o1'],
      reason: 'The test profile showed the old profile is the fault. Their files are only there, so they are copied out before the profile is replaced: protect the data, then change one thing.' }),
    item({
      id: 'l23-g-smell', strand: BOOT,
      blocks: [
        chat('Maria, Facilities', 'r1', 'My laptop blue-screened twice this morning. There is a burning smell from the left side, the body is too hot to touch, and the base has started to bulge.')],
      asks: [ask('What do you tell Maria first?', [
        ['Shut it down, unplug it, take it off their desk and do not power it on again', true, 'A burning smell, heat and a bulge are signs of a swollen battery, a safety issue. It stops before any test.'],
        ['Run Event Viewer to read the stop code before the laptop restarts again', RISK, 'The stop code is useful, but not before the laptop is safe. Powering it on again adds risk.'],
        ['Start it in safe mode to see whether the blue screen comes back', RISK, 'Starting it up once more keeps a hot, bulging battery running. The safety stop comes before the cut.'],
        ['Let it cool for ten minutes, then plug it in again and watch the temperature', IGN, 'A bulge and a burning smell are not a temperature problem that cooling fixes. Plugging it in feeds the battery.']])],
      deciding: ['r1'],
      reason: 'Heat can cause trouble at any link, and a burning smell with a bulge means the computer is not powered on again. Unplug it, move it away, and follow the desk’s rule for a swollen battery. The blue screens wait.' })
  ]);
})();
