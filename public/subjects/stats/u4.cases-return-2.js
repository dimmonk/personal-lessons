// Statistical Claims, Unit Four: fresh cases kept back for later days (second file: Detection bias, two cases).

FC.cases('stats', 'u4', [

  { id: 'm4-ret-roads', use: 'return', tier: 'varied', setting: 'community', topic: 'a city that sent out bigger road crews',
    text: "A city reports: 'Potholes found rose from 800 to 2,400 this year. Our roads are collapsing.' The city tripled its road crews: 2,000 km of road were driven and checked last year and 6,000 km this year, to the same standard. That is 0.4 potholes found for every km checked, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "The city tripled its road crews: 2,000 km of road were driven and checked last year and 6,000 km this year, to the same standard",
            M1: "The city tripled its road crews: 2,000 km of road were driven and checked last year and 6,000 km this year, to the same standard" },
    reason: { S1: 'The count of potholes found can rise with no more potholes: {cue:S1}. 0.4 for every km of 2,000 km is 800; 0.4 for every km of 6,000 km is 2,400.',
              M1: 'More effort went into finding them: {cue:M1}. The standard is the same, and the number found for each km checked stayed at 0.4.' },
    not: { outcome: 'defshift', why: 'A pothole is counted by the same standard in both years. What changed is how many kilometers were checked.' } },

  { id: 'm4-ret-mold', use: 'return', tier: 'varied', setting: 'home', topic: 'a landlord who paid for four times as many visits',
    text: "A landlord's report says: 'Mold found in flats rose from 5 to 20 this year. The buildings are getting damper.' Last year an inspector visited 100 flats picked at random. This year the landlord paid for visits to 400 flats. Mold is called mold by the same test in both years. That is 5 found in every 100 flats visited, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year an inspector visited 100 flats picked at random. This year the landlord paid for visits to 400 flats",
            M1: "Last year an inspector visited 100 flats picked at random. This year the landlord paid for visits to 400 flats" },
    reason: { S1: 'The count of mold found can rise with no damper buildings: {cue:S1}. 5 in every 100 of 100 flats is 5; 5 in every 100 of 400 flats is 20.',
              M1: 'More visits were paid for: {cue:M1}. The test for mold is the same, and the share found among the flats visited stayed at 5 in 100.' },
    not: { outcome: 'proxy', why: 'The inspector is not paid by the amount of mold found. The landlord paid for four times as many visits.' } }
]);
