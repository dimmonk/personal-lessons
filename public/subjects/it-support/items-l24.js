// IT Help Desk, lesson 24 "Mac and Linux" (part mac-linux): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 1.8 (macOS: installing and removing apps, system folders, Apple ID and company limits, backups, antivirus, updates, Rapid Security
// Response, System Settings areas, Mission Control, Keychain, Spotlight, iCloud, gestures, Finder, Dock, Continuity, Disk Utility, FileVault, Terminal, Force Quit, Time Machine) and 1.9 (Linux:
// ls pwd mv cp rm chmod chown grep find, fsck mount, su sudo, apt dnf, ip ping curl dig traceroute, man cat top ps du df, nano, /etc/passwd shadow hosts fstab resolv.conf, systemd, kernel,
// bootloader, root). Every tool is taught by its Windows counterpart, the way the exam pairs them. The worked ticket is the chain of lesson 14 on a Linux machine (IT4, IT5, IT8: the cheapest test
// that splits the fault: a ping by number clears the link, so the name lookup is left). Invented people. Strands: mac, mac-care, linux-files, linux-admin, linux-net.
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
    // ----- the worked ticket: a favorite cause (the network is down) that one cheap test rules out, then the file that lists the name server -----
    item({
      id: 'l24-w-dns', strand: 'linux-net',
      blocks: [
        msg('chat', 'Tomas, Engineering', 'Chat with the help desk', [['t1', 'My Linux workstation will not open intranet.example.com. Typing the number 10.0.4.20 into the browser opens the same page. Everyone else on my row is fine.']]),
        table('What Tomas typed at the terminal, and what came back', ['Command', 'What it printed'], [
          ['c1', 'ping -c 2 10.0.4.20', '2 packets transmitted, 2 received, 0% packet loss'],
          ['c2', 'dig intranet.example.com', 'connection timed out; no servers could be reached'],
          ['c3', 'cat /etc/resolv.conf', 'nameserver 10.0.4.9']]),
        table('From the desk’s network notes', ['Note'], [['n1', 'The company’s name servers are 10.0.4.2 and 10.0.4.3. The old one, 10.0.4.9, was switched off last week.']])],
      asks: [ask('Typing the number opens the page. What does that show?', [
        ['The link and the address work, so only the name lookup is failing.', true, 'A page that opens by number has crossed the cable, the address and the gateway. What is left is turning the name into the number.'],
        ['The network is down for his machine, so check the cable first.', NOSPLIT, 'A page that opens by number has already crossed the cable and the gateway. The cable test would only repeat that.'],
        ['The intranet server is broken, so wait for it to be fixed.', CAUSE, 'The server answered when Tomas typed its number, and the rest of the row can reach it.'],
        ['The browser is damaged, so remove it and install it again.', PART, 'The browser opened the page by number. A damaged browser would fail that too.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits “this page will not open”.', working: 'The cable or Wi-Fi; no address; the gateway; the name lookup; the intranet server; the browser.' },
        { id: 'favorite', does: 'Name your favorite cause and test it with the cheapest check.', working: 'The network is down. Ping the number (-c 2 sends two test messages and stops): two replies, no loss. The cable, the address and the gateway are fine.', ask: 'a' },
        { id: 'lookup', does: 'Test the next link: the name lookup.', working: 'dig is the Linux nslookup. It looks up the name and gets no answer: no server could be reached. The computer queries a server that is not answering.' },
        { id: 'file', does: 'Find which server the computer uses.', working: 'cat prints a file, as type does in Windows. /etc/resolv.conf lists the name servers. It lists 10.0.4.9, the one switched off last week.' },
        { id: 'done', does: 'Change one thing, then check it.', working: 'Point the computer at 10.0.4.2 (through the network settings that write the file), run dig again, and have Tomas open the page. The first guess cost one ping; the answer was one line in one file.' }],
      deciding: ['t1', 'c3'],
      reason: 'The ping by number worked, so the link, the address and the gateway are fine. dig failed and /etc/resolv.conf lists a name server that was switched off, so the name lookup is the broken link.' }),

    // ----- group 1: with the Windows counterpart in the question -----
    chat('l24-p-force', 'mac', 'Kim, Accounts', 'The spreadsheet app on my Mac froze. The spinning wheel has been there for five minutes and nothing I click works. My email and browser are fine.',
      'In Windows you would use Task Manager and End task. What is the Mac’s way to close just that app?', [
        ['Force Quit, which lists the open apps and stops the frozen one', true, 'Force Quit is the Mac’s End task. It stops the one app that is stuck.'],
        ['Restart the Mac, so the frozen app starts again from nothing', PART, 'A restart works but closes the email and the browser too, and loses what is not saved in them. Force Quit stops only the frozen app.'],
        ['Spotlight, searching for the app so that it opens a new window', TOOL, 'Spotlight finds and opens things. It cannot stop an app that is already running.'],
        ['Mission Control, dragging the frozen window off to another desktop', TOOL, 'Mission Control only shows windows and desktops side by side. It does not close an app.']],
      'A frozen app on a Mac that otherwise works is the job of Force Quit, the counterpart of End task in Task Manager. It stops that one app and leaves the rest running.'),
    chat('l24-p-spot', 'mac', 'Joel, HR', 'I saved a file called “Offer letter template” on my Mac last week and I cannot remember which folder. I only know its name.',
      'Which Mac tool finds a file from its name?', [
        ['Spotlight, which finds files, apps and mail from a name typed', true, 'Spotlight is the Mac’s search. It finds a file by the words in its name, wherever it was saved.'],
        ['The Dock, which holds shortcuts to the apps used most often', TOOL, 'The Dock is the Mac’s taskbar: it holds apps. It does not search for a file.'],
        ['Keychain, which keeps the passwords and certificates saved', TOOL, 'Keychain keeps saved passwords. It does not look for files.'],
        ['Time Machine, which keeps older copies of the files on a drive', LOOK, 'Time Machine restores older copies from a backup. It is not a search by name.']],
      'Finding a file from its name is search: the counterpart of the Windows search box is Spotlight.'),
    chat('l24-p-ls', 'linux-files', 'Dan, Server team', 'I have a terminal open on a Linux machine. I want to see which files are in the folder I am in. In Windows I would type dir.',
      'Which Linux command does that?', [
        ['ls, which lists the files and folders in the folder you are in', true, 'ls is the Linux dir: it lists what is in the folder.'],
        ['pwd, which shows the path of the folder you are standing in', LOOK, 'pwd prints the name of the folder you are in, not what is inside it.'],
        ['cat, which prints the text that is inside one file you name', LOOK, 'cat shows the contents of one file. It does not list a folder.'],
        ['cp, which copies a file or folder from one place to another', TOOL, 'cp copies. It does not show anything.']],
      'dir lists a folder in Windows; ls lists a folder on Linux. pwd names the folder you are in, cat prints one file.'),
    chat('l24-p-top', 'linux-net', 'Ana, Build team', 'Our Linux build machine feels slow. On Windows I would open Task Manager and sort by CPU. What do I type in the terminal to watch the busiest programs live?',
      'Which command?', [
        ['top, a list of running programs that updates as they use more or less', true, 'top is Task Manager at the command line: a live list of what runs and how much it uses.'],
        ['ps, a list of the running programs as they were at one moment', LOOK, 'ps lists the programs once and stops. It does not update, so you cannot watch it.'],
        ['df, a list of how much free space each drive has right now', TOOL, 'df is about disk space, not about running programs.'],
        ['du, a list of how much room each folder takes up on a drive', TOOL, 'du measures folders. It does not show running programs.']],
      'A live list of busy programs is top, the Linux counterpart of Task Manager. ps lists them once; df and du are about disk space.'),

    // ----- group 2: no help -----
    chat('l24-q-tm', 'mac-care', 'Rosa, Design', 'I saved over a logo file on my Mac on Tuesday and I need Monday’s copy. An external drive is plugged into the Mac and it has been backing the Mac up every hour.',
      'Which Mac tool brings back an older copy of a file?', [
        ['Time Machine, which keeps hourly copies on the drive', true, 'Time Machine is the Mac’s File History: it keeps copies over time and lets you go back to an earlier one.'],
        ['Disk Utility, which checks and repairs the drive itself', TOOL, 'Disk Utility looks after drives. It holds no older copies of files.'],
        ['FileVault, which scrambles the Mac’s drive so thieves cannot read it', TOOL, 'FileVault encrypts the drive. It does not keep older copies.'],
        ['Keychain, which stores the passwords the Mac has saved', TOOL, 'Keychain stores passwords, not files.']],
      'An older copy of a file comes from the backup. The Mac’s backup is Time Machine, the counterpart of File History.'),
    chat('l24-q-key', 'mac', 'Omar, Purchasing', 'Since my Mac was rebuilt, the supplier’s portal asks for my login every time. The old Mac filled it in for me. I want to see which logins this Mac has saved.',
      'Which Mac tool stores saved logins?', [
        ['Keychain, which holds saved passwords and certificates', true, 'Keychain is the Mac’s Credential Manager: it stores the passwords the Mac and its apps fill in.'],
        ['Finder, which shows the files and folders on the Mac', TOOL, 'Finder is the Mac’s File Explorer. It browses files, not saved passwords.'],
        ['Continuity, which lets an iPhone and the Mac work together', TOOL, 'Continuity connects the Mac to an iPhone or iPad. It does not store passwords.'],
        ['Mission Control, which shows every open window and desktop', TOOL, 'Mission Control is for windows and desktops.']],
      'Saved passwords and certificates live in Keychain, the counterpart of Credential Manager.'),
    chat('l24-q-dmg', 'mac', 'Lisa, Marketing', 'I downloaded a program called Notes-Pro.dmg. When I double-click it, a small window opens with the app’s icon and an arrow pointing to a folder icon named Applications.',
      'What installs it?', [
        ['Drag the app’s icon onto Applications, then eject the disk image', true, 'A .dmg is a disk image. Dragging the app into Applications puts it where installed apps live; ejecting the image tidies up.'],
        ['Drag the .dmg file itself into the Applications folder and open it there', FOLD, 'The .dmg is only the container. The app inside it is what belongs in Applications.'],
        ['Keep the window open and start the app from the disk image each time', SKIP, 'It would run from the image, and stop working once the image is ejected or the Mac restarts. The app has to be copied into Applications.'],
        ['Look in the window for a setup.exe and run that to install it', OS, 'A Mac does not run Windows .exe files. The drag into Applications is the whole install.']],
      'A .dmg opens like a disk. The app inside is dragged into /Applications, which is the whole install. A .pkg runs an installer instead, and the App Store installs with the Apple ID.'),
    chat('l24-q-sudo', 'linux-admin', 'Ben, Support', 'On my Ubuntu laptop I typed apt install htop and it answered “Permission denied”. I was told never to stay logged in as root.',
      'What is the right way to run that one command?', [
        ['Put sudo in front of the command and give your own password', true, 'sudo runs one command with root’s rights, like Run as administrator, and then you are an ordinary user again.'],
        ['Log out and sign in as root, then stay in that account from now on', ROOT, 'Root can change or delete anything. Staying in it makes every typing mistake a disaster. sudo gives root’s rights for one command only.'],
        ['Run the command again from another folder, in case this one is locked', NOSPLIT, 'The folder is not the problem. The command only needed root’s rights.'],
        ['Look for a downloadable installer to run, as you would on Windows', OS, 'Ubuntu installs programs with apt, and apt needs root’s rights, which sudo provides.']],
      'Installing programs changes the whole system, so it needs root’s rights. sudo gives them for one command: the counterpart of Run as administrator.'),
    chat('l24-q-df', 'linux-net', 'Mia, Office manager', 'The Linux file server says “No space left on device” when I save. I want to see how full each drive is.',
      'Which command shows the free space on each drive?', [
        ['df, which prints the size, the used space and the free space of each drive', true, 'df is the counterpart of the drive-space bars in This PC: used and free space for each drive.'],
        ['du, which adds up how much room one folder and what is in it take up', LOOK, 'du measures a folder. It is the next step once df shows a full drive, to find what is big.'],
        ['top, which lists the running programs and how busy each one is', TOOL, 'top is about running programs, not about space.'],
        ['ps, which lists the programs that are running at this moment', TOOL, 'ps lists programs, not drives.']],
      'df shows how full each drive is, like the drive bars in Windows. du then finds which folder takes the room.'),

    chat('l24-q-dig', 'linux-net', 'Hal, Web team', 'Our site’s name stopped working this morning. On a Linux machine I want to ask DNS for the address behind www.example.com and see the answer, as nslookup does in Windows.',
      'Which command looks up the address of a name in DNS?', [
        ['dig, which queries a name server and prints what it answers', true, 'dig is the Linux nslookup: it looks up a name in DNS and shows the reply.'],
        ['traceroute, which lists each stop on the way to a computer', LOOK, 'traceroute shows the path to a computer. It does not look up a name in DNS.'],
        ['ip, which shows this machine’s own connections and addresses', LOOK, 'ip shows this machine’s addresses, not what DNS answers for a name.'],
        ['curl, which fetches a web page and prints what it holds', TOOL, 'curl fetches a page. It would fail without the lookup it needs, and shows nothing about it.']],
      'Asking DNS for a name’s address is dig, the counterpart of nslookup.'),

    // ----- group 3: mixed with earlier lessons -----
    chat('l24-g-fstab', 'linux-files', 'Eli, Engineering', 'The second drive on my Linux workstation is missing after every restart, and I have to mount it by hand each morning. I want Linux to attach it by itself at start-up.',
      'Which file lists the drives to attach at start-up?', [
        ['/etc/fstab', true, 'fstab is the list of drives and where each one is attached when the machine starts.'],
        ['/etc/passwd', LOOK, '/etc/passwd lists the accounts on the machine. It has nothing about drives.'],
        ['/etc/hosts', LOOK, '/etc/hosts lists names and addresses that the computer checks before it queries DNS.'],
        ['/etc/resolv.conf', LOOK, '/etc/resolv.conf lists the name servers the computer uses. It has nothing about drives.']],
      '/etc/fstab names the drives mounted at start-up. mount attaches one by hand; fstab does it every time the machine starts.'),
    chat('l24-g-fv', 'mac-care', 'Priya, Operations', 'My boss is taking a company MacBook abroad. If it is lost, nobody must be able to read what is on its drive. Windows has BitLocker for this.',
      'What does that on a Mac?', [
        ['FileVault, which encrypts the whole startup drive', true, 'FileVault is the Mac’s BitLocker: the drive is scrambled, so a thief who removes it cannot read it.'],
        ['Disk Utility, which erases, partitions and checks drives', TOOL, 'Disk Utility looks after drives. It does not protect what is on them.'],
        ['Time Machine, which backs the Mac up to another drive', TOOL, 'A backup helps after a loss but does not stop anyone reading the lost Mac.'],
        ['Keychain, which holds the passwords the Mac has saved', TOOL, 'Keychain stores passwords. It does not encrypt the drive.']],
      'Making a lost laptop’s drive unreadable is encryption. The Mac’s counterpart of BitLocker is FileVault.'),
    chat('l24-g-apt', 'linux-admin', 'Wen, Design', 'My new Ubuntu desktop needs the Vim text editor installed from the command line. A friend on Fedora says to use dnf.',
      'Which do I use on Ubuntu?', [
        ['apt, because Ubuntu takes its programs through apt', true, 'Ubuntu and Debian use apt; Fedora and Red Hat use dnf. Each pulls programs from the distribution’s own list.'],
        ['dnf, because it is the one tool every Linux uses', LOOK, 'dnf belongs to Fedora and Red Hat. Ubuntu uses apt.'],
        ['mount, to attach the editor to the desktop', TOOL, 'mount attaches a drive to a folder. It installs nothing.'],
        ['A .dmg from the vendor’s site, opened by double-clicking', OS, 'A .dmg is a Mac file. Linux installs through apt or dnf.']],
      'Both apt and dnf install programs from a list kept by the distribution, the version of Linux in use. Ubuntu uses apt; Fedora uses dnf.'),
    chat('l24-g-disk', 'mac-care', 'Sam, Finance', 'An external drive shows up gray in Finder and will not open. I need to check it for errors. On Windows I would use chkdsk. The files on it are not backed up anywhere.',
      'What do I do first?', [
        ['In Disk Utility, try to mount the drive and copy off what can be read, then run First Aid', true, 'The files are the only copy, so what can be read comes off first. First Aid repairs a drive by rewriting it, so it comes after. Disk Utility is the Mac’s counterpart of chkdsk and Disk Management.'],
        ['Erase the drive in Disk Utility, then put the files back from it', NOBACK, 'Erase wipes what is on it. The files are not backed up, so an erase destroys the only copy.'],
        ['Restore the drive from Time Machine on the same screen', TOOL, 'The files on it are not backed up, so Time Machine holds nothing to restore.'],
        ['Run First Aid at once, since it checks the drive and repairs it', NOBACK, 'First Aid rewrites the drive, and nothing is copied off yet. The files are the only copy, so they come first.']],
      'A drive that will not open is checked with Disk Utility (First Aid), the counterpart of chkdsk. Because the drive will not open, copying may not work; whatever can be read is copied first, then First Aid, and an erase only once the files are copied or given up.'),
    recall('l24-g-hosts', 'linux-files', 'Linux keeps a short list of names and addresses that the computer reads before it queries DNS.', 'Type the name of the file.',
      ['(etc) hosts'], 'It is /etc/hosts, the same job as the hosts file in Windows. /etc/resolv.conf is the other name file: it lists the name servers the computer uses.'),
    chat('l24-g-rsr', 'mac-care', 'Jo, IT', 'A security hole in Safari is in the news. The company says the Macs get a fix “today”, but the next big macOS update is weeks away.',
      'What is Rapid Security Response, as the exam names it?', [
        ['Apple’s quick security update, sent between the big updates; current Macs call it Background Security Improvements', true, 'It brings a security fix quickly, without waiting for the next full macOS update.'],
        ['A tool that finds and removes viruses on the Mac', LOOK, 'That is antivirus. Rapid Security Response installs fixes from Apple.'],
        ['A copy of the whole Mac kept on an external drive', LOOK, 'That is a backup, which Time Machine makes.'],
        ['A way to lock the Mac from far away when it is stolen', TOOL, 'It is about security fixes, not about locking a lost Mac.']],
      'Rapid Security Response is Apple’s quick security update between the big updates (now called Background Security Improvements): part of keeping the Mac updated, with antivirus and backups kept alongside.')
  ]);
})();
