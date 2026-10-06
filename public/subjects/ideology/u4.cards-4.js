// Political Ideologies, Unit Four, part four: the worked case, and the card that closes the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u4', [

  { id: 'worked-hospice', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before the drill, watch one case being run from the top, in the order the questions come. The words that stand out here are not the words that decide it. You are not asked anything until the end.',
    case: 'i4-w-react',
    steps: [
      { step: 'D1',
        reason: 'The petition names no owners and no sides, says nothing is owed to every person, and does not put one people first. It names an old order, a house of sisters that nursed the poor for three hundred years, and says that order should come back: {cue:D1}. That is old ways held up, so the answer is the old-ways one.' },
      { step: 'T1',
        reason: 'The petition opens by saying that it asks gently and is ready to wait. Read on. The House is closed and the sisters are sent away, the petition says that was a wrong, and it asks for the House to be reopened and its order restored: {cue:T1}. An order that has gone, called a wrong, and asked for back.' }
    ],
    hold: {
      neighbor: 'conserv',
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
        'For {o:conserv} you must be able to point to this: {needs:conserv}. The petition is patient, but the last part is not met: an order that has gone is asked to be brought back.',
        'It is the question from the two church-school letters: {test:conserv~react} Here something that has gone is asked back, so the answer to {q:T1} is {a:T1.restore}.'
      ]
    },
    impression: {
      resembles: 'i4-meet-react', first: 'i4-meet-conserv',
      text: [
        'Now the second look: does this case look like one you know? A text that speaks gently of waiting and of doing things slowly may bring back the boundary walk first, and the boundary walk was {o:conserv}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:T1}. The boundary walk has nothing like them. The Church courts of Aldmere do: an order that had gone, called a wrong, and asked for back. So the case this one really looks like is the Church courts, and the answer stands.'
      ]
    } },

  { id: 'recap-ways', kind: 'recap',
    h: 'What to carry away',
    link: 'The unit in one place.',
    carry: [
      'First check that the text holds up old ways as what should guide: {a:D1.tradition}. Then ask {q:T1}',
      'If it asks for what is there to be kept and for any change to be slow, and asks for nothing to come back, the name is {o:conserv}. If it says an old order has gone, that its going was a wrong, and asks for it back, the name is {o:react}.',
      'How a text sounds decides nothing. A calm text can ask for an order to be brought back, and a sharp text can ask only for a custom to be kept. Sadness is not a request: a text that mourns what has gone and asks only that what is left be kept is {o:conserv}.',
      'Both names describe what a text asks for. They are not a verdict on whether the text is right, or on the person who wrote it.',
      'Two decisions to remember. A text that speaks for one people and also holds up an old order gets the old-ways answer, even when it asks for parliament to be closed. A text that holds up old customs and also sets working people against owners gets the working-people answer.'
    ] }
]);
