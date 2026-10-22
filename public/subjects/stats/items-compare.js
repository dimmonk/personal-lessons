// Stats, lesson 5 "Compared with what": the worked example, the contrast pair of questions and the second group. The question is what a number is
// compared with, and whether that is fair: like with like, the same period, the same way of counting, rates when sizes differ, the same mix inside
// the totals. The claim is what the headline means to a reader ("up 55%" means worse than before), so the claim chosen and the verdict never pull apart.
// "The same ... both years" sits on claims that hold and on claims that do not, and so does a change at the place; the comparison decides. Invented
// towns, schools, stores and hospitals. The tap is the sentence that gives the other number the claim is compared with ("Not given" when none does).
(() => {
  const LP = "Tap the sentence that gives the two numbers the headline compares.";
  const std = spec => statsStanding({ strand: "compare", linePrompt: LP, ...spec });
  FC.items("stats", [
    // ----- the worked example: compared with one odd year -----
    std({
      id: "w-lakeview", fit: "outruns", line: "s1",
      claim: ["Lakeview is having more break-ins than it usually does", [["Break-ins are up 55% in Lakeview’s county", "mixed-who"], ["Fewer weekend patrols make break-ins rise in Lakeview", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Lakeview Beacon · Public Safety",
        headline: statsLine("h", "Break-ins up 55% in Lakeview"),
        lines: [
          statsLine("s1", "Lakeview police counted 62 break-ins in the first three months of this year, up from 40 in the same months last year."),
          statsLine("s2", "In the same months of the four years before that, counted the same way, police recorded between 60 and 66 break-ins each year.", { para: true, note: "Those are earlier years, not the number the headline compares with." }),
          statsLine("s3", "Chief Dana Wells said patrols will increase on weekends.", { note: "That is what police will do, not a count." })] }],
      steps: [
        { id: "claim", does: "Find what the headline claims.", working: "“Up 55%” tells a reader that break-ins are worse than they have been: more than Lakeview usually has.", ask: "claim" },
        { id: "line", does: "Find what it is compared with.", working: "The first sentence: the same months last year, when there were 40.", ask: "line" },
        { id: "verdict", does: "Check that the comparison is fair.", working: "In the four years before, the count was 60 to 66 each year. Last year’s 40 was one odd low year, so “up 55%” compares this year with that dip, and 62 is a usual year.", ask: "verdict" }],
      deciding: ["h", "s1", "s2"],
      reason: ["“Up 55%” is true against last year, 62 against 40, but last year was an odd low year. In the four years before, the count was 60 to 66 each year, so 62 is a usual year for Lakeview, not more than usual."],
      need: "You would need this year’s count beside several years, which the story gives: it shows a usual year."
    }),

    // ----- the first group (the sentences marked): a fair and an unfair comparison on one topic, asked back to back, then two with no number to compare -----
    std({
      id: "p-recycle-fair", fit: "holds", line: "s2",
      claim: ["Each Brookdale household recycled more this year than last year", [["Brookdale households recycle more than Fenwick households", "mixed-claim"], ["The pickup program makes Brookdale households recycle more", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Brookdale Bulletin · Public Works",
        headline: statsLine("h", "Brookdale households recycled more this year"),
        lines: [
          statsLine("s1", "The public works office used the same pickup program and counted the same way both years."),
          statsLine("s2", "Brookdale households recycled 220 pounds each this year, up from 200 pounds each last year, the office said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The comparison is fair: this year against last year, per household, with the same program and the same way of counting. The headline claims no more than that."],
      need: "Nothing more is needed. The headline does not say why recycling rose, and the story does not either."
    }),
    std({
      id: "p-recycle-unfair", fit: "outruns", line: "s1",
      claim: ["Each Brookdale household recycles twice as much as each Fenwick household", [["Brookdale households recycled more this year than last year", "mixed-claim"], ["Brookdale recycles twice as much in total as Fenwick", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Fenwick Courier · Public Works",
        headline: statsLine("h", "Brookdale households recycle twice as much as Fenwick’s"),
        lines: [
          statsLine("s1", "Brookdale recycled 2.2 million pounds this year, twice Fenwick’s 1.1 million pounds, the county said."),
          statsLine("s2", "Brookdale has about 10,000 households. Fenwick has about 5,000.", { para: true, note: "That is the size of each town, not what it recycled." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The comparison puts one town’s total beside another’s, but Brookdale has twice as many households. Per household both towns recycled 220 pounds, so households do not recycle twice as much."],
      need: "You would need the amounts per household, which the numbers give: 220 pounds in each town."
    }),
    std({
      id: "p-nocomp", fit: "unclear", line: null,
      claim: ["Gas in Lakeview costs more than it should right now", [["Gas in the next town costs more than it should right now", "mixed-who"], ["Gas in Lakeview cost less last month", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "post", source: "Pat Okafor · @patdrives · 1h",
        lines: [
          statsLine("s1", "A gallon of gas is $4.10 in Lakeview right now. Sky-high!", { note: "That is today’s price. It does not say what it is compared with." }),
          statsLine("s2", "Anyone else filling up in the next town?")] }],
      deciding: ["s1"],
      reason: ["$4.10 is a price, but the post does not say what it is higher than: last month, last year, or the next town. “Sky-high” is only a word until it is put beside something."],
      need: "You would need the price in Lakeview a month or a year ago, or in nearby towns today."
    }),
    std({
      id: "p-calls", fit: "outruns", line: null,
      claim: ["Westfield Water customers have less to complain about this year", [["Westfield Water’s business customers have less to complain about this year", "mixed-who"], ["Closing the phone line makes Westfield’s water better", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Westfield Times · Utilities",
        headline: statsLine("h", "Complaints about Westfield Water fall sharply"),
        lines: [
          statsLine("s1", "Customers are complaining far less this year, the company said."),
          statsLine("s2", "In January the company closed its complaint phone line; complaints can now be sent only by letter.", { para: true })] }],
      deciding: ["h", "s2"],
      reason: ["The story gives no number to compare. But it says the company closed its phone line, so this year’s complaints were counted a new, harder way, and the text itself shows the fall may come from that, not from fewer problems."],
      need: "You would need complaints counted the same way both years."
    }),

    // ----- the second group (nothing marked) -----
    std({
      id: "q-bikes", fit: "outruns", line: "s2",
      claim: ["A bike is more likely to be stolen in Westbrook than anywhere else in the county", [["Westbrook has more bike thieves living in it than Pinewood", "mixed-claim"], ["A bike is most at risk in Westbrook’s town center", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Westbrook Press · Safety",
        headline: statsLine("h", "Your bike is most at risk in Westbrook, police figures show"),
        lines: [
          statsLine("s1", "Westbrook has about 150,000 residents. Pinewood has about 30,000.", { note: "That is the size of each town, not a count of thefts." }),
          statsLine("s2", "Westbrook police recorded 300 bike thefts last year, more than any other town in the county. Pinewood recorded 120.", { para: true }),
          statsLine("s3", "Both towns’ counts come from county police records, kept the same way in every town.")] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Westbrook has more thefts because it has more people. Per 1,000 residents, Westbrook had 2 thefts and Pinewood had 4, so a bike is more likely to be stolen in Pinewood."],
      need: "You would need the thefts per 1,000 residents in each town, which the numbers give: 2 in Westbrook, 4 in Pinewood."
    }),
    std({
      id: "q-schools", fit: "outruns", line: "s1",
      claim: ["Dale High teaches students to pass the state tests better than Hillcrest High", [["Dale High had more students take the state tests than Hillcrest High", "mixed-claim"], ["Dale High’s ninth graders beat Hillcrest’s on the state tests", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Dale Gazette · Schools",
        headline: statsLine("h", "Dale High beats Hillcrest High on state tests"),
        lines: [
          statsLine("s1", "Of Dale High’s 220 test takers, 82% passed, against 63% of Hillcrest High’s 220."),
          statsLine("s2", "Each student takes the test for their grade: the basic test in grade 9, the harder advanced test in grade 11. Dale’s test takers this year were 200 ninth graders and 20 eleventh graders; Hillcrest’s were 20 ninth graders and 200 eleventh graders.", { para: true, note: "That is how many took each test, not the pass rates." }),
          statsLine("s3", "In grade 9, 90% of Hillcrest students passed and 85% of Dale students. In grade 11, 60% of Hillcrest students passed and 50% of Dale students.", { note: "These are the pass rates in each grade, not the overall rates." })] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["Grade by grade, Hillcrest students pass more often: 90% against 85% in grade 9, 60% against 50% in grade 11. Dale’s total is higher only because most of its test takers this year were ninth graders on the easier test, so it does not show Dale teaches better."],
      need: "You would need the two schools compared grade by grade, which the story gives, and it favors Hillcrest."
    }),
    std({
      id: "q-passrate", fit: "outruns", line: "s1",
      claim: ["Marlow High students are doing better on the test than last year", [["Paying schools more makes Marlow High students do better on the test", "heard-cause"], ["The pass rate climbs to 95% at Marlow’s middle school too", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Marlow Daily · Schools",
        headline: statsLine("h", "Marlow High pass rate climbs to 95%"),
        lines: [
          statsLine("s1", "Marlow High reported that 95% of its test takers passed this year, up from 82% last year."),
          statsLine("s2", "The state pays schools more when their pass rate is above 90%. This year the school told 60 students who were unlikely to pass to skip the test: 340 took it, against 400 last year.", { para: true, note: "These are numbers of test takers, not the pass rates." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The rate rose because the students likely to fail were kept out, and the school is paid by the rate. 95% of 340 is 323 students; 82% of 400 last year was 328, so fewer students passed."],
      need: "You would need how many students passed out of all of them, both years, which the numbers give: 323 against 328."
    }),
    std({
      id: "q-books", fit: "holds", line: "s1",
      claim: ["Harbor Books’ stores sold about 8% more this December than last December", [["Opening a website makes Harbor Books’ stores sell 8% more", "heard-cause"], ["Harbor Books’ website sold 8% more this December than last December", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Harbor Books",
        headline: statsLine("h", "Our December sales are up 8%. Thank you, readers!"),
        lines: [
          statsLine("s1", "Our four stores sold $240,000 in December, up from $222,000 last December."),
          statsLine("s2", "We opened a website this year; its sales are not in these figures."),
          statsLine("f1", "Same four stores both years.", { fine: true })] }],
      deciding: ["h", "s1", "s2", "f1"],
      reason: ["The comparison is fair: December against December, the same four stores, and the ad claims only the stores, with the new website kept out. $240,000 against $222,000 is 8% more, as the ad says."],
      need: "Nothing more is needed. The ad does not say why sales rose."
    }),
    std({
      id: "q-hotel", fit: "unclear", line: null,
      claim: ["Guests at the Seaview Inn are happier than they were", [["Diners at the Seaview Inn’s restaurant are happier than they were", "mixed-who"], ["The Seaview Inn has more guests than it had", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "ad", source: "Seaview Inn",
        headline: statsLine("h", "Guest ratings at the Seaview Inn are up!"),
        lines: [
          statsLine("s1", "Our guests now rate us 4.5 stars.", { note: "That is today’s rating. It does not say what it is up from." }),
          statsLine("s2", "Book your stay today.")] }],
      deciding: ["h", "s1"],
      reason: ["“Up” needs something to be up from. The ad gives today’s rating, 4.5 stars, but not the rating before, so you cannot tell whether it went up or by how much."],
      need: "You would need the rating before, from the same kind of review."
    }),
    std({
      id: "q-fires", fit: "unclear", line: "s1",
      claim: ["A house in Ashton is less likely to catch fire than a house elsewhere in the county", [["Checking smoke alarms makes Ashton’s houses less likely to catch fire", "heard-cause"], ["A house in Ashton’s town center is less likely to catch fire than a house elsewhere", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Ashton Herald · Safety",
        headline: statsLine("h", "Ashton is the safest town in the county from house fires"),
        lines: [
          statsLine("s1", "Ashton firefighters answered 45 house fires last year, the fewest of any town in the county. Dunmore had 90."),
          statsLine("s2", "Fire Chief Ana Ruiz reminded residents to check their smoke alarms.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["The numbers to compare are there, 45 against 90, but they are totals, and the story never says how many homes each town has. A small town can have the fewest fires and still the most for its size, so you cannot tell."],
      need: "You would need how many homes each town has, to compare fires per 1,000 homes."
    })
  ]);
})();
