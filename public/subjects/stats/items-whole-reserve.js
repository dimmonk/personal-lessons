// Stats, lesson 9 "The whole item, unprompted": twelve questions held in reserve, which no lesson names. The weekly review asks them when the topic comes
// back, and the second check four weeks on draws its eight from them, a new one for each of the check's (three sound, three the text does not show,
// two that cannot be told). The first three are one of each, for the returns before the second check. Invented towns, products and people.
(() => {
  FC.items("stats", [
    statsWhole({
      id: "r-loans", fit: "holds", line: "s1",
      claim: ["The Carver library lent about a tenth more books than last year", [["The Carver library had a tenth more visitors", "mixed-claim"], ["The new e-book app got people to borrow more books", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Carver Daily · Town",
        headline: statsLine("h", "Carver library lends a tenth more books"),
        lines: [
          statsLine("s1", "The library lent 220,000 books this year, up from 200,000 last year."),
          statsLine("s2", "Both counts come from its checkout system, which logs every loan.", { para: true })] }],
      change: { prompt: "By what percent did the number of books lent change, up or down?", from: 200000, to: 220000, traps: statsChangeTraps({ from: 200000, to: 220000, axisFrom: 0 }) },
      deciding: ["h", "s1", "s2"],
      reason: ["The same system counted every loan both years. 200,000 to 220,000 is up 20,000: 20,000 ÷ 200,000 × 100 = 10, a tenth more, as the headline says."],
      need: "Nothing more is needed. The headline does not say why."
    }),
    statsWhole({
      id: "r-mainstreet", fit: "outruns", line: "s1",
      claim: ["Most restaurants that open on Main Street last over 10 years", [["Most of the restaurants open on Main Street today opened over 10 years ago", "mixed-who"], ["Main Street’s restaurants serve the best food in town", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Riverside Weekly · Food",
        headline: statsLine("h", "Main Street restaurants last: 8 in 10 have been open over 10 years"),
        lines: [
          statsLine("s1", "Of the 20 restaurants open on Main Street today, 16 opened more than 10 years ago."),
          statsLine("s2", "In those 10 years, 45 other restaurants opened on Main Street and closed.", { para: true, note: "That is how many closed, not the ones counted." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Only the 20 restaurants still open were counted. In the same 10 years, 45 others opened there and closed, far more than the 16 that have lasted over 10 years, so the text itself shows most do not last."],
      need: "You would need every restaurant that opened on Main Street, the closed ones too."
    }),
    statsWhole({
      id: "r-swab", fit: "unclear", line: "s1",
      claim: ["A positive strep swab most likely means strep", [["A negative strep swab most likely means no strep", "mixed-claim"], ["A positive swab most likely means strep in adults with no sore throat", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "QuickSwab",
        headline: statsLine("h", "QuickSwab is 98% accurate: a positive means strep."),
        lines: [
          statsLine("s1", "The swab finds 98 of every 100 children who have strep."),
          statsLine("s2", "Results in ten minutes, right at the clinic.", { fine: true })] }],
      deciding: ["h", "s1"],
      reason: ["The ad gives how many with strep the swab finds, but not how common strep is among the children tested, or how often it flags children who do not have it. Without those, you cannot count how many positives are real."],
      need: "You would need how common strep is among the children tested and how often the swab wrongly flags those who do not have it."
    }),
    statsWhole({
      id: "r-fallguard", fit: "holds", line: "s2",
      claim: ["Fallguard mats make falls in care homes a quarter less likely", [["Fallguard mats keep a quarter of care home residents from ever falling", "mixed-claim"], ["Care homes with Fallguard mats have no falls", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Silver Years Weekly · Care",
        headline: statsLine("h", "Fallguard mats cut falls in care homes by a quarter, trial finds"),
        lines: [
          statsLine("s1", "120 care homes, with about 9,000 residents, were split by lottery: half got Fallguard mats beside every bed.", { note: "That is how the homes were split, not how many fell." }),
          statsLine("s2", "Over a year, 80 in every 1,000 residents fell in the homes without mats, against 60 in every 1,000 in the homes with them.", { para: true })] }],
      size: statsWholeRisk({ before: 80, after: 60, prompt: "Over a year, how many residents in every 1,000 fell, without the mats and with them?" }),
      deciding: ["h", "s1", "s2"],
      reason: ["A lottery split 120 homes with about 9,000 residents, so only luck is left, and with about 4,500 residents on each side a gap of 20 in 1,000 is unlikely to be luck. 80 in 1,000 to 60 in 1,000 is 20 fewer, a quarter less, as the headline says."],
      need: "Nothing more is needed. The headline claims only care homes, and only a quarter."
    }),
    statsWhole({
      id: "r-gas", fit: "outruns", line: "s1", redraw: "from-zero",
      claim: ["Gas at Ridgeway stations costs about a third more than it did", [["Diesel at Ridgeway stations costs a third more", "mixed-claim"], ["Ridgeway stations raised prices to make more money", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "news", source: "Ridgeway Register · Money",
          headline: statsLine("h", "Gas prices jump by a third at Ridgeway stations"),
          lines: [
            statsLine("s1", "A gallon of regular went from $3.00 to $3.15 this month."),
            statsLine("s2", "Drivers lined up before the change.", { para: true })] },
        { kind: "chart", type: "bars", title: "A gallon of regular gas", x: ["Last month", "This month"], y: { from: 2.9, to: 3.2, step: 0.05, unit: "dollars" }, series: [{ values: [3, 3.15] }], labels: true, source: "Ridgeway stations" }],
      change: { prompt: "By what percent did the price of a gallon change, up or down?", from: 3, to: 3.15, traps: statsChangeTraps({ from: 3, to: 3.15, axisFrom: 2.9 }) },
      deciding: ["h", "s1"],
      reason: ["The scale starts at $2.90, so the new price looks two and a half times as tall. $3.00 to $3.15 is up 15 cents: 0.15 ÷ 3 × 100 = 5, up 5%, not a third."],
      need: "You would need gas at about $4.00 a gallon, a third more than $3.00."
    }),
    statsWhole({
      id: "r-games", fit: "outruns", line: "s1",
      claim: ["Video games make children restless", [["Children who play hours of video games have more trouble sitting still", "heard-link"], ["Video games make adults restless", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Metro Beacon · Family",
        headline: statsLine("h", "Video games make kids restless, survey finds"),
        lines: [
          statsLine("s1", "Children who played video games 3 hours or more a day were twice as likely to have trouble sitting still in class, a survey of 1,200 children found."),
          statsLine("s2", "“Restless children may be drawn to games,” the lead researcher said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The arrow could run the other way, as the researcher says: restless children may play more. A survey at one time cannot tell which came first, so the claim of cause goes too far."],
      need: "You would need children followed over time, or split by chance into more and fewer hours of games."
    }),
    statsWhole({
      id: "r-dunmore", fit: "holds", line: "s1",
      claim: ["More Dunmore residents saw a clinic for the flu last month than usual", [["More Dunmore children saw a clinic for the flu last month than in a usual month", "mixed-who"], ["Dunmore’s clinics are making the flu spread", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Dunmore Times · Health",
        headline: statsLine("h", "Flu sends more Dunmore residents to clinics than usual"),
        lines: [
          statsLine("s2", "Clinics asked patients with mild flu to rest at home.", { note: "That is advice, not a count." }),
          statsLine("s1", "Dunmore clinics saw 1,000 flu patients last month, in a city of 200,000; in a usual month about 2 in every 1,000 residents see a clinic for the flu.", { para: true })] }],
      size: statsWholeCount({ count: 1000, whole: 200000, prompt: "About how many in every 1,000 residents saw a clinic for the flu last month?" }),
      deciding: ["h", "s1"],
      reason: ["1,000 patients in a city of 200,000 is 5 in every 1,000. The usual month is about 2, so this was well above usual, as the headline says."],
      need: "Nothing more is needed for the size."
    }),
    statsWhole({
      id: "r-bluglo", fit: "outruns", line: "s1",
      claim: ["BluGlo berry extract stops memory loss in people", [["Mice given BluGlo found their way through a maze faster", "mixed-who"], ["BluGlo makes people smarter", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Daily Wire Feed · Health",
        headline: statsLine("h", "Berry extract stops memory loss, study shows"),
        lines: [
          statsLine("s1", "Old mice given BluGlo berry extract found their way through a maze 20% faster than mice given water."),
          statsLine("s2", "The extract has not been tested in people.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The study was of mice, and the story says the extract has not been tested in people. The claim is about people, so the text shows it goes too far."],
      need: "You would need a trial in people, split by chance."
    }),
    statsWhole({
      id: "r-weston", fit: "holds", line: "s2",
      claim: ["More than half of Weston voters favor the new bridge", [["The new bridge will be built next year", "mixed-claim"], ["Most Weston drivers use the old bridge", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Weston World · Town",
        headline: statsLine("h", "Most Weston voters back the new bridge, poll finds"),
        lines: [
          statsLine("s1", "With 600 people, the poll could be off by about 4 points either way by luck.", { note: "That is how far off it could be, not the result." }),
          statsLine("s2", "The poll called 600 likely voters in Weston, picked at random, and 62% back the bridge.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["600 voters picked at random is fair, and 62% could really be 58% to 66%: still most."],
      need: "Nothing more is needed. The headline does not say what will happen."
    }),
    statsWhole({
      id: "r-northfield", fit: "outruns", line: "s1",
      claim: ["A cyclist is more likely to crash in Northfield than anywhere else in the county", [["Northfield’s cyclists ride more than Southfield’s", "mixed-claim"], ["A cyclist in Northfield is most likely to crash in the town center, near the bridge", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "County Courier · Roads",
        headline: statsLine("h", "Northfield is the county’s most dangerous town for cyclists"),
        lines: [
          statsLine("s1", "Northfield had 60 bike crashes last year, the most in the county. Southfield had 20."),
          statsLine("s2", "Northfield has 120,000 people and Southfield 20,000.", { para: true, note: "That is the size of each town, not a count of crashes." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Northfield has more crashes because it has six times the people. For every 1,000 people, Northfield had half a crash and Southfield one, so Southfield is the riskier town."],
      need: "You would need crashes for each town’s size, which the numbers give: Southfield’s is twice Northfield’s."
    }),
    statsWhole({
      id: "r-westmont", fit: "unclear", line: "s1",
      claim: ["Westmont is getting far more pothole complaints than usual", [["Westmont has far more potholes than usual", "mixed-claim"], ["The cold winter caused more potholes", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Westmont Star · City Hall",
        headline: statsLine("h", "Pothole complaints soar in Westmont"),
        lines: [
          statsLine("s1", "Westmont’s public works office received 3,000 pothole complaints this year."),
          statsLine("s2", "Crews will start repairs in April.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["3,000 is a count, but the story gives no usual year and no size of the city to compare it with. You cannot tell whether it soared."],
      need: "You would need the complaints in a usual year, or the city’s size and the usual rate."
    }),
    statsWhole({
      id: "r-lensguard", fit: "unclear", line: "s1",
      claim: ["Lensguard drops keep 4 in 10 contact lens users from getting an eye infection", [["Lensguard drops cure 4 in 10 eye infections", "mixed-claim"], ["Lensguard drops keep 4 in 10 people who wear glasses from getting an eye infection", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Eastbay Courier · Health",
        headline: statsLine("h", "Lensguard drops spare 4 in 10 contact lens users from eye infections"),
        lines: [
          statsLine("s1", "In a coin-toss trial, contact lens users given Lensguard drops were 40% less likely to get an eye infection over a year than users given plain drops."),
          statsLine("s2", "Lensguard goes on sale in May.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["“40% less likely” is a share of the risk, not a number of people. Without how many got an infection with plain drops, you cannot tell how many in 10 the drops spare; if few get one, it is far fewer than 4 in 10."],
      need: "You would need how many in every 1,000 users got an eye infection with plain drops and with Lensguard."
    })
  ]);
})();
