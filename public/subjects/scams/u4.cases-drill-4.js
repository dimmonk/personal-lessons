// Scams, Unit Four: drill cases for stage three (the first answer is shown; the learner finishes the route and gives the name).
// None of these appears in a card. Each case is asked the unit's two questions, so each carries marked words and a reason for both.

FC.cases('scams', 'u4', [

  /* ---------- Group one: someone known only online ---------- */
  { id: 'd-f-romance', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a chess partner stopped at a border',
    text: "Joan has played chess online with a man called Walter for ten months, and has never seen him on a call. He writes: 'I have been stopped at the border, and the guard says I must pay a £780 fine before they let me through. Please send it to this account.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'Please send it to this account', M1: 'I have been stopped at the border, and the guard says I must pay a £780 fine before they let me through', M2: 'I have been stopped at the border, and the guard says I must pay a £780 fine before they let me through' },
    reason: { M1: 'Walter is someone she knows only from a chess site, and the money is for trouble that he says is his: {cue:M1}.',
              M2: 'She is asked to pay for his emergency, a fine at a border: {cue:M2}. Nothing is to be invested.' },
    not: { outcome: 'pigbutcher', why: 'Walter does not show her a site or an app to put money into. The money is for his own trouble.' } },

  { id: 'd-f-pig', use: 'drill', tier: 'clean', setting: 'money', topic: 'a wrong number and a gold-trading app',
    text: "After five weeks of friendly chat that began with a text to a wrong number, a man called Ben tells Zara about a gold-trading app that has made him 'a lot'. 'Download it,' he writes, 'and put in £2,500 before the price moves.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'put in £2,500 before the price moves', M1: "tells Zara about a gold-trading app that has made him 'a lot'", M2: 'put in £2,500 before the price moves' },
    reason: { M1: 'Ben is someone she knows only from messages, and the money is for an investment that he showed her: {cue:M1}.',
              M2: 'She is asked to put money into the app that he showed her: {cue:M2}.' },
    not: { outcome: 'romance', why: 'Ben has no emergency. The money is to go into an app that he showed her.' } },

  /* ---------- Group two: money waiting, or money lost ---------- */
  { id: 'd-f-recovery', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a villa deposit lost to a fake listing',
    text: "Ibrahim paid a £900 deposit for a holiday villa that did not exist. A week later a stranger messages him: 'I run a recovery service. I can have your £900 returned if you send a £90 start-up fee first.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'if you send a £90 start-up fee first', M1: 'I can have your £900 returned', M2: 'if you send a £90 start-up fee first' },
    reason: { M1: 'The stranger offers to get back money that Ibrahim lost: {cue:M1}.',
              M2: 'There is a fee that comes first: {cue:M2}.' },
    not: { outcome: 'advancefee', why: 'The £900 was not a prize that was never his. It is his own deposit, which he paid and lost.' } },

  { id: 'd-f-advance', use: 'drill', tier: 'clean', setting: 'health', topic: 'a dental refund held back by a handling fee',
    text: "Mr Osei gets an email: 'You are entitled to a £3,000 refund from the dental fund. To release it, pay a £75 handling fee by bank transfer.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'pay a £75 handling fee by bank transfer', M1: 'You are entitled to a £3,000 refund from the dental fund', M2: 'To release it, pay a £75 handling fee' },
    reason: { M1: 'The email says that money is waiting for him, a refund that he has not claimed: {cue:M1}.',
              M2: 'He must pay before any of it reaches him: {cue:M2}.' },
    not: { outcome: 'recovery', why: 'Mr Osei lost nothing that someone offers to get back. The refund is said to be new money that is waiting for him.' } },

  /* ---------- Group three: a bill, and the real request that it copies ---------- */
  { id: 'd-f-real', use: 'drill', tier: 'clean', setting: 'home', topic: 'a school trip paid in the school\'s own app',
    text: "Mrs Adeyemi receives a message in the school's own app, which she installed in September: 'Please pay £35 for the Year 5 trip by Friday 10th. The amount is on the letter that came home in the book bag.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'Please pay £35 for the Year 5 trip by Friday 10th', M1: "a message in the school's own app", M2: ['The amount is on the letter that came home in the book bag', "the school's own app, which she installed in September"] },
    reason: { M1: 'The request is for a payment to a school that she already deals with: {cue:M1}.',
              M2: 'It comes in an app that she installed herself, and the amount matches a letter that she already has: {cue:M2}.' },
    not: { outcome: 'fakelink', why: 'The payment is not on a page that she reaches through a link in a message. It is inside the school’s own app, which she already had.' } },

  { id: 'd-f-invoice', use: 'drill', tier: 'clean', setting: 'health', topic: 'a vet\'s practice changes bank',
    text: "Bella's vet has billed her by email for two years. This time the email, in the usual thread, says: 'Our practice has changed banks. Please pay the £265 bill into the account below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'Please pay the £265 bill into the account below', M1: "Bella's vet has billed her by email for two years", M2: 'Our practice has changed banks' },
    reason: { M1: 'The money is for a bill that Bella already pays: {cue:M1}.',
              M2: 'A message tells her that the bank has changed, and gives new details to pay into: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The sender and the amount are the usual ones, but the account is new, and it arrived in a message.' } },

  /* ---------- Group four, varied: a link and a buyer ---------- */
  { id: 'd-f-link', use: 'drill', tier: 'varied', setting: 'health', topic: 'a gym membership not renewed',
    text: "Rahul gets a text from a number he does not know: 'Your gym membership has not renewed because your card was declined. Update your card at gymfit-renew.example today.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['bill'], M2: ['link'] },
    cues: { D1: 'Update your card at gymfit-renew.example today', M1: 'Your gym membership has not renewed because your card was declined', M2: 'Update your card at gymfit-renew.example' },
    reason: { M1: 'The reason is a membership that Rahul may well pay for: {cue:M1}.',
              M2: 'He is told to pay on a page that he reaches through a link in the text: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The charge came in a message, with a link to pay on. Nothing that Rahul already had shows that it is real.' } },

  { id: 'd-f-over', use: 'drill', tier: 'varied', setting: 'relationships', topic: 'a wedding dress sold on',
    text: "Nadia sells her second-hand wedding dress for £300. The buyer pays £700 and writes: 'Sorry, I added a zero. Send the extra £400 to my dressmaker, who will collect the dress.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: 'Send the extra £400 to my dressmaker', M1: 'Nadia sells her second-hand wedding dress for £300', M2: 'Sorry, I added a zero. Send the extra £400 to my dressmaker' },
    reason: { M1: 'The money is part of a sale that Nadia is making: {cue:M1}.',
              M2: 'The buyer has paid more than the price and asks her to send the extra to someone else: {cue:M2}.' },
    not: { outcome: 'fakelink', why: 'No link and no payment page are involved. Money has reached Nadia first, and she is asked to send some of it on.' } },

  /* ---------- Group five, varied: a threat, and the real bill that it copies ---------- */
  { id: 'd-f-official', use: 'drill', tier: 'varied', setting: 'money', topic: 'a pension to be taken back',
    text: "A caller who says that he is from the pensions office tells Mr Quill: 'There is a problem with your pension payments, and £3,100 will be taken back unless you pay it into our protected account now. Do not tell your pension provider.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'pay it into our protected account now', M1: 'There is a problem with your pension payments, and £3,100 will be taken back', M2: 'pay it into our protected account now. Do not tell your pension provider' },
    reason: { M1: 'The caller claims to be an official, and the reason is a danger to Mr Quill’s money: {cue:M1}.',
              M2: 'He is told to pay at once, into an account that the caller gives, and to tell no one: {cue:M2}. Nothing more specific shows.' },
    not: { outcome: 'realpayment', why: 'A real request would give him time, a way to appeal and something that he could look up himself. This one hurries him and tells him to keep quiet.' } },

  { id: 'd-f-real2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a solicitor\'s final bill matching the engagement letter',
    text: "Hugh hired a solicitor, and signed an engagement letter that set the fee at £950 and named the firm's account. The final bill arrives by post, for £950, with the same account as the letter. It says: 'Ring the office on the number on your engagement letter if you have any questions.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'The final bill arrives by post, for £950', M1: 'Hugh hired a solicitor, and signed an engagement letter that set the fee at £950', M2: ['for £950, with the same account as the letter', 'Ring the office on the number on your engagement letter'] },
    reason: { M1: 'The request is a bill from a solicitor whom he hired and agreed a fee with: {cue:M1}.',
              M2: 'The amount and the account match the letter he signed, and he is invited to ring a number that he already had: {cue:M2}.' },
    not: { outcome: 'fakeofficial', why: 'The bill is not backed by a threat. It gives him time, matches what he signed, and invites him to ring.' } }
]);
