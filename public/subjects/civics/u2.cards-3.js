// Civics, Unit Two, part three: two groups about what the original text of the Constitution does. The first three articles
// build the three parts of the government, and Article I lists what Congress may do. Everything here is from the old Unit Two.
// How far a listed power reaches is argued in court, and this unit says so and holds only the list (the unit's `add` says it too).

FC.cards('civics', 'u2', [

  /* ---------- group four: what the first three articles built ---------- */
  { id: 'con-art', kind: 'concept',
    h: 'What the first three articles built',
    link: 'What the Constitution itself does.',
    case: 'cn-reading',
    plain: [
      'The original text of the Constitution, the one from 1787, has seven articles. The first three build the three parts of the government of the whole country, one article each: Article I describes Congress, Article II the President, Article III the courts. Each says what that part may do and, in places, what none may do.',
      'You met these three parts in Unit One, as three of the four answers to whose decision a story ends on: {plain:congress}; {plain:president}; and {plain:courts}. Hold each article as a number and a part.'
    ] },

  { id: 'facts-art', kind: 'facts',
    h: 'Three articles, three parts',
    link: 'Each of the first three articles builds one part of the government.',
    concept: 'con-art',
    rows: [
      { id: 'art-one', q: 'Which part of the government does Article I of the Constitution describe?', a: 'Congress',
        relates: 'Article I is about the lawmakers of the whole country, and it is where the list of what Congress may do is found.' },
      { id: 'art-two', q: 'Which part of the government does Article II of the Constitution describe?', a: 'The President',
        relates: 'Article II gives the executive power, the power to carry the laws out, to a President.' },
      { id: 'art-three', q: 'Which part of the government does Article III of the Constitution describe?', a: 'The courts',
        relates: 'Article III sets up the federal courts, with a Supreme Court at the top.' }
    ] },

  { id: 'chk-art-one', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-one' } },
  { id: 'chk-art-two', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-two' } },
  { id: 'chk-art-three', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-three' } },

  /* ---------- group five: what Congress may do ---------- */
  { id: 'con-pow', kind: 'concept',
    h: 'The list of what Congress may do',
    link: 'Article I lists what Congress may do.',
    case: 'cn-post',
    plain: [
      'Congress may set up a postal service, because Article I lists the power to establish post offices. Congress may not set how many hours a barber must train, because Article I lists nothing about that, so it belongs to the states.',
      'Article I, Section 8, lists what Congress may do. Congress may use only the powers on the list, and one more: it may pass whatever laws are “necessary and proper” to carry the listed powers out. A power that is not on the list belongs to the states, or is something that no government may do.',
      'The list is long. The facts below hold the five that matter most here: raising money, trade, the dollar and the mail, war and the armed forces, and the “necessary and proper” power. How far each power reaches is argued in court all the time. This holds only what is on the list.'
    ] },

  { id: 'facts-pow', kind: 'facts',
    h: 'Five powers of Congress',
    link: 'Congress may do only what the list gives it.',
    concept: 'con-pow',
    rows: [
      { id: 'pow-money', q: 'What may Congress do to raise the money that the government spends?', a: 'Lay and collect taxes, and borrow money',
        relates: 'The first plan of government gave Congress no power to tax. It could only ask the states for money.' },
      { id: 'pow-trade', q: 'What may Congress do about trade?', a: 'Regulate trade with other countries and between the states',
        relates: 'Import rules are about trade with other countries, and rules for goods shipped across state lines are about trade between the states. “Commerce” is another word for this trade.' },
      { id: 'pow-coin', q: 'What may Congress do about the dollar and about the mail?', a: 'Coin money and run the post offices',
        relates: 'The postal service in the story is this power at work.' },
      { id: 'pow-war', q: 'What may Congress do about war and the armed forces?', a: 'Declare war, and raise and support armies and a navy',
        relates: 'Congress votes a war into being, and it pays for the forces.' },
      { id: 'pow-proper', q: 'Besides the listed powers, what else may Congress do?', a: 'Pass whatever laws are necessary and proper to carry the listed powers out',
        relates: 'Where a law is needed to carry out a power on the list, this is the power behind it.' }
    ] },

  { id: 'chk-pow-money', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-money' } },
  { id: 'chk-pow-trade', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-trade' } },
  { id: 'chk-pow-coin', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-coin' } },
  { id: 'chk-pow-war', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-war' } },
  { id: 'chk-pow-proper', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-proper' } }
]);
