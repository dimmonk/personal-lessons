// Wealth Preservation, Unit Five, part three (first half): the fifth name, and the exception in which the papers come first.

FC.cards('wealth', 'u5', [

  /* ---------- Family rules for the money ---------- */
  { id: 'meet-governance', kind: 'meet', outcome: 'governance',
    link: 'The tax names were about a sum set against a limit. The next name is about a person: the papers are fine, and tax is not the problem.',
    case: 'm-wilf', mark: 'H1',
    strip: [
      'One father, one son, and $450,000 to be handed over in a single payment on the day the father dies.',
      'The son has had three jobs in two years and has borrowed money from his father four times, none of it repaid.',
      'The papers are current and the estate is far below the tax-free limit.'
    ],
    explain: [
      'The paper is right, the money is safe from tax, and Joel is not accused of anything. But the case shows a pattern, and then hands him $450,000 in one payment with nobody able to say no. That is a risk in the person who will receive the money. It is not a prediction that Joel will lose it. It is a reason to look, and the way the money is handed over can do something about it.',
      'If $450,000 arrives in one day, it all arrives together. If it is paid in three parts, $150,000 at 30, 35 and 40, then even if the first is gone within a year, $300,000 is still to come. The ordinary ways to put rules around money are payments in stages, an outside person (a trustee) given the job of deciding, with a veto where that matters, and written agreements, such as a prenuptial agreement about an inheritance. The risk can also be control: two heirs who will not speak, and a will that needs both signatures before anything is done, can leave a business standing still.',
      'The rules are far easier to agree while everyone is alive and talking. A rule made with Joel and explained to him protects him as much as the money.'
    ],
    feature: { step: 'H1', option: 'people' },
    name: 'The name for this is {o:governance}. It means written rules, agreed in advance, about who decides and when each person is paid, so that a risk in the people is met in the terms on which the money is handed over.',
    act: [
      'Name the person or the pair, and write down the words in the case that show the risk.',
      'Talk to them early and say why. Then write the rules into the papers: payments in stages, an outside person to decide where two must agree, agreements about marriage where that is the risk.'
    ] },

  { id: 'check-governance', kind: 'check', after: 'governance',
    case: 'c-mabel',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth', 'people'] } },

  /* ---------- The exception in which the papers come first ---------- */
  { id: 'exc-papers-tax', kind: 'exception', looksLike: 'gifting', is: 'basicdocs', ledger: 'basicdocs~gifting',
    h: 'A large estate, money to spare, and a stale form',
    link: 'The papers come first, even when the case also shows a big estate and money to spare.',
    case: 'exc-winifred-case',
    setup: 'Winifred’s estate is far above the limit, and her investments pay her $400,000 a year more than she spends. That is what you point to for {o:gifting}. Yet this case is {o:basicdocs}.',
    prompt: { kind: 'phrase', answer: 'The beneficiary form on her IRA still names her husband, who died three years ago' },
    because: [
      'The form on her IRA names her husband, who has died. The firm that holds the IRA pays by its own form, so if Winifred died tomorrow it would pay according to a paper naming a dead man, and what happens next is decided by the firm’s rules, not by her.',
      'Her tax is real: every $1,000,000 above the limit costs $400,000. But yearly gifts work over many years, and the form is a job for one afternoon. The cheap thing comes first, and the gifts can start the same week.'
    ] }
]);
