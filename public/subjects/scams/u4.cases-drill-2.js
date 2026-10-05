// Scams, Unit Four: drill cases for stage two (one key question at a time on a new case). None of these appears in a card.
// Each case is asked one question only, so it carries the marked words and the reason for that question. The route is complete,
// because the key gives every case one name by one route.

FC.cases('scams', 'u4', [

  /* ---------- The first question about money: what is it for? ---------- */
  { id: 'd-p-romance', use: 'drill', tier: 'clean', setting: 'relationships', topic: 'a hiking forum and a hotel keeping a passport',
    text: "Hamid has messaged every evening for five months with a woman called Rina, whom he met on a hiking forum. She writes: 'My card was blocked in Dubai and the hotel has kept my passport until I pay £1,950. Please send it to this account.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { M1: 'My card was blocked in Dubai and the hotel has kept my passport until I pay £1,950' },
    reason: { M1: 'Rina is someone he knows only from a forum, and the money is for trouble that she says is hers: {cue:M1}.' },
    not: { outcome: 'pigbutcher', why: 'She does not ask him to put money into a site or an app. The money is for her own emergency.' } },

  { id: 'd-p-recovery', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a chargeback specialist after a motorbike never delivered',
    text: "Rosa paid £4,000 for a second-hand motorbike online, and it never arrived. A message comes from a 'chargeback specialist': 'We can get your £4,000 back from the seller's bank. Pay our £300 case fee first.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { M1: "We can get your £4,000 back from the seller's bank" },
    reason: { M1: 'The sender offers to get back money that Rosa lost earlier: {cue:M1}.' },
    not: { outcome: 'advancefee', why: 'The £4,000 is not a prize or a grant that was never hers. It is money that she paid and lost.' } },

  { id: 'd-p-adv', use: 'drill', tier: 'clean', setting: 'government', topic: 'an energy rebate held for an admin fee',
    text: "Leila gets a letter: 'Your household has been awarded a £2,500 energy rebate. To claim it, send a £60 admin fee by bank transfer to the account shown.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { M1: 'Your household has been awarded a £2,500 energy rebate' },
    reason: { M1: 'The letter says that money is waiting for her, a rebate that she has not applied for: {cue:M1}.' },
    not: { outcome: 'recovery', why: 'Nothing was taken from Leila earlier. The rebate is said to be new money that is waiting for her.' } },

  { id: 'd-p-offi', use: 'drill', tier: 'varied', setting: 'money', topic: 'a bank blocking the account',
    text: "A text says: 'Your bank has blocked your account because of suspicious payments. To unblock it, move your balance to a protected account today, and do not use the app.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { M1: 'Your bank has blocked your account because of suspicious payments' },
    reason: { M1: 'The text claims to come from the bank, and the reason it gives is a danger to the money in the account: {cue:M1}.' },
    not: { outcome: 'fakelink', why: 'There is no link and no payment page. The text tells him to move his balance to another account.' } },

  { id: 'd-p-real', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a washing machine paid for at the shop\'s own checkout',
    text: "Kim buys a washing machine from a shop whose website she found by typing in its address. At the checkout the shop's own page asks her to pay £429 by card, the price shown on the page when she chose it.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { M1: 'Kim buys a washing machine from a shop whose website she found by typing in its address' },
    reason: { M1: 'The payment is part of a purchase that she is making herself, at a shop that she reached on her own: {cue:M1}.' },
    not: { outcome: 'fakelink', why: 'She is not paying on a page that she reached through a message. She went to the shop and chose the machine herself.' } },

  /* ---------- The second question about money: what does it ask you to do with it? ---------- */
  { id: 'd-p-invoice', use: 'drill', tier: 'clean', setting: 'home', topic: 'a landlord whose account has changed',
    text: "Ayo's landlord has emailed a rent request on the 25th of every month for two years. This month the email adds: 'My bank account has changed. Please pay the £1,100 rent into the new one below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { M2: 'My bank account has changed' },
    reason: { M2: 'A message tells Ayo that the account has changed, and asks him to pay into the new one: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The amount and the sender are what Ayo expects, but the details are new, and they arrived in a message.' } },

  { id: 'd-p-realb', use: 'drill', tier: 'clean', setting: 'work', topic: 'an annual fee for a professional body',
    text: "Priyanka pays a £60 annual fee to her professional body. The reminder arrives in the body's own app: 'Your annual fee is due. Pay £60 in the app, as last year.' The amount is the one on last year's receipt.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { M2: ['Pay £60 in the app, as last year', "The amount is the one on last year's receipt"] },
    reason: { M2: 'She is asked to pay the amount that she paid last year, inside an app that she already uses: {cue:M2}.' },
    not: { outcome: 'invoicefraud', why: 'No new details are given. She pays inside the app, in the way that she paid last year.' } },

  { id: 'd-p-over', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a campervan rented for a weekend',
    text: "Sven rents out his campervan for the weekend for £250. The renter pays £450 and writes: 'Oops, my partner clicked the wrong box. Please send the extra £200 to a friend of mine who is collecting the van.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { M2: 'Please send the extra £200 to a friend of mine who is collecting the van' },
    reason: { M2: 'The renter has paid more than the price and asks Sven to send the extra on to someone else: {cue:M2}.' },
    not: { outcome: 'realpayment', why: 'The amount that reached Sven is not the price that was agreed, and he is asked to send some of it on.' } },

  { id: 'd-p-link', use: 'drill', tier: 'clean', setting: 'government', topic: 'a parking charge on a link',
    text: "Mei gets a text from a number she does not know: 'Final reminder: your parking charge of £35 is unpaid. Settle it at citypark-fines.example to avoid court action.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['official'], M2: ['link'] },
    cues: { M2: 'Settle it at citypark-fines.example' },
    reason: { M2: 'She is told to pay on a page that she reaches through a link in the text: {cue:M2}.' },
    not: { outcome: 'fakeofficial', why: 'The text asks her to pay on a link. It does not ask for gift cards, crypto or a transfer to an account that someone gives her, and it does not tell her to keep it secret.' } },

  { id: 'd-p-pig', use: 'drill', tier: 'varied', setting: 'work', topic: 'a professional network and a firm\'s trading platform',
    text: "Tariq has been messaged on a professional network by a woman called Alana. She shows him the trading platform that she says her firm uses. 'Open an account with £2,000,' she writes, 'and I will help you place your first trade.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { M2: 'Open an account with £2,000' },
    reason: { M2: 'He is asked to put money into a platform that someone he knows only online showed him: {cue:M2}.' },
    not: { outcome: 'advancefee', why: 'Nobody says that money is waiting for Tariq. He is asked to put his own money into the platform.' } },

  { id: 'd-p-rush', use: 'drill', tier: 'varied', setting: 'government', topic: 'council tax paid in crypto from a supermarket machine',
    text: "A caller who says that he is from the council tells Wanda that she owes £2,100 in unpaid council tax. 'Pay it now in cryptocurrency from the machine at the supermarket,' he says, 'and do not tell the bank, or the officers will come.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { M2: 'Pay it now in cryptocurrency from the machine at the supermarket' },
    reason: { M2: 'Wanda is to pay at once, in a way that cannot be undone, and to tell no one: {cue:M2}. Nothing more specific shows.' },
    not: { outcome: 'fakelink', why: 'She is not asked to pay on a link. She is told to pay in crypto at a machine, at once, and to say nothing.' } }
]);
