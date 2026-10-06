// Basic Math, Unit Three, part three: the third kind (two missing numbers and two facts that both must fit), and its look-alike
// with the first kind. The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  { id: 'meet-simul', kind: 'meet', outcome: 'simul',
    link: 'The third kind of problem leaves out two numbers at once, and it gives two facts to find them from.',
    case: 'm3-meet-simul', mark: 'A1',
    strip: [
      'The problem gives a count: 14 balls in all.',
      'It gives a total: $96 spent in all, with a price for each kind of ball, $6 and $9.',
      'It leaves out two numbers: how many footballs and how many volleyballs were bought.',
      'There are two separate facts, and each is about both missing numbers.'
    ],
    explain: [
      'What you are shown is two numbers that are not given, and two facts about them that the pair has to satisfy. The first fact is a count: the footballs and the volleyballs together are 14. The second is a total: the footballs cost $6 each and the volleyballs $9 each, and together they came to $96.',
      'Either fact alone is not enough: there are many ways to buy 14 balls, and many ways to spend $96. Only one pair of numbers fits both. The steps use the count fact to leave a single missing number in the total fact, which can then be undone like any calculation.'
    ],
    feature: { step: 'A1', option: 'totals' },
    name: 'A problem like this is {o:simul}. The two facts are two equations, an equation being a statement that two amounts are equal, and the missing numbers are worked out together, at the same time.' },

  { id: 'check-simul', kind: 'check', after: 'simul',
    case: 'm3-tap-simul',
    ask: { type: 'phrase', step: 'A1', say: 'Which words give the two facts, the count and the prices? Tap them.',
           answer: 'sold 11 plants, some small at $3 each and some large at $8 each' } },

  /* ---------- The look-alike pair: one missing number, or two ---------- */
  { id: 'look-rearr-simul', kind: 'lookalike', ledger: 'rearr~simul',
    link: 'The first and third kinds look alike when the story is a shop, because a total of prices is a calculation, and a calculation can have two letters in it.',
    cases: ['m3-la-plants-rearr', 'm3-la-plants-simul'],
    instruction: 'Both problems are at the same garden center, with the same plants at $9 and pots at $4, and the same $73. Compare one thing: how many numbers are left out?',
    prompt: { kind: 'which', option: 'A1.totals', answer: 'm3-la-plants-simul' },
    difference: [
      'In Case A Mia buys 5 plants and some pots, and pays $73. Only one number is left out, how many pots, and one calculation has a result to undo: 5 plants at $9 and some pots at $4 make $73. The answer is {a:A1.formula}.',
      'In Case B the garden center sold 12 items in all, plants and pots, for $73, and nobody says how many of either. Two numbers are left out, and there are two facts, the count and the total. The answer is {a:A1.totals}.',
      'The prices and the total are the same in both. What differs is how many numbers the problem leaves out, one or two.'
    ] }
]);
