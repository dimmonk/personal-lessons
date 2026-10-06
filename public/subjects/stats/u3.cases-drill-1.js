// Statistical Claims, Unit Three: drill cases for the first two stages (name, piece); the third stage (finish) is in u3.cases-drill-4.js. None of these appears in a card.
// The cases of a claim that holds (outcome samp_ok) are Unit Two's names, asked here beside the four faults they are most often mistaken
// for; the validator asks a name or finish case the unit's own question (A1), which a claim that holds never reaches, so those cases
// carry marked words and a reason for it as well, and the app, which shows them only the questions on their own route, never prints them.
// reason[STEP] is the reason tied to the marked words; not names the most tempting wrong name for this case and says why it fails.

FC.cases('stats', 'u3', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'cd-n-lasted', use: 'drill', tier: 'clean', setting: 'work', topic: 'managers who stayed twenty years',
    text: "A career magazine interviewed the 30 managers who have been with a retailer for twenty years, and all 30 said hard work is the secret of staying. The magazine's headline reads: 'Hard work keeps you employed.' The retailer hired about 400 people in the year those managers started.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['interviewed the 30 managers who have been with a retailer for twenty years', 'Hard work keeps you employed'], A1: 'the 30 managers who have been with a retailer for twenty years' },
    reason: { S1: 'The headline speaks for anyone who wants to stay employed, but the figure comes from the managers who stayed: {cue:S1}. About 370 of the 400 hired that year are not in it.',
              A1: 'The 30 were found after the fact, among the ones still there: {cue:A1}. The ones who left are missing, and a manager who stayed is likelier to say that hard work is what kept them.' },
    not: { outcome: 'selfselect', why: 'Nobody chose to answer: the magazine went to the managers who were still there. The ones who are missing left, and they did not choose to stay out of the figure.' } },

  { id: 'cd-n-chose', use: 'drill', tier: 'clean', setting: 'community', topic: 'a neighborhood app and noise',
    text: "A neighborhood app asked its users: 'Is your street too noisy at night?' Anyone with the app could tap yes or no. 3,100 neighbors tapped, and 2,170 said yes. The app's newsletter says: 'Seven in ten people in this city say their street is too noisy.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['3,100 neighbors tapped', 'Seven in ten people in this city'], A1: 'Anyone with the app could tap yes or no' },
    reason: { S1: 'The newsletter speaks for people in the whole city, but the figure comes from the 3,100 who tapped: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The people who tapped chose to, and people who are bothered by noise are likelier to open an app and say so.' },
    not: { outcome: 'nonresp', why: 'Nobody was sent the question by name. It sat in an app, and anyone could tap. There is no list of people who were asked and did not reply.' } },

  { id: 'cd-n-ok1', use: 'drill', tier: 'clean', setting: 'community', topic: 'every bridge in a city inspected',
    text: "A city inspector examined every one of the 85 bridges in the city last year and found that 17 need repair. The city's report says: 'One bridge in five needs repair.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'], },
    cues: { S1: 'examined every one of the 85 bridges in the city', H1: 'One bridge in five needs repair', A1: 'examined every one of the 85 bridges in the city' },
    reason: { S1: 'Nobody who could be counted is left out: {cue:S1}. The claim speaks only for the city’s bridges, and 17 of 85 is 20 in every 100.',
              H1: 'The claim gives a share for one group at one time and says nothing more: {cue:H1}. It does not say the share rose, or differs from another city, or what caused it.',
              A1: 'None of the four ways in fits, because every one of the 85 is counted: {cue:A1}.' },
    not: { outcome: 'smalln', why: 'There are 85 bridges, and one more or fewer would move the share by about one point: 18 of 85 is 21 in every 100. That is enough bridges for the figure to hold.' } },

  { id: 'cd-n-replied', use: 'drill', tier: 'clean', setting: 'work', topic: 'a hospital survey of nurses on shifts',
    text: "A hospital emailed a survey to all 2,000 of its nurses: 'Do you prefer 12-hour shifts?' 160 replied, and 128 said yes. The hospital's newsletter says: 'Four in five of our nurses prefer 12-hour shifts.' Nobody was asked a second time.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['160 replied, and 128 said yes', 'Four in five of our nurses prefer 12-hour shifts'], A1: ['emailed a survey to all 2,000 of its nurses', 'Nobody was asked a second time'] },
    reason: { S1: 'The newsletter speaks for all 2,000 nurses, but the figure comes from the 160 who replied: {cue:S1}. 160 is 8 in every 100 of the nurses.',
              A1: 'Everyone on a known list was asked by name, and most did not answer: {cue:A1}. A nurse who wants longer shifts, to have more days off, is likelier to reply than one who has no view.' },
    not: { outcome: 'selfselect', why: 'Everyone was asked by name: the survey went to every one of the 2,000 nurses. The trouble is that most did not reply, and nothing was done about it.' } },

  { id: 'cd-n-handful', use: 'drill', tier: 'clean', setting: 'health', topic: 'a nursing home with no falls',
    text: "A nursing home with 8 residents had no falls last month. Its brochure says: 'The safest nursing home in the state: zero falls.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['A nursing home with 8 residents had no falls last month', 'The safest nursing home in the state'], A1: 'A nursing home with 8 residents had no falls last month' },
    reason: { S1: 'The brochure reads a month of zero falls as a verdict on the home, but the figure comes from 8 residents: {cue:S1}.',
              A1: 'Every resident is counted, so the figure is exact for last month. But there are only a handful: {cue:A1}. One fall would turn "zero" into "one in eight", which is 12.5 in every 100, so the figure rests on luck as much as on care.' },
    not: { outcome: 'samp_ok', why: 'A fair figure would be one that one or two more or fewer would barely move. With 8 residents, one fall is a whole eighth of the home, and the brochure reads one quiet month from 8 people as the best in the state.' } },

  { id: 'cd-n-ok2', use: 'drill', tier: 'clean', setting: 'money', topic: 'every car loan at a credit union reviewed',
    text: "A credit union reviewed every one of its 4,200 car loans from last year and found that 378 were paid late at least once. Its report says: 'About 9 car loans in every 100 were paid late at least once last year.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'reviewed every one of its 4,200 car loans from last year', H1: 'About 9 car loans in every 100 were paid late at least once last year', A1: 'reviewed every one of its 4,200 car loans from last year' },
    reason: { S1: 'Nothing is left out: {cue:S1}. The claim speaks only for the credit union’s own car loans of last year, and 378 of 4,200 is 9 in every 100.',
              H1: 'The claim gives one share for one group at one time and goes no further: {cue:H1}.',
              A1: 'None of the four ways in fits, because every loan is counted: {cue:A1}.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and nobody failed to reply. The credit union looked at its own records of every loan, so nobody is missing from the figure.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'cd-p-lasted', use: 'drill', tier: 'clean', setting: 'money', topic: 'companies that pay a dividend every year',
    text: "A business magazine's 'Hall of Fame' lists the 25 companies that have paid a dividend every year since 1970. The magazine says: 'Companies that pay a dividend every year are safer investments.' It does not mention the companies that stopped paying, or went out of business.",
    outcome: 'survivor', route: { S1: ['counted'], A1: ['lasted'] },
    cues: { S1: ['lists the 25 companies that have paid a dividend every year since 1970', 'Companies that pay a dividend every year are safer investments'], A1: 'lists the 25 companies that have paid a dividend every year since 1970' },
    reason: { S1: 'The magazine speaks for companies that pay a dividend, but the figure comes from the ones that kept paying: {cue:S1}.',
              A1: 'The list is made after the fact, from the ones still paying: {cue:A1}. The companies that stopped, or went out of business, are missing, and they left because of what happened to them.' },
    not: { outcome: 'selfselect', why: 'Nobody chose to answer. The list was made from the companies that were still paying, and the ones that are missing stopped, or closed.' } },

  { id: 'cd-p-chose', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a tutoring center rated on a college website',
    text: "A college posted a form on its website: 'Rate this semester's tutoring center.' Anyone with the link could answer. 85 students did, and 80 gave top marks. The center's report says: 'Students rate the tutoring center very highly.'",
    outcome: 'selfselect', route: { S1: ['counted'], A1: ['chose'] },
    cues: { S1: ['85 students did, and 80 gave top marks', 'Students rate the tutoring center very highly'], A1: 'Anyone with the link could answer' },
    reason: { S1: 'The report speaks for students, but the figure comes from 85 of them: {cue:S1}.',
              A1: 'Nobody was asked by name: {cue:A1}. The students who answered chose to, and a student who used the center and liked it is likelier to say so.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked by name, so there is no list of people who were asked and did not reply. The form sat on a website for anyone to find.' } },

  { id: 'cd-p-replied', use: 'drill', tier: 'clean', setting: 'community', topic: 'a ballot to every household on a playground',
    text: "A neighborhood association sent a ballot to each of its 600 households about a new playground. 72 ballots came back, and 60 said yes. The board says: 'The neighborhood wants the playground: 5 households in every 6.' It did not follow up with the others.",
    outcome: 'nonresp', route: { S1: ['counted'], A1: ['replied'] },
    cues: { S1: ['72 ballots came back, and 60 said yes', 'The neighborhood wants the playground'], A1: ['sent a ballot to each of its 600 households', 'did not follow up with the others'] },
    reason: { S1: 'The board speaks for the whole neighborhood, but the figure comes from the 72 ballots that came back: {cue:S1}.',
              A1: 'Everyone on the list was asked, and most did not answer: {cue:A1}. 72 of 600 is 12 in every 100.' },
    not: { outcome: 'selfselect', why: 'Every household was asked by name, so nobody chose themselves into the survey. The trouble is that most did not reply.' } },

  { id: 'cd-p-handful', use: 'drill', tier: 'clean', setting: 'work', topic: 'a new waiter on his first shift',
    text: "A restaurant's new waiter served 4 tables on his first shift, and all 4 left a tip of more than 25%. The owner says: 'Best waiter we have ever hired: every table tips over 25%.'",
    outcome: 'smalln', route: { S1: ['counted'], A1: ['handful'] },
    cues: { S1: ['served 4 tables on his first shift', 'Best waiter we have ever hired'], A1: 'served 4 tables on his first shift' },
    reason: { S1: 'The owner reads a perfect record as a verdict on the waiter, but the figure comes from four tables: {cue:S1}.',
              A1: 'Every table he served is counted, but there are only four: {cue:A1}. One table that tipped less would turn "every table" into 3 of 4.' },
    not: { outcome: 'nonresp', why: 'Nobody was asked and nobody failed to reply: every table he served is in the figure. The trouble is that there are only four.' } },

  { id: 'cd-p-ok', use: 'drill', tier: 'clean', setting: 'health', topic: 'every student in a school measured',
    text: "A school nurse measured the height of every one of the 150 students in the school on one day. The average was 140 centimeters. The nurse's note says: 'The average height of the students in our school is 140 centimeters.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: 'measured the height of every one of the 150 students in the school on one day', H1: 'The average height of the students in our school is 140 centimeters' },
    reason: { S1: 'Everyone the claim speaks for is counted: {cue:S1}. The claim stays with the students of this school.',
              H1: 'The claim gives an average for one group at one time and says nothing more: {cue:H1}.' },
    not: { outcome: 'smalln', why: 'There are 150 students, and one more or fewer would barely move an average. There are enough for the figure to hold.' } }
]);
