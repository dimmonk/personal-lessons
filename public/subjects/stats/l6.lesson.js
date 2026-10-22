// Stats, lesson 6: Who was counted, and how (part F). Move 4 of the way of thinking: how many were counted, who chose to answer or did not, whether only
// the ones still around were counted, whether they are the people the claim is about, how they were asked and who counted; and the margin of error as
// "could be this far off by luck". One worked example (an online poll that fans chose to answer); the wrong idea named; a first group of four with the
// sentences marked; a second group of six with questions of the earlier lessons mixed in; and the check: six new questions, no help, 5 of 6 to pass.
FC.lesson("stats", {
  id: "l6", part: "F", title: "Who was counted, and how", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (how many, who chose to answer, only the survivors, the people the claim is about, how they were asked, who counted, the margin of error)." }],
  why: [
    "“9 in 10 say …” is only as good as the people who answered. Count the wrong people, or let people pick themselves, and you can get almost any answer.",
    "People who check surveys for a living first find out where the number came from: who was counted, how many, how they were picked and how they were asked. Here you learn to find that in a few lines."
  ],
  flow: [
    { title: "Who was counted",
      show: [
        { kind: "prose", text: [
          "Tap the sentence that says who was counted: how many, and which people. If no sentence says, tap Not given. Then put these questions to it.",
          "How many? A handful can say almost anything. Four dentists, or the six neighbors who came to a club meeting, are too few to speak for many.",
          "Did they choose to answer? People who vote in an online poll or write a review choose to, and they are often the ones who feel strongly (also called self-selection). When only a few of the people asked answer, the ones who did may not be like the rest (also called non-response).",
          "Were only the ones still around counted? Counting only the shops still open, or the members who renewed, leaves out the ones that failed or left (also called survivorship).",
          "Are they the people the claim is about? Patients of one clinic, a seller’s customers or mice are not all adults.",
          "How were they asked? A question that pushes toward one answer does not measure the claim.",
          "Who counted? A seller or a group that wants a result is a reason to look harder, not a verdict by itself: a seller who counts every customer can be right."] }
      ] },
    { title: "Picked by chance, and the margin",
      show: [
        { kind: "prose", text: [
          "The fair way is to count everyone, or to pick enough people by chance from the people the claim is about, for example by calling phone numbers picked at random.",
          "Even picked by chance, a survey can be a little off by luck. The margin of error says how far: “off by about 3 points” means a result of 45% is most likely somewhere from 42% to 48%. For a race between two, each number can move by the margin, so a lead holds only when it is bigger than the two margins together: 56% against 44% with a margin of 3 holds (53 is still above 47), while 53% against 47% with a margin of 4 does not: each could move 4 points the other way, and the order could flip. The more people, the smaller it is: about 5 points with 400 people, 4 with 600, 3 with 1,000.",
          "Then the verdict. It holds up when everyone was counted, or enough people picked by chance from the people the claim is about, and the result stays on the claim’s side even at the edge of the margin (for “most”, still above half). It does not show it when the text shows they were too few, chose themselves, were only the ones still around, were other people or were pushed by the question, or when the result could be on the other side by luck. You cannot tell when the text does not say how many were counted or how they were picked, unless it shows a fault anyway: a fault the text shows (a question that pushes, people who chose themselves) decides it even when it leaves something else out."] },
        { kind: "prose", tone: "wrong", text: [
          "“Thousands of people answered, so the result must be right.”",
          "How many answered does not fix who answered. 50,000 votes in an online poll are 50,000 people who chose to vote. 1,000 people picked by chance tell you more."] }
      ] },
    { worked: "w-stadium" },
    { set: { items: ["p-vets", "p-sundays", "p-mayor", "p-sleep"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-houses", "q-office", "q-gym", "q-limits", "q-cats", "q-schooltax"], order: "shuffle", mix: { from: ["l1", "l2", "l3", "l4", "l5"], share: 0.3 } } }
  ],
  check: {
    items: ["k-skyway", "k-fittrack", "k-saturday", "k-lanes", "k-renters", "k-internet"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 5 } }, { slip: "doubted", max: 1 }]
  }
});
