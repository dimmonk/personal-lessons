// Civics, Unit Nine, part five: the group of facts about the three amendments that followed the Civil War (every answer is an
// ordinal: the Thirteenth, the Fourteenth, the Fifteenth). A fact unit (lesson standard A12), a quick lesson (section 19): a concept
// card, a facts card and a check per fact, with a look-alike card for the one pair that people swap. A row's `q` and `a` carry no
// tokens: the app prints them as they are.
// The Fourteenth Amendment's work for the states, and birthright citizenship since 1868, are held here as the right fact.

FC.cards('civics', 'u9', [

  /* ---------- group eight: the three amendments ---------- */
  { id: 'con-hist-amend', kind: 'concept',
    h: 'Freed, citizens, vote: the three amendments',
    link: 'The war ended, and the country had to settle what freedom meant. Three amendments answered that, in order.',
    case: 'c9-porch',
    plain: [
      'Each neighbor on the porch is talking about a different amendment, and the three come in a row: freed, citizens, vote. They were added in the years from 1865 to 1877, when the country tried to rebuild and to settle what freedom meant. Those years are called Reconstruction.',
      'The Thirteenth, in 1865, abolished slavery. The Fourteenth, in 1868, made everyone born here a citizen, and promised due process and equal protection. The Fifteenth, in 1870, said that the vote could not be denied because of race. A citizen and a voter are not the same thing, so these are two separate steps.',
      'Due process means that the government must follow fair steps before it punishes you or takes something from you. Equal protection means that the law protects people equally.',
      'The Fourteenth matters most for the cases in this course. It put rights above every state, which is why a court can stop a state or a city from acting against a right: the name {o:protected}. It is also where birthright citizenship comes from. Since 1868, everyone born here has been a citizen under the Constitution.'
    ] },

  { id: 'facts-hist-amend', kind: 'facts',
    h: 'The Thirteenth, Fourteenth and Fifteenth Amendments',
    link: 'The three amendments, each asked by what it did.',
    concept: 'con-hist-amend',
    rows: [
      { id: 'am-13', q: 'Which amendment abolished slavery?', a: 'The Thirteenth',
        relates: 'The first of the three, from 1865: freed.' },
      { id: 'am-14', q: 'Which amendment made everyone born here a citizen, and promised due process and equal protection?', a: 'The Fourteenth',
        relates: 'The second, from 1868: citizens. It is the amendment behind the name {o:protected}, and it overturned the citizenship part of the Dred Scott decision.' },
      { id: 'am-15', q: 'Which amendment said that the vote cannot be denied because of race?', a: 'The Fifteenth',
        relates: 'The third, from 1870: vote.' }
    ] },

  { id: 'chk-hist-am-13', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-13' } },
  { id: 'chk-hist-am-14', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-14' } },
  { id: 'chk-hist-am-15', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-15' } },

  { id: 'look-hist-amend', kind: 'lookalike', ledger: 'am-14~am-15',
    h: 'Being a citizen, and being able to vote',
    link: 'Two amendments about the rights of freed people, only two years apart.',
    facts: ['am-14', 'am-15'],
    instruction: 'Compare what each one is about: who is a citizen, or who may vote.',
    prompt: { kind: 'which', answer: 'am-15' },
    difference: [
      'Fact A is about who is a citizen: {f:am-14}. It made everyone born here a citizen.',
      'Fact B is about the vote: {f:am-15}. It said that the vote could not be denied because of race.'
    ] }
]);
