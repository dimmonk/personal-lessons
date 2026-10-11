/* ===================== LESSONS: THE PAPERS OF A HOUSEHOLD, AS TABS ===================== */
// Lesson standard 26.1.2. A household's papers are tabs: a tap on one opens that paper and shuts the others, in place (the page does not
// jump and nothing is repainted). The tab chosen is kept in DOC_TAB (doc-view.js), so a screen painted again for the next answer opens on
// the paper the learner was reading. Marked lines are never lost by this: every paper is in the page, the others are only hidden.

function openDocTab(tab){
  const group = tab.closest('[data-doc-tabs]'), at = Number(tab.dataset.docTab);
  group.querySelectorAll('[data-doc-tab]').forEach(t => {
    const on = t === tab;
    t.classList.toggle('on', on);
    t.setAttribute('aria-selected', String(on));
  });
  group.querySelectorAll('[data-doc-panel]').forEach(panel => { panel.hidden = Number(panel.dataset.docPanel) !== at; });
  DOC_TAB = { scope: group.dataset.scope, at };
}
// armed once, at the start: one listener for every group of papers on every screen
function wireDocTabs(){
  document.addEventListener('click', e => {
    const tab = e.target.closest('[data-doc-tab]');
    if(tab) openDocTab(tab);
  });
}
