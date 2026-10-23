// IT Help Desk, lesson 18 "Phones, tablets and laptops": the six new questions of the check (one on parts, one on connectors, two on connections and company
// management, two on securing phones). Facts as in items-l18.js (A+ map Core 1 1.1 to 1.3; Core 2 2.8, 4.4). Invented people.
(() => {
  const msg = (form, from, detail, lines) => ({ kind: 'message', form, from, detail, lines: lines.map(([id, text]) => ({ id, text })) });
  const opt = ([text, mark, then], i) => ({ id: 'o' + (i + 1), text, ...(mark === true ? { ok: true } : { slip: mark }), ...(then ? { then } : {}) });
  const ask = (prompt, rows, extra = {}) => ({ id: 'a', kind: 'choose', prompt, shuffle: true, options: rows.map(opt), ...extra });
  const item = spec => ({ facets: {}, ...spec });
  const chat = (id, strand, from, text, prompt, rows, reason) => item({ id, strand,
    blocks: [msg('chat', from, 'Chat with the help desk', [['m1', text]])], asks: [ask(prompt, rows)], deciding: ['m1'], reason });
  const recall = (id, strand, words, accept, reason) => item({ id, strand, blocks: [{ kind: 'spoken', text: words }],
    asks: [{ id: 'say', kind: 'text', prompt: 'Type your answer.', accept }], reason });
  const SAFE = 'unsafe-open', WIPE = 'wipe-first', POL = 'wrong-policy', SWITCH = 'wrong-switch', PART = 'part-first', NOSPLIT = 'no-split', CAUSE = 'wrong-cause',
    LOCK = 'weak-screen-lock', CAP = 'ignored-cap', LINK = 'wrong-link';

  FC.items('it-support', [
    chat('l18-k-battery', 'mobile-parts', 'Lena, Planning',
      'My laptop shuts off about ten minutes after I unplug it. The battery screen says the battery is worn. The charger works and the laptop runs fine plugged in. The battery is inside the case.',
      'What is the right step?', [
        ['Power off, unplug the charger, disconnect the old battery, then replace it', true, 'Worn, and fine on the charger, points at the battery. The old one is disconnected before anything else, so no power reaches the board.'],
        ['Replace the battery with the laptop on and plugged in, so that it never shuts down', SAFE, 'Power must be off at every source before a part is changed. A live board can be damaged.'],
        ['Replace the charger', PART, 'The laptop runs fine on the charger. The fault shows only without it.'],
        ['Reinstall Windows', PART, 'A worn battery report is a hardware sign, and reinstalling would not change it.']],
      'The deciding words are a worn battery that shuts the laptop off, and fine on the charger. The battery is the part, and every power source is disconnected before it is changed.'),
    recall('l18-k-lightning', 'mobile-ports', 'Lightning is a charging and data connector found on older iPhones and iPads. Which company made it?', ['Apple'],
      'Lightning is Apple’s own connector. Newer iPhones and iPads use USB-C, which is the standard shape on most other phones.'),
    chat('l18-k-airplane', 'mobile-connect', 'Sid, Warehouse',
      'My phone shows Wi-Fi and the cellular bars gone, and the Bluetooth speaker is off, too. The little plane icon is lit. I have not touched any setting.',
      'What do you do first?', [
        ['Turn airplane mode off, then check each radio', true, 'Airplane mode turns off cellular, Wi-Fi and Bluetooth together. One switch explains all three, and turning it off is the cheapest test.'],
        ['Replace the SIM card', LINK, 'The SIM is only one of three affected radios. A single switch explains all three.'],
        ['Forget the Wi-Fi network and pair the speaker again from the beginning', SWITCH, 'Each of those starts over on one radio. The plane icon is the one switch that covers every one.'],
        ['Update the phone’s software', NOSPLIT, 'Nothing has been checked first. The plane icon already says what turned the radios off.']],
      'The deciding words are Wi-Fi, cellular and Bluetooth all gone, with the plane icon lit. Airplane mode switches the three radios off together, so turning it off is the first test.'),
    recall('l18-k-mdm', 'mobile-connect', 'A company uses software to push settings, apps and rules to its phones and tablets and to lock or wipe them from afar. What are the three words that the letters MDM stand for?', ['mobile device management'],
      'MDM is mobile device management. The company enrolls a phone, then the software configures it, enforces its rules, installs company apps and can lock or wipe it.'),
    recall('l18-k-profile', 'mobile-secure', 'A company bundles a phone’s Wi-Fi, email, VPN and passcode rules into one file that it sends to many phones at once. What is that bundle called?', ['configuration profile', 'configuration profiles', 'profile'],
      'A configuration profile carries settings and security rules. MDM sends it, so every phone is configured the same way without anyone touching each one.'),
    chat('l18-k-wipe', 'mobile-secure', 'Ray, Sales',
      'I dropped my phone in the lake while fishing, so it is gone. It is my own phone, and the company only manages my work mail on it. I want to be sure nobody can read my work mail.',
      'What do you do?', [
        ['Confirm it is Ray with the desk’s identity check, queue a selective wipe of the work data, change the password', true, 'The phone is Ray’s own, and the company manages only the work part. The selective wipe runs when the phone next reaches the company’s system, so the new password closes the account meanwhile.'],
        ['Wipe the whole phone', POL, 'This is a personal phone. The company has no claim on Ray’s own data.'],
        ['Do nothing for now and wait for the phone to turn up', CAUSE, 'It may be pulled out and dried. The work mail must be removed from it either way.'],
        ['Mark it lost, wait a week for it to be found, and then see what is possible', 'waited-idle', 'A phone in a lake will not be found by a locator, and a week leaves the mail open.']],
      'The deciding words are a personal phone and managed work mail only. After the identity check, a selective wipe takes the work data when the phone is next online, and a changed password closes the account at once.')
  ]);
})();
