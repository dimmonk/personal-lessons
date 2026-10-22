// Stats, lesson 9 "The whole claim, unprompted": the eight questions of the end check, the real-world test in small (three sound, three that the text
// does not show, two that cannot be told), from areas of life the lesson's group did not use (home locks, an allergy test, bikes, a town poll, a
// ferry, a garden, bike share, dog licenses), two of them trials (one sound, one too small to rule out luck). The check comes back whole four weeks later on new
// questions of the same kinds (items-whole-reserve.js). Invented products, towns, shops and schools.
(() => {
  FC.items("stats", [
    statsWhole({
      id: "k-lockwell", fit: "holds", line: "s1",
      claim: ["Lockwell locks make a break-in a third less likely", [["Lockwell locks keep homes from ever being broken into", "mixed-claim"], ["Lockwell locks make car break-ins a third less likely", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Lockwell Locks",
        headline: statsLine("h", "In a city trial, our locks cut break-ins by a third."),
        lines: [
          statsLine("s1", "In a lottery among 12,000 homes, 30 in every 1,000 homes that kept their old locks were broken into within three years, against 20 in every 1,000 given Lockwell locks."),
          statsLine("s2", "Ask your locksmith about Lockwell.", { para: true })] }],
      size: statsWholeRisk({ before: 30, after: 20, prompt: "Over three years, how many homes in every 1,000 were broken into, with the old locks and with Lockwell?" }),
      deciding: ["h", "s1"],
      reason: ["A lottery split 12,000 homes, 6,000 in each group, so only luck is left, and with that many homes a gap of 10 in 1,000 is unlikely to be luck. From 30 in 1,000 to 20 in 1,000 over three years is 10 fewer, a third less, as the ad says. The seller quotes it, but the lottery and the counts are the city’s."],
      need: "Nothing more is needed. The ad claims a third, and the numbers show a third."
    }),
    statsWhole({
      id: "k-kessel", fit: "outruns", line: "s2",
      claim: ["A positive home test most likely means a Kessel allergy", [["A negative home test most likely means no Kessel allergy", "mixed-claim"], ["For people with a rash after eating, a positive test most likely means a Kessel allergy", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Kessel Home Check",
        headline: statsLine("h", "If our home test says yes, you most likely have a Kessel allergy."),
        lines: [
          statsLine("s1", "Results in 15 minutes, from one drop of blood.", { note: "That is how fast it works, not how often it is right." }),
          statsLine("s2", "Among adults who feel fine, about 40 in every 1,000 have a Kessel allergy; the test finds 75 of every 100 who have it and wrongly flags 5 of every 100 who do not.", { fine: true })] }],
      size: statsWholeTest({ p: 40, sens: 75, fpr: 5, unit: "people" }),
      deciding: ["h", "s2"],
      reason: ["Out of 1,000 adults who feel fine, 40 have the allergy and the test finds 30. Of the 960 who do not, it wrongly flags 48, so 78 test positive and only 30 of them have it, fewer than half."],
      need: "You would need a test with far fewer false alarms, or people among whom many more have it."
    }),
    statsWhole({
      id: "k-ebikes", fit: "outruns", line: "s1", redraw: "from-zero",
      claim: ["Gearhouse sells about three times as many e-bikes as last year", [["Gearhouse sells about three times as many road bikes and kids’ bikes as last year", "mixed-claim"], ["Gearhouse’s new store tripled its e-bike sales", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "news", source: "Valley Times · Business",
          headline: statsLine("h", "E-bike sales triple at Gearhouse"),
          lines: [
            statsLine("s1", "Gearhouse sold 330 e-bikes this year, up from 300 last year."),
            statsLine("s2", "The shop opened a second store in March.", { para: true })] },
        { kind: "chart", type: "bars", title: "E-bikes sold at Gearhouse", x: ["Last year", "This year"], y: { from: 290, to: 340, step: 10, unit: "e-bikes" }, series: [{ values: [300, 330] }], labels: true, source: "Gearhouse" }],
      change: { prompt: "By what percent did e-bike sales change, up or down?", from: 300, to: 330, traps: statsChangeTraps({ from: 300, to: 330, axisFrom: 290 }) },
      deciding: ["h", "s1"],
      reason: ["The scale starts at 290, so this year’s bar looks four times as tall. The numbers say up 30: 30 ÷ 300 × 100 = 10, up 10%, not triple."],
      need: "You would need about 900 e-bikes sold, three times 300."
    }),
    statsWhole({
      id: "k-growmax", fit: "outruns", line: "s2",
      claim: ["GrowMax plant food makes tomato plants give half again as much fruit", [["The GrowMax plants gave more tomatoes this summer", "heard-link"], ["GrowMax makes rose bushes grow half again as tall", "mixed-who"]]],
      blocks: [{ kind: "article", form: "post", source: "Pat Lee · @patgrows · 1d",
        lines: [
          statsLine("s1", "I split 6 tomato plants by coin toss: 3 got GrowMax, 3 got plain water.", { note: "That is how the plants were split, not the harvest." }),
          statsLine("s2", "The GrowMax plants gave 9 pounds of tomatoes, the others 6."),
          statsLine("s3", "GrowMax gives you half again as much fruit!", { note: "That repeats the claim." })] }],
      change: { prompt: "By what percent did the harvest differ, from the plain-water plants to the GrowMax plants, up or down?", from: 6, to: 9, traps: statsChangeTraps({ from: 6, to: 9, axisFrom: 0 }) },
      deciding: ["s1", "s2", "s3"],
      reason: ["The size fits, 9 pounds against 6 is 50% more, and the coin toss leaves only luck. But with three plants in each group, one strong plant could make that gap, so luck is a likely reason: the trial is too small to show it."],
      need: "You would need many plants split by chance, and the gap still there."
    }),
    statsWhole({
      id: "k-greenfield", fit: "holds", line: "s1",
      claim: ["More than half of Greenfield adults want a park where the old mill is", [["Most Greenfield adults want a new mill built", "mixed-claim"], ["More than half of the adults in the county want a park where the old mill is", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Greenfield Gazette · Town",
        headline: statsLine("h", "Most Greenfield adults want the old mill turned into a park"),
        lines: [
          statsLine("s1", "The town called 1,200 adults at phone numbers picked at random, and 64% said they want a park there."),
          statsLine("s2", "With 1,200 people, the result could be off by about 3 points either way by luck.", { para: true, note: "That is how far off it could be, not the result." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["1,200 adults picked at random is a fair picture of Greenfield. 64% could really be 61% to 67%, still most."],
      need: "Nothing more is needed. The headline does not say what the town will do."
    }),
    statsWhole({
      id: "k-bikeshare", fit: "unclear", line: "s1",
      claim: ["Bike share is the most used way to get around Riverside", [["More Riverside people own bikes than cars", "mixed-claim"], ["Bike share is the most used way to get around Northfield", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Riverside Weekly · Getting Around",
        headline: statsLine("h", "Bike share is now Riverside’s favorite way to get around"),
        lines: [
          statsLine("s1", "Riders took 40,000 bike-share trips in May, the city said."),
          statsLine("s2", "A ride costs $2.", { para: true, note: "That is the price, not a count of trips." })] }],
      deciding: ["h", "s1"],
      reason: ["40,000 trips is a count, but the story gives no count for buses, cars or walking to compare it with. You cannot tell whether bikes are the favorite."],
      need: "You would need May’s trips by bus, car and the other ways, counted the same way."
    }),
    statsWhole({
      id: "k-ferry", fit: "holds", line: null,
      claim: ["The Riverbend ferry carried more riders this year than in any year since it opened", [["The Riverbend ferry is faster now than ever", "mixed-claim"], ["The new ferry boat brought more riders", "heard-cause"]]],
      blocks: [
        { kind: "article", form: "post", source: "Riverbend Ferry · 2d",
          lines: [
            statsLine("s1", "Our busiest year yet! Thank you, riders.", { note: "That repeats the claim; the riders are only on the chart." }),
            statsLine("s2", "We have carried riders across the river since we opened in 2019.", { note: "That says when it opened, not how many rode." })] },
        { kind: "chart", type: "line", title: "Ferry riders a year, in thousands, since opening", x: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"], y: { from: 0, to: 300, step: 50, unit: "thousand riders" }, series: [{ values: [120, 90, 150, 180, 200, 230, 264] }], labels: true, source: "Riverbend Ferry" }],
      change: { prompt: "From the first year on the chart to the last, by what percent did riders change, up or down?", from: 120, to: 264, traps: statsChangeTraps({ from: 120, to: 264, axisFrom: 0 }) },
      deciding: ["s1", "s2"],
      reason: ["The ferry opened in 2019, so the chart covers every year there has been, and 2025 is the highest: 264 thousand riders against 120 thousand in the first year, up 120%. Its busiest year yet holds up."],
      need: "Nothing more is needed. The post does not say why more rode."
    }),
    statsWhole({
      id: "k-ashford", fit: "unclear", line: "s1",
      claim: ["Far more Ashford dogs are licensed than usual", [["More Ashford people own cats than usual", "mixed-claim"], ["The new license fee got more owners to license their dogs", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Ashford Post · Town Hall",
        headline: statsLine("h", "Dog licenses soar in Ashford"),
        lines: [
          statsLine("s1", "Ashford issued 2,400 dog licenses this year, the town clerk said."),
          statsLine("s2", "A license costs $15 a year.", { para: true, note: "That is the price, not a count." })] }],
      deciding: ["h", "s1"],
      reason: ["2,400 is a count, but the story gives no usual year and no number of dogs or people to compare it with. “Soar” needs something to soar above. You cannot tell."],
      need: "You would need how many licenses Ashford issues in a usual year."
    })
  ]);
})();
