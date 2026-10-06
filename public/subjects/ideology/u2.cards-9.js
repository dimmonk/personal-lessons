// Political Ideologies, Unit Two, part six: the two worked cases, and the two cards that close the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u2', [

  { id: 'worked-power', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the seven names and the two questions about them. Before you run a case yourself, watch two being run from the top, in the order the questions come. You are not asked anything until the end of each.',
    case: 'c-w-power',
    steps: [
      { step: 'D1',
        reason: 'The text names the staff who keep a power station running and the company that owns it, and it stands with the staff: {cue:D1}. Two groups, divided by wages and ownership, and the text on the workers’ side. That is {a:D1.class}.' },
      { step: 'C1',
        reason: 'The text says what should happen to the power station: it should be owned by the government and run for everyone, not for the company’s shareholders: {cue:C1}. The owners do not keep it. It passes to the government. That is a handover, not a tax on owners who keep what they own.' },
      { step: 'C2',
        reason: 'The text asks for a change of ownership and goes no further: {cue:C2}. It says nothing about how power is to be won or held, about elections, or about getting rid of the government. The answer is {a:C2.none}, and it leaves one name.' }
    ],
    hold: {
      neighbor: 'ml',
      prompt: { kind: 'reason',
        lead: 'The text wants the power station to pass to the government, which is also what the party in the mill pamphlet wanted.',
        choices: [
          { id: 'a', text: 'The text wants the power station owned by the government and run for everyone.',
            note: 'True, and it is why the case can look like {o:ml}. But both names ask for the same handover, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'The text says nothing about any party, or the staff, taking power or ruling alone.' },
          { id: 'c', text: 'The text is written by the staff of the power station themselves.',
            note: 'True, but that is the story. Neither name depends on who wrote the text.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:ml} you must be able to point to this: {needs:ml}. Nothing in this text says anything about taking power or ruling alone. Without those words, the question about the government gets {a:C2.none}, and together with {a:C1.public} that leaves {o:demsoc} and rules out {o:ml}.',
        'The decision is the one you met on the cards: public ownership with no word on how is filed under {o:demsoc}. The answer does not say the staff would not seize power. It says that this text does not say so, and a silence is never filled with a guess.'
      ]
    },
    impression: {
      resembles: 'c-dm-signal',
      text: [
        'The questions have given their answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the signal workers’ motion: a business to be owned by the government and run for everyone, and nothing said about how the change is made.',
        'Here the answer and the likeness agree, so it stands. The questions come first, because they make you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the questions and find the words in the case that answer them. The second whole case shows how.'
      ]
    } },

  { id: 'worked-docks', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The power-station leaflet was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
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
        'Explaining is not what separates the two names. A text can explain and say nothing about power, and that is {o:marx}. A text can explain and then say that a party will take power and keep it, and that is {o:ml}. The explanation is the same in both. What the text goes on to say is what the answer goes by.'
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
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Ask the two questions in order, and point to the words for each. If a question has no words to point to, the answer is that the text says nothing, and that is a real answer.',
      'Taking the workers’ side is only the start. A text on the workers’ side can have any of seven names, and the two questions between them decide which.',
      'A tax or a floor for pay leaves the owners in place. A handover does not. When a text shows both, the handover decides. When a text explains and also asks for something, what it asks for decides.',
      'The question about the government can name a text that looks empty. A text silent on the businesses can still be {o:ml} or {o:anarch}, and a text that only explains can be {o:marx}, {o:ml} or {o:anarch} by what it says about power. A text silent on both is {o:classonly}.',
      'A silence is never filled with a guess. A text that does not say is not a secret plan.',
      'A name thrown across a room is not a description. What a text says, and where, is the description.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing seven names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the seven and name an occasion of your own: somewhere you read it, heard it, or were told someone was it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'socdem', occasion: 'The last time you heard someone ask for a minimum wage, sick pay or a pension, and nobody asked for the business to change hands.' },
      { outcome: 'classonly', occasion: 'A notice, post or leaflet that took the workers’ side and stopped there.' },
      { outcome: 'demsoc', occasion: 'An argument about whether a railway, a bank or a power company should be owned by the public.' },
      { outcome: 'ml', occasion: 'A time the word "communist" was used about a plan, and you can check whether the text said a party would take power and keep it.' },
      { outcome: 'anarch', occasion: 'A cooperative, a squat or a meeting that runs itself with nobody giving orders.' },
      { outcome: 'mktsoc', occasion: 'A shop or firm owned by the people who work in it, selling to the public.' },
      { outcome: 'marx', occasion: 'A lecture, a book or a pamphlet that explains why wages and profit are what they are.' }
    ],
    places: ['At home', 'At work', 'In the news', 'Online'] }
]);
