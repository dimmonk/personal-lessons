// Statistical Claims, Unit Five, part three (second half) and the key's question: the last three look-alike pairs, then the question as a question.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for every pair
// already compared the question that separates it and the key's tie-break.

FC.cards('stats', 'u5', [

  { id: 'look-baserate-simpson', kind: 'lookalike', ledger: 'baserate~simpson',
    link: 'Both of these names hide a split: the people who have the thing and the people who do not, or the easy ones and the hard ones. Here are two claims in which the split is the part that is missing.',
    cases: ['la4-camera', 'la4-teams'],
    instruction: 'In one claim a test’s accuracy is read as the chance that its yes is right, and in the other two totals are ranked. Compare one thing: whether the figure is how often a test is right, or two totals set side by side.',
    prompt: { kind: 'which', option: 'C1.common', answer: 'la4-camera' },
    difference: [
      'In Case A the figure is how often the camera is right, 99%, read as the chance that a person it flags is banned. What is missing is how common the thing is: 1 visitor in 20,000 is on the list. Count it out for 100,000 visitors. 5 are banned, and the camera flags about 5 of them. Of the 99,995 others it flags 1 in every 100, about 1,000 people. So about 1,005 people are flagged, and only 5 of them are banned: roughly 1 in 200. The key’s answer is {a:C1.common}, and the case is {o:baserate}.',
      'In Case B the figures are two totals, 40 of 100 and 55 of 100, ranked as if both teams sold to the same kind of buyer. What is missing is what each total is made of: Alpha sells mostly large, hard deals and Bravo mostly small, easy ones. The key’s answer is {a:C1.split}, and the case is {o:simpson}.',
      'Both give a figure that sounds sure. For a test you ask how common the thing is among the people tested. For two totals you ask what mix of easy and hard ones each is made of.'
    ] },

  { id: 'look-relrisk-simpson', kind: 'lookalike', ledger: 'relrisk~simpson',
    link: 'Both of these can turn up in a ranking of two people who do the same job. Here are two rankings of the same two surgeons.',
    cases: ['la5-surgeon-pct', 'la5-surgeon-counts'],
    instruction: 'Both rankings put the same two surgeons side by side, and in both Dr. Okafor comes out ahead. Compare one thing: whether the counts are missing, or the counts are there and each total is made of a different mix.',
    prompt: { kind: 'which', option: 'C1.split', answer: 'la5-surgeon-counts' },
    difference: [
      'In Case A the claim gives "20% more likely to survive" and no counts. If 75 of every 100 of Dr. Lind’s patients survive, 90 of every 100 of Dr. Okafor’s do. If 5 of every 100 of Dr. Lind’s patients survive, 6 of every 100 of Dr. Okafor’s do. You cannot tell which, and you cannot tell how many patients it is about. The key’s answer is {a:C1.numbers}, and the case is {o:relrisk}.',
      'In Case B the counts are all there: 90 of 100, and 75 of 100. Nothing is missing about how many. What is missing is what each total is made of: Dr. Lind takes the patients who are too ill for anyone else to operate on, and Dr. Okafor mostly does routine operations. Split the two totals into routine patients and very ill patients, and the ranking could turn over. The key’s answer is {a:C1.split}, and the case is {o:simpson}.',
      'Both rankings favor Dr. Okafor, and they call for different questions. Missing counts are asked for with "out of how many?". A hidden mix is asked for with "what is each total made of?".'
    ] },

  { id: 'look-simpson-compok', kind: 'lookalike', ledger: 'simpson~comp_ok',
    link: 'Unit Two taught {o:comp_ok}, and one thing it needs is that the two sides are alike. Here are two newsletters about the same two coaches. One is {o:simpson}, and the other is {o:comp_ok}.',
    cases: ['la6-coach-mix', 'la6-coach-same'],
    instruction: 'Both newsletters give the same two totals, 80 of 100 and 60 of 100, and both call Dana the better coach. Compare one thing: whether each coach has the same mix of beginners and national-level swimmers.',
    prompt: { kind: 'which', option: 'S1.compare', answer: 'la6-coach-mix' },
    difference: [
      'In Case A Dana’s swimmers are almost all beginners and Eli’s are almost all national-level. Beginners improve fast and national-level swimmers improve slowly, so Dana’s total is high partly because of who she coaches. The totals cannot say whether Dana coaches better. It could be that Eli does better with beginners and better with national-level swimmers alike, and the totals would look just the same. The key’s answer is {a:S1.compare}, and the case is {o:simpson}.',
      'In Case B each coach has 50 beginners and 50 national-level swimmers, and every swimmer was timed the same way. The two totals are made of the same mix, so they can be set side by side as they stand, and the claim says only that more of Dana’s swimmers improved. The key’s answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'The totals are the same in both. What differs is whether the two sides deal with the same mix. A total is a fair ranking only when they do.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-compare', kind: 'question', step: 'C1',
    h: 'The question you have been answering all along',
    link: 'Since the jogging headline you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its three answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'Each of the three names is a different thing missing from beside a figure, and each is put right by a different piece of arithmetic. For a percentage you need the counts before and after. For a test you need how common the thing is, and then you count out 10,000 people. For two totals you need each total broken down by kind. Asking for the wrong one gets you nowhere: the counts behind a percentage do not help you read a test, and the split of two totals does not help you read a percentage.',
      'That is why the key asks for what you would need to see, and why its answers are things to ask for. A claim of the first kind makes you ask "out of how many?". A claim of the second kind makes you ask "how common is it?". A claim of the third kind makes you ask "what is each total made of?".',
      'Your route here has two answers: the gate answer for what the figure is set beside, and then one of these three. A right name reached by a wrong answer to the first is a miss.'
    ],
    how: [
      'Read the whole claim, the last sentence included, because the words that show the mix or the rare thing are often last. Then look at the form the figure is given in.',
      'First, is what you are given a rise, a fall or a chance stated only as a share, such as "up 40%" or "cut by half", with no word on how many it was before and after? Then the answer is {a:C1.numbers}: give this answer when {when:C1.numbers}.',
      'Second, is the figure how often a test or an alarm is right, read as the chance that a yes from it is right, with the thing rare among the people tested? Then the answer is {a:C1.common}: give this answer when {when:C1.common}.',
      'Third, are two totals set side by side as a ranking, and does the case show that each is made of a different mix of easy and hard ones? Then the answer is {a:C1.split}: give this answer when {when:C1.split}.',
      'Whichever you give, put your finger on the words that show it: the percentage with no counts, the accuracy read as a chance, or the mix. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some claims look as if they need two of these, or as if nothing is missing at all. Each pair below has been set side by side in this unit, and each has one question that tells it apart.' },

  { id: 'check-compare', kind: 'check', after: 'C1',
    case: 'rel-streetlights',
    ask: { type: 'step', step: 'C1' } }
]);
