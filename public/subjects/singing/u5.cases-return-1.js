// Singing, Unit Five: fresh stories held back for later days (lesson standard E9, V44). Two for each name, because this is an
// action subject. A name that is due comes back as a story the learner has not seen, beside a story of the name they most
// often take it for. Every story carries marked words and a reason for both questions, because it is run as a whole route.

FC.cases('singing', 'u5', [

  /* ---------- Your voice from outside ---------- */
  { id: 't-ret-pete-set', use: 'return', tier: 'clean', setting: 'openmic', topic: 'a video of an open mic set',
    text: "Pete’s friend posts a video of his open mic set. Pete’s notes were right and his breath lasted, but he cannot stand the voice on the video: it is thin and higher than he thought. Every word is clear, and holding his nose shut on an “ah” hardly changes the sound.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Pete’s notes were right and his breath lasted', T1: ['it is thin and higher than he thought', 'Every word is clear'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what bothers Pete.',
              T1: 'The complaint is only the video, and every word is clear: {cue:T1}.' },
    not: { outcome: 'nasal', why: 'Holding his nose shut changes the sound little, and the thin sound is on the video only.' } },

  { id: 't-ret-zoe-playback', use: 'return', tier: 'varied', setting: 'choir', topic: 'a choir recording played at rehearsal',
    text: "At choir rehearsal, the director plays a recording of the group, and Zoe, 15, picks out her own voice. Her notes were right and her breath lasted, but she thinks she sounds childish: thin and high. Her mouth is open, her words come through clearly on the recording, and the sound barely changes when she holds her nose shut on an “ah”.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Her notes were right and her breath lasted', T1: ['she thinks she sounds childish: thin and high', 'her words come through clearly on the recording'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what Zoe dislikes.',
              T1: 'Zoe dislikes only how she sounds on the recording, and the words come through: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'Her words come through clearly, so nothing is lost. The only surprise is the voice she hears on the recording.' } },

  /* ---------- A nasal sound ---------- */
  { id: 't-ret-dolores-hymn', use: 'return', tier: 'clean', setting: 'shower', topic: 'a hymn sung pinched in the shower',
    text: "Dolores, 72, sings a hymn in the shower. Her notes are right and her breath lasts, but her voice is pinched, as if it comes out of her nose. When she holds her nose shut on an “ah”, the sound changes a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['her voice is pinched, as if it comes out of her nose', 'the sound changes a lot'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what is off.',
              T1: 'The sound is pinched, and the nose check changes it a lot: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'She hears the pinch while she sings, with no recording involved, and the nose check changes the sound a lot.' } },

  { id: 't-ret-abe-party', use: 'return', tier: 'varied', setting: 'party', topic: 'a train song that sounds like a cold',
    text: "At a party, Abe, 74, sings a song about a train. A friend says he sounds like he has a cold, though he does not. His notes are right and his breath lasts, but the sound is pinched, as if it comes out of his nose, and holding his nose shut on an “ah” changes it a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['the sound is pinched, as if it comes out of his nose', 'holding his nose shut on an “ah” changes it a lot'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what the friend notices.',
              T1: 'The sound is pinched, and holding the nose shut changes it a lot: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'Nothing here is dull or stuck in the throat. The nose check changes the sound a lot.' } },

  /* ---------- A muffled sound ---------- */
  { id: 't-ret-noor-first-set', use: 'return', tier: 'clean', setting: 'openmic', topic: 'a first set sung to the floor',
    text: "Noor sings her first open mic set staring at the floor, with the microphone far from her lips. Her notes are right and her breath lasts, but her mouth hardly opens. The sound is dull and stays back in her throat, and nobody past the front row can make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['her mouth hardly opens', 'The sound is dull and stays back in her throat'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what the back of the room loses.',
              T1: 'Her mouth hardly opens and the sound stays in her throat: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'The words are lost, but the sound itself is dull and the mouth hardly opens. In {o:mumbled} the sound is open and clear.' } },

  { id: 't-ret-gus-bedtime', use: 'return', tier: 'varied', setting: 'kids', topic: 'a bedtime song in a tiny voice',
    text: "Gus sings a bedtime song to his son in a tiny voice, with his mouth almost closed so that he does not wake the baby. His notes are right and his breath lasts. The sound is dull and stays back in his throat, and his wife in the doorway cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['his mouth almost closed', 'The sound is dull and stays back in his throat'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what his wife cannot follow.',
              T1: 'His mouth is almost closed and the sound stays in his throat: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'His wife cannot make out the words, but the cause is the almost closed mouth and the dull sound, not weak word endings.' } },

  /* ---------- Mumbled words ---------- */
  { id: 't-ret-rosa-gospel', use: 'return', tier: 'clean', setting: 'church', topic: 'a gospel line the group leader cannot follow',
    text: "Rosa sings a gospel line with her church group. Her notes are right and her breath lasts. Her mouth is wide open and her voice is clear, but she skips the t, d and s sounds, so the words run together and the group leader cannot follow them.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['Her mouth is wide open and her voice is clear', 'she skips the t, d and s sounds'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The words are what the group leader loses.',
              T1: 'The sound is open and clear, but the small sounds are skipped: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'Her mouth is wide open and the sound is clear, not dull. What is missing is the small sounds in the words.' } },

  { id: 't-ret-felix-verse', use: 'return', tier: 'varied', setting: 'home', topic: 'a fast verse a friend tries to write down',
    text: "Felix, 19, sings a fast verse at home while a friend tries to write the words down. His notes are right and his breath lasts. His mouth is open and his voice is clear, but the endings of his words fade away, and the friend ends up with half a page of guesses.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['His mouth is open and his voice is clear', 'the endings of his words fade away'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The words are what the friend loses.',
              T1: 'The sound is open and clear, but the endings of the words fade: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'Nothing here is only a surprise at hearing himself: the friend cannot follow the words.' } }
]);
