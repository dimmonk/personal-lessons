// IT Help Desk, lesson 5 "Cut it in half" (part half): move 5 of the way of thinking. List more than one cause, run the cheapest test that
// splits what works from what does not (another person, another computer, a part known to work, before or after sign-in, can it reach the
// network), read what the result rules out, and cut what is left again. The novice error is working on whatever is nearest (IT8).
// Research: docs/research/it-support.md IT4 (divide and conquer, swap, compare), IT5 (one strategy plus what each part does for the whole),
// IT8 (skilled engineers cut the problem space by checking connections; unskilled ones poke at devices), IT9 (write down more than one cause).
// The worked ticket, a first group of four (the deciding words marked), a group of six, a group of four, the six of the check, and four held in
// reserve. Wrong choices include tests that look sensible but do not split, and tests on the wrong side, of the same length and tone as the right one. Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const S = 'half';
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  // an option: [words, true for the right one or the slip the wrong one names, the line saying what follows]
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ strand: S, facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const NEAR = 'poked-nearest', NOSPLIT = 'no-split', SIDE = 'wrong-side', ONE = 'one-cause', KEPT = 'kept-ruled-out', FAULT2 = 'one-fault';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause that the first test rules out, then two more cuts -----
    item({
      id: 'l5-w-price',
      blocks: [
        msg('chat', 'Dana, Sales', 'Chat with the help desk', [['d1', 'The price list on the shared drive will not open. It just says it cannot open the file. I need it for a call at 2.']]),
        note('The shared drive is a folder on a company computer (a server) that many people open. The causes you can list: Dana’s laptop and its connection to the network, Dana’s account (it may not be allowed into that folder), the server that holds the folder, the file itself.')],
      asks: [ask('Dana signs in on their neighbor Tom’s computer and tries the price list. It fails there too. What does that show?', [
        ['The fault follows Dana’s account, not their laptop.', true, 'Dana fails on their laptop and on Tom’s computer, and Tom opens the file fine, so the cause is something that goes with Dana.'],
        ['The fault is Dana’s laptop.', SIDE, 'The same laptop is not in the test now: Dana is on Tom’s computer and it still fails.'],
        ['The fault is the server that holds the folder.', SIDE, 'Tom opened the price list from the same server a moment ago.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits, before testing any.', working: 'Dana’s laptop and its connection; Dana’s account and the folder it may not be allowed into; the server that holds the shared drive; the file itself.' },
        { id: 'favorite', does: 'Name your favorite, and keep it as the first thing to test, not the answer.', working: 'The Wi-Fi: three people on that floor complained about it last week.' },
        { id: 'net', does: 'Run the cheapest test of the favorite.', working: 'Dana opens a web page on their laptop. It opens. The laptop reaches the internet, so the Wi-Fi is working and is not the cause. One cause is gone.' },
        { id: 'other', does: 'Cut what is left with another person.', working: 'Tom, next to Dana, opens the price list on Tom’s computer. It opens. The server and the file are fine. Left: Dana’s laptop, or Dana’s account.' },
        { id: 'who', does: 'Cut again: the person or the computer?', working: 'Dana signs in on Tom’s computer. It fails there too. The fault goes with Dana, not their laptop.', ask: 'a' },
        { id: 'last', does: 'Look at the one cause left.', working: 'Dana joined the sales team last week and the folder’s list of people does not have them yet. Have the folder’s owner add them.' }],
      deciding: ['d1'],
      reason: 'Dana’s laptop reached a web page, so the Wi-Fi was ruled out. Tom opened the file, so the server and the file were ruled out. The same failure on Tom’s computer put the fault with Dana’s account. Three cheap tests, each cutting the list, instead of a fix on whatever was nearest.' }),

    // ----- the first group: the deciding words marked; which test cuts the causes -----
    item({
      id: 'l5-p-print',
      blocks: [
        msg('chat', 'Gilbert, Marketing', 'Chat with the help desk', [['a1', 'My report will not print on the second-floor printer. I pressed Print three times. The page never comes out.']]),
        note('Causes you can list: Gilbert’s laptop, Gilbert’s connection to that printer, the printer itself.')],
      asks: [ask('Which test cuts the causes?', [
        ['Have Gilbert print the same report to the printer by the front desk.', true, 'If it comes out there, their laptop is fine and the second-floor printer is the cause. If it does not, the laptop is. Either way the list is shorter.'],
        ['Have a co-worker print their own report to the printer by the front desk.', NOSPLIT, 'It tests the front-desk printer and the co-worker’s laptop. Whichever way it comes out, Gilbert’s laptop, their connection and the second-floor printer are all still in question.'],
        ['Have Gilbert print a one-line test page to the second-floor printer.', NOSPLIT, 'It is the same laptop to the same printer, so a failure rules nothing out.'],
        ['Reinstall the printer’s software on Gilbert’s laptop and print the report again.', NEAR, 'That is a fix on the nearest cause. If it fails, you still do not know which side to look on.']])],
      deciding: ['a1'],
      reason: 'Gilbert’s page leaves their laptop and never comes out of that printer, so the fault is on one side or the other. Printing the same report to a different printer is cheap, changes nothing, and its two results lead to different causes. The other choices test something else, repeat the same path, or fix one cause first.' }),
    item({
      id: 'l5-p-monitor',
      blocks: [
        msg('chat', 'Simone, Accounting', 'Chat with the help desk', [['a1', 'My second monitor has been black since I got in. The power light on it is on.']]),
        note('Causes you can list: the monitor, the cable between them, the computer’s video connection.')],
      asks: [ask('Which test cuts the causes?', [
        ['Plug that monitor and its cable into a co-worker’s computer.', true, 'If it shows a picture there, the monitor and cable are fine and the fault is on Simone’s computer. If it stays black, the fault is the monitor or the cable, and the next cut splits those two.'],
        ['Have a co-worker look at the black monitor and say whether it is black for them too.', NOSPLIT, 'Another person looking at the same black screen tells you nothing new. The monitor, the cable and the computer are all still in question.'],
        ['Turn Simone’s computer off and on with the monitor still plugged in.', NOSPLIT, 'It is a fix, not a test: if the screen stays black, no cause is ruled out.'],
        ['Order a new monitor and swap it in when it arrives.', NEAR, 'That jumps to one cause before any test, and it costs money if the monitor was fine.']])],
      deciding: ['a1'],
      reason: 'Moving the monitor and its cable to a computer that works cuts the list between the computer on one side and the monitor and cable on the other. It is cheap, and everything can be moved back. The other choices look at the same screen again, restart, or fix one cause before the list is cut.' }),
    item({
      id: 'l5-p-mail',
      blocks: [
        msg('chat', 'Sheila, Legal', 'Chat with the help desk', [['a1', 'My email program says it cannot connect. It worked on Friday.']]),
        note('Causes you can list: Sheila’s laptop cannot reach the internet at all, the company’s mail service is down or refusing them, the mail program on their laptop.')],
      asks: [ask('Which test cuts the causes?', [
        ['Have Sheila send themself a short message from the mail program again.', NOSPLIT, 'The program already says it cannot connect, so this repeats the failure and rules nothing out.'],
        ['Have Sheila check that the date and time on their laptop are right.', NOSPLIT, 'It checks something that is not on the list. Whichever way it comes out, the three causes are all still open.'],
        ['Have Sheila open a web page on the same laptop.', true, 'If a page opens, the laptop reaches the internet and the fault is further on: the mail service or the mail program. If nothing opens, the connection is the fault.'],
        ['Delete their mail account from the program and add it again.', NEAR, 'That is a fix on the nearest cause, and it can lose what was stored in the program. If it fails, nothing is ruled out.']])],
      deciding: ['a1'],
      reason: '“Cannot connect” has two sides: the laptop does not reach the internet, or it does and something beyond it is wrong. A web page is the cheapest way to tell, and it changes nothing. The other choices repeat the failure, check something off the list, or work on the mail program, which is only one of the causes.' }),
    item({
      id: 'l5-p-nadia',
      blocks: [
        msg('chat', 'Arman, HR', 'Chat with the help desk', [['a1', 'My laptop says my password is wrong. I have not changed it. I checked that Caps Lock is off and typed it three times.']]),
        note('Causes you can list: Arman’s account or password, Arman’s laptop. A company account works on any company computer.')],
      asks: [ask('Which test cuts the causes?', [
        ['Reset Arman’s password, then have them sign in on their laptop again.', NEAR, 'That is a fix on the nearest cause, and it changes the password they know. If the laptop was the problem, nothing is solved.'],
        ['Have Arman try the same sign-in on a co-worker’s computer.', true, 'If they are let in there, their account is fine and the fault is on their laptop. If they are refused there too, the fault goes with their account.'],
        ['Have Arman type their password once more, slowly, on the same laptop.', NOSPLIT, 'They have already typed it three times with Caps Lock off. A fourth try gives the same answer and rules no cause out.'],
        ['Reinstall Windows (wipe the laptop and put the system back from scratch) and try again.', NEAR, 'That is a very large fix on one cause, and it is not shown to be the right one.']])],
      deciding: ['a1'],
      reason: 'The same person on a second computer is a split between the person and the computer. It is cheap and changes nothing. The other choices change the password or the laptop before anyone knows which of the two is at fault, or repeat the try.' }),

    // ----- the second group: no marks -----
    item({
      id: 'l5-s-eli',
      blocks: [
        msg('chat', 'Eli, Operations', 'Chat with the help desk', [['e1', 'I cannot open the timesheet page on the company website. It just spins.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Eli’s laptop, other websites', 'Open fine'],
          ['t2', 'Maya’s laptop, the timesheet page', 'Opens fine'],
          ['t3', 'Eli signs in on Maya’s laptop, the timesheet page', 'Spins, will not open']])],
      asks: [ask('Where does this point?', [
        ['Eli’s account', true, 'The page opens for Maya but not for Eli, even on Maya’s computer. The fault goes with Eli.'],
        ['Eli’s laptop', SIDE, 'Eli is on Maya’s laptop in the last test, and it still fails. Maya’s laptop works for them.'],
        ['The timesheet website', SIDE, 'The page opens for Maya, so the website is fine.'],
        ['The office network', SIDE, 'Other websites open on Eli’s laptop and the page opens on Maya’s, so the network is fine.']])],
      deciding: ['t2', 't3'],
      reason: 'The page opens for Maya (the website and the network work) and fails for Eli on Maya’s computer as well (it is not Eli’s laptop). The only cause left that goes with Eli is their account.' }),
    item({
      id: 'l5-s-next',
      blocks: [
        msg('chat', 'Hal, Shipping', 'Chat with the help desk', [['h1', 'My keyboard types nothing. The mouse works.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'Hal unplugged the keyboard and plugged it back into the same port', 'Still types nothing']]),
        note('A port is a socket on the computer that a cable plugs into. Causes left: the keyboard, the port it is in, Hal’s computer.')],
      asks: [ask('Which test comes next?', [
        ['Plug the same keyboard into the same port once more, pushing it in firmly.', NOSPLIT, 'Hal already did that, and it gave an answer. Doing it again rules nothing out.'],
        ['Have Hal click into a different program and type there.', NOSPLIT, 'A keyboard that types nothing will type nothing in any program, so the result is the same for every cause.'],
        ['Plug a keyboard you know works into the same port.', true, 'If it types, the old keyboard was the fault. If it does not, the port or the computer is, and the next cut splits those two.'],
        ['Reinstall Windows on Hal’s computer and type again.', NEAR, 'That is a very large fix on one cause, and it is not shown to be the right one.']])],
      reason: 'A part known to work, put where the doubtful one was, cuts the list again: if it works, only the keyboard was at fault; if it does not, the keyboard is cleared. The other choices repeat a test already done, test nothing new, or fix one cause untested.' }),
    item({
      id: 'l5-l-blank',
      blocks: [
        msg('chat', 'Hamza, Front desk', 'Chat with the help desk', [['g1', 'Only my report prints blank on the shared printer. Everybody else printed fine on it this morning.']])],
      asks: [ask('Which causes are still worth listing? Pick every one that fits.', [
        ['The report file itself', true],
        ['The way Hamza’s laptop is configured to print to that printer', true],
        ['The printer is out of toner', SIDE, 'Everyone else printed fine on that printer this morning, so it has toner.'],
        ['The printer has lost its connection to the network', SIDE, 'Other people’s pages got to it this morning, so it is connected.']], { many: true })],
      deciding: ['g1'],
      reason: 'Everyone else printed fine on that printer, so the printer and its connection are cleared by what is already known. What is left is on Hamza’s side: their file, or how their laptop prints. List those two, then cut between them with a test.' }),
    item({
      id: 'l5-s-fav',
      blocks: [
        msg('chat', 'Behrouz, Sales', 'Chat with the help desk', [['v1', 'The web page for our order system will not load for me. It is the Wi-Fi, I am sure, it is always the Wi-Fi.']]),
        note('You think it may be the Wi-Fi too.')],
      asks: [ask('What do you do before you test it?', [
        ['Write down the Wi-Fi as the cause and test it first, because two of you already think so.', ONE, 'If the Wi-Fi test comes back clean, you have no list and no next test.'],
        ['Add their laptop, their account and the order system to the list too, then run the cheapest test.', true, 'The list stops the favorite from being the only thing tested, and the cheapest test may be on a different cause.'],
        ['Replace the Wi-Fi card (the part inside their laptop that connects to Wi-Fi), then try the page again.', ONE, 'That is a fix on one cause nobody has tested.']])],
      deciding: ['v1'],
      reason: 'A favorite cause is the first thing to test, not the answer. Writing the other causes down first keeps one idea from being the only one, and the cheapest test is not always the favorite’s.' }),
    item({
      id: 'l5-x-newpc',
      blocks: [note('Frank in Sales calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Frank calls about the price list. You have their story. What do you say to cut the causes?', form: 'call', from: 'Frank, Sales', detail: 'Incoming call · 10:05 AM', start: 'one',
        turns: {
          one: { lines: [L('f1', 'My computer will not open the shared price list. It is old and it is broken. Just send me a new one.')], push: 'They want a replacement before anything has been tested.',
            options: [{ id: 'restart', text: 'Can you restart your computer and tell me if it opens then?', end: 'restart' },
              { id: 'order', text: 'I will put in the order for a new computer today.', end: 'ordered' },
              { id: 'neighbor', text: 'Have the person next to you open the price list on their computer.', goto: 'two' },
              { id: 'age', text: 'How old is the computer, and which Windows does it have?', end: 'age' }] },
          two: { lines: [L('f2', 'Kim says it will not open on theirs either. Still, mine is old. Replace it anyway.')], push: 'They still want the replacement, even though another computer fails the same way.',
            options: [{ id: 'order2', text: 'All right, I will order the new computer.', end: 'ordered2' },
              { id: 'again', text: 'Could Kim try it once more, to be sure?', end: 'again' },
              { id: 'folder', text: 'Then it is not only your computer. I will check the shared folder itself.', end: 'folder' }] }
        },
        ends: {
          folder: { ok: true, then: 'Two computers fail the same way, so the cause is something both share: the folder, the server or the network. One request cut the list without touching Frank’s computer.' },
          ordered: { ok: false, slip: NEAR, then: 'A new computer costs days and money, and nothing showed the old one was the cause. One person next to them trying the file would have shown whether it was.' },
          restart: { ok: false, slip: NOSPLIT, then: 'A restart is a fix, not a test. If it fails, you still do not know which side the fault is on.' },
          age: { ok: false, slip: NOSPLIT, then: 'Good to know later, but you already have their story, and the age and the system do not decide between their computer and what it reaches. Another computer trying the file would.' },
          ordered2: { ok: false, slip: NEAR, then: 'Kim’s computer fails the same way, so a new computer for Frank would not fix it.' },
          again: { ok: false, slip: NOSPLIT, then: 'Kim already tried and it failed. Trying it once more gives the same answer and rules nothing out.' } } }],
      reason: 'Kim’s computer fails the same way as Frank’s, so the fault is not in Frank’s old computer. A second person on a second computer is the cheapest test that splits “this computer” from “what both computers reach”.' }),
    item({
      id: 'l5-s-boot',
      blocks: [
        msg('chat', 'Sia, Records', 'Chat with the help desk', [['s1', 'My laptop is very slow to be usable in the morning. Once I am in, programs open slowly for the first ten minutes.']]),
        note('Causes you can list: the laptop’s own start-up before anyone signs in, the programs that start for Sia’s account after they sign in.')],
      asks: [ask('Which test cuts the causes?', [
        ['Have a co-worker time how long their own laptop takes to be usable in the morning.', NOSPLIT, 'It times a different laptop. Sia’s start-up and their account’s programs are both still in question.'],
        ['Have Sia restart and watch whether the wait comes before the sign-in screen or after it.', true, 'If the wait comes before sign-in, it is the laptop’s own start-up. If it comes after, it is what starts for Sia’s account.'],
        ['Have Sia close every program they have open and sign in again.', NOSPLIT, 'It is the same sign-in on the same laptop. The wait looks the same whichever cause is real.'],
        ['Add memory (the part a laptop holds its open programs in) to the laptop and check the morning again.', NEAR, 'That is a guess at one cause, and it costs money if the cause is elsewhere.']])],
      deciding: ['s1'],
      reason: 'Failing or waiting before sign-in points at the laptop; only after sign-in points at the account and what starts for it. Watching where the wait comes is free and changes nothing. The other choices time another laptop, repeat the sign-in, or fix one cause first.' }),

    // ----- the third group: reading a swap, the cost of a test, a fault that comes before sign-in, two faults -----
    item({
      id: 'l5-g-mouse',
      blocks: [
        msg('chat', 'Adaeze, Design', 'Chat with the help desk', [['a1', 'My mouse pointer jumps all over the screen.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Adaeze’s mouse on Ben’s computer', 'The pointer jumps'],
          ['t2', 'Ben’s mouse on Adaeze’s computer', 'Works fine']])],
      asks: [ask('What does swapping the mouse show?', [
        ['The mouse: the trouble moved with it.', true, 'When a problem moves with the part, the part is the cause.'],
        ['Adaeze’s computer is the fault.', SIDE, 'Ben’s mouse works fine on Adaeze’s computer. If their computer were the cause, any mouse would jump.'],
        ['Ben’s computer is the fault.', SIDE, 'Ben’s own mouse works on their computer, so their computer is fine. The jumping followed Adaeze’s mouse there.'],
        ['The swaps cannot tell you anything.', SIDE, 'The trouble stayed in one place when the mice changed computers and followed the other mouse. That tells you a lot.']])],
      deciding: ['t1', 't2'],
      reason: 'Adaeze’s mouse jumps on a computer where it was fine before, and Ben’s mouse is fine on the computer where Adaeze’s jumped. The problem moves with the mouse, so the mouse is the cause. If a problem stays in place when the part moves, the part is not the cause.' }),
    item({
      id: 'l5-g-reset',
      blocks: [
        msg('chat', 'Asha, Billing', 'Chat with the help desk', [['a1', 'Nothing comes out of the printer when I print.']]),
        table('Three things you could do', ['Way', 'Takes', 'What it changes'], [
          ['w1', 'A co-worker prints to the same printer from their computer', 'One minute', 'Nothing'],
          ['w2', 'Reset the printer to its factory settings (the settings it had when it left the maker) and configure it again', '30 minutes', 'Wipes the printer’s settings for everyone'],
          ['w3', 'Asha presses Print again on the same page', 'One minute', 'Nothing']])],
      asks: [ask('Which do you do first?', [
        ['Reset the printer to its factory settings.', NEAR, 'It might tell you something, but it takes half an hour and wipes everyone’s settings. A test that changes nothing comes first.'],
        ['Have a co-worker print to the same printer.', true, 'It answers the same question (the printer, or Asha’s side) in a minute and changes nothing.'],
        ['Reinstall the printing program on Asha’s computer.', NEAR, 'That is a fix on one cause, and it splits nothing if it fails.'],
        ['Have Asha press Print again on the same page.', NOSPLIT, 'It is as cheap, but it is the same try on the same path, so its result rules no cause out.']])],
      deciding: ['w1', 'w2', 'w3'],
      reason: 'The cheapest test is the quickest one that changes the least and still splits the causes. Pressing Print again is just as cheap but splits nothing. A co-worker printing is cheap and splits. A reset is a fix to try after the cheap tests have narrowed the list.' }),
    item({
      id: 'l5-g-marco',
      blocks: [
        msg('chat', 'Adrian, Purchasing', 'Chat with the help desk', [['m1', 'My laptop will not start. I see the maker’s logo, then a black screen. I never get to the sign-in screen.']]),
        note('Causes you can list: Adrian’s account, the office network, Adrian’s laptop itself.')],
      asks: [ask('Where does this point?', [
        ['Adrian’s laptop itself', true, 'It fails before the sign-in screen, and an account or the office network only come in after that.'],
        ['Adrian’s account', SIDE, 'No account is used before the sign-in screen appears, so the account cannot be what stops it.'],
        ['The office network', SIDE, 'Nothing about the office network can matter before the sign-in screen even appears.']])],
      deciding: ['m1'],
      reason: 'Failing before sign-in cuts out the account and the office network, which only come in afterward. The fault is on Adrian’s laptop.' }),
    item({
      id: 'l5-g-port',
      blocks: [
        msg('chat', 'Tia, Shipping', 'Chat with the help desk', [['a1', 'My mouse does nothing. The pointer will not move.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Tia’s mouse, unplugged and plugged back into the same port', 'Nothing'],
          ['t2', 'A mouse known to work, in that port', 'Nothing']]),
        note('Causes left: the port, or Tia’s computer.')],
      asks: [ask('Which test comes next?', [
        ['Plug the mouse into a different port on the same computer.', true, 'It looks like the plugging already done, but it moves the mouse to a new port. If it works there, the first port was the fault. If it still fails, the port is cleared and the computer is left.'],
        ['Plug a third mouse into the same port and move it.', NOSPLIT, 'A mouse known to work already failed in that port, so a third one gives the same answer.'],
        ['Plug the mouse into the same port again, pushing it in firmly.', NOSPLIT, 'That was done in the first test and gave an answer. Doing it again rules nothing out.'],
        ['Order Tia a new computer and have it delivered.', NEAR, 'That jumps to one cause before the port is tested, and it costs money if the port was the fault.']])],
      deciding: ['t1', 't2'],
      reason: 'Two mice failed in the same port, so the mouse is cleared and the port or the computer is left. The same mouse in a different port splits those two. It is cheap, and the mouse moves back.' }),
    item({
      id: 'l5-g-two',
      blocks: [
        msg('chat', 'Nina, Legal', 'Chat with the help desk', [['n1', 'My monitor is black.']]),
        table('What you tried (Dee’s monitor and Dee’s computer work)', ['Test', 'Result'], [
          ['t1', 'A cable known to work, in place of Nina’s cable, on Nina’s monitor and computer', 'Still black'],
          ['t2', 'Nina’s monitor, with the cable known to work, on Dee’s computer', 'Black'],
          ['t3', 'Nina’s cable, with Dee’s monitor, on Dee’s computer', 'Black']])],
      asks: [ask('What do the three results show?', [
        ['The cable is fine, because swapping it did not help in the first test.', FAULT2, 'The third test shows Nina’s cable is bad as well. In the first test the monitor was bad too, so the new cable could not show a picture.'],
        ['Both Nina’s monitor and Nina’s cable are faulty.', true, 'The monitor is black even with a good cable, and the cable is black even with a good monitor. Two faults hid each other in the first test.'],
        ['Only Nina’s monitor is faulty, because it is black on Dee’s computer.', FAULT2, 'The cable is black on Dee’s monitor, so it is faulty too.'],
        ['Nina’s computer is the fault.', SIDE, 'Nina’s monitor is black on Dee’s computer as well, and Nina’s computer was not in the second and third tests.']])],
      deciding: ['t1', 't2', 't3'],
      reason: 'A swap that does not help clears the part only if there is one fault. Here the second and third tests move each part to a working setup, and both stay black, so two parts are faulty. When results contradict each other, suspect a second fault.' }),

    // ----- the check: six new -----
    item({
      id: 'l5-k-wifi',
      blocks: [
        msg('chat', 'Sherman, Finance', 'Chat with the help desk', [['z1', 'My laptop says Connected to Wi-Fi but no website will open.']]),
        note('Causes you can list: Sherman’s laptop, or the office Wi-Fi and its link to the internet together.')],
      asks: [ask('Which test cuts the causes?', [
        ['Have Sherman try the same website once more in a second browser on their laptop.', NOSPLIT, 'It tests the browser, which is not on the list. Whichever way it comes out, the laptop and the Wi-Fi are both still in question.'],
        ['Restart the office router (the box that connects the office to the internet).', NEAR, 'That cuts everyone in the office off, and it is a fix, not a test.'],
        ['Have Sherman forget the Wi-Fi network on their laptop and join it again.', NEAR, 'That is a fix on the nearest cause. If it fails, nothing is ruled out.'],
        ['Have Sherman open a web page on their phone, on the same Wi-Fi.', true, 'If the phone opens pages, the Wi-Fi and the internet are fine and the fault is on Sherman’s laptop. If it does not, the fault is on the Wi-Fi or the internet link.']])],
      deciding: ['z1'],
      reason: 'A second device on the same Wi-Fi cuts the laptop from the Wi-Fi and the internet link. It is cheap and changes nothing. The other choices test the browser, or fix one cause.' }),
    item({
      id: 'l5-k-monitor',
      blocks: [
        msg('chat', 'Wen, Purchasing', 'Chat with the help desk', [['w1', 'My monitor is black.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Wen’s monitor, with Wen’s cable, on Dee’s computer', 'Black'],
          ['t2', 'Dee’s monitor, with Wen’s cable, on Dee’s computer', 'Shows a picture']])],
      asks: [ask('Where does this point?', [
        ['Wen’s monitor', true, 'Wen’s cable works with Dee’s monitor on Dee’s computer, and Wen’s monitor is black even there.'],
        ['Wen’s cable', SIDE, 'The same cable shows a picture with Dee’s monitor in the second test.'],
        ['Wen’s computer', SIDE, 'Neither test used Wen’s computer. The monitor is black on Dee’s.'],
        ['Dee’s computer', SIDE, 'Dee’s computer shows a picture on Dee’s monitor in the second test.']])],
      deciding: ['t1', 't2'],
      reason: 'The cable and Dee’s computer are cleared by the picture in the second test. The black screen follows Wen’s monitor to a computer that works. The monitor is the fault.' }),
    item({
      id: 'l5-k-lin',
      blocks: [
        msg('chat', 'Lin, Planning', 'Chat with the help desk', [['l1', 'My laptop freezes for about five minutes after I sign in. The sign-in screen itself is fast.']]),
        note('Causes you can list: the laptop, Lin’s account and what starts for them when they sign in. The desk keeps a test account, a made-up account for checks like this.')],
      asks: [ask('Which test cuts the causes?', [
        ['Reinstall Windows (wipe the laptop and put the system back from scratch) on Lin’s laptop.', NEAR, 'That is a very large fix on one cause, and it is not shown to be the right one.'],
        ['Have Lin sign in on their own laptop again and watch the freeze for the full five minutes.', NOSPLIT, 'The same sign-in on the same laptop gives the same answer and rules nothing out.'],
        ['Sign in on Lin’s laptop with the desk’s test account and see whether it freezes.', true, 'If the laptop freezes for the test account too, the laptop is the cause. If it does not, the fault goes with Lin’s account and what starts for them.'],
        ['Add memory (the part a laptop holds its open programs in) to Lin’s laptop and sign in again.', NEAR, 'That is a guess at one cause, and it costs money if the cause is elsewhere.']])],
      deciding: ['l1'],
      reason: 'A different account on the same laptop splits the laptop from Lin’s account. The sign-in screen is fast, so the trouble comes after sign-in, which is where the account starts its own programs. The other choices repeat the sign-in or fix one cause untested.' }),
    item({
      id: 'l5-k-list',
      blocks: [
        msg('chat', 'Curtis, Records', 'Chat with the help desk', [['t1', 'The company website opens fine on my laptop, but the shared drive will not open. My neighbor can open both.']])],
      asks: [ask('Which causes are still worth listing? Pick every one that fits.', [
        ['Curtis’s account is not allowed into the shared drive', true],
        ['The way Curtis’s laptop is configured to reach the shared drive', true],
        ['The server that holds the shared drive is down', SIDE, 'Their neighbor opens the shared drive, so the server is up.'],
        ['The office network is down', SIDE, 'The company website opens on Curtis’s laptop, and their neighbor opens both, so the network is up.']], { many: true })],
      deciding: ['t1'],
      reason: 'Their neighbor opens the shared drive and their website opens, so the server and the network are cleared by what you already know. What is left is on Curtis’s side: their account, or how their laptop reaches the drive. List those two, then cut between them.' }),
    item({
      id: 'l5-k-call',
      blocks: [note('Carla in Accounting calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Carla calls about their internet. You have their story. What do you say to cut the causes?', form: 'call', from: 'Carla, Accounting', detail: 'Incoming call · 3:20 PM', start: 'one',
        turns: {
          one: { lines: [L('c1', 'My internet is down. The whole building must be down. Please fix the building.')], push: 'They want the whole building treated as the cause before any test.',
            options: [{ id: 'near', text: 'Can you tell me whether anyone near you is online right now?', goto: 'two' },
              { id: 'building', text: 'I will check the building’s network right now.', end: 'building' },
              { id: 'when', text: 'When did it last work, and what were you doing then?', end: 'when' },
              { id: 'restart', text: 'Restart your laptop and call back if it is still down.', end: 'restart' }] },
          two: { lines: [L('c2', 'Blair is on a video call right now. But I am sure it is the building.')], push: 'They still blame the building, though someone near them is online.',
            options: [{ id: 'router', text: 'I will restart the building’s router anyway.', end: 'router' },
              { id: 'cut', text: 'Then the building is up. Let us look at your laptop and its connection.', end: 'cut' },
              { id: 'again', text: 'Please try opening a page again, and tell me what it says.', end: 'again' }] }
        },
        ends: {
          cut: { ok: true, then: 'Blair’s video call shows the building’s connection works, so the fault is on Carla’s laptop or their connection to the network. One question cut the list.' },
          building: { ok: false, slip: NEAR, then: 'Nothing showed the building was the cause. Someone near them being online would have shown it was not.' },
          when: { ok: false, slip: NOSPLIT, then: 'You already have their story, and more of it does not tell the laptop from the building. Someone near them being online would.' },
          restart: { ok: false, slip: NOSPLIT, then: 'A restart is a fix, not a test. If it fails, you still do not know which side the fault is on.' },
          router: { ok: false, slip: KEPT, then: 'Blair is online, so the building is fine. Restarting the router would cut off the people who are working.' },
          again: { ok: false, slip: NOSPLIT, then: 'The same try gives the same answer and rules nothing out.' } } }],
      reason: 'Someone near Carla who is online shows the building’s connection works. A person on the same network is the cheapest test that splits “everyone” from “only Carla”.' }),
    item({
      id: 'l5-k-next',
      blocks: [
        msg('chat', 'Isla, Reception', 'Chat with the help desk', [['i1', 'There is no sound in my headset on video calls.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'Isla’s headset plugged into a co-worker’s computer', 'Sound works']]),
        note('Causes left: Isla’s computer or its sound connection, or the video call program.')],
      asks: [ask('Which test comes next?', [
        ['Reinstall the video call program and join a call.', NEAR, 'That is a fix on one cause. If it fails, nothing more is ruled out.'],
        ['Play a song on Isla’s computer through the headset, outside the video call program.', true, 'If the song plays, the headset and the computer are fine and the fault is in the video call program. If it does not, the fault is Isla’s computer or its sound connection.'],
        ['Plug Isla’s headset into the co-worker’s computer again and play a song.', NOSPLIT, 'That test was already done and the headset worked. Doing it again rules nothing out.'],
        ['Have Isla join a second call and listen again.', NOSPLIT, 'The same try gives the same answer and rules nothing out.']])],
      deciding: ['t1'],
      reason: 'The headset works elsewhere, so the list is down to the computer and the call program. Playing a song outside the call program splits those two: it is cheap, and its two results lead to different causes.' }),

    // ----- held in reserve for the weekly review -----
    item({
      id: 'l5-r-proj',
      blocks: [
        msg('chat', 'Rita, Training', 'Chat with the help desk', [['r1', 'The projector in room B shows nothing from my laptop.']]),
        note('Causes you can list: Rita’s laptop, the cable, the projector.')],
      asks: [ask('Which test cuts the causes?', [
        ['Connect a different laptop to the room B projector, same cable.', true, 'If it shows a picture, Rita’s laptop is the cause. If it does not, the cable or the projector is.'],
        ['Replace the projector’s lamp in room B, then try the laptop again.', NEAR, 'That is a guess at one cause, and it costs money if the lamp was fine.'],
        ['Update the graphics software on Rita’s laptop, then try the cable again.', NEAR, 'That is a fix on the nearest cause. If it fails, nothing is ruled out.'],
        ['Switch the projector off and on, then try the same laptop again.', NOSPLIT, 'It is a fix, not a test: if it fails, no cause is ruled out.']])],
      deciding: ['r1'],
      reason: 'A second laptop on the same projector and cable cuts Rita’s laptop from the rest. It is cheap and changes nothing. The other choices fix one cause or test nothing.' }),
    item({
      id: 'l5-r-mail',
      blocks: [
        msg('chat', 'Ola, Legal', 'Chat with the help desk', [['o1', 'I cannot send email from my mail program.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'Ola sends from their mail program', 'Fails'],
          ['t2', 'Ola sends from the mail website in a browser, on the same laptop', 'Works'],
          ['t3', 'A co-worker sends from their mail program on their laptop', 'Works']])],
      asks: [ask('Where does this point?', [
        ['The mail program on Ola’s laptop', true, 'The website works on the same laptop, and the same program works on a co-worker’s laptop.'],
        ['Ola’s account on the mail service', SIDE, 'Ola’s account sends fine from the website.'],
        ['The office’s internet connection', SIDE, 'Ola’s laptop sends from the website, and the co-worker’s laptop sends from its program.'],
        ['The company’s mail service itself', SIDE, 'The co-worker’s program and Ola’s website both send through it.']])],
      deciding: ['t2', 't3'],
      reason: 'The account, the network and the mail service are cleared by the website working for Ola and the program working for the co-worker. What is left is the one thing that fails: the mail program on Ola’s laptop.' }),
    item({
      id: 'l5-r-charger',
      blocks: [
        msg('chat', 'Carl, Warehouse', 'Chat with the help desk', [['c1', 'My laptop will not charge. The light on the charger is on. The same outlet charges my phone.']]),
        note('Causes you can list: Carl’s charger, the charging connection on their laptop, their laptop’s battery.')],
      asks: [ask('Which test cuts the causes?', [
        ['Try a co-worker’s charger on Carl’s laptop.', true, 'If it charges, Carl’s charger was the cause. If it does not, the fault is the laptop’s charging connection or battery.'],
        ['Move to a different outlet.', KEPT, 'The same outlet charges their phone, so the outlet is already cleared.'],
        ['Buy a new battery for Carl’s laptop and fit it.', NEAR, 'That fixes one cause untested, and it costs money if the charger was the fault.'],
        ['Restart the laptop.', NOSPLIT, 'It is a fix, not a test: if it fails, no cause is ruled out.']])],
      deciding: ['c1'],
      reason: 'A charger known to work, put where the doubtful one was, cuts the charger from the laptop. The outlet is already cleared. The other choices repeat a cleared cause, fix one untested, or test nothing.' }),
    item({
      id: 'l5-r-wait',
      blocks: [
        msg('chat', 'Tamar, Engineering', 'Chat with the help desk', [['d1', 'The Wi-Fi is slow for me in the break room. Other people in the break room are fine.']])],
      asks: [ask('Which causes are still worth listing? Pick every one that fits.', [
        ['Tamar’s laptop is busy with a big download or update', true],
        ['Something in Tamar’s laptop’s Wi-Fi settings', true],
        ['The Wi-Fi in the break room is down', SIDE, 'Other people in the break room are online and fine, so it is up.'],
        ['The company’s internet link is slow', SIDE, 'Other people in the same room are fine, so the link is not slow for them.']], { many: true })],
      deciding: ['d1'],
      reason: 'Other people in the break room are fine, so the room’s Wi-Fi and the internet link are cleared. What is left is on Tamar’s side: their laptop is busy, or its Wi-Fi settings. List those and test between them.' })
  ]);
})();
