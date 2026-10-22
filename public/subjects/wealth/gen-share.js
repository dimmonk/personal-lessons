// Wealth, lesson 6 "Your biggest single bet": a household's 401(k), brokerage account and bank, made with fresh numbers (lesson standard 3,
// generators). The learner adds one company's stock across every account (the employer's stock in the 401(k), shares from work in the
// brokerage account), divides by everything, and holds it against 10% (research W13, W14, W14b; the 10% is a judgement call, W40). Three
// kinds: over (change it, and how much to sell); under (leave it); and the look-alike, a large index fund, which is hundreds of companies and
// not one bet (leave it). In the over case the learner also says where to sell first: inside the 401(k), where a sale is not taxed (W38,
// W49). The shares split between the accounts so that one account alone is never within a point of the whole. Holdings are whole hundreds
// of dollars. The worked example (w-share) is the over case with its numbers fixed.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const tenth = x => Math.round(x * 10) / 10;
  const PEOPLE = ['Owen', 'Lena', 'Raj', 'Chloe'];
  const COMPANIES = ['Acme Corp', 'Northwind Systems', 'Corvia Health', 'Tallgrass Energy'];
  const LIMIT = 10;   // the subject's limit `oneBet`, which the lesson teaches
  const COMMON = { whoAt: [0, 3, 1], companyAt: [0, 3, 1], planFund: [30000, 120000, 1000], bank: [5000, 30000, 1000], split: [0.25, 0.3, 0.7, 0.75] };
  const KINDS = {
    over: { pct: [12, 30, 1], broadFund: [10000, 40000, 1000] },
    under: { pct: [5, 9, 1], broadFund: [10000, 40000, 1000] },
    index: { pct: [5, 9, 1], broadFund: [90000, 200000, 1000] }
  };
  function household(pick){
    const planFund = pick('planFund'), broad = pick('broadFund'), bank = pick('bank'), others = planFund + broad + bank, p = pick('pct');
    const company = Math.round(others * p / (100 - p) / 100) * 100, inPlan = Math.round(company * pick('split') / 100) * 100, fromWork = company - inPlan;
    const total = others + company, share = tenth(company / total * 100);
    return {
      who: PEOPLE[pick('whoAt')], company: COMPANIES[pick('companyAt')], planFundText: whole(planFund), broadText: whole(broad), bankText: whole(bank),
      inPlanText: whole(inPlan), fromWorkText: whole(fromWork), companyText: whole(company), totalText: whole(total), share,
      planOnly: tenth(inPlan / total * 100), workOnly: tenth(fromWork / total * 100), withFund: tenth((company + broad) / total * 100),
      sell: company - total * LIMIT / 100, sellText: whole(Math.max(0, Math.round(company - total * LIMIT / 100))), tenText: whole(Math.round(total * LIMIT / 100))
    };
  }
  const docs = [
    { kind: 'document', form: 'statement', tab: '401(k)', title: '{who}’s 401(k)', head: ['Fund', 'Value'],
      rows: [{ id: 'a1', cells: ['{company} Stock Fund', '{inPlanText}'] }, { id: 'a2', cells: ['Large Company Fund (500 companies)', '{planFundText}'] }] },
    { kind: 'document', form: 'statement', tab: 'Brokerage', title: '{who}’s brokerage account', head: ['Holding', 'Value'],
      rows: [{ id: 'k1', cells: ['{company} shares, from work', '{fromWorkText}'] }, { id: 'k2', cells: ['US Stock Market Fund (about 3,500 companies)', '{broadText}'] }] },
    { kind: 'document', form: 'statement', tab: 'Bank', title: '{who}’s bank', head: ['Account', 'Balance'], rows: [{ id: 'c1', cells: ['Savings', '{bankText}'] }] }];
  const shareAsk = kind => ({
    id: 'share', kind: 'number', prompt: 'What share of all {who}’s accounts together is {company} stock?', frame: '__%', places: 1, answer: 'share', tol: { abs: 1 },
    traps: [{ slip: 'one-account-share', value: 'planOnly', then: 'That counts the stock in the 401(k) only. The shares from work in the brokerage account are the same company.' },
      { slip: 'one-account-share', value: 'workOnly', then: 'That counts the shares from work only. The 401(k)’s stock fund is the same company.' },
      ...(kind === 'index' ? [{ slip: 'fund-as-one-bet', value: 'withFund', then: 'That adds the US Stock Market Fund in. It holds thousands of companies, so it is not a bet on {company}.' }] : [])]
  });
  const fromAsk = {
    id: 'from', kind: 'choose', prompt: 'Where would {who} sell first?', shuffle: true, when: { ask: 'call', is: ['change'] },
    options: [
      { id: 'plan', text: '{company} Stock Fund, in the 401(k)', ok: true, then: 'A sale inside a 401(k) is not taxed.' },
      { id: 'brok', text: '{company} shares from work, in the brokerage account', slip: 'sold-taxed-first', then: 'A sale there may owe tax on the gain; inside the 401(k) it is not taxed.' },
      { id: 'broad', text: 'US Stock Market Fund, in the brokerage account', slip: 'fund-as-one-bet', then: 'That fund holds thousands of companies: selling it leaves the bet on {company} as it was.' }]
  };
  const CALL = {
    over: { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'bet-missed' },
      then: { leave: '{company} is {share}% of everything, over 10%. If it fell hard, {who}’s savings and pay would fall together.' } },
    under: { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'leave', slips: { change: 'sold-small-bet' },
      then: { change: '{company} is {share}% of everything, under 10%: the line is not passed.' } },
    index: { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'leave', slips: { change: 'fund-as-one-bet' },
      then: { change: 'The big holding is a fund of thousands of companies, not one bet. {company} is only {share}%.' } }
  };
  const REASON = {
    over: '{company} is {companyText} of {totalText}, {share}% across the 401(k) and the brokerage account, over 10%. Selling about {sellText}, first in the 401(k) where a sale is not taxed, brings it down to 10%.',
    under: '{company} is {companyText} of {totalText}, {share}% across both accounts, under 10%. Nothing needs to change.',
    index: 'The large holding is a fund of thousands of companies, which is not one bet. {company} itself is {share}%, under 10%.'
  };
  const generator = (kind, id) => ({
    id, strand: 'share', facets: { call: kind === 'over' ? 'change' : 'leave' }, params: { ...COMMON, ...KINDS[kind] }, make: household, blocks: docs,
    asks: [shareAsk(kind), CALL[kind], ...(kind === 'over' ? [{ id: 'sell', kind: 'number', prompt: 'About how much {company} stock would {who} sell to bring it down to 10%?',
      frame: '$__', places: 0, answer: 'sell', tol: { rel: 0.05 }, when: { ask: 'call', is: ['change'] } }, fromAsk] : [])],
    steps: [
      { id: 'company', does: 'Add up the company’s stock in every account.', working: '{inPlanText} + {fromWorkText} = {companyText}.' },
      { id: 'share', does: 'Divide by the total of all the accounts.', working: '{companyText} ÷ {totalText} = {share}%.', ask: 'share' },
      { id: 'call', does: 'Hold it against 10%. A fund of hundreds of companies is not one bet.', working: kind === 'over' ? '{share}% is over 10%.' : '{share}% is under 10%.', ask: 'call' },
      ...(kind === 'over' ? [{ id: 'sell', does: 'Work out what to sell.', working: '10% of {totalText} is {tenText}. {companyText} − {tenText} = {sellText}.', ask: 'sell' },
        { id: 'from', does: 'Sell first where a sale is not taxed.', working: 'Inside the 401(k) first: no tax on a sale there. Whatever is left to sell comes from the shares in the brokerage account, which may owe tax on their gain.', ask: 'from' }] : [])],
    deciding: ['a1', 'k1', 'k2'], reason: REASON[kind]
  });
  FC.gen('wealth', [generator('over', 'g-share-over'), generator('under', 'g-share-under'), generator('index', 'g-share-index')]);

  // the worked household: Acme Corp 14,000 in the 401(k) and 16,000 from work, 30,000 of 115,000 = 26.1%; 10% is 11,500, so sell about 18,500
  FC.items('wealth', [{
    id: 'w-share', strand: 'share', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'statement', tab: '401(k)', title: 'Owen’s 401(k)', head: ['Fund', 'Value'],
        rows: [{ id: 'a1', cells: ['Acme Corp Stock Fund', '$14,000'] }, { id: 'a2', cells: ['Large Company Fund (500 companies)', '$52,000'] }] },
      { kind: 'document', form: 'statement', tab: 'Brokerage', title: 'Owen’s brokerage account', head: ['Holding', 'Value'],
        rows: [{ id: 'k1', cells: ['Acme Corp shares, from work', '$16,000'] }, { id: 'k2', cells: ['US Stock Market Fund (about 3,500 companies)', '$18,000'] }] },
      { kind: 'document', form: 'statement', tab: 'Bank', title: 'Owen’s bank', head: ['Account', 'Balance'], rows: [{ id: 'c1', cells: ['Savings', '$15,000'] }] }],
    asks: [
      { id: 'share', kind: 'number', prompt: 'What share of all Owen’s accounts together is Acme Corp stock?', frame: '__%', places: 1, answer: 26.1, tol: { abs: 1 } },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'bet-missed' },
        then: { leave: 'Acme Corp is 26.1% of everything, over 10%. If it fell hard, Owen’s savings and pay would fall together.' } },
      { id: 'sell', kind: 'number', prompt: 'About how much Acme Corp stock would Owen sell to bring it down to 10%?', frame: '$__', places: 0, answer: 18500, tol: { rel: 0.05 },
        when: { ask: 'call', is: ['change'] } },
      { id: 'from', kind: 'choose', prompt: 'Where would Owen sell first?', when: { ask: 'call', is: ['change'] },
        options: [
          { id: 'brok', text: 'Acme Corp shares from work, in the brokerage account', slip: 'sold-taxed-first', then: 'A sale there may owe tax on the gain; inside the 401(k) it is not taxed.' },
          { id: 'plan', text: 'Acme Corp Stock Fund, in the 401(k)', ok: true, then: 'A sale inside a 401(k) is not taxed.' },
          { id: 'broad', text: 'US Stock Market Fund, in the brokerage account', slip: 'fund-as-one-bet', then: 'That fund holds thousands of companies: selling it leaves the bet on Acme Corp as it was.' }] }],
    steps: [
      { id: 'company', does: 'Add up the company’s stock in every account.', working: '$14,000 + $16,000 = $30,000.' },
      { id: 'share', does: 'Divide by the total of all the accounts.', working: '$30,000 ÷ $115,000 = 26.1%.', ask: 'share' },
      { id: 'call', does: 'Hold it against 10%. A fund of hundreds of companies is not one bet.', working: '26.1% is over 10%.', ask: 'call' },
      { id: 'sell', does: 'Work out what to sell.', working: '10% of $115,000 is $11,500. $30,000 − $11,500 = $18,500.', ask: 'sell' },
      { id: 'from', does: 'Sell first where a sale is not taxed.', working: 'All $14,000 in the 401(k) first: no tax on a sale there. The other $4,500 from the shares in the brokerage account, which may owe tax on their gain.', ask: 'from' }],
    deciding: ['a1', 'k1', 'k2'],
    reason: 'Acme Corp is $30,000 of $115,000, 26.1% across the 401(k) and the brokerage account, over 10%. Selling about $18,500, the 401(k)’s $14,000 first, brings it down to 10%.'
  }]);
})();
