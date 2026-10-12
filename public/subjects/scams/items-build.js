// Scams: the one way a message to act on is put together (lesson standard 26.1, 26.1.2). Every message arrives in the form it comes in (a text, an email, a
// pop-up, a chat, a call), with a line before it about what you were doing when it came, and then two questions on one screen: what do you do (do what it
// says, check first through a way you already had, or leave it), and, only when you chose to check, how. A genuine message is judged by the action that
// suits it, never by whether it contains a request: a real invoice is paid the way you already pay, a code you just asked for is used on the page you
// are on, and a real alert is checked in your own app like a fake one. Each action is scored by what it would do next. The helper writes the asks, so the
// words of each question and the slips they name are the same in every message; what differs is the message, the best action, the way in you already
// had, what each action would lead to, and the line that decides it. It makes plain data and registers nothing.
//
// spec: { id, genuine ('genuine' | 'scam'), channel, request ('money' | 'login' | 'details' | 'device' | 'none'), context? (what you were doing),
//   message (a message block), right ('act' | 'check' | 'leave'), own (the way in you already had), theirs (the way the message offers, as a way to check),
//   offers? (a real message that gives its own link, number or reply), noWay? (a sender you have no way of your own to reach: checking can only go through the sender, so
//   leaving it is the one right action and there is no "how do you check"), say: [what doing it leads to, what checking leads to, what leaving it leads to], deciding: [lineIds], reason, steps? }
const SCAM_STRAND = "act-check-leave";
// what doing it names when doing it is wrong: the failure on a scam; the wrong habit on a real message you did not start that offers its own link, number or
// reply (`offers`); nothing on a real message that offers no way in, where doing it is harmless
const scamActSlip = spec => spec.genuine === "scam" ? { act: "acted", ...(spec.noWay ? { check: "their-way" } : {}) } : spec.offers ? { act: "habit" } : {};
// A real message that offers no way in of its own is handled normally by doing what it says or by leaving it, and checking it through a way you already had is
// as right: it is safe and costs a minute (design, principle 6). A real message that offers its own link, number or reply is checked, never followed.
const scamRight = spec => spec.genuine === "genuine" && !spec.offers && spec.right !== "check" ? [spec.right, "check"] : spec.right;
const scamAct = spec => ({ id: "act", kind: "choose", prompt: "What do you do?", from: "action", right: scamRight(spec), ...(Array.isArray(scamRight(spec)) ? { either: true } : {}),
  then: { act: spec.say[0], check: spec.say[1], leave: spec.say[2] },
  slips: spec.right === "act" ? {} : scamActSlip(spec) });
// how to check: through a way you already had, or through what the message gave (a link, a number, a reply), which is the sender's way
const scamVia = spec => {
  const mine = { id: "own", text: spec.own, ok: true, then: "That is a way you already had, so the sender cannot steer where you end up." };
  const theirs = { id: "theirs", text: spec.theirs, slip: "their-way", then: "The message gave you that, so the sender decides who answers." };
  const reply = { id: "reply", text: "Reply and check with them", slip: "their-way", then: "You would be checking with the sender, who answers its own question." };
  const turn = [...spec.id].reduce((n, ch) => n + ch.charCodeAt(0), 0) % 3;
  return { id: "via", kind: "choose", prompt: "How do you check?", when: { ask: "act", is: ["check"] }, options: [[mine, theirs, reply], [theirs, mine, reply], [reply, theirs, mine]][turn] };
};
const scamItem = spec => ({ id: spec.id, strand: SCAM_STRAND, facets: { genuine: spec.genuine, channel: spec.channel, request: spec.request },
  blocks: [...(spec.context ? [{ kind: "prose", text: spec.context }] : []), spec.message],
  asks: spec.noWay ? [scamAct(spec)] : [scamAct(spec), scamVia(spec)], deciding: spec.deciding,
  reason: Array.isArray(scamRight(spec)) ? `${spec.reason} Checking first, through a way you already had, is also safe. It costs a minute.` : spec.reason,
  ...(spec.steps ? { steps: spec.steps } : {}) });
const scamLine = (id, text, extra) => ({ id, text, ...extra });
// the blocks a message is made of
const scamSms = (from, detail, lines, link) => ({ kind: "message", form: "sms", from, detail, lines, ...(link ? { link } : {}) });
const scamEmail = (from, detail, subject, lines, link) => ({ kind: "message", form: "email", from, detail, subject, lines, ...(link ? { link } : {}) });
const scamPopup = (from, detail, lines, link) => ({ kind: "message", form: "popup", from, detail, lines, ...(link ? { link } : {}) });
const scamChat = (from, detail, lines, link) => ({ kind: "message", form: "chat", from, detail, lines, ...(link ? { link } : {}) });
const scamCall = (from, detail, lines) => ({ kind: "message", form: "call", from, detail, lines });
