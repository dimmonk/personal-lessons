// Singing, Unit Four: fresh stories held back for later days (lesson standard E9, V44). Two for each name, because this is an
// action subject. A name that is due comes back as a story the learner has not seen, beside a story of the name they most
// often take it for. Every story carries marked words and a reason for both questions, because it is run as a whole route.

FC.cases('singing', 'u4', [

  /* ---------- On the note ---------- */
  { id: 'p-ret-onnote-1', use: 'return', tier: 'clean', setting: 'home', topic: 'a bridge that sounded flat on a recording',
    text: "Abe records himself singing in the living room, and on the playback the bridge sounds flat to him. He plays the bridge's first note on a piano app, holds it, and sings his own beside it. The two sound like one note, and he does not slide.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['on the playback the bridge sounds flat to him'], P1: ['The two sound like one note, and he does not slide'] },
    reason: { D1: 'Abe doubts the notes of the bridge: {cue:D1}.',
              P1: 'The recording made it sound low, but the check found a match: {cue:P1}.' },
    not: { outcome: 'flat', why: 'He did not have to slide up, so there was no gap to fix.' } },

  { id: 'p-ret-onnote-2', use: 'return', tier: 'varied', setting: 'party', topic: 'a guest’s remark after a party song',
    text: "At a party a guest tells Priti, 'You were a bit off on that one.' Priti is not sure, so the next day she plays the song's last note on a piano app, holds it, and sings hers. The two sound the same, and she does not have to move her voice.",
    outcome: 'onnote', route: { D1: ['pitch'], P1: ['match'] },
    cues: { D1: ['Priti is not sure'], P1: ['The two sound the same, and she does not have to move her voice'] },
    reason: { D1: 'Priti doubts the note after the guest’s remark: {cue:D1}.',
              P1: 'The check found the two the same: {cue:P1}.' },
    not: { outcome: 'sharp', why: 'She did not have to slide down. A remark about being off does not show that it was true.' } },

  /* ---------- Singing flat ---------- */
  { id: 'p-ret-flat-1', use: 'return', tier: 'clean', setting: 'choir', topic: 'a choir part after a cold',
    text: "Soraya has had a cold, and her part in rehearsal feels heavy and low to her. The director plays her note on the piano, and she sings hers beside it. Hers is a little lower, and she slides up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: ['her part in rehearsal feels heavy and low to her'], P1: ['Hers is a little lower, and she slides up to meet it'] },
    reason: { D1: 'Soraya’s worry is the notes of her part: {cue:D1}.',
              P1: 'She slid up to reach the piano’s note, so she was under it: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'The check showed a gap. A voice that feels low is not always low, but hers was.' } },

  { id: 'p-ret-flat-2', use: 'return', tier: 'varied', setting: 'openmic', topic: 'a very soft song at an open mic',
    text: "Calvin sings very softly in his open mic slot because he is shy, and afterward he wonders whether he was off. He plays the song's first note on a piano app and sings his own beside it. His is a little lower, and he has to slide up to meet it.",
    outcome: 'flat', route: { D1: ['pitch'], P1: ['under'] },
    cues: { D1: ['he wonders whether he was off'], P1: ['His is a little lower, and he has to slide up to meet it'] },
    reason: { D1: 'Calvin doubts his notes: {cue:D1}.',
              P1: 'He slid up to reach the app’s note: {cue:P1}. Singing very softly is a usual cause.' },
    not: { outcome: 'scooping', why: 'His note stayed put, a little low. It did not start low and slide up on its own.' } },

  /* ---------- Singing sharp ---------- */
  { id: 'p-ret-sharp-1', use: 'return', tier: 'clean', setting: 'karaoke', topic: 'a loud last chorus at karaoke',
    text: "Rita is excited at karaoke and sings the last chorus loud, and her friend says it was off. Later Rita plays the chorus's note on a piano app and sings hers beside it. Hers is a little higher, and she has to slide down to meet it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { D1: ['her friend says it was off'], P1: ['Hers is a little higher, and she has to slide down to meet it'] },
    reason: { D1: 'The friend’s remark is about the notes: {cue:D1}.',
              P1: 'She slid down to reach the app’s note, so she was over it: {cue:P1}.' },
    not: { outcome: 'flat', why: 'She slid down, not up, so her note was over the song’s note and not under it.' } },

  { id: 'p-ret-sharp-2', use: 'return', tier: 'varied', setting: 'church', topic: 'a nervous first solo',
    text: "Elias is nervous about his first solo at church, and his jaw is tight. Afterward he wonders about the note. He plays it on the church piano and sings his own beside it. His is a little higher, and he slides down to match it.",
    outcome: 'sharp', route: { D1: ['pitch'], P1: ['over'] },
    cues: { D1: ['he wonders about the note'], P1: ['His is a little higher, and he slides down to match it'] },
    reason: { D1: 'Elias doubts the note itself: {cue:D1}.',
              P1: 'He slid down to reach the piano’s note, so he was over it: {cue:P1}.' },
    not: { outcome: 'onnote', why: 'The check found a gap, and he slid down to meet it. The note was not fine.' } },

  /* ---------- Scooping ---------- */
  { id: 'p-ret-scoop-1', use: 'return', tier: 'clean', setting: 'car', topic: 'copying the swoops of a favorite record',
    text: "Pia likes to sing like the singers on her favorite records, so she records herself in the car to see how close she gets. Hearing it back, she wonders whether her notes are right. Every note starts low and slides up to the right place.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: ['she wonders whether her notes are right'], P1: ['Every note starts low and slides up to the right place'] },
    reason: { D1: 'Pia doubts her notes: {cue:D1}.',
              P1: 'Each note starts low and moves up until it arrives: {cue:P1}.' },
    not: { outcome: 'flat', why: 'Her notes do reach the right place. A low note would stay low.' } },

  { id: 'p-ret-scoop-2', use: 'return', tier: 'varied', setting: 'kids', topic: 'a bedtime song with slides',
    text: "Jonas sings the same bedtime song for his kids every night, and he knows the tune by heart. His wife says the notes sound odd, so he records it. On the playback each note starts underneath and slides up into place.",
    outcome: 'scooping', route: { D1: ['pitch'], P1: ['slide'] },
    cues: { D1: ['His wife says the notes sound odd'], P1: ['he knows the tune by heart', 'each note starts underneath and slides up into place'] },
    reason: { D1: 'His wife’s remark makes Jonas doubt the notes: {cue:D1}.',
              P1: 'He knows the tune, so the slide is a habit and not a search: {cue:P1}.' },
    not: { outcome: 'guessing', why: 'No note was missing from his head. The slide up is a habit.' } },

  /* ---------- Guessing the note ---------- */
  { id: 'p-ret-guess-1', use: 'return', tier: 'clean', setting: 'party', topic: 'a song hardly known at a party',
    text: "A friend at a party asks Omari to sing a song he hardly knows, and he is not sure he has the tune. He starts without any note in his head, and his voice wanders until it finds one.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: ['he is not sure he has the tune'], P1: ['He starts without any note in his head, and his voice wanders until it finds one'] },
    reason: { D1: 'Omari doubts that he has the notes: {cue:D1}.',
              P1: 'He began with no note, and his voice went looking: {cue:P1}.' },
    not: { outcome: 'flat', why: 'There is no steady note a little under the song’s note. His voice is still searching.' } },

  { id: 'p-ret-guess-2', use: 'return', tier: 'varied', setting: 'home', topic: 'a new song learned from a video',
    text: "Lena learns a new song from a video and sings it right away, though she is not sure of the first note. Her voice moves around, up and down, until it settles somewhere.",
    outcome: 'guessing', route: { D1: ['pitch'], P1: ['hunt'] },
    cues: { D1: ['she is not sure of the first note'], P1: ['sings it right away', 'Her voice moves around, up and down, until it settles somewhere'] },
    reason: { D1: 'Lena is unsure of the notes: {cue:D1}.',
              P1: 'She sang before the note was in her head, and her voice searched: {cue:P1}.' },
    not: { outcome: 'sharp', why: 'Where her voice stopped does not decide it. No note was in her head, so the search is the answer.' } }
]);
