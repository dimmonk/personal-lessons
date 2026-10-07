// Psychology, Unit Two, part two (first half): evidence. The next two names and the hardest look-alike pair.

FC.cards('psychology', 'u2', [

  /* ---------- Confirmation bias ---------- */
  { id: 'meet-confbias', kind: 'meet', outcome: 'confbias',
    link: 'The first two were about a person explaining something already done or spent. The next two are about evidence: what is true, or what to choose.',
    case: 'oneway', mark: 'R1',
    explain: [
      'Greg’s questions are not bad ones: a count can be done badly. But one neighbor’s longer drive is much weaker evidence than a count of many trips, and nobody asked her anything.',
      'That is all it is: a harder test for one side. Evidence for the view walks straight in, and evidence against it has to answer questions first. Someone who keeps doing this can only get more sure, whatever is true.',
      'Notice what Greg is not doing: he is not looking for anything. The neighbor’s remark and the council’s count came to him, and he judged each as it arrived.'
    ],
    spot: [
      { do: 'Find the view they already hold: the one-way plan made traffic worse.', why: 'Without a view there is nothing to protect.' },
      { do: 'Find the evidence for it and the evidence against it: the neighbor’s longer drive, and the council’s count.', why: 'Both sides have to be in the story.' },
      { do: 'Compare the questions each side gets: the neighbor gets none, the count gets "Who did the counting? When? How?"', why: 'The giveaway is one side questioned harder than the other.' },
      { do: 'Check that Greg is not running a search: the evidence came to him.', why: 'A search with the answer already chosen is a different thing, and it is next.' }
    ],
    feature: { step: 'R1', option: 'scrutiny' },
    name: 'This is {o:confbias}: leaning toward whatever backs up what you already think.' },

  { id: 'check-confbias', kind: 'check', after: 'confbias',
    case: 'homeworkers',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny'] } },

  /* ---------- Motivated reasoning ---------- */
  { id: 'meet-motivated', kind: 'meet', outcome: 'motivated',
    link: 'In {o:confbias} nobody sets out to find anything. In the next one the person does: they run a search to settle a choice, and the choice is already made.',
    case: 'interviews', mark: 'R1',
    explain: [
      'Interviews are meant to work one way: you look first, and the answer comes at the end. Carol ran hers backwards. She had the answer first, so all the interviews could do was collect support for it.',
      'Greg also held his view before the evidence came, so having a view first is not the difference. Greg was not looking for anything. Carol set out to look, with the answer already chosen.',
      'A search that cannot change the answer only collects support.'
    ],
    spot: [
      { do: 'Find the search: Carol interviews four candidates.', why: 'Something is meant to settle a choice or a question.' },
      { do: 'Find when the answer was picked: before the interviews, she had already decided on Jas.', why: 'If the answer comes first, the search cannot change it.' },
      { do: 'Check what the search collected: the good points of Jas and the weak points of everyone else.', why: 'It was never going to turn up anything against the answer.' }
    ],
    feature: { step: 'R1', option: 'fixed' },
    name: 'This is {o:motivated}. "Motivated" because what steers the reasoning is something the person wants, not the evidence.' },

  { id: 'check-motivated', kind: 'check', after: 'motivated',
    case: 'holiday',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed'] } },

  /* ---------- The hardest look-alike pair ---------- */
  { id: 'look-confbias-motivated', kind: 'lookalike', ledger: 'confbias~motivated',
    link: 'This is the hardest pair in the unit. In both, the person goes harder on evidence they do not like, and ends where they started.',
    cases: ['builder-friday', 'builder-local'],
    instruction: 'Both stories are about Sam and builders, and in both he is harder on what goes against him. Compare one thing: is he running a search to settle a choice, and had he picked the answer before it began?',
    prompt: { kind: 'which', option: 'R1.fixed', answer: 'builder-friday' },
    difference: [
      'In Story A Sam is settling a choice: which firm to hire. He decided on his cousin’s firm on Friday and "got quotes" on Saturday, so the search could never change anything. That is {o:motivated}.',
      'In Story B Sam is not choosing anything or looking for anything. He has held a view for years, and evidence comes along. A month late is normal for a small builder, and proof of failure for a big firm. That is {o:confbias}.'
    ] }
]);
