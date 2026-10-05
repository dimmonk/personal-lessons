// Statistical Claims, Unit Five: cases shown inside cards, part one: the word "false alarm" and the first name (a percentage with no counts).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case that sits in a card has a name. cues[STEP] is the exact phrase in the text that decides that step; segments are the tappable
// pieces for "tap the words" prompts, and note is shown if a piece is tapped in error.
// Every case here is a claim as someone might say it. People, firms and studies are invented.

FC.cases('stats', 'u5', [

  /* ---------- The case that carries the term "false alarm" (no name is asked of it) ---------- */
  { id: 'alarm-term', use: 'teach', tier: 'clean', setting: 'home', topic: 'a smoke alarm and toast', name: 'The toast alarm',
    text: "Priya's smoke alarm goes off every time she makes toast. Each time she opens a window, and each time there turns out to be no fire." },

  /* ---------- A percentage without the numbers ---------- */
  { id: 'rel-jog', use: 'teach', tier: 'clean', setting: 'health', topic: 'joggers and ankle injuries', name: 'The jogging headline',
    text: "A health website runs the headline 'Joggers are 40% more likely to hurt an ankle.' The article does not say how many joggers were hurt, how many people it looked at, or what the 40% is more than.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Joggers are 40% more likely to hurt an ankle' } },

  { id: 'rel-lift', use: 'teach', tier: 'clean', setting: 'work', topic: 'a lifting program leaflet', name: 'The lifting leaflet',
    text: "A company leaflet says: 'Our new lifting program cut back injuries by 75%.' The leaflet was printed at the end of the program's first year, and it gives no other figure.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Our new lifting program cut back injuries by 75%' },
    segments: [
      { text: 'A company leaflet says', note: 'That tells you who is speaking. It is not the figure.' },
      { text: 'Our new lifting program cut back injuries by 75%' },
      { text: "The leaflet was printed at the end of the program's first year", note: 'That tells you when it was printed. It does not give the figure.' },
      { text: 'it gives no other figure', note: 'That tells you what is missing, and it matters. The words asked for are the ones that give the percentage.' }
    ] },

  { id: 'rel-school', use: 'check', tier: 'clean', setting: 'learning', topic: 'a school newsletter on late arrivals', name: 'The late buses',
    text: "A school newsletter says: 'Since the new bus route began, late arrivals have fallen by 60%.' It does not say how many students were late before or after.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'late arrivals have fallen by 60%' },
    segments: [
      { text: 'A school newsletter says', note: 'That tells you who is speaking. It is not the figure.' },
      { text: 'Since the new bus route began, late arrivals have fallen by 60%' },
      { text: 'It does not say how many students were late before or after', note: 'That tells you what is missing. The words asked for are the ones that give the percentage.' }
    ],
    reason: { C1: 'The newsletter gives {cue:C1}: a share of how many arrivals were late before, with no word on how many that was or how many there are now. A fall of 60% is 5 late students falling to 2, or 500 falling to 200. The words do not let you tell which.' } },

  /* ---------- A percentage without the numbers, beside A fair comparison: same story, two answers ---------- */
  { id: 'la1-bus-pct', use: 'teach', tier: 'varied', setting: 'community', topic: 'late buses, a percentage only', name: 'The Line 12 percentage',
    text: "The city transit blog says: 'Riders on Line 12 are 50% more likely to arrive late than riders on Line 9.' The post gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Riders on Line 12 are 50% more likely to arrive late than riders on Line 9' } },

  { id: 'la1-bus-counts', use: 'teach', tier: 'varied', setting: 'community', topic: 'late buses, the counts given', name: 'The Line 12 counts',
    text: "The city transit blog says: 'Riders on Line 12 are more likely to arrive late than riders on Line 9.' In March, 15 of 300 trips arrived late on Line 12 and 10 of 300 trips on Line 9. Both lines are weekday commuter lines of the same length, and every trip was timed the same way.",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { H1: '15 of 300 trips arrived late on Line 12 and 10 of 300 trips on Line 9' } },

  /* ---------- A percentage without the numbers, beside Base rate fallacy: the same scanner ---------- */
  { id: 'la2-scan-pct', use: 'teach', tier: 'varied', setting: 'health', topic: 'a scanner and missed diagnoses', name: 'The scanner percentage',
    text: "A hospital newsletter says: 'Our new scanner cuts missed diagnoses by 60%.' It does not say how many diagnoses were missed before or after.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'Our new scanner cuts missed diagnoses by 60%' } },

  { id: 'la2-scan-acc', use: 'teach', tier: 'varied', setting: 'health', topic: "a scanner's accuracy", name: 'The scanner accuracy',
    text: "A hospital newsletter says: 'Our new scanner is 97% accurate, so if it says yes, you almost certainly have the disease.' The disease affects about 1 person in 500.",
    outcome: 'baserate', route: { S1: ['compare'], C1: ['common'] },
    cues: { C1: ['if it says yes, you almost certainly have the disease', 'about 1 person in 500'] } },

  /* ---------- The near-miss: a percentage that is built on a handful ---------- */
  { id: 'exc-shop', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a shop owner and a theft log', name: "The shop owner's 300%", also: ['compare'],
    text: "A shop owner posts: 'Shoplifting at my store is up 300% this month!' The store's own log shows one theft last month and four this month.",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: 'one theft last month and four this month', A1: 'one theft last month and four this month' },
    segments: [
      { text: 'A shop owner posts', note: 'That tells you who is speaking. It is not the figure.' },
      { text: 'Shoplifting at my store is up 300% this month!', note: 'That is the percentage, and it is the part that catches the eye. A percentage with no counts would be one thing. Here the counts are given in the next sentence, and they are what the case turns on.' },
      { text: 'one theft last month and four this month' }
    ] },

  /* ---------- The check on the key's question ---------- */
  { id: 'rel-streetlights', use: 'check', tier: 'clean', setting: 'community', topic: 'streetlights and break-ins', name: 'The Elm Street break-ins',
    text: "A town newsletter says: 'Since the new streetlights went up, night-time car break-ins on Elm Street have dropped by 80%.' It does not say how many break-ins there were before or after.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { C1: 'night-time car break-ins on Elm Street have dropped by 80%' },
    reason: { C1: 'The newsletter gives {cue:C1}: a share of how many break-ins there were before, and no count. A drop of 80% is 10 break-ins falling to 2, or 100 falling to 20. The words do not let you tell which.' } }
]);
