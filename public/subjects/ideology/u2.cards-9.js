// Political Ideologies, Unit Two, part six: the worked story, and the card that closes the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt and the heading of the second look.

FC.cards('ideology', 'u2', [

  { id: 'worked-docks', kind: 'worked',
    h: 'One whole text, from the first question to the name',
    link: 'Watch one text worked through from the top. The first thing you notice is not what decides it, so read to the end.',
    case: 'c-w-docks',
    steps: [
      { step: 'D1',
        reason: 'The text sets the dockers against the owners: {cue:D1}. It stands with the dockers, so the answer is {a:D1.class}.' },
      { step: 'C1',
        reason: [
          'The text does two things about the businesses. It explains how the owners gain, with a sum, and it says what to do with the docks: {cue:C1}.',
          'A plan beats an explanation, so the answer is {a:C1.public}.'
        ] },
      { step: 'C2',
        reason: 'Now look at what it says about power: {cue:C2}. That is {a:C2.seize}, and it leaves one name.' }
    ],
    hold: {
      neighbor: 'marx',
      prompt: { kind: 'reason',
        lead: 'The pamphlet opens with a sum showing how the owners gain, so this can look like {o:marx}. What decides it?',
        choices: [
          { id: 'a', text: 'It begins with a sum showing the gap between a docker’s pay and what the docker earns for the company.',
            note: 'True, and it is why this looks like {o:marx}. But that name asks for nothing about the businesses or about power, and this text asks for both.' },
          { id: 'b', text: 'It says the party will take the government by force, hold it, and allow no rival party.' },
          { id: 'c', text: 'It says every owner has to keep a gap like it, because that is how the arrangement works.',
            note: 'True, and it is the explanation. An explanation does not decide it when the text also says who will take power.' }
        ],
        answer: 'b' },
      reason: [
        'A text that explains and says nothing about power is {o:marx}. A text that explains and then says a party will take power and keep it is {o:ml}.',
        'What the text goes on to say decides it.'
      ]
    },
    impression: {
      resembles: 'c-ml-mill', first: 'c-mx-mill',
      text: [
        'A second look: does this remind you of a text you know? The sum and the words about every owner bring back the weaver’s sums first, and that was {o:marx}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:C2}. The weaver’s pamphlet has nothing like them. The mill pamphlet does: it also says the party must take power and keep it. So the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now sorted texts with the two questions on your own.',
    carry: [
      'Ask the two questions in order, and find the words for each. If a question has no words, the answer is {a:C1.none}, and that is a real answer.',
      'Taking the workers’ side is only the start. Seven names fit it, and the two questions decide which.',
      'A tax or a floor for pay leaves the owners in place. A handover does not. If a text shows both, the handover decides. If a text explains and also asks for something, what it asks for decides.',
      'A text that says nothing about the businesses can still be {o:ml} or {o:anarch}, by what it says about power. A text that only explains can be {o:marx}, {o:ml} or {o:anarch} the same way. A text silent on both is {o:classonly}.',
      'Never fill a silence with a guess. A text that does not say is not a secret plan.'
    ] }
]);
