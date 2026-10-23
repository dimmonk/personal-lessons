// IT Help Desk, lesson 4 "The known fix, and when to stop": the six questions of the check (new, no help). One matches an article to the symptom and the
// setup, one decides the limit, two stop at the limit (one by tries, one by minutes: the slip the pass rule counts), one is what a failed guess tells you
// (IT3), one is a known fix that would lose the user's files. Each ticket's limit is that technician's own pick; the numbers differ. Invented people and articles.
(() => {
const L = (id, text) => ({ id, text });
const ok = (id, text, then) => ({ id, text, ok: true, then });
const no = (id, text, then, slip) => ({ id, text, then, ...(slip ? { slip } : {}) });
const pick = (id, prompt, options) => ({ id, kind: 'choose', prompt, shuffle: true, options });
const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });

FC.items('it-support', [
  { id: 'l4-k-video', strand: 'known', facets: {},
    blocks: [
      { kind: 'message', form: 'chat', from: 'Regina Ames', detail: 'Chat · Monday 10:30 AM', lines: [L('m1', 'My camera shows a black picture in Teams. I’m on a Windows 11 laptop.')] },
      { kind: 'prose', text: ['You have their story and what changed, and no step here can lose files.'] },
      table('Knowledge base search: “teams camera”', ['Article', 'Applies to', 'What it says'], [
        ['k1', 'Camera not found in Teams', 'Mac', 'Open System Settings, allow Teams to use the camera, and restart Teams.'],
        ['k2', 'Teams video is black', 'Windows 11 laptop', 'Close every other program using the camera, then pick the camera again in the Teams device settings.'],
        ['k3', 'Teams has no sound', 'Windows 11 laptop', 'Open the audio settings in Teams and choose the speaker again.']])],
    asks: [pick('article', 'Which article is the known fix?', [
      ok('k2', 'Teams video is black, Windows 11 laptop', 'It matches the symptom (a black picture) and Regina’s setup.'),
      no('k1', 'Teams cannot find the camera, Mac laptop', 'It is for a Mac, and it is for a camera that is not found rather than a black picture.', 'wrong-article'),
      no('k3', 'Teams has no sound in calls, Windows 11 laptop', 'It is their setup, but a different symptom: sound, not video.', 'wrong-article')])],
    deciding: ['m1', 'k2'], reason: 'The symptom and the setup both have to match. Only the second article is about a black picture on a Windows 11 laptop.' },
  { id: 'l4-k-limit', strand: 'known', facets: {},
    blocks: [{ kind: 'prose', text: ['Shirin cannot open a shared spreadsheet. The knowledge base has an article for it. You are about to follow it. This desk has no rule about handing on.'] }],
    asks: [pick('limit', 'Before you follow it, what do you decide?', [
      ok('limit', 'A number of tries and a number of minutes for this ticket, whichever runs out first', 'You decide the limit before you start. When it is reached you know to stop guessing.'),
      no('none', 'A number of tries and a number of minutes, which I will pick after the first try, once I see how long it takes', 'A limit picked after the first try is not a limit: one more guess follows another. Decide it before you start.', 'no-limit'),
      no('hand', 'Which senior technician I will pass it to when the article does not work', 'The article costs minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.', 'handed-on-early')])],
    deciding: [], reason: 'A known fix is tried within a limit decided first, so there is no sliding from one guess into the next.' },
  { id: 'l4-k-stop', strand: 'known', facets: {},
    blocks: [table('Your tries so far (the limit you picked: three tries or twelve minutes)', ['What you did', 'Minutes', 'Result'], [
      ['t1', '1. Closed and reopened the program', '2', 'No change'],
      ['t2', '2. Restarted the PC', '4', 'No change'],
      ['t3', '3. Followed the article “Program will not start”', '5', 'No change'],
      ['clock', 'Time used so far', '11', 'Total']])],
    asks: [pick('stop', 'It still fails. What now?', [
      ok('stop', 'Note each try and its result on the ticket, then move to narrowing it down', 'Three tries are used. The next step starts from what you wrote.'),
      no('more', 'Try one more fix; there is a minute left', 'Three tries are used. The limit says stop, whatever minutes remain.', 'kept-guessing'),
      no('close', 'Note each try, then close the ticket as “cannot reproduce” (closing because you cannot make it happen again)', 'The user still has the fault and has not confirmed anything.', 'closed-early')])],
    deciding: ['t1', 't2', 't3'], reason: 'Three tries are used with no fix. That is the limit, so you stop and write down what you tried.' },
  { id: 'l4-k-minutes', strand: 'known', facets: {},
    blocks: [{ kind: 'prose', text: ['This desk has no rule about handing on.'] }, table('Your tries so far (the limit you picked: three tries or twenty minutes)', ['What you did', 'Minutes', 'Result'], [
      ['t1', '1. Closed the program and opened it again', '5', 'No change'],
      ['t2', '2. Followed the article “Shared drive will not open”', '15', 'No change'],
      ['clock', 'Time used so far', '20', 'Total']])],
    asks: [pick('stop', 'It still fails. What now?', [
      ok('stop', 'Stop trying, write what each try did in one line, and narrow it down', 'Twenty minutes are used. The limit ends at whichever comes first, tries or minutes.'),
      no('more', 'Take the third try anyway, since only two of the three tries are used up', 'The minutes ran out first. The limit says stop, whatever tries remain.', 'kept-guessing'),
      no('hand', 'Pass it to the next level now, since the article did not work out', 'A failed article does not by itself hand the ticket on. You narrow it down, and you hand on when the desk’s rule says so.', 'handed-on-early')])],
    deciding: ['t1', 't2', 'clock'], reason: 'The limit was tries or minutes, whichever came first. The minutes are used, so you stop, whatever tries are left.' },
  { id: 'l4-k-cost', strand: 'known', facets: {},
    blocks: [{ kind: 'prose', text: ['Vivian’s printer shows “offline”. You restarted their PC, and the printer still shows “offline”.'] }],
    asks: [pick('learned', 'What does the failed restart tell you about the cause?', [
      ok('little', 'Very little: only that a restart is not the fix', 'A guess that fails brings you no closer to the cause.'),
      no('pc', 'That the problem is inside the printer itself', 'A restart of their PC does not test the printer, so it shows nothing about it.', 'guess-again'),
      no('user', 'That they did something wrong before it went offline', 'Nothing in the restart points at anything they did.', 'blamed')])],
    deciding: [], reason: 'A failed quick fix rules out only itself. To learn the cause you need a test that splits the possibilities, which is the next step after the limit.' },
  { id: 'l4-k-reset', strand: 'known', facets: {},
    blocks: [
      table('Article: “Laptop sign-in loop (Windows 11 PC)”', ['What the article says'], [
        ['s1', '1. Restart the laptop and sign in again.'],
        ['s2', '2. If the loop continues, reset the laptop to its factory state.'],
        ['s3', '3. Sign in and restore the user’s files from backup.']]),
      { kind: 'prose', text: ['A sign-in loop is the sign-in screen coming back again and again. Step 1 did not help. The user’s files have not been backed up.'] }],
    asks: [pick('before', 'What do you do before step 2?', [
      ok('copy', 'Copy the user’s files to the company storage and open one to check the copy', 'Step 3 expects a backup that does not exist. Without a copy, the reset erases the files.'),
      no('follow', 'Follow step 2 as written, since it is the desk’s known fix and has worked before', 'The article assumes a backup. None exists, so the reset would erase the files.', 'no-backup'),
      no('skip', 'Leave the article alone and start testing other causes of the fault instead', 'The article is the known fix. It needs the backup first.', 'skipped-known')])],
    deciding: ['s2', 's3'], reason: 'An article can carry a step that erases files without a backup step of its own, so a known fix still protects the user’s data. Step 3 depends on a backup that has not been made.' }
]);
})();
