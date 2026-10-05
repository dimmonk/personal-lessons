// Statistical Claims, Unit Three: cases shown inside cards, part two (the ones who chose to answer, the exception with volunteers
// split by lottery, and the first whole claim). Field guide: see u3.cases-teach-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Self-selection bias ---------- */
  { id: 'cn-fourday', use: 'teach', tier: 'clean', setting: 'work', topic: 'a magazine poll on a shorter work week', name: 'The four-day-week poll',
    text: "A trade magazine put a one-click poll on its website: 'Would you like a four-day work week?' 3,200 readers clicked, and 2,560 of them said yes. The headline read: 'Four in five workers want a four-day week.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['3,200 readers clicked', 'Four in five workers want a four-day week'], A1: 'put a one-click poll on its website' } },

  { id: 'cn-forms', use: 'teach', tier: 'clean', setting: 'health', topic: 'tear-off forms in a hospital waiting room', name: 'The waiting-room forms',
    text: "A hospital left tear-off forms in its waiting rooms asking 'How satisfied are you with your care?', and patients could hand one in if they wished. 120 forms were handed in, and 108 said 'very satisfied'. The hospital's report says: 'Nine in ten of our patients are very satisfied.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['120 forms were handed in', 'Nine in ten of our patients are very satisfied'], A1: 'patients could hand one in if they wished' },
    segments: [
      { text: "A hospital left tear-off forms in its waiting rooms asking 'How satisfied are you with your care?'", note: 'That says what was asked and where the forms were. It does not say how the people who answered came to answer.' },
      { text: 'patients could hand one in if they wished' },
      { text: "120 forms were handed in, and 108 said 'very satisfied'", note: 'That is the figure. What you are asked for is how the people in it got in.' },
      { text: 'Nine in ten of our patients are very satisfied', note: 'That is the claim. It speaks for all the patients, and the words to tap are the ones before the figure.' }
    ] },

  { id: 'cn-fair', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a ballot box at a town festival', name: 'The fair’s ballot box',
    text: "At a town fair, a stall set out a ballot box labeled 'Should the fair move to June?' Anyone who walked past could drop in a slip. Of the 214 slips, 190 said yes. The stall's sign says: 'The town wants the fair in June.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['Of the 214 slips, 190 said yes', 'The town wants the fair in June'], A1: 'Anyone who walked past could drop in a slip' },
    reason: { S1: 'The sign speaks for "the town", but the figure is 214 slips: {cue:S1}. The slips are from the people who walked past and chose to drop one in.',
              A1: 'Nobody was asked by name: {cue:A1}. The ones who dropped a slip in chose to. A person who feels strongly about the date of the fair is likelier to stop than one who does not mind, and nobody counted the ones who walked on.' } },

  { id: 'cn-homework-link', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a homework survey with a link in a newsletter', name: 'The homework survey, the link',
    text: "A school put a link to a survey in its newsletter and on its website: 'Is there too much homework?' Anyone who saw the link could answer. 240 people did, and 204 said yes. The principal says: 'Parents say there is too much homework: 85 in every 100.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['240 people did, and 204 said yes', 'Parents say there is too much homework'], A1: 'Anyone who saw the link could answer' } },

  /* ---------- The exception: volunteers split by lottery ---------- */
  { id: 'cn-pillow', use: 'teach', tier: 'varied', setting: 'health', topic: 'sleep volunteers split by lottery', name: 'The sleep lab’s pillow',
    text: "A sleep lab asked for volunteers through a newspaper ad, and 600 people came forward. The lab drew names by lottery: 300 were given a new pillow, and 300 kept their own. After a month, the people with the new pillow slept 25 minutes longer a night on average. The lab says: 'The new pillow adds 25 minutes of sleep.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'The lab drew names by lottery', H1: 'The new pillow adds 25 minutes of sleep' },
    segments: [
      { text: 'A sleep lab asked for volunteers through a newspaper ad, and 600 people came forward', note: 'This is what makes the case look like a poll anyone could answer. It says how the people came to the study. The words to tap are the ones that say how they were put into groups.' },
      { text: 'The lab drew names by lottery: 300 were given a new pillow, and 300 kept their own' },
      { text: 'the people with the new pillow slept 25 minutes longer a night on average', note: 'That is the result. It says how big the difference was, and not how the two groups were formed.' },
      { text: 'The new pillow adds 25 minutes of sleep', note: 'That is the claim. It says what caused the difference, and the words to tap are the ones that say how the groups were formed.' }
    ],
    not: { outcome: 'selfselect', why: 'The people in the study did choose to take part, which would fit {o:selfselect}. But nobody reads their answers as standing for people who did not take part. The claim is about the difference between two groups that a lottery formed from the same volunteers.' } },

  /* ---------- The first whole claim (clean) ---------- */
  { id: 'cn-school-start', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a poll on a later school start on a parents page', name: 'The school-start poll',
    text: "A parents' group on social media has 2,000 members. Its chair posted a poll in the group: 'Should school start at 9:00 instead of 8:00?' Anyone in the group could vote, and 410 did. 300 voted yes. The chair told the school board: 'Parents want a 9:00 start, nearly 3 in 4.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['Anyone in the group could vote, and 410 did', 'Parents want a 9:00 start, nearly 3 in 4'], A1: 'Anyone in the group could vote' } }
]);
