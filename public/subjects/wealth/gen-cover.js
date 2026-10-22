// Wealth, lesson 8 "A loss you could not pay": two kinds of question, made with fresh numbers (lesson standard 3, generators).
// The loss matrix (research W20, the two questions of W61): could you pay the worst of it from savings without real harm (about a tenth of
// the savings or less, a judgement call, W61), keep it; if not, can someone carry it for a price (insurance; an LLC for a rental, W55), pass
// it on; if no one can (a loan against your stocks, a loan you co-sign, money put into a venture, W22, W56), avoid it or take less. A claim
// from hurting someone has no top (W20: low frequency, high severity), so a liability story is always passed on, never kept. A loss whose
// stated amount is its worst case (a repair to your own home or car, a loan, a co-signature, a stake) comes small and large, so for those the
// size against the savings decides keep or not: `g-risk-keep` draws one of the six bounded stories small (1-8% of the savings), `g-risk-pass`
// an insurable one (three liability stories and the kitchen fire) at 2-8 times the savings, `g-risk-avoid` an uninsurable one at 1-3 times.
// The liability check (W21 a judgement call, W54, W62): what a claim could reach is everything owned less what is owed, but not a 401(k), which
// federal law shields from most claims; an IRA and a home are counted, to be safe (their shields vary). The claim is paid by the policy it falls
// under (a crash by the car policy, a fall at home by the home policy), up to that policy's limit, plus an umbrella on top. The car and home
// limits differ (one is twice the other), so which policy pays is read from the story. Four kinds: short (the claim could reach more than
// its policy pays: change), which (more than the other policy's limit, less than its own: leave), shield (over only if the 401(k) is wrongly
// counted: leave), umbrella (over the limit, under the limit and the umbrella: leave). All money is whole thousands. The app's `cover` work,
// which holds the lower limit (either claim can come), gives the worked household's answer (tests/own-later-pure.mjs).
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const thousand = x => Math.round(x / 1000) * 1000;
  const fifty = x => Math.max(50, Math.round(x / 50) * 50);
  const PEOPLE = ['Ana', 'Grace', 'Leah', 'Nadia'];

  /* ---------- the loss matrix ---------- */
  const STORIES = {
    pass: [
      '{who} causes a crash that hurts another driver, who sues her for {costText}.',
      'A kitchen fire at {who}’s house: {costText} to repair.',
      'A guest slips on {who}’s stairs and claims {costText} for the injury.',
      'A tenant hurt in {who}’s rental condo sues her for {costText}.'],
    avoid: [
      '{who} plans to borrow {costText} from her brokerage firm against her stocks, to buy more. If prices fall, the firm can sell her shares without asking.',
      'A friend wants {who} to co-sign a {costText} loan. If the friend stops paying, she owes it.',
      '{who} plans to put {costText} into her cousin’s new restaurant. Nothing pays it back if it fails.',
      '{who} plans to lend {costText} to a friend starting a business, with nothing in writing.']
  };
  // the bounded losses: the stated amount is the worst of it, so they may come small
  const BOUNDED = [STORIES.pass[1], '{who} backs into a post: {costText} to fix her own car.', ...STORIES.avoid];
  const RISK_PARAMS = {
    keep: { whoAt: [0, 3, 1], storyAt: [0, 5, 1], savings: [20000, 200000, 1000], share: [0.01, 0.08, 0.01] },
    pass: { whoAt: [0, 3, 1], storyAt: [0, 3, 1], savings: [20000, 200000, 1000], times: [2, 8, 1] },
    avoid: { whoAt: [0, 3, 1], storyAt: [0, 3, 1], savings: [20000, 200000, 1000], times: [1, 3, 0.5] }
  };
  const riskValues = (pick, kind) => {
    const savings = pick('savings'), cost = kind === 'keep' ? fifty(savings * pick('share')) : thousand(savings * pick('times')), who = PEOPLE[pick('whoAt')];
    const story = kind === 'keep' ? BOUNDED[pick('storyAt')] : STORIES[kind][pick('storyAt')];
    return { who, savings, cost, savingsText: whole(savings), costText: whole(cost), event: story.replace(/\{who\}/g, who).replace('{costText}', whole(cost)) };
  };
  const PAY = {
    keep: { yes: { ok: true, then: '{costText} is small beside savings of {savingsText}: paying it would not do real harm.' }, no: { slip: 'insured-small', then: '{costText} is small beside savings of {savingsText}: she could pay it without real harm.' } },
    big: { no: { ok: true, then: '{costText} would take all of savings of {savingsText}, or more.' }, yes: { slip: 'kept-ruinous', then: '{costText} would take all of savings of {savingsText}, or more.' } }
  };
  const FITS = {
    keep: { right: 'keep', slips: { pass: 'insured-small', avoid: 'insured-small' },
      then: { pass: 'Paying someone to carry a loss this small costs more over the years than the loss.', avoid: 'A loss you could pay without real harm is one to keep, and pay if it comes.' } },
    pass: { right: 'pass', slips: { keep: 'kept-ruinous', avoid: 'avoided-insurable' },
      then: { keep: 'That could take more than {who} has, and insurers carry it for a price.', avoid: 'Insurers carry this loss for a price (and an LLC holds a rental’s), so there is no need to give it up.' } },
    avoid: { right: 'avoid', slips: { keep: 'kept-ruinous', pass: 'no-insurer' },
      then: { keep: 'Losing it would take all of {who}’s savings, or more.', pass: 'No insurer pays back a fall in prices, a loan you signed for or money put into a venture.' } }
  };
  const REASON = {
    keep: '{costText} is the worst of it, and small beside savings of {savingsText}: {who} could pay it without real harm, so she keeps it.',
    pass: '{costText} would take all of savings of {savingsText}, or more, and an insurer carries this kind of loss (an LLC holds a rental’s): pass it on for a price.',
    avoid: '{costText} would take all of savings of {savingsText}, or more, and no insurer carries it: avoid it, or take on less.'
  };
  const riskGen = (kind, id) => ({
    id, strand: 'risk', facets: { call: kind === 'keep' ? 'leave' : 'change' }, params: RISK_PARAMS[kind], make: pick => riskValues(pick, kind),
    blocks: [{ kind: 'prose', text: ['{event}', '{who} has {savingsText} in savings.'] }],
    asks: [
      { id: 'pay', kind: 'choose', prompt: 'Could {who} pay the worst of it from her savings without real harm?', options: [
        { id: 'yes', text: 'Yes', ...PAY[kind === 'keep' ? 'keep' : 'big'].yes }, { id: 'no', text: 'No', ...PAY[kind === 'keep' ? 'keep' : 'big'].no }] },
      { id: 'fits', kind: 'choose', prompt: 'What fits this loss?', from: 'risk', ...FITS[kind] }],
    steps: [
      { id: 'pay', does: 'Hold the worst of it against the savings: about a tenth or less is small.', working: kind === 'keep' ? '{costText} beside {savingsText}: small. She could pay it.' : '{costText} beside {savingsText}: she could not.', ask: 'pay' },
      { id: 'fits', does: 'If not, look for someone who carries it for a price.', working: kind === 'keep' ? 'Small: keep it.' : kind === 'pass' ? 'Insurers carry it: pass it on.' : 'No insurer carries it: avoid it, or take less.', ask: 'fits' }],
    reason: REASON[kind]
  });

  /* ---------- the liability check ---------- */
  const LOW = [250000, 300000];
  const UMBRELLA = 1000000;
  const CLAIMS = [{ text: 'a crash in which another driver is badly hurt', policy: 'car' }, { text: 'a guest’s bad fall at her home', policy: 'home' }];
  const BASE = { whoAt: [0, 3, 1], lowAt: [0, 1, 1], claimAt: [0, 1, 1], bank: [10000, 40000, 1000], plan: [80000, 300000, 1000] };
  const COVER_PARAMS = {
    short: { ...BASE, over: [1.3, 1.9, 0.1], home: [250000, 450000, 10000], owe: [0.5, 0.8, 0.05], ira: [10000, 50000, 1000] },
    which: { ...BASE, over: [1.3, 1.9, 0.1], home: [250000, 450000, 10000], owe: [0.5, 0.8, 0.05], ira: [10000, 50000, 1000] },
    shield: { ...BASE, bank: [10000, 30000, 1000], over: [0.7, 0.9, 0.05], home: [200000, 260000, 10000], owe: [0.6, 0.8, 0.05], ira: [5000, 15000, 1000], past: [50000, 200000, 1000] },
    umbrella: { ...BASE, over: [2.2, 3.5, 0.1], home: [250000, 450000, 10000], owe: [0.5, 0.8, 0.05], ira: [10000, 50000, 1000] }
  };
  function coverValues(pick, kind){
    const low = LOW[pick('lowAt')], high = 2 * low, claim = CLAIMS[pick('claimAt')];
    // the claim's own policy holds the low limit, except in `which`, where it holds the high one
    const own = kind === 'which' ? high : low, other = kind === 'which' ? low : high;
    const car = claim.policy === 'car' ? own : other, homeLimit = claim.policy === 'car' ? other : own;
    const umbrella = kind === 'umbrella' ? UMBRELLA : 0, home = pick('home'), owe = thousand(home * pick('owe')), equity = home - owe, bank = pick('bank'), ira = pick('ira');
    const reach = thousand(low * pick('over')), brok = reach - bank - equity - ira;
    const plan = kind === 'shield' ? high - reach + pick('past') : pick('plan'), pays = own + umbrella;
    return {
      who: PEOPLE[pick('whoAt')], claimText: claim.text, carText: whole(car), homeLimitText: whole(homeLimit), umbrellaText: umbrella ? whole(umbrella) : 'None',
      homeText: whole(home), oweText: whole(owe), equityText: whole(equity), bankText: whole(bank), iraText: whole(ira), brokText: whole(brok), planText: whole(plan),
      reach, reachText: whole(reach), withPlan: reach + plan, withHome: reach + owe, pays, paysText: whole(pays), ownText: whole(own), own, otherPays: other + umbrella,
      policyText: claim.policy === 'car' ? 'the car policy' : 'the home policy', gap: Math.max(0, reach - pays), gapText: whole(Math.max(0, reach - pays))
    };
  }
  const coverDocs = [
    { kind: 'prose', text: ['Suppose {who} is sued after {claimText}.'] },
    { kind: 'document', form: 'statement', tab: 'Accounts', title: '{who}’s accounts', head: ['Account', 'Balance'],
      rows: [{ id: 'a1', cells: ['Bank savings', '{bankText}'] }, { id: 'a2', cells: ['Brokerage account', '{brokText}'] }, { id: 'a4', cells: ['IRA', '{iraText}'] },
        { id: 'a3', cells: ['401(k)', '{planText}'] }] },
    { kind: 'document', form: 'table', tab: 'Home', title: '{who}’s home', head: ['Home', 'Dollars'],
      rows: [{ id: 'h1', cells: ['What it is worth', '{homeText}'] }, { id: 'h2', cells: ['Mortgage owed', '{oweText}'] }] },
    { kind: 'document', form: 'table', tab: 'Insurance', title: 'Liability limits, from the first page of each policy', head: ['Policy', 'Limit'],
      rows: [{ id: 'i1', cells: ['Car: liability, each accident', '{carText}'] }, { id: 'i2', cells: ['Home: personal liability, each occurrence', '{homeLimitText}'] },
        { id: 'i3', cells: ['Umbrella: on top of either', '{umbrellaText}'] }] }];
  const reachAsk = { id: 'reach', kind: 'number', prompt: 'What could a claim against {who} reach?', frame: '$__', places: 0, answer: 'reach', tol: { abs: 1 },
    traps: [{ slip: 'counted-shielded', value: 'withPlan', then: 'That counts the 401(k). Federal law shields it from most claims.' },
      { slip: 'owed-left-out', value: 'withHome', then: 'That counts the whole home. What a claim could reach is what it is worth less the mortgage owed.' }] };
  const paysAsk = kind => ({ id: 'pays', kind: 'number', prompt: 'What is the most {who}’s insurance pays on this claim?', frame: '$__', places: 0, answer: 'pays', tol: { abs: 1 },
    traps: [{ slip: 'wrong-policy', value: 'otherPays', then: 'That is the other policy’s limit. This claim falls under {policyText}.' },
      ...(kind === 'umbrella' ? [{ slip: 'umbrella-missed', value: 'own', then: 'The umbrella pays on top of the car or home limit: add it.' }] : [])] });
  const CALL = {
    short: { right: 'change', slips: { leave: 'cover-missed' }, then: { leave: 'A claim could reach {reachText}, and {policyText} pays at most {paysText}: the rest could be taken.' } },
    which: { right: 'leave', slips: { change: 'wrong-policy' }, then: { change: 'This claim falls under {policyText}, which pays up to {paysText}, more than the {reachText} a claim could reach.' } },
    shield: { right: 'leave', slips: { change: 'counted-shielded' }, then: { change: 'Without the 401(k), which the law shields, a claim could reach {reachText}, under the {paysText} limit.' } },
    umbrella: { right: 'leave', slips: { change: 'umbrella-missed' }, then: { change: 'With the umbrella on top, the most paid is {paysText}, more than the {reachText} a claim could reach.' } }
  };
  const REACH = 'Bank {bankText} + brokerage {brokText} + IRA {iraText} + home {equityText} after the mortgage = {reachText} a claim could reach (the 401(k) is shielded).';
  const COVER_REASON = {
    short: `${REACH} This claim falls under {policyText}: at most {paysText}, so {gapText} is exposed. Higher limits or an umbrella is the usual answer.`,
    which: `${REACH} This claim falls under {policyText}, whose {paysText} limit covers it. Nothing to change for this claim.`,
    shield: `${REACH} That is under the {paysText} {policyText} pays, so there is nothing to change.`,
    umbrella: `${REACH} That is more than the {ownText} limit of {policyText}, but the umbrella adds {umbrellaText} on top: {paysText} in all. Nothing to change.`
  };
  const coverGen = (kind, id) => ({
    id, strand: 'cover', facets: { call: kind === 'short' ? 'change' : 'leave' }, params: COVER_PARAMS[kind], make: pick => coverValues(pick, kind), blocks: coverDocs,
    asks: [reachAsk, paysAsk(kind), { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', ...CALL[kind] },
      ...(kind === 'short' ? [{ id: 'gap', kind: 'number', prompt: 'How much of what a claim could reach is past the cover?', frame: '$__', places: 0, answer: 'gap', tol: { abs: 1 },
        when: { ask: 'call', is: ['change'] } }] : [])],
    steps: [
      { id: 'reach', does: 'Add up what a claim could reach: every account but the 401(k), and the home less its mortgage.', working: '{bankText} + {brokText} + {iraText} + ({homeText} − {oweText}) = {reachText}.', ask: 'reach' },
      { id: 'pays', does: 'Find the policy this claim falls under, its limit, and an umbrella on top.', working: kind === 'umbrella' ? '{policyText}: {ownText}, + {umbrellaText} = {paysText}.' : '{policyText}: {paysText}, and no umbrella.', ask: 'pays' },
      { id: 'call', does: 'Hold one against the other.', working: kind === 'short' ? '{reachText} is more than {paysText}. Change it.' : '{reachText} is no more than {paysText}. Leave it.', ask: 'call' },
      ...(kind === 'short' ? [{ id: 'gap', does: 'Work out what is exposed.', working: '{reachText} − {paysText} = {gapText}.', ask: 'gap' }] : [])],
    deciding: ['a1', 'a2', 'a3', 'a4', 'h1', 'h2', 'i1', 'i2', 'i3'], reason: COVER_REASON[kind]
  });
  FC.gen('wealth', [riskGen('keep', 'g-risk-keep'), riskGen('pass', 'g-risk-pass'), riskGen('avoid', 'g-risk-avoid'),
    coverGen('short', 'g-cover-short'), coverGen('which', 'g-cover-which'), coverGen('shield', 'g-cover-shield'), coverGen('umbrella', 'g-cover-umbrella')]);

  /* ---------- the worked questions ---------- */
  // Grace: bank 25,000 + brokerage 140,000 + IRA 40,000 + home 420,000 less 290,000 = 335,000 a claim could reach (her 401(k)'s 150,000 is
  // shielded); a crash falls under the car policy, 300,000, with no umbrella, so 35,000 is exposed (the home policy's 500,000 is not this claim's)
  FC.items('wealth', [{
    id: 'w-risk', strand: 'risk', facets: { call: 'change' },
    blocks: [{ kind: 'prose', text: ['A guest slips on Ana’s stairs and claims $400,000 for the injury.', 'Ana has $45,000 in savings.'] }],
    asks: [
      { id: 'pay', kind: 'choose', prompt: 'Could Ana pay the worst of it from her savings without real harm?', options: [
        { id: 'yes', text: 'Yes', slip: 'kept-ruinous', then: '$400,000 is far more than savings of $45,000.' }, { id: 'no', text: 'No', ok: true }] },
      { id: 'fits', kind: 'choose', prompt: 'What fits this loss?', from: 'risk', right: 'pass', slips: { keep: 'kept-ruinous', avoid: 'avoided-insurable' },
        then: { keep: 'That could take far more than Ana has, and insurers carry it for a price.', avoid: 'Insurers carry this loss for a price, so there is no need to give it up.' } }],
    steps: [
      { id: 'pay', does: 'Hold the worst of it against the savings: about a tenth or less is small.', working: '$400,000 beside $45,000: she could not.', ask: 'pay' },
      { id: 'fits', does: 'If not, look for someone who carries it for a price.', working: 'Insurers carry a claim from a fall at home: pass it on. Had the claim been $1,500, she would keep it.', ask: 'fits' }],
    reason: '$400,000 could take far more than savings of $45,000, and it is insurable: the liability part of her home policy passes it on for a price.'
  }, {
    id: 'w-cover', strand: 'cover', facets: { call: 'change' },
    blocks: [
      { kind: 'prose', text: ['Suppose Grace is sued after a crash in which another driver is badly hurt.'] },
      { kind: 'document', form: 'statement', tab: 'Accounts', title: 'Grace’s accounts', head: ['Account', 'Balance'],
        rows: [{ id: 'a1', cells: ['Bank savings', '$25,000'] }, { id: 'a2', cells: ['Brokerage account', '$140,000'] }, { id: 'a4', cells: ['IRA', '$40,000'] }, { id: 'a3', cells: ['401(k)', '$150,000'] }] },
      { kind: 'document', form: 'table', tab: 'Home', title: 'Grace’s home', head: ['Home', 'Dollars'],
        rows: [{ id: 'h1', cells: ['What it is worth', '$420,000'] }, { id: 'h2', cells: ['Mortgage owed', '$290,000'] }] },
      { kind: 'document', form: 'table', tab: 'Insurance', title: 'Liability limits, from the first page of each policy', head: ['Policy', 'Limit'],
        rows: [{ id: 'i1', cells: ['Car: liability, each accident', '$300,000'] }, { id: 'i2', cells: ['Home: personal liability, each occurrence', '$500,000'] },
          { id: 'i3', cells: ['Umbrella: on top of either', 'None'] }] }],
    asks: [
      { id: 'reach', kind: 'number', prompt: 'What could a claim against Grace reach?', frame: '$__', places: 0, answer: 335000, tol: { abs: 1 },
        traps: [{ slip: 'counted-shielded', value: 485000, then: 'That counts the 401(k). Federal law shields it from most claims.' },
          { slip: 'owed-left-out', value: 625000, then: 'That counts the whole home. What a claim could reach is what it is worth less the mortgage owed.' }] },
      { id: 'pays', kind: 'number', prompt: 'What is the most Grace’s insurance pays on this claim?', frame: '$__', places: 0, answer: 300000, tol: { abs: 1 },
        traps: [{ slip: 'wrong-policy', value: 500000, then: 'That is the home policy’s limit. A crash falls under the car policy.' }] },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'cover-missed' },
        then: { leave: 'A claim could reach $335,000, and the car policy pays at most $300,000: the rest could be taken.' } },
      { id: 'gap', kind: 'number', prompt: 'How much of what a claim could reach is past the cover?', frame: '$__', places: 0, answer: 35000, tol: { abs: 1 }, when: { ask: 'call', is: ['change'] } }],
    steps: [
      { id: 'reach', does: 'Add up what a claim could reach: every account but the 401(k), and the home less its mortgage.', working: '$25,000 + $140,000 + $40,000 + ($420,000 − $290,000) = $335,000.', ask: 'reach' },
      { id: 'pays', does: 'Find the policy this claim falls under, its limit, and an umbrella on top.', working: 'A crash: the car policy, $300,000, and no umbrella.', ask: 'pays' },
      { id: 'call', does: 'Hold one against the other.', working: '$335,000 is more than $300,000. Change it.', ask: 'call' },
      { id: 'gap', does: 'Work out what is exposed.', working: '$335,000 − $300,000 = $35,000.', ask: 'gap' }],
    deciding: ['a1', 'a2', 'a3', 'a4', 'h1', 'h2', 'i1', 'i3'],
    reason: 'Bank $25,000 + brokerage $140,000 + IRA $40,000 + home $130,000 after the mortgage = $335,000 a claim could reach (the 401(k) is shielded). A crash falls under the car policy, at most $300,000, so $35,000 is exposed: higher limits or an umbrella is the usual answer.'
  }]);
})();
