// Civics, Unit Four: fresh cases kept back for later days (second file: three names, two cases each).

FC.cases('civics', 'u4', [

  /* ---------- Dealing with another country ---------- */

  { id: 'e-ret-teams', use: 'return', tier: 'varied', setting: 'leisure', topic: 'how visiting sports teams are treated',
    text: "The Secretary of State, speaking for the President, flew to Pellora to agree with its government on how the two countries’ teams will be treated when they travel to each other’s games. The ministers signed the agreement at the end of the week.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { D1: 'The Secretary of State, speaking for the President, flew to Pellora to agree with its government', E1: 'agree with its government on how the two countries’ teams will be treated when they travel to each other’s games' },
    reason: { D1: 'The last decision is made by an official speaking for the President: {cue:D1}.',
              E1: 'Two governments settle something between their countries: {cue:E1}. The official sits down with another country’s government for the President, and they sign.' },
    not: { outcome: 'commander', why: 'Nobody in the armed forces is given an order. The two governments agree how teams will be treated.' } },

  { id: 'e-ret-pipeline', use: 'return', tier: 'varied', setting: 'work', topic: 'sharing the cost of an oil pipeline',
    text: "The President sat down with the prime minister of Taldor at the capital on Wednesday to settle how the two countries will share the cost of a new oil pipeline. By Friday they had agreed and signed.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { D1: 'The President sat down with the prime minister of Taldor at the capital on Wednesday', E1: 'to settle how the two countries will share the cost of a new oil pipeline' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}.',
              E1: 'Two countries’ leaders settle something between them: {cue:E1}. They agree and sign, and nobody at home is ordered to do anything.' },
    not: { outcome: 'commander', why: 'No order goes to the armed forces. The President and another country’s leader settle how a cost will be shared.' } },

  /* ---------- Refusing to sign a law ---------- */

  { id: 'e-ret-bicycles', use: 'return', tier: 'varied', setting: 'money', topic: 'a bill lowering a tax on bicycles',
    text: "Congress passed a bill that lowers the tax on bicycles. The President thinks the country needs the money, and on Tuesday returned the bill to Congress, unsigned, with a letter saying so.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { D1: 'on Tuesday returned the bill to Congress, unsigned, with a letter saying so', E1: 'returned the bill to Congress, unsigned' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. The vote in Congress was earlier.',
              E1: 'The bill has passed, and the President answers it with a refusal: {cue:E1}.' },
    not: { outcome: 'pardon', why: 'No one has been charged with a crime. The President is acting on a bill.' } },

  { id: 'e-ret-museums', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a bill for free entry to museums',
    text: "Congress passed a bill that makes entry to every national museum free. The bill reached the President on Thursday. On Monday the President sent it back with a letter of objections, and no signature.",
    outcome: 'veto', route: { D1: ['president'], E1: ['sendback'] },
    cues: { D1: 'On Monday the President sent it back with a letter of objections, and no signature', E1: 'sent it back with a letter of objections, and no signature' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}.',
              E1: 'The bill is passed, and the President sends it back unsigned: {cue:E1}.' },
    not: { outcome: 'execute', why: 'The bill has not become a law that anyone is putting into practice. The President is refusing it.' } },

  /* ---------- Forgiving a federal crime ---------- */

  { id: 'e-ret-sailor', use: 'return', tier: 'varied', setting: 'travel', topic: 'protected birds brought in by a sailor',
    text: "A sailor was convicted in a federal court of bringing protected birds into the country, and was fined $2,000. On Friday the President signed a pardon for him, and the fine was canceled.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { D1: 'the President signed a pardon for him, and the fine was canceled', E1: 'the President signed a pardon for him' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. The federal court decided earlier.',
              E1: 'A federal crime was judged, and the President lifts the punishment: {cue:E1}.' },
    not: { outcome: 'veto', why: 'No bill is in the story. The President is acting on a person.' } },

  { id: 'e-ret-pharmacist', use: 'return', tier: 'varied', setting: 'health', topic: 'selling medicine without a license',
    text: "A pharmacist was charged in a federal court with selling medicine without a license that a federal law requires. Before the trial began, the President forgave the crime. The pharmacist will not be punished.",
    outcome: 'pardon', route: { D1: ['president'], E1: ['forgive'] },
    cues: { D1: 'Before the trial began, the President forgave the crime', E1: 'the President forgave the crime' },
    reason: { D1: 'The last decision in the story is the President’s: {cue:D1}. No judge is asked anything after it.',
              E1: 'A federal crime was charged, and the President means the punishment never comes: {cue:E1}.' },
    not: { outcome: 'veto', why: 'No bill is in the story. The President is acting on a person who was charged with a crime.' } }
]);
