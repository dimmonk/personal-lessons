// Stats, lesson 6 "Who was counted, and how": the worked example and the questions of the two groups. A share from a survey or a count is only as good
// as who was in it: how many, who chose to answer, whether only the ones still around were counted, whether they are the people the claim is about,
// how they were asked, and who counted. Everyone counted, or enough people picked by chance from the people the claim is about, can hold, and a
// seller's own count can too; a result inside the margin of error says less than it seems. The margins stated follow the sample sizes taught (about
// 5 points for 400 people, 4 for 600, 3 for 1,000). Invented towns, companies, products and people. The tap is the sentence that says who was counted
// ("Not given" when none does).
(() => {
  const LP = "Tap the sentence that says who was counted.";
  const std = spec => statsStanding({ strand: "counted", linePrompt: LP, ...spec });
  const result = "That is what they said, not who was counted.";
  FC.items("stats", [
    // ----- the worked example: an online poll that people chose to answer -----
    std({
      id: "w-stadium", fit: "outruns", line: "s1",
      claim: ["More than half of Ridgeport’s residents want the city to build a stadium", [["Most of the fans who voted on the Rockets’ website want the city to build a stadium", "mixed-who"], ["A new stadium would bring more visitors to Ridgeport", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Ridgeport Record · City Hall",
        headline: statsLine("h", "Most Ridgeport residents want a new stadium, poll shows"),
        lines: [
          statsLine("s1", "In an online poll on the Ridgeport Rockets’ website, 4,200 people voted, and 78% said the city should build a new stadium."),
          statsLine("s2", "Anyone could vote. The team asked its fans on social media to take part.", { para: true }),
          statsLine("s3", "Ridgeport has about 300,000 residents.", { note: "That is how many people live in the city, not how many were counted." }),
          statsLine("s4", "The city council votes on the plan in May.")] }],
      steps: [
        { id: "claim", does: "Find what the headline claims.", working: "It is about Ridgeport’s residents: most of them want a new stadium.", ask: "claim" },
        { id: "line", does: "Find who was counted.", working: "The first sentence: 4,200 people who voted in a poll on the team’s website.", ask: "line" },
        { id: "verdict", does: "Check whether they are the people the claim is about.", working: "They chose to vote, after the team asked its fans to. Fans of the team are not a fair picture of 300,000 residents, and 4,200 votes do not change that. The text itself shows the claim goes too far.", ask: "verdict" }],
      deciding: ["h", "s1", "s2"],
      reason: ["The people counted chose to vote on the team’s own website after the team asked its fans to. They are fans who cared enough to vote, not a fair picture of Ridgeport’s residents, however many of them voted."],
      need: "You would need residents picked by chance, for example 1,000 adults called at random, asked the same question."
    }),

    // ----- the first group (the sentences marked): too few, a fair survey, a lead inside the margin, and a survey that does not say how it picked -----
    std({
      id: "p-vets", fit: "outruns", line: "f1",
      claim: ["Most vets recommend Pawsome dog food", [["Pawsome food makes dogs healthier", "heard-cause"], ["Most dog owners recommend Pawsome", "mixed-who"]]],
      blocks: [{ kind: "article", form: "ad", source: "Pawsome Pet Foods",
        headline: statsLine("h", "4 out of 5 vets recommend Pawsome."),
        lines: [
          statsLine("s1", "Give your dog the food the experts choose."),
          statsLine("s2", "Now in a bigger bag."),
          statsLine("f1", "From a survey of the 5 vets at the two clinics that sell Pawsome; 4 said they recommend it.", { fine: true })] }],
      deciding: ["h", "f1"],
      reason: ["Five vets is far too few to speak for vets in general, and all five work at clinics that sell Pawsome. The ad’s “4 out of 5” is 4 people."],
      need: "You would need many vets picked by chance, not only the few at clinics that sell the food."
    }),
    std({
      id: "p-sundays", fit: "holds", line: "s1",
      claim: ["About six in ten Easton adults would like Sunday hours at the library", [["About six in ten people who use the library each week would like it open on Sundays", "mixed-who"], ["Opening on Sundays would bring more people to the library", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Easton Observer · Town",
        headline: statsLine("h", "Six in ten Easton adults want the library open on Sundays"),
        lines: [
          statsLine("s2", "The library hired a polling firm for the survey this fall.", { note: "That is who ran it, not who was counted." }),
          statsLine("s1", "The firm called 1,000 Easton adults at phone numbers picked at random, and 61% said they want Sunday hours.", { para: true }),
          statsLine("s3", "34% said no, and the rest were not sure.", { note: result })] }],
      deciding: ["h", "s1"],
      reason: ["1,000 adults picked at random from the town is a fair picture of Easton’s adults. With that many, the 61% could be off by about 3 points by luck, so it is somewhere from 58% to 64%: about six in ten. The library paid for it, but the firm picked people by chance."],
      need: "Nothing more is needed. The headline does not say what the town will do."
    }),
    std({
      id: "p-mayor", fit: "outruns", line: "s2",
      claim: ["More Hartwell voters back Lee than Park", [["Lee will win the race for mayor", "mixed-claim"], ["More Hartwell renters back Lee than Park", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Hartwell Herald · Election",
        headline: statsLine("h", "Lee pulls ahead of Park in the race for mayor"),
        lines: [
          statsLine("s1", "Lee has 52% and Park 48% among likely voters, a new Herald poll finds.", { note: result }),
          statsLine("s2", "The poll called 600 likely voters in Hartwell, picked at random.", { para: true }),
          statsLine("s3", "With 600 people, the poll could be off by about 4 points either way by luck.", { note: "That is how far off it could be, not who was counted." })] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["The poll is fair, but the gap is inside its margin. Lee’s 52% could really be 48% to 56%, and Park’s 48% could be 44% to 52%, so Park could be ahead. The text itself shows the poll cannot say who leads."],
      need: "You would need a gap bigger than the margin, or a bigger poll with a smaller margin."
    }),
    std({
      id: "p-sleep", fit: "unclear", line: "s1",
      claim: ["Most adults sleep less than seven hours a night", [["Most adults who buy Dreamway mattresses sleep less than seven hours", "mixed-who"], ["A new mattress helps adults sleep more", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Daily Wire Feed · Health",
        headline: statsLine("h", "Most adults sleep less than seven hours, survey says"),
        lines: [
          statsLine("s1", "A survey of 2,000 adults by the Dreamway mattress company found that 58% sleep less than seven hours a night."),
          statsLine("s2", "Dreamway is offering 20% off its mattresses this month.", { para: true, note: "That is a sale, not who was counted." })] }],
      deciding: ["h", "s1"],
      reason: ["2,000 adults is plenty, but the story never says how they were picked: at random, or from Dreamway’s own customers, or whoever chose to answer. A mattress company running it is a reason to look harder, not proof. With how they were picked missing, you cannot tell."],
      need: "You would need how the 2,000 adults were picked."
    }),

    // ----- the second group (nothing marked) -----
    std({
      id: "q-houses", fit: "outruns", line: "s1",
      claim: ["Most Millbrook houses built before 1920 have lasted", [["Most of the old Millbrook houses still standing have their first frame", "mixed-who"], ["Houses today are built worse than houses before 1920", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Millbrook Courier · Homes",
        headline: statsLine("h", "Built to last: 9 in 10 of Millbrook’s old houses still stand strong"),
        lines: [
          statsLine("s1", "The county looked at the 300 Millbrook houses built before 1920 that are still standing, and found that 270 still have their first frame."),
          statsLine("s2", "Town records show about 2,000 houses were built in Millbrook before 1920. Most have since been torn down.", { para: true, note: "That is how many were built, not how many were counted." })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Only the houses still standing were counted. Of about 2,000 built, at most 270 still stand with their first frame, so most of the old houses did not last."],
      need: "You would need all the houses built before 1920, the ones torn down too."
    }),
    std({
      id: "q-office", fit: "outruns", line: "s2",
      claim: ["Most Harlan Bank workers are happy with the new office", [["Most of the Harlan Bank workers who answered like the new office", "mixed-who"], ["The new office makes Harlan Bank’s workers work better", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Harlan Business Journal · Work",
        headline: statsLine("h", "Harlan Bank workers love the new office, survey finds"),
        lines: [
          statsLine("s2", "The bank emailed its survey to all 2,000 of its workers, and 150 answered."),
          statsLine("s1", "90% of those who answered said they like the new office.", { note: "That is what they said, not who was counted." }),
          statsLine("s3", "The office opened in January.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["Only 150 of 2,000 workers answered, and the ones who chose to answer may be the ones who like it. 90% of 150 is 135 workers, out of 2,000."],
      need: "You would need answers from most of the 2,000 workers, or from workers picked by chance who nearly all answered."
    }),
    std({
      id: "q-gym", fit: "holds", line: "s3",
      claim: ["Most IronWorks members came in at least twice a week in March", [["Most adults in town went to a gym of some kind at least twice a week in March", "mixed-who"], ["Coming twice a week keeps IronWorks members fit", "heard-cause"]]],
      blocks: [{ kind: "article", form: "ad", source: "IronWorks Gym",
        headline: statsLine("h", "Most of our members come at least twice a week."),
        lines: [
          statsLine("s1", "Thanks for a great spring, IronWorks family!"),
          statsLine("s2", "Our door scanner logs every visit by every member.", { note: "That says how they were counted; the sentence with how many is the small print." }),
          statsLine("s3", "In March, 840 of our 1,200 members came in at least twice a week.", { fine: true })] }],
      deciding: ["h", "s2", "s3"],
      reason: ["The gym counted every member, by its door scanner, not a few who chose to answer. 840 of 1,200 is 70%, which is most. The gym did its own counting, but it counted everyone."],
      need: "Nothing more is needed for IronWorks’ members. The ad says nothing about other gyms."
    }),
    std({
      id: "q-limits", fit: "outruns", line: null,
      claim: ["More than half of drivers want speed limits lowered", [["Most drivers want children to be safe on the streets", "mixed-claim"], ["Lower speed limits make streets safer", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Metro Beacon · Roads",
        headline: statsLine("h", "Most drivers want lower speed limits, poll finds"),
        lines: [
          statsLine("s1", "70% said yes when asked, “Should drivers slow down to keep children safe?”", { note: "That is the answer to the question asked, not who was counted." }),
          statsLine("s2", "The poll was paid for by Slow Streets, a group that campaigns for lower limits.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The question asked was about keeping children safe, which nearly anyone says yes to, not about lower speed limits. A question that pushes toward one answer does not measure the claim, and the group that paid for it wanted that answer."],
      need: "You would need drivers picked by chance, asked plainly whether they want lower speed limits."
    }),
    std({
      id: "q-cats", fit: "unclear", line: null,
      claim: ["Most cat owners say they are happier with their cat than with their partner", [["Cats make people happier than partners do", "heard-cause"], ["Most pet owners say their pet makes them happier than their partner does", "mixed-who"]]],
      blocks: [{ kind: "article", form: "post", source: "Whisker Co. · 2h",
        lines: [
          statsLine("s1", "9 in 10 cat owners say their cat makes them happier than their partner does! 😹", { note: "That is the result, not who was counted." }),
          statsLine("s2", "Share if you agree!")] }],
      deciding: ["s1"],
      reason: ["The post gives a result but never says who was asked, how many, or how they were picked. With nothing on who was counted, you cannot tell."],
      need: "You would need how many cat owners were asked and how they were picked."
    }),
    std({
      id: "q-schooltax", fit: "holds", line: "s2",
      claim: ["More than half of Dover voters favor the school tax", [["More than half of Dover parents with children in school favor the tax", "mixed-who"], ["The school tax will make Dover’s schools better", "heard-cause"]]],
      blocks: [{ kind: "article", form: "news", source: "Dover Ledger · Schools",
        headline: statsLine("h", "Most Dover voters back the school tax, poll finds"),
        lines: [
          statsLine("s1", "58% of likely voters back the tax and 42% oppose it.", { note: result }),
          statsLine("s2", "The Ledger’s poll called 1,000 likely voters in Dover, picked at random."),
          statsLine("s3", "With 1,000 people, it could be off by about 3 points either way by luck.", { para: true, note: "That is how far off it could be, not who was counted." })] }],
      deciding: ["h", "s1", "s2", "s3"],
      reason: ["1,000 voters picked at random is fair, and the gap is far outside the margin: 58% could really be 55% to 61%, still most."],
      need: "Nothing more is needed. The headline does not say what will happen on the day of the vote."
    })
  ]);
})();
