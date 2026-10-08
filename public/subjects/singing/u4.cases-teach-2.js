// Singing, Unit Four: stories shown inside cards, part two: a slide up into the note, hunting for the note, the look-alike
// pair between a slide and a steady miss, the two named exceptions where the hunt wins (each lists the loser in also),
// the check on the unit's question, and the worked story. Field guide: see u4.cases-teach-1.js.

FC.cases('singing', 'u4', [

  /* ---------- Scooping ---------- */
  { id: 'p-mt-scooping', use: 'teach', tier: 'clean', setting: 'home', topic: 'long notes that slide up from underneath', name: 'The swoop',
    text: "Dev loves a slow song, and he sings along with it while he records himself on his phone. On the playback, every long note starts underneath and slides up into place, the way the singer on the record does it. He does reach each note, but late.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { P1: ['every long note starts underneath and slides up into place', 'He does reach each note, but late'] } },

  { id: 'p-c-scooping', use: 'check', tier: 'clean', setting: 'karaoke', topic: 'a friend’s video of a karaoke song',
    text: "A friend films Ines singing at karaoke. Watching it back, Ines hears that each note of the first line starts low and slides up until it reaches the right note. Once it gets there, it holds steady.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { P1: ['each note of the first line starts low and slides up until it reaches the right note'] },
    reason: { P1: 'The notes start low and move up into place, then hold: {cue:P1}.' } },

  /* ---------- the look-alike pair: a slide against a steady miss, the same person and the same song ---------- */
  { id: 'p-lk-ballad-slide', use: 'teach', tier: 'clean', setting: 'home', topic: 'a slow song whose notes slide up', name: 'The sliding ballad',
    text: "Ravi records himself singing the first line of a slow song. On the playback, every long note begins underneath and slides up until it reaches the note, so each one arrives late.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { P1: ['every long note begins underneath and slides up until it reaches the note'] } },

  { id: 'p-lk-ballad-flat', use: 'teach', tier: 'clean', setting: 'home', topic: 'a slow song that sat low', name: 'The low ballad',
    text: "Ravi records himself singing the first line of a slow song, then plays the line's note on a piano app beside the playback. His long notes start steady and stay put, but each one sits a little lower than the app's, and he has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { P1: ["His long notes start steady and stay put, but each one sits a little lower than the app's", 'he has to slide up to meet it'] } },

  /* ---------- Guessing the note ---------- */
  { id: 'p-mt-guessing', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a lullaby started with no note in mind', name: 'The wandering start',
    text: "Mei sings a lullaby to her class of four-year-olds, and she starts singing before she has the first note in her head. Her voice wanders up and down until it finds something that sounds right, and by the end of the line it is on a different note than the song's.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { P1: ['starts singing before she has the first note in her head', 'Her voice wanders up and down until it finds something that sounds right'] } },

  { id: 'p-c-guessing', use: 'check', tier: 'clean', setting: 'party', topic: 'a party song started from nothing',
    text: "At a party everyone asks Sol to start the song. He starts singing before he has thought about the first note, and for the first few words his voice moves up and down until it lands somewhere.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { P1: ['starts singing before he has thought about the first note', 'his voice moves up and down until it lands somewhere'] },
    reason: { P1: 'Sol began with no note in mind, and his voice went looking: {cue:P1}.' } },

  /* ---------- the two named exceptions: the hunt wins ---------- */
  { id: 'p-x-guess-low', use: 'teach', tier: 'misleading', setting: 'choir', topic: 'a new choir song started cold', name: 'The new choir song', also: ['under'],
    text: "A new song comes up at choir rehearsal. Joy starts her part before she has heard its first note. Her voice drifts around until it settles, and it settles a little lower than the piano's note. She has to slide up to match it.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { P1: ['Joy starts her part before she has heard its first note', 'Her voice drifts around until it settles'] },
    segments: [
      { text: 'A new song comes up at choir rehearsal.', note: 'That is the setting. It does not say how Joy began.' },
      { text: 'Joy starts her part before she has heard its first note.' },
      { text: "Her voice drifts around until it settles, and it settles a little lower than the piano's note.", note: 'This looks like {o:flat}, which is why it tempts. But the note was never in her head, so this is only where the hunt ended.' },
      { text: 'She has to slide up to match it.', note: 'That is what the check shows. It tells you where the hunt ended, not why.' }
    ] },

  { id: 'p-x-guess-slide', use: 'teach', tier: 'misleading', setting: 'karaoke', topic: 'a karaoke line started with no note', name: 'The search from below', also: ['slide'],
    text: "Kofi's name comes up at karaoke. When the music starts he begins the first line without any note in his head. His voice begins low and slides up until it lands on one, and by then half the line is gone.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { P1: ['begins the first line without any note in his head', 'His voice begins low and slides up until it lands on one'] },
    segments: [
      { text: "Kofi's name comes up at karaoke.", note: 'That is the setting. It does not say how he began.' },
      { text: 'When the music starts he begins the first line without any note in his head.' },
      { text: 'His voice begins low and slides up until it lands on one, and by then half the line is gone.', note: 'This sounds like {o:scooping}. But he slides because he has no note in his head, not out of habit.' }
    ] },

  /* ---------- the check on the unit's question ---------- */
  { id: 'p-c-how', use: 'check', tier: 'clean', setting: 'church', topic: 'a hymn verse sung a little high',
    text: "Alma sings the second verse of a hymn at church and thinks it felt off. Afterward she plays the verse's first note on the church piano, holds it, and sings hers. Hers is a little higher than the piano's, and she has to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { P1: ["Hers is a little higher than the piano's", 'she has to slide down to meet it'] },
    reason: { P1: 'Alma had to slide down to reach the piano’s note, so she was over it: {cue:P1}.' } },

  /* ---------- the worked story: the wince and the tired voice point at a low note, the check says otherwise ---------- */
  { id: 'p-w-tired', use: 'teach', tier: 'misleading', setting: 'party', topic: 'a tired singer sure she went flat',
    text: "At a party, Dara sings along with the song everyone knows, and the friend beside her winces on the chorus. Dara has been tired all week and her voice feels heavy, so she is sure she went flat. The next morning she pauses the recording on the chorus's first note and holds it, sings her own note beside it, and the two sound like one note.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['the friend beside her winces on the chorus', 'so she is sure she went flat'], P1: ['sings her own note beside it, and the two sound like one note'] } }
]);
