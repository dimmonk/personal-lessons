// Civics, Unit Nine, part one: the opening card, then two groups of facts about the colonies: why people came and who else was there.
// A FACT unit (lesson standard A12), trimmed to a quick lesson (section 19): each group is a concept card (a case, then the idea in
// plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its answer is one
// of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes line,
// the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in ({o:purse}). Tokens are used
// only in `relates` and in the prose of a card: a row's `q` and `a` are printed as they are.

FC.cards('civics', 'u9', [

  { id: 'orient-hist', kind: 'orient',
    h: 'Facts to hold, about how the country began, grew and divided over slavery',
    canDo: 'By the end you can say, without looking anything up, why people came to the colonies, how the colonists fell out with Britain, the main years of the founding, how the country grew and split over slavery, what happened in the Civil War, and what the three amendments after it did. The unit stops at 1877.',
    everyday: 'The citizenship interview asks about this history directly, and the news keeps leaning on it: when a story says that a right “applies to the states”, or that a person is “a citizen by birth”, the amendments that followed the Civil War are what it rests on. Each fact comes with a short story, so it has something to hang on.',
    add: 'This is the short form that the interview wants. It says plainly what happened, slavery and the removal of Native nations included, and it does not tell the whole story.' },

  /* ---------- group one: why people came ---------- */
  { id: 'con-hist-came', kind: 'concept',
    h: 'Why people crossed the ocean to the colonies',
    link: 'The start of the story: why people left home and crossed the ocean.',
    case: 'c9-dock',
    plain: [
      'The four people on the dock stand for the four reasons that people gave: religious freedom (being free to follow your own religion), political liberty (a say in how you are governed), economic opportunity (a chance to earn a better living), and persecution (being harmed or punished over who you are or what you believe).',
      'Three are things people hoped to have. Persecution is the one they hoped to get away from. A person harmed for their beliefs may have wanted both, as Rafael’s family did, but the facts are still different: what you came to have, and what you came to leave behind.'
    ] },

  { id: 'facts-hist-came', kind: 'facts',
    h: 'Four reasons for coming',
    link: 'The four reasons, each asked by what the person wanted.',
    concept: 'con-hist-came',
    rows: [
      { id: 'came-faith', q: 'What did a person who wanted to follow their own religion come to the colonies to have?', a: 'Religious freedom',
        relates: 'Being free to follow your own religion. It is something to have, unlike persecution, which is something to leave.' },
      { id: 'came-vote', q: 'What did a person who wanted a say in how they were governed come to the colonies to have?', a: 'Political liberty',
        relates: 'Freedom in public life, including a say in how you are governed. It is something to have.' },
      { id: 'came-living', q: 'What did a person who wanted to earn a better living come to the colonies to find?', a: 'Economic opportunity',
        relates: 'The reason about work and money, and not about belief or government. It is something to have.' },
      { id: 'came-flee', q: 'What did a person who was being harmed at home for who they were or what they believed come to the colonies to get away from?', a: 'Persecution',
        relates: 'Being harmed or punished over who you are or what you believe. It is the only one of the four that is something to get away from.' }
    ] },

  { id: 'chk-hist-came-faith', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-faith' } },
  { id: 'chk-hist-came-vote', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-vote' } },
  { id: 'chk-hist-came-living', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-living' } },
  { id: 'chk-hist-came-flee', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-flee' } },

  /* ---------- group two: who else was in the colonies ---------- */
  { id: 'con-hist-who', kind: 'concept',
    h: 'Who else was there, and how they came',
    link: 'Not everyone in the colonies came by choice, and not everyone had come at all.',
    case: 'c9-farm',
    plain: [
      'The three people in the field stand for three real groups. An indentured servant worked a set number of years to pay off the cost of the passage across the ocean, and then the debt was paid. Joan made an agreement.',
      'From 1619, many people were brought to the colonies as enslaved people. An enslaved person was forced to work, was treated as the property of another person, and was not free to leave. Samuel made no agreement, because nobody asked him.',
      'Native nations were there before all of them. The colonists did not arrive on empty land.'
    ] },

  { id: 'facts-hist-who', kind: 'facts',
    h: 'Three groups of people in the colonies',
    link: 'The three groups, asked by how they came.',
    concept: 'con-hist-who',
    rows: [
      { id: 'who-indent', q: 'What were people called who worked for a set number of years to pay off the cost of their passage across the ocean?', a: 'Indentured servants',
        relates: 'Joan’s group. The work was for a set number of years, as payment for the passage.' },
      { id: 'who-enslaved', q: 'What were people called who were brought to the colonies by force, many of them from 1619, and were not free to leave?', a: 'Enslaved people',
        relates: 'Samuel’s group. They were brought by force and held as the property of other people.' },
      { id: 'who-native', q: 'Who already lived on the land when the colonists came?', a: 'Native nations',
        relates: 'They were there first. The colonists settled on land where Native nations already lived.' }
    ] },

  { id: 'chk-hist-who-indent', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-indent' } },
  { id: 'chk-hist-who-enslaved', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-enslaved' } },
  { id: 'chk-hist-who-native', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-native' } }
]);
