// Psychology: the one way an account is put together (lesson standard 3, 3.9). Every account arrives as a message in one of three forms (a
// friend's message about someone, a text thread you are in, your own note after an argument), with the checklist of what counts as what
// they did in a panel, and these asks in this order: tap the line (or lines) that say what the person did, or say that none does; then, on some,
// say it again without the word (pick the fair line, or write it and compare it with a model), or, when the account says nothing the person did,
// pick the next step. The helper writes the asks, so the words of each ask and the slips they name are the same in every account; what differs
// is the message, the lines that say what was done, and the reasons. It makes plain data and registers nothing.
//
// spec: { id, kind ('ordinary' | 'word' | 'unclear' | 'control'), form, from, detail, who (the person the account is about, as the prompt names
//   them), lines, act (the ids of the lines that say what they did, or 'none'), reason, need?, steps?, deciding? (the lines marked after the answer,
//   when none is the answer), say?: { prompt, ok, kept, soft, guess, order } | write?: { prompt, model } | next?: true }
const PSY_STRAND = "what-they-did";
// a line that is not something the person did says what it is instead; tapping it names that as a slip
const PSY_LINE = {
  guess: { slip: "took-guess", note: "That is a guess about why, not something they did." },
  feeling: { slip: "took-feeling", note: "That is how it felt, not something they did." },
  label: { slip: "took-label", note: "That is a word or a verdict about the person, not something they did." },
  teller: { slip: "took-teller", note: "That is about the one telling it, not about the person the account is about." },
  around: { slip: "took-around", note: "That is background, not something they did." }
};
// a line of the account: what the person did ('act'), or one of the kinds above; `extra` may give a line of its own (me: true in a thread, a note)
const psyLine = (id, text, kind, extra) => ({ id, text, ...(kind === "act" ? {} : PSY_LINE[kind]), ...extra });

const PSY_WORDS = ["", "one", "two", "three"];
// the fair way to say it again, and three that are not: the label kept, the label made softer, a guess about why
const PSY_SAY_WRONG = {
  kept: { slip: "kept-label", then: "That still says what kind of person they are. It does not say what they did." },
  soft: { slip: "softened", then: "A softer word is still a word for the person. It does not say what they did." },
  guess: { slip: "swapped-guess", then: "That is a guess about why they did it. The account does not say why." }
};
function psySayAsk(say) {
  const text = { ok: say.ok, kept: say.kept, soft: say.soft, guess: say.guess };
  const options = say.order.map(id => id === "ok" ? { id, text: text.ok, ok: true } : { id, text: text[id], slip: PSY_SAY_WRONG[id].slip, then: PSY_SAY_WRONG[id].then });
  return { id: "say", kind: "choose", prompt: say.prompt, options };
}
// nothing in the account says what they did: finding out comes first; the other steps need something to work from
const psyNextAsk = () => ({ id: "next", kind: "choose", prompt: "What is the best next step?", from: "step", right: "find-out",
  then: { watch: "Watching helps once you know what to watch for. Nothing here says what they did.",
    limit: "A limit needs something they did to name. Nothing here names one.",
    help: "Outside help is for when someone is not safe. This account does not say that." },
  slips: { watch: "jumped-ahead", limit: "jumped-ahead", help: "jumped-ahead" } });

function psyItem(spec) {
  const act = spec.act === "none" ? [] : spec.act;
  const tap = { id: "act", kind: "tap", none: "Nothing here says what they did", right: act.length ? act : "none",
    prompt: act.length > 1 ? `Tap the ${PSY_WORDS[act.length]} lines that say what ${spec.who} did.` : `Tap the line that says what ${spec.who} did.`,
    ...(act.length > 1 ? { pick: act.length } : {}) };
  const more = spec.say ? [psySayAsk(spec.say)] : spec.write ? [{ id: "say", kind: "text", prompt: spec.write.prompt, model: spec.write.model }] : spec.next ? [psyNextAsk()] : [];
  return {
    id: spec.id, strand: PSY_STRAND, facets: { account: spec.kind },
    blocks: [{ kind: "message", form: spec.form, from: spec.from, detail: spec.detail, lines: spec.lines }, { kind: "panel", rules: ["act"] }],
    asks: [tap, ...more],
    ...(spec.steps ? { steps: spec.steps } : {}),
    has: act.length ? { "act-did": act[0], "act-seen": act[act.length - 1] } : { "act-did": null, "act-seen": null },
    deciding: spec.deciding || act, reason: spec.reason,
    ...(spec.need ? { need: spec.need } : {})
  };
}
