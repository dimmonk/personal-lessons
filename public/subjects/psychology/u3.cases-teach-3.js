// Psychology, Unit Three: cases shown inside cards, part three: the look-alike pairs and the exceptions.
// A pair of cases is written so that the people and the topic stay the same wherever possible and only the words that decide differ.

FC.cases('psychology', 'u3', [

  { id: 'trip-months', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'booking flights, over months',
    text: "In March Bea wrote in the family chat: 'I'll book the flights for the August trip.' She never did. Since then, whenever her brother Anil asks, she says, 'I never said that,' and later, 'You always muddle who said what,' and later, 'This is what you do, you invent things.' It has gone on for four months. Anil now checks every plan with his mother before he believes his own memory of it.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever her brother Anil asks, she says, 'I never said that,' and later, 'You always muddle who said what,' and later, 'This is what you do, you invent things.' It has gone on for four months." } },

  { id: 'trip-once', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'booking flights, one disagreement',
    text: "Anil says to his sister Bea, 'I thought you were booking the flights for the August trip.' Bea says, 'I remember it as you booking them. Let's look at the chat.' The chat shows that Anil said he would book them. 'Right,' Bea says. 'My mistake. Book them tonight and I'll send you my half.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Bea says, 'I remember it as you booking them. Let's look at the chat.' The chat shows that Anil said he would book them. 'Right,' Bea says. 'My mistake." } },

  { id: 'fence-guilty', use: 'teach', tier: 'varied', setting: 'home', topic: 'a broken fence, he did it',
    text: "A fence panel between two houses has been smashed. Mira's doorbell camera shows her neighbor Joel backing his van into it on Tuesday. When she raises it, Joel says, 'I never touched your fence. You're the one who parks across everyone's drive. I'm sick of being the one who gets blamed around here.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "Mira's doorbell camera shows her neighbor Joel backing his van into it on Tuesday. When she raises it, Joel says, 'I never touched your fence. You're the one who parks across everyone's drive. I'm sick of being the one who gets blamed around here.'" } },

  { id: 'fence-innocent', use: 'teach', tier: 'varied', setting: 'home', topic: 'a broken fence, he did not',
    text: "A fence panel between two houses has been smashed. Mira says to her neighbor Joel, 'I think you backed your van into my fence on Tuesday.' Her doorbell camera shows Joel's van parked outside his own house all that day. 'That's not true, and I don't like being blamed,' Joel says. 'Have a look at your camera.' Mira looks, and says, 'You're right. Sorry.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Her doorbell camera shows Joel's van parked outside his own house all that day. 'That's not true, and I don't like being blamed,' Joel says." } },

  { id: 'friend-flood', use: 'teach', tier: 'varied', setting: 'home', topic: 'a new neighbor, attention pulled back',
    text: "Dan has just moved in next door to Eli. In Dan's first week Eli invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had. When Dan says he cannot make Sunday lunch, Eli does not speak to him for a month, and then says, 'I thought you were different.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ['invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had', "When Dan says he cannot make Sunday lunch, Eli does not speak to him for a month, and then says, 'I thought you were different.'"] } },

  { id: 'friend-keen', use: 'teach', tier: 'varied', setting: 'home', topic: 'a new neighbor, attention kept up',
    text: "Dan has just moved in next door to Eli. In Dan's first week Eli invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had. When Dan says he cannot make Sunday lunch, Eli says, 'No problem, another time,' and is just as friendly the next day.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "When Dan says he cannot make Sunday lunch, Eli says, 'No problem, another time,' and is just as friendly the next day." } },

  { id: 'rota-accuse', use: 'teach', tier: 'varied', setting: 'work', topic: 'swapped shifts, a false accusation',
    text: "Colm tells the store manager, unprompted, that Shay 'is always swapping shifts without telling anyone'. The shift book shows that Colm has swapped four shifts without telling anyone this month, and shows no swap by Shay.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Colm tells the store manager, unprompted, that Shay 'is always swapping shifts without telling anyone'", 'Colm has swapped four shifts without telling anyone this month, and shows no swap by Shay'] } },

  { id: 'rota-fair', use: 'teach', tier: 'varied', setting: 'work', topic: 'swapped shifts, a fair accusation',
    text: "Colm tells Shay, 'You swapped Thursday without telling anyone.' The shift book shows that Shay did. It also shows that Colm has done the same twice this month. Shay says, 'You're right, I forgot to tell Jo. You've done it too, so let's both put swaps on the board.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Colm tells Shay, 'You swapped Thursday without telling anyone.' The shift book shows that Shay did." } },

  { id: 'carshare', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a car-share fund', name: 'The car-share fund', also: ['ownfault'],
    text: "Beth keeps the sheet for a car-share fund that she and Gareth pay into. She asks Gareth why nothing has gone in from him since March. The sheet shows no payment from Gareth since March, and a payment from Beth every month. 'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: ['She asks Gareth why nothing has gone in from him since March.', "'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'"] },
    segments: [
      { text: 'Beth keeps the sheet for a car-share fund that she and Gareth pay into.', note: 'That sets the scene. It shows nothing said or done to anyone.' },
      { text: 'She asks Gareth why nothing has gone in from him since March.' },
      { text: 'The sheet shows no payment from Gareth since March, and a payment from Beth every month.', note: 'That shows Gareth doing what he accuses Beth of, which is why this looks like {o:projection}. It also shows he did it, which {o:darvo} needs, so it cannot settle which this is.' },
      { text: "'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'", note: 'That is what Gareth says back: all three parts of {o:darvo}. But it only counts as an answer if someone raised it with him first.' }
    ] }
]);
