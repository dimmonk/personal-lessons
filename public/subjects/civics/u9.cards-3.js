// Civics, Unit Nine, part three: the groups of facts about how the country grew, from 1800 to 1860. The three countries in the
// three events (every answer is a country), what the growth left behind and what it cost the Native nations (every answer is a
// thing, in a noun phrase), and the five years (every answer is a year). A fact unit (lesson standard A12): a concept card, a
// facts card and a check per fact, with a look-alike card where two facts are swapped. A row's `q` and `a` carry no tokens.
// The material of this subject holds the year 1850 and not what the compromise of that year decided, so the unit skips the terms.

FC.cards('civics', 'u9', [

  /* ---------- group six: three events and the country in each ---------- */
  { id: 'con-hist-countries', kind: 'concept',
    h: 'Three events, and the country in each',
    link: 'The founding gave the country a government. The next three groups are about how it grew in the sixty years after 1800, starting with three events and the country in each.',
    case: 'c9-cards',
    plain: [
      'Jonas knows the events. He stops at the blanks because each event has a country in it, and the three countries are easy to swap. Here are the three events, in order.',
      'In 1803 the country bought the Louisiana land from France. That was a purchase, and not a war.',
      'The War of 1812 was fought against Britain. It is the same Britain that the colonists had quarrelled with before independence.',
      'From 1846 to 1848 the country fought a war with Mexico, and at the end of it the country gained California and the Southwest.',
      'So there is one purchase and two wars. The three facts below are the three countries.'
    ] },

  { id: 'facts-hist-countries', kind: 'facts',
    h: 'Three countries, three events',
    link: 'These are the three countries, each with how it fits the idea of the country growing by a purchase and by two wars.',
    concept: 'con-hist-countries',
    rows: [
      { id: 'ctry-france', q: 'From which country did the United States buy the Louisiana land in 1803?', a: 'France',
        relates: 'It was a purchase and not a war. The land roughly doubled the size of the country.' },
      { id: 'ctry-britain', q: 'Which country did the United States fight in the War of 1812?', a: 'Britain',
        relates: 'The war was fought against Britain, and the national anthem was written during it.' },
      { id: 'ctry-mexico', q: 'Which country did the United States fight in the war of 1846 to 1848?', a: 'Mexico',
        relates: 'At the end of the war the country gained California and the Southwest.' }
    ] },

  { id: 'chk-hist-ctry-france', kind: 'check', after: 'facts-hist-countries', ask: { type: 'fact', row: 'ctry-france' } },
  { id: 'chk-hist-ctry-britain', kind: 'check', after: 'facts-hist-countries', ask: { type: 'fact', row: 'ctry-britain' } },
  { id: 'chk-hist-ctry-mexico', kind: 'check', after: 'facts-hist-countries', ask: { type: 'fact', row: 'ctry-mexico' } },

  /* ---------- group seven: what the growth left, and what it cost ---------- */
  { id: 'con-hist-growth', kind: 'concept',
    h: 'What the growth left behind, and what it cost',
    link: 'The three countries say what happened. This group says what each event left behind, and what the growth cost the people who already lived on the land.',
    case: 'c9-panels',
    plain: [
      'The five panels on the museum wall are five things that the sixty years of growth produced. Three of them are what the three events left behind. The other two are about what the growth meant for the Native nations who lived on the land.',
      'The Louisiana Purchase made the country roughly twice the size that it had been. During the War of 1812, the national anthem, The Star-Spangled Banner, was written. From the war with Mexico, the country gained California and the Southwest.',
      'All of this land was already inhabited by Native nations, and they were removed from it by signed agreements, by purchase and by force. In the 1830s came the forced marches that are now called the Trail of Tears. The panel with the long line of people walking away from the river is about them, and the signed paper and the stack of money are two of the three means.',
      'The longer history is well documented, and this unit gives only the short form that the interview wants. The short form is that people who lived on the land were made to leave it, and that force was one of the means.',
      'The five facts below are the five panels: what the purchase did, what was written in 1812, what the war with Mexico gained, how Native nations were removed, and what the forced marches are called.'
    ] },

  { id: 'facts-hist-growth', kind: 'facts',
    h: 'Five things the growth left, and cost',
    link: 'These are the five facts, each with how it fits the idea of what the growth left behind and what it cost.',
    concept: 'con-hist-growth',
    rows: [
      { id: 'grow-size', q: 'How big was the country after the Louisiana Purchase, compared with before it?', a: 'Roughly twice the size',
        relates: 'The purchase from France roughly doubled the size of the country. It is what the first panel shows.' },
      { id: 'grow-anthem', q: 'What was written during the War of 1812 that is now the national anthem?', a: 'The Star-Spangled Banner',
        relates: 'The anthem was written during the war against Britain. It is what the panel with the flag over the fort shows.' },
      { id: 'grow-calif', q: 'What did the country gain from the war with Mexico?', a: 'California and the Southwest',
        relates: 'The war ended in 1848, and the country gained California and the Southwest. It is what the panel with the south-west corner shaded in shows.' },
      { id: 'grow-means', q: 'By what means were Native nations removed from the land the country grew into?', a: 'Agreements, purchase and force',
        relates: 'The land was inhabited by Native nations, who were removed from it by signed agreements, by purchase and by force. The word to hold is force: not every removal was agreed to.' },
      { id: 'grow-trail', q: 'What are the forced marches of the 1830s now called?', a: 'The Trail of Tears',
        relates: 'They are an example of removal by force. They took place in the 1830s, and the name is the one that people use for them now.' }
    ] },

  { id: 'chk-hist-grow-size', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'grow-size' } },
  { id: 'chk-hist-grow-anthem', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'grow-anthem' } },
  { id: 'chk-hist-grow-calif', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'grow-calif' } },
  { id: 'chk-hist-grow-means', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'grow-means' } },
  { id: 'chk-hist-grow-trail', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'grow-trail' } },

  /* ---------- group eight: the five years ---------- */
  { id: 'con-hist-years', kind: 'concept',
    h: 'Five years of the growth, in order',
    link: 'The first two groups of the sixty years are about countries and consequences. This group is the years, which are what a quiz or an interview asks for.',
    case: 'c9-quiz',
    plain: [
      'The contestant knew the story and lost on the years. Here are the five years, in order, each with what it was.',
      '1803 is the Louisiana Purchase. 1820 is the first compromise over slavery, the deal that admitted Missouri as a slave state and Maine as a free one. 1848 is the year the war with Mexico ended. 1850 is the year of a second compromise over slavery. 1857 is the year of the Dred Scott decision, a ruling of the Supreme Court that Black people could not be citizens.',
      'The two compromises are the pair to keep apart: 1820 and 1850, thirty years apart, both deals made in Congress over whether slavery would be allowed in new states. This unit holds the year of the second one and not what it decided, because this subject’s material names the year and does not give the terms.',
      'The five facts below are the five years.'
    ] },

  { id: 'facts-hist-years', kind: 'facts',
    h: 'Five years of the growth',
    link: 'These are the five years, each with how it fits the sixty years of growth and the question of slavery.',
    concept: 'con-hist-years',
    rows: [
      { id: 'yg-purchase', q: 'In which year did the country buy the Louisiana land from France?', a: '1803',
        relates: 'It is the first year of the five, and the year that the country roughly doubled in size.' },
      { id: 'yg-comp1', q: 'In which year did Congress admit Missouri as a slave state and Maine as a free one?', a: '1820',
        relates: 'This is the first of the two compromises over slavery. It dealt with two states at once.' },
      { id: 'yg-mexico', q: 'In which year did the war with Mexico end?', a: '1848',
        relates: 'The war ran from 1846 to 1848, and at its end the country gained California and the Southwest.' },
      { id: 'yg-comp2', q: 'In which year, thirty years after the first, did Congress make a second compromise over slavery?', a: '1850',
        relates: 'This is the second compromise. This unit holds its year and not its terms, because the material for this subject does not say what it decided.' },
      { id: 'yg-dred', q: 'In which year did the Supreme Court decide Dred Scott?', a: '1857',
        relates: 'It is the last of the five years, four years before the Civil War began. In this decision the Court ruled that Black people could not be citizens.' }
    ] },

  { id: 'chk-hist-yg-purchase', kind: 'check', after: 'facts-hist-years', ask: { type: 'fact', row: 'yg-purchase' } },
  { id: 'chk-hist-yg-comp1', kind: 'check', after: 'facts-hist-years', ask: { type: 'fact', row: 'yg-comp1' } },
  { id: 'chk-hist-yg-mexico', kind: 'check', after: 'facts-hist-years', ask: { type: 'fact', row: 'yg-mexico' } },
  { id: 'chk-hist-yg-comp2', kind: 'check', after: 'facts-hist-years', ask: { type: 'fact', row: 'yg-comp2' } },
  { id: 'chk-hist-yg-dred', kind: 'check', after: 'facts-hist-years', ask: { type: 'fact', row: 'yg-dred' } },

  { id: 'look-hist-years', kind: 'lookalike', ledger: 'yg-comp1~yg-comp2',
    h: 'The first compromise, and the second',
    link: 'Two of the five years belong to the two compromises over slavery, thirty years apart. They get swapped, so they go side by side.',
    facts: ['yg-comp1', 'yg-comp2'],
    instruction: 'Compare which compromise each year belongs to: the first, which admitted Missouri and Maine, or the second, thirty years later.',
    prompt: { kind: 'which', answer: 'yg-comp2' },
    difference: [
      'Fact A is the year of the first compromise: {f:yg-comp1}. It admitted Missouri as a slave state and Maine as a free one.',
      'Fact B is the year of the second compromise: {f:yg-comp2}. It came thirty years after the first. This unit holds its year and not its terms.',
      'Both were deals made in Congress to settle the question of slavery in new states, and each one only bought time, so the question came back. Thirty years separate them.'
    ] }
]);
