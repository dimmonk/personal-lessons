// Psychology, Unit Two: fresh cases kept back for later days (first file: three names, one case each).

FC.cases('psychology', 'u2', [
  /* ---------- Cognitive dissonance reduction ---------- */
  { id: 'ret-chair', use: 'return', tier: 'varied', setting: 'work', topic: 'a late chair',
    text: "Rita tells her team that meetings must start on time. She walks into her own Monday meeting twelve minutes late. 'A good chair gives people time to settle,' she says.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { D1: 'She walks into her own Monday meeting twelve minutes late', R1: 'A good chair gives people time to settle' },
    reason: { D1: 'Rita is defending something she did herself: {cue:D1}, followed by her reason for it.',
              R1: '{cue:R1} is a reason given after arriving late, and it only says the lateness is fine. What she asks of everyone else stays as it was.' },
    not: { outcome: 'confbias', why: 'No evidence is being weighed. She is explaining her own lateness.' } },

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'ret-mountain', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a mountain hike',
    text: "Halfway up a mountain, with cloud closing in and the forecast getting worse, the leader of the hiking group says: 'We drove six hours to get here. We're going to the top.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { D1: 'the leader of the hiking group says', R1: 'We drove six hours to get here' },
    reason: { D1: 'The leader is giving a reason for a choice: {cue:D1}.',
              R1: 'The reason for going on is {cue:R1}: the drive already made. The cloud and the forecast, which are about the next step, are left out.' },
    not: { outcome: 'dissonance', why: 'The leader is not saying something already done is fine. The drive already made is the reason for the next step.' } },

  /* ---------- Confirmation bias ---------- */
  { id: 'ret-bakery', use: 'return', tier: 'varied', setting: 'community', topic: 'a bakery under new owners',
    text: "Edu is sure his local bakery has gone downhill since it changed owners. A dry croissant on Tuesday: 'Told you.' An excellent loaf on Friday: 'They must have had the old baker in.'",
    outcome: 'confbias', route: { D1: ['reasoning'], R1: ['scrutiny'] },
    cues: { D1: 'Edu is sure his local bakery has gone downhill', R1: 'They must have had the old baker in' },
    reason: { D1: 'Edu is defending a view of his own: {cue:D1}.',
              R1: 'The dry croissant, which fits his view, goes in as proof. The excellent loaf, which goes against it, is explained away: {cue:R1}.' },
    not: { outcome: 'fair', why: '{o:fair} would count the excellent loaf as much as the dry croissant. He explains it away, and his view stays put.' } }
]);
