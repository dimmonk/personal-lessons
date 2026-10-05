// Statistical Claims, Unit Two: cases shown inside cards, part two: the cases of the last two names, the case for the question card's check, and
// the two cases worked for the learner. The same conventions as part one apply: for the key's question in this unit, H1, the marked words are
// the claim itself; for the first question, S1, they are the words that show every part holding.

FC.cases('stats', 'u2', [

  /* ---------- Two things set side by side ---------- */
  { id: 'h-buses', use: 'teach', tier: 'clean', setting: 'community', topic: 'two bus lines and late trips', name: 'The two bus lines',
    text: "A city transit agency compared two bus lines. Both are 12 miles long, run on weekdays in the same hours, and serve neighborhoods of similar size. The agency checked every trip in March with the same GPS tracker. On Line 5, 12 of 200 trips arrived more than ten minutes late. On Line 9, 31 of 205 did. The agency says: 'Line 9 buses are late more often than Line 5 buses: 15 trips in 100 against 6.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both are 12 miles long, run on weekdays in the same hours', 'checked every trip in March with the same GPS tracker'], H1: 'Line 9 buses are late more often than Line 5 buses: 15 trips in 100 against 6' } },

  { id: 'h-shifts', use: 'teach', tier: 'clean', setting: 'work', topic: 'day and night shifts on one line', name: 'The two shifts',
    text: "A factory makes the same brake part on one line, day and night, and inspects every part the same way at the end of the line. Last quarter the day shift made 3,000 parts and 42 failed inspection, and the night shift made 3,100 parts and 68 failed. The factory says: 'The night shift’s parts fail inspection more often: 22 in 1,000 against 14 in 1,000.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['makes the same brake part on one line, day and night, and inspects every part the same way'], H1: 'The night shift’s parts fail inspection more often: 22 in 1,000 against 14 in 1,000' },
    segments: [
      { text: 'A factory makes the same brake part on one line, day and night, and inspects every part the same way at the end of the line', note: 'That says how alike the two shifts are and how the parts are counted. It is what makes the claim hold, but it is not the claim.' },
      { text: 'Last quarter the day shift made 3,000 parts and 42 failed inspection, and the night shift made 3,100 parts and 68 failed', note: 'Those are the counts. The claim is what the factory says they show.' },
      { text: 'The night shift’s parts fail inspection more often: 22 in 1,000 against 14 in 1,000' }
    ] },

  { id: 'h-pools', use: 'check', tier: 'clean', setting: 'leisure', topic: 'water tests at two public pools',
    text: "A county tests the water at two public pools with the same lab and the same method every week for a year. Pool A failed 3 of 150 tests, and Pool B failed 9 of 150. The county says: 'Pool B's water fails tests more often: 6 in 100 against 2 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['tests the water at two public pools with the same lab and the same method every week for a year'], H1: "Pool B's water fails tests more often: 6 in 100 against 2 in 100" },
    reason: { H1: "The claim is {cue:H1}. It sets two pools side by side and says which fails more often, with the numbers behind it: 9 ÷ 150 = 0.06 and 3 ÷ 150 = 0.02. It does not follow one pool through time, and it does not say why Pool B fails more." } },

  { id: 'h-reservoir-usual', use: 'teach', tier: 'clean', setting: 'community', topic: 'a reservoir beside its usual level', name: 'The reservoir beside its usual level',
    text: "A water district reads the same gauge at the same dam at 8 a.m. on 1 September every year, and has done so for twenty-one years. Nobody's pay depends on the reading. This year the reservoir stood at 61% full. The average of the twenty earlier readings for that date is 74% full. The district says: 'On 1 September the reservoir stood at 61% full, 13 points below the usual 74% full for the date.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['reads the same gauge at the same dam at 8 a.m. on 1 September every year', 'Nobody\'s pay depends on the reading'], H1: 'On 1 September the reservoir stood at 61% full, 13 points below the usual 74% full for the date' } },

  { id: 'h-readgroups', use: 'teach', tier: 'clean', setting: 'learning', topic: 'reading groups at one school, the gap only', name: 'The reading groups, the gap only',
    text: "A school drew names from a hat to choose 60 of its 120 pupils for a new reading program, and the other 60 kept their usual lessons. All 120 sat the same test at the end of the term. The program group averaged 74 points and the other group averaged 62. The school says: 'Pupils in the reading program scored 12 points higher on the test than pupils outside it: 74 against 62.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['drew names from a hat to choose 60 of its 120 pupils for a new reading program', 'All 120 sat the same test at the end of the term'], H1: 'Pupils in the reading program scored 12 points higher on the test than pupils outside it: 74 against 62' } },

  { id: 'h-towns', use: 'teach', tier: 'varied', setting: 'home', topic: 'garbage in two towns, one with a pickup', name: 'Marlow and Ashby',
    text: "Marlow and Ashby are towns of about the same size, with the same kinds of homes. Marlow started a free food-waste pickup in 2022. Both towns weigh all household garbage on trucks fitted with the same scales, and both reported for the whole of 2023. A Marlow household threw away 410 kilograms of garbage on average, and an Ashby household threw away 470. The state report says: 'Households in Marlow threw away less garbage than households in Ashby: 410 kilograms against 470.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['towns of about the same size, with the same kinds of homes', 'weigh all household garbage on trucks fitted with the same scales'], H1: 'Households in Marlow threw away less garbage than households in Ashby: 410 kilograms against 470' },
    segments: [
      { text: 'Marlow and Ashby are towns of about the same size, with the same kinds of homes. Marlow started a free food-waste pickup in 2022', note: 'That is the story, and it includes the pickup. The story is not the claim: what the claim says is in the report.' },
      { text: 'A Marlow household threw away 410 kilograms of garbage on average, and an Ashby household threw away 470', note: 'Those are the figures. The claim is what the report says they show.' },
      { text: 'Households in Marlow threw away less garbage than households in Ashby: 410 kilograms against 470' }
    ] },

  { id: 'h-libraries', use: 'teach', tier: 'clean', setting: 'community', topic: 'two libraries and late returns', name: 'The two libraries',
    text: "A county has two public libraries, East and West. Both lend books on the same terms with the same three-week due date, and the county counted every loan last year in the same system. East lent 9,200 books and 1,104 came back late. West lent 9,100 books and 1,365 came back late. The county says: 'Books from West are returned late more often than books from East: 15 in 100 against 12.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both lend books on the same terms with the same three-week due date', 'counted every loan last year in the same system'], H1: 'Books from West are returned late more often than books from East: 15 in 100 against 12' } },

  /* ---------- One thing causing another ---------- */
  { id: 'h-migraine', use: 'teach', tier: 'clean', setting: 'health', topic: 'a new tablet and migraine days', name: 'The migraine test',
    text: "A clinic enrolled 400 adults who had migraines on at least eight days a month. A computer split them into two groups of 200 by lottery. One group took a new tablet every day for eight weeks. The other group took a placebo that looked and tasted the same. Nobody knew who had which until the end. At the end of the eight weeks the tablet group averaged 4 migraine days a month and the placebo group averaged 7. The clinic reports: 'The new tablet reduced migraine days: 4 a month against 7.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['A computer split them into two groups of 200 by lottery', 'Nobody knew who had which until the end'], H1: 'The new tablet reduced migraine days: 4 a month against 7' } },

  { id: 'h-reminder', use: 'teach', tier: 'clean', setting: 'money', topic: 'a text reminder for late loan payments', name: 'The text reminder',
    text: "A bank has 10,000 customers who are two weeks late with a loan payment. A computer drew 5,000 of them by lottery to get a text message reminder. The other 5,000 got nothing extra. Thirty days later the bank checked every account the same way: 3,100 of the reminder group had paid, and 2,700 of the others. The bank says: 'The text reminder made more customers pay: 62 in 100 against 54 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['A computer drew 5,000 of them by lottery to get a text message reminder', 'checked every account the same way'], H1: 'The text reminder made more customers pay: 62 in 100 against 54 in 100' },
    segments: [
      { text: 'A bank has 10,000 customers who are two weeks late with a loan payment. A computer drew 5,000 of them by lottery to get a text message reminder. The other 5,000 got nothing extra', note: 'That says how the two groups were formed. It is what lets the claim say what it says, but it is not the claim.' },
      { text: 'Thirty days later the bank checked every account the same way: 3,100 of the reminder group had paid, and 2,700 of the others', note: 'Those are the counts. The claim is what the bank says they show.' },
      { text: 'The text reminder made more customers pay: 62 in 100 against 54 in 100' }
    ] },

  { id: 'h-allotment', use: 'check', tier: 'clean', setting: 'leisure', topic: 'compost on garden plots',
    text: "A garden co-op owns 200 plots of the same size and soil. A volunteer flipped a coin for each plot to decide whether it would get the new compost for the season. All 200 plots were planted with the same seeds on the same day and weighed the same way at harvest. The plots with compost gave 6.4 kilograms of tomatoes on average and the others gave 5.1. The co-op says: 'The new compost raised tomato yields: 6.4 kilograms against 5.1.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['flipped a coin for each plot to decide whether it would get the new compost', 'weighed the same way at harvest'], H1: 'The new compost raised tomato yields: 6.4 kilograms against 5.1' },
    reason: { H1: 'The claim is {cue:H1}. It does not stop at which group is ahead: it says that the compost raised the yields, which is saying what made the gap. The words that allow it are in the case: a coin decided which plots got the compost.' } },

  { id: 'h-reading-cause', use: 'teach', tier: 'clean', setting: 'learning', topic: 'reading groups at one school, the program credited', name: 'The reading program, the cause said',
    text: "A school drew names from a hat to choose 60 of its 120 pupils for a new reading program, and the other 60 kept their usual lessons. All 120 sat the same test at the end of the term. The program group averaged 74 points and the other group averaged 62. The school says: 'The reading program raised test scores by 12 points: 74 against 62.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew names from a hat to choose 60 of its 120 pupils for a new reading program', 'All 120 sat the same test at the end of the term'], H1: 'The reading program raised test scores by 12 points: 74 against 62' } },

  { id: 'h-backs', use: 'teach', tier: 'misleading', setting: 'health', topic: 'daily stretching and long-term back pain', name: 'The stretching trial',
    text: "A hospital pain unit wanted to know whether stretching helps people with long-term back pain. It enrolled 300 adults. A computer drew 150 of them by lottery for a daily stretching routine, and the other 150 kept their usual care. At twelve weeks everyone filled in the same pain form, scored from 0 to 10. The stretching group averaged 3.1 and the usual-care group averaged 4.4. The hospital says: 'Daily stretching reduced back pain: 3.1 against 4.4.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['A computer drew 150 of them by lottery for a daily stretching routine', 'everyone filled in the same pain form'], H1: 'Daily stretching reduced back pain: 3.1 against 4.4' } },

  /* ---------- The case for the question card's check ---------- */
  { id: 'h-bikes', use: 'check', tier: 'clean', setting: 'work', topic: 'how employees get to work',
    text: "A company with 3,000 employees wants to know how many commute by bike. Its HR office drew 600 employee numbers by lottery from the full payroll list, emailed each one, and phoned the ones who had not replied until 570 had answered. Of the 570, 114 commute by bike, which is 20 in 100. HR says: 'About 20% of our employees commute by bike.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 600 employee numbers by lottery from the full payroll list', 'until 570 had answered'], H1: 'About 20% of our employees commute by bike' },
    reason: { H1: 'The claim is {cue:H1}. It gives one figure about one group at one time. The words about the lottery and the 570 answers show why the figure holds, and the claim itself does not say that the figure rose, differs from another company’s or has a cause.' } }
]);
