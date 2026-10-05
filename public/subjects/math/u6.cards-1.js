// Basic Math, Unit Six, part one: the opening card, and the first kind (Pythagoras’ theorem: two sides of a right-angled triangle).
// Unit Six is a procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a problem of the kind,
// two worked examples with real numbers, and problems the learner finishes. The key has two questions here, and they cross: the first
// says what the problem gives, the second whether it asks how long something is or how much area or volume it has.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// The worked examples (kind solved) are in u6.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u6', [

  { id: 'orient-shape', kind: 'orient',
    h: 'Four kinds of problem about shapes, and a procedure for each',
    canDo: 'After this unit you can take a problem about a length, an area or a volume, such as how long a strip must be to run across the corner of a door, how high a kite is flying, how tall a real bridge is when you have its model, or how much more a bigger tin of paint holds, say which of four kinds it is, and then solve it with the procedure for that kind. You will see every number worked out, you will be told why each step is done, and you will work problems yourself.',
    everyday: [
      'Picture a weekend of jobs at a house, with four questions coming up, every one of them about a shape. “A strip has to run across the corner of the new door, and the frame is 80 cm wide and 150 cm high: how long is the strip?” “A ski lift cable climbs at an angle of 30° and is 200 m long: how high does it go?” “The town has a model of a new bridge, with a tower 12 cm tall, and the real bridge will be 50 times longer than the model: how tall will the real tower be?” “A big stock pot is exactly the same shape as a small one, but 3 times as tall and 3 times as wide: how many times more soup does it hold?”',
      'The key’s first question, which Unit One taught, gives the same answer to all four: {a:M1.shape}. But they are four different questions, with four different procedures, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. So in this unit the order is always the same: first work out what the problem gives you and what it asks about, and only then solve it.'
    ],
    add: [
      'Three words from earlier units are used here and are not taught again. A {t:righttriangle} is a triangle with a square corner. The {t:sqroot} of a number is the number that multiplies by itself to give it. And {t:squared} is the word for a number that has been multiplied by itself. Nothing else is assumed. The arithmetic can be done on a calculator: what this unit practises is which steps to take, and why. One thing is new, because {o:trig} cannot be explained without it: three keys on the calculator, which are taught on the card for that kind.',
      'Each kind is taught the same way as in Unit Two. First a problem of the kind, and the idea behind its procedure. Then two worked problems, in different parts of life, with every step computed and the reason for every step given; on one step in each, the reason is held back until you have chosen it. Then problems that you finish yourself. This unit differs from Unit Two in one way: the key asks two questions here, and each gets its own card once the kinds it separates have been taught. Then the drill mixes all four kinds.'
    ],
    map: { branch: 'shape' } },

  /* ---------- The first kind: two sides of a right-angled triangle ---------- */
  { id: 'meet-pyth', kind: 'meet', outcome: 'pyth',
    link: 'The first kind of problem in this unit starts with a walk, and a triangle with a square corner.',
    case: 'm6-wd-hike', mark: 'S1',
    strip: [
      'There is a {t:righttriangle}: the hiker walks east and then north, which are at a right angle to each other, and the straight walk back closes the triangle.',
      'The problem gives the lengths of two of its sides, 3 km and 4 km, and no angle in degrees besides the square corner.',
      'The question asks how long the third side is, the straight walk back: a length.',
      'Nothing changes as time passes, no hidden number has to fit a {t:formula}, and nothing is counted.'
    ],
    explain: [
      'What you are shown is a triangle with a square corner and the lengths of two of its sides, and what you are asked is the length of the third. The first thing to notice is that the answer is not 3 + 4 = 7. Walking 3 km east and then 4 km north is 7 km, but walking straight back is shorter, because a straight line is the shortest way between two points. So the straight walk back is longer than either leg, 4 km at least, and shorter than both together, 7 km at most. There is a procedure that finds exactly where in between.',
      'The idea behind the procedure is about squares. Picture a square of floor tiles built on each of the three sides of the triangle, with the side as one edge of the square. On the 3 km side the square has 3 × 3 = 9 tiles. On the 4 km side it has 4 × 4 = 16 tiles. On the straight walk back it has as many tiles as the other two together, 9 + 16 = 25, and a square of 25 tiles has 5 tiles along each edge, because 5 × 5 = 25. So the straight walk back is 5 km. That is true of every triangle with a square corner, of any size: the square on the longest side holds as many tiles as the squares on the two shorter sides together. It is not true of a triangle without a square corner. The longest side is always the one opposite the square corner.',
      'So the procedure is this. Multiply each side you are given by itself. Add the two results if you want the longest side, or take one away from the other if you are given the longest side. Then find the number that multiplies by itself to give what is left; the √ key on a calculator finds it. The two worked problems after this card show both cases, with every step written out.',
      'Notice what decides the kind. It is not that 3, 4 and 5 happen to be whole numbers, and it is not the story of a hike. It is that the problem has a triangle with a square corner, gives the lengths of two of its sides, and asks for the third. The same triangle could come up in a problem that gives one side and an angle in degrees instead, and that would be a different kind, with a different procedure.'
    ],
    feature: { step: 'S1', option: 'twosides' },
    name: 'A problem like this is {o:pyth}: the fact that, in a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together, used to find a side that is not given.' },

  { id: 'again-pyth', kind: 'again', outcome: 'pyth',
    link: 'The hike gave you what to point to: {needs:pyth}. Here is a second problem with a different story, a door frame instead of a hike, in which the same thing is given.',
    first: 'm6-wd-hike', second: 'm6-wd-brace', step: 'S1',
    instruction: 'Find what the two problems share. Ignore the story (a hike, a door frame) and ignore the numbers. Look at one thing only: which words give the lengths of two sides of the triangle?',
    prompt: { kind: 'phrase', answer: 'The frame is 80 cm wide and 150 cm high' },
    shared: [
      'Both problems give the lengths of two sides of a triangle with a square corner: 3 km and 4 km on the hike, and 80 cm and 150 cm on the door frame. On the door frame the triangle is made by the strip and the frame’s width and height, which meet at a square corner of the frame. In neither problem is an angle in degrees given, and in both the question is how long the third side is.',
      'That is all you point to, and it is why one name covers a hike and a door frame. The story differs. What is given and what is asked is the same.'
    ] },

  { id: 'lens-procedure', kind: 'lens',
    h: 'Story and structure, now that there is something to solve',
    link: 'The last card asked you to ignore the story and look at what the problem gives. That holds for every card from here on, and this card says it once, now that there is a procedure to carry out.',
    body: [
      'Every problem in this unit has two layers, as in Unit One. The top layer is the story: a hike, a door frame, a tower, a toy car, a tin of paint. Under it is what the problem gives you to work with and what it asks about, and that is what decides the kind and so the procedure.',
      'There is one new thing. Once the kind is chosen, you carry out its procedure on the numbers, and the numbers do change the working: a side can need a {t:sqroot} that is not a whole number, and every angle gives its own number on a calculator. So in this unit you will see the same kind of problem with different numbers, and the steps will always be the same steps, with different working in them.',
      'Two things change on purpose from card to card: the words of the question (“how long”, “how high”, “how far”, “how many times more”) and the setting. None of them tells you the kind. Only what the problem gives and what it asks about does.'
    ],
    fixed: ['the two questions the key asks of every problem in this unit: {q:S1} and {q:S2}'],
    varies: ['the story', 'the people', 'the size of the numbers', 'the units (cm, m, km)', 'which side or which amount is missing', 'the words of the question (“how long”, “how high”, “how many times more”)'] },

  { id: 'portrait-pyth', kind: 'portrait', outcome: 'pyth',
    link: 'You know what to point to for {o:pyth}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A triangle with a square corner that is not drawn for you but is there in the story: a wall and the ground, a door frame or a display with a line from corner to corner, a ramp with its height, a walk that turns through a right angle.',
      'Two lengths given, any two of the triangle’s three sides, and the third wanted. The two you are given can be the two shorter ones, so that you want the longest, or the longest and one shorter one, so that you want the other shorter side.',
      'No angle in degrees besides the square corner. The answer is a length, and often not a whole number: a window pane 70 cm wide and 120 cm high is about 139 cm from corner to corner.',
      'A check you can make at the end: the longest side is always longer than either of the others and always shorter than the two of them added together, so a path straight across a yard is shorter than going round two of its edges.'
    ],
    not: [
      'One side and an angle in degrees is not this kind. The lengths alone do not give the third side without the angle, and the procedure for it is different.',
      'A triangle with no square corner is not this kind, because the fact about squares holds only when one corner is square. And two lengths are not enough on their own: they have to be two sides of the very triangle whose third side is wanted. A length on a second thing of the same shape, with its own lengths, is a different kind.'
    ],
    wild: ['"How long is the diagonal?"', '"How far is it in a straight line?"', '"How long a strip do I need across the corner?"', '"Will it fit through the door on the slant?"'],
    self: 'In your own life you meet this when you fit something through a gap on the slant, when you work out how long a cable, a brace or a rope has to be, when you ask how far it is in a straight line and not along two roads, and when someone quotes the size of a display from corner to corner.',
    ask: '"Is there a triangle with a square corner, with two of its sides given and the third wanted?" If you can say yes, and there is no angle in degrees to work from, you are probably looking at this kind.' },

  { id: 'check-pyth', kind: 'check', after: 'pyth',
    case: 'm6-wd-tv',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give the lengths of two sides of the triangle? Tap them.',
           answer: 'whose rectangular display is 48 cm high and 64 cm wide' } },

  { id: 'check-pyth-last', kind: 'check', after: 'pyth', case: 'm6-ck-pyth-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-pyth-whole', kind: 'check', after: 'pyth', case: 'm6-ck-pyth-whole', ask: { type: 'solve', solve: 'whole' } }
]);
