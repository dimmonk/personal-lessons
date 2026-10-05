/* ===================== REFERENCE ===================== */

function renderReference(subj){
  const units = APP.refMode !== 'caveats';
  screenEl().innerHTML = `<div class="pane read" style="--accent:${subj.accent}">
    <div class="topbar"><button class="back" data-v="subject">${icon('back',18)}${esc(subj.name)}</button></div>
    <div class="eyebrow-row">
      <span class="m a">${esc(subj.name)}</span>
      <h1>${units ? 'Reference' : 'Where this key stops'}</h1>
    </div>
    ${units
      ? subj.course.filter(u => !isRebuilt(u)).map(u => `<details class="fg"><summary>Unit ${esc(u.tag)} &mdash; ${esc(u.title)}
          <span class="ar" style="display:flex">${icon('chevron',16)}</span></summary>
          <div class="fg-body lesson">${u.cards.map(c => `<h3>${esc(c.h)}</h3>${c.b}`).join('')}</div></details>`).join('')
      : `<div class="lesson">${subj.caveats}</div>`}
  </div>`;
  on('[data-v]', el => go(el.dataset.v));
}
