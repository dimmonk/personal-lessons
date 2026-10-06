// Basic Math, Unit One, part five: the words "right-angled triangle", then the fifth kind (shapes) and the exception that
// carries the key's second tie-break: a scale model, which comes with a rate.
// The pair unknown~shape is taught by that exception.

FC.cards('math', 'u1', [

  /* ---------- A word the fifth kind leans on ---------- */
  { id: 'term-righttriangle', kind: 'term', term: 'righttriangle',
    h: 'A triangle with a square corner',
    link: 'The last kind of problem leans on one word, so here it is first.',
    case: 'gt-sheet',
    plain: [
      'A square corner is the kind of corner you would use to check that a picture frame is straight, and a sheet of paper has four of them. Cut the sheet along a straight line from one corner to the corner opposite, and each of the two pieces is a triangle that keeps one of the sheet’s own square corners.',
      'The same shape is everywhere you look: a wall, the level ground and a ladder resting between them make one. Two roads that cross at a square junction make one, together with a straight path cut across from one road to the other.'
    ],
    after: [
      'What matters about such a triangle is the square corner. It is what makes the three sides depend on one another: when two of them are fixed, the third has only one length it can have.'
    ] },

  /* ---------- The fifth kind: shapes ---------- */
  { id: 'meet-shape', kind: 'meet', family: 'shape',
    link: 'The fourth kind used numbers to count results. The fifth kind uses numbers to measure a shape.',
    case: 'gt-hike', mark: 'M1',
    strip: [
      'A path with two straight legs: 9 km due north, then 12 km due east. North and east meet at a square corner.',
      'The two legs, and the straight line from the end back to the start, make a triangle with a square corner: a {t:righttriangle}.',
      'The problem gives two of its sides and asks for a length: how far in a straight line, which is the third side.',
      'Nothing is hidden for a calculation to fit, nothing changes as time passes, and nothing is a choice or a chance.'
    ],
    explain: [
      'What you are shown is a shape, and a question about one length on it. In a triangle with a square corner, two sides settle the third, which is why the problem needs to give only two of them.',
      'This kind has a second half. The shape can instead be two things that are exactly the same shape at different sizes: a model and the real thing, a small floor plan and the room, two round pizzas. Then the question is about a length on one of them, or about how much more area or volume the bigger one has. Either way, a shape is given, or two shapes are compared, and what is asked is a length, an area or a volume.',
      'A shape in the story is not enough by itself. A garden 8 m long with an area of 40 square meters has no triangle with a square corner and no copy, so asking for its width is a different kind of problem.'
    ],
    feature: { step: 'M1', option: 'shape' },
    name: 'This kind of problem is {a:M1.shape}. “The same shape at different sizes” means exactly the same shape, with every length made a number of times longer or shorter: a photo and its enlargement, a model and the real thing, a plan and the room.' },

  { id: 'check-shape', kind: 'check', after: 'shape',
    case: 'gt-tanks',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that there are two things of exactly the same shape at different sizes? Tap them.',
           answer: 'exactly the same shape but 3 m along each edge' } },

  /* ---------- The exception: a scale model, which comes with a rate ---------- */
  { id: 'exc-model', kind: 'exception', ledger: 'unknown~shape', looksLike: 'unknown', is: 'shape',
    h: 'A scale model, which comes with a rate',
    link: 'The second kind and the fifth are easy to mix up when a problem asks how long something is. A model comes with a rate, and a rate is what the second kind is usually built on.',
    case: 'gt-locomotive',
    setup: 'The problem gives a rate, 1 cm of model for every 40 cm of locomotive, and a new number to scale it to, 30 cm, and it asks for a number that it leaves out. That is what you point to for {a:M1.unknown}. Yet the answer for this case is {a:M1.shape}.',
    prompt: { kind: 'phrase', answer: 'a model of a locomotive' },
    because: [
      'The rate is real, but look at what it is a rate of. It is the scale of a model, and a model and the real locomotive are exactly the same shape at different sizes. A map, a plan, a photo and its enlargement, and a shadow beside the thing that casts it are the same: each is the same shape at a different size, and a rate is only how their sizes are compared.',
      'So the problem shows both: a rate that a hidden number must fit, and a copy of a shape at another size. When it shows both, the answer is {a:M1.shape}.'
    ],
    take: [
      'If the problem had said only that a recipe for 4 people stretches to 7, it would have a rate and nothing else, and the answer would be {a:M1.unknown}.'
    ] }
]);
