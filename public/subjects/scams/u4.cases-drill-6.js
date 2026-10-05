// Scams, Unit Four: drill cases for stage four (the whole route, no help), part two: the varied cases, in which the same feature
// is told in a different setting. Field guide: see u4.cases-drill-5.js.

FC.cases('scams', 'u4', [

  /* ---------- Group five: someone known only online, in a new setting ---------- */
  { id: 'd-r-pig2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a fund manager met on a professional network',
    text: "Hana was contacted on a professional network by a man called Victor, who says he is a fund manager. After a month of messages he shares a link to a fund that only his clients can join. 'Transfer £8,000 to open your place,' he writes. 'I will watch your first trade myself.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Transfer £8,000 to open your place', M1: 'After a month of messages he shares a link to a fund that only his clients can join', M2: 'Transfer £8,000 to open your place' },
    reason: { D1: '{cue:D1} asks her to send money, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'Victor is someone she knows only from a network, and the money is for an investment that he showed her: {cue:M1}.',
              M2: 'She is asked to put money into the fund that he showed her: {cue:M2}.' },
    not: { outcome: 'advancefee', why: 'Nobody says that money is waiting for Hana. She is asked to put her own money into the fund.' },
    wouldChange: 'If Victor had been her own bank’s adviser, whom she had contacted herself, the case would be outside these questions.' },

  { id: 'd-r-romance2', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a card-game friend and a frozen hotel booking',
    text: "Ewa met a man called Marc in an online card-game group, and they have chatted for nine months. He writes: 'My bank has frozen my card while I am travelling, and I cannot pay my hotel. Please send £1,600 to the hotel's account, and I will repay you on Friday.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: "Please send £1,600 to the hotel's account", M1: 'My bank has frozen my card while I am travelling, and I cannot pay my hotel', M2: 'My bank has frozen my card while I am travelling, and I cannot pay my hotel' },
    reason: { D1: '{cue:D1} asks her to send money, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'Marc is someone she knows only from a card game, and the money is for trouble that he says is his: {cue:M1}.',
              M2: 'She is asked to pay for his emergency, a frozen card and an unpaid hotel: {cue:M2}.' },
    not: { outcome: 'pigbutcher', why: 'Marc does not show her a site or an app to put money into. The money is for his own bill.' },
    wouldChange: 'If Marc had been a friend from her own club whom she had met many times, the case would be outside these questions.' },

  /* ---------- Group six: three copies of a bill, and the real one ---------- */
  { id: 'd-r-real2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a carpenter\'s deposit matching his quote',
    text: "Rosa asked a carpenter to build shelves, after a neighbour recommended him. He visited, and then emailed: 'As agreed, a £400 deposit by the 5th, into the account on my quote.' The account matches the one on the carpenter's own website, which Rosa typed in herself.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'a £400 deposit by the 5th', M1: 'Rosa asked a carpenter to build shelves', M2: ['into the account on my quote', "The account matches the one on the carpenter's own website, which Rosa typed in herself"] },
    reason: { D1: '{cue:D1} is a request to pay, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The deposit is part of a job that she arranged herself: {cue:M1}.',
              M2: 'The account is the one on his quote, and it matches the website that she typed in herself: {cue:M2}.' },
    not: { outcome: 'invoicefraud', why: 'No details have changed. The account is the one that she was given at the start, and she has checked it against a website that she typed in.' },
    wouldChange: 'If the email had said that his account had changed since the quote, it would be {o:invoicefraud}.' },

  { id: 'd-r-inv2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a nursery\'s termly fees and a new bank',
    text: "Reema pays her child's nursery its fees each term. An email from the nursery's usual address says: 'We have moved to a new bank. Please pay this term's £2,100 into the account in the attached letter.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: "Please pay this term's £2,100 into the account in the attached letter", M1: "Reema pays her child's nursery its fees each term", M2: 'We have moved to a new bank' },
    reason: { D1: '{cue:D1} asks her to pay, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The money is for fees that she already pays: {cue:M1}.',
              M2: 'A message tells her that the bank has changed, and gives new details: {cue:M2}.' },
    not: { outcome: 'fakelink', why: 'There is no link and no payment page. The request is to pay into new bank details.' },
    wouldChange: 'If the fees were to go to the account that the nursery gave her when she enrolled, it would be {o:realpayment}.' },

  { id: 'd-r-link2', use: 'drill', tier: 'varied', setting: 'government', topic: 'a congestion charge on a link',
    text: "Dilip drove into the city twice last week. A text from a number he does not know says: 'Your congestion charge of £15 was not paid. Settle it at citycharge-pay.example to avoid a £160 penalty.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['official'], M2: ['link'] },
    cues: { D1: 'Settle it at citycharge-pay.example', M1: 'Your congestion charge of £15 was not paid', M2: 'Settle it at citycharge-pay.example to avoid a £160 penalty' },
    reason: { D1: '{cue:D1} asks him to pay, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The reason is a charge from an authority, with a penalty behind it: {cue:M1}.',
              M2: 'He is told to pay on a page that he reaches through a link in the text: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'Nothing that Dilip already had shows that the charge is real. It came in a message, with a link to pay on.' },
    wouldChange: 'If he found the same £15 on the authority’s own website, at an address he typed in, it would be {o:realpayment}.' },

  /* ---------- Group seven: a threat, a buyer and the real bill ---------- */
  { id: 'd-r-off2', use: 'drill', tier: 'varied', setting: 'government', topic: 'a court judgment and post office vouchers',
    text: "A woman who says that she is from the county court rings Ian: 'A judgment of £2,700 has been made against you. A bailiff will visit this evening unless you pay now with vouchers from the post office. Do not discuss it with anyone.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'pay now with vouchers from the post office', M1: 'A judgment of £2,700 has been made against you', M2: 'pay now with vouchers from the post office. Do not discuss it with anyone' },
    reason: { D1: '{cue:D1} asks him to pay, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The caller claims to be from a court, and the reason is a debt with a bailiff behind it: {cue:M1}.',
              M2: 'He is to pay at once, with vouchers that cannot be undone, and to tell no one: {cue:M2}. Nothing more specific shows.' },
    not: { outcome: 'realpayment', why: 'A real court would write, give him time and a way to appeal, and would not take vouchers or ask him to keep quiet.' },
    wouldChange: 'If a letter had given him 30 days and a way to appeal, and he found the same judgment on the court’s own website, it would be {o:realpayment}.' },

  { id: 'd-r-over2', use: 'drill', tier: 'varied', setting: 'work', topic: 'a translator paid for two jobs at once',
    text: "Mina, a translator, charges a client £350. The client pays £850 and writes: 'The accountant made a mistake. Please send back the £500 to our other company's account.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: "Please send back the £500 to our other company's account", M1: 'Mina, a translator, charges a client £350', M2: "Please send back the £500 to our other company's account" },
    reason: { D1: '{cue:D1} asks her to send money, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The money is part of a job that she is paid for: {cue:M1}.',
              M2: 'The client has paid more than the price and asks her to send the difference to a different account: {cue:M2}.' },
    not: { outcome: 'fakelink', why: 'No link and no payment page are involved. Money has reached Mina first, and she is asked to send some of it on.' },
    wouldChange: 'If the client had asked her to send the £500 back to the account that it came from, after their bank reversed it, there would be no payment to a third party.' },

  { id: 'd-r-real3', use: 'drill', tier: 'varied', setting: 'health', topic: 'a physiotherapist\'s bill for four sessions',
    text: "Joss had four sessions with a physiotherapist, who told him the price of £220 at the start. After the last one the practice emails a bill for £220 to the account that was on the booking page he used. It says: 'Call reception on the number on the booking page if you have any questions.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'the practice emails a bill for £220', M1: 'Joss had four sessions with a physiotherapist, who told him the price of £220 at the start', M2: ['£220 to the account that was on the booking page he used', 'Call reception on the number on the booking page'] },
    reason: { D1: '{cue:D1} is a request to pay, and nothing earlier in the list is asked, so the answer is {a:D1.money}.',
              M1: 'The money is a bill for a service that he arranged and agreed the price of: {cue:M1}.',
              M2: 'The amount is the one he was told, the account is the one on the booking page he used, and he is invited to ring: {cue:M2}.' },
    not: { outcome: 'overpayment', why: 'Joss is not paid anything and is not asked to send anything on. The practice asks him to pay the price that he was given.' },
    wouldChange: 'If the email had said that the practice had changed banks, it would be {o:invoicefraud}.' }
]);
