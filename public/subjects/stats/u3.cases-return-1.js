// Statistical Claims, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part one: the ones that lasted and the
// ones who chose to answer. Four for each name: one for each scheduled return (an action subject has a fourth, at about twelve weeks).
// A name that is due comes back as a case the learner has not seen, beside a case of the name they most often take it for.
// Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Survivorship bias ---------- */
  { id: 'cr-sv-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a wellness program and members who stayed five years',
    text: "A wellness company's ad says: 'People on our program take just 2 sick days a year.' The 2 is the average for the 75 members who are still on the program after five years. 600 people joined five years ago.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['the average for the 75 members who are still on the program after five years', 'People on our program take just 2 sick days a year'], A1: 'the 75 members who are still on the program after five years' },
    reason: { S1: 'The ad speaks for people on the program, but the figure comes from the 75 who stayed: {cue:S1}. 525 of the 600 who joined are not in it.',
              A1: 'The average is worked out after the fact from the ones still there: {cue:A1}. People who are often ill are the ones likeliest to have left.' },
    not: { outcome: 'selfselect', why: 'Nobody is in the figure by choosing to answer. They are in because they lasted five years. The ones who are missing left.' },
    wouldChange: 'If the average were worked out from all 600 who joined, and it was still 2 days, the first part would hold.' },

  { id: 'cr-sv-2', use: 'return', tier: 'varied', setting: 'money', topic: 'those who stayed on a rich list',
    also: ['cause'],
    text: "A magazine article says: 'The ten people who have stayed on the national rich list for twenty years all left school early, so school holds you back.' Thousands of others who left school early started businesses in those years and failed. They are not on the list.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: 'The ten people who have stayed on the national rich list for twenty years', A1: ['The ten people who have stayed on the national rich list for twenty years', 'Thousands of others who left school early started businesses in those years and failed'] },
    reason: { S1: 'The article says that leaving school early holds you back, which is a claim of cause, and the case shows no second group to compare. But the first part goes wrong before that: the figure comes from the people who stayed on the list, {cue:S1}.',
              A1: 'The ten are the ones who made it and stayed: {cue:A1}. The thousands who did the same and failed are missing from the figure, and they are the ones that would show whether leaving early helps or not.' },
    not: { outcome: 'selfselect', why: 'Nobody chose to answer. The list was made after the fact from the ones who stayed on top, and the ones who did the same and failed are not on it.' },
    wouldChange: 'If the article had counted everyone who left school early and started a business in those years, the ones who failed included, the first part would hold, and the claim of cause could then be put to the test.' },

  { id: 'cr-sv-3', use: 'return', tier: 'clean', setting: 'community', topic: 'a museum of the oldest buildings in a town',
    text: "A town museum displays the 30 oldest buildings in the town, all from the 1800s. Its sign says: 'Our town built better in the 1800s.' About 200 buildings went up in the town in that century, and 170 have since been pulled down or have fallen down.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['displays the 30 oldest buildings in the town', 'Our town built better in the 1800s'], A1: ['the 30 oldest buildings in the town', '170 have since been pulled down or have fallen down'] },
    reason: { S1: 'The sign speaks for everything the town built in the 1800s, but the figure comes from the buildings that are still there: {cue:S1}.',
              A1: 'What is shown is what is left: {cue:A1}. The 170 that did not last are missing, and the ones that fell down are the ones that were built worst.' },
    not: { outcome: 'samp_ok', why: '{o:samp_ok} would be a figure for every building that went up, the 170 that fell included. The museum shows 30 of the 200, and they are the 30 that lasted.' },
    wouldChange: 'If the museum had a record of all 200 buildings and how long each lasted, the first part would hold, and the sign could say what share of them were still standing.' },

  { id: 'cr-sv-4', use: 'return', tier: 'varied', setting: 'home', topic: 'a phone company and customers of five years',
    text: "A phone company says: 'Our customers are happy: 96 in every 100 of those who have been with us for five years rate us excellent.' The company signed up 40,000 people five years ago. The ratings come from the 10,000 who are still customers, and the 30,000 who left were not asked.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['The ratings come from the 10,000 who are still customers', 'Our customers are happy'], A1: ['The ratings come from the 10,000 who are still customers', 'the 30,000 who left were not asked'] },
    reason: { S1: 'The company speaks for its customers, but the figure comes from the ones who stayed: {cue:S1}. 30,000 of the 40,000 who signed up are not in it.',
              A1: 'The ratings are worked out after the fact from the ones still there: {cue:A1}. A customer who was unhappy is the likeliest to have left.' },
    not: { outcome: 'nonresp', why: 'Nobody who was asked failed to reply. The list that was asked is only the customers still there, and the ones who left were never on it.' },
    wouldChange: 'If the company had phoned the 30,000 who left and asked them too, the first part would hold, and the figure would be for everyone who signed up.' },

  /* ---------- Self-selection bias ---------- */
  { id: 'cr-ss-1', use: 'return', tier: 'clean', setting: 'community', topic: 'a television text vote on fireworks',
    text: "A local TV station asked its viewers to text YES or NO to a question: 'Should the city ban fireworks?' Anyone watching could text. 5,100 did, and 4,000 said yes. The anchor says: 'The city wants fireworks banned.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['5,100 did', 'The city wants fireworks banned'], A1: 'Anyone watching could text' },
    reason: { S1: 'The anchor speaks for the whole city, but the figure comes from 5,100 viewers who texted: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The viewers who texted chose to, and a viewer who is cross about fireworks is likelier to pick up a phone.' },
    not: { outcome: 'nonresp', why: 'Nobody was sent the question by name. It was put to whoever was watching, so there is no list of people who were asked and did not reply.' },
    wouldChange: 'If the station had phoned 600 numbers drawn by lottery from the phone book and heard from nearly all of them, the first part would hold.' },

  { id: 'cr-ss-2', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a gaming site and its game of the year vote',
    text: "A gaming website ran a reader vote for its 'Game of the Year'. Anyone who visited the site could vote, and 12,000 people did: 9,000 voted for Planet Quest. The site's headline reads: 'Gamers pick Planet Quest.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['12,000 people did', 'Gamers pick Planet Quest'], A1: 'Anyone who visited the site could vote' },
    reason: { S1: 'The headline speaks for gamers in general, but the figure comes from 12,000 visitors to one site who voted: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The ones who voted chose to, and the fans of one game are the likeliest to turn out for it.' },
    not: { outcome: 'survivor', why: 'Nobody is in the figure by lasting to the end. They are in because they chose to vote, and nobody who did not vote was counted.' },
    wouldChange: 'If the site had asked 1,000 gamers picked by lottery from a full list of players, and nearly all had answered, the first part would hold.' },

  { id: 'cr-ss-3', use: 'return', tier: 'clean', setting: 'health', topic: 'a health blog poll on sleep',
    text: "A health blog posted a reader poll: 'Do you sleep well?' Anyone who visited the blog could answer. 2,300 readers answered, and 400 said yes. The blog says: 'Most people sleep badly: only 17 in every 100 sleep well.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['2,300 readers answered', 'Most people sleep badly'], A1: 'Anyone who visited the blog could answer' },
    reason: { S1: 'The blog speaks for most people, but the figure comes from 2,300 readers of one health blog who answered: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. A person who reads a blog about health and sleep is likelier to sleep badly, and the ones who answered chose to.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked by name. The poll sat on a blog for anyone to see, so there is no list of people who were asked and did not reply.' },
    wouldChange: 'If the blog had asked 1,000 people picked by lottery from a full list, with nearly all of them answering, the first part would hold.' },

  { id: 'cr-ss-4', use: 'return', tier: 'varied', setting: 'work', topic: 'an idea box in a break room',
    text: "A company put an idea box in the break room. Staff could drop in a card if they wished. 21 cards came in, and 18 asked for a gym. The manager says: 'Our staff want a gym: 6 in every 7.' The company has 1,400 staff.",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['21 cards came in', 'Our staff want a gym'], A1: 'Staff could drop in a card if they wished' },
    reason: { S1: 'The manager speaks for all 1,400 staff, but the figure comes from 21 cards: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The staff who dropped in a card chose to, and a person who wants a gym is likelier to write one.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked by name. The box sat in the break room for anyone to use, so there is no list of staff who were asked and did not reply.' },
    wouldChange: 'If the manager had asked a hundred staff picked by lottery from the payroll, and nearly all had answered, the first part would hold.' }
]);
