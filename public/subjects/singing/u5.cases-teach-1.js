// Singing, Unit Five: stories shown inside cards, part one: the voice from outside, and the pinched sound.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route is { D1: ['tone'], T1: [...] }: every story of this unit is about how the words sound (the first question's answer),
// and the unit's own question, what the words sound like, gives the name. cues.T1 is the exact words that decide it.
// Every person and song is invented. Stories are written the way a singer would tell them.

FC.cases('singing', 'u5', [

  /* ---------- Your voice from outside ---------- */
  { id: 't-mia-lullaby', use: 'teach', tier: 'clean', setting: 'home', topic: 'a lullaby recorded for her niece', name: 'The lullaby playback',
    text: "Mia is learning a lullaby for her baby niece, so she records one verse on her phone. Every note is right and her breath lasts the whole verse. On the playback her voice sounds thin and high, and she hardly knows it is hers. She sings the line again in front of the mirror: her mouth opens easily, every word is clear, and when she holds her nose shut on an “ah” the sound barely changes.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Every note is right and her breath lasts the whole verse',
            T1: ['On the playback her voice sounds thin and high', 'her mouth opens easily, every word is clear', 'when she holds her nose shut on an “ah” the sound barely changes'] } },

  { id: 't-c-dev-birthday-video', use: 'check', tier: 'clean', setting: 'party', topic: 'a birthday song filmed at a party',
    text: "At a party, Dev’s friend films him singing the first line of a birthday song. Dev’s notes are right and his breath lasts. Watching the video later, he winces: his voice sounds thinner and higher than he expected. His mouth opens easily, every word is clear, and holding his nose shut on an “ah” changes nothing.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Dev’s notes are right and his breath lasts', T1: 'his voice sounds thinner and higher than he expected' },
    segments: [
      { text: 'At a party, Dev’s friend films him singing the first line of a birthday song', note: 'That is how the video was made. It does not say what bothers Dev.' },
      { text: 'Dev’s notes are right and his breath lasts', note: 'That rules out the notes and the air. The complaint is about the sound.' },
      { text: 'Watching the video later, he winces: his voice sounds thinner and higher than he expected' },
      { text: 'His mouth opens easily, every word is clear, and holding his nose shut on an “ah” changes nothing', note: 'True, and it shows the sound itself is fine. It does not say where the complaint comes from.' }
    ],
    reason: { T1: 'Dev’s complaint is the video, not the singing: {cue:T1}.' } },

  /* ---------- the look-alike pair: the same person and the same camp song, heard from outside and pinched ---------- */
  { id: 't-lk-nora-recorded', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a camp song recorded to teach the class',
    text: "Nora is learning a camp song to sing with her class of seven-year-olds, so she records herself on her phone. Her notes are right and her breath lasts. On the playback she thinks she sounds thin and high, and she dislikes it. Holding her nose shut on an “ah” hardly changes the sound, and the words are clear.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['On the playback she thinks she sounds thin and high', 'Holding her nose shut on an “ah” hardly changes the sound'] } },

  { id: 't-lk-nora-nasal', use: 'teach', tier: 'clean', setting: 'kids', topic: 'a camp song sung pinched',
    text: "Nora is learning a camp song to sing with her class of seven-year-olds, so she records herself on her phone. Her notes are right and her breath lasts. Even while she sings, the sound is pinched, as if it comes out of her nose. Holding her nose shut on an “ah” changes the sound a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['Even while she sings, the sound is pinched, as if it comes out of her nose', 'Holding her nose shut on an “ah” changes the sound a lot'] } },

  /* ---------- A nasal sound ---------- */
  { id: 't-raj-red-light', use: 'teach', tier: 'clean', setting: 'car', topic: 'a slow song sung pinched in the car', name: 'The red light',
    text: "Raj is singing along to a slow song in his car. Every note is right and his breath lasts, but he can hear that his voice is pinched, as if it comes out of his nose. At a red light he holds his nose shut and sings an “ah”: the sound changes a lot. His mouth is open and the words are clear.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'Every note is right and his breath lasts',
            T1: ['he can hear that his voice is pinched, as if it comes out of his nose', 'he holds his nose shut and sings an “ah”: the sound changes a lot'] } },

  { id: 't-c-beth-warmup', use: 'check', tier: 'clean', setting: 'choir', topic: 'a choir warm-up sung pinched',
    text: "Beth sings the opening line of a warm-up with her choir. Her notes are right and her breath lasts, but her voice sounds pinched, as if it comes out of her nose, and she hears it while she sings, not only on a recording. When she holds her nose shut on an “ah”, the sound changes a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'Her notes are right and her breath lasts',
            T1: ['her voice sounds pinched, as if it comes out of her nose', 'the sound changes a lot'] },
    reason: { T1: 'Beth hears the pinch while she sings, and holding her nose shut changes the sound a lot: {cue:T1}.' } }
]);
