// Civics, Unit Four: cases shown inside cards, part three. Sending a law back unsigned and forgiving a federal crime.

FC.cases('civics', 'u4', [

  /* ---------- Sending a law back unsigned ---------- */

  { id: 'e-parkpay', use: 'teach', tier: 'clean', setting: 'work', topic: 'a pay rise for park staff', name: 'The park pay rise',
    text: "Congress passed a bill that raises the pay of everyone who works for the national parks by four percent. The bill reached the President’s desk on Monday. On Wednesday the President wrote that the country cannot afford the rise, would not sign the bill, and sent it back to Congress with a letter of objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'would not sign the bill, and sent it back to Congress with a letter of objections' } },

  { id: 'e-postoffices', use: 'check', tier: 'clean', setting: 'community', topic: 'closing two post offices', name: 'The post offices',
    text: "Congress passed a bill to close two federal post offices in the north. The bill arrived on the President’s desk on Friday. On Monday the President returned it to Congress, unsigned, with a note listing objections.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { E1: 'the President returned it to Congress, unsigned, with a note listing objections' },
    reason: { E1: 'Congress has finished with the bill. What the story shows next is the President’s decision: {cue:E1}.' },
    not: { outcome: 'execute', why: 'An office that carries out a law starts from a law already in force. Here the bill is not yet a law, and the President is refusing it.' } },

  /* ---------- Forgiving a federal crime ---------- */

  { id: 'e-taxpardon', use: 'teach', tier: 'clean', setting: 'money', topic: 'false tax forms', name: 'The false tax forms',
    text: "A man was found guilty in a federal court of mailing false tax forms, and the judge sentenced him to two years in prison. After six months the President signed a pardon for him. The man left the prison that evening.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President signed a pardon for him' } },

  { id: 'e-pilot', use: 'check', tier: 'clean', setting: 'work', topic: 'a pilot and a safety form', name: 'The pilot’s form',
    text: "A federal court found a pilot guilty of leaving a test result off a safety form, and sentenced him to a year in prison. Last week the President pardoned him, and the sentence no longer applies.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { E1: 'the President pardoned him, and the sentence no longer applies' },
    reason: { E1: 'A federal court found him guilty, and the President lifts the punishment: {cue:E1}. No judge is asked anything, and no law is being put into practice.' },
    not: { outcome: 'veto', why: 'The President is not refusing a bill Congress passed. A person was found guilty of a crime, and the President forgives it.' } }
]);
