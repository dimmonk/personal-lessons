// Stats, lesson 8 "Read the chart's numbers": the worked example and the questions of the two groups. Read where the scale starts, work out the real
// change from the numbers (the change divided by where it started, times 100), look at the time the chart covers, then check the claim's size against
// the numbers. A scale cut above zero sits on claims that hold and on claims that do not, and so does a scale from zero: the numbers decide, never the
// picture. "Not given" is tapped when only the chart gives the numbers, and it too sits on both. Invented towns, shops, schools and apps.
(() => {
  const std = spec => statsCharted({ strand: "chart", ...spec });
  const chart = (type, title, x, y, values, source) => ({ kind: "chart", type, title, x, y, series: [{ values }], labels: true, source });
  FC.items("stats", [
    // ----- the worked example: a cut scale makes 4% look like a doubling -----
    std({
      id: "w-basket", fit: "outruns", line: null, redraw: "from-zero",
      claim: ["Groceries at Hillview Market cost about twice what they did a year ago", [["Groceries at the other markets in town cost about twice what they did a year ago", "mixed-who"], ["Hillview raised its prices to make more money", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "post", source: "Sam Ortega · @samshops · 4h",
          lines: [
            statsLine("s1", "Grocery prices at Hillview Market have doubled in a year. Look at this! 😡", { note: "That repeats the claim; the prices are only on the chart." }),
            statsLine("s2", "Time to shop somewhere else.")] },
        chart("bars", "Hillview Market: a basket of 20 groceries", ["May 2024", "May 2025"], { from: 49, to: 53, step: 1, unit: "dollars" }, [50, 52], "Hillview Market price board")],
      change: { prompt: "By what percent did the basket’s cost change, up or down?", from: 50, to: 52, traps: statsChangeTraps({ from: 50, to: 52, axisFrom: 49 }) },
      steps: [
        { id: "claim", does: "Find what the post claims.", working: "“Doubled” says the basket costs about twice what it did.", ask: "claim" },
        { id: "line", does: "Find the sentence with the numbers.", working: "Neither sentence gives a number; only the chart does, so Not given.", ask: "line" },
        { id: "size", does: "Read the scale and work out the real change.", working: "The scale starts at 49, not 0. The bars say $50, then $52: a change of $2. 2 ÷ 50 × 100 = 4, so up 4%. The second bar looks three times as tall only because the scale starts at 49.", ask: "size" },
        { id: "verdict", does: "Check the claim against the numbers.", working: "Doubling would be up about 100%. The numbers show 4%, so the chart’s own numbers show the post goes too far.", ask: "verdict" }],
      deciding: ["s1"],
      reason: ["The scale starts at 49, so the bars show only the top few dollars of each price, and $52 looks three times as tall as $50. The numbers say up $2, which is 4%, not a doubling."],
      need: "You would need the basket to cost about $100 now, twice $50."
    }),

    // ----- the first group (the sentences marked): a cut scale that holds, a line that starts at a low year, a scale from zero that does not hold, and a
    // chart too short for its claim -----
    std({
      id: "p-fares", fit: "holds", line: "s1", redraw: "from-zero",
      claim: ["Lakeport’s one-ride bus fare is going up by about a quarter", [["Lakeport’s monthly bus pass is going up by about a quarter in July", "mixed-claim"], ["Lakeport’s one-ride bus fare is doubling", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "news", source: "Lakeport Ledger · Transit",
          headline: statsLine("h", "Bus fares go up by a quarter in Lakeport"),
          lines: [
            statsLine("s2", "Monthly passes stay at $60.", { note: "That is the price of a pass, not the one-ride fare." }),
            statsLine("s1", "The one-ride fare rises from $2.00 to $2.50 on July 1, the transit board voted.")] },
        chart("bars", "One-ride bus fare", ["Now", "From July"], { from: 1.5, to: 2.5, step: 0.25, unit: "dollars" }, [2, 2.5], "Lakeport transit board")],
      change: { prompt: "By what percent is the one-ride fare changing, up or down?", from: 2, to: 2.5, traps: statsChangeTraps({ from: 2, to: 2.5, axisFrom: 1.5 }) },
      deciding: ["h", "s1"],
      reason: ["The scale starts at $1.50, so the new fare’s bar looks twice as tall. The numbers say $2.00 to $2.50: 0.5 ÷ 2 × 100 = 25, up 25%, a quarter, as the headline says. A cut scale does not make a claim wrong; the numbers decide."],
      need: "Nothing more is needed. The headline claims only the one-ride fare."
    }),
    std({
      id: "p-westgate", fit: "outruns", line: "s1",
      claim: ["Westgate Library has more visits than it used to", [["Westgate Library lends more books than it used to", "mixed-claim"], ["The new reading room brought more people to Westgate Library", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "post", source: "Westgate Library · 1d",
          lines: [
            statsLine("s1", "Visits are up 150% since 2021! Thank you, readers!"),
            statsLine("s2", "We were closed for much of 2020 and open only a few days a week in 2021.", { note: "That says when the library was open, not how many visited." })] },
        chart("line", "Library visits a year, in thousands", ["2018", "2019", "2020", "2021", "2022", "2023", "2024"], { from: 0, to: 120, step: 20, unit: "thousand visits" }, [100, 98, 30, 40, 70, 90, 100], "Westgate Library")],
      change: { prompt: "From the first year on the chart to the last, by what percent did visits change, up or down?", from: 100, to: 100,
        traps: [{ slip: "from-low", value: 150, then: "That is from 2021, when the library was barely open. From 2018, a usual year, visits did not go up." }] },
      deciding: ["s1", "s2"],
      reason: ["“Up 150%” is true from 2021, when the library was open only a few days a week. The chart starts in 2018: 100 thousand visits then, 100 thousand in 2024. Visits are back to what they were, not above it."],
      need: "You would need visits above the usual years before 2020, which the chart shows they are not."
    }),
    std({
      id: "p-solar", fit: "outruns", line: "s1",
      claim: ["Three times as many Marlow homes have solar panels as last year", [["Marlow homes with solar panels use about a third less power than last year", "mixed-claim"], ["Lower prices led Marlow homes to add solar panels", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Marlow Daily · Homes",
          headline: statsLine("h", "Home solar triples in Marlow"),
          lines: [
            statsLine("s2", "Installers say they are booked through spring."),
            statsLine("s1", "The city counted 600 homes with solar panels this year, up from 400 last year.")] },
        chart("bars", "Marlow homes with solar panels", ["Last year", "This year"], { from: 0, to: 700, step: 100, unit: "homes" }, [400, 600], "City of Marlow")],
      change: { prompt: "By what percent did the number of homes with solar panels change, up or down?", from: 400, to: 600, traps: statsChangeTraps({ from: 400, to: 600, axisFrom: 0 }) },
      deciding: ["h", "s1"],
      reason: ["This chart starts at zero, so the bars are fair, and they show the same as the numbers: 400 to 600 is up 200, 200 ÷ 400 × 100 = 50, up 50%. Tripling would be 1,200 homes."],
      need: "You would need about 1,200 homes with panels, three times 400."
    }),
    std({
      id: "p-bayrent", fit: "unclear", line: "s1", redraw: "from-zero",
      claim: ["Bayside rents are higher than they have ever been", [["Bayside house prices are higher than they have ever been", "mixed-claim"], ["Landlords raised rents to make more money", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Bayside Tribune · Housing",
          headline: statsLine("h", "Bayside rents are the highest they have ever been"),
          lines: [
            statsLine("s1", "The average rent rose from $1,800 in January to $1,890 in June, the housing office said."),
            statsLine("s2", "Renters’ groups plan a meeting on Thursday.", { para: true })] },
        chart("line", "Average rent in Bayside this year", ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], { from: 1750, to: 1900, step: 25, unit: "dollars a month" }, [1800, 1810, 1830, 1850, 1870, 1890], "Bayside housing office")],
      change: { prompt: "From the first month on the chart to the last, by what percent did the average rent change, up or down?", from: 1800, to: 1890, traps: statsChangeTraps({ from: 1800, to: 1890, axisFrom: 1750 }) },
      deciding: ["h", "s1"],
      reason: ["The numbers show rent up 5% this year: $90 on $1,800. But “highest ever” needs earlier years, and the chart and the story give only January to June. You cannot tell."],
      need: "You would need the average rent in earlier years."
    }),

    // ----- the second group (nothing marked) -----
    std({
      id: "q-glenwood", fit: "outruns", line: "s2", redraw: "from-zero",
      claim: ["Car thefts in Glenwood are about half what they were", [["Car break-ins in Glenwood are about half what they were", "mixed-claim"], ["More police patrols cut car thefts in Glenwood", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Glenwood Gazette · Safety",
          headline: statsLine("h", "Car thefts fall by half in Glenwood"),
          lines: [
            statsLine("s1", "Police Chief Omar Reyes praised his officers."),
            statsLine("s2", "Police counted 800 car thefts in 2024 and 760 in 2025.")] },
        chart("bars", "Car thefts in Glenwood", ["2024", "2025"], { from: 750, to: 810, step: 10, unit: "thefts" }, [800, 760], "Glenwood police")],
      change: { prompt: "By what percent did car thefts change, up or down?", from: 800, to: 760, traps: statsChangeTraps({ from: 800, to: 760, axisFrom: 750 }) },
      deciding: ["h", "s2"],
      reason: ["The scale starts at 750, so 760 looks a fifth the height of 800, a fall of four fifths. The numbers say down 40: 40 ÷ 800 × 100 = 5, down 5%, not half."],
      need: "You would need about 400 thefts, half of 800."
    }),
    std({
      id: "q-cedarhill", fit: "holds", line: null, redraw: "from-zero",
      claim: ["Cedar Hill School’s average reading score rose about a tenth from last year", [["Cedar Hill School’s average math score rose about a tenth from last year", "mixed-claim"], ["Cedar Hill’s new teachers raised reading scores", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "post", source: "Principal Ruth Diaz · Cedar Hill School · 2d",
          lines: [
            statsLine("s1", "So proud of our students: reading scores are up a tenth on last year!", { note: "That repeats the claim; the scores are only on the chart." }),
            statsLine("s2", "Thank you, teachers and families.")] },
        chart("bars", "Average reading score", ["Last year", "This year"], { from: 60, to: 80, step: 5, unit: "points" }, [70, 77], "Cedar Hill School")],
      change: { prompt: "By what percent did the average reading score change, up or down?", from: 70, to: 77, traps: statsChangeTraps({ from: 70, to: 77, axisFrom: 60 }) },
      deciding: ["s1"],
      reason: ["No sentence gives a number; the chart does. Its scale starts at 60, which makes the rise look bigger, but the numbers say 70 to 77: 7 ÷ 70 × 100 = 10, up 10%, a tenth, as the post says."],
      need: "Nothing more is needed for the size. The post does not say why scores rose."
    }),
    std({
      id: "q-water", fit: "unclear", line: "s1", redraw: "from-zero",
      claim: ["A Lakeview home uses less water than a Fenwick home", [["Lakeview homes used less water this summer than last", "mixed-claim"], ["Lakeview’s businesses use less water than Fenwick’s", "mixed-who"]]],
      blocks: [
        { kind: "article", form: "news", source: "Lakeview Beacon · Town",
          headline: statsLine("h", "Lakeview homes beat Fenwick at saving water"),
          lines: [
            statsLine("s1", "Lakeview homes used 120 million gallons this summer, against 150 million for Fenwick homes, the county said."),
            statsLine("s2", "Both towns asked homes to skip watering lawns in July.", { para: true })] },
        chart("bars", "Water used by homes this summer, in millions of gallons", ["Lakeview", "Fenwick"], { from: 100, to: 160, step: 10, unit: "million gallons" }, [120, 150], "County water office")],
      change: { prompt: "By what percent is Lakeview’s total below Fenwick’s?", from: 150, to: 120, traps: statsChangeTraps({ from: 150, to: 120, axisFrom: 100 }) },
      deciding: ["h", "s1"],
      reason: ["The numbers show Lakeview’s homes used 20% less in all: 30 on 150. But those are totals, and the story never says how many homes each town has; a smaller town uses less in total even if each home uses more. You cannot tell."],
      need: "You would need the number of homes in each town, to compare the water used by each home."
    }),
    std({
      id: "q-harbor", fit: "outruns", line: "f1", redraw: "from-zero",
      claim: ["Harbor Bakery is selling more bread than it ever has", [["Harbor Bakery is selling more cakes and pies than it ever has", "mixed-claim"], ["The new rye loaf raised Harbor Bakery’s sales", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "ad", source: "Harbor Bakery",
          headline: statsLine("h", "Our best spring ever: bread sales up 50% since February!"),
          lines: [
            statsLine("s1", "Thank you, Harbor, for a great spring!"),
            statsLine("f1", "This June we sold 450 loaves a day. Last June we sold 500.", { fine: true })] },
        chart("line", "Loaves sold a day, this year", ["Feb", "Mar", "Apr", "May", "Jun"], { from: 250, to: 500, step: 50, unit: "loaves" }, [300, 340, 380, 420, 450], "Harbor Bakery")],
      change: { prompt: "From the first month on the chart to the last, by what percent did daily sales change, up or down?", from: 300, to: 450, traps: statsChangeTraps({ from: 300, to: 450, axisFrom: 250 }) },
      deciding: ["h", "f1"],
      reason: ["The line starts in February, a slow month, so it climbs all the way: from 300 to 450 is up 50%, as the ad says. But the small print gives last June: 500 loaves a day, more than this June’s 450. Not the best ever."],
      need: "You would need this June above last June’s 500 loaves a day."
    }),
    std({
      id: "q-stepup", fit: "holds", line: null, redraw: "from-zero",
      claim: ["StepUp users walk more now than at any time since the app began", [["StepUp users sleep more than ever", "mixed-claim"], ["The StepUp app got its users to walk more", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "post", source: "StepUp app · 3h",
          lines: [
            statsLine("s1", "Our users are more active than ever! 🏃", { note: "That repeats the claim; the steps are only on the chart." }),
            statsLine("s2", "Thanks for walking with us since we launched in January.")] },
        chart("line", "Average steps a day, StepUp users, since launch", ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], { from: 6000, to: 8000, step: 500, unit: "steps" }, [6400, 6600, 6900, 7200, 7500, 7680], "StepUp")],
      change: { prompt: "From the first month on the chart to the last, by what percent did average steps change, up or down?", from: 6400, to: 7680, traps: statsChangeTraps({ from: 6400, to: 7680, axisFrom: 6000 }) },
      deciding: ["s1", "s2"],
      reason: ["The app launched in January, so the chart covers every month there has been, and June is the highest: 7,680 steps against 6,400 at the start, up 20%. For StepUp’s users, “more than ever” holds up. The scale starts at 6,000, which makes the climb look steeper, but it is real."],
      need: "Nothing more is needed for StepUp’s users. The post does not say why they walk more."
    })
  ]);
})();
