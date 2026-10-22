// Civics, lesson 14: The 1900s to now (part 14). Questions 100 to 118 of the list, each "why we entered" taught as its reason (C2, C21) and every event put
// in its time (C11). Dates from M-1778 and docs/research/civics.md C23. Then the questions from memory in four groups, with the timeline, and a recall
// check of all 20, 18 to pass (9 in 10).
FC.lesson("civics", {
  id: "l14", part: "14", title: "The 1900s to now", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "Nineteen questions cover the 1900s and after: the wars and why the country went in, hard times at home, and the fight for civil rights.",
    "A war is easier to remember with its reason, and an event with its place in time. Use the same moves as before."
  ],
  flow: [
    { title: "The wars, and why the country went in",
      show: [
        { kind: "document", form: "table", title: "Each war with its reason", head: ["When", "War", "Why the United States went in"], rows: [
          { id: "x-wwi", cells: ["1917", "World War I", "Germany attacked U.S. ships; “to support the Allied Powers (England, France, Italy, and Russia)” against the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"] },
          { id: "x-wwii", cells: ["December 7, 1941", "World War II", "Japanese attacked Pearl Harbor; “to support the Allied Powers (England, France, and Russia)” against the Axis Powers (Germany, Italy, and Japan)"] },
          { id: "x-korea", cells: ["June 1950", "Korean War", "To stop the spread of communism: communist North Korea attacked the South"] },
          { id: "x-vietnam", cells: ["1964 and 1965", "Vietnam War", "To stop the spread of communism: Congress backed the president in 1964, and the first ground combat troops went in 1965"] },
          { id: "x-gulf", cells: ["1990 and 1991", "Persian Gulf War", "To force the Iraqi military from Kuwait: Iraq took Kuwait in August 1990, and the U.S.-led war began in January 1991"] },
          { id: "x-afghan", cells: ["October 2001", "War in Afghanistan, part of the War on Terror", "Terrorists attacked the United States on September 11, 2001"] },
          { id: "x-iraq", cells: ["After 2001", "War in Iraq", "Another conflict after the attacks; the list gives no reason for it"] }] },
        { kind: "pair",
          a: { kind: "prose", text: "World War I: Germany attacked U.S. ships." },
          b: { kind: "prose", text: "World War II: Japanese attacked Pearl Harbor." },
          compare: "Both began, for the United States, with an attack, and both times it joined the side called the Allied Powers. Keep the attacker with its war: Germany and ships for the first, Japan and Pearl Harbor for the second." }
      ] },
    { title: "At home",
      show: [
        { kind: "document", form: "table", title: "The country between and after the wars", head: ["When", "What happened"], rows: [
          { id: "h-1920", cells: ["1920, after World War I", "With the 19th Amendment, all women get the right to vote by law."] },
          { id: "h-1929", cells: ["1929", "The Great Crash, the stock market crash of 1929, starts the Great Depression. Say what it was in the list’s words: the longest economic recession in modern history."] },
          { id: "h-fdr", cells: ["The Depression and World War II", "Franklin Roosevelt is president."] },
          { id: "h-ike", cells: ["World War II and after", "Dwight Eisenhower: a general during World War II, then the 34th president, at the end of the Korean War"] },
          { id: "h-cold", cells: ["The Cold War", "The main rival is the Soviet Union; the main concerns are communism and nuclear war."] },
          { id: "h-rights", cells: ["The civil rights movement", "Say what it did in the list’s words: fought to end racial discrimination (treating people worse for their race). Martin Luther King, Jr.: fought for civil rights; worked for equality for all Americans."] }] },
        { kind: "prose", text: "Two more questions are not tied to a date. An American Indian tribe: Cherokee, Navajo, Sioux, Apache and many more. An American innovation: the light bulb, the automobile, the airplane, the assembly line, landing on the moon." }
      ] },
    { set: { items: ["q100", "q101", "q106", "q110", "q111", "q114"], order: "listed" } },
    { set: { items: ["q102", "q103", "q104", "q105", "q107"], order: "listed" } },
    { set: { items: ["q108", "q109", "q112", "q113"], order: "listed" } },
    { set: { items: ["q115", "q116", "q117", "q118", "t-1900s"], order: "shuffle", mix: { from: ["l11", "l12", "l13"], share: 0.25 } } }
  ],
  check: {
    items: ["q100", "q101", "q102", "q103", "q104", "q105", "q106", "q107", "q108", "q109", "q110", "q111", "q112", "q113", "q114", "q115", "q116", "q117", "q118", "t-1900s"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 18 } }]
  }
});
