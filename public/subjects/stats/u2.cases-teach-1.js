// Statistical Claims, Unit Two: cases shown inside cards, part one: the four term cases, and the cases of the first two names.
// use: 'teach' = shown in a card; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it, always in the same style.
// For the key's question in this unit, H1, the marked words are the claim itself. For the first question, S1, they are the words that show
// every part holding. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason[STEP] is the reason for this case's answer to that question.

FC.cases('stats', 'u2', [

  /* ---------- Cases that carry a term (no name is asked of them) ---------- */
  { id: 'h-t-council', use: 'teach', tier: 'clean', setting: 'community', topic: 'a council asks some of a town', name: 'The council and its 800',
    text: "A town council wants to know how many of the town's 40,000 residents walk to work. It cannot ask all 40,000, so it asks 800 of them. Of the 800, 248 say they walk to work, which is 31 in 100. The council announces: 'About 31% of residents walk to work.'" },

  { id: 'h-t-lottery', use: 'teach', tier: 'clean', setting: 'community', topic: 'a computer draws addresses', name: 'The council’s lottery',
    text: "The council has a list of all 40,000 addresses in town. To choose the 800, a clerk asks a computer to draw 800 of the 40,000 numbers, like pulling tickets from a drum. Every address has the same chance of being drawn: 800 out of 40,000, which is 1 in 50. Nobody on the staff chooses which houses." },

  { id: 'h-t-poll', use: 'teach', tier: 'clean', setting: 'community', topic: 'two polls of the same city', name: 'The two polling firms',
    text: "A newspaper hires two polling firms. Each draws 1,000 adults by lottery from a list of every adult in the city, which has about 3 million, and each hears from nearly all 1,000. The first firm finds that 520 of its 1,000 approve of the mayor, which is 52 in 100. The second firm finds that 490 of its 1,000 do, which is 49 in 100." },

  { id: 'h-t-dummy', use: 'teach', tier: 'clean', setting: 'health', topic: 'a cold remedy and a dummy tablet', name: 'The cold remedy test',
    text: "A researcher wants to know whether a cold remedy shortens colds. She gives one group the remedy and a second group a tablet that looks, tastes and weighs the same but has nothing in it. Nobody, including the staff who hand out the tablets and the staff who ask about colds, knows who got which until the end." },

  /* ---------- A figure for one group ---------- */
  { id: 'h-library', use: 'teach', tier: 'clean', setting: 'community', topic: 'library card holders and last month’s books', name: 'The library card holders',
    text: "A library system has 90,000 card holders and wants to know how many borrowed a book last month. A computer drew 1,500 card numbers by lottery from the full list. Staff emailed all 1,500, then phoned and finally visited the ones who had not replied, until 1,380 had answered. Of those 1,380, 566 had borrowed a book last month, which is 41 in 100. The library announces: 'About 41% of our card holders borrowed a book last month.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 1,500 card numbers by lottery from the full list', 'until 1,380 had answered'], H1: 'About 41% of our card holders borrowed a book last month' } },

  { id: 'h-flu', use: 'teach', tier: 'clean', setting: 'health', topic: 'flu shots in a county', name: 'The flu shots',
    text: "A health department wants to know what share of the county's 61,000 adults had a flu shot this winter. It drew 900 adults by lottery from the list of every adult in the county and called each one up to five times, reaching 810. Of the 810, 486 had a flu shot, which is 60 in 100. The department says: 'About 60% of county adults had a flu shot this winter.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 900 adults by lottery from the list of every adult in the county', 'reaching 810'], H1: 'About 60% of county adults had a flu shot this winter' },
    segments: [
      { text: 'It drew 900 adults by lottery from the list of every adult in the county and called each one up to five times, reaching 810', note: 'That says how the people were chosen and reached. It is why the figure can be relied on, but it is not the claim itself.' },
      { text: 'Of the 810, 486 had a flu shot, which is 60 in 100', note: 'That is the figure the claim is built on. The claim is what the department says the figure shows.' },
      { text: 'About 60% of county adults had a flu shot this winter' }
    ] },

  { id: 'h-lunch', use: 'check', tier: 'clean', setting: 'learning', topic: 'school lunches from home',
    text: "A school district has 12,000 students and wants to know how many bring lunch from home. It drew 500 student ID numbers by lottery from its full roll, and a staff member asked each one in person, tracking down anyone who was absent until 470 had answered. Of the 470, 188 bring lunch from home, which is 40 in 100. The district says: 'About 40% of our students bring lunch from home.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['drew 500 student ID numbers by lottery from its full roll', 'until 470 had answered'], H1: 'About 40% of our students bring lunch from home' },
    segments: [
      { text: 'It drew 500 student ID numbers by lottery from its full roll, and a staff member asked each one in person, tracking down anyone who was absent until 470 had answered', note: 'That says how the figure was got. It tells you why the figure can be relied on, and it is not the claim.' },
      { text: 'Of the 470, 188 bring lunch from home, which is 40 in 100', note: 'That is the figure. The claim is what the district says the figure shows.' },
      { text: 'About 40% of our students bring lunch from home' }
    ],
    reason: { H1: 'The words after "The district says" are the claim, and the claim gives one figure about one group at one time. The sentences before it say how the figure was got, and they are what make it hold. They are not what the claim says.' } },

  { id: 'h-wait-avg', use: 'teach', tier: 'clean', setting: 'health', topic: 'a clinic’s average wait, timed once',  name: 'The clinic’s wait, drawn from last year',
    text: "A clinic saw 12,000 patients last year. To find out how long patients wait, a computer drew 400 of last year's visits by lottery from the booking system, and a clerk looked up the check-in time and the time the patient saw a doctor for every one of the 400. The average wait was 24 minutes. The clinic says: 'Last year the average wait for a visit was about 24 minutes.'",
    outcome: 'samp_ok', route: { S1: ['holds'], H1: ['group'] },
    cues: { S1: ['a computer drew 400 of last year\'s visits by lottery from the booking system', 'for every one of the 400'], H1: 'Last year the average wait for a visit was about 24 minutes' } },

  /* ---------- A rise or fall in one figure ---------- */
  { id: 'h-births', use: 'teach', tier: 'clean', setting: 'community', topic: 'births in a town, 2019 and 2023', name: 'The town’s births',
    text: "The town clerk's office records every birth to a mother who lives in the town, checking the register against hospital notices in the same way every year. The office has used the same form since 2015, and nobody's budget or pay depends on the number. It recorded 1,210 births in 2019 and 1,090 in 2023. The town newsletter says: 'Births in town fell from 1,210 in 2019 to 1,090 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records every birth to a mother who lives in the town', 'has used the same form since 2015, and nobody\'s budget or pay depends on the number'], H1: 'Births in town fell from 1,210 in 2019 to 1,090 in 2023' } },

  { id: 'h-meter', use: 'teach', tier: 'clean', setting: 'home', topic: 'a family’s electricity meter', name: 'The family’s meter',
    text: "A family reads the same electricity meter on the first of every month and writes the figure down. The meter has not been replaced, and nobody is paid or judged on the family's use. In January 2022 the family used 620 units of electricity, and in January 2023 it used 540. The family says: 'Our electricity use in January fell from 620 units in 2022 to 540 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['reads the same electricity meter on the first of every month', 'The meter has not been replaced'], H1: 'Our electricity use in January fell from 620 units in 2022 to 540 in 2023' },
    segments: [
      { text: "A family reads the same electricity meter on the first of every month and writes the figure down. The meter has not been replaced, and nobody is paid or judged on the family's use", note: 'That says how the figure is read each time. It is why the claim holds, but it is not the claim itself.' },
      { text: 'In January 2022 the family used 620 units of electricity, and in January 2023 it used 540', note: 'Those are the figures. The claim is what the family says they show.' },
      { text: 'Our electricity use in January fell from 620 units in 2022 to 540 in 2023' }
    ] },

  { id: 'h-pupils', use: 'check', tier: 'clean', setting: 'learning', topic: 'daily attendance at school',
    text: "A school records attendance every morning on the same register form for every class, and has done so since 2018. Nobody's pay, ranking or grant depends on the figure. In September, 94 in every 100 pupils were present on an average day. In November it was 91 in every 100. The school says: 'Average daily attendance fell from 94% in September to 91% in November.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['records attendance every morning on the same register form for every class', 'Nobody\'s pay, ranking or grant depends on the figure'], H1: 'Average daily attendance fell from 94% in September to 91% in November' },
    reason: { H1: 'The claim is {cue:H1}. It follows one figure, attendance, through two times and says that it fell. It sets it beside nothing else. The answer for one figure at one time would be wrong, because the claim gives two times.' } },

  { id: 'h-wait-change', use: 'teach', tier: 'clean', setting: 'health', topic: 'a clinic’s average wait, two years', name: 'The clinic’s wait, two years',
    text: "A clinic saw about 12,000 patients in each of 2022 and 2023. In both years the booking system recorded the check-in time and the time the patient saw a doctor for every visit, and nobody's pay depends on the number. The average wait was 31 minutes in 2022 and 24 minutes in 2023. The clinic says: 'The average wait fell from 31 minutes in 2022 to 24 minutes in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['recorded the check-in time and the time the patient saw a doctor for every visit', 'nobody\'s pay depends on the number'], H1: 'The average wait fell from 31 minutes in 2022 to 24 minutes in 2023' } },

  { id: 'h-gauge', use: 'teach', tier: 'clean', setting: 'community', topic: 'a reservoir through a summer', name: 'The reservoir through the summer',
    text: "A water district reads the same gauge at the same dam at 8 a.m. on the first of each month, and has done so since 2005. Nobody's pay depends on the reading. On 1 June the reservoir stood at 82% full, and on 1 September at 61% full. The district says: 'The reservoir fell from 82% full on 1 June to 61% full on 1 September.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['reads the same gauge at the same dam at 8 a.m. on the first of each month', 'Nobody\'s pay depends on the reading'], H1: 'The reservoir fell from 82% full on 1 June to 61% full on 1 September' } },

  { id: 'h-fire-calls', use: 'teach', tier: 'varied', setting: 'community', topic: 'fire calls from one town, two years', name: 'The fire calls',
    text: "A fire department logs every call it answers on the same form, and the number is not part of anyone's pay or budget. It answered 410 calls from the town of Ridley in 2022 and 380 in 2023. It says: 'Calls from Ridley fell from 410 in 2022 to 380 in 2023.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: ['logs every call it answers on the same form', 'the number is not part of anyone\'s pay or budget'], H1: 'Calls from Ridley fell from 410 in 2022 to 380 in 2023' },
    segments: [
      { text: "A fire department logs every call it answers on the same form, and the number is not part of anyone's pay or budget", note: 'That says how the figure is counted. It is not the claim, and it does not show what is set beside what.' },
      { text: 'It answered 410 calls from the town of Ridley in 2022 and 380 in 2023', note: 'Those are the two numbers. The claim is what the department says they show.' },
      { text: 'Calls from Ridley fell from 410 in 2022 to 380 in 2023' }
    ] }
]);
