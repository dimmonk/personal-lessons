// Political Ideologies, Unit Two, part six: the worked case, and the card that closes the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u2', [

  { id: 'worked-docks', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one run from the top, in the order the questions come. The most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'c-w-docks',
    steps: [
      { step: 'D1',
        reason: 'The text sets the dockers against the owners and the owners’ gain: {cue:D1}. It is written by a workers’ party, and it stands with the dockers. That is {a:D1.class}.' },
      { step: 'C1',
        reason: 'The text does two things about the businesses. It explains how the owners gain, with a sum and the words about every owner. And it says what should happen to the docks: {cue:C1}. When a text explains and also says what should happen to the businesses, the plan decides, and the answer is {a:C1.public}.' },
      { step: 'C2',
        reason: 'Now look at what the text says about power: {cue:C2}. The party will take the government by force and hold it, and allow no rival. That is the answer {a:C2.seize}, and it leaves one name.' }
    ],
    hold: {
      neighbor: 'marx',
      prompt: { kind: 'reason',
        lead: 'The pamphlet opens with a sum that shows how the owners gain, so the first thing it brings to mind is the name for an explanation.',
        choices: [
          { id: 'a', text: 'It begins with a sum showing the gap between a docker’s pay and what the docker earns for the company.',
            note: 'True, and it is why the case can look like {o:marx}. But that name asks for nothing about the businesses and nothing about power, and this text asks for both.' },
          { id: 'b', text: 'It says the party will take the government by force, hold it, and allow no rival party.' },
          { id: 'c', text: 'It says that every owner has to keep a gap like it, because that is how the arrangement works.',
            note: 'True, and it is the explanation. An explanation does not decide the case when the text also says who will take power.' }
        ],
        answer: 'b' },
      reason: [
        '{o:marx} needs this: {needs:marx}. This text goes past that. It says who will take power and that it will be held with no rival, and the needs line for {o:marx} ends by ruling that out. The answer about power leaves only {o:ml}.',
        'A text can explain and say nothing about power, and that is {o:marx}. A text can explain and then say that a party will take power and keep it, and that is {o:ml}. What the text goes on to say is what the answer goes by.'
      ]
    },
    impression: {
      resembles: 'c-ml-mill', first: 'c-mx-mill',
      text: [
        'The questions have given their answer. Now the second look: does this case look like one you know? The sum, and the words about every owner keeping a gap, bring back the weaver’s sums first, and that case was {o:marx}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the questions and find the words in the case that answer them. For the question about power they are {cue:C2}. The weaver’s pamphlet has nothing like them. The mill pamphlet does: it also says the party must take power and keep it. So the case this one really looks like is the mill pamphlet, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Ask the two questions in order, and point to the words for each. If a question has no words to point to, the answer is that the text says nothing, and that is a real answer.',
      'Taking the workers’ side is only the start. A text on the workers’ side can have any of seven names, and the two questions between them decide which.',
      'A tax or a floor for pay leaves the owners in place. A handover does not. When a text shows both, the handover decides. When a text explains and also asks for something, what it asks for decides.',
      'The question about the government can name a text that looks empty. A text silent on the businesses can still be {o:ml} or {o:anarch}, and a text that only explains can be {o:marx}, {o:ml} or {o:anarch} by what it says about power. A text silent on both is {o:classonly}.',
      'A silence is never filled with a guess. A text that does not say is not a secret plan.'
    ] }
]);
