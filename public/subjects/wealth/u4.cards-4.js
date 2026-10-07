// Wealth Preservation, Unit Four, part two (first piece): the fourth name (a mix that has moved away from its plan), its check and its
// look-alike pair with the second name. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'meet-rebalance', kind: 'meet', outcome: 'rebalance',
    link: 'The first three names are about money you need. This one is about money you do not need for years, but that is no longer split the way you decided.',
    case: 'tm-meet-mix', mark: 'T1',
    explain: [
      'Nothing has gone wrong yet, and nobody decided to take more risk: {t:mix} moved while Marek was not looking. Now suppose shares fall 30%. On his plan, shares would be $480,000, and the fall would take $144,000, which is 18% of everything he has. With $624,000 in shares, the same fall takes $187,200, which is 23.4%. That is $43,200 more than he chose to risk, from exactly the same fall.',
      'The fix is a written rule, made while things are calm. For example: "Each January, if shares are more than 5 points away from 60%, sell or buy until they are back at 60%." For Marek that means selling $144,000 of shares and buying $144,000 of bonds. It has to be written down because the moment to act feels wrong: selling what has been rising feels like giving up something that works, and buying after a fall feels like adding to a loss. The 5 points and the January date are examples, and your own plan sets its own.'
    ],
    spot: [
      { do: 'Find the plan he chose: 60% in shares and 40% in bonds.', why: 'Without a plan there is nothing to drift from.' },
      { do: 'Find today’s split: 78% in shares.', why: 'A statement shows the real number, and memory does not.' },
      { do: 'Work out the gap: 18 points above his plan.', why: 'A few points is normal, and this many changes how hard a fall bites.' },
      { do: 'Check that nothing is being sold to pay for anything: no bill and no living costs for fifteen years.', why: 'If something were, that would come first.' }
    ],
    feature: { step: 'T1', option: 'drifted' },
    name: 'This is {o:rebalance}: put {t:mix} back to what you chose, by a rule you wrote down in advance. The same name applies when it drifts the other way, after shares fall and bonds do not.',
    act: [
      { do: 'Find the plan you chose, or write one now: for example 60% in shares and 40% in bonds.', why: 'Without a plan there is nothing to drift from.' },
      { do: 'Set how far you will let it move, such as 5 points either side.', why: 'The limit tells you when to act.' },
      { do: 'Find today’s split on your 401(k) or account statement.', why: 'You need the real number to compare.' },
      { do: 'Write the rule: a date to look, and what you do when a part is outside its limit.', why: 'You will not feel like acting on the day, so decide now.' },
      { do: 'Before you sell shares, check which account they are in: in {t:sheltered} a sale raises no tax, but in a taxable account work out the tax on the gain first, and ask whether new money could put the split back instead.', why: 'A sale you do not need can bring a tax bill you do not need.' },
      { do: 'Follow the rule on its date, whatever prices have done since.', why: 'A rule only works if you keep it.' }
    ] },

  { id: 'check-rebalance', kind: 'check', after: 'rebalance',
    case: 'tm-chk-mix',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill', 'drifted'] } },

  { id: 'look-rebalance-covered', kind: 'lookalike', ledger: 'rebalance~covered',
    link: 'This pair needs the most care, because in both the person has a plan and what they hold is not exactly what the plan says.',
    cases: ['tm-la-split-far', 'tm-la-split-near'],
    instruction: 'Both stories are about Oskar, who has $400,000, a plan of 60% in shares, and a limit of 5 points either side of it. Compare one thing: how far shares are from 60%, set against that limit.',
    prompt: { kind: 'which', option: 'T1.drifted', answer: 'tm-la-split-far' },
    difference: [
      'In Story A shares are $296,000 of the $400,000, which is 74%. That is 14 points above his plan, and his limit is 5. A fall of 30% takes $88,800, not the $72,000 his plan allows for. That is {o:rebalance}.',
      'In Story B shares are $252,000, which is 63%. That is 3 points above his plan, inside his limit. A fall of 30% takes $75,600, close to the $72,000 his plan allows for. That is {o:covered}: a mix that has moved a little is still inside the plan, and nothing needs doing.'
    ] }
]);
