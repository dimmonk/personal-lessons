// Political Ideologies, Unit Five: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice),
// so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that reads a text wrongly. ask.type 'missing': "what would you need to see before this
// name could be used?" (the choices are the key's "what you must be able to point to" lines). ask.type 'option': the key's question
// is asked of the text the claim is about. The fault is shown after the learner commits, and the claim put right is always last.

FC.cases('ideology', 'u5', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'i5-rev-clib', use: 'drill', kind: 'reverse', outcome: 'clib', expect: 'hear',
    options: [
      { text: '"Protect our rights, and then leave us alone."', voice: 'clib' },
      { text: '"Freedom means little to a child with no school, so the government should pay for one."', voice: 'modlib' },
      { text: '"The rules look the same for everyone, and they still leave one group behind."', voice: 'idegal' }
    ],
    why: 'It asks the government to protect each person’s rights and then stay out of the rest. Nothing is to be given, and no rule is blamed.' },

  { id: 'i5-rev-modlib', use: 'drill', kind: 'reverse', outcome: 'modlib', expect: 'find',
    options: [
      { text: 'A letter that says the government should keep to its courts and its police and leave everything else alone.', voice: 'clib' },
      { text: 'A speech that asks the government to pay for a doctor and a school in every district, with all of us paying together.', voice: 'modlib' },
      { text: 'A report that says one rule, the same for everyone, has shut a group out, and asks for it to be changed.', voice: 'idegal' }
    ],
    why: 'That is the government giving everyone a fair start, paid for by all, with rights protected first and no rule blamed.' },

  { id: 'i5-rev-idegal', use: 'drill', kind: 'reverse', outcome: 'idegal', expect: 'hear',
    options: [
      { text: '"Keep the courts open, and otherwise let people get on with it."', voice: 'clib' },
      { text: '"Every child is owed a school and a doctor, and we should all pay for them."', voice: 'modlib' },
      { text: '"Nobody wrote the rule to keep us out. It treats everyone alike, and we are still left behind."', voice: 'idegal' }
    ],
    why: 'It says a rule that treats everyone alike has left a group behind. That is the cause the text names, and what it asks for is a change to it.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'i5-claim-demo', use: 'claim',
    text: '"The speech says that every child is owed a school and a doctor, and that the government should pay for both. It talks about rights, so it must be Classical liberalism."',
    context: 'The speech also says that rights come first, and that everyone should pay for the school and the doctor together.',
    ask: { type: 'option', step: 'R1', answer: 'start' },
    fault: 'The claim stops at the word rights. All three names in this unit put what every person is owed first, so that word cannot tell them apart. What separates them is what the text wants done for people, and this speech wants the government to give everyone a school and a doctor.',
    corrected: 'The speech says every child is owed a school and a doctor, and asks the government to pay for both, with everyone sharing the cost. That is {a:R1.start}, and the name is {o:modlib}. A text that stopped at protecting rights would be {o:clib}.' },

  { id: 'i5-claim-small', use: 'claim',
    text: '"The letter wants a small government, so it must want no government at all."',
    context: 'The letter says each person is free to speak and to trade, and that the government should run the courts and the police and otherwise stay out.',
    ask: { type: 'option', step: 'R1', answer: 'leave' },
    fault: 'The claim treats small as none. The letter names the courts and the police as jobs the government should keep. A text that wanted no government would not name any.',
    corrected: 'The letter wants the government kept to the courts and the police, and left out of the rest. That is {a:R1.leave}, and the name is {o:clib}. Small is not the same as none.' },

  { id: 'i5-claim-liberal', use: 'claim',
    text: '"“Liberal” always means left-wing, so a text that wants a small government cannot be liberal at all."',
    context: 'The text says each person is free to speak, to own and to trade, and that the government should keep to its courts and its police.',
    ask: { type: 'missing', name: 'clib' },
    fault: 'The claim goes by the word and not by the text. “Liberal” is used for different things in different places, and each has its own name here. Neither use settles what a text wants done for people.',
    corrected: 'The text says each person is free to speak, to own and to trade, and wants the government kept to its courts and its police. That is the name {o:clib}, and the word “liberal” in the name is there because freedom comes first, whatever people in one country use the plain word for.' },

  { id: 'i5-claim-ranking', use: 'claim',
    text: '"The letter wants the test changed for one district only, so it is asking to place that district above everyone else."',
    context: 'The letter says the entry test is the same for every child, and that no child from the district has passed in ten years. It asks for the test to be changed until results are as fair for the district as for everywhere else, and says that nobody is to be placed above anyone.',
    ask: { type: 'option', step: 'R1', answer: 'rules' },
    fault: 'The claim reads a change for one group as placing it above the rest. The letter asks for results to come out as fair for the district as for everywhere else, and says in so many words that nobody is to be placed above anyone. Whether the change is wise is argued over, and this course does not settle it. What it settles is what the letter asks for.',
    corrected: 'The letter says a test that treats every child alike has left one district behind, and asks for it to be changed until results are fair, with nobody placed above anybody. That is {a:R1.rules}, and the name is {o:idegal}. A text that put one people above others would answer the first question differently.' },

  { id: 'i5-claim-services', use: 'claim',
    text: '"The speech wants the government to run a health service and a school system, so it wants the government to run everything."',
    context: 'The speech says each person has the right to speak and to believe, and asks the government to pay for a clinic in every district and a school in every town, with everyone paying together.',
    ask: { type: 'option', step: 'R1', answer: 'start' },
    fault: 'The claim jumps from two named services to everything. The speech asks the government for a clinic and a school, and says that rights come first. Whether asking for those two goes too far is argued over. What counts is what the speech asks for.',
    corrected: 'The speech protects rights and asks the government to pay for a clinic and a school, with all of us paying together. That is {a:R1.start}, and the name is {o:modlib}. It names two things to be given, and not everything.' }
]);
