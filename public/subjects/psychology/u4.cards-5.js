// Psychology, Unit Four, part two (second half): the fifth name (breaking rules and using people), the tie-break the key makes
// between the first name and this one, and the last look-alike pair.

FC.cards('psychology', 'u4', [

  /* ---------- Antisocial personality ---------- */
  { id: 'meet-antisocial', kind: 'meet', outcome: 'antisocial',
    link: 'The last one is the label people reach for fastest, as “psychopath”. It needs more than the everyday word does.',
    case: 'pa-callum', mark: 'P1',
    explain: [
      'The earlier names were about what a person needs from other people. Callum just wants something for himself, and he gets it by lying, using people and breaking whatever rule is in the way.',
      'Look at what is missing: regret. A customer is cheated, a friend loses his savings, and Callum shrugs: “He should have read the paperwork.” And it has to repeat. One lie that someone felt terrible about is not this.'
    ],
    spot: [
      { do: 'Check the years and places: school, two garages and a family.', why: 'One lie, once, is not enough.' },
      { do: 'Find the lies and broken rules: a rolled-back odometer, a forged signature, a loan never repaid.', why: 'He gets what he wants by using people.' },
      { do: 'Listen for regret, and find none: “He should have read the paperwork.”', why: 'No regret for the harm is what separates this from an ordinary rule-bender.' },
      { do: 'Look for who got hurt: customers, a friend’s savings, a brother-in-law who no longer speaks to him.', why: 'Someone always pays for it.' }
    ],
    feature: { step: 'P1', option: 'uses' },
    name: 'This is {o:antisocial}. Here “antisocial” does not mean shy: it means against other people and the rules they live by together.' },

  { id: 'check-antisocial', kind: 'check', after: 'antisocial',
    case: 'pa-sven',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'center', 'uses'] } },

  { id: 'exc-both', kind: 'exception', looksLike: 'narcgrand', is: 'antisocial', ledger: 'narcgrand~antisocial',
    h: 'When a story shows both',
    link: 'Both can be charming, sure of themselves and scornful, and both leave people hurt. One story can show both signs at once. Here is one.',
    case: 'pa-victor',
    setup: 'Victor’s story starts with acting above others, and anger when he is questioned: the signs of {o:narcgrand}. Yet his story is {o:antisocial}.',
    prompt: { kind: 'phrase', answer: "Over fifteen years, in four towns, he has taken deposits for roofs he never started and left a former partner with his debts. When one customer came to his yard in tears with her unpaid deposit, Victor said, 'They should have read the contract. Not my problem.'" },
    because: [
      'These are the words that decide it. For fifteen years, in four towns, Victor has taken deposits for roofs he never started, and when a customer came to him in tears he said it was not his problem.',
      'That is lying, using people and no regret, and it wins over the scorn. A man who treats customers as nobodies and takes their money is doing one thing, and the scorn is part of it.'
    ] },

  { id: 'look-antisocial-ordpersonality', kind: 'lookalike', ledger: 'antisocial~ordpersonality',
    link: 'Plenty of ordinary people bend a rule now and then, and that does not earn this name. Here are two people who have each bent rules for years.',
    cases: ['pa-joss', 'pa-lena'],
    instruction: 'Both have bent rules for years, in three cities. Compare one thing: what happens when someone is hurt or upset by it.',
    prompt: { kind: 'which', option: 'P1.uses', answer: 'pa-joss' },
    difference: [
      'In Story A, Joss talked three friends into lending him money for a business that does not exist. When one asked for her money back he said she was lucky to have been asked, and blocked her. That is {o:antisocial}.',
      'In Story B, Lena parks in loading bays and argues for discounts. When a friend lends her money she pays it back the next week, and when a neighbor is upset she apologizes and stops. That is {o:ordpersonality}.',
      'Both bend rules, and both have for years. What differs is whether anyone is badly hurt, and what the person does about it: Lena puts it right, and Joss blames the person he hurt.'
    ] }
]);
