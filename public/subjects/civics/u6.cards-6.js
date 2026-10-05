// Civics, Unit Six, part five: the two worked cases, and the two cards that close the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u6', [

  { id: 'worked-dogs', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the key’s two questions about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'u6-dogs',
    steps: [
      { step: 'D1',
        reason: 'The case ends with a decision by a county board: {cue:D1}. A county is the government of one place, so the key’s first answer is {a:D1.states}. No judge, no Congress and no federal office makes any decision here.' },
      { step: 'S1',
        reason: 'The rule was made by a county board, using power its state gave to counties: {cue:S1}. That is a county’s rule and not the state’s own, so the key’s answer is {a:S1.local}.' },
      { step: 'S2',
        reason: 'The matter is {cue:S2}: a licence fee for keeping dogs, which is a local matter. The case names no federal law, and the rule takes away no right, so nothing else covers it: {a:S2.nothing}.' }
    ],
    hold: {
      neighbour: 'police',
      prompt: { kind: 'reason',
        lead: 'The case mentions the state’s power, so it can look as if the state itself made the rule.',
        choices: [
          { id: 'a', text: 'The case names the state’s power to let counties make rules.',
            note: 'True, and it is why the case can look as if the state itself made the rule. But the state’s power is there only to say where the board’s power came from. The board is the one that voted.' },
          { id: 'b', text: 'A county board, not the state legislature, voted on the rule.' },
          { id: 'c', text: 'The matter is local, and nothing else covers it.',
            note: 'True, but that is the second question, and its answer is the same for both names. It cannot tell them apart.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:police} you must be able to point to this: {needs:police}. The question that tells it from {o:localgov} is this: {test:police~localgov} Here a county board made it, so the key’s answer is {a:S1.local}.',
        'Everything else about the case is what it would be for a state’s own rule: the matter is local, no federal law covers it, and no right is taken away. Who made the rule is the one difference.'
      ]
    },
    impression: {
      resembles: 'u6-boatramp',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the county’s boat ramp: a county board, using power its state gives to counties, voting on a fee for a local matter.',
        'Here the key and the likeness agree, so the answer stands. The key’s questions come first, because they make you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s questions and find the words in the case that answer them. The second whole case shows how.'
      ]
    } },

  { id: 'worked-parkevent', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The dog licence was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case a march and a time limit make the story sound like a right, and the right is not what decides it. Watch which words each question picks out.',
    case: 'u6-parkevent',
    steps: [
      { step: 'D1',
        reason: 'The case ends with a decision by a city council: {cue:D1}. The key’s first answer is {a:D1.states}. The group that planned the march only asked. The council made the decision.' },
      { step: 'S1',
        reason: 'The rule is the city council’s own: {cue:S1}. A city made it, using power its state handed down, so the key’s answer is {a:S1.local}.' },
      { step: 'S2',
        reason: 'The matter is when an event in a city park must end: {cue:S2}. That rule applies to every event in every city park, whatever the event is about. It does not pick out marches, or any message, so it takes away no right. The case names no federal law, so nothing else covers the matter: {a:S2.nothing}.' }
    ],
    hold: {
      neighbour: 'protected',
      prompt: { kind: 'reason',
        lead: 'The case is about a march, which is people gathering to speak, and the council said no. That can look like a right being taken away.',
        choices: [
          { id: 'a', text: 'The march was about better bus services, which is a political matter.',
            note: 'True, and it is why the case looks like {o:protected}. But what matters is what the rule does, and the rule does not aim at the march or at its message.' },
          { id: 'b', text: 'The council voted no when the group asked to run the march until midnight.',
            note: 'True, but a no is only a decision. What it rests on is the rule behind it, and that rule is the same for every event.' },
          { id: 'c', text: 'The rule says that any event in a city park, whatever it is about, must end by nine at night.' }
        ],
        answer: 'c' },
      reason: [
        '{o:protected} needs this: {needs:protected}. The council’s rule takes away no right. It sets one time limit for every event in the city’s parks, whether the event is a march, a concert or a fair, and it does not look at what is said.',
        'This is the edge of a right that the picture of {o:protected} spoke of: a neutral rule about when and where an event happens is generally allowed. The question that tells the two names apart is this: {test:localgov~protected} The rule would be {o:protected} if it applied only to marches against the mayor.'
      ]
    },
    impression: {
      resembles: 'u6-fence', first: 'u6-rally-city',
      text: [
        'Now the second look: does this case look like one you know? A march, a council and a public park may bring back the rally ban in Redwick first, and that case was {o:protected}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s questions and find the words in the case that answer them. For the second question they are {cue:S2}. Redwick’s rule banned a political rally in a public park. This city’s limit is the same for every event in every park, and only the first is aimed at people gathering to speak. So the case this one really looks like is the fence rule in Ashby: a city’s rule about a local matter, with nothing else covering it. The key’s answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Put both questions to every case, and point to the words in the case that answer each: who made the rule, and what else covers the same matter. If you cannot point, you do not have an answer yet.',
      'The story never decides. A matter that sounds local can be covered by a federal law, as cribs were. A matter that sounds like a right can be a neutral time limit, as the park was.',
      'Who made the rule separates two names, {o:police} and {o:localgov}. For the other three it makes no difference: a state’s rule and a city’s rule get the same name when the same thing covers the matter.',
      'A federal law in the story is not enough. It has to cover the same matter, and then you ask whether it is the only rule or leaves room. “Federal law always beats state law” is wrong: a rule is {o:preempted} only when the federal law is meant to be the only rule.',
      'A city, a town or a county has the power its state handed it, and no power of its own. Its rule is {o:localgov} only when nothing else covers the matter.',
      'A right the Constitution protects binds a state, a city and a county as it binds Congress. If a rule takes one away, the name is {o:protected}, however local the matter sounds.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: somewhere you heard it, or somewhere it touched you. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'police', occasion: 'A rule about renting, driving, marrying or working that was different when you lived somewhere else.' },
      { outcome: 'localgov', occasion: 'A permit, a parking rule or a fee from your own city, town or county.' },
      { outcome: 'preempted', occasion: 'A time you heard that a state or a city could not make a rule because a federal law already covered the matter.' },
      { outcome: 'concurrent', occasion: 'A wage, a leave or a tax that is set by the federal government and also by your state.' },
      { outcome: 'protected', occasion: 'A time you heard that a city or a state could not ban or punish something because of what was said, believed or published.' }
    ],
    places: ['At home', 'At work', 'In the news', 'Where I live'] }
]);
