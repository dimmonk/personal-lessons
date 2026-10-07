// Statistical Claims, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part one: the ones that lasted and the
// ones who chose to answer. Two for each name (an action subject).
// A name that is due comes back as a case the learner has not seen, beside a case of the name they most often take it for.
// Field guide: see u3.cases-drill-1.js.

FC.cases('stats', 'u3', [

  /* ---------- Survivorship bias ---------- */
  { id: 'cr-sv-1', use: 'return', tier: 'clean', setting: 'health', topic: 'a wellness program and members who stayed five years',
    text: "A wellness company's ad says: 'People on our program take just 2 sick days a year.' The 2 is the average for the 75 members who are still on the program after five years. 600 people joined five years ago.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['the average for the 75 members who are still on the program after five years', 'People on our program take just 2 sick days a year'], A1: 'the 75 members who are still on the program after five years' },
    reason: { S1: 'The ad speaks for people on the program, but the figure comes from the 75 who stayed: {cue:S1}. 525 of the 600 who joined are not in it.',
              A1: 'The average is taken at the end from the ones still there: {cue:A1}. People who are often ill are the ones likeliest to have left.' },
    not: { outcome: 'selfselect', why: 'Nobody is in the figure by choosing to answer. They are in because they lasted five years, and the ones who left are missing.' } },

  { id: 'cr-sv-4', use: 'return', tier: 'varied', setting: 'home', topic: 'a phone company and customers of five years',
    text: "A phone company says: 'Our customers are happy: 96 in every 100 of those who have been with us for five years rate us excellent.' The company signed up 40,000 people five years ago. The ratings come from the 10,000 who are still customers, and the 30,000 who left were not asked.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['The ratings come from the 10,000 who are still customers', 'Our customers are happy'], A1: ['The ratings come from the 10,000 who are still customers', 'the 30,000 who left were not asked'] },
    reason: { S1: 'The company speaks for its customers, but the figure comes from the ones who stayed: {cue:S1}. 30,000 of the 40,000 who signed up are not in it.',
              A1: 'The ratings are taken at the end from the ones still there: {cue:A1}. A customer who was unhappy is the likeliest to have left.' },
    not: { outcome: 'nonresp', why: 'Nobody who was asked failed to reply. The list that was asked is only the customers still there, and the ones who left were never on it.' } },

  /* ---------- Self-selection bias ---------- */
  { id: 'cr-ss-1', use: 'return', tier: 'clean', setting: 'community', topic: 'a television text vote on fireworks',
    text: "A local TV station asked its viewers to text YES or NO to a question: 'Should the city ban fireworks?' Anyone watching could text. 5,100 did, and 4,000 said yes. The anchor says: 'The city wants fireworks banned.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['5,100 did', 'The city wants fireworks banned'], A1: 'Anyone watching could text' },
    reason: { S1: 'The anchor speaks for the whole city, but the figure comes from 5,100 viewers who texted: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The viewers who texted chose to, and a viewer who is cross about fireworks is likelier to pick up a phone.' },
    not: { outcome: 'nonresp', why: 'Nobody was sent the question by name. It was put to whoever was watching, so there is no list of people who were asked and did not reply.' } },

  { id: 'cr-ss-2', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a gaming site and its game of the year vote',
    text: "A gaming website ran a reader vote for its 'Game of the Year'. Anyone who visited the site could vote, and 12,000 people did: 9,000 voted for Planet Quest. The site's headline reads: 'Gamers pick Planet Quest.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['12,000 people did', 'Gamers pick Planet Quest'], A1: 'Anyone who visited the site could vote' },
    reason: { S1: 'The headline speaks for gamers in general, but the figure comes from 12,000 visitors to one site who voted: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The ones who voted chose to, and the fans of one game are the likeliest to turn out for it.' },
    not: { outcome: 'survivor', why: 'Nobody is in the figure by lasting to the end. They are in because they chose to vote, and nobody who did not vote was counted.' } }
]);
