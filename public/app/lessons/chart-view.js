/* ===================== LESSONS: A CHART DRAWN FROM ITS DATA ===================== */
// Lesson standard 3.9 (the `chart` block). An SVG drawn from the block's numbers by chart.js: real axes, bars or a line, a cut axis when
// the data says so. The numbers drawn are the numbers in the data, never rounded or moved: a bar is as tall as its value is far above the
// start of the axis, and the start of the axis is written on it. The title, the labels and the source are quoted material.

function chartAxisHtml(chart){
  const y = chart.y, left = CHART_PLOT.x0, right = CHART_PLOT.x1;
  const grid = chartTicks(y).map(v => {
    const at = chartAt(y, v);
    return `<line class="chart-grid" x1="${left}" x2="${right}" y1="${at}" y2="${at}"></line>
      <text class="chart-tick" x="${left - 5}" y="${at + 4}" text-anchor="end" data-tick="${v}">${esc(fmtNumber(v))}</text>`;
  }).join('');
  const unit = y.unit ? `<text class="chart-unit" x="${left}" y="${CHART_PLOT.y0 - 10}" text-anchor="start">${esc(y.unit)}</text>` : '';
  const band = chartBand(chart);
  const places = chart.x.map((label, i) => `<text class="chart-place" x="${left + band * (i + 0.5)}" y="${CHART_PLOT.y1 + 16}" text-anchor="middle">${esc(label)}</text>`).join('');
  return grid + unit + places;
}

function chartBarsHtml(chart){
  const band = chartBand(chart), n = chart.series.length, width = band * 0.7 / n, y = chart.y;
  return chart.series.map((s, k) => s.values.map((v, i) => {
    const x = CHART_PLOT.x0 + band * i + band * 0.15 + width * k, top = chartAt(y, v);
    const value = chart.labels ? `<text class="chart-value" x="${x + width / 2}" y="${top - 4}" text-anchor="middle">${esc(fmtNumber(v))}</text>` : '';
    return `<rect class="chart-bar s${k}" x="${x}" y="${top}" width="${width}" height="${CHART_PLOT.y1 - top}" data-value="${v}" data-series="${k}"></rect>${value}`;
  }).join('')).join('');
}

function chartLineHtml(chart){
  const band = chartBand(chart), y = chart.y;
  return chart.series.map((s, k) => {
    const points = s.values.map((v, i) => [CHART_PLOT.x0 + band * (i + 0.5), chartAt(y, v), v]);
    const dots = points.map(([x, at, v]) => `<circle class="chart-dot s${k}" cx="${x}" cy="${at}" r="3.2" data-value="${v}" data-series="${k}"></circle>${chart.labels
      ? `<text class="chart-value" x="${x}" y="${at - 8}" text-anchor="middle">${esc(fmtNumber(v))}</text>` : ''}`).join('');
    return `<polyline class="chart-line s${k}" points="${points.map(([x, at]) => `${x},${at}`).join(' ')}"></polyline>${dots}`;
  }).join('');
}

function chartHtml(block){
  const problems = chartProblems(block);
  if(problems.length) lessonFail(`chart "${block.title}": ${problems[0]}`);
  const legend = block.series.length > 1
    ? `<ul class="fig-legend chart-legend">${block.series.map((s, k) => `<li><span class="fig-swatch s${k}"></span>${esc(s.name)}</li>`).join('')}</ul>` : '';
  return `<figure class="block-chart" data-chart="${esc(block.type)}" data-axis-from="${block.y.from}"><p class="chart-title">${esc(block.title)}</p>
    <svg class="chart-svg" viewBox="0 0 ${CHART_BOX.w} ${CHART_BOX.h}" role="img" aria-label="${esc(chartAlt(block))}">${chartAxisHtml(block)}${block.type === 'line' ? chartLineHtml(block) : chartBarsHtml(block)}</svg>
    ${legend}<p class="chart-source">${esc(SAY.chartSource(block.source))}</p></figure>`;
}
