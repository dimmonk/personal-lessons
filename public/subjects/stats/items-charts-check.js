// Stats, lesson 8 "Read the chart's numbers": the five questions of the end check, from areas of life the lesson's groups did not use (sports crowds,
// power bills, an animal shelter, phone prices, a state park), and three held in reserve for the returns. Invented teams, companies and places.
(() => {
  const std = spec => statsCharted({ strand: "chart", ...spec });
  const chart = (type, title, x, y, values, source) => ({ kind: "chart", type, title, x, y, series: [{ values }], labels: true, source });
  FC.items("stats", [
    std({
      id: "k-crowds", fit: "outruns", line: "s1", redraw: "from-zero",
      claim: ["Three times as many people come to Riverhawks games as last season", [["Three times as many people watch Riverhawks games on TV as last season", "mixed-claim"], ["The fireworks night tripled the crowds", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Bayside Tribune · Sports",
          headline: statsLine("h", "Crowds at Riverhawks games triple"),
          lines: [
            statsLine("s1", "The average crowd rose from 12,000 a game last season to 13,200 this season, the team said."),
            statsLine("s2", "The team added a fireworks night in June.", { para: true })] },
        chart("bars", "Average crowd at a Riverhawks game", ["Last season", "This season"], { from: 11500, to: 13500, step: 500, unit: "people" }, [12000, 13200], "Riverhawks")],
      change: { prompt: "By what percent did the average crowd change, up or down?", from: 12000, to: 13200, traps: statsChangeTraps({ from: 12000, to: 13200, axisFrom: 11500 }) },
      deciding: ["h", "s1"],
      reason: ["The scale starts at 11,500, so this season’s bar looks over three times as tall. The numbers say up 1,200: 1,200 ÷ 12,000 × 100 = 10, up 10%, not triple."],
      need: "You would need an average crowd of about 36,000, three times 12,000."
    }),
    std({
      id: "k-northstar", fit: "holds", line: null, redraw: "from-zero",
      claim: ["Northstar homes’ average bill fell about a fifth from last March", [["Northstar’s business customers’ average bill fell about a fifth from last March", "mixed-who"], ["Northstar’s prices are the lowest in town", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "ad", source: "Northstar Power",
          headline: statsLine("h", "Our customers’ bills fell by a fifth this March."),
          lines: [
            statsLine("s1", "Thank you for choosing Northstar."),
            statsLine("f1", "Average bill of every Northstar home, March 2024 and March 2025.", { fine: true, note: "That says which bills were averaged, not the amounts." })] },
        chart("bars", "Average monthly bill", ["March 2024", "March 2025"], { from: 100, to: 150, step: 10, unit: "dollars" }, [140, 112], "Northstar Power")],
      change: { prompt: "By what percent did the average bill change, up or down?", from: 140, to: 112, traps: statsChangeTraps({ from: 140, to: 112, axisFrom: 100 }) },
      deciding: ["h", "f1"],
      reason: ["Only the chart gives the numbers. Its scale starts at $100, which makes the drop look bigger, but $140 to $112 is down 28: 28 ÷ 140 × 100 = 20, down 20%, a fifth, as the ad says, on every home’s bill."],
      need: "Nothing more is needed. The ad does not say why bills fell."
    }),
    std({
      id: "k-adopt", fit: "outruns", line: "s1",
      claim: ["Pet adoptions at the Carver shelter are up by about half", [["Pets brought in to the Carver shelter are up by half", "mixed-claim"], ["The shelter’s new website raised adoptions by half", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Carver Daily · Pets",
          headline: statsLine("h", "Pet adoptions jump by half at Carver shelter"),
          lines: [
            statsLine("s1", "The shelter found homes for 960 pets this year, up from 800 last year."),
            statsLine("s2", "Volunteers ran weekend adoption days in the park.", { para: true })] },
        chart("bars", "Pets adopted at the Carver shelter", ["Last year", "This year"], { from: 0, to: 1200, step: 200, unit: "pets" }, [800, 960], "Carver shelter")],
      change: { prompt: "By what percent did adoptions change, up or down?", from: 800, to: 960, traps: statsChangeTraps({ from: 800, to: 960, axisFrom: 0 }) },
      deciding: ["h", "s1"],
      reason: ["The chart starts at zero and agrees with the numbers: 800 to 960 is up 160, and 160 ÷ 800 × 100 = 20, up 20%, a fifth, not half."],
      need: "You would need about 1,200 adoptions, half again as many as 800."
    }),
    std({
      id: "k-techmart", fit: "unclear", line: "s1", redraw: "from-zero",
      claim: ["TechMart’s phones cost less than other stores’ phones", [["TechMart’s phones cost less than they did in January", "mixed-claim"], ["TechMart’s laptops cost less than other stores’ laptops", "mixed-who"]]],
      blocks: [
        { kind: "article", form: "ad", source: "TechMart",
          headline: statsLine("h", "Phones for less than anywhere else."),
          lines: [
            statsLine("s1", "Our average phone price fell from $800 in January to $720 in June."),
            statsLine("f1", "Average price of the phones sold in TechMart stores.", { fine: true })] },
        chart("line", "Average price of a phone at TechMart", ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], { from: 680, to: 820, step: 20, unit: "dollars" }, [800, 790, 770, 750, 730, 720], "TechMart")],
      change: { prompt: "From the first month on the chart to the last, by what percent did the average price change, up or down?", from: 800, to: 720, traps: statsChangeTraps({ from: 800, to: 720, axisFrom: 680 }) },
      deciding: ["h", "s1"],
      reason: ["The numbers show TechMart’s own prices down 10%: $80 on $800. But the ad claims they are lower than everywhere else, and gives no other store’s price to compare. You cannot tell."],
      need: "You would need other stores’ prices for the same phones."
    }),
    std({
      id: "k-pinelake", fit: "holds", line: "s1",
      claim: ["Twice as many people visited Pine Lake State Park as last year", [["Twice as many people camped overnight at Pine Lake State Park as last year", "mixed-claim"], ["The new trails doubled the visitors", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Outdoors Weekly · Parks",
          headline: statsLine("h", "Visitors to Pine Lake double"),
          lines: [
            statsLine("s2", "Most came in July and August, the rangers said."),
            statsLine("s1", "The park counted 80,000 visitors this year, up from 40,000 last year, at its two entrances.")] },
        chart("bars", "Visitors to Pine Lake State Park", ["Last year", "This year"], { from: 0, to: 100000, step: 20000, unit: "visitors" }, [40000, 80000], "Pine Lake State Park")],
      change: { prompt: "By what percent did the number of visitors change, up or down?", from: 40000, to: 80000, traps: statsChangeTraps({ from: 40000, to: 80000, axisFrom: 0 }) },
      deciding: ["h", "s1"],
      reason: ["The chart starts at zero and agrees with the numbers: 40,000 to 80,000 is up 40,000, 40,000 ÷ 40,000 × 100 = 100, up 100%: double."],
      need: "Nothing more is needed. The headline does not say why more came."
    }),

    // ----- three held in reserve, for the weekly return of the topic -----
    std({
      id: "r-milk", fit: "outruns", line: "s1", redraw: "from-zero",
      claim: ["Milk at Corner Market costs about twice what it did", [["Milk at the town’s other stores costs twice as much", "mixed-who"], ["Corner Market raised milk prices to make more money", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "post", source: "Lena Ruiz · @lenacooks · 6h",
          lines: [
            statsLine("s1", "Milk at Corner Market went from $4.00 a gallon to $4.20. It’s doubled! 😤"),
            statsLine("s2", "Look at the chart they put up.")] },
        chart("bars", "Corner Market: a gallon of milk", ["Last month", "This month"], { from: 3.9, to: 4.3, step: 0.1, unit: "dollars" }, [4, 4.2], "Corner Market")],
      change: { prompt: "By what percent did the price of a gallon change, up or down?", from: 4, to: 4.2, traps: statsChangeTraps({ from: 4, to: 4.2, axisFrom: 3.9 }) },
      deciding: ["s1"],
      reason: ["The scale starts at $3.90, so the new price looks three times as tall. $4.00 to $4.20 is up 20 cents: 0.2 ÷ 4 × 100 = 5, up 5%, not double."],
      need: "You would need milk at about $8.00 a gallon."
    }),
    std({
      id: "r-rivermont", fit: "holds", line: "s1",
      claim: ["About a fifth more riders take the Rivermont line than last year", [["About a fifth more riders take Rivermont’s city buses than took them last year", "mixed-claim"], ["The new trains brought more people to the line", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Rivermont Review · Transit",
          headline: statsLine("h", "Riders on the Rivermont line up a fifth"),
          lines: [
            statsLine("s1", "The railway counted 60,000 riders a week this fall, up from 50,000 last fall, at its ticket machines."),
            statsLine("s2", "New trains started running in August.", { para: true })] },
        chart("bars", "Riders a week on the Rivermont line", ["Last fall", "This fall"], { from: 0, to: 70000, step: 10000, unit: "riders" }, [50000, 60000], "Rivermont railway")],
      change: { prompt: "By what percent did the number of riders change, up or down?", from: 50000, to: 60000, traps: statsChangeTraps({ from: 50000, to: 60000, axisFrom: 0 }) },
      deciding: ["h", "s1"],
      reason: ["50,000 to 60,000 is up 10,000: 10,000 ÷ 50,000 × 100 = 20, up 20%, a fifth, as the headline says, and the chart starts at zero."],
      need: "Nothing more is needed. The headline does not say the new trains did it."
    }),
    std({
      id: "r-pool", fit: "unclear", line: null,
      claim: ["The Elm Street pool has never been busier", [["The Elm Street pool has more members than ever", "mixed-claim"], ["The new slide brought more swimmers", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "post", source: "Elm Street Pool · 2d",
          lines: [
            statsLine("s1", "Our pool has never been busier! Thanks for a great summer.", { note: "That repeats the claim; the numbers are only on the chart." }),
            statsLine("s2", "See you next year.")] },
        chart("line", "Swimmers a day, this summer", ["May", "Jun", "Jul", "Aug"], { from: 0, to: 350, step: 50, unit: "swimmers" }, [200, 260, 320, 300], "Elm Street Pool")],
      change: { prompt: "From the first month on the chart to the last, by what percent did swimmers a day change, up or down?", from: 200, to: 300, traps: statsChangeTraps({ from: 200, to: 300, axisFrom: 0 }) },
      deciding: ["s1"],
      reason: ["The chart shows this summer only: up 50% from May to August. “Never been busier” needs earlier summers, which are not given. You cannot tell."],
      need: "You would need swimmers a day in earlier summers."
    })
  ]);
})();
