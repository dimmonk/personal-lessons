// Statistical Claims: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('stats', {
  name: 'Statistical Claims',
  rev: 2,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: true,           // the learner acts on these claims (P26): legitimate cases in every drill stage, the plan card,
                          // the late return, and the baseline check before Unit One
  blurb: 'Before you believe, share or act on a claim made with numbers, check how it was put together, find the first place it could mislead you or see that it holds, and say which from the words of the claim.',
  // Order of the course (docs/rebuild/stats-plan.md): the gate unit, the claims with nothing wrong, then one unit
  // for each part of a claim, in the order a claim is put together. The old Units Six (claims that skip the
  // questions) and Seven (the whole key) have no unit of their own: their claims are folded into the unit drills
  // and the specimens. All six units are rebuilt; the old data file is gone.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "taught in two areas of life and drilled in a third" checkable (lesson standard W5.3, W5.5, V33).
  settings: ['work', 'health', 'money', 'learning', 'community', 'leisure', 'home'],
  // The baseline check (E21): six cases from Unit One's case collection (use 'baseline'), half of them claims with nothing wrong,
  // in an order that alternates so that the learner cannot guess the next one from the last (docs/rebuild/stats-plan.md).
  baseline: ['gate-b-survey', 'gate-b-poll', 'gate-b-clinics', 'gate-b-screening', 'gate-b-scheme', 'gate-b-dogs'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'Naming a problem does not make a claim false',
      text: 'The questions find the first place a claim could mislead you. The claim may still be true: a survey few people answered can land on the right figure by luck. What they tell you is that the figure, as given, cannot show what the claim says, and what you would need to see before it could.' },
    { h: 'It stops at the first problem',
      text: 'A claim can go wrong in more than one place. The questions name the earliest, because everything after it rests on it. Once that is put right, the later parts still need checking.' },
    { h: 'It checks how a figure was put together, not whether it matters',
      text: 'A claim can pass every question and still describe a difference too small to matter to you. Whether one more person in a thousand is worth acting on is your decision, and not the questions’.' },
    { h: 'It lets a cause hold only when the groups were formed by chance',
      text: 'Researchers have other ways to show a cause when a test of that kind cannot be run: following people for years, matching them on everything else that might matter, finding an accident of history that split people the way a lottery would. Those take more checking than these questions ask for. These questions treat any claim of cause made without groups formed by chance as open to one of its other explanations. That is the careful reading, and not always the final one.' },
    { h: 'Some ways to mislead are outside these questions',
      text: 'An average that nobody is near, one study picked out of many that found nothing, a chart whose scale starts far above zero, a figure from someone paid to make it: each can mislead you, and the questions ask about none of them. A study in a well-known journal still has the same parts to check as any other claim.' },
    { h: 'Use it on the claims you like',
      text: 'It is easiest to find problems in claims you already disagree with. Ask the same questions of the ones you agree with, and on the figures you report yourself.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question gains a fifth answer for a claim where nothing goes wrong, which has its own branch for the four sound kinds of claim; every branch asks one question; a claim of cause with nothing to compare it with moves to the cause branch. All six units are rebuilt to it, and 23 specimens run the whole key, clean first, with a sound claim for each of the four kinds that hold.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' }
  ]
});
