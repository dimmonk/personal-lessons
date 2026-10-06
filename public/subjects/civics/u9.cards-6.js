// Civics, Unit Nine, part six: the group of facts about when Reconstruction ended and what followed, and the close. A fact unit
// closes with a recap that the app builds from every facts card (lesson standard A12); this subject is not an action subject, so
// there is no plan card (V25). There is no transfer and no worked route in a fact unit, and the unit teaches no question of the key.

FC.cards('civics', 'u9', [

  /* ---------- group nine: when Reconstruction ended ---------- */
  { id: 'con-hist-after', kind: 'concept',
    h: 'When the troops left: a promise that went unkept',
    link: 'Reconstruction ended in 1877. This last group is what came next.',
    case: 'c9-courthouse',
    plain: [
      'In 1877 federal troops left the South and Reconstruction ended. Southern states then passed segregation laws, which kept Black and white people apart in schools, transport and public places. They also used barriers such as poll taxes, which are fees to vote, to keep Black citizens from voting, for most of the next century.',
      'The man in the story meets both: the separate school is segregation, and the fee is a poll tax. The three amendments stayed in the Constitution, but they were not made real for most Black Southerners until the 1960s.'
    ] },

  { id: 'facts-hist-after', kind: 'facts',
    h: 'The end of Reconstruction, and what followed',
    link: 'The year the troops left, the laws that followed, and when the amendments were finally made real.',
    concept: 'con-hist-after',
    rows: [
      { id: 'ry-end', q: 'In which year did federal troops leave the South, and Reconstruction end?', a: '1877',
        relates: 'Reconstruction ran from 1865 to 1877. When the troops left, the effort to protect freed people’s rights faded.' },
      { id: 'aft-seg', q: 'What did Southern states pass after 1877 that kept Black and white people apart in schools, transport and public places?', a: 'Segregation laws',
        relates: 'The separate school in the story is one example.' },
      { id: 'aft-1960s', q: 'In which decade were the three amendments finally made real for most Black Southerners?', a: 'The 1960s',
        relates: 'The amendments stayed in the Constitution after 1877, and were not made real for most Black Southerners until the 1960s.' }
    ] },

  { id: 'chk-hist-ry-end', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'ry-end' } },
  { id: 'chk-hist-aft-seg', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'aft-seg' } },
  { id: 'chk-hist-aft-1960s', kind: 'check', after: 'facts-hist-after', ask: { type: 'fact', row: 'aft-1960s' } },

  /* ---------- the close ---------- */
  { id: 'recap-hist', kind: 'recap',
    h: 'What to carry away',
    link: 'Every fact in the unit, in its group, and what to carry.',
    carry: [
      'People came to the colonies for religious freedom, political liberty and economic opportunity, or to get away from persecution. Indentured servants worked for years to pay for a passage, enslaved people were brought by force, many from 1619, and Native nations were already there.',
      'The quarrel with Britain was about consent. Parliament taxed people who had elected nobody to it: “no taxation without representation”.',
      'The Declaration of Independence is 1776, the Constitution was written in 1787 and took effect in 1789, with Washington the first President.',
      'The country grew by a purchase from France in 1803 and by wars with Britain, from 1812, and with Mexico, from 1846 to 1848. Native nations were removed from the land by agreements, purchase and force, including the Trail of Tears.',
      'Each new state raised the question of slavery, and the Dred Scott decision of 1857 ruled that Black people could not be citizens. Eleven Southern states seceded after Lincoln’s election, naming slavery as the cause. The war ran from 1861 to 1865.',
      'Freed, citizens, vote: the Thirteenth Amendment (1865), the Fourteenth (1868, the one behind {o:protected}) and the Fifteenth (1870). Reconstruction ended in 1877. Segregation laws and poll taxes followed, and the amendments were not made real for most Black Southerners until the 1960s.'
    ] }
]);
