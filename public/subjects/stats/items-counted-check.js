// Stats, lesson 6 "Who was counted, and how": the six questions of the end check, from areas of life the lesson's groups did not use (air travel, apps,
// children's sports, bike lanes, renting, home internet), and three held in reserve for the returns. Invented companies, towns and leagues. The margins
// stated follow the sample sizes taught (700 people: about 4 points).
(() => {
  const LP = "Tap the sentence that says who was counted.";
  const std = spec => statsStanding({ strand: "counted", linePrompt: LP, ...spec });
  const result = "That is what they said, not who was counted.";
  FC.items("stats", [
    std({
      id: "k-skyway", fit: "holds", line: "s2",
      claim: ["Most Skyway passengers rated their June flight good", [["Most people who flew on other airlines in June rated their flight good", "mixed-who"], ["Skyway’s new seats left passengers happier", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Travel Desk · Airlines",
        headline: statsLine("h", "Most Skyway passengers rate their flight good, airline survey finds"),
        lines: [
          statsLine("s1", "81% rated their flight good or very good, Skyway said.", { note: result }),
          statsLine("s2", "The airline asked 2,500 passengers, picked at random from every June flight, as they left the plane; nearly all answered."),
          statsLine("s3", "Skyway flies to 40 cities.", { para: true, note: "That is how many cities it flies to, not who was counted." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["2,500 passengers picked at random from every June flight, nearly all of whom answered, is a fair picture of Skyway’s June passengers. 81% is well over half. The airline did the asking, but it picked people by chance."],
      need: "Nothing more is needed for Skyway’s June passengers. The headline says nothing about other airlines."
    }),
    std({
      id: "k-fittrack", fit: "outruns", line: "s1",
      claim: ["Most FitTrack users like the update", [["Most people who wrote a review of the update like it", "mixed-who"], ["The update got FitTrack users to exercise more", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "App Talk · Reviews",
        headline: statsLine("h", "Users love the FitTrack update: 92% of reviews give it five stars"),
        lines: [
          statsLine("s1", "In its first week the update drew 300 reviews in the app store, and 92% gave it five stars."),
          statsLine("s2", "FitTrack has about 40,000 users.", { para: true, note: "That is how many use the app, not how many were counted." }),
          statsLine("s3", "Reviews are written by users who choose to write one.")] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["The 300 reviewers chose to write a review, and people who choose to answer are often the ones who feel strongly. They are 300 of about 40,000 users."],
      need: "You would need users picked by chance, nearly all of whom answered."
    }),
    std({
      id: "k-saturday", fit: "outruns", line: "s2",
      claim: ["Most Westside league families want Saturday games", [["Most of the parents at Tuesday’s meeting want Saturday games", "mixed-who"], ["Saturday games would make the players happier", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "post", source: "Westside Youth Soccer · 1d",
        lines: [
          statsLine("s1", "The league has about 300 families.", { note: "That is how many families there are, not how many were counted." }),
          statsLine("s2", "At Tuesday’s meeting, 7 of the 8 parents who came voted for Saturday games."),
          statsLine("s3", "Most families want Saturdays, so Saturdays it is!", { note: "That repeats the claim." })] }],
      deciding: ["s1", "s2", "s3"],
      reason: ["Eight parents chose to come to the meeting, out of about 300 families. That is too few, and they chose to come, so they say little about the rest."],
      need: "You would need most of the 300 families asked, or many of them picked by chance."
    }),
    std({
      id: "k-lanes", fit: "outruns", line: "s2",
      claim: ["More than half of Carver residents now favor bike lanes", [["Most Carver residents ride bikes", "mixed-claim"], ["More than half of the Carver residents who ride bikes now want bike lanes", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Carver Daily · Streets",
        headline: statsLine("h", "Most Carver residents now back bike lanes, poll finds"),
        lines: [
          statsLine("s1", "51% said yes to bike lanes on Main Street and 49% said no.", { note: result }),
          statsLine("s2", "The city polled 700 adults, picked at random from its list of residents."),
          statsLine("s3", "With 700 people, the poll could be off by about 4 points either way by luck.", { para: true, note: "That is how far off it could be, not who was counted." })] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["The poll picked fairly, but 51% could really be anywhere from 47% to 55%. It could be fewer than half, so the poll cannot say most residents want bike lanes."],
      need: "You would need a result further from half than the margin, such as 60%."
    }),
    std({
      id: "k-renters", fit: "unclear", line: "s1",
      claim: ["Most renters plan to move this year", [["Most homeowners plan to move this year", "mixed-who"], ["High rents are making renters move", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Home Front · Housing",
        headline: statsLine("h", "Three in four renters plan to move this year, survey says"),
        lines: [
          statsLine("s1", "A survey of 1,500 renters found that 75% plan to move within the year."),
          statsLine("s2", "Moving companies say they expect a busy summer.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["1,500 renters is plenty, but the story does not say who ran the survey or how the renters were picked: at random, or from people already looking for a place. Without that, you cannot tell."],
      need: "You would need who ran the survey and how the renters were picked."
    }),
    std({
      id: "k-internet", fit: "holds", line: "s1",
      claim: ["Fast internet reaches nine in ten of Riverside’s homes", [["Fast internet reaches nine in ten of the businesses in Riverside’s downtown", "mixed-who"], ["Fast internet helped Riverside grow", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Riverside Weekly · Town",
        headline: statsLine("h", "Nine in ten Riverside homes now have fast internet"),
        lines: [
          statsLine("s2", "Two years ago it was seven in ten, the town said."),
          statsLine("s1", "Using the internet companies’ own records, the town counted every home: 9,900 of Riverside’s 11,000 homes have fast internet.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["The town counted every home, not a sample, so there is no luck to allow for and no one chose to answer. 9,900 of 11,000 is 9 in 10."],
      need: "Nothing more is needed for Riverside. The headline says nothing about other towns."
    }),

    // ----- three held in reserve, for the weekly return of the topic -----
    std({
      id: "r-slimright", fit: "outruns", line: "f1",
      claim: ["People on the SlimRight plan lose about 20 pounds", [["The clients who finished SlimRight lost about 20 pounds", "mixed-who"], ["SlimRight makes people healthier", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "ad", source: "SlimRight",
        headline: statsLine("h", "Lose 20 pounds with SlimRight."),
        lines: [
          statsLine("s1", "Real people, real results."),
          statsLine("f1", "Average loss of the 120 clients who finished the 12-week plan in 2025. 900 clients started it.", { fine: true })] }],
      deciding: ["h", "f1"],
      reason: ["Only the 120 clients who finished were counted, out of 900 who started. The ones who quit, perhaps because it was not working, are left out."],
      need: "You would need the loss of all 900 clients who started."
    }),
    std({
      id: "r-lakeport", fit: "holds", line: "s1",
      claim: ["About half of Lakeport adults ride a bike at least once a month", [["About half of Lakeport adults ride a bike to work", "mixed-claim"], ["About half of Lakeport children ride a bike at least once a month", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Lakeport Ledger · City",
        headline: statsLine("h", "Half of Lakeport adults ride a bike at least once a month"),
        lines: [
          statsLine("s1", "The city called 1,000 adults at phone numbers picked at random. 52% said they ride a bike at least once a month."),
          statsLine("s2", "With 1,000 people, the result could be off by about 3 points either way by luck.", { para: true, note: "That is how far off it could be, not who was counted." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["1,000 adults picked at random is fair. 52% could really be 49% to 55%, which is about half, as the headline says."],
      need: "Nothing more is needed. The headline does not say why people ride."
    }),
    std({
      id: "r-bags", fit: "unclear", line: null,
      claim: ["More than half of shoppers want paper bags again", [["Paper bags are better for the planet", "mixed-claim"], ["More than half of the town’s store owners want paper bags again", "mixed-who"]]],
      blocks: [{ kind: "article", form: "post", source: "Jen Park · @jenshops · 5h",
        lines: [
          statsLine("s1", "Most shoppers want paper bags back! 2 in 3 said so in a survey.", { note: "That is the result, not who was counted." }),
          statsLine("s2", "Stores, are you listening?")] }],
      deciding: ["s1"],
      reason: ["The post gives a result but not who was asked, how many, or how they were picked. You cannot tell."],
      need: "You would need who ran the survey, how many shoppers answered and how they were picked."
    })
  ]);
})();
