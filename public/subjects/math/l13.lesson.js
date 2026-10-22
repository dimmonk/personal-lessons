// Math, lesson 13: Counting ways and chances (part 13). Plan: docs/subjects/math/plan.md, Unit 5. Multiply the choices (outfits, a lock's codes);
// "at least once" by counting those who miss every time; a test result as counts out of 1,000 on the people picture, never the probability
// formula (M10). Faded steps, then whole problems, then mixed with lesson 12's (M17). Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l13', part: '13', title: 'Counting ways and chances', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'A test that finds 90% of the people who have a condition comes back positive: most people guess a 90% chance they have it, and for a rare condition that is far too high.',
    'Here you count ways by multiplying, and you work out chances by counting people.'
  ],
  flow: [
    { title: 'Multiply the choices; count the people',
      show: [
        { kind: 'prose', text: [
          'Counting the ways: when you pick one of each, multiply the choices. 4 shirts, 3 pants and 2 pairs of shoes make 4 × 3 × 2 = 24 outfits. A lock with 4 wheels of 10 digits has 10 × 10 × 10 × 10 = 10,000 codes; trying one every 5 seconds takes 50,000 seconds, and an hour is 60 × 60 = 3,600 seconds.',
          'Chances are easiest as counts of people: picture 1,000 people and follow them.',
          'At least once: count the opposite, the people who miss every time, and take them from 1,000. 1 in 4 scratch tickets wins, so 3 in 4 lose. Of 1,000 people with 2 tickets each, 750 lose the first, and 3 in 4 of those, 562.5, lose the second too. So about 563 win nothing and about 437 win at least once.',
          'A test result: say 10 in 1,000 have it, and the test finds 9 of them. Of the other 990, 5% test positive anyway: about 50. So 59 test positive, and only 9 of them have it: about 15%, not 90%.'] },
        { kind: 'figure', type: 'people', data: { caption: 'Of 1,000 people who take the test', rows: [{ label: 'Have it', count: 10 }, { label: 'Have it and test positive', count: 9 }, { label: 'Do not have it but test positive', count: 50 }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“The test is right 90% of the time, so a positive means a 90% chance.”',
          'Count the people: many positives can come from the many who do not have it, and for a rare condition most do.'] }
      ] },
    { worked: 'w-test' },
    { set: { items: [{ gen: 'g-outfits', n: 1 }, { gen: 'g-lock', n: 1 }, { gen: 'g-at-least', n: 1 }, { gen: 'g-test', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-at-least', n: 1 }, { gen: 'g-test', n: 1 }, { gen: 'g-lock', n: 1 }, { gen: 'g-outfits', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-test', n: 1 }, { gen: 'g-at-least', n: 1 }, { gen: 'g-outfits', n: 1 }, { gen: 'g-lock', n: 1 }], order: 'shuffle', mix: { from: ['l12'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-outfits', n: 1 }, { gen: 'g-lock', n: 1 }, { gen: 'g-at-least', n: 1 }, { gen: 'g-test', n: 1 }, { gen: 'g-test', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});
