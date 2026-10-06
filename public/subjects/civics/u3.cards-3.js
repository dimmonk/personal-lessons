// Civics, Unit Three, part one (close): money, and its look-alike pair with the first name.
// "the spending bill" and "appropriations" are the other words real life uses for the third name. The app says them once,
// on its meet card, and this file types them only inside quotation marks in a field that quotes what people say.

FC.cards('civics', 'u3', [

  /* ---------- The power of the purse ---------- */
  { id: 'meet-purse', kind: 'meet', outcome: 'purse',
    link: 'So far Congress has passed laws. The third thing it does is not about what people may do. It is about what the government may spend.',
    case: 'p-barrier', mark: 'C1',
    strip: [
      'There is a program on paper: the President announced a flood barrier, and the engineers have their plans.',
      'There is a decision in Congress about whether the government may spend money on it: the bill that settles this year’s spending.',
      'The bill leaves the money out.',
      'Nobody has forbidden the barrier. There is simply no money to build it.'
    ],
    explain: [
      'Everyone in this case wants the barrier built, and nobody can build it. What stops it is the bill that decides what the government may spend this year: it has no money for the barrier. The government can spend only what Congress has voted, so Congress did not need to pass a law against the barrier. Leaving the money out was enough.',
      'Voting the money, cutting an amount voted before and leaving it out are three ways of deciding the same thing. This is the answer when {when:C1.money}.'
    ],
    feature: { step: 'C1', option: 'money' },
    name: 'The name for this is {o:purse}. A purse is where a person keeps their money, and the name says that Congress holds the government’s: whoever holds the purse decides what can be bought.' },

  { id: 'check-purse', kind: 'check', after: 'purse',
    case: 'k-rangers',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-enumerated-purse', kind: 'lookalike', ledger: 'enumerated~purse',
    h: 'One clinic scheme: raising the money, and deciding to spend it',
    link: 'They are easy to mix up, because both are about money, and both can be a bill that passes both chambers. Here are two bills about the same clinics.',
    cases: ['l-clinic-tax', 'l-clinic-money'],
    instruction: 'Both cases are about the same rural clinics. Compare one thing: in one the law raises money, and in the other Congress decides whether the government may spend it.',
    prompt: { kind: 'which', option: 'C1.money', answer: 'l-clinic-money' },
    difference: [
      'In Case A the bill is a tax on bottled water. A tax is a law on a listed matter, and it takes no right away. It says where money comes from, not what the government may spend it on. The answer is {a:C1.listed}, and the case is {o:enumerated}.',
      'In Case B the bill gives $90 million for grants. That is Congress deciding that the government may spend money on something. The answer is {a:C1.money}, and the case is {o:purse}.',
      '“A tax on…” is the first. “Gives”, “funds”, “cuts” and “leaves out” the money are the second.'
    ] }
]);
