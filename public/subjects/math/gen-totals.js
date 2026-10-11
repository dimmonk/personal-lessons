// Math, lesson 1 "Ballpark and check": every question is made with fresh prices each time (lesson standard 26.1, a generator). Prices are in
// cents so the arithmetic is whole numbers; a price always ends in 9, as on a shelf. What the learner is asked for is a rough total typed first
// (no calculator), then the exact one, or whether a printed total is right. Each generator is also made in a shorter form for the check: a
// rough total alone, or the verdict alone (the check of part 1 asks for an estimate within a fifth and for the wrong total to be caught).
(() => {
  const usd = cents => '$' + (cents / 100).toFixed(2);
  const dollars = cents => Math.round(cents / 100);                    // the nearest whole dollar, as the learner rounds
  const sum = list => list.reduce((a, b) => a + b, 0);
  const place = (list, at, extra) => [...list.slice(0, at), extra, ...list.slice(at)];   // `extra` goes in as line number `at`, from 0
  const FOOD = ['Bread', 'Milk', 'Eggs', 'Cheese', 'Apples', 'Pasta', 'Rice', 'Yogurt', 'Coffee', 'Bananas', 'Cereal', 'Butter'];
  const BIG = ['Roast chicken', 'Laundry soap', 'Olive oil', 'Ground beef', 'Dog food', 'Paper towels'];
  const OFFICE = ['Notebooks', 'Pens', 'Folders', 'Tape', 'Markers', 'Envelopes', 'Binders', 'Labels', 'Paper clips', 'Sticky notes', 'Highlighters', 'Rulers'];
  const MARKETS = ['Corner Market', 'Green Grocer', 'Fresh Basket', 'Main Street Foods'];
  const SHOPS = ['Paper and Pen', 'Office Corner', 'Desk Supply', 'Print Shop'];
  const PLACES = ['Luigi’s Pizza', 'Harbor Grill', 'Noodle House', 'Taco Corner'];
  // twelve names in an order that depends on a start and a stride that share no factor with twelve, so none repeats within four lines
  const pickNames = (list, pick, count) => Array.from({ length: count }, (_, k) => list[(pick('start') + k * pick('stride')) % list.length]);
  const NAME_PARAMS = { start: [0, 11, 1], stride: [1, 5, 7, 11], store: [0, 3, 1] };

  // the two asks of a rough-then-exact question, and what the learner may have done wrong
  const estimateAsk = (prompt, traps) => ({ id: 'est', kind: 'number', prompt, frame: '$__', places: 2, estimate: true, answer: 'total', tol: { rel: 0.2 }, traps });
  const exactAsk = (prompt, traps, unit) => ({ id: 'exact', kind: 'number', prompt, frame: '$__', places: 2, ...(unit ? { unit } : {}), answer: 'total', tol: { round: 0.01 }, traps });
  const pointTraps = [
    { slip: 'decimal-point', value: 'tenfold', then: 'That is ten times too big. The decimal point is one place too far right.' },
    { slip: 'decimal-point', value: 'tenth', then: 'That is ten times too small. The decimal point is one place too far left.' }];
  // the generator for the estimate-only form used in the check: the same numbers, the rough total alone
  const roughOnly = (def, word) => {
    const steps = def.steps.filter(s => s.ask !== 'exact' && s.id !== 'compare');
    return { ...def, id: `${def.id}-est`, asks: def.asks.filter(a => a.id === 'est'), steps: [...steps, { id: 'check', does: 'Check it on a calculator.', working: `The exact ${word} is {totalText}.` }],
      reason: def.roughReason };
  };
  const stripped = def => { const { roughReason, ...rest } = def; return rest; };

  /* ---------- a grocery receipt: add the prices ---------- */
  const cart = {
    id: 'g-cart', strand: 'ballpark', facets: { kind: 'estimate' },
    params: { a: [149, 649, 10], b: [149, 649, 10], c: [149, 649, 10], d: [149, 649, 10], big: [1149, 1849, 10], at: [0, 4, 1], bn: [0, 5, 1], ...NAME_PARAMS },
    make: pick => {
      const cents = place(['a', 'b', 'c', 'd'].map(pick), pick('at'), pick('big')), total = sum(cents);
      const names = place(pickNames(FOOD, pick, 4), pick('at'), BIG[pick('bn')]), rounded = cents.map(dollars), rough = sum(rounded);
      return { shop: MARKETS[pick('store')], n1: names[0], n2: names[1], n3: names[2], n4: names[3], n5: names[4],
        p1: usd(cents[0]), p2: usd(cents[1]), p3: usd(cents[2]), p4: usd(cents[3]), p5: usd(cents[4]),
        roundedSum: rounded.map(r => '$' + r).join(' + '), exactSum: cents.map(usd).join(' + '), rough, total: total / 100, totalText: usd(total),
        bigName: BIG[pick('bn')], noBig: (total - pick('big')) / 100, tenfold: total / 10, tenth: total / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [1, 2, 3, 4, 5].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{p${k}}`] })) }],
    asks: [
      estimateAsk('About how much does this cart come to? Round each price to the nearest dollar and add them in your head.',
        [{ slip: 'missed-line', value: 'noBig', then: 'That is what you get when the {bigName} line is left out. Count every line.' }]),
      exactAsk('What is the exact total?', [{ slip: 'missed-line', value: 'noBig', then: 'That is the answer you get when the {bigName} line is left out.' }, ...pointTraps])],
    steps: [
      { id: 'round', does: 'Round each price to the nearest dollar and add.', working: '{roundedSum} = ${rough}.', ask: 'est' },
      { id: 'add', does: 'Add the exact prices on the calculator.', working: '{exactSum} = {totalText}.', ask: 'exact' },
      { id: 'compare', does: 'Compare the two.', working: '{totalText} is close to ${rough}, so the total is sensible.' }],
    reason: 'Rounded to the nearest dollar, the prices make about ${rough}. Exactly, they add up to {totalText}. The two are close, so the total is sensible.',
    roughReason: 'Rounded to the nearest dollar, the prices make about ${rough}. The exact total is {totalText}. A rough answer only has to be near it, within about a fifth.'
  };

  /* ---------- an order with quantities: multiply, then add ---------- */
  const order = {
    id: 'g-qty', strand: 'ballpark', facets: { kind: 'estimate' },
    params: { q1: [2, 6, 1], q2: [2, 6, 1], q3: [2, 6, 1], q4: [2, 6, 1], p1: [409, 1199, 10], p2: [409, 1199, 10], p3: [409, 1199, 10], p4: [409, 1199, 10], ...NAME_PARAMS },
    make: pick => {
      const q = ['q1', 'q2', 'q3', 'q4'].map(pick), p = ['p1', 'p2', 'p3', 'p4'].map(pick), names = pickNames(OFFICE, pick, 4);
      const lines = q.map((n, i) => n * p[i]), total = sum(lines), roundedLines = q.map((n, i) => n * dollars(p[i]));
      return { shop: SHOPS[pick('store')], n1: names[0], n2: names[1], n3: names[2], n4: names[3],
        c1: `${q[0]} × ${usd(p[0])}`, c2: `${q[1]} × ${usd(p[1])}`, c3: `${q[2]} × ${usd(p[2])}`, c4: `${q[3]} × ${usd(p[3])}`,
        roundedSum: q.map((n, i) => `${n} × $${dollars(p[i])}`).join(' + '), exactSum: q.map((n, i) => `${n} × ${usd(p[i])}`).join(' + '),
        rough: sum(roundedLines), total: total / 100, totalText: usd(total), noQty: sum(p) / 100, tenfold: total / 10, tenth: total / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [1, 2, 3, 4].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{c${k}}`] })) }],
    asks: [
      estimateAsk('About how much does this order come to? Round each price to the nearest dollar, multiply, and add in your head.',
        [{ slip: 'forgot-quantity', value: 'noQty', then: 'That is what you get when you add the prices and forget how many of each. Multiply first.' }]),
      exactAsk('What is the exact total?', [{ slip: 'forgot-quantity', value: 'noQty', then: 'That is the answer you get when you add the prices and forget how many of each.' }, ...pointTraps])],
    steps: [
      { id: 'round', does: 'Round each price, multiply by how many, and add.', working: '{roundedSum} = ${rough}.', ask: 'est' },
      { id: 'add', does: 'Work out the exact total on the calculator.', working: '{exactSum} = {totalText}.', ask: 'exact' },
      { id: 'compare', does: 'Compare the two.', working: '{totalText} is close to ${rough}, so the total is sensible.' }],
    reason: 'Rounded to the nearest dollar, the order makes about ${rough}. Exactly, it comes to {totalText}. The two are close, so the total is sensible.',
    roughReason: 'Rounded to the nearest dollar and multiplied, the order makes about ${rough}. The exact total is {totalText}. A rough answer only has to be near it, within about a fifth.'
  };

  /* ---------- a bill to split: divide ---------- */
  const split = {
    id: 'g-split', strand: 'ballpark', facets: { kind: 'estimate' },
    params: { people: [3, 8, 1], bill: [4800, 24000, 1], store: [0, 3, 1] },
    make: pick => {
      const people = pick('people'), bill = pick('bill'), share = Math.round(bill / people), roughShare = Math.round(bill / 100 / people);
      return { place: PLACES[pick('store')], billText: usd(bill), near: roughShare * people, roughShare, total: share / 100, totalText: usd(share),
        timesPeople: bill * people / 100, tenfold: share / 10, tenth: share / 1000 };
    },
    blocks: [{ kind: 'document', form: 'receipt', title: '{place}', rows: [{ id: 'party', cells: ['Table for', '{people} people'] }, { id: 'bill', cells: ['Total', '{billText}'], strong: true }] }],
    asks: [
      estimateAsk('Everyone pays the same share. About how much does each person pay? Round the bill to a number that {people} divides evenly.',
        [{ slip: 'multiplied-not-divided', value: 'timesPeople', then: 'That is the bill times the number of people. A share is smaller than the bill: divide.' }]),
      exactAsk('Exactly how much does each person pay, to the nearest cent?', [{ slip: 'multiplied-not-divided', value: 'timesPeople', then: 'That is the bill times the number of people. A share is smaller than the bill, so divide.' }, ...pointTraps], 'each')],
    steps: [
      { id: 'round', does: 'Round the bill to a number that {people} divides evenly, then divide.', working: '{billText} is close to ${near}. ${near} ÷ {people} = ${roughShare}.', ask: 'est' },
      { id: 'add', does: 'Divide the exact bill on the calculator.', working: '{billText} ÷ {people} = {totalText} each, to the nearest cent.', ask: 'exact' },
      { id: 'compare', does: 'Compare the two.', working: '{totalText} is close to ${roughShare}, so the share is sensible.' }],
    reason: 'Rounded, the bill is about ${near}, and ${near} ÷ {people} = ${roughShare}. Exactly, each person pays {totalText}. The two are close, so the share is sensible.',
    roughReason: 'Rounded, the bill is about ${near}, and ${near} ÷ {people} = ${roughShare}. The exact share is {totalText}. A rough answer only has to be near it, within about a fifth.'
  };

  /* ---------- a receipt with its total printed: is it right? ---------- */
  const SMALL = [199, 649, 10], MID = [899, 1499, 10];
  const TOTAL_PARAMS = { a: SMALL, b: SMALL, c: SMALL, d: SMALL, mid: MID, at: [0, 4, 1], bn: [0, 5, 1], ...NAME_PARAMS };
  // the lines of a printed-total receipt, the total they really make, and the words every form of the question shares
  const receiptValues = pick => {
    const cents = place(['a', 'b', 'c', 'd'].map(pick), pick('at'), pick('mid')), total = sum(cents), rounded = cents.map(dollars);
    const names = place(pickNames(FOOD, pick, 4), pick('at'), BIG[pick('bn')]);
    return { cents, total, rough: sum(rounded), roundedSum: rounded.map(r => '$' + r).join(' + '), midName: BIG[pick('bn')], midText: usd(pick('mid')),
      shop: MARKETS[pick('store')], lines: { n1: names[0], n2: names[1], n3: names[2], n4: names[3], n5: names[4],
        p1: usd(cents[0]), p2: usd(cents[1]), p3: usd(cents[2]), p4: usd(cents[3]), p5: usd(cents[4]) } };
  };
  const printed = (id, kind, extra) => ({ id, strand: 'check-total', facets: { kind }, params: TOTAL_PARAMS, ...extra,
    blocks: [{ kind: 'document', form: 'receipt', title: '{shop}', rows: [...[1, 2, 3, 4, 5].map(k => ({ id: `l${k}`, cells: [`{n${k}}`, `{p${k}}`] })), { id: 'tot', cells: ['Total', '{shownText}'], strong: true }] }] });
  const verdictAsk = (right, slips, then) => ({ id: 'verdict', kind: 'choose', prompt: 'Is the printed total right?', from: 'verdict', right, slips, then });

  const totalRight = printed('g-total-right', 'right-total', {
    params: TOTAL_PARAMS,
    make: pick => { const r = receiptValues(pick); return { ...r.lines, shop: r.shop, rough: r.rough, roundedSum: r.roundedSum, totalText: usd(r.total), shownText: usd(r.total) }; },
    asks: [verdictAsk('right', { wrong: 'doubted-total' }, { wrong: 'The lines do add up to {totalText}, the same as the receipt.' })],
    steps: [
      { id: 'round', does: 'Round each line to the nearest dollar and add.', working: '{roundedSum} = ${rough}.' },
      { id: 'compare', does: 'Compare with the printed total.', working: 'The receipt says {shownText}, close to ${rough}. The total is right.', ask: 'verdict' }],
    deciding: ['tot'],
    reason: 'The lines add up to {totalText}, and the receipt says {shownText}. They match, so the total is right.'
  });
  const FAULTS = ['digit', 'missed'];
  const totalWrong = printed('g-total-wrong', 'wrong-total', {
    params: { ...TOTAL_PARAMS, fault: FAULTS, tens: [10, 20, 30, 40] },
    make: pick => {
      const r = receiptValues(pick), digit = pick('fault') === 'digit', shown = digit ? r.total + pick('tens') * 100 : r.total - pick('mid');
      const off = Math.abs(shown - r.total) / 100;
      return { ...r.lines, shop: r.shop, rough: r.rough, roundedSum: r.roundedSum, totalText: usd(r.total), shownText: usd(shown), off, offText: usd(Math.abs(shown - r.total)),
        bad: digit ? 'tot' : `l${pick('at') + 1}`, midName: r.midName, midText: r.midText,
        why: digit ? `The total line is off by ${usd(Math.abs(shown - r.total))}: a digit slipped.` : `The ${r.midName} line, ${r.midText}, was left out of the total.` };
    },
    asks: [verdictAsk('wrong', { right: 'trusted-total' }, { right: 'The lines add up to {totalText}, not {shownText}.' }),
      { id: 'by', kind: 'number', prompt: 'By about how many dollars is the printed total off?', frame: '$__', places: 2, answer: 'off', tol: { abs: 1, rel: 0.25 }, when: { ask: 'verdict', is: ['wrong'] } }],
    steps: [
      { id: 'round', does: 'Round each line to the nearest dollar and add.', working: '{roundedSum} = ${rough}.' },
      { id: 'compare', does: 'Compare with the printed total.', working: 'The receipt says {shownText}, far from ${rough}. Something is wrong.', ask: 'verdict' },
      { id: 'find', does: 'Find the line that does not fit.', working: '{why}', ask: 'by' }],
    deciding: ['{bad}'],
    reason: 'The lines add up to {totalText}, but the receipt says {shownText}. {why}'
  });
  // the verdict alone, for the check: "the one that is wrong is caught"
  const verdictOnly = def => ({ ...def, id: `${def.id}-v`, asks: def.asks.filter(a => a.id === 'verdict'), steps: def.steps.map(({ ask, ...rest }) => ask === 'by' ? rest : { ...rest, ...(ask ? { ask } : {}) }) });

  FC.gen('math', [stripped(cart), stripped(roughOnly(cart, 'total')), stripped(order), stripped(roughOnly(order, 'total')), stripped(split), stripped(roughOnly(split, 'share')),
    totalRight, verdictOnly(totalRight), totalWrong, verdictOnly(totalWrong)]);
})();
