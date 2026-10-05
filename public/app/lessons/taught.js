/* ===================== LESSONS: "TAUGHT ON", AND A CARD OPENED FOR LOOKING SOMETHING UP ===================== */
// Feedback ends with a link to the card that taught what the item tested (lesson standard E5, line 6).
// The link opens the card as a full-screen sheet over whatever is on screen. It is for looking something up
// and never a review step (P2, P16), so it shows the card complete: prompts as answered, a worked case with
// every screen one under another.

// What the learner is shown for one thing the item tested: { cardId, heading } | { text } | null.
// what = { name } | { step } | { ledger } | { portrait }
function taughtOnCard(v, T, what){
  const cards = v.cardOrder.map(v.card);
  const link = card => card ? { cardId: card.id, heading: cardHeading(v, T, card) } : null;
  const ofName = (kind, id) => cards.find(k => k.kind === kind && (k.outcome || k.family) === id);
  if(what.name) return link(ofName('meet', what.name));
  if(what.portrait) return link(ofName('portrait', what.portrait));
  if(what.ledger){
    const entry = v.ledger(what.ledger);
    return link(cards.find(k => k.ledger === entry.id) || (entry.taughtIn ? v.card(entry.taughtIn) : null));
  }
  if(what.step){
    const own = cards.find(k => k.kind === 'question' && k.step === what.step);
    if(own) return link(own);
    return { text: `Taught in ${unitLabel(v.data, v.step(what.step).unit)}.` };
  }
  return null;
}

// The learner's choice that counts as answered, for a card shown complete.
function answeredUi(T, v, card, step){
  if(card.kind === 'again') return { picked: tappableCase(T, v.caseById(card.second), card.prompt.answer, null).right, step, note: {} };
  if(card.kind === 'exception') return { picked: tappableCase(T, v.caseById(card.case), card.prompt.answer, null).right, step, note: {} };
  if(card.kind === 'lookalike') return { picked: card.prompt.answer === card.cases[0] ? 'A' : 'B', step, note: {} };
  if(card.kind === 'worked') return { picked: card.hold.prompt.answer, step, note: {} };
  return { picked: null, step, note: {} };
}
function sheetBody(v, T, card){
  if(card.kind === 'check') lessonFail(`card ${card.id}: a check cannot be opened as a sheet`);
  const ctx = ui => cardContext(v, T, card.id, ui, true);
  if(card.kind !== 'worked') return cardHtml(ctx(answeredUi(T, v, card, 0)), card);
  return Array.from({ length: card.steps.length + 1 }, (_, s) =>
    `<section class="sheetstep">${cardHtml(ctx(answeredUi(T, v, card, s)), card)}</section>`).join('');
}

function openCardSheet(v, cardId){
  const T = lessonText(v), card = v.card(cardId);
  const sheet = document.createElement('div');
  sheet.className = 'sheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.innerHTML = `<div class="pane read flush">
      <div class="topbar"><span class="m">Unit ${esc(v.unit.tag)} &middot; looking something up</span></div>
      <div class="eyebrow-row"><h1>${cardHeading(v, T, card)}</h1></div>
      <div class="lesson">${sheetBody(v, T, card)}</div>
      <div class="actbar"><button class="btn neutral" data-close-sheet>Close</button></div>
    </div>`;
  const close = () => { sheet.remove(); document.body.style.overflow = ''; };
  document.body.style.overflow = 'hidden';
  document.body.appendChild(sheet);
  on('[data-close-sheet]', close, sheet);
  sheet.querySelector('[data-close-sheet]').focus();
}
