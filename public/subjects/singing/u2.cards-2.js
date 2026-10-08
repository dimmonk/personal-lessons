// Singing, Unit Two, the second half of part two and the start of part three: the fourth name (squeezing) and the named
// exception between it and pushing, the last name (out of your range), its look-alike pair with pushing, and the named
// exception between it and cracking. Each tie-break the key has for this question is taught on a named exception card, on a
// story that lists the losing answer in `also`. Field guide: see u2.cards-1.js.

FC.cards('singing', 'u2', [

  /* ---------- Squeezing ---------- */
  { id: 'meet-squeezing', kind: 'meet', outcome: 'squeezing',
    link: 'Pushing was tight because the voice got louder. This one is tight without getting any louder.',
    case: 'h-squeezing-meet', mark: 'H1',
    explain: [
      'Joel’s throat and jaw are clamping (a tongue can clamp too). A clamped throat makes the sound thin and tight instead of bigger, and it tires the throat, which is why his aches afterward.',
      'It can feel like effort, but nothing is getting louder: the sound is being squeezed, not pushed.'
    ],
    spot: [
      { do: 'Feel your throat, jaw and tongue as the line climbs: Joel’s throat clamps and his jaw locks.', why: 'The clamp starts in the places that should stay loose.' },
      { do: 'Listen to the sound: thin and tight, and not louder.', why: 'Louder as well would make it {o:pushing}.' },
      { do: 'Check your throat afterward: Joel’s aches.', why: 'A sore or tired throat after singing often goes with a clamp.' }
    ],
    feature: { step: 'H1', option: 'clamp' },
    name: 'This is {o:squeezing}: the throat clamps on the top notes.',
    act: [
      { do: 'Stop and do a yawn-sigh: a big yawn, then a sigh that slides from high to low.', why: 'It loosens the throat.' },
      { do: 'Let your jaw hang loose and chew while you hum.', why: 'It shows you what a loose jaw feels like.' },
      { do: 'Rest the tip of your tongue behind your lower front teeth.', why: 'It keeps the tongue from clamping.' },
      { do: 'Sing the line on a lip trill before you add the words.', why: 'Loose, fluttering lips are an easy way to sing it with nothing locked.' },
      { do: 'If it hurts, stop for the day.', why: 'Singing should never hurt.' }
    ] },

  { id: 'check-squeezing', kind: 'check', after: 'squeezing',
    case: 'h-c-fatima-solo',
    ask: { type: 'option', step: 'H1', among: ['light', 'shout', 'flip', 'clamp'] } },

  { id: 'exc-clamp', kind: 'exception', ledger: 'pushing~squeezing', looksLike: 'squeezing', is: 'pushing',
    h: 'When a tight throat is also getting louder',
    link: 'Real singing is messier than one problem at a time: a throat can clamp while the voice also gets louder.',
    case: 'h-exc-clamp',
    setup: 'Marcus’s throat clamps and aches, which is what {o:squeezing} looks like. Yet this is {o:pushing}.',
    prompt: { kind: 'phrase', answer: 'He gets louder and louder' },
    because: [
      'Two things show up: a tight throat, and a voice that keeps getting louder. A tight throat alone would be {o:squeezing}. But louder and tight together is {o:pushing}, so that one wins.',
      'The fix is the same for both: getting lighter releases the throat too.'
    ],
    take: 'When your voice gets louder and your throat tightens, treat it as pushing: go lighter first.' },

  /* ---------- Out of your range ---------- */
  { id: 'meet-outofrange', kind: 'meet', outcome: 'outofrange',
    link: 'The last one is not about how you sing the note. It is about whether your voice has the note.',
    case: 'h-outofrange-meet', mark: 'H1',
    explain: [
      'Pedro tried the note lightly, with a loose throat, and it is still not there. That means this song is higher than his voice reaches today.',
      'That is not a flaw in his voice. Pushing cannot give a voice a note it does not have today, and the top of a range grows a little with practice.'
    ],
    spot: [
      { do: 'Try the top note lightly, with your throat loose: Pedro goes light and relaxed on it.', why: 'A light try with a loose throat is the only way to find out whether the note is there.' },
      { do: 'Listen to the result: the note is still not there.', why: 'If it comes out, something else was in the way.' },
      { do: 'Look at the rest of the song: the lines before it feel like a stretch too.', why: 'When a whole song sits too high, every line strains, not only the top.' }
    ],
    feature: { step: 'H1', option: 'missing' },
    name: 'This is {o:outofrange}. Nothing is wrong with Pedro’s voice: this song sits above what it has today.',
    act: [
      { do: 'Move the song lower, two or three steps, until the chorus is comfortable.', why: 'Karaoke apps and backing tracks have a setting for it, usually called pitch or transpose.' },
      { do: 'Or pick another song.', why: 'Plenty of songs sit where your voice is comfortable.' },
      { do: 'Do not push to reach the note.', why: 'A note your voice does not have today is not reached by pushing.' },
      { do: 'Keep practicing, and try the top again in a few weeks.', why: 'The top of a range grows a little with practice.' }
    ] },

  { id: 'check-outofrange', kind: 'check', after: 'outofrange',
    case: 'h-c-hiroshi-car',
    ask: { type: 'option', step: 'H1', among: ['light', 'shout', 'flip', 'clamp', 'missing'] } },

  { id: 'look-outofrange-pushing', kind: 'lookalike', ledger: 'outofrange~pushing',
    link: 'Both of these strain at a high note. What differs is whether the note was ever tried lightly.',
    cases: ['h-lk-anya-push', 'h-lk-anya-range'],
    instruction: 'Both stories are about Anya and the same high chorus at karaoke. Compare one thing: whether she tried the top note lightly.',
    prompt: { kind: 'which', option: 'H1.missing', answer: 'h-lk-anya-range' },
    difference: [
      'In Story A she gets louder and louder and shouts the note. She never tried it light, so nobody knows yet whether it is there. That is {a:H1.shout}, so it is {o:pushing}.',
      'In Story B she tries the note lightly, with her throat relaxed, and it is not there. That is {a:H1.missing}, so it is {o:outofrange}.',
      'So the first thing to do with a note you have been shouting is to try it light. If it comes, you were pushing. If it does not, move the song lower.'
    ] },

  { id: 'exc-flip', kind: 'exception', ledger: 'cracking~outofrange', looksLike: 'cracking', is: 'outofrange',
    h: 'When the voice flips and the next note is not there',
    link: 'A flip can come before a note that is missing, so a flip alone does not settle it.',
    case: 'h-exc-flip',
    setup: 'Ines’s voice flips into a thin, airy sound, which is what {o:cracking} looks like. Yet this is {o:outofrange}.',
    prompt: { kind: 'phrase', answer: 'and it is not there' },
    because: [
      'Two things show up: a flip, and a note above it that is missing. A flip with the next note there would be {o:cracking}. But a note that is still not there, sung lightly with a loose throat, is {o:outofrange}, so that one wins.'
    ],
    take: 'After a flip, try the next note lightly. If it is there, practice the slide. If it is not, move the song lower.' }
]);
