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

function pairTable(ctx, entry){
  const { v } = ctx, [x, y] = entry.pair;
  const gateCode = v.key.gate.code;
  const answers = (code, id) => v.isOutcome(id) ? v.answersFor(code, id) : (code === gateCode ? [v.option(code, id)] : []);
  const steps = [...v.assumedSteps, ...v.unitSteps].filter(s => answers(s.code, x).length || answers(s.code, y).length);
  const cell = (code, id) => esc(answers(code, id).map(o => o.n).join(' / '));
  return `<table class="k pair"><tr><th></th><th>${esc(v.nameOf(x))}</th><th>${esc(v.nameOf(y))}</th></tr>`
    + steps.map(s => `<tr><td>${esc(s.q)}</td><td>${cell(s.code, x)}</td><td>${cell(s.code, y)}</td></tr>`).join('')
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

CARD.orient = (ctx, card) => {
  const { v, T } = ctx;
  const branch = v.key.branches[card.map.branch] || [v.key.gate];
  const out = [T.PP(card.canDo), T.PP(card.everyday)];
  v.assumedSteps.forEach(s => {
    out.push(lessonSection(`What ${unitLabel(v.data, s.unit)} taught, in one place`,
      `<p>The key’s first question is ${T.q(s.code)} Its answers:</p>`
      + lessonList(s.options.map(opt => `${T.a(s.code, opt.id)}: give this answer when ${esc(opt.when)}.`
          + (opt.id === card.map.branch ? ' <b class="here">This unit is about these cases.</b>' : '')))
      + `<p>${SAY.route}</p>`));
  });
  out.push(lessonSection('The part of the key this unit teaches', `<p>${SAY.preview(v.taught.length)}</p>`
    + branch.map(s => `<p class="mapq">${esc(s.q)}</p>` + lessonList(s.options.map(opt => {
        const leads = v.isGate ? [opt.plain] : opt.keeps.map(id => v.thing(id).plain);
        return `<span class="kw">${esc(opt.n)}</span>${leads.length ? ' → ' + esc(leads.join(' · ')) : ''}`;
      }))).join('')));
  out.push(lessonSection(`The ${numWord(v.taught.length)} things, and the name each will get`,
    lessonList(v.taught.map(id => `${esc(cap(v.thing(id).plain))}: <span class="kw">${esc(v.nameOf(id))}</span>`))));
  out.push(`<p>The unit has ${numWord(v.unit.parts.length)} parts, and you can stop after any of them.</p>`
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

CARD.meet = (ctx, card) => {
  const { v, T } = ctx, c = v.caseById(card.case), id = card.outcome || card.family, thing = v.thing(id);
  return `<p>${T.t(card.link)}</p>${T.caseName(c)}${T.show(c, [card.mark])}`
    + `<p>Stripped of its story, the case is this:</p>${lessonList(T.P(card.strip, c))}${T.PP(card.explain, c)}`
    + lessonSection(SAY.pointTo, `<p>${esc(cap(thing.needs))}. ${SAY.oneCase}</p>`)
    + lessonSection(SAY.keyAsks, `<p>${T.q(card.feature.step)}</p>`)
    + lessonSection(SAY.keyAnswer, `<p>${T.a(card.feature.step, card.feature.option)}</p>`)
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
    + lessonSection(SAY.ask, T.PP(card.ask));
};

CARD.refute = (ctx, card) => {
  const { T } = ctx;
  return `<p>${T.t(card.link)}</p>`
    + `<div class="wrongidea">${lessonLabel('A wrong idea, as people say it')}<p>${esc(card.idea)}</p></div>`
    + `<p class="verdictline">${esc(card.verdict)}</p>`
    + lessonSection('What is right instead', T.PP(card.right));
};

CARD.lookalike = (ctx, card) => {
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
    const leads = v.isGate ? '' : single ? `<li>It leads to ${T.names(keeps)}.</li>`
      : `<li>Keeps ${T.names(keeps)}.${gone.length ? ` Rules out ${T.names(gone)}.` : ''}</li>`;
    return `<li>${T.a(s.code, opt.id)}<ul><li>Give this answer when ${esc(opt.when)}.</li>${leads}</ul></li>`;
  }).join('');
  const entries = v.unit.ledger.filter(l => l.step === s.code && ctx.ledgerRead.has(l.id));
  const tableHere = v.unit.ledger.filter(l => l.step === s.code && l.taughtIn && !v.cardOrder.some(id => v.card(id).ledger === l.id));
  return `<p>${T.t(card.link)}</p>`
    + lessonSection(SAY.keyAsks, `<p>${T.q(s.code)}</p>`)
    + lessonSection('What it is for', `<p>${esc(s.purpose)}.</p>`)
    + lessonSection('Its answers, exactly as the key shows them',
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
  const readout = live => `<div class="readout"><div class="readhead"><span class="m s">Still possible</span><span class="m s">${live.length} of ${v.taught.length}</span></div>`
    + `<ul class="cands">${v.taught.map(id => `<li class="cand ${live.includes(id) ? '' : 'out'}">${esc(v.nameOf(id))}</li>`).join('')}</ul></div>`;
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
  const portraitOf = id => v.cardOrder.map(v.card).find(k => k.kind === 'portrait' && (k.outcome || k.family) === id);
  return `<p>${T.t(card.link)}</p>`
    + lessonSection('The key for this unit, in its own words', v.unitSteps.map(s => `<p class="mapq">${esc(s.q)}</p>`
        + lessonList(s.options.map(opt => `<span class="kw">${esc(opt.n)}</span>${v.isGate ? '' : ' → ' + esc(opt.keeps.map(v.nameOf).join(' · '))}`))).join(''))
    + lessonSection(`For each name: ${lowerFirst(SAY.pointTo)}, and ${lowerFirst(SAY.ask)}`,
        lessonList(v.taught.map(id => `${T.o(id)}: ${esc(v.thing(id).needs)}.`
          + (portraitOf(id) ? `<ul><li>Ask: ${T.P(portraitOf(id).ask).join(' ')}</li></ul>` : ''))))
    + lessonSection('To carry away', lessonList(T.P(card.carry)));
};

CARD.transfer = (ctx, card) => {
  const { v, T, ui } = ctx;
  const note = ui.note || {};
  return `<p>${T.t(card.link)}</p>${T.PP(card.ask)}`
    + `<div class="opts" id="transferNames">${card.prompts.map(p => `<button class="opt ${note.outcome === p.outcome ? 'sel' : ''}" data-outcome="${esc(p.outcome)}">`
        + `${esc(v.nameOf(p.outcome))}<small>${esc(p.occasion)}</small></button>`).join('')}</div>`
    + lessonSection('Where was it?', `<div class="chips wrap" id="transferPlaces">${card.places.map(pl =>
        `<button class="chip ${note.place === pl ? 'on' : ''}" data-place="${esc(pl)}">${esc(pl)}</button>`).join('')}</div>`)
    + lessonSection('In a line, what was said? (optional)',
        `<input class="noteinput" id="transferText" type="text" maxlength="280" autocomplete="off" value="${esc(note.text || '')}">`
        + `<p class="hintline">${SAY.transferNote}</p>`);
};

CARD.plan = (ctx, card) => {
  const { T } = ctx;
  return `<p>${T.t(card.link)}</p>${T.PP(card.intro)}${lessonList(card.cues.map(x => `${esc(x.cue)}, ${esc(x.then)}`))}`;
};

/* ---------- headings, and which cards stop for an answer ---------- */
function cardHeading(v, T, card){
  const id = card.outcome || card.family;
  if(card.continues) return cardHeading(v, T, v.card(card.continues));
  if(card.kind === 'meet') return esc(cap(v.thing(id).plain));
  if(card.kind === 'check') return SAY.checkHeading;
  if(card.kind === 'again' && !card.h) return esc(SAY.againHeading(v.nameOf(id)));
  if(card.kind === 'portrait' && !card.h) return esc(SAY.portraitHeading(v.nameOf(id)));
  if(card.kind === 'lookalike' && !card.h) return esc(SAY.lookalikeHeading(...v.ledger(card.ledger).pair.map(v.nameOf)));
  return T.t(card.h);
}
const COMMIT_KINDS = ['again', 'lookalike', 'exception'];
// true while the card is waiting for the learner's answer
function cardAwaits(card, ui){
  if(card.kind === 'worked') return ui.step === card.steps.length && ui.picked === null;
  return COMMIT_KINDS.includes(card.kind) && ui.picked === null;
}
// whether a commit answer was right (commit prompts are recorded, never scored)
function commitRight(v, card, picked){
  if(card.kind === 'lookalike') return (picked === 'A' ? card.cases[0] : card.cases[1]) === card.prompt.answer;
  if(card.kind === 'worked') return picked === card.hold.prompt.answer;
  const c = v.caseById(card.kind === 'again' ? card.second : card.case);
  return c.segments[picked].text.includes(card.prompt.answer);
}
function cardHtml(ctx, card){
  const render = CARD[card.kind] || lessonFail(`card kind "${card.kind}" has no renderer yet`);
  return render(ctx, card);
}
