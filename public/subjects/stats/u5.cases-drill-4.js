// Statistical Claims, Unit Five: drill cases, the route stage, the misleading ones. echo names a teaching case whose story this one resembles
// while its name differs. Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  { id: 'r-rel-3', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a clinic blood test flyer', echo: 'base-poster',
    text: "A clinic's flyer says: 'Our new blood test cuts missed illnesses by 50%.' The flyer gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts missed illnesses by 50%', C1: 'The flyer gives no counts' },
    reason: { S1: 'The flyer gives its figure as a share of an earlier level: {cue:S1}. Nothing is set beside it.',
              C1: 'The flyer says {cue:C1}. It is about a test, which can bring back a test’s accuracy, but it never says how often the test is right or reads a yes. A cut of 50% is 20 missed illnesses falling to 10, or 2 falling to 1, and the flyer does not let you tell which.' },
    not: { outcome: 'baserate', why: 'A test is in the story, so it can look like {o:baserate}. But nobody reads a yes from the test here. The figure is a change given as a percentage.' } },

  { id: 'r-smalln', use: 'drill', tier: 'misleading', setting: 'community', topic: 'bike thefts on a street', also: ['compare'],
    text: "A neighborhood group posts: 'Bike thefts on our street are up 400% this quarter!' The police log shows one bike stolen last quarter and five this quarter.",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: 'one bike stolen last quarter and five this quarter', A1: 'one bike stolen last quarter and five this quarter' },
    reason: { S1: 'The post gives a percentage with no counts, which can look like what the figure is set beside. But the log shows how few there are behind it: {cue:S1}. When a case shows both, the answer is the people or things in the figure, which come before what it is set beside.',
              A1: 'The figure rests on {cue:A1}. One bike more or fewer moves the percentage a long way: if next quarter two are stolen, the same group could post "down 60%". There are only a handful.' },
    not: { outcome: 'relrisk', why: 'The post leaves out the counts, which is how {o:relrisk} looks. But the log shows the counts, and they are tiny. That part comes first.' } }
]);
