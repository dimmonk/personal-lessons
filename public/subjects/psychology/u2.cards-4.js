// Psychology, Unit Two, part three: "Reasoning that goes where the facts point, and the key's question".

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
      'Set this beside the cases you have met. Ben had every reason to protect his view: it was his idea, and he had pushed for it. Greg, in the same position, asked who did the counting. Ben read the count and accepted what it showed.',
      'Here the reasoning runs in the direction it is meant to. The figures were bad news for Ben, and they got the same test good news would have got. His view went where they pointed. Nothing is being protected.',
      'In Ben’s case the facts pointed away from his view, so it changed. That is the easiest form to see. But the name is not for the change. It is for the fair test, and a fair test can also leave a view where it was.'
    ],
    feature: { step: 'R1', option: 'follows' },
    name: 'The name for this is {o:fair}. It is the one name in this unit that is not a fault. The key includes it so that you can say "nothing is wrong here" as exactly as you can say what is wrong elsewhere.' },

  { id: 'again-fair', kind: 'again', outcome: 'fair',
    link: 'Ben’s case gave you what to point to: {needs:fair}. Ben’s view changed. Here is a second case where the view stays, and the reasoning is the same.',
    first: 'floodlights', second: 'prices', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the fact that Ben changes his view and Pat keeps hers. Look at one thing only: whether the view goes wherever the facts point.',
    prompt: { kind: 'phrase', answer: "If it had come out the other way, I'd have switched" },
    shared: [
      'Ben and Pat each started with a view. Each met facts about it: a season of attendance figures, twelve prices. Neither gave the facts a harder test because of which way they pointed. And each view ended up where the facts pointed. For Ben that meant changing it. For Pat it meant keeping it.',
      'So {o:fair} is not the same thing as changing your mind. A view that is tested fairly and kept is {o:fair} too. What the two cases share is this: {plain:fair}.'
    ] },

  { id: 'portrait-fair', kind: 'portrait', outcome: 'fair',
    link: 'What you point to, in short: {plain:fair}. Here is the rest of the picture.',
    typical: [
      'The person can say what settled it, and it is something that can be checked: figures, a result, an event. "I just see it differently now" is not that.',
      'When the view changes, it often costs them something: a public position, pride, money already spent. That cost is a good sign that the facts are doing the work.',
      'When the view stays, the person can usually say what would have changed it. Pat could: "If it had come out the other way, I’d have switched."',
      'Facts the person does not like get the same test that facts they like would have got. Sometimes that means checking them carefully. Checking is fine. A harder test for one side is not.',
      'It can end on the answer the person was hoping for. What separates it from {o:motivated} is the order: the search came first, and it could have come out the other way.',
      'It also covers choices about things already spent. A person who asks what the next step would cost and what it would bring, and goes by the answer, is reasoning fairly whether they stop or carry on.'
    ],
    not: [
      'Not every change of view is {o:fair}. If a person’s view changes straight after they have done something, and no new fact about the matter has arrived in between, the facts did not change it. Someone who buys the thing they used to mock, and the next day thinks it is wonderful, has learned nothing new about it.',
      'And not every view that is kept is {o:fair}. Keeping a view after giving the evidence against it a harder test is {o:confbias}. Keeping it after the same test for both sides is {o:fair}.'
    ],
    wild: ['"I was wrong about that."', '"The numbers changed my mind."', '"I checked, and it holds up."', '"Show me, and I’ll change it."', '"I didn’t want this to be true, and it is."'],
    self: 'In your own life, think of the last time you said "I was wrong" and meant it, and of what it was that changed your mind. Then think of a view you have kept, and ask what would change it.',
    ask: '"What fact settled this, and did it get the same test it would have got if it had pointed the other way?" When the answer is yes, there is nothing to correct, and treating it as a fault would be a mistake of its own.' },

  { id: 'check-fair', kind: 'check', after: 'fair',
    case: 'novel',
    ask: { type: 'option', step: 'R1', among: ['addstory', 'backward', 'scrutiny', 'fixed', 'follows'] } },

  { id: 'look-confbias-fair', kind: 'lookalike', ledger: 'confbias~fair',
    link: 'These two start from the same place: a person with a view meets evidence against it. What happens next is the whole difference.',
    cases: ['hire-fair', 'hire-uneven'],
    instruction: 'The two cases are word for word the same until the figures arrive. Compare one thing: the test Luis sets the figures, and whether he ever set that test for evidence on his own side.',
    prompt: { kind: 'which', option: 'R1.scrutiny', answer: 'hire-uneven' },
    difference: [
      'In Case A Luis does test the figures: he checks how they were counted. That is a fair test, the kind he would want for any figures, and when they pass, his view goes where they point. The key’s answer is {a:R1.follows}, and the case is {o:fair}.',
      'In Case B he sets a test too: one quarter is not enough. But two weeks earlier one missed deadline was enough. How much evidence counts changes with the side the evidence is on. The key’s answer is {a:R1.scrutiny}, and the case is {o:confbias}.',
      'So the difference is not whether the person questions evidence they do not like. Luis questions it in both cases. It is whether the same questions were put to the evidence on his own side.'
    ] },

  { id: 'look-sunkcost-fair', kind: 'lookalike', ledger: 'sunkcost~fair',
    link: 'The picture of {o:sunkcost} said that carrying on is not the fallacy. Here are two cases in which the same person carries on with the same thing. One is {o:sunkcost}. The other is {o:fair}.',
    cases: ['stall-spent', 'stall-ahead'],
    instruction: 'Both cases are about Mei and her market stall, and in both she pays for another year. Compare one thing: the reason she gives for carrying on.',
    prompt: { kind: 'which', option: 'R1.backward', answer: 'stall-spent' },
    difference: [
      'In Case A the reason Mei gives is the year and the savings already spent. She says nothing about what next year would bring, and the case tells you the stall has lost money every month. The key’s answer is {a:R1.backward}, and the case is {o:sunkcost}.',
      'In Case B Mei looks at next year: what it costs, and what the last ten weeks say it will bring. Those are facts about the matter, and her plan goes where they point. The year already spent does not appear in her reason at all. The key’s answer is {a:R1.follows}, and the case is {o:fair}.',
      'The choice is the same in both cases. Only the reason differs. That is why you can never name a case from what the person decided.'
    ] },

  { id: 'exc-convert', kind: 'exception', looksLike: 'fair', is: 'dissonance', ledger: 'dissonance~fair',
    h: 'A change of view that is not {o:fair}',
    link: 'A view that changes can look like {o:fair}: the person used to think one thing and now thinks another. This card shows a case where a view changes and the facts had nothing to do with it.',
    case: 'convert',
    setup: 'Jo’s view has changed completely, and a view that ends up somewhere new is what {o:fair} often looks like. Yet this case is {o:dissonance}.',
    prompt: { kind: 'phrase', answer: 'She has read nothing about them that she had not read before' },
    because: [
      'Ask what changed Jo’s view. No new fact arrived. What arrived was a purchase. She had bought the thing she used to mock, and that does not fit. Her new view is the reason why the purchase is fine.',
      'You met the honest ways out at the start of this unit. Maya could have said something true about herself: "I am not as strict as I tell people." Jo’s honest way out would have been just as plain: "I bought something I think is an overpriced toy." She did not say that. With no new fact, she changed her opinion of electric cars, so that the purchase needs no excuse. The new opinion is the excuse.',
      'So this is the first name in the unit again: {needs:dissonance}. Jo’s reason is bigger than "it hardly counts". It is a whole new opinion. It does the same job.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-does', kind: 'question', step: 'R1',
    h: 'The question you have been answering all along',
    link: 'Since the fish-stock sauce you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its five answers in one place, as the key shows them, and says why the key asks it.',
    decides: 'So two people can reach the same conclusion on the same matter and get different names. For one of them the key’s answer is {a:R1.fixed}; for the other it is {a:R1.follows}. Nothing about the topic, the person or the conclusion tells them apart. Only what the reasoning did tells them apart.',
    how: [
      'Find the sentence in which the person gives their reason, or the sentence that shows what they did with the evidence. Then ask which of the five answers describes that sentence. You should be able to put your finger on the words: the reason given afterwards, what is already spent, the question put to one side only, the answer chosen before the search, or the same test for both sides.',
      'A quick first step is to see what the reasoning is about. If the person is explaining something they did or spent, the answer is usually one of the first two, or the last. If they are dealing with evidence about what is true or which to choose, it is usually the third, the fourth, or the last. This narrows the choice. It does not make it: the words in the case do.',
      'Evidence can be in a case without the person’s reasoning ever touching it. In the renovation, the builder’s figures are evidence, and Dan does not question them, test them or answer them. His reason is the £40,000. A case like that is not about how evidence was tested. Go by the reason the person actually gives.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-does', kind: 'check', after: 'R1',
    case: 'tram',
    ask: { type: 'step', step: 'R1' } }
]);
