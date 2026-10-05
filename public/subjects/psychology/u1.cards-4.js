// Psychology, Unit One, part four: the fourth kind (a passing moment), the two wrong ideas a beginner is most
// likely to bring to it, its look-alike pair with the third kind, and the exception "one evening taken for a lifetime".
// The fourth kind is the key's answer for a case with nothing in it to name (lesson standard K2.9), and it is
// taught as a family like any other.

FC.cards('psychology', 'u1', [

  /* ---------- The fourth kind: a passing moment ---------- */
  { id: 'meet-none', kind: 'meet', family: 'none',
    link: 'Three kinds so far: one person’s reasons, something said or done to another person, and a person across years. Many cases are none of these, and the key has an answer for them.',
    case: 'g-amira', mark: 'D1',
    strip: [
      'There is one person: Amira.',
      'There is one short stretch of time: a week.',
      'Something real happened at the start of it: she learned that her father is seriously ill.',
      'How she has been since: quiet, short with people, leaving early. It is what most people would do with news like that.',
      'There is nothing else. She gives no reasons for a view or a choice. She does not say or do anything to any one person that is about that person. Nothing in the case goes back before Monday.'
    ],
    explain: [
      'Set this case against the three kinds you have met. There is no reasoning to judge: Amira is not defending a view or explaining a choice. There are other people in the case, but nothing is said or done to any of them about them. Being short with whoever asks a question is not about the person who asked. And there are no years: the case begins on Monday.',
      'What is left is a person having a hard week, for a reason you can see. Her reaction fits what happened, and a reaction like this usually eases as the weeks go on. That is a fourth kind of thing, and it is a very ordinary one: most people have a hard week, a bad night or a short-tempered afternoon now and then.',
      'The colleague’s word, "moody", shows what goes wrong when this kind is missed. "Moody" sounds like a description of Amira. It is really a description of five days. The key has an answer for a case like this so that you have somewhere to put it that is not a judgement of the person.'
    ],
    feature: { step: 'D1', option: 'none' },
    name: [
      'The key’s answer, and the name of the kind, is {a:D1.none}. "Moment" here does not only mean a minute. It means one occasion or one short stretch: an evening, a bad day, a hard week. "Passing" means short-lived: it belongs to one occasion or one stretch, and it is not how the person is from year to year.',
      'After this answer the key asks nothing more. It has no finer name to give, and that is a result in its own right: you looked, and there was nothing to name.'
    ] },

  { id: 'again-none', kind: 'again', family: 'none',
    link: 'Amira’s week gave you what to point to: {needs:none}. Here is a second case, shorter, and with a happy ending.',
    first: 'g-amira', second: 'g-storm', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the mood (grief, fear) and ignore how it ends. Look at one thing only: which words place the case on one occasion or one short stretch, with something real behind it?',
    prompt: { kind: 'phrase', answer: 'The night her daughter was flying home through a storm' },
    shared: [
      'Both cases are one short stretch with something real behind it: a week after bad news, a night with a daughter in a storm. In both, what the person does fits what happened. And in both there is nothing else: no reasons given for anything, nothing said to anyone about them, no years.',
      'One of these stories is sad and one ends well. One lasts a week and the other a few hours. Neither difference matters. What the two share is that the case holds one stretch of one person’s life and stops there. That is what {a:D1.none} names.'
    ] },

  { id: 'portrait-none', kind: 'portrait', family: 'none',
    link: 'You know what to point to for {a:D1.none}. Because this kind is partly made of what is not there, the rest of the picture matters more than usual.',
    typical: [
      'It is tied to a time: "this week", "last night", "since Monday", "once".',
      'Something usually set it off, and the case often says what: bad news, a fright, a loss, no sleep, too much to do.',
      'What the person does fits what happened. It is about the size that most people’s reaction would be.',
      'It eases as its cause eases. The plane lands. The weeks pass.',
      'Nobody in particular is on the receiving end. Other people may notice it, or be caught by it, but nothing is said or done to them about them.',
      'Sometimes no cause is given, and the case is simply one occasion: someone was loud at one party, or cried once in a meeting. One occasion with nothing else is still this kind, because one occasion is all the case shows.'
    ],
    not: [
      'This answer does not say that nothing happened. Amira really was short with people, and it may have stung. The answer says only that the case holds a moment and no more, so the key has nothing to name.',
      'It is not a promise about the future either. If the same thing is still there in a year, in other places and with other people, that will be a different case, and it will get a different answer.'
    ],
    wild: ['"She’s not herself this week."', '"He’s had a lot on."', '"I was in a state that night."', '"It was one bad evening."', '"Anyone would be upset."'],
    self: 'You will meet it most in the words people use about each other’s bad days, and those words are often too big: one tearful meeting, one sharp reply or one loud evening, described as if it were the whole person. You will also be on the other side of it, on your own bad days.',
    ask: '"What happened, and how long has this been going on?" If something real happened, and what you are seeing started with it, you are probably looking at a moment.' },

  { id: 'check-none', kind: 'check', after: 'none',
    case: 'g-funeral',
    ask: { type: 'phrase', step: 'D1', say: 'Which words tell you that this is one occasion, with something real behind it? Tap them.',
           answer: "Two days after his mother's funeral" } },

  /* ---------- A wrong idea: an ordinary reaction given a clinical name ---------- */
  { id: 'refute-clinical', kind: 'refute', about: 'none',
    h: 'A wrong idea: a hard week needs a medical word',
    link: 'Amira’s colleague said "moody". People often go further than that, and describe an ordinary hard week with a word borrowed from medicine.',
    idea: '"She’s been in tears twice this week and she snapped at me on Tuesday. She’s completely unstable."',
    verdict: 'This is wrong.',
    right: [
      'Words such as "unstable", "paranoid", "obsessive" and "bipolar" come from medicine, or sound as if they do. A word like that is a diagnosis: a named medical or psychological condition, given by someone trained to give it, after a long assessment of how long something has gone on, how much of the person’s life it touches, and what else was happening.',
      'The key does not diagnose anyone. Even when a case does show years, places and relationships, and the answer is {a:D1.pattern}, that answer only says what the case shows. It is not a diagnosis, and only a professional can give one.',
      'A hard week gives you none of what a diagnosis needs. It gives you one short stretch, and usually something real that set it off. The speaker here has not asked the first thing you would want to know: what happened to her this week?',
      'The plain description is also the accurate one: "Something has happened, and she is having a terrible week." It says how long, it leaves room for a cause, and it claims nothing else. In the key’s words the case is {a:D1.none}, and what you can point to is this: {needs:none}.'
    ],
    testedBy: ['g-claim-clinical'] },

  /* ---------- The third look-alike pair ---------- */
  { id: 'look-pattern-none', kind: 'lookalike', ledger: 'pattern~none',
    link: '{a:D1.none} and {a:D1.pattern} are opposites in one way: one is the smallest claim you can make about a person, and the other is the largest. They are still easy to mix up, because the behaviour in them can be exactly the same.',
    cases: ['g-retirement', 'g-thirty'],
    instruction: 'Both cases are about Desmond talking about his deals. Compare one thing: how much of his life does each case show?',
    prompt: { kind: 'which', option: 'D1.none', answer: 'g-retirement' },
    difference: [
      'In Case A you have one evening, and it is an evening on which talking about your working life is what people do. The guest’s verdict covers a whole man, and the guest has had twenty minutes of him. The key’s answer is {a:D1.none}.',
      'In Case B the same talk is shown across thirty years, in three places, and in three relationships: with his children, with his partners and with his oldest friend. The key’s answer is {a:D1.pattern}.',
      'What Desmond does is the same in both cases. That is the point of putting them together. You cannot tell these two kinds apart by what the person does. You can only tell them apart by how much of the person’s life the case shows.'
    ] },

  { id: 'exc-evening', kind: 'exception', ledger: 'pattern~none', looksLike: 'pattern', is: 'none',
    h: 'One evening that sounds like a lifetime',
    link: 'The last card made the difference easy to see, because Case B said "thirty years" out loud. The mistake people really make is harder to catch: the case shows one evening, and it sounds like a lifetime.',
    case: 'g-dinner-party',
    setup: 'There is a lot of the same behaviour here, three things all pointing one way, and a guest who says "always". A run of the same behaviour, and the word "always", are what {a:D1.pattern} usually sounds like. Yet the key’s answer for this case is {a:D1.none}.',
    prompt: { kind: 'phrase', answer: 'who had met her that evening' },
    because: [
      'Count what the case shows. One evening. One place. One table of guests. The three things Yasmin did feel like a lot to go on, but they are three samples of the same two hours. And "always" comes from someone who has known her for those same two hours, so it adds no years at all.',
      'For {a:D1.pattern} you must be able to point to this: {needs:pattern}. None of it is in the case.',
      'What explains the evening? The case gives one hint, the new job, and there could be others you cannot see: nerves, a bad day, a tiring week. You do not need to know. The answer does not depend on finding a cause. It depends on what the case shows, and the case shows a moment.'
    ],
    take: 'If the same thing turns out to be true of Yasmin at work, at home and ten years ago, there will be a case that shows it, and that case will get a different answer. This one does not show it, and a striking evening does not turn into years by being striking.' },

  /* ---------- A wrong idea: once is enough ---------- */
  { id: 'refute-once', kind: 'refute', about: 'pattern',
    h: 'A wrong idea: "once is enough to know someone"',
    link: 'The woman at the dinner party is not unusual. Behind her "always" is an idea that many people hold, and it is an idea that often puts {a:D1.pattern} where it does not belong.',
    idea: '"People show you who they are. Once is enough."',
    verdict: 'This is wrong.',
    right: [
      'One occasion shows you one occasion. People act out of character after bad news, without sleep, when they are frightened, and for many other reasons, and from the outside you usually cannot tell which of these you are looking at. The feeling that you have seen "the real person" comes from how striking the occasion was. It does not come from how much the occasion showed.',
      'A claim about who someone is, is a claim about years, and it needs a case that shows them. So when you catch yourself summing a person up, count what you really have: how many occasions, in how many places, with how many people.',
      'If the count is one, the key’s answer is {a:D1.none}. If, on that one occasion, something was said or done to another person about them, it is {a:D1.tactic}. In neither case is it {a:D1.pattern}. For that you must be able to point to this: {needs:pattern}.'
    ],
    testedBy: ['g-claim-once'] }
]);
