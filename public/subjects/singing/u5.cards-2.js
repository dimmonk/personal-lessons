// Singing, Unit Five, part two: the dull sound and the words that run together, with the look-alike pair between them. The
// pinched sound and the dull sound are compared on the question card, and the words that run together are met last, next to
// the dull sound they are most often mixed up with. Field guide: see u5.cards-1.js.

FC.cards('singing', 'u5', [

  /* ---------- A muffled sound ---------- */
  { id: 'meet-muffled', kind: 'meet', outcome: 'muffled',
    link: 'Next, a sound that is off for a different reason: the trouble is in the mouth, not the nose.',
    case: 't-ines-mirror', mark: 'T1',
    explain: [
      'Ines’s voice is fine. After the voice makes the sound, your jaw and tongue shape it, and Ines’s mouth stays almost shut, so the sound sits back in her throat. That makes it dull, and her sister cannot pick out the words. It is common in shy singers.'
    ],
    spot: [
      { do: 'Look in a mirror and sing a line: Ines’s mouth barely opens.', why: 'This is the second check: how far the mouth opens.' },
      { do: 'Listen to the sound: Ines’s is dull and stays back in her throat.', why: 'A pinched sound that seems to come out of the nose is {o:nasal}.' },
      { do: 'Ask a listener, or play it back, whether the words can be made out: Ines’s sister cannot.', why: 'If the mouth is open and the sound is clear, the trouble is somewhere else.' }
    ],
    feature: { step: 'T1', option: 'dull' },
    name: 'This is {o:muffled}. The sound is there, but the mouth is not open enough to let it out.',
    act: [
      { do: 'Put two fingers between your teeth and sing “ah”.', why: 'It shows you what an open mouth feels like.' },
      { do: 'Rest the tip of your tongue behind your lower front teeth.', why: 'That stops the tongue from being pulled back into the throat.' },
      { do: 'Sing to a mirror.', why: 'You can see the mouth open instead of guessing.' },
      { do: 'Think a bright “ee”.', why: 'It pulls the sound toward the front of your mouth.' }
    ] },

  { id: 'check-muffled', kind: 'check', after: 'muffled',
    case: 't-c-omar-low-mic',
    ask: { type: 'option', step: 'T1', among: ['strange', 'pinched', 'dull'] } },

  /* ---------- Mumbled words ---------- */
  { id: 'meet-mumbled', kind: 'meet', outcome: 'mumbled',
    link: 'Last, a sound that is clear and still does not get through: here the words themselves are the trouble.',
    case: 't-wes-river-song', mark: 'T1',
    explain: [
      'Wes’s mouth is open and his sound is clear, so the mouth and the nose are not the trouble. The trouble is the consonants: the small sounds, like t, d and s, that start and end the words. Your lips and teeth make them at the front of your mouth. His are soft or missing, so the words run into each other and a listener loses them.'
    ],
    spot: [
      { do: 'Check that the sound is clear: Wes’s mouth is open and his voice rings out.', why: 'A dull sound with the mouth barely open is {o:muffled}.' },
      { do: 'Listen to the ends of the words: on “we walked the river road all night”, his t, d and s sounds are gone.', why: 'Those small sounds are what make one word stand apart from the next.' },
      { do: 'Ask a listener to write the words down: Wes’s friends cannot.', why: 'If a listener can write them down, the words are getting through.' }
    ],
    feature: { step: 'T1', option: 'blur' },
    name: 'This is {o:mumbled}. The sound is fine. It is the small sounds around the words that are missing.',
    act: [
      { do: 'Speak the words in rhythm, and overdo every consonant.', why: 'Overdoing them shows you what finishing a word feels like.' },
      { do: 'Finish the end of every word, especially the t, d and s.', why: 'The ends are where a listener hears one word stop and the next start.' },
      { do: 'Sing the line again, keeping the consonants.', why: 'Now the clear sound and the clear words arrive together.' },
      { do: 'Record it and ask whether a listener could write the words down.', why: 'If they could, the words get through.' }
    ] },

  { id: 'check-mumbled', kind: 'check', after: 'mumbled',
    case: 't-c-hana-singalong',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show what is wrong with Hana’s singing? Tap them.',
           answer: 'her t, d and s sounds are weak, so the words run together' } },

  { id: 'look-muffled-mumbled', kind: 'lookalike', ledger: 'muffled~mumbled',
    link: 'These two are the pair people mix up most: in both, a listener cannot make out the words.',
    cases: ['t-lk-tessa-book', 't-lk-tessa-endings'],
    instruction: 'Both stories are about Tessa and the same hymn line, and in both the person next to her loses the words. Compare one thing: her mouth and her sound.',
    prompt: { kind: 'which', option: 'T1.blur', answer: 't-lk-tessa-endings' },
    difference: [
      'In Story A her mouth barely opens, and the sound is dull and stays back in her throat. That is {a:T1.dull}, so it is {o:muffled}.',
      'In Story B her mouth is open and her voice is clear, but the t, d and s sounds are soft or missing. That is {a:T1.blur}, so it is {o:mumbled}.',
      'Same hymn, same listener losing the words. A mirror shows the difference, and Tessa can look before she sings.'
    ] }
]);
