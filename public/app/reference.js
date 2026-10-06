/* ===================== REFERENCE ===================== */

// The reference is generated from the key (lesson standard E14); "where these questions stop" is the subject record's limits.
function renderReference(subj){
  const units = APP.refMode !== 'caveats';
  screenEl().innerHTML = `<div class="pane read" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row">
      <span class="m a">${esc(subj.name)}</span>
      <h1>${units ? 'Reference' : REF_SAY.stopsHeading}</h1>
    </div>
    ${units
      ? keyReferenceHtml(subj) + `<div class="sect top"><span class="m">${esc(REF_SAY.stopsHeading)}</span></div>${limitsHtml(subj.id)}`
      : limitsHtml(subj.id)}
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
}
