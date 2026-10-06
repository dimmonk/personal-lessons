// Scams, Unit Two: fresh cases held back for later days, part two: someone offering to fix a problem with your device, and
// someone sorting out a refund or your bank account. Four for each name. Field guide: see u2.cases-return-1.js.

FC.cases('scams', 'u2', [

  /* ---------- Tech-support scam ---------- */
  { id: 'dv-ret-hotel', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a siren page on a hotel computer',
    text: "On a hotel's guest computer, Pru's page is covered by a message with a siren: 'This computer is infected. Call (800) 555-0128 immediately.' When she calls, a man asks her to open a web page and type in a code so that he can clean it.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'a man asks her to open a web page and type in a code', I1: ['This computer is infected. Call (800) 555-0128 immediately', 'so that he can clean it'] },
    reason: { D1: 'The man asks her to type in a code so that he can reach the computer: {cue:D1}. Letting someone watch a device is a request about the device.',
              I1: 'A warning announces a problem that a web page cannot know about, and gives a number to call: {cue:I1}. Nothing is offered about money.' },
    not: { outcome: 'malware', why: 'There is no file or link to open. The warning gives her a number to call, and a person on the line offers to fix the problem.' },
    wouldChange: 'If the message had said that she was owed a refund for the hotel’s computer time, it would be {a:I1.refund}.' },

  { id: 'dv-ret-router-text', use: 'return', tier: 'varied', setting: 'home', topic: 'a text about a router that has been compromised',
    text: "A text reaches Femi: 'Your router has been compromised. Call (800) 555-0129 and we will secure it for you today.' When he calls, a man asks him to install a small program so that he can reach the router.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'a man asks him to install a small program', I1: ['Your router has been compromised', 'Call (800) 555-0129 and we will secure it for you today'] },
    reason: { D1: 'The man asks him to install a program so that he can reach the router: {cue:D1}. That is a request about the device.',
              I1: 'A text says that his device has a problem and offers someone to call to fix it: {cue:I1}. It holds no file or link, so it is not a file in a message.' },
    not: { outcome: 'malware', why: 'The text came in a message, but it holds nothing to open. It gives him a number, and a person on the line asks him to install something.' },
    wouldChange: 'If the text had held a link to install a “router security” app and no number, it would be {a:I1.file}.' },

  { id: 'dv-ret-satnav', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a GPS update helpline found in a sponsored result',
    text: "Vic's GPS will not update. He types 'Roadwise update helpline' into a search page and calls the number in the top result, which is marked 'Sponsored'. A woman says she can fix it by remote control if he lets her see his laptop.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'if he lets her see his laptop', I1: ["calls the number in the top result, which is marked 'Sponsored'", 'she can fix it by remote control'] },
    reason: { D1: 'The woman asks to see his laptop: {cue:D1}. That is a request about the device.',
              I1: 'The number came from a paid result, and the person who answers offers to fix his problem and wants to see his laptop: {cue:I1}. A {t:searchad} is not {t:already}.' },
    not: { outcome: 'realinstall', why: 'Vic went looking himself, and that is how {o:realinstall} begins. But the number came from a paid result, which he did not already have, and a person offered to fix his GPS.' },
    wouldChange: 'If he had used the update tool on the GPS maker’s own website, reached through an address he typed, it would be {a:I1.own}.' },

  { id: 'dv-ret-meter-call', use: 'return', tier: 'varied', setting: 'home', topic: 'a call about errors from a smart meter hub',
    text: "A man calls Alma: 'I am calling from the smart meter team. Your meter hub is sending errors to us. I can clear them if you open a web page and type in the code I read out.' Alma has had no trouble with her meter.",
    outcome: 'techsupport', route: { D1: ['device'], I1: ['support'] },
    cues: { D1: 'open a web page and type in the code I read out', I1: ['Your meter hub is sending errors to us', 'I can clear them'] },
    reason: { D1: 'The caller asks Alma to type in a code so that he can reach her device: {cue:D1}. That is a request about the device.',
              I1: 'The caller announces a problem that she has not seen, and offers to fix it: {cue:I1}. No money and no refund is mentioned.' },
    not: { outcome: 'refundscam', why: 'The reason given for wanting to reach the device is errors in it, not money owed to her or a bank account.' },
    wouldChange: 'If he had said that the meter had overcharged her and he owed her a refund, it would be {a:I1.refund}.' },

  /* ---------- Refund scam ---------- */
  { id: 'dv-ret-phone-contract', use: 'return', tier: 'clean', setting: 'money', topic: 'too much taken from a phone plan',
    text: "A man calls Jo: 'We have been taking too much from your phone plan for a year, and I owe you $96. Press Share in the meeting app and I will return it while you watch.'",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share in the meeting app', I1: ['We have been taking too much from your phone plan for a year, and I owe you $96'] },
    reason: { D1: 'The caller asks Jo to share her device: {cue:D1}. That is a request about the device, whatever the reason given.',
              I1: 'The caller says that money is owed to Jo: {cue:I1}. The reason for watching is a refund, and she did not start the call.' },
    not: { outcome: 'techsupport', why: 'No fault with her device is mentioned. The reason for watching is money owed to her.' },
    wouldChange: 'If he had said that her phone had a fault and offered to fix it, it would be {a:I1.support}.' },

  { id: 'dv-ret-insurer', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a travel insurance refund after a canceled vacation',
    text: "A woman calls Cyrus: 'You canceled your vacation, and the insurer owes you $310. I can process it today if you open the meeting app and press Share.' Cyrus did cancel a vacation in the spring and has not heard from the insurer.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'open the meeting app and press Share', I1: ['the insurer owes you $310', 'I can process it today'] },
    reason: { D1: 'The caller asks Cyrus to share his device: {cue:D1}. That is a request about the device.',
              I1: 'The caller says that money is owed to Cyrus: {cue:I1}. The canceled vacation is real, which is why it sounds true, but the reason given for watching is a refund.' },
    not: { outcome: 'techsupport', why: 'No fault with his device is mentioned. The reason for watching is money owed to him.' },
    wouldChange: 'If she had said that his laptop had errors and offered to fix them, it would be {a:I1.support}.' },

  { id: 'dv-ret-safe-account', use: 'return', tier: 'varied', setting: 'money', topic: 'a bank caller who will watch while money is moved',
    text: "A man calls Rhys: 'This is the security team at your bank. Someone is using your card. Press Share, and I will watch your account while you move your money to a safe account.' Rhys has not noticed anything wrong.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'Press Share, and I will watch your account', I1: ['Someone is using your card', 'while you move your money to a safe account'] },
    reason: { D1: 'The caller asks Rhys to share his device: {cue:D1}. That is a request about the device, though money is also mentioned.',
              I1: 'The caller says that his bank account is in danger, and wants to watch while he deals with it: {cue:I1}. The reason given is the bank account.' },
    not: { outcome: 'techsupport', why: 'The problem named is with his bank account, not with his device.' },
    wouldChange: 'If the call had begun with a page that warned of a fault with his laptop, and the man had offered to fix it, it would be {a:I1.support}.' },

  { id: 'dv-ret-pension', use: 'return', tier: 'varied', setting: 'home', topic: 'a retirement plan fee refunded through an installed tool',
    text: "A man calls Hugh: 'This is your retirement plan provider. A fee was taken twice, and we owe you $180. I will return it if you install the secure-transfer tool from the link I am sending you.' Hugh has not asked about any fee.",
    outcome: 'refundscam', route: { D1: ['device'], I1: ['refund'] },
    cues: { D1: 'install the secure-transfer tool from the link I am sending you', I1: ['A fee was taken twice, and we owe you $180', 'I will return it'] },
    reason: { D1: 'The caller asks Hugh to install a tool: {cue:D1}. That is a request about the device.',
              I1: 'The caller says that money is owed to Hugh, and asks him to install a tool before it is returned: {cue:I1}. A link and a program are in it, but a person is on the call, and the reason is a refund.' },
    not: { outcome: 'malware', why: 'A link and a program to install are in it, but the man is on the phone with Hugh, and the reason given is money owed to him. A file or a link with nobody on a call is the other answer.' },
    wouldChange: 'If the same link had arrived by text, with no call and no talk of a fee, it would be {a:I1.file}.' }
]);
