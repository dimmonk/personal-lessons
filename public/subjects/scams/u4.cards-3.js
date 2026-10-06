// Scams, Unit Four, second half of the names (2): the fake official scam and the overpayment scam, each beside the real
// request that it copies. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Fake official scam ---------- */
  { id: 'meet-fakeofficial', kind: 'meet', outcome: 'fakeofficial',
    link: 'So far nothing has frightened you. The next name does: a threat from someone who says that they have power over you.',
    case: 'm-off-tax', mark: 'M1',
    strip: [
      'A call comes out of the blue from a man who says that he is an officer. He says that Dee owes $2,300 in unpaid tax and that there is a warrant for her arrest.',
      'Officers will be at her door within two hours unless she pays today, by buying gift cards and reading the numbers to him. She is told not to tell the store staff why.'
    ],
    explain: [
      'This one works by fear. A frightened person does not stop to check, and the caller knows it. Gift cards, crypto, cash and a transfer to an account that the caller gives all cannot be undone: a gift card number read down a phone is spent within minutes. No real IRS agent or police officer takes payment in gift cards.',
      'Look at the secrecy too. Dee is told not to tell the store staff, because they “may be involved”. A store clerk or a bank clerk is exactly the person who would say stop, and the caller has told her in advance not to listen to them.'
    ],
    feature: { step: 'M1', option: 'official' },
    name: 'The name for this is {o:fakeofficial}. The “official” is the role that the caller claims: the IRS, the police, a court, or your own bank. The claim is the lie.',
    act: [
      'Hang up. You do not owe the caller politeness, and a real official will not mind.',
      'Then do {t:check}: call the IRS or your bank at a number that you already had, such as the one on your card or a bill. Use a different phone if you can, because some callers keep the line open.',
      'Never pay by gift card, crypto or cash to settle a debt, and never move your money to a “safe account”. Tell someone, even if you were told not to.'
    ] },

  { id: 'check-fakeofficial', kind: 'check', after: 'fakeofficial',
    case: 'm-off-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official'] } },

  { id: 'look-fakeofficial-realpayment', kind: 'lookalike', ledger: 'fakeofficial~realpayment',
    link: 'The same tax, from the same office.',
    cases: ['m-sam-call', 'm-sam-letter'],
    instruction: 'Both cases are about Sam and $1,900 of unpaid tax. Compare one thing: how the request holds up when Sam looks into it for himself.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-sam-letter' },
    difference: [
      'In Case A a man calls out of the blue and demands payment today, by transfer to an account that he gives, and tells Sam not to tell his employer. Sam has nothing that he could look up. The case is {o:fakeofficial}.',
      'In Case B a letter gives Sam 30 days and a way to appeal. Sam types in the address that he knows from his own tax account, and finds the same amount and the same reference. The answer is {a:M2.agreed}, and the case is {o:realpayment}.'
    ] },

  /* ---------- Overpayment scam ---------- */
  { id: 'meet-overpayment', kind: 'meet', outcome: 'overpayment',
    link: 'The last copy is the only one in which the money comes to you first.',
    case: 'm-over-bike', mark: 'M1',
    strip: [
      'Rafa is selling a bike. A buyer takes it at once, without haggling, and $800 arrives in Rafa’s account: twice the price.',
      'The buyer says that it was a typo, and asks Rafa to send the $400 difference to a courier’s account.'
    ],
    explain: [
      'The money has arrived. Rafa can see $800 in his account, and all that he is asked to do is to give back what he was never owed. It feels like honesty. But the $800 may be a card payment made with a stolen card, a transfer that the bank recalls, or a check that bounces. Rafa’s $400 goes out for real, and at once. When the buyer’s payment disappears, Rafa has lost the $400, and the bike too if he has handed it over.',
      'A buyer who really overpaid has a fair way to put it right: they ask their own bank to reverse the payment, or ask for all of it back to the account it came from, and then pay again. They do not ask for a second payment to somebody else.'
    ],
    feature: { step: 'M1', option: 'deal' },
    name: 'The name for this is {o:overpayment}. The buyer pays over the price, and the scam is in what you are asked to do with the extra.',
    act: [
      'Send nothing, and hand over nothing: do not send the difference, and do not release the item.',
      'If the payment really was a mistake, tell the buyer to ask their own bank to reverse it, or to ask for all of it back to the account it came from.',
      'A payment showing in your account is not yet yours. Ask your bank when it has cleared for good, which can be days later, and wait for that.'
    ] },

  { id: 'check-overpayment', kind: 'check', after: 'overpayment',
    case: 'm-over-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official', 'deal'] } },

  { id: 'look-overpayment-realpayment', kind: 'lookalike', ledger: 'overpayment~realpayment',
    link: 'The same camera changing hands at the same price.',
    cases: ['m-camera-sold', 'm-camera-bought'],
    instruction: 'Both cases are about Isla and a camera that costs $600. Compare one thing: what she is asked to do with the money.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-camera-bought' },
    difference: [
      'In Case A Isla is selling the camera. The buyer sends a $1,000 check and asks her to send the extra $400 on to a friend’s account. The case is {o:overpayment}.',
      'In Case B Isla is buying a camera, at the price that she agreed in the app’s chat, and pays through the marketplace’s own button, in an app that she has used for years. She found the way to pay through a way she already had, and nothing is hurried or hidden. The answer is {a:M2.agreed}, and the case is {o:realpayment}.'
    ] }
]);
