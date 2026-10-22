// Scams, lesson 5: Your accounts (part E, the scripts that go after a sign-in or a code). Four scripts, each beside the real thing it copies (a copied
// sign-in page, a code read back, a sign-in approval you did not start, an app that wants your texts), each settled by a step of the subject's one rule
// (plan.md, "The rule"); one worked chat; three pairs; eight mixed messages on a clock with a chat that pushes; and the check: eight new messages and a call,
// 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l5", part: "E", title: "Your accounts", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "After the two reviews, judged by the subject’s one rule: the code line now reads “a code is only for you to type, never to read to anyone” (the FTC’s), since the person who asks for it is often the one who made it come; the web pages asking to read your messages, which cannot happen, are replaced by a sign-in approval you did not start and an app from an ad that asks for your texts; the buyer’s code leads to what the FTC says it is used for; a code you did not ask for from a company you deal with is checked in its app; messages that wanted nothing are replaced." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: a code or approval you did not ask for now means someone is trying to get into that account, often with your password, not that they have it (a buyer can make a code come with no password at all); what Approve does is said; where checking means putting it right (deny, then change the password), the question says so; the app that reads texts is on an Android phone, the only kind that lets an app ask." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the unrequested code is the third in ten minutes, so checking is the one right answer; a call you made to your credit union, where going along is right, is practised; the caller-ID option gets its own reason; the camera reasons read plainly." }],
  why: [
    "Some messages want your accounts: a page that copies a sign-in, a code someone wants read back, a sign-in you did not start, an app that wants your texts.",
    "You see each script beside the real thing it copies, and choose what to do."
  ],
  flow: [
    { title: "A page that copies your sign-in",
      show: [
        { kind: "pair",
          a: scamSms("Calderwood Alert", "Text message · 2:14 PM", [{ id: "s1a", text: "Your card has been locked." }, { id: "s1b", text: "Confirm your sign-in now to unlock it." }], "calderwood-secure.example/confirm"),
          b: { kind: "prose", text: "Open your bank’s app, or type its address yourself. You start the sign-in." },
          compare: "In the first, the message starts it. In the second, you do." },
        { kind: "prose", text: "A page you reach from a message can look exactly like the real one, and keep what you type. When it uses the name of an account you have, sign in your own way, never through the link." }] },
    { title: "A code read back",
      show: [
        { kind: "pair",
          a: scamCall("Fraud team", "Incoming call · 6:15 PM", [{ id: "s2a", text: "Read me the code we just texted you." }]),
          b: scamSms("Calderwood Bank", "Text message · 7:45 AM", [{ id: "s2b", text: "Your sign-in code is 702 118. Type it on the page you are on." }]),
          compare: "A real code is typed by you, on the page you opened yourself. It is never read to anyone." },
        { kind: "prose", text: "A code is only for you to type, on a page or app you opened yourself. Never read it to anyone, whatever the story: the one asking is often the one who made it come." },
        { kind: "prose", tone: "wrong", text: [
          "It is my bank on the phone, so reading them the code is fine.",
          "Your bank never needs a code read back. Hang up and call the number on your card."] }] },
    { title: "A sign-in you did not start",
      show: [
        { kind: "pair",
          a: scamPopup("Fernbrook", "On your phone · 3:10 AM", [{ id: "s3a", text: "Is this you signing in to Fernbrook? Tap Approve." }], "Approve"),
          b: scamPopup("Fernbrook", "On your phone · just after you typed your password", [{ id: "s3b", text: "Is this you signing in to Fernbrook? Tap Approve." }], "Approve"),
          compare: "The same words. Only one is a sign-in you are doing right now." },
        { kind: "prose", text: "Approve lets whoever is signing in through. If you are not signing in, someone else is trying to, often with your password: deny it, then change the password in the app, opened yourself. That is checking first: you go to the account your own way and put it right. Never approve to make the requests stop." }] },
    { title: "An app that wants your texts",
      show: [
        { kind: "pair",
          a: scamPopup("PicGlow", "On an Android phone, in an app you got from an ad", [{ id: "s4a", text: "Allow PicGlow to read your text messages?" }], "Allow"),
          b: scamPopup("Scanly", "In an app from your app store, after you tapped “Scan”", [{ id: "s4b", text: "Allow Scanly to use your camera?" }], "Allow"),
          compare: "Did it answer something you just tapped? Scanly’s did. PicGlow’s answers nothing you did." },
        { kind: "prose", text: "Allow something when it answers what you just tapped. On an Android phone, an app that reads your texts can read the codes your bank sends you; if it wants that out of nowhere, don’t allow it, and delete the app." }] },
    { worked: "w-couch" },
    { set: { items: [["p-copy-fake", "p-codeasked-real"], ["p-readback-fake", "p-reset-real"], ["p-push-fake", "p-push-real"]], order: "listed" } },
    { set: { items: ["g-close-fake", "g-code-real", "g-block-fake", "g-changed-real", "g-video-fake", "g-link-real", "g-filter-fake", "g-camera-real", "x-couch", "x-callbank"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["k-frozen-fake", "k-code-real", "k-courier-fake", "k-pw-real", "k-payment-fake", "k-camera-real", "k-session-fake", "k-newphone-real", "x-wire"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
