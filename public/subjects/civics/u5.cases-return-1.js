// Civics, Unit Five: fresh cases kept back for later days (first file: the first two names, three cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries
// marked words and a reason for both questions. Three cases for each name: one for each scheduled return (E9).

FC.cases('civics', 'u5', [

  /* ---------- Judicial review ---------- */
  { id: 'ret-review-1', use: 'return', tier: 'varied', setting: 'travel', topic: 'leaflets at a bus station',
    text: 'A state law bans anyone from handing out leaflets at a bus station. Bram was fined $90 for giving out leaflets about a hostel. He asked a judge to cancel the fine, telling the judge that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He asked a judge to cancel the fine', J1: 'telling the judge that the law takes away his right to speak' },
    reason: { D1: 'The state made its law and fined Bram, and those came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Bram was fined, so he was harmed, and he says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'He does not only say a different rule would be better. He says the law takes away a right.' } },

  { id: 'ret-review-2', use: 'return', tier: 'varied', setting: 'immigration', topic: 'a welcome evening in a park after dark',
    text: 'A county law bans any group of more than five people from meeting in a park after dark. A group of neighbours who held a welcome evening for newly arrived families was fined $100. Their organiser, Zeynep, asked a judge to cancel the fine, saying the law takes away the right to gather peacefully.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'asked a judge to cancel the fine', J1: 'saying the law takes away the right to gather peacefully' },
    reason: { D1: 'The county made its law and fined the group. The story ends with a request to a judge: {cue:D1}.',
              J1: 'The group was fined, so the law has harmed them, and Zeynep says it clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'Zeynep does not ask whether a welcome evening is the kind of meeting the law covers. She says the law is not allowed.' } },

  { id: 'ret-review-3', use: 'return', tier: 'varied', setting: 'learning', topic: 'an opinion piece in a school paper',
    text: 'A state law says that no school newspaper may print an opinion piece about a decision of the school board. The paper’s adviser, Mr Alt, was fined $300 for letting one run. He asked a judge to cancel the fine, saying the law takes away the freedom to publish.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'He asked a judge to cancel the fine', J1: 'saying the law takes away the freedom to publish' },
    reason: { D1: 'The state made its law and fined Mr Alt. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Mr Alt was fined, so he was harmed, and he says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'He does not ask whether an opinion piece is the kind of article the law covers. He says the law is not allowed.' } },

  /* ---------- Interpreting a law ---------- */
  { id: 'ret-interpret-1', use: 'return', tier: 'varied', setting: 'money', topic: 'a market licence and a table of vegetables',
    text: 'A city law says that every market must have a licence from the city. Neighbours on Ash Lane sell home-grown vegetables from a table at the end of their drive every Saturday, and the city fined them. They do not say the law is wrong. They asked a judge to decide whether a table at the end of a drive is a market under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'They asked a judge to decide', J1: 'whether a table at the end of a drive is a market under the law' },
    reason: { D1: 'The city made its law and fined the neighbours. The story ends with a request to a judge: {cue:D1}.',
              J1: 'The neighbours accept the law, and the question is how far a word reaches: {cue:J1}.' },
    not: { outcome: 'review', why: 'They do not say the law takes away a right. They ask whether the word "market" covers their table.' } },

  { id: 'ret-interpret-2', use: 'return', tier: 'varied', setting: 'health', topic: 'an inspection law and toddlers at home',
    text: 'A state law says that every nursery must be inspected each year. Rowan looks after four neighbours’ toddlers in her home for pay, and the state fined her for having no inspection. She does not say the law is wrong. She has asked a judge to decide whether a home with four toddlers in it is a nursery under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'She has asked a judge to decide', J1: 'whether a home with four toddlers in it is a nursery under the law' },
    reason: { D1: 'The state made its law and fined Rowan. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Rowan accepts the law and asks how far a word reaches: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'There is a law, and the judge can answer from its words. Rowan is not asking the judge to choose a better rule.' } },

  { id: 'ret-interpret-3', use: 'return', tier: 'varied', setting: 'travel', topic: 'overnight parking and a camper van',
    text: 'A city law says that no truck may park overnight on residential streets. Dev parked his camper van, built on a truck chassis, on Mill Street and was fined. He grumbles that the rule is silly, but he has asked a judge only to decide whether a camper van is a truck under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'he has asked a judge only to decide', J1: 'whether a camper van is a truck under the law' },
    reason: { D1: 'The city made its law and fined Dev. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Grumbling that the rule is silly is a view about a better rule. What Dev puts to the judge is {cue:J1}, which is how far a word reaches.' },
    not: { outcome: 'notlegal', why: 'The grumble is about a better rule, but the judge is not asked to choose one. There is a law, and the question is what its word covers.' } }
]);
