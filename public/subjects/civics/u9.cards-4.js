// Civics, Unit Nine, part four: the group of facts about the question of slavery and how the country tried to settle it, then the
// group of five names that the Civil War is held by. A fact unit (lesson standard A12): a concept card, a facts card and a check
// per fact, with a look-alike card where two facts are swapped. On the first card every answer is a short clause, on the second
// every answer is a name. A row's `q` and `a` carry no tokens: the app prints them as they are.
// The old claim that the war was not about slavery is not named here: a fact unit has no refute card (A12), so the unit holds the
// right fact, the reason that the seceding states themselves wrote down, and says it plainly.

FC.cards('civics', 'u9', [

  /* ---------- group nine: the question of slavery ---------- */
  { id: 'con-hist-slavery', kind: 'concept',
    h: 'The question that every new state raised',
    link: 'The country grew, and the growth kept bringing back one question. This group is how Congress, the Court and an amendment each dealt with it.',
    case: 'c9-newstate',
    plain: [
      'Look at what the members of Congress argued about. It was not roads or taxes. Each time a new state was added, the country had to decide whether slavery would be allowed there. The founders had put the question off, and growth brought it back every time.',
      'Congress tried to settle it with compromises. In 1820 it admitted Missouri as a slave state and Maine as a free one. In 1850 it made a second compromise. Each deal bought time without settling the matter, which is why the room in the story knows that the question will come back.',
      'In 1857 the Supreme Court dealt with it in a different way, in the Dred Scott decision. The Court ruled that Black people could not be citizens, and that Congress had no power to ban slavery in the territories, which are lands that had not yet become states. The decision is now widely seen as one of the worst the Court ever made.',
      'The second of those rulings is an example of the key’s name {o:beyondcong}: the Court said that a law of Congress went past what Congress may do. And the first did not stand. In 1868 the Fourteenth Amendment overturned it, by making everyone born here a citizen.',
      'The five facts below are the question, what the compromises did, the two rulings of 1857, and what overturned the first ruling.'
    ] },

  { id: 'facts-hist-slavery', kind: 'facts',
    h: 'The question, the compromises, the Court and the amendment',
    link: 'These are the five facts, each with how it fits the idea of a question that growth kept bringing back.',
    concept: 'con-hist-slavery',
    rows: [
      { id: 'slv-question', q: 'What did each new state force the country to decide?', a: 'Whether slavery would be allowed there',
        relates: 'The founders had put the question off. Each new state brought it back, because Congress had to decide whether slavery would be allowed there.' },
      { id: 'slv-time', q: 'What did the compromises of 1820 and 1850 do about the quarrel over slavery?', a: 'They bought time without settling it',
        relates: 'The compromises were deals made in Congress. Each one bought time without settling the matter, so the question came back with the next state.' },
      { id: 'slv-citizen', q: 'What did the Supreme Court decide in 1857, in the Dred Scott decision, about Black people?', a: 'They could not be citizens',
        relates: 'This is the first of the two rulings of 1857. The decision is now widely seen as one of the worst the Court ever made.' },
      { id: 'slv-terr', q: 'What did the Supreme Court decide in 1857 about a ban on slavery in the territories?', a: 'Congress had no power to ban slavery there',
        relates: 'This is the second of the two rulings of 1857. The Court said that a law of Congress went past what Congress may do, which is what the key’s name {o:beyondcong} describes.' },
      { id: 'slv-undone', q: 'What overturned the Court’s ruling on citizenship in 1868?', a: 'The Fourteenth Amendment made everyone born here a citizen',
        relates: 'The Fourteenth Amendment was added to overturn the citizenship part of the Dred Scott decision. Since 1868, everyone born here has been a citizen under the Constitution.' }
    ] },

  { id: 'chk-hist-slv-question', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-question' } },
  { id: 'chk-hist-slv-time', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-time' } },
  { id: 'chk-hist-slv-citizen', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-citizen' } },
  { id: 'chk-hist-slv-terr', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-terr' } },
  { id: 'chk-hist-slv-undone', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-undone' } },

  { id: 'look-hist-slavery', kind: 'lookalike', ledger: 'slv-citizen~slv-terr',
    h: 'Two rulings in one decision',
    link: 'Two of the five facts are the two rulings of the same decision of 1857, so they get swapped, and they go side by side.',
    facts: ['slv-citizen', 'slv-terr'],
    instruction: 'Compare what each ruling is about: a group of people, or a power of Congress.',
    prompt: { kind: 'which', answer: 'slv-terr' },
    difference: [
      'Fact A is about a group of people: “{f:slv-citizen}”. It is the ruling about Black people, and it is the one that the Fourteenth Amendment overturned.',
      'Fact B is about a power: “{f:slv-terr}”. It is the ruling about Congress and the territories.',
      'Both come from the Dred Scott decision of 1857. One asks who could be a citizen, and the other asks what Congress could do.'
    ] },

  /* ---------- group ten: the war, in five names ---------- */
  { id: 'con-hist-war', kind: 'concept',
    h: 'The war, held by five names',
    link: 'The question of slavery did not stay a question. This group is the war that came out of it, held by five names.',
    case: 'c9-letters',
    plain: [
      'Read the eleven letters the way a historian would: each one tells you what its writers said was their reason. That is what the leagues in the story did, and it is what the Southern states did.',
      'In 1860 Abraham Lincoln was elected President. After his election, eleven Southern states seceded. Secession is a state declaring that it is leaving the Union, as the eleven leagues declared that they were leaving the national league. The seceding states formed their own government. The declarations that they wrote name slavery as the cause of their leaving. It is written down, as it is in the letters, so nobody has to guess.',
      'The war that followed ran from 1861 to 1865, and Lincoln was President throughout. On January 1, 1863, the Emancipation Proclamation declared the people enslaved in the rebelling states free. Later in 1863, Lincoln gave the Gettysburg Address, which described the war as a test of whether government of, by and for the people could last. The Union won in 1865. The Union is the name for the country held together as one, and for the side that fought to keep it together.',
      'The five facts below are five names: the word for leaving, the President, the proclamation, the speech, and the cause that the seceding states named.'
    ] },

  { id: 'facts-hist-war', kind: 'facts',
    h: 'Five names of the Civil War',
    link: 'These are the five names, each with how it fits the story of the states that left and the war that followed.',
    concept: 'con-hist-war',
    rows: [
      { id: 'w-secession', q: 'What is it called when a state declares that it is leaving the Union?', a: 'Secession',
        relates: 'It is the word for what eleven Southern states did after Lincoln’s election in 1860, as the eleven leagues did in the story.' },
      { id: 'w-lincoln', q: 'Who was President throughout the Civil War?', a: 'Abraham Lincoln',
        relates: 'He was elected in 1860, and the Southern states seceded after his election. He was President for the whole war, which ran from 1861 to 1865.' },
      { id: 'w-emancip', q: 'Which document, in January 1863, declared the people enslaved in the rebelling states free?', a: 'The Emancipation Proclamation',
        relates: 'It was issued on January 1, 1863, and it declared the people enslaved in the rebelling states free.' },
      { id: 'w-gettys', q: 'Which speech of 1863 described the war as a test of whether government of, by and for the people could last?', a: 'The Gettysburg Address',
        relates: 'Lincoln gave it in 1863, later in the same year as the Emancipation Proclamation. It says what the war was a test of.' },
      { id: 'w-cause', q: 'What did the seceding states’ own declarations name as the cause of their leaving?', a: 'Slavery',
        relates: 'The declarations of the seceding states name slavery as the cause. It is written down in their own words, so the reason does not have to be guessed.' }
    ] },

  { id: 'chk-hist-w-secession', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-secession' } },
  { id: 'chk-hist-w-lincoln', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-lincoln' } },
  { id: 'chk-hist-w-emancip', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-emancip' } },
  { id: 'chk-hist-w-gettys', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-gettys' } },
  { id: 'chk-hist-w-cause', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-cause' } },

  { id: 'look-hist-war', kind: 'lookalike', ledger: 'w-emancip~w-gettys',
    h: 'A proclamation, and a speech',
    link: 'Two of the five names both come from 1863, in the middle of the war, so they get swapped, and they go side by side.',
    facts: ['w-emancip', 'w-gettys'],
    instruction: 'Compare what each one does: it declares people free, or it says what the war is a test of.',
    prompt: { kind: 'which', answer: 'w-gettys' },
    difference: [
      'Fact A declares people free: {f:w-emancip}. It was issued on January 1, 1863, and it is about the people enslaved in the rebelling states.',
      'Fact B says what the war was a test of: {f:w-gettys}. It is a speech, and it was given later in 1863.',
      'One is a declaration about people, and the other is a description of what the war was testing.'
    ] }
]);
