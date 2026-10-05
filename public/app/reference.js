/* ===================== REFERENCE ===================== */

const oldUnitsHtml = subj => subj.course.filter(u => !isRebuilt(u)).map(u => `<details class="fg"><summary>Unit ${esc(u.tag)} &mdash; ${esc(u.title)}
    <span class="ar" style="display:flex">${icon('chevron',16)}</span></summary>
    <div class="fg-body lesson">${u.cards.map(c => `<h3>${esc(c.h)}</h3>${c.b}`).join('')}</div></details>`).join('');

// A subject with rebuilt units shows its reference generated from the key; its old units keep their old reference
// (lesson standard E14). A subject with none is exactly as it was.
function referenceBody(subj, units){
  const meta = FC.get(subj.id).meta, generated = units ? keyReferenceHtml(subj) : '';
  const old = subj.course.some(u => !isRebuilt(u));
  if(!meta) return units ? oldUnitsHtml(subj) : `<div class="lesson">${subj.caveats}</div>`;
  if(units){
    return generated
      + `<div class="sect top"><span class="m">${esc(REF_SAY.stopsHeading)}</span></div>${limitsHtml(meta)}`
      + (old ? `<div class="sect top"><span class="m">${esc(REF_SAY.oldUnits)}</span></div>${oldUnitsHtml(subj)}` : '');
  }
  return limitsHtml(meta) + (old ? `<div class="lesson">${subj.caveats}</div>` : '');
}

function renderReference(subj){
  const units = APP.refMode !== 'caveats';
  screenEl().innerHTML = `<div class="pane read" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row">
      <span class="m a">${esc(subj.name)}</span>
      <h1>${units ? 'Reference' : REF_SAY.stopsHeading}</h1>
    </div>
    ${referenceBody(subj, units)}
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
}
