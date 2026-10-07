// Civics, Unit Three: cases shown inside cards (the word on the treaty card, the first two names and their pair).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.
// Every case here has the first question's answer, Congress (route D1), and one answer to the branch question (C1).
// All bills, people and places are invented.

FC.cases('civics', 'u3', [
  { id: 'x-pact', use: 'teach', tier: 'clean', setting: 'world', topic: 'sharing the water of a river', name: 'The river agreement',
    text: "The United States and the country to its north both draw water from the same river. After two years of talks, the two governments wrote down in one formal document how much water each country may take in a dry summer, and what each will do if the river runs low. The President signed it for the United States, and the other country’s leader signed it for theirs." },

  { id: 'e-airfare', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a tax on airline tickets', name: 'The airline-ticket tax',
    text: "Airports across the country need repairs, and the people who fly are a fair group to pay for them. The House passed a bill that puts a new tax of ten dollars on every airline ticket, and on Wednesday the Senate passed it too.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that puts a new tax of ten dollars on every airline ticket' } },

  { id: 'k-courts', use: 'check', tier: 'clean', setting: 'community', topic: 'more judges for a busy federal court', name: 'The busy court',
    text: "The federal court in one of the busiest regions has far more court cases than its judges can hear. The House and the Senate passed a bill that adds four judges to that court. The bill now waits for the President’s signature.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that adds four judges to that court' },
    segments: [
      { text: 'The federal court in one of the busiest regions has far more court cases than its judges can hear', note: 'That is why the bill exists, not what Congress did.' },
      { text: 'The House and the Senate passed a bill that adds four judges to that court' },
      { text: 'The bill now waits for the President’s signature', note: 'That is what happens to the law next, not what Congress did.' }
    ],
    reason: { C1: 'Adding judges to a federal court is on the Constitution’s list, and the law takes no right away.' } },

  { id: 'b-reading', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a list of books for every school', name: 'The book list',
    text: "Many parents say that students across the country read too little. The House and the Senate passed a bill that tells every school in every state which ten books its students must read in ninth grade.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that tells every school in every state which ten books its students must read in ninth grade' } },

  { id: 'k-march', use: 'check', tier: 'clean', setting: 'community', topic: 'a peaceful march', name: 'The banned march',
    text: "Seven hundred people had planned a peaceful march past the federal courthouse in their city. The House and the Senate have now passed a bill that bans every march on a street next to a federal building, even a peaceful one.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that bans every march on a street next to a federal building, even a peaceful one' },
    reason: { C1: 'The law is {cue:C1}, and a peaceful march is gathering, a right the Constitution protects.' },
    not: { outcome: 'enumerated', why: 'Every law passes the House and the Senate, so the vote settles nothing. This law bans peaceful marches, and gathering peacefully is a protected right.' } },

  { id: 'l-mail-rates', use: 'teach', tier: 'clean', setting: 'community', topic: 'the price of posting a parcel',
    name: 'The parcel price',
    text: "Rural towns say it costs too much to send a parcel by post. The House and the Senate passed a bill that sets one low price for any parcel under five pounds sent through the post office.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that sets one low price for any parcel under five pounds sent through the post office' } },

  { id: 'l-mail-ban', use: 'teach', tier: 'clean', setting: 'community', topic: 'a magazine barred from the post',
    name: 'The barred magazine',
    text: "Some lawmakers dislike a magazine that prints articles against the Senate. The House and the Senate passed a bill that says the post office may not carry any magazine that prints articles against the Senate.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { C1: 'a bill that says the post office may not carry any magazine that prints articles against the Senate' } }
]);
