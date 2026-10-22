// Stats, lesson 3 "A risk, before and after": the same question with fresh numbers, in two forms with the same headline: "{product} cuts the risk of a
// {noun} by {share}", over counts in two groups split by a coin toss. In one the counts drop by the share the headline gives; in the other they drop by
// half of it, so the headline makes the change twice as big. Both claim the same shares (a fifth, 40%, half). Invented pills. The words are the same in both: the learner has to size the change to see which.
// Every list of choices has two or four entries: the engine reads three numbers as a range (lesson standard 3.5).
(() => {
  const PRODUCTS = ["Brevan", "Orlex", "Tolmar", "Ferrox"];
  const NOUNS = ["stroke", "heart attack", "hip fracture", "blood clot"];
  const BA = "from __ in 1,000 to __ in 1,000";
  const LP = "Tap the sentence that gives the number for how common it was without it.";
  // a cut in words, for the headline ("by a quarter") and for the claim ("a quarter less likely")
  const SHARE = { 10: ["a tenth", "a tenth less likely"], 20: ["a fifth", "a fifth less likely"], 25: ["a quarter", "a quarter less likely"], 40: ["40%", "40% less likely"], 50: ["half", "half as likely"] };
  // the cut, by a word: the fair form claims the cut it counts; the over form counts half of the cut it claims. Both claim a fifth, 40% or half,
  // so no share word in the headline goes with one verdict (tests/stats-lessons-pure.mjs asserts it over many seeds)
  const CUTS = { fifth: 20, forty: 40, half: 50 };
  const claim = ["{product} makes a {noun} {likely}", [["People who take {product} have fewer {plural}", "heard-link"], ["{product} makes a {noun} {likely} for people who have already had one", "mixed-who"]]];
  const blocks = [{ kind: "article", form: "report", source: "{product} Study · Summary", headline: statsLine("h", "{product} cuts the risk of a {noun} by {shareText}"),
    lines: [
      statsLine("s1", "In a {years}-year study, {bText} of {grpText} people given a dummy pill had a {noun}, compared with {aText} of {grpText} people given {product}."),
      statsLine("s2", "A coin toss decided who got which pill, and no one knew.", { para: true })] }];
  const size = { prompt: "Dummy pill, then {product}: how many in every 1,000 people had a {noun} within {years} years?", frame: BA, answer: ["base", "after"],
    traps: [{ slip: "bare-count", value: ["b", "a"], then: "Those are counts out of {grpText} people, not out of 1,000." }, { slip: "swapped-order", value: ["after", "base"] }] };
  // the counts: base in 1,000 with the dummy pill, the real cut (a share of it), and the share the headline claims
  const counts = (pick, real, claimed) => {
    const base = pick("base"), grp = pick("grp"), after = base * (100 - real) / 100;
    return { plural: pick("noun") + "s", base, after, drop: base - after, a: after * grp / 1000, b: base * grp / 1000, aText: statsN(after * grp / 1000), bText: statsN(base * grp / 1000), grpText: statsN(grp),
      shareText: SHARE[claimed][0], likely: SHARE[claimed][1], realText: SHARE[real][0] };
  };
  // groups of 20,000 or 40,000 and a starting risk of 40 or more in 1,000: every cut either form counts is more than two standard errors, so
  // the gap is not luck (T2 "Too small a sample", T8 "Is the sample large enough?"; tests/stats-lessons-pure.mjs sweeps the seeds)
  const params = { product: PRODUCTS, noun: NOUNS, years: [3, 4, 5, 10], grp: [20000, 40000], base: [40, 60, 80, 100] };
  FC.gen("stats", [
    { ...statsSized({
        id: "g-risk-fair", strand: "size-risk", fit: "holds", line: "s1", linePrompt: LP, claim, blocks, size,
        deciding: ["h", "s1", "s2"],
        reason: ["{bText} of {grpText} is {base} in 1,000, and {aText} of {grpText} is {after} in 1,000: {drop} fewer in every 1,000, a cut of {shareText}, as the headline says. The coin toss means the pill made the difference."],
        need: "Nothing more is needed. The headline claims no more than the counts show." }),
      params: { ...params, cut: Object.keys(CUTS) },
      make: pick => counts(pick, CUTS[pick("cut")], CUTS[pick("cut")]) },
    { ...statsSized({
        id: "g-risk-over", strand: "size-risk", fit: "outruns", line: "s1", linePrompt: LP, claim, blocks, size,
        deciding: ["h", "s1"],
        reason: ["{bText} of {grpText} is {base} in 1,000, and {aText} of {grpText} is {after} in 1,000: a cut of {realText}, not {shareText}. The headline makes the change twice as big as the counts show."],
        need: "You would need a headline that gives what the study found: from {base} in 1,000 to {after} in 1,000 over {years} years." }),
      params: { ...params, cut: Object.keys(CUTS) },
      make: pick => counts(pick, CUTS[pick("cut")] / 2, CUTS[pick("cut")]) }
  ]);
})();
