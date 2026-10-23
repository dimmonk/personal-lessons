// IT Help Desk, lesson 29 "The whole ticket, and the mock exam": three reserve tickets for the weekly review (strand whole), the same form as the ten in items-l29.js. Invented people and addresses.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const W = 'whole';
  const chat = (id, from, text, prompt, rows, reason) => item({ id, strand: W,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const PART = 'part-first', NOSPLIT = 'no-split', LINK = 'wrong-link', WIPE = 'wipe-first', WIPED = 'wiped-data', NOBACK = 'no-backup', EVID = 'touched-evidence', TRUSTW = 'trusted-warning',
    TOOMUCH = 'too-much-access', LOCAL = 'local-fix', BLIND = 'blind-edit', APPR = 'skipped-approval', ARGUED = 'argued', BRUSH = 'brushed-off', GUESS = 'guessed-cause',
    EARLY = 'closed-early', KEPT = 'kept-connected', MISREAD = 'misread-output', FIXED = 'fixed-first', WCAUSE = 'wrong-cause', WCHG = 'wrong-change-type';

  FC.items('it-support', [
    chat('l29-r-renew', 'Ola, Reception', 'You fixed my Wi-Fi by running a renew command a minute ago. I have a visitor waiting, so just close the ticket.',
      'What is the next move?', [
        ['Have her open the failed page, and close the ticket once it loads', true, 'The fix counts when she has checked it works for her, and the ticket says what happens next.'],
        ['Close the ticket now, since the command ran without any error', EARLY, 'A command that ran is not proof she can work. She confirms, then it closes.'],
        ['Leave it open and call her again tomorrow morning to check', BRUSH, 'She is ready to check now, and a visitor is waiting. Waiting a day does not help her.'],
        ['Run the same command again on her laptop to be safe', FIXED, 'It repeats a change that already worked and still leaves her unasked.']],
      'The user checks that the fix works for them before the ticket is closed.'),
    item({
      id: 'l29-r-dns', strand: W,
      blocks: [
        msg('chat', 'Pia, Design', 'Chat with the help desk', [['m1', 'My Wi-Fi says Connected but no website opens. Our shared drive by number still works. This is what the commands show.']]),
        table('C:\\> ping 192.168.1.1 and ping 203.0.113.50', ['What the computer prints'], [['p1', 'Reply from 192.168.1.1: bytes=32 time=2ms TTL=64'], ['p2', 'Reply from 203.0.113.50: bytes=32 time=18ms TTL=57'], ['p3', 'C:\\> ping www.example.com'], ['p4', 'Ping request could not find host www.example.com. Please check the name and try again.']])],
      asks: [ask('What is the next move?', [
        ['Check the DNS server setting, and test a lookup with nslookup', true, 'The gateway and an outside address both answer by number. Only the name fails, so the name lookup link is the one to test.'],
        ['Replace the Ethernet cable at her desk, in case it is worn', PART, 'She is on Wi-Fi, and both pings by number came back. The link works.'],
        ['Run ipconfig /renew to get a new address from the router', LINK, 'Her address and gateway work, as the two replies show. The address link is not the fault.'],
        ['Restart the router in the supply room and try the sites again', NOSPLIT, 'The router replied. A restart would not tell the name lookup from anything else.']])],
      deciding: ['m1', 'p2', 'p4'],
      reason: 'Pings by number work and the ping by name fails, so the fault sits on the name lookup link.' }),
    chat('l29-r-ads', 'Hal, Estimating', 'My browser home page changed by itself, and pop-ups with ads keep opening. The PC has also slowed down a lot since yesterday.',
      'What is the next move?', [
        ['Take it off the network, then follow the malware removal steps', true, 'These are malware signs. Quarantine comes before scanning, so nothing spreads or sends data out.'],
        ['Run a full scan while it stays connected, so definitions update first', KEPT, 'Staying connected lets the malware keep spreading or sending data while the scan runs.'],
        ['Click the pop-up close buttons until the ads stop coming', TRUSTW, 'Clicking inside a pop-up can install more. The pop-ups are the symptom, not the fix.'],
        ['Reset the browser settings and close the ticket once it looks fine', EARLY, 'The settings may come back, and nobody has found what changed them or told the user what happens next.']],
      'Malware signs call for quarantine first: the PC is taken off the network before anything is scanned or cleaned.'),
  ]);
})();
