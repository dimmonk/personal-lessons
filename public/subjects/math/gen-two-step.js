// Math, lesson 15 "Two steps, mixed, and the test": problems whose answer needs a number found first (docs/research/math.md, M1: the hard part
// for adults is the translation, where "numbers needed for calculations may need to be derived"; M6: the unknown first, then what it needs).
// The rule: say what is asked, then what you need first to get it; find that, then the answer, with a rough answer before the exact one.
// The first step is its own question, so a group of questions can show it done (help that leaves the last two steps).
(() => {
  const { usd, dollars, num, problem, keys } = MATH;
  const cents = x => Math.round(x * 100);

  /* ---------- paint: the area, the cans, then the cost ---------- */
  const paint = problem({
    id: 'g-paint-cost', strand: 'two-step', kind: 'two-step',
    params: { l: [6, 22, 0.5], w: [6, 14, 0.5], h: [8, 9], cov: [350, 400], price: [29, 45, 1], t: [5, 8, 1], c: [2, 4, 1] },
    make: pick => {
      const h = pick('h'), cov = pick('cov'), frac = x => x - Math.floor(x);
      const needOf = (l, w) => (2 * (l + w) * h - 21) * 2 / cov, aroundOf = (l, w) => Math.round(2 * (l + w) / 10) * 10, roughOf = (l, w) => (aroundOf(l, w) * h - 20) * 2 / cov;
      // less than half a can over, so rounding to the nearest is not enough; the rough count of cans is the exact one, so the rough cost is fair;
      // and the cans are the number drawn (2, 3 or 4), from a small room to a big one, with the sizes tried from the ones drawn, half a foot at a time
      const wrap = (v0, min, max, k) => min + ((v0 - min) / 0.5 + k) % ((max - min) / 0.5 + 1) * 0.5;
      const tries = Array.from({ length: 17 }, (_, j) => Array.from({ length: 33 }, (_, k) => [wrap(pick('l'), 6, 22, k), wrap(pick('w'), 6, 14, j)])).flat();
      const fits = ([l, w]) => frac(needOf(l, w)) > 0.05 && frac(needOf(l, w)) < 0.45 && Math.ceil(roughOf(l, w)) === Math.ceil(needOf(l, w));
      const [l, w] = tries.find(t => fits(t) && Math.ceil(needOf(...t)) === pick('c')) || tries.find(fits);
      const need = x => needOf(x, w), aroundF = x => aroundOf(x, w), roughNeed = x => roughOf(x, w);
      const around = 2 * (l + w), area = around * h - 21, n = need(l), cans = Math.ceil(n), price = pick('price') + 0.98, m = 1 + pick('t') / 100, pr = Math.round(price);
      const ans = cans * price * m;
      return { ll: l, w, around: num(around), aroundF: aroundF(l), roughArea: num(aroundF(l) * h - 20), roughNeed: num(roughNeed(l), 1), whole: num(around * h), area: num(area), needText: num(n, 2), cans, short: cans - 1, priceText: usd(cents(price)), m, pr: dollars(pr),
        base: dollars(cans * pr), rough: Math.round(cans * pr * 1.1), roughText: dollars(Math.round(cans * pr * 1.1)), ans, ansText: usd(cents(ans)), noTax: cans * price,
        keys: keys([cans, '*', price, '*', m, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Painting a room', rows: [{ id: 'room', cells: ['Room, walls {h} ft high', '{ll} ft by {w} ft'] }, { id: 'door', cells: ['Door', '3 ft by 7 ft'] },
      { id: 'coats', cells: ['Coats', '2'] }, { id: 'can', cells: ['Paint, a gallon can, covers {cov} square feet', '{priceText}'] }, { id: 'tax', cells: ['Sales tax', '{t}%'] }] }],
    first: { does: 'Find what you need first: the cans.', working: 'Around the room: {ll} + {w} + {ll} + {w} = {around} ft, × {h} = {whole}, − 21 for the door = {area} square feet. Two coats: {area} × 2 ÷ {cov} = {needText}, so {cans} cans: always round up.',
      ask: { id: 'cans', kind: 'number', prompt: 'First: how many gallon cans do you buy?', frame: '__', unit: 'cans', answer: 'cans', tol: { abs: 0.01 },
        traps: [{ slip: 'rounded-down', value: 'short', then: 'Rounded down, the paint runs out before the second coat is done. Round up.' }] } },
    given: 'Asked: what the paint costs, with tax. Given: the room, the door, two coats, what a can covers and costs, and the tax. That needs the number of cans first.',
    rough: { working: 'Walls about {aroundF} ft around × {h} high, less about 20: {roughArea} square feet; two coats ÷ {cov} is about {roughNeed}, so {cans} cans. {cans} × about {pr} = {base}; the tax adds a bit, about a tenth: about {roughText}.', prompt: 'About how much does the paint cost, with tax?', places: 0 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'forgot-tax', value: 'noTax', then: 'That leaves out the {t}% sales tax: × {m}.' }] },
    reason: '{area} square feet, two coats, is {needText} cans, so {cans}; {cans} × {priceText} × {m} = {ansText}.'
  });

  /* ---------- a road trip: the gallons, then the cost ---------- */
  const fuel = problem({
    id: 'g-fuel', strand: 'two-step', kind: 'two-step',
    params: { D: [140, 420, 10], mpg: [22, 38, 1], c: [289, 459, 10] },
    make: pick => {
      const D = pick('D'), mpg = pick('mpg'), p = pick('c') / 100, gal = 2 * D / mpg, mr = Math.round(mpg / 5) * 5, gr = 2 * D / mr, pr = Math.round(p * 10) / 10, ans = gal * p;
      return { both: 2 * D, p, pText: usd(pick('c')), gal, galText: num(gal, 2), mr, gr: num(gr, 1), pr: usd(cents(pr)), rough: Math.round(gr * pr), roughText: dollars(Math.round(gr * pr)), ans, ansText: usd(cents(ans)),
        oneWay: D / mpg * p, keys: keys([D, '*', 2, '/', mpg, '*', p, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'table', title: 'Weekend at the lake', rows: [{ id: 'far', cells: ['Lake cabin, each way', '{D} miles'] }, { id: 'mpg', cells: ['Your car, miles a gallon', 'about {mpg}'] },
      { id: 'gas', cells: ['Gas, a gallon', '{pText}'] }, { id: 'cabin', cells: ['Cabin', '$145 a night'] }] }],
    first: { does: 'Find what you need first: the gallons.', working: 'There and back: {D} × 2 = {both} miles, ÷ {mpg} miles a gallon = {galText} gallons.',
      ask: { id: 'gallons', kind: 'number', prompt: 'First: how many gallons for the trip there and back, to two decimals?', frame: '__', unit: 'gallons', answer: 'gal', places: 2, tol: { abs: 0.01 } } },
    given: 'Asked: the gas for the trip there and back. Given: {D} miles each way, {mpg} miles a gallon, and the price a gallon. That needs the gallons first. The cabin does not matter.',
    rough: { working: 'There and back is {both} miles; ÷ about {mr} miles a gallon is about {gr} gallons; × about {pr}: about {roughText}.', prompt: 'About how much does the gas cost?', places: 0 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.03 },   // the gallons to two decimals × the price is within 3 cents of the full chain
     
      traps: [{ slip: 'one-way', value: 'oneWay', then: 'That is the gas one way. The trip is there and back: {both} miles.' }] },
    reason: '{both} miles ÷ {mpg} = {galText} gallons, × {pText} = {ansText}.'
  });

  /* ---------- dinner: the tip, then each share ---------- */
  const split = problem({
    id: 'g-tip-split', strand: 'two-step', kind: 'two-step',
    params: { food: [4800, 16800, 1], drinks: [1200, 4800, 10], t: [5, 8, 1], pct: [15, 20, 5], n: [3, 6, 1] },
    make: pick => {
      const sub = pick('food') + pick('drinks'), tax = Math.round(sub * pick('t') / 100), all = sub + tax, m = pick('pct') / 100, n = pick('n');
      const tip = sub * m / 100, total = all / 100 + tip, ans = total / n, subR = Math.round(sub / 1000) * 10, tipR = Math.round(subR * m), sumR = Math.round(all / 1000) * 10 + tipR, q = Math.round(sumR / n);
      return { foodText: usd(pick('food')), drinksText: usd(pick('drinks')), tipOnTotal: all / 100 * m, subText: usd(sub), taxText: usd(tax), allText: usd(all), m, tip, tipText: usd(cents(tip)), totalText: usd(cents(total)), allR: dollars(Math.round(all / 1000) * 10), subR: dollars(subR), tipR: dollars(tipR),
        sumR: dollars(sumR), q, near: dollars(q * n), rough: q, roughText: dollars(q), ans, ansText: usd(cents(ans)), noTip: all / 100 / n, onTotal: all / 100 * (1 + m) / n,
        keys: keys([sub / 100, '*', m, '+', all / 100, '/', n, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: 'Lantern Bistro', rows: [{ id: 'food', cells: ['Food', '{foodText}'] }, { id: 'drinks', cells: ['Drinks', '{drinksText}'] },
      { id: 'sub', cells: ['Subtotal', '{subText}'] }, { id: 'tax', cells: ['Sales tax {t}%', '{taxText}'] }, { id: 'all', cells: ['Total', '{allText}'], strong: true }],
      notes: ['You agree: a {pct}% tip on the subtotal, and the whole split evenly {n} ways.'] }],
    first: { does: 'Find what you need first: the tip.', working: '{pct}% of the subtotal: {subText} × {m} = {tipText}.',
      ask: { id: 'tip', kind: 'number', prompt: 'First: how much is the tip, to the cent?', frame: '$__', answer: 'tip', places: 2, tol: { round: 0.01 },
        traps: [{ slip: 'wrong-whole', value: 'tipOnTotal', then: 'That is {pct}% of the total with tax. The tip is on the subtotal, {subText}.' }] } },
    given: 'Asked: each person’s share of the total and the tip. Given: the receipt, a {pct}% tip on the subtotal, {n} people. That needs the tip first.',
    rough: { working: 'The tip is about {pct}% of {subR}, {tipR}; with the total, about {allR} + {tipR} = {sumR}. ÷ {n}: {n} × {q} = {near}, near {sumR}, so about {roughText} each.', prompt: 'About how much does each person pay?', places: 2 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}, and {n} × {ansText} is about {totalText}.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.01 },   // the tip rounded to the cent first is right too
     
      traps: [{ slip: 'missed-step', value: 'noTip', then: 'That splits the total without the tip. Add the {tipText} tip first.' },
        { slip: 'wrong-whole', value: 'onTotal', then: 'That puts the tip on the total with tax. The tip is on the subtotal.' }] },
    reason: '{subText} × {m} = {tipText} tip; {allText} + {tipText} = {totalText}, ÷ {n} = {ansText} each.'
  });

  FC.gen('math', [paint, fuel, split]);
  // the worked problem: a room from 12 by 10 ft (the length moved up until less than half a can is over: 14 ft), walls 8 ft high, cans covering 350 square feet at $37.98, 7% tax
  FC.items('math', [MATH.worked(paint, 'w-paint-cost', { l: 12, w: 10, h: 8, cov: 350, price: 37, t: 7, c: 3 })]);
})();
