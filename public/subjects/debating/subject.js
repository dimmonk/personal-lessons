// Debating: subject record (lesson standard 3). Its plan is docs/subjects/debating/plan.md and its sources are docs/research/debating.md. The way of
// thinking is: name the kind of conversation first (what it started from, what each person is trying to get, what would count as done, and whether it has changed), expect a small
// move and not a win, and pick keep going, change the subject or leave by what the other person is doing. A part is one lesson (V71), so the plan's ten lessons are ten parts, grouped into the
// plan's four units; all ten are built, and the tenth mixes the decisions of the first nine on new exchanges (the plan's real-world test).
FC.subject('debating', {
  name: "Debating",
  field: "communication",
  rev: 4,
  standard: 2,
  complete: true,
  history: [
    { rev: 1, date: "2026-10-21",
      change: "First version, on the research note (docs/research/debating.md), rebuilt after two failed reviews: the record holds what the first three lessons need (Walton and Krabbe's six kinds of conversation with no 'show', what facts do and why people hold on, keep going or change the subject or leave, and the slips each lesson names). The end result says 'early in a disagreement' and not 'in the first minute'." },
    { rev: 2, date: "2026-10-21",
      change: "Lessons 4 and 5 added (Aristotle's three means read as what a reply puts in question; what a true story gets you). Part 5 is retitled 'What a true story gets you': the plan's 'why a fact alone fails' contradicted the corrected research (a correction works somewhat on a checkable fact). New slips, facets and topics for the two lessons." },
    { rev: 3, date: "2026-10-21",
      change: "Lessons 6 to 9 added (what listening and restating got in the field tests, how to check a restatement, and the question 'how would that work?'; which true experience to tell; replies that work against you; checking your own side with one test). Part 7 is retitled 'Which true experience to share' and part 8 'Replies that work against you': the studies compare experiences that differ in relevance and harm (who it happened to is taught but not graded), and the plan's bad moves were already taught in lessons 4 and 5. New slips, facets and topics. Lessons 4 and 5 were reworded after their third review (answer patterns)." },
    { rev: 4, date: "2026-10-21",
      change: "Lesson 10 added (mixed live exchanges, the real-world test): the subject is complete. One new topic, no new slips or facets (each exchange asks a decision a lesson before it already named). The plan's test (name the kind, keep going, change the subject or leave, and pick the best reply from four) was changed: no source ranks one reply above another, so each of twelve exchanges asks the one decision it calls for, in its own lesson's graded form." }
  ],
  endResult: "After this subject you can tell, early in a disagreement, what kind of conversation it is and whether it is worth continuing, and then choose a next move (offer one fact, tell one true story, restate their view, or ask for their reason) knowing what the research does and does not show about each, when someone at work, in your family or in your neighborhood disagrees with you.",
  parts: [
    { id: "1", title: "What kind of conversation is this?" },
    { id: "2", title: "Why people dig in" },
    { id: "3", title: "Your goal, and when to leave" },
    { id: "4", title: "Character, emotion, argument" },
    { id: "5", title: "What a true story gets you" },
    { id: "6", title: "Restate, then ask for the reason" },
    { id: "7", title: "Which true experience to share" },
    { id: "8", title: "Replies that work against you" },
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
      { id: "wrong-act", text: "argued on when the first move was to get away from the people at you" },
      { id: "took-for-trust", text: "took a reply for a question about whether they can trust you" },
      { id: "took-for-feeling", text: "took a reply for a statement of how they feel" },
      { id: "took-for-argument", text: "took a reply for a challenge to the argument" },
      { id: "wrong-pair", text: "named the wrong two things in a reply about two" },
      { id: "read-length", text: "put it down to an argument that was too long, when the reply showed something else" },
      { id: "read-start", text: "put it down to an argument that started from something they do not accept, when the reply showed something else" },
      { id: "read-neither", text: "decided the reply was not about how the argument was built, when it was" },
      { id: "took-for-hearing", text: "took a shift in their view, or a brush-off, for a hearing that changed nothing" },
      { id: "took-for-move", text: "took a hearing, or a brush-off, for a changed mind" },
      { id: "took-for-nothing", text: "saw nothing in a talk that got a hearing or a small move" },
      { id: "flagged-true", text: "flagged a line of the story that was true" },
      { id: "read-as-result", text: "took a view for one that rests on what would happen" },
      { id: "read-as-line", text: "took a view for a line they will not cross" },
      { id: "read-as-figure", text: "took a view for a figure someone could check" },
      { id: "flagged-fair", text: "flagged a line of the restatement that said what they said" },
      { id: "chose-unrelated", text: "chose an experience that is not about the issue" },
      { id: "chose-no-harm", text: "chose an experience with no harm in it" },
      { id: "chose-statistic", text: "chose a statistic over an experience of your own" },
      { id: "flagged-fine", text: "flagged a reply that was fine" },
      { id: "flagged-same", text: "flagged a line that kept to the note's own test" }
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
    ] },
    means: { name: "What their reply is about", compare: true, values: [
      { id: "trust", text: "whether they can trust you" },
      { id: "feeling", text: "how they feel" },
      { id: "argument", text: "the argument itself" },
      { id: "two", text: "two of these at once" }
    ] },
    build: { name: "Why the argument did not land", compare: true, values: [
      { id: "length", text: "too long to follow" },
      { id: "start", text: "started from something they do not accept" },
      { id: "neither", text: "neither: the reply was about something else" }
    ] },
    result: { name: "What your story got you", compare: true, values: [
      { id: "hearing", text: "a hearing" },
      { id: "move", text: "a small move" },
      { id: "neither", text: "neither" }
    ] },
    telling: { name: "Your story, line by line", compare: true, values: [
      { id: "true", text: "every line true" },
      { id: "invented", text: "a line you could not say" }
    ] },
    rest: { name: "What their view rests on", compare: true, values: [
      { id: "result", text: "what they think would happen" },
      { id: "line", text: "a line they will not cross" },
      { id: "figure", text: "a figure someone could check" }
    ] },
    restated: { name: "Your restatement", compare: true, values: [
      { id: "fair", text: "says only what they said" },
      { id: "added", text: "says more than they said" }
    ] },
    experience: { name: "Which experience to tell", compare: true, values: [
      { id: "issue", text: "one about the issue itself" },
      { id: "harm", text: "one with harm in it" },
      { id: "story", text: "an experience, not a statistic" }
    ] },
    problem: { name: "What works against you", compare: true, values: [
      { id: "slight", text: "a line that looks down on them" },
      { id: "long", text: "too many steps in a row" },
      { id: "stretched", text: "a story stretched past what happened" },
      { id: "added", text: "a restatement with something added" },
      { id: "start", text: "a start they do not accept" }
    ] },
    standard: { name: "Whether one test is used for both", compare: true, values: [
      { id: "same", text: "the same test throughout" },
      { id: "broken", text: "a line that drops the test" }
    ] }
  },
  mix: [],
  strands: [
    { id: "kinds-of-talk", title: "What kind of conversation is this?" },
    { id: "why-dig-in", title: "Why people dig in" },
    { id: "when-to-stop", title: "Your goal, and when to leave" },
    { id: "three-means", title: "Character, emotion, argument" },
    { id: "true-story", title: "What a true story gets you" },
    { id: "fair-listening", title: "Restating, and asking for the reason" },
    { id: "true-experience", title: "Which true experience to share" },
    { id: "bad-moves", title: "Replies that work against you" },
    { id: "own-side", title: "Checking your own side" },
    { id: "put-together", title: "Mixed live exchanges" }
  ],
  readingShare: 0.35
});
