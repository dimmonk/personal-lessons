// Wealth Preservation, Unit Two, part one (second half): the word the second name leans on, the name that says leave it alone, and the pair
// it makes with the first name.

FC.cards('wealth', 'u2', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-sheltered', kind: 'term', term: 'sheltered',
    h: 'Two kinds of account',
    link: 'The next name needs one more word: the kind of account the investments sit in.',
    case: 'e-t-shelter',
    plain: [
      'Leila holds the same fund in two places and pays different tax on it. In the IRA, the $1,600 the fund pays out each year is not taxed; the law taxes what she takes out in retirement. In the brokerage account, the same $1,600 is taxed every year, and she pays 25% of it, $400. Same fund, same income. Only the account differs.',
      'In the US, sheltered accounts are the ones the law sets up for retirement and a few other purposes: a 401(k) at work, an IRA, a Roth IRA, a health savings account (HSA) and a 529 plan for college. Most have a yearly limit on what you can pay in, and Congress changes the rules often. In this unit, an IRA or a 401(k) is the sheltered account, and an ordinary brokerage account (also called a taxable account) is not. The 25% on interest and rent and the 15% on most dividends are examples that stand for federal and state tax together.'
    ],
    after: 'If you have both kinds of account, you choose which investment goes where. A fund that pays out little costs almost nothing in an ordinary account, and one that pays out a lot costs the most. Choosing where each one sits is the one tax move that needs no sale.' },

  /* ---------- Nothing to cut back ---------- */
  { id: 'meet-nocut', kind: 'meet', outcome: 'nocut',
    link: 'Not every yearly cost needs cutting. Here is a fee that is worth paying.',
    case: 'e-m-nocut', mark: 'E1',
    explain: [
      'Kamal’s planner costs $3,000 a year, and for it Kamal gets three jobs he would not do himself: his tax return, a check that his will and forms are current, and an update of his spending plan. Stop paying, and the return is late, the will goes out of date and the plan goes stale. Cutting this fee would save $3,000 and cost him all three.',
      'Look at how the price behaves too. 1% of $300,000 is $3,000, and so is a flat $3,000. But when {t:pot} doubles to $600,000, 1% becomes $6,000 and the flat price stays at $3,000. A flat price is tied to the work. A price that grows with {t:pot} is not.'
    ],
    spot: [
      { do: 'Ask what would stop if you stopped paying: Kamal’s tax return, will check and plan.', why: 'A fee is worth paying when real work would stop without it.' },
      { do: 'Check the price is flat: $3,000, in writing, unchanged in five years while his pot doubled.', why: 'A flat price pays for the work, not for the size of {t:pot}.' },
      { do: 'Check nobody is paid to pick: his planner takes no commission and his money is already in index funds.', why: 'A fee for picking would be {o:feecore}.' }
    ],
    feature: { step: 'E1', option: 'nomore' },
    name: 'This is {o:nocut}. It is a full answer: leave it alone.',
    act: [
      { do: 'Write down what the fee is for and what would stop without it.', why: 'You can show it to anyone who calls the fee too high.' },
      { do: 'If someone offers something cheaper, ask what work the cheaper one would not do.', why: 'Cheaper often means less gets done.' },
      { do: 'Leave it alone, and set a date to look again.', why: 'The work or the price may change.' }
    ] },

  { id: 'check-nocut', kind: 'check', after: 'nocut',
    case: 'e-c-nocut',
    ask: { type: 'option', step: 'E1', among: ['picking', 'nomore'] } },

  { id: 'look-feecore-nocut', kind: 'lookalike', ledger: 'feecore~nocut',
    link: 'These two are easy to mix up: in both, a firm or an adviser is paid out of {t:pot} every year.',
    cases: ['e-l-fee-a', 'e-l-fee-b'],
    instruction: 'Both stories are about the same firm and the same $3,000 a year, for two sisters with the same pot. Compare one thing: what each $3,000 pays for.',
    prompt: { kind: 'which', option: 'E1.nomore', answer: 'e-l-fee-b' },
    difference: [
      'In Story A, Gwen’s firm takes 1% of her $300,000 and has done nothing since it chose her funds. The $3,000 pays for picking, and it would grow if her pot did. The answer is {a:E1.picking}, so this is {o:feecore}.',
      'In Story B, the firm takes $3,000 from Ann too, but it is a flat price for a tax return, a check of her will and an update of her plan. Stop the firm and those stop. The answer is {a:E1.nomore}, so this is {o:nocut}.',
      'The size and the firm are the same, so neither tells you anything. What the money pays for does, and so does whether the price moves with {t:pot}.'
    ] }
]);
