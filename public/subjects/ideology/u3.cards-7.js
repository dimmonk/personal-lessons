// Political Ideologies, Unit Three, part six: two more wrong ideas, the two whole cases worked from the top, and the two cards that
// close the unit after the drill. Reading texts about real movements is not an action, so the unit has no plan card
// (subject.action is false; lesson standard A11, P26).

FC.cards('ideology', 'u3', [

  { id: 'refute-lots', kind: 'refute', about: 'N2',
    h: 'A wrong idea about what the second question asks',
    link: 'Many people think the second question asks something else. This card tests one such idea.',
    idea: '"Fascism is when the government does a lot of stuff."',
    verdict: 'This is wrong.',
    right: [
      'How much a government does is not an answer to any of these questions. A text can ask for a government that builds railways, runs hospitals and tells businesses what to make, and also say that elections will go on and that any party may stand against it. Its answer to the second question is {a:N2.keep}.',
      'A text can also ask for very little from the government and still want critics silenced. The size of the government is a different thing from the right to vote and to object.',
      'What decides {o:fasc} is what the text would do about the vote and about its critics, together with speaking for the nation as one. Before you use the name, point to the words that push them aside, and not to the amount the government is asked to do.'
    ],
    testedBy: ['n-claim-lots'] },

  { id: 'refute-horseshoe', kind: 'refute', about: 'fasc',
    h: 'A wrong idea: two kinds of text that ban parties are the same',
    link: 'The picture of {o:fasc} said that banning parties is a method many dictatorships share. That leads some people to a larger idea, which this card tests.',
    idea: '"Communism and fascism are the same thing, because both ban opposition parties."',
    verdict: 'This is wrong.',
    right: [
      'Banning rival parties is something a text can say it will do, and it is shared by many dictatorships. But a text is not named by its methods. It asks first whom the text speaks for, and the questions after that depend on the answer.',
      'A text that takes the side of the workers against the owners has the first answer {a:D1.class}. If it wants workers to take power and rule alone, its answer to the question about the government is {a:C2.seize}. A text that speaks for one nation as one people has the first answer {a:D1.nation}, and if it pushes the vote aside its answer to the second question is {a:N2.aside}.',
      'These are different answers to the first question. The two texts speak for different people, and they are put different questions afterwards. A method that they share cannot make them the same text. Before you say that two texts are the same, find their answers to the first question.'
    ],
    testedBy: ['n-claim-horseshoe'] },

  { id: 'worked-natpop', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the two questions. Before the drill, watch two cases being run from the top, in the order the questions come. You are not asked anything until the end of each.',
    case: 'n-w-clean',
    steps: [
      { step: 'D1',
        reason: [
          'Go through the answers of the first question and ask which one the text shows. Is there a split between working people and those who own the businesses, with the text on the workers\' side? The planners and the developers are named, but the text speaks for "the people who have lived here for generations", and not for people who work for a wage against those who own. Is something old held up as the guide? The "old streets" are mentioned, but only as something to keep for the town\'s people.',
          'What is left is one people, marked out by its own town and its own way of life, and put first: {cue:D1}. The answer is the one for a text that puts one people first.'
        ] },
      { step: 'N1',
        reason: 'Whom does the text speak for, and against whom? It speaks for the people of Corvale, and it names a few at the top as the other side: {cue:N1}. It also says what the country should have: its old streets and its way of life, kept for its own people. That is more than anger at those at the top.' },
      { step: 'N2',
        reason: 'What will happen to the vote, and to those who disagree? The flyer asks people to come to a meeting and to vote: {cue:N2}. It does not ask for anyone\'s say to be taken away, so the vote stays.' }
    ],
    hold: {
      neighbor: 'pop',
      prompt: { kind: 'reason',
        lead: 'The flyer is angry at the planners and the developers, so the case can look like a text with nothing else attached.',
        choices: [
          { id: 'a', text: 'The flyer is angry at the planners and the developers.',
            note: 'True, and it is why the case can look like {o:pop}. But in this name that anger is only half of what you point to. The other half is what the text says the country should have.' },
          { id: 'b', text: 'The flyer says that the old streets and the way of life should be kept for the town\'s own people.' },
          { id: 'c', text: 'The flyer asks people to come to a meeting and to vote.',
            note: 'True, but a text with either name can ask people to vote. It does not separate the two.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:natpop} you must be able to point to this: {needs:natpop}. The flyer has the first half, ordinary people set against a few at the top, and it has the second half too: the old streets and the way of life kept for the town\'s own people. That is what is attached.',
        'It is the question from the two bank rescues. {test:natpop~pop} Here the text says what the country should have, so the answer to the first question is {a:N1.elitenation}.'
      ]
    },
    impression: {
      resembles: 'n-natpop-steel',
      text: [
        'The questions have given their answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the steelworks leaflet. There too, a handful at the top had sold something away, and the text said that the country\'s own thing should stay in the country\'s hands.',
        'Here the answer and the likeness agree, so it stands. The question comes first, because it makes you point at words in the text. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the text that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-torchlit', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The flyer was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'n-w-mislead',
    steps: [
      { step: 'D1',
        reason: 'The speech has no split between working people and owners, and it holds up no old ways as the guide. What it puts first is the country: {cue:D1}. The answer is the one for a text that puts one people first.' },
      { step: 'N1',
        reason: 'Whom does the text speak for, and against whom? It speaks for all of Calder: {cue:N1}. Nobody inside the country is named as the other side, and nobody is ranked. The black shirts, the torches and the talk of iron say what the crowd looks like. They say nothing about whom the speech is against.' },
      { step: 'N2',
        reason: 'What will happen to the vote, and to those who disagree? Look at the last sentences: {cue:N2}. The leader invites his opponents to stand against him and says the voters will judge between them. The vote and the right to oppose stay.' }
    ],
    hold: {
      neighbor: 'fasc',
      prompt: { kind: 'reason',
        lead: 'The speech has torches, black shirts and talk of iron, so it can look like the rally speech.',
        choices: [
          { id: 'a', text: 'The speech has torches, black shirts and talk of being iron.',
            note: 'True, and it is why the case can look like {o:fasc}. But marches, uniforms and hard words are what that name is usually like. They do not decide it, and a text can have all of them and leave the vote in place.' },
          { id: 'b', text: 'The leader invites his opponents to stand against him on the ninth of June and says the voters will judge between them.' },
          { id: 'c', text: 'The speech was made in front of ten thousand people.',
            note: 'True, but the size of a crowd is part of the story. It does not say what the text wants done with the vote.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:fasc} you must be able to point to this: {needs:fasc}. The speech has the nation spoken for as one. It does not have the second half: nothing in it takes away elections, other parties or the right to disagree. It says the opposite, and invites the opposition to stand.',
        'It is the question from the two hospital speeches. {test:nationalism~fasc} Here the text leaves the vote in place, so the answer to the second question is {a:N2.keep}, and the name is {o:nationalism}.',
        'This line is drawn at what a short text can show. People who study real movements weigh much more than one speech can show, and no verdict is given on any real party.'
      ]
    },
    impression: {
      resembles: 'n-anniversary', first: 'n-rally',
      text: [
        'Now the second look: does this case look like one you know? The torches, the uniforms and "we will be iron" may bring back the rally speech first, and the rally speech was {o:fasc}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the text that answer it. They are {cue:N2}. The rally speech has nothing like them: it closes the other parties and the papers. The anniversary speech does: it says that every party is free to stand against the speaker. So the case this one really looks like is the anniversary speech, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Say whom the text speaks for and against whom, and point to the words. If you cannot point, you do not have an answer yet.',
      'Then say what the text would do about the vote and about those who object, and point to the words. A text that says nothing about them has not asked for them to go.',
      'The story never decides. Nor does the tone: a text can be loud and proud and leave the vote alone, or be gentle and take it away.',
      'Banned parties, a controlled press and secret police belong to nearly every dictatorship. They answer only the second question, and they never name a text on their own.',
      'Ranking peoples by blood settles {o:nazi} whatever the text says about the vote. Pushing the vote aside, with the nation spoken for as one or its ordinary people set against a few at the top, gives {o:fasc}.',
      'Anger at a few at the top is not a name until you have asked what else the text says. With nothing more it is {o:pop}. With the country\'s borders, culture or industry put first it is {o:natpop}.',
      'A name thrown at a text is not a description of it. The answer goes by what the text says it wants.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: something you read, something said to you, or something you said. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'nationalism', occasion: 'A speech after a disaster, a national day, or a match, that spoke to everyone in the country as one.' },
      { outcome: 'fasc', occasion: 'Someone saying that critics should be silenced "for the good of the nation", or a story of a leader who closed the papers.' },
      { outcome: 'natpop', occasion: 'A leaflet or a column that blamed the capital or an industry for a closing, and said the country\'s own people should come first.' },
      { outcome: 'pop', occasion: 'A comment or a banner that said "throw them all out", with nothing about what should come after.' },
      { outcome: 'nazi', occasion: 'A line anywhere that said one group is better or worse than another by birth. Only notice it: you do not need to say where.' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] }
]);
