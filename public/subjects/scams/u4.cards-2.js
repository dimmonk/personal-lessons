// Scams, Unit Four, second half of the names (1): the real request to pay, which comes first, then invoice fraud and the
// fake payment link, each beside the real request that it copies. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Real payment request ---------- */
  { id: 'meet-realpayment', kind: 'meet', outcome: 'realpayment',
    link: 'Now ordinary reasons to pay: a bill, a fine, a deal. Real requests come with the same reasons as the copies, so the real request comes first.',
    case: 'm-real-rent', mark: 'M2',
    strip: [
      'Hana started this herself: she walked into the agency’s office and signed a lease.',
      'The request is to pay $950 by the 1st, the rent she agreed to pay, into the account printed on page two of her agreement, the same as every month.',
      'Nobody hurries her or asks her to keep it quiet. The message says how she could be sure: call the number on her agreement.'
    ],
    explain: [
      'This is what the real thing looks like, and the first thing to notice is that it is a request for money. A request is not suspicious for being a request. What makes this one real is five things together: Hana started the arrangement herself; the amount is the one she agreed; the account is the one she was given at the start; nobody is hurrying her or telling her to keep it quiet; and she could contact the agency herself, at the number on her agreement, and they would confirm it.',
      'The last one matters most, and it has a name: {t:check}. It means stopping before you pay and contacting them yourself, through {t:already}. It does not depend on your telling a real message from a copy. A copy can look exactly like this one, but it cannot answer a call that you make to the number in your own agreement.'
    ],
    feature: { step: 'M2', option: 'agreed' },
    name: 'The name for this is {o:realpayment}. Nothing is wrong with it. You pay it in the normal way, and the name is there so that you can say so as exactly as you can say what is wrong in the others.',
    act: [
      'Pay it in the normal way, and keep the confirmation.',
      'For a large payment, or the first payment to someone new, do {t:check} once. A real request passes it, so it costs you a few minutes.',
      'If the details change, if someone starts to hurry you, or if you are told not to check, stop: it has become something else.'
    ] },

  { id: 'check-realpayment', kind: 'check', after: 'realpayment',
    case: 'm-real-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words show that the invoice matches what Wen agreed? Tap them.', answer: 'the same total and the same bank account details as the quote' } },

  /* ---------- Invoice fraud ---------- */
  { id: 'meet-invoicefraud', kind: 'meet', outcome: 'invoicefraud',
    link: 'The real request has a copy that you cannot tell apart by looking: the same bill, from the same person, with one thing changed.',
    case: 'm-inv-builder', mark: 'M1',
    strip: [
      'Every month for a year Joe has paid the invoice that his landscaper emails him, always into the same account.',
      'This month’s invoice, for $1,850, arrives in the same thread, with the same logo and signature. It says that the landscaper has changed bank, and asks Joe to pay into the new account below.',
      'Nothing is hurried and no one is threatened. It reads like routine.'
    ],
    explain: [
      'The invoice is real, because the work is real and the amount is right. What has changed is where the money is to go. A scammer who has gotten into a mailbox, or registered an address one letter off, waits until a large invoice is about to be paid, and then sends the one line that changes the account.',
      'It works because it is calm. The reason it gives, a bill that Joe already pays, is the reason that a real invoice would give, so the first question cannot tell the two apart. What does is what the request asks him to do with the money: pay into new details that a message has just announced. Whether the change is real, he can only find out by contacting them himself.'
    ],
    feature: { step: 'M1', option: 'bill' },
    name: 'The name for this is {o:invoicefraud}. An invoice is a bill that a business sends. The fraud is not in the bill, which is real, but in the bank account details on it.',
    act: [
      'Before you pay into any new details, call the person who sent the bill at a number that you already had: the one on the contract or on an earlier paper invoice. Never use a number in the message that announced the change.',
      'If you cannot reach them, wait. A real bill can wait a day, and a thief cannot.'
    ] },

  { id: 'check-invoicefraud', kind: 'check', after: 'invoicefraud',
    case: 'm-inv-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words say what is different this quarter? Tap them.', answer: 'We have moved to a new bank' } },

  { id: 'look-invoicefraud-realpayment', kind: 'lookalike', ledger: 'invoicefraud~realpayment',
    link: 'The hardest pair here, because the bill is the same.',
    cases: ['m-tessa-same', 'm-tessa-new'],
    instruction: 'Both cases are about the same invoice from Tessa’s builder. Compare one thing: the account that she is asked to pay into.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-tessa-same' },
    difference: [
      'In Case A the invoice asks Tessa to pay into the account that she has paid into four times, and she can see it in her own banking app. The answer is {a:M2.agreed}, and the case is {o:realpayment}.',
      'In Case B the same invoice, in the same thread, says that the builder has changed bank and gives a new account. A message that announces new details to pay into is what {o:invoicefraud} is made of.'
    ] },

  /* ---------- Fake payment link ---------- */
  { id: 'meet-fakelink', kind: 'meet', outcome: 'fakelink',
    link: 'The next copy is a small charge that you do not owe, and it is one of the most common scams of all.',
    case: 'm-link-parcel', mark: 'M2',
    strip: [
      'The text comes from a number that Jonas does not know. It says that a package could not be delivered, which is believable because he is expecting one.',
      'It asks him to pay $2.99, on a page that he reaches through a link in the text.'
    ],
    explain: [
      '$2.99 is less than a coffee, which is how the scam gets past your attention. The link leads to a page made to look like the courier’s. It asks for his card number, its expiry date and the three digits on the back, and often for a code that his bank sends. The $2.99 is not the point. The card number is, and it is used right away for much larger payments.',
      'The reason, a package he is waiting for, is one that a real courier could give too, so the first question cannot settle it. What settles it is what the text asks him to do with the money: pay on a page that he reaches through a link in the message. To find out whether there is a package, he looks in the courier’s own app or on the store’s own page.'
    ],
    feature: { step: 'M2', option: 'link' },
    name: 'The name for this is {o:fakelink}. The charge is the bait and the link is the trap: the page at the end of the link is not the company’s.',
    act: [
      'Do not tap the link, and do not reply. Delete the message.',
      'If the charge might be real, open the company’s own app, or type in its address yourself, and look for it there.',
      'If you have already entered your card details, call your bank now, at the number on the back of your card, and ask them to block the card. If a caller then says that he is from your bank and tells you to move your money to a safe account, hang up: that is the next scam.'
    ] },

  { id: 'check-fakelink', kind: 'check', after: 'fakelink',
    case: 'm-link-check',
    ask: { type: 'option', step: 'M2', among: ['site', 'agreed', 'link'] } },

  { id: 'look-fakelink-realpayment', kind: 'lookalike', ledger: 'fakelink~realpayment',
    link: 'The same small charge and the same courier.',
    cases: ['m-dina-text', 'm-dina-app'],
    instruction: 'Both cases are about Dina, a pair of boots and a $6.20 customs charge. Compare one thing: where she is asked to pay.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-dina-app' },
    difference: [
      'In Case A the charge arrives in a text from a number she does not know, with a link to pay on. Nothing that she already had shows that it is real. The answer is {a:M2.link}, and the case is {o:fakelink}.',
      'In Case B the same charge appears in her courier’s own app, which she installed last year, and on the store’s own order page. She found it through a way she already had. The answer is {a:M2.agreed}, and the case is {o:realpayment}.'
    ] }
]);
