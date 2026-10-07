// Civics, Unit Five: cases shown inside cards, part two: the second and third names (a judge asked what the words of a
// law cover, and a judge asked to choose a policy), and the word precedent.

FC.cases('civics', 'u5', [

  /* ---------- The case that carries the word precedent (no name is asked of it) ---------- */
  { id: 'foodtruck', use: 'teach', tier: 'clean', setting: 'community', topic: 'two rulings on a food truck', name: 'The food trucks',
    text: 'Two years ago a judge in Marlow’s court ruled that a food truck is a shop under the town’s licensing law, so its owner needed a shop license. This spring a different judge in the same town is asked the same question about another owner’s food truck. She reads the earlier ruling and decides it the same way.' },

  /* ---------- Interpreting a law ---------- */
  { id: 'i-hives', use: 'teach', tier: 'clean', setting: 'money', topic: 'a tax break and rooftop beehives', name: 'The rooftop hives',
    text: 'A state law gives a lower tax bill to farms. Dora keeps eight beehives on a flat roof in the city and sells the honey. The tax office says that a roof is not a farm and sent her the full bill. Dora has asked a judge to decide whether her hives make her roof a farm under the law. She does not say that the law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'Dora has asked a judge to decide',
            J1: ['asked a judge to decide whether her hives make her roof a farm under the law', 'She does not say that the law is wrong'] } },

  { id: 'i-check', use: 'check', tier: 'clean', setting: 'work', topic: 'a health grade and a coffee bicycle', name: 'The coffee bicycle',
    text: 'A city law says that every food business must display its health inspection grade in the window. Imran sells coffee from a bicycle with a box on the back. The city says the bicycle is a food business and fined him for not displaying a grade. Imran asked a judge to decide whether a coffee bicycle is a food business under the law. He does not say the city’s law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'Imran asked a judge to decide', J1: 'asked a judge to decide whether a coffee bicycle is a food business under the law' },
    reason: { J1: 'Imran accepts the law and asks only how far its words reach: {cue:J1}.' } },

  { id: 'ls-amp-violin', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a violin and a small amplifier', name: 'The violin',
    text: 'A city rule says that nobody may use amplified sound in the city’s parks. Eli played a violin with a small clip-on amplifier in Mill Park and was fined $100. He does not say the rule is wrong. He asked a judge to decide whether a violin with a small amplifier counts as amplified sound under the rule.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'He asked a judge to decide', J1: 'asked a judge to decide whether a violin with a small amplifier counts as amplified sound under the rule' } },

  { id: 'k-bakery', use: 'check', tier: 'varied', setting: 'money', topic: 'a bread label and a market stall', name: 'The market stall',
    text: 'A state law says that every bakery must label its bread with a list of ingredients. Hamza bakes at home and sells his loaves from a market stall without labels, saying that a stall is not a bakery. The state fined him, and he has asked a judge to decide whether a market stall that sells bread it bakes is a bakery under the law. He does not say the law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'he has asked a judge to decide', J1: 'asked a judge to decide whether a market stall that sells bread it bakes is a bakery under the law' },
    reason: { J1: 'Hamza accepts the law and asks only how far one word reaches: {cue:J1}.' } },

  /* ---------- A political question ---------- */
  { id: 'n-bus', use: 'teach', tier: 'clean', setting: 'community', topic: 'a bus fare', name: 'The bus fare',
    text: 'The bus fare in Alder Town is $2. A group of regular riders asks a judge to order the town council to cut the fare to $1, saying that would be fairer to people who earn little. No law sets what a bus fare must be, and nobody says the fare takes away a right. The council voted to keep the fare at $2.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'asks a judge to order the town council', J1: ['asks a judge to order the town council to cut the fare to $1', 'No law sets what a bus fare must be, and nobody says the fare takes away a right'] } },

  { id: 'n-check', use: 'check', tier: 'clean', setting: 'health', topic: 'a second walk-in clinic', name: 'The second clinic',
    text: 'Residents of Pell Heights ask a judge to order the city to open a second walk-in clinic, saying that it would be better for the neighborhood. No law requires a second clinic, and nobody says the city takes away a right by not opening one.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the city', J1: 'No law requires a second clinic, and nobody says the city takes away a right by not opening one' },
    reason: { J1: 'The residents want the judge to choose because it would be better, and nothing settles it: {cue:J1}.' } },

  { id: 'ls-permit-stage', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a stage for a village green', name: 'The stage',
    text: 'A town rule says that any gathering on Riverside Green needs a permit from the town. A group of residents asks a judge to order the town to build a stage on the green for community events, saying that a stage would be better for the town. No law requires a town to build one, and nobody says the permit rule takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'asks a judge to order the town to build a stage', J1: 'No law requires a town to build one, and nobody says the permit rule takes away a right' } },
]);
