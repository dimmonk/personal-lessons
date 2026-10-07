// Political Ideologies, Unit Three, part one: the opening card, the word the unit leans on, and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('ideology', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Before you call a speech “fascist” or “just patriotic”, check what it asks for',
    canDo: 'Before you call a speech “fascist”, “just patriotic” or “populist”, check two things in it: who it speaks for and against, and what it wants done about elections and people who disagree.',
    everyday: [
      'Someone online calls a politician “a fascist”. Someone else answers, “That’s just patriotism.” A third says, “They’re all populists.” All three are guessing, because nobody has checked what the speech actually asks for.',
      'Five different things hide behind those words. They all put one people first, and two questions tell them apart. Tone never does: a speech can be loud and proud and leave the vote alone, or sound gentle and take it away.'
    ],
    map: { branch: 'nation' } },         // the preview map is drawn from the key, with plain words beside each label

  { id: 'term-elite', kind: 'term', term: 'elite',
    h: 'Who “the few at the top” are',
    link: 'Several of the names in this unit set ordinary people against a group at the top. First, a word for that group.',
    case: 'n-term-quarry',
    plain: [
      'Three things set those families apart: there are only three of them, they have far more money and power than anyone else in town, and what they decide reaches everyone else.',
      'When a speaker blames “the few at the top”, this is who they mean. The word does not say the group is wicked or how it got there. In real speeches it is whoever the speaker says is at the top: ministers, officials, bankers, newspaper owners.'
    ] },

  { id: 'meet-nationalism', kind: 'meet', outcome: 'nationalism',     // heading is the outcome's plain words, from the key
    link: 'Unit One sorted texts by who they put first. This unit takes one answer, {a:D1.nation}, and splits it into five names. Start with the plainest.',
    case: 'n-anniversary', mark: 'N1',
    explain: [
      'The speaker talks to everyone in the country at once: farmers, clerks, nurses, bakers, and people who voted against the speaker’s party. Nobody is called an enemy, and what holds people together is said to matter more than what divides them.',
      'The speech also leaves the vote alone. It tells the voters they will choose in October, and says every party is free to stand against the speaker. A text that goes another way sets ordinary people against a few at the top, ranks people by blood, or takes the vote away.'
    ],
    spot: [
      { do: 'Find who it speaks for: everyone, “those who voted for us and those who did not”.', why: 'If it speaks for everyone as one, nobody in the country is left out.' },
      { do: 'Check for an enemy inside the country: there is none.', why: 'Blaming a few at the top is a different thing, coming up next.' },
      { do: 'Check what it says about voting: “every party is free to stand against us”.', why: 'Leaving the vote in place keeps it apart from the harsher names.' },
      { do: 'Check that nobody is ranked: farmers, clerks, nurses and bakers all count the same.', why: 'Ranking people by blood is a separate thing, covered last.' }
    ],
    feature: { step: 'N1', option: 'whole' },
    name: 'This is {o:nationalism}. People often use the word only for something harsh, but the harsher versions have names of their own.' },

  { id: 'check-nationalism', kind: 'check', after: 'nationalism',
    case: 'n-savings',
    ask: { type: 'phrase', step: 'N1', say: 'Tap the words in which the poster speaks for everyone in the country as one.',
           answer: 'When the whole country saves together, the whole country stands taller' } }
]);
