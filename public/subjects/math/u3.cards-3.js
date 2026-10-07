// Basic Math, Unit Three, part three: the third type (two missing numbers and two facts that both must fit), and its look-alike
// with the first type. The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  { id: 'meet-simul', kind: 'meet', outcome: 'simul',
    link: 'Third: two numbers are missing, and you are given two facts about them.',
    case: 'm3-meet-simul', mark: 'A1',
    explain: [
      'Two numbers are missing: how many footballs and how many volleyballs. The first fact is a count: together they are 14. The second is a total: footballs cost $6, volleyballs cost $9, and together they came to $96.',
      'One fact alone is not enough: there are many ways to buy 14 balls, and many ways to spend $96. Only one pair fits both. Use the count to leave a single missing number in the total, then undo it like any calculation.'
    ],
    spot: [
      { do: 'Find the two missing numbers: the footballs and the volleyballs.', why: 'Two missing numbers is the first sign.' },
      { do: 'Find the count: 14 balls in all.', why: 'It is the first fact, and it is about both missing numbers.' },
      { do: 'Find the total: $96 in all, at $6 and $9 each.', why: 'It is the second fact, and it is about both as well.' },
      { do: 'Check that each fact alone leaves many answers.', why: 'Only the two together give one pair.' }
    ],
    feature: { step: 'A1', option: 'totals' },
    name: 'This is {o:simul}. Each fact is an equation, a statement that two amounts are equal, and you work out both numbers together.' },

  { id: 'check-simul', kind: 'check', after: 'simul',
    case: 'm3-tap-simul',
    ask: { type: 'phrase', step: 'A1', say: 'Which words tell you how many plants there are, and what each size costs? Tap them.',
           answer: 'sold 11 plants, some small at $3 each and some large at $8 each' } },

  /* ---------- The look-alike pair: one missing number, or two ---------- */
  { id: 'look-rearr-simul', kind: 'lookalike', ledger: 'rearr~simul',
    link: 'These two look alike in a shop: a total of prices can have one missing number or two.',
    cases: ['m3-la-plants-rearr', 'm3-la-plants-simul'],
    instruction: 'Both problems are at the same garden center, with plants at $9, pots at $4 and a bill of $73. Compare one thing: how many numbers are missing?',
    prompt: { kind: 'which', option: 'A1.totals', answer: 'm3-la-plants-simul' },
    difference: [
      'In A, Mia buys 5 plants and some pots, and pays $73. Only one number is missing, how many pots, and one calculation has a result to undo. That is {a:A1.formula}.',
      'In B, the garden center sold 12 items, plants and pots, for $73, and nobody says how many of either. Two numbers are missing, and two facts are given: the count and the total. That is {a:A1.totals}.',
      'The prices and the total are the same in both. What changes is how many numbers are missing: one or two.'
    ] }
]);
