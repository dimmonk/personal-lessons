// Statistical Claims, Unit Five, part two (first half): the look-alikes people really confuse (each name beside a claim that holds, and a
// percentage built on a handful), then the question as a question. The three pairs of this unit's own names are taught on the question card.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for every pair
// already compared the question that separates it and the tie-break.

FC.cards('stats', 'u5', [

  { id: 'look-relrisk-compok', kind: 'lookalike', ledger: 'relrisk~comp_ok',
    link: 'The same percentage can appear in a claim that holds and in one that does not. Here are two claims about the same bus lines. One is {o:relrisk}, and the other is {o:comp_ok}.',
    cases: ['la1-bus-pct', 'la1-bus-counts'],
    instruction: 'Both claims are about Line 12 and Line 9, and in both Line 12 comes out likelier to be late. Compare one thing: whether you can find the counts the percentage was worked out from.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la1-bus-counts' },
    difference: [
      'In Case A the claim gives "50% more likely" and no counts. It could be 4 late trips in every 100 against 6, or 40 against 60, and the claim does not let you tell which. The answer is {a:S1.compare}, and the case is {o:relrisk}.',
      'In Case B the counts are given: 15 of 300 trips late on Line 12 and 10 of 300 on Line 9. 15 is 10 plus half of 10, so the same 50% is now backed by the numbers, and both lines were timed the same way. The answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'The percentage is the same in both. What differs is whether the counts are beside it.'
    ] },

  { id: 'look-baserate-compok', kind: 'lookalike', ledger: 'baserate~comp_ok',
    link: 'Results from the same kind of test can be reported in a way that holds. Here is one health office telling the story two ways.',
    cases: ['la3-test-acc', 'la3-test-counts'],
    instruction: 'Both claims are about the same home test for Rudd fever. The test is 98% accurate, and about 1 person in 200 has Rudd fever. Compare one thing: whether the claim reads a yes with how common the fever is in view.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la3-test-counts' },
    difference: [
      'In Case A the claim gives the accuracy, 98%, and reads a yes as "very likely" right. Of 10,000 people, 50 have the fever and the test says yes to 49 of them. Of the 9,950 who do not, it says yes to 2 in every 100: 199. So 49 of the 248 yeses are right: about 1 in 5, and not 98 in 100. The answer is {a:S1.compare}, and the case is {o:baserate}.',
      'In Case B the claim gives those same counts and reads them as they stand: of the 248 who tested yes, 49 had it, and of the 9,752 who tested no, 1 had it. It does not say a yes is nearly certain. The answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'The test and the people are the same. What differs is whether the reading of a yes uses how common the fever is.'
    ] },

  { id: 'look-simpson-compok', kind: 'lookalike', ledger: 'simpson~comp_ok',
    link: 'Two totals set side by side are fine when the two sides are alike. Here are two newsletters about the same two coaches. One is {o:simpson}, and the other is {o:comp_ok}.',
    cases: ['la6-coach-mix', 'la6-coach-same'],
    instruction: 'Both newsletters give the same two totals, 80 of 100 and 60 of 100, and both call Dana the better coach. Compare one thing: whether each coach has the same mix of beginners and national-level swimmers.',
    prompt: { kind: 'which', option: 'S1.compare', answer: 'la6-coach-mix' },
    difference: [
      'In Case A Dana’s swimmers are almost all beginners and Eli’s are almost all national-level. Beginners improve fast and national-level swimmers improve slowly, so Dana’s total is high partly because of who she coaches. The totals cannot say whether she coaches better. The answer is {a:S1.compare}, and the case is {o:simpson}.',
      'In Case B each coach has 50 beginners and 50 national-level swimmers, timed the same way. The totals are made of the same mix, so they can be set side by side as they stand. The answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'The totals are the same in both. A total is a fair ranking only when the two sides deal with the same mix.'
    ] },

  /* ---------- The near-miss: a percentage built on a handful ---------- */
  { id: 'exc-handful', kind: 'exception', looksLike: 'relrisk', is: 'smalln', ledger: 'relrisk~smalln',
    h: 'A headline percentage built on a handful',
    link: 'Some claims give a big percentage and the counts as well. This one shows what changes when the counts are given and they are tiny.',
    case: 'exc-shop',
    setup: 'The shop owner’s post gives a percentage, up 300%, and a percentage is what you point to for {o:relrisk}. Yet this case is {o:smalln}.',
    prompt: { kind: 'phrase', answer: 'one theft last month and four this month' },
    because: [
      'Ask what the percentage is built on. The log gives it: one theft last month and four this month. The sum is right: 3 more on 1 is 300%. But with so few, one theft more or fewer moves the percentage a long way. If next month there are two thefts, the same owner could post "down 50%", and nothing about shoplifting would have changed.',
      'So the answer is {a:S1.counted}, and the name is {o:smalln}. The questions ask about the people or things in the figure before they ask what the figure is set beside, because everything after rests on them.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-compare', kind: 'question', step: 'C1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its three answers in one place, as they are always asked, and says why it is asked.',
    decides: 'Each of the three names is a different thing missing from beside a figure. {o:relrisk} needs the counts before and after, {o:baserate} needs how common the thing is, and {o:simpson} needs each total split by kind. Asking for the wrong one gets you nowhere: the counts behind a percentage do not help you read a test, and the split of two totals does not help you read a percentage. So the answers are things to ask for: "out of how many?", "how common is it?", "what is each total made of?".',
    how: 'Read the whole claim, the last sentence included, because the words that show the mix or the rare thing are often last. Whichever answer you give, point to the words that show it. If you cannot point, you do not have an answer yet.',
    whenBoth: 'Some claims look as if they need two of these, or as if nothing is missing at all. Each pair below has been set side by side in this unit, and each has one question that tells it apart.' },

  { id: 'check-compare', kind: 'check', after: 'C1',
    case: 'rel-streetlights',
    ask: { type: 'step', step: 'C1' } }
]);
