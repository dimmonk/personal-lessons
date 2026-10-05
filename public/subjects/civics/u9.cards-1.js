// Civics, Unit Nine, part one: the opening card, then two groups of facts about the colonies: why people came and who else was there. This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a
// concept card (a case, then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is
// asked from memory and its answer is one of the choices for every other row on the same card, so the answers on one card are all
// of one kind (all reasons, all groups of people).
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes line,
// the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in ({o:purse}). Tokens are used
// only in `relates` and in the prose of a card: a row's `q` and `a` are printed as they are.

FC.cards('civics', 'u9', [

  { id: 'orient-hist', kind: 'orient',
    h: 'Facts to hold, about how the country began, grew and divided over slavery',
    canDo: [
      'This unit is a set of facts to hold, not a skill to apply. By the end you can say, without looking anything up, why people came to the colonies and who else was there, how the colonists fell out with Britain, the years in which the country was founded, how it grew, how slavery divided it, what happened in the Civil War, and what the three amendments after the war did. The unit stops at 1877.',
      'They are worth holding for three reasons. The citizenship interview asks about this history directly. The news keeps using it: when a story says that a right “applies to the states”, or that a person is “a citizen by birth”, the amendments that followed the Civil War are what it rests on. And some of the names in the key have a history of their own, which this unit gives.'
    ],
    everyday: [
      'Picture the interview itself. The officer asks: “Why did the colonists quarrel with Britain?” or “What did the Emancipation Proclamation do?” A person who has only met a list of dates has a date with nothing around it. A person who knows the story can find the answer, because each fact has something to hang on.',
      'That is why this unit is not a list. Each fact comes with the idea that it serves: a reason, a quarrel, a question that the country had to answer. The facts are then asked one at a time from memory, and each one comes back on later days.'
    ],
    add: [
      'Each group in this unit starts with a short story. Then it explains the idea in plain words, and then it gives the facts for that group in a table. After the table, each fact is asked once, from memory. In every table the answers are all of one kind, all years, or all names, or all places, so that you cannot pick one by its shape: you have to know the fact.',
      'This unit tells some hard history in the short form that the interview wants: slavery, and the removal of Native nations from their land. It says plainly what happened, and it does not tell the whole story. That is a limit of the unit, and nothing in it should be read to say that the rest does not matter.',
      'It also skips what this subject’s own material does not hold. It gives the year of the second compromise over slavery, 1850, but not what that compromise decided, because the material does not say. It names no battle, and it holds one speech from the war. It goes no further than what followed the end of Reconstruction in 1877. Reconstruction is the name for the years after the Civil War, from 1865, when the country tried to rebuild and to settle what freedom meant.'
    ] },

  /* ---------- group one: why people came ---------- */
  { id: 'con-hist-came', kind: 'concept',
    h: 'Why people crossed the ocean to the colonies',
    link: 'The first group is the start of the story: the reasons that people gave for leaving home and crossing the ocean.',
    case: 'c9-dock',
    plain: [
      'The four people on the dock are made up, but each one stands for a reason that people really gave for coming to the colonies: religious freedom, political liberty, economic opportunity, and getting away from persecution.',
      'Each one has a plain meaning. Religious freedom is being free to follow your own religion. Political liberty is freedom in public life, including a say in how you are governed. Economic opportunity is a chance to earn a better living. Persecution is being harmed or punished over who you are or what you believe.',
      'Three of the four are things that people hoped to have. The fourth is different: persecution is something that people hoped to get away from. Keep that difference in mind, because the reasons overlap. A person who was being harmed for their beliefs, as Rafael’s family was, may well have wanted religious freedom too. The two are still different facts. One is what you came to have, and the other is what you came to leave behind.',
      'The four facts below are the four reasons. Each one is asked by what the person wanted.'
    ] },

  { id: 'facts-hist-came', kind: 'facts',
    h: 'Four reasons for coming',
    link: 'These are the four reasons, each with how it fits the idea that people came for something they hoped to have or something they hoped to leave.',
    concept: 'con-hist-came',
    rows: [
      { id: 'came-faith', q: 'What did a person who wanted to follow their own religion come to the colonies to have?', a: 'Religious freedom',
        relates: 'Being free to follow your own religion was one of the reasons people came. It is something to have, which is what tells it apart from persecution, which is something to leave.' },
      { id: 'came-vote', q: 'What did a person who wanted a say in how they were governed come to the colonies to have?', a: 'Political liberty',
        relates: 'Political liberty is freedom in public life, including a say in how you are governed. It is something to have, like religious freedom and economic opportunity.' },
      { id: 'came-living', q: 'What did a person who wanted to earn a better living come to the colonies to find?', a: 'Economic opportunity',
        relates: 'This is the reason that is about work and money, and not about belief or government. It is something to have, and it is the plainest of the four.' },
      { id: 'came-flee', q: 'What did a person who was being harmed at home for who they were or what they believed come to the colonies to get away from?', a: 'Persecution',
        relates: 'Persecution is being harmed or punished over who you are or what you believe. It is the only one of the four that is something to get away from and not something to reach for.' }
    ] },

  { id: 'chk-hist-came-faith', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-faith' } },
  { id: 'chk-hist-came-vote', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-vote' } },
  { id: 'chk-hist-came-living', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-living' } },
  { id: 'chk-hist-came-flee', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-flee' } },

  { id: 'look-hist-came', kind: 'lookalike', ledger: 'came-faith~came-flee',
    h: 'Something to have, and something to leave behind',
    link: 'Two of the four reasons can be true of the same person, so they get swapped, and they go side by side.',
    facts: ['came-faith', 'came-flee'],
    instruction: 'Compare what each one is for the person: something that they came to have, or something that they came to leave.',
    prompt: { kind: 'which', answer: 'came-flee' },
    difference: [
      'Fact A is about what a person hoped to reach: {f:came-faith}. It is the freedom to follow your own religion, and it is a thing to have.',
      'Fact B is about what a person hoped to get away from: {f:came-flee}. It is the harm, and it is a thing to leave behind.',
      'A person harmed for their beliefs may have wanted both, and then both facts are true of them. The questions are still different. One asks what they came to have, and the other asks what they came to escape.'
    ] },

  /* ---------- group two: who else was in the colonies ---------- */
  { id: 'con-hist-who', kind: 'concept',
    h: 'Who else was there, and how they came',
    link: 'Not everyone in the colonies was someone who chose to come, and the first group of reasons does not tell you about them. The second group is about who else was there.',
    case: 'c9-farm',
    plain: [
      'Not everyone in the colonies had come by choice, and not everyone who was there had come at all. The three people in the field are made up, but each one stands for a real group.',
      'An indentured servant was a person who worked for a number of years to pay off the cost of the passage across the ocean. Joan is one. When she has worked those years, the debt is paid.',
      'From 1619, many people were brought to the colonies as enslaved people. An enslaved person was forced to work, was treated as the property of another person, and was not free to leave. Samuel is one. That is the difference from Joan: she made an agreement, and he made none, because nobody asked him.',
      'Native nations were there before all of them. The colonists did not arrive on empty land. Mika’s people had lived along the river for generations.',
      'The three facts below are the three groups, so that you can tell them apart.'
    ] },

  { id: 'facts-hist-who', kind: 'facts',
    h: 'Three groups of people in the colonies',
    link: 'These are the three groups, each with how it fits the idea of who was there and how they came.',
    concept: 'con-hist-who',
    rows: [
      { id: 'who-indent', q: 'What were people called who worked for a set number of years to pay off the cost of their passage across the ocean?', a: 'Indentured servants',
        relates: 'This is the group that Joan stands for. What to hold is that the work was for a set number of years, as payment for the passage.' },
      { id: 'who-enslaved', q: 'What were people called who were brought to the colonies by force, many of them from 1619, and were not free to leave?', a: 'Enslaved people',
        relates: 'This is the group that Samuel stands for. They were brought by force, many from 1619, and held as the property of other people.' },
      { id: 'who-native', q: 'Who already lived on the land when the colonists came?', a: 'Native nations',
        relates: 'They were there first. The colonists settled on land where Native nations already lived.' }
    ] },

  { id: 'chk-hist-who-indent', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-indent' } },
  { id: 'chk-hist-who-enslaved', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-enslaved' } },
  { id: 'chk-hist-who-native', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-native' } },

  { id: 'look-hist-who', kind: 'lookalike', ledger: 'who-indent~who-enslaved',
    h: 'Working for years to pay a debt, and being held as property',
    link: 'Two of the three groups were people who worked for someone else without being free to leave. They get swapped, so they go side by side.',
    facts: ['who-indent', 'who-enslaved'],
    instruction: 'Compare how each person came: by an agreement to pay for a journey, or by force.',
    prompt: { kind: 'which', answer: 'who-enslaved' },
    difference: [
      'Fact A is about a person who made an agreement: {f:who-indent}. They worked for a set number of years to pay off the cost of the passage, and the debt had an end.',
      'Fact B is about a person who was brought by force: {f:who-enslaved}. Nobody asked them, they were held as the property of someone else, and they were not free to leave.',
      'Both worked for someone else, and neither was free to stop and leave at once. What separates them is that one came by an agreement to pay off a debt, and the other was brought by force and held as property.'
    ] }
]);
