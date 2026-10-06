// Political Ideologies, Unit Five, part four: the look-alike pair that involves the third name, and this branch's own tie-break
// between a fair start and rules said to hold a group back.

FC.cards('ideology', 'u5', [

  { id: 'look-modlib-idegal', kind: 'lookalike', ledger: 'modlib~idegal',
    link: 'These two both want fairness for people who are being left behind. They differ in the cause they name.',
    cases: ['i5-lk-mi-modlib', 'i5-lk-mi-idegal'],
    instruction: 'Both cases are about the same housing waitlist in Calderwick, and both speakers want people to be housed fairly. Compare one thing: whether the speaker names a rule that treats everyone alike as the cause of someone being left behind.',
    prompt: { kind: 'which', option: 'R1.rules', answer: 'i5-lk-mi-idegal' },
    difference: [
      'In Case A the council member wants the government to build more homes and to pay for help for anyone between jobs, with everyone paying together. No rule is named as the cause of anyone being left behind: the need is for homes and help. The answer is {a:R1.start}, and the case is {o:modlib}.',
      'In Case B the speaker names a rule: the waitlist asks every applicant for the same three years of paperwork from one address. It treats everyone alike, and it leaves people who arrived this year at the back. The speaker asks for what the list asks for to be changed, until they are housed as often as everyone else. The answer is {a:R1.rules}, and the case is {o:idegal}.',
      'Both speakers want the list to be fair. One wants more given. The other wants a rule changed.'
    ] },

  /* ---------- Exception: a fair start for everyone, and a rule that leaves a group behind ---------- */
  { id: 'exc-startrules', kind: 'exception', ledger: 'modlib~idegal', looksLike: 'modlib', is: 'idegal',
    h: 'A fair start for everyone, and a rule that leaves women behind',
    link: 'A real text can show both of those answers. Here is one that asks for a fair start for everyone, and also says that a rule leaves a group behind.',
    case: 'i5-x-startrules',
    setup: 'The statement begins by asking for a fair start for every woman, all paid for together. That is what you point to for {a:R1.start}. Yet the answer for this case is {a:R1.rules}.',
    prompt: { kind: 'phrase', answer: 'Rules that treat every patient alike are not enough' },
    because: [
      'If the statement stopped at the fair start, it would be {o:modlib}. But it goes on to say that every clinic keeps the same hours for every patient, that those hours leave behind women who work nights or care for others by day, and that "rules that treat every patient alike are not enough". That is a rule that treats everyone alike, said to leave a group behind, and a request for it to change.',
      'When a text shows both answers, the answer is {a:R1.rules}.'
    ] }
]);
