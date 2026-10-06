// Statistical Claims, Unit One, part one: the opening card and the first two answers (who or what the figure was worked out from,
// and what the figure counts). A quick lesson (lesson standard section 19): one meet card and one check for each answer.
// This is the subject's gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and a family's name is its answer to the key's first question, printed by {a:S1.<family>}.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not
// contain: the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer
// on a meet card, the stem of every commit prompt, and the heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers
// in a claim), part (one of the four steps a claim is built from), case (the app's word for one example).

FC.cards('stats', 'u1', [

  { id: 'orient-claim', kind: 'orient',
    h: 'Before you believe a number: which part of the claim could mislead you?',
    canDo: 'After this unit you can read a claim made with numbers, such as a headline, an ad or a message a friend forwards, and say where the trouble in it starts, or that there is none, pointing to the words that show it.',
    everyday: [
      'You meet claims like these every week. A headline says, "Nine in ten parents want school to start later." A message in the neighborhood group says, "Burglaries on our road are up 200%!" An ad says, "People who take our vitamin catch fewer colds." Each one puts a number in front of you and wants you to believe something, share it, or act on it.',
      'A claim made with numbers is built in steps, and each step can be sound or unsound. First, some people or things are counted. Then the count is read as showing something real. Then it is set beside something, so that you can tell whether it is big or small. Sometimes the claim goes further and says that one thing caused another. Each step rests on the ones before it: ten parents stopped outside one school entrance tell you nothing about parents in general, however carefully the later steps are done.',
      'This unit teaches the first question about every claim: which of its parts goes wrong first. Sometimes the answer is that none of them does, and that is an answer too.'
    ],
    add: 'A claim is what someone says with a number in it. The figure is the number: a share, an average, a count. A case is one example: a claim as someone might say it to you.',
    map: { branch: 'gate' } },

  /* ---------- The first answer: the people or things the figure was worked out from ---------- */
  { id: 'meet-counted', kind: 'meet', family: 'counted',
    link: 'Start with the first part of a claim, because every other part rests on it: the people or things that the figure was worked out from.',
    case: 'gate-golf', mark: 'S1',
    strip: [
      'There is a figure: 45 out of 50, which is nine in ten.',
      'It was worked out from the 50 people the reporter happened to ask, found in one place at one time: outside the golf club, on a Saturday morning.',
      'The claim is about the townspeople, which means everyone who lives in the town.'
    ],
    explain: [
      'The sum is fine, and the people did say yes. What is wrong is who is in the figure. People standing outside a golf club on a Saturday morning are mostly golfers, and golfers are likelier than most to want another course. So the figure may be a true picture of golfers and still tell you very little about the town.',
      'Before you ask what a figure means, ask who or what it was worked out from, and whether they are a fair picture of the group the claim is about. The same holds for things: a figure worked out from some shops or some years is a figure about those. Often the people who are missing are missing for a reason tied to the answer: the ones who left, the ones who never replied.',
      'There are two ways the people or things can fail. The first is the one in this case: they are not a fair picture of the group the claim is about. The second is that there are so few of them that luck alone could move the figure: if three people out of four say yes, a fifth person could change "three in four" to "four in five".'
    ],
    feature: { step: 'S1', option: 'counted' },
    name: 'The answer, and the name, is {a:S1.counted}. "Counted" means that a person, a thing or a place is included in the figure, whether anyone literally counted heads or the figure is an average or a share. The people or things do not have to be everyone: a group can be a fair picture of a bigger group without being all of it.' },

  { id: 'check-counted', kind: 'check', after: 'counted',
    case: 'gate-funds',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show what the figure was worked out from, and what is missing from it? Tap them.',
           answer: 'The firm lists the 8 funds it still runs, and it closed 12 others in those years.' } },

  /* ---------- The second answer: what the figure counts ---------- */
  { id: 'meet-measure', kind: 'meet', family: 'measure',
    link: 'Suppose the people in the figure are fine. The next part asks what the figure counts: a figure is a count of something, and the claim reads it as showing something else.',
    case: 'gate-waits', mark: 'S1',
    strip: [
      'There is a figure: waiting time, which went from six hours to four.',
      'It is read as showing something real: patients now wait less time to be treated.',
      'What is counted changed. Last year the clock started when a patient walked in. This year it starts when a nurse first sees them.',
      'The hours before a nurse sees a patient have dropped out of the figure. It could fall to four with every patient waiting exactly as long as before.'
    ],
    explain: [
      'The people in the figure are fine: every patient who came to the emergency rooms, in both years. It is the number itself that has changed what it means. If the clock measured the same thing in both years, a fall in hours would be a fall in waiting. But the clock now starts later, so the figure can fall from six to four without a single patient being seen any sooner.',
      'The same trouble comes in other forms: a new form that counts more or fewer things as one kind, a new tool that reads higher or lower than the old one, or people who work on the figure itself because they are paid or judged on it. In all of them the figure can shift while the real thing it is read as showing stays put. To spot it, ask what else, other than the real thing itself, can shift the figure.'
    ],
    feature: { step: 'S1', option: 'measure' },
    name: 'The answer, and the name, is {a:S1.measure}. "Counts" does not only mean counting heads. It covers whatever the figure is a measure of: hours, dollars, scores, a number of reports.' },

  { id: 'check-measure', kind: 'check', after: 'measure',
    case: 'gate-jobs',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure'] } },

  { id: 'look-counted-measure', kind: 'lookalike', ledger: 'counted~measure',
    link: 'These two are easy to mix up, because in both the figure can be added up correctly and still be misleading.',
    cases: ['gate-reading-volunteers', 'gate-reading-easier'],
    instruction: 'Both cases are about the same school and the same rise in reading scores. Compare one thing: is the trouble in who is in the figure, or in what the figure counts?',
    prompt: { kind: 'which', option: 'S1.measure', answer: 'gate-reading-easier' },
    difference: [
      'In Case A the test is the same, but this year’s figure comes from 11 students who volunteered to stay after class, out of 340. Students who volunteer for an extra test are not a fair picture of the school, and last year’s figure was for everyone. The trouble is who is in the figure. The answer is {a:S1.counted}.',
      'In Case B every student took the test in both years, so nobody is missing. What changed is the test: this year’s is shorter, with easier passages. Scores can rise from 61 to 70 with every student reading exactly as well as before. The trouble is what the figure counts. The answer is {a:S1.measure}.'
    ] }
]);
