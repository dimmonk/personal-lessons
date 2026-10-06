// Basic Math, Unit One, part five: the words "right-angled triangle", then the fifth kind (shapes), its look-alike pair
// with the second kind, and the exception that carries the key's second tie-break.

FC.cards('math', 'u1', [

  /* ---------- A word the fifth kind leans on ---------- */
  { id: 'term-righttriangle', kind: 'term', term: 'righttriangle',
    h: 'A triangle with a square corner',
    link: 'The last kind of problem leans on one word, so here it is first, in a situation you can hold in your hands.',
    case: 'gt-sheet',
    plain: [
      'A square corner is the kind of corner you would use to check that a picture frame is straight, and a sheet of paper has four of them. Cut the sheet along a straight line from one corner to the corner opposite, and each of the two pieces is a triangle that keeps one of the sheet’s own square corners.',
      'The same shape is everywhere you look. Where a wall meets level ground, the two make a square corner. A ladder resting against the wall completes a triangle: the wall, the ground and the ladder. Two roads that cross at a square junction make one, together with a straight path cut across from one road to the other.'
    ],
    after: [
      'What matters about such a triangle is the square corner. It is what makes the three sides depend on one another: when two of them are fixed, the third has only one length it can have.'
    ] },

  /* ---------- The fifth kind: shapes ---------- */
  { id: 'meet-shape', kind: 'meet', family: 'shape',
    link: 'The fourth kind used numbers to count results. The fifth kind uses numbers to measure a shape.',
    case: 'gt-hike', mark: 'M1',
    strip: [
      'There is a path with two straight legs: 9 km due north, then 12 km due east. North and east meet at a square corner.',
      'Those two legs, and the straight line from the end back to the start, make a triangle with a square corner: a {t:righttriangle}.',
      'The problem gives the lengths of two of its sides.',
      'The question asks for a length: how far in a straight line, which is the third side.',
      'Nothing is hidden for a calculation to fit, nothing changes as time passes, and nothing is a choice or a chance.'
    ],
    explain: [
      'What you are shown is a shape, and a question about one length on it. The shape here is a triangle with a square corner, and the length asked for is the side opposite the corner. In a triangle like this, two sides settle the third, which is why the problem needs to give only two of them.',
      'The wording for this kind has a second half. The shape can instead be two things that are exactly the same shape at different sizes: a model and the real thing, a small floor plan and the room, two round pizzas. Then the question is about a length on one of them, or about how much more area or volume the bigger one has. Both halves are about shape. A shape is given, or two shapes are compared, and what is asked is a length, an area or a volume.',
      'A shape in the story is not enough by itself. A garden 8 m long with an area of 40 square meters has measurements and a shape, but it has no triangle with a square corner and no copy, and asking for its width is a different kind of problem. You will meet a pair like that, side by side, in this unit.'
    ],
    feature: { step: 'M1', option: 'shape' },
    name: 'The answer, and so the name of this kind of problem, is {a:M1.shape}. “The same shape at different sizes” means exactly the same shape, with every length made a number of times longer or shorter: a photo and its enlargement, a model and the real thing, a plan and the room.' },

  { id: 'again-shape', kind: 'again', family: 'shape',
    link: 'The hike gave you what to point to: {needs:shape}. Here is the other half of the kind: no triangle, but two floors that are exactly the same shape.',
    first: 'gt-hike', second: 'gt-floor', step: 'M1',
    instruction: 'Find what the two problems share. Ignore the story (a hike, a floor) and ignore the numbers. Look at one thing only: which words show what shape the problem is about?',
    prompt: { kind: 'phrase', answer: 'exactly the same shape, but 6 m across' },
    shared: [
      'Both problems are about shapes, and both ask for something that you could measure on them: a length in the hike, an area in the floors. In the hike the shape is a triangle with a square corner, made by the path and the straight line home. In the other problem the shape is a floor, and there are two of them, exactly alike apart from their size.',
      'Those are the two halves of this kind. In neither problem is a number hidden for a calculation to fit, nothing changes as time passes, and nothing is a choice or a chance. That is what {a:M1.shape} names.'
    ] },

  { id: 'portrait-shape', kind: 'portrait', family: 'shape',
    link: 'You know what to point to for {a:M1.shape}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Either a {t:righttriangle} is in the story (a wall and the ground, a path that goes north and then east, the edges of a phone), or two things have exactly the same shape and different sizes (a model and the real thing, a plan and the room, two round pizzas).',
      'The question is about a length, an area or a volume: how long, how high, how far, how much surface, how much room inside, or how many times more.',
      'The numbers are measurements: meters, centimeters, kilometers, and sometimes an angle in degrees.',
      'When two things are the same shape, every length on one is the same number of times longer than the matching length on the other.'
    ],
    not: [
      'A measurement in the problem does not make it this kind. A garden 8 m long with an area of 40 square meters is not a {t:righttriangle}, and the garden is not a copy of anything: asking for its width is the second kind, a hidden number that must fit a calculation.',
      'And “the same shape” means exactly the same shape. Two rectangles, one long and thin and one nearly square, are not the same shape at different sizes.'
    ],
    wild: ['"How far is it in a straight line?"', '"How high does it reach?"', '"The model is 1 to 40."', '"How much more paint will the bigger one need?"', '"It is drawn to scale."'],
    self: 'In your own life it is anything built, drawn or copied: a ramp, a roof, a ladder against a wall, a model kit, a map, a photo printed bigger, a larger pan and the extra food it holds.',
    ask: '"Is there a {t:righttriangle}, or two things exactly the same shape at different sizes, and is a length, an area or a volume asked for?" If you can say yes to all of it, you are probably looking at this kind.' },

  { id: 'check-shape', kind: 'check', after: 'shape',
    case: 'gt-tanks',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that there are two things of exactly the same shape at different sizes? Tap them.',
           answer: 'exactly the same shape but 3 m along each edge' } },

  /* ---------- The look-alike pair: a length from a shape, or a length from a rate ---------- */
  { id: 'look-unknown-shape', kind: 'lookalike', ledger: 'unknown~shape',
    link: 'The second kind and the fifth are easy to mix up when a problem asks how long something is, because either can. This card puts them side by side.',
    cases: ['gt-brace-length', 'gt-brace-wood'],
    instruction: 'Both problems are about Lena’s shelf, and both ask how long a brace is. Compare one thing: is there a {t:righttriangle} in the problem, or only facts that a hidden number must fit?',
    prompt: { kind: 'which', option: 'M1.shape', answer: 'gt-brace-length' },
    difference: [
      'In Case A the wall, the shelf and the brace make a triangle with a square corner, and the problem gives two of its sides: 40 cm and 30 cm. The length asked for is the third side. The answer is {a:M1.shape}.',
      'In Case B there is no triangle and no copy of anything. The problem gives a price for each meter of wood and what the brace cost, and asks how long the piece is. The hidden number must fit a rate. The answer is {a:M1.unknown}.',
      'Both ask “how long”, and both are about the same brace. A length can be asked for in either kind. What differs is what the problem gives you to find it with: a shape, or a rate.'
    ] },

  { id: 'exc-model', kind: 'exception', ledger: 'unknown~shape', looksLike: 'unknown', is: 'shape',
    h: 'A scale model, which comes with a rate',
    link: 'The last card put the two kinds side by side with a triangle in only one of them. Real problems are less tidy. A model comes with a rate, and a rate is what the second kind is usually built on.',
    case: 'gt-locomotive',
    setup: 'The problem gives a rate, 1 cm of model for every 40 cm of locomotive, and a new number to scale it to, 30 cm, and it asks for a number that it leaves out. That is what you point to for {a:M1.unknown}. Yet the answer for this case is {a:M1.shape}.',
    prompt: { kind: 'phrase', answer: 'a model of a locomotive' },
    because: [
      'The rate is real, so the problem does show {a:M1.unknown}. But look at what the rate is a rate of. It is the scale of a model, and a model and the real locomotive are exactly the same shape at different sizes. Every length on the model is 40 times shorter than the matching length on the real locomotive.',
      'A map, a plan, a photo and its enlargement, and a shadow beside the thing that casts it are the same. Each is the same shape at a different size, and a rate is only how their sizes are compared.',
      'So the problem shows both: a rate that a hidden number must fit, and a copy of a shape at another size. When it shows both, the answer is {a:M1.shape}.'
    ],
    take: [
      'This is a decision made for the questions, and it matters for what comes after. Problems about the same shape at different sizes can also ask for an area or a volume, and a rate cannot tell you how those change. By giving every copy one kind, all those problems stay together.',
      'If the problem had said only that a recipe for 4 people stretches to 7, it would have a rate and nothing else, and the answer would be {a:M1.unknown}.'
    ] }
]);
