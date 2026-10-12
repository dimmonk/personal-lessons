/* ===================== LESSONS: WHAT A LABEL NEEDS, ON SCREEN ===================== */
// Lesson standard 26.1.2 (the `panel` block) and 26.2 (each need found or missing). Pure HTML builders over panel.js. The words come from the
// subject's `rules`, typed once; a panel and the feedback that follows it print the same needs.

// The panel: every rule it names, with its needs in a numbered list. While a group has the help `panel` it stands beside the words; on a
// teaching screen it is always drawn. A group without the help draws nothing (ctx.panel is false there).
function panelHtml(block, ctx) {
  if (ctx.panel === false) return '';
  const rules = block.rules.map(id => ruleOf(ctx.data, id)), own = rules.length === 1 && rules[0].heading;
  return `<div class="block-panel" data-panel="${esc(block.rules.join(' '))}"><span class="m lab">${esc(own || SAY.panelHeading)}</span>
    ${rules.map(r => `<div class="panel-rule">${own ? '' : `<p class="panel-name">${esc(r.name)}</p>`}<ol class="panel-needs">${r.needs.map(n => `<li data-need="${esc(n.id)}">${esc(n.text)}</li>`).join('')}</ol></div>`).join('')}</div>`;
}
// the line that says the panel is beside the words: a checklist with a heading of its own is named by it
function panelHint(data, item) {
  const rules = itemRuleIds(item).map(id => ruleOf(data, id));
  return rules.length === 1 && rules[0].heading ? SAY.helpPanelNamed(rules[0].heading) : SAY.helpPanel;
}

// The feedback of a question that has a panel: each need of the label, and the lines of the words that show it or the word that it is missing.
// A checklist that says `feedback: 'on-miss'` is listed after a miss, or when a need is missing (`missed`), and not after every right answer.
function hasHtml(data, item, missed = true) {
  return hasLines(data, item).filter(g => !g.onMiss || missed || g.needs.some(n => !n.found.length)).map(g => `<div class="vblock" data-has="${esc(g.id)}">${lessonLabel(g.heading || SAY.hasHeading(g.name))}<ul class="hasneeds">${g.needs.map(n => n.found.length
    ? `<li class="found" data-need="${esc(n.id)}"><b>${esc(SAY.hasFound)}</b> ${esc(n.text)}${n.found.map(f => `<span class="hasline">“${esc(tapClip(f.text))}”</span>`).join('')}</li>`
    : `<li class="missing" data-need="${esc(n.id)}"><b>${esc(SAY.hasMissing)}</b> ${esc(n.text)}<span class="hasline">${esc(SAY.hasNowhere)}</span></li>`).join('')}</ul></div>`).join('');
}

// The facets a subject compares, side by side: the end of a check, a second check, the review
function splitsHtml(splits, prefix = '') {
  return splits.map(s => `<div class="vblock" data-split="${esc(s.name)}">${lessonLabel(SAY.splitHeading(prefix + s.name))}
    <table class="k results">${s.rows.map(([a, b]) => `<tr><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join('')}</table></div>`).join('');
}
