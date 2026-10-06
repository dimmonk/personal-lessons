// Civics, Unit One: cases shown inside cards, part one (the word on the second family's card, the four families'
// first and second cases) and the cases asked between cards.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one family share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.D1 is the reason for this case's answer. not names the nearest wrong family
// (a ledger neighbor) and says why it fails for this case.
// All people, places and bills are invented. The first question has no tie-break (the key gives a case one last decision),
// so no case here carries `also`.

FC.cases('civics', 'u1', [

  { id: 'c-application', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a citizenship application', name: 'Rosa’s application',
    text: "Rosa has applied to become a citizen. Her papers went to the immigration service, an office that checks each application, books the interview and sends a letter with the date. No new law was written for Rosa. The office is applying a law that already exists." },

  { id: 'c-bicycle', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax on imported bicycle parts', name: 'The bicycle-parts tax',
    text: "Bike shops say the federal tax on imported bicycle parts is too high. A bill to lower it passed the House of Representatives last month. On Thursday the Senate voted on the bill too, and it passed.",
    route: { D1: ['congress'] },
    cues: { D1: ['A bill to lower it passed the House of Representatives last month', 'On Thursday the Senate voted on the bill too, and it passed'] } },

  { id: 'c-seatbelt', use: 'teach', tier: 'clean', setting: 'travel', topic: 'how strong a seat belt must be', name: 'The seat belts',
    text: "On Monday the federal road-safety agency published how strong a seat belt must be in every new car, and the crash test each new car must pass. Its inspectors will start testing new cars next month.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal road-safety agency published how strong a seat belt must be in every new car' } },

  { id: 'c-heater', use: 'teach', tier: 'clean', setting: 'home', topic: 'a broken heater', name: 'The broken heater',
    text: "Hana says her landlord must pay to fix the broken heater. The landlord says that Hana must pay. On Friday they each told their story to a judge, and the judge decided that the landlord must pay.",
    route: { D1: ['courts'] },
    cues: { D1: 'they each told their story to a judge, and the judge decided that the landlord must pay' } },

  { id: 'c-market', use: 'teach', tier: 'clean', setting: 'community', topic: 'cars banned from a market square', name: 'The market square',
    text: "Saturday traffic has made the market square in Marlow hard to cross on foot. On Tuesday the city council of Marlow voted to ban cars from the square on Saturdays, starting in June.",
    route: { D1: ['states'] },
    cues: { D1: 'the city council of Marlow voted to ban cars from the square on Saturdays' } },

  { id: 'k-farmers', use: 'check', tier: 'clean', setting: 'money', topic: 'help for farmers after a drought',
    text: "Wheat farmers lost much of their crop to the drought. On Wednesday the Senate voted to give them $2 billion in help, and the bill now goes to the House. Farm groups said they were relieved.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted to give them $2 billion in help, and the bill now goes to the House' },
    segments: [
      { text: 'Wheat farmers lost much of their crop to the drought', note: 'That is why the money is being voted. It is not who decides.' },
      { text: 'the Senate voted to give them $2 billion in help, and the bill now goes to the House' },
      { text: 'Farm groups said they were relieved', note: 'That is a reaction to the vote. Farm groups do not decide anything in this case.' }
    ],
    reason: { D1: 'The last decision is a vote in the Senate, and the case ends by sending the bill to the House for its own vote. Both are lawmakers of the whole country. Nobody in the case is a judge, an office or the President.' },
    not: { outcome: 'president', why: 'The money is for farmers, and an office may well hand it out one day. But nothing in the case shows the President or an office deciding anything. It shows two votes by lawmakers.' } },

  { id: 'k-ferry', use: 'check', tier: 'clean', setting: 'travel', topic: 'lifejackets on ferries',
    text: "A ferry sank last year. On Monday the federal maritime-safety agency told every ferry company that each ferry must carry a lifejacket for every passenger, and that its inspectors will check.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal maritime-safety agency told every ferry company that each ferry must carry a lifejacket for every passenger' },
    reason: { D1: 'The decision is made by an office of the government of the whole country: {cue:D1}. Nobody in the case votes on a bill, nobody is a judge, and no state or city is involved.' },
    not: { outcome: 'congress', why: 'A lifejacket rule can sound like a law, and laws come from lawmakers. But the case shows no vote in the House or the Senate. It shows an office telling companies what they must do.' } },

  { id: 'k-lease', use: 'check', tier: 'clean', setting: 'home', topic: 'a lease that may have ended',
    text: "Jamal’s landlord says his lease ended in June. Jamal says it ran to December. Jamal’s lawyer has asked a judge to look at the lease and decide.",
    route: { D1: ['courts'] },
    cues: { D1: 'asked a judge to look at the lease and decide' },
    reason: { D1: 'The case ends with a request: {cue:D1}. It has not been decided yet, but the decision has been put to a judge, so it is the judge’s.' },
    not: { outcome: 'states', why: 'Renting a home is a matter states and cities often make rules about, and a lease may be under a state’s law. But nobody in the case is making a rule. A person is asking a judge to decide a quarrel.' } },

  { id: 'k-pool', use: 'check', tier: 'clean', setting: 'community', topic: 'opening the town pool on Sundays',
    text: "Swimmers in Oakby complained that the town pool is closed on Sundays. On Thursday the Oakby town council voted to open it on Sundays from July. Swimmers cheered.",
    route: { D1: ['states'] },
    cues: { D1: 'the Oakby town council voted to open it on Sundays from July' },
    segments: [
      { text: 'Swimmers in Oakby complained that the town pool is closed on Sundays', note: 'That is the complaint that led to the vote. It is not the decision.' },
      { text: 'the Oakby town council voted to open it on Sundays from July' },
      { text: 'Swimmers cheered', note: 'That is a reaction to the decision. The swimmers do not decide anything.' }
    ],
    reason: { D1: 'The last decision is a vote by the council of a town: it is a town’s own government deciding something about the town’s own pool. No part of the government of the whole country appears.' },
    not: { outcome: 'congress', why: 'A council votes on a rule much as the House and the Senate vote on a bill. But a town council makes decisions for one town only, and this one is about a town pool.' } }
]);
