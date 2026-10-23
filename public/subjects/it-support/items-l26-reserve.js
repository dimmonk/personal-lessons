// IT Help Desk, lesson 26 "Malware and attacks": questions held in reserve for the weekly review, at least three for each of the five topics (malware-kinds, attacks, malware-removal, destruction, browser-security).
// Facts as in items-l26.js (A+ map Core 2 2.4, 2.5, 2.6, 2.9, 2.11, 3.4). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const KIND = 'wrong-malware', ATK = 'wrong-attack', ORD = 'removal-order', CONN = 'kept-connected', REST = 'restore-left-on', WEAK = 'weak-erase', DEST = 'wrong-destroy', PROOF = 'no-proof',
    WARN = 'trusted-warning', BSET = 'wrong-browser-setting', CAUSE = 'wrong-cause', PART = 'part-first', OPEN = 'open-up', SKIP = 'skipped-step', WIPED = 'windows-wipe', CLOSED = 'closed-early', KEPT = 'kept-app';

  FC.items('it-support', [
    // Pronouns: named ticket people are named or "they" (ruling 22); quick format and full format as in lesson 21 and Microsoft KB 941961.
    // ----- malware-kinds, with the signs and the tools -----
    chat('l26-r-virus', 'malware-kinds', 'Xander, Print shop', 'A coworker gave me a spreadsheet on a USB stick. Now other spreadsheets on my PC will not open, and the same thing has started on theirs.',
      'Which kind of malware fits?', [
        ['A virus, which attaches itself to files and spreads when they are shared', true, 'Trouble that follows a shared file and spreads from one PC to the next is how a virus behaves.'],
        ['A Trojan, which looks like useful software the user installs', KIND, 'Nothing was installed as software. The trouble came with a shared file.'],
        ['A cryptominer, which uses the computer’s power for someone else and slows everything down', KIND, 'A miner slows the computer. It does not stop files opening or follow a shared file.'],
        ['Spyware, which secretly records what the user does', KIND, 'Spyware is quiet. Files that stop opening and a spread to another PC are not its signs.']],
      'A virus attaches itself to a file and spreads when the file is run or shared.'),
    chat('l26-r-boot', 'malware-kinds', 'Ava, Lab', 'A strange message appears before the Windows logo every morning. Antivirus inside Windows finds nothing. The message is back after every restart.',
      'Which kind fits?', [
        ['A boot sector virus, which sits in the part of the drive that starts the computer', true, 'It runs before Windows, so the message comes first and a scan inside Windows does not see it.'],
        ['Fileless malware, which runs in memory using the tools Windows already has built in', KIND, 'Fileless malware works inside Windows. This message appears before Windows loads.'],
        ['Adware, which shows ads in the browser', KIND, 'Adware shows in the browser. This message comes before Windows even starts.'],
        ['A keylogger, which records the letters and numbers that are typed', KIND, 'A keylogger records typing. It does not put a message on the screen at start-up.']],
      'A sign that comes before Windows loads and survives a scan inside Windows points to a boot sector virus.'),
    chat('l26-r-pup', 'malware-kinds', 'Diana, Intake', 'After installing a free zip tool, my browser has a new toolbar and a “PC speed booster” program I never picked. They were on the install screens, but I clicked Next quickly.',
      'What are the extras called?', [
        ['PUPs, potentially unwanted programs bundled with a download', true, 'Extra programs that ride along with a download, and are agreed to on its install screens, are PUPs.'],
        ['A rootkit, which hides other malware deep in the system', KIND, 'The extras are in plain sight, in the browser and in the program list.'],
        ['Ransomware, which locks the user’s files and demands money to open them', KIND, 'No files are locked and nobody has asked for money.'],
        ['A boot sector virus, which sits where the computer starts', KIND, 'Nothing is wrong at start-up. The extras came with a download.']],
      'A toolbar or a “speed booster” that came bundled with a free program is a PUP.'),
    chat('l26-r-fakealert', 'malware-kinds', 'Del, Warehouse', 'My screen suddenly filled with a red page: “Virus detected! Download SecureClean now.” It showed up while I was reading news in the browser. The desk installed Microsoft Defender on this PC.',
      'What is this alert most likely?', [
        ['A false antivirus alert from a web page, not from Defender', true, 'It appeared inside the browser and offers a download of a program the desk never installed. Real alerts come from the installed security program.'],
        ['A real alert from Defender, so download SecureClean', WARN, 'Defender is the installed program, and it does not tell people to download another one.'],
        ['A message from Windows Update about a new patch', CAUSE, 'Windows Update does not tell anyone to download a cleaning program.'],
        ['A sign the drive is failing, so back it up and replace the drive soon', CAUSE, 'A failing drive does not show a red page offering a download.']],
      'An alert in a browser that offers a download of a program the desk never installed is a false antivirus alert. Close the browser and scan with the real security program.'),
    chat('l26-r-update', 'malware-kinds', 'Dolores, Front desk', 'Windows Update fails with an error on my PC every day. Four other PCs in the office updated fine last night. I also noticed that the antivirus is switched off and will not turn on.',
      'What is the worry, and what is the first step?', [
        ['Malware may be blocking updates and security tools, so verify the symptoms first', true, 'Updates failing on one PC only, plus a security tool that will not turn on, are signs of malware blocking them. Verify, then contain.'],
        ['Windows Update is broken, so reinstall Windows today and start again from the beginning', KIND, 'Four other PCs updated fine. Reinstalling is a big step before the symptoms are verified.'],
        ['The update server is down, so wait a week and try again', CAUSE, 'Four other PCs updated last night, so the server is up.'],
        ['The four other PCs are infected and this one is fine', CAUSE, 'Nothing points to the other four. This PC is the one with the odd signs.']],
      'Updates that fail on one PC while others work, together with a security tool that cannot be turned on, suggest malware. The first of the ten steps is to verify.'),

    // ----- attacks -----
    chat('l26-r-ddos', 'attacks', 'Basil, IT', 'Our web shop went down at 2 PM. The logs show thousands of requests a second from computers all over the world.',
      'What is this attack?', [
        ['A DDoS attack, a flood of requests from many computers at once', true, 'Requests from thousands of computers in many places, until the shop cannot answer, is a distributed denial of service.'],
        ['A DoS attack, a flood of requests that comes from one single source', ATK, 'A DoS comes from one source. Here the requests came from computers all over the world.'],
        ['SQL injection, database commands typed into a web form', ATK, 'Nothing was typed into a form. The shop was flooded.'],
        ['Brute force, trying every possible password', ATK, 'Nobody was trying passwords. The shop was flooded with requests.']],
      'A flood from many computers at once is a DDoS. The same flood from one source is a DoS.'),
    chat('l26-r-sqli', 'attacks', 'Jabari, Web team', 'Someone typed a long line of database commands into the search box of our shop, and the page showed every customer’s name and card details.',
      'What is this attack?', [
        ['SQL injection, database commands typed into a web form', true, 'Commands typed into a form that run against the database, so the page shows what it should not, is SQL injection.'],
        ['XSS, a script placed on a page to run in other visitors’ browsers', ATK, 'XSS runs a script in visitors’ browsers. Here the database itself answered.'],
        ['On-path, an attacker between two sides reading what passes', ATK, 'Nobody sat between two sides. The attacker typed into the shop’s own search box.'],
        ['A zero-day, an attack on a flaw nobody has a fix for yet', ATK, 'A zero-day is about a flaw with no fix. This one is about typing commands into a form.']],
      'Database commands typed into a web form that the database then runs is SQL injection.'),
    chat('l26-r-dict', 'attacks', 'Warren, Admin', 'The log shows four thousand failed sign-in tries on the account “admin” in one hour. Each used a common password such as “Password1” or “letmein”.',
      'What is this attack?', [
        ['A dictionary attack, trying common passwords from a list', true, 'Tries made with common passwords from a list are a dictionary attack.'],
        ['A brute-force attack, trying every possible password', ATK, 'Brute force tries every possible combination. These tries were common passwords from a list.'],
        ['A DoS attack, flooding the sign-in until it cannot answer', ATK, 'The sign-in kept answering, and each try was a password guess.'],
        ['An insider threat, someone with real access misusing it', ATK, 'The tries were failures from outside the account, not a person with real access.']],
      'Many failed tries with common words and passwords are a dictionary attack. Trying every possible combination is brute force.'),
    chat('l26-r-supply', 'attacks', 'Jade, IT manager', 'An update from a trusted accounting vendor went out to all our PCs. It carried hidden code that opened a way into our network. The vendor had been breached first.',
      'What is this attack?', [
        ['A supply chain attack, coming in through a trusted supplier’s software', true, 'The attacker went through the vendor, whose update everyone trusted.'],
        ['A zero-day, an attack on a flaw that nobody has a fix for yet in the software', ATK, 'No unfixed flaw is described. The update itself carried the hidden code.'],
        ['An insider threat, someone with real access misusing it', ATK, 'The hidden code came from the vendor’s update, not from someone inside Jade’s firm.'],
        ['An evil twin, a fake network with the real one’s name', ATK, 'Nothing here is a network. It is an update.']],
      'An attack that arrives through a trusted supplier or its software update is a supply chain attack.'),

    // ----- malware-removal -----
    chat('l26-r-quar', 'malware-removal', 'Alfie, Tech', 'You verified that Oliver’s PC has malware. A colleague wants to start the scan right away while the PC stays on the office network.',
      'What comes first, and why?', [
        ['Quarantine it: take it off the network so it cannot spread or send data out', true, 'Step 2 comes before any cleaning. A connected infected PC can spread malware and send data out while you work on it.'],
        ['Update the scanner first, because the update needs the network', ORD, 'Updating is step 5. If the PC is cut off, fetch the update on a clean computer.'],
        ['Start the scan now, since removing the malware is the fastest cure for the PC', CONN, 'The scan takes time, and the PC stays connected the whole while.'],
        ['Reinstall Windows now, since any infection means a reinstall', ORD, 'Reinstalling is step 7, and only when the scan cannot clean the PC.']],
      'After verifying comes quarantine: cut the infected computer off from the network and drives before any cleaning begins.'),
    chat('l26-r-why-update', 'malware-removal', 'Cecilia, New tech', 'My lead says to update the anti-malware first, even though the scanner was updated last month. Why?',
      'What is the reason?', [
        ['A scanner only knows the malware it has been taught, and new kinds appear often', true, 'The update teaches the scanner about newer malware. A month-old scanner can miss it.'],
        ['The update makes the scan run faster, so the cleanup ends sooner', CAUSE, 'Speed is not the reason. The reason is what the scanner can recognize.'],
        ['The update turns System Restore off, which the cleanup needs', REST, 'System Restore is turned off in step 3 by hand. Updates do not do it.'],
        ['The update removes the malware by itself, so the scan afterwards is only a double check of the update', CAUSE, 'An update only teaches the scanner. The scan is what finds and removes.']],
      'Step 5 comes before the scan because a scanner only finds what it has been taught to recognize.'),
    chat('l26-r-reimage', 'malware-removal', 'Eve, Legal', 'Three scans in safe mode removed what they found, but the same program is back after every restart. The tech cannot trust the system any more.',
      'Which step comes now?', [
        ['Reimage or reinstall: erase the system and put back a clean copy, once Eve’s files are saved', true, 'When scans cannot clear the malware, step 7 erases the system and puts back a clean copy, after the user’s files are saved or confirmed backed up.'],
        ['Schedule scans and run updates, so that it is found sooner next time', ORD, 'Scheduling scans comes after the computer is clean. It is not clean yet.'],
        ['Educate the user, then close the ticket', CLOSED, 'Education is the last step, and closing waits for the user to confirm that it works.'],
        ['Enable System Restore and create a restore point', ORD, 'The restore point is made after the cleanup, so it saves a clean state. Not yet.']],
      'When scans keep failing to clear the malware, the system cannot be trusted, and step 7 reimages or reinstalls it.'),
    chat('l26-r-point', 'malware-removal', 'Cecilia, New tech', 'After the cleanup, why do we turn System Restore on and make a new restore point?',
      'What is the reason?', [
        ['So the saved state is a clean one that a later rollback can return to', true, 'A restore point made after the cleanup saves a clean computer, which is a safe place to roll back to.'],
        ['So the restore point can scan the system for leftover malware', CAUSE, 'A restore point does not scan anything. It saves the state of the system.'],
        ['So the old restore points that held the malware are available again to use', REST, 'The old ones were cleared when System Restore was turned off. Bringing them back would bring the malware back.'],
        ['So the antivirus has room to store its updates', CAUSE, 'Updates do not depend on restore points.']],
      'Step 9 comes after the cleanup, so the new restore point holds a clean system.'),

    // ----- destruction -----
    chat('l26-r-dead', 'destruction', 'Cynthia, Accounts', 'A hard drive with payroll files died. It will not power on, so nothing can be wiped. The company will not reuse it.',
      'What now?', [
        ['Destroy it physically, for example by shredding or drilling', true, 'A drive that cannot be wiped and will not be reused is destroyed physically.'],
        ['Wipe it with a utility when it next powers up', WEAK, 'It will not power on, and waiting leaves the payroll data on it.'],
        ['Quick-format it and send it for recycling with the other old drives', WEAK, 'A quick format cannot run on a dead drive, and it would leave the data in place if it could.'],
        ['Put it in a drawer, since a dead drive cannot be read', OPEN, 'A drive that will not power on still holds its data on the platters, so it is not safe.']],
      'A dead drive cannot be wiped, so its data is protected by destroying it: shredding, drilling, degaussing or incineration.'),
    chat('l26-r-format', 'destruction', 'Elijah, Intern', 'I formatted the drive in Windows with the quick option before selling the laptop. Is the old data gone?',
      'What do you tell Elijah?', [
        ['No: a quick format only clears the list of files, so wipe the drive', true, 'A quick (standard) format leaves the data on the drive. A wipe overwrites it, and so does a full format, which writes zeros.'],
        ['Yes: a format erases every file and all the data from the drive for good', WEAK, 'A quick format only clears the list of files. The data stays on the drive.'],
        ['Yes, as soon as the laptop has been restarted', WEAK, 'A restart changes nothing on the drive.'],
        ['Yes, if the Recycle Bin is emptied too', WEAK, 'The Recycle Bin holds deleted files. Emptying it does not overwrite the drive.']],
      'A quick (standard) format only clears the list of files. Overwrite the whole drive, with a wipe tool or a full format that writes zeros, before it leaves the company.'),
    chat('l26-r-trash', 'destruction', 'Marshall, Office', 'Our old monitors, batteries and drives are going out with the ordinary trash on Friday.',
      'What is the problem?', [
        ['Rules cover the data and how electronics are thrown out, so use a recycler with a certificate', true, 'Laws cover how data must be destroyed, and environmental rules cover how electronics are thrown out.'],
        ['Nothing, since a drive in a bin cannot be read by anyone', OPEN, 'A drive in a bin can be taken out and read, and the data is still on it.'],
        ['Only the drives matter, so the monitors and batteries can go in the bin with the ordinary trash', SKIP, 'Environmental rules cover monitors and batteries too.'],
        ['Only the data matters, so it is enough to delete the files first', WEAK, 'Deleting files leaves the data on the drive, and the other equipment still needs recycling.']],
      'Two groups of rules apply: how the data must be destroyed, and how electronics are thrown out. A recycler that gives a certificate covers both.'),

    // ----- browser-security -----
    chat('l26-r-ext', 'browser-security', 'Ethan, Marketing', 'A coupon extension I installed asks to “read and change all data on all websites”. Do I need it?',
      'What do you advise?', [
        ['Remove it, since an extension that can read every site can see what Ethan types', true, 'Extensions add features but can see what happens on pages. One that wants access to every site is not worth the risk for coupons.'],
        ['Keep it, because every extension wants that much access to every website Ethan visits', KEPT, 'Extensions differ. A coupon tool that wants every site’s data is asking for far more than it needs.'],
        ['Keep it, and use private browsing so it cannot see anything', BSET, 'Private browsing does not stop an extension from seeing a page.'],
        ['Keep it, and clear the cache every day', BSET, 'Clearing the cache does not change what the extension can see.']],
      'An extension can see and change what happens on pages. Keep few, from the official store, and remove ones that want more than they need.'),
    chat('l26-r-sync', 'browser-security', 'Mina, Volunteer', 'I signed in to my browser on the library’s shared PC to get my bookmarks. Is that a problem?',
      'What do you tell Mina?', [
        ['Yes: sync copies passwords and history there, so sign out and clear the data', true, 'Sign-in and sync put Mina’s bookmarks and passwords on a computer anyone can use afterwards.'],
        ['No: sync only copies bookmarks, so nothing private is shared with the next person', BSET, 'Sync can also copy passwords and history.'],
        ['No, as long as Mina closes the window when leaving', BSET, 'Closing the window does not remove what sync copied.'],
        ['Yes, and Mina should turn on the pop-up blocker', BSET, 'The pop-up blocker does not affect what sync copied.']],
      'Sign-in and sync copy bookmarks, passwords and history. On a shared computer, sign out and clear the browsing data afterwards.'),
    chat('l26-r-dns', 'browser-security', 'Louisa, IT', 'On café Wi-Fi, a customer’s lookups for the bank’s site went to a fake page. We want the browser to protect the lookups themselves.',
      'Which setting does that?', [
        ['Secure DNS, which encrypts the lookup so the network cannot change it', true, 'Secure DNS encrypts the lookup of a site’s name, so the network cannot send the browser somewhere else.'],
        ['The pop-up blocker, which stops extra windows from opening on the page', BSET, 'The pop-up blocker has nothing to do with lookups.'],
        ['The ad blocker, which stops ads from loading', BSET, 'An ad blocker does not protect the lookup of a site’s name.'],
        ['Private browsing, which saves no history on the computer', BSET, 'Private browsing does not change how the name is looked up.']],
      'Secure DNS encrypts the lookup of a site’s name, so someone on the network cannot change where it leads.'),
    chat('l26-r-proxy', 'browser-security', 'Uma, Studio', 'After a free download, every website goes through a proxy setting I never made. Pages are slow and extra ads appear on them.',
      'What is the setting, and what do you do?', [
        ['A proxy sends traffic through another server, so remove the unknown one', true, 'A proxy is a server the browser sends its traffic through. One nobody chose can read and change what passes, which fits the extra ads.'],
        ['A proxy blocks ads, so it is helping the user and can stay in place for now', KEPT, 'The ads are being added, not blocked.'],
        ['A proxy speeds up the browser, so it can stay', KEPT, 'The pages are slower, and nobody chose the proxy.'],
        ['A proxy is the browser’s cache, so clear it', PART, 'The cache is a different thing. Clearing it leaves the proxy in place.']],
      'A proxy relays the browser’s traffic through another server. An unknown one is a sign of trouble and is removed.')
  ]);
})();
