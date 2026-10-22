// Wealth, lesson 1 "Your list, and what could lose it": a household's statements (its bank or banks, a brokerage account, a 401(k)), made
// with fresh numbers (lesson standard 3, a generator). The learner reads each balance and what protects it, adds everything up, says who
// pays back what happened (nobody for a fall in prices: FDIC and SIPC pay when a bank or a firm fails, research W22, W41; a 401(k) is
// neither, its money held in a trust apart from the employer, W42), and decides by FDIC's own counting: per person, per bank, per kind of
// ownership (W41). Four households:
//   change   checking and savings in one name at one bank, each under the limit and together over it: change it, and say where the part over
//            the limit can go (another bank; a second account in the same name at the same bank is counted with the rest; a stock fund can fall)
//   banks    two banks, each under the limit, together over it: each bank is counted on its own, leave it (the look-alike of change)
//   joint    one bank, an account in one name and a joint one, together over the limit: two kinds of ownership, counted apart, leave it
//   leave    everything well under its limit
// Every balance is whole dollars, so no rounding decides a mark. The worked example is items-list.js.
(() => {
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const FDIC = 250000;   // the value of the subject's ref `fdic`, which the lesson shows
  const BANKS = ['Harbor Bank', 'Prairie Savings Bank', 'Cedar Valley Bank', 'Lakeshore Bank'];
  const FIRMS = ['Northpoint Brokerage', 'Granite Investments', 'Bayview Securities'];
  const EMPLOYERS = ['Brightwater Logistics', 'Northgate Medical', 'Lakeside Manufacturing'];
  const PEOPLE = ['Maya', 'Daniel', 'Priya', 'Owen'];
  const PARTNERS = ['Sam', 'Jordan', 'Alex', 'Robin'];

  const COMMON = { event: [0, 2, 1], bank: [0, 3, 1], firm: [0, 2, 1], employerAt: [0, 2, 1], whoAt: [0, 3, 1], fund: [30000, 90000, 500], sweep: [500, 4000, 100],
    fall: [2000, 9000, 100], plan: [40000, 160000, 500] };
  const PARAMS = {
    // checking alone is more than the amount over, so savings alone stays under the limit while the two together pass it
    change: { ...COMMON, checking: [20000, 45000, 500], over: [5000, 18000, 500] },
    banks: { ...COMMON, first: [140000, 230000, 1000], extra: [20000, 90000, 1000] },
    joint: { ...COMMON, mine: [120000, 230000, 1000], extra: [20000, 90000, 1000], partnerAt: [0, 3, 1] },
    leave: { ...COMMON, checking: [3000, 15000, 500], savings: [20000, 120000, 500] }
  };

  // the bank's lines, by household: [the first line, the second], and the second bank's name when there is one
  function bankLines(pick, variant){
    if(variant === 'change') { const checking = pick('checking'); return [checking, FDIC - checking + pick('over')]; }
    if(variant === 'banks') { const first = pick('first'); return [first, FDIC - first + pick('extra')]; }
    if(variant === 'joint') { const mine = pick('mine'); return [mine, FDIC - mine + pick('extra')]; }
    return [pick('checking'), pick('savings')];
  }
  function household(pick, variant){
    const [one, two] = bankLines(pick, variant), bankAt = pick('bank'), bankTotal = one + two;
    const fund = pick('fund'), sweep = pick('sweep'), brok = fund + sweep, plan = pick('plan'), total = bankTotal + brok + plan;
    const who = PEOPLE[pick('whoAt')], firmName = FIRMS[pick('firm')], bankName = BANKS[bankAt];
    const event = EVENTS[pick('event')], slip = id => id === event.right ? '' : event.right === 'nobody' ? 'insured-fall' : 'wrong-cover';
    return {
      eventPrompt: event.prompt.replace('{fallText}', whole(pick('fall'))).replace('{firmName}', firmName).replace('{bankName}', bankName).replace('{who}', who),
      eventWorking: LINES[event.right], thenNobody: event.right === 'nobody' ? LINES.nobody : 'When the bank or the firm itself fails, its cover pays: FDIC for a bank, SIPC for a brokerage firm.',
      eventRight: event.right, slipNobody: slip('nobody'), slipSipc: slip('sipc'), slipFdic: slip('fdic'),
      who, bankName, bank2Name: BANKS[(bankAt + 1) % BANKS.length], firmName, employerName: EMPLOYERS[pick('employerAt')],
      partner: variant === 'joint' ? PARTNERS[pick('partnerAt')] : '',
      oneText: whole(one), twoText: whole(two), one, two, bankTotal, bankText: whole(bankTotal), fundText: whole(fund), sweepText: whole(sweep),
      brok, brokText: whole(brok), fallText: whole(pick('fall')), plan, planText: whole(plan), total, totalText: whole(total),
      noPlan: bankTotal + brok, noBank: brok + plan, noSecond: one + brok + plan,
      over: bankTotal - FDIC, overText: whole(Math.max(0, bankTotal - FDIC))
    };
  }

  const fdicNote = ['Member FDIC.'];
  const bankDocs = {
    change: [{ kind: 'document', form: 'statement', tab: 'Bank', title: '{bankName}: {who}’s accounts', head: ['Account', 'Balance'],
      rows: [{ id: 'b1', cells: ['Checking, in {who}’s name', '{oneText}'] }, { id: 'b2', cells: ['Savings, in {who}’s name', '{twoText}'] },
        { id: 'b3', strong: true, cells: ['Total at {bankName}', '{bankText}'] }], notes: fdicNote }],
    banks: [{ kind: 'document', form: 'statement', tab: 'First bank', title: '{bankName}: {who}’s account', head: ['Account', 'Balance'],
      rows: [{ id: 'b1', cells: ['Savings, in {who}’s name', '{oneText}'] }, { id: 'b3', strong: true, cells: ['Total at {bankName}', '{oneText}'] }], notes: fdicNote },
      { kind: 'document', form: 'statement', tab: 'Second bank', title: '{bank2Name}: {who}’s account', head: ['Account', 'Balance'],
        rows: [{ id: 'c1', cells: ['Savings, in {who}’s name', '{twoText}'] }, { id: 'c3', strong: true, cells: ['Total at {bank2Name}', '{twoText}'] }], notes: fdicNote }],
    joint: [{ kind: 'document', form: 'statement', tab: 'Bank', title: '{bankName}: {who}’s accounts', head: ['Account', 'Balance'],
      rows: [{ id: 'b1', cells: ['Savings, in {who}’s name', '{oneText}'] }, { id: 'b2', cells: ['Checking, joint: {who} and {partner}', '{twoText}'] },
        { id: 'b3', strong: true, cells: ['Total at {bankName}', '{bankText}'] }], notes: fdicNote }]
  };
  bankDocs.leave = bankDocs.change;
  const brokDoc = { kind: 'document', form: 'statement', tab: 'Brokerage', title: '{firmName}: {who}’s brokerage account', head: ['Holding', 'Value'],
    rows: [{ id: 'k1', cells: ['US Stock Market Fund', '{fundText}'] }, { id: 'k2', cells: ['Cash', '{sweepText}'] },
      { id: 'k3', strong: true, cells: ['Total', '{brokText}'] }, { id: 'k4', cells: ['Change in value this year', '−{fallText}'] }],
    notes: ['Member SIPC.'] };
  const planDoc = { kind: 'document', form: 'statement', tab: '401(k)', title: '{employerName} 401(k): {who}', head: ['Your funds', 'Balance'],
    rows: [{ id: 'p1', strong: true, cells: ['Total', '{planText}'] }], notes: ['Balances on the last day of the quarter.', 'Not FDIC insured. May lose value.'] };

  const guard = (id, right, then) => ({ id, label: 'What protects it', type: 'choose', from: 'guard', right, then });
  const BANK_GUARD = { sipc: 'The paper says Member FDIC: it is a bank, not a brokerage firm.', none: 'The paper says Member FDIC.' };
  const listAsk = variant => ({
    id: 'list', kind: 'form', prompt: 'Read each paper: what is in it, and what pays if the bank or the firm fails.',
    fields: [
      ...(variant === 'banks'
        ? [{ id: 'bank', label: 'Everything at {bankName}', type: 'number', frame: '$__', places: 0, answer: 'one', tol: { abs: 0.5 } }, guard('bankGuard', 'fdic', BANK_GUARD),
          { id: 'bank2', label: 'Everything at {bank2Name}', type: 'number', frame: '$__', places: 0, answer: 'two', tol: { abs: 0.5 } }, guard('bank2Guard', 'fdic', BANK_GUARD)]
        : [{ id: 'bank', label: 'Everything at {bankName}', type: 'number', frame: '$__', places: 0, answer: 'bankTotal', tol: { abs: 0.5 } }, guard('bankGuard', 'fdic', BANK_GUARD)]),
      { id: 'brok', label: 'Everything at {firmName}', type: 'number', frame: '$__', places: 0, answer: 'brok', tol: { abs: 0.5 } },
      guard('brokGuard', 'sipc', { fdic: 'The paper says Member SIPC: it is a brokerage firm, not a bank.', none: 'The paper says Member SIPC.' }),
      { id: 'plan', label: 'The 401(k)', type: 'number', frame: '$__', places: 0, answer: 'plan', tol: { abs: 0.5 } },
      guard('planGuard', 'none', { fdic: 'Its funds are not deposits: the paper says Not FDIC insured. Its money is held in a trust apart from {employerName}.',
        sipc: 'A 401(k) is not a brokerage account. Its money is held in a trust apart from {employerName}, and a fall in its funds is {who}’s.' })]
  });
  const totalAsk = variant => ({
    id: 'total', kind: 'number', prompt: 'What does {who} have in all of it, together?', frame: '$__', places: 0, answer: 'total', tol: { abs: 1 },
    traps: [{ slip: 'left-out-account', value: 'noPlan', then: 'That leaves out the 401(k). Everything means every account.' },
      { slip: 'left-out-account', value: variant === 'banks' ? 'noSecond' : 'noBank', then: variant === 'banks' ? 'That leaves out {bank2Name}. Everything means every account.' : 'That leaves out the bank. Everything means every account.' }]
  });
  // what happened, varied so the answer is not always the same: prices fell (nobody pays), the firm failed with holdings missing (SIPC), the
  // bank failed (FDIC). Each wrong option says what that cover is for (research W22).
  const EVENTS = [
    { prompt: 'The brokerage account fell {fallText} this year when prices dropped. Who pays that back?', right: 'nobody' },
    { prompt: 'Suppose {firmName} itself failed and {who}’s holdings there went missing. Who pays them back, up to its limit?', right: 'sipc' },
    { prompt: 'Suppose {bankName} itself failed. Who pays {who}’s deposits back, up to its limit?', right: 'fdic' }];
  const LINES = {
    nobody: 'A fall in prices is the risk of owning stocks; no insurer pays it back.',
    sipc: 'SIPC pays when a brokerage firm fails and holdings are missing, not when prices fall.',
    fdic: 'FDIC pays back bank deposits when a bank fails. It does not cover stocks or a fall in prices.'
  };
  const fallAsk = {
    id: 'fall', kind: 'choose', prompt: '{eventPrompt}', from: 'payer', right: '{eventRight}', shuffle: true,
    slips: { nobody: '{slipNobody}', sipc: '{slipSipc}', fdic: '{slipFdic}' }, then: { nobody: '{thenNobody}', sipc: LINES.sipc, fdic: LINES.fdic }
  };
  const CALL = {
    change: { right: 'change', slips: { leave: 'per-account-limit' }, then: { leave: 'Each account is under $250,000, but FDIC adds up the accounts in one name at one bank: {bankText}.' } },
    banks: { right: 'leave', slips: { change: 'banks-added' }, then: { change: 'Together they pass $250,000, but FDIC counts each bank on its own: {oneText} and {twoText}, each under its limit.' } },
    joint: { right: 'leave', slips: { change: 'owners-added' }, then: { change: 'The joint account is another kind of ownership, counted apart from {who}’s own: {oneText} and {twoText}, each under its limit.' } },
    leave: { right: 'leave', slips: { change: 'moved-covered' }, then: { change: 'Each account sits under its limit, and moving it would not protect it from a fall either.' } }
  };
  const fixAsk = {
    id: 'fix', kind: 'choose', prompt: 'Where could the part over the limit go, so that FDIC covers it?', shuffle: true, when: { ask: 'call', is: ['change'] },
    options: [
      { id: 'other-bank', text: 'An account in {who}’s name at another bank', ok: true, then: 'FDIC counts each bank on its own, so it is covered there up to $250,000 too.' },
      { id: 'same-bank', text: 'A new savings account at {bankName}, in {who}’s name', slip: 'per-account-limit', then: 'FDIC adds every account in one name at one bank, so a new one there is counted with the rest.' },
      { id: 'stocks', text: 'A stock fund at {firmName}', slip: 'fix-into-stocks', then: 'SIPC pays if the firm fails, not when prices fall: money moved there can lose value.' }]
  };
  const overAsk = { id: 'over', kind: 'number', prompt: 'How much at {bankName} has no FDIC cover?', frame: '$__', places: 0, answer: 'over', tol: { abs: 1 }, when: { ask: 'call', is: ['change'] } };
  const READ = { banks: '{bankName}: {oneText} and {bank2Name}: {twoText}, both Member FDIC. {firmName}: {brokText}, Member SIPC. 401(k): {planText}, neither.',
    other: '{bankName}: {bankText}, Member FDIC. {firmName}: {brokText}, Member SIPC. 401(k): {planText}, neither: Not FDIC insured, held in a trust.' };
  const LIMIT = {
    change: 'Checking and savings are both in {who}’s name at one bank, so FDIC counts them together: {bankText}, over $250,000.',
    banks: 'Each bank is counted on its own: {oneText} at {bankName} and {twoText} at {bank2Name}, each under $250,000.',
    joint: '{who}’s own savings, {oneText}, is under $250,000. The joint account, {twoText}, is another kind of ownership, counted apart.',
    leave: 'Together {bankText} at one bank, under $250,000. The brokerage account is under SIPC’s $500,000.'
  };
  const REASON = {
    change: 'Everything comes to {totalText}. The two accounts at {bankName} are in one name, so FDIC counts {bankText} against its $250,000: {overText} has no cover if the bank fails. Moving it to another bank covers it.',
    banks: 'Everything comes to {totalText}. The two banks are counted apart, {oneText} and {twoText}, each under $250,000, so there is nothing to change.',
    joint: 'Everything comes to {totalText}. {who}’s own savings and the joint account are two kinds of ownership, each under its limit, so there is nothing to change.',
    leave: 'Everything comes to {totalText}, and each bank and firm holds less than its limit, so there is nothing to change.'
  };
  const steps = variant => [
    { id: 'read', does: 'Read each paper’s total, and its line on cover.', working: variant === 'banks' ? READ.banks : READ.other, ask: 'list' },
    { id: 'add', does: 'Add up everything.', working: variant === 'banks' ? '{oneText} + {twoText} + {brokText} + {planText} = {totalText}.' : '{bankText} + {brokText} + {planText} = {totalText}.', ask: 'total' },
    { id: 'fall', does: 'Match what happened to its cover.', working: '{eventWorking}', ask: 'fall' },
    { id: 'limit', does: 'Add up each bank, and each kind of ownership at it, against the FDIC limit.', working: LIMIT[variant], ask: 'call' },
    ...(variant === 'change' ? [{ id: 'over', does: 'Work out the part with no cover.', working: '{bankText} − $250,000 = {overText}.', ask: 'over' },
      { id: 'fix', does: 'Say where it could go.', working: 'To an account at another bank: FDIC counts each bank on its own.', ask: 'fix' }] : [])
  ];
  const DECIDING = { change: ['b1', 'b2', 'b3', 'k3', 'k4', 'p1'], banks: ['b3', 'c3', 'k3', 'k4', 'p1'], joint: ['b1', 'b2', 'k3', 'k4', 'p1'], leave: ['b3', 'k3', 'k4', 'p1'] };

  const generator = (variant, id) => ({
    id, strand: 'list', facets: { call: variant === 'change' ? 'change' : 'leave' }, params: PARAMS[variant], make: pick => household(pick, variant),
    blocks: [...bankDocs[variant], brokDoc, planDoc],
    asks: [listAsk(variant), totalAsk(variant), fallAsk, { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', ...CALL[variant] },
      ...(variant === 'change' ? [overAsk, fixAsk] : [])],
    steps: steps(variant), deciding: DECIDING[variant], reason: REASON[variant]
  });
  FC.gen('wealth', [generator('change', 'g-list-change'), generator('banks', 'g-list-banks'), generator('joint', 'g-list-joint'), generator('leave', 'g-list-leave')]);
})();
