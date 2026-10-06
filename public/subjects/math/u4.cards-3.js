// Basic Math, Unit Four, the third kind (an amount multiplied by the same number each time, asked how long until it reaches a
// target) with the word it leans on, and the fourth kind (an amount that changed one time and has stayed the same since).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- The third kind: the same sort of amount, with the question turned round ---------- */
  { id: 'meet-logsolve', kind: 'meet', outcome: 'logsolve',
    link: 'The second kind asked for the amount at the end of a time. The third kind has the same sort of amount, multiplied by the same number each time, but the question is turned round: the target is given, and the time is missing.',
    case: 'm4-wd-dish', mark: 'G2',
    strip: [
      'The amount followed is the number of bacteria. It starts at 500.',
      'It changes every hour by 20% of what it is then, so it is multiplied by 1.2 every hour, and each hour’s growth is bigger than the last.',
      'The problem gives no length of time. It gives a target, 1,000 bacteria, and asks how long until the dish gets there.'
    ],
    explain: [
      'It is the same sort of amount as in the savings account. The difference is the question: the second kind gave the time and asked for the amount, and this one gives the amount the dish must reach and asks for the time. What is missing is how many multiplications by 1.2 turn 500 into 1,000.',
      'You could find it by multiplying and counting: 600 after 1 hour, 720 after 2, 864 after 3, 1,036.8 after 4. The dish passes 1,000 during the fourth hour. For 20 or 30 multiplications that is very long, so the procedure counts by dividing, using the log button on a calculator.',
      'What decides the kind is not the words “how long”: an amount that has the same number added every hour can be asked about in the same words, and that is a different kind. It is that each change is a share of the amount, and that the problem gives a target instead of a time.'
    ],
    feature: { step: 'G2', option: 'howlong' },
    name: 'A problem like this is {o:logsolve}. The name means the answer to a question such as “how many times must 1.2 be multiplied by itself to reach 2?”, and a calculator can find it.' },

  { id: 'check-logsolve', kind: 'check', after: 'logsolve',
    case: 'm4-wd-cafe',
    ask: { type: 'phrase', step: 'G2', say: 'Which words show what the problem wants to know? Tap them.',
           answer: 'After how many months will it sell 400 coffees a day?' } },

  /* ---------- A word that the worked example of the third kind leans on ---------- */
  { id: 'term-logscale', kind: 'term', term: 'logscale',
    h: 'A chart that gives equal space to each ten times',
    link: 'The worked problem that comes next counts multiplications with logs, and logs come from a kind of chart you may not know. Here it is first, in a situation you can hold in your hands.',
    case: 'm4-wd-museum',
    plain: [
      'On an ordinary chart, equal spaces mean equal amounts: the gridlines might read 0, 10, 20, 30. On this chart, equal spaces mean equal multiples: each gridline is 10 times the one below it, so the labels go 1, 10, 100, 1,000, 10,000. Going up one gridline multiplies by 10, going up two multiplies by 100, and going up three multiplies by 1,000.'
    ],
    after: [
      'So a {t:logscale} is a way of drawing repeated multiplying: every gridline up is one more multiplication by 10. One warning: an amount that is multiplied each time draws as a straight line on a {t:logscale}, so very fast growth can look calm. Check the labels up the side before you judge a chart.'
    ] },

  /* ---------- The fourth kind: a change that was made one time ---------- */
  { id: 'meet-oneoff', kind: 'meet', outcome: 'oneoff',
    link: 'The first three kinds have a change that keeps coming. The fourth kind is a change that came one time, and stopped.',
    case: 'm4-wd-gym', mark: 'G1',
    strip: [
      'There is one amount to follow: the monthly fee. It was $30 and is now $36.',
      'It changed one time, in March, by $6, and it has been $36 every month since.',
      'Nothing in the problem says that the fee changes again. No pattern repeats.'
    ],
    explain: [
      'Laid out month by month, the fees would read 30, 30, 30, 36, 36, 36: a single jump, and then a flat line. It is tempting to treat the jump as the start of a pattern, and to say the fee goes up by $6 each time, or by 20% each time. Nothing in the problem says that. The only safe thing to say about the fee two years from now is what the problem tells you: it stays at $36.',
      'What decides the kind is not that the amount changed, because in all four kinds it does. It is that the change was made one time and has not come again, so there is nothing to carry forward except the new amount. It is the kind most easily mistaken for another, because a change made one time can be given as a plain figure or as a percentage, and both can look like the start of a pattern.'
    ],
    feature: { step: 'G1', option: 'once' },
    name: 'A problem like this is {o:oneoff}. The name says what it is: a change that was made one time, and is not made again.' },

  { id: 'check-oneoff', kind: 'check', after: 'oneoff',
    case: 'm4-wd-parking',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show what happens to the amount after the change? Tap them.',
           answer: 'it has not changed since' } }
]);
