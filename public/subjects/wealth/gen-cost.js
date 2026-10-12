// Wealth, lesson 2 "What it costs a year, in dollars": a plan's statement and its fee sheet, made with fresh numbers each time (lesson standard
// 3, a generator). An account holds two funds, a stock fund and a bond fund. The learner finds each fund's yearly cost on the fee sheet,
// turns the two into dollars, adds the plan's own fee, and decides: change a fund, or leave it alone. Two generators, one for each decision.
// Dollars are whole dollars and yearly costs whole hundredths of a percent, so no rounding decides a mark; every number is a pure function
// of the seed. The worked example (items-cost.js) is the same account with its numbers fixed.
(() => {
  const exact = dollars => '$' + dollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const percent = hundredths => `${(hundredths / 100).toFixed(2)}%`;
  const lowerFirst = text => text.charAt(0).toLowerCase() + text.slice(1);
  const PLANS = ['Lakeside Manufacturing', 'Northgate Medical', 'Cedar and Pine Hardware', 'Brightwater Logistics'];
  const KINDS = [
    { kind: 'Large US companies', active: 'Summit Growth Fund', index: 'Index 500 Fund', dear: 'Summit Select Growth Fund' },
    { kind: 'Small US companies', active: 'Ridgeway Small Cap Fund', index: 'Small Company Index Fund', dear: 'Ridgeway Opportunity Fund' },
    { kind: 'Companies outside the US', active: 'Globe Select Fund', index: 'International Index Fund', dear: 'Globe Select Premier Fund' }];
  const BOND = { active: 'Harbor Bond Fund', index: 'Total Bond Index Fund' };
  const DEAR_EXTRA = 25;   // the dearer fund of the same kind costs this many hundredths of a percent more than the active one

  // balances are whole hundreds of five, costs whole hundredths of a percent: balance / 100 x hundredths is a whole number of cents
  const PARAMS = {
    kind: [0, 2, 1], plan: [0, 3, 1], first: [1, 2, 1], stockBalance: [18000, 46000, 500], bondBalance: [9000, 24000, 500],
    active: [70, 125, 5], index: [2, 4, 1], bondIndex: [6, 9, 1], bondActive: [45, 75, 5], fee: [90, 180, 10]
  };
  const centsOf = (balance, hundredths) => balance / 100 * hundredths;

  // everything the screens and the answers need, for the account where the stock fund held is the costly one (`change`) or the index fund
  function account(pick, change) {
    const k = KINDS[pick('kind')], active = pick('active'), index = pick('index'), bondIndex = pick('bondIndex'), bondActive = pick('bondActive');
    const heldRate = change ? active : index, balA = pick('stockBalance'), balB = pick('bondBalance'), fee = pick('fee');
    const aCents = centsOf(balA, heldRate), bCents = centsOf(balB, bondIndex), totalCents = aCents + bCents + fee * 100;
    const stockFirst = pick('first') === 1;
    const one = stockFirst ? { name: change ? k.active : k.index, bal: balA, rate: heldRate, cents: aCents } : { name: BOND.index, bal: balB, rate: bondIndex, cents: bCents };
    const two = stockFirst ? { name: BOND.index, bal: balB, rate: bondIndex, cents: bCents } : { name: change ? k.active : k.index, bal: balA, rate: heldRate, cents: aCents };
    const saveCents = centsOf(balA, active - index);
    return {
      planName: PLANS[pick('plan')], kindName: k.kind, kindLower: lowerFirst(k.kind), balTotalText: whole(balA + balB), feeText: whole(fee), fee,
      activeName: k.active, indexName: k.index, dearName: k.dear, bondActiveName: BOND.active, bondIndexName: BOND.index,
      activeText: percent(active), indexText: percent(index), dearText: percent(active + DEAR_EXTRA), bondActiveText: percent(bondActive), bondIndexText: percent(bondIndex),
      name1: one.name, name2: two.name, bal1Text: whole(one.bal), bal2Text: whole(two.bal), rate1: one.rate / 100, rate2: two.rate / 100,
      rate1Text: percent(one.rate), rate2Text: percent(two.rate), rate1Plain: (one.rate / 100).toFixed(2), cost1Text: exact(one.cents / 100), cost2Text: exact(two.cents / 100),
      total: totalCents / 100, totalText: exact(totalCents / 100),
      percentWhole: balA * heldRate / 100 + balB * bondIndex / 100 + fee,       // the percents used as if they were dollars
      noFee: totalCents / 100 - fee,                                            // the plan's own fee left out
      topRateOnAll: (balA + balB) * heldRate / 10000 + fee,                     // the costly fund's yearly cost used on everything
      saveText: exact(saveCents / 100), heldRateText: percent(heldRate)
    };
  }

  const statement = {
    kind: 'document', form: 'statement', tab: 'Statement', title: '{planName} 401(k)', head: ['Your funds', 'Balance'],
    rows: [{ id: 'f1', cells: ['{name1}', '{bal1Text}'] }, { id: 'f2', cells: ['{name2}', '{bal2Text}'] }, { id: 'tot', strong: true, cells: ['Total', '{balTotalText}'] }],
    notes: ['Balances on the last day of the quarter.']
  };
  const feeSheet = {
    kind: 'document', form: 'fees', tab: 'Fee sheet', title: '{planName}: what the funds cost', head: ['Fund', 'Kind', 'Yearly cost'],
    rows: [{ id: 'm1', cells: ['{activeName}', '{kindName}', '{activeText}'] }, { id: 'm2', cells: ['{indexName}', '{kindName}', '{indexText}'] },
      { id: 'm3', cells: ['{dearName}', '{kindName}', '{dearText}'] }, { id: 'm4', cells: ['{bondActiveName}', 'Bonds', '{bondActiveText}'] },
      { id: 'm5', cells: ['{bondIndexName}', 'Bonds', '{bondIndexText}'] }, { id: 'fee', cells: ['Plan fee', 'Taken from your balance', '{feeText} a year'] }],
    notes: ['A yearly cost is a percent of what you hold in the fund. It is taken out of the fund every year.']
  };
  const ratesAsk = {
    id: 'rates', kind: 'form', prompt: 'Find the yearly cost of each fund you hold on the fee sheet, and type it in.',
    fields: [
      { id: 'r1', label: '{name1}', type: 'number', frame: '__%', places: 2, answer: 'rate1', tol: { abs: 0.005 },
        traps: [{ slip: 'wrong-row', value: 'rate2', then: 'That is the yearly cost of {name2}. Find the line for {name1}.' }] },
      { id: 'r2', label: '{name2}', type: 'number', frame: '__%', places: 2, answer: 'rate2', tol: { abs: 0.005 },
        traps: [{ slip: 'wrong-row', value: 'rate1', then: 'That is the yearly cost of {name1}. Find the line for {name2}.' }] }]
  };
  const costAsk = traps => ({
    id: 'cost', kind: 'number', prompt: 'What do your two funds and the plan fee cost you in a year, in dollars? Turn each yearly cost into dollars, then add the plan fee.',
    frame: '$__', places: 2, unit: 'a year', answer: 'total', tol: { rel: 0.1 },
    traps: [{ slip: 'percent-as-dollars', value: 'percentWhole', then: 'That uses each percent as if it were dollars. A percent is a hundredth: {rate1Text} of {bal1Text} is {cost1Text}, not {bal1Text} times {rate1Plain}.' },
      { slip: 'left-out-fee', value: 'noFee', then: 'That is what the two funds cost. The plan takes {feeText} a year on top, and it comes out of your balance too.' }, ...traps]
  });
  const stepsFor = (change) => [
    { id: 'find', does: 'Find each fund’s yearly cost on the fee sheet.', working: '{name1} costs {rate1Text}. {name2} costs {rate2Text}.', ask: 'rates' },
    { id: 'dollars', does: 'Turn each cost into dollars, and add the plan fee.',
      working: '{name1}: {bal1Text} × {rate1Text} = {cost1Text}. {name2}: {bal2Text} × {rate2Text} = {cost2Text}. Plan fee {feeText}. Together {totalText} a year.', ask: 'cost' },
    { id: 'compare', does: 'Look for a fund of the same kind that costs less.',
      working: change ? '{activeName} holds {kindLower} and costs {activeText}. {indexName} holds the same and costs {indexText}.'
        : 'No fund on the list holds the same thing for less. {indexName} costs {indexText}, the lowest of its kind. {bondIndexName} costs {bondIndexText}, the lowest of the bonds.', ask: 'call' },
    ...(change ? [{ id: 'switch', does: 'Name the fund to switch to.', working: '{indexName}: the same kind, at {indexText}. {bondIndexName} costs {bondIndexText} but it holds bonds, so it is not a swap.', ask: 'switch' }] : [])
  ];
  const switchAsk = {
    id: 'switch', kind: 'choose', prompt: 'Which fund would you switch {activeName} to?', shuffle: true, when: { ask: 'call', is: ['change'] },
    options: [
      { id: 'same', text: '{indexName}', ok: true, then: 'It holds the same kind of companies and costs {indexText} instead of {activeText}. On what you hold in {activeName}, that saves about {saveText} a year.' },
      { id: 'bonds', text: '{bondIndexName}', slip: 'wrong-kind', then: 'It costs {bondIndexText}, but it holds bonds, not {kindLower}. It would change what your money is in, which is a different decision.' },
      { id: 'dearer', text: '{dearName}', then: 'It holds the same kind of companies, but it costs {dearText}, more than {activeName}.' }]
  };

  const generator = (change, id, extra) => ({
    id, strand: 'cost', facets: { call: change ? 'change' : 'leave' }, params: PARAMS, make: pick => account(pick, change),
    blocks: [statement, feeSheet],
    asks: [ratesAsk, extra.cost, extra.call, ...(change ? [switchAsk] : [])],
    steps: stepsFor(change), deciding: change ? ['f1', 'f2', 'm1', 'm2', 'm5', 'fee'] : ['f1', 'f2', 'm2', 'm5', 'fee'], reason: extra.reason
  });
  FC.gen('wealth', [
    generator(true, 'g-cost-change', {
      cost: costAsk([{ slip: 'top-rate-on-all', value: 'topRateOnAll', then: 'That uses {heldRateText}, the cost of {activeName}, on everything in the account. Each fund has its own yearly cost.' }]),
      call: { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'change', slips: { leave: 'overpaid' },
        then: { leave: '{activeName} costs {activeText}. {indexName} holds the same kind of companies for {indexText}.' } },
      reason: 'Your two funds and the plan fee cost {totalText} a year. {activeName} costs {activeText}, and {indexName} holds the same kind of companies for {indexText}, so switching saves about {saveText} a year.'
    }),
    generator(false, 'g-cost-leave', {
      cost: costAsk([]),
      call: { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'leave', slips: { change: 'churned' },
        then: { change: 'Both funds are already the lowest on the list for what they hold. A switch would only cost you time.' } },
      reason: 'Your two funds and the plan fee cost {totalText} a year. Each fund is the cheapest of its kind on the list, so there is nothing to switch. The plan fee belongs to the plan, and you cannot change it.'
    })
  ]);
})();
