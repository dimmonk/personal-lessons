/* ===================== SUBJECT SCREEN ===================== */
// Lesson standard 26.5: the end result in a sentence; the lessons in part order, each with its title, revision, draft line and state;
// a part with no lesson yet says so; practice again on a done lesson; the results.

// "Check passed, 8 of 10, Oct 12", "Step 3 of 6", or "Not started"
function lessonStateLine(subj, l){
  const data = dataOf(subj), lesson = data.lessons[l.id], last = lastCheck(data, subj.id, lesson);
  if(last) return (last.passed ? SAY.statePassed : SAY.stateNotYet)(last.right, last.total, shortDay(last.d));
  const at = lessonPlace(subj, l);
  return at > 0 ? SAY.stepOf(at + 1, stepTotal(lesson)) : SAY.notStarted;
}

function lessonRow(subj, l, number){
  const isDone = lessonIsDone(subj, l.id), resume = resumePoint(subj), isNow = !isDone && resume && resume.id === l.id;
  const badge = isDone ? `<span class="sigil sm fill">${icon('check',13)}</span>` : `<span class="sigil sm ${isNow ? 'on' : ''}">${number}</span>`;
  const lines = [`${esc(SAY.rev(l.rev))} &middot; ${esc(lessonStateLine(subj, l))}`, ...(l.status === 'draft' ? [esc(SAY.draft)] : [])];
  return `<button class="row sm ${isDone ? 'done' : ''} ${isNow ? 'now' : ''}" data-l="${esc(l.id)}">
    ${badge}
    <span class="grow"><span class="t">${esc(l.title)}</span>
      ${lines.map(x => `<span class="s" ${isNow ? 'style="color:var(--accent)"' : ''}>${x}</span>`).join('')}</span>
    ${icon('chevron')}
  </button>`;
}
function partRow(part, number){
  return `<div class="row sm notbuilt" data-part="${esc(part.id)}">
    <span class="sigil sm">${number}</span>
    <span class="grow"><span class="t" data-owner-words>${esc(part.title)}</span><span class="s">${esc(SAY.notBuilt)}</span></span>
  </div>`;
}
// the lessons in part order, with a row for each part that has none yet
function courseRows(subj){
  const baseline = subj.lessons.filter(l => l.part === null).map(l => lessonRow(subj, l, '·'));
  const parts = subj.parts.map((p, i) => {
    const l = subj.lessons.find(x => x.part === p.id);
    return l ? lessonRow(subj, l, i + 1) : partRow(p, i + 1);
  });
  return [...baseline, ...parts].join('');
}
function againSection(subj){
  const done = subj.lessons.filter(l => lessonIsDone(subj, l.id) && flowSets(dataOf(subj).lessons[l.id]).length);
  if(!done.length) return '';
  return `<div class="sect top"><span class="m">${esc(SAY.practiceAgain)}</span><span class="m s">${done.length} to practice again</span></div>
    <div class="grid">${done.map(l => `<button class="tile" data-again="${esc(l.id)}"><span class="tt">${esc(l.title)}</span>
      <span class="tf"><b>${esc(SAY.practiceAgain)}</b>${icon('arrow', 14)}</span></button>`).join('')}</div>`;
}

function renderSubject(subj){
  const done = partsDone(subj), total = subj.parts.length, resume = resumePoint(subj);
  const hasRecord = allTries(subj.id).length > 0;
  screenEl().innerHTML = `<div class="pane" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="library">${icon('back',18)}Library</button></div>

    <div style="display:flex;flex-direction:column;gap:12px;padding:10px 0 22px">
      <div style="display:flex;align-items:center;gap:10px">
        <span class="sigil" style="width:30px;height:30px;flex:0 0 30px">${subj.keyNo}</span>
        <span class="m">Subject ${subj.keyNo} &middot; Revision ${esc(subj.rev)}</span>
      </div>
      <h1 style="margin:0;font-size:34px;font-weight:800;letter-spacing:-.03em;line-height:1">${esc(subj.name)}</h1>
      <span class="m a">${esc(SAY.endResultLabel)}</span>
      <p class="endresult" data-owner-words style="margin:0;font-size:15px;line-height:1.5;color:var(--dim);max-width:38ch">${esc(subj.endResult)}</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:20px">
      <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px">
        <span class="m">Progress</span>
        <span class="m" style="letter-spacing:.08em">${done} of ${total} parts</span>
      </div>
      <div class="segs">${subj.parts.map(p => `<i class="${subj.lessons.some(l => l.part === p.id && lessonIsDone(subj, l.id)) ? 'on' : ''}"></i>`).join('')}</div>
    </div>

    ${resume ? `<div class="block"><button class="btn" id="resume">${esc(lessonPlace(subj, resume) > 0 ? SAY.resume : SAY.start)}: ${esc(resume.title)}${icon('arrow',17)}</button></div>` : ''}

    <div class="sect"><span class="m">${esc(SAY.lessonsHeading)}</span>
      <span class="m s">${total} parts &middot; ${subj.lessons.length} built</span></div>
    <div class="rows">${courseRows(subj)}</div>

    ${againSection(subj)}

    ${hasRecord ? `<div style="padding-top:26px"><button class="row sm" data-v="results">
        <span style="color:var(--label);display:flex">${icon('bars',18)}</span>
        <span class="grow"><span class="t" style="font-weight:500">${esc(SAY.resultsHeading)}</span></span>
        ${icon('chevron')}
      </button></div>` : ''}
  </div>`;

  on('[data-v]', el => go(el.dataset.v));
  on('[data-l]', el => openLesson(subj, el.dataset.l));
  on('[data-again]', el => practiceAgain(subj, el.dataset.again));
  on('#resume', () => openLesson(subj, resume.id));
}

/* ===================== RESULTS ===================== */
// First-try accuracy per lesson and per facet value side by side, the slips made most, the check history, and what comes back when
// (26.5). All of it is computed from the practice record. No grade, no comparison with anyone.
const SCORED = ['baseline'];
function triesWithDefs(subj){
  const data = dataOf(subj);
  return firstTriesOutside(subj.id, SCORED).map(({ key, t }) => ({ t, def: definitionOf(data, key) })).filter(x => x.def);
}
function facetRows(subj, rows){
  const meta = dataOf(subj).meta;
  return Object.entries(meta.facets).flatMap(([facet, def]) => def.values.map(v => {
    const mine = rows.filter(x => (x.def.facets || {})[facet] === v.id);
    return mine.length ? [`${def.name}: ${v.text}`, outOf(mine.map(x => x.t))] : null;
  }).filter(Boolean));
}
function slipRows(subj, rows){
  const names = Object.fromEntries(((dataOf(subj).meta.lists || {}).slip || []).map(s => [s.id, s.text])), counts = {};
  rows.forEach(({ t }) => Object.values(t.r).filter(r => names[r]).forEach(r => { counts[r] = (counts[r] || 0) + 1; }));
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([id, n]) => [names[id], `${n} time${n === 1 ? '' : 's'}`]);
}
function checkRows(subj){
  const data = dataOf(subj);
  return subj.lessons.flatMap(l => {
    const lesson = data.lessons[l.id];
    return completeRuns(data, subj.id, lesson).map(run => {
      const r = checkResult(data, lesson.check.pass, run.outcomes);
      return [`${l.title}, ${shortDay(run.d)}`, `${r.right} of ${r.total} · ${r.passed ? 'passed' : 'not yet'}`];
    });
  });
}
function comingBackRows(subj){
  const data = dataOf(subj), schedules = strandSchedules(data, subj.id);
  const strands = data.meta.strands.filter(s => schedules[s.id]).map(s => [s.title, schedules[s.id].due ? dayWords(schedules[s.id].due) : 'Learned']);
  const retests = retestDays(data, subj.id).map(r => [`Second check: ${r.lesson.title}`, dayWords(r.due)]);
  return [...strands, ...retests];
}
function renderResults(subj){
  const rows = triesWithDefs(subj), table = list => list.length
    ? `<table class="k results">${list.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table>` : `<p class="hintline">Nothing yet.</p>`;
  const perLesson = subj.lessons.map(l => [l.title, outOf(rows.filter(x => x.t.lesson === l.id).map(x => x.t))]);
  const section = (title, list) => `<div class="sect top"><span class="m">${esc(title)}</span></div>${table(list)}`;
  screenEl().innerHTML = `<div class="pane read" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row"><span class="m a">${esc(subj.name)}</span><h1>${esc(SAY.resultsHeading)}</h1></div>
    <p class="forline">First tries only: what you got right the first time a question came up. No grade, and nothing is compared with anyone.</p>
    ${section('Right the first time, by lesson', perLesson)}
    ${section('Right the first time, side by side', facetRows(subj, rows))}
    ${section('Slips made most', slipRows(subj, rows))}
    ${section('Checks', checkRows(subj))}
    ${section('What comes back, and when', comingBackRows(subj))}
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
}
