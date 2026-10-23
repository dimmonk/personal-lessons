// IT Help Desk, lesson 21: Windows at the command line (part commands). The Microsoft command-line tools of the second A+ exam, taught by the job each does:
// navigation (cd, dir), disk (chkdsk, format, diskpart), files (md, rmdir, robocopy against copy), network (netstat, net use; ipconfig, ping, nslookup, tracert and
// pathping were taught with the connection chain in lesson 14 and come back only in mixed questions), information (hostname, whoami, winver, net user, [command] /?)
// and Windows management (gpupdate, gpresult, sfc), with the switches the exam uses and real-looking output to read. Which commands destroy data, and what to do before
// them (move 3: protect the user's data). Research: docs/research/it-support-aplus.md Core 2 1.5 (the whole objective); docs/research/it-support.md IT2, IT17
// (protect the data before touching anything), IT9 (one change at a time); rulings-l1-8.md 6 and 11 (confirm who is asking before an account is turned on or reset).
// Sources checked 2026-10-23: Microsoft diskpart clean reference (learn.microsoft.com/en-us/windows-server/administration/windows-commands/clean: clean overwrites only partition information, clean all zeroes every sector);
// Microsoft copy reference (technet.microsoft.com/en-us/cc771997: /v verifies, /y suppresses the overwrite prompt); a full format writing zeros is KB 941961 as quoted by forums (Microsoft page not reached), per rulings-l1-8.md 21.
// Output in the questions is invented: computer names, accounts and 192.168.x.x or 203.0.113.x addresses. One worked ticket (Rubina's unreadable D: drive: format is the
// first guess, copying first and a read-only check come before any repair); a first group of four with the deciding words marked; a second of fifteen; a third of five
// mixed with lesson 14; the check: eight new questions, no help, 7 of 8 to pass. Strands: cmd-net, cmd-disk, cmd-files, cmd-admin.
FC.lesson('it-support', {
  id: 'l21', part: 'commands', title: 'Windows at the command line', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the Windows command-line tools by the job each does: navigation, disk, files, network, information and management; the commands that destroy data).' }, { rev: 2, date: "2026-10-23", change: "Fixes from the learner and research reviews; names made unique across the subject and people called by name or they." }],
  why: [
    'Rubina in Accounting says the D: drive, where last year’s invoices are, will not open. Rubina’s cousin says to type format D: and start clean. Format would erase every invoice.',
    'Here you learn the Windows commands the exam tests: the job each does, its switches, how to read what it prints, and which destroy data.'],
  flow: [
    { title: 'The command window',
      show: [{ kind: 'prose', text: [
        'Command Prompt is a window where you type a command and press Enter. The line before your cursor, such as C:\\Users\\dana>, is the prompt; it shows your folder.',
        'A switch is an extra word after the command, starting with a slash, such as dir /a.',
        'Commands that change disks or Windows’ own files need an administrator window: right-click Command Prompt in the Start menu, choose Run as administrator. In an ordinary window they print “Access is denied”.'] }] },
    { title: 'Moving around: cd and dir',
      show: [{ kind: 'document', form: 'table', title: 'Navigation commands', head: ['Command', 'What it does'], rows: [
        { id: 'n1', cells: ['cd C:\\Users', 'Change to that folder (cd is change directory; a directory is a folder)'] },
        { id: 'n2', cells: ['cd ..', 'Go up one folder'] },
        { id: 'n3', cells: ['cd \\', 'Go to the top of the drive'] },
        { id: 'n4', cells: ['cd /d D:\\Data', 'Change folder and drive at once. Plain cd D:\\Data at a C: prompt only remembers the folder on D: and stays on C:'] },
        { id: 'n5', cells: ['D:', 'Switch drive by typing its letter and a colon'] },
        { id: 'n6', cells: ['dir', 'List the files and folders in the current folder'] },
        { id: 'n7', cells: ['dir /a', 'Include hidden and system files'] },
        { id: 'n8', cells: ['dir /s', 'Include subfolders too'] },
        { id: 'n9', cells: ['dir /w', 'List the names across the screen'] }] },
      { kind: 'prose', text: [
        'In a dir listing, <DIR> marks a folder, and the last two lines count the files and folders and give the free space on the drive in bytes.'] }] },
    { title: 'Checking a drive: chkdsk',
      show: [{ kind: 'document', form: 'table', title: 'chkdsk checks a drive’s file system (the list of what is where)', head: ['Command', 'What it does'], rows: [
        { id: 'k1', cells: ['chkdsk D:', 'Reads only'] },
        { id: 'k2', cells: ['chkdsk D: /f', 'Fixes the errors it finds'] },
        { id: 'k3', cells: ['chkdsk D: /r', 'Also looks for bad sectors (damaged spots) and recovers what it can read. Includes /f; takes a long time'] }] },
      { kind: 'prose', text: [
        'chkdsk needs an administrator window. On the drive Windows runs from, it prints “Cannot lock current drive” and offers to run at the next restart: answer Y and restart; the check runs before Windows loads. A plain chkdsk that finds errors prints “Errors found. CHKDSK cannot continue in read-only mode.”: rerun it with /f.'] }] },
    { title: 'Erasing a drive: format and diskpart',
      show: [{ kind: 'document', form: 'table', title: 'Two commands that prepare a drive', head: ['Command', 'What it does'], rows: [
        { id: 'f1', cells: ['format D: /q', 'Writes a new file system, so the drive looks empty (/fs:ntfs picks it). With /q (quick) the old data stays where recovery tools can find it; without /q the drive is overwritten with zeros. Windows warns “ALL DATA ... WILL BE LOST!”'] },
        { id: 'f2', cells: ['diskpart', 'Opens its own prompt, DISKPART>, for whole disks and their partitions (slices of a disk)'] }] },
      { kind: 'document', form: 'table', title: 'Inside diskpart', head: ['Type', 'What it does'], rows: [
        { id: 'g1', cells: ['list disk', 'Lists disks by number and size'] },
        { id: 'g2', cells: ['select disk 2', 'Aims later commands at disk 2'] },
        { id: 'g3', cells: ['clean', 'Removes the partition information from the selected disk, so Windows sees nothing; tools can still recover the data. clean all writes zeros over every sector'] },
        { id: 'g4', cells: ['create partition primary', 'Makes one partition of the whole disk'] },
        { id: 'g5', cells: ['format fs=ntfs quick', 'Writes the file system on it'] },
        { id: 'g6', cells: ['assign letter=E', 'Gives it a drive letter. exit leaves diskpart'] }] },
      { kind: 'prose', text: [
        'Tell disks apart by size, not position.'] }] },
    { title: 'Commands that cannot be undone',
      show: [{ kind: 'document', form: 'table', title: 'What each destroys', head: ['Command', 'What goes'], rows: [
        { id: 'x1', cells: ['format', 'Everything on the drive, as far as Windows can see; the wrong letter erases the wrong drive'] },
        { id: 'x2', cells: ['diskpart, clean', 'Every partition on the selected disk, so every file vanishes; the wrong disk number is the usual mistake'] },
        { id: 'x3', cells: ['rmdir /s', 'A folder and everything in it; deletes here skip the Recycle Bin'] },
        { id: 'x4', cells: ['robocopy /mir', 'Anything in the destination that is not in the source'] },
        { id: 'x5', cells: ['net user name /delete', 'The account; a new one with the same name is a different account'] }] },
      { kind: 'prose', text: [
        'Before any of these, copy the files somewhere that works, read the drive letter or disk number twice (by size) and change one thing at a time. A drive that clicks is failing: copy what matters off and replace it; chkdsk /r reads every sector, so it is not the next step.'] }] },
    { title: 'Folders and files',
      show: [{ kind: 'document', form: 'table', title: 'File commands', head: ['Command', 'What it does'], rows: [
        { id: 'm1', cells: ['md C:\\Reports\\2026', 'Make a folder (md is make directory); it makes missing folders on the way too'] },
        { id: 'm2', cells: ['rmdir C:\\OldReports', 'Remove an empty folder. A full one gets “The directory is not empty.”'] },
        { id: 'm3', cells: ['rmdir /s /q C:\\OldReports', 'Remove the folder and everything in it (/s) without asking (/q)'] },
        { id: 'm4', cells: ['robocopy C:\\Docs E:\\Backup /e', 'Copy a folder with all its subfolders, empty ones too'] },
        { id: 'm5', cells: ['robocopy C:\\Docs E:\\Backup /mir', 'Mirror: copy, and delete from the destination what the source lacks'] },
        { id: 'm6', cells: ['copy a.txt E:\\Backup /v /y', 'The older command, for one folder’s files. /v checks the copy was written correctly; /y overwrites without asking'] }] },
      { kind: 'document', form: 'table', title: 'robocopy against copy', head: ['Compared on', 'copy', 'robocopy'], rows: [
        { id: 'r1', cells: ['Subfolders', 'One folder’s files only', 'Subfolders too, with /e'] },
        { id: 'r2', cells: ['A failure', 'Has no retry setting', 'Retries, moves on, counts what failed'] },
        { id: 'r3', cells: ['Next run', 'Copies everything again', 'Skips files already the same: copies only changes'] }] },
      { kind: 'prose', text: [
        'robocopy retries a failed file a million times by default; /r:3 /w:5 limits that to three retries, five seconds apart. Its summary counts Copied, Skipped, FAILED and Extras (files only in the destination).'] }] },
    { title: 'Network: netstat and net use',
      show: [{ kind: 'document', form: 'table', title: 'Two more network commands', head: ['Command', 'What it does'], rows: [
        { id: 'w1', cells: ['netstat -an', 'Lists connections and the ports waiting for one (-a is all, -n shows numbers, not names)'] },
        { id: 'w2', cells: ['netstat -ano', 'Adds each program’s process ID (PID); find it on Task Manager’s Details tab'] },
        { id: 'w3', cells: ['net use', 'Lists the drive letters mapped to shared folders'] },
        { id: 'w4', cells: ['net use Z: \\\\fileserver\\Sales', 'Map Z: to the Sales folder on the server fileserver'] },
        { id: 'w5', cells: ['net use Z: /delete', 'Remove the mapping'] }] },
      { kind: 'prose', text: [
        'In netstat, LISTENING means the computer is waiting for connections on that port and ESTABLISHED means a conversation is open now. In net use, Unavailable means the mapping is still there but the share does not answer. Port 3389 is Remote Desktop.'] }] },
    { title: 'Who and what',
      show: [{ kind: 'document', form: 'table', title: 'Information commands', head: ['Command', 'What it does'], rows: [
        { id: 'i1', cells: ['hostname', 'Prints the computer’s name'] },
        { id: 'i2', cells: ['whoami', 'Prints the account you are signed in as, such as corp\\dana. /groups lists its groups'] },
        { id: 'i3', cells: ['winver', 'Opens a window with the Windows edition, version and build number'] },
        { id: 'i4', cells: ['net user', 'Lists the accounts on this computer'] },
        { id: 'i5', cells: ['net user dana', 'Shows one account: active or not, when its password last changed, its groups'] },
        { id: 'i6', cells: ['net user dana /active:no', 'Turns the account off (/active:yes on). net user dana * prompts for a new password. Needs an administrator window'] },
        { id: 'i7', cells: ['command /?', 'Prints a command’s switches, such as robocopy /?'] }] },
      { kind: 'prose', text: [
        'Before turning an account on or choosing a new password, confirm the caller by the desk’s own check (the number on file, the directory), never by what the caller supplies.'] }] },
    { title: 'Managing Windows',
      show: [{ kind: 'prose', text: [
        'Group Policy is the rules a company keeps on a central server for its computers and users, such as a screen lock or blocked USB drives.'] },
      { kind: 'document', form: 'table', title: 'Management commands', head: ['Command', 'What it does'], rows: [
        { id: 'a1', cells: ['gpupdate', 'Refreshes Group Policy now, applying what has changed'] },
        { id: 'a2', cells: ['gpupdate /force', 'Reapplies every policy, changed or not'] },
        { id: 'a3', cells: ['gpresult /r', 'Reports which policies applied to this computer and user, and lists those filtered out with the reason, such as Denied (Security). Changes nothing'] },
        { id: 'a4', cells: ['sfc /scannow', 'System File Checker: replaces damaged protected system files with a stored good copy. Needs an administrator window'] }] },
      { kind: 'document', form: 'table', title: 'What sfc /scannow can say', head: ['It prints', 'It means'], rows: [
        { id: 'e1', cells: ['Windows Resource Protection did not find any integrity violations.', 'No damaged files'] },
        { id: 'e2', cells: ['Windows Resource Protection found corrupt files and successfully repaired them.', 'Fixed; restart'] },
        { id: 'e3', cells: ['Windows Resource Protection found corrupt files but was unable to fix some of them.', 'Some remain. The log, CBS.log, names them; scanning again changes nothing, so replace the file by hand or hand the ticket on with the log'] }] },
      { kind: 'prose', text: [
        'sfc checks Windows’ own files; chkdsk checks a drive’s file system.'] }] },
    { title: 'Unreadable, so format it',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“D: will not open, so I will format it. That clears whatever is wrong.”',
        'It clears the files too, and deletes from Command Prompt skip the Recycle Bin. A drive that will not open may have a damaged file system, which chkdsk repairs. Copy off what you can read first, run chkdsk with no switches, then change one thing.'] }] },
    { worked: 'l21-w-dana' },
    { set: { items: ['l21-p-chkdsk', 'l21-p-map', 'l21-p-copy', 'l21-p-who'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l21-s-format', 'l21-s-diskpart', 'l21-s-chkdsk-c', 'l21-s-chkdsk-r', 'l21-s-sfc', 'l21-s-gpresult', 'l21-s-netstat', 'l21-s-netuse', 'l21-s-rmdir', 'l21-s-robo', 'l21-s-cd', 'l21-s-netuser', 'l21-x-call', 'l21-r-chkdsk', 'l21-r-gpupdate'], order: 'shuffle' } },
    { set: { items: ['l21-g-flush', 'l21-g-elevate', 'l21-g-destroy', 'l21-g-windows', 'l21-g-dir'], order: 'shuffle', mix: { from: ['l14'], share: 0.3 } } }
  ],
  check: {
    items: ['l21-k-netstat', 'l21-k-netuse', 'l21-k-diskpart', 'l21-k-chkdsk', 'l21-k-robo', 'l21-k-dirfree', 'l21-k-gpresult', 'l21-k-sfc'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
