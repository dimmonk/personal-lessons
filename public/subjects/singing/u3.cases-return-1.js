// Singing, Unit Three: fresh stories held back for later days (lesson standard E9, V44). Two for each name, because this is an
// action subject. A name that is due comes back as a story the learner has not seen. Every story carries marked words and a
// reason for both questions, because it is run as a whole.

FC.cases('singing', 'u3', [

  /* ---------- A breath that works ---------- */
  { id: 'b-ret-shower-check', use: 'return', tier: 'clean', setting: 'shower', topic: 'a shower song checked with a hand on the belly',
    text: "In the shower, Tariq wonders whether he breathes wrong, because he often feels short of air. He puts a hand on his belly and breathes in: it moves out, his shoulders stay down, and the breath is silent. He sings the chorus and still has air at the end.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'wonders whether he breathes wrong',
            B1: ['it moves out, his shoulders stay down, and the breath is silent', 'still has air at the end'] },
    reason: { D1: 'Tariq suspects his breathing: {cue:D1}. That is a question about the air.',
              B1: 'His breath was low and silent, and he had air at the end: {cue:B1}.' },
    not: { outcome: 'airytone', why: 'There was no hiss in his sound, and the air lasted.' } },

  { id: 'b-ret-party-fine', use: 'return', tier: 'varied', setting: 'party', topic: 'a party song with air to spare',
    text: "At a party, Camille sings a long, slow song for her friends and is nervous that her air will not last. Her belly moves out when she breathes in, her shoulders stay still, and nobody can hear the breath. At the end of the last line she still has air.",
    outcome: 'breathfine', route: { D1: ['breath'], B1: ['lasts'] },
    cues: { D1: 'nervous that her air will not last',
            B1: ['Her belly moves out when she breathes in, her shoulders stay still, and nobody can hear the breath', 'she still has air'] },
    reason: { D1: 'Camille doubts her air: {cue:D1}. That is a question about the air.',
              B1: 'Her breath was low, still and silent, and the air lasted: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'Her shoulders stayed still and nobody could hear the breath, so it was not a quick, high one.' } },

  /* ---------- A shallow breath ---------- */
  { id: 'b-ret-shower-gasp', use: 'return', tier: 'clean', setting: 'shower', topic: 'a high breath before a long verse',
    text: "In the shower, Omar takes a big, noisy breath before a long verse, and his shoulders go up to his ears. He is out of air a few words before the end, and the last words come out squeezed.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'He is out of air a few words before the end',
            B1: ['takes a big, noisy breath', 'his shoulders go up to his ears', 'He is out of air a few words before the end'] },
    reason: { D1: 'The air gives out before the line ends: {cue:D1}. That is a problem with the air.',
              B1: 'His breath was noisy and lifted his shoulders, and the air was gone early: {cue:B1}.' },
    not: { outcome: 'unplanned', why: 'The breath was high and noisy, so the breath itself was the problem, not where he took it.' } },

  { id: 'b-ret-party-bridge', use: 'return', tier: 'varied', setting: 'party', topic: 'shoulders up before the bridge',
    text: "At a party, Sofia sings the bridge of a song for her friends. She grabs a quick breath through her mouth, her shoulders lift, and halfway through the bridge the air is gone.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'halfway through the bridge the air is gone',
            B1: ['She grabs a quick breath through her mouth, her shoulders lift', 'halfway through the bridge the air is gone'] },
    reason: { D1: 'The air gives out partway through: {cue:D1}. That is a problem with the air.',
              B1: 'Her breath was quick and lifted her shoulders, and the air was gone halfway: {cue:B1}.' },
    not: { outcome: 'breathfine', why: 'Her shoulders lifted and the air was gone halfway, so the breath did not work.' } },

  /* ---------- Unplanned breaths ---------- */
  { id: 'b-ret-karaoke-ballad', use: 'return', tier: 'clean', setting: 'karaoke', topic: 'a ballad with breaths in the middle of a phrase',
    text: "At karaoke, Wen sings a ballad with long phrases. His breaths are low and full, belly out and shoulders still, but he has never planned where to take them, so he stops in the middle of a phrase to breathe, and again in the middle of the next.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: 'he stops in the middle of a phrase to breathe',
            B1: ['His breaths are low and full, belly out and shoulders still', 'he has never planned where to take them'] },
    reason: { D1: 'A breath is grabbed in the middle of a phrase: {cue:D1}. That is a problem with the air.',
              B1: 'His breaths were low and full, but none were planned: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'His breaths were low and full, with the shoulders still. The trouble was where he took them.' } },

  { id: 'b-ret-openmic-folk', use: 'return', tier: 'varied', setting: 'openmic', topic: 'a folk song with no breath marks',
    text: "At an open mic, Alma sings a folk song she has just learned. She breathes in low and fully, but only when she runs out, so the breaths fall inside words and the line comes out in pieces.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: 'the breaths fall inside words',
            B1: ['She breathes in low and fully, but only when she runs out', 'the breaths fall inside words'] },
    reason: { D1: 'The breaths land inside words: {cue:D1}. That is a problem with the air.',
              B1: 'Her breaths were low and full, but she took them only when she ran out: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'Her breaths were low and full, not quick gasps. The trouble was where they fell.' } },

  /* ---------- An airy tone ---------- */
  { id: 'b-ret-home-hiss', use: 'return', tier: 'clean', setting: 'home', topic: 'a quiet song with air hissing out',
    text: "At home, Jamal sings a quiet song to himself. His breath is low and quiet, but he can hear air hissing out with every note, the sound is soft and whispery, and the air is gone after two short lines.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'the air is gone after two short lines',
            B1: ['he can hear air hissing out with every note, the sound is soft and whispery', 'the air is gone after two short lines'] },
    reason: { D1: 'The air gives out fast: {cue:D1}. That is a problem with the air.',
              B1: 'Air hissed out with a soft, whispery sound even though the breath was low and quiet: {cue:B1}.' },
    not: { outcome: 'forcing', why: 'Nothing was shoved. The air leaked out softly, and the sound was not harsh.' } },

  { id: 'b-ret-church-whisper', use: 'return', tier: 'varied', setting: 'church', topic: 'a hymn sung in a whisper',
    text: "In church, Rita sings the first verse of a hymn and cannot hold a note for long. She breathes in low and quietly, yet the air slips out with the sound, which is soft and whispery, and she has no air left after two lines.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'she has no air left after two lines',
            B1: ['the air slips out with the sound, which is soft and whispery', 'she has no air left after two lines'] },
    reason: { D1: 'The air gives out fast: {cue:D1}. That is a problem with the air.',
              B1: 'The breath was low and quiet, but air slipped out with a whispery sound: {cue:B1}.' },
    not: { outcome: 'breathfine', why: 'Her breath was fine, but the sound was not. Air slipped out with it and ran out fast.' } },

  /* ---------- Forcing the air ---------- */
  { id: 'b-ret-choir-anthem', use: 'return', tier: 'clean', setting: 'choir', topic: 'a loud anthem driven out',
    text: "In choir, Paolo wants to be heard over the tenors, so he drives the air out hard on every phrase of the anthem. The sound is loud and harsh, and his throat is tired before the end of rehearsal.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'he drives the air out hard on every phrase of the anthem',
            B1: ['he drives the air out hard on every phrase of the anthem', 'The sound is loud and harsh'] },
    reason: { D1: 'The air is driven out hard: {cue:D1}. That is a problem with the air.',
              B1: 'The air was driven out hard, and the sound was loud and harsh: {cue:B1}.' },
    not: { outcome: 'airytone', why: 'The sound was loud and harsh, not soft and whispery, and no air hissed through it.' } },

  { id: 'b-ret-car-chorus', use: 'return', tier: 'varied', setting: 'car', topic: 'a car chorus sung as hard as possible',
    text: "In the car, Nadia sings the chorus at the top of her lungs. She shoves the air out on every word, the sound comes out loud and harsh, and her throat is tired by the end of the drive.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'She shoves the air out on every word',
            B1: ['She shoves the air out on every word, the sound comes out loud and harsh', 'her throat is tired'] },
    reason: { D1: 'The air is driven out hard: {cue:D1}. That is a problem with the air.',
              B1: 'The air was shoved out, and the sound was loud and harsh: {cue:B1}.' },
    not: { outcome: 'shallowbreath', why: 'The trouble is the air being shoved. Nothing in the story says the breath was a quick, high one.' } }
]);
