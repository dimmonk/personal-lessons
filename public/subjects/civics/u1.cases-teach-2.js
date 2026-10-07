// Civics, Unit One: stories shown inside cards, part two (the two look-alike pairs, the three named exceptions,
// the worked story). Field guide: see u1.cases-teach-1.js.
// A quick lesson (lesson standard section 19). A look-alike pair is two cases with the same story and different last decisions. An exception is a case whose
// story points to one family and whose last decision belongs to another. Neither depends on a tie-break, because the
// first question has none: a case has one last decision, and these cases are where that is practiced.

FC.cases('civics', 'u1', [

  { id: 'l-label-law', use: 'teach', tier: 'clean', setting: 'health', topic: 'a food-label bill passes',
    text: "Shoppers have asked for years for clearer food labels. On Wednesday the Senate voted to pass a bill that makes every packaged food list how much sugar it contains, as the House had voted in the spring.",
    route: { D1: ['congress'] },
    cues: { D1: 'the Senate voted to pass a bill that makes every packaged food list how much sugar it contains' } },

  { id: 'l-label-rules', use: 'teach', tier: 'clean', setting: 'health', topic: 'the food-label rules are written',
    text: "Under the food-label law passed last year, the federal food-safety agency published its rules on Wednesday. The sugar content must go on the front of the package, in letters at least as large as the product’s name.",
    route: { D1: ['president'] },
    cues: { D1: 'the federal food-safety agency published its rules on Wednesday' } },

  { id: 'l-inspect-meat', use: 'teach', tier: 'clean', setting: 'health', topic: 'a meat plant is shut',
    text: "On Tuesday an inspector from the federal food-safety agency visited a meat plant, found dirty floors, and ordered the plant shut until the floors are cleaned.",
    route: { D1: ['president'] },
    cues: { D1: 'an inspector from the federal food-safety agency visited a meat plant, found dirty floors, and ordered the plant shut' } },

  { id: 'l-inspect-state', use: 'teach', tier: 'clean', setting: 'health', topic: 'a restaurant kitchen is shut',
    text: "On Tuesday an inspector from the Dunmore state health department visited a restaurant kitchen, found dirty floors, and ordered the kitchen shut until the floors are cleaned.",
    route: { D1: ['states'] },
    cues: { D1: 'an inspector from the Dunmore state health department visited a restaurant kitchen, found dirty floors, and ordered the kitchen shut' } },

  { id: 'x-signing', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a law that makes a river valley a park', name: 'The signed park law',
    text: "In March the House and the Senate both passed a bill that makes the Calder River valley a protected park. On Tuesday the President signed the bill at a ceremony, with the mayors of the valley towns standing behind her.",
    route: { D1: ['congress'] },
    cues: { D1: 'the House and the Senate both passed a bill that makes the Calder River valley a protected park' },
    segments: [
      { text: 'the House and the Senate both passed a bill that makes the Calder River valley a protected park' },
      { text: 'On Tuesday the President signed the bill at a ceremony', note: 'That is the last thing in the story, and it sounds like a decision. But the bill had already passed, and every word of it was settled by the votes.' },
      { text: 'the mayors of the valley towns standing behind her', note: 'The mayors are there to watch. Nothing here says they decide anything.' }
    ] },

  { id: 'x-trial', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a department head is tried in the Senate', name: 'The department head on trial',
    text: "The head of a federal department is accused of taking money from a company in return for contracts. On Tuesday the House voted to charge him. This week the Senate is holding a trial, and on Friday the senators will vote on whether he is guilty.",
    route: { D1: ['congress'] },
    cues: { D1: ['the House voted to charge him', 'the senators will vote on whether he is guilty'] },
    segments: [
      { text: 'The head of a federal department is accused of taking money from a company in return for contracts', note: 'That is the accusation. It tells you why this is happening, not who decides.' },
      { text: 'On Tuesday the House voted to charge him', note: 'That is a vote by lawmakers, so it points the same way. But the courtroom words come after it, and that is the part to read.' },
      { text: 'This week the Senate is holding a trial, and on Friday the senators will vote on whether he is guilty' }
    ] },

  { id: 'x-statejudge', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a county dog rule is ruled on in a state court', name: 'The dog rule',
    text: "The county of Hale has a rule that no household may keep more than three dogs. Mrs. Lund keeps four, and the county told her to give one away. On Monday a judge in the state’s court heard both sides and ruled that she must give one dog away.",
    route: { D1: ['courts'] },
    cues: { D1: 'a judge in the state’s court heard both sides and ruled that she must give one dog away' },
    segments: [
      { text: 'The county of Hale has a rule that no household may keep more than three dogs', note: 'That is a rule made by a county. It is how the matter got here, not the final call.' },
      { text: 'Mrs. Lund keeps four, and the county told her to give one away', note: 'That is the county applying its rule. It comes before the final call.' },
      { text: 'a judge in the state’s court heard both sides and ruled that she must give one dog away' }
    ] },

  { id: 'w-bags', use: 'teach', tier: 'misleading', setting: 'travel', topic: 'a fine for lost luggage is put to a judge', name: 'The lost-bag fine',
    text: "Last month the House and the Senate passed a law that fines an airline $200 for every bag it loses. This week one airline asked a judge to decide whether the fine applies to bags lost by a partner airline that flew the last part of the trip.",
    route: { D1: ['courts'] },
    cues: { D1: 'asked a judge to decide whether the fine applies to bags lost by a partner airline' } }
]);
