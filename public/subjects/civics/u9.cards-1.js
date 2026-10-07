// Civics, Unit Nine, part one: the opening card, then two groups of facts about the colonies: why people came and who else was there.
// A FACT unit (lesson standard A12), trimmed to a quick lesson (section 19): each group is a concept card (a case, then the idea in
// plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory and its answer is one
// of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes line,
// the heading of a check and of a look-alike stem. Key wording is never typed here: tokens fill it in ({o:purse}). Tokens are used
// only in `relates` and in the prose of a card: a row's `q` and `a` are printed as they are.

FC.cards('civics', 'u9', [

  { id: 'orient-hist', kind: 'orient',
    h: 'The US history you need to know, up to 1877',
    canDo: 'The citizenship interview asks about this history, and news stories lean on it. After this unit you can say, from memory, why people came to the colonies, why they broke from Britain, how the country grew, why it split over slavery, and what the three amendments after the Civil War changed. It stops at 1877.',
    everyday: 'When a story says a right “applies to the states”, or that someone is “a citizen by birth”, it is leaning on the amendments passed after the Civil War. Each group of facts starts with a short story, so each fact has something to hang on.',
    add: 'This is the short version that the interview wants. It says plainly what happened, including slavery and the removal of Native nations, and it leaves out most of the story.' },

  /* ---------- group one: why people came ---------- */
  { id: 'con-hist-came', kind: 'concept',
    h: 'Why people crossed the ocean',
    link: 'Why people left home for the colonies.',
    case: 'c9-dock',
    plain: [
      'Each person on the dock wants something different. Eliza wants to follow her own religion: that is religious freedom. Tom wants a say in how he is governed: political liberty. Hana wants better work and pay: economic opportunity.',
      'Rafael’s family is different. They are not heading toward something, they are running from it. Persecution means being harmed or punished for who you are or what you believe.',
      'To keep the four straight, ask one question: did the person come to get something, or to get away from something? Three reasons are about getting something. Persecution is the only one about getting away.'
    ] },

  { id: 'facts-hist-came', kind: 'facts',
    h: 'Four reasons for coming',
    link: 'The four reasons, each asked by what the person wanted.',
    concept: 'con-hist-came',
    rows: [
      { id: 'came-faith', q: 'What did a person who wanted to follow their own religion come to the colonies to have?', a: 'Religious freedom',
        relates: 'Being free to follow your own religion. It is something to get, not something to run from.' },
      { id: 'came-vote', q: 'What did a person who wanted a say in how they were governed come to the colonies to have?', a: 'Political liberty',
        relates: 'A say in how you are governed. It is something to get.' },
      { id: 'came-living', q: 'What did a person who wanted to earn a better living come to the colonies to find?', a: 'Economic opportunity',
        relates: 'A chance at better work and pay. It is about money, not belief or government.' },
      { id: 'came-flee', q: 'What did a person being harmed at home for who they were or what they believed come to the colonies to escape?', a: 'Persecution',
        relates: 'Being harmed or punished for who you are or what you believe. It is the only one of the four that is something to run from.' }
    ] },

  { id: 'chk-hist-came-faith', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-faith' } },
  { id: 'chk-hist-came-vote', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-vote' } },
  { id: 'chk-hist-came-living', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-living' } },
  { id: 'chk-hist-came-flee', kind: 'check', after: 'facts-hist-came', ask: { type: 'fact', row: 'came-flee' } },

  /* ---------- group two: who else was in the colonies ---------- */
  { id: 'con-hist-who', kind: 'concept',
    h: 'Who else was in the colonies',
    link: 'Not everyone came by choice, and some people were there before anyone arrived.',
    case: 'c9-farm',
    plain: [
      'Joan, Samuel and Mika belong to three different groups.',
      'Joan was an indentured servant. She agreed to work a set number of years to pay for her trip across the ocean, and when the years were up, the debt was paid.',
      'Samuel was enslaved. From 1619, many people were brought to the colonies by force. An enslaved person was treated as someone else’s property and could not leave. Nobody asked Samuel, and he made no agreement.',
      'Mika’s people, a Native nation, were there long before any ship came. The colonists did not settle empty land.',
      'To tell Joan from Samuel, ask: did the person agree to the work, and could they leave when it was done?'
    ] },

  { id: 'facts-hist-who', kind: 'facts',
    h: 'Three groups of people in the colonies',
    link: 'The three groups, asked by how they came.',
    concept: 'con-hist-who',
    rows: [
      { id: 'who-indent', q: 'What were people called who worked a set number of years to pay for their trip across the ocean?', a: 'Indentured servants',
        relates: 'Joan’s group. They agreed to the work, and it ended after a set number of years.' },
      { id: 'who-enslaved', q: 'What were people called who were brought to the colonies by force, many from 1619, and could not leave?', a: 'Enslaved people',
        relates: 'Samuel’s group. They were brought by force and held as someone else’s property.' },
      { id: 'who-native', q: 'Who already lived on the land when the colonists came?', a: 'Native nations',
        relates: 'Mika’s people. They were there first.' }
    ] },

  { id: 'chk-hist-who-indent', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-indent' } },
  { id: 'chk-hist-who-enslaved', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-enslaved' } },
  { id: 'chk-hist-who-native', kind: 'check', after: 'facts-hist-who', ask: { type: 'fact', row: 'who-native' } }
]);
