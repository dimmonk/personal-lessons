// Civics, Unit Six, part five: the worked case, and the card that closes the unit after the drill.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u6', [

  { id: 'worked-parkevent', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Watch one case run from the top, in the order the questions are asked. A march and a time limit make the story sound like a right, and the right is not what decides it. You are not asked anything until the end.',
    case: 'u6-parkevent',
    steps: [
      { step: 'D1',
        reason: 'The case ends with a decision by a city council: {cue:D1}. The first answer is {a:D1.states}. The group that planned the march only asked. The council made the decision.' },
      { step: 'S1',
        reason: 'The rule is the city council’s own: {cue:S1}. A city made it, using power its state handed down, so the answer is {a:S1.local}.' },
      { step: 'S2',
        reason: 'The matter is when an event in a city park must end: {cue:S2}. That rule applies to every event in every city park, whatever the event is about. It does not pick out marches, or any message, so it takes away no right. The case names no federal law, so nothing else covers the matter: {a:S2.nothing}.' }
    ],
    hold: {
      neighbor: 'protected',
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
        'This is the edge of a right: a neutral rule about when and where an event happens is generally allowed. The question that tells the two names apart is this: {test:localgov~protected} The rule would be {o:protected} if it applied only to marches against the mayor.'
      ]
    },
    impression: {
      resembles: 'u6-fence', first: 'u6-rally-city',
      text: [
        'Now the second look: does this case look like one you know? A march, a council and a public park may bring back the rally ban in Redwick first, and that case was {o:protected}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the questions and find the words in the case that answer them. For the second question they are {cue:S2}. Redwick’s rule banned a political rally in a public park. This city’s limit is the same for every event in every park, and only the first is aimed at people gathering to speak. So the case this one really looks like is the fence rule in Ashby: a city’s rule about a local matter, with nothing else covering it. The answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Put both questions to every case, and point to the words in the case that answer each: who made the rule, and what else covers the same matter. If you cannot point, you do not have an answer yet.',
      'The story never decides. A matter that sounds local can be covered by a federal law, as cribs were. A matter that sounds like a right can be a neutral time limit, as the park was.',
      'Who made the rule separates only two names, {o:police} and {o:localgov}. For the other three, a state’s rule and a city’s rule get the same name when the same thing covers the matter.',
      'A federal law in the story is not enough. It has to cover the same matter, and then you ask whether it is the only rule or leaves room. “Federal law always beats state law” is wrong.',
      'A city, a town or a county has only the power its state handed it. A right the Constitution protects binds a state, a city and a county as it binds Congress.'
    ] }
]);
