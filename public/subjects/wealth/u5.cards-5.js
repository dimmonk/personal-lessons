// Wealth Preservation, Unit Five, part three (first half): the fifth name, and the exception in which the papers come first.

FC.cards('wealth', 'u5', [

  /* ---------- Family rules for the money ---------- */
  { id: 'meet-governance', kind: 'meet', outcome: 'governance',
    link: 'The tax problems were about a sum set against a limit. This one is about a person: the papers are fine, and tax is not the problem.',
    case: 'm-wilf', mark: 'H1',
    explain: [
      'The papers are right, the money is safe from tax, and nobody accuses Joel of anything. But the story shows a pattern, and then hands him $450,000 in one payment with nobody able to say no. That is a risk in the person who will get the money. It is not a prediction that Joel will lose it. It is a reason to act, and the way the money is handed over can do something about it.',
      'If $450,000 arrives in one day, it all arrives together. If it is paid in three parts, $150,000 at 30, 35 and 40, then even if the first is gone within a year, $300,000 is still to come. Other ways to put rules around money are an outside person (a trustee) who decides, with a veto where that matters, and written agreements, such as a prenuptial agreement about an inheritance.',
      'The risk can also be control: two heirs who will not speak, and a will that needs both signatures before anything is done, can leave a business standing still. Rules are far easier to agree while everyone is alive and talking. A rule made with Joel and explained to him protects him as much as the money.'
    ],
    spot: [
      { do: 'Find the person who will get or run the money: Joel, 29.', why: 'This one is about a person, not a sum.' },
      { do: 'Find what they have done with money or work: three jobs in two years, and four loans from his father, none repaid.', why: 'A pattern is what makes it a risk.' },
      { do: 'Find how the money will arrive: $450,000, all in one payment, with nobody able to say no.', why: 'A pattern plus a lump sum is what puts the money at risk.' },
      { do: 'Check the papers and the tax: Wilf’s papers are current and his estate is far below the limit.', why: 'If a paper is wrong, fix that first.' }
    ],
    feature: { step: 'H1', option: 'people' },
    name: 'This is {o:governance}: written rules, agreed ahead of time, about who decides and when each person is paid, so that a risk in the people is met in the terms of the handover.',
    act: [
      { do: 'Name the person, or the pair, and write down the words that show the risk.', why: 'If you cannot find the words, there may be no risk.' },
      { do: 'Talk to them early and say why.', why: 'A rule agreed with someone protects them as well as the money.' },
      { do: 'Write the rules into the papers: payments in stages, an outside person to decide where two must agree, agreements about marriage where that is the risk.', why: 'A rule that is not written down will not be followed after you are gone.' }
    ] },

  { id: 'check-governance', kind: 'check', after: 'governance',
    case: 'c-mabel',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth', 'people'] } },

  /* ---------- The exception in which the papers come first ---------- */
  { id: 'exc-papers-tax', kind: 'exception', looksLike: 'gifting', is: 'basicdocs', ledger: 'basicdocs~gifting',
    h: 'A large estate, money to spare, and an out-of-date form',
    link: 'The papers come first, even when the story also shows a big estate and money to spare.',
    case: 'exc-winifred-case',
    setup: 'Winifred’s estate is far above the limit, and her investments pay her $400,000 a year more than she spends. That is what you look for in {o:gifting}. Yet this story is {o:basicdocs}.',
    prompt: { kind: 'phrase', answer: 'The beneficiary form on her IRA still names her husband, who died three years ago' },
    because: [
      'The form on her IRA names her husband, who has died. The firm that holds the IRA pays by its own form, so if Winifred died tomorrow it would pay by a form naming a dead man, and its rules, not hers, would decide what happens next.',
      'Her tax is real: every $1,000,000 above the limit costs $400,000. But yearly gifts work over many years, and the form is a job for one afternoon. Do the cheap thing first, and the gifts can start the same week.'
    ] }
]);
