// Civics, lesson 16: The interview (part 16). The real test as USCIS describes it (C1): 20 questions drawn from the 128, asked aloud, no options, 12 right
// to pass. First the learner checks the answers that change (the page USCIS posts them on; their own answers are kept on the subject screen, entered in
// lesson 3, and a question that reads one is left out of the draw until it is entered, so nothing holds the learner back), then a mock interview of 20
// questions drawn at random from every question of the list, read aloud, answered aloud then typed, with nothing shown until the end; 16 to pass (ours,
// above the real 12), and a second mock seven days later on questions the first did not ask (C4: the question is heard).
FC.lesson("civics", {
  id: "l16", part: "16", title: "The interview", rev: 2, status: "live",
  history: [
    { rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-23", change: "The draw is written as a list of groups (one group of 20 from all 128 questions); the mock interview is the same." }],
  why: [
    "At the interview an officer puts up to 20 of the 128 questions to you aloud. You answer from memory, with no choices to pick from. Twelve right passes, and the officer stops once you have 12 right or 9 wrong.",
    "Here you take the same test: 20 questions drawn at random from all 128. Aim for 16, so a bad day still passes. A week later you take a second one, on other questions."
  ],
  flow: [
    { title: "Before you start",
      show: [
        { kind: "prose", text: "Some answers change with elections and appointments: the president, your senators and the others. At the interview you give the name of the person serving on that day. Check them on the page below." },
        { kind: "ref", ref: "updates" },
        { kind: "prose", text: "Your own answers are on the subject’s page, under “Your answers and interview date”; change them there if one is out of date. A question about your own answers is left out of the mock until you have entered it, so you can start now either way. After the mock, each question you missed names where to go over it." }
      ] }
  ],
  check: {
    items: { draw: [{ strands: Array.from({ length: 128 }, (_, i) => "q" + (i + 1)), n: 20 }] },
    spoken: true, retest: 7, feedback: "at-end",
    pass: [{ right: { min: 16 } }]
  }
});
