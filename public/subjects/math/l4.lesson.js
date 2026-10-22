// Math, lesson 4: Proportional or not? (part 4). Plan: docs/subjects/math/plan.md, Unit 2. Look-alike pairs side by side (P12): the same story
// with every part growing, and with one part paid once (M7, the overuse of proportion). Each question asks first whether it scales, then the
// number, rough then exact (the plan's problem shape). Then the pairs mixed with lesson 3's problems (M17). Check: a story the practice never
// shows (coffee beans by mail, both forms) and three seen ones in the other form, 4 of 5, none wild.
FC.lesson('math', {
  id: 'l4', part: '4', title: 'Proportional or not?', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Twice the miles in a cab does not cost twice as much when there is a charge to start, and two months at a gym do not cost twice one month when you paid to join.',
    'Before you scale, check that the whole thing grows with the amount.'
  ],
  flow: [
    { title: 'Look for the part paid once',
      show: [
        { kind: 'prose', text: [
          'A cab charges $3.50 to start, then $2.50 a mile. 4 miles cost $3.50 + 4 × $2.50 = $13.50. 8 miles is not $27: it is $3.50 + 8 × $2.50 = $23.50. The start is paid once, however far you go.',
          'The rule for every question: look for a part that is paid once, or stays the same, whatever the amount. If there is none, it scales: per one, then times how many. If there is one, scale only the part that grows, then add the fixed part back.',
          'Fixed parts hide in a charge to start, a monthly fee, a joining fee, a charge for the day, or a shipping charge for any size of order.',
          'A price list may not show a fixed part. Then check the earlier cost on it: 4 miles at $2.50 is $10, but your last ride cost $13.50, so $3.50 is paid once.'] },
        { kind: 'figure', type: 'rate-table', data: { top: { label: 'Miles', cells: ['0', '4', '8'] }, bottom: { label: 'Fare', cells: ['$3.50', '$13.50', '$23.50'] } } },
        { kind: 'prose', tone: 'wrong', text: [
          '“Twice as much always costs twice as much.”',
          'Only when nothing is paid once. With a fixed part, twice the amount costs less than twice as much.'] }
      ] },
    { worked: 'w-taxi' },
    { set: { items: [[{ gen: 'g-taxi-rate', n: 1 }, { gen: 'g-taxi-fee', n: 1 }], [{ gen: 'g-phone-rate', n: 1 }, { gen: 'g-phone-fee', n: 1 }]], order: 'listed' } },
    { set: { items: [[{ gen: 'g-gym-rate', n: 1 }, { gen: 'g-gym-fee', n: 1 }], [{ gen: 'g-truck-rate', n: 1 }, { gen: 'g-truck-fee', n: 1 }]], order: 'listed' } },
    { set: { items: [{ gen: 'g-taxi-fee', n: 1 }, { gen: 'g-phone-rate', n: 1 }, { gen: 'g-gym-fee', n: 1 }, { gen: 'g-truck-rate', n: 1 }], order: 'shuffle', mix: { from: ['l3'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-beans-fee', n: 1, with: { card: 'hidden' } }, { gen: 'g-beans-rate', n: 1 }, { gen: 'g-taxi-rate', n: 1, with: { card: 'hidden' } }, { gen: 'g-phone-fee', n: 1 }, { gen: 'g-gym-rate', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 }, of: 'questions right in every part: whether it scales, the rough answer and the exact one' }, { slip: 'wild', max: 0 }]
  }
});
