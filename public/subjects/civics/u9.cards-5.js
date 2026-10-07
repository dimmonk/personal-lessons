// Civics, Unit Nine, part five: the group of facts about the three amendments that followed the Civil War (every answer is an
// ordinal: the Thirteenth, the Fourteenth, the Fifteenth). A fact unit (lesson standard A12), a quick lesson (section 19): a concept
// card, a facts card and a check per fact, with a look-alike card for the one pair that people swap. A row's `q` and `a` carry no
// tokens: the app prints them as they are.
// The Fourteenth Amendment's work for the states, and birthright citizenship since 1868, are held here as the right fact.

FC.cards('civics', 'u9', [

  /* ---------- group eight: the three amendments ---------- */
  { id: 'con-hist-amend', kind: 'concept',
    h: 'Freed, citizens, vote: the three amendments',
    link: 'The war ended, and three amendments settled what freedom meant, in order.',
    case: 'c9-porch',
    plain: [
      'Each neighbor on the porch is talking about a different amendment, and the three came in a row: freed, citizens, vote. They were added in 1865, 1868 and 1870, during Reconstruction. That is the name for the years from 1865 to 1877, when the country tried to rebuild after the war and settle what freedom meant.',
      'The first neighbor says nobody can own him any more. That is the Thirteenth, in 1865, which abolished slavery. The second says her son is a citizen. That is the Fourteenth, in 1868, which made everyone born here a citizen and promised due process and equal protection. The third says nobody can stop him voting because of his race. That is the Fifteenth, in 1870. A citizen and a voter are not the same thing, so these are two separate steps.',
      'Due process means the government must follow fair steps before it punishes you or takes something from you. Equal protection means the law protects everyone equally.',
      'The Fourteenth matters most for the rest of this course. It put people’s rights above every state, which is why a court can stop a state or a city from breaking a right: that is {o:protected}. It is also where birthright citizenship comes from. Since 1868, everyone born here has been a citizen.'
    ] },

  { id: 'facts-hist-amend', kind: 'facts',
    h: 'The Thirteenth, Fourteenth and Fifteenth Amendments',
    link: 'The three amendments, each asked by what it did.',
    concept: 'con-hist-amend',
    rows: [
      { id: 'am-13', q: 'Which amendment abolished slavery?', a: 'The Thirteenth',
        relates: 'The first of the three, from 1865: freed.' },
      { id: 'am-14', q: 'Which amendment made everyone born here a citizen, and promised due process and equal protection?', a: 'The Fourteenth',
        relates: 'The second, from 1868: citizens. It is the amendment behind {o:protected}, and it overturned the citizenship ruling in the Dred Scott decision.' },
      { id: 'am-15', q: 'Which amendment said that the vote cannot be denied because of race?', a: 'The Fifteenth',
        relates: 'The third, from 1870: vote.' }
    ] },

  { id: 'chk-hist-am-13', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-13' } },
  { id: 'chk-hist-am-14', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-14' } },
  { id: 'chk-hist-am-15', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-15' } },

  { id: 'look-hist-amend', kind: 'lookalike', ledger: 'am-14~am-15',
    h: 'Being a citizen, and being able to vote',
    link: 'Two amendments about freed people, only two years apart.',
    facts: ['am-14', 'am-15'],
    instruction: 'Ask what each one is about: who counts as a citizen, or who may vote.',
    prompt: { kind: 'which', answer: 'am-15' },
    difference: [
      'Fact A is about who is a citizen: {f:am-14}. It made everyone born here a citizen.',
      'Fact B is about the vote: {f:am-15}. It said that the vote could not be denied because of race.'
    ] }
]);
