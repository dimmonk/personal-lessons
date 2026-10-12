// Stats: the one way a question of part A is put together (lesson standard 26.1). Every question is a headline, post, ad or report as it arrives
// on a phone, and three answers in one order: what it claims (a kind), the sentence that gives the number it rests on (or "Not given"), and
// whether the text shows what it claims. The helper writes the three asks, so the words of the asks and the slips they name are the same in
// every question; what differs is the thing itself, and the lines that decide it. It makes plain data and registers nothing.
const STATS_KIND_SLIPS = { cause: "took-cause", compare: "took-compare", size: "took-size", forecast: "took-forecast", most: "took-most" };
// a wrong verdict names what went wrong: a claim that holds, turned down; a claim the text does not show, believed (or hedged on); a claim
// that cannot be judged, believed or called wrong
const STATS_VERDICT = {
  holds: { right: "holds", slips: { "not-shown": "doubted", unclear: "doubted" } },
  outruns: { right: "not-shown", slips: { holds: "believed", unclear: "hedged" } },
  unclear: { right: "unclear", slips: { holds: "believed", "not-shown": "overreached" } }
};
const statsLine = (id, text, extra = {}) => ({ id, text, ...extra });

// spec: { id, fit, kind, line (a line id, or null when no number is given), blocks, deciding, reason, need, steps?, figure?, redraw? }
function statsItem(spec) {
  const verdict = STATS_VERDICT[spec.fit];
  return {
    id: spec.id, strand: "claim-number", facets: { fit: spec.fit },
    blocks: spec.blocks,
    asks: [
      { id: "kind", kind: "choose", prompt: "What is this claiming?", from: "claim", right: spec.kind,
        slips: Object.fromEntries(Object.entries(STATS_KIND_SLIPS).filter(([kind]) => kind !== spec.kind)) },
      { id: "line", kind: "tap", prompt: "Tap the sentence in the text, not the headline, that gives the number it rests on.", none: "Not given", right: spec.line === null ? "none" : [spec.line] },
      { id: "verdict", kind: "choose", prompt: "Does the text show what it claims?", from: "verdict", right: verdict.right, slips: verdict.slips }
    ],
    ...(spec.steps ? { steps: spec.steps } : {}),
    deciding: spec.deciding, reason: spec.reason, need: spec.need,
    ...(spec.figure ? { figure: spec.figure } : {}), ...(spec.redraw ? { redraw: spec.redraw } : {})
  };
}
