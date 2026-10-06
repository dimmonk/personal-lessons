// Wealth Preservation, Unit Four, part one (second piece): the second name (the answer in which a fall would catch nothing), its
// check, and the first look-alike pair. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'meet-covered', kind: 'meet', outcome: 'covered',
    link: 'Alan was caught by the fall because every bill was paid by selling. The next answer is for a person who lives through the same fall and is not caught.',
    case: 'tm-meet-safe', mark: 'T1',
    strip: [
      'Ruth and Gil’s living costs, $24,000 a year, are paid from a $75,000 savings account. The rest of their $640,000 is in funds of shares.',
      'They have sold none of the funds since prices fell by 30%.'
    ],
    explain: [
      'Set this beside Alan. The fall was the same, 30%, and both are living on their money. Alan sold funds at the low price every month. Ruth and Gil spent cash and sold nothing, so the fall changed what their funds are worth and made no difference to what was sold.',
      'A fall can still hurt them if prices stay down for more than three years, because then the cash runs out. What the cash has done is give prices time.',
      'This has a name because the right thing to do about a fall that would catch nothing is nothing. A cure bought for a problem the case does not have costs money every year and fixes nothing. The name covers any case in which what is needed soon is already out of the fall’s reach: living costs paid from cash, a bill whose money is already in cash or in bonds that repay by the day, or a mix still inside the limits the person set.'
    ],
    feature: { step: 'T1', option: 'ready' },
    name: 'The name for this is {o:covered}. It does not tell you to do something. It tells you that you do not need to, and in this subject that is as much an answer as any other.',
    act: 'Say so, and leave it alone. Write one line: what the money is for, where it is held, and when it is needed. Check the one fact that makes the case sound (the cash will not run out before the need, the bond repays before the bill is due, or {t:mix} is inside its limits), and put a date on your calendar to look again. If someone offers you a product to protect you from a fall you can already ride out, ask which part of your case it answers, and if you can point to nothing, decline.' },

  { id: 'check-covered', kind: 'check', after: 'covered',
    case: 'tm-chk-safe',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready'] } },

  { id: 'look-cashbuffer-covered', kind: 'lookalike', ledger: 'cashbuffer~covered',
    link: 'The two names are easy to mix up, because in both the people live on their money and prices have fallen.',
    cases: ['tm-la-couple-sell', 'tm-la-couple-cash'],
    instruction: 'Both cases are about Colm and Fay, who have $500,000 and the same living costs, in the same year of falling prices. Compare one thing: where each month’s bills are paid from.',
    prompt: { kind: 'which', option: 'T1.livingcosts', answer: 'tm-la-couple-sell' },
    difference: [
      'In Case A every month’s bills are paid by selling about $1,700 of the funds, and nothing is set aside. The answer is {a:T1.livingcosts}, and the case is {o:cashbuffer}.',
      'In Case B the bills are paid from a savings account of $62,000, a little over three years of $20,400, and none of the funds has been sold. The fall changed what the funds are worth, and changed nothing about what was sold. The answer is {a:T1.ready}, and the case is {o:covered}. The couple, the money and the fall are the same: you can never name a case from the fall alone.'
    ] }
]);
