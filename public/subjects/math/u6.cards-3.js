// Basic Math, Unit Six, part three: the third kind (Similar shapes: a length on one of two things of the same shape at different sizes),
// the exception that shows a triangle and a copy at once (the shadow), and the key’s first question, which can be taught now that all
// three of its answers have been met. The worked example (kind solved) is in u6.cards-solved-2.js.

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
      'That gives a way to find a length that you cannot measure. Use the part that is measured on both things to find how many times longer the bigger thing is. The span is 10 m, which is 1,000 cm, on the real bridge and 20 cm on the model, so the real bridge is 1,000 ÷ 20 = 50 times longer. Every length on the real bridge is 50 times the matching length on the model, so the real tower is 12 × 50 = 600 cm, which is 6 m.'
    ],
    feature: { step: 'S1', option: 'matching' },
    name: 'A problem like this is {o:similar}: finding a length on one thing from how many times longer it is than a copy of the same shape.' },

  { id: 'check-similar', kind: 'check', after: 'similar',
    case: 'm6-wd-flagcopy',
    ask: { type: 'phrase', step: 'S1', say: 'Which words say that there are two things of exactly the same shape? Tap them.',
           answer: 'makes a flag as an exact copy of a badge' } },

  /* ---------- The exception: a shadow shows a triangle with a square corner and is also a copy ---------- */
  { id: 'exc-shadow', kind: 'exception', ledger: 'pyth~similar', looksLike: 'pyth', is: 'similar',
    h: 'A shadow, which shows a triangle and is also a copy',
    link: 'The first kind of problem in this unit had a triangle with a square corner and two of its sides. A shadow brings that triangle into a problem of the third kind, and the problem then shows both.',
    case: 'm6-ex-shadow',
    setup: 'The problem gives a woman and her shadow: her height, 1.7 m, and the length of her shadow, 2 m. She stands straight up and the ground is level, so her height, her shadow and the line from the top of her head to the tip of her shadow make a triangle with a square corner, and two of its sides are given. That is what you point to for {a:S1.twosides}. Yet the answer for this case is {a:S1.matching}.',
    prompt: { kind: 'phrase', answer: 'At the same moment a tree beside her casts a shadow 14 m long' },
    because: [
      'Look at what is wanted. The triangle that is given is the woman’s, and the length wanted, the height of the tree, is not a side of it. It is a side of a second triangle, the tree’s, made by the tree, its shadow and the line from the top of the tree to the tip of its shadow.',
      'The two triangles have exactly the same shape, because the sun is at the same angle for both at the same moment. So the woman and the tree are two things of exactly the same shape at different sizes, and a length is measured on both: the shadow, 2 m for the woman and 14 m for the tree. The tree’s shadow is 14 ÷ 2 = 7 times as long, so the tree is 7 times as tall as the woman: 1.7 × 7 = 11.9 m.'
    ],
    take: [
      'If the problem asked how far it is from the top of her head to the tip of her shadow, that line is the third side of her own triangle, and the answer would be {a:S1.twosides}.'
    ] },

  /* ---------- The first question for this unit, now that all of its answers have been met ---------- */
  { id: 'q-s1', kind: 'question', step: 'S1',
    h: 'What the problem gives you: the first of this unit’s two questions',
    link: 'At the foot of each kind’s first card you saw the question with one answer under it. This card puts the question and its three answers in one place.',
    decides: [
      'A procedure for the wrong kind still gives a number, and nothing in the number says that it is wrong. The numbers cannot tell you the kind: 3 and 4 can be two sides of a triangle with a square corner, or a part measured on a model and the same part measured on the real thing. What the problem gives you can: two sides of a triangle, one side and an angle, or two things of the same shape.'
    ],
    how: [
      'Look for what the problem gives you, and not for what it asks. Read the numbers in the problem and say what each one is: a side of a triangle with a square corner, an angle in degrees, or a length on one of two copies.',
      'Two sides of a triangle with a square corner, and no angle in degrees besides the square corner, is {a:S1.twosides}. One side and one angle in degrees is {a:S1.sideangle}. A copy of something at another size, with a length measured on both, is {a:S1.matching}. A height that nobody can measure directly is {o:trig} if an angle in degrees is given, and {o:similar} if a copy with a length measured on both is given.',
      'Put your finger on the words that show it. If a problem shows two of the answers, as the shadow did, the length wanted decides.'
    ] },

  { id: 'check-s1', kind: 'check', after: 'S1',
    case: 'm6-wd-escalator',
    ask: { type: 'step', step: 'S1' } }
]);
