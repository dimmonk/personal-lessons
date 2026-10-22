// Singing, lesson 11: Looking after your voice (part 11). The owner's "water, rest for a hoarse voice" with the warm-up and practice habits,
// and the doctor's timing as the hoarseness guideline prints it (research note V19, re-read 2026-10-22): rest a hoarse voice; a doctor if it
// is not getting better in 7 to 10 days, whatever started it, or with no cold to explain it; an ear, nose and throat doctor by four weeks at
// the latest; right away with a warning sign. Water is a daily habit, not a fix (V20); a hum or a straw first (V12); short, regular practice
// (V18; R2, R4). The facts are told once, a case is worked and cases are practised in pairs (P12), then the facts are answered from memory
// (R1, R7); the check asks the seven facts again from memory in new words (6 of 7, the plan) and three new cases (2 of 3), so the decision
// the lesson teaches is checked too (build-subject 5).
FC.lesson('singing', {
  id: 'l11', part: '11', title: 'Looking after your voice', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'A voice gets tired and hoarse, like anything you use. Most of the time rest is all it needs. A few signs mean it needs a doctor, and you should know them before you need them.',
    'If singing hurts, stop. Pain when you speak or swallow means a doctor right away.'
  ],
  flow: [
    { title: 'Rest, and when to see a doctor',
      show: [
        { kind: 'prose', text: [
          'Hoarse means any change in how your voice sounds: rough, husky, airy, weak.',
          'Most hoarseness gets better with rest. After a cold it usually goes in 7 to 10 days.',
          'Resting means using your voice less and gently. Whispering is not rest: avoid it, along with shouting and clearing your throat over and over.',
          'Not getting better after 7 to 10 days, whatever started it, or no cold to explain it: see a doctor. Sooner if you smoke.',
          'By four weeks at the latest, an ear, nose and throat doctor should look at it.',
          'Do not wait at all with any of these: coughing up blood, trouble swallowing or breathing, a lump in your neck, pain when you speak or swallow, or a voice you have lost, or that has changed so much it is hard to use, for more than a few days.',
          'And see a doctor if your voice keeps you from singing, teaching or doing your work.'] },
        { kind: 'prose', text: 'Sam’s voice is hoarse five days into a cold, getting a little better, with none of those signs: rest, and watch it. If it were no better after 10 days, he should see a doctor. If he had a lump in his neck on day two, right away.' }
      ] },
    { title: 'Everyday habits',
      show: [{ kind: 'prose', text: [
        'Warm up first: a gentle hum, or humming through a straw, makes the voice work more easily.',
        'Drink water through the day. It is a cheap habit that may help a little, not a fix for a hoarse voice. For a dry throat, humid air helps.',
        'Do not sing too long or too loudly at once. Short practice on most days does more than one long session.'] }] },
    { worked: 'care-worked-sam' },
    { set: { items: [['care-mia-cold', 'care-raj-three-weeks'], ['care-lin-lump', 'care-joe-cold'], ['care-kay-two-weeks', 'care-ben-swallow']], order: 'listed' } },
    { set: { items: ['care-rest', 'care-days', 'care-four-weeks', 'care-warning'], order: 'listed' } },
    { set: { items: ['care-avoid', 'care-air', 'care-warmup'], order: 'listed' } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Before your next song, hum for a minute. And the next time your voice is hoarse, count the days from when it started.' }] }
  ],
  check: { items: ['care-rest-new', 'care-days-new', 'care-four-weeks-new', 'care-warning-new', 'care-avoid-new', 'care-air-new', 'care-warmup-new', 'care-lee-cold', 'care-ron-husky', 'care-gia-breath'],
    order: 'shuffle', feedback: 'at-end', pass: [{ ask: 'say', right: { min: 6 }, of: 'from memory' }, { ask: 'care', right: { min: 2 }, of: 'the stories' }] }
});
