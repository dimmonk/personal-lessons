// Singing, Unit Four: stories shown inside cards, part one: the story that carries the term (the note check), the note that
// was fine, a note a little under, a note a little over, and the two look-alike pairs between them.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A story used only by a term card has text and nothing else: no question is asked of it.
// route is { D1: [...], P1: [...] }: every story of this unit is a doubt about the note itself (the first question's answer),
// and the unit's own question, where the note lands, gives the name. cues.P1 is the exact words that show where it landed.
// Every person, song and app is invented. Stories are written the way a singer would describe them.

FC.cases('singing', 'u4', [

  /* ---------- the story that carries the term "the note check" (no name is asked of it) ---------- */
  { id: 'p-t-check', use: 'teach', tier: 'clean', setting: 'home', topic: 'a piano app played beside the voice', name: 'The piano app',
    text: "Rosa's sister says her part in a song sounded a little low. Rosa opens a piano app on her phone, plays the note the song starts on and holds it, then sings her own note beside it. Hers sounds lower, so she slides her voice up until the two sound like one note. Because she had to slide up, she knows she was under." },

  /* ---------- On the note ---------- */
  { id: 'p-mt-onnote', use: 'teach', tier: 'clean', setting: 'car', topic: 'a chorus that sounded funny in the car', name: 'The funny chorus',
    text: "On the drive home Hector sings along with a song, and the chorus sounds wrong to him. His daughter in the back seat says, 'Dad, that one sounded funny.' At a red light he pauses the recording on the chorus's first note and holds it, then sings his own note beside it. The two sound like one note, and he does not have to slide at all.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { P1: ["pauses the recording on the chorus's first note and holds it, then sings his own note beside it", 'The two sound like one note, and he does not have to slide at all'] } },

  { id: 'p-c-onnote', use: 'check', tier: 'clean', setting: 'karaoke', topic: 'a quiet room after the last line',
    text: "After Nia's last line at karaoke the room goes quiet, and she is sure she missed the note. Later she plays the line's last note on a piano app, holds it, and sings hers beside it. The two sound like one note, and she does not have to slide at all. The room had gone quiet because the machine was switching songs.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { P1: ['The two sound like one note, and she does not have to slide at all'] },
    segments: [
      { text: "After Nia's last line at karaoke the room goes quiet, and she is sure she missed the note.", note: 'That is why she doubts herself. A quiet room does not show where her note landed.' },
      { text: "Later she plays the line's last note on a piano app, holds it, and sings hers beside it.", note: 'This is how she checks. What the check shows comes in the next piece.' },
      { text: 'The two sound like one note, and she does not have to slide at all.' },
      { text: 'The room had gone quiet because the machine was switching songs.', note: 'That explains the quiet. It does not say where her note landed.' }
    ],
    reason: { P1: 'Her note matched the song’s note: {cue:P1}.' } },

  /* ---------- Singing flat ---------- */
  { id: 'p-mt-flat', use: 'teach', tier: 'clean', setting: 'choir', topic: 'an alto part that sagged at the end of the phrase', name: 'The tired alto',
    text: "Beatriz sings alto in a community choir. After rehearsal the director tells her the end of her part felt a little low. At home that night she plays the part's last note on a piano app, holds it, and sings hers beside it. Hers is a little lower, and she has to slide up to meet it. She has been up since five, and the ends of her phrases come out heavy.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { P1: ["plays the part's last note on a piano app, holds it, and sings hers beside it", 'Hers is a little lower, and she has to slide up to meet it'] } },

  { id: 'p-c-flat', use: 'check', tier: 'clean', setting: 'shower', topic: 'a line sung in the shower every morning',
    text: "Omar sings in the shower every morning, and one line keeps sounding low to him. He plays the line's first note on a piano app, holds it, and sings his own beside it. His note is a little lower than the app's, and he slides up to match it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { P1: ["His note is a little lower than the app's", 'he slides up to match it'] },
    reason: { P1: 'He had to slide up to reach the app’s note, so his note was under it: {cue:P1}.' } },

  /* ---------- the look-alike pair: flat against fine, the same person and the same hymn ---------- */
  { id: 'p-lk-hymn-low', use: 'teach', tier: 'clean', setting: 'church', topic: 'a hymn’s last line that sounded low', name: 'The low hymn',
    text: "Tomas sings the last line of a hymn at church, and it sounds low to him. After the service he plays the line's note on the church piano, holds it, and sings his own. His is a little lower, and he has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { P1: ['His is a little lower, and he has to slide up to meet it'] } },

  { id: 'p-lk-hymn-fine', use: 'teach', tier: 'clean', setting: 'church', topic: 'a hymn’s last line that matched', name: 'The fine hymn',
    text: "Tomas sings the last line of a hymn at church, and it sounds low to him. After the service he plays the line's note on the church piano, holds it, and sings his own. The two sound like one note, and he does not have to slide.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { P1: ['The two sound like one note, and he does not have to slide'] } },

  /* ---------- Singing sharp ---------- */
  { id: 'p-mt-sharp', use: 'teach', tier: 'clean', setting: 'openmic', topic: 'a nervous first song at an open mic', name: 'The nervous open mic',
    text: "Petra is nervous before her first open mic, and her shoulders are up around her ears. She sings her song, and her friend says it sounded a little off. The next day she plays the song's first note on a piano app, holds it, and sings hers beside it. Hers is a little higher, and she has to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { P1: ["plays the song's first note on a piano app, holds it, and sings hers beside it", 'Hers is a little higher, and she has to slide down to meet it'] } },

  { id: 'p-c-sharp', use: 'check', tier: 'clean', setting: 'home', topic: 'a song practiced at home for a brother’s party',
    text: "Wen is practicing a song to sing at his brother's party, and one line feels wrong to him. He stops, plays the line's note on a piano app, holds it, and sings his own beside it. His note is a little higher than the app's, and he slides down to match it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { P1: ["His note is a little higher than the app's", 'he slides down to match it'] },
    reason: { P1: 'He had to slide down to reach the app’s note, so his note was over it: {cue:P1}.' } },

  /* ---------- the look-alike pair: flat against sharp, the same person and the same line ---------- */
  { id: 'p-lk-karaoke-low', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a karaoke line sung low', name: 'The low line',
    text: "Lucia sings the last line of a song at karaoke, and afterward it nags at her. She plays the line's note on a piano app, holds it, and sings hers beside it. Hers is a little lower, and she has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { P1: ['Hers is a little lower, and she has to slide up to meet it'] } },

  { id: 'p-lk-karaoke-high', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a karaoke line sung high', name: 'The high line',
    text: "Lucia sings the last line of a song at karaoke, and afterward it nags at her. She plays the line's note on a piano app, holds it, and sings hers beside it. Hers is a little higher, and she has to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { P1: ['Hers is a little higher, and she has to slide down to meet it'] } }
]);
