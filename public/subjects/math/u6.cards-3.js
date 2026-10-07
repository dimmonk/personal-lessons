// Basic Math, Unit Six, part three: the third type (a length on one of two things of the same shape at different sizes),
// the exception that shows a right triangle and a copy at once (the shadow), and the key’s first question, which can be taught now that all
// three of its answers have been met. The worked example (kind solved) is in u6.cards-solved-2.js.

FC.cards('math', 'u6', [

  { id: 'meet-similar', kind: 'meet', outcome: 'similar',
    link: 'Third type: two things of exactly the same shape at different sizes, like a model and the real thing, or a photo and its enlargement.',
    case: 'm6-wd-footbridge', mark: 'S1',
    explain: [
      'The model is an exact copy, so every length on the real bridge is the same number of times longer than the matching length on the model: the span, the tower, the arch, every cable. If one direction were stretched more than another, it would not be the same shape.',
      'You can measure the span on both, so use it to find how many times longer the real bridge is. The span is 10 m, which is 1,000 cm, against 20 cm on the model: 1,000 ÷ 20 = 50 times longer. So the real tower is 12 × 50 = 600 cm, which is 6 m.'
    ],
    spot: [
      { do: 'Find the two things of the same shape: the model and the real footbridge.', why: 'One is an exact copy of the other at a different size.' },
      { do: 'Find a length measured on both: the span, 20 cm on the model and 10 m on the real bridge.', why: 'It shows how many times longer the real bridge is.' },
      { do: 'Find the part you know on one only: the tower, 12 cm on the model.', why: 'This is the length you carry over to the real bridge.' },
      { do: 'Check you are asked for a length: how tall the real tower is.', why: 'Asking how much area or volume would be a different type.' }
    ],
    feature: { step: 'S1', option: 'matching' },
    name: 'A problem like this is {o:similar}: a length you know on one thing, carried over to its copy.' },

  { id: 'check-similar', kind: 'check', after: 'similar',
    case: 'm6-wd-flagcopy',
    ask: { type: 'phrase', step: 'S1', say: 'Which words say there are two things of exactly the same shape? Tap them.',
           answer: 'makes a flag as an exact copy of a badge' } },

  /* ---------- The exception: a shadow shows a right triangle and is also a copy ---------- */
  { id: 'exc-shadow', kind: 'exception', ledger: 'pyth~similar', looksLike: 'pyth', is: 'similar',
    h: 'A shadow makes a triangle, and is also a copy',
    link: 'A shadow can make a problem look like the first type when it is really the third.',
    case: 'm6-ex-shadow',
    setup: 'The woman is 1.7 m tall and her shadow is 2 m long. She stands straight up on level ground, so her height, her shadow and the line from her head to the tip of her shadow make a {t:righttriangle}, and two of its sides are given. That looks like {a:S1.twosides}. But the answer here is {a:S1.matching}.',
    prompt: { kind: 'phrase', answer: 'At the same moment a tree beside her casts a shadow 14 m long' },
    because: [
      'Look at what you are asked. The triangle you are given is the woman’s, but the height of the tree is not a side of it. It is a side of a second triangle, made by the tree, its shadow and the line from the top of the tree to the tip of its shadow.',
      'The sun is at the same angle for both at the same moment, so the two triangles have the same shape. That makes the woman and the tree two things of exactly the same shape, with the shadow measured on both: 2 m and 14 m. The tree’s shadow is 14 ÷ 2 = 7 times as long, so the tree is 7 times as tall: 1.7 × 7 = 11.9 m.'
    ],
    take: [
      'If the problem had asked how far it is from the top of her head to the tip of her shadow, that line is the third side of her own triangle, and the answer would be {a:S1.twosides}.'
    ] },

  /* ---------- The first question for this unit, now that all of its answers have been met ---------- */
  { id: 'q-s1', kind: 'question', step: 'S1',
    h: 'First question: what the problem gives you',
    link: 'Here is the first question and its three answers in one place.',
    decides: [
      'The numbers cannot tell you the type: 3 and 4 can be two sides of a {t:righttriangle}, or the same part measured on a model and on the real thing. What the problem gives you can.'
    ],
    how: [
      { do: 'Say what each number in the problem is: a side of a {t:righttriangle}, an angle in degrees, or a length on one of two copies.', why: 'What a number does decides the type, not how big it is.' },
      { do: 'Two sides and no angle besides the square corner? That is {a:S1.twosides}.', why: 'The third side comes from squaring the two you have.' },
      { do: 'One side and one angle in degrees? That is {a:S1.sideangle}.', why: 'The angle does the work of a second side.' },
      { do: 'A copy at another size, with a length measured on both? That is {a:S1.matching}.', why: 'The length measured on both shows how many times longer the copy is.' },
      { do: 'A height nobody can measure directly? Look at what you are given.', why: 'An angle in degrees means {o:trig}, and a copy measured on both means {o:similar}.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Some problems show two answers at once, like the shadow. Then the length you want decides.' },

  { id: 'check-s1', kind: 'check', after: 'S1',
    case: 'm6-wd-escalator',
    ask: { type: 'step', step: 'S1' } }
]);
