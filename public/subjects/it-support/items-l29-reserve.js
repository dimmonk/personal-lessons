// IT Help Desk, lesson 29 "The whole ticket, and the mock exam": six reserve tickets for the weekly review (strand whole), the same form as the ten of the check in items-l29-check.js. Invented people and addresses; each name here has one job.
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
    EARLY = 'closed-early', KEPT = 'kept-connected', MISREAD = 'misread-output', FIXED = 'fixed-first', WCAUSE = 'wrong-cause', WCHG = 'wrong-change-type',
    ORDER = 'removal-order', ALARM = 'ignored-alarm', REBUILT = 'rebuilt-array', LEAK = 'leaked-data', WKIND = 'wrong-kind', NOID = 'no-id-check';

  FC.items('it-support', [
    chat('l29-r-renew', 'Brigid, Reception', 'You fixed my Wi-Fi by running a renew command a minute ago. I have a visitor waiting, so just close the ticket.',
      'What is the next move?', [
        ['Have Brigid open the failed page, and close the ticket once it loads', true, 'The fix counts when the user has checked it works for them, and the ticket says what happens next.'],
        ['Close the ticket now, since the command ran without any error', EARLY, 'A command that ran is not proof the user can work. The user confirms, then it closes.'],
        ['Leave it open and call Brigid again tomorrow morning to check', BRUSH, 'The user is ready to check now, and a visitor is waiting. Waiting a day does not help.'],
        ['Run the same command again on the laptop to be safe', FIXED, 'It repeats a change that already worked and still leaves the user unasked.']],
      'The user checks that the fix works for them before the ticket is closed.'),
    item({
      id: 'l29-r-dns', strand: W,
      blocks: [
        msg('chat', 'Caius, Design', 'Chat with the help desk', [['m1', 'My Wi-Fi says Connected but no website opens. Our shared drive by number still works. This is what the commands show.']]),
        table('C:\\> ping 192.168.1.1 and ping 203.0.113.50', ['What the computer prints'], [['p1', 'Reply from 192.168.1.1: bytes=32 time=2ms TTL=64'], ['p2', 'Reply from 203.0.113.50: bytes=32 time=18ms TTL=57'], ['p3', 'C:\\> ping www.example.com'], ['p4', 'Ping request could not find host www.example.com. Please check the name and try again.']])],
      asks: [ask('What is the next move?', [
        ['Check the DNS server setting, and test a lookup with nslookup', true, 'The gateway and an outside address both answer by number. Only the name fails, so the name lookup link is the one to test.'],
        ['Replace the Ethernet cable at the desk, in case it is worn', PART, 'The user is on Wi-Fi, and both pings by number came back. The link works.'],
        ['Run ipconfig /renew to get a new address from the router', LINK, 'The address and gateway work, as the two replies show. The address link is not the fault.'],
        ['Restart the router in the supply room and try the sites again', NOSPLIT, 'The router replied. A restart would not tell the name lookup from anything else.']])],
      deciding: ['m1', 'p2', 'p4'],
      reason: 'Pings by number work and the ping by name fails, so the fault sits on the name lookup link.' }),
    chat('l29-r-ads', 'Ravenna, Estimating', 'My browser home page changed by itself, and pop-ups with ads keep opening. The PC has also slowed down a lot since yesterday.',
      'What is the next move?', [
        ['Check Task Manager and another browser to be sure it is malware, then take the PC off the network', true, 'Verify first, so the user is not cut off for nothing. Quarantine is the next step, and a scan comes only after the PC is cut off.'],
        ['Take the PC off the network right away, before looking at anything else on it', ORDER, 'Quarantine is step 2. Step 1 is to investigate and verify the symptoms, so the user is not disrupted for a false alarm.'],
        ['Run a full scan while the PC stays connected, so the definitions update first', KEPT, 'Staying connected lets the malware keep spreading or sending data while the scan runs.'],
        ['Reset the browser settings and close the ticket once the page looks fine', EARLY, 'The settings may come back, and the user has not confirmed anything. Nobody has found what changed them.']],
      'The ten removal steps run in order: verify the signs first, then quarantine the PC, and only then clean it.'),
    chat('l29-r-newhire', 'Tobiah, Operations', 'A new hire starts Monday in my team. Please get them an account and a laptop. I am their manager.',
      'What kind of ticket is this, and what comes first?', [
        ['A request: follow the desk’s new-hire steps, starting with the approved form', true, 'It is a routine request with a fixed procedure. The steps written for it come first, including who has approved it.'],
        ['An incident: make the account right now, since the start day is Monday', WKIND, 'Nothing is broken. A fixed procedure covers it, and the start day only decides when the steps must be done.'],
        ['A problem: look for the cause behind all the new hires this year', WKIND, 'A problem is the cause behind things that keep happening. This ticket is a single new hire.'],
        ['Make the account from the manager’s message alone, then fetch a laptop', NOID, 'The message is the only record that the request is real. The desk’s own steps confirm it before access is made.']],
      'A routine request with a fixed procedure is a request, worked through the desk’s steps, with the approval checked.'),
    chat('l29-r-raid', 'Linnea, Server team', 'The file server’s RAID 5 shows one drive as failed, but everyone can still open their files. Should I wait until the weekend?',
      'What do you tell Linnea?', [
        ['Check that a recent backup exists, then replace the failed drive and let it rebuild', true, 'The array still works, but with one drive gone it has no room for a second failure. RAID is not a backup, so the backup is checked before the swap.'],
        ['Wait until the weekend, since all the files still open', ALARM, 'A RAID 5 with a failed drive has lost its protection. A second failed drive loses the data.'],
        ['Create the array again from the four drives and copy the files back', REBUILT, 'Creating the array again can erase the data that is still on the drives.'],
        ['Restart the server to see whether the failed drive comes back by itself', NOSPLIT, 'A restart does not repair a failed drive, and it adds risk to a server that has no spare protection left.']],
      'A failed RAID 5 drive is replaced soon, after the backup is checked, because the array can survive no second failure.'),
    chat('l29-r-taxi', 'Matteo, Sales', 'I left my company phone in a taxi an hour ago. I have called the taxi firm and nobody has answered. It has customer emails on it.',
      'What is the next move?', [
        ['Lock the phone and wipe it from the company’s device management, and tell security', true, 'Customer data is on a phone out of the company’s hands. Locking and wiping it from the management tool protects the data, and security needs to know.'],
        ['Wait until tomorrow in case the taxi firm calls back with the phone', LEAK, 'Every hour the phone is unlocked or guessable, the customer emails can be read.'],
        ['Reset Matteo’s account password and leave the phone as it is', LEAK, 'A new password does not remove the data already stored on the phone.'],
        ['Order a new phone and restore it from the last backup, then close the ticket', EARLY, 'The old phone still holds the data, and the user has not confirmed anything. The ticket closes after the user confirms.']],
      'A lost phone with company data is locked and wiped from the management tool, and security is told.'),
  ]);
})();
