// IT Help Desk, lesson 3 "What changed, and protect the data": the six questions of the check (new, no help). One finds the change in the user's
// words, one is a backup before a laptop is sent back, one is a change by the company, one is a fault that gives no steps (log and notes), one is
// "nothing changed", one is a restart offered on a failing computer. Two of them carry the slip the pass rule counts: no ticket loses a user's data
// (plan, the real-world test). Invented people.
(() => {
const L = (id, text, note) => ({ id, text, ...(note ? { note } : {}) });
const ok = (id, text, then) => ({ id, text, ok: true, then });
const no = (id, text, then, slip) => ({ id, text, then, ...(slip ? { slip } : {}) });
const pick = (id, prompt, options) => ({ id, kind: 'choose', prompt, shuffle: true, options });
const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });

FC.items('it-support', [
  { id: 'l3-k-dock', strand: 'changed', facets: {},
    blocks: [{ kind: 'message', form: 'email', id: 'mail', from: 'Joy Tan', detail: 'Email · Thursday 7:55 AM', subject: 'Screen flickers', lines: [
      L('a1', 'My laptop screen has flickered since yesterday.', 'This is the symptom, not a change.'),
      L('a2', 'On Tuesday evening I started using the new docking station (a box my laptop plugs into for screens and other devices) the office gave me.'),
      L('a3', 'I have a video call at 9.', 'This is how soon, not a change.')] }],
    asks: [{ id: 'where', kind: 'tap', prompt: 'Tap the line that tells you what changed.', in: 'mail', right: ['a2'] }],
    deciding: ['a2'], reason: 'A new docking station is a new device, and the flicker began right after she started using it. That is the change to look at first.' },
  { id: 'l3-k-drive', strand: 'changed', facets: {},
    blocks: [table('Ticket 5188', ['Field', 'Entry'], [
      ['f1', 'User', 'Omar Siddiqui, warehouse office'],
      ['f2', 'Problem', 'Laptop is very slow and its battery no longer holds a charge'],
      ['f3', 'Next step', 'Give Omar a new laptop and send this one back to the supplier'],
      ['f4', 'Files on the computer', 'Order forms on the Desktop and in Documents'],
      ['f5', 'Backup of his files', 'None found']])],
    asks: [pick('before', 'What do you do before the old laptop is sent back?', [
      ok('copy', 'Copy his order forms to the company storage first, then open one of them to check that the copy works', 'The forms are on the old laptop only, and the new laptop starts empty.'),
      no('swap', 'Get the new laptop ready and send the old one back with the supplier’s next pickup, since swapping laptops is routine work for the desk', 'His order forms are on the old laptop. Once it is gone, nobody can find them.', 'no-backup'),
      no('warn', 'Reset the old laptop to its factory state, so that none of Omar’s data is left on it when it goes back', 'A reset erases his order forms for good, and no copy exists.', 'no-backup')])],
    deciding: ['f3', 'f4', 'f5'], reason: 'Sending the laptop back takes the order forms with it, and no backup exists. Copy the order forms first, and check the copy opens.' },
  { id: 'l3-k-router', strand: 'changed', facets: {},
    blocks: [
      { kind: 'message', form: 'chat', from: 'Beth Cole', detail: 'Chat · Wednesday 8:50 AM', lines: [L('m1', 'I can connect to the Wi-Fi at reception but no web pages open. I haven’t changed anything.')] },
      table('Tickets opened Wednesday', ['User', 'Where', 'Problem'], [
        ['t1', 'Beth Cole', 'Reception', 'Wi-Fi connects, no web pages'],
        ['t2', 'Nils Vega', 'Reception', 'Wi-Fi connects, no web pages'],
        ['t3', 'Una Park', 'Reception', 'Wi-Fi connects, no web pages']]),
      table('The office manager’s note', ['When', 'What'], [['c1', 'Tuesday afternoon', 'Replaced the reception Wi-Fi router with a new one']])],
    asks: [pick('where', 'Beth says she changed nothing. Where is the change?', [
      ok('company', 'The reception Wi-Fi router that the office manager replaced on Tuesday afternoon', 'Three people at reception have the same fault from the same day, and the note shows a change there.'),
      no('beth', 'Something on Beth’s own laptop that only she would have been able to see from her side of things', 'Two others at reception have the same fault, so it is not only her laptop.', 'wrong-scope'),
      no('none', 'Nothing, because Beth would know if something had changed on her side', 'She is probably right about her side. The note shows a change she did not do.', 'took-no-change')])],
    deciding: ['t2', 't3', 'c1'], reason: 'The same fault for three people in one place from the same day points at a change the company made. The note names one, a new router.' },
  { id: 'l3-k-close', strand: 'changed', facets: {},
    blocks: [{ kind: 'message', form: 'chat', from: 'Fay Greer', detail: 'Chat · Friday 3:20 PM', lines: [
      L('m1', 'My spreadsheet closes by itself sometimes.'), L('m2', 'It happens once or twice a day, but I never see it coming.')] },
      table('The error log on Fay’s computer (the list of errors it keeps)', ['Time', 'Entry'], [
        ['e1', 'Wednesday 11:15 AM', 'Spreadsheet program stopped working'], ['e2', 'Thursday 9:48 AM', 'Spreadsheet program stopped working']])],
    asks: [pick('first', 'She cannot say what brings it on. What do you do?', [
      ok('log', 'Have her note the time each time it closes, then match her times to the entries in the error log', 'There are no steps to repeat, so the times and the log are what you can use. The log already has two.'),
      no('repair', 'Run the repair tool for Office (Microsoft’s group of programs, which includes the spreadsheet), since the spreadsheet keeps closing', 'It is a guess with nothing to say it is the cause, and a fault that comes and goes can look fixed by luck.', 'guess-again'),
      no('close', 'Close the ticket until it happens again, since there is nothing to go on yet', 'You would close with nothing gathered, when the log and her notes could already tell you more.', 'waited-idle')])],
    deciding: ['m2', 'e1', 'e2'], reason: 'A fault that comes and goes gives no steps to follow. You work from the log and the user’s notes of the times, then narrow it down.' },
  { id: 'l3-k-nothing', strand: 'changed', facets: {},
    blocks: [
      { kind: 'message', form: 'call', from: 'Ian Frost', detail: 'Phone call · Thursday 4:10 PM', lines: [
        L('c1', 'Nothing changed. The shared drive just stopped opening.'), L('c2', 'It was fine on Monday. Today is Thursday.')] },
      table('What the desk’s records show for Ian’s computer', ['Record', 'What it says'], [
        ['r1', 'Password', 'Reset by the desk on Tuesday afternoon, at his request'],
        ['r2', 'Programs added, last 30 days', 'None']])],
    asks: [pick('next', 'He says nothing changed. What do you do?', [
      ok('records', 'Check the records, then find out about the password reset', '“Nothing changed” means nothing he noticed. The records show a password reset between Monday and Thursday.'),
      no('trust', 'Take his word that nothing changed, and start by looking at the shared drive’s own settings on the file server', 'You skipped a change that the records show.', 'took-no-change'),
      no('argue', 'Tell him that he must have changed something on Monday or Tuesday and has simply forgotten what it was', 'Do not argue with him. Check the records and put particulars to him.', 'argued')])],
    deciding: ['r1'], reason: 'Users often cannot see a change. The record shows a password reset between the day it worked and the day it stopped.' },
  { id: 'l3-k-click', strand: 'changed', facets: {},
    blocks: [
      { kind: 'message', form: 'chat', from: 'Pru Adler', detail: 'Chat · Monday 2:10 PM', lines: [
        L('m1', 'My desktop makes a clicking noise and froze twice today. Can you just restart it for me and see if it comes back?')] },
      table('What the desk’s records show for Pru’s computer', ['Record', 'What it says'], [
        ['r1', 'Disk health', 'Warning: drive failing'], ['r2', 'Backup of her files', 'None found']])],
    asks: [pick('first', 'What do you do first?', [
      ok('copy', 'Copy her files to the company storage while it is still running, then open one of them to check', 'A failing drive may not survive another start, and nothing else holds her files.'),
      no('restart', 'Restart it as she wants, since a restart loses nothing and gets her back to work', 'On a healthy computer that is true. On a failing drive each start is a risk, and her files are not copied.', 'no-backup'),
      no('check', 'Run the drive’s repair tool first, and see whether the warning clears afterwards, before anything else', 'A repair on a failing drive can make things worse, and her files are not safe yet.', 'no-backup')])],
    deciding: ['m1', 'r1', 'r2'], reason: 'The clicking and the disk warning say the drive is failing, so even a restart is a risk to the files. Copy them first, and check the copy opens.' }
]);
})();
