// Scams, Unit Four, second half of the names (1): the real request to pay, which comes first, then invoice fraud and the
// fake payment link, each beside the real request that it copies. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Real payment request ---------- */
  { id: 'meet-realpayment', kind: 'meet', outcome: 'realpayment',
    link: 'Next, the real thing. A real bill, fine or deal gives the same reasons as the scams that copy it, so you need to know the real one first.',
    case: 'm-real-rent', mark: 'M2',
    explain: [
      'Hana walked into the agency and signed her lease herself. Now the agency’s app asks for the rent she agreed, into the account printed in her agreement, and says to call the number on her agreement if she has questions. Nobody hurries her, and nothing is hidden.',
      'A request is not suspicious just because it asks for money. What makes this one real is that Hana can check it herself, by calling a number she already had, and the agency will confirm it. That step is {t:check}: contacting them through {t:already}. A copy can look exactly like this message, but it cannot answer a call that Hana makes to the number in her own agreement.'
    ],
    spot: [
      { do: 'Check who started it: Hana walked in and signed the lease herself.', why: 'A real request grows out of something you began.' },
      { do: 'Check the amount and the account: $950, into the account on page two of her agreement.', why: 'Both match what she was given at the start.' },
      { do: 'Check the pressure: there is no hurry and nothing secret.', why: 'A real request gives you time, and lets you tell anyone.' },
      { do: 'Do {t:check}: call the number printed on her agreement.', why: 'A real request holds up when you ask them yourself.' }
    ],
    feature: { step: 'M2', option: 'agreed' },
    name: 'The name for this is {o:realpayment}. Nothing is wrong with it, and you pay it.',
    act: [
      { do: 'Pay it the normal way, and keep the confirmation.', why: 'You will want proof if anything goes wrong later.' },
      { do: 'For a large payment, or a first payment to someone new, do {t:check} once.', why: 'A real request passes it, so it costs you a few minutes.' },
      { do: 'If the details change, someone hurries you, or you are told not to check, stop.', why: 'It has stopped being the real thing.' }
    ] },

  { id: 'check-realpayment', kind: 'check', after: 'realpayment',
    case: 'm-real-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words show that the invoice matches what Wen agreed? Tap them.', answer: 'the same total and the same bank account details as the quote' } },

  /* ---------- Invoice fraud ---------- */
  { id: 'meet-invoicefraud', kind: 'meet', outcome: 'invoicefraud',
    link: 'The real request has a copy that looks identical: the same bill from the same person, with one thing changed.',
    case: 'm-inv-builder', mark: 'M1',
    explain: [
      'Joe has paid his landscaper’s invoice every month for a year. This month’s arrives in the same email thread, with the same logo and signature, and one new line: the landscaper has changed bank. The work is real and so is the amount. Only the account is new.',
      'Someone got into a mailbox, or registered an address one letter off, and waited for a large invoice. It works because it is calm: nothing is hurried and nobody is threatened. The only way Joe can find out is to contact the landscaper himself.'
    ],
    spot: [
      { do: 'Find the bill you already pay: Joe’s landscaper, every month for a year.', why: 'The scam rides on a bill you trust.' },
      { do: 'Find the message about new details: “we have changed bank”.', why: 'This one line is the whole scam.' },
      { do: 'Check where the new details came from: a message, not his contract or an earlier invoice.', why: 'Anyone can send a message with new details.' }
    ],
    feature: { step: 'M1', option: 'bill' },
    name: 'The name for this is {o:invoicefraud}. An invoice is a bill that a business sends. The bill is real, and the fraud is in the bank details on it.',
    act: [
      { do: 'Before you pay into new details, call the sender at a number you already had, such as the one on the contract or an earlier paper invoice.', why: 'A number in the message that announced the change leads to the scammer.' },
      { do: 'If you cannot reach them, wait.', why: 'A real bill can wait a day, and a thief cannot.' }
    ] },

  { id: 'check-invoicefraud', kind: 'check', after: 'invoicefraud',
    case: 'm-inv-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words say what is different this quarter? Tap them.', answer: 'We have moved to a new bank' } },

  { id: 'look-invoicefraud-realpayment', kind: 'lookalike', ledger: 'invoicefraud~realpayment',
    link: 'The hardest pair here, because the bill is the same.',
    cases: ['m-tessa-same', 'm-tessa-new'],
    instruction: 'Both stories are about the same invoice from Tessa’s builder. Compare one thing: the account that she is asked to pay into.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-tessa-same' },
    difference: [
      'In Story A the invoice asks Tessa to pay into the account she has already paid four times, and she can see it in her own banking app. That is {a:M2.agreed}, so the name is {o:realpayment}.',
      'In Story B the same invoice, in the same thread, says the builder has changed bank and gives a new account. A message that announces new details to pay into is {o:invoicefraud}.'
    ] },

  /* ---------- Fake payment link ---------- */
  { id: 'meet-fakelink', kind: 'meet', outcome: 'fakelink',
    link: 'The next copy is a small charge you do not owe, and it is one of the most common scams of all.',
    case: 'm-link-parcel', mark: 'M2',
    explain: [
      'Jonas is expecting a package, so a text saying it could not be delivered is believable. It asks for $2.99 on a page behind a link. The page looks like the courier’s, and it asks for his card number, the expiry date and the three digits on the back.',
      '$2.99 is less than a coffee, which is how the scam slips past your attention. The charge is not the point. The card number is, and it is used right away for much larger payments. To find out whether there is a package, Jonas can look in the courier’s own app.'
    ],
    spot: [
      { do: 'Check who sent it: a number Jonas does not know.', why: 'Anyone can send a text that looks like a courier’s.' },
      { do: 'Find the payment page: a link in the text.', why: 'The page at the end of the link is not the company’s.' },
      { do: 'Notice the small amount: $2.99.', why: 'A small charge is the bait, and your card number is the prize.' }
    ],
    feature: { step: 'M2', option: 'link' },
    name: 'The name for this is {o:fakelink}. The charge is the bait and the link is the trap.',
    act: [
      { do: 'Do not tap the link, and do not reply. Delete the message.', why: 'The page at the end of it is built to take your card.' },
      { do: 'If the charge might be real, open the company’s own app, or type in its address yourself.', why: 'A real charge will be there.' },
      { do: 'If you already entered your card details, call your bank now, at the number on the back of your card, and ask them to block it.', why: 'Blocking the card stops the larger payments that follow.' },
      { do: 'If a caller then says he is from your bank and tells you to move your money to a safe account, hang up.', why: 'That is the next scam.' }
    ] },

  { id: 'check-fakelink', kind: 'check', after: 'fakelink',
    case: 'm-link-check',
    ask: { type: 'option', step: 'M2', among: ['site', 'agreed', 'link'] } },

  { id: 'look-fakelink-realpayment', kind: 'lookalike', ledger: 'fakelink~realpayment',
    link: 'The same small charge and the same courier.',
    cases: ['m-dina-text', 'm-dina-app'],
    instruction: 'Both stories are about Dina, a pair of boots and a $6.20 customs charge. Compare one thing: where she is asked to pay.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-dina-app' },
    difference: [
      'In Story A the charge arrives in a text from a number she does not know, with a link to pay on. Nothing she already had shows it is real. That is {a:M2.link}, so the name is {o:fakelink}.',
      'In Story B the same charge is in her courier’s own app and on the store’s own order page, so she found it through a way she already had. That is {a:M2.agreed}, so the name is {o:realpayment}.'
    ] }
]);
