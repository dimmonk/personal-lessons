// Math, lesson 15: Two steps, mixed, and the test (part 15). Plan: docs/subjects/math/plan.md. One worked two-step (paint: the cans, then the
// cost); two-step problems with the first step done, then whole; then 8 mixed problems of every kind (M17, M1); then the plan's real-world test as
// the check: one new problem from each of lessons 3 to 14 and one of each two-step kind, rough then exact, 12 of 15 (the plan's 10 of 12, with
// at least 2 of the 3 two-step problems) and none wild, again two weeks later on new problems.
FC.lesson('math', {
  id: 'l15', part: '15', title: 'Two steps, mixed, and the test', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'In real life nobody says which kind of problem it is, and the number you want often needs another number first: the cans before the cost, the gallons before the gas money.',
    'Here you put the whole way of working together, then take the test: fifteen new problems of every kind.'
  ],
  flow: [
    { title: 'What do you need first?',
      show: [
        { kind: 'prose', text: [
          'Every problem, the same five steps: say what is asked and what is given; a rough answer from friendly numbers; name the kind and draw it; work it exactly on the calculator; look back at the rough answer, the unit and the direction.',
          'When the numbers given do not lead straight to the answer, find what you need first. The cost of paint needs the number of cans, and the cans need the area of the walls. Find that first number, then the answer.',
          'Look back at both: the cans are rounded up, and the cost is near cans × price.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“The cost is wanted, so multiply the area by the price.”',
          'Paint is sold by the can. Find the cans first, then the cost.'] }
      ] },
    { worked: 'w-paint-cost' },
    { set: { items: [{ gen: 'g-paint-cost', n: 1 }, { gen: 'g-fuel', n: 1 }, { gen: 'g-tip-split', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-tip-split', n: 1 }, { gen: 'g-paint-cost', n: 1 }, { gen: 'g-fuel', n: 1 }], order: 'shuffle' } },
    { set: { items: [{ gen: 'g-fuel', n: 1 }, { gen: 'g-tip-split', n: 1 }], order: 'shuffle', mix: { from: ['l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14'], share: 0.75 } } }
  ],
  check: {
    items: [{ gen: 'g-recipe', n: 1 }, { gen: 'g-beans-fee', n: 1 }, { gen: 'g-change', n: 1 }, { gen: 'g-before-off', n: 1 }, { gen: 'g-paint', n: 1 }, { gen: 'g-mulch', n: 1 },
      { gen: 'g-ladder-long', n: 1 }, { gen: 'g-save-pct', n: 1 }, { gen: 'g-car-loan', n: 1 }, { gen: 'g-buses', n: 1 }, { gen: 'g-test', n: 1 }, { gen: 'g-plans', n: 1 },
      { gen: 'g-paint-cost', n: 1 }, { gen: 'g-fuel', n: 1 }, { gen: 'g-tip-split', n: 1 }],
    feedback: 'at-end', order: 'shuffle', retest: 14,
    pass: [{ right: { min: 12 } }, { where: { kind: 'two-step' }, right: { min: 2 }, of: 'right among the three two-step problems' }, { slip: 'wild', max: 0 }]
  }
});
