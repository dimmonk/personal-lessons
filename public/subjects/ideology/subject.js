// Political Ideologies: subject record (lesson standard 3). Its plan is docs/subjects/ideology/plan.md, built on the owner's own course
// (political-ideologies/Identifying-Political-Ideologies-Practical-Course-v3.md): every passage is placed by answering five questions in order,
// and the answers, not the tone, the methods or a party's name, point to the ideology. The lists are the answers each question can take.
FC.subject('ideology', {
  name: "Political Ideologies",
  rev: 7,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the key rewritten in plain words. The two flat questions became a first question with five answers, one of them for a text that speaks for no side, and four branches whose questions end every route in one name. Four names were added where a text says nothing more or nothing extreme, so that such texts have somewhere to go." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: dollars, US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-11",
      change: "Step 6, labels: the record holds what lesson 2 needs (the three verdicts, the four names and what each needs, the nine common slips, the side a label is thrown from, and the one topic that comes back in the review), and lesson 2, Socialist, or not?, is added as the pilot." },
    { rev: 7, date: "2026-10-17",
      change: "Rebuilt on the owner's own course: the five deciding questions first, then each family placed by its answers. Six lessons replace the label-checking pilot." }
  ],
  endResult: "After this subject you can read a post, a speech, a platform or a quote and name the ideology it speaks for, or say there is too little to tell, by answering the deciding questions, when someone argues a position or throws a label like \"socialist\" or \"fascist\".",
  parts: [
    { id: "1", title: "The five questions" },
    { id: "2", title: "Story, democracy, end state" },
    { id: "3", title: "The socialist family" },
    { id: "4", title: "Fascism and Nazism" },
    { id: "5", title: "Look-alikes and false friends" },
    { id: "5b", title: "Today's two" },
    { id: "6", title: "The mixed drill" }
  ],
  lists: {
    // Question 1: who owns, or should own, the businesses and farms
    own: [
      { id: "private", text: "Private owners" },
      { id: "state", text: "The state" },
      { id: "workers", text: "The workers, in councils or co-ops" },
      { id: "directed", text: "Private owners, directed by the state" },
      { id: "unsaid", text: "The words do not say" }
    ],
    // Question 2: who the story is about
    unit: [
      { id: "class", text: "Class: owners against workers" },
      { id: "nation", text: "The nation" },
      { id: "race-rank", text: "Race, as a natural rank to keep" },
      { id: "identity-equal", text: "Race or identity groups, as an unjust rank to undo" },
      { id: "individual", text: "The individual" },
      { id: "tradition", text: "Tradition or faith" },
      { id: "people", text: "The people against an elite" },
      { id: "unsaid", text: "The words do not say" }
    ],
    // Question 3: what drives history
    story: [
      { id: "class-conflict", text: "Class conflict over wealth" },
      { id: "rebirth", text: "The nation's decline and rebirth" },
      { id: "racial-struggle", text: "A struggle between races" },
      { id: "liberty", text: "Freedom spreading to more people" },
      { id: "order", text: "A divine or traditional order" },
      { id: "sold-out", text: "A pure people sold out by an elite" },
      { id: "unsaid", text: "The words do not say" }
    ],
    // Question 4: what to do with elections and the constitution
    democracy: [
      { id: "fulfil", text: "Keep them and widen them" },
      { id: "beyond", text: "Go beyond them: a party rules for the workers" },
      { id: "abolish", text: "Abolish them for a leader or a movement" },
      { id: "majority", text: "Keep the vote, but attack the courts, the press and the civil service" },
      { id: "dissolve", text: "Do away with the state altogether" },
      { id: "restore", text: "Defend them, or restore an older order" },
      { id: "unsaid", text: "The words do not say" }
    ],
    // Question 5: the end state
    end: [
      { id: "classless", text: "A society with no classes and no state" },
      { id: "reborn", text: "A reborn, eternal nation" },
      { id: "racial-order", text: "A racial order" },
      { id: "open", text: "Open competition with no end point" },
      { id: "restored", text: "A restored old order" },
      { id: "equitable", text: "Equal outcomes between groups" },
      { id: "unsaid", text: "The words do not say" }
    ],
    // the families the answers point to
    family: [
      { id: "marxism", text: "Marxism" },
      { id: "leninism", text: "Marxism–Leninism" },
      { id: "demsoc", text: "Democratic socialism" },
      { id: "socdem", text: "Social democracy" },
      { id: "anarchism", text: "Anarchism" },
      { id: "marketsoc", text: "Market socialism" },
      { id: "notsoc", text: "Not socialist: a plan with fewer rules and lower taxes" },
      { id: "fascism", text: "Fascism" },
      { id: "nazism", text: "Nazism" },
      { id: "liberal", text: "Classical liberalism" },
      { id: "conservative", text: "Conservatism" },
      { id: "reactionary", text: "Reaction (bring back the old order)" },
      { id: "natpop", text: "National populism" },
      { id: "idegal", text: "Identity-egalitarianism" },
      { id: "too-little", text: "Too little to tell" }
    ],
    // a check on one feature: does it separate fascism from an ordinary dictatorship, or could any dictatorship do it
    marker: [
      { id: "marker", text: "It separates fascism from an ordinary dictatorship" },
      { id: "method", text: "Any dictatorship can do it: a method" }
    ],
    slip: [
      { id: "wrong-own", text: "misread who would own the businesses" },
      { id: "wrong-unit", text: "misread whom the words are about" },
      { id: "wrong-story", text: "misread what the words say drives history" },
      { id: "wrong-democracy", text: "misread what the words want done with elections" },
      { id: "wrong-end", text: "misread where the words want things to end" },
      { id: "wrong-family", text: "named a family the answers to the questions do not point to" },
      { id: "skipped-direction", text: "saw race or identity and skipped the direction check: a rank called natural and a rank called unjust point to opposite families" },
      { id: "by-method", text: "judged by methods (a leader cult, censorship, secret police), which every kind of regime uses, instead of by what is wanted" },
      { id: "welfare-socialism", text: "took taxes and public services for socialism; socialism is about who owns the businesses" },
      { id: "nation-fascism", text: "took love of country or border control for fascism; fascism needs the rebirth myth and a leader who replaces elections" },
      { id: "trusted-name", text: "trusted a party's name instead of the answers to the questions" },
      { id: "overreached", text: "named a family when the words say too little to tell" },
      { id: "hedged", text: "said too little to tell when the words settle it" }
    ]
  },
  // the question an item turns on: the one its feedback names as deciding (the results screen shows which question is missed most)
  facets: {
    question: { name: "The question it turns on", values: [
      { id: "own", text: "Question 1, who owns" },
      { id: "unit", text: "Question 2, who it is about" },
      { id: "story", text: "Question 3, what drives history" },
      { id: "democracy", text: "Question 4, elections" },
      { id: "end", text: "Question 5, the end state" },
      { id: "family", text: "the family the answers point to" },
      { id: "marker", text: "a marker, or a method" }
    ] }
  },
  mix: [],
  strands: [
    { id: "five-questions", title: "The five questions" },
    { id: "story-democracy-end", title: "Story, democracy, end state" },
    { id: "socialist-family", title: "The socialist family" },
    { id: "fascism", title: "Fascism and Nazism" },
    { id: "look-alikes", title: "Look-alikes and false friends" },
    { id: "todays-two", title: "Today's two" },
    { id: "mixed", title: "The mixed drill" }
  ],
  // the questions and the naming rule are taught before any passage, and they are never cut to fit the share (build-subject, 4)
  readingShare: 0.3
});
