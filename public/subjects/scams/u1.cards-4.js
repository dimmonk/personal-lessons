// Scams, Unit One, part three (first half): the fourth kind of message (money), its look-alike pair with the first kind,
// and the two named exceptions in which a message asks for money and for something earlier in the key's list.
// Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'meet-money', kind: 'meet', family: 'money',
    link: 'Three kinds so far ask for something to do with your accounts or your device. The next kind is the one most people think of first: a request for money.',
    case: 'g-rent', mark: 'D1',
    strip: [
      'There is one message, from Dan’s landlord.',
      'It names an amount, £850, and a date, the 1st.',
      'It asks him to pay it into an account.',
      'Nothing is asked of his accounts or his devices, and nothing about himself.',
      'What is asked is for money to leave his account.'
    ],
    explain: [
      'What you are shown is a request to pay: an amount, a date, a way to do it. That is all a message of this kind is made of: money, and a request for you to send it.',
      'The key counts every way of paying as the same kind: a bank transfer, a card payment, cash, crypto, gift cards, or a payment made on a page you reach through a link. The request is the same in all of them: money leaves your hands.',
      'It is a kind of its own because money is the one thing in this list that is hard to get back. A way into an account can be shut, and a program can be removed, but money sent by transfer, in cash or on gift cards is usually gone. The key puts this kind after the first two: where a message asks for money and also for something earlier in its list, it takes the earlier one.',
      'Dan’s rent is a real request: his landlord, a usual amount, the same account as always. A request for money can be completely ordinary, and the first question does not say whether it is. It says only what is being asked.'
    ],
    feature: { step: 'D1', option: 'money' },
    name: [
      'The key’s answer, and the name of this kind, is {a:D1.money}. After this answer the key asks two further questions that give a finer name: the name of a kind of scam, or of the real request that the scams copy.'
    ] },

  { id: 'again-money', kind: 'again', family: 'money',
    link: 'The last card gave you what to point to for {a:D1.money}, from one case: {needs:money}. Here is a second case with a different story. This one comes from a manager, and it is in a hurry.',
    first: 'g-rent', second: 'g-gift', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a landlord, a manager) and ignore how pressing the second one is. Look at one thing only: which words ask the person to send money?',
    prompt: { kind: 'phrase', answer: 'Please transfer £2,000 to this account today for a supplier' },
    shared: [
      'Both messages ask for the same thing: money, sent to an account. Dan is asked for £850 by the 1st, and Sunita is asked for £2,000 today.',
      'One of them is a hurried request from someone claiming to be a manager, and the other is a landlord’s usual email. One of them might be real, and one might not. The question does not ask that. It asks what is being requested, and both requests are for money. That is what {a:D1.money} names.'
    ] },

  { id: 'portrait-money', kind: 'portrait', family: 'money',
    link: 'You know what to point to for {a:D1.money}. This card fills in the rest of the picture, so that you can spot it in real life.',
    typical: [
      'There is an amount, or a promise of an amount, and a way to pay it: a transfer, a card, cash, crypto, gift cards, or a payment page behind a link.',
      'The request comes with a reason: a bill, a fine, a fee, a debt, a deal, an emergency, a refund that needs a payment first.',
      'It often comes with a date or a hurry, and sometimes with an order to tell no one.',
      'It can come from someone you deal with every month, or from someone you have never met.',
      'Once the money has gone, it is hard to get back.'
    ],
    not: [
      'A notice that a payment will be taken as usual, with nothing for you to do, is not a request to pay: it only tells you. A message with the same amount that says "pay it today at this link" is a request.',
      'A request to give your card number so that "nothing will be charged" is not a request to pay either. It asks you to tell them something about yourself, and the key puts it with facts about you.'
    ],
    wild: ['"Your invoice is attached. Please pay within 14 days."', '"Please transfer the money today."', '"Pay the £1.99 fee to release your parcel."', '"Buy gift cards and tell nobody."', '"Please send back the difference."'],
    self: 'Bills, rent, subscriptions, collections at work, a friend who asks for a loan: money requests reach you all the time, and most of them are what they say. The same words reach you from people who are not.',
    ask: '"Is this asking me to hand over money, in any form?" If it is, the key’s answer is the one for money, unless it also asks for something earlier in the key’s list.' },

  { id: 'check-money', kind: 'check', after: 'money',
    case: 'g-lend',
    ask: { type: 'phrase', step: 'D1', say: 'Which words ask Gabi to send money? Tap them.',
           answer: "Can you send £300 to my sister's account today" } },

  { id: 'look-money-nothing', kind: 'lookalike', ledger: 'money~nothing',
    link: 'You have met four kinds. Money is in the subject of many real notices that ask for nothing, and that makes this pair a hard one to tell apart at a glance.',
    cases: ['g-gas-debit', 'g-gas-overdue'],
    instruction: 'Both cases are about Amara’s gas bill of £64. Compare one thing: does the message ask her to pay, or does it only tell her what will happen?',
    prompt: { kind: 'which', option: 'D1.money', answer: 'g-gas-overdue' },
    difference: [
      'In Case A the text says that a direct debit will leave her account on 1 November, as usual, and that she does not need to do anything. Her bank takes the money by an arrangement she made earlier. She is not asked to pay anything. The key’s answer is {a:D1.nothing}.',
      'In Case B the text says that the bill is overdue and tells her to pay it today at an address, or her gas will be cut off. Now she is asked to pay, and the way to do it comes with the message. The key’s answer is {a:D1.money}.',
      'The amount, the company and the month are the same. What differs is whether anyone asks her to do something about the money.'
    ] },

  /* ---------- exceptions: a message that asks for two things at once ---------- */
  { id: 'exc-refund', kind: 'exception', ledger: 'device~money', looksLike: 'money', is: 'device',
    h: 'A refund that starts with someone watching your device',
    link: 'The cases so far have asked for one thing each. Real messages sometimes ask for two, and the key has to give one answer. This case asks for money and for something else.',
    case: 'g-refund-share',
    setup: 'There is a refund in this case, and an instruction to send money back, and a request to send money is what {a:D1.money} usually sounds like. Yet the key’s answer for this case is {a:D1.device}.',
    prompt: { kind: 'phrase', answer: 'Press the Share button in this meeting app so that I can see your screen' },
    because: [
      'Count what the caller asks for, and in what order. First, Harold is asked to let her watch his device. Then he is asked to send money back. That is two requests, and the second only comes if the first is done.',
      'The key gives every message one answer, and where a message asks for two things, it takes the one that is earlier in its list: a request about the device, then one about an account, then one about money. The reason is how far each reaches. Once she can watch his device, she can see his bank, read the codes that come to him and move money herself, so the money she is asking him to send is the smaller part of what she could get.',
      'So the answer is {a:D1.device}. The sending of money back does not go away: it is the later part of the same call, and the key has not forgotten it. It only does not decide the answer.'
    ],
    take: 'When a message asks for something about your device and for money, put your finger on the request about the device. It is the first of the two things in the key’s list.' },

  { id: 'exc-fine', kind: 'exception', ledger: 'access~money', looksLike: 'money', is: 'access',
    h: 'A fine that has to be paid after you sign in',
    link: 'The last case asked for money and for something about a device. This one asks for money and for something about an account.',
    case: 'g-fine-signin',
    setup: 'The whole text is about a fine, a date and a payment, and a request to pay is what {a:D1.money} usually sounds like. Yet the key’s answer for this case is {a:D1.access}.',
    prompt: { kind: 'phrase', answer: 'Sign in to your council account with your username and password' },
    because: [
      'Count what the text asks for, and in what order. First, Lorna is asked to sign in with her username and password. Then she is told that this is how to pay. That is two requests, and the payment only comes after the sign-in.',
      'The key takes the earlier one in its list when a message asks for two: a way into an account comes before money. A way into an account reaches everything the account holds, and the payment she is asked for is only part of that.',
      'So the answer is {a:D1.access}. The fine, the date and the payment are all there, and they are the reason the text gives. They are not what the first question looks at. It looks at what she is asked to do, and the first thing is to sign in.'
    ],
    take: 'When a message asks you to sign in so that you can pay, put your finger on the sign-in. The payment is the reason it gives, and the sign-in is the request.' }
]);
