// IT Help Desk, lesson 13 "Printers": the six new tickets of the check (four on the print path, two on setup, security and care). Research:
// docs/research/it-support-aplus.md Core 1 3.7, 3.8, 5.6. Same helpers and conventions as items-l13.js. Laser faults are named by their step of the seven.
(() => {
  const S = 'print-path', C = 'print-care';
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const NEAR = 'poked-nearest', LINK = 'wrong-link', CARE = 'wrong-care', OPEN = 'open-print', KEPT = 'kept-ruled-out', SIGN = 'ignored-sign';

  FC.items('it-support', [
    { strand: S, facets: {}, id: 'l13-k-blank',
      blocks: [
        msg('chat', 'Pri, Legal', 'Chat with the help desk', [['p1', 'Pages come out of the printer completely blank. The printer’s own test page is blank too.']]),
        note('It is a laser printer, and the cartridge was changed this morning.')],
      asks: [ask('Where does the fault sit?', [
        ['Developing: the cartridge is empty, or its sealing tape is still on.', true, 'The blank page is made inside the printer, so everything before it is cleared. With no toner reaching the drum, the page stays blank, and the cartridge was just changed.'],
        ['Fusing: the fuser is too cool to bake the toner in.', LINK, 'A cool fuser leaves toner on the page that rubs off. A blank page has none.'],
        ['The driver that the computer uses to print.', KEPT, 'The printer’s own test page skips the driver, and it is blank.'],
        ['The print queue holding the waiting jobs.', KEPT, 'The printer’s own test page skips the queue.']])],
      deciding: ['p1'],
      reason: 'The blank test page is made inside the printer, so the program, queue, driver and connection are cleared. In the developing step toner sticks to the drum; with an empty cartridge or the sealing tape still on, none does, and the cartridge is what changed this morning.' },
    { strand: S, facets: {}, id: 'l13-k-app',
      blocks: [msg('chat', 'Dalia, Marketing', 'Chat with the help desk', [['s1', 'Reports from our design program come out sideways. Everything I print from other programs is upright.']])],
      asks: [ask('Which link holds the fault?', [
        ['The orientation in that program’s print window.', true, 'Other programs print upright through the same queue, driver and printer, so the difference is in this program’s settings.'],
        ['The connection from that computer to the printer.', LINK, 'Other programs print through the same connection.'],
        ['The driver installed for the whole printer.', KEPT, 'Other programs print upright through the same driver.'],
        ['The toner level in the printer’s cartridge.', LINK, 'Toner does not change which way a page is turned.']])],
      deciding: ['s1'],
      reason: 'Only one program prints sideways, so the printer, the driver and the connection are cleared. Orientation (portrait or landscape) is chosen in the program’s print window or its page setup.' },
    { strand: S, facets: {}, id: 'l13-k-grind',
      blocks: [msg('chat', 'Ennis, Warehouse', 'Chat with the help desk', [['e1', 'The printer makes a loud grinding noise when it pulls the paper in, and then it stops. Nothing comes out.']])],
      asks: [ask('What do you do first?', [
        ['Switch it off, then look for caught paper.', true, 'Grinding in the paper path is usually paper caught or a worn gear. Switch off first, so a roller cannot turn while hands are inside.'],
        ['Keep printing for a while to see if it stops.', SIGN, 'Running it on can strip a gear or tear the paper into the rollers.'],
        ['Reinstall the driver and print a test page.', NEAR, 'A driver does not make a noise inside the printer.'],
        ['Replace the toner cartridge and try again.', NEAR, 'Toner does not drive the rollers.']])],
      deciding: ['e1'],
      reason: 'A grinding noise as paper is pulled in sits on the paper path inside the printer. Stop the machine and look for a jam before anything else; worn gears or rollers come after.' },
    { strand: S, facets: {}, id: 'l13-k-echo',
      blocks: [
        msg('chat', 'Farah, Billing', 'Chat with the help desk', [['f1', 'A faint copy of the text sits just below the real text on every page. It does this on the printer’s own test page too.']]),
        note('It is a laser printer.')],
      asks: [ask('Where does the fault sit?', [
        ['Cleaning or fusing: leftover toner stays on the drum, or the fuser is worn.', true, 'A faint copy of the last page is toner left on the drum after the cleaning step, or a worn fuser that did not take it all. Both sit inside the printer.'],
        ['Developing: the cartridge is nearly out of toner.', LINK, 'Low toner makes pages faint. It does not copy the last page onto this one.'],
        ['The driver that the computer uses to print.', KEPT, 'The printer’s own test page skips the driver, and has the echo.'],
        ['The print queue of jobs waiting to print.', KEPT, 'The printer’s own test page skips the queue.']])],
      deciding: ['f1'],
      reason: 'The echo is on the page made inside the printer, so the fault is in the printer. A double or echo image on a laser printer comes from the cleaning step not wiping the drum, or a worn fuser; the table of the seven steps lists echo images under both. The fuser is in the maintenance kit; the drum is replaced separately.' },
    { strand: C, facets: {}, id: 'l13-k-thermal',
      blocks: [note('The shop’s receipt printer prints pale stripes. It has no ink and no toner. It uses a roll of special paper.')],
      asks: [ask('What is the care?', [
        ['Clean the heating element and any debris.', true, 'A thermal printer marks heat-sensitive paper with a heating element. Dust or glue on the element leaves pale stripes.'],
        ['Replace the ink cartridge and clean the head.', CARE, 'A thermal printer uses no ink.'],
        ['Replace the ribbon and check the printhead.', CARE, 'That is an impact printer’s care.'],
        ['Apply the maintenance kit and calibrate it.', CARE, 'That is the kit of worn parts for laser printers.']])],
      reason: 'No ink and no toner, and special paper: this is a thermal printer. Its care is a clean heating element, free of debris, and the right paper.' },
    { strand: C, facets: {}, id: 'l13-k-audit',
      blocks: [msg('chat', 'Hollis, Finance manager', 'Chat with the help desk', [['m1', 'Who printed 400 pages of the staff salary list last Friday afternoon? The desk lead has approved this lookup.']])],
      asks: [ask('Which printer feature answers this?', [
        ['The audit log kept by the printer.', true, 'It keeps a line for each job with the name of the person who sent it.'],
        ['Secured print, with a PIN at the printer.', OPEN, 'It holds a job until its owner signs in. It does not by itself tell you afterward who printed.'],
        ['Duplex printing, on both sides of the paper.', CARE, 'Duplex prints on both sides of the paper.'],
        ['The printer’s page counter.', CARE, 'It counts total pages. It does not record who printed them.']])],
      deciding: ['m1'],
      reason: 'The question is about what already happened. Audit logs record who printed what, and when; secured print and sign-in at the printer limit what happens next.' }
  ]);
})();
