// Statistical Claims, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part two: a known list asked with many
// not replying, and everyone counted but only a handful. Four for each name. Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Non-response bias ---------- */
  { id: 'cr-nr-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a clinic questionnaire on waiting times',
    text: "A clinic mailed a questionnaire to all 1,500 of its patients about waiting times. 240 replied, and 180 said the waits were fine. The clinic says: 'Three in four of our patients say the waits are fine.' It did not follow up with the other 1,260.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['240 replied, and 180 said the waits were fine', 'Three in four of our patients say the waits are fine'], A1: ['mailed a questionnaire to all 1,500 of its patients', 'did not follow up with the other 1,260'] },
    reason: { S1: 'The clinic speaks for all its patients, but the figure comes from the 240 who replied: {cue:S1}.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. If none of the other 1,260 found the waits fine, the share for the clinic is 180 out of 1,500, which is 12 in every 100.' },
    not: { outcome: 'selfselect', why: 'Every patient was sent the questionnaire by name, so nobody chose themselves in. The trouble is that most did not send it back.' },
    wouldChange: 'If the clinic had phoned the patients who had not replied until 1,300 of the 1,500 had answered, the first part would hold.' },

  { id: 'cr-nr-2', use: 'return', tier: 'varied', setting: 'learning', topic: 'a district survey of parents on uniforms',
    text: "A school district mailed a survey to all 5,000 parents about uniforms. 650 replied, and 455 were in favor. The district says: 'Seven in ten parents want uniforms.' Nobody was reminded.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['650 replied, and 455 were in favor', 'Seven in ten parents want uniforms'], A1: ['mailed a survey to all 5,000 parents', 'Nobody was reminded'] },
    reason: { S1: 'The district speaks for all 5,000 parents, but the figure comes from the 650 who replied: {cue:S1}. That is 13 in every 100 of them.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. A parent with strong feelings about uniforms is likelier to reply, and the other 4,350 are not heard.' },
    not: { outcome: 'selfselect', why: 'Every parent was sent the survey by name, so nobody chose themselves in. What went wrong is that 4,350 of 5,000 did not reply and nobody followed up.' },
    wouldChange: 'If the district had reminded and phoned the parents who had not replied until 4,000 of the 5,000 had answered, the first part would hold.' },

  { id: 'cr-nr-3', use: 'return', tier: 'clean', setting: 'money', topic: 'a credit card company and a rewards plan',
    text: "A credit card company emailed all 20,000 of its customers about a new rewards plan. 600 replied, and 510 liked it. The company says: 'More than eight in ten customers like the new rewards plan.' It did not contact the other 19,400.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['600 replied, and 510 liked it', 'More than eight in ten customers like the new rewards plan'], A1: ['emailed all 20,000 of its customers', 'did not contact the other 19,400'] },
    reason: { S1: 'The company speaks for all its customers, but the figure comes from the 600 who replied: {cue:S1}. That is 3 in every 100 of them.',
              A1: 'Everyone on the list was asked by name, and nearly everyone stayed silent: {cue:A1}. A customer who likes the plan is likelier to take the trouble to say so.' },
    not: { outcome: 'smalln', why: '600 replies is a lot of people, and the 600 are a small share of a list of 20,000. The trouble is not how few are in the figure but how many on the list are missing from it.' },
    wouldChange: 'If the company had followed up until 15,000 of the 20,000 had answered, the first part would hold.' },

  { id: 'cr-nr-4', use: 'return', tier: 'varied', setting: 'work', topic: 'a parks department and seasonal workers',
    text: "A city parks department mailed a survey to all 300 of its seasonal workers. 45 replied, and 36 said they would return next year. The department says: 'Four in five seasonal workers will return next year.' It did not follow up with the others.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['45 replied, and 36 said they would return next year', 'Four in five seasonal workers will return next year'], A1: ['mailed a survey to all 300 of its seasonal workers', 'did not follow up with the others'] },
    reason: { S1: 'The department speaks for all 300 seasonal workers, but the figure comes from the 45 who replied: {cue:S1}.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. 45 of 300 is 15 in every 100. A worker who likes the job is likelier to reply, and the ones who have already decided to leave are the likeliest to stay silent.' },
    not: { outcome: 'smalln', why: '45 replies looks like a handful. But the 45 are 45 of a list of 300, and 255 are missing. A handful is everyone there is.' },
    wouldChange: 'If the department had phoned the workers who had not replied until 270 of the 300 had answered, the first part would hold.' },

  /* ---------- Too few to trust ---------- */
  { id: 'cr-sn-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a county with eighty children and one with asthma',
    text: "Tiny County has 80 children. One of them has asthma. A news site says: 'Tiny County has the cleanest air in the state: only 1 child in 80 has asthma, the lowest rate anywhere.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['only 1 child in 80 has asthma', 'Tiny County has the cleanest air in the state'], A1: 'Tiny County has 80 children' },
    reason: { S1: 'The site reads the lowest figure as showing the cleanest air, but the figure comes from 80 children: {cue:S1}.',
              A1: 'Every child is counted, but there are only a handful: {cue:A1}. One child more or fewer with asthma moves the figure by 1.25 points, and the smallest counties sit at both ends of any list.' },
    not: { outcome: 'samp_ok', why: 'A fair figure would be one that one or two more or fewer would barely move. Here one child is more than a whole point, and the site reads the gap between "lowest" and "ordinary" as meaning something about the air.' },
    wouldChange: 'If the site gave the figure for twenty years of children in Tiny County, there would be enough in the figure for it to mean something.' },

  { id: 'cr-sn-2', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a tennis champion against left-handers',
    text: "A tennis club's best player has played 5 sets against left-handers and won all 5. The club newsletter says: 'Our champion is unbeatable against left-handers.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['played 5 sets against left-handers and won all 5', 'unbeatable against left-handers'], A1: 'played 5 sets against left-handers and won all 5' },
    reason: { S1: 'The newsletter reads a perfect record as showing the player is unbeatable, but the figure comes from five sets: {cue:S1}.',
              A1: 'Every set against a left-hander is counted, but there are only five: {cue:A1}. One lost set would make it 4 of 5, which is 80 in every 100, and the word "unbeatable" would be gone.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and nobody failed to reply. Every set the player has played against a left-hander is in the figure, and the trouble is that there are only five.' },
    wouldChange: 'If the newsletter gave a record of 90 wins in 100 sets against left-handers over six seasons, there would be enough in the figure for it to mean something.' },

  { id: 'cr-sn-3', use: 'return', tier: 'clean', setting: 'learning', topic: 'a private tutor and six students',
    text: "A private tutor has taught 6 students this year, and all 6 improved by a grade. Her website says: 'Every student I teach improves: 6 for 6.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['taught 6 students this year, and all 6 improved by a grade', 'Every student I teach improves'], A1: 'taught 6 students this year, and all 6 improved by a grade' },
    reason: { S1: 'The website reads a perfect record as a promise about every student she will teach, but the figure comes from six students: {cue:S1}.',
              A1: 'Every student she has taught this year is counted, but there are only six: {cue:A1}. One student who did not improve would make it 5 of 6, which is 83 in every 100.' },
    not: { outcome: 'samp_ok', why: 'A fair figure would be one that one or two more or fewer would barely move. With six students, one is more than 16 points, and the website reads a perfect record from six as a promise.' },
    wouldChange: 'If the website gave a figure for 600 students over ten years, there would be enough in the figure for it to mean something.' },

  { id: 'cr-sn-4', use: 'return', tier: 'varied', setting: 'work', topic: 'a barista and her first six drinks',
    text: "A coffee shop's new barista made 6 drinks in her first hour and none was sent back. Her manager says: 'Ana never makes a mistake.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['made 6 drinks in her first hour and none was sent back', 'Ana never makes a mistake'], A1: 'made 6 drinks in her first hour and none was sent back' },
    reason: { S1: 'The manager reads a clean first hour as a promise for good, but the figure comes from six drinks: {cue:S1}.',
              A1: 'Every drink she has made is counted, but there are only six: {cue:A1}. Even a barista who spoils 1 drink in 20 would make 6 in a row without a mistake more often than not: 95 in every 100, six times over, is about 74 in every 100 first hours.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and nobody failed to reply. Every drink she has made is in the figure, and the trouble is that there are only six.' },
    wouldChange: 'If the manager said that in 2,000 drinks over three months, 40 had been sent back, there would be enough in the figure for it to mean something.' }
]);
