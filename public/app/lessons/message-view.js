/* ===================== LESSONS: A MESSAGE AS IT ARRIVES ===================== */
// Lesson standard 26.1.2 (the `message` block). Pure HTML builder over segmentHtml (item-view.js): no page and no storage. The words are quoted
// material and may say anything. A message is drawn as it arrives on a phone, in the form it comes in; its link is only drawn (it is words, never
// a link that can be followed).
//   message { kind: 'message', id?, form, from, detail, lines: [Segment], subject?, link? }
//   friend  a friend writes to you about someone: who it is from and when, then their messages one under the other, each a line
//   thread  a text thread you are in: who it is with and when, then the other person's lines at the left and yours (Segment `me: true`) at the right
//   note    your own note, written after an argument: "Your note" and when, then your sentences as a note, not as messages
//   sms     a text from a sender: the sender and the time, then the text as bubbles, and the link in it
//   email   an email: the display name and the time, the subject, the body, and the link text in it
//   popup   a pop-up on a screen: its title bar (who it says it is from and where), its words, and the button in it
//   chat    a marketplace or friend chat with history: like a thread, yours at the right, and a link in it if there is one
//   call    the incoming call screen: who is calling, then what the caller says, as a transcript
//   banner  a notification banner over another task: the app, "now", one short line
// Every line is a segment: tappable, markable. A thread or a chat names who wrote each line for a reader who cannot see which side it is on.

const MESSAGE_FORMS = ['friend', 'thread', 'note', 'sms', 'email', 'popup', 'chat', 'call', 'banner'];
// which forms carry a link (the words of a link or of a button), a subject, and lines of your own
const MESSAGE_LINK_FORMS = ['sms', 'email', 'popup', 'chat', 'banner'];
const MESSAGE_YOURS = ['thread', 'chat'];

function messageLineHtml(block, seg, ctx){
  const who = MESSAGE_YOURS.includes(block.form) ? `<span class="sr">${esc(seg.me ? SAY.msgYou : block.from)}: </span>`
    : block.form === 'call' ? `<span class="sr">${esc(SAY.msgCaller)}: </span>` : '';
  return `<div class="msg-line${seg.me ? ' me' : ''}">${who}${segmentHtml(seg, ctx)}</div>`;
}
// the link of a message, or the button of a pop-up: only drawn
function messageLinkHtml(block){
  if(!block.link) return '';
  return block.form === 'popup' ? `<p class="msg-button"><span class="sr">${esc(SAY.msgButton)}: </span><span>${esc(block.link)}</span></p>`
    : `<p class="msg-link"><span class="sr">${esc(SAY.msgLink)}: </span><span>${esc(block.link)}</span></p>`;
}

function messageHtml(block, ctx){
  const subject = block.subject ? `<p class="msg-subject"><span class="sr">${esc(SAY.msgSubject)}: </span>${esc(block.subject)}</p>` : '';
  return `<div class="block-message msg-${esc(block.form)}" data-message="${esc(block.form)}"><p class="msg-head"><span class="msg-from">${esc(block.from)}</span><span class="msg-detail">${esc(block.detail)}</span></p>${subject}
    <div class="msg-lines">${block.lines.map(seg => messageLineHtml(block, seg, ctx)).join('')}</div>${messageLinkHtml(block)}</div>`;
}
