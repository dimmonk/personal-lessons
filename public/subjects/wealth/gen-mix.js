// Wealth, lesson 7 "Mix and drift, and your own hands": a household's 401(k), brokerage account and bank, and the mix it wrote down, made
// with fresh numbers (lesson standard 3, generators). The rule (research W15, W61): stocks over stocks, bonds and cash of the invested accounts
// (bank accounts are the buffer of lesson 2, left out); 5 points or more off the chosen share, move the drift's dollars inside the 401(k),
// where a sale is not taxed (W38); under 5, leave it; news of a fall is never the trigger (W16, W17); a fund that mixes by age rebalances
// itself. Five kinds: over (stocks grew past the band), near (inside it), fall (a news story, stocks fallen past the band: money moves from
// bonds into stocks), calm (a news story, stocks fallen but inside the band: leave), target (all in a target-date fund: leave). Every drift
// is a whole number of points off the chosen share before the stock amount is rounded to $100 and moved by up to $900 (so the share is not
// always a whole number; at least 7 points off stays past 5, at most 3 stays under 4.2), and the invested total is whole thousands, so the move is whole dollars and the app's own `drift` work gives the same numbers (tests/own-later-pure.mjs).
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const tenth = x => Math.round(x * 10) / 10;
  const PEOPLE = ['Dana', 'Marcus', 'Ines', 'Theo'];
  const WANTS = [60, 70, 80];
  const COMMON = { whoAt: [0, 3, 1], wantAt: [0, 2, 1], invested: [80000, 300000, 1000], split: [0.3, 0.5, 0.05], bank: [8000, 30000, 1000], jitter: [-900, 900, 100] };
  const KINDS = {
    over: { off: [7, 12, 1] }, near: { off: [1, 3, 1], up: [0, 1, 1] },
    fall: { off: [7, 12, 1], fell: [25, 40, 1] }, calm: { off: [1, 3, 1], fell: [8, 14, 1] }
  };
  // the signed points off the chosen share, before rounding: up for over, down for a fall, either way for near
  const offOf = (kind, pick) => kind === 'over' ? pick('off') : kind === 'near' ? (pick('up') ? 1 : -1) * pick('off') : -pick('off');
  function household(pick, kind){
    const want = WANTS[pick('wantAt')], total = pick('invested'), off = offOf(kind, pick);
    const stocks = Math.round(total * (want + off) / 100 / 100) * 100 + pick('jitter'), bonds = total - stocks, brok = Math.round(stocks * pick('split') / 100) * 100, planStocks = stocks - brok;
    const bank = pick('bank'), share = Math.round(stocks / total * 1000) / 10, drift = tenth(share - want), move = Math.round(Math.abs(drift) / 100 * total);
    return {
      who: PEOPLE[pick('whoAt')], want, bondsWant: 100 - want, totalText: whole(total), stocksText: whole(stocks), bondsText: whole(bonds),
      planStocksText: whole(planStocks), brokText: whole(brok), bankText: whole(bank), share, shareText: share.toFixed(1), drift, points: Math.abs(drift), pointsText: `${Math.abs(drift)} point${Math.abs(drift) === 1 ? '' : 's'}`, move, moveText: whole(move),
      withBank: tenth(stocks / (total + bank) * 100), planOnly: tenth(planStocks / (planStocks + bonds) * 100),
      fell: kind === 'fall' || kind === 'calm' ? pick('fell') : 0
    };
  }
  const plan = { kind: 'document', form: 'statement', tab: '401(k)', title: '{who}’s 401(k)', head: ['Fund', 'Value'],
    rows: [{ id: 'a1', cells: ['US Stock Fund', '{planStocksText}'] }, { id: 'a2', cells: ['Bond Fund', '{bondsText}'] }] };
  const brok = { kind: 'document', form: 'statement', tab: 'Brokerage', title: '{who}’s brokerage account', head: ['Holding', 'Value'],
    rows: [{ id: 'k1', cells: ['US Stock Market Fund', '{brokText}'] }] };
  const bankDoc = { kind: 'document', form: 'statement', tab: 'Bank', title: '{who}’s bank', head: ['Account', 'Balance'], rows: [{ id: 'c1', cells: ['Savings', '{bankText}'] }] };
  const mixDoc = { kind: 'document', form: 'table', tab: 'The mix', title: 'The mix {who} wrote down', head: ['Part', 'Share'],
    rows: [{ id: 'm1', cells: ['Stocks', '{want}%'] }, { id: 'm2', cells: ['Bonds', '{bondsWant}%'] }], notes: ['Of the money in the 401(k) and the brokerage account. The bank savings are the cash buffer.'] };
  const news = { kind: 'article', form: 'news', source: 'Evening Markets Report', headline: { id: 'h1', text: 'Stocks down {fell}% since spring; experts split on what comes next' },
    lines: [{ id: 'n1', text: 'US stocks have fallen {fell}% in four months. Some investors are selling to wait it out in cash.' },
      { id: 'n2', text: 'Nobody can say whether prices will fall further or recover first.' }] };

  const shareAsk = {
    id: 'share', kind: 'number', prompt: 'What share of {who}’s invested money is in stocks?', frame: '__%', places: 1, answer: 'share', tol: { abs: 0.5 },
    traps: [{ slip: 'bank-in-mix', value: 'withBank', then: 'That counts the bank savings. They are the cash buffer, not part of the mix.' },
      { slip: 'one-account-mix', value: 'planOnly', then: 'That is the 401(k) alone. The mix is of the 401(k) and the brokerage account together.' }]
  };
  const moveAsk = { id: 'move', kind: 'number', prompt: 'About how much would {who} move to get back to {want}% stocks?', frame: '$__', places: 0, answer: 'move', tol: { rel: 0.05 },
    when: { ask: 'call', is: ['change'] } };
  const WHERE = {
    over: [
      { id: 'plan', text: 'In the 401(k): sell some of the US Stock Fund and buy the Bond Fund', ok: true, then: 'A sale inside a 401(k) is not taxed, and both funds are there.' },
      { id: 'brok', text: 'In the brokerage account: sell some of the US Stock Market Fund', slip: 'sold-taxed-first', then: 'A sale there may owe tax on its gain; inside the 401(k) it does not.' },
      { id: 'back', text: 'In the 401(k): sell some of the Bond Fund and buy the US Stock Fund', slip: 'wrong-way', then: 'Stocks are the side already over; that moves the mix further off.' }],
    fall: [
      { id: 'plan', text: 'In the 401(k): sell some of the Bond Fund and buy the US Stock Fund', ok: true, then: 'Stocks are the side that is short now; inside the 401(k) the sale is not taxed.' },
      { id: 'sell', text: 'In the 401(k): sell some of the US Stock Fund and buy the Bond Fund, before stocks fall further', slip: 'sold-on-news', then: 'Stocks are already under the mix; selling more moves it further off, on a guess about the news.' },
      { id: 'bank', text: 'Buy more of the US Stock Market Fund with the bank savings', slip: 'bank-in-mix', then: 'The savings are the cash buffer. Only money beyond the buffer could go here; this trade is inside the 401(k).' }]
  };
  const whereAsk = kind => ({ id: 'where', kind: 'choose', prompt: 'Where would {who} make the trade?', shuffle: true, when: { ask: 'call', is: ['change'] }, options: WHERE[kind] });
  const CALL = {
    over: { right: 'change', slips: { leave: 'drift-missed' }, then: { leave: 'Stocks are {shareText}%, {pointsText} over the {want}% chosen: 5 or more points off is the line.' } },
    near: { right: 'leave', slips: { change: 'traded-in-band' }, then: { change: 'Stocks are {shareText}%, {pointsText} off the {want}% chosen: under 5 points, the rule leaves it.' } },
    fall: { right: 'change', slips: { leave: 'drift-missed' }, then: { leave: 'Stocks are {shareText}%, {pointsText} under the {want}% chosen: past the line, so the rule moves money back into stocks.' } },
    calm: { right: 'leave', slips: { change: 'sold-on-news' }, then: { change: 'Stocks are {shareText}%, {pointsText} under the {want}% chosen: inside the band. The news is not the rule.' } }
  };
  const STEPS = kind => [
    { id: 'add', does: 'Add up the stocks in the invested accounts, and everything in them. Leave the bank out.', working: '{planStocksText} + {brokText} = {stocksText} of stocks, out of {totalText}.' },
    { id: 'share', does: 'Divide the stocks by everything invested.', working: '{stocksText} ÷ {totalText} = {shareText}%.', ask: 'share' },
    { id: 'call', does: 'Hold it against the mix chosen: 5 points or more off is the line.', working: CALL_WORKING[kind], ask: 'call' },
    ...(kind === 'over' || kind === 'fall' ? [
      { id: 'move', does: 'Work out the money to move.', working: '{points}% of {totalText} = {moveText}.', ask: 'move' },
      { id: 'where', does: 'Trade where a sale is not taxed.', working: kind === 'over' ? 'Inside the 401(k): from the US Stock Fund to the Bond Fund.' : 'Inside the 401(k): from the Bond Fund to the US Stock Fund.', ask: 'where' }] : [])];
  const CALL_WORKING = {
    over: '{shareText}% against {want}%: {pointsText} over. Change it.', near: '{shareText}% against {want}%: {pointsText} off, under 5. Leave it.',
    fall: '{shareText}% against {want}%: {pointsText} under. Change it, whatever the news.', calm: '{shareText}% against {want}%: {pointsText} under, inside the band. Leave it, whatever the news.'
  };
  const REASON = {
    over: 'Stocks are {stocksText} of {totalText}, {shareText}%, {pointsText} over the {want}% chosen. Moving about {moveText} from stocks to bonds inside the 401(k), where a sale is not taxed, brings it back.',
    near: 'Stocks are {stocksText} of {totalText}, {shareText}%, {pointsText} off the {want}% chosen: under 5 points, so nothing needs to change.',
    fall: 'After the fall, stocks are {stocksText} of {totalText}, {shareText}%, {pointsText} under the {want}% chosen. The rule moves about {moveText} from bonds into stocks, inside the 401(k); the news decides nothing.',
    calm: 'After the fall, stocks are {stocksText} of {totalText}, {shareText}%, {pointsText} under the {want}% chosen: inside the band, so the rule leaves it, whatever the news says.'
  };
  const DECIDING = { over: ['a1', 'a2', 'k1', 'm1'], near: ['a1', 'a2', 'k1', 'm1'], fall: ['a1', 'a2', 'k1', 'm1'], calm: ['a1', 'a2', 'k1', 'm1'] };
  const change = kind => kind === 'over' || kind === 'fall';
  const generator = (kind, id) => ({
    id, strand: 'mix', facets: { call: change(kind) ? 'change' : 'leave' }, params: { ...COMMON, ...KINDS[kind] }, make: pick => household(pick, kind),
    blocks: [...(kind === 'fall' || kind === 'calm' ? [news] : []), plan, brok, bankDoc, mixDoc],
    asks: [shareAsk, { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', ...CALL[kind] }, ...(change(kind) ? [moveAsk, whereAsk(kind)] : [])],
    steps: STEPS(kind), deciding: DECIDING[kind], reason: REASON[kind]
  });

  // a fund that mixes by age: everything invested is one target-date fund, which rebalances itself
  const target = {
    id: 'g-mix-target', strand: 'mix', facets: { call: 'leave' }, params: { whoAt: [0, 3, 1], fund: [60000, 250000, 1000], bank: [8000, 30000, 1000], year: [2045, 2060, 5], fell: [10, 25, 1] },
    make: pick => ({ who: PEOPLE[pick('whoAt')], fundText: whole(pick('fund')), bankText: whole(pick('bank')), year: pick('year'), fell: pick('fell') }),
    blocks: [news,
      { kind: 'document', form: 'statement', tab: '401(k)', title: '{who}’s 401(k)', head: ['Fund', 'Value'],
        rows: [{ id: 'a1', cells: ['Target Retirement {year} Fund (stocks and bonds, mixed by your age)', '{fundText}'] }],
        notes: ['The fund sells and buys inside itself to keep its own mix, and shifts toward bonds as {year} comes closer.'] },
      { kind: 'document', form: 'statement', tab: 'Bank', title: '{who}’s bank', head: ['Account', 'Balance'], rows: [{ id: 'c1', cells: ['Savings', '{bankText}'] }] }],
    asks: [{ id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'leave', slips: { change: 'target-traded' },
      then: { change: 'The target-date fund keeps its own mix by trading inside itself. A trade on top of it, on news, is the trading that earns less.' } }],
    steps: [{ id: 'call', does: 'Look for a fund that keeps its own mix.', working: 'Everything invested is one target-date fund, which rebalances itself. Leave it.', ask: 'call' }],
    deciding: ['a1'], reason: 'All of {who}’s invested money is one target-date fund, which keeps its own mix. There is nothing to rebalance, and the news is not a reason to trade.'
  };
  FC.gen('wealth', [generator('over', 'g-mix-over'), generator('near', 'g-mix-near'), generator('fall', 'g-mix-fall'), generator('calm', 'g-mix-calm'), target]);

  // the worked household: Dana, 52,000 + 30,000 of stocks out of 110,000 invested, 74.5% against 65%: 9.5 points over, move 10,450
  FC.items('wealth', [{
    id: 'w-mix', strand: 'mix', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'statement', tab: '401(k)', title: 'Dana’s 401(k)', head: ['Fund', 'Value'],
        rows: [{ id: 'a1', cells: ['US Stock Fund', '$52,000'] }, { id: 'a2', cells: ['Bond Fund', '$28,000'] }] },
      { kind: 'document', form: 'statement', tab: 'Brokerage', title: 'Dana’s brokerage account', head: ['Holding', 'Value'], rows: [{ id: 'k1', cells: ['US Stock Market Fund', '$30,000'] }] },
      { kind: 'document', form: 'statement', tab: 'Bank', title: 'Dana’s bank', head: ['Account', 'Balance'], rows: [{ id: 'c1', cells: ['Savings', '$12,000'] }] },
      { kind: 'document', form: 'table', tab: 'The mix', title: 'The mix Dana wrote down', head: ['Part', 'Share'],
        rows: [{ id: 'm1', cells: ['Stocks', '65%'] }, { id: 'm2', cells: ['Bonds', '35%'] }], notes: ['Of the money in the 401(k) and the brokerage account. The bank savings are the cash buffer.'] }],
    asks: [
      { id: 'share', kind: 'number', prompt: 'What share of Dana’s invested money is in stocks?', frame: '__%', places: 1, answer: 74.5, tol: { abs: 0.5 } },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'drift-missed' },
        then: { leave: 'Stocks are 74.5%, 9.5 points over the 65% chosen: 5 or more points off is the line.' } },
      { id: 'move', kind: 'number', prompt: 'About how much would Dana move to get back to 65% stocks?', frame: '$__', places: 0, answer: 10450, tol: { rel: 0.05 }, when: { ask: 'call', is: ['change'] } },
      { id: 'where', kind: 'choose', prompt: 'Where would Dana make the trade?', when: { ask: 'call', is: ['change'] },
        options: [
          { id: 'brok', text: 'In the brokerage account: sell some of the US Stock Market Fund', slip: 'sold-taxed-first', then: 'A sale there may owe tax on its gain; inside the 401(k) it does not.' },
          { id: 'plan', text: 'In the 401(k): sell some of the US Stock Fund and buy the Bond Fund', ok: true, then: 'A sale inside a 401(k) is not taxed, and both funds are there.' },
          { id: 'back', text: 'In the 401(k): sell some of the Bond Fund and buy the US Stock Fund', slip: 'wrong-way', then: 'Stocks are the side already over; that moves the mix further off.' }] }],
    steps: [
      { id: 'add', does: 'Add up the stocks in the invested accounts, and everything in them. Leave the bank out.', working: '$52,000 + $30,000 = $82,000 of stocks, out of $52,000 + $28,000 + $30,000 = $110,000.' },
      { id: 'share', does: 'Divide the stocks by everything invested.', working: '$82,000 ÷ $110,000 = 74.5%.', ask: 'share' },
      { id: 'call', does: 'Hold it against the mix chosen: 5 points or more off is the line.', working: '74.5% against 65%: 9.5 points over. Change it.', ask: 'call' },
      { id: 'move', does: 'Work out the money to move.', working: '9.5% of $110,000 = $10,450.', ask: 'move' },
      { id: 'where', does: 'Trade where a sale is not taxed.', working: 'Inside the 401(k): about $10,450 from the US Stock Fund to the Bond Fund.', ask: 'where' }],
    deciding: ['a1', 'a2', 'k1', 'm1'],
    reason: 'Stocks are $82,000 of $110,000, 74.5%, 9.5 points over the 65% Dana chose. Moving about $10,450 from stocks to bonds inside the 401(k), where a sale is not taxed, brings it back.'
  }]);
})();
