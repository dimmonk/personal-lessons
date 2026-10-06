// Statistical Claims, Unit Three: cases shown inside cards, part one (the ones that lasted, and the look-alike cases that go with them).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that question (or a list of phrases); the app marks it, always in the same
// style. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason[STEP] is the reason for this case's answer. A case of a claim that holds has outcome samp_ok and a route through the gate
// and the question of Unit Two's branch (H1). People, firms and studies are invented; no case asserts a contested fact about the world.

FC.cases('stats', 'u3', [

  /* ---------- Survivorship bias ---------- */
  { id: 'cn-restaurants', use: 'teach', tier: 'clean', setting: 'money', topic: 'restaurants still open after ten years', name: 'The Mill Street restaurants',
    text: "Forty restaurants opened on Mill Street in 2014. The street's business newsletter now lists the 12 that are still open, and notes that all 12 open on Sundays. 'Open on Sundays and your restaurant will last,' the newsletter says.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['lists the 12 that are still open', 'Open on Sundays and your restaurant will last'], A1: 'lists the 12 that are still open' } },

  { id: 'cn-app', use: 'check', tier: 'clean', setting: 'learning', topic: 'a language app and its exam', name: 'The language app',
    text: "A language app advertises: 'Nine in ten learners pass the fluency exam.' The exam is only offered to learners who reach level 20. Of the 8,000 people who downloaded the app in January, 400 reached level 20.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: 'The exam is only offered to learners who reach level 20', A1: 'Of the 8,000 people who downloaded the app in January, 400 reached level 20' },
    segments: [
      { text: "A language app advertises: 'Nine in ten learners pass the fluency exam.'", note: 'That is the claim. What you are asked for is who the figure was worked out from, and the words for that come next.' },
      { text: 'The exam is only offered to learners who reach level 20. Of the 8,000 people who downloaded the app in January, 400 reached level 20.' }
    ],
    reason: { S1: 'The claim speaks for "learners", but the exam is only for the ones who got far enough: {cue:S1}.',
              A1: 'The figure is worked out from the learners who got to level 20: {cue:A1}. That is 400 of 8,000, which is 5 in every 100 of the people who started. The other 7,600 are not in it, and the ones who gave up are the ones least likely to pass.' } },

  /* ---------- The look-alike with the claim that holds: the same trial, reported two ways ---------- */
  { id: 'cn-seeds-alive', use: 'teach', tier: 'clean', setting: 'home', topic: 'tomato seeds, only the plants that lived', name: 'The seed company, the plants that lived',
    text: "A seed company says: 'Our tomato plants give 14 kilograms each.' It planted 50 seeds in a trial garden. 30 plants were still alive in September, and the 14 kilograms is their average. The 20 that died early are not counted.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['30 plants were still alive in September, and the 14 kilograms is their average', 'The 20 that died early are not counted'], A1: '30 plants were still alive in September, and the 14 kilograms is their average' } },

  { id: 'cn-seeds-all', use: 'teach', tier: 'clean', setting: 'home', topic: 'tomato seeds, every seed included', name: 'The seed company, every seed',
    text: "A seed company reports on its trial garden: 'We planted 50 tomato seeds, and every one is counted. 30 plants lived to September and 20 died early. All together the 50 gave 420 kilograms, which is 8.4 kilograms for every seed planted.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'every one is counted', H1: 'which is 8.4 kilograms for every seed planted' } },

  /* ---------- The whole claim: the list that was asked is only the ones who stayed ---------- */
  { id: 'cn-yoga', use: 'teach', tier: 'misleading', setting: 'health', topic: 'a yoga studio and the members who left', name: 'The yoga studio',
    text: "A yoga studio has been open for five years, and 300 people have joined it in that time. The studio mailed a survey to its 90 current members: 'How much has the studio helped you?' 88 replied, and 80 said 'a lot'. Its ad says: 'Nine in ten people who try our studio say it helps them a lot.' The other 210 left earlier, and were not asked.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['Nine in ten people who try our studio', 'The other 210 left earlier, and were not asked'], A1: ['its 90 current members', 'The other 210 left earlier, and were not asked'] } }
]);
