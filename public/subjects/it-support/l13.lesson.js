// IT Help Desk, lesson 13: Printers (part printers). The print path as a chain of what each part does: program, print queue, driver, the connection from this
// computer, the printer, paper path and toner or ink; inside a laser printer the seven steps of its imaging process, each print defect on its step; each printer
// symptom of the first A+ exam on its link with the cheapest test that splits the chain; setup, security and care by kind of printer. Research:
// docs/research/it-support-aplus.md Core 1 3.7, 3.8, 5.6 and Core 2 4.5 (toner disposal); docs/research/it-support.md IT4, IT5 (one chain, what each part does for
// the whole), IT8 (cut the problem space by checking connections; unskilled ones poke at devices). Plan: lesson 13. Rulings: rulings-l1-8.md 8, 9, 10;
// rulings-l9-13.md 2, 3, 5, 6, 7. One worked ticket; a first group of four with the deciding words marked; a second of seven; a third of eight that mixes in
// lesson 5; the seven steps are a teaching model that follows the A+ study guides (Professor Messer, laser printers; Microsoft Press, A+ Rapid Review: Printers), which agree on the order, and their defect lists are kept to the points the guides share; the check: six new tickets and questions with no help, 5 of 6 to pass.
FC.lesson('it-support', {
  id: 'l13', part: 'printers', title: 'Printers', rev: 2, status: "live",
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the print path as a chain; each printer symptom on its link with the test that splits it; setup, security and care by kind of printer).' }, { rev: 2, date: "2026-10-23", change: "Names made unique across the subject and people called by name or they; wording kept to the plain-words list." }],
  why: [
    'Galen in Accounts has sent an invoice to the printer by the kitchen four times, and nothing comes out. The printer’s screen says Ready. Between their program and the paper sit a queue, a driver, a link to the printer, the printer, and its paper and toner.',
    'A new technician reinstalls something. A good one prints a test page from the printer’s own screen, and half the chain is cleared in a minute. Here you learn the print path, the seven steps inside a laser printer, and how each kind of printer is put in and looked after.'],
  flow: [
    { title: 'The print path',
      show: [{ kind: 'prose', text: [
        'A print job passes through these links, in order. The driver is software that turns the job into the printer’s own language, PCL (from HP) or PostScript (from Adobe). The print spooler is the Windows service that holds the queue of waiting jobs.'] },
      { kind: 'document', form: 'table', title: 'The print path', head: ['Link', 'What it does', 'When it fails'], rows: [
        { id: 'r1', cells: ['The program', 'Where you press Print and choose pages and orientation (upright or sideways)', 'Only one program fails; pages come out sideways'] },
        { id: 'r2', cells: ['The print queue', 'The list of waiting jobs, kept by the print spooler', 'Jobs pile up; a stuck job at the front holds back the rest'] },
        { id: 'r3', cells: ['The driver', 'Turns the job into PCL or PostScript', 'Rows of strange symbols'] },
        { id: 'r4', cells: ['The connection from this computer', 'Its USB port, network cable or wireless, and the address it sends to: the printer’s IP address (its number on the network). A print server, one machine that holds the queue for many people, may sit between', 'Offline on this computer only; began when a cable, port or address changed'] },
        { id: 'r5', cells: ['The printer', 'Its own network link, its screen, and the parts that mark the page', 'Offline on every computer; an error on its screen; its test page fails'] },
        { id: 'r6', cells: ['Paper path, toner or ink', 'Rollers pull the paper; toner or ink marks it', 'Jams, faded pages, lines, specks, echoes, grinding'] }] }] },
    { title: 'Cut the path with a test page',
      show: [{ kind: 'prose', text: ['Run the cheapest test that cuts the causes in half. On a printer that is a test page, and where it starts decides what it tests. These tests assume one fault at a time; if two show up, fix them one at a time.'] },
      { kind: 'document', form: 'table', title: 'Three cheap tests on the print path', head: ['Test', 'It skips', 'One result points to'], rows: [
        { id: 't1', cells: ['A test page from the printer’s own screen', 'This computer, its link to the printer, and the network', 'It prints well: look earlier. It fails: the printer, paper or toner.'] },
        { id: 't2', cells: ['A test page from Windows (the printer’s properties)', 'The program', 'It prints: the program. It does not: queue, driver, connection or printer.'] },
        { id: 't3', cells: ['The same job from another person’s computer', 'This computer’s program, queue, driver and own link to the printer', 'It prints: this computer’s side. It fails too: the printer or its network link.'] }] }] },
    { title: 'Inside a laser printer',
      show: [{ kind: 'prose', text: [
        'Toner is the fine powder a laser printer uses. The drum is a roller that holds the page as a pattern of electric charge. The fuser is the hot roller that bakes the toner on. Every page takes seven steps, and each defect comes from one of them.'] },
      { kind: 'document', form: 'table', title: 'The seven steps of a laser printer', head: ['Step', 'What happens', 'When it fails'], rows: [
        { id: 'p1', cells: ['1 Processing', 'The printer reads the job and builds the page as a picture of dots', 'Rows of strange symbols, when it cannot read the language the driver sent'] },
        { id: 'p2', cells: ['2 Charging', 'A wire or roller gives the drum an even electric charge', 'Lines down the pages: a dirty charging wire or roller, or a scratched drum'] },
        { id: 'p3', cells: ['3 Exposing', 'A laser draws the page on the drum, wiping away the charge where it is dark', 'Pale or blurred print from a weak laser'] },
        { id: 'p4', cells: ['4 Developing', 'Toner sticks to the drum where the laser drew', 'Faded prints when toner runs low; blank pages when the cartridge is empty or its sealing tape is on; specks from loose toner'] },
        { id: 'p5', cells: ['5 Transferring', 'The paper is charged and pulls the toner off the drum', 'Pale or half-printed pages, when the toner stays on the drum'] },
        { id: 'p6', cells: ['6 Fusing', 'The hot fuser bakes the toner into the paper', 'Toner that rubs off or smears, when the fuser is too cool or worn; echo images (a faint copy of the last page), when the drum or fuser is worn'] },
        { id: 'p7', cells: ['7 Cleaning', 'A blade wipes leftover toner off the drum, and a lamp erases its charge', 'Echo images, when the drum or the cleaning blade is worn or dirty; dark marks'] }] }] },
    { title: 'Every other symptom',
      show: [{ kind: 'prose', text: ['An inkjet sprays ink from the nozzles of its printhead. A finisher is the add-on that staples or punches holes.'] },
      { kind: 'document', form: 'table', title: 'More symptoms inside the printer', head: ['Symptom', 'Likely cause and first fix'], rows: [
        { id: 's1', cells: ['Lines or white streaks in the text (inkjet)', 'Clogged printhead. Run the printhead cleaning.'] },
        { id: 's5', cells: ['Grinding noise', 'Paper caught, or a worn gear or roller. Switch off and look for a jam.'] },
        { id: 's6', cells: ['Paper jams', 'Wrong, damp or overfilled paper first; then worn rollers.'] },
        { id: 's7', cells: ['Paper not feeding; several sheets at once (multipage misfeed)', 'Damp or stuck paper, or worn rollers. Fan the stack and reload.'] },
        { id: 's8', cells: ['Staple jams, hole punch trouble', 'The finisher. Clear it.'] }] },
      { kind: 'document', form: 'table', title: 'On the computer’s side (the printer’s own test page is fine)', head: ['Symptom', 'Likely cause and first fix'], rows: [
        { id: 'c1', cells: ['Garbled print', 'The wrong driver, so the wrong language. Install the right one.'] },
        { id: 'c2', cells: ['Many jobs pending, frozen queue', 'A stuck job. Cancel the jobs and restart the print spooler.'] },
        { id: 'c3', cells: ['Incorrect page orientation', 'The setting in the program or the driver.'] },
        { id: 'c4', cells: ['Tray not recognized', 'Tray not pushed in, or not listed as installed in the printer’s properties.'] },
        { id: 'c5', cells: ['Connectivity issues (Offline)', 'Cable, port, wireless, a changed address or the print server. Try a cable known to work.'] }] }] },
    { title: 'Whatever is nearest',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“It is a printer ticket, so I will replace the toner. If that fails, I will reinstall the driver, then the printer, then Windows.”',
        'None of those tells you whether you are on the right link. A test page from the printer’s own screen takes a minute and cuts the chain in half. Cut first, then fix only what is left.'] }] },
    { title: 'Putting a printer in, and securing it',
      show: [{ kind: 'prose', text: [
        'Unbox it, take off all the packing tape, and stand it on a stable surface near a socket and the network, with room for paper and air. Install the right driver (PCL for everyday office work, PostScript for exact layout and graphics) and update its firmware, the built-in software. Connect it by USB (one computer), network cable or wireless. A network printer needs an address that never changes: give it a fixed IP address, or have the network reserve one. To share it, use a printer share on a computer that stays on, or a print server. Then choose the defaults: duplex (both sides), orientation, tray and quality (draft saves toner).',
        'A multifunction printer also scans: to email, to a shared folder (SMB, the way Windows shares folders) or to the cloud (online storage). Loose sheets go through the automatic document feeder, which can scan both sides; a book, a stapled booklet or a fragile page goes on the flatbed glass.'] },
      { kind: 'document', form: 'table', title: 'Printer security', head: ['Setting', 'What it does'], rows: [
        { id: 'u1', cells: ['User authentication', 'Only people who sign in can print'] },
        { id: 'u2', cells: ['Badging', 'Signing in by scanning a card at the printer'] },
        { id: 'u3', cells: ['Secured print', 'A job waits inside the printer until its owner signs in with a PIN or badge'] },
        { id: 'u4', cells: ['Audit logs', 'A record of who printed what and when, read afterward'] }] }] },
    { title: 'Care by kind of printer',
      show: [{ kind: 'document', form: 'table', title: 'Care by kind of printer', head: ['Kind', 'How it marks', 'Care'], rows: [
        { id: 'k1', cells: ['Laser', 'Toner baked on by a hot fuser', 'Replace toner; apply the maintenance kit (the worn parts, such as the fuser and rollers, replaced together at the maker’s page count; the drum is separate); the kit is scheduled maintenance by page count, not a test, so it replaces several parts on purpose; calibrate (adjust so colors and lines match up); clean the inside'] },
        { id: 'k2', cells: ['Inkjet', 'Ink sprayed from a printhead', 'Replace cartridges; clean the printheads; clean the feed rollers; calibrate (line up the heads); clear jams'] },
        { id: 'k3', cells: ['Thermal', 'A heating element darkens special paper (receipts, labels); no ink or toner', 'Replace the paper; clean the heating element; remove debris'] },
        { id: 'k4', cells: ['Impact (dot matrix)', 'Pins strike an inked ribbon; the only kind that prints multipart carbon-copy forms', 'Replace the ribbon, printhead and paper'] }] },
      { kind: 'prose', text: ['Used toner is not household waste: its safety data sheet (called MSDS on the exam) says how to dispose of it.'] }] },
    { worked: 'l13-w-stuck' },
    { set: { items: ['l13-p-lines', 'l13-p-garble', 'l13-p-queue', 'l13-c-laser'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l13-s-twopc', 'l13-s-faded', 'l13-s-call', 'l13-s-symptoms', 'l13-c-secure', 'l13-s-fuser', 'l13-s-both'], order: 'shuffle' } },
    { set: { items: ['l13-g-wifi', 'l13-g-next', 'l13-g-feed', 'l13-g-rollers', 'l13-r-frozen', 'l13-c-kind', 'l13-r-finisher'], order: 'shuffle', mix: { from: ['l5'], share: 0.3 } } },
    { set: { items: ['l13-c-setup', 'l13-c-address', 'l13-c-place', 'l13-c-firmware', 'l13-c-duplex', 'l13-c-draft', 'l13-c-scan', 'l13-c-flatbed', 'l13-c-msds', 'l13-c-badge'], order: 'shuffle' } }
  ],
  check: {
    items: ['l13-k-blank', 'l13-k-app', 'l13-k-grind', 'l13-k-echo', 'l13-k-thermal', 'l13-k-audit'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 5 } }]
  }
});
