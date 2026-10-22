// Wealth, lesson 11 "The spending rate": a household about to stop working, made with fresh numbers (lesson standard 3, generators). The rule
// (research W27, W28, W57, W61): a year's spending less the income that keeps coming is what the invested accounts must give (the draw); the
// draw over the invested accounts (bank cash is the buffer, left out) is the rate; over the starting rate looked up for this year (3.9% for
// 2026, ref `safeRate`) change it, at or under leave it; each later year the draw is last year's raised by the rise in prices. Four kinds: high
// (over: change, and what spending fits), low (under: leave, and next year's draw), income (spending alone would look high, the income brings
// the draw under: leave), fall (a bad first year: next year's draw by the plain rule, and what lets the money last, W28's flexible spending).
// Every rate sits at least half a point from the line, so no rounding decides it.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const tenth = x => Math.round(x * 10) / 10;
  const hundred = x => Math.round(x / 100) * 100;
  const LINE = 3.9;   // the value of the subject's ref `safeRate`, which the lesson shows
  const PEOPLE = ['Ruth', 'Walter', 'Joan', 'Henry'];
  const COMMON = { whoAt: [0, 3, 1], plan: [400000, 1200000, 10000], ira: [100000, 500000, 10000], brok: [50000, 300000, 10000], bank: [20000, 60000, 1000], infl: [2, 4, 1], taxRate: [0.08, 0.15, 0.01] };
  const KINDS = {
    high: { rate: [4.5, 6.5, 0.1], income: [18000, 40000, 1000] },
    low: { rate: [2.4, 3.4, 0.1], income: [18000, 40000, 1000] },
    income: { rate: [2.4, 3.4, 0.1], looks: [4.6, 6, 0.1] }
  };
  function household(pick, kind){
    const plan = pick('plan'), ira = pick('ira'), brok = pick('brok'), pot = plan + ira + brok, bank = pick('bank'), infl = pick('infl');
    const draw = hundred(pot * pick('rate') / 100), income = kind === 'income' ? hundred(pot * (pick('looks') - pick('rate')) / 100) : pick('income');
    // the draw is gross: what is spent, plus the tax on what comes out of the 401(k) and IRA, less the income that keeps coming
    const tax = hundred(draw * pick('taxRate')), spend = draw - tax + income;
    const rate = tenth(draw / pot * 100), fits = hundred(pot * LINE / 100);
    return {
      who: PEOPLE[pick('whoAt')], planText: whole(plan), iraText: whole(ira), brokText: whole(brok), bankText: whole(bank), potText: whole(pot), spendText: whole(spend),
      incomeText: whole(income), taxText: whole(tax), draw, drawText: whole(draw), spend, rate, spendRate: tenth((spend + tax) / pot * 100), noTax: spend - income,
      infl, next: draw + draw * infl / 100, nextText: whole(draw + draw * infl / 100), fits, fitsText: whole(fits)
    };
  }
  const docs = [
    { kind: 'document', form: 'statement', tab: 'Accounts', title: '{who}’s accounts', head: ['Account', 'Balance'],
      rows: [{ id: 'a1', cells: ['401(k)', '{planText}'] }, { id: 'a2', cells: ['IRA', '{iraText}'] }, { id: 'a3', cells: ['Brokerage account', '{brokText}'] }, { id: 'a4', cells: ['Bank savings', '{bankText}'] }] },
    { kind: 'document', form: 'table', tab: 'A year', title: '{who}’s year, after work', head: ['What', 'A year'],
      rows: [{ id: 's1', cells: ['What {who} spends', '{spendText}'] }, { id: 's3', cells: ['Tax on what comes out of the 401(k) and IRA', '{taxText}'] }, { id: 's2', cells: ['Social Security, coming every year', '{incomeText}'] }],
      notes: ['Prices rose {infl}% this past year.'] }];
  const drawAsk = { id: 'draw', kind: 'number', prompt: 'How much must {who}’s accounts give in a year?', frame: '$__', places: 0, answer: 'draw', tol: { abs: 1 },
    traps: [{ slip: 'tax-left-out', value: 'noTax', then: 'That leaves out the tax. The accounts must give the tax on what comes out too.' }] };
  const rateAsk = { id: 'rate', kind: 'number', prompt: 'What is {who}’s spending rate?', frame: '__%', places: 1, answer: 'rate', tol: { abs: 0.05 },
    traps: [{ slip: 'income-left-out', value: 'spendRate', then: 'That divides the spending and tax without taking off the Social Security first.' }] };
  const CALL = {
    high: { right: 'change', slips: { leave: 'rate-missed' }, then: { leave: '{rate}% is over the 3.9% looked up for this year.' } },
    low: { right: 'leave', slips: { change: 'cut-needlessly' }, then: { change: '{rate}% is under the 3.9% looked up for this year.' } },
    income: { right: 'leave', slips: { change: 'income-left-out' }, then: { change: 'With Social Security taken off, the accounts give {drawText}: {rate}%, under 3.9%.' } }
  };
  const nextAsk = { id: 'next', kind: 'number', prompt: 'By the rule, what would {who} take from the accounts next year?', frame: '$__', places: 0, answer: 'next', tol: { abs: 1 },
    traps: [{ slip: 'prices-left-out', value: 'draw', then: 'That keeps the amount the same. It goes up with prices, {infl}% this year, so it buys the same.' }] };
  const fitsAsk = { id: 'fits', kind: 'number', prompt: 'How much could the accounts give in a year at 3.9%?', frame: '$__', places: 0, answer: 'fits', tol: { rel: 0.01 },
    when: { ask: 'call', is: ['change'] } };
  const REASON = {
    high: '{spendText} of spending and {taxText} of tax, less {incomeText} of Social Security, is {drawText} from the accounts: {rate}% of {potText}, over the 3.9% looked up for this year. At 3.9% the accounts give about {fitsText}: spend less, work longer, or plan to cut in bad years.',
    low: '{spendText} of spending and {taxText} of tax, less {incomeText} of Social Security, is {drawText} from the accounts: {rate}% of {potText}, under 3.9%. Leave it, and next year take {nextText}, raised {infl}% for prices.',
    income: 'Spending and tax alone would be {spendRate}% of {potText}, but Social Security pays {incomeText} of it: the accounts give {drawText}, {rate}%, under 3.9%. Leave it; next year {nextText}.'
  };
  const generator = (kind, id) => ({
    id, strand: 'rate', facets: { call: kind === 'high' ? 'change' : 'leave' }, params: { ...COMMON, ...KINDS[kind] }, make: pick => household(pick, kind), blocks: docs,
    asks: [drawAsk, rateAsk, { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', ...CALL[kind] }, ...(kind === 'high' ? [fitsAsk] : [nextAsk])],
    steps: [
      { id: 'draw', does: 'Spending, plus the tax on withdrawals, less the income that keeps coming.', working: '{spendText} + {taxText} − {incomeText} = {drawText}.', ask: 'draw' },
      { id: 'rate', does: 'Divide by the invested accounts (not the bank).', working: '{drawText} ÷ {potText} = {rate}%.', ask: 'rate' },
      { id: 'call', does: 'Hold it against the rate looked up for this year.', working: kind === 'high' ? '{rate}% is over 3.9%. Change it.' : '{rate}% is at or under 3.9%. Leave it.', ask: 'call' },
      kind === 'high' ? { id: 'fits', does: 'Work out what the accounts can give at the line.', working: '3.9% of {potText} = {fitsText}, against {drawText} now.', ask: 'fits' }
        : { id: 'next', does: 'Next year: this year’s amount raised by the rise in prices.', working: '{drawText} + {infl}% = {nextText}.', ask: 'next' }],
    deciding: ['a1', 'a2', 'a3', 's1', 's2', 's3'], reason: REASON[kind]
  });

  // a bad first year: the plain rule's next amount, and what lets the money last
  const fall = {
    id: 'g-rate-fall', strand: 'rate', facets: { call: 'change' },
    params: { whoAt: [0, 3, 1], draw: [30000, 60000, 1000], infl: [2, 4, 1], fell: [15, 30, 1] },
    make: pick => { const draw = pick('draw'), infl = pick('infl'); return { who: PEOPLE[pick('whoAt')], draw, drawText: whole(draw), infl, fell: pick('fell'), next: draw + draw * infl / 100, nextText: whole(draw + draw * infl / 100) }; },
    blocks: [{ kind: 'prose', text: ['{who} retired last year and took {drawText} from the accounts, 3.8% of them. In that first year the accounts fell {fell}%, and prices rose {infl}%.'] }],
    asks: [
      { id: 'next', kind: 'number', prompt: 'By the plain rule (last year’s amount, raised for prices), what would {who} take next year?', frame: '$__', places: 0, answer: 'next', tol: { abs: 1 },
        traps: [{ slip: 'prices-left-out', value: 'draw', then: 'That keeps the amount the same. By the plain rule it goes up with prices, {infl}%.' }] },
      { id: 'last', kind: 'choose', prompt: 'After a fall this early, what does the research say helps the money last?', shuffle: true, options: [
        { id: 'flex', text: 'Spend a bit less for a while, until the accounts recover', ok: true, then: 'The first ten years decide most; spending that bends in bad years lets the money last, and allows more in good ones.' },
        { id: 'sell', text: 'Sell the stocks and hold cash until prices settle', slip: 'sold-on-news', then: 'That locks in the fall and misses the rebound; nobody knows which comes first.' },
        { id: 'more', text: 'Take more now, before more is lost', slip: 'drew-more', then: 'Taking more from fallen accounts in the first years is what drains them fastest.' }] }],
    steps: [
      { id: 'next', does: 'Next year: last year’s amount raised by the rise in prices.', working: '{drawText} + {infl}% = {nextText}.', ask: 'next' },
      { id: 'last', does: 'A fall in the first years hurts most: bend the spending.', working: 'Spend a bit less until the accounts recover.', ask: 'last' }],
    reason: 'By the plain rule {who} would take {nextText}, last year’s amount raised {infl}% for prices. After a {fell}% fall in the first year, spending a bit less for a while is what lets the money last.'
  };
  FC.gen('wealth', [generator('high', 'g-rate-high'), generator('low', 'g-rate-low'), generator('income', 'g-rate-income'), fall]);

  // the worked household: Ruth spends 66,000 a year and expects 6,000 of tax on withdrawals; Social Security 24,000; so 48,000 from 1,000,000
  // invested: 4.8%, over 3.9%; at 3.9% the accounts give 39,000
  FC.items('wealth', [{
    id: 'w-rate', strand: 'rate', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'statement', tab: 'Accounts', title: 'Ruth’s accounts', head: ['Account', 'Balance'],
        rows: [{ id: 'a1', cells: ['401(k)', '$620,000'] }, { id: 'a2', cells: ['IRA', '$280,000'] }, { id: 'a3', cells: ['Brokerage account', '$100,000'] }, { id: 'a4', cells: ['Bank savings', '$30,000'] }] },
      { kind: 'document', form: 'table', tab: 'A year', title: 'Ruth’s year, after work', head: ['What', 'A year'],
        rows: [{ id: 's1', cells: ['What Ruth spends', '$66,000'] }, { id: 's3', cells: ['Tax on what comes out of the 401(k) and IRA', '$6,000'] },
          { id: 's2', cells: ['Social Security, coming every year', '$24,000'] }], notes: ['Prices rose 3% this past year.'] }],
    asks: [
      { id: 'draw', kind: 'number', prompt: 'How much must Ruth’s accounts give in a year?', frame: '$__', places: 0, answer: 48000, tol: { abs: 1 },
        traps: [{ slip: 'tax-left-out', value: 42000, then: 'That leaves out the tax. The accounts must give the tax on what comes out too.' },
          { slip: 'income-left-out', value: 72000, then: 'That leaves out Social Security, which pays part of the year.' }] },
      { id: 'rate', kind: 'number', prompt: 'What is Ruth’s spending rate?', frame: '__%', places: 1, answer: 4.8, tol: { abs: 0.05 },
        traps: [{ slip: 'bank-in-pot', value: 4.7, then: 'That counts the bank savings. They are the cash buffer; the rate is over the invested accounts.' }] },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'rate-missed' }, then: { leave: '4.8% is over the 3.9% looked up for this year.' } },
      { id: 'fits', kind: 'number', prompt: 'How much could the accounts give in a year at 3.9%?', frame: '$__', places: 0, answer: 39000, tol: { rel: 0.01 }, when: { ask: 'call', is: ['change'] } }],
    steps: [
      { id: 'draw', does: 'Spending, plus the tax on withdrawals, less the income that keeps coming.', working: '$66,000 + $6,000 − $24,000 = $48,000.', ask: 'draw' },
      { id: 'rate', does: 'Divide by the invested accounts (not the bank).', working: '$620,000 + $280,000 + $100,000 = $1,000,000. $48,000 ÷ $1,000,000 = 4.8%.', ask: 'rate' },
      { id: 'call', does: 'Hold it against the rate looked up for this year.', working: '4.8% is over 3.9%. Change it.', ask: 'call' },
      { id: 'fits', does: 'Work out what the accounts can give at the line.', working: '3.9% of $1,000,000 = $39,000, against $48,000 now.', ask: 'fits' }],
    deciding: ['a1', 'a2', 'a3', 's1', 's2', 's3'],
    reason: '$66,000 of spending and $6,000 of tax, less $24,000 of Social Security, is $48,000 from the accounts: 4.8% of $1,000,000, over the 3.9% looked up for this year. At 3.9% the accounts give about $39,000: spend less, work longer, or plan to cut in bad years.'
  }]);
})();
