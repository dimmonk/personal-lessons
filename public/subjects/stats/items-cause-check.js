// Stats, lesson 7 "Could anything else explain it?": the six questions of the end check, from areas of life the lesson's groups did not use (knees,
// farming, an insurer, sports, pet food, a school's gum trial), three of them trials (two sound, one too small to rule out luck), and three held in
// reserve for the returns. Invented products, teams, companies and towns.
(() => {
  const std = spec => statsCause({ strand: "cause", ...spec });
  const how = "That is how the groups were formed, not the result.";
  FC.items("stats", [
    std({
      id: "k-insoles", fit: "holds", line: "s2",
      claim: ["Steadyfoot insoles ease knee pain for more people", [["People who wear Steadyfoot insoles have less knee pain", "heard-link"], ["Steadyfoot insoles cure back pain", "mixed-claim"]]],
      other: [STATS_NOTHING_ELSE, [["People with milder pain chose Steadyfoot", "saw-other"], ["The Steadyfoot group was told its insoles were special", "saw-other"]]],
      blocks: [{ kind: "article", form: "news", source: "Northgate Herald · Health",
        headline: statsLine("h", "Steadyfoot insoles ease knee pain, trial finds"),
        lines: [
          statsLine("s1", "240 adults with knee pain were split by lottery: half got Steadyfoot insoles, half flat insoles that look the same.", { note: how }),
          statsLine("s2", "After three months, 45 in 100 of the Steadyfoot group said their pain was much better, against 25 in 100 of the others.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["A lottery split the groups, so only luck is left, and with 240 people a gap of 45 in 100 against 25 in 100 is unlikely to be luck. The look-alike insoles take care of people feeling better just from getting something new. More people with less pain, as the headline says."],
      need: "Nothing more is needed. The headline claims only that the insoles ease the pain for more people."
    }),
    std({
      id: "k-hens", fit: "holds", line: "s1",
      claim: ["GrainPlus feed makes hens lay about 5% more eggs", [["Hens that ate GrainPlus laid more eggs", "heard-link"], ["GrainPlus makes cows give 5% more milk", "mixed-who"]]],
      other: [STATS_NOTHING_ELSE, [["The GrainPlus hens were younger", "saw-other"], ["The hens were picked after a bad laying year", "saw-other"]]],
      blocks: [{ kind: "article", form: "report", source: "Plains Farm Research Station · Summary",
        headline: statsLine("h", "New feed makes hens lay 5% more eggs, trial finds"),
        lines: [
          statsLine("s1", "Over a year, hens on GrainPlus laid 294 eggs each, against 280 on the usual feed."),
          statsLine("s2", "The station split 360 hens by coin toss: 180 got GrainPlus and 180 the usual feed.", { para: true, note: how })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["A coin toss split 360 hens, so they were alike in everything but the feed, and with 180 hens in each group laying all year, luck is an unlikely reason for a gap of 14 eggs each. 294 against 280 is 14 more eggs, 5% of 280, as the headline says."],
      need: "Nothing more is needed. The headline claims only the 5%."
    }),
    std({
      id: "k-norwell", fit: "outruns", line: "s1",
      claim: ["People get more done when they work from home", [["Norwell workers at home finished more jobs than those in the office", "heard-link"], ["Working from home makes managers get more done", "mixed-who"]]],
      other: ["The fastest workers were the ones let go home first", [[STATS_NOTHING_ELSE, "no-other"], ["Nothing to compare with: no one stayed in the office", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Harlan Business Journal · Work",
        headline: statsLine("h", "Working from home makes people get more done, insurer finds"),
        lines: [
          statsLine("s1", "At Norwell Insurance, workers who work from home finished 10% more jobs a month than those in the office."),
          statsLine("s2", "The company let its fastest workers go home first, a manager said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The workers at home were not picked by chance: the fastest went first. They would finish more jobs wherever they worked, so the text does not show that working from home did it."],
      need: "You would need workers split by chance between home and office."
    }),
    std({
      id: "k-hawks", fit: "outruns", line: "s1",
      claim: ["The new coach made the Hawks win more games", [["The Hawks won more games after the new coach came", "heard-link"], ["The new coach made the Hawks’ players earn more", "mixed-claim"]]],
      other: ["The coach came after the worst season, and a usual season has about 8 wins", [[STATS_NOTHING_ELSE, "no-other"], ["Players who wanted to win chose to join the Hawks", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Bayside Tribune · Sports",
        headline: statsLine("h", "New coach turns the Hawks around"),
        lines: [
          statsLine("s1", "The Hawks hired coach Rita Vance after their worst season ever, 3 wins in 16 games; this season they won 8 of 16."),
          statsLine("s3", "In the ten seasons before that bad one, the Hawks won 7 to 9 games most years.", { para: true, note: "That is a usual season, not this one." })] }],
      deciding: ["h", "s1", "s3"],
      reason: ["The coach was hired after the team’s worst season ever. A usual Hawks season has about 8 wins, which is what they won this year, so the jump is a bounce back to usual, with or without the new coach."],
      need: "You would need a season well above the Hawks’ usual 7 to 9 wins; teams like the Hawks without a new coach would narrow it down."
    }),
    std({
      id: "k-nutrapet", fit: "unclear", line: "s2",
      claim: ["Nutrapet food makes dogs shed less", [["Dogs that ate Nutrapet shed less", "heard-link"], ["Nutrapet food makes cats shed less", "mixed-who"]]],
      other: [STATS_NOT_SAID, [[STATS_NOTHING_ELSE, "no-other"], ["The Nutrapet dogs were brushed more often", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Pet Life Weekly · Food",
        headline: statsLine("h", "Nutrapet food cuts shedding, maker’s study finds"),
        lines: [
          statsLine("s1", "Owners have long asked for a food that keeps hair off the couch."),
          statsLine("s2", "In the maker’s study of 200 dogs, 100 ate Nutrapet and 100 ate other foods for two months, and the Nutrapet dogs shed 25% less.", { para: true })] }],
      deciding: ["h", "s2"],
      reason: ["Whether something else explains it depends on how the dogs ended up in each group: by chance, or by their owners choosing, when owners who care most about coats might pick Nutrapet and brush more. The story does not say, so you cannot tell."],
      need: "You would need how the dogs were put in each group, and a split by chance for the claim to hold."
    }),
    std({
      id: "k-focus", fit: "outruns", line: "s2",
      claim: ["FocusMint gum makes students score higher on tests", [["Students who chewed FocusMint scored higher", "heard-link"], ["FocusMint gum makes teachers more focused", "mixed-who"]]],
      other: [STATS_NOTHING_ELSE, [["The FocusMint students were the better students", "saw-other"], ["The FocusMint students knew they had the real gum", "saw-other"]]],
      blocks: [{ kind: "article", form: "post", source: "Mr. Dale Ortiz · Science teacher · 1d",
        lines: [
          statsLine("s1", "We ran a real trial in class: 12 students, split by coin toss, half chewing FocusMint and half a plain gum that tastes the same.", { note: "That is how the groups were formed, not the result." }),
          statsLine("s2", "The FocusMint group scored 74 on average on Friday’s quiz, the others 71. FocusMint makes you score higher!")] }],
      deciding: ["s1", "s2"],
      reason: ["The coin toss leaves only luck, but with six students in each group a gap of 3 points could easily be luck: one strong student in one group would do it. The text itself shows the trial is too small to show the gum did anything."],
      need: "You would need many more students split by chance, and a gap bigger than luck could make."
    }),

    // ----- three held in reserve, for the weekly return of the topic -----
    std({
      id: "r-cocoa", fit: "outruns", line: "s1",
      claim: ["Eating dark chocolate improves memory", [["Adults who eat dark chocolate scored higher on a memory test", "heard-link"], ["Dark chocolate sharpens memory in dogs", "mixed-who"]]],
      other: ["Chocolate eaters had more years of school", [[STATS_NOTHING_ELSE, "no-other"], ["The adults were picked after a bad week of sleep", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Harbor Ledger · Health",
        headline: statsLine("h", "Dark chocolate sharpens memory, study finds"),
        lines: [
          statsLine("s1", "Adults who said they eat dark chocolate every week scored 6% higher on a memory test, a study of 1,800 adults found."),
          statsLine("s2", "The chocolate eaters also had more years of school.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["People chose whether to eat chocolate, and the chocolate eaters had more years of school, which could explain the higher scores. The claim of cause goes too far."],
      need: "You would need adults split by chance into chocolate and no chocolate."
    }),
    std({
      id: "r-mintel", fit: "holds", line: "s2",
      claim: ["Mintel gum makes cavities a third less common in children", [["Children who chew gum get fewer cavities", "heard-link"], ["Mintel gum makes cavities a third less common in adults who chew it after lunch", "mixed-who"]]],
      other: [STATS_NOTHING_ELSE, [["The Mintel children already brushed more", "saw-other"], ["The children were picked after a year with many cavities", "saw-other"]]],
      blocks: [{ kind: "article", form: "news", source: "Valley Times · Health",
        headline: statsLine("h", "Mintel gum cuts cavities in children by a third, trial finds"),
        lines: [
          statsLine("s1", "600 children were split by lottery: half chewed Mintel gum after lunch, half a gum that looks the same with no Mintel in it.", { note: how }),
          statsLine("s2", "Over two years, 20 in 100 of the Mintel group got a new cavity, against 30 in 100 of the others.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["A lottery split 600 children, so only luck is left, and a gap of 10 in 100 is unlikely to be luck. From 30 in 100 to 20 in 100 is a third less, as the headline says."],
      need: "Nothing more is needed. The headline claims only children, and only a third."
    }),
    std({
      id: "r-garden-bp", fit: "unclear", line: "s1",
      claim: ["Gardening brings blood pressure down", [["People who garden have lower blood pressure", "heard-link"], ["Gardening lowers blood pressure in dogs", "mixed-who"]]],
      other: [STATS_NOT_SAID, [[STATS_NOTHING_ELSE, "no-other"], ["The gardeners were tested after a hard winter", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Oak Hill Notes · Health",
        headline: statsLine("h", "Gardening lowers blood pressure, study finds"),
        lines: [
          statsLine("s1", "In a study, 100 adults gardened twice a week for a year and 100 did not; the gardeners’ blood pressure fell more."),
          statsLine("s2", "The study was run by the Oak Hill Garden Club.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["Whether something else explains it depends on how people came to garden: by chance, or by choosing, when healthier people might choose to. The story does not say, so you cannot tell."],
      need: "You would need how the adults were put in each group."
    })
  ]);
})();
