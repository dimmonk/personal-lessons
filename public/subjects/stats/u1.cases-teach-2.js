// Statistical Claims, Unit One: cases shown inside cards, parts three and four (the third and fourth answers and their look-alike pairs).
// Field guide: see u1.cases-teach-1.js.

FC.cases('stats', 'u1', [

  /* ---------- What the figure is set beside ---------- */
  { id: 'gate-burglaries', use: 'teach', tier: 'clean', setting: 'community', topic: 'burglaries up by a percentage on one road', name: 'The burglaries',
    text: "A neighborhood newsletter says: 'Burglaries on Elm Road are up 300% this month!' It does not say how many burglaries there were last month or this month. The police log counts every burglary the same way each month.",
    route: { S1: ['compare'] },
    cues: { S1: 'Burglaries on Elm Road are up 300% this month' } },

  { id: 'gate-homekit', use: 'teach', tier: 'clean', setting: 'health', topic: 'a home test for a rare illness', name: 'The home test',
    text: "A pharmacy sells a home test for a rare illness. The box says: 'Right 99 times in 100.' Jun tests positive, and the leaflet inside says: 'A positive result means you very probably have the illness.' It does not say how few people have the illness.",
    route: { S1: ['compare'] },
    cues: { S1: 'Right 99 times in 100' },
    segments: [
      { text: 'A pharmacy sells a home test for a rare illness.', note: 'That tells you the illness is rare, which matters. The words that show the form the figure is given in are in the next sentence.' },
      { text: "The box says: 'Right 99 times in 100.'" },
      { text: "Jun tests positive, and the leaflet inside says: 'A positive result means you very probably have the illness.'", note: 'That is how the figure is used. It matters, but you were asked for the form the figure is given in.' },
      { text: 'It does not say how few people have the illness.', note: 'That is what is left out, and it matters. The form the figure is given in, though, is the one on the box.' }
    ] },

  { id: 'gate-tutors', use: 'check', tier: 'clean', setting: 'learning', topic: 'two tutors and their pass rates',
    text: "A tutoring agency's website compares two tutors: 90 of Ms. Lee's 100 students passed the exam, and 80 of Mr. Cho's 100. It says: 'Ms. Lee is the better tutor.' It does not mention that Mr. Cho takes students who have already failed twice.",
    route: { S1: ['compare'] },
    cues: { S1: 'Mr. Cho takes students who have already failed twice' },
    segments: [
      { text: "A tutoring agency's website compares two tutors: 90 of Ms. Lee's 100 students passed the exam, and 80 of Mr. Cho's 100.", note: 'Those are the totals, and they are given in full. What you are asked for is what they leave out.' },
      { text: "It says: 'Ms. Lee is the better tutor.'", note: 'That is the claim. What is wrong with it is what the totals leave out, which comes next.' },
      { text: 'It does not mention that Mr. Cho takes students who have already failed twice.' }
    ],
    reason: { S1: 'The two totals are set side by side as if the tutors had the same kind of student, and the case shows they did not: {cue:S1}. Mr. Cho is given the hardest students, so his total can be lower with the better teaching. The claim leaves out what each total is made of.' },
    not: { outcome: 'cause', why: 'The claim ranks the tutors. It does not say that one thing caused another, and the trouble is earlier: the two totals hide a different mix of students.' } },

  /* ---------- What the claim says caused what ---------- */
  { id: 'gate-music', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a music class and math scores', name: 'The music class',
    text: "At Kent High School, the 120 pupils who take the music class average 71 on the math exam. The 380 who do not take it average 62. The principal says: 'Music lessons raise math scores.' The class costs $30 a term, and nearly all of the music pupils' families also pay for extra math coaching.",
    route: { S1: ['cause'] },
    cues: { S1: 'Music lessons raise math scores' } },

  { id: 'gate-vitamin', use: 'teach', tier: 'clean', setting: 'health', topic: 'a daily vitamin and colds', name: 'The vitamin',
    text: "A health magazine reports on 2,000 adults followed for a year. Those who took a daily vitamin caught an average of 2 colds, and those who did not caught 3. 'A daily vitamin protects you from colds,' it says. The people who took the vitamin also exercised more and smoked less.",
    route: { S1: ['cause'] },
    cues: { S1: 'A daily vitamin protects you from colds' },
    segments: [
      { text: 'A health magazine reports on 2,000 adults followed for a year. Those who took a daily vitamin caught an average of 2 colds, and those who did not caught 3.', note: 'Those are the figures. They are where the claim starts, and the words that make the claim come after them.' },
      { text: "'A daily vitamin protects you from colds,' it says." },
      { text: 'The people who took the vitamin also exercised more and smoked less.', note: 'That is another way to explain the result, and it matters. But you were asked for the words that say one thing made the other happen. The other way is the check on them.' }
    ] },

  { id: 'gate-bikelane', use: 'check', tier: 'clean', setting: 'community', topic: 'a bike lane and the fall in accidents',
    text: "The city of Dunmore painted a bike lane on Pine Street. In the year after, bike accidents on Pine Street fell from 90 to 60. The mayor says: 'The new bike lane cut accidents by a third.' The year before the lane was the worst year for accidents on Pine Street on record.",
    route: { S1: ['cause'] },
    cues: { S1: 'The new bike lane cut accidents by a third' },
    reason: { S1: 'The figures are given in full and counted the same way in both years, so the first three parts hold. Then the mayor says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the same result: the year before was the worst on record, so accidents could have fallen from there with or without a lane.' },
    not: { outcome: 'compare', why: 'The numbers are given, 90 and 60, and both years are counted the same way, so nothing the claim needs beside the figure is left out. The trouble is the step the mayor takes from the fall to its cause.' },
    miss: { compare: 'The figures are given in full, so the claim leaves nothing out of the comparison of one year with the other. The trouble comes one part later: the mayor says the lane made the difference, and the case shows another way to explain the fall.' } },

  /* ---------- The look-alike pair: same town, same fall in bike thefts ---------- */
  { id: 'gate-thefts-receipt', use: 'teach', tier: 'clean', setting: 'community', topic: 'bike thefts and a receipt rule',
    text: "The police in the town of Brandon report: 'Bike thefts fell from 400 last year to 250 this year.' In January the police began to record a theft only if the owner brings the receipt for the bike to the station.",
    route: { S1: ['measure'] },
    cues: { S1: 'began to record a theft only if the owner brings the receipt for the bike to the station' } },

  { id: 'gate-thefts-percent', use: 'teach', tier: 'clean', setting: 'community', topic: 'bike thefts down by a percentage',
    text: "The council of the town of Brandon says: 'Bike thefts are down 37% this year.' It does not say how many bikes were stolen in either year. The police have recorded every theft the same way in both years.",
    route: { S1: ['compare'] },
    cues: { S1: 'Bike thefts are down 37% this year' } },

  /* ---------- The look-alike pair: same mentoring program, a percentage or a cause ---------- */
  { id: 'gate-mentor-percent', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a mentoring program and a percentage',
    text: "A leaflet for the Bridge mentoring program says: 'Pupils in the program are 50% more likely to graduate.' It does not say how many pupils graduate with the program or without it.",
    route: { S1: ['compare'] },
    cues: { S1: 'Pupils in the program are 50% more likely to graduate' } },

  { id: 'gate-mentor-groups', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a mentoring program and who joined',
    text: "The Bridge mentoring program reports that 90 of the 100 pupils who joined it graduated, and 60 of the 100 who did not join graduated. The leaflet says: 'Mentoring makes the difference.' Pupils joined by asking to, and the pupils who ask are mostly the ones already doing well.",
    route: { S1: ['cause'] },
    cues: { S1: 'Mentoring makes the difference' } },

  /* ---------- The look-alike pair: same coaching firm, a survey or a cause ---------- */
  { id: 'gate-course-survey', use: 'teach', tier: 'clean', setting: 'work', topic: 'a coaching firm and a follow-up survey', name: 'The coaching survey',
    text: "A career-coaching firm's brochure says: 'Our clients now earn $15,000 a year more than before they came.' The figure is the average raise for the 60 clients who answered the firm's follow-up survey. The firm has had 400 clients.",
    route: { S1: ['counted'] },
    cues: { S1: "the average raise for the 60 clients who answered the firm's follow-up survey" } },

  { id: 'gate-course-chosen', use: 'teach', tier: 'clean', setting: 'work', topic: 'a coaching firm and clients who chose it',
    text: "A career-coaching firm's brochure says: 'Our coaching earns you $10,000 more a year.' All 400 of its clients answered the follow-up survey, and their raises averaged $15,000. The raises of 400 other workers of the same age and job averaged $5,000. Clients paid for the coaching themselves, and most had already decided to change jobs.",
    route: { S1: ['cause'] },
    cues: { S1: 'Our coaching earns you $10,000 more a year' } }
]);
