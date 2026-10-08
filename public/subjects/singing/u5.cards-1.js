// Singing, Unit Five, part one: the opening card, the voice from outside (nothing is wrong), the pinched sound, and the
// look-alike pair between them. This is an ACTION subject and a BRANCH unit: the first question already gave the answer for
// everything in this unit (the notes and the air are fine, the sound bothers you), and the unit teaches the one question that
// gives each sound its name. Cards are structured data, not HTML.
// The app prints, and this file therefore does not contain: the reminder of the first question, the preview map, the heading of
// a meet card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and
// the heading of an again or portrait card. Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('singing', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'When your voice sounds off, two quick checks tell you what to change',
    canDo: 'The voice you hear from inside your head is not the one everyone else hears. And when the sound really is off, two quick checks tell you which of three things to change.',
    everyday: [
      'You sing a line into your phone and play it back, and it sounds thin and not like you. A friend at karaoke says your voice sounds pinched. Your choir director cannot make out your words, and you cannot tell why.',
      'These sound alike, but they are four different things. One is only how your voice sounds from outside, and there is nothing to fix. The other three each have their own fix. Hold your nose shut and sing an “ah”, look in a mirror, and you can tell which one you have in a minute.'
    ],
    map: { branch: 'tone' } },

  /* ---------- Your voice from outside ---------- */
  { id: 'meet-recorded', kind: 'meet', outcome: 'recorded',
    link: 'Start with the one that needs no fix, so you know what the other three are not.',
    case: 't-mia-lullaby', mark: 'T1',
    explain: [
      'Mia’s voice is fine. What surprised her is where she was listening from. When you sing, you hear yourself from inside your head, partly through bone, and that makes your voice sound deeper and fuller. A recording leaves that out. What you hear on the playback is the voice everyone else hears, thinner and higher.',
      'Two quick checks show that the sound itself is fine. The nose check: hold your nose shut on an “ah” and listen for a change. The mirror check: look in a mirror to see how far your mouth opens.'
    ],
    spot: [
      { do: 'Hold your nose shut and sing an “ah”: Mia’s sound barely changes.', why: 'A sound going through the nose would change a lot.' },
      { do: 'Look in a mirror and sing: Mia’s mouth opens easily.', why: 'A mouth that barely opens gives a dull sound.' },
      { do: 'Listen to the words: every word on Mia’s recording is clear.', why: 'If the words ran together, a listener would lose them.' },
      { do: 'Find where the complaint comes from: only the playback, where her voice sounds thin and high.', why: 'The playback is where the surprise comes from, not your singing.' }
    ],
    feature: { step: 'T1', option: 'strange' },
    name: 'This is {o:recorded}. Nothing is wrong here. It has a name so that you do not start fixing a voice that is fine.',
    act: [
      { do: 'Leave your singing alone.', why: 'Nothing in it needs fixing.' },
      { do: 'Listen to recordings of yourself often.', why: 'The surprise wears off as you get used to the voice everyone else hears.' },
      { do: 'Judge a recording by the checks, not by the surprise: nose held, mouth in the mirror, words clear.', why: 'A recording can sound odd and still be fine.' }
    ] },

  { id: 'check-recorded', kind: 'check', after: 'recorded',
    case: 't-c-dev-birthday-video',
    ask: { type: 'phrase', step: 'T1', say: 'Which words show where Dev’s complaint comes from? Tap them.',
           answer: 'his voice sounds thinner and higher than he expected' } },

  /* ---------- A nasal sound ---------- */
  { id: 'meet-nasal', kind: 'meet', outcome: 'nasal',
    link: 'Now a sound that really is off, and the nearest one to the voice you just met.',
    case: 't-raj-red-light', mark: 'T1',
    explain: [
      'Raj’s notes and his breath are fine. What is off is the sound: after his voice makes it, too much of it goes out through his nose, and that makes it pinched. The back of the roof of your mouth decides how much goes that way.',
      'Holding your nose shut is the check: if the sound changes a lot, it was going through the nose.'
    ],
    spot: [
      { do: 'Hold your nose shut and sing an “ah”: Raj’s sound changes a lot.', why: 'A big change means the sound was going through the nose.' },
      { do: 'Listen as you sing, not on a recording: Raj hears the pinch live, in the car.', why: 'A voice that sounds odd only on a recording is {o:recorded}.' },
      { do: 'Check that nothing else is the trouble: Raj’s mouth is open and the words are clear.', why: 'The pinch is the one thing that is off.' }
    ],
    feature: { step: 'T1', option: 'pinched' },
    name: 'This is {o:nasal}. Too much of the sound is going out through the nose.',
    act: [
      { do: 'Yawn, and feel the back of the roof of your mouth lift.', why: 'That lifted feeling is what you want to keep while you sing.' },
      { do: 'Sing an “ah” keeping that lift. Then sing the line on “ah” alone, and then with the words.', why: 'Add the words only once the “ah” sounds right.' },
      { do: 'Keep the “m” and “n” sounds short.', why: 'Those two sounds go through the nose, so long ones bring the pinch back.' },
      { do: 'Hold your nose shut again and sing the line.', why: 'If the sound changes less than before, it is working.' }
    ] },

  { id: 'check-nasal', kind: 'check', after: 'nasal',
    case: 't-c-beth-warmup',
    ask: { type: 'option', step: 'T1', among: ['strange', 'pinched'] } },

  { id: 'look-nasal-recorded', kind: 'lookalike', ledger: 'nasal~recorded',
    link: 'These two are the closest pair: in both, the singer finds the sound strange.',
    cases: ['t-lk-nora-recorded', 't-lk-nora-nasal'],
    instruction: 'Both stories are about Nora and the same camp song, and in both she dislikes the sound. Compare one thing: what happens when she holds her nose shut on an “ah”.',
    prompt: { kind: 'which', option: 'T1.pinched', answer: 't-lk-nora-nasal' },
    difference: [
      'In Story A, holding her nose shut hardly changes the sound, and the words are clear. Only the playback sounds thin and high. That is {a:T1.strange}, so it is {o:recorded}.',
      'In Story B the sound is pinched even while she sings, and holding her nose shut changes it a lot. That is {a:T1.pinched}, so it is {o:nasal}.',
      'Same person, same song, same dislike. The nose check tells them apart, and Nora can do it in a second.'
    ] }
]);
