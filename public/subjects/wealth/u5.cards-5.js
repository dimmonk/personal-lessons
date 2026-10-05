// Wealth Preservation, Unit Five, part three (first half): the fifth name, the pair it makes with the tax on a rise, and the three
// exceptions in which the papers come first.

FC.cards('wealth', 'u5', [

  /* ---------- Family rules for the money ---------- */
  { id: 'meet-governance', kind: 'meet', outcome: 'governance',
    link: 'The tax names were about a sum, set against a line. The next name is about nobody’s sum. The papers are fine, the tax is not the problem, and what is in question is a person.',
    case: 'm-wilf', mark: 'H1',
    strip: [
      'One father, one son, and £450,000 to be handed over in a single payment on the day the father dies.',
      'The son has had three jobs in two years and has borrowed money from his father four times, and none of it has been repaid.',
      'The papers are current and the estate is below the £500,000 line, so neither paper nor tax is the problem.',
      'Nothing stands between the money and what the case shows about the son.'
    ],
    explain: [
      'The paper is right: it says what Wilf wants. The money is safe from tax: £450,000 is £50,000 below the line. And Joel is not accused of anything. But the case shows a pattern: three jobs in two years, four loans, none repaid. Then it hands him £450,000 in a single payment, with nobody else able to say no.',
      'That is a risk in the person who will receive the money. It is not a prediction that Joel will lose it. It says that the case gives a reason to look, and that the way the money is handed over could do something about it. If £450,000 arrives on one day, it all arrives together, and nothing the case shows will have changed. If it is paid in three parts, £150,000 at 30, £150,000 at 35 and £150,000 at 40, then even if the first payment is gone within a year, £300,000 is still to come.',
      'There are three ordinary ways to put rules around money. Payments can be made in stages, as here. A person outside the family, a trustee, can be given the job of deciding, and given a veto where that matters. And there can be written agreements, for instance about what happens to an inheritance if the heir marries. The rules are agreed in advance and written down, and they are far easier to make while everyone is alive and talking.',
      'Notice what these rules are for. They are not a punishment for Joel. A rule made with him and explained to him can protect him as much as the money. Rules that are imposed without explanation tend to produce the resentment they were meant to prevent.'
    ],
    feature: { step: 'H1', option: 'people' },
    name: 'The name for this is {o:governance}. It means written rules, agreed in advance, about who decides and when each person is paid, so that a risk in the people is met where it can be: in the terms on which the money is handed over.' },

  { id: 'again-governance', kind: 'again', outcome: 'governance',
    link: 'Wilf’s case gave you what to point to: {needs:governance}. Here is a second case with a different story: not one heir’s record, but two heirs and a business that needs them both.',
    first: 'm-wilf', second: 'a-thea', step: 'H1',
    instruction: 'Find what the two cases share. Ignore that one is a sum of money and the other a business, and that one is about one heir and the other about two. Look at one thing only: what shows a risk in the people.',
    prompt: { kind: 'phrase', answer: 'who have not spoken since a quarrel about money in 2019. Her will says that every decision about the bakeries needs both their signatures' },
    shared: [
      'Thea’s papers are in order, and her estate is £400,000, below the line. As in Wilf’s case, neither paper nor tax is the problem. What the case shows is two people who have not spoken for years, and a will that cannot be carried out unless they sign together. If one of them will not sign, a lease cannot be renewed and a bakery cannot be sold.',
      'The two cases look different: one person, one payment, against two people and a business that has to be run. What they share is a risk in the people who will receive the money or run it, and nothing about paper or tax. That is what {o:governance} names.'
    ] },

  { id: 'portrait-governance', kind: 'portrait', outcome: 'governance',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:governance} in real life, where nobody marks the words for you.',
    typical: [
      'The papers can be perfect and the case is still this one, and the money can be small. Neither paper nor tax is what is in question.',
      'There is a person, or a pair, and you can point to what shows the risk: a pattern (three jobs, four loans), a life event (a wedding, a divorce), a quarrel, or a control that needs two people to agree.',
      'It is about control as well as money. When two people must agree and cannot, nothing gets done, and a business or a house can stand still for years.',
      'The rules that answer it are written terms: payments in stages, an outside person to decide, agreements about marriage. A trustee holding a veto can be one of them.',
      'It is best done early and out loud. Rules made with the people, with reasons given, last better than rules found in a will.'
    ],
    not: 'A risk in the people is not a judgement that they are bad. A person who is about to marry is not unreliable; the case shows something to look at, and the rules protect the heir as much as the money. And a family that gets on, with steady heirs and a fair will, has nothing to name: that is {o:simple}.',
    wild: ['“He’ll have it spent in a year.”', '“They haven’t spoken since the funeral.”', '“She’s marrying him in June.”', '“The two of them will never agree what to do with the business.”'],
    self: 'In your own life it is the sentence you have said about a relative: “I wouldn’t trust her with a lump sum”, or “those two could never run it together”.',
    ask: '“Who will receive this or run it, and what in the case shows that one of them could lose it, or that two of them could not agree?”',
    act: [
      'Name the person or the pair, and write down the words in the case that show the risk.',
      'Decide what you want to protect: the money, the business, the relationship.',
      'Talk to the people early, in the open, and say why, before anything is written.',
      'Write the rules into the papers: payments in stages, an outside person to decide where two must agree, agreements about marriage where that is the risk.',
      'Look at the rules again when something changes.'
    ] },

  { id: 'check-governance', kind: 'check', after: 'governance',
    case: 'c-mabel',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate', 'growth', 'people'] } },

  { id: 'look-trust-governance', kind: 'lookalike', ledger: 'trust~governance',
    link: 'These two share a tool. A trustee with a veto can appear in either, and that makes them easy to mix up. This card shows what separates them.',
    cases: ['la-wood-rise', 'la-wood-feud'],
    instruction: 'Both cases are about Stefan and the same woodland, and in both his papers are current. Compare one thing: whether the case is about a tax bill that a rise in value would make larger, or about what the people will do.',
    prompt: { kind: 'which', option: 'H1.people', answer: 'la-wood-feud' },
    difference: [
      'In Case A a valuer says the woodland could be worth £2,500,000 if permission is given. Stefan’s estate is £650,000 now and would be £2,900,000 after the rise, so the tax would go from £60,000 to £960,000. That is £900,000 of new tax on the rise. The key’s answer is {a:H1.growth}, and the case is {o:trust}.',
      'In Case B nobody expects the woodland to change in value, and the estate, £400,000, is below the line, so there is no tax. What the case shows is a son who will sell it the day his father dies and a daughter who says she will never let him. The key’s answer is {a:H1.people}, and the case is {o:governance}.',
      'A trustee with a veto could be used in either case, so the tool does not tell them apart. The question to ask is what the case is about.'
    ] },

  /* ---------- The three exceptions in which the papers come first ---------- */
  { id: 'exc-papers-people', kind: 'exception', looksLike: 'governance', is: 'basicdocs', ledger: 'basicdocs~governance',
    h: 'A quarrel in the family, and a stale will',
    link: 'The last cards separated the people from the tax. Now the papers. The key puts them first, even when a case is also about a person, and this case shows why.',
    case: 'exc-bruno-case',
    setup: 'Bruno’s two sons have not spoken since their mother’s funeral. That is what you point to for {o:governance}, and the risk is real. Yet this case is {o:basicdocs}.',
    prompt: { kind: 'phrase', answer: 'His will, written in 2006, leaves everything to his wife, Vera, who died last year, and names nobody else' },
    because: [
      'Look at the will. It names Vera, who has died, and nobody else. Until that is put right, there is no paper that says what happens to the money. And every rule you might put around the people (payments in stages, an outside person to decide, agreements) is written into the will. A will that names someone who has died cannot carry them.',
      'So the order is not a matter of which problem is bigger. The paper comes first because it is the cheapest to put right and because everything else rests on it. The people come second, and the rules for them go into the new will.'
    ],
    take: 'The key decides it this way on purpose, and it is worth knowing that this is the key’s decision. A family adviser would probably start with the sons. The key gives each case one name, by the cheapest thing that everything else rests on, so that two people using it reach the same answer and can each say why.' },

  { id: 'exc-papers-tax', kind: 'exception', looksLike: 'gifting', is: 'basicdocs', ledger: 'basicdocs~gifting',
    h: 'A large estate, money to spare, and a stale form',
    link: 'The same order holds for the first tax name. A large estate and money to spare would be {o:gifting}, but the key looks at the papers first.',
    case: 'exc-winifred-case',
    setup: 'Winifred’s estate is far above the line, and her pension pays her £25,000 a year more than she spends. That is what you point to for {o:gifting}. Yet this case is {o:basicdocs}.',
    prompt: { kind: 'phrase', answer: 'The form on her pension still names her husband, who died three years ago' },
    because: [
      'Look at the form. It names her husband, who has died. The pension company will pay according to its own form, so if Winifred died tomorrow it would be paying according to a paper that names a dead man, and what happens next is decided by the company’s rules, not by her.',
      'Her tax is real: £1,400,000 less £500,000 is £900,000, and 40% of that is £360,000. But gifts of £3,000 a year work over many years, and the form is a job for one afternoon. The cheap thing is done first, and the gifts can start the same week.'
    ],
    take: 'This is the same decision as the last card, for the same reason: the papers are the cheapest thing and everything else rests on them. The key gives the case one name, and the name is the papers.' },

  { id: 'exc-papers-rise', kind: 'exception', looksLike: 'trust', is: 'basicdocs', ledger: 'basicdocs~trust',
    h: 'A firm about to be worth ten times more, and a will from before a divorce',
    link: 'The last of the three. A rise that is expected would be {o:trust}, but the key looks at the papers first here too.',
    case: 'exc-florin-case',
    setup: 'Florin’s firm is expected to be worth ten times what it is today, and the tax on that rise would be very large. That is what you point to for {o:trust}. Yet this case is {o:basicdocs}.',
    prompt: { kind: 'phrase', answer: 'His will, written before his divorce nine years ago, leaves everything to his former wife' },
    because: [
      'Look at the will. It leaves everything to his former wife, and it was written before the divorce. Everything includes the firm. If Florin died next month, before any move was made, the firm would go to her.',
      'Moving the firm out of the estate would itself need a lawyer, written terms and a trustee, and all of it rests on his papers saying what he wants. A move made on top of a will that names the wrong person solves the tax and leaves the firm with the wrong owner.'
    ],
    take: 'This is the third time the key has decided the same way, and for the same reason: the papers are cheapest, and everything else rests on them. The rise still needs dealing with, and it comes next.' }
]);
