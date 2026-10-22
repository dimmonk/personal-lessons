// Math, lesson 6 "Percents backward and stacked": the price before a discount or a tax (divide by the multiplier), one percent after another
// (multiply each in turn), and points against percent (docs/research/math.md, M7, M16: key words such as "off" mislead, so the structure decides;
// M24). The one rule is lesson 5's: 100% is the amount the percent is of. Backward, that amount is the unknown; one after another, each percent is
// of the amount at that moment. The named slips: the percent taken of the price after, the percents added, the change given in points.
(() => {
  const { usd, dollars, num, problem } = MATH;
  const cents = x => Math.round(x * 100);

  /* ---------- the price before a discount ---------- */
  const BACK = { 10: { paid: '90%', words: 'add about a tenth back, and a bit more', f: 1.1 }, 20: { paid: '80%, four fifths', words: 'add a quarter of it back', f: 1.25 },
    25: { paid: '75%, three quarters', words: 'add a third of it back', f: 4 / 3 }, 40: { paid: '60%', words: 'add two thirds of it back', f: 5 / 3 }, 50: { paid: '50%, half', words: 'double it', f: 2 } };
  const GOODS = ['Jacket', 'Lamp', 'Backpack', 'Blender'];
  const beforeOff = problem({
    id: 'g-before-off', strand: 'percent-back', kind: 'before',
    params: { o: [24, 400, 4], pi: [0, 2, 1], g: [0, 3, 1] },
    make: pick => {
      const o = pick('o'), p = [25, 40, 50][pick('pi')], paid = o * (1 - p / 100), b = BACK[p], rough = Math.round(paid * b.f);
      return { goods: GOODS[pick('g')], p, paidText: usd(cents(paid)), paidPct: b.paid, words: b.words, rough, roughText: dollars(rough), mult: String((100 - p) / 100),
        ans: o, ansText: usd(cents(o)), afterUp: Math.round(paid * (1 + p / 100) * 100) / 100, keep: 100 - p };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: 'Outlet Store', rows: [{ id: 'item', cells: ['{goods}', '{p}% off the tag'] }, { id: 'paid', cells: ['You paid', '{paidText}'], strong: true },
      { id: 'returns', cells: ['Returns', 'within 30 days'] }] }],
    given: 'Asked: the price before the sale. Given: you paid {paidText} after {p}% off. The return days do not matter.',
    rough: { working: 'You paid {paidPct} of the old price, so the old price is bigger: {words}. About {roughText}.', prompt: 'About what was the price before the sale?', places: 0,
      traps: [{ slip: 'percent-of-after', value: 'afterUp', then: 'That is nearer {p}% of what you paid added back. The {p}% was of the bigger price before: {words}.' }] },
    setup: 'Backward: the price before is the whole, 100%, and you paid {keep}% of it. So paid = before × {mult}, and before = paid ÷ {mult}.',
    exact: { working: 'On the calculator: {paidText} ÷ {mult} = {ansText}. Look back: near the rough {roughText}, and more than you paid.',
      prompt: 'What was the price before the sale, exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'percent-of-after', value: 'afterUp', then: 'That adds {p}% of what you paid. The {p}% came off the old price, which is bigger: divide by {mult}.' }] },
    figure: { kind: 'figure', type: 'bar', data: { whole: 'The price before the sale, {ansText}, is 100%', parts: [{ label: 'You paid', pct: '{keep}' }, { label: 'Came off', pct: '{p}' }] } },
    reason: 'You paid {keep}% of the old price, so the old price is {paidText} ÷ {mult} = {ansText}.'
  });

  /* ---------- the price before a sales tax ---------- */
  const SHOPS = ['shoes', 'a lamp', 'running gear', 'a gift'];
  const beforeTax = problem({
    id: 'g-before-tax', strand: 'percent-back', kind: 'before',
    params: { price: [1000, 20000, 1], t: [5, 6, 6.5, 7, 7.25, 8, 8.5], s: [0, 3, 1] },
    make: pick => {
      const t = pick('t'), total = Math.round(pick('price') * (1 + t / 100)), m = 1 + t / 100, ans = Math.round(total / m) / 100;
      const tenPct = Math.round(total / 1000), taxF = Math.round(total / 100 * t / 100), rough = Math.round(total / 100 - taxF * 0.9);
      return { what: SHOPS[pick('s')], t, totalText: usd(total), rough, roughText: dollars(rough), taxF: dollars(taxF), tenPct: dollars(tenPct), mult: String(m), total100: total / 100,
        ans, ansText: usd(cents(ans)), afterDown: Math.round(total * (1 - t / 100)) / 100, allPct: num(100 + t, 2) };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: 'Receipt, the top torn off', rows: [{ id: 'tax', cells: ['Sales tax rate', '{t}%'] }, { id: 'all', cells: ['Total paid, with tax', '{totalText}'], strong: true },
      { id: 'date', cells: ['Date', 'May 14'] }], notes: ['Bought: {what}'] }],
    given: 'Asked: the price before tax, for an expense report. Given: {totalText} paid, with {t}% sales tax in it. The date does not matter.',
    rough: { working: '10% of {totalText} is about {tenPct}, so {t}% of the total is about {taxF}. The tax was {t}% of the smaller price before it, so it was a little less than {taxF}: take off a bit less, about {roughText}.', prompt: 'About what was the price before tax?', places: 0 },
    setup: 'Backward: the price before tax is the whole, 100%, and the total is {allPct}% of it. So total = price × {mult}, and price = total ÷ {mult}.',
    exact: { working: 'On the calculator: {totalText} ÷ {mult} = {ansText}. Look back: {ansText} × {mult} gives {totalText} back, the check a rough answer cannot make here.',
      prompt: 'What was the price before tax, exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'percent-of-after', value: 'afterDown', then: 'That takes {t}% of the total off. The tax was {t}% of the smaller price before it: divide by {mult}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Percent', cells: ['100', '{allPct}'] }, bottom: { label: 'Dollars', cells: ['{ansText}', '{totalText}'] } } },
    reason: 'The total is {allPct}% of the price before tax, so the price is {totalText} ÷ {mult} = {ansText}.'
  });

  /* ---------- a discount, then the tax ---------- */
  const offTax = problem({
    id: 'g-off-tax', strand: 'percent-back', kind: 'stacked',
    params: { price: [40, 300, 1], p: [20, 25, 30, 40], t: [6, 8, 1], g: [0, 3, 1] },
    make: pick => {
      const price = pick('price'), p = pick('p'), t = pick('t'), after = price * (1 - p / 100), ans = Math.round(after * (1 + t / 100) * 100) / 100;
      return { goods: GOODS[pick('g')], priceText: dollars(price), p, t, afterText: usd(cents(after)), afterRound: dollars(Math.round(after)), taxF: dollars(Math.round(after * t / 100)), rough: Math.round(after) + Math.round(after * t / 100), roughText: dollars(Math.round(after) + Math.round(after * t / 100)),
        m1: String((100 - p) / 100), m2: String(1 + t / 100), ans, ansText: usd(cents(ans)), added: Math.round(price * (1 - p / 100 + t / 100) * 100) / 100 };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{goods}', rows: [{ id: 'price', cells: ['{priceText}'] }, { id: 'off', cells: ['{p}% off today'] }, { id: 'tax', cells: ['Sales tax {t}%, added at the register on the price you pay'] }] }],
    given: 'Asked: what you pay at the register. Given: {priceText}, {p}% off, then {t}% sales tax on the sale price.',
    rough: { working: '{p}% off leaves about {afterRound}. The tax is {t}% of that, about {taxF} (from 10%, a bit less): about {roughText}.', prompt: 'About what will you pay, tax included?', places: 0 },
    setup: 'One percent after another: each is of the amount at that moment. Off first: × {m1}. Then the tax on what is left: × {m2}.',
    exact: { working: 'On the calculator: {priceText} × {m1} = {afterText}, then × {m2} = {ansText}. Look back: near the rough {roughText}, and {ansText} ÷ {m2} gives the sale price, {afterText}, back.',
      prompt: 'What will you pay exactly, tax included?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'added-percents', value: 'added', then: 'That takes {p}% off and adds {t}% of the full price. The tax is on the sale price: multiply each in turn.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Step', cells: ['On the tag', 'After {p}% off', 'With {t}% tax'] }, bottom: { label: 'Dollars', cells: ['{priceText}', '{afterText}', '{ansText}'] } } },
    reason: 'Off first, then the tax on what is left: {priceText} × {m1} × {m2} = {ansText}.'
  });

  /* ---------- up a percent, then down the same percent ---------- */
  const BIKES = ['A bike', 'A sofa', 'A grill', 'A tent'];
  const upDown = problem({
    id: 'g-up-down', strand: 'percent-back', kind: 'stacked',
    params: { price: [40, 400, 5], ai: [0, 2, 1], first: ['up', 'down'], b: [0, 3, 1] },
    make: pick => {
      const a = [25, 30, 50][pick('ai')];
      const price = pick('price'), up = pick('first') === 'up', m1 = up ? 1 + a / 100 : 1 - a / 100, m2 = up ? 1 - a / 100 : 1 + a / 100;
      const mid = price * m1, ans = Math.round(mid * m2 * 100) / 100, midF = Math.round(mid / 5) * 5, rough = Math.round(midF * m2 / 5) * 5;
      return { thing: BIKES[pick('b')], priceText: dollars(price), a, story: up ? `In spring the store raised the price by ${a}%. In fall it put it on sale at ${a}% off.` : `In winter it was ${a}% off. In spring the store raised that sale price by ${a}%.`,
        midText: usd(cents(mid)), midF: dollars(midF), m1: String(m1), m2: String(m2), rough, roughText: dollars(rough), ans, ansText: usd(cents(ans)), same: price,
        second: up ? 'down' : 'up' };
    },
    blocks: [{ kind: 'document', form: 'table', title: '{thing}', rows: [{ id: 'start', cells: ['Price last year', '{priceText}'] }, { id: 'story', cells: ['Since then', '{story}'] },
      { id: 'color', cells: ['Colors', 'blue, black'] }] }],
    given: 'Asked: the price now. Given: {priceText}, then {a}% {first}, then {a}% {second}. The colors do not matter.',
    rough: { working: '{a}% {first} from {priceText} gives about {midF}. The second {a}% is of that, not of {priceText}: {a}% {second} from {midF} is about {roughText}.',
      prompt: 'About what is the price now?', places: 0,
      traps: [{ slip: 'added-percents', value: 'same', then: 'That is nearer where it started. Up {a}% and down {a}% do not cancel: the second is of a different amount.' }] },
    setup: 'One percent after another: × {m1}, then × {m2}. Each percent is of the amount at that moment.',
    exact: { working: 'On the calculator: {priceText} × {m1} × {m2} = {ansText}. Look back: under {priceText}, because the two changes are of different amounts.',
      prompt: 'What is the price now, exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'added-percents', value: 'same', then: 'Up {a}% and down {a}% do not cancel: the second {a}% is of a different amount. Multiply each in turn.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Step', cells: ['Last year', 'After the first change', 'Now'] }, bottom: { label: 'Dollars', cells: ['{priceText}', '{midText}', '{ansText}'] } } },
    reason: '{priceText} × {m1} × {m2} = {ansText}: less than it started, because the second {a}% is of a different amount.'
  });

  /* ---------- points against percent ---------- */
  // a savings rate moves a little at a time (at most a point here); a card's rate rise comes with the notice the law requires for it (research note: realism)
  // a rate made friendly for the rough answer: a card's to the nearest 5, a savings rate to the nearest whole percent
  const friendlyRate = r1 => r1 >= 10 ? Math.round(r1 / 5) * 5 : Math.round(r1);
  const RATES = [{ what: 'Your savings account', from: [3, 5, 0.5], down: true, name: 'yearly rate', moves: [0.25, 0.5, 0.75, 1], extra: ['Interest paid', 'monthly'] },
    { what: 'Your credit card', from: [16, 24, 1], down: false, name: 'yearly interest rate', moves: [0.5, 1, 1.5, 2, 3], extra: ['Notice sent', '45 days ahead'] }];
  const points = problem({
    id: 'g-points', strand: 'percent-back', kind: 'points',
    params: { k: [0, 1], step: [0, 1, 0.25], dd: [0, 4, 1] },
    make: pick => {
      const r = RATES[pick('k')], r1 = Math.round((r.from[0] + (r.from[1] - r.from[0]) * pick('step')) / r.from[2]) * r.from[2], d = r.moves[pick('dd') % r.moves.length], r2 = r.down ? r1 - d : r1 + d;
      const ans = Math.round(d / r1 * 1000) / 10;
      return { what: r.what, rateName: r.name, r1, r2, r1Text: `${num(r1)}%`, r2Text: `${num(r2)}%`, d, dir: r.down ? 'down' : 'up', tenth: num(r1 / 10, 2),
        extraLabel: r.extra[0], extraValue: r.extra[1], rF: friendlyRate(r1), rough: Math.round(d / friendlyRate(r1) * 1000) / 10, times: num(d / (r1 / 10), 1), pts: d === 1 ? 'point' : 'points', newPctOf: num(r2 / r1 * 100, 1), ans, ansText: num(ans, 1) };
    },
    blocks: [{ kind: 'document', form: 'offer', title: '{what}', rows: [{ id: 'old', cells: ['Old {rateName}', '{r1Text}'] }, { id: 'new', cells: ['New {rateName}', '{r2Text}'] },
      { id: 'extra', cells: ['{extraLabel}', '{extraValue}'] }] }],
    given: 'Asked: how big the change is as a percent of the old rate. Given: the rate went from {r1Text} to {r2Text}, which is {d} percentage {pts}.',
    rough: { working: '{r1} is about {rF}, an easier number. {d} out of {rF} is about {rough} out of 100: about {rough}% of the old rate.', prompt: 'By about what percent of the old rate did it go {dir}?', frame: '__%' },
    setup: 'A change as a percent: the old rate is the whole, 100%. The change in points is {d}; as a percent, it is {d} ÷ {r1} × 100.',
    exact: { working: 'On the calculator: {d} ÷ {r1} × 100 = {ansText}%. Look back: near the rough {rough}%, and much more than {d}%.',
      prompt: 'By what percent of the old rate, exactly, to one decimal?', frame: '__%', places: 1, tol: { abs: 0.1 },
      traps: [{ slip: 'points-not-percent', value: 'd', then: 'That is the change in points, {r1Text} to {r2Text}. As a percent of the old rate: {d} ÷ {r1} × 100.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Percent of the old rate', cells: ['100', '{newPctOf}'] }, bottom: { label: 'Rate', cells: ['{r1Text}', '{r2Text}'] } } },
    reason: 'From {r1Text} to {r2Text} is {d} {pts}, and {d} ÷ {r1} × 100 = {ansText}% of the old rate.'
  });

  /* ---------- a key word that misleads: "more" on a price that is now, so the price before is the unknown (M16) ---------- */
  // "20% more" tempts × 1.20; the 20% is of last year's price, the whole, so the answer divides. Each friendly fraction to take off is exact:
  // 10% more → take off 1/11 (about a tenth, a bit less); 20% → a sixth; 25% → a fifth; 50% → a third.
  const LESS = { 10: { words: 'take off about a tenth, a bit less', f: 10 / 11 }, 20: { words: 'take off a sixth', f: 5 / 6 }, 25: { words: 'take off a fifth', f: 4 / 5 }, 50: { words: 'take off a third', f: 2 / 3 } };
  const SIGNS = ['Season pass', 'Swim lessons', 'Summer camp, one week', 'Concert series'];
  const was = problem({
    id: 'g-was', strand: 'percent-back', kind: 'before',
    params: { old: [40, 400, 5], u: [25, 50], g: [0, 3, 1] },
    make: pick => {
      const old = pick('old'), u = pick('u'), now = old * (1 + u / 100), less = LESS[u], rough = Math.round(now * less.f);
      return { thing: SIGNS[pick('g')], u, nowText: usd(cents(now)), nowPct: 100 + u, mult: String(1 + u / 100), words: less.words, rough, roughText: dollars(rough),
        ans: old, ansText: usd(cents(old)), timesUp: Math.round(now * (1 + u / 100) * 100) / 100, takeOff: Math.round(now * (1 - u / 100) * 100) / 100 };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{thing}', rows: [{ id: 'now', cells: ['Now {nowText}'] }, { id: 'more', cells: ['That is {u}% more than last year: worth it!'] }, { id: 'sign', cells: ['Sign up by June 1'] }] }],
    given: 'Asked: last year’s price. Given: {nowText} now, {u}% more than last year. The sign-up date does not matter.',
    rough: { working: 'The {u}% was of last year’s price, so now is {nowPct}% of it, and last year is less than now: {words}. About {roughText}.',
      prompt: 'About what was the price last year?', places: 0,
      traps: [{ slip: 'percent-of-after', value: 'takeOff', then: 'That is nearer today’s price less {u}% of it. The {u}% was of last year’s smaller price: {words}.' },
        { slip: 'wrong-whole', value: 'timesUp', then: 'That adds {u}% again because the sign says "more". Last year was less than now.' }] },
    setup: 'Backward: last year’s price is the whole, 100%, and now is {nowPct}% of it. So now = last year × {mult}, and last year = now ÷ {mult}. The word "more" does not mean multiply here: the unknown is the whole.',
    exact: { working: 'On the calculator: {nowText} ÷ {mult} = {ansText}. Look back: near the rough {roughText}, and less than now.',
      prompt: 'What was the price last year, exactly?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'percent-of-after', value: 'takeOff', then: 'That takes {u}% of today’s price off. The {u}% was of last year’s smaller price: divide by {mult}.' },
        { slip: 'wrong-whole', value: 'timesUp', then: 'That adds {u}% again because the sign says "more". Last year was less than now: divide by {mult}.' }] },
    figure: { kind: 'figure', type: 'rate-table', data: { top: { label: 'Percent', cells: ['100', '{nowPct}'] }, bottom: { label: 'Dollars', cells: ['{ansText}', '{nowText}'] } } },
    reason: 'Now is {nowPct}% of last year’s price, so last year was {nowText} ÷ {mult} = {ansText}. "More" named the change, not the operation.'
  });

  FC.gen('math', [beforeOff, beforeTax, offTax, upDown, points, was]);
  // the worked problem: $63 paid after 25% off
  FC.items('math', [MATH.worked(beforeOff, 'w-before', { o: 84, pi: 0, g: 0 })]);
})();
