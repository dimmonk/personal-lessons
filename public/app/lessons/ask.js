/* ===================== LESSONS: ASKING, AND THE FEEDBACK THAT FOLLOWS ===================== */
// One way to ask every kind of item (checks between cards, drill items, returns, specimens), and one way
// to assemble the feedback, in the fixed order of lesson standard E5: the right answer in the key's words;
// the reason, quoting the marked words; why the nearest wrong name fails; after a miss a line about the
// learner's own choice; and last a link to the card that taught it. Nothing is in the page before an answer.
//
// item kinds:
//   { type:'case', c, shown:[code], asked:[code], askName, names:[id], among?, mode, joined?, stops? }
//   { type:'tap',  c, step, say, answer, mode, joined? }
//   { type:'tell', entry, mode }      { type:'reverse', c, mode }      { type:'claim', c, mode }
//   { type:'separator', entry, codes:[code], right:code, mode }                  which of the unit's questions tells a pair apart
//   { type:'fact', row, target, mode, joined? }                                  a fact asked from memory (fact units)
//   { type:'problem', c, solve:'last'|'whole'|'route', shown, asked, askName, names, mode }   a problem solved (procedure units)
// ask = { v, T, item, state, ledgerRead:Set, taughtOn(what) -> { cardId, heading } | { text } | null }
// state = { answers:{}, name:null, picked:null, order:[], done:false, open:false }

const freshAsk = () => ({ answers: {}, name: null, picked: null, order: null, done: false, open: false });
function shuffled(list){
  const out = [...list];
  for(let i = out.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
const rightAnswers = (c, code) => c.route[code];
const stepRight = (c, code, chosen) => rightAnswers(c, code).includes(chosen);

/* ---------- feedback lines ---------- */
function stepReason(ask, c, code){
  const { v, T } = ask;
  return c.reason && c.reason[code] ? T.P(c.reason[code], c).join(' ') : esc(cap(v.option(code, rightAnswers(c, code)[0]).when)) + '.';
}
function stepLine(ask, c, code){
  const { v } = ask;
  return `<p>${esc(v.step(code).q)} <span class="kw">${esc(rightAnswers(c, code).map(id => v.option(code, id).n).join(' or '))}.</span> ${stepReason(ask, c, code)}</p>`;
}
// the line about a wrong answer to one question, built from the key unless the case has its own
function answerMiss(ask, c, code, chosenId){
  const { v, T } = ask;
  if(c.miss && c.miss[chosenId]) return T.t(paras(c.miss[chosenId]).join(' '), c);
  const chosen = v.option(code, chosenId), right = v.option(code, rightAnswers(c, code)[0]);
  const target = caseTarget(v, c);
  // the tie-break form is used only where the case really shows both answers, so two lines never contradict
  const tie = (c.also || []).includes(chosenId) && v.tieBreak(code, chosenId, right.id);
  if(tie && tie.loser === chosenId)
    return `You chose ${T.kw(chosen.n)}. This case does show that. It also shows ${esc(tie.say)}, and when a case shows both, the key’s answer is ${T.kw(right.n)}.`;
  // the nearest wrong name's reason is the line for the near answer, unless a name is asked: then "Why not" already prints it
  if(c.not && !ask.item.askName && v.isOutcome(target) && chosen.keeps.length === 1 && chosen.keeps[0] === c.not.outcome)
    return T.t(paras(c.not.why).join(' '), c);
  return `You chose ${T.kw(chosen.n)}. Give that answer when ${esc(chosen.when)}. This case shows something else: ${esc(right.when)}.`;
}
// the line about a wrong name
function nameMiss(ask, c, chosenId){
  const { v, T } = ask, target = caseTarget(v, c);
  if(c.miss && c.miss[chosenId]) return T.t(paras(c.miss[chosenId]).join(' '), c);
  const entry = v.ledgerFor ? v.ledgerFor(target, chosenId) : null;
  const own = `${T.o(chosenId)} needs ${esc(v.thing(chosenId).needs)}. This case shows something else: ${esc(v.thing(target).needs)}.`;
  return entry && ask.ledgerRead.has(entry.id)
    ? `${own}</p><p>${T.t(paras(entry.shared).join(' '))} ${T.t(paras(entry.rule).join(' '))} ${T.t(paras(entry.test).join(' '))}`
    : own;
}
function taughtOnLine(ask, what){
  const hit = ask.taughtOn ? ask.taughtOn(what) : null;
  if(!hit) return '';
  return hit.cardId ? `<p class="taughton">Taught on: <button class="linkish" data-open-card="${esc(hit.cardId)}">${hit.heading}</button></p>`
                    : `<p class="taughton">${esc(hit.text)}</p>`;
}
// the verdict word is the app's, set in the mark's own type; the key's words after it keep the key's voice (E16)
const keyWords = html => `<span class="kw ans">${html}</span>`;
const verdictMark = (ok, label, wordsHtml, tail = '') =>
  `<span class="mark ${ok ? '' : 'no'}">${icon(ok ? 'check' : 'cross', 13)}<span class="verd">${label} </span>${keyWords(wordsHtml)}${tail}</span>`;
const answerHead = (ok, html) => `<div class="marks">${verdictMark(ok, ok ? 'Right:' : 'The answer is:', html)}</div>`;

/* ---------- a case: some questions shown, some asked, then perhaps the name ---------- */
function caseResult(ask){
  const { v, item, state } = ask, c = item.c;
  const wrongSteps = item.asked.filter(code => !stepRight(c, code, state.answers[code]));
  const nameOk = !item.askName || state.name === caseTarget(v, c);
  return { ok: nameOk && wrongSteps.length === 0, nameOk, routeOk: wrongSteps.length === 0, wrongSteps };
}
function caseFeedback(ask){
  const { v, T, item, state } = ask, c = item.c, res = caseResult(ask), target = caseTarget(v, c);
  const last = item.asked.length ? item.asked[item.asked.length - 1] : v.routeSteps(c).slice(-1)[0];
  const out = [];
  if(item.askName){
    const routed = item.asked.length > 0;
    out.push(`<div class="marks">${verdictMark(res.nameOk, res.nameOk ? 'Right:' : 'The answer is:', esc(v.nameOf(target)))}`
      + (routed ? `<span class="mark ${res.routeOk ? '' : 'no'}">${icon(res.routeOk ? 'check' : 'cross', 13)}Route ${res.routeOk ? 'right' : 'missed'}</span>` : '') + '</div>');
    if(res.nameOk && !res.routeOk) out.push(`<div class="warn"><span class="verdictline">${SAY.rightNameWrongRoute}.</span> A right name reached by a wrong answer on the way counts as a miss.</div>`);
  } else {
    const code = item.asked[0];
    out.push(answerHead(res.ok, esc(rightAnswers(c, code).map(id => v.option(code, id).n).join(' or '))));
  }
  // the reason: every question answered when something was missed (the first wrong one first), else the deciding one
  const reasonSteps = res.ok || !item.asked.length ? [last] : [...res.wrongSteps, ...item.asked.filter(code => !res.wrongSteps.includes(code))];
  const joined = item.joined ? ' ' + item.joined : (!item.askName && item.mode === 'piece' && !v.isGate
    ? ` This answer leads to ${T.names(v.option(last, rightAnswers(c, last)[0]).keeps.filter(v.isOutcome))}.` : '');
  out.push(`<div class="vblock"><span class="m">Why</span>${reasonSteps.map(code => stepLine(ask, c, code)).join('')}${joined ? `<p>${joined}</p>` : ''}</div>`);
  const rest = [];
  if(item.askName && c.not) rest.push(`<div class="vblock soft"><span class="m">Why not ${esc(v.nameOf(c.not.outcome))}</span><p>${T.t(paras(c.not.why).join(' '), c)}</p></div>`);
  const own = [
    ...res.wrongSteps.map(code => answerMiss(ask, c, code, state.answers[code])),
    ...(item.askName && !res.nameOk ? [nameMiss(ask, c, state.name)] : [])
  ];
  if(own.length) rest.push(`<div class="vblock"><span class="m">Your answer</span>${own.map(l => `<p>${l}</p>`).join('')}</div>`);
  if(!res.ok && c.echo){
    const echo = v.caseById(c.echo);
    rest.push(`<div class="vblock soft"><span class="m">A likeness</span><p>This case may have brought back <i>${esc(echo.name)}</i>, which was ${T.o(caseTarget(v, echo))}. ${SAY.likeness}</p></div>`);
  }
  if(c.wouldChange && item.asked.length) rest.push(`<div class="vblock soft"><span class="m">${SAY.wouldChange}</span><p>${T.t(paras(c.wouldChange).join(' '), c)}</p></div>`);
  if(item.stops) rest.push(`<p class="stopline">${SAY.stopsHere}</p>`);
  rest.push(taughtOnLine(ask, item.askName ? { name: target } : { step: last }));
  return out.join('') + foldRest(ask, res.ok, rest.join(''));
}
// Only a case the learner has already seen, answered right again, keeps the later lines behind one tap (E5).
function foldRest(ask, ok, restHtml){
  if(!restHtml) return '';
  if(!(ask.item.seenBefore && ok) || ask.state.open) return restHtml;
  return `<button class="btn ghost sm" data-show-rest>Show the reasoning</button>`;
}
// Everything of a case item above its feedback: the case, what is shown, the questions and the name asked.
function caseBody(ask){
  const { v, T, item, state } = ask, c = item.c;
  const markSteps = state.done ? [...item.shown, ...item.asked] : item.shown;
  const out = [T.show(c, markSteps)];
  if(item.shown.length){
    out.push(`<div class="shownroute">${lessonLabel('Shown to you, with the words that decide each answer marked')}`
      + lessonList(item.shown.map(code => `${esc(v.step(code).q)} <span class="kw">${esc(v.option(code, rightAnswers(c, code)[0]).n)}</span>`)) + '</div>');
  }
  const openIdx = state.done ? -1 : item.asked.findIndex(code => !state.answers[code]);
  const total = item.asked.length + (item.askName ? 1 : 0);
  const rows = item.asked.map((code, i) => {
    const s = v.step(code), chosen = state.answers[code];
    const ids = item.among || s.options.map(o => o.id);
    if(i === openIdx) return `<div class="stepopen">
      <div class="stephead"><span class="num on">${i + 1}</span><span class="m a">${total > 1 ? `Question ${i + 1} of ${total}` : (item.prompt || SAY.keyAsks)}</span></div>
      <p class="stem">${esc(s.q)}${item.amongNote ? ` <span class="amongnote">${esc(item.amongNote)}</span>` : ''}</p>
      <div class="opts" data-step="${esc(code)}">${ids.map(id => `<button class="opt" data-o="${esc(id)}">${esc(v.option(code, id).n)}</button>`).join('')}</div></div>`;
    if(chosen){
      const wrong = state.done && !stepRight(c, code, chosen);
      return `<${state.done ? 'div' : 'button'} class="stepdone ${state.done ? 'static' : ''} ${wrong ? 'wrong' : ''}" ${state.done ? '' : `data-edit="${esc(code)}"`}>
      <span class="tick">${icon(wrong ? 'cross' : 'check', 12)}</span>
      <span class="grow"><span class="m s">${esc(s.q)}</span><span class="v">${esc(v.option(code, chosen).n)}</span></span>
      ${state.done ? '' : '<span class="m s">Change</span>'}</${state.done ? 'div' : 'button'}>`;
    }
    return `<div class="steplock"><span class="num off">${i + 1}</span><span class="grow"><span class="m s">${esc(s.q)}</span><span class="v">Answer the question above</span></span>
      <span style="color:var(--disabled);display:flex">${icon('lock', 15)}</span></div>`;
  });
  if(item.askName){
    const ready = openIdx === -1 && !state.done && state.name === null;
    const nameWrong = state.done && state.name !== caseTarget(v, c);
    rows.push(state.done || state.name !== null
      ? `<div class="stepdone static ${nameWrong ? 'wrong' : ''}"><span class="tick">${icon(nameWrong ? 'cross' : 'check', 12)}</span><span class="grow"><span class="m s">Name it</span><span class="v">${esc(v.nameOf(state.name))}</span></span></div>`
      : ready ? `<div class="stepopen"><div class="stephead"><span class="num on">${total}</span><span class="m a">${item.asked.length ? 'Name it' : 'Which name goes with these answers?'}</span></div>
          <div class="opts" id="nameOpts">${item.names.map(id => `<button class="opt" data-n="${esc(id)}">${esc(v.nameOf(id))}</button>`).join('')}</div></div>`
      : `<div class="steplock"><span class="num off">${total}</span><span class="grow"><span class="m s">Name it</span><span class="v">Answer every question first</span></span>
          <span style="color:var(--disabled);display:flex">${icon('lock', 15)}</span></div>`);
  }
  out.push(`<div class="steps">${rows.join('')}</div>`);
  return out.join('');
}
function caseHtml(ask){
  return caseBody(ask) + (ask.state.done ? `<div class="feedback">${caseFeedback(ask)}</div>` : '');
}

/* ---------- tap the words ---------- */
function tapHtml(ask){
  const { T, item, state } = ask, c = item.c;
  const tap = tappableCase(T, c, item.answer, state.picked);
  if(state.picked === null) return tap.html + promptStem(T.t(paras(item.say).join(' '), c)) + '</div>';
  const ok = state.picked === tap.right, miss = !ok && c.segments[state.picked].note;
  const rest = (miss ? `<div class="vblock"><span class="m">Your answer</span><p>${T.t(paras(miss).join(' '), c)}</p></div>` : '')
    + taughtOnLine(ask, { name: caseTarget(ask.v, c) });
  const words = '“' + esc(c.segments[tap.right].text) + '”';
  return tap.html + `<div class="feedback">${ok ? answerHead(true, words) : `<div class="marks">${verdictMark(false, 'The words are', words, '.')}</div>`}
    <div class="vblock"><span class="m">Why</span><p>${stepReason(ask, c, item.step)}${item.joined ? ' ' + item.joined : ''}</p></div>${rest}</div>`;
}
const tapRight = ask => ask.item.c.segments[ask.state.picked].text.includes(ask.item.answer);

/* ---------- which question do you put to the case? ---------- */
function tellOptions(ask){
  const { v, item } = ask, [x, y] = item.entry.pair;
  return v.unit.ledger.filter(l => l.pair.includes(x) || l.pair.includes(y));
}
function tellHtml(ask){
  const { v, T, item, state } = ask, entry = item.entry, [x, y] = entry.pair;
  const order = state.order.map(v.ledger);
  const stem = `You cannot decide whether a case is ${T.o(x)} or ${T.o(y)}. Which question do you put to the case?`;
  if(state.picked === null) return promptStem(stem) + `<div class="opts">${order.map(l => `<button class="opt" data-pick="${esc(l.id)}">${T.t(paras(l.test).join(' '))}</button>`).join('')}</div></div>`;
  const ok = state.picked === entry.id, chosen = v.ledger(state.picked);
  const tie = tieLine(ask, entry);
  return `<div class="stepopen prompt"><p class="stem">${stem}</p></div><div class="feedback">${answerHead(ok, T.t(paras(entry.test).join(' ')))}
    <div class="vblock"><span class="m">Why</span><p>${T.t(paras(entry.shared).join(' '))} ${T.t(paras(entry.rule).join(' '))}${tie ? ' ' + tie : ''}</p></div>
    ${ok ? '' : `<div class="vblock"><span class="m">Your answer</span><p>That question separates ${T.names(chosen.pair)}.</p></div>`}
    ${taughtOnLine(ask, { ledger: entry.id })}</div>`;
}

/* ---------- the name is given: what would you expect to hear, or find? ---------- */
function reverseHtml(ask){
  const { v, T, item, state } = ask, c = item.c;
  const stem = `This is ${T.o(c.outcome)}. ${c.expect === 'hear' ? 'Which of these would you expect to hear?' : 'Which detail would you expect to find in the case?'}`;
  const options = state.order.map(i => c.options[i]);
  if(state.picked === null) return promptStem(stem) + `<div class="opts">${state.order.map(i => `<button class="opt" data-pick="${i}">${esc(c.options[i].text)}</button>`).join('')}</div></div>`;
  const right = c.options.find(o => o.voice === c.outcome), chosen = c.options[state.picked], ok = chosen === right;
  return `<div class="stepopen prompt"><p class="stem">${stem}</p></div><div class="feedback">${answerHead(ok, esc(right.text))}
    <div class="vblock"><span class="m">Why</span><p>${T.t(paras(c.why).join(' '))}</p></div>
    ${ok ? '' : `<div class="vblock"><span class="m">Your answer</span><p>That belongs to ${T.o(chosen.voice)}.</p></div>`}
    ${taughtOnLine(ask, { portrait: c.outcome })}</div>`;
}

/* ---------- a faulty claim ---------- */
function claimParts(ask, c){
  const { v, T } = ask;
  if(c.ask.type === 'missing') return {
    question: `The claim uses the name ${T.o(c.ask.name)}. What would you need to see in the case before that name could be used?`,
    choices: v.taught.map(id => ({ id, html: esc(cap(v.thing(id).needs)) })),
    answer: c.ask.name
  };
  return {
    question: `${esc(v.step(c.ask.step).q)} <span class="amongnote">(asked of the reasoning in the claim itself)</span>`,
    choices: v.step(c.ask.step).options.map(o => ({ id: o.id, html: esc(o.n) })),
    answer: c.ask.answer
  };
}
const claimQuote = (T, c) => `<blockquote class="passage">${esc(c.text)}</blockquote>${c.context ? T.PP(c.context) : ''}`;
function claimClosing(T, c){
  return `<div class="vblock"><span class="m">The fault</span><p>${T.t(paras(c.fault).join(' '))}</p></div>
    <div class="vblock soft"><span class="m">The claim, put right</span><p>${T.t(paras(c.corrected).join(' '))}</p></div>`;
}
// a claim worked for the learner: nothing is asked of it (lesson standard E6)
function claimDemoHtml(ask, c){
  const parts = claimParts(ask, c), right = parts.choices.find(x => x.id === parts.answer);
  return claimQuote(ask.T, c) + `<div class="shownroute"><p class="stem">${parts.question}</p>
      <ul class="choices">${parts.choices.map(x => `<li>${x.html}</li>`).join('')}</ul></div>
    <div class="feedback"><div class="marks">${verdictMark(true, 'The answer:', right.html)}</div>${claimClosing(ask.T, c)}</div>`;
}
function claimHtml(ask){
  const { v, T, item, state } = ask, c = item.c, parts = claimParts(ask, c);
  if(state.picked === null) return claimQuote(T, c) + promptStem(parts.question)
    + `<div class="opts">${parts.choices.map(x => `<button class="opt" data-pick="${esc(x.id)}">${x.html}</button>`).join('')}</div></div>`;
  const ok = state.picked === parts.answer, right = parts.choices.find(x => x.id === parts.answer);
  const own = ok ? '' : c.ask.type === 'missing'
    ? `That is what you must be able to point to for ${T.o(state.picked)}, which is not the name the claim uses.`
    : `You chose ${T.kw(v.option(c.ask.step, state.picked).n)}. Give that answer when ${esc(v.option(c.ask.step, state.picked).when)}. This claim shows something else: ${esc(v.option(c.ask.step, parts.answer).when)}.`;
  return claimQuote(T, c) + `<div class="stepopen prompt"><p class="stem">${parts.question}</p></div>
    <div class="feedback">${answerHead(ok, right.html)}${own ? `<div class="vblock"><span class="m">Your answer</span><p>${own}</p></div>` : ''}${claimClosing(T, c)}</div>`;
}

/* ---------- which of the key's questions tells a pair apart? ---------- */
// The question that separates two names is the one on which they share no answer. Only one of the unit's questions may do it,
// and the unit must teach two or more, or "which question" has nothing to choose between (lesson standard S6).
function separatorItem(v, entryId){
  const entry = v.ledger(entryId), codes = v.unitSteps.map(s => s.code);
  if(codes.length < 2) lessonFail(`separator item ${entryId}: the unit teaches ${codes.length} question, and there is nothing to choose between`);
  const apart = codes.filter(code => !pairAnswers(v, code, entry.pair[0]).some(a => pairAnswers(v, code, entry.pair[1]).some(b => b.id === a.id)));
  if(apart.length !== 1) lessonFail(`separator item ${entryId}: ${apart.length} of the unit's questions separate the pair, not exactly one`);
  return { type: 'separator', entry, codes, right: apart[0], mode: 'separator' };
}
const answersText = (v, code, id) => joinWords(pairAnswers(v, code, id).map(o => o.n), 'or');
function separatorHtml(ask){
  const { v, T, item, state } = ask, [x, y] = item.entry.pair;
  const stem = SAY.separatorStem(T.o(x), T.o(y));
  if(state.order === null) state.order = shuffled(item.codes);
  if(state.picked === null) return promptStem(stem)
    + `<div class="opts">${state.order.map(code => `<button class="opt" data-pick="${esc(code)}">${esc(v.step(code).q)}</button>`).join('')}</div></div>`;
  const ok = state.picked === item.right, q = v.step(item.right).q;
  const shared = pairAnswers(v, state.picked, x).filter(a => pairAnswers(v, state.picked, y).some(b => b.id === a.id));
  const own = ok ? '' : SAY.separatorSame(T.kw('“' + esc(v.step(state.picked).q) + '”'), joinWords(shared.map(o => T.kw(o.n))));
  return `<div class="stepopen prompt"><p class="stem">${stem}</p></div><div class="feedback">${answerHead(ok, esc(q))}
    <div class="vblock"><span class="m">Why</span><p>${T.t(paras(item.entry.shared).join(' '))} ${T.t(paras(item.entry.rule).join(' '))}</p>
      <p>${T.o(x)}: ${esc(answersText(v, item.right, x))}. ${T.o(y)}: ${esc(answersText(v, item.right, y))}.</p></div>
    ${own ? `<div class="vblock"><span class="m">Your answer</span><p>${own}</p></div>` : ''}
    ${taughtOnLine(ask, { step: item.right })}</div>`;
}

/* ---------- a fact asked from memory ---------- */
// The other rows of the fact's own card are the choices. Two rows with one answer would make a choice that cannot be told apart.
function factItem(v, rowId, mode, joined){
  const row = v.fact(rowId), rows = v.card(row.card).rows;
  const twin = rows.find((r, i) => rows.findIndex(x => x.a === r.a) !== i);
  if(twin) lessonFail(`facts card ${row.card}: two rows have the answer "${twin.a}", so the choices cannot be told apart`);
  if(rows.length < 2) lessonFail(`facts card ${row.card} has one row, and there is nothing to choose from`);
  return { type: 'fact', row, target: rowId, mode, joined };
}
function factHtml(ask){
  const { v, T, item, state } = ask, row = item.row, rows = v.card(row.card).rows;
  if(state.order === null) state.order = shuffled(rows.map((_, i) => i));
  const stem = SAY.factStem(row.q);
  if(state.picked === null) return promptStem(stem)
    + `<div class="opts">${state.order.map(i => `<button class="opt" data-pick="${esc(rows[i].id)}">${esc(rows[i].a)}</button>`).join('')}</div></div>`;
  const chosen = rows.find(r => r.id === state.picked), ok = chosen.id === row.id;
  const entry = !ok && v.ledgerFor ? v.ledgerFor(row.id, chosen.id) : null;
  const own = ok ? '' : `<p>${SAY.factSwapped(T.kw(chosen.a), esc(chosen.q))}</p>`
    + (entry && ask.ledgerRead.has(entry.id) ? `<p>${T.t(paras(entry.shared).join(' '))} ${T.t(paras(entry.rule).join(' '))} ${T.t(paras(entry.test).join(' '))}</p>` : '');
  return `<div class="stepopen prompt"><p class="stem">${stem}</p></div><div class="feedback">${answerHead(ok, esc(row.a))}
    <div class="vblock"><span class="m">Why</span>${T.P(row.relates, null).map(p => `<p>${p}</p>`).join('')}${item.joined ? `<p>${item.joined}</p>` : ''}</div>
    ${own ? `<div class="vblock"><span class="m">Your answer</span>${own}</div>` : ''}
    ${taughtOnLine(ask, { fact: row.id })}</div>`;
}

/* ---------- a problem, solved ---------- */
// A procedure unit's item (lesson standard A12). `last`: the working is shown up to the last step. `whole`: the problem alone.
// `route`: the key's questions and the kind of problem first, then the solving. A wrong choice is the answer a named slip gives.
function problemItem(v, c, solve, mode, joined){
  if(c.kind !== 'problem' || !c.answer || !c.steps) lessonFail(`case ${c.id}: a problem item needs steps and an answer`);
  const routed = solve === 'route', steps = routed ? v.routeSteps(c) : [];
  const unslipped = c.answer.choices.find(x => x.id !== c.answer.right && !x.slip);
  if(unslipped) lessonFail(`case ${c.id}: the wrong answer "${unslipped.text}" does not say which slip makes it`);
  if(solve === 'last' && c.steps.length < 2) lessonFail(`case ${c.id}: a "last step" item needs at least two steps`);
  return { type: 'problem', c, solve, shown: [], asked: steps, askName: routed, names: routed ? namesOffered(v, c) : [], mode, joined };
}
function problemFeedback(ask){
  const { v, T, item, state } = ask, c = item.c, routed = item.solve === 'route';
  const pick = c.answer.choices[state.picked], right = c.answer.choices.find(x => x.id === c.answer.right);
  const numOk = pick.id === right.id, res = routed ? caseResult(ask) : { ok: true, nameOk: true, routeOk: true }, target = caseTarget(v, c);
  const marks = (routed ? verdictMark(res.nameOk, res.nameOk ? 'Right:' : 'The answer is:', esc(v.nameOf(target)))
      + `<span class="mark ${res.routeOk ? '' : 'no'}">${icon(res.routeOk ? 'check' : 'cross', 13)}Route ${res.routeOk ? 'right' : 'missed'}</span>` : '')
    + verdictMark(numOk, numOk ? 'Right:' : 'The answer is:', esc(right.text));
  const working = c.steps.map(st => `<div class="stepdone static"><span class="tick">${icon('check', 12)}</span><span class="grow"><span class="m s">${esc(st.does)}</span><span class="v">${esc(st.working)}</span></span></div>`).join('');
  const routeLines = routed && !res.routeOk ? `<div class="vblock"><span class="m">The route</span>${[...res.wrongSteps, ...item.asked.filter(code => !res.wrongSteps.includes(code))].map(code => stepLine(ask, c, code)).join('')}</div>` : '';
  const own = [
    ...(numOk ? [] : [SAY.slipLine(T.kw(pick.text), T.t(paras(pick.slip).join(' '), c))]),
    ...(routed ? res.wrongSteps.map(code => answerMiss(ask, c, code, state.answers[code])) : []),
    ...(routed && !res.nameOk ? [nameMiss(ask, c, state.name)] : [])
  ];
  return `<div class="marks">${marks}</div>`
    + (routed && res.nameOk && !res.routeOk ? `<div class="warn"><span class="verdictline">${SAY.rightNameWrongRoute}.</span> A right name reached by a wrong answer on the way counts as a miss.</div>` : '')
    + `<div class="vblock"><span class="m">${esc(SAY.workingLabel)}</span><div class="steps">${working}</div>${T.PP(c.why, c)}${item.joined ? `<p>${item.joined}</p>` : ''}</div>`
    + routeLines
    + (routed && c.not ? `<div class="vblock soft"><span class="m">Why not ${esc(v.nameOf(c.not.outcome))}</span><p>${T.t(paras(c.not.why).join(' '), c)}</p></div>` : '')
    + (own.length ? `<div class="vblock"><span class="m">Your answer</span>${own.map(l => `<p>${l}</p>`).join('')}</div>` : '')
    + (!(numOk && res.ok) && c.echo ? `<div class="vblock soft"><span class="m">A likeness</span><p>This case may have brought back <i>${esc(v.caseById(c.echo).name)}</i>, which was ${T.o(caseTarget(v, v.caseById(c.echo)))}. ${SAY.likeness}</p></div>` : '')
    + (routed && c.wouldChange ? `<div class="vblock soft"><span class="m">${SAY.wouldChange}</span><p>${T.t(paras(c.wouldChange).join(' '), c)}</p></div>` : '')
    + taughtOnLine(ask, routed ? { name: target } : { solved: target });
}
function problemHtml(ask){
  const { v, T, item, state } = ask, c = item.c, routed = item.solve === 'route';
  const routeDone = !routed || (item.asked.every(code => state.answers[code]) && state.name !== null);
  const stem = item.solve === 'last' ? SAY.solveLast(c.steps[c.steps.length - 1].does) : item.solve === 'whole' ? SAY.solveWhole : SAY.solveRoute;
  const prior = item.solve === 'last' && !state.done ? c.steps.slice(0, -1).map(st =>
    `<div class="stepdone static"><span class="tick">${icon('check', 12)}</span><span class="grow"><span class="m s">${esc(st.does)}</span><span class="v">${esc(st.working)}</span></span></div>`).join('') : '';
  const head = (routed ? caseBody(ask) : T.caseName(c) + T.show(c, state.done ? v.routeSteps(c) : []))
    + (prior ? `<div class="shownroute">${lessonLabel(SAY.workingLabel)}<div class="steps">${prior}</div></div>` : '');
  if(!routeDone) return head;
  const choices = state.order.map(i => c.answer.choices[i]);
  if(state.picked === null) return head + promptStem(stem)
    + `<div class="opts">${state.order.map(i => `<button class="opt" data-pick="${i}">${esc(c.answer.choices[i].text)}</button>`).join('')}</div></div>`;
  return head + `<div class="stepopen prompt"><p class="stem">${stem}</p></div><div class="feedback">${problemFeedback(ask)}</div>`;
}

/* ---------- one entry point ---------- */
function askHtml(ask){
  const { item, state } = ask;
  if(item.type === 'tell' && !state.order) state.order = shuffled(tellOptions(ask).map(l => l.id));
  if(item.type === 'reverse' && !state.order) state.order = shuffled(item.c.options.map((_, i) => i));
  if(item.type === 'problem' && !state.order) state.order = shuffled(item.c.answer.choices.map((_, i) => i));
  const html = { case: caseHtml, tap: tapHtml, tell: tellHtml, reverse: reverseHtml, claim: claimHtml, separator: separatorHtml, fact: factHtml, problem: problemHtml }[item.type];
  return (html || lessonFail(`"${item.type}" is not an item kind of the lesson standard`))(ask);
}
// what the learner chose and whether it was right, for the practice record
function askOutcome(ask){
  const { v, item, state } = ask;
  if(item.type === 'case'){
    const res = caseResult(ask);
    return { ok: res.ok, steps: { ...state.answers }, name: state.name, nameOk: res.nameOk, routeOk: res.routeOk };
  }
  if(item.type === 'tap') return { ok: tapRight(ask), steps: {}, name: null };
  if(item.type === 'tell') return { ok: state.picked === item.entry.id, steps: {}, name: null };
  if(item.type === 'reverse') return { ok: item.c.options[state.picked].voice === item.c.outcome, steps: {}, name: item.c.options[state.picked].voice };
  if(item.type === 'separator') return { ok: state.picked === item.right, steps: {}, name: null };
  if(item.type === 'fact') return { ok: state.picked === item.row.id, steps: {}, name: state.picked };
  if(item.type === 'problem'){
    const numOk = item.c.answer.choices[state.picked].id === item.c.answer.right, res = item.solve === 'route' ? caseResult(ask) : { ok: true };
    return { ok: numOk && res.ok, steps: { ...state.answers }, name: state.name };
  }
  return { ok: state.picked === claimParts(ask, item.c).answer, steps: {}, name: null };
}
// Wires the item's controls. onChange re-renders; onDone is called once, the moment the item is answered.
function wireAsk(root, ask, onChange, onDone){
  const { item, state } = ask;
  const finish = () => { state.done = true; onDone(askOutcome(ask)); onChange(); focusOn('.feedback, .answerline'); };
  const next = () => { onChange(); focusOn('.stepopen'); };
  on('[data-step] .opt', el => {
    const code = el.parentElement.dataset.step;
    const idx = item.asked.indexOf(code);
    const kept = Object.fromEntries(item.asked.slice(0, idx).map(k => [k, state.answers[k]]));
    state.answers = { ...kept, [code]: el.dataset.o };
    state.name = null;
    if(!item.askName && item.asked.every(k => state.answers[k])) finish(); else next();
  }, root);
  on('[data-edit]', el => {
    const idx = item.asked.indexOf(el.dataset.edit);
    state.answers = Object.fromEntries(item.asked.slice(0, idx).map(k => [k, state.answers[k]]));
    state.name = null; next();
  }, root);
  // a problem is not finished when the kind of problem is named: the solving still follows
  on('#nameOpts .opt', el => { state.name = el.dataset.n; if(item.type === 'problem') next(); else finish(); }, root);
  on('[data-pick]', el => {
    if(state.picked !== null) return;
    const raw = el.dataset.pick;
    state.picked = ['tap', 'reverse', 'problem'].includes(item.type) ? Number(raw) : raw;
    finish();
  }, root);
  on('[data-show-rest]', () => { state.open = true; onChange(); }, root);
}
