// Scams, Unit Two, part two (second half): the fourth name (someone sorting out a refund or your bank account), its
// look-alike pair with the third, and the second named exception: a case that shows a fault and a refund together, where the
// key takes the refund. The scam is told as it really unfolds, and the cards say which steps you could still refuse.
// Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- Refund scam ---------- */
  { id: 'meet-refundscam', kind: 'meet', outcome: 'refundscam',
    link: 'The siren page began with a warning about the device. The last of the four names begins in a different way, with money: a caller who says that you are owed some, or that your bank account needs attention.',
    case: 'dv-energy-refund', mark: 'I1',
    strip: [
      'There is one person, Harold, and a caller who says that he is from Harold’s energy company.',
      'The caller says that Harold has been overcharged $312, and that he wants to put it right today.',
      'To do that, he asks Harold to open a web page and type in a number that he reads out, so that he can see Harold’s computer.',
      'Harold had not asked about a refund, and he had called nobody. The call came to him.',
      'What he is asked for is a view of his device, and the reason given is money.'
    ],
    explain: [
      'Here is the scam as it really unfolds. First, the call: a refund that Harold did not expect, from a company that he really deals with. Second, a reason to let the caller see his computer: he says that he needs to see Harold’s account to send the money. Third, once the caller is watching, he asks Harold to log in to his online bank “to see where to send it”. Fourth, while Harold is logged in and the caller is watching, the caller moves money between Harold’s own accounts, say from savings into the checking account, so that the balance on the page jumps: $3,120 where a refund of $312 was promised. Fifth, the caller is upset. He has typed an extra zero, he will lose his job, and could Harold send the difference back? What Harold would send is his own money, and the extra on the page was only his own savings, moved across.',
      'Now ask which of those steps Harold could still have refused. The first is a call, and he did nothing. The second is the request: let him see your computer. Everything after that, the balance, the apology and the request to send money back, can only be known once Harold has let him in, and by then the page on his computer is controlled by someone else, so Harold cannot trust it. The question is answered at the second step, and the answer is {a:I1.refund}: the caller’s reason is money, and the request is to install something or to let them see your computer while it is dealt with.',
      'Notice that the reason given is money, and that nothing is said to be wrong with the device. In the third name the reason given for the same request was a fault in the device.'
    ],
    feature: { step: 'I1', option: 'refund' },
    name: 'The name for this is {o:refundscam}. A refund is money paid back to you. The name is for a scam that is built around a refund that you did not ask for, or around a danger to your bank account, and used as the reason to get at your computer and your bank.' },

  { id: 'again-refundscam', kind: 'again', outcome: 'refundscam',
    link: 'The energy refund gave you what to point to for {o:refundscam}, from one case: {needs:refundscam}. Here is a second case with a different story. This time the caller says that she is from the person’s bank.',
    first: 'dv-energy-refund', second: 'dv-bank-protect', step: 'I1',
    instruction: 'Find what the two cases share. Ignore the company named (an energy company, a bank). Look at one thing only: what the caller says about money or a bank account, as the reason for wanting to watch the device.',
    prompt: { kind: 'phrase', answer: 'Someone is trying to take money from your account tonight' },
    shared: [
      'Harold and Odette each had a call from someone who said they were from a company that holds their money, and each was given a reason about money: a refund to send, a payment to stop. In both, the caller asked to see the device so that the money could be dealt with while they watched.',
      'Nothing was wrong before either call. A refund and a danger to your account are different stories, and they share one thing: a reason about money, given by someone who has contacted you, for letting them see your device. That is what {o:refundscam} names. In the second story it is the bank account itself that needs attention, and that counts as the same name.'
    ] },

  { id: 'portrait-refundscam', kind: 'portrait', outcome: 'refundscam',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:refundscam} in real life, where nobody marks the words for you.',
    typical: [
      'A call, and sometimes a message, comes to you. A company that you know says that it owes you money, or that your account is in danger. They know your name and the company that you deal with, which makes it sound true.',
      'The story needs you to let them in. You must open a web page and type in a code, or press Share, or install a small program, so that they can “process” the refund or “stop” the payment.',
      'Once they are watching, they ask you to log in to your bank, because that is where the money is.',
      'They create a reason for you to send money. A refund of $48 appears as $4,800 on the page. They say that it was a mistake. They ask you to send the rest back, or to move your money to a “safe account”.',
      'They stay calm and apologetic and ask you not to hang up. If you try to end the call, they say that the money will be lost.',
      'What you can no longer trust is the page on your own computer. Whoever controls it can make a balance say whatever they like.'
    ],
    not: [
      'A refund is not always a scam. A real company can owe you money, and a real refund goes back to the card or the account that paid, with no call and no need for anyone to see your computer. A refund that simply arrives, with nobody on the phone, asks you for nothing, and the first question gives it the answer {a:D1.nothing}.',
      'And a call from your bank is not always this name. A real bank can call about a payment. What gives the name is the request to install something or to let them see your device, and a real bank does not need that.'
    ],
    wild: ['"You were charged twice, so I owe you a refund."', '"I will process it while you watch. Press Share."', '"Someone is trying to take money from your account tonight."', '"Oh no, I have typed an extra zero. I will lose my job."', '"Please send the difference back."'],
    self: 'It is the scam that most often follows a real event: an outage, a price rise, a canceled trip, a bill that you did pay twice. Whatever you have recently paid for becomes the reason.',
    ask: '"Who contacted whom, and why would anyone need to see my device to give me back my own money?" Nobody does, so a refund that needs a view of your computer is {o:refundscam}.',
    act: [
      'End the call at the first mention of watching your device, installing something or pressing Share. You do not have to be polite, and you do not have to explain.',
      'Do not type in a code that they read out, do not press Share and do not log in to your bank while they are on the line.',
      'Use {t:check}: call the company, or your bank, at the number on your bill or on the back of your card, and ask. Use a different phone if you can, because a caller can keep a line open.',
      'Never send money back because of what a balance seems to say. If you have already let them in, take the device off the internet and call your bank right away, at the number on your card.'
    ] },

  { id: 'check-refundscam', kind: 'check', after: 'refundscam',
    case: 'dv-c-gym-refund',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support', 'refund'] } },

  { id: 'look-techsupport-refundscam', kind: 'lookalike', ledger: 'techsupport~refundscam',
    link: 'You have met all four names. These two are the closest pair, because in both a person on the phone asks to see your device, and says that it is to put something right. This card puts them side by side.',
    cases: ['dv-lk-hal-popup', 'dv-lk-hal-refund'],
    instruction: 'Both cases are about Hal, and in both a caller asks to see his device. Compare one thing: the reason the caller gives for wanting to see it.',
    prompt: { kind: 'which', option: 'I1.refund', answer: 'dv-lk-hal-refund' },
    difference: [
      'In Case A the reason is a fault with the device. A page on his laptop says that it is locked, and the man he calls says that he can fix it, but needs to see the device. The answer is {a:I1.support}, and the case is {o:techsupport}.',
      'In Case B the reason is money. Nothing was wrong with his device, and nobody had warned him about anything. A woman calls to say that he was charged twice and that she owes him $60, and she needs to see the device to put it back. The answer is {a:I1.refund}, and the case is {o:refundscam}.',
      'The request is the same in both: let me see your device. What differs is the reason given for it, a fault or a refund, and Hal can hear that difference at the moment he is asked.'
    ] },

  { id: 'exc-both-ways', kind: 'exception', ledger: 'techsupport~refundscam', looksLike: 'techsupport', is: 'refundscam',
    h: 'When a case shows both reasons',
    link: 'The last card separated the pair with two tidy cases. Real calls are less tidy: a caller may start with a problem and then bring up a refund.',
    case: 'dv-license-refund',
    setup: 'Nia saw a warning that gave her a number to call, and the man who answered offered to fix a problem. That is what {o:techsupport} looks like. Yet this case is {o:refundscam}.',
    prompt: { kind: 'phrase', answer: 'you were charged twice for it, so I owe you $199 back' },
    because: [
      'The case shows two reasons for wanting to see her computer: a fault with the device, and a refund. The fault came first, and on its own it would be {o:techsupport}. But the second reason is about money, and it is the one that comes first, because a refund call is the one that goes on to reach your bank.',
      'In real calls the two run together. A technician who has been given access finds that there is a “license” to be refunded, or a “mistake” to be put right, and the call turns into the other scam. The questions do not ask which came first. They ask what reasons the case shows.'
    ],
    take: 'This is the decision, made on purpose. Many calls start as one and turn into the other, and each case gets one name, so that two people using the questions reach the same answer. What you do does not change: stop, and use {t:check}.' }
]);
