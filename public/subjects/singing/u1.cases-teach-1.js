// Singing, Unit One: stories shown inside cards, part one: one clean story for each kind (the story a meet card starts
// from) and one story for each kind's check. This is the subject's FIRST-QUESTION unit (lesson standard A15): a story
// carries route: { D1: [option] } and no outcome. Each meet story carries a name, so that a second look and a drill
// story can bring it back.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// cues.D1 is the exact phrase (or phrases) in the text that decides the first question; segments are the tappable
// pieces of a "tap the words" check, and note is shown if that piece is tapped in error.
// Every person is invented, and no song or singer is named.

FC.cases('singing', 'u1', [

  /* ---------- the story each meet card starts from ---------- */
  { id: 'g-fine-cooking', use: 'teach', tier: 'clean', setting: 'home', topic: 'cooking to an old record', name: 'Marta and the old record',
    text: "Marta, 68, sings along to her favorite old record while she cooks. Every note is where it should be, every word is clear, nothing in her throat is tight, and she has air to spare. She still frowns: 'The woman on the record sounds so much richer than I do.'",
    route: { D1: ['fine'] },
    cues: { D1: ['Every note is where it should be, every word is clear, nothing in her throat is tight, and she has air to spare', 'The woman on the record sounds so much richer than I do'] } },

  { id: 'g-high-flip', use: 'teach', tier: 'clean', setting: 'openmic', topic: 'a flip on the last high word', name: 'The flip at the open mic',
    text: "At an open mic night, Dario sings a chorus that climbs to its last word. The low part of the line is steady, and he has air to spare. Then on the high word his voice flips with a jolt into a thin, airy sound.",
    route: { D1: ['high'] },
    cues: { D1: ['The low part of the line is steady', 'on the high word his voice flips with a jolt into a thin, airy sound'] } },

  { id: 'g-breath-hymn', use: 'teach', tier: 'clean', setting: 'church', topic: 'breaths grabbed in the middle of words', name: 'The hymn with no room to breathe',
    text: "At church, Walter sings a hymn with a long line. His notes are right, but he runs out of air before the end of the line, grabs a breath in the middle of a word, and the line comes out in chopped pieces.",
    route: { D1: ['breath'] },
    cues: { D1: 'runs out of air before the end of the line, grabs a breath in the middle of a word' } },

  { id: 'g-pitch-third', use: 'teach', tier: 'clean', setting: 'car', topic: 'unsure of the third note', name: 'The third note',
    text: "Kenji is learning a song in the car to sing at his sister's wedding. The chorus is easy to reach and he has plenty of air, but its third note always sounds a shade off to him. He is not sure it is the song's note, and he keeps sliding up into it to find out.",
    route: { D1: ['pitch'] },
    cues: { D1: "its third note always sounds a shade off to him. He is not sure it is the song's note" } },

  { id: 'g-tone-muffled', use: 'teach', tier: 'clean', setting: 'choir', topic: 'a dull sound with the mouth barely open', name: 'The dull sound',
    text: "In the choir, Owen sings with his mouth barely open. His notes are right and he has air to spare, but the sound is dull and stays back in his throat, and the singers next to him cannot make out his words.",
    route: { D1: ['tone'] },
    cues: { D1: ['sings with his mouth barely open', 'the sound is dull and stays back in his throat, and the singers next to him cannot make out his words'] } },

  /* ---------- the story each check asks about ---------- */
  { id: 'g-fine-birthday', use: 'check', tier: 'clean', setting: 'party', topic: 'a birthday song and the radio',
    text: "At his daughter's birthday party, Jonas sings a song he knows well. The notes are right, nothing in his throat is tight and every word is clear. Afterward he sighs: 'I wish I sounded like the guy on the radio.'",
    route: { D1: ['fine'] },
    cues: { D1: 'I wish I sounded like the guy on the radio' },
    segments: [
      { text: "At his daughter's birthday party, Jonas sings a song he knows well", note: 'That says where he is and what he sings. It does not say what bothers him.' },
      { text: 'The notes are right, nothing in his throat is tight and every word is clear', note: 'Those words say what is fine. The question asks for what bothers him.' },
      { text: 'I wish I sounded like the guy on the radio' }
    ],
    reason: { D1: 'His only complaint is a comparison with a singer on the radio.' } },

  { id: 'g-high-squeeze', use: 'check', tier: 'clean', setting: 'karaoke', topic: 'a clamped throat on the highest word',
    text: "At a karaoke night, Brianna sings a chorus that climbs. The low part of every line is easy. On the highest word her throat clamps, the sound goes thin and strangled, and her throat aches afterward.",
    route: { D1: ['high'] },
    cues: { D1: 'On the highest word her throat clamps, the sound goes thin and strangled' },
    reason: { D1: 'The low part is easy and the trouble starts where the line climbs: {cue:D1}. Nothing in the story is about the air or the note.' } },

  { id: 'g-breath-leak', use: 'check', tier: 'clean', setting: 'shower', topic: 'air leaking out with the sound',
    text: "In the shower, Gwen sings the verse of a slow song. Her notes are right and the top is easy. But she can hear air leaking out with every note, and a long note is gone in two seconds.",
    route: { D1: ['breath'] },
    cues: { D1: 'she can hear air leaking out with every note, and a long note is gone in two seconds' },
    segments: [
      { text: 'In the shower, Gwen sings the verse of a slow song', note: 'That says where she is. It does not say what goes wrong.' },
      { text: 'Her notes are right and the top is easy', note: 'Those words say what is fine, so the trouble is not the note or the top.' },
      { text: 'But she can hear air leaking out with every note, and a long note is gone in two seconds' }
    ],
    reason: { D1: 'Air leaks out with the sound and runs out fast.' } },

  { id: 'g-pitch-hunt', use: 'check', tier: 'clean', setting: 'choir', topic: 'a start without the note in her head',
    text: "In choir rehearsal the conductor plays the first note of Carla's part. Carla starts singing before she has it in her head, moves her voice up and down until it settles, and is not sure it settled on the right note.",
    route: { D1: ['pitch'] },
    cues: { D1: 'starts singing before she has it in her head, moves her voice up and down until it settles, and is not sure it settled on the right note' },
    reason: { D1: 'What Carla doubts is the note itself: {cue:D1}. Nothing in the story is about the top notes or the air.' } },

  { id: 'g-tone-lullaby', use: 'check', tier: 'clean', setting: 'kids', topic: 'the ends of the words let go',
    text: "At bedtime, Hal sings a long lullaby to his son. His notes are right and he has plenty of air, but he lets the ends of the words fall away, and his son says, 'I can't tell what you're saying.'",
    route: { D1: ['tone'] },
    cues: { D1: "he lets the ends of the words fall away, and his son says, 'I can't tell what you're saying.'" },
    segments: [
      { text: 'At bedtime, Hal sings a long lullaby to his son', note: 'That says where he is and who is listening. It does not say what is wrong.' },
      { text: 'His notes are right and he has plenty of air', note: 'Those words say what is fine, so the trouble is not the note or the air.' },
      { text: "he lets the ends of the words fall away, and his son says, 'I can't tell what you're saying.'" }
    ],
    reason: { D1: 'The notes and the air are fine, and the words run together.' } }
]);
