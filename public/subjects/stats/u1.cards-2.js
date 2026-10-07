// Statistical Claims, Unit One, part one (second half): the third answer (what the number is set beside).

FC.cards('stats', 'u1', [

  /* ---------- What it is compared with ---------- */
  { id: 'meet-compare', kind: 'meet', family: 'compare',
    link: 'Next: what the number is set beside.',
    case: 'gate-burglaries', mark: 'S1',
    explain: [
      '"Up 300%" sounds like a crime wave. But it means four times as many, and the newsletter never says four times what. One burglary becoming four is up 300%. So is 20 becoming 80. The words are the same and the news is completely different.',
      'The same hiding happens elsewhere. "Cuts your risk by half" is tiny if the risk was 2 in 10,000. A test that is "right 99 times in 100" leaves out how rare the thing is. Two totals side by side leave out that one is made of harder jobs. In each, the number comes without what you need beside it.'
    ],
    spot: [
      { do: 'Find the percentage, the test score or the total: up 300%.', why: 'Those are the forms that hide the numbers behind them.' },
      { do: 'Ask what it is a percentage of: how many burglaries last month?', why: 'A percentage means nothing until you know what it is out of.' },
      { do: 'Look for the numbers behind it: the newsletter gives none.', why: 'Without them you cannot tell one burglary becoming four from 20 becoming 80.' },
      { do: 'If they are missing, treat the claim as unreadable until you find them.', why: 'It may be true, but you cannot tell whether it matters.' }
    ],
    feature: { step: 'S1', option: 'compare' },
    name: 'This is {a:S1.compare}. A number means nothing until it is set beside something, and this claim leaves that out.' },

  { id: 'check-compare', kind: 'check', after: 'compare',
    case: 'gate-tutors',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show why the two pass rates are not a fair match? Tap them.',
           answer: 'It does not mention that Mr. Cho takes students who have already failed twice.' } }
]);
