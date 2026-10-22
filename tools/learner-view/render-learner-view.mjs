// Writes a lesson as a learner meets it, generated from the data by the engine's own functions: docs/learner-view/<subject>-<lesson>.md.
// Read it as a newcomer (the cold read): every screen in order, every question with its options and the feedback each one gets, then the
// end check. Right answers are marked (right) so a reader can follow the feedback; the app never marks them before the answer.
// Run: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>]    (--fixture for the test subject, --stdout to print)
import { mkdir, writeFile } from 'node:fs/promises';
import { loadAll } from './load.mjs';

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const quote = lines => lines.map(l => `> ${l}`).join('\n');
const SAYWORDS = { redraw: 'The same chart, drawn from zero' };
// what has been described in full once in this lesson, so a lesson of many questions of one kind says it once
let SEEN = new Set();
// the regions of the map data, for the words about a map (set when a lesson is rendered)
let MAPS = {};
// the subject's generators, for the words about the flags of a group of places (set when a lesson is rendered)
let GENS = {};
// the app's own wording (SAY), for the blocks that print it (set when a lesson is rendered)
let SAYS = {};
// one tone of an example sound, in words: its note, when it starts, how long, and how it moves (in hundredths of a half-step off the note)

/* ---------- blocks ---------- */
const cellText = cell => String(cell);
// a part of a plan in words: a rectangle, a circle with its radius or the distance across, a right triangle with its sides; words written in place of a number are quoted
// (a side with words is never written as its number, as on the screen; a blank is "nothing written")
const said = (p, side, value, unit) => p.say && side in p.say ? (p.say[side].trim() ? `"${p.say[side].trim()}"` : 'nothing written') : `${Math.round(Number(value) * 100) / 100} ${unit}`;
const planPartWords = (p, unit) => p.shape === 'circle' ? `a circle, ${p.across ? 'the distance across' : 'the radius'} written ${said(p, 'r', p.across ? 2 * Number(p.r) : p.r, unit)}`
  : p.shape === 'triangle' ? `a right triangle, the right angle at the bottom left: flat side ${said(p, 'w', p.w, unit)}, upright side ${said(p, 'h', p.h, unit)}${p.say && p.say.slant ? `, the slant "${p.say.slant}"` : ', the slant not written'}`
  : `${said(p, 'w', p.w, unit)} by ${said(p, 'h', p.h, unit)}`;
const FIGURE_WORDS = {
  'rate-table': d => [`A table with two rows: ${[d.top, d.bottom].map(r => `${r.label}: ${r.cells.join(', ')}`).join(' / ')}.`],
  bar: d => [`A bar for the whole, "${d.whole}", cut into parts as wide as their percents: ${d.parts.map(p => `${p.label} ${p.pct}%`).join(', ')}.`],
  plan: d => [`A plan drawn to one scale, each side written in ${d.unit}: ${d.parts.map(p => `${planPartWords(p, d.unit)}${p.label ? ` (${p.label})` : ''}${p.cut ? ', cut out' : ''}`).join('; ')}.`],
  years: d => [`A table, year by year: ${d.columns.join(' | ')}; ${d.rows.map(r => r.join(' | ')).join('; ')}.`],
  people: d => [`${d.caption}: a row of 1,000 dots for each count, the first ones marked and read left to right, top to bottom: ${d.rows.map(r => `${r.label}, ${r.count} in 1,000`).join('; ')}.`]
};
const ARTICLE_NAMES = { news: 'A news story', post: 'A post', ad: 'An ad', report: 'A report summary' };
// the lines of an article as paragraphs (a line with `para` starts a new one), and the small print last
function articleLines(block, deciding) {
  const mark = seg => deciding.includes(seg.id) ? `**${seg.text}**` : seg.text;
  if (block.label) {
    // a label pinned on words: who posted, how they are known, their words, then the words they pinned it on, each line apart, who said them last
    return [`A post with a label pinned on words, from "${block.source}". Under it: "${block.label.by}". The commenter's words: **${block.label.text}** (the side the label is thrown from, ${block.label.side}, is kept for the results and not drawn). Then, in a box headed "The words it is pinned on", each line apart (the lines are what is tapped; the commenter's words are not):`, '',
      ...block.lines.filter(l => !l.fine).map(l => `> ${mark(l)}`), ...block.lines.filter(l => l.fine).map(l => `> (small print) ${mark(l)}`)];
  }
  const body = block.lines.filter(l => !l.fine).reduce((out, l, i) => i === 0 || l.para ? [...out, [l]] : [...out.slice(0, -1), [...out[out.length - 1], l]], []);
  return [`${ARTICLE_NAMES[block.form]}, from "${block.source}"${block.form === 'ad' ? ' (marked "Ad")' : block.form === 'report' ? ' (marked "Report summary")' : ''}:`, '',
    ...(block.headline ? [`> # ${mark(block.headline)}`, '>'] : []), ...body.map(p => `> ${p.map(mark).join(' ')}`),
    ...block.lines.filter(l => l.fine).map(l => `> (small print) ${mark(l)}`)];
}
function chartWords(block) {
  const y = block.y, cut = y.from > 0;
  return `A ${block.type === 'line' ? 'line chart' : 'bar chart'}, "${block.title}". The scale runs from ${y.from} to ${y.to}${y.unit ? `, in ${y.unit}` : ''}${cut ? ', and does not start at zero' : ', and starts at zero'}. `
    + `${block.series.map(s => `${s.name ? `${s.name}: ` : ''}${block.x.map((l, i) => `${l} ${s.values[i]}`).join(', ')}`).join('. ')}. ${block.labels ? 'The values are written on it. ' : ''}Source: ${block.source}.`;
}
// a map of the map data: north up, drawn with no names unless the block asks for them, with places lit; it can be pinched, dragged and zoomed with buttons
function mapWords(block) {
  const map = MAPS[block.region], name = id => map.places.find(p => p.id === id).name;
  const names = block.labels === true ? 'with the names of its places written on it (the one look at a labelled map)' : Array.isArray(block.labels) ? `with the names of ${block.labels.map(name).join(', ')} written on it` : 'with no names on it';
  const view = block.view ? `, opening on one part of it (zoom ${block.view[2]}, round the point ${block.view[0]} across and ${block.view[1]} down, of ${map.size[0]} by ${map.size[1]}), where the button for the whole map goes back to that part` : '';
  const pixels = block.labels ? ' Every name is 12 pixels tall on the screen at every zoom; a tiny country\'s name stands off its dot on a line to it.' : '';
  return `A map of ${map.name}, north up, ${names}${view}${(block.lit || []).length ? `. Lit: ${block.lit.map(name).join(', ')}` : ''}. The learner can pinch to zoom, drag to move it and use the buttons to zoom in, zoom out and show the whole map.${pixels}`;
}
// a flag in words: its emoji, or for a drawn flag (no emoji draws Kosovo's) what it is said to look like
const flagSaid = flag => (typeof flag === 'string' ? flag : flag.said);
// the flags of places of a group, each about 64 pixels wide on the screen, with the name beside each or none
function flagsWords(block) {
  const list = GENS[block.gen].places.list, said = block.places.map(id => list.find(p => p.id === id));
  return block.names ? `${said.length > 1 ? 'The flags, each' : 'The flag,'} about 64 pixels wide with its name beside it: ${said.map(p => `${flagSaid(p.flag)} ${p.name}`).join('; ')}.`
    : `A flag, about 64 pixels wide, with no name beside it: ${said.map(p => flagSaid(p.flag)).join(' ')}`;
}
const FORM_NAMES = { fees: 'fee sheet', paystub: 'pay stub', matchrule: 'match rule', beneficiary: 'beneficiary page', foreign: 'foreign account summary', table: 'plain table' };
const formName = form => { const name = FORM_NAMES[form] || form; return `${/^[aeiou]/i.test(name) ? 'An' : 'A'} ${name}`; };
// extra: { rules, panel } what a panel prints and whether it is drawn (a question without the help shows none)
function blockLines(block, deciding = [], refs = [], extra = {}) {
  if (block.kind === 'panel') {
    if (extra.panel === false) return [];
    const own = block.rules.length === 1 && extra.rules[block.rules[0]].heading;   // a checklist with a heading of its own
    return [`A panel, "${own || 'What the label needs'}":`, ...block.rules.flatMap(id => [...(own ? [] : [`- ${extra.rules[id].name}`]), ...extra.rules[id].needs.map((n, i) => `  ${i + 1}. ${n.text}`)])];
  }
  if (block.kind === 'message') return messageLines(block, deciding);
  if (block.kind === 'spoken') {
    const first = !SEEN.has('spoken'); SEEN.add('spoken');
    return [first ? `A question the phone reads aloud, never by itself: a button "Hear the question" (then "Hear it again") reads it with a voice on the phone when the learner taps, and once they have tapped the next question in the run is read when they tap Next. A phone with no voice of its own shows the words and says so. Its words: **${block.text}**${block.show === false ? ' (held back behind "Show the words")' : ''}`
      : `The question, read aloud as above: **${block.text}**${block.show === false ? ' (held back behind "Show the words")' : ''}`];
  }
  if (block.kind === 'document') {
    const tab = block.tab ? ` (a tab named "${block.tab}", one of a household's papers: one open at a time, the first at the start, and the one with a marked line after the answer)` : '';
    return [`${formName(block.form)}, "${block.title}"${tab}:`, '', ...(block.head ? [`> ${block.head.join('  |  ')}  (the column heads)`] : []),
      ...block.rows.map(r => `> ${r.cells.map(cellText).join('  |  ')}${deciding.includes(r.id) ? '  <- marked after the answer' : ''}`), ...(block.notes || []).map(n => `> (${n})`)];
  }
  if (block.kind === 'ref') {
    const ref = refs.find(r => r.id === block.ref);
    return [`A value looked up, never memorized: "${ref.text}": ${ref.value}. It prints "Looked up ${ref.asOf}" and "Source: ${ref.source}", says to check the source, and after a year says to look it up again.`];
  }
  if (block.kind === 'figure') return FIGURE_WORDS[block.type](block.data);
  if (block.kind === 'article') return articleLines(block, deciding);
  if (block.kind === 'chart') return [chartWords(block)];
  if (block.kind === 'map') return [mapWords(block)];
  if (block.kind === 'flags') return [flagsWords(block)];
  if (block.kind === 'tones') {
    return [`**${SAYS.tonesHeading}**`, '', ...paras(block.says), '', `Buttons, one for each sound; nothing sounds until one is tapped. A tap plays it (the line under them reads "${SAYS.tonesPlaying}"), a second tap stops it, and moving on stops it:`,
      ...block.examples.map(x => `- "${x.label}"`)];
  }
  if (block.kind === 'pair') {
    return ['| A | B |', '|---|---|', `| ${blockLines(block.a, deciding, refs, extra).join(' ')} | ${blockLines(block.b, deciding, refs, extra).join(' ')} |`, '', `Compare: ${paras(block.compare).join(' ')}`];
  }
  const text = block.lines ? [block.lines.map(s => deciding.includes(s.id) ? `**${s.text}**` : s.text).join(' ')] : paras(block.text);
  if (block.tone === 'wrong') return [`A wrong idea, marked wrong: ${text.slice(0, -1).join(' ') || text.join(' ')}`, ...(text.length > 1 ? [`The right line: ${text[text.length - 1]}`] : [])];
  return text;
}
// a message as it arrives: who it is from and when, then each line (a thread names whose line it is; the other person's at the left, yours at the right)
const MESSAGE_NAMES = { friend: 'A message from a friend about someone', thread: 'A text thread you are in', note: 'Your own note, written after an argument',
  sms: 'A text message', email: 'An email', popup: 'A pop-up on a screen', chat: 'A chat, with its history', call: 'An incoming call, the caller\'s words as a transcript', banner: 'A banner over another task' };
function messageLines(block, deciding) {
  const mark = seg => deciding.includes(seg.id) ? `**${seg.text}**` : seg.text;
  const who = seg => block.form === 'thread' || block.form === 'chat' ? (seg.me ? '(you, at the right) ' : `(${block.from}, at the left) `) : '';
  const subject = block.subject ? [`> Subject: **${block.subject}**`, '>'] : [];
  const link = !block.link ? [] : block.form === 'popup' ? [`> [a button: "${block.link}"]`] : [`> (the link in it, drawn as words and never one that can be followed: ${block.link})`];
  return [`${MESSAGE_NAMES[block.form]}: "${block.from}", ${block.detail}.`, '', ...subject, ...block.lines.map(l => `> ${who(l)}${mark(l)}`), ...link];
}
const blocksText = (blocks, deciding, refs, extra = {}) => blocks.flatMap(b => [...blockLines(b, deciding, refs, extra), '']).filter((l, i, all) => l !== '' || all[i - 1] !== '').join('\n');

/* ---------- a question ---------- */
const TOL_WORDS = tol => 'round' in tol ? `to the nearest ${tol.round}` : 'band' in tol ? `from ${tol.band[0]} to ${tol.band[1]} times the exact answer` : [...('abs' in tol ? [`within ${tol.abs}`] : []), ...('rel' in tol ? [`within ${Math.round(tol.rel * 100)}%`] : [])].join(' or ');
function numberAskLines(e, ask, item, marks) {
  const estimate = e.isEstimateAsk(ask), blanks = (ask.frame || '__').replace(/__/g, '[ ]'), tol = e.tolOf(ask);
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    `- The learner types ${estimate ? 'a rough answer from their head, with no calculator' : `a number, with the calculator within reach${ask.calc ? ` (with the extra keys ${e.calcExtraKeys(ask).map(k => e.SAY.calcName[k]).join(', ')})` : ''}`}: ${blanks}${ask.unit ? ` ${ask.unit}` : ''}.`];
  if (!marks) return lines;
  const want = e.numberAnswers(item, ask);
  lines.push(`- Right (${TOL_WORDS(tol)}${estimate && !ask.tol ? ': an estimate with no tolerance of its own is right from half to double' : ''}): ${e.frameFilled(ask, want)}`);
  (ask.traps || []).forEach(t => lines.push(`- If typed ${e.frameFilled(ask, e.numberAnswers(item, { answer: t.value }))}: ${t.then ? paras(t.then).join(' ') : `a slip: ${t.slip}`}`));
  if (estimate) lines.push(`- Shown after: how far off it was, for example "${e.SAY.estimateLine(e.frameFilled({ ...ask, unit: undefined, places: undefined }, [want[0] * 1.1]), e.frameFilled(ask, want), { pct: 10, dir: 'over' })}"`);
  return lines;
}
// a form: one box for each number and one set of options for each choice, answered whole; each field is described as the ask of its own kind
function formAskLines(e, data, ask, item, marks) {
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    '- The learner fills in every field, then taps Answer. Answer stays shut until every box holds a number and every choice has an option; nothing is marked before it.'];
  ask.fields.forEach(f => {
    const as = e.formFieldAsk(f);
    if (f.type === 'number') {
      lines.push(`- ${f.label}: a number in ${(f.frame || '__').replace(/__/g, '[ ]')}${f.unit ? ` ${f.unit}` : ''}`);
      if (marks) {
        lines.push(`  - Right (${TOL_WORDS(e.tolOf(f))}): ${e.frameFilled(as, e.numberAnswers(item, as))}`);
        (f.traps || []).forEach(t => lines.push(`  - If typed ${e.frameFilled(as, e.numberAnswers(item, { answer: t.value }))}: ${t.then ? paras(t.then).join(' ') : `a slip: ${t.slip}`}`));
      }
    } else {
      lines.push(`- ${f.label}: choose one`);
      e.chooseOptions(data.subjects.__current, as).forEach(o => lines.push(`  - ${o.text}${marks && o.ok ? ' (right)' : ''}${marks && !o.ok ? ` — if chosen: ${o.then ? paras(o.then).join(' ') : `a slip: ${o.slip}`}` : ''}`));
    }
  });
  return lines;
}
// a tap: the lines of the text become tappable (the headline does not); "Not given" is a button; a wrong line answers with its own note and slip
function tapAskLines(e, data, ask, marks, item) {
  const { SAY } = e, lines = e.tapSegments(item, ask), right = e.tapRightIds(ask), slips = data.subjects.__current.meta.lists.slip || [];
  const out = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    `- ${e.tapPick(ask) > 1 ? SAY.tapMany(e.tapPick(ask)) : SAY.tapOne} ${ask.in ? `The lines of one block can be tapped; the rest cannot. ` : ''}Nothing is marked before the answer${ask.pick > 1 ? '; Answer opens when that many are tapped' : ', and a tap is the answer'}.`];
  lines.forEach(l => {
    const extra = [l.note ? `note: ${l.note}` : null, l.slip ? `slip: ${(slips.find(s => s.id === l.slip) || { text: l.slip }).text}` : null].filter(Boolean);
    out.push(`- "${l.text}"${marks && right.includes(l.id) ? ' (right)' : ''}${marks && !right.includes(l.id) ? ` — if tapped: ${extra.length ? extra.join('; ') : SAY.tapNotThat}` : ''}`);
  });
  if (ask.none) out.push(`- A button: "${paras(ask.none).join(' ')}"${marks && ask.right === 'none' ? ' (right)' : ''}${marks && ask.right !== 'none' ? ` — if chosen: ${SAY.tapThereIsOne}` : ''}`);
  return out;
}
// a line to write against a model: never scored; the model is shown after, beside what was written
function textAskLines(e, ask, marks) {
  const { SAY } = e;
  if (ask.accept) return recallAskLines(e, ask, marks);
  return [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    `- ${SAY.writeHint} Nothing is marked: it is not scored. "${SAY.writeNotYet}" answers with nothing written. ${SAY.writePrivate} At most ${e.TEXT_MAX} characters.`,
    ...(marks ? [`- After: "${SAY.writeYours}" (what was written, or "${SAY.writeNone}") beside "${SAY.writeModel}": ${paras(ask.model).join(' ')} ${SAY.writeCompare}`] : [])];
}
// an answer from memory: one box, typed after saying it out loud, checked against the answers the list accepts (recall.js); every accepted answer, the one given
// marked, and the claim "my answer means the same" after a miss are the feedback
function recallAskLines(e, ask, marks) {
  const { SAY } = e, own = !Array.isArray(ask.accept), need = own ? 1 : e.recallNeed(ask);
  const how = 'What counts as the same: capital letters, punctuation, "a", "an", "the" and "and" do not matter; a number in words is the number ("twenty-seven" is 27); words in brackets are optional; one small misspelling in the whole answer is forgiven (a word that is one letter off, in words of four letters or more); parts of an answer said in any order. A word left out or added, or another word, is a miss.';
  const first = !SEEN.has('recall'); SEEN.add('recall');
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    ...(first ? [`- One box and "${SAY.answerBtn}" (shut until something is typed; Enter sends it), and "${SAY.recallNotYet}", which answers with nothing and shows the answers. "${SAY.recallHint}" Nothing is marked before the answer.`,
      `- ${how}`, `- After: the mark (${SAY.markRight}, ${SAY.markNo}, or "${SAY.recallNotYet}") with "${SAY.recallSaid}: …", then the accepted answers, every one, the one given marked "${SAY.recallGave}" (and "${SAY.recallBrackets}" when some words are in brackets). After a miss with something typed: "${SAY.recallClaimLine}" with the button "${SAY.recallClaim}". It counts right in that sitting (shown as "${SAY.markClaimed}"), is logged and listed under the result and in the results, and is not a good day for the schedule, so the question comes back.`]
      : ['- The same box, checking and feedback as above.']),
    ...(need > 1 ? [`- The question wants ${need} different accepted answers ("${SAY.recallMany(need)}"): more is fine, the same one twice is counted once.`] : [])];
  if (own) return [...lines, `- It reads the answer the learner entered (${ask.accept.own}); two answers entered with a semicolon between are two accepted answers, listed after under "${SAY.recallYours}". It is asked only once they have entered it.`];
  return [...lines, ...(marks ? [`- The accepted answers shown after (${SAY.recallAccepted}):`, ...ask.accept.map(a => `  - ${e.recallEntryText(a)}${typeof a === 'string' ? '' : ` (said in parts, any order: ${a.parts.join(' / ')})`}`)] : [])];
}
// a call or chat that pushes back: every turn once, in the order a learner meets them, with the replies and where each leads
function exchangeAskLines(e, data, ask, marks) {
  const { SAY } = e, order = [], name = id => `turn ${order.indexOf(id) + 1}`;
  const walk = id => { if (!order.includes(id)) { order.push(id); ask.turns[id].options.filter(o => 'goto' in o).forEach(o => walk(o.goto)); } };
  walk(ask.start);
  const out = [`**${paras(ask.prompt).join(' ')}**`, `- ${ask.form === 'call' ? 'An incoming call' : 'A chat'} from "${ask.from}" (${ask.detail}). The turns arrive one after another; the learner picks a reply each time and the next turn follows the reply. ${SAY.exchangeHint(ask.form)} Nothing is marked until it ends, and a call is not on a clock.`];
  order.forEach(id => {
    const turn = ask.turns[id];
    out.push(`- ${name(id)}, the other side says: ${turn.lines.map(l => `"${l.text}"`).join(' ')}${turn.push ? ` [pushes: ${paras(turn.push).join(' ')}]` : ''}`);
    turn.options.forEach(o => {
      const end = 'end' in o ? ask.ends[o.end] : null;
      out.push(`  - reply "${o.text}": ${end ? `the ${ask.form} ends${marks ? `${end.ok ? ' (right)' : ' (not this one)'}: ${paras(end.then).join(' ')}${end.slip ? ` [slip: ${(data.subjects.__current.meta.lists.slip.find(s => s.id === end.slip) || { text: end.slip }).text}]` : ''}` : ''}` : `goes on to ${name(o.goto)}, where the pressure comes back`}`);
    });
  });
  if (marks) out.push(`- After it ends: the lines of every turn that pushed are marked and named ("${SAY.exchangePushes}"), and the reply where it could have ended the right way is named ("${SAY.exchangeCould('first', 'the reply')}" or "${SAY.exchangeSoon}").`);
  return out;
}
// steps put in order: the learner taps them in the order they would do them
function orderAskLines(e, ask, marks) {
  const { SAY } = e, text = id => ask.steps.find(s => s.id === id).text;
  const open = ask.steps.length > ask.right.length;
  return [`**${paras(ask.prompt).join(' ')}**`, `- ${open ? SAY.orderHintOpen(e.orderScored(ask)) : SAY.orderHint(ask.right.length, e.orderScored(ask))} The steps are offered mixed (never already in the right order): ${ask.steps.map(s => `"${s.text}"`).join('; ')}. Each tapped step is numbered; "${SAY.orderReset}" clears the taps; ${open ? `the answer is the order tapped when "${SAY.answerBtn}" is pressed (the right order has ${ask.right.length}, which the screen does not say).` : `the answer is the order tapped once ${ask.right.length} are.`}`,
    ...(marks ? [`- Right: ${ask.right.map(text).join(', then ')}${e.orderScored(ask) === 'first' ? ' (only the first step counts)' : ''}. After a miss: "${SAY.orderYouPut}: …" and why the order matters: ${paras(ask.then).join(' ')}`] : [])];
}
// a place: a tap on a blank map (or, with its neighbor and water, two taps and a button "Landlocked"); the right place is lit after the answer and the tap marked
function placeAskLines(e, data, ask, marks) {
  const { SAY } = e, map = MAPS[ask.map], name = id => map.places.find(p => p.id === id).name, slips = data.subjects.__current.meta.lists.slip || [];
  const out = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`];
  if (ask.mode === 'neighbor-water') {
    const of = map.places.find(p => p.id === ask.of);
    out.push(`- The map of ${map.name} with no names. "${SAY.placeNeighbor}" A tap on the map is a neighbor of ${of.name}; then "${SAY.placeWater}" and a button "${SAY.placeLandlocked}" in place of the water. Nothing is marked before the answer.`);
    if (marks) out.push(`- Right: a tap on ${e.placeNeighborsOf(map, ask.of).map(name).join(', ')}, and then ${of.water.length ? `on ${of.water.map(name).join(', ')}` : 'the button "Landlocked" (it touches no water)'}. After the answer those places are lit, ${of.name} is outlined and the taps are marked. After a miss: "${SAY.youTapped}: …" and what is not so about it.`);
    return out;
  }
  out.push(`- The map of ${map.name} with no names. "${SAY.placeOne}" The tap is the answer; it is right inside the shape of ${e.placeRightIds(ask).map(name).join(' or ')}${e.placeRightIds(ask).some(id => map.places.find(p => p.id === id).dot) ? ' (a dot of a small country is found within a short distance of it, shorter as the map is zoomed in)' : ''}. Nothing is marked before the answer.`);
  if (marks) out.push(`- After the answer ${e.placeRightIds(ask).map(name).join(' and ')} is lit and the tap is marked. After a miss: "${SAY.youTapped}: <the place the tap was on>."${Object.entries(ask.slips || {}).map(([id, slip]) => ` Tapping ${name(id)} names the slip "${(slips.find(s => s.id === slip) || { text: slip }).text}".`).join('')}`);
  return out;
}
function askLines(e, data, ask, marks, item) {
  if (ask.kind === 'place') return placeAskLines(e, data, ask, marks);
  if (ask.kind === 'exchange') return exchangeAskLines(e, data, ask, marks);
  if (ask.kind === 'order') return orderAskLines(e, ask, marks);
  if (ask.kind === 'text') return textAskLines(e, ask, marks);
  if (ask.kind === 'tap') return tapAskLines(e, data, ask, marks, item);
  if (ask.kind === 'form') return formAskLines(e, data, ask, item, marks);
  if (ask.kind === 'number') return numberAskLines(e, ask, item, marks);
  const options = e.chooseOptions(data.subjects.__current, ask);
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.many ? ' (choose every one that fits)' : ''}${ask.when ? ' (opens only after a certain answer)' : ''}`];
  if (ask.shuffle) lines.push('(the options come in an order that depends on the seed of the question)');
  options.forEach(o => lines.push(`- ${o.text}${marks && o.ok ? ' (right)' : ''}${marks && !o.ok ? ` — if chosen: ${o.then ? paras(o.then).join(' ') : `a slip: ${o.slip}`}` : ''}`));
  return lines;
}
function questionLines(e, data, inst, support, label) {
  const item = inst.item, lines = [`#### ${label}${inst.seed !== undefined ? (inst.item.values && inst.item.values.place ? ` (made from a group of places: ${inst.item.values.name}, ${inst.item.values.form}; this is seed ${inst.seed})` : ` (made with fresh numbers; this is seed ${inst.seed})`) : ''}`, '', blocksText(item.blocks, support && support.shown ? item.deciding : [], data.subjects.__current.meta.refs || [], { rules: data.subjects.__current.meta.rules, panel: !!(support && support.panel) })];
  if (support && support.panel && e.panelBlocksOf(item).length) { const own = e.itemRuleIds(item).map(id => data.subjects.__current.meta.rules[id]).filter(r => r.heading); lines.push(`Help on screen: ${own.length === 1 && e.itemRuleIds(item).length === 1 ? e.SAY.helpPanelNamed(own[0].heading) : e.SAY.helpPanel}`, ''); }
  if (support && support.shown) lines.push('Help on screen: the words that decide it are marked.', '');
  const shown = e.shownStepIds(item, support);
  if (shown.length) lines.push('Help on screen: the working up to the last steps.', ...item.steps.filter(s => shown.includes(s.id)).map(s => `- ${s.does}: ${s.working}`), '');
  e.askedAsks(item, support).forEach(a => lines.push(...askLines(e, data, a, true, item), ''));
  lines.push(`After the answer: ${(item.deciding || []).length ? 'the deciding words are marked. ' : ''}Reason: ${paras(item.reason).join(' ')}`);
  if (item.need) lines.push(`What you would need to see: ${paras(item.need).join(' ')}`);
  if (item.fact) { const f = data.subjects.__current.items[item.fact], a = f.asks.find(x => x.accept); lines.push(`${e.SAY.factHeading}: ${f.blocks.find(b => b.kind === 'spoken').text} Accepted: ${a.accept.map(x => e.recallEntryText(x)).join('; ')}.`); }
  if (item.has) e.hasLines(data.subjects.__current, item).forEach(g => lines.push(`${(g.heading || e.SAY.hasHeading(g.name))}, each need found (with its line) or missing:`, ...g.needs.map(n => `- ${n.found ? `${e.SAY.hasFound}: ${n.text} “${n.found.text}”` : `${e.SAY.hasMissing}: ${n.text} ${e.SAY.hasNowhere}`}`)));
  if (item.figure) lines.push('A picture is added to the feedback:', ...blockLines(item.figure));
  if (item.redraw) lines.push(`A chart is added to the feedback, "${SAYWORDS.redraw}": the chart above drawn again with the scale starting at zero.`);
  if (item.steps) lines.push('The working:', ...item.steps.map(s => `- ${s.does}: ${s.working}`));
  return [...lines, ''];
}

/* ---------- a sung question ---------- */
// A sung question is made by the app from the task a lesson names, at a note drawn from the learner's own range; so it is described by
// what the learner sees and hears, with a sample range to show the shape of the plan. Every sentence the app prints is read from SAY.
const SAMPLE_RANGE = { low: 'A2', high: 'E4' };
const seconds = ms => `${ms / 1000} second${ms === 1000 ? '' : 's'}`;
function singLines(e, ref, support, label, summary = false) {
  const { SAY } = e, task = ref.sing, kind = task.task, item = e.singItem(task), ask = item.asks[0], plan = e.singPlan(ask, SAMPLE_RANGE, 1);
  const free = e.SING_FREE.includes(kind), line = free || (support && support.line);
  const heard = plan.hear.length ? `the app plays ${plan.hear.length === 1 ? 'the note' : `the ${plan.hear.length} notes`} in a soft hum-like tone, not a voice (${plan.hear.map(h => seconds(h.ms)).join(', ')}), ignoring the microphone while it plays and for a quarter of a second after, then` : 'then';
  const windows = plan.windows.map(w => seconds(w.ms)).join(' + ');
  const strip = line ? `the strip shows ${plan.bars.length ? 'the note as a bar and ' : ''}the voice as a line, drawn as it is sung` : `an empty strip with the words "${SAY.stripHidden}"`;
  const lines = [`#### ${label}: ${item.label} (a sung question${free ? '; nothing to match' : "; the notes are made fresh from the learner's range, inside it"})`, '', `**${paras(ask.prompt).join(' ')}**`, '',
    `- Before the tap: one button, "${free ? SAY.singStart : plan.hear.length > 1 ? SAY.singGoMany : SAY.singGo}". The microphone is off and nothing sounds. The screen says: ${SAY.micPrivate}`,
    `- On the tap: the microphone turns on (it stays on for the group), ${heard} the learner sings in a window of ${windows}${plan.holdNeedMs ? `, and must stay on the note for ${seconds(plan.holdNeedMs)}` : ''}.`,
    `- While singing: ${strip}.`];
  if (kind === 'light') lines.push(`- Before the first of these in a group: two notes to set the scale, neither scored. "${SAY.singScaleLoud}" then "${SAY.singScaleTalk}"`);
  if (kind === 'range') lines.push(`- The two windows say: "${SAY.singUp}" then "${SAY.singDown}" The lowest and highest steady notes are saved as the learner's range, once. If the two ends are too close together: "${SAY.singNarrow}" and nothing is saved.`);
  if (kind === 'warmup') lines.push(`- It is not scored, stored or counted, and there is a "${SAY.singSkip}" link. It ends with "${SAY.singWarmupDone}".`);
  else if (kind === 'range') lines.push(`- After the try: "${SAY.singRangeSaved}". Reason: ${item.reason}`);
  else {
    const words = ['on', 'shadeUnder', 'shadeOver', 'wellUnder', 'wellOver', 'missed', ...(plan.turns ? ['slidUp', 'slidDown', 'hunt'] : [])].map(k => SAY.singWord[k]);
    lines.push(`- After the try, in words${plan.hear.length > 1 ? ', one line for each note' : ''}: ${words.join(', ')}${kind === 'hold' || kind === 'melody' ? ', and how long the note stayed steady' : ''}. The strip then shows ${plan.bars.length ? 'the note and ' : ''}the voice, with or without the line. Reason: ${item.reason}`);
    lines.push(`- After a miss, a line for each note that was off says which way to move and how far, for example "${SAY.singVoice.shadeUnder()}" or "${SAY.singVoice.wellOver(2)}"${plan.turns ? `; a note that slid onto the note says "${SAY.singSlidLine(1)}", and one that wandered up and down says "${SAY.singHuntLine}"` : ''}${kind === 'hold' ? `; a hold that broke says how long it stayed on and where it went, for example "${SAY.singHeldLine(1.4, task.seconds)}" then "${SAY.singDriftLine(-1)}", or, when it was off from the first moment, "${SAY.singStartLine(SAY.singVoice.shadeUnder())}"` : ''}${kind === 'melody' ? `; a long last note that did not hold says which way it went, for example "${SAY.singDriftLine(-1)}"` : ''}.`);
  }
  if (kind !== 'warmup') lines.push(`- Nothing heard: "${SAY.singNothing}" The try is not counted and can be made again.${kind === 'range' || summary ? '' : ' A miss comes back three tries later with a new note.'}`);
  lines.push(kind === 'warmup' ? '- Stored: nothing.' : `- Stored: numbers only (${kind === 'range' ? 'how much range was found' : 'how far off each note was, in whole hundredths of a half-step'}); no sound is recorded or sent anywhere.`, '');
  return lines;
}
const isSung = ref => typeof ref === 'object' && ref !== null && 'sing' in ref;
// the sung questions of a group, each described once and its repeats named; `from` tries have been asked before it
function sungRefLines(e, refs, support, label, from, summary = false) {
  let at = from;
  return refs.flatMap(ref => {
    const first = `${label} ${at + 1}`, n = e.refCount(ref), lines = singLines(e, ref, support, first, summary);
    const more = n === 2 ? [`${label} ${at + 2}: the same question, with a new note drawn from the range.`, ''] : n > 2 ? [`${label.replace(/y$/, 'ies')} ${at + 2} to ${at + n}: the same question, each with a new note drawn from the range.`, ''] : [];
    at += n;
    return [...lines, ...more];
  });
}
// a group that needs the learner's range opens with the range exercise when none is stored: described once in a lesson
function rangeFirst(e, refs, shown) {
  if (shown.done || !refs.some(r => isSung(r) && e.SING_NEEDS_RANGE.includes(r.sing.task))) return [];
  shown.done = true;
  return ['When no range is stored yet, this group opens with the range exercise, and the group follows it:', '', ...singLines(e, { sing: { task: 'range' }, n: 1 }, null, 'First')];
}

/* ---------- the step on the learner's own data ---------- */
// What the learner meets, in order. Every sentence the app prints is read from SAY; the fields are read from the subject's private forms.
const fieldWords = f => `${f.label}${f.optional ? SAYPLAIN.optional : ''} (${f.type === 'choose' ? 'choose one' : f.type === 'number' ? `a number${f.unit ? `, in ${f.unit}` : ''}` : f.type === 'date' ? 'a day' : 'words'})${f.warn ? `; ${f.warn.over !== undefined ? `over ${f.warn.over}` : `under ${f.warn.under}`}: "${f.warn.text}"` : ''}`;
const SAYPLAIN = { optional: ' (optional)' };
// the plan: two boxes, the sentence they make, kept as { cue, then, saved }; the own ways in: things marked done on a day
function planLines(e, subject, step, at) {
  const { SAY } = e, form = subject.meta.own[step.own];
  if (form.into === 'setup') return [`## ${at}: ${SAY.setupTitle}`, '', `${SAY.setupHow} Each of these is a row with "${SAY.setupMark}" (the day is kept) and, once done, "${SAY.setupUndo}":`, '', ...form.fields.map(f => `- ${f.label}`), '', SAY.setupNote, ''];
  return [`## ${at}: ${form.words.title}`, '', `${form.words.how} ${SAY.planPrivate}`, '', ...form.fields.map(f => `- ${f.label}${f.hint ? ` (for example: ${f.hint})` : ''}`), '',
    `Buttons: "${SAY.planSave}" (both boxes must be filled in; the plan is kept as one sentence, "${SAY.planIf} <when>, ${SAY.planThen} <what>.", with the day it was saved) and "${SAY.planSkip}". Once saved: "${form.words.saved}" and "${SAY.planChange}". A group of questions that rehearses the plan shows it once first: "${SAY.planBeforeTitle}", "${form.words.before}", and the sentence, when there is one. The review shows the same line and the sentence at the start of the subject's part.`, ''];
}
// the step where the learner enters the answers that depend on where they live and who holds office, and the day of their interview
function answersLines(e, subject, step, at) {
  const { SAY } = e, form = subject.meta.own[step.own];
  return [`## ${at}: On your own answers`, '', `"${SAY.answersTitle}": ${SAY.answersHow} The page named is ${SAY.answersLink} (a link to https://www.uscis.gov/citizenship/testupdates that opens in the browser). ${SAY.answersPrivate}`, '',
    ...form.fields.map(f => `- ${f.label}${f.hint ? ` (the box says: "${f.hint}")` : ''}${f.type === 'date' ? ' (a day; optional)' : ''}`), '',
    `Every answer is needed; the day is not. Refused, with a line under the field and the cursor on the first: a field left empty ("${SAY.ownRequired}"), and a run of ${e.OWN_MAX_DIGITS || 8} or more digits. "Go on" is not offered until "${SAY.answersSave}" has saved them; then "${SAY.answersSaved}" They are kept on this phone under the subject's own answers and appear on its subject screen under "${SAY.answersSection}" (with "${SAY.answersEdit}", and a line when they are more than a month old), nowhere else, and in the file the learner saves. The questions that read them are asked only once they are entered. With the date entered, the review brings each topic back once more a week at a time in the six weeks before it.`, ''];
}
function ownLines(e, subject, lesson, step, at) {
  if (['plan', 'setup'].includes(subject.meta.own[step.own].into)) return planLines(e, subject, step, at);
  if (subject.meta.own[step.own].into === 'answers') return answersLines(e, subject, step, at);
  const { SAY } = e, form = subject.meta.own[step.own], actions = Object.values(subject.meta.own).find(f => f.into === 'actions'), lists = subject.meta.lists;
  const model = step.model ? subject.items[step.model] : null, trigger = lesson.trigger && ((lists.trigger || []).find(t => t.id === lesson.trigger) || {}).text;
  const out = [`## ${at}: On your own accounts`, '', 'The same step on the learner\'s own data. Nothing here is scored, stored as a try or logged: it is kept in the learner\'s own account with their sign-in, with a copy on this phone, and shared with no one (the sheet, the dated changes and the moments marked).', ''];
  if (trigger) out.push(`**Waits for a moment.** Until the learner marks "${trigger}" (on this screen, or on the subject screen) the step says "${SAY.ownWaitTitle}": "${SAY.ownWaitLine(trigger)}" with "${SAY.ownWaitMark}" and "${SAY.ownWaitLater}".`, '');
  out.push(`**The sheet, when it is empty.** "${SAY.ownSheetTitle}": ${SAY.ownSheetHow} ${SAY.ownPrivate}`, '',
    ...form.fields.map(f => `- ${fieldWords(f)}`), ...(form.rows ? [`- ${form.rows.label}, one row for each, added with "${SAY.ownAddFund}":`, ...form.rows.fields.map(f => `  - ${fieldWords(f)}`)] : []), '',
    `Each account has "${SAY.ownRemoveAccount}" and the sheet has "${SAY.ownAddAccount}". Refused, with a line under the field and nothing stored: a field left empty, a word where a number goes, and any run of ${e.OWN_MAX_DIGITS || 8} or more digits ("${SAY.ownDigits}"). A fund row or an account left wholly blank is dropped. Buttons: "${SAY.ownSave}", and "${SAY.ownNoAccounts}" (then "${SAY.ownNoAccountsLine}").`, '');
  const work = e.OWN_WORKS[step.work], groups = (form.groups || []).filter(g => work.needs.includes(g.id));
  const kinds = id => (lists.accountType || []).filter(o => id.includes(o.id)).map(o => o.text).join(', ');
  form.fields.filter(f => f.for).forEach(f => out.push(`(The field "${f.label}" shows only for: ${kinds(f.for)}.)`, ''));
  if (groups.length) out.push(`**Beside the accounts, when not filled in yet** (the sheet opens on them even when it has accounts):`, '',
    ...groups.flatMap(g => [`- "${g.label}"${g.optional ? ' (optional: may be left blank)' : ''}${g.how ? `: ${g.how}` : ''}${g.many ? ` One line each, added with "${SAY.ownAddRow}", removed with "${SAY.ownRemoveRow}".` : ''}`,
      ...g.fields.map(f => `  - ${fieldWords(f)}`)]), '');
  out.push(`**What the app works out.** "${SAY.workTitle[step.work]}": ${SAY.workHow[step.work]} It shows its table${work.needs.length ? ' from the accounts and the groups above' : ' from the accounts'}, then its lines; a line that calls for a look is set off. A yearly cost over the form's own limit is warned about and kept; funds that add up to a different balance are said so. "${SAY.ownChange}" opens the sheet again.`, '');
  if (model) out.push(`**The lines to find.** "${SAY.ownModelHeading}": ${SAY.ownModelLine} The sample of the worked example is shown again with its deciding lines marked:`, '', blocksText(model.blocks, model.deciding || [], subject.meta.refs || []));
  out.push(`**The change.** "${SAY.ownActionHeading}": ${SAY.ownActionHow}`, '', ...actions.fields.map(f => `- ${fieldWords(f)}`), '',
    `Buttons: "${SAY.ownSaveAction}" (the day may not be in the past) and "${SAY.ownDoneNow}" (needs only what and where, and is marked done today). Each change is listed with "${SAY.ownCalendar}", which saves a calendar file (.ics) for its day with a reminder at nine, and "${SAY.ownMarkDone}". "${SAY.ownNothing}" Then "${SAY.goOn}".`, '');
  return out;
}

/* ---------- a lesson ---------- */
export function renderLesson(loaded, subjectId, lessonId) {
  SEEN = new Set();
  const e = loaded.engine, data = { ...loaded, subjects: { ...loaded.subjects, __current: loaded.subjects[subjectId] } };
  MAPS = loaded.maps;
  GENS = loaded.subjects[subjectId].gens;
  SAYS = e.SAY;
  const subject = loaded.subjects[subjectId], lesson = subject.lessons[lessonId];
  if (!lesson) throw new Error(`${subjectId} has no lesson ${lessonId}`);
  const part = (subject.meta.parts.find(p => p.id === lesson.part) || {}).title;
  const out = [`# ${subject.meta.name}: ${lesson.title}`, '',
    `Revision ${lesson.rev}, ${lesson.status}${lesson.status === 'draft' ? ' (the screen carries the draft line)' : ''}. Part: ${part || 'none'}. Where the subject ends up: ${subject.meta.endResult}`, '',
    ...(lesson.trigger ? [`Waits for a moment: the learner marks "${((subject.meta.lists.trigger || []).find(t => t.id === lesson.trigger) || {}).text}" before the step on their own data opens.`, ''] : []),
    '## The why', '', ...paras(lesson.why), ''];
  let n = 0;
  // a made question is shown with the seed of its place in the lesson, so the numbers in the view differ from one question to the next
  // a place group is shown at the place and form its reference asks, the next one in turn for each question of the reference
  const seedOf = (gen, ref) => {
    if (!e.isPlaceGen(gen)) return n + 1;
    const w = ref.with || {}, pairs = e.placePairs(gen).filter(p => (!w.form || p.form === w.form) && (!w.place || p.place === w.place)), pair = pairs[n % pairs.length];
    return e.placeSeedOf(gen, pair.place, pair.form);
  };
  const instance = ref => {
    if (e.refId(ref) in subject.items) return { key: e.refId(ref), item: subject.items[e.refId(ref)] };
    const gen = subject.gens[e.refId(ref)], seed = seedOf(gen, ref);
    return { key: e.refId(ref), item: e.itemFromGen(gen, seed, ref.with), seed };
  };
  const rangeShown = { done: false }, needsRange = ref => isSung(ref) && e.SING_NEEDS_RANGE.includes(ref.sing.task);
  lesson.flow.forEach((step, i) => {
    const at = `Step ${i + 1}`;
    if (step.show) out.push(`## ${at}: ${step.title}`, '', blocksText(step.show, [], subject.meta.refs || [], { rules: subject.meta.rules }));
    else if (step.own) out.push(...ownLines(e, subject, lesson, step, at));
    else if (step.worked) {
      const item = subject.items[step.worked];
      out.push(`## ${at}: A worked example`, '', blocksText(item.blocks, [], subject.meta.refs || [], { rules: subject.meta.rules }),
        ...item.asks.filter(a => a.kind === 'place').map(a => `\nAbove the map: **${paras(a.prompt).join(' ')}**\nThe map of ${MAPS[a.map].name} with ${e.placeRightText(a)} lit${a.mode === 'neighbor-water' ? '' : ' and the tap shown on it'}.`));
      if (item.asks.length && item.asks[0].kind === 'choose') out.push('Before the working, the learner may commit to a choice (not scored, not stored):', ...askLines(e, data, item.asks[0], false, item), '');
      const right = a => a.kind === 'place' ? e.placeRightText(a) : a.kind === 'text' ? (a.accept ? a.accept.map(x => e.recallEntryText(x)).join('; ') : paras(a.model).join(' ')) : a.kind === 'tap' ? e.tapRightText(a, item) : a.kind === 'number' ? e.frameFilled(a, e.numberAnswers(item, a)) : a.kind === 'form' ? a.fields.map(f => e.formFieldRight(subject, a, f, item)).join('; ') : a.kind === 'order' ? a.right.map(id => a.steps.find(x => x.id === id).text).join(', then ') : e.chooseOptions(subject, a).filter(o => o.ok).map(o => o.text).join('; ');
      out.push('The working, one step at a time:', ...(item.steps || []).map(s => `1. ${s.does}: ${s.working}`), '', `Then the answer: ${item.asks.map(right).join(' / ').replace(/\.$/, '')}. ${paras(item.reason).join(' ')}`, ...(item.need ? [`What you would need to see: ${paras(item.need).join(' ')}`] : []),
        ...(item.has ? e.hasLines(subject, item).flatMap(g => [`${(g.heading || e.SAY.hasHeading(g.name))}, each need found (with its line) or missing:`, ...g.needs.map(n => `- ${n.found ? `${e.SAY.hasFound}: ${n.text} “${n.found.text}”` : `${e.SAY.hasMissing}: ${n.text} ${e.SAY.hasNowhere}`}`)]) : []),
        ...(item.figure ? ['', 'A picture follows:', ...blockLines(item.figure)] : []), '');
    } else {
      const set = step.set, refs = e.flatRefs(set.items), sung = refs.some(isSung), count = refs.reduce((k, r) => k + e.refCount(r), 0);
      const HELP_WORDS = { panel: 'what the label needs, shown beside the words', line: 'the line and the notes drawn while singing', estimateCheck: 'a line that says when the answer and the estimate disagree: an answer more than double or less than half of the learner\'s own estimate is held back once' };
      const checklist = set.support && set.support.panel && refs.length && refs.every(r => { const d = subject.items[e.refId(r)] || subject.gens[e.refId(r)]; return e.itemRuleIds(d).length === 1 && subject.meta.rules[e.itemRuleIds(d)[0]].heading; });
      const setWords = (set.items.some(Array.isArray) ? ', with each inner pair asked one after the other, in a random order' : '') + (set.seconds ? `, each question on a ${set.seconds} second clock (the clock only shows the time, counted on the frame clock: at zero the question stops, whatever is not answered is a timeout, a miss that is not a slip, and the screen waits for Next; a live call or chat is not timed)` : '')
        + (set.over === 'busy' ? ', over the busy task (a shopping list to sort by taps; a banner arrives over it after two sorts and its clock starts then; the sorting is never scored or stored)' : '')
        + (set.plan ? ', with the learner\'s saved plan shown once first when there is one' : '');
      const help = set.support ? `, with help (${Object.entries(set.support).map(([k, v]) => v === true ? (k === 'panel' && checklist ? 'the checklist of what counts, shown beside the words' : HELP_WORDS[k] || k) : `${k} ${v}`).join(', ')})` : '';
      if (sung) {
        const summary = set.feedback === 'at-end';
        const guess = set.guess ? ` After each try, ${summary ? '' : 'before the result, '}the screen asks "${e.SAY.singGuessAsk(refs[0].sing.task)}" with three buttons, ${Object.values(e.SAY.singGuessWord).map(w => `"${w}"`).join(', ')}; the answer is kept with the try and never scored, and ${summary ? 'the list at the end of the group' : 'the result then'} shows "${e.SAY.singGuessSaid('Under')}" (for example) with "${e.SAY.singGuessSame}" or, when the app measured it another way, for example "${e.SAY.singGuessOther('a shade over', 1, ['hold', 'melody'].includes(refs[0].sing.task) ? 'ended' : undefined)}"` : '';
        const shown = summary ? ' No result is shown after a try: the strip stays empty, and the break screen at the end of the group lists how each try went, in the order sung. A missed try does not come back.' : ' A missed try comes back at least three tries later, with a new note, until it is on the note.';
        out.push(`## ${at}: ${refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'Warm-up' : 'Tries'}`, '', refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'A hum; a line on the screen follows your voice. It is not scored and can be skipped.' : `${count} ${count === 1 ? 'try' : 'tries'}, ${set.order}${help}.${shown}${guess}`, '');
        out.push(...rangeFirst(e, refs, rangeShown), ...sungRefLines(e, refs, set.support, 'Try', n, set.feedback === 'at-end'));
        n += count;
        if (!refs.every(r => isSung(r) && r.sing.task === 'warmup')) out.push('Then a screen: you can stop here, your place is kept.', '');
        else out.push('Then the next step: a warm-up has no break screen.', '');
        rangeShown.done ||= refs.some(needsRange);
        return;
      }
      out.push(`## ${at}: Questions`, '', `${count} question${count === 1 ? '' : 's'}, ${set.order}${help}${setWords}${set.mix ? `, with about ${Math.round(set.mix.share * 100)}% from earlier lessons mixed in, unlabeled` : ''}. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.`, '');
      refs.forEach(ref => {
        const gen = typeof ref === 'string' ? null : subject.gens[e.refId(ref)], w = ref.with || {};
        // a reference to a group of places that does not name one place asks `n` of the places the group can ask in that form: the lesson's own groups never
        // ask a place kept to another form by a check, so every one of those is listed, and which ones the learner meets is said, not guessed
        if (gen && e.isPlaceGen(gen) && w.form && !w.place) {
          const only = e.placeOnlyOf(subject, gen.id), pool = gen.places.list.filter(p => e.placeAllowedForms(gen, p.id, only).includes(w.form));
          out.push(`${ref.n} different places of these ${pool.length}: ${pool.map(p => p.name).join(', ')}. ${ref.n >= pool.length ? 'Every one of them is asked, in a random order.' : `${ref.n} of them are asked, drawn at random, the ones missed last time or met longest ago first.`} Each is asked as follows.`, '');
          pool.forEach(p => out.push(...questionLines(e, data, { key: e.refId(ref), item: e.itemFromGen(gen, e.placeSeedOf(gen, p.id, w.form), ref.with), seed: e.placeSeedOf(gen, p.id, w.form) }, set.support, `Question: ${p.name}`)));
          n += e.refCount(ref);
          return;
        }
        for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(typeof ref === 'string' ? ref : { ...ref }), set.support, `Item ${++n}`));
      });
      out.push('Then a screen: you can stop here, your place is kept.', '');
    }
  });
  const check = lesson.check, size = e.checkSize(check), baseline = lesson.role === 'baseline';
  const clockWords = check.seconds ? ` ${e.SAY.checkTimed(check.seconds)} A call is not on a clock.` : '';
  if (baseline) out.push('## The baseline', '', `${e.SAY.baselineIntro(size)}${clockWords}`, `It is not passed or failed: no rule is shown, nothing is shown per question${check.order === 'shuffle' ? ', and the questions come in mixed order' : ''}. It is stored as tries in the context "baseline", never counted in the results by lesson or in the schedule of a topic, and taken once.`, '');
  else out.push('## The check', '', `${e.checkIsSung(check) ? `${size} new tries, with no line.` : e.checkHasSung(check) ? e.SAY.checkIntroMixed(e.checkParts(check).written, e.checkParts(check).sung).replace(/ To pass:$/, '') : check.recall ? e.SAY.checkIntroAgain(size).replace(/ To pass:$/, '') : e.checkIsDrawn(check) ? e.SAY.checkIntroDrawn(size).replace(/ To pass:$/, '') : `${size} new questions, no help.`} ${check.feedback === 'at-end' ? 'No answer is shown until the end.' : e.checkIsSung(check) ? 'The result, in words, is shown after each try.' : 'The answer is shown after each question.'}${check.order === 'shuffle' ? ' The questions come in mixed order.' : ''}${check.retest ? ` It comes back once, on new questions, ${check.retest} days after the first time.` : ''}`, '',
    ...(clockWords ? [clockWords.trim(), ''] : []), 'To pass:', ...check.pass.map(r => `- ${e.ruleText(subject, r, e.rightWord(check))}`), '');
  if (check.spoken) out.push(`The check is spoken: ${e.SAY.checkSpoken} Its first screen adds: ${e.SAY.checkUpdates}`, '');
  if (e.checkIsDrawn(check) && 'gen' in check.items.draw) {
    const draw = check.items.draw, gen = subject.gens[draw.gen], split = Object.entries(draw.split).filter(([, k]) => k > 0).map(([f, k]) => `${k} ${f}`).join(', ');
    out.push(`The questions are drawn at random from one group of places (${gen.places.list.map(p => p.name).join(', ')}): ${split}, the same run drawing the same. Within a form the places are drawn at random, a place the draw has not used first and one last asked in another form before one last asked in this form${Object.keys(draw.only || {}).length ? `; ${Object.entries(draw.only).map(([f, ids]) => `${ids.join(', ')} only as ${f}`).join('; ')}` : ''}. One question of each form is shown here, as a learner would meet it:`, '');
    Object.keys(draw.split).forEach(form => { const pair = e.placePairs(gen).find(p => p.form === form && e.placeAllowedForms(gen, p.place, draw.only || {}).includes(form)); out.push(...questionLines(e, data, { key: e.placeKey(gen.id, pair.place), item: e.itemFromGen(gen, e.placeSeedOf(gen, pair.place, form)), seed: e.placeSeedOf(gen, pair.place, form) }, null, `Question in the draw: ${form}`)); });
  }
  else if (e.checkIsDrawn(check)) {
    out.push(`The questions are drawn at random from the topics: ${check.items.draw.strands.join(', ')} (${check.items.draw.n} of them), the same run drawing the same; what no earlier ${check.retest ? 'run of this check' : 'check'} asked comes first, and a question about the learner's own answers is left out until they are entered. Each is shown here once, as a learner would meet it:`, '');
    check.items.draw.strands.flatMap(id => Object.values(subject.items).filter(i => i.strand === id)).forEach(i => out.push(...questionLines(e, data, { key: i.id, item: i }, null, `Question in the draw: ${i.id}`)));
  }
  else if (e.checkIsSung(check)) out.push(...rangeFirst(e, e.flatRefs(check.items), rangeShown), ...sungRefLines(e, e.flatRefs(check.items), null, 'Check try', n));
  else e.flatRefs(check.items).forEach(ref => {
    if (isSung(ref)) { out.push(...rangeFirst(e, [ref], rangeShown), ...sungRefLines(e, [ref], null, 'Check try', n)); n += e.refCount(ref); return; }
    for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(ref), null, `Check question ${++n}`));
  });
  // a compared facet is shown only when the check's questions carry two or more of its values (panel.js facetSplits): a check of questions with no level shows none
  const checkDefs = e.checkIsDrawn(check) ? ('strands' in check.items.draw ? Object.values(subject.items).filter(i => check.items.draw.strands.includes(i.strand)) : [])
    : e.flatRefs(check.items).map(r => subject.items[e.refId(r)]).filter(Boolean);
  const compared = Object.entries(subject.meta.facets).filter(([id, f]) => f.compare && new Set(checkDefs.map(d => (d.facets || {})[id]).filter(Boolean)).size > 1).map(([, f]) => f);
  if (baseline) {
    const d = subject.meta.danger, text = (facet, v) => subject.meta.facets[facet].values.find(x => x.id === v).text, slip = subject.meta.lists.slip.find(x => x.id === d.slip).text;
    out.push('## The result', '', `One screen headed "${e.SAY.baselineDone}" with the one line the baseline ends on, for example "${e.SAY.baselineLine(text(d.facet, d.risky), 6, slip, 1, text(d.facet, d.real), 4, 4)}", then "${e.SAY.baselineNote}" and the way on to the next lesson. No pass, no rule, no answer. The subject's results screen shows the same line, on the day it was taken, under "${e.SAY.baselineRow('Oct 11')}".`, '');
  } else {
  out.push('## The result', '', ...(compared.length ? [`Under the rules, the facets the subject compares are shown side by side: ${compared.map(f => `"${f.name}" (${f.values.map(v => v.text).join(' beside ')}, each as "n of m" right the first time)`).join('; ')}. The same is shown at the end of the weekly review.`, ''] : []), resultExample(e, check, size), '');
  }
  return out.join('\n');
}

// what the result screen says, with this check's own numbers
function resultExample(e, check, size) {
  const need = Math.max(...check.pass.map(r => r.right ? r.right.min : 0)), sung = e.checkIsSung(check);
  const passed = e.SAY.checkPassed(size, size, sung), notYet = e.SAY.checkNotYet(Math.max(0, need - 1), size);
  const each = check.feedback === 'at-end' ? ', then every answer with its feedback, the missed ones first.' : sung ? '. The result of each try was shown as it was sung.' : '. The answer to each was shown as it was given.';
  return e.checkHasSung(check) && !sung
    ? `A line such as "${passed}" or "${e.SAY.checkNotYet(size - 2, size)}" (all questions and tries together), then each rule above shown as met or not met${each}`
    : `For example "${passed}" or "${notYet}", each rule above shown as met or not met${each}`;
}

async function main() {
  const args = process.argv.slice(2), flags = new Set(args.filter(a => a.startsWith('--'))), names = args.filter(a => !a.startsWith('--'));
  const [subjectId, lessonId] = names;
  if (!subjectId) { console.error('usage: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>] [--fixture] [--stdout]'); process.exit(1); }
  const loaded = await loadAll({ fixture: flags.has('--fixture') });
  const subject = loaded.subjects[subjectId];
  if (!subject) throw new Error(`unknown subject ${subjectId}`);
  const ids = lessonId ? [lessonId] : Object.keys(subject.lessons);
  if (!ids.length) { console.log(`${subjectId} has no lessons yet`); return; }
  for (const id of ids) {
    const text = renderLesson(loaded, subjectId, id);
    if (flags.has('--stdout')) { console.log(text); continue; }
    const dir = new URL('../../docs/learner-view/', import.meta.url);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL(`${subjectId}-${id}.md`, dir), text);
    console.log(`wrote docs/learner-view/${subjectId}-${id}.md`);
  }
}

import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error => { console.error(error.message); process.exit(1); });
