// Political Ideologies, Unit Five, part five: the two worked cases, and the two cards that close the unit after the drill.
// The subject is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('ideology', 'u5', [

  { id: 'worked-clean', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the three names, the question about them, and the three places where the first question overrules this one. Before you run a case yourself, watch two being run from the top, in the order the questions come. You are not asked anything until the end of each.',
    case: 'i5-worked-clean',
    steps: [
      { step: 'D1',
        reason: 'What the text puts first is what each person is free to do: {cue:D1}. It speaks for any person at all. It sets no working people against owners, it speaks for no one people, and it holds up nothing handed down from the past.' },
      { step: 'R1',
        reason: 'The text says what the council is to do, and what it is not to do: {cue:R1}. The council keeps the courts and the police, the text says that is enough, and nothing is asked of it for anyone beyond that.' }
    ],
    hold: {
      neighbour: 'modlib',
      prompt: { kind: 'reason',
        lead: 'The letter names the courts and the police, and courts and police are things a government provides. So it can look as if the text asks the government to give something.',
        choices: [
          { id: 'a', text: 'The letter names courts and police, which the government provides.',
            note: 'True, and it is why the case can look like {o:modlib}. But courts and police are the few jobs the text allows. The text says that is enough, and it asks for nothing to be given to anyone.' },
          { id: 'b', text: 'The letter says the courts and the police are enough, and that beyond them the government should leave people to their own agreements.' },
          { id: 'c', text: 'The writer owns a spare room.',
            note: 'True, but that is story. It would be true of a writer who wanted the government to build rooms for everyone, and the name would be different.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:modlib} you must be able to point to this: {needs:modlib}. The letter asks for nothing to be given. Courts and police are jobs the text keeps for the government, and it says in so many words that they are enough.',
        'It is the question from the two cases about the clinic in Marrow. {test:clib~modlib} Here the text asks the government to protect rights and then stay out, so the answer is {a:R1.leave}.'
      ]
    },
    impression: {
      resembles: 'i5-clib-meet',
      text: [
        'The questions have given their answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the street-music petition: a freedom, a short list of jobs for the government, and a request to leave the rest alone.',
        'Here the answer and the likeness agree, so it stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-misleading', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The spare-room letter was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'i5-worked-misleading',
    steps: [
      { step: 'D1',
        reason: 'What the text puts first is what every child is owed: {cue:D1}. It names no working people and no owners, it speaks for no one people, and it holds up nothing handed down from the past.' },
      { step: 'R1',
        reason: 'The text asks the government to give something: {cue:R1}. It also says that the test is the same for every child, and that "nobody says it is unfair". It does not say that a rule leaves a group behind. It says that some children start a long way back, and asks the government to pay for tutoring and a study room for any child who needs one.' }
    ],
    hold: {
      neighbour: 'idegal',
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
        'It is the question from the two cases about the housing list. {test:modlib~idegal} Here the text asks for the same help for any child who needs it, and blames no rule, so the answer is {a:R1.start}.'
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
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Say what the text wants done for people, and point to the words in it that say so. If you cannot point, you do not have an answer yet.',
      'Rights are not what tells the three names apart: all three put what people are owed first. What tells them apart is what the text wants done about it: {a:R1.leave}, {a:R1.start} or {a:R1.rules}.',
      'The story never decides. A text about a school may want the government to stay out of it, to pay for it, or to change a rule about it. Go by what the text asks.',
      'When a text asks for a fair start and also says that a rule which treats everyone alike has left a group behind, the answer is {a:R1.rules}. When it also sets working people against owners, or holds up old ways as the guide, or puts one people first, the first question decides it, and the name is not one of this unit’s.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the three names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the three and name an occasion of your own: somewhere you heard it, or somewhere you said it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'clib', occasion: 'A form, a licence or a fee that you thought a government had no business asking for.' },
      { outcome: 'modlib', occasion: 'A service that you thought everyone should be able to use, and everyone should pay for together.' },
      { outcome: 'idegal', occasion: 'A rule that was the same for everyone, and that you or someone near you found worked out unevenly.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] }
]);
