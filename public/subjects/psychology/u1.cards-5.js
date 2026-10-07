// Psychology, Unit One, part five: the key's first question as a question, one whole case, and the closing card.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// Three pairs of kinds have no look-alike card of their own: the ledger names this card as the one that teaches them (taughtIn).

FC.cards('psychology', 'u1', [

  /* ---------- The question, in one place ---------- */
  { id: 'q-kind', kind: 'question', step: 'D1',
    h: 'The one question to ask first',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'Get this wrong and everything after it goes wrong. Take one evening for a whole personality, and you go looking for years that are not there. Take words aimed at someone for the speaker’s own reasons, and you miss the person they hurt.'
    ],
    how: [
      { do: 'Read to the end before you answer.', why: 'The years are often in the last sentence.' },
      { do: 'First look for years, places and people: {a:D1.pattern}.', why: 'When a story shows the biggest claim, the biggest claim wins.' },
      { do: 'Next look for a target: {a:D1.tactic}.', why: 'Words aimed at someone matter more than the speaker’s reasons.' },
      { do: 'Next look for the person’s own reasons: {a:D1.reasoning}.', why: 'That is what is left when nobody is targeted.' },
      { do: 'None of these? It is {a:D1.none}.', why: 'Then there is nothing more to name.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Some stories show two at once: an excuse for your own lateness that blames the person you say it to, or one evening with twenty years behind it. Use the order above. The test for each pair is below.' },

  /* ---------- One whole story, worked ---------- */
  { id: 'worked-rehearsal', kind: 'worked',
    h: 'One whole story, where the start points the wrong way',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'g-rehearsal',
    steps: [
      { step: 'D1',
        reason: [
          'It opens with one missed rehearsal and Petra’s reasons for it. If it stopped there, it would be {a:D1.reasoning}.',
          'It does not stop there: {cue:D1}. That is twenty years, family events and three jobs, and the same thing every time.'
        ] }
    ],
    hold: {
      neighbor: 'reasoning',
      prompt: { kind: 'reason',
        lead: 'Petra gives reasons for missing the rehearsal, so this can look like {a:D1.reasoning}. What decides it?',
        choices: [
          { id: 'a', text: 'Petra gives reasons for missing the rehearsal: the traffic, and not being told the time.',
            note: 'True, and it is why this looks like {a:D1.reasoning}. If the story ended there, that would be the answer.' },
          { id: 'b', text: 'The same thing has happened for twenty years, at family events and at three jobs, each time with a reason.' },
          { id: 'c', text: 'Her sister was not surprised.',
            note: 'True, but it is one person’s reaction on one day. The history itself is in the next sentence.' }
        ],
        answer: 'b' },
      reason: [
        'The first half shows a person giving reasons. The second half shows the same thing for twenty years. When a story shows both, the bigger claim wins: {a:D1.pattern}.',
        'Her excuse on the day may even be true. It does not change the answer.'
      ]
    },
    impression: {
      resembles: 'g-moira', first: 'g-birthday-brother',
      text: [
        'A second look: does this remind you of a story you know? A missed occasion and a ready excuse may bring back Dev and the forgotten birthday, which was {a:D1.reasoning}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:D1}. Dev’s story has nothing like them. Moira’s does, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you use any label, ask what you are looking at, and find the words that show it.',
      'None of the four is a verdict or a diagnosis. Each says only what the story shows.',
      'One evening is never {a:D1.pattern}, however bad it was and whoever says "always". Count the years, the places and the people.',
      'A hard week after something real is {a:D1.none}. It does not need a bigger word.',
      'When a story shows two, use the order: years, places and people first; then a target; then the person’s own reasons.'
    ] }
]);
