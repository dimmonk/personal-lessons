// Scams, lesson 4: Your device (part D, the scripts that go after your phone or computer). Three scripts, each beside the real thing it copies, with the
// line a real sender never says and the step of the subject's one rule (plan.md, "The rule") that settles it; one worked pop-up; three pairs; eight mixed
// messages on a clock with a call that pushes; and the check: eight new messages and another call, 20 seconds each, nothing shown until the end.
FC.lesson("scams", {
  id: "l4", part: "D", title: "Your device", rev: 4, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built from the plan for Scams. Not tried on a phone yet." },
    { rev: 2, date: "2026-10-22", change: "After the two reviews, judged by the subject’s one rule: a pop-up or caller from nobody you deal with is left (no way to check is offered for it), one using the name of your phone company is checked on the number on your bill; messages that wanted nothing are replaced by real ones that want something (an update you started, a carrier update to check, a free trial to leave); the refund call’s reason is the one the FTC gives; outcomes that could not happen (a banner installing an app, a page reading what you type) are replaced; the replies that hold off on a call now stay on the line." },
    { rev: 3, date: "2026-10-22", change: "Round 2 of the reviews: a pop-up using the name of a security program you pay for is practised (check in its own app); the printer driver comes from the maker’s site at the address on the box; the phone company’s text is a price change, not a settings update by link; real messages no longer always echo you, and one scam does; what pressing Allow does is said, and why a file you asked for is safe enough; the app that reads texts is said to be on Android." },
    { rev: 4, date: "2026-10-22", change: "Round 3 of the reviews: the real Kestrel call is one you made; the mug scam that claims you asked says you had not, on an Android phone; the caller-ID option now gets its own reason." }],
  why: [
    "Some messages want your phone or computer itself: a pop-up that tells you to call, a call that wants to see your screen, a file nobody expected.",
    "You see each script beside the real thing it copies, and choose what to do."
  ],
  flow: [
    { title: "A warning that tells you to call",
      show: [
        { kind: "pair",
          a: scamPopup("Security alert", "On a web page", [{ id: "s1a", text: "Warning: your computer has a virus!" }, { id: "s1b", text: "Call Security Desk at 1-555-0147 now." }], "Call now"),
          b: scamBanner("Your security program", "On your computer", [{ id: "s1c", text: "Weekly scan finished. No threats found." }]),
          compare: "One tells you to call a number. The other only tells you what your own program did, and wants nothing." },
        { kind: "prose", text: "A real security pop-up never tells you to call a phone number. Whoever answers is nobody you have an account with, so the rule says leave it: close the page." },
        { kind: "prose", tone: "wrong", text: [
          "I called them myself, so I know who I am talking to.",
          "Calling the number a pop-up gave you is not starting it yourself. The pop-up chose who answers."] }] },
    { title: "A call about your computer, or a refund",
      show: [
        { kind: "pair",
          a: scamCall("Tech Care billing", "Incoming call · 3:30 PM", [{ id: "s2a", text: "You overpaid $300." }, { id: "s2b", text: "Open a website so I can see your screen and send it back." }]),
          b: scamCall("Kestrel Mobile", "You called · 2:05 PM", [{ id: "s2c", text: "Kestrel Mobile, this is Jo. How can I help?" }]),
          compare: "Who started it? In the real call, you did: you called the number on your bill." },
        { kind: "prose", text: "Real tech companies won’t call you first about a problem with your computer, and nobody sending you a refund needs to see your screen. Pressing Allow on the page a caller sends you to hands him your screen. If the caller uses the name of a company you deal with, hang up and call the number on your bill. If not, just hang up." }] },
    { title: "A file or an app nobody expected",
      show: [
        { kind: "pair",
          a: scamSms("Marcy", "Text message · 7:40 PM", [{ id: "s3a", text: "Look at these photos from the party!" }], "photo-party.example/view"),
          b: scamSms("Rosa (sister)", "Text message · 5:10 PM, after you asked at lunch", [{ id: "s3b", text: "Here is Mom’s soup recipe." }], "recipes.example/soup.pdf"),
          compare: "Did you request it? Rosa’s you did, at lunch. Marcy is nobody you know." },
        { kind: "prose", text: "Open a file or install an app only when you requested it. If someone you know sends one you did not request, check with them on the number you have, because their account can be taken over. If you do not know the sender, leave it. The file you requested, from the person you requested it from, in the form you expected, is safe enough to open." }] },
    { worked: "w-popup" },
    { set: { items: [["p-popup-fake", "p-update-real"], ["p-refund-fake", "p-help-real"], ["p-photos-fake", "p-recipe-real"]], order: "listed" } },
    { set: { items: ["g-mug-fake", "g-driver-real", "g-security-fake", "g-carrier-real", "g-share-fake", "g-photos-real", "g-battery-fake", "g-trial-real", "x-refund"], order: "shuffle", seconds: 20 } }
  ],
  check: {
    items: ["k-blocked-fake", "k-app-real", "k-secure-fake", "k-bankapp-real", "k-video-fake", "k-shop-real", "k-hale-fake", "k-invite-real", "x-desk"],
    feedback: "at-end", seconds: 20, order: "shuffle",
    pass: [{ slip: "acted", max: 0 }, { slip: "their-way", max: 0 }, { where: { genuine: "genuine" }, wrong: { max: 1 } }]
  }
});
