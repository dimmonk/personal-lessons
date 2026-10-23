// IT Help Desk, lesson 29 "The whole ticket": the ten tickets of the check, from every system, unlabelled, no help. Each asks the first move or the next move given what the ticket already shows
// (the nine moves and the chains of lessons 9 to 28). The check passes with 8 of 10 right and none that touches data before protecting it (no-backup) or closes before the user confirms (closed-early); several
// tickets offer each of those as a wrong option. Facts as in the lessons they come from. Invented people and addresses; each name here has one job.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const W = 'whole';
  const chat = (id, from, text, prompt, rows, reason) => item({ id, strand: W,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const PART = 'part-first', NOSPLIT = 'no-split', LINK = 'wrong-link', WIPE = 'wipe-first', NOBACK = 'no-backup', TRUSTW = 'trusted-warning',
    TOOMUCH = 'too-much-access', LOCAL = 'local-fix', BLIND = 'blind-edit', APPR = 'skipped-approval', ARGUED = 'argued', GUESS = 'guessed-cause',
    EARLY = 'closed-early', MISREAD = 'misread-output', WCAUSE = 'wrong-cause', NOID = 'no-id-check', SHARED = 'reset-shared';

  FC.items('it-support', [
    chat('l29-t-nosignal', 'Odell, Front office', 'My desktop is on, the fans spin and the light is green, but the monitor says No Signal. It worked fine yesterday, and the cleaners were in last night.',
      'What is the next move?', [
        ['Push the monitor cable in firmly at both ends and check the port', true, 'The cleaners may have knocked the cable. It is the cheapest check on the video link, and it costs nothing.'],
        ['Replace the power supply', PART, 'The fans spin and the light is green, so the power link works. Swapping a part first skips the cheap check.'],
        ['Reinstall Windows from the recovery drive to rule out a bad install', WIPE, 'No picture appears even before Windows starts, so Windows is not yet the suspect. A reinstall also puts the files at risk.'],
        ['Update the monitor driver in Device Manager and restart the PC', NOSPLIT, 'A driver needs a working picture to be changed, and the step does not split the monitor side from the PC side.']],
      'The cleaners moved things, so the cheapest check on the video link comes first: the cable seated at both ends, before any part is swapped.'),
    item({
      id: 'l29-t-apipa', strand: W,
      blocks: [
        msg('chat', 'Perla, Billing', 'Chat with the help desk', [['m1', 'None of the websites open and the shared drive is gone since I came in. Here is what the command shows.']]),
        table('C:\\> ipconfig (the Ethernet adapter)', ['Setting', 'Value'], [['a1', 'Autoconfiguration IPv4 Address', '169.254.20.9'], ['a2', 'Subnet Mask', '255.255.0.0'], ['a3', 'Default Gateway', '(empty)']])],
      asks: [ask('What is the next move?', [
        ['Check the cable and wall port, then run ipconfig /renew', true, 'A 169.254 address means no address server answered. The link comes first, then a new request costs nothing.'],
        ['Run ipconfig /flushdns to clear the saved website names from the computer', LINK, 'The name lookup is a later link. The computer has no real address yet, so nothing reaches it.'],
        ['Type 8.8.8.8 in as the DNS server in the adapter settings, then test a site', LINK, 'The computer has no address or gateway, so a DNS server could not be reached anyway.'],
        ['Ping 8.8.8.8 to see whether the internet is down for the whole building', MISREAD, 'With a 169.254 address and no gateway the ping cannot leave the computer. The output has already answered.']])],
      deciding: ['m1', 'a1', 'a3'],
      reason: 'A 169.254 address with no gateway puts the fault at the address link: check the link, then request an address from the server again.' }),
    chat('l29-t-spool', 'Thandi, Accounts', 'My report has said Printing for an hour and the jobs I send after it are lined up behind it. My coworkers print to the same printer fine from their own PCs.',
      'What is the next move?', [
        ['Stop the Print Spooler on that PC, clear the stuck job and start it again', true, 'The jam is in that PC’s own queue, since others print fine. Clearing the queue and restarting the spooler is the known fix.'],
        ['Replace the toner cartridge in the printer and print the report again', PART, 'The printer works for the coworkers, so the toner is not the cause.'],
        ['Restart the shared printer in the supply room and send the report again', SHARED, 'Everyone else is printing on it. Only one PC’s queue is stuck, so the shared printer is left alone.'],
        ['Tell Thandi the queue will clear by itself, and close the ticket', EARLY, 'Nothing has been fixed and nobody has checked that the report prints. The ticket closes after the user confirms.']],
      'A queue stuck on one PC while others print is fixed by clearing that queue and restarting the Print Spooler.'),
    chat('l29-t-battery', 'Calder, Sales', 'Since last week my company phone drops from full to about 30 percent in three hours, and it feels warm in my pocket. The phone is two years old.',
      'What is the cheapest test to start with?', [
        ['Open the battery usage list in Settings and see which app uses most', true, 'The list splits the causes: one app using most of the power points at an app, while an even spread points toward the battery.'],
        ['Order a new battery for the phone from the company supplier', PART, 'A battery may turn out to be the cause, but the usage list is free and could rule it out first.'],
        ['Reset the phone to factory settings and start again from scratch', WIPE, 'A reset wipes the phone before anyone knows the cause, and the data on it may have no other copy.'],
        ['Buy a faster charger so the phone fills sooner in the morning', WCAUSE, 'A charger changes how fast it fills, not how fast it drains.']],
      'The battery usage list is the cheapest test that splits an app problem from a battery problem.'),
    item({
      id: 'l29-t-noos', strand: W,
      blocks: [
        { ...msg('email', 'Fabian, Estimating', 'Email to the help desk', [['m1', 'My laptop now says Operating system not found when I turn it on. It worked yesterday. All my client quotes are saved on the Desktop and my last backup was a month ago.']]), subject: 'Laptop will not start' }],
      asks: [ask('What is the next move?', [
        ['Copy the quotes off with a rescue USB stick before any repair', true, 'The quotes have no other copy. Data comes first, and the repair can wait until it is safe.'],
        ['Run the startup repair now', NOBACK, 'A repair is a change to a drive that may be failing, and the quotes are the only copy.'],
        ['Reinstall Windows to get the laptop going again quickly today', NOBACK, 'A reinstall can erase the quotes, and nobody knows yet why the system is not found.'],
        ['Order a new drive for the laptop and swap it in this afternoon', PART, 'It may turn out to be the drive, but a part is not the first move when the only copy of the quotes is on it.']])],
      deciding: ['m1'],
      reason: 'Data with no other copy is protected before anything is repaired or changed.' }),
    item({
      id: 'l29-t-diskfull', strand: W,
      blocks: [
        msg('chat', 'Kenji, Web team', 'Chat with the help desk', [['m1', 'Our Linux web server stopped saving uploads about ten minutes ago. Here is the disk output.']]),
        table('$ df -h', ['Filesystem', 'Size', 'Used', 'Avail', 'Use%', 'Mounted on'], [['d1', '/dev/sda1', '40G', '16G', '22G', '42%', '/'], ['d2', '/dev/sdb1', '20G', '20G', '0', '100%', '/var']])],
      asks: [ask('What is the next move?', [
        ['Find which folders fill /var, with du -sh /var/*', true, 'The /var drive is full and the other is not. du lists the size of each folder, which shows what is using the space.'],
        ['Delete everything inside /var to make room for uploads right away', BLIND, 'Deleting before looking could remove what the server needs, and nobody knows what is filling it.'],
        ['Reboot the server to see whether the disk clears itself', NOSPLIT, 'A reboot does not shrink files. The output already shows /var is full.'],
        ['Add more memory to the server so it can keep more in use', WCAUSE, 'The output shows no memory problem. It shows a full /var drive.']])],
      deciding: ['m1', 'd2'],
      reason: 'The output puts the fault on the full /var drive. The cheapest next test is to see which folders fill it.' }),
    chat('l29-t-phish', 'Essie, HR', 'I got an email from IT asking me to confirm my password on a page. I clicked the link and typed my password. The page just closed and nothing else happened.',
      'What is the next move?', [
        ['Check it is Essie with the number on file, then reset the password, end the sessions and report it', true, 'The password is now in someone else’s hands, so it is changed at once, but only after the desk confirms who is asking by a record it holds. The report lets the team look for the same email at others.'],
        ['Reset the password and end all the sessions now', NOID, 'Anyone can type a name into a chat. The desk confirms who is asking by a record it holds, such as the number on file, before it resets anything.'],
        ['Tell Essie it is fine to carry on', TRUSTW, 'A page that closes is how a fake page ends. The password was still sent.'],
        ['Scan the PC for malware and wait for the result, then close the ticket once the scan comes back clean', EARLY, 'A scan does not change the password that was sent, and the ticket closes only after the user confirms.']],
      'Phishing that got a password is handled by confirming who is asking, then changing the password at once and reporting it.'),
    chat('l29-t-denied', 'Garrick, Support', 'I moved from Sales to Support and still need the Pricing folder. I get Access denied. My manager approved it in this ticket this morning.',
      'What is the next move?', [
        ['Check which group may open the folder and add Garrick’s account to it', true, 'Access goes through a group with the right permission. The approval is in the ticket, so adding the account to that group gives exactly what the job needs.'],
        ['Give Everyone full control of the Pricing folder so it opens for Garrick today', TOOMUCH, 'That opens the folder to every account. Least privilege gives only what the job needs.'],
        ['Make Garrick’s account a local administrator of the PC and try the folder again', TOOMUCH, 'Administrator rights on one PC do not open a shared folder, and give far more than the job needs.'],
        ['Copy the Pricing folder onto Garrick’s Desktop so it is at hand each day', LOCAL, 'A copy goes out of date and skips the folder’s permissions.']],
      'A shared folder is opened through the group that has the permission, with only the access the job needs.'),
    chat('l29-t-third', 'Halle, Planning', 'This is the third time this week my Wi-Fi drops while I am on a call! Nobody does anything about it. I am sick of it!',
      'What do you say next?', [
        ['I am sorry, that is three drops. I will check your connection now and tell you what happens next', true, 'Saying what happens next and when answers the anger. The checking starts, and the three drops are the pattern to hand on.'],
        ['I am sorry, but nobody else has this trouble, so it is probably your laptop', ARGUED, 'This pushes the blame at the user, and no test has said it.'],
        ['I am sorry about that. It is almost certainly interference on the 2.4 GHz band', GUESS, 'A cause told before any test, in words the user may not know.'],
        ['I am sorry. I have noted the drops, so I will close this ticket, and you can open a new one if it happens again', EARLY, 'Nothing is fixed and the user has not confirmed anything. A ticket that repeats is handed on with its dates, not closed.']],
      'An upset user hears what happens next and when. The three drops are a problem to hand on with their dates.'),
    chat('l29-t-patch', 'Wilhelm, Server team', 'I plan to patch the main file server at 2 p.m. tomorrow. Everyone uses it. I have not written a way to undo the patch, but I will do it carefully.',
      'What do you tell Wilhelm?', [
        ['Hold it until it has a written undo plan and approval', true, 'A change to something everyone uses needs approval, a plan and a way back before it is made.'],
        ['Go ahead', APPR, 'Being careful is not a change process. Without an undo plan, a bad patch has no way back.'],
        ['Move it to 2 a.m., when fewer people are on, and skip the approval', APPR, 'A quieter hour helps, but the approval and the undo plan are still missing.'],
        ['Patch it tomorrow as planned and back up the server after the patch', NOBACK, 'The backup has to exist before the change. After a bad patch, there is nothing safe to go back to.']],
      'A change to a shared server needs approval, a written plan, a backup and a way back first.'),
  ]);
})();
