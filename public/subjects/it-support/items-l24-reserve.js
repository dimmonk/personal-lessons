// IT Help Desk, lesson 24 "Mac and Linux": questions held in reserve for the weekly review, at least three for each of the five topics (mac, mac-care, linux-files, linux-admin, linux-net).
// Facts as in items-l24.js (A+ map Core 2 1.8 and 1.9). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', PART = 'part-first', OS = 'wrong-os', FOLD = 'wrong-folder', ROOT = 'root-everywhere', SKIP = 'skipped-step',
    NOBACK = 'no-backup', OPEN = 'open-up', NOSPLIT = 'no-split';

  FC.items('it-support', [
    // ----- mac -----
    chat('l24-r-continuity', 'mac', 'Aya, Sales', 'My iPhone rings and I would like to answer the call on my Mac, and start an email on one and finish it on the other.',
      'Which Mac feature lets the Mac and an iPhone work together like this?', [
        ['Continuity, which links the Mac with the iPhone and iPad of the same person', true, 'Continuity lets the devices share calls, messages and unfinished work. Windows has Phone Link for part of the same job.'],
        ['Spotlight, which finds files, apps and mail from a typed name', TOOL, 'Spotlight searches the Mac. It does not link it to a phone.'],
        ['Mission Control, which spreads out every open window and desktop', TOOL, 'Mission Control is about windows and desktops on the Mac.'],
        ['Disk Utility, which checks, repairs and erases drives', TOOL, 'Disk Utility looks after drives.']],
      'Using a call or unfinished work across a Mac and an iPhone is Continuity.'),
    recall('l24-r-finder', 'mac', 'On a Mac, which app browses files and folders, the way File Explorer does in Windows?', 'Type its name.',
      ['Finder'], 'Finder is the Mac’s File Explorer. The Dock is the Mac’s taskbar.'),
    chat('l24-r-icloud', 'mac', 'Bo, Finance', 'I want the files on my Mac’s desktop to show up on my iPhone, and I want iMessage and FaceTime to work on both. Windows has OneDrive for the file part.',
      'Which Apple service holds the files and ties the devices to one Apple ID?', [
        ['iCloud, which holds iCloud Drive files and joins iMessage and FaceTime', true, 'iCloud is Apple’s cloud service on the Apple ID: iCloud Drive for files, plus iMessage and FaceTime.'],
        ['Time Machine, which backs the Mac up to an external drive', TOOL, 'Time Machine makes backups to a local drive. It does not sync files to a phone.'],
        ['Keychain, which stores the passwords saved on the Mac', TOOL, 'Keychain stores passwords.'],
        ['Finder, which shows the files and folders on the Mac', TOOL, 'Finder shows what is on the Mac. It does not sync with another device.']],
      'The Apple ID’s cloud is iCloud: iCloud Drive for files, iMessage and FaceTime for messages and calls. OneDrive does the file part in Windows.'),
    chat('l24-r-pkg', 'mac', 'Chen, Support', 'A vendor’s Mac software comes as a .pkg file. When I open it, a step-by-step window appears and asks for the Mac’s admin password.',
      'How is a .pkg different from a .dmg?', [
        ['A .pkg runs an installer that can put files in several places', true, 'A .pkg is an installer package: it runs steps, may need an admin password and can place files in several folders. A .dmg holds an app to drag.'],
        ['A .pkg is an app that runs straight from wherever it sits', LOOK, 'That describes an .app. A .pkg is an installer.'],
        ['A .pkg is a backup copy that Time Machine restores later', LOOK, 'A backup is not a .pkg file.'],
        ['A .pkg is a Windows installer that the Mac runs after a download', OS, 'A .pkg is a Mac installer, not a Windows one.']],
      'A .pkg runs an installer (the Mac’s setup program); a .dmg is a disk image holding an app to drag into Applications; an .app is the app itself; the App Store installs with the Apple ID. To remove an app, drag it from Applications to the Trash.'),
    // ----- mac-care -----
    chat('l24-r-printer', 'mac-care', 'Fay, Reception', 'I need to add the new office printer to my Mac. On Windows I would open Settings and look for Printers & scanners.',
      'Where is the Mac’s own place for printers and scanners?', [
        ['System Settings, in the area named Printers & Scanners', true, 'System Settings is the Mac’s Settings, and its Printers & Scanners area adds and removes printers.'],
        ['Disk Utility, in the list of connected drives', TOOL, 'Disk Utility lists drives.'],
        ['The Dock, in the shortcut for devices', TOOL, 'The Dock holds app shortcuts, not device setup.'],
        ['Keychain, in the list of saved passwords', TOOL, 'Keychain holds passwords.']],
      'System Settings holds the Mac’s areas: Displays, Network, Printers & Scanners, Privacy & Security, Accessibility and Time Machine.'),
    chat('l24-r-priv', 'mac-care', 'Zed, Training', 'A video-call app on my Mac cannot see my camera. The camera works in other apps. The app was installed this morning.',
      'Which System Settings area controls which apps may use the camera?', [
        ['Privacy & Security, where each app is allowed or not', true, 'Privacy & Security lists the apps allowed to use the camera, microphone and other protected parts of the Mac.'],
        ['Displays, where the screen sizes and brightness are chosen', LOOK, 'Displays controls the screen. The camera permission is in Privacy & Security.'],
        ['Network, where the Wi-Fi and wired connections are chosen', LOOK, 'Network controls connections.'],
        ['Accessibility, where help for seeing and hearing is chosen', LOOK, 'Accessibility turns on aids such as larger text. The permission is in Privacy & Security.']],
      'A new app is not allowed to use the camera until it is permitted in Privacy & Security.'),
    chat('l24-r-av', 'mac-care', 'Ida, Support', 'A manager says: “Macs do not get malware, so skip antivirus and the updates.”',
      'What is the best practice the exam teaches?', [
        ['Keep a backup, run antivirus and install updates and patches', true, 'Macs can be infected too. The care list is backups (Time Machine), antivirus and updates, with security fixes between big updates.'],
        ['Macs cannot be infected, so no care beyond the backups is needed', CAUSE, 'Macs get malware too, and updates close the holes that malware uses.'],
        ['Only turn on FileVault, which does all the other jobs as well', CAUSE, 'FileVault encrypts the drive. It does not scan for malware or install updates.'],
        ['Reinstall macOS every month so nothing can last long on the Mac', CAUSE, 'Reinstalling is a drastic step for a fault and no part of regular care.']],
      'Mac care is the same list as any computer: back up, run antivirus, install updates and patches.'),
    // ----- linux-files -----
    chat('l24-r-grep', 'linux-files', 'Hana, Support', 'I need every line that says “timeout” in a log file on a Linux server. In Windows I would use findstr.',
      'Which Linux command searches inside files for text?', [
        ['grep, which prints the lines that hold the words you give it', true, 'grep searches inside files for text: the counterpart of findstr.'],
        ['find, which looks for files by their name, size or date', LOOK, 'find looks for files, not for words inside them.'],
        ['cat, which prints a whole file from start to end', LOOK, 'cat prints every line of the file, with no search.'],
        ['ls, which lists the names of the files in a folder', TOOL, 'ls lists names only.']],
      'grep searches the text inside files (findstr); find searches for files themselves (dir /s).'),
    chat('l24-r-find', 'linux-files', 'Ike, Support', 'A user saved a report somewhere on a Linux machine. All I know is that it is called budget.ods. In Windows I would search with dir /s.',
      'Which command looks for a file by its name?', [
        ['find, which walks through the folders and reports matching names', true, 'find looks for files by name, size or date: the counterpart of dir /s.'],
        ['grep, which looks for words inside the files themselves', LOOK, 'grep searches inside files for text, not for a file by its name.'],
        ['mv, which moves a file from one place to another', TOOL, 'mv moves a file you already found.'],
        ['pwd, which shows the folder you are standing in', TOOL, 'pwd shows where you are, not where a file is.']],
      'find finds files; grep finds text inside files.'),
    chat('l24-r-chown', 'linux-files', 'Lou, Operations', 'The files in a shared folder belong to a person who left. The manager has approved giving them to the new owner, who needs to own them. Nothing is wrong with who can read or write them.',
      'Which command gives the files to another owner?', [
        ['chown, which changes who owns a file', true, 'chown changes the owner; chmod changes the permissions.'],
        ['chmod, which changes who may read, write or run a file', LOOK, 'chmod changes the permissions. The owner is what needs changing.'],
        ['cp, which copies the files into the new owner’s folder', TOOL, 'A copy would leave the old files behind.'],
        ['rm, which removes the files so they can be made again', TOOL, 'rm removes files, and Linux has no Recycle Bin to get them back from.']],
      'chown changes the owner. chmod changes what the owner, the group and everyone else may do.'),
    chat('l24-r-fsck', 'linux-files', 'Mel, Support', 'A Linux server stopped badly in a power cut and now complains about its file system. Its data is backed up and the drive is not mounted. Windows would use chkdsk to check and repair a drive.',
      'Which command checks and repairs a file system on Linux?', [
        ['fsck, which checks a file system and repairs errors', true, 'fsck is the counterpart of chkdsk.'],
        ['mount, which attaches a drive’s file system to a folder', LOOK, 'mount makes a drive usable at a folder. It does not repair it.'],
        ['df, which shows the free space of each drive', TOOL, 'df shows space, not errors.'],
        ['ps, which lists the programs running now', TOOL, 'ps lists programs.']],
      'fsck checks and repairs a file system; mount attaches one to a folder.'),
    // ----- linux-admin -----
    chat('l24-r-passwd', 'linux-admin', 'Ned, Service desk', 'I want to see which user accounts exist on a Linux machine. I do not need passwords.',
      'Which file lists the accounts?', [
        ['/etc/passwd', true, '/etc/passwd lists the accounts. Their scrambled passwords are in /etc/shadow.'],
        ['/etc/shadow', LOOK, '/etc/shadow holds the scrambled passwords, readable by root only.'],
        ['/etc/fstab', LOOK, '/etc/fstab lists the drives to mount at start-up.'],
        ['/etc/hosts', LOOK, '/etc/hosts lists names and addresses.']],
      '/etc/passwd lists the accounts; /etc/shadow keeps their scrambled passwords.'),
    chat('l24-r-dnf', 'linux-admin', 'Una, Support', 'A new Fedora workstation needs the nano editor, and nothing is installed on it yet.',
      'Which command installs programs from the distribution’s list on Fedora?', [
        ['dnf, the package manager for Fedora and Red Hat', true, 'Fedora and Red Hat use dnf; Ubuntu and Debian use apt.'],
        ['apt, the package manager for Ubuntu and Debian', LOOK, 'apt is for Ubuntu and Debian. Fedora uses dnf.'],
        ['curl, which fetches a web address from the terminal', TOOL, 'curl downloads a page. It does not manage programs.'],
        ['su, which switches to another account', TOOL, 'su changes accounts.']],
      'dnf for Fedora and Red Hat, apt for Ubuntu and Debian.'),
    chat('l24-r-systemd', 'linux-admin', 'Vic, Service desk', 'After the kernel is running, something starts the web server, the printing service and the rest, and restarts them if they stop. Windows has Services for this.',
      'Which part starts and manages the services on Linux?', [
        ['systemd, which starts the services after the kernel runs', true, 'systemd starts and manages services: the counterpart of the Services console.'],
        ['The bootloader, which loads the kernel from the boot drive', LOOK, 'The bootloader comes before the kernel.'],
        ['fsck, which checks the file systems for errors', TOOL, 'fsck checks drives.'],
        ['root, the account that can change anything on the machine', LOOK, 'root is an account, not a part of start-up.']],
      'Order of start: firmware, the boot drive, bootloader, kernel, systemd, sign-in. root is the all-powerful account.'),
    chat('l24-r-su', 'linux-admin', 'Wes, Operations', 'I have to do several admin jobs in a row on a Linux machine and I know the root password. I do not want to type sudo before every line.',
      'Which command switches to another account such as root?', [
        ['su, which switches to the account you name, root if none is named', true, 'su switches the user. The jobs finish, then leave root so a typing mistake cannot do harm.'],
        ['sudo, which runs one command with root’s rights', LOOK, 'sudo is for one command at a time. su changes the account for the whole session.'],
        ['chown, which changes who owns a file', TOOL, 'chown changes file owners.'],
        ['mount, which attaches a drive to a folder', TOOL, 'mount attaches drives.']],
      'su switches account; sudo runs one command with root’s rights. Root can change anything, so leave it when the job ends.'),
    // ----- linux-net -----
    chat('l24-r-ip', 'linux-net', 'Xia, Support', 'On a Linux machine I want to see its IP address. In Windows I would type ipconfig.',
      'Which Linux command shows the machine’s addresses?', [
        ['ip, as in ip addr, which lists each connection and its address', true, 'ip is the counterpart of ipconfig.'],
        ['dig, which looks up the address of a name', LOOK, 'dig looks up a name in DNS, like nslookup. It does not show this machine’s own address.'],
        ['ping, which sends a test message to another computer', LOOK, 'ping tests whether another computer answers.'],
        ['df, which shows the free space of each drive', TOOL, 'df is about drives.']],
      'ip is ipconfig; ping is ping; dig is nslookup; traceroute is tracert.'),
    chat('l24-r-curl', 'linux-net', 'Yan, Support', 'From a terminal with no browser, I want to fetch a web page and see what the server sends back, to check that the web service answers.',
      'Which command fetches a web address from the terminal?', [
        ['curl, which fetches a web address and prints the reply', true, 'curl fetches a web address from the command line.'],
        ['cat, which prints the text inside a file', LOOK, 'cat reads a local file.'],
        ['traceroute, which lists each stop on the way to a computer', LOOK, 'traceroute shows the path, not the page.'],
        ['man, which opens the manual for a command', TOOL, 'man explains commands.']],
      'curl fetches a web address; man shows the manual page of a command.'),
    chat('l24-r-ps', 'linux-net', 'Zoe, Support', 'I want a one-time list of the programs running on a Linux machine, and the number of each, so I can pick one to stop. Windows has tasklist.',
      'Which command prints that list once?', [
        ['ps, which lists the programs running at that moment', true, 'ps is the counterpart of tasklist: a list of programs at one moment.'],
        ['top, which keeps a live list that updates by itself', LOOK, 'top is live; it is the Task Manager counterpart.'],
        ['du, which adds up the room folders take', TOOL, 'du measures folders.'],
        ['nano, which edits a text file in the terminal', TOOL, 'nano edits text.']],
      'ps lists once; top watches live.'),
    chat('l24-r-man', 'linux-net', 'Abe, Trainee', 'I forgot what the options of the du command do. There is no internet on this machine.',
      'Which command shows the manual page of another command?', [
        ['man, as in man du, which shows how the command is used', true, 'man shows the manual page. du shows the room that folders take.'],
        ['cat, which prints a file you name', LOOK, 'cat prints a file; the manual is not one you can name.'],
        ['nano, which edits a text file', TOOL, 'nano edits files.'],
        ['grep, which searches for words inside files', TOOL, 'grep searches files.']],
      'man shows help for a command; nano is the simple text editor.')
  ]);
})();
