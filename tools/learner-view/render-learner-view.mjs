// Writes a lesson as a learner meets it, generated from the data by the engine's own functions: docs/learner-view/<subject>-<lesson>.md.
// Read it as a newcomer (the cold read): every screen in order, every question with its options and the feedback each one gets, then the
// end check. Right answers are marked (right) so a reader can follow the feedback; the app never marks them before the answer.
// Run: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>]    (--fixture for the test subject, --stdout to print)
import { mkdir, writeFile } from 'node:fs/promises';
import { loadAll } from './load.mjs';

const paras = text => text == null ? [] : Array.isArray(text) ? text : [text];
const quote = lines => lines.map(l => `> ${l}`).join('\n');
const SAYWORDS = { redraw: 'The same chart, drawn from zero' };

/* ---------- blocks ---------- */
const cellText = cell => String(cell);
const FIGURE_WORDS = {
  'rate-table': d => [`A table with two rows: ${[d.top, d.bottom].map(r => `${r.label}: ${r.cells.join(', ')}`).join(' / ')}.`],
  bar: d => [`A bar for the whole, "${d.whole}", cut into parts as wide as their percents: ${d.parts.map(p => `${p.label} ${p.pct}%`).join(', ')}.`],
  plan: d => [`A plan drawn to one scale, each side written in ${d.unit}: ${d.parts.map(p => `${p.w} by ${p.h}${p.label ? ` (${p.label})` : ''}${p.cut ? ', cut out' : ''}`).join('; ')}.`],
  years: d => [`A table, year by year: ${d.columns.join(' | ')}; ${d.rows.map(r => r.join(' | ')).join('; ')}.`],
  people: d => [`${d.caption}: a row of 1,000 dots for each count, the first ones marked and read left to right, top to bottom: ${d.rows.map(r => `${r.label}, ${r.count} in 1,000`).join('; ')}.`]
};
const ARTICLE_NAMES = { news: 'A news story', post: 'A post', ad: 'An ad', report: 'A report summary' };
// the lines of an article as paragraphs (a line with `para` starts a new one), and the small print last
function articleLines(block, deciding) {
  const mark = seg => deciding.includes(seg.id) ? `**${seg.text}**` : seg.text;
  const body = block.lines.filter(l => !l.fine).reduce((out, l, i) => i === 0 || l.para ? [...out, [l]] : [...out.slice(0, -1), [...out[out.length - 1], l]], []);
  return [`${ARTICLE_NAMES[block.form]}, from "${block.source}"${block.form === 'ad' ? ' (marked "Ad")' : block.form === 'report' ? ' (marked "Report summary")' : ''}:`, '',
    ...(block.headline ? [`> # ${mark(block.headline)}`, '>'] : []), ...body.map(p => `> ${p.map(mark).join(' ')}`),
    ...block.lines.filter(l => l.fine).map(l => `> (small print) ${mark(l)}`)];
}
function chartWords(block) {
  const y = block.y, cut = y.from > 0;
  return `A ${block.type === 'line' ? 'line chart' : 'bar chart'}, "${block.title}". The scale runs from ${y.from} to ${y.to}${y.unit ? `, in ${y.unit}` : ''}${cut ? ', and does not start at zero' : ', and starts at zero'}. `
    + `${block.series.map(s => `${s.name ? `${s.name}: ` : ''}${block.x.map((l, i) => `${l} ${s.values[i]}`).join(', ')}`).join('. ')}. ${block.labels ? 'The values are written on it. ' : ''}Source: ${block.source}.`;
}
const FORM_NAMES = { fees: 'fee sheet', paystub: 'pay stub', matchrule: 'match rule', beneficiary: 'beneficiary page', foreign: 'foreign account summary', table: 'plain table' };
const formName = form => { const name = FORM_NAMES[form] || form; return `${/^[aeiou]/i.test(name) ? 'An' : 'A'} ${name}`; };
function blockLines(block, deciding = [], refs = []) {
  if (block.kind === 'document') {
    const tab = block.tab ? ` (a tab named "${block.tab}", one of a household's papers: one open at a time, the first at the start, and the one with a marked line after the answer)` : '';
    return [`${formName(block.form)}, "${block.title}"${tab}:`, '', ...(block.head ? [`> ${block.head.join('  |  ')}  (the column heads)`] : []),
      ...block.rows.map(r => `> ${r.cells.map(cellText).join('  |  ')}${deciding.includes(r.id) ? '  <- marked after the answer' : ''}`), ...(block.notes || []).map(n => `> (${n})`)];
  }
  if (block.kind === 'ref') {
    const ref = refs.find(r => r.id === block.ref);
    return [`A value looked up, never memorized: "${ref.text}": ${ref.value}. It prints "Looked up ${ref.asOf}" and "Source: ${ref.source}", says to check the source, and after a year says to look it up again.`];
  }
  if (block.kind === 'figure') return FIGURE_WORDS[block.type](block.data);
  if (block.kind === 'article') return articleLines(block, deciding);
  if (block.kind === 'chart') return [chartWords(block)];
  if (block.kind === 'pair') {
    return ['| A | B |', '|---|---|', `| ${blockLines(block.a, deciding, refs).join(' ')} | ${blockLines(block.b, deciding, refs).join(' ')} |`, '', `Compare: ${paras(block.compare).join(' ')}`];
  }
  const text = block.lines ? [block.lines.map(s => deciding.includes(s.id) ? `**${s.text}**` : s.text).join(' ')] : paras(block.text);
  if (block.tone === 'wrong') return [`A wrong idea, marked wrong: ${text.slice(0, -1).join(' ') || text.join(' ')}`, ...(text.length > 1 ? [`The right line: ${text[text.length - 1]}`] : [])];
  return text;
}
const blocksText = (blocks, deciding, refs) => blocks.flatMap(b => [...blockLines(b, deciding, refs), '']).join('\n');

/* ---------- a question ---------- */
const TOL_WORDS = tol => 'round' in tol ? `to the nearest ${tol.round}` : 'band' in tol ? `from ${tol.band[0]} to ${tol.band[1]} times the exact answer` : [...('abs' in tol ? [`within ${tol.abs}`] : []), ...('rel' in tol ? [`within ${Math.round(tol.rel * 100)}%`] : [])].join(' or ');
function numberAskLines(e, ask, item, marks) {
  const estimate = e.isEstimateAsk(ask), blanks = (ask.frame || '__').replace(/__/g, '[ ]'), tol = e.tolOf(ask);
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    `- The learner types ${estimate ? 'a rough answer from their head, with no calculator' : 'a number, with the calculator within reach'}: ${blanks}${ask.unit ? ` ${ask.unit}` : ''}.`];
  if (!marks) return lines;
  const want = e.numberAnswers(item, ask);
  lines.push(`- Right (${TOL_WORDS(tol)}${estimate && !ask.tol ? ': an estimate with no tolerance of its own is right from half to double' : ''}): ${e.frameFilled(ask, want)}`);
  (ask.traps || []).forEach(t => lines.push(`- If typed ${e.frameFilled(ask, e.numberAnswers(item, { answer: t.value }))}: ${t.then ? paras(t.then).join(' ') : `a slip: ${t.slip}`}`));
  if (estimate) lines.push(`- Shown after: how far off it was, for example "${e.SAY.estimateLine('$' + (want[0] * 1.1).toFixed(2), e.frameFilled(ask, want), { pct: 10, dir: 'over' })}"`);
  return lines;
}
// a form: one box for each number and one set of options for each choice, answered whole; each field is described as the ask of its own kind
function formAskLines(e, data, ask, item, marks) {
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    '- The learner fills in every field, then taps Answer. Answer stays shut until every box holds a number and every choice has an option; nothing is marked before it.'];
  ask.fields.forEach(f => {
    const as = e.formFieldAsk(f);
    if (f.type === 'number') {
      lines.push(`- ${f.label}: a number in ${(f.frame || '__').replace(/__/g, '[ ]')}${f.unit ? ` ${f.unit}` : ''}`);
      if (marks) {
        lines.push(`  - Right (${TOL_WORDS(e.tolOf(f))}): ${e.frameFilled(as, e.numberAnswers(item, as))}`);
        (f.traps || []).forEach(t => lines.push(`  - If typed ${e.frameFilled(as, e.numberAnswers(item, { answer: t.value }))}: ${t.then ? paras(t.then).join(' ') : `a slip: ${t.slip}`}`));
      }
    } else {
      lines.push(`- ${f.label}: choose one`);
      e.chooseOptions(data.subjects.__current, as).forEach(o => lines.push(`  - ${o.text}${marks && o.ok ? ' (right)' : ''}${marks && !o.ok ? ` — if chosen: ${o.then ? paras(o.then).join(' ') : `a slip: ${o.slip}`}` : ''}`));
    }
  });
  return lines;
}
// a tap: the lines of the text become tappable (the headline does not); "Not given" is a button; a wrong line answers with its own note and slip
function tapAskLines(e, data, ask, marks, item) {
  const { SAY } = e, lines = e.tapSegments(item, ask), right = e.tapRightIds(ask), slips = data.subjects.__current.meta.lists.slip || [];
  const out = [`**${paras(ask.prompt).join(' ')}**${ask.when ? ' (opens only after a certain answer)' : ''}`,
    `- ${e.tapPick(ask) > 1 ? SAY.tapMany(e.tapPick(ask)) : SAY.tapOne} ${ask.in ? `The lines of one block can be tapped; the rest cannot. ` : ''}Nothing is marked before the answer${ask.pick > 1 ? '; Answer opens when that many are tapped' : ', and a tap is the answer'}.`];
  lines.forEach(l => {
    const extra = [l.note ? `note: ${l.note}` : null, l.slip ? `slip: ${(slips.find(s => s.id === l.slip) || { text: l.slip }).text}` : null].filter(Boolean);
    out.push(`- "${l.text}"${marks && right.includes(l.id) ? ' (right)' : ''}${marks && !right.includes(l.id) ? ` — if tapped: ${extra.length ? extra.join('; ') : SAY.tapNotThat}` : ''}`);
  });
  if (ask.none) out.push(`- A button: "${paras(ask.none).join(' ')}"${marks && ask.right === 'none' ? ' (right)' : ''}${marks && ask.right !== 'none' ? ` — if chosen: ${SAY.tapThereIsOne}` : ''}`);
  return out;
}
function askLines(e, data, ask, marks, item) {
  if (ask.kind === 'tap') return tapAskLines(e, data, ask, marks, item);
  if (ask.kind === 'form') return formAskLines(e, data, ask, item, marks);
  if (ask.kind === 'number') return numberAskLines(e, ask, item, marks);
  const options = e.chooseOptions(data.subjects.__current, ask);
  const lines = [`**${paras(ask.prompt).join(' ')}**${ask.many ? ' (choose every one that fits)' : ''}${ask.when ? ' (opens only after a certain answer)' : ''}`];
  if (ask.shuffle) lines.push('(the options come in an order that depends on the seed of the question)');
  options.forEach(o => lines.push(`- ${o.text}${marks && o.ok ? ' (right)' : ''}${marks && !o.ok ? ` — if chosen: ${o.then ? paras(o.then).join(' ') : `a slip: ${o.slip}`}` : ''}`));
  return lines;
}
function questionLines(e, data, inst, support, label) {
  const item = inst.item, lines = [`#### ${label}${inst.seed !== undefined ? ` (made with fresh numbers; this is seed ${inst.seed})` : ''}`, '', blocksText(item.blocks, support && support.shown ? item.deciding : [], data.subjects.__current.meta.refs || [])];
  if (support && support.shown) lines.push('Help on screen: the words that decide it are marked.', '');
  const shown = e.shownStepIds(item, support);
  if (shown.length) lines.push('Help on screen: the working up to the last steps.', ...item.steps.filter(s => shown.includes(s.id)).map(s => `- ${s.does} ${s.working}`), '');
  e.askedAsks(item, support).forEach(a => lines.push(...askLines(e, data, a, true, item), ''));
  lines.push(`After the answer: the deciding words are marked${(item.deciding || []).length ? '' : ' (none named)'}. Reason: ${paras(item.reason).join(' ')}`);
  if (item.need) lines.push(`What you would need to see: ${paras(item.need).join(' ')}`);
  if (item.figure) lines.push('A picture is added to the feedback:', ...blockLines(item.figure));
  if (item.redraw) lines.push(`A chart is added to the feedback, "${SAYWORDS.redraw}": the chart above drawn again with the scale starting at zero.`);
  if (item.steps) lines.push('The working:', ...item.steps.map(s => `- ${s.does} ${s.working}`));
  return [...lines, ''];
}

/* ---------- a sung question ---------- */
// A sung question is made by the app from the task a lesson names, at a note drawn from the learner's own range; so it is described by
// what the learner sees and hears, with a sample range to show the shape of the plan. Every sentence the app prints is read from SAY.
const SAMPLE_RANGE = { low: 'A2', high: 'E4' };
const seconds = ms => `${ms / 1000} second${ms === 1000 ? '' : 's'}`;
function singLines(e, ref, support, label) {
  const { SAY } = e, task = ref.sing, kind = task.task, item = e.singItem(task), ask = item.asks[0], plan = e.singPlan(ask, SAMPLE_RANGE, 1);
  const free = e.SING_FREE.includes(kind), line = free || (support && support.line);
  const heard = plan.hear.length ? `the app plays ${plan.hear.length === 1 ? 'the note' : `the ${plan.hear.length} notes`} (${plan.hear.map(h => seconds(h.ms)).join(', ')}), ignoring the microphone while it plays and for a quarter of a second after, then` : 'then';
  const windows = plan.windows.map(w => seconds(w.ms)).join(' + ');
  const strip = line ? `the strip shows ${plan.bars.length ? 'the note as a bar and ' : ''}the voice as a line, drawn as it is sung` : `an empty strip with the words "${SAY.stripHidden}"`;
  const lines = [`#### ${label}: ${item.label} (a sung question${free ? '; nothing to match' : "; the notes are made fresh from the learner's range, inside it"})`, '', `**${paras(ask.prompt).join(' ')}**`, '',
    `- Before the tap: one button, "${free ? SAY.singStart : plan.hear.length > 1 ? SAY.singGoMany : SAY.singGo}". The microphone is off and nothing sounds. The screen says: ${SAY.micPrivate}`,
    `- On the tap: the microphone turns on (it stays on for the group), ${heard} the learner sings in a window of ${windows}${plan.holdNeedMs ? `, and must stay on the note for ${seconds(plan.holdNeedMs)}` : ''}.`,
    `- While singing: ${strip}.`];
  if (kind === 'light') lines.push(`- Before the first of these in a group: two notes to set the scale, neither scored. "${SAY.singScaleLoud}" then "${SAY.singScaleTalk}"`);
  if (kind === 'range') lines.push(`- The two windows say: "${SAY.singUp}" then "${SAY.singDown}" The lowest and highest steady notes are saved as the learner's range, once. If they are closer than a fifth: "${SAY.singNarrow}" and nothing is saved.`);
  if (kind === 'warmup') lines.push(`- It is not scored, stored or counted, and there is a "${SAY.singSkip}" link. It ends with "${SAY.singWarmupDone}".`);
  else if (kind === 'range') lines.push(`- After the try: "${SAY.singRangeSaved}". Reason: ${item.reason}`);
  else lines.push(`- After the try, in words: ${Object.values(SAY.singWord).filter(w => w !== SAY.singWord.missed).join(', ')}${kind === 'hold' || kind === 'melody' ? ', and how long the note stayed steady' : ''}. The strip then shows ${plan.bars.length ? 'the note and ' : ''}the voice, with or without the line. Reason: ${item.reason}`);
  if (kind !== 'warmup') lines.push(`- Nothing heard: "${SAY.singNothing}" The try is not counted and can be made again.${kind === 'range' ? '' : ' A miss comes back three tries later with a new note.'}`);
  lines.push(kind === 'warmup' ? '- Stored: nothing.' : `- Stored: numbers only (${kind === 'range' ? 'how much range was found' : 'how far off each note was, in whole hundredths of a half-step'}); no sound is recorded or sent anywhere.`, '');
  return lines;
}
const isSung = ref => typeof ref === 'object' && ref !== null && 'sing' in ref;
// the sung questions of a group, each described once and its repeats named; `from` tries have been asked before it
function sungRefLines(e, refs, support, label, from) {
  let at = from;
  return refs.flatMap(ref => {
    const first = `${label} ${at + 1}`, n = e.refCount(ref), lines = singLines(e, ref, support, first);
    const more = n > 1 ? [`${label.replace(/y$/, 'ies')} ${at + 2} to ${at + n}: the same question, each with a new note drawn from the range.`, ''] : [];
    at += n;
    return [...lines, ...more];
  });
}
// a group that needs the learner's range opens with the range exercise when none is stored: described once in a lesson
function rangeFirst(e, refs, shown) {
  if (shown.done || !refs.some(r => isSung(r) && e.SING_NEEDS_RANGE.includes(r.sing.task))) return [];
  shown.done = true;
  return ['When no range is stored yet, this group opens with the range exercise, and the group follows it:', '', ...singLines(e, { sing: { task: 'range' }, n: 1 }, null, 'First')];
}

/* ---------- the step on the learner's own data ---------- */
// What the learner meets, in order. Every sentence the app prints is read from SAY; the fields are read from the subject's private forms.
const fieldWords = f => `${f.label}${f.optional ? SAYPLAIN.optional : ''} (${f.type === 'choose' ? 'choose one' : f.type === 'number' ? `a number${f.unit ? `, in ${f.unit}` : ''}` : f.type === 'date' ? 'a day' : 'words'})${f.warn ? `; over ${f.warn.over}: "${f.warn.text}"` : ''}`;
const SAYPLAIN = { optional: ' (optional)' };
function ownLines(e, subject, lesson, step, at) {
  const { SAY } = e, form = subject.meta.own[step.own], actions = Object.values(subject.meta.own).find(f => f.into === 'actions'), lists = subject.meta.lists;
  const model = step.model ? subject.items[step.model] : null, trigger = lesson.trigger && ((lists.trigger || []).find(t => t.id === lesson.trigger) || {}).text;
  const out = [`## ${at}: On your own accounts`, '', 'The same step on the learner\'s own data. Nothing here is scored, stored as a try, logged or sent: it is written to this phone only (the sheet, the dated changes and the moments marked).', ''];
  if (trigger) out.push(`**Waits for a moment.** Until the learner marks "${trigger}" (on this screen, or on the subject screen) the step says "${SAY.ownWaitTitle}": "${SAY.ownWaitLine(trigger)}" with "${SAY.ownWaitMark}" and "${SAY.ownWaitLater}".`, '');
  out.push(`**The sheet, when it is empty.** "${SAY.ownSheetTitle}": ${SAY.ownSheetHow} ${SAY.ownPrivate}`, '',
    ...form.fields.map(f => `- ${fieldWords(f)}`), ...(form.rows ? [`- ${form.rows.label}, one row for each, added with "${SAY.ownAddFund}":`, ...form.rows.fields.map(f => `  - ${fieldWords(f)}`)] : []), '',
    `Each account has "${SAY.ownRemoveAccount}" and the sheet has "${SAY.ownAddAccount}". Refused, with a line under the field and nothing stored: a field left empty, a word where a number goes, and any run of ${e.OWN_MAX_DIGITS || 8} or more digits ("${SAY.ownDigits}"). A fund row or an account left wholly blank is dropped. Buttons: "${SAY.ownSave}", and "${SAY.ownNoAccounts}" (then "${SAY.ownNoAccountsLine}").`, '');
  out.push(`**What it costs.** "${SAY.ownCostsTitle}": ${SAY.ownCostsHow} Each account is a statement of its funds (value, yearly cost, dollars a year), the fees, and "${SAY.ownThisCosts}" in dollars; then "${SAY.ownAllCost}" in dollars with its share of what is in the accounts. A yearly cost over the form's own limit is warned about and kept; funds that add up to a different balance are said so.`, '');
  if (model) out.push(`**The lines to find.** "${SAY.ownModelHeading}": ${SAY.ownModelLine} The sample of the worked example is shown again with its deciding lines marked:`, '', blocksText(model.blocks, model.deciding || [], subject.meta.refs || []));
  out.push(`**The change.** "${SAY.ownActionHeading}": ${SAY.ownActionHow}`, '', ...actions.fields.map(f => `- ${fieldWords(f)}`), '',
    `Buttons: "${SAY.ownSaveAction}" (the day may not be in the past) and "${SAY.ownDoneNow}" (needs only what and where, and is marked done today). Each change is listed with "${SAY.ownCalendar}", which saves a calendar file (.ics) for its day with a reminder at nine, and "${SAY.ownMarkDone}". "${SAY.ownNothing}" Then "${SAY.goOn}".`, '');
  return out;
}

/* ---------- a lesson ---------- */
export function renderLesson(loaded, subjectId, lessonId) {
  const e = loaded.engine, data = { ...loaded, subjects: { ...loaded.subjects, __current: loaded.subjects[subjectId] } };
  const subject = loaded.subjects[subjectId], lesson = subject.lessons[lessonId];
  if (!lesson) throw new Error(`${subjectId} has no lesson ${lessonId}`);
  const part = (subject.meta.parts.find(p => p.id === lesson.part) || {}).title;
  const out = [`# ${subject.meta.name}: ${lesson.title}`, '',
    `Revision ${lesson.rev}, ${lesson.status}${lesson.status === 'draft' ? ' (the screen carries the draft line)' : ''}. Part: ${part || 'none'}. Where the subject ends up: ${subject.meta.endResult}`, '',
    ...(lesson.trigger ? [`Waits for a moment: the learner marks "${((subject.meta.lists.trigger || []).find(t => t.id === lesson.trigger) || {}).text}" before the step on their own data opens.`, ''] : []),
    '## The why', '', ...paras(lesson.why), ''];
  let n = 0;
  // a made question is shown with the seed of its place in the lesson, so the numbers in the view differ from one question to the next
  const instance = ref => e.refId(ref) in subject.items ? { key: e.refId(ref), item: subject.items[e.refId(ref)] } : { key: e.refId(ref), item: e.itemFromGen(subject.gens[e.refId(ref)], n + 1, ref.with), seed: n + 1 };
  const rangeShown = { done: false }, needsRange = ref => isSung(ref) && e.SING_NEEDS_RANGE.includes(ref.sing.task);
  lesson.flow.forEach((step, i) => {
    const at = `Step ${i + 1}`;
    if (step.show) out.push(`## ${at}: ${step.title}`, '', blocksText(step.show, [], subject.meta.refs || []));
    else if (step.own) out.push(...ownLines(e, subject, lesson, step, at));
    else if (step.worked) {
      const item = subject.items[step.worked];
      out.push(`## ${at}: A worked example`, '', blocksText(item.blocks, [], subject.meta.refs || []));
      if (item.asks.length && item.asks[0].kind === 'choose') out.push('Before the working, the learner may commit to a choice (not scored, not stored):', ...askLines(e, data, item.asks[0], false, item), '');
      const right = a => a.kind === 'tap' ? e.tapRightText(a, item) : a.kind === 'number' ? e.frameFilled(a, e.numberAnswers(item, a)) : a.kind === 'form' ? a.fields.map(f => e.formFieldRight(subject, a, f, item)).join('; ') : e.chooseOptions(subject, a).filter(o => o.ok).map(o => o.text).join('; ');
      out.push('The working, one step at a time:', ...(item.steps || []).map(s => `${'1.'} ${s.does} ${s.working}`), '', `Then the answer: ${item.asks.map(right).join(' / ')}. ${paras(item.reason).join(' ')}`, ...(item.figure ? ['', 'A picture follows:', ...blockLines(item.figure)] : []), '');
    } else {
      const set = step.set, refs = e.flatRefs(set.items), sung = refs.some(isSung), count = refs.reduce((k, r) => k + e.refCount(r), 0);
      const HELP_WORDS = { line: 'the line and the notes drawn while singing', estimateCheck: 'a line that says when the answer and the estimate disagree: an answer more than double or less than half of the learner\'s own estimate is held back once' };
      const help = set.support ? `, with help (${Object.entries(set.support).map(([k, v]) => v === true ? (HELP_WORDS[k] || k) : `${k} ${v}`).join(', ')})` : '';
      if (sung) {
        out.push(`## ${at}: ${refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'Warm-up' : 'Tries'}`, '', refs.every(r => isSung(r) && r.sing.task === 'warmup') ? 'A hum with the line drawn. It is not scored and can be skipped.' : `${count} ${count === 1 ? 'try' : 'tries'}, ${set.order}${help}. A missed try comes back at least three tries later, with a new note, until it is on the note.`, '');
        out.push(...rangeFirst(e, refs, rangeShown), ...sungRefLines(e, refs, set.support, 'Try', n));
        n += count;
        if (!refs.every(r => isSung(r) && r.sing.task === 'warmup')) out.push('Then a screen: you can stop here, your place is kept.', '');
        else out.push('Then the next step: a warm-up has no break screen.', '');
        rangeShown.done ||= refs.some(needsRange);
        return;
      }
      out.push(`## ${at}: Questions`, '', `${count} question${count === 1 ? '' : 's'}, ${set.order}${help}${set.mix ? `, with about ${Math.round(set.mix.share * 100)}% from earlier lessons mixed in, unlabeled` : ''}. A missed question comes back at least three questions later, until it is right. After each answer: the right answer, the deciding words, the reason, and one line on the learner's own choice if it was wrong.`, '');
      refs.forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(typeof ref === 'string' ? ref : { ...ref }), set.support, `Question ${++n}`)); });
      out.push('Then a screen: you can stop here, your place is kept.', '');
    }
  });
  const check = lesson.check, size = e.checkSize(check);
  out.push('## The check', '', `${e.checkIsSung(check) ? `${size} new tries, with no line.` : `${size} new questions, no help.`} ${check.feedback === 'at-end' ? 'No answer is shown until the end.' : e.checkIsSung(check) ? 'The result, in words, is shown after each try.' : 'The answer is shown after each question.'}${check.order === 'shuffle' ? ' The questions come in mixed order.' : ''}${check.retest ? ` It comes back once, on new questions, ${check.retest} days after the first time.` : ''}`, '',
    'To pass:', ...check.pass.map(r => `- ${e.ruleText(subject, r, e.rightWord(check))}`), '');
  if (e.checkIsDrawn(check)) out.push(`The questions are drawn from the topics: ${check.items.draw.strands.join(', ')} (${check.items.draw.n} of them).`, '');
  else if (e.checkIsSung(check)) out.push(...rangeFirst(e, e.flatRefs(check.items), rangeShown), ...sungRefLines(e, e.flatRefs(check.items), null, 'Check try', n));
  else e.flatRefs(check.items).forEach(ref => { for (let k = 0; k < e.refCount(ref); k++) out.push(...questionLines(e, data, instance(ref), null, `Check question ${++n}`)); });
  out.push('## The result', '', e.checkIsSung(check) ? 'For example "4 of 5 on the note: passed" or "3 of 5: not yet", each rule above shown as met or not met. The result of each try was shown as it was sung.' : 'For example "4 of 5: passed" or "3 of 5: not yet", each rule above shown as met or not met, then every answer with its feedback, the missed ones first.', '');
  return out.join('\n');
}

async function main() {
  const args = process.argv.slice(2), flags = new Set(args.filter(a => a.startsWith('--'))), names = args.filter(a => !a.startsWith('--'));
  const [subjectId, lessonId] = names;
  if (!subjectId) { console.error('usage: node tools/learner-view/render-learner-view.mjs <subject> [<lesson>] [--fixture] [--stdout]'); process.exit(1); }
  const loaded = await loadAll({ fixture: flags.has('--fixture') });
  const subject = loaded.subjects[subjectId];
  if (!subject) throw new Error(`unknown subject ${subjectId}`);
  const ids = lessonId ? [lessonId] : Object.keys(subject.lessons);
  if (!ids.length) { console.log(`${subjectId} has no lessons yet`); return; }
  for (const id of ids) {
    const text = renderLesson(loaded, subjectId, id);
    if (flags.has('--stdout')) { console.log(text); continue; }
    const dir = new URL('../../docs/learner-view/', import.meta.url);
    await mkdir(dir, { recursive: true });
    await writeFile(new URL(`${subjectId}-${id}.md`, dir), text);
    console.log(`wrote docs/learner-view/${subjectId}-${id}.md`);
  }
}

import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main().catch(error => { console.error(error.message); process.exit(1); });
