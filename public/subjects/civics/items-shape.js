// Civics: the one way a news story is put to the learner (lesson standard 3.5). The story is an invented news report (a made-up town, paper and group; no real
// event), set as a news article. The questions asked of it are the ones the subject teaches, in this order: which level of government acted and what it did
// (lesson 4), whether it was theirs to do (5), what could stop it (6), who is telling you (7), and all of them (8). An item asks only the questions its
// lesson has taught. Each wrong answer carries a line that says what the story shows instead, and the known mistakes carry a slip (the president for a
// decision of a state or a city, the parts of government mixed up, a court where the story names none, a power not asked for). It makes plain data and
// registers nothing.
//
// spec: { id, lvl: federal|state|local, br: writes|carries|judges, src?, head, lines: [Text], who, did, key (the line that names who acted),
//         v?: theirs|not|unsettled|court, vkey?, vwhy?, vstep? (the working, where it should not repeat vwhy), vthen?: { verdictId: Text }, fact?: interview question,
//         many? (the one who acted is plural), lnotes?: { lineText: Text } (why a line tapped is not the one that decides),
//         stop?: veto|courts|change|higher|voters|amend, skey?, swhy?, sthen?: { stopId: Text },
//         courtNamed? (the story's court has already ruled), check?: check|take, seen?, cwhy?, why? (the reason, when the plain one will not do), worked?: true (the steps are shown) }
// A spec's own `vthen` or `sthen` line replaces the plain one for that wrong pick, where the story itself says why (a lawsuit only threatened, a court that has ruled).
//
// The one rule for each question, stated once here and on the lesson screens that teach it:
//   theirs to do?  Congress: the powers the Constitution lists. A state: what was not given to the federal government, never a power only for the federal
//                  government. A city or county: only what its state hands down. The president or an agency: the powers the Constitution gives the
//                  president and running the executive branch's own offices are theirs; reaching outside the branch needs a law of Congress (a law that
//                  allows it: theirs; Congress silent: not settled; a law against it: not theirs); a power of the states is never theirs. "Not settled" is
//                  only for the president or an agency. "In court" when a court has the lawsuit now. A higher level's law wins: federal over state and local,
//                  state over local.
//   who can stop it?  The check the story shows at work: under way or set to happen. One the story names only as far off or ruled out is not at work.
//   who is telling you?  CIVICS_SOURCE_RULE.
const CIVICS_SOURCE_RULE = ["Take a story as it stands only when both hold: you have already checked who is behind the source, or it is the original record you went to yourself, and what it says is ordinary. If you cannot place the source, or the story is alarming or sudden, check before you rely on it: leave the page and see what others say.",
  "Alarming or sudden means a big change to many people’s lives, money or rights, out of nowhere: every bank account frozen, all cash ended. The usual work of government is ordinary, even when it starts soon: a vote, a new fee, a road closed, new benches in a park."];
const CIVICS_LEVEL_IS = {
  federal: "part of the federal government, which works for the whole country",
  state: "part of a state government, which works for one state",
  local: "part of a local government, which works for one city, town or county"
};
const CIVICS_LEVEL_WORD = { federal: "federal", state: "state", local: "local" };
const CIVICS_BRANCH_DOES = { writes: "writing a rule or a law", carries: "carrying out a rule or a law", judges: "judging a dispute" };
const CIVICS_BRANCH_WORD = { writes: "writing", carries: "carrying out", judges: "judging" };
const CIVICS_NO_CASE = "No lawsuit about it is before a court now.";
const CIVICS_VERDICT_THEN = {
  theirs: { not: "The power is theirs, and nothing in the story stands against it.", unsettled: "The story shows the power they act on, so nothing is left open.", court: CIVICS_NO_CASE },
  not: { theirs: "Something stands against it: a law, or a power that belongs to another level.", unsettled: "The story shows what stands against it, so nothing is left open.", court: CIVICS_NO_CASE },
  unsettled: { theirs: "The order reaches outside the executive branch, and no law of Congress allows it.", not: "No law of Congress forbids it, and the power does not belong to the states.", court: CIVICS_NO_CASE },
  court: { theirs: "A court has the lawsuit now and has not ruled, so no one can say yet.", not: "A court has the lawsuit now and has not ruled, so no one can say yet.", unsettled: "A court has the lawsuit now, so the court will settle it." }
};
const CIVICS_STOP_THEN = {
  veto: "No one in the story is about to refuse to sign a bill.",
  courts: "No lawsuit about it is before a court now.",
  change: "No one in the story is at work on a new law now.",
  higher: "No higher level’s law is running into it in the story.",
  voters: "No election in the story is coming where this is the question.",
  amend: "No one in the story is trying to change the Constitution."
};
const CIVICS_SOURCE_THEN = {
  take: "Taking it as it stands needs both: a source you have already checked (or the original record), and an ordinary story. One of them is missing here.",
  check: "You have checked this source before, or it is the original record, and the story is ordinary. You can take it as it stands, and look again if something in it surprises you."
};
const civicsIs = s => s.many ? "are" : "is";   // `many`: the one who acted is plural ("Brookside firefighters")
const civicsCap = text => text.charAt(0).toUpperCase() + text.slice(1);
const civicsOthers = (list, right) => list.filter(id => id !== right);

// the news article: where it comes from, a headline, and the lines of the story (l1, l2, ...), which can be tapped or marked
function civicsArticle(s) {
  return { kind: "article", form: "news", id: "story", source: s.src, headline: { id: "head", text: s.head },
    lines: s.lines.map((text, i) => ({ id: "l" + (i + 1), text, ...(s.lnotes && s.lnotes[text] ? { note: s.lnotes[text] } : {}) })) };
}
const civicsLine = n => "l" + n;
// the papers a lesson's stories come from, handed out by level in turn, each level starting at a different paper, so every paper reports on every level
// and the paper's name says nothing about which level acted (a story that names its own source keeps it)
function civicsPress(stories, papers) {
  const start = { federal: 0, state: 2, local: 4 }, seen = { federal: 0, state: 0, local: 0 };
  return stories.map(s => s.src ? s : { ...s, src: papers[(start[s.lvl] + seen[s.lvl]++) % papers.length] });
}
// the choices, worded once in the subject's lists, with a line for each wrong pick
function civicsLevelAsk(s) {
  const then = Object.fromEntries(civicsOthers(["federal", "state", "local"], s.lvl).map(id => [id, `${civicsCap(s.who)} ${civicsIs(s)} ${CIVICS_LEVEL_IS[s.lvl]}.`]));
  const slips = s.lvl === "federal" ? {} : { federal: "president-default" };
  return { id: "level", kind: "choose", prompt: "Which level of government acted?", from: "level", right: s.lvl, then, ...(Object.keys(slips).length ? { slips } : {}) };
}
function civicsBranchAsk(s) {
  const others = civicsOthers(["writes", "carries", "judges"], s.br);
  const then = Object.fromEntries(others.map(id => [id, `${civicsCap(s.who)} ${s.did}. That is ${CIVICS_BRANCH_DOES[s.br]}, not ${CIVICS_BRANCH_DOES[id]}.`]));
  return { id: "branch", kind: "choose", prompt: "What did the one who acted do?", from: "branch", right: s.br, then, slips: Object.fromEntries(others.map(id => [id, "branch-mixup"])) };
}
function civicsVerdictAsk(s) {
  const others = civicsOthers(["theirs", "not", "unsettled", "court"], s.v);
  const slips = {};
  others.forEach(id => { if (id === "court" && !s.courtNamed) slips.court = "court-default"; if (id === "theirs" && (s.v === "not" || s.v === "unsettled")) slips.theirs = "no-power-check"; });
  // a story whose court has already ruled: "in court" is wrong because the ruling is made, not because no court is named
  const plain = id => id === "court" && s.courtNamed ? "The court has already ruled, so nothing is waiting on a court." : CIVICS_VERDICT_THEN[s.v][id];
  const then = Object.fromEntries(others.map(id => [id, (s.vthen && s.vthen[id]) || plain(id)]));
  return { id: "verdict", kind: "choose", prompt: "Was it theirs to do?", from: "verdict", right: s.v, then,
    ...(Object.keys(slips).length ? { slips } : {}) };
}
const civicsTapAsk = s => ({ id: "line", kind: "tap", prompt: "Tap the line that decides it.", in: "story", right: [civicsLine(s.vkey)] });
function civicsStopAsk(s) {
  const others = civicsOthers(["veto", "courts", "change", "higher", "voters", "amend"], s.stop);
  const plain = id => id === "courts" && s.courtNamed ? "The court has already ruled. The story shows what could undo the ruling." : CIVICS_STOP_THEN[id];
  return { id: "stop", kind: "choose", prompt: "Which check does the story show at work?", from: "stop", right: s.stop,
    then: Object.fromEntries(others.map(id => [id, (s.sthen && s.sthen[id]) || plain(id)])),
    ...(s.stop !== "courts" && s.stop !== "amend" ? { slips: { courts: "court-default" } } : {}) };
}
function civicsSourceAsk(s) {
  const wrong = s.check === "check" ? "take" : "check";
  return { id: "source", kind: "choose", prompt: "Take it as it stands, or check before you rely on it?", from: "source", right: s.check, then: { [wrong]: (s.cthen || CIVICS_SOURCE_THEN[wrong]) },
    ...(wrong === "take" ? { slips: { take: "look-not-source" } } : {}) };
}
// where the story reached you (lessons 7 and 8): shown under the story
const civicsSeen = s => ({ kind: "prose", text: s.seen });

// the working of a story, one short step for each question it asks, shown in the feedback of a worked story
function civicsSteps(s, kinds) {
  const all = {
    who: { id: "who", does: "Find who acted", working: `The story says ${s.who} ${s.did}.` },
    level: { id: "level", does: "Name the level", working: `${civicsCap(s.who)} ${civicsIs(s)} ${CIVICS_LEVEL_IS[s.lvl]}.`, ask: "level" },
    branch: { id: "branch", does: "Name what they did", working: `That is ${CIVICS_BRANCH_DOES[s.br]}.`, ask: "branch" },
    verdict: { id: "verdict", does: "Find what lets them", working: s.vstep || s.vwhy, ask: "verdict" },
    stop: { id: "stop", does: "Find the check at work", working: s.swhy, ask: "stop" },
    source: { id: "source", does: "Find who is telling you", working: s.cwhy, ask: "source" }
  };
  return kinds.map(k => all[k]);
}

// one story as a question, by what its lesson asks: "level", "theirs", "stop" or "whole"
// where the deciding line stands varies from story to story: `lead` puts a scene-setting line first (every line number moves down one), `swap` puts the
// third line before the second (the line numbers 2 and 3 trade places)
function civicsPlaced(s) {
  const move = (n, f) => n === undefined ? n : f(n);
  const keys = (x, f) => ({ ...x, key: move(x.key, f), vkey: move(x.vkey, f), skey: move(x.skey, f) });
  return s.lead ? keys({ ...s, lines: [s.lead, ...s.lines] }, n => n + 1)
    : s.swap ? keys({ ...s, lines: [s.lines[0], s.lines[2], s.lines[1], ...s.lines.slice(3)] }, n => n === 2 ? 3 : n === 3 ? 2 : n) : s;
}
function civicsStory(spec, kind) {
  const s = civicsPlaced(spec);
  const base = { id: s.id, strand: kind, facets: { level: s.lvl }, blocks: [civicsArticle(s)] };
  const auto = `${civicsCap(s.who)} ${s.did}. That makes it ${CIVICS_LEVEL_WORD[s.lvl]} government, ${CIVICS_BRANCH_WORD[s.br]} a rule or a law.`;
  if (kind === "level") return { ...base, asks: [civicsLevelAsk(s), civicsBranchAsk(s)], deciding: [civicsLine(s.key)], reason: s.why || auto,
    ...(s.worked ? { steps: civicsSteps(s, ["who", "level", "branch"]) } : {}) };
  if (kind === "theirs") return { ...base, asks: [civicsVerdictAsk(s), civicsTapAsk(s)], deciding: [civicsLine(s.vkey)], reason: s.vwhy, ...(s.fact ? { fact: s.fact } : {}),
    ...(s.worked ? { steps: civicsSteps(s, ["who", "verdict"]) } : {}) };
  if (kind === "stop") return { ...base, asks: [civicsStopAsk(s)], deciding: [civicsLine(s.skey)], reason: s.swhy,
    ...(s.worked ? { steps: civicsSteps(s, ["who", "stop"]) } : {}) };
  const blocks = [civicsArticle(s), civicsSeen(s)];
  return { ...base, blocks, asks: [civicsLevelAsk(s), civicsBranchAsk(s), civicsVerdictAsk(s), civicsStopAsk(s), civicsSourceAsk(s)],
    deciding: [...new Set([civicsLine(s.key), civicsLine(s.vkey), civicsLine(s.skey)])], reason: s.why, ...(s.fact ? { fact: s.fact } : {}),
    steps: civicsSteps(s, ["who", "level", "branch", "verdict", "stop", "source"]) };
}

// Lesson 7: a page of search results about a source, the learner taps the one to open first. r: { id, situation, results: [{ text, ok?, note? }], why, worked? };
// every result but the right one is the source speaking for itself (under its own name, however official it looks), someone's telling of it, a paid result
// or an outside page that names no one behind it; each is its own paragraph and carries the slip of going there first. Where the right one stands is the data's.
function civicsResults(r) {
  const lines = r.results.map((x, i) => ({ id: "r" + (i + 1), text: x.text, para: true, ...(x.ok ? {} : { slip: "own-word" }), ...(x.note ? { note: x.note } : {}) }));
  const right = "r" + (r.results.findIndex(x => x.ok) + 1);
  return { id: r.id, strand: "source", facets: {}, blocks: [{ kind: "prose", text: r.situation }, { kind: "prose", id: "results", lines }],
    asks: [{ id: "open", kind: "tap", prompt: "Which one do you open first?", in: "results", right: [right] }], deciding: [right], reason: r.why,
    ...(r.worked ? { steps: r.steps } : {}) };
}
// Lesson 7: a story or a post, and where it reached you; take it as it stands, or check who is behind it first. r: { id, form, src, head?, lines, seen, check, why }
function civicsSourceItem(r) {
  const article = { kind: "article", form: r.form, id: "story", source: r.src, ...(r.head ? { headline: { id: "head", text: r.head } } : {}), lines: r.lines.map((text, i) => ({ id: "l" + (i + 1), text })) };
  return { id: r.id, strand: "source", facets: {}, blocks: [article, civicsSeen(r)], asks: [civicsSourceAsk(r)], reason: r.why };
}
