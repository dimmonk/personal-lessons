// Political Ideologies, Unit Three, part two: the second name, the first look-alike pair, and the first wrong idea.

FC.cards('ideology', 'u3', [

  /* ---------- Fascism ---------- */
  { id: 'meet-fasc', kind: 'meet', outcome: 'fasc',
    link: 'The anniversary speech spoke for everyone and left the vote alone. A text can speak for everyone in just the same way and treat the vote very differently. Here is one that does.',
    case: 'n-rally', mark: 'N2',
    strip: [
      'One group is spoken for, and it is everyone: "We are one people, with one will." That is the same answer to the first question as in the anniversary speech.',
      'But the speaker does not stop there. He says "I am its voice": one person speaks for the people, and no one else does.',
      'The other parties are to be closed, and the papers that print their complaints are to be shut. Nobody is left who can say the opposite.',
      'Nobody is ranked by blood. The text is about one nation and one leader.'
    ],
    explain: [
      'In the anniversary speech, the voters chose, and other parties could stand against the speaker. Here the speaker takes that away. He wants elections and rival parties done away with, and critics silenced, so that nobody speaks for the people but him. That is what the second question asks: {q:N2}',
      'The line for this name has a bracket in it. The bracket is a second way of speaking for a people: there the country\'s ordinary people face a group at the top, which has the word {t:elite}, and the nation still comes first. This speaker uses the first way, the whole nation as one. What decides the name is the same in both: elections, other parties and critics pushed aside.',
      'This is the heart of the name. A text that speaks for the whole nation, and says only that, is the plain case you have just met. A text that speaks for the whole nation and also removes everyone\'s way of saying no is another thing, and it is given another name.',
      'Why would a speaker do this? If the nation is one people with one will, then someone who disagrees can be said to be against the people itself. The vote, rival parties and a free press then look like obstacles, and doing away with them follows from the first step.'
    ],
    feature: { step: 'N2', option: 'aside' },
    name: [
      'The name for this is {o:fasc}. It is borrowed from a real movement. Every text in this unit is invented, and none describes a real party or a real person.',
      'Where the line for this name falls is argued over by the people who study it. Some keep the word for one place and one period, and some use it more widely. One line is drawn here, the one you have just read: the nation spoken for as one, and elections and critics pushed aside so that one voice is left. It is drawn there because that is what a short text can show.'
    ] },

  { id: 'again-fasc', kind: 'again', outcome: 'fasc',
    link: 'The rally speech gave you what to point to, from one case: {needs:fasc}. Here is a second case with a different story.',
    first: 'n-rally', second: 'n-factory-letter', step: 'N2',
    instruction: 'Find what the two cases share. Ignore the story (a rally, a letter to workshops). Look at one thing only: which words take away the say of other parties and of those who disagree?',
    prompt: { kind: 'phrase', answer: 'Every association and every party other than the Movement is dissolved from the first of the month' },
    shared: [
      'Both texts speak for the whole nation as one: "one people, with one will", "one people and it has one will". And in both, those who might say no are removed: the other parties are closed or dissolved, and so are the papers or associations that could speak for them. In the rally speech the papers will be shut. In the letter, anyone who calls a meeting against the Movement will be arrested.',
      'The two stories share nothing else, so this holds wherever a text speaks for the nation as one and also wants everyone\'s way of saying no taken away. That is what {o:fasc} names.'
    ] },

  { id: 'portrait-fasc', kind: 'portrait', outcome: 'fasc',
    link: 'You now know what decides the name. This card fills in the rest of the picture, so that you can spot {o:fasc} in real life, where nobody marks the words for you.',
    typical: [
      'Elections or rival parties go, or are made meaningless: parties are banned, votes are cancelled, parliament is shut or filled with one movement.',
      'Those who disagree are silenced or broken: papers closed, critics dismissed, arrested or frightened. Nearly every dictatorship does these things, whatever it believes, so on their own they never settle a name. They answer only the second question.',
      'One leader or one movement says that it speaks for everyone, and disagreement is treated as treason against the people.',
      'It usually comes with a story of a nation that has fallen and must be reborn, marches, uniforms, flags, young people drilled together, and a government that tells owners what to make.',
      'None of those last things decides the name. A text can have all of them and still leave the vote in place. A text can have none of them and still push the vote aside. They are what the name is usually like. What decides it is the second question.'
    ],
    not: [
      'A leader, a flag or a march is not enough. A loud, proud text that leaves elections and critics alone is {o:nationalism}.',
      'The methods alone do not even tell you the first answer. A text that wants working people to take power and rule alone also bans rivals, and its answer to the first question is {a:D1.class}. A text about a ruler that speaks for no side at all has the answer {a:D1.none}.'
    ],
    wild: ['"One people, one will, one leader."', '"The old parties have had their time."', '"A nation does not need an argument."', '"Those who are not with us are against the nation."', '"The Leader is the voice of the people."'],
    self: 'In your own life it is less likely to be a rally than a way of arguing: "we are one people, so anyone who objects is an enemy", or "shut down the papers and the critics until things are fixed".',
    ask: '"Does the text want elections, other parties or critics done away with, so that one voice is left?" If it does, and the nation is spoken for as one, this is the name to look at.' },

  { id: 'check-fasc', kind: 'check', after: 'fasc',
    case: 'n-gazette',
    ask: { type: 'phrase', step: 'N2', say: 'Tap the words that take away the say of anyone who might disagree.',
           answer: 'The election due in March is cancelled' } },

  { id: 'look-nationalism-fasc', kind: 'lookalike', ledger: 'nationalism~fasc',
    link: 'You have now met two names whose first answer is the same. They are easy to mix up, because both speak for everyone and both can sound proud and sure of themselves. This card puts them side by side.',
    cases: ['n-lk-hospital-nat', 'n-lk-hospital-fasc'],
    instruction: 'Both cases are about the opening of a new hospital, and the first half of each speech is the same word for word. Compare one thing: what each text wants done with the opposition and with people who question the hospitals.',
    prompt: { kind: 'which', option: 'N2.aside', answer: 'n-lk-hospital-fasc' },
    difference: [
      'In Case A the prime minister says that parliament will debate the health budget and that the opposition will have its say on every line. The text leaves the vote and the right to disagree in place. With the whole nation spoken for as one, the case is {o:nationalism}.',
      'In Case B the Leader says that the budget is his alone to decide, that doctors and papers that question his hospitals will be closed, and that the opposition has no more place. The text takes away the vote and the right to disagree. The answer is {a:N2.aside}, and the case is {o:fasc}.',
      'The hospital is the same, and so are the first words. What differs is what each text does with everyone who might say no. Warmth and pride cannot tell you which of the two you are reading, and nor can the first half of the speech.'
    ] },

  { id: 'refute-borders', kind: 'refute', about: 'nationalism',
    h: 'A wrong idea: wanting strong borders makes a text fascist',
    link: 'The two names you have just compared differ in what they do with the vote and with critics. That gives you a way to test a common idea.',
    idea: '"Anyone who wants strong borders is a fascist."',
    verdict: 'This is wrong.',
    right: [
      'Wanting a country to decide who crosses its borders, or wanting its industry or its culture protected, says what a text wants for the nation. It says nothing about what the text would do to the vote or to its critics, and that is the question that separates {o:fasc} from {o:nationalism}.',
      'A text can call for strong borders and tell the voters that other parties are free to stand against it. It leaves the vote and the other parties in place, and nothing in it is {o:fasc}.',
      'So the idea fails at the point where it jumps. Strong borders are about what a text wants for its country. They are not what makes a text {o:fasc}. Before you use that name, point to the words that push the vote, other parties or critics aside. No such words, no {o:fasc}.'
    ],
    testedBy: ['n-claim-borders'] }
]);
