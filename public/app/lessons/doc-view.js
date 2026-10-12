/* ===================== LESSONS: DOCUMENTS AND FIGURES ===================== */
// Lesson standard 3.9. A `document` is a thing the situation hands you: a receipt, a recipe card, a price tag, a loan or savings offer
// (form), with a title, rows of cells and notes. A `figure` is a fixed picture filled with numbers: a rate table, the 100% bar, a plan with
// measurements, a year-by-year table. Pure string builders; the numbers drawn are the numbers in the data, never rounded or moved.
//   document: { kind: 'document', form, title, head?: [Text], tab?: Text, rows: [{ id, cells: [Text], strong? }], notes?: [Text] }
//   ref:      { kind: 'ref', ref: id of one of the subject's refs }
//   figure:   { kind: 'figure', type, data }
//     'rate-table'  { top: { label, cells }, bottom: { label, cells } }                      two rows; a cell may be a blank to fill in
//     'bar'         { whole, parts: [{ label, pct }] }                                       the whole is 100; each part is drawn pct wide
//     'plan'        { unit, parts: [{ x, y, w, h, label?, cut? }] }                          rectangles in the unit; a cut part is not counted
//     'years'       { columns: [Text], rows: [[Text]] }                                      year by year
//     'people'      { caption, rows: [{ label, count }] }                                    1,000 people for each row, the first `count` marked
// A row of a document is a segment of the block: ctx.deciding marks the rows that decide the answer, once it is given.

/* ---------- a document ---------- */
// form: receipt, recipe, tag, offer (the everyday papers); statement (a 401(k), IRA or brokerage statement), fees (a plan's fee sheet),
// paystub, matchrule (the plan's employer match), beneficiary, foreign (a foreign account summary), table (a plain table). `head` names the
// columns. A household's papers (3.9) are documents with a `tab`: the adjacent ones are shown as tabs, one open at a time.
function documentHtml(block, ctx){
  const marked = row => (ctx.deciding || []).includes(row.id);
  const amt = (i, n) => i === n - 1 && n > 1 ? 'amt' : '';
  const head = block.head ? `<thead><tr>${block.head.map((h, i) => `<th scope="col" class="${amt(i, block.head.length)}">${esc(h)}</th>`).join('')}</tr></thead>` : '';
  const rows = block.rows.map(row => {
    const cells = row.cells.map((cell, i) => `<td class="${amt(i, row.cells.length)}">${marked(row) ? `<mark class="cue">${esc(cell)}</mark>` : esc(cell)}</td>`).join('');
    return `<tr data-seg="${esc(row.id)}" class="${row.strong ? 'strong' : ''}">${cells}</tr>`;
  }).join('');
  const notes = (block.notes || []).map(n => `<p class="doc-note">${esc(n)}</p>`).join('');
  return `<div class="block-doc doc-${esc(block.form)}" data-document="${esc(block.form)}"><p class="doc-title">${esc(block.title)}</p>
    <table class="doc-rows">${head}<tbody>${rows}</tbody></table>${notes}</div>`;
}

// The tab the learner last opened in a group of papers, kept across the repaints of one screen: { scope, at }. A group with no choice of
// its own opens on the paper that holds a marked line, once there is one, else on the first.
let DOC_TAB = { scope: '', at: 0 };
function documentTabsHtml(docs, ctx){
  const holdsMarked = doc => doc.rows.some(r => (ctx.deciding || []).includes(r.id));
  const chosen = ctx.scope && DOC_TAB.scope === ctx.scope && DOC_TAB.at < docs.length ? DOC_TAB.at : Math.max(0, docs.findIndex(holdsMarked));
  const tabs = docs.map((d, i) => `<button type="button" role="tab" class="doctab ${i === chosen ? 'on' : ''}" data-doc-tab="${i}" aria-selected="${i === chosen}">${holdsMarked(d) ? `<mark class="cue">${esc(d.tab)}</mark>` : esc(d.tab)}</button>`).join('');
  const panels = docs.map((d, i) => `<div role="tabpanel" data-doc-panel="${i}" ${i === chosen ? '' : 'hidden'}>${documentHtml(d, ctx)}</div>`).join('');
  return `<div class="doc-tabs" data-doc-tabs data-scope="${esc(ctx.scope || '')}"><div class="doctabs" role="tablist" aria-label="${esc(SAY.docTabs)}">${tabs}</div>${panels}</div>`;
}
const isTabbedDocument = block => block.kind === 'document' && !!block.tab;
// The blocks of a screen as pieces: adjacent tabbed documents become one piece, every other block stays one. [{ tabs: [doc] } | { block }]
function blockPieces(blocks){
  return blocks.reduce((pieces, block) => {
    const last = pieces[pieces.length - 1];
    if(isTabbedDocument(block) && last && last.tabs) return [...pieces.slice(0, -1), { tabs: [...last.tabs, block] }];
    return [...pieces, isTabbedDocument(block) ? { tabs: [block] } : { block }];
  }, []);
}

/* ---------- a value looked up ---------- */
// A dated value (a threshold, a limit) is never memorized: the subject keeps it with the day it was looked up and where, and the block
// prints all three. After a year it says to look again.
const REF_STALE_DAYS = 365;
function refHtml(block, ctx){
  const refs = (ctx.data && ctx.data.meta.refs) || [], ref = refs.find(r => r.id === block.ref) || lessonFail(`unknown ref ${block.ref}`);
  const [y, m, d] = ref.asOf.split('-').map(Number), [ty, tm, td] = today().split('-').map(Number);
  const old = (new Date(ty, tm - 1, td) - new Date(y, m - 1, d)) / 86400000 > REF_STALE_DAYS;
  return `<div class="block-ref" data-ref="${esc(ref.id)}"><p class="ref-text">${esc(ref.text)}</p><p class="ref-value">${esc(ref.value)}</p>
    <p class="doc-note">${esc(SAY.refLooked(ref.asOf))}. ${esc(SAY.refSource(ref.source))}.</p><p class="doc-note ${old ? 'old' : ''}">${esc(old ? SAY.refOld : SAY.refCheck)}</p></div>`;
}

/* ---------- a figure ---------- */
const figNumber = x => Number(x);
const FIGURE_W = 300;   // the width of a drawn figure, in its own units

function rateTableHtml(d){
  const row = r => `<tr><th scope="row">${esc(r.label)}</th>${r.cells.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`;
  return `<table class="fig-table fig-rate"><tbody>${row(d.top)}${row(d.bottom)}</tbody></table>`;
}
function yearsHtml(d){
  const head = `<tr>${d.columns.map(c => `<th scope="col">${esc(c)}</th>`).join('')}</tr>`;
  return `<table class="fig-table fig-years"><thead>${head}</thead><tbody>${d.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
// the 100% bar: the whole is 100 units wide, every part as wide as its percent
function barHtml(d){
  let x = 0;
  const parts = d.parts.map(p => ({ label: p.label, pct: figNumber(p.pct) }));
  const rects = parts.map((p, i) => { const rect = `<rect class="fig-seg s${i % 3}" x="${x}" y="0" width="${p.pct}" height="20" data-pct="${p.pct}"></rect>`; x += p.pct; return rect; }).join('');
  const legend = parts.map((p, i) => `<li><span class="fig-swatch s${i % 3}"></span>${esc(p.label)}: ${p.pct}%</li>`).join('');
  return `<p class="fig-cap">${esc(d.whole)}</p><svg class="fig-bar" viewBox="0 0 100 20" preserveAspectRatio="none" role="img" aria-label="${esc(d.whole)}">${rects}</svg>
    <div class="fig-ends"><span>0%</span><span>100%</span></div><ul class="fig-legend">${legend}</ul>`;
}
// a plan: every rectangle drawn to one scale, its width and height written beside it
function planHtml(d){
  const parts = d.parts.map(p => ({ ...p, x: figNumber(p.x), y: figNumber(p.y), w: figNumber(p.w), h: figNumber(p.h) }));
  const wide = Math.max(...parts.map(p => p.x + p.w)), high = Math.max(...parts.map(p => p.y + p.h));
  const margin = 34, k = (FIGURE_W - 2 * margin) / wide, height = Math.round(high * k + 2 * margin);
  const at = v => Math.round(v * k * 100) / 100;
  const shapes = parts.map(p => `<rect class="fig-room ${p.cut ? 'cut' : ''}" x="${at(p.x) + margin}" y="${at(p.y) + margin}" width="${at(p.w)}" height="${at(p.h)}" data-w="${p.w}" data-h="${p.h}"></rect>`).join('');
  const notes = parts.map(p => `<text class="fig-label" x="${at(p.x + p.w / 2) + margin}" y="${at(p.y) + margin - 6}" text-anchor="middle">${esc(p.w)} ${esc(d.unit)}</text>
    <text class="fig-label" x="${at(p.x) + margin - 6}" y="${at(p.y + p.h / 2) + margin}" text-anchor="end">${esc(p.h)} ${esc(d.unit)}</text>${p.label ? `<text class="fig-label in" x="${at(p.x + p.w / 2) + margin}" y="${at(p.y + p.h / 2) + margin + 4}" text-anchor="middle">${esc(p.label)}</text>` : ''}`).join('');
  return `<svg class="fig-plan" viewBox="0 0 ${FIGURE_W} ${height}" role="img" aria-label="${esc(parts.map(p => `${p.w} by ${p.h} ${d.unit}`).join(', '))}">${shapes}${notes}</svg>`;
}
// 1,000 people: for each row a grid of 1,000 dots (50 across, 20 down), the first `count` of them marked, read left to right and top to bottom.
// A relative number ("cuts the risk by half") becomes "so many in 1,000" by looking at the people.
const PEOPLE = { total: 1000, columns: 50, gap: 6 };
function peopleRowHtml(row){
  const dots = Array.from({ length: PEOPLE.total }, (_, i) => `<circle class="fig-person${i < row.count ? ' on' : ''}" cx="${(i % PEOPLE.columns) * PEOPLE.gap + PEOPLE.gap / 2}" cy="${Math.floor(i / PEOPLE.columns) * PEOPLE.gap + PEOPLE.gap / 2}" r="${i < row.count ? 2.5 : 1.5}"></circle>`).join('');
  const rows = PEOPLE.total / PEOPLE.columns;
  return `<div class="fig-people-row"><p class="fig-rowcap">${esc(SAY.peopleIn(row.label, row.count))}</p>
    <svg class="fig-people" viewBox="0 0 ${PEOPLE.columns * PEOPLE.gap} ${rows * PEOPLE.gap}" role="img" aria-label="${esc(SAY.peopleIn(row.label, row.count))}">${dots}</svg></div>`;
}
const peopleHtml = d => `<p class="fig-cap">${esc(d.caption)}</p>${d.rows.map(peopleRowHtml).join('')}`;
const FIGURE_HTML = { 'rate-table': rateTableHtml, bar: barHtml, plan: planHtml, years: yearsHtml, people: peopleHtml };
function figureHtml(block){
  return `<div class="block-fig" data-figure="${esc(block.type)}">${FIGURE_HTML[block.type](block.data)}</div>`;
}
