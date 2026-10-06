// Psychology, Unit Two, part two: "Reasoning about evidence".

FC.cards('psychology', 'u2', [

  /* ---------- Confirmation bias ---------- */
  { id: 'meet-confbias', kind: 'meet', outcome: 'confbias',
    link: 'The first two names were about a person explaining something they did or spent. The next two are about something different: a person dealing with evidence. The question in the person’s mind is no longer "was what I did all right?" but "what is true?" or "which should I choose?"',
    case: 'oneway', mark: 'R1',
    strip: [
      'Greg already has a view: the one-way street plan has made traffic worse.',
      'Two pieces of evidence arrive. One is for his view: the neighbor’s longer drive. One is against it: the council’s count.',
      'He accepts the first without a single question.',
      'He meets the second with three questions: who counted, when, and how.'
    ],
    explain: [
      'Greg’s questions are good ones. A count can be done badly, and it is fair to ask how it was done. But one neighbor’s drive is much weaker evidence than a count of many journeys, and it was asked nothing at all.',
      'That is the whole of it: a harder test for one side. Evidence for the view walks straight in. Evidence against it has to answer questions first. A person who keeps doing this can only become more sure, whatever is true, because nothing unwelcome ever gets through.',
      'Notice what Greg is not doing. He has not set out to find anything. The neighbor’s remark and the council’s count came to him, and he judged each as it arrived.'
    ],
    feature: { step: 'R1', option: 'scrutiny' },
    name: 'The name for this is {o:confbias}: a lean toward whatever confirms what you already think.' },

  { id: 'again-confbias', kind: 'again', outcome: 'confbias',
    link: 'The one-way street plan gave you what to point to: {needs:confbias}. Here is the same thing in a soccer crowd.',
    first: 'oneway', second: 'striker', step: 'R1',
    instruction: 'Find what the two cases share. Ignore what the view is about (traffic, a footballer). Look at one thing only: whether the evidence for the view and the evidence against it are given the same test.',
    prompt: { kind: 'phrase', answer: 'One game was enough when he scored' },
    shared: [
      'Greg and Nadia each hold a view. Each meets evidence for it and evidence against it. Each lets the evidence for it in untested (a neighbor’s drive, one goal) and sets a test for the evidence against it (who did the counting? three games are too few).',
      'The test may even be a fair one. What is wrong is that only one side has to sit it. That is what {o:confbias} names.'
    ] },

  { id: 'portrait-confbias', kind: 'portrait', outcome: 'confbias',
    link: 'What you point to is the harder test for one side. Here is the rest of the picture.',
    typical: [
      'It needs evidence in the case: something read, heard, counted or remembered, and then judged.',
      'The evidence usually turns up without being looked for: a remark, a news story, a result. The person is not running a search. They are reacting to what arrives.',
      'The harder test takes several forms. Evidence against the view is asked about its source ("who paid for that?"), its size ("that’s one study"), or its fairness ("they were unlucky"). Evidence for the view is asked nothing. Or a result that goes against the view is called an exception, while one that fits is called proof.',
      'It also shapes what is noticed and remembered. The results that fit stand out; the ones that do not slide past. A person can be quite sincere in saying "every time I look, I see it".',
      'It needs no strong wish. People do it for views they hardly care about, simply because the view was there first.'
    ],
    not: 'Testing evidence is not {o:confbias}. Asking where a number came from is good practice. The name applies only when the two sides are tested differently. If Greg had put the same three questions to his neighbor, he would have been testing both sides the same way, and that is the opposite of this name.',
    wild: ['"That just proves my point."', '"You can prove anything with statistics."', '"That’s the exception."', '"Well, they would say that."'],
    self: 'In your own life it is easiest to catch in what you pass on to friends: the article that agrees with you goes on without a second look, and the one that disagrees gets read for its faults.',
    ask: '"Have I put this same question to the evidence on my own side?" If Greg asks who counted the journeys, he should also ask how his neighbor timed her drive.' },

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
      'Greg, in the one-way street plan, also had his view before the council’s count arrived. So "had a view first" cannot be the difference between the two. The difference is what the person is doing. Greg was not looking for anything; evidence came to him and he judged it. Carol set out to look. Her interviews were a search that was supposed to give the answer, and she had chosen the answer before the search began.',
      'So put this to a case like Carol’s. {test:confbias~motivated} When the answer to both is yes, nothing in the search could have changed the outcome. A search that cannot change the answer only collects support.'
    ],
    feature: { step: 'R1', option: 'fixed' },
    name: 'The name for this is {o:motivated}. "Motivated" because what steers the reasoning is a motive, something the person wants, and not the evidence.' },

  { id: 'again-motivated', kind: 'again', outcome: 'motivated',
    link: 'Carol’s interviews gave you what to point to: {needs:motivated}. Here is the same thing in a car showroom.',
    first: 'interviews', second: 'convertible', step: 'R1',
    instruction: 'Find what the two cases share. Ignore what is being chosen (a team leader, a car). Look at one thing only: which came first, the answer or the search.',
    prompt: { kind: 'phrase', answer: 'decided she would buy the red convertible the moment she saw it' },
    shared: [
      'Carol and Ines each chose first and searched second. Each then went where support was likely to be found (the favored candidate’s good answers, the owners’ club) and stayed away from where it was not. Each ended by describing the search as if it had produced the answer.',
      'Ines calls her search "research", and Carol’s was a round of interviews. Reading, asking, testing, interviewing, getting prices: whatever form it takes, it is the search. The answer first, then a search that collects support for it: that is what {o:motivated} names.'
    ] },

  { id: 'portrait-motivated', kind: 'portrait', outcome: 'motivated',
    link: 'What you point to is the order: the answer first, then the search. Here is the rest of the picture.',
    typical: [
      'There is something the person wants: a purchase, a candidate, a verdict, to have been right. The wanting comes first and does the steering.',
      'The search is real work, and from the inside it feels like care. People who do this say, quite sincerely, that they have "looked into it".',
      'The search goes to friendly places and stops once there is enough support. For something they want to be true, the person asks "is there anything that lets me believe this?" and stops at the first yes. For something they do not want to be true, they ask "is there anything that lets me doubt this?" and stop at the first yes there too. A person searching openly asks the same question of both: "what would I expect to find if I were wrong, and have I looked there?"',
      'Objections are treated as obstacles, not as information. A concern makes the person irritated where it would make an open searcher curious.'
    ],
    not: 'Wanting an answer is not {o:motivated}, and neither is ending up with the answer you wanted. People are often right about things that suit them. What matters is whether the search could have come out the other way. Where a person ends up does not tell you which name applies. How they got there does.',
    wild: ['"I’ve done my research."', '"I just need to find the numbers to back this up."', '"I knew the moment I saw it."', '"Find me a reason."'],
    self: 'In your own life, look at the evening before a purchase you have already set your heart on, and at what you choose to read that evening.',
    ask: '"What would I have needed to find to choose differently, and did I look there?" If nothing could have changed the answer, the search was not what decided it.' },

  { id: 'check-motivated', kind: 'check', after: 'motivated',
    case: 'holiday',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed'] } },

  /* ---------- The hardest look-alike pair ---------- */
  { id: 'look-confbias-motivated', kind: 'lookalike', ledger: 'confbias~motivated',
    link: 'These two are the hardest pair in the unit. In both, a person is harder on evidence they do not like, and ends where they started. This card shows what separates them.',
    cases: ['builder-friday', 'builder-local'],
    instruction: 'Both cases are about Sam and builders, and in both he is harder on what goes against him. Compare one thing: is Sam running a search to settle a choice, and if he is, was the answer chosen before it began?',
    prompt: { kind: 'which', option: 'R1.fixed', answer: 'builder-friday' },
    difference: [
      'In Case A Sam sets out to settle a choice: which firm to hire. He "gets quotes", which is a search. And you can see the order: he chose his cousin’s firm on Friday, and the search came on Saturday. It was never going to change anything: one question each, and a fault noted in each rival. The answer is {a:R1.fixed}, and the case is {o:motivated}.',
      'In Case B Sam is not choosing anything and has not set out to find anything. He has held a view for years, and events come along. The same event, finishing a month late, counts as normal for a small builder and as proof against a big one. The answer is {a:R1.scrutiny}, and the case is {o:confbias}.'
    ] },

  { id: 'exc-both', kind: 'exception', looksLike: 'confbias', is: 'motivated', ledger: 'confbias~motivated',
    h: 'When a case shows both',
    link: 'The last card separated the pair with two tidy cases. Real cases are often less tidy: a person chooses first and then is also harder on the evidence they do not like. You have already met one.',
    case: 'interviews',
    setup: 'Look again at what Carol did in the interviews: good points written down for Jas, weak points for everyone else. That is a harder test for one side, which is what you point to for {o:confbias}. Yet this case is {o:motivated}.',
    prompt: { kind: 'phrase', answer: 'Before the interviews she has already decided it will be her friend Jas' },
    because: 'The case shows something that happened before any evidence was handled: the answer was chosen before the interviews. Once the answer comes first, being harder on one side is simply how the support gets collected. It is part of the same thing, not a second thing.',
    take: 'The answer is chosen this way on purpose, and it is worth knowing that the choice is made in advance, for every case alike. In life the two overlap, and people who study them do not all draw the line in the same place. Each case gets one name, by the earliest thing you can point to, so that two people using these questions reach the same answer and can each say why.' },

  /* ---------- Same person, both kinds of reasoning ---------- */
  { id: 'look-dissonance-confbias', kind: 'lookalike', ledger: 'dissonance~confbias',
    h: 'One man, one habit, two names',
    link: 'The first part of this unit was about reasoning about something the person did or spent. This part has been about reasoning about evidence. The same person can do both, about the same thing, in the same week. This card shows it.',
    cases: ['vic-stress', 'vic-study'],
    instruction: 'Same man, same habit, and both times he is defending it. Compare one thing: what his reasoning is about. In one case it is about his own smoking. In the other it is about evidence on smoking.',
    prompt: { kind: 'which', option: 'R1.scrutiny', answer: 'vic-study' },
    difference: [
      'In Case A nobody has put any evidence in front of Vic. He is explaining something he does, and he gives a reason why it is fine after all: the stress. The answer is {a:R1.addstory}, and the case is {o:dissonance}.',
      'In Case B there is evidence in the case, a study against smoking and a story for it, and Vic is judging both. The study is asked who paid for it. The story about one grandfather is asked nothing. The answer is {a:R1.scrutiny}, and the case is {o:confbias}.',
      'So the same person, defending the same habit, can do two different things in one week. Nothing names the person. The name goes to what the reasoning in front of you does. Seeing what the reasoning is about, something the person did or evidence about what is true, is a quick first step: it tells you which answers are worth considering.'
    ] }
]);
