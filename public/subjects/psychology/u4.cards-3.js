// Psychology, Unit Four, part one (close): the quiet person set beside the second narcissism, and the third name (clinging to people).

FC.cards('psychology', 'u4', [

  { id: 'look-narcvuln-ordpersonality', kind: 'lookalike', ledger: 'narcvuln~ordpersonality',
    link: 'Most quiet people are just quiet. Here are two colleagues who both keep to themselves.',
    cases: ['pa-hugh', 'pa-amara'],
    instruction: 'Both keep to themselves at work, in four offices. Compare two things: what each does when a colleague is thanked, and what it has cost.',
    prompt: { kind: 'which', option: 'P1.overlooked', answer: 'pa-hugh' },
    difference: [
      'In Story A, Hugh says others get the good projects because they are noticed and he is not. When a colleague is thanked he stops speaking to her for a month, and he has done it with six colleagues. That is {o:narcvuln}.',
      'In Story B, Amara is just as quiet. When a colleague is thanked she sends a note saying well done, and her friends from each office are still her friends. That is {o:ordpersonality}.',
      'The quietness is the same. What differs is the count of what others owe, the cold silence when someone else is thanked, and the cost.'
    ] },

  /* ---------- Borderline personality ---------- */
  { id: 'meet-borderline', kind: 'meet', outcome: 'borderline',
    link: 'The first two were about needing to be treated as special. This one is about not being able to bear being left.',
    case: 'pa-nadia', mark: 'P1',
    explain: [
      'Nadia looks like two different people. One adores a friend and cannot do without her. The other attacks her. What switches her from one to the other is a friend who seems about to leave: a reply a day late, or a month abroad.',
      'She holds on hard, with messages, gifts and begging. When that does not seem to work, she attacks the one who is going, and then holds on again. It is not an act: people like this are often as frightened by the swings as everyone around them.'
    ],
    spot: [
      { do: 'Check the years and the people: from fifteen to thirty-one, with friends, partners and an employer.', why: 'It has to repeat with every close person, not just one.' },
      { do: 'Find what sets it off: a friend who seems about to pull away.', why: 'It is not criticism, and it is not someone else being praised.' },
      { do: 'Watch the swing: forty messages in two days, then “You are a fake and I never want to see you again”, then twelve apologies.', why: 'Clinging, attacking and clinging again is the whole sign.' },
      { do: 'Look for the cost: three friends, a job and all four partners.', why: 'The swings keep costing her the people she is trying to keep.' }
    ],
    feature: { step: 'P1', option: 'clings' },
    name: 'This is {o:borderline}. The word “borderline” is old and tells you nothing, so go by what the story shows.' },

  { id: 'check-borderline', kind: 'check', after: 'borderline',
    case: 'pa-pru',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings'] } }
]);
