/* ===================== LESSONS: THE KEY AS THE ONE VOCABULARY ===================== */
// Lookups over a subject's standard-1 data, and the text helpers every card, check and drill uses.
// Everything worded by the key is printed from the key here (lesson standard E1). Codes and ids are never shown.

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const cuesOf = (c, step) => c.cues && c.cues[step] ? paras(c.cues[step]) : [];
const TOKEN = /\{(o|plain|needs|q|a|when|t|means|test|cue):([^}]+)\}/g;
const lowerFirst = s => s.charAt(0).toLowerCase() + s.slice(1);
const joinWords = (list, last = 'and') => list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ` ${last} ` + list[list.length - 1];
const byId = list => Object.fromEntries(list.map(x => [x.id, x]));
function lessonFail(message){ throw new Error('Lesson data: ' + message); }
// A screen is repainted whole, so focus would fall to <body>. This puts it on the region the learner should
// hear next: a new card's heading, the feedback to an answer, the question now open.
function focusOn(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}
// "Unit One": the registered unit's tag, else its place in the subject's course (an earlier unit not yet rebuilt)
function unitLabel(data, unitId){
  if(data.units[unitId]) return 'Unit ' + data.units[unitId].tag;
  const at = data.meta.units.indexOf(unitId);
  return at < 0 ? 'an earlier unit' : 'Unit ' + cap(numWord(at + 1));
}

// The wording the app owns: the same sentence in every unit, so no unit types it (lesson standard K9, E2, E3, E6).
const SAY = {
  stakes: 'Nothing here is graded. A miss only decides what comes back.',
  route: 'Unit One also taught that two things are marked separately: the name you give a case, and your route to it, meaning the answers you gave to the key’s questions on the way.',
  preview: n => `This is a preview. You are not expected to follow it yet: every line is explained on the cards that come next. The question and its answers are in the key’s own words. Beside each answer, in plain words, is the thing it leads to. There are ${numWord(n)} of them, and each gets its name when it is taught.`,
  howTaught: 'Each name is taught through cases first. After every step you answer one question about a new case, and the answer and the reason are shown straight away.',
  pointTo: 'What you must be able to point to',
  oneCase: 'This comes from one case so far. The next card tests it on a second case.',
  keyAsks: 'The key asks',
  keyAnswer: 'Its answer for a case like this one, in the key’s fixed words',
  aka: (akas, nameHtml) => `You may also hear this called ${joinWords(akas.map(x => '“' + esc(x) + '”'), 'or')}. ${akas.length > 1 ? 'Those words mean' : 'That means'} the same thing here, and from now on this unit uses one name: ${nameHtml}.`,
  againHeading: name => `${name}: the same thing in a different story`,
  portraitHeading: name => `${name}: what it is like`,
  lookalikeHeading: (x, y) => `${x} or ${y}: telling them apart`,
  checkHeading: 'A question about a new case',
  againStem: (firstName, firstCue) => `In <i>${esc(firstName)}</i>, these words show it: ${firstCue}${/[.?!]”$/.test(firstCue) ? '' : '.'} Which words show the same thing in this case? Tap them.`,
  exceptionStem: (looks, is) => `This looks like ${looks}. Before you read why it is ${is}, tap the words in the case that settle it.`,
  whichStem: answer => `Which case gives the answer ${answer}?`,
  holdStem: (x, y) => `Why is this ${x} and not ${y}? Every statement below is true of the case. Before you read the reason, choose the one that settles it.`,
  whyThisOne: 'Why this one and not the other',
  tellApart: 'How to tell them apart',
  sideBySide: 'Side by side, in the key’s words',
  tieBreak: (loser, say, winner) => `When a case shows both ${loser} and ${esc(say)}, the key’s answer is ${winner}.`,
  secondLook: 'Does it look like a case you know?',
  ask: 'The question to ask when you spot it',
  transferNote: 'One line is enough. It is kept on this device only and is never marked.',
  draft: 'Draft: not yet read by a newcomer',
  endOfPart: (n, next) => `End of part ${n}. You can stop here; your place is kept. Next: part ${n + 1}, ${next}.`,
  endOfUnit: tag => `End of Unit ${tag}. Every name comes back on later days with a new case: what you missed first, in a day or two, and the rest a little later.`,
  toDrill: 'Already know this unit? Go straight to the drill.',
  confused: 'This card confused me',
  confusedNoted: 'Noted, with this unit’s revision. It stays on this device.',
  answerToGoOn: 'Answer above to go on',
  stopsHere: 'This case leaves the part of the key you have been taught. The questions that follow this answer come in a part of the course you have not reached, so the case stops here.',
  rightNameWrongRoute: 'Right name, wrong route',
  wouldChange: 'What would make it a different name',
  likeness: 'When a likeness and the key disagree, go by the words that answer the key’s question.',
  drillIntro: (stages, earlier) => `The cards are out of view from here, and every case is new. The drill has ${numWord(stages)} stage${stages === 1 ? '' : 's'}. Cases that are easy to mix up are placed next to each other on purpose. This is meant to feel harder than the questions between the cards: telling look-alikes apart side by side is what makes the difference stick. `
    + (earlier ? `${cap(numWord(earlier))} of the cases come${earlier === 1 ? 's' : ''} from an earlier unit, without being labelled. ` : '')
    + 'Nothing here is graded. A miss only decides what comes back. What you miss is asked again before the drill ends, and every name comes back on later days with a new case.',
  stage: {
    name: single => 'The key’s answers are shown for each case. Give the name that goes with them.' + (single ? ' This stage practises one thing: which name goes with which answer.' : ''),
    piece: () => 'One question at a time.',
    finish: shownCount => `${shownCount === 1 ? 'The first answer is shown.' : 'The first answers are shown.'} Answer the rest, then give the name. From here on your route is marked as well as the name: a right name reached by a wrong answer on the way counts as a miss.`,
    route: () => 'No help. Answer every question in the key’s order, then give the name.',
    claim: () => 'Each of these is something a person might say that uses one of this unit’s names, or reasons in one of its ways. Each has a fault. The first is worked for you. For the rest, answer before the fault is shown.'
  }
};

// One view of a subject's standard-1 data, with the lookups everything else needs.
function subjectView(subjectId){
  const data = FC.get(subjectId);
  const key = data.key || lessonFail(`${subjectId} has no key`);
  const steps = [key.gate, ...Object.values(key.branches).flat()];
  const families = key.gate.options;
  const caseIndex = {};
  Object.entries(data.cases).forEach(([unitId, list]) => list.forEach(c => { caseIndex[c.id] = { ...c, unitId }; }));
  const outcome = id => key.outcomes.find(o => o.id === id) || lessonFail(`unknown outcome ${id}`);
  const step = code => steps.find(s => s.code === code) || lessonFail(`unknown question ${code}`);
  const option = (code, id) => step(code).options.find(o => o.id === id) || lessonFail(`unknown answer ${code}.${id}`);
  // A gate unit's "names" are the gate's answers (families); everywhere else they are outcomes.
  const isOutcome = id => key.outcomes.some(o => o.id === id);
  const thing = id => isOutcome(id) ? outcome(id)
    : (families.find(f => f.id === id) || lessonFail(`unknown outcome or family ${id}`));
  return {
    subjectId, data, key, steps, meta: data.meta, outcome, step, option, thing, isOutcome,
    term: id => (key.terms || []).find(t => t.id === id) || lessonFail(`unknown term ${id}`),
    caseById: id => caseIndex[id] || lessonFail(`unknown case ${id}`),
    casesOf: unitId => data.cases[unitId] || [],
    unitIds: () => data.meta.units.filter(id => data.units[id]),
    unit: id => data.units[id] || lessonFail(`unknown unit ${id}`),
    // the questions on a case's route, in the key's order
    routeSteps: c => steps.filter(s => c.route && c.route[s.code]).map(s => s.code),
    answersFor: (code, outcomeId) => step(code).options.filter(o => o.keeps.includes(outcomeId)),
    // the key's tie-break between two answers of a question, if it has one: { loser, winner, say }
    tieBreak(code, a, b){
      for(const [x, y] of [[a, b], [b, a]]){
        const hit = (option(code, x).yieldsTo || []).find(t => t.option === y);
        if(hit) return { loser: x, winner: y, say: hit.say };
      }
      return null;
    }
  };
}

function unitView(subjectId, unitId){
  const sv = subjectView(subjectId);
  const unit = sv.unit(unitId);
  const cards = byId(sv.data.cards[unitId] || []);
  const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
  const isGate = !!(unit.teaches.families && unit.teaches.families.length);
  const taught = isGate ? unit.teaches.families : unit.teaches.outcomes;
  const ledger = id => unit.ledger.find(l => l.id === id) || lessonFail(`unknown look-alike entry ${id}`);
  return {
    ...sv, unit, unitId, cards, cardOrder, isGate, taught,
    card: id => cards[id] || lessonFail(`unknown card ${id}`),
    ledger,
    ledgerFor: (a, b) => unit.ledger.find(l => l.pair.includes(a) && l.pair.includes(b) && a !== b) || null,
    // questions taught by the units this one assumes, and by this one
    assumedSteps: sv.steps.filter(s => unit.assumes.includes(s.unit)),
    unitSteps: unit.teaches.steps.map(sv.step),
    title: unit.title.fromKey ? sv.option(...unit.title.fromKey.split('.')).n : unit.title.text,
    // the name of a taught thing: an outcome's name, or in a gate unit the answer text of the family
    nameOf: id => sv.thing(id).n
  };
}

// Text for one unit: tokens filled from the key, cases shown with their deciding words marked.
function lessonText(v){
  const kw = text => `<span class="kw">${esc(text)}</span>`;
  const o = id => kw(v.thing(id).n);
  const q = code => kw('“' + v.step(code).q + '”');
  const a = (code, id) => kw('“' + v.option(code, id).n + '”');
  const quoteCues = (c, step) => joinWords(cuesOf(c, step).map(x => '“' + esc(x) + '”'));
  const splitRef = ref => { const i = ref.indexOf('.'); return [ref.slice(0, i), ref.slice(i + 1)]; };
  // fill tokens; `c` is the case whose marked words {cue:STEP} refers to
  const t = (text, c) => esc(text).replace(TOKEN, (_, kind, ref) => {
    switch(kind){
      case 'o': return o(ref);
      case 'plain': return esc(v.thing(ref).plain);
      case 'needs': return esc(v.thing(ref).needs);
      case 'q': return q(ref);
      case 'a': return a(...splitRef(ref));
      case 'when': return esc(v.option(...splitRef(ref)).when);
      case 't': return `<i>${esc(v.term(ref).n)}</i>`;
      case 'means': return esc(v.term(ref).means);
      case 'test': return esc(v.ledger ? v.ledger(ref).test : lessonFail(`{test:${ref}} outside a unit`));
      default:
        if(!c || !cuesOf(c, ref).length) lessonFail(`{cue:${ref}} has no case or no marked words`);
        return quoteCues(c, ref);
    }
  });
  const P = (text, c) => paras(text).map(p => t(p, c));
  const PP = (text, c) => P(text, c).map(p => `<p>${p}</p>`).join('');
  // the case as shown, with the deciding words for the given questions marked. Marked words that overlap or touch
  // (two questions can be decided by the same stretch of the case) are shown as one mark.
  const marked = (c, markSteps) => {
    const spans = [...new Set((markSteps || []).flatMap(s => cuesOf(c, s)))].map(cue => {
      const at = c.text.indexOf(cue);
      if(at < 0) lessonFail(`case ${c.id}: marked words not in text: ${cue}`);
      return [at, at + cue.length];
    }).sort((x, y) => x[0] - y[0]);
    const merged = spans.reduce((out, [from, to]) => {
      const last = out[out.length - 1];
      return last && from <= last[1] ? [...out.slice(0, -1), [last[0], Math.max(last[1], to)]] : [...out, [from, to]];
    }, []);
    let html = '', at = 0;
    merged.forEach(([from, to]) => { html += esc(c.text.slice(at, from)) + `<mark class="cue">${esc(c.text.slice(from, to))}</mark>`; at = to; });
    return html + esc(c.text.slice(at));
  };
  const show = (c, markSteps) => `<blockquote class="passage">${marked(c, markSteps)}</blockquote>`;
  const caseName = c => c.name ? `<p class="casename">${esc(c.name)}</p>` : '';
  const names = ids => joinWords(ids.map(o));
  return { kw, o, q, a, t, P, PP, show, marked, caseName, names, quoteCues };
}

// Small HTML helpers shared by cards, checks, drill and feedback.
const lessonLabel = text => `<span class="m lab">${esc(text)}</span>`;
const lessonList = items => `<ul>${items.map(x => `<li>${x}</li>`).join('')}</ul>`;
const lessonSection = (label, html) => `<div class="lsec">${lessonLabel(label)}${html}</div>`;
