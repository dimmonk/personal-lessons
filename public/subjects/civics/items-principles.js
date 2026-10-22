// Civics, lesson 9: Principles and founding documents (part 9). Questions 1 to 14 of the 2025 civics test (USCIS form M-1778, 09/25: the subject record's
// refs), in the list's wording and with its accepted answers, numbered as the list numbers them. Each is read aloud and answered from memory, and each is a
// topic of its own. The line under each is what the answer means, tied to the part of the government it explains. Checked against the list by
// tests/civics-pure.mjs.
(() => {
  const SAY_IT = "Say your answer out loud, then type it.";
  const question = (n, words, accept, reason, extra = {}) => ({ id: "q" + n, strand: "q" + n, facets: {}, blocks: [{ kind: "spoken", text: words }],
    asks: [{ id: "say", kind: "text", prompt: SAY_IT, accept, ...extra }], reason });
  FC.items("civics", [
    question(1, "What is the form of government of the United States?",
      ["Republic", "Constitution-based federal republic", "Representative democracy"],
      "The people elect the ones who make the laws, under a written Constitution. That is a republic, and it is why voters choose Congress and the president."),
    question(2, "What is the supreme law of the land?",
      ["(U.S.) Constitution"],
      "The Constitution is above every other law. A law that goes against it does not stand."),
    question(3, "Name one thing the U.S. Constitution does.",
      ["Forms the government", "Defines powers of government", "Defines the parts of government", "Protects the rights of the people"],
      "The Constitution forms the three branches, says what each may do, and protects the people’s rights."),
    question(4, "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
      ["Self-government", "Popular sovereignty", "Consent of the governed", "People should govern themselves", "(Example of) social contract"],
      "The government’s power comes from the people. That is why the people elect their leaders."),
    question(5, "How are changes made to the U.S. Constitution?",
      ["Amendments", "The amendment process"],
      "The Constitution is changed by adding an amendment."),
    question(6, "What does the Bill of Rights protect?",
      ["(The basic) rights of Americans", "(The basic) rights of people living in the United States"],
      "The Bill of Rights protects the basic rights of everyone living in the United States."),
    question(7, "How many amendments does the U.S. Constitution have?",
      ["Twenty-seven (27)"],
      "The Constitution has been changed 27 times."),
    question(8, "Why is the Declaration of Independence important?",
      ["It says America is free from British control.", "It says all people are created equal.", "It identifies inherent rights.", "It identifies individual freedoms."],
      "The Declaration said the colonies were free of Britain, and it named rights every person is born with."),
    question(9, "What founding document said the American colonies were free from Britain?",
      ["Declaration of Independence"],
      "The Declaration of Independence, adopted on July 4, 1776, said the colonies were free from Britain."),
    question(10, "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
      ["Equality", "Liberty", "Social contract", "Natural rights", "Limited government", "Self-government"],
      "Name any two. Both documents rest on these ideas: people are equal and free, and the government has only the powers the people give it.", { count: 2 }),
    question(11, "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
      ["Declaration of Independence"],
      "These words are in the Declaration of Independence, not the Constitution."),
    question(12, "What is the economic system of the United States?",
      ["Capitalism", "Free market economy"],
      "People and businesses own property and decide what to make and sell. That is capitalism, a free market economy."),
    question(13, "What is the rule of law?",
      ["Everyone must follow the law.", "Leaders must obey the law.", "Government must obey the law.", "No one is above the law."],
      "No one is above the law, not even the president. That is why a court can stop an order that breaks the law."),
    question(14, "Many documents influenced the U.S. Constitution. Name one.",
      ["Declaration of Independence", "Articles of Confederation", "Federalist Papers", "Anti-Federalist Papers", "Virginia Declaration of Rights", "Fundamental Orders of Connecticut", "Mayflower Compact", "Iroquois Great Law of Peace"],
      "Name any one. The Declaration of Independence is the easiest to remember.")
  ]);
})();
