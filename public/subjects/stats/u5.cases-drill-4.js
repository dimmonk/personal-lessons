// Statistical Claims, Unit Five: drill stories, the route stage, the misleading ones. echo names a teaching story whose plot this one resembles
// while its name differs. Field guide: see u5.cases-drill-1.js.

FC.cases('stats', 'u5', [

  { id: 'r-rel-3', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a clinic blood test flyer', echo: 'base-poster',
    text: "A clinic's flyer says: 'Our new blood test cuts missed illnesses by 50%.' The flyer gives no counts.",
    outcome: 'relrisk', route: { S1: ['compare'], C1: ['numbers'] },
    cues: { S1: 'cuts missed illnesses by 50%', C1: 'The flyer gives no counts' },
    reason: { S1: 'The flyer gives its figure as a share of an earlier level: {cue:S1}. Nothing is set beside it.',
              C1: '{cue:C1}, so “50% fewer missed illnesses” could be 20 falling to 10, or 2 falling to 1.' },
    not: { outcome: 'baserate', why: 'A test is in the story, so it can look like {o:baserate}. But nobody reads a yes from the test here: the figure is a change given as a percentage.' } },

  { id: 'r-smalln', use: 'drill', tier: 'misleading', setting: 'community', topic: 'bike thefts on a street', also: ['compare'],
    text: "A neighborhood group posts: 'Bike thefts on our street are up 400% this quarter!' The police log shows one bike stolen last quarter and five this quarter.",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: 'one bike stolen last quarter and five this quarter', A1: 'one bike stolen last quarter and five this quarter' },
    reason: { S1: 'The post gives only a percentage, but the log shows how few are behind it: {cue:S1}. When a story shows both, check how many were counted first.',
              A1: 'The figure rests on {cue:A1}. One bike more or fewer moves the percentage a long way: if two are stolen next quarter, the same group could post “down 60%”.' },
    not: { outcome: 'relrisk', why: 'The post leaves out the counts, which is how {o:relrisk} looks. But the log shows them, and they are tiny, so that part comes first.' } }
]);
