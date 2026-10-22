// Stats, lesson 7 "Could anything else explain it?": the worked example and the questions of the two groups. Hill's one question asked of one article:
// other differences between the groups, the arrow the other way, a bounce back after a picked extreme, nothing to compare with, or only luck because
// the groups were split by chance. "Only luck" sits on claims that hold, that do not (the numbers fall short of the size claimed) and that cannot be
// told (no numbers); another explanation sits on claims that do not hold (a claim that one thing makes another happen) and on claims that hold (a claim
// that two things only went together). Every option is worded for its question except the two shared ones, which are right and wrong about equally
// often. Invented products, towns, schools and people.
(() => {
  const std = spec => statsCause({ strand: "cause", ...spec });
  const how = "That is how the groups were formed, not the result.";
  FC.items("stats", [
    // ----- the worked example: a claim of cause from children whose parents chose -----
    std({
      id: "w-music", fit: "outruns", line: "s1",
      claim: ["Taking music lessons improves children’s math", [["Children who take music lessons score higher in math", "heard-link"], ["Music lessons make adults better at math", "mixed-who"]]],
      other: ["Children in lessons differed in other ways, such as homes with more books", [[STATS_NOTHING_ELSE, "no-other"], ["The children were tested right after their worst school year", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Valley Times · Schools",
        headline: statsLine("h", "Music lessons make children better at math, study finds"),
        lines: [
          statsLine("s1", "Fourth graders who took music lessons scored 8 points higher on the state math test than those who did not, a study of 2,400 children found."),
          statsLine("s2", "Parents chose whether their children took lessons.", { para: true }),
          statsLine("s3", "Children in lessons also came more often from homes with more money and more books, the researchers noted.")] }],
      steps: [
        { id: "claim", does: "Find what the headline claims.", working: "“Make” says the lessons cause the higher scores, not only that the two went together.", ask: "claim" },
        { id: "line", does: "Find the number it rests on.", working: "The first sentence: 8 points higher on the state math test.", ask: "line" },
        { id: "other", does: "Look for what else could explain it.", working: "Parents chose the lessons, and the children in them came more often from homes with more money and books. That alone could give higher math scores.", ask: "other" },
        { id: "verdict", does: "Judge the claim.", working: "A claim that lessons make the difference holds only when the groups were split by chance. Here families chose, and the text names another explanation, so it does not show it.", ask: "verdict" }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["The children were not split by chance: parents chose, and the children in lessons came from homes with more money and books. Those homes could explain the higher scores, so the text does not show that the lessons did it."],
      need: "You would need children split by chance into lessons and no lessons, and the gap still there."
    }),

    // ----- the first group (the sentences marked): a fair trial, a bounce back, a link that holds, and groups formed in a way the text does not say -----
    std({
      id: "p-calmira", fit: "holds", line: "s2",
      claim: ["Calmira drops make people who sleep badly fall asleep faster", [["Calmira drops make everyone sleep longer", "mixed-claim"], ["People who choose to use Calmira drops each night fall asleep faster than others", "heard-link"]]],
      other: [STATS_NOTHING_ELSE, [["People who sleep badly got better on their own", "saw-other"], ["The Calmira group already slept better before the trial", "saw-other"]]],
      blocks: [{ kind: "article", form: "news", source: "Eastbay Courier · Health",
        headline: statsLine("h", "Calmira drops help bad sleepers fall asleep faster, trial finds"),
        lines: [
          statsLine("s1", "In a trial, 300 adults who sleep badly were split by coin toss: half took Calmira drops each night, half dummy drops that look and taste the same.", { note: how }),
          statsLine("s2", "After a month, the Calmira group fell asleep in 22 minutes on average, against 35 minutes for the others.", { para: true }),
          statsLine("s3", "Neither the sleepers nor the researchers knew who had which drops until the end.")] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["A coin toss split the groups, so they were alike in everything but the drops, and only luck is left; with 300 people and 22 minutes against 35, luck is unlikely. The dummy drops take care of people sleeping better just from taking something, or getting better on their own: the others had the same chance. Faster, as the headline says."],
      need: "Nothing more is needed. The headline claims only that they fall asleep faster."
    }),
    std({
      id: "p-cameras", fit: "outruns", line: "s2",
      claim: ["The cameras made crashes at those corners fall by half", [["Crashes at those corners fell by half after the cameras went in", "heard-link"], ["The cameras cut crashes in half on Dover’s quiet streets", "mixed-who"]]],
      other: ["The corners were picked after their worst year, and a usual year has fewer crashes", [[STATS_NOTHING_ELSE, "no-other"], ["Dover counted crashes a new way the year after", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Dover Ledger · Roads",
        headline: statsLine("h", "Speed cameras cut crashes in half at Dover’s worst corners"),
        lines: [
          statsLine("s1", "Last year the city put cameras at the 10 corners that had the most crashes the year before.", { note: "That says where the cameras went, not how many crashes there were." }),
          statsLine("s2", "Crashes there fell from 80 that year to 40 the year after the cameras went in."),
          statsLine("s3", "That year was the worst those corners had seen in a decade. In other years they had about 45 crashes.", { para: true, note: "That is a usual year at those corners, not the change." })] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["The corners were picked right after their worst year in a decade. Something picked at an extreme usually comes back toward its usual level, about 45 crashes here, with or without cameras. So the fall to 40 does not show the cameras did it."],
      need: "Corners like these without cameras over the same years would narrow it down; corners given cameras by chance would settle it."
    }),
    std({
      id: "p-breakfast", fit: "holds", line: "s1",
      claim: ["Adults who have breakfast are overweight less often", [["Eating breakfast keeps adults from becoming overweight", "heard-cause"], ["Children who eat breakfast are less often overweight", "mixed-who"]]],
      other: ["Breakfast eaters exercised more", [[STATS_NOTHING_ELSE, "no-other"], ["The breakfast eaters were picked after a year of dieting", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Harbor Ledger · Health",
        headline: statsLine("h", "Adults who eat breakfast are less often overweight, survey finds"),
        lines: [
          statsLine("s1", "In a survey of 5,000 adults picked at random, 18 in 100 of those who eat breakfast every day were overweight, against 25 in 100 of those who skip it."),
          statsLine("s2", "Breakfast eaters also exercised more, so the survey cannot say breakfast is the reason, the authors wrote.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Something else could explain it: breakfast eaters exercised more. But the headline claims only that the two went together, not that breakfast does it, and the survey of 5,000 adults picked at random shows that: 18 in 100 against 25 in 100."],
      need: "Nothing more is needed for the claim made. To say breakfast keeps weight off, you would need people split by chance into breakfast and no breakfast."
    }),
    std({
      id: "p-desks", fit: "unclear", line: "s1",
      claim: ["Standing desks make office workers more focused", [["Workers at standing desks had fewer errors", "heard-link"], ["Standing desks make students more focused", "mixed-who"]]],
      other: [STATS_NOT_SAID, [[STATS_NOTHING_ELSE, "no-other"], ["The workers were tested right after their worst week", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Work Life Weekly · Offices",
        headline: statsLine("h", "Standing desks sharpen focus, office study finds"),
        lines: [
          statsLine("s1", "In a study of 120 office workers at Lumen Design, those at standing desks made 30% fewer errors on a typing test than those at sitting desks."),
          statsLine("s2", "Lumen plans to offer standing desks to anyone who asks.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["Whether something else explains it depends on how workers came to have each desk: by chance, or by choosing, and then careful workers might have picked standing desks. The story does not say, so you cannot tell."],
      need: "You would need how the workers were put at each kind of desk, and a split by chance for the claim to hold."
    }),

    // ----- the second group (nothing marked) -----
    std({
      id: "q-teens", fit: "outruns", line: "s2",
      claim: ["Using social media causes unhappiness in teens", [["Teens who spend hours on social media are unhappy more often", "heard-link"], ["Social media makes adults unhappy", "mixed-who"]]],
      other: ["Teens who are already unhappy may spend more time on social media", [[STATS_NOTHING_ELSE, "no-other"], ["The teens were picked after an unusually unhappy year", "other-wrong"]]],
      blocks: [{ kind: "article", form: "report", source: "Family Health Council · Summary",
        headline: statsLine("h", "Social media makes teens unhappy, survey finds"),
        lines: [
          statsLine("s1", "The survey asked 3,000 teens once, about their phones and their moods.", { note: "That is how many were asked, not the result." }),
          statsLine("s2", "Teens who spent 4 hours or more a day on social media were twice as likely to say they often feel unhappy.", { para: true }),
          statsLine("s3", "“Teens who are already unhappy may turn to their phones more,” said researcher Dr. Mia Torres.")] }],
      deciding: ["h", "s2", "s3"],
      reason: ["The arrow could run the other way: unhappy teens may spend more time on their phones, as the researcher says. A survey taken at one time cannot tell which came first, so it does not show that social media makes teens unhappy."],
      need: "You would need teens followed over time, or split by chance into more and less social media."
    }),
    std({
      id: "q-serenol", fit: "unclear", line: null,
      claim: ["Serenol makes worry half as common", [["People who take Serenol worry less", "heard-link"], ["Serenol cuts worry in half in children", "mixed-who"]]],
      other: [STATS_NOTHING_ELSE, [["People who took Serenol were calmer to begin with", "saw-other"], ["The Serenol group knew which pill they had", "saw-other"]]],
      blocks: [{ kind: "article", form: "news", source: "Daily Wire Feed · Health",
        headline: statsLine("h", "Serenol cuts worry in half, trial finds"),
        lines: [
          statsLine("s1", "In a trial, 200 adults were split by coin toss: half took Serenol, half a dummy pill that looks the same.", { note: how }),
          statsLine("s2", "The Serenol group said they felt much calmer, the maker said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The coin toss leaves only luck to explain a difference. But the story gives no numbers for how much worry there was in each group, so neither “in half” nor luck can be checked. You cannot tell."],
      need: "You would need how much worry each group had at the end, in numbers."
    }),
    std({
      id: "q-pages", fit: "outruns", line: "s2",
      claim: ["The Bright Pages program made Elm School’s reading scores rise", [["Elm School’s average reading score rose from last year to this year", "heard-link"], ["Bright Pages raises math scores at Elm School", "mixed-claim"]]],
      other: ["Scores might have risen anyway: no school without the program is given to compare", [[STATS_NOTHING_ELSE, "no-other"], ["Elm’s students were picked after their worst year", "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Elm Valley News · Schools",
        headline: statsLine("h", "New reading program lifts scores at Elm School"),
        lines: [
          statsLine("s1", "Elm School started the Bright Pages program last fall.", { note: "That is when the program started, not the scores." }),
          statsLine("s2", "Its average reading score rose from 62 last year to 70 this year."),
          statsLine("s3", "Principal Ana Cole said teachers love the program.", { para: true })] }],
      deciding: ["h", "s2"],
      reason: ["The story gives one school, before and after. Scores rise and fall from year to year for many reasons, a new test or a new class of students, and no school without the program is given to compare with, so it does not show the program did it."],
      need: "Schools like Elm without the program over the same years would narrow it down; schools given the program by chance would settle it."
    }),
    std({
      id: "q-brightmind", fit: "outruns", line: "s2",
      claim: ["The Brightmind app makes forgetting names half as common", [["The Brightmind app makes adults over 60 remember everything", "mixed-claim"], ["The Brightmind app halves forgetting in children", "mixed-who"]]],
      other: [STATS_NOTHING_ELSE, [["Adults who used the app were sharper to begin with", "saw-other"], ["Nothing to compare with: no group went without the app", "saw-other"]]],
      blocks: [{ kind: "article", form: "news", source: "Silver Years Weekly · Health",
        headline: statsLine("h", "Brightmind app halves forgetting, trial finds"),
        lines: [
          statsLine("s1", "In a trial, 400 adults over 60 were split by coin toss: half used the Brightmind memory app for a year, half a word-game app.", { note: how }),
          statsLine("s2", "At the end, 30 in 100 of the Brightmind group said they often forget names, against 40 in 100 of the others.", { para: true })] }],
      deciding: ["h", "s2"],
      reason: ["The coin toss leaves only luck, and with 400 people a gap of 10 in 100 is unlikely to be luck, so the app most likely made a difference. But 40 in 100 down to 30 in 100 is a quarter less, not half: the numbers say less than the headline."],
      need: "You would need forgetting to fall by half, for example from 40 in 100 to 20 in 100."
    }),
    std({
      id: "q-dogs", fit: "outruns", line: null,
      claim: ["Owning a dog makes people live longer", [["Dog owners were less likely to die in those ten years", "heard-link"], ["Owning a cat makes people live longer", "mixed-claim"]]],
      other: ["Dog owners were younger and walked more", [[STATS_NOTHING_ELSE, "no-other"], [STATS_NOT_SAID, "other-wrong"]]],
      blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · Health",
        headline: statsLine("h", "Owning a dog helps you live longer"),
        lines: [
          statsLine("s1", "Researchers followed 10,000 adults for ten years and found that dog owners were less likely to die in that time.", { note: "That is how many were followed, not how much less likely." }),
          statsLine("s2", "Dog owners were also younger on average and walked more, the team said.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["People chose whether to own a dog, and the owners were younger and walked more. Either could explain living longer, so the text itself shows the claim of cause goes too far, without needing a number."],
      need: "You would need groups alike in age and walking, or a way of splitting them by chance."
    }),
    std({
      id: "q-readers", fit: "holds", line: "s2",
      claim: ["Children who read for fun tend to get better grades", [["Reading for fun makes children get better grades", "heard-cause"], ["Adults who read for fun do better at work", "mixed-who"]]],
      other: ["Children who already do well in school may read more for fun", [[STATS_NOTHING_ELSE, "no-other"], ["The children were picked after a bad year at school", "other-wrong"]]],
      blocks: [{ kind: "article", form: "report", source: "State Reading Council · Summary",
        headline: statsLine("h", "Children who read for fun get better grades, survey finds"),
        lines: [
          statsLine("s1", "The council surveyed 2,000 fifth graders picked at random from the state’s schools.", { note: "That is who was asked, not the result." }),
          statsLine("s2", "Of those who read for fun most days, 70 in 100 had mostly A’s and B’s, against 50 in 100 of those who did not.", { para: true }),
          statsLine("s3", "The survey cannot tell which came first, the council said: children who already do well may enjoy reading more.")] }],
      deciding: ["h", "s2", "s3"],
      reason: ["The arrow could run the other way, as the council says. But the headline claims only that the two go together, and a survey of 2,000 children picked at random shows that: 70 in 100 against 50 in 100."],
      need: "Nothing more is needed for the claim made. To say reading for fun raises grades, you would need children split by chance."
    })
  ]);
})();
