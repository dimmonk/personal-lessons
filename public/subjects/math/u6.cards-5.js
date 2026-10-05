// Basic Math, Unit Six, part five: the key’s second question for this unit, the check on it, and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart.

FC.cards('math', 'u6', [

  /* ---------- The key’s second question ---------- */
  { id: 'q-s2', kind: 'question', step: 'S2',
    h: 'How long, or how much area or volume: the second of this unit’s two questions',
    link: 'The first question left two kinds together, because both start from a thing and its exact copy at another size. This card puts the second question and its two answers in one place and says why it comes second.',
    decides: [
      'Two things of exactly the same shape differ in one number only: how many times longer one is than the other. But what that number does depends on what is asked. A length grows by that number. An area grows by the number multiplied by itself. A volume grows by it multiplied by itself twice over. So which of the three the problem asks about decides the procedure, and a problem that asks about the wrong one gets the wrong multiplication.',
      'The question separates two kinds that nothing else in the problem separates: the same two mats, tanks or posters can be given in a problem of either kind, and only what is asked tells them apart. For the other kinds in this unit the answer is always the same, how long a part is, so this question never changes where they go.'
    ],
    how: [
      'Read the last sentence of the problem and find the words that say what is wanted. “How long”, “how high”, “how far” and “how wide” ask for a length. “How much paint”, “how much glass”, “how much water”, and “how many times more” of something that covers a surface or fills a solid, ask for an area or a volume.',
      'A question about an amount, such as a cost, follows the area or the volume: if the glass for a pane costs so much, the glass for a bigger pane costs that much times the number of times its area is bigger. So ask what the amount follows, the length, the surface or the room inside, and give the answer for that.',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.'
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
      'Before any working, ask what the problem gives you and what it asks about, and point to the words that say it. If you cannot point to them, you do not have an answer yet. Two questions are asked in this unit: {q:S1} {q:S2}',
      'Two sides of a triangle with a square corner lead to {o:pyth}. One side and one angle in degrees lead to {o:trig}. Two things of exactly the same shape lead to {o:similar} when a length is asked, and to {o:sqcube} when an area or a volume is asked.',
      'The story does not tell you the kind. A ramp can be given with two sides, or with one side and an angle, and the answers are found in different ways. The same two posters can ask how high the bigger one is, which is a length, or how much ink it needs, which is an area.',
      'For {o:pyth}: find which side is the longest, multiply each side you are given by itself, add the two results if you want the longest side, or take away if you are given it, and find the number that multiplies by itself to give what is left. The square on the longest side is the sum of the squares on the other two.',
      'For {o:trig}: name the three sides from the angle, choose the button that joins the side you know to the side you want, write its comparison with the numbers in, get the side you want on its own, and read the button’s value off a calculator set to degrees. A side on top of the comparison is found by multiplying, and a side underneath by dividing.',
      'For {o:similar}: find a part that is measured on both things, find how many times longer the bigger one is, and multiply the length you have by that number if it is on the smaller thing, or divide by it if it is on the bigger thing.',
      'For {o:sqcube}: find how many times longer the bigger one is, decide whether the problem asks about an area or about a volume, and multiply that number by itself, with two of them for an area and three of them for a volume. Then multiply a known amount by the result, if the problem gives one.',
      'When the problem shows a triangle with a square corner and also a second thing of the same shape, such as a shadow, the length wanted decides: a side of that very triangle is {o:pyth}, and a length on the second thing is {o:similar}.'
    ] },

  { id: 'transfer-shape', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing four procedures is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the four and name an occasion of your own: a time you needed a length across a corner, a height you could not reach, a size you read from a model, a map or a picture, or a time something twice as big turned out to be much more than twice as much. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'pyth', occasion: 'A time you needed the straight-line length across a corner, or the length of a brace, a cable or a diagonal.' },
      { outcome: 'trig', occasion: 'A time you knew a slope or a viewing angle and one length, and wanted a height or a distance.' },
      { outcome: 'similar', occasion: 'A time you worked out a real size from a model, a plan, a map or a picture.' },
      { outcome: 'sqcube', occasion: 'A time a bigger one of the same shape held or covered far more than the number of times it was longer.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);
