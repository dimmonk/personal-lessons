// Psychology, Unit Four, part two: the second narcissism finished, its two look-alike pairs, and then the third name (clinging to people).

FC.cards('psychology', 'u4', [

  { id: 'portrait-narcvuln', kind: 'portrait', outcome: 'narcvuln',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can tell {o:narcvuln} from an ordinary quiet person.',
    typical: [
      'The person often looks modest, even keeping in the background: "No need to mention me." The modesty comes with a count of what they are owed.',
      'The slights are small and the person notices every one: who was thanked, who was asked, who got the good project.',
      'The answer is hurt and withdrawal. They do not argue the point. They go cold, stop speaking, stay away, and are resentful for a long time.',
      'The person is often in real pain, and may be anxious or low as well.',
      'It is hard for others to deal with, because nobody can tell what has gone wrong until the person has already cut them off.',
      'There is little room for what others feel here too. The person’s hurt is the only hurt in the room.'
    ],
    not: [
      'Shyness is not this name, and neither is being private or sad. A shy person may want to be noticed less, and does not keep a count of who was thanked.',
      'Nor is a fair grievance. Someone who was overlooked, said so once and got over it is not this: the case needs years, a count that keeps growing, and the cost.'
    ],
    wild: ['"No, don’t worry about me."', '"Some people just get all the luck."', '"I wouldn’t expect anyone to notice."', '"I stopped expecting it years ago."'],
    self: 'Everyone has felt the small cold hurt when a friend is thanked and they were not, and the urge to say nothing and keep the count. The name is for the case where it is how someone has been for years, with many people, and it has cost.',
    ask: '"What is this person counting, and who has stopped hearing from them because of it?"' },

  { id: 'check-narcvuln', kind: 'check', after: 'narcvuln',
    case: 'pa-lars',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked'] } },

  { id: 'look-narcgrand-narcvuln', kind: 'lookalike', ledger: 'narcgrand~narcvuln',
    link: 'You have met both narcissisms. Here are two brothers, each answering the same piece of family news.',
    cases: ['pa-anton', 'pa-piers'],
    instruction: 'In both cases the younger brother has just made partner. Compare one thing: what each man does with the hurt of not being the one who was chosen. Does he attack, or does he pull away?',
    prompt: { kind: 'which', option: 'P1.overlooked', answer: 'pa-piers' },
    difference: [
      'In Case A Anton turns on his brother at the family lunch: "only got there by licking boots". It is outward: anger and scorn. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Piers says "Lovely news", goes quiet and leaves before the pudding, and says nobody has ever noticed what he has done. It is inward: hurt and resentment. The answer is {a:P1.overlooked}, and the case is {o:narcvuln}.',
      'So these two names are one family, and this is the difference inside it. Both brothers have the same sore place: their worth depends on being treated as special, and their brother’s promotion does not treat them so. Anton defends it outward and Piers defends it inward. Which way it goes is what the question picks out.'
    ] },

  { id: 'look-narcvuln-ordpersonality', kind: 'lookalike', ledger: 'narcvuln~ordpersonality',
    link: 'A quiet person is far more likely to be an ordinary shy person than to show {o:narcvuln}. Here are two quiet colleagues.',
    cases: ['pa-hugh', 'pa-amara'],
    instruction: 'Both keep to themselves at work, in four offices. Compare two things: what each does when a colleague is thanked, and what it has cost.',
    prompt: { kind: 'which', option: 'P1.overlooked', answer: 'pa-hugh' },
    difference: [
      'In Case A Hugh says that others get the good projects because they are noticed and he is not, and that he is owed more. When a colleague is thanked he stops speaking to her for a month, and he has done it with six colleagues. His managers say his silences make it impossible to plan around him. The answer is {a:P1.overlooked}, and the case is {o:narcvuln}.',
      'In Case B Amara is just as quiet. When a colleague is thanked she sends a note saying well done. Her managers say she can be relied on, and her friends from each office are still her friends. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'The quietness is the same in both. What differs is the count of what others owe, the cold withdrawal when someone else is thanked, and the cost.'
    ] },

  /* ---------- Borderline personality ---------- */
  { id: 'meet-borderline', kind: 'meet', outcome: 'borderline',
    link: 'The first two names were about a sense of worth that depends on being treated as special. This one is about something else: a person who cannot bear to be left.',
    case: 'pa-nadia', mark: 'P1',
    strip: [
      'There are years and more than one place: from fifteen to thirty-one, with friends, partners and an employer.',
      'The person makes desperate efforts to keep people close: forty messages in two days, an offer to pay for flights, begging.',
      'When a friend seems about to pull away, Nadia swings. A reply a day late is enough for "You are a fake and I never want to see you again", and the next morning she sends twelve apologies.',
      'The swing goes from adoring to attacking: one partner was "the love of my life" in March and "a monster" in April.',
      'It keeps costing: three friends, a job, and the end of every one of four relationships.'
    ],
    explain: [
      'Nadia has a way of being that is hard to see from outside, because from outside it looks like two different people. In one, she adores someone and cannot do without them. In the other, she attacks them. What joins the two is what sets off the change: a person who seems about to leave or pull away.',
      'Look at when the swing happens. It is not when Nadia is criticised, and it is not when someone else is praised. It is when someone she is close to seems to be going. A friend says she will be abroad, or a reply comes a day late, and for Nadia that feels like being left. She does two things to stop it. She holds on hard: messages, gifts, begging. And when holding on does not seem to work, she attacks the person who is going, and then she holds on again.',
      'This is not the same as ordinary neediness, or a bad row. A friend who says "please don’t go" once is not this. What is here is that it happens with every close friend since school and with every partner, and that it keeps costing: friends gone, a job lost.',
      'It is also not an act. People with this way of being are very often in real distress, and are as frightened by the swings as the people around them.'
    ],
    feature: { step: 'P1', option: 'clings' },
    name: 'The name for this is {o:borderline}. The word "borderline" is old: doctors once thought the condition sat on the border between two kinds of illness. That idea has been dropped, but the word stayed, so it tells you nothing about what the case shows. Go by the case. "Personality" means how a person usually is.' },

  { id: 'again-borderline', kind: 'again', outcome: 'borderline',
    link: 'Nadia gave you what to point to: {needs:borderline}. Here is a second case, a man and a youth club, and not a woman and her friends.',
    first: 'pa-nadia', second: 'pa-tomas', step: 'P1',
    instruction: 'The marked words in the first case are three different things: how she holds on, how she turns on the friend who seems to be going, and what it has cost. Find the words in this case that match the middle one: what the person does to the one who seems about to leave. Ignore who is involved (a friend, a deputy at a youth club).',
    prompt: { kind: 'phrase', answer: "When she said she needed time to think, he told the committee she was 'poisonous' and that she had used him" },
    shared: [
      'Nadia and Tomas each make desperate efforts to keep someone close: forty messages and an offer of flights, the use of his car and a pay rise the club could not afford. Each swings to attacking when the person seems about to go: "You are a fake and I never want to see you again", "poisonous". Each swings back: twelve apologies, a letter saying she was the best person he knew. And each does it with many people over many years, and has lost people.',
      'A woman and a man, a friend and a deputy. So this is not about gender, friendship or work. It holds wherever a person makes desperate efforts to keep people close, and swings to attacking them when they seem about to leave. That is what {o:borderline} names.'
    ] },

  { id: 'portrait-borderline', kind: 'portrait', outcome: 'borderline',
    link: 'You know what to point to. This card fills in the rest of the picture, and says what the name does not mean.',
    typical: [
      'What sets it off is someone seeming to leave: a late reply, a cancelled plan, a new job, a holiday. The leaving does not have to be real.',
      'The first reaction is to hold on: many messages, gifts, promises to change, begging.',
      'If that does not seem to work, the reaction turns, and the person who was adored is attacked, often in words that are hard to forgive.',
      'Then, often within a day, it swings back: an apology, a plea, "you are the only one who understands me".',
      'The same person can be described as wonderful one week and terrible the next. That is why friends say they never know which person they will meet.',
      'The person is often in great distress and is usually as frightened by the swings as the people around them. It is not a plan to hurt anyone.'
    ],
    not: [
      'Strong feelings are not this name. Someone who cries when a friend goes away, or begs her not to go once, has had an ordinary reaction. The name needs the years, the swing between adoring and attacking, and the cost.',
      'Nor is it a name for any "drama" in a relationship, or for someone who has been left and is angry. A person who was left, was furious for a month and got over it, has had a hard month.'
    ],
    wild: ['"Please don’t leave me."', '"I knew you would go."', '"I’m sorry, I’m sorry, I’m the worst."', '"You never cared." Then, the next day: "You’re the only one who understands me."'],
    self: 'Almost everyone has felt a little of it: the dread when a message is not answered. The name is for the case where it is how someone has been for years, with every close person, and it keeps costing.',
    ask: '"What happens, again and again, when someone close seems about to leave, and what has it cost?"' },

  { id: 'check-borderline', kind: 'check', after: 'borderline',
    case: 'pa-pru',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings'] } }
]);
