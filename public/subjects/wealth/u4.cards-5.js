// Wealth Preservation, Unit Four, part two (third piece): what the fourth name is like, its look-alike pair with the second name, and
// the three exceptions in which a split that has moved sits beside something the key puts first. Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'portrait-rebalance', kind: 'portrait', outcome: 'rebalance',
    link: 'You know what to point to for {o:rebalance}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'There is a plan: the person decided how much should sit in shares and how much in bonds, such as 60% and 40%, and the case says so or lets you work it out.',
      'Today’s mix is far from the plan, in either direction. It moves by itself, because shares and bonds do not grow at the same speed.',
      'Nothing is being sold to pay for anything. No living costs and no bill are in the case. If one were, the answer would be that one.',
      'Nothing has gone wrong yet, and that is what makes it easy to miss. Nobody decided the drift, and nobody noticed it.',
      'It builds up after a long run: years of rises push the share of shares up, and a deep fall pushes it down.',
      'The harm is that a fall would take more, or less, than the person chose. Neither is a forced sale.'
    ],
    not: [
      'A mix that is a little off is not this name. Every mix moves a little from day to day, and a plan has limits for that reason. A mix still inside its limits gets the answer {a:T1.ready}.',
      'Nor is it a verdict that the plan was right. The name is about the distance from the plan the person chose. If they would choose a different plan today, that is a change of plan, and the case does not show it.'
    ],
    wild: ['"I haven’t looked at the mix in years."', '"The shares did so well that they’re most of it now."', '"It was meant to be 60 and 40."', '"I never changed it."', '"I didn’t realise I was holding that much in shares."'],
    self: 'In your own life it is the line on a pension statement that says how much of the money is in shares, set beside the number you chose when you started. If you cannot remember choosing one, that is the first thing to settle.',
    ask: '"What mix did I choose, and what is it now?" If the two are far apart, and nothing is being sold to pay for anything, you are probably looking at this name.',
    act: [
      'Find {t:mix} you chose. If you never wrote one down, write down what you would be comfortable with, such as 60% in shares and 40% in bonds, and how far you would let it move, such as 5 points either side.',
      'Find today’s mix: add up what is in shares and what is in bonds, and work out the percentage of each.',
      'Write the rule down: a date to look, and what you do when a part is outside its limit. Sell some of what has grown and buy what has shrunk, until each part is back on the plan.',
      'Before you sell, check where each part is held. In {t:sheltered} the sale raises no tax. In a taxable account, work out the tax on the gain first, and ask whether new money could put {t:mix} back instead.',
      'Follow the rule on its date, whatever prices have done since. That is what writing it down was for.'
    ] },

  { id: 'check-rebalance', kind: 'check', after: 'rebalance',
    case: 'tm-chk-mix',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill', 'drifted'] } },

  { id: 'look-rebalance-covered', kind: 'lookalike', ledger: 'rebalance~covered',
    link: 'You have now met all four names. This pair is the one that most often needs care, because in both the person chose a mix and what they hold is not exactly what they chose. This card puts them side by side.',
    cases: ['tm-la-split-far', 'tm-la-split-near'],
    instruction: 'Both cases are about Oskar, who has £400,000, a plan of 60% in shares, and a limit of 5 points either side of it. Compare one thing: how far shares are from 60%, set against that limit.',
    prompt: { kind: 'which', option: 'T1.drifted', answer: 'tm-la-split-far' },
    difference: [
      'In Case A shares are £296,000 of the £400,000, which is 74%. That is 14 points above the plan, and his own limit is 5. On the plan, shares would be £240,000; as it stands, a fall of 30% takes £88,800 rather than £72,000, which is £16,800 more than he chose to risk. The answer is {a:T1.drifted}, and the case is {o:rebalance}.',
      'In Case B shares are £252,000 of the £400,000, which is 63%. That is 3 points above the plan, inside his limit of 5. A fall of 30% takes £75,600 rather than £72,000, which is £3,600 more, and that is within what his plan allows for. The answer is {a:T1.ready}, and the case is {o:covered}.',
      'The man, the plan and the limit are the same in both. What separates them is whether {t:mix} has moved outside the distance the plan allows. A mix that has moved a little is still inside the plan, and nothing needs doing.'
    ] },

  /* ---------- Three exceptions: {t:mix} has moved, and something else is in the case ---------- */
  { id: 'exc-living-mix', kind: 'exception', ledger: 'cashbuffer~rebalance', looksLike: 'rebalance', is: 'cashbuffer',
    h: 'A mix that has moved, and living costs paid by selling',
    link: 'The last card kept the names tidy. In real cases a mix that has moved can sit beside living costs, and one of them has to come first.',
    case: 'tm-exc-livingmix',
    setup: 'Imre’s mix is 71% in shares against a plan of 60%, which is what {o:rebalance} looks like. Yet the answer for this case is {a:T1.livingcosts}.',
    prompt: { kind: 'phrase', answer: 'he pays it by selling units of the shares every month, with no cash set aside' },
    because: [
      'Look at what the case says about the money. Imre’s shares are £355,000 of £500,000, which is 71%. That is well above his plan of 60%, and it makes a fall bigger. But the case also shows that his bills are paid by selling those shares every month, with no cash set aside.',
      'A fall hurts him on every one of those first days of the month, when each sale takes place at a low price. A mix that is simply off hurts at one time only: when prices fall. Money needed soon comes first, because it is the part that cannot wait for prices to recover.',
      'Fixing the living costs also does most of the work on {t:mix}. Two years of spending is £48,000, and taking it from the shares brings them from £355,000 to £307,000, which is 61.4% of £500,000. That is close to his plan. Fixing {t:mix} alone would have left every bill still paid by selling.'
    ],
    take: 'Which answer wins is a decision, and in life the two overlap. The test above settles it: is anything being paid for by selling shares or funds? Where nothing is, and the only thing in the case is {t:mix}, the answer is {a:T1.drifted}.' },

  { id: 'exc-bill-mix', kind: 'exception', ledger: 'ladder~rebalance', looksLike: 'rebalance', is: 'ladder',
    h: 'A mix that has moved, and a bill on a date',
    link: 'The same thing happens with a bill. A mix that has moved can sit beside a bill whose money is in shares, and the bill comes first.',
    case: 'tm-exc-billmix',
    setup: 'Beata’s mix is 64% in shares against a plan of 50%, which is what {o:rebalance} looks like. Yet the answer for this case is {a:T1.datedbill}.',
    prompt: { kind: 'phrase', answer: 'The first payment, £27,000, is due that day' },
    because: [
      'Look at what the case says. Shares are £192,000 of £300,000, which is 64%, against a plan of 50%. A fall of 30% would take £57,600 of the whole, against £45,000 on the plan. That is a real extra, and it is the same extra it would be in any mix that has drifted.',
      'But the case also shows a bill on a date: £27,000 is due on 1 September, and the money for it is in the shares. After a fall of 30%, £27,000 in shares is £18,900, which is £8,100 short, and the date cannot move. The bill is what makes the fall hurt on a day, and the drift only makes the fall bigger.',
      'Fixing the bill also does part of the work on {t:mix}. One bond that repays £27,000 on 1 September might cost £26,000. Buying it with money from the shares takes the shares from £192,000 to £166,000, which is 55% of £300,000, closer to her plan. The bill is out of the fall’s reach, and {t:mix} has moved back.'
    ],
    take: 'Which answer wins is a decision, and the bill and {t:mix} run into each other here. The test above settles it: is there a bill of a known size on a known date with its money in shares or funds? If there is, that comes first. If the only thing in the case is {t:mix}, the answer is {a:T1.drifted}.' },

  { id: 'exc-bonus', kind: 'exception', ledger: 'defer~rebalance', looksLike: 'rebalance', is: 'defer',
    h: 'A mix that has moved, and a tax bill that new money would avoid',
    link: 'The last exception comes from the first question and not from this one. Putting a mix back usually means selling shares that have grown, and a sale can bring a tax bill of its own.',
    case: 'tm-exc-bonus',
    setup: 'Frank’s mix is 70% in shares against a plan of 60%, and the adviser wants to put it back by selling shares. That is what {o:rebalance} looks like. Yet the answer for this case is {a:D1.erosion}, and the next question gives {a:E1.needlesssale}.',
    prompt: { kind: 'phrase', answer: 'Frank has just been paid a £60,000 bonus' },
    because: [
      'Look at the numbers. Shares are £280,000 of £400,000, which is 70%. Selling £40,000 of them and buying bonds would bring {t:mix} back to 60% and 40%, and it would bring a tax bill of about £2,600 on the gain.',
      'But the case shows something else: a £60,000 bonus that Frank has not yet decided what to do with. Put into bonds, it makes the total £460,000, with bonds at £180,000 and shares still £280,000, which is 60.9%. That is the plan again, with no sale and no tax. The sale is not needed, and what it costs is a tax bill that new money would avoid.',
      'So the case shows two things: a mix that has moved, and a sale that would bring a tax bill for a job that new money could do. When a case shows both, the answer is the tax bill, because it is a cost that does not have to be paid.'
    ],
    take: [
      'Which answer wins is a decision. A mix that has moved is a real problem, and selling is a real fix where nothing better is available: inside {t:sheltered}, or when there is no new money to use. Then the sale brings no needless tax, and the case is {o:rebalance}.',
      'The test above settles it: is a sale planned that would bring a tax bill on what the shares have gained, and could new money put {t:mix} back instead? Where new money could, the answer is the tax bill.'
    ] }
]);
