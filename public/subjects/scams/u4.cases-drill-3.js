// Scams, Unit Four: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like or shows
// (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim has a context (what happened) and a text (what the person says about it). ask.type 'option' asks the key's question of the
// context. The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('scams', 'u4', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'm-rev-romance', use: 'drill', kind: 'reverse', outcome: 'romance', expect: 'hear',
    options: [
      { text: '"My bag was stolen and I cannot get home. Could you send £900 for a ticket?"', voice: 'romance' },
      { text: '"Open an account on the platform with £3,000, and I will guide you."', voice: 'pigbutcher' },
      { text: '"You have won £250,000. Pay the handling fee to collect it."', voice: 'advancefee' },
      { text: '"Please disregard our old bank details and pay into this account."', voice: 'invoicefraud' }
    ],
    why: 'Someone you have never met who asks for money for an emergency of their own sounds like a ticket home, a hospital bill or a blocked card. The trading platform, the prize and the changed account belong to other names.' },

  { id: 'm-rev-pigbutcher', use: 'drill', kind: 'reverse', outcome: 'pigbutcher', expect: 'hear',
    options: [
      { text: '"My uncle runs the platform. Put in £3,000, and your profits will triple."', voice: 'pigbutcher' },
      { text: '"We have traced the money you lost. A release fee will unlock it."', voice: 'recovery' },
      { text: '"I would not ask if I had anyone else. Please send £1,100."', voice: 'romance' },
      { text: '"Pay the £2.99 redelivery fee at this address."', voice: 'fakelink' }
    ],
    why: 'The money is to go into a site or an app that a person you know only online showed you, and the talk is of profits. A release fee, a personal emergency and a parcel fee belong to other names.' },

  { id: 'm-rev-advancefee', use: 'drill', kind: 'reverse', outcome: 'advancefee', expect: 'find',
    options: [
      { text: 'A prize, a loan or an inheritance that is said to be waiting, and a fee to pay before it is released.', voice: 'advancefee' },
      { text: 'A person you have never met who asks for money for their own emergency.', voice: 'romance' },
      { text: 'A bill with the usual account, and a number to ring if you want to be sure.', voice: 'realpayment' },
      { text: 'A caller who threatens you with arrest unless you pay at once.', voice: 'fakeofficial' }
    ],
    why: 'Money that is said to be waiting for you, and a fee that comes first, is what you would find. An emergency, a usual bill and a threat belong to other names.' },

  { id: 'm-rev-recovery', use: 'drill', kind: 'reverse', outcome: 'recovery', expect: 'hear',
    options: [
      { text: '"We have traced the money you lost. Pay the retainer, and we start."', voice: 'recovery' },
      { text: '"Your loan is approved. Pay the insurance deposit to release it."', voice: 'advancefee' },
      { text: '"Pay the £2.99 customs charge at this link."', voice: 'fakelink' },
      { text: '"Sorry, I typed an extra zero. Send the difference to my courier."', voice: 'overpayment' }
    ],
    why: 'An offer to get back money that you lost, with a fee first, is what you would hear. A loan that is approved is money that was never yours, which is the other name.' },

  { id: 'm-rev-invoicefraud', use: 'drill', kind: 'reverse', outcome: 'invoicefraud', expect: 'find',
    options: [
      { text: 'A bill from someone you already pay, and a message that says the bank details have changed.', voice: 'invoicefraud' },
      { text: 'A payment that is more than the price, and a request to send some of it back.', voice: 'overpayment' },
      { text: 'A prize that you never entered, and a fee to claim it.', voice: 'advancefee' },
      { text: 'The same account that you have paid for years, and an invitation to ring if anything looks wrong.', voice: 'realpayment' }
    ],
    why: 'A bill that you really pay, with a message announcing new details to pay into, is what you would find. The same account as always, with an invitation to check, is the real request.' },

  { id: 'm-rev-fakeofficial', use: 'drill', kind: 'reverse', outcome: 'fakeofficial', expect: 'hear',
    options: [
      { text: '"A warrant has been issued. Buy gift cards, read me the numbers and tell no one."', voice: 'fakeofficial' },
      { text: '"Your invoice is attached, to the same account as always."', voice: 'realpayment' },
      { text: '"Your parcel is held. Pay a £2 fee at this address."', voice: 'fakelink' },
      { text: '"Open an account with £2,000, and I will guide you."', voice: 'pigbutcher' }
    ],
    why: 'A threat from someone with an official’s power, with a payment that is at once, final and secret, is what you would hear. An invoice, a parcel fee and an account to open belong to other names.' },

  { id: 'm-rev-fakelink', use: 'drill', kind: 'reverse', outcome: 'fakelink', expect: 'find',
    options: [
      { text: 'A small charge on a delivery, a toll or a subscription, and a link to a payment page that asks for your card.', voice: 'fakelink' },
      { text: 'A caller who stays on the line while you buy gift cards.', voice: 'fakeofficial' },
      { text: 'A friend you have never met who asks you to pay a hospital bill.', voice: 'romance' },
      { text: 'A buyer who pays twice the price and asks for the extra to be sent on.', voice: 'overpayment' }
    ],
    why: 'A small charge with a link to a payment page that wants your card is what you would find. Gift cards over the phone, a hospital bill and an overpaying buyer belong to other names.' },

  { id: 'm-rev-overpayment', use: 'drill', kind: 'reverse', outcome: 'overpayment', expect: 'hear',
    options: [
      { text: '"Sorry, my mistake. Please send the extra £400 to my courier."', voice: 'overpayment' },
      { text: '"Rent is due on the 1st, to the account in your agreement."', voice: 'realpayment' },
      { text: '"Do not tell the bank. They may be involved."', voice: 'fakeofficial' },
      { text: '"A release fee will unlock the money we have recovered."', voice: 'recovery' }
    ],
    why: 'A buyer who says that a payment was a slip, and asks you to send the difference on, is what you would hear. A rent reminder, a secret and a release fee belong to other names.' },

  { id: 'm-rev-realpayment', use: 'drill', kind: 'reverse', outcome: 'realpayment', expect: 'find',
    options: [
      { text: 'The amount that you agreed, the account that you were given at the start, and a number that you already had to ring if you want to be sure.', voice: 'realpayment' },
      { text: 'A message that says the bank details have changed.', voice: 'invoicefraud' },
      { text: 'A payment page behind a link in a text from a number you do not know.', voice: 'fakelink' },
      { text: 'A caller who says to pay at once and to tell no one.', voice: 'fakeofficial' }
    ],
    why: 'The sum that you agreed, the account that you were first given, and a number that you already knew for calling them are what you would find. New details, a link and a hurried caller are the copies.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'm-claim-register', use: 'claim',
    context: 'A letter says that a firm is holding a £20,000 prize for a woman, and that she must pay a £400 release fee first. It shows a company registration number, a licence number and a signed certificate.',
    text: '"The letter had a registration number, a licence number and a signed certificate, so the firm was real, and paying the £400 was safe."',
    ask: { type: 'option', step: 'M2', answer: 'fee' },
    fault: 'The claim treats paperwork as proof. A registration number, a licence number and a certificate cost nothing to copy: a real firm’s number can be pasted into any letter. They say nothing about what the letter asks her to do with her money, and what it asks is that she pay £400 before any money reaches her.',
    corrected: 'The paperwork tells me nothing. The letter asks me to pay a fee before the money reaches me, and the answer to the question is {a:M2.fee}. A real firm would not mind if I looked it up myself, in the regulator’s own register, and used {t:check} before I paid anything.' },

  { id: 'm-claim-bank', use: 'claim',
    context: 'A caller who says that he is from a bank’s fraud team tells a man to move £6,000 to a safe account and not to tell his bank’s local office. The man’s banking app shows a warning, and he presses continue.',
    text: '"If it were a scam, my bank would have stopped the payment. It let it through, so it must have been all right."',
    ask: { type: 'option', step: 'M2', answer: 'rush' },
    fault: 'The claim treats the bank’s not stopping the payment as proof that the request was real. A bank’s checks cannot tell a payment that you send yourself from your own wish, and a warning that you press past does not stop anything. That the payment went through says nothing about what the caller asked.',
    corrected: 'The caller told me to pay at once, in a way that cannot be undone, and to tell nobody at my bank’s local office. The answer to the question is {a:M2.rush}. The warning was my bank doing what it can, and I should have read it as a stop sign and phoned my bank on the number on my card.' },

  { id: 'm-claim-withdrawn', use: 'claim',
    context: 'A woman met a man online who showed her a trading app. She put in £300, watched it grow, and took out £100 without any trouble. He now asks her to put in £5,000.',
    text: '"I took £100 out myself and it paid, so the app must be real. Putting in £5,000 is safe."',
    ask: { type: 'option', step: 'M2', answer: 'site' },
    fault: 'The claim treats a payout as proof that the app is real. A small payment out costs the scammer very little, and it is the best proof that they could give. It says nothing about the request, which is to put £5,000 into an app that a man she has never met showed her.',
    corrected: 'The payout tells me nothing, because it is how this kind of scam is run. What he asks is that I put money into an app that he showed me. The answer to the question is {a:M2.site}, and I should not do it, however well it seems to be working.' },

  { id: 'm-claim-supplier', use: 'claim',
    context: 'A woman who pays her stationery supplier every month gets an email in the usual thread. It says that the supplier has changed its bank, and gives a new account.',
    text: '"It came from the supplier’s own address and in the same thread as all the others, so it was safe to pay into the new account."',
    ask: { type: 'option', step: 'M2', answer: 'newdetails' },
    fault: 'The claim treats the address and the thread as proof. A scammer who has got into a mailbox, or set up a look-alike address, sends from the same thread. The address says nothing about the one thing that has changed, the account.',
    corrected: 'The email says that the supplier has changed its bank and asks me to pay into new details. The answer to the question is {a:M2.newdetails}. Before I pay I should ring the supplier on a number that I already had, and use nothing that is in the email.' },

  { id: 'm-claim-allbills', use: 'claim',
    context: 'A man gets a letter from his council about a parking charge. His own council tax bill gives the address of the council’s website, and when he types it in, the same charge is there.',
    text: '"Anything that asks me for money is a scam. I ignored the council’s letter."',
    ask: { type: 'option', step: 'M2', answer: 'agreed' },
    fault: 'The claim treats every request for money as a scam. This one came from the council that he deals with, for a charge that he can find for himself on a website whose address he already had. Ignoring a real charge costs him the reduction for paying early, and may cost him more.',
    corrected: 'The charge is the one that I owe, and I found it myself on the council’s website, through an address that I already had. The answer to the question is {a:M2.agreed}. A real request like this one is paid, in the normal way.' },

  { id: 'm-claim-nohurry', use: 'claim',
    context: 'A woman gets a text from a number she does not know, saying that her parcel needs a £1.99 fee, to be paid on a link. It gives no deadline and does not threaten her.',
    text: '"A scam always hurries you. This text gave me no deadline, so it was not a scam."',
    ask: { type: 'option', step: 'M2', answer: 'link' },
    fault: 'The claim treats hurry as what makes a scam. Hurry turns up in many scams, and many others, like this one, have none. What counts is what the text asks: to pay a small charge on a page that you reach through a link in the message.',
    corrected: 'The text did not hurry me, and that tells me nothing. It asked me to pay on a link in the message, and the answer to the question is {a:M2.link}. I would not tap it, and I would look for the charge in the courier’s own app.' }
]);
