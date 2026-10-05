// Basic Math, Unit Four, part four: the look-alike pairs and the exception. Each look-alike card sets two problems of the same story
// side by side, one from each kind of a pair; the ledger in u4.unit.js gives the question that tells them apart.
// Key wording is never typed here: tokens are filled in from key.js.

FC.cards('math', 'u4', [

  /* ---------- the first and second kinds: the same number each time, or a share of what there is ---------- */
  { id: 'look-lin-expg', kind: 'lookalike', ledger: 'lin~expg',
    link: 'The first and second kinds both follow an amount that changes again and again, and for a while their numbers are close. This card puts them side by side.',
    cases: ['m4-la-visits-lin', 'm4-la-visits-expg'],
    instruction: 'Both problems are about the same shop, the same 2,000 visitors and the same “every week”. Compare one thing: is the change the same number each time, or a share of what there is?',
    prompt: { kind: 'which', option: 'G1.multiplies', answer: 'm4-la-visits-expg' },
    difference: [
      'Case A says the website gains 100 more visitors every week: the same number each time, so the key’s answer is {a:G1.adds}. Case B says its visitors grow by 5% every week: a share of what there is, so the answer is {a:G1.multiplies}.',
      'In the first week the two look the same, because 5% of 2,000 is 100. By week 6 they have come apart: Case A has 2,000 + 6 × 100 = 2,600 visitors, and Case B has about 2,680. The gap grows each week, and after 30 weeks Case A would have 5,000 visitors and Case B about 8,644.',
      'Both problems say “every week”, and both can be written with the same first rise of 100. What differs is whether next week’s rise is still 100, or 5% of a bigger amount.'
    ] },

  { id: 'exc-interest-out', kind: 'exception', ledger: 'lin~expg', looksLike: 'expg', is: 'lin',
    h: 'A percentage, and still the same number each year',
    link: 'You have met {o:expg} with a percentage and {o:lin} with a plain figure. This card has a problem that carries a percentage and is the first kind all the same.',
    case: 'm4-ex-bond',
    setup: 'This problem has what usually means {o:expg}: a percentage, 3% interest a year, in a problem about money over years. But it is {o:lin}.',
    prompt: { kind: 'phrase', answer: 'The interest is paid out to him each year' },
    because: [
      'The words that settle it are “The interest is paid out to him each year, and the €5,000 itself never changes.” The amount being followed is the interest he has been paid in all, and every year the bond pays 3% of €5,000, which is €150. It is 3% of the same €5,000 every year, because the €5,000 is never added to. So the interest paid each year is the same number, €150, and the total goes up by €150 each year: 150, 300, 450, and after 8 years 8 × 150 = €1,200.',
      'In the savings account the interest was left in, so each year’s share was taken on a bigger amount, and the change grew. Here the interest is taken out, so each year’s share is taken on the same amount, and the change is the same size every time. A percentage tells you how big a change is. It is the words about whether the interest stays in that tell you whether that size changes.'
    ],
    take: 'When a problem has a percentage, ask what the percentage is taken of. If it is taken of an amount that grows, it is {o:expg}. If it is taken of an amount that stays the same, the change is the same size every time, and it is {o:lin}.' },

  /* ---------- the second and third kinds: the amount, or the time ---------- */
  { id: 'look-expg-logsolve', kind: 'lookalike', ledger: 'expg~logsolve',
    link: 'The second and third kinds have the very same sort of amount, multiplied by the same number each time, and they differ only in what the problem asks. This card puts them side by side.',
    cases: ['m4-la-town-expg', 'm4-la-town-logsolve'],
    instruction: 'Both problems are about the same town, the same 8,000 people and the same 3% a year. Compare one thing: does the problem give a length of time and ask for the amount, or give a target and ask how long?',
    prompt: { kind: 'which', option: 'G2.howlong', answer: 'm4-la-town-logsolve' },
    difference: [
      'Case A gives a time, 10 years, and asks for the amount at the end of it: 8,000 multiplied by 1.03 ten times is about 10,751 people. The key’s answer is {a:G2.willbe}.',
      'Case B gives a target, 12,000 people, and asks how long until the town gets there. Counting the multiplications by 1.03 that turn 8,000 into 12,000 gives about 13.7 years. The key’s answer is {a:G2.howlong}.',
      'The start, the 3% and the story are the same, and the two answers are very different kinds of number: a number of people in Case A and a count of years in Case B. Which one is missing, the amount or the time, is what decides.'
    ] },

  /* ---------- the first and third kinds: how long, with the same number or a share ---------- */
  { id: 'look-lin-logsolve', kind: 'lookalike', ledger: 'lin~logsolve',
    link: 'The first and third kinds can both be asked how long until an amount reaches a target. This card puts them side by side, asked about the same pond.',
    cases: ['m4-la-weed-lin', 'm4-la-weed-logsolve'],
    instruction: 'Both problems are about the same pond, 40 m² of weed, and both ask how many weeks until the weed covers 400 m². Compare one thing: does the weed gain the same number of square metres each week, or a share of what it has?',
    prompt: { kind: 'which', option: 'G1.multiplies', answer: 'm4-la-weed-logsolve' },
    difference: [
      'Case A says another 10 m² of weed appears every week: the same number each time, so the key’s answer is {a:G1.adds}. It needs 400 − 40 = 360 m² more, and 10 m² a week brings that in 360 ÷ 10 = 36 weeks.',
      'Case B says the weed grows by 10% every week: a share of what there is, so the answer is {a:G1.multiplies}. In the first week the weed gains 10% of 40 m², which is 4 m², but by week 20 it gains about 24 m² in a week. Counting the multiplications by 1.1 that turn 40 m² into 400 m² gives about 24.2 weeks.',
      'Both ask the same question and give the same start and the same target, and the answers are 36 weeks and about 24 weeks. Case B is quicker because each week’s growth is bigger than the last, while Case A adds the same 10 m² whatever the size of the patch.'
    ] },

  /* ---------- the first and fourth kinds: the change comes again, or it does not ---------- */
  { id: 'look-lin-oneoff', kind: 'lookalike', ledger: 'lin~oneoff',
    link: 'The first and fourth kinds can both be given with the same plain figure, a price that goes up by €2. This card puts them side by side.',
    cases: ['m4-la-phone-lin', 'm4-la-phone-oneoff'],
    instruction: 'Both phone plans start at €20 a month, and both are at €22 after one rise. Compare one thing: after the rise, does the price rise again, or stay where it reached?',
    prompt: { kind: 'which', option: 'G1.once', answer: 'm4-la-phone-oneoff' },
    difference: [
      'Case A says the price goes up by €2 every month: the change comes again each time, so the key’s answer is {a:G1.adds}. After 6 months it is €20 + 6 × €2 = €32.',
      'Case B says the price went up to €22 in January and has stayed at €22 since: the change was made one time, so the key’s answer is {a:G1.once}. After 6 months it is still €22.',
      'Both start at €20 and both have risen by €2. What differs is whether the rise comes again. In Case A the words “every month” say that it does, and in Case B the words “has stayed” say that it does not.'
    ] },

  /* ---------- the second and fourth kinds: a percentage again and again, or one time ---------- */
  { id: 'look-expg-oneoff', kind: 'lookalike', ledger: 'expg~oneoff',
    link: 'The second and fourth kinds can both be given with a percentage, and both can ask for the amount some years from now. This card puts them side by side.',
    cases: ['m4-la-coffee-expg', 'm4-la-coffee-oneoff'],
    instruction: 'Both coffee prices start at €3.00 and both rise by 8%. Compare one thing: is the 8% applied again every year, or one time?',
    prompt: { kind: 'which', option: 'G1.once', answer: 'm4-la-coffee-oneoff' },
    difference: [
      'Case A says the price goes up by 8% every year: the percentage comes again each time, so the amount is multiplied by 1.08 each year, and the key’s answer is {a:G1.multiplies}. After 2 years the price is €3.00 × 1.08 × 1.08 = €3.50.',
      'Case B says the price went up by 8% in March, to €3.24, and has stayed at €3.24 since: the percentage was applied one time, so the key’s answer is {a:G1.once}. After 2 years it is still €3.24.',
      'The 8% in both is the same number. What differs is whether it comes again: “every year” in Case A, “has stayed” in Case B. A percentage in a problem says how big a change is, and never says by itself how often it happens.'
    ] },

  /* ---------- the third and fourth kinds: a target that is reached, or never ---------- */
  { id: 'look-logsolve-oneoff', kind: 'lookalike', ledger: 'logsolve~oneoff',
    link: 'The third and fourth kinds can both ask how long until an amount reaches a target. The answer to one is a number of months, and the answer to the other is that it never does. This card puts them side by side.',
    cases: ['m4-la-club-logsolve', 'm4-la-club-oneoff'],
    instruction: 'Both problems are about a swimming club that has 100 members and ask how many months until it has 400. Compare one thing: is the number of members still changing every month, or has it stopped?',
    prompt: { kind: 'which', option: 'G1.once', answer: 'm4-la-club-oneoff' },
    difference: [
      'Case A says the number of members grows by 20% every month: it is multiplied by 1.2 each time, so the key’s answer is {a:G1.multiplies}, and because a target is given, the problem is worked by counting the multiplications by 1.2 that turn 100 into 400. That is about 7.6 months.',
      'Case B says the club jumped to 160 members when the pool opened and has had 160 since: the change was made one time, so the key’s answer is {a:G1.once}. Nothing moves the number any more, so 400 is never reached on these facts.',
      'Both ask “how many months”, and only one of them has an answer in months. An amount that keeps changing can reach a target in time. An amount that has stopped changing cannot, unless a new change is made.'
    ] }
]);
