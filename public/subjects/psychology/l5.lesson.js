// Psychology, lesson 5, look-alikes and false friends (part 5). The way of thinking is the clinical differential (DSM-5 Cluster B; Linehan on
// the borderline pattern; Hare on psychopathy), from the owner's own course (Lesson 4): patterns that look alike outside are told apart by what
// drives them (fear of being left, a need for an audience, a need for admiration, indifference to others) and by what the person does when that is
// threatened. Then the trap that matters most, that unpleasant is not a diagnosis, and the words that are not diagnoses. One story is worked
// question by question; the practice runs two of the owner's tells as guided pairs, then one shuffled set of every name; the check names eight new
// stories. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l5', part: '5', title: 'Look-alikes and false friends', rev: 4, status: 'draft',
  history: [
    { rev: 1, date: '2026-10-18', change: 'First version, on the owner\'s own course (Lesson 4 and Drill 4.1): the borderline, histrionic and antisocial patterns against the narcissistic, unpleasant is not a diagnosis, and the words that are not diagnoses.' },
    { rev: 2, date: '2026-10-18', change: 'After the first reviews: one list of names, Question 1 asked only where it decides, a response taught for every name, grandiose and vulnerable told apart, a last set of all the names.' },
    { rev: 3, date: '2026-10-18', change: 'After the second reviews: cut to the measured time, the repeated stories merged or reshaped, ordinary against too little to tell re-keyed by the one line, span asked only where it decides, splitting and impulsivity taught, the response asked on a few stories.' },
    { rev: 4, date: '2026-10-18', change: 'After the third reviews: taught as the clinical differential (what drives each pattern, and what the person does when it is threatened); borderline against histrionic given its own test; the borderline response says it improves with treatment; outside help taught and asked where safety is at risk; shy is not a name, introduced; counter-signs count; the clones cut, every check story a new shape; the last set has every name; Question 1 dropped; measured at about 20 minutes.' }
  ],
  why: [
    'A friend says her ex "is such a narcissist" because he panicked every time she left the house. Panic at being left is a different pattern, with a different fix.',
    'In about 20 minutes you will learn to tell five look-alike patterns apart by what drives each one, and what to do about each.'
  ],
  flow: [
    { title: 'What drives it',
      show: [
        { kind: 'prose', text: [
          'The five questions: 1. What is going on? 2. One moment, or a lasting pattern? 3. What does it do for them? 4. What is the nearest look-alike? 5. What would prove the read wrong?',
          'For Question 2, check first for a hard time (grief, stress, illness). "Once or twice": the story says it is rare. "The story does not say": one scene, nothing about other times. A pattern here needs years and many people.',
          'Questions 3 and 4 do the rest: clinicians tell these patterns apart by what drives each one, and what the person does when that is threatened.',
          'Ordinary: the facts show a normal reason (stress, a fair point, plain self-interest). Too little to tell: the facts are too few to see what is going on, so you find out more.'] }
      ] },
    { title: 'Four drives',
      show: [
        { kind: 'prose', text: [
          'Borderline: fear of being left. When someone pulls away, they cling and beg, then turn on that person in fury (the same person all good, then all bad), then cling again. Their sense of self keeps shifting.',
          'Histrionic: a need to be noticed. When attention moves elsewhere, they win it back with a bigger story or bigger feelings. Warm, easily swayed, happy with any audience.',
          'Narcissistic: a need to be admired as better. When criticized, or when praise goes to someone else, they run down whoever has it. Grandiose does it out loud, with contempt or rage. Vulnerable does it quietly: sure they are special and unseen, with cold resentment and withdrawal.',
          'Antisocial: indifference to others. No remorse when caught: routine lies, rules broken on impulse, people used. They do not care what you think of them, only what you can be used for. Psychopathy is the extreme, with almost no empathy; "sociopath" is slang for it.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'Her boyfriend goes on a trip. She calls him ten times a night and says she cannot live without him.' },
          b: { kind: 'prose', text: 'Her boyfriend goes on a trip. She spends the week at parties, telling dramatic stories of how she misses him.' },
          compare: 'The first needs that one person to stay: borderline. The second needs an audience, any audience: histrionic.' }
      ] },
    { title: 'Unpleasant is not a diagnosis',
      show: [
        { kind: 'prose', text: [
          'The wrong idea: the more someone bothers you, the more disordered they must be. Selfish or rude with a plain reason is ordinary. Shy or easily hurt is no name either: vulnerable narcissism needs the sense of being special and owed.',
          '"Toxic", "narc", "sociopath" and "main character energy" are insults: they name a feeling, not signs. Signs against a name count too (Question 5, what would prove it wrong): warmth, gladness at others\' wins, remorse.',
          'Only a clinician diagnoses; these names are guesses to test.'] }
      ] },
    { title: 'Signs, and what to do',
      show: [
        { kind: 'prose', text: [
          ...psyRows(['borderline', 'histrionic', 'grandiose', 'vulnerable', 'antisocial']),
          'Grandiose, vulnerable, histrionic: keep firm limits; do not expect to talk them out of it. Borderline: calm, firm limits, and encourage a therapist; it often improves with treatment. Antisocial: protect yourself; keep money and secrets out of reach. Ordinary: nothing to fix. Too little: find out more.',
          'If anyone\'s safety is at risk, such as a threat of self-harm, get outside help first, whatever the name.'] }
      ] },
    { worked: 'w5-ghosted' },
    { set: { items: [['a-leave', 'a-admire'], ['b-party', 'b-mirror']], order: 'listed' } },
    { set: { items: [['c-salesman', 'c-boss'], 'x-band', 'x-threat', 'x-host', 'd-landlord', 'd-party'], order: 'shuffle' } }
  ],
  check: {
    items: ['k-moved', 'k-flirt', 'k-crash', 'k-bars', 'k-runner', 'k-envy', 'k-meeting', 'k-eyes'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});
