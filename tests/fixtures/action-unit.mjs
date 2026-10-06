// A small made-up ACTION subject (lesson standard E18, E21, A10, E9): a gate unit with a family where nothing is wrong, a baseline
// check asked once before it, a plan card that closes it, and a second unit whose branch has two questions so a "which
// question tells these two apart" item can be asked. Self-contained: it is sent to the page as source.
export function registerActionUnit() {
  const S = 'acttest';
  FC.subject(S, { name: 'Action test', rev: 1, standard: 1, action: true, blurb: 'x', units: ['u1', 'u2'], settings: ['work', 'home', 'money'], limits: [],
    baseline: ['bl-1', 'bl-2', 'bl-3', 'bl-4'], history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }] });
  FC.key(S, {
    terms: [], avoid: [],
    outcomes: [
      { id: 'invoice', group: 'pay', unit: 'u2', n: 'Fake invoice', plain: 'a bill for something you never ordered', needs: 'a bill from a sender you were expecting, with new account details', aka: [] },
      { id: 'prize', group: 'pay', unit: 'u2', n: 'Prize scam', plain: 'a prize you must pay to collect', needs: 'a payment asked for before a prize you never entered for', aka: [] },
      { id: 'realbill', group: 'pay', unit: 'u2', legit: true, n: 'Real bill', plain: 'a bill that is just a bill', needs: 'a bill from a sender you were expecting, to the account you always pay', aka: [] }],
    gate: { code: 'D1', unit: 'u1', q: 'What is the message trying to get you to do?', purpose: 'Sorts messages by what they want from you', why: 'What a message wants decides what could go wrong.',
      options: [
        { id: 'pay', n: 'Pay money', plain: 'a request for money', needs: 'a request to pay, and an amount or an account', when: 'the message asks you to pay', keeps: ['invoice', 'prize', 'realbill'], aka: [] },
        { id: 'share', n: 'Share a secret', plain: 'a request for a code or password', needs: 'a request for a code, a password or a number only you should know', when: 'the message asks for a code or a password', keeps: [] },
        { id: 'fine', n: 'Nothing to do', plain: 'a message that asks for nothing risky', legit: true, needs: 'a message that only tells you something and asks for nothing', when: 'the message asks nothing of you', keeps: [] }] },
    branches: { pay: [
      { code: 'R1', unit: 'u2', q: 'Were you expecting a payment request from this sender?', purpose: 'Sorts senders you know from senders you do not',
        why: 'A request from someone you were expecting has a reason to exist; one from a stranger has to prove it.',
        options: [
          { id: 'yes', n: 'Expecting it', when: 'you have an account or an order with the sender', keeps: ['realbill', 'invoice'] },
          { id: 'no', n: 'Not expecting it', when: 'you have no account or order with the sender', keeps: ['prize'] }] },
      { code: 'R2', unit: 'u2', q: 'Does the payment go to the account you always pay?', purpose: 'Sorts a usual account from a new one',
        why: 'A scam has to move the money somewhere new.',
        options: [
          { id: 'usual', n: 'The usual account', when: 'the account is the one you have always paid', keeps: ['realbill'] },
          { id: 'new', n: 'A new account', when: 'the account is one you have not paid before', keeps: ['invoice', 'prize'] }] }] }
  });
  const seg = (a, b, c) => [{ text: a, note: 'Not that piece.' }, { text: b }, { text: c, note: 'Not that piece.' }];
  // a gate case: the text is built from the cue
  const g = (id, family, cue, extra) => ({ id, use: 'teach', tier: 'clean', setting: 'work', topic: id, text: `A message says this: ${cue}, and then it stops.`, route: { D1: [family] },
    cues: { D1: cue }, reason: { D1: 'The message says {cue:D1}.' }, ...extra });
  const tapped = (id, family, cue, extra) => g(id, family, cue, { segments: seg('A message says this:', cue, ', and then it stops.'), ...extra });
  // a branch case
  const b = (id, outcome, route, cues, text, extra) => ({ id, use: 'teach', tier: 'clean', setting: 'work', topic: id, text, outcome, route: { D1: ['pay'], ...route }, cues: { D1: cues.D1, ...cues },
    reason: { D1: 'The message asks {cue:D1}.', R1: 'On the sender: {cue:R1}.', R2: 'On the account: {cue:R2}.' },
    not: { outcome: { invoice: 'prize', prize: 'realbill', realbill: 'invoice' }[outcome], why: 'It does not fit that name for this case.' }, ...extra });
  // a payment request, built from the outcome: who writes, and where the money goes
  const sureBill = (id, outcome, use, tier, extra) => {
    const stranger = outcome === 'prize', account = outcome === 'realbill' ? 'the account on every old bill' : 'a brand new account';
    return b(id, outcome, { R1: [stranger ? 'no' : 'yes'], R2: [outcome === 'realbill' ? 'usual' : 'new'] },
      { D1: 'please pay', R1: stranger ? 'never heard of' : 'Your usual supplier', R2: account },
      `${stranger ? 'A sender you have never heard of says you won, and writes' : 'Your usual supplier writes'}: please pay ${id} to ${account}.`, { use, tier, ...extra });
  };
  const rt = outcomeId => [1, 2, 3, 4].map(n => sureBill(`rt-${outcomeId}-${n}`, outcomeId, 'return', 'clean', { topic: `${outcomeId} return ${n}`, setting: ['work', 'home', 'money', 'work'][n - 1] }));

  FC.cases(S, 'u1', [
    // the baseline: asked once before Unit One, half of them where nothing is wrong
    tapped('bl-1', 'pay', 'send £200 now or lose the account', { use: 'baseline', topic: 'a pay-now message' }),
    tapped('bl-2', 'fine', 'your parcel arrives on Tuesday', { use: 'baseline', topic: 'a parcel notice' }),
    tapped('bl-3', 'share', 'read me the code we just texted you', { use: 'baseline', topic: 'a code request' }),
    tapped('bl-4', 'fine', 'the meeting is moved to room two', { use: 'baseline', topic: 'a room change' }),
    // unit one: a gate unit
    g('t-pay', 'pay', 'please pay £50 today', { name: 'The payment note' }),
    tapped('t-pay2', 'pay', 'transfer the fee to this account', { name: 'The fee note', setting: 'home', use: 'check' }),
    g('t-share', 'share', 'tell us your password', { name: 'The password ask' }),
    tapped('t-share2', 'share', 'confirm the code from your phone', { setting: 'money', use: 'check' }),
    g('t-fine', 'fine', 'your order has shipped', { name: 'The shipping note' }),
    tapped('t-fine2', 'fine', 'the office is closed on Monday', { setting: 'home', use: 'check' }),
    g('d1-pay', 'pay', 'wire the deposit today', { use: 'drill' }),
    g('d1-share', 'share', 'give me your pin', { use: 'drill', setting: 'home' }),
    g('d1-fine', 'fine', 'the bill is attached for your records', { use: 'drill', setting: 'money' }),
    g('d1-fine2', 'fine', 'your appointment is on Friday', { use: 'drill', setting: 'work', tier: 'varied' }),
    g('d1-pay2', 'pay', 'the fee is due this week', { use: 'drill', setting: 'money', tier: 'varied' }),
    g('d1-share2', 'share', 'reply with the number on your card', { use: 'drill', setting: 'work', tier: 'misleading' }),
    { id: 'rev1-fine', use: 'drill', kind: 'reverse', outcome: 'fine', expect: 'hear', options: [{ text: 'It only tells you something', voice: 'fine' }, { text: 'It asks for a password', voice: 'share' }], why: 'A fine message asks nothing.' },
    ...['pay', 'share', 'fine'].flatMap((f, i) => [1, 2, 3, 4].map(n => g(`rt1-${f}-${n}`, f, `return line ${f} ${n}`, { use: 'return', setting: ['work', 'home', 'money'][(i + n) % 3], topic: `rt1 ${f} ${n}` })))
  ]);
  FC.cases(S, 'u2', [
    sureBill('m-inv', 'invoice', 'teach', 'clean', { name: 'The odd invoice' }),
    sureBill('m-prz', 'prize', 'teach', 'clean', { name: 'The draw' }),
    sureBill('m-rb', 'realbill', 'teach', 'clean', { name: 'The usual bill' }),
    sureBill('c-inv', 'invoice', 'check', 'clean', { setting: 'home' }),
    sureBill('c-rb', 'realbill', 'check', 'clean', { setting: 'home' }),
    sureBill('d2-inv1', 'invoice', 'drill', 'clean', { setting: 'work' }), sureBill('d2-prz1', 'prize', 'drill', 'clean', { setting: 'home' }), sureBill('d2-rb1', 'realbill', 'drill', 'clean', { setting: 'money' }),
    sureBill('d2-inv2', 'invoice', 'drill', 'varied', { setting: 'money' }), sureBill('d2-prz2', 'prize', 'drill', 'varied', { setting: 'work' }), sureBill('d2-rb2', 'realbill', 'drill', 'misleading', { setting: 'home' }),
    ...rt('invoice'), ...rt('prize'), ...rt('realbill')
  ]);
  const meet = (outcome, caseId, step, option) => ({ id: `meet-${outcome}`, kind: 'meet', outcome, link: 'Link.', case: caseId, mark: step, strip: ['one', 'two'], explain: 'Because {cue:R1}.',
    feature: { step, option }, name: 'The name is {o:' + outcome + '}.' });
  FC.cards(S, 'u1', [
    { id: 'orient', kind: 'orient', h: 'Orient', canDo: 'Do it.', everyday: 'Every day.', map: { branch: 'none' } },
    { id: 'meet-pay', kind: 'meet', family: 'pay', link: 'Link.', case: 't-pay', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.', feature: { step: 'D1', option: 'pay' }, name: 'The name is {o:pay}.' },
    { id: 'check-pay', kind: 'check', after: 'pay', case: 't-pay2', ask: { type: 'phrase', step: 'D1', say: 'Tap the request.', answer: 'transfer the fee to this account' } },
    { id: 'meet-share', kind: 'meet', family: 'share', link: 'Link.', case: 't-share', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.', feature: { step: 'D1', option: 'share' }, name: 'The name is {o:share}.' },
    { id: 'check-share', kind: 'check', after: 'share', case: 't-share2', ask: { type: 'phrase', step: 'D1', say: 'Tap the request.', answer: 'confirm the code from your phone' } },
    { id: 'meet-fine', kind: 'meet', family: 'fine', link: 'Link.', case: 't-fine', mark: 'D1', strip: ['one', 'two'], explain: 'Because {cue:D1}.', feature: { step: 'D1', option: 'fine' }, name: 'The name is {o:fine}.' },
    { id: 'check-fine', kind: 'check', after: 'fine', case: 't-fine2', ask: { type: 'phrase', step: 'D1', say: 'Tap what the message says.', answer: 'the office is closed on Monday' } },
    { id: 'q-d1', kind: 'question', step: 'D1', h: 'The question', link: 'Link.', decides: 'It decides.', how: 'Look.' },
    { id: 'recap', kind: 'recap', h: 'Recap', link: 'Link.', carry: ['carry this'] },
    { id: 'transfer', kind: 'transfer', h: 'In your own life', link: 'Link.', ask: 'Name one.', prompts: [{ family: 'pay', occasion: 'a pay note' }, { family: 'share', occasion: 'a code ask' }, { family: 'fine', occasion: 'a plain note' }], places: ['work', 'home'] },
    { id: 'plan', kind: 'plan', optional: true, h: 'A plan, if you want one', link: 'Link.', intro: 'A plan is one line you can keep.',
      cues: [{ cue: 'a message asks me to pay somewhere new', then: 'ring the sender on the number I already have' }, { cue: 'a message asks for a code', then: 'stop and go to the real site myself' }] }
  ]);
  FC.cards(S, 'u2', [
    { id: 'orient', kind: 'orient', h: 'Orient', canDo: 'Do it.', everyday: 'Every day.', map: { branch: 'pay' } },
    meet('invoice', 'm-inv', 'R2', 'new'), meet('prize', 'm-prz', 'R1', 'no'), meet('realbill', 'm-rb', 'R2', 'usual'),
    { id: 'q-r1', kind: 'question', step: 'R1', h: 'Did you expect it', link: 'Link.', decides: 'It decides.', how: 'Look.' },
    { id: 'check-r1', kind: 'check', after: 'R1', case: 'c-rb', ask: { type: 'step', step: 'R1' } },
    { id: 'q-r2', kind: 'question', step: 'R2', h: 'Where does the money go', link: 'Link.', decides: 'It decides.', how: 'Look.' },
    { id: 'check-r2', kind: 'check', after: 'R2', case: 'c-inv', ask: { type: 'step', step: 'R2' } },
    { id: 'recap', kind: 'recap', h: 'Recap', link: 'Link.', carry: ['carry this'] }
  ]);
  const hist = { history: [{ rev: 1, date: '2026-10-05', change: 'fixture' }], keyChanges: [], wrongIdeas: [], signoff: { coverage: null, coldRead: null } };
  FC.unit(S, 'u1', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'One', title: { text: 'What it wants' }, subtitle: 'A gate unit',
    teaches: { steps: ['D1'], outcomes: [], terms: [], families: ['pay', 'share', 'fine'] }, assumes: [],
    ledger: [{ id: 'pay~fine', pair: ['pay', 'fine'], step: 'D1', taughtIn: 'q-d1', shared: 'Both can mention money.', rule: '{o:pay} asks you to pay and {o:fine} asks for nothing.', test: 'Does the message ask anything of you?' }],
    parts: [
      { id: 'p1', title: 'Pay and share', cards: ['orient', 'meet-pay', 'check-pay', 'meet-share', 'check-share'] },
      { id: 'p2', title: 'Nothing to do, then the drill', cards: ['meet-fine', 'check-fine', 'q-d1'], drill: true, close: ['recap', 'transfer', 'plan'] }],
    drill: { key: 'u1', rungs: [
      { ask: 'piece', items: [[{ case: 'd1-pay', step: 'D1' }, { case: 'd1-fine', step: 'D1' }], ['rev1-fine'], [{ tell: 'pay~fine' }]] },
      { ask: 'route', items: [['d1-pay', 'd1-fine'], ['d1-pay2', 'd1-fine2'], ['d1-share2']] }],
      returns: ['rt1-pay-1', 'rt1-pay-2', 'rt1-pay-3', 'rt1-pay-4', 'rt1-share-1', 'rt1-share-2', 'rt1-share-3', 'rt1-share-4', 'rt1-fine-1', 'rt1-fine-2', 'rt1-fine-3', 'rt1-fine-4'] },
    build: hist
  });
  FC.unit(S, 'u2', {
    kind: 'C', rev: 1, standard: 1, status: 'draft', tag: 'Two', title: { text: 'Who is asking' }, subtitle: 'A branch unit with two questions',
    teaches: { steps: ['R1', 'R2'], outcomes: ['invoice', 'prize', 'realbill'], terms: [] }, assumes: ['u1'],
    ledger: [
      { id: 'invoice~prize', pair: ['invoice', 'prize'], step: 'R1', taughtIn: 'q-r1', shared: 'Both send you to a new account.', rule: '{o:invoice} comes from a sender you expected and {o:prize} from one you did not.', test: 'Were you expecting this sender?' },
      { id: 'realbill~invoice', pair: ['realbill', 'invoice'], step: 'R2', taughtIn: 'q-r2', shared: 'Both come from a sender you expected.', rule: '{o:realbill} goes to the usual account and {o:invoice} to a new one.', test: 'Is it the account you always pay?' },
      { id: 'realbill~prize', pair: ['realbill', 'prize'], step: 'R1', taughtIn: 'q-r1', shared: 'Both ask for a payment.', rule: '{o:realbill} is expected and goes to the usual account, and {o:prize} is neither.', test: 'Is it a sender you know, paid as usual?' }],
    parts: [{ id: 'p1', title: 'Three kinds, two questions', cards: ['orient', 'meet-invoice', 'meet-prize', 'meet-realbill', 'q-r1', 'check-r1', 'q-r2', 'check-r2'], drill: true, close: ['recap'] }],
    drill: { key: 'u2', rungs: [
      { ask: 'piece', items: [[{ separator: 'invoice~prize' }, { separator: 'realbill~invoice' }], [{ case: 'd2-inv1', step: 'R1' }, { case: 'd2-rb1', step: 'R2' }]] },
      { ask: 'route', items: [['d2-inv1', 'd2-prz1', 'd2-rb1'], ['d2-inv2', 'd2-prz2'], ['d2-rb2']] }],
      returns: ['rt-invoice-1', 'rt-invoice-2', 'rt-invoice-3', 'rt-invoice-4', 'rt-prize-1', 'rt-prize-2', 'rt-prize-3', 'rt-prize-4', 'rt-realbill-1', 'rt-realbill-2', 'rt-realbill-3', 'rt-realbill-4'] },
    build: hist
  });
  return S;
}
