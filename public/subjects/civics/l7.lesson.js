// Civics, lesson 7: Who is telling you (part 7). The fourth reading move: judge a source by leaving it and seeing what others say, not by how it looks. The four
// moves are taught, a page of search results is worked, and the first decisions are practised in the app (the real move is made on the open web, which the app
// cannot host); the learner marks, on their own phone, that they did it. The check is five new pages and posts, 4 to pass.
FC.lesson("civics", {
  id: "l7", part: "7", title: "Who is telling you", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "A story can look official and still come from someone who wants you to believe it. People who check facts for a living do not read the page harder. They leave it and see what others say about who is behind it.",
    "The real move is made on your own phone, on the open web. Here you practice the first decisions, and then you mark that you did it."
  ],
  flow: [
    { title: "Four moves",
      show: [{ kind: "document", form: "table", title: "What fact checkers do", head: ["Move", "What it means"], rows: [
        { id: "m-trusted", cells: ["Look for trusted work", "Search the claim and find a report by people who have no stake in it."] },
        { id: "m-original", cells: ["Find the original", "Go to the law, the speech or the record itself, not someone’s telling of it."] },
        { id: "m-source", cells: ["Investigate the source", "Leave the page and see who is behind it. The source’s own pages say only what it wants you to read, even under a name like “independent” or “official”."] },
        { id: "m-back", cells: ["Circle back", "Return to the story and read it again, knowing more."] }] }] },
    { title: "A wrong idea",
      show: [{ kind: "prose", tone: "wrong", text: ["“It looks official, so I can trust it.” A page can have a flag, a serious name and an About page, and still be run by anyone.",
        "A seal, a .org, “nonpartisan” or a paper’s kind of name can be put on any page. Do not judge a page by how it looks. Leave it and see what others say about who is behind it, or go to the original record."] }] },
    { title: "When to check",
      show: [{ kind: "prose", text: ["You do not have to check everything.", ...CIVICS_SOURCE_RULE] }] },
    { title: "The same group, two pages",
      show: [{ kind: "pair", a: { kind: "prose", text: "The group’s own About page: “We are neighbors who want safe streets.”" }, b: { kind: "prose", text: "A paper’s report on who pays for the group." },
        compare: "The first is the group talking about itself. The second is someone else checking." }] },
    { worked: "l7-safe" },
    { set: { items: ["l7-truth", "l7-mail", "l7-ban"], order: "listed" } },
    { set: { items: ["l7-school", "l7-freeze", "l7-sudden", "l7-county"], order: "shuffle" } },
    { own: "setup" }
  ],
  check: {
    items: ["l7-garden", "l7-facts", "l7-quote", "l7-bridges", "l7-statehouse"],
    order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 4 } }]
  }
});
