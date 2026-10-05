// Wealth Preservation, Unit Four, part two (second piece): what the third name is like, its two look-alike pairs, and the fourth name
// (a split that has moved away from its plan). Field guide: see u4.cards-1.js.

FC.cards('wealth', 'u4', [

  { id: 'portrait-ladder', kind: 'portrait', outcome: 'ladder',
    link: 'You know what to point to for {o:ladder}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'There is a bill, and the case gives you its size or lets you work it out, and its date.',
      'The size and the date belong to the bill and not to the market: a fee, a tax bill, a payment on completion, a loan to be repaid, a deposit.',
      'The money for it is in shares or funds, even when the case says it has been "put aside" or "saved up for it". Where the money is held is what matters, and not whether it has been set apart in the mind.',
      'The nearer the date, the less time prices have to recover, so the same fall matters more.',
      'It can be one bill or several, such as a fee every year for years. Each bill has its own date and its own amount.',
      'It does not need prices to have fallen yet. A case can say only that they could.'
    ],
    not: [
      'A bill is not enough. A bill whose money is in a savings account, or in bonds that repay by the day it is due, has nothing for a fall to catch, and the answer is {a:T1.ready}.',
      'Money that is needed some day, with no date and no amount, is not this name. A plan to "have something for the house one day" shows no bill. And a bill that will be met out of pay, with no savings touched, gives a fall nothing to catch either.'
    ],
    wild: ['"The fees are due on 1 September, whatever the market does."', '"It’s the deposit money, and it’s all in the fund."', '"I put it aside, in my share account."', '"The tax bill comes every January."', '"Prices came back last time, but this bill won’t wait."'],
    self: 'In your own life it is any sentence with a date and an amount in it: a tax bill, a fee, a payment for a car or a house, the day a loan has to be repaid. Ask where that money is held on the day you read the date.',
    ask: '"What is this bill, when is it due, and where is its money held?" If the money sits in shares or funds, you are probably looking at this name.',
    act: [
      'List every bill of a known size on a known date over the next several years: what it is for, the amount and the date.',
      'For each one, find where its money is held today. If it is in shares or funds, it is this name. If it is in cash, or in {t:bond} that repays by the day, it is already safe.',
      'For each bill in shares or funds, buy {t:bond} that repays the amount on or just before the date, from a borrower very unlikely to fail to pay, such as a government, and hold it to that date. Check the price and the repayment date before you buy.',
      'Count the cost in pounds. The bond earns its fixed interest and no more, which may be less than shares earn in a good year. Money that is not tied to a date stays where it is.'
    ] },

  { id: 'check-ladder', kind: 'check', after: 'ladder',
    case: 'tm-chk-bill',
    ask: { type: 'option', step: 'T1', among: ['livingcosts', 'ready', 'datedbill'] } },

  { id: 'look-ladder-covered', kind: 'lookalike', ledger: 'ladder~covered',
    link: 'You have now met two names about a bill on a date. They are easy to mix up, because in both the bill is the same and the date is the same. This card puts them side by side.',
    cases: ['tm-la-care-fund', 'tm-la-care-bond'],
    instruction: 'Both cases are about Mira, who must pay £18,000 to a care home on 1 May, in a year when prices have fallen by a fifth. Compare one thing: what the money for the bill is held in.',
    prompt: { kind: 'which', option: 'T1.datedbill', answer: 'tm-la-care-fund' },
    difference: [
      'In Case A the £18,000 is in shares. After a fall of 20% it is £14,400, which is £3,600 short, and the care home’s date is 1 May whatever prices do. The key’s answer is {a:T1.datedbill}, and the case is {o:ladder}.',
      'In Case B the £18,000 is in {t:bond} from a government that repays £18,000 on 30 April. The bond’s price moved a little during the year, and that does not matter, because Mira will hold it to the day it repays the full £18,000. The key’s answer is {a:T1.ready}, and the case is {o:covered}.',
      'The bill, the date and the fall are the same in both. What separates them is whether the money for the bill is held in something whose worth on the day can change. In Case B the cure is already in place, and nothing needs doing.'
    ] },

  { id: 'look-cashbuffer-ladder', kind: 'lookalike', ledger: 'cashbuffer~ladder',
    link: 'The last two names are the closest pair in the unit: in both, money that is needed on particular days is held where its price can fall. This card puts them side by side.',
    cases: ['tm-la-rent-month', 'tm-la-rent-year'],
    instruction: 'Both cases are about Femi’s rent. Compare one thing: is the money needed for costs that keep coming, month after month, or for one bill of a known size on a known day?',
    prompt: { kind: 'which', option: 'T1.livingcosts', answer: 'tm-la-rent-month' },
    difference: [
      'In Case A Femi has no pay and lives on his £250,000. He pays £1,000 of rent every month by selling £1,000 of the fund, and he has no cash put by. The need is living costs, and it has no end date. The key’s answer is {a:T1.livingcosts}, and the case is {o:cashbuffer}.',
      'In Case B Femi works, and his pay covers his bills. The only thing for the money to do is a single payment of £12,000, a year’s rent paid in advance on 1 March, and that money is in shares. The need is one bill of a known size on a known date, and nothing is needed from the money after it. The key’s answer is {a:T1.datedbill}, and the case is {o:ladder}.',
      'The man, the rent and the fall are the same. What differs is whether the money has to pay costs that keep coming, which a store of cash answers, or one bill on one day, which one bond answers.'
    ] },

  /* ---------- The fourth name: a mix that has moved away from its plan ---------- */
  { id: 'meet-rebalance', kind: 'meet', outcome: 'rebalance',
    link: 'The first three names are about money that is needed. The last is about money that is not needed soon, but that is no longer split the way its owner decided.',
    case: 'tm-meet-mix', mark: 'T1',
    strip: [
      'There is one person, Marek, and one sum: £800,000, split between shares and bonds.',
      'He chose {t:mix}: 60% in shares and 40% in bonds.',
      'It is now 78% in shares, £624,000, because shares have grown faster than bonds.',
      'No bill and no living costs are in the case: he need take nothing out for fifteen years. The only thing in it is {t:mix}.'
    ],
    explain: [
      'What you are shown is not a bill or living costs, and nothing has gone wrong yet. Nobody decided to take more risk. His mix moved while Marek was not looking: shares grew faster than bonds, and a bigger slice of what he owns became shares.',
      'Here is what that does. Suppose shares fall 30%. On his plan, 60% of £800,000 is £480,000 in shares, and a fall of 30% takes £144,000, which is 18% of everything he has. As {t:mix} is now, with £624,000 in shares, the same fall takes £187,200, which is 23.4% of everything. That is £43,200 more than the plan chose to risk, for a fall that is exactly the same.',
      'The key’s question is about money that a fall would harm, and this is money that a fall would harm more than its owner agreed to. The harm is not a forced sale. It is a bigger bite than he chose, taken at a time he did not choose.',
      'The alternative is a written rule, made while things are calm. For example: "Each January, if shares are more than 5 points away from 60%, sell or buy so that they are back at 60%." For Marek that means selling £144,000 of shares and buying £144,000 of bonds, which leaves £480,000 in shares and £320,000 in bonds, the 60% and 40% he chose.',
      'The rule is written down because the moment to act feels wrong. When shares have been rising, selling some of them feels like giving up something that is working. When they have fallen, buying more feels like adding to a loss. A rule written beforehand and followed on its date takes the choice out of the moment when feelings are strongest. The 5 points and the January date are examples: each plan sets its own.',
      'One thing is worth looking at before any sale: where the shares are held. In {t:sheltered} a sale like this raises no tax. In a taxable account, selling shares that have risen can bring a tax bill on what they have gained, and that is a cost to weigh against the benefit.'
    ],
    feature: { step: 'T1', option: 'drifted' },
    name: [
      'The name for this is {o:rebalance}. "Rebalance" means putting {t:mix} back to what the person chose, and "by written rule" says how: the rule is written down in advance and followed on its date.',
      'A mix can move either way. If shares fall and bonds do not, it moves the other way, and the same name applies.'
    ] },

  { id: 'again-rebalance', kind: 'again', outcome: 'rebalance',
    link: 'Marek’s case gave you what to point to: {needs:rebalance}. Here is a second case with a different story, in which {t:mix} has moved the other way.',
    first: 'tm-meet-mix', second: 'tm-again-mix', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story, and ignore the direction: in one the shares grew and in the other they shrank. Look at one thing only: how far {t:mix} now is from the one the person chose.',
    prompt: { kind: 'phrase', answer: 'shares are £105,000 of the £195,000, 54%' },
    shared: [
      'Both people chose a mix, and in both it is far from the choice: 78% against 60% for Marek, 54% against 70% for Tomas and Eva. Neither case has a bill or living costs in it, and neither person did anything to cause it. It moved by itself.',
      'Here are Tomas and Eva’s numbers. On their plan, 70% of £195,000 is £136,500 in shares, and a fall of 30% would take £40,950, which is 21% of everything. As {t:mix} is now, with £105,000 in shares, the same fall takes £31,500, which is 16.2%. A fall would take less than they chose, and so would a recovery. They carry less risk than they chose and expect less growth.',
      'The direction does not matter. What both cases share is a mix well away from the plan, with nothing being sold to pay for anything. That is what {o:rebalance} names.'
    ] }
]);
