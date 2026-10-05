// Basic Math, Unit Four, part three: the third kind (an amount multiplied by the same number each time, asked how long until it reaches
// a target) and the fourth kind (an amount that changed one time and has stayed the same since).
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- The third kind: the same sort of amount, with the question turned round ---------- */
  { id: 'meet-logsolve', kind: 'meet', outcome: 'logsolve',
    link: 'The second kind asked for the amount at the end of a time. The third kind has the same sort of amount, multiplied by the same number each time, but the question is turned round: the target is given, and the time is missing.',
    case: 'm4-wd-dish', mark: 'G2',
    strip: [
      'The amount followed is the number of bacteria. It starts at 500.',
      'It changes every hour by 20% of what it is then, so it is multiplied by 1.2 every hour, and each hour’s growth is bigger than the last.',
      'This time the problem gives no length of time. It gives a target, 1,000 bacteria, and asks how long until the dish gets there.',
      'What is missing is how many times to multiply, and not what the amount ends at.'
    ],
    explain: [
      'What you are shown is the same sort of amount as in the savings account: multiplied by the same number every time. The difference is the question. The second kind of problem gave the time and asked for the amount. This one gives the amount the dish must reach and asks for the time. 500 doubles to 1,000, so the question is how many multiplications by 1.2 turn 500 into 1,000.',
      'You can find the answer by multiplying and counting: 500 × 1.2 = 600 after 1 hour, 720 after 2 hours, 864 after 3 hours, and 1,036.8 after 4 hours. The dish passes 1,000 during the fourth hour, so the answer is a little under 4 hours. That works for a small count, but for 20 or 30 multiplications it is very long. The procedure in this unit does the counting by dividing, using the log button on a calculator, and the worked problems show exactly how, and why dividing counts.',
      'Notice what decides the kind. It is not that the problem says “how long”: an amount that has the same number added to it every hour can be asked about in the same words, and that is a different kind with a different procedure. It is that each change is a share of the amount, as before, and that the problem gives a target instead of a time.'
    ],
    feature: { step: 'G2', option: 'howlong' },
    name: 'A problem like this is {o:logsolve}. The name means the answer to a question such as “how many times must 1.2 be multiplied by itself to reach 2?”, and a calculator can find it.' },

  { id: 'again-logsolve', kind: 'again', outcome: 'logsolve',
    link: 'The dish gave you what to point to: {needs:logsolve}. Here is a second problem, in a different story, followers of an account.',
    first: 'm4-wd-dish', second: 'm4-wd-followers', step: 'G2',
    instruction: 'Find what the two problems share. Ignore the story (bacteria, followers) and ignore the numbers. Look at one thing only: which words say what the problem wants to know?',
    prompt: { kind: 'phrase', answer: 'After how many weeks will it have 3,000 followers?' },
    shared: [
      'Both problems follow one amount that is multiplied by the same number each time, bacteria growing 20% an hour and followers growing 25% a week, and in both the question gives a target (1,000 bacteria, 3,000 followers) and asks how long until the amount gets there. In neither is a length of time given.',
      'That is all you point to, and it is why one name covers a lab dish and an online account. The question is turned round from the one for money in an account: there the time was given and the amount was missing, and here the amount is given and the time is missing.'
    ] },

  { id: 'portrait-logsolve', kind: 'portrait', outcome: 'logsolve',
    link: 'You know what to point to for {o:logsolve}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One amount that is multiplied by the same number each hour, day, week, month or year: a percentage growth, a doubling, a halving.',
      'A target for the amount, such as 1,000, “double”, “half” or “the whole pond”, and the question how long, or how many times, until the amount gets there.',
      'The answer is a count of times, and it is often not a whole number: 3.8 hours means that the amount passes the target during the fourth hour.',
      'Doubling and halving problems are this kind too: how many doublings take 3 m² to 100 m²? And a chart with a {t:logscale} is a place the same question comes up: how many gridlines apart are two points, when each gridline is ten times the one below?'
    ],
    not: [
      'It is not this kind merely because the problem says “how long”. An amount that has the same number added to it every month can be asked “how long until it reaches 3,000?” as well, and that is {o:lin}, which is worked by dividing the distance to the target by the change each time. What decides this kind is that the amount is multiplied by the same number each time, and that a target is given.',
      'And it is not {o:expg}, which has the same sort of amount but gives a time and asks for the amount. The two can be written about the same town, with the same 3% a year, and ask opposite things.'
    ],
    wild: ['“How long until it doubles?”', '“When will it reach 10,000?”', '“How many years until it is worth half?”', '“How many doublings from 3 to 100?”', '“What is its doubling time?”'],
    self: 'In your own life you meet this when you ask how long a debt takes to double at its interest, how long savings take to reach a goal when the interest stays in, how long a spreading illness or a post takes to reach a number, or how long something that loses a share each year takes to be worth half.',
    ask: '“Is the amount multiplied by the same number each time, and does the problem give a target and ask how long, or how many times, until it gets there?” If you can say yes, you are probably looking at this kind.' },

  { id: 'check-logsolve', kind: 'check', after: 'logsolve',
    case: 'm4-wd-cafe',
    ask: { type: 'phrase', step: 'G2', say: 'Which words show what the problem wants to know? Tap them.',
           answer: 'After how many months will it sell 400 coffees a day?' } },
  { id: 'check-logsolve-last', kind: 'check', after: 'logsolve', case: 'm4-ck-logsolve-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-logsolve-whole', kind: 'check', after: 'logsolve', case: 'm4-ck-logsolve-whole', ask: { type: 'solve', solve: 'whole' } },

  /* ---------- The fourth kind: a change that was made one time ---------- */
  { id: 'meet-oneoff', kind: 'meet', outcome: 'oneoff',
    link: 'The first three kinds have a change that keeps coming. The fourth kind is a change that came one time, and stopped.',
    case: 'm4-wd-gym', mark: 'G1',
    strip: [
      'There is one amount to follow: the monthly fee. It was €30 and is now €36.',
      'It changed one time, in March, by €6, and it has been €36 every month since.',
      'The question gives a time, 2 more years, and asks for the amount at the end of it.',
      'Nothing in the problem says that the fee changes again. No pattern repeats.'
    ],
    explain: [
      'What you are shown is an amount with a before and an after, and nothing in between that keeps going. For years the fee was €30. Then it became €36, and it has stayed €36. If you laid the fees out month by month, they would read 30, 30, 30, 36, 36, 36: a single jump, and then a flat line.',
      'It is tempting to treat the jump as the start of a pattern, and to say that the fee goes up by €6 each time, or by 20% each time. Nothing in the problem says that. The fee changed one time, and the only safe thing to say about the fee two years from now is what the problem tells you: it stays at €36, unless a new change is announced.',
      'Notice what decides the kind. It is not that the amount changed, because in all four kinds the amount changes. It is that the change was made one time and has not come again, so there is nothing to carry forward except the new amount. A procedure for this kind is short for that reason, and its answer is often the amount that is already there. It is also the kind most easily mistaken for another, because a change made one time can be given as a plain figure or as a percentage, and both can look like the start of a pattern.'
    ],
    feature: { step: 'G1', option: 'once' },
    name: 'A problem like this is {o:oneoff}. The name says what it is: a change that was made one time, and is not made again.' },

  { id: 'again-oneoff', kind: 'again', outcome: 'oneoff',
    link: 'The gym gave you what to point to: {needs:oneoff}. Here is a second problem, in a different story, a flat’s rent under a lease.',
    first: 'm4-wd-gym', second: 'm4-wd-rent', step: 'G1',
    instruction: 'Find what the two problems share. Ignore the story (a gym, a flat) and ignore the numbers. Look at one thing only: which words say what happens to the amount after the change?',
    prompt: { kind: 'phrase', answer: 'the lease says the rent will stay at €860' },
    shared: [
      'Both problems follow one amount, a gym fee and a rent, that was one figure and became another, and in both the amount has stayed at the new figure since: €36 a month, €860 a month. Neither says that the change comes again. In the gym the words are “ever since”, and in the flat they are “will stay”.',
      'That is all you point to, and it is why one name covers a gym and a lease. The story differs, and so does the size of the change, €6 against €60. What happens to the amount after the change is the same: nothing.'
    ] },

  { id: 'portrait-oneoff', kind: 'portrait', outcome: 'oneoff',
    link: 'You know what to point to for {o:oneoff}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One amount, with a value before a change and a value after it, and a change that was made one time.',
      'The words that show it say that the amount has stayed since: “ever since”, “and has not changed”, “will stay at”, “a new price”, “fixed from now on”.',
      'The change can be big or small, up or down, a plain figure or a percentage. A fare that rose by 15% one time is this kind, because the 15% was applied once.',
      'The question gives a time and asks for the amount at the end of it, and the answer is the new amount. Or it gives a target and asks how long, and then the answer is either that the amount is already there, or that it never gets there unless another change is made.'
    ],
    not: [
      'It is not a pattern. One jump does not make a trend, and a procedure that carries the change forward as if it came again each time gives an answer that is far out. If the fee goes from €30 to €36 and you add €6 every year, you will say €48 after two years, and the fee is still €36.',
      'It is {o:lin} only if the problem says that the change comes again, each hour, day, week, month or year, and it is {o:expg} only if a share is applied again and again.'
    ],
    wild: ['“Since the change it has stayed at €36.”', '“It went up and stayed there.”', '“A new price from January.”', '“After the new law it has been the same.”', '“Fixed from now on.”', '“A step change.”'],
    self: 'In your own life you meet this in a price that was put up one time, a new tariff, a new wage after a promotion, a speed limit after a new sign, a dose after a change of tablets, and a rent set by a lease with a fixed figure.',
    ask: '“Did the amount change one time and has it stayed the same since, with nothing in the problem saying that the change comes again?” If you can say yes, you are probably looking at this kind.' },

  { id: 'check-oneoff', kind: 'check', after: 'oneoff',
    case: 'm4-wd-parking',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show what happens to the amount after the change? Tap them.',
           answer: 'it has not changed since' } },
  { id: 'check-oneoff-last', kind: 'check', after: 'oneoff', case: 'm4-ck-oneoff-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-oneoff-whole', kind: 'check', after: 'oneoff', case: 'm4-ck-oneoff-whole', ask: { type: 'solve', solve: 'whole' } }
]);
