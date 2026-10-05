// Basic Math, Unit Three, part four: the word "squared", the fourth kind (a missing number multiplied by itself), its look-alike with the
// first kind, and the exception in which a profit rule looks like a calculation to undo and is not. The worked examples are in
// u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  /* ---------- A word the fourth kind leans on ---------- */
  { id: 'term-squared', kind: 'term', term: 'squared',
    h: 'A number multiplied by itself',
    link: 'The last kind of problem in this unit leans on one word, which you may only half know. Here it is first, in a situation you can hold in your hands.',
    case: 'm3-sq-tiles',
    plain: [
      'A tiler who lays a bigger square from square tiles needs a number of tiles that is the length of a side multiplied by itself: 5 × 5 = 25, 6 × 6 = 36, 12 × 12 = 144. Multiplying a number by itself comes up so often, for the area of a square or of anything whose two sides depend on each other, that it has a word of its own and a small raised 2 to write it with.',
      'The same is true for a number you do not know. If the side of a square is x, its area is x × x, and that is written x² with the small 2 raised. A whole bracket can be multiplied by itself too: (x + 3)² means (x + 3) × (x + 3), with everything inside the bracket multiplied by everything inside the bracket.',
      'A number with a minus sign, multiplied by itself, gives a number above zero, because a minus times a minus is a plus: −5 × −5 = 25, just as 5 × 5 = 25. So two different numbers, 5 and −5, give the same result when they are multiplied by themselves.'
    ],
    after: [
      'Two things are worth holding on to. Multiplying a number by itself is not doubling it: 5² is 25 and not 10. And the result is never below zero, because a number above zero and a number below zero both give a result above zero when multiplied by themselves, and zero gives zero. The procedure in this unit uses both.'
    ] },

  /* ---------- The fourth kind: a missing number multiplied by itself ---------- */
  { id: 'meet-quad', kind: 'meet', outcome: 'quad',
    link: 'The fourth kind of problem looks like the first at a glance, because it also has a result and a missing number. But the missing number appears twice.',
    case: 'm3-meet-quad', mark: 'A1',
    strip: [
      'The problem gives a result: an area of 48 m².',
      'It describes a rug that is a square with a strip of 2 m added along one side: the rectangle is as wide as the square and 2 m longer.',
      'It leaves out the side of the square.',
      'The missing side appears twice in the area: once for the width, and once inside the length.'
    ],
    explain: [
      'What you are shown is a result, an area, and a missing number that the area depends on twice. The area of a rectangle is its width times its length. The width is the missing side, and the length is the missing side plus 2. So the area is the missing number times a number that has the missing number in it.',
      'That is what makes this kind different from the first. In the first kind the missing number was used once, so each thing done to it could be undone in turn. Here it is used twice, so it cannot be peeled out one thing at a time. The procedure completes the square: it adds exactly the number that turns one side of the equation into a single number multiplied by itself, and then undoes that with a {t:sqroot}.',
      'Notice what decides the kind. It is that the missing number is multiplied by itself, or by a number that contains itself. The same rug could turn up in a problem that gives its width and its area and asks for its length, and that is the first kind, because the missing length is used once.'
    ],
    feature: { step: 'A1', option: 'itself' },
    name: 'A problem like this is {o:quad}. The name comes from an old word for a square: the missing number is multiplied by itself, as the sides of a square are.' },

  { id: 'again-quad', kind: 'again', outcome: 'quad',
    link: 'The rug gave you what to point to: {needs:quad}. Here is a second problem with a different story, a patio instead of a rug.',
    first: 'm3-meet-quad', second: 'm3-again-quad', step: 'A1',
    instruction: 'Find what the two problems share. Ignore the story (a rug, a patio) and ignore the numbers. Look at one thing only: which words link the length to the width?',
    prompt: { kind: 'phrase', answer: '5 m longer than it is wide' },
    shared: [
      'Both problems give an area, 48 m² and 84 m², and describe a rectangle whose length is linked to its width: the rug is a square with 2 m added, the patio is 5 m longer than it is wide. In both, the missing width appears twice in the area, once as the width and once inside the length.',
      'That is all you point to, and it is why one name covers a rug and a patio. The story differs. What is given is the same.'
    ] },

  { id: 'portrait-quad', kind: 'portrait', outcome: 'quad',
    link: 'You know what to point to for {o:quad}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A result, usually an area, a product or a total, and a missing number that the result depends on twice.',
      'A length that is linked to another length: “3 m longer than it is wide”, “a strip of 2 m added along one side”, or two numbers whose product is given.',
      'Up to two answers. When the missing number is a length or a count, a story usually rules out the answer below zero, and one answer is left.',
      'Sometimes no answer at all. After the square is completed, a result below zero means that no number multiplied by itself gives it, and the problem has no answer.'
    ],
    not: [
      'A {t:formula} in which the missing number is used once, such as the distance round a rectangle, is the first kind, however many things are done to it. The test is whether the missing number appears twice.',
      'Two missing numbers with two facts are not this kind, and a rate with a new amount is not this kind. Only a missing number that is multiplied by itself, as well as used on its own, belongs here.'
    ],
    wild: ['"The picture frame is 6 cm taller than it is wide and the glass covers 72 cm²."', '"Two numbers differ by 4 and multiply to 45."', '"The bed was a square, then a 1 m path was added along one side, and now it covers 30 m²."', '"Is there a number that, multiplied by itself and added to 2 times itself, gives −5?"'],
    self: 'In your own life you meet this when a space has to fit an area and one side is linked to another, when a rectangle is extended along one side, and in puzzles about two numbers with a given product.',
    ask: '"Is there a result, and is the missing number multiplied by itself, or by a number that contains it?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-quad', kind: 'check', after: 'quad',
    case: 'm3-tap-quad',
    ask: { type: 'phrase', step: 'A1', say: 'Which words link the length to the width? Tap them.',
           answer: '4 m longer than it is wide' } },

  { id: 'check-quad-last', kind: 'check', after: 'quad', case: 'm3-ck-quad-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-quad-whole', kind: 'check', after: 'quad', case: 'm3-ck-quad-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: the missing number used once, or twice ---------- */
  { id: 'look-rearr-quad', kind: 'lookalike', ledger: 'rearr~quad',
    link: 'The first and fourth kinds look alike whenever the story is a rectangle with an area, because the area is a calculation with a result. This card puts them side by side.',
    cases: ['m3-la-rug-rearr', 'm3-la-rug-quad'],
    instruction: 'Both problems are about a rug with an area of 28 m². Compare one thing: does the missing number appear once in the calculation, or twice?',
    prompt: { kind: 'which', option: 'A1.itself', answer: 'm3-la-rug-quad' },
    difference: [
      'In Case A the rug is 4 m wide and has an area of 28 m², and the question is how long it is. The missing length is used once, in width times length, so the calculation can be undone by dividing 28 by 4. The answer is {a:A1.formula}.',
      'In Case B the rug is 3 m longer than it is wide and has an area of 28 m², and the question is how wide it is. The missing width is used twice, once as the width and once inside the length, so it is multiplied by itself, and the answer is {a:A1.itself}.',
      'Both are the same rug with the same area, and both come out at 4 and 7: Case A’s length is 7, and Case B’s width is 4 with a length of 7. What differs is whether the missing number appears once or twice.'
    ] },

  /* ---------- The exception: a profit rule, with the missing number twice ---------- */
  { id: 'exc-breakeven', kind: 'exception', ledger: 'rearr~quad', looksLike: 'rearr', is: 'quad',
    h: 'A profit rule that gives a result of zero',
    link: 'The last card showed the two kinds apart with a rug in each. Real problems are less tidy. Here is a rule for a profit, with a result and one missing number, which is what a calculation to undo looks like.',
    case: 'm3-exc-breakeven',
    setup: 'The problem gives a {t:formula}, the stall owner’s profit rule, and the result it must come to, a profit of zero, and it leaves out a number that the rule used, the number of crates. That is what you point to for {a:A1.formula}. Yet the answer for this case is {a:A1.itself}.',
    prompt: { kind: 'phrase', answer: '12 × n − n × n − 20' },
    because: [
      'Look at where the missing number appears in the rule: 12 × n − n × n − 20. It appears twice: once in 12 × n, and once multiplied by itself, n × n. If it appeared once, each thing done to it could be undone in turn. Here you cannot take away the 20, divide by something and be left with n, because one n is hidden inside n × n and the other is not.',
      'The two answers show it too. Two numbers of crates give a profit of zero: 2 crates (12 × 2 − 2 × 2 − 20 = 24 − 4 − 20 = 0) and 10 crates (12 × 10 − 10 × 10 − 20 = 120 − 100 − 20 = 0). Between them, from 3 to 9 crates, the profit is above zero, and past 10 crates it is below zero again. A calculation in which the missing number is used once never gives two answers.',
      'So the problem shows both: a rule with a result, and a missing number multiplied by itself. When it shows both, the answer is {a:A1.itself}.'
    ],
    take: [
      'This is a decision made for the questions, written as a tie-break: a missing number multiplied by itself needs its own procedure, so it wins over the rule whose result it is part of. Both answers, 2 and 10 crates, are real break-even points here, and no story rules either out. Recognising the kind is the point of this card; the working that finds 2 and 10 follows the steps of the procedure, with the minus sign in front of the number in front of n.',
      'If the rule had been 12 × n − 20, with no n × n, the missing number would appear once, and the answer would be {a:A1.formula}.'
    ] }
]);
