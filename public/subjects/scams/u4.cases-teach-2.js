// Scams, Unit Four: the cases of the look-alike cards (one from each name of a pair, same story) and the whole case.

FC.cases('scams', 'u4', [

  /* ---------- Look-alike pairs ---------- */
  { id: 'm-theo-app', use: 'teach', tier: 'clean', setting: 'money', topic: 'savings into a trading app he showed her',
    text: "Mara has chatted with a man called Theo for four months on a photo-sharing app, and they have never met. He writes: 'I have been using a trading app that has doubled my money. Put $3,000 of your savings into it today, and you will see the same.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Put $3,000 of your savings into it today',
            M1: 'I have been using a trading app that has doubled my money',
            M2: 'Put $3,000 of your savings into it today' } },

  { id: 'm-theo-surgery', use: 'teach', tier: 'clean', setting: 'health', topic: 'surgery for his sister',
    text: "Mara has chatted with a man called Theo for four months on a photo-sharing app, and they have never met. He writes: 'My sister needs an operation today, and the hospital wants $3,000 before it will start. Please pay it into this account. I will repay you as soon as I am back.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'Please pay it into this account',
            M1: 'My sister needs an operation today, and the hospital wants $3,000 before it will start',
            M2: 'the hospital wants $3,000 before it will start' } },

  { id: 'm-imran-owed', use: 'teach', tier: 'clean', setting: 'money', topic: 'compensation he never claimed',
    text: "Imran gets an email: 'You are owed $6,000 in compensation, held for you by our claims office. It will be released once you pay a $150 release fee.' He has never made a claim of any kind.",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'once you pay a $150 release fee',
            M1: 'You are owed $6,000 in compensation, held for you by our claims office',
            M2: 'It will be released once you pay a $150 release fee' } },

  { id: 'm-imran-lost', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a fake insurance broker',
    text: "Imran lost $6,000 last year to a fake car-insurance broker. Now an email arrives: 'We have recovered the $6,000 you lost. It will be released once you pay a $150 release fee.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'once you pay a $150 release fee',
            M1: 'We have recovered the $6,000 you lost',
            M2: 'It will be released once you pay a $150 release fee' } },

  { id: 'm-tessa-same', use: 'teach', tier: 'clean', setting: 'home', topic: 'the usual invoice from her builder',
    text: "Tessa's builder, Ahmed, emails this month's invoice for $2,400 in the usual thread. It asks her to pay into the same account as the last four invoices, which she can see in her own banking app, and ends: 'Same details as always. Call me if anything looks wrong.'",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['bill'], M2: ['agreed'] },
    cues: { D1: 'It asks her to pay into the same account as the last four invoices',
            M1: "emails this month's invoice for $2,400 in the usual thread",
            M2: ['the same account as the last four invoices, which she can see in her own banking app', 'Same details as always'] } },

  { id: 'm-tessa-new', use: 'teach', tier: 'clean', setting: 'home', topic: 'the same invoice and a new account',
    text: "Tessa's builder, Ahmed, emails this month's invoice for $2,400 in the usual thread. It ends: 'Please note that we have changed bank. Pay this invoice into the new account below.'",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: 'Pay this invoice into the new account below',
            M1: "emails this month's invoice for $2,400 in the usual thread",
            M2: 'we have changed bank' } },

  { id: 'm-dina-text', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a customs charge in a text',
    text: "Dina ordered a pair of boots from a store in Germany. A text arrives from a number she does not know: 'Your package has a customs charge of $6.20. Pay at parcelpoint-customs.example to release it.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['deal'], M2: ['link'] },
    cues: { D1: 'Pay at parcelpoint-customs.example to release it',
            M1: 'Your package has a customs charge of $6.20',
            M2: 'Pay at parcelpoint-customs.example to release it' } },

  { id: 'm-dina-app', use: 'teach', tier: 'clean', setting: 'shopping', topic: "a customs charge in the courier's own app",
    text: "Dina ordered a pair of boots from a store in Germany. Her courier's own app, which she installed last year, shows the package with a customs charge of $6.20 and a button 'Pay in the app'. The same $6.20 is on the store's order page, which she opened by typing in the store's address.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: "a customs charge of $6.20 and a button 'Pay in the app'",
            M1: 'a customs charge of $6.20',
            M2: ["Her courier's own app, which she installed last year", "The same $6.20 is on the store's order page"] } },

  { id: 'm-sam-call', use: 'teach', tier: 'clean', setting: 'government', topic: 'unpaid tax demanded by phone',
    text: "Sam answers a call from a man who says he is from the IRS: 'You owe $1,900 in unpaid tax. Pay it today by wire transfer to the account I will give you, or your wages will be garnished. Do not discuss this with your employer.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'Pay it today by wire transfer to the account I will give you',
            M1: 'You owe $1,900 in unpaid tax',
            M2: ['Pay it today by wire transfer to the account I will give you', 'Do not discuss this with your employer'] } },

  { id: 'm-sam-letter', use: 'teach', tier: 'clean', setting: 'government', topic: 'unpaid tax in a letter',
    text: "Sam gets a letter from the IRS: he owes $1,900, and he has 30 days to pay or to appeal. It gives a reference number and adds: 'Do not use a link or a number in any message that says it is from us.' Sam types in the website address he knows from his own tax account, finds the amount he owes, and sees the same $1,900 and the same reference number.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['official'], M2: ['agreed'] },
    cues: { D1: 'he owes $1,900, and he has 30 days to pay or to appeal',
            M1: 'Sam gets a letter from the IRS: he owes $1,900',
            M2: ['he has 30 days to pay or to appeal', 'sees the same $1,900 and the same reference number'] } },

  { id: 'm-camera-sold', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a camera sold for more than the price',
    text: "Isla sells her camera for $600. The buyer sends a $1,000 check and writes: 'Wrong amount, sorry. Please send the extra $400 to a friend's account, and the camera can be collected.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: "Please send the extra $400 to a friend's account",
            M1: 'Isla sells her camera for $600',
            M2: "Wrong amount, sorry. Please send the extra $400 to a friend's account" } },

  { id: 'm-camera-bought', use: 'teach', tier: 'clean', setting: 'shopping', topic: "a camera bought through a marketplace's own button",
    text: "Isla finds a used camera for $600 on a marketplace app she has used for years. The listing says: 'Pay with the Buy button. Your money is held by the marketplace until you confirm that the camera has arrived.' The price is the one she agreed with the seller in the app's chat.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Pay with the Buy button',
            M1: 'finds a used camera for $600 on a marketplace app she has used for years',
            M2: ['Your money is held by the marketplace until you confirm that the camera has arrived', "The price is the one she agreed with the seller in the app's chat"] } },

  /* ---------- The whole case ---------- */
  { id: 'm-w-cottage', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a cottage deposit paid into the account on the confirmation', name: 'The cottage deposit',
    text: "Ruth booked a weekend cottage through the owner's own website, which she found by asking a friend and typing in the address. The booking email in her inbox says: 'Please pay the $200 deposit by May 20, into the account named on your booking confirmation. The balance is due on arrival. Call the owner at the number on the website if you would like to talk about it.' The deposit and the balance are the figures on the website.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Please pay the $200 deposit by May 20',
            M1: "Ruth booked a weekend cottage through the owner's own website",
            M2: ['into the account named on your booking confirmation', 'The deposit and the balance are the figures on the website'] } }
]);
