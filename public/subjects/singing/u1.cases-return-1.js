// Singing, Unit One: fresh stories held back for later days (lesson standard E9, V44). Two for each kind, because this
// is an action subject. A kind that is due comes back as a story the learner has not seen, beside a story of the kind
// they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('singing', 'u1', [
  /* ---------- nothing is wrong ---------- */
  { id: 'g-ret-fine-duet', use: 'return', tier: 'clean', setting: 'home', topic: 'a duet part and a bigger voice',
    text: "Wen practices her half of a duet at home. She hits every note, nothing is tight, her breath lasts and her words are clear. She only wishes her voice were as big as the singer's on the record.",
    route: { D1: ['fine'] },
    cues: { D1: ['She hits every note, nothing is tight, her breath lasts and her words are clear', "wishes her voice were as big as the singer's on the record"] },
    reason: { D1: 'Her singing has no fault, and the complaint is only about the singer on the record: {cue:D1}.' },
    not: { outcome: 'breath', why: 'Her breath lasts, so nothing is wrong with the air. She only wishes for a bigger voice.' } },

  { id: 'g-ret-fine-radio', use: 'return', tier: 'varied', setting: 'party', topic: 'a pop song and the radio version',
    text: "At a party, Cora, 12, sings a pop song with her cousins, and everyone says it sounded great. She feels it came out thin next to the radio version, though every note was right, nothing was tight and she never ran out of air.",
    route: { D1: ['fine'] },
    cues: { D1: ['every note was right, nothing was tight and she never ran out of air', 'came out thin next to the radio version'] },
    reason: { D1: 'Nothing went wrong in her singing: {cue:D1}. Her only complaint is the comparison with the radio.' },
    not: { outcome: 'tone', why: 'She calls it thin only beside the radio version. Nobody says her sound is pinched, dull or run together.' } },

  /* ---------- the top notes ---------- */
  { id: 'g-ret-high-range', use: 'return', tier: 'clean', setting: 'karaoke', topic: 'a song that sits too high all the way',
    text: "Hugo picks a karaoke song whose chorus sits high. Even sung lightly, with his throat loose, the top notes of every line are not there, and the whole song strains.",
    route: { D1: ['high'] },
    cues: { D1: 'Even sung lightly, with his throat loose, the top notes of every line are not there' },
    reason: { D1: 'The trouble starts where the notes go up: {cue:D1}. He tried it lightly, so it is not about pushing.' },
    not: { outcome: 'pitch', why: 'He is not unsure of a note he sings. The top notes are simply not there.' } },

  { id: 'g-ret-high-jaw', use: 'return', tier: 'varied', setting: 'church', topic: 'a jaw that locks on the top word',
    text: "At church, Pia sings the last verse of a hymn, which climbs to its highest word. She has air left, but her jaw locks, her throat tightens, and the sound goes thin and strangled as the word comes up.",
    route: { D1: ['high'] },
    cues: { D1: 'her jaw locks, her throat tightens, and the sound goes thin and strangled as the word comes up' },
    reason: { D1: 'The trouble starts where the line climbs: {cue:D1}.' },
    not: { outcome: 'breath', why: 'She has air left. The jaw and the throat are what go wrong.' } },

  /* ---------- the air ---------- */
  { id: 'g-ret-breath-spent', use: 'return', tier: 'clean', setting: 'openmic', topic: 'air spent on the first half of a line',
    text: "At an open mic, Remy takes a small, quick breath with his shoulders up. He spends it all on the first half of the long line, and the second half comes out as a whisper.",
    route: { D1: ['breath'] },
    cues: { D1: 'He spends it all on the first half of the long line, and the second half comes out as a whisper' },
    reason: { D1: 'The air gives out before the line ends: {cue:D1}.' },
    not: { outcome: 'high', why: 'The line does not climb to a hard note. The air is what runs out.' } },

  { id: 'g-ret-breath-pieces', use: 'return', tier: 'varied', setting: 'car', topic: 'breaths in the middle of words in a fast song',
    text: "Nico sings a fast song in the car. He takes full, quiet breaths, but wherever he runs out he grabs one, even in the middle of a word, so the line comes out in pieces.",
    route: { D1: ['breath'] },
    cues: { D1: 'wherever he runs out he grabs one, even in the middle of a word' },
    reason: { D1: 'The air is grabbed in the wrong places: {cue:D1}.' },
    not: { outcome: 'tone', why: 'The words are cut by the breaths, not blurred by his mouth.' } },

  /* ---------- the note itself ---------- */
  { id: 'g-ret-pitch-hum', use: 'return', tier: 'clean', setting: 'home', topic: 'a hum that sits under the recording',
    text: "Ari hums along with a recording at home and suspects his notes are a little low. He pauses the recording on a note and sings it, and his is a little lower than the recording's.",
    route: { D1: ['pitch'] },
    cues: { D1: "suspects his notes are a little low. He pauses the recording on a note and sings it, and his is a little lower than the recording's" },
    reason: { D1: 'What he doubts is the note itself: {cue:D1}.' },
    not: { outcome: 'fine', why: 'The notes are not right, so this is more than a wish to sound like the recording.' } },

  { id: 'g-ret-pitch-first', use: 'return', tier: 'varied', setting: 'church', topic: 'finding the first note of a hymn',
    text: "At church, Colm starts the hymn before he has the first note in his head. He moves his voice up and down until it finds a note, and the people around him wince.",
    route: { D1: ['pitch'] },
    cues: { D1: 'starts the hymn before he has the first note in his head. He moves his voice up and down until it finds a note' },
    reason: { D1: 'He is hunting for the note itself: {cue:D1}.' },
    not: { outcome: 'tone', why: 'Nobody says his sound is pinched or dull. The people wince because the note is not found.' } },

  /* ---------- the sound of the words ---------- */
  { id: 'g-ret-tone-video', use: 'return', tier: 'clean', setting: 'karaoke', topic: 'a video that shows an odd voice',
    text: "At karaoke, a friend films Kofi. Watching the video later, he says his voice sounds thin and strange, though in the room it felt full. His notes were right, his air lasted and his words were clear.",
    route: { D1: ['tone'] },
    cues: { D1: 'he says his voice sounds thin and strange, though in the room it felt full' },
    reason: { D1: 'The notes and the air are fine, and the complaint comes from the video: {cue:D1}.' },
    not: { outcome: 'fine', why: 'His complaint is not about the singer on the record. It is about how his own voice sounds on the video.' } },

  { id: 'g-ret-tone-ironing', use: 'return', tier: 'varied', setting: 'home', topic: 'a song sung while ironing',
    text: "Faye sings a song to herself while she irons. Her notes are right and she has air to spare, but she drops the ends of the words, so a visitor cannot tell what she is singing.",
    route: { D1: ['tone'] },
    cues: { D1: 'she drops the ends of the words, so a visitor cannot tell what she is singing' },
    reason: { D1: 'The notes and the air are fine, and the words run together: {cue:D1}.' },
    not: { outcome: 'breath', why: 'She has air to spare. The words are dropped, not short of air.' } }
]);
