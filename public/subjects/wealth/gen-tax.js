// Wealth, lesson 5 "Taxes: where each fund sits, sell or wait, a loss used": three kinds of tax question made with fresh numbers (lesson
// standard 3, generators), each with a look-alike.
//   where   two accounts. Bonds in the brokerage account while the 401(k) holds stocks: the swap, which keeps the mix (research W25, W38);
//           bonds already in the 401(k): fine; bonds in the brokerage account while the 401(k) holds only bonds: no stocks to swap with, so
//           leave it. The tax on the bonds' payout is the payout times the rate on the household's tax note (W47).
//   when    a switch to a cheaper fund of the same kind, the gain a month or two short of a year. In a brokerage account the tax saved by
//           waiting is weighed against what the dearer fund costs meanwhile (W2, W39): wait for a big gain, switch now for a small one on a
//           big fund; inside a 401(k): switch now, nothing is taxed there (W38).
//   loss    a sale at a loss with the same fund (or one substantially identical) bought within 30 days before or after: a wash sale, the loss
//           does not count this year (it is added to the new shares' cost); bought later, it does, up to $3,000 (W26, W48). The remedy keeps
//           the mix: wait past 30 days, or a similar fund that follows a different index (a judgement call, W70).
// Balances are whole thousands and rates whole or tenth percents, so every dollar figure is whole cents. The worked example is w-place.
(() => {
  const exact = dollars => '$' + dollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const cents = x => Math.round(x * 100) / 100;
  const PEOPLE = ['Ruth', 'Kofi', 'Ivy', 'Paul'];
  const FIRMS = ['Northpoint Brokerage', 'Granite Investments', 'Bayview Securities'];
  // a top rate on interest and other income, drawn by index (a list of three numbers would be read as a range). Where a long-term gain is
  // taxed at 15% beside it, only 22% or 24%: at 12% a long-term gain is usually taxed at 0% (2026 brackets, research W71).
  const RATES = [12, 22, 24], GAIN_RATES = [22, 24];
  const BOND = 'Keystone Total Bond Fund', BOND2 = 'Harbor Bond Fund', STOCK = 'US Stock Market Fund';
  const callAsk = (change, slipChange, slipLeave, thenChange, thenLeave) => change
    ? { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: slipLeave }, then: { leave: thenLeave } }
    : { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'leave', slips: { change: slipChange }, then: { change: thenChange } };

  /* ---------- where each fund sits ---------- */
  const WHERE = { whoAt: [0, 3, 1], firmAt: [0, 2, 1], bonds: [10000, 40000, 1000], yield: [3.5, 4.5, 0.1], stockTaxable: [20000, 60000, 1000],
    extra: [5000, 40000, 1000], rateAt: [0, 1, 1], bondGain: [100, 250, 10] };
  function accounts(pick){
    const bonds = pick('bonds'), interest = cents(bonds * pick('yield') / 100), rate = GAIN_RATES[pick('rateAt')], stockT = pick('stockTaxable'), stockP = bonds + pick('extra');
    return { who: PEOPLE[pick('whoAt')], firmName: FIRMS[pick('firmAt')], bondsText: whole(bonds), interestText: exact(interest), rate, stockTText: whole(stockT),
      stockPText: whole(stockP), saved: cents(interest * rate / 100), savedText: exact(cents(interest * rate / 100)), interest,
      bondGainText: whole(pick('bondGain')), gainTax: cents(pick('bondGain') * 15 / 100), gainTaxText: exact(cents(pick('bondGain') * 15 / 100)), gainAtRate: cents(pick('bondGain') * rate / 100) };
  }
  const payout = id => ({ id, cells: [`Paid out by ${BOND} this year (its interest)`, '{interestText}'] });
  const BROK = {
    swap: [{ id: 'b1', cells: [BOND, '{bondsText}'] }, { id: 'b2', cells: [STOCK, '{stockTText}'] }, payout('b3'), { id: 'b4', cells: [`Gain on ${BOND}, held over a year`, '{bondGainText}'] }],
    fine: [{ id: 'b1', cells: [STOCK, '{stockTText}'] }],
    full: [{ id: 'b1', cells: [BOND, '{bondsText}'] }, { id: 'b2', cells: [STOCK, '{stockTText}'] }, payout('b3')]
  };
  const PLAN = {
    swap: [{ id: 'q1', cells: [STOCK, '{stockPText}'] }],
    fine: [{ id: 'q1', cells: [BOND, '{bondsText}'] }, { id: 'q2', cells: [STOCK, '{stockPText}'] }],
    full: [{ id: 'q1', cells: [BOND2, '{stockPText}'] }]
  };
  const whereDocs = variant => [
    { kind: 'document', form: 'statement', tab: 'Brokerage', title: '{firmName}: {who}’s brokerage account', head: ['Fund', 'Value'], rows: BROK[variant] },
    { kind: 'document', form: 'statement', tab: '401(k)', title: '{who}’s 401(k)', head: ['Fund', 'Value'], rows: PLAN[variant] },
    { kind: 'document', form: 'table', tab: 'Tax note', title: '{who}’s tax note', head: ['Line', 'Rate'], rows: [{ id: 't1', cells: ['Tax rate on interest', '{rate}%'] },
      { id: 't2', cells: ['Tax rate on a gain held more than a year', '15%'] }] }];
  const SWAP = {
    swap: { ok: 'yes', then: 'The bonds’ payout is taxed every year in the brokerage account; in the 401(k) it would not be until money comes out.' },
    fine: { ok: 'placed', then: 'The bonds already sit in the 401(k), and the brokerage account holds stocks.' },
    full: { ok: 'nostock', then: 'The 401(k) holds only bonds: there are no stocks there to trade places with.' }
  };
  const swapAsk = variant => ({
    id: 'where', kind: 'choose', prompt: 'Is there a swap that keeps the mix and takes the bonds out of yearly tax?', shuffle: true,
    options: [
      { id: 'yes', text: `Yes: ${BOND} in the brokerage account, for stocks in the 401(k)` },
      { id: 'nostock', text: 'No: the 401(k) holds no stocks to swap with' },
      { id: 'placed', text: 'No: the bonds already sit in the 401(k)' }]
      .map(o => o.id === SWAP[variant].ok ? { ...o, ok: true, then: SWAP[variant].then }
        : { ...o, ...(variant === 'swap' ? { slip: 'same-mix-each', then: 'The bond fund sits in the brokerage account, and the 401(k) holds stocks to swap with.' }
          : variant === 'fine' ? { slip: 'moved-placed', then: 'The bonds already sit in the 401(k), where their payout is not taxed each year.' }
          : { slip: 'swapped-nothing', then: 'The bonds do sit in the brokerage account, but the 401(k) holds only bonds: nothing to trade places with.' }) })
  });
  const WHERE_STEP = {
    swap: { find: '{bondsText} of bonds sit in the brokerage account, where their payout is taxed every year. The 401(k) holds {stockPText} of stocks.',
      swap: 'Sell the bonds in the brokerage account and buy stocks there; in the 401(k), sell {bondsText} of stocks and buy bonds. The mix stays the same. Selling the bonds is a sale: check its gain first.' },
    fine: { find: 'The bonds sit in the 401(k), where their payout is not taxed each year.', swap: 'Nothing to swap.' },
    full: { find: '{bondsText} of bonds sit in the brokerage account, and the 401(k) holds only bonds.', swap: 'No stocks in the 401(k) to swap with: nothing to change here.' }
  };
  const REASON_WHERE = {
    swap: 'The bond fund’s payout, {interestText}, is taxed every year in the brokerage account: {savedText} at {rate}%. Swapping it with stocks in the 401(k) keeps the same mix and saves most of that, for a one-time {gainTaxText} of tax on the bonds’ gain.',
    fine: 'The bonds already sit in the 401(k), where their payout is not taxed each year, and the brokerage account holds stocks. There is nothing to move.',
    full: 'The bonds in the brokerage account are taxed each year, but the 401(k) holds only bonds, so no swap keeps the mix. There is nothing to change here.'
  };
  const whereGen = (variant, id) => ({
    id, strand: 'tax', facets: { call: variant === 'swap' ? 'change' : 'leave' }, params: WHERE, make: accounts, blocks: whereDocs(variant),
    asks: [swapAsk(variant),
      callAsk(variant === 'swap', variant === 'fine' ? 'moved-placed' : 'swapped-nothing', 'same-mix-each', variant === 'fine' ? 'The bonds already sit in the 401(k), where their payout is not taxed each year.' : 'The 401(k) holds only bonds, so no swap keeps the mix.',
        'The {bondsText} of bonds in the brokerage account pay {interestText}, taxed this year.'),
      ...(variant === 'swap' ? [{ id: 'saved', kind: 'number', prompt: 'How much tax a year is paid on that payout now?', frame: '$__', places: 2, unit: 'a year', answer: 'saved', tol: { abs: 0.5 },
        traps: [{ slip: 'payout-as-tax', value: 'interest', then: 'That is the payout itself. The tax is the payout × {rate}%.' }], when: { ask: 'call', is: ['change'] } },
        { id: 'gainTax', kind: 'number', prompt: 'Selling the bonds taxes their gain once. How much is that tax?', frame: '$__', places: 2, answer: 'gainTax', tol: { abs: 0.5 },
          traps: [{ slip: 'gain-rate-wrong', value: 'gainAtRate', then: 'The bonds were held over a year, so their gain is taxed at the long-term rate on the note, 15%, lower than the {rate}% on interest.' }], when: { ask: 'call', is: ['change'] } }] : [])],
    steps: [
      { id: 'find', does: 'Find the bonds, and the account they sit in.', working: WHERE_STEP[variant].find, ask: 'where' },
      { id: 'swap', does: 'Keep the same mix, and swap only if the 401(k) holds stocks.', working: WHERE_STEP[variant].swap, ask: 'call' },
      ...(variant === 'swap' ? [{ id: 'saved', does: 'Work out the tax on the payout.', working: '{interestText} × {rate}% = {savedText} a year.', ask: 'saved' },
        { id: 'gain', does: 'Check the bonds’ gain first.', working: '{bondGainText} × 15% = {gainTaxText}, once, less than one year’s {savedText}: a one-time tax under a year’s saving always favors the swap.', ask: 'gainTax' }] : [])],
    deciding: variant === 'fine' ? ['b1', 'q1'] : variant === 'swap' ? ['b1', 'b3', 'b4', 'q1', 't1', 't2'] : ['b1', 'b3', 'q1', 't1'], reason: REASON_WHERE[variant]
  });

  /* ---------- sell now, or wait ---------- */
  // wait: a big gain, a narrow fee gap: the tax saved is more than waiting costs. now: a small gain, a wide fee gap on a big fund: waiting costs
  // more than it saves. plan: inside a 401(k), where a sale is not taxed. A gain bought 10 or 11 months ago is surely over a year old by month 13.
  const WHEN_COMMON = { whoAt: [0, 3, 1], firmAt: [0, 2, 1], shortRate: [22, 24], held: [10, 11], cheap: [2, 4, 1] };
  const WHEN = {
    wait: { ...WHEN_COMMON, gain: [4000, 9000, 100], basis: [15000, 40000, 1000], mid: [50, 90, 5] },
    now: { ...WHEN_COMMON, gain: [300, 700, 50], basis: [60000, 150000, 1000], mid: [85, 125, 5] },
    plan: { ...WHEN_COMMON, gain: [4000, 9000, 100], basis: [15000, 40000, 1000], mid: [50, 90, 5] }
  };
  function sale(pick, mode){
    const gain = pick('gain'), value = gain + pick('basis'), short = pick('shortRate'), held = pick('held'), left = 13 - held, mid = pick('mid'), cheap = pick('cheap');
    const diffTax = cents(gain * (short - 15) / 100), extra = cents(value * (mid - cheap) / 10000 * left / 12);
    return { who: PEOPLE[pick('whoAt')], firmName: FIRMS[pick('firmAt')], gainText: whole(gain), valueText: whole(value), short, held, left,
      midText: `${(mid / 100).toFixed(2)}%`, cheapText: `${(cheap / 100).toFixed(2)}%`, extra, extraText: exact(extra),
      yearCost: cents(value * (mid - cheap) / 10000), gainBase: cents(gain * (mid - cheap) / 10000 * left / 12),
      saved: mode === 'plan' ? 0 : diffTax, savedText: exact(diffTax), shortTax: gain * short / 100, diffTax };
  }
  const saleDocs = plan => [
    { kind: 'document', form: 'statement', tab: plan ? '401(k)' : 'Brokerage', title: plan ? '{who}’s 401(k)' : '{firmName}: {who}’s brokerage account', head: ['Line', 'Amount'],
      rows: [{ id: 'g1', cells: ['Summit Large Company Fund, bought', '{held} months ago'] }, { id: 'g0', cells: ['Its value now', '{valueText}'] }, { id: 'g2', cells: ['Gain since then', '{gainText}'] }] },
    { kind: 'document', form: 'fees', tab: 'Fee sheet', title: 'What the two funds cost', head: ['Fund', 'Kind', 'Expense ratio'],
      rows: [{ id: 'e1', cells: ['Summit Large Company Fund', 'Large US companies', '{midText}'] }, { id: 'e2', cells: ['Crestline 500 Fund', 'Large US companies', '{cheapText}'] }] },
    { kind: 'document', form: 'table', tab: 'Tax note', title: '{who}’s tax note, for a brokerage account', head: ['A gain held', 'Taxed at'],
      rows: [{ id: 't1', cells: ['A year or less', '{short}%'] }, { id: 't2', cells: ['More than a year', '15%'] }] }];
  const PLAN_SAVED = 'Inside a 401(k) a sale is not taxed at all, so waiting saves nothing.';
  const CALL_WHEN = {
    wait: [{ id: 'sell', text: 'Sell now and switch', slip: 'sold-short-term', then: 'At {held} months the gain is taxed at {short}%. In {left} months it is 15%, which saves {savedText}, more than the {extraText} the dearer fund costs meanwhile.' },
      { id: 'wait', text: 'Wait until the gain is over a year old, then switch', ok: true, then: 'In {left} months the gain is taxed at 15% instead of {short}%: {savedText} saved, against {extraText} of extra cost.' }],
    now: [{ id: 'sell', text: 'Sell now and switch', ok: true, then: 'Waiting would save {savedText} of tax but cost {extraText} in the dearer fund: switching now costs less.' },
      { id: 'wait', text: 'Wait until the gain is over a year old, then switch', slip: 'waited-costly', then: 'The gain is small, so waiting saves only {savedText}, while the dearer fund costs {extraText} meanwhile.' }],
    plan: [{ id: 'sell', text: 'Sell now and switch', ok: true, then: 'Inside a 401(k) the switch is not taxed, and the cheaper fund starts saving now.' },
      { id: 'wait', text: 'Wait until the gain is over a year old, then switch', slip: 'waited-in-plan', then: 'Inside a 401(k) nothing is taxed until money comes out: waiting saves no tax and keeps the dearer fund.' }]
  };
  const DECIDE_WHEN = { wait: '{savedText} saved is more than {extraText}: wait {left} months, then switch.', now: '{savedText} saved is less than {extraText}: switch now.', plan: 'Switch now.' };
  const REASON_WHEN = {
    wait: 'The gain is {held} months old, so selling now taxes it at {short}%. Waiting {left} months saves {savedText}, more than the {extraText} the dearer fund costs meanwhile.',
    now: 'Waiting {left} months would save {savedText} of tax on a small gain, but the dearer fund would cost {extraText} meanwhile, so switching now costs less.',
    plan: 'The fund is inside a 401(k), where a sale is not taxed, so waiting saves nothing; the switch to the cheaper fund of the same kind can go ahead now.'
  };
  const whenGen = (mode, id) => ({
    id, strand: 'tax', facets: { call: mode === 'wait' ? 'leave' : 'change' }, params: WHEN[mode], make: pick => sale(pick, mode),
    blocks: [{ kind: 'prose', text: mode === 'plan' ? '{who} wants to sell Summit Large Company Fund and buy Crestline 500 Fund, the same kind for less, inside the same 401(k).'
      : '{who} wants to sell Summit Large Company Fund and buy Crestline 500 Fund, the same kind for less, in the same brokerage account.' }, ...saleDocs(mode === 'plan')],
    asks: [
      { id: 'saved', kind: 'number', prompt: 'How much tax would waiting until the gain is over a year old save?', frame: '$__', places: 2, answer: 'saved', tol: { abs: 0.5 },
        traps: mode === 'plan' ? [{ slip: 'waited-in-plan', value: 'diffTax', then: PLAN_SAVED }, { slip: 'waited-in-plan', value: 'shortTax', then: PLAN_SAVED }]
          : [{ slip: 'sold-short-term', value: 'shortTax', then: 'That is the whole tax at {short}%. Waiting saves only the difference between the two rates.' }] },
      ...(mode === 'plan' ? [] : [{ id: 'extra', kind: 'number', prompt: 'What does keeping the dearer fund {left} more months cost, beside the cheaper one?', frame: '$__', places: 2, answer: 'extra', tol: { abs: 1 },
        traps: [{ slip: 'year-not-months', value: 'yearCost', then: 'That is a whole year of the gap. Take {left} twelfths of it: × {left} ÷ 12.' },
          { slip: 'gain-as-base', value: 'gainBase', then: 'That uses the gain. The expense ratio is taken on the whole value, {valueText}.' }] }]),
      { id: 'call', kind: 'choose', prompt: 'Sell now, or wait?', shuffle: true, options: CALL_WHEN[mode] }],
    steps: [
      { id: 'where', does: 'Find where the fund is held, and how long.', working: mode === 'plan' ? 'Inside a 401(k): a sale there is not taxed.' : 'In a brokerage account, {held} months: a year or less, so {short}%. By month 13 it is surely over a year: {left} more months.' },
      { id: 'saved', does: 'Work out what waiting saves.', working: mode === 'plan' ? 'Nothing: no tax inside a 401(k).' : '{gainText} × ({short}% − 15%) = {savedText}.', ask: 'saved' },
      ...(mode === 'plan' ? [] : [{ id: 'extra', does: 'Work out what waiting costs.', working: '{valueText} × ({midText} − {cheapText}) × {left} ÷ 12 = {extraText}.', ask: 'extra' }]),
      { id: 'call', does: 'Wait only when the tax saved is more than what waiting costs.', working: DECIDE_WHEN[mode], ask: 'call' }],
    deciding: mode === 'plan' ? ['g1', 'e1', 'e2'] : ['g1', 'g0', 'g2', 'e1', 'e2', 't1', 't2'], reason: REASON_WHEN[mode]
  });

  /* ---------- a loss used ---------- */
  const LOSS = { whoAt: [0, 3, 1], firmAt: [0, 2, 1], loss: [800, 3000, 100], rateAt: [0, 2, 1] };
  function lossPlan(pick, wash){
    const loss = pick('loss'), rate = RATES[pick('rateAt')], days = pick('days'), before = wash && pick('side') === 1;
    return { who: PEOPLE[pick('whoAt')], firmName: FIRMS[pick('firmAt')], lossText: whole(loss), rate, days,
      buyBack: before ? `${days} days before the sale` : `${days} days after the sale`,
      saved: wash ? 0 : loss * rate / 100, zero: 0, usedTax: loss * rate / 100, savedText: exact(loss * rate / 100) };
  }
  const lossGen = (wash, id) => ({
    id, strand: 'tax', facets: { call: wash ? 'change' : 'leave' }, params: { ...LOSS, days: wash ? [6, 28, 1] : [31, 60, 1], ...(wash ? { side: [0, 1, 1] } : {}) },
    make: pick => lossPlan(pick, wash),
    blocks: [{ kind: 'document', form: 'table', tab: 'The plan', title: '{who}’s plan in the brokerage account', head: ['Step', 'What'],
      rows: [{ id: 'l1', cells: ['Sell Globe Select Fund', 'At a loss of {lossText}'] }, { id: 'l2', cells: ['Buy Globe Select Fund', '{buyBack}'] },
        { id: 'l3', cells: ['Gains sold this year', 'None'] }, { id: 'l4', cells: ['Tax rate on other income', '{rate}%'] }] }],
    asks: [
      { id: 'saved', kind: 'number', prompt: 'How much tax does the loss save {who} this year?', frame: '$__', places: 2, answer: 'saved', tol: { abs: 0.5 },
        traps: wash ? [{ slip: 'wash-missed', value: 'usedTax', then: 'The same fund is bought {buyBack}, within 30 days: a wash sale, so the loss does not count this year.' }]
          : [{ slip: 'loss-dropped', value: 'zero', then: 'The fund is bought {days} days after the sale, past 30, so the loss counts.' }] },
      callAsk(wash, 'loss-dropped', 'wash-missed', 'The fund is bought {days} days after, past 30: the loss counts as planned.',
        'Buying the same fund {buyBack} is a wash sale, so the loss does not count this year. Buy more than 30 days before or after the sale, or buy a similar fund that follows a different index, so the mix stays the same.')],
    steps: [
      { id: 'days', does: 'Count the days between the sale and buying the same fund, or one nearly the same.', working: wash ? '{buyBack}: within 30 days either side, a wash sale.' : '{days} days after: past 30.' },
      { id: 'saved', does: 'Work out the tax the loss saves.', working: wash ? 'None this year: the loss is added to the new shares’ cost and counts only when they are sold.' : 'The {lossText} loss is under the $3,000 a year limit: {lossText} × {rate}% = {savedText}.', ask: 'saved' },
      { id: 'call', does: 'Change the plan only if the same fund, or one nearly the same, is bought within 30 days.', working: wash ? 'Buy more than 30 days before or more than 30 days after the sale, or buy a similar fund that follows a different index.' : 'Leave the plan as it is.', ask: 'call' }],
    deciding: ['l1', 'l2', 'l4'],
    reason: wash ? 'The same fund is bought {buyBack}, within 30 days: a wash sale, so the {lossText} loss cannot cut this year’s tax. Buying after 30 days, or a similar fund that follows a different index, keeps it and keeps the mix.'
      : 'The fund is bought {days} days after the sale, past 30, so the {lossText} loss cuts other income and saves {savedText} of tax.'
  });

  FC.gen('wealth', [whereGen('swap', 'g-place-swap'), whereGen('fine', 'g-place-fine'), whereGen('full', 'g-place-full'), whenGen('wait', 'g-sell-wait'), whenGen('now', 'g-sell-now'), whenGen('plan', 'g-sell-plan'),
    lossGen(true, 'g-loss-wash'), lossGen(false, 'g-loss-ok')]);
})();
