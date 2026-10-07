// Wealth Preservation, Unit One, part three: the fifth answer (nothing could lose it) and the look-alike pairs that include it.
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The fifth answer: nothing could lose it ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Last: the answer for a story where nothing could lose the money.',
    case: 'w-saver', mark: 'D1',
    explain: [
      'Check Aisha’s story against the other four answers. Nothing comes out of her money that the story mentions. No one thing is most of it. She will not need the 401(k) for thirty years, so prices have time to come back from any fall. And nothing is said about a death, an illness or a gift. What is left is money being kept, with nothing that could lose it.',
      'This is a real answer, and a common one. Without it you would find a problem in every account of money and buy a fix for it, and a fix for a problem that is not there costs money and effort for nothing.'
    ],
    spot: [
      { do: 'Look for a fee, a tax bill or spending that comes out each year: Aisha’s story has none.', why: 'If you cannot find the words, do not invent them.' },
      { do: 'Look for one thing that is most of the money: Aisha has a 401(k) and savings.', why: 'No single thing could take most of it.' },
      { do: 'Look for money needed soon: she will not touch her 401(k) for thirty years.', why: 'A fall has thirty years to recover.' },
      { do: 'Look for a death, an illness or a gift: there is none.', why: 'Then nothing is being passed on.' }
    ],
    feature: { step: 'D1', option: 'none' },
    name: 'This is {a:D1.none}. It does not say the money is safe forever, only that this story raises nothing that could lose it. In this subject, that means leave it alone.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'w-nurse',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that Nia will not need her money for a long time? Tap them.',
           answer: 'a 401(k) at work that she will not touch until she retires at 67' } },

  /* ---------- The pairs that include the fifth answer ---------- */
  { id: 'look-none-timing', kind: 'lookalike', ledger: 'none~timing',
    link: 'A fall in prices shows up in both of these. They are easy to mix up.',
    cases: ['w-la-quiet', 'w-la-deposit'],
    instruction: 'Both stories are about Ines, who is 38, in a year when prices have fallen by a fifth. Compare one thing: when is the money needed, and is anything waiting for it?',
    prompt: { kind: 'which', option: 'D1.none', answer: 'w-la-quiet' },
    difference: [
      'In Story A Ines has noticed the fall, but she will not need the money for twenty-five years and is selling nothing. A fall only does harm when something has to be sold or paid on the day, and nothing does. That is {a:D1.none}.',
      'In Story B the fall is the same, but the $30,000 is needed on June 1 and is held in funds of shares. After the fall it is $24,000, $6,000 short of the down payment, and four months is not long for prices to recover. That is {a:D1.timing}.'
    ] },

  { id: 'look-none-handover', kind: 'lookalike', ledger: 'none~handover',
    link: 'In this pair, a story where everything about passing the money on is already in order is easily mistaken for one where nothing is at stake.',
    cases: ['w-la-inorder', 'w-la-nothing'],
    instruction: 'Both stories are about Priya, who is 40. Compare one thing: does the story say anything about what happens to her money if she dies, or if she cannot act?',
    prompt: { kind: 'which', option: 'D1.handover', answer: 'w-la-inorder' },
    difference: [
      'In Story A everything is in order and nothing is wrong. But the story is about who gets the money when the owners die, so it is {a:D1.handover}. A story where it has been dealt with is still a story about it.',
      'In Story B nothing is said about a death, a will, a form or an illness: money is being put away, and nothing else. That is {a:D1.none}.'
    ] }
]);
