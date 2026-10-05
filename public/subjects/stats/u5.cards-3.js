// Statistical Claims, Unit Five, part three: two look-alike pairs for Base rate fallacy, and the third name (totals that hide a different mix).

FC.cards('stats', 'u5', [

  { id: 'look-relrisk-baserate', kind: 'lookalike', ledger: 'relrisk~baserate',
    link: 'Both of the names you have now are about a figure that sounds precise and sure, and in both a second number is missing. Here are two claims about the same scanner.',
    cases: ['la2-scan-acc', 'la2-scan-pct'],
    instruction: 'Both claims are about the same new scanner. Compare one thing: whether the figure is a change given as a percentage, or how often a test is right.',
    prompt: { kind: 'which', option: 'C1.common', answer: 'la2-scan-acc' },
    difference: [
      'In Case A the figure is how often the scanner is right, 97%, and the claim reads a yes from it as almost certain. That leaves out how common the disease is: 1 person in 500. Count it out for 100,000 people. 200 have the disease, and the scanner says yes to 194 of them. Of the 99,800 who do not, it says yes to 3 in every 100, which is 2,994. So it says yes to 194 + 2,994 = 3,188 people, and only 194 of them have the disease: about 6 in 100. The key’s answer is {a:C1.common}, and the case is {o:baserate}.',
      'In Case B the figure is a change, "cuts missed diagnoses by 60%", given as a percentage of what it was, with no counts. Missed diagnoses might have fallen from 5 to 2 or from 500 to 200. The key’s answer is {a:C1.numbers}, and the case is {o:relrisk}.',
      'The two share a scanner and a figure that sounds sure, and what you ask for is different. For a change given as a percentage you ask for the counts before and after. For a test’s accuracy you ask how common the thing is.'
    ] },

  { id: 'look-baserate-compok', kind: 'lookalike', ledger: 'baserate~comp_ok',
    link: 'Results from the same kind of test can be reported in a way that holds. Here is one health office telling the story two ways.',
    cases: ['la3-test-acc', 'la3-test-counts'],
    instruction: 'Both claims are about the same home test for Rudd fever. The test is 98% accurate, and about 1 person in 200 has Rudd fever. Compare one thing: whether the claim reads a yes with how common the fever is in view.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'la3-test-counts' },
    difference: [
      'In Case A the claim gives the accuracy, 98%, and reads a yes as "very likely" to be right. Count it out for 10,000 people. 50 have the fever, and the test says yes to 49 of them. Of the 9,950 who do not, it says yes to 2 in every 100: 199. So it says yes to 248 people, and 49 of them have the fever. A yes is right about 1 time in 5, and not 98 times in 100. The key’s answer is {a:S1.compare}, and the case is {o:baserate}.',
      'In Case B the claim gives the counts, and they are the same counts: of the 248 who tested yes, 49 had it, and of the 9,752 who tested no, 1 had it. It reads them as they stand: a yes is far likelier to be right than a no, and it does not say that a yes is nearly certain. Everyone took the same test in the same month, and all the numbers are there. The key’s answer is {a:S1.holds}, and the case is {o:comp_ok}.',
      'Both claims are about the same test and the same people. The difference is whether the reading of a yes uses how common the fever is. In Case B it does, because the counts include how many people had it.'
    ] },

  /* ---------- Simpson's paradox ---------- */
  { id: 'meet-simpson', kind: 'meet', outcome: 'simpson',
    link: 'The first two names were about a figure for one thing. The third is about two totals set side by side, and what each of them is made of.',
    case: 'simp-tutors', mark: 'C1',
    strip: [
      'There are two totals, set side by side as a ranking: 75 of 100 students passed with Ms. Hale, 54 of 100 with Mr. Ruiz. Families are told to choose Ms. Hale.',
      'Each total is made of two kinds of student: those already doing well, who pass easily, and those already failing, who pass with difficulty.',
      'The two tutors have very different mixes: Ms. Hale has mostly the first kind and Mr. Ruiz mostly the second.',
      'The ranking reads the two totals as if they were earned with the same kind of student.'
    ],
    explain: [
      'Look at the totals first: Ms. Hale 75 of 100, Mr. Ruiz 54 of 100. Hale looks far better. Before you believe it, ask what each total is made of. The site’s records sort each tutor’s 100 students into two kinds: students who were already doing well, and students who were already failing.',
      'Ms. Hale taught 90 students who were already doing well, and 72 of them passed: 80 of every 100. She taught 10 who were already failing, and 3 passed: 30 of every 100. In all, 72 + 3 = 75 passed out of 100.',
      'Mr. Ruiz taught 10 students who were already doing well, and 9 of them passed: 90 of every 100. He taught 90 who were already failing, and 45 passed: 50 of every 100. In all, 9 + 45 = 54 passed out of 100.',
      'Now set the two tutors side by side, one kind of student at a time. With students already doing well, Mr. Ruiz passes 90 of every 100 and Ms. Hale 80. With students already failing, Mr. Ruiz passes 50 of every 100 and Ms. Hale 30. Mr. Ruiz does better with both kinds of student, and he still has the lower total.',
      'That sounds like a trick, and it is not. A total is a mix of the groups inside it, counted in proportion to how many are in each group. Ms. Hale’s total is high because 90 of her 100 students were the kind who pass easily. Mr. Ruiz’s is low because 90 of his were the kind who do not. What decided the totals was how many of each kind each tutor had, and the ranking leaves that out.',
      'So the totals cannot rank the tutors, because the tutors did not teach the same mix of students. To read them fairly you need each tutor’s figure broken down by kind of student.'
    ],
    feature: { step: 'C1', option: 'split' },
    name: 'The name for this is {o:simpson}. A "paradox" is something that seems to contradict itself. The seeming contradiction here is that one tutor does better with every kind of student and still has the lower total. Simpson is the name of the person who described it.' },

  { id: 'again-simpson', kind: 'again', outcome: 'simpson',
    link: 'The two tutors gave you what to point to, from one case: {needs:simpson}. Here is a second case with a different story, and a recovery rate in place of a pass rate.',
    first: 'simp-tutors', second: 'simp-hospitals', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (math tutors, hospitals) and ignore which total is bigger. Look at one thing only: what each total is made of, and whether the two are made of the same mix.',
    prompt: { kind: 'phrase', answer: 'Parkview is the regional hospital that other hospitals send their most serious patients to' },
    shared: [
      'In both cases a ranking of two totals is read as fair, and in both the two totals are made of very different mixes of easy and hard ones: students who pass easily or with difficulty, patients who recover easily or with difficulty.',
      'Break each hospital down by kind of patient. Lakeside treated 800 mild patients and 200 serious ones. Of the mild, 760 recovered (95 of every 100), and of the serious, 100 recovered (50 of every 100). In all, 760 + 100 = 860 of 1,000. Parkview treated 250 mild patients and 750 serious ones. Of the mild, 240 recovered (96 of every 100), and of the serious, 450 recovered (60 of every 100). In all, 240 + 450 = 690 of 1,000.',
      'Parkview does better with the mild patients, 96 against 95, and better with the serious ones, 60 against 50. It has the lower total because three in four of its patients were the serious kind. A reader who chose by the totals would pick Lakeside, and with every kind of patient Parkview did better.',
      'The two stories share nothing else. So this is not about tutors or hospitals, and not about passing or recovering. It holds wherever two totals are set side by side as a fair ranking and each total is made of a different mix of easy and hard ones. That is what {o:simpson} names.'
    ] },

  { id: 'portrait-simpson', kind: 'portrait', outcome: 'simpson',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:simpson} in real life, where nobody marks the words for you.',
    typical: [
      'Two things, places or people are ranked by a total: a pass rate, a recovery rate, a share of deals closed, a share of orders delivered on time.',
      'Each total is made of groups that differ in how hard they are: students already failing or already doing well, patients who are mild or serious, deals that are large or small. The claim does not split the totals.',
      'The mixes differ a lot. One of the two has far more of the hard ones than the other, usually for a reason you can see: the regional hospital gets the sickest patients, and the tutor known for helping weak students gets them.',
      'The better one often has the lower total. When it happens, the order of the totals is the opposite of the order in every group. It happens because each total counts every group in proportion to how many are in it, and those numbers differ.',
      'Nothing in either total is wrong. Every count is right, and every sum is right. What is wrong is reading two totals made of different mixes as a fair ranking.',
      'It is easiest to miss in rankings of people who do a job: tutors, surgeons, teams, shops. Whoever takes on the hard work looks worse in the totals.'
    ],
    not: 'Two totals set side by side are not the problem. When the two sides deal with the same mix, the totals can be set side by side as they stand, and the claim is fine. And two sides with different mixes do not always reverse. The reversal is the vivid form of the problem, and the problem is the different mix. The name applies when the case shows that each total is made of a different mix of easy and hard ones and the claim ranks the totals as if they were alike.',
    wild: ['"Hospital A has the better survival rate."', '"This tutor gets more of her students through."', '"Our team closes more deals."', '"Shop B fixes more phones first time."', '"The best record in the county."'],
    self: 'In your own life it is any ranking that compares people or places by one total: schools, teams, shops, drivers, doctors. Whoever takes on the harder work looks worse in the total, and the total does not show why.',
    ask: '"What is each total made of, and is it the same mix on both sides?" Name the easy kind and the hard kind, and say how many of each each side has.',
    act: [
      'First, do not choose between two things by their totals alone when each deals with people or jobs of different kinds.',
      'Second, ask what each total is made of: which are the easy ones and which are the hard ones, and how many of each each side has.',
      'Third, look for each total broken down by kind, and compare kind by kind: easy against easy, hard against hard.',
      'Fourth, if you cannot get the split, say so: "Better overall, but is it the same mix?" Treat the ranking as unknown, and not as settled.'
    ] },

  { id: 'check-simpson', kind: 'check', after: 'simpson',
    case: 'simp-phones',
    ask: { type: 'option', step: 'C1', among: ['numbers', 'common', 'split'] } }
]);
