// Psychology, Unit Three: cases shown inside cards, part three: the look-alike pairs and the exceptions.
// A pair of cases is written so that the people and the topic stay the same wherever possible and only the words that decide differ.

FC.cases('psychology', 'u3', [

  /* ---------- Turning the blame around, or accusing someone of what you do: club petty cash ---------- */
  { id: 'books-raised', use: 'teach', tier: 'varied', setting: 'community', topic: 'club petty cash, raised with him',
    text: "Nell asks the club treasurer, Ed, about $60 missing from the petty cash box. The receipt book shows that Ed took it on the third. Ed says, 'I took nothing. You're the one who never hands in receipts. I can't believe you would accuse me, after all I've done for this club.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "Nell asks the club treasurer, Ed, about $60 missing from the petty cash box. The receipt book shows that Ed took it on the third. Ed says, 'I took nothing. You're the one who never hands in receipts. I can't believe you would accuse me, after all I've done for this club.'" } },

  { id: 'books-unasked', use: 'teach', tier: 'varied', setting: 'community', topic: 'club petty cash, said unasked',
    text: "Nobody has asked the club treasurer, Ed, about the petty cash box. At the committee meeting he says, unprompted, 'Nell has been dipping into the box.' The receipt book shows that Ed took $60 on the third, and shows every one of Nell's receipts handed in on time.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Nobody has asked the club treasurer, Ed, about the petty cash box. At the committee meeting he says, unprompted, 'Nell has been dipping into the box.'", "The receipt book shows that Ed took $60 on the third, and shows every one of Nell's receipts handed in on time."] } },

  /* ---------- The tie-break: a case that shows both ---------- */
  { id: 'carshare', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a car-share fund', name: 'The car-share fund', also: ['ownfault'],
    text: "Beth keeps the sheet for a car-share fund that she and Gareth pay into. She asks Gareth why nothing has gone in from him since March. The sheet shows no payment from Gareth since March, and a payment from Beth every month. 'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: ['She asks Gareth why nothing has gone in from him since March.', "'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'"] },
    segments: [
      { text: 'Beth keeps the sheet for a car-share fund that she and Gareth pay into.', note: 'That sets the scene. It does not show what anyone says or does to the other.' },
      { text: 'She asks Gareth why nothing has gone in from him since March.' },
      { text: 'The sheet shows no payment from Gareth since March, and a payment from Beth every month.', note: 'That shows Gareth doing what he goes on to accuse Beth of, and Beth not doing it: the reason the case looks like {o:projection}. But it is also what shows that he did it, which {o:darvo} needs. So it cannot settle which of the two this is.' },
      { text: "'I paid,' Gareth says. 'You're the one who never pays into anything. You take advantage of everyone. I can't believe I'm being accused by you, after everything I've done for this car.'", note: 'That is what Gareth says back. It is the three parts of {o:darvo}, but it only counts as an answer if someone has first raised it with him, and that is the part you are asked for.' }
    ] },

  /* ---------- Love-bombing, or an ordinary exchange: the same flood, a new neighbor ---------- */
  { id: 'friend-flood', use: 'teach', tier: 'varied', setting: 'home', topic: 'a new neighbor, attention pulled back',
    text: "Dan has just moved in next door to Eli. In Dan's first week Eli invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had. When Dan says he cannot make Sunday lunch, Eli does not speak to him for a month, and then says, 'I thought you were different.'",
    outcome: 'lovebomb', route: { D1: ['tactic'], T1: ['floodpull'] },
    cues: { T1: ['invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had', "When Dan says he cannot make Sunday lunch, Eli does not speak to him for a month, and then says, 'I thought you were different.'"] } },

  { id: 'friend-keen', use: 'teach', tier: 'varied', setting: 'home', topic: 'a new neighbor, attention kept up',
    text: "Dan has just moved in next door to Eli. In Dan's first week Eli invites him to dinner every night, gives him a spare key, and tells people Dan is the best friend he has ever had. When Dan says he cannot make Sunday lunch, Eli says, 'No problem, another time,' and is just as friendly the next day.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "When Dan says he cannot make Sunday lunch, Eli says, 'No problem, another time,' and is just as friendly the next day." } },

  /* ---------- Gaslighting, or an ordinary exchange: who was booking the flights ---------- */
  { id: 'trip-months', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'booking flights, over months',
    text: "In March Bea wrote in the family chat: 'I'll book the flights for the August trip.' She never did. Since then, whenever her brother Anil asks, she says, 'I never said that,' and later, 'You always muddle who said what,' and later, 'This is what you do, you invent things.' It has gone on for four months. Anil now checks every plan with his mother before he believes his own memory of it.",
    outcome: 'gaslight', route: { D1: ['tactic'], T1: ['denymemory'] },
    cues: { T1: "whenever her brother Anil asks, she says, 'I never said that,' and later, 'You always muddle who said what,' and later, 'This is what you do, you invent things.' It has gone on for four months." } },

  { id: 'trip-once', use: 'teach', tier: 'varied', setting: 'leisure', topic: 'booking flights, one disagreement',
    text: "Anil says to his sister Bea, 'I thought you were booking the flights for the August trip.' Bea says, 'I remember it as you booking them. Let's look at the chat.' The chat shows that Anil said he would book them. 'Right,' Bea says. 'My mistake. Book them tonight and I'll send you my half.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Bea says, 'I remember it as you booking them. Let's look at the chat.' The chat shows that Anil said he would book them. 'Right,' Bea says. 'My mistake." } },

  /* ---------- Turning the blame around, or an ordinary exchange: a fence panel ---------- */
  { id: 'fence-guilty', use: 'teach', tier: 'varied', setting: 'home', topic: 'a broken fence, he did it',
    text: "A fence panel between two houses has been smashed. Mira's doorbell camera shows her neighbor Joel backing his van into it on Tuesday. When she raises it, Joel says, 'I never touched your fence. You're the one who parks across everyone's drive. I'm sick of being the one who gets blamed around here.'",
    outcome: 'darvo', route: { D1: ['tactic'], T1: ['reverse'] },
    cues: { T1: "Mira's doorbell camera shows her neighbor Joel backing his van into it on Tuesday. When she raises it, Joel says, 'I never touched your fence. You're the one who parks across everyone's drive. I'm sick of being the one who gets blamed around here.'" } },

  { id: 'fence-innocent', use: 'teach', tier: 'varied', setting: 'home', topic: 'a broken fence, he did not',
    text: "A fence panel between two houses has been smashed. Mira says to her neighbor Joel, 'I think you backed your van into my fence on Tuesday.' Her doorbell camera shows Joel's van parked outside his own house all that day. 'That's not true, and I don't like being blamed,' Joel says. 'Have a look at your camera.' Mira looks, and says, 'You're right. Sorry.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Her doorbell camera shows Joel's van parked outside his own house all that day. 'That's not true, and I don't like being blamed,' Joel says." } },

  /* ---------- Accusing someone of what you do, or an ordinary exchange: the shift book ---------- */
  { id: 'rota-accuse', use: 'teach', tier: 'varied', setting: 'work', topic: 'swapped shifts, a false accusation',
    text: "Colm tells the store manager, unprompted, that Shay 'is always swapping shifts without telling anyone'. The shift book shows that Colm has swapped four shifts without telling anyone this month, and shows no swap by Shay.",
    outcome: 'projection', route: { D1: ['tactic'], T1: ['ownfault'] },
    cues: { T1: ["Colm tells the store manager, unprompted, that Shay 'is always swapping shifts without telling anyone'", 'Colm has swapped four shifts without telling anyone this month, and shows no swap by Shay'] } },

  { id: 'rota-fair', use: 'teach', tier: 'varied', setting: 'work', topic: 'swapped shifts, a fair accusation',
    text: "Colm tells Shay, 'You swapped Thursday without telling anyone.' The shift book shows that Shay did. It also shows that Colm has done the same twice this month. Shay says, 'You're right, I forgot to tell Jo. You've done it too, so let's both put swaps on the board.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: "Colm tells Shay, 'You swapped Thursday without telling anyone.' The shift book shows that Shay did." } },

  /* ---------- The exceptions: a reply that looks like turning the blame around, and a fair accusation from someone who does it too ---------- */
  { id: 'cupboard', use: 'teach', tier: 'misleading', setting: 'learning', topic: 'an unlocked art closet', name: 'The art closet',
    text: "Tara's principal, Mr. Boyd, tells her the art closet was left unlocked on Friday and paints went missing. The closet log shows Tara locked it at noon, and that it was opened again at three by Neil, who has the other key. 'That isn't true, I locked it,' Tara says. 'You always blame me first. I'm the one who gets picked on around here.' Mr. Boyd reads the log, says, 'Sorry, I should have checked first,' and goes to ask Neil.",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: 'The closet log shows Tara locked it at noon, and that it was opened again at three by Neil, who has the other key.' },
    segments: [
      { text: "Tara's principal, Mr. Boyd, tells her the art closet was left unlocked on Friday and paints went missing.", note: 'That is what Mr. Boyd raises. It does not show whether Tara did it.' },
      { text: 'The closet log shows Tara locked it at noon, and that it was opened again at three by Neil, who has the other key.' },
      { text: "'That isn't true, I locked it,' Tara says. 'You always blame me first. I'm the one who gets picked on around here.'", note: 'That sounds like a denial, an attack and playing the one wronged, and it is why the case looks like {o:darvo}. But {o:darvo} is only given when the case shows the person did what they are asked about, and that is the part you are asked for.' },
      { text: "Mr. Boyd reads the log, says, 'Sorry, I should have checked first,' and goes to ask Neil.", note: 'That is how it ends. It confirms the log, but it is not the words that show Tara did not do it.' }
    ] },

  { id: 'dishes', use: 'teach', tier: 'misleading', setting: 'home', topic: 'doing the dishes, both at fault', name: 'The dishes',
    text: "Zoe tells her roommate Adam, 'You never do the dishes.' Zoe herself leaves plates in the sink for days. The chore chart on the fridge shows that Adam has not done the dishes for three weeks. Adam says, 'You're right, I haven't. But neither do you, so let's fix the chart.'",
    outcome: 'ordexchange', route: { D1: ['tactic'], T1: ['plain'] },
    cues: { T1: 'The chore chart on the fridge shows that Adam has not done the dishes for three weeks.' },
    segments: [
      { text: "Zoe tells her roommate Adam, 'You never do the dishes.'", note: 'That is the accusation. Both names can have one, so the words alone do not settle it.' },
      { text: 'Zoe herself leaves plates in the sink for days.', note: 'That shows Zoe doing what she accuses Adam of. It is why the case looks like {o:projection}. But it is only half of what that name needs.' },
      { text: 'The chore chart on the fridge shows that Adam has not done the dishes for three weeks.' },
      { text: "Adam says, 'You're right, I haven't. But neither do you, so let's fix the chart.'", note: 'That is how Adam answers. It confirms the chart, but it is not the words that show he does the thing too.' }
    ] }
]);
