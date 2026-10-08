// Singing, Unit Five: stories shown inside cards, part two: the dull sound, the words that run together, the check on the
// question, and the worked story. Field guide: see u5.cases-teach-1.js.
// The worked story is the one whose most noticeable details (a quiet singer, a director who cannot make out a word) point at
// the dull sound, while the words that decide it point at the words that run together.

FC.cases('singing', 'u5', [

  /* ---------- A muffled sound ---------- */
  { id: 't-ines-mirror', use: 'teach', tier: 'clean', setting: 'home', topic: 'a first open mic rehearsed at the mirror', name: 'The bathroom mirror',
    text: "Ines is getting ready for her first open mic night. In front of the bathroom mirror she sings the opening line of her song. Every note is right and her breath lasts, but her mouth barely opens. The sound is dull and stays back in her throat, and her sister in the next room cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Every note is right and her breath lasts',
            T1: ['her mouth barely opens', 'The sound is dull and stays back in her throat', 'cannot make out the words'] } },

  { id: 't-c-omar-low-mic', use: 'check', tier: 'clean', setting: 'karaoke', topic: 'a karaoke line sung with the mic held low',
    text: "Omar is nervous at karaoke, so he holds the microphone low and looks at the floor. His notes are right and his breath lasts, but his lips hardly part. The sound is dull and stays back in his throat, and the people at the front tables cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'His notes are right and his breath lasts',
            T1: ['his lips hardly part', 'The sound is dull and stays back in his throat'] },
    reason: { T1: 'Omar’s mouth is nearly shut and the sound stays in his throat: {cue:T1}.' } },

  { id: 't-lk-tessa-book', use: 'teach', tier: 'clean', setting: 'church', topic: 'a hymn read from behind the hymn book',
    text: "Tessa is singing the first line of a hymn at the Sunday service, from a hymn book held up in front of her face. Her notes are right and her breath lasts. Her mouth barely opens, the sound is dull and stays back in her throat, and the person next to her cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['Her mouth barely opens, the sound is dull and stays back in her throat'] } },

  /* ---------- Mumbled words ---------- */
  { id: 't-wes-river-song', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a fast karaoke song with the word endings gone', name: 'The river song',
    text: "Wes is at karaoke, singing a fast song about a river. Every note is right and his breath lasts. His mouth is open and his voice rings out clear, but the ends of his words disappear. On “we walked the river road all night” his friends at the back hear only “we wal… the ri-ver ro… all ni…”, and they cannot tell what he is saying.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Every note is right and his breath lasts',
            T1: ['His mouth is open and his voice rings out clear', 'the ends of his words disappear', 'they cannot tell what he is saying'] } },

  { id: 't-c-hana-singalong', use: 'check', tier: 'clean', setting: 'party', topic: 'a party singalong nobody can follow',
    text: "At a party, Hana leads a singalong of a song about a long road. Her notes are right and her breath lasts. Her mouth is open and her voice is clear, but her t, d and s sounds are weak, so the words run together. A friend asks what the second verse says, and nobody can tell.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: 'her t, d and s sounds are weak, so the words run together' },
    segments: [
      { text: 'At a party, Hana leads a singalong of a song about a long road', note: 'That is where she is singing. It does not say what the sound is like.' },
      { text: 'Her notes are right and her breath lasts', note: 'That rules out the notes and the air. The trouble is in the words.' },
      { text: 'Her mouth is open and her voice is clear', note: 'True, and it shows the sound is not the trouble. The trouble is in the next piece.' },
      { text: 'but her t, d and s sounds are weak, so the words run together' },
      { text: 'A friend asks what the second verse says, and nobody can tell', note: 'That is what the listeners notice. The reason is in the piece about her t, d and s sounds.' }
    ],
    reason: { T1: 'Hana’s sound is fine, but her t, d and s sounds are weak: {cue:T1}.' } },

  { id: 't-lk-tessa-endings', use: 'teach', tier: 'clean', setting: 'church', topic: 'a hymn line with soft word endings',
    text: "Tessa is singing the first line of a hymn at the Sunday service, from a hymn book held up in front of her face. Her notes are right and her breath lasts. Her mouth is open and her voice is clear, but the t, d and s sounds are soft or missing, and the person next to her cannot make out the words.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['Her mouth is open and her voice is clear, but the t, d and s sounds are soft or missing'] } },

  /* ---------- the check on the question: a voice from outside, with nothing to fix ---------- */
  { id: 't-c-joel-booth', use: 'check', tier: 'clean', setting: 'church', topic: 'a hymn played back in the sound booth',
    text: "The sound crew at Joel’s church records the service, and afterward they play his hymn verse back to him. His notes are right and his breath lasts, but on the speakers his voice sounds thinner and higher than he expects. His mouth was open wide, every word is clear, and holding his nose shut on an “ah” changes little.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'His notes are right and his breath lasts',
            T1: ['on the speakers his voice sounds thinner and higher than he expects', 'every word is clear'] },
    reason: { T1: 'The only complaint is the playback, and the words are clear: {cue:T1}.' } },

  /* ---------- the worked story ---------- */
  { id: 't-w-cleo-back-row', use: 'teach', tier: 'misleading', setting: 'choir', topic: 'a quiet choir singer with soft word endings', name: 'The back row',
    text: "Cleo stands in the back row at choir rehearsal with her shoulders hunched, singing quietly. Her notes are right and her breath lasts. The director stops the group: “I can’t make out a word from the back row.” In the hall mirror afterward Cleo sings the line again: her mouth is wide open on every vowel and her voice is clear, but the ends of her words are missing.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['her mouth is wide open on every vowel and her voice is clear', 'the ends of her words are missing'] } }
]);
