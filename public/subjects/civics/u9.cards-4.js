// Civics, Unit Nine, part four: the group of facts about the question of slavery, then the group about the Civil War. A fact unit
// (lesson standard A12), a quick lesson (section 19): a concept card, a facts card and a check per fact. On the first card every
// answer is a short clause, on the second every answer is a name. A row's `q` and `a` carry no tokens: the app prints them as they are.
// The old claim that the war was not about slavery is not named here: a fact unit has no refute card (A12), so the unit holds the
// right fact, the reason that the seceding states themselves wrote down, and says it plainly.

FC.cards('civics', 'u9', [

  /* ---------- group six: the question of slavery ---------- */
  { id: 'con-hist-slavery', kind: 'concept',
    h: 'The question every new state raised',
    link: 'The country grew, and growth kept bringing back one question.',
    case: 'c9-newstate',
    plain: [
      'The members of Congress in the story are not arguing about roads or taxes. Every time a new state joined, the country had to decide whether slavery would be allowed there. The founders had put that question off, and growth brought it back every time.',
      'Congress tried deals. In 1820 it let in Missouri as a slave state and Maine as a free one, and in 1850 it made a second deal. Each deal bought time without settling anything.',
      'In 1857 the Supreme Court gave its answer in the Dred Scott decision. It ruled that Black people could not be citizens, and that Congress could not ban slavery in the territories, the lands that were not yet states. That second ruling is an example of {o:beyondcong}. Most people now see the decision as one of the worst the Court ever made. The first ruling did not last: in 1868 the Fourteenth Amendment overturned it by making everyone born here a citizen.'
    ] },

  { id: 'facts-hist-slavery', kind: 'facts',
    h: 'The question, the deals and the Court',
    link: 'The question that kept coming back, and what Congress and the Court did about it.',
    concept: 'con-hist-slavery',
    rows: [
      { id: 'slv-question', q: 'What did each new state force the country to decide?', a: 'Whether slavery would be allowed there',
        relates: 'The founders had put the question off. Each new state brought it back.' },
      { id: 'slv-time', q: 'What did the deals of 1820 and 1850 do about the quarrel over slavery?', a: 'They bought time without settling it',
        relates: 'Congress made each deal, and the question came back with the next state.' },
      { id: 'slv-citizen', q: 'What did the Supreme Court decide in 1857, in the Dred Scott decision, about Black people?', a: 'They could not be citizens',
        relates: 'Most people now see this as one of the worst decisions the Court ever made. The Fourteenth Amendment overturned it in 1868.' }
    ] },

  { id: 'chk-hist-slv-question', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-question' } },
  { id: 'chk-hist-slv-time', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-time' } },
  { id: 'chk-hist-slv-citizen', kind: 'check', after: 'facts-hist-slavery', ask: { type: 'fact', row: 'slv-citizen' } },

  /* ---------- group seven: the war, in four names ---------- */
  { id: 'con-hist-war', kind: 'concept',
    h: 'The Civil War in four facts',
    link: 'The question of slavery turned into a war.',
    case: 'c9-letters',
    plain: [
      'The eleven letters stand for what eleven Southern states did. In 1860 Abraham Lincoln was elected President, and the eleven states seceded: each declared that it was leaving the Union. In the story, every league put the same reason at the top of its letter. The states did the same: their own declarations name slavery as the cause, so nobody has to guess.',
      'The war ran from 1861 to 1865, with Lincoln as President the whole time, and more than 600,000 people died. On January 1, 1863, the Emancipation Proclamation declared the people enslaved in the rebelling states free. In 1865 the Union, the side that stayed together as one country, won.'
    ] },

  { id: 'facts-hist-war', kind: 'facts',
    h: 'Four facts about the Civil War',
    link: 'The word for leaving, the cause, the proclamation and the President.',
    concept: 'con-hist-war',
    rows: [
      { id: 'w-secession', q: 'What is it called when a state declares that it is leaving the Union?', a: 'Secession',
        relates: 'Eleven Southern states did this after Lincoln’s election in 1860, as the eleven leagues did in the story.' },
      { id: 'w-cause', q: 'What did the seceding states’ own declarations name as the cause of their leaving?', a: 'Slavery',
        relates: 'They wrote it down in their own words, so the reason does not have to be guessed.' },
      { id: 'w-emancip', q: 'Which document, in January 1863, declared the people enslaved in the rebelling states free?', a: 'The Emancipation Proclamation',
        relates: 'It was issued on January 1, 1863, in the middle of the war.' },
      { id: 'w-lincoln', q: 'Who was President throughout the Civil War?', a: 'Abraham Lincoln',
        relates: 'He was elected in 1860 and was President for the whole war, from 1861 to 1865.' }
    ] },

  { id: 'chk-hist-w-secession', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-secession' } },
  { id: 'chk-hist-w-cause', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-cause' } },
  { id: 'chk-hist-w-emancip', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-emancip' } },
  { id: 'chk-hist-w-lincoln', kind: 'check', after: 'facts-hist-war', ask: { type: 'fact', row: 'w-lincoln' } }
]);
