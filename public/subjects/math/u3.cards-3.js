// Basic Math, Unit Three, part three: the third kind (two missing numbers and two facts that both must fit), and its look-alike
// with the first kind. The worked examples are in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  { id: 'meet-simul', kind: 'meet', outcome: 'simul',
    link: 'The third kind of problem leaves out two numbers at once, and it gives two facts to find them from.',
    case: 'm3-meet-simul', mark: 'A1',
    strip: [
      'The problem gives a count: 14 balls in all.',
      'It gives a total: €96 spent in all, with a price for each kind of ball, €6 and €9.',
      'It leaves out two numbers: how many footballs and how many volleyballs were bought.',
      'There are two separate facts, and each is about both missing numbers.'
    ],
    explain: [
      'What you are shown is two numbers that are not given, and two facts about them that the pair has to satisfy. The first fact is a count: the footballs and the volleyballs together are 14. The second is a total: the footballs cost €6 each and the volleyballs €9 each, and together they came to €96.',
      'Either fact alone is not enough. There are many ways to buy 14 balls, and many ways to spend €96. Only one pair of numbers fits both facts, and the procedure finds it. It uses one fact to leave a single missing number in the other, so that the second fact can be worked like a calculation that you already know how to undo.',
      'Notice what decides the kind. It is that two numbers are left out and two separate facts are given about them, usually how many there are in all and what they come to in all. If only one number were left out of one calculation, the problem would be the first kind.'
    ],
    feature: { step: 'A1', option: 'totals' },
    name: 'A problem like this is {o:simul}. The two facts are two equations, an equation being a statement that two amounts are equal, and the missing numbers are worked out together, at the same time.' },

  { id: 'again-simul', kind: 'again', outcome: 'simul',
    link: 'The balls gave you what to point to: {needs:simul}. Here is a second problem with a different story, boxes of bandages instead of balls.',
    first: 'm3-meet-simul', second: 'm3-again-simul', step: 'A1',
    instruction: 'Find what the two problems share. Ignore the story (balls, bandages) and ignore the numbers. Look at one thing only: which words give the two facts, the count and the price of each kind?',
    prompt: { kind: 'phrase', answer: 'ordered 18 boxes of bandages, some small at €4 each and some large at €7 each' },
    shared: [
      'Both problems leave out how many of each of two kinds there were, and give two separate facts about them: how many items there were in all, 14 balls and 18 boxes, and what they came to in all, €96 and €84, with a price for each kind.',
      'That is all you point to, and it is why one name covers a sports club and a clinic. The story differs. What is given is the same.'
    ] },

  { id: 'portrait-simul', kind: 'portrait', outcome: 'simul',
    link: 'You know what to point to for {o:simul}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two numbers that the problem does not give: how many of one kind and how many of another.',
      'A count: how many there are in all. It can also be a number of vehicles, of bags, of plants or of heads.',
      'A total: what they come to in all, usually with a price, a weight or a number of legs or wheels for each kind.',
      'The question is usually “how many of each?” The two facts are often in different sentences.'
    ],
    not: [
      'One missing number and one result is not this kind. If the problem tells you how many of one kind there were, the other is the first kind, because only one number is left out of one calculation.',
      'And a total with no count, or a count with no total, is not enough to fix two numbers. The problem needs both facts.'
    ],
    wild: ['"The van carried 40 crates of two sizes, 330 kg in all."', '"There are 9 animals in the field, and 26 legs between them."', '"We hired 12 boats, small and large, for 40 people in all."', '"I paid €6.20 for 20 sweets, some at 25 cents and some at 40 cents, and I forget how many of each."'],
    self: 'In your own life you meet this when a till total and an item count have to be split between two prices, when a delivery is made of two sizes and you know the number of loads and the total weight, and in puzzles about heads and legs or two kinds of coin.',
    ask: '"Are two amounts missing, with two separate statements about them, usually a count and a total?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-simul', kind: 'check', after: 'simul',
    case: 'm3-tap-simul',
    ask: { type: 'phrase', step: 'A1', say: 'Which words give the two facts, the count and the prices? Tap them.',
           answer: 'sold 11 plants, some small at €3 each and some large at €8 each' } },

  { id: 'check-simul-last', kind: 'check', after: 'simul', case: 'm3-ck-simul-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-simul-whole', kind: 'check', after: 'simul', case: 'm3-ck-simul-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: one missing number, or two ---------- */
  { id: 'look-rearr-simul', kind: 'lookalike', ledger: 'rearr~simul',
    link: 'The first and third kinds look alike when the numbers are small and the story is a shop, because a total of prices is a calculation, and a calculation can have two letters in it. This card puts them side by side.',
    cases: ['m3-la-plants-rearr', 'm3-la-plants-simul'],
    instruction: 'Both problems are at the same garden centre, with the same plants at €9 and pots at €4, and the same €73. Compare one thing: how many numbers are left out?',
    prompt: { kind: 'which', option: 'A1.totals', answer: 'm3-la-plants-simul' },
    difference: [
      'In Case A Mia buys 5 plants and some pots, and pays €73. Only one number is left out, how many pots, and one calculation has a result to undo: 5 plants at €9 and some pots at €4 make €73. The key’s answer is {a:A1.formula}.',
      'In Case B the garden centre sold 12 items in all, plants and pots, for €73, and nobody says how many of either. Two numbers are left out, and there are two facts, the count and the total. The key’s answer is {a:A1.totals}.',
      'The prices and the total are the same in both, and the answers are the same too: 5 plants and 7 pots. What differs is how many numbers the problem leaves out, one or two, and so how many facts are needed to find them.'
    ] }
]);
