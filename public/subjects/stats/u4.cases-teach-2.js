// Statistical Claims, Unit Four: cases shown inside cards, second half (the rest of Detection bias, the look-alike pairs
// between the three names, the two exceptions, the check on the key's question and the two worked claims).

FC.cases('stats', 'u4', [

  { id: 'meas-essays', use: 'check', tier: 'clean', setting: 'learning', topic: 'a university and the essays it checks for copying', name: 'The essay checks',
    text: "A university's integrity office reports: 'Copied essays found this year: 90, up from 30 last year. Cheating is on the rise.' Last year staff checked only the 600 essays that graders had flagged as looking odd. This year, with extra staff hours, they checked all 3,000 essays handed in, by the same method. An essay counts as copied by the same standard in both years. That is 5 found in every 100 checked last year, and 3 in every 100 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { M1: "Last year staff checked only the 600 essays that graders had flagged as looking odd. This year, with extra staff hours, they checked all 3,000 essays handed in, by the same method" },
    reason: { M1: 'The office checked five times as many essays this year: {cue:M1}. The standard for a copied essay and the method are the same, so the count of essays found rose from 30 to 90 because 3,000 were checked instead of 600. Among those checked, the share found fell from 5 in 100 to 3 in 100.' } },

  /* ---------- Detection bias beside its sound look-alike: the same lake ---------- */
  { id: 'meas-birds-more', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a lake bird survey with many more volunteers', name: 'The lake bird survey with more searchers',
    text: "A nature club reports: 'The number of bird species recorded at Lake Ellis rose from 12 to 31 in two years. More kinds of bird are living there.' In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all",
            M1: "In the first year four volunteers searched the shore for 10 hours a month in all. In the second year fifteen volunteers searched it for 60 hours a month in all" } },

  { id: 'meas-birds-same', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a lake bird survey with unchanged searchers', name: 'The lake bird survey with the same searchers',
    text: "A nature club reports: 'The number of bird species recorded at Lake Ellis rose from 12 to 15 in two years.' The same four volunteers searched the same stretch of shore for 10 hours a month in all, in both years, on the same days of the month, and a species counts when it is seen by the same standard.",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The same four volunteers searched the same stretch of shore for 10 hours a month in all, in both years",
            H1: "rose from 12 to 15 in two years" } },

  /* ---------- Gaming the target beside Detection bias: the same store, the same tripling ---------- */
  { id: 'meas-store-guards', use: 'teach', tier: 'clean', setting: 'work', topic: 'store guards paid for each incident they log', name: 'The store guards’ pay',
    text: "A department store pays each security guard $5 for every incident the guard logs, and each guard decides what is worth logging. Logged incidents rose from 40 a month to 120 a month, and the manager tells staff: 'Incidents have tripled. We have a crime wave.' Most of the new entries are a dropped bag or a customer asking where to go. Losses found at the monthly stock count stayed at $4,000 a month.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "pays each security guard $5 for every incident the guard logs, and each guard decides what is worth logging",
            M1: "pays each security guard $5 for every incident the guard logs, and each guard decides what is worth logging" } },

  { id: 'meas-store-cameras', use: 'teach', tier: 'clean', setting: 'work', topic: 'store guards and new cameras on the shop floor', name: 'The store’s new cameras',
    text: "A department store put 20 cameras on its shop floor this year. Before, its security guards, who are paid a flat wage, could see only the area near the door. Logged incidents rose from 40 a month to 120 a month, and the manager tells staff: 'Incidents have tripled. We have a crime wave.' Most of the new entries are shoplifters the cameras showed in parts of the store the guards never saw.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "put 20 cameras on its shop floor this year. Before, its security guards, who are paid a flat wage, could see only the area near the door",
            M1: "put 20 cameras on its shop floor this year. Before, its security guards, who are paid a flat wage, could see only the area near the door" } },

  /* ---------- A change in how it is counted beside Detection bias: the same lab, the same tripling ---------- */
  { id: 'meas-lab-analyzer', use: 'teach', tier: 'clean', setting: 'health', topic: 'a lab that replaced its blood analyzer', name: 'The lab’s new analyzer',
    text: "A clinic's lab reports: 'Vitamin D deficiency has tripled: 20 of the 1,000 people tested last year were found deficient, and 60 of the 1,000 tested this year.' In March the lab replaced its blood analyzer with a new model. On 50 blood samples tested on both, the new analyzer read about 4 points lower than the old one on each. A person is called deficient at a reading below 20 on either.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "In March the lab replaced its blood analyzer with a new model",
            M1: "In March the lab replaced its blood analyzer with a new model" } },

  { id: 'meas-lab-more', use: 'teach', tier: 'clean', setting: 'health', topic: 'a lab that tested thousands more people', name: 'The lab’s wider offer',
    text: "A clinic's lab reports: 'Vitamin D deficiency has tripled: 20 people were found deficient last year, and 60 this year.' The lab has used the same blood analyzer for five years, and a person is called deficient at a reading below 20. Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested. That is 2 found in every 100 tested last year, and 2 in every 100 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested",
            M1: "Last year 1,000 people were tested. This year, after the clinic began offering the test to every patient over 40, 3,000 were tested" } },

  /* ---------- Gaming the target beside A change in how it is counted: the same bank, the same fall in days ---------- */
  { id: 'meas-loans-pushed', use: 'teach', tier: 'clean', setting: 'money', topic: 'loan officers ranked on days to approve', name: 'The loan officers’ ranking',
    text: "A bank ranks its loan officers each month by the average number of days a loan takes to approve, and each officer enters the 'approved' date in the system. The average fell from 12 days to 5. Officers have started entering the 'approved' date on the day a file arrives and finishing the checks over the next week. A survey of customers shows that they still wait about 12 days between applying and hearing a final answer.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "ranks its loan officers each month by the average number of days a loan takes to approve, and each officer enters the 'approved' date in the system",
            M1: "ranks its loan officers each month by the average number of days a loan takes to approve, and each officer enters the 'approved' date in the system" } },

  { id: 'meas-loans-clock', use: 'teach', tier: 'clean', setting: 'money', topic: 'a bank that started its approval clock later', name: 'The bank’s later clock',
    text: "A bank reports: 'The average time to approve a loan fell from 12 days to 5.' Until last year the clock started on the day the customer applied. This year it starts on the day the file is complete, after the customer has sent every document the bank asked for. Nobody at the bank is paid or ranked on the figure. On the same 200 loans, counting from the day of the application gives an average of 12 days in both years, and counting from the day the file is complete gives 5.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "Until last year the clock started on the day the customer applied. This year it starts on the day the file is complete",
            M1: "Until last year the clock started on the day the customer applied. This year it starts on the day the file is complete, after the customer has sent every document the bank asked for" } },

  /* ---------- The two exceptions ---------- */
  { id: 'meas-door-counter', use: 'teach', tier: 'misleading', setting: 'learning', topic: 'a library and a door sensor', name: 'The door counter',
    text: "A library reports: 'Visits rose 40% this year, from 4,000 a week to 5,600. More people than ever are coming.' The library is open the same hours and has done no advertising. In January it replaced the clicker its staff pressed for each adult who came in with a door sensor that counts everything passing through, including children carried in arms, staff and delivery drivers. On the day the sensor was installed, the staff clicked 400 adults while the sensor counted 560.",
    outcome: 'defshift', route: { S1: ['measure'], M1: ['newrule'] },
    cues: { S1: "replaced the clicker its staff pressed for each adult who came in with a door sensor that counts everything passing through",
            M1: "replaced the clicker its staff pressed for each adult who came in with a door sensor that counts everything passing through, including children carried in arms, staff and delivery drivers" },
    segments: [
      { text: "A library reports: 'Visits rose 40% this year, from 4,000 a week to 5,600. More people than ever are coming.'", note: 'This is the claim and its figure. It tells you the rise is read as more people coming, which is why more looking comes to mind. It does not settle which name applies.' },
      { text: "The library is open the same hours and has done no advertising.", note: 'This tells you nobody put more effort into finding visitors: the same doors, the same hours. It rules something out, and the words asked for are the ones that show what did change.' },
      { text: "In January it replaced the clicker its staff pressed for each adult who came in with a door sensor that counts everything passing through, including children carried in arms, staff and delivery drivers." },
      { text: "On the day the sensor was installed, the staff clicked 400 adults while the sensor counted 560.", note: 'This shows how far apart the two counters are. It comes after the words asked for, which say what changed.' }
    ] },

  { id: 'meas-chairs', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a chair maker and an outside strength test', name: 'The chair bonus',
    text: "A furniture maker gives its workers a bonus for each chair that passes a strength test. The test is run by an outside laboratory, which loads every finished chair with 120 kg and is paid the same whatever the result. Of 1,000 chairs tested in March, 700 passed. Of 1,000 tested in September, 900 passed. The maker says: 'More of our chairs pass the strength test than before.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "The test is run by an outside laboratory, which loads every finished chair with 120 kg and is paid the same whatever the result",
            H1: "Of 1,000 chairs tested in March, 700 passed. Of 1,000 tested in September, 900 passed" },
    segments: [
      { text: "A furniture maker gives its workers a bonus for each chair that passes a strength test.", note: 'This is why the case can look like {o:proxy}: the workers gain when the figure is higher. It is not enough on its own. A bonus does not settle the name; what settles it is whether anyone could raise the figure without more of the real thing.' },
      { text: "The test is run by an outside laboratory, which loads every finished chair with 120 kg and is paid the same whatever the result." },
      { text: "Of 1,000 chairs tested in March, 700 passed. Of 1,000 tested in September, 900 passed.", note: 'These are the figures. They rose, and the case has the same figures whichever name applies. What separates the names is who makes the figure and whether it could be raised another way.' },
      { text: "The maker says: 'More of our chairs pass the strength test than before.'", note: 'This is the claim. It says only that more chairs pass, which is the same whichever name applies.' }
    ] }
]);
