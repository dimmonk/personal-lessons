// IT Help Desk, lesson 22 "Installing and upgrading": fifteen questions held in reserve for the weekly review, three for each of the five topics (editions, file systems,
// installing and upgrading, an app's requirements, cloud tools). Facts as in items-l22.js (A+ map Core 2 1.1, 1.2, 1.3, 1.10, 1.11). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows, id) => ({ kind: 'document', form: 'table', ...(id ? { id } : {}), title, head, rows: rows.map(([rid, ...cells]) => ({ id: rid, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const EDI = 'wrong-edition', FSL = 'wrong-filesystem', INS = 'wrong-install', REQ = 'unmet-requirement', DIS = 'wrong-distribution', LIC = 'license-missed',
    NOBACK = 'no-backup', NOSPLIT = 'no-split', CAUSE = 'wrong-cause', PART = 'part-first', LOOK = 'mixed-look-alike', TWO = 'two-changes';
  const E = 'editions', F = 'filesystems', I = 'install-types', A = 'app-reqs', C = 'cloud-tools';

  FC.items('it-support', [
    // ----- editions -----
    chat('l22-r-gpedit', E, 'Bonnie, Operations',
      'I was told to open gpedit.msc on my Windows 11 Home laptop to change a policy. The program is not found.',
      'Why not?', [
        ['The Local Group Policy Editor is in Pro and above, not in Home', true, 'gpedit.msc belongs to Pro, Pro for Workstations and Enterprise. Home does not include it.'],
        ['It needs a restart first', CAUSE, 'A restart does not add a program that the edition leaves out.'],
        ['It is hidden on laptops, so it must be run from a desktop', EDI, 'The edition decides it, not the shape of the computer.'],
        ['It is part of the N version only', EDI, 'N leaves out media features and has nothing to do with policy.']],
      'The deciding words are gpedit.msc and Windows 11 Home. The Local Group Policy Editor comes with Pro and above.'),
    recall('l22-r-pro-ram', E, 'What is the most memory Windows 11 Pro can use? Type the amount with its unit.', ['2 TB', '2TB', '2 terabytes'],
      'Home reaches 128 GB, Pro 2 TB, and Pro for Workstations and Enterprise 6 TB.'),
    chat('l22-r-down', E, 'Louis, Studio',
      'Our laptop has Windows 11 Pro, but this user only needs Home. Can we step it down to Home and keep their files?',
      'What is the answer?', [
        ['No. Going down to Home needs a clean install, so their files come back from a backup', true, 'Home to Pro is an in-place upgrade, but Pro to Home is not. A clean install erases the drive, so the backup comes first.'],
        ['Yes, by entering a Home license in place, the same way an upgrade works', EDI, 'The in-place way goes up in edition, not down.'],
        ['Yes, by removing the Pro features in Settings, one at a time', EDI, 'Features cannot be removed one at a time. The edition is one thing.'],
        ['Yes, by installing the N version over it, which counts as a step down', EDI, 'N is a media change, not a lower edition.']],
      'The deciding words are step it down to Home and keep their files. Only a clean install lowers the edition, so the files must be backed up.'),

    // ----- file systems -----
    chat('l22-r-ntfs', F, 'Daisy, Design',
      'My Mac can open the files on my NTFS drive, but it will not let me save a file there.',
      'Why?', [
        ['A Mac reads NTFS but, without extra software, cannot write to it', true, 'macOS reads NTFS. Writing needs added software, or a drive formatted as exFAT.'],
        ['The drive is full, so nothing more can be saved', CAUSE, 'A full drive would show a different message. The Mac can read it, which is the sign.'],
        ['NTFS is read-only for any file made on a Windows PC', FSL, 'NTFS is read and write on Windows.'],
        ['The Mac has used up its memory, so it cannot save to outside drives', CAUSE, 'The limit is in the file system, not the memory.']],
      'The deciding words are Mac can open the files and will not let me save. NTFS is read-only on a Mac without extra software.'),
    chat('l22-r-refs', F, 'Ezra, Server team',
      'We are building a Windows Server storage pool for very large data that must resist corruption and repair itself.',
      'Which file system is built for that?', [
        ['ReFS, the Resilient File System', true, 'ReFS is built for big storage on Windows Server and the larger editions, with checks that find and repair damage.'],
        ['FAT32, for the most computers', FSL, 'FAT32 has no repair and a 4 GB file limit.'],
        ['exFAT', FSL, 'exFAT is for flash drives and cards. It does not repair itself.'],
        ['APFS, the newest of these', FSL, 'APFS is Apple’s own and is not a Windows Server choice.']],
      'The deciding words are Windows Server, very large data and resist corruption. That is ReFS.'),
    recall('l22-r-xfs', F, 'Name the Linux file system made for very large files and volumes on servers. Type its name.', ['XFS'],
      'XFS is a Linux file system for very large files and volumes. ext4 is the usual default for a Linux computer.'),

    // ----- installing and upgrading -----
    chat('l22-r-driver', I, 'Maxine, Desk',
      'I booted the new workstation from the Windows USB drive. Setup asks where to install, but the list of drives is empty. The SSD is fitted and shows up in the firmware.',
      'What do you do?', [
        ['Load the storage driver from the maker, from a second USB drive, in setup', true, 'Setup lacks a driver for the drive controller, so the drive does not show. A third-party driver loaded in setup fixes it.'],
        ['Reformat the USB drive and start setup again', INS, 'The setup files are working. The list is empty because no driver is loaded for the controller.'],
        ['Swap the SSD for a hard disk drive, which setup always sees', PART, 'Nothing is wrong with the SSD. The driver is what is missing.'],
        ['Skip the drive step and install on a network share', INS, 'Windows cannot be installed on a network share this way.']],
      'The deciding words are the list of drives is empty and shows up in the firmware. The drive is fine; setup needs the controller’s driver.'),
    chat('l22-r-recovery', I, 'Wendy, Reception',
      'My laptop is slow and cluttered. I want it back the way it was when I bought it, and I have already copied my files elsewhere.',
      'Which installation kind do you use?', [
        ['The recovery partition, which restores the laptop to how it shipped', true, 'The recovery partition holds the maker’s copy, so it returns the laptop to its shipped state. Their files were copied first.'],
        ['An in-place upgrade, which clears the clutter and keeps everything', INS, 'An upgrade keeps their apps and settings, so the clutter stays.'],
        ['A repair installation, which leaves their programs in place', INS, 'A repair keeps the files and programs, and they want them gone.'],
        ['Zero-touch, which cleans the laptop over the internet', INS, 'Zero-touch prepares a new device. It does not reset an old one.']],
      'The deciding words are back the way it was when I bought it and I have already copied my files. The recovery partition does that.'),
    recall('l22-r-gpt', I, 'A disk bigger than 2 TB must use which partition style? Type its short name.', ['GPT', 'GUID partition table'],
      'GPT lifts the 2 TB limit of MBR, allows up to 128 partitions in Windows, and goes with UEFI start-up.'),

    // ----- an app's requirements -----
    chat('l22-r-iso', A, 'Lex, Desk',
      'The vendor sent the program as a single ISO file, about 4 GB. The server has no disc drive.',
      'How do you install from it?', [
        ['Open the ISO, which mounts as a virtual drive, and run setup from there', true, 'An ISO is a copy of a disc. Windows mounts it as a virtual drive, so no disc is needed.'],
        ['Install a disc drive on the server from the parts room, then burn the ISO to a DVD', DIS, 'That takes parts and a trip for something the file does on its own. Windows mounts the ISO as a virtual drive.'],
        ['Copy the ISO to a USB drive and run setup from the USB drive’s folder', DIS, 'A USB drive holds the file, but the ISO still has to be mounted or opened.'],
        ['Unzip it with a zip program and run the biggest file', DIS, 'An ISO is a disc image, not a zip file.']],
      'The deciding words are a single ISO file and the server has no disc drive. A mountable ISO acts as a virtual drive.'),
    chat('l22-r-x86', A, 'Mel, Finance',
      'I see two folders on the C drive, Program Files and Program Files (x86). My old accounting program is in the second one.',
      'What does the second folder hold?', [
        ['32-bit programs, which 64-bit Windows keeps apart from the 64-bit ones', true, 'On 64-bit Windows, 32-bit programs go in Program Files (x86), and 64-bit programs go in Program Files.'],
        ['Programs that were installed from a disc', LOOK, 'The folder is about bit width, not about where a program came from.'],
        ['Programs that need dedicated graphics', LOOK, 'Graphics needs are listed by the program, not by the folder.'],
        ['Old copies of programs kept as a backup', LOOK, 'It holds working 32-bit programs, not backup copies.']],
      'The deciding words are Program Files (x86) and old accounting program. The folder holds 32-bit programs.'),
    chat('l22-r-osver', A, 'Jeremy, Legal',
      'The new case-management program says it needs Windows 11. My PC runs Windows 10 and the installer stops with a message about the operating system.',
      'What is the cause?', [
        ['The program is made for a newer operating system than the PC has', true, 'App-to-OS compatibility: each program lists the versions of the operating system it runs on, and this one starts at Windows 11.'],
        ['The PC’s memory is too small', REQ, 'Memory is not what the installer names. It names the operating system.'],
        ['The installer must be run as the 32-bit version', REQ, 'Bit width is not what the message says.'],
        ['The antivirus is blocking the installer, so it is removed', CAUSE, 'The message is about the operating system, and nothing points at antivirus.']],
      'The deciding words are needs Windows 11 and the PC runs Windows 10. The program is not compatible with the older operating system.'),

    // ----- cloud tools -----
    chat('l22-r-leaver', C, 'Allan, HR',
      'Arjun left the company on Friday. Arjun’s cloud account is still active and takes up one of our paid licenses.',
      'What is the right step on the licenses?', [
        ['Remove Arjun’s license in the admin console, so it can be assigned to a new person', true, 'Licenses are assigned to accounts. Freeing the license returns it to the pool for the next hire, after Arjun’s data is dealt with per the rules.'],
        ['Delete Arjun’s files, so that the license goes with them', LIC, 'Files do not hold the license. The account does.'],
        ['Leave the license alone. Unused licenses free themselves after a week', LIC, 'Licenses stay assigned until someone removes them, and they keep costing money.'],
        ['Rename the account to the new hire’s name', LIC, 'Renaming reuses the account, and with it Arjun’s mail and files.']],
      'The deciding words are left the company and takes up one of our paid licenses. License assignment is done and undone in the admin console.'),
    chat('l22-r-selective', C, 'Ariel, Design',
      'My laptop’s drive is almost full since I turned on cloud sync. The cloud holds 400 GB of team files, and I only work in two folders.',
      'What do you change?', [
        ['In the sync settings, choose only those two folders to keep on the laptop', true, 'Folder settings decide what is copied to the laptop. The rest stays in the cloud and opens online.'],
        ['Delete the large folders from the sync folder to free the space', NOBACK, 'A delete in the sync folder deletes the cloud copy for everyone too.'],
        ['Turn sync off and email the files as needed', CAUSE, 'That drops the sync they need for their two folders.'],
        ['Replace the drive with a 1 TB one', PART, 'A bigger drive is a costly change when a setting solves it.']],
      'The deciding words are my laptop’s drive is almost full and only work in two folders. The sync folder settings choose what is kept on the laptop.'),
    chat('l22-r-collab', C, 'Tobin, Sales',
      'Four of us must work on the same price spreadsheet at once this afternoon, and each of us keeps saving over the others’ changes with copies in email.',
      'What do you suggest?', [
        ['Keep one copy in the cloud and open it in the online spreadsheet, so all four edit it together', true, 'Cloud collaboration tools let several people edit one file at the same time, with one copy and no email versions.'],
        ['Put the file in a sync folder on one laptop and tell the others to take turns', CAUSE, 'Taking turns on one laptop is what the sync folder does not do for four at once.'],
        ['Print the sheet and merge the changes by hand', CAUSE, 'It works, but it is slower than shared editing.'],
        ['Give each person a separate copy and join them at the end', CAUSE, 'Separate copies bring the same overwriting problem.']],
      'The deciding words are the same spreadsheet at once and saving over the others’ changes. A shared online document is edited by all at once.')
  ]);
})();
