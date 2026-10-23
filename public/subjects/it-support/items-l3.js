// IT Help Desk, lesson 3 "What changed, and protect the data" (move 3 of the way of thinking): the worked ticket, the groups and the reserve.
// Move 3 is CompTIA's own step 1 as printed in the older Core 1 objectives: gather information from the user, identify user changes,
// "if applicable, perform backups before making changes", and inquire about environmental or infrastructure changes (IT2). Making the fault
// happen again is not a required step (ruling 2): a fault that comes and goes is worked from what changed, the log and the user's notes.
// Scope (many people: the company's side; one: the user's) is a rule of thumb, and one question has a change that a group made themselves.
// The check items are in items-l3-check.js. Invented people and companies.
(() => {
const L = (id, text, note) => ({ id, text, ...(note ? { note } : {}) });
const email = (from, detail, subject, lines, id) => ({ kind: 'message', form: 'email', from, detail, subject, lines, ...(id ? { id } : {}) });
const chat = (from, detail, lines, id) => ({ kind: 'message', form: 'chat', from, detail, lines, ...(id ? { id } : {}) });
const call = (from, detail, lines) => ({ kind: 'message', form: 'call', from, detail, lines });
const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
const ok = (id, text, then) => ({ id, text, ok: true, then });
const no = (id, text, then, slip) => ({ id, text, then, ...(slip ? { slip } : {}) });
const pick = (id, prompt, options) => ({ id, kind: 'choose', prompt, shuffle: true, options });
const item = (id, blocks, ask, deciding, reason, extra) => ({ id, strand: 'changed', facets: {}, blocks, asks: [ask], deciding, reason, ...(extra || {}) });
const tapChange = (id, from, subject, lines, right, reason, form) => item(id,
  [form === 'chat' ? chat(from[0], from[1], lines, 'mail') : email(from[0], from[1], subject, lines, 'mail')],
  { id: 'where', kind: 'tap', prompt: 'Tap the line that tells you what changed.', in: 'mail', right: [right] }, [right], reason);

FC.items('it-support', [
  // ----- the worked ticket: a first guess (a Windows update) that the desk's records rule out -----
  { id: 'l3-w-slow', strand: 'changed', facets: {},
    blocks: [
      email('Petra Lund', 'Email · Tuesday 8:12 AM', 'Laptop slow, Excel crashing', [
        L('n1', 'My laptop has been very slow since last week.'),
        L('n2', 'Excel crashes whenever I open the month-end file, and that file goes out Friday.'),
        L('n3', 'Could you wipe it and start over? A friend said that fixes everything.'),
        L('n4', 'I haven’t changed anything on my end.')]),
      table('What the desk’s records show for this laptop', ['Record', 'What it says'], [
        ['u1', 'Windows updates, last 30 days', 'None installed'],
        ['u2', 'Programs added, last 30 days', 'PDF Toolbox add-in (an extra feature for Excel), installed Monday of last week'],
        ['u3', 'Backup of her files', 'None found']])],
    asks: [
      pick('change', 'What changed on this laptop?', [
        no('update', 'A Windows update, which could slow a laptop down', 'The records show no update in 30 days, so that guess is out.'),
        ok('addin', 'A program added on Monday of last week', 'The add-in went on Monday of last week, which fits “since last week”. It is where you look first, not yet proved.'),
        no('none', 'Nothing, since she says she changed nothing on her end', '“Nothing” means nothing she noticed. The records show a change she did not think of.', 'took-no-change')]),
      pick('first', 'She wants it wiped. What do you do first?', [
        ok('copy', 'Copy her files to the company storage first, then open one of them to check that the copy works', 'A wipe erases the month-end file, and the records show no backup. The copy comes first.'),
        no('wipe', 'Wipe it as she asked, since that is the quickest way to a clean laptop', 'The month-end file would be gone, and it goes out Friday.', 'no-backup'),
        no('remove', 'Remove the add-in right away, since it is the likeliest cause', 'Removing it is already a change to her laptop, and her files are not safe yet.', 'no-backup')])],
    steps: [
      { id: 'story', does: 'Read her words.', working: 'Slow since last week, Excel crashes on one file, she wants a wipe, and she says nothing changed.' },
      { id: 'guess', does: 'Guess a change, and check it against the records.', working: 'First guess: a Windows update. The records show none in 30 days, so that guess is out.', ask: 'change' },
      { id: 'lead', does: 'Look at what else changed.', working: 'A PDF add-in went on Monday of last week. That fits “since last week”, so it is the lead.' },
      { id: 'copy', does: 'Before you touch anything, protect her files.', working: 'A wipe would erase the month-end file and no backup exists. Copy her files, then open one from the copy.', ask: 'first' },
      { id: 'again', does: 'Then have her show you.', working: 'She opens the month-end file and Excel crashes while you watch. Now you can take the add-in out and see whether the crash is gone.' }],
    deciding: ['u2', 'u3', 'n3'],
    reason: 'The records name a change she did not mention, the add-in. They also show no backup, and a wipe would erase the file she needs on Friday. Find the change, then copy the files, then fix.' },

  // ----- the first group (the deciding words marked): a change in the user's words, a backup, a change by the company, a fault that comes and goes -----
  tapChange('l3-p-label', ['Marcus Bell', 'Email · Monday 8:30 AM'], 'Label printer dead', [
    L('a1', 'Yesterday afternoon I plugged a new USB hub (a small box with extra sockets) under the desk so I could charge my phone.'),
    L('a2', 'Now the label printer has stopped working.', 'This is what is wrong, not what changed.'),
    L('a3', 'I need labels for the 10:30 shipments.', 'This is how soon he needs it, not what changed.')], 'a1',
    'The printer worked until a new USB hub went in under the desk. A new device is a change, so that is where you look first.'),
  item('l3-p-reset', [
    table('Ticket 4471', ['Field', 'Entry'], [
      ['f1', 'User', 'Dana Ortiz, billing'],
      ['f2', 'Problem', 'Outlook closes by itself several times a day'],
      ['f3', 'What changed', 'Dana added a calendar add-in last Thursday and removed it Friday; the problem is still there'],
      ['f4', 'Next step, approved by the senior technician', 'Reset the laptop to its factory state (this erases everything on it)'],
      ['f5', 'Backup of her files', 'None found']])],
    pick('before', 'What do you do before the reset?', [
      ok('copy', 'Make a copy of her files on the company storage, and open one', 'The reset erases everything on the laptop and nothing else holds her files.'),
      no('go', 'Start the reset; the senior technician has already approved it', 'The approval is for the reset, not for losing her files. They are gone once it runs.', 'no-backup'),
      no('again', 'Put the question to Dana again about what changed on her laptop', 'The ticket already says: a calendar add-in, added Thursday and removed Friday. The next move is protecting her files.', 'repeated-step')]),
    ['f4', 'f5'], 'The next step erases everything on the laptop and the ticket shows no backup. Copy the files first, and check the copy opens.'),
  item('l3-p-floor2', [
    chat('Tom Ellery', 'Chat · Monday 8:40 AM', [L('m1', 'I can’t open the shared drive. Nothing changed on my end, it just stopped.')]),
    table('Tickets opened Monday', ['User', 'Floor', 'Opened', 'Problem'], [
      ['t1', 'Tom Ellery', '2', '8:40 AM', 'Cannot open the shared drive'],
      ['t2', 'Alma Reyes', '2', '8:44 AM', 'Cannot open the shared drive'],
      ['t3', 'Chen Wu', '2', '8:51 AM', 'Cannot open the shared drive'],
      ['t4', 'Dale Frost', '2', '9:02 AM', 'Cannot open the shared drive']]),
    table('The network team’s change log', ['When', 'Who', 'What'], [['c1', 'Sunday 11:00 PM', 'Network team', 'Replaced the floor 2 network switch (the box that connects the wires on that floor)']])],
    pick('where', 'Tom says nothing changed on his end. What most likely changed?', [
      ok('company', 'Something the company did on its side: the floor 2 switch was replaced late on Sunday night', 'Four people on one floor have the same fault since Monday morning, and the log shows a change on that floor.'),
      no('tom', 'Something on Tom’s own laptop, like a setting or an update that only he would see from his side of things', 'Three other people on the floor have the same fault, so it is not only his laptop.', 'wrong-scope'),
      no('none', 'Nothing at all, because Tom would have noticed if something had changed', 'He may be right about his own side. The log shows a change he could not see.', 'took-no-change')]),
    ['t2', 't3', 't4', 'c1'], 'The same fault on the same floor since the same morning points at a change the company made. The log names one, so that is where you look. This is a rule of thumb, which the next questions test.'),
  item('l3-p-black', [
    call('Hana Ito', 'Phone call · Wednesday 2:05 PM', [L('c1', 'My screen goes black sometimes, and then it comes back.'), L('c2', 'It did it twice this morning. I can’t say what I was doing.')])],
    pick('first', 'She cannot say what brings it on. What do you do?', [
      ok('log', 'Have her message you the time it happens, then match the times to the computer’s log', 'There are no steps to repeat, so you work from the times and the log (the list of errors the computer keeps, with a time on each).'),
      no('monitor', 'Order her a new monitor right away, since the screen is the part that keeps going black on her', 'Nothing yet says the monitor is at fault. A part bought on a guess is another guess.', 'guess-again'),
      no('wait', 'Tell her to call back the next time it goes black, and close the ticket for now', 'You would close with nothing gathered and nothing for her. Her notes and the log are what you can use now.', 'waited-idle')]),
    ['c2'], 'A fault that comes and goes gives no steps to follow. You collect what you can: the times it happens and the log, plus what changed. Then you narrow it down.'),

  // ----- the second group (no help) -----
  tapChange('l3-q-password', ['Ali Rahman', 'Chat · Monday 9:20 AM'], null, [
    L('a1', 'Can you fix it before my 10:00 meeting?', 'This is how soon he needs it, not a change.'),
    L('a2', 'Outlook keeps asking me to sign in again and again. It started Saturday.', 'This is the symptom, not a change.'),
    L('a3', 'I changed my password Friday night, but I don’t think that matters.')], 'a3',
    'A password change the night before is a change, and Outlook keeps asking to sign in. The user did not think it mattered, which is why you put particulars to users.', 'chat'),
  item('l3-q-lose', [{ kind: 'prose', text: ['Sam’s desktop is slow, but it starts and runs normally. You are choosing a fix.'] }],
    { id: 'lose', kind: 'choose', many: true, shuffle: true, prompt: 'Tap each step that could erase Sam’s saved files.', options: [
      no('restart', 'Restart the computer', 'A restart does not erase saved files; it loses only what Sam has not saved, so have him save first. His files do not need a copy.'),
      ok('reinstall', 'Do a clean install of Windows', 'A clean install erases what is on the drive unless the files are copied first.'),
      no('wifi', 'Turn Wi-Fi off and on', 'It changes a connection, not his files.'),
      ok('drive', 'Replace the hard drive', 'His files are on the old drive. Unless they are copied, they go with it.'),
      ok('profile', 'Delete his user profile (the folder where Windows keeps his files and settings) so Windows builds a new one', 'The profile folder holds his files and settings. Deleting it removes them.'),
      no('port', 'Plug his monitor into another port', 'It changes a cable, not his files.')] },
    [], 'The steps that erase, replace or remove where his files live need a copy first. A restart of a healthy computer or a cable move does not. Save open work before a restart.'),
  item('l3-q-nothing', [
    chat('Victor Lang', 'Chat · Thursday 11:05 AM', [L('v1', 'Nothing changed. My printer just broke on Wednesday.'), L('v2', 'The printer button now says “offline”.')]),
    table('What the desk’s records show for Victor’s computer', ['Record', 'What it says'], [
      ['r1', 'Windows update installed', 'Tuesday 11:40 PM, restarted automatically'],
      ['r2', 'Programs added, last 30 days', 'None']])],
    pick('next', 'He says nothing changed. What do you do?', [
      ok('records', 'Check the desk’s records for changes, and put the update and the restart on Tuesday night to him', '“Nothing changed” usually means nothing he noticed. The records show an update and a restart on Tuesday night.'),
      no('printer', 'Take his word that nothing changed, and start by looking for a fault inside the printer itself', 'You skipped a change that the records show.', 'took-no-change'),
      no('argue', 'Tell him something must have changed and that he is forgetting what he did on Tuesday night', 'Do not tell him he is wrong. Check the records and put particulars to him.', 'argued')]),
    ['r1'], 'Users often cannot see the change. The record shows an update and a restart the night before the fault, so that is where you start.'),
  item('l3-q-freeze', [
    call('Greg Holt', 'Phone call · Thursday 10:15 AM', [L('c1', 'My computer freezes when I print, but not every time.'), L('c2', 'I never know which time it will do it.')]),
    table('What the desk can see on Greg’s computer', ['Check', 'Result'], [
      ['r1', 'Windows updates and programs added, last 30 days', 'None'],
      ['r2', 'Error log', 'Two entries from the print program, Monday 10:02 AM and Wednesday 3:40 PM']])],
    pick('first', 'There is no way to make it freeze on demand. What do you do first?', [
      ok('log', 'Put the log times to Greg and have him note the time of each freeze from now on', 'The log already shows two times. His own notes can be matched to it, and together they say more than a guess does.'),
      no('driver', 'Reinstall the printer driver (the small program that lets the computer talk to the printer) on his computer, since it only freezes when he prints', 'It is a guess with nothing to say it is the cause, and a fault that comes and goes can look fixed by luck.', 'guess-again'),
      no('callback', 'Tell him to restart the computer now and call back if it freezes on him again', 'You have gathered nothing, and he is left with the fault.', 'waited-idle')]),
    ['c2', 'r2'], 'A fault that comes only some of the time gives no steps. You work from the log and his notes of the times, then narrow it down.'),
  item('l3-q-onlyme', [
    chat('Rosa Diaz', 'Chat · Tuesday 9:10 AM', [L('m1', 'The shared drive won’t open since I got back from leave. I haven’t done anything.')]),
    table('What the desk found', ['Check', 'Result'], [
      ['d1', 'Shared drive from three other computers on Rosa’s floor', 'Opens normally'],
      ['d2', 'Rosa’s password', 'Reset by the desk on Monday, her first day back']])],
    pick('look', 'Where do you look for the change?', [
      ok('hers', 'At Rosa’s own side: her password reset on Monday and her laptop', 'Three other computers on her floor open the drive, so the change is on her side. This desk’s rule: a change made to one person’s account, such as a password reset, counts as that person’s side, even when the desk made it.'),
      no('company', 'At the company: a change to the network', 'Three other computers on her floor open the drive. A change to the network would have reached them too.', 'wrong-scope')]),
    ['d1', 'd2'], 'Others on the floor are fine, so the change is hers. As a rule of thumb, when many have the same fault from the same day, look at the company. When one does, look at her side.'),
  item('l3-q-backup', [
    table('Ticket 5190', ['Field', 'Entry'], [
      ['f1', 'User', 'Kofi Mensah, shipping'],
      ['f2', 'Problem', 'Computer shows a hard drive warning and is very slow'],
      ['f3', 'Next step', 'Replace the hard drive and do a clean install of Windows'],
      ['f4', 'Backup of his files', 'The desk’s nightly backup ran today at 6:00 AM. He has saved no new files since yesterday.']])],
    pick('before', 'What do you do before the new drive goes in?', [
      ok('check', 'Open one file from this morning’s backup to check that it works, then go on with the replacement', 'A backup exists and nothing new has been saved since, so a second copy adds nothing. Opening one file shows the backup works.'),
      no('swap', 'Start the replacement; the nightly backup has surely done its job, so there is no need to look at it', 'A backup you have not opened is not yet a backup you can rely on. Open one file first.', 'no-backup'),
      no('again', 'Copy all his files to the company storage again by hand before you do anything else with the drive', 'The 6:00 AM backup already holds them, and he has saved nothing new. Open one file from it instead.', 'repeated-step')]),
    ['f3', 'f4'], 'CompTIA backs up “if applicable”. A recent backup already holds his files, so the step is to check that it opens, not to make another.'),
  item('l3-q-quiet', [
    email('Lin Zhou', 'Email · Wednesday 9:05 AM', 'Slow laptop', [
      L('a1', 'My laptop has been slow for about a week. I have not added or changed anything.')]),
    table('What the desk’s records show for Lin’s laptop', ['Record', 'What it says'], [
      ['r1', 'Windows updates, last 30 days', 'None installed'],
      ['r2', 'Programs added, last 30 days', 'None'],
      ['r3', 'Other people with the same fault', 'None']])],
    pick('next', 'The records show no change. What do you do?', [
      ok('ask', 'Say nothing is found yet in the records, and put particulars to Lin about a week ago: a move, a new device, a new password', 'You have found no change yet, so you put particulars to her and find out when it last worked well.'),
      no('hardware', 'Decide that the hard drive is failing, since nothing on the software side has changed in the records', 'No record points at the drive. That is a guess dressed up as a finding.', 'guess-again'),
      no('closed', 'Tell her that nothing has changed on her laptop and close the ticket as “no change found” for now', 'The records show no change, but she still has a slow laptop and no one has asked her anything.', 'took-no-change')]),
    ['r1', 'r2', 'r3'], 'An empty record is not an answer. “Nothing found yet” sends you back to the user with particulars; it does not end the question.'),
  item('l3-q-group', [
    chat('Hugo Barr', 'Chat · Tuesday 8:50 AM', [L('m1', 'Three of us on the sales team can’t open quotes in the price program since Monday. Nothing changed on our side.')]),
    table('What the desk found', ['Check', 'Result'], [
      ['d1', 'Network team’s change log, last week', 'No changes'],
      ['d2', 'Programs added, last 30 days, for all three people', 'The same “QuoteTidy” add-in (an extra feature for the price program), each installed Friday'],
      ['d3', 'Other sales team members', 'Price program works normally']])],
    pick('look', 'Three people have the same fault. Where do you look for the change?', [
      ok('addin', 'At what the three people did themselves: the same add-in each of them installed on Friday', 'The log shows nothing from the company, and the others work. The same add-in is the one thing the three share.'),
      no('company', 'At what the company changed, since several people having the same fault points that way every time', 'Several people having it is only a rule of thumb. The log shows no company change, and the others work.', 'wrong-scope'),
      no('none', 'At nothing: Hugo says nothing changed on their side, so there is no change', 'Users cannot see every change. The records show an add-in all three put on.', 'took-no-change')]),
    ['d1', 'd2', 'd3'], 'A change many people made themselves is still on the users’ side. The rule of thumb gives a place to start, and the records decide.'),

  // ----- the third group: mixed -----
  item('l3-m-swap', [
    table('Ticket 5120', ['Field', 'Entry'], [
      ['f1', 'User', 'Elena Park, accounting'],
      ['f2', 'Problem', 'Laptop clicks, freezes, and sometimes will not start'],
      ['f3', 'Next step', 'Swap in a new laptop and recycle this one'],
      ['f4', 'Files on the old laptop', 'Her Documents folder and Desktop'],
      ['f5', 'Backup of her files', 'None found']])],
    pick('before', 'What do you do before the swap?', [
      ok('copy', 'Copy her files off the old laptop to the company storage, then open one file from the copy to check it', 'Her files are on the old laptop only. Once it is recycled they are gone.'),
      no('swap', 'Swap the laptop now, and sort out where her files go once she has settled in with the new one', 'Later may be never: the old laptop is going to be recycled.', 'no-backup'),
      no('restart', 'Restart the old laptop once more to see whether it starts up before the swap', 'It already clicks and freezes, so each start is a risk to the files. Copy them now.', 'no-backup')]),
    ['f2', 'f3', 'f4', 'f5'], 'The old laptop is failing and is the only place her files live. Copy them first, with as few starts as it takes, and open one to check the copy.'),
  tapChange('l3-m-desk', ['Noor Haddad', 'Chat · Tuesday 1:15 PM'], null, [
    L('a1', 'I have a meeting at 2.', 'This is how soon, not a change.'),
    L('a2', 'My second monitor is blank.', 'This is the symptom, not a change.'),
    L('a3', 'I moved to a new desk on Monday and plugged everything in myself.')], 'a3',
    'A move to a new desk, with everything plugged in again by hand, is a change. A cable in the wrong port is the first thing to look at.', 'chat'),
  tapChange('l3-m-short', ['Cara Wen', 'Chat · Wednesday 3:50 PM'], null, [
    L('a1', 'My email will not sync (keep itself matched with the mail server) on my phone.', 'This is the symptom, not a change.'),
    L('a2', 'It is a new phone.'),
    L('a3', 'I need it before I board my flight at 6.', 'This is how soon, not a change.')], 'a2',
    'A new phone is a new device, and email stopped syncing on it. A change can be a short line.', 'chat'),
  item('l3-m-move', [{ kind: 'prose', text: ['Lena has told you her story: since Monday she cannot print from the new laptop she was given on Friday. You have said her story back and searched the knowledge base, and nothing fits. You have not yet found out what changed, and you have not looked at the desk’s records.'] }],
    { id: 'move', kind: 'choose', from: 'move', only: ['story', 'changed', 'known'], right: 'changed', prompt: 'Which move comes next?',
      slips: { known: 'fixed-first' },
      then: { story: 'You have her story, and the knowledge base is searched. The next move is finding what changed.', known: 'A known fix comes after you know what changed and her files are safe.', changed: 'You have her story, so you find what changed and protect her data before touching the laptop.' } },
    [], 'The story is in and the knowledge base had nothing. Finding what changed comes next, with her data kept safe before anything is tried.'),
  item('l3-m-question', [chat('Ravi Menon', 'Chat · Tuesday 9:30 AM', [L('r1', 'My shared drive disappeared this morning.')])],
    pick('say', 'What do you say next?', [
      ok('changed', 'When did it last work, and what is different since: a move, a new program, an update, a new password?', 'Naming the usual kinds of change helps him think of one he would not mention.'),
      no('restart', 'Restart the computer first, since a restart might bring a missing drive back', 'That is a fix tried before you know what changed.', 'fixed-first'),
      no('delete', 'Drives do not just disappear on their own, so what did you delete or change this morning?', 'That blames him and tells you nothing. Put particulars to him in a friendly way.', 'argued')]),
    ['r1'], 'The question names the common changes and starts from the last time it worked. That finds the change without blaming him.'),

  // ----- reserve: three unseen questions for the topic's returns (no lesson names them) -----
  tapChange('l3-r-mouse', ['Mia Oduya', 'Email · Monday 10:05 AM'], 'Mouse jumpy', [
    L('a1', 'On Monday I switched to the wireless keyboard and mouse that came in the mail.'),
    L('a2', 'My mouse pointer has been jumpy since Monday morning.', 'This is the symptom, not a change.'),
    L('a3', 'It is making it hard to finish my report.', 'This is how it hurts her, not a change.')], 'a1',
    'The new wireless mouse arrived the day the pointer began to jump. A new device is a change, so look at it first.'),
  item('l3-r-profile', [
    table('Ticket 5301', ['Field', 'Entry'], [
      ['f1', 'User', 'Leo Park, purchasing'],
      ['f2', 'Problem', 'Sign-in takes ten minutes and the desktop is empty'],
      ['f3', 'Next step, approved by the senior technician', 'Delete his user profile so Windows builds a new one (this removes his files and settings)'],
      ['f4', 'Backup of his files', 'None found']])],
    pick('before', 'What do you do before deleting the profile?', [
      ok('copy', 'Copy his files from the profile folder to the company storage, and open one', 'The profile folder holds his files. Deleting it removes them.'),
      no('delete', 'Delete the profile as the approved step says; it is the desk’s own article', 'The approval is for the step, not for losing his files.', 'no-backup'),
      no('wait', 'Restart the computer and see whether his desktop comes back by itself', 'That is a fix tried before his files are safe.', 'fixed-first')]),
    ['f3', 'f4'], 'Deleting the profile removes the files and no backup exists. Copy them first, and check the copy opens.'),
  item('l3-r-print', [
    chat('Gwen Ito', 'Chat · Thursday 9:00 AM', [L('m1', 'None of us in marketing can print since yesterday. Nothing changed on our side.')]),
    table('Tickets opened Wednesday and Thursday', ['User', 'Department', 'Problem'], [
      ['t1', 'Gwen Ito', 'Marketing', 'Cannot print'], ['t2', 'Sol Ash', 'Marketing', 'Cannot print'],
      ['t3', 'Bea Ford', 'Marketing', 'Cannot print'], ['t4', 'Raj Dutt', 'Marketing', 'Cannot print']]),
    table('The network team’s change log', ['When', 'What'], [['c1', 'Tuesday night', 'The print server (the computer that sends documents to the printers) was moved to a new computer']])],
    pick('where', 'Gwen says nothing changed on their side. What most likely changed?', [
      ok('company', 'Something the company did: the print server moved on Tuesday night', 'Four people in one department have the same fault from the same day, and the log shows a change that matches.'),
      no('gwen', 'Something on Gwen’s own computer that only she would see from her side', 'Three others have the same fault, so it is not only her computer.', 'wrong-scope'),
      no('none', 'Nothing at all, because Gwen would have said if something had changed', 'She may be right about her side. The log shows a change she could not see.', 'took-no-change')]),
    ['t2', 't3', 't4', 'c1'], 'Several people with the same fault from the same day usually point at the company, and the log decides. Here it names a change that matches.')
]);
})();
