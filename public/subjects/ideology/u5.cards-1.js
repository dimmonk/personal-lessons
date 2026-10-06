// Political Ideologies, Unit Five, part one: the opening card and the first name (rights protected, and otherwise left alone).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('ideology', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Everyone is owed something. What should be done about it?',
    canDo: 'After this unit you can read a short text that puts first what every person is owed, such as a petition, a speech or a letter, and say which of three things it wants done for people. You will be able to point to the words that tell you.',
    everyday: [
      'You have probably heard all three of these in one week. One person says, "Just protect people’s rights and leave them alone." Another says, "Rights are no use to a child with no school, so the government should pay for one." A third says, "The rules are the same for everyone, and that is exactly the problem." Each can say, honestly, that every person has rights and should be treated fairly. They are not disagreeing about that. They are disagreeing about what to do.',
      'This unit has one question and three answers. Each answer leads to one name. The names describe what a text asks for. They are not insults and not compliments, and a text can ask for one of them whether or not you agree.'
    ],
    add: ['Every text in this unit is invented, and the unit takes no side. It teaches you to read what a text asks for.'],
    map: { branch: 'rights' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Classical liberalism ---------- */
  { id: 'meet-clib', kind: 'meet', outcome: 'clib',     // heading is the outcome's plain words, from the key
    link: 'Start with the answer that asks the least of the government.',
    case: 'i5-clib-meet', mark: 'R1',
    strip: [
      'The text names what each person is free to do: to play, to speak and to sell what they make on a public street.',
      'It names the council’s jobs, and counts them off: the police who keep the peace, the courts that settle disputes, the fire service that answers a call.',
      'It says that licensing who may sing is not one of those jobs.',
      'Its last request is "protect our rights, and then leave us alone". Nothing is asked of the council for anyone: no money, no service and no help.'
    ],
    explain: [
      'What this text wants done for people is very little, and it says so. A council is a local government, and "the government" is the word this unit uses for any of them. Here the council is to guard the freedoms (keep the peace, settle disputes, answer a fire) and then step back.',
      'A few jobs does not mean none. The musicians want the police, the courts and the fire service, and would be dismayed to lose them. They ask only that the council stay inside those jobs.'
    ],
    feature: { step: 'R1', option: 'leave' },
    name: 'The name for this is {o:clib}. "Liberal" comes from an old word for free: each person’s freedom comes first. "Classical" is the word for the older form of that view. The name is for what the text asks for: rights protected, a government kept to a few jobs, and nothing given.' },

  { id: 'check-clib', kind: 'check', after: 'clib',
    case: 'i5-clib-check',
    ask: { type: 'phrase', step: 'R1', say: 'Which part of this case says what the text wants the government to do? Tap it.',
           answer: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' } }
]);
