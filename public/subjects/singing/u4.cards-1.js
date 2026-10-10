// Singing, Unit Four, part one: the opening card, the one test the unit rests on, the note that was fine, and the two
// steady misses (a little under, a little over). This is an ACTION subject and a BRANCH unit: the first question already
// said the doubt is about the note itself, and the unit teaches the one question that gives each note its name.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet
// card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the
// heading of a lookalike card with no h. Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('singing', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'Before you fix a note, check it',
    canDo: 'When a note sounds wrong, check it against the song’s own note before you try to fix it. Half the time the note was fine, and when it is off, the check tells you which way, so you know what to try.',
    everyday: [
      'A friend winces at the chorus. A line you sing in the car every week suddenly sounds off to you. You play back a recording of yourself and the second verse makes you cringe. You want to fix something, but you do not know what.',
      'A note can be off in four ways, and each has its own fix: a little under, a little over, starting under and sliding up, or a voice that hunts for the note. A quick check against the song’s own note tells you which, before you change anything.'
    ],
    map: { branch: 'pitch' } },

  /* ---------- the one test the unit rests on ---------- */
  { id: 'term-notecheck', kind: 'term', term: 'notecheck',
    h: 'To find out if a note is off, play it and sing against it',
    link: 'Everything in this unit starts with one test, so here it is before the first name.',
    case: 'p-t-check',
    plain: [
      'Rosa did not go by the feeling. She measured her note against a steady one, and the way she had to slide told her what was wrong.',
      'If you do not have to slide at all, the note was fine, and there is nothing to fix.'
    ],
    after: 'Use it before you change anything, because a note that sounds wrong to you is often fine. The tool below does the same job as a piano app: it plays a note and you sing it.',
    audio: {
      kind: 'notecheck',
      says: 'This tool plays a note and listens while you sing. The note you pick stands in for the song’s note. Sing it, and the tool tells you whether you are under it, right on it, or over it.',
      answers: { under: 'P1.under', on: 'P1.match', over: 'P1.over' }
    } },

  /* ---------- On the note ---------- */
  { id: 'meet-onnote', kind: 'meet', outcome: 'onnote',
    link: 'Start with the one where nothing is wrong, so you know what a match sounds like.',
    case: 'p-mt-onnote', mark: 'P1',
    explain: [
      'Hector felt sure he had missed the note, and his daughter said the chorus sounded funny. But when he ran {t:notecheck}, his note and the song’s note matched. The chorus only sounded wrong.',
      'This happens a lot on recordings, and when a listener frowns. Only the check can say whether the note was really off, so trust it over the feeling.'
    ],
    audio: {
      kind: 'tones',
      says: 'Press the button to hear two notes that start together and sound like one steady note. That is what a match sounds like.',
      examples: [{ label: '{a:P1.match}', play: [{ note: 'D4', ms: 3000 }, { note: 'D4', ms: 3000 }] }]
    },
    spot: [
      { do: 'Run the check on the line that sounded wrong: Hector paused the recording on the chorus’s first note and held it.', why: 'It gives you something steady to compare with.' },
      { do: 'Sing your note beside it and listen for a slide: Hector’s note sounded the same, so he had nothing to slide.', why: 'If nothing needs to move, the note is not off.' },
      { do: 'Do not go by the reaction: his daughter said it sounded funny.', why: 'A frown shows that someone noticed something, not where your note landed.' }
    ],
    feature: { step: 'P1', option: 'match' },
    name: 'This is {o:onnote}. Nothing is wrong. It has a name so that you check before you start fixing a note that was fine.',
    act: [
      { do: 'Leave the note alone.', why: 'There is nothing to fix.' },
      { do: 'Trust the check over the feeling.', why: 'The check can be repeated, and the feeling changes from day to day.' },
      { do: 'Keep recording yourself and checking now and then.', why: 'You learn what a match really sounds like.' }
    ] },

  { id: 'check-onnote', kind: 'check', after: 'onnote',
    case: 'p-c-onnote',
    ask: { type: 'phrase', step: 'P1', say: 'Which words show where Nia’s note landed? Tap them.',
           answer: 'The two sound like one note, and she does not have to slide at all' } },

  /* ---------- Singing flat ---------- */
  { id: 'meet-flat', kind: 'meet', outcome: 'flat',
    link: 'Now the first way to be off: a note that sits a little under the song’s note.',
    case: 'p-mt-flat', mark: 'P1',
    explain: [
      'Beatriz’s note was close, but low. She was tired and she sang the ends of her phrases heavily, and a tired, heavy voice loses lift, so the note sags a little.',
      'That is the usual cause of a low note: too little lift or energy, from tiredness or from singing heavily or very softly. The fix is more lift, and not more volume.'
    ],
    audio: {
      kind: 'tones',
      says: 'Press the button. You hear the song’s note, and beside it a second note that starts a shade low. The two wobble while they are apart, and the wobble fades as the second note slides up and matches.',
      examples: [{ label: '{a:P1.under}', play: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, -30], [1600, -30], [2500, 0], [4000, 0]] }] }]
    },
    spot: [
      { do: 'Run the check on the line: Beatriz played the last note of her part on a piano app and sang hers beside it.', why: 'You need a steady note to measure against.' },
      { do: 'See where your note sits and which way you slide: hers sat lower, and she slid up.', why: 'A slide up means you were under, and a slide down means you were over.' },
      { do: 'Look for the usual cause: Beatriz had been up since five, and her phrases ended heavy.', why: 'The cause tells you what to change.' }
    ],
    feature: { step: 'P1', option: 'under' },
    name: 'This is {o:flat}: a small miss, a little under the song’s note, and an easy one to fix.',
    act: [
      { do: 'Think the note a touch higher than it is, and brighten the vowel.', why: 'A hint of a smile, or an “ee” feeling, lifts the sound.' },
      { do: 'Give the air a little more energy, not more volume.', why: 'Energy lifts a note, and loudness alone does not.' },
      { do: 'Stand up and lift your chest.', why: 'It gives the note more lift.' },
      { do: 'Run the check again.', why: 'It shows whether the change worked.' }
    ] },

  { id: 'check-flat', kind: 'check', after: 'flat',
    case: 'p-c-flat',
    ask: { type: 'option', step: 'P1', among: ['match', 'under'] } },

  { id: 'look-flat-onnote', kind: 'lookalike', ledger: 'flat~onnote',
    link: 'These two are the pair people mix up most, because in both the line sounded wrong.',
    cases: ['p-lk-hymn-low', 'p-lk-hymn-fine'],
    instruction: 'Both stories are about Tomas and the same hymn, and in both the last line sounds low to him. Compare one thing: what the check shows.',
    prompt: { kind: 'which', option: 'P1.under', answer: 'p-lk-hymn-low' },
    difference: [
      'In Story A the check shows his note lower than the piano’s, and he has to slide up. That is {a:P1.under}, so it is {o:flat}.',
      'In Story B the check shows the two notes the same, and he does not slide. That is {a:P1.match}, so it is {o:onnote}.',
      'The line sounded low to him both times. Only the check shows whether it was.'
    ] },

  /* ---------- Singing sharp ---------- */
  { id: 'meet-sharp', kind: 'meet', outcome: 'sharp',
    link: 'Now the other direction: a note that sits a little over the song’s note.',
    case: 'p-mt-sharp', mark: 'P1',
    explain: [
      'Petra’s note was close, but high. She was nervous, her shoulders were tight, and tension pushes a note up.',
      'It is the same small miss as the one before, in the other direction. The usual causes are pushing, tension and nerves.'
    ],
    audio: {
      kind: 'tones',
      says: 'Press the button. You hear the song’s note, and beside it a second note that starts a shade high. The two wobble while they are apart, and the wobble fades as the second note slides down and matches.',
      examples: [{ label: '{a:P1.over}', play: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, 30], [1600, 30], [2500, 0], [4000, 0]] }] }]
    },
    spot: [
      { do: 'Run the check on the line: Petra played the song’s first note on a piano app and sang hers beside it.', why: 'It is the same check as before.' },
      { do: 'See where your note sits and which way you slide: hers sat higher, and she slid down.', why: 'A slide down means you were over.' },
      { do: 'Look for the usual cause: Petra was nervous, and her shoulders were tight.', why: 'The cause tells you what to loosen.' }
    ],
    feature: { step: 'P1', option: 'over' },
    name: 'This is {o:sharp}: a small miss, a little over the song’s note, where the one before was a little under.',
    act: [
      { do: 'Drop your shoulders and loosen your jaw.', why: 'Tension pushes the note up.' },
      { do: 'Sing a touch softer, with less air.', why: 'Pushing is what lifts the note over.' },
      { do: 'Run the check again.', why: 'It shows whether you moved closer.' }
    ] },

  { id: 'check-sharp', kind: 'check', after: 'sharp',
    case: 'p-c-sharp',
    ask: { type: 'option', step: 'P1', among: ['match', 'under', 'over'] } },

  { id: 'look-flat-sharp', kind: 'lookalike', ledger: 'flat~sharp',
    link: 'Both are small misses that the same check finds, so it helps to see them side by side.',
    cases: ['p-lk-karaoke-low', 'p-lk-karaoke-high'],
    instruction: 'Both stories are about Lucia and the same line at karaoke, and in both she checks it against a piano app. Compare one thing: which way she has to slide.',
    prompt: { kind: 'which', option: 'P1.over', answer: 'p-lk-karaoke-high' },
    difference: [
      'In Story A her note is lower than the app’s, and she slides up. That is {a:P1.under}, so it is {o:flat}.',
      'In Story B her note is higher than the app’s, and she slides down. That is {a:P1.over}, so it is {o:sharp}.',
      'Same line, same check. The direction of the slide tells her which way she was off, and so which fix to try.'
    ] }
]);
