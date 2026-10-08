// Singing, Unit One: the baseline check (lesson standard E21). Six stories asked once before the first unit, as "nothing
// wrong, or something is wrong?", three of each. They are listed in subject.baseline and sit in no card and no drill. Each
// carries the first question's answer (route.D1) and the words that decide it, and a reason the unit's complete screen
// shows once the unit is finished. Every person is invented.

FC.cases('singing', 'u1', [
  { id: 'g-base-choir-shout', use: 'baseline', tier: 'clean', setting: 'choir', topic: 'a soprano line that ends in a shout',
    text: "At choir practice the soprano line climbs to its last note. Nadia gets louder and louder as it goes up, her jaw clenches, and the top note comes out as a shout.",
    route: { D1: ['high'] },
    cues: { D1: 'gets louder and louder as it goes up, her jaw clenches, and the top note comes out as a shout' },
    reason: { D1: 'The trouble starts where the notes go up, and at the top the voice shouts: {cue:D1}.' } },

  { id: 'g-base-car-fine', use: 'baseline', tier: 'clean', setting: 'car', topic: 'a chorus sung right, and switched off',
    text: "Singing along in the car, Theo hits every note of the chorus, nothing feels tight, and he has air to spare at the end of each line. He turns the song off anyway: 'I sound nothing like the guy on the record.'",
    route: { D1: ['fine'] },
    cues: { D1: ['hits every note of the chorus, nothing feels tight, and he has air to spare', 'I sound nothing like the guy on the record'] },
    reason: { D1: 'The notes are right, nothing is tight or short of air, and the only complaint is about the singer on the record: {cue:D1}.' } },

  { id: 'g-base-karaoke-air', use: 'baseline', tier: 'clean', setting: 'karaoke', topic: 'a gasp before each line that runs out',
    text: "At karaoke, Imani grabs a quick gasp before each line, her shoulders jump up, and halfway through the long line the air is gone.",
    route: { D1: ['breath'] },
    cues: { D1: 'grabs a quick gasp before each line, her shoulders jump up, and halfway through the long line the air is gone' },
    reason: { D1: 'The trouble is with the air: Imani gasps with her shoulders up, and halfway through the line it runs out: {cue:D1}.' } },

  { id: 'g-base-kids-fine', use: 'baseline', tier: 'clean', setting: 'kids', topic: 'a lullaby that does not sound like the album',
    text: "Luis sings a lullaby to his daughter every night. The notes are right, nothing hurts, and every word is clear. His only complaint is that he does not sound like the singer on the album.",
    route: { D1: ['fine'] },
    cues: { D1: ['The notes are right, nothing hurts, and every word is clear', 'he does not sound like the singer on the album'] },
    reason: { D1: 'The notes, the throat and the words are all fine, and the complaint is only about the singer on the album: {cue:D1}.' } },

  { id: 'g-base-shower-note', use: 'baseline', tier: 'clean', setting: 'shower', topic: 'a second note that sounds a shade off',
    text: "In the shower, Pat sings the first line of a song and is not sure the second note is right. It sounds a shade off to him, and he keeps going back to it.",
    route: { D1: ['pitch'] },
    cues: { D1: 'is not sure the second note is right. It sounds a shade off to him' },
    reason: { D1: 'What Pat doubts is the note itself: {cue:D1}. Nothing is said about the top notes or the air.' } },

  { id: 'g-base-party-nasal', use: 'baseline', tier: 'clean', setting: 'party', topic: 'a friend who says it comes out of the nose',
    text: "At a party, Elena sings along and her friend says she sounds like she is singing through her nose. The notes are right and she has plenty of air; the sound is pinched.",
    route: { D1: ['tone'] },
    cues: { D1: 'The notes are right and she has plenty of air; the sound is pinched' },
    reason: { D1: 'The notes and the air are fine, and what bothers her is the sound of the words: {cue:D1}.' } }
]);
