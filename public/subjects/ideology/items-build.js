// Ideology: the one way a question about a label is put together (lesson standard 26.1, 26.1.2). Every question is a label pinned on words, as a
// post, with the rule it is judged by in a panel, and three asks in one order: do the words earn the label (earned, not earned, too little to
// tell); when not earned, which of the subject's names do they earn instead; and the sentence that decides it, or that none does. The helper
// writes the three asks, so the words of the asks and the slips they name are the same in every question; what differs is the post, the lines
// that decide it, and what each need of the label finds in them. It makes plain data and registers nothing.
//
// spec: { id, side, fit: 'earned' | 'unearned' | 'thin', rule (the label's rule), word (the label as the asks name it), name (the name that fits
//   instead, for an unearned label), post: { source, by, text }, lines, tap (a line id, or 'none'), has, deciding, reason, need?, steps? }
const IDEO_STRAND = "economy-labels";
const IDEO_NAMES = ["market", "socdem", "socialist", "communist", "none"];
// a wrong verdict names what went wrong: a label the words earn, turned down; a label they do not earn (or cannot show), believed; words too
// thin to tell, called not earned
const IDEO_VERDICT = {
  earned: { right: "earned", slips: { "not-earned": "doubted", "too-little": "hedged" } },
  unearned: { right: "not-earned", slips: { earned: "believed", "too-little": "hedged" } },
  thin: { right: "too-little", slips: { earned: "believed", "not-earned": "overreached" } }
};
const SPEAKER_NOTE = "That says who said it, not what it would do.";
// a line of the quoted words; a line may say why it is not the one (note) and the slip of tapping it
const ideoLine = (id, text, note, slip) => ({ id, text, ...(note ? { note } : {}), ...(slip ? { slip } : {}) });
// the tone or the promise around a plan: tempting, and not what the plan does
const ideoTone = (id, text, note) => ideoLine(id, text, note, "took-tone");
// who said the words: small print under them
const ideoSpeaker = (id, text) => ({ ...ideoLine(id, text, SPEAKER_NOTE, "took-speaker"), fine: true });

function ideoNameAsk(spec) {
  // the name the words earn: the label's own when it is earned, one of the others when it is not, none of the four when they fit none
  const right = spec.fit === "earned" ? spec.rule : spec.fit === "thin" ? "none" : spec.name;
  const wrong = IDEO_NAMES.filter(id => id !== right);
  return { id: "name", kind: "choose", prompt: "Which name do the words earn instead?", from: "name", right, when: { ask: "verdict", is: ["not-earned"] },
    slips: Object.fromEntries(wrong.map(id => [id, right === "none" ? "forced-name" : id === "none" ? "missed-name" : "wrong-name"])) };
}

function ideoItem(spec) {
  const verdict = IDEO_VERDICT[spec.fit];
  return {
    id: spec.id, strand: IDEO_STRAND, facets: { side: spec.side, fit: spec.fit },
    blocks: [
      { kind: "article", form: "post", source: spec.post.source, label: { text: spec.post.text, by: spec.post.by, side: spec.side }, lines: spec.lines },
      { kind: "panel", rules: [spec.rule] }
    ],
    asks: [
      { id: "verdict", kind: "choose", prompt: `Do the words earn the label “${spec.word}”?`, from: "verdict", right: verdict.right, slips: verdict.slips },
      ideoNameAsk(spec),
      { id: "words", kind: "tap", prompt: "Tap the sentence that decides it.", none: "Nothing here decides it", right: spec.tap === "none" ? "none" : [spec.tap] }
    ],
    ...(spec.steps ? { steps: spec.steps } : {}),
    has: spec.has, deciding: spec.deciding, reason: spec.reason,
    ...(spec.need ? { need: spec.need } : {})
  };
}
