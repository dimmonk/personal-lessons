// Renders each card kind as the plain text a learner reads. Used by render-learner-view.mjs.
// Everything in bold quotes comes from key.js; nothing here types key wording.
// APP holds the wording the app owns (lesson standard E2, E3, E6, K9): it is the same in every unit, so no unit types it.
import { TOKEN, paras, cuesOf } from './load.mjs';

export const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const list = items => items.map(x => `- ${x}`);
const joinNames = names => names.length < 2 ? names.join('') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
const NUMBER = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
export const num = n => NUMBER[n] || String(n);
const blocks = arr => arr.flatMap(p => [p, '']);

export const APP = {
  stakes: 'Nothing here is graded. A miss only decides what comes back.',
  route: 'Unit One also taught that two things are marked separately: the name you give a case, and your route to it, meaning the answers you gave to the key’s questions on the way.',
  preview: n => `**The part of the key this unit teaches.** This is a preview. You are not expected to follow it yet: every line is explained on the cards that come next. The question and its answers are in the key’s own words. Beside each answer, in plain words, is the thing it leads to. There are ${num(n)} of them, and each gets its name when it is taught.`,
  howTaught: 'Each name is taught through cases first. After every step you answer one question about a new case, and the answer and the reason are shown straight away.',
  pointTo: 'What you must be able to point to',
  oneCase: 'This comes from one case so far. The next card tests it on a second case.',
  keyAsks: 'The key asks:',
  keyAnswer: 'Its answer for a case like this one, in the key’s fixed words:',
  aka: (akas, name) => `You may also hear this called ${akas.map(x => `“${x}”`).join(' or ')}. ${akas.length > 1 ? 'Those words mean' : 'That means'} the same thing here, and from now on this unit uses one name: ${name}.`,
  againHeading: name => `${name}: the same thing in a different story`,
  portraitHeading: name => `${name}: what it is like`,
  lookalikeHeading: (x, y) => `${x} or ${y}: telling them apart`,
  againStem: (firstName, firstCue) => `In *${firstName}*, these words show it: ${firstCue}${/[.?!]”$/.test(firstCue) ? '' : '.'} Which words show the same thing in this case? Tap them.`,
  exceptionStem: (looks, is) => `This looks like ${looks}. Before you read why it is ${is}, tap the words in the case that settle it.`,
  whichStem: answer => `Which case gives the answer ${answer}?`,
  holdStem: (x, y) => `Why is this ${x} and not ${y}? Every statement below is true of the case. Before you read the reason, choose the one that settles it.`,
  tellApart: 'How to tell them apart',
  tieBreak: (loser, say, winner) => `When a case shows both ${loser} and ${say}, the key’s answer is ${winner}.`,
  secondLook: 'Does it look like a case you know?',
  ask: 'The question to ask when you spot it',
  transferNote: 'One line is enough. It is kept on this device only and is never marked.'
};

export function makeText(v) {
  const o = id => `**${v.outcome(id).n}**`;
  const q = code => `**“${v.step(code).q}”**`;
  const a = (code, id) => `**“${v.option(code, id).n}”**`;
  const quoteCues = (c, step) => cuesOf(c, step).map(x => `“${x}”`).join(' and ');
  // fill tokens; `c` is the case whose marked words {cue:STEP} refers to
  const t = (str, c) => str.replace(TOKEN, (_, kind, ref) => {
    if (kind === 'o') return o(ref);
    if (kind === 'plain') return v.outcome(ref).plain;
    if (kind === 'needs') return v.outcome(ref).needs;
    if (kind === 'q') return q(ref);
    if (kind === 'a') { const [code, id] = ref.split('.'); return a(code, id); }
    if (kind === 'when') { const [code, id] = ref.split('.'); return v.option(code, id).when; }
    if (kind === 't') return `*${v.term(ref).n}*`;
    if (kind === 'means') return v.term(ref).means;
    if (kind === 'test') return v.ledger(ref).test;
    if (!c || !cuesOf(c, ref).length) throw new Error(`{cue:${ref}} has no case or no marked words`);
    return quoteCues(c, ref);
  });
  // the case as shown, with the deciding words for the given steps marked
  const show = (c, markSteps = []) => {
    let text = c.text;
    [...new Set(markSteps.flatMap(s => cuesOf(c, s)))].forEach(cue => {
      if (!text.includes(cue)) throw new Error(`case ${c.id}: marked words not in text: ${cue}`);
      text = text.replace(cue, `⟦${cue}⟧`);
    });
    return `> ${text}`;
  };
  const P = (text, c) => paras(text).map(p => t(p, c));
  const names = ids => joinNames(ids.map(o));
  return { o, q, a, t, show, P, names, quoteCues };
}

// "Tap the words": the pieces, the right one, and the note for each other piece.
function tapPrompt(T, c, stem, answer) {
  const right = c.segments.find(s => s.text.includes(answer));
  if (!right) throw new Error(`case ${c.id}: no tappable piece holds the answer "${answer}"`);
  const out = [`**You are asked:** ${stem}`, '', 'The pieces you can tap:'];
  c.segments.forEach((s, i) => out.push(`${i + 1}. “${s.text}”`));
  out.push('', `**Shown as soon as you tap.** The words are “${right.text}”.`);
  c.segments.filter(s => s !== right).forEach(s => out.push(`- If you tapped “${s.text}”: ${T.t(s.note, c)}`));
  return out;
}

export function makeCardRenderers(v, T) {
  const C = id => v.cases[id] || (() => { throw new Error(`unknown case ${id}`); })();
  const taught = v.unit.teaches.outcomes;
  const R = {};

  // rows are the key's questions in order, then what you must be able to point to (lesson standard E2)
  const pairTable = entry => {
    const [x, y] = entry.pair;
    const cell = (code, id) => v.answersFor(code, id).map(o => o.n).join(' / ');
    const rows = [...v.assumedSteps, ...v.unitSteps()].map(s => `| ${s.q} | ${cell(s.code, x)} | ${cell(s.code, y)} |`);
    return [`| | ${v.outcome(x).n} | ${v.outcome(y).n} |`, '|---|---|---|', ...rows,
      `| ${APP.pointTo} | ${cap(v.outcome(x).needs)} | ${cap(v.outcome(y).needs)} |`];
  };
  // the key's own tie-break for a ledger pair, if it has one
  const tieLine = entry => {
    const [x, y] = entry.pair.map(id => v.answersFor(entry.step, id)[0].id);
    const tie = v.tieBreak(entry.step, x, y);
    return tie ? APP.tieBreak(T.a(entry.step, tie.loser), tie.say, T.a(entry.step, tie.winner)) : null;
  };
  // the test is printed on every card of the pair; the side-by-side table once, on the first; the key's tie-break on the
  // exception card that teaches it (and from then on wherever the pair's test is listed)
  const tabled = new Set();
  const tellApart = (entry, withTie) => {
    const out = [`**${APP.tellApart}**`, '', T.t(entry.test), '', ...(withTie && tieLine(entry) ? [tieLine(entry), ''] : [])];
    if (!tabled.has(entry.id)) { tabled.add(entry.id); out.push('**Side by side, in the key’s words**', '', ...pairTable(entry), ''); }
    return out;
  };

  R.orient = card => {
    const branch = v.key.branches[card.map.branch];
    const out = [...blocks(T.P(card.canDo)), ...blocks(T.P(card.everyday))];
    v.assumedSteps.forEach(s => {
      out.push(`**What Unit One taught, in one place.** The key’s first question is ${T.q(s.code)} Its answers:`, '');
      s.options.forEach(opt => out.push(`- ${T.a(s.code, opt.id)}: give this answer when ${opt.when}.` + (opt.id === card.map.branch ? ' **This unit is about these cases.**' : '')));
      out.push('', APP.route, '', '*(One tap on any of these lines opens the card in Unit One that taught it.)*', '');
    });
    out.push(APP.preview(taught.length), '');
    branch.forEach(s => {
      out.push(`${s.q}`);
      s.options.forEach(opt => out.push(`- ${opt.n} → ${opt.keeps.map(id => v.outcome(id).plain).join(' · ')}`));
      out.push('');
    });
    out.push(`**The ${num(taught.length)} things, and the name each will get**`, '');
    taught.forEach(id => out.push(`- ${cap(v.outcome(id).plain)}: ${v.outcome(id).n}`));
    out.push('', `The unit has ${num(v.unit.parts.length)} parts, and you can stop after any of them.`, '');
    v.unit.parts.forEach((p, i) => out.push(`${i + 1}. ${p.title}`));
    out.push('', `${APP.howTaught} ${APP.stakes}`);
    return out;
  };

  R.term = card => {
    const c = C(card.case), term = v.term(card.term);
    return [T.t(card.link), '', `*${c.name}*`, '', T.show(c), '', ...blocks(T.P(card.plain, c)),
      `**The word for this.** *${cap(term.n)}*: ${term.means}.`, '', ...blocks(T.P(card.after, c))];
  };

  R.meet = card => {
    const c = C(card.case), oc = v.outcome(card.outcome);
    const out = [T.t(card.link), '', `*${c.name}*`, '', T.show(c, [card.mark]), '', 'Stripped of its story, the case is this:', '',
      ...list(T.P(card.strip, c)), '', ...blocks(T.P(card.explain, c)),
      `**${APP.pointTo}.** ${cap(oc.needs)}. ${APP.oneCase}`, '',
      `**${APP.keyAsks}** ${T.q(card.feature.step)}`, '',
      `**${APP.keyAnswer}** ${T.a(card.feature.step, card.feature.option)}`, '', ...T.P(card.name, c)];
    if (oc.aka.length) out.push('', APP.aka(oc.aka, T.o(oc.id)));
    return out;
  };

  R.again = card => {
    const first = C(card.first), second = C(card.second);
    return [T.t(card.link), '', `The first case again, in one line. *${first.name}*: ${T.quoteCues(first, card.step)}`, '',
      `The second case. *${second.name}*`, '', T.show(second), '', `**What to compare.** ${T.t(card.instruction)}`, '',
      ...tapPrompt(T, second, APP.againStem(first.name, T.quoteCues(first, card.step)), card.prompt.answer), '',
      '**What the two share**', '', ...blocks(T.P(card.shared))];
  };

  R.lens = card => [T.t(card.link), '', ...blocks(T.P(card.body)),
    `**Stays the same from case to case:** ${T.P(card.fixed).join('; ')}`, '', `**Changes on purpose:** ${card.varies.join('; ')}.`];

  R.portrait = card => [T.t(card.link), '', '**What it is usually like**', '', ...list(T.P(card.typical)), '',
    '**What it is not**', '', ...blocks(T.P(card.not)), '**Where you will hear it**', '', card.wild.join(' '), '', ...blocks(T.P(card.self)),
    `**${APP.ask}**`, '', ...T.P(card.ask)];

  R.refute = card => [T.t(card.link), '', `**The idea, as people say it:** ${card.idea}`, '', `**${card.verdict}**`, '',
    '**What is right instead**', '', ...blocks(T.P(card.right))];

  R.lookalike = card => {
    const entry = v.ledger(card.ledger), [x, y] = card.cases.map(C);
    return [T.t(card.link), '', '**Case A**', '', T.show(x), '', '**Case B**', '', T.show(y), '',
      `**What to compare.** ${T.t(card.instruction)}`, '',
      `**You are asked:** ${APP.whichStem(T.a(...card.prompt.option.split('.')))} (Case A / Case B)`, '',
      `**Shown as soon as you answer.** Case ${card.prompt.answer === x.id ? 'A' : 'B'}.`, '', '**Why this one and not the other**', '',
      ...blocks(T.P(card.difference)), ...tellApart(entry, false)];
  };

  R.exception = card => {
    const c = C(card.case), entry = v.ledger(card.ledger);
    return [T.t(card.link), '', `*${c.name}*`, '', T.show(c), '', T.t(card.setup), '',
      ...tapPrompt(T, c, APP.exceptionStem(T.o(card.looksLike), T.o(card.is)), card.prompt.answer), '',
      `**Why this is ${v.outcome(card.is).n} and not ${v.outcome(card.looksLike).n}**`, '', ...blocks(T.P(card.because, c)),
      ...tellApart(entry, true), ...blocks(T.P(card.take, c))];
  };

  R.question = (card, ledgerRead) => {
    const s = v.step(card.step);
    const single = s.options.every(opt => opt.keeps.filter(id => taught.includes(id)).length === 1);
    const out = [T.t(card.link), '', `**${APP.keyAsks}** ${T.q(s.code)}`, '', `**What it is for.** ${s.purpose}.`, '',
      '**Its answers, exactly as the key shows them**', ''];
    if (single) out.push(`Each answer leads to one name, and so rules out the other ${num(taught.length - 1)}.`, '');
    s.options.forEach(opt => {
      const keeps = opt.keeps.filter(id => taught.includes(id)), gone = taught.filter(id => !keeps.includes(id));
      out.push(`- ${T.a(s.code, opt.id)}`, `  - Give this answer when ${opt.when}.`,
        single ? `  - It leads to ${T.names(keeps)}.` : `  - Keeps ${T.names(keeps)}.` + (gone.length ? ` Rules out ${T.names(gone)}.` : ''));
    });
    out.push('', '**Why it decides**', '', s.why, '', ...blocks(T.P(card.decides)),
      '**How to answer it from a case**', '', ...blocks(T.P(card.how)));
    const entries = v.unit.ledger.filter(l => l.step === s.code && ledgerRead.has(l.id));
    if (entries.length) {
      out.push('**When two answers both seem to fit**', '', ...blocks(T.P(card.whenBoth)));
      entries.forEach(l => out.push(`- ${v.outcome(l.pair[0]).n} or ${v.outcome(l.pair[1]).n}: ${T.t(l.test)}` + (tieLine(l) ? ` ${tieLine(l)}` : '')));
      out.push('');
    }
    // a pair with no look-alike or exception card of its own gets its side-by-side table here
    v.unit.ledger.filter(l => l.step === s.code && l.taughtIn).forEach(l =>
      out.push(`**${v.outcome(l.pair[0]).n} beside ${v.outcome(l.pair[1]).n}**`, '', ...pairTable(l), ''));
    return out;
  };

  R.worked = card => {
    const c = C(card.case);
    const out = [T.t(card.link), '', `*${c.name}*`, '', T.show(c), ''];
    let live = taught;
    // the reason behind each question is given in full in the unit's first worked case and in one line after that (P9 requires 5)
    const first = Object.values(v.cards).filter(k => k.kind === 'worked')[0] === card;
    card.steps.forEach((st, i) => {
      const s = v.step(st.step), opt = v.option(st.step, c.route[st.step][0]);
      live = live.filter(id => opt.keeps.includes(id));
      const gone = taught.filter(id => !live.includes(id));
      out.push(`**Question ${i + 1} of ${card.steps.length}: ${s.q}**`, '', `What it is for: ${s.purpose.charAt(0).toLowerCase() + s.purpose.slice(1)}.` + (first ? ` ${s.why}` : ''), '', T.show(c, [st.step]), '',
        `Answer: ${T.a(st.step, opt.id)}`, '', ...blocks(T.P(st.reason, c)),
        (live.length === taught.length ? `Still possible: all ${num(taught.length)} names this unit teaches.` : `Still possible: ${T.names(live)}.`) + (gone.length ? ` Ruled out: ${T.names(gone)}.` : ''), '');
    });
    const p = card.hold.prompt, right = p.choices.find(x => x.id === p.answer);
    out.push(`**Name it:** ${T.o(c.outcome)}`, '',
      `**You are asked:** ${p.lead ? T.t(p.lead, c) + ' ' : ''}${APP.holdStem(T.o(c.outcome), T.o(card.hold.neighbour))}`, '');
    p.choices.forEach(x => out.push(`- (${x.id}) ${T.t(x.text, c)}`));
    out.push('', `**Shown as soon as you choose.** The one that settles it is (${right.id}): ${T.t(right.text, c)}`);
    p.choices.filter(x => x !== right).forEach(x => out.push(`- If you chose (${x.id}): ${T.t(x.note, c)}`));
    out.push('', `**Why this is ${v.outcome(c.outcome).n} and not ${v.outcome(card.hold.neighbour).n}**`, '', ...blocks(T.P(card.hold.reason, c)),
      `**${APP.secondLook}**`, '', ...blocks(T.P(card.impression.text, c)));
    while (out[out.length - 1] === '') out.pop();
    return out;
  };

  R.recap = card => {
    const portraitOf = id => Object.values(v.cards).find(k => k.kind === 'portrait' && k.outcome === id);
    const out = [T.t(card.link), '', '**The key for this unit, in its own words**', ''];
    v.unitSteps().forEach(s => { out.push(`${s.q}`); s.options.forEach(opt => out.push(`- ${opt.n} → ${opt.keeps.map(id => v.outcome(id).n).join(' · ')}`)); out.push(''); });
    out.push(`**For each name: ${APP.pointTo.charAt(0).toLowerCase() + APP.pointTo.slice(1)}, and ${APP.ask.charAt(0).toLowerCase() + APP.ask.slice(1)}**`, '');
    taught.forEach(id => out.push(`- ${T.o(id)}: ${v.outcome(id).needs}.`, `  - Ask: ${T.P(portraitOf(id).ask).join(' ')}`));
    out.push('', '**To carry away**', '', ...list(T.P(card.carry)));
    return out;
  };

  R.transfer = card => [T.t(card.link), '', ...blocks(T.P(card.ask)),
    ...card.prompts.map(p => `- ${T.o(p.outcome)}: ${p.occasion}`), '',
    `Where was it? (tap one) ${card.places.join(' / ')}`, '', 'In a line, what was said? (optional, typed)', '', APP.transferNote];

  R.plan = card => [T.t(card.link), '', ...blocks(T.P(card.intro)), ...card.cues.map(x => `- ${x.cue}, ${x.then}`), '', 'Or write your own: If …, then I will …'];

  return { R, pairTable, tieLine };
}
