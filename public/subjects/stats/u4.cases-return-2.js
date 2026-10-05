// Statistical Claims, Unit Four: fresh cases kept back for later days (second file: Detection bias, four cases).

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
    not: { outcome: 'proxy', why: 'The inspector is not paid by the amount of mold found. The landlord paid for four times as many visits.' } },

  { id: 'm4-ret-lifts', use: 'return', tier: 'varied', setting: 'work', topic: 'a warehouse with tripled supervisor rounds',
    text: "A warehouse reports: 'Unsafe lifts logged rose from 10 to 30 a week. Workers are getting careless.' Supervisors used to walk the floor 5 times a week and now walk it 15 times. A lift is logged as unsafe by the same checklist. That is 2 logged for every walk, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Supervisors used to walk the floor 5 times a week and now walk it 15 times",
            M1: "Supervisors used to walk the floor 5 times a week and now walk it 15 times" },
    reason: { S1: 'The count of unsafe lifts logged can rise with no more careless lifting: {cue:S1}. 2 for every walk of 5 walks is 10; 2 for every walk of 15 walks is 30.',
              M1: 'More effort went into finding them: {cue:M1}. The checklist is the same, and the number logged for each walk stayed at 2.' },
    not: { outcome: 'defshift', why: 'An unsafe lift is logged by the same checklist in both years. What changed is how often supervisors looked.' } },

  { id: 'm4-ret-eyes', use: 'return', tier: 'varied', setting: 'learning', topic: 'a school nurse who came on more days',
    text: "A school nurse reports: 'Pupils found needing glasses tripled from 30 to 90. Eyesight is getting worse.' Last year the nurse visited one day a week and tested the 300 pupils who were in school on that day. This year she visits three days a week and has tested 900 pupils. A pupil is called as needing glasses by the same chart. That is 10 found in every 100 tested, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year the nurse visited one day a week and tested the 300 pupils who were in school on that day. This year she visits three days a week and has tested 900 pupils",
            M1: "Last year the nurse visited one day a week and tested the 300 pupils who were in school on that day. This year she visits three days a week and has tested 900 pupils" },
    reason: { S1: 'The count of pupils found can rise with no worse eyesight: {cue:S1}. 10 in every 100 of 300 is 30; 10 in every 100 of 900 is 90.',
              M1: 'More tests were done with the same chart: {cue:M1}. The share found among those tested stayed at 10 in 100.' },
    not: { outcome: 'defshift', why: 'The chart and the standard for needing glasses are the same. What changed is how many pupils were tested.' } }
]);
