// Stats, lesson 1 "What it claims, and the number it rests on": the worked example and the nine questions of the two groups. Invented outlets, people and
// products. Each is a thing as it arrives on a phone; the lines that decide it are named in `deciding`, and shown only after the answer
// (or marked at the start of the first group, where the help is on).
FC.items("stats", [
  // ----- the worked example: a headline that says more than its story -----
  statsStanding({
    id: "w-coffee", strand: "claim-number", fit: "outruns", claim: ["Coffee makes heart attacks less likely", [["People who drink coffee had fewer heart attacks", "heard-link"], ["Coffee cuts heart attack risk by 12% in people with heart disease", "mixed-who"]]], line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Harbor Ledger · Health",
      headline: statsLine("h", "Coffee cuts heart attack risk by 12%, study finds"),
      lines: [
        statsLine("s1", "People who drank three cups of coffee a day had 12% fewer heart attacks than people who drank none, researchers reported Tuesday."),
        statsLine("s2", "The study followed 8,400 adults for six years.", { para: true, note: "That is how many people were followed, not the number the headline rests on." }),
        statsLine("s3", "Among those who drank no coffee, 25 in 1,000 had a heart attack. Among those who drank three cups a day, 22 in 1,000 did.", { note: "These counts sit behind the headline’s number. The number itself is the 12%." }),
        statsLine("s4", "The coffee drinkers also exercised more and smoked less, the team noted.", { para: true }),
        statsLine("s5", "“This is a link, not proof that coffee protects the heart,” said lead researcher Dr. Alan Pruitt.")] }],
    steps: [
      { id: "claim", does: "Find what the headline claims.", working: "The headline says coffee “cuts” heart attack risk. “Cuts” says coffee makes heart attacks less likely, not only that the two went together. It says it about people in general.", ask: "claim" },
      { id: "number", does: "Find the number it rests on.", working: "The first sentence has it: 12% fewer heart attacks among people who drank three cups a day.", ask: "line" },
      { id: "check", does: "Check the headline against the text.", working: "The text calls it “a link, not proof”, and says the coffee drinkers also exercised more and smoked less. So the text does not show that the coffee did it. The headline says more than the text.", ask: "verdict" }],
    deciding: ["h", "s1", "s4", "s5"],
    reason: ["The headline says coffee “cuts” the risk, but the study only compared people who already drank different amounts of coffee. The lead researcher calls it “a link, not proof”, and the coffee drinkers also exercised more and smoked less.",
      "In plain terms, the numbers are 25 heart attacks in every 1,000 people who drank no coffee and 22 in every 1,000 who drank three cups: 3 fewer in 1,000."],
    need: "You would need people split by chance into coffee and no coffee, or two groups alike in exercise and smoking, and the difference still showing.",
    figure: { kind: "figure", type: "people", data: { caption: "Heart attacks in six years, out of 1,000 people", rows: [{ label: "Drank no coffee", count: 25 }, { label: "Drank three cups a day", count: 22 }] } }
  }),

  // ----- the first group (the deciding words marked): one of each answer -----
  statsStanding({
    id: "p-tires", strand: "claim-number", fit: "outruns", claim: ["The new SolidGrip tire needs 30% less room to stop than the leading tire", [["The new SolidGrip tire stops 30% shorter than SolidGrip’s old tire", "mixed-claim"], ["SolidGrip’s winter tire stops 30% shorter than the leading tire", "mixed-who"]]], line: "s1",
    blocks: [{ kind: "article", form: "ad", source: "SolidGrip Tires",
      headline: statsLine("h", "SolidGrip stops 30% shorter than the leading tire."),
      lines: [
        statsLine("s1", "Rain on the road? Our new All-Season tire stops 30% shorter on wet pavement."),
        statsLine("s2", "Ask your dealer about fall pricing."),
        statsLine("f1", "Based on a SolidGrip test comparing the new All-Season with SolidGrip’s previous model, braking from 40 mph on a wet test track.", { fine: true, note: "That is the speed of the test, not the result." })] }],
    deciding: ["h", "s1", "f1"],
    reason: ["The headline compares SolidGrip with “the leading tire”. The small print says the test compared the new tire with SolidGrip’s own previous model, so it shows nothing about any other brand."],
    need: "You would need a test that put SolidGrip next to the leading tire on the same road in the same weather."
  }),
  statsStanding({
    id: "p-crosswalk", strand: "claim-number", fit: "holds", claim: ["Crashes at the 12 busy corners fell from 31 to 19 in two years", [["The new lights make crashes at the 12 corners fall", "heard-cause"], ["Crashes at the city’s other corners fell from 31 to 19 in two years", "mixed-who"]]], line: "s2",
    blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · City Hall",
      headline: statsLine("h", "Crashes at 12 busy downtown corners fall from 31 to 19 in two years"),
      lines: [
        statsLine("s1", "Two years ago the city put countdown lights at its 12 busiest downtown corners, picked for their traffic, not for a bad year of crashes.", { note: "That says where the lights went, not how many crashes there were." }),
        statsLine("s2", "The public works department counted 19 crashes at those corners in the two years since, down from 31 in the two years before."),
        statsLine("s3", "Public works director Elena Park said the department will add lights at six more corners next year if the council approves the money.", { para: true, note: "That is what comes next, not a number about crashes." })] }],
    deciding: ["h", "s2"],
    reason: ["The headline claims a count, and the department’s count shows it: 31 crashes in the two years before, 19 in the two years since. The lights are in the story, not the headline; to say they did it would need more, and the headline does not claim that."],
    need: "To say the lights caused the drop, you would need other busy corners with no new lights over the same years. The headline does not claim that."
  }),
  statsStanding({
    id: "p-savings", strand: "claim-number", fit: "unclear", claim: ["Pinecone Bank’s savings rates are better than the big banks’", [["Pinecone Bank’s savings rates went up", "mixed-claim"], ["Most people in town are moving their savings to Pinecone Bank", "mixed-who"]]], line: null,
    blocks: [{ kind: "article", form: "post", source: "Jordan Reyes · @jordansaves · 3h",
      lines: [
        statsLine("s1", "Everyone I know is moving their savings to Pinecone Bank. Their rates are way better than the big banks right now."),
        statsLine("s2", "Seriously, don’t miss out.", { note: "That is a push to act, not a number." })] }],
    deciding: ["s1"],
    reason: ["The post says Pinecone Bank’s rates are “way better”, but it gives no rate and names no bank to compare with. With no number in the text, there is nothing to check, so you cannot tell."],
    need: "You would need the actual yearly rates, Pinecone Bank’s and the other banks’, from the banks themselves."
  }),

  // ----- the second group (nothing marked): mixed -----
  statsStanding({
    id: "q-commute", strand: "claim-number", fit: "holds", claim: ["More than 80% of city employees go to work by car", [["Over four in five workers in the region drive to work", "mixed-who"], ["Over four in five city employees want to drive to work", "mixed-claim"]]], line: "s2",
    blocks: [{ kind: "article", form: "news", source: "Metro Beacon · Work",
      headline: statsLine("h", "Over four in five city employees drive to work, survey finds"),
      lines: [
        statsLine("s1", "The city’s human resources office ran the survey in March to plan parking.", { note: "That says who ran the survey and why, not what it found." }),
        statsLine("s2", "It asked 1,200 city employees, chosen at random from the payroll list, and 85% said they drive to work, alone or with others.", { para: true }),
        statsLine("s3", "Seven percent take the bus and 5% bike or walk. The rest work from home.", { note: "Those are other ways of getting to work, not the share who drive." })] }],
    deciding: ["h", "s2"],
    reason: ["The headline says over four in five, and the survey says 85%, which is over four in five. It asked 1,200 city employees picked at random from the payroll list, and the headline claims only about city employees."],
    need: "For a claim about every worker in the region you would need a survey of all of them. The headline does not make that claim."
  }),
  statsStanding({
    id: "q-walking", strand: "claim-number", fit: "outruns", claim: ["Walking clubs make hearts healthier", [["Walking club members have healthier hearts than people who are not members", "heard-link"], ["Walking clubs improve heart health in people with heart trouble", "mixed-who"]]], line: "s1",
    blocks: [
      { kind: "article", form: "report", source: "Northgate Health Foundation · Summary",
        headline: statsLine("h", "Walking clubs improve heart health, report finds"),
        lines: [
          statsLine("s2", "The foundation compared 640 club members with 640 non-members on one screening day last spring.", { note: "That is how many people were compared, not the result." }),
          statsLine("s1", "Members of Northgate walking clubs had an average resting heart rate of 68 beats a minute. People who did not belong to a club averaged 70.", { para: true }),
          statsLine("s3", "No one was measured before joining a club.")] },
      { kind: "chart", type: "bars", title: "Average resting heart rate", x: ["Club members", "Non-members"], y: { from: 66, to: 70, step: 1, unit: "beats a minute" },
        series: [{ values: [68, 70] }], labels: true, source: "Northgate Health Foundation" }],
    deciding: ["h", "s1", "s3"],
    redraw: "from-zero",
    reason: ["The headline says walking clubs “improve” heart health, which claims the clubs make the difference. The report compared members with non-members on a single day and says no one was measured before joining, so it cannot say what the clubs changed.",
      "The gap is also small: 68 against 70 beats a minute. The chart starts at 66, which makes it look much bigger."],
    need: "You would need heart rates measured before people joined and again later, or two groups that were alike to begin with."
  }),
  statsStanding({
    id: "q-delivery", strand: "claim-number", fit: "holds", claim: ["Almost all June orders came by the promised date", [["The dispatch team makes 94% of orders arrive on time", "heard-cause"], ["94% of this year’s orders arrived on time", "mixed-claim"]]], line: "s1",
    blocks: [
      { kind: "article", form: "post", source: "Ravi Menon · Operations lead · 5h",
        lines: [
          statsLine("s1", "Our on-time delivery rate was 94% in June: 1,860 of 1,980 orders arrived by the promised date."),
          statsLine("s2", "Thank you to the whole dispatch team.", { note: "That is a thank-you, not a number." })] },
      { kind: "chart", type: "line", title: "Orders delivered on time", x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], y: { from: 0, to: 100, step: 25, unit: "% of orders" },
        series: [{ values: [81, 85, 88, 90, 92, 94] }], labels: true, source: "Ravi Menon, operations records" }],
    deciding: ["s1"],
    reason: ["The post says 94% in June, and gives the counts behind it: 1,860 of 1,980 orders, which is 94%. The chart shows the same June figure, on a scale that starts at zero. The post claims a size and the text shows it."],
    need: "Nothing more is needed for the size. To say why the rate went up you would need to know what changed, and the post does not claim that."
  }),
  // an ad whose small print backs it
  statsStanding({
    id: "q-dentist", strand: "claim-number", fit: "holds", claim: ["About nine in ten Brightline patients would recommend it", [["About nine in ten people in town would recommend Brightline", "mixed-who"], ["Brightline is the best dentist in town", "mixed-claim"]]], line: "f1",
    blocks: [{ kind: "article", form: "ad", source: "Brightline Dental",
      headline: statsLine("h", "9 in 10 of our patients would recommend us."),
      lines: [
        statsLine("s1", "Thank you for trusting us with your smile."),
        statsLine("s2", "New patients are always welcome."),
        statsLine("f1", "From a May survey of every patient we saw that month: of 840 patients, 762 said they would recommend us, 41 said they would not and 37 did not answer.", { fine: true })] }],
    deciding: ["h", "f1"],
    reason: ["The headline says 9 in 10 of its patients would recommend it. The small print says every patient seen in May was asked, and 762 of the 840 said yes, which is about 9 in 10."],
    need: "Nothing more is needed for Brightline’s patients. For people in town who are not patients you would need their answers, and the ad does not claim that."
  }),
  // no number, and the text itself shows the claim goes too far
  statsStanding({
    id: "q-tea", strand: "claim-number", fit: "outruns", claim: ["Green tea keeps people from catching colds", [["People who drink green tea catch fewer colds", "heard-link"], ["Green tea cures a cold once you have one", "mixed-claim"]]], line: null,
    blocks: [{ kind: "article", form: "news", source: "Northgate Herald · Health",
      headline: statsLine("h", "Green tea keeps colds away, study shows"),
      lines: [
        statsLine("s1", "Mice given green tea extract fought off a cold virus faster than mice given water, a lab at Northgate University found."),
        statsLine("s2", "The team has not tested the extract in people.", { para: true }),
        statsLine("s3", "“It is far too early to say tea helps people,” said lab head Dr. Ines Ward.")] }],
    deciding: ["h", "s1", "s2", "s3"],
    reason: ["A reader takes the headline to mean that tea keeps colds away from people. The study was of mice, and the team says it has not tested people and it is far too early to say, so the text itself shows the claim goes too far, with no number needed."],
    need: "You would need a study of people, split by chance into tea and no tea."
  }),
  // a number is there, and the one thing needed to judge it is not
  statsStanding({
    id: "q-rate", strand: "claim-number", fit: "unclear", claim: ["No bank in town pays more on savings than Northpoint", [["Northpoint raised its savings rate last week", "mixed-claim"], ["Northpoint pays the best savings rate in town to new members only", "mixed-who"]]], line: "s1",
    blocks: [{ kind: "article", form: "post", source: "Dana Liu · @danasaves · 2h",
      lines: [
        statsLine("s1", "Northpoint Credit Union pays 4.5% a year on savings. Best rate in town, hands down."),
        statsLine("s2", "I moved my savings there last week.")] }],
    deciding: ["s1"],
    reason: ["The post gives Northpoint’s rate, 4.5% a year, but no rate from any other bank in town. The number is there; what it would need to be compared with is not, so you cannot tell."],
    need: "You would need the savings rates of the other banks in town, from the banks themselves."
  })
]);
