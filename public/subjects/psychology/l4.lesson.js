// Psychology, lesson 4, confidence or narcissism (part 4). From the owner's own course, Lesson 3, read the clinical way (DSM-5's criteria for
// narcissistic personality disorder; Pincus & Lukowitsky 2010; Miller et al. 2011): confidence, self-esteem and narcissism are not one dial, and the
// test is what happens to a person's regard for others when their confidence is tested; the nine signs, the three main ones, and what a pattern needs
// (years, many settings, since early adulthood, real harm); grandiose (cracks outward) and vulnerable (cracks inward, with shame and anger too) side by
// side; traits against a full pattern; healthy, ordinary and too little to tell; the response to each; the faulty claims. One story is worked; the
// practice runs two look-alike pairs, then every name of the lesson shuffled with two stories from lessons 2 and 3; the check names eight new stories.
// Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l4', part: '4', title: 'Confidence or narcissism', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version, on the owner\'s own course (Lesson 3 and Drills 3.1 and 3.2) read the clinical way: the test of regard for others, the nine signs and the three main ones, grandiose and vulnerable, traits against a pattern.' }],
  why: [
    'Your roommate posts a photo of the deck she built and says she is proud. A friend sighs, "Such a narcissist." Loudness will not settle it.',
    'In about twenty minutes you will learn the test that does, and how much a story must show before the word is earned.'
  ],
  flow: [
    { title: 'Not one dial',
      show: [
        { kind: 'prose', text: PSY_QUESTIONS },
        { kind: 'prose', text: [
          'Confidence: belief you can do a particular thing. Self-esteem: a steady sense of your own worth that does not need anyone else to be smaller. Narcissism: a picture of yourself as exceptional that needs other people\'s admiration to stay up, with little care for others.',
          'The test is not how sure someone sounds, but what happens to their regard for other people when that confidence is tested: criticism, a rival\'s win, being passed over. Steady self-esteem lets the regard hold; narcissism needs the other person cut down.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '"I\'m the best closer here." When a rookie beat her numbers, she bought him lunch and asked how he did it.' },
          b: { kind: 'prose', text: '"I\'m the best closer here." When a rookie beat his numbers, he told the boss the rookie cheated.' },
          compare: 'The same boast and the same test. Her regard for the rookie held; his fell.' }
      ] },
    { title: 'The signs clinicians count',
      show: [
        { kind: 'prose', text: [
          'The clinicians\' manual lists nine signs: a grand picture of yourself; daydreams of unlimited success or power; feeling special and unique; a need for a lot of admiration; entitlement (rules are for others); using people; little empathy; envy, or certainty that others envy you; arrogance.',
          'Most people show two or three of these sometimes. Three are the main signs: the grand picture, the need for admiration, little empathy. A diagnosis needs five of the nine, steady since early adulthood, in many settings, with real harm. Only a clinician diagnoses, after ruling out illness, drugs, trauma and a hard time.',
          'Here, name a pattern only when the three main signs show together, for years, with many people. Fewer, even for decades, is traits. Culture and job change how confidence sounds.'] }
      ] },
    { title: 'Two shapes',
      show: [
        { kind: 'prose', text: [
          ...psyRows(['grandiose', 'vulnerable']),
          'Vulnerable can flare into shame and anger too, and one person can show both shapes at different times. The core is the same: I am special and owed recognition.',
          'The reaction to a threatened picture is called narcissistic injury. Outward: calling a critic "an idiot". Inward: a month of silence after a mild review.',
          'Question 2: check the situation first; a divorce or layoff can make anyone self-centered for a while. One scene with no history: the story does not say; "once or twice" only when the story says it is rare.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'For ten years, whenever a friend outshines him, he mocks the friend to everyone, loudly.' },
          b: { kind: 'prose', text: 'For ten years, whenever a friend outshines him, he goes silent and drops the friend.' },
          compare: 'The first cracks outward, as attack: grandiose. The second cracks inward, as withdrawal: vulnerable. Either name still needs the three main signs.' }
      ] },
    { title: 'Healthy, ordinary or too little',
      show: [
        { kind: 'prose', text: [
          'Healthy: the test is shown and the regard holds; a big claim alone is not a sign. Traits: a sign or two for years, even in someone warm. Ordinary: a normal reason is shown (stress, a fair point, a slip put right). Too little to tell: too few facts to see any reason, like one boast by a stranger.',
          'Healthy or ordinary: nothing to fix; give it time and kindness. Traits or too little to tell: do not name it yet; watch and find out more. Grandiose or vulnerable: keep firm limits; do not expect to talk them out of it.',
          'Wrong ideas. "Pride is narcissism": not when nobody is put down. "She boasts in interviews, so she is one": a stage invites bold talk, and it is one setting seen from afar. How unpleasant someone is never counts.'] }
      ] },
    { worked: 'w4-passed' },
    { set: { items: [['n4-photo-held', 'n4-photo-fell'], ['n4-award-years', 'n4-award-divorce']], order: 'shuffle' } },
    { set: { items: ['n4-headnurse', 'n4-compliments', 'n4-firstweek', 'n4-marathon', 'n4-gigs', 'n4-wife', 'm4-seasons', 'm4-stain'], order: 'shuffle' } }
  ],
  check: {
    items: ['k4-motion', 'k4-salon', 'k4-notes', 'k4-plans', 'k4-sister', 'k4-launch', 'k4-grammar', 'k4-chili'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
