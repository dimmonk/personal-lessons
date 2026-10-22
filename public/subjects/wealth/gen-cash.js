// Wealth, lesson 2 "Money you need soon": a household's bank statement, its usual month and its big bills ahead, made with fresh numbers
// (lesson standard 3, a generator). The learner first sets apart the money for a bill due in five years or less, turns the rest of the cash
// into months of spending and decides, by the rule the lesson teaches (research W18, W19, W40, W43): a bill due in five years or less kept in
// stocks has to move; under three months is too little; past six months with the bills put aside is more than it needs (cash usually earns
// less than stocks over the long run); else leave it. Five households:
//   short   under three months, no bill
//   stocks  enough cash, a bill due soon kept in a stock fund: move it
//   idle    far past six months, no bill
//   fine    enough cash, a bill more than five years off kept in stocks (the look-alike of stocks: the years decide)
//   held    a bill due soon already in a savings account of its own: put aside, the rest is enough (the look-alike of stocks: where it is
//           kept decides), and counted with the cash it looks idle (the slip of counting a bill's money as months)
// Every month count is a whole tenth, so no rounding decides a mark. The worked example is items-cash.js.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const tenth = x => (Math.round(x * 10) / 10).toFixed(1);
  const PEOPLE = ['Leo', 'Ana', 'Sam', 'Grace'];
  const BANKS = ['Harbor Bank', 'Prairie Savings Bank', 'Cedar Valley Bank'];
  const COMMON = { whoAt: [0, 3, 1], bank: [0, 2, 1], monthly: [2800, 6400, 100], split: [0.2, 0.4, 0.05] };
  const VARIANTS = {
    short: { months: [1, 2.4, 0.1] },
    stocks: { months: [3.5, 5.5, 0.1], soon: [2, 4, 1], bill: [20000, 60000, 1000] },
    idle: { months: [9, 14, 0.1] },
    fine: { months: [3.5, 5.5, 0.1], far: [8, 14, 1], bill: [30000, 80000, 1000] },
    held: { months: [3.5, 5.5, 0.1], soon: [1, 4, 1], bill: [20000, 60000, 1000] }
  };

  function household(pick, variant){
    const monthly = pick('monthly'), months = pick('months'), cash = Math.round(monthly * months);
    const checking = Math.round(cash * pick('split') / 100) * 100, savings = cash - checking;
    const rent = Math.round(monthly * 0.4 / 100) * 100, food = Math.round(monthly * 0.2 / 100) * 100, car = Math.round(monthly * 0.15 / 100) * 100;
    const bill = variant === 'stocks' || variant === 'fine' || variant === 'held' ? pick('bill') : 0, inBank = variant === 'held' ? bill : 0;
    return {
      who: PEOPLE[pick('whoAt')], bankName: BANKS[pick('bank')], monthlyText: whole(monthly), months, monthsText: tenth(months),
      checkingText: whole(checking), savingsText: whole(savings), cashText: whole(cash), allText: whole(cash + inBank),
      checkingMonths: Math.round(checking / monthly * 100) / 100, savingsMonths: Math.round(savings / monthly * 100) / 100,
      withBill: Math.round((cash + inBank) / monthly * 100) / 100, withBillText: tenth((cash + inBank) / monthly),
      rentText: whole(rent), foodText: whole(food), carText: whole(car), otherText: whole(monthly - rent - food - car),
      ...(bill ? (y => ({ years: y, yearsText: y === 1 ? '1 year' : `${y} years`, billText: whole(bill) }))(variant === 'fine' ? pick('far') : pick('soon')) : {})
    };
  }

  const bankRows = [{ id: 'c1', cells: ['Checking', '{checkingText}'] }, { id: 'c2', cells: ['Savings', '{savingsText}'] }];
  const bankDoc = held => ({ kind: 'document', form: 'statement', tab: 'Bank', title: '{bankName}: {who}', head: ['Account', 'Balance'],
    rows: held ? [...bankRows, { id: 'c4', cells: ['Savings for the down payment', '{billText}'] }, { id: 'c3', strong: true, cells: ['Total', '{allText}'] }]
      : [...bankRows, { id: 'c3', strong: true, cells: ['Total', '{cashText}'] }], notes: ['Member FDIC.'] });
  const monthDoc = { kind: 'document', form: 'table', tab: 'A usual month', title: 'What {who} spends in a usual month', head: ['Spending', 'Dollars'],
    rows: [{ id: 's1', cells: ['Rent', '{rentText}'] }, { id: 's2', cells: ['Food', '{foodText}'] }, { id: 's3', cells: ['Car and transit', '{carText}'] },
      { id: 's4', cells: ['Everything else, yearly bills as a twelfth', '{otherText}'] }, { id: 's5', strong: true, cells: ['A month', '{monthlyText}'] }] };
  const billsHead = ['Bill', 'When', 'How much', 'Kept in'];
  const billsDoc = {
    stocks: { kind: 'document', form: 'table', tab: 'Bills ahead', title: 'Big bills {who} knows are coming', head: billsHead,
      rows: [{ id: 'f1', cells: ['Home down payment', 'In {yearsText}', '{billText}', 'US Stock Market Fund (stocks)'] }] },
    fine: { kind: 'document', form: 'table', tab: 'Bills ahead', title: 'Big bills {who} knows are coming', head: billsHead,
      rows: [{ id: 'f1', cells: ['College for a child', 'In {yearsText}', '{billText}', 'US Stock Market Fund (stocks)'] }] },
    held: { kind: 'document', form: 'table', tab: 'Bills ahead', title: 'Big bills {who} knows are coming', head: billsHead,
      rows: [{ id: 'f1', cells: ['Home down payment', 'In {yearsText}', '{billText}', 'Savings for the down payment, {bankName}'] }] },
    none: { kind: 'document', form: 'table', tab: 'Bills ahead', title: 'Big bills {who} knows are coming', head: ['Bill'],
      rows: [{ id: 'f1', cells: ['None planned'] }] }
  };

  const monthsAsk = variant => ({
    id: 'months', kind: 'number', prompt: variant === 'held' ? 'Once the bill’s money is put aside, how many months of spending does {who}’s cash cover?' : 'How many months of spending does {who}’s cash cover?',
    frame: '__ months', places: 1, answer: 'months', tol: { abs: 0.1 },
    traps: [{ slip: 'one-account', value: 'checkingMonths', then: 'That counts the checking account alone. Add the savings.' },
      { slip: 'one-account', value: 'savingsMonths', then: 'That counts the savings alone. Add the checking.' },
      ...(variant === 'held' ? [{ slip: 'bill-counted', value: 'withBill', then: 'That counts the down payment’s savings as months of spending. It is put aside for the bill: count the rest.' }] : [])]
  });
  const CALL = {
    short: { slips: { fine: 'short-missed' }, then: {
      fine: '{monthsText} months is under three: a lost job or a big repair would mean selling or borrowing.',
      stocks: 'No bill is due soon. The problem is the cash itself: under three months.', idle: 'Under three months is too little, not too much.' } },
    stocks: { slips: { fine: 'nerve-not-room' }, then: {
      fine: 'The down payment is due in {yearsText} and sits in a stock fund. If the fund is down that year, the bill still comes.',
      short: '{monthsText} months of cash is enough. The cash is fine; the bill’s money is not.', idle: 'The cash is between three and six months. The bill’s money in stocks is what needs a change.' } },
    idle: { slips: { fine: 'idle-missed' }, then: {
      fine: '{monthsText} months is far past six, with no bill ahead. The rest can be invested for the long run.',
      short: '{monthsText} months is more than enough, not too little.', stocks: 'No bill is due soon.' } },
    fine: { slips: { short: 'moved-fine', stocks: 'moved-fine', idle: 'moved-fine' }, then: {
      short: '{monthsText} months is past three: enough.', stocks: 'The college bill is {yearsText} off, more than five: it is not money needed soon.',
      idle: '{monthsText} months is under six: not more than it needs.' } },
    held: { slips: { idle: 'bill-counted', short: 'moved-fine', stocks: 'moved-fine' }, then: {
      idle: 'The down payment’s savings is put aside for the bill. The rest, {monthsText} months, is under six.', short: 'Once the bill is put aside, {monthsText} months is left: past three.',
      stocks: 'The down payment already sits in savings, not in stocks.' } }
  };
  const RIGHT = { short: 'short', stocks: 'stocks', idle: 'idle', fine: 'fine', held: 'fine' };
  const BILLS = {
    short: 'No big bill is planned: nothing to put aside.', idle: 'No big bill is planned: nothing to put aside.',
    stocks: 'The down payment, {billText}, is due in {yearsText}, within five, and sits in a stock fund, not in the cash.',
    fine: 'The college bill is due in {yearsText}: more than five years off, so it may sit in stocks.',
    held: 'The down payment, {billText}, is due in {yearsText} and already sits in its own savings: put it aside.'
  };
  const DECIDE = {
    short: '{monthsText} is under three months: build up the cash.', stocks: 'Enough cash, but the bill’s money has to leave stocks.',
    idle: '{monthsText} is far past six months, with no bill ahead: invest the rest.', fine: '{monthsText} is between three and six, and the only bill is far off.',
    held: '{monthsText} is between three and six, and the bill’s money is in savings.'
  };
  const REASON = {
    short: '{who}’s cash, {cashText}, covers {monthsText} months of spending, under three. A surprise bill would mean selling or borrowing, so build the cash up first.',
    stocks: '{who}’s cash covers {monthsText} months, enough. The down payment is due in {yearsText} and sits in stocks, so move it to savings now.',
    idle: '{who}’s cash covers {monthsText} months with no big bill ahead, far past six. Cash usually earns less than stocks over the long run, so the rest can be invested.',
    fine: '{who}’s cash covers {monthsText} months, between three and six. The only big bill is {yearsText} off, so nothing needs to change.',
    held: 'The down payment’s {billText} is due in {yearsText} and already sits in savings, put aside. The rest, {cashText}, covers {monthsText} months: nothing needs to change.'
  };

  const generator = (variant, id) => ({
    id, strand: 'cash', facets: { call: variant === 'fine' || variant === 'held' ? 'leave' : 'change' }, params: { ...COMMON, ...VARIANTS[variant] },
    make: pick => household(pick, variant),
    blocks: [bankDoc(variant === 'held'), monthDoc, billsDoc[variant === 'short' || variant === 'idle' ? 'none' : variant]],
    asks: [monthsAsk(variant), { id: 'call', kind: 'choose', prompt: 'What does {who}’s cash need?', from: 'cash', right: RIGHT[variant], ...CALL[variant] }],
    steps: [
      { id: 'bills', does: 'Look for a big bill due in five years or less, and where its money is.', working: BILLS[variant] },
      { id: 'cash', does: 'Add up the cash, leaving out money put aside for a bill.', working: '{checkingText} + {savingsText} = {cashText}.' },
      { id: 'months', does: 'Divide by a usual month.', working: '{cashText} ÷ {monthlyText} = {monthsText} months.', ask: 'months' },
      { id: 'call', does: 'Hold the months against three and six.', working: DECIDE[variant], ask: 'call' }],
    deciding: variant === 'held' ? ['c1', 'c2', 'c4', 's5', 'f1'] : ['c3', 's5', 'f1'], reason: REASON[variant]
  });
  FC.gen('wealth', [generator('short', 'g-cash-short'), generator('stocks', 'g-cash-stocks'), generator('idle', 'g-cash-idle'), generator('fine', 'g-cash-fine'),
    generator('held', 'g-cash-held')]);
})();
