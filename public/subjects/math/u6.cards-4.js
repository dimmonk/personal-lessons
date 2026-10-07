// Basic Math, Unit Six, part four: the fourth type (the Square-cube law: how much area or volume the bigger of two things of the same shape has),
// the look-alike card that sets it beside the third type. The worked example (kind solved) is in u6.cards-solved-2.js.

FC.cards('math', 'u6', [

  { id: 'meet-sqcube', kind: 'meet', outcome: 'sqcube',
    link: 'Fourth type: two things of the same shape again, but now you are asked about area or volume.',
    case: 'm6-wd-mats', mark: 'S2',
    explain: [
      'The answer is not 3. The large mat is 3 times as long and 3 times as wide, so it is easy to say it covers 3 times as much floor. But look at what fits on it. Mats the size of the small one fit 3 along its length and 3 rows across: 3 × 3 = 9. The large mat covers 9 times as much floor.',
      'A solid goes one direction further. A box 3 times as long, 3 times as wide and 3 times as tall is filled by 3 × 3 × 3 = 27 small boxes. So when something is 3 times longer, a length is 3 times as much, an area is 3 × 3 = 9 times as much, and a volume is 3 × 3 × 3 = 27 times as much.'
    ],
    spot: [
      { do: 'Find the two things of the same shape: the small mat and the large mat.', why: 'It is two things of one shape, as in the third type.' },
      { do: 'Find how many times longer the bigger one is: 3 m along each side against 1 m.', why: 'That one number is all the working needs.' },
      { do: 'Check what you are asked about: how much floor the large mat covers, an area and not a length.', why: 'A length would be the third type, and an area or a volume is this one.' }
    ],
    feature: { step: 'S2', option: 'room' },
    name: 'A problem like this is {o:sqcube}. The name says it: for an area, square the number of times longer (3 × 3); for a volume, cube it (3 × 3 × 3).' },

  { id: 'check-sqcube', kind: 'check', after: 'sqcube',
    case: 'm6-wd-notice',
    ask: { type: 'phrase', step: 'S2', say: 'Which words show what is asked about the bigger board? Tap them.',
           answer: 'how many times more cork covers the front of the big board' } },

  /* ---------- The look-alike pair: how long, or how much area ---------- */
  { id: 'look-similar-sqcube', kind: 'lookalike', ledger: 'similar~sqcube',
    link: 'Both start from a copy at another size, so they are easy to mix up.',
    cases: ['m6-la-poster-similar', 'm6-la-poster-sqcube'],
    instruction: 'Both problems are about the same postcard, printed as a poster that is 10 cm wide on the card and 40 cm wide on the poster. Compare one thing: what does each problem ask for?',
    prompt: { kind: 'which', option: 'S2.room', answer: 'm6-la-poster-sqcube' },
    difference: [
      'When the printer asks how high the poster is, that is {a:S2.length}. The poster is 40 ÷ 10 = 4 times longer, so its height is 15 × 4 = 60 cm: multiply by 4 once.',
      'When the printer asks how much ink the poster uses, ink covers a surface, so that is {a:S2.room}. The same 4 times longer gives 4 × 4 = 16 times as much ink, so the poster uses 2 × 16 = 32 g. A surface has two directions, so multiply by 4 twice.',
      'Same copy, same 4 times longer. Only what is asked changes: a length is multiplied once, and an area is multiplied by itself.'
    ] }
]);
