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

  /* ---------- The look-alike pairs: the review case of each ---------- */
  { id: 'ls-amp-speech', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a loudspeaker at a park rally', name: 'The loudspeaker',
    text: 'A city rule says that nobody may use amplified sound in the city’s parks. Dee used a loudspeaker to address a rally in Mill Park and was fined $100. She asked a judge to cancel the fine, telling the judge that the rule takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'telling the judge that the rule takes away her right to speak' } },

  { id: 'ls-permit-fine', use: 'teach', tier: 'clean', setting: 'community', topic: 'a permit for a village green', name: 'The permit fine',
    text: 'A town rule says that any gathering on Riverside Green needs a permit from the town. Rosa held a meeting of her neighborhood group there without one and was fined $80. She asked a judge to cancel the fine, telling the judge that the permit rule takes away the right to gather peacefully.',
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
