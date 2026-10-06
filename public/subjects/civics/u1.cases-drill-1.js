// Civics, Unit One: drill cases, first part: the first stage (the key's first question on its own, on clean cases) and
// the clean cases of the second stage. Every drill case is new: none of them appears in a card. Each carries the words
// that decide the first question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong family
// and why it fails here. wouldChange says what would make it a different answer.
// These cases, with the other route-stage cases and the return cases, are the bank that later units draw their
// earlier-unit items from.

FC.cases('civics', 'u1', [

  /* ---------- the first stage: one question, clean cases ---------- */
  { id: 'g-postage', use: 'drill', tier: 'clean', setting: 'money', topic: 'a cheaper stamp',
    text: "The price of a stamp has gone up twice in two years. On Tuesday the House of Representatives voted for a bill that would cut the price of a stamp by two cents. The Senate has not voted yet.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House of Representatives voted for a bill that would cut the price of a stamp by two cents' },
    reason: { D1: 'The last decision is a vote by lawmakers of the whole country: {cue:D1}. The Senate has not voted, and the case stops before it does. Nobody else decides anything.' },
    not: { outcome: 'president', why: 'Stamps are sold by an office of the government, and that can sound like the answer. But the case shows nobody at that office deciding anything. It shows a vote in the House.' } },

  { id: 'g-schoolyear', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a later start to the school year',
    text: "Parents in the state of Corvin say August is too hot for school. On Thursday the Corvin state legislature voted to start the school year a week later in every public school in the state.",
    route: { D1: ['states'] },
    cues: { D1: 'the Corvin state legislature voted to start the school year a week later in every public school in the state' },
    reason: { D1: 'The last decision is a vote by the lawmakers of one state: {cue:D1}. It is about public schools in that state only.' },
    not: { outcome: 'congress', why: 'A state legislature votes on a bill just as the House and the Senate do. But these lawmakers belong to one state and decide for its schools alone.' } },

  { id: 'g-judgevote', use: 'drill', tier: 'clean', setting: 'work', topic: 'a federal judge is approved',
    text: "The President chose Ms. Aldous to be a federal judge. On Wednesday the Senate voted to approve her, and she will start work next month.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted to approve her' },
    reason: { D1: 'The last decision is a vote in the Senate on a person the President chose: {cue:D1}. The President’s choice came first, and it is how the matter reached the Senate.' },
    not: { outcome: 'president', why: 'Choosing Ms. Aldous was the President’s act, and it can sound like the last decision. But the case reports the Senate’s vote, and that vote comes after the choice.' } },

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
    not: { outcome: 'president', why: 'The same leash rule could be made by an office for national parks. Here the council is a town’s own, and the parks are the town’s.' } },

  { id: 'g-army', use: 'drill', tier: 'clean', setting: 'community', topic: 'help for towns cut off by a storm',
    text: "A storm has cut three island towns off from the mainland. On Saturday the President ordered an army helicopter unit to fly food and medicine to the towns.",
    route: { D1: ['president'] },
    cues: { D1: 'the President ordered an army helicopter unit to fly food and medicine to the towns' },
    reason: { D1: 'The last decision is the President’s: {cue:D1}. Nobody votes on anything, nobody is a judge, and no state or city is deciding.' },
    not: { outcome: 'congress', why: 'Sending food and medicine costs money, and money can sound like a matter for lawmakers. But the case shows the President giving an order, and no vote.' } },

  { id: 'g-confession', use: 'drill', tier: 'clean', setting: 'community', topic: 'a confession kept out of a trial',
    text: "A man is charged with robbing a shop. At his trial on Friday his lawyer asked the judge to keep his confession out of evidence.",
    route: { D1: ['courts'] },
    cues: { D1: 'his lawyer asked the judge to keep his confession out of evidence' },
    reason: { D1: 'The case ends with a request: {cue:D1}. The decision has been put to a judge, so it is the judge’s.' },
    not: { outcome: 'president', why: 'A man is charged with a crime, and charging people can sound like the work of an office. But nobody in the case is charging or enforcing anything now. A lawyer is asking a judge to decide.' } },

  /* ---------- the second stage, clean cases ---------- */
  { id: 'g-lab', use: 'drill', tier: 'clean', setting: 'learning', topic: 'money cut from a research lab',
    text: "A new federal research lab in Brindle is costing three times what was planned. On Thursday the House and the Senate voted to cut the money for it by half.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House and the Senate voted to cut the money for it by half' },
    reason: { D1: 'The last decision is a pair of votes by lawmakers of the whole country: {cue:D1}. The lab belongs to the government of the whole country, but the decision about its money was voted.' },
    not: { outcome: 'president', why: 'The lab is a federal one, and a federal lab can sound like the President’s. But the case ends with two votes, and nobody at the lab or in the President’s office decides anything.' },
    wouldChange: 'If the case ended with the head of the lab, or an office, deciding how to spend what is left, the answer would be {a:D1.president}.' },

  { id: 'g-library', use: 'drill', tier: 'clean', setting: 'learning', topic: 'longer library hours',
    text: "Readers in Fairfield have said the town library closes too early. On Monday the mayor of Fairfield announced that the library will stay open until 9 p.m. on weekdays.",
    route: { D1: ['states'] },
    cues: { D1: 'the mayor of Fairfield announced that the library will stay open until 9 p.m. on weekdays' },
    reason: { D1: 'The last decision is made by the mayor of a town: {cue:D1}. A town is deciding about its own library.' },
    not: { outcome: 'president', why: 'A mayor is one person deciding, as the President does. But a mayor leads a town, and the President leads the government of the whole country.' },
    wouldChange: 'If the case ended with a federal office ordering the library to change its hours, the answer would be {a:D1.president}.' },

  { id: 'g-contract', use: 'drill', tier: 'clean', setting: 'work', topic: 'a late delivery of flour',
    text: "A bakery says a supplier delivered flour a week late and spoiled a big order. The supplier says the contract allowed it. On Wednesday a judge heard both of them and decided for the bakery.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge heard both of them and decided for the bakery' },
    reason: { D1: 'The last decision is a judge’s: {cue:D1}. The bakery and the supplier are the two sides of a quarrel.' },
    not: { outcome: 'president', why: 'A contract between two firms can seem like a matter for an office that deals with business. But no office appears, and the quarrel is settled by a judge.' },
    wouldChange: 'If the case ended with a state’s lawmakers voting on a rule for contracts between firms, the answer would be {a:D1.states}.' },

  { id: 'g-taxoffice', use: 'drill', tier: 'clean', setting: 'money', topic: 'letters about late tax forms',
    text: "People who did not file their tax forms by April are getting letters this week. The federal tax office is sending a notice to each of them, asking for the forms.",
    route: { D1: ['president'] },
    cues: { D1: 'The federal tax office is sending a notice to each of them' },
    reason: { D1: 'The last decision is made by an office of the government of the whole country: {cue:D1}. The people who get the letters are not deciding anything.' },
    not: { outcome: 'congress', why: 'Taxes are decided by lawmakers, and that can pull toward them. But the case is about an office sending notices, and no vote appears.' },
    wouldChange: 'If the case said the House had voted to change the tax forms, the last decision would be a vote, and the answer would be {a:D1.congress}.' },

  { id: 'g-noise', use: 'drill', tier: 'clean', setting: 'home', topic: 'music after ten at night',
    text: "A tenant says the noise from the apartment above keeps her awake. She has asked a judge to order the upstairs tenant to stop playing music after ten at night.",
    route: { D1: ['courts'] },
    cues: { D1: 'She has asked a judge to order the upstairs tenant to stop playing music after ten at night' },
    reason: { D1: 'The case ends with a request: {cue:D1}. The decision has been put to a judge, so it is the judge’s.' },
    not: { outcome: 'states', why: 'A noise quarrel in an apartment building can sound like a matter for the town. But nobody in the case is making a rule. A tenant is asking a judge to decide.' },
    wouldChange: 'If the case ended with the town council voting to ban loud music after ten, the answer would be {a:D1.states}.' },

  { id: 'g-hairlicence', use: 'drill', tier: 'clean', setting: 'work', topic: 'the fee for a hairdresser’s license',
    text: "Hairdressers in the state of Calder must hold a state license. On Tuesday the Calder state legislature voted to lower the license fee from $120 to $80.",
    route: { D1: ['states'] },
    cues: { D1: 'the Calder state legislature voted to lower the license fee from $120 to $80' },
    reason: { D1: 'The last decision is a vote by the lawmakers of one state: {cue:D1}. The license is a state’s own.' },
    not: { outcome: 'congress', why: 'Lowering a fee by a vote is just what the House and the Senate do. But these lawmakers belong to one state and set a fee that only that state’s hairdressers pay.' },
    wouldChange: 'If the case ended with a federal office announcing a national fee, the answer would be {a:D1.president}.' }
]);
