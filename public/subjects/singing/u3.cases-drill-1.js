// Singing, Unit Three: drill stories for the piece stage. It gives the unit's one question alone, on a new story. Every story
// carries marked words and a reason for both questions, and not names a look-alike. A breath that works is in this stage (V37).

FC.cases('singing', 'u3', [

  { id: 'b-p-bedtime-fine', use: 'drill', tier: 'clean', setting: 'kids', topic: 'a bedtime song and a quiet breath',
    text: "Chen sings a bedtime song to his daughter and wonders whether he is breathing right. He puts a hand on his belly: it goes out when he breathes in, his shoulders stay still, and the breath makes no sound. He finishes the long line with air to spare.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'wonders whether he is breathing right',
            B1: ['it goes out when he breathes in, his shoulders stay still, and the breath makes no sound', 'finishes the long line with air to spare'] },
    reason: { D1: 'Chen suspects his breathing: {cue:D1}. That is a question about the air.',
              B1: 'His breath was low and quiet, and he had air to spare: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'His shoulders stayed still and the breath made no sound, so it was not a quick, high one.' } },

  { id: 'b-p-radio-gasp', use: 'drill', tier: 'clean', setting: 'car', topic: 'a long second line in the car',
    text: "Yara sings along with the car stereo. Before the long second line she gasps in fast, her shoulders lift, and the air is gone before she reaches the last word.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'the air is gone before she reaches the last word',
            B1: ['she gasps in fast, her shoulders lift', 'the air is gone before she reaches the last word'] },
    reason: { D1: 'The air gives out before the line ends: {cue:D1}. That is a problem with the air.',
              B1: 'Her breath was a fast gasp that lifted her shoulders, and the air was gone early: {cue:B1}.' },
    not: { outcome: 'unplanned', why: 'The problem was the breath she took, not where she took it.' } },

  { id: 'b-p-radio-chopped', use: 'drill', tier: 'clean', setting: 'home', topic: 'a radio song broken in the middle of a word',
    text: "Ravi sings along with a song on the radio. Each breath is low and full, belly out and shoulders still, but he waits until he is out of air, so he grabs one in the middle of 'forever'.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: "he grabs one in the middle of 'forever'",
            B1: ['Each breath is low and full, belly out and shoulders still', "he waits until he is out of air, so he grabs one in the middle of 'forever'"] },
    reason: { D1: 'A breath is grabbed in the middle of a word: {cue:D1}. That is a problem with the air.',
              B1: 'His breaths were low and full, but he took them wherever he ran out: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'His breaths were low and full, not quick gasps with the shoulders up. The trouble was where he took them.' } },

  { id: 'b-p-choir-leak', use: 'drill', tier: 'clean', setting: 'choir', topic: 'a soft choir line with a leak',
    text: "In the choir, Ellen sings a soft line. Her breath is low and quiet, yet she can hear air leaking out along with the sound, which is whispery, and the air is gone in a few notes.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'the air is gone in a few notes',
            B1: ['she can hear air leaking out along with the sound, which is whispery', 'the air is gone in a few notes'] },
    reason: { D1: 'The air gives out fast: {cue:D1}. That is a problem with the air.',
              B1: 'Air leaked out with a whispery sound even though the breath was low and quiet: {cue:B1}.' },
    not: { outcome: 'forcing', why: 'Nothing was shoved. The air leaked out softly, and the sound was whispery, not harsh.' } },

  { id: 'b-p-karaoke-shove', use: 'drill', tier: 'clean', setting: 'karaoke', topic: 'a loud final chorus at karaoke',
    text: "At karaoke, Ben sings the final chorus as loudly as he can. He drives the air out hard on every note, the sound is loud and harsh, and his throat is tired by the end.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'He drives the air out hard on every note',
            B1: ['He drives the air out hard on every note, the sound is loud and harsh', 'his throat is tired by the end'] },
    reason: { D1: 'The air is driven out hard: {cue:D1}. That is a problem with the air.',
              B1: 'The air was shoved out and the sound was loud and harsh: {cue:B1}.' },
    not: { outcome: 'airytone', why: 'The sound was loud and harsh, not soft and whispery, and the air was driven out rather than leaking.' } }
]);
