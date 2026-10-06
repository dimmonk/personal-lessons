// Civics, Unit Five: drill cases for the first stage of the ramp (one question alone). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('civics', 'u5', [

  /* ---------- The question alone, on a new case ---------- */
  { id: 'pc-review-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a flyer on a college campus',
    text: 'A state law bans anyone from handing out printed papers on a college campus. Mina was fined $40 for giving out a flyer about a student election. She asked a judge to cancel the fine, saying the law takes away the right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying the law takes away the right to speak' },
    reason: { J1: 'Mina was fined, so she was harmed, and she says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'She does not ask whether a flyer is the kind of paper the law covers. She says the law should not exist.' } },

  { id: 'pc-notlegal-1', use: 'drill', tier: 'clean', setting: 'travel', topic: 'a midnight train',
    text: 'Travelers at Barrow Station ask a judge to order the city transit board to run a train at midnight, saying that a late train would be better for night workers. No law requires a late train, and nobody says that having none takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the city transit board', J1: 'No law requires a late train, and nobody says that having none takes away a right' },
    reason: { J1: 'The travelers want the judge to choose what is better, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'There is no law whose words the judge could read to answer. The travelers want the judge to choose.' } },

  { id: 'pc-interpret-1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a pet limit and a fish tank',
    text: 'A town law says that a household may keep no more than two pets. Owen keeps two cats and a tank with twelve fish, and he was fined. He does not say the law is wrong. He asked a judge to decide whether a tank of fish counts as one pet or twelve under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'He asked a judge to decide', J1: 'whether a tank of fish counts as one pet or twelve under the law' },
    reason: { J1: 'Owen accepts the law and asks how far a word reaches: {cue:J1}. The judge answers from the law and earlier rulings on the same words ({t:precedent}), not from a view about pets.' },
    not: { outcome: 'review', why: 'Owen is not saying the law takes away a right or breaks the Constitution.' } },

  { id: 'pc-trial-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'bail set very high',
    text: 'Arman is charged with shoplifting a $20 item. The court set his bail at $50,000. His lawyer asks the judge to decide whether bail that high is excessive, as the Eighth Amendment forbids.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'His lawyer asks the judge to decide', J1: 'whether bail that high is excessive, as the Eighth Amendment forbids' },
    reason: { J1: 'Arman is accused of a crime, and his lawyer asks whether a step the Constitution promises was followed: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'The judge is not asked what the words of a law cover. The question is whether a promised step was kept.' } },
]);
