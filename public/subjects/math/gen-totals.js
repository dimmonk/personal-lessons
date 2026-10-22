// Math, lesson 1 "Ballpark and check": every question is made with fresh prices each time (a generator). Prices are in cents so the
// arithmetic is whole numbers; a price always ends in 9, as on a shelf. A cart, an order with quantities and a bill to split are each a rough
// total typed first with no calculator, then the exact one (MATH.problem, kit.js); each is also made with the rough total alone for the check.
// A bill with its subtotal printed asks whether the lines add up to it, and by how much it is off (the check: the verdict alone).
(() => {
  const { usd, sum, pickNames, NAME_PARAMS, problem, roughOnly, worked } = MATH;
  const dollars = c => Math.round(c / 100);                             // the nearest whole dollar, as the learner rounds
  const place = (list, at, extra) => [...list.slice(0, at), extra, ...list.slice(at)];   // `extra` goes in as line number `at`, from 0
  const FOOD = ['Bread', 'Milk', 'Eggs', 'Cheese', 'Apples', 'Pasta', 'Rice', 'Yogurt', 'Coffee', 'Bananas', 'Cereal', 'Butter'];
  const BIG = ['Roast chicken', 'Laundry soap', 'Olive oil', 'Ground beef', 'Dog food', 'Paper towels'];
  const OFFICE = ['Notebooks', 'Pens', 'Folders', 'Tape', 'Markers', 'Envelopes', 'Binders', 'Labels', 'Paper clips', 'Sticky notes', 'Highlighters', 'Rulers'];
  const MARKETS = ['Corner Market', 'Green Grocer', 'Fresh Basket', 'Main Street Foods'];
  const SHOPS = ['Paper and Pen', 'Office Corner', 'Desk Supply', 'Print Shop'];
  const PLACES = ['Luigi’s Pizza', 'Harbor Grill', 'Noodle House', 'Taco Corner'];
  const HOURS = ['Open 7 a.m. to 10 p.m.', 'Open 8 a.m. to 9 p.m.', 'Open 24 hours', 'Open 6 a.m. to 11 p.m.'];
  const NAMES = { ...NAME_PARAMS, store: [0, 3, 1] };
  const pointTraps = [
    { slip: 'decimal-point', value: 'tenfold', then: 'That is ten times too big: the decimal point is one place too far right.' },
    { slip: 'decimal-point', value: 'tenth', then: 'That is ten times too small: the decimal point is one place too far left.' }];
  const ROUND_RULE = '50 cents or more rounds up; less rounds down';

  /* ---------- a grocery cart: add the prices ---------- */
  const cart = problem({
    id: 'g-cart', strand: 'ballpark', kind: 'estimate',
    params: { a: [149, 849, 10], b: [149, 849, 10], c: [149, 849, 10], d: [149, 849, 10], big: [1149, 3849, 10], at: [0, 4, 1], bn: [0, 5, 1], ...NAMES },
    make: pick => {
      const c = place(['a', 'b', 'c', 'd'].map(pick), pick('at'), pick('big')), total = sum(c), rounded = c.map(dollars);
      const names = place(pickNames(FOOD, pick, 4), pick('at'), BIG[pick('bn')]);
      return { shop: MARKETS[pick('store')], hours: HOURS[pick('store')], ...Object.fromEntries(names.map((n, i) => [`n${i + 1}`, n])), ...Object.fromEntries(c.map((x, i) => [`p${i + 1}`, usd(x)])),
        roundedSum: rounded.map(r => '$' + r).join(' + '), exactSum: c.map(usd).join(' + '), rough: sum(rounded), ans: total / 100, totalText: usd(total),
        bigName: BIG[pick('bn')], noBig: (total - pick('big')) / 100, tenfold: total / 10, tenth: total / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [1, 2, 3, 4, 5].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{p${k}}`] })), notes: ['Prices before tax', '{hours}'] }],
    given: 'Asked: what the five prices come to. Given: the five prices. The opening hours do not matter.',
    rough: { working: `Round each price to the nearest dollar (${ROUND_RULE}) and add: {roundedSum} = \${rough}.`,
      prompt: 'About how much do these come to? Round each price to the nearest dollar and add them in your head.', places: 2, tol: { rel: 0.2 },
      traps: [{ slip: 'missed-line', value: 'noBig', then: 'That is what you get when the {bigName} line is left out. Count every line.' }] },
    exact: { working: 'On the calculator: {exactSum} = {totalText}. Look back: {totalText} is near the rough ${rough}, so it is sensible.',
      prompt: 'What is the exact total?', places: 2, tol: { round: 0.01 },
      traps: [{ slip: 'missed-line', value: 'noBig', then: 'That is the answer you get when the {bigName} line is left out.' }, ...pointTraps] },
    reason: 'Rounded to the nearest dollar, the prices make about ${rough}; exactly, they add up to {totalText}. The two are close, so the total is sensible.'
  });

  /* ---------- an order with quantities: multiply each line, then add (the memory adds the lines) ---------- */
  const order = problem({
    id: 'g-qty', strand: 'ballpark', kind: 'estimate',
    params: { q1: [2, 6, 1], q2: [2, 6, 1], q3: [2, 6, 1], q4: [2, 6, 1], p1: [409, 1199, 10], p2: [409, 1199, 10], p3: [409, 1199, 10], p4: [409, 1199, 10], ...NAMES },
    make: pick => {
      const q = ['q1', 'q2', 'q3', 'q4'].map(pick), p = ['p1', 'p2', 'p3', 'p4'].map(pick), names = pickNames(OFFICE, pick, 4);
      const total = sum(q.map((n, i) => n * p[i]));
      return { shop: SHOPS[pick('store')], ...Object.fromEntries(names.map((n, i) => [`n${i + 1}`, n])), ...Object.fromEntries(q.map((n, i) => [`c${i + 1}`, `${n} × ${usd(p[i])}`])),
        roundedSum: q.map((n, i) => `${n} × $${dollars(p[i])}`).join(' + '), memKeys: q.map((n, i) => `${n} × ${(p[i] / 100).toFixed(2)} M+`).join(', '),
        rough: sum(q.map((n, i) => n * dollars(p[i]))), ans: total / 100, totalText: usd(total), noQty: sum(p) / 100, twice: total / 50, tenfold: total / 10, tenth: total / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [1, 2, 3, 4].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{c${k}}`] })), notes: ['Prices before tax', 'Order number 4417'] }],
    given: 'Asked: what the order comes to. Given: how many of each thing, and its price. The order number does not matter.',
    rough: { working: 'Round each price to the nearest dollar, multiply by how many, and add: {roundedSum} = ${rough}.',
      prompt: 'About how much does this order come to? Round each price, multiply, and add in your head.', places: 2, tol: { rel: 0.2 },
      traps: [{ slip: 'forgot-quantity', value: 'noQty', then: 'That is what you get when you add the prices and forget how many of each. Multiply first.' }] },
    exact: { working: 'The calculator does one sum at a time, so press MC to clear the memory, then work out each line and add it to the memory with M+: {memKeys}. Then MR shows {totalText}. Look back: near the rough ${rough}.',
      prompt: 'What is the exact total? M+ adds a line to the memory; MR shows the total.', places: 2, tol: { round: 0.01 }, calc: ['mem'],
      traps: [{ slip: 'forgot-quantity', value: 'noQty', then: 'That is the answer you get when you add the prices and forget how many of each.' }, ...pointTraps, { slip: 'memory-not-cleared', value: 'twice', then: 'That is the total twice: the memory still held an earlier total. Press MC before a new one.' }] },
    reason: 'Rounded, the order makes about ${rough}; exactly, it comes to {totalText}. The two are close, so the total is sensible.'
  });

  /* ---------- a bill to split: divide ---------- */
  const split = problem({
    id: 'g-split', strand: 'ballpark', kind: 'estimate',
    params: { people: [3, 8, 1], bill: [4800, 24000, 1], store: [0, 3, 1] },
    make: pick => {
      const people = pick('people'), bill = pick('bill'), share = bill / people, roughShare = Math.round(bill / 100 / people);
      return { diner: PLACES[pick('store')], billText: usd(bill), near: roughShare * people, rough: roughShare, ans: share / 100, totalText: usd(Math.round(share)),
        timesPeople: bill * people / 100, tenfold: share / 10, tenth: share / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{diner}', rows: [{ id: 'party', cells: ['Table for', '{people} people'] }, { id: 'server', cells: ['Server', 'Table 12'] }, { id: 'bill', cells: ['Total', '{billText}'], strong: true }] }],
    given: 'Asked: one person’s share. Given: the total and how many people. The table number does not matter.',
    rough: { working: 'Round the bill to the nearest number that {people} divides evenly: {billText} is close to ${near}, and ${near} ÷ {people} = ${rough}.',
      prompt: 'Everyone pays the same share. About how much does each person pay? Round the bill to the nearest number that {people} divides evenly.', places: 2, tol: { rel: 0.2 },
      traps: [{ slip: 'multiplied-not-divided', value: 'timesPeople', then: 'That is the bill times the number of people. A share is smaller than the bill: divide.' }] },
    exact: { working: 'On the calculator: {billText} ÷ {people} = {totalText} each, to the nearest cent. Look back: near the rough ${rough}, and smaller than the bill.',
      prompt: 'Exactly how much does each person pay, to the nearest cent?', places: 2, unit: 'each', tol: { round: 0.01 },
      traps: [{ slip: 'multiplied-not-divided', value: 'timesPeople', then: 'That is the bill times the number of people. A share is smaller than the bill, so divide.' }, ...pointTraps] },
    reason: 'Rounded, the bill is about ${near}, and ${near} ÷ {people} = ${rough}; exactly, each person pays {totalText}. The two are close, so the share is sensible.'
  });

  /* ---------- a bill with its subtotal printed: do the lines add up to it? ---------- */
  const SMALL = [199, 649, 10], MID = [899, 1499, 10];
  const BILL_PARAMS = { a: SMALL, b: SMALL, c: SMALL, d: SMALL, mid: MID, at: [0, 4, 1], bn: [0, 5, 1], tax: [5, 6, 7, 8], ...NAMES };
  // the lines of a bill, what they really make, and the words every form of the question shares
  const billValues = pick => {
    const c = place(['a', 'b', 'c', 'd'].map(pick), pick('at'), pick('mid')), total = sum(c), rounded = c.map(dollars);
    const names = place(pickNames(FOOD, pick, 4), pick('at'), BIG[pick('bn')]);
    return { c, total, rough: sum(rounded), roundedSum: rounded.map(r => '$' + r).join(' + '), midName: BIG[pick('bn')], midText: usd(pick('mid')), shop: MARKETS[pick('store')],
      lines: { ...Object.fromEntries(names.map((n, i) => [`n${i + 1}`, n])), ...Object.fromEntries(c.map((x, i) => [`p${i + 1}`, usd(x)])) } };
  };
  // the printed rows below the lines: the subtotal shown, the sales tax on it and the total, as the bill adds them
  const printedRows = (shown, rate) => { const tax = Math.round(shown * rate / 100); return { subText: usd(shown), taxText: usd(tax), allText: usd(shown + tax) }; };
  const printed = (id, kind, extra) => ({ id, strand: 'check-total', facets: { kind }, params: BILL_PARAMS, ...extra,
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [...[1, 2, 3, 4, 5].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{p${k}}`] })),
      { id: 'sub', cells: ['Subtotal', '{subText}'] }, { id: 'tax', cells: ['Sales tax {tax}%', '{taxText}'] }, { id: 'all', cells: ['Total', '{allText}'], strong: true }] }] });
  const verdictAsk = (right, slips, then) => ({ id: 'verdict', kind: 'choose', prompt: 'Do the lines add up to the subtotal?', from: 'verdict', right, slips, then });

  const totalRight = printed('g-total-right', 'right-total', {
    make: pick => { const r = billValues(pick); return { ...r.lines, shop: r.shop, rough: r.rough, roundedSum: r.roundedSum, totalText: usd(r.total), ...printedRows(r.total, pick('tax')) }; },
    asks: [verdictAsk('right', { wrong: 'doubted-total' }, { wrong: 'The lines do add up to {totalText}, the same as the subtotal.' })],
    steps: [
      { id: 'round', does: 'Round each line to the nearest dollar and add.', working: '{roundedSum} = ${rough}.' },
      { id: 'compare', does: 'Compare with the subtotal.', working: 'The bill says {subText}, close to ${rough}, so it adds up. The total is a little higher because the tax comes after.', ask: 'verdict' }],
    deciding: ['sub'],
    reason: 'The lines add up to {totalText}, and the subtotal says {subText}: they match. The total is higher only by the sales tax.'
  });
  const totalWrong = printed('g-total-wrong', 'wrong-total', {
    params: { ...BILL_PARAMS, fault: ['digit', 'missed'], tens: [6, 8, 10, 20, 30, 40] },
    make: pick => {
      const r = billValues(pick), digit = pick('fault') === 'digit', shown = digit ? r.total + pick('tens') * 100 : r.total - pick('mid');
      return { ...r.lines, shop: r.shop, rough: r.rough, roundedSum: r.roundedSum, totalText: usd(r.total), ...printedRows(shown, pick('tax')),
        off: Math.abs(shown - r.total) / 100, bad: digit ? 'sub' : `l${pick('at') + 1}`,
        why: digit ? `The subtotal is ${usd(Math.abs(shown - r.total))} more than the lines: it was added up wrong.` : `The ${r.midName} line, ${r.midText}, was left out of the subtotal.` };
    },
    asks: [verdictAsk('wrong', { right: 'trusted-total' }, { right: 'The lines add up to {totalText}, not {subText}.' }),
      { id: 'by', kind: 'number', prompt: 'By about how many dollars is the subtotal off?', frame: '$__', places: 2, answer: 'off', tol: { abs: 3, rel: 0.25 }, when: { ask: 'verdict', is: ['wrong'] } }],
    steps: [
      { id: 'round', does: 'Round each line to the nearest dollar and add.', working: '{roundedSum} = ${rough}.' },
      { id: 'compare', does: 'Compare with the subtotal.', working: 'The bill says {subText}, far from ${rough}. Something is wrong.', ask: 'verdict' },
      { id: 'find', does: 'Find what does not fit.', working: '{why}', ask: 'by' }],
    deciding: ['{bad}'],
    reason: 'The lines add up to {totalText}, but the subtotal says {subText}. {why}'
  });
  // the verdict alone, for the check: "a bill that does not add up is caught"
  const verdictOnly = def => ({ ...def, id: `${def.id}-v`, asks: def.asks.filter(a => a.id === 'verdict'), steps: def.steps.filter(s => s.ask !== 'by') });

  FC.gen('math', [cart, roughOnly(cart, 'g-cart-est', 'The exact total is {totalText}.', 'About how much do these come to?'), order, roughOnly(order, 'g-qty-est', 'The exact total is {totalText}.', 'About how much does this order come to?'),
    split, roughOnly(split, 'g-split-est', 'The exact share is {totalText}.', 'Everyone pays the same share. About how much does each person pay?'), totalRight, verdictOnly(totalRight), totalWrong, verdictOnly(totalWrong)]);
  // the worked problem: a grocery cart with its numbers fixed, so the working can be read as written
  FC.items('math', [worked(cart, 'w-receipt', { a: 349, b: 429, c: 379, d: 499, big: 1189, at: 3, bn: 0, start: 0, stride: 1, store: 0 })]);
})();
