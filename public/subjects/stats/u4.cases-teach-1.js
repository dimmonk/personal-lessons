// Statistical Claims, Unit Four (What the number counts): cases shown inside cards, first part (the three names and their sound look-alikes).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A branch unit's cases carry route: { S1: [gate answer], M1: [answer] }. A claim with nothing wrong carries the gate's
// "holds" answer and the sound branch's answer instead, and its outcome is one that an earlier unit teaches.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it in one style.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// People, firms and studies are invented. No case asserts a contested fact about the real world.

FC.cases('stats', 'u4', [

  { id: 'meas-parcels', use: 'teach', tier: 'clean', setting: 'work', topic: 'delivery drivers and a bonus on a tap', name: 'The delivery bonus',
    text: "A delivery firm gives each driver a $200 bonus when 95 of every 100 of that driver's parcels are marked 'delivered on time', and a driver marks a parcel delivered by tapping a button on a handheld. Last quarter 80 of every 100 parcels were marked on time. This quarter 96 of every 100 were, and the firm's report says: 'On-time delivery is up from 80% to 96%.' Customers' own confirmation messages, which the bonus does not use, show 79 of every 100 parcels reaching them on time last quarter and 79 of every 100 this quarter.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "a driver marks a parcel delivered by tapping a button on a handheld",
            M1: "gives each driver a $200 bonus when 95 of every 100 of that driver's parcels are marked 'delivered on time', and a driver marks a parcel delivered by tapping a button on a handheld" } },

  { id: 'meas-bugs', use: 'check', tier: 'clean', setting: 'work', topic: 'a software team paid for each bug report closed', name: 'The bug bonus',
    text: "A software company gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports. The team closed 40 reports in March and 120 in May. In May it began writing one report for each page a problem shows up on, where before it wrote one report for the whole problem. The testers, who are paid a flat wage, count the different problems in the product themselves, and they counted 25 in March and 25 in May.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { M1: "gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports" },
    segments: [
      { text: "A software company gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports." },
      { text: "The team closed 40 reports in March and 120 in May.", note: 'These are the numbers that rose. They do not say who gains from the rise or how it was done.' },
      { text: "In May it began writing one report for each page a problem shows up on, where before it wrote one report for the whole problem.", note: 'This shows how the count was raised. The words you want, who is paid and who decides, are in the first sentence.' },
      { text: "The testers, who are paid a flat wage, count the different problems in the product themselves, and they counted 25 in March and 25 in May.", note: 'This count is made by people who gain nothing from it. It shows the real thing stood still, not why the figure rose.' }
    ],
    reason: { M1: 'The team is paid per report and decides how to split a problem, so it raised the count from 40 to 120 while the testers still found 25 problems.' } },

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

  { id: 'meas-jobless', use: 'teach', tier: 'clean', setting: 'community', topic: 'a job office and a narrower count of the jobless', name: 'The jobless count',
    text: "A city's job office reports: 'Joblessness fell from 9% to 6% this year.' Last year the office counted as jobless every adult who had no job and had looked for work in the past twelve months. This year it counts only adults who have no job and have looked for work in the past four weeks. Of the same 1,000 adults in the city who want work, 90 were counted jobless last year and 60 this year. The number of those 1,000 with no job at all was 90 last year and 90 this year.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "This year it counts only adults who have no job and have looked for work in the past four weeks",
            M1: "Last year the office counted as jobless every adult who had no job and had looked for work in the past twelve months. This year it counts only adults who have no job and have looked for work in the past four weeks" } },

  { id: 'meas-complaints', use: 'check', tier: 'clean', setting: 'money', topic: 'a bank that logs only written complaints', name: 'The bank complaints',
    text: "A bank reports: 'Customer complaints fell from 600 to 400 this year.' Until last year the bank logged every complaint, whether made by phone, in person or in writing. This year it logs only complaints made in writing. Last year 350 of the 600 complaints were written ones, and this year 400 are.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { M1: "Until last year the bank logged every complaint, whether made by phone, in person or in writing. This year it logs only complaints made in writing" },
    reason: { M1: 'The bank counts differently this year: {cue:M1}. Written complaints actually rose, from 350 to 400, while the figure fell from 600 to 400.' } },

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

  { id: 'meas-van', use: 'teach', tier: 'clean', setting: 'health', topic: 'a county screening van and a thyroid exam', name: 'The screening van',
    text: "County leaders warn: 'Thyroid diagnoses in our county have quadrupled, from 20 a year to 80. The illness is spreading fast.' Over the same years the county began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000. It is the same exam, and a result is called positive by the same standard. Of those examined, 20 in 1,000 were diagnosed in the first year, which is 2 in every 100, and 80 in 5,000 in the last, which is 1.6 in every 100.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000",
            M1: "began sending a free screening van to towns, and the number of people given the thyroid exam rose from 1,000 a year to 5,000" } }
]);
