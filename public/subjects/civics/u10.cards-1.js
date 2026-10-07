// Civics, Unit Ten, part one: the opening card, then the first four groups of facts (the great arrivals, a line of events,
// the Depression, the Cold War). This is a FACT unit (lesson standard A12): each group is a concept card (a story, then the idea
// in plain words), a facts card (one row per fact), and one check per fact. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u10', [

  { id: 'orient-since', kind: 'orient',
    h: 'Facts to hold: the history since 1877, and the symbols of the country',
    canDo: 'When someone says “my great-grandfather came through Ellis Island” or “she grew up in the Depression”, you can say when that was and what it was. These are also the facts the history part of the citizenship interview asks for, so you will be able to answer them from memory.',
    everyday: 'You already hear this history at home. ‘Everything changed after September 11.’ Each saying hangs on one event with a year. Know the year and the event, and you can place any story that mentions it.' },

  /* ---------- the great arrivals ---------- */
  { id: 'con-wave', kind: 'concept',
    h: 'The great arrivals, in three years',
    link: 'Three events from the years when the country filled with factories and new arrivals.',
    case: 'c10-wave',
    plain: [
      'From 1877 to 1914, railways crossed the country, factories and cities grew, and millions of immigrants, mostly from Europe, came to work in them. Three events from those years each have a year to learn.',
      '1882: Congress passed the Chinese Exclusion Act. It was the first major law that kept a group of people out of the country because of where they came from.',
      '1886: the Statue of Liberty, a gift from France, was dedicated in New York Harbor. It became a symbol of welcome.',
      '1892: Ellis Island opened in the same harbor. It was the federal station where arrivals were checked, and about twelve million people passed through it.',
      'So for Noor, the statue came first, six years before Ellis Island. This course holds only these three dates from 1877 to 1900.'
    ] },

  { id: 'facts-wave', kind: 'facts',
    h: 'Three dates of the great arrivals',
    link: 'The three years from Noor’s questions.',
    concept: 'con-wave',
    rows: [
      { id: 'wv-exclusion', q: 'In what year did Congress pass the Chinese Exclusion Act?', a: '1882',
        relates: 'It was the first major law that kept a group of people out because of where they came from.' },
      { id: 'wv-statue', q: 'In what year was the Statue of Liberty dedicated in New York Harbor?', a: '1886',
        relates: 'A gift from France, it became a symbol of welcome. It came six years before Ellis Island opened.' },
      { id: 'wv-ellis', q: 'In what year did Ellis Island open as the federal immigration station?', a: '1892',
        relates: 'Noor’s great-grandfather was checked there in 1905, thirteen years after it opened.' }
    ] },

  { id: 'chk-wv-exclusion', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-exclusion' } },
  { id: 'chk-wv-statue', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-statue' } },
  { id: 'chk-wv-ellis', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-ellis' } },

  { id: 'look-wave', kind: 'lookalike', ledger: 'wv-statue~wv-ellis',
    h: 'Two places in one harbor',
    link: 'Two places in the same harbor, six years apart, get swapped.',
    facts: ['wv-statue', 'wv-ellis'],
    instruction: 'Compare what each date is for: a gift, or a station where arrivals were checked.',
    prompt: { kind: 'which', answer: 'wv-ellis' },
    difference: [
      'Fact A is the Statue of Liberty: {f:wv-statue}. A copper statue, given by France.',
      'Fact B is Ellis Island: {f:wv-ellis}. The federal station where arrivals were checked. The statue came first.'
    ] },

  /* ---------- a line of events ---------- */
  { id: 'con-line', kind: 'concept',
    h: 'A line of events, from 1917 to 2001',
    link: 'Put a year on each event after 1914, and the order comes with it.',
    case: 'c10-line',
    plain: [
      'Give each event a year and the order comes with the years. These are the five years for Kofi’s strip.',
      '1917: the United States entered the First World War.',
      '1929: the Great Depression began.',
      '1941: Japan attacked Pearl Harbor on December 7, and the United States entered the Second World War. Its part in that war lasted until 1945.',
      '2001: the terrorist attacks of September 11.',
      'The Cold War, about 1947 to 1991, has its own group a little later.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'Five years on one line',
    link: 'The five years on Kofi’s strip, in order.',
    concept: 'con-line',
    rows: [
      { id: 'tl-ww1', q: 'In what year did the United States enter the First World War?', a: '1917',
        relates: 'The first of the five years on Kofi’s strip.' },
      { id: 'tl-depression', q: 'In what year did the Great Depression begin?', a: '1929',
        relates: 'Banks failed, and about one worker in four lost their job.' },
      { id: 'tl-pearl', q: 'In what year did Japan attack Pearl Harbor, bringing the United States into the Second World War?', a: '1941',
        relates: 'The attack came on December 7, 1941.' },
      { id: 'tl-ww2end', q: 'The United States’ part in the Second World War ran from 1941 to which year?', a: '1945',
        relates: 'Four years of war. The Cold War began about two years later.' },
      { id: 'tl-attack', q: 'In what year were the terrorist attacks of September 11 on New York and Washington?', a: '2001',
        relates: 'The most recent event in this course.' }
    ] },

  { id: 'chk-tl-ww1', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-ww1' } },
  { id: 'chk-tl-depression', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-depression' } },
  { id: 'chk-tl-pearl', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-pearl' } },
  { id: 'chk-tl-ww2end', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-ww2end' } },
  { id: 'chk-tl-attack', kind: 'check', after: 'facts-line', ask: { type: 'fact', row: 'tl-attack' } },

  /* ---------- hard times and the answer to them ---------- */
  { id: 'con-hard', kind: 'concept',
    h: 'Hard times, and what was done about them',
    link: 'What the Depression was, and what the President did about it.',
    case: 'c10-hard',
    plain: [
      'In 1929 the Great Depression began. Banks failed, and about one worker in four lost their job.',
      'The President’s answer was a set of new programs called the New Deal, led by Franklin D. Roosevelt. Social Security, the program on Ines’s grandmother’s card, is the one to remember.',
      'New programs needed new federal offices to run them, and an office of that kind is called an {t:agency}. What these offices did is {o:execute}: putting laws into practice, at a scale the founders never saw.'
    ] },

  { id: 'facts-hard', kind: 'facts',
    h: 'The Depression and the New Deal',
    link: 'The trouble, the answer, the President and the example.',
    concept: 'con-hard',
    rows: [
      { id: 'hd-depression', q: 'What is the long stretch of failed banks and lost jobs in the 1930s called?', a: 'The Great Depression',
        relates: 'This is the trouble. Everything else here is what was done about it.' },
      { id: 'hd-newdeal', q: 'What was the President’s set of new programs against the hard times of the 1930s called?', a: 'The New Deal',
        relates: 'This is the answer to the trouble, not the trouble itself. The federal government took a much bigger role in daily life.' },
      { id: 'hd-roosevelt', q: 'Which President started the programs that answered the hard times of the 1930s?', a: 'Franklin D. Roosevelt',
        relates: 'The New Deal was his answer to the Depression.' },
      { id: 'hd-security', q: 'Which of the new programs of the 1930s is the one to remember?', a: 'Social Security',
        relates: 'It is the program named on the card Ines found.' }
    ] },

  { id: 'chk-hd-depression', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-depression' } },
  { id: 'chk-hd-newdeal', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-newdeal' } },
  { id: 'chk-hd-roosevelt', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-roosevelt' } },
  { id: 'chk-hd-security', kind: 'check', after: 'facts-hard', ask: { type: 'fact', row: 'hd-security' } },

  /* ---------- the Cold War ---------- */
  { id: 'con-cold', kind: 'concept',
    h: 'A long standoff, and the wars in it',
    link: 'The Cold War: what it was, who was on the other side, and the wars in it.',
    case: 'c10-cold',
    plain: [
      'The man on the bench was right: Korea and Vietnam were part of one long standoff, a contest in which neither side gives way. It was between the United States and the Soviet Union, and it lasted from about 1947 to 1991.',
      'It is called the Cold War, and it included wars in Korea and Vietnam.'
    ] },

  { id: 'facts-cold', kind: 'facts',
    h: 'The Cold War in three names',
    link: 'The name, the other side and the wars.',
    concept: 'con-cold',
    rows: [
      { id: 'cw-name', q: 'What is the long standoff of about 1947 to 1991 called?', a: 'The Cold War',
        relates: 'It began after the Second World War and lasted about forty-four years.' },
      { id: 'cw-rival', q: 'The standoff was between the United States and which other country?', a: 'The Soviet Union',
        relates: 'The United States stood on one side and the Soviet Union on the other.' },
      { id: 'cw-wars', q: 'Which two places had wars that were part of the standoff?', a: 'Korea and Vietnam',
        relates: 'These are the two wars this course names as part of the Cold War.' }
    ] },

  { id: 'chk-cw-name', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-name' } },
  { id: 'chk-cw-rival', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-rival' } },
  { id: 'chk-cw-wars', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-wars' } }
]);
