// Math, lesson 13 "Counting ways and chances": outfits and a bike lock's codes (multiply the choices), "at least once" by counting the people who
// miss every time, and a test result counted out in 1,000 people (docs/research/math.md, M10: chances as counts of people, never the probability
// formula; M8: data and chance).
// The rules, the same in every question:
// - One of each: multiply the choices.
// - Chances: picture 1,000 people and follow them. "At least once" is everyone but those who miss every time.
// - A test result: count those who have it and test positive, and those who do not have it but test positive anyway; the chance a positive
//   has it is the first count ÷ all the positives.
// The outfits and the tickets have no rough answer: the head finds them exactly, by multiplying small numbers or following the counts.
(() => {
  const { num, problem, keys } = MATH;

  /* ---------- outfits: multiply the choices ---------- */
  const outfits = problem({
    id: 'g-outfits', strand: 'chance', kind: 'count-ways',
    params: { sh: [3, 7, 1], pa: [2, 5, 1], so: [2, 4, 1] },
    make: pick => {
      const sh = pick('sh'), pa = pick('pa'), so = pick('so');
      return { ans: sh * pa * so, added: sh + pa + so, two: sh * pa };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Packing for a work trip', rows: [{ id: 'sh', cells: ['Shirts', '{sh}'] }, { id: 'pa', cells: ['Pairs of pants', '{pa}'] }, { id: 'so', cells: ['Pairs of shoes', '{so}'] },
      { id: 'socks', cells: ['Socks', '7 pairs, all black'] }], notes: ['An outfit is a shirt, a pair of pants and a pair of shoes.'] }],
    given: 'Asked: how many different outfits. Given: {sh} shirts, {pa} pairs of pants, {so} pairs of shoes. The socks are all alike, so they make no difference.',
    setup: 'One of each: every shirt goes with every pair of pants, and each of those with every pair of shoes. Multiply the choices.',
    exact: { working: '{sh} × {pa} = {two} shirt-and-pants pairs, × {so} = {ans} outfits. Look back: more than the {added} pieces you packed.',
      prompt: 'How many different outfits can you make?', frame: '__', unit: 'outfits', tol: { abs: 0.01 },
      traps: [{ slip: 'added-choices', value: 'added', then: 'That counts the pieces. Each shirt goes with every pair of pants and every pair of shoes: multiply.' }] },
    reason: 'One of each: {sh} × {pa} × {so} = {ans} outfits.'
  });

  /* ---------- a bike lock: how long to try every code ---------- */
  const lock = problem({
    id: 'g-lock', strand: 'chance', kind: 'count-ways',
    params: { w: [3, 5, 1], s: [2, 6, 1] },
    make: pick => {
      const w = pick('w'), s = pick('s'), codes = Math.pow(10, w), secs = codes * s, ans = secs / 3600, r0 = secs / 4000;
      return { codes: num(codes), tens: Array.from({ length: w }, () => '10').join(' × '), secs: num(secs), r0: num(r0, 2), rough: r0 * 1.1, roughText: num(r0 * 1.1, 2),
        ans, ansText: num(ans, 2), added: 10 * w * s / 3600, keys: keys([10, 'pow', w, '*', s, '/', 3600, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Bike lock', rows: [{ id: 'wheels', cells: ['{w} wheels, each 0 to 9'] }, { id: 'cable', cells: ['Steel cable, 5 ft'] }, { id: 'price', cells: ['$24.99'] }],
      notes: ['A thief tries one code every {s} seconds.'] }],
    given: 'Asked: the hours to try every code. Given: {w} wheels of 10 digits, one try every {s} seconds. The cable and the price do not matter.',
    rough: { working: '{tens} = {codes} codes, × {s} seconds = {secs} seconds. An hour is 3,600 seconds, about 4,000: {secs} ÷ 4,000 = {r0}, and a bit more because 3,600 is less: about {roughText} hours.',
      prompt: 'About how many hours would it take to try every code?', frame: '__', unit: 'hours', places: 2 },
    setup: 'One digit on each wheel: multiply the choices, 10 for each wheel. Then the seconds, then hours: 3,600 seconds in an hour.',
    exact: { working: 'On the calculator: {keys} shows {ansText} hours. Look back: near the rough {roughText}.',
      prompt: 'How many hours, to two decimals?', frame: '__', unit: 'hours', places: 2, tol: { abs: 0.01 }, calc: ['pow'],
      traps: [{ slip: 'added-choices', value: 'added', then: 'That adds 10 for each wheel. Each wheel’s 10 digits go with every other wheel’s: 10 × 10 × …' }] },
    reason: '{tens} = {codes} codes; × {s} seconds ÷ 3,600 = {ansText} hours.'
  });

  /* ---------- at least once: count those who miss every time ---------- */
  const tickets = problem({
    id: 'g-at-least', strand: 'chance', kind: 'at-least-one',
    params: { k: [3, 8, 1], n: [2, 5, 1] },
    make: pick => {
      const k = pick('k'), n = pick('n'), q = (k - 1) / k, chain = [1000], lose0 = 1000 * Math.pow(q, n);
      for(let j = 0; j < n; j++) chain.push(chain[j] * q);
      const lose = Math.round(lose0);
      return { k, k1: k - 1, n, chain: chain.slice(1).map(x => num(x, 1)).join(', then '), loseExact: num(lose0, 1), ans: lose0, lose, win: 1000 - lose, winExact: 1000 - lose0,
        added: n * 1000 / k, keys: keys([k - 1, '/', k, 'pow', n, '*', 1000, '=']), keysGives: lose0 };
    },
    blocks: [{ kind: 'document', form: 'tag', title: 'Scratch ticket, $2', rows: [{ id: 'odds', cells: ['Overall odds of winning a prize: 1 in {k}'] }, { id: 'top', cells: ['Top prize $25,000'] }],
      notes: ['You buy {n} tickets. Each ticket wins or loses on its own.'] }],
    given: 'Asked: of 1,000 people who each buy {n} tickets, how many win nothing, then how many win at least once. Given: 1 in {k} tickets wins. The top prize does not matter.',
    setup: 'At least once: count the opposite, the people who lose on every ticket, then take them from 1,000. On each ticket, {k1} in {k} lose.',
    exact: { working: 'Of 1,000, {k1} in {k} lose each ticket: {chain}. On the calculator: {keys} shows {loseExact}. Look back: fewer lose them all than lose any one ticket.',
      prompt: 'Of 1,000 people who each buy {n} tickets, about how many win nothing at all?', frame: '__', unit: 'people', tol: { abs: 1 }, calc: ['pow'] },
    then: [{ id: 'win', does: 'Take them from 1,000.', working: '1,000 − {lose} = {win} win at least once.',
      ask: { id: 'win', kind: 'number', prompt: 'And how many win at least once?', frame: '__', unit: 'people', answer: 'winExact', tol: { abs: 1 },
        traps: [{ slip: 'added-chances', value: 'added', then: 'That adds 1 in {k} for each ticket, which counts twice the people who win on two. Count those who lose them all, and take them from 1,000.' }] } }],
    figure: { kind: 'figure', type: 'people', data: { caption: 'Of 1,000 people who each buy {n} tickets', rows: [{ label: 'Win nothing', count: '{lose}' }, { label: 'Win at least once', count: '{win}' }] } },
    reason: 'About {lose} of 1,000 lose every ticket ({k1} in {k}, {n} times over), so {win} win at least once.'
  });

  /* ---------- a test result, counted out in 1,000 people ---------- */
  const test = problem({
    id: 'g-test', strand: 'chance', kind: 'test-result',
    params: { b: [20, 100, 20], s: [75, 95, 5], f: [5, 15, 5] },
    make: pick => {
      // every count is a whole number of people (b a multiple of 20, s and f of 5), so counting and the chances agree exactly
      const b = pick('b'), s = pick('s'), f = pick('f'), tp = b * s / 100, healthy = 1000 - b, fpR = healthy * f / 100, pos = tp + fpR, posR = Math.round(pos / 10) * 10;
      const ans = tp / pos * 100, fp10 = 10 * f, posF = Math.round((tp + fp10) / 10) * 10, rough = Math.round(tp / posF * 100);
      return { most: fpR > tp ? ': most of them' : '', tp, healthy, fpR, pos, fp10, posF, rough, ans, ansText: num(ans, 1), ofAll: tp / 10, keys: keys([tp, '/', pos, '*', 100, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Screening test: what the numbers mean', rows: [{ id: 'have', cells: ['People your age who have it', '{b} in 1,000'] },
      { id: 'sens', cells: ['If you have it, the test is positive', '{s}% of the time'] }, { id: 'false', cells: ['If you do not, it is positive anyway', '{f}% of the time'] },
      { id: 'when', cells: ['Results', 'in 3 days'] }] }],
    first: { does: 'Count it out in 1,000 people.', working: '{b} in 1,000 have it, and {s}% of them test positive: {tp}. The other {healthy} do not, and {f}% of them test positive anyway: {fpR}. So {tp} + {fpR} = {pos} test positive.',
      ask: { id: 'pos', kind: 'number', prompt: 'Of 1,000 people like you who take the test, how many test positive?', frame: '__', unit: 'people', answer: 'pos', tol: { abs: 1 } } },
    given: 'Asked: if you test positive, the chance you have it. Given: how many have it, and how often the test is positive with it and without it. The days for results do not matter.',
    rough: { working: '{s}% of the {b} who have it test positive: {tp}. About {f}% of the rest, about {fp10}, test positive without it. {tp} of about {posF} positives is about {rough}%.', prompt: 'You test positive. About what is the chance you have it, as a percent?', frame: '__%' },
    exact: { working: 'On the calculator: {keys} shows {ansText}%. Look back: below {s}%, because {fpR} of the {pos} positives do not have it{most}.',
      prompt: 'What is the chance exactly, to one decimal?', frame: '__%', places: 1, tol: { abs: 0.2 },
      traps: [{ slip: 'confused-chances', value: 's', then: '{s}% is how often a person who has it tests positive. Among the positives, only {tp} of {pos} have it.' },
        { slip: 'wrong-whole', value: 'ofAll', then: 'That is {tp} of all 1,000 people. You tested positive, so count among the {pos} positives.' }] },
    figure: { kind: 'figure', type: 'people', data: { caption: 'Of 1,000 people who take the test', rows: [{ label: 'Have it', count: '{b}' }, { label: 'Have it and test positive', count: '{tp}' },
      { label: 'Do not have it but test positive', count: '{fpR}' }] } },
    reason: 'Of 1,000 people, {tp} have it and test positive and {fpR} test positive without it: {tp} ÷ {pos} = {ansText}%.'
  });

  FC.gen('math', [outfits, lock, tickets, test]);
  // the worked problem: 20 in 1,000 have it, the test finds 80% of them, and is positive anyway for 5% of the rest
  FC.items('math', [MATH.worked(test, 'w-test', { b: 20, s: 80, f: 5 })]);
})();
