// Political Ideologies, Unit Four, part four: the worked story, and the card that closes the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u4', [

  { id: 'worked-hospice', kind: 'worked',
    h: 'One whole story, where the tone points the wrong way',
    link: 'Watch one story worked through, in the order the questions come. The petition sounds mild, but what decides it comes later. You are asked nothing until the end.',
    case: 'i4-w-react',
    steps: [
      { step: 'D1',
        reason: 'The petition names no owners and no sides, and it does not put one people first. It holds up an old order, a house of sisters that nursed the poor for three hundred years, and wants it back: {cue:D1}. That is old customs held up as the guide.' },
      { step: 'T1',
        reason: 'The petition opens by saying it asks gently and is ready to wait. Read on. The House was closed and the sisters sent away, the petition calls that a wrong, and it asks for the House to be reopened and its order restored: {cue:T1}.' }
    ],
    hold: {
      neighbor: 'conserv',
      prompt: { kind: 'reason',
        lead: 'The petition is gentle and says it will wait however long it takes, so it can look like a text that only asks for slow change.',
        choices: [
          { id: 'a', text: 'The petition says it asks gently and is ready to wait however many years it takes.',
            note: 'True, and it is why this looks like {o:conserv}. But how gently a text asks does not say what it asks for.' },
          { id: 'b', text: 'The petition says the House was closed wrongly, and asks for it to be reopened and the sisters brought back.' },
          { id: 'c', text: 'Two hundred people in Brenwick Cross signed the petition, so many people agree with it.',
            note: 'True, but a text for either name could have two hundred signatures.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:conserv}, a text needs this: {needs:conserv}. The petition is patient, but it fails the last part: it asks for something that has gone to be brought back.',
        'Put the question from the two school stories: {test:conserv~react} Here something gone is asked back, so the answer to {q:T1} is {a:T1.restore}.'
      ]
    },
    impression: {
      resembles: 'i4-meet-react', first: 'i4-meet-conserv',
      text: [
        'A second look: does this remind you of a story you know? A text that speaks gently of waiting and going slowly may bring back the boundary walk, which was {o:conserv}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:T1}. The boundary walk has nothing like them. The Church courts of Aldmere do: something gone, called a wrong, and asked for back. So the answer stands.'
      ]
    } },

  { id: 'recap-ways', kind: 'recap',
    h: 'What to carry away',
    link: 'The unit in one place.',
    carry: [
      'First check that the text holds up old ways as its guide: {a:D1.tradition}. Then ask {q:T1}',
      'If it asks for what is still there to be kept, with slow change, and asks for nothing to come back, the name is {o:conserv}. If it says an old order is gone, that losing it was a wrong, and asks for it back, the name is {o:react}.',
      'How a text sounds decides nothing. A calm text can ask for an order to be brought back, and a sharp text can ask only that a custom be kept. Sadness is not a request.',
      'Both names describe what a text asks for. They do not say whether the text is right, or what its writer is like.',
      'Two decisions to remember. A text that speaks for one people and also holds up an old order gets {a:D1.tradition}, even if it asks for parliament to be closed. A text that holds up old customs and also sets working people against owners gets {a:D1.class}.'
    ] }
]);
