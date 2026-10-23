// IT Help Desk, lesson 21 "Windows at the command line": the eight new questions of the check (two for each of cmd-net, cmd-disk, cmd-files, cmd-admin), none shown in the
// groups. Facts as in items-l21.js (A+ map Core 2 1.5). Names, accounts and addresses are invented.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const out = (pre, title, lines) => table(title, ['What the computer prints'], lines.map((l, i) => [pre + (i + 1), l]));
  const WIPED = 'wiped-data', DISK = 'wrong-disk', FLAG = 'wrong-flag', TOOL = 'wrong-tool', MIS = 'misread-output', GUESS = 'kept-guessing', NOSPLIT = 'no-split', CAUSE = 'wrong-cause', PART = 'part-first';
  const NET = 'cmd-net', DSK = 'cmd-disk', FIL = 'cmd-files', ADMIN = 'cmd-admin';
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], reason });

  FC.items('it-support', [
    item({
      id: 'l21-k-netstat', strand: NET,
      blocks: [
        chat('Ola, Security', 'o1', 'A manager saw a strange program send data out. One connection on this computer goes to 203.0.113.99. Which program is behind it?'),
        out('a', 'C:\\> netstat -ano', ['  Proto  Local Address          Foreign Address        State           PID', '  TCP    192.168.1.42:50188     203.0.113.99:443       ESTABLISHED     5124', '  TCP    192.168.1.42:50201     203.0.113.20:443       ESTABLISHED     3380'])],
      asks: [ask('What is the next step to name the program?', [
        ['Look up process ID 5124 on Task Manager’s Details tab, the one on that line', true, 'netstat -ano prints the process ID of the program behind each connection. The Details tab of Task Manager turns that number into a program name.'],
        ['Run tracert 203.0.113.99, where each router on the way names the program', TOOL, 'tracert lists the routers on the way. It says nothing about which program on this computer is talking.'],
        ['Run ipconfig /all, where the adapter lists the program using each connection', TOOL, 'ipconfig /all prints the adapter’s settings, not the programs that use the connection.'],
        ['Look up process ID 3380 on Task Manager’s Details tab, the last to connect', MIS, 'The row to 203.0.113.99 ends in 5124. 3380 belongs to the other connection.']])],
      deciding: ['a2', 'a3'],
      reason: 'The PID column ties each connection to a running program. The line to 203.0.113.99 ends in 5124, so that process is the one to look up in Task Manager; the other line is a different program.' }),
    say('l21-k-netuse', NET, 'Which command connects a drive letter, such as Z:, to a shared folder on a server?', 'Type the command.', ['net use'],
      'net use maps a drive letter to a shared folder: net use Z: \\\\fileserver\\Sales. net use alone lists the mappings.'),
    item({
      id: 'l21-k-diskpart', strand: DSK,
      blocks: [
        chat('Bea, Depot', 'b1', 'The USB stick for installs held client contracts on its last job, and its owner agrees the contents can go. I ran select disk 2, the 58 GB one, then clean, and Windows now shows the stick as empty. Is it wiped for the next job?')],
      asks: [ask('Is the stick wiped?', [
        ['Not fully: clean removed the partitions, and tools can still recover the contracts; clean all zeroes every sector', true, 'clean removes the way to find the files, not the files. For private data the disk is overwritten with clean all, or destroyed.'],
        ['Yes: Windows sees nothing on it and nothing is left to recover', MIS, 'Windows sees nothing because the partition information is gone. The data is still on the disk until it is written over.'],
        ['Not fully: run format E: /q, which overwrites the files', WIPED, 'A quick format also leaves the data in place. Only a format without /q, or clean all, writes zeros.'],
        ['Yes, once the stick is unplugged and plugged in again', NOSPLIT, 'Plugging it in again changes nothing on the disk.']])],
      deciding: ['b1'],
      reason: 'clean removes the partitions from the selected disk, so Windows sees an empty disk, but the contracts can be recovered with tools. A real wipe is clean all (zeros every sector) or destroying the stick.' }),
    item({
      id: 'l21-k-chkdsk', strand: DSK,
      blocks: [
        chat('Cy, Logistics', 'c1', 'One file on my D: drive will not open, but the other files do. I ran chkdsk D: and pasted what it said.'),
        out('a', 'C:\\> chkdsk D:', ['The type of the file system is NTFS.', 'Stage 1: Examining basic file system structure ...', 'Windows has scanned the file system and found no problems.', 'No further action is required.'])],
      asks: [ask('What does this tell you, and what next?', [
        ['The file system is sound (bad sectors were not tested); test the file, its program and its permissions', true, 'No problems found means a file system repair has nothing to fix, so the cause is somewhere else. Plain chkdsk does not look for bad sectors; /r does.'],
        ['Run chkdsk D: /f anyway; there must be something wrong with the drive', GUESS, '/f repairs errors it finds. It found none, so the repair has nothing to change.'],
        ['Format D: to be sure the drive is clean, then copy the file back', WIPED, 'The other files on D: open, and a format would erase them for a problem with one file.'],
        ['Run sfc /scannow, which also checks the files on the D: drive', TOOL, 'sfc checks Windows’ own files, not the files on another drive.']])],
      deciding: ['a3', 'a4'],
      reason: '“Found no problems” is the all-clear for D:’s file system. One file that will not open while the rest do points at that file, the program opening it or the permissions on it, so test those next with the cheapest test.' }),
    item({
      id: 'l21-k-robo', strand: FIL,
      blocks: [chat('Tia, Studio', 't1', 'I want my E: backup to hold everything in C:\\Work, including subfolders. A file I delete from C:\\Work must never disappear from E:\\Backup.')],
      asks: [ask('Which command fits?', [
        ['robocopy C:\\Work E:\\Backup /e', true, '/e copies every subfolder and removes nothing from the destination.'],
        ['robocopy C:\\Work E:\\Backup /mir', WIPED, '/mir deletes from the backup whatever is no longer in C:\\Work, the opposite of Tia’s rule.'],
        ['copy C:\\Work E:\\Backup', TOOL, 'copy takes the files of one folder, not the subfolders.'],
        ['rmdir /s E:\\Backup, then copy C:\\Work to it', WIPED, 'That deletes the old backup first, then copies. Nothing is kept from before.']])],
      deciding: ['t1'],
      reason: 'The two needs are subfolders included and nothing deleted from the backup. robocopy /e does both; /mir deletes extras, copy skips subfolders, and deleting the backup first loses it.' }),
    item({
      id: 'l21-k-dirfree', strand: FIL,
      blocks: [
        chat('Cara, Studio', 'c1', 'I need to put a 300 GB video backup on C:. Does it fit? I ran dir in the folder where I want to put it.'),
        out('a', 'C:\\> dir C:\\Contracts', [' Directory of C:\\Contracts', '10/02/2026  09:14 AM    <DIR>          2026', '10/02/2026  09:15 AM            48,210 notes.txt', '               1 File(s)         48,210 bytes', '               1 Dir(s)  412,318,203,904 bytes free'])],
      asks: [ask('Does it fit?', [
        ['Yes: the last line shows about 384 GB free on the drive', true, 'The last line of dir gives the free space on the drive, 412,318,203,904 bytes, which is 384 GB as Windows counts it.'],
        ['No: the line before it shows only 48,210 bytes', MIS, '48,210 bytes is the size of the files in this folder. Free space is the line below it.'],
        ['No: dir shows only one folder, so only one folder’s worth fits', MIS, 'The count of folders is what is inside C:\\Contracts. It does not limit the drive.'],
        ['It cannot be told from dir; run chkdsk to find the free space', TOOL, 'dir already prints the free space, and chkdsk checks a drive’s file system.']])],
      deciding: ['a5'],
      reason: 'dir ends with a count of the files and folders in that directory and the free space left on the drive. 412,318,203,904 bytes is 384 GB, more than the 300 GB backup needs.' }),
    item({
      id: 'l21-k-gpresult', strand: ADMIN,
      blocks: [
        chat('Zed, Help desk', 'z1', 'The new Block USB Storage policy went out on October 23 at 10:00. A user says it is not blocking his laptop. I ran gpresult /r on it at noon the same day.'),
        out('a', 'C:\\> gpresult /r', ['Last time Group Policy was applied: 10/21/2026 at 8:03:15 AM', 'COMPUTER SETTINGS', '    Applied Group Policy Objects', '        Default Domain Policy', '        Workstation Lockdown'])],
      asks: [ask('What does it show, and what next?', [
        ['It last refreshed two days ago, before the change; run gpupdate /force and look again', true, 'The new policy is not listed, and the last refresh was October 21. It has not yet picked up October 23’s change.'],
        ['The policy is wrong: it is missing from the list of applied ones', MIS, 'It is missing because this laptop has not refreshed since before the policy was made, not because the policy is wrong.'],
        ['The policy was filtered out for this user, so change who it applies to', MIS, 'Nothing in the report says filtered out. Filtered policies are listed separately.'],
        ['Reinstall Windows on the laptop so it picks up the policy', PART, 'No test has shown anything wrong with Windows. A refresh costs a minute.']])],
      deciding: ['a1', 'a4', 'a5'],
      reason: 'Last time Group Policy was applied is two days before the policy existed, and the list shows no Block USB Storage. The cheapest change is gpupdate /force, then gpresult /r again to see whether the policy is listed.' }),
    say('l21-k-sfc', ADMIN, 'What is the full command that scans Windows’ protected system files and replaces damaged ones?', 'Type the command with its switch.', ['sfc /scannow'],
      'sfc /scannow runs System File Checker in an administrator window. It replaces damaged protected system files from a stored good copy.')
  ]);
})();
