// Civics, Unit Two, part five (first half): how the Constitution is changed, and the Fourteenth Amendment. The Fourteenth is held in
// its three parts (a citizen, due process and equal protection, and the limits brought to the states). All of it is from the old
// Unit Two and the Fourteenth Amendment lines of the old Unit One.

FC.cards('civics', 'u2', [

  /* ---------- group ten: how the Constitution is changed ---------- */
  { id: 'con-chg', kind: 'concept',
    h: 'How the Constitution is changed',
    link: 'The Bill of Rights was the first change made to the Constitution. This group is about how any change is made, and how many have been.',
    case: 'cn-change',
    plain: [
      'Sam’s friend is right that it is meant to be hard. Under the Articles of Confederation every change needed all thirteen states, and any one of them could stop it. The Constitution asks for less than everyone, but still for a great deal. First, two-thirds of both chambers of Congress must vote to propose the change. The chambers are the House of Representatives and the Senate. Second, three-quarters of the states must approve it. The word for the states’ approval is “ratify”: an amendment is ratified when enough states have approved it. A change that is added in this way is an amendment, and it is part of the Constitution.',
      'Because it is so hard, few changes have been made. Thousands have been proposed, and only twenty-seven have been adopted. Ten of those twenty-seven were added together, in 1791: that is the Bill of Rights. So seventeen came after it.',
      'Notice what the two fractions have in common. Both are well beyond half, and that is the point of them: a change to the Constitution needs wide agreement, in Congress and among the states, and a bare majority is not enough.'
    ] },

  { id: 'facts-chg', kind: 'facts',
    h: 'Two fractions and three numbers',
    link: 'These are the five facts, each with how it fits the idea that changing the Constitution is hard and has rarely been done.',
    concept: 'con-chg',
    rows: [
      { id: 'chg-propose', q: 'What share of both chambers of Congress must vote to propose an amendment?', a: 'Two-thirds',
        relates: 'Two-thirds of the House of Representatives and two-thirds of the Senate. This is the first of the two steps, and it is far more than half.' },
      { id: 'chg-approve', q: 'What share of the states must approve a proposed amendment?', a: 'Three-quarters',
        relates: 'Three-quarters of the states is more than the two-thirds that Congress needs, and less than all thirteen, which is what the Articles of Confederation asked for. This is the second of the two steps.' },
      { id: 'chg-total', q: 'How many amendments does the Constitution have so far?', a: 'Twenty-seven',
        relates: 'Thousands have been proposed, and only twenty-seven have been adopted. Changing the Constitution has been rare.' },
      { id: 'chg-ten', q: 'How many amendments were added together in 1791?', a: 'Ten',
        relates: 'These ten are the Bill of Rights. They were added together, in 1791.' },
      { id: 'chg-later', q: 'How many amendments were added after 1791?', a: 'Seventeen',
        relates: 'Twenty-seven in all, less the ten of 1791, leaves seventeen. They run from the Eleventh Amendment to the Twenty-seventh.' }
    ] },

  { id: 'chk-chg-propose', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-propose' } },
  { id: 'chk-chg-approve', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-approve' } },
  { id: 'chk-chg-total', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-total' } },
  { id: 'chk-chg-ten', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-ten' } },
  { id: 'chk-chg-later', kind: 'check', after: 'facts-chg', ask: { type: 'fact', row: 'chg-later' } },

  { id: 'look-chg', kind: 'lookalike', ledger: 'chg-propose~chg-approve',
    h: 'Two-thirds, and three-quarters',
    link: 'Two of the five facts are both fractions that must say yes before the Constitution can be changed. They get swapped, so they go side by side.',
    facts: ['chg-propose', 'chg-approve'],
    instruction: 'Compare who is voting in each: Congress proposing a change, or the states approving it.',
    prompt: { kind: 'which', answer: 'chg-approve' },
    difference: [
      'Fact A is the vote in Congress: {f:chg-propose}, in both chambers. It comes first, and it is how a change is proposed.',
      'Fact B is the approval of the states: {f:chg-approve}. It comes second, and it is how a proposed change becomes part of the Constitution.',
      'A way to hold them: the smaller fraction comes first and is in Congress, and the larger fraction comes second and is among the states.'
    ] },

  /* ---------- group eleven: the Fourteenth Amendment ---------- */
  { id: 'con-fth', kind: 'concept',
    h: 'The Fourteenth Amendment',
    link: 'The Bill of Rights is the first ten amendments. This group is about one of the seventeen that came after, because it answers a question that the Bill of Rights leaves open.',
    case: 'cn-permit',
    plain: [
      'The lawyer’s question is a good one. The Bill of Rights was first written to limit only the federal government. Its First Amendment begins “Congress shall make no law”, and it does not mention a state. So how can it stop a state from refusing a church a permit?',
      'The answer is the Fourteenth Amendment, adopted in 1868, after the Civil War. It did three things, and the second has two halves. The first is that anyone born in the United States is a citizen. The second is that no state may take a person’s life, liberty or property without due process, which means fair legal steps, or deny anyone equal protection of the laws, which means equal treatment in the same situation. The third is that the courts later read the Fourteenth Amendment to bring the limits in the Bill of Rights to the states, so that today they protect you against your state and your city as well as against the federal government.',
      'The third thing is the answer to the lawyer’s question. Because of the Fourteenth Amendment, the limits in the First Amendment reach a state’s law as well as a law of Congress. The four facts below are the first part, the two halves of the second part, and the third part.'
    ] },

  { id: 'facts-fth', kind: 'facts',
    h: 'The three parts of the Fourteenth Amendment',
    link: 'These are the four facts, each with how it fits the idea that the Fourteenth Amendment limits a state and brings the Bill of Rights to it.',
    concept: 'con-fth',
    rows: [
      { id: 'fth-citizen', q: 'What does the Fourteenth Amendment make of anyone born in the United States?', a: 'A citizen of the United States',
        relates: 'This is the first part. It was adopted in 1868, after the Civil War, and it says that anyone born in the United States is a citizen.' },
      { id: 'fth-process', q: 'What does the Fourteenth Amendment require of a state that wants to take a person’s life, liberty or property?', a: 'Due process, which means fair legal steps',
        relates: 'This is the first half of the second part. It is the same idea as in the Fifth Amendment, fair legal steps, and here it is a limit on a state.' },
      { id: 'fth-equal', q: 'What does the Fourteenth Amendment forbid a state to deny anyone?', a: 'Equal protection of the laws, which means equal treatment in the same situation',
        relates: 'This is the second half of the second part. Two people in the same situation are to be treated the same way by a state.' },
      { id: 'fth-states', q: 'What did the courts later read the Fourteenth Amendment to bring to the states?', a: 'The limits in the Bill of Rights, so that they stop a state or a city too',
        relates: 'This is the third part, and it is the answer to the lawyer’s question. The Bill of Rights was first written to limit only the federal government. After the Civil War the Fourteenth Amendment was read to bring those limits to the states, so today they protect you against your state and your city as well.' }
    ] },

  { id: 'chk-fth-citizen', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-citizen' } },
  { id: 'chk-fth-process', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-process' } },
  { id: 'chk-fth-equal', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-equal' } },
  { id: 'chk-fth-states', kind: 'check', after: 'facts-fth', ask: { type: 'fact', row: 'fth-states' } },

  { id: 'look-fth', kind: 'lookalike', ledger: 'fth-process~fth-equal',
    h: 'Fair steps, and equal treatment',
    link: 'Two of the four facts are both limits on a state in the same sentence, and both are everyday words with a special meaning. They get swapped, so they go side by side.',
    facts: ['fth-process', 'fth-equal'],
    instruction: 'Compare what each one asks of a state: following fair steps before it takes something, or treating people in the same situation alike.',
    prompt: { kind: 'which', answer: 'fth-equal' },
    difference: [
      'Fact A is due process: {f:fth-process}. It is about the steps a state must follow before it takes a person’s life, liberty or property. It asks whether the steps were fair.',
      'Fact B is equal protection: {f:fth-equal}. It is about whether the state treats people in the same situation in the same way. It asks whether the state is treating them alike.',
      'One is about how a state goes about taking something from a person. The other is about whether the state treats one person differently from another in the same position.'
    ] }
]);
