// Scams, Unit Six, part three: the groups of facts about a device that someone has watched or had you install something on,
// and about papers and numbers that have been sent. See u6.cards-1.js for the shape of a group.

FC.cards('scams', 'u6', [

  /* ---------- group four: something installed, or a device watched ---------- */
  { id: 'con-device', kind: 'concept',
    h: 'Something was installed, or someone watched your device',
    link: 'A way into an account is one thing that can leave your hands. The fourth group is about the device itself: a program that you were told to install, or {t:screenshare}.',
    case: 'late-device',
    plain: [
      'Sam let a stranger watch his phone while he typed his banking password. The stranger could see everything that Sam could. That is what {t:screenshare} is, and it also covers a support app that lets someone control the device.',
      'A device that has had something installed on it, or that someone has watched, cannot be trusted until you have dealt with it, and everything that you type on it may be seen. So you cut the device off, remove what was put on it, and do the important things from somewhere else.',
      'End the session that lets them watch. Switch off the internet connection on the device. Uninstall what you were told to install. Then change your passwords from another device, and check your real balance in your own banking app there: what the first device showed Sam was controlled by someone else. Last, call your bank at the number on your card.'
    ] },

  { id: 'facts-device', kind: 'facts',
    h: 'A device that someone has had control of',
    link: 'These are the four facts for the group, with how each fits the idea of cutting the device off and doing the important things somewhere else.',
    concept: 'con-device',
    rows: [
      { id: 'dv-end', q: 'Someone is watching your device from far away. What do you do to that?', a: 'End the session',
        relates: 'That is {t:screenshare}: someone sees or controls your device from far away, through an app or a code. Ending the session stops what they can see.' },
      { id: 'dv-net', q: 'What do you switch off on the device?', a: 'Switch off the internet connection',
        relates: 'Without a connection, the device cannot be reached from far away, so nobody can go on watching it while you put it right.' },
      { id: 'dv-uninstall', q: 'What do you do to a program that they had you install?', a: 'Uninstall it',
        relates: 'The program is what lets them in. Taking it off removes the way that they were using.' },
      { id: 'dv-pass', q: 'Where do you change your passwords?', a: 'Change them from another device',
        relates: 'The device in the story may still be watched or controlled, and anything that you type on it, a new password included, may be seen too.' }
    ] },

  { id: 'chk-dv-end', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-end' } },
  { id: 'chk-dv-net', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-net' } },
  { id: 'chk-dv-uninstall', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-uninstall' } },
  { id: 'chk-dv-pass', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-pass' } },

  /* ---------- group five: papers or numbers sent ---------- */
  { id: 'con-papers', kind: 'concept',
    h: 'Papers or numbers have been sent',
    link: 'The fourth group was about a device. The fifth is about facts that identify you: papers, photos and numbers that you sent to someone who should not have had them.',
    case: 'late-papers',
    plain: [
      'Rosa sent a photo of her passport, a photo of herself holding it, and a number that identifies her, to a page that belonged to nobody real. They cannot be taken back. What she can do is make them harder to use, and watch for the day somebody does.',
      'She tells her bank. She asks the credit bureaus to put a fraud alert or a freeze on her file. A credit bureau is a company that keeps the record that lenders check before they give you credit; the three in the United States are Equifax, Experian and TransUnion. A fraud alert says that somebody else may be using your details, and a credit freeze, which costs nothing, stops new credit from being opened in your name until you lift it. She also reports it at IdentityTheft.gov, the FTC’s site for this kind of crime.',
      'She watches her accounts afterwards, because what she sent can be used later and not only on the day she sent it. And she changes any password that matches what she sent.'
    ] },

  { id: 'facts-papers', kind: 'facts',
    h: 'Papers and numbers that went to the wrong people',
    link: 'These are the three facts for the group, with how each fits the idea of making sent papers and numbers harder to use.',
    concept: 'con-papers',
    rows: [
      { id: 'pp-bank', q: 'Whom do you tell about papers or numbers that you sent to a scammer?', a: 'Tell your bank',
        relates: 'Your bank is the organization you already deal with, and the one that holds your accounts, so it needs to know that somebody else has these details.' },
      { id: 'pp-agency', q: 'Whom do you ask to put a fraud warning on your file?', a: 'Ask the credit bureaus',
        relates: 'The three credit bureaus (Equifax, Experian and TransUnion) keep the record that lenders check before they give you credit. A fraud alert says that somebody else may be using your details, and a freeze, which costs nothing, stops new credit from being opened in your name.' },
      { id: 'pp-watch', q: 'What do you do afterwards, to see anything that you did not do?', a: 'Watch your accounts',
        relates: 'The papers and numbers are still out there. Watching your accounts is how you would see anything that you did not do.' }
    ] },

  { id: 'chk-pp-bank', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-bank' } },
  { id: 'chk-pp-agency', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-agency' } },
  { id: 'chk-pp-watch', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-watch' } }
]);
