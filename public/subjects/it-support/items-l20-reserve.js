// IT Help Desk, lesson 20 "Which Windows tool for the job": nine questions held in reserve for the weekly review, three for each of the three topics (Task Manager and the six
// more tools, the consoles, the Control Panel and Settings areas). Facts as in items-l20.js (A+ map Core 2 1.4 and 1.6). Invented people and computers.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  const T = (id, strand, who, text, prompt, rows, reason) => item({ id, strand, blocks: [chat(who, 'm1', text)], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TOOL = 'wrong-tool', NOW = 'now-or-then', TIDY = 'tidy-first', BLIND = 'blind-edit', PWR = 'power-mixed', AREA = 'wrong-area', LOOK = 'mixed-look-alike',
    CAUSE = 'wrong-cause', NOSPLIT = 'no-split', PART = 'part-first', RULED = 'kept-ruled-out', TWO = 'two-changes', NOBACK = 'no-backup', GUESS = 'guessed-cause', MISREAD = 'misread-output';
  const TL = 'win-tools', CO = 'win-consoles', SE = 'win-settings';

  FC.items('it-support', [
    T('l20-r-defrag', TL, 'Angus, Reception', 'The reception desktop has an old spinning hard drive and it has taken longer and longer to open files over the years. Nothing is wrong with it otherwise.',
      'Which tool tidies how files sit on a spinning drive?', [
        ['Defragment and Optimize Drives (dfrgui), which joins up file pieces', true, 'On a spinning drive, files get broken into pieces over the years and the arm has to jump between them. Optimize Drives puts the pieces back together.'],
        ['Disk Management (diskmgmt.msc), which divides the drive into volumes', TOOL, 'It changes how the drive is divided and cannot tidy the files inside it.'],
        ['Registry Editor (regedit), to remove the old programs’ entries', BLIND, 'Registry entries are tiny and do not slow the drive. A wrong edit risks Windows.'],
        ['Event Viewer (eventvwr.msc), to look for entries from the drive', NOW, 'Nothing has failed. Files being slow to open is a layout matter, and no error is likely to be recorded.']],
      'Defragment and Optimize Drives (dfrgui) answers “are the files spread across a spinning drive?”. Disk Management changes volumes, Disk Cleanup frees space, and neither tidies the pieces.'),
    T('l20-r-hang', TL, 'Florence, Studio', 'My spreadsheet window has gone white and says “Not responding”. I clicked a lot of times and nothing happened. I have been waiting for five minutes. I saved 10 minutes ago.',
      'What does the technician do?', [
        ['In Task Manager’s Processes tab, select the spreadsheet and choose End task', true, 'A program that has stopped answering can be ended from the Processes tab. Florence saved 10 minutes ago, so the loss is small, and waiting longer has not helped in five minutes.'],
        ['In Device Manager, update the keyboard and mouse drivers and try again', TOOL, 'The keyboard and mouse work. One program has stopped answering.'],
        ['In Event Viewer, read the Application log before touching the window', NOW, 'The log can wait and may help afterward. The window is frozen now and Task Manager can end it.'],
        ['In Task Scheduler, create a job that restarts the program every hour', TOOL, 'A timed restart is a different job, and it would not free this frozen window.']],
      'Task Manager’s Processes tab shows each running program and can end one that is not responding. Ending it loses unsaved work, so the saved time matters. The live tab answers a live problem.'),
    item({
      id: 'l20-r-perf', strand: TL,
      blocks: [
        chat('Andre, Admin', 'c1', 'The accounts PC freezes while a report builds. I think it needs a faster processor.'),
        list('b', 'Task Manager, Performance tab, while the report builds', ['Line', 'Value'], [['CPU', '14%'], ['Memory', '6 of 16 GB'], ['Disk', '100%']])],
      asks: [ask('What do the lines show, and what comes next?', [
        ['The disk is the limit; open Resource Monitor’s Disk tab to find the program', true, 'The processor is mostly idle and the disk is at 100%, so the disk is the limit and a faster processor would not help. Resource Monitor names the program.'],
        ['The processor is the limit, so order a faster one for the accounts PC', CAUSE, 'The processor is at 14%. The busy line is the disk.'],
        ['The memory is the limit, so add more memory to the accounts PC', CAUSE, 'Memory is far from full at 6 of 16 GB.'],
        ['Nothing is the limit, so the report itself must be broken and should be rebuilt', MISREAD, 'One line at 100% is a limit. The disk is where the wait is.']])],
      deciding: ['c1', 'b1', 'b3'],
      reason: 'The Performance tab shows which part is at its limit, and here it is the disk, not the favorite cause of the processor. The next question is which program, and that is Resource Monitor.' }),
    T('l20-r-gpedit', CO, 'Bridget, Studio', 'The studio PC runs Windows 11 Pro and is stand-alone. The owner wants Windows to lock the screen after 5 minutes of no use, for every user on it, with no way for them to change it.',
      'Where does a rule like this for one computer live?', [
        ['Local Group Policy Editor (gpedit.msc), in the computer’s rules for the lock', true, 'A rule for everyone on the computer that they cannot change is policy. Group policy on a stand-alone PC is edited with gpedit.msc.'],
        ['Task Manager, on the Users tab, signing each person out when they are idle', TOOL, 'The Users tab signs people out by hand. It makes no rule.'],
        ['Task Scheduler (taskschd.msc), with a job that locks the screen every 5 minutes', TOOL, 'A job on a clock locks at chosen times whether or not anyone is idle, and users could end it.'],
        ['Device Manager, disabling the display so the screen turns off by itself', BLIND, 'The display is a device, not a rule. Disabling it would turn the screen off for good.']],
      'Group Policy holds the rules a computer follows, such as a lock after idle time. Task Scheduler runs jobs, and Task Manager shows what is running now. The name gpedit.msc is “group policy edit”.'),
    T('l20-r-shrink', CO, 'Fin, Warehouse', 'The warehouse PC has one big drive, C:, with 200 GB free. The owner wants a separate D: volume for scan files, with no reinstalling of Windows.',
      'Which console divides the free space into a new volume?', [
        ['Back up first, then in Disk Management shrink C: and make a new volume from the free room', true, 'Disk Management can shrink a volume and then create a new one in the free space, with a letter and a format. Windows stays where it is.'],
        ['Disk Cleanup (cleanmgr), which frees space by clearing temporary files', TIDY, 'It removes files. It cannot make a new volume.'],
        ['Device Manager (devmgmt.msc), which lists the drive and its driver', TOOL, 'It lists the drive as a device and cannot divide it.'],
        ['Resource Monitor (resmon), which shows how the drive is used', TOOL, 'It shows activity. It cannot change how a drive is divided.']],
      'Disk Management is the console for drives, partitions and volumes. Shrink one volume and use the free space for another. Back up first: any change to partitions is risky.'),
    T('l20-r-touch', CO, 'Marvin, Field team', 'The laptop’s touchpad keeps moving the cursor while I type, and I always use an external mouse. I want the touchpad off, but not removed.',
      'Which console can turn a device off without removing it?', [
        ['Device Manager (devmgmt.msc): select the touchpad and choose Disable device', true, 'Device Manager lists the touchpad as a device and can disable it with one click, and enable it again later. One change, with a way back.'],
        ['Disk Management (diskmgmt.msc), by taking the touchpad offline', TOOL, 'Disk Management is for drives. A touchpad is not a drive.'],
        ['Local Users and Groups (lusrmgr.msc), by removing Marvin from the group', TOOL, 'Groups decide what an account may do. The touchpad is hardware.'],
        ['Certificate Manager (certmgr.msc), by revoking its certificate', TOOL, 'A touchpad has no certificate to revoke. Certificates are for sites and programs.']],
      'Device Manager lists the computer’s devices and can disable and enable them, update or roll back their drivers and show a warning. It is the console for hardware.'),
    T('l20-r-ie', SE, 'Roman, Branch', 'Our old intranet site only works through the company’s proxy (a server that the browser goes through to reach sites). Pages time out. The desk’s guide says the proxy address has to be entered in Control Panel.',
      'Which Control Panel area holds the proxy and browser security choices?', [
        ['Internet Options, with the proxy on Connections and zones on Security', true, 'Internet Options holds the browser-level choices: proxy, security zones, the home page and the privacy and advanced choices.'],
        ['Network and Sharing Center, which lists the computer’s connections', AREA, 'It shows connections and adapters. The proxy belongs to the browser settings.'],
        ['Windows Defender Firewall, which allows or blocks apps through the network', AREA, 'The firewall allows or blocks traffic. It has no field for a proxy address.'],
        ['Programs and Features, which uninstalls browsers', AREA, 'It adds or removes programs. The proxy is a setting, not a program.']],
      'Internet Options is the Control Panel area for browser choices: the proxy on the Connections tab and the security zones on the Security tab.'),
    T('l20-r-fw', SE, 'Bernard, Sales', 'We installed a new chat program. It works on my laptop, but others on the office network cannot connect to the shared feature on my machine. Windows asked me to allow it and I clicked Cancel.',
      'Where is an app allowed through the firewall?', [
        ['Windows Defender Firewall, “Allow an app or feature”, then tick the program', true, 'The firewall blocks incoming traffic for programs not allowed. The allow-list is in Windows Defender Firewall, and the program can be ticked there.'],
        ['Network and Sharing Center, then turning off sharing for the network', AREA, 'That area changes sharing and adapters. The program is blocked by the firewall.'],
        ['Internet Options, then lowering the Security zone to the lowest level', AREA, 'It changes the browser. Lowering a zone does not open the firewall for the chat program.'],
        ['Windows Defender Firewall, turning the whole firewall off for every network', TWO, 'Turning it off lets everything through, far more than the one program needs.']],
      'The firewall decides which programs may receive traffic. The narrow fix is to allow the one program in Windows Defender Firewall, not to switch the firewall off.'),
    T('l20-r-sound', SE, 'Ash, Reception', 'Since I plugged in the new headset, video calls play the sound through the headset, but the desktop speakers now stay silent for everything else. I want the speakers to be the normal output again.',
      'Which Control Panel area picks the default speakers?', [
        ['Sound, Playback tab, where the default device is chosen', true, 'Sound lists the playback devices and the recording ones. The default marked there is where Windows sends sound.'],
        ['Devices and Printers, then removing the headset from the list', TWO, 'Removing the headset would send sound back, but it also takes away the headset when it is needed. One choice of default is smaller.'],
        ['Device Manager, then disabling the desktop speakers completely', BLIND, 'That makes the speakers silent on purpose. The aim is the opposite.'],
        ['Mail, then changing the profile for the call program', AREA, 'Mail holds email profiles. It has no say over sound.']],
      'Sound is the Control Panel area for playback and recording devices and which one is the default. Devices appear there when plugged in, and the default moves to the newest.')
  ]);
})();
