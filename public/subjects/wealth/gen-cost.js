// Wealth, lesson 2 "What it costs a year, in dollars": an account's statement, the fee papers that go with it, and a decision, made with fresh
// numbers each time (lesson standard 26.1, a generator). The papers are worded as real ones are: a fund's category (Large Blend, Large Growth,
// Target Date 2055), its gross and its net expense ratio, and a fee that comes as a flat yearly amount, a charge each quarter, or a percent of the
// whole account. The learner finds the net ratio of each fund held, turns it into dollars, adds the account's fee, and decides: change a fund, or
// leave it alone. Five generators: an account with a costly fund to change; one to leave (a cheap fund); one to leave that is an active fund,
// the cheapest of its category; three funds held with one to change; and a target-date fund. Which fund is the cheap one is drawn, and funds are
// named so that no word in a name tells how much it costs. Dollars are whole cents and ratios whole hundredths of a percent, so no rounding
// decides a mark; every number is a pure function of the seed. The worked example (items-cost.js) is the same shape with its numbers fixed.
(() => {
  const exact = dollars => '$' + dollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const percent = hundredths => `${(hundredths / 100).toFixed(2)}%`;
  const PLANS = ['Lakeside Manufacturing', 'Northgate Medical', 'Cedar and Pine Hardware', 'Brightwater Logistics'];
  const BROKERS = ['Harborview Brokerage', 'Evergreen Investing', 'Lakeshore Securities'];
  // the category on the papers, and three funds of it; a category's neighbor is one a beginner could mistake it for
  const STOCKS = [
    { cat: 'Large Blend', names: ['Northfield 500 Fund', 'Summit Core Equity Fund', 'Total Stock Market Fund'] },
    { cat: 'Large Growth', names: ['Ridgeway Growth Fund', 'Growth 100 Fund', 'Summit Growth Fund'] },
    { cat: 'Foreign Large Blend', names: ['Globe International Fund', 'Allworld ex-US Fund', 'Meridian Overseas Fund'] },
    { cat: 'Small Blend', names: ['Small Company Fund', 'Cedar Small Cap Fund', 'Small Cap 600 Fund'] }];
  const NEIGHBOR = [1, 0, 0, 0];
  const BOND = { cat: 'Intermediate Core Bond', names: ['Harbor Bond Fund', 'Total Bond Market Fund'] };
  const TARGET = { held: 'Evergreen Target 2055 Fund', dear: 'Cedar Target Retirement 2055 Fund', other: 'Evergreen Target 2060 Fund', catHeld: 'Target Date 2055', catOther: 'Target Date 2060' };
  const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
  const ACCOUNTS = [
    { title: who => `${who} 401(k)`, costs: who => `${who}: what the funds cost`, fees: who => `${who}: fees on your account`, fee: 'Recordkeeping fee' },
    { title: who => `${who} IRA`, costs: who => `${who}: fund pages`, fees: who => `${who}: fees on your account`, fee: 'Account fee' },
    { title: who => `${who} brokerage account`, costs: who => `${who}: fund pages`, fees: who => `${who}: fees on your account`, fee: 'Account fee' }];
  const TAX = ' This is a taxable account: selling a fund can owe tax on its gains, so check that before you switch.';
  const centsOf = (balance, hundredths) => balance / 100 * hundredths;

  // the account fee: what the papers say, the dollars a year, and the line the learner reads in the working
  const FEES = {
    flat: (amount, balance, label) => ({ cells: [label, 'Your balance', `${whole(amount)} a year`], dollars: amount, working: `${label} ${whole(amount)} a year.`, text: `${whole(amount)} a year` }),
    quarter: (amount, balance, label) => ({ cells: [label, 'Your balance', `${whole(amount)} each quarter`], dollars: amount * 4,
      working: `${label} ${whole(amount)} × 4 quarters = ${whole(amount * 4)} a year.`, text: `${whole(amount * 4)} a year (${whole(amount)} each quarter)` }),
    percent: (hundredths, balance) => ({ cells: ['Advisory fee', 'Your balance', `${percent(hundredths)} of your account a year`], dollars: balance * hundredths / 10000,
      working: `Advisory fee ${percent(hundredths)} of ${whole(balance)} = ${exact(balance * hundredths / 10000)} a year.`, text: `${exact(balance * hundredths / 10000)} a year (${percent(hundredths)} of the account)` })
  };

  // the funds held, in the order of the statement, with what each costs; the account's fee; and what the learner may do wrong
  function accountValues(pick, held, tableRows, fee, extra) {
    const acct = ACCOUNTS[pick('acct')], who = pick('acct') === 0 ? PLANS[pick('plan')] : BROKERS[pick('plan') % BROKERS.length];
    const balance = held.reduce((n, h) => n + h.bal, 0), cents = held.reduce((n, h) => n + centsOf(h.bal, h.rate), 0), feeCents = Math.round(fee.dollars * 100);
    const totalCents = cents + feeCents, byPosition = Object.fromEntries(held.flatMap((h, i) => [
      [`sn${i + 1}`, h.name], [`sb${i + 1}`, whole(h.bal)], [`sr${i + 1}`, h.rate / 100], [`srT${i + 1}`, percent(h.rate)], [`sc${i + 1}`, exact(centsOf(h.bal, h.rate) / 100)], [`sm${i + 1}`, `m${h.row}`]]));
    const fundsWorking = held.map(h => `${h.name}: ${whole(h.bal)} × ${percent(h.rate)} = ${exact(centsOf(h.bal, h.rate) / 100)}.`).join(' ');
    return {
      ...byPosition, ...tableRows, ...extra,
      statementTitle: acct.title(who), costsTitle: acct.costs(who), feesTitle: acct.fees(who), balTotalText: whole(balance), feeCells0: fee.cells[0], feeCells2: fee.cells[2],
      feeText: fee.text, feeDollars: fee.dollars, feeWorking: fee.working, fundsWorking,
      ratesWorking: held.map(h => `${h.name} costs ${percent(h.rate)}.`).join(' '),
      total: totalCents / 100, totalText: exact(totalCents / 100),
      percentWhole: held.reduce((n, h) => n + h.bal * h.rate / 100, 0) + fee.dollars,   // the percents used as if they were dollars
      noFee: totalCents / 100 - fee.dollars,                                            // the account's own fee left out
      feeMisread: totalCents / 100 - (fee.dollars - fee.dollars / 4) ,                  // a quarterly charge counted once (used by the quarterly generators)
      taxSentence: pick('acct') === 2 ? TAX : '', acctKind: pick('acct')
    };
  }
  // a row of the fee papers: gross, then net
  const sheetRow = (name, cat, net, gross) => ({ name, cat, net, gross: gross === undefined ? net : gross });
  const rowValues = rows => Object.fromEntries(rows.flatMap((r, i) => [[`rn${i + 1}`, r.name], [`rc${i + 1}`, r.cat], [`rg${i + 1}`, percent(r.gross)], [`rr${i + 1}`, percent(r.net)]]));

  /* ---------- an account of a stock fund, a bond fund and perhaps a second stock fund, on the papers of a plan or a broker ---------- */
  // o: { change, three, feeKind }. Seven rows: the three funds of the category held (names in a fixed order, which is the cheap one drawn),
  // two of the neighboring category, two bond funds.
  function categoryAccount(pick, o) {
    const ci = pick('cat'), c = STOCKS[ci], nb = STOCKS[NEIGHBOR[ci]], perm = PERMS[pick('perm')];
    const lo = pick('lo'), mid = lo + pick('gapB'), hi = mid + pick('gapC'), roleRate = [lo, mid, hi], rate = k => roleRate[perm[k]];
    const heldRole = o.change ? 1 : 0, kHeld = perm.indexOf(heldRole), kLow = perm.indexOf(0), kHigh = perm.indexOf(2);
    const nlo = pick('nlo'), nmid = nlo + pick('ngap'), blo = pick('blo'), bmid = blo + pick('bgap'), waive = pick('waive');
    const rows = [...c.names.map((name, k) => sheetRow(name, c.cat, rate(k), k === kHeld ? rate(k) + waive : undefined)),
      sheetRow(nb.names[0], nb.cat, nlo), sheetRow(nb.names[1], nb.cat, nmid), sheetRow(BOND.names[0], BOND.cat, blo), sheetRow(BOND.names[1], BOND.cat, bmid)];
    const stock = { name: rows[kHeld].name, bal: pick('stockBalance'), rate: rate(kHeld), row: kHeld + 1 };
    const bond = { name: BOND.names[0], bal: pick('bondBalance'), rate: blo, row: 6 }, side = { name: nb.names[0], bal: pick('sideBalance'), rate: nlo, row: 4 };
    const held = o.three ? PERMS[pick('order')].map(i => [stock, side, bond][i]) : pick('first') === 1 ? [stock, bond] : [bond, stock];
    const balance = held.reduce((n, h) => n + h.bal, 0), fee = FEES[o.feeKind](pick('feeAmt'), balance, ACCOUNTS[pick('acct')].fee);
    const lowName = rows[kLow].name, highName = rows[kHigh].name, saveCents = centsOf(stock.bal, stock.rate - lo);
    const same = `${c.cat}`, heldText = percent(stock.rate), lowText = percent(lo);
    return accountValues(pick, held, rowValues(rows), fee, {
      catName: c.cat, nbCat: nb.cat, heldName: stock.name, heldRateText: heldText, lowName, lowText, highName, highText: percent(roleRate[2]), nbLowName: nb.names[0], nbLowText: percent(nlo),
      bondName: BOND.names[0], bondText: percent(blo), saveText: exact(saveCents / 100),
      dHeld: `m${stock.row}`, dLow: `m${kLow + 1}`, dSide: 'm4', dBond: 'm6',
      compareText: o.change
        ? `${stock.name} is in ${same} and costs ${heldText}. ${lowName} is in the same category and costs ${lowText}.`
        : `Nothing else in ${same} costs less than ${stock.name} at ${heldText}. ${nb.names[0]} costs ${percent(nlo)}, but it is in ${nb.cat}, not ${same}. ${BOND.names[0]} is the cheapest bond fund.`,
      switchFrom: stock.name
    });
  }
  const categoryRows = () => [1, 2, 3, 4, 5, 6, 7].map(k => ({ id: `m${k}`, cells: [`{rn${k}}`, `{rc${k}}`, `{rg${k}}`, `{rr${k}}`] }));

  /* ---------- one target-date fund held ---------- */
  function targetAccount(pick) {
    const heldRate = pick('lo'), dear = heldRate + pick('gapB'), other = heldRate - pick('gapC'), lbLow = pick('nlo'), lbMid = lbLow + pick('ngap'), lbHigh = lbMid + pick('gapB');
    const rows = [sheetRow(TARGET.held, TARGET.catHeld, heldRate, heldRate + pick('waive')), sheetRow(TARGET.dear, TARGET.catHeld, dear), sheetRow(TARGET.other, TARGET.catOther, other),
      sheetRow(STOCKS[0].names[0], 'Large Blend', lbLow), sheetRow(STOCKS[0].names[1], 'Large Blend', lbMid), sheetRow(STOCKS[0].names[2], 'Large Blend', lbHigh)];
    const held = [{ name: TARGET.held, bal: pick('stockBalance'), rate: heldRate, row: 1 }], fee = FEES.flat(pick('feeAmt'), held[0].bal, ACCOUNTS[pick('acct')].fee);
    return accountValues(pick, held, rowValues(rows), fee, {
      catName: TARGET.catHeld, nbCat: 'Large Blend', heldName: TARGET.held, heldRateText: percent(heldRate), lowName: TARGET.held, lowText: percent(heldRate),
      nbLowName: STOCKS[0].names[0], nbLowText: percent(lbLow), otherName: TARGET.other, otherText: percent(other), otherCat: TARGET.catOther,
      dHeld: 'm1', dLow: 'm2', dSide: 'm3', dBond: 'm4',
      compareText: `${TARGET.held} is the cheapest ${TARGET.catHeld} fund on the list at ${percent(heldRate)}. ${TARGET.other} costs ${percent(other)}, but it is in ${TARGET.catOther}, a different date. ${STOCKS[0].names[0]} costs ${percent(lbLow)}, but it holds stocks only, and the fund you hold mixes stocks and bonds for you.`
    });
  }
  const targetRows = () => [1, 2, 3, 4, 5, 6].map(k => ({ id: `m${k}`, cells: [`{rn${k}}`, `{rc${k}}`, `{rg${k}}`, `{rr${k}}`] }));

  /* ---------- the papers, the asks, the working ---------- */
  const NOTE_RATIO = 'The net expense ratio is the yearly cost after any waiver, a percent of what you hold, taken out of the fund every year: 0.95% is $9.50 a year for every $1,000. The gross ratio is the cost before the waiver.';
  const statementRows = count => [...Array.from({ length: count }, (_, i) => ({ id: `f${i + 1}`, cells: [`{sn${i + 1}}`, `{sb${i + 1}}`] })), { id: 'tot', strong: true, cells: ['Total', '{balTotalText}'] }];
  // the three papers of an account, as tabs: the statement, what the funds cost, and the account's own fee
  const blocksFor = (count, rows) => [
    { kind: 'document', form: 'statement', tab: 'Statement', title: '{statementTitle}', head: ['Your funds', 'Balance'], rows: statementRows(count) },
    { kind: 'document', form: 'fees', tab: 'Fund costs', title: '{costsTitle}', head: ['Fund', 'Category', 'Gross expense ratio', 'Net expense ratio'], rows, notes: [NOTE_RATIO] },
    { kind: 'document', form: 'fees', tab: 'Account fee', title: '{feesTitle}', head: ['Fee', 'Taken from', 'Amount'], rows: [{ id: 'fee', cells: ['{feeCells0}', 'Your balance', '{feeCells2}'] }] }];

  const ratesAsk = count => ({
    id: 'rates', kind: 'form', prompt: 'Find the net expense ratio of each fund you hold, and type it in.',
    fields: Array.from({ length: count }, (_, i) => ({ id: `r${i + 1}`, label: `{sn${i + 1}}`, type: 'number', frame: '__%', places: 2, answer: `sr${i + 1}`, tol: { abs: 0.005 },
      ...(count > 1 ? { traps: [{ slip: 'wrong-row', value: `sr${(i + 1) % count + 1}`, then: `That is the net expense ratio of {sn${(i + 1) % count + 1}}. Find the line for {sn${i + 1}}.` }] } : {}) }))
  });
  const costAsk = (feeKind, count) => ({
    id: 'cost', kind: 'number', frame: '$__', places: 2, unit: 'a year', answer: 'total', tol: { rel: 0.1 },
    prompt: 'What do your ' + (count === 1 ? 'fund and the account fee' : count === 2 ? 'two funds and the account fee' : 'three funds and the account fee') + ' cost you in a year, in dollars? Turn each net expense ratio into dollars, then add the account fee in dollars a year.',
    traps: [{ slip: 'percent-as-dollars', value: 'percentWhole', then: 'That uses each percent as if it were dollars. A percent is a hundredth: {srT1} of {sb1} is {sc1}, not {sb1} times {sr1}.' },
      { slip: 'left-out-fee', value: 'noFee', then: 'That is what the funds cost. The account takes {feeText} on top, and it comes out of your balance too.' },
      ...(feeKind === 'quarter' ? [{ slip: 'quarter-once', value: 'feeMisread', then: 'That counts the quarterly fee once. It is taken every quarter, so four times: {feeText}.' }] : [])]
  });
  const callAsk = (right, then) => ({ id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right, slips: right === 'change' ? { leave: 'overpaid' } : { change: 'churned' }, then });
  const switchAsk = {
    id: 'switch', kind: 'choose', prompt: 'Which fund would you switch {switchFrom} to?', shuffle: true, when: { ask: 'call', is: ['change'] },
    options: [
      { id: 'same', text: '{lowName}', ok: true, then: 'It is in the same category, {catName}, and costs {lowText} instead of {heldRateText}. On what you hold in {switchFrom}, that saves about {saveText} a year.{taxSentence}' },
      { id: 'side', text: '{nbLowName}', slip: 'wrong-kind', then: 'It costs {nbLowText}, but it is in {nbCat}, not {catName}. A different category holds something different, so switching would change what your money is in, which is a different decision.' },
      { id: 'dearer', text: '{highName}', then: 'It is in the same category, but it costs {highText}, more than {switchFrom}.' }]
  };
  const dollarsStep = { id: 'dollars', does: 'Turn each cost into dollars, and add the account fee.', working: '{fundsWorking} {feeWorking} Together {totalText} a year.', ask: 'cost' };
  const findStep = { id: 'find', does: 'Find the net expense ratio of each fund you hold.', working: '{ratesWorking}', ask: 'rates' };

  const PARAMS = {
    cat: [0, 3, 1], perm: [0, 5, 1], plan: [0, 3, 1], acct: [0, 2, 1], first: [0, 1, 1], order: [0, 5, 1], stockBalance: [18000, 46000, 500], bondBalance: [9000, 24000, 500], sideBalance: [9000, 24000, 500],
    lo: [2, 5, 1], gapB: [40, 90, 5], gapC: [10, 40, 5], nlo: [10, 20, 1], ngap: [30, 70, 5], blo: [6, 9, 1], bgap: [30, 60, 5], waive: [0, 15, 5]
  };
  const FEE_PARAMS = { flat: [90, 200, 10], quarter: [20, 50, 5], percent: [50, 100, 5] };

  const categoryGen = (id, o, extra) => ({
    id, strand: 'cost', facets: { call: o.change ? 'change' : 'leave' }, params: { ...PARAMS, ...(extra.params || {}), feeAmt: FEE_PARAMS[o.feeKind] },
    make: pick => categoryAccount(pick, o), blocks: blocksFor(o.three ? 3 : 2, categoryRows()),
    asks: [ratesAsk(o.three ? 3 : 2), costAsk(o.feeKind, o.three ? 3 : 2), extra.call, ...(o.change ? [switchAsk] : [])],
    steps: [findStep, dollarsStep, { id: 'compare', does: 'Look in the same category for a fund that costs less.', working: '{compareText}', ask: 'call' },
      ...(o.change ? [{ id: 'switch', does: 'Name the fund to switch to.', working: '{lowName}: the same category, at {lowText}. {nbLowName} costs {nbLowText}, but it is in {nbCat}, so it is not a swap.', ask: 'switch' }] : [])],
    deciding: o.three ? ['f1', 'f2', 'f3', '{dHeld}', '{dLow}', '{dSide}', '{dBond}', 'fee'] : o.change ? ['f1', 'f2', '{dHeld}', '{dLow}', '{dBond}', 'fee'] : ['f1', 'f2', '{dHeld}', '{dBond}', 'fee'], reason: extra.reason
  });
  const keepLine = 'Each fund you hold is already the cheapest in its category on the list. A switch would only cost you time.';
  const changeCall = { leave: '{heldName} costs {heldRateText}. {lowName} is in the same category, {catName}, and costs {lowText}.' };

  FC.gen('wealth', [
    categoryGen('g-cost-change', { change: true, feeKind: 'quarter' }, {
      call: callAsk('change', changeCall),
      reason: 'Your two funds and the account fee cost {totalText} a year. {heldName} costs {heldRateText}, and {lowName}, in the same category, costs {lowText}, so switching saves about {saveText} a year. {nbLowName} costs less than {heldName} too, but it is in {nbCat}, a different category.'
    }),
    categoryGen('g-cost-leave', { change: false, feeKind: 'flat' }, {
      call: callAsk('leave', { change: keepLine }),
      reason: 'Your two funds and the account fee cost {totalText} a year. {heldName} costs {heldRateText}, the lowest in {catName}, and {bondName} is the lowest of the bond funds, so there is nothing to switch. The account fee belongs to the account, and you cannot change it.'
    }),
    categoryGen('g-cost-active', { change: false, feeKind: 'percent' }, {
      params: { lo: [55, 80, 5], gapB: [15, 40, 5], gapC: [10, 30, 5] },
      call: callAsk('leave', { change: keepLine + ' A fund is not a bad one because it is not cheap; it is the cheapest of its kind here.' }),
      reason: 'Your two funds and the advisory fee cost {totalText} a year. {heldName} is not cheap at {heldRateText}, but it is the lowest in {catName} on this list, so no fund of its kind is a cheaper swap. {nbLowName} costs less, but it is in {nbCat}.'
    }),
    categoryGen('g-cost-three', { change: true, three: true, feeKind: 'quarter' }, {
      call: callAsk('change', changeCall),
      reason: 'Your three funds and the account fee cost {totalText} a year. Only {heldName} has a cheaper fund of its kind: {lowName}, in {catName}, at {lowText} instead of {heldRateText}, a saving of about {saveText} a year. The other two funds are already the lowest in their categories.'
    }),
    {
      id: 'g-cost-target', strand: 'cost', facets: { call: 'leave' }, params: { ...PARAMS, acct: [0, 1, 1], lo: [20, 45, 1], gapB: [15, 40, 1], gapC: [5, 15, 1], feeAmt: FEE_PARAMS.flat }, make: pick => targetAccount(pick),
      blocks: blocksFor(1, targetRows()),
      asks: [ratesAsk(1), costAsk('flat', 1), callAsk('leave', { change: 'The fund you hold is already the cheapest in its category, {catName}. It mixes stocks and bonds for you and moves toward bonds as the year gets near, so swapping it for one kind of fund would change your mix.' })],
      steps: [findStep, dollarsStep, { id: 'compare', does: 'Look in the same category for a fund that costs less.', working: '{compareText}', ask: 'call' }],
      deciding: ['f1', '{dHeld}', '{dLow}', '{dSide}', 'fee'],
      reason: 'Your fund and the account fee cost {totalText} a year. {heldName} is a target-date fund: it mixes stocks and bonds by your age. It is the cheapest in {catName}. {otherName} costs less but is in {otherCat}, a different date, and {nbLowName} holds stocks only. Leave it.'
    }
  ]);
})();
