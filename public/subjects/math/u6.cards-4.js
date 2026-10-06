// Basic Math, Unit Six, part four: the fourth kind (the Square-cube law: how much area or volume the bigger of two things of the same shape has),
// the look-alike card that sets it beside the third kind. The worked example (kind solved) is in u6.cards-solved-2.js.

FC.cards('math', 'u6', [

  { id: 'meet-sqcube', kind: 'meet', outcome: 'sqcube',
    link: 'The third kind of problem started from two things of the same shape and asked how long a part is. The fourth kind starts from the same two things and asks about something else.',
    case: 'm6-wd-mats', mark: 'S2',
    strip: [
      'There are two things of exactly the same shape at different sizes: a small square mat and a large square mat.',
      'The problem gives how many times longer the large mat is: it measures 3 m along each side, and the small one measures 1 m.',
      'The question does not ask how long anything is. It asks how many times more floor the large mat covers: an area.'
    ],
    explain: [
      'The first thing to notice is that the answer is not 3. The large mat is 3 times as long and 3 times as wide, and it is easy to say that it must cover 3 times as much floor. But look at what fits on it. Take mats the size of the small one, 1 m by 1 m. Along the length of the large mat there are 3 of them, and across its width there are 3 rows. That is 3 × 3 = 9 small mats, so the large mat covers 9 times as much floor.',
      'The same reasoning goes one direction further for a solid. A big box that is 3 times as long, 3 times as wide and 3 times as tall as a small box of the same shape can be filled with small boxes: 3 along the length, 3 across the width and 3 up the height. That is 3 × 3 × 3 = 27 small boxes, so it holds 27 times as much. A length grows by the number of times longer. An area, which has two directions, grows by that number multiplied by itself. A volume, which has three directions, grows by it multiplied by itself twice over.'
    ],
    feature: { step: 'S2', option: 'room' },
    name: 'A problem like this is {o:sqcube}: the area of a copy grows by how many times longer it is, multiplied by itself, and its volume by how many times longer it is, multiplied by itself twice over. The name joins the two rules into one law about two things of the same shape: the square for an area, and the cube for a volume.' },

  { id: 'check-sqcube', kind: 'check', after: 'sqcube',
    case: 'm6-wd-notice',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show what is asked about the bigger board? Tap them.',
           answer: 'how many times more cork covers the front of the big board' } },

  /* ---------- The look-alike pair: how long, or how much area ---------- */
  { id: 'look-similar-sqcube', kind: 'lookalike', ledger: 'similar~sqcube',
    link: 'The third and fourth kinds both start from a copy of something at another size, so they are easy to mix up. This card puts them side by side.',
    cases: ['m6-la-poster-similar', 'm6-la-poster-sqcube'],
    instruction: 'Both problems are about the same printer and the same postcard, enlarged from 10 cm wide to 40 cm wide. Compare one thing: what does each problem ask for?',
    prompt: { kind: 'which', option: 'S2.room', answer: 'm6-la-poster-sqcube' },
    difference: [
      'In Case A the printer asks how high the poster is. That is how long a part is, so the answer is {a:S2.length}. The poster is 40 ÷ 10 = 4 times longer than the postcard in every direction, so its height is 15 × 4 = 60 cm: the number of times longer is used once.',
      'In Case B the printer asks how much ink the poster uses, when the postcard uses 2 g. Ink covers a surface, so the answer is {a:S2.room}. The same 4 times longer gives 4 × 4 = 16 times as much ink, so the poster uses 2 × 16 = 32 g: the number of times longer is multiplied by itself, because a surface has two directions.',
      'Both problems start from the same two things and the same 4 times longer. What differs is only what is asked: a length, which multiplies once, or an area, which multiplies by itself.'
    ] }
]);
