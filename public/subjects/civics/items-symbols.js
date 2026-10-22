// Civics, lesson 15: Symbols and holidays (part 15). Questions 119 to 128 of the 2025 civics test (USCIS form M-1778, 09/25: the subject record's refs), in
// the list's wording and with its accepted answers, numbered as the list numbers them. Each is read aloud and answered from memory, and each is a topic of
// its own. Question 120 also accepts the places the list prints as also acceptable. Checked against the list by tests/civics-pure.mjs.
(() => {
  const SAY_IT = "Say your answer out loud, then type it.";
  const question = (n, words, accept, reason, extra = {}) => ({ id: "q" + n, strand: "q" + n, facets: {}, blocks: [{ kind: "spoken", text: words }],
    asks: [{ id: "say", kind: "text", prompt: SAY_IT, accept, ...extra }], reason });
  FC.items("civics", [
    question(119, "What is the capital of the United States?",
      ["Washington, D.C."],
      "The capital of the United States is Washington, D.C., not New York."),
    question(120, "Where is the Statue of Liberty?",
      ["New York (Harbor)", "Liberty Island", "New Jersey", "Near New York City", "On the Hudson (River)"],
      "The statue stands on Liberty Island in New York Harbor, dedicated in 1886. The island is near both shores: its park’s address is in Jersey City, New Jersey, so the list also accepts New Jersey."),
    question(121, "Why does the flag have 13 stripes?",
      ["(Because there were) 13 original colonies", "(Because the stripes) represent the original colonies"],
      "One stripe for each of the 13 original colonies, the ones that declared independence in 1776."),
    question(122, "Why does the flag have 50 stars?",
      ["(Because there is) one star for each state", "(Because) each star represents a state", "(Because there are) 50 states"],
      "One star for each of the 50 states."),
    question(123, "What is the name of the national anthem?",
      ["The Star-Spangled Banner"],
      "The national anthem is The Star-Spangled Banner."),
    question(124, "The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
      ["Out of many, one", "We all become one"],
      "E Pluribus Unum means out of many, one: we all become one."),
    question(125, "What is Independence Day?",
      ["A holiday to celebrate U.S. independence (from Britain)", "The country’s birthday"],
      "July 4 is Independence Day, the country’s birthday: the Declaration was adopted on July 4, 1776."),
    question(126, "Name three national U.S. holidays.",
      ["New Year’s Day", "Martin Luther King, Jr. Day", "Presidents Day (Washington’s Birthday)", "Memorial Day", "Juneteenth", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving Day", "Christmas Day"],
      "Name any three. Independence Day, Thanksgiving Day and Christmas Day are easy to remember.", { count: 3 }),
    question(127, "What is Memorial Day?",
      ["A holiday to honor soldiers who died in military service"],
      "Memorial Day honors soldiers who died in military service."),
    question(128, "What is Veterans Day?",
      ["A holiday to honor people in the (U.S.) military", "A holiday to honor people who have served (in the U.S. military)"],
      "Veterans Day honors everyone who has served in the military. Memorial Day is for those who died.")
  ]);
})();
