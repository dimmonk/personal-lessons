// Math, lesson 12: Packs, leftovers and lining up (part 12). Plan: docs/subjects/math/plan.md, Unit 5. The owner's whole-number topics through
// the everyday problems they solve (M24): dividing with a remainder and rounding up (buses), equal groups (the biggest number that divides both),
// packs and timetables that come out even (the smallest number both divide), and primes as the pieces numbers are built from. Faded steps, then
// whole problems. Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l12', part: '12', title: 'Packs, leftovers and lining up', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Hot dogs come 10 to a pack and buns 8 to a pack, buses seat 52, and party bags should all be the same. Whole things do not split, so the answer has to come out even.',
    'Here you round up to hold everyone, make equal groups with nothing left, and buy packs that come out even.'
  ],
  flow: [
    { title: 'Whole things: round up, groups and packs',
      show: [
        { kind: 'prose', text: [
          'Whole things: 230 people ÷ 52 seats = 4.42 buses. The part after the point is people with no seat yet, so book 5 buses: to hold everyone, round up, as when you buy paint. 4 full buses carry 4 × 52 = 208, so 22 ride the fifth, which has 52 − 22 = 30 empty seats.',
          'Equal groups with nothing left over: the number of groups must divide both amounts. Try what divides the smaller amount, from the biggest down, until one also divides the other. 24 pencils and 36 stickers: 24 does not divide 36, 12 does. So 12 bags, each with 2 pencils and 3 stickers.',
          'Packs that come out even: count up by the bigger pack until the smaller one divides it. Hot dogs in 10s, buns in 8s: 10, 20, 30, 40, and 40 ÷ 8 = 5. Buy 40: 4 packs of hot dogs and 5 of buns.',
          'Telling them apart: “the most, all the same” is groups, so split down, and the answer is no bigger than the smaller amount; “the fewest that come out even” or “next together” is packs, so count up, and the answer is at least the bigger pack. To list what divides a number, try 1, 2, 3 … up to its middle: 30 is 1 × 30, 2 × 15, 3 × 10, 5 × 6.',
          'Why it works: every whole number is built by multiplying primes, the numbers only 1 and themselves divide (2, 3, 5, 7, 11 …). 10 = 2 × 5 and 8 = 2 × 2 × 2, and 40 = 2 × 2 × 2 × 5 holds the pieces of both and nothing more.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Hot dogs in 10s and buns in 8s: buy 10 × 8 = 80 of each.”',
          '80 comes out even but is twice what you need: 40 is the first number both packs divide.'] }
      ] },
    { worked: 'w-buses' },
    { set: { items: [{ gen: 'g-buses', n: 1 }, { gen: 'g-gift-bags', n: 1 }, { gen: 'g-hot-dogs', n: 1 }, { gen: 'g-schedule', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-hot-dogs', n: 1 }, { gen: 'g-buses', n: 1 }, { gen: 'g-schedule', n: 1 }, { gen: 'g-gift-bags', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-gift-bags', n: 1 }, { gen: 'g-schedule', n: 1 }, { gen: 'g-buses', n: 1 }, { gen: 'g-hot-dogs', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-buses', n: 1 }, { gen: 'g-gift-bags', n: 1 }, { gen: 'g-hot-dogs', n: 1 }, { gen: 'g-schedule', n: 1 }, { gen: 'g-buses', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'rounded-down', max: 0 }, { slip: 'wild', max: 0 }]
  }
});
