// Scams: the other ways a question is put together, beside the one for a message to act on (items-build.js). Each helper writes plain data and registers
// nothing; what differs between two questions is the message, the right answer, and the lines that explain it.
//
//   wantItem  lesson 1: say what it wants, then (when it wants something) tap the line that wants it (money, a sign-in or a code, your details, your phone or
//             computer, or nothing). spec: { id, strand?, genuine, channel, kind, context?, message, line (the id of the line that wants it, none when
//             kind is 'none'), reason, steps? }
//   wayItem   lesson 2: how would you check this message, which you did not start and which comes from a company you have an account with or a person you
//             know. spec: { id, strand?, genuine, channel, request, context?, message, own (a way you already had), wrong: [{ how, text }, ...] (each a key of
//             WAY_THEN: what the message gave, or a way that is not yours, such as a number a web search shows),
//             reason, deciding?, steps? }
//   exItem    a call or chat whose pressure rises each time the learner holds off. spec: { id, strand, channel ('call' | 'chat'), request, context, prompt,
//             from, detail, turns: [{ lines: [text], push, give, hold?, leave }], gave, left, reason }
const WANT_NAME = { money: "money", login: "a sign-in or a code", details: "your details", device: "your phone or computer", none: "nothing" };
const WANT_KINDS = Object.keys(WANT_NAME);
// what the right pick means for what you do next (the first question of the way of thinking, handing on to the second)
const WANT_NEXT = {
  money: "It wants money: a payment, a fee, a transfer, gift cards. Whether to pay depends on whether you started it.",
  login: "It wants a sign-in or a code. Anyone who has either can get into your account.",
  details: "It wants your details, such as an address, a birthday or a number that is yours. They are worth money to the wrong person.",
  device: "It wants your phone or computer: an app to install, a file to open, or a look at your screen.",
  none: "It wants nothing. It only tells you something, so there is nothing to give and nothing to do."
};
const wantThen = right => Object.fromEntries(WANT_KINDS.map(k => [k, k === right ? WANT_NEXT[right] : `It does not want that. It wants ${WANT_NAME[right]}.`]));
const wantItem = spec => ({
  id: spec.id, strand: spec.strand || "want", facets: { genuine: spec.genuine, channel: spec.channel, request: spec.kind },
  blocks: [...(spec.context ? [{ kind: "prose", text: spec.context }] : []), spec.message],
  asks: [
    { id: "kind", kind: "choose", prompt: "What does it want?", from: "want", right: spec.kind, then: wantThen(spec.kind) },
    { id: "line", kind: "tap", prompt: "Tap the line that wants it.", none: "None of them: it wants nothing", right: spec.kind === "none" ? "none" : [spec.line],
      when: { ask: "kind", is: WANT_KINDS.filter(k => k !== "none") } }],
  deciding: spec.kind === "none" ? [] : [spec.line], reason: spec.reason, ...(spec.steps ? { steps: spec.steps } : {}) });

// (the ways that are not yours and why, WAY_THEN, are written once in items-build.js)
const wayItem = spec => {
  const mine = { id: "own", text: spec.own, ok: true, then: "That is a way you already had, so the sender cannot steer where you end up." };
  const theirs = spec.wrong.map(w => wayOption(w.how, w.text));
  const all = [mine, ...theirs], turn = wayHash(spec.id) % all.length;
  return { id: spec.id, strand: spec.strand || "own-way", facets: { genuine: spec.genuine, channel: spec.channel, request: spec.request },
    blocks: [...(spec.context ? [{ kind: "prose", text: spec.context }] : []), spec.message],
    asks: [{ id: "via", kind: "choose", prompt: spec.prompt || "How do you check it?", options: [...all.slice(turn), ...all.slice(0, turn)] }],
    deciding: spec.deciding || [], reason: spec.reason, ...(spec.steps ? { steps: spec.steps } : {}) };
};

// A call or chat in which the other side pushes harder each time the learner holds off. Every turn offers giving in, holding off (not on the last turn)
// and ending it; the order of the three changes from one turn to the next so the right reply is not always last.
const EX_TURNS = ["one", "two", "three", "four"];
const exItem = spec => {
  const last = spec.turns.length - 1;
  const turns = Object.fromEntries(spec.turns.map((t, n) => {
    const opts = [{ id: `give${n}`, text: t.give, end: "gave" }, ...(n < last ? [{ id: `hold${n}`, text: t.hold, goto: EX_TURNS[n + 1] }] : []), { id: `leave${n}`, text: t.leave, end: "left" }];
    const turn = (wayHash(spec.id) + n) % opts.length;
    return [EX_TURNS[n], { lines: t.lines.map((text, k) => ({ id: `${spec.id}-${n}${k}`, text })), push: t.push, options: [...opts.slice(turn), ...opts.slice(0, turn)] }];
  }));
  return { id: spec.id, strand: spec.strand, facets: { genuine: "scam", channel: spec.channel, request: spec.request },
    blocks: [{ kind: "prose", text: spec.context }],
    asks: [{ id: "call", kind: "exchange", prompt: spec.prompt, form: spec.channel, from: spec.from, detail: spec.detail, start: "one", turns,
      ends: { gave: { ok: false, slip: "acted", then: spec.gave }, left: { ok: true, then: spec.left } } }],
    deciding: [], reason: spec.reason };
};
// a banner: one short line over another task
const scamBanner = (from, detail, lines) => ({ kind: "message", form: "banner", from, detail, lines });
