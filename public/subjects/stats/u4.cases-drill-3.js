// Statistical Claims, Unit Four: drill cases for the third stage (the first answers are shown; the learner answers this unit's
// question and gives the name). A claim with nothing wrong is here too, and is asked the sound claims' question after the first answer.

FC.cases('stats', 'u4', [

  /* ---------- Stage three: the first answers are shown; the learner answers this unit's question and gives the name ---------- */
  { id: 'm4-fn-ward', use: 'drill', tier: 'varied', setting: 'health', topic: 'a hospital bonus on discharge by noon',
    text: "A hospital gives each ward manager a bonus when 90 of every 100 patients are 'discharged by noon', and the manager writes the discharge time on each form. The share discharged by noon rose from 40 of every 100 to 90 of every 100. The ward's own bed records show that patients leave at the same times as before: most between 2 p.m. and 4 p.m.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives each ward manager a bonus when 90 of every 100 patients are 'discharged by noon', and the manager writes the discharge time on each form",
            M1: "gives each ward manager a bonus when 90 of every 100 patients are 'discharged by noon', and the manager writes the discharge time on each form" },
    reason: { S1: 'The share discharged by noon can rise with no patient leaving earlier: {cue:S1}. It rose by 50 in every 100 and the bed records did not move.',
              M1: 'The manager is paid on the figure and writes the time down: {cue:M1}. Writing noon on the form is easier than getting patients out of bed by noon.' },
    not: { outcome: 'defshift', why: 'The definition of noon and the form are unchanged. What changed is what the people who write the times do, because the figure now pays them.' } },

  { id: 'm4-fn-patrol', use: 'drill', tier: 'varied', setting: 'community', topic: 'a town and a second weekend checkpoint team',
    text: "A town reports: 'Drivers stopped for drunk driving doubled this year, from 150 to 300. Our streets are more dangerous.' The police added a second checkpoint team on weekend nights, and breath tests went from 3,000 a year to 6,000. A driver is counted by the same limit in both years. That is 5 found in every 100 tested, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "The police added a second checkpoint team on weekend nights, and breath tests went from 3,000 a year to 6,000",
            M1: "The police added a second checkpoint team on weekend nights, and breath tests went from 3,000 a year to 6,000" },
    reason: { S1: 'The count of drivers stopped can rise with no more drunk driving: {cue:S1}. Twice the tests found twice the drivers (5 in every 100 of 3,000 is 150; of 6,000 is 300).',
              M1: 'More effort went into finding it: {cue:M1}. The share found among those tested stayed at 5 in 100.' },
    not: { outcome: 'proxy', why: 'Nobody is paid by the number of drivers stopped here. The police tested twice as many.' } },

  { id: 'm4-fn-reservoir', use: 'drill', tier: 'varied', setting: 'community', topic: 'a water board and a gauge on a reservoir wall',
    text: "The water board reads the same depth gauge on the reservoir wall at 8 a.m. on the first of each month. The gauge has not been moved or replaced, and nobody is paid by the reading. The reading on 1 March was 14.2 meters and on 1 September it was 11.6 meters. The board's report says: 'The reservoir fell 2.6 meters between March and September.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The gauge has not been moved or replaced, and nobody is paid by the reading",
            H1: "The reservoir fell 2.6 meters between March and September",
            M1: "The gauge has not been moved or replaced, and nobody is paid by the reading" },
    reason: { S1: 'Every part holds: {cue:S1}. One gauge was read the same way at the same time, and nobody gains from a number, so nothing besides the water level could move it.',
              H1: 'The claim gives one figure at two times and says it fell: {cue:H1}. Arithmetic: 14.2 − 11.6 = 2.6. It sets the figure beside nothing else and says nothing about why.',
              M1: 'Nothing could move the figure besides the water itself: {cue:M1}. It is the same tool in the same place, and nobody is paid on it.' },
    not: { outcome: 'defshift', why: 'The gauge, its place and the hour are unchanged, so nothing about how the level is counted changed.' } },

  { id: 'm4-fn-sensor', use: 'drill', tier: 'varied', setting: 'health', topic: 'a city and an air monitor moved into a park',
    text: "A city's air report says: 'Days with unhealthy air fell from 40 to 28 this year.' In March the city moved its air monitor from beside the main road to the middle of a park. A second monitor left beside the road counted 40 unhealthy days last year and 41 this year.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In March the city moved its air monitor from beside the main road to the middle of a park",
            M1: "In March the city moved its air monitor from beside the main road to the middle of a park" },
    reason: { S1: 'The count of unhealthy days can fall with the air no cleaner: {cue:S1}. The monitor that stayed beside the road counted 40 and then 41.',
              M1: 'The tool that measures was moved: {cue:M1}. Air in the middle of a park is cleaner than air beside a main road, so a monitor there counts fewer unhealthy days.' },
    not: { outcome: 'detection', why: 'Nobody looked harder or put in more monitors. The one monitor was moved to a different place.' } },

  { id: 'm4-fn-pike', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a fishing club and a longer net survey',
    text: "A fishing club reports: 'Pike netted at the lake rose from 15 to 60 this year. The pike are booming.' Last year the club ran its net survey on one day; this year it ran it on four, with the same nets in the same places. The club netted 15 pike a day in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year the club ran its net survey on one day; this year it ran it on four, with the same nets in the same places",
            M1: "Last year the club ran its net survey on one day; this year it ran it on four, with the same nets in the same places" },
    reason: { S1: 'The count of pike can rise with no more pike: {cue:S1}. Four days of netting at 15 pike a day is 60, and one day is 15.',
              M1: 'More effort went into finding them: {cue:M1}. The nets, the places and the catch each day are unchanged.' },
    not: { outcome: 'defshift', why: 'The nets and places are the same, so how a pike is counted did not change. The club netted for more days.' } }
]);
