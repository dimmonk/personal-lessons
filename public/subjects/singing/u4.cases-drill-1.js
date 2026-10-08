// Singing, Unit Four: drill stories for the piece stage. It gives the unit's one question alone, on a new story. Every story
// carries marked words and a reason for both questions, because the same stories can also be asked as a whole route.
// A note that was fine is in every stage.

FC.cases('singing', 'u4', [

  /* ---------- Stage two: the unit's one question alone, on a new story ---------- */
  { id: 'p-p-onnote', use: 'drill', tier: 'clean', setting: 'shower', topic: 'a shower song that sounded off',
    text: "Greta sings in the shower, and a line she loves sounds off to her. She plays its note on a piano app, holds it, and sings hers beside it. The two sound like one note, and she does not slide at all.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['a line she loves sounds off to her'], P1: ['The two sound like one note, and she does not slide at all'] },
    reason: { D1: 'Greta wonders whether the line is right: {cue:D1}. Nothing else bothers her.',
              P1: 'Greta ran {t:notecheck} and nothing had to move: {cue:P1}.' },
    not: { outcome: 'flat', why: 'The line only sounded off to her. The check found no gap, so there was nothing to lift.' } },

  { id: 'p-p-flat', use: 'drill', tier: 'clean', setting: 'car', topic: 'a chorus end that sagged in the car',
    text: "Diego sings along with the radio in the car, and the end of the chorus sounds low to him. At a stop sign he plays that note on a piano app on his phone, holds it, and sings his own. His is a little lower, and he has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: ['the end of the chorus sounds low to him'], P1: ['His is a little lower, and he has to slide up to meet it'] },
    reason: { D1: 'Diego doubts the note itself: {cue:D1}.',
              P1: 'He had to slide up to reach the song’s note, so he was under it: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'There was a gap, and he had to slide. A match would have needed no slide.' } },

  { id: 'p-p-sharp', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a loud counting song with the class',
    text: "Noor sings a counting song with her class of kids, and she is excited and loud. The assistant says it sounded a little off, so Noor plays the song's first note on a keyboard and sings hers beside it. Hers is a little higher, and she has to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { D1: ['it sounded a little off'], P1: ['Hers is a little higher, and she has to slide down to meet it'] },
    reason: { D1: 'The assistant’s remark makes Noor doubt the notes: {cue:D1}.',
              P1: 'She had to slide down to reach the song’s note, so she was over it: {cue:P1}.' },
    not: { outcome: 'flat', why: 'She slid down, not up. A note under the song’s note would need a slide up.' } },

  { id: 'p-p-scoop', use: 'drill', tier: 'clean', setting: 'church', topic: 'a hymn recorded at church',
    text: "Walter wonders whether he is hitting each note of a hymn, so he records himself at church. On the playback, the start of every note slides up from underneath, and each note reaches the right place late.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: ['Walter wonders whether he is hitting each note of a hymn'], P1: ['the start of every note slides up from underneath', 'each note reaches the right place late'] },
    reason: { D1: 'Walter doubts the notes themselves: {cue:D1}.',
              P1: 'Each note moves up into place instead of starting there: {cue:P1}.' },
    not: { outcome: 'flat', why: 'Each note does reach the right place. A note that stayed low would not get there.' } },

  { id: 'p-p-guess', use: 'drill', tier: 'clean', setting: 'home', topic: 'a song heard only once',
    text: "Tess wants to sing a song she heard only once. She is not sure how it starts, but she begins anyway, and her voice moves around for the whole first line, looking for the tune.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: ['She is not sure how it starts'], P1: ['she begins anyway, and her voice moves around for the whole first line, looking for the tune'] },
    reason: { D1: 'Tess is unsure of the notes: {cue:D1}.',
              P1: 'She began with no clear note, and her voice went looking: {cue:P1}.' },
    not: { outcome: 'scooping', why: 'Her voice does not slide into a note it knows. It moves around because no note is in her head.' } }
]);
