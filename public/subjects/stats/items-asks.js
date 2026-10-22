// Stats: the two asks lessons 7 and 8 add between the standing ones (items-build.js), worded once here. Lesson 7 asks what else could explain it,
// from the question's own options (the other explanation in its own words, "nothing else: the groups were split by chance", or that the text does not
// say how the groups were formed); lesson 8 asks for the real change read off the chart's numbers, as a percent of where it started. Lesson 9 uses
// both forms of size (items-build.js and this file) wherever a claim gives a count, a risk, a test or a change. It makes plain data and registers
// nothing; it changes nothing items-build.js makes.

// the two options of the cause ask that are worded the same in every question, so neither can be told by its words. A split by chance leaves only
// luck, which a few hundred people and a clear gap make unlikely and a handful of people or a tiny gap do not (the margin of lesson 6)
const STATS_NOTHING_ELSE = "Only luck: the groups were split by chance";
const STATS_NOT_SAID = "Cannot say: the text does not tell how the groups were formed";
// other: [right, [[text, slip], ...]]. Slips: other-wrong (an explanation the text does not give), no-other (only luck, when something else could),
// saw-other (an explanation, when the groups were split by chance).
const statsOtherAsk = ([right, wrong]) => ({
  id: "other", kind: "choose", prompt: "Could anything else explain it?", shuffle: true,
  options: [{ id: "a", text: right, ok: true }, ...wrong.map(([text, slip], i) => ({ id: STATS_OPTION_IDS[i + 1], text, slip }))]
});
// the standing three with the cause ask before the verdict. spec adds `other`.
const statsCause = spec => statsItem({
  ...spec,
  asks: [statsClaim(spec.claim[0], spec.claim[1]), statsLineAsk(spec.line, spec.linePrompt), statsOtherAsk(spec.other), statsVerdictAsk(spec.fit)]
});

// ---- the real change of a chart, as a percent of where it started ----
// the size of the change, up or down: the box never says which way, so the direction is the learner's to read off the chart
const statsChange = (from, to) => Math.abs(to - from) / from * 100;
// the change the picture suggests when the bars or the line are read from the bottom of a chart whose axis does not start at zero
const statsLooksLike = (from, to, axisFrom) => Math.abs(to - from) / (from - axisFrom) * 100;
// A change read off the chart: spec.change = { prompt, from, to, frame?, traps? }. It opens once the line is answered, whatever was tapped: the
// numbers are on the chart even when no sentence gives them. spec: the item fields, `claim`, `line`, `change`.
function statsCharted(spec) {
  const c = spec.change, answer = statsChange(c.from, c.to);
  const size = { id: "size", kind: "number", prompt: c.prompt, frame: c.frame || "__%", answer, tol: { round: 1 }, traps: c.traps || [] };
  return statsItem({ ...spec, asks: [statsClaim(spec.claim[0], spec.claim[1]), statsLineAsk(spec.line, spec.linePrompt), size, statsVerdictAsk(spec.fit)] });
}
// the slips of a change, with the line that names each: the bars' height read for the numbers, the change left as a count, and the change taken from
// the far end
const statsChangeTraps = ({ from, to, axisFrom }) => [
  ...(axisFrom > 0 ? [{ slip: "read-height", value: Math.round(statsLooksLike(from, to, axisFrom)), then: `That is how big the change looks, because the scale starts at ${statsN(axisFrom)}. Work it out from the numbers on the scale.` }] : []),
  { slip: "raw-change", value: Math.abs(to - from), then: `That is the change itself. Divide it by where it started, ${statsN(from)}, and multiply by 100.` }
];

// ---- lesson 9, the whole item: one prompt for the line in every question, and the size typed in the form its lesson taught ----
const STATS_WHOLE_LINE = "Tap the sentence that gives the number it rests on.";
// a count against how many it is out of: { count, whole, prompt }
const statsWholeCount = ({ count, whole, prompt }) => ({ prompt, answer: statsRate(count, whole), traps: [
  { slip: "per-hundred", value: count / whole * 100, then: "That is out of 100. The question is how many in every 1,000." },
  { slip: "bare-count", value: count }] });
// a risk without and with: { before, after, prompt }
const statsWholeRisk = ({ before, after, prompt }) => ({ prompt, frame: "from __ in 1,000 to __ in 1,000", answer: [before, after], traps: [
  { slip: "kept-before", value: [before, before], then: "That is the starting number twice. The second blank is the number after." },
  { slip: "swapped-order", value: [after, before] }] });
// a test counted through 1,000: { p, sens, fpr, unit, prompt? }; a table that does not come to whole numbers stops the file
function statsWholeTest({ p, sens, fpr, unit }) {
  const found = p * sens / 100, flagged = (1000 - p) * fpr / 100;
  if (!Number.isInteger(found) || !Number.isInteger(flagged)) throw new Error(`a test table of ${p}, ${sens}, ${fpr} does not come to whole numbers`);
  return { prompt: `Picture 1,000 ${unit}. Of those that test positive, how many have it?`, frame: "__ of the __ who test positive have it", answer: [found, found + flagged], traps: [
    { slip: "only-true-yes", value: [found, found], then: "That leaves out the false alarms: the ones that do not have it but test positive anyway." },
    { slip: "all-yes-real", value: [found + flagged, found + flagged], then: "Not every positive is real. Some are false alarms." },
    { slip: "test-accuracy", value: [sens, 100], then: `${sens} of 100 is how many that have it the test finds, not how many of the positives are real.` }] };
}
// the whole item: the standing asks with the one line prompt, and a size (spec.size, from the builders above) or a change (spec.change) where one applies
const statsWhole = spec => spec.change
  ? statsCharted({ strand: "whole", linePrompt: STATS_WHOLE_LINE, ...spec })
  : spec.size ? statsSized({ strand: "whole", linePrompt: STATS_WHOLE_LINE, ...spec })
  : statsStanding({ strand: "whole", linePrompt: STATS_WHOLE_LINE, ...spec });
