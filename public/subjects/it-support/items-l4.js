// IT Help Desk, lesson 4 "The known fix, and when to stop" (move 4 of the way of thinking): the worked ticket, the groups and the reserve.
// IT3 (Cisco Press): a quick fix from pattern knowledge is what experts do and it often works; "if it does not work, you have not come any closer"; the
// skill is knowing when to stop and go structured; written steps let someone pick up where you left off. IT10: restore service quickly; a workaround is
// valid. IT11 and IT14: search the knowledge base early and often, and an article that is reused is checked, then flagged or fixed ("reuse is review").
// Ruling 1: the learner picks their own limit; no source gives a number, so each ticket's numbers are that technician's example and they differ. At the
// limit the answer is to narrow it down; handing on only when the desk's rule says so, shown in a quoted block. The check is in items-l4-check.js.
// Invented people and articles.
(() => {
const L = (id, text) => ({ id, text });
const chat = (from, detail, lines) => ({ kind: 'message', form: 'chat', from, detail, lines });
const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
const search = (query, rows) => table(`Knowledge base search: “${query}”`, ['Article', 'Applies to', 'What it says'], rows);
const ok = (id, text, then) => ({ id, text, ok: true, then });
const no = (id, text, then, slip) => ({ id, text, then, ...(slip ? { slip } : {}) });
const pick = (id, prompt, options) => ({ id, kind: 'choose', prompt, shuffle: true, options });
const item = (id, blocks, ask, deciding, reason) => ({ id, strand: 'known', facets: {}, blocks, asks: [ask], deciding, reason });
// the tries so far against the technician's own limit (the numbers differ from ticket to ticket: each is that technician's choice)
const triesLog = (limit, rows, clock) => table(`Your tries so far (the limit you picked: ${limit})`, ['What you did', 'Minutes', 'Result'], [...rows, ['clock', 'Time used so far', clock, 'Total']]);

FC.items('it-support', [
  // ----- the worked ticket: a restart is spent by what the user already did; the article is the known fix -----
  { id: 'l4-w-offline', strand: 'known', facets: {},
    blocks: [
      chat('Mildred Barrett', 'Chat · Tuesday 10:02 AM', [
        L('j1', 'The second-floor printer says offline and my report won’t print.'),
        L('j2', 'I’m on a Windows 11 PC. I already restarted it this morning.')]),
      { kind: 'prose', text: ['You have their story and what changed, and no step here can lose files. This desk has no rule about handing on.'] },
      search('printer offline', [
        ['k1', 'Printer shows Offline', 'Windows 11 PC', 'Turn the printer off for 10 seconds and on again. On the PC, cancel all print jobs, then print a test page.'],
        ['k2', 'Printer shows Offline', 'Mac', 'Open System Settings, remove the printer, and add it again.'],
        ['k3', 'Printer prints blank pages', 'Windows 11 PC', 'Replace the toner and print a test page.']])],
    asks: [
      pick('limit', 'Before you start trying fixes, what do you decide?', [
        ok('limit', 'A number of tries and a number of minutes, picked now, whichever runs out first', 'With the limit decided, you know when to stop guessing, and so does the user.'),
        no('later', 'Nothing yet: I will see how the first try goes and decide on a limit after that', 'Without a limit before you start, one more guess follows another, and each failed guess leaves you no closer to the cause.', 'no-limit'),
        no('hand', 'Which senior technician I will hand it to if the first try does not work out', 'The known fix costs a few minutes. If it fails you narrow the problem down. You hand on when the desk’s rule says so.', 'handed-on-early')]),
      pick('article', 'Which article is the known fix?', [
        ok('k1', 'Printer shows Offline, Windows 11 PC', 'It matches both the symptom (offline) and their setup (a Windows 11 PC).'),
        no('k2', 'Printer shows Offline, Mac', 'The symptom matches, but it is for a Mac. Mildred is on a Windows 11 PC.', 'wrong-article'),
        no('k3', 'Printer prints blank pages, Windows 11 PC', 'It is their setup, but a different symptom: blank pages, not offline.', 'wrong-article')])],
    steps: [
      { id: 'limit', does: 'Decide the limit before you try anything.', working: 'Mildred cannot print, so I pick a short one: two tries or ten minutes. That is my own choice for this ticket; no book gives the number.', ask: 'limit' },
      { id: 'guess', does: 'Check what has already been tried.', working: 'A restart is a fair first try, but they already restarted their PC this morning with no change. That try is theirs, not mine, so it is spent and I do not count it as one of my tries.' },
      { id: 'search', does: 'Search the knowledge base with their words, and check what the article applies to.', working: 'Two articles say Offline. One is for a Mac. The other is for a Windows 11 PC, which is theirs.', ask: 'article' },
      { id: 'apply', does: 'Follow the article exactly as written.', working: 'Printer off for 10 seconds and on, jobs canceled on the PC, a test page printed. It prints, about 7 minutes in: the first try worked.' },
      { id: 'after', does: 'Say what you would have done at the limit.', working: 'Two tries or ten minutes with no fix means stopping, writing down the tries, and narrowing it down. No third guess.' }],
    deciding: ['j2', 'k1'],
    reason: 'The article is the known fix, and it applies to their symptom and their setup. The limit was decided first, so you knew when to stop and what to do if the fix failed.' },

  // ----- the first group (the deciding words marked) -----
  item('l4-p-wifi', [
    chat('Trevor Rao', 'Chat · Wednesday 9:12 AM', [L('m1', 'My Mac keeps dropping off the office Wi-Fi every few minutes.')]),
    { kind: 'prose', text: ['You have their story and what changed, and no step here can lose files.'] },
    search('wi-fi drops', [
      ['k1', 'Wi-Fi drops every few minutes', 'Mac', 'Turn Wi-Fi off and on, then forget the office network and join it again.'],
      ['k2', 'Wi-Fi drops every few minutes', 'Windows 11 PC', 'Run the network troubleshooter, then forget the office network and join it again.'],
      ['k3', 'Wi-Fi password not accepted', 'Mac', 'Reset the Wi-Fi password from the portal.']])],
    pick('article', 'Which article is the known fix?', [
      ok('k1', 'Wi-Fi drops every few minutes, Mac', 'It matches the symptom and Trevor’s Mac.'),
      no('k2', 'Wi-Fi drops every few minutes, Windows 11 PC', 'The symptom matches, but the steps are for a Windows PC.', 'wrong-article'),
      no('k3', 'Wi-Fi password not accepted, Mac', 'It is their Mac, but a different symptom: their Wi-Fi connects, then drops.', 'wrong-article')]),
    ['m1', 'k1'], 'The symptom and the setup both have to match. Only the first article covers drops on a Mac.'),
  item('l4-p-limit', [{ kind: 'prose', text: ['Hattie Rao says Excel is frozen. The knowledge base has an article for it. You are about to follow it. This desk has no rule about handing on.'] }],
    pick('limit', 'Before you follow it, what do you decide?', [
      ok('limit', 'A cut-off for this ticket: so many tries or so many minutes, whichever comes first', 'Decide the cut-off before you begin. Then a fix that fails does not turn into another guess and another.'),
      no('see', 'Nothing until I see what the article does; I can always try more fixes after it', 'Without a cut-off before the first try, a failed fix slides into the next guess.', 'no-limit'),
      no('hand', 'To pass it on at once, so the senior technician sees it before I try anything', 'The article costs a few minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.', 'handed-on-early')]),
    [], 'Decide the number of tries and the minutes before you begin. Then a fix that fails does not turn into another guess and another.'),
  item('l4-p-reuse', [
    table('Article: “Printer shows Offline, Windows 11 PC”', ['What the article says'], [
      ['s1', '1. Turn the printer off for 10 seconds and on again.'], ['s2', '2. On the PC, open the print queue (the list of documents waiting to print).'],
      ['s3', '3. Click “Reset printer” and print a test page.']]),
    { kind: 'prose', text: ['It worked. But step 3 names a button that now reads “Clear queue”. You found it by guessing.'] }],
    pick('after', 'What do you do about the article?', [
      ok('flag', 'Fix the step, or flag it to the person who owns the article', 'An article that is used is also checked. A wrong step would cost the next person minutes.'),
      no('nothing', 'Leave it as it is, since it worked for me and nobody has complained', 'The next person will hit the same wrong step.'),
      no('remove', 'Take the article down, since one of its steps is wrong', 'Only one word is out of date. The rest fixed the fault, so the article should be corrected, not removed.')]),
    ['s3'], 'Using an article is also a check on it. A step that has gone out of date is fixed or flagged, so the next person is not slowed.'),
  item('l4-p-stop', [
    triesLog('two tries or ten minutes', [['t1', '1. Restarted their PC', '3', 'No change'], ['t2', '2. Followed the article “Printer shows Offline”', '6', 'Still offline']], '9')],
    pick('stop', 'The limit is reached and it still fails. What now?', [
      ok('stop', 'Write one line for each try, then start narrowing the problem down', 'Written tries mean the next step starts where you stopped, or the next person can pick it up.'),
      no('more', 'Try one more fix that could work', 'A third guess is past the limit. Each failed guess so far left you no closer to the cause.', 'kept-guessing'),
      no('close', 'Close the ticket as “cannot reproduce” (closing because you cannot make it happen again)', 'The user still has the fault and has not confirmed anything. Closing it now leaves their problem unsolved.', 'closed-early')]),
    ['t1', 't2'], 'The limit was two tries or ten minutes, whichever comes first. Both tries are used, so the tries ran out first, with a minute to spare. Stop, write the tries down, and narrow it down.'),

  // ----- the second group (no help) -----
  item('l4-q-outlook', [
    chat('Hailey Cole', 'Chat · Thursday 9:40 AM', [L('m1', 'Outlook keeps asking me for my password again and again.'), L('m2', 'I’m on a Windows 11 PC.')]),
    { kind: 'prose', text: ['The knowledge base has an article “Outlook keeps asking for the password” for Windows PCs. You have their story and what changed, and no step in it can lose files. This desk has no rule about handing on.'] }],
    pick('first', 'What do you do first?', [
      ok('search', 'Search the knowledge base with their words and follow the matching article, within a limit', 'The desk has seen this symptom. Its article is the quickest way.'),
      no('dig', 'Start testing causes: another account, another computer, a new profile, a repaired Office', 'That is the work to do after the known fix fails. It takes longer than a few minutes.', 'skipped-known'),
      no('hand', 'Pass it to the senior technician right now, since they have seen this fault before', 'The known fix costs a few minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.', 'handed-on-early')]),
    ['m1', 'm2'], 'A symptom the desk has already solved is a known fix, and the article is where it is written down. Try it first.'),
  item('l4-q-quick', [{ kind: 'prose', text: ['Davina’s laptop will not connect to the Wi-Fi at their desk. Other people’s laptops connect fine.'] }],
    pick('quick', 'Which of these is cheap enough to try within a limit?', [
      ok('wifi', 'Turn off the laptop’s Wi-Fi, wait a few seconds, and turn it back on', 'It takes seconds, loses nothing and can be undone.'),
      no('reset', 'Reset their laptop to its factory state, which clears every software fault', 'It takes hours and erases their files. It is not a quick try.'),
      no('card', 'Replace the Wi-Fi card (the part inside the laptop that connects to Wi-Fi)', 'It means opening the laptop and costs far more than a few minutes.')]),
    [], 'A quick fix takes minutes, loses nothing and is easy to undo. Anything bigger is a plan, not a try.'),
  item('l4-q-cost', [
    table('What Ugo tried in 40 minutes', ['What they did', 'Result'], [
      ['t1', '1. Restarted the PC', 'Screen still flickers'], ['t2', '2. Pulled out and re-plugged the monitor cable', 'Still flickers'],
      ['t3', '3. Reinstalled the graphics driver (the program that runs the screen)', 'Still flickers'], ['t4', '4. Updated the app', 'Still flickers']])],
    pick('learned', 'The screen still flickers. What did the four failed tries tell them about the cause?', [
      ok('little', 'Very little: each failed try rules out only itself', 'None of the four was a test that splits the possible causes, so they know little more than at the start.'),
      no('hardware', 'That the cause must be the hardware, not the software', 'Nothing in the four tries points at the hardware.', 'guess-again'),
      no('more', 'That a fifth guess is now much more likely to work', 'Each failed guess made the next one no more likely.', 'kept-guessing')]),
    ['t1', 't2', 't3', 't4'], 'A guess that fails brings you no closer. Ugo should have stopped at their limit and cut the problem in half.'),
  item('l4-q-headset', [
    chat('Judith Reid', 'Chat · Friday 1:05 PM', [L('m1', 'In Teams I can’t hear anyone when I use my headset. My laptop is Windows 11.')]),
    { kind: 'prose', text: ['You have their story and what changed, and no step here can lose files.'] },
    search('teams no sound', [
      ['k1', 'Teams has no sound', 'The meeting room speakers', 'Check that the room’s speaker is chosen as the sound device in the meeting.'],
      ['k2', 'Teams has no sound', 'A headset on a Windows PC', 'Open the audio settings in Teams, choose the headset as the speaker, and run a test call.'],
      ['k3', 'Teams has no sound', 'A phone', 'Check the phone’s volume and silent switch.']])],
    pick('article', 'Which article is the known fix?', [
      ok('k2', 'Teams has no sound, a headset on a Windows PC', 'It matches the symptom and Judith’s setup.'),
      no('k1', 'Teams has no sound, the meeting room speakers', 'Same symptom, but the steps are for a room’s speakers.', 'wrong-article'),
      no('k3', 'Teams has no sound, a phone', 'Same symptom, but the steps are for a phone.', 'wrong-article')]),
    ['m1', 'k2'], 'Several articles share a symptom. The “applies to” line decides which one is theirs.'),
  item('l4-q-time', [
    triesLog('three tries or fifteen minutes', [['t1', '1. Restarted the app', '4', 'No change'], ['t2', '2. Followed the article: clear the app’s cache (its store of saved copies)', '11', 'No change']], '15')],
    pick('stop', 'It still fails. What now?', [
      ok('stop', 'Stop trying fixes, note each try with its minutes, and narrow it down', 'The limit was fifteen minutes and 15 have passed. The limit ends at whichever comes first.'),
      no('more', 'Use the third try, since only two of the three are used', 'The minutes ran out first. The limit ends at whichever comes first.', 'kept-guessing'),
      no('close', 'Close the ticket, since two reasonable tries did not reproduce a fault', 'The user still has the fault and has not confirmed anything.', 'closed-early')]),
    ['t1', 't2', 'clock'], 'The limit is three tries or fifteen minutes, whichever comes first. The minutes are used, so stop.'),
  item('l4-q-notyet', [
    triesLog('three tries or fifteen minutes', [['t1', '1. Restarted the laptop', '3', 'No change']], '3'),
    { kind: 'prose', text: ['The knowledge base has an article for this symptom, and you have not tried it yet. This desk has no rule about handing on.'] }],
    pick('next', 'What do you do next?', [
      ok('article', 'Follow the article as your second try; the limit is not reached', 'One try and three minutes are used, so two tries and twelve minutes are left.'),
      no('stop', 'Stop and write up the tries, then start narrowing the problem down', 'The limit is not reached and the article is untried. Narrowing it down waits until the known fix fails.'),
      no('hand', 'Pass it on to the next level, since the restart did not work', 'One failed restart is not a reason to pass it on. Try the article within the limit.', 'handed-on-early')]),
    ['t1', 'clock'], 'A limit is for stopping when it is reached, not before. The known fix comes first.'),

  // ----- the third group: mixed, with lessons 2 and 3 -----
  item('l4-m-erase', [
    table('Article: “Outlook will not open (Windows 11 PC)”', ['What the article says'], [
      ['s1', '1. Close Outlook and open it again.'], ['s2', '2. Delete the user profile (the folder where Windows keeps a person’s files and settings) and let Windows build a new one.'], ['s3', '3. Sign in and open Outlook.']]),
    { kind: 'prose', text: ['Step 1 did not help. Nobody has copied this user’s files.'] }],
    pick('before', 'What do you do before step 2?', [
      ok('copy', 'Copy the user’s files to the company storage and open one to check the copy', 'Deleting the profile removes the files in it. A known fix still protects the data.'),
      no('follow', 'Follow step 2 as written, since it is the desk’s own article and has worked before', 'The article does not know that nothing is copied. Step 2 removes the files.', 'no-backup'),
      no('skip', 'Leave the article alone and start testing other causes of the fault instead', 'The article is fine. It just needs a copy of the files before step 2.', 'skipped-known')]),
    ['s2'], 'A step that removes where the files live needs a copy first, article or not. Then step 2 can be followed.'),
  item('l4-m-move', [{ kind: 'prose', text: ['Roxanne’s story is in. You found what changed, and their files are safe. The knowledge base has an article for exactly their symptom.'] }],
    { id: 'move', kind: 'choose', from: 'move', only: ['changed', 'known', 'half'], right: 'known', prompt: 'Which move comes next?',
      slips: { half: 'skipped-known', changed: 'fixed-first' },
      then: { changed: 'You already did that. The next move is the known fix.', half: 'Cutting the problem in half is for when the known fix fails.', known: 'The desk already knows this symptom, so you try its article within a limit.' } },
    [], 'The known fix comes after the story, the change and the backup. The article is tried within a limit, and narrowing it down waits for that to fail.'),
  item('l4-m-note', [
    table('This desk’s rule', ['Rule'], [['r1', 'Hand on after 20 minutes on one ticket']]),
    triesLog('three tries or twenty minutes', [['t1', '1. Restarted the PC', '3', 'No change'], ['t2', '2. Followed the article “Printer shows Offline”', '6', 'Still offline'], ['t3', '3. Unplugged the printer’s cable and plugged it back in', '11', 'Still offline']], '20')],
    pick('note', 'The desk’s rule says to hand it on now. Which note helps the next person?', [
      ok('lines', 'Restarted the PC, 3 min, no change. Followed “Printer shows Offline”, 6 min, still offline. Unplugged and replugged the cable, 11 min, no change.', 'It says what was tried, for how long and what happened, so the next person can start where you stopped.'),
      no('few', 'Restarted the PC, then followed the article “Printer shows Offline”, then unplugged and replugged the cable; none of them worked out.', 'The next person cannot tell how long each took or what happened, and will try them again.', 'empty-handon'),
      no('see', 'Followed the article “Printer shows Offline” all the way through and it did not help, so someone should look for another cause.', 'It does not say what else was tried, and the next person will repeat it.', 'empty-handon')]),
    ['r1', 'clock'], 'The desk’s rule, not the failed fix, is what says to hand on. One line for each try, with the result, lets someone pick it up where you left off.'),
  item('l4-m-search', [chat('Veronica Hale', 'Chat · Monday 3:45 PM', [L('m1', 'My second monitor shows nothing since I moved desks on Friday.')]),
    { kind: 'prose', text: ['The knowledge base has an article for this symptom.'] }],
    pick('first', 'You have their story and know what changed. What do you do next?', [
      ok('article', 'Search the knowledge base for the symptom, and follow the article that fits, within a limit', 'This is the known fix. Then, if it fails, you narrow it down.'),
      no('test', 'Swap in a different monitor to see whether the fault is in the monitor or in the laptop', 'That is how you narrow a fault down. Try the known fix first.', 'skipped-known'),
      no('same', 'Go back to them and check once more what changed, in case something was missed in the story', 'You already know: the move on Friday.', 'repeated-step')]),
    ['m1'], 'After the story and the change come the known fix and its limit. Narrowing it down is the step after.'),

  // ----- reserve: three unseen questions for the topic's returns (no lesson names them) -----
  item('l4-r-search', [
    chat('Bettina Park', 'Chat · Tuesday 8:55 AM', [L('m1', 'Outlook search finds nothing, but my mail is there. I’m on a Mac.')]),
    search('outlook search', [
      ['k1', 'Outlook search finds nothing', 'Windows 11 PC', 'Rebuild the search index from the Windows indexing options.'],
      ['k2', 'Outlook search finds nothing', 'Mac', 'Quit Outlook and rebuild the database by holding Option while opening it.'],
      ['k3', 'Outlook is slow', 'Mac', 'Empty the deleted items folder.']])],
    pick('article', 'Which article is the known fix?', [
      ok('k2', 'Outlook search finds nothing, Mac', 'It matches the symptom and Bettina’s Mac.'),
      no('k1', 'Outlook search finds nothing, Windows 11 PC', 'The symptom matches, but the steps are for a Windows PC.', 'wrong-article'),
      no('k3', 'Outlook is slow, Mac', 'Their Mac, but a different symptom.', 'wrong-article')]),
    ['m1', 'k2'], 'The symptom and the setup both have to match. Only the second article covers search on a Mac.'),
  item('l4-r-stop', [
    triesLog('two tries or ten minutes', [['t1', '1. Turned the scanner off and on', '1', 'No change'], ['t2', '2. Followed the article “Scanner not found”', '4', 'No change']], '5')],
    pick('stop', 'It still fails. What now?', [
      ok('stop', 'Stop there, put your tries on the ticket one line each, and narrow it down', 'Two tries are used, which is the limit. The next step starts from your lines.'),
      no('more', 'Try a third fix, since there are still five of the ten minutes left on the clock', 'Two tries are used, and the limit is two tries or ten minutes, whichever comes first.', 'kept-guessing'),
      no('close', 'Close the ticket, since the scanner did nothing wrong on either of your tries', 'The user still has the fault and has not confirmed anything.', 'closed-early')]),
    ['t1', 't2'], 'Two tries are used with no fix, which is the limit. Stop and write the tries down.'),
  item('l4-r-first', [chat('Abel Ng', 'Chat · Wednesday 11:20 AM', [L('m1', 'My laptop won’t connect to the Wi-Fi. It’s a Windows 11 laptop.')]),
    { kind: 'prose', text: ['The knowledge base has an article “Laptop will not connect to Wi-Fi (Windows 11)”. You have their story and what changed, and no step in it can lose files. This desk has no rule about handing on.'] }],
    pick('first', 'What do you do first?', [
      ok('article', 'Follow the article within a limit', 'The desk has seen this symptom and its fix is written down.'),
      no('dig', 'Test another laptop on the same Wi-Fi first', 'That is how you narrow the fault down. Try the known fix first.', 'skipped-known'),
      no('hand', 'Pass it to the network team, who know the Wi-Fi best', 'The known fix costs a few minutes. If it fails you narrow the problem down; you hand on when the desk’s rule says so.', 'handed-on-early')]),
    ['m1'], 'A symptom the desk has solved is tried at the desk’s own article first, within a limit.')
]);
})();
