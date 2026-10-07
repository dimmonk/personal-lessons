// Political Ideologies, Unit Five, part six: the worked case, and the card that closes the unit after the drill.
// The subject is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u5', [

  { id: 'worked-misleading', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Watch one story worked from the top, in the order the questions come. The most noticeable thing in it is not what decides it. You are not asked anything until the end.',
    case: 'i5-worked-misleading',
    steps: [
      { step: 'D1',
        reason: 'The text puts first what every child is owed: {cue:D1}. It names no workers and no owners, speaks for no one people, and holds up no old customs.' },
      { step: 'R1',
        reason: 'The text asks the government to give something: {cue:R1}. The test is the same for every child and "nobody says it is unfair", so no rule is blamed.' }
    ],
    hold: {
      neighbor: 'idegal',
      prompt: { kind: 'reason',
        lead: 'This speech is about a test that is the same for every child, like the hill-villages letter, so it can look like {o:idegal}.',
        choices: [
          { id: 'a', text: 'The test is the same paper on the same day for every child.',
            note: 'True, and it is why this looks like {o:idegal}. But the hill-villages letter said the test leaves a group behind, and this speech does not.' },
          { id: 'b', text: 'It asks the government to pay for help, and blames no rule for anyone being left behind.' },
          { id: 'c', text: 'The speaker says every child is owed a fair start.',
            note: 'True, but all three answers say that. It does not show whether a rule is blamed.' }
        ],
        answer: 'b' },
      reason: [
        'This speech names no group, blames no rule and asks for no rule to change. It asks the government to pay for help.',
        'Use the question from the two housing waitlist stories. {test:modlib~idegal} Here the speech asks for the same help for any child who needs it and blames no rule, so the answer is {a:R1.start}.'
      ]
    },
    impression: {
      resembles: 'i5-modlib-meet', first: 'i5-idegal-meet',
      text: [
        'A second look: does this remind you of a story you know? A test that is the same for every child may bring back the hill-villages letter, which was {o:idegal}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:R1}. The hill-villages letter has nothing like them, since it asks for a rule to change. The fair-start leaflet does: it asks the government to pay for a school, a doctor and help. So this speech is really like the leaflet, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'The unit in one place.',
    carry: [
      'Ask what the text wants the government to do, and find the words that say it. All three put rights first, so rights do not tell them apart. The ask does: {a:R1.leave}, {a:R1.start} or {a:R1.rules}.',
      'The topic never decides. A text about a school may want the government to stay out of it, to pay for it, or to change a rule about it.',
      'If a text asks for a fair start and also blames a rule that treats everyone alike for leaving a group behind, the answer is {a:R1.rules}.',
      'If it also sets working people against owners, holds up old customs as the guide, or puts one people first, the first question decides it, and the name is not one of this unit’s.'
    ] }
]);
