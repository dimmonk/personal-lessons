// Political Ideologies, Unit Five, part six: the worked case, and the card that closes the unit after the drill.
// The subject is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u5', [

  { id: 'worked-misleading', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions come. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'i5-worked-misleading',
    steps: [
      { step: 'D1',
        reason: 'What the text puts first is what every child is owed: {cue:D1}. It names no working people and no owners, it speaks for no one people, and it holds up nothing handed down from the past.' },
      { step: 'R1',
        reason: 'The text asks the government to give something: {cue:R1}. The test is the same for every child, and "nobody says it is unfair", so no rule is said to leave a group behind.' }
    ],
    hold: {
      neighbor: 'idegal',
      prompt: { kind: 'reason',
        lead: 'The speech is about an entry test that is the same for every child, and about children who start behind. That is what the hill-villages letter was about, so the case can look like {o:idegal}.',
        choices: [
          { id: 'a', text: 'It is about an entry test that is the same for every child.',
            note: 'True, and it is why the case can look like {o:idegal}. But the hill-villages letter said that the test leaves a group behind. This speech does not.' },
          { id: 'b', text: 'It asks the government to pay for help for any child who needs it, and it names no group and no rule as the cause.' },
          { id: 'c', text: 'It was said to parents at a school.',
            note: 'True, but that is story. It does not show whether a rule is blamed.' }
        ],
        answer: 'b' },
      reason: [
        'The story points to {o:idegal}. But for that name you must be able to point to this: {needs:idegal}. This speech names no group, says that no rule has left anyone behind, and asks for no rule to change. It asks the government to pay for help.',
        'It is the question from the two cases about the housing waitlist. {test:modlib~idegal} Here the text asks for the same help for any child who needs it, and blames no rule, so the answer is {a:R1.start}.'
      ]
    },
    impression: {
      resembles: 'i5-modlib-meet', first: 'i5-idegal-meet',
      text: [
        'Now the second look: does this case look like one you know? A test that is the same for every child may bring back the hill-villages letter first, and that letter was {o:idegal}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:R1}. The hill-villages letter has nothing like them: it asks for the rules to change. The fair-start leaflet does: it asks the government to pay for a school, a doctor and help, with all of us paying together. So the case this one really looks like is the leaflet, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Say what the text wants done for people, and point to the words that say so. All three names put what people are owed first, so rights do not tell them apart. What tells them apart is what the text wants done about it: {a:R1.leave}, {a:R1.start} or {a:R1.rules}.',
      'The story never decides. A text about a school may want the government to stay out of it, to pay for it, or to change a rule about it.',
      'When a text asks for a fair start and also says that a rule which treats everyone alike has left a group behind, the answer is {a:R1.rules}. When it also sets working people against owners, or holds up old ways as the guide, or puts one people first, the first question decides it, and the name is not one of this unit’s.'
    ] }
]);
