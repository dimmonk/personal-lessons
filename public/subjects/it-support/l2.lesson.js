// IT Help Desk, lesson 2: Getting the story (part story, strand story). Move 2 of the nine moves: their words first, then what the desk already knows.
// Sources: research it-support.md IT17 (the A+ 220-1202 objective 4.7: listen without interrupting, open questions to narrow, restate the issue, plain
// words, do not argue, dismiss or judge), IT18 and IT14 (understand the requestor first, then search the knowledge base early and often; an
// article has an issue, an environment, a resolution and a cause), IT19 (user and technician define and diagnose the problem together; abstract
// only, so the lesson claims no more than that they work it out together). Judgement call: the three things a story holds (what they were doing,
// what they saw in their words, whether it has happened before) are my reading of IT14's "customer's context" and IT17, not a quoted list.
// Fixes after the first reviews (rulings-l1-8.md, fixes-l1-8.md): closed questions are for confirming after the story, not forbidden; a say-back never adds a fact;
// an open email proves nothing about the internet; a certificate warning also goes to security when the site was unexpected.
// Shape: a ticket that opens it, the story and the open question, saying it back with plain words, searching the knowledge base, the common error
// (starting with the fix), one worked ticket whose first guess the user's answer rules out, a first group with the deciding words marked, a second
// with none, a third mixed with lesson 1, and a check of five new questions with two calls.
FC.lesson("it-support", {
  id: "l2", part: "story", title: "Getting the story", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-23", change: "First version, built to the plan: the user's words first, open questions, saying the story back, plain words, and searching the desk's knowledge base with the fault's own words. Calls are practised as exchanges." }],
  why: [
    "The email says: \"The printer is broken. Nothing comes out. Fix please.\" Four words about the fault, and a dozen faults they could mean.",
    "Here you learn to get the story before you touch anything: let them tell it, narrow it with an open question, say it back, and search what the desk already knows."
  ],
  flow: [
    { title: "Their words first",
      show: [
        { kind: "prose", text: [
          "A user's first message is a label, not a story: \"broken\", \"slow\", \"can't get on\". The story is what they were doing, what they saw in their own words, and whether it has happened before. Get it before you try anything.",
          "Let them finish without interrupting. Then use an open question, one that cannot be answered yes or no: \"What did you see when you pressed Print?\" It narrows the problem and lets the user describe it. Yes-or-no questions have their place, but after the story, to confirm one detail: \"Does it happen every time?\" As a first reply, \"Is it plugged in?\" gets a yes or a no and little else.",
          "If the answer is still a label (\"it does not work\") or the user's own idea of the cause (\"it's the server\"), question them again, openly, until you hear what they saw: a message, a number, a moment. Never argue, brush off what they say, or blame them. What they say is the only evidence you have so far.",
          "A message can hold several problems at once. Let them finish, then find out which one is stopping their work right now. Each problem gets its own ticket, and you start with the one stopping their work.",
          "This desk's rule: when a user clicked past a browser warning on a site they did not mean to open, the ticket also goes to the desk's security team."] }
      ] },
    { title: "Say it back, in plain words",
      show: [
        { kind: "prose", text: [
          "Once you have the story, say it back in a sentence: \"So you pressed Print, it says it went to Printer 3-North, and nothing comes out on floor 2. Is that right?\" If you got something wrong, they will say so before you act on it.",
          "Use the user's words, not the desk's. Terms and abbreviations the user does not know, and slang, leave them unable to correct you. A wrong guess said as a fact (\"So the tray is empty\") sounds like an answer, and they may believe it. So does a fact the user never gave, slipped into the sentence: say back only what they told you."] }
      ] },
    { title: "Then search what the desk already knows",
      show: [
        { kind: "prose", text: [
          "The desk keeps a knowledge base: articles that earlier technicians wrote about faults they fixed. Search it early, and again as you learn more, using the words of the fault, such as the exact message on the screen and the program's name. A greeting or a deadline does not describe the fault. Neither does how the fault feels, such as \"slow\" or \"weird\".",
          "Each article says what the issue is and the environment it happened in: the kind of device, the program, the version. Read the environment line before you trust the article. One for a Windows laptop will not help on a Mac, even if the symptom is the same. You are only finding the article now. Trying its fix comes later, in the fourth move."] },
        { kind: "prose", tone: "wrong", text: [
          "Start with the usual fix: \"Have you tried turning it off and on again?\"",
          "A fix before the story is a guess. It can throw away what was on the screen, and if it works you learn nothing. A restart is a fair first try once you have the story and what changed, but not before. Get the story first, then search, then try the known fix."] }
      ] },
    { worked: "l2-w-printer" },
    { set: { items: ["l2-p-open", "l2-p-sayback", "l2-p-search", "l2-p-call"], order: "listed", support: { shown: true } } },
    { set: { items: ["l2-q-open", "l2-q-article", "l2-q-sayback", "l2-q-call"], order: "shuffle" } },
    { set: { items: ["l2-m-jargon", "l2-m-article", "l2-m-search"], order: "shuffle", mix: { from: ["l1"], share: 0.3 } } }
  ],
  check: {
    items: ["l2-k-open", "l2-k-sayback", "l2-k-article", "l2-k-call1", "l2-k-call2"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }]
  }
});
