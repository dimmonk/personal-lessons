// Civics, Unit One: drill cases, first part: the first stage (the key's first question on its own, on clean cases). Every drill case is new: none of them appears in a card. Each carries the words
// that decide the first question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong family
// and why it fails here. wouldChange, on the few cases that need it, says what would make it a different answer.
// These cases, with the other route-stage cases and the return cases, are the bank that later units draw their
// earlier-unit items from.

FC.cases('civics', 'u1', [

  { id: 'g-postage', use: 'drill', tier: 'clean', setting: 'money', topic: 'a cheaper stamp',
    text: "The price of a stamp has gone up twice in two years. On Tuesday the House of Representatives voted for a bill that would cut the price of a stamp by two cents. The Senate has not voted yet.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House of Representatives voted for a bill that would cut the price of a stamp by two cents' },
    reason: { D1: 'The last decision is a vote by lawmakers of the whole country: {cue:D1}. The Senate has not voted, and the case stops before it does. Nobody else decides anything.' },
    not: { outcome: 'president', why: 'Stamps are sold by an office of the government, and that can sound like the answer. But the case shows nobody at that office deciding anything. It shows a vote in the House.' } },

  { id: 'g-parkdogs', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'dogs on national park trails',
    text: "On Monday the federal parks agency announced that dogs must be kept on a leash on every trail in the national parks from May 1. Rangers will check.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal parks agency announced that dogs must be kept on a leash on every trail in the national parks' },
    reason: { D1: 'The decision is made by an office of the government of the whole country: {cue:D1}. No vote, no judge and no state or city appears.' },
    not: { outcome: 'states', why: 'A leash rule is the kind of rule a town makes for its parks. But this office belongs to the government of the whole country, and the parks it names are national.' } },

  { id: 'g-eviction', use: 'drill', tier: 'clean', setting: 'home', topic: 'unpaid rent',
    text: "Mrs. Fell’s landlord says she owes three months’ rent. She says she paid. On Monday a judge heard them both and ruled that she had paid.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge heard them both and ruled that she had paid' },
    reason: { D1: 'The last decision is a judge’s: {cue:D1}. The landlord and Mrs. Fell are the two sides of a quarrel, and neither of them decides it.' },
    not: { outcome: 'states', why: 'Renting a home is a matter of state and local rules, and that can pull toward the state. But nobody in the case is making a rule. A judge is deciding a quarrel between two people.' } },

  { id: 'g-leash', use: 'drill', tier: 'clean', setting: 'community', topic: 'dogs in town parks',
    text: "Dogs have been running loose in the parks of Easton. On Monday the Easton town council voted that every dog in a town park must be on a leash.",
    route: { D1: ['states'] },
    cues: { D1: 'the Easton town council voted that every dog in a town park must be on a leash' },
    reason: { D1: 'The last decision is a vote by the council of a town: {cue:D1}. It is a town making a rule about its own parks.' },
    not: { outcome: 'president', why: 'The same leash rule could be made by an office for national parks. Here the council is a town’s own, and the parks are the town’s.' } }
]);
