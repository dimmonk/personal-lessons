// Statistical Claims, Unit Four: fresh cases kept back for later days (first file: Gaming the target and A change in how it is counted,
// four for each name; an action subject has a fourth return, at about twelve weeks). Each is asked as a whole route, beside a case of the
// name it is most often taken for. None of these appears in a card or in the drill.

FC.cases('stats', 'u4', [

  /* ---------- Gaming the target ---------- */
  { id: 'm4-ret-dialer', use: 'return', tier: 'varied', setting: 'work', topic: 'a phone sales firm and the calls its dialer logs',
    text: "A phone sales firm pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once. Calls made per rep per day rose from 50 to 160 after the pay began. Conversations of more than a minute stayed at 12 a day.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once",
            M1: "pays each rep $2 for every call 'made', and the dialer counts a call as made when the line connects for one second. A rep can end a call at once" },
    reason: { S1: 'The count of calls can rise with no more selling: {cue:S1}. It rose by 110 a day (from 50 to 160), and the conversations that lasted more than a minute stayed at 12.',
              M1: 'The reps are paid on the count, and ending a call at once adds one to it: {cue:M1}. That is easier than holding a conversation.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for calls. The reps gain from the figure and can make it higher themselves.' } },

  { id: 'm4-ret-dealer', use: 'return', tier: 'varied', setting: 'money', topic: 'a car dealer and orders signed in the last week',
    text: "A car dealer pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order. Cars 'sold' in that week rose from 60 to 95. Of the 95 signed orders, 35 were canceled the following month, where almost none used to be. Cars delivered in that week stayed at 60.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order",
            M1: "pays each salesperson a bonus for every car 'sold' in the last week of the quarter, and a car counts as sold when the customer signs the order" },
    reason: { S1: 'The count of cars sold can rise with no more cars leaving: {cue:S1}. It rose by 35 (from 60 to 95), and 35 of the orders were canceled, so deliveries stayed at 60.',
              M1: 'The salespeople are paid when the order is signed: {cue:M1}. Getting a signature on an order that will not last raises the figure with no more cars sold.' },
    not: { outcome: 'defshift', why: 'A sale is counted at the same point in both years, when the customer signs. What changed is what the salespeople do to get signatures.' } },

  { id: 'm4-ret-runclub', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a running club prize on kilometers logged',
    text: "A running club gives a prize each month to the member with the most kilometers logged, and members can type in a run by hand. The winner's logged kilometers rose from 120 to 310 in a month after the prize began. The club's weekly timed runs and the race entries that month show the winner running about the same as before, about 120 km in a month.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives a prize each month to the member with the most kilometers logged, and members can type in a run by hand",
            M1: "gives a prize each month to the member with the most kilometers logged, and members can type in a run by hand" },
    reason: { S1: 'The logged kilometers can rise with no more running: {cue:S1}. They rose by 190 (from 120 to 310) while the timed runs show about 120 km a month.',
              M1: 'The person who wins the prize also writes the figure in: {cue:M1}. Typing in a run that was not run is easier than running it.' },
    not: { outcome: 'defshift', why: 'The logging works the same way in both months. What changed is that a prize now rewards the number a member types in.' } },

  { id: 'm4-ret-helpline', use: 'return', tier: 'varied', setting: 'community', topic: 'a city help line ranked on requests closed',
    text: "A city help line ranks its agents on 'requests closed' per day, and an agent closes a request by clicking 'resolved'. Requests closed per agent per day rose from 18 to 41. The share of callers who phone back about the same problem within a week went from 8 in every 100 to 31 in every 100.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "ranks its agents on 'requests closed' per day, and an agent closes a request by clicking 'resolved'",
            M1: "ranks its agents on 'requests closed' per day, and an agent closes a request by clicking 'resolved'" },
    reason: { S1: 'The count of requests closed can rise with no more problems solved: {cue:S1}. It rose from 18 to 41 a day, and callers phoning back rose from 8 to 31 in every 100.',
              M1: 'The agents are ranked on the figure and click it themselves: {cue:M1}. Clicking "resolved" early closes a request whether or not the problem is solved.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for problems. The agents are ranked on the figure and make it.' } },

  /* ---------- A change in how it is counted ---------- */
  { id: 'm4-ret-accidents', use: 'return', tier: 'varied', setting: 'work', topic: 'a firm that counts only longer stoppages',
    text: "A firm reports: 'Workplace accidents fell from 50 to 30 this year.' Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted. Of last year's 50, 20 stopped work for one to three days, and this year 20 of those happened again.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted",
            M1: "Until last year every accident that stopped someone working for even a day was counted. This year only accidents that stop someone working for more than three days are counted" },
    reason: { S1: 'The count fell with no fewer accidents: {cue:S1}. Counted last year’s way, this year is 30 + 20 = 50, the same as last year.',
              M1: 'What counts as an accident changed: {cue:M1}. The 20 short stoppages are still happening; they are no longer counted.' },
    not: { outcome: 'detection', why: 'Nobody looked less hard for accidents. The short stoppages were left out of the count by a new definition.' } },

  { id: 'm4-ret-graduation', use: 'return', tier: 'varied', setting: 'learning', topic: 'a college that widened its finishing window',
    text: "A college reports: 'The graduation rate rose from 60% to 72%.' Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six. Of every 1,000 students who started, 600 finished within four years in both years, and 120 more finished in years five and six in both years.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six",
            M1: "Until last year it counted a student as graduating only if they finished within four years. This year it counts those who finish within six" },
    reason: { S1: 'The rate rose with no more students finishing: {cue:S1}. Counted the four-year way, both years are 600 in 1,000, which is 60%; counted the six-year way, both are 720, which is 72%.',
              M1: 'What counts as graduating changed, from four years to six: {cue:M1}. The students did the same in both years.' },
    not: { outcome: 'detection', why: 'Nobody looked harder for graduates. The same 120 who finish late were there in both years, and this year they are counted.' } },

  { id: 'm4-ret-meter', use: 'return', tier: 'varied', setting: 'home', topic: 'an electricity bill and a new meter in week two',
    text: "Kofi's electricity bill says: 'You used 420 kWh this month, up from 360 last month.' The utility replaced his meter in the second week of the month. A technician's bench test showed that the new meter reads about 15% higher than the old one on the same load. Kofi's family used the same lights and appliances as before.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "The utility replaced his meter in the second week of the month. A technician's bench test showed that the new meter reads about 15% higher than the old one on the same load",
            M1: "The utility replaced his meter in the second week of the month. A technician's bench test showed that the new meter reads about 15% higher than the old one on the same load" },
    reason: { S1: 'The figure rose with the family using no more: {cue:S1}. 15% of 360 is 54, so the same use would read about 414 on the new meter, close to the 420 on the bill.',
              M1: 'The tool that measures was replaced: {cue:M1}. A new meter can read higher or lower than the old one on the same load.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or ranked on the reading. What changed is the meter that makes it.' } },

  { id: 'm4-ret-course', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a city marathon with a moved turnaround point',
    text: "A city marathon posts: 'Average finish time fell from 4:40 to 4:25 in five years.' In year three the race moved its turnaround point, and a surveyor's wheel later showed that the course is now 2.2 km short of a full marathon. At the average pace of about 6 minutes 40 seconds a kilometer, 2.2 km takes about 15 minutes.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In year three the race moved its turnaround point, and a surveyor's wheel later showed that the course is now 2.2 km short of a full marathon",
            M1: "In year three the race moved its turnaround point, and a surveyor's wheel later showed that the course is now 2.2 km short of a full marathon" },
    reason: { S1: 'The average time fell with no runner running faster: {cue:S1}. The fall is 4:40 − 4:25 = 15 minutes, and a course 2.2 km shorter takes about 15 minutes less.',
              M1: 'What is measured changed: {cue:M1}. A finish time on a shorter course is not the same measure as a finish time on a full one.' },
    not: { outcome: 'meas_ok', why: 'A fall in a figure is only the real thing moving when it is counted the same way at both ends. The course is not the same course.' } }
]);
