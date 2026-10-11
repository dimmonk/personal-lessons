/* ===================== LESSONS: WHAT A LABEL NEEDS, ON SCREEN ===================== */
// Lesson standard 26.1.2 (the `panel` block) and 26.2 (each need found or missing). Pure HTML builders over panel.js. The words come from the
// subject's `rules`, typed once; a panel and the feedback that follows it print the same needs.

// The panel: every rule it names, with its needs in a numbered list. While a group has the help `panel` it stands beside the words; on a
// teaching screen it is always drawn. A group without the help draws nothing (ctx.panel is false there).
function panelHtml(block, ctx) {
  if (ctx.panel === false) return '';
  const rules = block.rules.map(id => ruleOf(ctx.data, id));
  return `<div class="block-panel" data-panel="${esc(block.rules.join(' '))}"><span class="m lab">${esc(SAY.panelHeading)}</span>
    ${rules.map(r => `<div class="panel-rule"><p class="panel-name">${esc(r.name)}</p><ol class="panel-needs">${r.needs.map(n => `<li data-need="${esc(n.id)}">${esc(n.text)}</li>`).join('')}</ol></div>`).join('')}</div>`;
}

// The feedback of a question that has a panel: each need of the label, and the line of the words that shows it or the word that it is missing
function hasHtml(data, item) {
  return hasLines(data, item).map(g => `<div class="vblock" data-has="${esc(g.id)}">${lessonLabel(SAY.hasHeading(g.name))}<ul class="hasneeds">${g.needs.map(n => n.found
    ? `<li class="found" data-need="${esc(n.id)}"><b>${esc(SAY.hasFound)}</b> ${esc(n.text)}<span class="hasline">“${esc(tapClip(n.found.text))}”</span></li>`
    : `<li class="missing" data-need="${esc(n.id)}"><b>${esc(SAY.hasMissing)}</b> ${esc(n.text)}<span class="hasline">${esc(SAY.hasNowhere)}</span></li>`).join('')}</ul></div>`).join('');
}

// The facets a subject compares, side by side: the end of a check, a second check, the review
function splitsHtml(splits, prefix = '') {
  return splits.map(s => `<div class="vblock" data-split="${esc(s.name)}">${lessonLabel(SAY.splitHeading(prefix + s.name))}
    <table class="k results">${s.rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table></div>`).join('');
}
