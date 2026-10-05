// Civics, Unit One, part two: the word the second family leans on, the second family (the President or a federal
// agency), the first look-alike pair, and the two exceptions between lawmakers and the President.
// The app prints "how to tell them apart" and the side-by-side table; neither is typed here. The key has no tie-break
// on its first question, so an exception card has no tie-break line: it teaches where the last decision is.

FC.cards('civics', 'u1', [

  /* ---------- A word the second family is built on ---------- */
  { id: 'term-agency', kind: 'term', term: 'agency',
    h: 'The offices that carry out the laws',
    link: 'The next kind leans on a word that is easy to pass over. The case shows what it means before it is named.',
    case: 'c-application',
    plain: [
      'Rosa’s papers did not go to lawmakers, and nobody voted about her. They went to an office whose daily work is applying a law that already exists: checking papers, booking interviews, sending letters. Most of what the government does for people from day to day is done this way, by offices that have their own staff and a job to do.',
      'Rosa met one of many such offices. Others collect taxes, inspect factories and meat plants, and write the rules for how strong a seat belt must be. Each of them works under a law that lawmakers passed, and each has a part of that law to carry out.'
    ],
    after: [
      'Some of these offices belong to the government of the whole country, which this course calls federal, and some belong to a state, a city or a county. The word just printed is the one this unit uses for such an office. It is not the lawmakers and it is not a judge: it is the part of government that does the daily work of a law.'
    ] },

  /* ---------- The second family: the President or a federal agency ---------- */
  { id: 'meet-president', kind: 'meet', family: 'president',
    link: 'The first kind was lawmakers voting. The second has no vote in it. A decision is made by a person or an office that acts: the President, or an {t:agency}.',
    case: 'c-seatbelt', mark: 'D1',
    strip: [
      'There is one decision-maker, an office: the federal road-safety {t:agency}.',
      'It is federal: it belongs to the government of the whole country, not to a state or a city.',
      'What it decides is a rule: how strong a seat belt must be in every new car, and the crash test each new car must pass.',
      'Nobody votes in the case, nobody is a judge, and no state or city appears.',
      'The last thing in the case is what the {t:agency} will do next: its inspectors will start testing new cars.'
    ],
    explain: [
      'What you are shown is an office deciding something and announcing it. There was no vote on this rule and no judge, and the people who build cars were not asked. An office that belongs to the government of the whole country decided how strong a seat belt must be. That is a decision, and it is the last one in the case.',
      'The government of the whole country has more than lawmakers. It also has a President, who leads it, and the offices that carry out the laws. This kind covers both: a decision made by the President, or by an {t:agency}. The President’s decisions can be of several sorts: giving orders to the armed forces, dealing with another country, refusing to sign a law Congress passed, forgiving a federal crime, giving written orders to the offices. An {t:agency}’s are the day-to-day sort: writing detailed rules, inspecting, processing applications, collecting.',
      'The word federal does a job here. It says which government the {t:agency} belongs to: the one for the whole country. A state has offices too, such as a state’s health department, and a decision by one of them belongs to a different kind. A federal office and a state office can do exactly the same kind of work, so the test is whose office it is.'
    ],
    feature: { step: 'D1', option: 'president' },
    name: 'The key’s answer, and so the name of the kind, is {a:D1.president}. The word “or” matters: the kind holds two sorts of decision-maker, the President and an office of the government of the whole country, and either one gives the answer. “Federal” belongs to the office: a state’s own office is not in this kind.' },

  { id: 'again-president', kind: 'again', family: 'president',
    link: 'The seat-belt case gave you what to point to: {needs:president}. Here is a second case, and this time the decision-maker is the President, not an office.',
    first: 'c-seatbelt', second: 'c-army', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (cars, pirates) and ignore who is named (an office, the President). Look at one thing only: whose decision does each case end on?',
    prompt: { kind: 'phrase', answer: 'the President ordered two navy ships to sail there and escort the cargo ships through' },
    shared: [
      'In both cases someone makes a decision, and it takes effect without a vote and without a judge. The office decides how strong a seat belt must be. The President decides where two navy ships will go. In both, the decision-maker belongs to the government of the whole country.',
      'One is an office doing a daily job and the other is the President giving an order to the armed forces, and the stories share nothing else. That is why this kind has two sorts of decision-maker and one name: it does not matter which of the two it is. That is what {a:D1.president} names.'
    ] },

  { id: 'portrait-president', kind: 'portrait', family: 'president',
    link: 'You know what to point to for {a:D1.president}. This card fills in the rest, and says what the kind’s decisions can be.',
    typical: [
      'There is a decision, and it is made by one person or one office: the President, or an {t:agency} of the government of the whole country. The words you hear are “announced”, “ordered”, “published its rules”, “inspected”, “refused to sign”, “forgave”.',
      'What an {t:agency} decides is the day-to-day work of a law: writing its detailed rules, inspecting, processing applications, collecting, enforcing.',
      'What the President decides can be an order to the armed forces, a meeting with another country’s leader, or one of three more: refusing to sign a law Congress passed, forgiving a federal crime, or giving a written order to the offices.',
      'A law or a vote can be in the story. If it is, it came first. The case still ends with what the President or the office did.',
      'It can be a decision you like or one you do not. The kind only says whose it is.'
    ],
    not: [
      'A person who works for a government is not for that reason in this kind. A state’s health inspector, a town’s mayor and a city’s clerk all work for a government, and none of them belongs to the government of the whole country.',
      'An office of a state, a city or a county is not in this kind however much its work looks the same. A state’s inspector can order a kitchen shut just as a federal inspector orders a plant shut.'
    ],
    wild: ['"The office has published its rules."', '"The President ordered..."', '"Inspectors found..."', '"The order tells every office to..."', '"She refused to sign it."'],
    self: 'In your own life you meet this kind whenever a form, a notice or an inspection comes from a federal office, and whenever the news reports something the President has ordered.',
    ask: '"Who made this decision: the President, or an office? And is the office one of the whole country, or of a state, a city or a county?" If it is the President, or a federal office, the key’s answer is {a:D1.president}.' },

  { id: 'check-president', kind: 'check', after: 'president',
    case: 'k-ferry',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-congress-president', kind: 'lookalike', ledger: 'congress~president',
    h: 'One law: the vote, then the office that applies it',
    link: 'You have now met two kinds on their own. They are easy to mix up, because one law can appear in both: the lawmakers vote on it, and then an office carries it out. This card puts the two side by side.',
    cases: ['l-label-law', 'l-label-rules'],
    instruction: 'Both cases are about the same food-label law. Compare one thing: whose decision does each story end on?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'l-label-rules' },
    difference: [
      'In Case A the story is about the bill itself: the Senate votes to pass it, as the House had done. Nobody else is deciding anything. The key’s answer is {a:D1.congress}.',
      'In Case B the law has been passed, and the story is about what comes after: an office publishes the rules that tell food makers how to follow it. The law is still in the story, but as how the matter got there. The last decision is the office’s. The key’s answer is {a:D1.president}.',
      'The same law gives you both. That is a common shape in news: lawmakers vote, and then an office puts the vote into practice. The two stories can sound alike, because both are about the law. What separates them is whose decision the story ends on.'
    ] },

  { id: 'exc-signed', kind: 'exception', ledger: 'congress~president', looksLike: 'president', is: 'congress',
    h: 'A law that the President signs',
    link: 'The last card showed a law moving from lawmakers to an office. A law can also move from lawmakers to the President’s desk, and the case can then end with a signature. That looks like the President deciding.',
    case: 'x-signing',
    setup: 'The last thing in this case is the President’s own act: signing the bill. A decision by the President is what you point to for {a:D1.president}. Yet the key’s answer for this case is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the House and the Senate both passed a bill' },
    because: [
      'A bill becomes a law when the House and the Senate have passed it and the President has signed it. But the signature does not choose what the law says. By the time the President signs, every word was settled by the votes. The President can sign the bill or refuse to sign it, and does not write it.',
      'The case shows the signature as the last act, and an act by the President is what you would expect to point to for the second kind. Here the signature adds nothing to what the votes decided. The decision the case is about, that the Calder River valley becomes a protected park, was made when the House and the Senate voted.',
      'Compare a refusal. If the President refused to sign, that would be a decision of the President’s own: it would send the bill back, and the bill would not become a law unless the lawmakers voted for it again. So a refusal is in the second kind, and a signature is not.'
    ],
    take: [
      'This is the key’s decision. In real life you will hear it said both ways: “Congress passed the park law” and “the President made the valley a park”. The key gives each case one answer, so that two people using it reach the same one and can each say why.',
      'It chooses the lawmakers because the signature never changes the bill. If the answer were the President in every case that ends with a signature, the vote, which is where the choice was made, would drop out of what the key looks at.'
    ] },

  /* ---------- A wrong idea: the signature is the decision ---------- */
  { id: 'refute-signed', kind: 'refute', about: 'congress',
    h: 'A wrong idea: “the President signed it, so it is the President’s”',
    link: 'The park law ended with a signature, and many people take a signature for the decision itself.',
    idea: '"The President signed it, so the President made it law. It is the President’s decision."',
    verdict: 'This is wrong.',
    right: [
      'Signing a law is a step every law goes through, and the President takes it. But it is not where the choice is made. Before the signature the House and the Senate voted, and what they voted for is what the law says. The President signs or refuses, and does not write the bill.',
      'So when you catch yourself crediting the President because of a signature, go back to the question: whose is the last decision in the case? If the case ends with a signature on a bill that lawmakers passed, the answer is {a:D1.congress}. If it ends with a refusal to sign, the answer is {a:D1.president}.'
    ],
    testedBy: ['g-claim-signed'] },

  { id: 'exc-treaty', kind: 'exception', ledger: 'congress~president', looksLike: 'president', is: 'congress',
    h: 'An agreement with another country, then the Senate',
    link: 'The President can also sign an agreement with another country. That is one of the President’s dealings with another country, and it is in the second kind. But a case about such an agreement can end somewhere else.',
    case: 'x-treaty',
    setup: 'The case opens with the President signing an agreement with another country, and dealing with another country is one of the things the President decides. Yet the key’s answer for this case is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'The Senate will vote on it next month' },
    because: [
      'Read to the end of the case. The agreement is signed, but it does not take effect until the Senate votes to approve it, and the last sentence says that vote is next month. The case ends by asking the Senate for a decision.',
      'So the case shows both: one of the President’s dealings with another country, and a vote by senators that is still to come. The question asks for the last decision, or the one the case asks for, and that is the Senate’s.',
      'Notice what would change the answer. If the story had stopped after the signing, with no word about the Senate, it would show only one of the President’s dealings with another country, and the answer would be {a:D1.president}. It is the last sentence that moves it.'
    ],
    take: 'A signed law and a signed agreement give the same result for two different reasons. The signature on a law adds nothing to what the votes decided. The signature on an agreement is followed by a vote that has not happened yet. In both, the case ends with lawmakers.' }
]);
