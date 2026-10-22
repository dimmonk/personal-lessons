// Civics, lesson 11: Colonies and independence (part 11). Questions 73 to 89 of the list, read the way historians read the past (C11, C12): the background
// first, then each event put in its time and its chain of cause, cause by cause up to the Declaration, then the war, the Constitution and its people. Dates
// are from M-1778 and docs/research/civics.md C23. Then the questions from memory in four groups, with the timeline, and a recall check of all 18, 16 to pass (many answers are a phrase to type as the list words it, so one slip of wording more is allowed).
FC.lesson("civics", {
  id: "l11", part: "11", title: "Colonies and independence", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "Seventeen questions are about the years before and after 1776. They are easier to keep as one story, each event in its time, than as a loose list.",
    "Historians read the past this way: put each event in its time, find what led to it, and find where a claim about it comes from. You will use the same three moves in lessons 12 and 13."
  ],
  flow: [
    { title: "How to read the past",
      show: [
        { kind: "document", form: "table", title: "Three moves, every time", head: ["Move", "The question to put"], rows: [
          { id: "m-time", cells: ["Put it in its time", "What came before it, and what came after?"] },
          { id: "m-cause", cells: ["Find its cause", "What led to it? A cause always comes before what it causes."] },
          { id: "m-source", cells: ["Find where a claim comes from", "Which paper, law or ruling says so, and from when?"] }] },
        { kind: "prose", tone: "wrong", text: ["“Boston Tea Party, Stamp Act, Yorktown: I only need a name.” A loose list of names is hard to keep, and it hides what led to what.",
          "Put each name in its time and next to its cause. The chain holds the names for you."] }
      ] },
    { title: "Before the quarrel",
      show: [
        { kind: "document", form: "table", title: "Who was here, and who came", head: ["Who", "What the list says"], rows: [
          { id: "b-first", cells: ["Who lived here first", "American Indians, also called Native Americans"] },
          { id: "b-came", cells: ["Why colonists came", "Freedom, political liberty, religious freedom, economic opportunity, to escape persecution"] },
          { id: "b-slaves", cells: ["Who was taken and sold as slaves", "Africans: people from Africa"] }] }
      ] },
    { title: "Cause by cause, up to 1776",
      show: [
        { kind: "document", form: "table", title: "What led to independence", head: ["When", "What happened, and what it led to"], rows: [
          { id: "c-taxes", cells: ["From 1763", "Britain came out of a long war with heavy debts and laid new taxes on the colonies: the Sugar Act, the Stamp Act. The colonies had no vote in Parliament: taxation without representation."] },
          { id: "c-townshend", cells: ["1767", "More taxes, the Townshend Acts, and more resistance. Then came the Boston Massacre. (British soldiers staying in Americans’ houses was another grievance.)"] },
          { id: "c-tea", cells: ["1773", "The Tea Act; colonists dumped British tea into Boston Harbor: the Boston Tea Party."] },
          { id: "c-intolerable", cells: ["1774", "Parliament passed laws the colonists called the Intolerable Acts."] },
          { id: "c-declaration", cells: ["July 4, 1776", "The Declaration of Independence, written by Thomas Jefferson, is adopted: the colonies did not have self-government, and now claimed it."] }] }
      ] },
    { title: "The war, and after",
      show: [
        { kind: "document", form: "table", title: "From war to Constitution", head: ["When", "What happened"], rows: [
          { id: "w-war", cells: ["During the war", "The American Revolution, the war for independence: Bunker Hill, Washington crossing the Delaware, Valley Forge"] },
          { id: "w-saratoga", cells: ["1777", "Saratoga: a British surrender. France then joined the American side."] },
          { id: "w-yorktown", cells: ["1781", "Yorktown: the British surrender, won with French help"] },
          { id: "w-constitution", cells: ["1787", "The Constitution is written. The Federalist Papers, written by Madison, Hamilton and Jay and signed Publius, helped people understand it and supported passing it."] },
          { id: "w-states", cells: ["The 13 original states", "New Hampshire, Massachusetts, Rhode Island, Connecticut, New York, New Jersey, Pennsylvania, Delaware, Maryland, Virginia, North Carolina, South Carolina, Georgia"] }] }
      ] },
    { title: "Five people",
      show: [
        { kind: "document", form: "table", title: "One thing to say about each", head: ["Person", "Famous as"], rows: [
          { id: "p-franklin", cells: ["Benjamin Franklin", "Inventor; U.S. diplomat; helped write the Declaration of Independence; first Postmaster General"] },
          { id: "p-washington", cells: ["George Washington", "General of the Continental Army; first president of the United States; “Father of Our Country”"] },
          { id: "p-jefferson", cells: ["Thomas Jefferson", "Writer of the Declaration of Independence; third president; doubled the size of the United States (Louisiana Purchase)"] },
          { id: "p-madison", cells: ["James Madison", "“Father of the Constitution”; fourth president; president during the War of 1812"] },
          { id: "p-hamilton", cells: ["Alexander Hamilton", "First Secretary of the Treasury; one of the writers of the Federalist Papers"] }] }
      ] },
    { set: { items: ["q74", "q73", "q75"], order: "listed" } },
    { set: { items: ["q77", "q78", "q79", "q76"], order: "listed" } },
    { set: { items: ["t-colonies", "q80", "q82", "q83", "q84"], order: "listed" } },
    { set: { items: ["q81", "q85", "q86", "q87", "q88", "q89"], order: "shuffle", mix: { from: ["l9", "l10"], share: 0.25 } } }
  ],
  check: {
    items: ["q73", "q74", "q75", "q76", "q77", "q78", "q79", "q80", "q81", "q82", "q83", "q84", "q85", "q86", "q87", "q88", "q89", "t-colonies"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 16 } }]
  }
});
