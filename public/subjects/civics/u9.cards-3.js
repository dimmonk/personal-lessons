// Civics, Unit Nine, part three: the one group of facts about how the country grew from 1800 to 1860, and what it cost the Native
// nations. A fact unit (lesson standard A12), a quick lesson (section 19): a concept card, a facts card and a check per fact.
// A row's `q` and `a` carry no tokens: the app prints them as they are.

FC.cards('civics', 'u9', [

  /* ---------- group five: how the country grew, and what it cost ---------- */
  { id: 'con-hist-growth', kind: 'concept',
    h: 'How the country grew, and what it cost',
    link: 'The founding gave the country a government. This group is how it grew in the sixty years after 1800.',
    case: 'c9-panels',
    plain: [
      'Three of the panels are three events, and each has a country in it. In 1803 the country bought the Louisiana land from France, which roughly doubled its size: a purchase, and not a war. The War of 1812 was fought against Britain, and the national anthem, The Star-Spangled Banner, was written during it. From 1846 to 1848 the country fought a war with Mexico, and gained California and the Southwest.',
      'The fourth panel is the cost. All of this land was already home to Native nations, who were removed from it by signed agreements, by purchase and by force. In the 1830s came the forced marches that are now called the Trail of Tears.'
    ] },

  { id: 'facts-hist-growth', kind: 'facts',
    h: 'Three events, three countries',
    link: 'The country in each event.',
    concept: 'con-hist-growth',
    rows: [
      { id: 'ctry-france', q: 'From which country did the United States buy the Louisiana land in 1803?', a: 'France',
        relates: 'A purchase and not a war. The land roughly doubled the size of the country.' },
      { id: 'ctry-britain', q: 'Which country did the United States fight in the War of 1812?', a: 'Britain',
        relates: 'The war was fought against Britain, and the national anthem was written during it.' },
      { id: 'ctry-mexico', q: 'Which country did the United States fight in the war of 1846 to 1848?', a: 'Mexico',
        relates: 'At the end of the war the country gained California and the Southwest.' }
    ] },

  { id: 'chk-hist-ctry-france', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-france' } },
  { id: 'chk-hist-ctry-britain', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-britain' } },
  { id: 'chk-hist-ctry-mexico', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-mexico' } }
]);
