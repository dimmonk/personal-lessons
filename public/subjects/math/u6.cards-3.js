// Basic Math, Unit Six, part three: the third kind (Similar shapes: a length on one of two things of the same shape at different sizes),
// the exception that shows a triangle and a copy at once (the shadow), the look-alike card that sets it beside the second kind, and the key’s
// first question, which can be taught now that all three of its answers have been met.
// The worked examples (kind solved) are in u6.cards-solved-*.js.

FC.cards('math', 'u6', [

  { id: 'meet-similar', kind: 'meet', outcome: 'similar',
    link: 'The first two kinds of problem were about a triangle with a square corner. The third kind is about two things of exactly the same shape at different sizes: a model and the real thing, a photo and its enlargement.',
    case: 'm6-wd-footbridge', mark: 'S1',
    strip: [
      'There are two things of exactly the same shape at different sizes: a model of a footbridge, and the real footbridge. The model is an exact copy at a smaller size.',
      'A length is measured on both: the span, 20 cm on the model and 10 m on the real bridge.',
      'Another length is measured on the model only: the tower, 12 cm tall. It is the length wanted, on the real bridge.',
      'The question asks how long that part is on the real bridge: a length.'
    ],
    explain: [
      '“Exactly the same shape” has a precise meaning here. One thing is a copy of the other, made bigger or smaller, so that every length on one is the same number of times longer than the matching length on the other: the span, the tower, the height of the arch, the length of a cable. Nothing is stretched more in one direction than in another, because then it would no longer be the same shape.',
      'That gives a way to find a length that you cannot measure. Use the part that is measured on both things to find how many times longer the bigger thing is. The span is 10 m, which is 1,000 cm, on the real bridge and 20 cm on the model, so the real bridge is 1,000 ÷ 20 = 50 times longer. Every length on the real bridge is 50 times the matching length on the model, so the real tower is 12 × 50 = 600 cm, which is 6 m.',
      'Notice what decides the kind. It is not that the problem mentions a model, or a bridge, or a scale: a photo and its enlargement, a map and the ground, or a toy and the real thing all work in the same way. It is that one thing is an exact copy of the other at another size, that one length is known on both, that a second length is known on only one of them, and that the question asks for that second length on the other.'
    ],
    feature: { step: 'S1', option: 'matching' },
    name: 'A problem like this is {o:similar}: finding a length on one thing from how many times longer it is than a copy of the same shape.' },

  { id: 'again-similar', kind: 'again', outcome: 'similar',
    link: 'The footbridge gave you what to point to: {needs:similar}. Here is a second problem with a different story, two baking trays, in which the same thing is given.',
    first: 'm6-wd-footbridge', second: 'm6-wd-trays', step: 'S1',
    instruction: 'Find what the two problems share. Ignore the story (a bridge, a baking tray) and ignore the numbers. Look at one thing only: which words say there are two things of exactly the same shape at different sizes?',
    prompt: { kind: 'phrase', answer: 'a large tray of exactly the same shape that is 50 cm wide' },
    shared: [
      'Both problems give two things of exactly the same shape at different sizes, a model and a real bridge, a small tray and a large tray, with a length measured on both: the span, and the width. Each also gives another length on one of the two, the tower and the length of the small tray, and asks for that length on the other thing.',
      'In neither problem is there an angle in degrees, and in neither are two sides of one triangle with a square corner given. What you point to is two things of the same shape, a length on both, and a length wanted on one.'
    ] },

  { id: 'portrait-similar', kind: 'portrait', outcome: 'similar',
    link: 'You know what to point to for {o:similar}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A copy of something at another size: a model, a plan or a map, a photo and its enlargement, a toy and the real thing, a small tray and a large one, a person and a statue of the person.',
      'A part that is measured on both. It can be a width, or a height, or a scale such as 1 to 50, which says that 1 cm on the copy stands for 50 cm on the real thing. A scale is a part measured on both, written as a pair of numbers.',
      'Another length given on just one of the two things, with the question asking for the matching length on the other. It can be on the bigger thing or on the smaller one.',
      'The answer is a length, in the unit of the thing it is on. A check you can make: a length on the bigger thing is longer than the matching length on the smaller one, and a length on the smaller thing is shorter.'
    ],
    not: [
      'Two things that are alike but not exactly the same shape are not this kind. A wide, low shed and a tall, narrow shed are both sheds, but every length on one is not the same number of times longer than on the other, so a length measured on both says nothing about the rest.',
      'Two lengths on one thing, with no copy of it, are not this kind either: there is nothing to scale from. And a problem that asks how much surface or how much room inside a bigger thing has, and not how long a part is, is a different kind, even though it starts from the same two things.'
    ],
    wild: ['"It is an exact copy at 1 to 50."', '"It is the same shape, just bigger."', '"How big would that be in real life?"', '"The model is 36 cm, so the real one is…?"'],
    self: 'In your own life you meet this when you read a map or a plan, when you enlarge or shrink a photo or a drawing to fit a page, when you work out the real size of something from a model or a toy, and when you judge how big a thing is from a picture with something of a known size beside it.',
    ask: '"Is one thing a copy of another at a different size, with a length known on both and another length known on one?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-similar', kind: 'check', after: 'similar',
    case: 'm6-wd-flagcopy',
    ask: { type: 'phrase', step: 'S1', say: 'Which words say that there are two things of exactly the same shape? Tap them.',
           answer: 'makes a flag as an exact copy of a badge' } },

  { id: 'check-similar-last', kind: 'check', after: 'similar', case: 'm6-ck-similar-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-similar-whole', kind: 'check', after: 'similar', case: 'm6-ck-similar-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The exception: a shadow shows a triangle with a square corner and is also a copy ---------- */
  { id: 'exc-shadow', kind: 'exception', ledger: 'pyth~similar', looksLike: 'pyth', is: 'similar',
    h: 'A shadow, which shows a triangle and is also a copy',
    link: 'The first kind of problem in this unit had a triangle with a square corner and two of its sides. A shadow brings that triangle into a problem of the third kind, and the problem then shows both.',
    case: 'm6-ex-shadow',
    setup: 'The problem gives a woman and her shadow: her height, 1.7 m, and the length of her shadow, 2 m. She stands straight up and the ground is level, so her height, her shadow and the line from the top of her head to the tip of her shadow make a triangle with a square corner, and two of its sides are given. That is what you point to for {a:S1.twosides}. Yet the answer for this case is {a:S1.matching}.',
    prompt: { kind: 'phrase', answer: 'At the same moment a tree beside her casts a shadow 14 m long' },
    because: [
      'Look at what is wanted. The triangle that is given is the woman’s, and the length wanted, the height of the tree, is not a side of it. It is a side of a second triangle, the tree’s, made by the tree, its shadow and the line from the top of the tree to the tip of its shadow. The third side of the woman’s own triangle, the line from her head to the tip of her shadow, is a length that nobody asks for.',
      'The two triangles have exactly the same shape, because the sun is at the same angle for both at the same moment. So the woman and the tree are two things of exactly the same shape at different sizes, and a length is measured on both: the shadow, 2 m for the woman and 14 m for the tree. The tree’s shadow is 14 ÷ 2 = 7 times as long, so the tree is 7 times as tall as the woman: 1.7 × 7 = 11.9 m.',
      'So the problem shows both: two sides of a triangle with a square corner, and a second thing that is an exact copy at another size. When it shows both, the answer is {a:S1.matching}.'
    ],
    take: [
      'This is a decision made for the questions, and the test is where the length wanted is. If the length wanted is the third side of the triangle whose two sides are given, the answer is {a:S1.twosides}: for example, how far it is from the top of her head to the tip of her shadow. If the length wanted is on a second thing of the same shape, the answer is {a:S1.matching}.',
      'A model or a shadow always has this second thing. If a problem gave only the woman and her shadow and asked for the line from her head to the tip of the shadow, there would be no second thing, and the problem would be about a triangle with a square corner and two of its sides.'
    ] },

  /* ---------- The look-alike pair: an angle, or a copy ---------- */
  { id: 'look-trig-similar', kind: 'lookalike', ledger: 'trig~similar',
    link: 'The second and third kinds are easy to mix up when the length wanted is a height that nobody can measure directly, because both can find it. This card puts them side by side.',
    cases: ['m6-la-lighthouse-trig', 'm6-la-lighthouse-similar'],
    instruction: 'Both problems are about the same harbour pilot and the same lighthouse, and both ask how tall something is. Compare one thing: what is given that lets the height be found?',
    prompt: { kind: 'which', option: 'S1.matching', answer: 'm6-la-lighthouse-similar' },
    difference: [
      'In Case A the pilot stands 80 m from the foot of the lighthouse and sees the lamp at 25° above level ground. That is one length and one angle in degrees, besides the square corner. The answer is {a:S1.sideangle}, and the procedure uses the tan button: 80 × tan 25° = 80 × 0.4663 = 37.3 m, the height of the lamp.',
      'In Case B the pilot has a postcard that is an exact copy of the lighthouse. On the card the lighthouse is 12 cm tall and its door is 0.5 cm tall, and the real door is 2 m tall. There is no angle. There are two things of exactly the same shape at different sizes, with the door measured on both. The answer is {a:S1.matching}. The real door is 200 cm ÷ 0.5 cm = 400 times longer than the door on the card, so the real lighthouse is 12 × 400 = 4,800 cm, which is 48 m tall.',
      'Both find a height that nobody climbs up to measure. What differs is how: Case A uses an angle, and Case B uses a copy with a part measured on both.'
    ] },

  /* ---------- The first question for this unit, now that all of its answers have been met ---------- */
  { id: 'q-s1', kind: 'question', step: 'S1',
    h: 'What the problem gives you: the first of this unit’s two questions',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its three answers in one place and says why it is asked before any working.',
    decides: [
      'A procedure for the wrong kind still gives a number, and nothing in the number says that it is wrong. The numbers cannot tell you the kind: 3 and 4 can be two sides of a triangle with a square corner, or a part measured on a model and the same part measured on the real thing. What the problem gives you can: two sides of a triangle, one side and an angle, or two things of the same shape.',
      'This question comes first because it sorts the kinds that start from different things. It does not finish the job on its own: the answer for two things of the same shape keeps two kinds, and a second question is asked of these problems, whose answer you have already seen at the foot of each kind’s first card. Your answers on the way are your answer to the first question, then to this one, then to that one.'
    ],
    how: [
      'Look for what the problem gives you, and not for what it asks. Read the numbers in the problem and say what each one is: a side of a triangle with a square corner, an angle in degrees, or a length on one of two copies.',
      'Two sides of a triangle with a square corner, and no angle in degrees besides the square corner, is {a:S1.twosides}. One side and one angle in degrees is {a:S1.sideangle}. A copy of something at another size, with a length measured on both, is {a:S1.matching}.',
      'Put your finger on the words that show it. If a problem shows two of the answers, as the shadow did, the tie-break decides, and the test is where the length wanted is.'
    ],
    whenBoth: 'Some problems show two of the answers at once, and some pairs of kinds share a story or even the same numbers. Each of those pairs has been set side by side in this unit, and each has a question that tells it apart.' },

  { id: 'check-s1', kind: 'check', after: 'S1',
    case: 'm6-wd-escalator',
    ask: { type: 'step', step: 'S1' } }
]);
