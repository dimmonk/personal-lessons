// Psychology, Unit Four, part two (second half): the fifth name (breaking rules and using people), the tie-break the key makes
// between the first name and this one, and the last look-alike pair.

FC.cards('psychology', 'u4', [

  /* ---------- Antisocial personality ---------- */
  { id: 'meet-antisocial', kind: 'meet', outcome: 'antisocial',
    link: 'The last name is the one people reach for fastest in everyday talk, and this name needs more of it than the everyday word does.',
    case: 'pa-callum', mark: 'P1',
    strip: [
      'There are years and more than one place: school, two garages, a family.',
      'Rules are broken and people are lied to or used: odometer rolled back, a forged signature, a loan never repaid.',
      'Callum shows no regret for the harm: "He should have read the paperwork."',
      'People are hurt by it: customers, a friend’s savings, a brother-in-law who no longer speaks to him.'
    ],
    explain: [
      'The earlier names were about what a person needs from other people: to be treated as special, to be kept close, to be looked at. Callum wants something for himself, and he gets it by lying to people, using them, and breaking whatever rule is in the way.',
      'Look at what is missing on his side: regret. A customer is cheated, a friend loses his savings, and Callum shrugs: "He should have read the paperwork." That is what "no regret for the harm" means. And it has to be a pattern. A person who once lied to a friend, and felt terrible, has done something wrong without showing this. Here it is years, several places and several people, and each time someone is hurt.'
    ],
    feature: { step: 'P1', option: 'uses' },
    name: 'The name for this is {o:antisocial}. "Antisocial" here does not mean shy or unsociable, which is how the word is used in everyday talk. It means against other people: against the rules that people live by together, and against their rights.' },

  { id: 'check-antisocial', kind: 'check', after: 'antisocial',
    case: 'pa-sven',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'center', 'uses'] } },

  { id: 'exc-both', kind: 'exception', looksLike: 'narcgrand', is: 'antisocial', ledger: 'narcgrand~antisocial',
    h: 'When a case shows both',
    link: 'Both of these can be charming, sure of themselves and scornful, and both leave people hurt. In {o:narcgrand} what drives it is being treated as special. In {o:antisocial} it is gain, got by lying and using people, with no regret. A case can show both. Here is one.',
    case: 'pa-victor',
    setup: 'Victor tells everyone that nobody roofs like him, calls rival firms "amateurs" and screams at customers who question a bill. That is acting as if he is better than others, with anger when he is not treated as special, and it is what you point to for {o:narcgrand}. Yet this case is {o:antisocial}.',
    prompt: { kind: 'phrase', answer: "Over fifteen years, in four towns, he has taken deposits for roofs he never started and left a former partner with his debts. When one customer came to his yard in tears with her unpaid deposit, Victor said, 'They should have read the contract. Not my problem.'" },
    because: [
      'The case shows something beyond the scorn. For fifteen years, in four towns, Victor has taken deposits for roofs he never started and left a partner with his debts, and when a customer came to him in tears he said that it was not his problem. That is rules broken, people used, no regret, and people hurt.',
      'Once that is in the case, the scorn is not a second thing. A man who treats customers as nobodies and takes their money is doing one thing, and the scorn is part of how he treats them.'
    ] },

  { id: 'look-antisocial-ordpersonality', kind: 'lookalike', ledger: 'antisocial~ordpersonality',
    link: 'Plenty of ordinary people bend a rule now and then, and that does not earn this name. Here are two people who have each been bending rules for years.',
    cases: ['pa-joss', 'pa-lena'],
    instruction: 'Both have bent rules for years, in three cities. Compare one thing: what happens when someone is hurt or upset by it.',
    prompt: { kind: 'which', option: 'P1.uses', answer: 'pa-joss' },
    difference: [
      'In Case A Joss has talked three friends into lending him money for a business that does not exist, and when one asks for her money back he says she was lucky to have been asked and blocks her. He has never repaid anyone. The answer is {a:P1.uses}, and the case is {o:antisocial}.',
      'In Case B Lena parks in loading bays and argues for discounts, and when a friend lends her money she pays it back the next week, and when a neighbor is upset she apologizes and stops. Her friends still lend her things and she lends them back. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'Both bend rules, and both have done so for years. What differs is whether anyone is badly hurt, and what the person does when someone is: Lena puts it right, and Joss blames them.'
    ] }
]);
