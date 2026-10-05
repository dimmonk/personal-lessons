// Civics, Unit Six, part one: the opening card and the first name (a state making a rule of its own).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// "federal" is used by the key and is not a declared term: the opening card says what it means, as Unit One did.

FC.cards('civics', 'u6', [

  { id: 'orient', kind: 'orient',
    h: 'A rule from a state, a city or a county: whose is it, and what else covers it?',
    canDo: 'After this unit you can read a short account of a rule made by a state, a city, a town or a county, and say which of five things it comes to: {plain:police}; {plain:localgov}; {plain:preempted}; {plain:concurrent}; or {plain:protected}. You will be able to point to the words that tell you, and to say why it is not one of the other four.',
    everyday: [
      'You already hear this kind of story every week. “You need a permit from the town.” “It varies from state to state.” “Washington already regulates that.” “On top of the federal minimum, the state requires more.” “They can’t make that illegal.” Each of these is about a rule made close to home, and each can be the sound of a different one of five things.',
      'It matters because you live under several governments at once: the government of the whole country, which this course calls federal, the government of your state, and the government of your city, town or county. All of them make rules, and sometimes they make rules about the same thing. Whether a rule stands, who can change it, and what you can do about it all depend on who made it and on what else covers the same matter. That is also why moving can change the rule that applies to you: much of what you meet in daily life is decided state by state, and town by town.',
      'The first unit taught the key’s first question, which asks whose decision a story ends on. Every case in this unit has already been given the answer {a:D1.states}. So this unit begins where that one stopped, and teaches the two questions that come next: one about who made the rule, and one about what else covers the same matter. Together they sort a case into one of five names.'
    ],
    add: [
      'Two words are used all the way through. A rule is anything that a state, a city, a town or a county decides and that people must follow: a law its lawmakers pass, an order from its governor or mayor, a fee its council sets. And federal, as in the first unit, means belonging to the government of the whole country, as against the government of one state or city: a federal law applies in every state.'
    ],
    map: { branch: 'states' } },

  /* ---------- The first name: a state's own rule on a matter nothing else covers ---------- */
  { id: 'meet-police', kind: 'meet', outcome: 'police',
    link: 'The first unit taught you to ask whose decision a story ends on. Begin with the simplest story in which the answer is a state: it makes a rule, and nothing else gets in the way.',
    case: 'u6-deposit', mark: 'S1',
    strip: [
      'There is a state, Brenmore, and its legislature: the group of people who make the laws for that one state.',
      'The legislature itself passed the law. No city, town or county made it.',
      'The matter is renting a home: how soon a landlord must hand a tenant’s deposit back.',
      'The story names no law of the whole country about deposits, and the law takes away no right the Constitution protects.'
    ],
    explain: [
      'What you are shown is a state making a rule about renting a home. Nothing else happens in the story: no city, no judge, nobody challenging the rule. The legislature passed it, and from then on it is the law in Brenmore.',
      'Why does the state get to decide this? Start with a list. The Constitution gives the federal government a list of powers: among them taxes, borrowing money, trade between the states and with other countries, the rules for becoming a citizen and who may live in the country, making money, running the mail, defending the country and running the federal courts. Renting a home is not on that list. Anything the list does not give is kept by the states, and the Tenth Amendment says so. An amendment is a change added to the Constitution after it was first written, and the Tenth is the one that says the powers not given to the federal government are kept by the states or the people.',
      'That is why so much of daily life is decided state by state: how soon a landlord must return a deposit, how old you must be to hold a driver’s licence, who may marry and when, what public schools teach, which acts are crimes and how they are punished, and which jobs need a licence, such as a barber’s or a plumber’s. A state’s power to make rules for the health, safety and welfare of its people is wide, and it covers far more than the police. Because each state decides for itself, these rules differ from state to state, and they can change when a person moves.',
      'Two things made this case simple. The first is who made the rule: the state itself, through its legislature. A state’s rules can also come from its governor, who leads the state, or from one of its own offices, such as a state licensing board, and all of those count as the state itself. The second is that nothing else covers the matter: the story names no federal law about deposits, and the rule takes away no right, such as the right to speak or to worship. When both are true, the state decides.'
    ],
    feature: { step: 'S1', option: 'own' },
    name: 'The key’s answer to this question is the one printed above, and the name for the whole case is {o:police}. The one question on this card does not give the name by itself: the same answer is also given when a federal law covers the matter or when a right forbids the rule. What gives this case its name is the second thing you were told, that nothing else covers the matter. The key asks that as a second question, and the unit gives it a card of its own once you have met the names it separates. “Reserved” means kept back: the matter was kept back for the states when the Constitution gave the federal government its list. The other name for this, printed below, has the word police in it. There the word does not mean officers. It means the state’s wide power over health, safety and welfare.' },

  { id: 'again-police', kind: 'again', outcome: 'police',
    link: 'The deposit law gave you what to point to, from one case: {needs:police}. Here is a second case with a completely different story.',
    first: 'u6-deposit', second: 'u6-plumber', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a rental, gas pipes) and ignore what the rule says. Look at one thing only: who made the rule.',
    prompt: { kind: 'phrase', answer: 'the Ostrow legislature passed a law' },
    shared: [
      'In both cases the lawmakers of one state made the rule: the Brenmore legislature passed a law on deposits, and the Ostrow legislature passed a law on gas pipes. Neither was made by a city, a town or a county. Neither story names a federal law or a right.',
      'The two stories share nothing else. One is about a rented home and the other about a trade, and one rule is a deadline and the other a licence. So this is not about homes or about work. It holds wherever a state itself makes a rule on a matter that the list of federal powers does not give to Congress and that no right protects. That is what {o:police} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: what the case is about. A rental, a licence, a fence, a boat ramp, a newspaper. The layer underneath is the structure: who made the rule, and what else covers the same matter.',
      'The five names belong to the layer underneath. The same story can carry any of them, because the same matter can be handled in different ways: a noise rule can come from a state or from a town, a life-jacket rule can sit beside a federal law or give way to one. A case about boats is no more likely to be one name than another.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share almost every word and differ in a single thing underneath. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['who made the rule, and what else covers the same matter, which are what the key asks about: {q:S1} and {q:S2}'],
    varies: ['the topic', 'the people', 'the size of the place', 'how much the rule matters', 'whether you think the rule is a good one'] },

  { id: 'portrait-police', kind: 'portrait', outcome: 'police',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:police} in real life, where nobody marks the words for you.',
    typical: [
      'The maker is named, and it belongs to one state: “the state legislature”, “the governor”, “the state licensing board”. It is not a city council or a county board.',
      'The matter is one of daily life that the Constitution does not give to Congress: licences, marriage, public schools, most crimes, renting a home. The list of federal powers given when this name was first met is the quickest check. If the matter is on that list, look harder for a federal law.',
      'The story may mention the federal government without covering the matter. A story can say that Congress taxes income, or that a federal office exists, and then go on to a state rule about something else. Ask whether a federal law covers the same matter as the rule.',
      'The same matter can have a different rule in the next state. A rule in one state says nothing about the rule in another.',
      'The rule takes away no right. A state rule can be strict, or unpopular, and still be of this kind: how harsh a rule is does not decide the name.'
    ],
    not: [
      'Not every rule a state makes is of this kind. If a federal law covers the same matter, the state’s rule may give way to it or stand beside it, and if the rule takes away a right, the state may not make it.',
      'Nor is a rule made by a city, a town or a county the state itself making a rule, even when the matter is the same. Ask who made this rule.'
    ],
    wild: ['“Each state sets its own rules for that.”', '“In this state you need a licence to…”', '“It varies by state.”', '“The legislature passed a law that…”', '“The governor signed…”'],
    self: 'In your own life this is much of what you meet day to day: what you need to drive, to marry, to work as a barber or a plumber, to rent a home, and what your children’s public school must teach. It is also the part of the law that changes when you move to another state, so look up your own state’s rule and do not assume that it matches the last one you knew.',
    ask: '“Did the state itself make this rule? Is the matter one the Constitution gives to Congress? Does the rule take away a right?” If the state made it, and the answer to both of the other questions is no, the name is {o:police}.' },

  { id: 'check-police', kind: 'check', after: 'police',
    case: 'u6-c-licence',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show who made the rule? Tap them.',
           answer: 'The Tarn legislature passed a law' } }
]);
