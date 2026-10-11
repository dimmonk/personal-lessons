// A guard is not coverage until it has been seen to fail. Each seeded fault is a change to one of the app's files on its way to the
// browser (static-server.mjs `transform`); the browser checks are then run against that app, and exactly the check the fault is
// seeded for must go red. A fault whose text is not found in the file fails the run, so a fault can never go stale quietly.
// (`only` limits a fault to the checks that can see it; a fault with none runs every check but the sound checks.)
import { startServer } from './static-server.mjs';
import { makeEnv } from './e2e-env.mjs';
import { CHECKS } from './e2e-checks.mjs';
import { SOUND_CHECKS, SOUND_LANES } from './e2e-sing.mjs';

const replace = (file, from, to) => ({ file, from, to });
// The sound checks spend minutes in real time on real sound, so the two kinds of fault each run only the checks that can see them: a fault in
// the sound or singing code runs the five sound checks (exactly one of them must go red), and every other fault runs the other checks.
const sound = fault => ({ ...fault, only: Object.keys(SOUND_CHECKS) });

export const FAULTS = [
  { check: 'X1', name: 'a question moves on by itself after two and a half seconds',
    edits: [replace('app/lessons/queue.js', "  Q.cur = { ...Q.cur, done: true, score };\n  paintQueue();",
      "  Q.cur = { ...Q.cur, done: true, score };\n  const stay = Q.at, run = Q.run; setTimeout(() => { if (Q.run === run && Q.at === stay) nextQuestion(); }, 2500);\n  paintQueue();")] },
  { check: 'X2', name: 'the reason shows as soon as one of two asks is answered',
    edits: [replace('app/lessons/item-view.js', "<div class=\"asks\">${asks}</div>${state.feedback || ''}</div>`;",
      "<div class=\"asks\">${asks}</div>${state.feedback || (open.length > Object.keys(state.a).length && Object.keys(state.a).length ? `<div class=\"feedback\" data-feedback>${esc(paras(item.reason).join(' '))}</div>` : '')}</div>`;")] },
  { check: 'X3', name: 'an answer button wider than a phone',
    edits: [replace('app.css', '.opt{display:flex;', '.opt{min-width:420px;display:flex;')] },
  { check: 'X5', name: 'a place saved under a key of its own',
    edits: [replace('app/lessons/player.js', "  saveSeenLesson(subj.id, lesson.id, { rev: lesson.rev, at });",
      "  saveSeenLesson(subj.id, lesson.id, { rev: lesson.rev, at });\n  storageSave('pl:' + subj.id + ':course', { at });")] },
  { check: 'X21', name: 'every try sent to another host',
    edits: [replace('app/lessons/records.js', "  storageSave(`pl:${subjectId}:items`, itemsCache[subjectId]);\n  return entry;",
      "  storageSave(`pl:${subjectId}:items`, itemsCache[subjectId]);\n  fetch('https://example.invalid/log', { method: 'POST', body: JSON.stringify(entry) }).catch(() => {});\n  return entry;")] },
  { check: 'X22', name: 'a seen question asked while unseen ones are held back',
    edits: [replace('app/lessons/schedule.js', "const bank = leastSeen(subjectId, fixed.filter(d => !used.has(d.id) && !seenBefore(subjectId, d.id)));", "const bank = [];")] },
  { check: 'X23', name: 'feedback shown between the questions of a check',
    edits: [replace('app/lessons/queue.js', "const marks = cur.done && Q.feedback === 'after-each';", "const marks = cur.done;")] },
  // typed numbers and figures (26.7: X13, X20)
  { check: 'X13', name: 'the "your answer and your estimate disagree" line shown in a check',
    edits: [replace('app/lessons/number.js', "const estimateCheckOn = support => !!(support && support.estimateCheck);", "const estimateCheckOn = support => true;")] },
  { check: 'X13', name: 'a calculator on the estimate',
    edits: [replace('app/lessons/number-view.js', "${locked || estimate ? '' : calcHtml(calc)}", "${locked ? '' : calcHtml(calc)}")] },
  { check: 'X13', name: 'a tolerance by distance that leaves out its own edge',
    edits: [replace('app/lessons/number.js', "('abs' in tol && distance <= tol.abs + NUMBER_EPS)", "('abs' in tol && distance < tol.abs)")] },
  { check: 'X13', name: 'an estimate that is under the answer called over it',
    edits: [replace('app/lessons/number.js', "const dir = typed > exact ? 'over' : typed < exact ? 'under' : 'same';", "const dir = typed < exact ? 'over' : typed > exact ? 'under' : 'same';")] },
  { check: 'X20', name: 'a 100% bar part drawn a tenth too short',
    edits: [replace('app/lessons/doc-view.js', 'width="${p.pct}" height="20"', 'width="${p.pct * 0.9}" height="20"')] },
  { check: 'X25', name: 'the cart without its big line no longer recognised as a slip in Math',
    edits: [replace('subjects/math/gen-totals.js', "[{ slip: 'missed-line', value: 'noBig', then: 'That is the answer you get when the {bigName} line is left out.' }, ...pointTraps])],", "[{ slip: 'missed-line', value: 'tenfold', then: 'That is the answer you get when the {bigName} line is left out.' }, ...pointTraps])],")] },
  // the learner's own data, the papers and the form (26.7: X24; 26.10: X26, X27)
  { check: 'X24', name: 'a balance of eight digits accepted',
    edits: [replace('app/lessons/own.js', 'const OWN_MAX_DIGITS = 8;', 'const OWN_MAX_DIGITS = 80;')] },
  { check: 'X24', name: 'a day in the past accepted for a dated change',
    edits: [replace('app/lessons/own.js', "if(!doneNow && r.value.when !== undefined && r.value.when < today)", "if(false && !doneNow && r.value.when !== undefined && r.value.when < today)")] },
  { check: 'X24', name: 'a calendar file for the day after the change',
    edits: [replace('app/lessons/own.js', '`DTSTART;VALUE=DATE:${icsDay(action.when)}`', '`DTSTART;VALUE=DATE:${icsDay(icsNextDay(action.when))}`')] },
  { check: 'X24', name: 'a calendar file with lines that are not folded',
    edits: [replace('app/lessons/own.js', 'const parts = [line.slice(0, 75)];', 'const parts = [line];')] },
  { check: 'X24', name: 'a done mark that does not stick',
    edits: [replace('app/lessons/own.js', 'actions.map(a => a.id === id ? { ...a, done: today } : a)', 'actions.map(a => a)')] },
  { check: 'X24', name: 'the accounts shown on the progress screen',
    edits: [replace('app/progress.js', "<p class=\"hintline\">${esc(n ? PROGRESS_SAY.logNote : PROGRESS_SAY.emptyLog)}</p>", "<p class=\"hintline\">${esc(n ? PROGRESS_SAY.logNote : PROGRESS_SAY.emptyLog)} ${esc(JSON.stringify(notesOf('ledger')))}</p>")] },
  { check: 'X24', name: 'delete that leaves the accounts on the phone',
    edits: [replace('app/lessons/own-run.js', 'localStorage.removeItem(`pl:${subj.id}:notes`);', 'void 0;')] },
  { check: 'X27', name: 'every paper of a household open at once',
    edits: [replace('app/lessons/doc-view.js', "${i === chosen ? '' : 'hidden'}", "${''}")] },
  { check: 'X27', name: 'the paper the learner opened shut again when the screen is painted',
    edits: [replace('app/lessons/doc-run.js', 'DOC_TAB = { scope: group.dataset.scope, at };', 'void 0;')] },
  { check: 'X27', name: 'a form that can be answered with a field empty',
    edits: [replace('app/lessons/form.js', '=> ask.fields.every(f => {', '=> ask.fields.some(f => {')] },
  { check: 'X27', name: 'a form counted right when one field is',
    edits: [replace('app/lessons/form.js', "if(results.every(r => r === 'ok')) return 'ok';", "if(results.some(r => r === 'ok')) return 'ok';")] },
  { check: 'X27', name: 'a value looked up with no source',
    edits: [replace('app/lessons/doc-view.js', '${esc(SAY.refLooked(ref.asOf))}. ${esc(SAY.refSource(ref.source))}.', '${esc(SAY.refLooked(ref.asOf))}.')] },
  { check: 'X27', name: 'a value looked up that is never called old',
    edits: [replace('app/lessons/doc-view.js', 'const REF_STALE_DAYS = 365;', 'const REF_STALE_DAYS = 99999;')] },
  { check: 'X26', name: 'the percent used as dollars no longer recognised as a slip in Wealth',
    edits: [replace('subjects/wealth/gen-cost.js', "{ slip: 'percent-as-dollars', value: 'percentWhole',", "{ slip: 'percent-as-dollars', value: 'noFee',")] },
  { check: 'X26', name: 'the fund of a different kind not named as a slip in Wealth',
    edits: [replace('subjects/wealth/items-cost.js', "{ id: 'bonds', text: 'Total Bond Index Fund', slip: 'wrong-kind', then:", "{ id: 'bonds', text: 'Total Bond Index Fund', then:"),
      replace('subjects/wealth/gen-cost.js', "{ id: 'bonds', text: '{bondIndexName}', slip: 'wrong-kind', then:", "{ id: 'bonds', text: '{bondIndexName}', then:")] },
  { check: 'X26', name: 'no sample to find the lines on the learner\'s own papers',
    edits: [replace('subjects/wealth/l2.lesson.js', "{ own: 'sheet', model: 'w-statement' }", "{ own: 'sheet' }")] },
  // articles, the tap and the charts (26.7: X15, X20; 26.10: X30, X31)
  { check: 'X15', name: 'the right line of a tap marked before the answer',
    edits: [replace('app/lessons/item-view.js', "const picked = !!tap && tap.picked.includes(seg.id), fine = seg.fine ? ' fine' : '';",
      "const picked = !!tap && tap.picked.includes(seg.id), fine = seg.fine ? ' fine' : '';\n  if(tap && !tap.locked && tap.right.includes(seg.id)) return `<button type=\"button\" class=\"tapseg\" data-tap=\"${esc(seg.id)}\" data-seg=\"${esc(seg.id)}\"><mark class=\"cue\">${esc(seg.text)}</mark></button>`;")] },
  { check: 'X15', name: 'Answer open with one of two lines tapped',
    edits: [replace('app/lessons/tap.js', 'const tapReady = (ask, picked) => picked.length === tapPick(ask);', 'const tapReady = (ask, picked) => picked.length >= 1;')] },
  { check: 'X15', name: 'a third line taken when two are wanted',
    edits: [replace('app/lessons/tap-run.js', 'before.length < tapPick(ask) ? [...before, segmentId] : before', '[...before, segmentId]')] },
  { check: 'X15', name: 'a line of another block than the one named can be tapped',
    edits: [replace('app/lessons/tap.js', 'const tapBlocks = (item, ask) => ask.in ? item.blocks.filter(b => b.id === ask.in) : item.blocks;', 'const tapBlocks = (item, ask) => item.blocks;')] },
  { check: 'X15', name: 'a wrong line that names a slip scored as a plain miss',
    edits: [replace('app/lessons/tap.js', 's && s.slip && !right.includes(s.id)', 's && false')] },
  { check: 'X15', name: 'the note of a wrong line left out of the feedback',
    edits: [replace('app/lessons/item-view.js', 'parts = [seg.note, seg.slip ?', 'parts = [null, seg.slip ?')] },
  { check: 'X20', name: 'a bar drawn from zero on a cut axis',
    edits: [replace('app/lessons/chart-view.js', 'top = chartAt(y, v);', 'top = chartAt({ ...y, from: 0 }, v);')] },
  { check: 'X20', name: 'the chart redrawn from zero keeps its cut axis',
    edits: [replace('app/lessons/item-view.js', 'chartHtml(chartFromZero(chart))', 'chartHtml(chart)')] },
  { check: 'X20', name: 'one person too many marked in 1,000',
    edits: [replace('app/lessons/doc-view.js', "class=\"fig-person${i < row.count ? ' on' : ''}\"", "class=\"fig-person${i <= row.count ? ' on' : ''}\"")] },
  { check: 'X20', name: 'the first tick of an axis left off',
    edits: [replace('app/lessons/chart-view.js', 'const grid = chartTicks(y).map(v => {', 'const grid = chartTicks(y).slice(1).map(v => {')] },
  { check: 'X31', name: 'the headline drawn under the story',
    edits: [replace('app/lessons/article-view.js', '${head}<div class="art-body">${body}${small}</div></article>', '<div class="art-body">${body}${small}</div>${head}</article>')] },
  { check: 'X31', name: 'the small print drawn above the story',
    edits: [replace('app/lessons/article-view.js', '${head}<div class="art-body">${body}${small}</div>', '${head}<div class="art-body">${small}${body}</div>')] },
  { check: 'X31', name: 'an ad not marked as an ad',
    edits: [replace('app/lessons/article-view.js', "block.form === 'ad' ? SAY.artAd :", "block.form === 'ad' ? '' :")] },
  { check: 'X30', name: 'a sound claim turned down no longer named as a slip in Stats',
    edits: [replace('subjects/stats/items-build.js', 'holds: { right: "holds", slips: { "not-shown": "doubted", unclear: "doubted" } },', 'holds: { right: "holds", slips: { "not-shown": "believed", unclear: "believed" } },')] },
  { check: 'X30', name: 'the worked story without its marked lines',
    edits: [replace('subjects/stats/items-claims.js', 'deciding: ["h", "s1", "s4", "s5"],', 'deciding: [],')] },
  { check: 'X30', name: 'the check of part A asks for 5 of 5',
    edits: [replace('subjects/stats/l1.lesson.js', 'pass: [{ right: { min: 4 } }, { slip: "doubted", max: 1 }]', 'pass: [{ right: { min: 5 } }, { slip: "doubted", max: 1 }]')] },
  // a label pinned on a post, the panel, the needs found or missing, the sides (26.7; 26.10: X32, X33)
  { check: 'X32', name: 'the panel drawn in every group, not only where the help is on',
    edits: [replace('app/lessons/item-view.js', "    panel: !!(support && support.panel) };", "    panel: true };")] },
  { check: 'X32', name: 'every need shown as missing, whatever the words show',
    edits: [replace('app/lessons/panel.js', "found: has[n.id] ? lines.find(s => s.id === has[n.id]) || null : null", "found: null")] },
  { check: 'X32', name: 'a need found with no line quoted',
    edits: [replace('app/lessons/panel-view.js', '<span class="hasline">“${esc(tapClip(n.found.text))}”</span>', '<span class="hasline"></span>')] },
  { check: 'X32', name: 'the needs of the panel listed in reverse',
    edits: [replace('app/lessons/panel-view.js', '<ol class="panel-needs">${r.needs.map(', '<ol class="panel-needs">${[...r.needs].reverse().map(')] },
  { check: 'X32', name: 'the sides side by side counting every question as right',
    edits: [replace('app/lessons/panel.js', '`${mine.filter(o => o.ok).length} of ${mine.length}`', '`${mine.length} of ${mine.length}`')] },
  { check: 'X32', name: 'the commenter\'s words drawn above how the commenter is known',
    edits: [replace('app/lessons/article-view.js', '<p class="art-by">${esc(block.label.by)}</p><p class="art-label">${esc(block.label.text)}</p>', '<p class="art-label">${esc(block.label.text)}</p><p class="art-by">${esc(block.label.by)}</p>')] },
  { check: 'X32', name: 'the sides left off the results of the review',
    edits: [replace('app/lessons/review.js', "${parts.map((_, at) => partSplits(at)).join('')}", '')] },
  { check: 'X33', name: 'a wrong name for a label not earned no longer named as a slip in Ideology',
    edits: [replace('subjects/ideology/items-build.js', 'id === "none" ? "missed-name" : "wrong-name"', 'id === "none" ? "missed-name" : "missed-name"')] },
  { check: 'X33', name: 'a label the words earn, turned down, named as the wrong slip in Ideology',
    edits: [replace('subjects/ideology/items-build.js', 'earned: { right: "earned", slips: { "not-earned": "doubted", "too-little": "hedged" } },', 'earned: { right: "earned", slips: { "not-earned": "believed", "too-little": "hedged" } },')] },
  { check: 'X33', name: 'the worked example without its marked lines in Ideology',
    edits: [replace('subjects/ideology/items-practice.js', 'tap: "p3", has: { "soc-industry": "p2", "soc-owner": null }, deciding: ["p2", "p3"],', 'tap: "p3", has: { "soc-industry": "p2", "soc-owner": null }, deciding: [],')] },
  { check: 'X33', name: 'the check of part 2 asks for 6 of 6',
    edits: [replace('subjects/ideology/l2.lesson.js', 'pass: [{ right: { min: 5 } },', 'pass: [{ right: { min: 6 } },')] },
  { check: 'X33', name: 'the side of a label named in other words in Ideology',
    edits: [replace('subjects/ideology/subject.js', '{ id: "left", text: "labels thrown from the left" }', '{ id: "left", text: "labels thrown from the west" }')] },
  // the Back button of the phone (26.10, 2026-10-11: X28)
  { check: 'X28', name: 'leaving the library adds nothing to the history, so Back leaves the app',
    edits: [replace('app/state.js', "if(APP.view !== 'library' && !inApp()) history.pushState({ fc: 'in' }, '');", "if(false) history.pushState({ fc: 'in' }, '');")] },
  { check: 'X28', name: 'the added entry kept after coming back to the library',
    edits: [replace('app/state.js', "else if(APP.view === 'library' && inApp() && !droppingEntry){ droppingEntry = true; history.back(); }", "else if(false){ void 0; }")] },
  { check: 'X28', name: 'a Back that does nothing inside the app',
    edits: [replace('app/init.js', "window.addEventListener('popstate', backInApp);", "void 0;")] },
  // sound and singing (26.7: X8, X10, X11, X12, X16; 26.10, 2026-10-11: X29)
  sound({ check: 'X8', name: 'a sound system made when a sung question opens',
    edits: [replace('app/lessons/sing-run.js', "  singEnsure(inst, answered);\n  wireSingControls();", "  singEnsure(inst, answered);\n  audioContext();\n  wireSingControls();")] }),
  sound({ check: 'X8', name: 'the microphone asked for when a sung question opens',
    edits: [replace('app/lessons/sing-run.js', "  singEnsure(inst, answered);\n  wireSingControls();", "  singEnsure(inst, answered);\n  if(!window.__askedAtOpen && navigator.mediaDevices){ window.__askedAtOpen = true; navigator.mediaDevices.getUserMedia(METER_CONSTRAINTS).then(stream => stream.getTracks().forEach(track => track.stop()), () => {}); }\n  wireSingControls();")] }),
  sound({ check: 'X10', name: 'the microphone hears the app\'s own note',
    edits: [replace('app/lessons/sing-run.js', "const start = heard ? audioQuietUntil() : AUDIO_STATE.ctx.currentTime + SING_LEAD_S;", "const start = AUDIO_STATE.ctx.currentTime + SING_LEAD_S;"),
      replace('app/lessons/audio-meter.js', "quiet: ctx.currentTime < audioQuietUntil() };", "quiet: false };")] }),
  sound({ check: 'X10', name: 'a try that starts a timer',
    edits: [replace('app/lessons/sing-run.js', "  setSing({ phase: heard ? 'hear' : 'sing', tryNo,", "  setTimeout(() => {}, 1);\n  setSing({ phase: heard ? 'hear' : 'sing', tryNo,")] }),
  sound({ check: 'X10', name: 'a microphone that cancels echo and evens out the voice',
    edits: [replace('app/lessons/audio-meter.js', "{ audio: { echoCancellation: false,", "{ audio: { echoCancellation: true,")] }),
  sound({ check: 'X11', name: 'the readings of a try stored with its answer',
    edits: [replace('app/lessons/sing-run.js', "  setSing({ phase: 'result', answer });\n  answerAsk(s.ask.id, answer);", "  setSing({ phase: 'result', answer });\n  answerAsk(s.ask.id, { ...answer, readings: s.readings.map(r => r.hz) });")] }),
  sound({ check: 'X12', name: 'a button on a sung question wider than a phone',
    edits: [replace('app.css', ".singask .btn{align-self:flex-start;width:auto;padding:0 22px}", ".singask .btn{align-self:flex-start;min-width:420px;padding:0 22px}")] }),
  sound({ check: 'X16', name: 'the line drawn in a check',
    edits: [replace('app/lessons/sing-run.js', "const showLine = free || !!(support && support.line), result", "const showLine = true, result")] }),
  sound({ check: 'X16', name: 'a note an octave away scored as far off',
    edits: [replace('app/lessons/audio-notes.js', "const foldCents = cents => ((((cents + 600) % 1200) + 1200) % 1200) - 600;", "const foldCents = cents => cents;")] }),
  sound({ check: 'X16', name: 'a hold timed as one reading',
    edits: [replace('app/lessons/sing-score.js', "best = Math.max(best, Math.round((last - start) * 1000) + SING_READ_MS);", "best = Math.max(best, SING_READ_MS);")] }),
  sound({ check: 'X16', name: 'a target outside the range',
    edits: [replace('app/lessons/sing-task.js', "pad = Math.floor((high - low) * SING_MIDDLE_PAD);", "pad = -4;")] }),
  sound({ check: 'X16', name: 'the range kept in a second place',
    edits: [replace('app/lessons/sing-run.js', "  saveNote(Q.subj.id, 'range', {", "  storageSave(`pl:${Q.subj.id}:range`, found);\n  saveNote(Q.subj.id, 'range', {")] }),
  sound({ check: 'X29', name: 'the old range thrown away when the exercise opens',
    edits: [replace('app/lessons/sing-run.js', "function renderRangeAgain(subj){\n  const data = FC.get(subj.id), run = newRunId();", "function renderRangeAgain(subj){\n  const data = FC.get(subj.id), run = newRunId();\n  saveNote(subj.id, 'range', null);")] }),
  sound({ check: 'X29', name: 'the range exercise run again stored as a try',
    edits: [replace('app/lessons/sing-run.js', "item: { ...inst.item, unscored: true } }]", "item: inst.item }]")] }),
  sound({ check: 'X16', name: 'the microphone left on when the learner leaves',
    edits: [replace('app/state.js', "function go(view, extra){\n  stopAudio();", "function go(view, extra){")] })
];

// the server's transform: apply every edit of a fault to its file, and refuse to run when one does not apply
function transformFor(fault) {
  const used = new Set();
  const transform = (file, body) => fault.edits.reduce((text, e) => {
    if (e.file !== file) return text;
    if (!text.includes(e.from)) throw new Error(`the seeded fault "${fault.name}" does not apply: ${e.file} has no "${e.from.slice(0, 60)}"`);
    used.add(e.file);
    return text.replace(e.from, () => e.to);
  }, body);
  return { transform, used };
}

// Runs every check against the app with one fault in it. Resolves to { red: [check ids that failed], errors }.
export async function runWithFault(browser, fault) {
  const { transform, used } = transformFor(fault);
  const server = await startServer({ fixture: true, transform });
  const env = makeEnv(browser, server);
  const red = [], errors = [];
  const ids = fault.only || Object.keys(CHECKS).filter(id => !(id in SOUND_CHECKS));
  const lane = async list => {
    for (const id of list) {
      try { const c = await CHECKS[id](env); if (c.failures.length) { red.push(id); errors.push(c.failures[0]); } }
      catch (error) { red.push(id); errors.push(`${id} crashed: ${error.message.split('\n')[0]}`); }
    }
  };
  try {
    // the sound checks run in lanes of their own, at the same time as the rest (they spend their time waiting for real sound)
    const others = ids.filter(id => !(id in SOUND_CHECKS)), inLane = list => list.filter(id => ids.includes(id));
    await Promise.all([lane(others), ...SOUND_LANES.map(inLane).filter(list => list.length).map(lane)]);
  } finally { await server.close(); }
  const unused = fault.edits.filter(e => !used.has(e.file)).map(e => e.file);
  return { red, errors, unused };
}
