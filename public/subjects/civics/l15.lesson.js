// Civics, lesson 15: Symbols and holidays (part 15). Questions 119 to 128 of the list (C2): the capital, the statue, the flag and what its stripes and stars
// stand for, the anthem and the motto, and the holidays, with the two holidays for soldiers side by side. Then the questions from memory in three groups
// (the last mixed with lessons 9 to 14) and a recall check of all 10, 9 to pass (9 in 10).
FC.lesson("civics", {
  id: "l15", part: "15", title: "Symbols and holidays", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "The last ten questions are about symbols and holidays. Most of them point back to what you have learned: the flag’s stripes to the colonies, Independence Day to 1776.",
    "Read the table once, then answer from memory."
  ],
  flow: [
    { title: "Symbols, and what they stand for",
      show: [
        { kind: "document", form: "table", title: "Symbols of the country", head: ["Symbol", "What to say"], rows: [
          { id: "s-capital", cells: ["The capital", "Washington, D.C."] },
          { id: "s-statue", cells: ["The Statue of Liberty", "New York Harbor; Liberty Island. The list also accepts New Jersey, near New York City, and on the Hudson River: the island is near both shores, and its park’s address is in Jersey City, New Jersey."] },
          { id: "s-stripes", cells: ["The flag’s 13 stripes", "They represent the original colonies: 13 original colonies"] },
          { id: "s-stars", cells: ["The flag’s 50 stars", "One star for each state: 50 states"] },
          { id: "s-anthem", cells: ["The national anthem", "The Star-Spangled Banner"] },
          { id: "s-motto", cells: ["E Pluribus Unum, the first motto", "Out of many, one"] }] }
      ] },
    { title: "Holidays",
      show: [
        { kind: "document", form: "table", title: "National holidays", head: ["Holiday", "What it is"], rows: [
          { id: "d-july", cells: ["Independence Day, July 4", "A holiday to celebrate U.S. independence from Britain: the country’s birthday"] },
          { id: "d-list", cells: ["Others", "New Year’s Day, Martin Luther King, Jr. Day, Presidents Day, Memorial Day, Juneteenth, Labor Day, Columbus Day, Veterans Day, Thanksgiving Day, Christmas Day"] }] },
        { kind: "pair",
          a: { kind: "prose", text: "Memorial Day: a holiday to honor soldiers who died in military service." },
          b: { kind: "prose", text: "Veterans Day: a holiday to honor people who have served in the U.S. military." },
          compare: "Memorial Day is for those who died; Veterans Day is for everyone who served." }
      ] },
    { set: { items: ["q119", "q120", "q121", "q122"], order: "listed" } },
    { set: { items: ["q123", "q124", "q125"], order: "listed" } },
    { set: { items: ["q127", "q128", "q126"], order: "shuffle", mix: { from: ["l9", "l10", "l11", "l12", "l14"], share: 0.3 } } }
  ],
  check: {
    items: ["q119", "q120", "q121", "q122", "q123", "q124", "q125", "q126", "q127", "q128"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 9 } }]
  }
});
