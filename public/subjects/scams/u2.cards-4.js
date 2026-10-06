// Scams, Unit Two, part two (second half): the fourth name (someone sorting out a refund or your bank account), its
// look-alike pair with the third, and the second named exception: a case that shows a fault and a refund together, where the
// key takes the refund. The scam is told as it really unfolds, and the cards say which steps you could still refuse.
// Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Refund scam ---------- */
  { id: 'meet-refundscam', kind: 'meet', outcome: 'refundscam',
    link: 'The siren page began with a warning about the device. This one begins with money: a caller who says that you are owed some, or that your bank account needs attention.',
    case: 'dv-energy-refund', mark: 'I1',
    strip: [
      'A caller says that he is from Harold’s energy company, and that Harold was overcharged $312.',
      'He asks Harold to open a web page and type in a number that he reads out, so that he can see Harold’s computer and pay it back.',
      'Harold had not asked about a refund, and he had called nobody. The reason given is money.'
    ],
    explain: [
      'Once the caller is watching, he asks Harold to log in to his online bank “to see where to send it”. He moves money between Harold’s own accounts so that the balance jumps to $3,120, says that he typed an extra zero and will lose his job, and asks Harold to send the difference back. What Harold sends is his own money.',
      'Harold could refuse at the request to see his computer. Everything after it happens on a page that someone else controls. So the question is answered at the start: the reason is money, a refund or a danger to your bank account, and the request is to install something or let them see your computer. In {o:techsupport} the reason for the same request was a fault in the device. A real refund goes back to the card or account that paid, with no call and nobody needing to see your computer.'
    ],
    feature: { step: 'I1', option: 'refund' },
    name: 'The name for this is {o:refundscam}. It is built around a refund that you did not ask for, or a danger to your bank account, used as the reason to get at your computer and your bank.',
    act: [
      'End the call at the first mention of watching your device, installing something or pressing Share. You do not have to be polite or to explain.',
      'Never type in a code that they read out, press Share or log in to your bank while they are on the line, and never send money back because of what a balance seems to say. Use {t:check}: call the company or your bank at the number on your bill or the back of your card, on a different phone if you can. If you have already let them in, take the device off the internet and call your bank.'
    ] },

  { id: 'check-refundscam', kind: 'check', after: 'refundscam',
    case: 'dv-c-gym-refund',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support', 'refund'] } },

  { id: 'look-techsupport-refundscam', kind: 'lookalike', ledger: 'techsupport~refundscam',
    link: 'These two are the closest pair: in both, a person on the phone asks to see your device, and says that it is to put something right.',
    cases: ['dv-lk-hal-popup', 'dv-lk-hal-refund'],
    instruction: 'Both cases are about Hal, and in both a caller asks to see his device. Compare one thing: the reason the caller gives for wanting to see it.',
    prompt: { kind: 'which', option: 'I1.refund', answer: 'dv-lk-hal-refund' },
    difference: [
      'In Case A the reason is a fault with the device. A page says that his laptop is locked, and the man he calls says that he can fix it if he sees the device. The answer is {a:I1.support}, and the case is {o:techsupport}.',
      'In Case B the reason is money. Nothing was wrong with his device. A woman calls to say that he was charged twice and that she owes him $60, and she needs to see the device to put it back. The answer is {a:I1.refund}, and the case is {o:refundscam}.',
      'The request is the same: let me see your device. What differs is the reason given for it, and Hal can hear that when he is asked.'
    ] },

  { id: 'exc-both-ways', kind: 'exception', ledger: 'techsupport~refundscam', looksLike: 'techsupport', is: 'refundscam',
    h: 'When a case shows both reasons',
    link: 'Real calls are less tidy: a caller may start with a problem and then bring up a refund.',
    case: 'dv-license-refund',
    setup: 'Nia saw a warning that gave her a number to call, and the man who answered offered to fix a problem. That is what {o:techsupport} looks like. Yet this case is {o:refundscam}.',
    prompt: { kind: 'phrase', answer: 'you were charged twice for it, so I owe you $199 back' },
    because: [
      'The case shows two reasons for wanting to see her computer: a fault, and a refund. The fault alone would be {o:techsupport}, but talk of a refund is the reason that goes on to reach your bank, so it wins.'
    ],
    take: 'Many calls start as one scam and turn into the other, and each case gets one name so that two people reach the same answer. What you do does not change: stop, and use {t:check}.' }
]);
