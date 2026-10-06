// Statistical Claims, Unit Three: drill cases for the first stage (piece). None of these appears in a card.
// The case of a claim that holds (outcome samp_ok) is Unit Two's name, asked here beside the four faults it is most often mistaken for.
// reason[STEP] is the reason tied to the marked words; not names the most tempting wrong name for this case and says why it fails.

FC.cases('stats', 'u3', [

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
