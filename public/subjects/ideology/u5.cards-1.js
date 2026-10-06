// Political Ideologies, Unit Five, part one: the opening card and the first name (rights protected, and otherwise left alone).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the earlier units, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence,
// the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('ideology', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'Everyone is owed something. What should be done about it?',
    canDo: 'After this unit you can read a short text that puts first what every person is owed, such as a petition, a speech, a leaflet or a letter, and say which of three things it wants done for people. You will be able to point to the words that tell you, and to say why it is not one of the other two. The text can be about a street permit, a clinic, a school test, a housing waitlist or a border post.',
    everyday: [
      'You have probably heard all three of these in one week. One person says, "Just protect people’s rights and leave them alone." Another says, "Rights are no use to a child with no school, so the government should pay for one." A third says, "The rules are the same for everyone, and that is exactly the problem." Each of them can say, with perfect honesty, that every person has rights and should be treated fairly. They are not disagreeing about that. They are disagreeing about what to do.',
      'The first question has already sorted a text like this: it puts first what every person is owed. This unit teaches the question that comes after it, and it has one question and three answers. Each answer leads to one name. The three names are not insults and not compliments. They are descriptions of what a text asks for, and a text can ask for one of them whether or not you agree.',
      'Real people and real parties say many different things in many different places, so none of these names is a verdict on a person. They are names for the words of one short text, and each short text is read on its own.'
    ],
    add: [
      'Every text in this unit is invented. The places, the people and the groups are made up, and nothing in a text says what any real person or party believes.',
      'People disagree, often sharply, about what a government should do for people. This unit takes no side. It teaches you to read what a text asks for, and to name it from the words in the text.'
    ],
    map: { branch: 'rights' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Classical liberalism ---------- */
  { id: 'meet-clib', kind: 'meet', outcome: 'clib',     // heading is the outcome's plain words, from the key
    link: 'Start with the answer that asks the least of the government. A text that puts rights first, as the first question found, can go on to ask a great deal of a government or almost nothing. This first case asks almost nothing.',
    case: 'i5-clib-meet', mark: 'R1',
    strip: [
      'The text names what each person is free to do: to play, to speak and to sell what they make on a public street.',
      'It names the council’s jobs, and counts them off: the police who keep the peace, the courts that settle disputes, the fire service that answers a call.',
      'It says that licensing who may sing is not one of those jobs.',
      'Its last request is "protect our rights, and then leave us alone". Nothing is asked of the council for anyone: no money, no service and no help.'
    ],
    explain: [
      'What this text wants done for people is very little, and it says so. A council is a local government, and "the government" is the word this unit uses for any of them. Here the council is to guard the freedoms (keep the peace, settle disputes, answer a fire) and then step back. Everything else is left to the people themselves: whether to play, what to charge, whom to listen to.',
      'The idea behind a text like this is that each person is the best judge of their own life, and that a government which does a few jobs well leaves the most room for each person to live as they choose. Whether that is true is one of the oldest arguments in politics, and this course does not settle it. It only asks you to see that this is what the text asks for.',
      'Notice what "a few jobs" means. It does not mean none. The musicians want the police, the courts and the fire service, and would be dismayed to lose them. What they ask is that the council stay inside those jobs.',
      'Notice also what the text does not ask. Suppose the same musicians had added, "and the council should pay for a stage in every square". They would then be asking for something to be given, and the text would be asking something else. This text asks for nothing to be given.'
    ],
    feature: { step: 'R1', option: 'leave' },
    name: 'The name for this is {o:clib}. The word "liberal" comes from an old word for free, and in this name it means that each person’s freedom comes first. "Classical" is the word used for the older form of that view. The name is for what the text asks for: the rights protected, a government kept to a few jobs, and nothing given.' },

  { id: 'again-clib', kind: 'again', outcome: 'clib',
    link: 'The street-music petition gave you what to point to from one case: {needs:clib}. Here is a second case with a different story. This time nobody is singing: it is about a small firm and the people it hires.',
    first: 'i5-clib-meet', second: 'i5-clib-again', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the story (a street, a moving firm). Look at one thing only: which words say what the text wants the government to do?',
    prompt: { kind: 'phrase', answer: 'The government should run the courts and the police, make sure that contracts are kept, and otherwise stay out of it' },
    shared: [
      'Both texts name what each person is free to do (to play and sell on a street, to work, bargain and trade), and then turn to the government. Each gives the government a short list of jobs: the police, the courts and the fire service in the first; the courts, the police and keeping contracts in the second. And each ends by asking it to step back: "leave us alone" in one, "otherwise stay out of it" in the other.',
      'The two stories share nothing else. One is about singing and the other about hiring a helper. So this holds wherever a text asks the government to protect rights and then keep out. That is what {o:clib} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every text in this unit has two layers. The top layer is the story: what the text is about. A street, a school, a clinic, a border post, a housing waitlist. The layer underneath is what the text wants done for people.',
      'The three names belong to the layer underneath. The same story can carry any of them. Two texts can both be about a clinic, and one asks the government to stay out of it while the other asks it to pay. A text that mentions schools is not, for that reason, asking the government to provide them.',
      'From here on, the texts change their stories on purpose. Sometimes two texts will share a story and differ only underneath. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['what the text wants done for people, which is what the question asks about: {q:R1}'],
    varies: ['the topic', 'the people', 'who is speaking', 'whether you agree with it', 'how much the text thinks the government should do'] },

  { id: 'portrait-clib', kind: 'portrait', outcome: 'clib',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:clib} in real life, where nobody marks the words for you.',
    typical: [
      'It speaks of freedom and rights in the same breath: to speak, to believe, to own, to trade, to make a contract.',
      'It lists the government’s jobs, and the list is short: courts, police, defense, keeping contracts. Sometimes the list is left out, and the text only says that the government should leave people alone.',
      'It is usually wary of what a government hands out. Where another text sees a service to be given, this one tends to see a bill that someone must pay, or a permit that would have to be refused.',
      'Its demands are usually "stop" or "keep out" ("stop licensing", "leave us alone"), and not "build" or "provide".',
      'It may be sympathetic to people who have less, and say so. What marks the name is what it asks the government to do about it: leave people free, not give.'
    ],
    not: [
      'A mention of low taxes does not make a text {o:clib}. Texts of very different kinds want low taxes, and some of them put old ways first, which are read differently here. A small government is not the same as no government: the text keeps the jobs it names. And a text that asks the government to protect rights and also to provide a school or a doctor is not this name, however firmly it speaks of freedom.'
    ],
    wild: ['"It’s a free country."', '"Mind your own business."', '"Let people live their own lives."', '"Keep the government out of it."', '"I don’t need a permit to do what I already have the right to do."'],
    self: 'In your own life it is the voice that says a rule has gone too far: the form you had to fill in to do something ordinary, the license for a stall, the fee for the right to work.',
    ask: '"What does this text say the government should do, and what does it say the government should leave alone?" If the answer is protect and leave, you have this name.' },

  { id: 'check-clib', kind: 'check', after: 'clib',
    case: 'i5-clib-check',
    ask: { type: 'phrase', step: 'R1', say: 'Which part of this case says what the text wants the government to do? Tap it.',
           answer: 'The government should keep the roads safe and the courts open, and otherwise leave traders alone' } },

  { id: 'refute-small', kind: 'refute', about: 'clib',
    h: 'A wrong idea: "small government means no government"',
    link: 'The picture of {o:clib} said that a few jobs is not the same as none. People often run the two together, and the idea below is the result.',
    idea: '"A text that wants a small government wants no government at all."',
    verdict: 'This is wrong.',
    right: [
      'A small government is a government that keeps to a short list of jobs. The musicians in the first case ask for the police, the courts and the fire service, and want them done well. A text that wanted no government would not ask for any of them.',
      'The difference is in the words of the text. Look for the jobs it names. If it names courts, police, defense or keeping contracts, it wants a government with those jobs, and the answer to its question is {a:R1.leave}. If it names no jobs and says that people should run things together without a government, that is a different answer to a different question, and this unit does not ask it.',
      'So before you say "no government", point to the words that say so. "Leave us alone" is not those words: it is said about everything beyond the jobs the text names.'
    ],
    testedBy: ['i5-claim-small'] }
]);
