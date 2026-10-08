// Singing, Unit Three, part two: the last two names (air that leaks, air that is shoved), their look-alike pair, and the
// named exception for the question's tie-break: a quick, high breath followed by a shove is a shallow breath.
// Field guide: see u3.cards-1.js.

FC.cards('singing', 'u3', [

  /* ---------- An airy tone ---------- */
  { id: 'meet-airytone', kind: 'meet', outcome: 'airytone',
    link: 'Now a different way to run short: the breath is fine, and the air leaks.',
    case: 'b-meet-whisper', mark: 'B1',
    explain: [
      'Pablo’s breath was low and quiet, so he did everything right on the way in. The air still ran out in two short lines, because it was leaking past his voice without turning into sound. That is the hiss he heard, and it is why the sound was soft and whispery.',
      'More air does not fix a leak. A cleaner start to the sound does. An airy sound sung on purpose for one soft line is a choice, but Pablo did not choose it.'
    ],
    spot: [
      { do: 'Listen for the air itself: Pablo could hear it hissing out along with the notes.', why: 'A clean sound has no hiss in it.' },
      { do: 'Listen to the sound: it was soft and whispery.', why: 'Leaking air is what makes it whispery.' },
      { do: 'Check how fast the air ran out: after two short lines it was gone.', why: 'Leaking air runs out fast, however the breath was taken.' },
      { do: 'Check the breath going in: Pablo’s was low and quiet.', why: 'That rules out the breath as the problem.' },
      { do: 'Ask whether you meant it: Pablo did not.', why: 'An airy sound chosen for one soft line is a choice, not a fault.' }
    ],
    feature: { step: 'B1', option: 'leak' },
    name: 'This is {o:airytone}. The breath is fine. The air is escaping instead of turning into sound.',
    act: [
      { do: 'Hum the line first.', why: 'A hum cannot be airy, so you feel what a clean sound is like.' },
      { do: 'Open the hum into “ah” and keep the same feeling.', why: 'The clean feeling carries over into the open sound.' },
      { do: 'Start each note with a tiny, gentle “uh”, as in “uh-oh”.', why: 'That starts the sound clean.' },
      { do: 'Use less air, not more.', why: 'The trouble is a leak, not too little air.' }
    ] },

  { id: 'check-airytone', kind: 'check', after: 'airytone',
    case: 'b-check-radio',
    ask: { type: 'option', step: 'B1', among: ['lasts', 'gone', 'leak', 'grabbed'] } },

  /* ---------- Forcing the air ---------- */
  { id: 'meet-forcing', kind: 'meet', outcome: 'forcing',
    link: 'The opposite of a leak: here the air is not leaking, it is being shoved.',
    case: 'b-meet-chorus', mark: 'B1',
    explain: [
      'Dario’s trouble was not a leak. He drove the air out hard, and the louder he wanted to be, the harder he shoved. The sound came out loud and harsh, and his throat paid for it by the second chorus. The notes can drift up as well.',
      'The song does not need him to be that loud. Loudness comes from an open mouth and a bright vowel, not from more air.'
    ],
    spot: [
      { do: 'Feel what you do with the air: Dario shoved it out hard on every word.', why: 'A shove is the opposite of a small, steady stream.' },
      { do: 'Listen to the sound: it was loud and harsh.', why: 'Loud and harsh together is what air pushed too hard sounds like.' },
      { do: 'Notice your throat afterward: Dario’s was tired by the second chorus.', why: 'A tired throat is what pushing costs.' }
    ],
    feature: { step: 'B1', option: 'force' },
    name: 'This is {o:forcing}. The trouble is not too little air. It is too much, pushed too hard.',
    act: [
      { do: 'Sing the line at talking volume.', why: 'The song does not need you to be loud.' },
      { do: 'Keep the stream of air small and steady, like the slow hiss.', why: 'A small, steady stream is the opposite of a shove.' },
      { do: 'Sing the line on a lip trill: blow through loose, fluttering lips while you sing.', why: 'A lip trill stops the moment you push too much air.' },
      { do: 'For more loudness, open your mouth wider and use a bright vowel.', why: 'Loudness comes from the mouth, not from more air.' }
    ] },

  { id: 'check-forcing', kind: 'check', after: 'forcing',
    case: 'b-check-closing',
    ask: { type: 'option', step: 'B1', among: ['lasts', 'gone', 'leak', 'force', 'grabbed'] } },

  { id: 'look-airytone-forcing', kind: 'lookalike', ledger: 'airytone~forcing',
    link: 'In both, the air does not last, so these two are easy to mix up.',
    cases: ['b-lk-folk-leak', 'b-lk-folk-shove'],
    instruction: 'Both stories are about Sam and the same quiet verse. Compare one thing: what the air does as it comes out.',
    prompt: { kind: 'which', option: 'B1.force', answer: 'b-lk-folk-shove' },
    difference: [
      'In Story A the air hisses out along with the notes, and the sound is soft and whispery. That is {a:B1.leak}, so it is {o:airytone}.',
      'In Story B he drives the air out hard, and the sound is loud and harsh. That is {a:B1.force}, so it is {o:forcing}.',
      'The air is gone in two lines in both. In Story A there is too little sound for the air, and in Story B there is too much air for the sound.'
    ] },

  /* ---------- the tie-break of the question ---------- */
  { id: 'exc-force-gone', kind: 'exception', ledger: 'forcing~shallowbreath', looksLike: 'forcing', is: 'shallowbreath',
    h: 'When a shove comes after a quick, high breath',
    link: 'A story can show both a quick, high breath and a shove.',
    case: 'b-exc-chorus',
    setup: 'Jonas shoves the air out hard, and the sound is loud and harsh. That is what {o:forcing} sounds like. Yet this is {o:shallowbreath}.',
    prompt: { kind: 'phrase', answer: 'gasps in fast with his shoulders up' },
    because: [
      'Look at the breath before the shove. Jonas gasped in fast with his shoulders up, so the breath was already a high one, and the shove came after it. When both show up, the quick, high breath comes first.'
    ],
    take: 'A low breath is the fix for both, so start there.' }
]);
