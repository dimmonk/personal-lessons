// Wealth Preservation, Unit One, part one (second half): the two words the second family leans on, the second answer (prices falling at the wrong
// time), and its look-alike pair with the first family. Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- Two words the second answer leans on ---------- */
  { id: 'term-bond', kind: 'term', term: 'bond',
    h: 'A loan with a fixed payout',
    link: 'The next answer is about falling prices, and prices fall for some things and not for others. One more word, for something whose price wobbles but whose payout does not.',
    case: 'w-t-bond',
    plain: [
      'Omar did not buy a piece of a company. He lent money, and the loan comes with a promise: $30 a year, and his $1,000 back on a set date.',
      'The price of the loan does move, but that only matters if he has to sell early. If he waits for the date, he gets his $1,000.'
    ],
    after: 'This is {t:bond}. Companies borrow this way too, not just governments.' },

  { id: 'term-mix', kind: 'term', term: 'mix',
    h: 'The split between shares, bonds and cash',
    link: 'One last word before the next answer: how a person has divided their money between the things it can be held in.',
    case: 'w-t-mix',
    plain: [
      'Shares rise and fall more than bonds, so the split decides how rough a ride the money gets. Hana planned half and half, but her shares grew and are now three-quarters of her money.',
      'If shares fall 30%, she loses $90,000, which is 22.5% of everything. On her plan, with $200,000 in shares, the same fall would cost $60,000, which is 15%. Nobody decided to take that extra risk. It built up while she was not looking.'
    ],
    after: 'This is {t:mix}. When it drifts away from the one the person chose, a fall takes more of their money than they meant to risk.' },

  /* ---------- The second answer: prices falling at the wrong time ---------- */
  { id: 'meet-timing', kind: 'meet', family: 'timing',
    link: 'Second: money leaves in this one too, so it is easy to mix up with the first. What matters this time is not how much leaves, but when.',
    case: 'w-couple-fall', mark: 'D1',
    explain: [
      'Pete and Jean pay about $1,700 a month in bills, and they have no cash, so every bill is paid by selling shares. Say each share costs $10. Before the fall, $1,700 means selling 170 shares. After it, at $7, the same bills mean selling 243: 73 more. If prices come back, those 73 are not there to rise with them.',
      'A fall does nothing to a person who is not selling. It hurts a person who has to sell on a day the market does not care about. Someone with cash set aside to live on until prices recover hardly notices the same fall.',
      'Two other situations belong here. One is a bill of a known size on a known day, with the money for it still in shares or funds that can fall. The other is {t:mix} drifting away from its plan, so that a fall takes more than the person chose.'
    ],
    spot: [
      { do: 'Find what the money is held in: shares and funds, $400,000.', why: 'Their price can fall. Cash does not, and neither does {t:bond} held to its date.' },
      { do: 'Find what the money has to pay for: $1,700 a month in bills, with nothing set aside in cash.', why: 'A fall only hurts when something is waiting for the money.' },
      { do: 'Check whether prices are down on the days it is needed: this spring they fell 30%.', why: 'Each sale is at a lower price, and what is sold is not there when prices recover.' }
    ],
    feature: { step: 'D1', option: 'timing' },
    name: 'This is {a:D1.timing}. It does not say prices will fall, only what a fall would do to money that nothing has been set aside to protect.' },

  { id: 'check-timing', kind: 'check', after: 'timing',
    case: 'w-drifted',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show that Greg’s split has moved away from his plan? Tap them.',
           answer: 'After years of rises it is 78% shares and 22% bonds' } },

  /* ---------- The look-alike pair: money going out every year, or prices falling at the wrong time ---------- */
  { id: 'look-erosion-timing', kind: 'lookalike', ledger: 'erosion~timing',
    link: 'Money leaves the owner in both of these, and a fall in prices may be somewhere in the story. They are easy to mix up.',
    cases: ['w-la-fee', 'w-la-fall'],
    instruction: 'Both stories are about Greta and Sam, who are retired and have $300,000. Compare one thing: does the same sum leave every year whatever prices do, or does money have to be raised on certain days because prices have fallen?',
    prompt: { kind: 'which', option: 'D1.timing', answer: 'w-la-fall' },
    difference: [
      'In Story A the adviser takes the same $3,300 in a good year and in a bad one, and nothing is sold on a bad day. That is {a:D1.erosion}.',
      'In Story B nobody takes a fee. The bills are paid by selling funds with nothing in cash, in a market that has fallen, so each sale is at a lower price and what is sold is not there when prices come back. That is {a:D1.timing}.'
    ] }
]);
