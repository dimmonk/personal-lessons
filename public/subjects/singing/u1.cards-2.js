// Singing, Unit One, part two: the note itself, the two look-alike pairs that turn on it, the two lines that show two
// answers at once (each still gets one answer), and the sound of the words with its look-alike pair. Field guide: see
// u1.cards-1.js. The app prints "how to tell them apart" and the tie-break on the look-alike and exception cards; neither
// is typed here.

FC.cards('singing', 'u1', [

  /* ---------- Fourth: the note itself ---------- */
  { id: 'meet-pitch', kind: 'meet', family: 'pitch',
    link: 'Next, when {plain:pitch}.',
    case: 'g-pitch-third', mark: 'D1',
    explain: [
      'Kenji is not asking whether his top notes shout or his air lasts: both are fine. His doubt is about one note, whether it is the song’s note. “A shade off” can mean he is a little under it, a little over it, sliding up into it, or hunting for it. It can also mean the note is right and only sounds odd to him.',
      'Each of those is fixed differently, and the last one needs no fix. For now, only notice that the doubt is about the note itself.'
    ],
    spot: [
      { do: 'Find the doubt: Kenji is not sure the third note is the song’s note.', why: 'The doubt is about one note, not about the whole line.' },
      { do: 'Check the top notes and the air: the chorus is easy to reach and Kenji has plenty of breath.', why: 'If either were the trouble, that would be the answer instead.' },
      { do: 'Notice how it is off: a shade, with a slide up into the note.', why: 'A small miss is a problem with the note, and a shout or a gap is not.' }
    ],
    feature: { step: 'D1', option: 'pitch' },
    name: 'This is {a:D1.pitch}. Kenji’s voice is working; one note is in doubt.',
    act: [
      { do: 'Play the song’s note on a piano app, or pause the recording on it, and hold it.', why: 'You need the real note to compare with.' },
      { do: 'Sing your note next to it and listen: is yours lower, higher or the same?', why: 'Your ear can tell which way you are off when the two notes sit side by side.' },
      { do: 'Before you sing the next note, hear it in your head.', why: 'A note you can already hear is much easier to land on.' }
    ] },

  { id: 'check-pitch', kind: 'check', after: 'pitch',
    case: 'g-pitch-hunt',
    ask: { type: 'option', step: 'D1', among: ['fine', 'high', 'breath', 'pitch'] } },

  /* ---------- Two pairs people mix up ---------- */
  { id: 'look-pitch-fine', kind: 'lookalike', ledger: 'pitch~fine',
    link: 'Both of these can feel wrong to the singer. The test is whether a note is in doubt.',
    cases: ['g-pitch-ballad', 'g-fine-ballad'],
    instruction: 'Both stories are about Asha and the same ballad at karaoke. Compare one thing: is she unsure about a note, or are the notes right and she only wishes for another voice?',
    prompt: { kind: 'which', option: 'D1.fine', answer: 'g-fine-ballad' },
    difference: [
      'In Story A, Asha keeps coming back to the first note of the chorus, which sounds a shade off to her, and she is not sure it is the song’s note. That is {a:D1.pitch}.',
      'In Story B, she checks that note against a piano app and it matches. Everything in her singing is fine, and her only complaint is that she does not sound like the singer on the record. That is {a:D1.fine}.',
      'Both feel wrong to the singer. What tells them apart is whether a note is still in doubt.'
    ] },

  { id: 'look-breath-pitch', kind: 'lookalike', ledger: 'breath~pitch',
    link: 'The end of a line can sound flat for two different reasons. The test is whether the note is off while the air lasts.',
    cases: ['g-breath-sag', 'g-pitch-under'],
    instruction: 'Both stories are about Dana and the same slow song in the car. Compare one thing: does the line go wrong only when the air runs out, or is a note off even with air to spare?',
    prompt: { kind: 'which', option: 'D1.pitch', answer: 'g-pitch-under' },
    difference: [
      'In Story A, Dana’s first notes are right, and the last words sag only because she runs out of air. That is {a:D1.breath}.',
      'In Story B, the air lasts to the end of every line, and her note still sits a little under the song’s note. That is {a:D1.pitch}.',
      'If you fix the air in Story A, the end of the line comes back. In Story B it would not.'
    ] },

  /* ---------- Two lines that show two things at once ---------- */
  { id: 'exc-high-pitch', kind: 'exception', ledger: 'high~pitch', looksLike: 'pitch', is: 'high',
    h: 'A shouted top note that sounds flat',
    link: 'Some lines show two things at once, and each still gets one answer. In this story the top note is shouted, and it also lands under the song’s note.',
    case: 'g-high-flat-shout',
    setup: 'Leon says he is flat, and a note that lands under the song’s note is what {a:D1.pitch} sounds like. Yet the answer here is {a:D1.high}.',
    prompt: { kind: 'phrase', answer: 'He gets louder and louder as the line goes up, his neck tightens, and the top note comes out as a shout' },
    because: [
      'Count what the story shows, in order. He gets louder and louder as the line climbs, his neck tightens, the top note is a shout, and only then does it land low. The shout came first, and the flat note followed it.',
      'When a line shows both, the top notes win, because singing the top lighter usually brings the note back too.'
    ] },

  { id: 'exc-breath-pitch', kind: 'exception', ledger: 'breath~pitch', looksLike: 'pitch', is: 'breath',
    h: 'A last line that sags when the air is gone',
    link: 'Here is the second line that shows two things at once: the end of the line goes flat, and the air has run out.',
    case: 'g-breath-sags-flat',
    setup: 'Hana says she is flat, and notes that land under the song’s note are what {a:D1.pitch} sounds like. Yet the answer here is {a:D1.breath}.',
    prompt: { kind: 'phrase', answer: 'She takes a quick breath with her shoulders up, and near the end the air is gone' },
    because: [
      'Only her last two notes sag, and they sag where the air is gone. Nothing before that is described as off.',
      'When a line shows both, the air wins, because a low breath taken early usually keeps the end of the line right.'
    ] },

  /* ---------- Fifth: the sound of the words ---------- */
  { id: 'meet-tone', kind: 'meet', family: 'tone',
    link: 'Next, when {plain:tone}.',
    case: 'g-tone-muffled', mark: 'D1',
    explain: [
      'Owen’s notes are right and his air lasts. What is wrong is the sound that comes out: dull, stuck in his throat, with words his neighbors cannot follow. The sound of a word is shaped after the voice makes it, by the mouth, the tongue and the lips, so a mouth that stays shut gives a dull sound.',
      'The same answer covers a pinched sound, words that run together, and a voice that only sounds strange on a recording. Each is fixed differently, and the recording one needs no fix.'
    ],
    spot: [
      { do: 'Check the notes and the air first: Owen’s are right.', why: 'Then the trouble is not the note or the air.' },
      { do: 'Listen to the sound: Owen’s is dull and stays back in his throat.', why: 'A pinched sound, run-together words and a strange recorded voice are each heard differently.' },
      { do: 'Look at the mouth: Owen’s barely opens.', why: 'A mouth that stays shut is a common reason for a dull sound.' }
    ],
    feature: { step: 'D1', option: 'tone' },
    name: 'This is {a:D1.tone}. Owen’s notes and air are fine.',
    act: [
      { do: 'Look in a mirror and open your mouth about two fingers wide on “ah”.', why: 'A mouth that opens gives a sound that carries.' },
      { do: 'Hold your nose shut and sing “ah”: if the sound changes a lot, too much of it is going through your nose.', why: 'That tells you whether the sound is pinched.' },
      { do: 'Record yourself and ask whether a listener could write down the words.', why: 'A recording is the only way to hear it from outside.' }
    ] },

  { id: 'check-tone', kind: 'check', after: 'tone',
    case: 'g-tone-lullaby',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show what is wrong with the sound? Tap them.',
           answer: "he lets the ends of the words fall away, and his son says, 'I can't tell what you're saying.'" } },

  { id: 'look-pitch-tone', kind: 'lookalike', ledger: 'pitch~tone',
    link: 'A listener can say that something sounds off and mean a note or a sound. The test is whether you doubt a note.',
    cases: ['g-pitch-folk', 'g-tone-folk'],
    instruction: 'Both stories are about Rosa and a folk song she sings while she paints. Compare one thing: does she doubt a note, or does she dislike how the sound comes out?',
    prompt: { kind: 'which', option: 'D1.tone', answer: 'g-tone-folk' },
    difference: [
      'In Story A, her sound is open and every word is clear, but the last note of the verse sounds a shade off and she is not sure it is the song’s note. That is {a:D1.pitch}.',
      'In Story B, she is sure of every note, but the sound is pinched, as if it comes out of her nose. That is {a:D1.tone}.',
      'A doubt about a note and a dislike of the sound can both be called “off”. Ask which one it is.'
    ] }
]);
