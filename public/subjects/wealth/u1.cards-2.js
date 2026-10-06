// Wealth Preservation, Unit One, part one (second half): the two words the second family leans on, the second family (a fall in
// prices it is not ready for), and its look-alike pair with the first family. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- Two words the second family leans on ---------- */
  { id: 'term-bond', kind: 'term', term: 'bond',
    h: 'A loan with a fixed payout',
    link: 'The next kind of case is about falling prices, and prices fall for some things and not for others. One more word, for something whose price can wobble but whose payout does not.',
    case: 'w-t-bond',
    plain: [
      'Omar has not bought a piece of a company. He has lent money, and the loan comes with a promise: a set payout and his $1,000 back on a set date.',
      'The price of the loan does move, but a moving price is only a problem for a person who has to sell. A person who waits for the date gets the $1,000.'
    ],
    after: 'A loan like this is {t:bond}. Companies borrow this way as well as governments.' },

  { id: 'term-mix', kind: 'term', term: 'mix',
    h: 'The split between shares, loans and cash',
    link: 'One last word before the second kind of case: the way a person has divided their money between the things it can be held in.',
    case: 'w-t-mix',
    plain: [
      'Shares rise and fall more than bonds, so the split decides how rough a ride the money gets. Hana planned a half-and-half ride, but the shares grew and are now three-quarters of her money.',
      'If they fall 30%, she loses $90,000, which is 22.5% of everything. On her plan, with $200,000 in shares, the same fall would have cost $60,000, which is 15%. Nobody decided to take that extra risk. It built up while she was not looking.'
    ],
    after: 'The split is {t:mix}. When it has moved well away from the one the person chose, a fall in prices takes a bigger share of their money than they chose to risk.' },

  /* ---------- The second family: a fall in prices it is not ready for ---------- */
  { id: 'meet-timing', kind: 'meet', family: 'timing',
    link: 'The second answer is easy to mistake for the first, because money leaves in it too. This time what matters is not how much leaves, but the day.',
    case: 'w-couple-fall', mark: 'D1',
    strip: [
      'Two people, Pete and Jean, and one sum: $400,000, all in shares and funds.',
      'About $1,700 leaves it every month to pay the bills. Nothing is set aside in cash, so every bill is paid by selling some of what they own.',
      'Prices have just fallen by 30%, and the bills are the same as before.'
    ],
    explain: [
      'What you are shown is not a charge or a tax. $1,700 a month is just life: food, heating, rent. What the case shows is where the money comes from. Say the price is $10 each. Before the fall, $1,700 means selling 170 of them. After it, at $7, the same bills mean selling 243: 73 more. If prices come back, those 73 are not there to rise with them. The sale was forced by the day the bills fall due, not by anything about the companies.',
      'A fall does nothing to a person who is not selling. It hurts a person who has to sell on a date the market does not care about. Someone with cash set aside to spend until prices recover hardly notices the same fall.',
      'Two more shapes belong here. One is a bill of a known size on a known day, with the money for it still held in investments that can fall. The other is the one on the card about {t:mix}: a split that has moved away from its plan, so that a fall takes more than the person chose.'
    ],
    feature: { step: 'D1', option: 'timing' },
    name: [
      'The answer, and the name, is {a:D1.timing}. "Not ready" means that nothing has been arranged to ride a fall out: no cash to spend from, no money held as {t:bond} that repays on the day, and {t:mix} not kept within its plan.',
      'The name does not say that prices will fall, only what would happen if they did.'
    ] },

  { id: 'check-timing', kind: 'check', after: 'timing',
    case: 'w-drifted',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that the split has moved away from the plan? Tap them.',
           answer: 'After years of rises it is 78% shares and 22% bonds' } },

  /* ---------- The look-alike pair: something taken out every year, or a fall in prices ---------- */
  { id: 'look-erosion-timing', kind: 'lookalike', ledger: 'erosion~timing',
    link: 'In both of these money leaves the owner, and a fall in prices may be somewhere in the story. They are easy to mix up.',
    cases: ['w-la-fee', 'w-la-fall'],
    instruction: 'Both cases are about Greta and Sam, who are retired and have $300,000. Compare one thing: is the case about how much leaves each year, whatever prices do, or about the days on which money has to be raised, because prices have fallen?',
    prompt: { kind: 'which', option: 'D1.timing', answer: 'w-la-fall' },
    difference: [
      'In Case A the same $3,300 is taken in a good year and in a bad one, and nothing is sold on a bad day. The answer is {a:D1.erosion}.',
      'In Case B nothing is taken by an adviser. The bills are paid by selling funds with nothing set aside, in a market that has fallen, so each sale is at a lower price and what is sold is not there when prices come back. The answer is {a:D1.timing}.'
    ] }
]);
