// Wealth, lesson 3 "What it costs a year, in dollars": a 401(k) statement and the plan's fee sheet, made with fresh numbers each time (lesson
// standard 3, a generator). The account holds two funds, a stock fund and a bond fund. The learner finds each fund's expense ratio on the
// fee sheet, turns the two into dollars, adds the plan's administrative fee (research W44), and decides: change a fund, or leave it alone,
// and to which fund (W6 to W12). Every kind on the sheet has three funds with plain made-up names, and which name is the cheap one is drawn,
// so a fund's name never tells its cost; in the change account either the stock fund or the bond fund held is the costly one.
// Dollars are whole dollars and costs whole hundredths of a percent, so no rounding decides a mark; every number is a pure function of the
// seed. The worked example (items-cost.js) is the same account with its numbers fixed.
(() => {
  const exact = dollars => '$' + dollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const percent = hundredths => `${(hundredths / 100).toFixed(2)}%`;
  const lowerFirst = text => text.charAt(0).toLowerCase() + text.slice(1);
  const PLANS = ['Lakeside Manufacturing', 'Northgate Medical', 'Cedar and Pine Hardware', 'Brightwater Logistics'];
  const STOCK_KINDS = [
    { kind: 'Large US companies', names: ['Summit Large Company Fund', 'Crestline 500 Fund', 'Pioneer US Growth Fund'] },
    { kind: 'Small US companies', names: ['Ridgeway Small Company Fund', 'Northfield Small Cap Fund', 'Granite Emerging Growth Fund'] },
    { kind: 'Companies outside the US', names: ['Globe Select Fund', 'Harborview International Fund', 'Meridian World Stock Fund'] }];
  const BONDS = { kind: 'Bonds', names: ['Harbor Bond Fund', 'Keystone Total Bond Fund', 'Bayline Income Fund'] };
  // which of the three names is the cheap one, the middle one and the dear one
  const PERMS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
  const DEAR_EXTRA = 25;   // the dear fund of a kind costs this many hundredths of a percent more than the middle one

  // balances are whole hundreds of five, costs whole hundredths of a percent: balance / 100 x hundredths is a whole number of cents
  const PARAMS = {
    kind: [0, 2, 1], plan: [0, 3, 1], first: [1, 2, 1], perm: [0, 5, 1], bperm: [0, 5, 1], costly: [0, 1, 1],
    stockBalance: [18000, 46000, 500], bondBalance: [9000, 24000, 500],
    mid: [70, 125, 5], cheap: [2, 4, 1], bondCheap: [6, 9, 1], bondMid: [45, 75, 5], fee: [90, 180, 10]
  };
  const centsOf = (balance, hundredths) => balance / 100 * hundredths;
  // one kind's three funds: { kind, rows: [{ name, rate }] in the sheet's order, cheap, mid, dear: { name, rate } }
  function kindOf(base, perm, cheap, mid){
    const [c, m, d] = PERMS[perm], rate = { [c]: cheap, [m]: mid, [d]: mid + DEAR_EXTRA };
    const rows = base.names.map((name, i) => ({ name, rate: rate[i] }));
    return { kind: base.kind, rows, cheap: rows[c], mid: rows[m], dear: rows[d] };
  }

  // everything the screens and the answers need. In the change account the costly fund held is the stock fund (`costly` 0) or the bond
  // fund (1), the middle cost of its kind; every other fund held is the cheapest of its kind.
  function account(pick, change) {
    const stock = kindOf(STOCK_KINDS[pick('kind')], pick('perm'), pick('cheap'), pick('mid')), bond = kindOf(BONDS, pick('bperm'), pick('bondCheap'), pick('bondMid'));
    const costlyAt = change ? pick('costly') : -1, balA = pick('stockBalance'), balB = pick('bondBalance'), fee = pick('fee');
    const heldA = costlyAt === 0 ? stock.mid : stock.cheap, heldB = costlyAt === 1 ? bond.mid : bond.cheap;
    const aCents = centsOf(balA, heldA.rate), bCents = centsOf(balB, heldB.rate), totalCents = aCents + bCents + fee * 100;
    const funds = [{ ...heldA, bal: balA, cents: aCents }, { ...heldB, bal: balB, cents: bCents }], [one, two] = pick('first') === 1 ? funds : [funds[1], funds[0]];
    const costly = costlyAt === 1 ? { kind: bond, other: stock, held: heldB, bal: balB } : { kind: stock, other: bond, held: heldA, bal: balA };
    return {
      planName: PLANS[pick('plan')], balTotalText: whole(balA + balB), feeText: whole(fee), fee, quarterFeeText: exact(fee / 4),
      ...Object.fromEntries([...stock.rows.map((r, i) => [`s${i}`, r]), ...bond.rows.map((r, i) => [`b${i}`, r])].flatMap(([k, r]) => [[`${k}Name`, r.name], [`${k}Rate`, percent(r.rate)]])),
      stockKind: stock.kind,
      name1: one.name, name2: two.name, bal1Text: whole(one.bal), bal2Text: whole(two.bal), rate1: one.rate / 100, rate2: two.rate / 100,
      rate1Text: percent(one.rate), rate2Text: percent(two.rate), rate1Plain: (one.rate / 100).toFixed(2), cost1Text: exact(one.cents / 100), cost2Text: exact(two.cents / 100),
      total: totalCents / 100, totalText: exact(totalCents / 100),
      percentWhole: balA * heldA.rate / 100 + balB * heldB.rate / 100 + fee,          // the percents used as if they were dollars
      noFee: totalCents / 100 - fee,                                                  // the plan's own fee left out
      topRateOnAll: (balA + balB) * costly.held.rate / 10000 + fee,                   // the costly fund's cost used on everything
      heldName: costly.held.name, heldRateText: percent(costly.held.rate), kindLower: lowerFirst(costly.kind.kind),
      cheapName: costly.kind.cheap.name, cheapRateText: percent(costly.kind.cheap.rate), dearName: costly.kind.dear.name, dearRateText: percent(costly.kind.dear.rate),
      otherName: costly.other.cheap.name, otherRateText: percent(costly.other.cheap.rate), otherKind: lowerFirst(costly.other.kind),
      stockCheapName: stock.cheap.name, stockCheapText: percent(stock.cheap.rate), bondCheapName: bond.cheap.name, bondCheapText: percent(bond.cheap.rate),
      saveText: exact(centsOf(costly.bal, costly.held.rate - costly.kind.cheap.rate) / 100)
    };
  }

  const statement = {
    kind: 'document', form: 'statement', tab: 'Statement', title: '{planName} 401(k)', head: ['Your funds', 'Balance'],
    rows: [{ id: 'f1', cells: ['{name1}', '{bal1Text}'] }, { id: 'f2', cells: ['{name2}', '{bal2Text}'] }, { id: 'tot', strong: true, cells: ['Total', '{balTotalText}'] },
      { id: 'qfee', cells: ['Administrative fee taken this quarter', '{quarterFeeText}'] }],
    notes: ['Balances on the last day of the quarter.']
  };
  const feeSheet = {
    kind: 'document', form: 'fees', tab: 'Fee sheet', title: '{planName}: what the funds cost', head: ['Fund', 'Kind', 'Expense ratio'],
    rows: [0, 1, 2].map(i => ({ id: `m${i + 1}`, cells: [`{s${i}Name}`, '{stockKind}', `{s${i}Rate}`] }))
      .concat([0, 1, 2].map(i => ({ id: `m${i + 4}`, cells: [`{b${i}Name}`, 'Bonds', `{b${i}Rate}`] })))
      .concat([{ id: 'fee', cells: ['Administrative fee', 'Taken from your account', '{feeText} a year'] }]),
    notes: ['The expense ratio is a percent of what you hold in the fund, taken out of it every year.', 'The administrative fee pays for running the plan. It is shown here, and on your quarterly statement.']
  };
  const ratesAsk = {
    id: 'rates', kind: 'form', prompt: 'Find the expense ratio of each fund you hold on the fee sheet, and type it in.',
    fields: [
      { id: 'r1', label: '{name1}', type: 'number', frame: '__%', places: 2, answer: 'rate1', tol: { abs: 0.005 },
        traps: [{ slip: 'wrong-row', value: 'rate2', then: 'That is the expense ratio of {name2}. Find the line for {name1}.' }] },
      { id: 'r2', label: '{name2}', type: 'number', frame: '__%', places: 2, answer: 'rate2', tol: { abs: 0.005 },
        traps: [{ slip: 'wrong-row', value: 'rate1', then: 'That is the expense ratio of {name1}. Find the line for {name2}.' }] }]
  };
  const costAsk = traps => ({
    id: 'cost', kind: 'number', prompt: 'What do your two funds and the administrative fee cost you in a year, in dollars? Turn each expense ratio into dollars, then add the fee.',
    frame: '$__', places: 2, unit: 'a year', answer: 'total', tol: { abs: 1 },
    traps: [{ slip: 'percent-as-dollars', value: 'percentWhole', then: 'That uses each percent as if it were dollars. A percent is a hundredth: {rate1Text} of {bal1Text} is {cost1Text}, not {bal1Text} times {rate1Plain}.' },
      { slip: 'left-out-fee', value: 'noFee', then: 'That is what the two funds cost. The plan takes {feeText} a year on top, and it comes out of your account too.' }, ...traps]
  });
  const stepsFor = (change) => [
    { id: 'find', does: 'Find each fund’s expense ratio on the fee sheet.', working: '{name1} costs {rate1Text}. {name2} costs {rate2Text}.', ask: 'rates' },
    { id: 'dollars', does: 'Turn each cost into dollars, and add the administrative fee.',
      working: '{name1}: {bal1Text} × {rate1Text} = {cost1Text}. {name2}: {bal2Text} × {rate2Text} = {cost2Text}. Fee {feeText}. Together {totalText} a year.', ask: 'cost' },
    { id: 'compare', does: 'For each fund held, look for one of the same kind that costs less.',
      working: change ? '{heldName} holds {kindLower} and costs {heldRateText}. {cheapName} holds the same and costs {cheapRateText}.'
        : 'No fund on the list holds the same thing for less. {stockCheapName} costs {stockCheapText}, the lowest of its kind. {bondCheapName} costs {bondCheapText}, the lowest of the bonds.', ask: 'call' },
    ...(change ? [{ id: 'switch', does: 'Name the fund to switch to.', working: '{cheapName}: the same kind, at {cheapRateText}. {otherName} holds {otherKind}, so it is not a swap. Inside a 401(k) the switch is not taxed.', ask: 'switch' }] : [])
  ];
  const switchAsk = {
    id: 'switch', kind: 'choose', prompt: 'Which fund would you switch {heldName} to?', shuffle: true, when: { ask: 'call', is: ['change'] },
    options: [
      { id: 'same', text: '{cheapName}', ok: true, then: 'It holds the same kind and costs {cheapRateText} instead of {heldRateText}. On what you hold in {heldName}, that saves about {saveText} a year.' },
      { id: 'other', text: '{otherName}', slip: 'wrong-kind', then: 'It costs {otherRateText}, but it holds {otherKind}, not {kindLower}. It would change what your money is in, which is a different decision.' },
      { id: 'dearer', text: '{dearName}', slip: 'overpaid', then: 'It holds the same kind, but it costs {dearRateText}, more than {heldName}.' }]
  };

  const generator = (change, id, extra) => ({
    id, strand: 'cost', facets: { call: change ? 'change' : 'leave' }, params: PARAMS, make: pick => account(pick, change),
    blocks: [statement, feeSheet],
    asks: [ratesAsk, extra.cost, extra.call, ...(change ? [switchAsk] : [])],
    steps: stepsFor(change), deciding: ['f1', 'f2', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'fee'], reason: extra.reason
  });
  FC.gen('wealth', [
    generator(true, 'g-cost-change', {
      cost: costAsk([{ slip: 'top-rate-on-all', value: 'topRateOnAll', then: 'That uses {heldRateText}, the cost of {heldName}, on everything in the account. Each fund has its own expense ratio.' }]),
      call: { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'change', slips: { leave: 'overpaid' },
        then: { leave: '{heldName} costs {heldRateText}. {cheapName} holds the same kind for {cheapRateText}.' } },
      reason: 'Your two funds and the fee cost {totalText} a year. {heldName} costs {heldRateText}, and {cheapName} holds the same kind for {cheapRateText}, so switching saves about {saveText} a year.'
    }),
    generator(false, 'g-cost-leave', {
      cost: costAsk([]),
      call: { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'leave', slips: { change: 'churned' },
        then: { change: 'Both funds are already the lowest on the list for what they hold. A switch would gain nothing.' } },
      reason: 'Your two funds and the fee cost {totalText} a year. Each fund is the cheapest of its kind on the list, so there is nothing to switch. The administrative fee belongs to the plan, and you cannot change it.'
    })
  ]);
})();
