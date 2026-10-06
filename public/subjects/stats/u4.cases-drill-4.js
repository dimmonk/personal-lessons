// Statistical Claims, Unit Four: drill cases for the whole-claim stage, last group (misleading: each is built to bring a different teaching case to mind first).

FC.cases('stats', 'u4', [

  { id: 'm4-rt-scanner', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a school with card scanners at the doors', echo: 'meas-lab-analyzer',
    text: "A school replaced its roll call with a card scanner at each classroom door this year, and reports: 'Attendance rose from 90% to 97% after the new scanners went in.' Both the roll call and the scanner count a student as present if they are in the room at 9:00. Teachers are ranked each term by their class's attendance, and teachers hold the students' cards and scan them at the door. The principal's own head count in 20 rooms found 90 of every 100 students present in both years.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "Teachers are ranked each term by their class's attendance, and teachers hold the students' cards and scan them at the door",
            M1: "Teachers are ranked each term by their class's attendance, and teachers hold the students' cards and scan them at the door" },
    reason: { S1: 'The attendance figure can rise with no more students in the room: {cue:S1}. The head count found 90 in every 100 in both years, and the figure went from 90 to 97.',
              M1: 'The people ranked on the figure also make it: {cue:M1}. A teacher can scan the card of a student who is not there.' },
    not: { outcome: 'defshift', why: 'The new scanner counts a student as present by the same test as the roll call, so how it is counted did not change. The story of a new machine is not what moves the figure; the teachers’ hold on it is.' } },

  { id: 'm4-rt-regulator', use: 'drill', tier: 'misleading', setting: 'money', topic: 'an energy firm and a regulator’s complaint definition', echo: 'meas-parcels',
    text: "An energy firm's executives get a bonus if complaints fall below 5,000 a year. The firm reports: 'Complaints fell from 8,000 to 4,500.' From January the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days. Complaints about such short delays were 3,500 last year and 3,500 this year, and complaints of every other kind were 4,500 in both years.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days",
            M1: "the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days" },
    reason: { S1: 'The count fell with no fewer complaints: {cue:S1}. Counted the old way, this year is 4,500 + 3,500 = 8,000 again; counted the new way, last year was 4,500.',
              M1: 'What counts as a complaint changed, and the firm had no say in it: {cue:M1}. The bonus is the vivid part of the story, but the executives did nothing to the figure; the definition was narrowed for them.' },
    not: { outcome: 'proxy', why: 'The executives are paid on the figure, which is why the case can look like {o:proxy}. But the firm did not choose the new definition; the regulator did, and complaints of every other kind did not move.' } },

  { id: 'm4-rt-tutoring', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a tutoring center bonus on exam passes', echo: 'meas-bus-logged',
    text: "A tutoring center pays each tutor a $50 bonus for every student who passes the state reading exam. The state grades each exam without knowing who the student's tutor was, and no tutor sees an exam before it is graded. Of the center's 200 students, 120 passed last year and 150 passed this year. The exam and the pass mark were the same in both years. The center's report says: 'Passes rose from 120 to 150.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The state grades each exam without knowing who the student's tutor was, and no tutor sees an exam before it is graded",
            H1: "Passes rose from 120 to 150" },
    reason: { S1: 'Every part holds, even with a bonus in the story: {cue:S1}. The tutors are paid on passes, but they cannot touch the grading, so there is no way to raise the figure without more students passing.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. Arithmetic: 150 − 120 = 30 more passes. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'proxy', why: 'The tutors are paid on the figure, which is why the case can look like {o:proxy}. But a way to raise it without more passes is missing: the state grades the exams blind.' } }
]);
