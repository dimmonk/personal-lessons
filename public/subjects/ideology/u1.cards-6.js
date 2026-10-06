// Political Ideologies, Unit One, part six: the key's first question as a question, one whole case, and the card that closes the unit.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// Six pairs of answers have no look-alike card of their own: the ledger names the question card as the one that teaches them (taughtIn).

FC.cards('ideology', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-sides', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'A text can only be read for what it is about. Take a notice about an elevator for a text on the side of the workers and you go looking for owners that are not there. Take a text about what every person is owed for a text about one people and you change whom it speaks for. Get this answer wrong and you ask the wrong questions next, however carefully. That is why it comes first. Each of the first four answers is where a different {t:ideology} starts.'
    ],
    how: [
      'Read the whole text, the last sentence included: the side a text takes is often in the last line, and a notice can end in an order. Then, for each answer in turn, ask whether the text shows it. What you must be able to point to for each is printed here.',
      'For {a:D1.class}: {needs:class}.',
      'For {a:D1.nation}: {needs:nation}.',
      'For {a:D1.tradition}: {needs:tradition}.',
      'For {a:D1.rights}: {needs:rights}.',
      'For {a:D1.none}: {needs:none}. If the text shows none of the first four, what is left is this answer.',
      'Whichever answer you give, put your finger on the words that show it. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: [
      'Some texts show two of the answers at once, such as one that speaks of the country and also sets working people against owners. The answer is chosen in one order. {a:D1.class} wins over every other answer. {a:D1.tradition} wins over {a:D1.nation} and {a:D1.rights}. {a:D1.nation} wins over {a:D1.rights}. The first one a text shows is the answer.',
      'Six pairs have no case of their own here, and each is easy to mix up: {a:D1.class} and {a:D1.tradition}, {a:D1.class} and {a:D1.rights}, {a:D1.nation} and {a:D1.none}, {a:D1.tradition} and {a:D1.rights}, {a:D1.tradition} and {a:D1.none}, {a:D1.rights} and {a:D1.none}. The test for each is printed below.'
    ] },

  { id: 'check-sides', kind: 'check', after: 'D1',
    case: 'i-check-kind',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-wage', kind: 'worked',
    h: 'A whole case, where the words point the wrong way',
    link: 'Watch one case run from the question to the answer. The words that stand out in it are not the words that decide it. Read to the end before you answer.',
    case: 'i-w-mislead',
    steps: [
      { step: 'D1',
        reason: [
          'The speech opens with "the national living wage" and says "the nation gave nothing". If you stopped at those words you would look for a people put first. Read on.',
          'The speech says who won the wage and whose side the speaker is on: {cue:D1}. The cleaners and drivers are on one side, their employers on the other, and the speaker is with the first. The word "national" says only that the wage is the same everywhere.'
        ] }
    ],
    hold: {
      neighbor: 'nation',
      prompt: { kind: 'reason',
        lead: 'The speech talks about "the nation" and "a country", so the case can look like a text that puts a people first.',
        choices: [
          { id: 'a', text: 'The speech says "the national living wage" and "a country’s wealth".',
            note: 'True, and it is why the case can look like {a:D1.nation}. But those words say only that the wage is the same across the country. They do not say that a people comes first.' },
          { id: 'b', text: 'The speech says the cleaners and drivers won the wage from their employers, and that the speaker is with the people who work, not the people who own.' },
          { id: 'c', text: 'It is a campaign speech.',
            note: 'True, and it tells you what kind of text this is. It does not separate the two answers, because a campaign speech could be for either.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nation} you must be able to point to this: {needs:nation}. The speech uses the words nation and country, but it never speaks for one people. It says the nation gave nothing, and that the wage was won from employers. It splits the country into those who work and those who own, and takes the first side.',
        'The question that tells the pair apart: {test:class~nation} Here the line runs between those who work and those who own, so the answer is {a:D1.class}.'
      ]
    },
    impression: {
      resembles: 'i-whouse', first: 'i-speech-nation',
      text: [
        'A second look: does this case look like one you know? A speech that says "nation" and "country" may bring back the bridge speech first, and the bridge speech was {a:D1.nation}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the text that answer it: {cue:D1}. The bridge speech has nothing like them. The depot leaflet does: drivers and loaders on one side, owners on the other, and the text with the first. So this case really looks like the depot leaflet, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-sides', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any name, ask who or what the text puts first, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'There are five answers. Four name a side or a thing put first: {a:D1.class}, {a:D1.nation}, {a:D1.tradition} and {a:D1.rights}. The fifth, {a:D1.none}, is for a text that only says what will happen or who is in charge.',
      'The answer is not a verdict. A text can be fair or unfair, calm or angry, and still get any of the five.',
      'A word such as "national", "workers" or "church" is not an answer. The words that decide are the ones that say who or what is put first.',
      'When a text shows two answers, the first in this order wins: {a:D1.class}, then {a:D1.tradition}, then {a:D1.nation}, then {a:D1.rights}.',
      'A name thrown at a text is not a description of it. A name has to be earned from what the text itself says.'
    ] }
]);
