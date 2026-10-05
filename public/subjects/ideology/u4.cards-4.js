// Political Ideologies, Unit Four, part four: the two worked cases, and the two cards that close the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u4', [

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-burial', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the two names and the question that chooses between them. Before the drill, watch two cases being run from the top, in the order the questions come. You are not asked anything until the end of each.',
    case: 'i4-w-conserv',
    steps: [
      { step: 'D1',
        reason: [
          'Go through the answers to Unit One’s question one at a time. Is there a split between working people and owners, with the text on one side? The notice speaks of households paying into a club, but it names no owners and takes no side against anyone. Is there one people put first? No people is named, and the notice speaks only of one row of houses. Is there something every person is owed? No.',
          'What the notice does is name a way handed down and say it should guide: {cue:D1}. That is old ways held up as what should guide, so the answer is the old-ways one.'
        ] },
      { step: 'T1',
        reason: 'The club is still paying out, so nothing the text names has gone, and it asks for nothing to be brought back. What it asks for is {cue:T1}: the club kept as it is, and any change slow and with the members asked.' }
    ],
    hold: {
      neighbour: 'react',
      prompt: { kind: 'reason',
        lead: 'The notice says that the club once paid for a headstone too, and now it does not. So the case can look like a text about something that has gone.',
        choices: [
          { id: 'a', text: 'The notice says the club once paid for more than it does now.',
            note: 'True, and it is why the case can look like {o:react}. But the notice does not call that loss a wrong, and it does not ask for the headstone back. It says it as a fact, and asks for what the club still does to be kept.' },
          { id: 'b', text: 'The notice asks for the club to be kept as it is, and for any change to be slow. It asks for nothing to be brought back.' },
          { id: 'c', text: 'The notice comes from the club’s committee.',
            note: 'True, and it tells you who wrote it. It does not separate the two answers, because a notice for either could come from a committee.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:react} you must be able to point to this: {needs:react}. The notice names something that has gone, the headstone, but it does not say that its going was a wrong, and it does not ask for it back. What it asks for is that the club be kept. The thing it names that has gone is a detail in the story. It is not what the text is asking about.',
        'It is the question from the two church-school letters: {test:conserv~react} Here nothing is asked back, and what is asked is that what remains be kept, so the answer to {q:T1} is {a:T1.keep}.'
      ]
    },
    impression: {
      resembles: 'i4-meet-conserv',
      text: [
        'The questions have given their answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the boundary walk. There too a text held up something handed down, and asked for it to be kept, with change slow and the people it touched asked first.',
        'Here the answer and the likeness agree, so it stands. The question comes first, because it makes you point at words in the text. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the text that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-hospice', kind: 'worked',
    h: 'A second whole case, where the tone points the wrong way',
    link: 'The burial club was a clean case: one thing was going on in it. In this second case the words that stand out are not the words that decide it. Read to the end before you answer.',
    case: 'i4-w-react',
    steps: [
      { step: 'D1',
        reason: [
          'The petition is about a hospice and its sisters, so you might look first for a split between those who work and those who own, or for something owed to every person. It names no owners and no sides, and it says nothing is owed to every person. Nor does it put one people first.',
          'What it names is an old order, a house of sisters that nursed the poor for three hundred years, and it says that order should come back: {cue:D1}. That is old ways held up, so the answer is the old-ways one.'
        ] },
      { step: 'T1',
        reason: [
          'The petition opens by saying that it asks gently and is ready to wait. If you stopped there you might hear a text that only wants to keep something. Read on.',
          'The House is closed and the sisters are sent away. The petition says that was a wrong, and asks for the House to be reopened and its order restored: {cue:T1}. An order that has gone, called a wrong, and asked for back.'
        ] }
    ],
    hold: {
      neighbour: 'conserv',
      prompt: { kind: 'reason',
        lead: 'The petition is gentle and patient, and it says it will wait however many years it takes. So the case can look like a text that only asks for slow change.',
        choices: [
          { id: 'a', text: 'The petition says it asks gently and is ready to wait.',
            note: 'True, and it is why the case can look like {o:conserv}. But how gently a text asks, and how long it will wait, does not say what it asks for.' },
          { id: 'b', text: 'The petition says the House was closed by an act, that this was a wrong, and asks for the House to be reopened and the sisters brought back.' },
          { id: 'c', text: 'The petition has two hundred signatures.',
            note: 'True, and it tells you how many people agree with it. It does not separate the two answers, because a text for either could have many signatures.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:conserv} you must be able to point to this: {needs:conserv}. The petition is patient, and slow change fits what it says. But the last clause of that line is not met: an order that has gone is asked to be brought back. The House is closed, and the petition asks for it to be reopened.',
        'It is the question from the two church-school letters: {test:conserv~react} Here something that has gone is asked back, so the answer to {q:T1} is {a:T1.restore}.'
      ]
    },
    impression: {
      resembles: 'i4-meet-react', first: 'i4-meet-conserv',
      text: [
        'Now the second look: does this case look like one you know? A text that speaks gently of waiting and of doing things slowly may bring back the boundary walk first, and the boundary walk was {o:conserv}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the text that answer it. They are {cue:T1}. The boundary walk has nothing like them: the walk was still being walked, and nothing was asked back. The Church courts of Aldmere do: an order that had gone, called a wrong, and asked for back. So the case this one really looks like is the Church courts, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-ways', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Before you choose between the two names, check the first answer: the text must hold up old ways as what should guide, which is {a:D1.tradition}. Then ask {q:T1}',
      'Point to what the text wants done with the old ways. If it asks for what is there to be kept and for any change to be slow, and asks for nothing to come back, the name is {o:conserv}. If it says an old order has gone, that its going was a wrong, and asks for it back, the name is {o:react}.',
      'How a text sounds decides nothing. A calm text can ask for an order to be brought back, and a sharp text can ask only for a custom to be kept.',
      'Sadness is not a request. A text that mourns what has gone and asks only that what is left be kept is {o:conserv}.',
      'Both names describe what a text asks for. "Reactionary" is often thrown as an insult and "conservative" as praise or blame, but here {o:react} and {o:conserv} are used only for what a text says. They are not a verdict on whether the text is right, and not a verdict on the person who wrote it.',
      'Two decisions to remember. A text that speaks for one people and also holds up an old order gets the old-ways answer, even when it asks for parliament to be closed. A text that holds up old customs and also sets working people against owners gets the working-people answer. Unit One’s question decides first, and this unit’s question comes after it.',
      'Your answers on the way are two, and a right name reached by a wrong first answer counts as a miss.'
    ] },

  { id: 'transfer-ways', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the two names is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the two and name an occasion of your own: something you read, something said to you, or something you said. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'conserv', occasion: 'A custom, a service, a school day or the hours of a shop that people said should be kept, and changed slowly if at all.' },
      { outcome: 'react', occasion: 'Something that was changed or ended years ago that someone said was a mistake and should be put back.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my town'] }
]);
