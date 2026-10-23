// IT Help Desk, lesson 26 "Malware and attacks": the eight questions of the check, all new, no help. Facts as in items-l26.js (A+ map Core 2 2.4, 2.5, 2.6, 2.9, 2.11, 3.4). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const note = text => ({ kind: 'prose', text });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, prompt, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words, show: true }],
    asks: [{ id: 'a', kind: 'text', prompt, accept }], deciding: [], reason });
  const KIND = 'wrong-malware', ATK = 'wrong-attack', BSET = 'wrong-browser-setting', WIPED = 'windows-wipe', DEST = 'wrong-destroy', NOSPLIT = 'no-split', WEAKSPOT = 'wrong-weakness';

  FC.items('it-support', [
    chat('l26-k-stalk', 'malware-kinds', 'Beth, Reception', 'My ex-boyfriend knows where I go and what I text. I found an app on my phone that I never installed. It has no icon on the home screen.',
      'Which kind of malware is this?', [
        ['Stalkerware, spyware placed to track one person', true, 'An unknown hidden app, and someone close to Beth who knows where Beth goes and what Beth texts, are the signs of stalkerware.'],
        ['Adware, which shows ads the user never asked for', KIND, 'Adware shows ads. Nothing here is an ad, and it does not explain how anyone knows where Beth goes.'],
        ['A cryptominer, which earns money from the phone’s power', KIND, 'A miner drains the battery and heats the phone. It does not tell anyone where Beth goes.'],
        ['Ransomware, which locks files and demands payment', KIND, 'Nothing is locked and nobody has asked for money.']],
      'A hidden app plus someone who knows Beth’s movements and messages is stalkerware: spyware placed to track one person. This is also a safety matter: the desk passes it to the security team and does not warn whoever placed the app.'),
    chat('l26-k-evil', 'attacks', 'Rhys, Sales', 'At the airport I joined “AirportFree-WiFi”. Then I saw a second network with exactly the same name. The one I joined asked me to sign in with my work email on a page I had never seen.',
      'What attack is this likely to be?', [
        ['An evil twin, a fake network that copies the real one’s name', true, 'Two networks with one name, and a sign-in page nobody has seen, are the signs of an evil twin.'],
        ['A dictionary attack, trying common passwords from a list', ATK, 'A dictionary attack guesses passwords at a sign-in. Nothing was guessed here.'],
        ['A DoS attack, flooding one service until it cannot answer', ATK, 'Rhys’s connection worked. Nothing was flooded.'],
        ['SQL injection, typing database commands into a web form', ATK, 'SQL injection targets a website’s database. This is about the network Rhys joined.']],
      'A second network with the real one’s name that wants a work sign-in is an evil twin. An on-path attacker can read what passes through it.'),
    item({
      id: 'l26-k-order', strand: 'malware-removal',
      blocks: [note('A Windows laptop is quarantined. You have verified the symptoms, turned System Restore off and started the cleanup. Put the next five steps in order.')],
      asks: [{ id: 'a', kind: 'order', prompt: 'Put the next five steps in order.', steps: [
        { id: 'u1', text: 'Update the anti-malware software.' },
        { id: 'u2', text: 'Scan and remove, using safe mode.' },
        { id: 'u3', text: 'Reimage or reinstall, if the scan cannot clean it.' },
        { id: 'u4', text: 'Schedule scans and run updates.' },
        { id: 'u5', text: 'Enable System Restore and create a restore point.' }],
        right: ['u1', 'u2', 'u3', 'u4', 'u5'], then: 'Update first, because a scanner only knows the malware it has been taught. Then scan. Reimage only if the scan cannot clean it. Scans are scheduled once the computer is clean, and the restore point is made last so it saves a clean state.' }],
      reason: 'Update the scanner, scan, reimage if needed, schedule scans, then turn System Restore on with a new restore point. Each step waits for the one before it to be safe.' }),
    recall('l26-k-vish', 'attacks', 'A phishing attack carried out by a phone call, where the caller pretends to be a bank or the help desk, has its own name.', 'Type the name.',
      ['vishing', 'voice phishing'], 'It is vishing, phishing by voice. Smishing is by text message, and QR code phishing starts from a scanned code.'),
    chat('l26-k-degauss', 'destruction', 'Andy, Facilities', 'Our recycler lets us use their degausser, a machine with a very strong magnet. We have four kinds of storage to get rid of.',
      'Which of these will the degausser actually clear?', [
        ['A hard drive, which stores its data magnetically', true, 'A hard drive stores data as magnetic marks on spinning platters, and a strong magnet scrambles them.'],
        ['A solid-state drive, which stores its data in flash chips', DEST, 'Chips do not store data magnetically, so a magnet leaves an SSD’s data in place.'],
        ['A USB flash drive, which stores its data in flash chips', DEST, 'A flash drive stores data in chips, not magnetically, so a magnet does nothing to it.'],
        ['A DVD, which stores its data as marks read by a laser', DEST, 'A disc is read by a laser, and a magnet does nothing to it. It can be shredded.']],
      'Degaussing works only on magnetic storage, such as hard drives and tapes. Flash chips and discs are shredded or otherwise destroyed.'),
    chat('l26-k-cache', 'browser-security', 'Lola, Web team', 'After we updated the price page, some people still see the old prices. My other computer shows the new ones, but this one shows the old page every time.',
      'Which browser setting fixes this?', [
        ['Clear the browser’s cache, its saved copies of pages, for that site', true, 'The cache keeps copies of pages so they load faster, and an old copy can stay. Clearing it makes the browser fetch the new page.'],
        ['Turn on the pop-up blocker so that old pages can no longer open', BSET, 'The pop-up blocker stops extra windows. It has no effect on a saved copy of a page.'],
        ['Turn on a proxy so the browser fetches every page from another server', BSET, 'A proxy sends traffic through another server. It does not clear a saved copy.'],
        ['Turn off the ad blocker so older pages are replaced', BSET, 'An ad blocker blocks ads. It does not replace a saved copy of a page.']],
      'A page that shows the old version on one browser while another computer shows the new one is a saved copy. Clearing the cache makes the browser fetch it again.'),
    chat('l26-k-redirect', 'browser-security', 'Thelma, Admin', 'Whenever I search from the address bar in Chrome, I land on a search site I never chose, full of ads. I have not tried another browser.',
      'Which test splits the causes at the least cost?', [
        ['Search the same words in a different browser on the same PC', true, 'If the other browser does not redirect, the cause is in Chrome, such as an extension. If it does, the cause is in the system, such as a changed proxy.'],
        ['Clear the cache and cookies in Chrome and search the same words again', NOSPLIT, 'Clearing the cache is a fix, not a test. If the redirect stays, nothing is ruled out.'],
        ['Reinstall Chrome from the maker’s site and search again', NOSPLIT, 'A reinstall is a bigger fix that does not tell Chrome from the system if it fails.'],
        ['Reinstall Windows from scratch and search again', WIPED, 'Reinstalling Windows is the biggest step, and a search in another browser answers the question in a minute.']],
      'Redirection can come from the browser (an extension or a search setting) or from the system (a changed proxy). Another browser on the same PC splits the two.'),
    chat('l26-k-eol', 'attacks', 'Salma, Accountant', 'Our accounting PC runs a Windows version whose maker stopped sending security fixes last year. Nothing is wrong yet, but our accounting software needs it.',
      'What kind of weak spot is this?', [
        ['End of life (EOL): the maker no longer fixes new holes', true, 'The maker has stopped sending fixes, so every new hole stays open. That is end of life.'],
        ['Unpatched: fixes exist but have not been installed', WEAKSPOT, 'Here no fixes are being made, so there is nothing to install.'],
        ['BYOD: a personal device on the company network', WEAKSPOT, 'The PC belongs to the firm. Nothing says it is a personal device.'],
        ['Non-compliant: the PC breaks the company’s own rules', WEAKSPOT, 'The ticket says nothing about a company rule. The problem is the maker’s lack of fixes.']],
      'A system the maker no longer sends fixes for is end of life. An unpatched system could still be fixed by installing updates that exist.')
  ]);
})();
