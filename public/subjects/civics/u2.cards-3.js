// Civics, Unit Two, part three: two groups about what the original text of the Constitution does. The first three articles
// build the three parts of the government, and Article I lists what Congress may do. Everything here is from the old Unit Two.
// How far a listed power reaches is argued in court, and this unit says so and holds only the list (the unit's `add` says it too).

FC.cards('civics', 'u2', [

  /* ---------- group six: what the first three articles built ---------- */
  { id: 'con-art', kind: 'concept',
    h: 'What the first three articles built',
    link: 'The last groups were about the documents and who wrote them. This group is about what the Constitution itself does: its first three articles build the three parts of the government.',
    case: 'cn-reading',
    plain: [
      'Dev has noticed the plan of the document. The original text of the Constitution, the one from 1787, has seven articles. The first three build the three parts of the government of the whole country, one article for each. Article I describes Congress. Article II describes the President. Article III describes the courts. Each of them says what that part may do and, in places, what none may do.',
      'You met these three parts in Unit One, as three of the four answers to the question of whose decision a story ends on: {plain:congress}; {plain:president}; and {plain:courts}. This is where the Constitution builds them. The Constitution is also the first place to look when a story asks whether one of them was allowed to do something, because it says what each may do.',
      'The three facts below are the three numbers and the three parts that go with them: hold each article as a number and a part.'
    ] },

  { id: 'facts-art', kind: 'facts',
    h: 'Three articles, three parts',
    link: 'These are the three facts, each with how it fits the idea that the first three articles build the three parts.',
    concept: 'con-art',
    rows: [
      { id: 'art-one', q: 'Which part of the government does Article I of the Constitution describe?', a: 'Congress',
        relates: 'Article I is the article about the lawmakers of the whole country, and it is where the list of what Congress may do is found.' },
      { id: 'art-two', q: 'Which part of the government does Article II of the Constitution describe?', a: 'The President',
        relates: 'Article II is the article about the President. It says that the executive power, which is the power to carry the laws out, is given to a President. Before the Constitution there was no President.' },
      { id: 'art-three', q: 'Which part of the government does Article III of the Constitution describe?', a: 'The courts',
        relates: 'Article III is the article about the courts. It sets up the federal courts, with a Supreme Court at the top. Before the Constitution there were no national courts.' }
    ] },

  { id: 'chk-art-one', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-one' } },
  { id: 'chk-art-two', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-two' } },
  { id: 'chk-art-three', kind: 'check', after: 'facts-art', ask: { type: 'fact', row: 'art-three' } },

  /* ---------- group seven: what Congress may do ---------- */
  { id: 'con-pow', kind: 'concept',
    h: 'The list of what Congress may do',
    link: 'Article I is the article about Congress. This group holds its most useful sentence for this subject: what Congress may do.',
    case: 'cn-post',
    plain: [
      'The story shows the point. Congress may set up a postal service, because Article I lists the power to establish post offices. Congress may not set how many hours a barber must train, because Article I lists nothing about that, so it belongs to the states.',
      'Article I, Section 8, lists what Congress may do. Congress may use only the powers on the list, and one more: it may pass whatever laws are “necessary and proper” to carry the listed powers out. A power that is not on the list is not Congress’s. It belongs to the states, or it is something that no government may do.',
      'The list is long. The facts below hold the seven that matter most here: the six groups of powers on the list that come up most, and the “necessary and proper” power that goes with them. The six are about raising money, trade, citizenship, the dollar and the mail, war and the armed forces, and the federal courts below the Supreme Court.',
      'How far each power reaches is argued in court all the time. Trade between the states is the best-known example. This group holds only what is on the list, and says nothing about where its edges are.'
    ] },

  { id: 'facts-pow', kind: 'facts',
    h: 'Seven powers of Congress',
    link: 'These are the seven facts, each with how it fits the idea that Congress may do only what the list gives it.',
    concept: 'con-pow',
    rows: [
      { id: 'pow-money', q: 'What may Congress do to raise the money that the government spends?', a: 'Lay and collect taxes, and borrow money',
        relates: 'This is the power that the Articles of Confederation lacked: Congress could only ask for money. The income tax is an example of a tax, and government bonds, which are loans to the government, are an example of borrowing.' },
      { id: 'pow-trade', q: 'What may Congress do about trade?', a: 'Regulate trade with other countries and between the states',
        relates: 'This answers the trouble that the flour merchant met at the state line. Import rules are about trade with other countries, and rules for goods shipped across state lines are about trade between the states. “Commerce” is a word that you will hear for this power, and it means trade.' },
      { id: 'pow-citizen', q: 'What may Congress do about who becomes a citizen?', a: 'Set one rule for becoming a citizen',
        relates: 'It decides who may become a citizen and when. Because it is one rule for the whole country, a state does not set its own.' },
      { id: 'pow-coin', q: 'What may Congress do about the dollar and about the mail?', a: 'Coin money and run the post offices',
        relates: 'The dollar is the money that Congress has the power to coin, and the mail is carried by the post offices that Congress has the power to run. The postal service in the story is this power at work.' },
      { id: 'pow-war', q: 'What may Congress do about war and the armed forces?', a: 'Declare war, and raise and support armies and a navy',
        relates: 'Congress votes a war into being, and it pays for the forces.' },
      { id: 'pow-courts', q: 'What may Congress do about the courts below the Supreme Court?', a: 'Create federal courts below the Supreme Court',
        relates: 'The Supreme Court is built by Article III. Congress creates the federal courts below it, which are the courts that a federal case begins in.' },
      { id: 'pow-proper', q: 'Besides the listed powers, what else may Congress do?', a: 'Pass whatever laws are necessary and proper to carry the listed powers out',
        relates: 'This is the power to make the laws that are needed to use the powers on the list. Where a law is needed to carry out a power on the list, this is the power behind it.' }
    ] },

  { id: 'chk-pow-money', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-money' } },
  { id: 'chk-pow-trade', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-trade' } },
  { id: 'chk-pow-citizen', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-citizen' } },
  { id: 'chk-pow-coin', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-coin' } },
  { id: 'chk-pow-war', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-war' } },
  { id: 'chk-pow-courts', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-courts' } },
  { id: 'chk-pow-proper', kind: 'check', after: 'facts-pow', ask: { type: 'fact', row: 'pow-proper' } },

  { id: 'look-pow', kind: 'lookalike', ledger: 'pow-money~pow-coin',
    h: 'Two powers about money',
    link: 'Two of the seven facts are both about money, and Congress has power over both. They get swapped, so they go side by side.',
    facts: ['pow-money', 'pow-coin'],
    instruction: 'Compare whose money each one is about: the money that the government spends, or the money that people use.',
    prompt: { kind: 'which', answer: 'pow-coin' },
    difference: [
      'Fact A is about the money that the government itself needs: {f:pow-money}. It is how the government gets what it spends.',
      'Fact B is about the money that people use, and about the mail: {f:pow-coin}. It is about the dollar in people’s pockets and about the post offices.',
      'Both are about money, and one is about where the government’s money comes from while the other is about what the money is that everybody uses.'
    ] }
]);
