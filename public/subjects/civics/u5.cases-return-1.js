// Civics, Unit Five: fresh cases kept back for later days (first file: the first two names, two cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. Two cases for each name: one for each scheduled return (E9).

FC.cases('civics', 'u5', [

  /* ---------- Judicial review ---------- */
  { id: 'ret-review-1', use: 'return', tier: 'varied', setting: 'travel', topic: 'leaflets at a bus station',
    text: 'A state law bans anyone from handing out leaflets at a bus station. Bram was fined $90 for giving out leaflets about a hostel. He asked a judge to cancel the fine, telling the judge that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He asked a judge to cancel the fine', J1: 'telling the judge that the law takes away his right to speak' },
    reason: { D1: 'The law and the fine came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Bram was fined, and he says the law itself takes away a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'He does not only say a different rule would be better. He says the law takes away a right.' } },

  { id: 'ret-review-2', use: 'return', tier: 'varied', setting: 'immigration', topic: 'a welcome evening in a park after dark',
    text: 'A county law bans any group of more than five people from meeting in a park after dark. A group of neighbors who held a welcome evening for newly arrived families was fined $100. Their organizer, Zeynep, asked a judge to cancel the fine, saying the law takes away the right to gather peacefully.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'asked a judge to cancel the fine', J1: 'saying the law takes away the right to gather peacefully' },
    reason: { D1: 'The law and the fine came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'The group was fined, and Zeynep says the law takes away a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'Zeynep does not ask whether a welcome evening counts as a meeting under the law. She says the law is not allowed.' } },

  /* ---------- Interpreting a law ---------- */
  { id: 'ret-interpret-1', use: 'return', tier: 'varied', setting: 'money', topic: 'a market license and a table of vegetables',
    text: 'A city law says that every market must have a license from the city. Neighbors on Ash Lane sell home-grown vegetables from a table at the end of their drive every Saturday, and the city fined them. They do not say the law is wrong. They asked a judge to decide whether a table at the end of a drive is a market under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'They asked a judge to decide', J1: 'whether a table at the end of a drive is a market under the law' },
    reason: { D1: 'The law and the fine came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'The neighbors accept the law and ask how far one word reaches: {cue:J1}.' },
    not: { outcome: 'review', why: 'They do not say the law takes away a right. They ask whether the word “market” covers their table.' } },

  { id: 'ret-interpret-2', use: 'return', tier: 'varied', setting: 'health', topic: 'an inspection law and toddlers at home',
    text: 'A state law says that every nursery must be inspected each year. Rowan looks after four neighbors’ toddlers in her home for pay, and the state fined her for having no inspection. She does not say the law is wrong. She has asked a judge to decide whether a home with four toddlers in it is a nursery under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'She has asked a judge to decide', J1: 'whether a home with four toddlers in it is a nursery under the law' },
    reason: { D1: 'The law and the fine came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Rowan accepts the law and asks how far one word reaches: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'There is a law, and the judge can answer from its words. Rowan is not asking for a better rule.' } },
]);
