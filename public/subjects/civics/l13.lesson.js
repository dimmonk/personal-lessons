// Civics, lesson 13: 1877 to 1900 (part 13). The years the list has no section for, though answers come from them (C3): the vote after 1870 in practice
// (C17, C24), the Chinese Exclusion Act and Wong Kim Ark (C16, C24), Plessy (C17, C24), the statue and the war with Spain (C24). Then the historian's way
// applied to a decision of today that rests on those years (C11, C12): find the line naming the older law, ruling or event it rests on, among lines that
// name other dates and laws; then name what led to that older thing, by two tests: a cause comes before, and it is about the same thing. The 2026
// citizenship ruling, which rested on an 1898 one, is worked; four invented stories are practice (the second group mixed with lesson 12's questions);
// the check is five new stories, all of them resting on 1877 to 1900, 4 to pass.
FC.lesson("civics", {
  id: "l13", part: "13", title: "1877 to 1900", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "The list’s questions on the 1800s stop with the Civil War and its amendments, and its next ones start in the 1900s. The years between still decide things today: a 2026 Supreme Court ruling on citizenship rested on one from 1898.",
    "When a decision of today leans on the past, find what it rests on, put that in its time, and say what led to it."
  ],
  flow: [
    { title: "Who could vote, and who could be a citizen",
      show: [
        { kind: "document", form: "table", title: "After the Civil War", head: ["When", "What happened"], rows: [
          { id: "y-after", cells: ["After the Civil War", "Some southern states made voters pay a poll tax or pass a reading test (a literacy test). These kept many Black citizens from voting."] },
          { id: "y-1882", cells: ["1882", "The Chinese Exclusion Act bans Chinese laborers for ten years. Behind it: other workers resented them as rivals for jobs, and politicians from the West pressed for it. (The law’s own words say only that they endanger “good order.”)"] },
          { id: "y-1898a", cells: ["1898", "The government held Wong Kim Ark, born here to Chinese parents, as no citizen under the Chinese Exclusion Act. In United States v. Wong Kim Ark the Supreme Court says the 14th Amendment makes him one."] }] },
        { kind: "document", form: "table", title: "What ended those rules, later", head: ["When", "What happened"], rows: [
          { id: "z-1964", cells: ["1964", "The 24th Amendment ends poll taxes in elections for president and Congress."] },
          { id: "z-1965", cells: ["1965", "The Voting Rights Act outlaws literacy tests for voters."] },
          { id: "z-1966", cells: ["1966", "A Supreme Court ruling ends any fee to vote in state elections too."] }] }
      ] },
    { title: "Train cars, a statue and a war",
      show: [
        { kind: "document", form: "table", title: "Three more stories of these years", head: ["When", "What happened"], rows: [
          { id: "y-1886", cells: ["1886", "The Statue of Liberty is dedicated: a gift from France, proposed to honor the Union’s win and the end of slavery."] },
          { id: "y-1890", cells: ["1890 and 1896", "A Louisiana law keeps Black and white train passengers in separate cars. In Plessy v. Ferguson (1896) the Supreme Court upholds it. Brown v. Board of Education and the civil rights acts of the 1950s and 1960s end such rules."] },
          { id: "y-1898b", cells: ["1898", "After three years of Cuban fighting against Spain, the U.S. battleship Maine sinks in Havana harbor, and the Spanish-American War follows."] }] },
        { kind: "prose", text: "Also from these years: the light bulb and skyscrapers, two answers of the list." }
      ] },
    { title: "A wrong idea",
      show: [{ kind: "prose", tone: "wrong", text: ["“All men got the vote in 1870, so from then on every man voted.”",
        "That was the law on paper. Poll taxes and literacy tests kept many Black citizens from voting until the 1960s."] }] },
    { title: "When a decision leans on the past",
      show: [
        { kind: "document", form: "table", title: "Two questions to put to the story", head: ["Question", "How"], rows: [
          { id: "s-where", cells: ["What does the decision rest on?", "A story may name several dates and laws. Find the one the decision follows or relies on, not one that only says when something was built or changed."] },
          { id: "s-before", cells: ["What led to it? Test 1", "A cause comes before what it causes. Anything from a later year cannot be the cause."] },
          { id: "s-same", cells: ["What led to it? Test 2", "A cause is about the same thing. A ruling on citizenship answers something about citizenship, not about voting or train cars."] }] }
      ] },
    { worked: "past-citizens" },
    { set: { items: ["past-fee", "past-course"], order: "listed" } },
    { set: { items: ["past-memorial", "past-passport"], order: "shuffle", mix: { from: ["l12"], share: 0.3 } } }
  ],
  check: {
    items: ["past-judge", "past-apology", "past-quiz", "past-museum", "past-lights"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 4 } }]
  }
});
