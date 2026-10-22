// Stats: the one way a question is put together (lesson standard 3). Every question is a headline, post, ad or report as it arrives on a phone
// (or a chart). The standing asks come in one order and are worded once here, so their words and the slips they name are the same in every
// lesson: what it claims (the question's own plain wordings, which differ on what readers mishear: makes-happen against went-together, and whom
// it is about), the sentence that gives the number it rests on (or "Not given"), and whether the text shows what it claims. A lesson adds its
// own ask between them (a size typed, a test counted, the other explanation). It makes plain data and registers nothing.

// a wrong verdict names what went wrong: a claim that holds, turned down; a claim the text does not show, believed (or hedged on); a claim
// that cannot be judged, trusted or called wrong (the failure, "believed", sits only on claims the text does not show)
const STATS_VERDICT = {
  holds: { right: "holds", slips: { "not-shown": "doubted", unclear: "doubted" } },
  outruns: { right: "not-shown", slips: { holds: "believed", unclear: "hedged" } },
  unclear: { right: "unclear", slips: { holds: "trusted-gap", "not-shown": "overreached" } }
};
const statsLine = (id, text, extra = {}) => ({ id, text, ...extra });
const STATS_OPTION_IDS = "abcd";

// what it claims: the right wording first (the order is shuffled by the question's seed), then wordings that differ from it on one thing, each
// with the slip it stands for: [text, slip]. Slips: heard-cause, heard-link, mixed-who, mixed-claim.
const statsClaim = (right, wrong) => ({
  id: "claim", kind: "choose", prompt: "What is this claiming?", shuffle: true,
  options: [{ id: "a", text: right, ok: true }, ...wrong.map(([text, slip], i) => ({ id: STATS_OPTION_IDS[i + 1], text, slip }))]
});
// the sentence the number rests on, or "Not given" (line: null). `in` names the article when the question has more than one block with lines.
const statsLineAsk = (line, prompt, where = {}) => ({
  id: "line", kind: "tap", prompt: prompt || "Tap the sentence that gives the number it rests on.", none: "Not given", right: line === null ? "none" : [line], ...where
});
const statsVerdictAsk = (fit, prompt = "Does the text show what it claims?") => ({
  id: "verdict", kind: "choose", prompt, from: "verdict", right: STATS_VERDICT[fit].right, slips: STATS_VERDICT[fit].slips
});

// spec: { id, strand, fit, blocks, asks, steps?, deciding, reason, need, figure?, redraw?, has? }
function statsItem(spec) {
  return {
    id: spec.id, strand: spec.strand, facets: { fit: spec.fit },
    blocks: spec.blocks, asks: spec.asks,
    ...(spec.steps ? { steps: spec.steps } : {}),
    deciding: spec.deciding, reason: spec.reason, need: spec.need,
    ...(spec.figure ? { figure: spec.figure } : {}), ...(spec.redraw ? { redraw: spec.redraw } : {})
  };
}
// the standing three: what it claims, the line, the verdict. spec adds `claim: [right, wrong[]]` and `line`.
const statsStanding = spec => statsItem({
  ...spec,
  asks: [statsClaim(spec.claim[0], spec.claim[1]), statsLineAsk(spec.line, spec.linePrompt), statsVerdictAsk(spec.fit)]
});

// ---- the sizing lessons (2 to 4): numbers are written once and the words and the answers are made from them ----
const statsN = x => x.toLocaleString("en-US");                      // 1200 -> "1,200"
const statsRate = (count, whole) => count / whole * 1000;           // so many in 1,000
// the sentence of the text that holds the numbers you need to size it, or "Not given"
const STATS_SIZE_LINE = "Tap the sentence with the numbers you need to size it.";
// A typed size: spec.size = { prompt, answer, frame?, tol?, traps? }; it opens once a sentence has been tapped (a claim that gives nothing to size
// has "Not given" tapped and goes straight to the verdict). spec: the item fields, `claim: [right, wrong[]]`, `line`, `size` (or null).
function statsSized(spec) {
  const lineIds = spec.blocks.find(b => b.kind === "article").lines.map(l => l.id);
  const size = spec.size ? [{
    id: "size", kind: "number", prompt: spec.size.prompt, frame: spec.size.frame || "__ in 1,000", answer: spec.size.answer,
    tol: spec.size.tol || { round: 1 }, traps: spec.size.traps, when: { ask: "line", is: lineIds }
  }] : [];
  return statsItem({ ...spec, asks: [statsClaim(spec.claim[0], spec.claim[1]), statsLineAsk(spec.line, spec.linePrompt || STATS_SIZE_LINE), ...size, statsVerdictAsk(spec.fit)] });
}
