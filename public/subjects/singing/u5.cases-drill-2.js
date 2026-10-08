// Singing, Unit Five: drill stories for the route stage: the whole route alone, clean stories first, then the stories whose
// details mislead. echo names a teaching story of a DIFFERENT name whose story the story is built to bring back.
// The voice from outside is in two groups, so the stage holds a story where nothing is wrong. Field guide: see u5.cases-teach-1.js.

FC.cases('singing', 'u5', [

  /* ---------- Stage two: route, clean ---------- */
  { id: 't-r-aiko-chorus', use: 'drill', tier: 'clean', setting: 'shower', topic: 'a pop chorus recorded in the shower',
    text: "Aiko, 24, sings a pop chorus in the shower while her phone records. Later she plays it back and cringes: it sounds like someone else, thin and high. The notes are right and her breath lasts the whole chorus. Her mouth opens easily, every word is clear, and holding her nose shut on an “ah” hardly changes the sound.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'The notes are right and her breath lasts the whole chorus', T1: ['it sounds like someone else, thin and high', 'every word is clear'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what Aiko dislikes.',
              T1: 'She dislikes only the playback, and the words are clear: {cue:T1}.' },
    not: { outcome: 'nasal', why: 'Holding her nose shut changes the sound little, so it is not going through her nose. The thin sound shows up on the recording only.' } },

  { id: 't-r-marcus-ballad', use: 'drill', tier: 'clean', setting: 'openmic', topic: 'a ballad sung pinched at an open mic',
    text: "Marcus sings a ballad at an open mic night. His notes are right and his breath lasts, but the sound is pinched, as if it comes out of his nose, and a friend in the front row winces. Backstage he holds his nose shut and sings an “ah”: the sound changes a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['the sound is pinched, as if it comes out of his nose', 'the sound changes a lot'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what is off.',
              T1: 'The pinch is there live, and holding his nose shut changes the sound a lot: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'This is not a surprise at a recording. A friend hears the pinch in the room, and the nose check changes the sound a lot.' } },

  { id: 't-r-sofia-part', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a choir part sung with the chin down',
    text: "Sofia, 15, sings her choir part with her chin down, reading the music. Her notes are right and her breath lasts, but her mouth is nearly closed. The sound is dull and stays back in her throat, and the singer beside her cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['her mouth is nearly closed', 'The sound is dull and stays back in her throat'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what the singer beside her notices.',
              T1: 'Her mouth is nearly closed and the sound stays back in her throat: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'The words are lost, but the cause is the closed mouth and the dull sound. In {o:mumbled} the mouth is open and the sound is clear.' } },

  { id: 't-r-marlon-road', use: 'drill', tier: 'clean', setting: 'car', topic: 'a fast road-trip song the kids cannot follow',
    text: "Marlon sings along with a fast song in the car, with his kids in the back. His notes are right and his breath lasts. His mouth is open and his voice is clear, but the ends of his words are soft or gone, and his kids cannot tell what he is singing.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['His mouth is open and his voice is clear', 'the ends of his words are soft or gone'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The words are what his kids lose.',
              T1: 'The sound is open and clear, but the ends of the words are gone: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'His mouth is open and the sound is clear, not dull. The words are lost at their ends.' } },

  /* ---------- Stage two: route, the stories whose details mislead ---------- */
  { id: 't-r-amir-hymn', use: 'drill', tier: 'misleading', setting: 'church', topic: 'a hymn that feels stuck, but is pinched',
    echo: 't-ines-mirror',
    text: "Amir, 41, is sure he sounds muffled when he sings a hymn at church: the sound seems small and stuck to him. His notes are right and his breath lasts. In the mirror in the hall afterward, his mouth is open wide and the sound is pinched, and when he holds his nose shut on an “ah” the sound changes a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['his mouth is open wide and the sound is pinched', 'when he holds his nose shut on an “ah” the sound changes a lot'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what bothers Amir.',
              T1: 'The mouth is open wide, so the sound is not dull, and the nose check changes it a lot: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'He feels the sound is stuck, but his mouth is open wide. A dull sound with a nearly closed mouth is what {o:muffled} needs.' },
    wouldChange: 'If his mouth barely opened and the sound stayed dull, it would be {o:muffled} however he describes it.' },

  { id: 't-r-hugo-slow-song', use: 'drill', tier: 'misleading', setting: 'car', topic: 'a slow song with the nose check at a red light',
    echo: 't-raj-red-light',
    text: "Hugo is singing along with a slow song in his car. His notes are right and his breath lasts. At a red light he holds his nose shut and sings an “ah”, and the sound hardly changes. His mouth is nearly closed, the sound is dull and stays back in his throat, and his wife cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['His mouth is nearly closed, the sound is dull and stays back in his throat'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what his wife cannot get past.',
              T1: 'His mouth is nearly closed and the sound is dull: {cue:T1}. Holding his nose shut changed little, so the nose is not the trouble.' },
    not: { outcome: 'nasal', why: 'He tries the nose check, as for a pinched sound, but the sound hardly changes. What shows is a nearly closed mouth and a dull sound.' },
    wouldChange: 'If holding his nose shut had changed the sound a lot, the answer would be {o:nasal}.' },

  { id: 't-r-kenji-video', use: 'drill', tier: 'misleading', setting: 'karaoke', topic: 'a fast karaoke song, filmed by a friend',
    echo: 't-wes-river-song',
    text: "Kenji sings a fast song about a river at karaoke while a friend films it. His notes are right and his breath lasts. Watching the video, he winces: his voice sounds thin and high, nothing like him. But his friend writes the words down from the video with no trouble, and holding his nose shut on an “ah” hardly changes the sound.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['his friend writes the words down from the video with no trouble', 'his voice sounds thin and high, nothing like him'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what Kenji dislikes.',
              T1: 'He dislikes only the video, and a listener can write the words down: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'A fast song about a river can bring to mind words that get lost. Here none are lost, since the friend wrote them all down.' },
    wouldChange: 'If his friend could not write the words down, the answer would be {o:mumbled}.' },

  { id: 't-r-elena-lullaby', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a lullaby recorded, with the word endings gone',
    echo: 't-mia-lullaby',
    text: "Elena records a lullaby for her baby daughter on her phone. Her notes are right and her breath lasts. On the playback she winces: her voice sounds thin and high. Her mouth is open and the sound is clear, but her t, d and s sounds are weak, so the words run together, and her husband cannot write them down.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['her t, d and s sounds are weak, so the words run together', 'her husband cannot write them down'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what Elena winces at.',
              T1: 'The sound is open, but the words run together and her husband cannot write them down: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'The thin, high sound on the playback is what everyone hears. The words that run together are a separate trouble.' },
    wouldChange: 'If every word came through clearly, the same thin, high playback would be {o:recorded}, and nothing would need fixing.' }
]);
