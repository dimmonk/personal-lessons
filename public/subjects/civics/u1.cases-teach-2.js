// Civics, Unit One: cases shown inside cards, part two (the six look-alike pairs, the five named exceptions,
// the two worked cases). Field guide: see u1.cases-teach-1.js.
// A look-alike pair is two cases with the same story and different last decisions. An exception is a case whose
// story points to one family and whose last decision belongs to another. Neither depends on a tie-break, because the
// first question has none: a case has one last decision, and these cases are where that is practiced.

FC.cases('civics', 'u1', [

  /* ---------- Congress beside the President or a federal agency: a food-label law, then its rules ---------- */
  { id: 'l-label-law', use: 'teach', tier: 'clean', setting: 'health', topic: 'a food-label bill passes',
    text: "Shoppers have asked for years for clearer food labels. On Wednesday the Senate voted to pass a bill that makes every packaged food list how much sugar it contains, as the House had voted in the spring.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted to pass a bill that makes every packaged food list how much sugar it contains' } },

  { id: 'l-label-rules', use: 'teach', tier: 'clean', setting: 'health', topic: 'the food-label rules are written',
    text: "Under the food-label law passed last year, the federal food-safety agency published its rules on Wednesday. The sugar content must go on the front of the package, in letters at least as large as the product’s name.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal food-safety agency published its rules on Wednesday' } },

  /* ---------- Congress beside a judge: a drone law, then someone fined under it ---------- */
  { id: 'l-drone-vote', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a drone bill is voted on',
    text: "People who fly drones for fun have heard that a bill would ban drones within five miles of an airport. On Monday the House voted for it, and the bill now goes to the Senate.",
    route: { D1: ['congress'] },
    cues: { D1: 'On Monday the House voted for it, and the bill now goes to the Senate' } },

  { id: 'l-drone-judge', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a fine for flying a drone',
    text: "Last year a law banned flying drones within five miles of an airport. Ellis was fined for flying his small drone four miles from one. He has asked a judge to decide whether the law covers a drone that small.",
    route: { D1: ['courts'] },
    cues: { D1: 'He has asked a judge to decide whether the law covers a drone that small' } },

  /* ---------- The President or a federal agency beside a judge: a refused application, then a judge asked ---------- */
  { id: 'l-form-refused', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a citizenship application is refused',
    text: "Mr. Okoro applied to become a citizen. On Tuesday the immigration service sent him a letter refusing his application, saying that a form was missing from his papers. He says he sent it.",
    route: { D1: ['president'] },
    cues: { D1: 'the immigration service sent him a letter refusing his application, saying that a form was missing from his papers' } },

  { id: 'l-form-judge', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a refusal is put to a judge',
    text: "Mr. Okoro applied to become a citizen, and the immigration service refused, saying that a form was missing from his papers. He says he sent it. On Friday he asked a judge to decide whether the form was really missing.",
    route: { D1: ['courts'] },
    cues: { D1: 'he asked a judge to decide whether the form was really missing' } },

  /* ---------- A judge beside a state, city or county: a parking ticket, then a parking fine ---------- */
  { id: 'l-parking-judge', use: 'teach', tier: 'clean', setting: 'community', topic: 'a parking ticket is canceled',
    text: "Dana got a parking ticket on Elm Street. She says a tree hid the sign, so she asked a judge to cancel the ticket. The judge heard her on Monday and canceled it.",
    route: { D1: ['courts'] },
    cues: { D1: 'she asked a judge to cancel the ticket. The judge heard her on Monday and canceled it' } },

  { id: 'l-parking-council', use: 'teach', tier: 'clean', setting: 'community', topic: 'parking fines are doubled',
    text: "Drivers keep stopping on Elm Street where the sign says no stopping. On Tuesday the city council voted to double the fine for stopping there, starting in June.",
    route: { D1: ['states'] },
    cues: { D1: 'the city council voted to double the fine for stopping there' } },

  /* ---------- The President or a federal agency beside a state, city or county: an inspector closes a kitchen ---------- */
  { id: 'l-inspect-meat', use: 'teach', tier: 'clean', setting: 'health', topic: 'a meat plant is shut',
    text: "On Tuesday an inspector from the federal food-safety agency visited a meat plant, found dirty floors, and ordered the plant shut until the floors are cleaned.",
    route: { D1: ['president'] },
    cues: { D1: 'an inspector from the federal food-safety agency visited a meat plant, found dirty floors, and ordered the plant shut' } },

  { id: 'l-inspect-state', use: 'teach', tier: 'clean', setting: 'health', topic: 'a restaurant kitchen is shut',
    text: "On Tuesday an inspector from the Dunmore state health department visited a restaurant kitchen, found dirty floors, and ordered the kitchen shut until the floors are cleaned.",
    route: { D1: ['states'] },
    cues: { D1: 'an inspector from the Dunmore state health department visited a restaurant kitchen, found dirty floors, and ordered the kitchen shut' } },

  /* ---------- Congress beside a state, city or county: a cut in the tax on income ---------- */
  { id: 'l-tax-house', use: 'teach', tier: 'clean', setting: 'money', topic: 'a cut in the tax on income, in Congress',
    text: "On Friday the House of Representatives voted to cut the tax on income for families who earn under $40,000 a year. The bill now goes to the Senate.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House of Representatives voted to cut the tax on income for families who earn under $40,000 a year' } },

  { id: 'l-tax-state', use: 'teach', tier: 'clean', setting: 'money', topic: 'a cut in the tax on income, in a state',
    text: "On Friday the legislature of the state of Orland voted to cut the state’s own tax on income for families who earn under $40,000 a year. The new rate starts in January.",
    route: { D1: ['states'] },
    cues: { D1: 'the legislature of the state of Orland voted to cut the state’s own tax on income for families who earn under $40,000 a year' } },

  /* ---------- The named exceptions ---------- */
  { id: 'x-signing', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a law that makes a river valley a park', name: 'The signed park law',
    text: "In March the House and the Senate both passed a bill that makes the Calder River valley a protected park. On Tuesday the President signed the bill at a ceremony, with the mayors of the valley towns standing behind her.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House and the Senate both passed a bill that makes the Calder River valley a protected park' },
    segments: [
      { text: 'the House and the Senate both passed a bill that makes the Calder River valley a protected park' },
      { text: 'On Tuesday the President signed the bill at a ceremony', note: 'That is the last thing in the story, and it sounds like a decision. Look at what the signature adds: the bill was already passed, and every word of it was already settled by the votes.' },
      { text: 'the mayors of the valley towns standing behind her', note: 'The mayors are there to watch. Nothing in the case says they decide anything.' }
    ] },

  { id: 'x-treaty', use: 'teach', tier: 'misleading', setting: 'world', topic: 'a trade agreement signed, then sent to the Senate', name: 'The agreement and the Senate',
    text: "After a week of talks with the officials of Brennia, the President signed a trade agreement with that country on Monday. The agreement is called a treaty, and it does not take effect until the Senate votes to approve it. The Senate will vote on it next month.",
    route: { D1: ['congress'] },
    cues: { D1: ['it does not take effect until the Senate votes to approve it', 'The Senate will vote on it next month'] },
    segments: [
      { text: 'After a week of talks with the officials of Brennia, the President signed a trade agreement with that country on Monday', note: 'That is something the President did, and dealing with another country usually belongs to the President. If the case stopped here the answer would be {a:D1.president}. It does not stop here.' },
      { text: 'The agreement is called a treaty, and it does not take effect until the Senate votes to approve it', note: 'This tells you the agreement needs the Senate. The sentence after it says when the Senate decides, and that is the sentence that settles the case.' },
      { text: 'The Senate will vote on it next month' }
    ] },

  { id: 'x-trial', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a department head is tried in the Senate', name: 'The department head on trial',
    text: "The head of a federal department is accused of taking money from a company in return for contracts. On Tuesday the House voted to charge him. This week the Senate is holding a trial, and on Friday the senators will vote on whether he is guilty.",
    route: { D1: ['congress'] },
    cues: { D1: ['the House voted to charge him', 'the senators will vote on whether he is guilty'] },
    segments: [
      { text: 'The head of a federal department is accused of taking money from a company in return for contracts', note: 'That is the accusation. It tells you why this is happening, and it does not say who decides.' },
      { text: 'On Tuesday the House voted to charge him', note: 'That is a vote by lawmakers, so it points to the same answer. But the part of the story that sounds like a court comes after it, and that is the part to read.' },
      { text: 'This week the Senate is holding a trial, and on Friday the senators will vote on whether he is guilty' }
    ] },

  { id: 'x-loanrule', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a loan rule is put to a judge', name: 'The loan rule',
    text: "In June the federal lending agency published a rule that every loan contract must show the full cost of the loan on its first page. A trade group for lenders says the agency has gone too far. On Monday the group asked a judge to block the rule.",
    route: { D1: ['courts'] },
    cues: { D1: 'On Monday the group asked a judge to block the rule' },
    segments: [
      { text: 'In June the federal lending agency published a rule that every loan contract must show the full cost of the loan on its first page', note: 'That is an office making a decision. If the story stopped here the answer would be {a:D1.president}. It does not stop here.' },
      { text: 'A trade group for lenders says the agency has gone too far', note: 'That is a complaint. A complaint is not a decision, and it does not say who is being asked to decide.' },
      { text: 'On Monday the group asked a judge to block the rule' }
    ] },

  { id: 'x-statejudge', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a county dog rule is ruled on in a state court', name: 'The dog rule',
    text: "The county of Hale has a rule that no household may keep more than three dogs. Mrs. Lund keeps four, and the county told her to give one away. On Monday a judge in the state’s court heard both sides and ruled that she must give one dog away.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge in the state’s court heard both sides and ruled that she must give one dog away' },
    segments: [
      { text: 'The county of Hale has a rule that no household may keep more than three dogs', note: 'That is a rule made by a county. It is how the matter got here. It is not the last decision in the case.' },
      { text: 'Mrs. Lund keeps four, and the county told her to give one away', note: 'That is the county applying its rule. It comes before the last decision.' },
      { text: 'a judge in the state’s court heard both sides and ruled that she must give one dog away' }
    ] },

  /* ---------- The worked cases ---------- */
  { id: 'w-doll', use: 'teach', tier: 'clean', setting: 'home', topic: 'a toy fails a lead test', name: 'The failed doll test',
    text: "Last year Congress passed a law that every toy sold in the country must be tested for lead. On Tuesday the federal consumer-safety agency ordered the Bright Toys company to stop selling a doll that failed the test, and sent inspectors to the factory.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal consumer-safety agency ordered the Bright Toys company to stop selling a doll that failed the test' } },

  { id: 'w-bags', use: 'teach', tier: 'misleading', setting: 'travel', topic: 'a fine for lost luggage is put to a judge', name: 'The lost-bag fine',
    text: "Last month the House and the Senate passed a law that fines an airline $200 for every bag it loses. This week one airline asked a judge to decide whether the fine applies to bags lost by a partner airline that flew the last part of the trip.",
    route: { D1: ['courts'] },
    cues: { D1: 'asked a judge to decide whether the fine applies to bags lost by a partner airline' } }
]);
