// Statistical Claims, Unit Five, part two (first half): the look-alikes people really confuse (each name beside a claim that holds, and a
// percentage built on a handful), then the question as a question. The three pairs of this unit's own names are taught on the question card.
// The app prints, on the question card: the question, each answer with when it is given, why it decides, and for every pair
// already compared the question that separates it and the tie-break.

FC.cards('stats', 'u5', [

  { id: 'look-relrisk-compok', kind: 'lookalike', ledger: 'relrisk~comp_ok',
    link: 'The same percentage can appear in a claim that holds up and in one that doesn’t. Here are two claims about the same bus lines.',
    cases: ['la1-bus-pct', 'la1-bus-counts'],
    instruction: 'Both claims are about Line 12 and Line 9, and in both Line 12 comes out likelier to be late. Compare one thing: whether you can find the counts the percentage came from.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la1-bus-counts' },
    difference: [
      'In Story A the claim gives “50% more likely” and no counts. It could be 4 late trips in every 100 against 6, or 40 against 60, and the claim doesn’t let you tell which. That is {o:relrisk}.',
      'In Story B the counts are given: 15 of 300 trips late on Line 12 and 10 of 300 on Line 9. 15 is 10 plus half of 10, so the same 50% now has the numbers behind it, and both lines were timed the same way. That is {o:comp_ok}, and the answer is {a:S1.holds}.',
      'The percentage is the same in both. What differs is whether the counts are beside it.'
    ] },

  { id: 'look-baserate-compok', kind: 'lookalike', ledger: 'baserate~comp_ok',
    link: 'Results from the same test can be reported in a way that holds up. Here is one health office telling it two ways.',
    cases: ['la3-test-acc', 'la3-test-counts'],
    instruction: 'Both claims are about the same home test for Rudd fever. The test is 98% accurate, and about 1 person in 200 has Rudd fever. Compare one thing: whether the claim keeps in mind how rare the fever is when it reads a yes.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la3-test-counts' },
    difference: [
      'In Story A the claim gives the accuracy, 98%, and says a yes is “very likely” right. Out of 10,000 people, 50 have the fever and the test says yes to 49 of them. Of the 9,950 who don’t, it says yes to 2 in every 100: 199. So 49 of the 248 yeses are right: about 1 in 5, not 98 in 100. That is {o:baserate}.',
      'In Story B the claim gives those same counts and reads them as they are: of the 248 who tested yes, 49 had it, and of the 9,752 who tested no, 1 had it. It never says a yes is nearly certain. That is {o:comp_ok}, and the answer is {a:S1.holds}.',
      'The test and the people are the same. What differs is whether the reading of a yes uses how rare the fever is.'
    ] },

  { id: 'look-simpson-compok', kind: 'lookalike', ledger: 'simpson~comp_ok',
    link: 'Two totals side by side are fine when both sides are alike. Here are two newsletters about the same two coaches.',
    cases: ['la6-coach-mix', 'la6-coach-same'],
    instruction: 'Both newsletters give the same two totals, 80 of 100 and 60 of 100, and both call Dana the better coach. Compare one thing: whether each coach has the same mix of beginners and national-level swimmers.',
    prompt: { kind: 'which', option: 'S1.compare', answer: 'la6-coach-mix' },
    difference: [
      'In Story A Dana’s swimmers are almost all beginners and Eli’s are almost all national-level. Beginners improve fast and national-level swimmers improve slowly, so Dana’s total is high partly because of who she coaches, and the totals can’t say whether she coaches better. That is {o:simpson}.',
      'In Story B each coach has 50 beginners and 50 national-level swimmers, timed the same way. Both totals hold the same mix, so you can set them side by side as they are. That is {o:comp_ok}, and the answer is {a:S1.holds}.',
      'The totals are the same in both. A ranking by totals is fair only when both sides hold the same mix.'
    ] },

  /* ---------- The near-miss: a percentage built on a handful ---------- */
  { id: 'exc-handful', kind: 'exception', looksLike: 'relrisk', is: 'smalln', ledger: 'relrisk~smalln',
    h: 'A headline percentage built on a handful',
    link: 'Some claims give a big percentage and the counts too. This one shows what changes when the counts are given and they are tiny.',
    case: 'exc-shop',
    setup: 'The owner’s post gives a percentage, up 300%, which is how {o:relrisk} looks. But this is {o:smalln}.',
    prompt: { kind: 'phrase', answer: 'one theft last month and four this month' },
    because: [
      'Ask what the percentage is built on. The log tells you: one theft last month and four this month. The sum is right, 3 more on 1 is 300%, but with so few, one theft more or fewer moves the percentage a long way. If next month there are two thefts, the same owner could post “down 50%”, and nothing about shoplifting would have changed.',
      'So the answer is {a:S1.counted}, and the name is {o:smalln}. Check how many are behind a figure before you ask what it is set beside, because everything after rests on that.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-compare', kind: 'question', step: 'C1',
    h: 'The one question to ask about a figure',
    link: 'Here is the question and its three answers in one place.',
    decides: [
      'Each name is a different thing missing from beside a figure, and each needs a different ask. For {o:relrisk}, ask “Out of how many?” For {o:baserate}, ask “How common is it?” For {o:simpson}, ask “What is inside each total?”',
      'Asking the wrong one gets you nowhere. The counts behind a percentage don’t help you read a test, and the split of two totals doesn’t help you read a percentage.'
    ],
    how: [
      { do: 'Read the whole claim, the last sentence included.', why: 'The words that show the mix or the rare thing are often last.' },
      { do: 'Find the figure: a percentage change, a test’s accuracy, or two totals.', why: 'That tells you which of the three to look for.' },
      { do: 'Ask the matching question: out of how many, how common is it, or what is inside each total.', why: 'Each name is fixed by a different ask.' },
      { do: 'Find the exact words that show your answer.', why: 'If you can’t find them, you don’t have an answer yet.' }
    ],
    whenBoth: 'Some claims look as if they need two of these, or as if nothing is missing at all. Each pair below has one question that tells it apart.' },

  { id: 'check-compare', kind: 'check', after: 'C1',
    case: 'rel-streetlights',
    ask: { type: 'step', step: 'C1' } }
]);
