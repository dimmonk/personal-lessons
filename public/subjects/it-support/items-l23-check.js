// IT Help Desk, lesson 23 "Windows problems": the six new questions of the check (three on the way up, three on the running system) and six held in reserve for the weekly review,
// three for each topic the check covers (win-boot-fix, win-run-fix). Facts as in items-l23.js (A+ map Core 2 3.1, 1.4, 1.5; Core 1 5.1, 5.2). Invented people and programs.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  const chat = (id, strand, from, text, extras, prompt, rows, reason, deciding) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]]), ...extras], asks: [ask(prompt, rows)], deciding: deciding || ['m1'], reason });
  const LINK = 'wrong-link', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', TWO = 'two-changes', KEPT = 'kept-ruled-out', WIPE = 'windows-wipe',
    TOOL = 'wrong-tool', REPEAT = 'repeated-step', SCOPE = 'wrong-scope', GUESS = 'guessed-cause', NOBACK = 'no-backup';
  const BOOT = 'win-boot-fix', RUN = 'win-run-fix';

  FC.items('it-support', [
    // ----- the check: six new tickets -----
    chat('l23-k-ram', BOOT, 'Max, Estimating', 'Since Friday, when I put a second memory stick in, my computer blue-screens at the Windows dots, most mornings. Before that it never did. I want it fixed, but please do not wipe it.',
      [list('b', 'The blue screen', ['Line', 'What it says'], [['Stop code', 'MEMORY_MANAGEMENT'], ['Changed on Friday', 'A second memory stick was added']])],
      'What is the smallest test?', [
        ['Take out the new memory stick alone and see whether the blue screens stop', true, 'The only change on Friday was the new stick and the code points toward memory. Removing that one part splits it: blue screens gone means the new stick is the cause.'],
        ['Roll back the display driver to the one from before the last update', CAUSE, 'No driver changed on Friday, and the code points toward memory. A roll back tests something nothing points at.'],
        ['Run sfc /scannow from a command prompt opened as administrator', TOOL, 'sfc checks Windows files. The code and the Friday change both point toward memory.'],
        ['Reinstall Windows with the new stick in, so everything starts fresh and the blue screens stop', WIPE, 'Max wanted no wipe, and a reinstall with the same stick in would repeat the fault.']],
      'A blue screen that began right after a new part was added is the what-changed move. The stop code points toward memory and the new stick is the only change, so removing it alone is one change that splits the cause. Reseating or swapping it comes after.', ['m1', 'b1', 'b2']),
    chat('l23-k-roam', BOOT, 'Pat, Planning', 'It takes about twelve minutes to sign in, whichever company computer I use. After that all is fine. I have a lot of videos on my desktop.',
      [list('b', 'The desk’s record', ['Line', 'Value'], [['Profile type', 'Roaming: changes are copied between the server and the computer at every sign-in'], ['Profile size', '14 GB, mostly a Videos folder'], ['Sign-in time on three other computers', 'About twelve minutes each']])],
      'What is the finding and the fix?', [
        ['The profile is large and is copied at each sign-in; move the videos to a network drive', true, 'The slowness follows Pat to every computer, so it is the profile. A roaming profile is copied at sign-in, and 14 GB of video is why it takes twelve minutes.'],
        ['This computer’s drive is slow, so replace it and reinstall Windows', SCOPE, 'Three other computers are just as slow. The fault travels with Pat, not with one computer.'],
        ['Create a new test profile on this computer and see whether that signs in quickly for Pat', NOSPLIT, 'A new profile has no videos and would be quick, but it only repeats what the table already says: the fault is in Pat’s profile.'],
        ['Roll back the newest Windows update on this computer, then sign in again', CAUSE, 'Other computers are slow too, and an update on one computer cannot explain it. The size of the profile does.']],
      'Slow profile load for one person on every computer is the profile, link 6. The record says it is roaming and 14 GB, so it is copied at each sign-in. Moving the big files out of the profile is one change, with Pat’s files copied first.', ['m1', 'b1', 'b2', 'b3']),
    chat('l23-k-clock', BOOT, 'Dot, Archive', 'Every Monday my desktop says the date is January 1, and I fix it by hand. The rest of the week it is right. It is switched off and unplugged all weekend.',
      [list('b', 'What the desk found', ['Test', 'Result'], [['Firmware screen on Monday', 'Date and time missing; settings back to defaults'], ['Time zone and Sync now in Windows', 'Right all week once corrected'], ['Age of the computer', '7 years']])],
      'Which link and which fix?', [
        ['Link 3, firmware: replace the small battery on the motherboard', true, 'Settings lost after being off, back at defaults, is the battery that keeps the firmware’s settings alive. At seven years it is worn out.'],
        ['Windows time: put the Windows Time service to Automatic and sync daily', LINK, 'Windows time is right all week. What fails is the firmware losing its date while the power is off.'],
        ['Windows files: run sfc /scannow, if a clock file is damaged', TOOL, 'The firmware screen already shows the lost date, before Windows loads. Windows files cannot cause that.'],
        ['The time zone: change it to match the office and press Sync now each Monday', REPEAT, 'The time zone and Sync now are already known to work. Fixing it by hand each week is what Dot is doing.']],
      'Wrong date after being off, with firmware settings back at defaults, is link 3: the small battery on the motherboard. Windows time is fine while it runs, which is the cut that splits the battery from the time service.', ['m1', 'b1', 'b2']),
    chat('l23-k-time', RUN, 'Fay, Dispatch', 'My laptop clock drifts by a few minutes every week. I put in a new firmware battery last month. I correct it by hand each Friday and it drifts again.',
      [list('b', 'What the desk found', ['Where', 'What it shows'], [['Date and time settings', 'Time zone right; the last successful sync was nine weeks ago'], ['Services console', 'Windows Time: stopped; startup type: Disabled']])],
      'What is the fix?', [
        ['Change the Windows Time startup type to Automatic, start it, and press Sync now', true, 'The service that keeps Windows’s clock right is disabled, and the last sync was nine weeks ago. Turning it on is one change at the cause.'],
        ['Replace the firmware battery again and correct the clock once more', LINK, 'The battery is a month old, and the clock holds its date while off. The service is what is stopped.'],
        ['Keep correcting the clock by hand each Friday, and tell Fay to do the same on the other laptops', NOSPLIT, 'That is the workaround Fay already uses. It leaves the stopped service where it is.'],
        ['Run sfc /scannow and then restart the computer to see what changed', TOOL, 'The table already names the cause: a disabled service. sfc checks Windows files, which are not shown to be damaged.']],
      'Time that drifts while the computer runs is Windows keeping time, not the firmware. The Services console shows the Windows Time service disabled, so the fix is its startup type, a start and a sync.', ['m1', 'b1', 'b2']),
    chat('l23-k-full', RUN, 'Norman, Estimating', 'Three programs close by themselves in the afternoons, and Windows warns that memory is low. My computer has 8 GB. A big new project started last month, so I have more open than before.',
      [list('b', 'Task Manager, Performance and Processes, 3 PM', ['Reading', 'Value'], [['Memory in use', '7.8 of 8 GB'], ['Browser', '3 GB, the same all day'], ['Spreadsheet and Teams', '2 GB and 1.5 GB, the same all day'], ['Any program growing through the day', 'None'], ['Event Viewer, Application log', 'Out of memory, at each crash']])],
      'What is the finding?', [
        ['Normal work now needs more than 8 GB; add memory', true, 'Nothing grows and nothing is faulty. The programs hold steady and fill the 8 GB because the work grew. This computer needs more RAM.'],
        ['One program leaks, so update the spreadsheet program', CAUSE, 'No program grows through the day, so there is no leak to update away.'],
        ['The computer is infected, so scan it before touching anything else', GUESS, 'Nothing in the table says so, and all the readings are steady. The memory is full from honest work.'],
        ['Windows is damaged, so run sfc /scannow and restart the computer', TOOL, 'The log says out of memory, not a damaged file. sfc will find nothing to explain it.']],
      'Memory full from steady, ordinary programs, with the work grown, is the situation where adding RAM is the right answer. The earlier tests ruled out a leak, so the part is no longer a guess.', ['m1', 'b1', 'b2', 'b4']),
    chat('l23-k-usb', RUN, 'Luna, Training', 'Since this morning my mouse, keyboard and headset all stopped working on the docking station. Windows installed a driver for the USB controller overnight.',
      [list('b', 'Device Manager', ['Line', 'What it shows'], [['USB controller', 'Yellow triangle: not enough USB controller resources. Driver installed last night'], ['Devices tried alone', 'A single mouse also fails on the docking station'], ['Roll Back Driver button', 'Available']])],
      'What is the smallest way back?', [
        ['Roll back the USB controller driver, restart, and test the devices', true, 'A single mouse fails too, so too many devices is ruled out, and the driver arrived overnight. Rolling it back is one change.'],
        ['Unplug everything and plug the devices back in one at a time', NOSPLIT, 'A single mouse already fails, so adding devices one by one cannot split anything. The new driver is the change.'],
        ['Replace the docking station with a new one and test the devices', PART, 'The warning followed a driver install, and a roll back is free. A new dock comes after that.'],
        ['Reinstall Windows and add the devices again from the start', WIPE, 'A resource warning after a driver install is not damage to Windows. The roll back is the small way back.']],
      'The warning can come from too many devices or from the driver. One mouse failing rules out too many, and the new driver the night before is the change, so the Roll Back Driver button is the first and smallest way back.', ['m1', 'b1', 'b2', 'b3']),

    // ----- reserve: three for each topic -----
    chat('l23-res-bsodonce', BOOT, 'Diego, Operations', 'My laptop blue-screened one time yesterday, during start-up. I wrote the code down. It has started normally four times since, and nothing is different.',
      [list('b', 'The record', ['Line', 'Value'], [['Stop code', 'One entry, never seen before'], ['Starts since', 'Four, all normal'], ['Changes recently', 'None known']])],
      'What is the right move?', [
        ['Record the stop code and the time, check for updates, and watch for it to come back', true, 'One blue screen with nothing since has no pattern to cut yet. The code goes in the notes so that a second one can be compared.'],
        ['Reinstall Windows, so that a crash like that can never come back', WIPE, 'One crash and four normal starts do not show Windows is damaged. A reinstall costs a day for no evidence.'],
        ['Replace the memory', GUESS, 'Nothing points at memory yet. Telling Diego a cause before knowing it is a guess that costs a part.'],
        ['Reset the firmware to its defaults, to clear anything that may have changed', NOSPLIT, 'Nothing is shown to have changed in the firmware, and this adds a change with no test behind it.']],
      'A single blue screen is written down, not hunted. A second one gives something to cut. Until then the stop code and the time are the useful part.', ['m1', 'b1', 'b2']),
    chat('l23-res-profile2', BOOT, 'Lou, Records', 'My sign-in takes six minutes. The help desk had me sign in as a test user on my computer and that took six minutes too.',
      [list('b', 'The desk’s tests', ['Test', 'Result'], [['Test profile on this computer', 'Six minutes'], ['Test profile on another computer', 'Under one minute'], ['Lou’s own profile on the other computer', 'Under one minute']])],
      'Where does this point?', [
        ['This computer, not the profile: look at its startup programs and its drive', true, 'A brand-new profile is slow here and quick on another computer, so the fault stays with this computer. Lou’s profile is fine.'],
        ['Lou’s profile, so build a new one and copy the files across', CAUSE, 'Lou’s own profile is quick on another computer. The new profile test cleared it.'],
        ['The company network, so call the network team about every computer', SCOPE, 'The other computer signs in fast on the same network. One computer is slow.'],
        ['Link 5, Windows loading: reinstall Windows on the other computer', LINK, 'The other computer is the fast one. The slow one is the computer in front of Lou.']],
      'A new test profile splits the profile from the machine. Slow with a new profile on this computer, quick elsewhere, leaves this computer. Lou’s profile is cleared.', ['b1', 'b2', 'b3']),
    chat('l23-res-noback', BOOT, 'Freda, Intake', 'My laptop restarts at the logo and goes into a repair screen every time. Startup Repair could not fix it and no restore points exist. Everything I need is on the company server.',
      [list('b', 'What the desk tried', ['Step', 'Result'], [['Startup Repair', 'Could not repair it'], ['System Restore', 'No restore points exist'], ['Files on the laptop', 'All are saved on the server']])],
      'What is the next step?', [
        ['Reset this PC, the smallest way back that is left', true, 'Startup Repair failed, there are no restore points, and nothing is lost: their files are on the server. A reset is now the smallest way back that is left; a clean install is after it.'],
        ['Run Startup Repair again, this time from the install USB', REPEAT, 'It has just failed. The same repair gives the same result.'],
        ['Order a new laptop', PART, 'Nothing has tested the hardware, and a reset costs far less.'],
        ['Copy their files to a USB stick first, as every repair starts with a backup', NOBACK, 'They are already saved on the server. Copying them again adds a step and protects nothing new.']],
      'The ways back go smallest first. With Startup Repair failed, no restore point and the files already on the server, a reset is right: a bigger step, taken because the earlier ones are used up.', ['m1', 'b1', 'b2', 'b3']),
    chat('l23-res-svc', RUN, 'Neil, Shipping', 'The label service on my computer will not start. A message says it did not start because of a logon failure. It started fine until last week.',
      [list('b', 'The Services console, and the log', ['Where', 'What it shows'], [['Services console', 'Label Service: stopped. Startup type: Automatic'], ['Properties, Log On tab', 'It runs as a service account; the password changed last week']])],
      'What is the next move?', [
        ['Open the service’s Log On tab and enter the new password with the account’s owner', true, 'The log says a logon failure, and the account’s password changed last week. The service cannot start until it signs in as that account with the new one.'],
        ['Change the startup type to Manual and start the service by hand each day', NOSPLIT, 'It would still fail to start. The startup type is not the problem.'],
        ['Check the Dependencies tab for another service that must start first', KEPT, 'The message names a logon failure, not a dependency. This is the cause already ruled out.'],
        ['Uninstall the label program and install it again from the desk’s share', WIPE, 'The program is not damaged. A service that cannot log on needs the right account details.']],
      'A service that will not start is read in the Services console and the log. A logon failure after a password change points at the Log On tab of that service. The account’s owner enters the password with the technician; the technician does not take it from the user.', ['m1', 'b1', 'b2']),
    chat('l23-res-hung', RUN, 'Odo, Billing', 'My report program froze and says Not Responding. Everything else is fine. I do not want to lose the other work I have open.',
      [list('b', 'Task Manager', ['Line', 'What it shows'], [['Report program', 'Not responding, using no processor time'], ['Everything else', 'Responding, memory at 40%']])],
      'What do you have Odo do?', [
        ['End that one program in Task Manager, wait, then reopen it', true, 'Only that program is stuck. Ending it alone frees it and keeps the rest of Odo’s open work.'],
        ['Restart the whole computer to clear anything that is stuck', TWO, 'The restart would close all of Odo’s open work, though one program is stuck.'],
        ['Run sfc /scannow so that Windows files are checked before anything else', TOOL, 'One program is stuck and everything else works. Windows files are not shown to be damaged.'],
        ['Reinstall the report program right now, so it will not hang again', WIPE, 'A single freeze does not show the program is damaged. Reinstalling costs time for no evidence.']],
      'One program against all programs is the first cut. Task Manager shows only that program stuck, so ending that one program is the smallest step. A second freeze is the time to update or repair it.', ['m1', 'b1', 'b2']),
    chat('l23-res-when', RUN, 'Tracy, Admissions', 'Last Tuesday around 2 PM my computer closed a program and restarted. I want to know what happened and when. Can you look?',
      [note('Tracy’s computer is back at normal. The desk needs the record from last Tuesday.')],
      'Which tool shows it?', [
        ['Event Viewer: its System and Application logs keep entries with their times', true, 'Event Viewer keeps what went wrong and when, including after the computer has recovered.'],
        ['Task Manager: its Processes list shows everything that happened last Tuesday', LINK, 'Task Manager shows what runs right now, not what happened a week ago.'],
        ['Device Manager: it lists each part and any error each part had', LINK, 'Device Manager shows the state of devices now, with no history of a restart.'],
        ['The Services console: it keeps each service’s status for the past week', LINK, 'The Services console shows status now. It has no week of history.']],
      'The question is what happened and when, a week ago. Only Event Viewer keeps entries with their times. The other tools show how things stand now.', ['m1'])
  ]);
})();
