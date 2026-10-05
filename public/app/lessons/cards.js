/* ===================== LESSONS: CARDS ===================== */
// What each card kind shows (lesson standard E2) and the prompts that make the learner commit before the
// explanation exists on the screen (E3). A card is data; this file is the only place that lays one out.
//
// ctx = { v, T, cardId, index, ledgerRead:Set, namedSteps:Set, firstWorked:cardId, ui, answer(choice), record(itemId, attempt) }
// ui  = this visit's state for the card: { picked, step }. Nothing is in the page before a choice is made.

/* ---------- pieces shared by several kinds ---------- */

// A case whose pieces can be tapped. Before an answer the pieces are buttons; after it the right one is marked.
function tappableCase(T, c, answer, picked){
  const right = c.segments.findIndex(s => s.text.includes(answer));
  if(right < 0) lessonFail(`case ${c.id}: no tappable piece holds "${answer}"`);
  let html = '', at = 0;
  c.segments.map((s, i) => ({ i, text: s.text, pos: c.text.indexOf(s.text) }))
    .sort((a, b) => a.pos - b.pos)
    .forEach(seg => {
      if(seg.pos < at) lessonFail(`case ${c.id}: tappable piece not found in order: ${seg.text}`);
      html += esc(c.text.slice(at, seg.pos));
      const cls = seg.i === picked ? 'tap missed' : '';
      html += picked === null ? `<span class="tap" role="button" tabindex="0" data-pick="${seg.i}">${esc(seg.text)}</span>`
            : (seg.i === right ? `<mark class="cue">${esc(seg.text)}</mark>` : `<span class="${cls}">${esc(seg.text)}</span>`);
      at = seg.pos + seg.text.length;
    });
  html += esc(c.text.slice(at));
  return { html: `<blockquote class="passage ${picked === null ? 'tappable' : ''}">${html}</blockquote>`, right };
}
// What is shown the moment the learner taps: the words, and a line about a piece tapped in error.
function tapResult(T, c, right, picked){
  const miss = picked !== right && c.segments[picked].note;
  return `<div class="answerline"><p>The words are “${esc(c.segments[right].text)}”.</p>${miss ? `<p>${T.t(paras(miss).join(' '), c)}</p>` : ''}</div>`;
}
const promptStem = html => `<div class="stepopen prompt"><p class="stem">${html}</p>`;

// two facts side by side: what each is asked, its answer, and how it fits the idea
function factPairTable(ctx, entry){
  const { v, T } = ctx, [x, y] = entry.pair.map(v.fact);
  const fits = r => T.P(r.relates).join(' ');
  return `<table class="k pair"><tr><th></th><th>Fact A</th><th>Fact B</th></tr>`
    + `<tr><td>${SAY.factAsked}</td><td>${esc(x.q)}</td><td>${esc(y.q)}</td></tr>`
    + `<tr><td>${SAY.factAnswer}</td><td>${esc(x.a)}</td><td>${esc(y.a)}</td></tr>`
    + `<tr><td>${SAY.factFits}</td><td>${fits(x)}</td><td>${fits(y)}</td></tr></table>`;
}
// the answers an outcome (or, in a gate unit, a family) gets to one question
function pairAnswers(v, code, id){
  return v.isOutcome(id) ? v.answersFor(code, id) : (v.key.gate && code === v.key.gate.code ? [v.option(code, id)] : []);
}
// the questions on a look-alike pair's routes, in the key's order: for two names of one branch, that branch's questions;
// for a pair from two branches (lesson standard S3), each one's own questions too. Only questions the learner has been taught.
function pairSteps(v, entry){
  const [x, y] = entry.pair;
  const taught = s => s.unit === v.unitId || v.unit.assumes.includes(s.unit);
  return v.steps.filter(s => taught(s) && (pairAnswers(v, s.code, x).length || pairAnswers(v, s.code, y).length));
}
function pairTable(ctx, entry){
  if(entry.pair.every(ctx.v.isFact)) return factPairTable(ctx, entry);
  const { v } = ctx, [x, y] = entry.pair;
  const cell = (code, id) => pairAnswers(v, code, id).length ? esc(pairAnswers(v, code, id).map(o => o.n).join(' / ')) : `<i>${SAY.notOnRoute}</i>`;
  return `<table class="k pair"><tr><th></th><th>${esc(v.nameOf(x))}</th><th>${esc(v.nameOf(y))}</th></tr>`
    + pairSteps(v, entry).map(s => `<tr><td>${esc(s.q)}</td><td>${cell(s.code, x)}</td><td>${cell(s.code, y)}</td></tr>`).join('')
    + `<tr><td>${SAY.pointTo}</td><td>${esc(cap(v.thing(x).needs))}</td><td>${esc(cap(v.thing(y).needs))}</td></tr></table>`;
}
// the key's own tie-break for a look-alike pair, if it has one
function tieLine(ctx, entry){
  const { v, T } = ctx;
  if(!entry.pair.every(v.isOutcome)) return null;
  const [x, y] = entry.pair.map(id => v.answersFor(entry.step, id)[0].id);
  const tie = v.tieBreak(entry.step, x, y);
  return tie ? SAY.tieBreak(T.a(entry.step, tie.loser), tie.say, T.a(entry.step, tie.winner)) : null;
}
// "How to tell them apart": the test on every card of the pair; the side-by-side table once, on its first card.
function tellApart(ctx, entry, withTie){
  const { v, T } = ctx;
  const tie = withTie ? tieLine(ctx, entry) : null;
  const firstCard = v.cardOrder.find(id => v.card(id).ledger === entry.id);
  return lessonSection(SAY.tellApart, `<p>${T.t(entry.test)}</p>${tie ? `<p>${tie}</p>` : ''}`)
    + (firstCard === ctx.cardId ? lessonSection(SAY.sideBySide, pairTable(ctx, entry)) : '');
}

/* ---------- one function per card kind ---------- */
const CARD = {};

// A fact unit's first card: what the unit is, and the groups of facts it holds (lesson standard A12)
function factOrient(ctx, card){
  const { v, T } = ctx;
  const groups = v.cardOrder.map(v.card).filter(k => k.kind === 'concept');
  return T.PP(card.canDo) + T.PP(card.everyday)
    + lessonSection('What this unit is', `<p>${SAY.factsToHold}</p>`)
    + lessonSection(SAY.factsCount(v.taught.length, groups.length), lessonList(groups.map(k => T.t(k.h))))
    + `<p>The unit has ${numWord(v.unit.parts.length)} part${v.unit.parts.length === 1 ? '' : 's'}, and you can stop after any of them.</p>`
    + `<ol>${v.unit.parts.map(p => `<li>${esc(p.title)}</li>`).join('')}</ol>`
    + (card.add ? T.PP(card.add) : '') + `<p>${SAY.howTaughtFacts} ${SAY.stakes}</p>`;
}
CARD.orient = (ctx, card) => {
  if(ctx.v.isFacts) return factOrient(ctx, card);
  const { v, T } = ctx;
  const branch = v.key.branches[card.map.branch] || [v.key.gate];
  const out = [T.PP(card.canDo), T.PP(card.everyday)];
  v.priorSteps.forEach(s => {
    out.push(lessonSection(`What ${unitLabel(v.data, s.unit)} taught, in one place`,
      `<p>The first question is ${T.q(s.code)} Its answers:</p>`
      + lessonList(s.options.map(opt => `${T.a(s.code, opt.id)}: give this answer when ${esc(opt.when)}.`
          + (opt.id === card.map.branch ? ' <b class="here">This unit is about these cases.</b>' : '')))
      + `<p>${SAY.route}</p>`));
  });
  out.push(lessonSection('The questions this unit teaches', `<p>${SAY.preview(v.taught.length)}</p>`
    + branch.map(s => `<p class="mapq">${esc(s.q)}</p>` + lessonList(s.options.map(opt => {
        const leads = v.isGate ? [opt.plain] : opt.keeps.filter(id => v.taught.includes(id)).map(id => v.thing(id).plain);
        return `<span class="kw">${esc(opt.n)}</span>${leads.length ? ' → ' + esc(leads.join(' · ')) : ''}`;
      }))).join('')));
  out.push(lessonSection(`The ${numWord(v.taught.length)} things, and the name each will get`,
    lessonList(v.taught.map(id => `${esc(cap(v.thing(id).plain))}: <span class="kw">${esc(v.nameOf(id))}</span>`))));
  out.push(`<p>The unit has ${numWord(v.unit.parts.length)} part${v.unit.parts.length === 1 ? '' : 's'}, and you can stop after any of them.</p>`
    + `<ol>${v.unit.parts.map(p => `<li>${esc(p.title)}</li>`).join('')}</ol>`
    + (card.add ? T.PP(card.add) : '') + `<p>${SAY.howTaught} ${SAY.stakes}</p>`);
  return out.join('');
};

CARD.term = (ctx, card) => {
  const { v, T } = ctx, c = v.caseById(card.case), term = v.term(card.term);
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${T.show(c)}${T.PP(card.plain, c)}`
    + lessonSection('The word for this', `<p><i>${esc(cap(term.n))}</i>: ${esc(term.means)}.</p>`)
    + T.PP(card.after, c);
};

// In a branch of two or more questions, the meet card also prints this name's answer to the unit's other questions, from the key,
// so the whole route through the branch is on the card that introduces the name (A3; a question's words may be printed before its card, A2)
function meetOtherSteps(v, T, card, id){
  if(!v.isOutcome(id)) return '';
  const others = v.unitSteps.filter(s => s.code !== card.feature.step && v.answersFor(s.code, id).length);
  return others.map(s => lessonSection(SAY.keyAlsoAsks, `<p>${T.q(s.code)}</p><p>${v.answersFor(s.code, id).map(o => T.a(s.code, o.id)).join(' or ')}</p>`)).join('');
}
CARD.meet = (ctx, card) => {
  const { v, T } = ctx, c = v.caseById(card.case), id = card.outcome || card.family, thing = v.thing(id);
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${T.show(c, [card.mark])}`
    + `<p>Stripped of its story, the case is this:</p>${lessonList(T.P(card.strip, c))}${T.PP(card.explain, c)}`
    + lessonSection(SAY.pointTo, `<p>${esc(cap(thing.needs))}. ${SAY.oneCase}</p>`)
    + lessonSection(SAY.keyAsks, `<p>${T.q(card.feature.step)}</p>`)
    + lessonSection(SAY.keyAnswer, `<p>${T.a(card.feature.step, card.feature.option)}</p>`)
    + meetOtherSteps(v, T, card, id)
    + T.PP(card.name, c)
    + (thing.aka && thing.aka.length ? `<p>${SAY.aka(thing.aka, T.o(id))}</p>` : '');
};

CARD.again = (ctx, card) => {
  const { v, T, ui } = ctx, first = v.caseById(card.first), second = v.caseById(card.second);
  const tap = tappableCase(T, second, card.prompt.answer, ui.picked);
  const firstCue = T.quoteCues(first, card.step);
  return `<p>${T.t(card.link)}</p>`
    + `<p>The first case again, in one line. <i>${esc(first.name)}</i>: ${firstCue}</p>`
    + `<p>The second case.</p>${T.caseName(second)}${tap.html}`
    + lessonSection('What to compare', `<p>${T.t(paras(card.instruction).join(' '))}</p>`)
    + (ui.picked === null ? promptStem(SAY.againStem(first.name, firstCue)) + '</div>'
        : tapResult(T, second, tap.right, ui.picked) + lessonSection('What the two share', T.PP(card.shared)));
};

CARD.lens = (ctx, card) => {
  const { T } = ctx;
  return `<p>${T.t(card.link)}</p>${T.PP(card.body)}`
    + lessonSection('Stays the same from case to case', `<p>${T.P(card.fixed).join('; ')}</p>`)
    + lessonSection('Changes on purpose', `<p>${esc(card.varies.join('; '))}.</p>`);
};

CARD.portrait = (ctx, card) => {
  const { T } = ctx;
  return `<p>${T.t(card.link)}</p>`
    + lessonSection('What it is usually like', lessonList(T.P(card.typical)))
    + lessonSection('What it is not', T.PP(card.not))
    + lessonSection('Where you will hear it', `<p>${esc(card.wild.join(' '))}</p>${T.PP(card.self)}`)
    + lessonSection(SAY.ask, T.PP(card.ask))
    + (card.act ? lessonSection(SAY.act, T.PP(card.act)) : '');
};

CARD.refute = (ctx, card) => {
  const { T } = ctx;
  return `<p>${T.t(card.link)}</p>`
    + `<div class="wrongidea">${lessonLabel('A wrong idea, as people say it')}<p>${esc(card.idea)}</p></div>`
    + `<p class="verdictline">${esc(card.verdict)}</p>`
    + lessonSection('What is right instead', T.PP(card.right));
};

CARD.lookalike = (ctx, card) => {
  if(card.facts) return factLookalike(ctx, card);
  const { v, T, ui } = ctx, entry = v.ledger(card.ledger), [x, y] = card.cases.map(v.caseById);
  const stem = SAY.whichStem(T.a(...card.prompt.option.split('.')));
  const rightLetter = card.prompt.answer === x.id ? 'A' : 'B';
  return `<p>${T.t(card.link)}</p>`
    + lessonSection('Case A', T.show(x)) + lessonSection('Case B', T.show(y))
    + lessonSection('What to compare', `<p>${T.t(paras(card.instruction).join(' '))}</p>`)
    + (ui.picked === null
        ? promptStem(stem) + `<div class="opts two"><button class="opt" data-pick="A">Case A</button><button class="opt" data-pick="B">Case B</button></div></div>`
        : `<div class="answerline"><p>Case ${rightLetter}.</p></div>`
          + lessonSection(SAY.whyThisOne, T.PP(card.difference)) + tellApart(ctx, entry, false));
};

CARD.exception = (ctx, card) => {
  const { v, T, ui } = ctx, c = v.caseById(card.case), entry = v.ledger(card.ledger);
  const tap = tappableCase(T, c, card.prompt.answer, ui.picked);
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${tap.html}<p>${T.t(paras(card.setup).join(' '))}</p>`
    + (ui.picked === null ? promptStem(SAY.exceptionStem(T.o(card.looksLike), T.o(card.is))) + '</div>'
        : tapResult(T, c, tap.right, ui.picked)
          + lessonSection(`Why this is ${v.nameOf(card.is)} and not ${v.nameOf(card.looksLike)}`, T.PP(card.because, c))
          + tellApart(ctx, entry, true) + T.PP(card.take, c));
};

CARD.question = (ctx, card) => {
  const { v, T } = ctx, s = v.step(card.step), taught = v.taught;
  const keepsOf = opt => v.isGate ? [opt.id] : opt.keeps.filter(id => taught.includes(id));
  const single = s.options.every(opt => keepsOf(opt).length === 1);
  const answers = s.options.map(opt => {
    const keeps = keepsOf(opt), gone = taught.filter(id => !keeps.includes(id));
    const leads = v.isGate ? '' : single ? `<li>It leads to ${T.namesAt(keeps, ctx.cardId)}.</li>`
      : `<li>Keeps ${T.namesAt(keeps, ctx.cardId)}.${gone.length ? ` Rules out ${T.namesAt(gone, ctx.cardId)}.` : ''}</li>`;
    return `<li>${T.a(s.code, opt.id)}<ul><li>Give this answer when ${esc(opt.when)}.</li>${leads}</ul></li>`;
  }).join('');
  const entries = v.unit.ledger.filter(l => l.step === s.code && ctx.ledgerRead.has(l.id));
  const tableHere = v.unit.ledger.filter(l => l.step === s.code && l.taughtIn && !v.cardOrder.some(id => v.card(id).ledger === l.id));
  return `<p>${T.t(card.link)}</p>`
    + lessonSection(SAY.keyAsks, `<p>${T.q(s.code)}</p>`)
    + lessonSection('What it is for', `<p>${esc(s.purpose)}.</p>`)
    + lessonSection('Its answers',
        (single && !v.isGate ? `<p>Each answer leads to one name, and so rules out the other ${numWord(taught.length - 1)}.</p>` : '') + `<ul class="answers">${answers}</ul>`)
    + lessonSection('Why it decides', `<p>${esc(s.why)}</p>${T.PP(card.decides)}`)
    + lessonSection('How to answer it from a case', T.PP(card.how))
    + (entries.length ? lessonSection('When two answers both seem to fit', T.PP(card.whenBoth)
        + lessonList(entries.map(l => `${esc(v.nameOf(l.pair[0]))} or ${esc(v.nameOf(l.pair[1]))}: ${T.t(l.test)}${tieLine(ctx, l) ? ' ' + tieLine(ctx, l) : ''}`))) : '')
    + tableHere.map(l => lessonSection(`${v.nameOf(l.pair[0])} beside ${v.nameOf(l.pair[1])}`, pairTable(ctx, l))).join('');
};

// A worked case is several screens: one per key question, then the name, the hold-back prompt and the second look.
const workedScreens = card => card.steps.length + 1;
CARD.worked = (ctx, card) => {
  const { v, T, ui } = ctx, c = v.caseById(card.case), n = card.steps.length;
  const fullWhy = ctx.firstWorked === card.id;
  const target = caseTarget(v, c);
  const liveAfter = upto => card.steps.slice(0, upto + 1).reduce((live, st) => {
    const opt = v.option(st.step, c.route[st.step][0]);
    return v.isGate ? live.filter(id => id === opt.id) : live.filter(id => opt.keeps.includes(id) || !v.taught.includes(id));
  }, v.taught);
  const standing = live => (live.length === v.taught.length ? `Still possible: all ${numWord(v.taught.length)} names this unit teaches.` : `Still possible: ${T.names(live)}.`)
    + (live.length < v.taught.length ? ` Ruled out: ${T.names(v.taught.filter(id => !live.includes(id)))}.` : '');
  const readout = live => `<div class="readout"><div class="readhead"><span class="m s">Still possible</span><span class="m s">${live.length} of ${v.taught.length}</span></div>`
    + `<ul class="cands">${v.taught.map(id => `<li class="cand ${live.includes(id) ? '' : 'out'}">${esc(v.nameOf(id))}</li>`).join('')}</ul>`
    + `<p class="forline">${standing(live)}</p></div>`;
  const doneRow = (st, i) => `<div class="stepdone static"><span class="tick">${icon('check', 12)}</span>`
    + `<span class="grow"><span class="m s">Question ${i + 1} of ${n} · ${esc(v.step(st.step).q)}</span><span class="v">${esc(v.option(st.step, c.route[st.step][0]).n)}</span></span></div>`;
  const head = `${ui.step === 0 ? `<p>${T.t(card.link)}</p>` : ''}${T.caseName(c)}`;
  if(ui.step < n){
    const st = card.steps[ui.step], s = v.step(st.step), opt = v.option(st.step, c.route[st.step][0]);
    const live = liveAfter(ui.step);
    return head + T.show(c, [st.step])
      + `<div class="steps">${card.steps.slice(0, ui.step).map(doneRow).join('')}`
      + `<div class="stepopen"><div class="stephead"><span class="num on">${ui.step + 1}</span><span class="m a">Question ${ui.step + 1} of ${n}</span></div>`
      + `<p class="stem">${esc(s.q)}</p>`
      + `<p class="forline">What it is for: ${esc(lowerFirst(s.purpose))}.${fullWhy ? ' ' + esc(s.why) : ''}</p>`
      + `<p class="forline">Answer: ${T.a(st.step, opt.id)}</p></div></div>`
      + `<div class="lesson">${T.PP(st.reason, c)}</div>` + readout(live);
  }
  const p = card.hold.prompt, right = p.choices.find(x => x.id === p.answer);
  const picked = ui.picked === null ? null : p.choices.find(x => x.id === ui.picked);
  return head + T.show(c, card.steps.map(st => st.step))
    + `<div class="steps">${card.steps.map(doneRow).join('')}</div>`
    + lessonSection('Name it', `<p>${T.o(target)}</p>`)
    + (picked === null
        ? promptStem((p.lead ? T.t(paras(p.lead).join(' '), c) + ' ' : '') + SAY.holdStem(T.o(target), T.o(card.hold.neighbour)))
          + `<div class="opts">${p.choices.map(x => `<button class="opt" data-pick="${esc(x.id)}">${T.t(x.text, c)}</button>`).join('')}</div></div>`
        : `<div class="answerline"><p>The one that settles it: ${T.t(right.text, c)}</p>${picked !== right && picked.note ? `<p>${T.t(paras(picked.note).join(' '), c)}</p>` : ''}</div>`
          + lessonSection(`Why this is ${v.nameOf(target)} and not ${v.nameOf(card.hold.neighbour)}`, T.PP(card.hold.reason, c))
          + lessonSection(SAY.secondLook, T.PP(card.impression.text, c)));
};

CARD.recap = (ctx, card) => {
  const { v, T } = ctx;
  if(v.isFacts) return `<p>${T.t(card.link)}</p>`
    + v.cardOrder.map(v.card).filter(k => k.kind === 'facts').map(k => `<div class="lsec"><p class="mapq">${cardHeading(v, T, k)}</p>`
        + lessonList(k.rows.map(r => `<span class="kw">${esc(r.q)}</span> ${esc(r.a)}`)) + '</div>').join('')
    + lessonSection('To carry away', lessonList(T.P(card.carry)));
  const portraitOf = id => v.cardOrder.map(v.card).find(k => k.kind === 'portrait' && (k.outcome || k.family) === id);
  return `<p>${T.t(card.link)}</p>`
    + lessonSection('This unit’s questions and answers', v.unitSteps.map(s => `<p class="mapq">${esc(s.q)}</p>`
        + lessonList(s.options.map(opt => `<span class="kw">${esc(opt.n)}</span>${v.isGate ? '' : ' → ' + esc(opt.keeps.filter(id => v.taught.includes(id)).map(v.nameOf).join(' · '))}`))).join(''))
    + lessonSection(`For each name: ${lowerFirst(SAY.pointTo)}, and ${lowerFirst(SAY.ask)}`,
        lessonList(v.taught.map(id => `${T.o(id)}: ${esc(v.thing(id).needs)}.`
          + (portraitOf(id) ? `<ul><li>Ask: ${T.P(portraitOf(id).ask).join(' ')}</li>${portraitOf(id).act ? `<li>Do: ${T.P(portraitOf(id).act).join(' ')}</li>` : ''}</ul>` : ''))))
    + lessonSection('To carry away', lessonList(T.P(card.carry)));
};

CARD.transfer = (ctx, card) => {
  const { v, T, ui } = ctx;
  const note = ui.note || {};
  return `<p>${T.t(card.link)}</p>${T.PP(card.ask)}`
    + `<div class="opts" id="transferNames">${card.prompts.map(p => { const id = p.outcome || p.family; return `<button class="opt ${note.outcome === id ? 'sel' : ''}" data-outcome="${esc(id)}">`
        + `${esc(v.nameOf(id))}<small>${T.t(p.occasion)}</small></button>`; }).join('')}</div>`
    + lessonSection('Where was it?', `<div class="chips wrap" id="transferPlaces">${card.places.map(pl =>
        `<button class="chip ${note.place === pl ? 'on' : ''}" data-place="${esc(pl)}">${esc(pl)}</button>`).join('')}</div>`)
    + lessonSection('In a line, what was said? (optional)',
        `<input class="noteinput" id="transferText" type="text" maxlength="280" autocomplete="off" value="${esc(note.text || '')}">`
        + `<p class="hintline">${SAY.transferNote}</p>`);
};

// The plan card (action subjects, lesson standard E18): "if I see X, then I will do Y". Examples are starting points
// the learner can edit. Nothing is saved until they press the button, and the card is optional.
CARD.plan = (ctx, card) => {
  const { T, ui } = ctx, note = ui.note || {};
  return `<p>${T.t(card.link)}</p>${T.PP(card.intro)}<p class="hintline">${SAY.planOptional}</p>`
    + lessonSection(SAY.planPick, `<div class="opts" id="planCues">${card.cues.map((x, i) =>
        `<button class="opt ${note.cue === x.cue && note.then === x.then ? 'sel' : ''}" data-cue="${i}">${esc(SAY.planIfSee)} ${esc(x.cue)}, ${esc(SAY.planThenIWill)} ${esc(x.then)}</button>`).join('')}</div>`)
    + `<div class="lsec"><label class="m fieldlabel" for="planCue">${esc(SAY.planIfSee)}</label>`
    + `<input class="noteinput" id="planCue" type="text" maxlength="200" autocomplete="off" value="${esc(note.cue || '')}">`
    + `<label class="m fieldlabel second" for="planThen">${esc(SAY.planThenIWill)}</label>`
    + `<input class="noteinput" id="planThen" type="text" maxlength="200" autocomplete="off" value="${esc(note.then || '')}"></div>`
    + `<div class="lsec"><button class="btn" id="planSave" ${note.cue && note.then ? '' : 'disabled'}>${esc(SAY.planSave)}</button>`
    + (note.saved ? `<p class="hintline" role="status">${esc(SAY.planSaved)}</p>` : '') + '</div>';
};

// A fact unit's fact, a concept's case and its plain words (lesson standard A12)
CARD.concept = (ctx, card) => {
  const { v, T } = ctx, c = v.caseById(card.case);
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${T.show(c)}${T.PP(card.plain, c)}`;
};
CARD.facts = (ctx, card) => {
  const { T } = ctx, cols = card.columns || [];
  return `<p>${T.t(card.link)}</p>`
    + `<table class="k facts"><tr>${[...SAY.factColumns, ...cols].map(h => `<th>${esc(h)}</th>`).join('')}</tr>`
    + card.rows.map(r => `<tr><td>${esc(r.q)}</td><td>${esc(r.a)}</td>${(r.cells || []).map(x => `<td>${esc(x)}</td>`).join('')}</tr>`).join('') + '</table>'
    + lessonSection(SAY.factRelates, lessonList(card.rows.map(r => `<span class="kw">${esc(r.a)}</span>: ${T.P(r.relates).join(' ')}`)));
};

// A worked example with real numbers (procedure units, lesson standard A12): every step named by its purpose, with its
// working. The step that carries the idea stops for a commit prompt: its reason, every later step and the result are not
// in the page until the learner has chosen.
CARD.solved = (ctx, card) => {
  const { v, T, ui } = ctx, c = v.caseById(card.problem), hold = card.hold, p = hold.prompt;
  const picked = ui.picked === null ? null : p.choices.find(x => x.id === ui.picked);
  const row = st => `<div class="stepdone static"><span class="tick">${icon('check', 12)}</span><span class="grow"><span class="m s">${T.t(st.does)}</span><span class="v">${T.t(st.working)}</span></span></div>`;
  const shown = card.steps.slice(0, picked ? card.steps.length : hold.step + 1);
  const body = shown.map((st, i) => `<div class="steps">${row(st)}</div>`
    + (i === hold.step ? '' : T.PP(st.why, c))
    + (i === hold.step && picked ? `<div class="answerline"><p>The one that explains it: ${T.t(p.choices.find(x => x.id === p.answer).text, c)}</p>${picked.id !== p.answer && picked.note ? `<p>${T.t(paras(picked.note).join(' '), c)}</p>` : ''}</div>${T.PP(hold.reason, c)}` : '')).join('');
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${lessonSection(SAY.solvedProblem, T.show(c))}`
    + lessonSection(SAY.workingLabel, body)
    + (picked ? lessonSection(SAY.solvedResult, T.PP(card.result, c))
        : promptStem(SAY.solvedStem) + `<div class="opts">${p.choices.map(x => `<button class="opt" data-pick="${esc(x.id)}">${T.t(x.text, c)}</button>`).join('')}</div></div>`);
};

// two facts that are easy to swap: the questions side by side, the answer given, which fact has it? (lesson standard A12, A5)
function factLookalike(ctx, card){
  const { v, T, ui } = ctx, entry = v.ledger(card.ledger), [x, y] = card.facts.map(v.fact);
  const rightLetter = card.prompt.answer === x.id ? 'A' : 'B';
  return `<p>${T.t(card.link)}</p>`
    + lessonSection('Fact A', `<blockquote class="passage">${esc(x.q)}</blockquote>`) + lessonSection('Fact B', `<blockquote class="passage">${esc(y.q)}</blockquote>`)
    + lessonSection('What to compare', `<p>${T.t(paras(card.instruction).join(' '))}</p>`)
    + (ui.picked === null
        ? promptStem(SAY.whichFactStem('“' + esc(v.fact(card.prompt.answer).a) + '”')) + `<div class="opts two"><button class="opt" data-pick="A">Fact A</button><button class="opt" data-pick="B">Fact B</button></div></div>`
        : `<div class="answerline"><p>Fact ${rightLetter}.</p></div>`
          + lessonSection(SAY.whyThisOne, T.PP(card.difference)) + tellApart(ctx, entry, false));
}

/* ---------- headings, and which cards stop for an answer ---------- */
function cardHeading(v, T, card){
  const id = card.outcome || card.family;
  if(card.continues) return cardHeading(v, T, v.card(card.continues));
  if(card.kind === 'meet') return esc(cap(v.thing(id).plain));
  if(card.kind === 'check') return card.ask.type === 'fact' ? SAY.factCheckHeading : SAY.checkHeading;
  if(card.kind === 'again' && !card.h) return esc(SAY.againHeading(v.nameOf(id)));
  if(card.kind === 'portrait' && !card.h) return esc(SAY.portraitHeading(v.nameOf(id)));
  if(card.kind === 'lookalike' && !card.h) return esc(SAY.lookalikeHeading(...v.ledger(card.ledger).pair.map(v.nameOf)));
  if(card.h == null) lessonFail(`card ${card.id} has no heading`);
  return T.t(card.h);
}
const COMMIT_KINDS = ['again', 'lookalike', 'exception'];
// true while the card is waiting for the learner's answer
function cardAwaits(card, ui){
  if(card.kind === 'worked') return ui.step === card.steps.length && ui.picked === null;
  if(card.kind === 'solved') return ui.picked === null;
  return COMMIT_KINDS.includes(card.kind) && ui.picked === null;
}
// whether a commit answer was right (commit prompts are recorded, never scored)
function commitRight(v, card, picked){
  if(card.kind === 'lookalike') return (picked === 'A' ? (card.facts || card.cases)[0] : (card.facts || card.cases)[1]) === card.prompt.answer;
  if(card.kind === 'worked') return picked === card.hold.prompt.answer;
  if(card.kind === 'solved') return picked === card.hold.prompt.answer;
  const c = v.caseById(card.kind === 'again' ? card.second : card.case);
  return c.segments[picked].text.includes(card.prompt.answer);
}
// A continuing card (S4 chains) carries on the explanation of the card before it: its link line restating what that card
// established, then its prose, in the order written, with the case it names shown where it names one. Its heading is the
// first card's (cardHeading). It asks nothing: V24 holds it to prose and a case.
const CHAIN_META = ['id', 'kind', 'continues', 'link', 'h', 'outcome', 'family', 'step'];
function continuedCard(ctx, card){
  const { v, T } = ctx, c = card.case ? v.caseById(card.case) : null;
  return `<p>${T.t(card.link)}</p>` + (c ? T.caseName(c) + T.show(c) : '')
    + Object.keys(card).filter(k => !CHAIN_META.includes(k) && k !== 'case').map(k => T.PP(card[k], c)).join('');
}
function cardHtml(ctx, card){
  if(card.continues) return continuedCard(ctx, card);
  const render = CARD[card.kind] || lessonFail(`card ${card.id} is of kind "${card.kind}", which is not a card kind of the lesson standard`);
  return render(ctx, card);
}
