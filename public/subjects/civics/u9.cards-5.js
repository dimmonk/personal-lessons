// Civics, Unit Nine, part five: the groups of facts about the Civil War by its years (every answer is a year), by its numbers
// (every answer is a number), and the three amendments that followed it (every answer is an ordinal: the Thirteenth, the Fourteenth,
// the Fifteenth). A fact unit (lesson standard A12): a concept card, a facts card and a check per fact, with a look-alike card
// where two facts are swapped. A row's `q` and `a` carry no tokens: the app prints them as they are.
// The Fourteenth Amendment's work for the states, and birthright citizenship since 1868, are held here as the right fact.

FC.cards('civics', 'u9', [

  /* ---------- group eleven: the war by its years ---------- */
  { id: 'con-hist-wyears', kind: 'concept',
    h: 'The war by its years',
    link: 'The five names hold the war by what it was called. This group holds the same war by its years.',
    case: 'c9-diary',
    plain: [
      'The woman has four diary entries and no dates. The way to date them is to know the four turning points of the war in order.',
      'In 1860 Abraham Lincoln was elected, and the Southern states left after his election. In 1861 the fighting began. In 1863 the Emancipation Proclamation was read out, and crowds gathered to hear it. In 1865 the Union won, and the fighting stopped.',
      'The pair to keep apart is the start and the end of the war: 1861 and 1865, four years apart. The election year, 1860, comes just before the war began.',
      'The four facts below are the four years.'
    ] },

  { id: 'facts-hist-wyears', kind: 'facts',
    h: 'Four years of the Civil War',
    link: 'These are the four years, each with how it fits the order of the war: the election, the start, the proclamation and the end.',
    concept: 'con-hist-wyears',
    rows: [
      { id: 'yw-elect', q: 'In which year was Lincoln elected President, after which eleven Southern states seceded?', a: '1860',
        relates: 'The Southern states seceded after his election. It is the year before the fighting began.' },
      { id: 'yw-start', q: 'In which year did the Civil War begin?', a: '1861',
        relates: 'The war ran from 1861 to 1865. It began the year after Lincoln’s election.' },
      { id: 'yw-emancip', q: 'In which year was the Emancipation Proclamation issued?', a: '1863',
        relates: 'It was issued on January 1, 1863, in the middle of the war. The Gettysburg Address was given later that year.' },
      { id: 'yw-end', q: 'In which year did the Union win, and the Civil War end?', a: '1865',
        relates: 'The Union won in 1865, four years after the war began.' }
    ] },

  { id: 'chk-hist-yw-elect', kind: 'check', after: 'facts-hist-wyears', ask: { type: 'fact', row: 'yw-elect' } },
  { id: 'chk-hist-yw-start', kind: 'check', after: 'facts-hist-wyears', ask: { type: 'fact', row: 'yw-start' } },
  { id: 'chk-hist-yw-emancip', kind: 'check', after: 'facts-hist-wyears', ask: { type: 'fact', row: 'yw-emancip' } },
  { id: 'chk-hist-yw-end', kind: 'check', after: 'facts-hist-wyears', ask: { type: 'fact', row: 'yw-end' } },

  { id: 'look-hist-wyears', kind: 'lookalike', ledger: 'yw-start~yw-end',
    h: 'The year the fighting began, and the year it ended',
    link: 'Two of the four years are the two edges of the war, four years apart, so they get swapped, and they go side by side.',
    facts: ['yw-start', 'yw-end'],
    instruction: 'Compare what each year is: when the fighting began, or when the Union won and it ended.',
    prompt: { kind: 'which', answer: 'yw-end' },
    difference: [
      'Fact A is the year the fighting began: {f:yw-start}. It was the year after Lincoln’s election.',
      'Fact B is the year the fighting ended: {f:yw-end}. It was the year of the Union’s win.',
      'The war lasted from the first to the second, four years in all.'
    ] },

  /* ---------- group twelve: three numbers ---------- */
  { id: 'con-hist-count', kind: 'concept',
    h: 'Three numbers that say how big it was and what came of it',
    link: 'The war has names and years. It also has three numbers that people use to say how big it was and what it led to.',
    case: 'c9-board',
    plain: [
      'The three numbers on the board each count something different, and they are easy to swap because none of them is a year.',
      'Eleven is the number of Southern states that seceded. More than 600,000 is the number of people killed in the war. Three is the number of amendments that were added to the Constitution in the years after the war: the Thirteenth, the Fourteenth and the Fifteenth.',
      'The three numbers count three different kinds of thing: states, people and amendments. The kind of thing is what tells you which number is which.',
      'The three facts below are the three numbers.'
    ] },

  { id: 'facts-hist-count', kind: 'facts',
    h: 'Three numbers of the war and what followed',
    link: 'These are the three numbers, each with how it fits the idea of three different things being counted.',
    concept: 'con-hist-count',
    rows: [
      { id: 'n-states', q: 'How many Southern states seceded?', a: 'Eleven',
        relates: 'Eleven states left the Union after Lincoln’s election and formed their own government. It is a count of states.' },
      { id: 'n-dead', q: 'How many people were killed in the Civil War?', a: 'More than 600,000',
        relates: 'The war killed more than 600,000 people. It is a count of people, and it is the number that shows how large the war was.' },
      { id: 'n-amend', q: 'How many amendments were added to the Constitution in the years after the war?', a: 'Three',
        relates: 'They are the Thirteenth, the Fourteenth and the Fifteenth. They were added after the war, in the years called Reconstruction, when the country tried to rebuild and to settle what freedom meant. It is a count of amendments.' }
    ] },

  { id: 'chk-hist-n-states', kind: 'check', after: 'facts-hist-count', ask: { type: 'fact', row: 'n-states' } },
  { id: 'chk-hist-n-dead', kind: 'check', after: 'facts-hist-count', ask: { type: 'fact', row: 'n-dead' } },
  { id: 'chk-hist-n-amend', kind: 'check', after: 'facts-hist-count', ask: { type: 'fact', row: 'n-amend' } },

  /* ---------- group thirteen: the three amendments ---------- */
  { id: 'con-hist-amend', kind: 'concept',
    h: 'Freed, citizens, vote: the three amendments',
    link: 'The war ended, and the country had to settle what freedom meant. This group is the three amendments that answered that, in order.',
    case: 'c9-porch',
    plain: [
      'Each neighbor on the porch is talking about a different amendment, and the three are steps in a row: freed, citizens, vote.',
      'The years from 1865 to 1877, when the country tried to rebuild and to settle what freedom meant, are called Reconstruction. Three amendments were added in them. The Thirteenth, in 1865, abolished slavery. The Fourteenth, in 1868, made everyone born here a citizen, and promised due process and equal protection. The Fifteenth, in 1870, said that the vote could not be denied because of race.',
      'Due process means that the government must follow fair steps before it punishes you or takes something from you. Equal protection means that the law protects people equally.',
      'The Fourteenth is the one that matters most for the cases in this course. It put rights above every state. That is why a court can stop a state or a city from acting against a right, which is the name {o:protected}. Its first part is also where birthright citizenship comes from. Since 1868, everyone born here has been a citizen under the Constitution.',
      'The order is the thing to hold: freed, citizens, vote. The three facts below are the three amendments, each asked by what it did.'
    ] },

  { id: 'facts-hist-amend', kind: 'facts',
    h: 'The Thirteenth, Fourteenth and Fifteenth Amendments',
    link: 'These are the three amendments, each with how it fits the idea of three steps in a row after the war.',
    concept: 'con-hist-amend',
    rows: [
      { id: 'am-13', q: 'Which amendment abolished slavery?', a: 'The Thirteenth',
        relates: 'It is the first of the three, from 1865, and it is the one about being freed.' },
      { id: 'am-14', q: 'Which amendment made everyone born here a citizen, and promised due process and equal protection?', a: 'The Fourteenth',
        relates: 'It is the second of the three, from 1868, and it is the one about being a citizen. It is the amendment behind the name {o:protected}, and it overturned the citizenship part of the Dred Scott decision.' },
      { id: 'am-15', q: 'Which amendment said that the vote cannot be denied because of race?', a: 'The Fifteenth',
        relates: 'It is the third of the three, from 1870, and it is the one about the vote.' }
    ] },

  { id: 'chk-hist-am-13', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-13' } },
  { id: 'chk-hist-am-14', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-14' } },
  { id: 'chk-hist-am-15', kind: 'check', after: 'facts-hist-amend', ask: { type: 'fact', row: 'am-15' } },

  { id: 'look-hist-amend', kind: 'lookalike', ledger: 'am-14~am-15',
    h: 'Being a citizen, and being able to vote',
    link: 'Two of the three amendments are about the rights of freed people and came only two years apart, so they get swapped, and they go side by side.',
    facts: ['am-14', 'am-15'],
    instruction: 'Compare what each one is about: who is a citizen, or who may vote.',
    prompt: { kind: 'which', answer: 'am-15' },
    difference: [
      'Fact A is about who is a citizen: {f:am-14}. It made everyone born here a citizen.',
      'Fact B is about the vote: {f:am-15}. It said that the vote could not be denied because of race.',
      'The order is freed, citizens, vote. A citizen and a voter are not the same thing, and the two amendments are two different steps.'
    ] }
]);
