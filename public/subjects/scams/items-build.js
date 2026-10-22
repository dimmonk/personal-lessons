// Scams: the one way a message to act on is put together (lesson standard 3, 3.9). Every message arrives in the form it comes in (a text, an email, a
// pop-up, a chat, a call), with a line before it about what you were doing when it came, and then the question of the subject's one rule
// (docs/subjects/scams/plan.md, "The rule"): what do you do: do what it says (you started it), check first through a way you already had (you did not
// start it, and it comes from a company you have an account with or a person you know), or leave it (you have neither). Only a message that wants
// something (money, a sign-in or a code, your details, your phone or computer) is asked this way; one that wants nothing is lesson 1's alone.
// A second question opens only where the rule gives it: how, when checking is right; what else, when someone known only online wants money and leaving
// it is right. Each action is scored by what it would do next. What differs between messages is the message, the best action, the way in you already
// had, what the message gave you, what each action leads to, and the line that decides it. It makes plain data and registers nothing.
//
// spec: { id, genuine ('genuine' | 'scam'), channel, request ('money' | 'login' | 'details' | 'device'), context? (what you were doing),
//   message (a message block), right ('act' | 'check' | 'leave'), say: [what doing it leads to, what checking leads to, what leaving it leads to],
//   deciding: [lineIds], reason, steps?, strand? (the topic; act-check-leave if left out), offers? (a real message that gives its own link, number or reply),
//   and when right is 'check': own (the way in you already had), theirs (what the message gave you), alt? { how, text } (a third way that is not yours: a key of
//   WAY_THEN, with an optional `then` of its own for a wrong way met only in that story; when left out, a way that looks like yours and is not: the number your phone shows for a call, or a number found by searching),
//   tellAlt? { text, then } (a wrong "What else" option for a case with no group, in place of the friend from the same group),
//   howPrompt? (the words of "How do you check?" where checking also means fixing, such as changing a password); tell? (someone known only online wants money: opens "What else do you do?" on leaving it) }
const SCAM_STRAND = "act-check-leave";
// why each way that is not yours is wrong (lesson 2 teaches these, and every "How do you check?" names them the same way)
const WAY_THEN = {
  link: "The link came with the message, so the sender decides where it goes. A copy of a real page looks the same.",
  number: "The number came with the message, so whoever answers it is on the sender’s side.",
  reply: "You would be asking the sender, who answers its own question.",
  transfer: "A transfer goes to someone the caller picked, who will say what the caller needs.",
  callerid: "The number on your screen can be changed to show any name and number.",
  badge: "An ID or badge number comes from the person who is showing it.",
  email: "The address in the message belongs to the sender, so the reply goes to the sender.",
  push: "Tapping it opens the same Approve button, one slip away from letting the stranger in.",
  page: "That page is the one the message sent you to, so its number is the sender’s too.",
  search: "Scammers buy ads and put up pages so that their page or number is the one a search shows. It is not a way you already had."
};
const WAY_SLIP = { search: null };   // a searched number is not what the message gave you, so it is a miss but not that slip
const wayHash = id => [...id].reduce((n, ch) => n + ch.charCodeAt(0), 0);
const wayOption = (how, text, extra) => {
  const slip = how in WAY_SLIP ? WAY_SLIP[how] : "their-way";
  return { id: how, text, ...(slip ? { slip } : {}), then: WAY_THEN[how] + (extra || "") };
};
// what the message gave you, read from how the option says it, when the spec does not name it (theirsHow)
const theirsHow = text => /phone shows|caller id|that called|called from|calling me/i.test(text) ? "callerid" : /link|page/i.test(text) ? "link" : /transfer|put through/i.test(text) ? "transfer" : /address|email/i.test(text) ? "email" : /reply|chat/i.test(text) ? "reply" : /notification|approve/i.test(text) ? "push" : "number";
// what doing it names when doing it is wrong: the failure on a scam; the wrong habit on a real message you did not start that offers its own link, number or
// reply (`offers`); nothing on a real message that offers no way in, where doing it is harmless
const scamActSlip = spec => spec.genuine === "scam" ? { act: "acted" } : spec.offers ? { act: "habit" } : {};
const scamAct = spec => ({ id: "act", kind: "choose", prompt: "What do you do?", from: "action", right: spec.right,
  then: { act: spec.say[0], check: spec.say[1], leave: spec.say[2] },
  slips: spec.right === "act" ? {} : scamActSlip(spec) });
// the third way when the spec names none: one that looks like a way you already had and is not, never the same move as the item's own wrong way
// (a number your phone shows for a call; a number you find by searching): the real failures S3 and S28 name
const theirsKind = spec => spec.theirsHow || theirsHow(spec.theirs);
const scamLookAlike = (spec, taken) => spec.channel === "call" && taken !== "callerid"
  ? wayOption("callerid", "Call back the number my phone shows for the call")
  : wayOption(taken === "search" ? "callerid" : "search", taken === "search" ? "The number my phone shows the message came from" : "The number I find by searching for them on my phone");
// how to check, asked only when checking is right: the way you already had, what the message gave you, and a third way that is not yours
const scamVia = spec => {
  const mine = { id: "own", text: spec.own, ok: true, then: "That is a way you already had, so the sender cannot steer where you end up." };
  const theirs = { ...wayOption(spec.theirsHow || theirsHow(spec.theirs), spec.theirs), id: "theirs" };
  const third = spec.alt ? { ...wayOption(spec.alt.how, spec.alt.text), ...(spec.alt.then ? { then: spec.alt.then } : {}) } : scamLookAlike(spec, theirs.slip ? theirsKind(spec) : "search");
  const turn = wayHash(spec.id) % 3;
  return { id: "via", kind: "choose", prompt: spec.howPrompt || "How do you check?", when: { ask: "act", is: ["check"] }, options: [[mine, theirs, third], [theirs, mine, third], [third, theirs, mine]][turn] };
};
// someone known only online wants money: leaving it is right, and the move that goes with it is telling someone you know in person
const SCAM_TELL = [
  { id: "tell", text: "Tell someone I know in person about it", ok: true, then: "Someone outside the chat can see what you cannot from inside it." },
  { id: "prove", text: "Have them prove who they are first", then: "Any proof would come from them, the same as everything else you know about them." },
  { id: "chat", text: "Keep chatting, but send nothing", then: "Every message gives them another try. The ones who lose nothing are mostly the ones who stop." },
  { id: "group", text: "Tell the friend from the same group, who knows them too", then: "That friend met them the same way you did and knows only what they were shown." }];
// the right option goes to a place set by the item's id (first, second, third or last), the others keep their order; `tellAlt` replaces the
// group friend where there is no group ({ text, then })
const scamTell = spec => {
  const [tell, ...rest] = SCAM_TELL.map(o => o.id === "group" && spec.tellAlt ? { id: "alt", ...spec.tellAlt } : o), at = (wayHash(spec.id) * 7 + spec.id.length) % 4;
  return { id: "tell", kind: "choose", prompt: "What else do you do?", when: { ask: "act", is: ["leave"] }, options: [...rest.slice(0, at), tell, ...rest.slice(at)] };
};
const scamItem = spec => ({ id: spec.id, strand: spec.strand || SCAM_STRAND, facets: { genuine: spec.genuine, channel: spec.channel, request: spec.request },
  blocks: [...(spec.context ? [{ kind: "prose", text: spec.context }] : []), spec.message],
  asks: [scamAct(spec), ...(spec.right === "check" ? [scamVia(spec)] : []), ...(spec.tell ? [scamTell(spec)] : [])],
  deciding: spec.deciding, reason: spec.reason, ...(spec.steps ? { steps: spec.steps } : {}) });
const scamLine = (id, text, extra) => ({ id, text, ...extra });
// the blocks a message is made of
const scamSms = (from, detail, lines, link) => ({ kind: "message", form: "sms", from, detail, lines, ...(link ? { link } : {}) });
const scamEmail = (from, detail, subject, lines, link) => ({ kind: "message", form: "email", from, detail, subject, lines, ...(link ? { link } : {}) });
const scamPopup = (from, detail, lines, link) => ({ kind: "message", form: "popup", from, detail, lines, ...(link ? { link } : {}) });
const scamChat = (from, detail, lines, link) => ({ kind: "message", form: "chat", from, detail, lines, ...(link ? { link } : {}) });
const scamCall = (from, detail, lines) => ({ kind: "message", form: "call", from, detail, lines });
