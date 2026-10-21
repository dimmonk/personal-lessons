// Debating: subject record (lesson standard 3). Its plan is docs/subjects/debating/plan.md and its sources are docs/research/debating.md. The way of
// thinking is: name the kind of conversation first (what it started from, what each person is trying to get, what would count as done, and whether it has changed), expect a small
// move and not a win, and pick keep going, change the subject or leave by what the other person is doing. A part is one lesson (V71), so the plan's ten lessons are ten parts, grouped into the
// plan's four units; only the first three parts are built, and the subject screen lists the rest as not built.
FC.subject('debating', {
  name: "Debating",
  field: "communication",
  rev: 1,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-21",
      change: "First version, on the research note (docs/research/debating.md), rebuilt after two failed reviews: the record holds what the first three lessons need (Walton and Krabbe's six kinds of conversation with no 'show', what facts do and why people hold on, keep going or change the subject or leave, and the slips each lesson names). The end result says 'early in a disagreement' and not 'in the first minute'." }
  ],
  endResult: "After this subject you can tell, early in a disagreement, what kind of conversation it is and whether it is worth continuing, and then choose a next move (offer one fact, tell one true story, restate their view, or ask for their reason) knowing what the research does and does not show about each, when someone at work, in your family or in your neighborhood disagrees with you.",
  parts: [
    { id: "1", title: "What kind of conversation is this?" },
    { id: "2", title: "Why people dig in" },
    { id: "3", title: "Your goal, and when to leave" },
    { id: "4", title: "Character, emotion, argument" },
    { id: "5", title: "Why a fact alone fails, and a story helps" },
    { id: "6", title: "Restate, then ask for the reason" },
    { id: "7", title: "Share one true experience" },
    { id: "8", title: "The bad moves" },
    { id: "9", title: "Check your own side" },
    { id: "10", title: "Mixed live exchanges" }
  ],
  units: [
    { id: "decide", title: "Decide whether to argue", parts: ["1", "2", "3"] },
    { id: "means", title: "The three means", parts: ["4", "5"] },
    { id: "moves", title: "The moves", parts: ["6", "7", "8", "9"] },
    { id: "together", title: "Put it together", parts: ["10"] }
  ],
  lists: {
    // lesson 1: what the talk is for (Walton and Krabbe's six primary kinds of dialogue, as the research note reads them); the name and the aim are one answer
    dialogue: [
      { id: "persuade", text: "Persuading: you disagree about a claim, and each wants the other to accept theirs" },
      { id: "decide", text: "Deciding together: there is a choice to make, and all of you share the decision" },
      { id: "bargain", text: "Bargaining: you want different things, and you trade toward a deal both can live with" },
      { id: "inquire", text: "Finding out together: nobody knows the answer yet, and all of you want to learn it" },
      { id: "ask", text: "Asking: one person wants an answer, and the other is believed to know it and tells them" },
      { id: "quarrel", text: "Quarrel: the talk is for hitting out at the other person or venting anger" }
    ],
    // lesson 3: the three moves when a talk is going nowhere or going well
    move: [
      { id: "continue", text: "Keep going" },
      { id: "change", text: "Change the subject" },
      { id: "leave", text: "Leave the talk" }
    ],
    slip: [
      { id: "by-topic", text: "went by what the talk is about instead of what it started from and what each person wants" },
      { id: "by-volume", text: "went by how loud or calm it is instead of what the talk is for" },
      { id: "missed-shift", text: "missed that the talk changed into another kind" },
      { id: "took-for-fact", text: "took a disagreement for only a fact someone could check" },
      { id: "took-for-view", text: "took a disagreement for only a view about a group or a policy" },
      { id: "took-for-mix", text: "took a disagreement for a fact and a view mixed together" },
      { id: "gave-up-early", text: "gave up on a talk that could still do some good" },
      { id: "kept-pushing", text: "kept pushing a talk that was no longer being answered" },
      { id: "left-too-soon", text: "left when changing the subject would have done" },
      { id: "too-mild", text: "only changed the subject when it was time to go" },
      { id: "aimed-for-win", text: "aimed for a concession instead of the next small step on offer" },
      { id: "parting-shot", text: "ended with a jab instead of a clean line" },
      { id: "wrong-line", text: "used a line that belongs to a different move" },
      { id: "wrong-act", text: "argued on when the first move was to get away from the people at you" }
    ]
  },
  // how the questions are sorted on the results screen: the kind of conversation, and the move
  facets: {
    dialogue: { name: "The kind of conversation", compare: true, values: [
      { id: "persuade", text: "persuading" },
      { id: "decide", text: "deciding together" },
      { id: "bargain", text: "bargaining" },
      { id: "inquire", text: "finding out together" },
      { id: "ask", text: "asking" },
      { id: "quarrel", text: "a quarrel" },
      { id: "shift", text: "a talk that changed kind" }
    ] },
    disagreement: { name: "What the disagreement is about", compare: true, values: [
      { id: "fact", text: "a fact someone could check" },
      { id: "view", text: "a view about a group or a policy" },
      { id: "both", text: "a fact and a view, mixed" }
    ] },
    move: { name: "The right move", compare: true, values: [
      { id: "continue", text: "keep going" },
      { id: "change", text: "change the subject" },
      { id: "leave", text: "leave the talk" }
    ] }
  },
  mix: [],
  strands: [
    { id: "kinds-of-talk", title: "What kind of conversation is this?" },
    { id: "why-dig-in", title: "Why people dig in" },
    { id: "when-to-stop", title: "Your goal, and when to leave" }
  ],
  readingShare: 0.35
});
