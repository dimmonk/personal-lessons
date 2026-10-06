// Basic Math, Unit Three, part four: the word "squared", the fourth kind (a missing number multiplied by itself), and the exception
// in which a profit rule looks like a calculation to undo and is not. The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  /* ---------- A word the fourth kind leans on ---------- */
  { id: 'term-squared', kind: 'term', term: 'squared',
    h: 'A number multiplied by itself',
    link: 'The last kind of problem in this unit leans on one word, which you may only half know. Here it is first, in a situation you can hold in your hands.',
    case: 'm3-sq-tiles',
    plain: [
      'A tiler who lays a bigger square from square tiles needs a number of tiles that is the length of a side multiplied by itself: 5 × 5 = 25, 6 × 6 = 36, 12 × 12 = 144. Multiplying a number by itself comes up so often that it has a word of its own and a small raised 2 to write it with. It is not doubling: 5² is 25, not 10.',
      'The same is true for a number you do not know. If the side of a square is x, its area is x × x, and that is written x² with the small 2 raised. A whole group in parentheses can be multiplied by itself too: (x + 3)² means (x + 3) × (x + 3).',
      'A number with a minus sign, multiplied by itself, gives a number above zero, because a minus times a minus is a plus: −5 × −5 = 25, just as 5 × 5 = 25. So two different numbers, 5 and −5, give the same result when they are multiplied by themselves.'
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
      'That is what makes this kind different from the first. There the missing number was used once, so each thing done to it could be undone in turn. Here it is used twice, so it cannot be peeled out one thing at a time. The steps add exactly the number that turns one side of the equation into a single number multiplied by itself, and then undo that with a {t:sqroot}.'
    ],
    feature: { step: 'A1', option: 'itself' },
    name: 'A problem like this is {o:quad}. The name comes from an old word for a square: the missing number is multiplied by itself, as the sides of a square are.' },

  { id: 'check-quad', kind: 'check', after: 'quad',
    case: 'm3-tap-quad',
    ask: { type: 'phrase', step: 'A1', say: 'Which words link the length to the width? Tap them.',
           answer: '4 m longer than it is wide' } },

  /* ---------- The exception: a profit rule, with the missing number twice ---------- */
  { id: 'exc-breakeven', kind: 'exception', ledger: 'rearr~quad', looksLike: 'rearr', is: 'quad',
    h: 'A profit rule that gives a result of zero',
    link: 'Real problems are less tidy. Here is a rule for a profit, with a result and one missing number, which is what a calculation to undo looks like.',
    case: 'm3-exc-breakeven',
    setup: 'The problem gives a {t:formula}, the stall owner’s profit rule, and the result it must come to, a profit of zero, and it leaves out a number that the rule used, the number of crates. That is what you point to for {a:A1.formula}. Yet the answer for this case is {a:A1.itself}.',
    prompt: { kind: 'phrase', answer: '12 × n − n × n − 20' },
    because: [
      'Look at where the missing number appears in the rule: 12 × n − n × n − 20. It appears twice: once in 12 × n, and once multiplied by itself, n × n. If it appeared once, each thing done to it could be undone in turn. Here you cannot take away the 20, divide by something and be left with n, because one n is hidden inside n × n and the other is not.',
      'The answers show it too. Two numbers of crates give a profit of zero: 2 crates (12 × 2 − 2 × 2 − 20 = 0) and 10 crates (12 × 10 − 10 × 10 − 20 = 0). A calculation in which the missing number is used once never gives two answers. When a rule with a result has the missing number multiplied by itself, the answer is {a:A1.itself}.'
    ],
    take: 'If the rule had been 12 × n − 20, with no n × n, the missing number would appear once, and the answer would be {a:A1.formula}.' }
]);
