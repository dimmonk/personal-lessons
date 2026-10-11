// Stats, lesson 1 "Find the claim and its number": the five questions of the end check, from areas of life the lesson's groups did not use
// (school, sports, food, travel, pets). Invented outlets, people and products.
FC.items("stats", [
  statsItem({
    id: "k-reading", fit: "holds", kind: "size", line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Valley Courier · Schools",
      headline: statsLine("h", "One in six third graders at Eastside Elementary reads below grade level"),
      lines: [
        statsLine("s1", "Of the 180 third graders who took the state reading test this spring, 30 scored below grade level, the district reported."),
        statsLine("s2", "Principal Dana Whitlock said teachers will offer after-school reading help to every student in that group.", { para: true, note: "That is what the school will do, not a count of students." })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says “one in six”. The district’s count is 30 of 180 third graders, and 30 of 180 is exactly one in six. The headline claims no more than the count."],
    need: "The count covers Eastside’s third graders. For another school or grade you would need that school’s own count."
  }),
  statsItem({
    id: "k-5k", fit: "outruns", kind: "cause", line: "s1",
    blocks: [{ kind: "article", form: "post", source: "Priya Nair · @priyaruns · 1d",
      lines: [
        statsLine("s1", "Cut 2 minutes off my 5K in one month with PowerPeak shakes. They work!"),
        statsLine("s2", "(That was also the month I hired a coach and went from 2 runs a week to 4.)", { note: "That is how her training changed, not the result she credits to the shakes." })] }],
    deciding: ["s1", "s2"],
    reason: ["She credits the shakes: “They work!” But the same month she also hired a coach and doubled her runs a week, and either could explain the 2 minutes. One person’s month does not show what the shakes did."],
    need: "You would need runners who changed nothing but the shakes, compared with runners who did not take them."
  }),
  statsItem({
    id: "k-diner", fit: "unclear", kind: "most", line: null,
    blocks: [{ kind: "article", form: "news", source: "Valley Courier · Food",
      headline: statsLine("h", "Hillside Diner’s new menu is a hit, owner says"),
      lines: [
        statsLine("s1", "The diner added 14 new dishes in April, and owner Tess Moreno says customers “keep telling me” they like it better.", { note: "That is how many dishes were added, not how many customers like the menu." }),
        statsLine("s2", "“We’re busier than ever,” Moreno said.", { para: true }),
        statsLine("s3", "The 42-seat diner is open from 6 a.m. to 2 p.m. daily.", { note: "That is the size of the diner, not a count of customers." })] }],
    deciding: ["h", "s2"],
    reason: ["The headline says the menu is a hit, and the only thing behind it is the owner’s word: customers “keep telling me” and “we’re busier than ever”. The numbers in the story are 14 dishes and 42 seats, and neither counts customers or sales, so you cannot tell."],
    need: "You would need a number that measures the claim, such as sales or customers before and after the change, ideally from someone other than the owner."
  }),
  statsItem({
    id: "k-boarding", fit: "outruns", kind: "compare", line: "s1",
    blocks: [{ kind: "article", form: "ad", source: "SkyBridge Air",
      headline: statsLine("h", "More flights on time than any other airline."),
      lines: [
        statsLine("s1", "SkyBridge Air arrived on time 87% of the time last year."),
        statsLine("s2", "Book your summer trip today."),
        statsLine("f1", "Compared with the 84% average of two other airlines on SkyBridge’s 12 routes. Other airlines were not included.", { fine: true, note: "That is the other airlines’ rate, not SkyBridge’s." })] }],
    deciding: ["h", "s1", "f1"],
    reason: ["The headline says “any other airline”. The small print says SkyBridge was compared with two other airlines on its own flights, so the claim covers far fewer airlines than the headline says."],
    need: "You would need on-time rates for every airline that flies between the same cities, counted the same way."
  }),
  statsItem({
    id: "k-shelter", fit: "holds", kind: "compare", line: "s1",
    blocks: [{ kind: "article", form: "news", source: "Harbor Gazette · Community",
      headline: statsLine("h", "Harbor Shelter placed 212 pets in homes this year, up from 170"),
      lines: [
        statsLine("s1", "Harbor Animal Shelter placed 212 dogs and cats in homes this year, up from 170 last year, its annual report says."),
        statsLine("s2", "The shelter took in 640 animals this year and 655 last year.", { para: true, note: "That is how many animals came in, not how many went to homes." })] }],
    deciding: ["h", "s1"],
    reason: ["The headline says 212 pets were placed, up from 170, and the shelter’s annual report gives the same two counts. The headline claims no more than the report shows."],
    need: "The counts show that more pets were placed. To say why, you would need more than these counts, and the headline does not say why."
  })
]);
