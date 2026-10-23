// IT Help Desk, lesson 27: questions held in reserve for the weekly review, three for each topic (change, backup, safety, evidence). Facts as in items-l27.js. Invented people.
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
    chat('l27-r-change-1', 'change', 'Abe, Network', 'We will put in the new switch on Sunday at 2 a.m., when almost nobody is in the building, and the board has agreed to that time.',
      'What is that agreed time called?', [
        ['A maintenance window', true, 'A maintenance window is a time agreed for changes, usually when few people work.'],
        ['A change freeze', TYPE, 'A change freeze is a time when changes are not allowed.'],
        ['End-user acceptance', TYPE, 'End-user acceptance is the users confirming the finished change works for them.'],
        ['Sandbox testing', TYPE, 'Sandbox testing is a trial in a safe copy, not a time slot for the live change.']],
      'A time agreed for making changes, usually when few people work, is a maintenance window.'),
    chat('l27-r-change-2', 'change', 'Bea, Systems', 'Before we touch the live mail server, I put the update on a copy of it that nobody uses, to see what the update does.',
      'Which part of change management is that?', [
        ['Sandbox testing: a trial in a safe copy, not the live system', true, 'A sandbox is a safe place to try a change first, so a failure harms nothing live.'],
        ['A rollback plan: the steps that undo a change', TYPE, 'A rollback plan is written steps for going back. A trial run on a copy is something else.'],
        ['A backup plan: a copy of the data taken before', TYPE, 'A backup plan copies the data. Here, the update itself is being tried on a copy.'],
        ['A peer review: a second technician checks the work', TYPE, 'A peer review checks finished work. Here the update has not been applied to anything live.']],
      'Trying a change in a safe copy first is sandbox testing.'),
    recall('l27-r-change-3', 'change', 'After the work is finished, the people who use the system tell the desk that it works for them, and the change is accepted.', 'What is this last step called? Type the name.',
      ['end-user acceptance', 'user acceptance', 'acceptance'], 'The users’ confirmation at the end is end-user acceptance. It comes after implementation and the peer review.'),
    chat('l27-r-backup-1', 'backup', 'Cal, Office', 'We keep copies on a disk and on tapes, and both sit in the server room. A fire in that room destroyed the server, the disk and the tapes.',
      'What did the backups lack?', [
        ['A copy offsite, away from the building', true, 'The 3-2-1 rule keeps one copy offsite. Two kinds of media in the same room both burned.'],
        ['A third kind of media kept in the same room', ONE, 'A third kind in the same room would have burned too. The place was the problem.'],
        ['A full backup instead of an incremental one', BACK, 'The kind of backup does not matter when every copy is in the same room.'],
        ['A UPS to protect the server room from power loss', PWR, 'A UPS handles power problems. It does not save copies from a fire.']],
      'A copy kept only in the building is lost with the building. The 3-2-1 rule puts one copy offsite.'),
    chat('l27-r-backup-2', 'backup', 'Dee, Accounts', 'Our backup makes a full copy on Sunday, and each night it copies only what changed since the night before. The drive failed on Thursday morning.',
      'What does the restore need?', [
        ['Sunday’s full and the Monday, Tuesday and Wednesday backups, in order', true, 'Each night copies only what changed since the last backup, so this is incremental. The restore needs the full and every night after it.'],
        ['Sunday’s full and only Wednesday night’s backup', BACK, 'That is how a differential restore goes. These nightly copies hold just one night of changes each.'],
        ['Wednesday night’s backup alone, since it is the newest', BACK, 'Wednesday’s copy holds only Wednesday’s changes.'],
        ['Sunday’s full alone, since a full holds everything', BACK, 'The full holds the files as they were on Sunday. The changes since then are in the nightly copies.']],
      'A backup of what changed since the last backup of any kind is incremental. Its restore needs the last full plus every incremental, in order.'),
    chat('l27-r-backup-3', 'backup', 'Eve, Owner', 'We have run nightly backups for two years. The program says “success” every morning. Nobody has ever tried to get a file back from it.',
      'What should the desk do?', [
        ['Restore a sample file on a regular schedule, to prove that backups work', true, 'A backup nobody has restored from is untested. A regular test restore is the proof.'],
        ['Nothing: a success message proves that the backup is good', BACK, 'The message says the copy finished. Only a restore shows that the data can come back.'],
        ['Make a second backup of the same drive with the same program', ONE, 'A second copy by the same program carries the same untested risk.'],
        ['Switch from nightly to weekly backups to reduce the risk', BACK, 'Fewer backups do not make them any more tested.']],
      'A backup is tested by restoring from it on a regular schedule.'),
    chat('l27-r-safety-1', 'safety', 'Fay, Facilities', 'A technician has to move a 60-pound laser printer from the floor onto a shelf by himself, today.',
      'What is the safe way?', [
        ['Bend the knees, keep the back straight, hold it close, or use a cart or a helper', true, 'Lifting technique protects the back: legs do the work, the load stays close, and a heavy load gets a cart or a second person.'],
        ['Bend at the waist and lift with the back, to move it fast', GEAR, 'Lifting with the back is how backs get hurt.'],
        ['Hold it at arm’s length so it stays away from the body', GEAR, 'A load held away from the body strains the back more. Keep it close.'],
        ['Lift it alone in one go, because it is only 60 pounds', GEAR, 'A load that heavy gets a cart or a helper, not a guess about how strong one person is.']],
      'Lifting is done with the legs, the back straight and the load close, and heavy things get a cart or a second person.'),
    chat('l27-r-safety-2', 'safety', 'Gil, Reception', 'Three new printers were plugged in using long cables that run across the hallway floor to the one wall outlet. Someone has already tripped.',
      'Which safety practice fixes it?', [
        ['Cable management: bundle the cables and run them along the wall', true, 'Cable management keeps cables out of walkways, which removes the trip hazard.'],
        ['Put a warning sign beside the cables and leave them where they are', GEAR, 'A sign warns people, but the hazard stays.'],
        ['Use even longer cables so that they lie flatter on the floor', GEAR, 'Longer cables across a hallway are still across a hallway.'],
        ['Wear antistatic bags over the plugs to keep out the dust', STAT, 'Antistatic bags store parts. They have nothing to do with a trip hazard.']],
      'Tying cables together and keeping them out of walkways is cable management.'),
    chat('l27-r-safety-3', 'safety', 'Hana, Stockroom', 'A laptop battery in the stockroom has swollen, and there is a box of used toner cartridges on the shelf beside it. I need to know how to get rid of them.',
      'Where does the desk find out how to handle and dispose of them?', [
        ['The MSDS, the data sheet that comes with the product', true, 'An MSDS (now often SDS) says what is inside, the hazards and how to handle, store and dispose of a product.'],
        ['The EULA that came with the laptop’s software', LIC, 'A EULA is software terms. It says nothing about disposing of a battery.'],
        ['The rollback plan for the last change to the laptops', LIC, 'A rollback plan undoes changes. It is not a safety document.'],
        ['The acceptable use policy that staff sign each year', LIC, 'An AUP says how staff use computers, not how to dispose of batteries and toner.']],
      'How to handle, store and dispose of batteries and toner is in the MSDS. They do not go in the regular trash.'),
    chat('l27-r-evidence-1', 'evidence', 'Ivo, Security', 'I finished imaging a drive for an investigation, and the lawyers are coming to collect the image today.',
      'What keeps the chain of custody intact?', [
        ['A hand-off sheet signed by both people, with date and time', true, 'The chain of custody is the written record of who held the evidence and when. Each hand-off is signed.'],
        ['Leaving the image on the lawyers’ desk when nobody is there', EVID, 'That leaves a gap in the record, since nobody can say who held it.'],
        ['Emailing the image to them and deleting the local copy', EVID, 'Deleting the copy and sending the file leaves no record of who handled it.'],
        ['Telling them in person, without writing anything down', EVID, 'A spoken hand-off leaves no record to prove who held the evidence.']],
      'Each hand-off of evidence is written down and signed. That record is the chain of custody.'),
    recall('l27-r-evidence-2', 'evidence', 'The order of volatility collects what disappears first. Memory comes first, then the files on the drive, and then a last group kept elsewhere.', 'Name one thing in that last group.',
      ['logs', 'backups', 'log', 'archives', 'archive', 'logs and backups', 'backup'], 'The most lasting evidence is collected last: logs and backups kept elsewhere change least.'),
    chat('l27-r-evidence-3', 'evidence', 'Jon, Server team', 'While patching a server I saw signs that someone had been copying customer files out at night. I was only there to patch.',
      'What do you do first?', [
        ['Tell management and write down what you saw and did', true, 'Inform management and keep incident documentation. Whether the police are called is management’s decision.'],
        ['Delete the suspicious logins to stop the copying right now', EVID, 'Deleting logs destroys evidence. Stopping an attack is decided by management and security.'],
        ['Email the customers to say their files may have been stolen', SKIP, 'Telling customers is a company decision made by management, not by the technician.'],
        ['Finish the patch, restart the server and say nothing', EVID, 'A restart loses what is in memory, and saying nothing hides the evidence.']],
      'Signs of an attack are reported to management and documented, and the evidence is left unchanged.'),
  ]);
})();
