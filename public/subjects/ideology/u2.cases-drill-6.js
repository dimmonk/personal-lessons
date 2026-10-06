// Political Ideologies, Unit Two: drill cases, second stage (route), misleading cases, first half. Each is built so that its story
// brings back a named case of a different name (echo). also lists answers the case shows as well as its own, which lose to its own
// by a tie-break in the key. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-r-sd2', use: 'drill', tier: 'misleading', setting: 'work', topic: 'crane operators, a fierce rally and a modest plan',
    text: "From a rally speech by the Corran dock-crane operators: 'The dock company's owners have been bleeding us for years, and the day is coming when the workers win. The company can keep its docks, but it will pay: a floor under crane operators' pay written into law, and a tax on its profits to pay for pensions for every dock worker. We will make our case to the voters and abide by the vote.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['vote'] }, echo: 'c-ml-mill',
    cues: { D1: "The dock company's owners have been bleeding us for years, and the day is coming when the workers win", C1: "The company can keep its docks, but it will pay: a floor under crane operators' pay written into law, and a tax on its profits to pay for pensions for every dock worker", C2: 'We will make our case to the voters and abide by the vote' },
    reason: { D1: 'The text sets the operators against the company that owns the docks, and speaks for the workers: {cue:D1}.',
              C1: 'The company keeps its docks, and a law and a tax are asked for: {cue:C1}. The fierce words about the day the workers win do not change who owns the docks.',
              C2: 'The operators will abide by the vote: {cue:C2}. The change is to come through an election they can lose.' },
    not: { outcome: 'demsoc', why: 'The fierce words about the day the workers win could suggest a handover, but the company keeps its docks. A text that asked for them to pass to the government would be {o:demsoc}.' } },

  { id: 'c-r-dm2', use: 'drill', tier: 'misleading', setting: 'money', topic: 'postal clerks, a fairer tax and a handover',
    text: "From a pamphlet by the Hartwell postal clerks: 'The company that owns the post offices keeps the profit from the stamps, and the clerks keep the lines, and we stand with the clerks. A fairer tax on the company would help, and so would a pension for every clerk. But what we ask is bigger: the post offices should be taken from the company and run by the government for everyone. We will ask the voters for it.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] }, also: ['keep'], echo: 'c-sd-warehouse',
    cues: { D1: 'The company that owns the post offices keeps the profit from the stamps, and the clerks keep the lines, and we stand with the clerks', C1: 'the post offices should be taken from the company and run by the government for everyone', C2: 'We will ask the voters for it' },
    reason: { D1: 'The text sets the clerks against the company that owns the post offices, and stands with the clerks: {cue:D1}.',
              C1: 'The post offices are to be taken from the company and run by the government: {cue:C1}. The text also asks for a tax and a pension, and when a text shows both, the handover decides.',
              C2: 'The clerks will ask the voters: {cue:C2}.' },
    not: { outcome: 'socdem', why: 'The tax and the pension are what you would point to for {o:socdem}. But the text goes on to ask for the post offices to be taken from the company, and when a text shows both, the handover decides.' } }
]);
