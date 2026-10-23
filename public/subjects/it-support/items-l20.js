// IT Help Desk, lesson 20 "Which Windows tool for the job" (part tools): the worked ticket and the groups of questions. The tools are taught by the question each answers on a
// ticket: Task Manager's tabs (processes, performance, startup, users, services), the eight consoles opened from the Run box (eventvwr.msc, diskmgmt.msc, taskschd.msc,
// devmgmt.msc, certmgr.msc, lusrmgr.msc, perfmon.msc, gpedit.msc), six more tools (msinfo32, resmon, msconfig, cleanmgr, dfrgui, regedit), the Control Panel and Settings
// app areas, Power Options and File Explorer Options. Research: docs/research/it-support-aplus.md Core 2 1.4 and 1.6; docs/research/it-support.md IT4, IT5 and IT8 (cut the
// causes with the cheapest test; look before changing), IT9 (one change at a time), IT25 to IT27 (recall from memory with feedback). Invented people and computers.
// Strands: win-tools (Task Manager and the six more tools), win-consoles (the eight consoles), win-settings (Control Panel, Settings, Power Options, File Explorer Options).
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  // a ticket in one chat message, with one question
  const T = (id, strand, who, text, prompt, rows, reason) => item({ id, strand, blocks: [chat(who, 'm1', text)], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TOOL = 'wrong-tool', NOW = 'now-or-then', TIDY = 'tidy-first', BLIND = 'blind-edit', PWR = 'power-mixed', AREA = 'wrong-area', LOOK = 'mixed-look-alike',
    CAUSE = 'wrong-cause', NOSPLIT = 'no-split', PART = 'part-first', RULED = 'kept-ruled-out', TWO = 'two-changes', NOBACK = 'no-backup', GUESS = 'guessed-cause', MISREAD = 'misread-output';
  const TL = 'win-tools', CO = 'win-consoles', SE = 'win-settings';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (not enough memory) that Task Manager's Performance tab rules out, then Processes and Startup find the program -----
    item({
      id: 'l20-w-dean', strand: TL,
      blocks: [
        chat('Dean, Design', 'd1', 'My laptop has been slow since Monday and the fan is loud all day. It is four years old, so I think it needs more memory.'),
        list('b', 'Task Manager, Performance tab (what Dean reads out)', ['Line', 'Value'], [['CPU (the processor)', '96% in use'], ['Memory', '5.1 of 16 GB in use'], ['Disk', '3% in use'], ['Wi-Fi', 'Almost nothing sent or received']]),
        list('c', 'Task Manager, Processes tab, sorted by CPU', ['Name', 'CPU', 'Memory'], [['PhotoSync Helper', '71%', '210 MB'], ['Chrome', '14%', '1.4 GB'], ['Windows Explorer', '2%', '90 MB']])],
      asks: [ask('What do the Performance lines show?', [
        ['Memory is mostly free and the processor is busy, so memory is not the limit', true, 'Only 5.1 of 16 GB is in use while the processor sits at 96%. The Performance tab answers “which part is the limit?”, and here it is not memory.'],
        ['Memory is the problem: 5.1 GB is a lot to have in use at once', CAUSE, 'Memory is less than a third full. The guess was memory; the reading says otherwise.'],
        ['The machine is healthy: the disk and the Wi-Fi are both nearly idle', MISREAD, 'Two idle lines do not cancel a processor at 96%. The busy line is the one that matters.'],
        ['Open Disk Management to look for a drive fault on the slow laptop', TOOL, 'Disk Management shows how drives are divided up. The Disk line reads 3%, so the drive is not the limit.']])],
      steps: [
        { id: 'chain', does: 'Split the question first: what is happening now, or what was recorded earlier?', working: '“Slow since Monday” with a loud fan is happening now, so the live view comes first: Task Manager. Event Viewer, which keeps records, is for questions about the past.' },
        { id: 'favorite', does: 'Name the favorite cause and look before buying: Task Manager’s Performance tab shows which part is the limit.', working: 'The favorite is memory. Memory is 5.1 of 16 GB, so it is ruled out. The processor is at 96%.', ask: 'a' },
        { id: 'proc', does: 'Cut in half: which program uses the processor? Open the Processes tab and sort by CPU.', working: 'PhotoSync Helper uses 71%. Chrome, with many tabs, uses 14%. One program is the suspect, and a list is not yet a fix.' },
        { id: 'start', does: 'Next question: does it start with Windows? Look at the Startup tab.', working: 'PhotoSync Helper is enabled at start with a High startup impact. It began on Monday when Dean installed a photo tool. That explains why it comes back after every restart.' },
        { id: 'one', does: 'Change one thing: disable PhotoSync Helper at start, then restart.', working: 'After the restart the processor idles and the fan is quiet. Ending the task alone would have helped only until the next sign-in.' },
        { id: 'next', does: 'Confirm with Dean and write it down.', working: 'Dean confirms after a day. The note says: slow, loud fan, memory 5.1 of 16 GB, processor 96%, PhotoSync Helper 71% and a High startup impact, disabled at start, fixed. Buying memory would have fixed nothing.' }],
      deciding: ['d1', 'b2', 'b1', 'c1'],
      reason: 'The favorite cause was memory, and the Performance tab ruled it out in seconds. Processes named the program using the processor, and Startup showed why it came back. Each tab answered one question, and nothing was changed before the look.' }),

    // ----- group 1: the question marked; which tool answers it -----
    T('l20-p-log', CO, 'Dariusz, Accounting', 'At start-up this morning a message flashed up saying a driver failed to load, and then everything seemed normal. I would like to know which driver, so I can tell you.',
      'Which tool shows what Windows recorded at start-up?', [
        ['Event Viewer, in the System log, which keeps what Windows recorded', true, 'Windows writes down what happened as it started, including a driver that failed. Event Viewer (eventvwr.msc) is where those records are read.'],
        ['Task Manager, and in it the Processes tab, which lists what is running', NOW, 'Task Manager shows what is running now. A driver that failed to load during start-up is a record of the past.'],
        ['Task Scheduler, which lists the jobs that run at chosen times', TOOL, 'Task Scheduler runs programs on a timetable. It does not keep a record of what failed.'],
        ['System Information, which lists the hardware the computer has in it', LOOK, 'System Information describes the computer as it is. The failed load is an event, and events are in Event Viewer.']],
      'Windows writes down what happened as it started, including a driver that failed to load. The question is about the past, so the tool is a record: Event Viewer, in the System log. Task Manager answers questions about now.'),
    T('l20-p-driver', CO, 'Joyce, Warehouse', 'The label printer worked yesterday. This morning it is not listed, and in Device Manager I saw a yellow triangle next to its name.',
      'Which tool lists devices and flags one with a problem?', [
        ['Device Manager, where a yellow triangle marks a device with a problem', true, 'The yellow triangle is Device Manager’s own warning that a device has a problem. From there you can look at the driver, update it or roll it back.'],
        ['Disk Management, which lists the drives and divides them into volumes', TOOL, 'Disk Management is for drives and the space on them. A label printer is not a drive.'],
        ['Local Users and Groups, which lists the accounts on the computer', TOOL, 'That console is for accounts. The yellow triangle is about a device.'],
        ['Registry Editor, which can show the printer’s entry as raw values', BLIND, 'It is a risky place to start. Device Manager shows the same device with a plain warning, and changes nothing until you do.']],
      'The question is which device has a problem, and Device Manager answers it with a yellow triangle on the device. From there the driver can be updated, rolled back or the device disabled, one change at a time.'),
    T('l20-p-disk', CO, 'Brendan, Finance', 'I put a second drive in the desktop for the year-end files. It does not show up in File Explorer, but the BIOS (the first screen at power-on) lists it.',
      'Which tool shows a drive that Windows has not prepared yet?', [
        ['Disk Management, which lists a new drive that has no volume yet', true, 'The firmware sees the drive, so the part is there. Disk Management (diskmgmt.msc) lists every drive, including one with no volume, and prepares it for use.'],
        ['Device Manager, then update the driver of the whole computer', NOSPLIT, 'Device Manager can show the drive as a device, but it cannot give it a letter or a format. Updating the whole computer changes more than the cheap look.'],
        ['Disk Cleanup, which clears out temporary files to make room', TIDY, 'Disk Cleanup removes files from a drive that is already in use. This drive has no volume yet.'],
        ['Resource Monitor, which shows which program is reading the disk', TOOL, 'Resource Monitor shows activity on drives in use. Nothing can be reading a drive with no volume.']],
      'The firmware sees the drive, so it is installed. Windows has not prepared it yet, and Disk Management is the console that lists a drive with no volume and gives it a letter and a format.'),
    T('l20-p-hidden', SE, 'Matthew, Reception', 'Our software guide says the settings file is in a folder called AppData in my user folder. I open my folder and there is no AppData. I can see everything else.',
      'Where does Windows hide this choice?', [
        ['File Explorer Options, View tab: show hidden files, folders and drives', true, 'AppData is a hidden folder, and Windows hides these by default. The View tab of File Explorer Options turns them on.'],
        ['Programs and Features, to see if the software installed all of its folders', AREA, 'That list shows which programs are installed, not which folders are visible.'],
        ['Indexing Options, to rebuild the list of places Windows searches', AREA, 'The index feeds search. It does not control which folders File Explorer shows.'],
        ['Device Manager, to see if the disk driver is hiding part of the folder', CAUSE, 'Nothing is wrong with the drive: the rest of the user folder shows. This single folder is marked hidden.']],
      'The folder is hidden, and showing hidden files is a File Explorer Options choice on the View tab. The question is how File Explorer shows files, not which programs are installed or how search works.'),

    // ----- group 2: tools -----
    T('l20-s-msinfo', TL, 'Marlon, Procurement', 'I am filling in a form for the insurer and it wants the computer’s model, how much memory is installed, the BIOS version and the Windows build. Where do I find all of that in one place?',
      'Which tool gives that in one list?', [
        ['System Information (msinfo32), which lists the hardware and the build', true, 'System Information is the summary: model, installed memory, firmware version and Windows build on one screen, and it can be saved as a file.'],
        ['Task Manager, whose Performance tab shows the memory and the processor', NOSPLIT, 'Task Manager gives live use and some hardware details, but not the model, the firmware version or the build in one place.'],
        ['Device Manager, which shows each device and the driver version it uses', TOOL, 'Device Manager lists devices and drivers. The form wants facts about the whole computer.'],
        ['Event Viewer, in which the System log keeps notes about the hardware', TOOL, 'Event Viewer holds records of what happened, not a list of what the computer is made of.']],
      'System Information answers “what is in this computer?” in one place: model, installed memory, firmware version and Windows build. Task Manager answers what is busy now.'),
    T('l20-s-clean', TL, 'Marian, Sales', 'The C: drive says it has 2 GB free and Windows keeps warning me. I emptied nothing and I have no big files that I know of. Is there a quick way to clear the junk Windows keeps?',
      'Which tool clears temporary files and the Recycle Bin?', [
        ['Disk Cleanup (cleanmgr), which lists temporary files and the Recycle Bin', true, 'Disk Cleanup shows what it will remove and how much space each group frees, and lets you choose. It is built for exactly this.'],
        ['Defragment and Optimize Drives (dfrgui), which rearranges the files on the drive', TOOL, 'Optimizing arranges how files sit on the drive. It does not free any space.'],
        ['Registry Editor, to delete the entries that older programs left behind', BLIND, 'Registry entries take almost no space, and a wrong edit can break Windows. It does not fix a full drive.'],
        ['Disk Management, to shrink the drive and make a new volume from the room left', TOOL, 'Disk Management changes how the drive is divided. It cannot make room that is not free.']],
      'Disk Cleanup answers “how do I free space?” and shows how much each group of temporary files would free before it removes anything. Optimizing and Disk Management do not free space.'),
    T('l20-s-reg', TL, 'Crystal, Legal', 'The vendor’s guide for our scanner says to change one value in the registry to stop it from timing out. They gave me the exact path. I have never opened it.',
      'What does the technician do before editing?', [
        ['Open regedit and export that branch of the registry first, then edit it', true, 'The registry holds Windows’ and programs’ settings, and a wrong edit can stop Windows from starting. The export is the way back, and the vendor’s exact path is the way in.'],
        ['Open regedit and change the value at once, then test the scanner afterward', BLIND, 'With no export there is no easy way back if the value is wrong. A backup costs a minute.'],
        ['Open Task Manager and look for the scanner’s process, then end it', TOOL, 'Ending a process does not change a stored value. The timeout is written in the registry.'],
        ['Open Programs and Features and reinstall the scanner program from scratch', TIDY, 'Reinstalling is a big step for a change the vendor has spelled out. It may not touch that value at all.']],
      'Regedit changes the registry, which has no undo. Export the part you will edit first, then make the one change the vendor gives and test. A written instruction and a backup make it safe. The registry has five top-level branches called hives; the two met most are HKEY_LOCAL_MACHINE (the computer’s settings) and HKEY_CURRENT_USER (the signed-in person’s).'),
    T('l20-s-users', TL, 'Orson, IT', 'The shared reception PC has 8 GB of memory and it is crawling at 9 AM. The front desk shows one person signed in, but I wonder if someone from last night stayed signed in too.',
      'Which Task Manager tab shows who is signed in and what each uses?', [
        ['The Users tab, which lists each signed-in person and what each one uses', true, 'The Users tab answers “who is signed in?” and shows each person’s share. A signed-in account that is left over can be signed out from there.'],
        ['The Startup tab, which lists the programs that open when Windows starts', NOSPLIT, 'Startup shows what opens at sign-in, not who is signed in.'],
        ['The Services tab, which lists the background programs and their state', NOSPLIT, 'Services lists background programs. They run for the computer as a whole and do not name the people signed in.'],
        ['The Performance tab, which graphs the processor and the memory over time', NOSPLIT, 'Performance shows the totals. It cannot say who is using them.']],
      'The Users tab answers “who is signed in, and what does each person use?”. The other tabs show programs and totals, not people.'),
    T('l20-s-svc', TL, 'Nigel, HR', 'I cannot print. The spooler (the background program that lines up print jobs) is stuck. A colleague told me to restart it, but I do not know where that is.',
      'Where can a technician see and restart a background program?', [
        ['Task Manager’s Services tab, where a service can be restarted', true, 'A service is a program that runs in the background with no window. The Services tab lists each one with its state, and has Restart in its menu.'],
        ['Task Manager’s Processes tab, then End task on the spooler', TOOL, 'The Processes tab lists the spooler as a running process, but a service is restarted from the Services tab. End task only closes it.'],
        ['Device Manager, then remove and reinstall the printer’s entry', TWO, 'Reinstalling the printer is more than a restart of the stuck program, and it changes the printer’s setup too.'],
        ['Task Scheduler, then run the print job again on a schedule', TOOL, 'Task Scheduler starts jobs by the clock. It does not restart a stuck background program.']],
      'A service is a background program, and the Services tab is where it is started, stopped or restarted. The Processes tab lists it too and can end it, but a service is stopped and restarted from the Services tab, and restarting is not the same as ending a task.'),

    // ----- group 2: consoles -----
    T('l20-s-sched', CO, 'Oswald, Operations', 'Every night at 2 AM I need a small script to copy the shift report to the shared drive. I do not want to be there to start it. What do I use?',
      'Which console runs a program at a chosen time?', [
        ['Task Scheduler (taskschd.msc), which starts a program at a chosen time', true, 'Task Scheduler pairs a trigger (a time, a sign-in or an event) with an action (run a program). That is exactly the job.'],
        ['Services tab in Task Manager, which starts background programs by hand', TOOL, 'The Services tab starts and stops programs when someone clicks it. It has no clock.'],
        ['Performance Monitor (perfmon.msc), which records numbers over time', TOOL, 'It records performance counters for later reading. It does not run a script.'],
        ['Group Policy Editor (gpedit.msc), which holds rules for the computer', TOOL, 'It holds rules for how Windows behaves. A timed copy is a job to run, not a rule.']],
      'Task Scheduler answers “how do I run a program at a time, or when something happens?”. Its trigger and action are the two parts of a job.'),
    T('l20-s-cert', CO, 'Erica, Compliance', 'My browser says the certificate for our new internal site is not trusted. Our security guide says to check whether the company’s certificate is in my personal certificates.',
      'Which console lists a person’s certificates?', [
        ['Certificate Manager (certmgr.msc), which lists certificates for the user', true, 'A certificate is a digital ID that proves a site is who it says. Certificate Manager shows the ones stored for this user and which authorities are trusted.'],
        ['Local Users and Groups (lusrmgr.msc), which lists accounts and their groups', TOOL, 'It lists accounts and groups. A certificate is not an account.'],
        ['Device Manager (devmgmt.msc), which lists the computer’s devices', TOOL, 'It lists hardware. The certificate is stored data, not a device.'],
        ['Event Viewer (eventvwr.msc), which lists what Windows recorded', LOOK, 'It might hold a related error, but it is a record of events, not the place where certificates are stored.']],
      'Certificate Manager answers “which certificates are stored for this user?”. Certificates prove who a site or program is, and the other consoles hold accounts, devices or events.'),
    T('l20-s-lusr', CO, 'Julian, Workshop', 'The workshop PC runs Windows 11 Pro and is not on a domain (it is a stand-alone computer). I need to add a new person as a local user and put them in the Users group, not Administrators.',
      'Which console manages the accounts on this one computer?', [
        ['Local Users and Groups (lusrmgr.msc), which manages accounts and groups', true, 'It is the console for accounts and groups on this computer itself. Choosing Users, not Administrators, keeps their rights small.'],
        ['Certificate Manager (certmgr.msc), which stores digital IDs', TOOL, 'Certificates are digital IDs for sites and programs. They do not create people’s accounts.'],
        ['Task Scheduler (taskschd.msc), which runs jobs at chosen times', TOOL, 'It runs jobs. The need here is an account.'],
        ['Performance Monitor (perfmon.msc), which records how the computer is doing', TOOL, 'It records performance numbers. It cannot create an account.']],
      'Local Users and Groups answers “which accounts are on this computer, and in which groups?”. Putting a person in Users and not Administrators keeps their rights small.'),
    T('l20-s-perfmon', CO, 'Lea, Planning', 'Our reporting PC slows down every afternoon, but never while I am looking at it. I would like the disk and processor use logged for a week so we can see when it happens.',
      'Which console can record counters over time?', [
        ['Performance Monitor (perfmon.msc), which can log counters for days', true, 'Task Manager shows the present moment only. Performance Monitor can record chosen counters over days and show when the slow period starts.'],
        ['Task Manager’s Performance tab, left open on the screen all week', NOW, 'Its graph shows about the last 60 seconds and nothing when the window is closed. The slow period would be gone.'],
        ['Event Viewer, searching its logs for the word “slow”', TOOL, 'Windows does not write “slow” into its logs. Use numbers that were recorded over time.'],
        ['Resource Monitor (resmon), which shows details of what runs at that moment', NOW, 'Resource Monitor is a live view. It will not have been open when the slowdown happens.']],
      'Performance Monitor answers “how did the computer do over hours or days?” by recording counters. Task Manager and Resource Monitor are live views and show only the present.'),
    say('l20-s-run-event', CO, 'Windows keeps a record of errors, warnings and start-ups. The tool that reads it is Event Viewer.', 'Type the name that opens Event Viewer from the Run box (it ends in .msc).',
      ['eventvwr.msc', 'eventvwr', 'eventvwr msc'], 'Event Viewer opens with eventvwr.msc. An easy way to remember: “event” and “viewer” with the vowels dropped, and .msc for a console.'),
    say('l20-s-run-disk', CO, 'The console that lists drives, partitions and volumes, and that formats a new drive, is Disk Management.', 'Type the name that opens Disk Management from the Run box.',
      ['diskmgmt.msc', 'diskmgmt', 'diskmgmt msc'], 'Disk Management opens with diskmgmt.msc: “disk” and “management” shortened.'),
    item({
      id: 'l20-s-run-pick', strand: CO,
      blocks: [chat('Amy, Field team', 'n1', 'I am standing at a customer’s desk. I need to open Device Manager quickly. The customer shows me the Run box.')],
      asks: [ask('Which name opens Device Manager?', [
        ['devmgmt.msc', true, 'Device Manager is devmgmt.msc: “dev” for devices, “mgmt” for management.'],
        ['diskmgmt.msc', LOOK, 'That one is Disk Management. The names look alike, and only one holds the devices.'],
        ['taskschd.msc', LOOK, 'That is Task Scheduler. “Task schedule” is about jobs at chosen times.'],
        ['lusrmgr.msc', LOOK, 'That is Local Users and Groups. “usr” is the clue: users.']])],
      deciding: ['n1'],
      reason: 'The names are built from the tool’s own words: devmgmt is “device management”, diskmgmt is “disk management”, taskschd is “task scheduler”, lusrmgr is “local user manager”. Match the first part to the job, then the ending, .msc, shows it is a console.' }),

    say('l20-s-run-perf', CO, 'The console that records how the computer does over hours or days, and graphs it, is Performance Monitor.', 'Type the name that opens Performance Monitor from the Run box.',
      ['perfmon.msc', 'perfmon', 'perfmon msc'], 'Performance Monitor opens with perfmon.msc: “perf” and “mon”, short for performance and monitor.'),
    say('l20-s-run-info', TL, 'The tool that lists the model, the installed memory, the firmware version and the Windows build on one screen is System Information.', 'Type the name that opens System Information from the Run box.',
      ['msinfo32', 'msinfo32.exe'], 'System Information opens with msinfo32: “ms” for Microsoft, “info” for information, and 32 as part of the name.'),

    // ----- group 2: settings -----
    T('l20-s-fast', SE, 'Sandro, Marketing', 'After the update I shut the laptop down every night, but a wrong display setting keeps coming back until I choose Restart. The vendor’s note says it may be “fast startup”.',
      'What does fast startup do, and where is it?', [
        ['A shutdown that keeps part of Windows saved to speed the next start, under “Choose what the power buttons do” in Power Options', true, 'With fast startup on, Shut down saves the core of Windows, so the next start loads it and not everything afresh. Restart does a full start. The switch is under “Choose what the power buttons do” in Power Options.'],
        ['Hibernate, which saves open work to the drive and powers off, chosen in Power Options', PWR, 'Hibernate keeps your open work for the next start. Fast startup keeps part of Windows, and a Shut down still closes your programs.'],
        ['The High performance power plan, which makes every start quicker, chosen in Power Options', PWR, 'A power plan controls speed and sleep. Fast startup is its own switch, and it is why a fault saved at Shut down comes back.'],
        ['A Task Manager Startup tab choice that makes programs open faster, turned off there', AREA, 'Fast startup is about Windows itself, not about the programs on the Startup tab.']],
      'With fast startup on, Shut down keeps part of Windows saved, so a fault stored there survives a shutdown. Restart does a full start. The choice is in Power Options.'),
    T('l20-s-usb', SE, 'Ria, Design', 'My laptop’s USB mouse freezes if I leave it alone for a minute, and it takes a second or two to wake when I move it. The mouse is fine on my other computer.',
      'Which Power Options setting powers down idle USB devices?', [
        ['USB selective suspend, in the plan’s advanced settings; turn it off here', true, 'It lets Windows cut power to an idle USB port to save battery. The mouse then waits for power when moved. Turning it off in the plan’s advanced settings keeps the port awake.'],
        ['Hibernate, in the Power Options, which saves memory to the drive and shuts off', PWR, 'Hibernate puts the whole computer off. Only the USB port is losing power here.'],
        ['The lid action, which picks what happens when the laptop is closed', PWR, 'The lid is open. This is about the mouse’s port.'],
        ['Switch to the High performance power plan in Power Options', TWO, 'A power plan changes many settings at once. This is one setting, and one change is tested alone.']],
      'USB selective suspend lets Windows cut power to an idle USB port, and a device on it wakes slowly. It is in the plan’s advanced settings under Power Options. One setting, changed alone.'),
    T('l20-s-prog', SE, 'Serena, Admin', 'I need to remove an old program, and I also want to turn on the Windows feature called Telnet Client. The desk’s guide says both are in one place in Control Panel.',
      'Which Control Panel area does both?', [
        ['Programs and Features, which uninstalls programs and turns features on', true, 'Programs and Features lists installed programs for uninstalling or changing, and its side link turns optional Windows features on or off.'],
        ['Devices and Printers, which lists the hardware and the printers attached', AREA, 'It lists hardware. Programs and Windows features live elsewhere.'],
        ['Indexing Options, which controls which places the search looks in', AREA, 'It controls search. Programs and features are somewhere else.'],
        ['Network and Sharing Center, which shows the connections', AREA, 'It is for connections. Telnet Client is a program, not a connection setting.']],
      'Programs and Features answers “uninstall a program, or turn a Windows feature on or off?”. Devices, search and connections each have their own areas.'),
    T('l20-s-index', SE, 'Isabel, Records', 'Searching the Documents folder used to find my files in a second. Now it misses files I saved last week. I can open the folder and see them.',
      'Which area controls which places Windows searches?', [
        ['Indexing Options, which shows the places indexed and can rebuild them', true, 'Windows searches an index, a list it keeps up to date. The files exist but are missing from the list, and Rebuild in Indexing Options redoes it.'],
        ['Disk Cleanup, which clears out files that are no longer needed', TIDY, 'The files are fine and wanted. Clearing files would make them harder to find, not easier.'],
        ['Disk Management, to check the drive that holds Documents', TOOL, 'The drive opens and shows the files, so it is working. The search list is the part that is behind.'],
        ['Defragment and Optimize Drives, to speed up how fast files are found', TOOL, 'Optimizing sorts how files sit on a drive. It does not rebuild the search list.']],
      'Indexing Options answers “which places does Windows search, and is the list up to date?”. Files that exist but do not turn up in search call for a rebuild of the index.'),
    T('l20-s-priv', SE, 'Sal, Sales', 'My video call app says it cannot find my camera. The camera works in the camera app. Windows says nothing is wrong with the device.',
      'Where do you check that apps are allowed to use the camera?', [
        ['The Settings app, in Privacy, where each app’s camera access is listed', true, 'The camera works in one app and not another, so the device is fine. Privacy in the Settings app lists which apps may use the camera or the microphone.'],
        ['Device Manager, and reinstall the camera driver', PART, 'The camera works in another app, so its driver is fine. A reinstall is a bigger step than the one setting.'],
        ['The Settings app, in Accounts, to sign in to the call app again', AREA, 'Accounts holds sign-in options for Windows. Access to a camera is held in Privacy.'],
        ['The Settings app, in Time and Language, to match the call app’s region', AREA, 'Time and Language is for the clock and the region. The camera is not tied to either.']],
      'The Privacy area of the Settings app holds what each app may use, such as the camera and the microphone. The camera works elsewhere, so the device and its driver are fine.'),
    T('l20-s-lang', SE, 'Raphael, Travel', 'I flew in from London and my meetings show the wrong times. My laptop’s clock is an hour out and the calendar uses the wrong time zone. Where do I fix this in Settings?',
      'Which area of the Settings app holds the clock and region?', [
        ['Time and Language, with the date, time zone and region', true, 'Time and Language holds the date, time, time zone, region and language. The wrong zone is the fault.'],
        ['Network and Internet, where the Wi-Fi connection can change the clock', AREA, 'It holds Wi-Fi, VPN and proxy choices. The time zone lives with the clock.'],
        ['Privacy, where location choices can change the time zone', AREA, 'Location access sits in Privacy, but the time zone and region are chosen in Time and Language.'],
        ['Accounts, where the sign-in region is kept', AREA, 'It holds sign-in options and users. The time zone is not among them.']],
      'Time and Language holds the date, the time, the time zone and the region. The ten areas each hold one family of choices, and the clock is in this one.'),

    // ----- group 3: tickets that need a tool and a move -----
    item({
      id: 'l20-g-call', strand: TL,
      blocks: [note('Sunil in Sales calls the help desk: Sunil’s laptop is slow and the client demo is in an hour. You answer. Sunil is on the laptop now.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Sunil calls about the slow laptop. What do you say?', form: 'call', from: 'Sunil, Sales', detail: 'Incoming call · 1:10 PM', start: 'one',
        turns: {
          one: { lines: [{ id: 'u1', text: 'My laptop is crawling. I think it needs more memory. Can you just send me a new one?' }], push: 'Sunil wants the biggest step before anything was looked at.',
            options: [
              { id: 'send', text: 'I will put in an order for a new laptop today.', end: 'send' },
              { id: 'tm', text: 'Press Ctrl, Shift and Esc. In Task Manager, open the Performance tab and read me memory and CPU.', goto: 'two' },
              { id: 'visit', text: 'I am sorry, a slow laptop an hour before a demo is stressful. I will check what upgrade fits your model, order the memory, and send a technician to your desk to fit it before the demo.', end: 'visit' },
              { id: 'restart', text: 'Restart it and see if the memory problem goes away on its own.', end: 'restart' }] },
          two: { lines: [{ id: 'u2', text: 'Memory says 6.2 of 16 GB. CPU says 98%. But I still think I need more memory.' }], push: 'Sunil holds to the first idea.',
            options: [
              { id: 'argue', text: 'Memory cannot be the problem if it says 6.2 GB, so please stop saying that.', end: 'argue' },
              { id: 'proc', text: 'Memory is under half full, so the processor is the busy part. Open Processes, click the CPU heading, and read me the top name.', end: 'proc' },
              { id: 'order', text: 'Understood, I will order more memory for you.', end: 'order' },
              { id: 'remote', text: 'I completely understand, and I am sorry for the trouble this close to your demo. Let me restart your laptop from here, and we will look at the numbers again once it is back up.', end: 'remote' }] }
        },
        ends: {
          proc: { ok: true, then: 'The Performance tab ruled out memory with a number Sunil read out, and the next look is the Processes tab. The cheap look continues.' },
          send: { ok: false, slip: PART, then: 'Nothing has been looked at yet. A laptop order costs days, and Task Manager costs a minute.' },
          restart: { ok: false, slip: NOSPLIT, then: 'A restart is cheap but it cuts nothing in half and loses the live view of what is using the processor. Look first.' },
          argue: { ok: false, slip: 'argued', then: 'The number is a fair answer, but telling Sunil to stop leaves no next step. Say it back, then give the next look.' },
          order: { ok: false, slip: PART, then: 'Memory is under half full, so it is not the limit. Ordering it would cost money and leave the slowness untouched.' },
          visit: { ok: false, slip: PART, then: 'Polite, but nothing has been looked at. A memory order and a visit cost days and money, and Task Manager costs a minute.' },
          remote: { ok: false, slip: NOSPLIT, then: 'Kind words, but a restart ends the live view of what is using the processor, and the numbers just read already ruled memory out.' } } }],
      reason: 'A slow computer is a live question, so Task Manager comes first. Its Performance tab shows which part is the limit, and the user reads the number out. When Sunil holds to the guess, you say it back and give the next look.' }),
    item({
      id: 'l20-g-drv', strand: CO,
      blocks: [
        chat('Sarah, Lab', 'i1', 'Since the update on Tuesday my USB scanner stopped working. It showed a yellow triangle in Device Manager as soon as I plugged it in. It worked last week.'),
        list('b', 'Device Manager, Scanners', ['Line', 'Value'], [['Device', 'Flatbed Scanner 200'], ['Status', 'Yellow triangle: a problem'], ['Driver date', 'Tuesday, installed by the update'], ['Previous driver', 'Available to roll back to']])],
      asks: [ask('What is the one change to try first?', [
        ['Roll the driver back to the previous version, then test the scanner again', true, 'The fault began with the update, the driver is the new thing, and Device Manager can undo it with one click. Change one thing and test.'],
        ['Update the driver, reinstall the scanner program and unplug it, all together', TWO, 'Three changes at once: if the scanner works, nobody can say which one did it.'],
        ['Run Disk Cleanup and then open the registry to look for scanner entries', TIDY, 'Neither tool answers “what changed for the scanner?”. The table already names the new driver.'],
        ['Disable the scanner in Device Manager and plug it into another computer', NOSPLIT, 'Disabling turns the device off here and teaches nothing about the new driver, which is the change.']])],
      deciding: ['i1', 'b3', 'b4'],
      reason: 'Device Manager answers “is the driver the problem, and can I undo it?”. The change came with the update, so rolling the driver back is the cheapest one-change test. If it does not work, the next cause comes next.' }),
    item({
      id: 'l20-g-lid', strand: SE,
      blocks: [
        chat('Aaron, Finance', 'z1', 'When I close my laptop lid at my desk, it goes to sleep and drops the video call that I have on the big screen. I want the call to continue with the lid shut and the screen plugged in.'),
        note('The laptop is plugged in to power and to the external screen.')],
      asks: [ask('Where does the technician change this?', [
        ['Power Options, the lid action, choosing do nothing when plugged in', true, 'Power Options has a lid action for battery and for power, each with its own choice: do nothing, sleep, hibernate or shut down.'],
        ['Task Manager, Startup tab, disabling the sleep program', TOOL, 'Sleep is not a program that opens at sign-in. It is a power setting.'],
        ['The Settings app, Devices, then the screen’s entry in the list', AREA, 'The screen is fine. What closes the call is what the lid does.'],
        ['Device Manager, disabling the lid sensor under the system devices', BLIND, 'The lid action is a choice Windows offers in Power Options. Turning off a device is a rough way to reach it.']])],
      deciding: ['z1'],
      reason: 'The lid action belongs to Power Options. It has its own choice for plugged in and for battery, so Aaron’s call can continue while plugged in and the laptop still sleeps on the move.' })
  ]);
})();
