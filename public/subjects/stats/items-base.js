// Stats, lesson 0 "Before you start": the six questions of the baseline, from six areas of life (school, food, a library, safety, a pool, health).
// Nothing is taught before them and nothing is shown per question. Invented outlets, people and products. They sit in the first topic's strand
// (its bank of questions held back for the returns is lesson 1's), because a baseline starts no schedule of its own.
FC.items("stats", [
  statsStanding({
    id: "b-sleep", strand: "claim-number", fit: "outruns", line: "s1",
    claim: ["Staying up late lowers students’ grades", [["Students who go to bed late have lower grades", "heard-link"], ["Late nights drag down grades at Hillcrest High only", "mixed-who"]]],
    blocks: [{ kind: "article", form: "news", source: "Valley Courier · Schools",
      headline: statsLine("h", "Late nights drag down grades, study finds"),
      lines: [
        statsLine("s1", "A survey of Hillcrest High students found that those who go to bed after midnight average a 2.6 grade, and those who sleep before 10 average a 3.2."),
        statsLine("s2", "Researchers said students who stay up late may also work more hours or have less time to study.", { para: true })] }],
    deciding: ["h", "s1", "s2"],
    reason: ["The headline says late nights “drag down” grades. The survey only compared two groups of students as they already were, and the researchers say the late sleepers may also work more hours or have less time to study, which could explain the gap."],
    need: "You would need students whose bedtime changed and nothing else, or two groups that were alike except for bedtime."
  }),
  statsStanding({
    id: "b-club", strand: "claim-number", fit: "outruns", line: "s1",
    claim: ["Nine in ten people say FreshBrew is the best coffee in town", [["Nine in ten of the members who answered rate FreshBrew the best", "mixed-who"], ["FreshBrew coffee is better for you than other coffee", "mixed-claim"]]],
    blocks: [{ kind: "article", form: "ad", source: "FreshBrew Coffee Club",
      headline: statsLine("h", "9 in 10 say FreshBrew is the best coffee in town."),
      lines: [
        statsLine("s1", "In our survey, 9 in 10 who answered rated FreshBrew “the best coffee in town.”"),
        statsLine("s2", "Join the club today."),
        statsLine("f1", "Based on the 120 members who answered an email survey sent to 1,400 members. People who are not members were not asked.", { fine: true, note: "That is who was asked and who answered, not the result." })] }],
    deciding: ["h", "s1", "f1"],
    reason: ["The headline says “9 in 10 say”, which a reader takes as 9 in 10 people. The small print says only 120 of 1,400 members answered and people who are not members were not asked, and people who like the coffee are the ones likely to join and to answer."],
    need: "You would need answers from people picked at random around town, not only members who chose to reply."
  }),
  statsStanding({
    id: "b-library", strand: "claim-number", fit: "holds", line: "s1",
    claim: ["Library visits were 20% higher this spring than last spring", [["The new Saturday hours lift library visits 20%", "heard-cause"], ["Library visits are up 20% this spring at the county’s libraries", "mixed-who"]]],
    blocks: [{ kind: "article", form: "news", source: "Pinecrest Daily · Neighbors",
      headline: statsLine("h", "Library visits up 20% this spring"),
      lines: [
        statsLine("s2", "Branch manager June Alvarez said the library added Saturday hours in March.", { note: "That is a change at the library, not a count of visits." }),
        statsLine("s1", "The front-door counter, the same one used both years, recorded 6,000 visits this spring, up from 5,000 last spring.", { para: true })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says visits are up 20%, and the same counter shows it both years: 6,000 against 5,000 is one fifth more. The headline does not say the Saturday hours are the reason, and neither does the story."],
    need: "To say the new hours caused it, you would need other months or other libraries to compare. The headline does not claim that."
  }),
  statsStanding({
    id: "b-breakins", strand: "claim-number", fit: "unclear", line: null,
    claim: ["More homes in Ashford are being broken into", [["Break-ins surge in Ashford and the towns around it", "mixed-who"], ["Locking your doors will stop break-ins", "mixed-claim"]]],
    blocks: [{ kind: "article", form: "news", source: "Ashford Times · Public Safety",
      headline: statsLine("h", "Break-ins surge in Ashford"),
      lines: [
        statsLine("s1", "Police say break-ins in Ashford are up sharply and neighbors are on edge."),
        statsLine("s2", "Chief Omar Velasco urged residents to lock doors and report anything unusual.", { para: true })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says break-ins “surge”, and the story says “up sharply”, but it gives no count and no earlier count to compare with. With no number in the text, there is nothing to check, so you cannot tell."],
    need: "You would need how many break-ins there were this year and in the same months a year ago."
  }),
  statsStanding({
    id: "b-pool", strand: "claim-number", fit: "outruns", line: "s1",
    claim: ["Many more people signed up for Eastport swim classes this summer", [["Eastport’s swim classes are full this summer", "mixed-claim"], ["Many more Eastport children signed up for swim classes this summer", "mixed-who"]]],
    blocks: [
      { kind: "article", form: "post", source: "Eastport Parks & Recreation · 2h",
        lines: [
          statsLine("s1", "Swim class sign-ups soared this summer: 200 people signed up, up from 190 last summer."),
          statsLine("s2", "Thank you, Eastport!")] },
      { kind: "chart", type: "bars", title: "Swim class sign-ups", x: ["Last summer", "This summer"], y: { from: 180, to: 200, step: 5, unit: "people" },
        series: [{ values: [190, 200] }], labels: true, source: "Eastport Parks & Recreation" }],
    deciding: ["s1"], redraw: "from-zero",
    reason: ["The post says sign-ups “soared”, but 200 against 190 is 10 more people, about 5% more. The chart starts at 180, so the second bar looks twice as tall as the first."],
    need: "You would need a rise big enough to call a soar, or the sign-ups for several summers to see what is usual."
  }),
  statsStanding({
    id: "b-lozenge", strand: "claim-number", fit: "holds", line: "s1",
    claim: ["Orrin lozenges make colds about a day shorter", [["People who take Orrin lozenges have shorter colds", "heard-link"], ["Orrin lozenges make colds shorter for children too", "mixed-who"]]],
    blocks: [{ kind: "article", form: "report", source: "Mill Valley Health Group · Study summary",
      headline: statsLine("h", "Orrin lozenge shortens a cold by about a day"),
      lines: [
        statsLine("s1", "In a study of 400 adults with new colds, a coin toss put half on the Orrin lozenge and half on a plain lozenge that looked the same. Colds lasted 6 days on average with Orrin and 7 days with the plain one."),
        statsLine("s2", "Neither the adults nor the nurses who checked them knew who got which lozenge.", { para: true })] }],
    deciding: ["h", "s1", "s2"],
    reason: ["The headline says Orrin shortens a cold by about a day, and the study shows it: 6 days against 7. A coin toss decided who got which lozenge, and nobody knew, so the two groups were alike apart from the lozenge. The claim is about adults, and so was the study."],
    need: "Nothing more is needed for adults. For children you would need a study of children."
  })
]);
