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
      "  Q.cur = { ...Q.cur, done: true, score };\n  const stay = Q.at; setTimeout(() => { if (Q.at === stay) nextQuestion(); }, 2500);\n  paintQueue();")] },
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
  // sound and singing (26.7: X8, X10, X11, X12, X16)
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
