// IT Help Desk, lesson 21 "Windows at the command line": twelve questions held in reserve for the weekly review, three for each of cmd-net, cmd-disk, cmd-files and cmd-admin.
// Facts as in items-l21.js (A+ map Core 2 1.5). Names and addresses are invented.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const WIPED = 'wiped-data', DISK = 'wrong-disk', ADM = 'no-admin', FLAG = 'wrong-flag', TOOL = 'wrong-tool', NB = 'no-backup', MIS = 'misread-output', CAUSE = 'wrong-cause', RESET = 'reset-shared';
  const NET = 'cmd-net', DSK = 'cmd-disk', FIL = 'cmd-files', ADMIN = 'cmd-admin';

  FC.items('it-support', [
    // ----- cmd-net -----
    chat('l21-r-netstat-pid', NET, 'Dev, Security',
      'The antivirus flagged a connection from this computer to 203.0.113.77 and I need the program behind it. I have the netstat output, but it only shows addresses.',
      'Which switch adds the process ID of each connection?', [
        ['netstat -ano, where the o adds the process ID', true, 'The process ID can then be looked up in Task Manager to name the program.'],
        ['netstat -an, where the n adds the process ID', FLAG, '-n only shows numbers instead of names. It adds no process ID.'],
        ['netstat /?, which prints the process ID of every connection', FLAG, '/? prints help for the command. It lists no connections.'],
        ['tracert 203.0.113.77, which names the program on the way', TOOL, 'tracert lists routers, not the programs on this computer.']],
      'netstat -a lists all connections and listening ports, -n shows numbers, and -o adds the PID, the process ID of the program behind each line.'),
    chat('l21-r-netuse-delete', NET, 'Ruth, Finance',
      'My Y: drive points to a share that no longer exists. I want the letter gone from my computer so I can use it for a USB drive.',
      'Which command removes the mapping?', [
        ['net use Y: /delete', true, 'net use with /delete removes a mapped drive, and the letter is free again.'],
        ['rmdir Y: to take the letter away', WIPED, 'rmdir removes folders. It does not remove the mapping.'],
        ['format Y: /q to clear the letter', WIPED, 'format would erase what the mapping points at, if it let Ruth.'],
        ['netstat Y: to drop the connection', TOOL, 'netstat lists connections. It cannot remove one.']],
      'net use Y: /delete removes only the mapping. The files on the server are untouched.'),
    recall('l21-r-netstat', NET, 'Which command lists a computer’s open connections and the ports it is waiting on?', ['netstat'],
      'netstat lists the connections (ESTABLISHED) and the ports waiting for one (LISTENING). -a shows all, -n shows numbers, -o adds the process ID.'),

    // ----- cmd-disk -----
    chat('l21-r-format-q', DSK, 'Gil, Depot',
      'I have to reformat a 4 GB USB stick for reuse. I typed format E: and it is taking a long while. A colleague says there is a faster switch.',
      'Which switch does a quick format?', [
        ['/q, which skips the full check of the drive', true, 'A quick format writes the new file system without scanning every sector.'],
        ['/f, which makes the format finish earlier', FLAG, '/f is how chkdsk fixes errors. It is not the quick switch of format.'],
        ['/r, which formats only the readable parts', FLAG, '/r is how chkdsk looks for bad sectors. It is not the quick switch of format.'],
        ['/s, which includes the subfolders and goes faster', FLAG, '/s is how dir and rmdir take in subfolders. It is not the quick switch of format.']],
      'format /q is the quick format: the drive looks empty but the old data stays recoverable. Without /q the drive is overwritten with zeros. Either way the drive letter is confirmed first.'),
    recall('l21-r-chkdsk-r', DSK, 'Which chkdsk switch looks for bad sectors, recovers what it can read, and includes the fixing that /f does? Type the switch.', ['[chkdsk] /r'],
      '/r locates bad sectors and recovers readable data. It includes /f and takes a long time, so a drive that may be failing is copied first.'),
    chat('l21-r-diskpart-after', DSK, 'Una, Depot',
      'I selected the right disk in diskpart and typed clean. Now Disk Management shows the disk as Not Initialized. I want it to be a usable E: drive again.',
      'What comes next in diskpart?', [
        ['create partition primary, format fs=ntfs quick, assign letter=E', true, 'A cleaned disk has no partition. It gets one, a file system, and a letter.'],
        ['select disk 0, then clean again to be sure it is empty', DISK, 'The disk is already empty. Disk 0 may be the Windows drive.'],
        ['chkdsk E: /f, to find the missing drive', NB, 'There is no E: yet. chkdsk checks a drive that exists.'],
        ['sfc /scannow, to restore the partition from Windows’ copy', TOOL, 'sfc checks Windows’ system files. It does not make partitions.']],
      'After clean, Windows sees no partitions (the data itself is not erased). create partition primary makes a partition across it, format puts a file system on it, and assign gives it a letter.'),

    // ----- cmd-files -----
    chat('l21-r-md', FIL, 'Pat, Admin',
      'I need the folders C:\\Reports\\2026\\March made before a user arrives. None of the three exists yet.',
      'Which command makes all three?', [
        ['md C:\\Reports\\2026\\March, which also makes the missing folders', true, 'md makes the folder and any missing folders along the path.'],
        ['cd C:\\Reports\\2026\\March, which makes the path as it goes there', TOOL, 'cd only moves into folders that already exist.'],
        ['rmdir C:\\Reports\\2026\\March, which makes it ready for the user', TOOL, 'rmdir removes folders. It never makes one.'],
        ['dir C:\\Reports\\2026\\March, which makes the path to look at', TOOL, 'dir lists a folder. It makes nothing.']],
      'md means make directory, and a directory is a folder. With the path typed in full it makes every missing folder in it.'),
    chat('l21-r-dir-s', FIL, 'Ed, Legal',
      'I need every file named contract.pdf somewhere under C:\\Contracts, in any subfolder. File Explorer is too slow on this old machine.',
      'Which switch makes dir look in the subfolders too?', [
        ['dir C:\\Contracts\\contract.pdf /s', true, '/s includes the subfolders, so every folder under C:\\Contracts is searched.'],
        ['dir C:\\Contracts\\contract.pdf /a', FLAG, '/a adds hidden and system files. It does not search subfolders.'],
        ['dir C:\\Contracts\\contract.pdf /w', FLAG, '/w only changes how the names are laid out.'],
        ['cd C:\\Contracts\\contract.pdf /s', TOOL, 'cd changes folder. It does not search.']],
      'dir /s walks into every subfolder. /a is hidden files and /w is the wide layout.'),
    recall('l21-r-robocopy', FIL, 'Which command copies whole folder trees, retries failed files, skips what is already the same, and prints a summary at the end?', ['robocopy'],
      'robocopy, robust file copy, is built for folders: it retries, copies only the changes on a second run, and reports copied, skipped, failed and extra.'),

    // ----- cmd-admin -----
    chat('l21-r-sfc-admin', ADMIN, 'Ben, Marketing',
      'I typed sfc /scannow as you told me. It printed: You must be an administrator running a console session in order to use the sfc utility.',
      'What does Ben do?', [
        ['Open Command Prompt with Run as administrator and retype it', true, 'sfc changes protected files, so it needs an administrator window.'],
        ['Type SFC /SCANNOW in capital letters instead', MIS, 'The message is about rights, not capital letters.'],
        ['Run chkdsk C: /f first, which gives Ben the rights', ADM, 'chkdsk needs the same administrator window. It gives no rights.'],
        ['Add sfc through Windows Features, as it is not installed', CAUSE, 'sfc is part of Windows. The message says the rights are the problem.']],
      'An ordinary window cannot run commands that change system files or disks. The title bar of an administrator window says Administrator: Command Prompt.'),
    recall('l21-r-whoami', ADMIN, 'Which command prints the account you are signed in as, such as corp\\dana?', ['whoami'],
      'whoami prints the signed-in account, with its domain or computer name first. whoami /groups lists the groups it belongs to.'),
    chat('l21-r-winver', ADMIN, 'Kim, Reception',
      'The software installer says it needs Windows version 24H2 or newer. I do not know which one my computer has.',
      'Which command shows the version?', [
        ['winver, which opens a window with the version and build', true, 'winver shows the version number the installer needs.'],
        ['hostname, which prints the version after the computer’s name', TOOL, 'hostname prints only the computer’s name.'],
        ['whoami, which prints the version beside the account', TOOL, 'whoami prints only the account name.'],
        ['gpresult /r, which lists the Windows version at the top', TOOL, 'gpresult reports which policies applied. It is not a version tool.']],
      'winver opens a small window with the edition, version and build number. The window is on the screen, not printed in the command window.')
  ]);
})();
