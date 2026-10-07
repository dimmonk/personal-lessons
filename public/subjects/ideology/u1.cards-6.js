// Political Ideologies, Unit One, part six: the key's first question as a question, one whole story, and the card that closes the unit.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, each answer with when it is given, why it decides, and for every
// pair already compared the question that separates it and the key's tie-break.
// Six pairs of answers have no look-alike card of their own: the ledger names the question card as the one that teaches them (taughtIn).

FC.cards('ideology', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-sides', kind: 'question', step: 'D1',
    h: 'The one question to ask first',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Get this wrong and every question after it goes wrong too. Take an elevator notice for a text on the workers’ side and you go looking for owners who are not there. Take a text about what every person is owed for a text about one people and you change whom it speaks for. Each of the first four answers is where a different {t:ideology} starts.'
    ],
    how: [
      { do: 'Read to the end before you answer.', why: 'The side a text takes is often in the last line.' },
      { do: 'First look for workers set against owners: {a:D1.class}.', why: 'It wins over every other answer.' },
      { do: 'Next look for customs held up as the guide: {a:D1.tradition}.', why: 'It wins over one people put first, and over rights.' },
      { do: 'Next look for one people put first: {a:D1.nation}.', why: 'It wins over rights.' },
      { do: 'Next look for something every person is owed: {a:D1.rights}.', why: 'That is what is left when nobody is set against anybody.' },
      { do: 'None of these? It is {a:D1.none}.', why: 'Then the text is about one practical matter, or about who is in charge.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Some texts show two answers at once, such as a speech that talks about the country and also takes the workers’ side against their bosses. Use the order above. The test for each pair is below.' },

  { id: 'check-sides', kind: 'check', after: 'D1',
    case: 'i-check-kind',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- One whole story, watched ---------- */
  { id: 'worked-wage', kind: 'worked',
    h: 'One whole story, where the words point the wrong way',
    link: 'Watch one story worked through. The words that stand out are not the words that decide it, so read to the end.',
    case: 'i-w-mislead',
    steps: [
      { step: 'D1',
        reason: [
          'The speech opens with “the national living wage” and says “the nation gave nothing”. If you stopped there, you would look for a people put first.',
          'It does not stop there: {cue:D1}. The cleaners and drivers are on one side, their employers on the other, and the speaker is with the first. The word “national” only says the wage is the same everywhere.'
        ] }
    ],
    hold: {
      neighbor: 'nation',
      prompt: { kind: 'reason',
        lead: 'The speech talks about “the nation” and “a country”, so it can look like {a:D1.nation}. What decides it?',
        choices: [
          { id: 'a', text: 'The speech says “the national living wage” and “a country’s wealth”.',
            note: 'True, and it is why this looks like {a:D1.nation}. But those words only say the wage is the same across the country.' },
          { id: 'b', text: 'The speech says the cleaners and drivers won the wage from their employers, and that the speaker is with the people who work.' },
          { id: 'c', text: 'It is a campaign speech.',
            note: 'True, but a campaign speech could be for any side.' }
        ],
        answer: 'b' },
      reason: [
        'The speech uses the words “nation” and “country”, but it never speaks for one people. It says the wage was won from employers, and it splits the country into those who work and those who own.',
        'The test for this pair: {test:class~nation} Here the line runs between those who work and those who own, so the answer is {a:D1.class}.'
      ]
    },
    impression: {
      resembles: 'i-whouse', first: 'i-speech-nation',
      text: [
        'A second look: does this remind you of a story you know? A speech that says “nation” and “country” may bring back the bridge speech, which was {a:D1.nation}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:D1}. The bridge speech has nothing like them. The depot leaflet does, with workers on one side and owners on the other, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-sides', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you name a text, ask whose side it is on, and find the words that show it. If you can’t find them, you don’t have an answer yet.',
      'There are five answers. Four put someone or something first: {a:D1.class}, {a:D1.nation}, {a:D1.tradition} and {a:D1.rights}. The fifth, {a:D1.none}, is for a text that only says what will happen or who is in charge.',
      'The answer is not a verdict. A text can be fair or unfair, calm or angry, and still get any of the five.',
      'A word like “national”, “workers” or “church” is not an answer. The words that decide are the ones that say who or what comes first.',
      'When a text shows two answers, the first in this order wins: {a:D1.class}, then {a:D1.tradition}, then {a:D1.nation}, then {a:D1.rights}.',
      'A name thrown at a text is not a description of it. A name has to be earned from what the text says.'
    ] }
]);
