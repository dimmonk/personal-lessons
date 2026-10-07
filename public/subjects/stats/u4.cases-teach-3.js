// Statistical Claims, Unit Four: cases shown inside cards, third part (the check on the question and the worked claim).

FC.cases('stats', 'u4', [

  { id: 'meas-step-counter', use: 'check', tier: 'clean', setting: 'home', topic: 'a phone app that began counting stroller pushes', name: 'The step counter',
    text: "A phone app tells Rina: 'Your average steps per day rose from 6,200 to 7,400 this month.' In the second week an update changed how the app counts: it now counts the arm movements of pushing a stroller as steps, which it ignored before. Rina walked her usual routes with the stroller every day, as in earlier months.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { M1: "an update changed how the app counts: it now counts the arm movements of pushing a stroller as steps, which it ignored before" },
    reason: { M1: 'The app changed how it counts: {cue:M1}. The extra 1,200 steps a day are arm movements it now counts and used to ignore.' } },

  { id: 'meas-calls', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a call center that installed new phones', name: 'The call center’s new phones',
    text: "A call center installed a new phone system in January, and its report says: 'Average call time fell from 8 minutes to 5 minutes after the new phone system went in. The new system works.' Agents are ranked each month by average call time, and the ten lowest get a $150 bonus. The system times every call to the second, as the old one did. Agents have found that when a call reaches 5 minutes they can hang up, and the customer must call again; a hung-up call is counted like any other. The share of customers whose problem was solved on the first call was 70 of every 100 before and 52 of every 100 after.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "Agents are ranked each month by average call time, and the ten lowest get a $150 bonus",
            M1: "Agents are ranked each month by average call time, and the ten lowest get a $150 bonus. The system times every call to the second, as the old one did. Agents have found that when a call reaches 5 minutes they can hang up" } }
]);
