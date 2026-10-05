// Civics, Unit Nine, part six: the groups of facts about the years of Reconstruction (every answer is a year) and about what the
// Southern states did when it ended (every answer is a name of a thing), and the close. A fact unit closes with a recap that the app
// builds from every facts card (lesson standard A12); this subject is not an action subject, so there is no plan card (V25).
// There is no transfer and no worked route in a fact unit, and the unit teaches no question of the key.

FC.cards('civics', 'u9', [

  /* ---------- group fourteen: the years of Reconstruction ---------- */
  { id: 'con-hist-ryears', kind: 'concept',
    h: 'The years of Reconstruction',
    link: 'The three amendments are held by what each one did. This group holds them by their years, with the year that Reconstruction ended.',
    case: 'c9-tomas',
    plain: [
      'Tomas knew the order and not the years. The years go with the order: 1865, 1868 and 1870, each a few years after the one before.',
      'The Thirteenth Amendment is from 1865, the same year that the war ended. The Fourteenth is from 1868, and the Fifteenth from 1870. Reconstruction ended in 1877, when federal troops left the South.',
      'Notice that 1865 is in two stories: the war ended in it, and the Thirteenth Amendment was adopted in it. The two happened in the same year.',
      'The four facts below are the three amendment years and the year that Reconstruction ended.'
    ] },

  { id: 'facts-hist-ryears', kind: 'facts',
    h: 'Four years of Reconstruction',
    link: 'These are the four years, each with how it fits the order of freed, citizens, vote and then the end of Reconstruction.',
    concept: 'con-hist-ryears',
    rows: [
      { id: 'ry-13', q: 'In which year was the Thirteenth Amendment adopted?', a: '1865',
        relates: 'It was adopted in the same year that the war ended. It abolished slavery.' },
      { id: 'ry-14', q: 'In which year was the Fourteenth Amendment adopted?', a: '1868',
        relates: 'It came three years after the Thirteenth. It made everyone born here a citizen.' },
      { id: 'ry-15', q: 'In which year was the Fifteenth Amendment adopted?', a: '1870',
        relates: 'It came two years after the Fourteenth. It said that the vote could not be denied because of race.' },
      { id: 'ry-end', q: 'In which year did federal troops leave the South, and Reconstruction end?', a: '1877',
        relates: 'Reconstruction ran from 1865 to 1877. When the troops left, the effort to protect freed people’s rights faded.' }
    ] },

  { id: 'chk-hist-ry-13', kind: 'check', after: 'facts-hist-ryears', ask: { type: 'fact', row: 'ry-13' } },
  { id: 'chk-hist-ry-14', kind: 'check', after: 'facts-hist-ryears', ask: { type: 'fact', row: 'ry-14' } },
  { id: 'chk-hist-ry-15', kind: 'check', after: 'facts-hist-ryears', ask: { type: 'fact', row: 'ry-15' } },
  { id: 'chk-hist-ry-end', kind: 'check', after: 'facts-hist-ryears', ask: { type: 'fact', row: 'ry-end' } },

  /* ---------- group fifteen: when Reconstruction ended ---------- */
  { id: 'con-hist-after', kind: 'concept',
    h: 'When the troops left: a promise that went unkept',
    link: 'Reconstruction ended in 1877. This last group is what the Southern states did next, and how long the promise of the amendments went unkept.',
    case: 'c9-courthouse',
    plain: [
      'The man in the story has a right written in the Constitution, and he is asked to pay in order to use it. That is the situation that these last three facts describe.',
      'In 1877 federal troops left the South and Reconstruction ended. Southern states then passed segregation laws, which kept Black and white people apart in schools, transport and public places. They also used barriers such as poll taxes, which are fees to vote, to keep Black citizens from voting, for most of the next century.',
      'The three amendments stayed in the Constitution. They were not made real for most Black Southerners until the 1960s.',
      'The two barriers in the story are the two to keep apart. The separate school is a segregation law, and the fee to vote is a poll tax. Both were used against the same people, in different parts of life.',
      'The three facts below are the segregation laws, the poll tax, and the decade when the amendments began to be made real.'
    ] },

  { id: 'facts-hist-after', kind: 'facts',
    h: 'Two barriers, and when they gave way',
    link: 'These are the three facts, each with how it fits the idea of a promise in the Constitution that went unkept.',
    concept: 'con-hist-after',
    rows: [
      { id: 'aft-seg', q: 'What did Southern states pass after 1877 that kept Black and white people apart in schools, transport and public places?', a: 'Segregation laws',
        relates: 'They kept Black and white people apart in schools, transport and public places. The separate school in the story is one example.' },
      { id: 'aft-poll', q: 'What were fees to vote called, which were used as a barrier to keep Black citizens from voting?', a: 'Poll taxes',
        relates: 'A poll tax is a fee to vote. It was one of the barriers used, for most of the next century, to keep Black citizens from voting. The fee in the story is one.' },
      { id: 'aft-1960s', q: 'In which decade were the three amendments finally made real for most Black Southerners?', a: 'The 1960s',
        relates: 'The amendments stayed in the Constitution after 1877, and were not made real for most Black Southerners until the 1960s.' }
    ] },

  { id: 'chk-hist-aft-seg', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'aft-seg' } },
  { id: 'chk-hist-aft-poll', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'aft-poll' } },
  { id: 'chk-hist-aft-1960s', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'aft-1960s' } },

  { id: 'look-hist-after', kind: 'lookalike', ledger: 'aft-seg~aft-poll',
    h: 'Keeping people apart, and charging a fee to vote',
    link: 'Two of the three facts are barriers used against the same people, so they get swapped, and they go side by side.',
    facts: ['aft-seg', 'aft-poll'],
    instruction: 'Compare what each one does: it keeps people apart in daily life, or it puts a price on voting.',
    prompt: { kind: 'which', answer: 'aft-poll' },
    difference: [
      'Fact A is about keeping people apart: {f:aft-seg}. It separated Black and white people in schools, transport and public places.',
      'Fact B is about voting: {f:aft-poll}. It was a fee that a person had to pay in order to vote.',
      'Both were used against Black citizens after Reconstruction. One shaped daily life, and the other shaped who could vote.'
    ] },

  /* ---------- the close ---------- */
  { id: 'recap-hist', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now met every fact in the unit, in its group. This card puts them together, and then adds what to carry.',
    carry: [
      'The colonies began with people who came for four hopes, and with others who did not come freely: indentured servants worked for years to pay off a passage, and enslaved people were brought by force, many from 1619. Native nations were already there.',
      'The quarrel with Britain was about consent. Parliament taxed people who had elected nobody to it, and the colonists’ short form was “no taxation without representation”.',
      'The founding in order: 1773, the Boston Tea Party; 1776, the Declaration; 1783, the end of the war; 1787, the Constitution written; 1789, in effect, with Washington the first President; 1791, the Bill of Rights; 1800, the capital in Washington, D.C.',
      'The country grew by a purchase from France in 1803 and by wars with Britain, from 1812, and with Mexico, from 1846 to 1848. Native nations were removed from the land by agreements, purchase and force, including the marches of the 1830s now called the Trail of Tears.',
      'Each new state raised the question of slavery. The compromises of 1820 and 1850 bought time. The Dred Scott decision of 1857 ruled that Black people could not be citizens and that Congress had no power to ban slavery in the territories.',
      'Eleven Southern states seceded after Lincoln’s election in 1860, and their declarations name slavery as the cause. The war ran from 1861 to 1865, and more than 600,000 people were killed.',
      'Freed, citizens, vote: the Thirteenth Amendment (1865), the Fourteenth (1868) and the Fifteenth (1870). The Fourteenth is the one behind {o:protected}, and it is where birthright citizenship comes from.',
      'Reconstruction ended in 1877, when federal troops left the South. Segregation laws and poll taxes followed, and the amendments were not made real for most Black Southerners until the 1960s.',
      'This unit holds the history to 1877 in the short form that the interview wants. It does not give the terms of the compromise of 1850, and it goes no further than what followed 1877.'
    ] }
]);
