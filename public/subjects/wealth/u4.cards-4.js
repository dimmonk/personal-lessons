// Wealth Preservation, Unit Four, part two (first piece): the fourth name (a mix that has moved away from its plan), its check and its
// look-alike pair with the second name. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'meet-rebalance', kind: 'meet', outcome: 'rebalance',
    link: 'The first three names are about money that is needed. The last is about money that is not needed soon, but that is no longer split the way its owner decided.',
    case: 'tm-meet-mix', mark: 'T1',
    strip: [
      'Marek chose {t:mix} for his $800,000: 60% in shares and 40% in bonds. It is now 78% in shares, $624,000, because shares have grown faster than bonds.',
      'No bill and no living costs are in the case: he need take nothing out for fifteen years. The only thing in it is {t:mix}.'
    ],
    explain: [
      'Nothing has gone wrong yet. Nobody decided to take more risk: {t:mix} moved while Marek was not looking.',
      'Suppose shares fall 30%. On his plan, 60% of $800,000 is $480,000 in shares, and the fall takes $144,000, which is 18% of everything he has. As {t:mix} is now, with $624,000 in shares, the same fall takes $187,200, which is 23.4%. That is $43,200 more than the plan chose to risk, for a fall that is exactly the same. It is not a forced sale. It is a bigger bite than he chose.',
      'The alternative is a written rule, made while things are calm. For example: "Each January, if shares are more than 5 points away from 60%, sell or buy so that they are back at 60%." For Marek that means selling $144,000 of shares and buying $144,000 of bonds. It is written down because the moment to act feels wrong: selling what has been rising feels like giving up something that works, and buying after a fall feels like adding to a loss. The 5 points and the January date are examples; each plan sets its own.'
    ],
    feature: { step: 'T1', option: 'drifted' },
    name: 'The name for this is {o:rebalance}. "Rebalance" means putting {t:mix} back to what the person chose, and "by written rule" says how. A mix can also move the other way, when shares fall and bonds do not, and the same name applies.',
    act: 'Find {t:mix} you chose. If you never wrote one down, write down what you would be comfortable with, such as 60% in shares and 40% in bonds, and how far you would let it move, such as 5 points either side. Find today’s mix on your 401(k) or account statement. Write the rule: a date to look, and what you do when a part is outside its limit. Before you sell, check where the shares are held: in {t:sheltered} a sale raises no tax, and in a taxable account you should work out the tax on the gain first, and ask whether new money could put {t:mix} back instead. Then follow the rule on its date, whatever prices have done since.' },

  { id: 'check-rebalance', kind: 'check', after: 'rebalance',
    case: 'tm-chk-mix',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill', 'drifted'] } },

  { id: 'look-rebalance-covered', kind: 'lookalike', ledger: 'rebalance~covered',
    link: 'This pair is the one that most often needs care, because in both the person chose a mix and what they hold is not exactly what they chose.',
    cases: ['tm-la-split-far', 'tm-la-split-near'],
    instruction: 'Both cases are about Oskar, who has $400,000, a plan of 60% in shares, and a limit of 5 points either side of it. Compare one thing: how far shares are from 60%, set against that limit.',
    prompt: { kind: 'which', option: 'T1.drifted', answer: 'tm-la-split-far' },
    difference: [
      'In Case A shares are $296,000 of the $400,000, which is 74%. That is 14 points above the plan, and his own limit is 5. A fall of 30% takes $88,800 rather than the $72,000 his plan allows. The answer is {a:T1.drifted}, and the case is {o:rebalance}.',
      'In Case B shares are $252,000, which is 63%. That is 3 points above the plan, inside his limit. A fall of 30% takes $75,600 rather than $72,000, which is within what his plan allows for. The answer is {a:T1.ready}, and the case is {o:covered}. A mix that has moved a little is still inside the plan, and nothing needs doing.'
    ] }
]);
