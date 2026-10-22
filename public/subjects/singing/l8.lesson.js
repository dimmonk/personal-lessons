// Singing, lesson 8: What happens at the top (part 8). The plan's five things at the top (the owner's "five things that can happen at the top
// of a line, and the one that needs no fixing") and falling short, which lesson 7 set apart from them, so the list covers every way a top
// note goes: a light, easy top (fine), pushing (V11), cracking and squeezing (V11, V12), falling short (the note check, V3), out of range
// (lesson 1, V21). Which fix each needs, one thing at a time, the biggest first (V9); the top beats the note when a pushed note is also sharp
// (V11). Taught on one screen with look-alikes side by side (P12), worked once (P10), practised in pairs, then mixed with lesson 7's cases
// (P22), then one group of light notes without the line (lesson 7's skill kept up). The check is six new cases, five right (V8, V9).
FC.lesson('singing', {
  id: 'l8', part: '8', title: 'What happens at the top', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'The top of a line is where most singers think they have failed. Often nothing is wrong. When something is, there are only a few things it can be, and each has its own fix.',
    'So name what happened first, then fix that one thing.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'Six things at the top',
      show: [
        { kind: 'prose', text: [
          'First the range: on “oo” at an easy loudness, does the top note come? If not, it is out of range: move the song lower.',
          'If it comes, listen to what happens as the line climbs:',
          'A light, easy top: the voice gets lighter and thinner, smoothly, on the note, with nothing tight. Leave it alone.',
          'Pushing: louder and louder as it climbs, the top a shout, often a shade sharp. Sing it lighter and softer, on “oo” first.',
          'Cracking: a sudden break or flip, with a jolt or a gap, into a thin, airy sound, and the note after it is there. Slide up through that spot on “oo” or through a straw, lightly, before the words.',
          'Squeezing: the throat tightens and the sound goes thin and strangled, without getting louder. Take it on “oo” or through a straw first, lightly.',
          'Falling short: it comes out easily but sits under the note. That is the note check: check it against a steady note and move up to it.'] },
        { kind: 'pair', a: { kind: 'prose', text: 'A light, easy top: thinner, and smooth all the way.' }, b: { kind: 'prose', text: 'Cracking: thinner, with a sudden break.' },
          compare: 'Both get thinner up high. Only one changes suddenly, with a jolt or a gap.' },
        { kind: 'pair', a: { kind: 'prose', text: 'Pushing: strained, and louder.' }, b: { kind: 'prose', text: 'Squeezing: strained, and no louder.' },
          compare: 'Whether it got louder. If a pushed note is also a shade over, fix the pushing: it is what made the note go sharp.' },
        { kind: 'prose', text: 'Next, a singer whose voice does something odd on the way up. Watch how the range comes first, then what the voice does.' }
      ] },
    { worked: 'top-worked-sofia' },
    { set: { items: [['top-ben-smooth', 'top-ana-flips'], ['top-theo-shout', 'top-rosa-tight'], ['top-sam-strain', 'top-mia-under']], order: 'listed' } },
    { set: { items: ['top-jon-broke', 'top-lucy-thin', 'top-kai-strangled', 'top-zara-shouted', 'top-eli-chorus', 'top-nadia-sure'], order: 'shuffle', mix: { from: ['l7'], share: 0.25 } } },
    { title: 'Keep it light',
      show: [{ kind: 'prose', text: 'One more group of top notes, sung lightly on “oo” and then on “ah” if you like, no louder than you talk. Say where you landed before you see it.' }] },
    { set: { items: [{ sing: { task: 'light', cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Sing the top of a song you know and name what happens there. Then try that one fix, and only that one.' }] }
  ],
  check: { items: ['top-ray-jolt', 'top-lin-pinched', 'top-ken-weak', 'top-ada-louder', 'top-max-never', 'top-ida-low'], feedback: 'at-end', pass: [{ right: { min: 5 } }] }
});
