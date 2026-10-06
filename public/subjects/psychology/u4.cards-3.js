// Psychology, Unit Four, part one (close): the quiet person set beside the second narcissism, and the third name (clinging to people).

FC.cards('psychology', 'u4', [

  { id: 'look-narcvuln-ordpersonality', kind: 'lookalike', ledger: 'narcvuln~ordpersonality',
    link: 'A quiet person is far more likely to be an ordinary shy person than to show {o:narcvuln}. Here are two quiet colleagues.',
    cases: ['pa-hugh', 'pa-amara'],
    instruction: 'Both keep to themselves at work, in four offices. Compare two things: what each does when a colleague is thanked, and what it has cost.',
    prompt: { kind: 'which', option: 'P1.overlooked', answer: 'pa-hugh' },
    difference: [
      'In Case A Hugh says that others get the good projects because they are noticed and he is not, and that he is owed more. When a colleague is thanked he stops speaking to her for a month, and he has done it with six colleagues. His managers say his silences make it impossible to plan around him. The answer is {a:P1.overlooked}, and the case is {o:narcvuln}.',
      'In Case B Amara is just as quiet. When a colleague is thanked she sends a note saying well done. Her managers say she can be relied on, and her friends from each office are still her friends. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'The quietness is the same in both. What differs is the count of what others owe, the cold withdrawal when someone else is thanked, and the cost.'
    ] },

  /* ---------- Borderline personality ---------- */
  { id: 'meet-borderline', kind: 'meet', outcome: 'borderline',
    link: 'The first two names were about a sense of worth that depends on being treated as special. This one is about something else: a person who cannot bear to be left.',
    case: 'pa-nadia', mark: 'P1',
    strip: [
      'There are years and more than one place: from fifteen to thirty-one, with friends, partners and an employer.',
      'The person makes desperate efforts to keep people close: forty messages in two days, an offer to pay for flights, begging.',
      'When a friend seems about to pull away, Nadia swings. A reply a day late is enough for "You are a fake and I never want to see you again", and the next morning she sends twelve apologies.',
      'The swing goes from adoring to attacking: one partner was "the love of my life" in March and "a monster" in April.',
      'It keeps costing: three friends, a job, and the end of every one of four relationships.'
    ],
    explain: [
      'From outside, Nadia looks like two different people. In one, she adores someone and cannot do without them. In the other, she attacks them. What joins the two is what sets off the change: a person she is close to who seems about to leave.',
      'It is not when Nadia is criticized, and it is not when someone else is praised. It is when a reply comes a day late, or a friend says she will be abroad, because for Nadia that feels like being left. She holds on hard: messages, gifts, begging. And when holding on does not seem to work, she attacks the person who is going, and then holds on again.',
      'A friend who says "please don’t go" once is not this. What is here is that it happens with every close friend and partner since school, and keeps costing: friends gone, a job lost. It is also not an act. People with this way of being are very often in real distress, and as frightened by the swings as the people around them.'
    ],
    feature: { step: 'P1', option: 'clings' },
    name: 'The name for this is {o:borderline}. The word "borderline" is old: doctors once thought the condition sat on the border between two kinds of illness. That idea has been dropped, but the word stayed, so it tells you nothing about what the case shows. Go by the case.' },

  { id: 'check-borderline', kind: 'check', after: 'borderline',
    case: 'pa-pru',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings'] } }
]);
