// Scams & Social Engineering: subject record. Revision is a real field (it used to be parsed out of an "eyebrow" label).
FC.subject('scams', {
  name: 'Scams & Social Engineering',
  rev: 3,                 // subject revision; goes up whenever this record, the key or the specimens change (lesson standard R2)
  standard: 1,            // lesson-standard version the subject's key was written to
  action: true,           // the learner acts on this subject (P26): plan cards, real cases in every drill stage, the late return, the baseline check
  blurb: 'Take a message, a call or an offer, work out what it wants from you, tell a scam from the real thing by the words in it, and know what to do next.',
  // Course order. u1 is the gate unit; u2 to u5 are the four branches, in the key's order (the order of the first
  // question's answers, which runs from the simplest branch to the largest); u6 is a fact unit on what to do once
  // something has already left your hands. All six are rebuilt. The old "Putting it all together" unit (u7) is gone: its
  // job is done by the worked cases in every unit and by the determination over the specimens (E13). See
  // docs/rebuild/scams-plan.md.
  units: ['u1', 'u2', 'u3', 'u4', 'u5', 'u6'],
  // The areas of life a case can be set in. case.setting must be one of these; case.topic carries the detail.
  // A fixed list is what makes "three settings" and "a different setting" checkable (lesson standard W5.3, V33).
  settings: ['home', 'work', 'money', 'shopping', 'relationships', 'health', 'leisure', 'government'],
  // The baseline check (E21): six cases asked once before Unit One, three of them real and three scams, in Unit One's
  // case collection (use 'baseline'). They are in no card or drill. See docs/rebuild/scams-plan.md.
  baseline: ['g-base-signin', 'g-base-tiler', 'g-base-realcode', 'g-base-parcelfee', 'g-base-callercode', 'g-base-refundshare'],
  // "Where this key stops", shown on the reference screen.
  limits: [
    { h: 'The questions cannot prove that a request is real',
      text: 'The questions name what a message, a call or an offer is asking, and how that kind of request usually works. They cannot prove that one particular request is real. Only contacting the company or the person yourself, through a number, an app or an address that was yours before the message came, can do that, and a real company never minds being contacted that way.' },
    { h: 'A match is a reason to ask, not to accuse',
      text: 'Real banks call about fraud, real couriers text about packages, and real employers ask for documents. When a real message looks like a scam, contact them yourself and ask. Treating the likeness as proof is how people end up shouting at someone who is doing their job.' },
    { h: 'How a message looks tells you nothing',
      text: 'Spelling, logos, the name of the sender, the number a call comes from, an accent and now a voice can all be copied cheaply. None of them is evidence either way, and a polished message is no comfort.' },
    { h: 'A message that only gives you a number or a link',
      text: 'Some messages say only that something is wrong, and ask you to call their number or tap their link. You cannot name those yet, and you do not need to: leave the number and the link alone, and contact the company yourself.' },
    { h: 'The questions do not judge your friends',
      text: 'They are for messages, calls and offers, and for people you know only through them. Someone you know in person, or through people you both know, is outside them.' },
    { h: 'Scams run into each other',
      text: 'One crew may start with a warm chat, move on to an investment, and come back months later offering to recover the money. The questions name the request in front of you, because the requests are what repeat while the stories change every month.' },
    { h: 'Knowing it is a scam does not always stop it',
      text: 'Money already spent, shame, being cut off from the people who would object, and real attachment keep people paying long after doubt begins. That is why people who have lost money are so often contacted again.' },
    { h: 'What is not covered',
      text: 'Blackmail and threats to share pictures, job and rental scams in depth, charity and disaster appeals, investment ads that use famous faces, and card fraud at stores and ATMs. The first question still applies to them; the names after it do not.' },
    { h: 'If it has already happened',
      text: 'Call your bank right away, at the number on your card: a payment can sometimes be stopped or recalled within hours. Speed matters more than embarrassment.' }
  ],
  // What changed at each revision (lesson standard R1). One entry for every revision from 1 to rev.
  history: [
    { rev: 1, date: '2026-10-05', change: 'First version under lesson standard 1: the whole key rewritten in plain words. The first question has five answers, listed in the order that wins when a request asks for two, including one for a message that asks for nothing. Every part of the key after it ends in a name for the real thing as well as the scams that copy it, and every question can be answered at the moment the request is made. The old Unit Seven (putting it all together) is folded into the six rebuilt units and the full determination, which has 27 specimens covering every name in the key, the real ones included.' },
    { rev: 2, date: '2026-10-05', change: 'Plain words: the lesson machinery\'s own names ("key", "route" and so on) replaced with plain ones.' },
    { rev: 3, date: '2026-10-05', change: 'American English: dollars, US institutions and payments, US spelling.' }
  ]
});
