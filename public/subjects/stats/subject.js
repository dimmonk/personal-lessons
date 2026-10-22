// Statistical Claims: subject record (lesson standard 3). Built to docs/subjects/stats/plan.md: nine parts in four units, every part with its lesson
// (lessons 0 to 9), and the optional if-then plan of lesson 9.
FC.subject('stats', {
  name: "Statistical Claims",
  field: "numbers",
  rev: 9,
  standard: 2,
  history: [
    { rev: 1, date: "2026-10-05",
      change: "First version under lesson standard 1: the whole key rewritten in plain words. The first question gains a fifth answer for a claim where nothing goes wrong, which has its own branch for the four sound kinds of claim; every branch asks one question; a claim of cause with nothing to compare it with moves to the cause branch. All six units are rebuilt to it, and 23 specimens run the whole key, clean first, with a sound claim for each of the four kinds that hold." },
    { rev: 2, date: "2026-10-05",
      change: "Plain words: the lesson machinery's own names (\"key\", \"route\" and so on) replaced with plain ones." },
    { rev: 3, date: "2026-10-05",
      change: "American English: US words and spelling." },
    { rev: 4, date: "2026-10-07",
      change: "Plain, concrete writing: the key, the subject notes and the whole stories rewritten in plain words, with plain short names and shorter definitions." },
    { rev: 5, date: "2026-10-10",
      change: "Rebuilt for the practice engine (lesson standard 26, standard 2): the old key, units and stories are gone. The record now holds the end result and the parts from the design record; lessons are added one at a time." },
    { rev: 6, date: "2026-10-11",
      change: "Step 5, articles and charts: the record holds what lesson 1 needs (the three answers, the five kinds of claim, the nine common slips, how a claim is sorted, and the one topic that comes back in the review), and lesson 1, Find the claim and its number, is added as the pilot." },
    { rev: 7, date: "2026-10-20", change: "Placed on a field of the library (numbers), one of the shelves Field, Subject, Unit, Lesson." },
    { rev: 8, date: "2026-10-22", change: "Rewritten to the plan built from the field's own research (docs/research/stats.md): nine parts in four units, the five-kind claim list replaced by each question's own wording, slips for the size and the claim, a strand for each lesson. Lessons 0 to 5 built (the baseline, the claim, the size of a count, a risk, a test, the comparison), then fixed after their first reviews: one way to reach each verdict, and no answer given away by a word, a form or a place." },
    { rev: 9, date: "2026-10-22", change: "Lessons 6 to 9 built (who was counted, what else could explain it, the chart's numbers, the whole item with a second check four weeks on), and the subject is complete: slips for a change read off a chart, and the optional if-then plan in the subject's own words." }
  ],
  endResult: "When a headline and its article, a chart, an ad or a post on your phone is about to make you believe, share or act on a number, you can say whether the number shows what it is used to claim, point to the line that decides it (or say what is missing), and say how big it really is in plain counts, such as from 3 in 1,000 to 2 in 1,000 over ten years.",
  complete: true,
  parts: [
    { id: "A", title: "What it claims, and the number it rests on" },
    { id: "B", title: "How big it is: out of how many" },
    { id: "C", title: "A risk, before and after" },
    { id: "D", title: "A test says yes" },
    { id: "E", title: "Compared with what" },
    { id: "F", title: "Who was counted, and how" },
    { id: "G", title: "Could anything else explain it?" },
    { id: "H", title: "Read the chart’s numbers" },
    { id: "I", title: "The whole claim, unprompted" }
  ],
  units: [
    { id: "size", title: "The claim and its size", parts: ["A", "B", "C", "D"] },
    { id: "fair", title: "Is the comparison fair", parts: ["E", "F"] },
    { id: "cause", title: "Cause", parts: ["G"] },
    { id: "whole", title: "Charts and the whole picture", parts: ["H", "I"] }
  ],
  lists: {
    verdict: [
      { id: "holds", text: "Holds up" },
      { id: "not-shown", text: "Does not show it" },
      { id: "unclear", text: "Cannot tell from this" }
    ],
    slip: [
      { id: "doubted", text: "turned down a claim that holds up" },
      { id: "believed", text: "believed the claim" },
      { id: "trusted-gap", text: "said a claim holds up when the text leaves out what you would need" },
      { id: "hedged", text: "said it cannot be told when the text shows what is wrong" },
      { id: "overreached", text: "called a claim wrong when the text does not say enough to tell" },
      { id: "heard-cause", text: "heard a claim that two things went together as one that makes something happen" },
      { id: "heard-link", text: "heard a claim that one thing makes another happen as only going together" },
      { id: "mixed-who", text: "took the claim to be about other people or things than it names" },
      { id: "mixed-claim", text: "took the claim to be something other than what it says" },
      { id: "flipped", text: "divided the wrong way round" },
      { id: "swapped-order", text: "put the new number where the starting number goes" },
      { id: "per-hundred", text: "gave it out of 100 people, not out of 1,000" },
      { id: "bare-count", text: "gave the count, not how many it is out of" },
      { id: "whole-time", text: "gave it for the whole time, not for one year" },
      { id: "points-as-count", text: "took percentage points for the number of people" },
      { id: "percent-as-people", text: "took the percent for the number of people, not for the change" },
      { id: "kept-before", text: "gave the starting number again as the new one" },
      { id: "test-accuracy", text: "gave how accurate the test is, not how many of the positives are real" },
      { id: "only-true-yes", text: "counted only the people who have it, and left out the false alarms" },
      { id: "all-yes-real", text: "took every positive result to be real" },
      { id: "other-wrong", text: "named an explanation that is not the one that breaks it" },
      { id: "no-other", text: "said nothing else could explain it when something could" },
      { id: "saw-other", text: "found another explanation in a fair test" },
      { id: "read-height", text: "went by how tall the bars look, not by the numbers" },
      { id: "drew-start", text: "took the left end of the line for the usual level" },
      { id: "from-low", text: "measured from a low point, not from a usual year" },
      { id: "raw-change", text: "gave the change itself, not the change as a percent of where it started" }
    ]
  },
  facets: {
    fit: { name: "What the text shows", values: [
      { id: "holds", text: "claims that hold up" },
      { id: "outruns", text: "claims the text does not show" },
      { id: "unclear", text: "claims that cannot be told" }
    ] }
  },
  mix: [{ facet: "fit", value: "holds", min: 1 }, { facet: "fit", value: "unclear", min: 1 }],
  danger: { slip: "believed", facet: "fit", risky: "outruns", real: "holds" },
  strands: [
    { id: "claim-number", title: "What it claims, and the number it rests on" },
    { id: "size-count", title: "How big a count is" },
    { id: "size-risk", title: "A risk, before and after" },
    { id: "size-test", title: "A test says yes" },
    { id: "compare", title: "Compared with what" },
    { id: "counted", title: "Who was counted, and how" },
    { id: "cause", title: "Could anything else explain it?" },
    { id: "chart", title: "The chart’s numbers" },
    { id: "whole", title: "The whole claim" }
  ],
  own: {
    plan: { into: "plan", fields: [
      { id: "cue", label: "When this happens", type: "text", hint: "a post with a number makes me want to share it" },
      { id: "then", label: "Then I will", type: "text", hint: "find the sentence with its number and ask what it is compared with" }],
      words: { title: "One plan, for when a number is about to move you",
        how: "Write one plan in your own words. Start from the moment: a headline, a chart or a post with a number that makes you want to believe it, share it or act on it. Then say what you will do.",
        saved: "Your plan is saved. You will see it again at the start of this subject’s weekly review.",
        before: "This is the plan you wrote. Use it on the next claims." } }
  },
  readingShare: 0.4
});
