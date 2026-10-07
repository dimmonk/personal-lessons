// Political Ideologies, Unit Three, part six: the worked case, and the card that closes the unit after the drill.
// Reading texts about real movements is not an action, so the unit has no plan card (subject.action is false; lesson standard A11, P26).

FC.cards('ideology', 'u3', [

  { id: 'worked-torchlit', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Watch one story worked from the top, in the order the questions come. The most noticeable thing in it is not what decides it. You are asked nothing until the end.',
    case: 'n-w-mislead',
    steps: [
      { step: 'D1',
        reason: 'The speech does not split workers from owners, and it does not hold up old ways as the guide. It puts the country first: {cue:D1}. So the answer is {a:D1.nation}.' },
      { step: 'N1',
        reason: 'It speaks for all of Calder: {cue:N1}. Nobody inside the country is named as the other side, and nobody is ranked. The black shirts, the torches and the talk of iron describe the crowd, not who the speech is against.' },
      { step: 'N2',
        reason: 'Look at the last sentences: {cue:N2}. The leader invites the opponents to stand and lets the voters judge. So the vote and the right to oppose stay.' }
    ],
    hold: {
      neighbor: 'fasc',
      prompt: { kind: 'reason',
        lead: 'The speech has torches, black shirts and talk of iron, so it can look like the rally speech. What decides it?',
        choices: [
          { id: 'a', text: 'The speech comes with torches, black shirts and talk of being iron.',
            note: 'True, and it is why this looks like {o:fasc}. But marches, uniforms and hard words do not decide it: a speech can have all of them and leave the vote alone.' },
          { id: 'b', text: 'The leader invites opponents to stand on the ninth of June and lets the voters judge.' },
          { id: 'c', text: 'The speech was made in the national stadium, in front of ten thousand people.',
            note: 'True, but the size of a crowd says nothing about what the speech wants done with the vote.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:fasc}, a text needs this: {needs:fasc}. This speech has the first half, the nation spoken for as one. It has none of the second: nothing in it takes away elections, other parties or the right to disagree.',
        'Ask the question from the two hospital speeches. {test:nationalism~fasc} Here the vote stays, so the answer to the second question is {a:N2.keep} and the name is {o:nationalism}.'
      ]
    },
    impression: {
      resembles: 'n-anniversary', first: 'n-rally',
      text: [
        'A second look: does this remind you of a speech you know? The torches and uniforms may bring back the rally speech first, and that was {o:fasc}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:N2}. The rally speech has nothing like them: it closes the other parties and the papers. The anniversary speech does: every party is free to stand against the speaker. So this speech really matches the anniversary speech, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered both questions on your own.',
    carry: [
      'Ask whom the text speaks for and against whom, and find the words that show it. If you can’t find them, you don’t have an answer yet.',
      'Then ask what it wants done about the vote and about people who object, and find those words too. A text that says nothing about them has not asked for them to go.',
      'The story never decides it, and neither does the tone. A text can be loud and proud and leave the vote alone, or sound gentle and take it away.',
      'Ranking people by blood gives {o:nazi}, whatever the text says about the vote. Pushing the vote aside, with the nation spoken for as one or ordinary people set against a few at the top, gives {o:fasc}.',
      'Anger at a few at the top is not a name until you ask what else the text says. With nothing more it is {o:pop}. With the country’s borders, culture or industry put first it is {o:natpop}.'
    ] }
]);
