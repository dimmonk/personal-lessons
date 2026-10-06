// Wealth Preservation, Unit Three, part one (second half): the three supports, a business the person runs with a support missing,
// the answer that says it is already safe, and their look-alike pair. Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- The three supports ---------- */
  { id: 'w3-term-threesupports', kind: 'term', term: 'threesupports',
    h: 'What makes it safe to keep most of your money in a business you run',
    link: 'The next answers are about a business the person runs, and they lean on three things that make it safe to keep so much in one place. Here they are, in a case where all three are there.',
    case: 'w3-h-t-supports',
    plain: [
      'The firm is $900,000 out of $1,260,000, which is 71% of everything Lucía has. If it had a very bad year, a lot of what she owns would go with it. Three things in her case are why she can sleep.',
      'First, everything else she has is spread over many investments: $270,000 in funds that hold thousands of companies, so a bad year for printing does not become a bad year for the rest of her money.',
      'Second, several years of spending are held outside the firm. $90,000 in savings against $30,000 a year is three years, the figure used in this unit. If the firm earned nothing for a year or two, she would not have to drain it or sell it at a bad moment.',
      'Third, no loan is secured on her shares in the firm. A lender that holds shares as security can take them, or force a sale, if payments slip. Her house loan is secured on the house, so nothing the bank does about it touches the firm.',
      'With all three she can keep most of what she has in a business she knows and runs. One missing is a gap.'
    ],
    after: 'From here on, {t:threesupports} means these three things. A business is made safe by all three together.' },

  /* ---------- A business the person runs, with a support missing ---------- */
  { id: 'w3-meet-supports', kind: 'meet', outcome: 'supports',
    link: 'The next answer is the other side of Lucía’s case: when one of the three is missing, a business that is most of what someone has stops being a sound choice and becomes a risk.',
    case: 'w3-h-sup-1', mark: 'S1',
    strip: [
      'There is one person, Femi, with $560,000: $480,000 in a roofing firm he runs, and $80,000 that is a van worth $66,000 and $14,000 in savings.',
      'The firm is most of what he owns: $480,000 out of $560,000 is 86%.',
      'He runs it himself, and he started it.',
      'Each of the three things from Lucía’s case is missing: nothing else is spread across investments, his savings cover under five months of spending, and a bank holds his shares in the firm as security for a loan.'
    ],
    explain: [
      'The rest of his money is a van and a savings account, so nothing is spread: a bad year for roofing hurts the van too. His family spends $36,000 a year, and $14,000 is under five months of that, so a year of no earnings would force him to drain the firm or sell it. And a bank holds his shares as security for the $90,000 truck loan, so if payments slip, a lender could take the shares and decide the future of the firm when he is least able to argue.',
      'One missing is enough for this answer; Femi has all three missing, which makes the shape easy to see. The fix is to put the three in place, in an order that follows urgency: the loan first, because it is the one a lender can use against him; then the spending reserve, because it buys time; then spreading the rest, because it is the slowest.'
    ],
    feature: { step: 'S1', option: 'ownrun' },
    name: 'The answer is {a:S1.ownrun}, and the name of what to do about it is {o:supports}: build what is missing, and what is to be built is {t:threesupports}. The name says nothing against running a business, or against having most of what you own in it.',
    act: 'Check each of the three with numbers: savings divided by yearly spending gives the years covered; how much of everything else is spread across funds; any loan that has the business’s shares as security. Deal with that loan first, then build the reserve toward about three years of spending, then put money that comes out of the business into funds that hold many companies. Check again once a year.' },

  { id: 'w3-check-supports', kind: 'check', after: 'supports',
    case: 'w3-h-sup-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun'] } },

  /* ---------- Safe as it stands ---------- */
  { id: 'w3-meet-safe', kind: 'meet', outcome: 'safe',
    link: 'In every case so far something was missing, or in the way. The next answer is for the opposite: the same business, most of what the person has, and nothing missing round it.',
    case: 'w3-h-saf-1', mark: 'S1',
    strip: [
      'There is one person, Hugo, with $1,150,000: $800,000 in a lumberyard he runs, $250,000 in funds, and $100,000 in savings.',
      'The yard is most of what he owns: $800,000 out of $1,150,000 is 70%.',
      'Everything else he has is spread: $250,000 is in funds that hold thousands of companies.',
      'His savings cover three years: $100,000 against $33,000 a year is just over three.',
      'No bank holds his shares in the yard as security.'
    ],
    explain: [
      'Hugo’s case has Femi’s shape, and what differs is what stands round it: he has all three of {t:threesupports}, in numbers. So nothing needs doing, and that is a real answer: “Yes, most of what I have is in one business, and it is looked after.”',
      'Say it firmly, because every fix has a price. If an adviser told Hugo to sell half the yard, he would pay tax and fees and give up part of a business he runs and likes, to guard against a bad year that his savings, his spread and his clean ownership already guard against.',
      'The answer is true of the case as written. If a loan is taken against the shares or the savings are spent, one support goes and the answer changes. It also fits other cases in which the one thing is already looked after: insurance well above any claim, each property in its own company, or a small loan at a fixed rate that the bank cannot demand back while it is paid. Each of those comes up beside the problem it answers.'
    ],
    feature: { step: 'S1', option: 'madesafe' },
    name: 'The answer is {a:S1.madesafe}, and the name is {o:safe}. It is the one name in this unit that says nothing needs doing. It does not say nothing could go wrong; it says that a bad year would not force anything.',
    act: 'Write down the numbers that make it safe: the years of spending set aside, the insurance next to the biggest claim, whose name holds each property, the loan’s rate and terms. Do nothing else to the one thing, and check the numbers once a year and whenever you borrow, spend the reserve or change a policy. If someone offers a fix, ask what problem it answers that your numbers do not.' },

  { id: 'w3-check-safe', kind: 'check', after: 'safe',
    case: 'w3-h-saf-chk',
    ask: { type: 'option', step: 'S1', among: ['freeheld', 'blocked', 'ownrun', 'madesafe'] } },

  { id: 'w3-look-supports-safe', kind: 'lookalike', ledger: 'supports~safe',
    link: 'These two are the nearest neighbors in the unit. In both, the person runs a business that is most of what they have. Here they are side by side, with the same person in both.',
    cases: ['w3-h-la-ss-a', 'w3-h-la-ss-b'],
    instruction: 'Both cases are about Alma and her bakery, $500,000 of the $800,000 she owns, with $150,000 in funds and $150,000 in savings. Compare one thing: whether a bank holds her shares in the bakery as security.',
    prompt: { kind: 'which', option: 'S1.ownrun', answer: 'w3-h-la-ss-b' },
    difference: [
      'In Case A she has all three of {t:threesupports}: the rest is spread over funds, $150,000 covers more than three years of the $40,000 she spends, and no bank holds her shares. The answer is {a:S1.madesafe}, and the name is {o:safe}. Nothing needs doing.',
      'In Case B one sentence is different: last year she borrowed $120,000 for new ovens, and the bank holds her shares as security. A lender could now decide the future of the bakery. The answer is {a:S1.ownrun}, and the name is {o:supports}: one of the three has gone, and the first thing to do is deal with the loan.',
      'One sentence changed the answer. The story is the same bakery, and the answer follows the three things, not the story.'
    ] }
]);
