// Scams, Unit Four, part three (first half): the real request to pay, which comes first, and the first of its four copies,
// invoice fraud, with the pair they make. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Real payment request ---------- */
  { id: 'meet-realpayment', kind: 'meet', outcome: 'realpayment',
    link: 'Part two was about reasons that are made up. Part three is about ordinary ones: a bill, a fine, a deal. Real requests come with these same reasons, so the real request comes first, before the four scams that copy it.',
    case: 'm-real-rent', mark: 'M2',
    strip: [
      'Hana started this herself: she walked into the agency’s office and signed a lease.',
      'The request is to pay $950 by the 1st, which is the rent she agreed to pay.',
      'The account is the one printed on page two of her agreement, and it is the same account as every month.',
      'Nobody hurries her, and nobody asks her to keep it quiet.',
      'The message even says how she could be sure: call the number on her agreement.'
    ],
    explain: [
      'This is what the real thing looks like, and the first thing to notice is that it is a request for money. A real request is not made suspicious by being a request. People ask for rent, invoices, deposits and fines all the time, and nearly all of those requests are what they say.',
      'What makes this one real is not any one word in it, because a copy can use the same words. It is five things together. Hana started the arrangement herself. The amount is the one she agreed. The account is the one she was given at the start. Nobody is hurrying her or telling her to keep it quiet. And if she wanted to be sure, she could contact the agency herself, at the number printed on her agreement, and they would confirm it.',
      'The last of the five matters most, and it has a name: {t:check}. It means stopping before you pay and contacting them yourself, through {t:already}. It works because it does not depend on your being able to tell a real message from a copy. A copy can look exactly like this one. It cannot answer a call that you make to the number in your own agreement.',
      'The questions need a name for the real request, because questions with no place for the real thing are ones you stop using. Each of the four copies in this part has a real twin that looks the same, and when you meet the copy you will be shown the twin beside it.',
      'One more thing about the questions. It has two questions about money, and the second is the one at the foot of this card: what the request asks you to do with the money. The first question, what the request says the money is for, cannot separate a real request from its copies, because they give the same reasons: a bill, a fine, a deal. Hana’s rent is a bill. A copy can be a bill too, so it is the second question that separates them.'
    ],
    feature: { step: 'M2', option: 'agreed' },
    name: 'The name for this is {o:realpayment}. Nothing is wrong with it. You pay it in the normal way, and the name is there so that you can say so as exactly as you can say what is wrong in the others.' },

  { id: 'again-realpayment', kind: 'again', outcome: 'realpayment',
    link: 'The first case gave you what to point to: {needs:realpayment}. Here it is again with a different reason for paying: a fine from the county, and a letter instead of an app.',
    first: 'm-real-rent', second: 'm-real-parking', step: 'M2',
    instruction: 'Find what the two cases share. Ignore the story (rent, a parking charge, an app, a letter). Look at one thing only: how the request holds up when the person looks into it for themselves.',
    prompt: { kind: 'phrase', answer: 'The same $70 and the same date are there' },
    shared: [
      'Both requests came from an organization that the person already deals with, and in both the amount was one that the person had a reason to expect. In both, nothing that came with the message was used to check it. Hana could call the number on her agreement, and Tomás typed in the county’s address from his own bill and found the same $70 waiting. In both cases the request held up.',
      'The reasons for paying were different, rent and a fine, and so were the ways of paying, an app and a county website. What the two share is that each request survives being checked through something the person already had. That is what {o:realpayment} names.'
    ] },

  { id: 'portrait-realpayment', kind: 'portrait', outcome: 'realpayment',
    link: 'You know what to point to. This card fills in the rest of the picture, because this is the name that you will meet more often than any other in this unit.',
    typical: [
      'It comes from someone you already deal with, or about something you started yourself: a landlord, a builder, a county, a store, an attorney, the owner of a vacation cottage.',
      'The amount is what you agreed or owe, and you can see where it comes from: a quote, a contract, a booking, a bill with a reference number.',
      'The bank account details are the ones you were given at the start, or they are on a document that reached you before the request did.',
      'Nobody is rushing you or asking you to keep it quiet. A real due date gives you time, and a real request can wait while you check it.',
      'It invites checking. A real organization gives you a number to call and does not mind that you called the one you already had.',
      'It usually arrives in the usual way: the same email thread, the same app, the same kind of letter. That is not what makes it real, because a copy can arrive in the same way.'
    ],
    not: [
      'A request is not real because it looks real. Logos, signatures, a correct name and a correct reference number can all be copied, so none of them is what the name needs.',
      'A request that fits all of this and then changes is not this name any longer. If the details move late, if someone starts to hurry you, or if someone discourages you from checking, start again from the first question.'
    ],
    wild: ['"Rent is due on the 1st, to the account on your agreement."', '"Invoice attached, as quoted. Call me if anything looks wrong."', '"Your deposit is protected in a scheme that you can look up."', '"There is no rush: it is due at the end of the month."'],
    self: 'Most of the requests for money that reach you are this name: rent, property tax, bills, school fees, a builder, an attorney, a vacation booking. It is the one you meet most, and the easiest one to forget that there is a name for.',
    ask: '"Did I start this, is the amount what I agreed or owe, and are the details the ones I was given at the start?"',
    act: [
      'Pay it in the normal way, and keep the confirmation.',
      'For a large payment, or the first payment to someone new, do {t:check} once. A real request passes it, so it costs you a few minutes.',
      'Where you can, pay in a way that protects you, such as by card or through a marketplace’s own payment button. Those can sometimes be disputed afterwards, and a wire transfer that you send yourself usually cannot.',
      'If the details change, if someone starts to hurry you, or if you are told not to check, stop. The request has become something else, and you need to ask the questions again.'
    ] },

  { id: 'check-realpayment', kind: 'check', after: 'realpayment',
    case: 'm-real-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words show that the invoice matches what Wen agreed? Tap them.', answer: 'the same total and the same bank account details as the quote' } },

  /* ---------- Invoice fraud ---------- */
  { id: 'meet-invoicefraud', kind: 'meet', outcome: 'invoicefraud',
    link: 'The real request has a copy that you cannot tell apart by looking: the same bill, from the same person, with one thing changed. It is the quietest scam in this unit.',
    case: 'm-inv-builder', mark: 'M1',
    strip: [
      'Every month for a year Joe has paid the invoice that his landscaper emails him, always into the same account.',
      'This month’s invoice, for $1,850, arrives in the same email thread, with the same logo and the same signature.',
      'It says that the landscaper has changed bank, and asks Joe to pay into the new account below.',
      'Nothing is hurried and no one is threatened. It reads like routine.'
    ],
    explain: [
      'Everything in this email is what Joe expects, except one line. The invoice is real, because the work is real and the amount is right. What has changed is where the money is to go.',
      'How can a scammer send it? In one of two ways. They have gotten into the landscaper’s mailbox, or into Joe’s, and can read every message and send one from inside the same thread. Or they have registered an address that differs from the real one by a single letter. Either way they wait, sometimes for weeks, until a large invoice is about to be paid. Then they send the one line that changes the account.',
      'It works because it is calm. There is no hurry, no threat and nothing odd in the tone. The only thing that is different is the thing a thief needs: the account. That is why a change of bank account details is a reason to stop, whoever is telling you.',
      'Notice that the reason this email gives for the money, a bill that Joe already pays, is exactly the reason that a real invoice from Maeve would give. So the question about what the money is for cannot tell the two apart. What tells them apart is what the request asks Joe to do with the money: here, to pay into new details that a message has just announced.',
      'You can see this on the day. The bill is a real one, and a message arrives telling you to pay into new details. What you cannot see from the message is whether the change is real, and that is what contacting them yourself is for.'
    ],
    feature: { step: 'M1', option: 'bill' },
    name: 'The name for this is {o:invoicefraud}. An invoice is a bill that a business sends. The fraud is not in the bill, which is real, but in the bank account details on it.' },

  { id: 'again-invoicefraud', kind: 'again', outcome: 'invoicefraud',
    link: 'Joe’s email gave you what to point to: {needs:invoicefraud}. Here it is again with an attorney, a house deposit and a much larger sum.',
    first: 'm-inv-builder', second: 'm-inv-attorney', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a garden, an apartment) and the size of the sum. Look at one thing only: whom the person is already paying.',
    prompt: { kind: 'phrase', answer: 'her attorney, Mr. Bell, has emailed her about the purchase, and she has paid his fees twice' },
    shared: [
      'In both cases the person is already paying someone: a landscaper every month, an attorney through a house purchase. In both, a message arrives inside the usual thread telling them to pay into a new account. Neither message hurries or threatens them.',
      'The sum is $1,850 in one case and $18,500 in the other, and the stories have nothing else in common. A bill that you really pay, with new details to pay into, is what {o:invoicefraud} names.'
    ] },

  { id: 'portrait-invoicefraud', kind: 'portrait', outcome: 'invoicefraud',
    link: 'What you point to is a payment you already make and a message that announces new details. This card fills in the rest of the picture.',
    typical: [
      'It always hides inside something real: a bill that you were going to pay anyway, to someone you really deal with.',
      'The scammer has gotten into a mailbox or set up a look-alike address. They read the thread, learn the amounts and the dates, and wait for a large payment: a deposit on a house, a quarterly bill, a builder’s final installment.',
      'The message sits in the usual thread with the usual signature. It says that the bank has changed, the account has moved or the old one is closed, and gives new details.',
      'It is calm, polite and routine. There is no threat, and often no deadline beyond the real one.',
      'The money is gone within hours, passed from account to account. The real person only finds out weeks later, when they ask why they have not been paid.',
      'Which of this can you see on the day? The bill, the arrangement and the message that announces new details are all in front of you. Whether the change is real is the one thing that you cannot see from the message, and it is what you find out by contacting them yourself.'
    ],
    not: [
      'A change of bank account details is not always a fraud, because businesses do change banks. The message cannot tell you which this is. That is why every message that announces new details gets this name: the name says what to do next, and does not claim to know the answer.',
      'A bill with the same details as the last one is not this name. And if you call the person at a number you already had and they confirm the change, you have found out something that the message could not tell you.'
    ],
    wild: ['"Please note that we have changed bank."', '"Please disregard our previous account details."', '"Our auditor has asked us to move banks."', '"From now on please pay into the account below."'],
    self: 'It reaches people in the middle of something that matters: a house purchase, a building job, a business that pays its suppliers each month. A tired person or a busy finance team is the usual target.',
    ask: '"Has anyone told me, by message, that the details I pay into have changed?"',
    act: [
      'Before you pay into any new details, call the person who sent the bill at a number that you already had: the one on the contract, on an earlier paper invoice, or on a website that you typed in yourself. Never use a number in the message that announced the change.',
      'Ask them, out loud, whether their bank account details have changed. If the change is real, they will confirm it in a minute.',
      'If you cannot reach them, wait. A real bill can wait a day, and a thief cannot.',
      'In a business, make it a rule that every change of bank account details is confirmed by a call and approved by a second person.',
      'If you have already paid, call your bank at once, at the number on your card, and ask them to try to recall the payment. The first hours matter most.'
    ] },

  { id: 'check-invoicefraud', kind: 'check', after: 'invoicefraud',
    case: 'm-inv-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words say what is different this quarter? Tap them.', answer: 'We have moved to a new bank' } },

  { id: 'look-invoicefraud-realpayment', kind: 'lookalike', ledger: 'invoicefraud~realpayment',
    link: 'You have met both names. This is the hardest pair in this part, because the bill is the same. This card puts them side by side.',
    cases: ['m-tessa-same', 'm-tessa-new'],
    instruction: 'Both cases are about the same invoice from Tessa’s builder. Compare one thing: the account that she is asked to pay into.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-tessa-same' },
    difference: [
      'In Case A the invoice asks Tessa to pay into the account that she has paid into four times, and she can see it in her own banking app. The answer is {a:M2.agreed}, and the case is {o:realpayment}.',
      'In Case B the same invoice, in the same thread, says that the builder has changed bank and gives a new account. A message that announces new details to pay into is what {o:invoicefraud} is made of.',
      'The builder, the amount, the logo and the email thread are the same. Only the account is different. You could not tell these two apart by how they look, and that is why the question about the account is the one that matters.'
    ] }
]);
