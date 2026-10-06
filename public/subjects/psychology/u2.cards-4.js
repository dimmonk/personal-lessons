// Psychology, Unit Two, part two (second half): "Reasoning that goes where the facts point", the look-alike pairs that need a card, and the question.

FC.cards('psychology', 'u2', [

  /* ---------- Fair reasoning (the one name that is not a fault) ---------- */
  { id: 'meet-fair', kind: 'meet', outcome: 'fair',
    link: 'Four names so far, and in every one, nothing the facts said made any difference. The fifth name is for the case where the facts do make the difference. You need it as much as the others: without it, every change of mind looks suspicious and every firm view looks like a fault.',
    case: 'floodlights', mark: 'R1',
    strip: [
      'Ben had a view, and he had argued for it in public.',
      'Facts arrived that went against it: a season of attendance figures.',
      'He did not give the figures a harder test than he would have given good news, and he did not explain them away.',
      'His view ended up where the figures pointed, and he said what had changed it.'
    ],
    explain: [
      'Ben had every reason to protect his view: it was his idea, and he had pushed for it. Greg, in the same position, asked who did the counting. Ben read the count and accepted what it showed. The figures were bad news for him, and they got the same test good news would have gotten. Nothing is being protected.',
      'In Ben’s case the facts pointed away from his view, so it changed. But the name is not for the change. It is for the fair test, and a fair test can also leave a view where it was. It can even end on the answer the person hoped for. What separates it from {o:motivated} is the order: the search came first, and it could have gone either way.'
    ],
    feature: { step: 'R1', option: 'follows' },
    name: 'The name for this is {o:fair}. It is the one name in this unit that is not a fault. It is there so that you can say "nothing is wrong here" as exactly as you can say what is wrong elsewhere.' },

  { id: 'check-fair', kind: 'check', after: 'fair',
    case: 'novel',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed', 'follows'] } },

  { id: 'look-confbias-fair', kind: 'lookalike', ledger: 'confbias~fair',
    link: 'These two start from the same place: a person with a view meets evidence against it. What happens next is the whole difference.',
    cases: ['hire-fair', 'hire-uneven'],
    instruction: 'The two cases are word for word the same until the figures arrive. Compare one thing: the test Luis sets the figures, and whether he ever set that test for evidence on his own side.',
    prompt: { kind: 'which', option: 'R1.scrutiny', answer: 'hire-uneven' },
    difference: [
      'In Case A Luis does test the figures: he checks how they were counted. That is a fair test, the kind he would want for any figures, and when they pass, his view goes where they point. The answer is {a:R1.follows}, and the case is {o:fair}.',
      'In Case B he sets a test too: one quarter is not enough. But two weeks earlier one missed deadline was enough. How much evidence counts changes with the side the evidence is on. The answer is {a:R1.scrutiny}, and the case is {o:confbias}.',
      'So the difference is not whether the person questions evidence they do not like: Luis does in both cases. It is whether the same questions were put to the evidence on his own side.'
    ] },

  { id: 'exc-convert', kind: 'exception', looksLike: 'fair', is: 'dissonance', ledger: 'dissonance~fair',
    h: 'A change of view that is not {o:fair}',
    link: 'A view that changes can look like {o:fair}: the person used to think one thing and now thinks another. This card shows a case where a view changes and the facts had nothing to do with it.',
    case: 'convert',
    setup: 'Jo’s view has changed completely, and a view that ends up somewhere new is what {o:fair} often looks like. Yet this case is {o:dissonance}.',
    prompt: { kind: 'phrase', answer: 'She has read nothing about them that she had not read before' },
    because: [
      'Ask what changed Jo’s view. No new fact arrived. What arrived was a purchase. She had bought the thing she used to mock, and that does not fit. Her new view is the reason why the purchase is fine.',
      'Her honest way out would have been plain: "I bought something I think is an overpriced toy." She did not say that. With no new fact, she changed her opinion of electric cars, so that the purchase needs no excuse. The new opinion is the excuse.',
      'So this is {o:dissonance} again: {needs:dissonance}. Jo’s reason is a whole new opinion, and it does the same job.'
    ] },

  /* ---------- The question ---------- */
  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question you have been answering all along',
    link: 'You have seen the question at the foot of each new name, with one answer under it. This card puts the question and its five answers in one place.',
    decides: 'So two people can reach the same conclusion on the same matter and get different names. For one of them the answer is {a:R1.fixed}; for the other it is {a:R1.follows}. Nothing about the topic, the person or the conclusion tells them apart. Only what the reasoning did tells them apart.',
    how: [
      'Find the sentence in which the person gives their reason, or the sentence that shows what they did with the evidence. Then ask which of the five answers describes that sentence. You should be able to put your finger on the words: the reason given afterward, what is already spent, the question put to one side only, the answer chosen before the search, or the same test for both sides.',
      'A quick first step is to see what the reasoning is about. If the person is explaining something they did or spent, think {o:dissonance}, {o:sunkcost} or {o:fair}. If they are dealing with evidence about what is true or which to choose, think {o:confbias}, {o:motivated} or {o:fair}. This narrows the choice. It does not make it: the words in the case do.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'tram',
    ask: { type: 'step', step: 'R1' } }
]);
