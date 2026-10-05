/* ===================== LESSON ===================== */

function renderLesson(subj){
  const c = st(subj).course, u = subj.course[c.u], card = u.cards[c.card];
  const last = c.card === u.cards.length - 1;

  screenEl().innerHTML = `<div class="withaside" style="--accent:${subj.accent}">
    <aside class="aside">
      <div class="ahead">
        <span class="m">Unit ${esc(u.tag)}</span>
        <h2>${esc(u.title)}</h2>
      </div>
      ${u.cards.map((cc,i) => `<button class="acard ${i===c.card?'on':''}" data-c="${i}">
        <i>${i+1}</i><span>${esc(cc.h)}</span></button>`).join('')}
      <div style="padding-top:14px;margin-top:10px;border-top:1px solid var(--divider)">
        <span class="m s">Then: ${esc(drillOf(u, subj))}</span>
      </div>
    </aside>

    <div class="pane read flush">
      <div class="topbar">
        <button class="iconbtn" data-v="subject">${icon('back',20)}</button>
        <span class="m">Unit ${esc(u.tag)} &middot; Card ${c.card+1} of ${u.cards.length}</span>
        <button class="iconbtn" data-v="subject">${icon('list',19)}</button>
      </div>
      <div class="segs thin" style="margin:14px 0 0">
        ${u.cards.map((_,i) => `<i class="${i<=c.card?'on':''}"></i>`).join('')}</div>

      <div class="eyebrow-row">
        <span class="m a">${esc(u.title)}</span>
        <h1>${esc(card.h)}</h1>
      </div>
      <div class="lesson">${card.b}</div>

      <div class="actbar">
        <div class="actrow">
          ${c.card > 0 ? `<button class="btn ghost" id="back">Back</button>` : ''}
          <button class="btn neutral" id="fwd">${last ? 'Start the drill' : 'Next card'}${icon('arrow')}</button>
        </div>
        <p class="hint">${last ? esc(drillOf(u, subj)) :
          (u.cards.length - c.card - 1) + ' more card' + (u.cards.length - c.card - 1 === 1 ? '' : 's') + ', then the drill'}</p>
      </div>
    </div>
  </div>`;

  on('[data-v]', el => go(el.dataset.v));
  on('[data-c]', el => { c.card = +el.dataset.c; saveCourse(subj); renderLesson(subj); window.scrollTo(0,0); });
  on('#back', () => { c.card--; saveCourse(subj); renderLesson(subj); window.scrollTo(0,0); });
  on('#fwd', () => {
    if(!last){ c.card++; saveCourse(subj); renderLesson(subj); window.scrollTo(0,0); }
    else startUnitDrill(subj);
  });
}

function startUnitDrill(subj){
  const S = st(subj), u = subj.course[S.course.u];
  if(u.drill.kind === 'det')      S.detState = freshDet();
  else if(u.drill.kind === 'err') S.errState = {i:0, picked:null};
  else                            S.drill[u.drill.key] = {i:0, picked:null};
  S.course.phase = 'drill'; saveCourse(subj);
  go('unitdrill');
}
