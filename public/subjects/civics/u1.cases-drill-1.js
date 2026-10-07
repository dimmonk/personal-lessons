// Civics, Unit One: drill stories, first part: the first stage (the key's first question on its own, on clean stories). Every drill story is new: none of them appears in a card. Each carries the words
// that decide the first question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong family
// and why it fails here. wouldChange, on the few cases that need it, says what would make it a different answer.
// These cases, with the other route-stage cases and the return cases, are the bank that later units draw their
// earlier-unit items from.

FC.cases('civics', 'u1', [

  { id: 'g-postage', use: 'drill', tier: 'clean', setting: 'money', topic: 'a cheaper stamp',
    text: "The price of a stamp has gone up twice in two years. On Tuesday the House of Representatives voted for a bill that would cut the price of a stamp by two cents. The Senate has not voted yet.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House of Representatives voted for a bill that would cut the price of a stamp by two cents' },
    reason: { D1: 'The final call is a vote by lawmakers: {cue:D1}. The Senate has not voted yet, but nobody else decides anything.' },
    not: { outcome: 'president', why: 'Stamps are sold by a government office, which can sound like the answer. But nobody at that office decides anything here: the House votes.' } },

  { id: 'g-parkdogs', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'dogs on national park trails',
    text: "On Monday the federal parks agency announced that dogs must be kept on a leash on every trail in the national parks from May 1. Rangers will check.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal parks agency announced that dogs must be kept on a leash on every trail in the national parks' },
    reason: { D1: 'An office of the whole country made the call: {cue:D1}. There is no vote, no judge, and no state or city.' },
    not: { outcome: 'states', why: 'A leash rule is the sort a town makes for its parks. But this office belongs to the whole country, and the parks it names are national.' } },

  { id: 'g-eviction', use: 'drill', tier: 'clean', setting: 'home', topic: 'unpaid rent',
    text: "Mrs. Fell’s landlord says she owes three months’ rent. She says she paid. On Monday a judge heard them both and ruled that she had paid.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge heard them both and ruled that she had paid' },
    reason: { D1: 'A judge made the final call: {cue:D1}. Mrs. Fell and her landlord are the two sides of the quarrel, and neither decides it.' },
    not: { outcome: 'states', why: 'Renting is covered by state and local rules, which can pull toward the state. But nobody here makes a rule: a judge settles a quarrel.' } },

  { id: 'g-leash', use: 'drill', tier: 'clean', setting: 'community', topic: 'dogs in town parks',
    text: "Dogs have been running loose in the parks of Easton. On Monday the Easton town council voted that every dog in a town park must be on a leash.",
    route: { D1: ['states'] },
    cues: { D1: 'the Easton town council voted that every dog in a town park must be on a leash' },
    reason: { D1: 'A town council made the call: {cue:D1}. It is a town making a rule about its own parks.' },
    not: { outcome: 'president', why: 'An office for national parks could make the same leash rule. Here the council and the parks both belong to the town.' } }
]);
