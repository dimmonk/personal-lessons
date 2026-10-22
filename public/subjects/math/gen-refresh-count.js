// Math, lesson 19 "Primes and counting formulas", a refresher (Unit 6, docs/subjects/math/plan.md; research M25: 4.OA.B.4, HSS-CP.B.9; M32).
// The facts, the same in every question:
// - A prime is a whole number above 1 that only 1 and itself divide. The prime check: try dividing by the primes 2, 3, 5, 7, 11, 13 … up to the
//   number's square root; if none divides it, it is prime (a factor bigger than the root comes paired with one smaller).
// - A fraction is in lowest terms when no number above 1 divides top and bottom; an inch fraction (eighths, sixteenths) halves top and bottom
//   until the top is odd.
// - Does the order matter? If it does (first, second, third; a code), count the orders: n × (n − 1) × … for the places to fill; all n in order is
//   n! (n factorial). If it does not (a crew, toppings), count the orders, then divide by the orders of the ones chosen (k!).
(() => {
  const { num, reminder, keys } = MATH;
  const fact = n => n <= 1 ? 1 : n * fact(n - 1);
  const down = (n, k) => Array.from({ length: k }, (_, i) => n - i);      // n, n − 1, … (k numbers)
  const times = list => list.join(' × ');

  /* ---------- is it prime? ---------- */
  const PRIMES = [97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151];
  const NOT = [91, 119, 133, 121, 143, 187, 209, 169, 221, 247, 289, 323];      // none divisible by 2, 3 or 5; smallest factors 7, 11, 13 and 17
  const TRY = [2, 3, 5, 7, 11, 13, 17];
  const prime = reminder({
    id: 'g-prime-check', strand: 'primes', kind: 'prime-check',
    params: { is: [0, 1, 1], at: [0, 11, 1], wi: [0, 2, 1] },
    make: pick => {
      const isPrime = pick('is') === 1, N = (isPrime ? PRIMES : NOT)[pick('at')], root = Math.sqrt(N), upTo = TRY.filter(p => p <= root);
      const first = TRY.find(p => N % p === 0) || N;
      const tries = upTo.map(p => `${N} ÷ ${p} = ${num(N / p, 2)}`).join('; ');
      const what = ['Parts in a batch', 'Teeth on a gear', 'Tiles along a wall'][pick('wi')];
      return { N, rootText: num(root, 2), last: upTo[upTo.length - 1], tries, verdict: isPrime ? 'prime' : 'composite', ans: first, what,
        found: isPrime ? `None of the primes up to √${N} (${upTo.join(', ')}) divides ${N}, so it is prime: only ${N} itself (above 1) divides it.` : `${first} divides it: ${N} = ${first} × ${N / first}.` };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Can it be split evenly?', rows: [{ id: 'n', cells: ['{what}', '{N}'] }] }],
    given: 'Asked: whether {N} is prime, then the smallest number above 1 that divides it. Given: {N}.',
    fact: 'A prime is a whole number above 1 that only 1 and itself divide. To check, try the primes 2, 3, 5, 7, 11, 13 … up to the square root; a factor bigger than the root comes with a smaller partner.',
    asks0: [{ id: 'prime', kind: 'choose', prompt: 'Is {N} prime?', from: 'prime', right: '{verdict}', shuffle: true,
      then: { prime: '{found}', composite: '{found}' } }],
    decide: { does: 'Try the primes up to the square root.', working: '√{N} is {rootText}, so try up to {last}: {tries}. {found}' },
    exact: { does: 'Give the smallest, then look back.', working: '{found} Look back: every prime up to √{N} was tried.',
      prompt: 'What is the smallest number above 1 that divides {N}?', tol: { abs: 0.01 },
      traps: [{ slip: 'gave-one', value: 1, then: '1 divides every number. The question is the smallest above 1.' }] },
    reason: '√{N} is {rootText}; trying 2, 3, 5 … up to {last}: {found}'
  });

  /* ---------- an inch fraction in lowest terms ---------- */
  const inch = reminder({
    id: 'g-inch-fraction', strand: 'primes', kind: 'lowest-terms',
    params: { qi: [0, 2, 1], odd: [1, 15, 2], f: [4, 8] },
    make: pick => {
      // the answer first: an odd top over 4, 8 or 16; then top and bottom times 4 or 8 (never past 64ths), so it halves at least twice
      const q = [4, 8, 16][pick('qi')], p = pick('odd') % q, f = q === 16 ? 4 : pick('f'), a = p * f, d = q * f, j = Math.log2(f);
      return { a, d, p, q, f, ha: a / 2, hd: d / 2, halves: Array.from({ length: j }, (_, i) => `${a / Math.pow(2, i + 1)}/${d / Math.pow(2, i + 1)}`).join(', then ') };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Cut list', rows: [{ id: 'cut', cells: ['Rip the board to', '{a}/{d} inch thick'] }] }],
    given: 'Asked: {a}/{d} inch in lowest terms, as a tape marks it. Given: {a}/{d}.',
    fact: 'A fraction is in lowest terms when no number above 1 divides both top and bottom. Inch fractions only ever share 2s: halve both until the top is odd.',
    exact: { does: 'Halve both, then look back.', working: 'Halve both: {halves}. Look back: {p} is odd, so nothing more divides both.',
      prompt: 'What is {a}/{d} in lowest terms?', frame: '__/__', unit: 'inch', answer: ['p', 'q'], tol: { abs: 0.01 },
      traps: [{ slip: 'halved-once', value: ['ha', 'hd'], then: 'That halves once. The top is still even: halve again until it is odd.' }] },
    reason: '{a}/{d} halved until the top is odd is {p}/{q}: the same length, the same mark on the tape.'
  });

  /* ---------- every order: n! ---------- */
  const JOBS = [['jobs on today’s list', 'do them'], ['wires to land on the terminal block, one to a screw', 'land them'], ['trucks to load at the dock, one at a time', 'load them']];
  const orders = reminder({
    id: 'g-orders', strand: 'orders', kind: 'all-orders',
    params: { n: [4, 9, 1], what: [0, 2, 1] },
    make: pick => {
      const n = pick('n'), [things, doIt] = JOBS[pick('what')], ans = fact(n);
      return { n, things, doIt, ans, ansText: num(ans), chain: times(down(n, n)), square: n * n, added: n * (n + 1) / 2 };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'How many ways?', rows: [{ id: 'n', cells: ['{n} {things}'] }] }],
    given: 'Asked: how many different orders you could {doIt} in. Given: {n} of them.',
    fact: 'Every order of all {n}: any of {n} first, any of the rest second, and so on, one fewer each time: {n}! ({n} factorial).',
    exact: { working: '{n}! = {chain} = {ansText}. On the calculator, multiply them in turn. Look back: each place has one fewer to choose from.',
      prompt: 'How many different orders could you {doIt} in?', unit: 'orders', tol: { abs: 0.01 },
      traps: [{ slip: 'added-choices', value: 'added', then: 'That adds {n} + … + 1. The choices multiply: {chain}.' },
        { slip: 'repeats-allowed', value: 'square', then: 'That is {n} × {n}. Each place has one fewer to choose from: {chain}.' }] },
    reason: '{n} first choices, then {n} − 1 … : {n}! = {chain} = {ansText}.'
  });

  /* ---------- picking k of n: the same stories, where the order matters or does not ---------- */
  // Each story comes in two forms that read alike and differ only in whether the ones picked do different things (the order matters) or
  // the same thing (it does not), so the choice is made from the situation, never from a title or a word (review of 2026-10-22).
  const STORIES = [
    { things: 'bidders for the work', matters: 'one bidder for each of {k} different jobs', free: '{k} bidders to do one job together',
      who: 'bidders', yes: 'each bidder gets a different job, so swapping two of them is a different result', no: 'they all do the same job, so swapping two of them changes nothing' },
    { things: 'racers in the heat', matters: 'the racers in places 1 to {k}, in order', free: 'the {k} racers who go through to the final',
      who: 'racers', yes: 'each place is different, so swapping two racers is a different result', no: 'going through is the same for all {k}, so swapping two changes nothing' },
    { things: 'paint colors on the chart', matters: 'one color for each of {k} different rooms', free: 'a sample pack of {k} colors',
      who: 'colors', yes: 'each room gets its own color, so swapping two colors is a different result', no: 'a pack is the same pack in any order, so swapping two changes nothing' },
    { things: 'toppings on the menu', matters: 'one topping on each of {k} different pizzas', free: '{k} toppings together on one pizza',
      who: 'toppings', yes: 'each pizza gets its own topping, so swapping two is a different result', no: 'one pizza with the same toppings is the same pizza, so swapping two changes nothing' }
  ];
  const fill = (text, k) => text.replace(/\{k\}/g, String(k));
  const picking = matters => reminder({
    id: matters ? 'g-podium' : 'g-choose', strand: matters ? 'orders' : 'choices', kind: matters ? 'first-places' : 'choose-group',
    params: { n: [6, 12, 1], k: [2, 4, 1], st: [0, 3, 1] },
    make: pick => {
      const n = pick('n'), k = pick('k'), story = STORIES[pick('st')], list = down(n, k), ord = list.reduce((a, b) => a * b, 1), group = ord / fact(k);
      const ans = matters ? ord : group;
      return { n, k, things: story.things, want: fill(matters ? story.matters : story.free, k), why: fill(matters ? story.yes : story.no, k), right: matters ? 'matters' : 'free',
        chain: times(list), kChain: times(down(k, k)), kf: fact(k), ord, ordText: num(ord), group, ans, ansText: num(ans), repeats: Math.pow(n, k), byK: n * k,
        keys: keys(list.flatMap((x, i) => i ? ['*', x] : [x]).concat(matters ? [] : down(k, k).flatMap(x => ['/', x]), '=')), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'How many ways?', rows: [{ id: 'n', cells: ['{n} {things}'] }, { id: 'k', cells: ['You want', '{want}'] }] }],
    given: 'Asked: how many different ways to pick them. Given: {n} to pick from, {k} picked, none twice.',
    fact: 'Does the order matter? Check whether swapping two of the ones picked gives a different result. If it does, count the orders, {n} × ({n} − 1) × … for {k}; if not, divide that by the orders of the {k} picked, {k}! = {kChain}.',
    asks0: [{ id: 'order', kind: 'choose', prompt: 'Does the order matter here?', from: 'order', right: '{right}', shuffle: true,
      then: { matters: 'Here {why}: the order does not matter.', free: 'Here {why}: the order matters.' }, slips: matters ? { free: 'order-missed' } : { matters: 'order-counted' } }],
    decide: { does: 'Decide whether the order matters.', working: matters ? 'Here {why}: the order matters.' : 'Here {why}: the order does not matter.' },
    exact: { working: matters ? '{n} for the first, one fewer for each next: {chain}. On the calculator: {keys} shows {ansText}. Look back: {k} numbers multiplied, one for each place.'
      : '{chain} = {ordText} orders; each group of {k} came up {kf} times ({kChain}), so {ordText} ÷ {kf} = {ansText}. On the calculator: {keys} shows {ansText}. Look back: fewer groups than orders.',
      prompt: 'How many different ways?', unit: 'ways', tol: { abs: 0.01 },
      traps: matters ? [{ slip: 'repeats-allowed', value: 'repeats', then: 'That lets one be picked twice. Each place has one fewer left: {chain}.' },
        { slip: 'divided-orders', value: 'group', then: 'That divides out the orders, as if swapping two changed nothing. Here {why}: keep them, {chain}.' }]
        : [{ slip: 'order-counted', value: 'ord', then: 'That counts every order of the same group. Here {why}: divide by the {kf} orders of {k}, {ordText} ÷ {kf}.' },
          { slip: 'times-chosen', value: 'byK', then: 'That is {n} × {k}. Count the orders, {chain}, then divide by {kChain}.' }] },
    reason: matters ? 'Here {why}, so count the orders: {chain} = {ansText} ways.' : 'Here {why}, so {chain} ÷ ({kChain}) = {ansText} ways.'
  });
  const podium = picking(true), team = picking(false);

  FC.gen('math', [prime, inch, orders, podium, team]);
})();
