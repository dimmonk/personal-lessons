// Civics, Unit Five: cases shown inside cards, part one: the first name (a judge asked whether a law is allowed).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.

FC.cases('civics', 'u5', [

  /* ---------- Judicial review ---------- */
  { id: 'r-leaflets', use: 'teach', tier: 'clean', setting: 'community', topic: 'a leaflet ban in a town square', name: 'The leaflet fine',
    text: 'A town passes a rule that nobody may hand out leaflets in the main square. Marisol was fined $50 for handing out leaflets about a school vote. She took the town to court and told the judge that the rule goes against the right to speak that the Constitution protects. The judge must now decide whether it does.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'The judge must now decide whether it does',
            J1: ['was fined $50 for handing out leaflets about a school vote', 'told the judge that the rule goes against the right to speak that the Constitution protects'] } },

  { id: 'r-paper', use: 'teach', tier: 'clean', setting: 'money', topic: 'a newspaper fined for a name', name: 'The newspaper fine',
    text: 'A state law says that no newspaper may print the name of a person who has been charged with a crime but not yet tried. The owner of a small paper, Shira, was fined $10,000 for printing one name. She asked a judge to cancel the fine, saying the law takes away the freedom to publish that the Constitution protects.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying the law takes away the freedom to publish that the Constitution protects' },
    segments: [
      { text: 'A state law says that no newspaper may print the name of a person who has been charged with a crime but not yet tried', note: 'That is the law. It is how the matter began, and it is not what the person asks the judge.' },
      { text: 'was fined $10,000 for printing one name', note: 'That is the harm. It is why Shira can bring a case, and it is not what she says about the law.' },
      { text: 'saying the law takes away the freedom to publish that the Constitution protects' }
    ] },

  { id: 'r-gate', use: 'check', tier: 'clean', setting: 'work', topic: 'workers meeting at a factory gate', name: 'The factory gate',
    text: 'A state law bans any group of workers from meeting outside a factory gate before a shift. Anil was fined $120 for meeting his colleagues at the gate to talk about their pay. He took the state to court, saying the law takes away the right to gather peacefully. A judge will hear the case next month.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'A judge will hear the case next month', J1: 'saying the law takes away the right to gather peacefully' },
    segments: [
      { text: 'A state law bans any group of workers from meeting outside a factory gate before a shift', note: 'That is the law. It is how the matter began, and it is not what Anil asks the judge.' },
      { text: 'Anil was fined $120 for meeting his colleagues at the gate to talk about their pay', note: 'That is the harm. It is why Anil can bring a case, and it is not what he says about the law.' },
      { text: 'saying the law takes away the right to gather peacefully' },
      { text: 'A judge will hear the case next month', note: 'That shows who decides. It does not show what the judge is asked.' }
    ],
    reason: { J1: 'Anil was fined, so the law has actually harmed him. What he tells the court is that the law clashes with a right the Constitution protects, and the words are the ones you tapped. The law is being attacked, not read.' } },

  /* ---------- The exceptions that carry the words of another name ---------- */
  { id: 'x-hall', use: 'teach', tier: 'misleading', setting: 'community', topic: 'a community hall and one religion', name: 'The community hall',
    text: 'A town owns a community hall that residents rent for parties and meetings. The town’s rule says that only members of the town’s main church may rent it. The Mehta family belong to a different faith and were turned away. They have asked a judge to order the town to let every resident rent the hall, saying the rule is unfair and that the Constitution does not allow a town to favour one religion.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'They have asked a judge to order the town', J1: ['were turned away', 'the Constitution does not allow a town to favour one religion'] },
    segments: [
      { text: 'The town’s rule says that only members of the town’s main church may rent it', note: 'That is the rule. It does not show what the family asks the judge.' },
      { text: 'were turned away', note: 'That is the harm. It is why the family can bring a case. It does not show what they say about the rule.' },
      { text: 'saying the rule is unfair', note: 'On its own that is a view about which rule would be better. The words that come after it are what change the case.' },
      { text: 'the Constitution does not allow a town to favour one religion' }
    ] },

  { id: 'x-defendant', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a night vigil and a camping ban', name: 'Nell’s trial',
    text: 'Nell is on trial for breaking a town rule that bans camping in any public park. She has been in court since Monday: a jury has been chosen, she has a lawyer, and the trial is open to the public. On Thursday her lawyer asks the judge to throw out the charge, saying the rule takes away the right to gather peacefully, because Nell was holding a night vigil with fifty other people.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'her lawyer asks the judge to throw out the charge', J1: 'saying the rule takes away the right to gather peacefully' },
    segments: [
      { text: 'Nell is on trial for breaking a town rule that bans camping in any public park', note: 'That is why she is in court. It does not show what her lawyer asks the judge.' },
      { text: 'a jury has been chosen, she has a lawyer, and the trial is open to the public', note: 'Those are steps the Constitution promises an accused person, and nobody says one was skipped. They do not show what the judge is asked.' },
      { text: 'the rule takes away the right to gather peacefully' }
    ] },

  /* ---------- The whole case worked on a clean story ---------- */
  { id: 'w-yardsign', use: 'teach', tier: 'clean', setting: 'community', topic: 'a yard sign about an election', name: 'The yard sign',
    text: 'A state law says that no yard may display a sign about an election. Wanda put up a sign supporting a candidate for mayor and was fined $75. She asked a judge to cancel the fine, saying that the law takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying that the law takes away her right to speak' } },

  /* ---------- The look-alike pairs: the review case of each ---------- */
  { id: 'ls-amp-speech', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a loudspeaker at a park rally', name: 'The loudspeaker',
    text: 'A city rule says that nobody may use amplified sound in the city’s parks. Dee used a loudspeaker to address a rally in Mill Park and was fined $100. She asked a judge to cancel the fine, telling the judge that the rule takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'telling the judge that the rule takes away her right to speak' } },

  { id: 'ls-permit-fine', use: 'teach', tier: 'clean', setting: 'community', topic: 'a permit for a village green', name: 'The permit fine',
    text: 'A town rule says that any gathering on Riverside Green needs a permit from the town. Rosa held a meeting of her neighbourhood group there without one and was fined $80. She asked a judge to cancel the fine, telling the judge that the permit rule takes away the right to gather peacefully.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'telling the judge that the permit rule takes away the right to gather peacefully' } },

  { id: 'ls-vince-law', use: 'teach', tier: 'clean', setting: 'community', topic: 'a street speech without a permit', name: 'Vince and the speech law',
    text: 'A city law makes it a crime to give a speech on a public street without a permit. Vince gave a short speech on Third Street about a school closing and was charged. He tells the judge that the law takes away his right to speak, and asks her to throw out the charge.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'asks her to throw out the charge', J1: 'the law takes away his right to speak' } },

  { id: 'ls-worship-fine', use: 'teach', tier: 'clean', setting: 'home', topic: 'a prayer meeting in a living room', name: 'Hana’s prayer meeting',
    text: 'A year ago the House and the Senate passed a law that makes it a crime for more than ten people to hold a prayer meeting in a private home. Hana held one for fourteen people in her living room and was fined $300. She asked a judge to cancel the fine, saying the law takes away the right to worship and to gather peacefully.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying the law takes away the right to worship and to gather peacefully' } }
]);
