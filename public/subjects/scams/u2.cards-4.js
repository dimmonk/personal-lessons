// Scams, Unit Two, part two (second half): the fourth name (someone sorting out a refund or your bank account), its
// look-alike pair with the third, and the second named exception: a story that shows a fault and a refund together, where the
// key takes the refund. The scam is told as it really unfolds, and the cards say which steps you could still refuse.
// Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Refund scam ---------- */
  { id: 'meet-refundscam', kind: 'meet', outcome: 'refundscam',
    link: 'The siren page started with a warning about your device. This one starts with money: a caller who says you are owed some, or that your bank account needs attention.',
    case: 'dv-energy-refund', mark: 'I1',
    explain: [
      'Harold never asked for a refund, and the caller started it. Once the caller is watching, he asks Harold to log in to his online bank “to see where to send it”. He moves money between Harold’s own accounts so that the balance jumps to $3,120, says he typed an extra zero and will lose his job, and asks Harold to send the difference back. What Harold sends is his own money.',
      'Harold could refuse at the request to see his computer. After that, everything happens on a page someone else controls. A real refund goes back to the card or account that paid, with no call and nobody needing to see your computer.'
    ],
    spot: [
      { do: 'Find the reason: Harold was overcharged $312.', why: 'The reason is money: a refund, or a danger to your bank account.' },
      { do: 'Check whether you asked for it: Harold had not asked about a refund.', why: 'A refund you never asked for is the bait.' },
      { do: 'Find what he wants while he sorts it out: to see Harold’s screen.', why: 'A real refund needs nobody watching.' },
      { do: 'Check for a problem with the device: there is none.', why: 'A problem with your device would make it {o:techsupport}.' }
    ],
    feature: { step: 'I1', option: 'refund' },
    name: 'This is {o:refundscam}. The refund, or the danger to your bank account, is only the reason to get at your computer and your bank.',
    act: [
      { do: 'End the call at the first mention of watching your device, installing something or pressing Share.', why: 'You do not have to be polite or explain.' },
      { do: 'Never type in a code they read out, press Share or log in to your bank while they are on the line.', why: 'Everything you do then happens where they can see it.' },
      { do: 'Never send money back because of what a balance seems to say.', why: 'They made the balance change, so what you send is your own money.' },
      { do: 'Use {t:check}: call the company or your bank at the number on your bill or the back of your card, on a different phone if you can.', why: 'That number was yours before the call.' },
      { do: 'If you already let them in, take the device off the internet and call your bank.', why: 'That cuts them off while the bank protects your accounts.' }
    ] },

  { id: 'check-refundscam', kind: 'check', after: 'refundscam',
    case: 'dv-c-gym-refund',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support', 'refund'] } },

  { id: 'look-techsupport-refundscam', kind: 'lookalike', ledger: 'techsupport~refundscam',
    link: 'These two are the closest pair: in both, a person on the phone asks to see your device and says it is to put something right.',
    cases: ['dv-lk-hal-popup', 'dv-lk-hal-refund'],
    instruction: 'Both stories are about Hal, and in both a caller asks to see his device. Compare one thing: the reason the caller gives for wanting to see it.',
    prompt: { kind: 'which', option: 'I1.refund', answer: 'dv-lk-hal-refund' },
    difference: [
      'In Story A the reason is a fault with the device. A page says his laptop is locked, and the man he calls says he can fix it if he sees the screen. That is {a:I1.support}, so it is {o:techsupport}.',
      'In Story B the reason is money. Nothing was wrong with his device. A woman calls to say he was charged twice and she owes him $60, and she needs to see the screen to put it back. That is {a:I1.refund}, so it is {o:refundscam}.',
      'The request is the same: let me see your screen. What differs is the reason, and Hal can hear it when he is asked.'
    ] },

  { id: 'exc-both-ways', kind: 'exception', ledger: 'techsupport~refundscam', looksLike: 'techsupport', is: 'refundscam',
    h: 'When a story shows both reasons',
    link: 'Real calls are messier: a caller may start with a problem and then bring up a refund.',
    case: 'dv-license-refund',
    setup: 'Nia saw a warning that gave her a number to call, and the man who answered offered to fix a problem. That is what {o:techsupport} looks like. Yet this is {o:refundscam}.',
    prompt: { kind: 'phrase', answer: 'you were charged twice for it, so I owe you $199 back' },
    because: [
      'Two reasons for seeing her computer show up: a fault, and a refund. The fault alone would be {o:techsupport}. But talk of a refund is the reason that goes on to reach your bank, so it wins.'
    ],
    take: 'Many calls start as one scam and turn into the other. When both show up, the refund wins. What you do does not change: stop, and use {t:check}.' }
]);
