// Civics, Unit Ten, part one: the opening card, then the first four groups of facts (the great arrivals, a line of landmarks,
// the Depression, the Cold War). This is a FACT unit (lesson standard A12): each group is a concept card (a case, then the idea
// in plain words), a facts card (one row per fact), and one check per fact. Key wording is never typed here: tokens fill it in.

FC.cards('civics', 'u10', [

  { id: 'orient-since', kind: 'orient',
    h: 'Facts to hold: the history since 1877, and the symbols of the country',
    canDo: 'By the end you can say, without looking it up, what happened from the years of the great arrivals to September 11, 2001, when and how the right to vote was widened, and the plain facts about the flag and the names that stand for the country. The history part of the citizenship interview asks for exactly these.',
    everyday: 'You already hear this history in the way people talk about their own families. ‘My great-grandfather came through Ellis Island.’ ‘She grew up in the Depression.’ ‘Everything changed after September 11.’ Each is a landmark that a long stretch of years hangs on. If you know when it was and what it was, you can place any story that mentions it.' },

  /* ---------- the great arrivals ---------- */
  { id: 'con-wave', kind: 'concept',
    h: 'The great arrivals, in three years',
    link: 'Three landmarks of the years when the country filled with factories and with new arrivals.',
    case: 'c10-wave',
    plain: [
      'From 1877 to 1914 railways crossed the continent, factories and cities grew, and millions of immigrants, mostly from Europe, came to work in them. Three landmarks of those years each have a year.',
      'The Chinese Exclusion Act, passed by Congress in 1882, was the first major law to bar a group of people from coming in because of where they came from. The Statue of Liberty, a gift from France, was dedicated in New York Harbor in 1886 and became a symbol of welcome. Ellis Island, in the same harbor, opened in 1892 as the federal station where arrivals were examined, and about twelve million people passed through it.',
      'These three years are almost all that this course holds from 1877 to 1900.'
    ] },

  { id: 'facts-wave', kind: 'facts',
    h: 'Three dates of the great arrivals',
    link: 'The three years from Noor’s questions.',
    concept: 'con-wave',
    rows: [
      { id: 'wv-exclusion', q: 'In what year did Congress pass the Chinese Exclusion Act?', a: '1882',
        relates: 'It was the first major law to bar a group of people from coming in because of where they came from.' },
      { id: 'wv-statue', q: 'In what year was the Statue of Liberty dedicated in New York Harbor?', a: '1886',
        relates: 'A gift from France, it became a symbol of welcome. It came six years before Ellis Island opened.' },
      { id: 'wv-ellis', q: 'In what year did Ellis Island open as the federal immigration station?', a: '1892',
        relates: 'Noor’s great-grandfather was examined there in 1905, thirteen years after it opened.' }
    ] },

  { id: 'chk-wv-exclusion', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-exclusion' } },
  { id: 'chk-wv-statue', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-statue' } },
  { id: 'chk-wv-ellis', kind: 'check', after: 'facts-wave', ask: { type: 'fact', row: 'wv-ellis' } },

  { id: 'look-wave', kind: 'lookalike', ledger: 'wv-statue~wv-ellis',
    h: 'Two landmarks in one harbor',
    link: 'Two landmarks in the same harbor, six years apart, get swapped.',
    facts: ['wv-statue', 'wv-ellis'],
    instruction: 'Compare what each date is for: a gift, or a station where arrivals were examined.',
    prompt: { kind: 'which', answer: 'wv-ellis' },
    difference: [
      'Fact A is the Statue of Liberty: {f:wv-statue}. A copper statue, given by France.',
      'Fact B is Ellis Island: {f:wv-ellis}. The federal station where arrivals were examined. The statue came first.'
    ] },

  /* ---------- a line of landmarks ---------- */
  { id: 'con-line', kind: 'concept',
    h: 'A line of landmarks, from 1917 to 2001',
    link: 'Give each landmark of the years after 1914 a year, and the order comes with it.',
    case: 'c10-line',
    plain: [
      'A long history is easier to hold as a line: with a year for each landmark, the order comes with the years.',
      'The United States entered the First World War in 1917. The Great Depression began in 1929. Japan attacked Pearl Harbor on December 7, 1941, and the United States entered the Second World War; its part in that war ran from 1941 to 1945. The terrorist attacks of September 11 came in 2001. The Cold War, about 1947 to 1991, has a group of its own.'
    ] },

  { id: 'facts-line', kind: 'facts',
    h: 'Five years on one line',
    link: 'The five years on Kofi’s strip, in order.',
    concept: 'con-line',
    rows: [
      { id: 'tl-ww1', q: 'In what year did the United States enter the First World War?', a: '1917',
        relates: 'The earliest landmark on the strip.' },
      { id: 'tl-depression', q: 'In what year did the Great Depression begin?', a: '1929',
        relates: 'Banks failed, and about a quarter of workers lost their jobs.' },
      { id: 'tl-pearl', q: 'In what year did Japan attack Pearl Harbor, bringing the United States into the Second World War?', a: '1941',
        relates: 'The attack was on December 7, 1941.' },
      { id: 'tl-ww2end', q: 'The American part in the Second World War is dated 1941 to which year?', a: '1945',
        relates: 'Four years of war. The Cold War began about two years later.' },
      { id: 'tl-attack', q: 'In what year did the terrorist attacks on New York and Washington take place, on September 11?', a: '2001',
        relates: 'The most recent event this course holds.' }
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
      'In 1929 the Great Depression began: banks failed, and about a quarter of workers lost their jobs. That is one worker in four.',
      'The President’s answer was a set of new programs called the New Deal, led by Franklin D. Roosevelt. Social Security, the program on Ines’s card, is the one to remember. New programs like it were run by new federal offices, and an office of that kind is called an {t:agency}. What these offices did is {o:execute}: putting laws into practice, at a scale the founders never saw.'
    ] },

  { id: 'facts-hard', kind: 'facts',
    h: 'The Depression and the New Deal',
    link: 'The trouble, the answer, the President and the example.',
    concept: 'con-hard',
    rows: [
      { id: 'hd-depression', q: 'What is the long stretch of failed banks and lost jobs in the 1930s called?', a: 'The Great Depression',
        relates: 'It is the trouble. Everything else here is what was done about it.' },
      { id: 'hd-newdeal', q: 'What is the President’s set of new programs, begun in answer to the hard times of the 1930s, called?', a: 'The New Deal',
        relates: 'It is the answer to the trouble, and not the trouble itself. The federal government took a far larger role in daily life.' },
      { id: 'hd-roosevelt', q: 'Which President began the programs that answered the hard times of the 1930s?', a: 'Franklin D. Roosevelt',
        relates: 'The New Deal was his answer to the Depression.' },
      { id: 'hd-security', q: 'Which program, one of the new ones begun in answer to the hard times of the 1930s, is the example to remember?', a: 'Social Security',
        relates: 'It is the program named on the card that Ines found.' }
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
      'The man on the bench gave Lena the right idea: the two names on the stone belong to one long standoff, a contest in which neither side gives way. It was between the United States and the Soviet Union, and it ran from about 1947 to 1991. It is called the Cold War, and it included wars in Korea and Vietnam.'
    ] },

  { id: 'facts-cold', kind: 'facts',
    h: 'The Cold War in three names',
    link: 'The name, the other side and the wars.',
    concept: 'con-cold',
    rows: [
      { id: 'cw-name', q: 'What is the long standoff of about 1947 to 1991 called?', a: 'The Cold War',
        relates: 'It came after the Second World War and lasted about forty-four years.' },
      { id: 'cw-rival', q: 'The standoff was between the United States and which other country?', a: 'The Soviet Union',
        relates: 'It was the other side of the standoff.' },
      { id: 'cw-wars', q: 'Which two places had wars that were part of the standoff?', a: 'Korea and Vietnam',
        relates: 'The two wars that this course names as part of the Cold War.' }
    ] },

  { id: 'chk-cw-name', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-name' } },
  { id: 'chk-cw-rival', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-rival' } },
  { id: 'chk-cw-wars', kind: 'check', after: 'facts-cold', ask: { type: 'fact', row: 'cw-wars' } }
]);
