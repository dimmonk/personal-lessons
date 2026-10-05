// Statistical Claims, Unit One, part four: the fourth answer (what the claim says caused what) and two look-alike pairs.

FC.cards('stats', 'u1', [

  /* ---------- The fourth answer: what the claim says caused what ---------- */
  { id: 'meet-cause', kind: 'meet', family: 'cause',
    link: 'Three parts are checked so far: who or what the figure was worked out from, what it counts, and what it is set beside. Many claims stop there. Some take one more step, from "these go together" to "this made that happen".',
    case: 'gate-music', mark: 'S1',
    strip: [
      'There are two groups and a figure for each: the 120 pupils who take the music class average 71 on the math exam, and the 380 who do not average 62.',
      'The first three parts hold. All of the pupils took the same exam, the numbers are given for both groups, and nothing is left out.',
      'Then the claim takes a step further: it says the music lessons raised the scores. That is a claim of cause.',
      'And the case shows another way to explain the same result: nearly all of the music pupils’ families also pay for extra math coaching.'
    ],
    explain: [
      'Take the parts in order. The pupils in the figures are all the pupils who sat the exam, so nobody is left out and nobody is missing. What is counted is a score on one exam, the same for everyone. The two averages are given with their numbers and set side by side. So the first three parts hold, and you go on to the fourth.',
      'The fourth part is a step that claims often make without saying so. Two things go together in the figures: the pupils who take music have higher scores. The claim then says that one made the other happen: the lessons raised the scores. That is a bigger claim than the figures, and the figures alone cannot carry it. Two things can go together without one making the other happen.',
      'To see whether the claim is safe, look for another explanation of the same figures. Here the case itself tells you: nearly all of the music pupils’ families also pay for extra math coaching. That alone could lift their scores, whether or not anyone ever took a music class. The figures would look exactly the same.',
      'This part is last for a reason. A claim of cause is built on the figures, so it can only be as sound as they are. When every earlier part holds and the claim still goes on to say that one thing caused another, put one question to it: is there another way to explain the same result? If there is, and the case shows it, this is the answer.'
    ],
    feature: { step: 'S1', option: 'cause' },
    name: [
      'The answer, and so the name of the kind, is {a:S1.cause}. Words that carry the step are "raise", "protect", "works", "led to", "because" and "so". They are the speaker’s, and the figures do not contain them.',
      'Give this answer when {when:S1.cause}. It does not say the claim is false. Music lessons may help. It says that the figures cannot show it, because something else could produce them.'
    ] },

  { id: 'again-cause', kind: 'again', family: 'cause',
    link: 'The music class gave you what to point to: {needs:cause}. Here it is in a different story, and this time the claim comes from a health magazine and not from a school.',
    first: 'gate-music', second: 'gate-vitamin', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a music class, a vitamin). Look at one thing only: which words say that one thing made the other happen?',
    prompt: { kind: 'phrase', answer: "'A daily vitamin protects you from colds,' it says." },
    shared: [
      'In both cases the first three parts hold: the figures are given with their numbers, for people counted fairly, in the same way for both groups. In both, the claim then says that one thing caused another. The music made the scores higher. The vitamin kept the colds away.',
      'In both, the account itself shows another way to explain the same result. Families who pay for music lessons also pay for coaching. People who take vitamins also exercise more and smoke less. A claim of cause has to answer that, and neither does.',
      'The two stories share nothing else, so this is not about schools or about health. It holds wherever a claim says that one thing caused another and the case shows another way to explain the same result. That is what {a:S1.cause} names.'
    ] },

  { id: 'portrait-cause', kind: 'portrait', family: 'cause',
    link: 'You know what to point to. This card fills in the rest of the picture of {a:S1.cause}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'Two things go together in the figures: pupils who take music score higher, people who take vitamins catch fewer colds, towns with more police have more crime.',
      'The claim then goes a step past the figures and says that one of them made the other happen. Words like "raise", "protect", "works", "because", "led to" and "so" carry the step.',
      'The earlier parts hold. The people counted are a fair picture, the figure counts what it says it counts, and it is set beside something fair. If they were not, you would have stopped at an earlier part.',
      'There is another way to explain the same result, either in the account or one you can name: something else that the two groups differ in, the result leading to the thing and not the thing to the result, a group picked when it was at its worst, or no group to compare with at all.',
      'What decides the answer is the gap between the figures and the claim. The figures themselves may be good ones.'
    ],
    not: [
      'It is not the same as saying the claim is wrong. Music lessons may help with math. All it says is that these figures do not show it, because something else could produce them.',
      'And it is not a trouble with the figures themselves. Here the figures hold, and the step from them to a cause is the trouble.'
    ],
    wild: ['"Kids who eat breakfast do better at school."', '"Since the new boss arrived, sales are up."', '"People who drink coffee live longer."', '"Everyone who did the program improved."', '"It works. Look at the results."'],
    self: 'In your own life it is the explanation you give for a result: "I lost weight because of the program", "I got better because of the pills". Something else was usually changing at the same time.',
    ask: '"The claim says that one thing caused another. Is there another explanation of these figures?" If you can name something, and the case shows it or allows it, you have your answer.' },

  { id: 'check-cause', kind: 'check', after: 'cause',
    case: 'gate-bikelane',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure', 'compare', 'cause'] } },

  /* ---------- The third and fourth look-alike pairs ---------- */
  { id: 'look-compare-cause', kind: 'lookalike', ledger: 'compare~cause',
    link: 'A claim about a program that "makes the difference" can go wrong in the third part or in the fourth, and the figures can sound alike either way. This card puts the two side by side.',
    cases: ['gate-mentor-percent', 'gate-mentor-groups'],
    instruction: 'Both cases are about the same mentoring program. Compare one thing: are the numbers behind the figure missing, or are they all given and the claim goes on to say what caused the difference?',
    prompt: { kind: 'which', option: 'S1.cause', answer: 'gate-mentor-groups' },
    difference: [
      'In Case A the figure is "50% more likely to graduate", with no word on how many graduate with the program or without it. Nothing has yet been said about a cause. The trouble is what the figure is set beside. The answer is {a:S1.compare}.',
      'In Case B the numbers are all there: 90 of 100 and 60 of 100. Nothing is hidden. The trouble is the step the leaflet takes: it says the mentoring made the difference, and the case shows another way to explain the same result, which is that pupils who ask to join are the ones already doing well. The answer is {a:S1.cause}.',
      'The program and the claim are the same in both. In Case A the figure needs its numbers. In Case B the figure has its numbers and the claim goes past them.'
    ] },

  { id: 'look-counted-cause', kind: 'lookalike', ledger: 'counted~cause',
    link: 'There is one more pair to compare while the fourth answer is fresh. A claim that something "earns you more" can fail in the very first part or in the last, and the sentence that makes the claim can sound the same.',
    cases: ['gate-course-survey', 'gate-course-chosen'],
    instruction: 'Both cases are about the same career-coaching firm and the same raise. Compare one thing: is the trouble in who the figure was worked out from, or in what the claim says caused the raise?',
    prompt: { kind: 'which', option: 'S1.counted', answer: 'gate-course-survey' },
    difference: [
      'In Case A the figure is the average raise of the 60 clients who answered a follow-up survey, out of 400. Clients whose raises were good are more likely to answer than those whose were not, so the 60 are not a fair picture of the 400. The trouble is who is in the figure. The answer is {a:S1.counted}.',
      'In Case B all 400 clients answered, so nobody is missing, and the firm gives the raise for 400 other workers of the same age and job to set beside it. The trouble is the step: the brochure says the coaching earned the clients the extra $10,000, and the case shows another way to explain the result, which is that the clients had already decided to change jobs. The answer is {a:S1.cause}.',
      'Both brochures say that coaching pays. In Case A the figure comes from the wrong people. In Case B the figure is fair and the claim goes past it.'
    ] }
]);
