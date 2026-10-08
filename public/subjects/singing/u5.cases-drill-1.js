// Singing, Unit Five: drill stories for the piece stage. It gives the unit's one question alone, on a new story, one name at
// a time, with the voice from outside among them. Field guide: see u5.cases-teach-1.js.
// Every story carries marked words and a reason for both questions, so it can also be run as a whole route.

FC.cases('singing', 'u5', [

  /* ---------- Stage one: the unit's one question alone, on a new story ---------- */
  { id: 't-p-greta-voice-memo', use: 'drill', tier: 'clean', setting: 'car', topic: 'a hymn line in a voice memo, played back in the car',
    text: "Greta, 68, sings a line of a hymn into a voice memo while she waits in the car, then plays it back. Her notes are right and her breath lasts, but she hates how thin and high she sounds. Her mouth opens easily and every word is clear.",
    outcome: 'recorded', route: { D1: ['tone'], T1: ['strange'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['she hates how thin and high she sounds', 'every word is clear'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what bothers Greta.',
              T1: 'Greta dislikes only the playback, and her words are clear: {cue:T1}.' },
    not: { outcome: 'nasal', why: 'Nothing is pinched. She dislikes how she sounds on the recording, and the words are clear.' } },

  { id: 't-p-luis-love-song', use: 'drill', tier: 'clean', setting: 'karaoke', topic: 'a love song sung pinched at karaoke',
    text: "Luis sings a love song at karaoke. His notes are right and his breath lasts, but his friend says the sound is pinched, as if it comes out of his nose. When Luis holds his nose shut and sings an “ah”, the sound changes a lot.",
    outcome: 'nasal', route: { D1: ['tone'], T1: ['pinched'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['the sound is pinched, as if it comes out of his nose', 'the sound changes a lot'] },
    reason: { D1: 'Nothing is wrong with the notes or the air: {cue:D1}. The sound is what is off.',
              T1: 'The sound is pinched, and holding the nose shut changes it a lot: {cue:T1}.' },
    not: { outcome: 'recorded', why: 'The pinch is there while he sings, not only on a recording, and holding his nose shut changes the sound a lot.' } },

  { id: 't-p-priya-nursery', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a nursery song sung with the chin down',
    text: "Priya sings a nursery song to the children in her daycare, but she looks down at the floor and her mouth barely opens. Her notes are right and her breath lasts. The sound is dull and stays back in her throat, and the parents standing at the back cannot make out the words.",
    outcome: 'muffled', route: { D1: ['tone'], T1: ['dull'] },
    cues: { D1: 'Her notes are right and her breath lasts', T1: ['her mouth barely opens', 'The sound is dull and stays back in her throat'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The sound is what the parents notice.',
              T1: 'Her mouth hardly opens and the sound stays in her throat: {cue:T1}.' },
    not: { outcome: 'mumbled', why: 'The words are lost, but the mouth is almost closed and the sound itself is dull. In {o:mumbled} the sound is open and clear.' } },

  { id: 't-p-ben-roommate', use: 'drill', tier: 'clean', setting: 'home', topic: 'a pop song a roommate cannot write down',
    text: "Ben sings a pop song at home while his roommate listens. His notes are right and his breath lasts. His mouth is open and his voice is clear, but he lets the t, d and s sounds fade. His roommate tries to write the words down and gives up after the first line.",
    outcome: 'mumbled', route: { D1: ['tone'], T1: ['blur'] },
    cues: { D1: 'His notes are right and his breath lasts', T1: ['His mouth is open and his voice is clear', 'he lets the t, d and s sounds fade'] },
    reason: { D1: 'The notes and the air are fine: {cue:D1}. The words are what trouble his roommate.',
              T1: 'The sound is open and clear, but the small sounds fade: {cue:T1}.' },
    not: { outcome: 'muffled', why: 'His mouth is open and the sound is clear, not dull. It is the small sounds at the ends of the words that are missing.' } }
]);
