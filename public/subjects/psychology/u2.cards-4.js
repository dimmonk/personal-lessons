// Psychology, Unit Two, part two (second half): the fifth name (the one that is not a fault), the look-alike pairs that need a card, and the question.

FC.cards('psychology', 'u2', [

  /* ---------- Following the facts (the one name that is not a fault) ---------- */
  { id: 'meet-fair', kind: 'meet', outcome: 'fair',
    link: 'In the four so far, the facts made no difference. In the fifth, they do. You need it as much as the others: without it, every change of mind looks suspicious and every firm view looks like a fault.',
    case: 'floodlights', mark: 'R1',
    explain: [
      'Ben had every reason to protect his view: it was his idea, and he had pushed for it. Greg, in the same spot, asked who did the counting. Ben read the attendance figures and accepted them. They were bad news for him, and they got the same check that good news would have got.',
      'His view changed because the facts went against it. But the name is not for changing your mind. It is for the fair check, and a fair check can leave a view where it was, or even end on the answer the person hoped for. What separates it from {o:motivated} is the order: the search came first, and it could have gone either way.'
    ],
    spot: [
      { do: 'Find the facts: a season of attendance figures.', why: 'The view has to meet something real.' },
      { do: 'Check the facts got the same test good news would have got: Ben did not explain the figures away.', why: 'Bad news that gets a harder check than good news is {o:confbias}.' },
      { do: 'See where the view ended up: "It didn’t. I was wrong."', why: 'It goes where the facts lead, and that can mean changing it or keeping it.' }
    ],
    feature: { step: 'R1', option: 'follows' },
    name: 'This is {o:fair}. It is the only one of the five that is not a fault, so you can say "nothing is wrong here" as exactly as you can name what is.' },

  { id: 'check-fair', kind: 'check', after: 'fair',
    case: 'novel',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed', 'follows'] } },

  { id: 'look-confbias-fair', kind: 'lookalike', ledger: 'confbias~fair',
    link: 'These two start the same way: a person with a view meets evidence against it. What happens next is the whole difference.',
    cases: ['hire-fair', 'hire-uneven'],
    instruction: 'The two stories are word for word the same until the figures arrive. Compare one thing: the test Luis puts the figures through, and whether he ever put evidence on his own side through it.',
    prompt: { kind: 'which', option: 'R1.scrutiny', answer: 'hire-uneven' },
    difference: [
      'In Story A Luis checks that the figures were counted the same way for everyone. That is a fair test, the one he would want for any figures, and when they pass, his view goes where they lead. That is {o:fair}.',
      'In Story B he sets a test too: one quarter proves nothing. But two weeks earlier, one missed deadline was proof enough. How much he needs changes with the side the evidence is on. That is {o:confbias}.',
      'So the difference is not whether he questions evidence he dislikes: he does in both. It is whether he asks the same questions of the evidence on his own side.'
    ] },

  { id: 'exc-convert', kind: 'exception', looksLike: 'fair', is: 'dissonance', ledger: 'dissonance~fair',
    h: 'A change of view that is not {o:fair}',
    link: 'A view that changes can look like {o:fair}: the person used to think one thing and now thinks another. Here is a story where the view changed and the facts had nothing to do with it.',
    case: 'convert',
    setup: 'Jo’s view changed completely, and a changed view is what {o:fair} often looks like. Yet this is {o:dissonance}.',
    prompt: { kind: 'phrase', answer: 'She has read nothing about them that she had not read before' },
    because: [
      'Ask what changed Jo’s view. No new fact arrived. A purchase did: she bought the thing she used to mock, and that does not fit.',
      'The honest way out was "I bought something I think is an overpriced toy." She did not say that. She changed her opinion of electric cars so that the purchase needs no excuse, and the new opinion is the excuse.',
      'So this is {o:dissonance} again. Jo did something that did not match what she said, and then came up with a reason it is fine. Her reason is a whole new opinion, and it does the same job.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question to ask about anyone’s reasoning',
    link: 'You have answered this question at the foot of each new name. Here it is with its five answers in one place.',
    decides: [
      'Two people can reach the same conclusion on the same topic and get different names. For one of them it is {o:motivated}; for the other it is {o:fair}. The topic, the person and where they end up do not tell them apart. Only what the reasoning did does.'
    ],
    how: [
      { do: 'Find the words where the person gives their reason, or deals with the evidence.', why: 'Everything you need is in that sentence.' },
      { do: 'Ask what the reasoning is about: something they did or spent, or evidence about what is true.', why: 'Something done or spent leads to {o:dissonance}, {o:sunkcost} or {o:fair}, and evidence leads to {o:confbias}, {o:motivated} or {o:fair}.' },
      { do: 'Pick the answer that matches those words: the excuse afterward, the money already spent, one side picked apart, the answer chosen first, or every fact checked the same way.', why: 'You should be able to say which words show it.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'tram',
    ask: { type: 'step', step: 'R1' } }
]);
