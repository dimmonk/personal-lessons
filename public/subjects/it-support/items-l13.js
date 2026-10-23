// IT Help Desk, lesson 13 "Printers" (part printers): the print path as a chain (program, print queue, driver, connection, printer, paper path and
// toner or ink), each printer symptom of the first A+ exam placed on its link with the cheapest test that splits the chain, and the exam's setup, security
// and care facts by kind of printer. Research: docs/research/it-support-aplus.md Core 1 3.7 (deploy and configure printers), 3.8 (printer maintenance),
// 5.6 (printer symptoms), Core 2 4.5 (toner disposal); docs/research/it-support.md IT4, IT5, IT8 (cut the problem, one chain, test before fixing).
// The worked ticket, a first group of four (deciding words marked), a second of seven, a third of eight, the check in items-l13-check.js,
// and the rest held in reserve. Invented people and offices. Every wrong choice carries its slip and a line saying what it leaves undone.
(() => {
  const S = 'print-path', C = 'print-care';
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const path = spec => ({ strand: S, facets: {}, ...spec });
  const care = spec => ({ strand: C, facets: {}, ...spec });
  const L = (id, text) => ({ id, text });
  const NEAR = 'poked-nearest', NOSPLIT = 'no-split', LINK = 'wrong-link', CARE = 'wrong-care', SETUP = 'wrong-setup', OPEN = 'open-print';
  const KEPT = 'kept-ruled-out', MISSED = 'missed-second', GAVE = 'gave-in', TWO = 'two-changes', PART = 'wrong-part', SIGN = 'ignored-sign', SIDE = 'wrong-side', BLAME = 'blamed';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause ruled out by the printer's own test page, then two more cuts -----
    path({
      id: 'l13-w-stuck',
      blocks: [
        msg('chat', 'Galen, Accounts', 'Chat with the help desk', [['m1', 'I sent the invoice to the printer by the kitchen four times and nothing comes out. The printer’s screen says Ready.']]),
        note('The links you can list: the program Galen printed from, the print queue on her computer, the driver, her computer’s connection to the printer, the printer itself, and its paper and toner.')],
      asks: [ask('Galen prints a test page from the printer’s own screen. It comes out sharp. What does that rule out?', [
        ['The printer, its paper and its toner.', true, 'The test page starts inside the printer and uses nothing from Galen’s computer, so everything the printer prints with works.'],
        ['Galen’s print queue and driver.', LINK, 'The test page never touched them, so it says nothing about them either way.'],
        ['Nothing: a test page says little about a real job.', NOSPLIT, 'It shows the printer can print, which is a whole end of the chain.']])],
      steps: [
        { id: 'links', does: 'Write down the links of the print path before testing any.', working: 'The program, the queue, the driver, the connection from her computer, the printer, its paper and toner.' },
        { id: 'favorite', does: 'Name your favorite, and keep it as the first test, not the answer.', working: 'Out of toner: the last person to use it said the pages were faint.' },
        { id: 'panel', does: 'Run the cheapest test of the favorite: a test page from the printer’s own screen.', working: 'It comes out sharp. The printer, its paper and its toner are ruled out, and the favorite goes with them. Half the chain is gone.', ask: 'a' },
        { id: 'other', does: 'Cut what is left in half with another person.', working: 'Ruben prints the same invoice to the same printer from his computer, and it comes out. The printer and its network link are fine. Left: Galen’s program, her queue, her driver, and her own link to the printer (port, cable, address).' },
        { id: 'queue', does: 'Look at the queue, the list of jobs waiting on Galen’s computer.', working: 'Her computer shows the printer as Ready, not Offline, so her link is up. Four copies of the invoice wait. The first is marked Error, and a stuck job at the front holds back all the ones behind it.' },
        { id: 'fix', does: 'Now change one thing, and check it.', working: 'Cancel the four jobs, restart the print spooler (the Windows service that holds the queue), print once. It comes out. Then check with Galen that it works for her.' }],
      deciding: ['m1'],
      reason: 'The printer’s own test page ruled out the printer, its paper and its toner, so the favorite (toner) was wrong. Ruben’s page ruled out the printer’s network link. The queue was the link left, and it showed the stuck job. Two cheap tests cut the chain; the fix came last.' }),

    // ----- the first group: the deciding words marked -----
    path({
      id: 'l13-p-lines',
      blocks: [
        msg('chat', 'Hester, Design', 'Chat with the help desk', [['h1', 'A dark line runs down every page, in the same place. I printed a test page from the printer’s own screen and the line is on that too.']]),
        note('It is a laser printer.')],
      asks: [ask('Where does the fault sit?', [
        ['Charging: a dirty charging wire or roller, or a scratched drum.', true, 'The printer’s own test page skips the computer and has the line, so the fault is inside. A line in the same place on every page comes from the charging wire or roller, or a scratched drum.'],
        ['Fusing: the fuser is not hot enough.', LINK, 'A cool fuser leaves toner that rubs off. It does not draw a line in the same place on every page.'],
        ['The driver that the computer uses for this printer.', KEPT, 'The printer’s own test page skips the driver, and the line is on it.'],
        ['The print queue on the computer that sent the job to the printer.', KEPT, 'The printer’s own test page skips the queue, and the line is on it.']])],
      deciding: ['h1'],
      reason: 'The line is on the test page made inside the printer, so everything before the printer is cleared. A mark that repeats in the same place on every page is made by a part that touches every page: on a laser printer the charging wire or roller, or the drum; on an inkjet the printhead.' }),
    path({
      id: 'l13-p-garble',
      blocks: [
        msg('chat', 'Aiden, Sales', 'Chat with the help desk', [['i1', 'Everything I print comes out as rows of strange symbols and letters. The printer’s own test page looks normal.']]),
        note('The printer is new: the office bought it last week.')],
      asks: [ask('Which link holds the fault?', [
        ['The driver, which sends the job in the wrong language.', true, 'The printer’s own test page is clean, so the printer works. Symbols instead of text mean the printer got the job in a language it cannot read, and the driver is what chooses it.'],
        ['The print queue, with a stuck job at the front.', LINK, 'A stuck job keeps pages from coming out. It does not change their letters.'],
        ['The program’s page setup, turned to landscape.', LINK, 'Orientation turns the page. It does not change the letters.'],
        ['The USB cable that runs between the computer and the printer.', LINK, 'A bad cable shows as Offline or nothing printing, not as symbols.']])],
      deciding: ['i1'],
      reason: 'The clean test page clears the printer. Garbled print means the printer was sent the job in a language it does not read (the processing step fails). The driver translates the job, so the fix is the right driver for that printer, in the right language (PCL or PostScript).' }),
    path({
      id: 'l13-p-queue',
      blocks: [
        msg('chat', 'Ilya, Reception', 'Chat with the help desk', [['j1', 'My print jobs say Printing but nothing comes out. The printer says Ready.']]),
        table('Ilya’s print queue', ['Job', 'Status'], [['q1', 'Invoice.pdf', 'Error - Printing'], ['q2', 'Letter.docx', 'Printing'], ['q3', 'Menu.docx', 'Printing']])],
      asks: [ask('Which link holds the fault?', [
        ['The print queue, with a stuck job at the front.', true, 'The first job shows an error and the others wait behind it. Cancel the jobs and restart the print spooler.'],
        ['The driver installed on Ilya’s computer for this printer.', LINK, 'A wrong driver garbles a page that does come out. Here the jobs never leave the queue.'],
        ['Ilya’s own link to the printer: its cable or port.', LINK, 'A broken link shows the printer as Offline. Here it shows Ready, and the jobs sit in Ilya’s queue.'],
        ['The printer itself, which has stopped working.', LINK, 'The printer says Ready, and the jobs never reached it.']])],
      deciding: ['q1', 'q2', 'q3'],
      reason: 'The queue shows one job in error with two behind it, and the printer is ready and idle. The jobs are stuck before they reach the printer, so the link is the queue. The fix is to clear it and restart the print spooler.' }),
    care({
      id: 'l13-c-laser',
      blocks: [note('The copy room has a laser printer that is far past the maker’s page count for its maintenance kit. It jams more and more often.')],
      asks: [ask('What is the maintenance kit?', [
        ['The parts that wear out, such as the fuser and rollers, replaced together.', true, 'A laser printer wears out its feed rollers and its fuser (the part that heats the toner onto the page) long before the rest, so the maker sells them as one kit.'],
        ['A fresh toner cartridge and a new drum, replaced together.', CARE, 'Toner is replaced when it runs low. It is not a worn part of the paper path.'],
        ['A cleaning cloth, a small vacuum and a soft brush for cleaning the inside of the printer.', CARE, 'Cleaning is part of care, but it does not replace a roller that has worn smooth.'],
        ['The newest driver and firmware update, installed together.', CARE, 'A driver does not wear out, and it does not change how the paper is picked up.']])],
      reason: 'Jams that grow more frequent past the maker’s page count come from worn rollers. The maintenance kit replaces the parts that wear on a laser printer (the fuser and rollers; the drum is replaced separately), and the desk applies it on a schedule by page count.' }),

    // ----- the second group: no marks -----
    path({
      id: 'l13-s-twopc',
      blocks: [
        msg('chat', 'Jonah, Purchasing', 'Chat with the help desk', [['m1', 'Nothing I print comes out of the printer on the third floor.']]),
        table('What you tried', ['Test', 'Result'], [
          ['t1', 'A test page from the printer’s own screen', 'Prints fine'],
          ['t2', 'Gita prints the same file to that printer from her computer', 'Prints fine'],
          ['t3', 'Jonah prints it again from his computer', 'Nothing comes out']])],
      asks: [ask('Where does this point?', [
        ['Jonah’s computer: his program, queue, driver or link', true, 'The printer works, Gita reaches it over the same network link, and only Jonah’s computer fails.'],
        ['The printer on the third floor and its paper', KEPT, 'It printed a test page and Gita’s file.'],
        ['The printer’s own link to the network', KEPT, 'Gita’s computer reaches the printer over the same link.'],
        ['Gita’s computer, which prints differently from Jonah’s', SIDE, 'Gita’s file printed, so her side works. The one that fails is Jonah’s.']])],
      deciding: ['t1', 't2', 't3'],
      reason: 'The printer prints (its own page, and Gita’s file), so the printer, its paper and its network link are cleared. What is left is what only Jonah’s computer has: his program, his queue, his driver and his own link to the printer (port, cable, address).' }),
    path({
      id: 'l13-s-faded',
      blocks: [
        msg('chat', 'Keira, Records', 'Chat with the help desk', [['l1', 'My prints have been getting paler all week, and now they are very pale. The printer’s own test page is pale too.']]),
        note('It is a laser printer.')],
      asks: [ask('What is the cheapest next step?', [
        ['Look at the toner level, and replace the cartridge if low.', true, 'Fading on the printer’s own test page can come from developing, exposing or transferring. Toner running low (developing) is the cheapest first look, and the screen shows the level.'],
        ['Reinstall the driver on Keira’s computer and test the page again.', KEPT, 'The pale page came from the printer’s own screen, so Keira’s driver is not involved.'],
        ['Restart the print spooler on Keira’s computer.', KEPT, 'The spooler holds jobs. The pale test page never went through it.'],
        ['Take out the charging wire and the fuser and clean them.', NEAR, 'Nothing shows those parts are dirty. The screen shows the toner level in a minute, so the other parts wait.']])],
      reason: 'Fading on the test page made inside the printer is the printer’s own side. Checking the toner level costs a minute and changes nothing; the driver and the queue are cleared by the test page.' }),
    path({
      id: 'l13-s-call',
      blocks: [note('Lazar in Planning calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Lazar calls about the printer. What do you say?', form: 'call', from: 'Lazar, Planning', detail: 'Incoming call · 11:15 AM', start: 'one',
        turns: {
          one: { lines: [L('k1', 'The printer is broken. I print and nothing happens. Please send somebody to swap it.')], push: 'She wants the printer replaced before anything has been tested.',
            options: [{ id: 'swap', text: 'I will send someone to swap the printer today.', end: 'swap' },
              { id: 'testpage', text: 'Before anyone is sent, let us try one thing: a test page from the printer’s own screen. It takes a minute.', goto: 'two' },
              { id: 'reinstall', text: 'Let me reinstall the printer on your computer from here.', end: 'reinstall' }] },
          two: { lines: [L('k2', 'It printed a page that says Test Page, and it looks fine. But I still want a new printer. This is the third time this month!')], push: 'She is frustrated and still wants the swap.',
            options: [{ id: 'queue', text: 'The printer works, so a new one would not fix this. Let me have a colleague print the same job, and then we look at the waiting jobs on your computer. I will note that it keeps happening.', end: 'queue' },
              { id: 'order', text: 'Three times is too many. I will order a new printer today.', end: 'order' },
              { id: 'user', text: 'Then the fault is on your computer, so it is not a printer matter.', end: 'user' },
              { id: 'again', text: 'Try printing your file again.', end: 'again' }] }
        },
        ends: {
          queue: { ok: true, then: 'The test page came from inside the printer, so the printer, its paper and its toner work. The same job from a colleague’s computer is the next cut: it clears this computer or the printer’s network link. Noting the repeats lets someone look for the pattern.' },
          swap: { ok: false, slip: NEAR, then: 'A swap costs a day, and nothing showed the printer was the cause. A test page from its own screen would have shown whether it was.' },
          reinstall: { ok: false, slip: NEAR, then: 'That is a fix on the nearest cause. If it fails, you still do not know which side to look on.' },
          order: { ok: false, slip: GAVE, then: 'The printer just printed a clean test page. A new one would cost money and fix nothing, however many times she has called.' },
          user: { ok: false, slip: BLAME, then: 'It may be, but telling her so and stopping leaves her with nothing. Look at the waiting jobs with her.' },
          again: { ok: false, slip: NOSPLIT, then: 'The same job gives the same answer and rules nothing out.' } } }],
      reason: 'A test page from the printer’s own screen is the cheapest test that splits the printer from everything before it. It printed, so the printer is cleared and the fault is on the way. A caller who is frustrated still gets the tested answer, said kindly.' }),
    path({
      id: 'l13-s-symptoms',
      blocks: [note('A desk keeps a list of printer symptoms and the link of the print path each one sits on.')],
      asks: [ask('Which of these show a fault on the computer’s side of the path (the program, queue or driver) and not in the printer itself? Pick every one that fits.', [
        ['Rows of strange symbols on the page', true],
        ['Many jobs waiting and none printing', true],
        ['Pages from one program come out sideways', true],
        ['Small dark specks of toner on the page', LINK, 'Specks come from loose toner inside the printer.'],
        ['Toner that rubs off the page on a finger', LINK, 'That is a fuser that is too cool, inside the printer.']], { many: true })],
      reason: 'Garbled symbols are a driver problem, a waiting queue is the queue, and one program printing sideways is an orientation setting in that program or the driver. Specks and toner that rubs off are made inside the printer.' }),
    care({
      id: 'l13-c-secure',
      blocks: [msg('chat', 'Mateo, Finance', 'Chat with the help desk', [['r1', 'I print payroll on the shared printer in the hall, and the pages sit in the tray until I walk there. Anyone could pick them up.']])],
      asks: [ask('Which printer feature fixes this?', [
        ['Secured print: the job waits in the printer until she signs in there.', true, 'Nothing comes out until she is standing there to take it.'],
        ['User authentication, so only signed-in people can send jobs to the printer.', OPEN, 'That limits who can send. Once Mateo’s pages print, they still sit in the tray for anyone.'],
        ['The audit log, to record who sends each job.', OPEN, 'A log records who printed, afterward. The pages still sit in the tray for anyone.'],
        ['Duplex printing, to use half as much paper.', CARE, 'Duplex prints on both sides of the paper. It does not hold pages back.']])],
      deciding: ['r1'],
      reason: 'The trouble is that finished pages sit in the open. Secured print holds the job inside the printer and releases it when the owner signs in at it, with a PIN or a badge (a card the reader scans).' }),
    path({
      id: 'l13-s-fuser',
      blocks: [
        msg('chat', 'Noemi, Print Room', 'Chat with the help desk', [['r1', 'The pages look fine, but the black comes off on my fingers and smears when I touch it. The printer’s own test page does the same.']]),
        note('It is a laser printer, far past the maker’s page count for its maintenance kit.')],
      asks: [ask('What fixes it?', [
        ['Apply the maintenance kit, which includes a new fuser.', true, 'Toner that rubs off means the fuser is not baking it in. On a printer this far past the page count, the fuser is worn, and it comes in the kit.'],
        ['Turn the print quality down to draft in the driver on Noemi’s computer.', CARE, 'Draft quality changes how much toner goes on. It does not make the fuser bake it in.'],
        ['Reinstall the driver on Noemi’s computer.', KEPT, 'The test page from the printer’s own screen smears too, so the driver is not involved.'],
        ['Replace the toner cartridge and print again.', CARE, 'The toner reaches the page; it is the baking that fails.']])],
      deciding: ['r1'],
      reason: 'The smear is on the test page made inside the printer, and the fusing step is the one that bakes the toner in. With the page count far past the maker’s figure, the worn fuser is replaced at once through the kit: here the bigger step is the right one.' }),
    path({
      id: 'l13-s-both',
      blocks: [
        msg('chat', 'Osric, Planning', 'Chat with the help desk', [['d1', 'Nothing came out of the printer on four when I printed. I printed a test page from its own screen: it came out, but with a dark line down the middle. Windows shows my jobs stuck, the first marked Error.']]),
        note('It is a laser printer.')],
      asks: [ask('What is going on?', [
        ['Two faults: a stuck queue, and a marked drum or dirty charging wire. Fix and test one at a time.', true, 'The line is on a page made inside the printer, and the Error job is in the queue. Each shows its own fault, and the queue fault is what stopped the jobs.'],
        ['Only the printer: the line on the page is why the jobs stuck.', MISSED, 'A line on a page does not hold jobs back. The Error job in the queue is its own fault.'],
        ['Only the queue: the line on the test page can wait.', MISSED, 'The line is real and will be on every page once the queue is cleared.'],
        ['Both: clear the queue and replace the drum, then print once.', TWO, 'Two changes at once leave you not knowing which one fixed the printing.']])],
      deciding: ['d1'],
      reason: 'The tests assume one fault at a time, so two faults showing means treat them as two. The stuck job in the queue stops the printing; the line is a fault inside the printer that shows as soon as pages print. Fix one, check it, then the other.' }),

    // ----- the third group: what changed, the next test, a look-alike, and setup; lesson 5 mixed in -----
    path({
      id: 'l13-g-wifi',
      blocks: [
        msg('chat', 'Phoebe, Facilities', 'Chat with the help desk', [['m1', 'The wireless printer on two says Offline since Monday morning. Nobody on the floor can print. IT changed the office Wi-Fi password on Sunday night.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'A test page from the printer’s own screen', 'Prints fine'], ['t2', 'Three computers on two print to it', 'None can']])],
      asks: [ask('Where does the fault sit?', [
        ['The printer’s own wireless link, still on the old password.', true, 'The printer prints, three computers fail at once, and the password changed on the day it began.'],
        ['The toner and drum loaded in the printer.', KEPT, 'The test page printed, so the toner works.'],
        ['The driver installed on each of the three computers that cannot print.', LINK, 'Three drivers do not fail at once on the day the password changes. The shared link does.'],
        ['Each computer’s own cable or port to the network.', LINK, 'Three separate links do not break together on the day the password changes.']])],
      deciding: ['m1', 't1', 't2'],
      reason: 'What changed was the Wi-Fi password. The printer prints and every computer fails, so the fault is the link they share: the printer’s own wireless link, which still holds the old password.' }),
    path({
      id: 'l13-g-next',
      blocks: [
        msg('chat', 'Rafael, Sales', 'Chat with the help desk', [['b1', 'Nothing comes out when I print from my spreadsheet program.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'A test page from the printer’s own screen', 'Prints fine']])],
      asks: [ask('Which test comes next?', [
        ['A test page from Windows, in the printer’s properties.', true, 'If it prints, the queue, the driver and the connection work and the fault is the program or its settings. If it does not, the fault is the queue, the driver or the connection.'],
        ['Print the same spreadsheet again with fewer pages.', NOSPLIT, 'It uses the same program, queue, driver and connection, so it rules nothing out.'],
        ['Replace the toner cartridge and print again.', KEPT, 'The printer’s own test page just printed fine, so the toner is not the cause.'],
        ['Reinstall the spreadsheet program on the computer and print again.', NEAR, 'That is a fix on the nearest cause. If it fails, nothing is ruled out.']])],
      deciding: ['t1'],
      reason: 'The first test cleared the printer. A test page from Windows travels through the queue, the driver and the connection but skips the program, so it splits the program from everything else on the way.' }),
    path({
      id: 'l13-g-feed',
      blocks: [msg('chat', 'Sabine, Operations', 'Chat with the help desk', [['c1', 'The printer pulls two or three sheets through at once, and then it says Paper jam. It is two months old. I just opened a ream that sat in the damp storeroom.']])],
      asks: [ask('Which first fix fits?', [
        ['Fan the stack so the sheets part, and load dry paper.', true, 'Sheets that stick together in damp air get pulled in together. A two-month-old printer has no worn rollers yet.'],
        ['Apply the maintenance kit and new feed rollers.', CARE, 'The kit replaces worn parts. A printer this new has none, and the paper is the likelier cause.'],
        ['Install a new driver for this printer model.', LINK, 'A driver does not change how paper is picked up.'],
        ['Restart the print spooler and send the job again.', LINK, 'The spooler holds jobs. This fault is paper being pulled through.']])],
      deciding: ['c1'],
      reason: 'Several sheets at once is a multipage misfeed, and it sits on the paper path. On a new printer with damp paper, the paper is the cheap first fix.' }),
    path({
      id: 'l13-g-rollers',
      blocks: [
        msg('chat', 'Teodor, Mailroom', 'Chat with the help desk', [['p1', 'The mailroom printer often pulls two sheets together, or none at all. I fanned the paper and loaded a fresh ream. No change.']]),
        note('It is a laser printer, far past the maker’s page count for its maintenance kit.')],
      asks: [ask('What now?', [
        ['Apply the maintenance kit, which has new feed rollers.', true, 'The paper is already ruled out, and at this page count the rollers are worn smooth. Replacing them is the fix.'],
        ['Fan the stack again and reload it.', KEPT, 'Fanning and a fresh ream have been tried and did not help.'],
        ['Try a different brand of paper for a week.', NOSPLIT, 'A fresh ream already answered the paper question, and a week is a slow test.'],
        ['Install a new driver for this printer model.', LINK, 'A driver does not change how paper is picked up.']])],
      deciding: ['p1'],
      reason: 'Fanning and fresh paper have been tried, and the page count is far past the maker’s figure. The feed rollers are worn, and the maintenance kit replaces them. Here replacing is right, because the cheaper steps are done.' }),
    care({
      id: 'l13-c-setup',
      blocks: [note('The office of twelve people has a new laser printer. Everyone must be able to print to it, and nobody should need Clara’s computer to be switched on.')],
      asks: [ask('How should it be connected?', [
        ['On the network, so no one’s computer has to be on.', true, 'The printer is reachable from every desk. A print server is one way to hold the queue; printing to the printer’s address directly is another.'],
        ['By a USB cable to Clara’s computer, and shared from there.', SETUP, 'It prints only while Clara’s computer is on.'],
        ['By a USB cable to each person’s computer in turn.', SETUP, 'A USB cable reaches one computer at a time.'],
        ['Everyone emails the files to Clara to print.', SETUP, 'That does not give the office a printer.']])],
      reason: 'The need is a printer everyone reaches without one person’s computer being on. A network connection meets it, with a print server or direct to the printer’s address; USB reaches one computer.' }),
    care({
      id: 'l13-c-address',
      blocks: [note('After a weekend power cut, the printer says Offline on every computer. Someone fixes it by typing in the number now on the printer’s screen, which differs from last week’s. This has happened four times.')],
      asks: [ask('What is the lasting fix?', [
        ['Give the printer a fixed IP address, or have the network reserve one.', true, 'The computers send to the printer’s number. When it changes, they send to the old one and show Offline. A fixed number never changes.'],
        ['Reinstall the driver on every computer.', NEAR, 'The driver is not what changed. The printer’s number did.'],
        ['Swap the printer’s network cable for a new one.', NEAR, 'The printer answered on its screen. Nothing shows the cable is bad.'],
        ['Restart the print spooler on each computer after a power cut.', NOSPLIT, 'The spooler is fine. Restarting it hides nothing and fixes nothing here.']])],
      reason: 'A network printer that gets a new number after each power cut leaves every computer sending to the old one. Giving it a fixed IP address, or reserving one for it, removes the cause rather than correcting the symptom each time.' }),
    path({
      id: 'l13-r-frozen',
      blocks: [msg('chat', 'Valdis, Shipping', 'Chat with the help desk', [['h1', 'I canceled a stuck print job an hour ago and it still sits in the list as Deleting. Nothing else prints either.']])],
      asks: [ask('What do you do?', [
        ['Restart the print spooler and print a page.', true, 'A frozen queue is cleared by restarting the service that holds it.'],
        ['Replace the toner cartridge and print again.', LINK, 'Nothing has reached the printer, so its toner is not in question.'],
        ['Change the paper size in the print window.', LINK, 'Paper size does not unfreeze a queue.'],
        ['Order a new printer for the shipping desk.', NEAR, 'The jobs never left the computer, so nothing shows the printer is at fault.']])],
      deciding: ['h1'],
      reason: 'A job that will not delete, with everything behind it stuck, is a frozen queue. Restarting the print spooler frees it; then print one page to check.' }),
    care({
      id: 'l13-c-kind',
      blocks: [note('An inkjet printer prints white streaks across the text. The ink levels on its screen show full.')],
      asks: [ask('What is the care?', [
        ['Run the printer’s printhead cleaning.', true, 'Dried ink blocks nozzles, so the head leaves gaps even with full cartridges.'],
        ['Apply the maintenance kit from the maker.', CARE, 'That is the kit of worn parts for laser printers.'],
        ['Replace the cartridges with new ones.', CARE, 'The ink levels are full. The ink is not the problem.'],
        ['Calibrate the printer from its settings menu.', CARE, 'Calibrating lines up the heads and colors. It does not clear a blocked nozzle.']])],
      reason: 'White streaks with full ink come from clogged nozzles on the printhead. The care for an inkjet is cleaning the printhead; replacing cartridges is for when the ink runs out.' }),

    // ----- held in reserve for the weekly review -----
    path({
      id: 'l13-r-tray',
      blocks: [msg('chat', 'Willa, Shipping', 'Chat with the help desk', [['d1', 'The printer has a second paper tray with letterhead in it, but my print window does not offer it.']])],
      asks: [ask('Which link holds the fault?', [
        ['The driver’s options, or a loose tray.', true, 'A tray not recognized is checked at the printer (is it seated?) and in the printer’s properties on the computer (is the tray listed as installed?).'],
        ['The toner level of the cartridge in the printer.', LINK, 'Toner marks the page. It does not list trays.'],
        ['The print queue holding the jobs on this computer.', LINK, 'The queue holds jobs. It does not decide which trays are offered.'],
        ['The cable or wireless link to the printer.', LINK, 'Printing works, so the connection is up. The window lacks one option.']])],
      deciding: ['d1'],
      reason: 'Printing works, so the connection and the queue are fine. A tray that does not show up is a missing option on the computer, or a tray that is not seated in the printer.' }),
    path({
      id: 'l13-r-speckle',
      blocks: [
        msg('chat', 'Yorick, Legal', 'Chat with the help desk', [['e1', 'My pages have small black specks over them. The printer’s own test page has them too.']]),
        note('It is a laser printer.')],
      asks: [ask('Which link holds the fault?', [
        ['A leaking cartridge or a dirty inside.', true, 'Specks on the printer’s own page come from loose toner (the developing or cleaning step). Clean the inside and replace the cartridge if it leaks.'],
        ['The fuser, which is too cool.', LINK, 'A cool fuser makes toner rub off. It does not scatter specks.'],
        ['The driver that sends the page to the printer.', KEPT, 'The printer’s own test page skips the driver, and has the specks.'],
        ['The connection between the computer and printer.', KEPT, 'The printer’s own test page starts inside the printer.']])],
      deciding: ['e1'],
      reason: 'The specks are on the page made inside the printer, so everything before the printer is cleared. Speckling is loose toner: a leaking cartridge, or a dirty inside.' }),
    path({
      id: 'l13-r-conn',
      blocks: [
        msg('chat', 'Zora, Planning', 'Chat with the help desk', [['g1', 'Since I moved desks my printer says Offline. It is plugged in with a USB cable.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'A test page from the printer’s own screen', 'Prints fine'], ['t2', 'Zora prints from his computer', 'Printer shown as Offline']])],
      asks: [ask('Which test splits the connection from the rest?', [
        ['Try a USB cable that is known to work.', true, 'If it prints, the cable was the fault. If not, the cable is cleared; the port is next (try another port), then the driver.'],
        ['Replace the toner cartridge in the printer.', KEPT, 'The printer’s own test page printed, so the toner works.'],
        ['Reinstall Windows on Zora’s computer.', NEAR, 'That is a very large fix on one cause, and it is not shown to be the right one.'],
        ['Press Print once more and wait a minute.', NOSPLIT, 'The same try gives the same answer and rules nothing out.']])],
      deciding: ['t1', 't2'],
      reason: 'The printer works and the computer shows it Offline, so the fault is between them. A cable known to work, put where the doubtful one was, clears or convicts the cable only. If it still fails, the port is the next single change, then the driver.' }),
    path({
      id: 'l13-r-finisher',
      blocks: [
        msg('chat', 'Adela, Legal', 'Chat with the help desk', [['u1', 'The big copier prints my reports fine, but every time I ask for stapled sets it stops with a staple jam.']]),
        table('What you tried', ['Test', 'Result'], [['t1', 'A test page from the printer’s own screen', 'Prints fine'], ['t2', 'The same report, stapling turned off', 'Prints fine']])],
      asks: [ask('Where does the fault sit?', [
        ['The finisher: clear the jammed staple and check the staple cartridge.', true, 'Printing works with stapling off, so only the add-on that staples is at fault.'],
        ['The fuser, which is too cool for the paper.', LINK, 'A cool fuser makes toner rub off. It does not jam staples.'],
        ['The driver, which sends the job in the wrong language.', KEPT, 'Reports print fine without stapling, so the language is understood.'],
        ['The print queue, with a stuck job at the front.', KEPT, 'Jobs leave the queue and print. Only the stapled ones stop.']])],
      deciding: ['t1', 't2'],
      reason: 'Everything works until the staple is asked for, so the fault is the finisher, the add-on that staples or punches. Clear the jam and look at the staple cartridge.' }),
    path({
      id: 'l13-r-inkfeed',
      blocks: [msg('chat', 'Cosmo, Home Office', 'Chat with the help desk', [['w1', 'My inkjet will not pick up paper any more. The rollers look shiny and gray with dust, and the paper just slides. The ink is full.']])],
      asks: [ask('What is the care?', [
        ['Clean the feed rollers, and replace them if they still slip.', true, 'Dust makes the rollers slip on the paper. Cleaning is the cheap step; worn ones are replaced.'],
        ['Run the printhead cleaning from the settings menu.', CARE, 'That clears blocked nozzles. The paper never gets as far as the head.'],
        ['Replace the ink cartridges with new ones.', CARE, 'The ink is full, and ink does not pull the paper.'],
        ['Calibrate the printer from its settings menu.', CARE, 'Calibrating lines up heads and colors. It does not pick up paper.']])],
      reason: 'Paper that is not pulled in, with rollers shiny with dust, is a feed problem on the paper path. The inkjet care for it is cleaning the rollers (the feeder), then replacing them if they still slip.' }),
    path({
      id: 'l13-r-speckdrum',
      blocks: [
        msg('chat', 'Dinah, Design', 'Chat with the help desk', [['t1', 'The text on every page has a faint ghost of the previous page behind it, and the black rubs off on my fingers. The printer’s own test page does the same. Nothing was changed.']]),
        note('It is a laser printer, far past the maker’s page count for its maintenance kit.')],
      asks: [ask('What is the most likely fix?', [
        ['Apply the maintenance kit, since its fuser is worn.', true, 'Toner that rubs off points at the fuser, and the page count is far past the maker’s. The kit has the fuser.'],
        ['Reinstall the driver on Dinah’s computer.', KEPT, 'The printer’s own test page has the ghost too, so the computer is cleared.'],
        ['Clear the print queue and restart the spooler.', KEPT, 'The test page from the printer’s screen skips the queue.'],
        ['Print a test page from Windows to compare.', NOSPLIT, 'The printer’s own page already has the ghost, so a second page tells nothing new.']])],
      deciding: ['t1'],
      reason: 'The ghost is on the page made inside the printer. An echo alone could be the drum or the fuser, but toner that rubs off is the fuser’s sign, and the fuser comes in the maintenance kit.' }),
    care({
      id: 'l13-c-impact',
      blocks: [note('A clerk prints three-part carbon-copy invoices on a dot matrix printer. The top copy is dark, but the third copy is very faint.')],
      asks: [ask('What do you do first?', [
        ['Replace the ribbon and check the printhead.', true, 'An impact printer strikes a ribbon through the layers. A worn ribbon gives weak marks, and the third layer shows it first.'],
        ['Replace the toner cartridge and the drum.', CARE, 'An impact printer has no toner. It prints with a ribbon.'],
        ['Clean the heating element with a soft cloth.', CARE, 'That is a thermal printer’s care.'],
        ['Clean the inkjet nozzles with the cleaning tool.', CARE, 'An impact printer has no nozzles. Pins strike the ribbon.']])],
      reason: 'An impact printer is the kind that prints multipart forms, by striking pins through a ribbon. Faint lower copies mean the strike is weak: a worn ribbon first, then the printhead.' }),
    care({
      id: 'l13-c-scan',
      blocks: [note('Reception wants to scan paper contracts and have them land in a shared folder on the office file server, with no email involved.')],
      asks: [ask('Which network scan destination fits?', [
        ['Scan to a shared folder, over SMB.', true, 'The printer saves the file straight into the shared folder.'],
        ['Scan to email, to each person’s inbox.', CARE, 'That sends a message. They want a file in a folder.'],
        ['Scan to a cloud account on the internet.', CARE, 'That puts the file outside the office file server.'],
        ['Scan to a USB stick in the printer.', CARE, 'That puts the file on a stick, not on the file server.']])],
      reason: 'Scanning into a shared folder on the file server is the SMB destination.' }),
    care({
      id: 'l13-c-flatbed',
      blocks: [note('One contract is a single 100-year-old page, torn at the edge, to be scanned.')],
      asks: [ask('Which part of the scanner takes it?', [
        ['The flatbed glass, laid flat.', true, 'The glass holds a fragile page flat and pulls nothing through.'],
        ['The automatic document feeder.', CARE, 'The feeder pulls pages through rollers and would tear it.'],
        ['The feeder with the two-sided scan turned on.', CARE, 'Two-sided scanning still pulls the page through rollers.'],
        ['Either one, since they work the same way.', CARE, 'They do not: one pulls paper through, the other holds it still.']])],
      reason: 'A fragile single page goes on the flatbed glass, which holds it still; the automatic document feeder pulls pages through rollers.' }),
    care({
      id: 'l13-c-duplexscan',
      blocks: [note('Legal has a stack of 40 loose sheets, printed on both sides, to scan into one file. Nobody wants to stand there turning sheets.')],
      asks: [ask('Which way gets all 80 sides scanned?', [
        ['The automatic document feeder, with two-sided scan turned on.', true, 'The feeder takes the stack, and two-sided scanning reads both sides of each sheet in one pass.'],
        ['The automatic document feeder, one-sided.', CARE, 'It would read only the front of each sheet.'],
        ['The flatbed glass, one sheet at a time.', CARE, 'Someone would have to stand and turn 40 sheets.'],
        ['The flatbed glass with the lid open, two sheets at a time.', CARE, 'The glass takes one page at a time, face down.']])],
      reason: 'A stack of loose sheets goes in the automatic document feeder. Its two-sided scan reads both sides, so no one turns the sheets.' }),
    care({
      id: 'l13-c-cloud',
      blocks: [note('Staff who work from home need scans from the office printer to arrive in their own online storage, not on the office file server.')],
      asks: [ask('Which scan destination fits?', [
        ['Scan to the cloud, to each person’s storage account.', true, 'The cloud destination saves the file in online storage the person can reach from anywhere.'],
        ['Scan to a shared folder over SMB on the office file server.', CARE, 'That keeps the file in the office, where staff at home may not reach it.'],
        ['Scan to email for the office manager to forward.', CARE, 'It works, but it sends a message through one person and does not put the file in their storage.'],
        ['Scan to the printer’s own memory, to pick up later.', CARE, 'It leaves the file in the printer, not in anyone’s storage.']])],
      reason: 'Scan to cloud sends the file to online storage tied to the person. SMB is a shared folder inside the office; email sends a message.' }),
    care({
      id: 'l13-c-driver',
      blocks: [note('The office prints Word documents and spreadsheets on a laser printer that can read two printer languages, PCL and PostScript. The designers print page layouts where fonts and graphics must look exactly as they do on screen.')],
      asks: [ask('Which fits best?', [
        ['PCL for documents, PostScript for the designers.', true, 'PCL (made by HP) is the usual choice for everyday office printing. PostScript (made by Adobe) is used where exact fonts and graphics matter.'],
        ['PostScript for documents, PCL for the designers.', SETUP, 'That reverses them: PostScript is the one used where exact layout matters.'],
        ['PostScript for everyone, since it is newer.', SETUP, 'It is not about age. Each language has a job; PCL is the everyday one.'],
        ['Either one, since the printer decides by itself.', SETUP, 'The driver on each computer chooses the language, so installing the wrong one gives garbled print.']])],
      reason: 'PCL and PostScript are the two printer languages the exam names. The driver picks one, so the choice is made when the driver is installed: PCL for ordinary office work, PostScript for exact layout and graphics.' }),
    care({
      id: 'l13-c-badge',
      blocks: [note('A law firm wants staff to sign in at the printer by tapping their ID card, with no password to type.')],
      asks: [ask('Which security setting is that?', [
        ['Badging, signing in by scanning a card.', true, 'Badging is signing in at the printer by scanning a card.'],
        ['Secured print, holding the job until a PIN.', OPEN, 'That holds a job until its owner signs in; it is about when pages come out, not how people sign in.'],
        ['The audit log, listing who printed.', OPEN, 'A log records afterward. It does not sign anyone in.'],
        ['Duplex, to print on both sides.', CARE, 'Duplex is a print default, not a sign-in.']])],
      reason: 'Signing in at the printer by scanning a card is badging. Secured print is the hold on a job, and the audit log is the record kept afterward.' }),
    care({
      id: 'l13-c-place',
      blocks: [note('A new office laser printer arrives in its box. It is heavy and gives off heat. The office has a spare table by the network socket, a shelf above a desk, and a cupboard.')],
      asks: [ask('Where should it go, and what comes first?', [
        ['On the sturdy table by the socket, with room around it, after taking off all packing tape.', true, 'It needs a stable surface, the network socket, and room for paper and air. The shipping tape and foam come off before it is switched on.'],
        ['In the cupboard with the door shut, to keep it quiet.', SETUP, 'A printer needs air around it, and the paper trays need room.'],
        ['On the shelf above the desk, tape left on until it jams.', SETUP, 'The shelf is not stable for something heavy, and the tape has to come off.'],
        ['On the floor behind the door, out of the way.', SETUP, 'The floor puts it out of reach and gets paper dust and knocks.']])],
      reason: 'A new printer goes on a stable surface near a socket and the network, with room for paper and airflow. Packing tape comes off before it is switched on.' }),
    care({
      id: 'l13-c-firmware',
      blocks: [msg('chat', 'Ayo, Operations', 'Chat with the help desk', [['a1', 'The new printer prints fine, but the scan-to-folder button gives an error. The maker’s support page says a firmware update fixes it.']])],
      asks: [ask('What do you update?', [
        ['The printer’s firmware, from the maker’s page.', true, 'Firmware is the printer’s built-in software, and the maker’s page says the update fixes this.'],
        ['The driver on each computer.', PART, 'A driver is for printing from a computer. The scan button runs on the printer.'],
        ['Windows on every computer.', PART, 'Nothing points to Windows; the fault is in the printer’s scan feature.'],
        ['The cartridge, with a new one.', PART, 'A cartridge does not run the scan feature.']])],
      reason: 'The scan feature runs on the printer, so the fix is the printer’s own software, its firmware, from the maker.' }),
    care({
      id: 'l13-c-duplex',
      blocks: [note('Accounts wants every report to print on both sides of the paper by default.')],
      asks: [ask('Which setting puts a report on both sides of the sheet?', [
        ['Duplex.', true, 'Duplex prints on both sides.'],
        ['Orientation.', CARE, 'Orientation turns the page upright or sideways.'],
        ['Tray.', CARE, 'The tray picks which paper to use.'],
        ['Quality.', CARE, 'Quality decides how dark and fine the print is.']])],
      reason: 'Duplex prints both sides. The defaults are chosen once on the printer so every job starts with them.' }),
    care({
      id: 'l13-c-draft',
      blocks: [note('Accounts wants proofs to use less toner.')],
      asks: [ask('Which setting makes a proof use less toner?', [
        ['Draft quality.', true, 'Draft quality lays down less toner.'],
        ['Duplex.', CARE, 'Duplex saves paper, not toner.'],
        ['Tray.', CARE, 'The tray picks which paper to use.'],
        ['Orientation.', CARE, 'Orientation turns the page.']])],
      reason: 'Draft quality lays down less toner. The defaults are chosen once on the printer so every job starts with them.' }),
    care({
      id: 'l13-c-msds',
      blocks: [note('A technician has swapped the toner cartridge and holds the empty one. The bin by the printer is the ordinary rubbish.')],
      asks: [ask('Where does she find how to dispose of the used toner?', [
        ['In its safety data sheet (called MSDS on the exam).', true, 'Used toner is not household waste, and the safety data sheet says how to dispose of it.'],
        ['In the printer’s audit log.', CARE, 'The audit log records who printed what, not how to dispose of toner.'],
        ['In the driver’s settings on the computer.', CARE, 'The driver turns jobs into the printer’s language. It holds nothing about disposal.'],
        ['Nowhere: it goes in the ordinary rubbish.', CARE, 'Used toner is not household waste.']])],
      reason: 'The safety data sheet for the toner says how to dispose of it. The ordinary rubbish is not the answer.' })
  ]);
})();
