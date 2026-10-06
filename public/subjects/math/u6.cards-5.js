// Basic Math, Unit Six, part five: the key’s second question for this unit, the check on it, and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).

FC.cards('math', 'u6', [

  /* ---------- The key’s second question ---------- */
  { id: 'q-s2', kind: 'question', step: 'S2',
    h: 'How long, or how much area or volume: the second of this unit’s two questions',
    link: 'The first question left two kinds together, because both start from a thing and its exact copy at another size. This card puts the second question and its two answers in one place.',
    decides: [
      'The same two mats, tanks or posters can be given in a problem of either kind, and only what is asked tells them apart.'
    ],
    how: [
      'Read the last sentence of the problem and find the words that say what is wanted. “How long”, “how high”, “how far” and “how wide” ask for a length. “How much paint”, “how much glass”, “how much water”, and “how many times more” of something that covers a surface or fills a solid, ask for an area or a volume.',
      'A question about an amount, such as a cost, follows the area or the volume: if the glass for a pane costs so much, the glass for a bigger pane costs that much times the number of times its area is bigger.'
    ],
    whenBoth: 'A problem can mention both, as when it gives the area of the small thing and asks how high the big one is. The words that say what is wanted decide: the area given is only a number in the story, and the question asks how long.' },

  { id: 'check-s2', kind: 'check', after: 'S2',
    case: 'm6-wd-cakeboxes',
    ask: { type: 'step', step: 'S2' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-shape', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four kinds on your own. This card puts the unit in one place.',
    carry: [
      'Before any working, ask what the problem gives you and what it asks about, and point to the words that say it. Two questions are asked in this unit: {q:S1} {q:S2}',
      'Two sides of a triangle with a square corner lead to {o:pyth}. One side and one angle in degrees lead to {o:trig}. Two things of exactly the same shape lead to {o:similar} when a length is asked, and to {o:sqcube} when an area or a volume is asked.',
      'The story does not tell you the kind. A ramp can be given with two sides, or with one side and an angle, and the answers are found in different ways. The same two posters can ask how high the bigger one is, which is a length, or how much ink it needs, which is an area.',
      'For {o:pyth}: multiply each side you are given by itself, add the two results if you want the longest side, or take away if you are given it, and find the number that multiplies by itself to give what is left.',
      'For {o:trig}: name the three sides from the angle, choose the button that joins the side you know to the side you want, and read its value off a calculator set to degrees. A side on top of the comparison is found by multiplying, and a side underneath by dividing.',
      'For {o:similar}: find how many times longer the bigger one is from a part measured on both, and multiply the length you have by that number if it is on the smaller thing, or divide by it if it is on the bigger thing.',
      'For {o:sqcube}: find how many times longer the bigger one is, then multiply that number by itself, with two of them for an area and three of them for a volume. Then multiply a known amount by the result, if the problem gives one.',
      'When the problem shows a triangle with a square corner and also a second thing of the same shape, such as a shadow, the length wanted decides: a side of that very triangle is {o:pyth}, and a length on the second thing is {o:similar}.'
    ] }
]);
