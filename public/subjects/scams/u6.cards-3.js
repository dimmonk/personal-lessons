// Scams, Unit Six, part three: the groups of facts about a device that someone has watched or had you install something on,
// and about papers and numbers that have been sent. See u6.cards-1.js for the shape of a group.

FC.cards('scams', 'u6', [

  /* ---------- group four: something installed, or a device watched ---------- */
  { id: 'con-device', kind: 'concept',
    h: 'Something was installed, or someone watched your device',
    link: 'Next, your phone or computer itself: a caller had you install something, or watch your screen.',
    case: 'late-device',
    plain: [
      'Sam let a stranger watch his phone while he typed his banking password. The stranger saw everything Sam saw. That is {t:screenshare}, and it also covers a support app that lets someone control the device.',
      'You cannot trust a device that someone watched or put a program on, and anything you type on it may be seen. So cut it off, remove what was put on it, and do the important jobs from another device.',
      'First end the session that lets them watch, and switch off the device’s internet connection. Then uninstall what you were told to install. Next, from another device, change your passwords and check your real balance in your own banking app: someone else was controlling what Sam’s phone showed him. Last, call your bank on the number on your card.'
    ] },

  { id: 'facts-device', kind: 'facts',
    h: 'A device that someone has had control of',
    link: 'Four steps: end the session, cut the connection, remove the program, and change passwords somewhere else.',
    concept: 'con-device',
    rows: [
      { id: 'dv-end', q: 'Someone is watching your device from far away. What do you do to that?', a: 'End the session',
        relates: 'While the session is open, they can see everything you do on the device. Ending it cuts that off.' },
      { id: 'dv-net', q: 'What do you switch off on the device?', a: 'Switch off the internet connection',
        relates: 'With no connection, nobody can reach the device from far away, so they cannot keep watching while you put things right.' },
      { id: 'dv-uninstall', q: 'What do you do to a program that they had you install?', a: 'Uninstall the program',
        relates: 'The program is how they got in. Removing it takes that way in away.' },
      { id: 'dv-pass', q: 'Where do you change your passwords?', a: 'Change them from another device',
        relates: 'The first device may still be watched, so a new password typed there may be seen too.' }
    ] },

  { id: 'chk-dv-end', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-end' } },
  { id: 'chk-dv-net', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-net' } },
  { id: 'chk-dv-uninstall', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-uninstall' } },
  { id: 'chk-dv-pass', kind: 'check', after: 'facts-device', ask: { type: 'fact', row: 'dv-pass' } },

  /* ---------- group five: papers or numbers sent ---------- */
  { id: 'con-papers', kind: 'concept',
    h: 'Papers or numbers have been sent',
    link: 'Next, papers, photos and numbers that identify you, sent to someone who should not have them.',
    case: 'late-papers',
    plain: [
      'Rosa sent a photo of her passport, a photo of herself holding it, and her Social Security number to a page that belonged to nobody real. They cannot be taken back. What she can do is make them harder to use, and watch for the day someone tries.',
      'She tells her bank. Then she asks the credit bureaus to put a fraud alert or a freeze on her file. A credit bureau is a company that keeps the record lenders check before they give you credit; the three in the United States are Equifax, Experian and TransUnion. A fraud alert says someone else may be using your details. A credit freeze, which costs nothing, stops new credit being opened in your name until you lift it. She also reports it at IdentityTheft.gov, the FTC’s site for reporting that someone is using your details.',
      'Afterwards she watches her accounts, because what she sent can be used weeks later and not only on the day she sent it. And she changes any password that matches what she sent.'
    ] },

  { id: 'facts-papers', kind: 'facts',
    h: 'Papers and numbers that went to the wrong people',
    link: 'Three steps: tell your bank, ask the credit bureaus, and keep watching.',
    concept: 'con-papers',
    rows: [
      { id: 'pp-bank', q: 'Whom do you tell about papers or numbers that you sent to a scammer?', a: 'Tell your bank',
        relates: 'Your bank holds your accounts, so it needs to know that someone else has these details.' },
      { id: 'pp-agency', q: 'Whom do you ask to put a fraud warning on your file?', a: 'Ask the credit bureaus',
        relates: 'The three credit bureaus (Equifax, Experian and TransUnion) keep the record lenders check before they give you credit. A fraud alert says someone else may be using your details, and a free freeze stops new credit being opened in your name.' },
      { id: 'pp-watch', q: 'What do you do afterwards, to see anything that you did not do?', a: 'Watch your accounts',
        relates: 'The papers and numbers are still out there. Watching your accounts is how you spot anything you did not do.' }
    ] },

  { id: 'chk-pp-bank', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-bank' } },
  { id: 'chk-pp-agency', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-agency' } },
  { id: 'chk-pp-watch', kind: 'check', after: 'facts-papers', ask: { type: 'fact', row: 'pp-watch' } }
]);
