// Scams, Unit Four: cases shown inside cards, part two (the two exceptions in part two, the real payment request, invoice fraud and
// the fake payment link, with the twin pairs they are set beside). Field guide: see u4.cases-teach-1.js.

FC.cases('scams', 'u4', [

  /* ---------- Exceptions of part two ---------- */
  { id: 'm-exc-refundheld', use: 'teach', tier: 'varied', setting: 'shopping', topic: 'a refund said to be held after a fake shop', name: 'The refund that is held',
    text: "Frances paid £2,000 to an online shop that turned out not to exist, and her bank could not get the money back. Now a text arrives: 'A refund of £2,000 is being held for you. To release it, pay a £90 release charge to the account below.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] }, also: ['prize'],
    cues: { D1: 'pay a £90 release charge to the account below', M1: ['paid £2,000 to an online shop that turned out not to exist', 'A refund of £2,000 is being held for you'], M2: 'To release it, pay a £90 release charge' },
    segments: [
      { text: 'paid £2,000 to an online shop that turned out not to exist' },
      { text: 'A refund of £2,000 is being held for you', note: 'This is what makes the text sound like money that is waiting for her, but it does not tell you which kind of waiting money it is.' },
      { text: 'To release it, pay a £90 release charge to the account below', note: 'This is the fee. Both names have a fee, so it does not settle which of the two this is.' }
    ] },

  { id: 'm-exc-withdrawtax', use: 'teach', tier: 'varied', setting: 'money', topic: 'a tax to take profit out of a trading app', name: 'The tax on the profit',
    text: "Gareth has put £8,000 into a trading app. A woman called Nina, whom he has chatted to for three months and never met, showed him the app. It now shows £14,500. When he tries to take out his profit, a message appears: 'To withdraw, you must first pay a 20% tax of £2,900 into your trading account.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] }, also: ['fee'],
    cues: { D1: 'you must first pay a 20% tax of £2,900 into your trading account', M1: 'A woman called Nina, whom he has chatted to for three months and never met, showed him the app', M2: 'To withdraw, you must first pay a 20% tax of £2,900 into your trading account' },
    segments: [
      { text: 'Gareth has put £8,000 into a trading app', note: 'This is the money already in. It is not what settles the name.' },
      { text: 'A woman called Nina, whom he has chatted to for three months and never met, showed him the app' },
      { text: 'To withdraw, you must first pay a 20% tax of £2,900 into your trading account', note: 'This is a fee before he can take money out. A fee before money reaches you is what sounds like the other name, so it cannot be what settles it.' }
    ] },

  /* ---------- Real payment request ---------- */
  { id: 'm-real-rent', use: 'teach', tier: 'clean', setting: 'home', topic: 'rent reminded in the agency\'s own app', name: 'The agency rent reminder',
    text: "Hana signed a one-year tenancy at a letting agency's office that she walked into herself. The agreement says rent of £950 is due on the 1st, paid into the agency's client account, and prints the account name, sort code and number on page two. On the 25th the agency's own app, which she installed when she signed, shows: 'Please pay £950 by the 1st, to the account on page two of your agreement. Questions? Ring the office on the number on your agreement.' It is the same amount, to the same account, as every month, and nobody mentions any deadline but the 1st.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'Please pay £950 by the 1st, to the account on page two of your agreement', M1: 'rent of £950 is due on the 1st',
            M2: ['the same amount, to the same account, as every month', 'Ring the office on the number on your agreement'] } },

  { id: 'm-real-parking', use: 'teach', tier: 'varied', setting: 'government', topic: 'a parking charge paid on the council\'s own site', name: 'The council parking letter',
    text: "Tomás finds a letter on his doormat from his council: a parking charge of £70, reduced to £35 if paid within 14 days, for a day in March when he did park on that street. He does not use the web address printed on the letter. He types in the council's address, which he knows from his council tax bill, finds 'Pay a parking charge', and enters the number from the letter. The same £70 and the same date are there. He pays by card on that site.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['official'], M2: ['agreed'] },
    cues: { D1: 'a parking charge of £70, reduced to £35 if paid within 14 days', M1: 'a letter on his doormat from his council: a parking charge of £70',
            M2: ['He does not use the web address printed on the letter', 'The same £70 and the same date are there'] },
    segments: [
      { text: 'a parking charge of £70, reduced to £35 if paid within 14 days', note: 'This is the request. It is not what shows that it is real.' },
      { text: 'He does not use the web address printed on the letter', note: 'This is a step he takes, and it matters. The words to tap are what he finds when he does it.' },
      { text: 'The same £70 and the same date are there' },
      { text: 'He pays by card on that site', note: 'This is the payment itself. It comes after he has found that the request holds up.' }
    ] },

  { id: 'm-real-check', use: 'check', tier: 'clean', setting: 'work', topic: 'a roofer\'s invoice matching his quote',
    text: "Wen owns a flower shop, and a roofer repaired its roof for the £2,200 he quoted by email. When the work is done, an invoice arrives from the same email address, with the same total and the same bank details as the quote. It ends: 'Pay within 30 days. If anything looks wrong, ring me on the number on my quote.'",
    reason: { M2: 'The invoice matches what Wen agreed: {cue:M2}. Nothing has changed, and she can ring the roofer on the number on his quote.' },
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'Pay within 30 days', M1: 'an invoice arrives from the same email address', M2: 'the same total and the same bank details as the quote' },
    segments: [
      { text: 'a roofer repaired its roof for the £2,200 he quoted by email', note: 'This is what Wen agreed. The words to tap are the ones that show that the invoice matches it.' },
      { text: 'the same total and the same bank details as the quote' },
      { text: 'Pay within 30 days', note: 'This is the request, and it gives her a month. It does not show what the invoice matches.' }
    ] },

  /* ---------- Invoice fraud ---------- */
  { id: 'm-inv-builder', use: 'teach', tier: 'clean', setting: 'home', topic: 'a landscaper\'s monthly invoice', name: 'The landscaper\'s new bank',
    text: "Every month for a year Joe has paid the invoice that his landscaper, Maeve, emails him on the last Friday, always into the same account. This month's invoice, for £1,850, arrives in the same email thread as before, with the same logo and signature. At the bottom it says: 'Please note that we have changed bank. From now on please pay all invoices, starting with this one, into the new account below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'please pay all invoices, starting with this one, into the new account below', M1: 'Every month for a year Joe has paid the invoice that his landscaper, Maeve, emails him', M2: 'Please note that we have changed bank' } },

  { id: 'm-inv-solicitor', use: 'teach', tier: 'clean', setting: 'money', topic: 'a house deposit and a solicitor\'s new account', name: 'The solicitor\'s new account',
    text: "Farah is buying a flat. For six weeks her solicitor, Mr Bell, has emailed her about the purchase, and she has paid his fees twice. Now an email arrives in the same thread: 'Our client account has changed. Please send your £18,500 deposit to the new account below, not the one in my earlier email.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'Please send your £18,500 deposit to the new account below', M1: 'her solicitor, Mr Bell, has emailed her about the purchase, and she has paid his fees twice', M2: 'Our client account has changed' },
    segments: [
      { text: 'Farah is buying a flat', note: 'This is the background. It is not what the request is about.' },
      { text: 'her solicitor, Mr Bell, has emailed her about the purchase, and she has paid his fees twice' },
      { text: 'Please send your £18,500 deposit to the new account below, not the one in my earlier email', note: 'This is the request and the new details. The words to tap show whom Farah is being asked to pay.' }
    ] },

  { id: 'm-inv-check', use: 'check', tier: 'clean', setting: 'work', topic: 'an accountant\'s quarterly bill',
    text: "Owen's accountant has emailed him a bill every quarter for three years. This quarter's bill, in the usual thread, says: 'We have moved to a new bank. Please pay the £620 into the account below.'",
    reason: { M2: 'A message says that the bank has changed: {cue:M2}. The new details are what Owen is asked to pay into.' },
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'Please pay the £620 into the account below', M1: "Owen's accountant has emailed him a bill every quarter for three years", M2: 'We have moved to a new bank' },
    segments: [
      { text: "Owen's accountant has emailed him a bill every quarter for three years", note: 'This is the arrangement. It is not the part that is different this time.' },
      { text: 'We have moved to a new bank' },
      { text: 'Please pay the £620 into the account below', note: 'This is the request. The words to tap are the ones that say what has changed.' }
    ] },

  { id: 'm-tessa-same', use: 'teach', tier: 'clean', setting: 'home', topic: 'the usual invoice from her builder',
    text: "Tessa's builder, Ahmed, emails this month's invoice for £2,400 in the usual thread. It asks her to pay into the same account as the last four invoices, which she can see in her own banking app, and ends: 'Same details as always. Ring me if anything looks wrong.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'It asks her to pay into the same account as the last four invoices', M1: "emails this month's invoice for £2,400 in the usual thread",
            M2: ['the same account as the last four invoices, which she can see in her own banking app', 'Same details as always'] } },

  { id: 'm-tessa-new', use: 'teach', tier: 'clean', setting: 'home', topic: 'the same invoice and a new account',
    text: "Tessa's builder, Ahmed, emails this month's invoice for £2,400 in the usual thread. It ends: 'Please note that we have changed bank. Pay this invoice into the new account below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'Pay this invoice into the new account below', M1: "emails this month's invoice for £2,400 in the usual thread", M2: 'we have changed bank' } },

  /* ---------- Fake payment link ---------- */
  { id: 'm-link-parcel', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a redelivery fee in a text', name: 'The redelivery fee',
    text: "A text arrives on Jonas's phone from a number he does not know: 'ParcelPoint: your parcel could not be delivered. Pay a £2.99 redelivery fee at parcelpoint-redeliver.example to arrange a new time, or it will be sent back.' Jonas is expecting a parcel.",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['deal'], M2: ['link'] },
    cues: { D1: 'Pay a £2.99 redelivery fee at parcelpoint-redeliver.example', M1: 'your parcel could not be delivered', M2: 'Pay a £2.99 redelivery fee at parcelpoint-redeliver.example' } },

  { id: 'm-link-toll', use: 'teach', tier: 'clean', setting: 'government', topic: 'an unpaid toll in a text', name: 'The unpaid toll',
    text: "Ayesha has driven on a toll road twice this month. A text arrives: 'RoadPay: you have an unpaid toll of £6.80. Pay at roadpay-toll.example to avoid a £50 fine.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['official'], M2: ['link'] },
    cues: { D1: 'Pay at roadpay-toll.example to avoid a £50 fine', M1: 'you have an unpaid toll of £6.80', M2: 'Pay at roadpay-toll.example to avoid a £50 fine' },
    segments: [
      { text: 'Ayesha has driven on a toll road twice this month', note: 'This is why the text is believable. It is not what the text asks her to do.' },
      { text: 'you have an unpaid toll of £6.80', note: 'This is the reason given for the payment. The words to tap are the ones that say how she is to pay.' },
      { text: 'Pay at roadpay-toll.example to avoid a £50 fine' }
    ] },

  { id: 'm-link-check', use: 'check', tier: 'clean', setting: 'money', topic: 'a streaming subscription lapsed',
    text: "Kofi pays for a streaming service every month. A text arrives: 'Your account has been suspended because your last payment failed. Update your card at streamplus-billing.example.'",
    reason: { M2: 'Kofi is told to pay on a page that he reaches through a link in the text: {cue:M2}.' },
    outcome: 'fakelink', route: { D1: ['money'], M1: ['bill'], M2: ['link'] },
    cues: { D1: 'Update your card at streamplus-billing.example', M1: 'Your account has been suspended because your last payment failed', M2: 'Update your card at streamplus-billing.example' } },

  { id: 'm-dina-text', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a customs charge in a text',
    text: "Dina ordered a pair of boots from a shop in Germany. A text arrives from a number she does not know: 'Your parcel has a customs charge of £6.20. Pay at parcelpoint-customs.example to release it.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['deal'], M2: ['link'] },
    cues: { D1: 'Pay at parcelpoint-customs.example to release it', M1: 'Your parcel has a customs charge of £6.20', M2: 'Pay at parcelpoint-customs.example to release it' } },

  { id: 'm-dina-app', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a customs charge in the courier\'s own app',
    text: "Dina ordered a pair of boots from a shop in Germany. Her courier's own app, which she installed last year, shows the parcel with a customs charge of £6.20 and a button 'Pay in the app'. The same £6.20 is on the shop's order page, which she opened by typing in the shop's address.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: "a customs charge of £6.20 and a button 'Pay in the app'", M1: 'a customs charge of £6.20',
            M2: ["Her courier's own app, which she installed last year", "The same £6.20 is on the shop's order page"] } },

  /* ---------- Exception: a fee on a link, which is the advance fee ---------- */
  { id: 'm-exc-voucher', use: 'teach', tier: 'varied', setting: 'shopping', topic: 'a voucher costing a delivery fee to claim', name: 'The voucher with a fee',
    text: "A text arrives: 'You have won a £500 supermarket voucher! To claim it, pay £1.99 delivery at voucher-claim.example.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] }, also: ['link'],
    cues: { D1: 'pay £1.99 delivery at voucher-claim.example', M1: 'You have won a £500 supermarket voucher', M2: 'To claim it, pay £1.99 delivery' },
    segments: [
      { text: 'You have won a £500 supermarket voucher!', note: 'This is the prize that is said to be waiting. Both names can come with one, so it does not settle which of the two this is.' },
      { text: 'To claim it, pay £1.99 delivery' },
      { text: 'at voucher-claim.example', note: 'This is the link to a payment page. It is what makes the text look like the other name, so it cannot be what settles it.' }
    ] }
]);
