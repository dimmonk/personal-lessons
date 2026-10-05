// Statistical Claims, Unit Four (What the number counts): cases shown inside cards, first half.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A branch unit's cases carry route: { S1: [gate answer], M1: [answer] }. A claim with nothing wrong carries the gate's
// "holds" answer and the sound branch's answer instead, and its outcome is one that an earlier unit teaches (the
// look-alike pairs set each way a figure can be moved beside the sound claim it is most often taken for).
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it in one style.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// People, firms and studies are invented. No case asserts a contested fact about the real world.

FC.cases('stats', 'u4', [

  /* ---------- Gaming the target: the first case, the second, the check ---------- */
  { id: 'meas-parcels', use: 'teach', tier: 'clean', setting: 'work', topic: 'delivery drivers and a bonus on a tap', name: 'The delivery bonus',
    text: "A delivery firm gives each driver a $200 bonus when 95 of every 100 of that driver's parcels are marked 'delivered on time', and a driver marks a parcel delivered by tapping a button on a handheld. Last quarter 80 of every 100 parcels were marked on time. This quarter 96 of every 100 were, and the firm's report says: 'On-time delivery is up from 80% to 96%.' Customers' own confirmation messages, which the bonus does not use, show 79 of every 100 parcels reaching them on time last quarter and 79 of every 100 this quarter.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "a driver marks a parcel delivered by tapping a button on a handheld",
            M1: "gives each driver a $200 bonus when 95 of every 100 of that driver's parcels are marked 'delivered on time', and a driver marks a parcel delivered by tapping a button on a handheld" } },

  { id: 'meas-school-test', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a language school and its own end-of-course test', name: 'The language school',
    text: "A language school pays its teachers a bonus when its average score on its own end-of-course test goes up, and the teachers decide what the last eight weeks of each course are spent on. The average was 62 out of 100 last year and is 78 this year. In those eight weeks the teachers now practice the twenty kinds of question that the test always uses. When the school gave the same students a different test of the same language, with questions they had not practiced, the average was 62 for last year's students and 63 for this year's.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "the teachers decide what the last eight weeks of each course are spent on",
            M1: "pays its teachers a bonus when its average score on its own end-of-course test goes up, and the teachers decide what the last eight weeks of each course are spent on" },
    segments: [
      { text: "A language school pays its teachers a bonus when its average score on its own end-of-course test goes up, and the teachers decide what the last eight weeks of each course are spent on." },
      { text: "The average was 62 out of 100 last year and is 78 this year.", note: 'These are the figures that rose. They do not show who gains when the figure rises, or whether those people could raise it another way.' },
      { text: "In those eight weeks the teachers now practice the twenty kinds of question that the test always uses.", note: 'This shows how the figure was raised. The words asked for are the ones that show the teachers gain from a higher figure and are free to raise it this way. They come in the first sentence.' },
      { text: "When the school gave the same students a different test of the same language, with questions they had not practiced, the average was 62 for last year's students and 63 for this year's.", note: 'This is a second test, and it tells you whether the real thing moved. It does not tell you what made the first figure rise.' }
    ] },

  { id: 'meas-bugs', use: 'check', tier: 'clean', setting: 'work', topic: 'a software team paid for each bug report closed', name: 'The bug bonus',
    text: "A software company gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports. The team closed 40 reports in March and 120 in May. In May it began writing one report for each page a problem shows up on, where before it wrote one report for the whole problem. The testers, who are paid a flat wage, count the different problems in the product themselves, and they counted 25 in March and 25 in May.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { M1: "gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports" },
    segments: [
      { text: "A software company gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports." },
      { text: "The team closed 40 reports in March and 120 in May.", note: 'These are the figures that rose, from 40 to 120. They do not show who gains from the rise or how it could be raised.' },
      { text: "In May it began writing one report for each page a problem shows up on, where before it wrote one report for the whole problem.", note: 'This shows how the figure was raised. The words asked for are the ones that show the team gains from a higher figure and decides how it is made. They come in the first sentence.' },
      { text: "The testers, who are paid a flat wage, count the different problems in the product themselves, and they counted 25 in March and 25 in May.", note: 'This is a count of the real thing, made by people who gain nothing from it. It shows whether the real thing moved, and not what made the figure move.' }
    ],
    reason: { M1: 'The team is paid for each report it closes, and it decides how a problem is split into reports: {cue:M1}. Splitting one problem into three reports raises the figure from 40 to 120 with no more problems fixed, and the testers’ count of different problems stayed at 25.' } },

  /* ---------- Gaming the target beside its sound look-alike: the same bus company ---------- */
  { id: 'meas-bus-logged', use: 'teach', tier: 'clean', setting: 'community', topic: 'bus drivers and an on-time button', name: 'The bus drivers’ button',
    text: "A city bus company gives its drivers a bonus when at least 90 of every 100 of their trips are logged 'on time'. At the end of each trip the driver presses 'on time' or 'late' on a panel. Over the past year the share of trips logged on time rose from 78 of every 100 to 90 of every 100, and the company's report says: 'Our buses are now on time 90% of the time.'",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "At the end of each trip the driver presses 'on time' or 'late' on a panel",
            M1: ["gives its drivers a bonus when at least 90 of every 100 of their trips are logged 'on time'", "the driver presses 'on time' or 'late' on a panel"] } },

  { id: 'meas-bus-gps', use: 'teach', tier: 'clean', setting: 'community', topic: 'bus trips timed by satellite',  name: 'The bus depot’s clock',
    text: "A city bus company's depot computer logs the time each bus reaches each stop, from the bus's satellite position, and sets it beside the published timetable. The timetable did not change this year. No driver or manager is paid or ranked on the figure, and drivers cannot alter it. Over the past year the share of trips on time rose from 78 of every 100 to 90 of every 100, and the company's report says: 'Our buses are now on time 90% of the time.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "No driver or manager is paid or ranked on the figure, and drivers cannot alter it",
            H1: "rose from 78 of every 100 to 90 of every 100" } },

  /* ---------- A change in how it is counted: the first case, the second (a tool), the check ---------- */
  { id: 'meas-jobless', use: 'teach', tier: 'clean', setting: 'community', topic: 'a job office and a narrower count of the jobless', name: 'The jobless count',
    text: "A city's job office reports: 'Joblessness fell from 9% to 6% this year.' Last year the office counted as jobless every adult who had no job and had looked for work in the past twelve months. This year it counts only adults who have no job and have looked for work in the past four weeks. Of the same 1,000 adults in the city who want work, 90 were counted jobless last year and 60 this year. The number of those 1,000 with no job at all was 90 last year and 90 this year.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "This year it counts only adults who have no job and have looked for work in the past four weeks",
            M1: "Last year the office counted as jobless every adult who had no job and had looked for work in the past twelve months. This year it counts only adults who have no job and have looked for work in the past four weeks" } },

  { id: 'meas-scale', use: 'teach', tier: 'clean', setting: 'health', topic: 'a gym and a new body-fat scale', name: 'The gym scale',
    text: "A gym tells its members: 'Average body fat among our members fell from 24% to 21% this year.' In March the gym replaced its body-fat scale with a new model. On the day the new scale arrived, 80 members stood on both scales: the old one read 24% on average and the new one read 21%. The members' weights, which both scales measure in the same way, did not change.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In March the gym replaced its body-fat scale with a new model",
            M1: "In March the gym replaced its body-fat scale with a new model" },
    segments: [
      { text: "A gym tells its members: 'Average body fat among our members fell from 24% to 21% this year.'", note: 'This is the claim and its figure. The words asked for say what changed in how the figure is made, and they come after it.' },
      { text: "In March the gym replaced its body-fat scale with a new model." },
      { text: "On the day the new scale arrived, 80 members stood on both scales: the old one read 24% on average and the new one read 21%.", note: 'This shows how far apart the two scales are. It comes after the words asked for, which say what changed.' },
      { text: "The members' weights, which both scales measure in the same way, did not change.", note: 'This tells you the members themselves did not change. It does not say what changed in how the figure is made.' }
    ] },

  { id: 'meas-complaints', use: 'check', tier: 'clean', setting: 'money', topic: 'a bank that logs only written complaints', name: 'The bank complaints',
    text: "A bank reports: 'Customer complaints fell from 600 to 400 this year.' Until last year the bank logged every complaint, whether made by phone, in person or in writing. This year it logs only complaints made in writing. Last year 350 of the 600 complaints were written ones, and this year 400 are.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { M1: "Until last year the bank logged every complaint, whether made by phone, in person or in writing. This year it logs only complaints made in writing" },
    reason: { M1: 'The bank counts differently this year: {cue:M1}. Counted last year’s way, this year’s complaints would be more than 400, because phone and in-person ones are no longer logged. Counted this year’s way, last year’s were 350, so written complaints rose from 350 to 400 while the figure fell from 600 to 400.' } },

  /* ---------- A change in how it is counted beside its sound look-alike: the same ski area ---------- */
  { id: 'meas-snow-moved', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a ski area and a measuring pole in a hollow', name: 'The ski area’s moved pole',
    text: "A ski area reports: 'Average snow depth in February rose from 90 cm to 120 cm over the past ten years.' In year six the ski area moved its measuring pole from an open slope to a hollow behind the lodge, where wind drifts snow. A second pole left on the open slope read 91 cm in the first February and 92 cm in the tenth.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "moved its measuring pole from an open slope to a hollow behind the lodge, where wind drifts snow",
            M1: "moved its measuring pole from an open slope to a hollow behind the lodge, where wind drifts snow" } },

  { id: 'meas-snow-same', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a ski area and one pole on an open slope', name: 'The ski area’s one pole',
    text: "A ski area reports: 'Average snow depth in February rose from 90 cm to 120 cm over the past ten years.' Every February the staff have read the same measuring pole, on the same open slope, at the same hour, and the pole has never been moved or replaced. No other pole on the mountain reads differently.",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same measuring pole, on the same open slope, at the same hour, and the pole has never been moved or replaced",
            H1: "rose from 90 cm to 120 cm over the past ten years" } },

  /* ---------- Detection bias: the first case, the second, the check ---------- */
  { id: 'meas-van', use: 'teach', tier: 'clean', setting: 'health', topic: 'a county screening van and a thyroid exam', name: 'The screening van',
    text: "County leaders warn: 'Thyroid diagnoses in our county have quadrupled, from 20 a year to 80. The illness is spreading fast.' Over the same years the county began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000. It is the same exam, and a result is called positive by the same standard. Of those examined, 20 in 1,000 were diagnosed in the first year, which is 2 in every 100, and 80 in 5,000 in the last, which is 1.6 in every 100.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000",
            M1: "began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000" } },

  { id: 'meas-cameras', use: 'teach', tier: 'clean', setting: 'community', topic: 'speed cameras and the tickets they print', name: 'The speed cameras',
    text: "A city announces: 'Speeding tickets issued each day have tripled, from 300 to 900. Drivers are getting more reckless.' This year the city put up speed cameras on 30 busy roads, up from 10. The share of cars caught speeding at any one camera is the same as before, 3 in every 100 cars, and about 1,000 cars a day pass each camera.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "This year the city put up speed cameras on 30 busy roads, up from 10",
            M1: "This year the city put up speed cameras on 30 busy roads, up from 10" },
    segments: [
      { text: "A city announces: 'Speeding tickets issued each day have tripled, from 300 to 900. Drivers are getting more reckless.'", note: 'This is the claim and its figure. The words asked for say how much looking there was, and they come after it.' },
      { text: "This year the city put up speed cameras on 30 busy roads, up from 10." },
      { text: "The share of cars caught speeding at any one camera is the same as before, 3 in every 100 cars, and about 1,000 cars a day pass each camera.", note: 'This shows that drivers are no more reckless at any one camera. It comes after the words asked for, which say what changed in how much looking there was.' }
    ] }
]);
