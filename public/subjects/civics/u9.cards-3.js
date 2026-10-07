// Civics, Unit Nine, part three: the one group of facts about how the country grew from 1800 to 1860, and what it cost the Native
// nations. A fact unit (lesson standard A12), a quick lesson (section 19): a concept card, a facts card and a check per fact.
// A row's `q` and `a` carry no tokens: the app prints them as they are.

FC.cards('civics', 'u9', [

  /* ---------- group five: how the country grew, and what it cost ---------- */
  { id: 'con-hist-growth', kind: 'concept',
    h: 'How the country grew, and what it cost',
    link: 'How the country grew in the sixty years after 1800.',
    case: 'c9-panels',
    plain: [
      'Three of the panels are three events, and each one involves another country. The huge new area is the Louisiana land: in 1803 the country bought it from France, which roughly doubled its size. It was a purchase, not a war. The flag over the fort, with the song, is the War of 1812, fought against Britain. The Star-Spangled Banner, the national anthem, was written during it. The south-west corner is the war with Mexico, from 1846 to 1848, after which the country gained California and the Southwest.',
      'The fourth panel is the cost. All of this land was already home to Native nations. They were removed from it by signed agreements, by purchase and by force. In the 1830s came the forced marches now called the Trail of Tears.'
    ] },

  { id: 'facts-hist-growth', kind: 'facts',
    h: 'Three events, three countries',
    link: 'The country in each event.',
    concept: 'con-hist-growth',
    rows: [
      { id: 'ctry-france', q: 'From which country did the United States buy the Louisiana land in 1803?', a: 'France',
        relates: 'A purchase, not a war. The land roughly doubled the size of the country.' },
      { id: 'ctry-britain', q: 'Which country did the United States fight in the War of 1812?', a: 'Britain',
        relates: 'The national anthem was written during this war.' },
      { id: 'ctry-mexico', q: 'Which country did the United States fight in the war of 1846 to 1848?', a: 'Mexico',
        relates: 'The country gained California and the Southwest.' }
    ] },

  { id: 'chk-hist-ctry-france', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-france' } },
  { id: 'chk-hist-ctry-britain', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-britain' } },
  { id: 'chk-hist-ctry-mexico', kind: 'check', after: 'facts-hist-growth', ask: { type: 'fact', row: 'ctry-mexico' } }
]);
