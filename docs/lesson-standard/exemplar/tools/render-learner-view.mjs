// Writes learner-view.md: the whole unit as plain text, in the order a learner meets it.
// It is generated from the data files, so the view cannot say anything the data does not.
// Feedback is assembled the way the lesson standard's E5 says the app assembles it, and every instruction that is
// the same in all units (stage instructions, prompt stems, the stakes line) is the app's wording, not the unit's.
// Run: node tools/render-learner-view.mjs
import { writeFile } from 'node:fs/promises';
import { loadSubject, unitView, paras, cuesOf } from './load.mjs';
import { makeText, makeCardRenderers, APP, cap, num } from './render-cards.mjs';

const SUBJECT = 'psychology', UNIT = 'u2';
const subject = await loadSubject(SUBJECT);
const v = unitView(subject, UNIT);
const T = makeText(v);
const { R, tieLine } = makeCardRenderers(v, T);
const unit = v.unit;
const out = [];
const say = (...lines) => out.push(...lines.filter(l => l !== null && l !== undefined));

const optionLines = (code, ids) => ids.map(id => `- ${v.option(code, id).n}`);
const allIds = code => v.step(code).options.map(o => o.id);
const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
const cardsInOrder = cardOrder.map(id => v.cards[id]);
const total = cardOrder.length;
const flat = rung => rung.items.flat();
const taughtNames = unit.teaches.outcomes.map(id => v.outcome(id).n).join(' / ');

/* ---------- what has been taught so far (walks with the cards) ---------- */
const namedSteps = new Set(v.assumedSteps.map(s => s.code));  // questions whose own card has been read
const ledgerRead = new Set();                                  // look-alike entries whose card has been read
const headingOf = {};                                          // card id -> heading, for "Taught on"
const meetCardOf = o => cardsInOrder.find(c => c.kind === 'meet' && c.outcome === o);
const questionCardOf = code => cardsInOrder.find(c => c.kind === 'question' && c.step === code);
const taughtOn = card => card ? `- Taught on: “${headingOf[card.id] || cardHeading(card)}” (one tap opens the card).` : null;
const taughtOnStep = code => taughtOn(questionCardOf(code)) || '- Taught in Unit One (one tap opens the card).';

function cardHeading(card) {
  const name = id => v.outcome(id).n;
  if (card.kind === 'meet') return cap(v.outcome(card.outcome).plain);
  if (card.kind === 'check') return 'A question about a new case';
  if (card.kind === 'again' && !card.h) return APP.againHeading(name(card.outcome));
  if (card.kind === 'portrait' && !card.h) return APP.portraitHeading(name(card.outcome));
  if (card.kind === 'lookalike' && !card.h) return APP.lookalikeHeading(...v.ledger(card.ledger).pair.map(name));
  return T.t(card.h).replace(/\*/g, '');
}

/* ---------- feedback, assembled in the fixed order of E5 ---------- */
// 2. the reason for a step, tied to the marked words. Where the step was shown and not asked, and the case has
//    no reason of its own for it, the reason is the answer's own "when" line from the key.
const stepReason = (c, code) => c.reason && c.reason[code] ? T.P(c.reason[code], c).join(' ') : `${cap(v.option(code, c.route[code][0]).when)}.`;
const stepLine = (c, code) => `${v.step(code).q} **${c.route[code].map(id => v.option(code, id).n).join('** or **')}.** ${stepReason(c, code)}`;
// 3. why the nearest wrong name fails (shown after a right answer too)
const notLine = c => c.not ? `- Why not ${T.o(c.not.outcome)}: ${T.t(c.not.why, c)}` : null;
// 4. the line about the learner's own choice, generated from the key
function answerMiss(c, code, chosenId, rightId) {
  const chosen = v.option(code, chosenId), right = v.option(code, rightId);
  // the tie-break form is used only where the case really shows both answers (case.also), so it is never false
  const tie = (c.also || []).includes(chosenId) && v.tieBreak(code, chosenId, rightId);
  if (tie && tie.loser === chosenId) return `You chose **${chosen.n}**. This case does show that. It also shows ${tie.say}, and when a case shows both, the key’s answer is **${right.n}**.`;
  return `You chose **${chosen.n}**. Give that answer when ${chosen.when}. This case shows something else: ${right.when}.`;
}
const NAME_MISS = '“«The name you chose» needs «what the key says you must be able to point to for it». This case shows something else: «the same line for the right name».”';
function ownChoiceLines(c, code) {
  const lines = [], rightId = c.route[code][0];
  const near = c.not && v.step(code).options.find(o => o.keeps.length === 1 && o.keeps[0] === c.not.outcome && o.id !== rightId);
  if (near) lines.push(`- If you chose **${near.n}**: ` + ((c.also || []).includes(near.id) ? answerMiss(c, code, near.id, rightId) : T.t(c.not.why, c)));
  lines.push(`- If you chose ${near ? 'any other' : 'another'} answer, the line is built from the key: “You chose «that answer». Give that answer when «what the key says a case must show for it». This case shows something else: «what the key says a case must show for the right answer».”`);
  return lines;
}
function nameMissLines(c) {
  const lines = [];
  const entry = c.not && v.ledgerFor(c.outcome, c.not.outcome);
  if (entry && ledgerRead.has(entry.id)) lines.push(`- If you chose ${T.o(c.not.outcome)}, the look-alike card’s lines follow: ${T.t(entry.shared)} ${T.t(entry.rule)} ${T.t(entry.test)}`);
  lines.push(`- If you chose another name, the line is built from the key: ${NAME_MISS}`);
  return lines;
}
const echoLine = c => c.echo ? `- This case may have brought back *${v.cases[c.echo].name}*, which was ${T.o(v.cases[c.echo].outcome)}. When a likeness and the key disagree, go by the words that answer the key’s question.` : null;

function renderCheck(card) {
  const c = v.cases[card.case], ask = card.ask;
  const afterOutcome = v.key.outcomes.some(o => o.id === card.after);
  const teach = afterOutcome ? taughtOn(meetCardOf(card.after)) : taughtOnStep(card.after);
  const answer = v.option(ask.step, c.route[ask.step][0]);
  const joined = afterOutcome && ask.type === 'phrase' ? ` The key’s answer for this case is ${T.a(ask.step, answer.id)}, and the name is ${T.o(c.outcome)}.`
    : afterOutcome ? ` The name that goes with this answer is ${T.o(c.outcome)}.` : ` This answer leads to ${T.names(answer.keeps)}.`;
  say(T.show(c), '');
  if (ask.type === 'phrase') {
    const right = c.segments.find(s => s.text.includes(ask.answer));
    say(`**You are asked:** ${ask.say}`, '', 'The pieces you can tap:');
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
  say(`- If you miss: “The answer is **${answer.n}.**” The same reason follows, and then a line about the answer you chose:`);
  among.filter(id => id !== answer.id).forEach(id => {
    const o = v.option(ask.step, id);
    const neighbour = c.not && o.keeps.length === 1 && o.keeps[0] === c.not.outcome && !(c.also || []).includes(id);
    say(`  - If you chose **${o.n}**: ` + (c.miss && c.miss[id] ? T.t(c.miss[id], c) : neighbour ? T.t(c.not.why, c) : answerMiss(c, ask.step, id, answer.id).replace(/^You chose \*\*.*?\*\*\. /, '')));
  });
  say(teach);
}

// a whole case, asked as the stage says: 'name' (answers shown), 'finish' (first answers shown), 'route' (nothing shown)
function renderCaseItem(c, ask) {
  const steps = v.routeSteps(c), last = steps[steps.length - 1];
  const shown = ask === 'name' ? steps : ask === 'finish' ? steps.slice(0, -1) : [];
  const asked = steps.filter(code => !shown.includes(code));
  say(T.show(c, shown), '');
  if (shown.length) { say('Shown to you, with the words that decide each answer marked:'); shown.forEach(code => say(`- ${v.step(code).q} **${v.option(code, c.route[code][0]).n}**`)); say(''); }
  say(asked.length ? `**You are asked, in order:** ${asked.map(code => v.step(code).q).join(' → ')} → Name it.` : '**You are asked:** Which name goes with these answers?', '');
  say('**Shown as soon as you answer**', '', `- If you are right: “Right: ${T.o(c.outcome)}.” ${stepLine(c, last)}`);
  if (notLine(c)) say('  ' + notLine(c));
  say(asked.length ? '- If you miss the name or any question, you see the right name, the reason for every question you answered (the first wrong one first), the “why not” line above, and then:'
                   : '- If you miss, you see the right name, the reason and the “why not” line above, and then:');
  asked.filter(code => code !== last).forEach(code => say(`  - ${stepLine(c, code)}`));
  if (asked.includes(last)) ownChoiceLines(c, last).forEach(l => say('  ' + l));
  nameMissLines(c).forEach(l => say('  ' + l));
  if (asked.length) say('  - A right name with a wrong answer on the way is shown as “Right name, wrong route” and counts as a miss.');
  say(echoLine(c));
  if (c.wouldChange) say(`- What would make it a different name: ${T.t(c.wouldChange, c)}`);
  say(taughtOn(meetCardOf(c.outcome)));
}

let earlierSeen = 0;
function renderItem(item, rung) {
  if (typeof item === 'object' && item.tell) {
    const entry = v.ledger(item.tell), [x, y] = entry.pair;
    const options = unit.ledger.filter(l => l.pair.includes(x) || l.pair.includes(y));
    say(`**You are asked:** You cannot decide whether a case is ${T.o(x)} or ${T.o(y)}. Which question do you put to the case?`, '',
      ...options.map(l => `- ${T.t(l.test)}`), '', '**Shown as soon as you answer**', '',
      `- The answer is: “${T.t(entry.test)}” ${T.t(entry.shared)} ${T.t(entry.rule)}` + (tieLine(entry) ? ` ${tieLine(entry)}` : ''),
      ...options.filter(l => l !== entry).map(l => `- If you chose “${T.t(l.test)}”: that question separates ${T.names(l.pair)}.`),
      taughtOn(cardsInOrder.find(k => k.ledger === entry.id) || v.cards[entry.taughtIn]));
    return;
  }
  if (typeof item === 'object' && item.earlier) {
    const bank = Object.values(v.earlier[item.earlier]), c = bank[earlierSeen++ % bank.length];
    say(`*(Drawn by the app from Unit One’s cases, due ones first. The learner is not told which unit it is from. This is a sample.)*`, '', T.show(c), '', `**You are asked:** ${v.key.gate.q}`, '',
      ...optionLines('D1', allIds('D1')), '', '**Shown as soon as you answer**', '',
      `- If you are right: “Right: **${v.option('D1', c.route.D1[0]).n}.**” ${stepReason(c, 'D1')}`,
      `- If you miss: “The answer is …”, the same reason, and then the line built from the key for the answer you chose.`,
      '- Then, right or wrong: “This case leaves the part of the key you have been taught. The questions that follow this answer come in a part of the course you have not reached, so the case stops here.”');
    return;
  }
  const c = v.cases[typeof item === 'string' ? item : item.case];
  if (c.kind === 'reverse') {
    const right = c.options.find(o => o.voice === c.outcome);
    const stem = c.expect === 'hear' ? 'Which of these would you expect to hear?' : 'Which detail would you expect to find in the case?';
    say(`**You are asked:** This is ${T.o(c.outcome)}. ${stem}`, '', ...c.options.map(o => `- ${o.text}`), '', '**Shown as soon as you answer**', '',
      `- The answer is: ${right.text} ${T.t(c.why)}`, ...c.options.filter(o => o !== right).map(o => `- If you chose ${o.text.startsWith('"') ? o.text : `“${o.text}”`}: that belongs to ${T.o(o.voice)}.`),
      taughtOn(cardsInOrder.find(k => k.kind === 'portrait' && k.outcome === c.outcome)));
    return;
  }
  if (c.use === 'claim') return renderClaim(c, false);
  if (typeof item === 'object' && item.step) {
    const code = item.step, right = c.route[code][0];
    say(T.show(c), '', `**You are asked:** ${v.step(code).q}`, '', ...optionLines(code, allIds(code)), '', '**Shown as soon as you answer**', '',
      `- If you are right: “Right: **${v.option(code, right).n}.**” ${stepReason(c, code)} This answer leads to ${T.names(v.option(code, right).keeps)}.`,
      '- If you miss: “The answer is …”, the same reason, and then a line about the answer you chose:',
      ...ownChoiceLines(c, code).map(l => '  ' + l), taughtOnStep(code));
    return;
  }
  renderCaseItem(c, rung.ask);
}

function renderClaim(c, demo) {
  say(`> ${c.text}`, '');
  const needsLines = unit.teaches.outcomes.map(id => `- ${cap(v.outcome(id).needs)}`);
  const question = c.ask.type === 'missing'
    ? `The claim uses the name ${T.o(c.ask.name)}. What would you need to see in the case before that name could be used?`
    : `${v.step(c.ask.step).q} (asked of the reasoning in the claim itself)`;
  const choices = c.ask.type === 'missing' ? needsLines : optionLines(c.ask.step, allIds(c.ask.step));
  const answer = c.ask.type === 'missing' ? cap(v.outcome(c.ask.name).needs) : v.option(c.ask.step, c.ask.answer).n;
  if (demo) say('*Worked for you. Nothing is asked.*', '', `**The question:** ${question}`, '', ...choices, '', `**The answer:** ${answer}.`);
  else say(`**You are asked:** ${question}`, '', ...choices, '', '**Shown as soon as you answer**', '', `- The answer is: **${answer}.**`,
    c.ask.type === 'missing' ? '- If you chose another line: “That is what you must be able to point to for «the name it belongs to», which is not the name the claim uses.”'
                             : `- If you chose another answer, the line is built from the key, as for any other question.`);
  say(`- The fault: ${T.t(c.fault)}`, `- The claim, put right (always the last thing shown): ${T.t(c.corrected)}`);
}

/* ---------- the stage instructions: the app's wording, the same in every unit (E6) ---------- */
const earlierCount = unit.drill.rungs.reduce((n, r) => n + flat(r).filter(i => typeof i === 'object' && i.earlier).length, 0);
const stageCount = unit.drill.rungs.length;
const firstShown = v.assumedSteps.length === 1 ? 'The first answer is shown.' : 'The first answers are shown.';
const STAGE = {
  name: 'The key’s answers are shown for each case. Give the name that goes with them. This stage practises one thing: which name goes with which answer.',
  piece: 'One question at a time.',
  finish: `${firstShown} Answer the rest, then give the name. From here on your route is marked as well as the name: a right name reached by a wrong answer on the way counts as a miss.`,
  route: 'No help. Answer every question in the key’s order, then give the name.',
  claim: 'Each of these is something a person might say that uses one of this unit’s names, or reasons in one of its ways. Each has a fault. The first is worked for you. For the rest, answer before the fault is shown.'
};
const drillIntro = `The cards are out of view from here, and every case is new. The drill has ${num(stageCount)} stages. Cases that are easy to mix up are placed next to each other on purpose. This is meant to feel harder than the questions between the cards: telling look-alikes apart side by side is what makes the difference stick. `
  + (earlierCount ? `${cap(num(earlierCount))} of the cases come from an earlier unit, without being labelled. ` : '')
  + `${APP.stakes} What you miss is asked again before the drill ends, and every name comes back on later days with a new case.`;

/* ---------- the document ---------- */
const title = v.option(...unit.title.fromKey.split('.')).n;
const draft = unit.status === 'draft' ? ' · Draft: not yet read by a newcomer' : '';
say(`# Learner view: ${subject.meta.name}, Unit ${unit.tag}: ${title}`, '',
  `*${unit.subtitle}.* Unit revision ${unit.rev}, built to lesson standard ${unit.standard}, status: ${unit.status}.`, '',
  'This file is generated from the data files by `tools/render-learner-view.mjs`. It shows every screen in the order a learner meets it. In the app one card is on screen at a time and the learner moves on when ready.', '',
  '- **Bold text in quotation marks** is the key’s own wording, printed from `key.js`. Bold names are the outcome names from the same file. Neither is typed anywhere else. "What you must be able to point to" lines and "How to tell them apart" lines are also printed from one place each (the key and the look-alike ledger).',
  '- ⟦Double brackets⟧ show the words the app marks in a case (one highlight style everywhere).',
  '- The line in italics under each heading is the app’s top bar. The line in square brackets after it is for reviewers and is not shown to the learner.',
  '- Headings, prompt wording and stage instructions that are the same in every unit are the app’s wording, not this unit’s.',
  '- "Shown as soon as you …" is what appears the moment the learner answers. Nothing is hidden behind a second tap the first time a case is met, or after a miss.',
  '- After every answer the app shows, in this order: the right answer in the key’s words; the reason, quoting the marked words; for a name, why the nearest wrong name fails; after a miss, a line about the answer the learner chose; and last a link to the card that taught it. Where a line about the learner’s own choice is not written for the case, the app builds it from the key, and this file says so in place of repeating it.', '');

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
    if (card.kind === 'check') renderCheck(card); else say(...R[card.kind](card, ledgerRead));
    if (card.kind === 'question') namedSteps.add(card.step);
    say('');
  };
  part.cards.forEach(renderCard);
  if (part.drill) {
    say('### The drill', '', drillIntro, '', ...paras(unit.drill.add), '');
    let k = 0;
    const count = unit.drill.rungs.reduce((s, r) => s + flat(r).length, 0);
    unit.drill.rungs.forEach((rung, ri) => {
      say(`#### ${ri === stageCount - 1 ? 'Last stage' : `Stage ${ri + 1} of ${stageCount}`}. ${STAGE[rung.ask]}`, '');
      if (rung.ask === 'name') say(`The names offered are the ${num(unit.teaches.outcomes.length)} this unit teaches: ${taughtNames}.`, '');
      if (rung.ask === 'finish' || rung.ask === 'route') say(`Each question is shown with all of its answers from the key, in the key’s order, and the names offered are the ${num(unit.teaches.outcomes.length)} this unit teaches.`, '');
      if (rung.demo) { say('**A claim worked for you**', ''); renderClaim(v.cases[rung.demo], true); say(''); }
      flat(rung).forEach(item => { k++; say(`**Drill item ${k} of ${count}**`, ''); renderItem(item, rung); say(''); });
    });
    say(`**When the drill ends.** The learner sees their own results: first-try accuracy for each stage, whole routes beside single questions, the pair of names they mixed up most often, and what will come back and when. Anything missed was asked again before the drill ended. ${APP.stakes}`, '');
    (part.close || []).forEach(renderCard);
  }
  const next = unit.parts[pi + 1];
  say(next ? `*End of part ${pi + 1}. You can stop here; your place is kept. Next: part ${pi + 2}, ${next.title}.*`
           : `*End of Unit ${unit.tag}. Every name comes back on later days with a new case: what you missed first, in a day or two, and the rest a little later.*`, '');
});

say('---', '', '## After the unit: what comes back on later days', '',
  'A name that is due returns as a case the learner has not seen, next to a case of the name they most often confuse it with. Each is run as a whole route. These are the fresh cases held back for that purpose: three for each name, one for each scheduled return. The first return is about two days after the drill, the next about a week after that, the next about three and a half weeks later.', '');
unit.drill.returns.forEach((id, i) => { say(`**Return case ${i + 1} of ${unit.drill.returns.length}**`, ''); renderCaseItem(v.cases[id], 'route'); say(''); });

await writeFile(new URL('../learner-view.md', import.meta.url), out.join('\n') + '\n');
console.log(`learner-view.md written: ${n} cards, ${unit.drill.rungs.reduce((s, r) => s + flat(r).length, 0)} drill items, ${unit.drill.returns.length} return cases, ${out.join(' ').split(/\s+/).length} words`);
