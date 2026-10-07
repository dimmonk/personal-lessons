// Civics, Unit Six, part five: the worked story, and the card that closes the unit after the drill.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u6', [

  { id: 'worked-parkevent', kind: 'worked',
    h: 'A whole story, from the first question to the name',
    link: 'Watch one story worked through from the top. A march and a time limit make it sound like a right being taken away, but that is not what decides it. You are asked nothing until the end.',
    case: 'u6-parkevent',
    steps: [
      { step: 'D1',
        reason: 'The story ends with a decision by a city council: {cue:D1}. The group that planned the march only asked.' },
      { step: 'S1',
        reason: 'The rule is the city council’s own: {cue:S1}. A city made it, using power its state handed down.' },
      { step: 'S2',
        reason: 'The rule is about the park’s closing time: {cue:S2}. It treats every event the same, so it takes away no right, and the story names no federal law.' }
    ],
    hold: {
      neighbor: 'protected',
      prompt: { kind: 'reason',
        lead: 'The march is people gathering to speak, and the council said no. That can look like {o:protected}. What decides it?',
        choices: [
          { id: 'a', text: 'The march was about better bus services, which is a political matter.',
            note: 'True, and it is why this looks like {o:protected}. But the rule is not aimed at the march or its message.' },
          { id: 'b', text: 'The council voted no when the group asked to march until midnight.',
            note: 'True, but a no is only a decision. The rule behind it is the same for every event.' },
          { id: 'c', text: 'Every event in a city park, whatever it is about, must end by nine at night.' }
        ],
        answer: 'c' },
      reason: [
        'The rule takes away no right. It sets one time limit for every event in the city’s parks, whether a march, a concert or a fair, and it does not look at what is said.',
        'This is the edge of a right: a neutral rule about when or where is generally allowed. It would be {o:protected} if it applied only to marches against the mayor. The question that settles it: {test:localgov~protected}'
      ]
    },
    impression: {
      resembles: 'u6-fence', first: 'u6-rally-city',
      text: [
        'A second look: does this story remind you of one you know? A march, a council and a public park may bring back the rally ban in Redwick, and that was {o:protected}. So the likeness and the questions seem to disagree.',
        'When that happens, go back to the words that answer the questions. For the second one they are {cue:S2}. Redwick’s rule banned a political rally in a park. This limit is the same for every event in every park, and only Redwick’s was aimed at people gathering to speak. The story this one really matches is the fence rule in Ashby: a city’s rule on a local matter, with nothing else covering it. The answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now ask both questions on your own.',
    carry: [
      'Ask both questions of every rule you hear about, and find the words that answer each: who made the rule, and what else covers the matter. If you can’t find them, you don’t have an answer yet.',
      'How a story sounds never decides it. A matter that sounds local can be covered by a federal law, as cribs were. What sounds like a right can be a neutral time limit, as in the park.',
      'Who made the rule separates only two names, {o:police} and {o:localgov}. For the other three, a state’s rule and a city’s rule get the same name.',
      'A federal law in the story is not enough. It has to cover the same matter, and then you ask whether it is the only rule or leaves room. “Federal law always beats state law” is wrong.',
      'A city, a town or a county has only the power its state handed it. A right in the Constitution applies to a state, a city and a county just as it applies to Congress.'
    ] }
]);
