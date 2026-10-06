// Civics, Unit Nine, part four: the group of facts about the question of slavery, then the group about the Civil War. A fact unit
// (lesson standard A12), a quick lesson (section 19): a concept card, a facts card and a check per fact. On the first card every
// answer is a short clause, on the second every answer is a name. A row's `q` and `a` carry no tokens: the app prints them as they are.
// The old claim that the war was not about slavery is not named here: a fact unit has no refute card (A12), so the unit holds the
// right fact, the reason that the seceding states themselves wrote down, and says it plainly.

FC.cards('civics', 'u9', [

  /* ---------- group six: the question of slavery ---------- */
  { id: 'con-hist-slavery', kind: 'concept',
    h: 'The question that every new state raised',
    link: 'The country grew, and the growth kept bringing back one question.',
    case: 'c9-newstate',
    plain: [
      'The members of Congress did not argue about roads or taxes. Each time a new state was added, the country had to decide whether slavery would be allowed there. The founders had put the question off, and growth brought it back every time.',
      'Congress tried compromises. In 1820 it admitted Missouri as a slave state and Maine as a free one, and in 1850 it made a second compromise. Each deal bought time without settling the matter.',
      'In 1857 the Supreme Court dealt with it in the Dred Scott decision. It ruled that Black people could not be citizens, and that Congress had no power to ban slavery in the territories, which are lands not yet states. The second ruling is a case of the name {o:beyondcong}. The decision is now widely seen as one of the worst the Court ever made. The first ruling did not stand: in 1868 the Fourteenth Amendment overturned it by making everyone born here a citizen.'
    ] },

  { id: 'facts-hist-slavery', kind: 'facts',
    h: 'The question, the compromises and the Court',
    link: 'The question that kept coming back, how Congress dealt with it, and how the Court did.',
    concept: 'con-hist-slavery',
    rows: [
      { id: 'slv-question', q: 'What did each new state force the country to decide?', a: 'Whether slavery would be allowed there',
        relates: 'The founders had put the question off. Each new state brought it back.' },
      { id: 'slv-time', q: 'What did the compromises of 1820 and 1850 do about the quarrel over slavery?', a: 'They bought time without settling it',
        relates: 'Each one was a deal made in Congress, and the question came back with the next state.' },
      { id: 'slv-citizen', q: 'What did the Supreme Court decide in 1857, in the Dred Scott decision, about Black people?', a: 'They could not be citizens',
        relates: 'The decision is now widely seen as one of the worst the Court ever made. The Fourteenth Amendment overturned this ruling in 1868.' }
    ] },

  { id: 'chk-hist-slv-question', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-question' } },
  { id: 'chk-hist-slv-time', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-time' } },
  { id: 'chk-hist-slv-citizen', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-citizen' } },

  /* ---------- group seven: the war, in four names ---------- */
  { id: 'con-hist-war', kind: 'concept',
    h: 'The war, held by four names',
    link: 'The question of slavery did not stay a question. It became a war.',
    case: 'c9-letters',
    plain: [
      'Each of the eleven letters says what its writers’ reason was, and that is what the Southern states did. In 1860 Abraham Lincoln was elected President, and eleven Southern states seceded. Secession is a state declaring that it is leaving the Union. The declarations they wrote name slavery as the cause, so nobody has to guess.',
      'The war ran from 1861 to 1865, with Lincoln as President throughout, and more than 600,000 people were killed. On January 1, 1863, the Emancipation Proclamation declared the people enslaved in the rebelling states free. The Union, the country held together as one, won in 1865.'
    ] },

  { id: 'facts-hist-war', kind: 'facts',
    h: 'Four names of the Civil War',
    link: 'The word for leaving, the cause, the proclamation and the President.',
    concept: 'con-hist-war',
    rows: [
      { id: 'w-secession', q: 'What is it called when a state declares that it is leaving the Union?', a: 'Secession',
        relates: 'It is what eleven Southern states did after Lincoln’s election in 1860, as the eleven leagues did in the story.' },
      { id: 'w-cause', q: 'What did the seceding states’ own declarations name as the cause of their leaving?', a: 'Slavery',
        relates: 'It is written down in their own words, so the reason does not have to be guessed.' },
      { id: 'w-emancip', q: 'Which document, in January 1863, declared the people enslaved in the rebelling states free?', a: 'The Emancipation Proclamation',
        relates: 'Issued on January 1, 1863, in the middle of the war.' },
      { id: 'w-lincoln', q: 'Who was President throughout the Civil War?', a: 'Abraham Lincoln',
        relates: 'Elected in 1860, he was President for the whole war, which ran from 1861 to 1865.' }
    ] },

  { id: 'chk-hist-w-secession', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-secession' } },
  { id: 'chk-hist-w-cause', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-cause' } },
  { id: 'chk-hist-w-emancip', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-emancip' } },
  { id: 'chk-hist-w-lincoln', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-lincoln' } }
]);
