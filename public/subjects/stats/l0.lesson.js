// Stats, lesson 0: Before you start. The baseline: six claims as they arrive, from six areas of life, with nothing taught and nothing shown per
// question. It measures the start (its one line counts the claims believed that the text does not show) and is never taken again.
FC.lesson("stats", {
  id: "l0", part: null, role: "baseline", title: "Before you start", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version: six mixed claims, no teaching, nothing shown per question." }],
  why: "Six claims, the way they arrive on your phone. Answer each as you would if you met it today.",
  flow: [{ title: "How this goes", show: [{ kind: "prose", text: [
    "Six short claims: a headline, a post, an ad or a report. About six minutes.",
    "For each, you say what it claims, tap the sentence with the number it rests on (or Not given), and say whether the text shows it: it holds up, it does not show it (the text itself shows the claim goes too far), or you cannot tell from this (something you would need is not in the text).",
    "Nothing is marked as you go, and you will see your result at the end. Go with your first judgment; this only shows where you start."] }] }],
  check: { items: ["b-sleep", "b-club", "b-library", "b-breakins", "b-pool", "b-lozenge"], feedback: "at-end", order: "shuffle", pass: [{ slip: "believed", max: 0 }] }
});
