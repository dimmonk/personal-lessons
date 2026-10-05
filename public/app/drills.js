/* ===================== DRILL: PICK ===================== */

const answerOf = (q, it) => q.answer ? q.answer(it) : it.a;

function mountPick(host, subj, q, state, stats, storageKey, finish){
  if(state.i >= q.items.length) return finish();
  const it = q.items[state.i], ans = answerOf(q, it);
  const answered = state.picked !== null, ok = answered && state.picked === ans;
  const left = q.items.length - state.i - (answered ? 1 : 0);

  host.innerHTML = `
    <div class="readhead" style="padding:16px 0">
      <span class="m">Item ${pad2(state.i+1)} / ${q.items.length}</span>
      <span class="m s">${esc(q.title)}</span>
    </div>
    <blockquote class="passage ${q.plain?'plain':''}">${esc(it.q)}</blockquote>
    <div style="display:flex;flex-direction:column;gap:12px">
      <span class="m">${esc(q.prompt)}</span>
      <div class="opts" id="opts">${q.opts.map(o =>
        `<button class="opt ${state.picked===o?'sel':''}" data-o="${esc(o)}" ${answered?'disabled':''}>${esc(o)}</button>`).join('')}</div>
    </div>
    ${answered ? `<div style="display:flex;flex-direction:column;gap:18px;padding-top:22px">
      <div class="marks"><span class="mark ${ok?'':'no'}">${icon(ok?'check':'cross',13)}${ok?'Correct':'Missed &mdash; ' + esc(ans)}</span></div>
      <div class="vblock"><span class="m">Why</span><p>${esc(it.w)}</p></div>
    </div>` : ''}
    <div class="score">
      <span class="stat"><b>${stats.n}</b><span>Answered</span></span>
      <span class="stat"><b>${stats.ok}</b><span>Correct</span></span>
      <span class="stat"><b>${left}</b><span>Left</span></span>
    </div>
    ${answered ? `<div class="actbar"><button class="btn" id="next">${state.i===q.items.length-1?'Finish':'Next item'}${icon('arrow')}</button></div>` : ''}`;

  on('#opts .opt', el => {
    if(state.picked !== null) return;
    state.picked = el.dataset.o;
    stats.n++; if(state.picked === ans) stats.ok++;
    if(storageKey) storageSave(storageKey, stats);
    mountPick(host, subj, q, state, stats, storageKey, finish);
  }, host);
  on('#next', () => { state.i++; state.picked = null; mountPick(host, subj, q, state, stats, storageKey, finish); window.scrollTo(0,0); }, host);
}

/* ===================== DRILL: FAULTY CLAIMS ===================== */

function mountErr(host, subj, state, finish){
  if(state.i >= subj.errDrill.length) return finish();
  const it = subj.errDrill[state.i], stats = st(subj).stats.err;

  host.innerHTML = `
    <div class="readhead" style="padding:16px 0">
      <span class="m">Claim ${pad2(state.i+1)} / ${subj.errDrill.length}</span>
      <span class="m s">Faulty claims</span>
    </div>
    <blockquote class="passage">${esc(it.q)}</blockquote>
    ${state.picked ? `<div class="vblock" style="padding-top:6px"><span class="m">The fault</span><p>${esc(it.w)}</p></div>`
      : `<p style="margin:0;font-size:14px;line-height:1.55;color:var(--dim)">Say what is wrong with the claim, out loud or in writing, before you reveal it.</p>`}
    <div class="actbar">
      <button class="btn ${state.picked?'':'ghost'}" id="act">${state.picked
        ? (state.i === subj.errDrill.length-1 ? 'Finish' : 'Next claim') + icon('arrow')
        : 'Show the fault'}</button>
    </div>`;

  on('#act', () => {
    if(!state.picked){ state.picked = 'x'; stats.seen++; storageSave(`pl:${subj.id}:stats:err`, stats); }
    else { state.i++; state.picked = null; window.scrollTo(0,0); }
    mountErr(host, subj, state, finish);
  }, host);
}

/* ===================== DRILL: DETERMINATION ===================== */

function mountDet(host, subj, state, finish){
  const stats = st(subj).stats.det;
  if(state.i >= subj.specimens.length) return finish();
  const sp = subj.specimens[state.i];
  if(state.revealed) return mountVerdict(host, subj, state, sp, stats, finish);

  const steps = detActiveSteps(subj, state);
  const live  = detCandidates(subj, state);
  let openIdx = steps.findIndex(x => !state.answers[x.code]);
  if(state.editing){
    const ei = steps.findIndex(x => x.code === state.editing);
    if(ei >= 0) openIdx = ei;
  }
  const ready = openIdx === -1;

  const stepsHTML = steps.map((step, i) => {
    const ansId = state.answers[step.code];
    if(i === openIdx) return `<div class="stepopen">
      <div class="stephead"><span class="num on">${i+1}</span><span class="m a">Question ${i+1} &middot; ${esc(step.label)}</span></div>
      <div class="opts" data-step="${esc(step.code)}">${step.options.map(o =>
        `<button class="opt ${ansId===o.id?'sel':''}" data-o="${esc(o.id)}">${esc(o.n)}${o.sub?`<small>${esc(o.sub)}</small>`:''}</button>`).join('')}</div>
    </div>`;
    if(ansId){
      const opt = step.options.find(o => o.id === ansId);
      return `<button class="stepdone" data-edit="${esc(step.code)}">
        <span class="tick">${icon('check',12)}</span>
        <span class="grow"><span class="m s">${esc(step.label)}</span><span class="v">${esc(opt.n)}</span></span>
        <span class="m s">Change</span></button>`;
    }
    return `<div class="steplock">
      <span class="num off">${i+1}</span>
      <span class="grow"><span class="m s">${esc(step.label)}</span>
        <span class="v">Answer the step above</span></span>
      <span style="color:var(--disabled);display:flex">${icon('lock',15)}</span></div>`;
  }).join('');

  const nameHTML = ready
    ? `<div class="stepopen">
        <div class="stephead"><span class="num on">${steps.length+1}</span><span class="m a">Name it</span></div>
        <div class="opts" id="nameOpts">${nameOptions(subj, state).map(o =>
          `<button class="opt ${state.outcome===o.id?'sel':''}" data-n="${esc(o.id)}">${esc(o.n)}</button>`).join('')}</div>
      </div>`
    : `<div class="steplock">
        <span class="num off">${steps.length+1}</span>
        <span class="grow"><span class="m s">Name it</span>
          <span class="v">Answer every step first</span></span>
        <span style="color:var(--disabled);display:flex">${icon('lock',15)}</span></div>`;

  host.innerHTML = `
    <div class="readhead" style="padding:16px 0">
      <span class="m">Specimen ${pad2(state.i+1)} / ${subj.specimens.length}</span>
      <span class="m s">${live.length} of ${subj.outcomes.length} left</span>
    </div>
    <blockquote class="passage">${esc(sp.q)}</blockquote>
    <div class="readout">
      <div class="readhead"><span class="m s">Readout &middot; nothing to tap</span></div>
      <ul class="cands">${subj.outcomes.map(o =>
        `<li class="cand ${live.includes(o.id)?'':'out'}">${esc(o.n)}</li>`).join('')}</ul>
    </div>
    <div class="steps">${stepsHTML}${nameHTML}</div>
    <div class="score">
      <span class="stat"><b>${stats.n}</b><span>Determined</span></span>
      <span class="stat"><b>${stats.label}</b><span>Name</span></span>
      <span class="stat"><b>${stats.frame}</b><span>Answers</span></span>
    </div>
    <div class="actbar">
      <div class="actrow">
        <button class="btn ghost" id="skip" style="width:92px;flex:0 0 92px">Skip</button>
        <button class="btn" id="record" ${state.outcome?'':'disabled'}>Record determination</button>
      </div>
      <p class="hint">Right name by the wrong route counts as a miss</p>
    </div>`;

  on('[data-step] .opt', el => {
    const code = el.parentElement.dataset.step;
    const idx = steps.findIndex(x => x.code === code);
    state.answers[code] = el.dataset.o;
    state.outcome = null;
    state.editing = null;
    // re-answering a step invalidates every step after it
    if(subj.determination.gateCode === code) state.answers = {[code]: state.answers[code]};
    else steps.slice(idx + 1).forEach(s2 => delete state.answers[s2.code]);
    mountDet(host, subj, state, finish);
  }, host);
  on('[data-edit]', el => { state.editing = el.dataset.edit; mountDet(host, subj, state, finish); }, host);
  on('#nameOpts .opt', el => { state.outcome = el.dataset.n; mountDet(host, subj, state, finish); }, host);
  on('#record', () => {
    if(!state.outcome) return;
    const cs = correctSteps(subj, sp);
    const routeOk = cs.every(step => (sp.sub[step.code]||[]).includes(state.answers[step.code]));
    stats.n++;
    if(state.outcome === sp.outcome) stats.label++;
    if(routeOk) stats.frame++;
    state.revealed = true;
    storageSave(`pl:${subj.id}:stats:det`, stats);
    mountDet(host, subj, state, finish); window.scrollTo(0,0);
  }, host);
  on('#skip', () => { nextSpecimen(state); mountDet(host, subj, state, finish); window.scrollTo(0,0); }, host);
}

function nextSpecimen(state){ state.i++; state.answers = {}; state.outcome = null; state.revealed = false; state.editing = null; }

function mountVerdict(host, subj, state, sp, stats, finish){
  const steps = correctSteps(subj, sp);
  const routeOk = steps.every(step => (sp.sub[step.code]||[]).includes(state.answers[step.code]));
  const okO = state.outcome === sp.outcome;
  const bad = routeOk ? null : steps.find(step => !(sp.sub[step.code]||[]).includes(state.answers[step.code]));
  const want = bad ? bad.options.filter(o => (sp.sub[bad.code]||[]).includes(o.id)).map(o => o.n).join(' or ') : '';
  const last = state.i === subj.specimens.length - 1;

  host.innerHTML = `
    <div class="readhead" style="padding:16px 0">
      <span class="m">Specimen ${pad2(state.i+1)} / ${subj.specimens.length}</span>
      <span class="m s">Recorded</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px;padding-bottom:24px">
      <span class="m">The answer was</span>
      <h1 style="margin:0;font-size:32px;font-weight:800;letter-spacing:-.03em;line-height:1.02;color:var(--accent)">${esc(outcomeName(subj, sp.outcome))}</h1>
      <div class="marks">
        <span class="mark ${okO?'':'no'}">${icon(okO?'check':'cross',13)}Name ${okO?'correct':'missed'}</span>
        <span class="mark ${routeOk?'':'no'}">${icon(routeOk?'check':'cross',13)}Answers ${routeOk?'right':'missed'}</span>
      </div>
    </div>
    ${(okO && !routeOk) ? `<div class="warn" style="margin:0 0 24px">
      <strong>Right name, wrong route.</strong> Scored as a miss. The question &ldquo;${esc(bad.label)}&rdquo; wanted
      <b style="color:var(--text)">${esc(want)}</b>. A name you cannot reach by the questions will not survive an unfamiliar case.</div>` : ''}
    ${(!okO && !routeOk && bad) ? `<div class="warn" style="margin:0 0 24px">
      <strong>&ldquo;${esc(bad.label)}&rdquo; went wrong.</strong> It wanted <b style="color:var(--text)">${esc(want)}</b>.</div>` : ''}
    <div style="display:flex;flex-direction:column;gap:24px;padding-bottom:4px">
      <div class="vblock"><span class="m">Why</span><p>${esc(sp.why)}</p></div>
      <div class="vblock soft"><span class="m">${esc(subj.falsLabel || 'What would falsify this reading')}</span><p>${esc(sp.fals)}</p></div>
    </div>
    <div class="score">
      <span class="stat"><b>${stats.n}</b><span>Determined</span></span>
      <span class="stat"><b style="color:var(--green)">${stats.label}</b><span>Name</span></span>
      <span class="stat"><b style="color:${stats.frame===stats.n?'var(--green)':'var(--coral)'}">${stats.frame}</b><span>Answers</span></span>
    </div>
    <div class="actbar"><button class="btn" id="next">${last?'Finish':'Next specimen'}${icon('arrow')}</button></div>`;

  on('#next', () => { nextSpecimen(state); mountDet(host, subj, state, finish); window.scrollTo(0,0); }, host);
}

/* ===================== DRILL SHELLS ===================== */

function drillShell(subj, label, build){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar">
      <button class="iconbtn" data-v="subject">${icon('back',20)}</button>
      <span class="m">${label}</span>
      <span class="spacer"></span>
    </div>
    <div id="host"></div>
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
  build(document.getElementById('host'));
}

function renderUnitDrill(subj){
  const S = st(subj), u = subj.course[S.course.u];
  drillShell(subj, `Unit ${esc(u.tag)} &middot; Drill`, host => {
    const finish = () => finishUnit(subj);
    if(u.drill.kind === 'det')      mountDet(host, subj, S.detState, finish);
    else if(u.drill.kind === 'err') mountErr(host, subj, S.errState, finish);
    else {
      const q = subj.quickDrills.find(x => x.key === u.drill.key);
      mountPick(host, subj, q, S.drill[q.key], S.stats[q.key], `pl:${subj.id}:stats:${q.key}`, finish);
    }
  });
}

function renderDrill(subj){
  const q = subj.quickDrills.find(x => x.key === APP.drillKey);
  if(!q) return go('subject');
  const S = st(subj);
  drillShell(subj, 'Drill', host => mountPick(host, subj, q, S.drill[q.key], S.stats[q.key],
    `pl:${subj.id}:stats:${q.key}`,
    () => doneScreen(subj, 'Set complete', `<b>${S.stats[q.key].ok}</b> correct of <b>${S.stats[q.key].n}</b> answered.`,
      () => { S.drill[q.key] = {i:0, picked:null}; render(); })));
}

function renderErr(subj){
  const S = st(subj);
  drillShell(subj, 'Faulty claims', host => mountErr(host, subj, S.errState,
    () => doneScreen(subj, 'Set complete', `All ${subj.errDrill.length} faults reviewed.`,
      () => { S.errState = {i:0, picked:null}; render(); })));
}

function renderDet(subj){
  const S = st(subj), d = S.stats.det;
  drillShell(subj, 'Determination', host => mountDet(host, subj, S.detState,
    () => doneScreen(subj, 'All cases named',
      `Names correct <b>${d.label}</b> &middot; answers right <b>${d.frame}</b> of <b>${d.n}</b> recorded.`,
      () => { S.detState = freshDet(); render(); })));
}

function doneScreen(subj, title, line, again){
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="done-screen">
      <span style="color:var(--accent);display:flex">${icon('check',34)}</span>
      <h2>${esc(title)}</h2>
      <p>${line}</p>
      <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
        <button class="btn" id="again">Run it again</button>
        <button class="btn ghost" data-v="subject">Back to ${esc(subj.name)}</button>
      </div>
    </div>
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
  on('#again', () => again());
}

function finishUnit(subj){
  const S = st(subj);
  S.course.done[S.course.u] = true;
  S.course.phase = 'unitdone';
  saveCourse(subj);
  go('unitdone');
}

function renderUnitDone(subj){
  const S = st(subj), c = S.course, u = subj.course[c.u], last = c.u === subj.course.length - 1;
  const key = u.drill.kind === 'det' ? 'det' : (u.drill.kind === 'err' ? 'err' : u.drill.key);
  const s = S.stats[key];
  const line = u.drill.kind === 'det'
    ? `Names correct <b>${s.label}</b> &middot; answers right <b>${s.frame}</b> of <b>${s.n}</b>.`
    : (u.drill.kind === 'err' ? `All ${subj.errDrill.length} faults reviewed.`
                              : `<b>${s.ok}</b> correct of <b>${s.n}</b> answered.`);

  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="done-screen">
      <span style="color:var(--accent);display:flex">${icon('check',34)}</span>
      <h2>Unit ${esc(u.tag)} complete</h2>
      <p>${line}</p>
      <div class="segs" style="width:100%;max-width:300px">${subj.course.map((_,i) =>
        `<i class="${unitDone(subj,i)?'on':''}"></i>`).join('')}</div>
      <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:300px;padding-top:6px">
        ${last ? '' : `<button class="btn" id="on">Continue to Unit ${esc(subj.course[c.u+1].tag)}${icon('arrow')}</button>`}
        <button class="btn ghost" id="redo">Redo the drill</button>
        <button class="btn ghost" id="reread">Reread the lesson</button>
      </div>
      ${last ? `<p style="padding-top:8px">Every unit is run. The reference keeps all of it, plus where these questions stop.</p>` : ''}
    </div>
  </div>`;

  on('[data-v]', el => go(el.dataset.v));
  on('#on', () => openUnit(subj, c.u + 1));
  on('#redo', () => startUnitDrill(subj));
  on('#reread', () => { c.card = 0; c.phase = 'read'; saveCourse(subj); go('lesson'); });
}
