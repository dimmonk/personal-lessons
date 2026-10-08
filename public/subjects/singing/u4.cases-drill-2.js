// Singing, Unit Four: drill stories for the route stage: the whole route alone. The clean stories come first, then the
// stories whose telling misleads. echo names a teaching story of a DIFFERENT name whose telling the story is built to bring
// back; also lists the answer that loses to the story's own by the key's tie-break. A note that was fine is in every group
// that has one.

FC.cases('singing', 'u4', [

  /* ---------- Stage four: route, clean ---------- */
  { id: 'p-r-onnote-1', use: 'drill', tier: 'clean', setting: 'openmic', topic: 'a frown at an open mic',
    text: "Imani sings at an open mic, and a man near the stage frowns during her second song. She wonders whether she was off, so at home she plays the song's first note on a piano app and sings hers beside it. The two sound like one note, and she does not have to slide.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['She wonders whether she was off'], P1: ['The two sound like one note, and she does not have to slide'] },
    reason: { D1: 'Imani asks whether her note was right: {cue:D1}. The frown is all she has to go on.',
              P1: 'The check found a match, so the frown told her nothing about the note: {cue:P1}.' },
    not: { outcome: 'flat', why: 'No slide up was needed. The frown made it feel low, but the check found nothing under.' } },

  { id: 'p-r-flat-1', use: 'drill', tier: 'clean', setting: 'party', topic: 'a party song’s last line that sagged',
    text: "At a party Ben sings a song for his friends, and he feels the last line sag. Afterward he plays its note on a piano app, holds it, and sings his own. His note is a little lower, and he slides up to match it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: ['he feels the last line sag'], P1: ['His note is a little lower, and he slides up to match it'] },
    reason: { D1: 'Ben’s worry is the notes of the last line: {cue:D1}.',
              P1: 'He slid up to reach the app’s note, so he was under it: {cue:P1}.' },
    not: { outcome: 'sharp', why: 'He slid up, not down. A note over the song’s note would need a slide down.' } },

  { id: 'p-r-sharp-1', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a choir part that drifted up',
    text: "Hana sings in a choir, and the director says her part drifted. Hana plays the part's note on a piano app and sings hers beside it. Hers is a little higher, and she has to slide down to meet it. She had been gripping her folder with both hands.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { D1: ['the director says her part drifted'], P1: ['Hers is a little higher, and she has to slide down to meet it'] },
    reason: { D1: 'The director’s remark is about her notes: {cue:D1}.',
              P1: 'She slid down to reach the app’s note, so she was over it: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'The check found a gap, so the note was not fine. She had to slide down to meet it.' } },

  { id: 'p-r-scoop-1', use: 'drill', tier: 'clean', setting: 'car', topic: 'a radio song recorded in the car',
    text: "Luis wonders whether his notes are right on the songs he sings on his commute, so he records one in the car. On the playback every note starts low and slides up into place.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: ['Luis wonders whether his notes are right'], P1: ['every note starts low and slides up into place'] },
    reason: { D1: 'Luis doubts the notes: {cue:D1}.',
              P1: 'Each note moves up into place from underneath: {cue:P1}.' },
    not: { outcome: 'flat', why: 'A low note stays where it is. His notes move up until they arrive.' } },

  { id: 'p-r-guess-1', use: 'drill', tier: 'clean', setting: 'church', topic: 'a hymn sung alone after a year',
    text: "Aiko is asked to sing the first line of a hymn alone at church, and she is not sure she remembers the notes, since she has not heard it for a year. She starts without humming the first note, and her voice wanders until it finds something. Partway through the line she is on a different note than the organ.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: ['she is not sure she remembers the notes'], P1: ['She starts without humming the first note, and her voice wanders until it finds something'] },
    reason: { D1: 'Aiko doubts that she has the notes: {cue:D1}.',
              P1: 'No note was in her head, so her voice searched: {cue:P1}.' },
    not: { outcome: 'flat', why: 'Her voice does not sit a little under the organ’s note. It wanders until it finds one.' } },

  /* ---------- Stage four: route, misleading ---------- */
  { id: 'p-r-onnote-2', use: 'drill', tier: 'misleading', setting: 'kids', topic: 'a lullaby sung very softly',
    echo: 'p-mt-flat',
    text: "Yusuf sings a lullaby very softly so he will not wake the baby, and later on the baby monitor recording it sounds low to him. He plays the lullaby's first note on a piano app, holds it, and sings beside it. The two sound like one note, and he does not slide.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['on the baby monitor recording it sounds low to him'], P1: ['The two sound like one note, and he does not slide'] },
    reason: { D1: 'Yusuf doubts the note after hearing the recording: {cue:D1}.',
              P1: 'He ran {t:notecheck} and nothing had to move: {cue:P1}.' },
    not: { outcome: 'flat', why: 'Singing softly can lead to a low note, but here the check found no gap. A soft voice is not proof.' },
    wouldChange: 'If he had needed to slide up to meet the app’s note, the answer would be {a:P1.under}.' },

  { id: 'p-r-flat-2', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a coworker’s kind word',
    echo: 'p-mt-onnote',
    text: "A coworker tells Dana her song at the office party sounded fine. Dana is not so sure, so at home she plays the chorus's first note on a piano app and sings hers beside it. Hers is a little lower, and she has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: ['Dana is not so sure'], P1: ['Hers is a little lower, and she has to slide up to meet it'] },
    reason: { D1: 'Dana doubts the note even after a kind word: {cue:D1}.',
              P1: 'She had to slide up to reach the song’s note, whatever her coworker said: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'Her coworker liked it, but the check showed a gap. A kind word does not move a note.' } },

  { id: 'p-r-guess-2', use: 'drill', tier: 'misleading', setting: 'openmic', topic: 'a nervous start that ended high',
    echo: 'p-mt-sharp', also: ['over'],
    text: "Gil's song at an open mic sounded off to him. He was nervous, and he started before he had the first note in his head. His voice searched around for it and settled a little above the song's note, and afterward he slid down to match it on a piano app.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: ['sounded off to him'], P1: ['he started before he had the first note in his head', 'His voice searched around for it'] },
    reason: { D1: 'Gil doubts the notes of his song: {cue:D1}.',
              P1: 'No note was in his head and his voice searched, so the hunt is the answer, even though it settled high: {cue:P1}.' },
    not: { outcome: 'sharp', why: 'He did end up above the song’s note. But the note was never in his head, so the search is the answer.' },
    wouldChange: 'If he had heard the first note in his head and still ended up high, the answer would be {a:P1.over}.' },

  { id: 'p-r-scoop-2', use: 'drill', tier: 'misleading', setting: 'choir', topic: 'an anthem sung from memory',
    echo: 'p-mt-guessing',
    text: "Marta has sung the same anthem with her choir for years, and she knows every note by heart. She records a rehearsal and wonders whether she is hitting her notes. On the recording, the start of every note slides up from underneath before it settles, as if her voice were looking for it.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: ['wonders whether she is hitting her notes'], P1: ['she knows every note by heart', 'the start of every note slides up from underneath before it settles'] },
    reason: { D1: 'Marta doubts her notes: {cue:D1}.',
              P1: 'She knows the notes, so the slide is a habit and not a search: {cue:P1}.' },
    not: { outcome: 'guessing', why: 'The slide looks like a search, but Marta knows every note by heart. The note was in her head before she sang.' },
    wouldChange: 'If she had started with no note in her head, the answer would be {a:P1.hunt}.' }
]);
