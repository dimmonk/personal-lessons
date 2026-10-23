// IT Help Desk, lesson 27 "Changes, backups, safety and evidence" (part procedures): the two worked tickets and the questions of the three groups.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 4.2 (change management), 4.3 (backups), 4.4 (safety), 4.5 (environment and power), 4.6 (incident response: evidence and chain of custody).
// The worked tickets use IT4 and IT9 (a first guess that one check rules out) and IT13, IT14 (hand on, write up). Invented people. Strands: change, backup, safety, evidence.
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
  const TYPE = 'wrong-change-type', APPR = 'skipped-approval', BACK = 'wrong-backup', ONE = 'one-copy', STAT = 'static-risk', PWR = 'wrong-guard-power', GEAR = 'wrong-gear',
    EVID = 'touched-evidence', VOL = 'lost-volatile', LIC = 'wrong-license', LEAK = 'leaked-data', UNREAD = 'ran-unread', REM = 'wrong-remote', EXPOSE = 'exposed-remote',
    TRUST = 'trusted-ai', VIRT = 'wrong-virtual', CLOUD = 'wrong-cloud', TOOL = 'wrong-tool', LOOK = 'mixed-look-alike', CAUSE = 'wrong-cause', SKIP = 'skipped-step', NOSPLIT = 'no-split';

  FC.items('it-support', [
    item({
      id: 'l27-w-change', strand: 'change',
      blocks: [
        msg('chat', 'Mr. Okafor, Finance', 'Chat with the help desk', [['t1', 'Please update the firmware on the accounting server tonight. It only takes ten minutes, and payroll runs Monday morning.']]),
        table('From the desk’s change rules', ['Rule'], [
          ['r1', 'A routine change with a written, pre-approved procedure is a standard change.'],
          ['r2', 'An emergency change is only for an outage or an attack that is happening now.'],
          ['r3', 'Every other change to a server needs a request form, a rollback plan, a backup, a test, and the change board’s approval.'],
          ['r4', 'Server changes happen in the maintenance window, Saturday 10 p.m. to 2 a.m.']])],
      asks: [ask('Which type of change is this?', [
        ['A normal change: not routine, and nothing is down', true, 'Nothing is down and no attack is under way, so it is not an emergency, and no written procedure covers it, so it is not standard. It takes the whole process.'],
        ['An emergency change, because he wants it done tonight', TYPE, 'Wanting it tonight does not make it an emergency. The rule is an outage or an attack happening now, and neither is on the ticket.'],
        ['A standard change, because it only takes ten minutes', TYPE, 'Standard means a routine change with a pre-approved written procedure. How long it takes does not decide the type.'],
        ['Not a change, because the server keeps working', TYPE, 'A firmware update can stop the server, which is why it is a change. What matters is the risk to people’s work.']])],
      steps: [
        { id: 'guess', does: 'Name the favorite type and check it against the desk’s own rule.', working: 'The first guess is emergency, because he said “tonight”. The rule needs one answer: is there an outage or an attack now? No. Emergency is ruled out.', ask: 'a' },
        { id: 'form', does: 'Write the request form.', working: 'Purpose: current firmware, fixes a fault the maker listed. Scope: the accounting server only. Type: normal. Affected systems: accounting and payroll. Risk: a failed update could stop payroll, so the risk level is high.' },
        { id: 'ready', does: 'Get the four things ready before the board sees it.', working: 'Rollback plan: keep the old firmware file and the steps to put it back. Backup plan: a full backup and a copy of the settings first. Sandbox testing: run the update on the spare server. Responsible staff: you do the work; the senior technician answers for it.' },
        { id: 'when', does: 'Pick the time.', working: 'Not tonight. The change board must approve, and servers change only in the maintenance window: the coming Saturday. The year-end change freeze, if one were running, would block it altogether.' },
        { id: 'done', does: 'After approval, do the work, get it checked, and get the users to accept it.', working: 'Implement it Saturday. A second technician reviews it (peer review). On Monday, Mr. Okafor confirms payroll runs (end-user acceptance), and the ticket is closed.' }],
      deciding: ['t1'],
      reason: 'The type comes from the desk’s rule, not from the wish for tonight. Nothing was down, so it is a normal change: a request form, rollback and backup plans, a test, board approval, the maintenance window, a peer review and the users’ acceptance.' }),
    item({
      id: 'l27-w-evid', strand: 'evidence',
      blocks: [
        msg('chat', 'Dana, HR', 'Chat with the help desk', [['t1', 'My laptop is slow and the drive says it is almost full. Can you clean it up?']]),
        table('What you saw while checking the drive', ['Folder', 'What is in it'], [
          ['f1', 'Downloads: a spreadsheet with about 400 rows of full credit card numbers and names'],
          ['f2', 'Documents: a note that says “sell the list Friday”']])],
      asks: [ask('What do you do next?', [
        ['Stop, change nothing, and tell your manager what you saw', true, 'This looks like a crime or a data theft. Protecting it means stopping, leaving the laptop as it is, and telling management, who decide about law enforcement.'],
        ['Delete the spreadsheet and wipe the drive to protect the company', EVID, 'Deleting or wiping destroys what may be evidence, and it is not your decision to make.'],
        ['Copy the spreadsheet to a USB stick to show your manager', EVID, 'Copying files off the laptop changes it and starts a copy nobody has a record of. The drive is copied the proper way, by the people who handle evidence.'],
        ['Call the police yourself, right away, from your own phone', SKIP, 'Management is told first and decides about law enforcement. Telling the police is not the technician’s call.']])],
      steps: [
        { id: 'guess', does: 'The ticket says “clean it up”. Test that against what you found.', working: 'The first guess is the usual one: delete big files, free space. But one folder holds 400 card numbers and a note about selling them. This is no longer a slow laptop.', ask: 'a' },
        { id: 'stop', does: 'Stop and leave everything as it is.', working: 'Delete nothing, clean nothing, run no scan, do not shut it down on your own. Every change can damage evidence.' },
        { id: 'tell', does: 'Inform management, and write it down.', working: 'Tell your manager at once. Incident documentation: what you saw, the time, the folders, and every click you made on the laptop.' },
        { id: 'custody', does: 'Keep the chain of custody.', working: 'The laptop goes into a locked place, with a sheet that records who held it, when and why. Anyone who takes it signs the sheet.' },
        { id: 'copy', does: 'Leave the copying to the people who handle evidence.', working: 'They collect memory first, since it is lost at power-off, then make an exact copy of the drive and check it with a hash. They examine the copy, and the original stays unchanged.' }],
      deciding: ['t1'],
      reason: 'The first guess, clean it up, would have deleted evidence. Prohibited content or a crime found on a drive means: stop, leave it alone, inform management, document everything, keep the chain of custody, and let the copy be examined while the original stays unchanged.' }),
    chat('l27-p-type', 'change', 'Marco, Operations', 'Every month the 40 reception PCs get the same Windows updates, by the desk’s written procedure. The change board approved that procedure once, for good, last year.',
      'Which type of change is the monthly update?', [
        ['A standard change, since it is routine and pre-approved', true, 'A routine change with a written procedure that was approved ahead of time is a standard change. It does not go to the board each month.'],
        ['A normal change, so it goes to the board every month', TYPE, 'Normal changes are the ones with no pre-approved procedure. This procedure was approved once, for good.'],
        ['An emergency change, because 40 PCs are involved', TYPE, 'Emergency means an outage or an attack happening now. The number of PCs does not decide it.'],
        ['Not a change, because the PCs keep working during it', TYPE, 'Updates can break a PC, so they are changes. A routine one is a standard change.']],
      'Routine, written down and approved ahead of time is what makes a change standard. Normal needs the whole process each time, and emergency is for an outage or an attack now.'),
    chat('l27-p-backup', 'backup', 'Lena, Warehouse', 'The file server gets a full backup on Sunday. Each night after that, it copies everything that changed since Sunday. It crashed on Thursday morning.',
      'Which backups does the restore need?', [
        ['Sunday’s full and Wednesday night’s backup only', true, 'Each night copies everything changed since the last full, so it is a differential backup. Wednesday’s holds Monday’s, Tuesday’s and Wednesday’s changes, so two backups are enough.'],
        ['Sunday’s full and the Monday, Tuesday and Wednesday backups', BACK, 'That is how an incremental restore goes. These nightly backups each hold everything since Sunday, so Wednesday’s already includes the earlier days.'],
        ['Wednesday night’s backup alone, since it is the newest', BACK, 'Wednesday’s holds only what changed since Sunday. Everything unchanged lives only in the full.'],
        ['Sunday’s full alone, since it is the only full one', BACK, 'That brings back Sunday’s files and loses the changes from Monday to Wednesday.']],
      'A backup of everything changed since the last full is a differential. A restore needs the last full and the latest differential, and no more.'),
    chat('l27-p-esd', 'safety', 'Tim, Field tech', 'I am about to swap the memory in a desktop. I have an ESD wrist strap. The side panel is off and I am deciding where to clip the strap.',
      'Where does the strap go, and what comes first?', [
        ['On bare metal of the computer’s frame, after the power cord is unplugged', true, 'The strap drains static to the metal frame. Disconnecting power comes first, because a repair is never done on a live computer.'],
        ['On the memory stick itself, so both stay at the same charge', STAT, 'The strap goes to bare metal that is grounded, not to the part. Clipped to the stick, it drains nothing away.'],
        ['On any plastic panel, as long as the strap touches his skin', STAT, 'Plastic does not carry static away. The clip needs bare metal.'],
        ['On the power cord’s plug, with the computer still switched on', STAT, 'Working inside a computer that is switched on risks shock, and the strap is no substitute for unplugging it.']],
      'An ESD strap clips to bare metal of the frame, and power is disconnected before any repair.'),
    recall('l27-q-freeze', 'change', 'In the last week of December, the accounting team is closing the books, and the rule says no changes to their systems until January.', 'What is a period like this called? Type the two words.',
      ['change freeze', 'freeze'], 'A period when no changes are allowed is a change freeze. A maintenance window is the opposite: a time agreed for making changes.'),
    chat('l27-q-diff', 'backup', 'Hugo, Systems', 'The nightly backup has a 30-minute window and little disk space. A slow restore is fine with us, because the server rarely fails.',
      'Which backup kind fits?', [
        ['Incremental: only what changed since the last backup', true, 'Incremental is the fastest and smallest to make. The price is a slow restore, which this desk accepts.'],
        ['Full: a complete copy of everything, every single night', BACK, 'A full copy every night is the slowest and biggest to make, so it breaks the window and the disk space.'],
        ['Differential: everything changed since the last full backup', BACK, 'A differential grows a little every night, so it takes more time and space than an incremental.'],
        ['Synthetic full: a full built on the backup server', BACK, 'A synthetic full is built on the backup server. It is light on the computer but is a full copy, so it takes the most space.']],
      'Fastest and smallest to make is incremental. The cost is the restore, which needs the last full plus every incremental in order.'),
    recall('l27-q-321', 'backup', 'The 3-2-1 rule says to keep 3 copies of the data on 2 kinds of media, with some number of them somewhere else, away from the building.', 'How many copies are kept offsite? Type the number.',
      ['1'], 'The 3-2-1 rule: 3 copies of the data, on 2 kinds of media, with 1 copy offsite. The original counts as one of the three.'),
    chat('l27-q-ups', 'safety', 'Gail, Clinic', 'The power flickered for two seconds and the reception computer restarted. The patient notes she was typing were lost. Nothing was damaged.',
      'What do you recommend for that computer?', [
        ['A UPS, a battery box that carries the computer through a power loss', true, 'A UPS gives the minutes needed to save and shut down properly, and it evens out low voltage as well.'],
        ['A surge suppressor, which blocks power spikes from reaching the computer', PWR, 'A surge suppressor guards against a spike. It cannot keep the computer running when the power drops.'],
        ['A cooler room and clear vents, which keep the computer from overheating', PWR, 'Heat was not the problem. The computer restarted because the power dropped.'],
        ['An ESD mat under the chair, which drains static from the person', PWR, 'An ESD mat is for static. Nothing in the story points to static.']],
      'A short loss of power that restarts a computer is what a UPS covers. A surge suppressor handles spikes only.'),
    chat('l27-q-custody', 'evidence', 'Sam, Security', 'I made an exact copy of the drive from the Reyes laptop and gave the original to Legal. I did not write down who took it, or when.',
      'Which record is now missing?', [
        ['The chain of custody: who held the evidence, and when', true, 'The chain of custody is the written record of who held the evidence and when. Without it, the evidence may not be accepted.'],
        ['The order of volatility: which evidence to collect first', LOOK, 'The order of volatility says what to collect first. It is a plan for collecting, not a record of who held the evidence.'],
        ['The rollback plan: the steps to undo a change that failed', LOOK, 'A rollback plan belongs to change management. This is an evidence ticket.'],
        ['The acceptable use policy: what staff may do on company computers', LOOK, 'The AUP says what staff may do. It does not record who held a drive.']],
      'The written record of who held the evidence, when and where is the chain of custody.'),
    chat('l27-q-humid', 'safety', 'Bob, Archive', 'In the dry winter air of the archive room, people get small static shocks from the metal shelves, and two memory modules have failed in the PCs there.',
      'Which part of the environment needs controlling?', [
        ['Humidity: air that is too dry builds up static charge', true, 'Very dry air builds static, which can damage chips. Humidity is kept in range.'],
        ['Ventilation: the PCs need their vents blocked to keep dust out', PWR, 'Blocking vents makes parts hotter. Vents are kept clear.'],
        ['Surges: a spike on the power line is burning out the modules', PWR, 'A power surge does not give people shocks from metal shelves. Static in dry air does.'],
        ['Temperature: the room must be made as warm as possible', PWR, 'Heat does not cure static, and it shortens the life of parts.']],
      'Too dry raises static, too humid brings moisture and corrosion. Humidity is one of the things the room controls.'),
    recall('l27-q-full', 'backup', 'One kind of backup copies everything every time. It is the slowest and biggest to make, but a restore needs only that one backup, so it is the fastest to restore.', 'Which kind of backup is it? Type one word.',
      ['full', 'full backup'], 'It is the full backup. Incremental and differential backups are smaller to make but need more backups to restore.'),
    chat('l27-g-emerg', 'change', 'Ruth, Security', 'Attackers are using a hole in our VPN server right now, and people are being locked out. The patch is ready. The change board does not meet until Thursday.',
      'How is this change handled?', [
        ['As an emergency change: a quick approval, then the paperwork', true, 'An attack in progress is what an emergency change is for. It is approved quickly by named people, and the full write-up follows.'],
        ['As a normal change: wait for Thursday, then follow the whole process', TYPE, 'The attack is happening now, and waiting three days leaves the hole open. Emergency changes exist for this.'],
        ['As a standard change: use the written procedure with no new approval', TYPE, 'A standard change is routine and pre-approved. A patch for an active attack has no such procedure.'],
        ['Skip approval: make it tonight, and write it up whenever there is time', APPR, 'Even an emergency has a quick approval and a record. What it skips is the wait for the board.']],
      'An outage or an attack happening now makes a change an emergency: fast approval by a few named people, the write-up afterward.'),
    chat('l27-g-restore', 'backup', 'Pia, Finance', 'A teammate saved the wrong version over the budget file yesterday. The backup has yesterday’s morning version. Before anything changes, I want to compare the two.',
      'How do you restore the file?', [
        ['To an alternate location, so both versions stay and can be compared', true, 'Restoring to an alternate location leaves the current file alone, so the two versions can be compared.'],
        ['In place, over the current file, to save the time of a copy', BACK, 'Restoring in place overwrites the current file before anyone has compared them.'],
        ['Delete the current file first, then restore the backup in its place', BACK, 'Deleting first removes the version Pia wants to compare against.'],
        ['Run a new full backup of the drive, and compare the files later', BACK, 'A new backup copies the wrong version too, and does not bring back yesterday’s file.']],
      'A restore to an alternate location keeps the current file, which is what a comparison needs. A restore in place overwrites it.'),
    chat('l27-g-fire', 'safety', 'Leo, Facilities', 'A power strip behind the server rack is smoking and sparking, and a small flame has started. A water extinguisher hangs by the door.',
      'What is the first thing to do?', [
        ['Leave the room, warn people, and call emergency services', true, 'Electrical fires are not put out with water. The safe move is to get out, warn others and call for help.'],
        ['Pour the water on the strip, since it is a small fire', GEAR, 'Water on an electrical fire can carry current to the person. It is never used on one.'],
        ['Unplug the rack’s other cables, one by one, to save the servers', GEAR, 'Reaching into a smoking, sparking rack risks shock and burns, and it leaves the fire growing.'],
        ['Put on goggles and a mask, then carry the servers out', GEAR, 'Goggles and a mask protect against dust. They do not make a fire safe to work around.']],
      'Fire safety: never water on an electrical fire; leave, warn and call emergency services.'),
    recall('l27-g-order', 'evidence', 'A computer is still running, and it holds evidence. Part of that evidence is on the drive and part is in memory, which is lost when the power goes off.', 'Which is collected first? Type memory or drive.',
      ['memory', 'ram', 'in memory'], 'The order of volatility collects what disappears first. Memory goes when the power does, so it comes before the files on the drive.'),
    chat('l27-g-synth', 'backup', 'Eda, Systems', 'The weekly full backup puts too much load on the server. We would like a new full copy made on the backup server from the last full and the changes, without reading the server again.',
      'Which backup kind is that?', [
        ['A synthetic full backup', true, 'A synthetic full is built on the backup server from the last full plus the changes. The computer is not read again.'],
        ['A differential backup', BACK, 'A differential copies what changed since the last full. It does not build a new full copy.'],
        ['An incremental backup', BACK, 'An incremental copies what changed since the last backup. It does not build a new full copy.'],
        ['A full backup', BACK, 'A full backup reads everything from the server again, which is the load Eda wants to avoid.']],
      'A new full built on the backup server from the last full plus the changes is a synthetic full.'),
    chat('l27-g-scope', 'change', 'Hui, Operations', 'The request form says: “Only the two reception printers are changed. The network, the servers and the other printers are not part of this.”',
      'Which part of the request form is that?', [
        ['The scope: what is and is not included', true, 'The scope states what the change covers and what it leaves alone.'],
        ['The purpose: why the change is wanted', TYPE, 'The purpose gives the reason. This text lists what is included.'],
        ['The type: standard, normal or emergency', TYPE, 'The type names the kind of change. This text names the systems it covers.'],
        ['The date and time: when the change will happen', TYPE, 'The date and time say when. This text says what.']],
      'The scope of a change is what it covers and what it does not.'),
    recall('l27-g-image', 'evidence', 'To examine a suspect drive, nobody works on the original. They make a full, exact copy of the drive first, and check it against the original.', 'What is that exact copy of a drive called? Type one word.',
      ['image', 'drive image', 'disk image', 'forensic image'], 'The exact copy is an image. It is checked with a hash, and the image is examined while the original stays unchanged.'),
    recall('l27-g-msds', 'safety', 'A box of used toner cartridges and a swollen battery need disposing of. The sheet that comes with such products says what is inside, the hazards, and how to handle and dispose of them.', 'What is the sheet called? Type the four letters.',
      ['msds', 'sds'], 'It is the MSDS (material safety data sheet, now often called SDS). Batteries and toner do not go in the regular trash.'),
  ]);
})();
