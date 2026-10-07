// Statistical Claims, Unit One: cases shown inside cards, parts one and two (the third and fourth answers and the look-alike pair of the third and fourth).
// Field guide: see u1.cases-teach-1.js.

FC.cases('stats', 'u1', [

  /* ---------- What the figure is set beside ---------- */
  { id: 'gate-burglaries', use: 'teach', tier: 'clean', setting: 'community', topic: 'burglaries up by a percentage on one road', name: 'The burglaries',
    text: "A neighborhood newsletter says: 'Burglaries on Elm Road are up 300% this month!' It does not say how many burglaries there were last month or this month. The police log counts every burglary the same way each month.",
    route: { S1: ['compare'] },
    cues: { S1: 'Burglaries on Elm Road are up 300% this month' } },

  { id: 'gate-tutors', use: 'check', tier: 'clean', setting: 'learning', topic: 'two tutors and their pass rates',
    text: "A tutoring agency's website compares two tutors: 90 of Ms. Lee's 100 students passed the exam, and 80 of Mr. Cho's 100. It says: 'Ms. Lee is the better tutor.' It does not mention that Mr. Cho takes students who have already failed twice.",
    route: { S1: ['compare'] },
    cues: { S1: 'Mr. Cho takes students who have already failed twice' },
    segments: [
      { text: "A tutoring agency's website compares two tutors: 90 of Ms. Lee's 100 students passed the exam, and 80 of Mr. Cho's 100.", note: 'Those are the totals, and they are given in full. You are asked what they leave out.' },
      { text: "It says: 'Ms. Lee is the better tutor.'", note: 'That is the claim. What is wrong with it is what the totals leave out.' },
      { text: 'It does not mention that Mr. Cho takes students who have already failed twice.' }
    ],
    reason: { S1: 'The totals treat the tutors as if they had the same students, but Mr. Cho takes the hardest ones: {cue:S1}.' },
    not: { outcome: 'cause', why: 'The claim ranks the tutors without saying one thing caused another. The trouble is earlier: the totals hide a different mix of students.' } },

  /* ---------- What the claim says caused what ---------- */
  { id: 'gate-music', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a music class and math scores', name: 'The music class',
    text: "At Kent High School, the 120 students who take the music class average 71 on the math exam. The 380 who do not take it average 62. The principal says: 'Music lessons raise math scores.' The class costs $30 a term, and nearly all of the music students' families also pay for extra math coaching.",
    route: { S1: ['cause'] },
    cues: { S1: 'Music lessons raise math scores' } },

  { id: 'gate-bikelane', use: 'check', tier: 'clean', setting: 'community', topic: 'a bike lane and the fall in accidents',
    text: "The city of Dunmore painted a bike lane on Pine Street. In the year after, bike accidents on Pine Street fell from 90 to 60. The mayor says: 'The new bike lane cut accidents by a third.' The year before the lane was the worst year for accidents on Pine Street on record.",
    route: { S1: ['cause'] },
    cues: { S1: 'The new bike lane cut accidents by a third' },
    reason: { S1: 'The mayor says this: {cue:S1}. But the year before was the worst on record, so accidents could have fallen with or without a lane.' },
    not: { outcome: 'compare', why: 'The numbers, 90 and 60, are given and counted the same way both years. The trouble is the step from the fall to its cause.' },
    miss: { compare: 'Nothing is left out: both years are given in full. The trouble is one part later, in the mayor saying the lane made the difference.' } },

  /* ---------- The look-alike pair: same mentoring program, a percentage or a cause ---------- */
  { id: 'gate-mentor-percent', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a mentoring program and a percentage',
    text: "A leaflet for the Bridge mentoring program says: 'Students in the program are 50% more likely to graduate.' It does not say how many students graduate with the program or without it.",
    route: { S1: ['compare'] },
    cues: { S1: 'Students in the program are 50% more likely to graduate' } },

  { id: 'gate-mentor-groups', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a mentoring program and who joined',
    text: "The Bridge mentoring program reports that 90 of the 100 students who joined it graduated, and 60 of the 100 who did not join graduated. The leaflet says: 'Mentoring makes the difference.' Students joined by asking to, and the students who ask are mostly the ones already doing well.",
    route: { S1: ['cause'] },
    cues: { S1: 'Mentoring makes the difference' } }
]);
