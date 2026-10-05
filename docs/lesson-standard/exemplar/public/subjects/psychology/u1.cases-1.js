// Psychology, Unit One: SAMPLE ONLY. Two cases from the bank Unit One will own once it is rebuilt.
// They are here so that Unit Two's drill can show how earlier-unit items appear: drawn by the app from the
// earlier unit's bank (due ones first), unlabelled, and asked only as far as the learner has been taught
// (the first question only, because the names in these branches come later).
// Unit Two does not go live before Unit One is rebuilt (lesson standard F6 step 4), and these samples go then.

FC.cases('psychology', 'u1', [
  { id: 'g-notes', use: 'drill', tier: 'clean', setting: 'home', topic: 'a partner who says it never happened',
    text: "Every time Zoe brings up something her partner said, he tells her it never happened and that she is imagining things. She has started writing conversations down so that she can check her own memory.",
    route: { D1: ['tactic'] },
    cues: { D1: 'he tells her it never happened and that she is imagining things' },
    reason: { D1: 'One person is doing this to another, again and again: {cue:D1}. Nobody here is reasoning about a view of their own.' } },

  { id: 'g-genius', use: 'drill', tier: 'clean', setting: 'work', topic: 'a misunderstood genius',
    text: "For ten years, in every job and every friendship, Karl has been the misunderstood genius, and everyone else has turned out in the end to be a fool or an enemy.",
    route: { D1: ['pattern'] },
    cues: { D1: 'For ten years, in every job and every friendship' },
    reason: { D1: 'The case describes how a person is across years and settings: {cue:D1}. It is not one piece of reasoning.' } }
]);
