// Psychology, Unit One: fresh cases held back for later days (lesson standard E9, V44).
// One for each kind. A kind that is due comes back as a case the learner has not seen, beside a case of the kind
// they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('psychology', 'u1', [

  { id: 'g-ret-roof', use: 'return', tier: 'clean', setting: 'home', topic: 'putting off a roof repair',
    text: "Halima has put off mending the roof for another winter. 'Two builders have told me it will last a year,' she tells her brother, 'and next spring I will have the money to do the whole thing properly.'",
    route: { D1: ['reasoning'] },
    cues: { D1: ['Two builders have told me it will last a year', 'next spring I will have the money to do the whole thing properly'] },
    reason: { D1: 'One person is giving her reasons for a choice of her own: {cue:D1}. Her brother only listens.' },
    not: { outcome: 'tactic', why: 'She is speaking to her brother, but nothing she says is about him or about anything between the two of them.' } },

  { id: 'g-ret-holiday', use: 'return', tier: 'clean', setting: 'home', topic: 'weekends away with a sister',
    text: "Each time Noelle books a weekend trip with her sister, her husband tells her that the children cry for her the whole time, and that a good mother would not need to get away. She has canceled the last two trips.",
    route: { D1: ['tactic'] },
    cues: { D1: 'her husband tells her that the children cry for her the whole time, and that a good mother would not need to get away' },
    reason: { D1: 'One person is saying something to another, about her: {cue:D1}. The story shows where it leaves Noelle: two canceled trips.' },
    not: { outcome: 'pattern', why: 'It happens each time, but always between the same two people. The story shows no other place and no other relationship of his.' } },

  { id: 'g-ret-coach', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a coach of forty years',
    text: "Players he coached in the 1980s, players he coaches now, and the parents of both say the same about Mr. Lindqvist: he has never raised his voice, and nobody has ever left one of his sessions without one thing to practice. His own grown-up children say he was the same at home.",
    route: { D1: ['pattern'] },
    cues: { D1: ['Players he coached in the 1980s, players he coaches now, and the parents of both say the same', 'His own grown-up children say he was the same at home'] },
    reason: { D1: 'The story is a long view of one man: {cue:D1}. Forty years, a club and a home, and players, parents and children all saying the same.' },
    not: { outcome: 'none', why: 'One patient training session would be a moment. The story shows the same thing through forty years, in two places, from everyone who has known him.' },
    wouldChange: 'If the story told you only about last Saturday’s session, it would be {a:D1.none}.' },

  { id: 'g-ret-puppy', use: 'return', tier: 'clean', setting: 'home', topic: 'the week a puppy arrived',
    text: "The week the puppy arrived, nobody in the Brennan house slept, and Mr. Brennan, who is usually the calm one, shouted at the television, the toaster and a parking meter. Two weeks later the puppy was sleeping through the night, and so was he.",
    route: { D1: ['none'] },
    cues: { D1: 'The week the puppy arrived' },
    reason: { D1: 'The story is one short stretch, with something real behind it: {cue:D1}. Two weeks later it has passed, and the story even tells you he is usually the calm one.' },
    not: { outcome: 'pattern', why: 'One week is not years, and the story says outright that this is not how he usually is.' } }
]);
