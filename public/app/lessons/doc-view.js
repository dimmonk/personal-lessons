/* ===================== LESSONS: DOCUMENTS AND FIGURES ===================== */
// Lesson standard 26.1.2. A `document` is a thing the situation hands you: a receipt, a recipe card, a price tag, a loan or savings offer
// (form), with a title, rows of cells and notes. A `figure` is a fixed picture filled with numbers: a rate table, the 100% bar, a plan with
// measurements, a year-by-year table. Pure string builders; the numbers drawn are the numbers in the data, never rounded or moved.
//   document: { kind: 'document', form, title, rows: [{ id, cells: [Text], strong? }], notes?: [Text] }
//   figure:   { kind: 'figure', type, data }
//     'rate-table'  { top: { label, cells }, bottom: { label, cells } }                      two rows; a cell may be a blank to fill in
//     'bar'         { whole, parts: [{ label, pct }] }                                       the whole is 100; each part is drawn pct wide
//     'plan'        { unit, parts: [{ x, y, w, h, label?, cut? }] }                          rectangles in the unit; a cut part is not counted
//     'years'       { columns: [Text], rows: [[Text]] }                                      year by year
// A row of a document is a segment of the block: ctx.deciding marks the rows that decide the answer, once it is given.

/* ---------- a document ---------- */
function documentHtml(block, ctx){
  const marked = row => (ctx.deciding || []).includes(row.id);
  const rows = block.rows.map(row => {
    const cells = row.cells.map((cell, i) => {
      const last = i === row.cells.length - 1 && row.cells.length > 1;
      return `<td class="${last ? 'amt' : ''}">${marked(row) ? `<mark class="cue">${esc(cell)}</mark>` : esc(cell)}</td>`;
    }).join('');
    return `<tr data-seg="${esc(row.id)}" class="${row.strong ? 'strong' : ''}">${cells}</tr>`;
  }).join('');
  const notes = (block.notes || []).map(n => `<p class="doc-note">${esc(n)}</p>`).join('');
  return `<div class="block-doc doc-${esc(block.form)}" data-document="${esc(block.form)}"><p class="doc-title">${esc(block.title)}</p>
    <table class="doc-rows"><tbody>${rows}</tbody></table>${notes}</div>`;
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
const FIGURE_HTML = { 'rate-table': rateTableHtml, bar: barHtml, plan: planHtml, years: yearsHtml };
function figureHtml(block){
  return `<div class="block-fig" data-figure="${esc(block.type)}">${FIGURE_HTML[block.type](block.data)}</div>`;
}
