// Wealth Preservation, Unit Three, part one (second half): the second answer, one holding that the person is not allowed to sell yet,
// and its look-alike pair with the first. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  { id: 'w3-meet-hedge', kind: 'meet', outcome: 'hedge',
    link: 'The first answer was for shares a person is free to sell. The second is for shares they are not, and it is the first answer’s nearest neighbor: the same shape, with one fact changed.',
    case: 'w3-h-hdg-1', mark: 'S1',
    strip: [
      'There is one person, Tomasz, with about $450,000: $400,000 in one company’s shares, and $50,000 in savings.',
      'The shares are most of it: $400,000 out of $450,000 is 89%.',
      'A rule stops him selling them: staff may not sell their own shares for two years from the day the company sold its shares to the public.',
      'The case does not say the price is falling. The case is about what he can and cannot do.'
    ],
    explain: [
      'The shape is the one you have just met: 89% of what Tomasz has rests on one company. But the remedy of the last answer is closed to him. He cannot sell a quarter every three months, because for two years he cannot sell at all. Rules of this kind are common. A company that has just sold its shares to the public often tells its staff not to sell for a period, so that a rush of selling does not push the price down. A company that pays part of wages in shares often says the shares are not the employee’s to sell until a set date.',
      'He cannot spread the risk by selling, so the question becomes how to limit what he could lose while he waits. The tool is a contract bought from a bank or a broker, for a fee. In plain words: the contract lets him sell his shares to the bank at a set price, whatever the market price is, at any time in the next two years. Suppose the price today is $20, and he buys the right to sell at $16 for a fee of $1.60 for each share. On 20,000 shares the fee is $32,000.',
      'Now see what it does. If the price falls to $8, he can still sell at $16, so his loss is the $4 for each share between $20 and $16, plus the $1.60 fee: $5.60 for each share, or $112,000 on 20,000 shares. Without the contract, a fall to $8 would have cost him $12 for each share, which is $240,000. If the price rises to $30 instead, he does not use the contract and has gained $10 for each share, $200,000, less the $32,000 fee. The loss is capped, most of the gain is kept, and the fee is the price.',
      'There is a cheaper version. He also agrees to give up gains above a high price, say $28, and is paid for that promise, which pays for most of the fee. Then his loss is capped and so is his gain. Whether to do this is a choice about what he is willing to give up.',
      'None of this makes the shares safe, and none of it spreads anything. It limits the loss while the rule lasts. When the rule ends, the remedy of {o:diversify} opens up: he can sell on a schedule. So this answer is for the waiting time. One caution: in the US the agreements that stop staff selling after a company first sells its shares to the public usually forbid these contracts too, many employers forbid them at any time, and the tax rules for them are complicated, so the first step is to find out what is allowed and what it costs.'
    ],
    feature: { step: 'S1', option: 'blocked' },
    name: [
      'The answer is {a:S1.blocked}, and the name of what to do about it is {o:hedge}. To “cap” a loss is to put a ceiling on it, and “without selling” is the point: the shares stay where they are.',
      'The name is about the waiting time. It does not say that the company is a bad one.'
    ] },

  { id: 'w3-again-hedge', kind: 'again', outcome: 'hedge',
    link: 'The last card gave you what to point to: {needs:hedge}. Here is a second case in which the rule comes from a pay plan, not from the company’s first sale of its shares to the public.',
    first: 'w3-h-hdg-1', second: 'w3-h-hdg-2', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the difference between software and a hospital group, and ignore how the shares came to the person. Look at one thing only: which words show a rule that stops the person selling?',
    prompt: { kind: 'phrase', answer: 'she may not sell them until three years later' },
    shared: [
      'Tomasz and Priya came to their shares in different ways: Tomasz joined a company early, and Priya is paid part of her wages in shares. Both have one company’s shares that are most of what they have: $400,000 out of $450,000 for Tomasz (89%), and $210,000 out of $260,000 for Priya (81%). And both are held back by a rule: two years for him, and three years from each year’s shares for her.',
      'The rule does not say that the shares are worth little or that the company is in trouble. It says only that for a set time the owner has no way to sell. That is what {a:S1.blocked} names, and it is why the remedy of the last answer is not open to them. Priya’s rule also takes the shares away if she leaves early, which is one more reason they are hard to deal with.'
    ] },

  { id: 'w3-portrait-hedge', kind: 'portrait', outcome: 'hedge',
    link: 'You now know what to point to for {a:S1.blocked}. Here is the rest of the picture.',
    typical: [
      'The shares came with the job: an early stake in a company, a plan that pays staff in shares, part of wages paid in shares, a payout in the buyer’s shares after a sale.',
      'A rule or a contract says when they may be sold, and the case gives the date or the length of the wait: “two years”, “until March”, “three years later”.',
      'The shares are often worth a lot on paper and hard to feel as real money. The person may feel rich and be unable to spend or move any of it.',
      'There may be a price for leaving. Shares that are not yet the person’s own are often lost if they leave, which makes quitting expensive.',
      'The protection is a contract with a fee. The case may or may not say whether the employer allows one.'
    ],
    not: [
      'A rule that stops the sale is not the same as a decision not to sell. Someone who could sell and chooses not to is the case of {o:diversify}, and the remedy there is a schedule. The case has to show a rule.',
      'And a rule that ends soon changes little. If the shares can be sold next month, the sensible step is to plan the sales, because a contract bought for a few weeks costs its fee and protects only for those weeks.'
    ],
    wild: ['"I can’t sell until the lockup ends."', '"They’re mine on paper, but I can’t touch them until year three."', '"It’s all in the company stock, and I can’t sell any of it."', '"I’d lose them if I left."'],
    self: 'In your own life, look at the pay stub or the stock-plan letter from an employer: a date before which the shares may not be sold, and words such as “restricted”, “unvested”, “not before” or “lockup”.',
    ask: '“Until what date am I not allowed to sell, and what could this company’s price do before then?” If there is a date, and one company is most of what you have, you are probably looking at this answer.',
    act: [
      'First, find the exact rule: which shares, until what date, and what happens to them if you leave. Write the date down.',
      'Second, find out whether your employer’s rules, and any agreement you signed, allow you to buy a contract that sets a floor under the price. Many do not.',
      'Third, if it is allowed, get the cost in writing, as a figure per share and as a percentage of what the shares are worth, and set it against the loss it would stop.',
      'Fourth, write down the day the rule ends and the first sale you will make on that day, so that the plan for selling is ready before the wait is over.'
    ] },

  { id: 'w3-check-hedge', kind: 'check', after: 'hedge',
    case: 'w3-h-hdg-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked'] } },

  { id: 'w3-look-diversify-hedge', kind: 'lookalike', ledger: 'diversify~hedge',
    link: 'The two answers you have met are neighbors: in both, one company’s shares are most of what the person has. This card puts them side by side, with the same person in both.',
    cases: ['w3-h-la-dh-a', 'w3-h-la-dh-b'],
    instruction: 'Both cases are about Ruth, who has $500,000 of shares in the same sports-shoe company and $60,000 of other savings. Compare one thing: what, if anything, stops her selling the shares.',
    prompt: { kind: 'which', option: 'S1.blocked', answer: 'w3-h-la-dh-b' },
    difference: [
      'In Case A Ruth left the company two years ago, takes no part in running it, and could sell on any day. $500,000 out of $560,000 is 89% in one company, and nothing stands in her way. The answer is {a:S1.freeheld}, and the name is {o:diversify}: a schedule of sales.',
      'In Case B the shares are the same and so is the sum, but the rules of the staff share plan stop her selling for another eighteen months. The answer is {a:S1.blocked}, and the name is {o:hedge}: she cannot sell, so she can only limit what she could lose while she waits.',
      'The money, the company and the person are the same in both. Only the rule is different, and the rule is what decides the answer. That is why nobody can name a case from how much is in one company.'
    ] }
]);
