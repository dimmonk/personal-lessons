// IT Help Desk, lesson 6 "One change at a time" (part one): move 6 of the way of thinking. Change one thing, then look; when a test rules a cause out,
// cross it off and move to the next cause, however sure the first idea felt. Research: docs/research/it-support.md IT9 (experts fixate on
// the first idea; the safeguard is the written list and dropping a cause when its test fails), IT3 (structured work is systematic elimination of causes
// and lets another person pick up where you left off).
// The worked ticket (Joy and the office Wi-Fi), a first group of four (the deciding words marked), a group of four, a group of three mixed with lesson 5,
// the five of the check, and four held in reserve. One round everywhere: list, test, cross off, change one thing, look, write it down. Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const S = 'one';
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ strand: S, facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const TWO = 'two-changes', KEPT = 'kept-ruled-out', SIDE = 'wrong-side', CRED = 'credited-one', VAGUE = 'vague-note';
  const causes = rows => table('Causes on the list', ['Cause'], rows.map(([id, text]) => [id, text]));
  const costed = rows => table('Causes on the list', ['Cause', 'Cheapest test', 'Takes'], rows);
  const FAULT2 = 'one-fault';

  FC.items('it-support', [
    // ----- the worked ticket: the favorite is ruled out by one test, then one change at a time -----
    item({
      id: 'l6-w-joy',
      blocks: [
        msg('chat', 'Joy, Accounting', 'Chat with the help desk', [['j1', 'My laptop will not join the office Wi-Fi this morning. It worked on Friday. The Wi-Fi was down last week too.']]),
        costed([['c1', 'The office Wi-Fi', 'Join it with a phone', 'One minute'], ['c2', 'The Wi-Fi switch on Joy’s laptop', 'Look at the switch', 'Ten seconds'], ['c3', 'The password Joy’s laptop saved for the office Wi-Fi', 'Forget the saved network and join again', 'Two minutes'], ['c4', 'The Wi-Fi part inside Joy’s laptop', 'Swap in a working part', 'An hour']])],
      asks: [ask('Joy’s phone joins the office Wi-Fi without trouble. What do you do next?', [
        ['Cross off the office Wi-Fi, because the phone joined it fine, and take the next cause on the list.', true, 'The phone joined the same Wi-Fi, so the Wi-Fi is ruled out. The next cause gets its own test.'],
        ['Restart the office router anyway, in case it helps the laptop.', KEPT, 'The test already ruled the Wi-Fi out. Restarting the router would cut off everyone for nothing.'],
        ['Turn the Wi-Fi switch on and forget the saved network, then see if it joins.', TWO, 'If it works, you will not know which of the two did it, and you cannot write up the cause.']])],
      steps: [
        { id: 'list', does: 'Write down the causes before testing any.', working: 'The office Wi-Fi; the Wi-Fi switch on the laptop; the password the laptop saved for the office Wi-Fi; the Wi-Fi part inside the laptop.' },
        { id: 'favorite', does: 'Name your favorite and test it first.', working: 'The office Wi-Fi: it was down last week too.' },
        { id: 'phone', does: 'Test it.', working: 'Joy’s phone joins the office Wi-Fi at once. The Wi-Fi works, so it is ruled out.' },
        { id: 'drop', does: 'Cross it off, and do not go back to it.', working: 'The router is not restarted. The list is down to three.', ask: 'a' },
        { id: 'look', does: 'Pick the next cause: the cheapest test among those left.', working: 'Looking at the switch takes ten seconds, the saved password two minutes, the part inside the laptop an hour. The switch is on, so that is ruled out too. The list is down to two.' },
        { id: 'one', does: 'Take the next cheapest and change one thing, then look.', working: 'Forget the saved network and join it again with the current password. The laptop joins. The office changed the Wi-Fi password over the weekend, and the laptop still had the old one saved. It was the saved password.' }],
      deciding: ['j1'],
      reason: 'The phone joined the office Wi-Fi, so the favorite cause was ruled out and crossed off. Each next cause got one test or one change, so when the laptop joined, the change that did it was known: the saved password.' }),

    // ----- the first group: the deciding words marked -----
    item({
      id: 'l6-p-sam',
      blocks: [
        msg('chat', 'Sam, Legal', 'Chat with the help desk', [['s1', 'My page does not come out of the hallway printer.']]),
        causes([['c1', 'The hallway printer'], ['c2', 'Sam’s laptop'], ['c3', 'Sam’s account']]),
        table('Test', ['Test', 'Result'], [['t1', 'A co-worker prints to the hallway printer from their own computer', 'The page comes out']])],
      asks: [ask('Which cause does this result rule out?', [
        ['The hallway printer', true, 'It printed a co-worker’s page just now, so the printer works.'],
        ['Sam’s laptop', SIDE, 'The test never used Sam’s laptop, so it stays on the list.'],
        ['None of them: one test cannot rule a cause out.', KEPT, 'A page coming out of the same printer is exactly what rules the printer out.']])],
      deciding: ['t1'],
      reason: 'A co-worker’s page came out of the printer, so the printer is ruled out and crossed off. The test did not use Sam’s laptop or Sam’s account, so both stay on the list.' }),
    item({
      id: 'l6-p-gia',
      blocks: [
        msg('chat', 'Gia, Design', 'Chat with the help desk', [['g1', 'My mouse pointer jumps around.']]),
        causes([['c1', 'Gia’s mouse'], ['c2', 'The port it is plugged into'], ['c3', 'Gia’s computer']]),
        table('Test', ['Test', 'Result'], [['t1', 'A mouse known to work, plugged into the same port', 'The pointer jumps around']])],
      asks: [ask('Which cause does this result rule out?', [
        ['Gia’s mouse, which was swapped for a good one', true, 'A mouse that works elsewhere jumps in the same port, so Gia’s mouse is not the cause.'],
        ['The port', SIDE, 'The pointer jumped in the same port, so the port is still on the list.'],
        ['None of them: the mouse still jumps.', KEPT, 'The mouse changed and the trouble stayed where it was, which rules the mouse out.']])],
      deciding: ['t1'],
      reason: 'A part known to work, put in the same place, jumps just the same. The trouble stayed in place instead of moving with the part, so Gia’s mouse is ruled out. The port and the computer stay on the list.' }),
    item({
      id: 'l6-p-mail',
      blocks: [
        msg('chat', 'Tariq, Sales', 'Chat with the help desk', [['m1', 'My email program will not send. It says it cannot connect. It stopped right after I changed my password on Monday.']]),
        costed([['c1', 'The Wi-Fi', 'Open a web page', 'One minute'], ['c2', 'The password saved in the mail program', 'Type the new password in', 'One minute'], ['c3', 'The mail program’s settings', 'Check them one by one', '20 minutes']]),
        table('Test', ['Test', 'Result'], [['t1', 'Tariq opens a web page on the same laptop', 'The page opens']])],
      asks: [ask('The page opens. What do you do next?', [
        ['Restart the Wi-Fi router, then check whether the mail sends from the program.', KEPT, 'The web page opened, so the Wi-Fi works. The router is not the cause.'],
        ['Cross off the Wi-Fi and enter the new password in the mail program, then check.', true, 'The Wi-Fi is ruled out. Of the two causes left, the saved password has the cheaper test: a minute, against twenty. One change on that cause shows what it does.'],
        ['Enter the new password, then reinstall the mail program, then check whether it sends.', TWO, 'That is two changes before one look. If it works, you will not know which of the two did it.']])],
      deciding: ['t1'],
      reason: 'The page opened, so the Wi-Fi is ruled out. The saved password has the cheapest test of the causes left, so the next move is one change on that cause, and a look at the result before anything else changes.' }),
    item({
      id: 'l6-p-vik',
      blocks: [
        msg('chat', 'Vik, Technician', 'Note in the ticket', [['v1', 'Monitor was black. In one visit I put in a new cable and turned off the monitor’s power-save mode (the setting that blanks the screen when it is idle). It shows a picture now.']])],
      asks: [ask('What can the ticket note say about the cause?', [
        ['The new cable went in and power-save was turned off; the cable is the likely cause, because the cable is the bigger repair.', CRED, 'The power-save change happened at the same time, so the cable is a guess.'],
        ['Fixed on site. The monitor works now. The user is happy with the picture.', VAGUE, 'The next technician cannot tell what was changed, so the note cannot be used if the screen goes black again.'],
        ['Cable replaced and power-save turned off in the same visit; either could be the cause, and it is not known which.', true, 'Two things changed at once, so either could be the cause. The note lists both and says so.'],
        ['Power-save was turned off and the new cable went in; the setting is the likely cause, because the cable looked fine.', CRED, 'The new cable went in at the same time, so the setting is a guess.']])],
      deciding: ['v1'],
      reason: 'Two changes were made at once, so a fix cannot be credited to one of them. One change at a time would have shown which; the note lists both and says the cause is not known.' }),

    // ----- the second group: no marks -----
    item({
      id: 'l6-s-order',
      blocks: [note('You have a ticket and a list of causes. Put one round of the work in order.')],
      asks: [{ id: 'a', kind: 'order', prompt: 'Put one round in order.', steps: [
        { id: 's1', text: 'Write down the causes that fit what the user sees.' },
        { id: 's2', text: 'Run a test that changes nothing.' },
        { id: 's3', text: 'Cross off a cause the result rules out.' },
        { id: 's4', text: 'Change one thing for the next cause.' },
        { id: 's5', text: 'Check whether the problem is gone.' },
        { id: 's6', text: 'Write down what you changed and what happened.' }],
        right: ['s1', 's2', 's3', 's4', 's5', 's6'], then: 'The list comes first, so you test more than the favorite. A test comes before the change, because its result decides what to cross off. One change, then a look, shows what that change did, and the note lets another person pick up where you stopped.' }],
      reason: 'The list comes first so you test more than your favorite. A test changes nothing and its result decides what is crossed off. Then one change and a look shows what that change did. The note comes last and lets another person pick up where you stopped.' }),
    item({
      id: 'l6-s-ken',
      blocks: [
        msg('chat', 'Ken, Operations', 'Chat with the help desk', [['k1', 'The company news page will not open on my laptop.']]),
        causes([['c1', 'The Wi-Fi'], ['c2', 'The server that holds the news page'], ['c3', 'The settings of the first browser Ken uses'], ['c4', 'Ken’s account'], ['c5', 'Ken’s laptop’s own network settings']]),
        table('Tests so far', ['Test', 'Result'], [
          ['t1', 'A co-worker’s phone on the office Wi-Fi opens the news page', 'Opens'],
          ['t2', 'Ken tries a second browser on his laptop', 'Will not open']])],
      asks: [ask('Which causes are still on the list? Pick every one.', [
        ['Ken’s account', true],
        ['Ken’s laptop’s own network settings', true],
        ['The Wi-Fi', KEPT, 'The co-worker’s phone opened the page on the same Wi-Fi, so it is crossed off.'],
        ['The server that holds the news page', KEPT, 'The co-worker’s phone opened the page from that server, so it is crossed off.'],
        ['The settings of the first browser Ken uses', KEPT, 'A second browser fails the same way, so the first browser’s own settings are crossed off.']], { many: true })],
      deciding: ['t1', 't2'],
      reason: 'The phone opened the page, which rules out the Wi-Fi and the server. A second browser failed the same way, which rules out the first browser’s own settings. Ken’s account and his laptop’s own network settings are the causes no test has touched.' }),
    item({
      id: 'l6-s-dock',
      blocks: [
        msg('chat', 'Mo, Finance', 'Chat with the help desk', [['m1', 'My laptop does not charge when it sits in its docking station.']]),
        note('A docking station is a stand the laptop sits in. It gives the laptop power and connects it to screens and cables.'),
        causes([['c1', 'The docking station’s power adapter'], ['c2', 'The docking station itself'], ['c3', 'Mo’s laptop']]),
        table('Test', ['Test', 'Result'], [['t1', 'The tech puts a power adapter known to work on the docking station', 'The laptop still does not charge']]),
        note('The tech says: “I was sure it was the adapter. I will try a third adapter.”')],
      asks: [ask('What should the tech do?', [
        ['Try a third power adapter from the cabinet on the docking station and see whether the laptop charges.', KEPT, 'An adapter known to work already ruled the adapter out. A third one repeats a test that has been answered.'],
        ['Replace the power adapter and the docking station together, then see whether the laptop charges.', TWO, 'If it works, you will not know which one it was, and the adapter was already ruled out.'],
        ['Plug the laptop into its own charger, outside the docking station, and see whether it charges; that tests the next cause.', true, 'An adapter known to work did not help, so the old adapter is ruled out. The next test is on the next cause.']])],
      deciding: ['t1'],
      reason: 'A part known to work, in the old part’s place, did not help, so the old adapter is ruled out. The first idea has a hold on the tech, so the written list says what is next: the dock and the laptop.' }),
    item({
      id: 'l6-s-hana',
      blocks: [note('Hana in Operations calls the help desk about a slow computer. You answer. On this desk, one change and a look at the speed takes about five minutes.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Hana calls about her slow computer. What do you say?', form: 'call', from: 'Hana, Operations', detail: 'Incoming call · 1:40 PM', start: 'one',
        turns: {
          one: { lines: [L('h1', 'My computer is crawling. Just do everything: updates, cleanup, restart, all of it, at once. I have a deadline at 4.')], push: 'She wants every fix at once.',
            options: [{ id: 'two', text: 'I can do the updates and the cleanup together and leave the restart for later.', end: 'two' },
              { id: 'call', text: 'Please call back tomorrow when it is quiet.', end: 'later' },
              { id: 'all', text: 'All right, I will do them all together now.', end: 'all' },
              { id: 'one', text: 'I will make one change, then check whether it is faster, then the next.', goto: 'two' }] },
          two: { lines: [L('h2', 'One at a time sounds slow. I do not have time.')], push: 'She pushes again for the fast way.',
            options: [{ id: 'three', text: 'Fine, I will do three together.', end: 'three' },
              { id: 'quick', text: 'One change takes about five minutes, then we look, so we know what helped and what to leave out.', end: 'one' }] }
        },
        ends: {
          one: { ok: true, then: 'One change then a look: if the computer speeds up, you know what did it; if not, that change is crossed off and the next is tried. It can still end in a few minutes.' },
          all: { ok: false, slip: TWO, then: 'If the computer speeds up, nobody will know which change did it, and changes it did not need stay in. If it does not, nothing is crossed off.' },
          two: { ok: false, slip: TWO, then: 'Even two small changes together cannot be told apart if it works, and the one it did not need stays in. Neither is crossed off if it does not.' },
          three: { ok: false, slip: TWO, then: 'Three changes at once cannot be told apart if it works, and none is crossed off if it does not.' },
          later: { ok: false, slip: 'no-next', then: 'Hana has a deadline at 4 and gets no help. One change then a look would have started right away.' } } }],
      reason: 'Hana is pressed for time, but one change and a look takes about five minutes and shows what worked. Doing them together leaves it unknown which did it and keeps changes that were not needed; if nothing helps, nothing is crossed off.' }),

    // ----- the third group: mixed with lesson 5 -----
    item({
      id: 'l6-g-marcus',
      blocks: [
        msg('chat', 'Marcus, Planning', 'Chat with the help desk', [['m1', 'My phone does not get work email, but my laptop does.']]),
        causes([['c1', 'Marcus’s account'], ['c2', 'The company’s mail service'], ['c3', 'The mail app on Marcus’s phone'], ['c4', 'The phone’s connection to the internet']]),
        table('Test', ['Test', 'Result'], [['t1', 'Marcus’s laptop, signed in as Marcus with the same mail account', 'Gets email all day']])],
      asks: [ask('Which causes does that result rule out? Pick every one.', [
        ['Marcus’s account', true],
        ['The company’s mail service', true],
        ['The mail app on Marcus’s phone', SIDE, 'The laptop does not use the phone’s mail app, so the result says nothing about it.'],
        ['The phone’s connection to the internet', SIDE, 'The laptop does not use the phone’s connection, so the result says nothing about it.']], { many: true })],
      deciding: ['t1'],
      reason: 'The laptop gets Marcus’s email, so his account and the mail service work and are crossed off. The mail app and the phone’s connection never took part in that test, so both stay on the list.' }),
    item({
      id: 'l6-g-quinn',
      blocks: [
        msg('chat', 'Quinn, Operations', 'Chat with the help desk', [['q1', 'My laptop will not join the office Wi-Fi. It stopped after the Wi-Fi password changed over the weekend. A co-worker’s laptop joins fine, next to mine.']]),
        costed([['c1', 'The password Quinn’s laptop saved for the Wi-Fi', 'Forget the saved network and join again', 'Two minutes'], ['c2', 'The Wi-Fi software on Quinn’s laptop', 'Update it', '20 minutes'], ['c3', 'The Wi-Fi part inside Quinn’s laptop', 'Swap in a working part', 'An hour']])],
      asks: [ask('What is your next move?', [
        ['Restart the office router, then check whether the laptop joins.', KEPT, 'The co-worker’s laptop joins, so the Wi-Fi works and is crossed off. The restart would also cut off everyone else.'],
        ['Update the Wi-Fi software, then forget the saved network, then check.', TWO, 'That is two changes before one look. If the laptop joins, you will not know which of the two did it.'],
        ['Forget the saved network and join it again, which is one change, then check whether the laptop joins.', true, 'The Wi-Fi works, so it is crossed off. The saved password has the cheapest test of the three causes left. One change on that cause, then a look at the result.']])],
      reason: 'The Wi-Fi works for a co-worker, so it is crossed off. Of the causes left the saved password is the cheapest to test, so the next move is one change on that cause and a look at the result.' }),
    item({
      id: 'l6-g-jun',
      blocks: [
        msg('chat', 'Jun, Design', 'Chat with the help desk', [['j1', 'My screen flickers.']]),
        causes([['c1', 'The cable to the monitor'], ['c2', 'The monitor'], ['c3', 'Jun’s computer']]),
        table('Test', ['Test', 'Result'], [['t1', 'The tech puts in a cable known to work', 'The screen still flickers']]),
        note('The tech says: “I was sure it was the cable. Let me try one more cable.”')],
      asks: [ask('What should the tech do?', [
        ['Try one more cable on the monitor, then look at the screen again.', KEPT, 'A cable known to work already ruled the cable out. Another one repeats a test that has been answered.'],
        ['Change the cable and move to another port together, then look.', TWO, 'If it works, you will not know which one it was.'],
        ['Cross off the cable and try the monitor on another computer.', true, 'A cable known to work did not help, so the old cable is ruled out. The next test is on the next cause.']])],
      deciding: ['t1'],
      reason: 'The cable known to work did not help, so the old cable is ruled out. A first idea that will not let go is the trouble here; the written list says the monitor and the computer are next.' }),

    // ----- the check: five new -----
    item({
      id: 'l6-k-lila',
      blocks: [
        msg('chat', 'Lila, Records', 'Chat with the help desk', [['l1', 'I cannot open the shared folder on my laptop.']]),
        note('The shared folder is reached over the same Wi-Fi as the web.'),
        causes([['c1', 'The Wi-Fi'], ['c2', 'The server that holds the shared folder'], ['c3', 'Lila’s account'], ['c4', 'Lila’s laptop’s setup for the folder']]),
        table('Tests so far', ['Test', 'Result'], [
          ['t1', 'A co-worker opens the shared folder on their laptop', 'Opens'],
          ['t2', 'Lila opens a web page on her laptop', 'Opens']])],
      asks: [ask('Which causes do these two results rule out? Pick every one.', [
        ['The Wi-Fi', true],
        ['The server that holds the shared folder', true],
        ['Lila’s account', SIDE, 'The co-worker opened the folder as themselves, not as Lila, so Lila’s account is untested.'],
        ['Lila’s laptop’s setup for the folder', SIDE, 'The web page tests the connection only, not how the laptop reaches the folder.']], { many: true })],
      deciding: ['t1', 't2'],
      reason: 'The web page opening rules out the Wi-Fi. The co-worker opening the folder rules out the server. Neither test used Lila’s account or the way her laptop reaches the folder, so both stay on the list.' }),
    item({
      id: 'l6-k-pat',
      blocks: [
        msg('chat', 'Pat, Front desk', 'Chat with the help desk', [['p1', 'My desk phone is blank and gives no dial tone.']]),
        note('The desk phone gets its power and its calls through one network cable that runs to a network port in the wall.'),
        causes([['c1', 'The cable from the phone to the wall'], ['c2', 'The network port in the wall'], ['c3', 'The phone']]),
        table('Test', ['Test', 'Result'], [['t1', 'The tech puts a cable known to work between the phone and the wall', 'The screen lights up and there is a dial tone']])],
      asks: [ask('What should the tech do?', [
        ['Leave the new cable in, write down that the old cable was the cause, and swap the phone for a new one too, to be safe.', TWO, 'The phone is a second change nobody needed, and it stays in. The cable swap already showed the cause.'],
        ['Put the old cable back and try more cables from the cabinet, to be sure.', KEPT, 'The swap worked, so the old cable is the cause. Putting it back undoes the fix.'],
        ['Leave the new cable in, and write down that the old cable was the cause.', true, 'The known-good cable was the test, and it fixed the phone, so keeping it is the one change. The note says the old cable was the cause.'],
        ['Leave the new cable in, and write down only that the phone works now.', VAGUE, 'The next technician cannot tell what was changed, so the note is no use if the phone goes blank again.']])],
      deciding: ['t1'],
      reason: 'A part known to work is a test, and when the trouble goes, keeping the part is the one change. Nothing else needs touching, and the note names the old cable as the cause.' }),
    item({
      id: 'l6-k-scan',
      blocks: [
        msg('chat', 'Dee, Front desk', 'Chat with the help desk', [['d1', 'The scanner will not send scans to my email. It worked last week, until I typed a new email address into the scanner on Monday.']]),
        costed([['c1', 'The email address saved on the scanner', 'Retype the address', 'One minute'], ['c2', 'The scanner’s network cable', 'Look at the scanner’s network screen', 'One minute'], ['c3', 'The scanner’s software', 'Update it', '30 minutes']]),
        table('Test', ['Test', 'Result'], [['t1', 'The scanner’s screen shows its network connection', 'Connected']])],
      asks: [ask('What is your next move?', [
        ['Correct the address and update the scanner’s software, then send a test scan.', TWO, 'If it works, you will not know which of the two did it.'],
        ['Replace the scanner’s network cable, then send a test scan.', KEPT, 'The scanner shows it is connected, so the cable is ruled out.'],
        ['Correct the email address on the scanner, then send a test scan.', true, 'The scanner shows it is connected, so the cable is crossed off, and the address has a cheaper test than the software. One change on that cause, then a look at the result.'],
        ['Correct the address, restart the scanner, then send a test scan.', TWO, 'Two changes at once cannot be told apart if it works.']])],
      deciding: ['d1', 't1'],
      reason: 'The scanner is connected, so the cable is crossed off. The address is the cheapest test of the two causes left. One change on that cause, then a test scan, shows what it did and leaves the other cause untouched.' }),
    item({
      id: 'l6-k-uma',
      blocks: [
        note('Toner is the powder a laser printer prints with; the cartridge holds it.'),
        msg('chat', 'Uma, Technician', 'Note in the ticket', [['u1', 'Printer printed gray streaks. I ran the printer’s cleaning routine and put in a new toner cartridge in the same visit. It prints clean now.']])],
      asks: [ask('What can the ticket note say about the cause?', [
        ['The cleaning and the new toner both went in; the toner is the likely cause, because the old cartridge had run low.', CRED, 'The cleaning happened at the same time, so the toner is a guess.'],
        ['Cleaning run and toner cartridge replaced in the same visit; either could be the cause, and it is not known which.', true, 'Two things changed at once, so either could be the cause. The note lists both and says so.'],
        ['Printer repaired on site. It prints clean now and the user was told.', VAGUE, 'The next technician cannot tell what was changed, so the note is no use if the streaks come back.'],
        ['The toner went in and the cleaning was run; the cleaning is the likely cause, because streaks come from dirt.', CRED, 'The new toner went in at the same time, so the cleaning is a guess.']])],
      deciding: ['u1'],
      reason: 'Two changes at once, so a fix cannot be credited to one. One change at a time would have shown which; the note lists both and says the cause is not known.' }),
    item({
      id: 'l6-k-order',
      blocks: [note('A user’s laptop will not join the office Wi-Fi. You write down the causes: the office Wi-Fi, the saved password, the Wi-Fi switch on the laptop.')],
      asks: [{ id: 'a', kind: 'order', prompt: 'Put the work in order.', steps: [
        { id: 'c1', text: 'Write down the causes.' },
        { id: 'c2', text: 'Join the office Wi-Fi with a phone.' },
        { id: 'c3', text: 'Cross off the office Wi-Fi, because the phone joined.' },
        { id: 'c4', text: 'Forget the saved network and join it again.' },
        { id: 'c5', text: 'Check that the laptop is online.' },
        { id: 'c6', text: 'Write down what you changed and what happened.' }],
        right: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'], then: 'The list first, then the test of the favorite, then crossing it off once the result is known, then one change on the next cause, a look at the result, and the note last.' }],
      reason: 'The list comes first. The test comes before the cross-off, because the result decides it. One change on the next cause comes after, then the look, and the note last.' }),

    // ----- held in reserve for the weekly review -----
    item({
      id: 'l6-r-cal',
      blocks: [
        msg('chat', 'Cal, Warehouse', 'Chat with the help desk', [['w1', 'Web pages are slow on my laptop.']]),
        causes([['c1', 'The Wi-Fi'], ['c2', 'The company’s internet link'], ['c3', 'Cal’s laptop']]),
        table('Test', ['Test', 'Result'], [['t1', 'Cal’s phone, on the same Wi-Fi', 'Pages load fast']])],
      asks: [ask('Which causes does that result rule out? Pick every one.', [
        ['The Wi-Fi', true],
        ['The company’s internet link', true],
        ['Cal’s laptop', SIDE, 'The phone is not Cal’s laptop, so the laptop stays on the list.']], { many: true })],
      deciding: ['t1'],
      reason: 'The phone loads pages fast on the same Wi-Fi, so the Wi-Fi and the internet link work and are crossed off. The phone never used Cal’s laptop, so it stays on the list.' }),
    item({
      id: 'l6-r-ned',
      blocks: [
        msg('chat', 'Ned, Sales', 'Chat with the help desk', [['n1', 'My keyboard types nothing.']]),
        causes([['c1', 'Ned’s keyboard'], ['c2', 'The port it is plugged into'], ['c3', 'Ned’s computer']]),
        table('Tests so far (the computer at the next desk works)', ['Test', 'Result'], [
          ['t1', 'A keyboard known to work, in Ned’s port', 'Types nothing'],
          ['t2', 'Ned’s keyboard, in a port on the next desk’s computer', 'Types nothing'],
          ['t3', 'The keyboard known to work, in that port on the next desk’s computer', 'Types fine']])],
      asks: [ask('What do the three results show?', [
        ['The keyboard is fine, because the keyboard known to work did not help in Ned’s port.', FAULT2, 'The second test shows Ned’s keyboard is bad as well. In the first test the port was bad too, so the new keyboard could not type.'],
        ['Only the port is faulty, because nothing typed in it.', FAULT2, 'Ned’s keyboard also fails in a port that works, so it is faulty too.'],
        ['Both Ned’s keyboard and the port on his computer are faulty.', true, 'A good keyboard fails in Ned’s port, and Ned’s keyboard fails in a good port. Two faults hid each other in the first test.'],
        ['Ned’s keyboard is the only fault, so cross off the port.', FAULT2, 'A keyboard known to work also failed in Ned’s port, so the port is not cleared.']])],
      deciding: ['t1', 't2', 't3'],
      reason: 'Crossing a cause off on one result assumes one fault. Here the results contradict each other: the keyboard known to work fails in Ned’s port, and Ned’s keyboard fails in a working port. When results contradict, suspect a second fault and keep both causes on the list.' }),
    item({
      id: 'l6-r-streak',
      blocks: [
        msg('chat', 'Vic, Billing', 'Chat with the help desk', [['v1', 'My printouts have a gray streak down the page.']]),
        note('Toner is the powder a laser printer prints with; the cartridge holds it.'),
        causes([['c1', 'The printer needs its cleaning routine run'], ['c2', 'The toner cartridge is low or faulty'], ['c3', 'The paper']])],
      asks: [ask('What is your next move?', [
        ['Run the cleaning routine and replace the toner, then print a test page.', TWO, 'If it prints clean, you will not know which of the two did it.'],
        ['Run the cleaning routine, replace the toner and change the paper, then print a test page.', TWO, 'Three changes at once cannot be told apart if it works.'],
        ['Run the printer’s cleaning routine on its own, one change on one cause, then print a test page to look.', true, 'One change on one cause, then a look at the result.']])],
      reason: 'One change on one cause, then a test page. The result shows what that change did, and the other causes stay on the list untouched.' }),
    item({
      id: 'l6-r-ravi',
      blocks: [note('Ravi in Sales calls the help desk. His printer prints blank pages. You answer. On this desk, a first change and a test page takes about two minutes.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Ravi calls about his printer. What do you say?', form: 'call', from: 'Ravi, Sales', detail: 'Incoming call · 11:15 AM', start: 'one',
        turns: {
          one: { lines: [L('r1', 'My printer prints blank pages. Just do every fix on your list together so we can be done.')], push: 'He wants every fix at once.',
            options: [{ id: 'all', text: 'All right, I will do every fix at once.', end: 'all' },
              { id: 'one', text: 'I will make one change, print a test page, then the next.', goto: 'two' },
              { id: 'later', text: 'Call back tomorrow, please.', end: 'later' }] },
          two: { lines: [L('r2', 'One at a time? I need this printed in ten minutes.')], push: 'He pushes again for the fast way.',
            options: [{ id: 'quick', text: 'The first change takes two minutes, and the test page shows right away whether it helped or not.', end: 'one' },
              { id: 'three', text: 'Fine, I will do three together.', end: 'three' }] }
        },
        ends: {
          one: { ok: true, then: 'One change then a test page: if the page prints, you know what did it; if not, that change is crossed off and the next is tried, and the first one takes two minutes.' },
          all: { ok: false, slip: TWO, then: 'If the page prints, nobody will know which change did it, and fixes it did not need stay in. If it does not, nothing is crossed off.' },
          three: { ok: false, slip: TWO, then: 'Three changes at once cannot be told apart if it works, and none is crossed off if it does not.' },
          later: { ok: false, slip: 'no-next', then: 'Ravi needs his page in ten minutes and gets no help. One change then a test page would have started right away.' } } }],
      reason: 'Ravi is pressed for time, but one change and a test page takes about two minutes and shows what worked. Doing every fix at once leaves it unknown which did it and keeps fixes that were not needed; if nothing helps, nothing is crossed off.' })
  ]);
})();
