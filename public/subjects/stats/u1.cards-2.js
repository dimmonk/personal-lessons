// Statistical Claims, Unit One, part one (second half): the third answer (what the figure is set beside).

FC.cards('stats', 'u1', [

  /* ---------- The third answer: what the figure is set beside ---------- */
  { id: 'meet-compare', kind: 'meet', family: 'compare',
    link: 'Suppose the first two parts are fine. The next part is what the figure is set beside, because a figure means little alone.',
    case: 'gate-burglaries', mark: 'S1',
    strip: [
      'There is a figure: "up 300%". It is a percentage of what the number was before.',
      'The things counted and what is counted are fine: a burglary is a burglary in both months.',
      'What is missing is the real numbers that the percentage came from. Up 300% could mean one burglary became four. It could mean 20 became 80.'
    ],
    explain: [
      'A figure means little alone, so a claim sets it beside something: last month, another place, the whole country. This claim gives only the change, as a percentage of last month. It does not tell you how big the starting point was. Up 300% means four times as many: one burglary becoming four, or 20 becoming 80. The headline is the same, and the situations are completely different.',
      'The same thing happens with a risk ("cuts your risk by half" is small if the risk was 2 in 10,000), with a test ("right 99 times in 100" leaves out how common the thing is), and with two totals set side by side, when the claim leaves out that they are made of different mixes. What they share is a figure given in a form that hides something you need beside it.'
    ],
    feature: { step: 'S1', option: 'compare' },
    name: 'The answer, and the name, is {a:S1.compare}. "Compared with" does not mean the claim sets two things side by side. It means that a figure has to be set beside something before it means anything, and the claim leaves that out.' },

  { id: 'check-compare', kind: 'check', after: 'compare',
    case: 'gate-tutors',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show what the two totals leave out? Tap them.',
           answer: 'It does not mention that Mr. Cho takes students who have already failed twice.' } }
]);
