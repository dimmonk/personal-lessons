// A guard is not coverage until it has been seen to fail. Each seeded fault is a change to one of the app's files on its way to the
// browser (static-server.mjs `transform`); the browser checks are then run against that app, and exactly the check the fault is
// seeded for must go red. A fault whose text is not found in the file fails the run, so a fault can never go stale quietly.
import { startServer } from './static-server.mjs';
import { makeEnv } from './e2e-env.mjs';
import { CHECKS } from './e2e-checks.mjs';

const replace = (file, from, to) => ({ file, from, to });

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
    edits: [replace('app/lessons/queue.js', "const marks = cur.done && Q.feedback === 'after-each';", "const marks = cur.done;")] }
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
  try {
    for (const [id, run] of Object.entries(CHECKS)) {
      try { const c = await run(env); if (c.failures.length) red.push(id); }
      catch (error) { red.push(id); errors.push(`${id} crashed: ${error.message.split('\n')[0]}`); }
    }
  } finally { await server.close(); }
  const unused = fault.edits.filter(e => !used.has(e.file)).map(e => e.file);
  return { red, errors, unused };
}
