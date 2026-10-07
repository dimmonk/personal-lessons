// Basic Math, Unit Three, part four: the word "squared", the fourth type (a missing number multiplied by itself), and the exception
// in which a profit rule looks like a calculation to undo and is not. The worked example is in u3.cards-solved-*.js.

FC.cards('math', 'u3', [

  /* ---------- A word the fourth type leans on ---------- */
  { id: 'term-squared', kind: 'term', term: 'squared',
    h: 'A number multiplied by itself',
    link: 'The last type uses one word you may only half know. Here it is first, with tiles you can picture.',
    case: 'm3-sq-tiles',
    plain: [
      'The tiles in a square are the side times itself: 5 × 5 = 25, 6 × 6 = 36, 12 × 12 = 144. A number times itself comes up so often that it has its own word, {t:squared}, and a small raised 2 to write it: 5² is 25. It is not doubling: 5² is 25, not 10.',
      'Letters work the same way. If the side of a square is x, its area is x × x, written x². A whole group can be multiplied by itself too: (x + 3)² means (x + 3) × (x + 3).',
      'A minus number times itself gives a plus number, because a minus times a minus is a plus: −5 × −5 = 25. So 5 and −5 both give 25 when you multiply them by themselves.'
    ] },

  /* ---------- The fourth type: a missing number multiplied by itself ---------- */
  { id: 'meet-quad', kind: 'meet', outcome: 'quad',
    link: 'Fourth: the missing number is multiplied by itself, so it shows up twice.',
    case: 'm3-meet-quad', mark: 'A1',
    explain: [
      'The rug started as a square, so its width is the missing side. After the strip, its length is that side plus 2. So the area, 48 m², is the missing side times a number with the missing side in it.',
      'That is what makes it different from the first type. Here the missing number is used twice, so you cannot undo it one thing at a time. Instead you add the one number that turns a side of the equation into a number times itself, then undo that with a {t:sqroot}.'
    ],
    spot: [
      { do: 'Find the result: an area of 48 m².', why: 'The missing side has to fit this number.' },
      { do: 'Find how the sides are linked: the length is the width plus 2.', why: 'This is what puts the missing side into the area twice.' },
      { do: 'Check that the missing side shows up twice: as the width, and inside the length.', why: 'Used only once, it would be {o:rearr}.' }
    ],
    feature: { step: 'A1', option: 'itself' },
    name: 'This is {o:quad}. Think of a square: its area is its side multiplied by itself.' },

  { id: 'check-quad', kind: 'check', after: 'quad',
    case: 'm3-tap-quad',
    ask: { type: 'phrase', step: 'A1', say: 'Which words link the length to the width? Tap them.',
           answer: '4 m longer than it is wide' } },

  /* ---------- The exception: a profit rule, with the missing number twice ---------- */
  { id: 'exc-breakeven', kind: 'exception', ledger: 'rearr~quad', looksLike: 'rearr', is: 'quad',
    h: 'A profit rule that gives a result of zero',
    link: 'Real problems are less tidy. This profit rule has a result and one missing number, so it looks like the first type.',
    case: 'm3-exc-breakeven',
    setup: 'The problem gives a {t:formula}, the stall owner’s profit rule, and the result it must come to, a profit of zero. One number is missing: the number of crates. That looks like {a:A1.formula}. Yet the answer is {a:A1.itself}.',
    prompt: { kind: 'phrase', answer: '12 × n − n × n − 20' },
    because: [
      'Look at where the missing number shows up in the rule: 12 × n − n × n − 20. It shows up twice, once in 12 × n and once as n × n. You cannot take away the 20, divide, and be left with n, because one n is hidden inside n × n and the other is not.',
      'Two answers give it away too: 2 crates (12 × 2 − 2 × 2 − 20 = 0) and 10 crates (12 × 10 − 10 × 10 − 20 = 0) both give a profit of zero. A missing number used once never gives two answers. With the missing number multiplied by itself, it is {a:A1.itself}.'
    ],
    take: 'If the rule were 12 × n − 20, with no n × n, the missing number would show up once, and it would be {a:A1.formula}.' }
]);
