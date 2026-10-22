// Stats, lesson 2 "How big it is: out of how many": the worked example, the questions of the groups and the check. A count means little until it is set
// against how many people (or flights, loaves) it is out of, and a sum of money until it is for each person and for one year; the text often gives the
// usual level to compare with. Invented towns, offices and products. Each question's numbers are written once, in its own table, and its words and its
// answer are made from them. Strong words ("soar", "boom") sit on claims that hold and on claims that do not: the size decides, never the word.
(() => {
  const per = (count, pop) => statsRate(count, pop);
  const sizeTraps = (count, pop, unit = "people") => [
    { slip: "per-hundred", value: count / pop * 100, then: `That is out of 100 ${unit}. The question is how many in every 1,000.` },
    { slip: "bare-count", value: count }
  ];
  const cut = "That is the usual level, not the count for this time.";
  // a sum of money for each person and each year: the frame, and the slip of leaving out the years
  const MONEY = "$__ for each resident a year";
  const moneyTraps = (total, people, years) => [
    { slip: "whole-time", value: total / people, then: `That is for all ${years} years. Divide by ${years} for one year.` }
  ];

  FC.items("stats", [
    // ----- the worked example: a bare count that sounds big -----
    (() => {
      const t = { count: 1200, pop: 400000, usual: 6 }, rate = per(t.count, t.pop);   // 3 in 1,000
      return statsSized({
        id: "w-flu", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["More people in Millbrook have the flu than is usual", [["More people in Millbrook’s county have the flu than is usual", "mixed-who"], ["Flu shots will stop the flu in Millbrook", "mixed-claim"]]],
        blocks: [{ kind: "article", form: "news", source: "Millbrook Courier · Health",
          headline: statsLine("h", "Flu hits Millbrook hard this winter"),
          lines: [
            statsLine("s1", `The county health office counted ${statsN(t.count)} flu cases in Millbrook this winter, in a city of about ${statsN(t.pop)} people.`),
            statsLine("s2", `In a usual winter, Millbrook sees about ${t.usual} flu cases in every 1,000 people, the county says.`, { note: cut }),
            statsLine("s3", "Health officer Dr. Lena Ortiz urged residents to get their flu shots.", { para: true, note: "That is advice, not a count." })] }],
        size: { prompt: "About how many people in every 1,000 had the flu?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        steps: [
          { id: "claim", does: "Find what the headline claims.", working: "“Hits hard” says more people have the flu than is usual.", ask: "claim" },
          { id: "line", does: "Find the sentence with the count and what it is out of.", working: "The first sentence has both: 1,200 people with the flu, out of 400,000 people in all.", ask: "line" },
          { id: "size", does: "Turn the count into so many in 1,000.", working: "1,200 ÷ 400,000 × 1,000 = 3, so 3 in every 1,000.", ask: "size" },
          { id: "verdict", does: "Compare it with the usual.", working: "The usual is about 6 in every 1,000. This winter is 3, half the usual, so the headline says more than the numbers show.", ask: "verdict" }],
        deciding: ["h", "s1", "s2"],
        reason: ["1,200 people with the flu sounds like a lot, but in a city of 400,000 it is 3 people in every 1,000. The usual winter is about 6 in every 1,000, so this winter is milder than usual, not harder."],
        need: "You would need a count above the usual for a city this size: more than 2,400.",
        figure: { kind: "figure", type: "people", data: { caption: "People with the flu, out of 1,000", rows: [{ label: "A usual winter", count: t.usual }, { label: "This winter", count: rate }] } }
      });
    })(),

    // ----- the first group (the numbers marked): a strong word that holds, a plain claim that does not, a count with no total, and a usual level said in words -----
    (() => {
      const t = { count: 150, pop: 50000, usual: 1.5 }, rate = per(t.count, t.pop);   // 3 in 1,000, twice the usual
      return statsSized({
        id: "p-fires", strand: "size-count", fit: "holds", line: "s1",
        claim: ["Ridgemoor is getting far more fire calls than usual for its size", [["Fires in Ridgemoor are more dangerous than they used to be", "mixed-claim"], ["Fire calls soar in Ridgemoor’s county", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Ridgemoor Register · Town Hall",
          headline: statsLine("h", "Fire calls soar in Ridgemoor"),
          lines: [
            statsLine("s1", `Ridgemoor firefighters answered ${t.count} fire calls this year, in a town of about ${statsN(t.pop)} people, the fire chief said.`),
            statsLine("s2", `In a usual year, the town has about ${t.usual} fire calls for every 1,000 people.`, { note: cut }),
            statsLine("s3", "The chief asked neighbors to test their smoke alarms.", { para: true })] }],
        size: { prompt: "About how many fire calls for every 1,000 people this year?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["h", "s1", "s2"],
        reason: [`${t.count} calls in a town of ${statsN(t.pop)} is 3 for every 1,000 people. The usual is 1.5 in every 1,000, so this year is twice the usual, and “soar” fits.`],
        need: "Nothing more is needed for the size. To say why the calls rose you would need more than these counts, and the headline does not say why."
      });
    })(),
    (() => {
      const t = { count: 2400, pop: 1200000, usual: 2 }, rate = per(t.count, t.pop);   // 2 in 1,000, the usual
      return statsSized({
        id: "p-potholes", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["City hall is getting more pothole complaints than usual for a city this size", [["There are more potholes than usual", "mixed-claim"], ["City hall is getting more pothole complaints than usual from downtown", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Lakeview Star · City Hall",
          headline: statsLine("h", "More pothole complaints than usual at city hall"),
          lines: [
            statsLine("s2", `A usual year brings about ${t.usual} complaints for every 1,000 residents.`, { note: cut }),
            statsLine("s1", `City hall received ${statsN(t.count)} pothole complaints this year, in a city of about 1.2 million people, the public works office said.`),
            statsLine("s3", "Crews will start filling the worst holes in April.", { para: true })] }],
        size: { prompt: "About how many complaints for every 1,000 residents this year?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["h", "s1", "s2"],
        reason: ["2,400 complaints in a city of 1.2 million is 2 for every 1,000 residents. That is the usual, not more than usual."],
        need: "You would need a count above the usual for a city this size: more than 2,400."
      });
    })(),
    statsSized({
      id: "p-clinic", strand: "size-count", fit: "unclear", line: null,
      claim: ["A lot of people near the Lakeshore clinic have had stomach bugs", [["A lot of people in the region have had stomach bugs", "mixed-who"], ["The clinic’s patients caught the stomach bug at the clinic", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Lakeshore Gazette · Health",
        headline: statsLine("h", "Stomach bug sends 300 to Lakeshore clinic"),
        lines: [
          statsLine("s1", "The Lakeshore clinic saw 300 patients with stomach bugs last month, a nurse said.", { note: "That is a count of patients. It does not say how many people it is out of." }),
          statsLine("s2", "Staff said the waiting room was full most days.", { para: true })] }],
      size: null,
      deciding: ["h", "s1"],
      reason: ["300 patients is a count, but the story does not say how many people use the clinic or live nearby, and it gives no usual month to compare with. Without what it is out of, you cannot tell how big it is."],
      need: "You would need how many people the clinic serves, and how many stomach-bug patients it sees in a usual month."
    }),
    statsSized({
      id: "p-bites", strand: "size-count", fit: "outruns", line: null,
      claim: ["Dog bites in Cedar Park are far above usual this summer", [["Dogs in Cedar Park are more dangerous than dogs elsewhere", "mixed-claim"], ["Dog bites surge among Cedar Park’s mail carriers", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Cedar Park Post · Neighbors",
        headline: statsLine("h", "Dog bites surge in Cedar Park, neighbors say"),
        lines: [
          statsLine("s1", "Animal control took 40 reports of dog bites in Cedar Park this summer.", { note: "That is a count of bites. It does not say how many people it is out of." }),
          statsLine("s2", "That is about as many as in a usual summer, the animal control office said.", { para: true })] }],
      size: null,
      deciding: ["h", "s2"],
      reason: ["The count has no total, so you cannot size it. But the animal control office says in words that it is about as many as a usual summer, so the text itself shows there was no surge."],
      need: "You would need a count well above a usual summer’s, and the office says there was none."
    }),

    // ----- the second group (nothing marked): points, a count of people riding, a sum of money, a usual day, and a count with no usual -----
    (() => {
      const t = { before: 88, after: 90 };
      return statsSized({
        id: "q-insure", strand: "size-count", fit: "holds", line: "s1",
        claim: ["More Carver County adults have health insurance than a year ago", [["Carver County adults pay less for health insurance than a year ago", "mixed-claim"], ["More Carver County children have health insurance than a year ago", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Carver County Times · Health",
          headline: statsLine("h", "Health insurance up two points in Carver County"),
          lines: [
            statsLine("s1", `The share of Carver County adults with health insurance rose from ${t.before}% to ${t.after}% over the year, the county health office reported.`),
            statsLine("s2", "The office surveys 20,000 adults picked at random from the county’s address list.", { para: true, note: "That is how many were asked, not the share insured." })] }],
        size: { prompt: "In people, how many in every 1,000 adults had health insurance, before and after?", frame: "from __ in 1,000 to __ in 1,000", answer: [t.before * 10, t.after * 10],
          traps: [{ slip: "per-hundred", value: [t.before, t.after], then: "Those are the percents, out of 100. Out of 1,000, 88% is 880 people and 90% is 900." }] },
        deciding: ["h", "s1"],
        reason: ["“Two points” means 2 more in every 100 adults, from 88 in 100 to 90 in 100. Out of 1,000 adults that is from 880 to 900: 20 more people insured in every 1,000."],
        need: "Nothing more is needed for the size. To say what brought it up you would need more, and the headline does not say."
      });
    })(),
    (() => {
      const t = { count: 54000, pop: 1800000, usual: 30 }, rate = per(t.count, t.pop);   // 30 in 1,000, the usual
      return statsSized({
        id: "q-bus", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["More Marlow residents are riding the bus than usual", [["Bus service in Marlow got better", "mixed-claim"], ["More Marlow visitors are riding the bus than usual", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Marlow Daily · Transit",
          headline: statsLine("h", "More Marlow residents riding the bus"),
          lines: [
            statsLine("s2", `In a usual month, about ${t.usual} of every 1,000 residents ride the bus on a given day.`, { note: cut }),
            statsLine("s1", `Marlow Transit counted ${statsN(t.count)} people riding its buses on an average day last month, in a city of about 1.8 million.`),
            statsLine("s3", "Transit director Kim Aldana thanked riders for their patience during repairs.", { para: true })] }],
        size: { prompt: "About how many of every 1,000 residents rode the bus on an average day?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["h", "s1", "s2"],
        reason: ["54,000 riders a day sounds like a lot, but in a city of 1.8 million it is 30 in every 1,000 residents. That is the usual, so no more residents are riding than usual."],
        need: "You would need a count above the usual for a city this size: more than 54,000 riders a day."
      });
    })(),
    (() => {
      const t = { total: 6000000, people: 300000, years: 10 }, each = t.total / t.people / t.years;   // $2 a year
      return statsSized({
        id: "q-library", strand: "size-count", fit: "holds", line: "s1",
        claim: ["Each resident pays about $2 a year for the new library", [["The new library will cost the city $2 million a year", "mixed-claim"], ["The new library will cost each Riverside household about $2 a year", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Riverside Record · City Hall",
          headline: statsLine("h", "New library will cost each resident about $2 a year"),
          lines: [
            statsLine("s1", `The city will pay $6 million for the new library over ${t.years} years, and Riverside has about ${statsN(t.people)} residents, the mayor’s office said.`),
            statsLine("s2", "The library will open in the spring.", { para: true })] }],
        size: { prompt: "How many dollars is that for each resident, each year?", frame: MONEY, answer: each, traps: moneyTraps(t.total, t.people, t.years) },
        deciding: ["h", "s1"],
        reason: ["$6 million ÷ 300,000 residents is $20 each, and that is over 10 years, so $2 a year, which is what the headline says."],
        need: "Nothing more is needed for the cost. Whether the library is worth it is another question, and the headline does not claim that."
      });
    })(),
    (() => {
      const t = { count: 2000, pop: 500000, usual: 4 }, rate = per(t.count, t.pop);   // 4 in 1,000, the usual
      return statsSized({
        id: "q-crash", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["The Pixelo app crashed for more people than usual yesterday", [["Having 500,000 users makes the Pixelo app crash more than usual", "heard-cause"], ["Photo apps crashed for more people than usual yesterday", "mixed-who"]]],
        blocks: [{ kind: "article", form: "post", source: "Pixelo Status · 1h",
          lines: [
            statsLine("s2", `A usual day brings about ${t.usual} crash reports for every 1,000 users.`, { note: cut }),
            statsLine("s1", `Crash alert: Pixelo received ${statsN(t.count)} crash reports yesterday from its ${statsN(t.pop)} users.`)] }],
        size: { prompt: "About how many crash reports for every 1,000 users yesterday?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["s1", "s2"],
        reason: ["2,000 crash reports out of 500,000 users is 4 for every 1,000. A usual day brings about 4 for every 1,000, so yesterday was an ordinary day."],
        need: "You would need a count above the usual for this many users: more than 2,000 reports."
      });
    })(),
    (() => {
      const t = { count: 480, pop: 600 }, rate = per(t.count, t.pop);   // 800 in 1,000, and no usual given
      return statsSized({
        id: "q-lunch", strand: "size-count", fit: "unclear", line: "s1",
        claim: ["Far more Cedar Hill students than usual bought lunch today", [["Far more Cedar Hill teachers than usual bought lunch today", "mixed-who"], ["Needing more volunteers makes the Cedar Hill lunch line out of control", "heard-cause"]]],
        blocks: [{ kind: "article", form: "post", source: "Maya Torres · Cedar Hill PTA · 4h",
          lines: [
            statsLine("s1", `The Cedar Hill lunch line is out of control. ${t.count} of our ${t.pop} students bought lunch today!`),
            statsLine("s2", "We need more volunteers to help serve.")] }],
        size: { prompt: "About how many students in every 1,000 bought lunch today?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["s1"],
        reason: ["480 of 600 students is 800 in every 1,000, which sounds like a lot, but the post never says how many buy lunch on an ordinary day. The count and its total are there; the usual is not, so you cannot tell."],
        need: "You would need how many students buy lunch on an ordinary day."
      });
    })(),

    // a strong word on a little rise: above the usual, but an ordinary year
    (() => {
      const t = { count: 330, pop: 30000, usual: 10 }, rate = per(t.count, t.pop);   // 11 in 1,000, a tenth above the usual
      return statsSized({
        id: "q-cards", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["Elmwood is signing up far more library card holders than usual", [["Elmwood’s library is lending far more books than usual", "mixed-claim"], ["Library card sign-ups soar among Elmwood’s children", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Elmwood Echo · Neighbors",
          headline: statsLine("h", "Library card sign-ups soar in Elmwood"),
          lines: [
            statsLine("s2", `In a usual year, about ${t.usual} in every 1,000 Elmwood residents sign up for a card.`, { note: cut }),
            statsLine("s1", `The library issued ${t.count} new cards this year, in a town of about ${statsN(t.pop)} people.`, { para: true })] }],
        size: { prompt: "About how many new cards for every 1,000 residents this year?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["h", "s1", "s2"],
        reason: ["330 cards in a town of 30,000 is 11 in every 1,000. The usual is 10, so this year is a little above the usual, an ordinary year, not a soar."],
        need: "You would need a big rise to call it a soar: half again the usual or more, about 15 in every 1,000."
      });
    })(),

    // ----- the third group's questions: a count that cannot be told, and points again -----
    statsSized({
      id: "q-sweaters", strand: "size-count", fit: "unclear", line: null,
      claim: ["The Cardigan Corner sold a great many sweaters last week", [["The Cardigan Corner sold a great many coats and sweaters last week", "mixed-claim"], ["Being open late through the holidays makes the Cardigan Corner sell a great many sweaters", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Eastport Sun · Shopping",
        headline: statsLine("h", "Cardigan Corner sells 9,000 sweaters in a week"),
        lines: [
          statsLine("s1", "Cardigan Corner sold 9,000 sweaters last week, the owner said.", { note: "That is a count of sweaters sold. It does not say how many shoppers or what is usual." }),
          statsLine("s2", "The store is open late through the holidays.", { para: true })] }],
      size: null,
      deciding: ["h", "s1"],
      reason: ["9,000 is a count of sweaters, with nothing to compare it with: not the number of shoppers, not a usual week, not another store. You cannot tell if that is a lot."],
      need: "You would need what a usual week brings, and how many people shop there."
    }),

    (() => {
      const t = { before: 52, after: 58 };
      return statsSized({
        id: "q-vote", strand: "size-count", fit: "holds", line: "s1",
        claim: ["More Glenview adults voted this year than in the last election", [["Six in 100 Glenview adults voted this year", "mixed-claim"], ["More Glenview teenagers signed up to vote this year", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Glenview Gazette · Elections",
          headline: statsLine("h", "Turnout up six points in Glenview"),
          lines: [
            statsLine("s2", "The count comes from the town’s own voter rolls, the clerk said."),
            statsLine("s1", `The share of Glenview’s adults who voted rose from ${t.before}% in the last election to ${t.after}% this year.`, { para: true })] }],
        size: { prompt: "In people, how many in every 1,000 adults voted, before and after?", frame: "from __ in 1,000 to __ in 1,000", answer: [t.before * 10, t.after * 10],
          traps: [{ slip: "per-hundred", value: [t.before, t.after], then: "Those are the percents, out of 100. Out of 1,000, 52% is 520 people and 58% is 580." }] },
        deciding: ["h", "s1"],
        reason: ["“Six points” means 6 more in every 100 adults, from 52 in 100 to 58 in 100. Out of 1,000 adults that is from 520 to 580: 60 more voters in every 1,000."],
        need: "Nothing more is needed for the size. The headline does not say why turnout rose."
      });
    })(),

    // ----- the check: five new questions from other areas of life (pets, flights, a stadium, bread, school lunch) -----
    (() => {
      const t = { count: 18000, pop: 600000, usual: 15 }, rate = per(t.count, t.pop);   // 30 in 1,000, twice the usual
      return statsSized({
        id: "k-pets", strand: "size-count", fit: "holds", line: "s1",
        claim: ["Harbor City is selling far more dog licenses than usual for its size", [["Twice as many dogs live in Harbor City as in other cities", "mixed-claim"], ["Renewing online makes dog licenses boom in Harbor City", "heard-cause"]]],
        blocks: [{ kind: "article", form: "news", source: "Harbor City Press · Pets",
          headline: statsLine("h", "Dog licenses boom in Harbor City"),
          lines: [
            statsLine("s2", `In a usual year, the city sells about ${t.usual} licenses for every 1,000 people.`, { note: cut }),
            statsLine("s1", `Harbor City sold ${statsN(t.count)} dog licenses this year, in a city of about ${statsN(t.pop)} people, the city clerk said.`),
            statsLine("s3", "Licenses can be renewed online.", { para: true })] }],
        size: { prompt: "About how many licenses for every 1,000 people this year?", answer: rate, traps: sizeTraps(t.count, t.pop) },
        deciding: ["h", "s1", "s2"],
        reason: ["18,000 licenses in a city of 600,000 is 30 for every 1,000 people. The usual is 15, so this year is twice the usual, and “boom” fits."],
        need: "Nothing more is needed for the size. The headline does not say why, and the story does not either."
      });
    })(),
    (() => {
      const t = { count: 1800, pop: 12000, usual: 200 }, rate = per(t.count, t.pop);   // 150 in 1,000 flights, fewer than usual
      return statsSized({
        id: "k-flights", strand: "size-count", fit: "holds", line: "s1",
        claim: ["Fewer Riverton flights were delayed in March than is usual", [["Fewer Riverton flights will be delayed from now on", "mixed-claim"], ["Fewer flights into Riverton from other airports were delayed in March than is usual", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Riverton Herald · Travel",
          headline: statsLine("h", "Fewer flights delayed at Riverton Airport in March"),
          lines: [
            statsLine("s3", "The airport added two baggage carts this winter."),
            statsLine("s1", `Riverton Airport delayed ${statsN(t.count)} of its ${statsN(t.pop)} flights in March, the airport said.`, { para: true }),
            statsLine("s2", `In a usual month, about ${t.usual} of every 1,000 flights are delayed.`, { note: cut })] }],
        size: { prompt: "About how many flights in every 1,000 were delayed in March?", answer: rate, traps: sizeTraps(t.count, t.pop, "flights") },
        deciding: ["h", "s1", "s2"],
        reason: ["1,800 delayed flights out of 12,000 is 150 in every 1,000. The usual is 200 in every 1,000, so March was better than usual, as the headline says."],
        need: "Nothing more is needed for the size. The headline does not say why, and the story does not either."
      });
    })(),
    (() => {
      const t = { total: 45000000, people: 600000, years: 15 }, each = t.total / t.people / t.years;   // $5 a year
      return statsSized({
        id: "k-stadium", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["Every resident pays $100 a year for the stadium", [["The stadium deal will cost the city $100 million", "mixed-claim"], ["The stadium deal will cost every household in the city $100 a year", "mixed-who"]]],
        blocks: [{ kind: "article", form: "news", source: "Bayport Tribune · City Hall",
          headline: statsLine("h", "Stadium deal will cost every resident $100 a year"),
          lines: [
            statsLine("s2", "The team says the stadium will bring new jobs downtown."),
            statsLine("s1", `The city will pay $45 million toward the new stadium over ${t.years} years, and it has about ${statsN(t.people)} residents, the mayor’s office said.`, { para: true })] }],
        size: { prompt: "How many dollars is that for each resident, each year?", frame: MONEY, answer: each, traps: moneyTraps(t.total, t.people, t.years) },
        deciding: ["h", "s1"],
        reason: ["$45 million ÷ 600,000 residents is $75 each, and that is over 15 years, so $5 a year, not $100."],
        need: "You would need a cost near $100 a year for each resident, or a headline that gives the real one: about $5 a year."
      });
    })(),
    (() => {
      const t = { count: 90, pop: 1800, usual: 50 }, rate = per(t.count, t.pop);   // 50 in 1,000, the usual
      return statsSized({
        id: "k-bread", strand: "size-count", fit: "outruns", line: "s1",
        claim: ["Customers are returning more loaves than usual", [["Fresh sourdough makes customers return more loaves than usual", "heard-cause"], ["Customers are returning more cakes than usual", "mixed-claim"]]],
        blocks: [{ kind: "article", form: "post", source: "Oak Street Bakery · 6h",
          lines: [
            statsLine("s1", `Bread returns jumped this week: customers brought back ${t.count} of the ${statsN(t.pop)} loaves we baked.`),
            statsLine("s2", `Usually about ${t.usual} of every 1,000 loaves come back.`, { note: cut }),
            statsLine("s3", "Fresh sourdough comes out of the oven at 7 a.m. tomorrow.", { note: "That is a time, not a count of loaves." })] }],
        size: { prompt: "About how many loaves in every 1,000 were returned this week?", answer: rate, traps: sizeTraps(t.count, t.pop, "loaves") },
        deciding: ["s1", "s2"],
        reason: ["90 returned out of 1,800 loaves is 90 ÷ 1,800 × 1,000 = 50 in every 1,000. Usually about 50 in every 1,000 come back, so returns did not “jump”."],
        need: "You would need a share of returns above the usual: more than 90 loaves in 1,800."
      });
    })(),
    statsSized({
      id: "k-compost", strand: "size-count", fit: "unclear", line: "s1",
      claim: ["Westside Elementary throws away more lunch food than it should", [["Westside Elementary’s teachers throw away too much lunch food", "mixed-who"], ["The new compost bin makes Westside throw away more lunch food", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Westside Weekly · Schools",
        headline: statsLine("h", "Westside Elementary throws out too much lunch food"),
        lines: [
          statsLine("s2", "The school is starting a compost bin this spring."),
          statsLine("s1", "Westside Elementary’s 400 students threw away 600 pounds of uneaten lunch food last week, the custodian said.", { para: true })] }],
      size: { prompt: "How many pounds is that for each student, for the week?", frame: "__ pounds for each student", answer: 1.5, tol: { round: 0.1 },
        traps: [{ slip: "bare-count", value: 600 }, { slip: "flipped", value: 400 / 600, then: "That is students for each pound. Divide the pounds by the students." }] },
      deciding: ["h", "s1"],
      reason: ["600 pounds for 400 students is 1.5 pounds each for the week. The story gives no usual week and no other school to compare with, so you cannot tell whether that is too much."],
      need: "You would need how much food a school this size usually throws away in a week."
    })
  ]);
})();
