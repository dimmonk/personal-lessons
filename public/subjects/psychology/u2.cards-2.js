// Psychology, Unit Two, part one (second half): the second name, and the first look-alike pair.

FC.cards('psychology', 'u2', [

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'meet-sunkcost', kind: 'meet', outcome: 'sunkcost',
    link: '{o:dissonance} looks back at something done and gives a reason why it is fine. The second of the five also looks back, at something already spent, and uses it differently: as the reason for what to do next.',
    case: 'renovation', mark: 'R1',
    strip: [
      'Something has been spent that cannot be gotten back: two years and $40,000.',
      'There is a next step to decide: stop, or spend another $30,000.',
      'The next $30,000 would add only about $10,000 to what the house is worth.',
      'The reason Dan gives for going on says nothing about the next $30,000. It is the two years and the $40,000.'
    ],
    explain: [
      'The $40,000 and the two years are gone whichever choice Dan and Aisha make now. Stopping does not lose them a second time, and going on does not bring them back.',
      'So the only thing their choice can change is what happens next: whether another $30,000 is worth what it buys. Dan’s reasoning never looks at that. It points backward, at what is already spent, and gives that as the reason to spend more.'
    ],
    feature: { step: 'R1', option: 'backward' },
    name: 'The name for this is {o:sunkcost}. A "sunk cost" is money, time or effort that is already spent and cannot be gotten back. A "fallacy" is a mistake in reasoning that feels like a sound argument. This one feels very sound, because nobody likes waste.' },

  { id: 'check-sunkcost', kind: 'check', after: 'sunkcost',
    case: 'classes',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-dissonance-sunkcost', kind: 'lookalike', ledger: 'dissonance~sunkcost',
    link: 'Both names look back at something the person has already done or spent, so they are easy to mix up. Here they are side by side.',
    cases: ['ticket-fever', 'ticket-tout'],
    instruction: 'Both cases are about Rosa and the price of a concert ticket. Compare one thing: the reason she gives. In one case it says that something she did is fine. In the other it gives money already spent as the reason for her next step.',
    prompt: { kind: 'which', option: 'R1.backward', answer: 'ticket-fever' },
    difference: [
      'In Case A the $80 is spent, and there is a next step to decide: go out with a fever, or stay in. The reason Rosa gives for going is the $80. The answer is {a:R1.backward}, and the case is {o:sunkcost}.',
      'In Case B Rosa has done something she said she would never do: she paid a reseller. The reason she gives ("a once-in-a-lifetime show") is not a reason for any next step. It says the purchase is fine. The answer is {a:R1.addstory}, and the case is {o:dissonance}.'
    ] }
]);
