// Civics, lesson 3: Federal, state, local, and your answers (part 3). Q58 to Q60 in the wording and with the accepted answers of the 2025 civics test (USCIS form M-1778,
// 09/25: the subject record's refs), then the eight questions whose answers depend on where you live and who holds office: each reads the answer the
// learner entered in the form for their own answers (accept.own), and the app stores no official's name. Checked against the list by tests/civics-pure.mjs.
(() => {
  const SAY_IT = "Say your answer out loud, then type it.";
  const own = (n, words, reason) => question(n, words, { own: "answers.q" + n }, reason);
  const question = (n, words, accept, reason, extra = {}) => ({ id: "q" + n, strand: "q" + n, facets: {}, blocks: [{ kind: "spoken", text: words }],
    asks: [{ id: "say", kind: "text", prompt: SAY_IT, accept, ...extra }], reason });
  FC.items("civics", [
    question(58, "Name one power that is only for the federal government.",
      ["Print paper money", "Mint coins", "Declare war", "Create an army", "Make treaties", "Set foreign policy"],
      "These belong to the whole country, so only the federal government handles them. A state cannot."),
    question(59, "Name one power that is only for the states.",
      ["Provide schooling and education", "Provide protection (police)", "Provide safety (fire departments)", "Give a driver’s license", "Approve zoning and land use"],
      "The states are in charge of these. Cities and counties carry out many of them under their state’s laws."),
    question(60, "What is the purpose of the 10th Amendment?",
      ["(It states that the) powers not given to the federal government belong to the states or to the people."],
      "The 10th Amendment keeps all the powers the Constitution does not give to the federal government for the states or the people."),
    own(23, "Who is one of your state’s U.S. senators now?",
      "Each state has two senators. You entered yours."),
    own(29, "Name your U.S. representative.",
      "A member of the House speaks for one district. You entered yours."),
    own(30, "What is the name of the Speaker of the House of Representatives now?",
      "The Speaker leads the House of Representatives. You entered the name of the person who holds the job now."),
    own(38, "What is the name of the President of the United States now?",
      "The president leads the executive branch. You entered the name of the person who holds the job now."),
    own(39, "What is the name of the Vice President of the United States now?",
      "The vice president takes over if the president can no longer serve. You entered the name of the person who holds the job now."),
    own(57, "Who is the Chief Justice of the United States now?",
      "The Chief Justice leads the Supreme Court. You entered the name of the person who holds the job now."),
    own(61, "Who is the governor of your state now?",
      "The governor leads the state’s executive branch. You entered yours."),
    own(62, "What is the capital of your state?",
      "The state government meets in the capital. You entered yours.")
  ]);
})();
