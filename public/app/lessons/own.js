/* ===================== LESSONS: THE LEARNER'S OWN DATA, CHECKED AND WORKED OUT ===================== */
// Lesson standard 5. The learner's private sheet of their own accounts (`sheet`), their dated actions (`actions`) and the moments
// they mark (`triggers`) are kept in the subject's notes and nowhere else, and never scored against a truth. This file is the pure half:
// what a typed field must be, how a draft becomes the stored shape, the app's arithmetic on what was typed, the plausible-range
// warnings, and the calendar file (.ics) of a dated action. No page and no storage here (own-store.js, own-run.js).
//   sheet    { accounts: [{ id, type, name?, institution?, owner?, balance, fees, highest?, holdings: [{ name, value, kind?, expense?, company? }] }],
//              [groupId]: { [fieldId]: value } | null | [{ [fieldId]: value }] }   (the form's groups: what you spend, the bills ahead, the match...)
//   actions  [{ id, what, where, when, done?, repeat? }]
//   triggers { [triggerId]: 'YYYY-MM-DD' }
//   answers  { [fieldId]: text, interviewDate?: 'YYYY-MM-DD', saved: 'YYYY-MM-DD' }   (Civics, step 9)
//   business { lines: [{ name, kind, revenue, cost }] }   (Strategy: each product, customer or way of selling, what it brought in and cost directly last year)
// A private form (`subject.own`) is { into, fields: [Field], rows?: { id, label, fields: [Field] }, groups?: [Group], limits?: { name: number } }, a Field is
// { id, label, type: 'choose' | 'number' | 'text' | 'date', list?, unit?, places?, optional?, for?: [accountType], warn?: { over?, under?, text } }
// (`for`: an account field shown and read only for accounts of those kinds). A Group (the sheet only) is { id, label, how?, fields, many?, optional? }:
// facts about the household beside the accounts, kept at sheet[id], a record or, with `many`, a list of rows; `together: [[fieldId]]` names optional
// fields that are filled all or none (a second step of a match: its cents and its share of pay), so one is never kept without the other. A group is asked by the step whose
// work needs it (own-work.js); saved wholly blank it is kept as null (an `optional` group) or an empty list (`many`), so it is not asked again.
// Nothing here may hold an account number, a login or a password: a field refuses a run of OWN_MAX_DIGITS or more digits.

// The forms a subject may keep, and the fields the app reads from each (the sheet form is read by the costs and the summary, the form for
// actions by the calendar file, the plan by the plan sentence, the setup as a list of marks): a form that leaves one out cannot work, and the
// validator says so (V70).
const OWN_SLOTS = ['sheet', 'actions', 'plan', 'setup', 'answers', 'business'];
const OWN_REQUIRED = {
  sheet: { fields: { type: 'choose', balance: 'number', fees: 'number' }, rows: { name: 'text', value: 'number', expense: 'number' } },   // a fund's expense may be optional: blank, it costs nothing in the sum and is named
  actions: { fields: { what: 'text', where: 'text', when: 'date' } },
  plan: { fields: { cue: 'text', then: 'text' } },
  setup: { fields: {}, allType: 'date' },  // every field of the setup is a thing marked done on a day
  answers: { fields: {} },                 // the answers and the interview date: which fields a subject reads is its own (V70 checks each `accept.own` and `dateField`)
  business: { fields: { name: 'text', kind: 'choose', revenue: 'number', cost: 'number' } }   // a line of the business: the fields of one line, typed once per line
};
const OWN_MAX_DIGITS = 8;
const OWN_MAX_TEXT = 80;
const OWN_DAY = /^\d{4}-\d\d-\d\d$/;
const ownDigitRun = text => new RegExp(`\\d{${OWN_MAX_DIGITS},}`).test(String(text).replace(/[\s-]/g, ''));
let OWN_COUNTER = 0;
const ownNewId = prefix => prefix + Date.now().toString(36) + (OWN_COUNTER++).toString(36);
const ownMoney = value => '$' + fmtNumber(value, 2);   // what something costs: always to the cent
const ownWhole = value => '$' + (Number.isInteger(value) ? fmtNumber(value) : fmtNumber(value, 2));   // what is held: cents only when there are some, then both digits
const ownRound = value => Math.round(value * 100) / 100;

/* ---------- a field and a record ---------- */
function ownValidDay(day){
  if(!OWN_DAY.test(day)) return false;
  const [y, m, d] = day.split('-').map(Number), t = new Date(Date.UTC(y, m - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === d;
}
// The message for a typed field, or '' when it is fine. `raw` is what was typed or chosen.
function ownFieldProblem(field, raw, lists){
  const text = String(raw === undefined || raw === null ? '' : raw).trim();
  if(text === '') return field.optional ? '' : SAY.ownRequired;
  if(field.type !== 'date' && ownDigitRun(text)) return SAY.ownDigits;   // a day written 2026-10-17 is eight digits and no account number
  if(field.type === 'number') { const n = parseTyped(text); return n === null || n < 0 ? SAY.ownNumber : ''; }
  if(field.type === 'choose') return ((lists || {})[field.list] || []).some(o => o.id === text) ? '' : SAY.ownChoose;
  if(field.type === 'date') return ownValidDay(text) ? '' : SAY.ownDate;
  return text.length > OWN_MAX_TEXT ? SAY.ownLong : '';
}
const ownFieldValue = (field, raw) => {
  const text = String(raw).trim();
  return field.type === 'number' ? parseTyped(text) : text;
};
// { value, problems: { [fieldId]: message } } for one record of fields; a blank optional field is left out of the value
function ownRecord(fields, lists, draft){
  const problems = {}, value = {};
  fields.forEach(f => {
    const raw = (draft || {})[f.id], message = ownFieldProblem(f, raw, lists);
    if(message) problems[f.id] = message;
    else if(String(raw === undefined ? '' : raw).trim() !== '') value[f.id] = ownFieldValue(f, raw);
  });
  return { value, problems };
}
const ownBlank = (fields, draft) => fields.every(f => String((draft || {})[f.id] === undefined ? '' : draft[f.id]).trim() === '');

/* ---------- the sheet ---------- */
// The stored accounts from the drafts of the sheet form: { accounts, problems: [{ path, text }] }. A fund row left wholly blank is dropped,
// and so is an account left wholly blank; the fees of an account are 0 when left blank. `path` is where the message belongs
// ("accounts.0.holdings.1.value"); with nothing left to keep, the message is under the first field of the first account.
// the account fields that apply to an account of this kind (a field with `for` only to those kinds)
const ownFieldsFor = (fields, type) => fields.filter(f => !f.for || f.for.includes(type));
function ownSheetFromDraft(form, lists, drafts){
  const rowFields = form.rows ? form.rows.fields : [], problems = [];
  const accounts = drafts.map((draft, i) => {
    if(ownBlank(form.fields, draft) && (draft.holdings || []).every(row => ownBlank(rowFields, row))) return null;
    const head = ownRecord(ownFieldsFor(form.fields, draft.type), lists, draft);
    Object.entries(head.problems).forEach(([id, text]) => problems.push({ path: `accounts.${i}.${id}`, text }));
    const holdings = (draft.holdings || []).map((row, j) => {
      if(ownBlank(rowFields, row)) return null;
      const r = ownRecord(rowFields, lists, row);
      Object.entries(r.problems).forEach(([id, text]) => problems.push({ path: `accounts.${i}.holdings.${j}.${id}`, text }));
      return r.value;
    }).filter(Boolean);
    return { id: draft.id, ...head.value, ...(head.value.fees === undefined ? { fees: 0 } : {}), holdings };
  }).filter(Boolean);
  return { accounts, problems: accounts.length ? problems : [{ path: `accounts.0.${form.fields[0].id}`, text: SAY.ownNothingYet }] };
}
// The drafts (all text) from stored accounts, so the form can be shown again
const ownText = value => value === undefined || value === null ? '' : String(value);
const ownDraftsFromSheet = (form, accounts) => accounts.map(a => ({
  id: a.id, ...Object.fromEntries(form.fields.map(f => [f.id, ownText(a[f.id])])),
  holdings: (a.holdings || []).map(h => Object.fromEntries((form.rows ? form.rows.fields : []).map(f => [f.id, ownText(h[f.id])])))
}));
const ownEmptyAccount = form => ({ id: ownNewId('a'), ...Object.fromEntries(form.fields.map(f => [f.id, ''])), holdings: [ownEmptyHolding(form)] });
const ownEmptyHolding = form => Object.fromEntries((form.rows ? form.rows.fields : []).map(f => [f.id, '']));

/* ---------- the groups beside the accounts ---------- */
const ownGroupOf = (form, id) => (form.groups || []).find(g => g.id === id) || lessonFail(`the sheet has no group ${id}`);
const ownEmptyRow = group => Object.fromEntries(group.fields.map(f => [f.id, '']));
// the drafts (all text) of the named groups, from what is stored: a record of boxes, or a list of rows with one blank row to start
const ownGroupDrafts = (form, ids, sheet) => Object.fromEntries(ids.map(id => {
  const group = ownGroupOf(form, id), held = (sheet || {})[id];
  const text = record => Object.fromEntries(group.fields.map(f => [f.id, ownText((record || {})[f.id])]));
  return [id, group.many ? (held && held.length ? held.map(text) : [ownEmptyRow(group)]) : text(held)];
}));
// The stored groups from their drafts: { groups: { [id]: value }, problems: [{ path, text }] }. A row of a list left wholly blank is dropped; a
// record left wholly blank is null when the group is optional, and asks for its fields when it is not. Fields filled together that are partly
// filled ask for the blank ones.
const ownTogetherProblems = (group, draft, at) => (group.together || []).flatMap(ids => {
  const blank = ids.filter(id => String((draft || {})[id] === undefined ? '' : draft[id]).trim() === '');
  return blank.length && blank.length < ids.length ? blank.map(id => ({ path: `${at}.${id}`, text: SAY.ownTogether })) : [];
});
function ownGroupsFromDraft(form, lists, drafts){
  const problems = [];
  const groups = Object.fromEntries(Object.entries(drafts).map(([id, draft]) => {
    const group = ownGroupOf(form, id), at = `groups.${id}`;
    if(group.many) return [id, draft.map((row, j) => {
      if(ownBlank(group.fields, row)) return null;
      const r = ownRecord(group.fields, lists, row);
      Object.entries(r.problems).forEach(([f, text]) => problems.push({ path: `${at}.${j}.${f}`, text }));
      problems.push(...ownTogetherProblems(group, row, `${at}.${j}`));
      return r.value;
    }).filter(Boolean)];
    if(group.optional && ownBlank(group.fields, draft)) return [id, null];
    const r = ownRecord(group.fields, lists, draft);
    Object.entries(r.problems).forEach(([f, text]) => problems.push({ path: `${at}.${f}`, text }));
    problems.push(...ownTogetherProblems(group, draft, at));
    return [id, r.value];
  }));
  return { groups, problems };
}

/* ---------- the lines of a business ---------- */
// The business form's fields are the fields of one line; the learner types as many lines as the business has. The stored lines from the
// drafts: { lines, problems: [{ path, text }] }. A line left wholly blank is dropped; with none left, the message is under the first field.
const ownEmptyLine = form => ({ id: ownNewId('b'), ...Object.fromEntries(form.fields.map(f => [f.id, ''])) });
function ownLinesFromDraft(form, lists, drafts){
  const problems = [];
  const lines = drafts.map((draft, i) => {
    if(ownBlank(form.fields, draft)) return null;
    const r = ownRecord(form.fields, lists, draft);
    Object.entries(r.problems).forEach(([id, text]) => problems.push({ path: `lines.${i}.${id}`, text }));
    return r.value;
  }).filter(Boolean);
  return { lines, problems: lines.length ? problems : [{ path: `lines.0.${form.fields[0].id}`, text: SAY.bizNothingYet }] };
}
const ownDraftsFromLines = (form, lines) => lines.length
  ? lines.map(l => ({ id: ownNewId('b'), ...Object.fromEntries(form.fields.map(f => [f.id, ownText(l[f.id])])) })) : [ownEmptyLine(form)];

/* ---------- the app's arithmetic on what was typed ---------- */
// What a fund costs in a year in dollars: its value times its yearly cost in percent, to the cent (nothing while its cost is not typed)
const ownHoldingDollars = h => h.expense === undefined ? 0 : ownRound(h.value * h.expense / 100);
// What an account costs in a year: its funds, then the fees taken from it
function ownAccountCost(account){
  const funds = (account.holdings || []).map(h => ({ name: h.name, value: h.value, expense: h.expense, dollars: ownHoldingDollars(h) }));
  const fees = account.fees || 0;
  return { funds, fees, total: ownRound(funds.reduce((n, f) => n + f.dollars, 0) + fees) };
}
const ownSheetCost = accounts => ownRound(accounts.reduce((n, a) => n + ownAccountCost(a).total, 0));
const ownSheetBalance = accounts => ownRound(accounts.reduce((n, a) => n + (a.balance || 0), 0));
// funds that add up to more or less than the balance typed, by more than 2% of it: [{ account index, funds, balance }]
function ownBalanceGaps(accounts){
  return accounts.map((a, i) => ({ i, funds: ownRound((a.holdings || []).reduce((n, h) => n + h.value, 0)), balance: a.balance }))
    .filter(g => g.funds > 0 && Math.abs(g.funds - g.balance) > 0.02 * g.balance);
}
// Plausible-range warnings from the fields' own `warn`: [{ path, who, text }]. A number over `over` or under `under` is probably a slip of the
// pen (a yearly cost of 15 for 0.15), so the app says so and still keeps what was typed. `who` is the fund or account it is about.
function ownWarningsOf(form, records){
  const warn = (fields, record, where, who) => fields.filter(f => f.warn && typeof record[f.id] === 'number')
    .filter(f => (f.warn.over !== undefined && record[f.id] > f.warn.over) || (f.warn.under !== undefined && record[f.id] < f.warn.under))
    .map(f => ({ path: `${where}.${f.id}`, who, text: f.warn.text }));
  return records.flatMap((a, i) => a === null ? [] : [...warn(form.fields, a, `accounts.${i}`, a.name || a.type || ''),
    ...(a.holdings || []).flatMap((h, j) => warn(form.rows ? form.rows.fields : [], h, `accounts.${i}.holdings.${j}`, h.name || ''))]);
}
const ownWarnings = (form, accounts) => ownWarningsOf(form, accounts);
// the same warnings while the sheet is still being typed: from the drafts, by the place each is in
const ownDraftWarnings = (form, lists, drafts) => ownWarningsOf(form, drafts.map(d => ({
  ...ownRecord(form.fields, lists, d).value,
  holdings: (d.holdings || []).map(h => ownRecord(form.rows ? form.rows.fields : [], lists, h).value) })));

/* ---------- dated actions ---------- */
// An action from the draft of the action form and the day it is made: a date to do it by, or done now
// `repeat` is 'year' for an action saved in a step that comes back every year (the yearly check): its calendar file repeats
function ownActionFromDraft(form, draft, today, doneNow, id, repeat){
  const fields = doneNow ? form.fields.filter(f => f.type !== 'date') : form.fields;
  const r = ownRecord(fields, {}, draft), problems = Object.entries(r.problems).map(([field, text]) => ({ path: field, text }));
  if(!doneNow && r.value.when !== undefined && r.value.when < today) problems.push({ path: 'when', text: SAY.ownPast });
  const action = { id, what: r.value.what, where: r.value.where, when: doneNow ? today : r.value.when, ...(doneNow ? { done: today } : {}), ...(repeat ? { repeat } : {}) };
  return { action, problems };
}
const ownMarkDone = (actions, id, today) => actions.map(a => a.id === id ? { ...a, done: today } : a);

/* ---------- the calendar file ---------- */
// A learner's own calendar app reads this and gives the reminder; the app itself can send no notification (10). One all-day event on the
// action's day, a reminder at nine in the morning, repeating every year when the action does. Lines end in CRLF and are folded at 75.
const icsEscape = text => String(text).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
const icsDay = day => day.replace(/-/g, '');
const icsNextDay = day => { const [y, m, d] = day.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10); };
function icsFold(line){
  const parts = [line.slice(0, 75)];
  for(let at = 75; at < line.length; at += 74) parts.push(' ' + line.slice(at, at + 74));
  return parts.join('\r\n');
}
function ownCalendarFile(action, stampDay){
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Fieldcraft//Reminder//EN', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:${action.id}@fieldcraft.web.app`, `DTSTAMP:${icsDay(stampDay)}T000000Z`,
    `DTSTART;VALUE=DATE:${icsDay(action.when)}`, `DTEND;VALUE=DATE:${icsDay(icsNextDay(action.when))}`,
    `SUMMARY:${icsEscape(action.what)}`, `LOCATION:${icsEscape(action.where)}`, `DESCRIPTION:${icsEscape(`${action.what}. Where: ${action.where}.`)}`,
    ...(action.repeat === 'year' ? ['RRULE:FREQ=YEARLY'] : []),
    'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${icsEscape(action.what)}`, 'TRIGGER;RELATED=START:PT9H', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'];
  return lines.map(icsFold).join('\r\n') + '\r\n';
}
const ownCalendarName = action => `${action.what.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'reminder'}-${action.when}.ics`;
