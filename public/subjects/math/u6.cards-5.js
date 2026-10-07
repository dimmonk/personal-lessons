// Basic Math, Unit Six, part five: the key’s second question for this unit, the check on it, and the card that closes the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).

FC.cards('math', 'u6', [

  /* ---------- The key’s second question ---------- */
  { id: 'q-s2', kind: 'question', step: 'S2',
    h: 'Second question: how long, or how much area or volume',
    link: 'The first question leaves two types together, because both start from a thing and its copy at another size. Here is the second question and its two answers in one place.',
    decides: [
      'The same two mats, pots or posters can turn up in a problem of either type, and only what is asked tells them apart.'
    ],
    how: [
      { do: 'Read the last sentence and find the words that say what is wanted.', why: 'Everything before it is the setup.' },
      { do: '“How long”, “how high”, “how far” and “how wide” ask for a length.', why: 'A length grows in one direction, so you multiply once.' },
      { do: '“How much paint”, “how much glass”, “how much water”, or “how many times more” of something that covers a surface or fills a solid, ask for an area or a volume.', why: 'A surface grows in two directions and a solid in three.' },
      { do: 'A cost follows the area or the volume: glass for a pane with 4 times the area costs 4 times as much.', why: 'You pay for what you cover or fill.' }
    ],
    whenBoth: 'A problem can mention both, such as the area of the small one while asking how high the big one is. The words that say what is wanted decide: the area given is only a number in the problem.' },

  { id: 'check-s2', kind: 'check', after: 'S2',
    case: 'm6-wd-cakeboxes',
    ask: { type: 'step', step: 'S2' } },

  /* ---------- After the drill ---------- */
  { id: 'recap-shape', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now worked problems of all four types on your own.',
    carry: [
      'Before any working, ask what the problem gives you and what it asks for, and find the words that say it.',
      'Two sides of a {t:righttriangle}: {o:pyth}. One side and one angle in degrees: {o:trig}. Two things of the same shape: {o:similar} when you want a length, and {o:sqcube} when you want an area or a volume.',
      'The setting around the numbers does not tell you the type. The same ramp can be given with two sides or with one side and an angle, and the same two posters can ask how high the big one is, or how much ink it needs.',
      'For {o:pyth}: multiply each side you know by itself, add the two results to find the longest side (or take one away from the other if you were given the longest side), then find the number that multiplies by itself to make the result.',
      'For {o:trig}: name the sides from the angle, pick the button that joins the side you know and the side you want, and read its value on a calculator set to degrees. Multiply when the side you want is on top of the button’s sum, and divide when it is underneath.',
      'For {o:similar}: use a length measured on both to find how many times longer the bigger one is. Multiply the length you know by that number if it is on the smaller one, and divide by it if it is on the bigger one.',
      'For {o:sqcube}: find how many times longer the bigger one is, then multiply two of that number together for an area, or three of it for a volume. Then multiply the known amount by the result.',
      'If a problem shows a {t:righttriangle} and also a second thing of the same shape, such as a shadow, look at the length you want. A side of that triangle is {o:pyth}, and a length on the second thing is {o:similar}.'
    ] }
]);
