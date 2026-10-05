// Scams, Unit Four: cases shown inside cards, part three (the fake official scam, the overpayment scam, the three exceptions that
// belong to them, the checks after the two question cards, and the three whole cases). Field guide: see u4.cases-teach-1.js.

FC.cases('scams', 'u4', [

  /* ---------- Fake official scam ---------- */
  { id: 'm-off-tax', use: 'teach', tier: 'clean', setting: 'government', topic: 'a warrant and gift cards', name: 'The tax caller',
    text: "Dee's landline rings. A recorded voice says the tax office has issued a warrant for her arrest. She presses 1, and a man who gives his name as Officer Grant says she owes £2,300 in unpaid tax and that officers will be at her door within two hours unless it is settled today. He tells her to buy gift cards at the supermarket and read him the numbers, and not to tell the shop staff why, because 'they may be involved'.",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'buy gift cards at the supermarket and read him the numbers', M1: 'A recorded voice says the tax office has issued a warrant for her arrest',
            M2: ['officers will be at her door within two hours unless it is settled today', 'not to tell the shop staff why'] } },

  { id: 'm-off-bank', use: 'teach', tier: 'clean', setting: 'money', topic: 'a safe account for his savings', name: 'The safe account',
    text: "Leon's phone rings, and the display shows the name of his bank. A man says he is from the bank's fraud department: 'Criminals are inside your account. You must move your savings of £9,400 to a safe account now, before they take it. Do not tell the branch, because one of their staff is involved.' He stays on the line while Leon opens his banking app.",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'You must move your savings of £9,400 to a safe account now', M1: 'Criminals are inside your account',
            M2: ['move your savings of £9,400 to a safe account now', 'Do not tell the branch, because one of their staff is involved'] },
    segments: [
      { text: "Leon's phone rings, and the display shows the name of his bank", note: 'This says where the call seems to come from. It is not the reason the caller gives for paying.' },
      { text: "A man says he is from the bank's fraud department", note: 'This says who the caller claims to be. The words to tap are the danger he gives as the reason.' },
      { text: 'Criminals are inside your account' },
      { text: 'You must move your savings of £9,400 to a safe account now', note: 'This is the request. The reason comes before it.' }
    ] },

  { id: 'm-off-check', use: 'check', tier: 'clean', setting: 'work', topic: 'a court claim and cash vouchers',
    text: "Pia runs a cleaning firm. A text arrives: 'Court Services: a claim of £480 has been made against your company. Judgment will be entered tomorrow unless you pay today in cash vouchers. Do not contact your solicitor.'",
    reason: { M1: 'The text claims to come from a court, and the reason is a claim against her firm: {cue:M1}.' },
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'unless you pay today in cash vouchers', M1: 'a claim of £480 has been made against your company', M2: 'pay today in cash vouchers. Do not contact your solicitor' } },

  { id: 'm-sam-call', use: 'teach', tier: 'clean', setting: 'government', topic: 'unpaid tax demanded by phone',
    text: "Sam answers a call from a man who says he is from the tax office: 'You owe £1,900 in unpaid tax. Pay it today by bank transfer to the account I will give you, or your wages will be seized. Do not discuss this with your employer.'",
    outcome: 'fakeofficial', route: { D1: ['money'], M1: ['official'], M2: ['rush'] },
    cues: { D1: 'Pay it today by bank transfer to the account I will give you', M1: 'You owe £1,900 in unpaid tax', M2: ['Pay it today by bank transfer to the account I will give you', 'Do not discuss this with your employer'] } },

  { id: 'm-sam-letter', use: 'teach', tier: 'clean', setting: 'government', topic: 'unpaid tax in a letter',
    text: "Sam gets a letter from the tax office: he owes £1,900, and he has 30 days to pay or to appeal. It gives a reference number and adds: 'Do not use a link or a number in any message that says it is from us.' Sam types in the website address he knows from his own tax account, finds the amount he owes, and sees the same £1,900 and the same reference number.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['official'], M2: ['agreed'] },
    cues: { D1: 'he owes £1,900, and he has 30 days to pay or to appeal', M1: 'Sam gets a letter from the tax office: he owes £1,900',
            M2: ['he has 30 days to pay or to appeal', 'sees the same £1,900 and the same reference number'] } },

  /* ---------- Exceptions of part three: a refund that needs a fee, and a threat paid on a link ---------- */
  { id: 'm-exc-taxrefund', use: 'teach', tier: 'varied', setting: 'government', topic: 'a tax refund held for a processing fee', name: 'The tax refund with a fee',
    text: "A message arrives: 'The tax office owes you a refund of £740. To release it, pay a £35 processing fee by transfer to the account below.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] }, also: ['official'],
    cues: { D1: 'pay a £35 processing fee by transfer to the account below', M1: 'owes you a refund of £740', M2: 'To release it, pay a £35 processing fee' },
    segments: [
      { text: 'The tax office', note: 'This is what makes the message sound like the other name. It says who is writing, not what the money is for.' },
      { text: 'owes you a refund of £740' },
      { text: 'To release it, pay a £35 processing fee by transfer to the account below', note: 'This is the request. Both names ask you to pay, so it does not tell them apart.' }
    ] },

  { id: 'm-exc-penalty', use: 'teach', tier: 'varied', setting: 'government', topic: 'a final notice paid on a link', name: 'The final notice with a link',
    text: "A text arrives: 'Final notice from the Traffic Penalty Office: you have an unpaid fine of £90. Pay at penalty-office.example in the next two hours, or a warrant will be issued. Do not discuss this with anyone.'",
    outcome: 'fakelink', route: { D1: ['money'], M1: ['official'], M2: ['link'] }, also: ['rush'],
    cues: { D1: 'Pay at penalty-office.example in the next two hours', M1: 'you have an unpaid fine of £90', M2: 'Pay at penalty-office.example' },
    segments: [
      { text: 'Final notice from the Traffic Penalty Office: you have an unpaid fine of £90', note: 'This is the reason given for paying. Both names have an official and a fine, so it cannot settle which this is.' },
      { text: 'Pay at penalty-office.example' },
      { text: 'in the next two hours, or a warrant will be issued', note: 'This is the hurry and the threat. They are what make the text look like the other name, so they cannot be what settles it.' },
      { text: 'Do not discuss this with anyone', note: 'This is the secrecy. It is what makes the text look like the other name, so it cannot be what settles it.' }
    ] },

  /* ---------- Overpayment scam ---------- */
  { id: 'm-over-bike', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a second-hand bike and a typing slip', name: 'The bike with a typing slip',
    text: "Rafa lists his second-hand bike online for £400. Within the hour a buyer called Nick writes: 'I'll take it, no haggling.' A payment of £800 appears in Rafa's account. Nick writes again: 'Sorry, I typed the wrong amount. Please send the £400 difference to my courier's account, and he will collect the bike tomorrow.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: "Please send the £400 difference to my courier's account", M1: 'Rafa lists his second-hand bike online for £400', M2: "Sorry, I typed the wrong amount. Please send the £400 difference to my courier's account" } },

  { id: 'm-over-tutor', use: 'teach', tier: 'clean', setting: 'work', topic: 'piano lessons paid for twice over', name: 'The piano lessons',
    text: "Priya teaches piano. A parent, Mrs Okafor, pays her £600 for ten lessons that cost £300, and then writes: 'My assistant added an extra zero. Please send the extra £300 on to my husband's account, as I cannot get to my bank.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: "Please send the extra £300 on to my husband's account", M1: 'pays her £600 for ten lessons that cost £300', M2: "Please send the extra £300 on to my husband's account" },
    segments: [
      { text: 'Priya teaches piano', note: 'This is the background. It is not what the money is for.' },
      { text: 'A parent, Mrs Okafor, pays her £600 for ten lessons that cost £300' },
      { text: 'My assistant added an extra zero', note: 'This is the explanation for the mistake. It is not the deal that the money is part of.' },
      { text: "Please send the extra £300 on to my husband's account", note: 'This is the request. The words to tap are the ones that say what the money is part of.' }
    ] },

  { id: 'm-over-check', use: 'check', tier: 'clean', setting: 'home', topic: 'a sofa and a different account',
    text: "Zainab is selling a sofa for £350. A buyer she has never heard from before transfers £500 and writes: 'Oops, too much! Please send the £150 back to a different account, the one I will text you, as mine is being fixed.'",
    reason: { M1: 'The money is part of a sale that Zainab is making: {cue:M1}.' },
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: 'Please send the £150 back to a different account', M1: 'Zainab is selling a sofa for £350', M2: 'Oops, too much! Please send the £150 back to a different account' } },

  /* ---------- The twin pairs ---------- */
  { id: 'm-camera-sold', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a camera sold for more than the price',
    text: "Isla sells her camera for £600. The buyer pays £1,000 and writes: 'Wrong amount, sorry. Please send the extra £400 to a friend's account, and the camera can be collected.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] },
    cues: { D1: "Please send the extra £400 to a friend's account", M1: 'Isla sells her camera for £600', M2: "Wrong amount, sorry. Please send the extra £400 to a friend's account" } },

  { id: 'm-camera-bought', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a camera bought through a marketplace\'s own button',
    text: "Isla finds a second-hand camera for £600 on a marketplace app she has used for years. The listing says: 'Pay with the Buy button. Your money is held by the marketplace until you confirm that the camera has arrived.' The price is the one she agreed with the seller in the app's chat.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Pay with the Buy button', M1: 'finds a second-hand camera for £600 on a marketplace app she has used for years',
            M2: ['Your money is held by the marketplace until you confirm that the camera has arrived', "The price is the one she agreed with the seller in the app's chat"] } },

  /* ---------- The checks after the two question cards ---------- */
  { id: 'm-chk-m1', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a holiday flat deposit',
    text: "Lucia booked a holiday flat through the owner's own website, which she found by typing in the address a friend gave her. The booking email in her inbox says: 'Please pay the £300 deposit by the 10th, into the account named on your booking confirmation. Ring me on the number on the website if you want to talk about it.'",
    reason: { M1: 'The deposit is part of a booking that Lucia made herself: {cue:M1}. That is a deal that she is in, so the key’s answer is {a:M1.deal}.' },
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Please pay the £300 deposit by the 10th', M1: "Lucia booked a holiday flat through the owner's own website", M2: ['into the account named on your booking confirmation', 'Ring me on the number on the website'] } },

  { id: 'm-chk-m2', use: 'check', tier: 'clean', setting: 'government', topic: 'a passport held at an airport',
    text: "Pete has written to a woman called Carla for seven months and has never met her. She writes: 'The police at the airport have taken my passport and say I must pay a £1,500 fine before they give it back. Please send it to the account below, and then I can fly to you.'",
    reason: { M2: 'Carla asks Pete to pay a fine that she says is hers, so that she can leave the airport: {cue:M2}. That is trouble of someone he has never met, so the key’s answer is {a:M2.crisis}.' },
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'Please send it to the account below', M1: 'The police at the airport have taken my passport and say I must pay a £1,500 fine', M2: 'The police at the airport have taken my passport and say I must pay a £1,500 fine' } },

  /* ---------- The three whole cases ---------- */
  { id: 'm-w-invoice', use: 'teach', tier: 'clean', setting: 'work', topic: 'a compost supplier and new bank details', name: 'The compost supplier',
    text: "Noor runs a small plant nursery and pays her supplier, Greenfield Compost, every month by bank transfer. An email arrives from the supplier's usual address: 'Please pay this month's invoice of £1,260. Our bank has changed, so the account on the attached invoice is the new one; please do not use the old one.' No deadline is given.",
    outcome: 'invoicefraud', route: { D1: ['money'], M1: ['bill'], M2: ['newdetails'] },
    cues: { D1: "Please pay this month's invoice of £1,260", M1: 'pays her supplier, Greenfield Compost, every month by bank transfer', M2: 'Our bank has changed, so the account on the attached invoice is the new one' } },

  { id: 'm-w-cottage', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'a cottage deposit paid into the account on the confirmation', name: 'The cottage deposit',
    text: "Ruth booked a weekend cottage through the owner's own website, which she found by asking a friend and typing in the address. The booking email in her inbox says: 'Please pay the £200 deposit by 20 May, into the account named on your booking confirmation. The balance is due on arrival. Ring the owner on the number on the website if you would like to talk about it.' The deposit and the balance are the figures on the website.",
    outcome: 'realpayment', route: { D1: ['money'], M1: ['deal'], M2: ['agreed'] },
    cues: { D1: 'Please pay the £200 deposit by 20 May', M1: "Ruth booked a weekend cottage through the owner's own website",
            M2: ['into the account named on your booking confirmation', 'The deposit and the balance are the figures on the website'] } },

  { id: 'm-w-sofa', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a sofa, a hurry and a secret', name: 'The sofa and the secret',
    text: "Imogen advertises a sofa for £350. A buyer pays £700 by bank transfer and writes at once: 'Sorry, my mistake! I need the £350 back today, by transfer to my sister's account, and please do not tell your bank about the extra, as it will freeze both our accounts.'",
    outcome: 'overpayment', route: { D1: ['money'], M1: ['deal'], M2: ['sendback'] }, also: ['rush'],
    cues: { D1: "I need the £350 back today, by transfer to my sister's account", M1: 'Imogen advertises a sofa for £350',
            M2: "Sorry, my mistake! I need the £350 back today, by transfer to my sister's account" } }
]);
