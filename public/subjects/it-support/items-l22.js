// IT Help Desk, lesson 22 "Installing and upgrading" (part install): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 1.1 (OS kinds, file systems NTFS, ReFS, FAT32, exFAT, ext4, XFS, APFS, end of life), 1.2 (boot methods, installation kinds,
// MBR against GPT, drive format, upgrade considerations, feature updates), 1.3 (editions, N versions, upgrade paths, TPM and UEFI), 1.10 (32 and 64-bit, graphics, VRAM, RAM, CPU, tokens,
// storage; media, ISO, package, image; impact), 1.11 (email, storage sync, collaboration, identity sync, license assignment). The way of working is the technician's: back up before
// anything (IT2, IT17), the cheapest test that splits the chain (IT4, IT5, IT8), one change (IT9). Invented people and offices. Every wrong choice carries its slip and a line
// saying what it leaves undone.
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
    // ----- the worked ticket: "can this laptop take Windows 11?" The favorite answer (enough memory and disk) is ruled out by the firmware line -----
    item({
      id: 'l22-w-eleven', strand: I,
      blocks: [
        msg('chat', 'Dev, Finance', 'Chat with the help desk', [['d1', 'My laptop is four years old and runs fine. Can it take Windows 11? It has 8 GB of memory and plenty of disk, so I think yes.']]),
        table('System information on Dev’s laptop (msinfo32)', ['Field', 'Value'], [
          ['t1', 'OS Name', 'Windows 10 Pro, 64-bit'],
          ['t2', 'Processor', 'Intel Core i5-8250U, 4 cores, 1.60 GHz (on Microsoft’s supported list)'],
          ['t3', 'Installed memory (RAM)', '8.00 GB'],
          ['t4', 'BIOS Mode', 'Legacy'],
          ['t5', 'Secure Boot State', 'Unsupported']]),
        table('Your notes from the desk', ['Check', 'Result'], [
          ['n1', 'Disk Management', 'The 256 GB system disk is MBR, with 150 GB free'],
          ['n3', 'Firmware screen', 'A start-up mode choice of Legacy or UEFI, and a Secure Boot setting that is off'],
          ['n2', 'tpm.msc', 'A TPM, specification version 2.0']])],
      asks: [ask('Memory, disk and processor all meet Windows 11. What does the BIOS Mode line show?', [
        ['The laptop starts in Legacy mode from an MBR disk. Windows 11 needs UEFI firmware, so the start-up mode must change first.', true, 'Windows 11 starts only in UEFI mode, and UEFI starts from a GPT disk. Secure Boot becomes available once the firmware is in UEFI. Dev’s laptop is on the older Legacy path.'],
        ['Legacy mode is only a label. Windows 11 will install on it once the TPM is turned off', REQ, 'The TPM is not in the way, and Windows 11 needs it on. The start-up mode is what fails the list.'],
        ['The processor is too old, so the laptop needs a newer model before Windows 11', CAUSE, 'An Intel Core i5 of the eighth generation is on the supported list. The line that fails is the start-up mode.'],
        ['Legacy mode can stay if the 8 GB of memory is raised to 16 GB.', REQ, 'Memory is not the failing line: Windows 11 needs 4 GB. More memory does not change how the laptop starts.']])],
      steps: [
        { id: 'causes', does: 'List what Windows 11 needs, so no line is skipped.', working: 'A 64-bit processor on the supported list, 4 GB of memory, 64 GB of storage, UEFI firmware that is Secure Boot capable, TPM 2.0, and DirectX 12 graphics.' },
        { id: 'favorite', does: 'Name the favorite answer and test it against the list.', working: 'Dev points at memory and disk. Both pass (8 GB and 150 GB free), and the processor is on the list. Those lines do not settle it.', ask: 'a' },
        { id: 'cut', does: 'Read the lines still unchecked: firmware and TPM.', working: 'The TPM is 2.0, which passes. BIOS Mode is Legacy and the disk is MBR, so the start-up mode is the one failing line.' },
        { id: 'protect', does: 'Back up before changing how the disk starts.', working: 'Dev’s files are copied to the company storage first. Converting a disk changes its first sectors, and a backup is the way back.' },
        { id: 'one', does: 'Change one thing at a time.', working: 'Windows includes a tool, mbr2gpt, that changes an MBR disk to GPT without erasing it. That is done first. Then the firmware is switched to UEFI and Secure Boot is turned on, which is good practice. The laptop is checked to start.' },
        { id: 'done', does: 'Check again and write it up.', working: 'The PC Health Check app now says the laptop meets Windows 11. The note: Legacy mode and MBR disk blocked the upgrade; converted to GPT, switched to UEFI; files backed up first.' }],
      deciding: ['d1', 't3', 't4', 't5', 'n1'],
      reason: 'Dev named memory and disk. Both pass, and the TPM does too. The failing line is BIOS Mode Legacy with an MBR disk, which also leaves Secure Boot unavailable. The disk was backed up, then converted to GPT, then the firmware was switched, one change at a time.' }),

    // ----- group 1: with the deciding words marked -----
    chat('l22-p-domain', E, 'Drake, Sales',
      'I just got a new laptop with Windows 11 Home. IT says I must join the company domain to reach the shared drives, but I find no way to join one in Settings.',
      'What does their laptop need?', [
        ['The Pro edition, the lowest one that can join a domain, upgraded in place with their files kept', true, 'Windows Home cannot join a domain. Pro, Pro for Workstations and Enterprise can. A Home to Pro upgrade is done in place with a Pro license, so nothing is erased.'],
        ['A setting changed in Home. Domain join is hidden until Remote Desktop is turned on in the System page of Settings and the laptop restarted', EDI, 'No setting adds domain join to Home. The edition decides it.'],
        ['The N version of Home. N is the edition that is made for company networks', EDI, 'N means the media features are left out, as in Europe. It has nothing to do with domains.'],
        ['A clean install of Home', INS, 'A clean install of Home gives the same edition and erases their files. Home has no domain join however it is installed.']],
      'The deciding words are Windows 11 Home and join the company domain. Home has no domain join; Pro and above do. An upgrade from Home to Pro keeps files.'),
    chat('l22-p-usb', F, 'Caroline, Marketing',
      'I need one USB drive that my Windows PC and my coworker’s Mac can both read and write. I will put 6 GB video files on it.',
      'Which file system do you format it with?', [
        ['exFAT', true, 'exFAT works on Windows and on macOS, holds files bigger than 4 GB, and suits USB drives and SD cards.'],
        ['FAT32', FSL, 'FAT32 works on both, but one file must stay under 4 GB. The 6 GB videos will not fit.'],
        ['NTFS', FSL, 'A Mac reads an NTFS drive but, without extra software, cannot write to it.'],
        ['APFS', FSL, 'APFS is Apple’s own. Windows cannot read it without extra software.']],
      'The deciding words are Windows PC and Mac, both read and write, and 6 GB files. Only exFAT is read and written by both and holds a file over 4 GB.'),
    item({ id: 'l22-p-eleven', strand: I,
      blocks: [
        msg('chat', 'Filip, Design', 'Chat with the help desk', [['p1', 'The Windows 11 upgrade says my PC does not qualify. Everything else about it is new: 16 GB of memory, a 512 GB drive, a recent chip.']]),
        table('From msinfo32 and tpm.msc', ['Field', 'Value'], [
          ['q1', 'BIOS Mode', 'UEFI'],
          ['q2', 'Secure Boot State', 'On (so the firmware is capable)'],
          ['q3', 'tpm.msc', 'Compatible TPM cannot be found']])],
      asks: [ask('What do you do about the failing line?', [
        ['Look in the firmware for a TPM setting that is turned off, and turn it on', true, 'A TPM can be a chip or a firmware feature, and it is often off by default. It is a cheap check to make first.'],
        ['Restart and run the PC Health Check app again, to see whether it changes its answer', NOSPLIT, 'Nothing has changed, so it gives the same answer. The tpm.msc line already says what fails.'],
        ['Switch to Legacy mode so that the TPM check is skipped', REQ, 'Legacy mode breaks the other requirement: Windows 11 needs UEFI, which Filip already has.'],
        ['Reinstall Windows 10 to see if the TPM comes back', INS, 'A reinstall erases their files and cannot create a TPM. The firmware is the place the TPM is turned on.']])],
      deciding: ['p1', 'q3'],
      reason: 'The deciding line is Compatible TPM cannot be found, with UEFI already in use and Secure Boot on. The TPM is the one requirement failing, and the firmware setting is the cheapest place to look.' }),
    chat('l22-p-gfx', A, 'Bjorn, Video',
      'The new editing program lists “dedicated graphics with 4 GB of VRAM” as its minimum. My laptop has integrated graphics. It has 16 GB of main memory, so that should cover it.',
      'What do you tell them?', [
        ['Integrated graphics has no VRAM of its own and borrows main memory; they need a dedicated card with 4 GB', true, 'VRAM is memory on the graphics card itself. Integrated graphics shares the main memory, so adding main memory does not give it VRAM.'],
        ['Main memory counts as VRAM, so their 16 GB of main memory more than meets the 4 GB minimum and the program will run without trouble', REQ, 'VRAM is the graphics card’s own memory. The 16 GB of main memory is a different pool.'],
        ['The program needs a faster processor instead, so the CPU is upgraded', CAUSE, 'The listing names the graphics hardware. A faster processor does not add VRAM.'],
        ['The program will run if the 32-bit version is installed instead', REQ, 'The bit width is not the problem. The graphics minimum applies to both versions.']],
      'The deciding words are dedicated graphics, 4 GB of VRAM and integrated graphics. VRAM is the card’s own memory, and integrated graphics has none of its own.'),

    // ----- group 2: no help -----
    chat('l22-s-backup', I, 'Morris, Accounting',
      'My laptop passed the Windows 11 check and I want the upgrade tonight. It keeps my files, so I can skip the copying step, right?',
      'What do you do first?', [
        ['Back up the files and note the settings, then run the in-place upgrade', true, 'An upgrade keeps files, but it can fail partway. The copy is the way back.'],
        ['Run the in-place upgrade and copy files off only if it fails', NOBACK, 'If the upgrade fails halfway, the files may not be reachable to copy. Back up first.'],
        ['Format the drive so the new version starts clean, then restore from the copy', INS, 'A format is a clean install, not the upgrade they asked for. Their apps and settings would be gone.'],
        ['Check the apps and drivers work with Windows 11, and back up afterward', NOBACK, 'The app check is right, but the copy comes before anything changes. Backing up afterward leaves the changes unprotected.']],
      'Before an upgrade the order is: back up files and preferences, then check that the apps, drivers and hardware work with the new version, then upgrade.'),
    chat('l22-s-mbr', I, 'Makena, Facilities',
      'I put a new 4 TB drive in the office PC. Disk Management shows only 2 TB, and the rest says Unallocated. Its properties give the partition style as MBR. The drive is not broken; it tests fine.',
      'Why is that?', [
        ['The drive uses MBR, which cannot address more than 2 TB; it needs GPT (a new empty drive can simply be made GPT)', true, 'MBR reaches 2 TB at most. A disk over 2 TB must use GPT. This drive is new and empty, so making it GPT loses nothing.'],
        ['NTFS cannot hold a drive larger than 2 TB, so it must be formatted again as ReFS, the file system made for the biggest drives', FSL, 'NTFS handles volumes far larger than 2 TB. The partition style is the limit here.'],
        ['The drive needs to be formatted again as FAT32 to see all of it', FSL, 'FAT32 is no better. It is the older format and has its own limits.'],
        ['Half the drive is bad, so it should be returned', CAUSE, 'The drive tests fine. A 2 TB limit appearing on a 4 TB drive is the sign of MBR.']],
      'The deciding words are 4 TB, shows only 2 TB and partition style MBR. That 2 TB ceiling belongs to MBR; GPT lifts it.'),
    item({ id: 'l22-s-bit', strand: A,
      blocks: [
        msg('chat', 'Kaito, Engineering', 'Chat with the help desk', [['t1', 'The installer for the new design program says “64-bit only”. My laptop has 8 GB of memory but Windows only shows 3.2 GB usable.']]),
        table('System type, from msinfo32', ['Field', 'Value'], [['s1', 'System Type', 'x86-based PC']])],
      asks: [ask('What is the cause, and what changes it?', [
        ['Windows is the 32-bit version, which reaches at most 4 GB and cannot run 64-bit programs; moving to 64-bit means a clean install', true, 'A 32-bit operating system cannot use more than 4 GB, and an in-place upgrade cannot change it to 64-bit.'],
        ['The installer is faulty, and a fresh download from the company’s own site will let the program use all 8 GB of memory with no other change', CAUSE, 'The limit is in the operating system, not the installer.'],
        ['The memory is damaged, so replacing the sticks will bring back the missing 4.8 GB', PART, 'The memory is fine. A 32-bit Windows reaches no more than 4 GB, and some of that is held for the system.'],
        ['An in-place upgrade to 64-bit keeps the files and programs and fixes both', INS, 'An upgrade cannot change from 32-bit to 64-bit. That change is a clean install, with a backup first.']])],
      deciding: ['t1', 's1'],
      reason: 'The deciding lines are 64-bit only, 3.2 GB usable of 8 GB, and System Type x86-based PC (a 64-bit Windows says x64-based PC). A 32-bit Windows reaches at most 4 GB and runs only 32-bit programs, and the only way to 64-bit is a clean install.' }),
    chat('l22-s-fat', F, 'Madeline, Events',
      'My camera supports exFAT. Its memory card is FAT32, and a 5 GB video from my PC will not copy onto it. I want the video as one file. The card holds today’s photos, not yet backed up.',
      'What do you do?', [
        ['Copy the photos off first, then format the card as exFAT', true, 'FAT32 stops a single file at 4 GB. exFAT lifts that and their camera reads it, and a format erases the card, so the photos go first.'],
        ['Format the card as exFAT now, then copy the photos back from the camera', NOBACK, 'The ticket does not say the photos are anywhere else. Formatting erases the card.'],
        ['Format the card as NTFS so that Windows and the camera can both read it', FSL, 'The ticket says their camera reads exFAT, which is the one made for cards and flash drives. A camera may not read NTFS.'],
        ['Keep FAT32 and split the video into pieces under 4 GB', FSL, 'That works around the limit, but the limit stays and they want one file.']],
      'The deciding words are FAT32, a 5 GB video as one file, and photos not yet backed up. exFAT lifts the 4 GB limit, and the photos are copied off before the format erases the card.'),
    chat('l22-s-image', I, 'Zahra, IT manager',
      'Fifty new laptops arrive on Monday, and every one must end up with the same Windows, the same twelve programs and the same settings. We have time to set up only one of them by hand.',
      'Which installation kind fits?', [
        ['Image deployment: build one reference computer, capture it as an image, and copy it to all fifty', true, 'An image holds Windows, the apps and the settings, so every laptop is the same and no one repeats the work.'],
        ['Upgrade installation on each laptop, to keep what the maker installed', INS, 'An upgrade keeps old files, apps and settings. These laptops are new and need the company’s own programs and settings.'],
        ['Recovery partition on each laptop, which restores the maker’s copy', INS, 'The recovery partition restores how the laptop shipped, without the twelve programs or the company’s settings.'],
        ['A clean install of Windows on each, with the twelve programs added by hand, one laptop at a time through Monday and Tuesday', INS, 'It gives a clean start, but the work is done fifty times and small differences creep in.']],
      'The deciding words are fifty laptops that must end up the same and time to build only one by hand. One built system copied to all the rest is image deployment.'),
    chat('l22-s-license', C, 'Janet, New hire',
      'It is my first day. I can sign in to the company web apps, but Word online says something like “you need a license to edit” and only lets me view.',
      'What do you check first?', [
        ['Whether a license is assigned to their account in the admin console', true, 'They sign in, so their account works. An app that wants a license to edit means none is assigned to them; a vendor’s wording varies.'],
        ['Whether Word needs reinstalling on the laptop, and reinstall it if so', LIC, 'Word online runs in the browser. Reinstalling anything on their laptop changes nothing.'],
        ['Whether their password needs to be reset', LIC, 'The sign-in works. A reset fixes a password problem, not a missing license.'],
        ['Whether their mailbox is full, which can block editing', CAUSE, 'A mailbox limit has nothing to do with editing a document online.']],
      'The deciding words are I can sign in and you need a license to edit. Sign-in works, so the missing piece is the license assigned to their account.'),
    chat('l22-s-rdp', E, 'Sadie, Consultant',
      'I want to connect from my office computer to my Windows 11 Home laptop at home using Remote Desktop. The laptop is on, both computers are on the company VPN, and the laptop answers a ping, but the connection is refused.',
      'What is the cause?', [
        ['Home can connect out with Remote Desktop but cannot be connected to; hosting needs Pro or above', true, 'Every edition can use Remote Desktop as the client, but only Pro, Pro for Workstations and Enterprise can host it.'],
        ['The laptop’s memory is too small to host a Remote Desktop session for another computer', EDI, 'Home’s limit is 128 GB, and memory is not what blocks hosting.'],
        ['The N version of Windows must be installed first, to add the remote connections that Home leaves out', EDI, 'N only leaves out media features. It does not add remote connections.'],
        ['The home router is the cause, so you swap it', PART, 'Both computers reach each other over the VPN and the laptop answers a ping, so the network path works. Home cannot host, whatever the router does.']],
      'The deciding words are Windows 11 Home and connected to. Home can start a Remote Desktop session but cannot host one.'),

    // ----- group 3: no help -----
    chat('l22-g-sync', C, 'Sharon, Finance',
      'I deleted a folder from my OneDrive folder on my laptop, and now it is gone from my phone and the web page too. I only wanted it off the laptop.',
      'What happened, and what do you do?', [
        ['The sync folder mirrors the cloud copy, so the deletion synced everywhere; restore it from the cloud recycle bin', true, 'A synced folder is one group of files kept the same everywhere, so a delete follows. The cloud recycle bin is where to look first.'],
        ['The phone app is faulty and shows the folder as missing, so the phone must be signed out of the account and signed back in again', CAUSE, 'The web page also lost the folder. That points at the sync, not the phone.'],
        ['The laptop’s disk is corrupt, so the files must be recovered from the disk', PART, 'The disk did what it was asked. The delete was real and synced.'],
        ['The folder is lost for good', CAUSE, 'Cloud storage usually keeps deleted files for a time. Look there first.']],
      'The deciding words are deleted from my OneDrive folder and gone from my phone and the web page too. A synced folder shares its deletions.'),
    chat('l22-g-zero', I, 'Scarlett, Operations',
      'Forty new staff start next month and will work from home. Their laptops go from the maker’s warehouse to their front doors, and the desk will not see any of them. Each must still arrive set up for the company.',
      'Which installation kind fits?', [
        ['Zero-touch: the laptop configures itself from the company account when the user first signs in', true, 'Zero-touch needs no technician at the machine. Settings and apps arrive over the internet on the first sign-in.'],
        ['Remote network installation from a server in the office, started on each laptop once it is plugged into the office network', INS, 'It runs over the office network, so the laptop would have to be there, or on a VPN, to start.'],
        ['Image deployment, carried out on each laptop before it ships', INS, 'An image copied by the desk means someone handles each laptop, which the ticket rules out.'],
        ['Repair installation on each, which fixes Windows after it arrives', INS, 'A repair fixes a damaged Windows. The new laptops are not damaged.']],
      'The deciding words are laptops that go from the maker to the homes, never seen by the desk, yet configured for the company. That is zero-touch.'),
    chat('l22-g-ram', E, 'Tilda, Studio',
      'Our old Windows 11 Home workstation has 192 GB of memory fitted, and Windows reports 192 GB installed but only 128 GB usable. The memory tests clean.',
      'Why is that?', [
        ['Windows 11 Home is limited to 128 GB of memory, so Pro or above is needed to use more', true, 'RAM limits belong to the edition. Home is 128 GB, Pro 2 TB, and Pro for Workstations and Enterprise 6 TB.'],
        ['It is a 32-bit Windows, which is limited to 4 GB', CAUSE, 'They see 128 GB, far above any 32-bit limit. The figure of 128 GB is the Home edition’s.'],
        ['Windows holds the other 64 GB back for its start-up files and the pages it swaps to the drive', CAUSE, 'Windows does not hold memory back like that. The 128 GB figure is the Home edition’s limit.'],
        ['Two of the sticks are bad, so they are swapped one at a time', PART, 'The memory tests clean, and a bad pair would not land on exactly 128 GB.']],
      'The deciding words are Windows 11 Home and 192 GB installed with 128 GB usable. The memory limit belongs to the edition.'),
    recall('l22-g-ext4', F, 'Which file system is the usual default on Ubuntu and Debian Linux? Type its name.', ['ext4'],
      'ext4 is the usual default on Ubuntu and Debian. It keeps a log of changes (journaling) so a crash does not leave the drive in a mess, and it has file permissions. XFS is the Linux choice for very large files and volumes on servers.'),
    chat('l22-g-dist', A, 'Eliza, Training',
      'We will push a 3 GB program to all 400 computers on Monday at 9. Everyone is online then. I need a plan.',
      'What is the main risk to deal with?', [
        ['The network: 400 downloads at once will slow it for everyone, so spread the push out in groups', true, 'Distribution has an impact on the network. A big download to many computers at the same moment can fill the line.'],
        ['The license count: 400 users each need a license, and the desk has not checked how many it holds', DIS, 'Licenses matter, but nothing in the ticket suggests that they are short. The timing is what they asked about.'],
        ['The storage space on each computer: 3 GB may not fit on the older machines that are online', DIS, 'Storage is worth checking, but 3 GB fits on almost every computer. The shared line is the larger risk.'],
        ['Nothing: a download package is only a file, so it adds no load to the network at all', DIS, 'Every download uses the network. This one is 1.2 TB in total, all in the same hour.']],
      'The deciding words are 3 GB to all 400 computers at 9 and everyone is online. That is the network impact of distribution, and spreading it out is the answer.'),
    chat('l22-g-bitlocker', E, 'Fatou, Legal',
      'The firm now requires the whole drive of every laptop to be locked with Microsoft’s full drive encryption. Mine is the only one on Windows 11 Home, and the encryption page offers me nothing but device encryption (a simpler lock that some Home laptops have).',
      'What does their laptop need?', [
        ['An upgrade to Pro, the lowest of the editions that has BitLocker', true, 'BitLocker belongs to Pro and above. Home has no BitLocker.'],
        ['Device encryption left on', EDI, 'Device encryption is a simpler lock. The firm requires BitLocker, which Home does not have.'],
        ['A different file system', FSL, 'BitLocker encrypts an NTFS drive in Windows. The file system is not the missing piece.'],
        ['The N version of Home, which adds the security tools', EDI, 'N leaves out media features. It adds no security tools.']],
      'The deciding words are full drive encryption required and Windows 11 Home. BitLocker is the tool, and the edition has to be raised to Pro.'),
    chat('l22-g-multi', I, 'Goran, Lab',
      'The lab PC has Windows 11 and Ubuntu on its one drive. When it powers on, the screen stops, and the user picks which of the two to run before anything loads.',
      'What is this arrangement called?', [
        ['Multiboot, two operating systems on one computer with a start-up menu', true, 'Multiboot means the start-up code on the boot drive shows a menu, and the user chooses which operating system to load.'],
        ['Image deployment, a copy of a system placed on one computer', INS, 'Image deployment copies one built system to many computers. It has no start-up menu.'],
        ['Zero-touch, where the company account chooses the system', INS, 'Zero-touch prepares a laptop on its first sign-in. It gives no menu.'],
        ['A repair installation, where the second system fixes the first', INS, 'A repair replaces Windows files. It does not add a second system.']],
      'The deciding words are two systems on the one drive and a choice made before anything loads. That is multiboot.'),
    recall('l22-g-vram', A, 'What do we call the memory on a graphics card itself, as a program’s requirements list it? Type the short name.', ['VRAM', 'video RAM', 'video memory'],
      'VRAM is the graphics card’s own memory. Integrated graphics has none of its own and shares the main memory.')
  ]);
})();
