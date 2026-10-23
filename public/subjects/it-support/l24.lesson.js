// IT Help Desk, lesson 24: Mac and Linux (part mac-linux). Core 2 objectives 1.8 (macOS) and 1.9 (Linux) of the A+ map (docs/research/it-support-aplus.md). The exam pairs each Mac or Linux tool with the
// Windows tool the learner already knows (Spotlight and search, Force Quit and End task, Keychain and Credential Manager, Time Machine and File History, top and Task Manager, df and drive space, dig and
// nslookup), so each is taught by that counterpart and asked both ways: the name from memory, and "which tool or command for this job". Research: IT25, IT26 and IT27 (self-quizzing with feedback, spaced,
// beats rereading), IT5 (a few levels of "what does this part do for the whole": the Linux start-up chain extends lesson 9's boot chain) and IT4 and IT8 (the worked ticket cuts the connection chain of lesson 14
// with the cheapest test). Plan: docs/subjects/it-support/plan.md, lesson 24. Strands: mac, mac-care, linux-files, linux-admin, linux-net.
// Rapid Security Response (named in the A+ map) is called Background Security Improvements in Apple's 2026 systems (macOS Tahoe 26.1 on); sources checked 2026-10-23: https://www.computerworld.com/article/4084124/what-are-background-security-improvements-on-apple-devices.html and https://kb.filewave.com/books/software-updates-apple/page/apple-background-security-improvements-formerly-rapid-security-response (Apple's own page not reached).
// The Windows counterparts in the tables are this lesson's teaching device; the exam pairs only some of them.
// One worked ticket (Tomas's page that opens by number only); a first group of four with the counterpart named; a second of six; a third of six mixed with lessons 5 and 14; the check: eight new questions, 7 of 8 to pass.
FC.lesson('it-support', {
  id: 'l24', part: 'mac-linux', title: 'Mac and Linux', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the Mac’s apps, folders, care and tools and Linux’s commands, files and start-up parts, each taught by its Windows counterpart; asked from memory and as "which tool for the job").' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'A designer calls: the spreadsheet app on their Mac has frozen. Ten minutes later a server engineer wants to know which file tells Linux which name server to use. You have never used either, but nearly everything on a Mac or in Linux has a Windows counterpart.',
    'Here you learn each Mac tool and Linux command by the Windows tool it matches, as the A+ exam pairs them, then practice the names and jobs.'],
  flow: [
    { title: 'The same jobs under other names',
      show: [{ kind: 'prose', text: [
        'A Mac or Linux machine does the same jobs as Windows: install a program, find a file, stop a stuck app, back up, check the network. Only the names change.',
        'macOS is the system on Apple’s Mac computers. Linux is a free system that runs most servers, in versions called distributions, such as Ubuntu and Fedora, mostly used by typing commands in a terminal.'] }] },
    { title: 'Mac programs: on and off',
      show: [{ kind: 'document', form: 'table', title: 'Four ways a Mac program arrives', head: ['It comes as', 'What it is', 'What you do', 'In Windows'], rows: [
        { id: 'i1', cells: ['.dmg', 'A disk image: opens like a disc, app inside', 'Drag the app to Applications, then eject the image', 'Like a mountable ISO'] },
        { id: 'i2', cells: ['.pkg', 'An installer package: a setup program', 'Follow the steps; may need an admin password', 'An .msi installer'] },
        { id: 'i3', cells: ['.app', 'The application itself', 'Run it, or drag it into Applications', 'A portable program'] },
        { id: 'i4', cells: ['App Store', 'Apple’s store for Mac apps', 'Sign in with an Apple ID, click Get', 'The Microsoft Store'] }] },
      { kind: 'prose', text: [
        'To remove an app, drag it from Applications to the Trash.'] }] },
    { title: 'Where things live on a Mac',
      show: [{ kind: 'document', form: 'table', title: 'The Mac’s system folders', head: ['Folder', 'What is in it', 'In Windows'], rows: [
        { id: 'f1', cells: ['/Applications', 'Installed apps, for everyone', 'Program Files'] },
        { id: 'f2', cells: ['/Users', 'A home folder per person', 'C:\\Users'] },
        { id: 'f3', cells: ['/Library', 'Settings for every user', 'ProgramData'] },
        { id: 'f4', cells: ['/System', 'macOS itself, protected', 'C:\\Windows'] },
        { id: 'f5', cells: ['~/Library', 'One person’s settings and app data, in their home folder', 'AppData'] }] }] },
    { title: 'Apple ID, company rules, Mac care',
      show: [{ kind: 'prose', text: [
        'An Apple ID is the account that signs a person in to the App Store, iCloud, iMessage and FaceTime. A company can manage its Macs and limit them, such as which apps and Apple IDs are allowed. A company Mac that refuses an install and names a company rule is not broken.',
        'Care for a Mac is the usual list: backups (Time Machine), antivirus, updates and patches. Rapid Security Response is Apple’s quick security update between big updates; the A+ exam uses that name, and current Macs call it Background Security Improvements.'] },
      { kind: 'document', form: 'table', title: 'System Settings: the Mac’s Settings', head: ['Area', 'What it controls'], rows: [
        { id: 's1', cells: ['Displays', 'Screens, brightness'] },
        { id: 's2', cells: ['Network', 'Wi-Fi and wired'] },
        { id: 's3', cells: ['Printers & Scanners', 'Printers, scanners'] },
        { id: 's4', cells: ['Privacy & Security', 'Which apps may use camera, microphone, files'] },
        { id: 's5', cells: ['Accessibility', 'Aids for sight and hearing'] },
        { id: 's6', cells: ['General, then Time Machine', 'The backup drive'] }] }] },
    { title: 'Mac tools by Windows counterpart',
      show: [{ kind: 'document', form: 'table', title: 'Tool by tool', head: ['On the Mac', 'In Windows', 'What it does'], rows: [
        { id: 't1', cells: ['Spotlight', 'The taskbar search box', 'Finds files, apps and mail by name'] },
        { id: 't2', cells: ['Force Quit', 'Task Manager, End task', 'Stops one frozen app'] },
        { id: 't3', cells: ['Keychain', 'Credential Manager', 'Stores saved passwords and certificates (files that prove who a site or person is)'] },
        { id: 't4', cells: ['Time Machine', 'File History', 'Backs up the Mac; restores older file copies'] },
        { id: 't5', cells: ['Finder', 'File Explorer', 'Browses files'] },
        { id: 't6', cells: ['Dock', 'The taskbar', 'App shortcuts'] },
        { id: 't7', cells: ['Mission Control', 'Task View', 'Shows all open windows and desktops'] },
        { id: 't8', cells: ['Disk Utility', 'Disk Management, chkdsk', 'Checks and repairs (First Aid), formats drives'] },
        { id: 't9', cells: ['FileVault', 'BitLocker', 'Encrypts the startup drive'] },
        { id: 't10', cells: ['Terminal', 'Command Prompt, PowerShell', 'A window for typing commands'] },
        { id: 't11', cells: ['iCloud', 'OneDrive', 'Apple’s cloud, on the Apple ID'] },
        { id: 't12', cells: ['Continuity', 'Phone Link, roughly', 'Links a Mac with an iPhone or iPad'] },
        { id: 't13', cells: ['Gestures', 'Touchpad gestures', 'Trackpad swipes, pinches'] }] }] },
    { title: 'Linux: files and folders',
      show: [{ kind: 'document', form: 'table', title: 'File commands, with the Windows command beside each', head: ['Linux', 'In Windows', 'What it does'], rows: [
        { id: 'l1', cells: ['ls', 'dir', 'Lists files and folders here'] },
        { id: 'l2', cells: ['pwd', 'cd on its own', 'Prints the current folder’s path'] },
        { id: 'l3', cells: ['mv', 'move and ren', 'Moves or renames a file'] },
        { id: 'l4', cells: ['cp', 'copy', 'Copies a file'] },
        { id: 'l5', cells: ['rm', 'del', 'Removes a file, no Recycle Bin'] },
        { id: 'l6', cells: ['chmod', 'icacls', 'Changes who may read, write or run a file'] },
        { id: 'l7', cells: ['chown', 'takeown', 'Changes a file’s owner'] },
        { id: 'l8', cells: ['grep', 'findstr', 'Finds lines with certain words in files'] },
        { id: 'l9', cells: ['find', 'dir /s', 'Finds files by name, size, date'] },
        { id: 'l10', cells: ['fsck', 'chkdsk', 'Checks, repairs a file system'] },
        { id: 'l11', cells: ['mount', 'Assigning a drive letter, roughly', 'Attaches a drive so its files show in a folder'] },
        { id: 'l12', cells: ['nano', 'Notepad', 'A terminal text editor'] }] }] },
    { title: 'Linux: information and the network',
      show: [{ kind: 'document', form: 'table', title: 'The machine and the network', head: ['Linux', 'In Windows', 'What it does'], rows: [
        { id: 'n1', cells: ['top', 'Task Manager', 'Live list of running programs and how busy each is'] },
        { id: 'n2', cells: ['ps', 'tasklist', 'List of running programs at one moment'] },
        { id: 'n3', cells: ['df', 'The drive bars in This PC', 'Used and free space per drive'] },
        { id: 'n4', cells: ['du', 'A folder’s properties', 'Room one folder takes up'] },
        { id: 'n5', cells: ['cat', 'type', 'Prints a file’s contents'] },
        { id: 'n6', cells: ['man', 'The help for a command', 'Shows a command’s manual'] },
        { id: 'n7', cells: ['ip', 'ipconfig', 'Shows this machine’s addresses'] },
        { id: 'n8', cells: ['ping', 'ping', 'Tests if another computer answers'] },
        { id: 'n9', cells: ['dig', 'nslookup', 'Looks up a name in DNS'] },
        { id: 'n10', cells: ['traceroute', 'tracert', 'Lists each stop on the way to a computer'] },
        { id: 'n11', cells: ['curl', 'curl.exe, in Windows 10 and later', 'Fetches a web address'] }] }] },
    { title: 'Linux: root, programs, config, start-up',
      show: [{ kind: 'prose', text: [
        'Root is the account that can change anything on a Linux machine, like Administrator in Windows but with no limits. su switches to another account (root if none is named). sudo runs one command with root’s rights using your own password, like Run as administrator. Programs install with apt on Ubuntu and Debian, dnf on Fedora and Red Hat. On “Permission denied”, installing a program needs root, so put sudo in front; running your own file needs its run permission, so use chmod.'] },
      { kind: 'document', form: 'table', title: 'Files in /etc, where Linux keeps settings', head: ['File', 'What it holds', 'In Windows'], rows: [
        { id: 'e1', cells: ['/etc/passwd', 'Accounts (not the passwords)', 'The list of users'] },
        { id: 'e2', cells: ['/etc/shadow', 'Scrambled passwords; root only', 'No plain match'] },
        { id: 'e3', cells: ['/etc/hosts', 'Names and addresses checked before DNS', 'The hosts file, of the same name'] },
        { id: 'e4', cells: ['/etc/fstab', 'Drives to attach at start-up', 'No plain match'] },
        { id: 'e5', cells: ['/etc/resolv.conf', 'Name servers the machine uses', 'The network settings'] }] },
      { kind: 'prose', text: [
        'Start-up extends the chain you know: power, start-up test, firmware, boot drive. On Linux the bootloader then loads the kernel, the core of the system. The kernel starts systemd, which starts the services. Then comes sign-in.'] }] },
    { title: 'Using a Windows name on Mac or Linux',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“Open Task Manager and run ipconfig on the Linux machine.”',
        'Neither exists there. Give the user the counterpart: Force Quit or top for Task Manager, ip for ipconfig.'] }] },
    { title: 'Staying signed in as root',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It keeps saying Permission denied, so I will stay signed in as root.”',
        '“Permission denied” is Linux doing its job. Root can change or delete anything, so one typo becomes a disaster; sudo gives root’s rights to one command only.'] }] },
    { worked: 'l24-w-dns' },
    { set: { items: ['l24-p-force', 'l24-p-spot', 'l24-p-ls', 'l24-p-top'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l24-q-tm', 'l24-q-key', 'l24-q-dmg', 'l24-q-sudo', 'l24-q-df', 'l24-q-dig'], order: 'shuffle' } },
    { set: { items: ['l24-g-fstab', 'l24-g-fv', 'l24-g-apt', 'l24-g-disk', 'l24-g-hosts', 'l24-g-rsr'], order: 'shuffle', mix: { from: ['l5', 'l14'], share: 0.3 } } }
  ],
  check: {
    items: ['l24-k-mission', 'l24-k-folder', 'l24-k-tm', 'l24-k-corp', 'l24-k-chmod', 'l24-k-shadow', 'l24-k-boot', 'l24-k-trace'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
