// Scams, Unit Four, second half of the names (2): the fake official scam and the overpayment scam, each beside the real
// request that it copies. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Fake official scam ---------- */
  { id: 'meet-fakeofficial', kind: 'meet', outcome: 'fakeofficial',
    link: 'So far nothing has frightened you. The next scam does: a threat from someone who says they have power over you.',
    case: 'm-off-tax', mark: 'M1',
    explain: [
      'Dee gets a call from a man who says he is an officer. She owes $2,300 in tax, he says, and officers will be at her door in two hours unless she pays today in gift cards. A frightened person does not stop to check, and the caller knows it.',
      'Gift cards, crypto, cash and a transfer to an account the caller gives cannot be undone: a gift card number read down a phone is spent within minutes. No real IRS agent or police officer takes gift cards. Dee is also told not to tell the store staff, who are exactly the people who would say stop.'
    ],
    spot: [
      { do: 'Find the claim to power: “an officer” and “a warrant for her arrest”.', why: 'The caller borrows an official’s authority to frighten her.' },
      { do: 'Find the deadline and the payment: today, in gift cards.', why: 'A hurry and a payment that cannot be undone are what make it work.' },
      { do: 'Find the order to keep quiet: do not tell the store staff.', why: 'The people who would stop her are the ones she is told to avoid.' }
    ],
    feature: { step: 'M1', option: 'official' },
    name: 'The name for this is {o:fakeofficial}. The “official” is the role the caller claims: the IRS, the police, a court or your bank. The claim is the lie.',
    act: [
      { do: 'Hang up.', why: 'You do not owe the caller politeness, and a real official will not mind.' },
      { do: 'Then do {t:check}: call the IRS or your bank at a number you already had, such as the one on your card or a bill.', why: 'Some callers keep the line open, so use a different phone if you can.' },
      { do: 'Never pay a debt by gift card, crypto or cash, and never move your money to a “safe account”.', why: 'No real official asks for either.' },
      { do: 'Tell someone, even if you were told not to.', why: 'The order to keep quiet is part of the scam.' }
    ] },

  { id: 'check-fakeofficial', kind: 'check', after: 'fakeofficial',
    case: 'm-off-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official'] } },

  { id: 'look-fakeofficial-realpayment', kind: 'lookalike', ledger: 'fakeofficial~realpayment',
    link: 'The same tax, from the same office.',
    cases: ['m-sam-call', 'm-sam-letter'],
    instruction: 'Both stories are about Sam and $1,900 of unpaid tax. Compare one thing: what happens when Sam looks into it himself.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-sam-letter' },
    difference: [
      'In Story A a man calls out of the blue, demands payment today by transfer to an account he gives, and tells Sam not to tell his employer. Sam has nothing he could look up, so this is {o:fakeofficial}.',
      'In Story B a letter gives Sam 30 days and a way to appeal. He types in the address he knows from his own tax account and finds the same amount and reference. That is {a:M2.agreed}, so the name is {o:realpayment}.'
    ] },

  /* ---------- Overpayment scam ---------- */
  { id: 'meet-overpayment', kind: 'meet', outcome: 'overpayment',
    link: 'The last copy is the only one in which the money comes to you first.',
    case: 'm-over-bike', mark: 'M1',
    explain: [
      'Rafa sells his bike for $400, and $800 lands in his account. The buyer says it was a typo and asks him to send the $400 difference to a courier’s account. It feels like honesty: he is only giving back what is not his.',
      'But the $800 may come from a stolen card, a transfer the bank takes back, or a check that bounces. Rafa’s $400 goes out for real, and when the buyer’s payment disappears he has lost the $400, and the bike too if he has handed it over. A buyer who really overpaid can ask their own bank to reverse the payment, then pay again.'
    ],
    spot: [
      { do: 'Check that you are the seller: Rafa listed his bike for $400.', why: 'This scam only works on someone who is selling.' },
      { do: 'Find the payment that is more than the price: $800 for a $400 bike.', why: 'The extra is what the scammer wants back.' },
      { do: 'Find where the difference is to go: a courier’s account.', why: 'Money that is truly sent back goes back to where it came from.' }
    ],
    feature: { step: 'M1', option: 'deal' },
    name: 'The name for this is {o:overpayment}. The buyer pays too much, and the scam is what you are asked to do with the extra.',
    act: [
      { do: 'Do not send the difference, and do not hand over the item.', why: 'Both are gone for good if the payment turns out to be fake.' },
      { do: 'If the payment really was a mistake, tell the buyer to ask their own bank to reverse it.', why: 'That is the fair way, and a real buyer will do it.' },
      { do: 'Ask your bank when the payment has cleared for good, and wait for that.', why: 'Money showing in your account is not yet yours, and it can take days.' }
    ] },

  { id: 'check-overpayment', kind: 'check', after: 'overpayment',
    case: 'm-over-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official', 'deal'] } },

  { id: 'look-overpayment-realpayment', kind: 'lookalike', ledger: 'overpayment~realpayment',
    link: 'The same camera changing hands at the same price.',
    cases: ['m-camera-sold', 'm-camera-bought'],
    instruction: 'Both stories are about Isla and a camera that costs $600. Compare one thing: what she is asked to do with the money.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-camera-bought' },
    difference: [
      'In Story A Isla is selling the camera. The buyer sends a $1,000 check and asks her to send the extra $400 on to a friend’s account. That is {a:M2.sendback}, so the name is {o:overpayment}.',
      'In Story B Isla is buying the camera, at the price she agreed in the app’s chat, using the marketplace’s own Buy button in an app she has used for years. Nothing is hurried or hidden. That is {a:M2.agreed}, so the name is {o:realpayment}.'
    ] }
]);
