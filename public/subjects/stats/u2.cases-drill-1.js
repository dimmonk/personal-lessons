// Statistical Claims, Unit Two: drill cases for stages one to three (name, piece, finish). None of these appears in a card.
// Every case in this unit is a claim in which nothing goes wrong. For the key's question in this unit, H1, the marked words are the claim itself.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case (a neighbor in the ledger) and says why it fails.

FC.cases('stats', 'u2', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'n-heating', use: 'drill', tier: 'clean', setting: 'home', topic: 'tenants and cold apartments',
    text: "A housing association owns 6,000 apartments and wants to know how many tenants find their apartment too cold in winter. A computer drew 400 apartments by lottery from its full list, and surveyors visited each one, returning on another day when nobody was in, until 372 tenants had answered. Of those 372, 93 said their apartment was too cold, which is 25 in 100. The association says: 'About 25% of our tenants find their apartment too cold in winter.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 400 apartments by lottery from its full list', 'until 372 tenants had answered'], H1: 'About 25% of our tenants find their apartment too cold in winter' },
    reason: { H1: 'The claim is {cue:H1}. It gives one figure about one group at one time, and it says nothing about a rise or fall, another landlord’s tenants or a cause.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once, for one winter. Nothing is followed through time, and there is no earlier figure for it to have risen or fallen from.' } },

  { id: 'n-rain', use: 'drill', tier: 'clean', setting: 'community', topic: 'rainfall at a weather station',
    text: "A weather station has recorded rainfall every day with the same gauge in the same field since 1990, and nobody's pay depends on the readings. It recorded 710 millimeters of rain in 2021 and 640 in 2023. The station says: 'Annual rainfall at the station fell from 710 millimeters in 2021 to 640 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['recorded rainfall every day with the same gauge in the same field since 1990'], H1: 'Annual rainfall at the station fell from 710 millimeters in 2021 to 640 in 2023' },
    reason: { H1: 'The claim is {cue:H1}. It follows one figure, the station’s rainfall, through two years and says that it fell, by 710 − 640 = 70 millimeters. Nothing is set beside another place or a usual level.' },
    not: { outcome: 'comp_ok', why: 'Two numbers appear, but they are one station in two years. Nothing else is set beside the figure, so the claim follows one thing through time.' } },

  { id: 'n-trucks', use: 'drill', tier: 'clean', setting: 'work', topic: 'two warehouses and mislaid parcels',
    text: "A parcel company compared its two warehouses. Both handle the same kinds of parcels, run the same shifts and log every parcel with the same scanner. Last month the north warehouse mislaid 24 of 4,000 parcels and the south warehouse mislaid 54 of 4,500. The company says: 'The south warehouse mislays more parcels: 12 in 1,000 against 6 in 1,000.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both handle the same kinds of parcels, run the same shifts and log every parcel with the same scanner'], H1: 'The south warehouse mislays more parcels: 12 in 1,000 against 6 in 1,000' },
    reason: { H1: 'The claim is {cue:H1}. It sets two warehouses of one kind side by side with the numbers behind each: 54 ÷ 4,500 = 0.012 and 24 ÷ 4,000 = 0.006. It says which mislays more, and stops.' },
    not: { outcome: 'cause_ok', why: 'Nothing in the case says anyone formed the two warehouses into groups by lottery, and the claim does not say what makes the south one mislay more. It stops at which is ahead.' } },

  { id: 'n-quiz', use: 'drill', tier: 'clean', setting: 'learning', topic: 'weekly texts from a tutor',
    text: "A university has 2,000 first-year students at risk of failing a course. A computer drew 1,000 of them by lottery to get a weekly text from a tutor. The other 1,000 got no text. At the end of the term the registrar checked every student's result the same way: 780 of the text group passed, and 710 of the others. The university says: 'The weekly texts raised the number who passed: 78 in 100 against 71 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 1,000 of them by lottery to get a weekly text from a tutor', 'checked every student\'s result the same way'], H1: 'The weekly texts raised the number who passed: 78 in 100 against 71 in 100' },
    reason: { H1: 'The claim is {cue:H1}. It goes past which group is ahead and says what made the gap, the texts. A lottery formed the groups, so nothing else is likelier to be in one than in the other: 780 ÷ 1,000 = 0.78 against 710 ÷ 1,000 = 0.71.' },
    not: { outcome: 'comp_ok', why: '{o:comp_ok} is for a claim that stops at which group is ahead. This claim says the texts raised the number who passed.' } },

  { id: 'n-sales', use: 'drill', tier: 'varied', setting: 'work', topic: 'a hardware shop’s sales',
    text: "A hardware shop's till records every sale on the same system it has used since 2016, and the owner is paid a fixed salary whatever the sales. Sales were $412,000 in 2022 and $455,000 in 2023. The owner says: 'Sales rose by 10%, from $412,000 in 2022 to $455,000 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records every sale on the same system it has used since 2016', 'paid a fixed salary whatever the sales'], H1: 'Sales rose by 10%, from $412,000 in 2022 to $455,000 in 2023' },
    reason: { H1: 'The claim is {cue:H1}. It follows one figure through two years and says that it rose. It gives a percentage, and the numbers behind it are given too: 455,000 − 412,000 = 43,000, and 43,000 ÷ 412,000 is about 0.10.' },
    not: { outcome: 'comp_ok', why: 'A percentage and two numbers can look like a comparison, but both numbers are the same shop in two years. One thing is followed through time.' } },

  { id: 'n-schools', use: 'drill', tier: 'varied', setting: 'learning', topic: 'two school districts and a reading test',
    text: "A state compares two school districts on the same state test, which every third grader in both took in the same week. The two districts serve a similar mix of family incomes. In District A, 1,200 of 1,500 students passed reading, and in District B, 1,050 of 1,400 did. The state report says: 'More third graders in District A passed reading than in District B: 80 in 100 against 75 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['every third grader in both took in the same week', 'serve a similar mix of family incomes'], H1: 'More third graders in District A passed reading than in District B: 80 in 100 against 75 in 100' },
    reason: { H1: 'The claim is {cue:H1}. It sets two districts side by side, with the numbers behind each: 1,200 ÷ 1,500 = 0.80 and 1,050 ÷ 1,400 = 0.75. It says which has more passing and stops.' },
    not: { outcome: 'meas_ok', why: 'Two figures appear, but they are two districts at one time. Nothing is followed through time.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'p-pets', use: 'drill', tier: 'clean', setting: 'money', topic: 'account holders and a phone app',
    text: "A bank wants to know how many of its 50,000 account holders use its phone app. It drew 700 account numbers by computer lottery from the full list, emailed each one, and phoned those who had not answered until 651 had. Of the 651, 391 use the app, which is 60 in 100. The bank says: 'About 60% of our account holders use our phone app.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 700 account numbers by computer lottery from the full list', 'until 651 had'], H1: 'About 60% of our account holders use our phone app' },
    reason: { H1: 'The claim is {cue:H1}. It gives one figure about one group at one time. The 651 of 700 who answered are why it holds, and the claim itself says nothing about change or cause.' },
    not: { outcome: 'meas_ok', why: 'The figure is given once. No earlier figure is in the claim for it to have risen from.' } },

  { id: 'p-ferry', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'ferry passengers in July',
    text: "A ferry company counts every passenger with the same turnstile at the dock, and nobody's pay depends on the count. It carried 82,000 passengers in July last year and 91,000 this July. The company says: 'July passengers rose from 82,000 to 91,000.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['counts every passenger with the same turnstile at the dock'], H1: 'July passengers rose from 82,000 to 91,000' },
    reason: { H1: 'The claim is {cue:H1}. It follows one figure, the ferry’s passengers, through two Julys and says that it rose by 91,000 − 82,000 = 9,000.' },
    not: { outcome: 'comp_ok', why: 'The two numbers are one ferry in two years, so nothing else is set beside the figure.' } },

  { id: 'p-ward', use: 'drill', tier: 'clean', setting: 'health', topic: 'infections in two surgical wards',
    text: "A health authority compares two hospitals' surgical wards. Both do the same kinds of operations, define an infection the same way and checked every patient. Hospital A had 18 infections among 900 patients, and Hospital B had 36 among 950. The authority says: 'Hospital B had more infections: 4 in 100 patients against 2 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both do the same kinds of operations, define an infection the same way and checked every patient'], H1: 'Hospital B had more infections: 4 in 100 patients against 2 in 100' },
    reason: { H1: 'The claim is {cue:H1}. It sets two wards of one kind side by side with the numbers behind each: 18 ÷ 900 = 0.02 and 36 ÷ 950 is about 0.04. It says which had more and stops.' },
    not: { outcome: 'cause_ok', why: 'The claim does not say what made Hospital B’s number higher, and nothing in the case forms the hospitals into groups by lottery.' } },

  { id: 'p-loyalty', use: 'drill', tier: 'clean', setting: 'work', topic: 'a loyalty app at coffee stores',
    text: "A coffee chain has 400 stores. A computer drew 200 of them by lottery to try a new loyalty app, and the other 200 carried on as usual. The chain measured weekly sales in every store the same way over the same twelve weeks. The 200 app stores averaged $9,300 a week and the other 200 averaged $8,700. The chain says: 'The loyalty app raised weekly sales: $9,300 against $8,700.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 200 of them by lottery to try a new loyalty app', 'measured weekly sales in every store the same way'], H1: 'The loyalty app raised weekly sales: $9,300 against $8,700' },
    reason: { H1: 'The claim is {cue:H1}. It says what made the gap of 9,300 − 8,700 = $600 a week, the app, and the lottery is what lets it say so.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group of stores is ahead. It says the app raised sales.' } },

  /* ---------- Stage three: the first answer is shown; the learner answers the key's question and gives the name ---------- */
  { id: 'f-museum', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'museum members and last year’s visits',
    text: "A museum has 40,000 members and wants to know how many visited last year. It drew 800 membership numbers by lottery from the full list, emailed all 800, and phoned each one who had not replied, reaching 768. Of the 768, 307 had visited, which is 40 in 100. The museum says: 'About 40% of our members visited last year, give or take 4 points.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 800 membership numbers by lottery from the full list', 'reaching 768'], H1: 'About 40% of our members visited last year, give or take 4 points' },
    reason: { H1: 'The claim is {cue:H1}. It gives one figure about one group at one time, with its {t:margin}: 1 ÷ √768 is about 1 ÷ 28, which is 0.036, so about 4 points. It says nothing about change or cause.' },
    not: { outcome: 'meas_ok', why: 'The claim gives the figure once, for last year, and follows nothing through time.' } },

  { id: 'f-run', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a runner’s watch and 5 km times',
    text: "A runner's watch records every run with the same GPS sensor, and nobody is paid or ranked on her times. Her average 5 km time was 29.4 minutes in March and 27.9 minutes in June. She says: 'My average 5 km time fell from 29.4 minutes in March to 27.9 in June.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records every run with the same GPS sensor'], H1: 'My average 5 km time fell from 29.4 minutes in March to 27.9 in June' },
    reason: { H1: 'The claim is {cue:H1}. It follows one figure through two months and says that it fell, by 29.4 − 27.9 = 1.5 minutes. It sets it beside no one else.' },
    not: { outcome: 'samp_ok', why: 'The claim gives the figure at two times and says it fell. A claim of the other name gives the figure once.' } },

  { id: 'f-insurers', use: 'drill', tier: 'varied', setting: 'money', topic: 'two pet insurers and refused claims',
    text: "A consumer magazine compares two pet insurers. Both pay claims on the same kinds of vet bills, and both let the magazine see every claim for last year. Insurer A refused 60 of 1,200 claims, and Insurer B refused 144 of 1,200. The magazine says: 'Insurer B refused more claims: 12 in 100 against 5 in 100.'",
    outcome: 'comp_ok', route: { S1: ['holds'], H1: ['difference'] },
    cues: { S1: ['Both pay claims on the same kinds of vet bills, and both let the magazine see every claim for last year'], H1: 'Insurer B refused more claims: 12 in 100 against 5 in 100' },
    reason: { H1: 'The claim is {cue:H1}. It sets two insurers of one kind side by side with the numbers behind each: 60 ÷ 1,200 = 0.05 and 144 ÷ 1,200 = 0.12. It says which refuses more and stops.' },
    not: { outcome: 'meas_ok', why: 'Two figures appear, but they are two insurers at one time. Nothing is followed through time.' } },

  { id: 'f-calls', use: 'drill', tier: 'varied', setting: 'health', topic: 'a reminder call before an appointment',
    text: "A hospital drew 250 of 500 patients by lottery to get a reminder phone call the day before their appointment. The other 250 got none. The hospital counted every missed appointment the same way for both groups over three months: 20 in the called group and 45 in the other. The hospital says: 'The reminder call cut missed appointments: 8 in 100 against 18 in 100.'",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: ['drew 250 of 500 patients by lottery to get a reminder phone call', 'counted every missed appointment the same way for both groups'], H1: 'The reminder call cut missed appointments: 8 in 100 against 18 in 100' },
    reason: { H1: 'The claim is {cue:H1}. It says what made the gap, the call, and the lottery lets it say so: 20 ÷ 250 = 0.08 against 45 ÷ 250 = 0.18. There is no {t:placebo} here, and none is needed: the second group simply got the usual.' },
    not: { outcome: 'comp_ok', why: 'The claim does not stop at which group missed more. It says the call cut missed appointments.' } }
]);
