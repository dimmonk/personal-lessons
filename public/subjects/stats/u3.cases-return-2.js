// Statistical Claims, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part two: a known list asked with many
// not replying, and everyone counted but only a handful. Two for each name. Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Non-response bias ---------- */
  { id: 'cr-nr-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a clinic questionnaire on waiting times',
    text: "A clinic mailed a questionnaire to all 1,500 of its patients about waiting times. 240 replied, and 180 said the waits were fine. The clinic says: 'Three in four of our patients say the waits are fine.' It did not follow up with the other 1,260.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['240 replied, and 180 said the waits were fine', 'Three in four of our patients say the waits are fine'], A1: ['mailed a questionnaire to all 1,500 of its patients', 'did not follow up with the other 1,260'] },
    reason: { S1: 'The clinic speaks for all its patients, but the figure comes from the 240 who replied: {cue:S1}.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. If none of the other 1,260 found the waits fine, the share for the clinic is 180 out of 1,500, which is 12 in every 100.' },
    not: { outcome: 'selfselect', why: 'Every patient was sent the questionnaire by name, so nobody chose themselves in. The trouble is that most did not send it back.' } },

  { id: 'cr-nr-2', use: 'return', tier: 'varied', setting: 'learning', topic: 'a district survey of parents on uniforms',
    text: "A school district mailed a survey to all 5,000 parents about uniforms. 650 replied, and 455 were in favor. The district says: 'Seven in ten parents want uniforms.' Nobody was reminded.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['650 replied, and 455 were in favor', 'Seven in ten parents want uniforms'], A1: ['mailed a survey to all 5,000 parents', 'Nobody was reminded'] },
    reason: { S1: 'The district speaks for all 5,000 parents, but the figure comes from the 650 who replied: {cue:S1}. That is 13 in every 100 of them.',
              A1: 'Everyone on the list was asked by name, and most did not answer: {cue:A1}. A parent with strong feelings about uniforms is likelier to reply, and the other 4,350 are not heard.' },
    not: { outcome: 'selfselect', why: 'Every parent was sent the survey by name, so nobody chose themselves in. What went wrong is that 4,350 of 5,000 did not reply and nobody followed up.' } },

  /* ---------- Too few to trust ---------- */
  { id: 'cr-sn-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a county with eighty children and one with asthma',
    text: "Tiny County has 80 children. One of them has asthma. A news site says: 'Tiny County has the cleanest air in the state: only 1 child in 80 has asthma, the lowest rate anywhere.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['only 1 child in 80 has asthma', 'Tiny County has the cleanest air in the state'], A1: 'Tiny County has 80 children' },
    reason: { S1: 'The site reads the lowest figure as showing the cleanest air, but the figure comes from 80 children: {cue:S1}.',
              A1: 'Every child is counted, but there are only a handful: {cue:A1}. One child more or fewer with asthma moves the figure by 1.25 points, and the smallest counties sit at both ends of any list.' },
    not: { outcome: 'samp_ok', why: 'One child more or fewer would barely move a bigger county’s figure. Here one child is more than a whole point, and the site reads the gap between “lowest” and “ordinary” as meaning something about the air.' } },

  { id: 'cr-sn-2', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a tennis champion against left-handers',
    text: "A tennis club's best player has played 5 sets against left-handers and won all 5. The club newsletter says: 'Our champion is unbeatable against left-handers.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['played 5 sets against left-handers and won all 5', 'unbeatable against left-handers'], A1: 'played 5 sets against left-handers and won all 5' },
    reason: { S1: 'The newsletter reads a perfect record as showing the player is unbeatable, but the figure comes from five sets: {cue:S1}.',
              A1: 'Every set against a left-hander is counted, but there are only five: {cue:A1}. One lost set would make it 4 of 5, which is 80 in every 100, and the word "unbeatable" would be gone.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and nobody failed to reply. Every set the player has played against a left-hander is in the figure, and the trouble is that there are only five.' } }
]);
