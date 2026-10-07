// Civics, Unit Five: fresh cases kept back for later days (second file: the last two names, two cases each).

FC.cases('civics', 'u5', [

  /* ---------- A political question ---------- */
  { id: 'ret-notlegal-1', use: 'return', tier: 'varied', setting: 'work', topic: 'the start of a depot shift',
    text: 'Workers at the Tarn city depot ask a judge to order the depot to start shifts an hour later, saying that it would be better for tired drivers. No law sets when a shift must start, and nobody says the early start takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the depot', J1: 'No law sets when a shift must start, and nobody says the early start takes away a right' },
    reason: { D1: 'The workers have asked a judge to act: {cue:D1}.',
              J1: 'The workers want the judge to choose a later start because it would be better, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says a rule takes away a right, so the judge has nothing in the Constitution to check the start time against.' } },

  { id: 'ret-notlegal-2', use: 'return', tier: 'varied', setting: 'immigration', topic: 'a council agenda in three languages',
    text: 'A group of residents in Eastvale ask a judge to order the council to publish its agenda in three languages, saying that it would help new neighbors follow what the council does. No law requires the council to do so, and nobody says that publishing in one language takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the council', J1: 'No law requires the council to do so, and nobody says that publishing in one language takes away a right' },
    reason: { D1: 'The residents have asked a judge to act: {cue:D1}.',
              J1: 'They want the judge to choose a kinder way to publish, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'There is no law whose words the judge could read. The residents want the judge to choose.' } },

  /* ---------- The rights of the accused ---------- */
  { id: 'ret-trial-1', use: 'return', tier: 'varied', setting: 'community', topic: 'a trial without a jury',
    text: 'Mei is charged with a serious crime. The judge told her that she would be tried by a single judge and that no jury would be called. Her lawyer asks the judge to decide whether Mei is entitled to the trial by jury that the Constitution promises.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'Her lawyer asks the judge to decide', J1: 'whether Mei is entitled to the trial by jury that the Constitution promises' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Mei is accused of a crime, and her lawyer asks whether a step the Constitution promises was kept: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says the law against the crime is wrong. The question is how Mei will be tried.' } },

  { id: 'ret-trial-2', use: 'return', tier: 'varied', setting: 'immigration', topic: 'silence and a non-citizen',
    text: 'Carlos, who is not a citizen, is charged with a crime. At the police station an officer told him that he has no right to stay silent because he is not a citizen. His lawyer asks the judge to decide whether the officer followed the steps that the Constitution promises to a person who is accused.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer asks the judge to decide', J1: 'whether the officer followed the steps that the Constitution promises to a person who is accused' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Carlos is accused of a crime, and his lawyer asks whether the promised steps were followed: {cue:J1}. Not being a citizen does not change what the judge is asked.' },
    not: { outcome: 'interpret', why: 'The judge is not asked what a law’s words cover. The question is whether the promised steps were followed.' } },
]);
