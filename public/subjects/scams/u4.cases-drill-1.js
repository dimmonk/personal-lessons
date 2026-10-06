// Scams, Unit Four: drill cases for stage one (the key's answers are shown, the learner gives the name). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words, shown after the answer, decisive sentence first. not names the most tempting
// wrong name for the case (a look-alike in the ledger) and says why it fails. Every case here is asked the unit's two questions.

FC.cases('scams', 'u4', [

  /* ---------- Group one: someone known only online ---------- */
  { id: 'd-n-romance', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a soldier abroad and a court fine',
    text: "Carol has written every day for six months to a man called Mike, who says he is a soldier posted overseas. She has never seen him on a live call. He writes: 'I was stopped for a traffic violation, and the court will release me only if I pay a $2,400 fine. Please send it to my lawyer's account.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: "Please send it to my lawyer's account", M1: 'the court will release me only if I pay a $2,400 fine', M2: 'the court will release me only if I pay a $2,400 fine' },
    reason: { M1: 'Mike is someone Carol knows only through messages, and the money is for trouble that he says is his: {cue:M1}.',
              M2: 'The request is to pay for his emergency, a fine that keeps him in custody: {cue:M2}. Nothing is to be invested.' },
    not: { outcome: 'pigbutcher', why: 'Mike does not ask her to put money into any site or app. The money is for his own trouble.' } },

  { id: 'd-n-pig', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a gaming friend and a currency app',
    text: "Sofia has chatted with a man called Jin in an online game for three months. He tells her that he trades on a currency app that his cousin set up, and sends her a link to it. 'Put $1,500 in this week,' he writes, 'and I will show you how to take the profit.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Put $1,500 in this week', M1: 'He tells her that he trades on a currency app that his cousin set up, and sends her a link to it', M2: 'Put $1,500 in this week' },
    reason: { M1: 'Jin is someone she knows only from a game, and the money is for an investment that he showed her: {cue:M1}.',
              M2: 'She is asked to put money into the app that he showed her: {cue:M2}. It is not for any trouble of his own.' },
    not: { outcome: 'romance', why: 'Jin does not have an emergency. The money is to go into an app that he showed her, not to pay for his trouble.' } },

  /* ---------- Group two: money waiting, or money lost ---------- */
  { id: 'd-n-advance', use: 'drill', tier: 'clean', setting: 'home', topic: 'an inheritance from a stranger',
    text: "An attorney's email tells Brian that a man he has never heard of has died and left him $420,000. 'The estate can be paid out as soon as you have sent $1,100 for the transfer certificate to the account below.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'you have sent $1,100 for the transfer certificate to the account below', M1: 'a man he has never heard of has died and left him $420,000', M2: 'as soon as you have sent $1,100 for the transfer certificate' },
    reason: { M1: 'The email says that money is waiting for Brian, an inheritance that he never expected: {cue:M1}.',
              M2: 'He must pay before any of it reaches him: {cue:M2}. The fee comes first.' },
    not: { outcome: 'recovery', why: 'The $420,000 was never Brian’s and nothing was taken from him, so this is not an offer to get back something he lost.' } },

  { id: 'd-n-recovery', use: 'drill', tier: 'clean', setting: 'work', topic: 'a victim support call after a romance scam',
    text: "Two years after she paid $12,000 to a man she met online, Lily gets a call at work from a woman who says she is from a 'victim support unit': 'We have found your money. Our fee to release it is $800, to be paid by wire transfer before we start.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'Our fee to release it is $800, to be paid by wire transfer before we start', M1: 'We have found your money', M2: 'Our fee to release it is $800, to be paid by wire transfer before we start' },
    reason: { M1: 'The caller offers to return money that Lily lost earlier, to the man she met online: {cue:M1}.',
              M2: 'There is a fee that comes first: {cue:M2}.' },
    not: { outcome: 'advancefee', why: 'The money is not a prize or a grant that was never hers. It is money that she paid and lost.' } },

  /* ---------- Group three: a bill, and the real request that it copies ---------- */
  { id: 'd-n-real1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a plumber\'s invoice matching his quote',
    text: "Moses asked a plumber to fix his furnace, and accepted the written quote of $340. After the job an invoice arrives from the plumber's own address, with the same figure and the bank account details that were on the quote. It says: 'Please pay within 14 days. Call the number on my quote if you want to talk about it.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'Please pay within 14 days', M1: "an invoice arrives from the plumber's own address, with the same figure", M2: ['the bank account details that were on the quote', 'Call the number on my quote'] },
    reason: { M1: 'The request is a bill from someone Moses asked to do the work: {cue:M1}.',
              M2: 'Nothing has changed since he agreed. The details match the ones he was given, and he is invited to contact the plumber at the number he already had: {cue:M2}.' },
    not: { outcome: 'invoicefraud', why: 'The bank account details are the ones on the quote. Nothing in the email says that they have changed.' } },

  { id: 'd-n-invoice', use: 'drill', tier: 'clean', setting: 'work', topic: 'a school\'s catering supplier changes bank',
    text: "Mr. Hale looks after a school's accounts, and pays a catering firm every month. An email from the firm's usual address says: 'We now bank with a different bank. Please pay April's invoice of $4,300 into the account below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: "Please pay April's invoice of $4,300 into the account below", M1: 'pays a catering firm every month', M2: 'We now bank with a different bank' },
    reason: { M1: 'The money is for a bill that Mr. Hale already pays every month: {cue:M1}.',
              M2: 'A message tells him that the bank has changed: {cue:M2}. The new details are what he is asked to pay into.' },
    not: { outcome: 'realpayment', why: 'The amount and the sender are what he expects, but the details are new, and they arrived in a message. A real request uses the details he was given at the start.' } },

  /* ---------- Group four: a link, a threat and a buyer ---------- */
  { id: 'd-n-link', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a rebooking fee after a missed delivery',
    text: "Karin has ordered something this week. A text from a number she does not know says: 'We tried to deliver your order today. Re-book a time and pay a $1.45 fee at fastdrop-rebook.example.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['deal'], M2: ['link'] },
    cues: { D1: 'pay a $1.45 fee at fastdrop-rebook.example', M1: 'We tried to deliver your order today', M2: 'Re-book a time and pay a $1.45 fee at fastdrop-rebook.example' },
    reason: { M1: 'The charge is part of a delivery that she is waiting for: {cue:M1}.',
              M2: 'She is told to pay on a page that she reaches through a link in the text: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'Nothing that she already had shows that the charge is real. It came in a message, with a link to pay on.' } },

  { id: 'd-n-official', use: 'drill', tier: 'clean', setting: 'government', topic: 'a canceled visa and gift cards',
    text: "A man calls Raj and says that he is from immigration: 'Your visa has been canceled, and the police will collect you tomorrow unless you clear $1,800 now. Buy gift cards, read me the numbers, and tell nobody.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'clear $1,800 now', M1: 'Your visa has been canceled, and the police will collect you tomorrow', M2: 'Buy gift cards, read me the numbers, and tell nobody' },
    reason: { M1: 'The caller claims to be an official, and the reason he gives is a threat: {cue:M1}.',
              M2: 'Raj is to pay at once, in a way that cannot be undone, and to tell nobody: {cue:M2}. Nothing more specific shows.' },
    not: { outcome: 'fakelink', why: 'There is no link and no payment page. Raj is told to buy gift cards and read out the numbers.' } },

  { id: 'd-n-over', use: 'drill', tier: 'clean', setting: 'work', topic: 'a laptop and a moving company',
    text: "Chris sells his old laptop for $500. The buyer pays $900 and writes: 'My boss paid the wrong amount. Please send $400 to my moving company, and they will pick up the laptop.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: 'Please send $400 to my moving company', M1: 'Chris sells his old laptop for $500', M2: 'My boss paid the wrong amount. Please send $400 to my moving company' },
    reason: { M1: 'The money is part of a sale that Chris is making: {cue:M1}.',
              M2: 'The buyer has paid more than the price and asks him to send the difference on to someone else: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The amount that reached Chris is not the price that was agreed, and he is asked to send some of it on to a third party.' } },

  /* ---------- Group five, varied: the real request and the link, again ---------- */
  { id: 'd-n-real2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'theater seats booked in the theater\'s own app',
    text: "Dee has a theater app that she installed last year. She books two seats at $48 each, and the app shows: 'Pay $96 now to confirm your booking. Your tickets will be in the app right away.' The price is the one on the theater's own website.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Pay $96 now to confirm your booking', M1: 'She books two seats at $48 each', M2: ["a theater app that she installed last year", "The price is the one on the theater's own website"] },
    reason: { M1: 'The payment is part of a booking that she is making herself: {cue:M1}.',
              M2: 'She started it in an app that she already had, and the price matches the theater’s own website: {cue:M2}.' },
    not: { outcome: 'fakelink', why: 'The payment is not on a page reached through a link in a message. She is paying inside an app that she installed herself.' } },

  { id: 'd-n-link2', use: 'drill', tier: 'varied', setting: 'home', topic: 'an overdue energy bill on a link',
    text: "Femi gets a text from a number he does not know: 'Your energy bill of $87 is overdue. Pay now at energysure-pay.example to avoid a late fee.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['bill'], M2: ['link'] },
    cues: { D1: 'Pay now at energysure-pay.example to avoid a late fee', M1: 'Your energy bill of $87 is overdue', M2: 'Pay now at energysure-pay.example' },
    reason: { M1: 'The reason is a bill that Femi may well pay: {cue:M1}.',
              M2: 'He is told to pay on a page that he reaches through a link in the text: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The bill came in a message with its own link to pay on. Nothing that Femi already had shows that it is real.' } }
]);
