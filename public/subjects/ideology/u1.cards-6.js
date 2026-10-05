// Political Ideologies, Unit One, part seven: the key's first question as a question, the two worked cases, and the two cards
// that close the unit after the drill.
// Political Ideologies is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.

FC.cards('ideology', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-sides', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'Since the depot leaflet you have seen the key’s question at the foot of each new answer, with one answer under it. This card puts the question and its five answers in one place, as the key shows them, and says why the key asks it before anything else.',
    decides: [
      'A text can only be read for what it is about. If you take a notice about a lift for a text on the side of the workers, you go looking for owners that are not there. If you take a text about what every person is owed for a text about one people, you change whom it speaks for. Getting the first answer wrong means asking the wrong questions next, however carefully you ask them.',
      'That is why this question comes first, before any finer name, and why every case in this subject starts with it. Each of the first four answers is where a different {t:ideology} starts.',
      'In this unit it is the only question, so its answer is the name. In the rest of the subject, each of the first four answers is followed by questions that lead to a finer name, and the fifth answer is followed by nothing. The answers you give on the way to a name are called your route: this first answer, and then the answers to the questions that follow it. Once a route has more than one answer, two things are marked separately: the name you give a case, and your route to it. A right name reached by a wrong answer to this first question counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole text before you answer, the last sentence included. The side a text takes is often in the last line, and a notice can end in an order. Then, for each answer in turn, ask whether the text shows it, and look for the words that show it. What you must be able to point to for each is printed here.',
      'For {a:D1.class}: {needs:class}.',
      'For {a:D1.nation}: {needs:nation}.',
      'For {a:D1.tradition}: {needs:tradition}.',
      'For {a:D1.rights}: {needs:rights}.',
      'For {a:D1.none}: {needs:none}. If the text shows none of the first four, what is left is this answer.',
      'Whichever answer you give, put your finger on the words that show it: the two groups and the side taken, the people put first, the old ways held up, what is owed to every person, or the plain matter of what happens. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: [
      'Some texts show two of the answers at once. You have met six such texts: the mill-and-port meeting, the loom hands’ newsletter, the bishop’s letter, the teachers’ leaflet, the candidate’s letter and the speech about the two duties. In each the key chose one answer, and each choice is printed below with the question that tells the pair apart.',
      'The key’s decisions run in one order. {a:D1.class} wins over every other answer. {a:D1.tradition} wins over {a:D1.nation} and {a:D1.rights}. {a:D1.nation} wins over {a:D1.rights}. So when you meet two answers in one text, the one that comes first in that order is the key’s answer, and the other gives way.'
    ] },

  { id: 'check-sides', kind: 'check', after: 'D1',
    case: 'i-check-kind',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-homes', kind: 'worked',
    h: 'A whole case, from the question to the answer',
    link: 'You have the five answers and the key’s question about them. Before the drill, watch two cases being run from the top. You are not asked anything until the end of each.',
    case: 'i-w-clean',
    steps: [
      { step: 'D1',
        reason: [
          'Go through the five answers one at a time, and for each ask whether the text shows it. Is there a split between working people and owners, with the text on one side? The letter speaks of people turned away from rented homes, but it names no workers and no owners, and it takes no side. Is there something old held up as the guide? No faith, custom or past is named.',
          'Is there one people put first? The letter says "this country", but what it asks for is something owed to every person alike, wherever they were born and whomever they love. It does not say that any one people comes first.',
          'What is left is something said to be owed to every person, and put first: {cue:D1}. That is what the text puts first.'
        ] }
    ],
    hold: {
      neighbour: 'nation',
      prompt: { kind: 'reason',
        lead: 'The letter speaks of this country, so the case can look like a text that puts a people first.',
        choices: [
          { id: 'a', text: 'The letter says "this country".',
            note: 'True, and it is why the case can look like {a:D1.nation}. But many texts mention a country without putting a people first. This letter asks for something owed to every person alike.' },
          { id: 'b', text: 'The letter says that a fair chance at a home is owed to every person alike, and that this comes first.' },
          { id: 'c', text: 'It is a letter in a local paper.',
            note: 'True, and it tells you where the words appeared. It does not separate the two answers, because a text for either of them could be a letter in a paper.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nation} you must be able to point to this: {needs:nation}. The letter does mention the country, and that is why it can look like the second answer. But it does not speak for one people. It says that a fair chance at a home is owed to every person alike, whoever they are and wherever they were born, and that a country that sets this first has its priorities right. The country in the letter is the one that should keep the promise. It is not what the letter puts first.',
        'It is the question from the two texts about race: {test:nation~rights} Here nothing places one people above the others, and what is put first is what every person is owed, so the key’s answer is {a:D1.rights}.'
      ]
    },
    impression: {
      resembles: 'i-rights-again',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the speech about every child. There too, a text said what every person is owed, whatever their name or bank balance, and said that it comes first.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the text. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the text that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-wage', kind: 'worked',
    h: 'A second whole case, where the words point the wrong way',
    link: 'The letter about homes was a clean case: one thing was going on in it. In this second case the words that stand out are not the words that decide it. Read to the end before you answer.',
    case: 'i-w-mislead',
    steps: [
      { step: 'D1',
        reason: [
          'The speech opens with "the national living wage" and says "the nation gave nothing". If you stopped at those words you would look for a people put first, and the speech does speak of a country’s wealth. Read on.',
          'The speech says who won the wage and who is on whose side: {cue:D1}. The cleaners and drivers are on one side, their employers are on the other, and the speaker is with the first. That is working people set against owners, with the text on the workers’ side. The word "national" says only that the wage is the same everywhere.'
        ] }
    ],
    hold: {
      neighbour: 'nation',
      prompt: { kind: 'reason',
        lead: 'The speech talks about "the nation" and "a country", so the case can look like a text that puts a people first.',
        choices: [
          { id: 'a', text: 'The speech says "the national living wage" and "a country’s wealth".',
            note: 'True, and it is why the case can look like {a:D1.nation}. But those words say only that the wage is the same across the country, and that wealth is made and held in it. They do not say that a people comes first.' },
          { id: 'b', text: 'The speech says the cleaners and drivers won the wage from their employers, and that the speaker is with the people who work, not the people who own.' },
          { id: 'c', text: 'It is a campaign speech.',
            note: 'True, and it tells you what kind of text this is. It does not separate the two answers, because a campaign speech could be for either.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nation} you must be able to point to this: {needs:nation}. The speech uses the words nation and country, but it never speaks for one people. It does the opposite. It says the nation gave nothing, and that the wage was won from employers. It splits the country into those who work and those who own, and takes the first side.',
        'It is the question from the mill-and-port meeting: {test:class~nation} Here the line runs between those who work and those who own, so the key’s answer is {a:D1.class}.'
      ]
    },
    impression: {
      resembles: 'i-whouse', first: 'i-speech-nation',
      text: [
        'Now the second look: does this case look like one you know? A speech that says "nation" and "country" may bring back the bridge speech first, and the bridge speech was {a:D1.nation}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the text that answer it. They are {cue:D1}. The bridge speech has nothing like them: it speaks of one people, and it has no owners and no workers in it. The depot leaflet does: drivers and loaders on one side, owners on the other, and the text with the first. So the case this one really looks like is the depot leaflet, and the key’s answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-sides', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the key’s first question on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any name, ask who or what the text puts first, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'There are five answers. Four name a side or a thing put first: {a:D1.class}, {a:D1.nation}, {a:D1.tradition} and {a:D1.rights}. The fifth, {a:D1.none}, is for a text that only says what will happen or who is in charge.',
      'The answer is not a verdict. A text can be fair or unfair, calm or angry, and still get any of the five. Whether it is right is a separate question that no part of the key asks.',
      'A word such as "national", "workers" or "church" is not an answer. The words that decide are the ones that say who or what is put first.',
      'When a text shows two answers, the key chooses. The order is {a:D1.class} first, then {a:D1.tradition}, then {a:D1.nation}, then {a:D1.rights}, and the first one a text shows is the key’s answer.',
      'A name thrown at a text is not a description of it. The first answer is where a name starts, and a name has to be earned from what the text itself says.',
      'Every case in this subject starts with this question. Your answer to it is the first part of your route to a name.'
    ] },

  { id: 'transfer-sides', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five answers is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: something you read, something said to you, or something you said. The lines under each answer are there to jog your memory.'
    ],
    prompts: [
      { family: 'class', occasion: 'A time at work, or in a trade you know, when pay or hours changed and people talked about who gains and who pays.' },
      { family: 'nation', occasion: 'A speech, a column or a slogan that spoke of "us", the country or its ordinary people.' },
      { family: 'tradition', occasion: 'A holiday, a Sunday, a custom or a faith that someone said should come before convenience.' },
      { family: 'rights', occasion: 'An argument about whether a rule was fair to everyone, or about what a person can expect to be given.' },
      { family: 'none', occasion: 'A notice, a timetable or a plain proposal that someone described with a big political name.' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] }
]);
