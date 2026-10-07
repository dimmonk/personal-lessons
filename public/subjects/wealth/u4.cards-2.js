// Wealth Preservation, Unit Four, part one (second piece): the second name (the answer in which a fall would catch nothing), its
// check, and the first look-alike pair. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'meet-covered', kind: 'meet', outcome: 'covered',
    link: 'Alan was caught by the fall because every bill was paid by selling. Here is a couple who lived through the same fall and were not caught.',
    case: 'tm-meet-safe', mark: 'T1',
    explain: [
      'Put Ruth and Gil beside Alan. The fall was the same, 30%, and both are living on their money. Alan sold funds at the low price every month. Ruth and Gil spent cash and sold nothing, so the fall changed what their funds are worth and changed nothing about what they sold. If prices stayed down for more than three years the cash would run out and they would be hurt too, but until then the cash gives prices time.',
      'This has a name because the right thing to do about a fall that would catch nothing is nothing. A fix bought for a problem you do not have costs money every year and solves nothing. The same goes for a bill whose money is already in cash or in {t:bond} that repays by the day, and for a mix that is still inside the limits of its plan.'
    ],
    spot: [
      { do: 'Find where the bills are paid from: Ruth and Gil’s savings account.', why: 'Money in cash does not move with prices.' },
      { do: 'Check what they have sold since the fall: none of the funds.', why: 'A fall costs nothing real if nothing has to be sold in it.' },
      { do: 'Check how long the cash lasts: a little over three years of bills.', why: 'That is the time prices have to come back.' }
    ],
    feature: { step: 'T1', option: 'ready' },
    name: 'This is {o:covered}. It does not tell you to do something. It tells you there is nothing to do, and that is as real an answer as any other.',
    act: [
      { do: 'Say so, and leave it alone.', why: 'A fix for a problem you do not have costs money and solves nothing.' },
      { do: 'Write one line: what the money is for, where it is held, and when it is needed.', why: 'It shows at a glance that the money is safe.' },
      { do: 'Check the one fact that keeps it safe: the cash will not run out before it is needed, the bond repays before the bill is due, or {t:mix} is inside its limits.', why: 'That fact is the whole reason nothing needs doing.' },
      { do: 'Put a date on your calendar to look again.', why: 'Cash gets spent and mixes drift.' },
      { do: 'If someone offers a product to protect you from a fall you can already ride out, ask which part of your situation it answers.', why: 'If they cannot name one, decline.' }
    ] },

  { id: 'check-covered', kind: 'check', after: 'covered',
    case: 'tm-chk-safe',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready'] } },

  { id: 'look-cashbuffer-covered', kind: 'lookalike', ledger: 'cashbuffer~covered',
    link: 'These two are easy to mix up, because in both the people live on their money and prices have fallen.',
    cases: ['tm-la-couple-sell', 'tm-la-couple-cash'],
    instruction: 'Both stories are about Colm and Fay, who have $500,000 and the same bills, in the same year of falling prices. Compare one thing: where each month’s bills are paid from.',
    prompt: { kind: 'which', option: 'T1.livingcosts', answer: 'tm-la-couple-sell' },
    difference: [
      'In Story A every month’s bills are paid by selling about $1,700 of the funds, and nothing is set aside. That is {o:cashbuffer}.',
      'In Story B the bills are paid from a savings account of $62,000, a little over three years of $20,400, and none of the funds has been sold. The fall changed what the funds are worth, and changed nothing about what Colm and Fay sold. That is {o:covered}.',
      'The couple, the money and the fall are the same. You can never name a story from the fall alone.'
    ] }
]);
