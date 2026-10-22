// Math's refresher unit (lessons 16 to 19, docs/subjects/math/plan.md Unit 6): every question's numbers checked against the school fact it
// brings back, worked independently here; the buttons its working prints pressed on the app's calculator; its steps in the refresher's order;
// and the unit's shape (reminders in draft, a topic per card that returns in the review). No browser.
// Run: node tests/math-refresh-pure.mjs
import { loadApp } from './load-app.mjs';

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const app = await loadApp({ fixture: true });
const { itemFromGen, calcPress, CALC_START, numberAnswers, scoreNumber, FC } = app;
const math = FC.get('math');
const seeds = Array.from({ length: 400 }, (_, k) => k + 1);
const bundle = id => seeds.map(seed => itemFromGen(math.gens[id], seed));
const ask = (item, id) => item.asks.find(a => a.id === id);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const rad = d => d * Math.PI / 180;
const fact = n => n <= 1 ? 1 : n * fact(n - 1);

const REFRESH = {
  l16: ['g-trim', 'g-trunk', 'g-deck-diagonal', 'g-345', 'g-third-angle', 'g-straight-line', 'g-trig-rise', 'g-trig-height'],
  l17: ['g-shadow', 'g-plan-scale', 'g-grade', 'g-drain-drop', 'g-post-hole', 'g-gravel-cone', 'g-to-cm', 'g-gallons'],
  l18: ['g-order-quote', 'g-order-power', 'g-sci-read', 'g-sci-divide', 'g-sqrt-patio', 'g-brace', 'g-decibel', 'g-quake'],
  l19: ['g-prime-check', 'g-inch-fraction', 'g-orders', 'g-podium', 'g-choose']
};
const ALL = Object.values(REFRESH).flat();

/* ---------- the unit: four reminders, live after their reviews, in their own unit ---------- */
{
  const unit = math.meta.units.find(u => u.id === 'refresh');
  check(!!unit && JSON.stringify(unit.parts) === JSON.stringify(['16', '17', '18', '19']), 'the refresher unit holds parts 16 to 19');
  for (const id of Object.keys(REFRESH)) {
    const l = math.lessons[id];
    check(!!l && l.status === 'live' && l.rev === 1, `${id}: live at revision 1, after its reviews`);
    check(/reminder/.test(l.history[0].change), `${id}: its record says it is a reminder`);
  }
  // the real-world test is the main method's: no refresher in it
  const test = JSON.stringify(math.lessons.l15.check.items);
  check(ALL.every(id => !test.includes(`"${id}"`)), 'no refresher question is in the real-world test');
  // every card's topic returns in the review: each refresher strand is a topic of the subject with a question that makes fresh numbers
  const strands = new Set(ALL.map(id => math.gens[id].strand));
  check(strands.size === 15, `fifteen cards, fifteen topics (${strands.size})`);
  check([...strands].every(s => math.meta.strands.some(t => t.id === s)), 'every card is a topic the review schedules');
  // every card is asked in its lesson and in its check, or in the check of its lesson by one of its questions
  for (const [lesson, ids] of Object.entries(REFRESH)) {
    const l = math.lessons[lesson], inCheck = new Set(l.check.items.map(r => math.gens[r.gen].strand));
    const lessonStrands = new Set(ids.map(id => math.gens[id].strand));
    check([...lessonStrands].every(s => inCheck.has(s)), `${lesson}: its check asks every card`);
  }
}

/* ---------- every question: the steps of a reminder, the buttons it prints, a wild answer named ---------- */
{
  const FACE = { '×': '*', '÷': '/', '−': '-', 'xʸ': 'pow', '√': 'sqrt' };
  const WORDS = ['+', 'M+', 'MR', '=', 'sin', 'cos', 'tan'];
  const press = text => text.split(' ').flatMap(t => FACE[t] ? [FACE[t]] : WORDS.includes(t) ? [t] : t.split('')).reduce(calcPress, CALC_START);
  for (const id of ALL) {
    const items = bundle(id), first = items[0];
    check(!first.asks.some(a => a.estimate), `${id}: a reminder has no rough answer`);
    check(items.every(i => ask(i, 'exact').wild === 'wild'), `${id}: a wild answer is named`);
    const order = first.steps.map(s => s.id);
    check(order[0] === 'given' && order[1] === 'fact' && order.includes('exact') && order.indexOf('exact') > order.indexOf('fact'), `${id}: the steps are given, the fact, then the answer (${order.join(', ')})`);
    check(items.every(i => /Look back/.test(i.steps.find(s => s.id === 'exact').working)), `${id}: the working ends in a look-back`);
    const bad = items.filter(i => i.values.keys !== undefined && !near(Number(press(i.values.keys).shown), i.values.keysGives, 1e-9)).map(i => `${i.seed}: ${i.values.keys}`);
    check(bad.length === 0, `${id}: the buttons its working prints give its number on the calculator (${bad.slice(0, 2).join('; ')})`);
    for (const [name, def] of Object.entries(math.gens[id].params)) check(new Set(items.map(i => i.values[name])).size > 1, `${id}.${name}: draws one value only`);
    check(items.every(i => scoreNumber(math, ask(i, 'exact'), numberAnswers(i, ask(i, 'exact')), i) === 'ok'), `${id}: its own answer is scored right`);
  }
  // the angle buttons only where an angle is worked, and they are there where one is
  for (const id of ['g-trig-rise', 'g-trig-height']) check((ask(bundle(id)[0], 'exact').calc || []).includes('trig'), `${id}: the calculator has sin, cos and tan`);
  check(ALL.filter(id => !['g-trig-rise', 'g-trig-height'].includes(id)).every(id => !(ask(bundle(id)[0], 'exact').calc || []).includes('trig')), 'no other question shows the angle buttons');
}

/* ---------- the facts, worked here independently ---------- */
{
  const all = (id, ok, msg) => check(bundle(id).every(i => ok(i.values, i)), `${id}: ${msg}`);
  const a = (i, id = 'exact') => numberAnswers(i, ask(i, id));
  // circles: around = π × across, π taken as 3.14 and a true π also scored right
  all('g-trim', v => near(v.ans, 3.14 * v.d), 'around is 3.14 × across');
  check(bundle('g-trim').every(i => scoreNumber(math, ask(i, 'exact'), [Math.round(Math.PI * i.values.d * 100) / 100], i) === 'ok'), 'g-trim: an answer with a truer π is right too');
  all('g-trunk', v => near(v.ans * 3.14, v.C), 'across × 3.14 gives the tape around');
  // right triangles: the diagonal by the square rule; 3-4-5 times k, and the verdict follows the tape
  all('g-deck-diagonal', v => near(v.ans ** 2, v.a ** 2 + v.b ** 2), 'the diagonal squared is the sides squared, added');
  all('g-345', v => near(v.ans ** 2, v.one ** 2 + v.two ** 2) && v.ans === 5 * v.k && (v.verdict === 'square') === /exactly/.test(v.read), '3-4-5 times k, and square only when the tape reads it exactly');
  const verdicts = bundle('g-345').map(i => i.values.verdict);
  check(verdicts.filter(v => v === 'square').length > 120 && verdicts.filter(v => v === 'not-square').length > 120, 'g-345: square and not square both come up often');
  // angles
  all('g-third-angle', v => v.A + v.B + v.ans === 180 && v.ans > 0, 'the three angles make 180');
  all('g-straight-line', v => v.A + v.ans === 180, 'the two angles make 180');
  // a length from an angle
  all('g-trig-rise', v => near(v.ans, v.R * Math.tan(rad(v.A))), 'rise = run × tan');
  all('g-trig-height', v => near(v.ans, v.L * Math.sin(rad(v.A))) && v.ans < v.L, 'height = slant × sin, and shorter than the slant');
  // scale and slope
  all('g-shadow', v => near(v.ans / v.S, v.h / v.s), 'tall ÷ shadow is the same for both');
  all('g-plan-scale', v => near(v.ans * v.k, v.m), 'feet × the scale gives the inches on the plan');
  all('g-grade', v => near(v.ans, v.R / v.L * 100), 'grade is rise ÷ run × 100');
  all('g-drain-drop', v => near(v.ans, v.L * (Number(v.size.replace('½', '.5')) <= 2.5 ? 0.25 : 0.125)), 'the fall per foot is the code’s for that pipe');
  // round volumes and units
  all('g-post-hole', v => near(v.ans, 3.14 * (v.d / 24) ** 2 * v.h), 'π r² h with the radius in feet');
  all('g-gravel-cone', v => near(v.ans * 3, 3.14 * (v.D / 2) ** 2 * v.h), 'a cone is a third of the cylinder');
  all('g-to-cm', v => near(v.ans, v.w * 2.54), 'an inch is 2.54 cm');
  all('g-gallons', v => near(v.ans, v.L * v.W * v.D * 7.48), '7.48 gallons a cubic foot');
  // order, powers and roots
  all('g-order-quote', v => near(v.ans, v.fee + v.rate * v.h) && !near(v.left, v.ans), 'times before plus, and left to right differs');
  all('g-order-power', v => near(v.ans, v.I ** 2 * v.R), 'the current squared, times the resistance');
  all('g-sci-read', v => near(v.ans, v.m * 10 ** v.k), 'the point moved k places');
  all('g-sci-divide', v => near(v.ans, v.a * 10 ** v.p / (v.b * 10 ** v.q)) && Number.isInteger(v.ans), 'the drive ÷ the photo, a whole number of photos');
  all('g-sqrt-patio', v => near(v.ans ** 2, v.A) && !Number.isInteger(v.ans) && v.lo < v.ans && v.ans < v.hi, 'the side squared is the area, never a whole number, between the two squares named');
  all('g-brace', v => near(v.ans, v.s * Math.SQRT2), 'the diagonal is side × √2');
  // log scales: a difference of d is 10 to the d (decibels, d ÷ 10)
  all('g-decibel', v => near(v.ans, 10 ** ((v.high - v.low) / 10)), '10 to the difference over 10');
  all('g-quake', v => near(v.ans, 10 ** (v.high - v.low), 1e-6), '10 to the difference');
  // primes, fractions, counting
  const isPrime = n => n > 1 && Array.from({ length: Math.floor(Math.sqrt(n)) - 1 }, (_, k) => k + 2).every(p => n % p);
  all('g-prime-check', v => (v.verdict === 'prime') === isPrime(v.N) && v.N % v.ans === 0 && v.ans > 1 && Array.from({ length: v.ans - 2 }, (_, k) => k + 2).every(p => v.N % p), 'the verdict is the truth, and the answer is the smallest divisor above 1');
  check(bundle('g-prime-check').every(i => i.values.N % 2 && i.values.N % 3 && i.values.N % 5), 'g-prime-check: no number the 2, 3 or 5 tests settle');
  const gcd = (x, y) => y ? gcd(y, x % y) : x;
  all('g-inch-fraction', v => gcd(v.p, v.q) === 1 && near(v.p / v.q, v.a / v.d) && v.a % 4 === 0, 'lowest terms of the same length, halved at least twice');
  all('g-orders', v => v.ans === fact(v.n), 'n!');
  all('g-podium', v => v.ans === fact(v.n) / fact(v.n - v.k), 'n × (n − 1) × … for k places');
  all('g-choose', v => v.ans === fact(v.n) / (fact(v.k) * fact(v.n - v.k)), 'n choose k');
  check(bundle('g-podium').every(i => ask(i, 'order').right === 'matters') && bundle('g-choose').every(i => ask(i, 'order').right === 'free'), 'the order matters for places, not for groups');
  // the choice is read from the situation: both forms share their titles and stories, so no title or story names the answer
  const look = id => new Set(bundle(id).map(i => `${i.blocks[0].title}|${i.values.things}`));
  check(JSON.stringify([...look('g-podium')].sort()) === JSON.stringify([...look('g-choose')].sort()), 'g-podium, g-choose: the same titles and stories in both forms');
}

/* ---------- no answer by pattern: no number answer of a refresher on more than a fifth of 2,000 seeds ---------- */
{
  const many = Array.from({ length: 2000 }, (_, k) => k + 1);
  for (const id of ALL) {
    const counts = {};
    many.forEach(seed => { const i = itemFromGen(math.gens[id], seed); i.asks.filter(q => q.kind === 'number').forEach(q => {
      const key = `${q.id} ${numberAnswers(i, q).map(v => Math.round(v * 100) / 100).join(' ')}`; counts[key] = (counts[key] || 0) + 1; }); });
    const [top, n] = Object.entries(counts).sort((x, y) => y[1] - x[1])[0];
    check(n <= 0.2 * many.length, `${id}: the answer "${top}" comes on ${n} of 2,000 seeds, more than a fifth`);
  }
}

if (failures.length) {
  console.error(`${failures.length} of ${checks} refresher checks failed:`);
  failures.forEach(f => console.error(`  - ${f}`));
  process.exit(1);
}
console.log(`✓ ${checks} refresher checks passed`);
