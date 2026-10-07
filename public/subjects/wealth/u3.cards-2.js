// Wealth Preservation, Unit Three, part one (second half): the three safety nets, a business the person runs with one missing,
// the answer that says it is already safe, and their look-alike pair. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- The three safety nets ---------- */
  { id: 'w3-term-threesupports', kind: 'term', term: 'threesupports',
    h: 'What makes it safe to keep most of your money in a business you run',
    link: 'The next answers are about a business the person runs. Here is one where nothing is missing.',
    case: 'w3-h-t-supports',
    plain: [
      'Lucía’s firm is $900,000 of her $1,260,000, which is 71%. If it had a very bad year, a lot of what she owns would go with it. Three things are why she is still safe.',
      'First, everything else she has is spread out. Her other $270,000 is in funds that hold thousands of companies, so a bad year for printing is not a bad year for the rest of her money.',
      'Second, several years of spending are held outside the firm. $90,000 in savings against $30,000 a year is three years, the figure this unit uses. If the firm earned nothing for a year or two, she would not have to drain it or sell it at a bad moment.',
      'Third, no loan is secured on her shares in the firm. A lender that holds your shares as security can take them, or force a sale, if payments slip. Her house loan is secured on the house, so nothing the bank does touches the firm.',
      'With all three she can keep most of what she has in a business she knows and runs. If one is missing, that is a gap.'
    ],
    after: 'From here on, {t:threesupports} means these three things. A business is safe only with all three together.' },

  /* ---------- A business the person runs, with one safety net missing ---------- */
  { id: 'w3-meet-supports', kind: 'meet', outcome: 'supports',
    link: 'The other side of Lucía’s story: when one of the three is missing, a business that is most of what you have stops being a sound choice and becomes a risk.',
    case: 'w3-h-sup-1', mark: 'S1',
    explain: [
      'Femi’s other money is a van and a savings account, so nothing is spread out: a bad year for roofing hurts the van too. His family spends $36,000 a year, so $14,000 is under five months, and a year of no earnings would force him to drain the firm or sell it. And a bank holds his shares as security for the $90,000 truck loan, so if payments slip, the bank could take the shares and decide the firm’s future when he is least able to argue.',
      'One missing is enough for this answer, and Femi has all three missing. Fix them in the order of urgency: the loan first, because a lender can use it against him; then the savings, because they buy time; then spreading the rest, because that is the slowest.'
    ],
    spot: [
      { do: 'Check he runs the business and it is most of what he owns: the roofing firm is $480,000 of $560,000.', why: 'That is when {t:threesupports} matter.' },
      { do: 'Check whether the rest is spread out: a van and $14,000 in savings is not.', why: 'A bad year for the firm would hurt the van too.' },
      { do: 'Divide savings by yearly spending: $14,000 ÷ $36,000 is under five months.', why: 'You want several years, not months.' },
      { do: 'Check for a loan against the firm’s shares: “the bank holds his shares in the firm as security”.', why: 'The bank could take the shares if payments slip.' },
      { do: 'If any one of the three is missing, this is the answer.', why: 'All three have to be there to make it safe.' }
    ],
    feature: { step: 'S1', option: 'ownrun' },
    name: 'This is {a:S1.ownrun}. What to do is {o:supports}: build whichever of {t:threesupports} is missing. It says nothing against running a business or keeping most of what you own in it.',
    act: [
      { do: 'Check each of the three with numbers: savings ÷ yearly spending, how much else is in funds, and any loan that has the firm’s shares as security.', why: 'That shows which ones are missing.' },
      { do: 'Deal with a loan against the shares first.', why: 'It is the one a lender can use against you.' },
      { do: 'Then build the savings toward about three years of spending.', why: 'That buys time in a bad year.' },
      { do: 'Then put money that comes out of the business into funds that hold many companies.', why: 'This is the slowest to build.' },
      { do: 'Check all three again once a year.', why: 'One change can open a gap.' }
    ] },

  { id: 'w3-check-supports', kind: 'check', after: 'supports',
    case: 'w3-h-sup-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun'] } },

  /* ---------- Safe as it stands ---------- */
  { id: 'w3-meet-safe', kind: 'meet', outcome: 'safe',
    link: 'Now the opposite: the same business, the same share of his money, and nothing missing.',
    case: 'w3-h-saf-1', mark: 'S1',
    explain: [
      'Hugo’s story has Femi’s shape, but he has all three of {t:threesupports}, in numbers. So nothing needs doing, and that is a real answer: “Yes, most of what I have is in one business, and it is looked after.”',
      'Say it firmly, because every fix has a price. If an adviser told Hugo to sell half the yard, he would pay tax and fees and give up part of a business he runs and likes, to guard against a bad year that his savings, his funds and his clean ownership already guard against.',
      'This holds only while the numbers hold. If he borrows against the shares or spends the savings, one safety net goes and the answer changes. The same answer fits other stories where the one thing is already looked after: insurance well above any claim, each property in its own company, or a small fixed loan the bank cannot demand back while it is paid.'
    ],
    spot: [
      { do: 'Check he runs the yard and it is most of what he owns: $800,000 of $1,150,000.', why: 'It starts out the same as Femi’s story.' },
      { do: 'Check the rest is spread out: $250,000 in funds that hold thousands of companies.', why: 'A bad year for lumber does not hit all his money.' },
      { do: 'Divide savings by yearly spending: $100,000 ÷ $33,000 is just over three years.', why: 'Three years is the figure this unit uses.' },
      { do: 'Check no bank holds his shares in the yard as security: “No bank holds his shares”.', why: 'Nobody else can take them.' },
      { do: 'If all three are there, leave it alone.', why: 'A fix would cost money to solve a problem he does not have.' }
    ],
    feature: { step: 'S1', option: 'madesafe' },
    name: 'This is {a:S1.madesafe}, and the name is {o:safe}. It is the one name in this unit that says nothing needs doing. It does not say nothing could go wrong, only that a bad year would not force him to do anything.',
    act: [
      { do: 'Write down the numbers that make it safe: the years of spending set aside, the insurance next to the biggest claim, whose name holds each property, the loan’s rate and terms.', why: 'Then you can check them later.' },
      { do: 'Leave the one big thing alone.', why: 'Every fix has a price.' },
      { do: 'Check the numbers once a year, and whenever you borrow, spend the savings or change a policy.', why: 'One change can turn a safe thing into a gap.' },
      { do: 'If someone offers a fix, ask what problem it solves that your numbers do not.', why: 'If they cannot say, you do not need it.' }
    ] },

  { id: 'w3-check-safe', kind: 'check', after: 'safe',
    case: 'w3-h-saf-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe'] } },

  { id: 'w3-look-supports-safe', kind: 'lookalike', ledger: 'supports~safe',
    link: 'These two are the closest pair in the unit: in both, the person runs a business that is most of what they have.',
    cases: ['w3-h-la-ss-a', 'w3-h-la-ss-b'],
    instruction: 'Both stories are about Alma and her bakery, $500,000 of the $800,000 she owns, with $150,000 in funds and $150,000 in savings. Compare one thing: whether a bank holds her shares in the bakery as security.',
    prompt: { kind: 'which', option: 'S1.ownrun', answer: 'w3-h-la-ss-b' },
    difference: [
      'In Story A she has all three of {t:threesupports}: the rest is spread over funds, $150,000 covers more than three years of the $40,000 she spends, and no bank holds her shares. That is {a:S1.madesafe}, and nothing needs doing.',
      'In Story B one sentence is different: last year she borrowed $120,000 for new ovens, and the bank holds her shares as security. The bank could now decide the bakery’s future. That is {a:S1.ownrun}, and the first thing to do is deal with the loan.',
      'One sentence changed the answer. Check the three things, not the story.'
    ] }
]);
