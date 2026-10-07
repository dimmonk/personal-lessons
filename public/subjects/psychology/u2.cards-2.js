// Psychology, Unit Two, part one (second half): the second name, and the first look-alike pair.

FC.cards('psychology', 'u2', [

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'meet-sunkcost', kind: 'meet', outcome: 'sunkcost',
    link: '{o:dissonance} looks back at something already done. The second of the five looks back at something already spent, and uses it as the reason for what to do next.',
    case: 'renovation', mark: 'R1',
    explain: [
      'Dan and Aisha cannot get the $40,000 and the two years back, whatever they choose now. Stopping does not lose them a second time, and going on does not bring them back.',
      'So the only thing left to decide is whether another $30,000 is worth what it buys: about $10,000 more on the house. Dan never looks at that. His only reason points backward, at what is already spent.'
    ],
    spot: [
      { do: 'Find what is already spent: two years and $40,000.', why: 'It is gone whichever way they choose.' },
      { do: 'Find the next step still to decide: stop, or spend another $30,000.', why: 'A good reason has to be about this step.' },
      { do: 'Find the reason given for taking it: "We’ve put in two years and forty thousand dollars."', why: 'When the reason is what is already spent, it says nothing about the step itself.' },
      { do: 'Ask what the next step would cost and bring: $30,000 for about $10,000 more.', why: 'That is the question the reason skipped.' }
    ],
    feature: { step: 'R1', option: 'backward' },
    name: 'This is {o:sunkcost}. A "sunk cost" is what you have already spent and cannot get back, and the mistake is letting it decide what you do next. It feels sound because nobody likes waste.' },

  { id: 'check-sunkcost', kind: 'check', after: 'sunkcost',
    case: 'classes',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-dissonance-sunkcost', kind: 'lookalike', ledger: 'dissonance~sunkcost',
    link: 'Both look back at something the person already did or spent, so they are easy to mix up. Here they are side by side.',
    cases: ['ticket-fever', 'ticket-tout'],
    instruction: 'Both stories are about Rosa and a concert ticket. Compare one thing: the reason she gives. Does it say something she did is fine, or does it use money already spent to decide her next step?',
    prompt: { kind: 'which', option: 'R1.backward', answer: 'ticket-fever' },
    difference: [
      'In Story A the $80 is spent, and Rosa still has to decide whether to go out with a fever. Her reason for going is the $80. That is {o:sunkcost}.',
      'In Story B Rosa did something she said she would never do: she paid a reseller. "It’s a once-in-a-lifetime show" does not decide any next step. It only says the purchase is fine. That is {o:dissonance}.'
    ] }
]);
