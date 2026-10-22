// Math, lesson 19: Refresher: primes and counting formulas (part 19). Plan: docs/subjects/math/plan.md, Unit 6. A reminder, not the main method
// (research M32): three cards (primes, factors and the prime check; counting orders, n! and the first few places; counting groups, the same divided
// by the orders of the chosen), each the fact, one worked example with a look-back, two quick questions (M31); then orders and groups side by side
// as a pair (P12), the cards mixed with lessons 16 to 18 (M17), and a check. Facts: M25 (4.OA.B.4, HSS-CP.B.9).
FC.lesson('math', {
  id: 'l19', part: '19', title: 'Primes and counting formulas, a refresher', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22: a reminder of three school facts, not the main method.' }],
  why: [
    'Is a number prime? What is 12/16 inch on the tape? How many ways can a crew be picked, or a lock code be chosen? Whole numbers and counting.',
    'Three reminders: each fact, one example, then quick questions.'
  ],
  flow: [
    { title: 'Primes and factors',
      show: [
        { kind: 'prose', text: [
          'A prime is a whole number above 1 that only 1 and itself divide: 2, 3, 5, 7, 11, 13, 17 … Every other whole number above 1 is primes multiplied: 84 = 2 × 2 × 3 × 7.',
          'The prime check: try dividing by the primes up to the number’s square root. 143: √143 is 11.96, so try 2, 3, 5, 7 and 11. 143 ÷ 11 = 13, so 143 is not prime. Had none of them divided it, it would be prime: a factor bigger than the square root always comes paired with one smaller.',
          'Common factors put a fraction in lowest terms. Inch fractions only share 2s: halve top and bottom until the top is odd. 12/16 → 6/8 → 3/4.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“91 is odd and not in the 3 or 5 times tables, so it is prime.”',
          '7 divides it: 91 = 7 × 13. Try every prime up to the square root.'] }
      ] },
    { set: { items: [{ gen: 'g-prime-check', n: 1 }, { gen: 'g-inch-fraction', n: 1 }], order: 'listed' } },
    { title: 'Counting orders',
      show: [
        { kind: 'prose', text: [
          'How many orders can 5 jobs be done in? How many ways to fill first, second and third place? First: does the order matter? Check whether swapping two of the ones picked gives a different result.',
          'When it does, multiply the choices for each place, one fewer each time: any of 5 first, any of the 4 left second, and so on: 5 × 4 × 3 × 2 × 1 = 120. All n of them in order is written n! (n factorial). For only the first few places, stop early: first, second and third of 8 racers is 8 × 7 × 6 = 336.',
          'Look back: one number for each place, each one less than the last.'] }
      ] },
    { set: { items: [{ gen: 'g-orders', n: 1 }, { gen: 'g-podium', n: 1 }], order: 'listed' } },
    { title: 'Counting groups',
      show: [
        { kind: 'prose', text: [
          'Swap two of the ones picked: if nothing changes, the order does not matter. A crew of 3 from 8 workers, all on one job, is the same crew whichever is picked first. But 3 of 8 workers for 3 different jobs is not: swapping two gives each a different job, so there the order matters.',
          'Count the orders as before, then divide by the orders of the ones chosen: 8 × 7 × 6 = 336 orders, and each crew of 3 turns up 3 × 2 × 1 = 6 times among them, so 336 ÷ 6 = 56 crews. School calls it “8 choose 3”, a combination.',
          'Look back: fewer groups than orders.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“First, second and third place among 8 racers: 56 ways.”',
          'The places differ, so the order matters: 8 × 7 × 6 = 336.'] }
      ] },
    { set: { items: [{ gen: 'g-choose', n: 2 }], order: 'listed' } },
    { set: { items: [[{ gen: 'g-podium', n: 1 }, { gen: 'g-choose', n: 1 }], { gen: 'g-orders', n: 1 }, { gen: 'g-prime-check', n: 1 }, { gen: 'g-inch-fraction', n: 1 }],
      order: 'shuffle', mix: { from: ['l16', 'l17', 'l18'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-prime-check', n: 1 }, { gen: 'g-inch-fraction', n: 1 }, { gen: 'g-orders', n: 1 }, { gen: 'g-podium', n: 1 }, { gen: 'g-choose', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});
