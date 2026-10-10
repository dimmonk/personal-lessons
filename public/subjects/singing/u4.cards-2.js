// Singing, Unit Four, part two: the two names where the note moves or is hunted for (a slide up into the note, and a start
// with no note in your head), their look-alike pair with the steady miss, and the two named exceptions where the hunt
// wins by the key's tie-break. Field guide: see u4.cards-1.js.

FC.cards('singing', 'u4', [

  /* ---------- Scooping ---------- */
  { id: 'meet-scooping', kind: 'meet', outcome: 'scooping',
    link: 'The first two were steady notes that sat a little off. This one is a note that moves at the start.',
    case: 'p-mt-scooping', mark: 'P1',
    explain: [
      'Dev’s notes are not low. He does get to each one. But every note starts underneath and slides up, so it arrives late and the line swoops.',
      'It is a habit copied from singers on records, and it is easy to pick up without noticing. Dev only heard it on his own recording.'
    ],
    audio: {
      kind: 'tones',
      says: 'Press the first button, then the second, and listen to how each note starts. In the first, each note starts underneath and slides up, so it arrives late. In the second, each note lands right on it.',
      examples: [
        { label: '{a:P1.slide}', play: [{ note: 'D4', path: [[0, -300], [400, 0], [1500, 0]] }, { note: 'F4', at: 1800, path: [[0, -300], [400, 0], [1500, 0]] }] },
        { label: '{a:P1.match}', play: [{ note: 'D4', ms: 1500 }, { note: 'F4', at: 1800, ms: 1500 }] }
      ]
    },
    spot: [
      { do: 'Record the line and listen to how each note starts: Dev heard every long note begin underneath.', why: 'The start of the note is where this one shows.' },
      { do: 'Listen for a slide up into the note: Dev’s notes slid up until they reached it.', why: 'A steady note that is a little low would not move.' },
      { do: 'Check whether the note arrives: Dev reached each one, but late.', why: 'A note that stays low never gets there, and this one does.' }
    ],
    feature: { step: 'P1', option: 'slide' },
    name: 'This is {o:scooping}. The note is reached, but it arrives late because it starts underneath.',
    act: [
      { do: 'Hear the note in your head before you sing it.', why: 'Then you can land on a note you already know.' },
      { do: 'Start each note exactly where it belongs, or from just above.', why: 'Coming from above leaves no slide up from underneath.' },
      { do: 'Practice the melody on “la” with short, separate notes and no slides.', why: 'It trains each note to start where it belongs.' },
      { do: 'Sound the first note of each phrase on a piano app before you sing it.', why: 'Then you start from a note you have just heard.' }
    ] },

  { id: 'check-scooping', kind: 'check', after: 'scooping',
    case: 'p-c-scooping',
    ask: { type: 'option', step: 'P1', among: ['match', 'under', 'over', 'slide'] } },

  { id: 'look-scooping-flat', kind: 'lookalike', ledger: 'scooping~flat',
    link: 'In both, the sound is under the song’s note at first, so these two are easy to mix up.',
    cases: ['p-lk-ballad-slide', 'p-lk-ballad-flat'],
    instruction: 'Both stories are about Ravi and the same slow song, and in both his notes are low at some point. Compare one thing: whether the note moves or stays put.',
    prompt: { kind: 'which', option: 'P1.slide', answer: 'p-lk-ballad-slide' },
    difference: [
      'In Story A every note starts underneath and slides up until it reaches the right place. It is reached, but late. That is {a:P1.slide}, so it is {o:scooping}.',
      'In Story B each note starts steady and stays a little lower than the app’s note, and he has to slide up to meet it. That is {a:P1.under}, so it is {o:flat}.',
      'Same song, same low sound. One note moves up into place, and the other never gets there on its own.'
    ] },

  /* ---------- Guessing the note ---------- */
  { id: 'meet-guessing', kind: 'meet', outcome: 'guessing',
    link: 'The last one starts before any of this: the note was never in your head.',
    case: 'p-mt-guessing', mark: 'P1',
    explain: [
      'Mei did not know the first note when she opened her mouth, so her voice had to look for it. Sometimes it finds the note and sometimes it never does, and the melody wanders.',
      'This is about the start, before any note is sung. It does not mean something is wrong with your ears: nearly everybody sings before they listen.'
    ],
    audio: {
      kind: 'tones',
      says: 'Press the button to hear a voice that does not know its note. It moves up and down until it finds the note.',
      examples: [{ label: '{a:P1.hunt}', play: [{ note: 'D4', path: [[0, -250], [500, 130], [1000, -100], [1500, 70], [2000, -30], [2500, 0], [3500, 0]] }] }]
    },
    spot: [
      { do: 'Ask whether you had the note in your head before you sang: Mei did not.', why: 'A voice that starts with no note has to hunt for one.' },
      { do: 'Listen to the start of the line: Mei’s voice moved up and down before it settled.', why: 'Hunting sounds like wandering, not like one steady note that is wrong.' },
      { do: 'Check where the line ends up: Mei finished on a different note than the song’s.', why: 'A hunting voice may find the note, or may never find it.' }
    ],
    feature: { step: 'P1', option: 'hunt' },
    name: 'This is {o:guessing}. The trouble starts before the first note, because no note was in your head.',
    act: [
      { do: 'Listen to the line three times, then hum it along with the recording.', why: 'The tune gets into your head before it is in your mouth.' },
      { do: 'Sound the first note of each phrase on a piano app, and hum it before you sing.', why: 'Then you start on a note you have just heard.' },
      { do: 'Learn the melody on “la” before you add the words.', why: 'You can listen for the notes alone.' },
      { do: 'Record yourself and compare it with the song.', why: 'You hear for yourself whether you found the note.' }
    ] },

  { id: 'check-guessing', kind: 'check', after: 'guessing',
    case: 'p-c-guessing',
    ask: { type: 'option', step: 'P1', among: ['under', 'over', 'slide', 'hunt'] } },

  /* ---------- the two named exceptions: the hunt wins ---------- */
  { id: 'exc-guess-flat', kind: 'exception', ledger: 'guessing~flat', looksLike: 'flat', is: 'guessing',
    h: 'When the note ends up low and no note was in her head',
    link: 'Here the singer ends up under the song’s note, which looks like {o:flat}.',
    case: 'p-x-guess-low',
    setup: 'Joy’s check shows her note a little lower than the piano’s, which is what {o:flat} looks like. Yet this is {o:guessing}.',
    prompt: { kind: 'phrase', answer: 'starts her part before she has heard its first note' },
    because: [
      'Joy’s note did end up low, which fits {o:flat}. But she started with no note in her head, so her voice had to hunt, and it stopped a little low.',
      'Hearing the note first is the fix for the low note as well, so the hunt is what to work on.'
    ] },

  { id: 'exc-guess-scoop', kind: 'exception', ledger: 'guessing~scooping', looksLike: 'scooping', is: 'guessing',
    h: 'When the slide is a search',
    link: 'Now a slide up from underneath that is not a habit.',
    case: 'p-x-guess-slide',
    setup: 'Kofi’s voice starts low and slides up until it lands, which is what {o:scooping} sounds like. Yet this is {o:guessing}.',
    prompt: { kind: 'phrase', answer: 'begins the first line without any note in his head' },
    because: [
      'A scoop is a slide you do out of habit, to a note you know. Kofi has no note in his head, so his voice slides up to look for one.',
      'Hearing the note first is the fix for the slide as well, so the hunt is what to work on.'
    ] }
]);
