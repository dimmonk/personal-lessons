// IT Help Desk, lesson 20 "Which Windows tool for the job": the eight new questions of the check (three on Task Manager and the six more tools, three on the consoles, two on
// Control Panel, Power Options and File Explorer Options). Facts as in items-l20.js (A+ map Core 2 1.4 and 1.6). Invented people and computers.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const chat = (who, id, text) => msg('chat', who, 'Chat with the help desk', [[id, text]]);
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const list = (pre, title, head, rows) => table(title, head, rows.map((r, i) => [pre + (i + 1), ...r]));
  const T = (id, strand, who, text, prompt, rows, reason) => item({ id, strand, blocks: [chat(who, 'm1', text)], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const say = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const TOOL = 'wrong-tool', NOW = 'now-or-then', TIDY = 'tidy-first', BLIND = 'blind-edit', PWR = 'power-mixed', AREA = 'wrong-area', LOOK = 'mixed-look-alike',
    CAUSE = 'wrong-cause', NOSPLIT = 'no-split', PART = 'part-first', RULED = 'kept-ruled-out', TWO = 'two-changes', NOBACK = 'no-backup', GUESS = 'guessed-cause', MISREAD = 'misread-output';
  const TL = 'win-tools', CO = 'win-consoles', SE = 'win-settings';

  FC.items('it-support', [
    item({
      id: 'l20-k-startup', strand: TL,
      blocks: [
        chat('Zachary, Billing', 'h1', 'After I sign in, my laptop is unusable for about four minutes while things open and the fan runs. Once it settles it is fine.'),
        list('b', 'Task Manager, Startup tab', ['Name', 'Status', 'Startup impact'], [['BackupAgent', 'Enabled', 'High'], ['Chat app', 'Enabled', 'Medium'], ['OneDrive', 'Enabled', 'Low'], ['Printer tray icon', 'Enabled', 'Low']])],
      asks: [ask('What is the first change?', [
        ['Disable BackupAgent at start, restart and time the sign-in', true, 'The Startup tab names what opens with Windows and how heavy each is. One High program is the cheapest change to test, alone.'],
        ['Disable all four programs at start and restart the laptop', TWO, 'If the sign-in speeds up, nobody knows which program was the cause, and the ones that were fine are off for no reason.'],
        ['Run Disk Cleanup and Defragment and Optimize Drives, then sign in again', TIDY, 'Neither tool answers “what opens at sign-in?”, and the table already names the likely program.'],
        ['End BackupAgent in the Processes tab after each sign-in', NOSPLIT, 'Ending it after it has started works only until the next sign-in. The Startup tab stops it from starting.']])],
      deciding: ['h1', 'b1'],
      reason: 'A slow minutes after sign-in is the question “which program starts with Windows?”, answered by the Startup tab. Disable one program, the High one, and restart. Ending a task helps only until the next sign-in.' }),
    item({
      id: 'l20-k-resmon', strand: TL,
      blocks: [
        chat('Bianca, Archive', 'k1', 'My PC stalls every few minutes. Task Manager shows the disk at 100% and I can see which program is busy, but I cannot tell which file it is reading.'),
        list('b', 'Task Manager, Performance tab', ['Line', 'Value'], [['CPU', '12%'], ['Memory', '7.8 of 16 GB'], ['Disk 0', '100%']])],
      asks: [ask('Which tool shows which file the program is reading?', [
        ['Resource Monitor (resmon), on the Disk tab, which lists programs and files', true, 'Resource Monitor goes a level deeper than Task Manager: its Disk tab lists the processes using the disk and the files they read and write.'],
        ['Disk Management (diskmgmt.msc), to see how the drive is divided into volumes', TOOL, 'It shows how the drive is divided, not what is using it now.'],
        ['Disk Cleanup (cleanmgr), to clear temporary files off the busy drive', TIDY, 'Clearing files does not say what is using the disk. The look has to come before the change.'],
        ['Event Viewer (eventvwr.msc), to find the disk errors from last week', NOW, 'The stall is happening now. Event Viewer holds what was recorded, not the files being read this minute.']])],
      deciding: ['k1', 'b3'],
      reason: 'The Performance tab told us the disk is the limit; the question “which program, and which file?” is Resource Monitor’s Disk tab. It is opened from the bottom of Task Manager’s Performance tab, or by typing resmon.' }),
    T('l20-k-msconfig', TL, 'Clayton, Training', 'The training laptop only shows its fault in safe mode. I need it to start in safe mode on the next restart, but the screen at power-on goes by too quickly for me to press a key in time.',
      'Which tool can make Windows start in safe mode next time?', [
        ['System Configuration (msconfig), Boot tab: tick Safe boot, then restart', true, 'msconfig’s Boot tab can force the next start into safe mode, so nothing has to be pressed in time. The tick has to be removed afterward or the laptop keeps starting that way.'],
        ['Task Manager, on the Startup tab, with the whole list disabled and a restart', TOOL, 'The Startup tab controls programs that open at sign-in. It does not choose how Windows itself starts.'],
        ['Device Manager, with every device disabled and then a restart', TWO, 'Disabling every device is many changes at once and does not start safe mode, which is a way of starting Windows.'],
        ['Registry Editor, adding a safe-mode value in the boot entry by hand', BLIND, 'A tick in msconfig writes that setting for you with a way back. Editing by hand risks an unbootable laptop.']],
      'System Configuration (msconfig) is the tool for how Windows starts: normal, diagnostic or safe. Tick Safe boot on the Boot tab for the next start, and untick it when the work is finished.'),
    T('l20-k-event', CO, 'Caleb, Server room', 'The file server restarted by itself last night around 3 AM. Nobody was there, and it is fine now. My boss wants to know what happened.',
      'Where does the technician look first?', [
        ['Event Viewer, System log, around 3 AM, for the error before the restart', true, 'A restart nobody saw is a question about the past, and Windows writes what happened in its logs. Open the System log (eventvwr.msc) and read around 3 AM.'],
        ['Task Manager, on the Processes tab, to see which program is using the most', NOW, 'Task Manager shows the present. The server is fine now, and the cause is in what was recorded then.'],
        ['Task Scheduler, to see whether a job was scheduled to run at 3 AM', CAUSE, 'This may be worth a look later, but it guesses a cause. The log shows what happened without guessing.'],
        ['Performance Monitor, starting a log of counters from now on', NOW, 'A log starting now will miss last night. Event Viewer already holds what happened then.']],
      'Event Viewer answers “what happened, and when?” for the past. Task Manager answers the present. For a restart nobody saw, open the System log and read the entries around the time.'),
    T('l20-k-policy', CO, 'Simon, Clinic', 'The front-desk PC runs Windows 11 Pro and is a stand-alone computer, not on the company network. The owner wants Windows to require passwords at least 12 characters long and to block USB sticks.',
      'Which console holds rules like these for one computer?', [
        ['Local Group Policy Editor (gpedit.msc), which holds the computer’s rules', true, 'Group policy is the collection of rules for how Windows behaves, such as password length and which drives may be used. gpedit.msc edits those rules on a single computer.'],
        ['Local Users and Groups (lusrmgr.msc), which creates accounts and groups', TOOL, 'It manages who the accounts are. The rules for passwords and drives are policy.'],
        ['Certificate Manager (certmgr.msc), which stores digital IDs', TOOL, 'Certificates prove who a site or program is. They do not hold password rules.'],
        ['Task Scheduler (taskschd.msc), which runs jobs at chosen times', TOOL, 'It starts jobs. Neither rule is a job to run.']],
      'The rules for how Windows behaves belong to Group Policy, and on a stand-alone computer the editor is gpedit.msc. Local Users and Groups is for who has an account.'),
    say('l20-k-run', CO, 'The console that runs a program at a time you choose, or when something happens, is Task Scheduler.', 'Type the name that opens Task Scheduler from the Run box.',
      ['taskschd.msc', 'taskschd', 'taskschd msc'], 'Task Scheduler opens with taskschd.msc: “task” and “schd” for scheduler.'),
    item({
      id: 'l20-k-ext', strand: SE,
      blocks: [
        chat('Samuel, Orders', 'p1', 'I got an email with “invoice.pdf”. I double-clicked it, a black window flashed and nothing opened. The icon looked like a PDF.'),
        list('b', 'The file in the Downloads folder', ['Line', 'Shows'], [['Name as File Explorer shows it', 'invoice.pdf'], ['Icon', 'A PDF icon'], ['Type column', 'Application']])],
      asks: [ask('Which setting shows the whole file name?', [
        ['File Explorer Options, View tab: show file name extensions', true, 'Windows hides the last ending of known file types, so invoice.pdf.exe shows as invoice.pdf. Showing extensions reveals the real ending, .exe. A PDF would not be an Application.'],
        ['Programs and Features, to see whether a PDF reader is installed', AREA, 'The Type column says Application, so a missing reader is not the issue. The question is what the file really is.'],
        ['Indexing Options, to rebuild the list of file names Windows searches', AREA, 'The index is for search. It does not change how a name is shown.'],
        ['Disk Cleanup, to clear the Downloads folder of old files', TIDY, 'The file is a clue and should be looked at, not cleared. It may not even be a PDF.']])],
      deciding: ['p1', 'b3'],
      reason: 'The Type column says Application where a PDF would say a document type: the real ending, .exe, was hidden, and the name looked like a PDF. Showing extensions in File Explorer Options (View tab) shows the real name. A program named like a document is a warning sign, so do not open it again.' }),
    T('l20-k-hib', SE, 'Erica, Travel', 'I am taking my laptop on a week-long trip with no charger until I get there. I want all my open documents back exactly as they are when I open it, and I do not want the battery to drain on the way. Hibernate is on in this laptop’s power menu.',
      'Which power state fits?', [
        ['Hibernate: saves the open work to the drive, then powers off', true, 'Hibernate writes what is in memory to the drive and uses no power, so the work comes back and the battery is not drained.'],
        ['Sleep: it keeps the open work in memory on a trickle of power', PWR, 'Sleep uses a little power all the time. Over a week the battery could run out, and unsaved work would be lost.'],
        ['Shut down with fast startup on, so it starts quickly on the trip', PWR, 'Shut down closes the programs. Fast startup only speeds up the next start; the open documents are not kept.'],
        ['Lock the screen with Windows and L and close the lid', PWR, 'Lock keeps everything running behind the lock screen, so the battery keeps draining.']],
      'Hibernate saves what is open to the drive and powers off. Sleep keeps it in memory with a little power. Shut down closes everything. The need was “work kept” and “no drain”, and only hibernate does both.')
  ]);
})();
