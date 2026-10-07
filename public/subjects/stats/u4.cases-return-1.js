// Statistical Claims, Unit Four: fresh cases kept back for later days (first file: Gaming the target and A change in how it is counted,
// two for each name). Each is asked as a whole claim, beside a case of the name it is most often taken for. None of these appears in a card or in the drill.

FC.cases('stats', 'u4', [

  { id: 'm4-ret-dialer', use: 'return', tier: 'varied', setting: 'work', topic: 'a phone sales firm and the calls its dialer logs',
    text: "A phone sales firm pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once. Calls made per rep per day rose from 50 to 160 after the pay began. Conversations of more than a minute stayed at 12 a day.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once",
            M1: "pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once" },
    reason: { S1: 'The count of calls can go up with no more selling: {cue:S1}. It rose by 110 a day (from 50 to 160), while conversations of more than a minute stayed at 12.',
              M1: 'The reps are paid on the count, and ending a call at once adds one to it: {cue:M1}. That is easier than holding a conversation.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for calls. The reps gain from the figure and can make it higher themselves.' } },

  { id: 'm4-ret-dealer', use: 'return', tier: 'varied', setting: 'money', topic: 'a car dealer and orders signed in the last week',
    text: "A car dealer pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order. Cars 'sold' in that week rose from 60 to 95. Of the 95 signed orders, 35 were canceled the following month, where almost none used to be. Cars delivered in that week stayed at 60.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order",
            M1: "pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order" },
    reason: { S1: 'The count of cars sold can go up with no more cars leaving: {cue:S1}. It rose by 35 (from 60 to 95), and 35 of the orders were canceled, so deliveries stayed at 60.',
              M1: 'The salespeople are paid when the order is signed: {cue:M1}. A signature on an order that will not last raises the figure with no more cars sold.' },
    not: { outcome: 'defshift', why: 'A sale is counted at the same point in both years, when the customer signs. What changed is what the salespeople do to get signatures.' } },

  { id: 'm4-ret-accidents', use: 'return', tier: 'varied', setting: 'work', topic: 'a firm that counts only longer stoppages',
    text: "A firm reports: 'Workplace accidents fell from 50 to 30 this year.' Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted. Of last year's 50, 20 stopped work for one to three days, and this year 20 of those happened again.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted",
            M1: "Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted" },
    reason: { S1: 'The count fell with no fewer accidents: {cue:S1}. Counted last year’s way, this year is 30 + 20 = 50, the same as last year.',
              M1: 'What counts as an accident changed: {cue:M1}. The 20 short stoppages are still happening, but they are no longer counted.' },
    not: { outcome: 'detection', why: 'Nobody looked less hard for accidents. A new definition left the short stoppages out of the count.' } },

  { id: 'm4-ret-graduation', use: 'return', tier: 'varied', setting: 'learning', topic: 'a college that widened its finishing window',
    text: "A college reports: 'The graduation rate rose from 60% to 72%.' Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six. Of every 1,000 students who started, 600 finished within four years in both years, and 120 more finished in years five and six in both years.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six",
            M1: "Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six" },
    reason: { S1: 'The rate rose with no more students finishing: {cue:S1}. Counted the four-year way, both years are 600 in 1,000 (60%); counted the six-year way, both are 720 (72%).',
              M1: 'What counts as graduating changed, from four years to six: {cue:M1}. The students did the same in both years.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for graduates. The same 120 late finishers were there in both years, and this year they are counted.' } }
]);
