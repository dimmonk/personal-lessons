// Political Ideologies, Unit Five, part two: the second name (rights protected, and a fair start for everyone), the word
// "liberal", and the first look-alike pair.

FC.cards('ideology', 'u5', [

  /* ---------- Modern liberalism ---------- */
  { id: 'meet-modlib', kind: 'meet', outcome: 'modlib',
    link: 'The first name asked the government to protect rights and then step back. The second starts from the same rights and asks the government to go further.',
    case: 'i5-modlib-meet', mark: 'R1',
    strip: [
      'The text names freedoms like the ones in the first case: to speak, to believe and to keep what you earn. It asks the government to protect them.',
      'It then says that a right means little to a child who begins life with no school within reach and no doctor to call.',
      'It asks the government to give everyone a fair start: a school in every district, health care, help for anyone who loses work, and fair rules for the businesses that sell to us.',
      'It says that everyone is to pay for this together, through taxes.',
      'It does not say that any rule holds a group back, and it sets no one against anyone.'
    ],
    explain: [
      'Set this beside the street-music petition. Both put each person’s rights first, and both ask the government to protect them. If the text stopped there, you could not tell them apart. This one does not stop. It goes on to say that a freedom is worth less to someone who begins with nothing, and it asks the government to provide a start.',
      'The idea behind a text like this is that rights are only as good as a person’s chance to use them. A child who cannot read cannot use the right to speak. So the government’s job grows: it protects the rights, and it also pays for the schooling, the doctor and the help that let people use them. Whether the government should do that, and how much, is argued over, and this course does not settle it.',
      'Notice who pays. The text says "we will all pay for it together". The government gives to everyone, and everyone pays in through taxes. That is part of what the text asks for.',
      'And notice what the text does not do. It does not say that any rule holds a group back. It speaks of "a child", of "anyone", of "everyone". It names no group and blames no rule. Another text could name a group, and say that the rules themselves are what leave it behind. That text would be asking something else.'
    ],
    feature: { step: 'R1', option: 'start' },
    name: 'The name for this is {o:modlib}. "Liberal" still means that each person’s freedom comes first. "Modern" is the word used for the newer form of that view, the one that asks the government to give everyone a fair start as well as to protect rights. It is a name for what a text asks for, whatever country the text comes from.' },

  { id: 'again-modlib', kind: 'again', outcome: 'modlib',
    link: 'The fair-start leaflet gave you what to point to from one case: {needs:modlib}. Here is a second case with a different story. This time it is a clinic, in a town where the mill has shut.',
    first: 'i5-modlib-meet', second: 'i5-modlib-again', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the story (a leaflet about schools, a speech about a clinic). Look at one thing only: which words say what the government is to give?',
    prompt: { kind: 'phrase', answer: 'The government should give everyone a clinic a bus ride away, a place at a good school, and help to find another job when the mill shuts' },
    shared: [
      'Both texts begin with rights and ask the government to protect them. Both then say that a right is worth more with a fair start behind it, and ask the government to provide one: a school, a doctor, a clinic, help to find work. And both say that everyone pays for it together. Neither text names a group that is left behind or a rule that leaves it there.',
      'The two stories share nothing else. One is a leaflet about schools and the other a speech about a mill. So this holds wherever a text puts rights first and then asks the government to provide a start for everyone, paid for by all. That is what {o:modlib} names.'
    ] },

  { id: 'portrait-modlib', kind: 'portrait', outcome: 'modlib',
    link: 'What you point to is a fair start, given by the government and paid for by all. Here is the rest of the picture, so that you can spot {o:modlib} where nobody marks the words for you.',
    typical: [
      'It starts where the first name starts: with each person’s rights. It differs in what comes after them.',
      'It asks the government for particular things: schooling, health care, help when a person is out of work, fair rules for the businesses that sell to us, sometimes a pension or homes that people can afford. Look for a list of what is to be given.',
      'It says who pays: everyone, through taxes. "All of us" and "together" are common.',
      'It speaks of a start and of a chance. The complaint is that a person begins with too little to use their rights, and the answer is to give everyone enough to begin.',
      'It is usually warm about people who have less, but it does not set them against anyone. It names no owners and no group as the other side.',
      'Its demands are usually "build", "pay for" and "provide", and not "stop" or "keep out".'
    ],
    not: [
      'Asking for a service is not enough on its own. What makes a text {o:modlib} is that rights come first, the government is to give everyone a fair start, and no side and no rule is blamed. A text that adds a side to be against, or a rule to be changed, is a different case.'
    ],
    wild: ['"Everyone deserves a fair start."', '"A right is no use to someone with no school."', '"We all pay in, and we all gain."', '"Opportunity for everyone."', '"The government should make sure no child starts with nothing."'],
    self: 'In your own life it is the argument over what a government should pay for: a bus, a school lunch, a clinic, a pension, help when a factory shuts. It is the voice that says "a fair start for everyone" about something you could name.',
    ask: '"What does this text say a person needs before their rights are worth using, who is to give it, and who pays?" If the answer is a fair start given by the government and paid for by all, you have this name.' },

  { id: 'check-modlib', kind: 'check', after: 'modlib',
    case: 'i5-modlib-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start'] } },

  { id: 'refute-liberal', kind: 'refute', about: 'modlib',
    h: 'A wrong idea about the word "liberal"',
    link: 'The name {o:modlib} has the word "liberal" in it, and so does {o:clib}. The word leads many people to a wrong idea, which is worth meeting before it leads you astray.',
    idea: '"“Liberal” always means left-wing."',
    verdict: 'This is wrong.',
    right: [
      'The word is used for different things in different places. In some countries a person called liberal is someone who wants a fair start paid for by all, which this unit names {o:modlib}. In others the word is used for someone who wants a small government and free trade, which this unit names {o:clib}. The same word, in a different place, points to a different text.',
      'And "left-wing" and "right-wing" are not words used in these questions. Different people use them for different things, and a text can be called either by different people. They are not used here.',
      'So go by what the text asks for. The question is {q:R1} A text that asks the government to protect rights and stay out is {o:clib}, whatever anyone calls it. A text that asks the government to protect rights and also to provide a start for everyone is {o:modlib}, whatever anyone calls it. The word "liberal" in the names tells you only that each person’s freedom comes first, which is true of both.'
    ],
    testedBy: ['i5-claim-liberal'] },

  { id: 'look-clib-modlib', kind: 'lookalike', ledger: 'clib~modlib',
    link: 'You have met both names on their own. They start from the same place: each person’s rights. This card puts them side by side, in one story.',
    cases: ['i5-lk-cm-clib', 'i5-lk-cm-modlib'],
    instruction: 'Both cases are about the same new clinic in Marrow, and in both the speaker says each person is free to choose their own doctor. Compare one thing: what the speaker wants the government to do about the clinic.',
    prompt: { kind: 'which', option: 'R1.start', answer: 'i5-lk-cm-modlib' },
    difference: [
      'In Case A the speaker wants the government to keep the courts open and see that contracts are kept, and otherwise to leave the clinic to those who run it. The answer is {a:R1.leave}, and the case is {o:clib}.',
      'In Case B the speaker wants the government to pay for a clinic in every district, with everyone paying through their taxes. A clinic is to be given. The answer is {a:R1.start}, and the case is {o:modlib}.',
      'The freedom to choose a doctor is the same in both. What differs is what is asked of the government once the freedom is protected: nothing more, or something given. That is the question being asked.'
    ] }
]);
