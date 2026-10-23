// IT Help Desk, lesson 26 "Malware and attacks" (part malware): the worked ticket and the three groups of questions.
// Facts: A+ map (docs/research/it-support-aplus.md) Core 2 2.4 (malware kinds and tools), 2.5 (social engineering, threats, vulnerabilities), 2.6 (the ten removal steps, in the order the objective lists them), 2.9 (wiping,
// low-level and standard format, drilling, shredding, degaussing, incineration, third-party vendor and certificate), 2.11 (browser settings), 3.4 (PC and browser security symptoms). The worked ticket rules out the favorite
// Facts checked 2026-10-23: format without /q writes zeros, /q does not (Microsoft KB 941961); degaussing does not work on SSDs, which need secure erase or destruction (NIST SP 800-88 Rev 1 summaries). Pronouns: named ticket people are named or "they" (ruling 22).
// cause (too little memory) with Task Manager, names the kind from the signs, and walks the removal steps (IT4, IT8, IT11). Invented people. Strands: malware-kinds, attacks, malware-removal, destruction, browser-security.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const table = (title, head, rows) => ({ kind: 'document', form: 'table', title, head, rows: rows.map(([id, ...cells]) => ({ id, cells })) });
  const note = text => ({ kind: 'prose', text });
  const L = (id, text) => ({ id, text });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const KIND = 'wrong-malware', ATK = 'wrong-attack', ORD = 'removal-order', REST = 'restore-left-on', WEAK = 'weak-erase', DEST = 'wrong-destroy', PROOF = 'no-proof',
    WARN = 'trusted-warning', BSET = 'wrong-browser-setting', BRUSH = 'brushed-off', CAUSE = 'wrong-cause', PART = 'part-first', NOSPLIT = 'no-split', SIGN = 'treated-sign',
    IDCHK = 'no-id-check', WIPED = 'windows-wipe', IDLE = 'waited-idle';

  FC.items('it-support', [
    // ----- the worked ticket: a favorite cause (too little memory) that Task Manager rules out, then the kind named from the signs, then the steps -----
    item({
      id: 'l26-w-priya', strand: 'malware-kinds',
      blocks: [
        msg('chat', 'Rory, Accounting', 'Chat with the help desk', [['m1', 'My laptop has crawled since Monday. The fan roars even when nothing is open and the battery dies in an hour. I put a free PDF converter on it last week, but that cannot matter.']]),
        table('Task Manager while Rory has nothing open', ['Program', 'Processor', 'Memory'], [
          ['d1', 'pdfconv-helper.exe', '91%', '120 MB'],
          ['d2', 'Chrome', '4%', '310 MB'],
          ['d3', 'All programs together', '98%', '38% of memory in use']]),
        note('From the ticket record: last night’s backup of Rory’s laptop finished without errors.')],
      asks: [ask('What does Task Manager show?', [
        ['One unknown program uses almost all the processor; memory is mostly free', true, 'Memory is 38% in use, so it is not the limit, and one program the user never opened takes 91% of the processor.'],
        ['The laptop is old, so more memory and a new drive are the cure for the slowness', CAUSE, 'Memory is far from full, and no drive problem shows. Buying parts would not touch a program that eats the processor.'],
        ['Chrome is the problem, so remove it and install it again', PART, 'Chrome uses 4%. The program using 91% is another one.'],
        ['The numbers are normal, because no single program is at 100%', NOSPLIT, 'With nothing open, 91% for one program is far from normal, and the whole laptop is at 98%.']])],
      steps: [
        { id: 'causes', does: 'Write down every cause that fits “slow, hot, short battery, nothing open”.', working: 'Too little memory; a failing drive; Windows busy updating; a program using the processor; malware.' },
        { id: 'favorite', does: 'Test the favorite cause with the cheapest check.', working: 'Rory thinks the laptop is just old. Task Manager takes seconds and changes nothing: memory is 38% in use, so memory is not the limit. One program, pdfconv-helper.exe, takes 91%.', ask: 'a' },
        { id: 'kind', does: 'Work back from the signs to the kind.', working: 'A helper that came with a free converter is most likely a Trojan: it looks useful and lets something else in. The scan will confirm it. A busy processor, a loud fan and a short battery with nothing open are the signs of a cryptominer, which earns cryptocurrency for someone else on Rory’s power.' },
        { id: 's1', does: 'Step 1: verify the symptoms.', working: 'Check where the file sits and that no Windows update explains the load. Nothing is deleted yet.' },
        { id: 's2', does: 'Step 2: quarantine.', working: 'Rory’s backup is from last night, so Rory’s files are safe. Take the laptop off the network: a miner reports to its owner and can spread, and cutting it off stops both.' },
        { id: 's3', does: 'Step 3: disable System Restore.', working: 'Turning System Restore off clears the old restore points, which could hold a copy of the miner that a scan, the usual reason given, cannot clean.' },
        { id: 's4', does: 'Steps 4 to 6: remediate, update, scan.', working: 'Fetch the newest anti-malware update on a clean computer and bring it over on a USB stick that is scanned afterwards. Then scan in safe mode, where Windows loads only what it needs, so the miner does not run.' },
        { id: 's5', does: 'Step 7: reimage, only if the scan fails.', working: 'Here the scan removes the helper and the miner. Had it kept coming back, you would erase the laptop and put back a clean image.' },
        { id: 's6', does: 'Steps 8 to 10: keep it clean.', working: 'Schedule scans and run updates. Turn System Restore on and create a restore point of the clean laptop. Then show Rory how to download from the maker’s own site and check the hash.' },
        { id: 'close', does: 'Confirm, write it up, then close.', working: 'Rory confirms the fan is quiet and the battery lasts. Write the note: the converter as the way in, the miner, the steps taken. Then close.' }],
      deciding: ['m1', 'd1'],
      reason: 'A ticket gives a sign, not a name. Task Manager ruled out memory and showed one unknown program using the processor, which with the loud fan and short battery points to a cryptominer that came in with a Trojan. The ten steps then run in order: contain it, clean it, keep it clean.' }),

    // ----- group 1: with help -----
    chat('l26-p-ransom', 'malware-kinds', 'Hector, Operations', 'Every file in my Documents folder now ends in .locked and none will open. A note on the screen says I must pay $800 in cryptocurrency within three days to get a key.',
      'Which kind of malware is this?', [
        ['Ransomware, which scrambles files and demands payment to unscramble them', true, 'Files that will not open and a note demanding payment are the signs of ransomware, which encrypts files and sells the way back.'],
        ['Spyware, which secretly records what the user does and sends it out', KIND, 'Spyware works quietly and leaves no note. These files are locked and a demand is on the screen.'],
        ['A cryptominer, which uses the computer’s power to earn money for someone else', KIND, 'A miner slows the computer and heats it up. It does not lock files or leave a demand.'],
        ['Adware, which fills the screen with ads nobody asked for', KIND, 'Adware shows ads. It does not lock files or demand payment.']],
      'Files renamed and locked, with a note that demands money, mean ransomware. Spyware, miners and adware leave other signs.'),
    chat('l26-p-phish', 'attacks', 'Bryan, HR', 'A text message came to my work phone: “Your parcel is held, pay a $1.99 fee at this link.” I never ordered anything. The link looks odd.',
      'What is this attack called?', [
        ['Smishing, phishing carried out by text message', true, 'Phishing by text message is smishing.'],
        ['Vishing, phishing carried out by a phone call', ATK, 'Vishing is phishing by voice. This one arrived as a text.'],
        ['QR code phishing, a fake site reached from a scanned code', ATK, 'There is no QR code here: the link came in a text.'],
        ['Spear phishing, a message written for one person with their details', ATK, 'Spear phishing is written for one person. This one is a general parcel story that could go to anyone.']],
      'A fake message sent by text is smishing: the same trick as phishing, carried by a different channel.'),
    chat('l26-p-first', 'malware-removal', 'Katrina, Sales', 'A window popped up on my laptop saying “Your PC is infected, call this number now.” It will not close. My files all open fine and the laptop runs normally.',
      'Which of the ten steps comes first?', [
        ['Investigate and verify the symptoms: is the alert real?', true, 'Step 1 is to verify. Nothing but the pop-up says there is a problem, so you check before you disrupt anything.'],
        ['Quarantine the laptop by taking it off the network right away', ORD, 'Quarantine is step 2. The laptop runs normally and the alert may be a fake one, so verify first.'],
        ['Scan the laptop in safe mode and remove whatever it finds', ORD, 'Scanning is step 6. It comes after the symptoms are verified and the laptop is contained.'],
        ['Call the number on the window so the caller can fix it', WARN, 'The window did not come from a security program the desk installed. Calling the number hands the problem to the people who made the alert.']],
      'The first step is to investigate and verify. A pop-up that fills the screen but a laptop that runs normally fits a fake antivirus alert, so you verify before you act.'),
    chat('l26-p-wipe', 'destruction', 'Ella, Office manager', 'We are giving twenty old laptops to a local school. Their hard drives hold staff files. The laptops work and the school needs them to run.',
      'How should the drives be cleared?', [
        ['Wipe each drive, overwriting all of it so the old data cannot be read back', true, 'A wipe leaves a working drive with nothing on it, which suits laptops that are to be reused.'],
        ['Quick-format each drive, which clears the list of files but not the data', WEAK, 'A quick (standard) format removes the way to find the files and leaves the data on the drive, where it can be recovered.'],
        ['Shred each drive, cutting it into small pieces', DEST, 'Shredding ruins the drive, and the school needs working laptops.'],
        ['Degauss each drive with a strong magnet', DEST, 'Degaussing makes a drive unusable, and the school needs working laptops.']],
      'The laptops are to be reused, so the drives must work and the data must be unreadable. A wipe does both, and so does a full format, which writes zeros. A quick format leaves the data; shredding and degaussing ruin the drive.'),
    chat('l26-p-hash', 'browser-security', 'Ivan, Design', 'I downloaded an installer from a link in a forum post. The maker’s own site lists a hash for the file. A hash is a fingerprint worked out from a file’s contents. I ran a hash tool on mine and the two do not match.',
      'What does the mismatch tell you?', [
        ['The file is not the one the maker published, so do not run it', true, 'Change anything in a file and its hash changes. A different hash means a different file, possibly one with malware added.'],
        ['The file was only compressed on the way, so it is still safe to run', CAUSE, 'A compressed copy that unpacks to the same file gives the same hash. A mismatch means the file differs.'],
        ['The hash tool is out of date, so its answer can be ignored', CAUSE, 'Hash tools do not go out of date. The same file always gives the same hash.'],
        ['The maker’s site has been tampered with, so the forum file is fine', CAUSE, 'Nothing here points to the maker’s site. The file Ivan has is the one that does not match what the maker lists.']],
      'The maker lists the hash of the real file. If yours differs, the file is not the real one, and you download again from the maker’s own site.'),

    // ----- group 2: no help -----
    chat('l26-q-tailgate', 'attacks', 'Reggie, Security desk', 'The camera shows a man without a badge walking into the server area right behind Brooke, just before the door shut. Brooke did not notice them, and they said nothing.',
      'What is this called?', [
        ['Tailgating, following an authorized person through a door', true, 'The man got in by following Brooke through a door before it shut. That is tailgating.'],
        ['Impersonation, pretending to be someone with a right to be there', ATK, 'The man said nothing and pretended nothing. They just came in behind Brooke.'],
        ['Shoulder surfing, watching someone type or read a screen', ATK, 'Shoulder surfing is watching a screen or keyboard. Nobody was watching one here.'],
        ['Dumpster diving, searching the trash for papers with information', ATK, 'Nothing was taken from the trash. A person walked through a door.']],
      'Following an authorized person through a door without using your own badge is tailgating.'),
    chat('l26-q-bec', 'attacks', 'Melanie, Accounts Payable', 'An email from our usual supplier’s accounts address says their bank has changed and asks us to pay today’s invoice to a new account. We later found out a crook had taken over that mailbox.',
      'What is this attack called?', [
        ['Business email compromise, using a business email to get money moved', true, 'A business email, here from a taken-over mailbox, requests payment of an invoice to a changed account. That is business email compromise.'],
        ['Spoofing, faking who a message appears to come from', ATK, 'Spoofing fakes the sender. Here the mailbox was really taken over, so the sender was not faked.'],
        ['Distributed denial of service, flooding a service until it stops answering anyone', ATK, 'Nothing was flooded. The aim was to move money, not to stop a service.'],
        ['Zero-day, an attack on a flaw nobody has a fix for yet', ATK, 'No flaw is described. The trick was a believable email asking for money.']],
      'An email, real or faked, that requests a money transfer, often to a changed bank account, is business email compromise.'),
    chat('l26-q-keylog', 'malware-kinds', 'Dalton, Facilities', 'We found a small plastic plug between the keyboard cable and the front-desk PC. Since it appeared, the receptionist’s email password has been used from another country.',
      'What was the plug?', [
        ['A keylogger, which records every letter and number typed so passwords can be read', true, 'A device between keyboard and PC that records keystrokes explains how a typed password reached a stranger.'],
        ['A rootkit, which hides itself and other malware deep in the system', KIND, 'A rootkit hides malware inside the system. It is not a plug on the cable.'],
        ['A Trojan, which looks like useful software but brings in something else', KIND, 'A Trojan is software. This is a small piece of hardware.'],
        ['Stalkerware, which tracks one person for someone who knows them', KIND, 'Stalkerware tracks a person’s location and messages. This plug caught typed passwords.']],
      'A plug that sits on the keyboard cable and a password used by a stranger fit a keylogger, which records what is typed.'),
    chat('l26-q-root', 'malware-kinds', 'Sawyer, IT', 'A PC keeps sending odd traffic. Antivirus run from inside Windows finds nothing, and twice the antivirus was found switched off.',
      'Which kind is it likely to be, and where should the scan run from?', [
        ['A rootkit, so scan from outside Windows, such as a recovery environment', true, 'A rootkit hides from a scan run inside the system it has taken over. Starting from outside lets the scan see it.'],
        ['Adware, so scan again inside Windows once the antivirus is turned back on', KIND, 'Adware shows ads, and scanning inside Windows is what already found nothing.'],
        ['A virus in one file, so delete the file the user last opened', KIND, 'Nothing points to one file, and a security tool switched off points to something that hides.'],
        ['A fileless attack, so scan the drive for the file it left behind', KIND, 'Fileless malware leaves no file. And it would not switch the antivirus off by hiding.']],
      'Odd traffic, a clean scan and a security tool that keeps being switched off are the signs of something hiding: a rootkit. Scan it from outside the system it hides in.'),
    item({
      id: 'l26-q-order', strand: 'malware-removal',
      blocks: [note('A user’s Windows laptop is infected. You work the ten steps of the removal.')],
      asks: [{ id: 'a', kind: 'order', prompt: 'Put the ten steps in order.', steps: [
        { id: 's1', text: 'Investigate and verify the symptoms.' },
        { id: 's2', text: 'Quarantine the infected computer.' },
        { id: 's3', text: 'Disable System Restore.' },
        { id: 's4', text: 'Remediate the infected computer.' },
        { id: 's5', text: 'Update the anti-malware software.' },
        { id: 's6', text: 'Scan and remove, in safe mode or from outside Windows.' },
        { id: 's7', text: 'Reimage or reinstall, if the scan cannot clean it.' },
        { id: 's8', text: 'Schedule scans and run updates.' },
        { id: 's9', text: 'Enable System Restore and create a restore point.' },
        { id: 's10', text: 'Educate the end user.' }],
        right: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'], then: 'Verify first, so you do not disrupt a user over a fake alert. Cut the computer off, then turn System Restore off so old restore points cannot bring the malware back. Remediate, which is done by updating the scanner, scanning, and reimaging if the scan fails. Schedule scans only when it is clean, turn System Restore back on so the new restore point is a clean one, and teach the user last.' }],
      reason: 'The steps run in three parts: contain it (verify, quarantine, System Restore off, remediate), clean it (update, scan, reimage) and keep it clean (schedule scans, System Restore on with a new restore point, educate the user). Each step makes the next one safe.' }),
    chat('l26-q-restore', 'malware-removal', 'Nicole, Service desk', 'A coworker says: “Just roll the infected laptop back to last Tuesday’s restore point. There is no need to turn System Restore off first.” The laptop runs Windows.',
      'Why is System Restore turned off before the cleanup?', [
        ['Old restore points can hold a copy of the malware that a scan cannot clean', true, 'A restore point stores a copy of system files, malware included. Turning System Restore off clears them, so no copy is left to bring the malware back.'],
        ['System Restore uses the network, so it would let the malware spread', REST, 'System Restore works on the computer itself. Cutting off the network is step 2.'],
        ['A restore point cannot be made while any anti-malware program is running', CAUSE, 'Restore points can be made while security software runs. The reason is the copies already saved.'],
        ['System Restore makes the scan take much longer, so it is switched off to save time', CAUSE, 'Saving time is not the reason. The stored copies are what could bring the malware back.']],
      'Restore points saved before the cleanup may contain the malware. The usual reason given is that a scan cannot clean inside them, and a rollback would restore the infection, so step 3 turns System Restore off and step 9 turns it on again.'),
    chat('l26-q-vendor', 'destruction', 'Mamadou, Clinic manager', 'Our clinic is closing. We have three hundred old drives holding patient records. The law says we must be able to prove they were destroyed.',
      'What is the best way to handle them?', [
        ['Hire a vendor to destroy them and get a certificate of destruction', true, 'A third-party vendor does the work in bulk, and the certificate of destruction is the proof the law requires.'],
        ['Quick-format each drive and put them in the recycling bin on Friday', WEAK, 'A quick format leaves the data on the drive, and the bin leaves no proof of anything.'],
        ['Drill one hole through each drive and keep no record of the job', PROOF, 'Drilling destroys a drive, but with no record there is no proof, and proof is what the law requires.'],
        ['Wipe each drive yourself and tell the owners it was done', PROOF, 'A wipe may be sound, but your word is not the proof the law requires. A certificate is.']],
      'Many drives with patient records and a legal duty to prove destruction call for a third-party vendor and a certificate of destruction.'),
    chat('l26-q-cert', 'browser-security', 'Abe, Warehouse', 'Every secure website I open shows “Your connection is not private” since this morning. My phone on the same Wi-Fi opens them fine. My PC’s clock says it is two years ago.',
      'What do you try first?', [
        ['Correct the PC’s date and time, then reload a secure site', true, 'A certificate has dates. With the clock two years off, every certificate looks wrong, and the phone shows the network is fine.'],
        ['Tell Abe to click Continue anyway on each site so Abe can work', WARN, 'Clicking through a certificate warning takes Abe to a site the browser cannot vouch for, and it fixes nothing.'],
        ['Reinstall the browser to replace its certificates', PART, 'A reinstall is a big step before the cheap check of the clock, and the phone already shows the network is fine.'],
        ['Turn off the PC’s firewall, which is blocking the sites', CAUSE, 'A firewall that blocks does not show a certificate warning, and turning it off makes the PC less safe.']],
      'The phone works on the same Wi-Fi, so the fault is on this PC, and the clock is two years off. Certificates have dates, so fix the clock first.'),
    chat('l26-q-pop', 'browser-security', 'Harper, Marketing', 'Little ad boxes pop up in the corner of my Windows screen all day, even when the browser is closed. They say “Win a prize.” They come from a site I opened last month and clicked Allow on.',
      'Where do you remove the cause?', [
        ['In the browser’s notification settings, removing that site’s permission', true, 'Harper clicked Allow, so the site may send notifications. Removing its permission stops them at the source.'],
        ['In the browser’s pop-up blocker, switching it on for every site', BSET, 'The pop-up blocker stops extra windows. These are notifications the site was allowed to send.'],
        ['In Task Manager, ending Windows Explorer each time a new box appears on screen', SIGN, 'That clears the box once and leaves the permission, so the next one comes.'],
        ['In the browser, clearing the cache and cookies for every site', BSET, 'Clearing the cache and cookies leaves the site’s notification permission in place, so the boxes keep coming.']],
      'Unwanted notifications from a site the user once allowed are removed by taking that site’s permission away in the browser’s notification settings.'),

    recall('l26-q-zero', 'attacks', 'An attack that uses a flaw in software the maker has had no chance to fix yet, so no patch exists, has its own name.', 'Type the name.',
      ['zero-day', 'zero-day attack'], 'It is a zero-day: the maker has had zero days to fix the flaw. Once a patch exists, an unpatched computer is the weak spot instead.'),
    recall('l26-q-miner', 'malware-kinds', 'Malware that quietly uses a computer’s power to earn cryptocurrency for someone else, leaving it slow and its fan loud, has its own name.', 'Type the name.',
      ['cryptominer', 'crypto miner', 'cryptocurrency miner'], 'It is a cryptominer. The signs are a slow computer, a loud fan and a short battery with nothing open.'),

    // ----- group 3: mixed with earlier lessons -----
    chat('l26-g-trojan', 'malware-kinds', 'Uma, Studio', 'I installed a “free screen recorder” from an ad. It records my screen just as advertised, but since then my webcam light blinks on at odd times.',
      'Which kind of malware brought the rest in?', [
        ['A Trojan, software that looks useful and carries something else in', true, 'The recorder does what it says and carries something else in, which is how a Trojan works.'],
        ['A virus, which attaches itself to files and spreads when they are shared', KIND, 'No file was shared. Uma installed a program from an ad.'],
        ['A rootkit, which hides deep in the system', KIND, 'A rootkit is about hiding. What brought the extras in was the program Uma chose to install.'],
        ['A boot sector virus, which sits in the part of the drive that starts the computer', KIND, 'Nothing is wrong at start-up, and the trouble began after an install.']],
      'Software that works as advertised, and trouble that started with its install, is a Trojan carrying something else in.'),
    chat('l26-g-fileless', 'malware-kinds', 'Luis, Server team', 'Antivirus scans come back clean, but every few minutes PowerShell, a built-in Windows tool, starts and talks to an outside address. There is no unknown file anywhere on the drive.',
      'Which kind fits, and what can catch it?', [
        ['Fileless malware, which a behavior-watching tool such as EDR can catch', true, 'Fileless malware runs in memory using tools Windows already has, so a scan of files finds nothing. EDR watches what programs do.'],
        ['A boot sector virus, which a scan from outside Windows will find at start-up', KIND, 'A boot sector virus sits in the start-up area of the drive and shows at start-up. Here PowerShell calls out while Windows runs.'],
        ['Adware, which shows in the browser’s list of extensions', KIND, 'Adware shows ads. PowerShell calling an outside address is not an ad.'],
        ['A keylogger, which shows as a small plug on the keyboard cable', KIND, 'A keylogger records typing. This is a program that keeps calling out.']],
      'A clean file scan, a built-in tool doing odd things and no unknown file are the signs of fileless malware. Behavior-watching tools like EDR can catch it.'),
    chat('l26-g-mdr', 'malware-kinds', 'Macy, Owner of a twelve-person firm', 'We have antivirus on every PC but no security staff. I want someone outside to watch for attacks around the clock and act on them for us.',
      'Which service is that?', [
        ['MDR, managed detection and response: an outside team watches and responds', true, 'In MDR an outside team does the watching and the responding as a service, which is what a firm with no security staff needs.'],
        ['EDR on its own, software that records what each computer does', KIND, 'EDR is the software. Someone on Macy’s own side would still have to read its alerts and act.'],
        ['An email security gateway, which filters mail before it arrives', KIND, 'A gateway filters mail only. It does not watch the computers or respond.'],
        ['A software firewall, which blocks programs on one computer', KIND, 'A firewall on one computer does not watch for attacks across the firm or act on them.']],
      'EDR is software that watches each computer; MDR adds an outside team that watches and responds for you, and XDR widens the watching to email, network and cloud.'),
    recall('l26-g-whale', 'attacks', 'A phishing message written for a company’s most senior leaders, such as the chief executive or the chief financial officer, has its own name.', 'Type the name.',
      ['whaling', 'whale phishing'], 'It is whaling: the big targets. Spear phishing is written for one person, and whaling is spear phishing aimed at senior leaders.'),
    item({
      id: 'l26-g-tail', strand: 'malware-removal',
      blocks: [note('The scan has removed the malware from a Windows laptop and the computer is clean. Tap the steps still to do, in order. Leave out any step that does not belong.')],
      asks: [{ id: 'a', kind: 'order', prompt: 'Tap the steps still to do, in order.', steps: [
        { id: 't1', text: 'Schedule scans and run updates.' },
        { id: 't2', text: 'Enable System Restore and create a restore point.' },
        { id: 't3', text: 'Educate the end user.' },
        { id: 't4', text: 'Disable System Restore.' }],
        right: ['t1', 't2', 't3'], then: 'Schedule scans and updates once it is clean, turn System Restore on and make a restore point so the saved state is a clean one, then teach the user. Disabling System Restore was step 3, before the cleanup.' }],
      reason: 'After the cleanup come the last three steps: schedule scans and run updates, enable System Restore and make a restore point, and educate the user. Disabling System Restore belongs before the cleanup.' }),
    chat('l26-g-ssd', 'destruction', 'Kiona, Facilities', 'We have a box of retired laptops with SSD drives, which store data in flash chips. A colleague wants to run them past the degausser we already own, then bin them.',
      'What do you do instead?', [
        ['Shred them, because a degausser works on magnetic drives, not SSDs', true, 'An SSD stores data in chips, not magnetically, so a magnet does nothing to it. Shredding destroys any drive.'],
        ['Run them through the degausser, since it clears every kind of drive', DEST, 'A degausser clears magnetic drives and tapes. An SSD would come out with its data intact.'],
        ['Quick-format them and then bin them', WEAK, 'A quick format leaves the data on the drive, and the bin hands it to anyone.'],
        ['Give them to staff as spare drives, untouched', WEAK, 'The drives still hold the old data, and anyone who plugs one in can read it.']],
      'Degaussing needs a magnetic drive. An SSD stores data in flash chips, so it is shredded, or erased with the maker’s secure-erase tool, instead.'),
    chat('l26-g-private', 'browser-security', 'Joe, Sales', 'I browse job sites in a private window so my manager cannot see it on the company network. Is that safe?',
      'What does private browsing do?', [
        ['It saves no history here, but the network and the sites still see Joe', true, 'Private browsing saves nothing on this computer. The company network and the sites still see the traffic.'],
        ['It hides what Joe does from the company network and from the websites Joe visits', BSET, 'Private browsing does not change what the network or the sites can see.'],
        ['It blocks malware and fake sites from loading', BSET, 'Private browsing has no protection against malware or fake sites.'],
        ['It encrypts everything Joe types so that no one can read it', BSET, 'Encrypting the connection is the job of a secure site, not of a private window.']],
      'Private browsing leaves no history or cookies on this computer after the window closes. It does not hide anything from the network or the sites.'),
    chat('l26-g-pwm', 'browser-security', 'Zed, Finance', 'My password manager always fills in the bank’s sign-in page. Today it filled nothing, so I am about to type the password myself. The page looks the same as ever. I got there from an email link.',
      'What do you tell Zed?', [
        ['Stop: the manager did not know the address, so the page may be fake', true, 'A password manager fills a password only on the address it saved. No fill after an email link is a warning that the page is not the bank’s.'],
        ['The manager is broken, so reinstall it and then sign in to the bank again', PART, 'Reinstalling fixes nothing if the page is a fake, and Zed would type the password into it anyway.'],
        ['It is fine, because the page looks exactly the same as ever', WARN, 'A fake page can look exactly the same. The manager’s check of the address is the better guide.'],
        ['Type the password more slowly, since the manager was slow', WARN, 'The manager was not slow. It did not fill because the address did not match.']],
      'A password manager fills in only on the address it saved, so a page that gets no fill after an email link may be a fake. Stop and check the address.'),
    recall('l26-g-certdest', 'destruction', 'When a vendor destroys or recycles your drives, the paper it hands you as proof has a name. It is what an audit or a law asks to see.', 'Type its name.',
      ['certificate of destruction', 'certificate of recycling', 'destruction certificate', 'certificate of destruction or recycling'], 'It is the certificate of destruction (or of recycling): the vendor’s proof that the drives were destroyed.'),
    item({
      id: 'l26-g-call', strand: 'attacks',
      blocks: [note('Fiona in Purchasing calls the help desk. You answer.')],
      asks: [{ id: 'a', kind: 'exchange', prompt: 'Fiona calls about a phone call Fiona took. What do you say?', form: 'call', from: 'Fiona, Purchasing', detail: 'Incoming call · 2:40 PM', start: 'one',
        turns: {
          one: { lines: [L('f1', 'A man phoned from “IT” and sent me a link. I typed my password into the page. It is probably nothing. Can we skip making a ticket?')], push: 'Fiona wants no ticket, though a stranger may now have Fiona’s password.',
            options: [{ id: 'when', text: 'What did the page look like, and roughly what time did you type your password into it?', goto: 'two' },
              { id: 'skip', text: 'All right, no ticket then. Just tell me if anything odd happens on your account.', end: 'skipped' },
              { id: 'reset', text: 'I will reset your password right now and read you the new one over the phone.', end: 'reset' },
              { id: 'later', text: 'Please change your own password yourself when you have a moment this week.', end: 'later' }] },
          two: { lines: [L('f2', 'It looked like our sign-in page. It has been an hour and nothing has happened. Honestly, skip the ticket.')], push: 'Fiona still wants no ticket, though the password was typed into a page a stranger sent.',
            options: [{ id: 'safe', text: 'A stranger sent that page, so the password is exposed. I will call the number on your record to check it is you, then reset it and log this.', end: 'ok' },
              { id: 'hour', text: 'If nothing has happened in an hour, you are probably safe, so leave the password for now and tell me if anything odd shows up on your account.', end: 'hour' },
              { id: 'nowreset', text: 'Then I will reset it right now and read you the new password over the phone so you can sign in right away.', end: 'reset' }] }
        },
        ends: {
          ok: { ok: true, then: 'A page sent by a stranger who phoned is vishing with a fake sign-in page. The password is in their hands, so it is reset at once, after the desk calls the number on record to check who is on the line, and the incident is written up.' },
          skipped: { ok: false, slip: BRUSH, then: 'The password may already be in a stranger’s hands. Leaving it alone means no reset and no report.' },
          reset: { ok: false, slip: IDCHK, then: 'The reset is right, but not before the desk checks who is on the line by calling the number on record. A caller can be an impersonator.' },
          later: { ok: false, slip: IDLE, then: 'Waiting until “a moment this week” leaves a stolen password working for days.' },
          hour: { ok: false, slip: BRUSH, then: 'A stranger can use a stolen password at any time. An hour without trouble says nothing about the next hour.' } } }],
      reason: 'Fiona typed the password into a page sent by a stranger who phoned. The password counts as stolen, so it is reset at once after the desk calls the number on record to check who is calling, and the incident is written up.' })
  ]);
})();
