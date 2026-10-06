// Political Ideologies, Unit Three, part six: the worked case, and the card that closes the unit after the drill.
// Reading texts about real movements is not an action, so the unit has no plan card (subject.action is false; lesson standard A11, P26).

FC.cards('ideology', 'u3', [

  { id: 'worked-torchlit', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before the drill, watch one case being run from the top, in the order the questions come. The most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
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
        'It is the question from the two hospital speeches. {test:nationalism~fasc} Here the text leaves the vote in place, so the answer to the second question is {a:N2.keep}, and the name is {o:nationalism}.'
      ]
    },
    impression: {
      resembles: 'n-anniversary', first: 'n-rally',
      text: [
        'Now the second look: does this case look like one you know? The torches and uniforms may bring back the rally speech first, and the rally speech was {o:fasc}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the text that answer it: {cue:N2}. The rally speech has nothing like them: it closes the other parties and the papers. The anniversary speech does: every party is free to stand against the speaker. So the case this one really looks like is the anniversary speech, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Say whom the text speaks for and against whom, and point to the words. If you cannot point, you do not have an answer yet.',
      'Then say what the text would do about the vote and about those who object, and point to the words. A text that says nothing about them has not asked for them to go.',
      'The story never decides. Nor does the tone: a text can be loud and proud and leave the vote alone, or be gentle and take it away.',
      'Ranking peoples by blood settles {o:nazi} whatever the text says about the vote. Pushing the vote aside, with the nation spoken for as one or its ordinary people set against a few at the top, gives {o:fasc}.',
      'Anger at a few at the top is not a name until you have asked what else the text says. With nothing more it is {o:pop}. With the country\'s borders, culture or industry put first it is {o:natpop}.'
    ] }
]);
