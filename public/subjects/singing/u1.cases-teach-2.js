// Singing, Unit One: stories shown inside cards, part two: the four pairs of stories on the look-alike cards (the same
// person and the same song, so only the deciding words differ), the two stories on the exception cards (each shows two
// answers and lists the loser in `also`), the story the question's check asks, and the story that is worked through.
// Field guide: see u1.cases-teach-1.js. A story used by a worked card carries no reason of its own: the card's steps
// hold it, so there is one copy.

FC.cases('singing', 'u1', [

  /* ---------- a note in doubt, and a voice that is only not the record's ---------- */
  { id: 'g-pitch-ballad', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'the first note of a ballad chorus',
    text: "Asha sings a slow ballad at karaoke. The air lasts and the top is easy, but the first note of the chorus keeps sounding a shade off to her, and she is not sure it is the song's note.",
    route: { D1: ['pitch'] },
    cues: { D1: "the first note of the chorus keeps sounding a shade off to her, and she is not sure it is the song's note" } },

  { id: 'g-fine-ballad', use: 'teach', tier: 'clean', setting: 'karaoke', topic: 'a ballad checked on a piano app',
    text: "Asha sings a slow ballad at karaoke. She checks the first note of the chorus against a piano app and it matches, the air lasts and the top is easy. Her only complaint is that she does not sound like the singer on the record.",
    route: { D1: ['fine'] },
    cues: { D1: ['She checks the first note of the chorus against a piano app and it matches', 'Her only complaint is that she does not sound like the singer on the record'] } },

  /* ---------- air that gives out, and a top note that shouts ---------- */
  { id: 'g-breath-closing', use: 'teach', tier: 'clean', setting: 'church', topic: 'air gone halfway through a long top note',
    text: "Marcus sings the closing line of a hymn at church, which climbs to one long note. He takes a quick breath with his shoulders up, and halfway through the long note the air is gone and the note fades out. The note itself is steady and easy.",
    route: { D1: ['breath'] },
    cues: { D1: 'He takes a quick breath with his shoulders up, and halfway through the long note the air is gone' } },

  { id: 'g-high-closing', use: 'teach', tier: 'clean', setting: 'church', topic: 'a shout at the top of a closing line',
    text: "Marcus sings the closing line of a hymn at church, which climbs to one long note. He has air left at the end. But as the line climbs he gets louder and louder, his jaw clenches, and the top note comes out as a shout.",
    route: { D1: ['high'] },
    cues: { D1: 'as the line climbs he gets louder and louder, his jaw clenches, and the top note comes out as a shout' } },

  /* ---------- the end of a line that sags, for two different reasons ---------- */
  { id: 'g-breath-sag', use: 'teach', tier: 'clean', setting: 'car', topic: 'the end of a line that sags as the air runs out',
    text: "Dana sings along with a slow song in the car. The first notes of every long line are right, but she runs out of air near the end and the last words sag and fade.",
    route: { D1: ['breath'] },
    cues: { D1: 'she runs out of air near the end and the last words sag and fade' } },

  { id: 'g-pitch-under', use: 'teach', tier: 'clean', setting: 'car', topic: 'a note under the piano app’s note',
    text: "Dana sings along with a slow song in the car. The air lasts to the end of every line, but she is not sure her notes match the song's. When she plays one on a piano app and sings hers next to it, hers sits a little lower.",
    route: { D1: ['pitch'] },
    cues: { D1: "When she plays one on a piano app and sings hers next to it, hers sits a little lower" } },

  /* ---------- a note in doubt, and a sound that is pinched ---------- */
  { id: 'g-pitch-folk', use: 'teach', tier: 'clean', setting: 'home', topic: 'the last note of a folk verse',
    text: "Rosa sings a folk song while she paints. Her sound is open and every word is clear, but the last note of the verse sounds a shade off to her, and she is not sure it is the song's note.",
    route: { D1: ['pitch'] },
    cues: { D1: "the last note of the verse sounds a shade off to her, and she is not sure it is the song's note" } },

  { id: 'g-tone-folk', use: 'teach', tier: 'clean', setting: 'home', topic: 'a pinched sound while painting',
    text: "Rosa sings a folk song while she paints. She is sure of every note and has air to spare, but the sound is pinched, as if it comes out of her nose, and her sister says so too.",
    route: { D1: ['tone'] },
    cues: { D1: 'the sound is pinched, as if it comes out of her nose' } },

  /* ---------- the two lines that show two answers at once ---------- */
  { id: 'g-high-flat-shout', use: 'teach', tier: 'misleading', setting: 'party', topic: 'a shouted top note that lands flat', name: 'The shouted note that sounded flat',
    also: ['pitch'],
    text: "At a party, Leon sings the last chorus of a song that climbs. He gets louder and louder as the line goes up, his neck tightens, and the top note comes out as a shout. It also lands a shade under the song's note, and he groans: 'I'm flat.'",
    route: { D1: ['high'] },
    cues: { D1: 'He gets louder and louder as the line goes up, his neck tightens, and the top note comes out as a shout' },
    segments: [
      { text: 'At a party, Leon sings the last chorus of a song that climbs', note: 'That says where he is and what he sings. It does not say what causes the trouble.' },
      { text: 'He gets louder and louder as the line goes up, his neck tightens, and the top note comes out as a shout' },
      { text: "It also lands a shade under the song's note, and he groans: 'I'm flat.'", note: 'That is what Leon blames. The question asks for what causes it.' }
    ] },

  { id: 'g-breath-sags-flat', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a last line that sags when the air is gone', name: 'The last line that sagged',
    also: ['pitch'],
    text: "At home, Hana sings the long last line of a verse. She takes a quick breath with her shoulders up, and near the end the air is gone and her last two notes sag a shade under the song's note. 'I'm flat,' she says.",
    route: { D1: ['breath'] },
    cues: { D1: 'She takes a quick breath with her shoulders up, and near the end the air is gone' },
    segments: [
      { text: 'At home, Hana sings the long last line of a verse', note: 'That says where she is and what she sings. It does not say what causes the trouble.' },
      { text: 'She takes a quick breath with her shoulders up, and near the end the air is gone' },
      { text: "her last two notes sag a shade under the song's note. 'I'm flat,' she says.", note: 'That is what Hana blames. The question asks for what causes it.' }
    ] },

  /* ---------- the story the question's check asks, and the story that is worked ---------- */
  { id: 'g-tone-recorded', use: 'check', tier: 'clean', setting: 'shower', topic: 'a voice that sounds thin on playback',
    text: "In the shower, Femi sings a song he knows well. His notes are right, he has air to spare, and the sound is open and clear. When he plays back a recording of it, his voice sounds thin and high, and he hates it.",
    route: { D1: ['tone'] },
    cues: { D1: 'When he plays back a recording of it, his voice sounds thin and high, and he hates it' },
    reason: { D1: 'The notes and the air are fine, and the complaint comes only from the recording: {cue:D1}. The sound is clear while he sings.' } },

  { id: 'g-high-gasping', use: 'teach', tier: 'misleading', setting: 'karaoke', topic: 'a chorus that ran out of air', name: 'The chorus that ran out of air',
    also: ['breath'],
    text: "At karaoke, Greta sings a song that climbs, and by the end of the chorus she is gasping. 'I need to learn to breathe,' she says. But the air only runs short as the line climbs, where she gets louder and louder and her top note comes out as a shout.",
    route: { D1: ['high'] },
    cues: { D1: 'gets louder and louder and her top note comes out as a shout' } }
]);
