// Wealth, lesson 4: The full match, then the order of saving (part 4, unit B). Not taking the whole match is a sure loss, and knowing it does
// not fix it (research W23), so the lesson ends with the rate changed or dated on the learner's own plan, and its own step waits for a US job
// (W34, W35). The match rule as the plan's summary gives it (one step or two, where it stops, vesting, W45) and the stub's dollars turned into
// a share of pay, with the novice's mix-up of the share and the cap (P29), a worked pay stub (P10), one with the last steps left (P17), stubs
// alone with one to leave (W2, P26) and a match in steps; then the order of saving, a common one whose versions differ (W24, W46, a judgement
// call), with the reason for each step so a step that does not apply can be seen (W37), a worked household and two alone, mixed with earlier
// lessons (P22); the check: three new pay stubs, one to leave and one in steps, and a new household's order.
FC.lesson('wealth', {
  id: 'l4', part: '4', title: 'The full match, then the order of saving', rev: 1, status: 'live', trigger: 'job',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 4), and fixed after its first two reviews: the stub in dollars, a match in steps, vesting, the match rule’s wording, a month of cash before the match and three months after the card, the reason for each step of the order. Not tried on a phone yet.' }],
  why: [
    'Nina’s employer adds 50 cents for each dollar she puts into her 401(k), on up to 6% of her pay. She puts in 3%, and $960 a year of her employer’s money never comes.',
    'Here you find the rate that takes the whole match, the dollars left behind, and then where the next dollar of saving goes.'
  ],
  flow: [
    { title: 'The match',
      show: [
        { kind: 'prose', text: [
          'The match rule is in your plan’s summary, not on your pay stub. It says what the employer adds for each dollar you put in (50 cents, say), and on how much of your pay (up to 6%, say). Put in at least that much.',
          'Some rules match in steps: one dollar per dollar on the first 3% of pay, then 50 cents on the next 2%. The whole match then takes 5%, where the last step ends.',
          'What you leave each year: the match at the rate where it stops, less the match at your rate. Your stub may show dollars: what goes in each paycheck ÷ the gross pay that paycheck × 100 is your rate.',
          'Vesting says when the employer’s money becomes yours; leave the job before, and you may lose some of it. It does not change the rate to put in. Your own money is always yours.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“The match is 50 cents on the dollar up to 6%, so putting in 3% is good enough.”',
          'The 50 cents is what the employer adds per dollar; the 6% is what you must put in to get all of it. At 3%, half the match is left behind.'] }
      ] },
    { worked: 'w-match' },
    { set: { items: [{ gen: 'g-match-full', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-match-short', n: 1 }, { gen: 'g-match-full', n: 1 }], { gen: 'g-match-steps', n: 1 }], order: 'shuffle' } },
    { title: 'The order of saving',
      show: [
        { kind: 'prose', text: [
          'A common order, not a law; versions differ on the first step. Cash for about a month, so a surprise does not go on a card. The whole match: money no fund can promise. A credit card at a high rate, far above what savings pay: paying it off earns that rate for sure. Then cash up to three months.',
          'Then the accounts with tax help. An HSA, if your health plan allows one: money goes in untaxed, grows untaxed, and comes out untaxed for medical bills. An IRA: you pick the fund, so its cost can be lower than your plan’s list. More in the 401(k), up to its higher limit. A brokerage account last: no tax help. “Fill” means up to the yearly limit below.',
          'Leave out a step that is done, that you owe nothing on, or that is not open to you.'] },
        { kind: 'ref', ref: 'limitHsa' },
        { kind: 'ref', ref: 'limitIra' },
        { kind: 'ref', ref: 'limit401k' }
      ] },
    { worked: 'o-1' },
    { set: { items: ['o-2', 'o-3', { gen: 'g-match-full', n: 1 }, { gen: 'g-match-steps', n: 1 }], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3'], share: 0.2 } } },
    { own: 'sheet', model: 'w-match', work: 'match' }
  ],
  check: {
    items: [{ gen: 'g-match-short', n: 1 }, { gen: 'g-match-full', n: 1 }, { gen: 'g-match-steps', n: 1 }, 'o-4'],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'mine', right: { min: 2 }, of: 'the share of pay put in now' },
      { ask: 'rate', right: { min: 3 }, of: 'the rate that takes the whole match' },
      { ask: 'left', right: { min: 3 }, of: 'the employer’s money left each year' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'steps', right: { min: 1 }, of: 'the order of saving' }]
  }
});
