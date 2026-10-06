// Wealth Preservation, Unit Two, part one (second half): the word the second name leans on, the name that says leave it alone, and the pair
// it makes with the first name.

FC.cards('wealth', 'u2', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-sheltered', kind: 'term', term: 'sheltered',
    h: 'Two kinds of account',
    link: 'The next name is about a cost that is already worth paying or already as low as it can be. One way that can happen depends on the kind of account the investments sit in, so first a word for it.',
    case: 'e-t-shelter',
    plain: [
      'Leila holds the same fund in two places, and she pays different tax on it. In the IRA, the law does not tax the $1,600 the fund pays out each year; it taxes what she takes out in retirement. In the brokerage account, the $1,600 is taxed every year, and she pays 25% of it, $400. The fund, the amount and the income are the same. Only the place differs.',
      'In the US the sheltered accounts are the ones the law sets up for retirement and a few other purposes: a 401(k) at work, an IRA, a Roth IRA, a health savings account (HSA) and a 529 plan for college. Most have a yearly limit on what can be paid in, and Congress changes the rules often, so the cases here use a general version: an IRA or a 401(k) is the sheltered account, and an ordinary brokerage account (also called a taxable account) is not. The 25% tax on interest and rent, and the 15% on most dividends, are examples that stand for federal and state income tax together.'
    ],
    after: 'So a person with both kinds of account can choose which investment goes where. An investment that pays out little costs almost nothing to hold in an ordinary account, and one that pays out a lot costs the most there. Where things are held is the one thing about tax that a person controls without selling anything.' },

  /* ---------- Nothing to cut back ---------- */
  { id: 'meet-nocut', kind: 'meet', outcome: 'nocut',
    link: 'The first name was a charge that pays for nothing but choosing. This one is the opposite kind of case, and as common: something does come out every year, and the case shows it is worth it or already as low as it can be.',
    case: 'e-m-nocut', mark: 'E1',
    strip: [
      'There is one person, Kamal, and one cost: $3,000 a year to a planner.',
      'The price is flat, agreed in writing, and it has not changed in five years, though his pot has doubled.',
      'It pays for named work: his tax return, a check that his will and forms are current, and an update of his spending plan.',
      'Kamal says he would not do any of it himself, and the planner takes no commission. His money is in index funds, so nobody is paid for choosing.'
    ],
    explain: [
      'Put to this charge the question you put to the last one: what does it pay for? Here the answer is three jobs that would not otherwise get done. Take the planner away and the tax return is late, the will goes out of date and the plan goes stale. That is the question to ask of any charge: if you stopped paying, what important thing would stop happening?',
      'Then look at how the price behaves. 1% of $300,000 is $3,000, and so is a flat $3,000. But when {t:pot} doubles to $600,000, 1% becomes $6,000 and the flat price stays at $3,000. The work is the same size, so a price that stays flat is a price for the work, and a price that grows with {t:pot} is a price for something else.',
      'Cutting this charge would save $3,000 a year and cost him a tax return, a will check and a plan. That is why the answer here is to leave it alone.'
    ],
    feature: { step: 'E1', option: 'nomore' },
    name: 'The name for this is {o:nocut}. It is the one name in the unit that says to leave it alone, and it is a full answer.',
    act: 'Do not cut a cost because someone says it is high. Ask what it is for, and write down what you found. If someone offers something cheaper, ask what work the cheaper one would not do. Then leave it alone, and set a date to look again.' },

  { id: 'check-nocut', kind: 'check', after: 'nocut',
    case: 'e-c-nocut',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore'] } },

  { id: 'look-feecore-nocut', kind: 'lookalike', ledger: 'feecore~nocut',
    link: 'The two names you have just met are easy to mix up, because in both a firm or an adviser is paid out of {t:pot} every year.',
    cases: ['e-l-fee-a', 'e-l-fee-b'],
    instruction: 'Both cases are about the same firm and the same $3,000 a year, for two sisters with the same pot. Compare one thing: what each $3,000 pays for.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-fee-b' },
    difference: [
      'In Case A the firm takes 1% of Gwen’s $300,000 and has done nothing else since it chose her funds. The $3,000 is for choosing, and it would grow if her pot did. The answer is {a:E1.picking}, and the case is {o:feecore}.',
      'In Case B the firm takes $3,000 from Ann too, but it is a flat price and it pays for a return, a check of her will and a plan. If the firm stopped, those would stop. The answer is {a:E1.nomore}, and the case is {o:nocut}.',
      'The size is the same and so is the firm, so neither tells you anything. Only what the money pays for, and whether the price moves with {t:pot}, tells the two apart.'
    ] }
]);
