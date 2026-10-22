// Civics, lesson 10: Rights and responsibilities (part 10). Questions 63 to 72 of the 2025 civics test (USCIS form M-1778, 09/25: the subject record's refs),
// in the list's wording and with its accepted answers, and one timeline: the four amendments about who can vote, put in the order they were added (dates
// from the National Archives' text of the amendments, docs/research/civics.md C23). Each question is a topic of its own; so is the timeline. Checked
// against the list by tests/civics-pure.mjs.
(() => {
  const SAY_IT = "Say your answer out loud, then type it.";
  const question = (n, words, accept, reason, extra = {}) => ({ id: "q" + n, strand: "q" + n, facets: {}, blocks: [{ kind: "spoken", text: words }],
    asks: [{ id: "say", kind: "text", prompt: SAY_IT, accept, ...extra }], reason });
  FC.items("civics", [
    question(63, "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
      ["Citizens eighteen (18) and older (can vote).", "You don’t have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."],
      "Describe any one. In the order they were added: a man of any race (1870), women (1920), no poll tax (1964), and everyone 18 and older (1971)."),
    question(64, "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
      ["Citizens", "Citizens of the United States", "U.S. citizens"],
      "Only citizens can vote for president or Congress, run for those offices, or sit on a jury."),
    question(65, "What are three rights of everyone living in the United States?",
      ["Freedom of expression", "Freedom of speech", "Freedom of assembly", "Freedom to petition the government", "Freedom of religion", "The right to bear arms"],
      "Name any three. These belong to everyone living here, citizen or not.", { count: 3 }),
    question(66, "What do we show loyalty to when we say the Pledge of Allegiance?",
      ["The United States", "The flag"],
      "The Pledge is a promise of loyalty to the flag and to the country it stands for."),
    question(67, "Name two promises that new citizens make in the Oath of Allegiance.",
      ["Give up loyalty to other countries", "Defend the (U.S.) Constitution", "Obey the laws of the United States", "Serve in the military (if needed)", "Serve (help, do important work for) the nation (if needed)", "Be loyal to the United States"],
      "Name any two. You will make these promises yourself on the day you become a citizen.", { count: 2 }),
    question(68, "How can people become United States citizens?",
      ["Be born in the United States, under the conditions set by the 14th Amendment", "Naturalize", "Derive citizenship (under conditions set by Congress)"],
      "You are born a citizen here, you naturalize, or you get it under conditions written in a law of Congress."),
    question(69, "What are two examples of civic participation in the United States?",
      ["Vote", "Run for office", "Join a political party", "Help with a campaign", "Join a civic group", "Join a community group", "Give an elected official your opinion (on an issue)", "Contact elected officials", "Support or oppose an issue or policy", "Write to a newspaper"],
      "Name any two. Each is a way to take part in how the country is run.", { count: 2 }),
    question(70, "What is one way Americans can serve their country?",
      ["Vote", "Pay taxes", "Obey the law", "Serve in the military", "Run for office", "Work for local, state, or federal government"],
      "Name any one. Voting, paying taxes and obeying the law are the everyday ways."),
    question(71, "Why is it important to pay federal taxes?",
      ["Required by law", "All people pay to fund the federal government", "Required by the (U.S.) Constitution (16th Amendment)", "Civic duty"],
      "Federal taxes pay for the federal government, and the law requires them."),
    question(72, "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
      ["Required by law", "Civic duty", "Makes the draft fair, if needed"],
      "The law requires men 18 through 25 to register, so that a draft, if one is ever needed, is fair."),
    { id: "t-votes", strand: "t-votes", facets: {}, blocks: [{ kind: "prose", text: "Four amendments opened the vote to more people, one after another." }],
      asks: [{ id: "order", kind: "order", prompt: "Tap them in the order they were added, the first one first.", scored: "whole",
        steps: [{ id: "race", text: "A male citizen of any race can vote." }, { id: "women", text: "Women and men can vote." },
          { id: "poll", text: "You don’t have to pay a poll tax to vote." }, { id: "age", text: "Citizens 18 and older can vote." }],
        right: ["race", "women", "poll", "age"],
        then: "Any race came first, in 1870, after the Civil War; then women, in 1920; then no poll tax, in 1964; then age 18, in 1971." }],
      reason: "Each one added more people to those who can vote: by race, then women, then those who could not pay a tax, then everyone 18 and older." }
  ]);
})();
