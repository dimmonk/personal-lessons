// IT Help Desk, lesson 22: Installing and upgrading (part install). Core 2 1.1 (kinds of operating system, file systems NTFS, ReFS, FAT32, exFAT, ext4, XFS, APFS, end of life),
// 1.2 (boot methods, installation kinds, MBR against GPT, drive format, upgrade considerations, feature updates), 1.3 (Windows 10 and 11 editions, N versions, upgrade paths, TPM and UEFI),
// 1.10 (an app's requirements, distribution, impact) and 1.11 (cloud productivity tools) of the A+ map (docs/research/it-support-aplus.md). Plan: lesson 22. The facts are recalled;
// the tickets are worked by protecting the user's data first (IT2, IT17), the cheapest test that splits the chain of requirements (IT4, IT5, IT8) and one change at a time (IT9).
// Judgement call: the requirements for Windows 11 are taught as a list checked line by line, with the favorite answer (memory and disk) ruled out by the firmware line. One worked
// ticket (Dev's laptop); a first group of four with the deciding words marked; a second of seven and a third of five with none; the check: eight new questions, no help, 7 of 8 to pass.
// The plan gives no earlier lesson of this builder to mix in, so no group mixes; cross-builder mixing is added later.
FC.lesson('it-support', {
  id: 'l22', part: 'install', title: 'Installing and upgrading', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (operating systems and file systems; Windows editions, requirements and upgrade paths; installation kinds, boot methods and partitions; an app\'s requirements and how it is distributed; cloud office tools).' }],
  why: [
    'Dev in Finance has a four-year-old laptop that runs fine. He has the memory and the disk, so he thinks it can take Windows 11.',
    'Here you learn operating systems, file systems, Windows editions and requirements, ways to install, what a program needs, and cloud office tools, so you can answer before anything is changed.'],
  flow: [
    { title: 'Operating systems and when they end',
      show: [{ kind: 'document', form: 'table', title: 'Kinds of operating system', head: ['Operating system', 'Where you meet it'], rows: [
        { id: 'o1', cells: ['Windows', 'Office computers'] },
        { id: 'o2', cells: ['macOS', 'Apple laptops and desktops'] },
        { id: 'o3', cells: ['Linux', 'Free; servers and some desktops'] },
        { id: 'o4', cells: ['Chrome OS', 'Chromebooks; web apps'] },
        { id: 'o5', cells: ['iOS and iPadOS', 'iPhone and iPad'] },
        { id: 'o6', cells: ['Android', 'Most other phones and tablets'] }] },
      { kind: 'prose', text: [
        'At its end of life (EOL) a version gets no more security fixes, so flaws stay open. Windows 10 reached it in October 2025. A program made for one operating system does not run on another, and a drive formatted for one may not open on another.'] }] },
    { title: 'File systems',
      show: [{ kind: 'document', form: 'table', title: 'File systems and where each fits', head: ['File system', 'Where it is used', 'What to know'], rows: [
        { id: 'f1', cells: ['NTFS', 'Windows drives', 'The Windows default. Permissions, encryption, compression. A Mac reads it but cannot write to it without extra software.'] },
        { id: 'f2', cells: ['ReFS', 'Windows Server', 'Very large storage that repairs itself.'] },
        { id: 'f3', cells: ['FAT32', 'Small USB drives, cameras', 'Opens on almost everything. A file must be under 4 GB.'] },
        { id: 'f4', cells: ['exFAT', 'USB drives and memory cards', 'Opens on Windows and macOS; holds files over 4 GB.'] },
        { id: 'f5', cells: ['ext4', 'Linux', 'The usual default on Ubuntu and Debian.'] },
        { id: 'f6', cells: ['XFS', 'Linux servers', 'Fast with very large files.'] },
        { id: 'f7', cells: ['APFS', 'Macs, iPhones and iPads', 'Apple’s own. Windows cannot read it without extra software.'] }] },
      { kind: 'prose', text: ['Formatting puts a file system on a drive and erases what was there. Copy the files off first.'] }] },
    { title: 'Windows editions',
      show: [{ kind: 'document', form: 'table', title: 'What each Windows edition has', head: ['Edition', 'What it has'], rows: [
        { id: 'e1', cells: ['Home', 'No domain join, Remote Desktop host, BitLocker or gpedit.msc (some Home laptops have a simpler lock called device encryption). Up to 128 GB of memory.'] },
        { id: 'e2', cells: ['Pro', 'Adds domain join, Remote Desktop host, BitLocker and gpedit.msc. Up to 2 TB of memory.'] },
        { id: 'e3', cells: ['Pro for Workstations', 'Pro plus up to 6 TB of memory and ReFS.'] },
        { id: 'e4', cells: ['Enterprise', 'Pro plus extras for managing many computers. Up to 6 TB of memory.'] }] },
      { kind: 'prose', text: [
        'A workgroup is a few computers sharing with no central sign-in. A domain has one central list of accounts. Home joins only a workgroup.',
        'Any edition can connect out with Remote Desktop; only Pro and above can be connected to.',
        'N versions are sold without media features such as Media Player; a free Media Feature Pack adds them.'] }] },
    { title: 'Windows 11: requirements and upgrade paths',
      show: [{ kind: 'document', form: 'table', title: 'What Windows 11 needs', head: ['Part', 'Minimum'], rows: [
        { id: 'r1', cells: ['Processor', '64-bit, 1 GHz or faster, 2 or more cores, on Microsoft’s list'] },
        { id: 'r2', cells: ['Memory (RAM)', '4 GB'] },
        { id: 'r3', cells: ['Storage', '64 GB'] },
        { id: 'r4', cells: ['Firmware', 'UEFI firmware that is Secure Boot capable. Secure Boot lets only trusted start-up code run; it can be turned on once the firmware is in UEFI mode'] },
        { id: 'r5', cells: ['TPM', 'Version 2.0, a security chip that stores encryption keys. A TPM that cannot be found may only be turned off in the firmware'] },
        { id: 'r6', cells: ['Graphics', 'DirectX 12 compatible, with a WDDM 2.0 driver'] }] },
      { kind: 'prose', text: [
        'Check the list line by line. The PC Health Check app does it; msinfo32 shows the BIOS Mode and Secure Boot State, tpm.msc the TPM version.',
        'An in-place upgrade (Windows 10 to 11, Home to Pro) keeps files, apps and settings. Going down from Pro to Home, or from 32-bit to 64-bit, needs a clean install.'] }] },
    { title: 'Ways to install Windows',
      show: [{ kind: 'document', form: 'table', title: 'Installation kinds', head: ['Kind', 'What happens'], rows: [
        { id: 'i1', cells: ['Clean install', 'The drive is erased and Windows put on fresh.'] },
        { id: 'i2', cells: ['Upgrade (in place)', 'The new version goes over the old. Files, apps and settings stay.'] },
        { id: 'i3', cells: ['Image deployment', 'One prepared copy of Windows and apps goes on many computers.'] },
        { id: 'i4', cells: ['Remote network installation', 'Setup runs from a server.'] },
        { id: 'i5', cells: ['Zero-touch', 'The computer is ready at the user’s first sign-in; no technician touches it.'] },
        { id: 'i6', cells: ['Recovery partition', 'A hidden part of the drive holds the maker’s copy; using it returns the computer to how it shipped.'] },
        { id: 'i7', cells: ['Repair installation', 'Setup, run from inside a Windows that still starts, replaces the system files; the user’s files and apps stay.'] }] },
      { kind: 'prose', text: [
        'The installer can start from a USB drive, the network, an external drive, the internet or another partition. Two operating systems with a start-up menu is multiboot. The firmware’s boot order picks what is tried first.',
        'If setup shows no drives, load the maker’s drive-controller driver from a second USB drive.',
        'Recovery goes smallest first: Startup Repair, then System Restore or uninstalling the latest update, then a reset or repair installation, then a clean install. Copy files off first whenever they may be lost.'] }] },
    { title: 'Partitions and upgrading safely',
      show: [{ kind: 'document', form: 'table', title: 'MBR against GPT', head: ['Style', 'What to know'], rows: [
        { id: 'g1', cells: ['MBR', 'Older. Disks to 2 TB, four main partitions, Legacy start-up.'] },
        { id: 'g2', cells: ['GPT', 'Newer. Disks over 2 TB, 128 partitions, UEFI start-up. A new empty drive can simply be set up as GPT; Windows’s mbr2gpt tool converts a system disk without erasing it.'] }] },
      { kind: 'prose', text: [
        'A quick format wipes the list of files; a full format also checks the drive for bad spots and takes far longer.',
        'Before an upgrade: back up the files and note the preferences; check that apps and drivers work with the new version; check the hardware. A feature update comes about yearly; smaller updates each month close flaws.'] }] },
    { title: 'It runs now, so it will run Windows 11',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It runs Windows 10 fine and it has plenty of memory, so start the upgrade.”',
        'Run the requirements line by line, and back up first. Memory and disk are two lines: the firmware mode and the TPM can fail while the rest pass.'] }] },
    { title: 'What an application needs',
      show: [{ kind: 'document', form: 'table', title: 'Reading a program’s requirements', head: ['Requirement', 'What it means'], rows: [
        { id: 'a1', cells: ['32-bit or 64-bit', '64-bit Windows runs both kinds of program; 32-bit Windows runs only 32-bit ones and reaches at most 4 GB. On 64-bit Windows, 32-bit programs go in Program Files (x86).'] },
        { id: 'a2', cells: ['Integrated or dedicated graphics', 'Integrated graphics shares the main memory; dedicated is a separate card with its own.'] },
        { id: 'a3', cells: ['VRAM', 'The graphics card’s memory. Video and 3D programs list a minimum.'] },
        { id: 'a4', cells: ['RAM and CPU', 'The least it needs.'] },
        { id: 'a5', cells: ['Storage', 'Free space.'] },
        { id: 'a6', cells: ['External hardware token', 'A USB dongle the program looks for.'] },
        { id: 'a7', cells: ['Operating system', 'The versions it runs on.'] }] }] },
    { title: 'Getting a program onto the computers',
      show: [{ kind: 'document', form: 'table', title: 'Ways to distribute a program', head: ['Way', 'What to know'], rows: [
        { id: 'd1', cells: ['Physical media', 'A disc or USB drive, one computer at a time.'] },
        { id: 'd2', cells: ['Mountable ISO', 'A copy of a disc as a file. Open it and Windows shows a virtual drive.'] },
        { id: 'd3', cells: ['Downloadable package', 'An installer file or app store; many downloads at once load the network.'] },
        { id: 'd4', cells: ['Image deployment', 'The program is already in the image.'] }] },
      { kind: 'prose', text: [
        'Before a program goes out, weigh its impact on the device (space, memory, other programs), the network (a big download to many at once), operation (down time, training, other tools) and the business (cost, licenses, security, help-desk time).'] }] },
    { title: 'Cloud office tools',
      show: [{ kind: 'document', form: 'table', title: 'Cloud productivity tools', head: ['Tool', 'What to know'], rows: [
        { id: 'c1', cells: ['Email system', 'A hosted mailbox.'] },
        { id: 'c2', cells: ['Storage with sync', 'A folder kept the same as the cloud copy; its settings choose which folders stay on the computer. A delete there deletes the cloud copy too, though deleted files usually sit in the cloud recycle bin for a time.'] },
        { id: 'c3', cells: ['Collaboration', 'Documents, spreadsheets, slides, meetings and messaging, with several people in one file.'] },
        { id: 'c4', cells: ['Identity synchronization', 'The office directory’s accounts are copied to the cloud, so one sign-in works in both. If it stops, a changed password is unknown in the other place.'] },
        { id: 'c5', cells: ['License assignment', 'Each person needs a license assigned in the admin console; without one the app may open view-only (the wording varies by vendor). Remove it when someone leaves.'] }] }] },
    { worked: 'l22-w-eleven' },
    { set: { items: ['l22-p-domain', 'l22-p-usb', 'l22-p-eleven', 'l22-p-gfx'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l22-s-backup', 'l22-s-mbr', 'l22-s-bit', 'l22-s-fat', 'l22-s-image', 'l22-s-license', 'l22-s-rdp'], order: 'shuffle' } },
    { set: { items: ['l22-g-sync', 'l22-g-zero', 'l22-g-ram', 'l22-g-ext4', 'l22-g-dist', 'l22-g-bitlocker', 'l22-g-multi', 'l22-g-vram'], order: 'shuffle' } }
  ],
  check: {
    items: ['l22-k-path', 'l22-k-n', 'l22-k-fat4', 'l22-k-apfs', 'l22-k-tpm', 'l22-k-repair', 'l22-k-token', 'l22-k-identity'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
