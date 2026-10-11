/* ===================== LESSONS: A MESSAGE AS IT ARRIVES ===================== */
// Lesson standard 26.1.2 (the `message` block), in the three forms step 7 builds. Pure HTML builder over segmentHtml (item-view.js): no page
// and no storage. The words are quoted material and may say anything.
//   message { kind: 'message', id?, form: 'friend' | 'thread' | 'note', from, detail, lines: [Segment] }
//   friend  a friend writes to you about someone: who it is from and when, then their messages one under the other, each a line
//   thread  a text thread you are in: who it is with and when, then the other person's lines at the left and yours (Segment `me: true`) at the right
//   note    your own note, written after an argument: "Your note" and when, then your sentences as a note, not as messages
// Every line is a segment: tappable, markable. A thread names who wrote each line for a reader who cannot see which side it is on.

const MESSAGE_FORMS = ['friend', 'thread', 'note'];

function messageLineHtml(block, seg, ctx){
  const who = block.form === 'thread' ? `<span class="sr">${esc(seg.me ? SAY.msgYou : block.from)}: </span>` : '';
  return `<div class="msg-line${seg.me ? ' me' : ''}">${who}${segmentHtml(seg, ctx)}</div>`;
}

function messageHtml(block, ctx){
  return `<div class="block-message msg-${esc(block.form)}" data-message="${esc(block.form)}"><p class="msg-head"><span class="msg-from">${esc(block.from)}</span><span class="msg-detail">${esc(block.detail)}</span></p>
    <div class="msg-lines">${block.lines.map(seg => messageLineHtml(block, seg, ctx)).join('')}</div></div>`;
}
