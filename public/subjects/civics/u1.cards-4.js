// Civics, Unit One, part four: the fourth family (a state, city or county government), its look-alike pairs with
// the other three, the exception "a judge in a state's court", and the wrong idea that the first part named decides.

FC.cards('civics', 'u1', [

  /* ---------- The fourth family: a state, city or county government ---------- */
  { id: 'meet-states', kind: 'meet', family: 'states',
    link: 'Three kinds so far, and all of them are about the whole country, or about a judge. The fourth is a government that covers only one place: a state, a city, a town or a county.',
    case: 'c-market', mark: 'D1',
    strip: [
      'There is a city, Marlow, and its council: the group of people who make decisions for the city.',
      'Saturday traffic is the problem. It makes the market square hard to cross on foot.',
      'The city council voted to ban cars from the square on Saturdays.',
      'The decision is about one place: one square in one city.',
      'No lawmakers of the whole country, no office of the whole country, and no judge appear.'
    ],
    explain: [
      'What you are shown is a city deciding something about itself. The council of Marlow voted, and the vote covers one square. A city’s council makes decisions for that city in the way Congress makes them for the whole country: by voting.',
      'The country is governed on more than one level. Besides the government of the whole country, each state has a government of its own, with a legislature, which is its lawmaking body, and a governor, who leads it. Inside a state, cities, towns and counties have governments of their own too, with a council, a board or a mayor. This kind covers all of them: a decision made by the government of a state, or of a city, a town or a county.',
      'The kind does not depend on how big the place is, on whether the decision is a vote or an order from a mayor or a governor, or on whether it is about something large or small. What matters is that the decision-maker belongs to one place and not to the whole country.',
      'One more thing, because it is easy to get wrong: a judge in a state’s court is not in this kind. A judge is a judge, whichever court the judge sits in, and the kind for a judge is the one you have just met.'
    ],
    feature: { step: 'D1', option: 'states' },
    name: 'The answer, and so the name of the kind, is {a:D1.states}. “Government” here means the people and offices who make the decisions for a place. A state’s government is its lawmakers, its governor and its offices. A city, a town or a county has a council or a board, and often a mayor.' },

  { id: 'again-states', kind: 'again', family: 'states',
    link: 'The market square gave you what to point to: {needs:states}. Here is a second case, and this time the government is a whole state, not a city.',
    first: 'c-market', second: 'c-licence', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a market square, a driving test) and ignore how big the place is (a city, a state). Look at one thing only: whose government made the last decision?',
    prompt: { kind: 'phrase', answer: 'the Dunmore state legislature voted' },
    shared: [
      'In both cases a government that covers one place votes on something about that place. The city of Marlow votes to ban cars from one square. The state of Dunmore votes to change what a learner must do before a driving test, for the whole state. In both, the vote is the last decision.',
      'One place is a city and the other is a state, and one rule is about a square and the other is about driving tests. They share only this: the decision-maker belongs to one place and not to the whole country. That is what {a:D1.states} names.'
    ] },

  { id: 'portrait-states', kind: 'portrait', family: 'states',
    link: 'You know what to point to for {a:D1.states}. This card fills in the rest of the picture, and says what these governments decide.',
    typical: [
      'There is a government that covers one place, and it is named: “the city council of Marlow”, “the Dunmore state legislature”, “the county board”, “the governor of the state”, “the mayor”.',
      'What these governments decide is much of daily life: public schools, driving rules, marriage licences, most crimes, renting a home, local streets, parking and buildings. These are mostly state and local matters, and they differ from state to state.',
      'The decision can be a vote, a rule from a mayor or a governor, or an order from one of the state’s or city’s own offices, such as a state health department.',
      'The case can also end with a request: “asked the council”, “asked the governor”. A request to a state, a city or a county has the same answer as a decision by it.',
      'A federal law or a court can be in the story. If so, it is how the matter got there, or what comes after. The case still ends with the decision of the state, the city or the county.'
    ],
    not: [
      'The word “state” on its own is not enough. A story about the State Department is about an office of the government of the whole country, which handles dealings with other countries.',
      'And a judge in a state’s court is not the state. The kind here is the government: lawmakers, governor, offices, a council or a board. A judge is a judge.'
    ],
    wild: ['"The city council voted..."', '"The state legislature passed..."', '"A county ordinance..."', '"The governor ordered..."', '"You need a permit from the town."'],
    self: 'In your own life this is the kind that makes most of the rules you meet day to day: what you need to drive, to rent a home, to start a business, where you may park, when the pool is open. Its rules also change when you move.',
    ask: '"Whose government made this decision: one state’s, or one city’s, town’s or county’s?" If it is, the answer is {a:D1.states}.' },

  { id: 'check-states', kind: 'check', after: 'states',
    case: 'k-pool',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case is the last decision, made by a town’s own government? Tap it.',
           answer: 'the Oakby town council voted to open it on Sundays from July' } },

  /* ---------- The fourth look-alike pair ---------- */
  { id: 'look-courts-states', kind: 'lookalike', ledger: 'courts~states',
    h: 'A judge and a city council, on one street',
    link: 'A judge and a city can be in one story about one street. This card puts the two side by side.',
    cases: ['l-parking-judge', 'l-parking-council'],
    instruction: 'Both cases are about parking on Elm Street. Compare one thing: whose decision does each story end on?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'l-parking-council' },
    difference: [
      'In Case A a driver has a ticket and asks a judge to cancel it, and the judge does. The ticket is in the story as how the matter reached the judge. The story ends on the judge’s decision. The answer is {a:D1.courts}.',
      'In Case B nobody is in court. The city council votes to double the fine for stopping on Elm Street. The council is a city’s own government, deciding what the rule will be. The answer is {a:D1.states}.',
      'A parking fine belongs to the city in both stories, so you cannot tell the cases apart by their subject. What separates them is whether the story ends with a council making a rule or with a judge deciding about a ticket.'
    ] },

  { id: 'exc-statejudge', kind: 'exception', ledger: 'courts~states', looksLike: 'states', is: 'courts',
    h: 'A judge in a state’s own court',
    link: 'The last card kept the two kinds tidy: a council on one side and a judge on the other. A state has judges of its own, and a state’s judge can rule on a county’s rule. That makes the story sound as if it all belongs to the state.',
    case: 'x-statejudge',
    setup: 'The case is full of a county and a state: a county’s rule, a county’s order, and a judge in the state’s own court. A decision by the government of a state or a county is what you point to for {a:D1.states}. Yet the answer for this case is {a:D1.courts}.',
    prompt: { kind: 'phrase', answer: 'a judge in the state’s court heard both sides and ruled' },
    because: [
      'Read who makes the last decision. The county made a rule and told Mrs Lund to give a dog away, and those came first. The last decision is the judge’s: the judge heard both sides and ruled that she must do it.',
      'A judge in a state’s court is still a judge. The state’s own government is its lawmakers, its governor and its offices, and the judge is not one of them. The state did not decide this case. A judge did.',
      'So the question is about what the decision-maker is, not which court the judge sits in. Any judge, whether the court belongs to the whole country or to a state, is in the third kind.'
    ],
    take: 'This holds the other way round too: a judge of the whole country’s courts and a judge of a state’s courts are both in the kind for a judge. The question is not which court. It is who decides.' },

  /* ---------- The fifth and sixth look-alike pairs ---------- */
  { id: 'look-president-states', kind: 'lookalike', ledger: 'president~states',
    h: 'The same inspector, for the whole country or for one state',
    link: 'An office of the whole country and an office of one state can do the same work. This card puts two such offices side by side.',
    cases: ['l-inspect-meat', 'l-inspect-state'],
    instruction: 'Both cases are about an inspector who finds dirty floors and orders a place shut. Compare one thing: whose office does the inspector work for?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'l-inspect-state' },
    difference: [
      'In Case A the inspector works for a federal office, one that belongs to the government of the whole country. The decision is that office’s. The answer is {a:D1.president}.',
      'In Case B the inspector works for a state’s own health department. The decision is that state’s. The answer is {a:D1.states}.',
      'What the inspector does is the same in both cases, word for word. So you cannot tell these two kinds apart by what is done. You can only tell by whose office does it.'
    ] },

  { id: 'look-congress-states', kind: 'lookalike', ledger: 'congress~states',
    h: 'The same tax, voted by Congress or by a state',
    link: 'The last pair is the lawmakers of the whole country and the lawmakers of one state. Both vote on bills, and both can vote on the same sort of matter. This card puts them side by side.',
    cases: ['l-tax-house', 'l-tax-state'],
    instruction: 'Both cases are about cutting the tax on income for families who earn under $40,000 a year. Compare one thing: do the lawmakers make rules for the whole country, or for one state?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'l-tax-state' },
    difference: [
      'In Case A the House of Representatives votes, and the bill goes to the Senate. These lawmakers make laws for the whole country, so the tax is the national tax on income. The answer is {a:D1.congress}.',
      'In Case B the legislature of the state of Orland votes, and the cut is to the state’s own tax. These lawmakers belong to one state. The answer is {a:D1.states}.',
      'Both the whole country and a state can tax income, so the subject is the same in both. What separates the cases is which lawmakers voted, and whose tax it is.'
    ] },

  /* ---------- A wrong idea: the first part named decides ---------- */
  { id: 'refute-first', kind: 'refute', about: 'D1',
    h: 'A wrong idea: “the first part named is the one that decided”',
    link: 'Many cases name two or three parts of government, and the part named first is often an office or a state. That tempts people to stop reading at the first name.',
    idea: '"The story begins with the office that made the rule, so it is the office’s decision."',
    verdict: 'This is wrong.',
    right: [
      'The first part named is usually how the matter got where it is. A story about a rule taken to court begins with the office that made the rule and ends with a judge being asked. A story about a law applied by an office begins with the lawmakers who voted. The beginning explains why there is something to decide. It is not the decision.',
      'The question asks for the last decision in the case, or the one it asks for. So read to the end, find the last thing decided or asked, and then ask whose it is. If the story begins with lawmakers and ends with an office, the answer is {a:D1.president}. If it begins with an office and ends with a request to a judge, the answer is {a:D1.courts}.'
    ],
    testedBy: ['g-claim-first'] }
]);
