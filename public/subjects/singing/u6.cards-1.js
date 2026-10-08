// Singing, Unit Six, part one: the opening card, then the groups of facts about what to do before you sing: a warm-up, and
// water. This is a FACT unit (lesson standard A12): facts to hold, not a skill to apply. Each group is a concept card (a story,
// then the idea in plain words), a facts card (one row per fact), and one check per fact. A row's question is asked from memory
// and its answer is one of the choices for every other row on the same card.
// The app prints, and this file therefore does not contain: what a fact unit is, the groups of facts, the parts, the stakes
// line, the heading of a check and of a look-alike stem. No key wording is needed here, so no token is used.

FC.cards('singing', 'u6', [

  { id: 'orient-care', kind: 'orient',
    h: 'Looking after your voice',
    canDo: [
      'A voice that is warmed up, watered and rested sings better tonight, and a hoarse voice gets worse if you push it. These are the facts worth holding, so that you can do the right thing without looking anything up.'
    ],
    everyday: [
      'Picture the three moments they are for: a night you sing at karaoke, the morning after a loud party when your voice is rough, and the Sunday you decide to learn a song.',
      'At each one there is a move that feels natural and is wrong: skip the warm-up, push through, practice for an hour and call it done. The facts are the right move, ready before you need it.'
    ] },

  /* ---------- group one: the warm-up ---------- */
  { id: 'con-warmup', kind: 'concept',
    h: 'Warm up first',
    link: 'First, the five minutes before you sing anything that matters.',
    case: 'f-warmup',
    plain: [
      'Marcus asked a voice that had been sitting quiet for an hour for the loudest, highest part of the night. It tightened. A warm-up wakes the voice up first.',
      'A warm-up takes about five minutes. Start with a hum. Then a lip trill: let your lips flutter loose as you blow air through them and make a sound. Then a gentle slide, one sound gliding slowly up and down. Sing all of it softly, in the easy middle of your voice: the notes you can sing without any effort.',
      'The loud parts and the high notes wait until after the warm-up. Do it before anything that matters, karaoke included.'
    ] },

  { id: 'facts-warmup', kind: 'facts',
    h: 'The warm-up',
    link: 'Four facts: how long it takes, what you sing, what waits, and when to do it.',
    concept: 'con-warmup',
    rows: [
      { id: 'wu-time', q: 'How long does a warm-up take?', a: 'Five minutes is enough',
        relates: 'It is short enough to do every time, even before a night of karaoke. Marcus skipped it, and five minutes was all it would have taken.' },
      { id: 'wu-what', q: 'What do you sing in a warm-up?', a: 'Soft hums, lip trills and slides, in the easy middle',
        relates: 'Soft, easy sounds wake the voice up without asking much of it. A lip trill is air blown through loose, fluttering lips while you make a sound.' },
      { id: 'wu-later', q: 'When do the loud parts and the high notes come?', a: 'After the warm-up',
        relates: 'Marcus sang the loudest, highest part first, and his voice tightened. Those parts go last, once the voice is awake.' },
      { id: 'wu-when', q: 'Before which singing do you warm up?', a: 'Anything that matters, karaoke too',
        relates: 'Karaoke counts, and it is where Marcus skipped it. Anything you want to get through well is worth five minutes first.' }
    ] },

  { id: 'chk-wu-time', kind: 'check', after: 'facts-warmup', ask: { type: 'fact', row: 'wu-time' } },
  { id: 'chk-wu-what', kind: 'check', after: 'facts-warmup', ask: { type: 'fact', row: 'wu-what' } },
  { id: 'chk-wu-later', kind: 'check', after: 'facts-warmup', ask: { type: 'fact', row: 'wu-later' } },
  { id: 'chk-wu-when', kind: 'check', after: 'facts-warmup', ask: { type: 'fact', row: 'wu-when' } },

  /* ---------- group two: water, dry air and a dry throat ---------- */
  { id: 'con-water', kind: 'concept',
    h: 'Water and your voice',
    link: 'Next, what water does for your voice, and what dries it out.',
    case: 'f-water',
    plain: [
      'Ines’s bottle of water did nothing for her voice. What you drink never touches your voice on its way down. It helps over hours, so water has to be drunk through the whole day.',
      'Some things dry the voice out: dry air, smoke and alcohol. The heater in Ines’s rehearsal room was one of them.',
      'A dry throat right now is a different job. Breathe steam or humid air (a hot shower is an easy way), and take a sip of water for your mouth.'
    ] },

  { id: 'facts-water', kind: 'facts',
    h: 'Water, dry air and a dry throat',
    link: 'Three facts: when to drink, what dries your voice out, and what helps right now.',
    concept: 'con-water',
    rows: [
      { id: 'wa-when', q: 'When do you drink water for your voice?', a: 'Through the whole day, not only before you sing',
        relates: 'What you drink never touches your voice. It helps over hours, so one bottle just before you sing is too late.' },
      { id: 'wa-dry', q: 'What dries your voice out?', a: 'Dry air, smoke and alcohol',
        relates: 'Ines’s rehearsal room had a heater blowing dry air. Smoke and alcohol dry the voice out too.' },
      { id: 'wa-now', q: 'Your throat is dry right now. What helps?', a: 'Steam or humid air, and a sip of water for your mouth',
        relates: 'Steam and humid air reach your voice when you breathe them in. A sip only wets your mouth.' }
    ] },

  { id: 'chk-wa-when', kind: 'check', after: 'facts-water', ask: { type: 'fact', row: 'wa-when' } },
  { id: 'chk-wa-dry', kind: 'check', after: 'facts-water', ask: { type: 'fact', row: 'wa-dry' } },
  { id: 'chk-wa-now', kind: 'check', after: 'facts-water', ask: { type: 'fact', row: 'wa-now' } },

  { id: 'look-water', kind: 'lookalike', ledger: 'wa-when~wa-now',
    h: 'Water all day, and help right now',
    link: 'People swap these two, and Ines’s story shows what the swap costs.',
    facts: ['wa-when', 'wa-now'],
    instruction: 'Compare when each one works: over hours, or in the next minute.',
    prompt: { kind: 'which', answer: 'wa-when' },
    difference: [
      'Fact A is the habit: {f:wa-when}. It works over hours, so it has to start long before you sing.',
      'Fact B is for this minute: {f:wa-now}. A sip never reaches your voice, so it cannot replace the habit.',
      'Ines wanted the result of A in five minutes, and it does not work that way.'
    ] }
]);
