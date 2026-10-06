// Wealth Preservation, Unit One, part three: the fifth family (nothing in the case) and the look-alike pairs that include it.
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fifth family: nothing in the case ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'One answer is left, and it asks you to say that you see nothing. It is the answer for a case in which nothing could lose the money.',
    case: 'w-saver', mark: 'D1',
    strip: [
      'One person, Aisha, and money she is putting away: a 401(k), and some savings.',
      'She will not need the 401(k) for thirty years.',
      'The case says nothing about a charge, a tax bill or a sum spent, a single thing that is most of the money, a bill on a date, or a death or an illness.',
      'Aisha asks whether she should be doing something. The case gives her no reason to.'
    ],
    explain: [
      'Set this case against the four answers. Nothing comes out of Aisha’s money that the case mentions. No one thing is most of it, and no claim or loan is in the story. She does not need the 401(k) for thirty years, so a fall in prices does not catch her out: she has years in which prices can come back. And the case is not about a death, an illness or a gift. What is left is money being kept, with nothing that could lose it. That is a fifth kind of case, and a very ordinary one.',
      'There is an answer for it so that "there is nothing here to name" is something you can say, with a reason. Without it you would find a problem in every account of money and recommend a cure for it, and a cure for a problem the case does not have costs money and effort for nothing. The test is the words in the case: can you point to words that raise one of the four? If you can, give that answer. If you cannot, do not invent one.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: 'The answer, and the name, is {a:D1.none}. It does not say the money is safe for ever, only that this case raises nothing that could lose it. Nothing more is asked after it, and in this subject that result means leaving the money alone.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'w-nurse',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that the money will not be needed for a long time? Tap them.',
           answer: 'a 401(k) at work that she will not touch until she retires at 67' } },

  /* ---------- The pairs that include the fifth answer ---------- */
  { id: 'look-none-timing', kind: 'lookalike', ledger: 'none~timing',
    link: 'A fall in prices shows up in both of these. They are easy to mix up.',
    cases: ['w-la-quiet', 'w-la-deposit'],
    instruction: 'Both cases are about Ines, who is 38, in a year when prices have fallen by a fifth. Compare one thing: when is the money needed, and is anything waiting for it?',
    prompt: { kind: 'which', option: 'D1.none', answer: 'w-la-quiet' },
    difference: [
      'In Case A Ines has noticed the fall, but she will not need the money for twenty-five years and is selling nothing. A fall only does harm if something has to be sold or paid on the day, and nothing does. The answer is {a:D1.none}.',
      'In Case B the fall is the same, but the $30,000 is needed on June 1 and is held in funds of shares. After the fall it is $24,000, $6,000 short of the down payment, and four months is not long for prices to recover. The answer is {a:D1.timing}.'
    ] },

  { id: 'look-none-handover', kind: 'lookalike', ledger: 'none~handover',
    link: 'This pair is where a sound case is most easily mistaken for nothing at all: a case in which everything about the handover is already in good order.',
    cases: ['w-la-inorder', 'w-la-nothing'],
    instruction: 'Both cases are about Priya, who is 40. Compare one thing: does the case say anything about what happens to her money if she dies, or if she cannot act?',
    prompt: { kind: 'which', option: 'D1.handover', answer: 'w-la-inorder' },
    difference: [
      'In Case A everything is in order and nothing is wrong with it. But the case is about who gets the money when the owners die, so the answer is {a:D1.handover}. A case in which a handover has been dealt with is still a case about the handover.',
      'In Case B nothing is said about a death, a will, a form or an illness: money is being put away, and nothing else. The answer is {a:D1.none}.'
    ] }
]);
