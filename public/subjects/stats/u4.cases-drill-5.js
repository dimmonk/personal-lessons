// Statistical Claims, Unit Four: the misleading group of the whole-route stage (each is built to bring a different teaching case
// to mind first), the reverse items of stage two (one for each name), and the claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the names sounds like (voice).
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. ask.type 'missing' asks
// "what would you need to see before this name could be used?"; ask.type 'option' asks the key's question of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('stats', 'u4', [

  /* ---------- Group four (misleading): the story points at another name ---------- */
  { id: 'm4-rt-scanner', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a school with card scanners at the doors', echo: 'meas-scale',
    text: "A school replaced its roll call with a card scanner at each classroom door this year, and reports: 'Attendance rose from 90% to 97% after the new scanners went in.' Both the roll call and the scanner count a pupil as present if they are in the room at 9:00. Teachers are ranked each term by their class's attendance, and teachers hold the pupils' cards and scan them at the door. The principal's own head count in 20 rooms found 90 of every 100 pupils present in both years.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "Teachers are ranked each term by their class's attendance, and teachers hold the pupils' cards and scan them at the door",
            M1: "Teachers are ranked each term by their class's attendance, and teachers hold the pupils' cards and scan them at the door" },
    reason: { S1: 'The attendance figure can rise with no more pupils in the room: {cue:S1}. The head count found 90 in every 100 in both years, and the figure went from 90 to 97.',
              M1: 'The people ranked on the figure also make it: {cue:M1}. A teacher can scan the card of a pupil who is not there.' },
    not: { outcome: 'defshift', why: 'The new scanner counts a pupil as present by the same test as the roll call, so how it is counted did not change. The story of a new machine is not what moves the figure; the teachers’ hold on it is.' },
    wouldChange: 'If the scanner counted a pupil present from the moment their card crossed the school gate, and not from 9:00 in the room, the counting would have changed, and the case would be {o:defshift}.' },

  { id: 'm4-rt-wardens', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a parking chief who added a second round', echo: 'meas-store-guards',
    text: "A parking authority's chief says: 'Tickets rose from 20,000 to 30,000 after I told our wardens to add a second daily walk along half of our streets. Drivers are parking worse.' The wardens are paid a flat wage, and nothing is counted per warden. A ticket is written by the same standard as before. Cars checked went from 1,000,000 a year to 1,500,000, which is 2 tickets for every 100 cars checked, in both years.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "after I told our wardens to add a second daily walk along half of our streets",
            M1: "after I told our wardens to add a second daily walk along half of our streets" },
    reason: { S1: 'The count of tickets can rise with no more bad parking: {cue:S1}. 2 in every 100 of 1,000,000 cars is 20,000 tickets; 2 in every 100 of 1,500,000 is 30,000.',
              M1: 'More effort went into finding it: {cue:M1}. The standard for a ticket is the same, and the share found among those checked stayed at 2 in 100.' },
    not: { outcome: 'proxy', why: 'The wardens’ pay does not depend on the number of tickets, so they gain nothing from raising it. A figure that staff write down may bring staff who are paid on it to mind, but nobody is paid on this one.' },
    wouldChange: 'If each warden’s bonus rose with the tickets they wrote and they decided what to ticket, the figure could also be pushed, and the case would show more than one way for it to move.' },

  { id: 'm4-rt-regulator', use: 'drill', tier: 'misleading', setting: 'money', topic: 'an energy firm and a regulator’s complaint definition', echo: 'meas-parcels',
    text: "An energy firm's executives get a bonus if complaints fall below 5,000 a year. The firm reports: 'Complaints fell from 8,000 to 4,500.' From January the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days. Complaints about such short delays were 3,500 last year and 3,500 this year, and complaints of every other kind were 4,500 in both years.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days",
            M1: "the regulator, which sets what counts as a complaint for every energy firm and pays no one by the figure, stopped counting complaints about billing delays of under 5 days" },
    reason: { S1: 'The count fell with no fewer complaints: {cue:S1}. Counted the old way, this year is 4,500 + 3,500 = 8,000 again; counted the new way, last year was 4,500.',
              M1: 'What counts as a complaint changed, and the firm had no say in it: {cue:M1}. The bonus is the vivid part of the story, but the executives did nothing to the figure; the definition was narrowed for them.' },
    not: { outcome: 'proxy', why: 'The executives are paid on the figure, which is why the case can look like {o:proxy}. But the firm did not choose the new definition; the regulator did, and complaints of every other kind did not move.' },
    wouldChange: 'If the firm itself had decided to stop counting the short-delay complaints in order to win the bonus, the case would show the firm acting on the figure to win its bonus, and the answer would be {a:M1.pushed}.' },

  { id: 'm4-rt-tutoring', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a tutoring center bonus on exam passes', echo: 'meas-loans-pushed',
    text: "A tutoring center pays each tutor a $50 bonus for every student who passes the state reading exam. The state grades each exam without knowing who the student's tutor was, and no tutor sees an exam before it is graded. Of the center's 200 students, 120 passed last year and 150 passed this year. The exam and the pass mark were the same in both years. The center's report says: 'Passes rose from 120 to 150.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The state grades each exam without knowing who the student's tutor was, and no tutor sees an exam before it is graded",
            H1: "Passes rose from 120 to 150" },
    reason: { S1: 'Every part holds, even with a bonus in the story: {cue:S1}. The tutors are paid on passes, but they cannot touch the grading, so there is no way to raise the figure without more students passing.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. Arithmetic: 150 − 120 = 30 more passes. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'proxy', why: 'The tutors are paid on the figure, which is why the case can look like {o:proxy}. But a way to raise it without more passes is missing: the state grades the exams blind.' },
    wouldChange: 'If the tutors graded the exams themselves, they could raise the figure without more passes, and the case would be {o:proxy}.' },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'm4-rev-proxy', use: 'drill', kind: 'reverse', outcome: 'proxy', expect: 'find',
    options: [
      { text: 'The staff who are paid on the count are the ones who record it.', voice: 'proxy' },
      { text: 'The form used to record it was replaced in the middle of the year.', voice: 'defshift' },
      { text: 'Twice as many people were tested this year as last year.', voice: 'detection' },
      { text: 'The same meter counted every time, and nobody is paid on the reading.', voice: 'meas_ok' }
    ],
    why: 'That detail shows people who gain from a higher figure and who make it themselves, so they could raise it without more of the real thing.' },

  { id: 'm4-rev-defshift', use: 'drill', kind: 'reverse', outcome: 'defshift', expect: 'hear',
    options: [
      { text: '"Counting only the ones paid last month, the figure fell by half."', voice: 'defshift' },
      { text: '"Our team has hit its target every month since the bonus began."', voice: 'proxy' },
      { text: '"We tested twice as many people, so we found more."', voice: 'detection' },
      { text: '"The gauge has been read the same way, at the same hour, for years."', voice: 'meas_ok' }
    ],
    why: 'It says the counting changed, in what counts or in the tool that counts, which could move the figure on its own.' },

  { id: 'm4-rev-detection', use: 'drill', kind: 'reverse', outcome: 'detection', expect: 'hear',
    options: [
      { text: '"The figure changed when the new meter went in."', voice: 'defshift' },
      { text: '"Since we added six more inspectors, we are finding much more."', voice: 'detection' },
      { text: '"Everyone on the team is paid by the number on the list."', voice: 'proxy' },
      { text: '"We checked the same ones in the same way, and fewer were found."', voice: 'meas_ok' }
    ],
    why: 'It says more effort went into finding the thing: more inspectors, more tests, more cameras. A count of what is found rises with the looking.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'm4-claim-demo', use: 'claim',
    text: '"Every agent hit the 95% target this month, so our service has never been better."',
    ask: { type: 'option', step: 'M1', answer: 'pushed' },
    fault: 'The claim reads the figure as the service. The agents are paid on the figure, and nothing in the claim says how it is counted or who counts it. If the agents record it themselves, they can reach 95% by recording it, with no better service behind it.',
    corrected: 'Every agent hit the 95% target this month. That is {a:M1.pushed}: a figure the agents are paid on and could raise without better service. To say the service has improved, I would need a count that nobody is paid on, such as customers’ own reports of whether the problem was solved.' },

  { id: 'm4-claim-ufo', use: 'claim',
    text: '"Sightings of strange lights in the sky have tripled since the film came out. Something is going on up there."',
    ask: { type: 'missing', name: 'detection' },
    fault: 'The claim reads a rise in the number of sightings as more lights in the sky. A film makes more people look up, and more people know where to report what they see, so the number of reports rises with the looking. It says nothing about what happened in the sky.',
    corrected: 'Sightings of strange lights in the sky have tripled since the film came out. That is a count of what people found when they looked, and many more people are looking. For it to show more lights, I would need to see the count among a fixed number of people looking, or a count made with the same effort at both ends.' },

  { id: 'm4-claim-complaints', use: 'claim',
    text: '"Complaints fell from 600 to 400 once the bank started logging only the written ones. Customers are clearly happier."',
    ask: { type: 'option', step: 'M1', answer: 'newrule' },
    fault: 'The claim itself says what changed. The bank counted every complaint before and counts only written ones now, so the two figures count different things. Written complaints were 350 of the 600 last year, so on the old count nothing fell: the figure of 600 includes 250 that this year’s count would not log.',
    corrected: 'Complaints fell from 600 to 400 once the bank started logging only the written ones. That is {a:M1.newrule}. To say customers are happier, I would need the complaints counted the same way in both years: 350 written complaints last year against 400 this year.' },

  { id: 'm4-claim-cheated', use: 'claim',
    text: '"The factory\'s output rose 20% after the bonus began, so the workers must have cheated."',
    ask: { type: 'missing', name: 'proxy' },
    fault: 'A bonus and a rise do not show gaming. The name needs a way for the workers to raise the figure without making more, and the claim does not give one. If the output is counted by someone else on the shipping dock, the rise may be the workers making more, and the bonus may simply have worked.',
    corrected: 'The factory\'s output rose 20% after the bonus began. That is {a:M1.pushed} only if the workers record the output themselves, or could raise the count without making more. If an outside count shows 20% more finished goods leaving the dock, the rise is real.' },

  { id: 'm4-claim-cameras', use: 'claim',
    text: '"The number of speeding tickets has gone up every year since we added cameras, so drivers are getting worse."',
    ask: { type: 'option', step: 'M1', answer: 'looked' },
    fault: 'The claim reads the number of tickets as how often drivers speed. Each camera adds a place where speeding is found, so the count of tickets rises with the cameras even when each camera catches the same share of cars. The claim never says how many cars the cameras checked.',
    corrected: 'The number of speeding tickets has gone up every year since we added cameras. That is {a:M1.looked}. To say drivers are getting worse, I would need the share of cars caught at each camera, year by year: if that share is the same, only the looking has grown.' }
]);
