// Civics, Unit Three: fresh cases held back for later days (first file: the first three names, three cases each).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked
// words and a reason for both questions. Three cases for each name: one for each scheduled return (E9).
// A due name comes back beside a case of the name they most often take it for. All bills, people and places are invented.

FC.cases('civics', 'u3', [

  /* ---------- Enumerated power ---------- */
  { id: 'ret-tea', use: 'return', tier: 'varied', setting: 'money', topic: 'a tax on imported tea',
    text: "Tea shops complain that the tax on imported tea makes it too dear. The House passed a bill in the spring that lowers the tax on imported tea by a quarter, and on Thursday the Senate voted for the same bill.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'on Thursday the Senate voted for the same bill', C1: 'lowers the tax on imported tea by a quarter' },
    reason: { D1: 'The last decision is a vote in the Senate: {cue:D1}. The tea shops’ complaint is the reason for the bill.',
              C1: 'The law {cue:C1}. A tax on goods from other countries is on the Constitution’s list, and the law takes no right away.' },
    not: { outcome: 'purse', why: 'A tax is about money, which can sound like a decision about spending. But the bill sets a tax, a law on a listed matter, and decides nothing about what the government may spend.' } },

  { id: 'ret-recruits', use: 'return', tier: 'clean', setting: 'community', topic: 'the age for joining the army',
    text: "Young people say they must be nineteen to join the army, but many want to start at eighteen. The House and the Senate passed a bill that lowers the age for joining the army to eighteen.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'lowers the age for joining the army to eighteen' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law {cue:C1}. War and the armed forces are on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'beyondcong', why: 'A law about who may join can sound like a matter of personal freedom. But the armed forces are on the Constitution’s list, and the law takes no right away.' } },

  { id: 'ret-nickel', use: 'return', tier: 'misleading', setting: 'leisure', topic: 'a heavier small coin',
    text: "Coin collectors say the five-cent coin is too light to feel. The President said on Monday that she would sign any bill that makes it heavier. On Tuesday the House voted for a bill that makes the five-cent coin heavier, and the Senate will vote tomorrow.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { D1: 'the Senate will vote tomorrow', C1: 'a bill that makes the five-cent coin heavier' },
    reason: { D1: 'The case ends by asking the Senate for a vote: {cue:D1}. The President’s promise only says what she would do after it.',
              C1: 'Congress is passing a law, and what it does is make a coin heavier: {cue:C1}. Money and coins are on the Constitution’s list, and no right is taken away.' },
    not: { outcome: 'purse', why: 'Coins cost money to make, which can sound like a decision about spending. But the bill is about the coin itself, a matter on the list, and it votes no money.' },
    wouldChange: 'If the case ended with the President saying that she would sign any such bill, with no vote in the story, the answer to the first question would be {a:D1.president}.' },

  /* ---------- Beyond Congress's power ---------- */
  { id: 'ret-textbooks', use: 'return', tier: 'clean', setting: 'learning', topic: 'one history textbook for every school',
    text: "Teachers say that students across the country learn history from very different books. The House and the Senate passed a bill that says every school in every state must use the same history textbook.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'says every school in every state must use the same history textbook' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law is about what schools teach: it {cue:C1}. That is not one of the matters the Constitution lists for Congress, so it is for the states to decide.' },
    not: { outcome: 'enumerated', why: 'Both chambers voting is true of every law. What schools teach is not on the Constitution’s list.' } },

  { id: 'ret-license', use: 'return', tier: 'varied', setting: 'travel', topic: 'the age for a driver’s license',
    text: "Parents say that teenagers in some states can drive much earlier than in others. The House and the Senate passed a bill that sets seventeen as the age for a driver’s license in every state.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The House and the Senate passed a bill', C1: 'sets seventeen as the age for a driver’s license in every state' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'The law {cue:C1}. Who may hold a driver’s license is not one of the matters the Constitution lists for Congress, so each state decides.' },
    not: { outcome: 'enumerated', why: 'A rule about driving can sound like a rule about travel between states. But the age for a license is not on the Constitution’s list.' } },

  { id: 'ret-rally', use: 'return', tier: 'misleading', setting: 'community', topic: 'approval for a peaceful rally',
    text: "An organizer says her group has marched peacefully every spring for ten years, with a permit from the city each time. The Senate voted on Thursday for a bill, already passed by the House, that bans any group from holding a peaceful rally in a public square without the approval of a federal office.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'The Senate voted on Thursday for a bill, already passed by the House', C1: 'bans any group from holding a peaceful rally in a public square without the approval of a federal office' },
    reason: { D1: 'The last decision is a vote in the Senate, after the House: {cue:D1}. The city’s permits are only in the background.',
              C1: 'The law {cue:C1}. A peaceful rally is a way of gathering, and the Constitution protects the right to gather peacefully, so a law that takes it away is not one Congress may pass.' },
    not: { outcome: 'enumerated', why: 'The votes of both chambers are in order, as for any law. But a law that takes away a right is not one the Constitution lets Congress pass.' },
    wouldChange: 'If a city council had set the same rule for its own square, the answer to the first question would be {a:D1.states}.' },

  /* ---------- The power of the purse ---------- */
  { id: 'ret-trails', use: 'return', tier: 'clean', setting: 'leisure', topic: 'funds for national trails',
    text: "Hikers say the national trails are falling apart. The House voted $50 million for trail repairs on Monday, and the Senate voted for the same sum on Wednesday.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'the Senate voted for the same sum on Wednesday', C1: 'voted $50 million for trail repairs on Monday' },
    reason: { D1: 'The case ends on votes in both chambers: {cue:D1}.',
              C1: 'Congress decided that the government may spend money on something: the House {cue:C1}.' },
    not: { outcome: 'enumerated', why: 'The votes are on money to be spent. They are not a law on a listed matter such as a tax.' } },

  { id: 'ret-satellite', use: 'return', tier: 'varied', setting: 'work', topic: 'a weather satellite left unfunded',
    text: "The weather service asked for money to launch a new weather satellite. The House and the Senate passed this year’s spending bill with the money for the satellite taken out.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'The House and the Senate passed this year’s spending bill', C1: 'with the money for the satellite taken out' },
    reason: { D1: 'The case ends on a vote by both chambers: {cue:D1}.',
              C1: 'Congress decided about money, and cut it: the bill was passed {cue:C1}. Nobody has banned the satellite. The government cannot pay for it.' },
    not: { outcome: 'enumerated', why: 'The bill is a law, and every law passes both chambers. But it is not a law on a listed matter such as a tax. What it settles is whether the government may spend.' } },

  { id: 'ret-bridges', use: 'return', tier: 'misleading', setting: 'community', topic: 'bridge repairs that were promised',
    text: "The President promised to repair the bridges on three federal highways, and the road office has hired crews. Then the House and the Senate passed this year’s spending bill with no money for the bridge repairs, so the crews cannot be paid.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { D1: 'the House and the Senate passed this year’s spending bill', C1: 'with no money for the bridge repairs' },
    reason: { D1: 'The last decision is the vote of both chambers: {cue:D1}. The President’s promise and the hired crews are how the matter got there.',
              C1: 'Congress decided about money, and left it out: the bill was passed {cue:C1}. The crews cannot be paid whatever the President promised.' },
    not: { outcome: 'enumerated', why: 'It is a bill passed by both chambers. But it is not a law on a listed matter such as a tax. What it settles is whether the government may spend.' },
    wouldChange: 'If the case had ended with the road office deciding which bridge to repair first, with the money already voted, the answer to the first question would be {a:D1.president}.' }
]);
