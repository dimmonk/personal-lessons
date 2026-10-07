// Political Ideologies, Unit Five, part two: the second name (rights protected, and a fair start for everyone), and the first look-alike pair.

FC.cards('ideology', 'u5', [

  /* ---------- Modern liberalism ---------- */
  { id: 'meet-modlib', kind: 'meet', outcome: 'modlib',
    link: 'The first answer asks the government to protect rights and then step back. This one asks it to do more.',
    case: 'i5-modlib-meet', mark: 'R1',
    explain: [
      'The leaflet starts where the street musicians did: each person has rights, and the government should protect them. Then it goes further. A child with no school nearby and no doctor to call cannot really use those rights, since a child who cannot read cannot use the right to speak.',
      'So the leaflet asks the government to pay for a school, health care and help for people who lose work, and everyone pays in through taxes.'
    ],
    spot: [
      { do: 'Find the rights it wants protected: to speak, to believe and to keep what you earn.', why: 'This part matches the first answer.' },
      { do: 'Find what it wants the government to give: a school in every district, health care, help when out of work.', why: 'Here something is given, not only protected.' },
      { do: 'Find who pays: everyone, through taxes.', why: 'The cost is shared by all.' },
      { do: 'Check that no rule is blamed for holding a group back.', why: 'The leaflet sets no one against anyone, and a text that blames a rule is the next answer.' }
    ],
    feature: { step: 'R1', option: 'start' },
    name: 'This is {o:modlib}. "Liberal" still means each person’s freedom comes first, and "modern" means the newer form of that view, which also asks for a fair start. The everyday word "liberal" means different things in different places, so go by what the text asks for.' },

  { id: 'check-modlib', kind: 'check', after: 'modlib',
    case: 'i5-modlib-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start'] } },

  { id: 'look-clib-modlib', kind: 'lookalike', ledger: 'clib~modlib',
    link: 'Both start from each person’s rights. Here are two speakers at the same meeting.',
    cases: ['i5-lk-cm-clib', 'i5-lk-cm-modlib'],
    instruction: 'Both speakers are talking about the same new clinic in Marrow, and both say each person is free to choose their own doctor. Compare one thing: what the speaker wants the government to do about the clinic.',
    prompt: { kind: 'which', option: 'R1.start', answer: 'i5-lk-cm-modlib' },
    difference: [
      'In Story A the speaker wants the government to keep the courts open and leave the clinic to those who run it. That is {a:R1.leave}, so it is {o:clib}.',
      'In Story B the speaker wants the government to pay for a clinic in every district, with everyone paying through taxes. A clinic is given. That is {a:R1.start}, so it is {o:modlib}.',
      'The freedom to choose a doctor is the same in both. What differs is what is asked of the government after that: nothing more, or something given.'
    ] }
]);
