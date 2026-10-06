// Scams, Unit Four, part three (second half, first piece): the fake payment link, its pair with the real request, and the exception
// in which a payment on a link is the advance fee. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Fake payment link ---------- */
  { id: 'meet-fakelink', kind: 'meet', outcome: 'fakelink',
    link: 'The last two names were about a bill that you really pay. The next is about a small charge that you do not owe, and it is one of the most common scams of all.',
    case: 'm-link-parcel', mark: 'M2',
    strip: [
      'The text comes from a number that Jonas does not know.',
      'It says that a package could not be delivered, and it is believable because he is expecting one.',
      'It asks him to pay $2.99, small enough not to worry about.',
      'The payment is to be made on a page that he reaches through a link in the text.'
    ],
    explain: [
      'The text does not ask for much. $2.99 is less than the price of a coffee, which is how the scam gets past your attention. A person who would hesitate over $300 does not hesitate over $2.99.',
      'Look at what the link leads to. It leads to a page that is made to look like the courier’s. It asks for the number on Jonas’s card, its expiry date and the three digits on the back. After that it often says that his bank is sending a code, and asks him to type that in as well. The $2.99 is not the point. The point is the card number: it is used right away for much larger payments, and the code is what lets them go through.',
      'You can see all of this when the text arrives: a charge, a link, and a page that wants your card. What the text cannot tell you is whether there really is a package. The way to find out is to look in the courier’s own app or on the store’s own page, which you already had.',
      'Notice that the text asks Jonas to pay, and also leads him to hand over his card number. The first question gave the answer {a:D1.money} for this kind of request, because paying is what it asks for, and the card number is how he would pay.',
      'The reason the text gives for the money, a package that he is waiting for, is a reason that a real courier could give too. So the question about what the money is for cannot settle it. What settles it is what the text asks him to do with the money: pay on a page that he reaches through a link in the message.'
    ],
    feature: { step: 'M2', option: 'link' },
    name: 'The name for this is {o:fakelink}. The charge is the bait and the link is the trap: the page at the end of the link is not the company’s.' },

  { id: 'again-fakelink', kind: 'again', outcome: 'fakelink',
    link: 'The package text gave you what to point to: {needs:fakelink}. Here it is again with a toll instead of a package, and a fine behind it.',
    first: 'm-link-parcel', second: 'm-link-toll', step: 'M2',
    instruction: 'Find what the two cases share. Ignore the story (a package, a toll road) and the amount. Look at one thing only: where the person is told to pay.',
    prompt: { kind: 'phrase', answer: 'Pay at roadpay-toll.example to avoid a $50 fine' },
    shared: [
      'In both cases a text from a number that the person does not know asks for a small charge, $2.99 and $6.80, and tells them to pay it on a page that they reach through the text. In both, the reason fits something in the person’s week: Jonas is expecting a package, and Ayesha has used a toll road.',
      'A package and a toll have nothing else in common. A charge on something you are buying, a bill or a fine, with a payment page behind a link in the message, is what {o:fakelink} names.'
    ] },

  { id: 'portrait-fakelink', kind: 'portrait', outcome: 'fakelink',
    link: 'What you point to is a charge, a link, and a payment page that asks for your card. This card fills in the rest of the picture.',
    typical: [
      'It is a text, an email or a message in an app, usually from a number or an address that you do not know, or from one made to look like the company’s.',
      'The reason fits your week: a package, a toll, a parking ticket, a lapsed subscription, a payment that failed, a delivery to rearrange. The sender may use the name of a real company or agency, such as the U.S. Postal Service (USPS).',
      'The amount is small, from a dollar or two to ten, or it is a fine that “will rise” if it is not paid. It is meant to be too small to be worth checking.',
      'There is a link, and the payment page behind it looks like the real company’s, with the same colors and logo.',
      'The page asks for your card number, then often for a code that your bank sends. After that, payments that you never agreed to leave your account, and a caller who says that he is from your bank may call to help you “move your money to safety”. That call is the next scam.',
      'Which of this can you see when the message arrives? The charge, the link and the page that asks for your card are all in front of you. The large payments, and the call from a “bank”, only show afterwards.'
    ],
    not: [
      'A real company does sometimes text you about a charge. What makes a charge real is that you can find it in the company’s own app, or on the page you already use, and pay it there.',
      'A message that only tells you that a package is on its way, and asks for nothing, is not this name at all, because it asks you for nothing. Nor is a request for your card number so that “nothing will be charged”: that asks for facts about you, and it belongs elsewhere.'
    ],
    wild: ['"Your package could not be delivered. Pay a redelivery fee."', '"You have an unpaid toll. Pay now to avoid a fine."', '"Your subscription has failed. Update your card here."', '"Pay your fine of $4.50 before it rises."'],
    self: 'Many people have had one. It is sent to a great many phones at once, and it works for the same reason that junk mail does: it only has to catch the few people who really are waiting for a package.',
    ask: '"Am I being asked to pay a small charge on a page that I reach through a link in the message?"',
    act: [
      'Do not tap the link, and do not reply. Delete the message.',
      'If you think the charge might be real, open the company’s own app, or type in its address yourself, and look for it there. A real package charge will be there too, and you can pay it there.',
      'Never type your card number into a page that you reached through a message, however small the amount.',
      'If you have already entered your card details, call your bank now, at the number on the back of your card, and ask them to block the card. If you typed in a code that the bank sent you, say so.',
      'If a caller then says that he is from your bank and tells you to move your money to a safe account, hang up. That is the next scam.'
    ] },

  { id: 'check-fakelink', kind: 'check', after: 'fakelink',
    case: 'm-link-check',
    ask: { type: 'option', step: 'M2', among: ['site', 'agreed', 'link'] } },

  { id: 'look-fakelink-realpayment', kind: 'lookalike', ledger: 'fakelink~realpayment',
    link: 'You have met both names. This pair shares the same small charge and the same courier. This card puts them side by side.',
    cases: ['m-dina-text', 'm-dina-app'],
    instruction: 'Both cases are about Dina, a pair of boots and a $6.20 customs charge. Compare one thing: where she is asked to pay.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-dina-app' },
    difference: [
      'In Case A the charge arrives in a text from a number she does not know, with a link to pay on. Nothing that she already had shows that it is real. The answer is {a:M2.link}, and the case is {o:fakelink}.',
      'In Case B the same charge appears in her courier’s own app, which she installed last year, and on the store’s own order page, which she opened by typing in the store’s address. She found it through a way she already had. The answer is {a:M2.agreed}, and the case is {o:realpayment}.',
      'The boots, the amount and the courier are the same. What differs is whether the charge came to her in a message, or whether she found it herself.'
    ] },

  { id: 'exc-link-fee', kind: 'exception', ledger: 'advancefee~fakelink', looksLike: 'fakelink', is: 'advancefee',
    h: 'A prize that costs a delivery fee, paid on a link',
    link: 'A payment page reached through a link is what the last name is built on. Here is a case with one, in which the answer is a different one.',
    case: 'm-exc-voucher',
    setup: 'The text asks for $1.99 on a page that is reached through a link, and that is what {a:M2.link} describes. Yet the name for this case is {o:advancefee}.',
    prompt: { kind: 'phrase', answer: 'To claim it, pay $1.99 delivery' },
    because: [
      'Read what the $1.99 is for. The text says that a $500 gift card has been won, and that a delivery fee must be paid to claim it. That is money said to be waiting, and a fee that comes first: the two things that {o:advancefee} is made of.',
      'The link is there, and the page at the end of it will want a card number. But the link is only the way the payment is made. The reason for the payment is a prize that does not exist. Where a message has both, the answer is the one about the fee that comes first, because that is what the sender is selling.'
    ],
    take: 'Where a case shows a fee that comes first and a payment page behind a link, put your finger on the fee. The link is how it is paid.' }
]);
