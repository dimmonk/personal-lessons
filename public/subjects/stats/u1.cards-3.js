// Statistical Claims, Unit One, part three: the third answer (what the figure is set beside) and its look-alike pair.

FC.cards('stats', 'u1', [

  /* ---------- The third answer: what the figure is set beside ---------- */
  { id: 'meet-compare', kind: 'meet', family: 'compare',
    link: 'Two parts are checked: who or what the figure was worked out from, and what it counts. Suppose both are fine. The next part is what the figure is set beside, because a figure means little alone.',
    case: 'gate-burglaries', mark: 'S1',
    strip: [
      'There is a figure: "up 300%". It is a percentage of what the number was before.',
      'The things counted are fine as far as the account shows: the burglaries on one road, in two months.',
      'What is counted is not in doubt either: a burglary is a burglary in both months.',
      'What is missing is the real numbers that the percentage came from. Up 300% could mean one burglary became four. It could mean 20 became 80.',
      'Without those numbers you cannot tell whether this is a scare or a real problem.'
    ],
    explain: [
      'Take the first two parts in order. Who or what is in the figure? The burglaries on one road, and nothing suggests any are missing. What does it count? Burglaries, the same way each month. Neither goes wrong, so the next part is what the figure is set beside.',
      'A figure means little alone, so a claim sets it beside something: last month, another place, the whole country. This claim sets this month beside last month, and it gives only the change, as a percentage of last month. A percentage of what it was tells you how big the change is compared with where it started. It does not tell you how big the starting point was.',
      'That is where the trouble lies. Up 300% means four times as many. If one burglary happened last month, that is four this month. If 20 happened, it is 80. The headline is the same, and the situations are completely different. The claim leaves out the thing you would need beside the percentage to read it: the numbers.',
      'The same thing happens with a risk. "Cuts your risk by half" sounds large, and is small if the risk was 2 in 10,000. It happens with a test: "right 99 times in 100" leaves out how common the thing is. And it happens with two totals set side by side, when the claim leaves out that they are made of different mixes. What they share is a figure given in a form that hides something you need beside it.'
    ],
    feature: { step: 'S1', option: 'compare' },
    name: [
      'The answer, and so the name of the kind, is {a:S1.compare}. "Compared with" does not mean the claim sets two things side by side. It means that a figure has to be set beside something before it means anything, and the claim leaves that out.',
      'Give this answer when {when:S1.compare}.'
    ] },

  { id: 'again-compare', kind: 'again', family: 'compare',
    link: 'The burglary figure gave you what to point to: {needs:compare}. Here is a second case, from another part of life, and this time the form of the figure is a test’s accuracy.',
    first: 'gate-burglaries', second: 'gate-homekit', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (burglaries, a home test). Look at one thing only: in what form is the figure given?',
    prompt: { kind: 'phrase', answer: "The box says: 'Right 99 times in 100.'" },
    shared: [
      'In both cases a figure is given in a form that sounds exact and says little on its own: a percentage of what it was, and a test’s accuracy. In both, the claim leaves out what you would need beside the figure. For the burglaries it is how many there were. For the test it is how common the illness is among the people who take it.',
      'Neither case has anything wrong with who is in the figure or with what it counts. The burglaries really went up, and the test really is right 99 times in 100. The trouble is that the form the figure is given in hides something you need beside it.',
      'The two stories share nothing else, so this is not about crime or about health. It holds wherever a figure is given as a percentage of what it was, as a test’s accuracy or as totals set side by side, and what you would need beside it is missing. That is what {a:S1.compare} names.'
    ] },

  { id: 'portrait-compare', kind: 'portrait', family: 'compare',
    link: 'You know what to point to. This card fills in the rest of the picture of {a:S1.compare}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A figure is given in a form that sounds exact: a percentage of what it was ("up 300%", "cut by half", "18% higher"), the accuracy of a test or an alarm ("right 99 times in 100"), or totals set side by side ("90 of Dr. Ames’s 100 patients survived, 80 of Dr. Boyd’s").',
      'What is missing is something you would need beside the figure to know what it means: how many there were before and after, how common the thing is among the people tested, or what each total is made of.',
      'The people are fine, and what is counted is fine. If either were not, you would have stopped at an earlier part.',
      'The figure is usually true. What the claim leaves out is what turns an alarming number into an ordinary one, or the other way round.',
      'Often a sentence asks you to feel something: "up 300%!", "right 99 times in 100". The form of the figure does the persuading.'
    ],
    not: [
      'It is not a claim that anything is false. The burglaries really did rise, and the test really is accurate.',
      'And it is not a claim about what caused anything. This answer is about reading a figure fairly, and not about what made it move.'
    ],
    wild: ['"Up 300% in a month!"', '"Cuts your risk by half."', '"This test is 99% accurate."', '"Our hospital has the better survival record."', '"Twice as likely to..."'],
    self: 'In your own life it is the sale marked "50% off" with no old price, the test result you are told is "99% reliable", the ad that says "twice as likely". Whenever a figure arrives as a percentage, ask what it is a percentage of.',
    ask: '"What would I need beside this figure to know what it means: how many, how common, or what each total is made of?" If the claim leaves that out, and nothing else in the account gives it, you have your answer.' },

  { id: 'check-compare', kind: 'check', after: 'compare',
    case: 'gate-tutors',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show what the two totals leave out? Tap them.',
           answer: 'It does not mention that Mr. Cho takes students who have already failed twice.' } },

  /* ---------- The second look-alike pair ---------- */
  { id: 'look-measure-compare', kind: 'lookalike', ledger: 'measure~compare',
    link: 'These two are easy to mix up when a figure has fallen or risen, because in both the figure can be honestly added up and still leave you with the wrong idea. This card puts them side by side.',
    cases: ['gate-thefts-receipt', 'gate-thefts-percent'],
    instruction: 'Both cases say that bike thefts in the town of Brandon fell. Compare one thing: has something about what is counted changed, or is a percentage given with no numbers behind it?',
    prompt: { kind: 'which', option: 'S1.compare', answer: 'gate-thefts-percent' },
    difference: [
      'In Case A the figures are given in full, 400 and then 250. Nothing is hidden. But in January the police changed what gets recorded as a theft: now only one with a receipt. A fall from 400 to 250 can happen with exactly as many bikes stolen. The trouble is what the figure counts. The answer is {a:S1.measure}.',
      'In Case B the police count every theft the same way in both years, so what is counted has not changed. The trouble is that the claim gives only "down 37%", with no word on how many were stolen before or after. The trouble is what the figure is set beside. The answer is {a:S1.compare}.',
      'Both claims say that thefts fell, and neither lies. What separates them is where the trouble is. In Case A the numbers are all there and the counting changed. In Case B the counting is the same and the numbers are missing.'
    ] }
]);
