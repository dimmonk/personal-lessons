// Civics, Unit One, part two: the word the second family leans on, the second family (the President or a federal
// agency), the first look-alike pair, and the exception between lawmakers and the President.
// A quick lesson (lesson standard section 19). The app prints "how to tell them apart" and the side-by-side table;
// neither is typed here. The key has no tie-break on its first question, so an exception card has no tie-break line:
// it teaches where the last decision is.

FC.cards('civics', 'u1', [

  /* ---------- A word the second family is built on ---------- */
  { id: 'term-agency', kind: 'term', term: 'agency',
    h: 'The offices that carry out the laws',
    link: 'The next kind leans on a word that is easy to pass over. The case shows what it means before it is named.',
    case: 'c-application',
    plain: [
      'Rosa’s papers did not go to lawmakers, and nobody voted about her. They went to an office whose daily work is applying a law that already exists: checking papers, booking interviews, sending letters. Most of what the government does for people from day to day is done this way, by offices that have their own staff and a job to do.',
      'Others collect taxes, inspect factories and meat plants, and write the rules for how strong a seat belt must be. Each works under a law that lawmakers passed, and each has a part of that law to carry out.'
    ],
    after: [
      'Some of these offices belong to the government of the whole country, which this course calls federal, and some belong to a state, a city or a county. The word just printed is the one this unit uses for such an office. It is not the lawmakers and it is not a judge: it is the part of government that does the daily work of a law.'
    ] },

  /* ---------- The second family: the President or a federal agency ---------- */
  { id: 'meet-president', kind: 'meet', family: 'president',
    link: 'The first kind was lawmakers voting. The second has no vote in it. A decision is made by a person or an office that acts: the President, or an {t:agency}.',
    case: 'c-seatbelt', mark: 'D1',
    strip: [
      'There is one decision-maker, an office: the federal road-safety {t:agency}. It is federal: it belongs to the government of the whole country, not to a state or a city.',
      'What it decides is a rule: how strong a seat belt must be in every new car, and the crash test each new car must pass.',
      'Nobody votes in the case, nobody is a judge, and no state or city appears. The last thing in the case is what the {t:agency} will do next: its inspectors will start testing new cars.'
    ],
    explain: [
      'What you are shown is an office deciding something and announcing it. There was no vote on this rule and no judge. An office that belongs to the government of the whole country decided how strong a seat belt must be, and that is the last decision in the case.',
      'The government of the whole country has more than lawmakers. It also has a President, who leads it, and the offices that carry out the laws. This kind covers both. The President’s decisions can be of several sorts: giving orders to the armed forces, dealing with another country, refusing to sign a law Congress passed, forgiving a federal crime, giving written orders to the offices. An {t:agency}’s are the day-to-day sort: writing detailed rules, inspecting, processing applications, collecting.',
      'The word federal does a job here. A state has offices too, such as a state’s health department, and a decision by one of them belongs to a different kind. A federal office and a state office can do exactly the same kind of work, so the test is whose office it is.'
    ],
    feature: { step: 'D1', option: 'president' },
    name: 'The kind is {a:D1.president}. The word “or” matters: either the President or an office of the government of the whole country gives the answer. “Federal” belongs to the office: a state’s own office is not in this kind.' },

  { id: 'check-president', kind: 'check', after: 'president',
    case: 'k-ferry',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-congress-president', kind: 'lookalike', ledger: 'congress~president',
    h: 'One law: the vote, then the office that applies it',
    link: 'One law can appear in both of these kinds: the lawmakers vote on it, and then an office carries it out. This card puts the two side by side.',
    cases: ['l-label-law', 'l-label-rules'],
    instruction: 'Both cases are about the same food-label law. Compare one thing: whose decision does each story end on?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'l-label-rules' },
    difference: [
      'In Case A the story is about the bill itself: the Senate votes to pass it, as the House had done. Nobody else is deciding anything. The answer is {a:D1.congress}.',
      'In Case B the law has been passed, and the story is about what comes after: an office publishes the rules that tell food makers how to follow it. The law is still in the story, but as how the matter got there. The last decision is the office’s. The answer is {a:D1.president}.'
    ] },

  { id: 'exc-signed', kind: 'exception', ledger: 'congress~president', looksLike: 'president', is: 'congress',
    h: 'A law that the President signs',
    link: 'A law can also move from lawmakers to the President’s desk, and the case can then end with a signature. That looks like the President deciding.',
    case: 'x-signing',
    setup: 'The last thing in this case is the President’s own act: signing the bill. A decision by the President is what you point to for {a:D1.president}. Yet the answer for this case is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the House and the Senate both passed a bill' },
    because: [
      'A bill becomes a law when the House and the Senate have passed it and the President has signed it. But the signature does not choose what the law says. By the time the President signs, every word was settled by the votes. The decision the case is about, that the Calder River valley becomes a protected park, was made when the House and the Senate voted.',
      'Compare a refusal. If the President refused to sign, that would be a decision of the President’s own: it would send the bill back, and the bill would not become a law unless the lawmakers voted for it again. So a refusal is in the second kind, and a signature is not.'
    ],
    take: 'In real life you will hear it said both ways: “Congress passed the park law” and “the President made the valley a park”. Each case gets one answer, so that two people using the questions reach the same one and can each say why. It is the lawmakers, because the signature never changes the bill.' }
]);
