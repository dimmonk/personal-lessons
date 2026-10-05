// Civics, Unit Three, part two: money. The third name, its look-alike pair with the first, and the one exception.
// "the spending bill" and "appropriations" are the other words real life uses for the third name. The app says them once,
// on its meet card, and this file types them only inside quotation marks in a field that quotes what people say.

FC.cards('civics', 'u3', [

  /* ---------- The power of the purse ---------- */
  { id: 'meet-purse', kind: 'meet', outcome: 'purse',
    link: 'So far Congress has passed laws, some it was allowed to pass and some it was not. The third thing Congress does is not about what people may do. It is about what the government may spend.',
    case: 'p-barrier', mark: 'C1',
    strip: [
      'There is a programme on paper: the President announced a flood barrier, and the engineers have their plans.',
      'There is a decision in Congress about whether the government may spend money on it: the bill that settles this year’s spending.',
      'The bill leaves the money out.',
      'Nobody has forbidden the barrier. There is simply no money to build it.'
    ],
    explain: [
      'Everyone in this case wants the barrier built, and nobody can build it. The President announced it, the engineers have their plans, and the town floods every spring. What stops it is a bill: the one that decides what the government may spend this year has no money for the barrier.',
      'The government can spend only what Congress has voted. That is the rule, and it is why this case is about Congress. The engineers cannot build without money, and the President cannot hand it out. Only Congress can decide that the money is there. So Congress did not need to pass a law against the barrier. Leaving the money out was enough.',
      'It works in the other direction too. Congress can vote the money, which lets an office start, and it can cut an amount that was voted before. Voting it, cutting it and leaving it out are three ways of deciding the same thing. This is the answer when {when:C1.money}.'
    ],
    feature: { step: 'C1', option: 'money' },
    name: 'The name for this is {o:purse}. A purse is where a person keeps their money, and the name says that Congress holds the government’s: whoever holds the purse decides what can be bought. The likeness stops there. Congress does not spend the money itself. The President and the offices that carry out the laws do that, once Congress has voted it.' },

  { id: 'again-purse', kind: 'again', outcome: 'purse',
    link: 'The flood-barrier case gave you what to point to: {needs:purse}. Here is a second case, in which the money is voted and not left out.',
    first: 'p-barrier', second: 'p-schools', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a flood barrier, school roofs) and ignore which way the decision went. Look at one thing only: what Congress decides about money.',
    prompt: { kind: 'phrase', answer: 'the House voted $200 million for repairs to old school buildings, and on Thursday the Senate voted for the same amount' },
    shared: [
      'In the first case Congress left the money out, and the work could not start. In the second Congress voted the money, and the work can start. Those are opposite results of one decision: whether the government may spend money on something. Neither case bans or orders anything. Each one only gives the money or withholds it.',
      'So this is not about barriers or about schools, and it does not matter whether the answer was yes or no. It holds wherever Congress decides whether the government may spend money on something. That is what {o:purse} names.'
    ] },

  { id: 'portrait-purse', kind: 'portrait', outcome: 'purse',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:purse}.',
    typical: [
      'There is a decision about money, and it is Congress’s. The talk is about funding and budgets: whether a programme is funded, what the year’s budget holds, what was cut.',
      'Congress can say yes, no or less. It can vote the money, cut an amount it voted before, or leave the money out of the bill.',
      'The offices that carry out the laws wait for the money. An {t:agency} spends it once Congress has voted it, but does not decide how much there is.',
      'Nothing has to be banned. A programme can be stopped by not paying for it, which is why budget fights matter so much: whether something is funded is Congress’s decision.',
      'The sum can be small or huge, and the programme can be one the President wants or one nobody wants.'
    ],
    not: 'Raising money is not this name. Congress raises money by passing a law on a matter on the Constitution’s list, a tax for example, and that is {o:enumerated}. This name is for the other side, deciding whether the government may spend the money.',
    wild: ['“The budget passed.”', '“Congress cut the funding.”', '“The spending bill has no money for it.”', '“Congress voted the money for it.”', '“A shutdown…”'],
    self: 'In your own life you meet this when a programme you rely on is funded or cut, when a park or a service closes in a budget fight, and in the stories about a shutdown, which is what happens when the money has not been voted.',
    ask: '“Who decides whether the money is there, and did they vote it, cut it or leave it out?” If the case turns on Congress deciding whether the government may spend money on something, the answer is {a:C1.money}.' },

  { id: 'check-purse', kind: 'check', after: 'purse',
    case: 'k-rangers',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-enumerated-purse', kind: 'lookalike', ledger: 'enumerated~purse',
    h: 'One clinic scheme: raising the money, and deciding to spend it',
    link: 'You have met both names on their own. They are easy to mix up, because both are about money, and both can be a bill that passes the House and the Senate. This card puts them side by side, with two bills about the same clinics.',
    cases: ['l-clinic-tax', 'l-clinic-money'],
    instruction: 'Both cases are about the same rural clinics. Compare one thing: in one the law raises money, and in the other Congress decides whether the government may spend it.',
    prompt: { kind: 'which', option: 'C1.money', answer: 'l-clinic-money' },
    difference: [
      'In Case A the bill is a tax on bottled water. A tax is a law on a matter on the list, and it takes no right away. It says where money comes from. It does not say what the government may spend it on. The answer is {a:C1.listed}, and the case is {o:enumerated}.',
      'In Case B the bill gives $90 million for grants. That is Congress deciding that the government may spend money on something: it is voting the money. The answer is {a:C1.money}, and the case is {o:purse}.',
      'The two come as a pair in real life. A tax raises money, and a decision to spend lets some of it out again. Which one a story is about depends on its words. “A tax on…” is the first. “Gives”, “funds”, “cuts” and “leaves out” the money are the second.'
    ] },

  /* ---------- The exception: both answers are in the case ---------- */
  { id: 'exc-spendbill', kind: 'exception', looksLike: 'enumerated', is: 'purse', ledger: 'enumerated~purse',
    h: 'A spending bill that is also a law on a listed matter',
    link: 'The last card separated the pair with two tidy bills. Real bills are not always so tidy. A bill that spends money is itself a law, and the money can be for something on the Constitution’s list. This card shows one.',
    case: 'x-mailfunds',
    setup: 'This bill is a law, and it is about the post office, and the mail is one of the matters on the Constitution’s list. A law on a listed matter is what you point to for {o:enumerated}. Yet the answer for this case is {a:C1.money}.',
    prompt: { kind: 'phrase', answer: '$400 million to buy new mail trucks' },
    because: [
      'Read what the bill does. It gives the postal service $400 million to buy trucks. Whether the government may spend $400 million is a decision only Congress can make, and the answer about money is for exactly that decision.',
      'The mail explains why the bill is Congress’s business: the Constitution lists the matter. The money explains what Congress is deciding. A bill that spends is a law, so it can always be read both ways. If the bill had only set the price of a stamp, with no money to spend, nothing would be left but the first reading, and the answer would be {a:C1.listed}.'
    ],
    take: 'When a case shows both, the answer is the money, and this is on purpose. In real life people say it both ways: it is a law about the mail, and it is a vote of money. Each case gets one name, so that two people using the questions reach the same one and can each say why. It picks the money because the money is the one thing only Congress can give: without the vote, the trucks are not bought, whoever else is willing.' }
]);
