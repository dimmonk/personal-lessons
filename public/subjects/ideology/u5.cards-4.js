// Political Ideologies, Unit Five, part four: the look-alike pair that involves the third name, and this branch's own tie-break
// between a fair start and rules said to hold a group back.

FC.cards('ideology', 'u5', [

  { id: 'look-modlib-idegal', kind: 'lookalike', ledger: 'modlib~idegal',
    link: 'Both want fairness for people who are being left behind. They differ in what they blame.',
    cases: ['i5-lk-mi-modlib', 'i5-lk-mi-idegal'],
    instruction: 'Both speakers are talking about the same housing waitlist in Calderwick, and both want people housed fairly. Compare one thing: does the speaker blame a rule that treats everyone alike for leaving someone behind?',
    prompt: { kind: 'which', option: 'R1.rules', answer: 'i5-lk-mi-idegal' },
    difference: [
      'In Story A the council member wants the government to build homes and pay for help for anyone between jobs, with everyone paying together. No rule is blamed: the need is for homes and help. That is {a:R1.start}, so it is {o:modlib}.',
      'In Story B the speaker blames a rule: the waitlist asks every applicant for the same three years of paperwork from one address, and that puts people who arrived this year at the back. The speaker asks for the list to change. That is {a:R1.rules}, so it is {o:idegal}.',
      'Both want the list to be fair. One wants more given. The other wants a rule changed.'
    ] },

  /* ---------- Exception: a fair start for everyone, and a rule that leaves a group behind ---------- */
  { id: 'exc-startrules', kind: 'exception', ledger: 'modlib~idegal', looksLike: 'modlib', is: 'idegal',
    h: 'A fair start for everyone, and a rule that leaves women behind',
    link: 'A real text can mix two answers. This one asks for a fair start for everyone, and also says a rule leaves a group behind.',
    case: 'i5-x-startrules',
    setup: 'The statement opens by asking for a fair start for every woman, all paid for together. On its own, that is {a:R1.start}. But the answer for this story is {a:R1.rules}.',
    prompt: { kind: 'phrase', answer: 'Rules that treat every patient alike are not enough' },
    because: [
      'If the statement stopped at the fair start, it would be {o:modlib}. But it goes on: every clinic keeps the same hours for every patient, those hours leave behind women who work nights or care for others by day, and "rules that treat every patient alike are not enough". That is a rule that treats everyone alike, said to leave a group behind, with a request to change it.',
      'When a text shows both, the answer is {a:R1.rules}.'
    ] }
]);
