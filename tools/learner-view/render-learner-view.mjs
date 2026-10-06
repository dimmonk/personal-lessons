// Writes learner-view-<unit>.md: a whole unit as plain text, in the order a learner meets it.
// It is generated from the data files, so the view cannot say anything the data does not.
// Feedback is assembled the way the lesson standard's E5 says the app assembles it, and every instruction that is
// the same in all units (stage instructions, prompt stems, the stakes line) is the app's wording, not the unit's.
// A gate unit (A15) is rendered by the same code: its drill has three stages, and its answer is the name.
// Run: node tools/learner-view/render-learner-view.mjs <subject> <unit>   (writes docs/learner-view/<subject>-<unit>.md)
//      node tools/render-learner-view.mjs u2        (writes learner-view-u2.md)
import { writeFile, mkdir } from 'node:fs/promises';
import { loadSubject, unitView, paras } from './load.mjs';
import { makeText, makeCardRenderers, APP, cap, num } from './render-cards.mjs';

const [SUBJECT, UNIT] = process.argv.slice(2).filter(a => !a.startsWith('-'));
if (!SUBJECT || !UNIT) { console.error('usage: node tools/learner-view/render-learner-view.mjs <subject> <unit>'); process.exit(1); }
const subject = await loadSubject(SUBJECT);
const v = unitView(subject, UNIT);
const T = makeText(v);
const { R } = makeCardRenderers(v, T);
const unit = v.unit;
const GATE = v.gate ? v.gate.code : null;   // a subject of fact units only has no gate
const out = [];
const say = (...lines) => out.push(...lines.filter(l => l !== null && l !== undefined));

const optionLines = (code, ids) => ids.map(id => `- ${v.option(code, id).n}`);
const allIds = code => v.step(code).options.map(o => o.id);
const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
const cardsInOrder = cardOrder.map(id => v.cards[id]);
const total = cardOrder.length;
const flat = rung => rung.items.flat();
const taughtNames = v.taught.map(id => v.thing(id).n).join(' / ');
const notOf = c => c.not && (c.not.outcome || c.not.family);

/* ---------- what has been taught so far (walks with the cards) ---------- */
const namedSteps = new Set(v.assumedSteps.map(s => s.code));  // questions whose own card has been read
const ledgerRead = new Set();                                  // look-alike entries whose card has been read
const headingOf = {};                                          // card id -> heading, for "Taught on"
const meetCardOf = o => cardsInOrder.find(c => c.kind === 'meet' && v.subjectOf(c) === o);
const questionCardOf = code => cardsInOrder.find(c => c.kind === 'question' && c.step === code);
const taughtOn = card => card ? `- Taught on: “${headingOf[card.id] || cardHeading(card)}” (one tap opens the card).` : null;
const taughtOnStep = code => taughtOn(questionCardOf(code)) || '- Taught in Unit One (one tap opens the card).';

function cardHeading(card) {
  if (card.continues) return headingOf[card.continues] || cardHeading(v.cards[card.continues]);   // a chain keeps its first card's heading
  const name = id => v.thing(id).n;
  if (card.kind === 'meet') return cap(v.thing(v.subjectOf(card)).plain);
  if (card.kind === 'check') return card.ask.type === 'fact' ? APP.factCheckHeading : 'A question about a new case';
  if (card.kind === 'again' && !card.h) return APP.againHeading(name(v.subjectOf(card)));
  if (card.kind === 'portrait' && !card.h) return APP.portraitHeading(name(v.subjectOf(card)));
  if (card.kind === 'lookalike' && !card.h) return APP.lookalikeHeading(...v.ledger(card.ledger).pair.map(name));
  return T.t(card.h).replace(/\*/g, '');
}

/* ---------- feedback, assembled in the fixed order of E5 ---------- */
// 2. the reason for a step, tied to the marked words. Where the step was shown and not asked, and the case has
//    no reason of its own for it, the reason is the answer's own "when" line from the key.
const stepReason = (c, code) => c.reason && c.reason[code] ? T.P(c.reason[code], c).join(' ') : `${cap(v.option(code, c.route[code][0]).when)}.`;
const stepLine = (c, code) => `${v.step(code).q} **${c.route[code].map(id => v.option(code, id).n).join('** or **')}.** ${stepReason(c, code)}`;
// 3. after a miss, ONE line on the answer the learner chose (the app's answerMiss): the case's own line, the tie-break form,
//    the nearest wrong name's reason, or a line from the key's own wording
const genericMiss = (code, chosenId, rightId) =>
  `You chose **${v.option(code, chosenId).n}**. Give that answer when ${v.option(code, chosenId).when}. This case shows something else: ${v.option(code, rightId).when.replace(/^the case shows /, '')}.`;
function answerMiss(c, code, chosenId, rightId) {
  const chosen = v.option(code, chosenId), right = v.option(code, rightId);
  if (c.miss && c.miss[chosenId]) return T.t(c.miss[chosenId], c);
  // the tie-break form is used only where the case really shows both answers (case.also), so it is never false
  const tie = (c.also || []).includes(chosenId) && v.tieBreak(code, chosenId, rightId);
  if (tie && tie.loser === chosenId) return `You chose **${chosen.n}**. This case does show that. It also shows ${tie.say}, and when a case shows both, the answer is **${right.n}**.`;
  if (c.not && (chosenId === c.not.outcome || (chosen.keeps.length === 1 && chosen.keeps[0] === c.not.outcome))) return T.t(c.not.why, c);
  return genericMiss(code, chosenId, rightId);
}
// the lines written for this case are printed; the ones built from the key's wording are summed up in one line
function ownChoiceLines(c, code, among, rightId) {
  const others = among.filter(id => id !== rightId);
  const written = others.filter(id => answerMiss(c, code, id, rightId) !== genericMiss(code, id, rightId));
  return [...written.map(id => `- If you chose **${v.option(code, id).n}**: ${answerMiss(c, code, id, rightId)}`),
    ...(written.length < others.length ? [`- ${written.length ? 'Any other answer' : 'Any wrong answer'}: one line on what that answer needs, and what this case shows instead.`] : [])];
}
// the app's nameMiss: the case's own line, else the nearest wrong name's reason, else a line from the two names' needs
function nameMissLines(c) {
  const own = Object.entries(c.miss || {}).filter(([id]) => v.isThing(id) && id !== notOf(c));
  return [...(c.not ? [`- If you chose ${T.o(notOf(c))}: ${T.t(c.not.why, c)}`] : []),
    ...own.map(([id, line]) => `- If you chose ${T.o(id)}: ${T.t(line, c)}`),
    `- ${c.not || own.length ? 'Any other name' : 'Any wrong name'}: one line on what that name needs, and what this case shows instead.`];
}

// a fact asked from memory (A12; the app's factHtml): the other rows of its own card are the choices
function renderFact(rowId) {
  const row = v.fact(rowId), rows = v.cards[row.card].rows;
  say(`**You are asked, from memory:** ${row.q}`, '', ...rows.map(r => `- ${r.a}`), '', '**Shown as soon as you answer**', '',
    `- The answer: **${row.a}**. Why: ${T.P(row.relates).join(' ')}`);
  rows.filter(r => r.id !== row.id).forEach(r => say(`  - If you chose ${r.a}: ${APP.factSwapped(`**${r.a}**`, r.q)}`));
  say(taughtOn(v.cards[row.card]));
}

// a problem to solve (the app's problemHtml and problemFeedback): 'last' shows the working up to its last step, 'whole' shows
// none, 'route' first asks the key's questions and the kind of problem, then the solving
function renderProblem(c, solve) {
  const steps = v.routeSteps(c), last = c.steps[c.steps.length - 1], right = c.answer.choices.find(x => x.id === c.answer.right);
  say(...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), '');
  if (solve === 'last') { say(`**${APP.workingLabel}** (all but the last step)`, ''); c.steps.slice(0, -1).forEach(st => say(`- ${T.t(st.does)}: ${T.t(st.working)}`)); say(''); }
  if (solve === 'route') say(`**You are asked first, in order:** ${steps.map(code => v.step(code).q).join(' → ')} → What kind of problem is it?`, '');
  say(`**You are asked:** ${solve === 'last' ? APP.solveLast(T.t(last.does)) : solve === 'whole' ? APP.solveWhole : APP.solveRoute}`, '',
    ...c.answer.choices.map(x => `- ${x.text}`), '', '**Shown as soon as you answer**', '', `- The answer: **${right.text}**${solve === 'route' ? `, and the kind of problem is ${T.o(c.outcome)}` : ''}.`,
    `- ${APP.workingLabel}:`, ...c.steps.map(st => `  - ${T.t(st.does)}: ${T.t(st.working)}`), ...T.P(c.why, c).map(p => `  ${p}`));
  c.answer.choices.filter(x => x.id !== right.id).forEach(x => say(`- If you chose ${x.text}: ${APP.slipLine(`**${x.text}**`, T.t(x.slip, c))}`));
  if (solve === 'route') {
    say('- If an answer on the way or the kind is missed, the reason for every question follows, then one line on each wrong choice:');
    steps.forEach(code => say(`  - ${stepLine(c, code)}`));
    nameMissLines(c).forEach(l => say('  ' + l));
    if (c.wouldChange) say(`- What would make it a different kind: ${T.t(c.wouldChange, c)}`);
  }
  say(taughtOn(cardsInOrder.find(k => k.kind === 'solved' && v.cases[k.problem] && v.cases[k.problem].outcome === c.outcome) || meetCardOf(c.outcome)));
}

function renderCheck(card) {
  if (card.ask.type === 'fact') return renderFact(card.ask.row);
  if (card.ask.type === 'solve') return renderProblem(v.cases[card.case], card.ask.solve);
  const c = v.cases[card.case], ask = card.ask;
  const afterThing = v.isThing(card.after);
  const teach = afterThing ? taughtOn(meetCardOf(card.after)) : taughtOnStep(card.after);
  const answer = v.option(ask.step, c.route[ask.step][0]);
  // E4: after a thing's own cards, the feedback joins the words in the case, the key's answer and the name.
  // In a gate unit the answer is the name, so there are two things to join, not three.
  const joined = v.isGate ? (afterThing && ask.type === 'phrase' ? ` The answer for this case is ${T.a(ask.step, answer.id)}.` : '')
    : afterThing && ask.type === 'phrase' ? ` The answer for this case is ${T.a(ask.step, answer.id)}, and the name is ${T.o(c.outcome)}.`
    : afterThing ? ` The name that goes with this answer is ${T.o(c.outcome)}.` : ` This answer leads to ${T.namesAt(answer.keeps.filter(id => v.taught.includes(id)), card.id)}.`;
  say(T.show(c), '');
  if (ask.type === 'phrase') {
    const right = c.segments.find(s => s.text.includes(ask.answer));
    say(`**You are asked:** ${T.t(ask.say, c)}`, '', 'The pieces you can tap:');   // the app fills tokens in the prompt
    c.segments.forEach((s, i) => say(`${i + 1}. “${s.text}”`));
    say('', '**Shown as soon as you tap**', '', `- If you are right: “Right: ‘${right.text}’.” ${stepReason(c, ask.step)}${joined}`,
      `- If you miss: “The words are ‘${right.text}’.” The same reason follows, and then a line about the piece you tapped:`);
    c.segments.filter(s => s !== right).forEach(s => say(`  - “${s.text}”: ${T.t(s.note, c)}`));
    say(teach);
    return;
  }
  const among = ask.type === 'step' ? allIds(ask.step) : ask.among;
  // E4: before the question's own card, an option check offers only the answers met so far and says so
  const prompt = namedSteps.has(ask.step) ? `${APP.keyAsks}** ${T.q(ask.step)}`
    : `${APP.keyAsks}** ${T.q(ask.step)} Which of the answers you have met so far fits this case?`;
  say(`**${prompt}`, '', ...optionLines(ask.step, among), '', '**Shown as soon as you answer**', '');
  say(`- If you are right: “Right: **${answer.n}.**” ${stepReason(c, ask.step)}${joined}`);
  say(`- If you miss: “The answer is **${answer.n}.**” The same reason follows, then one line on the answer you chose:`);
  ownChoiceLines(c, ask.step, among, answer.id).forEach(l => say('  ' + l));
  say(teach);
}

// a whole case of a branch unit, asked as the stage says: 'name' (answers shown), 'finish' (first answers shown), 'route' (nothing shown)
function renderCaseItem(c, ask) {
  const steps = v.routeSteps(c), last = steps[steps.length - 1];
  const shown = ask === 'name' ? steps : ask === 'finish' ? steps.slice(0, -1) : [];
  const asked = steps.filter(code => !shown.includes(code));
  say(T.show(c, shown), '');
  if (shown.length) { say('Shown to you, with the words that decide each answer marked:'); shown.forEach(code => say(`- ${v.step(code).q} **${v.option(code, c.route[code][0]).n}**`)); say(''); }
  say(asked.length ? `**You are asked, in order:** ${asked.map(code => v.step(code).q).join(' → ')} → Name it.` : '**You are asked:** Which name goes with these answers?', '');
  say('**Shown as soon as you answer**', '', `- If you are right: “Right: ${T.o(c.outcome)}.” ${stepLine(c, last)}`);
  say(asked.length ? '- If you miss the name or any question, you see the right name and the reason for every question you answered (the first wrong one first), then one line on each wrong choice:'
                   : '- If you miss, you see the right name and the reason, then one line on the name you chose:');
  asked.filter(code => code !== last).forEach(code => say(`  - ${stepLine(c, code)}`));
  if (asked.includes(last)) ownChoiceLines(c, last, allIds(last), c.route[last][0]).forEach(l => say('  ' + l));
  nameMissLines(c).forEach(l => say('  ' + l));
  if (asked.length) say('  - A right name with a wrong answer on the way is shown as “Right name, wrong answer on the way” and counts as a miss.');
  if (c.wouldChange) say(`- What would make it a different name: ${T.t(c.wouldChange, c)}`);
  say(taughtOn(meetCardOf(c.outcome)));
}

// a case of a gate unit: one question, whose answer is the name. `whole` is true in the route stage and for return cases,
// whose link goes to the kind's own card rather than to the question's.
function renderGateCase(c, whole) {
  const code = GATE, rightId = c.route[code][0], right = v.option(code, rightId);
  say(T.show(c), '', `**You are asked:** ${v.step(code).q}`, '', ...optionLines(code, allIds(code)), '', '**Shown as soon as you answer**', '');
  say(`- If you are right: “Right: **${right.n}.**” ${stepReason(c, code)}`);
  say(`- If you miss: “The answer is **${right.n}.**” The same reason follows, then one line on the answer you chose:`);
  ownChoiceLines(c, code, allIds(code), rightId).forEach(l => say('  ' + l));
  if (c.wouldChange) say(`- What would make it a different name: ${T.t(c.wouldChange, c)}`);
  say(taughtOn(whole ? meetCardOf(rightId) : questionCardOf(code)));
}

// the cases an { earlier: unit } item can draw: that unit's bank. The sample shown here is taken from the cases
// whose first answer leaves the part of the key this unit teaches, as the fixed closing sentence below says.
const ownBranch = v.isGate ? null : (v.key.outcomes.find(o => o.id === v.taught[0]) || {}).group;
let earlierSeen = 0;
function renderItem(item, rung) {
  if (typeof item === 'object' && item.tell) {
    const entry = v.ledger(item.tell), [x, y] = entry.pair;
    const options = unit.ledger.filter(l => l.pair.includes(x) || l.pair.includes(y));
    say(`**You are asked:** You cannot decide whether a case is ${T.name(x)} or ${T.name(y)}. Which question do you put to the case?`, '',
      ...options.map(l => `- ${T.t(l.test)}`), '', '**Shown as soon as you answer**', '',
      `- The answer is: “${T.t(entry.test)}” ${T.t(entry.rule)}`,
      ...options.filter(l => l !== entry).map(l => `- If you chose “${T.t(l.test)}”: that question separates ${T.names(l.pair)}.`),
      taughtOn(cardsInOrder.find(k => k.ledger === entry.id) || v.cards[entry.taughtIn]));
    return;
  }
  if (typeof item === 'object' && item.earlier) {
    const from = subject.units[item.earlier];
    // a sample: one case of each other family whose answer leads on to questions of its own (a family with no branch ends there)
    const bank = Object.values(v.earlier[item.earlier]).filter(c => c.route[GATE][0] !== ownBranch && v.key.branches[c.route[GATE][0]]);
    const picked = [...new Set(bank.map(c => c.route[GATE][0]))].map(f => bank.find(c => c.route[GATE][0] === f));
    const c = (picked.length ? picked : bank)[earlierSeen++ % (picked.length || bank.length)];
    if (c.kind === 'problem') { say(`*(Drawn by the app from the bank of Unit ${from ? from.tag : item.earlier}, unlabeled. This is a sample.)*`, ''); return renderProblem(c, 'route'); }
    say(`*(Drawn by the app from the bank of Unit ${from ? from.tag : item.earlier}: its drill and return cases, due ones first. The learner is not told which unit it is from. This is a sample.)*`, '', T.show(c), '', `**You are asked:** ${v.key.gate.q}`, '',
      ...optionLines(GATE, allIds(GATE)), '', '**Shown as soon as you answer**', '',
      `- If you are right: “Right: **${v.option(GATE, c.route[GATE][0]).n}.**” ${stepReason(c, GATE)}`,
      `- If you miss: “The answer is …”, the same reason, then one line on the answer you chose.`,
      `- Then, right or wrong: “${APP.stopsHere}”`);
    return;
  }
  if (typeof item === 'object' && item.fact) return renderFact(item.fact);
  if (typeof item === 'object' && item.separator) {
    // which of the unit's questions tells a pair apart (the app's separatorItem and separatorHtml)
    const entry = v.ledger(item.separator), [x, y] = entry.pair, codes = v.unit.teaches.steps;
    const answers = (code, id) => v.answersFor(code, id).map(o => o.n);
    const right = codes.find(code => !answers(code, x).some(a => answers(code, y).includes(a)));
    say(`**You are asked:** You cannot tell whether a case is ${T.o(x)} or ${T.o(y)}. Which question tells these two apart?`, '',
      ...codes.map(code => `- ${v.step(code).q}`), '', '**Shown as soon as you answer**', '',
      `- The answer is: **${v.step(right).q}** ${T.t(entry.rule)} ${T.o(x)}: ${answers(right, x).join(' or ')}. ${T.o(y)}: ${answers(right, y).join(' or ')}.`,
      ...codes.filter(code => code !== right).map(code => `- If you chose “${v.step(code).q}”: “You chose that question. Both of these give the answer ${answers(code, x).filter(a => answers(code, y).includes(a)).join(' and ')}, so that question does not separate them.”`),
      taughtOnStep(right));
    return;
  }
  const c = v.cases[typeof item === 'string' ? item : item.case];
  if (c.kind === 'reverse') {
    const own = v.subjectOf(c), right = c.options.find(o => o.voice === own);
    const stem = c.expect === 'hear' ? 'Which of these would you expect to hear?' : 'Which detail would you expect to find in the case?';
    say(`**You are asked:** This is ${T.name(own)}. ${stem}`, '', ...c.options.map(o => `- ${o.text}`), '', '**Shown as soon as you answer**', '',
      `- The answer is: ${right.text} ${T.t(c.why)}`, ...c.options.filter(o => o !== right).map(o => `- If you chose ${o.text.startsWith('"') ? o.text : `“${o.text}”`}: that belongs to ${T.name(o.voice)}.`),
      taughtOn(cardsInOrder.find(k => k.kind === 'portrait' && v.subjectOf(k) === own)));
    return;
  }
  if (c.use === 'claim') return renderClaim(c, false);
  if (c.kind === 'problem') return renderProblem(c, rung.ask === 'route' ? 'route' : rung.ask);
  if (v.isGate) return renderGateCase(c, rung.ask === 'route');
  if (typeof item === 'object' && item.step) {
    const code = item.step, right = c.route[code][0];
    say(T.show(c), '', `**You are asked:** ${v.step(code).q}`, '', ...optionLines(code, allIds(code)), '', '**Shown as soon as you answer**', '',
      `- If you are right: “Right: **${v.option(code, right).n}.**” ${stepReason(c, code)} This answer leads to ${T.names(v.option(code, right).keeps)}.`,
      '- If you miss: “The answer is …”, the same reason, then one line on the answer you chose:',
      ...ownChoiceLines(c, code, allIds(code), right).map(l => '  ' + l), taughtOnStep(code));
    return;
  }
  renderCaseItem(c, rung.ask);
}

function renderClaim(c, demo) {
  say(`> ${c.text}`, '');
  const needsLines = v.taught.map(id => `- ${cap(v.thing(id).needs)}`);
  const question = c.ask.type === 'missing'
    ? (v.isGate ? `The claim treats what it describes as ${T.name(c.ask.name)}. What would you need to see in the case before that answer could be given?`
                : `The claim uses the name ${T.o(c.ask.name)}. What would you need to see in the case before that name could be used?`)
    : `${v.step(c.ask.step).q} (asked of ${v.isGate ? 'what the claim describes' : 'the reasoning in the claim itself'})`;
  const choices = c.ask.type === 'missing' ? needsLines : optionLines(c.ask.step, allIds(c.ask.step));
  const answer = c.ask.type === 'missing' ? cap(v.thing(c.ask.name).needs) : v.option(c.ask.step, c.ask.answer).n;
  const otherLine = v.isGate ? '- If you chose another line: “That is what you must be able to point to for «the kind it belongs to», which is not the kind the claim treats this as.”'
    : '- If you chose another line: “That is what you must be able to point to for «the name it belongs to», which is not the name the claim uses.”';
  if (demo) say('*Worked for you. Nothing is asked.*', '', `**The question:** ${question}`, '', ...choices, '', `**The answer:** ${answer}.`);
  else say(`**You are asked:** ${question}`, '', ...choices, '', '**Shown as soon as you answer**', '', `- The answer is: **${answer}.**`,
    c.ask.type === 'missing' ? otherLine : `- If you chose another answer: one line on what that answer needs, and what the claim shows instead.`);
  say(`- The fault: ${T.t(c.fault)}`, `- The claim, put right (always the last thing shown): ${T.t(c.corrected)}`);
}

/* ---------- the stage instructions: the app's wording, the same in every unit (E6) ---------- */
const earlierCount = unit.drill.rungs.reduce((n, r) => n + flat(r).filter(i => typeof i === 'object' && i.earlier).length, 0);
const stageCount = unit.drill.rungs.length;
const firstShown = v.priorSteps.length === 1 ? 'The first answer is shown.' : 'The first answers are shown.';
// the app's SAY.stage, view.js
const STAGE = {
  name: 'The answers are shown. Give the name.',
  piece: 'One question at a time.',
  finish: `${firstShown} Answer the rest, then give the name.`,
  route: 'No help. Answer every question, then give the name.',
  claim: 'Each is something a person might say. Find its fault before it is shown.',
  last: 'Each problem is worked up to its last step. Do the last step.',
  whole: 'Work each problem out, then choose the answer.',
  fact: 'Answer each fact from memory.'
};
const stageText = ask => ask === 'route' && unit.kind === 'P' ? 'No help. Answer the questions, say what kind of problem it is, then solve it.'
  : ask === 'route' && v.isGate ? 'No help. Name each case.' : STAGE[ask];
// the app's SAY.drillIntro
const drillIntro = (v.isFacts ? 'The cards are out of view. Facts that are easy to swap sit next to each other on purpose. '
    : 'The cards are out of view, and every case is new. Cases that are easy to mix up sit next to each other on purpose. ')
  + (earlierCount ? `${cap(num(earlierCount))} of the cases come${earlierCount === 1 ? 's' : ''} from an earlier unit. ` : '')
  + 'Nothing is graded. What you miss comes back before the drill ends and on later days.';

/* ---------- the document ---------- */
const title = unit.title.fromKey ? v.option(...unit.title.fromKey.split('.')).n : unit.title.text;
const draft = unit.status === 'draft' ? ' · Draft: not yet read by a newcomer' : '';
say(`# Learner view: ${subject.meta.name}, Unit ${unit.tag}: ${title}`, '',
  `*${unit.subtitle}.* Unit revision ${unit.rev}, built to lesson standard ${unit.standard}, status: ${unit.status}.`, '',
  'This file is generated from the data files by `tools/render-learner-view.mjs`. It shows every screen in the order a learner meets it. In the app one card is on screen at a time and the learner moves on when ready.', '',
  '- **Bold text in quotation marks** is the subject’s own wording for its questions and answers, written once and printed everywhere. Bold names are the names, written once in the same place. Neither is typed anywhere else. "What you must be able to point to" lines and "How to tell them apart" lines are also printed from one place each (the subject’s questions and the pairs it compares).',
  v.isGate ? '- This is the subject’s first unit. It teaches the first question, and its names are that question’s answers: wherever a bold answer in quotation marks appears, it is also the name of a kind.' : null,
  '- ⟦Double brackets⟧ show the words the app marks in a case (one highlight style everywhere).',
  '- The line in italics under each heading is the app’s top bar. The line in square brackets after it is for reviewers and is not shown to the learner.',
  '- Headings, prompt wording and stage instructions that are the same in every unit are the app’s wording, not this unit’s.',
  '- "Shown as soon as you …" is what appears the moment the learner answers. Nothing is hidden behind a second tap the first time a case is met, or after a miss.',
  '- After every answer the app shows: right or wrong; the reason, quoting the marked words; after a miss, one line on the answer the learner chose; and a link to the card that taught it.', '');

let n = 0;
unit.parts.forEach((part, pi) => {
  say('---', '', `## Part ${pi + 1} of ${unit.parts.length}: ${part.title}`, '');
  const renderCard = id => {
    const card = v.cards[id]; n++;
    unit.ledger.filter(l => l.id === card.ledger || l.taughtIn === id).forEach(l => ledgerRead.add(l.id));
    const heading = cardHeading(card);
    headingOf[id] = heading;
    say(`### ${n}. ${heading}`, '', `*Unit ${unit.tag} · rev ${unit.rev}${draft} · Part ${pi + 1} of ${unit.parts.length} · Card ${n} of ${total}*`, '',
      `[reviewers only: card kind \`${card.kind}\`, id \`${card.id}\`]`, '');
    if (card.continues) {
      // a continuing card: its link, the case it names, then its prose (the app's continuedCard)
      const c = card.case ? v.cases[card.case] : null;
      say(T.t(card.link), '', ...(c ? [...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), ''] : []),
        ...Object.keys(card).filter(k => !['id', 'kind', 'continues', 'link', 'h', 'outcome', 'family', 'step', 'case'].includes(k)).flatMap(k => [...T.P(card[k], c).flatMap(x => [x, ''])]));
    } else if (card.kind === 'check') renderCheck(card); else say(...R[card.kind](card, ledgerRead));
    if (card.kind === 'question') namedSteps.add(card.step);
    say('');
  };
  part.cards.forEach(renderCard);
  if (part.drill) {
    say('### The drill', '', drillIntro, '', ...T.P(unit.drill.add), '');   // the app fills tokens here (lessonText().PP)
    let k = 0;
    const count = unit.drill.rungs.reduce((s, r) => s + flat(r).length, 0);
    unit.drill.rungs.forEach((rung, ri) => {
      say(`#### ${ri === stageCount - 1 ? 'Last stage' : `Stage ${ri + 1} of ${stageCount}`}. ${stageText(rung.ask)}`, '');
      if (rung.ask === 'name') say(`The names offered are the ${num(v.taught.length)} this unit teaches: ${taughtNames}.`, '');
      if (!v.isGate && (rung.ask === 'finish' || rung.ask === 'route')) say(`Each question is shown with all of its answers, in order, and the names offered are the ${num(v.taught.length)} this unit teaches.`, '');
      if (v.isGate && rung.ask !== 'claim') say(`The question is shown with all ${num(v.taught.length)} of its answers, in order.`, '');
      if (rung.demo) { say('**A claim worked for you**', ''); renderClaim(v.cases[rung.demo], true); say(''); }
      flat(rung).forEach(item => { k++; say(`**Drill item ${k} of ${count}**`, ''); renderItem(item, rung); say(''); });
    });
    say(`**When the drill ends.** The learner sees their own results: first-try accuracy for each stage, ${v.isGate ? 'mixed cases beside single questions, the pair of kinds' : 'whole cases beside single questions, the pair of names'} they mixed up most often, and what will come back and when. Anything missed was asked again before the drill ended. ${APP.stakes}`, '');
    (part.close || []).forEach(renderCard);
  }
  const next = unit.parts[pi + 1];
  say(next ? `*End of part ${pi + 1}. You can stop here; your place is kept. Next: part ${pi + 2}, ${next.title}.*`
           : `*End of Unit ${unit.tag}. Every name comes back on later days with a new case: what you missed first, in a day or two, and the rest a little later.*`, '');
});

say('---', '', '## After the unit: what comes back on later days', '',
  `A name that is due returns as a case the learner has not seen, next to a case of the name they most often confuse it with. ${v.isGate ? 'Each is asked the first question, with the full feedback of the last case stage.' : 'Each is run as a whole case: every question, then the name.'} These are the fresh cases held back for that purpose: three for each name, one for each scheduled return. The first return is about two days after the drill, the next about a week after that, the next about three and a half weeks later.`, '');
unit.drill.returns.forEach((id, i) => {
  say(`**Return case ${i + 1} of ${unit.drill.returns.length}**`, '');
  if (v.isGate) renderGateCase(v.cases[id], true); else if (v.cases[id].kind === 'problem') renderProblem(v.cases[id], 'route'); else renderCaseItem(v.cases[id], 'route');
  say('');
});

const file = new URL(`../../docs/learner-view/${SUBJECT}-${UNIT}.md`, import.meta.url);
await mkdir(new URL('.', file), { recursive: true });
await writeFile(file, out.join('\n') + '\n');
console.log(`${file} written: ${n} cards, ${unit.drill.rungs.reduce((s, r) => s + flat(r).length, 0)} drill items, ${unit.drill.returns.length} return cases, ${out.join(' ').split(/\s+/).length} words`);
