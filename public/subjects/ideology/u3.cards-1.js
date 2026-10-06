// Political Ideologies, Unit Three, part one: the opening card, the word the unit leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('ideology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'One people, put first: five different things a text can be doing',
    canDo: 'After this unit you can read a short text that puts one people first, and say which of five names it is. You will do it by asking whom the text speaks for and against whom, and then what it wants done about voting and about people who object. The text can be a speech, a column, a leaflet, a post, or something a person says to you.',
    everyday: [
      "You already know the raw material. 'We are all in this together.' 'The people at the top do not care about the rest of us.' 'This country belongs to people like us.' 'Anyone who keeps arguing should be silenced.' 'Let the voters decide.'",
      'Each of these can be part of one of five different things. They all put one people first. They differ in whom that people is set against, and in what happens to elections and to anyone who disagrees. A single sentence never tells you which of the five you are reading; the two questions in this unit do.'
    ],
    map: { branch: 'nation' } },         // the preview map is drawn from the key, with plain words beside each label

  { id: 'term-elite', kind: 'term', term: 'elite',
    h: 'A few at the top, with far more say than everyone else',
    link: 'Several of the names in this unit set ordinary people against a group at the top. This card gives that group a word.',
    case: 'n-term-quarry',
    plain: [
      'Three things set those families apart. There are very few of them. They have far more money, power or influence than anyone near them. And what they decide reaches everyone else in the town. Those three things together make a group of this kind.',
      'The word does not say the group is wicked, or how it got there. In real texts it is whoever the speaker says is at the top: ministers, officials, bankers, newspaper owners.'
    ] },

  { id: 'meet-nationalism', kind: 'meet', outcome: 'nationalism',     // heading is the outcome's plain words, from the key
    link: 'Unit One sorted every text by who or what it puts first. This unit is about one of those answers, {a:D1.nation}, and the five names inside it. The plainest comes first.',
    case: 'n-anniversary', mark: 'N1',
    strip: [
      'One group is spoken for, and it is everyone: "farmers and clerks, nurses and bakers, those who voted for us and those who did not".',
      'Nobody inside the country is named as an enemy. What divides people is said to matter less than what holds them together.',
      'The nation comes first: "our first loyalty is to this nation".',
      'Nothing is said against elections. The speaker tells the voters that they will choose in October, and says that every party is free to stand against him.'
    ],
    explain: [
      'The speaker draws one line around everyone in the country, and says that the people inside it belong together. Work, party and region all sit inside the line.',
      'A text about a people can go other ways: set the country\'s ordinary people against a few at the top, sort people into peoples ranked higher and lower, or take away the vote. This speech does none of these.'
    ],
    feature: { step: 'N1', option: 'whole' },
    name: 'The name for this is {o:nationalism}: the nation first, spoken for as one, with the vote left alone. Some people use the word only for something harsh. The harsher cases have names of their own.' },

  { id: 'check-nationalism', kind: 'check', after: 'nationalism',
    case: 'n-savings',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words in which the poster speaks for everyone in the country as one.',
           answer: 'When the whole country saves together, the whole country stands taller' } }
]);
