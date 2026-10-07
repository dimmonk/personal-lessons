// Civics, Unit One, part two: the word the second family leans on, the second family (the President or a federal
// agency), the first look-alike pair, and the exception between lawmakers and the President.
// A quick lesson (lesson standard section 19), rewritten plain (section 20). The app prints "how to tell them apart";
// it is not typed here. The key has no tie-break on its first question, so an exception card has no tie-break line:
// it teaches where the final call is.

FC.cards('civics', 'u1', [

  /* ---------- A word the second family is built on ---------- */
  { id: 'term-agency', kind: 'term', term: 'agency',
    h: 'Offices that run the laws day to day',
    link: 'The next one needs a word, and a story shows what it means before it gets a name.',
    case: 'c-application',
    plain: [
      'Rosa’s papers did not go to lawmakers, and nobody voted on them. They went to an office whose daily job is applying a law that already exists: checking papers, booking interviews, sending letters.',
      'Offices like this do most of what the government does for you day to day. Others collect taxes, inspect meat plants and write the rules for how strong a seat belt must be. Each one works under a law that lawmakers already passed.'
    ],
    after: [
      'Some of these offices belong to the government of the whole country, and some belong to a state, a city or a county. Either way, an office is not the lawmakers and not a judge. It is the part of government that does the daily work of a law.'
    ] },

  /* ---------- The second family: the President or a federal agency ---------- */
  { id: 'meet-president', kind: 'meet', family: 'president',
    link: 'Second: no vote this time. The President, or an {t:agency}, decides something and announces it.',
    case: 'c-seatbelt', mark: 'D1',
    explain: [
      'An office decided something and announced it. Nobody voted on the rule and no judge was involved. “Federal” means the office belongs to the government of the whole country, not to a state or a city, so the rule applies everywhere in the country.',
      'That government is not only lawmakers. It also has a President, who leads it, and the offices that run its laws. The President decides things too: orders to the armed forces, deals with other countries, refusing to sign a law Congress passed, forgiving a federal crime. An {t:agency} does the daily work: writing detailed rules, inspecting, processing applications, collecting.'
    ],
    spot: [
      { do: 'Find who decided: the federal road-safety {t:agency} announced the rule.', why: 'The President or an office acts on its own, with no vote.' },
      { do: 'Check there was no vote and no judge: there was neither.', why: 'A vote would make it the lawmakers’ call, and a ruling would make it a judge’s.' },
      { do: 'Check whose office it is: “federal” means the whole country’s.', why: 'A state has offices too, and they can do the same work, but their calls belong to the state.' }
    ],
    feature: { step: 'D1', option: 'president' },
    name: 'This is {a:D1.president}. Either one counts: the President, or an office of the whole country.' },

  { id: 'check-president', kind: 'check', after: 'president',
    case: 'k-ferry',
    ask: { type: 'option', step: 'D1', among: ['congress', 'president'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-congress-president', kind: 'lookalike', ledger: 'congress~president',
    h: 'One law: the vote, then the office that applies it',
    link: 'One law can show up in both: first lawmakers vote on it, then an office puts it to work. Here are the two side by side.',
    cases: ['l-label-law', 'l-label-rules'],
    instruction: 'Both stories are about the same food-label law. Compare one thing: whose is the final call in each?',
    prompt: { kind: 'which', option: 'D1.president', answer: 'l-label-rules' },
    difference: [
      'In Story A the Senate votes to pass the bill, as the House already did. Nobody else decides anything, so this is {a:D1.congress}.',
      'In Story B the law has already passed, and an office is now writing the rules that tell food makers how to follow it. The law is only how the matter got there, and the office has the final call, so this is {a:D1.president}.'
    ] },

  { id: 'exc-signed', kind: 'exception', ledger: 'congress~president', looksLike: 'president', is: 'congress',
    h: 'A law the President signs',
    link: 'A passed law can end on the President’s desk with a signature. That sounds like the President deciding.',
    case: 'x-signing',
    setup: 'The story ends with the President’s own act: signing the bill. A decision by the President usually means {a:D1.president}, yet the answer here is {a:D1.congress}.',
    prompt: { kind: 'phrase', answer: 'the House and the Senate both passed a bill' },
    because: [
      'By the time the President signs, every word of the bill was settled by the votes. The signature does not change what the law says, so the decision that the valley becomes a park was made when the House and the Senate voted.',
      'Compare a refusal. If the President refused to sign, that would be the President’s own call: the bill goes back, and does not become a law unless the lawmakers vote for it again.'
    ],
    take: 'You will hear it both ways: “Congress passed the park law” and “the President made the valley a park”. For this course a signed law stays with the lawmakers, because the signature never changes the bill.' }
]);
