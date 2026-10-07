/* ===================== LESSONS: THE KEY AS THE ONE VOCABULARY ===================== */
// Lookups over a subject's standard-1 data, and the text helpers every card, check and drill uses.
// Everything worded by the key is printed from the key here (lesson standard E1). Codes and ids are never shown.

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const isSteps = body => Array.isArray(body) && body.length > 0 && typeof body[0] === 'object';
const cuesOf = (c, step) => c.cues && c.cues[step] ? paras(c.cues[step]) : [];
const TOKEN = /\{(o|plain|needs|q|a|when|t|means|test|cue|f):([^}]+)\}/g;
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
// "Unit One": the registered unit's tag
const unitLabel = (data, unitId) => 'Unit ' + (data.units[unitId] || lessonFail(`unknown unit ${unitId}`)).tag;

// The wording the app owns: the same sentence in every unit, so no unit types it (lesson standard K9, E2, E3, E6).
const SAY = {
  stakes: 'Nothing here is graded. A miss only decides what comes back.',
  route: 'Two things are marked separately: the name you give a story, and your answers to the questions on the way to it.',
  howTaught: example => `Each starts from a real ${example}. After each one you answer a quick question, and the reason is shown right away.`,
  spotIt: 'How to spot it',
  lookFor: 'What to look for',
  keyAsks: 'The question',
  aka: (akas, nameHtml) => `You may also hear this called ${joinWords(akas.map(x => '“' + esc(x) + '”'), 'or')}. ${akas.length > 1 ? 'Those words mean' : 'That means'} the same thing here, and from now on this unit uses one name: ${nameHtml}.`,
  againHeading: (name, ex) => `${name}: the same thing in a different ${ex}`,
  portraitHeading: name => `${name}: what it is like`,
  lookalikeHeading: (x, y) => `${x} or ${y}: telling them apart`,
  checkHeading: example => `A question about a new ${example}`,
  // the learner's word for an example: a problem in a procedure unit, a story everywhere else
  example: v => (v.meta && v.meta.example) || 'story',
  againStem: (firstName, firstCue, ex) => `In <i>${esc(firstName)}</i>, these words show it: ${firstCue}${/[.?!]”$/.test(firstCue) ? '' : '.'} Which words show the same thing in this ${ex}? Tap them.`,
  exceptionStem: (looks, is, ex) => `This looks like ${looks}. Before you read why it is ${is}, tap the words in the ${ex} that settle it.`,
  whichStem: (answer, ex) => `Which ${ex} gives the answer ${answer}?`,
  holdStem: (x, y) => `Why is this ${x} and not ${y}? All of these are true. Choose the one that settles it.`,
  holdPick: 'All of these are true. Choose the one that settles it.',
  whyThisOne: 'Why this one and not the other',
  tellApart: 'How to tell them apart',
  sideBySide: 'Side by side',
  tieBreak: (loser, say, winner, ex) => `When a ${ex} shows both ${loser} and ${esc(say)}, the answer is ${winner}.`,
  secondLook: ex => `Does it look like a ${ex} you know?`,
  ask: 'The question to ask when you spot it',
  act: 'What to do when you meet it',
  transferNote: 'One line is enough. It is kept on this device only and is never marked.',
  draft: 'Draft: not yet read by a newcomer',
  endOfPart: (n, next) => `End of part ${n}. You can stop here; your place is kept. Next: part ${n + 1}, ${next}.`,
  endOfUnit: (tag, ex) => `End of Unit ${tag}. Every name comes back on later days with a new ${ex}: what you missed first, in a day or two, and the rest a little later.`,
  toDrill: 'Already know this unit? Go straight to the drill.',
  confused: 'This card confused me',
  confusedNoted: 'Noted, with this unit’s revision. It stays on this device.',
  answerToGoOn: 'Answer above to go on',
  // Back inside a drill (E11): a unit's drill goes back to the cards; a returned set or Practice again goes back to the subject
  backToCards: 'Back to the cards',
  backFrom: name => `Back to ${name}`,
  // the card list beside a unit, 1280px and up (E2): a heading can carry a name that is not taught yet, so cards not reached are numbered only
  cardsNotReached: 'Not reached yet',
  theDrill: 'The drill',
  cardCount: n => `${n} cards`,
  stopsHere: ex => `The rest of this ${ex} comes in a later unit.`,
  rightNameWrongRoute: 'Right name, wrong answer on the way',
  wouldChange: 'What would make it a different name',
  drillIntro: (earlier, isFacts, example) => (isFacts ? 'The cards are out of view. Facts that are easy to swap sit next to each other on purpose. '
      : `The cards are out of view, and every ${example} is new. Ones that are easy to mix up sit next to each other on purpose. `)
    + (earlier ? `${cap(numWord(earlier))} of them come${earlier === 1 ? 's' : ''} from an earlier unit. ` : '')
    + 'Nothing is graded. What you miss comes back before the drill ends and on later days.',
  // fact units (A12)
  factsToHold: 'This unit is facts to hold, not a skill to apply. There are no questions to work through. Each fact is something you will be asked from memory, and it comes back on later days.',
  factsCount: (facts, groups) => `The unit holds ${numWord(facts)} fact${facts === 1 ? '' : 's'}, in ${numWord(groups)} group${groups === 1 ? '' : 's'}:`,
  howTaughtFacts: 'Each group starts with a story, then the idea in plain words, then the facts. After each fact you are asked it from memory, and the answer and how it fits are shown right away.',
  factCheckHeading: 'A question from memory',
  factStem: q => esc(q),
  whichFactStem: answer => `Which of these two facts has the answer ${answer}?`,
  factColumns: ['The fact', 'The answer'],
  factRelates: 'How each fact fits the idea',
  factFits: 'How it fits',
  factAsked: 'Asked',
  factAnswer: 'The answer',
  factSwapped: (chosenAnswer, otherQ) => `You chose ${chosenAnswer}. That is the answer to a different fact: ${otherQ}`,
  // procedure units (A12)
  solvedProblem: 'The problem',
  solvedResult: 'The result',
  solvedStem: 'This step carries the idea. Every statement below is true of the problem. Before you read the reason, choose the one that explains why this step is done.',
  workingLabel: 'The working, step by step',
  solveLast: does => `The working is shown up to the last step. The last step is yours: ${does}. Choose what the problem comes to.`,   // does: already filled and escaped (T.t)
  solveWhole: 'The whole problem is yours. Work it out, then choose the answer.',
  solveRoute: 'Now work it out that way and choose the answer.',
  slipLine: (text, slip) => `You chose ${text}. That is the answer you get when ${slip}`,
  // separator items (E6)
  separatorStem: (x, y, ex) => `You cannot tell whether a ${ex} is ${x} or ${y}. Which question tells these two apart?`,
  separatorSame: (q, answers) => `You chose ${q}. Both of these give the answer ${answers}, so that question does not separate them.`,
  separatorSplit: (answers) => `That question gives ${answers}.`,
  // action subjects (E18, E21)
  planOptional: 'This card is optional. You can go on without a plan.',
  planIfSee: 'If I see',
  planThenIWill: 'then I will',
  planSave: 'Save my plan',
  planSaved: 'Saved on this device. With the next set of names that come back, it is shown to you once, and you can keep it, change it or drop it.',
  planPick: 'Pick an example to start from, or write your own.',
  baselineHeading: 'A few questions before you start',
  baselineAsk: 'Is this real, or is something wrong with it?',
  baselineReal: 'Real',
  baselineWrong: 'Something is wrong',
  baselineWhy: 'And why? In a line, if you like.',
  baselineIntro: unit => `Before ${unit}, a few stories. For each one, say whether it is real or something is wrong with it, and why if you can. Nothing is shown about your answers until you finish ${unit}, and they are never scored. They only show where you started.`,
  baselineKept: unit => `Kept. Nothing is shown about this one until you finish ${unit}.`,
  baselineAfter: unit => `Before ${unit}, you were asked about these stories. Here is what each one was.`,
  baselineSaid: said => `You said: ${said}.`,
  baselineWas: real => real ? 'It was real.' : 'Something was wrong with it.',
  // the faulty-claims tile (E14)
  claimsTitle: 'Faulty claims',
  claimsIntro: 'These are claims from the units you have finished. Each one has a fault, and each is asked from memory.',
  claimsTile: n => `${n} claim${n === 1 ? '' : 's'} from finished units`,
  soundHead: 'Stories where nothing was wrong',
  unsoundHead: 'Stories where something was wrong',
  stage: {
    last: () => 'Each problem is worked up to its last step. Do the last step.',
    whole: () => 'Work each problem out, then choose the answer.',
    routeSolve: () => 'No help. Answer the questions, say what kind of problem it is, then solve it.',
    fact: () => 'Answer each fact from memory.',
    name: () => 'The answers are shown. Give the name.',
    piece: () => 'One question at a time.',
    finish: shownCount => `${shownCount === 1 ? 'The first answer is shown.' : 'The first answers are shown.'} Answer the rest, then give the name.`,
    route: () => 'No help. Answer every question, then give the name.',
    routeGate: ex => `No help. Name each ${ex}.`,
    claimsAlone: () => 'Each is something a person might say. Find its fault before it is shown.',
    claim: () => 'Each is something a person might say. Find its fault before it is shown.'
  }
};

// One view of a subject's data, with the lookups everything else needs.
function subjectView(subjectId){
  const data = FC.get(subjectId);
  const key = data.key || lessonFail(`${subjectId} has no key`);
  // a subject made only of fact units has no questions: its key has no gate and no branches
  const steps = [...(key.gate ? [key.gate] : []), ...Object.values(key.branches || {}).flat()];
  const families = key.gate ? key.gate.options : [];
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
    // a case where nothing is wrong (action subjects, lesson standard E21): its name is marked legit in the key
    isLegit: id => !!thing(id).legit,
    term: id => (key.terms || []).find(t => t.id === id) || lessonFail(`unknown term ${id}`),
    caseById: id => caseIndex[id] || lessonFail(`unknown case ${id}`),
    casesOf: unitId => data.cases[unitId] || [],
    unitIds: () => data.meta.units,
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

// the assumed questions on the routes of a unit's taught outcomes, in the key's order
function priorStepsOf(sv, unit, outcomeIds){
  const groups = [...new Set(outcomeIds.map(id => sv.outcome(id).group))];
  const onRoute = new Set([...(sv.key.gate ? [sv.key.gate.code] : []), ...groups.flatMap(g => (sv.key.branches[g] || []).map(s => s.code))]);
  return sv.steps.filter(s => unit.assumes.includes(s.unit) && onRoute.has(s.code));
}

function unitView(subjectId, unitId){
  const sv = subjectView(subjectId);
  const unit = sv.unit(unitId);
  const cards = byId(sv.data.cards[unitId] || []);
  const cardOrder = unit.parts.flatMap(p => [...p.cards, ...(p.close || [])]);
  const isGate = !!(unit.teaches.families && unit.teaches.families.length);
  // a fact unit has no outcomes: what it holds is every row of its facts cards, found once from the cards themselves
  const isFacts = unit.kind === 'F';
  const rows = {};
  (sv.data.cards[unitId] || []).filter(k => k.kind === 'facts').forEach(k => k.rows.forEach(r => { rows[r.id] = { ...r, card: k.id }; }));
  const taught = isFacts ? Object.keys(rows) : isGate ? unit.teaches.families : unit.teaches.outcomes;
  const ledger = id => unit.ledger.find(l => l.id === id) || lessonFail(`unknown look-alike entry ${id}`);
  return {
    ...sv, unit, unitId, cards, cardOrder, isGate, isFacts, taught,
    card: id => cards[id] || lessonFail(`unknown card ${id}`),
    isFact: id => !!rows[id],
    fact: id => rows[id] || lessonFail(`unknown fact ${id}`),
    ledger,
    ledgerFor: (a, b) => unit.ledger.find(l => l.pair.includes(a) && l.pair.includes(b) && a !== b) || null,
    // has the learner met this name by the time they read this card? A name with no meet card in this unit was taught earlier
    metBefore: (id, cardId) => {
      const meet = cardOrder.find(k => cards[k] && cards[k].kind === 'meet' && (cards[k].outcome || cards[k].family) === id);
      return !meet || cardOrder.indexOf(meet) < cardOrder.indexOf(cardId);
    },
    // questions taught by the units this one assumes, and by this one
    assumedSteps: sv.steps.filter(s => unit.assumes.includes(s.unit)),
    // of those, the ones this unit's own routes pass through: the gate, and earlier questions of the branches its outcomes
    // sit in (lesson standard S2 assumes). The orient card, the side-by-side tables and the finish stage print only these.
    priorSteps: priorStepsOf(sv, unit, isGate || isFacts ? [] : taught),
    unitSteps: unit.teaches.steps.map(sv.step),
    title: unit.title.fromKey ? sv.option(...unit.title.fromKey.split('.')).n : unit.title.text,
    // the name of a taught thing: an outcome's name, in a gate unit the answer text of the family, in a fact unit the fact's question
    nameOf: id => rows[id] ? rows[id].q : sv.thing(id).n
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
      case 'f': return esc(v.fact ? v.fact(ref).a : lessonFail(`{f:${ref}} outside a unit`));
      case 'test': return esc(v.ledger ? v.ledger(ref).test : lessonFail(`{test:${ref}} outside a unit`));
      default:
        if(!c || !cuesOf(c, ref).length) lessonFail(`{cue:${ref}} has no case or no marked words`);
        return quoteCues(c, ref);
    }
  });
  const P = (text, c) => paras(text).map(p => t(p, c));
  const PP = (text, c) => P(text, c).map(p => `<p>${p}</p>`).join('');
  // numbered steps: a bold action, then one short sentence of why
  const S = (list, c) => `<ol class="lsteps">${list.map(s => `<li><b>${t(s.do, c)}</b> ${t(s.why, c)}</li>`).join('')}</ol>`;
  const B = (body, c) => isSteps(body) ? S(body, c) : PP(body, c);
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
  // on a card read before some of these names are taught, a name not met yet is shown by its plain words (P3: nothing points forward)
  const namesAt = (ids, cardId) => joinWords(ids.map(id => !v.metBefore || v.metBefore(id, cardId) ? o(id) : esc(v.thing(id).plain)));
  return { kw, o, q, a, t, P, PP, S, B, show, marked, caseName, names, namesAt, quoteCues };
}

// Small HTML helpers shared by cards, checks, drill and feedback.
const lessonLabel = text => `<span class="m lab">${esc(text)}</span>`;
const lessonList = items => `<ul>${items.map(x => `<li>${x}</li>`).join('')}</ul>`;
const lessonSection = (label, html) => `<div class="lsec">${lessonLabel(label)}${html}</div>`;
