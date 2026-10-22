// Singing, lesson 12: Find the cause (part 12). The whole way of thinking at once: new cases across all seven checks, each answered with the check
// that finds it and the fix (research note V8, V9), mixed with earlier lessons' cases (P22), then the sung test without the line. The order's
// one tie-break (a note over only when loud and on when lighter passes the note check and is effort, V11) and the three efforts at the top
// (pushing, squeezing, cracking, lesson 8) are on the map. The check is the plan's real-world test: part 2, six new cases, 5 of 6 right on
// each question; part 1, three new five-note tunes with no line, two sung right (4 of 5 notes on, the last held 2 seconds). The check comes
// back once seven days later on new cases and new tunes (`retest: 7`, a retest of a check with sung tries, built 2026-10-22), so the tune
// test is sung on two different days (V2: consistency; V18).
FC.lesson('singing', {
  id: 'l12', part: '12', title: 'Find the cause', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'This is the whole thing at once. A line goes wrong, or seems to, and you find out why, the way you have practiced: in order, one check at a time.',
    'Then the tune test: new tunes, sung back with no line.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'The seven checks, once more',
      show: [
        { kind: 'prose', text: [
          'Go in order and stop at the first check the story does not clear. That check is the cause, and its fix is the one thing to try:',
          '1. Range: a note will not come, even on “oo” at an easy loudness, or comes out only as a rumble or air. Move the song.',
          '2. Heard: the voice wandered looking for a note that was not in your head. Hear it first.',
          '3. The note: under or over at any loudness, or falling short where the line climbs. Check it against a steady note and move to it. A note that is over only when you sing it loud, and on when you sing it lighter, passes this check: it goes to the next one.',
          '4. Effort, only where the line climbs or gets loud: pushing (louder, sharp or strained), squeezing (tight and strangled, not louder) or cracking (a sudden break into a thin sound). Sing it lighter, on “oo” or through a straw first.',
          '5. Air: the notes are right but the air runs out, is gasped, or is taken mid-word. Plan your breaths.',
          '6. Sound: everything else is right, but the words are nasal, muffled or mumbled. Work on the words.',
          '7. Nothing wrong: it just does not sound like the record. Leave it alone.'] },
        { kind: 'prose', text: 'Pain or a hoarse voice comes before all of them: stop and rest. A new airy sound that does not clear counts as hoarse. None of the stories here has pain or a hoarse voice.' },
        { kind: 'pair', a: { kind: 'prose', text: 'The note check: under, loud or light.' }, b: { kind: 'prose', text: 'The effort check: over or strained only when loud, on when light.' },
          compare: 'Sing it lighter and listen again. If that puts it on the note, the effort raised it.' }
      ] },
    { worked: 'cause-worked-nina' },
    { set: { items: [['cause-ray-too-high', 'cause-tess-belt'], ['cause-ali-wander', 'cause-kim-flat'], ['cause-paul-short', 'cause-gia-loud']], order: 'listed' } },
    { set: { items: [['cause-uma-break', 'cause-dev-runs-out'], ['cause-rob-tight', 'cause-ana-record'], ['cause-ivo-nose', 'cause-lea-friend']], order: 'listed', mix: { from: ['l7', 'l8', 'l9', 'l10'], share: 0.33 } } },
    { title: 'Before the tune test',
      show: [{ kind: 'prose', text: 'Two practice tunes first, without the line. Say where your last note ended before you see how it went.' }] },
    { set: { items: [{ sing: { task: 'melody', notes: 5, maxStep: 4, cents: 50 }, n: 2 }], order: 'listed', guess: true } },
    { title: 'The check',
      show: [{ kind: 'prose', text: 'Six new stories, each with two questions: which check finds it, and what to try. Then three new five-note tunes with no line, each played once before you sing it back: two sung right pass, a tune being right when at least 4 of its 5 notes are on and the last holds 2 seconds. A week after you finish, this check comes back once in your weekly review, on new stories and new tunes, so the tune test is sung on two different days.' }] }
  ],
  check: { items: ['cause-jo-shout', 'cause-ken-under', 'cause-ruby-strain', 'cause-ted-gasp', 'cause-mo-muffled', 'cause-sue-record', { sing: { task: 'melody', notes: 5, maxStep: 4, cents: 50 }, n: 3 }],
    feedback: 'after-each', retest: 7, pass: [
      { ask: 'cause', right: { min: 5 }, of: 'the stories: which check' },
      { ask: 'fix', right: { min: 5 }, of: 'the stories: what to try' },
      { ask: 'sing', right: { min: 2 }, of: 'the tunes: at least 4 of 5 notes on and the last held 2 seconds' }] }
});
