// Civics, Unit One: cases shown inside cards, part one (the word on the second family's card, the four families'
// first and second cases) and the cases asked between cards.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one family share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.D1 is the reason for this case's answer. not names the nearest wrong family
// (a ledger neighbour) and says why it fails for this case.
// All people, places and bills are invented. The first question has no tie-break (the key gives a case one last decision),
// so no case here carries `also`.

FC.cases('civics', 'u1', [

  /* ---------- The word on the second family's card: a case with text only ---------- */
  { id: 'c-application', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a citizenship application', name: 'Rosa’s application',
    text: "Rosa has applied to become a citizen. Her papers went to the immigration service, an office that checks each application, books the interview and sends a letter with the date. No new law was written for Rosa. The office is applying a law that already exists." },

  /* ---------- Congress ---------- */
  { id: 'c-bicycle', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax on imported bicycle parts', name: 'The bicycle-parts tax',
    text: "Bike shops say the federal tax on imported bicycle parts is too high. A bill to lower it passed the House of Representatives last month. On Thursday the Senate voted on the bill too, and it passed.",
    route: { D1: ['congress'] },
    cues: { D1: ['A bill to lower it passed the House of Representatives last month', 'On Thursday the Senate voted on the bill too, and it passed'] } },

  { id: 'c-loans', use: 'teach', tier: 'clean', setting: 'learning', topic: 'more time to repay student loans', name: 'The student loans',
    text: "Students have asked for years for more time to repay their federal loans. On Monday the House voted for a bill that gives them five more years, and on Wednesday the Senate voted for the same bill. A student group called it good news.",
    route: { D1: ['congress'] },
    cues: { D1: 'On Monday the House voted for a bill that gives them five more years, and on Wednesday the Senate voted for the same bill' },
    segments: [
      { text: 'Students have asked for years for more time to repay their federal loans', note: 'That is why the bill exists. It tells you how the matter got here, and says nothing about who made the decision.' },
      { text: 'On Monday the House voted for a bill that gives them five more years, and on Wednesday the Senate voted for the same bill' },
      { text: 'A student group called it good news', note: 'That is a reaction, and it comes after the decision. The decision is what the question asks about.' }
    ] },

  /* ---------- The President or a federal agency ---------- */
  { id: 'c-seatbelt', use: 'teach', tier: 'clean', setting: 'travel', topic: 'how strong a seat belt must be', name: 'The seat belts',
    text: "On Monday the federal road-safety agency published how strong a seat belt must be in every new car, and the crash test each new car must pass. Its inspectors will start testing new cars next month.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal road-safety agency published how strong a seat belt must be in every new car' } },

  { id: 'c-army', use: 'teach', tier: 'clean', setting: 'world', topic: 'ships escorted past pirates', name: 'The escort',
    text: "Pirates have attacked cargo ships in a stretch of sea where many American ships pass. On Tuesday the President ordered two navy ships to sail there and escort the cargo ships through. Shipping companies said they would wait and see.",
    route: { D1: ['president'] },
    cues: { D1: 'the President ordered two navy ships to sail there and escort the cargo ships through' },
    segments: [
      { text: 'Pirates have attacked cargo ships in a stretch of sea where many American ships pass', note: 'That is the trouble that led to the decision. It is not the decision.' },
      { text: 'On Tuesday the President ordered two navy ships to sail there and escort the cargo ships through' },
      { text: 'Shipping companies said they would wait and see', note: 'That is how some companies reacted. They decide nothing in this case.' }
    ] },

  /* ---------- A judge, in any court ---------- */
  { id: 'c-heater', use: 'teach', tier: 'clean', setting: 'home', topic: 'a broken heater', name: 'The broken heater',
    text: "Hana says her landlord must pay to fix the broken heater. The landlord says that Hana must pay. On Friday they each told their story to a judge, and the judge decided that the landlord must pay.",
    route: { D1: ['courts'] },
    cues: { D1: 'they each told their story to a judge, and the judge decided that the landlord must pay' } },

  { id: 'c-fence', use: 'teach', tier: 'clean', setting: 'community', topic: 'a fence on the boundary', name: 'The boundary fence',
    text: "Mr Idowu says his fence is on his own land. His neighbour says it is two feet over the boundary. They could not agree, so on Monday the neighbour asked a judge to settle it.",
    route: { D1: ['courts'] },
    cues: { D1: 'on Monday the neighbour asked a judge to settle it' },
    segments: [
      { text: 'Mr Idowu says his fence is on his own land', note: 'That is one side of the quarrel. It does not tell you who will decide it.' },
      { text: 'His neighbour says it is two feet over the boundary', note: 'That is the other side of the quarrel. It does not tell you who will decide it.' },
      { text: 'on Monday the neighbour asked a judge to settle it' }
    ] },

  /* ---------- A state, city or county government ---------- */
  { id: 'c-market', use: 'teach', tier: 'clean', setting: 'community', topic: 'cars banned from a market square', name: 'The market square',
    text: "Saturday traffic has made the market square in Marlow hard to cross on foot. On Tuesday the city council of Marlow voted to ban cars from the square on Saturdays, starting in June.",
    route: { D1: ['states'] },
    cues: { D1: 'the city council of Marlow voted to ban cars from the square on Saturdays' } },

  { id: 'c-licence', use: 'teach', tier: 'clean', setting: 'travel', topic: 'practice hours before a driving test', name: 'The practice hours',
    text: "In the state of Dunmore, many young drivers fail their first driving test. On Wednesday the Dunmore state legislature voted that every learner must log fifty hours of practice before taking it. Driving instructors welcomed the change.",
    route: { D1: ['states'] },
    cues: { D1: 'the Dunmore state legislature voted that every learner must log fifty hours of practice before taking it' },
    segments: [
      { text: 'In the state of Dunmore, many young drivers fail their first driving test', note: 'That is the problem the vote was about. It is not the decision.' },
      { text: 'the Dunmore state legislature voted that every learner must log fifty hours of practice before taking it' },
      { text: 'Driving instructors welcomed the change', note: 'That is a reaction to the decision. The instructors decide nothing here.' }
    ] },

  /* ---------- Asked between cards ---------- */
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
    not: { outcome: 'congress', why: 'A council votes on a rule much as the House and the Senate vote on a bill. But a town council makes decisions for one town only, and this one is about a town pool.' } },

  { id: 'k-lakeroad', use: 'check', tier: 'varied', setting: 'leisure', topic: 'closing a lake road for a festival',
    text: "Every autumn the county board of Pell County closes the lake road for the leaf festival. Shop owners on the road have asked the board to leave it open this year.",
    route: { D1: ['states'] },
    cues: { D1: 'have asked the board to leave it open this year' },
    reason: { D1: 'The case ends with a request, and it is made to a county’s own government: {cue:D1}. The county board decides about its own road.' },
    not: { outcome: 'courts', why: 'Someone is being asked to decide, and that can sound like a judge. But the people asked here are a county board, who make rules for the county, and nobody has gone to court.' } }
]);
