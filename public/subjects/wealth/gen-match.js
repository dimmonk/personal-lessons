// Wealth, lesson 4 "The full match, then the order of saving": a pay stub and the match rule from the plan's summary, made with fresh numbers
// (lesson standard 3, a generator). The learner turns the stub's dollars into a share of pay, finds the rate that takes the whole match
// (where the match stops, not the share the employer adds: the novice's mix-up; in a match in steps, where the last step ends, research
// W45), works out the employer's money left each year, and decides (W23: not taking the whole match is a sure loss). The rule also says when
// the employer's money becomes the learner's (vesting, W45), which changes nothing in the rate. Three kinds:
//   short  one step, a rate under it: change     full  one step, a rate at or past it: leave     steps  the safe harbor match in two steps
//          (one dollar a dollar on the first 3%, 50 cents on the next 2%), a rate of 3 or 4%: change
// Salaries are whole thousands and the stub's dollars whole cents; every match figure is whole cents. The worked example is w-match below.
(() => {
  const exact = dollars => '$' + dollars.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const whole = dollars => '$' + dollars.toLocaleString('en-US');
  const PEOPLE = ['Nina', 'Marcus', 'Elena', 'Tom'];
  const EMPLOYERS = ['Brightwater Logistics', 'Northgate Medical', 'Lakeside Manufacturing', 'Cedar and Pine Hardware'];
  const SHARES = [25, 50, 100];   // drawn by index: a list of three numbers would be read as a range
  const SHARE_WORDS = { 25: '25 cents', 50: '50 cents', 100: 'one dollar' };
  const VESTING = ['All of it is yours from the start', 'All of it is yours after 3 years of work', 'A fifth more is yours each year from year 2; all of it after 6 years'];
  const COMMON = { whoAt: [0, 3, 1], employerAt: [0, 3, 1], salary: [42000, 98000, 1000] };
  const PARAMS = {
    short: { ...COMMON, shareAt: [0, 2, 1], upTo: [3, 6, 1], gap: [1, 2, 1], vestAt: [0, 2, 1] },
    full: { ...COMMON, shareAt: [0, 2, 1], upTo: [3, 6, 1], extra: [0, 4, 1], vestAt: [0, 2, 1] },
    steps: { ...COMMON, gap: [1, 2, 1] }
  };
  const cents = x => Math.round(x * 100) / 100;

  function stub(pick, kind){
    const salary = pick('salary'), steps = kind === 'steps', share = steps ? 100 : SHARES[pick('shareAt')], upTo = steps ? 3 : pick('upTo'), top = steps ? 5 : upTo;
    const mine = kind === 'full' ? upTo + pick('extra') : top - pick('gap');
    const added = rate => steps ? cents(salary * (Math.min(rate, 3) + Math.max(0, Math.min(rate, 5) - 3) * 0.5) / 100) : cents(salary * Math.min(rate, upTo) / 100 * share / 100);
    const now = added(mine), full = added(top), left = cents(full - now), period = cents(salary / 26), defer = cents(period * mine / 100);
    return {
      who: PEOPLE[pick('whoAt')], employerName: EMPLOYERS[pick('employerAt')], salaryText: whole(salary), periodText: exact(period), defer, deferText: exact(defer),
      mine, share, upTo, top, upToText: `${upTo}%`, topText: `${top}%`, shareWords: SHARE_WORDS[share], vestText: steps ? VESTING[0] : VESTING[pick('vestAt')],
      left, leftText: exact(left), full, fullText: exact(full), nowText: exact(now), firstText: exact(cents(salary * 3 / 100)), secondText: exact(cents(salary * 2 / 100 * 0.5)),
      zero: 0
    };
  }

  const stubDoc = { kind: 'document', form: 'paystub', tab: 'Pay stub', title: '{employerName}: pay stub for {who}', head: ['Line', 'Amount'],
    rows: [{ id: 'p1', cells: ['Gross pay this period', '{periodText}'] }, { id: 'p2', cells: ['Yearly salary', '{salaryText}'] },
      { id: 'p3', cells: ['401(k), this period', '{deferText}'] }] };
  const ruleNote = ['From the plan’s summary. Your money goes in from each paycheck; the employer’s follows it.'];
  const ruleDoc = { kind: 'document', form: 'matchrule', tab: 'Match rule', title: '{employerName} 401(k): the employer match', head: ['Rule', 'What it says'],
    rows: [{ id: 'm1', cells: ['The employer adds', '{shareWords} for each dollar you put in'] }, { id: 'm2', cells: ['On what you put in', 'up to {upToText} of your pay'] },
      { id: 'm3', cells: ['Vesting', '{vestText}'] }], notes: ruleNote };
  const stepsDoc = { kind: 'document', form: 'matchrule', tab: 'Match rule', title: '{employerName} 401(k): the employer match', head: ['Rule', 'What it says'],
    rows: [{ id: 'm1', cells: ['On the first 3% of pay you put in', 'one dollar for each dollar'] }, { id: 'm2', cells: ['On the next 2% of pay you put in', '50 cents for each dollar'] },
      { id: 'm3', cells: ['Vesting', '{vestText}'] }], notes: ruleNote };

  const mineAsk = {
    id: 'mine', kind: 'number', prompt: 'What share of pay does {who} put in now?', frame: '__%', places: 0, answer: 'mine', tol: { abs: 0.1 },
    traps: [{ slip: 'dollars-as-rate', value: 'defer', then: 'That is the dollars of one paycheck. Divide them by the gross pay that paycheck, times 100.' }]
  };
  const rateAsk = steps => ({
    id: 'rate', kind: 'number', prompt: 'What rate does {who} have to put in to take the whole match?', frame: '__%', places: 0, answer: 'top', tol: { abs: 0.01 },
    traps: steps ? [{ slip: 'first-step-only', value: 'upTo', then: 'That is where the first step ends. The match goes on, at 50 cents, to 5%.' }]
      : [{ slip: 'share-as-rate', value: 'share', then: 'That is what the employer adds per dollar, in cents. The rate to put in is where the match stops: {upToText}.' }]
  });
  const leftAsk = steps => ({
    id: 'left', kind: 'number', prompt: 'How much of the employer’s money does {who} leave each year?', frame: '$__', places: 2, unit: 'a year', answer: 'left', tol: { abs: 1 },
    traps: [{ slip: 'whole-match', value: 'full', then: 'That is the whole match. {who} already gets {nowText} of it; the part left is the difference.' },
      ...(steps ? [{ slip: 'first-step-only', value: 'zero', then: '{who} takes all of the first step, but the second step, 50 cents a dollar up to 5%, is not all taken.' }] : [])]
  });
  const STEP_RULE = {
    short: 'The employer adds {shareWords} per dollar, on what {who} puts in up to {upToText} of pay. So {upToText} takes it all.',
    full: 'The employer adds {shareWords} per dollar, on what {who} puts in up to {upToText} of pay. So {upToText} takes it all.',
    steps: 'One dollar per dollar on the first 3%, then 50 cents on the next 2%: the match stops at 5%. So 5% takes it all.'
  };
  const STEP_LEFT = {
    short: 'At {upToText}: {fullText}. At {mine}%: {nowText}. Left each year: {leftText}.',
    full: '{who} puts in {mine}%, at or past {upToText}: the whole match, {fullText}. Nothing is left.',
    steps: 'At 5%: {firstText} on the first step + {secondText} on the second = {fullText}. At {mine}%: {nowText}. Left each year: {leftText}.'
  };
  const generator = (kind, id) => ({
    id, strand: 'match', facets: { call: kind === 'full' ? 'leave' : 'change' }, params: PARAMS[kind], make: pick => stub(pick, kind),
    blocks: [stubDoc, kind === 'steps' ? stepsDoc : ruleDoc],
    asks: [mineAsk, rateAsk(kind === 'steps'), leftAsk(kind === 'steps'), kind === 'full'
      ? { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'leave', slips: { change: 'raised-for-nothing' },
        then: { change: '{who} already puts in {mine}%, at or past {upToText}: the whole match comes in.' } }
      : { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'match-missed' },
        then: { leave: '{who} puts in {mine}%, under {topText}, and leaves {leftText} a year of the employer’s money.' } }],
    steps: [
      { id: 'mine', does: 'Turn the stub’s dollars into a share of pay.', working: '{deferText} ÷ {periodText} × 100 = {mine}%.', ask: 'mine' },
      { id: 'rule', does: 'Find where the match stops on the match rule.', working: STEP_RULE[kind], ask: 'rate' },
      { id: 'left', does: 'Work out the match at both rates.', working: STEP_LEFT[kind], ask: 'left' },
      { id: 'call', does: 'Change the rate only if it is under where the match stops.', working: kind === 'full' ? 'Leave the rate as it is. Vesting changes when the money is yours, not the rate.' : 'Raise the rate to {topText}. Vesting changes when the money is yours, not the rate.', ask: 'call' }],
    deciding: ['p1', 'p3', 'm1', 'm2'],
    reason: kind === 'full' ? '{who} puts in {mine}%, at or past {upToText}, so the whole match, {fullText} a year, already comes in.'
      : 'The match stops at {topText} of pay and {who} puts in {mine}%, so {leftText} a year of the employer’s money is left. Raising the rate to {topText} takes it all.'
  });
  FC.gen('wealth', [generator('short', 'g-match-short'), generator('full', 'g-match-full'), generator('steps', 'g-match-steps')]);

  // the worked pay stub: $64,000, 50 cents per dollar up to 6%, putting in 3% ($73.85 of $2,461.54). At 6%: 64,000 × 6% × 0.5 = 1,920; at 3%: 960; left 960.
  FC.items('wealth', [{
    id: 'w-match', strand: 'match', facets: { call: 'change' },
    blocks: [
      { kind: 'document', form: 'paystub', tab: 'Pay stub', title: 'Northgate Medical: pay stub for Nina', head: ['Line', 'Amount'],
        rows: [{ id: 'p1', cells: ['Gross pay this period', '$2,461.54'] }, { id: 'p2', cells: ['Yearly salary', '$64,000'] }, { id: 'p3', cells: ['401(k), this period', '$73.85'] }] },
      { kind: 'document', form: 'matchrule', tab: 'Match rule', title: 'Northgate Medical 401(k): the employer match', head: ['Rule', 'What it says'],
        rows: [{ id: 'm1', cells: ['The employer adds', '50 cents for each dollar you put in'] }, { id: 'm2', cells: ['On what you put in', 'up to 6% of your pay'] },
          { id: 'm3', cells: ['Vesting', 'All of it is yours after 3 years of work'] }], notes: ruleNote }],
    asks: [
      { id: 'mine', kind: 'number', prompt: 'What share of pay does Nina put in now?', frame: '__%', places: 0, answer: 3, tol: { abs: 0.1 } },
      { id: 'rate', kind: 'number', prompt: 'What rate does Nina have to put in to take the whole match?', frame: '__%', places: 0, answer: 6, tol: { abs: 0.01 } },
      { id: 'left', kind: 'number', prompt: 'How much of the employer’s money does Nina leave each year?', frame: '$__', places: 2, unit: 'a year', answer: 960, tol: { abs: 1 } },
      { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'match-missed' },
        then: { leave: 'Nina puts in 3%, under 6%, and leaves $960.00 a year of the employer’s money.' } }],
    steps: [
      { id: 'mine', does: 'Turn the stub’s dollars into a share of pay.', working: '$73.85 ÷ $2,461.54 × 100 = 3%.', ask: 'mine' },
      { id: 'rule', does: 'Find where the match stops on the match rule.', working: 'The employer adds 50 cents per dollar, on what Nina puts in up to 6% of pay. So 6% takes it all.', ask: 'rate' },
      { id: 'left', does: 'Work out the match at both rates.', working: 'At 6%: $64,000 × 6% × 0.50 = $1,920.00. At 3%: $960.00. Left each year: $960.00.', ask: 'left' },
      { id: 'call', does: 'Change the rate only if it is under where the match stops.', working: 'Raise the rate to 6%. Vesting changes when the money is yours, not the rate.', ask: 'call' }],
    deciding: ['p1', 'p3', 'm1', 'm2'],
    reason: 'The match stops at 6% of pay and Nina puts in 3%, so $960.00 a year of the employer’s money is left. Raising the rate to 6% takes it all.'
  }]);
})();
