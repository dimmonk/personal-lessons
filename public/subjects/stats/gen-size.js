// Stats, lesson 2 "How big it is: out of how many": the same question with fresh numbers, in two forms that read alike on the phone. In one the count
// is two or three times the usual for a town that size; in the other it is the usual or below it. Invented towns. The headline is drawn from the
// same three for both forms, plain and strong alike, so the learner has to size the count to see which.
(() => {
  const TOWNS = ["Oakmont", "Brightwater", "Kestrel Bay", "Northfield", "Redhill", "Stone Harbor"];
  const THINGS = ["the flu", "strep throat", "pink eye", "stomach bugs"];
  // the headlines, by a word (never three numbers: the engine reads three numbers as a range)
  const HEADS = { plain: "More people catching {thing} in {town}", soar: "Cases of {thing} soar in {town}", hard: "{town} hit hard by {thing} this month" };
  const usualNote = "That is the usual level, not this month’s count.";
  const blocks = [{ kind: "article", form: "news", source: "{town} Courier · Health",
    headline: statsLine("h", "{headText}"),
    lines: [
      statsLine("s1", "The county health office counted {countText} people with {thing} in {town} this month, in a town of about {popText} people."),
      statsLine("s2", "In a usual month, {town} has about {usual} people with {thing} in every 1,000, the county says.", { note: usualNote }),
      statsLine("s3", "Residents can book a checkup at the town clinic.", { para: true })] }];
  const claim = ["More people in {town} are catching {thing} than usual", [["More people across the whole county are catching {thing} than usual", "mixed-who"], ["People in {town} catch {thing} more easily than they used to", "mixed-claim"]]];
  const size = { prompt: "About how many people in every 1,000 had {thing} this month?", answer: "rate",
    traps: [{ slip: "per-hundred", value: "rateH", then: "That is out of 100 people. The question is how many in every 1,000." }, { slip: "bare-count", value: "count" }] };
  const made = (pick, rate, usual) => {
    const popK = pick("popK"), count = rate * popK, town = pick("town"), thing = pick("thing");
    return { rate, usual, count, rateH: rate / 10, countText: statsN(count), popText: statsN(popK * 1000), headText: HEADS[pick("head")].replace("{thing}", thing).replace("{town}", town) };
  };
  const times = { 2: "twice the usual", 3: "three times the usual" };
  FC.gen("stats", [
    { ...statsSized({
        id: "g-count-over", strand: "size-count", fit: "holds", line: "s1", claim, size, blocks,
        deciding: ["h", "s1", "s2"],
        reason: ["{countText} people with {thing}, out of about {popText}, is {rate} in every 1,000. The usual is {usual} in every 1,000, so this month is {times}, more than usual as the headline says."],
        need: "Nothing more is needed for the size. To say why, you would need more than these counts, and the headline does not say why." }),
      params: { town: TOWNS, thing: THINGS, head: Object.keys(HEADS), popK: [100, 900, 100], usual: [2, 6, 1], mult: [2, 3] },
      make: pick => ({ ...made(pick, pick("usual") * pick("mult"), pick("usual")), times: times[pick("mult")] }) },
    { ...statsSized({
        id: "g-count-under", strand: "size-count", fit: "outruns", line: "s1", claim, size, blocks,
        deciding: ["h", "s1", "s2"],
        reason: ["{countText} people with {thing}, out of about {popText}, is {rate} in every 1,000. The usual is {usual} in every 1,000, so this month is {cmp}, not more than usual."],
        need: "You would need a count above the usual level for a town this size." }),
      params: { town: TOWNS, thing: THINGS, head: Object.keys(HEADS), popK: [100, 900, 100], rate: [2, 8, 2], mult: [1, 2] },
      make: pick => ({ ...made(pick, pick("rate"), pick("rate") * pick("mult")), cmp: pick("mult") === 1 ? "the same as the usual" : "below the usual" }) }
  ]);
})();
