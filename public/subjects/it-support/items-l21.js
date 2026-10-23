// IT Help Desk, lesson 21 "Windows at the command line" (part commands): the worked ticket and the three groups of questions. Research: docs/research/it-support-aplus.md
// Core 2 1.5 (cd, dir; ipconfig, ping, netstat, nslookup, net use, tracert, pathping; chkdsk, format, diskpart; md, rmdir, robocopy; hostname, net user, winver, whoami,
// [command] /?; gpupdate, gpresult, sfc); docs/research/it-support.md IT2, IT17 (protect the data first), IT9 (one change at a time); rulings-l1-8.md 6 and 11 (who is
// asking). Computer names, accounts and addresses in the output are invented (192.168.x.x for the office; 203.0.113.x for outside). Strands: cmd-net, cmd-disk,
// cmd-files, cmd-admin. The earlier network lesson's commands (ipconfig, ping, nslookup, tracert) are asked only in the mixed group.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const out = (pre, title, lines) => table(title, ['What the computer prints'], lines.map((l, i) => [pre + (i + 1), l]));
  const WIPED = 'wiped-data', DISK = 'wrong-disk', ADM = 'no-admin', FLAG = 'wrong-flag', TOOL = 'wrong-tool', NB = 'no-backup', MIS = 'misread-output',
    NOSPLIT = 'no-split', IDC = 'no-id-check', CAUSE = 'wrong-cause', PART = 'part-first', RESET = 'reset-shared', GUESS = 'kept-guessing';
  const NET = 'cmd-net', DSK = 'cmd-disk', FIL = 'cmd-files', ADMIN = 'cmd-admin';
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], reason });

  FC.items('it-support', [
    // ----- the worked ticket: format is the first guess; copy first, read-only check, then one repair -----
    item({
      id: 'l21-w-dana', strand: DSK,
      blocks: [
        chat('Rubina, Accounting', 'd1', 'My D: drive, where all of last year’s invoices are, will not open. It says the file or directory is corrupted and unreadable. I have no other copy. My cousin says to just format it and start clean.'),
        note('Commands you can use: robocopy, chkdsk, format. A working USB drive, E:, is plugged in with plenty of room.')],
      asks: [ask('Which step comes first?', [
        ['Copy off what can still be read, to the working USB drive', true, 'Rubina has no other copy. Copying changes nothing on D: and puts the invoices somewhere safe before any repair or erase.'],
        ['Format D: so the drive is clean, then start the year’s invoices again', WIPED, 'Format erases every invoice on the drive, and it is the one command that can never be right while the files exist only here.'],
        ['Run chkdsk D: /r first, which repairs the drive and recovers the data', NB, 'A repair run changes the drive, and a long scan of a damaged one can lose files. The copy comes first.'],
        ['Tell Rubina the drive is dead and order a new one', PART, 'Nothing has shown the drive is dead, and a new one would not bring the invoices back.']])],
      steps: [
        { id: 'story', does: 'Take the story and the guess. Rubina has the only copy, and Rubina’s cousin’s guess is format.', working: 'Format erases the drive and is aimed at the files that matter most. The guess is put aside until the files are safe.' },
        { id: 'protect', does: 'Protect the data first: robocopy D:\\ E:\\Rescue /e /r:1 /w:1 in an administrator window.', working: 'robocopy copies every folder it can read, and with one retry and one second of waiting it does not stall on a bad file. The report says 1,904 files copied, 0 failed. A drive failing under the read would have shown failed files. System Volume Information and $RECYCLE.BIN may show as failures; they are not Rubina’s files.', ask: 'a' },
        { id: 'guess', does: 'Test the other favorite cause, a failing drive, with the cheapest read-only check: chkdsk D: with no switches.', working: 'It prints “Errors found. CHKDSK cannot continue in read-only mode.” The file system has errors, and every file still read, so the drive itself is not shown to be failing. Replacing it is not supported by anything seen.' },
        { id: 'fix', does: 'One change: chkdsk D: /f, in the administrator window.', working: 'chkdsk fixes the file system errors it found and reports it is done. Nothing else was changed at the same time.' },
        { id: 'confirm', does: 'Check with Rubina, then write it up.', working: 'D: opens and the invoices are there. Rubina confirms. The note holds Rubina’s words, the error text, the copy to E:, the read-only report and the /f repair; the rescue copy stays until Rubina is happy.' }],
      deciding: ['d1'],
      reason: 'The only copy of the invoices was on the drive, so the files were protected before anything else, and the favorite fix, format, was kept out. A read-only chkdsk then showed file system errors rather than a failing drive, and a single /f repair, one change at a time, fixed them.' }),

    // ----- group 1: the deciding words marked -----
    item({
      id: 'l21-p-chkdsk', strand: DSK,
      blocks: [
        chat('Marcel, Operations', 'r1', 'My second drive, E:, keeps saying files are unreadable. I copied my work off it this morning.'),
        out('a', 'C:\\> chkdsk E:', ['The type of the file system is NTFS.', 'Stage 1: Examining basic file system structure ...', 'Errors found.  CHKDSK cannot continue in read-only mode.'])],
      asks: [ask('The work is copied off. Which command fixes the errors?', [
        ['Run chkdsk E: /f, which fixes the file system errors it finds', true, 'Without a switch chkdsk only reads. /f makes it fix what it found.'],
        ['Run chkdsk E: again; a second read-only pass may fix them', NOSPLIT, 'A read-only pass changes nothing, so it will print the same report.'],
        ['Run format E: /q, which clears the errors by erasing the drive', WIPED, 'The drive can be repaired, so erasing it does more than the job needs.'],
        ['Run sfc /scannow, which repairs the files on every drive it finds', TOOL, 'sfc checks Windows’ own system files, not another drive’s file system.']])],
      deciding: ['a3'],
      reason: 'Errors found in read-only mode is chkdsk saying it saw damage and was not allowed to fix it. chkdsk E: /f, in an administrator window, repairs the file system. The files were copied off first, so a repair is safe to try.' }),
    item({
      id: 'l21-p-map', strand: NET,
      blocks: [chat('Elias, Sales', 'l1', 'I need the Sales folder on the file server to show up as drive Z: on my laptop. The server is called fileserver and the shared folder is Sales.')],
      asks: [ask('Which command does that?', [
        ['Type net use Z: \\\\fileserver\\Sales', true, 'net use maps a drive letter to a shared folder on a server.'],
        ['Type cd Z: \\\\fileserver\\Sales to move to the folder', TOOL, 'cd moves around folders the computer already has. It does not create a drive letter.'],
        ['Type dir \\\\fileserver\\Sales to open it as drive Z:', TOOL, 'dir lists a folder but gives it no drive letter.'],
        ['Type netstat Z: \\\\fileserver\\Sales to list the connection', TOOL, 'netstat lists connections and ports. It does not make one.']])],
      deciding: ['l1'],
      reason: 'Mapping a drive letter to a shared folder is the job of net use. The pattern is net use, the letter, then the server and share name; net use alone lists what is mapped and /delete removes one.' }),
    item({
      id: 'l21-p-copy', strand: FIL,
      blocks: [chat('Jocelyn, Design', 'o1', 'Each evening I must copy my whole Projects folder, with all its subfolders, to the server share. The Wi-Fi drops now and then, and the copy I use gives me no list of what got there.')],
      asks: [ask('Which command fits?', [
        ['robocopy C:\\Projects \\\\fileserver\\Backup /e /r:3 /w:5', true, 'robocopy copies folders with their subfolders, retries a failed file, and prints a summary of what copied and what failed.'],
        ['copy C:\\Projects \\\\fileserver\\Backup /v, then check the result', TOOL, 'copy takes the files of one folder, not the subfolders, and has no retry setting or summary.'],
        ['md \\\\fileserver\\Backup\\Projects, then drop the files in', TOOL, 'md only makes an empty folder. Nothing would be copied into it.'],
        ['dir C:\\Projects /s, then copy what it lists by hand', TOOL, 'dir only lists what is there. It copies nothing.']])],
      deciding: ['o1'],
      reason: 'The job is a whole folder tree, over a connection that sometimes drops. robocopy does this: /e includes subfolders, /r:3 /w:5 limits retries to three, five seconds apart, and its report names any file that failed.' }),
    item({
      id: 'l21-p-who', strand: ADMIN,
      blocks: [chat('Scott, Reception', 't1', 'The help desk form wants the name of my computer. I have no idea where to find that.')],
      asks: [ask('Which command prints it?', [
        ['hostname', true, 'hostname prints the computer’s name.'],
        ['whoami', TOOL, 'whoami prints the signed-in account, not the computer.'],
        ['winver', TOOL, 'winver shows the Windows edition and version, not the computer’s name.'],
        ['net user', TOOL, 'net user lists the accounts on the computer.']])],
      deciding: ['t1'],
      reason: 'The ticket needs the name of the machine, and hostname prints exactly that. whoami names the account and winver names the Windows version, which are different facts.' }),

    // ----- group 2: no marks -----
    item({
      id: 'l21-s-format', strand: DSK,
      blocks: [
        chat('Joaquim, Intern', 'm1', 'A tech guide told me to type format D: to fix a drive that is slow. I typed it, and Windows now asks me a question. I have not answered.'),
        out('a', 'C:\\> format D:', ['The type of the file system is NTFS.', 'WARNING, ALL DATA ON NON-REMOVABLE DISK', 'DRIVE D: WILL BE LOST!', 'Proceed with Format (Y/N)?'])],
      asks: [ask('What do you tell Joaquim?', [
        ['Answer N and close the window; a format cannot be undone', true, 'The warning says all data on D: will be lost. A slow drive is no reason to erase what is on it.'],
        ['Answer Y; the warning is only Windows being extra careful', WIPED, 'The warning is exact: the format erases everything on D:.'],
        ['Answer Y, then restore the files from the Recycle Bin afterward', WIPED, 'A format does not send files to the Recycle Bin. They are gone from the drive.'],
        ['Wait until the drive is no longer slow, then answer Y at last', CAUSE, 'Waiting does not change what the question does. A slow drive and an erase are separate matters.']])],
      deciding: ['a2', 'a3'],
      reason: 'The prompt says ALL DATA ON DRIVE D: WILL BE LOST. A command-line format has no undo and no Recycle Bin. Answering N cancels it; then find why the drive is slow with a read-only check, after the files are safe.' }),
    item({
      id: 'l21-s-diskpart', strand: DSK,
      blocks: [
        chat('Maia, Facilities', 'n1', 'Please clear the USB stick from the old training room so the next person gets an empty one. Its owner says nothing on it is needed. File Explorer shows the stick as 58 GB. It is plugged into a laptop with one internal drive.'),
        out('a', 'DISKPART> list disk', ['  Disk ###  Status         Size     Free     Dyn  Gpt', '  --------  -------------  -------  -------  ---  ---', '  Disk 0    Online          476 GB      0 B        *', '  Disk 1    Online           58 GB      0 B'])],
      asks: [ask('What do you do before typing clean?', [
        ['Type select disk 1, then check its size and volumes again', true, 'Disk 1 is the 58 GB disk, the size File Explorer showed for the stick. Select it, and confirm before clean.'],
        ['Type select disk 0, because the first disk listed is the removable one', DISK, 'Disk 0 is 476 GB and holds Windows. Position does not say which disk is the stick; size does.'],
        ['Type clean now; diskpart picks the removable disk on its own', DISK, 'clean works on the selected disk only. With none selected it stops with an error.'],
        ['Type format C: /q on it; new disks are always called C:', DISK, 'C: is the laptop’s own drive, not the stick, so the command is aimed at the wrong thing.']])],
      deciding: ['a3', 'a4'],
      reason: 'clean removes the partitions from whichever disk is selected, so the number matters more than the command. Tell the disks apart by size: 58 GB is the stick, and 476 GB is the laptop’s drive. Select it, check with detail disk or list volume, and only then clean.' }),
    item({
      id: 'l21-s-chkdsk-c', strand: DSK,
      blocks: [
        chat('Callum, Finance', 'u1', 'Windows said my computer’s main drive has errors. I ran chkdsk C: /f in an administrator window and it printed a question I do not understand.'),
        out('a', 'C:\\> chkdsk C: /f', ['The type of the file system is NTFS.', 'Cannot lock current drive.', 'Chkdsk cannot run because the volume is in use by another process.', 'Would you like to schedule this volume to be checked', 'the next time the system restarts? (Y/N)'])],
      asks: [ask('What does the question mean, and what do you tell Callum?', [
        ['The drive is in use, so copy the important files off, answer Y and restart', true, 'chkdsk cannot lock a drive that is in use. The files are copied off first because a repair changes the drive. Scheduled for the next restart, the check runs before Windows loads.'],
        ['The drive is too damaged for chkdsk to read, so answer N and replace it', CAUSE, 'Nothing here says the drive is damaged beyond repair. It only says the drive is in use.'],
        ['The command needs a different switch, so type chkdsk C: /r and try again', FLAG, '/r includes /f and would stop at the same question.'],
        ['The window is not running as administrator, so open it again as one', ADM, 'That error reads “Access is denied”. This message is about the drive being in use.']])],
      deciding: ['a2', 'a3', 'a4', 'a5'],
      reason: '“Cannot lock current drive” means the volume is in use, and the drive Windows runs from always is. Answering Y schedules the check for the next start-up. This is a different message from the one an ordinary window gives for a command that needs an administrator.' }),
    item({
      id: 'l21-s-chkdsk-r', strand: DSK,
      blocks: [chat('Celeste, Records', 'j1', 'My laptop has been clicking and slow since this morning, and some files will not open. I have not backed anything up.')],
      asks: [ask('What do you do first?', [
        ['Copy the important files off now, then replace the drive', true, 'A clicking drive is failing: stop using it, copy the files off, and replace it. chkdsk /r reads every sector, which can take hours and stress a failing drive.'],
        ['Run chkdsk C: /r first to recover whatever it can read', NB, 'It would read a failing drive for hours and may be the last thing it does. The copy comes first, and /r is not the fix for a clicking drive.'],
        ['Format the drive and reinstall Windows, to start with a clean one', WIPED, 'A format erases the files that have not been backed up.'],
        ['Run sfc /scannow; clicking means damaged Windows files', CAUSE, 'Clicking is a sound the drive makes. sfc checks Windows’ files, not the drive.']])],
      deciding: ['j1'],
      reason: 'Clicking and unreadable files point at the drive, and there is no backup. Move 3 comes first: protect the data. A clicking drive is replaced, not repaired, and chkdsk /r is a long read of a drive that is failing.' }),
    item({
      id: 'l21-s-sfc', strand: ADMIN,
      blocks: [
        chat('Ricardo, IT manager', 'k1', 'A user’s Windows keeps crashing since an update. I ran sfc /scannow and pasted what it printed.'),
        out('a', 'C:\\Windows\\system32> sfc /scannow', ['Beginning system scan.  This process will take some time.', 'Beginning verification phase of system scan.', 'Verification 100% complete.', 'Windows Resource Protection found corrupt files but was unable to fix some of them.', 'Details are included in the CBS.Log windir\\Logs\\CBS\\CBS.log.'])],
      asks: [ask('What does this tell you?', [
        ['Some system files stay damaged; put the CBS.log name on the ticket, then replace the named file by hand or hand it on', true, 'The log names the files. Scanning again is likely to print the same, so the named file is replaced by hand or the ticket goes on with the log.'],
        ['The scan did not finish, so run sfc /scannow again until it says no problems at all', GUESS, 'It finished: verification reached 100 percent. A repeat is likely to say the same, and the log already has the names.'],
        ['Windows is fine; the corrupt files message is only a warning that can be ignored', MIS, 'It says some files are damaged and unrepaired, and that is the finding.'],
        ['The hard drive is failing under the scan, so replace it now', CAUSE, 'sfc checks system files. Damaged ones do not show the drive is at fault.']])],
      deciding: ['a4', 'a5'],
      reason: 'sfc /scannow has three endings, and this is the third: damage it could not fix. The scan completed. Writing the CBS.log name on the ticket keeps the evidence, and the named files are replaced by hand or the ticket goes on, because the same scan is unlikely to change.' }),
    item({
      id: 'l21-s-gpresult', strand: ADMIN,
      blocks: [
        chat('Ina, HR', 'i1', 'The Finance mapped drives policy should give every Finance computer the drive F:. This user is in Finance and has no F:.'),
        out('a', 'C:\\> gpresult /r', ['USER SETTINGS', '    Applied Group Policy Objects', '        Default Domain Policy', '    The following GPOs were not applied because they were filtered out', '        Finance Mapped Drives', '            Filtering:  Denied (Security)'])],
      asks: [ask('What does it show?', [
        ['It was filtered out for this user; check who the policy is allowed to cover', true, 'Filtering: Denied (Security) means the policy’s permissions did not include this user.'],
        ['The policy has not refreshed yet, so gpupdate /force will apply it to this user', MIS, 'A refresh would not help: the report says the policy was denied to this user, not that it was late.'],
        ['The computer never reached the server, so no policy applied at all to anyone', CAUSE, 'The Default Domain Policy did apply, so the computer did reach the server.'],
        ['The policy applied, but F: is already taken by a USB stick plugged in', CAUSE, 'The policy is listed as filtered out, not as applied.']])],
      deciding: ['a5', 'a6'],
      reason: 'gpresult /r lists the policies that applied and the ones filtered out, with the reason. Finance Mapped Drives is under “not applied”, with the filtering denied by security, so the fix is in who the policy covers.' }),
    item({
      id: 'l21-s-netstat', strand: NET,
      blocks: [
        chat('Rodney, Web team', 'g1', 'Staff say the web page on the server SRV2 will not open. I am on SRV2. Is the web service even waiting for visitors?'),
        out('a', 'C:\\> netstat -an', ['  Proto  Local Address          Foreign Address        State', '  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING', '  TCP    0.0.0.0:445            0.0.0.0:0              LISTENING', '  TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING', '  TCP    192.168.1.20:3389      192.168.1.55:50412     ESTABLISHED'])],
      asks: [ask('What does this show about the web service?', [
        ['Nothing is listening on port 80 or 443 on SRV2', true, 'A web service waiting for visitors would show LISTENING on port 80 or 443. Neither is in the list; the web service may be stopped or listening on another port.'],
        ['It is running: a connection shows as ESTABLISHED in the list', MIS, 'The established connection is on port 3389, remote desktop, not the web.'],
        ['The firewall on SRV2 is blocking port 443 for every visitor', CAUSE, 'netstat shows what the computer is doing, not what a firewall does. No firewall evidence is on the screen.'],
        ['The server has no network connection at all, so nothing can reach it', CAUSE, 'The list shows a live connection from 192.168.1.55, so the network works.']])],
      deciding: ['a2', 'a3', 'a4', 'a5'],
      reason: 'netstat -an lists each port the computer is waiting on (LISTENING) and each open conversation (ESTABLISHED). The web uses port 80 or 443 and neither is listed, so the service may be stopped or listening elsewhere, and the next step is to look at the service.' }),
    item({
      id: 'l21-s-netuse', strand: NET,
      blocks: [
        chat('Nalini, Sales', 'r1', 'The Y: drive on my laptop shows a red X. Z: works fine.'),
        out('a', 'C:\\> net use', ['Status       Local   Remote                     Network', '-------------------------------------------------------------', 'OK           Z:      \\\\fileserver\\Sales         Microsoft Windows Network', 'Unavailable  Y:      \\\\fileserver\\Archive       Microsoft Windows Network'])],
      asks: [ask('What does it show?', [
        ['The Archive share does not answer, while Z: on the same server works; look at that share first', true, 'Z: reaches the same server, so the laptop’s network and the server are up. Only the Archive share is unavailable (a mapping can also show Unavailable until the first use after sign-in).'],
        ['The laptop has lost the network connection, so restart the laptop', CAUSE, 'Z: is OK on the same server. The network is working.'],
        ['The mapping was deleted from the laptop, so map the drive again', MIS, 'Y: is still listed. It is marked Unavailable, which is different from missing.'],
        ['The whole file server is down, so restart the server for everyone', RESET, 'Z: reaches the same server, and a restart would cut off everyone using it.']])],
      deciding: ['a3', 'a4'],
      reason: 'Z: is OK and Y: is Unavailable on the same server, which cuts the problem in half: the laptop and the server are fine and the Archive share is the one that does not answer. Check that share’s state and permissions.' }),
    item({
      id: 'l21-s-rmdir', strand: FIL,
      blocks: [
        chat('Liam, Facilities', 'c1', 'I typed rmdir C:\\OldReports to clear it out and got an error. How do I make it go?'),
        out('a', 'C:\\> rmdir C:\\OldReports', ['The directory is not empty.'])],
      asks: [ask('What does the message mean, and what next?', [
        ['Something is inside it; look with dir first, then use rmdir /s only if it can all go', true, 'rmdir removes only empty folders. /s removes everything inside with no Recycle Bin, so look first.'],
        ['Windows has locked the folder for now, so restart the computer and try again', CAUSE, 'The message says the folder has contents, not that it is locked.'],
        ['Run rmdir /s /q right away; the folder is old and nobody uses it', WIPED, 'Old does not mean unneeded. /s /q deletes everything inside without asking, and without the Recycle Bin.'],
        ['Use md C:\\OldReports again to make the folder empty first', TOOL, 'md makes a new folder. It does not empty an existing one.']])],
      deciding: ['a1'],
      reason: '“The directory is not empty” is rmdir refusing to remove a folder that still holds files. dir shows what is inside. rmdir /s would remove it all at once and skip the Recycle Bin, so it comes after a look.' }),
    item({
      id: 'l21-s-robo', strand: FIL,
      blocks: [
        chat('Sue, Archive', 's1', 'I run robocopy C:\\Docs E:\\Backup /mir every Friday. Last Wednesday I deleted a folder from C:\\Docs by mistake, and after the Friday run it is also gone from the backup. This is that Friday’s output.'),
        out('a', 'C:\\> robocopy C:\\Docs E:\\Backup /mir', ['               Total    Copied   Skipped  Mismatch    FAILED    Extras', '    Dirs :        41         0        41         0         0         1', '   Files :      1260         0      1260         0         0       212'])],
      asks: [ask('What happened?', [
        ['/mir makes the backup an exact mirror, so it deleted what the source lacked', true, 'The Extras column counts files and folders in the backup that were not in C:\\Docs. With /mir they are removed.'],
        ['robocopy lost the files while copying them, so run it again with /z', FLAG, '/z lets a copy resume. It would not bring back files the mirror removed.'],
        ['The drive E: is failing and dropped the folder on its own', CAUSE, 'FAILED is 0 and nothing read badly. The Extras line shows the removal.'],
        ['Windows moved them to the Recycle Bin, so restore them from there', MIS, 'Command-line deletes skip the Recycle Bin.']])],
      deciding: ['a2', 'a3'],
      reason: '/mir copies and then deletes from the destination anything not in the source. 212 files and 1 folder in the Extras column are exactly what Sue deleted from C:\\Docs. /e would have copied without deleting.' }),
    item({
      id: 'l21-s-cd', strand: FIL,
      blocks: [
        chat('Roland, Intern', 'w1', 'I am in C:\\Users\\wes. I typed cd D:\\Data and the prompt still says C:. Where am I?'),
        out('a', 'C:\\Users\\wes> cd D:\\Data', ['C:\\Users\\wes>'])],
      asks: [ask('How does Roland get to D:\\Data?', [
        ['Type cd /d D:\\Data to switch the drive too', true, 'Plain cd changes the folder on D: but does not leave C:. /d changes the drive too.'],
        ['Type dir D:\\Data, which takes Roland into the folder', TOOL, 'dir lists a folder. It never moves the prompt.'],
        ['Type D:\\Data on its own line', TOOL, 'A path alone is not a command. To switch drives, type the letter and a colon.'],
        ['Type cd .. twice, to go up to the top of the tree', CAUSE, 'Going up stays on C:, so it cannot reach D:.']])],
      deciding: ['a1'],
      reason: 'Each drive remembers its own current folder, and plain cd only changes that memory. cd /d D:\\Data moves the prompt there. Typing D: and then cd \\Data does the same in two steps.' }),
    item({
      id: 'l21-s-netuser', strand: ADMIN,
      blocks: [
        chat('Fern, Warehouse', 'f1', 'Hi, it is Fern. My sign-in has not worked since Monday. Please turn my account back on right now, I have a delivery to log.'),
        out('a', 'C:\\> net user fern', ['User name                    fern', 'Full Name                    Fern Ortiz', 'Account active               No', 'Account expires              Never', 'Password last set            10/5/2026 7:41:12 AM', 'Local Group Memberships      *Users'])],
      asks: [ask('What do you do?', [
        ['Confirm Fern by the number on file and read the ticket history for why it is off', true, 'Account active: No is the fault, but turning an account on for a caller you have not checked is how a stranger gets in, and an account may be off because Fern left or was locked for security.'],
        ['Request the employee number from Fern, and if it matches, run net user fern /active:yes', IDC, 'A number the caller supplies proves nothing about who is calling. The check must use something the caller did not supply.'],
        ['Run net user fern * and give Fern a new password once the old one is read out', IDC, 'A password reset for an unchecked caller is worse. The caller must be confirmed first.'],
        ['Run net user fern /delete, then make Fern a new account and move the files', WIPED, 'Deleting the account loses its identity, and the old files would not belong to the new one.']])],
      deciding: ['f1', 'a3'],
      reason: 'The fault is plain: Account active: No. But before an unlock, a reset or access, the technician confirms the caller by something the caller did not supply, such as the number on file or the directory. Then net user fern /active:yes is one change.' }),
    item({
      id: 'l21-x-call', strand: DSK,
      blocks: [note('Guinevere in Purchasing calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Guinevere’s D: drive will not open. What do you say?', form: 'call', from: 'Guinevere, Purchasing', detail: 'Incoming call · 2:40 PM', start: 'one',
        turns: {
          one: { lines: [L('r1', 'My D: drive says it is unreadable. My nephew says just format it and the problem goes away.')], push: 'Guinevere wants the quickest fix and has a plan ready.',
            options: [{ id: 'copies', text: 'Is there a copy of what is on D: anywhere else?', goto: 'two' },
              { id: 'format', text: 'Your nephew is right. Type format D: and press Y.', end: 'format' },
              { id: 'what', text: 'What exact error words does the drive show, and did it start after a power cut or a bump?', end: 'what' },
              { id: 'chk', text: 'I am sorry, that must be worrying. Let me connect to your computer now and run chkdsk D: /r on it, and I will tell you what it finds.', end: 'chk' }] },
          two: { lines: [L('r2', 'No. It is all on D:. Two years of purchase orders.')], push: 'Guinevere is worried now.',
            options: [{ id: 'copy', text: 'I will copy off what can be read first, then run chkdsk with no switches.', end: 'copy' },
              { id: 'format2', text: 'Then format will have to do after all.', end: 'format' },
              { id: 'chk2', text: 'I understand, two years of orders is a lot to lose. We will run chkdsk /f first, which repairs a drive without erasing anything, and see whether the orders open.', end: 'chk' }] }
        },
        ends: {
          copy: { ok: true, then: 'The only copy is protected before anything is changed, and the read-only check shows what is wrong without touching it.' },
          format: { ok: false, slip: WIPED, then: 'Format erases the drive, and it holds the only copy of two years of orders.' },
          what: { ok: false, slip: PART, then: 'The exact words are worth having later, but the question that decides the order is whether the files exist anywhere else.' },
          chk: { ok: false, slip: NB, then: 'A repair run changes the drive, and a long scan of a damaged one can lose files. Nothing was copied off first.' } } }],
      reason: 'Move 3: protect their data before touching anything. One question, whether the files exist anywhere else, decides the order: copy, then a read-only check, then at most one repair.' }),
    say('l21-r-chkdsk', DSK, 'Which command checks a drive’s file system for errors and, with /f, fixes them?', 'Type the command.', ['chkdsk'],
      'chkdsk reads a drive’s file system. With no switch it only reports, /f fixes the errors it finds, and /r also hunts for bad sectors.'),
    say('l21-r-gpupdate', ADMIN, 'Which command, with the /force switch, reapplies every Group Policy setting on a computer right now?', 'Type the command.', ['gpupdate /force'],
      'gpupdate refreshes Group Policy. /force reapplies every policy, not only the ones that changed.'),

    // ----- group 3: mixed jobs -----
    item({
      id: 'l21-g-flush', strand: NET,
      blocks: [chat('Beatriz, Support', 'a1', 'The intranet site moved to a new server this morning. nslookup gives me the new address, but my browser still goes to the old one. Everyone else is fine.')],
      asks: [ask('Which command empties the saved name answers?', [
        ['ipconfig /flushdns', true, 'nslookup queries the DNS server directly and showed the new address. The computer’s saved copy is the old one, and /flushdns clears it.'],
        ['ipconfig /release, then ipconfig /renew', FLAG, 'That gives the address back and requests another. The saved name answers stay.'],
        ['gpupdate /force', TOOL, 'That refreshes Group Policy, not the name answers.'],
        ['netstat -an', TOOL, 'netstat lists connections and ports. It changes nothing.']])],
      deciding: ['a1'],
      reason: 'The fresh lookup is right and the browser is wrong, so the computer is holding an old saved answer. ipconfig /flushdns empties that DNS cache, one change that can be undone by simply looking up again.' }),
    item({
      id: 'l21-g-elevate', strand: ADMIN,
      blocks: [chat('Lemuel, Marketing', 'b1', 'A guide gave me five commands to try. Which of them will refuse to run in my ordinary Command Prompt window?')],
      asks: [ask('Pick every command that needs an administrator window.', [
        ['sfc /scannow', true],
        ['diskpart', true],
        ['hostname', MIS, 'hostname only prints the computer’s name and runs in an ordinary window.'],
        ['dir C:\\Users', MIS, 'dir only lists a folder and runs in an ordinary window.'],
        ['whoami', MIS, 'whoami only prints the account and runs in an ordinary window.']], { many: true })],
      deciding: [],
      reason: 'sfc /scannow changes protected system files and diskpart changes disks, so both need an administrator window. hostname, dir and whoami only read, and an ordinary window runs them.' }),
    item({
      id: 'l21-g-destroy', strand: DSK,
      blocks: [chat('Gemma, Intern', 'l1', 'My guide lists commands. Which of these make files vanish with no Recycle Bin and no undo in Windows?')],
      asks: [ask('Pick every command that can.', [
        ['format D: /q', true],
        ['rmdir /s /q C:\\OldReports', true],
        ['diskpart, then clean', true],
        ['robocopy C:\\Docs E:\\Backup /mir', true],
        ['dir C:\\Docs /s', MIS, 'dir only lists files.'],
        ['gpresult /r', MIS, 'gpresult only reports which policies applied.']], { many: true })],
      deciding: [],
      reason: 'format erases a drive, rmdir /s removes a folder and everything in it, diskpart clean wipes a disk’s partitions, and robocopy /mir deletes from the destination what the source no longer has. Special recovery tools may bring back some files after a quick format or a clean, but Windows has no undo. dir and gpresult only read.' }),
    item({
      id: 'l21-g-windows', strand: ADMIN,
      blocks: [chat('Nadine, Sales', 'h1', 'Since last night’s update, two of my programs crash on start. The drive is fine. I want Windows to check and repair its own files.')],
      asks: [ask('Which command does that, in an administrator window?', [
        ['sfc /scannow', true, 'sfc scans Windows’ protected system files and replaces damaged ones from a stored copy.'],
        ['chkdsk C: /f', TOOL, 'chkdsk repairs the drive’s file system, not Windows’ files.'],
        ['gpupdate /force', TOOL, 'That reapplies Group Policy, not the system files.'],
        ['format C: /q', WIPED, 'That would erase the drive. Nothing needs to be erased to check Windows’ files.']])],
      deciding: ['h1'],
      reason: 'The drive is fine and Windows’ own files are suspected, so the job is sfc /scannow. chkdsk checks the drive and sfc checks the files Windows depends on.' }),
    item({
      id: 'l21-g-dir', strand: FIL,
      blocks: [chat('Imani, Legal', 'n1', 'I need a list of everything in C:\\Contracts, including files someone marked hidden. Which command prints it?')],
      asks: [ask('Which command?', [
        ['dir C:\\Contracts /a', true, '/a includes hidden and system files in the listing.'],
        ['dir C:\\Contracts /w', FLAG, '/w only lays the names out across the screen; hidden files stay hidden.'],
        ['dir C:\\Contracts /s', FLAG, '/s adds the subfolders, but hidden files are still left out.'],
        ['cd C:\\Contracts /a', TOOL, 'cd changes folder. It prints no list.']])],
      deciding: ['n1'],
      reason: 'dir lists a folder, and each switch changes one thing about the listing. /a adds hidden and system files, /s the subfolders and /w the layout.' })
  ]);
})();
