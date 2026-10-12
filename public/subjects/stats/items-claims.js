// Stats, lesson 1 "Find the claim and its number": the worked example and the nine questions of the two groups. Invented outlets, people and
// products. Each is a thing as it arrives on a phone; the lines that decide it are named in `deciding`, and shown only after the answer
// (or marked at the start of the first group, where the help is on).
FC.items("stats", [
  // ----- the worked example: a headline that says more than its story -----
  statsItem({
    id: "w-coffee", fit: "outruns", kind: "cause", line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Harbor Ledger · Health",
      headline: statsLine("h", "Coffee cuts heart attack risk by 12%, study finds"),
      lines: [
        statsLine("s1", "People who drank three cups of coffee a day had 12% fewer heart attacks than people who drank none, researchers reported Tuesday."),
        statsLine("s2", "The study followed 8,400 adults for six years.", { para: true, note: "That is how many people were followed, not the number the headline rests on." }),
        statsLine("s3", "Among those who drank no coffee, 25 in 1,000 had a heart attack. Among those who drank three cups a day, 22 in 1,000 did.", { note: "These counts sit behind the headline’s number. The number itself is the 12%." }),
        statsLine("s4", "The coffee drinkers also exercised more and smoked less, the team noted.", { para: true }),
        statsLine("s5", "“This is a link, not proof that coffee protects the heart,” said lead researcher Dr. Alan Pruitt.")] }],
    steps: [
      { id: "claim", does: "Find what the headline claims.", working: "The headline says coffee “cuts” heart attack risk. A word like “cuts” says one thing makes another happen.", ask: "kind" },
      { id: "number", does: "Find the number it rests on.", working: "The first sentence has it: 12% fewer heart attacks among people who drank three cups a day.", ask: "line" },
      { id: "check", does: "Check the headline against the text.", working: "The text calls it “a link, not proof”, and says the coffee drinkers also exercised more and smoked less. So the text does not show that the coffee did it. The headline says more than the text.", ask: "verdict" }],
    deciding: ["h", "s1", "s4", "s5"],
    reason: ["The headline says coffee “cuts” the risk, but the study only compared people who already drank different amounts of coffee. The lead researcher calls it “a link, not proof”, and the coffee drinkers also exercised more and smoked less.",
      "In plain terms, the numbers are 25 heart attacks in every 1,000 people who drank no coffee and 22 in every 1,000 who drank three cups: 3 fewer in 1,000."],
    need: "You would need people split by chance into coffee and no coffee, or two groups alike in exercise and smoking, and the difference still showing.",
    figure: { kind: "figure", type: "people", data: { caption: "Heart attacks in six years, out of 1,000 people", rows: [{ label: "Drank no coffee", count: 25 }, { label: "Drank three cups a day", count: 22 }] } }
  }),

  // ----- the first group (the deciding words marked): one of each answer -----
  statsItem({
    id: "p-tires", fit: "outruns", kind: "compare", line: "s1",
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
  statsItem({
    id: "p-crosswalk", fit: "holds", kind: "compare", line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · City Hall",
      headline: statsLine("h", "City counts 19 crashes at 12 busy corners this year, down from 31 last year"),
      lines: [
        statsLine("s1", "The city counted 19 crashes at the 12 corners in the past 12 months, down from 31 in the 12 months before, the public works department said Monday."),
        statsLine("s2", "New crosswalk lights went in at all 12 corners last spring. They count down the seconds left to cross.", { para: true, note: "That says what was installed, not how many crashes there were." }),
        statsLine("s3", "Public works director Elena Park said the department will add lights at six more corners next year if the council approves the money.", { note: "That is what comes next, not a number about crashes." })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says crashes are down, from 31 to 19, and the department’s own count says the same. The headline compares two years and claims nothing more. It does not say the new lights are the reason, and neither does the story."],
    need: "To say the lights caused the drop, you would need other corners with no new lights over the same years. The headline does not say that."
  }),
  statsItem({
    id: "p-savings", fit: "unclear", kind: "compare", line: null,
    blocks: [{ kind: "article", form: "post", source: "Jordan Reyes · @jordansaves · 3h",
      lines: [
        statsLine("s1", "Pinecone Bank’s savings rates are way better than the big banks right now."),
        statsLine("s2", "Seriously, don’t miss out.", { note: "That is a push to act, not a number." })] }],
    deciding: ["s1"],
    reason: ["The post says Pinecone Bank’s rates are “way better”, but it gives no rate and names no bank to compare with. With no number in the text, there is nothing to check, so you cannot tell."],
    need: "You would need the actual yearly rates, Pinecone Bank’s and the other banks’, from the banks themselves."
  }),

  // ----- the second group (nothing marked): mixed -----
  statsItem({
    id: "q-commute", fit: "holds", kind: "most", line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Metro Beacon · Work",
      headline: statsLine("h", "Four in five city employees drive to work, survey finds"),
      lines: [
        statsLine("s1", "A survey of 1,200 city employees, chosen at random from the payroll list, found that 82% drive alone or carpool to work."),
        statsLine("s2", "Nine percent take the bus and 5% bike or walk. The rest work from home.", { para: true, note: "Those are other ways of getting to work, not the share who drive." }),
        statsLine("s3", "The city’s human resources office ran the survey in March to plan parking.", { note: "That says who ran the survey and why, not what it found." })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says “four in five”, and the survey says 82%, a little over four in five. It asked 1,200 city employees picked at random from the payroll list, and the headline claims only about city employees."],
    need: "For a claim about every worker in the region you would need a survey of all of them. The headline does not make that claim."
  }),
  statsItem({
    id: "q-walking", fit: "outruns", kind: "cause", line: "s1",
    blocks: [
      { kind: "article", form: "report", source: "Northgate Health Foundation · Summary",
        headline: statsLine("h", "Walking clubs improve heart health, report finds"),
        lines: [
          statsLine("s1", "Members of Northgate walking clubs had an average resting heart rate of 68 beats a minute. People who did not belong to a club averaged 70."),
          statsLine("s2", "The foundation compared 640 club members with 640 non-members on one screening day last spring.", { para: true, note: "That is how many people were compared, not the result." }),
          statsLine("s3", "No one was measured before joining a club.")] },
      { kind: "chart", type: "bars", title: "Average resting heart rate", x: ["Club members", "Non-members"], y: { from: 66, to: 70, step: 1, unit: "beats a minute" },
        series: [{ values: [68, 70] }], labels: true, source: "Northgate Health Foundation" }],
    deciding: ["h", "s1", "s3"],
    redraw: "from-zero",
    reason: ["The headline says walking clubs “improve” heart health, which claims the clubs make the difference. The report compared members with non-members on a single day and says no one was measured before joining, so it cannot say what the clubs changed.",
      "The gap is also small: 68 against 70 beats a minute. The chart starts at 66, which makes it look much bigger."],
    need: "You would need heart rates measured before people joined and again later, or two groups that were alike to begin with."
  }),
  statsItem({
    id: "q-heater", fit: "outruns", kind: "cause", line: "s2",
    blocks: [{ kind: "article", form: "ad", source: "Lumo Heating",
      headline: statsLine("h", "Cut your heating bill by 40%."),
      lines: [
        statsLine("s1", "The Lumo Room Heater warms the room you are in, so you stop paying to heat the rooms you are not."),
        statsLine("s2", "Customers save 40% on their winter bill."),
        statsLine("f1", "Savings compare running one Lumo heater for 8 hours in a one-room office with running a whole-house furnace for 8 hours. Your bill will vary.", { fine: true, note: "That is how long the test ran, not the saving." })] }],
    deciding: ["h", "s2", "f1"],
    reason: ["The headline says the heater will cut your bill by 40%. The small print says the 40% compares one heater in one room with a furnace heating a whole house, which is not what most customers will do."],
    need: "You would need bills from customers who used the heater in their own homes, compared with their bills before."
  }),
  statsItem({
    id: "q-delivery", fit: "holds", kind: "size", line: "s1",
    blocks: [
      { kind: "article", form: "post", source: "Ravi Menon · Operations lead · 5h",
        lines: [
          statsLine("s1", "Our on-time delivery rate was 94% in June: 1,860 of 1,980 orders arrived by the promised date."),
          statsLine("s2", "Thank you to the whole dispatch team.", { note: "That is a thank-you, not a number." })] }],
    deciding: ["s1"],
    reason: ["The post says 94% in June, and gives the counts behind it: 1,860 of 1,980 orders, which is 94%. The post claims a size and the text shows it."],
    need: "Nothing more is needed for the size. To say why the rate went up you would need to know what changed, and the post does not claim that."
  }),
  statsItem({
    id: "q-housing", fit: "unclear", kind: "forecast", line: null,
    blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · Money",
      headline: statsLine("h", "Housing market to cool next year, analysts say"),
      lines: [
        statsLine("s1", "Local real estate analysts expect home prices in the county to ease next year as more homes come on the market."),
        statsLine("s2", "“Buyers are getting pickier,” said Marcus Hale of Redwood Realty.", { para: true, note: "A quote, not a number." }),
        statsLine("s3", "Redwood Realty will publish its full outlook in January.")] }],
    deciding: ["h", "s1"],
    reason: ["The headline is a forecast: the market will “cool”. The story says analysts “expect” prices to “ease” but gives no figure: not how much, not by when. With no number in the text, there is nothing to check, so you cannot tell."],
    need: "You would need the size of the drop they expect, and by when."
  })
]);
