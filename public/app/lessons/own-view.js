/* ===================== LESSONS: THE LEARNER'S OWN DATA ON SCREEN ===================== */
// Lesson standard 5 and 26.5. The HTML of the sheet form, of what the accounts cost, of the dated actions and of the "Your accounts and
// dates" section of the subject screen. Pure string builders: nothing here reads the page or the storage (own-run.js does).
//   problems: [{ path, text }]   the message that belongs under a field ("accounts.0.holdings.1.value")
//   Every box carries data-path, so a typed value goes back into the draft of the field it belongs to.

const ownProblemAt = (problems, path) => (problems || []).find(p => p.path === path);
const ownLabel = field => field.optional ? `${field.label}${SAY.ownOptional}` : field.label;

function ownFieldHtml(field, lists, value, path, problems){
  const problem = ownProblemAt(problems, path), id = `own-${path.replace(/\./g, '-')}`, bad = problem ? 'aria-invalid="true"' : '';
  const described = problem ? `aria-describedby="${id}-err"` : '';
  let control;
  if(field.type === 'choose'){
    const options = ((lists || {})[field.list] || []).map(o => `<option value="${esc(o.id)}" ${o.id === value ? 'selected' : ''}>${esc(o.text)}</option>`).join('');
    control = `<select class="selbox" id="${id}" data-path="${esc(path)}" ${bad} ${described}><option value="">${esc(SAY.ownChoosePlaceholder)}</option>${options}</select>`;
  } else if(field.type === 'date'){
    control = `<input class="numbox datebox" type="date" id="${id}" data-path="${esc(path)}" value="${esc(value)}" min="${esc(today())}" ${bad} ${described}>`;
  } else {
    const number = field.type === 'number';
    control = `<input class="numbox ${number ? '' : 'textbox'}" type="text" id="${id}" data-path="${esc(path)}" value="${esc(value)}" ${number ? 'inputmode="decimal"' : 'maxlength="80"'}
      autocomplete="off" autocapitalize="off" spellcheck="false" ${field.hint ? `placeholder="${esc(field.hint)}"` : ''} ${bad} ${described}>`;
  }
  const unit = field.unit ? `<span class="numtext">${esc(field.unit)}</span>` : '';
  return `<div class="ownfield"><label class="formlabel" for="${id}">${esc(ownLabel(field))}</label><div class="numframe">${control}${unit}</div>
    ${problem ? `<p class="fielderr" id="${id}-err" role="alert">${esc(problem.text)}</p>` : ''}</div>`;
}

/* ---------- the sheet form ---------- */
function ownFundHtml(form, lists, fund, i, j, problems, warnings){
  const path = `accounts.${i}.holdings.${j}`;
  const fields = form.rows.fields.map(f => ownFieldHtml(f, lists, fund[f.id], `${path}.${f.id}`, problems)
    + (ownProblemAt(warnings, `${path}.${f.id}`) ? `<p class="ownwarn" role="status">${esc(ownProblemAt(warnings, `${path}.${f.id}`).text)}</p>` : '')).join('');
  return `<div class="ownfund" data-fund="${j}"><p class="m lab">${esc(SAY.ownFundN(j + 1))}</p>${fields}
    <button type="button" class="linkish" data-remove-fund="${i}.${j}">${esc(SAY.ownRemoveFund)}</button></div>`;
}
function ownAccountHtml(form, lists, draft, i, problems, warnings){
  const head = form.fields.map(f => ownFieldHtml(f, lists, draft[f.id], `accounts.${i}.${f.id}`, problems)).join('');
  const funds = form.rows ? (draft.holdings || []).map((h, j) => ownFundHtml(form, lists, h, i, j, problems, warnings)).join('')
    + `<button type="button" class="btn ghost sm" data-add-fund="${i}">${esc(SAY.ownAddFund)}</button>` : '';
  return `<section class="owncard" data-account="${i}"><h2 class="owntitle">${esc(SAY.ownAccountN(i + 1))}</h2>${head}${funds}
    <button type="button" class="linkish" data-remove-account="${i}">${esc(SAY.ownRemoveAccount)}</button></section>`;
}
function sheetEditorHtml(form, lists, drafts, problems, warnings){
  return `<div class="ownform" data-own-sheet>${drafts.map((d, i) => ownAccountHtml(form, lists, d, i, problems, warnings)).join('')}
    <button type="button" class="btn ghost sm" data-add-account>${esc(SAY.ownAddAccount)}</button></div>`;
}

/* ---------- what the accounts cost ---------- */
const ownTypeText = (lists, account) => (((lists || {}).accountType || []).find(o => o.id === account.type) || { text: account.type }).text;
const ownAccountTitle = (lists, account) => account.name ? `${account.name} (${ownTypeText(lists, account)})` : ownTypeText(lists, account);
// the arithmetic of one account as a statement: each fund, its yearly cost, the dollars, the fees, the total
function ownCostDocument(lists, account){
  const cost = ownAccountCost(account);
  const rows = [...cost.funds.map((f, i) => ({ id: `fund${i}`, cells: [`${f.name}, ${ownWhole(f.value)}`, `${Number(f.expense.toFixed(3))}%`, ownMoney(f.dollars)] })),
    ...(cost.fees ? [{ id: 'fees', cells: [SAY.ownFees, '', ownMoney(cost.fees)] }] : []),
    { id: 'total', strong: true, cells: [SAY.ownThisCosts, '', `${ownMoney(cost.total)} ${SAY.ownAYear}`] }];
  return { kind: 'document', form: 'statement', title: ownAccountTitle(lists, account), head: [SAY.ownFundCol, SAY.ownRateCol, SAY.ownDollarsCol], rows };
}
function ownCostsHtml(form, lists, accounts){
  const total = ownSheetCost(accounts), balance = ownSheetBalance(accounts);
  const docs = accounts.map(a => documentHtml(ownCostDocument(lists, a), {})).join('');
  const gaps = ownBalanceGaps(accounts).map(g => `<p class="ownwarn" role="status">${esc(ownAccountTitle(lists, accounts[g.i]))}: ${esc(SAY.ownGap(ownWhole(g.funds), ownWhole(g.balance)))}</p>`).join('');
  const warns = ownWarnings(form, accounts).map(w => `<p class="ownwarn" role="status">${esc(w.who ? `${w.who}: ${w.text}` : w.text)}</p>`).join('');
  const pct = balance ? fmtNumber(total / balance * 100) : '0';
  return `<div class="blocks" data-own-costs>${docs}</div>${gaps}${warns}
    <p class="owntotal" data-own-total><b>${esc(SAY.ownAllCost)} ${esc(ownMoney(total))} ${esc(SAY.ownAYear)}</b>, ${esc(SAY.ownAPercent(pct))}.</p>`;
}

/* ---------- dated actions ---------- */
function ownActionRowHtml(action, subjectId){
  const done = action.done ? esc(SAY.ownDoneOn(action.done)) : esc(SAY.ownDueOn(action.when));
  return `<li class="ownaction" data-action="${esc(action.id)}"><span class="owntext"><b>${esc(action.what)}</b><span class="ownwhere">${esc(action.where)} &middot; ${done}</span></span>
    <span class="ownbtns">${action.done ? '' : `<button type="button" class="btn ghost sm" data-action-done="${esc(action.id)}">${esc(SAY.ownMarkDone)}</button>`}
    <button type="button" class="btn ghost sm" data-action-ics="${esc(action.id)}">${esc(SAY.ownCalendar)}</button></span></li>`;
}
const ownActionListHtml = (actions, subjectId) => actions.length ? `<ul class="ownactions">${actions.map(a => ownActionRowHtml(a, subjectId)).join('')}</ul>` : '';
function ownActionFormHtml(form, draft, problems){
  const fields = form.fields.map(f => ownFieldHtml({ ...f, hint: f.id === 'what' ? SAY.ownWhatHint : f.id === 'where' ? SAY.ownWhereHint : undefined }, {}, draft[f.id] || '', f.id, problems)).join('');
  return `<div class="ownactionform" data-own-action>${fields}<div class="numacts"><button type="button" class="btn sm" data-save-action>${esc(SAY.ownSaveAction)}</button>
    <button type="button" class="btn ghost sm" data-action-now>${esc(SAY.ownDoneNow)}</button></div></div>`;
}

/* ---------- the subject screen ---------- */
// "Your accounts and dates": what is stored, the dated actions with their calendar files and done marks, the moments the learner has
// marked, and the two controls that take it out of the phone or off it.
function ownSectionHtml(subj, data, state){
  const notes = notesOf(subj.id), lists = data.meta.lists, accounts = (notes.sheet || { accounts: [] }).accounts, actions = notes.actions || [], triggers = notes.triggers || {};
  const has = into => Object.values(data.meta.own || {}).some(f => f.into === into);
  const accountRows = accounts.map(a => `<tr><td>${esc(ownAccountTitle(lists, a))}</td><td>${esc(ownWhole(a.balance))}</td><td>${esc(ownMoney(ownAccountCost(a).total))} ${esc(SAY.ownAYear)}</td></tr>`).join('');
  const moments = ((lists || {}).trigger || []).map(t => `<tr data-trigger="${esc(t.id)}"><td>${esc(t.text)}</td><td>${triggers[t.id]
    ? `${esc(SAY.ownMarked(triggers[t.id]))} <button type="button" class="linkish" data-trigger-clear="${esc(t.id)}">${esc(SAY.ownMomentClear)}</button>`
    : `<button type="button" class="btn ghost sm" data-trigger-mark="${esc(t.id)}">${esc(SAY.ownMomentMark)}</button>`}</td></tr>`).join('');
  const hasAny = Object.keys(notes).length > 0;
  const remove = state.deleting
    ? `<div class="vblock" data-own-delete-ask><p>${esc(has('sheet') ? SAY.ownDeleteAsk : has('answers') ? SAY.answersDeleteAsk : SAY.planDeleteAsk)}</p><div class="numacts"><button type="button" class="btn sm" data-own-delete-yes>${esc(SAY.ownDeleteYes)}</button>
        <button type="button" class="btn ghost sm" data-own-delete-no>${esc(SAY.ownDeleteNo)}</button></div></div>`
    : `<button type="button" class="btn ghost sm" data-own-delete ${hasAny ? '' : 'disabled'}>${esc(has('sheet') ? SAY.ownDelete : has('answers') ? SAY.answersDelete : SAY.planDelete)}</button>`;
  const sheetHtml = has('sheet') ? `<span class="m lab">${esc(SAY.ownAccountsHeading)}</span>
    ${accounts.length ? `<table class="k results ownsum">${accountRows}</table>` : `<p class="hintline">${esc(SAY.ownNoSheet)}</p>`}` : '';
  const actionsHtml = has('actions') ? `<span class="m lab">${esc(SAY.ownActionsHeading)}</span>
    ${actions.length ? ownActionListHtml(actions, subj.id) : `<p class="hintline">${esc(SAY.ownNoActions)}</p>`}` : '';
  return `<div class="sect top"><span class="m">${esc(has('sheet') ? SAY.ownSection : has('answers') ? SAY.answersSection : SAY.planSection)}</span></div><div class="ownsection" data-own="private">
    <p class="hintline">${esc(SAY.ownOnPhone)}</p>
    ${sheetHtml}${actionsHtml}${planSectionHtml(data, notes)}${answersSectionHtml(data, notes)}
    ${moments ? `<span class="m lab">${esc(SAY.ownMomentsHeading)}</span><table class="k results ownsum">${moments}</table>` : ''}
    <div class="numacts"><button type="button" class="btn ghost sm" data-own-export ${hasAny ? '' : 'disabled'}>${esc(has('sheet') ? SAY.ownExport : has('answers') ? SAY.answersExport : SAY.planExport)}</button></div>
    ${state.deleted ? `<p class="hintline" role="status">${esc(SAY.ownDeleted)}</p>` : ''}${remove}</div>`;
}
