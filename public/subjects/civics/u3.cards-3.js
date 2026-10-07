// Civics, Unit Three, part one (close): money, and its look-alike pair with the first name.
// "the spending bill" and "appropriations" are the other words real life uses for the third name. The app says them once,
// on its meet card, and this file types them only inside quotation marks in a field that quotes what people say.
// A meet card: the story first, then the idea (explain), then how to spot it (spot), then the name (lesson standard section 20).

FC.cards('civics', 'u3', [

  /* ---------- The power of the purse ---------- */
  { id: 'meet-purse', kind: 'meet', outcome: 'purse',
    link: 'So far Congress has passed laws. The third thing it does is not about what people may do. It is about what the government may spend.',
    case: 'p-barrier', mark: 'C1',
    explain: [
      'Everyone in this story wants the barrier built, and nobody can build it. The bill that sets this year’s spending has no money for it, and the government can spend only what Congress has voted.',
      'So Congress never had to pass a law against the barrier. Leaving the money out was enough. Voting money, cutting an amount and leaving it out are all the same power: deciding what the government may spend.'
    ],
    spot: [
      { do: 'Find the plan that needs money: the flood barrier the President announced.', why: 'An announcement pays for nothing.' },
      { do: 'Find this year’s budget bill, passed by the House and the Senate.', why: 'It is where Congress decides what the government may spend.' },
      { do: 'Check what the bill does about the plan: it leaves the money out.', why: 'Voting money, cutting it or leaving it out all settle the question.' }
    ],
    feature: { step: 'C1', option: 'money' },
    name: 'This is {o:purse}. A purse is where a person keeps their money, and whoever holds it decides what can be bought.' },

  { id: 'check-purse', kind: 'check', after: 'purse',
    case: 'k-rangers',
    ask: { type: 'option', step: 'C1', among: ['listed', 'barred', 'money'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-enumerated-purse', kind: 'lookalike', ledger: 'enumerated~purse',
    h: 'One clinic scheme: raising the money, and deciding to spend it',
    link: 'These are easy to mix up, because both are about money, and both can be a bill that passes the House and the Senate. Here are two bills about the same clinics.',
    cases: ['l-clinic-tax', 'l-clinic-money'],
    instruction: 'Both stories are about the same rural clinics. Compare one thing: does the bill raise money, or decide what the government may spend?',
    prompt: { kind: 'which', option: 'C1.money', answer: 'l-clinic-money' },
    difference: [
      'In Story A the bill is a tax on bottled water. A tax is a law on a listed subject, and it only says where money comes from. So it is {o:enumerated}.',
      'In Story B the bill gives $90 million for grants. That is Congress deciding what the government may spend, so it is {o:purse}.',
      '“A tax on…” is the first. “Gives”, “funds”, “cuts” and “leaves out” are the second.'
    ] }
]);
