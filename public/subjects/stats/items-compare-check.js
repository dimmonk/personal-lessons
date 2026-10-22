// Stats, lesson 5 "Compared with what": the six questions of the end check, from areas of life the lesson's groups did not use (sports, farming, work,
// buses, trains, food), and three held in reserve for the returns. Invented towns, teams, farms and companies.
(() => {
  const LP = "Tap the sentence that gives the two numbers the headline compares.";
  const std = spec => statsStanding({ strand: "compare", linePrompt: LP, ...spec });
  FC.items("stats", [
    std({
      id: "k-tickets", fit: "outruns", line: "s2",
      claim: ["Bayside is selling more season tickets than it did a year ago", [["Bayside sells more season tickets than the other stadiums in its league", "mixed-claim"], ["Bayside is selling more single-game tickets than it did a year ago", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Bayside Tribune · Sports",
        headline: statsLine("h", "Season ticket sales up 60% at Bayside Stadium"),
        lines: [
          statsLine("s1", "In June last year, Bayside sold 950 season tickets.", { note: "That is last June’s sales: a fair number to compare with, but not one of the two the headline compares." }),
          statsLine("s2", "This June the team sold 800 season tickets, up from 500 in February, its slowest month, the team said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["“Up 60%” compares this June with February, a slow month for season tickets. Against June last year, sales are down: 800 against 950."],
      need: "You would need June this year against June last year, which the story gives, and it shows a drop."
    }),
    std({
      id: "k-farm", fit: "outruns", line: "s2",
      claim: ["Cedar County farms grow corn better than Maple County farms", [["Cedar County farms beat Maple County’s at growing wheat", "mixed-claim"], ["Planting more acres makes Cedar County’s farms grow corn better", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Plains Farm Weekly · Crops",
        headline: statsLine("h", "Cedar County farms beat Maple County’s at growing corn"),
        lines: [
          statsLine("s1", "Cedar County planted 6,000 acres of corn this year. Maple County planted 3,000.", { note: "That is how much land was planted, not how much was harvested." }),
          statsLine("s2", "Cedar County farms harvested 900,000 bushels of corn this fall, ahead of Maple County’s 600,000, the state agriculture office said.", { para: true }),
          statsLine("s3", "Both counties’ figures come from the state agriculture office, counted the same way.")] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Cedar County harvested more in total because it planted twice the land. Per acre it harvested 150 bushels and Maple County 200, so Maple County’s farms grew corn better."],
      need: "You would need the harvest per acre in each county, which the numbers give: 150 and 200."
    }),
    std({
      id: "k-mills", fit: "holds", line: "s1",
      claim: ["The mill’s payroll grew by about 4% in a year", [["The new packing line makes Lakeview Mills add 4% more workers", "heard-cause"], ["Lakeview Mills has 4% more office workers than a year ago", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Lakeview Beacon · Business",
        headline: statsLine("h", "Lakeview Mills adds jobs: 4% more workers than a year ago"),
        lines: [
          statsLine("s2", "The mill opened a new packing line this spring; both counts come from the payroll list on the first of the month."),
          statsLine("s1", "Lakeview Mills had 1,040 workers on its payroll this June, up from 1,000 last June, the company said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The comparison is fair: June against June, counted the same way from the payroll list, and the new line’s workers are real workers. 1,040 against 1,000 is 4% more, as the headline says."],
      need: "Nothing more is needed. The headline does not say why the mill hired more."
    }),
    std({
      id: "k-bus", fit: "holds", line: "s1",
      claim: ["More Eastport buses ran on time this spring than last spring", [["Eastport buses will run on time more often next spring too", "mixed-claim"], ["The GPS system makes Eastport buses run on time more often", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Eastport Sun · Transit",
        headline: statsLine("h", "Eastport buses run on time more often this spring"),
        lines: [
          statsLine("s1", "88% of Eastport buses ran on time this spring, up from 82% last spring, Eastport Transit reported."),
          statsLine("s2", "Both numbers come from the same GPS system on the same routes.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The comparison is fair: spring against spring, the same lines, the same GPS system. 88% against 82% is the improvement the headline describes."],
      need: "Nothing more is needed. The headline does not say why the buses improved."
    }),
    std({
      id: "k-train", fit: "outruns", line: "s1",
      claim: ["Far fewer Rivermont trains are running late than last year", [["Far fewer Rivermont trains will run late next year", "mixed-claim"], ["Far fewer trains are running late on the Rivermont line’s weekend service", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Rivermont Review · Transit",
        headline: statsLine("h", "Train delays fall to 5% on the Rivermont line"),
        lines: [
          statsLine("s1", "5% of Rivermont trains were delayed this year, down from 15% last year, the railway said."),
          statsLine("s2", "This year a train counts as delayed only if it is 15 minutes late. Last year it counted as delayed at 5 minutes late.", { para: true, note: "This is how delays were counted each year, not the share of trains delayed." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The two years were counted differently. A 10-minute delay was counted last year and is not counted this year, so the drop may come from counting fewer trains as late."],
      need: "You would need both years counted the same way, with a delay starting at the same number of minutes."
    }),
    std({
      id: "k-burger", fit: "unclear", line: null,
      claim: ["Customers like Grill House’s new burger better than the old one", [["Customers like Grill House’s new burger better than burgers at other restaurants", "mixed-claim"], ["Grill House’s new burger is its best seller", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "post", source: "Grill House · 3h",
        lines: [
          statsLine("s1", "Our new burger is a bigger hit than the old one!"),
          statsLine("s2", "It got 4.8 stars from customers this week. Come try one.", { note: "That is the new burger’s rating. It does not give the old one’s." })] }],
      deciding: ["s1", "s2"],
      reason: ["The post says the new burger beats the old one, and gives the new one’s rating, 4.8 stars, but not the old one’s. With nothing to compare it with, you cannot tell."],
      need: "You would need the old burger’s rating from the same customers."
    }),

    // ----- three held in reserve, for the weekly return of the topic -----
    std({
      id: "r-rent", fit: "outruns", line: "s1",
      claim: ["Rents in Oak Hill are 20% higher than a year ago for the same kind of apartment", [["Rents in Oak Hill’s new buildings jump 20% in a year", "mixed-who"], ["Rents in Oak Hill will jump 20% again next year", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Oak Hill Notes · Housing",
        headline: statsLine("h", "Oak Hill rents jump 20% in a year"),
        lines: [
          statsLine("s1", "The average rent in Oak Hill is $1,200 a month, up from $1,000 a year ago, the housing office said."),
          statsLine("s2", "This year’s average includes 200 new luxury apartments that were not there last year.", { para: true, note: "That is how many new apartments were counted, not the rent." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The two averages cover different apartments. This year’s includes 200 new luxury apartments that last year’s did not, which raises the average even if no rent went up."],
      need: "You would need the rent for the same apartments in both years."
    }),
    std({
      id: "r-garden", fit: "holds", line: "s1",
      claim: ["The Elm Street garden club has more members than last year", [["The Elm Street garden club will grow to 150 members next year", "mixed-claim"], ["Most of the club’s 120 members garden each week", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Elm Street Notes · Neighbors",
        headline: statsLine("h", "Elm Street garden club grows to 120 members"),
        lines: [
          statsLine("s1", "The Elm Street garden club has 120 members, up from 100 last year, according to its sign-in list."),
          statsLine("s2", "Both years’ counts come from the same list, taken in April.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The comparison is fair: the same club, the same list, taken in the same month. 120 against 100 is the growth the headline describes."],
      need: "Nothing more is needed. The headline does not say why the club grew."
    }),
    std({
      id: "r-stars", fit: "unclear", line: null,
      claim: ["Maple School students do better than students elsewhere", [["Maple School students do better than they did last year", "mixed-claim"], ["Maple School’s top readers outscore the rest", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Maple School",
        headline: statsLine("h", "Maple School students outscore the rest."),
        lines: [
          statsLine("s1", "Our students averaged 86 on the spring reading test.", { note: "That is Maple’s average. It does not say what it is compared with." }),
          statsLine("s2", "Visit us on open house day.")] }],
      deciding: ["h", "s1"],
      reason: ["The ad says Maple students “outscore the rest”, but it gives only Maple’s own average, 86, and no one else’s. Without the others’ scores there is nothing to compare."],
      need: "You would need the average of other schools on the same test."
    })
  ]);
})();
