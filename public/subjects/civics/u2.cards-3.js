// Civics, Unit Two, part three: two groups about what the original text of the Constitution does. The first three articles
// build the three parts of the government, and Article I lists what Congress may do. Everything here is from the old Unit Two.
// How far a listed power reaches is argued in court, and this unit says so and holds only the list (the unit's `add` says it too).

FC.cards('civics', 'u2', [

  /* ---------- group four: what the first three articles built ---------- */
  { id: 'con-art', kind: 'concept',
    h: 'What the first three articles built',
    link: 'The Constitution sets up the government in its first three articles.',
    case: 'cn-reading',
    plain: [
      'The original Constitution, the one from 1787, has seven articles. The first three set up the three parts of the government of the whole country, one article each: Article I is Congress, Article II is the President, Article III is the courts. Each says what that part may do and, in places, what none of them may do.',
      'You met these three parts in Unit One: {plain:congress}; {plain:president}; and {plain:courts}. Remember each article as a number and a part.'
    ] },

  { id: 'facts-art', kind: 'facts',
    h: 'Three articles, three parts',
    link: 'Each of the first three articles sets up one part of the government.',
    concept: 'con-art',
    rows: [
      { id: 'art-one', q: 'Which part of the government does Article I of the Constitution describe?', a: 'Congress',
        relates: 'Article I is about the lawmakers of the whole country. It is also where the list of what Congress may do is found.' },
      { id: 'art-two', q: 'Which part of the government does Article II of the Constitution describe?', a: 'The President',
        relates: 'Article II gives the President the executive power: the power to carry out the laws.' },
      { id: 'art-three', q: 'Which part of the government does Article III of the Constitution describe?', a: 'The courts',
        relates: 'Article III sets up the federal courts, with the Supreme Court at the top.' }
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
      'Congress may set up a postal service, because Article I lists the power to establish post offices. Congress may not set how many hours a barber must train, because Article I says nothing about that. It belongs to the states.',
      'The list is in Article I, Section 8. Congress may use only the powers on the list, plus one more: it may pass whatever laws are “necessary and proper” to carry out the listed powers. A power that is not on the list belongs to the states, or is something no government may do.',
      'The list is long. The five below matter most: raising money, trade, the dollar and the mail, war and the armed forces, and the “necessary and proper” power. Courts argue all the time about how far each power reaches. This unit holds only what is on the list.'
    ] },

  { id: 'facts-pow', kind: 'facts',
    h: 'Five powers of Congress',
    link: 'Congress may do only what the list gives it.',
    concept: 'con-pow',
    rows: [
      { id: 'pow-money', q: 'What may Congress do to raise the money that the government spends?', a: 'Collect taxes, and borrow money',
        relates: 'The first plan of government gave Congress no power to tax. It could only ask the states for money.' },
      { id: 'pow-trade', q: 'What may Congress do about trade?', a: 'Regulate trade with other countries and between the states',
        relates: 'Import rules cover trade with other countries, and rules for goods shipped across state lines cover trade between the states. Another word for this trade is “commerce”.' },
      { id: 'pow-coin', q: 'What may Congress do about the dollar and about the mail?', a: 'Coin money and run the post offices',
        relates: 'The postal service in the story is this power at work.' },
      { id: 'pow-war', q: 'What may Congress do about war and the armed forces?', a: 'Declare war, and raise and support armies and a navy',
        relates: 'Congress votes a war into being, and it pays for the forces.' },
      { id: 'pow-proper', q: 'Besides the powers on the list, what else may Congress do?', a: 'Pass the laws “necessary and proper” to carry out its listed powers',
        relates: 'Where a law is needed to carry out one of the powers on the list, this is the power behind it.' }
    ] },

  { id: 'chk-pow-money', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-money' } },
  { id: 'chk-pow-trade', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-trade' } },
  { id: 'chk-pow-coin', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-coin' } },
  { id: 'chk-pow-war', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-war' } },
  { id: 'chk-pow-proper', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-proper' } }
]);
