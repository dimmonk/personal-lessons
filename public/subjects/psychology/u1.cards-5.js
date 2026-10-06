// Psychology, Unit One, part five: the key's first question as a question, one whole case, and the closing card.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// Three pairs of kinds have no look-alike card of their own: the ledger names this card as the one that teaches them (taughtIn).

FC.cards('psychology', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its four answers in one place.',
    decides: [
      'Get the kind wrong and you ask the wrong questions next, however carefully: take one evening for a whole character and you go looking for years the case does not have; take something said to another person for private reasoning and that person drops out of view. That is why this question comes first.'
    ],
    how: [
      'Read the whole case, the last sentence included: the years are often there. Then check the kinds in this order, and stop at the first one the case shows: {a:D1.pattern}, then {a:D1.tactic}, then {a:D1.reasoning}. If it shows none of them, it is {a:D1.none}.',
      'Whichever you choose, put your finger on the words that show it. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two kinds at once. A reason for your own act can be made out of the person you say it to; one evening can have years behind it. The order above picks the answer. Three pairs have no case of their own here, and each is easy to mix up: {a:D1.tactic} and {a:D1.none}, {a:D1.reasoning} and {a:D1.none}, {a:D1.reasoning} and {a:D1.pattern}. The test for each is printed below.' },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-rehearsal', kind: 'worked',
    h: 'A whole case, where the opening points the wrong way',
    link: 'Watch one case run from the question to the answer. The first thing you notice in it is not the thing that decides it. Read to the end before you answer.',
    case: 'g-rehearsal',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with one missed rehearsal and Petra’s reasons for it. If it ended there, you would be looking at one person giving reasons for something she did.',
          'It does not end there. Read on: {cue:D1}. That is twenty years, family occasions and three workplaces, and the same thing in each. The case has become a long view of one person.'
        ] }
    ],
    hold: {
      neighbor: 'reasoning',
      prompt: { kind: 'reason',
        lead: 'Petra gives reasons for missing the rehearsal, so the case can look like {a:D1.reasoning}. What decides it?',
        choices: [
          { id: 'a', text: 'Petra gives reasons for missing the rehearsal: the traffic, and not being told about the time.',
            note: 'True, and it is why the case can look like {a:D1.reasoning}. If the case ended there, that would be the answer. It does not end there.' },
          { id: 'b', text: 'The same thing has happened for twenty years, at family occasions and at three jobs, each time with a reason.' },
          { id: 'c', text: 'Her sister was not surprised.',
            note: 'True, and it hints at a history. But it is one person’s reaction on one day. The history itself is in the sentence after it.' }
        ],
        answer: 'b' },
      reason: [
        'A person giving reasons for something she did is what you point to for {a:D1.reasoning}, and the first half of this case shows it. The second half shows the same thing across twenty years. When a case shows both, the answer is {a:D1.pattern}: the larger claim is the one the case supports.',
        'Petra’s reasons on the day may even be true. The answer does not depend on that. It depends on how much of her life the case shows.'
      ]
    },
    impression: {
      resembles: 'g-moira', first: 'g-birthday-brother',
      text: [
        'Now a second look: does this case look like one you know? A missed occasion and a ready reason may bring back Dev and the forgotten birthday, which was {a:D1.reasoning}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it: {cue:D1}. Dev’s case has nothing like them. Moira’s does, so the case this one really looks like is Moira’s, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any name, ask what the case is made of, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'The kind is not a verdict, and none of the four is a diagnosis. Each says only what the case shows.',
      'One evening is never {a:D1.pattern}, however bad it was and whoever says "always". Count the occasions, the places and the people.',
      'A hard week after something real is {a:D1.none}. It does not need a bigger word.',
      'When a case shows two kinds, the answer is chosen in this order: years, places and relationships first; then anything said or done to another person about them; then one person’s reasons.'
    ] }
]);
