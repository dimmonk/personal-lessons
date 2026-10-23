// IT Help Desk, lesson 26: Malware and attacks (part malware). Core 2 objectives 2.4 (malware kinds and the tools against them), 2.5 (social engineering, threats, vulnerabilities), 2.6 (the ten-step SOHO
// malware removal, in order), 2.9 (data destruction and disposal), 2.11 (browser security settings) and 3.4 (PC and browser security symptoms) of the A+ map (docs/research/it-support-aplus.md).
// The chain this lesson names: the way in (a click, a download, an unfixed flaw, a tricked person) -> the kind of malware -> the sign on the PC; then the response in three parts, contain (steps 1 to 4), clean
// (steps 5 to 7), keep clean (steps 8 to 10). Research: IT24 (the exam tests troubleshooting as scenarios: the signs are asked as tickets), IT25 to IT27 (self-quizzing with feedback, spaced, beats rereading: names,
// tools and settings are asked from memory), IT4 and IT8 (the worked ticket rules out the favorite cause, memory, with the cheapest test, Task Manager), IT11 (confirm with the user, write the note, then close) and IT17
// (say the story back; rulings 6 and 11 of rulings-l1-8.md: confirm who is calling by the desk's own check before any reset). The ten steps are taught with the reason each sits where it does and asked as an `order`
// question (a full run, a middle run and a tail with a step that does not belong). Plan: docs/subjects/it-support/plan.md, lesson 26.
// Strands: malware-kinds, attacks, malware-removal, destruction, browser-security. One worked ticket (Priya's slow laptop); a first group of five with help; a second of eleven; a third of ten mixed with lessons 5 and 23; the
// check: eight new questions, 7 of 8 to pass.
FC.lesson('it-support', {
  id: 'l26', part: 'malware', title: 'Malware and attacks', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-23', change: 'First version, built to the plan (the kinds of malware and the tools against them, social engineering and attacks, the ten removal steps in order with the reason for each place, wiping and destroying drives, browser security settings, and the signs on a PC and in a browser).' }],
  why: [
    'At 9:05 a user writes that every file in her Documents folder now ends in .locked and a note wants $800. At 9:20 another says a man from “the bank” phoned and wants the code just texted to him. At 9:40 a third says his laptop is slow and the fan never stops. Each ticket gives you only a sign.',
    'Here you learn to work back from the sign to the kind of malware or attack, to run the ten steps that clean a computer in the order that keeps each step safe, and to wipe drives and configure browsers safely.'],
  flow: [
    { title: 'From the way in to the sign',
      show: [{ kind: 'prose', text: [
        'Malware is software built to harm: to damage files, spy, lock the computer, or use it for someone else. It gets in by a way in: a click on a fake email, a download that is not what it says, a flaw nobody has fixed, or a person who is tricked. Each kind leaves its own signs. You work back from the sign to the kind and the way in.'] }] },
    { title: 'The kinds of malware, by the signs they leave',
      show: [{ kind: 'document', form: 'table', title: 'Twelve kinds', head: ['Kind', 'What it does', 'What the ticket shows'], rows: [
        { id: 'k1', cells: ['Virus', 'Attaches to a file and spreads when it is shared', 'Files damaged after a shared file was opened'] },
        { id: 'k2', cells: ['Trojan', 'Looks like useful software and lets something else in', 'Trouble began after a “free” tool'] },
        { id: 'k3', cells: ['Rootkit', 'Hides itself and other malware deep in the system', 'Antivirus finds nothing, yet signs go on'] },
        { id: 'k4', cells: ['Boot sector virus', 'Sits where the computer starts, so runs before Windows', 'A strange message before the Windows logo'] },
        { id: 'k5', cells: ['Fileless malware', 'Runs in memory using Windows’ own tools, leaving no file', 'No unknown file, but PowerShell acts oddly'] },
        { id: 'k6', cells: ['Ransomware', 'Scrambles (encrypts) files and demands payment', 'Files renamed and locked; a ransom note'] },
        { id: 'k7', cells: ['Spyware', 'Secretly records what the user does and sends it out', 'Accounts used by others'] },
        { id: 'k8', cells: ['Keylogger', 'Records every key typed, in software or a small plug', 'Passwords used by strangers'] },
        { id: 'k9', cells: ['Stalkerware', 'Spyware placed to track one person', 'Someone knows where the user goes'] },
        { id: 'k10', cells: ['Cryptominer', 'Uses the computer’s power to earn cryptocurrency for someone else', 'Slow, loud fan, short battery'] },
        { id: 'k11', cells: ['Adware', 'Shows ads nobody asked for', 'Pop-ups, a changed home page'] },
        { id: 'k12', cells: ['PUP (potentially unwanted program)', 'An extra program bundled with a download', 'New toolbars the user never chose'] }] }] },
    { title: 'The tools that find, block and stop malware',
      show: [{ kind: 'document', form: 'table', title: 'What each one does', head: ['Tool', 'What it does'], rows: [
        { id: 't1', cells: ['Antivirus, anti-malware', 'Scan for known malware and block it; anti-malware covers the wider list. Many products do both'] },
        { id: 't2', cells: ['Software firewall', 'Allows or blocks what programs send and receive on the network'] },
        { id: 't3', cells: ['Email security gateway', 'Filters mail before it reaches the inbox'] },
        { id: 't4', cells: ['EDR', 'Software that records what each computer does and flags odd behavior'] },
        { id: 't5', cells: ['MDR', 'An outside team does the watching and responding'] },
        { id: 't6', cells: ['XDR', 'The same across computers, email, network and cloud'] },
        { id: 't7', cells: ['User education', 'Teaches people to spot phishing before they click'] },
        { id: 't8', cells: ['Recovery environment', 'A small Windows to start from, so a scan runs from outside the infected one'] },
        { id: 't9', cells: ['Reinstalling the system', 'The last resort when it cannot be trusted'] }] }] },
    { title: 'Tricking the person: social engineering',
      show: [{ kind: 'prose', text: ['Social engineering tricks a person instead of breaking a machine. Phishing is a message that pretends to be from someone trusted.'] },
      { kind: 'document', form: 'table', title: 'Ten ways to trick a person', head: ['Name', 'How it is done'], rows: [
        { id: 's1', cells: ['Phishing', 'An email to many people with a link to a fake page'] },
        { id: 's2', cells: ['Vishing', 'Phishing by voice: a phone call'] },
        { id: 's3', cells: ['Smishing', 'Phishing by text message'] },
        { id: 's4', cells: ['QR code phishing', 'A scanned QR code leads to a fake site'] },
        { id: 's5', cells: ['Spear phishing', 'Written for one person, using details about them'] },
        { id: 's6', cells: ['Whaling', 'Spear phishing aimed at senior leaders'] },
        { id: 's7', cells: ['Shoulder surfing', 'Watching a screen or keyboard from behind'] },
        { id: 's8', cells: ['Tailgating', 'Following an authorized person through a door'] },
        { id: 's9', cells: ['Impersonation', 'Pretending to be IT, a driver, the boss'] },
        { id: 's10', cells: ['Dumpster diving', 'Searching the trash for information'] }] }] },
    { title: 'Attacks on systems, and weak spots',
      show: [{ kind: 'document', form: 'table', title: 'Thirteen attacks and threats', head: ['Name', 'What happens'], rows: [
        { id: 'a1', cells: ['DoS', 'One source floods a service until it cannot answer'] },
        { id: 'a2', cells: ['DDoS', 'The same flood from many computers (a botnet)'] },
        { id: 'a3', cells: ['Evil twin', 'A fake Wi-Fi network with the real one’s name'] },
        { id: 'a4', cells: ['Zero-day', 'An attack on a flaw with no fix yet'] },
        { id: 'a5', cells: ['Spoofing', 'Faking who a message comes from'] },
        { id: 'a6', cells: ['On-path', 'An attacker between two sides reads or changes what passes'] },
        { id: 'a7', cells: ['Brute force', 'Trying every possible password'] },
        { id: 'a8', cells: ['Dictionary attack', 'Trying common passwords from a list'] },
        { id: 'a9', cells: ['Insider threat', 'Someone with real access misuses it'] },
        { id: 'a10', cells: ['SQL injection', 'Database commands typed into a web form'] },
        { id: 'a11', cells: ['XSS (cross-site scripting)', 'A script on a web page runs in other visitors’ browsers'] },
        { id: 'a12', cells: ['BEC (business email compromise)', 'A business email requests a money transfer'] },
        { id: 'a13', cells: ['Supply chain', 'The attack comes through a trusted supplier or its update'] }] },
      { kind: 'prose', text: [
        'A weak spot is a vulnerability. Five: non-compliant (breaks company rules), unpatched (fixes not installed), unprotected (no antivirus or firewall), end of life, or EOL (the maker sends no more fixes), and BYOD, bring your own device (a personal device on the company network).'] }] },
    { title: 'Signs on a PC and in a browser',
      show: [{ kind: 'document', form: 'table', title: 'The sign, the usual cause, the cheapest test', head: ['Sign', 'Usual cause', 'Cheapest test'], rows: [
        { id: 'p1', cells: ['No network, others fine', 'Malware changed network settings, such as a proxy', 'Does a phone on the same network work?'] },
        { id: 'p2', cells: ['Desktop alert: “You are infected”', 'A false antivirus alert from a web page', 'Does it come from the desk’s security program?'] },
        { id: 'p3', cells: ['Files renamed, missing or locked', 'Ransomware or other malware', 'Look for a note; check the backup'] },
        { id: 'p4', cells: ['Unwanted Windows notifications', 'A site the user allowed to send them', 'Which site? See the browser’s notification settings'] },
        { id: 'p5', cells: ['Windows will not update', 'Malware blocking updates, or a plain failure', 'Do other PCs update?'] },
        { id: 'p6', cells: ['Pop-ups on every page', 'Adware or a bad extension', 'Same in another browser?'] },
        { id: 'p7', cells: ['A certificate warning', 'A fake site, someone on the path, or the PC’s clock', 'Every site, or one? Check the clock'] },
        { id: 'p8', cells: ['Searches sent elsewhere (redirection)', 'Malware, a bad extension, or a changed proxy', 'Try another browser'] },
        { id: 'p9', cells: ['A slow browser', 'Too many extensions, or a cryptominer', 'What uses the processor in Task Manager?'] }] }] },
    { title: 'The ten steps of malware removal, and why each sits where it does',
      show: [{ kind: 'document', form: 'table', title: 'Contain it (1 to 4), clean it (5 to 7), keep it clean (8 to 10)', head: ['Step', 'Why it sits here'], rows: [
        { id: 'r1', cells: ['1. Investigate and verify the symptoms', 'Be sure it is malware before you disrupt the user'] },
        { id: 'r2', cells: ['2. Quarantine the infected computer', 'Cut it off so it cannot spread or send data out'] },
        { id: 'r3', cells: ['3. Disable System Restore (Windows Home)', 'Old restore points may hold the malware; a scan cannot clean them'] },
        { id: 'r4', cells: ['4. Remediate the infected systems', 'Contained, so start the cleanup; steps 5 to 7 are how'] },
        { id: 'r5', cells: ['5. Update the anti-malware software', 'A scanner only knows what it has been taught'] },
        { id: 'r6', cells: ['6. Scan and remove (safe mode, preinstallation environment)', 'Safe mode loads only what Windows needs; the preinstallation environment is a small Windows started from outside'] },
        { id: 'r7', cells: ['7. Reimage or reinstall', 'If the scan cannot clear it, put back a clean copy'] },
        { id: 'r8', cells: ['8. Schedule scans and run updates', 'Worth setting only once it is clean'] },
        { id: 'r9', cells: ['9. Enable System Restore and create a restore point', 'After the cleanup, so the saved state is clean'] },
        { id: 'r10', cells: ['10. Educate the end user', 'Last: the computer is safe, and the way in can be shown'] }] }] },
    { title: 'Wiping and destroying drives',
      show: [{ kind: 'document', form: 'table', title: 'Eight ways to deal with a drive', head: ['Method', 'What it does', 'Use it when'], rows: [
        { id: 'w1', cells: ['Wipe (erase)', 'Overwrites all of the drive', 'It will be reused or given away'] },
        { id: 'w2', cells: ['Low-level format', 'Writes over the whole drive', 'It will be reused'] },
        { id: 'w3', cells: ['Standard format', 'Clears the list of files; data often recoverable', 'Never alone, when data matters'] },
        { id: 'w4', cells: ['Drilling', 'Holes through the platters', 'It will not be reused'] },
        { id: 'w5', cells: ['Shredding', 'A machine cuts the drive to pieces', 'It will not be reused'] },
        { id: 'w6', cells: ['Degaussing', 'A strong magnet scrambles magnetic drives and tapes', 'Hard drives and tapes only, never SSDs'] },
        { id: 'w7', cells: ['Incineration', 'Burning the drive', 'It will not be reused'] },
        { id: 'w8', cells: ['Third-party vendor', 'Destroys or recycles for you and gives a certificate of destruction', 'You need proof, or have many drives'] }] },
      { kind: 'prose', text: [
        'Laws on health, money and customer records say how data must be destroyed, and environmental rules keep electronics out of the ordinary trash.'] }] },
    { title: 'Browser security settings',
      show: [{ kind: 'document', form: 'table', title: 'Twelve settings and what each is for', head: ['Setting', 'What it does'], rows: [
        { id: 'b1', cells: ['Trusted sources and hashing', 'Download from the maker’s own site. A hash is a fingerprint of a file; if it matches the maker’s, the file is unchanged'] },
        { id: 'b2', cells: ['Updates (patching)', 'Close known holes'] },
        { id: 'b3', cells: ['Extensions and plug-ins', 'Add features but can see your pages; keep few, from the official store'] },
        { id: 'b4', cells: ['Password manager', 'Fills a password only on the saved address, so not on a fake page'] },
        { id: 'b5', cells: ['Valid certificates', 'The padlock shows who the site is; a warning means stop'] },
        { id: 'b6', cells: ['Pop-up blocker', 'Blocks extra windows; leave it on'] },
        { id: 'b7', cells: ['Clearing data and cache', 'Removes history, cookies and saved pages; fixes old pages'] },
        { id: 'b8', cells: ['Private browsing', 'Saves no history here; the network and sites still see you'] },
        { id: 'b9', cells: ['Sign-in and sync', 'Copies passwords between devices; not on shared computers'] },
        { id: 'b10', cells: ['Ad blocker', 'Blocks ads, including ones that carry malware'] },
        { id: 'b11', cells: ['Proxy', 'A server the traffic goes through; an unknown one is trouble'] },
        { id: 'b12', cells: ['Secure DNS', 'Encrypts the lookup of a site’s name'] }] }] },
    { title: 'Deleting the one file the alert names',
      show: [{ kind: 'prose', tone: 'wrong', text: [
        '“The alert names a file. Delete it, run a quick scan while the laptop stays online, and close the ticket.”',
        'This skips the first four steps. Nobody verified the alert, which may be fake. The laptop stays on the network, so malware can spread. A scan with System Restore on can miss copies in old restore points. The ticket closes before the user confirms. Work the ten steps in order.'] }] },
    { worked: 'l26-w-priya' },
    { set: { items: ['l26-p-ransom', 'l26-p-phish', 'l26-p-first', 'l26-p-wipe', 'l26-p-hash'], order: 'listed', support: { shown: true } } },
    { set: { items: ['l26-q-tailgate', 'l26-q-bec', 'l26-q-keylog', 'l26-q-root', 'l26-q-order', 'l26-q-restore', 'l26-q-vendor', 'l26-q-cert', 'l26-q-pop', 'l26-q-zero', 'l26-q-miner'], order: 'shuffle' } },
    { set: { items: ['l26-g-trojan', 'l26-g-fileless', 'l26-g-mdr', 'l26-g-whale', 'l26-g-tail', 'l26-g-ssd', 'l26-g-private', 'l26-g-pwm', 'l26-g-certdest', 'l26-g-call'], order: 'shuffle', mix: { from: ['l5', 'l23'], share: 0.3 } } }
  ],
  check: {
    items: ['l26-k-stalk', 'l26-k-evil', 'l26-k-order', 'l26-k-vish', 'l26-k-degauss', 'l26-k-cache', 'l26-k-redirect', 'l26-k-eol'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
