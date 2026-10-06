// Scams, Unit Two: fresh cases held back for later days, part two: someone offering to fix a problem with your device, and
// someone sorting out a refund or your bank account. Two for each name.

FC.cases('scams', 'u2', [

  /* ---------- Tech-support scam ---------- */
  { id: 'dv-ret-hotel', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a siren page on a hotel computer',
    text: "On a hotel's guest computer, Pru's page is covered by a message with a siren: 'This computer is infected. Call (800) 555-0128 immediately.' When she calls, a man asks her to open a web page and type in a code so that he can clean it.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'a man asks her to open a web page and type in a code', I1: ['This computer is infected. Call (800) 555-0128 immediately', 'so that he can clean it'] },
    reason: { D1: 'The man asks her to type in a code so that he can reach the computer: {cue:D1}. Letting someone watch a device is a request about the device.',
              I1: 'A warning announces a problem that a web page cannot know about, and gives a number to call: {cue:I1}. Nothing is offered about money.' },
    not: { outcome: 'malware', why: 'There is no file or link to open. The warning gives her a number to call, and a person on the line offers to fix the problem.' } },

  { id: 'dv-ret-satnav', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a GPS update helpline found in a sponsored result',
    text: "Vic's GPS will not update. He types 'Roadwise update helpline' into a search page and calls the number in the top result, which is marked 'Sponsored'. A woman says she can fix it by remote control if he lets her see his laptop.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'if he lets her see his laptop', I1: ["calls the number in the top result, which is marked 'Sponsored'", 'she can fix it by remote control'] },
    reason: { D1: 'The woman asks to see his laptop: {cue:D1}. That is a request about the device.',
              I1: 'The number came from a paid result, and the person who answers offers to fix his problem and wants to see his laptop: {cue:I1}. A {t:searchad} is not {t:already}.' },
    not: { outcome: 'realinstall', why: 'Vic went looking himself, and that is how {o:realinstall} begins. But the number came from a paid result, which he did not already have, and a person offered to fix his GPS.' } },

  /* ---------- Refund scam ---------- */
  { id: 'dv-ret-phone-contract', use: 'return', tier: 'clean', setting: 'money', topic: 'too much taken from a phone plan',
    text: "A man calls Jo: 'We have been taking too much from your phone plan for a year, and I owe you $96. Press Share in the meeting app and I will return it while you watch.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share in the meeting app', I1: ['We have been taking too much from your phone plan for a year, and I owe you $96'] },
    reason: { D1: 'The caller asks Jo to share her device: {cue:D1}. That is a request about the device, whatever the reason given.',
              I1: 'The caller says that money is owed to Jo: {cue:I1}. The reason for watching is a refund, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason for watching is money owed to her.' } },

  { id: 'dv-ret-safe-account', use: 'return', tier: 'varied', setting: 'money', topic: 'a bank caller who will watch while money is moved',
    text: "A man calls Rhys: 'This is the security team at your bank. Someone is using your card. Press Share, and I will watch your account while you move your money to a safe account.' Rhys has not noticed anything wrong.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share, and I will watch your account', I1: ['Someone is using your card', 'while you move your money to a safe account'] },
    reason: { D1: 'The caller asks Rhys to share his device: {cue:D1}. That is a request about the device, though money is also mentioned.',
              I1: 'The caller says that his bank account is in danger, and wants to watch while he deals with it: {cue:I1}. The reason given is the bank account.' },
    not: { outcome: 'techsupport', why: 'The problem named is with his bank account, not with his device.' } }
]);
