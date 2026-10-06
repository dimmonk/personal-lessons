// Psychology, Unit Two, part two (first half): "Reasoning about evidence", the next two names and the hardest look-alike pair.

FC.cards('psychology', 'u2', [

  /* ---------- Confirmation bias ---------- */
  { id: 'meet-confbias', kind: 'meet', outcome: 'confbias',
    link: 'The first two names were about a person explaining something they did or spent. The next two are about evidence. The question in the person’s mind is no longer "was what I did all right?" but "what is true?" or "which should I choose?"',
    case: 'oneway', mark: 'R1',
    strip: [
      'Greg already has a view: the one-way street plan has made traffic worse.',
      'Two pieces of evidence arrive. One is for his view: the neighbor’s longer drive. One is against it: the council’s count.',
      'He accepts the first without a single question.',
      'He meets the second with three questions: who counted, when, and how.'
    ],
    explain: [
      'Greg’s questions are good ones. A count can be done badly. But one neighbor’s drive is much weaker evidence than a count of many journeys, and it was asked nothing at all.',
      'That is the whole of it: a harder test for one side. Evidence for the view walks straight in. Evidence against it has to answer questions first. A person who keeps doing this can only become more sure, whatever is true.',
      'Notice what Greg is not doing. He has not set out to find anything. The neighbor’s remark and the council’s count came to him, and he judged each as it arrived.'
    ],
    feature: { step: 'R1', option: 'scrutiny' },
    name: 'The name for this is {o:confbias}: a lean toward whatever confirms what you already think.' },

  { id: 'check-confbias', kind: 'check', after: 'confbias',
    case: 'homeworkers',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny'] } },

  /* ---------- Motivated reasoning ---------- */
  { id: 'meet-motivated', kind: 'meet', outcome: 'motivated',
    link: 'In {o:confbias} nobody sets out to find anything: evidence turns up, and the evidence against the view gets the harder test. In the next of the five the person does set out to find something. They run a search that is supposed to settle a choice. And the choice is already made.',
    case: 'interviews', mark: 'R1',
    strip: [
      'There is a choice to settle: who should lead the team.',
      'There is a search meant to settle it: four interviews.',
      'Carol chose before the search began.',
      'During the search she wrote down only what supported her choice.',
      'Afterward she presented her choice as the result of the search.'
    ],
    explain: [
      'Interviews are meant to work in one direction: you look first, and the answer comes out at the end. Carol ran hers backwards. She had the answer first, so the only thing the interviews could do was supply support for it.',
      'Greg also had his view before the council’s count arrived, so "had a view first" is not the difference. The difference is what the person is doing. Greg was not looking for anything; evidence came to him and he judged it. Carol set out to look, and she had chosen the answer before the search began.',
      'So put this to a case like Carol’s. {test:confbias~motivated} When the answer to both is yes, nothing in the search could have changed the outcome. A search that cannot change the answer only collects support.'
    ],
    feature: { step: 'R1', option: 'fixed' },
    name: 'The name for this is {o:motivated}. "Motivated" because what steers the reasoning is a motive, something the person wants, and not the evidence.' },

  { id: 'check-motivated', kind: 'check', after: 'motivated',
    case: 'holiday',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed'] } },

  /* ---------- The hardest look-alike pair ---------- */
  { id: 'look-confbias-motivated', kind: 'lookalike', ledger: 'confbias~motivated',
    link: 'These two are the hardest pair in the unit. In both, a person is harder on evidence they do not like, and ends where they started.',
    cases: ['builder-friday', 'builder-local'],
    instruction: 'Both cases are about Sam and builders, and in both he is harder on what goes against him. Compare one thing: is Sam running a search to settle a choice, and if he is, was the answer chosen before it began?',
    prompt: { kind: 'which', option: 'R1.fixed', answer: 'builder-friday' },
    difference: [
      'In Case A Sam sets out to settle a choice: which firm to hire. He "gets quotes", which is a search. And you can see the order: he chose his cousin’s firm on Friday, and the search came on Saturday. It was never going to change anything: one question each, and a fault noted in each rival. The answer is {a:R1.fixed}, and the case is {o:motivated}.',
      'In Case B Sam is not choosing anything and has not set out to find anything. He has held a view for years, and events come along. The same event, finishing a month late, counts as normal for a small builder and as proof against a big one. The answer is {a:R1.scrutiny}, and the case is {o:confbias}.'
    ] }
]);
