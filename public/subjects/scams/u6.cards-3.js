// Scams, Unit Six, part three: the groups of facts about a device that someone has watched or had you install something on,
// and about papers and numbers that have been sent. See u6.cards-1.js for the shape of a group.

FC.cards('scams', 'u6', [

  /* ---------- group five: something installed, or a device watched ---------- */
  { id: 'con-device', kind: 'concept',
    h: 'Something was installed, or someone watched your device',
    link: 'A way into an account is one thing that can leave your hands. The fifth group is about the device itself: a program that you were told to install, or {t:screenshare}.',
    case: 'late-device',
    plain: [
      'Sam let a stranger watch his phone while he typed his banking password. The stranger could see everything that Sam could. That is what {t:screenshare} is, and it also covers a support app that lets someone control the device.',
      'A device that has had something installed on it, or that someone has watched, cannot be trusted until you have dealt with it, and everything that you type on it may be seen. So the facts in this group are about cutting the device off, removing what was put on it, and doing the important things from somewhere else.',
      'End the session that lets them watch. Switch off the internet connection on the device, so that it cannot be reached from far away. Uninstall what you were told to install. If what you opened was a file and not a program, also run a full scan with your security software.',
      'Then change your passwords from another device, and check your real balance in your own banking app on that other device. What the first device showed Sam was controlled by someone else, and means nothing. Last, ring your bank on the number on your card, through {t:already}, and tell them.'
    ] },

  { id: 'facts-device', kind: 'facts',
    h: 'A device that someone has had control of',
    link: 'These are the six facts for the group, with how each fits the idea of cutting the device off and doing the important things somewhere else.',
    concept: 'con-device',
    rows: [
      { id: 'dv-end', q: 'Someone is watching your device from far away. What do you do to that?', a: 'End the session',
        relates: 'That is {t:screenshare}: someone sees or controls your device from far away, through an app or a code. Ending the session stops what they can see.' },
      { id: 'dv-net', q: 'What do you switch off on the device?', a: 'Switch off the internet connection',
        relates: 'Without a connection, the device cannot be reached from far away, so nobody can go on watching it while you put it right.' },
      { id: 'dv-uninstall', q: 'What do you do to a program that they had you install?', a: 'Uninstall it',
        relates: 'The program is what lets them in. Taking it off removes the way that they were using.' },
      { id: 'dv-pass', q: 'Where do you change your passwords?', a: 'Change them from another device',
        relates: 'The device in the story may still be watched or controlled, and anything that you type on it, a new password included, may be seen too.' },
      { id: 'dv-balance', q: 'How do you check your real balance?', a: 'Check it in your own banking app, on a different device',
        relates: 'What the first device showed you was controlled by someone else, and means nothing. Your own app, on a device that they have not touched, shows what is true.' },
      { id: 'dv-bank', q: 'Whom do you tell, and on what number?', a: 'Tell your bank, on the number on your card',
        relates: 'The number on your card is {t:already}. A number that the caller gave you came with the scam, so it is theirs, even if you are the one who dials it.' }
    ] },

  { id: 'chk-dv-end', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-end' } },
  { id: 'chk-dv-net', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-net' } },
  { id: 'chk-dv-uninstall', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-uninstall' } },
  { id: 'chk-dv-pass', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-pass' } },
  { id: 'chk-dv-balance', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-balance' } },
  { id: 'chk-dv-bank', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-bank' } },

  { id: 'look-device', kind: 'lookalike', ledger: 'dv-pass~dv-balance',
    h: 'Two things you do on a different device',
    link: 'Two of the six facts both say that you use another device. They get swapped, because the device is the same and the job is not.',
    facts: ['dv-pass', 'dv-balance'],
    instruction: 'Compare what you do on the other device: change something, or only look.',
    prompt: { kind: 'which', answer: 'dv-balance' },
    difference: [
      'Fact A is a change: {f:dv-pass}. You type new passwords, and you do it away from the device that was watched.',
      'Fact B is a look: {f:dv-balance}. You are not changing anything. You are finding out what is true, because the first device could show you anything.',
      'Both use the other device for the same reason, and each answers a different question: what must I change, and what is actually there.'
    ] },

  /* ---------- group six: papers or numbers sent ---------- */
  { id: 'con-papers', kind: 'concept',
    h: 'Papers or numbers have been sent',
    link: 'The fifth group was about a device. The sixth is about facts that identify you: papers, photos and numbers that you sent to someone who should not have had them.',
    case: 'late-papers',
    plain: [
      'Rosa sent a photo of her passport, a photo of herself holding it, and a number that identifies her, to a page that belonged to nobody real. They cannot be taken back. What she can do is make them harder to use, and watch for the day somebody does.',
      'She tells her bank. She asks a credit reference agency to put a fraud warning on her file. A credit reference agency is a company that keeps the record that lenders check before they give you credit, and a fraud warning on that record says that somebody else may be using your details. Which companies do this, and how you ask them, depends on the country you live in, so find the ones for yours.',
      'She watches her accounts afterwards, because what she sent can be used later and not only on the day she sent it. And she changes any password that matches what she sent, because the scammer now holds it.'
    ] },

  { id: 'facts-papers', kind: 'facts',
    h: 'Papers and numbers that went to the wrong people',
    link: 'These are the four facts for the group, with how each fits the idea of making sent papers and numbers harder to use.',
    concept: 'con-papers',
    rows: [
      { id: 'pp-bank', q: 'Whom do you tell about papers or numbers that you sent to a scammer?', a: 'Tell your bank',
        relates: 'Your bank is the organisation you already deal with, and the one that holds your accounts, so it needs to know that somebody else has these details.' },
      { id: 'pp-agency', q: 'Whom do you ask to put a fraud warning on your file?', a: 'Ask a credit reference agency',
        relates: 'It keeps the record that lenders check before they give you credit. The fraud warning says that somebody else may be using your details. Which companies do this depends on the country you live in.' },
      { id: 'pp-watch', q: 'What do you do afterwards, to see anything that you did not do?', a: 'Watch your accounts',
        relates: 'The papers and numbers are still out there. Watching your accounts is how you would see anything that you did not do.' },
      { id: 'pp-pwd', q: 'Which of your passwords do you change?', a: 'Change any that match what you sent',
        relates: 'A password that matches something you sent is one that the scammer now holds, so it needs changing.' }
    ] },

  { id: 'chk-pp-bank', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-bank' } },
  { id: 'chk-pp-agency', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-agency' } },
  { id: 'chk-pp-watch', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-watch' } },
  { id: 'chk-pp-pwd', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-pwd' } },

  { id: 'look-papers', kind: 'lookalike', ledger: 'pp-bank~pp-agency',
    h: 'Your bank, and a credit reference agency',
    link: 'Two of the four facts are both about telling an organisation. One is the bank you already deal with, and the other is a company that you may never have heard of, so they get swapped.',
    facts: ['pp-bank', 'pp-agency'],
    instruction: 'Compare who you already deal with, and who keeps the record that lenders check.',
    prompt: { kind: 'which', answer: 'pp-agency' },
    difference: [
      'Fact A is {f:pp-bank}. That is the organisation that you already deal with, and you reach it on the number on your card.',
      'Fact B is {f:pp-agency}. That is a company that keeps the record lenders check before they give you credit, and it is the one that you ask to put a warning on your file.',
      'You do both, and neither does the other’s job.'
    ] }
]);
