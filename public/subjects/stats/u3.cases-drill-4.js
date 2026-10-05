// Statistical Claims, Unit Three: drill cases for the third stage (finish: the first answer is shown, the learner answers the key's question
// and gives the name). None of these appears in a card. Field guide: see u3.cases-drill-1.js. The case of a claim that holds (outcome
// samp_ok) carries marked words and a reason for the unit's own question (A1) as well, which the validator asks of a finish case; the
// app, which shows it only the questions on its own route, never prints them.

FC.cases('stats', 'u3', [

  /* ---------- Stage three ---------- */
  { id: 'cd-f-lasted', use: 'drill', tier: 'varied', setting: 'health', topic: 'a diet book and the readers who finished the year',
    text: "A diet book says: 'Every person who stuck with this plan for a year lost 20 pounds.' The author collected the stories of the 60 readers who finished the year. About 900 people started the plan.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['collected the stories of the 60 readers who finished the year', 'Every person who stuck with this plan for a year lost 20 pounds'], A1: 'collected the stories of the 60 readers who finished the year' },
    reason: { S1: 'The book speaks for people who try the plan, but the figure comes from the readers who finished: {cue:S1}. About 840 of the 900 who started are not in it.',
              A1: 'The stories were collected after the fact, from the ones who lasted: {cue:A1}. People who drop a plan are mostly the ones it was not working for.' },
    not: { outcome: 'selfselect', why: 'Nobody is in the figure by choosing to answer a poll. They are in because they finished the year. The ones who are missing left.' } },

  { id: 'cd-f-chose', use: 'drill', tier: 'varied', setting: 'work', topic: 'a job website pop-up on pay',
    text: "A job website shows a pop-up to people who visit it: 'Do you feel underpaid?' Anyone who wished could click an answer. 14,000 visitors clicked an answer, and 11,900 clicked yes. A newspaper writes: 'Most American workers feel underpaid: 85 in every 100.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['14,000 visitors clicked an answer', 'Most American workers feel underpaid'], A1: 'Anyone who wished could click an answer' },
    reason: { S1: 'The newspaper speaks for American workers, but the figure comes from visitors to one job website who clicked: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. People who visit a job website are looking for work, and the ones who feel underpaid are likelier to click.' },
    not: { outcome: 'nonresp', why: 'There is no known list of people who were asked. A pop-up appears for whoever visits, and nobody is asked by name.' } },

  { id: 'cd-f-replied', use: 'drill', tier: 'varied', setting: 'money', topic: 'a bank email on Saturday opening',
    text: "A bank emailed all 25,000 of its customers: 'Do you want branches open on Saturdays?' 1,500 replied, and 1,200 said yes. The bank says: 'Four in five customers want Saturday opening.' It did not ask the other 23,500 again.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['1,500 replied, and 1,200 said yes', 'Four in five customers want Saturday opening'], A1: ['emailed all 25,000 of its customers', 'did not ask the other 23,500 again'] },
    reason: { S1: 'The bank speaks for all its customers, but the figure comes from 1,500 who replied: {cue:S1}. That is 6 in every 100 of them.',
              A1: 'Everyone on the list was asked by name, and nearly everyone stayed silent: {cue:A1}. A customer who works on weekdays is likelier to reply.' },
    not: { outcome: 'selfselect', why: 'Every customer was emailed by name, so nobody chose themselves into the survey. What went wrong is that 23,500 of 25,000 did not reply.' } },

  { id: 'cd-f-ok', use: 'drill', tier: 'varied', setting: 'community', topic: 'a city hall visiting addresses drawn by lottery',
    text: "A city hall drew 800 addresses by lottery from its list of every home in the city and sent staff to each one. 770 people answered the door and the questions, and 31 in every 100 said they feel unsafe walking at night. The report says: 'About 31 in every 100 city residents feel unsafe walking at night.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'drew 800 addresses by lottery from its list of every home in the city', H1: 'About 31 in every 100 city residents feel unsafe walking at night', A1: 'sent staff to each one' },
    reason: { S1: 'The people were picked by lottery from a list of every home: {cue:S1}. Nobody could be favoured, and nearly all of them answered: 770 of 800 is 96 in every 100.',
              H1: 'The claim gives one share for one group at one time and says nothing more: {cue:H1}.',
              A1: 'None of the four ways in fits: staff went to every home that was drawn, and almost everyone answered: {cue:A1}.' },
    not: { outcome: 'nonresp', why: 'Most of those asked did answer: 770 of the 800 came to the door and replied, so what is missing is too little to lean the figure.' } }
]);
