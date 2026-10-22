// Math, lesson 11 "What a loan costs": a car loan, a month's interest on a card balance, and a "buy now, pay later" plan in monthly payments
// (docs/research/math.md, M9: people underestimate a loan's cost from its terms; M1: the offer is the real document, and the method is never named).
// The rules, the same in every question:
// - A loan costs what you pay in all, less what you borrowed: payment × months − amount. A pay-later plan is a loan: payments in all − the price.
// - A rate is for a year (APR) unless it says otherwise; charged each month, a month's rate is the APR ÷ 12.
// The payment printed on an offer is the one a lender works out for that rate and term (the standard monthly payment, worked in `make`).
(() => {
  const { usd, dollars, num, problem, keys } = MATH;
  const cents = x => Math.round(x * 100);
  // the monthly payment for an amount, a yearly rate and a number of months, to the cent
  const payment = (amount, apr, months) => { const i = apr / 1200; return Math.round(amount * i / (1 - Math.pow(1 + i, -months)) * 100) / 100; };
  // the rough payment: three figures ($396.02 is $396, $1,047.30 is $1,050), because the cost is a small difference of two big numbers
  const threeFigures = x => { const unit = Math.pow(10, Math.floor(Math.log10(x)) - 2); return Math.round(x / unit) * unit; };
  const mWords = x => '$' + num(x, 1);

  /* ---------- a car loan ---------- */
  const car = problem({
    id: 'g-car-loan', strand: 'loan', kind: 'loan-total',
    params: { B: [12000, 32000, 500], apr: [6, 11, 0.5], n: [36, 72, 12] },
    make: pick => {
      const B = pick('B'), n = pick('n'), M = payment(B, pick('apr'), n), Mr = threeFigures(M), all = M * n, ans = all - B;
      return { BText: dollars(B), B, n, MText: usd(cents(M)), M, Mr: mWords(Mr), MrN: dollars(Mr * n), rough: Mr * n - B, flat: B * pick('apr') / 100 * n / 12, years: num(n / 12, 1), roughText: dollars(Mr * n - B),
        all, allText: usd(cents(all)), ans, ansText: usd(cents(ans)), onPayment: M * pick('apr') / 100,
        keys: keys([M, '*', n, '-', B, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'offer', title: 'Car loan offer', rows: [{ id: 'amt', cells: ['Amount borrowed', '{BText}'] }, { id: 'apr', cells: ['APR', '{apr}%'] },
      { id: 'term', cells: ['Term', '{n} months'] }, { id: 'pay', cells: ['Monthly payment', '{MText}'] }, { id: 'first', cells: ['First payment, after signing', 'in 30 days'] }] }],
    given: 'Asked: what the loan costs beyond the {BText} borrowed. Given: {n} payments of {MText}. The APR is already in the payment, and the first payment’s day does not matter.',
    rough: { working: 'The payment to three figures, about {Mr}: × {n} = {MrN} paid in all, less the {BText} borrowed: about {roughText}.',
      prompt: 'About how much does the loan cost you, beyond what you borrowed?', places: 0 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}, and far less than the amount borrowed.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'total-for-cost', value: 'all', then: 'That is everything you pay. The loan costs what you pay beyond the {BText} you borrowed.' },
        { slip: 'flat-interest', value: 'flat', then: 'That charges {apr}% a year on the whole {BText} for all {years} years. You pay the loan down each month, so the interest shrinks: all you pay, less what you borrowed.' },
        { slip: 'rate-on-payment', value: 'onPayment', then: 'That takes the rate of one payment. What the loan costs is all you pay, less what you borrowed.' }] },
    reason: '{n} × {MText} = {allText} paid in all, less the {BText} borrowed: {ansText}. On the loan papers this is the finance charge.'
  });

  /* ---------- a month's interest on a card balance ---------- */
  const card = problem({
    id: 'g-card-month', strand: 'loan', kind: 'monthly-rate',
    params: { X: [600, 4800, 10], apr: [18, 30, 3], note: [0, 1, 1] },
    make: pick => {
      const X = pick('X'), apr = pick('apr'), m = apr / 12, Xr = Math.round(X / 100) * 100, ans = X * apr / 1200;
      return { XText: usd(X * 100), m: num(m), Xr: dollars(Xr), onePct: dollars(Xr / 100), rough: Math.round(Xr / 100 * m), roughText: dollars(Math.round(Xr / 100 * m)),
        ans, ansText: usd(cents(ans)), yearly: X * apr / 100, minText: usd(Math.max(3500, Math.round(X + ans * 100))),   // 1% of the balance plus the interest, at least $35
        noteText: pick('note') ? 'Interest is charged each month at about the APR ÷ 12 on what you owe.' : 'Questions? Call the number on the back of your card.', keys: keys([X, '*', apr, '/', 12, '/', 100, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'statement', title: 'Store card statement', rows: [{ id: 'bal', cells: ['New balance', '{XText}'] }, { id: 'apr', cells: ['Purchase APR', '{apr}%'] },
      { id: 'min', cells: ['Minimum payment', '{minText}'] }, { id: 'due', cells: ['Payment due', 'June 25'] }], notes: ['{noteText}'] }],
    given: 'Asked: one month’s interest on {XText}. Given: the APR, {apr}% a year. A month is about a twelfth of a year. The minimum payment and the date do not matter.',
    rough: { working: '{apr}% a year ÷ 12 is {m}% a month. 1% of about {Xr} is {onePct}, so {m}% is about {roughText}.',
      prompt: 'If you still owe {XText} for the next month, about how much interest is charged?', places: 2 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}, and a small part of the balance.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'yearly-as-monthly', value: 'yearly', then: 'That is {apr}% of it, a whole year’s interest. A month is the APR ÷ 12: {m}%.' }] },
    reason: 'A month is {apr}% ÷ 12 = {m}%: {XText} × {apr} ÷ 12 ÷ 100 = {ansText}.'
  });

  /* ---------- buy now, pay later, in monthly payments ---------- */
  const THINGS = ['Sofa', 'Laptop', 'Washer and dryer', 'Mattress'];
  const later = problem({
    id: 'g-pay-later', strand: 'loan', kind: 'pay-later',
    params: { thing: [0, 3, 1], P: [600, 2400, 50], apr: [15, 33, 3], n: [6, 18, 6] },
    make: pick => {
      const P = pick('P'), n = pick('n'), M = payment(P, pick('apr'), n), Mr = threeFigures(M), all = M * n, ans = all - P;
      return { thingText: THINGS[pick('thing')], PText: dollars(P), n, MText: usd(cents(M)), Mr: mWords(Mr), MrN: dollars(Mr * n), rough: Mr * n - P, roughText: dollars(Mr * n - P),
        all, allText: usd(cents(all)), ans, ansText: usd(cents(ans)), onPayment: M * pick('apr') / 100,
        keys: keys([M, '*', n, '-', P, '=']), keysGives: ans };
    },
    blocks: [{ kind: 'document', form: 'tag', title: '{thingText}', rows: [{ id: 'now', cells: ['Pay today', '{PText}'] }, { id: 'later', cells: ['Or buy now, pay later: {n} monthly payments of', '{MText}'] },
      { id: 'apr', cells: ['APR', '{apr}%'] }, { id: 'ship', cells: ['Delivery', 'free'] }] }],
    given: 'Asked: how much more paying later costs than paying today. Given: {PText} today, or {n} payments of {MText}. The APR is already in the payment; delivery is free either way.',
    rough: { working: 'The payment to three figures, about {Mr}: × {n} = {MrN} in all, less the {PText} price: about {roughText}.',
      prompt: 'About how much more do you pay in all if you pay later?', places: 0 },
    exact: { working: 'On the calculator: {keys} shows {ansText}. Look back: near the rough {roughText}.',
      prompt: 'And exactly, to the cent?', places: 2, tol: { abs: 0.01 },
      traps: [{ slip: 'total-for-cost', value: 'all', then: 'That is everything you pay. What paying later costs is that, less the {PText} price.' },
        { slip: 'rate-on-payment', value: 'onPayment', then: 'That takes the rate of one payment. What it costs is all you pay, less the price.' }] },
    reason: '{n} × {MText} = {allText} in all, less the {PText} price: {ansText} more.'
  });

  FC.gen('math', [car, card, later]);
  // the worked problem: $20,000 for a car at 7% over 60 months
  FC.items('math', [MATH.worked(car, 'w-car-loan', { B: 20000, apr: 7, n: 60 })]);
})();
