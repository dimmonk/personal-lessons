// IT Help Desk, lesson 20: Which Windows tool for the job (part tools). Core 2 objectives 1.4 and 1.6 of the A+ map (docs/research/it-support-aplus.md): Task Manager's five tabs
// (processes, performance, startup, users, services); the eight consoles opened from the Run box (eventvwr.msc, diskmgmt.msc, taskschd.msc, devmgmt.msc, certmgr.msc, lusrmgr.msc,
// perfmon.msc, gpedit.msc); six more tools (msinfo32, resmon, msconfig, cleanmgr, dfrgui, regedit); the Control Panel areas, Power Options, File Explorer Options and the ten
// Settings app areas. Each tool is taught by the question it answers on a ticket, so the tool is picked from the symptom; the run names are asked from memory and as choices.
// Sources checked 2026-10-23: Microsoft Q&A (learn.microsoft.com/en-us/answers/a/6887744) and A+ Core 2 1.3: gpedit.msc and lusrmgr.msc are in Pro, Enterprise and Education, not Home;
// MITRE T1036.007 (attack.mitre.org/techniques/T1036/007/): with extensions hidden, invoice.pdf.exe shows as invoice.pdf.
// Research: docs/research/it-support.md IT4, IT5, IT8 (cut the causes with the cheapest test; look before changing), IT9 (one change at a time), IT25 to IT27 (recall with feedback).
// Strands: win-tools, win-consoles, win-settings. One worked ticket (Dean: the memory that is not the limit); a first group of four with the question marked; a second of twenty;
// a third of three mixed with lessons 5 and 9; the check: eight new questions, no help, 7 of 8 to pass.
FC.lesson('it-support', {
  id: 'l20', part: 'tools', title: 'Which Windows tool for the job', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (Task Manager’s tabs, the eight consoles and six more tools by the question each answers; Control Panel and Settings areas, Power Options and File Explorer Options; run names asked from memory).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'Dean says the laptop has been slow since Monday and the fan is loud. Dean is sure it needs more memory. Windows has a tool that shows in ten seconds whether memory is the problem, and another that names the program using the processor.',
    'A technician remembers the question each Windows tool answers: what is eating the processor, did a driver fail at start-up, which program starts with Windows. Here you learn those questions and the names you type to open the tools, so you can pick the tool from the symptom.'],
  flow: [
    { title: 'Pick the tool by the question',
      show: [{ kind: 'prose', text: [
        'Every Windows tool answers a question on a ticket. Three kinds cover most:',
        '1. What is happening right now? A live view: Task Manager and Resource Monitor.',
        '2. What happened before, or what is this computer made of? A record: Event Viewer, Performance Monitor and System Information.',
        '3. Change this part. A console or settings area for one job: drives, devices, accounts, rules, clock, power.',
        'Look first, change second. Every tool here is a look before it is a change.',
        'Words first. A process is a running program; a service (a background program with no window) shows as a process too. A driver is the software that lets Windows work with a device, such as a printer. A volume is a part of a drive with its own letter, such as C:; a partition is one slice of a disk. The Windows build is its exact version number.'] }] },
    { title: 'Task Manager: five tabs, five questions',
      show: [{ kind: 'prose', text: [
        'Task Manager is the live view. Open it with Ctrl+Shift+Esc, or right-click the taskbar.'] },
      { kind: 'document', form: 'table', title: 'Task Manager, tab by tab', head: ['Tab', 'The question it answers', 'What you can do there'], rows: [
        { id: 't1', cells: ['Processes', 'What is eating the processor, memory, disk or network?', 'Lists everything running. Sort by a column to find the heaviest. End task closes one that is not responding'] },
        { id: 't2', cells: ['Performance', 'Which part is the limit?', 'Read the graphs: a line at its top is the limit. “Open Resource Monitor” is at the bottom'] },
        { id: 't3', cells: ['Startup', 'Which program starts with Windows?', 'Each program has a startup impact (low, medium, high). Disable one to stop it opening at sign-in'] },
        { id: 't4', cells: ['Users', 'Who is signed in, and what does each use?', 'Sign a person out; shows leftover sign-ins on a shared computer'] },
        { id: 't5', cells: ['Services', 'Is a background program running; can I restart it?', 'Start, stop or restart a service, such as print spooling'] }] },
      { kind: 'prose', text: [
        'The exam covers these five. Details lists every process with its process ID (PID), a number the command-line tools print.'] }] },
    { title: 'The consoles, and how to open them',
      show: [{ kind: 'prose', text: [
        'A console is a window that manages one part of Windows. Each is a file ending in .msc, run in the Microsoft Management Console. Open one by name: press the Windows logo and R together for the Run box, type the name and press Enter. Two of the eight, lusrmgr.msc and gpedit.msc, are in Windows Pro, Enterprise and Education but not in Home, so a ticket states the edition.'] },
      { kind: 'document', form: 'table', title: 'The eight consoles', head: ['Type this', 'The tool', 'The ticket question it answers'], rows: [
        { id: 'c1', cells: ['eventvwr.msc', 'Event Viewer', 'What did Windows record? Did a driver fail at start-up, what happened at 3 AM? (most are in the System log)'] },
        { id: 'c2', cells: ['diskmgmt.msc', 'Disk Management', 'Does Windows see the new drive? Give it a letter, format it, shrink or extend a volume'] },
        { id: 'c3', cells: ['taskschd.msc', 'Task Scheduler', 'How do I run a program at a set time or when something happens?'] },
        { id: 'c4', cells: ['devmgmt.msc', 'Device Manager', 'Which device has a problem? Update, roll back or disable its driver. A yellow triangle marks a problem'] },
        { id: 'c5', cells: ['certmgr.msc', 'Certificate Manager', 'Which certificates (digital IDs that prove who a site or program is) are stored for this user?'] },
        { id: 'c6', cells: ['lusrmgr.msc', 'Local Users and Groups', 'Which accounts are on this one computer? Add a user or put one in a group (not in Home)'] },
        { id: 'c7', cells: ['perfmon.msc', 'Performance Monitor', 'How did it do over hours or days? Record counters, read the graph'] },
        { id: 'c8', cells: ['gpedit.msc', 'Local Group Policy Editor', 'What rules does this one computer follow? Password length, blocked drives, screen lock (not in Home)'] }] },
      { kind: 'prose', text: [
        'The names are shortened words: eventvwr is “event viewer”, diskmgmt “disk management”, devmgmt “device management”, taskschd “task scheduler”, lusrmgr “local user manager”, perfmon “performance monitor”. Match the first part to the job.'] }] },
    { title: 'Six more tools with their own names',
      show: [{ kind: 'document', form: 'table', title: 'Six more, each opened by name', head: ['Type this', 'The tool', 'The ticket question it answers'], rows: [
        { id: 'm1', cells: ['msinfo32', 'System Information', 'What is in this computer? Model, installed memory, firmware version, Windows build, on one screen'] },
        { id: 'm2', cells: ['resmon', 'Resource Monitor', 'Which program, file or network connection is using the disk, memory, processor or network? Deeper than Task Manager'] },
        { id: 'm3', cells: ['msconfig', 'System Configuration', 'How does Windows start? General picks a normal or diagnostic start, Boot has Safe boot, Services chooses which load. Its Startup tab now points to Task Manager'] },
        { id: 'm4', cells: ['cleanmgr', 'Disk Cleanup', 'How do I free space? It lists temporary files and the Recycle Bin, with sizes'] },
        { id: 'm5', cells: ['dfrgui', 'Defragment and Optimize Drives', 'Are files on a spinning drive in pieces? It joins them, on a schedule'] },
        { id: 'm6', cells: ['regedit', 'Registry Editor', 'A vendor’s note says to change one value in the registry (the database of Windows’ and programs’ settings). Export the part you will edit first'] }] },
      { kind: 'prose', text: [
        'The registry has no undo, and a wrong edit can stop Windows from starting, so change it only on a written instruction, after exporting the part to a file.'] }] },
    { title: 'Control Panel: the older settings screens',
      show: [{ kind: 'prose', text: [
        'Control Panel is the older place for settings:'] },
      { kind: 'document', form: 'table', title: 'Control Panel areas', head: ['Area', 'The ticket question it answers'], rows: [
        { id: 'p1', cells: ['Internet Options', 'The browser’s proxy, security zones, home page, history'] },
        { id: 'p2', cells: ['Devices and Printers', 'Which devices and printers are attached; which printer is the default?'] },
        { id: 'p3', cells: ['Programs and Features', 'Uninstall or change a program; Windows features on or off'] },
        { id: 'p4', cells: ['Network and Sharing Center', 'Is the computer connected? Adapter settings and sharing'] },
        { id: 'p5', cells: ['System', 'The computer’s name, memory and processor; remote access and restore points'] },
        { id: 'p6', cells: ['Windows Defender Firewall', 'Allow a program through; firewall on or off'] },
        { id: 'p7', cells: ['Mail', 'Email profiles for Outlook'] },
        { id: 'p8', cells: ['Sound', 'The default speakers or headset for playing and recording sound'] },
        { id: 'p9', cells: ['Device Manager', 'The same tool as devmgmt.msc'] },
        { id: 'p10', cells: ['Indexing Options', 'Which places Windows searches; Rebuild when search misses files'] },
        { id: 'p11', cells: ['Administrative Tools', 'Shortcuts to many of the consoles above (Windows Tools in Windows 11)'] }] }] },
    { title: 'Power Options and File Explorer Options',
      show: [{ kind: 'document', form: 'table', title: 'Power Options', head: ['Choice', 'What it does', 'A ticket that points at it'], rows: [
        { id: 'o1', cells: ['Power plan', 'A bundle of screen, sleep and speed choices (Balanced, Power saver, High performance)', 'Battery runs down too fast, or a desktop is slow'] },
        { id: 'o2', cells: ['Sleep (also suspend or standby)', 'Keeps open work in memory on little power; wakes in seconds', 'Work is lost when the battery runs out asleep'] },
        { id: 'o3', cells: ['Hibernate', 'Saves open work to the drive and powers off completely', 'Open work must survive days with no battery drain'] },
        { id: 'o4', cells: ['Lid close action', 'What closing a laptop’s lid does: nothing, sleep, hibernate or shut down, separately on battery and on power', 'A call drops when the lid closes'] },
        { id: 'o5', cells: ['Fast startup', 'Shut down saves the core of Windows, so the next start is quicker. Restart does a full start', 'A fault survives Shut down but goes away after Restart. The switch is under “Choose what the power buttons do”'] },
        { id: 'o6', cells: ['USB selective suspend', 'Lets Windows cut power to an idle USB port (advanced plan settings)', 'A USB mouse or drive freezes when idle, wakes slowly'] }] },
      { kind: 'document', form: 'table', title: 'File Explorer Options (Control Panel, or View then Options)', head: ['Tab', 'Choice', 'The ticket question it answers'], rows: [
        { id: 'f1', cells: ['General', 'Open File Explorer to… and privacy choices', 'Why does it open on Quick access, not This PC?'] },
        { id: 'f2', cells: ['View', 'Show hidden files, folders and drives', 'The folder a guide names is not in the list (AppData is hidden)'] },
        { id: 'f3', cells: ['View', 'Hide extensions for known file types', 'The real ending of a file name is hidden (invoice.pdf.exe shows as invoice.pdf)'] }] }] },
    { title: 'The Settings app: ten areas',
      show: [{ kind: 'document', form: 'table', title: 'The Settings app, areas as the exam names them', head: ['Area', 'What it holds'], rows: [
        { id: 's1', cells: ['Ease of Access', 'Text size, magnifier, narrator, captions'] },
        { id: 's2', cells: ['Time and Language', 'Date, time, time zone, region, language'] },
        { id: 's3', cells: ['Update and Security', 'Windows Update, Windows Security, backup, recovery'] },
        { id: 's4', cells: ['Personalization', 'Background, colors, lock screen, taskbar'] },
        { id: 's5', cells: ['Apps', 'Installed apps, default apps, startup apps'] },
        { id: 's6', cells: ['Privacy', 'What each app may use: camera, microphone, location'] },
        { id: 's7', cells: ['Devices', 'Bluetooth, printers and scanners, mouse, typing'] },
        { id: 's8', cells: ['Network and Internet', 'Wi-Fi, Ethernet, VPN, airplane mode, proxy'] },
        { id: 's9', cells: ['Gaming', 'Game bar, captures, game mode'] },
        { id: 's10', cells: ['Accounts', 'Your account, sign-in options, other users, work or school accounts'] }] },
      { kind: 'prose', text: [
        'Windows 11 renamed two: Ease of Access is now Accessibility, Update and Security is Windows Update. The exam uses the names above.'] }] },
    { title: 'Open every tool and hope',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The laptop is slow, so I will run Disk Cleanup and Defragment, then look in the registry for old entries, and see if it helps.”',
        'That changes the computer before looking. A cleanup frees space, an optimize tidies a spinning drive, a registry edit can break Windows, and none was shown to be the cause. Task Manager’s Performance tab answers “which part is the limit?” in ten seconds and changes nothing. Look, then change one thing.'] }] },
    { worked: 'l20-w-dean' },
    { set: { items: ['l20-p-log', 'l20-p-driver', 'l20-p-disk', 'l20-p-hidden'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l20-s-msinfo', 'l20-s-sched', 'l20-s-fast', 'l20-s-clean', 'l20-s-run-event', 'l20-s-cert', 'l20-s-usb', 'l20-s-users', 'l20-s-lusr', 'l20-s-run-disk', 'l20-s-prog', 'l20-s-reg', 'l20-s-perfmon', 'l20-s-priv', 'l20-s-svc', 'l20-s-run-pick', 'l20-s-run-perf', 'l20-s-run-info', 'l20-s-index', 'l20-s-lang'], order: 'shuffle' } },
    { set: { items: ['l20-g-call', 'l20-g-drv', 'l20-g-lid'], order: 'shuffle', mix: { from: ['l5', 'l9'], share: 0.3 } } }
  ],
  check: {
    items: ['l20-k-startup', 'l20-k-resmon', 'l20-k-msconfig', 'l20-k-event', 'l20-k-policy', 'l20-k-run', 'l20-k-ext', 'l20-k-hib'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
