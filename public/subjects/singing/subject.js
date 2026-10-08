// Singing: subject record. For someone who sings for fun and wants to sing a bit better, not for a living.
FC.subject('singing', {
  name: 'Singing',
  rev: 1,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: true,           // the learner acts on this subject (P26): plan cards, a story where nothing is wrong in every drill stage, the late return, the baseline check
  blurb: 'When a song comes out wrong, find what went wrong (the top notes, the air, the note itself, or the sound of the words), fix it on the spot, and look after your voice.',
  // Course order. u1 is the first question; u2 to u5 are the four branches, in the order of its answers (the order that
  // wins when a line shows two things at once); u6 is a fact unit on looking after the voice and practicing.
  // See docs/rebuild/singing-plan.md.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],
  // The places a story can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "two settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['home', 'car', 'shower', 'karaoke', 'choir', 'party', 'kids', 'openmic', 'church'],
  // The baseline check (E21): six stories asked once before Unit One, three of them with nothing wrong, in Unit One's
  // story collection (use 'baseline', file u1.cases-baseline-1.js). They are in no card or drill.
  baseline: ['g-base-choir-shout', 'g-base-car-fine', 'g-base-karaoke-air', 'g-base-kids-fine', 'g-base-shower-note', 'g-base-party-nasal'],
  // "Where these questions stop", shown on the reference screen.
  limits: [
    { h: 'This is for singing for fun',
      text: 'The questions name what went wrong in one line and give the first thing to try. They are not a teacher. A few lessons with a teacher who listens to you will do more than any app, and what you learn here gives you the words to say what you want help with.' },
    { h: 'Pain is a stop sign, and a lost voice is for a doctor',
      text: 'Singing should never hurt. If it does, stop for the day. A voice that stays hoarse for more than two or three weeks, with no cold to explain it, is a matter for a doctor, not for practice.' },
    { h: 'A name is for one line on one day',
      text: 'Your voice changes with sleep, water, a cold, nerves and the time of day. A story names what one line showed, not what your voice is. The same line can get a different name next week.' },
    { h: 'Your voice is not the record',
      text: 'The singer on the record has their own voice, a studio, and as many tries as they wanted. Yours is a different instrument. The questions compare you with the song’s notes, never with the singer, and a song that sits wrong for your voice can be moved lower or higher.' },
    { h: 'What is not covered',
      text: 'Singing a harmony, reading music, style (runs, growls, the wobble in a held note), microphones, blending in a choir, and anything a professional needs. The first question still works on most of it; the names after it do not.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-08', change: 'First version under lesson standard 1: a new subject for a casual singer. The first question sorts what bothers you about a line into five kinds, including one where nothing is wrong. Four branches of one question each, every one ending in a name for the voice doing fine as well as names for what went wrong, and one fact unit on looking after the voice.' }
  ]
});
