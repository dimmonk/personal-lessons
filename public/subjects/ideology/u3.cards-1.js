// Political Ideologies, Unit Three, part one: the opening card, the word the unit leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One's question, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called"
// sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('ideology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'One people, put first: five different things a text can be doing',
    canDo: 'After this unit you can read a short text that puts one people first, and say which of five names it is. You will do it by asking whom the text speaks for and against whom, and then what it wants done about voting and about people who object. The text can be a speech, a column, a leaflet, a post, or something a person says to you.',
    everyday: [
      "You already know the raw material. Think of the last time you heard one of these. 'We are all in this together.' 'The people at the top do not care about the rest of us.' 'This country belongs to people like us.' 'Anyone who keeps arguing should be silenced.' 'Let the voters decide.'",
      'Each of these can be a part of one of five different things. They share a starting point, which is that one people comes first. They differ in whom that people is set against, and in what happens to elections and to anyone who disagrees. A single sentence never tells you which of the five you are reading. This unit teaches what else to look for in the text, and the two questions to put once you have found it.'
    ],
    map: { branch: 'nation' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A word two of the names lean on ---------- */
  { id: 'term-elite', kind: 'term', term: 'elite',
    h: 'A few at the top, with far more say than everyone else',
    link: 'Several of the names in this unit speak of ordinary people set against a group at the top. Before the names need it, this card gives that group a word.',
    case: 'n-term-quarry',
    plain: [
      'Look at what sets those three families apart. There are very few of them. They have far more money, power or influence than anyone near them. And what they decide reaches everyone else in the town. Those three things, together, make a group of this kind.',
      'The word does not say that such a group is wicked, and it does not say how the group got there. It says how few they are and how far above they stand. In real texts, the group is whoever the speaker says is at the top: ministers, officials, bankers, newspaper owners, people who look abroad.'
    ],
    after: 'When a text sets ordinary people against a group like this, this is the word the cards use for the group.' },

  /* ---------- Nationalism ---------- */
  { id: 'meet-nationalism', kind: 'meet', outcome: 'nationalism',     // heading is the outcome's plain words, from the key
    link: 'Unit One sorted every text by who or what it puts first. This unit is about one of those answers, {a:D1.nation}, and the five names inside it. The first name is the plainest, and the others are easiest to follow once you have met it.',
    case: 'n-anniversary', mark: 'N1',
    strip: [
      'One group is spoken for, and it is everyone: "farmers and clerks, nurses and bakers, those who voted for us and those who did not".',
      'Nobody inside the country is named as an enemy. What divides people is said to matter less than what holds them together.',
      'The nation comes first: "our first loyalty is to this nation".',
      'Nothing is said against elections. The speaker tells the voters that they will choose in October, and says that every party is free to stand against him.'
    ],
    explain: [
      'The speaker draws one line around everyone in the country, and says that the people inside it belong together. Work, party and region all sit inside the line, and none of them is allowed to matter more than the line itself. That is what it means to speak for everyone in the country as a single people.',
      'A text about a people can go other ways. It can set the country\'s ordinary people against a few at the top. It can sort people into peoples ranked higher and lower. Or it can speak for everyone and also take away the vote. This speech does none of these. It speaks for everyone, names nobody inside the country as the other side, ranks no one, and leaves the election to the voters.',
      'Why would a speaker do this? A country is made of people who disagree about almost everything. A speaker who wants all of them behind one effort, a recovery, a hospital, a hard winter, reaches for the one thing they all share, which is the country.'
    ],
    feature: { step: 'N1', option: 'whole' },
    name: 'The name for this is {o:nationalism}. A "nation" is a people who share a country and a life, and the ending "-ism" turns that into a belief: the belief that this people comes first. Some people use the word only for something harsh. It is used here for the plain case you have just read: the nation first, spoken for as one, with the vote left alone. The harsher cases have names of their own.' },

  { id: 'again-nationalism', kind: 'again', outcome: 'nationalism',
    link: 'The anniversary speech gave you what to point to, from one case: {needs:nationalism}. Here is a second case with a completely different story.',
    first: 'n-anniversary', second: 'n-schoolbooks', step: 'N1',
    instruction: 'Find what the two cases share. Ignore the story (a founding day, a school textbook). Look at one thing only: which words speak for everyone in the country as one people?',
    prompt: { kind: 'phrase', answer: 'because they belong to the same people' },
    shared: [
      'Both texts speak for everyone in the country together. The speaker on Founding Day says that nothing that divides us is as strong as what holds us together. The minister says that children in every town and every valley will read the same story because they belong to the same people. Neither names anybody inside the country as the other side.',
      'Both also leave the vote alone. The speaker says that every party is free to stand against him. The minister says that parents who disagree may write to their representatives and that parliament will take up the complaints.',
      'The two stories share nothing else, so this holds wherever a text speaks for everyone as one people and leaves the vote alone. That is what {o:nationalism} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once, in full.',
    body: [
      'Every text in this unit has two layers. The top layer is the story: what the text is about. A hospital, a school book, a shipyard, a bank, a parade. The layer underneath is what the text says about whom it speaks for, and what it wants done about voting and about people who object.',
      'The five names belong to the layer underneath. The same story can carry any of them, and each name turns up in every kind of story. A text about a hospital is no more likely to have one name than another.',
      'From here on, the texts change their stories on purpose. Sometimes two texts will share a story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.',
      'The tone does not decide either. A text can be loud, proud, angry or polite and carry any of the five names. What decides is what the text says it wants.'
    ],
    fixed: ['what the questions ask about: {q:N1} and {q:N2}'],
    varies: ['the topic', 'the people', 'how loud or calm the words are', 'whether you like the speaker', 'how much is at stake'] },

  { id: 'portrait-nationalism', kind: 'portrait', outcome: 'nationalism',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:nationalism} in real life, where nobody marks the words for you.',
    typical: [
      '"We", "our country", "our people", "all of us". The speaker keeps the group wide, and trades, parties and regions are all inside it.',
      'It is usually warm and proud: shared history, shared work, a flag, a language, a hard time got through together.',
      'It asks something of everyone: pay your share, back the effort, trust the plan. The unity is meant to carry a task.',
      'If an enemy is named at all, it is outside the country: a rival country, a disaster, an old injustice. Nobody inside the country is named.',
      'Elections go on. The speaker may even say so, to show that the unity is chosen and not forced.'
    ],
    not: 'Pride in a country, flags and anthems are not what the name needs. The name needs the whole nation spoken for as one, nobody inside it named as the enemy, no ranking of peoples, and the vote left alone. A text that is proud of its country and fails one of those four does not get this name.',
    wild: ['"We are one people."', '"Our country comes first."', '"Whatever you voted for, this is our country."', '"Every one of us has a part to play."', '"We stand together."'],
    self: 'In your own life it is the national day speech, the anthem before a match, the slogan on a campaign poster that speaks to everyone, or what people say after a disaster: "whatever else we think, we are in this together".',
    ask: '"Whom does the text speak for, is anyone inside the country named as the enemy, and what will happen to the vote?" If everyone is spoken for, nobody inside is named, and the vote is left alone, this is the name to look at.' },

  { id: 'check-nationalism', kind: 'check', after: 'nationalism',
    case: 'n-savings',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words in which the poster speaks for everyone in the country as one.',
           answer: 'When the whole country saves together, the whole country stands taller' } }
]);
