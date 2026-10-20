// Psychology: subject record (lesson standard 3). Its plan is docs/subjects/psychology/plan.md, built on the owner's own course
// (psychology/Identifying-Psychological-Patterns-Practical-Course.md): every story is put to the deciding questions in order (what is going on,
// one moment or a lasting pattern), then the name its telltale signs point to, or too little to tell, then what to do about it. The lists
// are the answers each question can take.
FC.subject('psychology', {
  name: "Psychology",
  field: "mind",
  rev: 10,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-04",
      change: "First version under lesson standard 1: the reasoning branch of the key rewritten in plain words, five specimens re-keyed." },
    { rev: 2, date: "2026-10-05",
      change: "Blurb reworded so it no longer types key answers by hand." },
    { rev: 3, date: "2026-10-05",
      change: "Whole key rewritten in plain words: the first question has four answers, including a passing moment; the branches for something one person does to another and for a lasting way someone is each ask one question, and each has a name for cases where nothing is wrong. Unit One rebuilt as the gate unit." },
    { rev: 4, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 5, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 6, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 7, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 8, date: "2026-10-11",
      change: "Step 7, accounts: the record holds what lesson 1 needs (what counts as what someone did, the four ways an account can read, the next steps, the common slips, and the one topic that comes back in the review), and lesson 1, What did they do?, is added as the pilot." },
    { rev: 9, date: "2026-10-18",
      change: "Rebuilt on the owner's own course: the five deciding questions first, then each name given only on its telltale signs, then what to do. Nine lessons replace the pilot, with additions: situation before character, dissonance in depth, anchors and hindsight, traps in your own head, and the response to each name." },
    { rev: 10, date: "2026-10-20", change: "Placed on a field of the library (mind), one of the shelves Field, Subject, Unit, Lesson." }
  ],
  endResult: "After this subject you can hear a story about someone, or catch one in your own head, and say what is going on, whether it is one moment or a lasting pattern, the name that fits or that there is too little to tell, and what to do about it, when someone reaches for \"narcissist\", \"gaslighting\" or \"toxic\".",
  parts: [
    { id: "1", title: "The five questions" },
    { id: "2", title: "A mind talking itself into something" },
    { id: "2a", title: "Dissonance, in depth" },
    { id: "2b", title: "Anchors and hindsight" },
    { id: "3", title: "Traps in your own head" },
    { id: "4", title: "Confidence or narcissism" },
    { id: "5", title: "Look-alikes and false friends" },
    { id: "6", title: "Moves made on someone" },
    { id: "7", title: "The mixed drill" }
  ],
  lists: {
    // Question 1: what is going on
    kind: [
      { id: "reasoning", text: "A mind talking itself into something" },
      { id: "move", text: "A move made on someone" },
      { id: "pattern", text: "A lasting way someone is" },
      { id: "ordinary", text: "An ordinary reaction or slip: none of these" }
    ],
    // Question 2: one moment or a lasting pattern
    span: [
      { id: "situation", text: "A reaction to a hard time: grief, stress, illness" },
      { id: "once", text: "Once or twice, with no pattern" },
      { id: "years", text: "Over and over, for months or years" },
      { id: "unsaid", text: "The story does not say" }
    ],
    // the names the signs point to (each lesson offers the ones it has taught)
    name: [
      { id: "dissonance", text: "Dissonance" },
      { id: "confirmation", text: "Confirmation bias" },
      { id: "motivated", text: "Motivated reasoning" },
      { id: "sunk", text: "Sunk cost" },
      { id: "revision", text: "An honest change of mind" },
      { id: "anchoring", text: "Anchoring" },
      { id: "hindsight", text: "Hindsight" },
      { id: "catastrophe", text: "Catastrophizing" },
      { id: "mindread", text: "Mind reading" },
      { id: "allnothing", text: "All-or-nothing thinking" },
      { id: "fairworry", text: "A fair worry" },
      { id: "healthy", text: "Healthy confidence" },
      { id: "traits", text: "Some narcissistic traits, not a full pattern" },
      { id: "grandiose", text: "Grandiose narcissism" },
      { id: "vulnerable", text: "Vulnerable narcissism" },
      { id: "borderline", text: "Borderline pattern" },
      { id: "histrionic", text: "Histrionic pattern" },
      { id: "antisocial", text: "Antisocial pattern" },
      { id: "gaslighting", text: "Gaslighting" },
      { id: "darvo", text: "DARVO" },
      { id: "deflect", text: "Attack and change the subject" },
      { id: "lovebomb", text: "Love-bombing, then the cold turn" },
      { id: "projection", text: "Projection" },
      { id: "ordinary", text: "Ordinary: no name needed" },
      { id: "too-little", text: "Too little to tell" }
    ],
    // how a clash between an act and a belief is being eased (Festinger 1957; trivializing, Simon, Greenberg & Brehm 1995)
    resolve: [
      { id: "change-belief", text: "The belief slides to fit what was done" },
      { id: "change-act", text: "The act changes to match the belief" },
      { id: "justify", text: "A new reason is added, and nothing changes" },
      { id: "discredit", text: "The source of the bad news is attacked" },
      { id: "trivialize", text: "It is made to seem not to matter" }
    ],
    // what to do once it is named
    act: [
      { id: "choose", text: "Say the contradiction plainly, then change the act or the belief" },
      { id: "same-bar", text: "Hold both sides to the same standard" },
      { id: "decide-test", text: "Say what would change your mind before you look" },
      { id: "own-first", text: "Make your own estimate from the facts before you hear theirs" },
      { id: "then-not-now", text: "Judge by what could be known then, not by how it turned out" },
      { id: "face-saving", text: "Talk without attacking who they are, and leave them a way to change their mind without losing face" },
      { id: "forward", text: "Judge the next step on its own worth, not on what is spent" },
      { id: "test-thought", text: "Test the thought: the evidence, the likeliest outcome, what you would tell a friend" },
      { id: "plan", text: "Make a plan for the real problem" },
      { id: "record", text: "Trust your record: write things down and check with someone outside" },
      { id: "one-fact", text: "Bring it back to the one fact, calmly, and do not take the bait" },
      { id: "slow-down", text: "Slow down, and keep your own friends and plans" },
      { id: "limit", text: "Keep firm limits; do not expect to talk them out of it" },
      { id: "protect", text: "Protect yourself: keep secrets and money out of reach, keep distance" },
      { id: "help", text: "Get outside help: a therapist, or a hotline if you are not safe" },
      { id: "support", text: "Nothing to fix: give it time and kindness" },
      { id: "find-out", text: "Do not name it yet: watch and find out more" }
    ],
    slip: [
      { id: "wrong-kind", text: "misread what is going on" },
      { id: "wrong-span", text: "misread whether it is one moment or the same shape over and over" },
      { id: "skipped-situation", text: "blamed the person when the story shows something hard going on" },
      { id: "moment-as-pattern", text: "took one moment for a lasting pattern" },
      { id: "part-as-pattern", text: "called it a full pattern from only some of its signs" },
      { id: "wrong-name", text: "picked a name the telltale signs do not point to" },
      { id: "timing", text: "mixed up which came first, the act or the story, the answer or the looking" },
      { id: "admiration-attention", text: "mixed up wanting admiration with wanting attention, or with fear of being left" },
      { id: "part-for-whole", text: "took one part of the sequence for the whole move" },
      { id: "confidence", text: "took pride or confidence for narcissism" },
      { id: "change-is-bias", text: "called an honest change of mind a bias" },
      { id: "fair-for-trap", text: "called a worry the facts back a thinking trap" },
      { id: "by-dislike", text: "judged by how unpleasant it is, not by its shape" },
      { id: "overreached", text: "gave a name when the story says too little to tell" },
      { id: "hedged", text: "said too little to tell when the story settles it" },
      { id: "wrong-resolve", text: "misread how the clash is being eased" },
      { id: "honest-move", text: "took changing the act for bending the story, or bending the story for changing the act" },
      { id: "wrong-act", text: "picked a response that does not fit what it is" }
    ]
  },
  // the question an item turns on: the one its feedback names as deciding (the results screen shows which question is missed most)
  facets: {
    question: { name: "The question it turns on", values: [
      { id: "kind", text: "Question 1, what is going on" },
      { id: "span", text: "Question 2, one moment or a pattern" },
      { id: "name", text: "the name the signs point to" },
      { id: "resolve", text: "how the clash is eased" },
      { id: "act", text: "what to do about it" }
    ] }
  },
  mix: [],
  strands: [
    { id: "five-questions", title: "The five questions" },
    { id: "self-justification", title: "A mind talking itself into something" },
    { id: "dissonance-depth", title: "Dissonance, in depth" },
    { id: "anchors-hindsight", title: "Anchors and hindsight" },
    { id: "thinking-traps", title: "Traps in your own head" },
    { id: "narcissism", title: "Confidence or narcissism" },
    { id: "look-alikes", title: "Look-alikes and false friends" },
    { id: "moves", title: "Moves made on someone" },
    { id: "mixed", title: "The mixed drill" }
  ],
  // the questions and the naming rule are taught before any story, and they are never cut to fit the share (build-subject, 4)
  readingShare: 0.3
});
