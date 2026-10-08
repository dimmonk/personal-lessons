// Singing, Unit Three: stories shown inside cards, part two: an airy tone, forcing the air, the look-alike pair between them,
// the exception for the question's tie-break (a quick, high breath followed by a shove), the check on the question, and the
// worked story. Field guide: see u3.cases-teach-1.js.

FC.cases('singing', 'u3', [

  /* ---------- An airy tone ---------- */
  { id: 'b-meet-whisper', use: 'teach', tier: 'clean', setting: 'shower', topic: 'a soft ballad with a hiss in it', name: 'The whispery ballad',
    text: "In the shower, Pablo sings a soft ballad and does not like what he hears. His breath is low and quiet, but the sound is soft and whispery, and he can hear air hissing out along with the notes. After two short lines the air is gone. He did not mean it to sound like a whisper.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'After two short lines the air is gone',
            B1: ['the sound is soft and whispery, and he can hear air hissing out along with the notes', 'After two short lines the air is gone'] } },

  { id: 'b-check-radio', use: 'check', tier: 'clean', setting: 'car', topic: 'a radio song with a hiss in every note',
    text: "Singing along with the radio, Noor takes a low, quiet breath, and still hears a hiss of air with every note. The sound is soft and whispery, and the air is gone in two lines.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'the air is gone in two lines',
            B1: ['hears a hiss of air with every note', 'The sound is soft and whispery'] },
    reason: { B1: 'Noor’s breath was low and quiet, but air hissed out with a soft, whispery sound: {cue:B1}.' } },

  { id: 'b-lk-folk-leak', use: 'teach', tier: 'clean', setting: 'openmic', topic: 'a quiet folk verse with air hissing out', name: 'The leaking verse',
    text: "At an open mic, Sam sings the quiet last verse of a folk song. He breathes in low and quiet, but the air hisses out along with the notes, the sound is soft and whispery, and the air is gone in two lines.",
    outcome: 'airytone', route: { D1: ['breath'], B1: ['leak'] },
    cues: { D1: 'the air is gone in two lines',
            B1: ['the air hisses out along with the notes, the sound is soft and whispery'] } },

  /* ---------- Forcing the air ---------- */
  { id: 'b-meet-chorus', use: 'teach', tier: 'clean', setting: 'party', topic: 'a big chorus shoved out', name: 'The loud chorus',
    text: "At a party, Dario sings the big chorus as loud as he can. He shoves the air out hard on every word, the sound comes out loud and harsh, and by the second chorus his throat is tired.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'He shoves the air out hard on every word',
            B1: ['He shoves the air out hard on every word', 'loud and harsh', 'his throat is tired'] } },

  { id: 'b-check-closing', use: 'check', tier: 'clean', setting: 'church', topic: 'a closing hymn sung as big as possible',
    text: "At the end of the service, Gloria sings the closing hymn as big as she can. She drives the air out hard on every line, the sound is loud and harsh, and her throat is tired afterward.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'She drives the air out hard on every line',
            B1: ['She drives the air out hard on every line, the sound is loud and harsh', 'her throat is tired afterward'] },
    reason: { B1: 'Gloria drove the air out hard, and the sound was loud and harsh: {cue:B1}.' } },

  { id: 'b-lk-folk-shove', use: 'teach', tier: 'clean', setting: 'openmic', topic: 'a quiet folk verse with the air driven out', name: 'The shoved verse',
    text: "At an open mic, Sam sings the quiet last verse of a folk song. He breathes in low and quiet, but he drives the air out hard on every note, the sound is loud and harsh, and the air is gone in two lines.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'the air is gone in two lines',
            B1: ['he drives the air out hard on every note, the sound is loud and harsh'] } },

  /* ---------- the exception: a quick, high breath, then a shove ---------- */
  { id: 'b-exc-chorus', use: 'teach', tier: 'misleading', setting: 'party', topic: 'a shove after a quick high breath', name: 'The shove after a gasp', also: ['force'],
    text: "At a party, Jonas sings the last chorus of a big song. Just before it he gasps in fast with his shoulders up, then shoves the air out hard, and the sound comes out loud and harsh. By the end of the line the air is gone and his throat is tired.",
    outcome: 'shallowbreath', route: { D1: ['breath'], B1: ['gone'] },
    cues: { D1: 'By the end of the line the air is gone',
            B1: ['gasps in fast with his shoulders up', 'By the end of the line the air is gone'] },
    segments: [
      { text: 'At a party, Jonas sings the last chorus of a big song', note: 'That is only where he is. It says nothing about the breath.' },
      { text: 'Just before it he gasps in fast with his shoulders up' },
      { text: 'then shoves the air out hard, and the sound comes out loud and harsh', note: 'This is what {o:forcing} sounds like, which is why the story looks like it. The breath that came first decides.' },
      { text: 'By the end of the line the air is gone and his throat is tired', note: 'True, and it fits both. It does not say which came first.' } ] },

  /* ---------- the check on the question ---------- */
  { id: 'b-check-shower', use: 'check', tier: 'clean', setting: 'shower', topic: 'a shower ballad sung as loud as possible',
    text: "In the shower, Mina sings a power ballad at the top of her voice. She pushes the air out hard on every word, the sound is loud and harsh, and her throat feels raw by the end of the song.",
    outcome: 'forcing', route: { D1: ['breath'], B1: ['force'] },
    cues: { D1: 'She pushes the air out hard on every word',
            B1: ['She pushes the air out hard on every word, the sound is loud and harsh'] },
    reason: { B1: 'Mina pushed the air out hard, and the sound was loud and harsh: {cue:B1}. Nothing in the story says the breath was a quick, high one.' } },

  /* ---------- the worked story ---------- */
  { id: 'b-w-hymn', use: 'teach', tier: 'misleading', setting: 'church', topic: 'a hymn book with no breath marks', name: 'The gasping hymn',
    text: "In church, Hector tells the choir leader, 'I keep gasping in the middle of words.' Each breath he takes is low and full, with his belly out and his shoulders still. But he breathes only when he runs out, so the breath lands in the middle of a word, and nobody has ever marked where he should breathe in his hymn book.",
    outcome: 'unplanned', route: { D1: ['breath'], B1: ['grabbed'] },
    cues: { D1: 'I keep gasping in the middle of words',
            B1: ['Each breath he takes is low and full, with his belly out and his shoulders still', 'he breathes only when he runs out, so the breath lands in the middle of a word'] } }
]);
