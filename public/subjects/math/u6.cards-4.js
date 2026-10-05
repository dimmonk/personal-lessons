// Basic Math, Unit Six, part four: the fourth kind (the Square-cube law: how much area or volume the bigger of two things of the same shape has),
// the look-alike card that sets it beside the third kind, and the key’s second question, which can be taught now that both of its answers
// have been met. The worked examples (kind solved) are in u6.cards-solved-*.js.

FC.cards('math', 'u6', [

  { id: 'meet-sqcube', kind: 'meet', outcome: 'sqcube',
    link: 'The third kind of problem started from two things of the same shape and asked how long a part is. The fourth kind starts from the same two things and asks about something else.',
    case: 'm6-wd-mats', mark: 'S2',
    strip: [
      'There are two things of exactly the same shape at different sizes: a small square mat and a large square mat.',
      'The problem gives how many times longer the large mat is: it measures 3 m along each side, and the small one measures 1 m.',
      'The question does not ask how long anything is. It asks how many times more floor the large mat covers: an area.',
      'The answer is not 3.'
    ],
    explain: [
      'What you are shown is two mats of the same shape, and a question about how much floor each covers. The first thing to notice is that the answer is not 3. The large mat is 3 times as long and 3 times as wide, and it is easy to say that it must cover 3 times as much floor. But look at what fits on it. Take mats the size of the small one, 1 m by 1 m. Along the length of the large mat there are 3 of them, and across its width there are 3 rows. That is 3 × 3 = 9 small mats, so the large mat covers 9 times as much floor.',
      'The same reasoning goes one direction further for a solid. A big box that is 3 times as long, 3 times as wide and 3 times as tall as a small box of the same shape can be filled with small boxes: 3 along the length, 3 across the width and 3 up the height. That is 3 × 3 × 3 = 27 small boxes, so it holds 27 times as much. A length grows by the number of times longer. An area, which has two directions, grows by that number multiplied by itself. A volume, which has three directions, grows by it multiplied by itself twice over.',
      'Notice what decides the kind. It is not that the problem mentions mats, or boxes. It is that there are two things of exactly the same shape at different sizes, and the question asks how much surface or how much room inside the bigger one has, or how many times more, and not how long a part is. The words of the question matter here: the same two mats could be given in a problem that says how long the small mat’s diagonal is and asks how long the large mat’s diagonal is, and that would be the third kind.'
    ],
    feature: { step: 'S2', option: 'room' },
    name: 'A problem like this is {o:sqcube}: the area of a copy grows by how many times longer it is, multiplied by itself, and its volume by how many times longer it is, multiplied by itself twice over. The name joins the two rules into one law about two things of the same shape: the square for an area, and the cube for a volume.' },

  { id: 'again-sqcube', kind: 'again', outcome: 'sqcube',
    link: 'The mats gave you what to point to: {needs:sqcube}. Here is a second problem with a different story, two stock pots, in which the same thing is asked.',
    first: 'm6-wd-mats', second: 'm6-wd-pots', step: 'S2',
    instruction: 'Find what the two problems share. Ignore the story (a floor mat, a stock pot) and ignore the numbers. Look at one thing only: which words ask how much something has, and not how long it is?',
    prompt: { kind: 'phrase', answer: 'How many times more soup does the large pot hold?' },
    shared: [
      'Both problems give two things of exactly the same shape at different sizes, and both ask how many times more of something the bigger one has: floor covered, soup held. Neither asks how long a part is. The mats ask about an area, and the pots about a volume.',
      'That is what you point to: two copies, and a question about how much surface or how much room inside, and not about a length. The story, and whether it is an area or a volume, change the working, because they decide how many times the number of times longer is multiplied by itself. They do not change the kind.'
    ] },

  { id: 'portrait-sqcube', kind: 'portrait', outcome: 'sqcube',
    link: 'You know what to point to for {o:sqcube}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two things of exactly the same shape, one bigger: tins, pots, boxes, tanks, panes, tiles, posters, sheds, cakes, balloons.',
      'How many times longer the bigger one is, either given directly (3 times as tall) or found from a part measured on both (a tin 15 cm tall and a tin 30 cm tall).',
      'A question about how much: how much surface is covered (paint, glass, icing, floor), or how much room there is inside (water, soup, clay, air), or how many times more. The answer is a number of times, or an amount found by multiplying a known amount by that number of times.',
      'An answer much bigger than the number of times longer: twice as long gives 4 times the area and 8 times the volume, and 10 times as long gives 100 times the area and 1,000 times the volume.'
    ],
    not: [
      'A problem that asks how long a part of the bigger thing is, such as how tall it is or how wide, is not this kind, though it starts from the same two things. Every length is multiplied by the number of times longer once, and that is a different procedure.',
      'And two things that are not exactly the same shape are not this kind. A shed that is twice as long but only the same height is not a copy, so its area and volume do not follow this rule.'
    ],
    wild: ['"How many times more does it hold?"', '"How much more paint would it take?"', '"Is it worth twice the price for twice the size?"', '"Twice as wide, so twice as much, right?"'],
    self: 'In your own life you meet this when you compare sizes of things that are priced by their surface or by what they hold, such as pizzas, pots, paint tins, glass or fabric, when you ask whether a bigger version is good value, and when someone says that a thing is twice as big and you wonder in which way.',
    ask: '"Are there two things of exactly the same shape, and does the problem ask how much surface or how much room inside the bigger one has, or how many times more?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-sqcube', kind: 'check', after: 'sqcube',
    case: 'm6-wd-notice',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show what is asked about the bigger board? Tap them.',
           answer: 'how many times more cork covers the front of the big board' } },

  { id: 'check-sqcube-last', kind: 'check', after: 'sqcube', case: 'm6-ck-sqcube-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-sqcube-whole', kind: 'check', after: 'sqcube', case: 'm6-ck-sqcube-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The look-alike pair: how long, or how much area ---------- */
  { id: 'look-similar-sqcube', kind: 'lookalike', ledger: 'similar~sqcube',
    link: 'The third and fourth kinds both start from a copy of something at another size, so they are easy to mix up. This card puts them side by side.',
    cases: ['m6-la-poster-similar', 'm6-la-poster-sqcube'],
    instruction: 'Both problems are about the same printer and the same postcard, enlarged from 10 cm wide to 40 cm wide. Compare one thing: what does each problem ask for?',
    prompt: { kind: 'which', option: 'S2.room', answer: 'm6-la-poster-sqcube' },
    difference: [
      'In Case A the printer asks how high the poster is. That is how long a part is, so the key’s answer is {a:S2.length}. The poster is 40 ÷ 10 = 4 times longer than the postcard in every direction, so its height is 15 × 4 = 60 cm: the number of times longer is used once.',
      'In Case B the printer asks how much ink the poster uses, when the postcard uses 2 g. Ink covers a surface, so the key’s answer is {a:S2.room}. The same 4 times longer gives 4 × 4 = 16 times as much ink, so the poster uses 2 × 16 = 32 g: the number of times longer is multiplied by itself, because a surface has two directions.',
      'Both problems start from the same two things and the same 4 times longer. What differs is only what is asked: a length, which multiplies once, or an area, which multiplies by itself.'
    ] }
]);
