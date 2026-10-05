// Psychology, Unit Four: the reverse items of stage two (one for each name), and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the taught names sounds like (voice),
// so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// ask.type 'missing': "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to" lines).
// ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits, and the claim put right is always last.

FC.cases('psychology', 'u4', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'pa-rev-narcgrand', use: 'drill', kind: 'reverse', outcome: 'narcgrand', expect: 'hear',
    options: [
      { text: '"Do you know who you are talking to? I will not be spoken to like that."', voice: 'narcgrand' },
      { text: '"No, don’t worry about me. I stopped expecting to be noticed years ago."', voice: 'narcvuln' },
      { text: '"Please don’t go. I’ll do anything, I’ll change."', voice: 'borderline' },
      { text: '"They should have read the contract. Not my problem."', voice: 'antisocial' }
    ],
    why: 'It is scorn from a person who expects to be treated as special and is not.' },

  { id: 'pa-rev-narcvuln', use: 'drill', kind: 'reverse', outcome: 'narcvuln', expect: 'hear',
    options: [
      { text: '"I am the best this firm has ever had, and everyone knows it."', voice: 'narcgrand' },
      { text: '"Of course nobody asked me. They never do."', voice: 'narcvuln' },
      { text: '"Everybody, look at what happened to me today!"', voice: 'histrionic' },
      { text: '"That’s just how I am, and the people who know me know it."', voice: 'ordpersonality' }
    ],
    why: 'It is the hurt of someone who feels overlooked and owed more, said quietly and followed by withdrawal.' },

  { id: 'pa-rev-borderline', use: 'drill', kind: 'reverse', outcome: 'borderline', expect: 'find',
    options: [
      { text: 'He told every new colleague that he was the best in the department, and called the one who was praised "lucky".', voice: 'narcgrand' },
      { text: 'She sent forty messages when her friend went away, then blocked her, then sent twelve apologies.', voice: 'borderline' },
      { text: 'She told the whole room about her terrible week until they stopped listening to the speaker.', voice: 'histrionic' },
      { text: 'He stopped speaking to everyone who was promoted, and kept a count in his head.', voice: 'narcvuln' }
    ],
    why: 'That detail is the desperate effort to keep someone close, the attack when she seemed to be going, and the swing back.' },

  { id: 'pa-rev-histrionic', use: 'drill', kind: 'reverse', outcome: 'histrionic', expect: 'find',
    options: [
      { text: 'She pleaded with her flatmate not to leave, and then called her a fake.', voice: 'borderline' },
      { text: 'When a colleague was applauded, she told a longer and more tearful story until the room turned back to her.', voice: 'histrionic' },
      { text: 'The same friends and neighbours have come to his parties for forty years.', voice: 'ordpersonality' },
      { text: 'He took deposits for work he never did, and shrugged when a customer cried.', voice: 'antisocial' }
    ],
    why: 'That detail is the display getting bigger at the moment the attention goes to someone else.' },

  { id: 'pa-rev-antisocial', use: 'drill', kind: 'reverse', outcome: 'antisocial', expect: 'hear',
    options: [
      { text: '"I deserved that promotion. Nobody here is in my league."', voice: 'narcgrand' },
      { text: '"I knew you would leave me. I’m sorry, I’m sorry."', voice: 'borderline' },
      { text: '"That’s business. You should have read the paperwork."', voice: 'antisocial' },
      { text: '"I’m devastated, I can’t even talk about it."', voice: 'histrionic' }
    ],
    why: 'It is the voice of someone who has used a person and puts the harm on the person who was used, with no regret.' },

  { id: 'pa-rev-ordpersonality', use: 'drill', kind: 'reverse', outcome: 'ordpersonality', expect: 'find',
    options: [
      { text: 'Staff who leave within a year, and a son who no longer visits.', voice: 'narcgrand' },
      { text: 'A count of who was thanked, and a sister who has not heard from him in two years.', voice: 'narcvuln' },
      { text: 'The same three friends since school, and a boss who says she can be relied on.', voice: 'ordpersonality' },
      { text: 'Six friends who no longer answer her calls.', voice: 'borderline' }
    ],
    why: 'That detail is the absence of a repeated cost: people stay, and the way of being has not been leaving damage behind it.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'pa-claim-demo', use: 'claim',
    text: '"We broke up after four years. She was in tears and then furious in the same hour. That is textbook borderline."',
    ask: { type: 'missing', name: 'borderline' },
    fault: 'The claim points at one relationship and one bad hour. Tears and then fury in one hour is not a swing that repeats, and one relationship is not years with more than one person in more than one place. It also names a person from a moment: the claim says what she is, and what it shows is only what she did in one hour.',
    corrected: 'We broke up after four years. She was in tears and then furious in the same hour. That tells you how she was that day, with me. It would be {o:borderline} only if the case showed all of this: {needs:borderline}.' },

  { id: 'pa-claim-boss', use: 'claim',
    text: '"He talked over everyone at the meeting and said his plan was the only sensible one. Classic grandiose narcissism."',
    ask: { type: 'missing', name: 'narcgrand' },
    fault: 'The claim points at one meeting. Talking over people and saying that your own plan is best is something many people do on one day, for many reasons. Nothing in it shows years, other places and relationships, scorn when he is not treated as special, or a cost.',
    corrected: 'He talked over everyone at the meeting and said his plan was the only sensible one. That describes one meeting. You could not use the name {o:narcgrand} without years behind it, other places and relationships, and a cost to him or to the people around him.' },

  { id: 'pa-claim-difficult', use: 'claim',
    text: '"She is blunt, she is loud and she has been that way for fifty years, in every job. There has to be a disorder behind that."',
    ask: { type: 'option', step: 'P1', answer: 'steady' },
    fault: 'Everything the claim gives is a way of being: blunt, loud, fifty years, every job. It gives no cost at all, and every name here but one needs a cost. What the claim describes is one steady way of being, with nothing in it that keeps costing anyone.',
    corrected: 'She is blunt and loud, and she has been for fifty years in every job. That is a way of being. It would point to one of the five names that need a cost only if the case showed her way of being costing her, or the people around her, again and again.' },

  { id: 'pa-claim-quiet', use: 'claim',
    text: '"He is quiet, and he sulked for a day when his name was left off the card. That is vulnerable narcissism."',
    ask: { type: 'missing', name: 'narcvuln' },
    fault: 'The claim points at one day and one card. A person who sulks for a day and then gets over it has had a hard day, and being quiet is not a count of what others owe.',
    corrected: 'He is quiet, and he sulked for a day when his name was left off the card. That describes a day. It would be {o:narcvuln} only if years, other places and relationships, a count of what he is owed, hurt withdrawal and a cost were all in the case.' },

  { id: 'pa-claim-loud', use: 'claim',
    text: '"She is the loudest and most dramatic person at every party, and her friends love her for it. She is clearly histrionic."',
    ask: { type: 'missing', name: 'histrionic' },
    fault: 'The claim shows a way of being: loud and dramatic, and the same everywhere. It does not show a bigger display when attention goes to someone else, and it shows no cost: her friends love her for it. Being dramatic is not enough.',
    corrected: 'She is the loudest and most dramatic person at every party, and her friends love her for it. That is a way of being, and by itself it is {o:ordpersonality}. It would be {o:histrionic} only if her displays grew when attention went elsewhere, and it kept costing her friends and places.' },

  { id: 'pa-claim-sociopath', use: 'claim',
    text: '"He told his boss he was ill when he was not. He is a total sociopath."',
    ask: { type: 'missing', name: 'antisocial' },
    fault: 'The claim points at one lie. One lie, even a bad one, is not rules broken and people used for years, in more than one place, with no regret. It shows nothing about regret at all. And the everyday word in the claim is not a name used here for a person. A lasting way of being that keeps costing is what the word {t:pd} stands for, and one lie is not that.',
    corrected: 'He told his boss he was ill when he was not. That is one lie, and a lie is not a pattern. It would be {o:antisocial} only if the case showed rules broken and people used for years, no regret, and people hurt.' }
]);
