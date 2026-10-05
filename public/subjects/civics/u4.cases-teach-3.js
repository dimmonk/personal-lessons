// Civics, Unit Four: cases shown inside cards, part three. Sending a law back unsigned and forgiving a federal crime,
// and the three pairs of cases for the look-alike cards that join them to each other and to carrying out a law.

FC.cases('civics', 'u4', [

  /* ---------- Sending a law back unsigned ---------- */
  { id: 'e-parkpay', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pay rise for park staff', name: 'The park pay rise',
    text: "Congress passed a bill that raises the pay of everyone who works for the national parks by four percent. The bill reached the President’s desk on Monday. On Wednesday the President wrote that the country cannot afford the rise, would not sign the bill, and sent it back to Congress with a letter of objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'would not sign the bill, and sent it back to Congress with a letter of objections' } },

  { id: 'e-cancerfund', use: 'teach', tier: 'clean', setting: 'health', topic: 'extra money for cancer research', name: 'The cancer research money',
    text: "Congress passed a bill that adds ten million dollars to the money for cancer research. The President thinks the extra money should go to other things. On Tuesday the President wrote to the House and the Senate saying so, and sent the bill back without signing it.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'sent the bill back without signing it' },
    segments: [
      { text: 'Congress passed a bill that adds ten million dollars to the money for cancer research', note: 'That is the bill, and it came first. The President acts on it, and it is not what the President does.' },
      { text: 'The President thinks the extra money should go to other things', note: 'That is the President’s reason. The words asked for show what the President does about the bill.' },
      { text: 'On Tuesday the President wrote to the House and the Senate saying so, and sent the bill back without signing it' }
    ] },

  { id: 'e-postoffices', use: 'check', tier: 'clean', setting: 'community', topic: 'closing two post offices', name: 'The post offices',
    text: "Congress passed a bill to close two federal post offices in the north. The bill arrived on the President’s desk on Friday. On Monday the President returned it to Congress, unsigned, with a note listing objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'the President returned it to Congress, unsigned, with a note listing objections' },
    reason: { E1: 'Congress has finished with the bill and passed it on. What the case shows next is the President’s decision: {cue:E1}.' },
    not: { outcome: 'execute', why: 'An office that carries out a law starts from a law that is already in force. Here the bill is not yet in force: the President is refusing it.' } },

  /* ---------- Forgiving a federal crime ---------- */
  { id: 'e-taxpardon', use: 'teach', tier: 'clean', setting: 'money', topic: 'false tax forms', name: 'The false tax forms',
    text: "A man was found guilty in a federal court of mailing false tax forms, and the judge sentenced him to two years in prison. After six months the President signed a pardon for him. The man left the prison that evening.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President signed a pardon for him' } },

  { id: 'e-parkbirds', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'trapping birds in a national park', name: 'The trapped birds',
    text: "A woman was charged in a federal court with trapping birds in a national park, which a federal law forbids. Before her trial began, the President signed a paper that forgives her for the crime. She will not be punished.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President signed a paper that forgives her for the crime' },
    segments: [
      { text: 'A woman was charged in a federal court with trapping birds in a national park, which a federal law forbids', note: 'That is the crime, and it came first. It is what the President acts on, not what the President does.' },
      { text: 'Before her trial began, the President signed a paper that forgives her for the crime' },
      { text: 'She will not be punished', note: 'That is the result of what the President did. The words asked for are the act itself.' }
    ] },

  { id: 'e-pilot', use: 'check', tier: 'clean', setting: 'work', topic: 'a pilot and a safety form', name: 'The pilot’s form',
    text: "A federal court found a pilot guilty of leaving a test result off a safety form, and sentenced him to a year in prison. Last week the President pardoned him, and the sentence no longer applies.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President pardoned him, and the sentence no longer applies' },
    reason: { E1: 'A person was found guilty of a federal crime, and the President’s act lifts the punishment: {cue:E1}. No judge is asked anything, and no law is being put into practice.' },
    not: { outcome: 'veto', why: 'The President is not refusing a law Congress passed. A person was found guilty of a crime, and the President is forgiving it.' } },

  /* ---------- The look-alike pair: the same park, the same Monday, a law refused and a crime forgiven ---------- */
  { id: 'e-dump-bill', use: 'teach', tier: 'clean', setting: 'community', topic: 'a bill cutting the fine for dumping rubbish', name: 'The rubbish bill',
    text: "Congress passed a bill that cuts the fine for dumping rubbish in national parks. On Monday the President sent the bill back to Congress without signing it, saying the fine should stay high.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'the President sent the bill back to Congress without signing it' } },

  { id: 'e-dump-man', use: 'teach', tier: 'clean', setting: 'community', topic: 'a man fined for dumping rubbish', name: 'The rubbish fine',
    text: "A man was fined $5,000 in a federal court for dumping rubbish in a national park. On Monday the President signed a paper that forgives the crime, and the fine was cancelled.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President signed a paper that forgives the crime' } },

  /* ---------- The look-alike pair: one law, refused before it starts and carried out after ---------- */
  { id: 'e-bags-bill', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a bill for a free cabin bag', name: 'The free bag bill',
    text: "Congress passed a bill that requires every airline to let passengers take one carry-on bag for free. The bill reached the President on Friday. On Monday the President refused to sign it and sent it back to Congress with a letter of objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'the President refused to sign it and sent it back to Congress with a letter of objections' } },

  { id: 'e-bags-rule', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a rule for a free cabin bag', name: 'The free bag rule',
    text: "Congress passed a law last year that requires every airline to let passengers take one carry-on bag for free. On Monday the federal transport agency published the size and weight a free bag must be allowed to have, and told airlines the date from which they must follow the rule.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'the federal transport agency published the size and weight a free bag must be allowed to have' } },

  /* ---------- The look-alike pair: visitors from another country, dealt with as a country and as individuals ---------- */
  { id: 'e-visas-talks', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'talks on visits between two nations', name: 'The visa talks',
    text: "Calvera asked for talks about visits by its citizens. On Monday the Secretary of State, speaking for the President, met Calvera’s foreign minister, and the two agreed that visitors from each country may stay up to ninety days. They signed the agreement on Tuesday.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'the Secretary of State, speaking for the President, met Calvera’s foreign minister' } },

  { id: 'e-visas-desk', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a visitor’s papers checked at a desk', name: 'The visa desk',
    text: "Under a law Congress passed, a visitor from Calvera may stay in the country for up to ninety days. On Monday a clerk of the federal immigration service checked Mr Tavares’s papers against the list in the law, and stamped his passport for a ninety-day stay.",
    outcome: 'execute', route: { D1: ['president'], E1: ['carryout'] },
    cues: { E1: 'a clerk of the federal immigration service checked Mr Tavares’s papers against the list in the law' } }
]);
