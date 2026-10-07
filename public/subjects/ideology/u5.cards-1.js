// Political Ideologies, Unit Five, part one: the opening card and the first name (rights protected, and otherwise left alone).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('ideology', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Everyone deserves a fair shot. But what should the government do about it?',
    canDo: 'When a speech, petition or letter says everyone deserves rights and fair treatment, you can tell what it is actually asking the government to do: stay out of the way, pay for a fair start, or change a rule. The three sound alike and ask for very different things.',
    everyday: [
      'You have probably heard all three in one week. One person says, "Just protect people’s rights and leave them alone." Another says, "Rights are no use to a child with no school, so the government should pay for one." A third says, "The rules are the same for everyone, and that is exactly the problem."',
      'All three say every person has rights and should be treated fairly. They do not disagree about that. They disagree about what to do.',
      'Each of the three leads to a name. The names describe what a text asks for. They are not insults or compliments, and a text can ask for any of them whether or not you agree.'
    ],
    add: ['Every text in this unit is invented, and the unit takes no side. It teaches you to read what a text asks for.'],
    map: { branch: 'rights' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Classical liberalism ---------- */
  { id: 'meet-clib', kind: 'meet', outcome: 'clib',     // heading is the outcome's name, from the key
    link: 'Start with the answer that asks the least of the government.',
    case: 'i5-clib-meet', mark: 'R1',
    explain: [
      'The musicians want to play, speak and sell on the street, and they want the council to stay out of it. A council is a local government, and "the government" is the word this unit uses for any of them. They are happy for the council to keep a few jobs: the police, the courts and the fire service. They only ask that it stick to those and not decide who may sing.',
      'A few jobs does not mean none. The musicians would be upset to lose the police, the courts or the fire service.'
    ],
    spot: [
      { do: 'Find what people are free to do: play, speak and sell on a public street.', why: 'This answer puts freedom first.' },
      { do: 'List the government’s jobs: police, courts, fire service.', why: 'The list is short, and every job protects people.' },
      { do: 'Check what it asks the government to give: no money, no service, no help.', why: 'A text that wants something given is the next answer.' }
    ],
    feature: { step: 'R1', option: 'leave' },
    name: 'This is {o:clib}. "Liberal" comes from an old word for free, and "classical" means the older form of that view.' },

  { id: 'check-clib', kind: 'check', after: 'clib',
    case: 'i5-clib-check',
    ask: { type: 'phrase', step: 'R1', say: 'Which words say what Mirela wants the government to do? Tap them.',
           answer: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' } }
]);
