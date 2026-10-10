// Renders each card kind as the plain text a learner reads. Used by render-learner-view.mjs.
// Everything in bold quotes comes from key.js; nothing here types key wording.
// APP holds the wording the app owns (lesson standard E2, E3, E6, K9): it is the same in every unit, so no unit types it.
// A gate unit (A15) is rendered by the same functions. Where its screens differ from a branch unit's (the answer
// is the name, so there is no separate name to give or to list), the app's wording for that is in APP too.
import { TOKEN, paras, cuesOf } from './load.mjs';

export const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const list = items => items.map(x => `- ${x}`);
const joinNames = names => names.length < 2 ? names.join('') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
const NUMBER = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
export const num = n => NUMBER[n] || String(n);
const blocks = arr => arr.flatMap(p => [p, '']);

export const APP = {
  stakes: 'Nothing here is graded. A miss only decides what comes back.',
  route: 'Two things are marked separately: the name you give a story, and your answers to the questions on the way to it.',
  howTaught: example => `Each starts from a real ${example}. After each one you answer a quick question, and the reason is shown right away.`,
  spotIt: 'How to spot it',
  lookFor: 'What to look for',
  keyAsks: 'The question:',
  aka: (akas, name) => `You may also hear this called ${akas.map(x => `“${x}”`).join(' or ')}. ${akas.length > 1 ? 'Those words mean' : 'That means'} the same thing here, and from now on this unit uses one name: ${name}.`,
  againHeading: (name, ex) => `${name}: the same thing in a different ${ex}`,
  portraitHeading: name => `${name}: what it is like`,
  lookalikeHeading: (x, y) => `${x} or ${y}: telling them apart`,
  againStem: (firstName, firstCue, ex) => `In *${firstName}*, these words show it: ${firstCue}${/[.?!]”$/.test(firstCue) ? '' : '.'} Which words show the same thing in this ${ex}? Tap them.`,
  exceptionStem: (looks, is, ex) => `This looks like ${looks}. Before you read why it is ${is}, tap the words in the ${ex} that settle it.`,
  whichStem: (answer, ex) => `Which ${ex} gives the answer ${answer}?`,
  holdStem: (x, y) => `Why is this ${x} and not ${y}? All of these are true. Choose the one that settles it.`,
  holdPick: 'All of these are true. Choose the one that settles it.',
  tellApart: 'How to tell them apart',
  tieBreak: (loser, say, winner, ex) => `When a ${ex} shows both ${loser} and ${say}, the answer is ${winner}.`,
  secondLook: ex => `Does it look like a ${ex} you know?`,
  ask: 'The question to ask when you spot it',
  act: 'What to do when you meet it',
  stopsHere: ex => `The rest of this ${ex} comes in a later unit.`,
  // procedure units (A12): the app's wording, view.js SAY
  solvedProblem: 'The problem', solvedResult: 'The result', workingLabel: 'The working, step by step',
  solvedStem: 'This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.',
  solveLast: does => `The working is shown up to the last step. The last step is yours: ${does}. Choose what the problem comes to.`,
  solveWhole: 'The whole problem is yours. Work it out, then choose the answer.',
  solveRoute: 'Now work it out that way and choose the answer.',
  slipLine: (text, slip) => `You chose ${text}. That is the answer you get when ${slip}`,
  transferNote: 'One line is enough. It is kept on this device only and is never marked.',
  // fact units (A12): the app's wording, view.js SAY
  factsToHold: 'This unit is facts to hold, not a skill to apply. There are no questions to work through. Each fact is something you will be asked from memory, and it comes back on later days.',
  factsCount: (facts, groups) => `The unit holds ${num(facts)} fact${facts === 1 ? '' : 's'}, in ${num(groups)} group${groups === 1 ? '' : 's'}:`,
  howTaughtFacts: 'Each group starts with a story, then the idea in plain words, then the facts. After each fact you are asked it from memory, and the answer and how it fits are shown right away.',
  factCheckHeading: 'A question from memory',
  whichFactStem: answer => `Which of these two facts has the answer ${answer}?`,
  factColumns: ['The fact', 'The answer'],
  factRelates: 'How each fact fits the idea',
  factSwapped: (chosenAnswer, otherQ) => `You chose ${chosenAnswer}. That is the answer to a different fact: ${otherQ}`
};

export function makeText(v) {
  const o = id => `**${v.outcome(id).n}**`;
  const q = code => `**“${v.step(code).q}”**`;
  const a = (code, id) => `**“${v.option(code, id).n}”**`;
  // the name of a thing this unit teaches: an outcome's name, or in a gate unit the family's answer
  const name = id => v.isGate ? a(v.gate.code, id) : o(id);
  const quoteCues = (c, step) => cuesOf(c, step).map(x => `“${x}”`).join(' and ');
  // fill tokens; `c` is the case whose marked words {cue:STEP} refers to
  // every prose field is Text: one paragraph or several (S4); several are joined into one line here
  const t = (str, c) => Array.isArray(str) ? str.map(p => t(p, c)).join(' ') : str.replace(TOKEN, (_, kind, ref) => {
    if (kind === 'o') return o(ref);
    if (kind === 'plain' || kind === 'needs') return v.lineOf(kind, ref);
    if (kind === 'q') return q(ref);
    if (kind === 'a') { const [code, id] = ref.split('.'); return a(code, id); }
    if (kind === 'when') { const [code, id] = ref.split('.'); return v.option(code, id).when; }
    if (kind === 't') return `*${v.term(ref).n}*`;
    if (kind === 'f') return `**${v.fact(ref).a}**`;   // a fact's answer (fact units, A12)
    if (kind === 'means') return v.term(ref).means;
    if (kind === 'test') return t(v.ledger(ref).test, c);   // a test may itself print a line of the key
    if (!c || !cuesOf(c, ref).length) throw new Error(`{cue:${ref}} has no story or no marked words`);
    return quoteCues(c, ref);
  });
  // the case as shown, with the deciding words for the given steps marked
  // overlapping or nested marked phrases are merged into one mark, as the app's marker does
  const show = (c, markSteps = []) => {
    const ranges = [...new Set(markSteps.flatMap(s => cuesOf(c, s)))].map(cue => {
      const at = c.text.indexOf(cue);
      if (at < 0) throw new Error(`story ${c.id}: marked words not in text: ${cue}`);
      return [at, at + cue.length];
    }).sort((x, y) => x[0] - y[0]);
    const merged = ranges.reduce((out, r) => out.length && r[0] <= out[out.length - 1][1]
      ? [...out.slice(0, -1), [out[out.length - 1][0], Math.max(out[out.length - 1][1], r[1])]] : [...out, r], []);
    const text = merged.reduceRight((t, [a, b]) => `${t.slice(0, a)}⟦${t.slice(a, b)}⟧${t.slice(b)}`, c.text);
    return `> ${text}`;
  };
  const P = (text, c) => paras(text).map(p => t(p, c));
  const names = ids => joinNames(ids.map(name));
  // a name not met by this card is shown by its plain words (the app's namesAt)
  const namesAt = (ids, cardId) => joinNames(ids.map(id => v.metBefore(id, cardId) ? name(id) : v.thing(id).plain));
  return { o, q, a, t, show, P, names, namesAt, name, quoteCues };
}

// "Tap the words": the pieces, the right one, and the note for each other piece.
function tapPrompt(T, c, stem, answer) {
  const right = c.segments.find(s => s.text.includes(answer));
  if (!right) throw new Error(`story ${c.id}: no tappable piece holds the answer "${answer}"`);
  const out = [`**You are asked:** ${stem}`, '', 'The pieces you can tap:'];
  c.segments.forEach((s, i) => out.push(`${i + 1}. “${s.text}”`));
  out.push('', `**Shown as soon as you tap.** The words are “${right.text}”.`);
  c.segments.filter(s => s !== right).forEach(s => out.push(`- If you tapped “${s.text}”: ${T.t(s.note, c)}`));
  return out;
}

// audio: the renderer of a card's sound block (render-audio.mjs); it prints nothing for a card with none
export function makeCardRenderers(v, T, audio = () => []) {
  const C = id => v.cases[id] || (() => { throw new Error(`unknown story ${id}`); })();
  const taught = v.taught;
  const plainName = id => v.thing(id).n;
  const R = {};
  // the learner's word for an example (the app's SAY.example)
  const EX = v.example;
  // numbered steps (the app's T.S): a bold action, then one short sentence of why
  const isSteps = body => Array.isArray(body) && body.length > 0 && typeof body[0] === 'object';
  const stepsOut = (steps, c) => steps.map((st, i) => `${i + 1}. **${T.t(st.do, c).replace(/\*\*/g, '')}** ${T.t(st.why, c)}`);
  const bodyOut = (body, c) => isSteps(body) ? [...stepsOut(body, c), ''] : blocks(T.P(body, c));

  // the key's own tie-break for a ledger pair, if it has one
  const tieLine = entry => {
    const [x, y] = entry.pair.map(id => v.answersFor(entry.step, id)[0].id);
    const tie = v.tieBreak(entry.step, x, y);
    return tie ? APP.tieBreak(T.a(entry.step, tie.loser), tie.say, T.a(entry.step, tie.winner), EX) : null;
  };
  // the test is printed on every card of the pair; the side-by-side table once, on the first; the key's tie-break on the
  // exception card that teaches it (and from then on wherever the pair's test is listed)
  const tabled = new Set();
  const tellApart = (entry, withTie) => {
    const out = [`**${APP.tellApart}**`, '', T.t(entry.test), '', ...(withTie && tieLine(entry) ? [tieLine(entry), ''] : [])];
    return out;   // two names get no side-by-side table (the app's tellApart): the two stories and the test show it
  };

  // A fact unit's first card: what the unit is, and the groups of facts it holds (A12; the app's factOrient)
  const factOrient = card => {
    const groups = Object.values(v.cards).filter(k => k.kind === 'concept');
    return [...blocks(T.P(card.canDo)), ...blocks(T.P(card.everyday)), '**What this unit is**', '', APP.factsToHold, '',
      `**${APP.factsCount(taught.length, groups.length)}**`, '', ...list(groups.map(k => T.t(k.h))), '',
      `The unit has ${num(v.unit.parts.length)} part${v.unit.parts.length === 1 ? '' : 's'}, and you can stop after any of them.`, '',
      ...v.unit.parts.map((p, i) => `${i + 1}. ${p.title}`), '', ...blocks(T.P(card.add)), `${APP.howTaughtFacts} ${APP.stakes}`];
  };
  // a worked example with real numbers: the working stops at the step that carries the idea until the learner chooses (the app's CARD.solved)
  R.solved = card => {
    const c = C(card.problem), hold = card.hold, p = hold.prompt;
    const step = st => `- ${T.t(st.does)}: ${T.t(st.working)}`;
    const out = [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), `**${APP.solvedProblem}**`, '', T.show(c), '', `**${APP.workingLabel}**`, ''];
    card.steps.slice(0, hold.step + 1).forEach((st, i) => out.push(step(st), ...(i === hold.step ? [] : ['', ...blocks(T.P(st.why, c))])));
    out.push('', `**You are asked:** ${APP.solvedStem}`, '', ...p.choices.map(x => `- ${T.t(x.text, c)}`), '',
      '**Shown as soon as you answer**', '', `- The one that explains it: ${T.t(p.choices.find(x => x.id === p.answer).text, c)}`,
      ...p.choices.filter(x => x.id !== p.answer && x.note).map(x => `  - If you chose “${T.t(x.text, c)}”: ${T.t(x.note, c)}`), '', ...blocks(T.P(hold.reason, c)));
    card.steps.slice(hold.step + 1).forEach(st => out.push(step(st), '', ...blocks(T.P(st.why, c))));
    out.push(`**${APP.solvedResult}**`, '', ...blocks(T.P(card.result, c)));
    return out;
  };
  R.concept = card => { const c = C(card.case); return [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), '', ...blocks(T.P(card.plain, c))]; };
  R.facts = card => {
    const cols = card.columns || [];
    return [T.t(card.link), '', `| ${[...APP.factColumns, ...cols].join(' | ')} |`, `|${[...APP.factColumns, ...cols].map(() => '---').join('|')}|`,
      ...card.rows.map(r => `| ${r.q} | ${r.a} |${(r.cells || []).map(x => ` ${x} |`).join('')}`), '',
      `**${APP.factRelates}**`, '', ...list(card.rows.map(r => `**${r.a}**: ${T.P(r.relates).join(' ')}`))];
  };
  const factPairTable = entry => {
    const [x, y] = entry.pair.map(v.fact);
    return ['| | Fact A | Fact B |', '|---|---|---|', `| Asked | ${x.q} | ${y.q} |`, `| The answer | ${x.a} | ${y.a} |`,
      `| How it fits | ${T.P(x.relates).join(' ')} | ${T.P(y.relates).join(' ')} |`];
  };

  R.orient = card => {
    if (v.isFacts) return factOrient(card);
    const out = [...blocks(T.P(card.canDo)), ...blocks(T.P(card.everyday)), ...blocks(T.P(card.add))];
    v.priorSteps.forEach(s => {
      out.push(`**What Unit One taught, in one place.** The first question is ${T.q(s.code)} Its answers:`, '');
      s.options.forEach(opt => out.push(`- ${T.a(s.code, opt.id)}: give this answer when ${opt.when}.` + (opt.id === card.map.branch ? ` **This unit is about these ${EX === 'problem' ? 'problems' : 'stories'}.**` : '')));
      out.push('', APP.route, '', '*(One tap on any of these lines opens the card in Unit One that taught it.)*', '');
    });
    // the app: the unit's questions, each answer with what it means (gate) or the names it leads to, then each name in one line
    if (v.isGate) {
      out.push(`${v.gate.q}`);
      v.gate.options.forEach(opt => out.push(`- ${opt.n} → ${opt.plain}`));
      out.push('');
    } else {
      v.key.branches[card.map.branch].forEach(s => {
        out.push(`${s.q}`);
        s.options.forEach(opt => out.push(`- ${opt.n} → ${opt.keeps.filter(id => taught.includes(id)).map(id => v.outcome(id).n).join(' · ')}`));
        out.push('');
      });
      taught.forEach(id => out.push(`- ${v.outcome(id).n}: ${v.outcome(id).plain}`));
      out.push('');
    }
    out.push(`The unit has ${num(v.unit.parts.length)} parts, and you can stop after any of them.`, '');
    v.unit.parts.forEach((p, i) => out.push(`${i + 1}. ${p.title}`));
    out.push('', `${APP.howTaught(EX)} ${APP.stakes}`);
    return out;
  };

  R.term = card => {
    const c = C(card.case), term = v.term(card.term);
    // the app prints a case's name only when it has one (T.caseName)
    return [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), '', ...blocks(T.P(card.plain, c)),
      `**The word for this.** *${cap(term.n)}*: ${term.means}.`, '', ...blocks(T.P(card.after, c)), ...audio(card)];
  };

  R.meet = card => {
    const c = C(card.case), oc = v.thing(v.subjectOf(card));
    const out = [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), T.show(c, [card.mark]), '',
      ...blocks(T.P(card.explain, c)), ...audio(card),
      `**${APP.spotIt}**`, '', ...stepsOut(card.spot, c), '',
      ...blocks(T.P(card.name, c)), ...(card.act ? [`**${APP.act}**`, '', ...bodyOut(card.act, c)] : [])];
    while (out[out.length - 1] === '') out.pop();
    if (oc.aka.length) out.push('', APP.aka(oc.aka, T.name(oc.id)));
    return out;
  };

  R.again = card => {
    const first = C(card.first), second = C(card.second);
    return [T.t(card.link), '', `The first ${EX} again, in one line. *${first.name}*: ${T.quoteCues(first, card.step)}`, '',
      `The second ${EX}.`, ...(second.name ? ['', `*${second.name}*`] : []), '', T.show(second),   // the app: T.caseName(second) '', `**What to compare.** ${T.t(card.instruction)}`, '',
      ...tapPrompt(T, second, APP.againStem(first.name, T.quoteCues(first, card.step), EX), card.prompt.answer), '',
      '**What the two share**', '', ...blocks(T.P(card.shared))];
  };

  R.lens = card => [T.t(card.link), '', ...blocks(T.P(card.body)),
    `**Stays the same from ${EX} to ${EX}:** ${T.P(card.fixed).join('; ')}`, '', `**Changes on purpose:** ${card.varies.join('; ')}.`];

  R.portrait = card => [T.t(card.link), '', '**What it is usually like**', '', ...list(T.P(card.typical)), '',
    '**What it is not**', '', ...blocks(T.P(card.not)), '**Where you will hear it**', '', card.wild.join(' '), '', ...blocks(T.P(card.self)),
    `**${APP.ask}**`, '', ...T.P(card.ask), ...(card.act ? ['', `**${APP.act}**`, '', ...bodyOut(card.act)] : [])];

  R.refute = card => [T.t(card.link), '', `**The idea, as people say it:** ${card.idea}`, '', `**${card.verdict}**`, '',
    '**What is right instead**', '', ...blocks(T.P(card.right))];

  R.lookalike = card => {
    if (card.facts) {
      const entry = v.ledger(card.ledger), [x, y] = card.facts.map(v.fact);
      return [T.t(card.link), '', '**Fact A**', '', `> ${x.q}`, '', '**Fact B**', '', `> ${y.q}`, '',
        `**What to compare.** ${T.t(card.instruction)}`, '',
        `**You are asked:** ${APP.whichFactStem(`“${v.fact(card.prompt.answer).a}”`)} (Fact A / Fact B)`, '',
        `**Shown as soon as you answer.** Fact ${card.prompt.answer === x.id ? 'A' : 'B'}.`, '', '**Why this one and not the other**', '',
        ...blocks(T.P(card.difference)), `**${APP.tellApart}**`, '', T.t(entry.test), '',
        ...(tabled.has(entry.id) ? [] : (tabled.add(entry.id), ['**Side by side**', '', ...factPairTable(entry), '']))];
    }
    const entry = v.ledger(card.ledger), [x, y] = card.cases.map(C);
    return [T.t(card.link), '', `**${cap(EX)} A**`, '', T.show(x), '', `**${cap(EX)} B**`, '', T.show(y), '',
      `**What to compare.** ${T.t(card.instruction)}`, '',
      `**You are asked:** ${APP.whichStem(T.a(...card.prompt.option.split('.')), EX)} (${cap(EX)} A / ${cap(EX)} B)`, '',
      `**Shown as soon as you answer.** ${cap(EX)} ${card.prompt.answer === x.id ? 'A' : 'B'}.`, '', '**Why this one and not the other**', '',
      ...blocks(T.P(card.difference)), ...tellApart(entry, false)];
  };

  R.exception = card => {
    const c = C(card.case), entry = v.ledger(card.ledger);
    return [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), '', T.t(card.setup), '',
      ...tapPrompt(T, c, APP.exceptionStem(T.name(card.looksLike), T.name(card.is), EX), card.prompt.answer), '',
      `**Why this is ${plainName(card.is)} and not ${plainName(card.looksLike)}**`, '', ...blocks(T.P(card.because, c)),
      ...tellApart(entry, true), ...blocks(T.P(card.take, c))];
  };

  R.question = (card, ledgerRead) => {
    const s = v.step(card.step);
    const gateStep = v.isGate && s.code === v.gate.code;
    const single = !gateStep && s.options.every(opt => opt.keeps.filter(id => taught.includes(id)).length === 1);
    const out = [T.t(card.link), '', `**${APP.keyAsks}** ${T.q(s.code)}`, '',
      '**Its answers**', ''];
    if (single) out.push(`Each answer leads to one name, and so rules out the other ${num(taught.length - 1)}.`, '');
    s.options.forEach(opt => {
      out.push(`- ${T.a(s.code, opt.id)}`, `  - Give this answer when ${opt.when}.`);
      if (gateStep) return;
      const keeps = opt.keeps.filter(id => taught.includes(id)), gone = taught.filter(id => !keeps.includes(id));
      out.push(single ? `  - It leads to ${T.namesAt(keeps, card.id)}.` : `  - Keeps ${T.namesAt(keeps, card.id)}.` + (gone.length ? ` Rules out ${T.namesAt(gone, card.id)}.` : ''));
    });
    out.push('', '**Why it matters**', '', s.why, '', ...blocks(T.P(card.decides)),
      '**How to answer it**', '', ...bodyOut(card.how), ...audio(card));
    const entries = v.unit.ledger.filter(l => l.step === s.code && ledgerRead.has(l.id));
    if (entries.length) {
      out.push('**When two answers both seem to fit**', '', ...blocks(T.P(card.whenBoth)));
      entries.forEach(l => out.push(`- ${plainName(l.pair[0])} or ${plainName(l.pair[1])}: ${T.t(l.test)}`));
      out.push('');
    }
    return out;
  };

  R.worked = card => {
    const c = C(card.case), own = v.thingOf(c);
    const out = [T.t(card.link), '', ...(c.name ? [`*${c.name}*`, ''] : []), T.show(c), ''];
    let live = taught;
    card.steps.forEach((st, i) => {
      const s = v.step(st.step), opt = v.option(st.step, c.route[st.step][0]);
      out.push(`**Question ${i + 1} of ${card.steps.length}: ${s.q}**`, '', T.show(c, [st.step]), '',
        `Answer: ${T.a(st.step, opt.id)}`, '', ...blocks(T.P(st.reason, c)));
      if (v.isGate) return;
      live = live.filter(id => opt.keeps.includes(id));
      const gone = taught.filter(id => !live.includes(id));
      out.push((live.length === taught.length ? `Still possible: all ${num(taught.length)} names this unit teaches.` : `Still possible: ${T.names(live)}.`) + (gone.length ? ` Ruled out: ${T.names(gone)}.` : ''), '');
    });
    const p = card.hold.prompt, right = p.choices.find(x => x.id === p.answer);
    if (!v.isGate) out.push(`**Name it:** ${T.name(own)}`, '');
    out.push(`**You are asked:** ${p.lead ? `${T.t(p.lead, c)} ${APP.holdPick}` : APP.holdStem(T.name(own), T.name(card.hold.neighbor))}`, '');
    p.choices.forEach(x => out.push(`- (${x.id}) ${T.t(x.text, c)}`));
    out.push('', `**Shown as soon as you choose.** The one that settles it is (${right.id}): ${T.t(right.text, c)}`);
    p.choices.filter(x => x !== right).forEach(x => out.push(`- If you chose (${x.id}): ${T.t(x.note, c)}`));
    out.push('', `**Why this is ${plainName(own)} and not ${plainName(card.hold.neighbor)}**`, '', ...blocks(T.P(card.hold.reason, c)),
      `**${APP.secondLook(EX)}**`, '', ...blocks(T.P(card.impression.text, c)));
    while (out[out.length - 1] === '') out.pop();
    return out;
  };

  R.recap = card => {
    if (v.isFacts) return [T.t(card.link), '', ...Object.values(v.cards).filter(k => k.kind === 'facts').flatMap(k =>
      [`**${T.t(k.h)}**`, '', ...list(k.rows.map(r => `**${r.q}** ${r.a}`)), '']), '**To carry away**', '', ...list(T.P(card.carry))];
    const portraitOf = id => Object.values(v.cards).find(k => k.kind === 'portrait' && v.subjectOf(k) === id);
    const out = [T.t(card.link), '', '**This unit’s questions and answers**', ''];
    v.unitSteps().forEach(s => {
      out.push(`${s.q}`);
      s.options.forEach(opt => out.push(v.isGate ? `- ${opt.n}` : `- ${opt.n} → ${opt.keeps.map(id => v.outcome(id).n).join(' · ')}`));
      out.push('');
    });
    out.push(`**For each name: ${APP.lookFor.charAt(0).toLowerCase() + APP.lookFor.slice(1)}, and ${APP.ask.charAt(0).toLowerCase() + APP.ask.slice(1)}**`, '');
    taught.forEach(id => out.push(`- ${T.name(id)}: ${v.thing(id).needs}.`, ...(portraitOf(id) ? [`  - Ask: ${T.P(portraitOf(id).ask).join(' ')}`] : []), ...(portraitOf(id) && portraitOf(id).act ? [`  - Do: ${(isSteps(portraitOf(id).act) ? portraitOf(id).act.map(st => T.t(st.do)) : T.P(portraitOf(id).act)).join(' ')}`] : [])));
    out.push('', '**To carry away**', '', ...list(T.P(card.carry)));
    return out;
  };

  R.transfer = card => [T.t(card.link), '', ...blocks(T.P(card.ask)),
    ...card.prompts.map(p => `- ${T.name(v.subjectOf(p))}: ${T.t(p.occasion)}`), '',
    `Where was it? (tap one) ${card.places.join(' / ')}`, '', 'In a line, what was said? (optional, typed)', '', APP.transferNote];

  R.plan = card => [T.t(card.link), '', ...blocks(T.P(card.intro)), ...card.cues.map(x => `- ${x.cue}, ${x.then}`), '', 'Or write your own: If …, then I will …'];

  return { R };
}
